// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hr' to 'getCharCode'
// - Renamed export 'uc' to 'mapProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 633011
         */
module.exports = function (module, exports, require) {
  var booleanTypeUtils = require("boolean-type-utils") /*id: 488634*/;
  function o(t) {
    var e;
    var r = t.keyCode;
    if ("charCode" in t) {
      if ((e = t.charCode) === 0 && r === 13) {
        e = 13;
      }
    } else {
      e = r;
    }
    if ((e = e === 10 ? 13 : e) >= 32 || e === 13) {
      return e;
    } else {
      return 0;
    }
  }
  function i(t, e, r, o) {
    Object.keys(e).forEach(function (i) {
      var u = e[i];
      if (booleanTypeUtils.isFunctionCheck(u)) {
        t[i] = u(r);
      } else {
        t[i] = i === "target" ? o : r[i];
      }
    });
  }
  require.d(exports, {
    getCharCode: function () {
      return o;
    },
    mapProperties: function () {
      return i;
    }
  });
}