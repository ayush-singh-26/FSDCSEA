import http from 'http';
const PORT = 8000
const server = http.createServer(async (req, res) => {
    res.setHeader('Content-type', 'text/html');
    const data = await fetch('http://fakestoreapi.com/products');
    const jsData = await data.json();
    console.log(jsData[0].title);
    const title = jsData[0].title;

    const htmlData = `
    <style>
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .rotating-image {
            animation: rotate 5s linear infinite;
        }
    </style>
    <div style="display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px;">
        <h1 style="text-align:center;background:linear-gradient(90deg, cyan, blue);color:white;
                   padding:15px;border-radius:10px;box-shadow:2px 2px 10px rgba(0,0,0,0.2);">
            Welcome to my Website
        </h1>
        <div style="padding:20px;width:400px;border:2px solid black;border-radius:20px;
                    box-shadow:4px 4px 15px rgba(0,0,0,0.2);background:white;text-align:center;">
            <img class="rotating-image" style="width:100%;border-radius:15px;object-fit:cover" 
                 src="${jsData[0].image}" alt="${jsData[0].title}" />
            <h3 style="color:#333;margin-top:10px;font-size:22px;">${title}</h3>
            <p style="color:#555;font-size:16px;line-height:1.5;padding:5px;">${jsData[0].description}</p>    
        </div>
    </div>`;

    res.end(htmlData)
})

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})