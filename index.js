const PORT = process.env.PORT || 5000;
const Application = require("./Framework/Application")
const userRouter = require("./src/user-router")
const jsonParser = require("./Framework/parseJSON")

const app = new Application();
app.use(jsonParser)
app.addRouter(userRouter);


app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
