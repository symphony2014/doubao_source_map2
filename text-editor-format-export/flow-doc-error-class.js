// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'isFlowDocError'
// - Renamed export 'u' to 'FlowDocError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 664202
         */
module.exports = function (module, exports, require) {
  class r extends Error {
    get message() {
      return this.config.message;
    }
    get code() {
      return this.config.code;
    }
    constructor(e) {
      super(e.message);
      this.config = e;
    }
  }
  let o = e => e instanceof r;
  require.d(exports, {
    isFlowDocError: function () {
      return o;
    },
    FlowDocError: function () {
      return r;
    }
  });
}