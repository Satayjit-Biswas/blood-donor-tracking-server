const userModel = require("../models/userModel");

//get all Candidate
exports.getAlluser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
};

exports.saveUser = async (req, res) => {
    const Userdata = new userModel(req.body);
            try {
                const savedApply = await Userdata.save();
                res.status(200).json(savedApply);
            } catch (error) {
                console.log(error);
            }
    };