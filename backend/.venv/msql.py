import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="pass@123",
 database='items'
)

def query(query):
    cursor=mydb.cursor(buffered=True)
    cursor.execute(query)
    return cursor
