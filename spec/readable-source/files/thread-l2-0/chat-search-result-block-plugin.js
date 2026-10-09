// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatSearchResultSymbol'
// - Resolved require(106910) to 'chat-search-result-symbol'
// - Renamed variable 'r' to 'searchImageBlockComponent'
// - Resolved require(691965) to 'search-image-block-component'
// - Renamed variable 'a' to 'asyncSkillSearchContent'
// - Resolved require(517565) to 'async-skill-search-content'
// - Renamed variable 'o' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Sc' to 'searchType' (module 617019)
// - Updated imported property 'd' to 'SkillContentWrapper' (module 517565)
// - Updated imported property 'j' to 'searchResultBlock' (module 106910)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 969925
         */
module.exports = function (module, exports, require) {
  var chatSearchResultSymbol = require("chat-search-result-symbol") /*id: 106910*/;
  var searchImageBlockComponent = require("search-image-block-component") /*id: 691965*/;
  var asyncSkillSearchContent = require("async-skill-search-content") /*id: 517565*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      message: i,
      contentBlock: n
    } = e;
    let {
      search_type: s
    } = (n == null ? undefined : n.content_obj) ?? {};
    if (s === skillMessageLifecycleTypes.searchType.ImageSearchImage) {
      return reactJsxRuntimeCoreReexport.jsx(searchImageBlockComponent.SearchImageBlock, {
        message: i,
        contentBlock: n
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillSearchContent.SkillContentWrapper, {
        message: i,
        contentBlock: n
      });
    }
  };
  function c(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class d {
    constructor() {
      c(this, "pluginIdentifier", chatSearchResultSymbol.searchResultBlock);
      c(this, "type", "Content");
      c(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchQueryResultBlockContentPlugin: function () {
      return d;
    }
  });
}