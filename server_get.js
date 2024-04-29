const express = require("express");
const app = express();

const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
}

const multiplyTwoNumbers = (n1, n2) => {
    return n1 * n2;
}

app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumbers(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/multiplyTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = multiplyTwoNumbers(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/", (req, res) => {
    const htmlContent = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(htmlContent));
});

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
