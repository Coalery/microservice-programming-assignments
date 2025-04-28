import requests
import os

baseUrl = os.getenv("CALCULATOR_BASE_URL", "http://localhost:3000")

def add(a, b):
    response = requests.post(f"{baseUrl}/add", json={"num1": a, "num2": b})
    return response.json()['result']

def subtract(a, b):
    response = requests.post(f"{baseUrl}/subtract", json={"num1": a, "num2": b})
    return response.json()['result']

def multiply(a, b):
    response = requests.post(f"{baseUrl}/multiply", json={"num1": a, "num2": b})
    return response.json()['result']

def divide(a, b):
    response = requests.post(f"{baseUrl}/divide", json={"num1": a, "num2": b})
    return response.json()['result']
