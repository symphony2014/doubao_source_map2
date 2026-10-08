// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'chatPptCreationSymbol'
// - Resolved require(284621) to 'chat-ppt-creation-symbol'
// - Resolved require.e(92994) to 'ai-ppt-skill-message'
// - Resolved require.bind(846990) to 'ppt-skill-message-content'
// - Updated imported property '$' to 'pptCreationSymbol' (module 284621)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 790451
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPptCreationSymbol = require("chat-ppt-creation-symbol") /*id: 284621*/;
  function r(e, t, n) {
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
  let o = reactCoreLibraryReexport.lazy(() => require.e("ai-ppt-skill-message") /*id: 92994*/.then(require.bind(require, "ppt-skill-message-content") /*id: 846990*/).then(e => ({
    default: e.MessageSendPptSkillContent
  })));
  class a {
    constructor() {
      r(this, "pluginIdentifier", chatPptCreationSymbol.pptCreationSymbol);
      r(this, "Content", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendPptCreationContentPlugin: function () {
      return a;
    }
  });
}