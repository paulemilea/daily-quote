// @ts-nocheck
'use strict';

import { displayQuote } from './modules/displayQuote.js';

const API_URL = 'https://thatsthespir.it/api';
const getQuoteBtn = document.querySelector('.get-quote-btn');

/**
 * The getQuote function performs an API call to retrieve data about quotes from famous people
 */
async function getQuote() {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const data = await res.json();
    displayQuote(data);
  } catch (err) {
    console.error('Error fetching or processing quote:', err);
  }
}

getQuote();

getQuoteBtn.addEventListener('click', getQuote);
