import mongoose from "mongoose";


const UserSchema= mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String }
}, {
    timestamps: true
})


export default mongoose.model("User",UserSchema)