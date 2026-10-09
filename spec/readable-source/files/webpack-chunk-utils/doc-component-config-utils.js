// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't6' to 'uiToastStub'
// - Renamed export 'vK' to 'getDocComponentConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 123085
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function o(e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let o = window.User?.docComponentConfig || {};
    return objectPathGetDefault.getObjectPathDefault(o, e, r);
  }
  let a = {
    showToast: () => ({})
  };
  require.d(exports, {
    uiToastStub: function () {
      return a;
    },
    getDocComponentConfig: function () {
      return o;
    }
  });
}