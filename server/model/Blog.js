import mongoose from "mongoose";


const blogSchema = mongoose.Schema({
    title: { type: String },
    heroImg: { type: String },
    category: { type: Array },
    content: { type: String },
    isPublish: { type: Boolean },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
})


export default mongoose.model("Blog", blogSchema);