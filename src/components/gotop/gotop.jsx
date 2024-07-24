import arrow from "./arrowtop.svg"
import { useState, useEffect } from "react";
import "./gotop.scss"

const Gotop = () => {
    const [idButton, setIdButton] = useState("hide-button-go-top")
    const scrollHandler = () => {
        const y = window.scrollY
        if (y > 350 && idButton == "hide-button-go-top") {
            console.log("showing button")
            setIdButton('show-button-go-top')
        } else if (y < 250 && idButton == "show-button-go-top") {
            console.log("hiding button")
            setIdButton('hide-button-go-top')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () =>
            window.removeEventListener("scroll", scrollHandler);
    }, [idButton])


    return (
        <button onClick={() => {
            window.location.href = "#header"
        }} id={idButton} className="gotop-button">
            <img src={arrow} />
        </button>
    );
};

export default Gotop;