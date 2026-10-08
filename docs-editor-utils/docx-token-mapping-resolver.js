// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RO' to 'resolveDocToken'
// - Renamed export 'U8' to 'getTokenMapping'
// - Renamed export 'e1' to 'getRealToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 586713
         */
module.exports = function (module, exports, require) {
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var tokenManager = require("token-manager") /*id: 939673*/;
  async function s() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
      let e = docComponentStubConfig.emptyFunction_1("DOCX_TOKEN_MAPPING");
      return (await docComponentStubConfig.getEmptyObject({
        key: e,
        token: e,
        keyGened: true,
        noDelayExcutor: true
      })).data;
    }
    if (browserEnvironmentDetectionUtils.isSuperApp()) {
      let e = await docxOfflineService.offlineService.getCreateStatusStore(window.User.id);
      let n = await e.getAllKeys();
      let r = await e.getItems(n);
      let i = {};
      let l = {};
      r.forEach((e, r) => {
        let o = e.token;
        let c = n[r];
        l[c] = o;
        i[o] = c;
      });
      return {
        realToFake: i,
        fakeToReal: l
      };
    }
    return null;
  }
  async function d(e) {
    return await tokenManager.tokenManager.getRealToken(e);
  }
  function f(e) {
    if (!(docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(e))) {
      return e;
    }
    let n = docTokenHelperUtils.resolveDocToken();
    if (docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(n)) {
      return tokenManager.tokenManager.getRealTokenFromMemory(e) || e;
    } else {
      return n;
    }
  }
  window._getTokenMapping = s;
  require.d(exports, {
    resolveDocToken: function () {
      return f;
    },
    getTokenMapping: function () {
      return s;
    },
    getRealToken: function () {
      return d;
    }
  });
}