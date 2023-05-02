import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here')

    const Uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase','success')
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase','success')
    }
    const handleOnChange = (event) => {
        console.log('ON change');
        setText(event.target.value)
    }
    // Copy to clipboard function
    const copyText = () => {
        let myText = document.querySelector('#myBox')
        if (myText.value === ''){
            props.showAlert("You don't have any text to copy, please enter some text",'warning')

        }else{    
            myText.select();
            navigator.clipboard.writeText(myText.value);
            props.showAlert('Text Copied,paste it anywhere you want!','success')
        }
    }
    // Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    // Clear Text
    const clearText = () => {
        setText("");
    }

  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="col-lg-12">
                <h1 className='mt-4' style = {{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>       
                    <div className="mb-3 mt-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style = {{backgroundColor: props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
                    </div>

                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={Uppercase}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toLowerCase}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
            </div>
        </div>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
TextForm.propType = {
    heading: PropTypes.string
}