const express = require('express');
const app = express();


app.use((req, res, next) => {
    // // if(!req.query.age){
    // //     res.send("please provide age")
    // // }
    // // else if(req.query.age<18){
    // //     res.send("You Can Not Access This Page");

    // // }
    // else{
    // next();}
    console.log("Karan",new Date(). getTime())
    next()

});


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
