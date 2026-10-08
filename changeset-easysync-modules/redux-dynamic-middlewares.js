// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reduxCoreApi'
// - Resolved require(76673) to 'redux-core-api'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 523198
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  exports.createDynamicMiddlewares = exports.resetMiddlewares = exports.removeMiddleware = exports.addMiddleware = undefined;
  var reduxCoreApi = require("redux-core-api") /*id: 76673*/;
  function i() {
    var t = [];
    return {
      enhancer: function (e) {
        return function (n) {
          return function (i) {
            var o = t.map(function (t) {
              return t(e);
            });
            return reduxCoreApi.compose.apply(undefined, o)(n)(i);
          };
        };
      },
      addMiddleware: function () {
        var e = arguments.length;
        var n = Array(e);
        var r = 0;
        for (; r < e; r++) {
          n[r] = arguments[r];
        }
        t = [].concat(t, n);
      },
      removeMiddleware: function (e) {
        var n = t.findIndex(function (t) {
          return t === e;
        });
        if (n !== -1) {
          t = t.filter(function (t, e) {
            return e !== n;
          });
        }
      },
      resetMiddlewares: function () {
        t = [];
      }
    };
  }
  var o = i();
  exports.default = o.enhancer;
  var s = o.addMiddleware;
  var a = o.removeMiddleware;
  var u = o.resetMiddlewares;
  exports.addMiddleware = s;
  exports.removeMiddleware = a;
  exports.resetMiddlewares = u;
  exports.createDynamicMiddlewares = i;
}