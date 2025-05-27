const UserModel = require('../models/user.model')

// get user by Id 
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// update User by Id
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updateUser = await UserModel.findByIdAndUpdate(
            id,
            data,
            { new: true }
        )
        if (updateUser) {
            res.status(200).json({ updateUser, msg: "User Update Successfully" })
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}



module.exports = {
    getUserById,
    updateUserById,
}