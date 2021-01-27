import * as basicLightbox from 'basiclightbox';

const apiKey='19660658-df8ff8bd936b185aad4fd3dcc';

export default {
  searchQuery: '',
  page:1,
  imageLarge:'',
  instance:'',
  fetchImages() {
  const url=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}
&page=${this.page}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(({hits}) => {
      this.page+=1;
      return hits;
      }
    )
},
resetPage() {
    this.page=1
},

get query() {
    return this.searchQuery;
},

set query(value) {
  this.searchQuery=value;
},

refImageLarge(value) {
    this.imageLarge=value;
},
  openImage() {
     this.instance= basicLightbox.create(`
    <img src='${this.imageLarge}' width='1000' height='600'>
`);

    this.instance.show();


  },
closeImage() {
  this.instance.close()
},

};
