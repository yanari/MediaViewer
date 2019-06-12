export function jsonParse (value) {
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }
  return value;
}

export function queryStringParse (locationSearch) {
  const search = locationSearch.substring(1);
  const json = '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}';
  return jsonParse(json) || {};
}

export function isInViewPort (ref) {
  if (ref.current === null) return false;
  const bounding = ref.current.refCard.current.getBoundingClientRect();
  return (
    bounding.top >= 0 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}