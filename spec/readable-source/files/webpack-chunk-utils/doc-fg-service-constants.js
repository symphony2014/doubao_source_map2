// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qh' to 'getDocFgService'
// - Renamed export 'a8' to 'featureFlags'
// - Renamed export 'dw' to 'serviceKeys'
// - Renamed export 'ix' to 'docFgServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 699539
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  (i = {}).storage = "storage";
  i.debugStorage = "debugStorage";
  i.tea = "tea";
  i.serverAB = "serverAB";
  let u = i;
  (o = {}).enableDebug = "enableDebug";
  o.forceRTL = "forceRTL";
  o.xTtEnv = "x-tt-env";
  o.consoleFullMessagePacket = "consoleFullMessagePacket";
  o.consoleIncrementMessagePacket = "consoleIncrementMessagePacket";
  o.chunkWithJSON = "chunkWithJSON";
  o.consoleSocketPacket = "consoleSocketPacket";
  o.isLargeDevPanelSize = "isLargeDevPanelSize";
  o.reduxDevToolsSnapshot = "reduxDevToolsSnapshot";
  o.showI18NKey = "showI18NKey";
  o.newGuidanceType = "newGuidanceType";
  o.newGuestGuidanceType = "newGuestGuidanceType";
  o.newChatInput = "newChatInput";
  o.enableSamanthaProtocolStage = "enableSamanthaProtocolStage";
  o.forceDarkMode = "forceDarkMode";
  let c = o;
  let _ = Symbol("DocFGService");
  function l() {
    return diContainerInstance.diContainer.get(_);
  }
  require.d(exports, {
    getDocFgService: function () {
      return l;
    },
    featureFlags: function () {
      return c;
    },
    serviceKeys: function () {
      return u;
    },
    docFgServiceId: function () {
      return _;
    }
  });
}