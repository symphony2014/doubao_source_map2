// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'clipboardSecurityManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 558244
         */
module.exports = function (module, exports, require) {
  let i = {
    loadClipboardSecuritySDK() {},
    bindEventListener() {},
    destroy() {},
    handleCustomCopyEvent() {},
    getClipboardSecret: () => "mock_secret",
    getCcmClipboardSecurityEnable: () => false,
    getClipboardSecurityEnable: () => false,
    handleCopyEvent() {},
    handlePasteEvent: () => ({}),
    getData(e) {
      let {
        clipboardData: n,
        type: r
      } = e;
      if (!n) {
        return {};
      }
      let i = {};
      r.forEach(e => {
        i[e] = n.getData(e);
      });
      return i;
    },
    setData(e) {
      let {
        data: n,
        clipboardData: r
      } = e;
      if (r) {
        for (let [e, i] of Object.entries(n)) {
          r.setData(e, i);
        }
      }
    },
    showPasteErrorToast() {},
    showSecurityToastLoading() {},
    showSecurityToast() {},
    openCopyDetailHelpCenterUrl() {},
    showSecurityDialog() {},
    getTeaEventCommonParams: () => ({
      ccm_security_on: false,
      admin_security_on: false
    })
  };
  require.d(exports, {
    clipboardSecurityManager: function () {
      return i;
    }
  });
}