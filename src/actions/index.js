import STORE_CONTENT from '../action-types';

function storeContent(payload) {
  return { type: STORE_CONTENT, payload };
}

export default storeContent;
