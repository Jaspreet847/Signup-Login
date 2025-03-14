const bcrypt = require("bcrypt");
const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const signup = (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, 10) // Corrected salt rounds
        .then((hashedPassword) => {
            return UserModel.create({ email, password: hashedPassword });
        })
        .then((user) => {
            res.status(201).json({ message: "User registered successfully!", user });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

const login = (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No record found" });
            }

            return bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if (!isMatch) {
                        return res.status(400).json({ message: "Invalid email or password" });
                    }

                    // Generate JWT token
                    const token = jwt.sign(
                        { id: user.id, email: user.email },
                        "This_is_my_secret_key",
                        { expiresIn: "24h" }
                    );

                    res.status(200).json({ message: "Login Successful", token });
                });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};
const Profile = (req, res) => {

    UserModel.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(500).json({ message: "error fecthing profile" }));
};

const Userdelete = (req, res) => {
    const { id } = req.params;
    UserModel.findByIdAndDelete(id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json({ message: "error in deleting" }))
}



const Update =(req, res) => {
      const {id} = req.params;
      const UpdateData = req.body
    UserModel.findByIdAndUpdate(id,UpdateData,{new:true,runValidators:true})
          .then((user) => res.status(200).json(user))
          .catch((err) => res.status(404).json({message: "Data is not Updated"}))
}


module.exports = { signup, login, Profile, Userdelete, Update };
