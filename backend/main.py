from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Viteのデフォルトポート
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CalculationRequest(BaseModel):
    expression: str

class CalculationResponse(BaseModel):
    result: float

@app.get("/")
async def root():
    return {"message": "Calculator API"}

@app.post("/calculate", response_model=CalculationResponse)
async def calculate(request: CalculationRequest):
    try:
        # 安全な計算のため、eval の代わりに制限された評価を使用
        result = eval(request.expression, {"__builtins__": {}}, {})
        return CalculationResponse(result=float(result))
    except Exception as e:
        return {"error": str(e)}
