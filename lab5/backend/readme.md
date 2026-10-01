# Step 1:
- Create project folder 
- create two folder (frontend,backend) in root(lab5)
- open terminal and reach to backend by

```
cd ..
cd lab5
cd backend

```
- type 'npm init -y'
- install nodemon 'npm i express'
- update backend/package.json 
    - change type `type:"module"`
    - change script
    ```
    script:{
        "start": "node app.js",
        "dev":"nodemon prg
    }
    ```
    - add `lab5/backend/node_module` tp .gitignore
    - create `prg1.js` in backend 
    - write the script below to start express server 




    ```
    import express from "express";
    const app = express();

    app.get("/",(req,res) =>{
        res.send("Hello Express");
    });
// this line must be last line 
app.listen(4444, ()=> console.log("prg1 is running at 4444"));
 ```