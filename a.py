from re import S
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.preprocessing import StandardScaler
import sys


column =['class', 'gender', 'area', 'study', 'grade']
a = pd.DataFrame()
a = pd.read_csv('D:/my_project/abc.csv')
# a = pd.read_csv('D:/my_project/abc.csv', usecols=columns)
a = pd.DataFrame(a, columns=column)   #이건 컬럼을 지정하는게 아니라 순서만 지정한 거임
b = a['grade']


print(a)


scaler = StandardScaler()
s = scaler.fit_transform(a)

print(s)

sys.exit('종료')

from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(
    s, b, test_size=0.30)


model = Sequential()
model.add(Dense(512, input_dim=5, activation='relu'))
model.add(Dropout(0.25))
model.add(Dense(256, activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(128, activation='relu'))
model.add(Dropout(0.1))
model.add(Dense(1, activation='sigmoid'))
model.summary()


model.compile(loss='mse', optimizer='adam',
              metrics=['binary_accuracy'])


fit_hist = model.fit(X_train, Y_train,
            batch_size=50, epochs=10,
            validation_split=0.2, verbose=1)      


plt.plot(fit_hist.history['binary_accuracy'])
plt.plot(fit_hist.history['val_binary_accuracy'])
plt.show()      


score = model.evaluate(X_test, Y_test, verbose=0)
print('Keras DNN model loss :', score[0])
print('Keras DNN model accuracy :', score[1])



