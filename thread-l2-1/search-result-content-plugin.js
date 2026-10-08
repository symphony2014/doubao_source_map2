// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchResultSymbol_2'
// - Resolved require(15246) to 'chat-search-result-symbol_2'
// - Renamed variable 'l' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'searchSkillTypes'
// - Resolved require(248215) to 'search-skill-types'
// - Renamed variable 's' to 'aiSearchResultDisplay'
// - Resolved require(32776) to 'ai-search-result-display'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'S' to 'searchSkillTypes' (module 248215)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'z' to 'SearchResultDisplay' (module 32776)
// - Updated imported property 'd' to 'searchResultSymbol' (module 15246)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 555906
         */
module.exports = function (module, exports, require) {
  var chatSearchResultSymbol_2 = require("chat-search-result-symbol_2") /*id: 15246*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var aiSearchResultDisplay = require("ai-search-result-display") /*id: 32776*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      message: t
    } = e;
    let n = objectPathGetDefault.getObjectPathDefault(t, ["ext", "academic_card_list"]);
    let i = messageContentTypeAndStatusChecker.TjU(t) || n;
    return {
      academicCardList: n ? JSON.parse(n) : undefined,
      searchType: i ? searchSkillTypes.searchSkillTypes.AcademicSearch : searchSkillTypes.searchSkillTypes.AISearch,
      onTrackEvent: emptyExportFunction.emptyFunction
    };
  };
  function u(e) {
    let {
      inView: t,
      defaultExpand: n = false,
      message: i,
      ...l
    } = e;
    let {
      academicCardList: r,
      searchType: o,
      onTrackEvent: a
    } = d({
      message: i
    });
    if (i == null ? undefined : i.content_obj) {
      return reactJsxRuntimeCoreReexport.jsx(aiSearchResultDisplay.SearchResultDisplay, {
        ...l,
        isInSearching: false,
        inView: t,
        data: i == null ? undefined : i.content_obj,
        onTrackEvent: a,
        searchType: o,
        academicCardList: r,
        defaultExpand: n,
        className: "!mb-12"
      });
    } else {
      return null;
    }
  }
  function p(e, t, n) {
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
  class m {
    constructor() {
      p(this, "pluginIdentifier", chatSearchResultSymbol_2.searchResultSymbol);
      p(this, "Content", u);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchResultContentPlugin: function () {
      return m;
    }
  });
}