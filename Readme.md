App to register user. First time when user registers, the User_Roles table should contain value as admin for that user and for rest of them, it should be different.

## Requirement ##

NodeJS >= 12.13.0
MongoDB >= 3.2 

## How to run ##

1. Hit the app with POST request, application/json as data.
	eg : curl -X POST \
  http://localhost:8000/user \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:8000' \
  -d '{
    "name": "Nikhil",
    "address": "Test1",
    "email": "abc@gamil.com"
}'