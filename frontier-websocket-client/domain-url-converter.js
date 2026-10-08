// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fr' to 'convertDomainUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 42970
         */
module.exports = function (module, exports, require) {
  function n(e, {
    dolaFillWWW: t = false
  } = {}) {
    if (typeof location == "undefined" || !e) {
      return e || "";
    }
    let {
      origin: i,
      host: n
    } = location;
    if (!e || !/^https?/i.test(i)) {
      return e;
    }
    let a = /(?:[\w-]+\.)*dola\.com/i.test(n);
    let r = /(?:[\w-]+\.)*cici\.com/i.test(n);
    if (!a && !r) {
      return e;
    }
    let o = /^\w+\:\/\/(?:[\w-]+\.)*dola\.com/i.test(e);
    let l = /^\w+\:\/\/(?:[\w-]+\.)*cici\.com/i.test(e);
    let s = e;
    if (a && l) {
      s = e.replace(/(^\w+\:\/\/(?:[\w-]+\.)*)cici\.com(.*)/i, "$1dola.com$2");
    }
    if (r && o) {
      s = e.replace(/(^\w+\:\/\/(?:[\w-]+\.)*)dola\.com(.*)/i, "$1cici.com$2");
    }
    if (a && t && /^\w+\:\/\/dola\.com/i.test(s)) {
      s = s.replace(/(^\w+\:\/\/(?:[\w-]+\.)*)dola\.com(.*)/i, "$1www.dola.com$2");
    }
    return s;
  }
  if (typeof location != "undefined" && location.host) {
    /^((www|beta|inhouse)\.)?dola\.com/i.test(location.host);
  }
  if (typeof location != "undefined" && location.host) {
    if (!/^((www|beta|inhouse)\.)?dola\.com/i.test(location.host)) {
      ["chrome:", "doubao:", "cici:", "dola:"].includes(location.protocol);
    }
  }
  require.d(exports, {
    convertDomainUrl: function () {
      return n;
    }
  });
}