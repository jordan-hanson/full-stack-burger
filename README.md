The Full Stack Burger

Overview

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger in the next column -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

Gallery

![Display of Each Column](/frontdisplayburger.png)

​Get Started ​Note UI ​Fill in Note Form ​Saved Note and Click on Title for Access

Tech and Features Used

​```

Javascript
Node.js
Node Librarys: Express 
MYSQL
Routes
HandleBars
Bootstrap

``` 
How to use

​ Navigate to https://the-full-stack-burger.herokuapp.com, 

Step 1: Add your Burger title to the input field next to the arrow 
Step 2: Click Create Burger
    - the routes will fire the AJAX call to the MYSQL burger_db to add the burger to the list.
Step 3: Notice it is now in your Burgers to Eat Column
    - the CallBack brings it back up in a handle bar index file to display.
Step 4: Click the Devour It! Button
    - the controller route fires the AJAX call to now populate the devoured column BOOLEAN to True;
Step 5: Notice your burger is now devoured. 
    - the CallBack then displays it in the 3rd column. 
REPEAT FOR ALL STEPS AS YOU PLEASE. ALL BURGERS ARE SAVED IN THE DATABASE AND JUST UPDATED BY THE DEVOURED BOOLEAN COLUMN. NOTHING IS DELETED.

Links to the Work 
Jordan Hanson
https://the-full-stack-burger.herokuapp.com 
https://github.com/jordan-hanson/full-stack-burger 
https://jordan-hanson.github.io/full-stack-burger/