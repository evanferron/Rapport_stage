import { useState } from "react";
import "./entreprise.scss";
import wave from "../../wave_bottom.svg";

const EntrepriseContent = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const contentEurial = (
    <section id="tab-content">
      <h2>C'est quoi Eurial ?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eaque
        deleniti neque cumque, accusamus placeat ullam totam sed corrupti
        consectetur nesciunt repellendus itaque excepturi amet obcaecati quae,
        nostrum dolorum quisquam?
      </p>
    </section>
  );
  const contentHistoire = (
    <section id="tab-content">
      <h2>Quelle est son histoire ?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eaque
        deleniti neque cumque, accusamus placeat ullam totam sed corrupti
        consectetur nesciunt repellendus itaque excepturi amet obcaecati quae,
        nostrum dolorum quisquam?
      </p>
    </section>
  );
  const contentOu = (
    <section id="tab-content">
      <h2>Où est présent Eurial ?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eaque
        deleniti neque cumque, accusamus placeat ullam totam sed corrupti
        consectetur nesciunt repellendus itaque excepturi amet obcaecati quae,
        nostrum dolorum quisquam?
      </p>
    </section>
  );
  const contentEnvironnement = (
    <section id="tab-content">
      <h2>Comment est l'environnement de travail ?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eaque
        deleniti neque cumque, accusamus placeat ullam totam sed corrupti
        consectetur nesciunt repellendus itaque excepturi amet obcaecati quae,
        nostrum dolorum quisquam?
      </p>
    </section>
  );

  return (
    <section id="main-entreprise-section">
      <span>
        <button
          className={`${currentTab == 1 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(1);
          }}
        >
          <p>Eurial </p>
          <p className="question-mark">?</p>
        </button>
        <button
          className={`${currentTab == 2 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(2);
          }}
        >
          <p>Histoire </p>
          <p className="question-mark">?</p>
        </button>
        <button
          className={`${currentTab == 3 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(3);
          }}
        >
          <p>Où </p>
          <p className="question-mark">?</p>
        </button>
        <button
          className={`${currentTab == 4 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(4);
          }}
        >
          <p>L'Environnment </p>
          <p className="question-mark">?</p>
        </button>
      </span>
      {
        [contentEurial, contentHistoire, contentOu, contentEnvironnement][
          currentTab - 1
        ]
      }
      <img id="wave-main-bottom" src={wave}></img>
    </section>
  );
};

export default EntrepriseContent;
