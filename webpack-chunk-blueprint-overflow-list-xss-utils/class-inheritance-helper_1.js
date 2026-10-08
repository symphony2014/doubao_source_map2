// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setupInheritance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 298550
         */
module.exports = function (module, exports, require) {
  var setPrototypeOf = require("set-prototype-of") /*id: 720499*/;
  function i(e, t) {
    e.prototype = Object.create(t.prototype);
    e.prototype.constructor = e;
    setPrototypeOf.setPrototypeOf(e, t);
  }
  require.d(exports, {
    setupInheritance: function () {
      return i;
    }
  });
}