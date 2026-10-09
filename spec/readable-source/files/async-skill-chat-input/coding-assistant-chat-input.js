// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatSkillModels'
// - Resolved require(53859) to 'chat-skill-models'
// - Renamed variable 'o' to 'aiSkillConstants_1'
// - Resolved require(156330) to 'ai-skill-constants_1'
// - Renamed variable 'a' to 'chatInputPlaceholderSelector'
// - Resolved require(413435) to 'chat-input-placeholder-selector'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Resolved require.e(40135) to 'framer-motion-animation'
// - Resolved require.e(93720) to 'focus-trap-portal-utils'
// - Resolved require.e(16352) to 'ui-typography-modal-components'
// - Resolved require.e(30286) to 'konva-external-dependencies'
// - Resolved require.e(27860) to 'chat-ai-ui-components'
// - Resolved require.e(29592) to 'ai-coding-components'
// - Resolved require.e(78298) comment to 'css-unknown'
// - Resolved require.e(18383) to 'coding-skill-chat-input'
// - Resolved require.bind(94936) to 'coding-skill-chat-input-component'
// - Renamed variable 'd' to 'codingSkillEditorController'
// - Resolved require(154313) to 'coding-skill-editor-controller'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'e' to 'CodingSkillEditor' (module 154313)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 140455
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function u() {
    return Promise.all([require.e("framer-motion-animation") /*id: 40135*/, require.e("focus-trap-portal-utils") /*id: 93720*/, require.e("ui-typography-modal-components") /*id: 16352*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("chat-ai-ui-components") /*id: 27860*/, require.e("ai-coding-components") /*id: 29592*/, require.e("78298") /*id: css-unknown*/, require.e("coding-skill-chat-input") /*id: 18383*/]).then(require.bind(require, "coding-skill-chat-input-component") /*id: 94936*/);
  }
  let c = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CodingAssistantChatInput: e
      } = await u();
      return {
        default: e
      };
    }
  }));
  var codingSkillEditorController = require("coding-skill-editor-controller") /*id: 154313*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, n) {
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
  class h extends chatSkillModels.SkillDefinition {
    focus() {
      var e;
      if ((e = this.ref.current) !== null && e !== undefined) {
        e.focus();
      }
    }
    render(e) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx(chatInputPlaceholderSelector.ChatInputPlaceholderSelector, {}),
        children: reactJsxRuntimeCoreReexport.jsx(c, {
          ref: this.ref,
          ...e
        })
      });
    }
    preloadChunks() {
      u();
    }
    constructor(...e) {
      super(...e);
      f(this, "skillType", chatAppEnums.SkillType.CodeAssistant);
      f(this, "ref", reactCoreLibraryReexport.createRef());
      f(this, "service", new codingSkillEditorController.CodingSkillEditor());
    }
  }
  f(h, "pluginName", aiSkillConstants_1.aiSkillConstants.CodeAssistant);
  require.r(exports);
  require.d(exports, {
    CodingAssistantChatInputPlugin: function () {
      return h;
    }
  });
}