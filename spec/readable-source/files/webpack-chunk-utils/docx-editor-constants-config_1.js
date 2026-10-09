// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bb' to 'blockToolbarProvider'
// - Renamed export 'Bg' to 'blockTypeCategory'
// - Renamed export 'Bi' to 'textToolbarProvider'
// - Renamed export 'Bn' to 'inlineTriggerProvider'
// - Renamed export 'F1' to 'whiteboardBlockTypes'
// - Renamed export 'Hq' to 'noBlockConstants'
// - Renamed export 'I3' to 'blockToolbarComponentTypes'
// - Renamed export 'Pv' to 'pageBlockTypes'
// - Renamed export 'S8' to 'tablePopoverToolbarProvider'
// - Renamed export 'Tu' to 'actionTypeConstants'
// - Renamed export 'Ty' to 'maxZIndexConstant'
// - Renamed export 'Uo' to 'editTextBlockToolbarProvider'
// - Renamed export 'V7' to 'addPanelIconConstant'
// - Renamed export 'W3' to 'blockOperationMenuTypes'
// - Renamed export 'WO' to 'textBlockToolbarMenuTypes'
// - Renamed export 'XZ' to 'tableCellToolbarMenuTypes'
// - Renamed export 'YD' to 'okrSearchProvider'
// - Renamed export '_T' to 'tableCellToolbarProvider'
// - Renamed export 'ao' to 'blockInsertPanelCategories'
// - Renamed export 'c0' to 'blockContextFlags'
// - Renamed export 'gB' to 'blockMenuEventConstants'
// - Renamed export 'hm' to 'maxWaitConstant'
// - Renamed export 'jJ' to 'templateSearchProvider'
// - Renamed export 'l5' to 'textBlockToolbarProvider'
// - Renamed export 'lX' to 'embeddableBlockTypes'
// - Renamed export 'mv' to 'textToolbarConstants'
// - Renamed export 'nT' to 'tablePopoverMenuTypes'
// - Renamed export 'o2' to 'editLinkProvider'
// - Renamed export 'q9' to 'blockLevelTypes'
// - Renamed export 'qV' to 'gridAndTableBlockTypes'
// - Renamed export 'qr' to 'templateSearchProvider_1'
// - Renamed export 'r6' to 'blockToolbarMenuTypes'
// - Renamed export 'tM' to 'equationRendererKey'
// - Renamed export 'uQ' to 'textBlockToolbarProvider_1'
// - Renamed export 'up' to 'newChildDocProvider'
// - Renamed export 'yO' to 'okrxSearchProvider'
// - Renamed export 'zG' to 'toolbarForceUpdate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 914193
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
  var E;
  var d;
  var T;
  var p;
  var S;
  var f;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var equationRenderer = require("equation-renderer") /*id: 901840*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  (i = {}).TOOLBAR_FORCE_UPDATE = "TOOLBAR_FORCE_UPDATE";
  let R = i;
  (o = {}).AddColumn = "add_column";
  o.MentionPeople = "mention_people";
  o.MentionPage = "mention_page";
  o.Reminder = "reminder";
  o.SaveAsTemplate = "save_as_template";
  o.Link = "link";
  o.NewPage = "new_page";
  o.Copy = "copy";
  o.CopyLink = "copy_link";
  o.BlockLink = "block_link";
  o.ShareLink = "share_link";
  o.ShareTextLink = "share_text_link";
  o.Hyperlink = "hyper_link";
  o.CopyLiveQuote = "copy_live_quote";
  o.Cut = "cut";
  o.Delete = "delete";
  o.ConvertToPage = "convert_to_page";
  o.Comment = "comment";
  o.Synced = "synced";
  o.Reaction = "reaction";
  o.AddBelow = "add_below";
  o.DebugUseLocalResource = "debug_use_local_resource";
  o.DebugReload = "debug_reload";
  o.Embeds = "embeds";
  o.OKR = "okr";
  o.Template = "template";
  o.More = "more";
  o.BlockStyle = "block_style";
  o.Align = "align";
  o.AlignLeft = "align_left";
  o.AlignCenter = "align_center";
  o.AlignRight = "align_right";
  o.AlignMiddle = "align_middle";
  o.AlignTop = "align_top";
  o.AlignButtom = "align_buttom";
  o.Indent = "indent";
  o.IncreaseIndentation = "increase_indentation";
  o.ReduceIndentation = "reduce_indentation";
  o.Bold = "bold";
  o.Strikethrough = "strikethrough";
  o.Italic = "italic";
  o.Underline = "underline";
  o.InlineCode = "inline_code";
  o.TextHighlight = "text_highlight";
  o.SinglePoll = "single_poll";
  o.MultiplePoll = "multiple_poll";
  o.Jira = "jira";
  o.JiraIssue = "jira_issue";
  o.JiraFilter = "jira_filter";
  o.AddChildDoc = "add_child_doc";
  o.AddChildDocCircle = "add_child_doc_circle";
  o.HeaderColumn = "header_column";
  o.HeaderRow = "header_row";
  o.TextMore = "text_more";
  o.CreateLingo = "create_lingo";
  o.UserAsk = "user_ask";
  o.ExplainThis = "explain-this";
  o.DistributeColumn = "distribute_column";
  o.Translate = "translate";
  o.SearchWeb = "search_web";
  o.LarkSearch = "lark_search";
  o.ImageCrop = "imageCrop";
  o.ImageReset = "ImageReset";
  o.Caption = "Caption";
  o.Agenda = "Agenda";
  o.Collapse = "collapse";
  o.Expand = "expand";
  o.Meego = "meego";
  let h = o;
  let N = new Set([editorUiComponentConstants.uiComponentTypes.BlockToolbar]);
  (a = {})[a.NotMatchLevel = 0] = "NotMatchLevel";
  a[a.LowGroupLevel = 1] = "LowGroupLevel";
  a[a.LowItemLevel = 2] = "LowItemLevel";
  a[a.HighGroupLevel = 3] = "HighGroupLevel";
  a[a.HighItemLevel = 4] = "HighItemLevel";
  let C = a;
  let D = [docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER];
  let L = [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT];
  let b = 200;
  let g = 900;
  let P = 555;
  let M = 640;
  let v = [equationRenderer.EquationRenderer.KEY];
  let y = docxEditorCore.getProviderName("block-menu");
  let w = docxEditorCore.getProviderName("block-toolbar");
  let U = docxEditorCore.getProviderName("edit-link");
  let k = docxEditorCore.getProviderName("inline-trigger");
  let B = docxEditorCore.getProviderName("okr-search");
  let H = docxEditorCore.getProviderName("okrx-search");
  let F = docxEditorCore.getProviderName("table-cell-toolbar");
  let G = docxEditorCore.getProviderName("table-popover-toolbar");
  let W = docxEditorCore.getProviderName("template-search");
  let $ = docxEditorCore.getProviderName("text-block-toolbar");
  let x = docxEditorCore.getProviderName("text-toolbar");
  let Z = docxEditorCore.getProviderName("new-child-doc");
  (u = {}).TEXT_TOOLBAR = "text-toolbar";
  u.TEXT_BLOCK_TOOLBAR = "text-block-toolbar";
  let X = u;
  let V = "add_panel_icon";
  (c = {}).NO_BLOCK = "no_block";
  c.NO_PARENT = "no_parent";
  let K = c;
  let z = [docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM, docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED, docBlockTypeConstants.blockTypeConstants.CHART_REFER, docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG, docBlockTypeConstants.blockTypeConstants.WIKI_RECENT, docBlockTypeConstants.blockTypeConstants.IFRAME, docBlockTypeConstants.blockTypeConstants.BOOKMARK];
  let j = [docBlockTypeConstants.blockTypeConstants.WHITEBOARD];
  (_ = {})[_.AI = 10] = "AI";
  _[_.BASIC = 20] = "BASIC";
  _[_.COMMON = 30] = "COMMON";
  _[_.AI_TEMPLATE = 40] = "AI_TEMPLATE";
  _[_.BUTTON = 50] = "BUTTON";
  _[_.DATA = 60] = "DATA";
  _[_.BITABLE = 70] = "BITABLE";
  _[_.DRAWING = 80] = "DRAWING";
  _[_.TEAM_COOPERATION = 90] = "TEAM_COOPERATION";
  _[_.WIKI = 100] = "WIKI";
  _[_.PROJECT_MANAGE = 110] = "PROJECT_MANAGE";
  _[_.ADVANCED = 120] = "ADVANCED";
  _[_.DOC_MINI_APP = 130] = "DOC_MINI_APP";
  _[_.EMBED = 140] = "EMBED";
  let Y = _;
  (l = {})[l.AI = 10] = "AI";
  l[l.ALIGN = 20] = "ALIGN";
  l[l.TEXT_TURNINTO = 30] = "TEXT_TURNINTO";
  l[l.TEXT_ALIGN = 40] = "TEXT_ALIGN";
  l[l.TEXT_STYLE = 50] = "TEXT_STYLE";
  l[l.EDIT = 60] = "EDIT";
  l[l.SAVE_BLOCK_TEMPLATE = 70] = "SAVE_BLOCK_TEMPLATE";
  l[l.MORE = 80] = "MORE";
  l[l.SHARE_TEXT_LINK = 90] = "SHARE_TEXT_LINK";
  l[l.FORWARD = 100] = "FORWARD";
  l[l.COPY = 105] = "COPY";
  l[l.COMMENT = 110] = "COMMENT";
  l[l.SelectionComment = 111] = "SelectionComment";
  let J = l;
  (s = {})[s.AI = 10] = "AI";
  s[s.MERGE_CELL = 20] = "MERGE_CELL";
  s[s.CELL_BACKGROUND_COLOR = 30] = "CELL_BACKGROUND_COLOR";
  s[s.TEXT_TURNINTO = 40] = "TEXT_TURNINTO";
  s[s.TEXT_ALIGN = 50] = "TEXT_ALIGN";
  s[s.TEXT_STYLE = 60] = "TEXT_STYLE";
  s[s.EDIT = 70] = "EDIT";
  s[s.SAVE_BLOCK_TEMPLATE = 80] = "SAVE_BLOCK_TEMPLATE";
  s[s.MORE = 90] = "MORE";
  s[s.SHARE_TEXT_LINK = 100] = "SHARE_TEXT_LINK";
  s[s.FORWARD = 110] = "FORWARD";
  s[s.COMMENT = 120] = "COMMENT";
  let Q = s;
  (E = {})[E.AI = 10] = "AI";
  E[E.TABLE_CELL_MODIFY = 20] = "TABLE_CELL_MODIFY";
  E[E.CELL_BACKGROUND_COLOR = 30] = "CELL_BACKGROUND_COLOR";
  E[E.TEXT_ALIGN = 40] = "TEXT_ALIGN";
  E[E.POPOVER_MENU = 50] = "POPOVER_MENU";
  let q = E;
  (d = {})[d.AI = 10] = "AI";
  d[d.BLOCK_TOOLBAR = 20] = "BLOCK_TOOLBAR";
  d[d.MORE = 30] = "MORE";
  d[d.BLOCK_SHARE = 40] = "BLOCK_SHARE";
  d[d.SHARE_TEXT_LINK = 50] = "SHARE_TEXT_LINK";
  d[d.FORWARD = 60] = "FORWARD";
  d[d.COMMENT = 70] = "COMMENT";
  let ee = d;
  (T = {})[T.BASIC = 10] = "BASIC";
  T[T.AI = 20] = "AI";
  T[T.COMMON = 30] = "COMMON";
  T[T.AI_TEMPLATE = 40] = "AI_TEMPLATE";
  T[T.BITABLE = 60] = "BITABLE";
  T[T.DATA = 70] = "DATA";
  T[T.DRAWING = 80] = "DRAWING";
  T[T.TEAM_COOPERATION = 90] = "TEAM_COOPERATION";
  T[T.WIKI = 100] = "WIKI";
  T[T.PROJECT_MANAGE = 110] = "PROJECT_MANAGE";
  T[T.ADVANCED = 120] = "ADVANCED";
  T[T.DOC_MINI_APP = 130] = "DOC_MINI_APP";
  T[T.APPLICATION = 140] = "APPLICATION";
  let et = T;
  (p = {})[p.BLOCK_FOLD = 10] = "BLOCK_FOLD";
  p[p.AGENDA_ITEM_MODIFY = 20] = "AGENDA_ITEM_MODIFY";
  p[p.BASIC = 30] = "BASIC";
  p[p.AI = 40] = "AI";
  p[p.SYNCED = 50] = "SYNCED";
  p[p.STYLE = 60] = "STYLE";
  p[p.BITABLE_OPERATION = 70] = "BITABLE_OPERATION";
  p[p.BLOCK_OPERATION = 80] = "BLOCK_OPERATION";
  p[p.SHARE_TEXT_LINK = 90] = "SHARE_TEXT_LINK";
  p[p.BLOCK_SHARE_OLD = 100] = "BLOCK_SHARE_OLD";
  p[p.ADD_CHILD_DOC = 110] = "ADD_CHILD_DOC";
  p[p.SAVE_BLOCK_TEMPLATE = 120] = "SAVE_BLOCK_TEMPLATE";
  p[p.BLOCK_SHARE = 130] = "BLOCK_SHARE";
  p[p.TABLE = 140] = "TABLE";
  p[p.ISVBLOCK_DEBUG = 150] = "ISVBLOCK_DEBUG";
  p[p.APPEND_BLOCK = 160] = "APPEND_BLOCK";
  let en = p;
  (S = {}).onBlockIconDeltaCalculated = "onBlockIconDeltaCalculated";
  S.useBlockIconVisibleCalculated = "useBlockIconVisibleCalculated";
  S.onOrganizeMenuItems = "onOrganizeMenuItems";
  let er = S;
  (f = {})[f.table = 10] = "table";
  f[f.progress = 20] = "progress";
  f[f.quote = 30] = "quote";
  f[f.agenda = 40] = "agenda";
  f[f.ai = 50] = "ai";
  f[f.synced = 60] = "synced";
  f[f.aiHasContent = 70] = "aiHasContent";
  f[f.inSyncedBlock = 80] = "inSyncedBlock";
  f[f.childOfFirstColumnInQuote = 90] = "childOfFirstColumnInQuote";
  f[f.textual = 100] = "textual";
  f[f.okr = 110] = "okr";
  f[f.jira = 120] = "jira";
  let ei = f;
  require.d(exports, {
    blockToolbarProvider: function () {
      return w;
    },
    blockTypeCategory: function () {
      return Y;
    },
    textToolbarProvider: function () {
      return x;
    },
    inlineTriggerProvider: function () {
      return k;
    },
    whiteboardBlockTypes: function () {
      return j;
    },
    noBlockConstants: function () {
      return K;
    },
    blockToolbarComponentTypes: function () {
      return N;
    },
    pageBlockTypes: function () {
      return L;
    },
    tablePopoverToolbarProvider: function () {
      return G;
    },
    actionTypeConstants: function () {
      return h;
    },
    maxZIndexConstant: function () {
      return g;
    },
    editTextBlockToolbarProvider: function () {
      return P;
    },
    addPanelIconConstant: function () {
      return V;
    },
    blockOperationMenuTypes: function () {
      return en;
    },
    textBlockToolbarMenuTypes: function () {
      return J;
    },
    tableCellToolbarMenuTypes: function () {
      return q;
    },
    okrSearchProvider: function () {
      return B;
    },
    tableCellToolbarProvider: function () {
      return F;
    },
    blockInsertPanelCategories: function () {
      return et;
    },
    blockContextFlags: function () {
      return ei;
    },
    blockMenuEventConstants: function () {
      return er;
    },
    maxWaitConstant: function () {
      return b;
    },
    templateSearchProvider: function () {
      return M;
    },
    textBlockToolbarProvider: function () {
      return y;
    },
    embeddableBlockTypes: function () {
      return z;
    },
    textToolbarConstants: function () {
      return X;
    },
    tablePopoverMenuTypes: function () {
      return Q;
    },
    editLinkProvider: function () {
      return U;
    },
    blockLevelTypes: function () {
      return C;
    },
    gridAndTableBlockTypes: function () {
      return D;
    },
    templateSearchProvider_1: function () {
      return W;
    },
    blockToolbarMenuTypes: function () {
      return ee;
    },
    equationRendererKey: function () {
      return v;
    },
    textBlockToolbarProvider_1: function () {
      return $;
    },
    newChildDocProvider: function () {
      return Z;
    },
    okrxSearchProvider: function () {
      return H;
    },
    toolbarForceUpdate: function () {
      return R;
    }
  });
}