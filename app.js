const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log("Server started!"));

app.use(express.static("dist"));

const items = [
                    {
                    name: "Laptop",
                    price: "100"
                    },
                    {
                    name: "Mobile",
                    price: "88"
                    },
                    {
                    name: "Cars",
                    price: "44"
                    },
                ]

app.get("/conx/items",(req, res) => {
    res.send(items);
})