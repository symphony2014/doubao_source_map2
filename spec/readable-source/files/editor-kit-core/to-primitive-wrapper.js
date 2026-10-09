// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'toPrimitiveUtil'
// - Resolved require(582761) to 'to-primitive-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 514139
         */
module.exports = function (module, exports, require) {
  var toPrimitiveUtil = require("to-primitive-util") /*id: 582761*/;
  module.exports = function (t) {
    if (arguments.length > 1) {
      return toPrimitiveUtil(t, arguments[1]);
    } else {
      return toPrimitiveUtil(t);
    }
  };
}