// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(641641) to 'get-own-property-descriptor-shim_2'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 351059
         */
module.exports = function (module, exports, require) {
  require("get-own-property-descriptor-shim_2") /*id: 641641*/;
  var n = require("empty-module-stub_1") /*id: 245992*/.Object;
  var a = module.exports = function (e, t) {
    return n.getOwnPropertyDescriptor(e, t);
  };
  if (n.getOwnPropertyDescriptor.sham) {
    a.sham = true;
  }
}