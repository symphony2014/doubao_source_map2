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
// - Resolved require.e(38369) to 'academic-search-skill-chat-input'
// - Resolved require.bind(329828) to 'academic-search-skill-chat-input-module'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 885749
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function u() {
    return require.e("academic-search-skill-chat-input") /*id: 38369*/.then(require.bind(require, "academic-search-skill-chat-input-module") /*id: 329828*/);
  }
  let c = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => u()
  }));
  class d {
    focusOnEditor() {
      var e;
      var t;
      if ((t = this.editorRef) !== null && t !== undefined && (e = t.current) !== null && e !== undefined) {
        e.focus();
      }
    }
    updateEditorValue(e) {}
    clearEditorValue() {}
    constructor({
      editorRef: e
    }) {
      var t;
      var n;
      var i;
      n = undefined;
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
      }(t = "editorRef", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      this.editorRef = e;
    }
  }
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
      f(this, "skillType", chatAppEnums.SkillType.AcademicSearch);
      f(this, "ref", reactCoreLibraryReexport.createRef());
      f(this, "service", new d({
        editorRef: this.ref
      }));
    }
  }
  f(h, "pluginName", aiSkillConstants_1.aiSkillConstants.AcademicSearch);
  require.r(exports);
  require.d(exports, {
    AcademicSearchChatInputPlugin: function () {
      return h;
    }
  });
}