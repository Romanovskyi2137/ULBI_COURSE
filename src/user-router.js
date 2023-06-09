const Router = require("../Framework/Router");


const router =  new Router();

const users = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Alesha"},
];


router.get("/users", (req, res) => {

    res.send(users)
});
router.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(users)
});



module.exports = router;