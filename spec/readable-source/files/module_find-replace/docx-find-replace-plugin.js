// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'i' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable '_' to 'docxFindFeatureLoader'
// - Resolved require(857883) to 'docx-find-feature-loader'
// - Renamed variable 'u' to 'docxMatchChangeSignal'
// - Resolved require(227293) to 'docx-match-change-signal'
// - Updated imported property 'qj' to 'registerSignals' (module 135760)
// - Updated imported property 'fP' to 'SubjectType' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'V0' to 'setMatchChangeSignal' (module 227293)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'q' to 'loadFindFeatureConfigs' (module 857883)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_find-replace.b0e9d86a.js
         * chunkId: 69648
         * moduleId: 699949
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docxFindFeatureLoader = require("docx-find-feature-loader") /*id: 857883*/;
  var docxMatchChangeSignal = require("docx-match-change-signal") /*id: 227293*/;
  function c() {
    docxEditorCore.registerSignals([{
      provide: docxMatchChangeSignal.setMatchChangeSignal,
      useClass: docxEditorCore.SubjectType
    }]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(blockManagerToken.blockManagerToken);
      docxFindFeatureLoader.loadFindFeatureConfigs(e);
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}