import pandas as pd
import torch
import numpy as np
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, Dataset
setting=True
log_interval=500
csv_file=r'C:\Users\Sahil\Documents\PROJECTS - Copy\backend\.venv\datasets\gpu_specs_v6.csv'    

class CustomDataset(Dataset):
    def __init__(self, csv_file,option):
        self.data = pd.read_csv(csv_file)

    def __len__(self):
        return len(self.data)

    def __getitem__(self, index):
        x=pd.read_csv(csv_file)
        a=[]   
        for i in range(50):
            a=a+[i];
        print(a)
        temp=x.iloc[a,[4,5,7,6,9,8]]
        train=temp
        target=x.drop(x.iloc[:, :-1], axis=1)
     
        target=target.iloc[index:index+1]
        train=train.iloc[index:index+1]
        train=torch.tensor(train.values,dtype=torch.float32)
        targets=torch.tensor(target.values,dtype=torch.float32)
        return train, targets


train_dataset = CustomDataset(csv_file=r'C:\Users\Sahil\Documents\PROJECTS - Copy\backend\.venv\datasets\gpu_specs_v6.csv',option='on_bad_lines=skip')
train_loader = DataLoader(train_dataset,batch_size=1)



torch.__version__
class Model(nn.Module):
    def __init__(self):
        super(Model, self).__init__()
        self.fc1 = nn.Linear(6,3).float()
        self.fc2 = nn.Linear(3,1).float()
        self.relu = nn.ReLU().float()

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x
        

# Instantiate your model
model = Model()
criterion = nn.L1Loss()
optimizer = optim.SGD(model.parameters(), lr=0.4, momentum=0.5)




input_data = torch.tensor([[5120	,1065,	1593,	6912,	432,	160,]], dtype=torch.float32)
#[[1,114040,2023,8,128,1925,2250,3840,120,48,2,1,0,406,1506,20106]]
#[[0,5550,2022,8,128,300,1500,2048,128,64,1,2,0,406,1506,99512]]
#[[0,38,2022,16,4096,900,1200,8192,256,128,1,2,0,406,1100,803]]
#1	114090	2022	24	384	1815	1325	17408	544	192	1	2	0	406	1406	20102	212
#5120	1065	1593	6912	432	160

#10,	320,	1350	,1750	,3584	,192	,80
#469.9766
#512.629
with torch.no_grad():
    output = model(input_data)

# Print the predicted class
print(f'Predicted class: {output}')
torch.save(model.state_dict(), 'model.pth')