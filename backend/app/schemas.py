from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class HelpRequestCreate(BaseModel):
    question: str

class HelpRequestResponse(BaseModel):
    id: int
    question: str
    answer: Optional[str]
    status: str
    created_at: datetime
    resolved_at: Optional[datetime]

    class Config:
        orm_mode = True
