const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/instagramClone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.listen(port,()=>{
    console.log(`The Port is running at port ${port}`)
})