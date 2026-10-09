// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'zeroConstantModule_1'
// - Resolved require(885846) to 'zero-constant-module_1'
// - Renamed variable 'i' to 'contentStructureDelta'
// - Resolved require(768480) to 'content-structure-delta'
// - Renamed variable 'l' to 'docxCaptionComponentHelper'
// - Resolved require(144976) to 'docx-caption-component-helper'
// - Renamed variable 'c' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'syncedReferenceBlockUtils'
// - Resolved require(262712) to 'synced-reference-block-utils'
// - Renamed variable 'u' to 'blockRangeModel'
// - Resolved require(398507) to 'block-range-model'
// - Renamed variable 'd' to 'docxFindScrollUtils'
// - Resolved require(514447) to 'docx-find-scroll-utils'
// - Renamed variable 's' to 'findBlockConstants'
// - Resolved require(352857) to 'find-block-constants'
// - Renamed variable 'p' to 'docFindRectUtilities'
// - Resolved require(122406) to 'doc-find-rect-utilities'
// - Renamed variable '_' to 'captionEditorConstants'
// - Resolved require(287236) to 'caption-editor-constants'
// - Renamed variable 'm' to 'docxCaptionTextCheck_1'
// - Resolved require(289941) to 'docx-caption-text-check_1'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Z' to 'BlockRangeModel' (module 398507)
// - Updated imported property 'rj' to 'isSyncedReferenceBlock' (module 262712)
// - Updated imported property 'I' to 'ContentDelta' (module 768480)
// - Updated imported property 'S' to 'versionValue' (module 885846)
// - Updated imported property 'yR' to 'updateCaptionInBlock' (module 144976)
// - Updated imported property 'lC' to 'createContentStateFromAttributedText' (module 144976)
// - Updated imported property '$2' to 'getAttributesAtOffset' (module 144976)
// - Updated imported property 'aP' to 'applyTextReplacements' (module 144976)
// - Updated imported property 'e' to 'getCoverHeight' (module 514447)
// - Updated imported property 'C' to 'scrollToFindResult' (module 514447)
// - Updated imported property '_q' to 'blockTypes' (module 352857)
// - Updated imported property 'g' to 'isCaptionTextEmpty' (module 289941)
// - Updated imported property 'lI' to 'findTextMatches' (module 122406)
// - Updated imported property 'zR' to 'isCaptionEnabled' (module 287236)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_caption_find_and_replace_model.b1aeae4e.js
         * chunkId: 88847
         * moduleId: 997523
         */
module.exports = function (module, exports, require) {
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var docxCaptionComponentHelper = require("docx-caption-component-helper") /*id: 144976*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var blockRangeModel = require("block-range-model") /*id: 398507*/;
  var docxFindScrollUtils = require("docx-find-scroll-utils") /*id: 514447*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  function f(e, n, o) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = o;
    }
    return e;
  }
  let h = [docBlockTypeConstants.blockTypeConstants.CODE];
  class g extends blockRangeModel.BlockRangeModel {
    get isReplaceable() {
      return !syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI);
    }
    getCaretRect(e, n) {
      let o = n.getContentState().getActiveZone();
      return n.rectModule.getCaretRect({
        ...o.offsetToPoint(e),
        zoneId: o.getZoneId()
      });
    }
    async replaceWith(e) {
      let o = this.blockManager.getBlockViewByBlockIdNotCheck(this.blockId);
      if (!this.isReplaceable || !(o == null ? undefined : o.captionInstance?.editor)) {
        return;
      }
      let [c, a] = this.range;
      let u = o.captionInstance.editor.getContentState();
      let d = new contentStructureDelta.ContentDelta({
        zoneId: zeroConstantModule_1.versionValue
      });
      d.retain(c).delete(a - c).insert(e);
      u.apply(d);
      await docxCaptionComponentHelper.updateCaptionInBlock({
        blockManager: this.blockManager,
        recordId: o.model.recordId,
        path: o.snapshotPath,
        captionDeltaSet: u.toDeltaSet()
      });
    }
    scrollIntoView(e, n, o, r) {
      let {
        blockId: i
      } = this;
      let l = n.getRecordByBlockId(i);
      if (l) {
        return e.scrollToRecord(l.id, async () => {
          let l = n.getBlockViewByBlockIdNotCheck(i);
          if (!(l == null ? undefined : l.captionInstance?.editor)) {
            return;
          }
          let {
            editor: c
          } = l.captionInstance;
          let a = o.getBlockRect(i);
          let {
            top: u
          } = this.getCaretRect(this.range[0], c);
          let {
            bottom: s
          } = this.getCaretRect(this.range[1], c);
          let f = c.getRect().height;
          let g = h.includes(l.type);
          let p = docxFindScrollUtils.getCoverHeight(n) + (g ? a.top : a.bottom) - f;
          docxFindScrollUtils.scrollToFindResult({
            startTop: p + u,
            endBottom: p + s,
            scrollContainer: r
          });
        });
      } else {
        return Promise.resolve();
      }
    }
    constructor(e) {
      super(e);
      f(this, "range", undefined);
      f(this, "type", findBlockConstants.blockTypes.Caption);
      this.range = e.range;
    }
  }
  var docFindRectUtilities = require("doc-find-rect-utilities") /*id: 122406*/;
  var captionEditorConstants = require("caption-editor-constants") /*id: 287236*/;
  var docxCaptionTextCheck_1 = require("docx-caption-text-check_1") /*id: 289941*/;
  function b(e, n, o) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = o;
    }
    return e;
  }
  class v {
    getContentState(e, n) {
      let r = this.blockManager.getBlockViewByBlockIdNotCheck(e);
      if ((r == null ? undefined : r.captionInstance?.editor) && r.captionInstance.active) {
        if (r.captionInstance.editor.isEmpty()) {
          return null;
        } else {
          return r.captionInstance.editor.getContentState();
        }
      } else if (docxCaptionTextCheck_1.isCaptionTextEmpty(n)) {
        return null;
      } else {
        return docxCaptionComponentHelper.createContentStateFromAttributedText(n);
      }
    }
    find(e, n, o) {
      let i = this.getContentState(n, o);
      if (i) {
        return docFindRectUtilities.findTextMatches(i.getContent().get(zeroConstantModule_1.versionValue).getModelText(), e).map(n => new g({
          blockId: this.blockId,
          key: e,
          range: [n.start, n.end],
          blockManager: this.blockManager
        }));
      } else {
        return [];
      }
    }
    replaceAll(e, n, o) {
      if (docxCaptionTextCheck_1.isCaptionTextEmpty(o)) {
        return Promise.resolve();
      }
      let r = docxCaptionComponentHelper.createContentStateFromAttributedText(o);
      let i = n.map(e => {
        let {
          range: n
        } = e;
        n[1];
        n[0];
        let o = captionEditorConstants.isCaptionEnabled ? docxCaptionComponentHelper.getAttributesAtOffset(r, n[0]) : {};
        return {
          range: n,
          mark: o
        };
      });
      docxCaptionComponentHelper.applyTextReplacements(i, e, r);
      let c = this.blockManager.getBlockModelByBlockIdNotCheck(this.blockId);
      if (c) {
        docxCaptionComponentHelper.updateCaptionInBlock({
          blockManager: this.blockManager,
          recordId: c.recordId,
          captionDeltaSet: r.toDeltaSet(),
          path: this.snapshotPath
        });
      }
      return Promise.resolve();
    }
    constructor(e) {
      b(this, "blockId", undefined);
      b(this, "blockManager", undefined);
      b(this, "snapshotPath", undefined);
      let {
        blockId: n,
        blockManager: o,
        snapshotPath: r
      } = e;
      this.blockId = n;
      this.blockManager = o;
      this.snapshotPath = r;
    }
  }
  require.r(exports);
  require.d(exports, {
    CaptionFindAndReplaceModel: function () {
      return v;
    }
  });
}