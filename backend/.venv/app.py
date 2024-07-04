from flask import Flask, request,jsonify
from flask_cors import CORS
from msql import query
import pandas as pd
import math
import torch
import numpy as np
import torch.nn as nn
import torch.optim as optim
app=Flask(__name__)
CORS(app)

class Model(nn.Module):
    def __init__(self):
        super(Model, self).__init__()
        self.fc1 = nn.Linear(16,1).float()
        self.fc2 = nn.Linear(1,1).float()
        self.relu = nn.ReLU().float()

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Instantiate your model
model = Model()
model.load_state_dict(torch.load(r'C:\Users\Sahil\Documents\PROJECTS - Copy\backend\.venv\models\model.pth'))   
model.eval()

def predict(input_data):
    input_tensor = input_data
    if torch.cuda.is_available():
        input_tensor = input_tensor.cuda()
    with torch.no_grad():
        output = model(input_tensor)
    output_array = output.cpu().numpy()

    return output_array

@app.route('/pred',methods=['POST','GET'])
def send():
    input_data = [1,114040,2023,8,128,1925,2250,3840,120,48,2,1,0,406,1506,20106]
    data=request.get_json()
    input_data=data['data']
    input_data = torch.tensor([input_data], dtype=torch.float32)
    print(input_data)
    prediction = predict(input_data)
    prediction=math.floor(prediction)
    print(prediction)
    return {
    'value':prediction,
    'test':'testasnwer'
    }

@app.route('/test',methods=['GET'])
def test():
      a= query('Select * from item')
      arr=[]
      len=0
      for x in a:
       print(x[2])
       len=len+1
       arr.append(x)
      print(len)
      return {
          'value':arr,
          'length':len
      }
