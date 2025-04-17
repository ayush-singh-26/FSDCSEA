const { log } = require('console');
const fs= require('fs');

const writeAsync=()=>{
    fs.writeFile('data.pdf','Data is written using fs module',(err)=>{
        if(err){
            console.log('error during writting the data');
        }
        else{
            console.log('Data written successfully');
        }
    });
}



const readAsync=()=>{
    fs.readFile('data.pdf',{encoding: 'utf8'},(err,data)=>{
        if(err){
            console.log("Error during reading the file",err);
        }
        else{
            console.log(data);
        }
    })
}

const obj={writeAsync,readAsync};

module.exports = obj;