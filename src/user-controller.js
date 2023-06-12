const User = require("./user-model");

const getUsers =  async (req, res) => {
    let users;

    if(req.params.id){
        users = await User.findById(req.params.id)
    } else {
        users = await User.find()
    }

    res.send(users)
};

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    console.log(req.body)
    res.send(user)
};

const deleteUserById = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user)
};

const updateUserById = async (req, res) => {
    const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body);
    res.send(user)
}



module.exports = {
    getUsers,
    createUser,
    deleteUserById,
    updateUserById
}