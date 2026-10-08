// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'createSafeOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 161214
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function r(e) {
    return function (t) {
      if (isFunctionUtil.isFunction(t == null ? undefined : t.lift)) {
        return t.lift(function (t) {
          try {
            return e(t, this);
          } catch (e) {
            this.error(e);
          }
        });
      }
      throw TypeError("Unable to lift unknown Observable type");
    };
  }
  require.d(exports, {
    createSafeOperator: function () {
      return r;
    }
  });
}