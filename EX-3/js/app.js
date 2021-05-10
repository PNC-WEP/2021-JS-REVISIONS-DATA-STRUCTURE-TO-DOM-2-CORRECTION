
let posts = [{
        id: 1,
        title: "Natural in the world",
        video: "videos/video_1.mp4",
        description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
        date: "14 / April / 2021",
        author: "Rady Cody"
    },
    {
        id: 2,
        title: "Natural in the world",
        video: "videos/video_2.mp4",
        description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
        date: "14 / April / 2021",
        author: "Rady Cody"
    },
    {
        id: 3,
        title: "Natural in the world",
        video: "videos/video_3.mp4",
        description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
        date: "14 / April / 2021",
        author: "Rady Cody"
    },
];

// container
const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

for (let post of posts) {
    // card
    const card = document.createElement('div');
    card.className = "card";

    // card image
    const cardImage = document.createElement('div');
    cardImage.className = "card-img";

    // image in card
    const movie = document.createElement('video');
    movie.className = "movie";
    movie.setAttribute('controls', '')
    movie.src = post.video;

    // card body
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    // card title
    const cardTitle = document.createElement('h2');
    cardTitle.className = "card-title";
    cardTitle.textContent = post.title;

    // card description
    const cardDescription = document.createElement('p');
    cardDescription.className = "description";
    cardDescription.textContent = post.description;

    // card footer
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    // card date 
    const dates = document.createElement('span');
    dates.setAttribute('id', 'date');
    dates.textContent = post.date;

    // card author name
    const author = document.createElement('span');
    author.setAttribute('id', 'author');
    author.textContent = post.author;



    // add image to card image
    cardImage.appendChild(movie);

    // add title and description to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);

    // add date and author to footer
    cardFooter.appendChild(dates);
    cardFooter.appendChild(author);

    // add card image, card body , card footer to card
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    container.appendChild(card);

}