from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import products
app = FastAPI()
origins = ['http://localhost:3001'] # origin of react-app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(products.router)
