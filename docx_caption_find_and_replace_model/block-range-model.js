// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BlockRangeModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 398507
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxFindScrollUtils = require("docx-find-scroll-utils") /*id: 514447*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  function c(e, o, r) {
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
  exports.BlockRangeModel = class {
    get rangeId() {
      return this.blockId;
    }
    get isReplaceable() {
      return false;
    }
    get currentBlockModel() {
      return this.blockManager.getBlockModelByBlockId(this.blockId);
    }
    scrollIntoView(e, o, r, i) {
      let {
        blockId: l
      } = this;
      let c = o.getRecordByBlockId(this.blockId);
      if (c) {
        return e.scrollToRecord(c.id, async () => {
          let e = r.getBlockRect(l);
          let c = e.top + docxFindScrollUtils.getCoverHeight(o);
          let a = c + e.height;
          await docxFindScrollUtils.scrollToFindResult({
            startTop: c,
            endBottom: a,
            scrollContainer: i
          });
        });
      } else {
        return Promise.resolve();
      }
    }
    constructor({
      blockId: e,
      key: o,
      blockManager: r
    }) {
      c(this, "blockId", undefined);
      c(this, "key", undefined);
      c(this, "blockManager", undefined);
      c(this, "type", findBlockConstants.blockTypes.Block);
      c(this, "visible", true);
      c(this, "matchId", undefined);
      c(this, "syncedReferenceBlockId", undefined);
      this.blockId = e;
      this.key = o;
      this.blockManager = r;
      this.matchId = uuidGeneratorUtil.generateUuid();
    }
  };
}