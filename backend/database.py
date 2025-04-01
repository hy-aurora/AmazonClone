db_password = "z65J39A7RVqrRBtX"

from pymongo import MongoClient
mongo_db_url = f'mongodb+srv://ssdteaches:{db_password}@cluster0.k44vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

client = MongoClient(mongo_db_url)
amazon_db = client['amazon_db']

def get_mongo_db():
  return amazon_db
