// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c8' to 'getBlockIdFromElement'
// - Renamed export 'FF' to 'getBlockIdFromNode'
// - Renamed export 'xH' to 'getBlockTypeFromNode'
// - Renamed export 'mQ' to 'getBlockIdFromPoint'
// - Renamed export 'au' to 'isLazySelectionNode'
// - Renamed export 'aL' to 'isSameBlock'
// - Renamed export 'mW' to 'isNodeOutsideBlockContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 239669
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function c(e) {
    if (e.nodeType === Node.ELEMENT_NODE) {
      return Number(e.getAttribute(docxEditorConstantsConfig.dataBlockIdAttr)) || undefined;
    }
  }
  function u(e) {
    var n;
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
    let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    e = e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
    let i = 0;
    while (e && e !== r && (c(e) && (!(n = e) || !n.closest(".embed-inline-block")) && i++, i !== o)) {
      e = e.parentElement;
    }
    if (i === o) {
      return e;
    } else {
      return undefined;
    }
  }
  function a(e, n = document.body, r = 1) {
    if (!e) {
      return;
    }
    let o = u(e, n, r);
    if (o) {
      return c(o);
    }
  }
  function s(e, n = document.body, r = 1) {
    if (!e) {
      return;
    }
    let o = u(e, n, r);
    if (o) {
      return o.getAttribute("data-block-type") || undefined;
    }
  }
  function d(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = 0;
    let l = e;
    let c = n;
    let u = docxEditorCore.ZERO_OFFSET;
    while (i < 3 && !u) {
      if (r) {
        c += 15;
      } else {
        l += 15;
      }
      let s = r ? [e, c] : [l, n];
      u = function (e, n) {
        let r = document.elementFromPoint(e, n);
        return r && a(r) || docxEditorCore.ZERO_OFFSET;
      }(s[0], s[1]);
      i++;
    }
    return u || undefined;
  }
  function f(e, n) {
    let r = a(e);
    if (!r) {
      return true;
    }
    let o = n.getBlockViewByBlockIdNotCheck(r);
    if (!(o == null ? undefined : o.contentElement)) {
      return false;
    }
    if (o.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
      let n = o.hostElement.querySelector("[data-content-editable-root]");
      return !(n == null ? undefined : n.contains(e));
    }
    return !![docBlockTypeConstants.blockTypeConstants.POLL, docBlockTypeConstants.blockTypeConstants.CHAT_CARD, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.MEEGO, docBlockTypeConstants.blockTypeConstants.TASK_LIST].includes(o.type) && !o.contentElement.contains(e);
  }
  function h(e, n) {
    let r = a(e);
    let o = a(n);
    return r && o && r === o;
  }
  function _(e) {
    return Array.from(document.querySelectorAll(`.${docxEditorConstantsConfig.containerIds.LAZY_SELECTION_NODE}`)).some(n => n === e || n.contains(e));
  }
  require("docx-table-layout-cache-manager") /*id: 970630*/;
  require("docx-table-layout-utils") /*id: 163702*/;
  require.d(exports, {
    getBlockIdFromElement: function () {
      return c;
    },
    getBlockIdFromNode: function () {
      return a;
    },
    getBlockTypeFromNode: function () {
      return s;
    },
    getBlockIdFromPoint: function () {
      return d;
    },
    isLazySelectionNode: function () {
      return _;
    },
    isSameBlock: function () {
      return h;
    },
    isNodeOutsideBlockContent: function () {
      return f;
    }
  });
}