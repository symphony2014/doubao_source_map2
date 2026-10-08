// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'getAppIdentity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 838408
         */
module.exports = function (module, exports, require) {
  var commonParamsBuilder = require("common-params-builder") /*id: 665781*/;
  function n() {
    let e;
    let {
      aid: t,
      pc_version: a,
      device_id: n,
      tea_uuid: i
    } = commonParamsBuilder.getCommonParams();
    if (a) {
      e = `doubao:${a}`;
    }
    return {
      appId: t,
      deviceId: n,
      teaId: i,
      appVersionExt: e
    };
  }
  require.d(exports, {
    getAppIdentity: function () {
      return n;
    }
  });
}