// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'getSpacingIndices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 279300
         */
module.exports = function (module, exports, require) {
  var stringMatchAllPolyfillWrapper = require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var o = stringMatchAllPolyfillWrapper;
  let l = /\p{sc=Han}/gu;
  let s = /\p{sc=Latin}|\p{sc=Greek}|[0-9]/gu;
  let a = RegExp(`(${l.source})(?=(${s.source}))|(${s.source})(?=(${l.source}))`, "gu");
  function c(e) {
    let i = [];
    for (let {
      index: n
    } of o(e, a)) {
      if (typeof n == "number") {
        i.push(n);
      }
    }
    return i;
  }
  require.d(exports, {
    getSpacingIndices: function () {
      return c;
    }
  });
}