# PharmaCeutical

Project 
Note:- purpose of this assignment is to involve all the features of angularjs 
Assignment: - project on PharmaSuiticals 
 
1.	Project Name: - PharmaSuiticals 
 
2.	Technologies: - HTML5, CSS3, Bootstrap 3, AngularJs2 , ExpressJS, MongoDB, Node
 
3.	Description:-This is a web application that maintain transactions of medicines ,drugs on doctor’s prescription, Customer, Inventory and Doctors
  
4.	Technical Requirements: -  
a.	All features should break down into modules. 
b.	Every module must contain its own component, nested component, service, directives, views, css 
c.	All common services must be a part of service folder given separately. 
d.	There must be parent component which will hold the routing for index page  
e.	All http calls should be there in separate httpservice file
f.	Use bootstrap to make application responsive.
g.	Make use of custom directive, important directives, pipes, custom pipes, routing, nested routing, SPA
 
 
 
6.	Project Requirements: - 
 
a.	Admin should be able to. 
i.	Add, delete, and update all inventories and customer. 
ii.	Search, create, delete and update a orders
iii. Search, create, delete and update a customer. 
iv. Search, create, delete and update a doctor. 
b.	Customer/Patient can 
i.	Search medicine
ii.	Order medicine
iii.	See order history
iv.	Register
v.	Login
 	  
7.	Modules:-  
 
a.	Admin 
b.	Customer 
c.	Doctor (optional)
d.	Inventory 
e.	Search 

Roles(
User,admin,customer,doctor
)
app
-	Admin(module folder)
o	Admin.component.ts
o	Admin.html
o	Admin.css
o	Admin.service.ts (for business rules)
	Admin-list (sub module)
•	Admin-list.component.ts
•	Admin-list.html
o	Admin.httpservice.ts (for api calls)
-	Customer(module folder)
o	Customer.component.ts
o	Customer.html
o	Customer.css
o	Customer.service.ts (for business rules)
o	Customer.httpservice.ts (for api calls)
-	Inventory
-	Service




Maintaining Session
Steps for session
1.	From login page 
2.	post user object to API
3.	API will verify against DB
4.	and if exist, it will return one GUID(token with username)
5.	store the response object in session storage.

Session Storage:- 
Data get store in key value pair in stringy format
Data will get delete/removed once you clear it or close the browser 
Local storage
Data get store in key value pair in stringy format
Data will not get deleted/removed unless we delete it programmatically


sessionStorage.setItem(‘auth’,JSON.stringify(response object));
 
localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name }));
Load from local storage

var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var token = currentUser.token; // your token


how to generate GUID
1.	npm install uuid
// Generate a v1 UUID (time-based) 
2.	const uuidV1 = require('uuid/v1');
3.	uuidV1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
