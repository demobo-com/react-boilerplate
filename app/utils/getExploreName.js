export default function getExploreName() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    return 'opera';
  } else if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1) {
    const ieVersion = getOtherIEVersion(userAgent);
    return `ie ${ieVersion}`;
  } else if (userAgent.indexOf('Edge') > -1) {
    return 'ie edge';
  } else if (userAgent.indexOf('Firefox') > -1) {
    return 'firefox';
  } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    return 'safari';
  } else if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1) {
    return 'chrome';
  } else if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return 'ie ie11';
  }
  return 'unkonwn';
}

function getOtherIEVersion(userAgent) {
  const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
  reIE.test(userAgent);
  const fIEVersion = parseFloat(RegExp('$1'));
  switch (fIEVersion) {
    case '7':
    case '8':
    case '9':
    case '10':
      return fIEVersion;
    default:
      return 6;
  }
}
