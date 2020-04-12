APO# contact-list-EHI
Production ready application for maintaining contact information

Objective:
Maintain Contact Information with uniq Id's in Contact List

prerequisite:
Node js Latest version (version 12)

Folder structutre:

1. main.ts is main start file
2. index.html is main start file for DOM
3. app.component.ts for contact list table
4. services --> folder have data service to have http methods
5. dialogs --> folder for maintaining all modal pop ups for each CRUD operation
6. models --> folder for declaring contact structure
7. mock --> folder for mainting node js rest API's to GET/POST/PUT/DELETE
8. mock --> server.js --> for creating node server with express
9. mock --> app --> routes --> contact-list.routes.js for all CRUD methos.
10. mock --> app --> routes --> controllers --> contact-list.controller.js for all API logic
11. mock --> app --> routes --> controllers --> contact-list.json for mock data

steps to Run
To Run this Project perform below steps

2. In project folder --> conatact-list-EHI --> run "npm install"
3. Install express js globally using command --> "npm install -g express"
4. Inside project folder run --> ng serve and open browser window with url http://localhost:4200/
5. Inside mock folder run command --> node server.js
6. perform any CRUD operation.



