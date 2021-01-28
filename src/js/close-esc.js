import imagesApi from './images-api';

function closeEsc(event) {
  if(event.code === 'Escape') {
    window.removeEventListener('keydown',closeEsc);
    imagesApi.closeImage()

  }

}

export default closeEsc;
