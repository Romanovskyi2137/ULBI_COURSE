const Router = require("../Framework/Router");
const userController = require("./user-controller");

const router =  new Router();


router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.put("/users", userController.updateUserById);
router.delete("/users", userController.deleteUserById);



module.exports = router;