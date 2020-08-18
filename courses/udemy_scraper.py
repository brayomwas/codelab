import re
import json
import requests
import pandas as pd
from bs4 import BeautifulSoup

def gettitle(soup):
    "Extract Course Title from Soup"

    title_text = soup.title.text
    title_list = re.findall("(.+) \| Udemy", title_text)
    title = title_list[0]
    
    return title


def getdescription(soup):
    "Extract Description from Soup"
    
    description_text = str(soup.find("div", {"data-purpose":"lead-headline"}))
    description_list = re.findall("\\n(.+)\\n", description_text)
    description = description_list[0]

    return description


def getenrolled(soup):
    "Extract Enrolled Number from Soup"
    
    enrolled_text = str(soup.find("div", {"data-purpose":"enrollment"}))
    enrolled_list = re.findall("([0-9,]+) students", enrolled_text)
    enrolled = int(re.sub(",","", enrolled_list[0]))

    return enrolled


def getinstructors(soup):
    "Extract Instructor(s) from Soup"

    instructor_text = str(soup.find("div", {"data-purpose":"instructor-name-top"}))
    instructor_list = re.findall("<span>(.+)</span></a></span>", instructor_text)

    if len(instructor_list) == 0:
        instructor_list = re.findall('target="_blank">(.+)</a></span></div>', instructor_text)
        instructor = instructor_list[0]
    else:
        instructor = instructor_list[0]

    return instructor


def getratings(soup):
    '''Extract Review Count and Overall Rating from Soup
    Calculate Adjusted Rating – Add 1 Positive and 1 Negative Rating
    Return All 3 Data Points Individually'''
    
    rating_text = str(soup.find("div", {"data-purpose":"rating"}))
    rating_list = re.findall("Rating: ([0-9\.]+) out of 5", rating_text)
    rating = float(rating_list[0])
    
    reviews_list = re.findall("([0-9,]+) ratings",rating_text)
    reviews_str = str(reviews_list[0])
    reviews = int(re.sub(",","", reviews_str))
    
    total_rating = (reviews * rating) + 1 + 5 #add one negative and one positive review
    actual_rating = round(total_rating/(reviews + 2), 3) #compute adjusted rating

    return rating, reviews, actual_rating


def getprice(soup):
    "Extract Price Details from Soup"

    price_text = str(soup.find("div", {"data-purpose":"price-text-container"}))

    if price_text != "None":
        price = "Paid"

        original_price_str = re.findall("Original Price</span><span><s><span>\$([0-9.]+)", price_text)[0]
        original_price = float(re.sub(",","", original_price_str))

        sale_price_str = re.findall("Current price</span><span><span>\$([0-9.]+)", price_text)[0]

        if sale_price_str != "None":
            sale_price = float(re.sub(",","", sale_price_str))

        else:
            sale_price = original_price

    else:
        price, sale_price, original_price = "Free", 0, 0

    return price, original_price, sale_price


def getcourse(url):
    '''Get all course details from the url: 
    Title, Description, Instructors, Enrolled, Ratings, Reviews,
    Actual Rating, Price Status, Original Price, Sale Price
    Returns a list of all details in the order above'''
    
    response = requests.get(url)
    html_data = response.text
    soup = BeautifulSoup(html_data, "html")
    
    title, description = gettitle(soup), getdescription(soup)
    instructors, enrolled = getinstructors(soup), getenrolled(soup)
    
    rating, reviews, actual_rating = getratings(soup)
    price, original_price, sale_price = getprice(soup)
    
    
    return [title, description, instructors, enrolled, rating, reviews, actual_rating, price, original_price, sale_price]