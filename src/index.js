import './styles.scss';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import 'material-design-icons/iconfont/material-icons.css'
import 'pure-css-loader/dist/css-loader.css'
import fetchImages from './js/fetch-images'
import searchForm from './js/search-form'


refs.formSearchInput.addEventListener('input',debounce(searchForm,500));
refs.button.addEventListener('click',fetchImages);









