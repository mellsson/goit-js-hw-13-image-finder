import refs from './refs';
import imagesApi from './images-api';
import markUp from './markup';
import 'basiclightbox/dist/basicLightbox.min.css';
import openImages from './open-images';
import lazyLoad from './lazy-load';


function fetchImages() {
  refs.button.classList.add('visibility');
  refs.loader.classList.add('is-active');
  imagesApi.fetchImages().then(images => {

    if(images.length === 0) {
     return;
    }

    markUp(images);

      // lazyLoad();

    refs.gallery.addEventListener('click',openImages);
    refs.button.classList.remove('visibility');
     if(imagesApi.page > 2) {
       window.scrollBy(
         {
           top:window.innerHeight,
           behavior: 'smooth',})
     }

  }
  ).finally(()=> {
    refs.loader.classList.remove('is-active');
  }).catch(error =>console.log(error))
}


export default fetchImages;
