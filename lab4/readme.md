# NPM Project 
1. go to projrct folder (by cd)
2.type ``` npm init -y```
3. open package.json
update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json


```
script{
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`

## REST API
-majorly backend server retuns only data not html file
-REST API use(get,post,put,pstch,delete) ,method to communicate with client
-any browser can check only get method
-for other method type we use third party API Tester like postman,thunder,client,echo,api etc

EchoAPI for VS Code

# Request type 
- GET: (get all , get by id)
- URL - 
1. GET : /api/products (for all prodcuts)
2. GET: /api/products/101 (for product by id)

- POST : 
/api/produts (data will be shared from echo api -> body -> section)
- PUT/PATCH : /api/products/201
- DELETE : /api/product/110

# Helper fuction
