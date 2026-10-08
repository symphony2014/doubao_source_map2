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
// - Renamed variable 'l' to 'skillEditorManager'
// - Resolved require(653890) to 'skill-editor-manager'
// - Renamed variable 'u' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Resolved require.e(41522) to 'folder-file-icons'
// - Resolved require.e(67052) to 'form-ai-workspace'
// - Resolved require.e(99590) to 'read-doc-chat-input'
// - Resolved require.bind(903830) to 'read-doc-chat-input'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'D' to 'SkillEditorManager' (module 653890)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 699083
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillEditorManager = require("skill-editor-manager") /*id: 653890*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function c() {
    return Promise.all([require.e("folder-file-icons") /*id: 41522*/, require.e("form-ai-workspace") /*id: 67052*/, require.e("read-doc-chat-input") /*id: 99590*/]).then(require.bind(require, "read-doc-chat-input") /*id: 903830*/);
  }
  let d = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => c()
  }));
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
        children: reactJsxRuntimeCoreReexport.jsx(d, {
          ref: this.ref,
          ...e,
          onBeforeSendMessage: async () => {
            var t;
            var n;
            return (n = (t = e.onBeforeSendMessage) === null || t === undefined ? undefined : t.call(e, {
              clearRefContent: false
            })) === null || n === undefined || n;
          }
        })
      });
    }
    preloadChunks() {
      c();
    }
    constructor(...e) {
      super(...e);
      f(this, "skillType", chatAppEnums.SkillType.ReadPDF);
      f(this, "ref", reactCoreLibraryReexport.createRef());
      f(this, "service", new skillEditorManager.SkillEditorManager());
    }
  }
  f(h, "pluginName", aiSkillConstants_1.aiSkillConstants.ReadPDF);
  require.r(exports);
  require.d(exports, {
    ReadDocChatInputPlugin: function () {
      return h;
    }
  });
}