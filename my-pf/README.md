I am listing down the API's that I have created :

1.http://localhost:5000/details (Renders basic detail about me)

2.http://localhost:5000/achievements (renders all the achievements)

3.http://localhost:5000/work (renders all the work experience related data)

4.http://localhost:5000/education (renders all the educational data)

5.http://localhost:5000/contact (a simple form, from where you can POST your comments and API will be updated simultaneously)

All the actions like GET,POST, DELETE etc can be performed using Postman.

Please find all the data stored in public/db.json.

Steps to run app:

1. Run npm install to store node modules and dependencies.

2. Run npm i json-server to install json-server.

3. Run json-server public/db.json --port 5000 in terminal and all the RestFul API's will be connected and displayed in terminal.

None of the third part library has been used for styling except for icons, hence UI can be improvised.
