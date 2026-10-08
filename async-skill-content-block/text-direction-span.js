// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'TextDirectionSpan'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 201892
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      className: t,
      style: n,
      children: o,
      dir: a
    } = e;
    let s = rtlLanguageDetectionHook.useTextDirection(isStringTypeCheck.isString(o) ? o : "");
    if (!isStringTypeCheck.isString(o)) {
      s = undefined;
    }
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: t,
      style: n,
      dir: a ?? s,
      children: o
    });
  };
  require.d(exports, {
    TextDirectionSpan: function () {
      return o;
    }
  });
}