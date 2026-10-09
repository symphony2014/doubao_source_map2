// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'searchImageBlockComponent'
// - Resolved require(691965) to 'search-image-block-component'
// - Renamed variable 'r' to 'asyncSkillContentRenderer'
// - Resolved require(313138) to 'async-skill-content-renderer'
// - Renamed variable 'o' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 's' to 'chatSearchResultSymbol'
// - Resolved require(106910) to 'chat-search-result-symbol'
// - Updated imported property 'Sc' to 'searchType' (module 617019)
// - Updated imported property 'ov' to 'SkillContentBlock' (module 313138)
// - Updated imported property 'j' to 'searchResultBlock' (module 106910)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 66032
         */
module.exports = function (module, exports, require) {
  var searchImageBlockComponent = require("search-image-block-component") /*id: 691965*/;
  var asyncSkillContentRenderer = require("async-skill-content-renderer") /*id: 313138*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      message: n,
      contentBlock: a
    } = e;
    let {
      search_type: s
    } = (a == null ? undefined : a.content_obj) ?? {};
    if (s === skillMessageLifecycleTypes.searchType.ImageSearchImage) {
      return reactJsxRuntimeCoreReexport.jsx(searchImageBlockComponent.SearchImageBlock, {
        message: n,
        contentBlock: a
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentRenderer.SkillContentBlock, {
        message: n,
        contentBlock: a
      });
    }
  };
  var chatSearchResultSymbol = require("chat-search-result-symbol") /*id: 106910*/;
  function c(e, t, n) {
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
  class d {
    constructor() {
      c(this, "pluginIdentifier", chatSearchResultSymbol.searchResultBlock);
      c(this, "type", "Content");
      c(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchQueryResultBlockPlugin: function () {
      return d;
    }
  });
}