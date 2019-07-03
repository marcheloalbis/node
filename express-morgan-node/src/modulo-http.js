const http = require("http");

const servidor = http.createServer((req, resp) => {
  resp.writeHead(200, { "Content-Type": "text/html" });
  resp.write(
    `     <!doctype html>     
    <html>         
        <head></head>                    
        <body>             
            <h1>Sitio en desarrollo</h1>         
        </body>     
    </html>`
  );
  resp.end();
});
servidor.listen(3000);
console.log("Servidor web iniciado en el puerto 3000");
