// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fq' to 'waitForUserGuide'
// - Renamed export 'X0' to 'checkGuideState'
// - Renamed export 'jP' to 'platformUtilRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89647.6be961c3.js
         * chunkId: 89647
         * moduleId: 642218
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function a() {
    return platformDocUtils.UDc("userGuide")(reduxStoreInitializer.reduxStore.getState()) === "loaded";
  }
  async function s() {
    return new Promise(e => {
      if (a()) {
        e();
        return;
      }
      let n = reduxStoreInitializer.reduxStore.subscribe(() => {
        if (a()) {
          n();
          e();
        }
      });
    });
  }
  async function c(e) {
    await s();
    return u(e);
  }
  function u(e) {
    let n = platformDocUtils.boF(platformDocUtils.XmA(reduxStoreInitializer.reduxStore.getState()), e);
    return !!isUndefinedCheck.isUndefined(n) || !!n;
  }
  require.d(exports, {
    waitForUserGuide: function () {
      return c;
    },
    checkGuideState: function () {
      return u;
    },
    platformUtilRef: function () {
      return platformDocUtils.jPB;
    }
  });
}