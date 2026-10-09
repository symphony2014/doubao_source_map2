// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'n' to 'docxSheetPasteUtils'
// - Resolved require(88608) to 'docx-sheet-paste-utils'
// - Renamed variable 'l' to 'syncedReferenceBlockUtils'
// - Resolved require(262712) to 'synced-reference-block-utils'
// - Renamed variable 'c' to 'blockRangeModel'
// - Resolved require(398507) to 'block-range-model'
// - Renamed variable 'a' to 'docxFindScrollUtils'
// - Resolved require(514447) to 'docx-find-scroll-utils'
// - Renamed variable 'd' to 'findBlockConstants'
// - Resolved require(352857) to 'find-block-constants'
// - Updated imported property 'Z' to 'BlockRangeModel' (module 398507)
// - Updated imported property 'rj' to 'isSyncedReferenceBlock' (module 262712)
// - Updated imported property 'e' to 'getCoverHeight' (module 514447)
// - Updated imported property 'C' to 'scrollToFindResult' (module 514447)
// - Updated imported property 'Yb' to 'scrollToMaxLeft' (module 88608)
// - Updated imported property 'aP' to 'parseTokenId' (module 88608)
// - Updated imported property '_q' to 'blockTypes' (module 352857)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 738476
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var blockRangeModel = require("block-range-model") /*id: 398507*/;
  var docxFindScrollUtils = require("docx-find-scroll-utils") /*id: 514447*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  function s(e, o, r) {
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
  class u extends blockRangeModel.BlockRangeModel {
    get isReplaceable() {
      return !syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI);
    }
    replaceWith(e) {
      if (!this.isReplaceable || !this.bridge || !this.sheetId) {
        return;
      }
      let o = {
        replaceText: e,
        context: {
          row: this.row,
          col: this.col,
          key: this.cellId,
          searchKey: this.key,
          blockId: this.sheetId,
          isReplaceable: this.isReplaceable
        },
        isReplaceAll: false
      };
      this.bridge.replaceSearchItem(this.sheetId, o);
    }
    scrollIntoView(e, o, r, i) {
      let {
        row: l,
        col: c,
        blockId: d,
        bridge: s,
        sheetId: u,
        scrollManage: f
      } = this;
      let h = o.getRecordByBlockId(this.blockId).id;
      return e.scrollToRecord(h, async () => {
        var e;
        var h;
        let k = s.bridge.sheetManager.imp.getSheetFromId(u);
        if (!k || !f) {
          return;
        }
        let b = r.getBlockRect(d).top + docxFindScrollUtils.getCoverHeight(o);
        let {
          height: v,
          width: p
        } = k.getCellRect(l, c);
        let m = s.bridge.sheetManager.imp.getShell(u);
        let y = (m == null ? undefined : (e = m.sheetView) === null || e === undefined ? undefined : e.call(m).getViewModel().measureRowPos(l)) || 0;
        await docxFindScrollUtils.scrollToFindResult({
          startTop: b + y,
          endBottom: b + y + v,
          scrollContainer: i
        });
        let {
          x: B
        } = (m == null ? undefined : (h = m.sheetView) === null || h === undefined ? undefined : h.call(m).getViewModel().getMeasurer().cell2DocPos(l, c)) || 0;
        let w = this.bridge.getSheetViewContent(u)?.colHeaderWidth;
        docxSheetPasteUtils.scrollToMaxLeft(f, {
          x: B + p,
          y
        }, w);
        k._scrollToCol(c);
      });
    }
    constructor(e) {
      super(e);
      s(this, "type", findBlockConstants.blockTypes.SheetBlock);
      s(this, "key", undefined);
      s(this, "cellId", undefined);
      s(this, "row", undefined);
      s(this, "col", undefined);
      s(this, "sheetId", undefined);
      s(this, "bridge", undefined);
      s(this, "scrollManage", undefined);
      let {
        row: o,
        col: r,
        key: i,
        cellId: n,
        sheetId: l,
        bridge: c,
        scrollManage: a
      } = e;
      this.bridge = c;
      this.row = o;
      this.col = r;
      this.key = i;
      this.cellId = n;
      this.sheetId = l;
      this.scrollManage = a;
    }
  }
  var f = [{
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.SHEET,
      find: function (e) {
        let {
          block: o,
          keyword: r
        } = e;
        let {
          id: i
        } = docxSheetPasteUtils.parseTokenId(o.snapshot.token);
        if (o.bridge && o.bridge.getSearchResult && i) {
          return o.bridge.getSearchResult(i, r).map(e => {
            var n;
            return new u({
              ...e,
              sheetId: i,
              key: r,
              blockId: o.id,
              bridge: o.bridge,
              cellId: e.key,
              blockManager: o.blockManager,
              scrollManage: (n = o.blockManager.getBlockViewByBlockIdNotCheck(o.id)) === null || n === undefined ? undefined : n.props.scrollManage
            });
          });
        } else {
          return [];
        }
      }
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return f;
    }
  });
}