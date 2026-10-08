// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxInstanceConfig'
// - Resolved require(680159) to 'mathjax-instance-config'
// - Renamed variable 'T' to 'htmlHandlerClass'
// - Resolved require(12558) to 'html-handler-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 355457
         */
module.exports = function (module, exports, require) {
  exports.RegisterHTMLHandler = undefined;
  var mathjaxInstanceConfig = require("mathjax-instance-config") /*id: 680159*/;
  var htmlHandlerClass = require("html-handler-class") /*id: 12558*/;
  exports.RegisterHTMLHandler = function (t) {
    var e = new htmlHandlerClass.HTMLHandler(t);
    mathjaxInstanceConfig.mathjax.handlers.register(e);
    return e;
  };
}