import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    function handleOnChange(event){
        setText(event.target.value);    
    }

    function handleUpClick(){
        const newText = text.toUpperCase();
        setText(newText);
    }
    function handleLoClick(){
        const newText = text.toLowerCase();
        setText(newText);
    }
    function handleClearClick(){
        setText("");
    }

    const formStyle = {
        backgroundColor :props.mode === "light"?"white":"black",
        color: props.mode === "light"?"black":"white"

    }

    return (
        <>
        <div className='px-3'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea style={formStyle} className="form-control" value={text} placeholder='Enter Text Here . . .' onChange={handleOnChange} id="my-box" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-2' onClick={handleClearClick}>Clear Text</button>
        </div>

        <div className="container my-3 px-3 py-3">
            <h2>Text Component : </h2>
            <p>Words : {text === ""?0:text.split(" ").length} ,  Characters : {text.length}</p>
            <h2>Preview : </h2>
            <p>{text}</p>
        </div>
        </>
    )
}
