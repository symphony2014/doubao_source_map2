// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'codeRunPreviewConfig'
// - Resolved require(650100) to 'code-run-preview-config'
// - Renamed variable 'o' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'c' to 'wordSelectionToolbarAndCopyHandler'
// - Resolved require(514544) to 'word-selection-toolbar-and-copy-handler'
// - Renamed variable 'u' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'd' to 'chatSelectionToolbar'
// - Resolved require(365771) to 'chat-selection-toolbar'
// - Renamed variable 'p' to 'codeInterpreterResourceUi'
// - Resolved require(36868) to 'code-interpreter-resource-ui'
// - Renamed variable 'f' to 'chatReceiveTextBlockSymbol'
// - Resolved require(147461) to 'chat-receive-text-block-symbol'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'td' to 'useWordSelection' (module 514544)
// - Updated imported property 'U4' to 'useWordSelectionToolbar' (module 514544)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'B' to 'useRunPreviewConfig' (module 650100)
// - Updated imported property 'r' to 'useCiResourceUi' (module 36868)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 't' to 'ChatSelectToolbar' (module 365771)
// - Updated imported property 'A' to 'receiveTextBlockSym' (module 147461)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 601198
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codeRunPreviewConfig = require("code-run-preview-config") /*id: 650100*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let s = e => {
    var r;
    let s = {};
    if ((e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask) {
      s = {
        super_task_id: e == null ? undefined : e.async_task?.id,
        skill_name: "super_task",
        super_task_mode: (e == null ? undefined : (r = e.verbose) === null || r === undefined ? undefined : r.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
      };
    }
    return {
      superTaskParams: s
    };
  };
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var wordSelectionToolbarAndCopyHandler = require("word-selection-toolbar-and-copy-handler") /*id: 514544*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var chatSelectionToolbar = require("chat-selection-toolbar") /*id: 365771*/;
  var codeInterpreterResourceUi = require("code-interpreter-resource-ui") /*id: 36868*/;
  var chatReceiveTextBlockSymbol = require("chat-receive-text-block-symbol") /*id: 147461*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function h(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let v = e => {
    var n;
    let {
      inView: h = false,
      contentBlock: v,
      message: g,
      customRenderOptions: b = {}
    } = e;
    let y = v == null ? undefined : v.content_obj?.text;
    let _ = (v == null ? undefined : v.meta_infos) ?? [];
    let x = (n = g.content_blocks) === null || n === undefined ? undefined : n.findIndex(e => e.id === v.id);
    let w = wordSelectionToolbarAndCopyHandler.useWordSelection(g == null ? undefined : g.message_id, g == null ? undefined : g.conversation_id);
    let {
      onCopy: k,
      onFollowUp: S
    } = wordSelectionToolbarAndCopyHandler.useWordSelectionToolbar(g);
    let C = x === (g.content_blocks?.length || 0) - 1;
    let O = !C || chatMessageStatusCheck.isMessageFinished(g);
    let j = !!C && messageContentTypeAndStatusChecker.vlk(g);
    let {
      showRun: E
    } = codeRunPreviewConfig.useRunPreviewConfig();
    let {
      superTaskParams: T
    } = s(g);
    let N = reactCoreLibraryReexport.useMemo(() => ({
      ...b,
      customSlotsProps: {
        CodeBlock: {
          showRun: E
        }
      }
    }), [E]);
    let P = codeInterpreterResourceUi.useCiResourceUi({
      bizMessage: g
    });
    if (y) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
          inView: h,
          messageBlockText: y,
          messageBlockMeta: _,
          messageBlockTextFinish: O,
          messageBlockTextBroken: j,
          message: g,
          customRenderOptions: {
            ...N,
            customSlots: P,
            rightClickCopyReportParams: T
          }
        }), (w == null ? undefined : w.visible) && reactJsxRuntimeCoreReexport.jsx(chatSelectionToolbar.ChatSelectToolbar, {
          ...w,
          onCopy: k,
          onFollowUp: S
        })]
      });
    } else {
      return null;
    }
  };
  class g {
    constructor() {
      h(this, "pluginIdentifier", chatReceiveTextBlockSymbol.receiveTextBlockSym);
      h(this, "type", "Content");
      h(this, "Content", v);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveTextMessageContentBlockPlugin: function () {
      return g;
    }
  });
}