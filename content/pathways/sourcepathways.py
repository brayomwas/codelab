import sys, os
import pandas as pd
sys.path.insert(1,'content/googleapi')
from googlesheets import getsheetdata
from googlefileID import getsheetid


SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1OI3mqi4OhZ6MQlmuNwAbQesXhIkctfc-IhRilYOtTQE/edit?usp=sharing"
SPREADSHEET_ID = getsheetid(SPREADSHEET_URL)
RANGE_NAME = 'Pathways!A1:F101'

data = pd.DataFrame(getsheetdata(SPREADSHEET_ID,RANGE_NAME))
data.to_json(path_or_buf="content/pathways/pathways.json", orient="split")
print("Export Complete")