import "./styles/style.scss";

import { pokemonArray } from './data/pokemon.ts';

interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

function capitalizeFirstWord(string: string): string {
    const words = string.split(' ');
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(' ');
};


function createPokemonCard(pokemon: Pokemon) {

    const cardContainer = document.querySelector('.card-container');

    if (!cardContainer) {
        console.error("Card container not found!");
        return;
    }

    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = pokemon.sprite;
    image.alt = pokemon.name;
    image.classList.add('card__image');

    const content = document.createElement ('div');
    card.classList.add('card__content');

    const heading = document.createElement('h2');
    heading.textContent = capitalizeFirstWord(pokemon.name);
    heading.classList.add('card__heading');

    const text = document.createElement('p');
    text.textContent = `${capitalizeFirstWord(pokemon.name)} ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(', ')} pokemon.`;
    text.classList.add('card__text', 'grey-text');

    card.appendChild(content);
    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(text);
    cardContainer.appendChild(card);
}

function renderPokemonCards() {
    pokemonArray.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
}

document.addEventListener('DOMContentLoaded', renderPokemonCards);