// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'globalObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 203498
         */
module.exports = function (module, exports, require) {
  var globalObjectDetector = require("global-object-detector") /*id: 138856*/;
  var i = typeof self == "object" && self && self.Object === Object && self;
  var o = globalObjectDetector.globalObject || i || Function("return this")();
  exports.globalObject = o;
}