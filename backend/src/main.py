from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from src.router import router

app = FastAPI()
app.include_router(router, prefix="/cryptocurrencies", tags=["crypto"])

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}