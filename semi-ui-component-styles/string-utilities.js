// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kT' to 'createFormatter'
// - Renamed export 'us' to 'findAllIndices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27145.66d944df.js
         * chunkId: 27145
         * moduleId: 612303
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let i = function (e, {
    warn: t = true
  } = {}) {
    return function (t, {
      sprintf: r = [],
      defaultValue: i
    } = {}) {
      let l = e[t];
      if (isStringTypeCheck.isString(l)) {
        return r.reduce((e, t) => e.replace("%s", t), l);
      } else {
        return i ?? String(t);
      }
    };
  };
  function l(e, t) {
    let r;
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let i = e.length;
    if (i === 0) {
      return [];
    }
    let l = 0;
    let s = [];
    if (!n) {
      t = t.toLowerCase();
      e = e.toLowerCase();
    }
    do {
      if ((r = t.indexOf(e, l)) > -1) {
        s.push(r);
        l = r + i;
      }
    } while (r > -1);
    return s;
  }
  require.d(exports, {
    createFormatter: function () {
      return i;
    },
    findAllIndices: function () {
      return l;
    }
  });
}