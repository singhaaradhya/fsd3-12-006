
// if a function uasages await keyword then the function must be accing
import { readFile } from "fs/promises";

const readData =async(fileName)=>{
    try{
    const content = await readFile(filename,'utf-8');
    return content;
    }catch(e) {
        console.log("File not found");
        console.log(e.massages);
    }
finally{
    console.log("read data finished");
}
};
const writeData = async(filename,content)=>{
    try {
        await writeFile(filename, content);
    } catch (error) {
        console.log(error.massage);
    }
};

const appendData = async(filename,content)=>{
    try {
        await appendFile(filename,content);
    
    } catch(error) {
        console.log(error.massage);
        
    }
};

// const data = await readData("file1.js");
// console.log(data);

const deleteFile = async (filename) => {
    try{
        await unlike(filename);
    }
    catch(error){
        console.log("File not found");
    }
};


