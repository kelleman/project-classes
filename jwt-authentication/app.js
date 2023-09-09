const express = require('express');
const app = express();
const authRoute = ('./routes/auth');
const protectedRoute = ('./routes/protected');
const port = process.env.PORT || 2020;

app.use(express.json());
app.use('/auth', authRoute);
app.use('./protected', protectedRoute);




app.listen(port, ()=>{
    console.log(`app listening to PORT:${port}`);
})