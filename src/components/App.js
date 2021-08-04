import '../css/App.css';
// styled components does not display attrs.
import styled from 'styled-components'

import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import BookForm from "./BookForm";

const App = () => {
    const [bookOn, setBookState] = useState(false)

    useEffect(() => {
    }, [bookOn])

    const setState = (newBookOn) => {
        console.log(bookOn)
        setBookState(newBookOn)
    }
    return (
        <div id="customContainer">
            <div id="contentWrapper">
                <Sidebar setState={setState}/>
                {!bookOn ? <Main/> : <BookForm setState={setState}/>}
            </div>
        </div>
    );
}

export default App;
