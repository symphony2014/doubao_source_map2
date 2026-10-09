// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxInstanceConfig'
// - Resolved require(680159) to 'mathjax-instance-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 502491
         */
module.exports = function (module, exports, require) {
  exports.asyncLoad = undefined;
  var mathjaxInstanceConfig = require("mathjax-instance-config") /*id: 680159*/;
  exports.asyncLoad = function (t) {
    if (mathjaxInstanceConfig.mathjax.asyncLoad) {
      return new Promise(function (e, Q) {
        var T = mathjaxInstanceConfig.mathjax.asyncLoad(t);
        if (T instanceof Promise) {
          T.then(function (t) {
            return e(t);
          }).catch(function (t) {
            return Q(t);
          });
        } else {
          e(T);
        }
      });
    } else {
      return Promise.reject(`Can't load '${t}': No asyncLoad method specified`);
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}