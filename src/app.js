const express = require("express");
const app = express();

const mainRouter = require("./routes/mainRouter.js");
const productsRouter = require("./routes/products.js")
const userRouter = require("./routes/users.js")

app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views", "./src/views")

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", userRouter);


app.listen(3002, () =>
    console.log("Servidor corriendo en el puerto 3002")
);