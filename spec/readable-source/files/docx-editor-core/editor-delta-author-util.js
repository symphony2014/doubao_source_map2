// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'getAttributedTexts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 517751
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  function u(e) {
    let n;
    let i = (deltaSetCore.isDeltaSet(e) ? e : deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool)).get(editorModuleConstantsConfig.defaultVersion);
    let u = new contentStructureDelta.ContentDelta().retain(i.length(), {
      author: userEnvironmentUtils.getUserInfo().userId
    });
    return editorDataTextUtils.getAttributedTexts(new deltaSetCore.DeltaSet().add(editorModuleConstantsConfig.defaultVersion, i.compose(u)));
  }
  require.d(exports, {
    getAttributedTexts: function () {
      return u;
    }
  });
}