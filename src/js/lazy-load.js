import imagesApi from './images-api';
import markUp from './markup';

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

export default lazyLoad;
