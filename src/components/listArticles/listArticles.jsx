import "./listArticles.scss"
import arrow from "../gotop/arrowtop.svg"

const ListArticles = () => {
    return (
        <section id="main-list-articles">
            <ul>
                <li>
                    <span>
                        <p>1</p>
                    </span>
                    <p className='title-article'>Mon arrivé dans l'entreprise</p>
                </li>
                <li>
                    <span>
                        <p>1</p>
                    </span>
                    <p className='title-article'>Mon arrivé dans l'entreprise</p>
                </li>
                <li>
                    <span>
                        <p>1</p>
                    </span>
                    <p className='title-article'>Mon arrivé dans l'entreprise</p>
                </li>
                <li>
                    <span>
                        <p>1</p>
                    </span>
                    <p className='title-article'>Mon arrivé dans l'entreprise</p>
                </li>
                <li>
                    <span>
                        <p>1</p>
                    </span>
                    <p className='title-article'>Mon arrivé dans l'entreprise</p>
                </li>
            </ul>
            <button className="arrow-slide" id="to-left"><img src={arrow} alt="button display image" /></button>
        </section>
    );
};

export default ListArticles;