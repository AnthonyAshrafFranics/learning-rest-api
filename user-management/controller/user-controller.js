const User = require("../model/User");

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return next(error);
    }
    if (!users) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    return res.status(200).json({ users });
}

const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name && name.trim() == "" && !email && email.trim === "" && !password && password.length > 6) {
        return res.status(422).json({ message: "Invalid Data" });
    }

    let user;
    try {
        user = new User({
            name,
            email,
            password
        })

        user = await user.save(); // To save in Database
    } catch (error) {
        return next(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Unable to save user" })
    }

    return res.status(201).json({ user })
};


const updateUser = async (req, res, next) => {
    const id = req.params.id;

    const { name, email, password } = req.body;

    if (!name && name.trim() == "" && !email && email.trim === "" && !password && password.length > 6) {
        return res.status(422).json({ message: "Invalid Data" });
    }

    let user;

    try {
        user = await User.findByIdAndUpdate(id, { name, email, password });
    } catch (error) {
        return next(error);
    }

    if (!user) {
        return res.status(500).json({ message: "Unable to save user" });
    }

    return res.status(200).json({ message: "Updated Successfully" })
}

const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findByIdAndRemove(id);
    } catch (error) {
        return next(error);
    }

    if (!user) {
        return res.status(500).json({ message: "Unable to delete" });
    }

    return res.status(200).json({ message: "Successfully Deleted" });
}

const getUserById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (error) {
        return next(error)
    }

    if (!user) {
        return res.status(404).json({ message: "Unable to Find user with this ID" });
    }

    return res.status(200).json({ user })

}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserById = getUserById;