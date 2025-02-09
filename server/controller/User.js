import User from "../model/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.json({ "message": "All fields are required!!" })

        const existUser = await User.findOne({ email });

        if (existUser != null) return res.json({ "message": "User Already exists!!" })

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username, email, password: hashPassword
        })
        await user.save();

        return res.json({
            message: "Success"
        })

    } catch (error) {
        console.error(error);
    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.json({ "message": "All fields are required!!" })

        const existUser = await User.findOne({ email });

        if (existUser === null) return res.json({ "message": "User doesn't exists!!" })

        const passcompare = await bcrypt.compare(password, existUser.password);
        if (!passcompare) return res.json({ "message": "Invalid Credentials!! " })


        const token = jwt.sign({ user: existUser._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' })

        return res.json({
            "message": "Success",
            token,
            user: {
                "id": existUser._id,
                "username": existUser.username,
                "email": existUser.email,
            }
        })


    } catch (error) {
        console.error(error);
    }
}



export {
    signup,
    login
}