// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'createSkillMessageDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 843942
         */
module.exports = function (module, exports, require) {
  var skillMessageDialogComponent = require("skill-message-dialog-component") /*id: 314703*/;
  var chatIcon_1 = require("chat-icon_1") /*id: 336160*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => reactJsxRuntimeCoreReexport.jsx(skillMessageDialogComponent.SkillMessageDialog, {
    customLogoIcon: chatIcon_1.ChatIcon,
    ...e
  });
  require.d(exports, {
    createSkillMessageDialog: function () {
      return a;
    }
  });
}