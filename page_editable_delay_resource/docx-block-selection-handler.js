// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'domElementPositionUtils'
// - Resolved require(685116) to 'dom-element-position-utils'
// - Renamed variable 'a' to 'throttledArgStringifyUtil'
// - Resolved require(15104) to 'throttled-arg-stringify-util'
// - Renamed variable 'l' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'd' to 'editorRangeUtilities'
// - Resolved require(780600) to 'editor-range-utilities'
// - Renamed variable 'u' to 'diProviderCollectEvent'
// - Resolved require(308105) to 'di-provider-collect-event'
// - Renamed variable 'h' to 'docxBlockUtils_2'
// - Resolved require(239669) to 'docx-block-utils_2'
// - Renamed variable 'p' to 'editorUiConstants'
// - Resolved require(455663) to 'editor-ui-constants'
// - Renamed variable 'g' to 'targetBlockRelation'
// - Resolved require(187984) to 'target-block-relation'
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'V' to 'collectEventName' (module 308105)
// - Updated imported property 'Qm' to 'layerPopupSelector' (module 455663)
// - Updated imported property 'xH' to 'getBlockTypeFromNode' (module 239669)
// - Updated imported property 'FF' to 'getBlockIdFromNode' (module 239669)
// - Updated imported property 'Mx' to 'quoteBlockTypes' (module 433991)
// - Updated imported property 'po' to 'ZERO_OFFSET' (module 135760)
// - Updated imported property 'qK' to 'getCaretFromPoint' (module 685116)
// - Updated imported property 'Z' to 'throttledStringify' (module 15104)
// - Updated imported property 'Nz' to 'isEditorInstance' (module 469443)
// - Updated imported property 'L' to 'getBlockRelation' (module 187984)
// - Updated imported property 'Nz' to 'selectToStart' (module 780600)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 256684
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var domElementPositionUtils = require("dom-element-position-utils") /*id: 685116*/;
  var throttledArgStringifyUtil = require("throttled-arg-stringify-util") /*id: 15104*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var targetBlockRelation = require("target-block-relation") /*id: 187984*/;
  let f = (e, r) => {
    if (r.continue && r.instance.selectionContext.singleClick) {
      if (browserEnvironmentDetectionUtils.browserDetector.isWindows || !r.event) {
        return;
      }
      let f = e.context.options.getContentContainer();
      let {
        target: v
      } = r.event;
      let b = v;
      if (v.nodeType !== 1) {
        b = v.parentElement;
      }
      if (!b) {
        return;
      }
      let {
        blockManager: y
      } = e.context;
      let k = y.getBlockViewByBlockIdNotCheck(y.rootBlockId)?.hostElement;
      if (!k) {
        y.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "rootBlock_block_view_error",
          info: JSON.stringify({
            blockId: y.rootBlockId
          })
        });
      }
      if (!b || !f || !f.contains(b) || b === k || b.closest(editorUiConstants.layerPopupSelector) || b.closest(".h5-toolbar-wrapper")) {
        return;
      }
      let I = docxBlockUtils_2.getBlockTypeFromNode(b);
      if (I && docBlockTypeConstants.quoteBlockTypes.includes(I)) {
        return;
      }
      let {
        clientX: E,
        clientY: w
      } = r.event;
      let M = function (e, r) {
        let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        let c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
        let d = docxEditorCore.ZERO_OFFSET;
        let u = domElementPositionUtils.getCaretFromPoint(e, r)?.textNode || document.elementFromPoint(e, r);
        if (!(d = u && docxBlockUtils_2.getBlockIdFromNode(u) || docxEditorCore.ZERO_OFFSET)) {
          return [];
        }
        c *= 2;
        let p = 0;
        let g = r;
        let f = s;
        let m = [d];
        while (p < c) {
          if (p % 2 == 0) {
            g -= f;
          } else {
            g += f;
            f = s * (p + 1) / 2;
          }
          let i = [e, g];
          let n = domElementPositionUtils.getCaretFromPoint(i[0], i[1])?.textNode || document.elementFromPoint(i[0], i[1]);
          let a = n && docxBlockUtils_2.getBlockIdFromNode(n) || "";
          if (a && a !== d) {
            m.push(a);
          }
          if (p % 2 == 1 && m.length > 1) {
            break;
          }
          g = r;
          p++;
        }
        return throttledArgStringifyUtil.throttledStringify(m);
      }(E, w);
      if (!M.length) {
        return;
      }
      let x = M[0];
      let C = y.getBlockViewByBlockIdNotCheck(x);
      if (!C || !editorTextBlockUtilities.isEditorInstance(C) || !C.editable) {
        return;
      }
      let B = C.model.zoneState.getContainer();
      if (B == null || !B.contains(b)) {
        if (M.length === 1 && x === y.rootBlockId && !b.closest(".doc-meta-entry-wrapper") && e.context.getSelection()[0]?.id !== x) {
          m(x, e.context);
          r.continue = false;
        }
        if (M.length === 2) {
          let i = targetBlockRelation.getBlockRelation({
            blockManager: e.context.blockManager,
            targetIds: M
          });
          if (i.parent === x) {
            m(M[1], e.context);
            r.continue = false;
          }
          if (i.isBrotherhood) {
            m(x, e.context);
            r.continue = false;
          }
          return;
        }
        if (M.length === 3) {
          let i = targetBlockRelation.getBlockRelation({
            blockManager: e.context.blockManager,
            targetIds: M.slice(0, 2)
          });
          let n = targetBlockRelation.getBlockRelation({
            blockManager: e.context.blockManager,
            targetIds: [x, M[2]]
          });
          if (i.parent === x || n.parent === x) {
            let i = function (e, r, i) {
              let [n, o] = r;
              let {
                blockManager: a,
                rect: l
              } = i;
              let s = a.getBlockViewByBlockId(n);
              let c = a.getBlockViewByBlockId(o);
              if (!s.editable && !c.editable) {
                return null;
              }
              if (s.editable && c.editable) {
                let {
                  top: r
                } = l.getOriginBlockRect(n);
                let {
                  top: i
                } = l.getOriginBlockRect(o);
                if (Math.abs(e - r) > Math.abs(e - i)) {
                  return o;
                } else {
                  return n;
                }
              }
              if (s.editable) {
                return n;
              } else {
                return o;
              }
            }(w, [M[1], M[2]], e.context);
            if (i) {
              m(i, e.context);
            }
            r.continue = false;
          }
        }
      }
    }
  };
  function m(e, r) {
    let i = r.blockManager.getBlockViewByBlockId(e);
    if (editorTextBlockUtilities.isEditorInstance(i) && i.editable) {
      editorRangeUtilities.selectToStart(i, true);
    }
  }
  require.d(exports, {
    onStop: function () {
      return f;
    }
  });
}