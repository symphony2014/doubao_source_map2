// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Resolved require(192672) to 'set-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 900885
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var i = require("set-prototype-utils") /*id: 192672*/.add;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    addAll: function () {
      var t = setPrototypeCheck(this);
      var r = 0;
      var e = arguments.length;
      for (; r < e; r++) {
        i(t, arguments[r]);
      }
      return t;
    }
  });
}