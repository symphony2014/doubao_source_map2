// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(236623) to 'define-object-create'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 350467
         */
module.exports = function (module, exports, require) {
  require("define-object-create") /*id: 236623*/;
  var r = require("empty-module-stub_1") /*id: 245992*/.Object;
  module.exports = function (t, e) {
    return r.create(t, e);
  };
}