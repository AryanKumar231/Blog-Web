import jwt from "jsonwebtoken";

const verifyAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.json({ "message": "Token not provide!!" })

        const verify = jwt.decode(token, process.env.TOKEN_SECRET);

        if (!verify) return res.json({ "message": "Invalid token!!" })

        req.user = verify.user;

        next()


    } catch (error) {
        console.error(error);
    }
}

export default verifyAuth;