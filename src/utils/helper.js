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