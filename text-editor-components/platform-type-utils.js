// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cy' to 'isDeepEqual'
// - Renamed export 'Dt' to 'isAndroidDevice'
// - Renamed export 'XO' to 'isDocLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 870332
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  let o = e => e.type === "doc_link";
  let a = () => typeof navigator != "undefined" && /Android/.test(navigator.userAgent);
  let l = (e, n) => deepEqualUtil_1.deepEqual(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n)));
  require.d(exports, {
    isDeepEqual: function () {
      return l;
    },
    isAndroidDevice: function () {
      return a;
    },
    isDocLink: function () {
      return o;
    }
  });
}