// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BU' to 'trackFindReplaceClick'
// - Renamed export 'Bd' to 'roundNumber'
// - Renamed export 'Hx' to 'calcBlockRelativeRect'
// - Renamed export 'Kd' to 'contentClickReporter'
// - Renamed export 'Pe' to 'trackFindReplaceView'
// - Renamed export 'YQ' to 'getRangeDomRect'
// - Renamed export 'cn' to 'createRangeRect'
// - Renamed export 'lI' to 'findTextMatches'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 122406
         */
module.exports = function (module, exports, require) {
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var docxEventHelper = require("docx-event-helper") /*id: 997602*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  function d(e) {
    return Number(e.toFixed(0));
  }
  function s(e, o) {
    let r = function (e) {
      if (e && e.length) {
        try {
          var o;
          o = e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
          return RegExp(o, "ig");
        } catch (e) {
          if (!(e instanceof SyntaxError)) {
            throw e;
          }
        }
      }
    }(o);
    if (!r) {
      return [];
    }
    let i = [];
    let n = r.exec(e);
    while (n !== null) {
      let o = n[0];
      if (!o.length) {
        break;
      }
      let {
        index: l
      } = n;
      i.push({
        start: l,
        end: o.length + l
      });
      n = r.exec(e);
    }
    return i;
  }
  function u(e, o = {}) {
    docxEventHelper.collectEventWithTarget("ccm_doc_find_replace_panel_click", docxEditorBlockMetadataUtils.getPageBlockInfo(), {
      click: e,
      target: "none",
      ...o
    });
  }
  function f() {
    docxEventHelper.collectEventWithIdle("ccm_doc_find_replace_panel_view", docxEditorBlockMetadataUtils.getPageBlockInfo(), {
      object_block_data: "[]"
    });
  }
  function h(e) {
    let o = e.getClientRects();
    let r = o[0];
    let i = o[o.length - 1];
    return {
      height: r.height,
      startLeft: r.left,
      startTop: r.top,
      startBottom: r.bottom,
      endLeft: i.right,
      endBottom: i.bottom
    };
  }
  function g(e, o, r) {
    let [i, n] = o;
    try {
      let o = document.createRange();
      o.setStart(e, i);
      o.setEnd(e, n);
      return h(o);
    } catch (e) {
      if (r != null) {
        r(e);
      }
    }
  }
  function k(e, o) {
    let r = 0;
    for (let i of e) {
      if (!i.firstChild || i.firstChild.nodeType !== Node.TEXT_NODE) {
        return;
      }
      let e = i.firstChild.textContent.length;
      if (!(r + e < o)) {
        return {
          node: i.firstChild,
          offset: o - r
        };
      }
      r += e;
    }
  }
  function b(e, o, r) {
    var n;
    let l;
    try {
      l = e.editor.selection.toDOMRange(editorRangeUtilities.convertRangeWithZone(e, o), {
        ignoreNormalize: true
      });
    } catch (e) {}
    if (!l) {
      return;
    }
    let {
      endContainer: a
    } = l;
    let d = a == null ? undefined : (n = a.parentElement) === null || n === undefined ? undefined : n.closest(`[${editorConstantsKeycodes.dataFakeText_1}]`);
    let s = d == null ? undefined : d.querySelector(".embed-text-container");
    if (!(s == null ? undefined : s.firstChild)) {
      return;
    }
    if (s.firstChild.nodeType === Node.TEXT_NODE) {
      return g(s.firstChild, r, e => {});
    }
    let u = Array.from(s.childNodes);
    if (u.every(e => e.nodeName.toLowerCase() === "span")) {
      if (r[0] < 0 || r[1] > s.textContent.length) {
        return;
      }
      return function (e, o, r) {
        let [i, n] = o;
        let l = k(e, i);
        if (!l) {
          return;
        }
        let c = k(e, n);
        if (c) {
          try {
            let e = document.createRange();
            e.setStart(l.node, l.offset);
            e.setEnd(c.node, c.offset);
            return h(e);
          } catch (e) {
            if (r != null) {
              r(e);
            }
          }
        }
      }(u, r, e => {});
    }
  }
  function v(e) {
    let {
      block: o,
      rect: r,
      range: i,
      offset: n
    } = e;
    let l = b(o, i, n);
    if (!l) {
      return domRectBboxHelpers.createEmptyRect();
    }
    let c = {
      left: l.startLeft,
      top: l.startTop,
      bottom: l.endBottom,
      right: l.endLeft,
      width: 0,
      height: l.height
    };
    let d = r.getBlockClientRect(o.id) || domRectBboxHelpers.createEmptyRect();
    return domRectBboxHelpers.calcRelativeRect(c, d);
  }
  let p = {
    extraParams: {
      target: "none",
      action_object: "text",
      click: "hotkey_action"
    },
    setObjectBlockData(e) {
      let o = docxEditorBlockMetadataUtils.getBlockStructureInfo(e.getRootBlockId(), e);
      this.extraParams.object_block_data = [docxEditorBlockMetadataUtils.formatBlockObject(o)];
    },
    report(e) {
      docxEventHelper.collectEventWithTarget("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getPageBlockInfo(), {
        ...this.extraParams,
        action_type: e
      });
    }
  };
  require.d(exports, {
    trackFindReplaceClick: function () {
      return u;
    },
    roundNumber: function () {
      return d;
    },
    calcBlockRelativeRect: function () {
      return v;
    },
    contentClickReporter: function () {
      return p;
    },
    trackFindReplaceView: function () {
      return f;
    },
    getRangeDomRect: function () {
      return b;
    },
    createRangeRect: function () {
      return g;
    },
    findTextMatches: function () {
      return s;
    }
  });
}