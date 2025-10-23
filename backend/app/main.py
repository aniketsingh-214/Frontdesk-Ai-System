from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import ai_agent, supervisor, requests
from app.database import Base, engine

app = FastAPI(title="Frontdesk AI Supervisor")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(ai_agent.router, prefix="/ai", tags=["AI Agent"])
app.include_router(supervisor.router, prefix="/supervisor", tags=["Supervisor"])
app.include_router(requests.router, prefix="/requests", tags=["Requests"])

@app.get("/")
def root():
    return {"message": "Welcome to Frontdesk AI Supervisor Backend"}
