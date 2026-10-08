// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(420342) to 'object-define-properties-polyfill_4'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 618900
         */
module.exports = function (module, exports, require) {
  require("object-define-properties-polyfill_4") /*id: 420342*/;
  var n = require("empty-module-stub_1") /*id: 245992*/.Object;
  var a = module.exports = function (e, t) {
    return n.defineProperties(e, t);
  };
  if (n.defineProperties.sham) {
    a.sham = true;
  }
}