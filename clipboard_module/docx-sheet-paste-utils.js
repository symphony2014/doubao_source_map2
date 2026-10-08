// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MI' to 'formatCommentData'
// - Renamed export 'Qp' to 'findSheetBlockId'
// - Renamed export 'Yb' to 'scrollToMaxLeft'
// - Renamed export 'aP' to 'parseTokenId'
// - Renamed export 'al' to 'isSheetHeaderShown'
// - Renamed export 'bE' to 'emitContentChange'
// - Renamed export 'kY' to 'isValidTablePaste'
// - Renamed export 'zM' to 'handleSheetPaste'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 88608
         */
module.exports = function (module, exports, require) {
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var docxFindReplaceConfig = require("docx-find-replace-config") /*id: 106059*/;
  var sheetErrorsAndConfig = require("sheet-errors-and-config") /*id: 89207*/;
  var sheetBlockdepLoaderProvider = require("sheet-blockdep-loader-provider") /*id: 16546*/;
  function c(e, n) {
    let i = "confluenceTable";
    if (["class=\"MsoTableGrid\"", "class=\"MsoNormalTable\"", "<melo-data", "copy-ghost-table-wrapper", i, "id=\"docs-internal-guid", i, "class=\"byte-bitable\"", "class=\"ql-sheet\"", "data-shimo-docs", "class=\"roadster-table\""].some(e => n.outerHTML.indexOf(e) !== -1)) {
      return false;
    }
    let r = e.outerHTML;
    return !["ace-table"].some(e => r.indexOf(e) !== -1);
  }
  function u(e) {
    let n = null;
    let i = null;
    if (typeof e == "string") {
      [n, i] = e.split(/_/, 2);
    }
    return {
      token: n,
      id: i
    };
  }
  function d(e) {
    return e.map(e => {
      let {
        commentId: n,
        offsetTop: i,
        offsetHeight: r,
        quote: o
      } = e;
      return {
        commentId: n,
        thirdPartyHeight: r,
        relativeTopToThirdParty: i,
        quote: o || ""
      };
    });
  }
  function h(e, n, i, r = 0) {
    let {
      scrollLeft: o,
      scrollWidth: a,
      clientWidth: s
    } = e.getScrollStatus();
    let {
      scrollItemMaxLeft: l
    } = e.getScrollModel();
    if (!i) {
      return;
    }
    let c = a - s;
    if (c - o > 0 && n.x + i + r - o + l > s) {
      e.executeScroll({
        scrollLeft: c
      });
    }
  }
  let p = (e, n) => {
    return n.structService.getBlockStructsByType("sheet").find(n => !!n.record.snapshot.token.includes(e))?.recordId;
  };
  function f(e, n, i) {
    let {
      bridge: a
    } = e.editorAPI.getService(sheetBlockdepLoaderProvider.sheetBlockdepLoader, {
      dynamic: true
    }).get() || {};
    if (a) {
      if (!a.beforePasteSheetBlock(n.styles, n.html?.outerHTML, i)) {
        docxErrorToastHandler.showErrorWithDebug({
          content: t("common.operation_failed"),
          errorContext: docxErrorDebugUtils.createErrorObject(Error("beforePasteSheetBlock error"))
        });
        return false;
      }
    }
    return true;
  }
  function g(e) {
    e.emit(docxFindReplaceConfig.findReplaceEvents.THIRD_PARTY_CONTENT_CHANGE);
  }
  function m(e, n) {
    var r;
    let {
      id: o
    } = u(n.token);
    let a = (r = n.bridge) === null || r === undefined ? undefined : r.getSheetViewContent(o)?.sheetView;
    if (!a) {
      return false;
    }
    let {
      isRowColHeaderHidden: l
    } = a;
    return !!(e < sheetErrorsAndConfig.layoutSize24) && !l;
  }
  require.d(exports, {
    formatCommentData: function () {
      return d;
    },
    findSheetBlockId: function () {
      return p;
    },
    scrollToMaxLeft: function () {
      return h;
    },
    parseTokenId: function () {
      return u;
    },
    isSheetHeaderShown: function () {
      return m;
    },
    emitContentChange: function () {
      return g;
    },
    isValidTablePaste: function () {
      return c;
    },
    handleSheetPaste: function () {
      return f;
    }
  });
}