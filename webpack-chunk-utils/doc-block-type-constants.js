// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$W' to 'codeBlockTypes'
// - Renamed export '$X' to 'okrBlockTypes'
// - Renamed export '$Y' to 'textBlockTypes'
// - Renamed export 'Ap' to 'listBlockTypes'
// - Renamed export 'B8' to 'pasteOperationTypes'
// - Renamed export 'Bv' to 'okrKeyResultTypes'
// - Renamed export 'C5' to 'mediaBlockTypes'
// - Renamed export 'Cg' to 'contentBlockTypes'
// - Renamed export 'Cv' to 'allBlockTypeSet'
// - Renamed export 'Eh' to 'extendedBlockTypes'
// - Renamed export 'Fo' to 'tableCalloutTypes'
// - Renamed export 'Fr' to 'getAllowedBlockTypes'
// - Renamed export 'G1' to 'pollWhiteboardTypes'
// - Renamed export 'J' to 'alignmentConstants'
// - Renamed export 'KY' to 'imageFileTypes'
// - Renamed export 'L$' to 'syncedPageTypes'
// - Renamed export 'Lo' to 'isEmbeddedBlock'
// - Renamed export 'Lq' to 'thirdPartyCommentBlock'
// - Renamed export 'M$' to 'specialBlockTypes'
// - Renamed export 'Mo' to 'gridTableTypes'
// - Renamed export 'Mr' to 'defaultLineHeight'
// - Renamed export 'Mx' to 'quoteBlockTypes'
// - Renamed export 'Pu' to 'okrProgressTypes'
// - Renamed export 'Q$' to 'agendaBlockSet'
// - Renamed export 'QJ' to 'gridTableOkTypes'
// - Renamed export 'RA' to 'objectiveKeyResultTypes'
// - Renamed export 'Sc' to 'tableCellTypes'
// - Renamed export 'VF' to 'positionConstants'
// - Renamed export 'Vn' to 'syncedReferenceBlock'
// - Renamed export 'Wb' to 'bitableSheetTypes'
// - Renamed export 'X7' to 'blockDisplayConstants'
// - Renamed export 'Xy' to 'textFormatConstants'
// - Renamed export 'ZC' to 'compatibleBlock'
// - Renamed export '__' to 'pageGridBlockTypes'
// - Renamed export '_p' to 'codeOnlyTypes'
// - Renamed export '_y' to 'tableOkrTypes'
// - Renamed export 'aB' to 'allEmbeddableTypes'
// - Renamed export 'bX' to 'selectionViewTypes'
// - Renamed export 'bf' to 'calloutQuoteTypes'
// - Renamed export 'bu' to 'blockTypeConstants'
// - Renamed export 'e$' to 'agendaItemBlock'
// - Renamed export 'eo' to 'bulletOrderTypes'
// - Renamed export 'ew' to 'filteredBlockTypes'
// - Renamed export 'f8' to 'pageTableTypes'
// - Renamed export 'fP' to 'focusModeConstants'
// - Renamed export 'fg' to 'syncedReferenceTypes'
// - Renamed export 'gj' to 'gridQuoteTypes'
// - Renamed export 'hK' to 'cellOnlyTypes'
// - Renamed export 'hp' to 'codeQuoteTypes'
// - Renamed export 'iY' to 'agendaCodeTypes'
// - Renamed export 'iy' to 'presentationContainer'
// - Renamed export 'jp' to 'embedBlockTypes'
// - Renamed export 'kH' to 'tableTypeConstants'
// - Renamed export 'll' to 'embeddedBlockSet'
// - Renamed export 'mF' to 'presentationZoomStyle'
// - Renamed export 'mG' to 'tableCalloutOkrTypes'
// - Renamed export 'nJ' to 'createBtnContainer'
// - Renamed export 'ni' to 'cloneStatusConstants'
// - Renamed export 'oF' to 'syncedSourceTypes'
// - Renamed export 'oN' to 'imageOnlyTypes'
// - Renamed export 'p3' to 'pageOnlyTypes'
// - Renamed export 'qt' to 'orderedHeadingTypes'
// - Renamed export 'sR' to 'taskOnlyTypes'
// - Renamed export 'uk' to 'bitableChartTypes'
// - Renamed export 'v$' to 'calloutOnlyTypes'
// - Renamed export 'v1' to 'headingTypeArray'
// - Renamed export 'x' to 'codeContentTypes'
// - Renamed export 'xC' to 'chartEmbeddedTypes'
// - Renamed export 'zq' to 'agendaTaskTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 433991
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var a;
  var u;
  var c;
  var _;
  var l;
  var s;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  (i = {}).TABLE = "table";
  i.SHEET = "sheet";
  i.BITABLE = "bitable";
  i.BASE_REFER = "base_refer";
  i.MINDMAP = "mindnote";
  i.JIRA_FILTER = "jira_filter";
  i.MEEGO = "meego";
  i.TASK_LIST = "task_list";
  let d = i;
  let T = {
    HEADING1: "heading1",
    HEADING2: "heading2",
    HEADING3: "heading3",
    HEADING4: "heading4",
    HEADING5: "heading5",
    HEADING6: "heading6",
    HEADING7: "heading7",
    HEADING8: "heading8",
    HEADING9: "heading9",
    HEADINGN: "headingn",
    QUOTE: "quote",
    QUOTE_CONTAINER: "quote_container",
    LINK: "link",
    IMAGE: "image",
    BULLET: "bullet",
    ORDERED: "ordered",
    DIVIDER: "divider",
    CODE: "code",
    PAGE: "page",
    PLAYGROUND: "playground",
    REFERENCE: "reference",
    SELECTION: "selection",
    SNAPSHOT: "snapshot",
    TOPIC: "topic",
    TEXT: "text",
    GRID: "grid",
    GRID_COLUMN: "grid_column",
    CALLOUT: "callout",
    TODO: "todo",
    TASK: "task",
    TASK_LIST: "task_list",
    USER: "user",
    MENTION_DOC: "mention_doc",
    CHAT_CARD: "chat_card",
    ASSOC_ROOT: "assoc_root",
    ASSOC_NODE: "assoc_node",
    DIAGRAM: "diagram",
    TABLE: d.TABLE,
    CELL: "table_cell",
    IFRAME: "iframe",
    SHEET: d.SHEET,
    BITABLE: d.BITABLE,
    BASE_REFER: d.BASE_REFER,
    FILE: "file",
    UML: "uml",
    FLOWCHART: "flowchart",
    WHITEBOARD: "whiteboard",
    VIEW: "view",
    REMINDER: "reminder",
    PENDING: "pending",
    FALLBACK: "fallback",
    ISV: "isv",
    MINDMAP: d.MINDMAP,
    BOOKMARK: "bookmark",
    OKR: "okr",
    OKRX: "okrx",
    OBJECTIVE: "okr_objective",
    KEY_RESULT: "okr_key_result",
    PROGRESS: "okr_progress",
    POLL: "poll",
    EQUATION: "equation",
    JIRA_ISSUE: "jira_issue",
    JIRA_FILTER: "jira_filter",
    CHART_EMBEDDED: "chart_embedded",
    CHART_REFER: "chart_refer",
    CHART_REFER_HOST_PERM: "chart_refer_host_perm",
    WIKI_CATALOG: "wiki_catalog",
    WIKI_RECENT: "wiki_recent_update",
    MESSAGE: "message",
    BUTTON: "button",
    URL_PREVIEW: "url_preview",
    MEEGO: d.MEEGO,
    SYNCED_SOURCE: "synced_source",
    SYNCED_REFERENCE: "synced_reference",
    FOLDER_MANAGER: "folder_manager",
    DOC_INFO: "doc_info",
    DOC_AI_SUMMARY: "doc_ai_summary",
    AGENDA: "agenda",
    AGENDA_ITEM: "agenda_item",
    AGENDA_ITEM_TITLE: "agenda_item_title",
    AGENDA_ITEM_CONTENT: "agenda_item_content",
    AI: "ai",
    CALENDAR_EVENT: "calendar_event",
    MERMAID: "mermaid",
    REVISION_CONTAINER: "revision_container",
    REVISION: "revision",
    COMMENT_CONTAINER: "comment_container",
    COMMENT: "comment"
  };
  let p = [T.SYNCED_SOURCE, T.SYNCED_REFERENCE];
  let S = [T.OKR, T.OBJECTIVE, T.KEY_RESULT, T.PROGRESS];
  (o = {})[o.CLONE_FAILED = 10] = "CLONE_FAILED";
  let f = o;
  (a = {}).LEFT = "left";
  a.RIGHT = "right";
  a.CENTER = "center";
  let A = a;
  (u = {}).BOLD = "bold";
  u.ITALIC = "italic";
  u.UNDERLINE = "underline";
  u.STRIKETHROUGH = "strikethrough";
  u.INLINE_CODE = "inlineCode";
  let m = u;
  let I = [T.HEADING1, T.HEADING2, T.HEADING3, T.HEADING4, T.HEADING5, T.HEADING6, T.HEADING7, T.HEADING8, T.HEADING9, T.HEADINGN];
  T.SYNCED_SOURCE;
  T.GRID;
  T.QUOTE_CONTAINER;
  let O = [T.CHART_REFER, T.CHART_REFER_HOST_PERM];
  let R = [T.CHART_EMBEDDED, ...O];
  let h = [T.BULLET, T.ORDERED, T.TODO, T.TEXT, ...I];
  let N = [T.TEXT, ...I];
  let C = [T.TEXT];
  let D = [T.PAGE];
  let L = () => {
    let e = [...h, ...C];
    if (docTaskBlockFlags.isFeishuTodoEnabled() && docTaskBlockFlags.isTaskIndentEnabled()) {
      e.push(T.TASK);
    }
    return e;
  };
  let b = [T.BULLET, T.ORDERED, T.TODO, T.TEXT, T.TASK, ...I];
  let g = [T.SELECTION, T.GRID, T.GRID_COLUMN, T.VIEW, T.PENDING, T.PROGRESS, T.AGENDA_ITEM_CONTENT];
  let P = [T.OBJECTIVE, T.KEY_RESULT];
  let M = [...h, ...C, T.QUOTE];
  [...N, ...C, T.QUOTE];
  let v = [...M, T.CODE];
  let y = [...v, T.QUOTE_CONTAINER, T.CALLOUT, T.SYNCED_SOURCE];
  let w = [...M, T.CODE];
  let U = [T.CALLOUT, T.QUOTE_CONTAINER];
  let k = [...M, ...D, T.CODE, T.AGENDA_ITEM_TITLE];
  let B = [...k, T.TASK];
  let H = [T.OBJECTIVE, T.KEY_RESULT];
  [...k];
  let F = new Set([...k, ...H]);
  let G = [T.IFRAME, T.IMAGE, T.PAGE, T.CALLOUT, T.CHAT_CARD, T.CODE, T.DIAGRAM, T.GRID, T.FILE, T.VIEW, T.TABLE, T.SHEET, T.TASK_LIST, T.CHART_EMBEDDED, T.CHART_REFER, T.CHART_REFER_HOST_PERM, T.BITABLE, T.BASE_REFER, T.MINDMAP, T.DIVIDER, T.MINDMAP, T.ISV, T.OKR, T.OKRX, T.QUOTE_CONTAINER, T.POLL, T.BOOKMARK, T.JIRA_FILTER, T.MESSAGE, T.WHITEBOARD, T.SYNCED_SOURCE, T.SYNCED_REFERENCE, T.AGENDA, T.AI, T.CALENDAR_EVENT, T.WIKI_CATALOG, T.WIKI_RECENT, T.FOLDER_MANAGER, T.MERMAID];
  let W = [T.CALLOUT];
  let $ = [...W, T.PAGE, T.GRID_COLUMN, T.CELL, T.QUOTE_CONTAINER, T.AI, T.SYNCED_SOURCE, T.SYNCED_REFERENCE];
  let x = [...$, T.GRID, T.TABLE, T.OKR, T.OBJECTIVE, T.KEY_RESULT, T.PROGRESS, T.AGENDA, T.AGENDA_ITEM, T.AGENDA_ITEM_CONTENT, T.AI];
  T.CALLOUT;
  T.OKR;
  let Z = [T.PAGE, T.GRID, T.GRID_COLUMN, T.CELL, T.PROGRESS, T.CALLOUT, T.QUOTE_CONTAINER, T.SYNCED_SOURCE, T.AGENDA_ITEM_CONTENT, T.AI];
  let X = [...$, T.CODE];
  let V = [...I, ...h, T.IMAGE, T.FILE, T.VIEW];
  let K = [T.CODE];
  let z = Object.values(T).filter(e => ![...h, ...g, T.PAGE].includes(e));
  (c = {}).NONE = "NONE";
  c.FOCUS_ON_BLOCK = "FOCUS_ON_BLOCK";
  c.COVER_ON_BLOCK = "COVER_ON_BLOCK";
  let j = c;
  let Y = [T.IFRAME, T.IMAGE];
  let J = [T.CODE, T.DIVIDER, T.TABLE, T.CELL, T.DIAGRAM, T.UML, T.FLOWCHART, T.SHEET, T.CALLOUT, T.SYNCED_SOURCE, T.SYNCED_REFERENCE, T.MINDMAP, T.BITABLE, T.BASE_REFER, T.OKR, T.TASK, T.TASK_LIST, T.WIKI_CATALOG, T.FOLDER_MANAGER, T.WIKI_RECENT, T.JIRA_FILTER, T.MESSAGE, T.MEEGO, T.SYNCED_SOURCE, T.SYNCED_REFERENCE, T.URL_PREVIEW, T.AGENDA, T.AGENDA_ITEM, T.AI, T.OKRX];
  let Q = [T.CELL];
  let q = [T.TABLE, T.CALLOUT, T.SYNCED_SOURCE, T.SYNCED_REFERENCE, T.OKR, T.QUOTE_CONTAINER, T.AGENDA, T.AGENDA_ITEM, T.AI];
  let ee = [T.SHEET, T.BITABLE, T.BASE_REFER, T.JIRA_FILTER, T.MEEGO, T.TASK_LIST];
  let et = e => ee.includes(e);
  let en = new Set([...ee, T.TABLE, T.IFRAME, T.ISV]);
  (_ = {})[_.start = 0] = "start";
  _[_.end = 1] = "end";
  let er = _;
  (l = {}).BLOCK = "block";
  l.INLINE = "inline";
  let ei = l;
  (s = {})[s.innerCutPaste = 0] = "innerCutPaste";
  s[s.innerCopyPaste = 1] = "innerCopyPaste";
  s[s.outerCutPaste = 2] = "outerCutPaste";
  s[s.outerCopyPaste = 3] = "outerCopyPaste";
  s[s.outerTemplateClone = 4] = "outerTemplateClone";
  let eo = s;
  let ea = [T.TABLE, T.OKR];
  let eu = [T.TABLE, T.CALLOUT, T.PROGRESS, T.OKR];
  let ec = [...k, T.OBJECTIVE, T.KEY_RESULT];
  let e_ = [T.POLL, T.WHITEBOARD, T.SYNCED_SOURCE, T.SYNCED_REFERENCE];
  let el = [T.SYNCED_SOURCE, T.SYNCED_REFERENCE];
  let es = [T.BITABLE, T.BASE_REFER, T.SHEET, T.MINDMAP, T.TASK_LIST];
  let eE = [T.IMAGE];
  let ed = [T.GRID_COLUMN, T.QUOTE_CONTAINER];
  let eT = [T.CELL];
  let ep = 1.8;
  let eS = "presentation-mode-has-zoom-style";
  let ef = "presentation-mode-container";
  T.FILE;
  let eA = [T.TASK];
  let em = [T.SHEET, T.CHART_EMBEDDED, T.CHART_REFER, T.CHART_REFER_HOST_PERM, T.BITABLE, T.BASE_REFER, T.MINDMAP, T.CHAT_CARD, T.IFRAME, T.POLL, T.ISV, T.WIKI_CATALOG, T.FOLDER_MANAGER, T.WIKI_RECENT, T.JIRA_FILTER, T.JIRA_ISSUE, T.WHITEBOARD, T.TASK_LIST, T.MEEGO, T.OKRX, T.MERMAID];
  let eI = [T.ORDERED, ...I];
  let eO = [T.IMAGE, T.FILE];
  T.CODE;
  [T.TABLE, T.CALLOUT, T.CODE, ...k];
  let eR = [T.PAGE, T.TABLE, T.CALLOUT, T.GRID, T.OKR, T.CODE, T.TODO, T.BOOKMARK, T.TASK, ...I, T.ORDERED, T.BULLET, T.QUOTE, T.QUOTE_CONTAINER];
  [...M, ...D];
  let eh = new Set([T.AGENDA, T.AI, T.BASE_REFER, T.BITABLE, T.BOOKMARK, T.CALENDAR_EVENT, T.CHAT_CARD, T.CODE, T.DIAGRAM, T.FALLBACK, T.FILE, T.FOLDER_MANAGER, T.IFRAME, T.IMAGE, T.ISV, T.JIRA_FILTER, T.JIRA_ISSUE, T.MEEGO, T.MESSAGE, T.MINDMAP, T.OKR, T.OKRX, T.POLL, T.SHEET, T.SYNCED_REFERENCE, T.SYNCED_SOURCE, T.TABLE, T.TASK_LIST, T.URL_PREVIEW, T.WHITEBOARD, T.WIKI_CATALOG, T.WIKI_RECENT, T.MERMAID]);
  let eN = [T.GRID, T.TABLE, T.VIEW, T.OKR, T.OKRX, T.OBJECTIVE, T.KEY_RESULT, T.AGENDA, T.AGENDA_ITEM];
  T.PROGRESS;
  T.DIVIDER;
  T.OKR;
  T.OKRX;
  T.AGENDA_ITEM_TITLE;
  let eC = "SYNCED_REFERENCE_BLOCK";
  let eD = "create-btn-container";
  let eL = "agenda-item-block";
  let eb = [T.BITABLE, T.BASE_REFER, T.CHART_EMBEDDED, T.CHART_REFER, T.CHART_REFER_HOST_PERM, T.SHEET, T.SYNCED_REFERENCE, T.WHITEBOARD, T.AI, ...S];
  let eg = [T.SYNCED_SOURCE, T.PAGE];
  let eP = "compatible_block";
  let eM = "third_party_comment_block";
  require.d(exports, {
    codeBlockTypes: function () {
      return X;
    },
    okrBlockTypes: function () {
      return ec;
    },
    textBlockTypes: function () {
      return C;
    },
    listBlockTypes: function () {
      return h;
    },
    pasteOperationTypes: function () {
      return eo;
    },
    okrKeyResultTypes: function () {
      return H;
    },
    mediaBlockTypes: function () {
      return Y;
    },
    contentBlockTypes: function () {
      return V;
    },
    allBlockTypeSet: function () {
      return eh;
    },
    extendedBlockTypes: function () {
      return y;
    },
    tableCalloutTypes: function () {
      return eu;
    },
    getAllowedBlockTypes: function () {
      return L;
    },
    pollWhiteboardTypes: function () {
      return e_;
    },
    alignmentConstants: function () {
      return A;
    },
    imageFileTypes: function () {
      return eO;
    },
    syncedPageTypes: function () {
      return eg;
    },
    isEmbeddedBlock: function () {
      return et;
    },
    thirdPartyCommentBlock: function () {
      return eM;
    },
    specialBlockTypes: function () {
      return J;
    },
    gridTableTypes: function () {
      return eN;
    },
    defaultLineHeight: function () {
      return ep;
    },
    quoteBlockTypes: function () {
      return M;
    },
    okrProgressTypes: function () {
      return S;
    },
    agendaBlockSet: function () {
      return F;
    },
    gridTableOkTypes: function () {
      return x;
    },
    objectiveKeyResultTypes: function () {
      return P;
    },
    tableCellTypes: function () {
      return eT;
    },
    positionConstants: function () {
      return er;
    },
    syncedReferenceBlock: function () {
      return eC;
    },
    bitableSheetTypes: function () {
      return es;
    },
    blockDisplayConstants: function () {
      return ei;
    },
    textFormatConstants: function () {
      return m;
    },
    compatibleBlock: function () {
      return eP;
    },
    pageGridBlockTypes: function () {
      return Z;
    },
    codeOnlyTypes: function () {
      return K;
    },
    tableOkrTypes: function () {
      return ea;
    },
    allEmbeddableTypes: function () {
      return G;
    },
    selectionViewTypes: function () {
      return g;
    },
    calloutQuoteTypes: function () {
      return U;
    },
    blockTypeConstants: function () {
      return T;
    },
    agendaItemBlock: function () {
      return eL;
    },
    bulletOrderTypes: function () {
      return b;
    },
    filteredBlockTypes: function () {
      return z;
    },
    pageTableTypes: function () {
      return eR;
    },
    focusModeConstants: function () {
      return j;
    },
    syncedReferenceTypes: function () {
      return el;
    },
    gridQuoteTypes: function () {
      return ed;
    },
    cellOnlyTypes: function () {
      return Q;
    },
    codeQuoteTypes: function () {
      return v;
    },
    agendaCodeTypes: function () {
      return k;
    },
    presentationContainer: function () {
      return ef;
    },
    embedBlockTypes: function () {
      return em;
    },
    tableTypeConstants: function () {
      return d;
    },
    embeddedBlockSet: function () {
      return en;
    },
    presentationZoomStyle: function () {
      return eS;
    },
    tableCalloutOkrTypes: function () {
      return q;
    },
    createBtnContainer: function () {
      return eD;
    },
    cloneStatusConstants: function () {
      return f;
    },
    syncedSourceTypes: function () {
      return p;
    },
    imageOnlyTypes: function () {
      return eE;
    },
    pageOnlyTypes: function () {
      return D;
    },
    orderedHeadingTypes: function () {
      return eI;
    },
    taskOnlyTypes: function () {
      return eA;
    },
    bitableChartTypes: function () {
      return eb;
    },
    calloutOnlyTypes: function () {
      return W;
    },
    headingTypeArray: function () {
      return I;
    },
    codeContentTypes: function () {
      return w;
    },
    chartEmbeddedTypes: function () {
      return R;
    },
    agendaTaskTypes: function () {
      return B;
    }
  });
}