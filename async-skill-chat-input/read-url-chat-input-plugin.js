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
// - Renamed variable 'c' to 'skillEditorStateStores'
// - Resolved require(168235) to 'skill-editor-state-stores'
// - Renamed variable 'p' to 'readUrlChatInputComponent'
// - Resolved require(111947) to 'read-url-chat-input-component'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.bind(111947) to 'read-url-chat-input-component'
// - Updated imported property 'X' to 'skillEditorStore' (module 168235)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 175743
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  class d {
    focusOnEditor() {
      skillEditorStateStores.skillEditorStore.getState().updateReadUrlEditorFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        skillEditorStateStores.skillEditorStore.getState().updateUrlEditorValue({
          data: [{
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        });
      } else {
        skillEditorStateStores.skillEditorStore.getState().updateUrlEditorValue(e);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  var readUrlChatInputComponent = require("read-url-chat-input-component") /*id: 111947*/;
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
        children: reactJsxRuntimeCoreReexport.jsx(readUrlChatInputComponent.default, {
          ref: this.ref,
          ...e
        })
      });
    }
    preloadChunks() {
      Promise.resolve().then(require.bind(require, "read-url-chat-input-component") /*id: 111947*/);
    }
    constructor(...e) {
      super(...e);
      h(this, "skillType", chatAppEnums.SkillType.ReadWebsite);
      h(this, "ref", reactCoreLibraryReexport.createRef());
      h(this, "service", new d());
    }
  }
  h(m, "pluginName", aiSkillConstants_1.aiSkillConstants.ReadWebsite);
  require.r(exports);
  require.d(exports, {
    ReadUrlChatInputPlugin: function () {
      return m;
    }
  });
}