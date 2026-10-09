// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'resolveImageSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 919160
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let l = async e => {
    let {
      docEditor: t,
      attributes: r
    } = e;
    let {
      image: l,
      alt: o,
      src: a
    } = r;
    if (l !== "true") {
      return;
    }
    if (a) {
      return a;
    }
    let {
      id: s,
      key: d
    } = safeJsonUtils.safeParse(o, {});
    try {
      var u;
      var c;
      if (isStringTypeCheck.isString(s) && s) {
        let e = await ((u = t.image) === null || u === undefined ? undefined : u.loadImageById({
          id: s
        }));
        if (e == null) {
          return undefined;
        } else {
          return e.src;
        }
      }
      if (isStringTypeCheck.isString(d) && d) {
        let e = await ((c = t.image) === null || c === undefined ? undefined : c.loadImageByKey({
          key: d
        }));
        if (e == null) {
          return undefined;
        } else {
          return e.src;
        }
      }
    } catch {
      return;
    }
  };
  require.d(exports, {
    resolveImageSource: function () {
      return l;
    }
  });
}