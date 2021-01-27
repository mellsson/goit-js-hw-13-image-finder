import refs from './refs';
import tplImagesCards from '../templates/imageCards.hbs';

function markUp(cards) {
  refs.gallery.insertAdjacentHTML('beforeend',tplImagesCards(cards));
}

export default markUp;
