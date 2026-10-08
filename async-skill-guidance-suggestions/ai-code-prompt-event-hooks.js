// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'useAiCodePromptEventHooks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 421580
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codingCanvasEventTracker = require("coding-canvas-event-tracker") /*id: 943129*/;
  let a = e => {
    let {
      trackParams: t
    } = e;
    let {
      trackCodingBaseEvent: n
    } = codingCanvasEventTracker.codingEventTracker();
    let a = reactCoreLibraryReexport.useCallback((e, i, l) => {
      n("ai_code_prompt_show", {
        ...t,
        ai_code_template_id: e.key,
        ai_code_template_name: e.name,
        index: i,
        ...l
      });
    }, [t]);
    return {
      sendPromptShowEvent: a,
      sendPromptClickEvent: reactCoreLibraryReexport.useCallback((e, i, l) => {
        n("ai_code_prompt_click", {
          ...t,
          ai_code_template_id: e.key,
          ai_code_template_name: e.name,
          index: i,
          ...l
        });
      }, [t]),
      sendPromptBoardCollapseEvent: reactCoreLibraryReexport.useCallback(e => {
        n("ai_code_prompt_board_collapse", {
          ...t,
          ...e
        });
      }, [t])
    };
  };
  require.d(exports, {
    useAiCodePromptEventHooks: function () {
      return a;
    }
  });
}