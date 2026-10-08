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
// - Renamed variable 'l' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'u' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'c' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'd' to 'chatInputGuidanceStore'
// - Resolved require(976175) to 'chat-input-guidance-store'
// - Renamed variable 'f' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Resolved require.e(71518) to 'ui-avatar-typography-tag'
// - Resolved require.e(62212) to 'translate-skill-chat-input'
// - Resolved require.bind(10577) to 'translate-skill-chat-input'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'jW' to 'chatInputStore' (module 976175)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'dz' to 'isTextType' (module 352793)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 770955
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatInputGuidanceStore = require("chat-input-guidance-store") /*id: 976175*/;
  class p {
    focusOnEditor() {
      chatInputGuidanceStore.chatInputStore.getState().updateFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        chatInputGuidanceStore.chatInputStore.getState().updateEditorValue(e);
        chatInputGuidanceStore.chatInputStore.getState().updateGuidanceEditorValue({
          data: [{
            text: e,
            type: chatFieldTypes.getFieldTypes.Text
          }]
        });
      } else if (inputToolConverter.isTextType(e.data[0])) {
        chatInputGuidanceStore.chatInputStore.getState().updateEditorValue(e.data[0].text);
        chatInputGuidanceStore.chatInputStore.getState().updateGuidanceEditorValue(e);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function h() {
    return Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("translate-skill-chat-input") /*id: 62212*/]).then(require.bind(require, "translate-skill-chat-input") /*id: 10577*/);
  }
  let m = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => h()
  }));
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, t, n) {
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
  class y extends chatSkillModels.SkillDefinition {
    focus() {
      var e;
      if ((e = this.ref.current) !== null && e !== undefined) {
        e.focus();
      }
    }
    render(e) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx(chatInputPlaceholderSelector.ChatInputPlaceholderSelector, {}),
        children: reactJsxRuntimeCoreReexport.jsx(m, {
          ref: this.ref,
          ...e
        })
      });
    }
    preloadChunks() {
      h();
    }
    constructor(...e) {
      super(...e);
      g(this, "skillType", chatAppEnums.SkillType.Translate);
      g(this, "ref", reactCoreLibraryReexport.createRef());
      g(this, "service", new p());
    }
  }
  g(y, "pluginName", aiSkillConstants_1.aiSkillConstants.Translate);
  require.r(exports);
  require.d(exports, {
    TranslateChatInputPlugin: function () {
      return y;
    }
  });
}