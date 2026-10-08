// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R4' to 'getSizeAbbrev'
// - Renamed export 'hR' to 'getStandardAbbrev'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 464464
         */
module.exports = function (module, exports, require) {
  var r = ["large", "medium", "small"];
  var i = ["extra-large", "extra-small"];
  var o = {
    "extra-large": "xl",
    large: "lg",
    medium: "md",
    small: "sm",
    "extra-small": "xs"
  };
  function s(t) {
    return r.includes(t);
  }
  function a(t, e) {
    if (s(t)) {
      return o[t];
    } else if (e && s(t)) {
      return o[e];
    } else {
      return "";
    }
  }
  function u(t) {
    if (r.includes(t) || i.includes(t)) {
      return o[t];
    }
  }
  require.d(exports, {
    getSizeAbbrev: function () {
      return u;
    },
    getStandardAbbrev: function () {
      return a;
    }
  });
}