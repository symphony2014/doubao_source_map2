// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LY' to 'createEditableInputEvent'
// - Renamed export 'PE' to 'isSelectionAcrossBlocks'
// - Renamed export 'TM' to 'trackUnexpectedFocus'
// - Renamed export 'dY' to 'isFromEditableExtension'
// - Renamed export 'rV' to 'getTaskBlockEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 259936
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var i = debugBrowserConfig;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var editorDomConstants = require("editor-dom-constants") /*id: 585572*/;
  let g = i("editable:utils");
  function m(e) {
    let o = document.getSelection();
    let r = o && o.rangeCount >= 1 ? o.getRangeAt(0) : null;
    if (!r) {
      return null;
    }
    let {
      startContainer: n,
      endContainer: i
    } = r;
    let a = docxBlockUtils_2.getBlockIdFromNode(n);
    let l = docxBlockUtils_2.getBlockIdFromNode(i);
    if (!a || !l || a !== l) {
      return null;
    }
    let c = e.getBlockViewByBlockIdNotCheck(a);
    return (c == null ? undefined : c.type) && docBlockTypeConstants.taskOnlyTypes.includes(c.type) && c.editorInstance && c.editorInstance || null;
  }
  function f(e, o) {
    let r;
    if (e instanceof InputEvent) {
      e.targetRanges = e.getTargetRanges();
      r = new InputEvent(e.type, e);
      if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
        Object.defineProperties(r, {
          inputType: {
            writable: false,
            value: e.inputType
          },
          targetRanges: {
            writable: false,
            value: e.targetRanges
          },
          getTargetRanges: {
            writable: false,
            value: () => e.targetRanges
          }
        });
      }
    } else {
      r = new e.constructor(e.type, e);
    }
    let n = {
      writable: false,
      value: o.getContainer()
    };
    Object.defineProperties(r, {
      target: n,
      currentTarget: n,
      srcElement: n
    });
    r.isDispatchFromEditableExtension = true;
    return r;
  }
  function b(e) {
    if (!(e.target instanceof HTMLElement)) {
      return false;
    }
    let o = e.target.dataset.contentEditableRoot === "true";
    let r = !!e.target.hasAttribute("data-enter") && !!e.target.closest("[data-content-editable-root]");
    let n = e.target.classList.contains("render-unit-wrapper");
    return o || r || n;
  }
  function k(e, o, r) {
    let n = e.getSelection();
    if (n.length === 0) {
      return true;
    }
    if (e.isTextSelectionAcrossBlocks()) {
      return false;
    }
    let i = o.getBlockViewByBlockId(n[0].id);
    if (!(i == null ? undefined : i.isTextBlock) || !(i == null ? undefined : i.isFocus())) {
      return true;
    }
    let a = window.getSelection();
    if (!a || !a.anchorNode || !a.isCollapsed) {
      return false;
    }
    let l = docxBlockUtils_2.getBlockIdFromNode(a.anchorNode);
    if (l === undefined) {
      return false;
    }
    let s = e.getSelection();
    let h = r.getBlockModelByBlockId(l);
    if (editorTextBlockUtilities.isTextBlock(h) && h.isEmpty && (s.length === 0 || s[0].id !== l)) {
      return true;
    }
    if (editorTextBlockUtilities.isTextBlock(h) && s.length === 1) {
      let e = h.getSelection();
      let o = e && e.isCollapsed() && editorRangeUtilities.isAtStart(e);
      let r = editorSelectionUtilities.isCollapsedTextSelection(s) && s[0].selection?.start === 0;
      if (o && !r) {
        return true;
      }
    }
    return false;
  }
  function y(e) {
    var o;
    if (!e.editorAPI.config.get("isMain")) {
      return;
    }
    let r = document.getSelection();
    if (!r) {
      return;
    }
    let n = editorSelectionUtilities.isSelectionChanged(r, 0);
    let i = n == null ? undefined : n.startContainer;
    let l = i instanceof Element ? i : i == null ? undefined : i.parentElement;
    if (!l) {
      return;
    }
    let s = e.getBlockViewByBlockIdNotCheck(e.getRootBlockId());
    if (!s) {
      return;
    }
    if (!(s == null ? undefined : (o = s.hostElement) === null || o === undefined ? undefined : o.contains(l))) {
      g("focus out of page");
      return;
    }
    if (l.closest(".text-editor")) {
      g("focus text editor dom");
      return;
    }
    let c = function (e, o = 3) {
      let r = "";
      let n = e;
      let i = 0;
      while (n && i < o) {
        let e = n.tagName.toLowerCase() + (n.className ? `.${n.className.trim().replace(/\s+/g, ".")}` : "");
        r = i === 0 ? e : `${e} > ${r}`;
        n = n.parentElement;
        i++;
      }
      return r;
    }(l, 5).slice(-editorDomConstants.inputDelayMs);
    if (editorDomConstants.editorSelectors.find(e => c.includes(e))) {
      g("focus at dom, but it is expect. Path is ", c);
      return;
    }
    g("focus unexpect dom ", c);
    flowDocEventCollector.collectEvent("doc_bug_track_dev", {
      action: "focus_at_unexpected_dom",
      info: JSON.stringify({
        path: c
      })
    });
  }
  require.d(exports, {
    createEditableInputEvent: function () {
      return f;
    },
    isSelectionAcrossBlocks: function () {
      return k;
    },
    trackUnexpectedFocus: function () {
      return y;
    },
    isFromEditableExtension: function () {
      return b;
    },
    getTaskBlockEditor: function () {
      return m;
    }
  });
}