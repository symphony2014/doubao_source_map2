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
// - Resolved require.e(38951) to 'animation-dom-utils'
// - Resolved require.e(87052) to 'music-skill-chat-input'
// - Resolved require.bind(316877) to 'music-skill-chat-input'
// - Renamed variable 'd' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'p' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'f' to 'musicSkillGuidanceStore'
// - Resolved require(240022) to 'music-skill-guidance-store'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 't' to 'musicGuidanceStore' (module 240022)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 233888
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function u() {
    return Promise.all([require.e("animation-dom-utils") /*id: 38951*/, require.e("music-skill-chat-input") /*id: 87052*/]).then(require.bind(require, "music-skill-chat-input") /*id: 316877*/);
  }
  let c = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => u()
  }));
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var musicSkillGuidanceStore = require("music-skill-guidance-store") /*id: 240022*/;
  class h {
    focusOnEditor() {
      musicSkillGuidanceStore.musicGuidanceStore.getState().updateFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        musicSkillGuidanceStore.musicGuidanceStore.getState().updateEditorValue({
          data: [{
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        });
      } else {
        musicSkillGuidanceStore.musicGuidanceStore.getState().updateEditorValue(e);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e, t, n) {
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
  class g extends chatSkillModels.SkillDefinition {
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
      v(this, "skillType", chatAppEnums.SkillType.MusicAssistant);
      v(this, "ref", reactCoreLibraryReexport.createRef());
      v(this, "service", new h());
    }
  }
  v(g, "pluginName", aiSkillConstants_1.aiSkillConstants.MusicAssistant);
  require.r(exports);
  require.d(exports, {
    MusicAssistantChatInputPlugin: function () {
      return g;
    }
  });
}