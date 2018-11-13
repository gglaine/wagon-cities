// TODO: add and export your own actions

import cities from '../cities';

export function setFlats() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}
