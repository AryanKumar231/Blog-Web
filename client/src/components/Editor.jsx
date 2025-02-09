import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
// import axios from "axios";


const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        ["blockquote", "code-block"],
        ["link"],
        ["clean"], // Remove formatting
    ],
};

// Custom formats for Quill
const formats = [
    "header", "bold", "italic", "underline", "strike", "align",
    "list", "bullet", "script", "indent", "color", "background",
    "font", "blockquote", "code-block", "link", "image", "video"
];

const Editor = ({ reference }) => {


    // Handle Image Upload

    return (
        <div>
            <ReactQuill
                ref={reference}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default Editor;
