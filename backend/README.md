# Frontdesk AI Supervisor Backend

### 🧠 Overview
This backend simulates a Human-in-the-Loop AI system.  
If AI cannot answer a question, it escalates to a supervisor who provides the answer — which is then learned automatically.

---

### ⚙️ Setup

```bash
# Clone repo
git clone <your_repo_url>
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn app.main:app --reload
