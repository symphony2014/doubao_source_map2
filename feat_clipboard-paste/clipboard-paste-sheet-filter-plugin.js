// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Renamed variable 'i' to 'docxClipboardUtils'
// - Resolved require(538199) to 'docx-clipboard-utils'
// - Renamed variable 'l' to 'docxClipboardPasteProcessor'
// - Resolved require(648064) to 'docx-clipboard-paste-processor'
// - Renamed variable 's' to 'htmlPasteParser'
// - Resolved require(985949) to 'html-paste-parser'
// - Renamed variable 'c' to 'docBlockDomParser'
// - Resolved require(238292) to 'doc-block-dom-parser'
// - Renamed variable 'd' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Resolved require(713546) to 'doc-host-type-checker'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'lk' to 'traverseAndFilterRecords' (module 538199)
// - Updated imported property 'Z' to 'DocBlockParser' (module 238292)
// - Updated imported property 'Z' to 'HtmlParseRules' (module 985949)
// - Updated imported property 'N1' to 'processClipboardBlocks' (module 648064)
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'Z7' to 'dataTransformOps' (module 324971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 804456
         */
module.exports = function (module, exports, require) {
  let n;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var docxClipboardPasteProcessor = require("docx-clipboard-paste-processor") /*id: 648064*/;
  var htmlPasteParser = require("html-paste-parser") /*id: 985949*/;
  var docBlockDomParser = require("doc-block-dom-parser") /*id: 238292*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  require("doc-host-type-checker") /*id: 713546*/;
  n = {
    [docBlockTypeConstants.blockTypeConstants.SHEET]: {
      message: t("LarkCCM_Sheets_NewDoc_BlockNa_Toast", {
        block: t("common.sheet")
      })
    },
    [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: {
      message: t("LarkCCM_Sheets_NewDoc_BlockNa_Toast", {
        block: t("common.bitable_web_renametest")
      })
    },
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: {
      message: t("LarkCCM_Sheets_NewDoc_BlockNa_Toast", {
        block: t("common.bitable_web_renametest")
      })
    },
    [docBlockTypeConstants.blockTypeConstants.TASK]: {
      message: t("LarkCCM_Sheets_NewDoc_BlockNa_Toast", {
        block: t("LarkCCM_Docs_block_ToDoList")
      })
    }
  };
  e => {
    let {
      data: r
    } = e;
    let {
      recordMap: o,
      recordIds: a
    } = r;
    return function (e, r, o) {
      let n = {};
      docxClipboardUtils.traverseAndFilterRecords(e, r, e => {
        let {
          snapshot: a
        } = r[e];
        if (o[a.type]) {
          n[a.type] = o[a.type];
          return {
            remove: true
          };
        }
      });
      return n;
    }(a, o, n);
  };
  let p = e => {
    let {
      data: r,
      blockManager: o
    } = e;
    let {
      recordIds: n,
      recordMap: a,
      payloadMap: p
    } = r;
    docxClipboardUtils.traverseAndFilterRecords(n, a, e => {
      let {
        snapshot: i,
        id: u
      } = a[e];
      if (i.type !== docBlockTypeConstants.blockTypeConstants.SHEET) {
        return;
      }
      let m = p == null ? undefined : p[u]?.html;
      if (!m) {
        return;
      }
      let h = new docBlockDomParser.DocBlockParser();
      let f = document.createElement("div");
      f.id = "block-root";
      f.appendChild(m);
      let b = {
        ...htmlPasteParser.HtmlParseRules
      };
      delete b.bitable;
      delete b.sheet;
      delete b.table.preprocess;
      let k = h.build(h.newPathNode(f), f, b);
      let {
        recordIds: y,
        recordMap: g,
        payloadMap: _
      } = docxClipboardPasteProcessor.processClipboardBlocks(k, o);
      if (g[y[0]].snapshot.type !== docBlockTypeConstants.blockTypeConstants.TABLE) {
        return;
      }
      let T = n.indexOf(e);
      n.splice(T, 1, y[0]);
      delete a[u];
      delete p[u];
      Object.assign(a, g);
      Object.assign(p, _);
    });
  };
  let u = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: p,
    options: {
      priority: clipboardPasteDataHandlers.dataTransformOps.docxAtSheetFilter
    }
  }];
  var m = [{
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.SHEET
    },
    hookConfigList: u
  }];
  require.r(exports);
  require.d(exports, {
    docxAtSheetFilter: function () {
      return p;
    },
    default: function () {
      return m;
    }
  });
}