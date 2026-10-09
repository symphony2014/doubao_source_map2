// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 417672
         */
module.exports = function (module, exports, require) {
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var memoizeFunctionUtil = require("memoize-function-util") /*id: 825529*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  let u = memoizeFunctionUtil.default(e => docxOfflineService.offlineService.getLogger(docxUtilityHelpers.maskSensitiveData(e)));
  let a = e => {
    let n = u(docTokenManager.getDocToken());
    return {
      info: function () {
        var r = arguments.length;
        var o = Array(r);
        var i = 0;
        for (; i < r; i++) {
          o[i] = arguments[i];
        }
        n.info(`[${e}]`, ...o);
      },
      warn: function () {
        var r = arguments.length;
        var o = Array(r);
        var i = 0;
        for (; i < r; i++) {
          o[i] = arguments[i];
        }
        n.warn(`[${e}]`, ...o);
      },
      error: function () {
        var r = arguments.length;
        var o = Array(r);
        var i = 0;
        for (; i < r; i++) {
          o[i] = arguments[i];
        }
        n.error(`[${e}]`, ...o);
      }
    };
  };
  require.d(exports, {
    createLogger: function () {
      return a;
    }
  });
}