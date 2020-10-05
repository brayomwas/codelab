import re
import json
import requests
import warnings
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
warnings.filterwarnings(action="ignore")


print("""Details to be scraped: 
        Individual Details: Title, Description, Instructors, Enrolled Students, Actual Rating
        General Details: Language, Platform, Pathway, Step, Course URL""")


#Udemy Scraper – Extract Course Info from Udemy Courses
def getudemytitle(soup):
    "Extract Course Title from Soup"

    title_text = soup.title.text
    title = re.findall("(.+) \| Udemy", title_text)[0]
    
    return title


def getudemydescription(soup):
    "Extract Description from Soup"
    
    description_text = str(soup.find("div", {"data-purpose":"lead-headline"}))
    description_list = re.findall("\\n(.+)\\n", description_text)
    description = description_list[0]

    return description


def getudemyenrolled(soup):
    "Extract Enrolled Number from Soup"
    
    enrolled_text = str(soup.find("div", {"data-purpose":"enrollment"}))
    enrolled_list = re.findall("([0-9,]+) students", enrolled_text)
    enrolled = int(re.sub(",","", enrolled_list[0]))

    return enrolled


def getudemyinstructors(soup):
    "Extract Instructor(s) from Soup"

    instructor_text = str(soup.find("div", {"data-purpose":"instructor-name-top"}))
    instructor_list = re.findall("<span>(.+)</span></a></span>", instructor_text)

    if len(instructor_list) == 0:
        instructor_list = re.findall('target="_blank">(.+)</a></span></div>', instructor_text)
        instructor = instructor_list[0]
    else:
        instructor = instructor_list[0]

    return instructor


def getudemyrating(soup):
    '''Extract Review Count and Overall Rating from Soup
    Calculate Adjusted Rating – Add 1 Positive and 1 Negative Rating
    Return All 3 Data Points Individually'''
    
    rating_text = str(soup.find("div", {"data-purpose":"rating"}))
    rating = float(re.findall("Rating: ([0-9\.]+) out of 5", rating_text)[0])
    
    reviews_list = re.findall("([0-9,]+) ratings",rating_text)
    reviews_str = str(reviews_list[0])
    reviews = int(re.sub(",","", reviews_str))
    
    total_rating = (reviews * rating) + 1 + 5 #add one negative and one positive review
    actual_rating = round(total_rating/(reviews + 2), 3) #compute adjusted rating

    return actual_rating


def getudemycourse(url):
    '''Get all course details from the url: 
    Title, Description, Instructors, Enrolled, Ratings, Reviews,
    Actual Rating, Price Status, Original Price, Sale Price
    Returns a list of all details in the order above'''
    
    response = requests.get(url)
    html_data = response.text
    soup = BeautifulSoup(html_data, "html")
    
    title, description = getudemytitle(soup), getudemydescription(soup)
    instructors, enrolled = getudemyinstructors(soup), getudemyenrolled(soup)
    actual_rating = getudemyrating(soup)
    
    
    return [title, description, instructors, enrolled, actual_rating]


#Coursera Scraper – Extract Course Info from Coursera Courses
def getcourseratitle(soup):
    "Extract Course Title from Soup"
    
    title_soup = str(soup.title.text)
    title = re.findall("(.+) \| Coursera", title_soup)[0]

    return title


def getcourseradescription(soup):
    "Extract Description from Soup"
    
    description_soup = str(soup.find("div", {"class":"content-inner"}))
    description_text = re.findall('<div class="content-inner"><p>(.+)</p></div>', description_soup)

    if len(description_text) == 0:
        description_soup = str(soup.find("div", {"class":"description"}))
        description = re.findall('<div class="description">(.+)</div></div>', description_soup)[0]
    else:
        description = description_text[0]

    return description


def getcourserainstructor(soup):
    "Extract Instructor(s) from Soup"
    
    instructor_soup = str(soup.find("h4", {"class":"headline-4-text bold rc-Partner__title"}))
    instructor = re.findall('rc-Partner__title">(.+)</h4>', instructor_soup)[0]
    
    return instructor


def getcourseraenrolled(soup):
    "Extract Enrolled from Soup"
    
    enrolled_soup = str(soup.find("div", {"class":"rc-ProductMetrics"}))
    enrolled_text = re.findall("<span><span>(.+)</span> recent views</span>", enrolled_soup)[0]
    enrolled = int(re.sub(",", "", enrolled_text))//10

    return enrolled


def getcourserarating(soup):
    "Extract Actual Rating from Soup"
    
    rating_soup = str(soup.find("div", {"class":"rc-ExpertiseTooltip"}))

    if rating_soup == "None":

        rating_soup = str(soup.find("div", {"class":"_1srkxe1s XDPRating"}))

        rating_text = re.findall('([0-9.]+)<div class="screenreader-only">stars', rating_soup)[0]
        rating = float(rating_text)

        review_text = re.findall('([0-9,]+) ratings', rating_soup)[0]
        reviews = int(re.sub(",", "", review_text))

    else:
        rating_text = re.findall("([0-9.]+)/5", rating_soup)[0]
        rating = float(rating_text)

        review_text = re.findall("([0-9,]+) Rating", rating_soup)[0]
        reviews = int(re.sub(",", "", review_text))

    total_rating = (reviews * rating) + 1 + 5 #add one negative and one positive review
    actual_rating = round(total_rating/(reviews + 2), 3) #compute adjusted rating

    return actual_rating


def getcourseracourse(url):
    '''Get all course details from the url: 
    Title, Description, Instructors, Enrolled, Actual Rating.
    Returns a list of all details in the order above'''
    
    response = requests.get(url)
    html_data = response.text
    soup = BeautifulSoup(html_data, "html")
    
    title, description = getcourseratitle(soup), getcourseradescription(soup)
    instructors, enrolled = getcourserainstructor(soup), getcourseraenrolled(soup)
    actual_rating = getcourserarating(soup)
    
    return [title, description, instructors, enrolled, actual_rating]


#Import Course Recs CSV for scraping. Columns: Platform, Language, Pathway, Steps/Module, Course Link
recs = pd.read_csv("c/Users/cyrilmichino/Documents/GitHub/codelab/course-recs/course-recs.csv")
recs = recs.rename({"Step/Module":"Step"}, axis=1)

#Split Course Recs List based on Platform – Udemy or Coursera
udemy = recs[recs.Platform == "Udemy"]
coursera = recs[recs.Platform == "Coursera"]

#Create lists for scraped content
courses, errors = list(), list() #error list will take in courses that can't be scraped


#Scrape All Udemy Courses
for i in range(udemy.shape[0]):   
    
    try:
        course = [udemy.Platform.iloc[i], udemy.Language.iloc[i], udemy.Pathway.iloc[i], udemy.Step.iloc[i], udemy.Course.iloc[i]]
        course_detail = getudemycourse(udemy.Course.iloc[i])
    
    except:
        errors.append(udemy.Course.iloc[i])
    
    for i in course_detail:
        course.append(i)

    courses.append(course)

#Scrape All Coursera Courses
for i in range(coursera.shape[0]):   
    
    try:
        course = [coursera.Platform.iloc[i], coursera.Language.iloc[i], coursera.Pathway.iloc[i], coursera.Step.iloc[i], coursera.Course.iloc[i]]
        course_detail = getcourseracourse(coursera.Course.iloc[i])
    
    except:
        errors.append(coursera.Course.iloc[i])
    
    for i in course_detail:
        course.append(i)

    courses.append(course)


print(len(courses), len(errors))

#Convert scraped course list to a dataframe
df_courses = pd.DataFrame(courses)

#Rename all dataframe columns
columns = ["platform", "language", "pathway", "step", "link", "title", "description", "instructors", "enrolled", "actual_rating"]
col_dict = dict()

for i in range(len(columns)):
    col_dict[i] = columns[i]

df_courses = df_courses.rename(columns=col_dict)

#Export courses scraped into a JSON File
df_courses.to_json(path_or_buf="courses.json", orient="split")


