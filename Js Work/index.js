console.log("Hello world");

const add=(a,b)=>{
    return a+b;

    
}

a=add(10,20);
console.log(a);

const cCompiler=()=>{
    return "C compiler selected"
}

const javaCompiler=()=>{
    return "Java compiler selected"
}

const selectCompiler=(language)=>{
    console.log("Hi, you have selected " + language);
}

selectCompiler(cCompiler());

function selectCompilers(lang){
    if(lang=='c'){
        function cCompiler(){
            return "C compiler selected"
        }
    }
    if(lang=='java'){
        function javaCompiler(){
            return "Java compiler selected"
        }
    }
}

selectCompiler(selectCompilers('c'));