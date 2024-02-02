const express = require("express");
const app = express();
const cors = require("cors")
const {createProxyMiddleware} = require("http-proxy-middleware")

app.use(cors())

app.post("/",createProxyMiddleware({target:'http://localhost:5000',changeOrigin:true}))

app.listen(3000,()=>{
    console.log("proxy started")
})