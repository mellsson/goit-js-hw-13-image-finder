import refs from './refs';
import fetchImages from './fetch-images';
import imagesApi from './images-api'
import {notificationsSuccess,notificationsNotice}from './notifications';

function searchForm(event) {
  refs.gallery.innerHTML='';
  imagesApi.query = event.target.value;

  if(!imagesApi.query) {
    refs.gallery.innerHTML='';
    refs.button.classList.add('visibility');
    notificationsNotice();
    return;
  }


  notificationsSuccess(imagesApi.query);
  imagesApi.resetPage();

  fetchImages();

}

export default searchForm;
