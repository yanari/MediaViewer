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
  const bounding = ref.current.getBoundingClientRect();
  return (
    bounding.top >= 0 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export function isInViewportPercentage (ref, percentage) {
  if (ref.current === null) return false;
  const bounding = ref.current.getBoundingClientRect();
  const screenPercentage = percentage * (window.innerHeight || document.documentElement.clientHeight);
  return (
    bounding.bottom >= screenPercentage && bounding.top <= screenPercentage
  );
}