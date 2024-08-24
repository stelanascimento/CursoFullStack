const express = require("express");

const app = express();

app.get("/teste",(req,res) => {
    console.log("oioi");
    res.send("aa");
    // OU mandar um res.json
    // res.json({
    //     oi: 20
    // })
});

app.listen(8000);