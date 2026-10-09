// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'docxVersionManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 667955
         */
module.exports = function (module, exports, require) {
  var docxHistoryUtilities = require("docx-history-utilities") /*id: 525555*/;
  var userColorConfigManager = require("user-color-config-manager") /*id: 155242*/;
  let l = {
    versionData: {},
    generateVersionData(e, r) {
      this.resetData();
      let i = userColorConfigManager.userConfigManager.usersConfig;
      let o = {};
      Object.entries(i).forEach(e => {
        let [r, i] = e;
        o[r] = {
          ...i,
          mobile: "",
          tenant_name: "",
          bgColor: i.backgroundColor
        };
      });
      if (e) {
        Object.entries(e).forEach(e => {
          let [i, n] = e;
          l.versionData[i] = {
            fromVer: n.from_ver,
            toVer: n.to_ver,
            isShowDiff: r,
            users: o
          };
        });
      }
    },
    resetData() {
      l.versionData = {};
    },
    getData(e, r) {
      let i = docxHistoryUtilities.getSheetToken(e, r);
      return l.versionData[i];
    }
  };
  require.d(exports, {
    docxVersionManager: function () {
      return l;
    }
  });
}