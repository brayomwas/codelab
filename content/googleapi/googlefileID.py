import re


def getdocid(url):
  "Get the document unique ID from the the unique document url"
  
  #clear out all the domain details
  doc_id = str(re.findall("https://docs.google.com/document/d/(.+)", url)[0])

  #remove url queries from unique id
  if "/" in doc_id:
    return str(re.findall("(.+)/.+", doc_id)[0])
  
  #return id if doc_id has no queries
  else:
    return doc_id


def getsheetid(url):
  "Get the document unique ID from the the unique document url"
  
  #clear out all the domain details
  sheet_id = str(re.findall("https://docs.google.com/spreadsheets/d/(.+)", url)[0])

  #remove url queries from unique id
  if "/" in sheet_id:
    return str(re.findall("(.+)/.+", sheet_id)[0])
  
  #return id if sheet_id has no queries
  else:
    return sheet_id


'''file_type = input("Enter the file type (Sheet/Doc): ").lower()

if file_type == "doc":
  url = input("Enter Google Doc URL: ")
  print(getdocid(url))

elif file_type == "sheet":
  url = input("Enter Google Sheet URL: ")
  print(getsheetid(url))

else:
  print("Invalid File Type")'''
