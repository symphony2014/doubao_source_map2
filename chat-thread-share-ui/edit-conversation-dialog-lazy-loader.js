// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'EditConversationDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 94019
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = require("react-suspense-wrapper") /*id: 944055*/.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("form-validation-utils") /*id: 80045*/, require.e("chat-input-edit-ui") /*id: 73712*/]).then(require.bind(require, "edit-conversation-dialog") /*id: 232056*/).then(e => ({
    default: e.EditConversationDialog
  }))));
  require.d(exports, {
    EditConversationDialog: function () {
      return r;
    }
  });
}