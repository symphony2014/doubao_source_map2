// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ev' to 'selectDocsMode'
// - Renamed export 'PI' to 'selectHeadBtnType'
// - Renamed export 'fy' to 'selectIsShow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 977031
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var createSelector = require("create-selector") /*id: 228436*/;
  let l = e => objectPathGetDefault.getObjectPathDefault(e, "docx.docsMode");
  let a = createSelector.createSelector(l, e => e.docsMode);
  let c = createSelector.createSelector(l, e => e.headBtnInfestedType);
  let u = createSelector.createSelector(l, e => e.isShow);
  require.d(exports, {
    selectDocsMode: function () {
      return a;
    },
    selectHeadBtnType: function () {
      return c;
    },
    selectIsShow: function () {
      return u;
    }
  });
}