// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OE' to 'copilotState$'
// - Renamed export 'Ox' to 'useCopilotVisible'
// - Renamed export 'Py' to 'getCopilotVisibility'
// - Renamed export 'hA' to 'isInAiBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 893930
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var docCopilotServiceLoader = require("doc-copilot-service-loader") /*id: 424080*/;
  var docxToolboxConstants_2 = require("docx-toolbox-constants_2") /*id: 485149*/;
  let c = new behaviorSubjectClass.BehaviorSubject({
    isShowCopilotChatBox: false
  });
  let u = () => {
    let e = c.getValue();
    return (e.copilotEntry !== docxToolboxConstants_2.getUiBlockTypes.Search || e.writingStatus === "waiting") && e.isShowCopilotChatBox;
  };
  let s = e => {
    let [n, r] = reactCoreLibraryReexport.useState(u());
    reactCoreLibraryReexport.useEffect(() => {
      let e = c.subscribe(e => {
        if (e.copilotEntry === docxToolboxConstants_2.getUiBlockTypes.Search && e.writingStatus !== "waiting") {
          r(false);
          return;
        }
        r(e.isShowCopilotChatBox);
      });
      return () => {
        if (e != null) {
          e.unsubscribe();
        }
      };
    }, [c]);
    return n;
  };
  function d(e) {
    if (!u()) {
      return false;
    }
    let n = docCopilotServiceLoader.getDocCopilotBaseService(e);
    return !!(n == null ? undefined : n.isInAIBlock);
  }
  require.d(exports, {
    copilotState$: function () {
      return c;
    },
    useCopilotVisible: function () {
      return s;
    },
    getCopilotVisibility: function () {
      return u;
    },
    isInAiBlock: function () {
      return d;
    }
  });
}