import React from 'react'
import "../css/BookForm.css"

const BookForm = (props) => {
    const handleSubmit = () => {
        let finalCheck = false
        const inputText = document.getElementById("fullName")
        const inputPhoneNumber = document.getElementById("phoneNumber")
        const inputEmail = document.getElementById("email")
        const subscriptionType = document.getElementById("subscriptionTypeSelect")

        if (inputText.value === "") {
            finalCheck = true
            document.getElementById("fullNameWarning").className = "fa fa-circle iconFail"
        } else {
            document.getElementById("fullNameWarning").className = "fa fa-circle iconPass"
        }
        if (inputPhoneNumber.value === "") {
            finalCheck = true
            document.getElementById("phoneNumberWarning").className = "fa fa-circle iconFail"
        } else {
            document.getElementById("phoneNumberWarning").className = "fa fa-circle iconPass"
        }
        if (inputEmail.value === "") {
            finalCheck = true
            document.getElementById("emailWarning").className = "fa fa-circle iconFail"
        } else {
            document.getElementById("emailWarning").className = "fa fa-circle iconPass"
        }
        if (subscriptionType.value === "defaultValue") {
            document.getElementById("subscriptionTypeWarning").className = "fa fa-circle iconFail"
        } else {
            document.getElementById("subscriptionTypeWarning").className = "fa fa-circle iconPass"
        }

        if (finalCheck) {
            return;
        }
        props.setState(false)
    }
    const handleOnChange = (inputType, elementType) => {
        const inputElement = document.getElementById(inputType)
        if (inputElement.value === "" || inputElement.value === "defaultValue") {
            document.getElementById(elementType).className = "fa fa-circle iconFail"
        } else {
            document.getElementById(elementType).className = "fa fa-circle iconPass"
        }
    }
    return (
        <div id="bookFormContainer">
            <h2>Book now</h2>
            <div id="bookInputForm">
                <div>
                    {/*<p style={{color: "red"}} id="fullNameWarning"></p>*/}
                    <input type="text" placeholder="Full name" id="fullName"
                           onChange={() => handleOnChange("fullName", "fullNameWarning")}/>
                    <i className="fa fa-circle iconFail" id="fullNameWarning" title="The field must not be empty!"/>
                </div>
                <div>
                    {/*<p style={{color: "red"}} id="phoneNumberWarning"></p>*/}
                    <input type="number" min={0} placeholder="Phone number xxx/xxx-xxx" id="phoneNumber"
                           onChange={() => handleOnChange("phoneNumber", "phoneNumberWarning")}/>
                    <i className="fa fa-circle iconFail" id="phoneNumberWarning" title="The field must not be empty!"/>
                </div>
                <div>
                    {/*<p style={{color: "red"}} id="emailWarning"></p>*/}
                    <input type="email" placeholder="Email" id="email"
                           onChange={() => handleOnChange("email", "emailWarning")}/>
                    <i className="fa fa-circle iconFail" id="emailWarning" title="The field must not be empty!"/>
                </div>
                <div>
                    {/*<p style={{color: "red"}} id="subscriptionTypeWarning"></p>*/}
                    <select id="subscriptionTypeSelect"
                            onChange={() => handleOnChange("subscriptionTypeSelect", "subscriptionTypeWarning")}>
                        <option selected disabled hidden value="defaultValue">Choose subscription type</option>
                        <option value="homework">Home work</option>
                        <option value="facultywork">Faculty work</option>
                        <option value="companywork">Company work</option>
                    </select>
                    <i className="fa fa-circle iconFail" id="subscriptionTypeWarning"
                       title="Please select subscription type!"/>
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