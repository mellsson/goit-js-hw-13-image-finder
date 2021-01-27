import refs from './refs';
import imagesApi from './images-api';
import markUp from './markup';
import 'basiclightbox/dist/basicLightbox.min.css';


function fetchImages() {
  refs.button.classList.add('visibility');
  refs.loader.classList.add('is-active');
  imagesApi.fetchImages().then(images => {
    markUp(images);

      // lazyLoad();

    refs.gallery.addEventListener('click',openImages);
    refs.button.classList.remove('visibility');

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth'
      });

  }
  ).finally(()=> {
    refs.loader.classList.remove('is-active');
  }).catch(error =>console.log(error))
}


function lazyLoad() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imagesApi.fetchImages().then(images => {
            markUp(images);
          }

        )
      }
      // observer.unobserve(entry.target)
      observer.observe(document.querySelector('li:last-child'))
    })
  }, {

    threshold: 1
  })



  observer.observe(document.querySelector('li'))
}


function openImages(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

 imagesApi.refImageLarge(event.target.dataset.src);
 imagesApi.openImage();

  window.addEventListener('keydown',closeEsc)
}


function closeEsc(event) {
  if(event.code === 'Escape') {
    window.removeEventListener('keydown',closeEsc);
    imagesApi.closeImage()

  }

}






export default fetchImages;
