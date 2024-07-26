import "./listArticles.scss"
import arrow from "./arrow-left.svg"
import { useState, useEffect } from "react";

const ListArticles = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    const [isBottom, setIsBottom] = useState(false)

    const scrollHandler = () => {
        const y = window.scrollY
        if ((checkElementPosition(document.getElementById("wave-main-bottom")) ||
            checkElementPosition(document.getElementById("wave-header"))) &&
            isFixed) {
            setIsBottom(y > 500 ? true : false)
            console.log("defixing menu")
            setIsFixed(false)
        } else if (!checkElementPosition(document.getElementById("wave-main-bottom")) &&
            !checkElementPosition(document.getElementById("wave-header")) &&
            y > 200 &&
            !isFixed) {
            console.log("fixing menu")
            setIsFixed(true)
        }
    }

    const checkElementPosition = (el) => {
        const { top, left, bottom, right } = el.getBoundingClientRect() // the element coo that the menu cannot cross
        const { innerHeight, innerWidth } = window;
        return top >= 0 && bottom <= innerHeight;
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () =>
            window.removeEventListener("scroll", scrollHandler);
    }, [isFixed])

    return (
        <section className={`main-list-articles ${isFixed ? "menu-articles-fixed" : `menu-articles-unfixed ${isBottom ? "menu-articles-bottom" : "menu-articles-top"}`}`} id={isExpanded ? "menu-expanded" : "menu-not-expanded"}>
            <ul>
                <li>
                    <span id="is-selected">
                        <p>1</p>
                    </span>
                    <p className='title-article'>Mon arrivé dans l'entreprise</p>
                </li>
                <li>
                    <span>
                        <p>2</p>
                    </span>
                    <p className='title-article'>Découverte des Technos</p>
                </li>
                <li>
                    <span>
                        <p>3</p>
                    </span>
                    <p className='title-article'>Mon premier Projet</p>
                </li>
                <li>
                    <span>
                        <p>4</p>
                    </span>
                    <p className='title-article'>Les modifications</p>
                </li>
                <li>
                    <span>
                        <p>5</p>
                    </span>
                    <p className='title-article'>Bilan</p>
                </li>
            </ul>
            <button className="arrow-slide" id={isExpanded ? "to-left" : "to-right"} onClick={() => {
                setIsExpanded(!isExpanded)
                document.getElementsByClassName('arrow-slide')[0].blur()
            }}><img src={arrow} alt="button display image" /></button>
        </section>
    );
};

export default ListArticles;