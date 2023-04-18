import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here')

    const Uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log('ON change');
        setText(event.target.value)
    }
    // Copy to clipboard function
    const copyText = () => {
        let myText = document.querySelector('#myBox')
        if (myText.value === ''){
            alert("You don't have any text to copy, please enter some text");
        }else{    
            myText.select();
            navigator.clipboard.writeText(myText.value);
            alert('Text Copied')
        }
    }

  return (
    <>
    <div className='container'>
        <div className="container">
            <div className="row">
                <div className="col-lg-10">
                <h1 className='mt-4'>{props.heading}</h1>
                </div>
                <div className="col-lg-2 text-right">
                <button className="btn btn-primary mx-5 mt-5 " onClick={copyText}><i class="fa-regular fa-clipboard"></i></button>
                </div>
            </div>
        </div>
        <div className="mb-3 mt-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={Uppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={toLowerCase}>Convert to LowerCase</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>Your text has {text.split(" ").length} words and {text.replace(/\s/g, '').length} characters</p>
    </div>
    </>
  )
}
TextForm.propType = {
    heading: PropTypes.string
}