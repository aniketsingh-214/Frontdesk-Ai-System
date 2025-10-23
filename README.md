# 🧠 Frontdesk AI Supervisor — Human-in-the-Loop System

### 🚀 Overview

This project is a simulation of a **Human-in-the-Loop AI Supervisor System**, designed for **Frontdesk’s engineering test**.

It demonstrates how an **AI agent** can handle customer queries, intelligently **escalate to a human supervisor** when it doesn’t know an answer, and automatically **update its knowledge base** for future learning.

The goal is to build an AI system that **learns from humans in real-time** and keeps improving over time.

---

## 🏗️ Tech Stack

| Layer                    | Technology                          |
| ------------------------ | ----------------------------------- |
| **Frontend**             | React (Vite) + Axios + React Router |
| **Backend**              | Python (FastAPI)                    |
| **Database**             | SQLite (via SQLAlchemy ORM)         |
| **AI Simulation**        | JSON-based Knowledge Base           |
| **Server Communication** | REST API + CORS Enabled             |

---

## ⚙️ Features

✅ AI Agent can receive and answer questions
✅ Automatically creates **Help Requests** when AI doesn’t know the answer
✅ Supervisor Dashboard to view & resolve requests
✅ Dynamic **Knowledge Base** that updates automatically
✅ Simple UI for both AI and Supervisor interactions
✅ Modular and scalable code architecture

---

## 🧩 Project Structure

```
frontdesk-ai-system/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── routes/
│   │   │   ├── ai_agent.py
│   │   │   ├── supervisor.py
│   │   │   ├── requests.py
│   │   ├── services/
│   │   │   ├── ai_service.py
│   │   │   ├── knowledge_base.py
│   │   │   ├── notifications.py
│   │   └── utils/
│   │       ├── fake_salon_info.json
│   │       ├── helpers.py
│   ├── frontdesk.db
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── KnowledgeBase.jsx
│   │   │   ├── AskAI.jsx
│   │   ├── components/
│   │   │   ├── RequestList.jsx
│   │   │   ├── SupervisorResponseForm.jsx
│   │   │   ├── LearnedAnswers.jsx
│   │   │   ├── ChatBox.jsx
│   │   ├── api/axiosClient.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles/app.css
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🧠 System Workflow

1️⃣ **AI Agent Interaction**

* User asks a question (via React Ask-AI page).
* If the answer exists in the knowledge base → AI replies instantly.
* If not → AI says *“Let me check with my supervisor…”* and creates a help request.

2️⃣ **Supervisor Panel**

* Supervisor views all **pending requests** on the dashboard.
* Enters the correct answer and submits it.

3️⃣ **Knowledge Base Update**

* The new Q&A pair is saved to the knowledge base JSON.
* AI immediately learns the new answer for future queries.

4️⃣ **Follow-up**

* AI responds back to the customer (simulated via console log).

---

## 🧰 Backend Setup (Python + FastAPI)

### 🔹 1. Environment Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate    # (Windows → venv\Scripts\activate)
```

### 🔹 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 🔹 3. Run the Backend

```bash
uvicorn app.main:app --reload
```

✅ Backend runs on: `http://127.0.0.1:8000`

### 🔹 4. API Endpoints

| Method | Endpoint                                      | Description                   |
| ------ | --------------------------------------------- | ----------------------------- |
| POST   | `/ai/ask?question=your_question`              | Ask a question to AI          |
| GET    | `/ai/knowledge`                               | View learned knowledge base   |
| GET    | `/supervisor/pending`                         | Fetch pending help requests   |
| POST   | `/supervisor/respond/{id}?answer=your_answer` | Supervisor submits a response |
| GET    | `/requests/`                                  | Get all requests              |
| GET    | `/requests/resolved`                          | Get resolved requests         |

---

## 🎨 Frontend Setup (React + Vite)

### 🔹 1. Install Dependencies

```bash
cd frontend
npm install
```

### 🔹 2. Start Development Server

```bash
npm run dev
```

✅ Frontend runs on: `http://localhost:5173`

---

## 💬 App Screens Overview

### 🧠 **Ask AI Page**

* User interacts with the AI.
* Sends questions directly to backend `/ai/ask`.
* AI replies instantly or escalates to supervisor if answer not known.

### 🧑‍💼 **Supervisor Dashboard**

* Shows all pending requests.
* Supervisor can respond and mark as resolved.
* Automatically updates knowledge base.

### 📚 **Knowledge Base**

* Displays all saved and learned answers dynamically from backend JSON file.

---

## 🔒 CORS Configuration

The backend uses FastAPI’s `CORSMiddleware` to allow frontend requests.

```python
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 🧩 Example Flow

1️⃣ User → *“Do you offer facials?”*
2️⃣ AI → *“Let me check with my supervisor.”*
3️⃣ Supervisor → *Adds answer → “Yes, we offer premium facials.”*
4️⃣ AI → *Learns automatically*
5️⃣ Next time → AI replies instantly with *“Yes, we offer premium facials.”*

---

## 📽️ Demo Script (For 3-Minute Video)

1️⃣ Introduce project and concept
2️⃣ Show AI interaction and escalation
3️⃣ Show supervisor answering
4️⃣ Show knowledge base updating automatically
5️⃣ Re-ask the same question → AI gives learned answer

(Use your 3-min script provided earlier 🎤)

---

## ⚙️ Design Highlights

* **Modular Architecture:** Each feature (AI, Supervisor, Requests) is separated in services and routes.
* **Scalable Code:** Easy to plug in real APIs or databases later.
* **Simple UI:** Clear and functional for demo purpose.
* **Self-Learning Loop:** AI gets smarter after each interaction.

---

## 🧾 Future Improvements

* Integrate real-time updates using WebSockets.
* Replace JSON with a cloud DB (e.g., Firebase or DynamoDB).
* Add Twilio or LiveKit for real call integration.
* Implement authentication for supervisors.

---

## 👨‍💻 Author

**Aniket Singh**
4th Year B.Tech Student | MERN & Python Developer
📧 [[aniketsingh@example.com](mailto:aniketsingh7141340@gmail.com)]

