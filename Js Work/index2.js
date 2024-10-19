const div = document.getElementsByClassName('parent')
div[0].innerHTML = "<h1> Hello JS</h1>"

const h1 = document.createElement('h1');
h1.innerHTML = "Element is created by dom function"
console.log(h1);
div[0].appendChild(h1)

h1.style.backgroundColor = "Red"
h1.style.color = "white"
const img = document.querySelector('body')
img.style.backgroundImage = "url('pexels-veeterzy-303383.jpg')"
img.style.backgroundSize = "100vw 100vh"


const button = document.getElementById('btn')
button.style.padding = "10px"
button.style.backgroundColor = "cyan"

const display = document.getElementsByClassName('disp')




const promise = new Promise((resolve, reject) => {
    let a = 12;
    if (a > 10) {
        resolve("value of a is resolved")
    }
    else {
        reject("value of a is not resolved")
    }
});

promise.then((msg) => { console.log(msg) })
    .catch(err => console.log(err))
    .finally(msg => { console.log("All resources are resolved") })


const respnse = fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data.products[0]); 
        const h2=document.createElement('h2');
        h2.innerHTML = data.products[0].product_name;
        display[0].appendChild(h2);
        const p=document.createElement('p');
        p.innerHTML = data.products[0].price;
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



