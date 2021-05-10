let post = {
    id: 1,
    title: "Natural in the world",
    image: "https://www.pure-leisure.co.uk/wp-content/uploads/2019/03/3-Reasons-Why-Conservation-Is-So-Important.jpg",
    descriptin: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "14 / April / 2021",
    author: "Rady Cody"
};

// container
const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

// card
const card = document.createElement('div');
card.className = "card";

// card image
const cardImage = document.createElement('div');
cardImage.className = "card-img";

// image in card
const image = document.createElement('img');
image.className = "img";
image.src = post.image;

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
cardDescription.textContent = post.descriptin;

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
cardImage.appendChild(image);

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

// add card to container
container.appendChild(card);