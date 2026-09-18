import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Home page</h1>");
    res.end(`
        <a href='/product'>Product</a>
        <a href='/contact'>Contact Us</a>
    `);
  } else if (req.url === "/product") {
    res.write(`
    <h1>iphone XL</h1>
    <h2>price:90000</h2>
    <h3> discount: 30%</h3>
    `);
    res.end();
  } else if (req.url === "/contact") {
    res.end("<h1>contact us");
  } else {
    res.statusCode = 404;
    res.end(`
            <h1>Page not found</h1>
            <a href="/">Home</a>
            `);
  }
});
server.listen(3000, () => console.log("prg5 runs in 3000...."));
