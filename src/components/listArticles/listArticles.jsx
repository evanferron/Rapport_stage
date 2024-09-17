import "./listArticles.scss";
import arrow from "./arrow-left.svg";
import { useState, useEffect } from "react";

const ListArticles = ({ setArticleId, articleId }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const scrollHandler = () => {
    const y = window.scrollY;
    if (
      (checkElementPosition(document.getElementById("wave-main-bottom")) ||
        checkElementPosition(document.getElementById("wave-header"))) &&
      isFixed
    ) {
      setIsBottom(
        checkElementPosition(document.getElementById("wave-header"))
          ? false
          : true
      );
      console.log("defixing menu");
      setIsFixed(false);
    } else if (
      !checkElementPosition(document.getElementById("wave-main-bottom")) &&
      !checkElementPosition(document.getElementById("wave-header")) &&
      y > 200 &&
      !isFixed
    ) {
      console.log("fixing menu");
      setIsFixed(true);
    }
  };

  const checkElementPosition = (el) => {
    const { top, left, bottom, right } = el.getBoundingClientRect(); // the element coo that the menu cannot cross
    const { innerHeight, innerWidth } = window;
    return top >= 0 && bottom <= innerHeight;
  };

  const changeArticleHandler = (id) => {
    setArticleId(id);
    document.getElementById("articles-container").scrollIntoView();
    setIsExpanded(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isFixed]);

  return (
    <section
      className={`main-list-articles ${
        isFixed
          ? "menu-articles-fixed"
          : `menu-articles-unfixed ${
              isBottom ? "menu-articles-bottom" : "menu-articles-top"
            }`
      }`}
      id={isExpanded ? "menu-expanded" : "menu-not-expanded"}
    >
      <ul>
        <li onClick={() => changeArticleHandler(0)}>
          <span id={`${articleId == 0 ? "is-selected" : null}`}>
            <p>1</p>
          </span>
          <p className="title-article">Mon arrivée dans l'entreprise</p>
        </li>
        <li onClick={() => changeArticleHandler(1)}>
          <span id={`${articleId == 1 ? "is-selected" : null}`}>
            <p>2</p>
          </span>
          <p className="title-article">Découverte des Technos</p>
        </li>
        <li onClick={() => changeArticleHandler(2)}>
          <span id={`${articleId == 2 ? "is-selected" : null}`}>
            <p>3</p>
          </span>
          <p className="title-article">Mon premier Projet</p>
        </li>
        <li onClick={() => changeArticleHandler(3)}>
          <span id={`${articleId == 3 ? "is-selected" : null}`}>
            <p>4</p>
          </span>
          <p className="title-article">Les modifications</p>
        </li>
        <li onClick={() => changeArticleHandler(4)}>
          <span id={`${articleId == 4 ? "is-selected" : null}`}>
            <p>5</p>
          </span>
          <p className="title-article">Bilan</p>
        </li>
      </ul>
      <button
        className="arrow-slide"
        id={isExpanded ? "to-left" : "to-right"}
        onClick={() => {
          setIsExpanded(!isExpanded);
          document.getElementsByClassName("arrow-slide")[0].blur();
        }}
      >
        <img src={arrow} alt="button display image" />
      </button>
    </section>
  );
};

export default ListArticles;
