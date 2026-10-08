// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R4' to 'convertSize'
// - Renamed export 'hR' to 'getSizeCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 293585
         */
module.exports = function (module, exports, require) {
  var i = ["large", "medium", "small"];
  var o = ["extra-large", "extra-small"];
  var a = {
    "extra-large": "xl",
    large: "lg",
    medium: "md",
    small: "sm",
    "extra-small": "xs"
  };
  function l(e) {
    return i.includes(e);
  }
  function s(e, n) {
    if (l(e)) {
      return a[e];
    } else if (n && l(e)) {
      return a[n];
    } else {
      return "";
    }
  }
  function c(e) {
    if (i.includes(e) || o.includes(e)) {
      return a[e];
    }
  }
  require.d(exports, {
    convertSize: function () {
      return c;
    },
    getSizeCode: function () {
      return s;
    }
  });
}