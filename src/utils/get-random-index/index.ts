import { INDEX } from 'typings';

/**
 * Return a random grid index between 0 to 8
 */
function getRandomIndex(): INDEX {
  return Math.floor(Math.random() * Math.floor(9)) as INDEX;
}

export default getRandomIndex;
