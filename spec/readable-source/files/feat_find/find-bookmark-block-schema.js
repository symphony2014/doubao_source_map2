// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'blockRangeModel'
// - Resolved require(398507) to 'block-range-model'
// - Renamed variable 'n' to 'findBlockConstants'
// - Resolved require(352857) to 'find-block-constants'
// - Renamed variable 'a' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'd' to 'docFindRectUtilities'
// - Resolved require(122406) to 'doc-find-rect-utilities'
// - Updated imported property 'Z' to 'BlockRangeModel' (module 398507)
// - Updated imported property '_q' to 'blockTypes' (module 352857)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'lI' to 'findTextMatches' (module 122406)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 59128
         */
module.exports = function (module, exports, require) {
  var blockRangeModel = require("block-range-model") /*id: 398507*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  function l(e, o, r) {
    var i;
    if ((o = typeof (i = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, o || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  class c extends blockRangeModel.BlockRangeModel {
    constructor(e) {
      super(e);
      l(this, "range", undefined);
      l(this, "type", findBlockConstants.blockTypes.BookMarkBlock);
      this.range = e.range;
    }
  }
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docFindRectUtilities = require("doc-find-rect-utilities") /*id: 122406*/;
  var s = [{
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.BOOKMARK,
      find: function (e) {
        let {
          block: o,
          keyword: r
        } = e;
        if (o.matches && o.findKeyword === r) {
          return o.matches;
        }
        let {
          title: i
        } = o.snapshot.bookmark;
        if (i) {
          o.findKeyword = r;
          o.matches = docFindRectUtilities.findTextMatches(i, r).map(e => new c({
            blockId: o.id,
            key: r,
            blockManager: o.blockManager,
            range: [e.start, e.end]
          }));
          return o.matches;
        } else {
          return [];
        }
      }
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}