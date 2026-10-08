// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'isFunctionUtil_1'
// - Resolved require(699491) to 'is-function-util_1'
// - Renamed variable 'o' to 'uniParamsManager'
// - Resolved require(375503) to 'uni-params-manager'
// - Renamed variable 's' to 'dynamicScriptLoader'
// - Resolved require(658121) to 'dynamic-script-loader'
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'X' to 'isScriptLoaded' (module 658121)
// - Updated imported property 'v' to 'loadScript' (module 658121)
// - Updated imported property 'Z' to 'isFunction' (module 699491)
// - Updated imported property 'p' to 'uniParamsManager' (module 375503)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 925468
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var dynamicScriptLoader = require("dynamic-script-loader") /*id: 658121*/;
  let l = async e => {
    let {
      link: t,
      enablePathList: n,
      region: l
    } = e;
    if (objectPathGetDefault.getObjectPathDefault(window, ["bdms", "frontierSign"]) && l === "cn") {
      return;
    }
    if (!t) {
      throw Error("init mssdk error: expect url");
    }
    if (dynamicScriptLoader.isScriptLoaded(t)) {
      return;
    }
    await dynamicScriptLoader.loadScript(t);
    let a = objectPathGetDefault.getObjectPathDefault(window, ["byted_acrawler", "init"]);
    if (isFunctionUtil_1.isFunction(a)) {
      a({
        aid: uniParamsManager.uniParamsManager.getParam("aid"),
        isSDK: false,
        region: l,
        enablePathList: n,
        mode: 513
      });
    } else {
      throw Error("init mssdk error: expect byted_acrawler.init but not found");
    }
  };
  require.r(exports);
  require.d(exports, {
    initMsSDK: function () {
      return l;
    }
  });
}