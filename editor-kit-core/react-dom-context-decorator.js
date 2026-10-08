// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'withContextConsumer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 955275
         */
module.exports = function (module, exports, require) {
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactRenderContext = require("react-render-context") /*id: 466226*/;
  function i() {
    return function (t, e, r) {
      var i = r.value;
      r.value = function () {
        var t = [];
        var e = 0;
        for (; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        var r = this;
        var u = i.apply(r, t);
        return reactRenderContext.contextConsumer(function (t) {
          if (domEnvManager.isDom()) {
            return u;
          } else if (t) {
            return i.apply(r, [t]);
          } else {
            return null;
          }
        });
      };
    };
  }
  require.d(exports, {
    withContextConsumer: function () {
      return i;
    }
  });
}