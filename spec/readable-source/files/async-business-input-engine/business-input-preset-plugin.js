// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatInputAiFeatureConstants'
// - Resolved require(155267) to 'chat-input-ai-feature-constants'
// - Renamed variable 'a' to 'chatInputAiPresetPrompt'
// - Resolved require(573937) to 'chat-input-ai-preset-prompt'
// - Renamed variable 'o' to 'chatRefContentSelectors'
// - Resolved require(434690) to 'chat-ref-content-selectors'
// - Renamed variable 'l' to 'businessInputRefHandler'
// - Resolved require(485057) to 'business-input-ref-handler'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'UC' to 'useRefContent' (module 434690)
// - Updated imported property 'Z' to 'getRefContentProps' (module 485057)
// - Updated imported property 'KP' to 'AiFeatureType' (module 155267)
// - Updated imported property 'B' to 'PresetPromptButton' (module 573937)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine.9f9181cd.js
         * chunkId: 30658
         * moduleId: 4610
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var chatInputAiPresetPrompt = require("chat-input-ai-preset-prompt") /*id: 573937*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var businessInputRefHandler = require("business-input-ref-handler") /*id: 485057*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      chatId: t,
      trackParams: n,
      onSubmit: u
    } = e;
    let c = chatRefContentSelectors.useRefContent(t);
    let d = (c == null ? undefined : c.refContents) || [];
    let {
      refContentProps: p
    } = businessInputRefHandler.getRefContentProps({
      chatId: t,
      refContents: d,
      trackParams: n,
      onSubmit: async (e, t) => {
        await (u == null ? undefined : u(t));
      }
    });
    let {
      showPresetPrompt: f,
      onPresetPromptShow: m,
      onClickPresetPrompt: h
    } = p;
    let _ = reactCoreLibraryReexport.useMemo(() => f ? [chatInputAiFeatureConstants.AiFeatureType.ExplainAskSug, chatInputAiFeatureConstants.AiFeatureType.ExpandAskSug, chatInputAiFeatureConstants.AiFeatureType.DeepResearchAskSug] : [], [f]);
    let g = chatInputAiPresetPrompt.PresetPromptButton({
      disableHighlight: true,
      onPresetPromptShow: m,
      onClickPresetPrompt: h,
      attachmentCanSend: true
    });
    let v = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex flex-wrap gap-8 overflow-hidden px-12 pt-12",
      children: _.map((e, t) => g(e, false, t))
    }), [f, _, g]);
    if (f) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: v
      });
    } else {
      return null;
    }
  };
  class c {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: u,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = u;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    GenericInputEnginePresetPromptBarPlugin: function () {
      return c;
    }
  });
}