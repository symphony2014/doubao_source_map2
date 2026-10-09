// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'getCommonParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 665781
         */
module.exports = function (module, exports, require) {
  require("object-to-string-ref") /*id: 437976*/;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  var connectionIdentifierGenerator = require("connection-identifier-generator") /*id: 496075*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  let a = e => ({});
  let l = () => ({});
  let s = e => {
    let {
      webId: t,
      uuid: n
    } = teaIdentityManager.getUserIds();
    return {
      version_code: uniParamsManager.uniParamsManager.getParam("version_code"),
      language: uniParamsManager.uniParamsManager.getParam("language"),
      device_platform: uniParamsManager.uniParamsManager.getParam("device_platform"),
      aid: uniParamsManager.uniParamsManager.getParam("aid"),
      real_aid: uniParamsManager.uniParamsManager.getParam("aid"),
      pkg_type: uniParamsManager.uniParamsManager.getParam("pkg_type"),
      device_id: uniParamsManager.uniParamsManager.getParam("device_id"),
      pc_version: uniParamsManager.uniParamsManager.getParam("pc_version"),
      web_id: t,
      tea_uuid: n,
      region: uniParamsManager.uniParamsManager.getParam("region"),
      sys_region: uniParamsManager.uniParamsManager.getParam("region"),
      samantha_web: 1,
      "use-olympus-account": 1,
      ...a(t),
      ...connectionIdentifierGenerator.getConnectionContext(),
      ...l(),
      ...e
    };
  };
  require.d(exports, {
    getCommonParams: function () {
      return s;
    }
  });
}