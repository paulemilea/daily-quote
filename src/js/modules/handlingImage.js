// @ts-nocheck

/**
 * Handles image loading and error events for a given HTMLImageElement
 * @param {object} obj The object containing information about the image, should have a 'photo' property representing the image URL
 * @param {HTMLImageElement} el The HTMLImageElement to be manipulated
 */
function handlingImage(obj, el) {
  const image = new Image();

  image.addEventListener('load', function () {
    obj.photo === ''
      ? ((el.src = 'img/no-photo.png'), (el.alt = 'No photo available'))
      : ((el.src = obj.photo), (el.alt = `${obj.author}'s photo`));
  });

  image.addEventListener('error', function () {
    el.src = 'img/no-photo.png';
    el.alt = 'No photo available';
  });

  image.src = obj.photo;
}

export { handlingImage };
