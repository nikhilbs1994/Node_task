App to register user. First time when user registers, the User_Roles table should contain value as admin for that user and for rest of them, it should be different.

## Requirement ##

NodeJS >= 12.13.0
MongoDB >= 3.2 

## How to run ##
1. Clone the repo. 
2. Enter project directory and run `npm i`
3. Start the app by node `app.js`
3. Hit the app with POST request, application/json as data.
```
curl -X POST \
  http://localhost:8000/user \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:8000' \
  -d '{
    "name": "Nikhil",
    "address": "Test1",
    "email": "abc@gamil.com"
}'
```
