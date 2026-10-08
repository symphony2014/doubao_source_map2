// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'authTokenManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 961261
         */
module.exports = function (module, exports, require) {
  let i = new Map();
  let r = {
    register(e, t) {
      if (i.has(e)) {
        return () => {};
      }
      let {
        feishuAccessTokenService: n
      } = t;
      let r = n.subscribeTokenChange(t => {
        e.emitAll("auth.tokenChanged", t);
      });
      i.set(e, {
        isRegistered: true,
        unsubscribeTokenChange: r
      });
      return () => {
        if (r != null) {
          r();
        }
        i.delete(e);
      };
    }
  };
  require.d(exports, {
    authTokenManager: function () {
      return r;
    }
  });
}