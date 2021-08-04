import React from 'react'
import "../css/BookForm.css"

const BookForm = (props) => {
    const handleSubmit = () => {
        let finalCheck = false
        const inputText = document.getElementById("fullName")
        const inputPhoneNumber = document.getElementById("phoneNumber")
        const inputEmail = document.getElementById("email")

        if(inputText.value === ""){
            finalCheck = true
            document.getElementById("fullNameWarring").innerText = "The field must not be empty!"
        }else {
            document.getElementById("fullNameWarring").innerText = ""
        }
        if(inputPhoneNumber.value === ""){
            finalCheck = true
            document.getElementById("phoneNumberWarring").innerText = "The field must not be empty!"
        }else {
            document.getElementById("phoneNumberWarring").innerText = ""
        }
        if (finalCheck) {
            return;
        }
        props.setState(false)
    }
    return (
        <div id="bookFormContainer">
            <h2>Book now</h2>
            <div id="bookInputForm">
                <div>
                    <p style={{color: "red"}} id="fullNameWarring"></p>
                    <input type="text" placeholder="Full name" id="fullName"/>
                </div>
                <div>
                    <p style={{color: "red"}} id="phoneNumberWarring"></p>
                    <input type="number" min={0} placeholder="Phone number" id="phoneNumber"/>
                </div>
                <div>
                    <input type="email" placeholder="Email" id="email"/>
                </div>
                <div id="buttonsDiv">
                    <div>
                        <button type={"button"} className="btn-secondary" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                    <div>
                        <button type={"button"} className="btn-secondary" onClick={() => props.setState(false)}>Return
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BookForm