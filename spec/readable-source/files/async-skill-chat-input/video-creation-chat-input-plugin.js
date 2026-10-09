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
// - Renamed variable 'l' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'u' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Resolved require.e(54640) to 'video-skill-chat-input'
// - Resolved require.bind(922280) to 'video-skill-chat-input-component'
// - Renamed variable 'p' to 'videoSkillEditor'
// - Resolved require(802697) to 'video-skill-editor'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'w' to 'VideoSkillEditor' (module 802697)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 869361
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function c() {
    return require.e("video-skill-chat-input") /*id: 54640*/.then(require.bind(require, "video-skill-chat-input-component") /*id: 922280*/);
  }
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => c()
  })));
  var videoSkillEditor = require("video-skill-editor") /*id: 802697*/;
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
  class m extends chatSkillModels.SkillDefinition {
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
          ...e
        })
      });
    }
    preloadChunks() {
      c();
    }
    constructor(...e) {
      super(...e);
      h(this, "skillType", chatAppEnums.SkillType.VideoGeneration);
      h(this, "ref", reactCoreLibraryReexport.createRef());
      h(this, "service", new videoSkillEditor.VideoSkillEditor());
    }
  }
  h(m, "pluginName", aiSkillConstants_1.aiSkillConstants.VideoGeneration);
  require.r(exports);
  require.d(exports, {
    VideoCreationChatInputPlugin: function () {
      return m;
    }
  });
}