// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'useDocUpgradeStatus'
// - Renamed export 'm' to 'getDocUpgradeInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 439440
         */
module.exports = function (module, exports, require) {
  var businessSkillEnums = require("business-skill-enums") /*id: 594084*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var pageUpgradeStatusCheck = require("page-upgrade-status-check") /*id: 259114*/;
  function a(e) {
    let {
      docId: t
    } = e;
    let {
      data: n,
      loading: r
    } = l({
      docId: t
    });
    return {
      isDoubaoDoc: (n == null ? undefined : n.pageType) !== businessSkillEnums.EditorType.Lark,
      isUpdating: (n == null ? undefined : n.upgradeStatus) === businessSkillEnums.TaskStatus.Processing,
      loading: r
    };
  }
  function l(e) {
    let {
      docId: t
    } = e;
    let {
      data: n,
      loading: i
    } = useRequestHook.useRequest(() => pageUpgradeStatusCheck.getPageUpgradeInfo(t), {
      refreshDeps: [t],
      staleTime: 5000
    });
    return {
      data: n,
      loading: i
    };
  }
  require.d(exports, {
    useDocUpgradeStatus: function () {
      return l;
    },
    getDocUpgradeInfo: function () {
      return a;
    }
  });
}