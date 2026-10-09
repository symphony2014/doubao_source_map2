// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BY' to 'excludedBlockTypes'
// - Renamed export 'EH' to 'docxPageBlockExt'
// - Renamed export 'N7' to 'interactiveBlockTypes'
// - Renamed export 'Oj' to 'a4WidthInches'
// - Renamed export 'WK' to 'a4HeightInches'
// - Renamed export 'cE' to 'defaultMarginPx'
// - Renamed export 'cH' to 'blockTypeHeights'
// - Renamed export 'ie' to 'disabledBlockTypes'
// - Renamed export 'ix' to 'a5WidthInches'
// - Renamed export 'j7' to 'getInchWidth'
// - Renamed export 'jq' to 'pdfExtension'
// - Renamed export 'ke' to 'letterWidthInches'
// - Renamed export 'oU' to 'quoteBlockTypes'
// - Renamed export 't3' to 'emptyBlockTypes'
// - Renamed export 'y7' to 'blockTypeSelectors'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 928355
         */
module.exports = function (module, exports, require) {
  var docxCodeBlockFeatureFlags = require("docx-code-block-feature-flags") /*id: 888140*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxSyncHighlightFlag = require("docx-sync-highlight-flag") /*id: 537285*/;
  let c = ".pdf";
  let u = ".docx-page-block";
  let a = {
    [docBlockTypeConstants.blockTypeConstants.HEADINGN]: [".heading"],
    [docBlockTypeConstants.blockTypeConstants.BULLET]: [".list"],
    [docBlockTypeConstants.blockTypeConstants.TODO]: [".todo-block"],
    [docBlockTypeConstants.blockTypeConstants.TASK]: [".task-block"],
    [docBlockTypeConstants.blockTypeConstants.IMAGE]: [".docx-image-block"],
    [docBlockTypeConstants.blockTypeConstants.DIAGRAM]: [".docx-diagram-block"],
    [docBlockTypeConstants.blockTypeConstants.MINDMAP]: [".docx-mindnote-block"],
    [docBlockTypeConstants.blockTypeConstants.FILE]: [".docx-file-block"],
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: [".docx-bitable-block .bitable-block-container", ".docx-bitable-block .docx-block-loading-container", ".docx-bitable-block .embeded-bitable-container", ".shortcut-block-error-container"],
    [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: [".docx-bitable-block .bitable-block-container", ".docx-bitable-block .docx-block-loading-container", ".docx-bitable-block .embeded-bitable-container", ".shortcut-block-error-container"],
    [docBlockTypeConstants.blockTypeConstants.SHEET]: [".docx-sheet-block"],
    [docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED]: [".docx-chart_embedded-block"],
    [docBlockTypeConstants.blockTypeConstants.CHART_REFER]: [".docx-chart_refer-block"],
    [docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM]: [".docx-chart_refer_host_perm-block"],
    [docBlockTypeConstants.blockTypeConstants.POLL]: [".docx-poll-block"],
    [docBlockTypeConstants.blockTypeConstants.ISV]: [".docx-isv-block"],
    [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: [".docx-chat_card-block"],
    [docBlockTypeConstants.blockTypeConstants.JIRA_ISSUE]: [".docx-jira_issue-block"],
    [docBlockTypeConstants.blockTypeConstants.JIRA_FILTER]: [".docx-jira_filter-block"],
    [docBlockTypeConstants.blockTypeConstants.IFRAME]: [".iframe-placeholder-container"],
    [docBlockTypeConstants.blockTypeConstants.BOOKMARK]: [".docx-bookmark-block"],
    [docBlockTypeConstants.blockTypeConstants.JIRA_FILTER]: [".docx-jira_filter-block", ".shortcut-block-error-container", ".docx-jira_filter-block .docx-block-loading-container"],
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: [".docx-whiteboard-block"],
    [docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT]: [".docx-calendar_event-block"],
    [docBlockTypeConstants.blockTypeConstants.OKRX]: [".okrx-block-container"]
  };
  let s = new Set();
  Object.values(a).forEach(e => {
    e.forEach(e => {
      if (e) {
        s.add(e);
      }
    });
  });
  let d = (() => {
    let e = document.createElement("div");
    e.style.width = "1in";
    let n = document.getElementsByTagName("body")[0];
    n.appendChild(e);
    let r = getComputedStyle(e, null).getPropertyValue("width");
    n.removeChild(e);
    return parseFloat(r);
  })();
  let f = 8.27 - 1 / 2.54 * 2;
  let h = 11.69 - 1 / 2.54 * 2;
  let _ = 10.6 - 1 / 2.54 * 2;
  let p = 14.98 - 1 / 2.54 * 2;
  let g = 26;
  let E = {
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: 36,
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: 30,
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: 28,
    [docBlockTypeConstants.blockTypeConstants.CALLOUT]: 60 - g,
    [docBlockTypeConstants.blockTypeConstants.CODE]: 80 - g,
    [docBlockTypeConstants.blockTypeConstants.CELL]: 40 - g,
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: 136,
    [docBlockTypeConstants.blockTypeConstants.SHEET]: 56,
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: 90,
    [docBlockTypeConstants.blockTypeConstants.MINDMAP]: 178,
    [docBlockTypeConstants.blockTypeConstants.DIAGRAM]: 160,
    [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: 148,
    [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: 96,
    [docBlockTypeConstants.blockTypeConstants.POLL]: 178,
    [docBlockTypeConstants.blockTypeConstants.BOOKMARK]: 116,
    [docBlockTypeConstants.blockTypeConstants.ISV]: 105,
    [docBlockTypeConstants.blockTypeConstants.MEEGO]: 60,
    [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN]: 0
  };
  let m = [...(docxSyncHighlightFlag.getDocxSyncHighlight() ? [] : [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]), docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.CHART_REFER, docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM, docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED, docBlockTypeConstants.blockTypeConstants.MEEGO, docBlockTypeConstants.blockTypeConstants.TASK_LIST, docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT, docBlockTypeConstants.blockTypeConstants.URL_PREVIEW, docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER, docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG, docBlockTypeConstants.blockTypeConstants.WIKI_RECENT, docBlockTypeConstants.blockTypeConstants.JIRA_ISSUE, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.IFRAME, docBlockTypeConstants.blockTypeConstants.ISV];
  let b = [docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT, docBlockTypeConstants.blockTypeConstants.TASK_LIST, docBlockTypeConstants.blockTypeConstants.URL_PREVIEW, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.MEEGO, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER, docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG, docBlockTypeConstants.blockTypeConstants.WIKI_RECENT, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.CHART_REFER, docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM, docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED, docBlockTypeConstants.blockTypeConstants.ISV, docBlockTypeConstants.blockTypeConstants.IFRAME];
  docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT;
  docBlockTypeConstants.blockTypeConstants.TASK_LIST;
  docBlockTypeConstants.blockTypeConstants.URL_PREVIEW;
  docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER;
  docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG;
  docBlockTypeConstants.blockTypeConstants.WIKI_RECENT;
  docBlockTypeConstants.blockTypeConstants.BASE_REFER;
  docBlockTypeConstants.blockTypeConstants.CHART_REFER;
  docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM;
  docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED;
  docBlockTypeConstants.blockTypeConstants.ISV;
  docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE;
  let v = [];
  let T = [...(docxCodeBlockFeatureFlags.isCodeBlockEnabled() ? [] : [docBlockTypeConstants.blockTypeConstants.CODE])];
  let C = [...docBlockTypeConstants.quoteBlockTypes, docBlockTypeConstants.blockTypeConstants.TASK];
  require.d(exports, {
    excludedBlockTypes: function () {
      return m;
    },
    docxPageBlockExt: function () {
      return u;
    },
    interactiveBlockTypes: function () {
      return b;
    },
    a4WidthInches: function () {
      return f;
    },
    a4HeightInches: function () {
      return h;
    },
    defaultMarginPx: function () {
      return g;
    },
    blockTypeHeights: function () {
      return E;
    },
    disabledBlockTypes: function () {
      return T;
    },
    a5WidthInches: function () {
      return _;
    },
    getInchWidth: function () {
      return d;
    },
    pdfExtension: function () {
      return c;
    },
    letterWidthInches: function () {
      return p;
    },
    quoteBlockTypes: function () {
      return C;
    },
    emptyBlockTypes: function () {
      return v;
    },
    blockTypeSelectors: function () {
      return s;
    }
  });
}