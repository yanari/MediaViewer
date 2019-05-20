const clickTimeout = {
  count: 0,
  id: null,
  waitingTime: 400,
};

/**
 * Composes single-argument functions from right to left.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing functions from right to
 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
 */
export function compose (...funcs) {
  return (arg) => funcs.reduceRight((composed, f) => f(composed), arg);
}

export function emptyChar (value) {
  return value && value !== '0' ? value : '-';
}

export function handleDblClick (dblClickCallback, singleClickCallback) {
  clickTimeout.count++;
  if (clickTimeout.count === 1) {
    clickTimeout.id = setTimeout(() => {
      clickTimeout.count = 0;
      if (singleClickCallback) {
        singleClickCallback.call();
      }
    }, clickTimeout.waitingTime);
  } else if (clickTimeout.count === 2) {
    clearTimeout(clickTimeout.id);
    clickTimeout.count = 0;
    dblClickCallback.call();
  }
}

export function isOutsideClick (e, dom, extraHeight = 0) {
  if (dom === null) {
    return true;
  }
  const componentOffset = dom.getBoundingClientRect();
  /*
   console.log(
   '1º', e.clientX < componentOffset.left,
   '2º', e.clientX > componentOffset.left + componentOffset.width,
   '3º', e.clientY < componentOffset.top,
   '4º', e.clientY > componentOffset.top + componentOffset.height + extraHeight,
   e.clientY, componentOffset.top, componentOffset.height
   );
   */
  return (e.clientX < componentOffset.left
  || e.clientX > componentOffset.left + componentOffset.width
  || e.clientY < componentOffset.top
  || e.clientY > componentOffset.top + componentOffset.height + extraHeight);
}

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

export function regExpFindAll (value) {
  const newValue = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return new RegExp(newValue, 'g');
}

export function stripNonNumeric (value, limit) {
  return (value || '').toString().replace(/\D/g, '').substr(0, limit || 40);
}

export function strToNumeric (value) {
  // pt_br
  return value && typeof value === 'string' ? value.replace(regExpFindAll('.'), '').replace(',', '.') : value;
}

export function stripTags (value) {
  return typeof value === 'string' ? value.replace(/(<([^>]+)>)/ig, '') : value;
}

export function zeroChar (value) {
  return value || (value === 0 ? value : '-');
}

export function getFullUrl () {
  return window.location.pathname + window.location.search;
}

export function getNumberOptions (number) {
  const options = [];
  for (let i = 1; i <= number; i++) {
    options.push({id: i, label: i});
  }
  return options;
}

export function resolveApiUrl (path) {
  // Tratamento aqui por que o servidor pode não redirecionar redirecionar o www.* para *
  const hostName = window.location.hostname.replace('www.', '');
  if (hostName.indexOf('api') === -1) {
    let resolvedPath = null;
    switch (hostName) {
      case 'en.analise.com':
      case 'en.analise.local':
        resolvedPath = hostName.replace('en.', 'api-en.') + path;
        break;
      case 'es.analise.com':
      case 'es.analise.local':
        resolvedPath = hostName.replace('es.', 'api-es.') + path;
        break;
      case 'homolog.analise.com':
      case 'homolog.analise.local':
        resolvedPath = hostName.replace('homolog.', 'homologapi.') + path;
        break;
      case 'homolog-en.analise.com':
      case 'homolog-en.analise.local':
        resolvedPath = hostName.replace('homolog-en.', 'homologapi-en.') + path;
        break;
      case 'homolog-es.analise.com':
      case 'homolog-es.analise.local':
        resolvedPath = hostName.replace('homolog-es.', 'homologapi-es.') + path;
        break;
      case 'site.analise.com':
      case 'site.analise.local': {
        // FIXME: site. temporário, até o release
        resolvedPath = hostName.replace('site.', 'api.') + path;
        break;
      }
      default:
        // analise.com
        // analise.local
        resolvedPath = 'api.' + hostName + path;
    }
    return '//' + resolvedPath;
  } else {
    return path;
  }
}

export function resolveLanguageUrl (language) {
  const hostName = window.location.hostname.replace('www.', '');
  const href = window.location.href.replace('https://', '').replace('http://', '').replace('www.', '');
  const defaultLanguage = hostName.indexOf('.com') !== -1 ? 'site.' : ''; // FIXME: site. temporário, até o release
  const resolvedLanguage = language === 'pt_br' ? defaultLanguage : language + '.';
  let resolvedHref = null;
  switch (hostName) {
    case 'en.analise.com':
    case 'en.analise.local':
      resolvedHref = href.replace('en.', resolvedLanguage);
      break;
    case 'es.analise.com':
    case 'es.analise.local':
      resolvedHref = href.replace('es.', resolvedLanguage);
      break;
    case 'site.analise.com':
    case 'site.analise.local':
      // FIXME: site. temporário, até o release
      resolvedHref = href.replace('site.', resolvedLanguage);
      break;
    default:
      // analise.com
      // analise.local
      resolvedHref = resolvedLanguage + href;
  }
  return '//' + resolvedHref;
}

export function queryStringStringify (obj) {
  // o location.search adicona "?" automaticamente, mas se usarmos em outro lugar tem que lembrar de por
  // Então é melhor deixar aqui por padrão já que o location.search não duplica, caso exista
  return '?' + Object.keys(obj).reduce((a, k) => {
    a.push(k + '=' + (obj[k] ? encodeURIComponent(obj[k]) : ''));
    return a;
  }, []).join('&');
}

export function queryStringParse (locationSearch) {
  const search = locationSearch.substring(1);
  const json = '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}';
  return jsonParse(json) || {};
}

export function regExpEscape (value) {
  return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'); // \u00E0-\u00FC
}
