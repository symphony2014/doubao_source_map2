// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'useSuperTaskSwitch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 224573
         */
module.exports = function (module, exports, require) {
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var superTaskConfigHook = require("super-task-config-hook") /*id: 700903*/;
  let o = e => {
    let {
      chatId: t,
      activeSkillType: n
    } = e;
    let o = superTaskStore.superTaskStore(e => e.isSuperTaskEnableByConvId(t) && !n);
    let {
      enableSuperTaskInputMode: a
    } = superTaskConfigHook.useSuperTaskConfig();
    return {
      isSuperTaskSwitchEnabled: o && a,
      enableSuperTaskAB: a
    };
  };
  require.d(exports, {
    useSuperTaskSwitch: function () {
      return o;
    }
  });
}