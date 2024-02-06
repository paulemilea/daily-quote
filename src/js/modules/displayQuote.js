// @ts-nocheck
import { handlingImage } from './handlingImage.js';

const authorPhotoEl = document.querySelector('.author-photo');
const authorNameEl = document.querySelector('.author-name');
const authorQuoteEl = document.querySelector('.author-quote');

/**
 * The displayQuote function displays data from the received object in the UI
 * @param {object} obj The object received from the API call
 */
function displayQuote(obj) {
  handlingImage(obj, authorPhotoEl);

  authorNameEl.textContent = obj.author;
  authorQuoteEl.innerHTML = obj.quote;
}

export { displayQuote };
