// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'isApiError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 429379
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  function o(e) {
    return e instanceof apiErrorHandler.ApiError || isObjectOrFunction_1_1.isObjectOrFunction(e) && (e == null ? undefined : e.name) === "ApiError";
  }
  require.d(exports, {
    isApiError: function () {
      return o;
    }
  });
}