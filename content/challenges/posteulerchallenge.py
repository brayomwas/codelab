import os, sys
from projecteuler import *
sys.path.insert(1,'content/wordpress')
from postchallenge import *


#Import Euler Algorithm Problems and Export to WordPress

## Authenticate WordPress Credentials
username = input("Enter your username: ")
password = input("Enter your password: ")

domain="box5880.temp.domains/~chaptrgl/codelab" # If different: domain = input(" Enter your Wordpress Website Domain(e.g. example.com): ")'''
wp = wpclient(username, password) #pass domain argument if different from the stated

## Import Project Euler Algorithm Problems
start = int(input("From what problem/challenge would you like to start: "))
finish = int(input("At what problem/challenge would you like to finish: "))

challenges = geteulerchallenge(geteulerlinks(start, finish))

## Export Project Euler Problems to WordPress as Challenges
count = 0
for i in range(len(challenges)):
  count += 1
  content = str()

  for paragraph in challenges[i][1]:
    paragraph = '<p>' + paragraph + '</p>\n'
    content = content + paragraph

  title = challenges[i][0]
  content = content + '<b>The following challenge has been adapted from Project Euler. <a href="https://projecteuler.net/" target="_blank">Visit their site for more challenges!</a> </b>'

  tags = ["project euler", "algorithms"]
  categories = ["General Python", "Data Algorithms"]

  postwpchallenge(title, content, tags, categories, wp)

print("Total Challenges Added: ", count)