// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getApiOrigin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99448.e1905545.js
         * chunkId: 99448
         * moduleId: 264487
         */
module.exports = function (module, exports, require) {
  let n;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = () => n ||= new Promise((e, t) => {
    fetch("https://www.feishu.cn/space/api/infra/domains/all").then(e => e.json()).then(e => objectPathGetDefault.getObjectPathDefault(e, "data.doubao.internal_api", "")).then(e => {
      if (!e) {
        throw Error("url is empty");
      }
      return e;
    }).then(e => `https://${e}`).then(e).catch(t => {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[AI-PPT] get_feishu_api_origin_error",
        error: t
      });
      n = undefined;
      e("https://www.feishu.cn");
    });
  });
  require.d(exports, {
    getApiOrigin: function () {
      return a;
    }
  });
}