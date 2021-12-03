import React, { useState } from 'react'


function Form(props) {
    const ChangeUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const ChangeLo = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const clearIt = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    const copyIt = () => {
        var text = document.getElementById("myForm");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("The text have been copied", "success");
    }
    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (<>
        <div>
            <div className=" container " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="my-3 mx-2">Text Analyzer</h1>
                <div className="mb-3">
                    <textarea className="form-control container" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#4a6fa6',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} value={text} onChange={handleOnChange} id="myForm" rows="8"></textarea>

                </div>
                <button className="btn btn-primary my-2 mx-2" onClick={ChangeUp}>Convert to UpperCase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={ChangeLo}>Convert to LowerCase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleSpace}>Copy it</button>
                <button className="btn btn-primary my-2 mx-2" onClick={copyIt}>Remove Extra Space</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearIt}>Clear</button>

                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to read</p>

            </div>
        </div>

    </>
    )
}
export default Form


