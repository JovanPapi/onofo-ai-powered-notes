import React, {useState} from 'react'
import "../css/Main.css"

const Main = () => {
    const [state, setState] = useState({
        originalFirstDesc: "Real-time structuring of notes",
        firstDesc: "The AI feature in the background will automatically recognize the content " +
            "(title, body, image, video, skatch) and " +
            "it will structure the note into a usable and printable ready paper.",
        originalSecondDesc: "Simultaneous writing and voice transcription",
        secondDesc: "One can either work with the AI powered voice transcription, " +
            "type down the notes manually, or it can run the AI powered voice assistant while manually typing.",
        originalThirdDesc: "Group collaboration",
        thirdDesc: "A group of students or coworkers can collaborate on the same document simultaneously.",
        originalFourthDesc: "Scoring",
        fourthDesc: "Onofo will have a scoring feature that will measure the contribution in " +
            "% when multiple people work on the same note and provide a rank to keep collaborators engaged and challenged.",
        originalFifthDesc: "Time Assistant",
        fifthDesc: "Onofo will have an integrated AI powered Time Assistant, that upon " +
            "completion of the note will provide insight about how much time one" +
            " will need to invest to review/study the notes."


    })
    const handleOnMouseEnterEvent = (desc) => {
        let div = document.getElementById("fullDesc")
        div.innerHTML = desc
        div.style.border = "solid red 2px"
    }
    const handleOnMouseLeaveEvent = () => {
        let div = document.getElementById("fullDesc")
        div.innerHTML = ""
        div.style.border = "none"
    }
    return (
        <div id="mainContainer">
            <h1>These are some of the main features of the AI-powered notes platform and application</h1>
            <div style={{padding: "10px", paddingTop: "50px"}}>
                <h4 style={{padding: "20px"}}>Hover over the boxes...</h4>
                <div id="mainGridLayout">
                    <div onMouseEnter={() => handleOnMouseEnterEvent(state.firstDesc)}
                         onMouseOut={() => handleOnMouseLeaveEvent()}>
                        <span id="firstDesc">{state.originalFirstDesc}</span>
                    </div>
                    <div onMouseEnter={() => handleOnMouseEnterEvent(state.secondDesc)}
                         onMouseLeave={() => handleOnMouseLeaveEvent()}>
                        <span id="secondDesc">{state.originalSecondDesc}</span>
                    </div>
                    <div onMouseEnter={() => handleOnMouseEnterEvent(state.thirdDesc)}
                         onMouseLeave={() => handleOnMouseLeaveEvent()}>
                        <span id="thirdDesc">{state.originalThirdDesc}</span>
                    </div>
                    <div onMouseEnter={() => handleOnMouseEnterEvent(state.fourthDesc)}
                         onMouseLeave={() => handleOnMouseLeaveEvent()}>
                        <span id="fourthDesc">{state.originalFourthDesc}</span>
                    </div>
                    <div onMouseEnter={() => handleOnMouseEnterEvent(state.fifthDesc)}
                         onMouseLeave={() => handleOnMouseLeaveEvent()}>
                        <span id="fifthDesc">{state.originalFifthDesc}</span>
                    </div>
                </div>
            </div>


            <div id="fullDesc"></div>
        </div>
    )
}
export default Main