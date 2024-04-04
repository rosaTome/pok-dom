import "./styles/style.scss";

import { pokemonArray } from './data/pokemon.ts';

interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

function createPokemonCard(pokemon: Pokemon) {

    const cardContainer: HTMLDivElement | null = document.querySelector('.card-container');

    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = pokemon.image;
    image.alt = pokemon.name;
    image.classList.add('card__image');

    const content = document.createElement ('div');
    card.classList.add('card__content');

    const heading = document.createElement('h2');
    heading.textContent = pokemon.name;
    heading.classList.add('card__heading');

    const text = document.createElement('p');
    text.textContent = `Type: ${pokemon.types}`;
    text.classList.add('card__text');

    content.appendChild(heading);
    content.appendChild(text);
    content.appendChild(image);
    card.appendChild(content);

    cardContainer.appendChild(card);

    if (!cardContainer || !card || !image ||!content || !heading || !text ) {
        console.error("Card container not found!");
        return;
    }
}

function renderPokemonCards() {
    pokemonArray.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
}

document.addEventListener('DOMContentLoaded', renderPokemonCards);
