import re
import requests
from bs4 import BeautifulSoup


#Scrape Euler Problem to Output a List with Problem Titles and Descriptions
def getsoup(url):
  "Scrape web page and get the Beautiful Soup object"
  
  response = requests.get(url)
  html_data = response.text
  
  return BeautifulSoup(html_data, features="lxml")


def geteulertitle(soup):
  "Extract web page title from Beautiful Soup object"
  
  title = str(soup.find_all("h2"))
  
  return str(re.findall("<h2>(.+)</h2>", title)[0])


def geteulerdescription(soup):
  "Extract challenge description from Euler Problem web page"
  
  refresh = "<p>The page has been left unattended for too long and that link/button is no longer active. Please refresh the page.</p>"
  text = list(soup.find_all("p"))
  paragraphs = list()

  for i in text:
    if str(i) != refresh:
      paragraph = re.findall("<p>(.+)</p>", str(i))
      if len(paragraph) > 0:
        paragraphs.append(paragraph[0])
      else:
        print("Paragraph Error")

  return paragraphs


def geteulerlinks(start, finish, links = list(), base = "https://projecteuler.net/problem="):
  "Output a list if all Euler problems to be scraped"

  for i in range(start,finish+1):
    links.append(base + str(i))

  return links


def geteulerchallenge(links, content=list()):
  "Scrape euler challenges content and save into a list"
  
  for url in links:
    #Scrape individual challenge pages to get title and description
    soup = getsoup(url)
    title = geteulertitle(soup)
    description = geteulerdescription(soup)

    content.append([title, description])

  return content


"""start = int(input("From what problem/challenge would you like to start: "))
finish = int(input("At what problem/challenge would you like to finish: "))

challenges = geteulerchallenge(geteulerlinks(start, finish))

print(challenges)"""