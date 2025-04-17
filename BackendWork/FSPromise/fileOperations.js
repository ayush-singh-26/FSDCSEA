const { log } = require('console');

const fs= require('fs').promises; 

const pd=fs.writeFile('data.pdf','CSEB Students data');

log(pd);

pd.then(()=>{
    log('Data Written Successfully');
})
.catch((err)=>{
    log(err)
})
.finally(()=>{
    log('Resources closed')
})

async function readFilePromise() {
    try {
        const data = await fs.readFile('student.pdf', {encoding: 'utf8'})
        log(data);
    } catch (err) {
        console.log("Error during reading file",err);
        
    }
}

readFilePromise();