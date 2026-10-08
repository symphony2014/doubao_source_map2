// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DE' to 'applyFormattingToBlocks'
// - Renamed export 'R9' to 'handleBlockIndent'
// - Renamed export 'ui' to 'checkBlocksFormattingConsistency'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 436394
         */
module.exports = function (module, exports, require) {
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorFormatRevisionUtils = require("editor-format-revision-utils") /*id: 63043*/;
  var docxIndentValidationAndTips = require("docx-indent-validation-and-tips") /*id: 434696*/;
  function a(e, n, r) {
    docxIndentValidationAndTips.isTextIndentEnabled({
      blockManager: n,
      indentResult: r,
      blockId: e.id,
      source: docxIndentValidationAndTips.checkListBlockAbove.above_block,
      needShowBlockTips: true,
      withAnimation: true,
      needAutoReport: true
    });
  }
  function s(e, n, r, c = "true", u = []) {
    let a = true;
    let s = c;
    for (let d of n) {
      let n = e.getBlockViewByBlockIdNotCheck(d.id);
      if (!n) {
        continue;
      }
      let f = editorRangeUtilities.convertRangeWithZone(n, d.selection);
      let [h, _] = function (e, n) {
        let r;
        let c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "true";
        let u = arguments.length > 3 ? arguments[3] : undefined;
        let a = arguments.length > 4 ? arguments[4] : undefined;
        let {
          zoneState: s
        } = e.model;
        if (!u) {
          let n = [0, editorTextBlockUtilities.getModelTextWithoutTrailing(s).length];
          u = editorRangeUtilities.convertRangeWithZone(e, n);
        }
        let d = true;
        let f = c;
        for (let r of a ? e.model.zoneState.getEntities(u) : [{
          ...u,
          text: e.getText(),
          attributes: {}
        }]) {
          if (r.text !== "\n" && !(a == null ? undefined : a.find(e => {
            return !!r.attributes?.[e];
          }))) {
            let o = contentDeltaUtilityFunctions.b(e.model.zoneState, r);
            if (o[n] !== c) {
              d = false;
              f = o[n] || "";
              break;
            }
          }
        }
        return [d, f];
      }(n, r, c, f, u);
      if (!h) {
        a = h;
        s = _;
        break;
      }
    }
    return [a, s];
  }
  function d(e) {
    let {
      ctx: n,
      blocks: r,
      key: o,
      isAllMarked: i
    } = e;
    let {
      collector: l
    } = n;
    if (l != null) {
      l.setExtraData({
        action_value: {
          value1: i ? "false" : "true"
        }
      }, true);
    }
    editorFormatRevisionUtils.applyFormatRevisionToBlocks(r, {
      [o]: i ? "" : "true"
    });
  }
  require.d(exports, {
    applyFormattingToBlocks: function () {
      return d;
    },
    handleBlockIndent: function () {
      return a;
    },
    checkBlocksFormattingConsistency: function () {
      return s;
    }
  });
}