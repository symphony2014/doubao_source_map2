// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'securitySdkConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 609762
         */
module.exports = function (module, exports, require) {
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  var localeCnConstant = require("locale-cn-constant") /*id: 224255*/;
  let o = {
    link: `${doubaoConfigConstants_1.flowCdnUrl}/rc-client-security/c-webmssdk/1.0.0.43/webmssdk.es5.js`,
    region: localeCnConstant.defaultLocale,
    enablePathList: []
  };
  require.d(exports, {
    securitySdkConfig: function () {
      return o;
    }
  });
}