from fastapi import APIRouter,Query,status
import database
from typing import Optional,List
router = APIRouter(tags=["products"])

@router.get('/api/v1/products',status_code=status.HTTP_200_OK)
def get_all_products(limit: Optional[int] = Query(10), offset:Optional[int] = Query(0)) -> List[dict]: 
  products = []
  amazon_db = database.get_mongo_db()
  products_coll = amazon_db['products_coll']
  docs = products_coll.find({})
  for doc in docs:
    products.append({'_id': str(doc['_id'])
                    , 'title': doc['title']
                    , 'description': doc.get('description') 
                    , 'rating': doc['rating']
                    , 'price': doc['price']
                    , 'image_url': doc['image_url']})
  return products