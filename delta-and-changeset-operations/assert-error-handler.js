// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'assertError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 262641
         */
module.exports = function (module, exports, require) {
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  class i extends Error {
    constructor(...t) {
      super(...t);
      this.name = "assert_error";
    }
  }
  let o = (t, e) => {
    if (!t) {
      if (isErrorUtil.isError(e)) {
        throw e;
      }
      throw new i(e);
    }
  };
  require.d(exports, {
    assertError: function () {
      return o;
    }
  });
}