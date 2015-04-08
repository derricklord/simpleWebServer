Simple HTTP Server instructions

1. Create Directory Structure and empty files
    /public
    /css
       style.css
       app.css
    /js
      app.js
    index.js

2. Initialize package.json file using “npm init”

3. Install express module using “npm install express --save”

4. Modify index.js file to
    a. load express and initialize app variable.
    b. include route for static file
    c. set application listener to port

5. Modify index.html file in /public directory to include HTML5 template