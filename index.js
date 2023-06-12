const PORT = process.env.PORT || 5000;
const Application = require("./Framework/Application")
const userRouter = require("./src/user-router")
const jsonParser = require("./Framework/parseJSON")
const parseUrl = require("./Framework/parseURL");
const { default: mongoose } = require("mongoose");

const app = new Application();
app.use(jsonParser);
app.use(parseUrl("http://localhost:5000/users"));
app.addRouter(userRouter);




const start = async () => {
    try{
        await mongoose.connect("mongodb+srv://romanovskyi2137:2137@node-js-practice.dl3l1b2.mongodb.net/?retryWrites=true&w=majority");
        app.listen(PORT, () => console.log(`server started on port: ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start();


// implement methods: PUT, DELETE.