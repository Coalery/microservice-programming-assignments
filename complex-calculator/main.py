from calculator import add, subtract, multiply, divide
from fastapi import FastAPI

app = FastAPI()

@app.post("/factorial")
def factorial(n: int):
    if n < 0:
        return None
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, add(n, 1)):
            result = multiply(result, i)
        return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
