import eurial_logo from "../../assets/Eurial_logo.png"
import header_eurial_presentation from "../../assets/header_eurial_presentation.png"

class Article {
    mainImage;
    mainText;
    title;
    images;
    text;
    date;

    Article(mainImage, title, mainText, images, text, date) {
        this.mainImage = mainImage;
        this.title = title;
        this.mainText = mainText;
        this.text = text;
        this.images = images;
        this.date = date;
    }
}

// example of one article
const article1 = {
    mainImage: banniere_eurial,
    mainText: "Mes premiers jours ! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ",
    title: "main text",
    images: [
        eurial_logo,
        header_eurial_presentation,
    ],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic ducimus quis dolores, delectus in, molestiae explicabo consectetur pariatur ad consequuntur atque, labore illo laboriosam maiores ratione voluptas nisi unde?",
    date: "22/06/2024 20:17",
};

export const allArticles = [article1, ""];
