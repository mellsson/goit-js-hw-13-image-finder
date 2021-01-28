import imagesApi from './images-api';
import closeEsc from './close-esc';
function openImages(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  imagesApi.refImageLarge(event.target.dataset.src);
  imagesApi.openImage();

  window.addEventListener('keydown',closeEsc)
}

export default openImages;
