// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'translate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 880733
         */
module.exports = function (module, exports, require) {
  let n;
  let o;
  let a;
  let i;
  let c;
  var u;
  var l;
  var s;
  var f;
  var d;
  var g;
  var b;
  var h;
  var p;
  var w;
  var _;
  var E;
  var m;
  var T;
  var k;
  var x;
  var I;
  var O;
  var A;
  var R;
  var S;
  var N;
  var y;
  var B;
  var D;
  var L;
  var G;
  var C;
  var v;
  var P;
  var F;
  var M;
  var U;
  var H;
  var W;
  var Z;
  var Y;
  var V;
  var z;
  var K;
  var $;
  var j;
  var X;
  var q;
  var J;
  var Q;
  var tt;
  var te;
  var tr;
  var tn;
  var to;
  var ta;
  var mapObjectKeys = require("map-object-keys") /*id: 975446*/;
  let tc = {
    doc: "docs",
    sheet: "sheets",
    bitable: "base",
    mindnote: "mindnotes",
    docx: "docx",
    synced: "sync",
    slides: "slides"
  };
  let tu = mapObjectKeys.mapObjectKeys(tc);
  let tl = {
    FOLDER: 0,
    DOC: 2,
    SHEET: 3,
    BITABLE: 8,
    MINDNOTE: 11,
    FILE: 12,
    DOCX: 22,
    SYNCED: 44,
    SLIDES: 30,
    DASHBOARD: 36,
    BITABLE_TABLE: 83,
    CHART: 110,
    CATALOG: 111
  };
  let ts = mapObjectKeys.mapObjectKeys(tl);
  var globalHelpDocsUrlConfig = require("global-help-docs-url-config") /*id: 322721*/;
  var driveFileTypeConstants = require("drive-file-type-constants") /*id: 216771*/;
  let tg = Object.assign({
    DOCX: "docx",
    SYNCED: "sync",
    FILE: "file",
    WIKI: "wiki",
    FOLDER: "folder",
    TRASH: "trash",
    SHARE_FILES: "share-files",
    SHARE_FOLDERS: "share-folder",
    DRIVE_PREFIX: "drive",
    SPACE_PREFIX: "space"
  }, {
    DOC: "docs",
    SHEET: "sheets",
    MINDNOTE: "mindnotes",
    SLIDES: "slides",
    WHITEBOARD: "whiteboard",
    BASE_ADD: "base/add",
    BITABLE: "base",
    RECORD: "record",
    DOC_OLD: "doc",
    SHEET_OLD: "sheet",
    MINDNOTE_OLD: "mindnote",
    BITABLE_OLD: "bitable"
  });
  let tb = Object.values(tg);
  let th = {
    [driveFileTypeConstants.fileTypeEnum.FILE]: tg.FILE,
    [driveFileTypeConstants.fileTypeEnum.DOC]: tg.DOC,
    [driveFileTypeConstants.fileTypeEnum.DOCX]: tg.DOCX,
    [driveFileTypeConstants.fileTypeEnum.SYNCED]: tg.SYNCED,
    [driveFileTypeConstants.fileTypeEnum.SLIDES]: tg.SLIDES,
    [driveFileTypeConstants.fileTypeEnum.WHITEBOARD]: tg.WHITEBOARD,
    [driveFileTypeConstants.fileTypeEnum.SHEET]: tg.SHEET,
    [driveFileTypeConstants.fileTypeEnum.MINDNOTE]: tg.MINDNOTE,
    [driveFileTypeConstants.fileTypeEnum.BASE_ADD]: tg.BASE_ADD,
    [driveFileTypeConstants.fileTypeEnum.BITABLE]: tg.BITABLE,
    [driveFileTypeConstants.fileTypeEnum.RECORD]: tg.RECORD,
    [driveFileTypeConstants.fileTypeEnum.WIKI]: tg.WIKI,
    [driveFileTypeConstants.fileTypeEnum.FOLDER]: tg.FOLDER
  };
  let tp = {
    [driveFileTypeConstants.fileTypeEnum.DOC]: driveFileTypeConstants.nodeTypeConstants.DOC,
    [driveFileTypeConstants.fileTypeEnum.DOCX]: driveFileTypeConstants.nodeTypeConstants.DOCX,
    [driveFileTypeConstants.fileTypeEnum.SYNCED]: driveFileTypeConstants.nodeTypeConstants.SYNCED,
    [driveFileTypeConstants.fileTypeEnum.SLIDES]: driveFileTypeConstants.nodeTypeConstants.SLIDES,
    [driveFileTypeConstants.fileTypeEnum.WHITEBOARD]: driveFileTypeConstants.nodeTypeConstants.WHITEBOARD,
    [driveFileTypeConstants.fileTypeEnum.SHEET]: driveFileTypeConstants.nodeTypeConstants.SHEET,
    [driveFileTypeConstants.fileTypeEnum.MINDNOTE]: driveFileTypeConstants.nodeTypeConstants.MINDNOTE,
    [driveFileTypeConstants.fileTypeEnum.BITABLE]: driveFileTypeConstants.nodeTypeConstants.BITABLE,
    [driveFileTypeConstants.fileTypeEnum.CATALOG]: driveFileTypeConstants.nodeTypeConstants.CATALOG
  };
  let tw = Object.assign(Object.assign({}, mapObjectKeys.mapObjectKeys(th)), mapObjectKeys.mapObjectKeys(tp));
  (u = G ||= {})[u.FOLDER = 0] = "FOLDER";
  u[u.SHARE_FOLDER = 6] = "SHARE_FOLDER";
  u[u.PERSONAL_FOLDER = 4] = "PERSONAL_FOLDER";
  (l = C ||= {})[l.UNSET = 0] = "UNSET";
  l[l.EMOJI = 1] = "EMOJI";
  l[l.IMAGE = 2] = "IMAGE";
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  (s = v ||= {}).___LOADER___ = "___LOADER___";
  s.___DIVIDER___ = "___DIVIDER___";
  s.EXPAND_TILE_TEMPLATE = "EXPAND_TILE_TEMPLATE";
  s.ISV_LOADER = "ISV_LOADER";
  s.COMPLETE_DELETE = "COMPLETE_DELETE";
  s.TO_TRASH_RESTORE = "TO_TRASH_RESTORE";
  s.FIND_REPLACE = "FIND_REPLACE";
  s.PIN_STICK = "PIN_STICK";
  s.UNPIN_STICK = "UNPIN_STICK";
  s.OPEN_NEW_TAB = "OPEN_NEW_TAB";
  s.COPY_LINK = "COPY_LINK";
  s.COPY = "COPY";
  s.ADD_SHORTCUT = "ADD_SHORTCUT";
  s.SHARE = "SHARE";
  s.MOVE = "MOVE";
  s.TOGGLE_SHARED_FOLDER_VISIBLE = "TOGGLE_SHARED_FOLDER_VISIBLE";
  s.REMOVE_RECENT_RECORD = "REMOVE_RECENT_RECORD";
  s.REMOVE_SHARED_RECORD = "REMOVE_SHARED_RECORD";
  s.RESTORE = "RESTORE";
  s.DELETE = "DELETE";
  s.REMOVE = "REMOVE";
  s.DELETE_TEMPLATE = "DELETE_TEMPLATE";
  s.TEMPLATE_EDIT = "TEMPLATE_EDIT";
  s.TEMPLATE_IMPORT = "TEMPLATE_IMPORT";
  s.CREATE_BLANK_TEMPLATE = "CREATE_BLANK_TEMPLATE";
  s.TOGGLE_TO = "TOGGLE_TO";
  s.TOGGLE_PIN = "TOGGLE_PIN";
  s.TOGGLE_STAR = "TOGGLE_STAR";
  s.WIKI_TOGGLE_SUBSCRIBE = "WIKI_TOGGLE_SUBSCRIBE";
  s.WIKI_ADD_SHORTCUT_TO = "WIKI_ADD_SHORTCUT_TO";
  s.WIKI_TOGGLE_STAR = "WIKI_TOGGLE_STAR";
  s.WIKI_MOVE_NODE_TO = "WIKI_MOVE_NODE_TO";
  s.WIKI_CLONE = "WIKI_CLONE";
  s.WIKI_DELETE = "WIKI_DELETE";
  s.WIKI_SUITE_MOVE_TO_WIKI = "WIKI_SUITE_MOVE_TO_WIKI";
  s.WIKI_DISLIKE_RECOMMEND_FEED_ITEM = "WIKI_DISLIKE_RECOMMEND_FEED_ITEM";
  s.WIKI_COPY_RECOMMEND_FEED_URL = "WIKI_COPY_RECOMMEND_FEED_URL";
  s.CLONE = "CLONE";
  s.PRINT = "PRINT";
  s.FIND = "FIND";
  s.EXPORT = "EXPORT";
  s.EXPORT_CSV = "EXPORT_CSV";
  s.EXPORT_XLSX = "EXPORT_XLSX";
  s.DETAIL = "DETAIL";
  s.DETAILV2 = "DETAILV2";
  s.OPERATION = "OPERATION";
  s.TRANSFER_OWNER = "TRANSFER_OWNER";
  s.HISTORY_VERSION = "HISTORY_VERSION";
  s.HISTORY_VIEW = "HISTORY_VIEW";
  s.HISTORY = "HISTORY";
  s.COMMENT_HISTORY = "COMMENT_HISTORY";
  s.ABOUT_US = "ABOUT_US";
  s.DOWNLOAD = "DOWNLOAD";
  s.RENAME = "RENAME";
  s.UPLOAD = "UPLOAD";
  s.UPLOAD_FILE = "UPLOAD_FILE";
  s.UPLOAD_FOLDER = "UPLOAD_FOLDER";
  s.UPLOAD_NEW_VERSION = "UPLOAD_NEW_VERSION";
  s.ADD_FILE = "ADD_FILE";
  s.CREATE = "CREATE";
  s.CREATE_SUITE = "CREATE_SUITE";
  s.CREATE_DOC = "CREATE_DOC";
  s.CREATE_DOCX = "CREATE_DOCX";
  s.CREATE_SLIDES = "CREATE_SLIDES";
  s.CREATE_SHEET = "CREATE_SHEET";
  s.CREATE_MINDNOTE = "CREATE_MINDNOTE";
  s.CREATE_BITABLE = "CREATE_BITABLE";
  s.CREATE_BITABLE_SUB_MENU = "CREATE_BITABLE_SUB_MENU";
  s.CREATE_BITABLE_TEMPLATE = "CREATE_BITABLE_TEMPLATE";
  s.CREATE_BITABLE_GRID = "CREATE_BITABLE_GRID";
  s.CREATE_BITABLE_KANBAN = "CREATE_BITABLE_KANBAN";
  s.CREATE_BITABLE_GANTT = "CREATE_BITABLE_GANTT";
  s.CREATE_BITABLE_GALLERY = "CREATE_BITABLE_GALLERY";
  s.CREATE_BITABLE_FORM = "CREATE_BITABLE_FORM";
  s.CREATE_BITABLE_SURVEY = "CREATE_BITABLE_SURVEY";
  s.CREATE_FOLDER = "CREATE_FOLDER";
  s.CREATE_SUB_FOLDER = "CREATE_SUB_FOLDER";
  s.CREATE_UNIFIED_FOLDER = "CREATE_UNIFIED_FOLDER";
  s.CREATE_NEW_FOLDER = "CREATE_NEW_FOLDER";
  s.CREATE_BY_TEMPLATE = "CREATE_BY_TEMPLATE";
  s.CREATE_ISV = "CREATE_ISV";
  s.CREATE_TASK_LIST = "CREATE_TASK_LIST";
  s.CREATE_WHITEBOARD = "CREATE_WHITEBOARD";
  s.CREATE_FLOWCHART = "CREATE_FLOWCHART";
  s.CREATE_MINDMAP = "CREATE_MINDMAP";
  s.CREATE_IMPORT_UPLOAD = "CREATE_IMPORT_UPLOAD";
  s.DESCRIPTIONS = "DESCRIPTIONS";
  s.IMPORT = "IMPORT";
  s.IMPORT_DOC = "IMPORT_DOC";
  s.IMPORT_SHEET = "IMPORT_SHEET";
  s.IMPORT_BITABLE = "IMPORT_BITABLE";
  s.IMPORT_SLIDES = "IMPORT_SLIDES";
  s.IMPORT_MINDNOTE = "IMPORT_MINDNOTE";
  s.IMPORT_UPLOAD_LOADER = "IMPORT_UPLOAD_LOADER";
  s.FOLDER_SETTING = "FOLDER_SETTING";
  s.OPEN_IMPORT_CENTER = "OPEN_IMPORT_CENTER";
  s.REPORT_ABUSE = "REPORT_ABUSE";
  s.SAVE_AS_TEMPLATE = "SAVE_AS_TEMPLATE";
  s.SET_SECURE_LABEL = "SET_SECURE_LABEL";
  s.CONVERT_TO_TEMPLATE = "CONVERT_TO_TEMPLATE";
  s.HIDE = "HIDE";
  s.TRANSLATE = "TRANSLATE";
  s.MORE = "MORE";
  s.TRANSLATE_BACK_ORIGIN = "TRANSLATE_BACK_ORIGIN";
  s.TRANSLATE_TO = "TRANSLATE_TO";
  s.TRANSLATE_TO_LANG = "TRANSLATE_TO_LANG";
  s.TRANSLATE_SETTING = "TRANSLATE_SETTING";
  s.TRANSLATE_TO_SAVE = "TRANSLATE_TO_SAVE";
  s.ONLINE_EDIT = "ONLINE_EDIT";
  s.PUBLISH_TO_PANO = "PUBLISH_TO_PANO";
  s.TOGGLE_SUBSCRIBE = "TOGGLE_SUBSCRIBE";
  s.TOGGLE_SUBSCRIBE_COMMENT = "TOGGLE_SUBSCRIBE_COMMENT";
  s.TOGGLE_VIEW_EDITORS = "TOGGLE_VIEW_EDITORS";
  s.APPLY_EDIT_PERMISSION = "APPLY_EDIT_PERMISSION";
  s.TOGGLE_BIDIRECTIONAL_LINK_LIST = "TOGGLE_BIDIRECTIONAL_LINK_LIST";
  s.UPGRADE_BASE = "UPGRADE_BASE";
  s.DOC_PERMISSION = "DOC_PERMISSION";
  s.MANAGE_COLLABORATOR = "MANAGE_COLLABORATOR";
  s.PERMISSION_SETTING = "PERMISSION_SETTING";
  s.PERMISSION_APP_SHARE = "PERMISSION_APP_SHARE";
  s.SWITCH_WIDTH_MODE = "SWITCH_WIDTH_MODE";
  s.DOCX_WIDTH_MODE = "DOCX_WIDTH_MODE";
  s.TOGGLE_PPT_MODE = "TOGGLE_PPT_MODE";
  s.SET_SECURITY = "SET_SECURITY";
  s.SET_RETENTION = "SET_RETENTION";
  s.SET_BITABLE_TIMEZONE = "SET_BITABLE_TIMEZONE";
  s.SAVE_VERSION = "SAVE_VERSION";
  s.VERSION_LIST = "VERSION_LIST";
  s.RENAME_VERSION = "RENAME_VERSION";
  s.DELETE_VERSION = "DELETE_VERSION";
  s.SWITCH_PDF_PREVIEW_TYPE = "SWITCH_PDF_PREVIEW_TYPE";
  s.ORIGIN_DESCRIPTION = "ORIGIN_DESCRIPTION";
  s.SHORTCUT_DESCRIPTION = "SHORTCUT_DESCRIPTION";
  s.ORIGIN_DELETED_DESCRIPTION = "ORIGIN_DELETED_DESCRIPTION";
  s.STORAGE_DELETE = "STORAGE_DELETE";
  s.DOC_MINI_APP = "DOC_MINI_APP";
  s.MENTION_USER = "MENTION_USER";
  s.ADD_TO_WORKBENCH = "ADD_TO_WORKBENCH";
  s.SLIDES_SETTING = "SLIDES_SETTING";
  s.REFRESH = "REFRESH";
  s.OPEN_IN_BROWSER = "OPEN_IN_BROWSER";
  s.DISASSOCIATE_DOC = "DISASSOCIATE_DOC";
  s.DOC_FEEDBACK_EXPIRE = "DOC_FEEDBACK_EXPIRE";
  s.DOC_SET_TIMELINESS = "DOC_SET_TIMELINESS";
  s.BASE_MINI_APPS = "BASE_MINI_APPS";
  s.TOGGLE_OFFLINE_ACTIVE = "TOGGLE_OFFLINE_ACTIVE";
  let tE = {
    ORIGIN_DESCRIPTION: v.ORIGIN_DESCRIPTION,
    SHORTCUT_DESCRIPTION: v.SHORTCUT_DESCRIPTION,
    ORIGIN_DELETED_DESCRIPTION: v.ORIGIN_DELETED_DESCRIPTION
  };
  let tm = {
    [v.TRANSLATE_BACK_ORIGIN]: v.TRANSLATE_BACK_ORIGIN,
    [v.TRANSLATE_TO]: v.TRANSLATE_TO,
    [v.TRANSLATE_SETTING]: v.TRANSLATE_SETTING,
    [v.TRANSLATE_TO_LANG]: v.TRANSLATE_TO_LANG,
    [v.TRANSLATE_TO_SAVE]: v.TRANSLATE_TO_SAVE
  };
  let tT = {
    SAVE_VERSION: v.SAVE_VERSION,
    VERSION_LIST: v.VERSION_LIST,
    RENAME_VERSION: v.RENAME_VERSION,
    DELETE_VERSION: v.DELETE_VERSION
  };
  let tk = {
    TOGGLE_TO: v.TOGGLE_TO,
    TOGGLE_PIN: v.TOGGLE_PIN,
    TOGGLE_STAR: v.TOGGLE_STAR,
    TOGGLE_SUBSCRIBE: v.TOGGLE_SUBSCRIBE,
    TOGGLE_SUBSCRIBE_COMMENT: v.TOGGLE_SUBSCRIBE_COMMENT,
    SWITCH_WIDTH_MODE: v.SWITCH_WIDTH_MODE,
    TOGGLE_PPT_MODE: v.TOGGLE_PPT_MODE
  };
  let tx = Object.values(tk);
  let tI = "TOGGLE_";
  let tO = {
    SLIDES_SETTING: v.SLIDES_SETTING,
    IMPORT_SLIDES: v.IMPORT_SLIDES
  };
  let tA = {
    FIND_REPLACE: v.FIND_REPLACE,
    TRANSLATE: v.TRANSLATE,
    TOGGLE_VIEW_EDITORS: v.TOGGLE_VIEW_EDITORS,
    SWITCH_WIDTH_MODE: v.SWITCH_WIDTH_MODE,
    DOCX_WIDTH_MODE: v.DOCX_WIDTH_MODE,
    TOGGLE_PPT_MODE: v.TOGGLE_PPT_MODE,
    [v.TOGGLE_BIDIRECTIONAL_LINK_LIST]: v.TOGGLE_BIDIRECTIONAL_LINK_LIST,
    DOC_MINI_APP: v.DOC_MINI_APP,
    MENTION_USER: v.MENTION_USER,
    REFRESH: v.REFRESH,
    OPEN_IN_BROWSER: v.OPEN_IN_BROWSER,
    DISASSOCIATE_DOC: v.DISASSOCIATE_DOC
  };
  let tR = {
    WIKI_TOGGLE_SUBSCRIBE: v.WIKI_TOGGLE_SUBSCRIBE,
    WIKI_ADD_SHORTCUT_TO: v.WIKI_ADD_SHORTCUT_TO,
    WIKI_TOGGLE_STAR: v.WIKI_TOGGLE_STAR,
    WIKI_MOVE_NODE_TO: v.WIKI_MOVE_NODE_TO,
    WIKI_CLONE: v.WIKI_CLONE,
    WIKI_DELETE: v.WIKI_DELETE,
    WIKI_SUITE_MOVE_TO_WIKI: v.WIKI_SUITE_MOVE_TO_WIKI,
    WIKI_DISLIKE_RECOMMEND_FEED_ITEM: v.WIKI_DISLIKE_RECOMMEND_FEED_ITEM,
    WIKI_COPY_RECOMMEND_FEED_URL: v.WIKI_COPY_RECOMMEND_FEED_URL
  };
  let tS = {
    PIN_STICK: v.PIN_STICK,
    UNPIN_STICK: v.UNPIN_STICK
  };
  let tN = Object.assign({
    OPEN_NEW_TAB: v.OPEN_NEW_TAB,
    COPY_LINK: v.COPY_LINK,
    COPY: v.COPY,
    ADD_SHORTCUT: v.ADD_SHORTCUT,
    SHARE: v.SHARE,
    FOLDER_SETTING: v.FOLDER_SETTING,
    MOVE: v.MOVE,
    TOGGLE_SHARED_FOLDER_VISIBLE: v.TOGGLE_SHARED_FOLDER_VISIBLE,
    RESTORE: v.RESTORE,
    DELETE: v.DELETE,
    REMOVE: v.REMOVE,
    REMOVE_RECENT_RECORD: v.REMOVE_RECENT_RECORD,
    REMOVE_SHARED_RECORD: v.REMOVE_SHARED_RECORD,
    COMPLETE_DELETE: v.COMPLETE_DELETE,
    TO_TRASH_RESTORE: v.TO_TRASH_RESTORE
  }, tk);
  let ty = {
    CLONE: v.CLONE,
    PRINT: v.PRINT,
    EXPORT: v.EXPORT,
    EXPORT_CSV: v.EXPORT_CSV,
    EXPORT_XLSX: v.EXPORT_XLSX,
    DETAIL: v.DETAIL,
    DETAILV2: v.DETAILV2,
    OPERATION: v.OPERATION,
    TRANSFER_OWNER: v.TRANSFER_OWNER,
    HISTORY_VIEW: v.HISTORY_VIEW,
    HISTORY: v.HISTORY,
    COMMENT_HISTORY: v.COMMENT_HISTORY,
    ABOUT_US: v.ABOUT_US,
    MORE: v.MORE,
    PUBLISH_TO_PANO: v.PUBLISH_TO_PANO,
    APPLY_EDIT_PERMISSION: v.APPLY_EDIT_PERMISSION,
    DOC_PERMISSION: v.DOC_PERMISSION,
    MANAGE_COLLABORATOR: v.MANAGE_COLLABORATOR,
    PERMISSION_SETTING: v.PERMISSION_SETTING,
    PERMISSION_APP_SHARE: v.PERMISSION_APP_SHARE,
    SET_SECURITY: v.SET_SECURITY,
    SET_RETENTION: v.SET_RETENTION,
    DOC_FEEDBACK_EXPIRE: v.DOC_FEEDBACK_EXPIRE,
    DOC_SET_TIMELINESS: v.DOC_SET_TIMELINESS,
    TOGGLE_OFFLINE_ACTIVE: v.TOGGLE_OFFLINE_ACTIVE
  };
  let tB = {
    DOWNLOAD: v.DOWNLOAD,
    RENAME: v.RENAME,
    UPLOAD: v.UPLOAD,
    UPLOAD_FILE: v.UPLOAD_FILE,
    UPLOAD_FOLDER: v.UPLOAD_FOLDER,
    FIND: v.FIND,
    ONLINE_EDIT: v.ONLINE_EDIT,
    HISTORY_VERSION: v.HISTORY_VERSION,
    UPLOAD_NEW_VERSION: v.UPLOAD_NEW_VERSION,
    SWITCH_PDF_PREVIEW_TYPE: v.SWITCH_PDF_PREVIEW_TYPE
  };
  let tD = {
    ISV_LOADER: v.ISV_LOADER
  };
  let tL = {
    ADD_FILE: v.ADD_FILE,
    CREATE: v.CREATE,
    CREATE_SUITE: v.CREATE_SUITE,
    CREATE_DOC: v.CREATE_DOC,
    CREATE_DOCX: v.CREATE_DOCX,
    CREATE_SHEET: v.CREATE_SHEET,
    CREATE_MINDNOTE: v.CREATE_MINDNOTE,
    CREATE_BITABLE: v.CREATE_BITABLE,
    CREATE_BITABLE_SURVEY: v.CREATE_BITABLE_SURVEY,
    CREATE_SLIDES: v.CREATE_SLIDES,
    CREATE_FOLDER: v.CREATE_FOLDER,
    CREATE_SUB_FOLDER: v.CREATE_SUB_FOLDER,
    CREATE_NEW_FOLDER: v.CREATE_NEW_FOLDER,
    CREATE_UNIFIED_FOLDER: v.CREATE_UNIFIED_FOLDER,
    CREATE_BY_TEMPLATE: v.CREATE_BY_TEMPLATE,
    CREATE_ISV: v.CREATE_ISV,
    CREATE_TASK_LIST: v.CREATE_TASK_LIST,
    CREATE_WHITEBOARD: v.CREATE_WHITEBOARD,
    CREATE_FLOWCHART: v.CREATE_FLOWCHART,
    CREATE_MINDMAP: v.CREATE_MINDMAP,
    CREATE_IMPORT_UPLOAD: v.CREATE_IMPORT_UPLOAD,
    DESCRIPTIONS: v.DESCRIPTIONS,
    IMPORT: v.IMPORT,
    IMPORT_DOC: v.IMPORT_DOC,
    IMPORT_SHEET: v.IMPORT_SHEET,
    IMPORT_BITABLE: v.IMPORT_BITABLE,
    IMPORT_MINDNOTE: v.IMPORT_MINDNOTE,
    IMPORT_UPLOAD_LOADER: v.IMPORT_UPLOAD_LOADER,
    OPEN_IMPORT_CENTER: v.OPEN_IMPORT_CENTER,
    SAVE_AS_TEMPLATE: v.SAVE_AS_TEMPLATE,
    CONVERT_TO_TEMPLATE: v.CONVERT_TO_TEMPLATE,
    STORAGE_DELETE: v.STORAGE_DELETE,
    SET_SECURE_LABEL: v.SET_SECURE_LABEL
  };
  let tG = {
    REPORT_ABUSE: v.REPORT_ABUSE
  };
  let tC = {
    COPY: v.COPY,
    SHARE: v.SHARE,
    DELETE_TEMPLATE: v.DELETE_TEMPLATE,
    HIDE: v.HIDE,
    TEMPLATE_EDIT: v.TEMPLATE_EDIT,
    TEMPLATE_IMPORT: v.TEMPLATE_IMPORT,
    CREATE_BLANK_TEMPLATE: v.CREATE_BLANK_TEMPLATE
  };
  let tv = {
    UPGRADE_BASE: v.UPGRADE_BASE,
    CREATE_BITABLE_SUB_MENU: v.CREATE_BITABLE_SUB_MENU,
    CREATE_BITABLE_TEMPLATE: v.CREATE_BITABLE_TEMPLATE,
    CREATE_BITABLE_GRID: v.CREATE_BITABLE_GRID,
    CREATE_BITABLE_KANBAN: v.CREATE_BITABLE_KANBAN,
    CREATE_BITABLE_GANTT: v.CREATE_BITABLE_GANTT,
    CREATE_BITABLE_GALLERY: v.CREATE_BITABLE_GALLERY,
    CREATE_BITABLE_FORM: v.CREATE_BITABLE_FORM,
    SET_BITABLE_TIMEZONE: v.SET_BITABLE_TIMEZONE,
    ADD_TO_WORKBENCH: v.ADD_TO_WORKBENCH,
    BASE_MINI_APPS: v.BASE_MINI_APPS
  };
  let tP = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    ___LOADER___: v.___LOADER___,
    ___DIVIDER___: v.___DIVIDER___,
    EXPAND_TILE_TEMPLATE: v.EXPAND_TILE_TEMPLATE
  }, tA), tO), tR), tS), tN), ty), tB), tL), tG), tC), tm), tD), tv), tT), tE);
  (f = P ||= {}).EXPLORER_GLOBAL_CONTEXT = "EXPLORER_GLOBAL_CONTEXT";
  f.EXPLORER_FILE_DROPDOWN = "EXPLORER_FILE_DROPDOWN";
  f.EXPLORER_FILE_CONTEXT = "EXPLORER_FILE_CONTEXT";
  f.EXPLORER_CREATE_DROPDOWN = "EXPLORER_CREATE_DROPDOWN";
  f.NAVIGATION_BAR_DROPDOWN = "NAVIGATION_BAR_DROPDOWN";
  f.MULTI_SELECT_OPERATION_PANEL = "MULTI_SELECT_OPERATION_PANEL";
  f.EXPLORER_TEMPLATE_CONTEXT = "EXPLORER_TEMPLATE_CONTEXT";
  f.WIKI_NODE_MENU = "WIKI_NODE_MENU";
  let tF = "item";
  let tM = "divider";
  (d = F ||= {}).FILELIST_ITEM_STAR = "FILELIST_ITEM_STAR";
  d.SUITE_HEADER_TITLE_STAR = "SUITE_HEADER_TITLE_STAR";
  d.SUITE_HEADER_MENU = "SUITE_HEADER_MENU";
  d.WIKI_NODE_STAR = "WIKI_NODE_STAR";
  (g = M ||= {}).Common = "Common";
  g.MyObjectList = "MyObjectList";
  g.RecentList = "RecentList";
  g.Trash = "Trash";
  g.StarList = "StarList";
  g.SharedFolders = "SharedFolders";
  g.SharedWithMe = "SharedWithMe";
  g.StorageCenter = "StorageCenter";
  let tU = [v.CREATE_DOC, v.CREATE_DOCX, v.CREATE_SHEET, v.CREATE_SLIDES, v.CREATE_MINDNOTE, v.CREATE_BITABLE, v.CREATE_SUB_FOLDER, v.CREATE_BY_TEMPLATE, v.OPEN_IMPORT_CENTER, v.CREATE_ISV, v.CREATE_WHITEBOARD, v.CREATE_FLOWCHART, v.CREATE_MINDMAP, v.CREATE_TASK_LIST];
  let tH = [v.CREATE_DOC, v.CREATE_DOCX, v.CREATE_SHEET, v.CREATE_SLIDES, v.CREATE_MINDNOTE, v.CREATE_BITABLE, v.CREATE_BY_TEMPLATE, v.OPEN_IMPORT_CENTER, v.CREATE_ISV, v.ISV_LOADER, v.CREATE_WHITEBOARD, v.CREATE_FLOWCHART, v.CREATE_MINDMAP, v.CREATE_TASK_LIST];
  let tW = [v.CREATE_SUB_FOLDER, v.CREATE_FOLDER, v.CREATE_UNIFIED_FOLDER, v.CREATE_NEW_FOLDER];
  let tZ = [v.UPLOAD_FILE, v.UPLOAD_FOLDER, v.ADD_FILE];
  let tY = [v.ISV_LOADER];
  let tV = [v.CREATE_MINDNOTE, v.CREATE_BITABLE];
  let tz = [tP.TOGGLE_SUBSCRIBE, tP.TOGGLE_SUBSCRIBE_COMMENT, tP.TOGGLE_BIDIRECTIONAL_LINK_LIST, tP.TOGGLE_VIEW_EDITORS, tP.TOGGLE_OFFLINE_ACTIVE, tP.SWITCH_WIDTH_MODE, tP.CONVERT_TO_TEMPLATE];
  (b = U ||= {})[b.FolderTree = 0] = "FolderTree";
  b[b.List = 1] = "List";
  b[b.Grid = 2] = "Grid";
  b[b.Pin = 3] = "Pin";
  b[b.FolderList = 4] = "FolderList";
  (h = H ||= {})[h.List = 0] = "List";
  (p = W ||= {}).first = "first";
  p.second = "second";
  let tK = "application/msword";
  let t$ = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  let tj = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  let tX = "application/vnd.xmind.workbook";
  let tq = "text/x-opml";
  let tJ = "application/x-freemind";
  let tQ = "text/csv";
  let t0 = "text/markdown";
  (w = Z ||= {}).DOC = "doc";
  w.BITABLE = "bitable";
  w.BITABLE_IMAGE = "bitable_image";
  w.BITABLE_FILE = "bitable_file";
  w.EXPLORER = "explorer";
  w.SHEET_IMAGE = "sheet_image";
  w.DOC_IMAGE = "doc_image";
  w.COMMENT_IMAGE = "comment_image";
  w.DOCX = "docx_image";
  (_ = Y ||= {})[_.NORMAL = 0] = "NORMAL";
  _[_.SINGLE_CONTAINER = 1] = "SINGLE_CONTAINER";
  let t1 = ["ccm.space.api_v2", "ccm.space.error_code_enable", "ccm.space.show_single_container_tag", "ccm.space.single_container_not_compatible", "ccm.space.single_container", "ccm.space.task_manager_enabled", "ccm.sync_disk_dll.lite_cloud_settings_whitelist_enable", "ccm.sync_disk_dll.lite_preview_enable", "drive.syncdisk.close_nakamoto", "drive.syncdisk.enable_debug_log", "drive.syncdisk.lite", "drive.syncdisk.new_feature", "lark.pc.new_ux_structure", "syncdisk_enabled"];
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var i18nTranslateUtil = require("i18n-translate-util") /*id: 38843*/;
  let t3 = {
    FULL_ACCESS: 1024,
    SHAREABLE: 8,
    EDITABLE: 4,
    COMMENTABLE: 2,
    READABLE: 1,
    PRIVATE: 0,
    ANYONE_READABLE: 16,
    ANYONE_EDITABLE: 32
  };
  let t4 = {
    TENANT_PERMISSION: [t3.FULL_ACCESS, t3.EDITABLE, t3.READABLE],
    ANYONE_PERMISSION: [t3.ANYONE_READABLE, t3.ANYONE_EDITABLE]
  };
  let t6 = [t3.FULL_ACCESS, t3.READABLE, t3.EDITABLE];
  let t8 = {
    [t3.READABLE]: i18nTranslateUtil.t("common.readable"),
    [t3.EDITABLE]: i18nTranslateUtil.t("common.editable"),
    [t3.ANYONE_READABLE]: i18nTranslateUtil.t("common.readable"),
    [t3.ANYONE_EDITABLE]: i18nTranslateUtil.t("common.editable"),
    [t3.FULL_ACCESS]: i18nTranslateUtil.t("CreationDoc_Wiki_Permission_FullAccess_Options"),
    [t3.PRIVATE]: i18nTranslateUtil.t("CreationDoc_Wiki_Permission_NoAccess_Options")
  };
  (E = V ||= {}).SECURITY_ENTITY = "securityEntity";
  E.SHARE_ENTITY = "shareEntity";
  E.COMMENT_ENTITY = "commentEntity";
  E.LINK_SHARE_ENTITY = "linkShareEntity";
  let t9 = {
    PRIVATE: 0,
    TANENT_SHAREABLE: 1,
    ANYONE_SHAREABLE: 2,
    INTERNET_SHAREBLE: 3
  };
  let t7 = [t9.ANYONE_SHAREABLE, t9.TANENT_SHAREABLE];
  let et = {
    READABLE: 0,
    EDITABLE: 1
  };
  let ee = {
    READABLE: 0,
    EDITABLE: 1
  };
  (m = z ||= {})[m.PRIVATE = 0] = "PRIVATE";
  m[m.READABLE = 1] = "READABLE";
  m[m.EDITABLE = 2] = "EDITABLE";
  m[m.ANYONE_READABLE = 3] = "ANYONE_READABLE";
  m[m.ANYONE_EDITABLE = 4] = "ANYONE_EDITABLE";
  let er = {
    TENANT_PERMISSION: [z.READABLE, z.EDITABLE],
    ANYONE_PERMISSION: [z.ANYONE_READABLE, z.ANYONE_EDITABLE]
  };
  let en = {
    1: i18nTranslateUtil.t("common.readable"),
    2: i18nTranslateUtil.t("permission.commentable"),
    4: i18nTranslateUtil.t("common.editable"),
    8: i18nTranslateUtil.t("common.shareable")
  };
  let eo = {
    1: i18nTranslateUtil.t("permission.read"),
    4: i18nTranslateUtil.t("permission.edit"),
    8: i18nTranslateUtil.t("permission.share")
  };
  let ea = {
    1: i18nTranslateUtil.t("permission.read_mobile"),
    4: i18nTranslateUtil.t("permission.edit_mobile"),
    8: i18nTranslateUtil.t("permission.share_mobile")
  };
  let ei = collectionMapMatcher.mapWithMatcher(t3);
  let ec = [4, 1];
  let eu = [32, 16, 4, 1, 0];
  let el = t3.EDITABLE;
  let es = ei.reduce((t, e) => t + e, 0);
  let ef = {
    [z.READABLE]: i18nTranslateUtil.t("common.readable"),
    [z.EDITABLE]: i18nTranslateUtil.t("common.editable"),
    [z.ANYONE_READABLE]: i18nTranslateUtil.t("common.readable"),
    [z.ANYONE_EDITABLE]: i18nTranslateUtil.t("common.editable")
  };
  let ed = Object.assign(t8, {
    [t3.READABLE]: i18nTranslateUtil.t("explorer.v3.template_canuse")
  });
  let {
    SHAREABLE: eg,
    EDITABLE: eb,
    COMMENTABLE: eh,
    READABLE: ep,
    FULL_ACCESS: ew
  } = t3;
  let e_ = {
    [eg]: i18nTranslateUtil.t("permission.share"),
    [eb]: i18nTranslateUtil.t("permission.edit"),
    [eh]: i18nTranslateUtil.t("permission.comment"),
    [ep]: i18nTranslateUtil.t("permission.read"),
    [ew]: i18nTranslateUtil.t("permission.FullAccess")
  };
  let eE = {
    [t3.SHAREABLE]: "share",
    [t3.EDITABLE]: "edit",
    [t3.COMMENTABLE]: "comment",
    [t3.READABLE]: "read"
  };
  let em = [8, 4, 2, 1];
  (T = K ||= {})[T.READABLE = 1] = "READABLE";
  T[T.EDITABLE = 2] = "EDITABLE";
  T[T.FULL_ACCESS = 3] = "FULL_ACCESS";
  (k = $ ||= {})[k.UNKNOWN = 0] = "UNKNOWN";
  k[k.ALLOW = 1] = "ALLOW";
  k[k.FORBIDDEN = 2] = "FORBIDDEN";
  let eT = {
    [K.FULL_ACCESS]: i18nTranslateUtil.t("CreationDoc_Wiki_Permission_FullAccess_Options"),
    [K.READABLE]: i18nTranslateUtil.t("common.readable"),
    [K.EDITABLE]: i18nTranslateUtil.t("common.editable")
  };
  (x = j ||= {})[x.PRIVATE = 0] = "PRIVATE";
  x[x.READABLE = 1] = "READABLE";
  x[x.EDITABLE = 2] = "EDITABLE";
  x[x.SINGLE_CONTAINER_FOLDER_ANYONE_READABLE = 3] = "SINGLE_CONTAINER_FOLDER_ANYONE_READABLE";
  x[x.ANYONE_READABLE = 4] = "ANYONE_READABLE";
  let ek = {
    [t3.READABLE]: i18nTranslateUtil.t("permission.read"),
    [t3.EDITABLE]: i18nTranslateUtil.t("permission.edit"),
    [t3.ANYONE_READABLE]: i18nTranslateUtil.t("permission.read"),
    [t3.ANYONE_EDITABLE]: i18nTranslateUtil.t("permission.edit")
  };
  let ex = {
    [K.READABLE]: i18nTranslateUtil.t("permission.read"),
    [K.EDITABLE]: i18nTranslateUtil.t("permission.edit")
  };
  let eI = {
    [K.EDITABLE]: i18nTranslateUtil.t("permission.edit"),
    [K.READABLE]: i18nTranslateUtil.t("permission.read"),
    [K.FULL_ACCESS]: i18nTranslateUtil.t("permission.FullAccess")
  };
  (I = X ||= {}).FROM_IMPORT = "fromImport";
  I.SHARE_OPEN = "shareOpen";
  I.FROM_FOLDER_URL = "fromFolderUrl";
  I.SUITE_SETTING_OPEN = "suiteSettingOpen";
  I.PERMISSION = "permission";
  I.MEMBER_NAME = "memberName";
  I.MEMBER_ID = "memberId";
  I.MEMBER_TYPE = "memberType";
  I.SUITE_SIDEBAR_OPEN = "sidebarOpen";
  I.OPEN_TEMPLATE_CENTER = "openTemplateCenter";
  I.TEMPLATE_CATEGORY = "categoryId";
  I.TEMPLATE_OBJ_TYPE = "objType";
  I.TEMPLATE_TOPIC_ID = "topicId";
  I.TEMPLATE_FROM_SOURCE = "from";
  I.TEMPLATE_TARGET_TOKEN = "targetToken";
  I.TEMPLATE_EDIT = "tmpeid";
  I.TEMPLATE_EDIT_SOURCE = "tmpesource";
  let eO = "https?|s?ftp|ftps|nfs|ssh";
  let eA = "\\b([/#?][\\-A-Z0-9@:%_+.~#?&'/=;$,!\\*\\[\\]\\(\\){}^|<>]*[-A-Z0-9&@#/%=~\\(\\)_|]?)?";
  let eR = RegExp(`((((${eO})://)?(${/localhost(:[0-9]{2,5})?/.source}))|(((${eO})://)(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source})))${eA}`, "gi");
  let eS = "([-A-Z0-9%_+~#@][\\-A-Z:0-9%_+~#@]{0,256}\\.){1,50}";
  let eN = "[a-z\\-]{2,15}";
  let ey = "com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one";
  let eB = "com|cn|tk|de|net|org|uk|info|nl|ru|hk";
  let eD = RegExp(`(((${eO}):\\/\\/${eS}${eN})|(${eS}(${eB})))(:[0-9]{2,5})?${eA}`, "gi");
  let eL = RegExp(`^s*((https?):\\/\\/${eS}${eN})(:[0-9]{2,5})?${eA}s*$`, "i");
  let eG = "[\\w.!#$%&'*+-/=?^_\\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\\.";
  let eC = RegExp(`^(?!data:)((mailto:${eG}${eN})|(${eG}(${ey})))\\b`, "gi");
  let ev = RegExp(`(${eR.source})|(${eD.source})|(${eC.source})`, "gi");
  let eP = /<at type="([\s\S]*?)" href="([\x00-\xFF]*?)" token="([A-Za-z0-9]+?)"(?: icon='([\s\S]*?)')*>([\s\S]*?)<\/at>/gi;
  let eF = /(<at type="[\s\S]*?" href="[\x00-\xFF]*?" token="[A-Za-z0-9]+?"(?: icon='(?:[\s\S]*?)')*>)([\s\S]*?)(<\/at>)/gi;
  let eM = /<highlight isOn="([\s\S]*?)">([\s\S]*?)<\/highlight>/gi;
  let eU = "ON_SECTION_NAV_READY";
  let eH = "ON_NEW_ENTRIES";
  let eW = "ON_NEW_ACTIVE_GUID";
  let eZ = "ON_SCROLL_TO_ACTIVE_LINE";
  let eY = "ON_RESIZE";
  let eV = "ON_SHOWING_STATE_CHANGE";
  let ez = "ON_SIDEBAR_STATE_CHANGE";
  let eK = "ON_SIZE_CHANGE";
  let e$ = "ON_SHOWING_FULL_CHANGE";
  let ej = "ON_LINE_ENTRY_CHANGE";
  let eX = {
    SHEET_JS_LOADED: 1,
    FETCH_SHEET_CLIENTVARS_START: 2,
    FETCH_SHEET_CLIENTVARS_SUCCESS: 3,
    SHEET_APPLY_SNAPSHOT_SUCCESS: 4,
    SHEET_FASTER_RENDER_SUCCESS: 5,
    FETCH_SHEET_SUB_BLOCK_START: 6,
    FETCH_SHEET_SUB_BLOCK_COMPLETE: 7,
    SHEET_PLUGIN_LOAD_SUCCESS: 8,
    SHEET_COMMENT_LOAD_SUCCESS: 9,
    FIRST_SHEET_LOADED: 10
  };
  let eq = {
    TIMEOUT: "ECONNABORTED",
    SUCCESS: 0,
    FAILED: 1,
    INVALID_PARAMETERS: 2,
    NOT_FOUND: 3,
    FORBIDDEN: 4,
    LOGIN_REQUIRED: 5,
    DATA_EXCEED_LIMIT: 6,
    OBJCT_DELETED: 7,
    NO_PERMISSION: 9,
    CONNECT_ERROR: "-8",
    JS_INTERNAL_ERROR: "-9",
    REQUEST_BIZ_ERROR: "-10",
    NOTE_DELETED: 1002,
    CONNECT_ABORT: "CONNECT_ABORT",
    PROMPT_MODIFY_WHEN_VIOLATE_POLICIES: 10009,
    PROMPT_CONTACT_WHEN_VIOLATE_POLICIES: 10013,
    PASSWORD_REQUIRED: 10016,
    KEY_INVALID: 900021001,
    JSSDK_SESSION_SERVICE_TIMEOUT: 254126802
  };
  (O = q ||= {}).uninitialized = "uninitialized";
  O.loading = "loading";
  O.loaded = "loaded";
  O.failed = "failed";
  (A = J ||= {})[A.DOC = 2] = "DOC";
  A[A.SHEET = 3] = "SHEET";
  A[A.BITABLE = 8] = "BITABLE";
  A[A.RECORD = 81] = "RECORD";
  A[A.BASE_ADD = 84] = "BASE_ADD";
  A[A.MINDNOTE = 11] = "MINDNOTE";
  A[A.FILE = 12] = "FILE";
  A[A.WIKI = 16] = "WIKI";
  A[A.ISV = 20] = "ISV";
  A[A.DOCX = 22] = "DOCX";
  A[A.SLIDES = 30] = "SLIDES";
  A[A.DASHBOARD = 36] = "DASHBOARD";
  A[A.WHITEBOARD = 38] = "WHITEBOARD";
  A[A.SYNCED = 44] = "SYNCED";
  A[A.BITABLE_TABLE = 83] = "BITABLE_TABLE";
  A[A.CHART = 110] = "CHART";
  A[A.CATALOG = 111] = "CATALOG";
  (R = Q ||= {}).DOC = "DOC";
  R.DOCX = "DOCX";
  R.SHEET = "SPREADSHEET";
  R.SLIDES = "SLIDES";
  R.BITABLE = "BITABLE_TABLE";
  R.MINDNOTE = "MINDNOTE";
  R.FILE = "BOX";
  R.WIKI = "wiki";
  R.WHITEBOARD = "whiteboard";
  let eJ = {
    [J.DOC]: Q.DOC,
    [J.DOCX]: Q.DOCX,
    [J.SLIDES]: Q.SLIDES,
    [J.SHEET]: Q.SHEET,
    [J.BITABLE]: Q.BITABLE,
    [J.MINDNOTE]: Q.MINDNOTE,
    [J.FILE]: Q.FILE,
    [J.WIKI]: Q.WIKI,
    [J.WHITEBOARD]: Q.WHITEBOARD
  };
  var documentTypeNameLabels = require("document-type-name-labels") /*id: 564045*/;
  let e0 = [9009, 9010];
  var globalConfigHelper = require("global-config-helper") /*id: 96848*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var localeManagementUtils = require("locale-management-utils") /*id: 3969*/;
  let e3 = () => objectPathGetDefault.getObjectPathDefault(globalConfigHelper.getCommonConfig(), `brand.name_${localeManagementUtils.getShortLocale()}`, "");
  function e4() {
    return objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_tea_config.user_brand", "") !== objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_tea_config.domain_brand", "");
  }
  var domainConfigUtils = require("domain-config-utils") /*id: 460454*/;
  function e8({
    key: t,
    direct_link: e
  }) {
    if (e) {
      return e;
    }
    if (!t) {
      return "";
    }
    let r = domainConfigUtils.getDomainConfig("domain").lark_file;
    return `https://${r}/api/avatar/v1/${t}/noop.image`;
  }
  var momentJsCoreLib = require("moment-js-core-lib") /*id: 132840*/;
  var e7 = momentJsCoreLib;
  require("moment-locale-zh-cn") /*id: 843762*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  function re(t) {
    return rr(t * 1000);
  }
  function rr(t) {
    if (t) {
      return new Date(t).toJSON().split("T")[0].split("-").join("");
    } else {
      return "";
    }
  }
  function rn(t, e) {
    let r = new Date(new Date(t).setHours(0, 0, 0, 0)).getTime();
    return parseInt(`${(e - r) / 86400000}`, 10);
  }
  function ro(t) {
    if (Number.isNaN(t = parseInt(t, 10))) {
      return 0;
    } else {
      return t * Math.pow(10, Math.abs(`${t}`.length - 13));
    }
  }
  function ra(t, e = Date.now()) {
    let r = ro(t);
    if (e < r) {
      return e + 1;
    } else {
      return r;
    }
  }
  function ri(t, e = Date.now()) {
    if ((t = ro(t)) > e) {
      return e - 1000;
    } else {
      return t;
    }
  }
  function rc(t) {
    let e = new Date(t).getDay() - 1;
    if (e === -1) {
      return 6;
    } else {
      return e;
    }
  }
  require("moment-locale-ja-config") /*id: 187781*/;
  require("moment-locale-zh-tw") /*id: 6322*/;
  require("moment-locale-zh-hk") /*id: 964762*/;
  e7.locale("en");
  e7.locale(localeManagementUtils.getCurrentLocale().toLowerCase());
  e7.relativeTimeThreshold("ss", 0);
  e7.relativeTimeThreshold("s", 60);
  e7.relativeTimeThreshold("m", 60);
  e7.relativeTimeThreshold("h", 24);
  e7.relativeTimeThreshold("d", 31);
  e7.relativeTimeThreshold("M", 12);
  let ru = {
    TODAY: "h:mm A [Today]",
    YESTERDAY: "h:mm A [Yesterday]",
    BEFORE_YESTERDAY: "h:mm A [The day before yesterday]",
    SAME_YEAR: "h:mm A MMM D",
    BEFORE_YEAR: "MMM D, YYYY"
  };
  let rl = () => {
    ru.TODAY = i18nTranslateUtil.t("space.date_format.today");
    ru.YESTERDAY = i18nTranslateUtil.t("space.date_format.yesterday");
    ru.BEFORE_YESTERDAY = i18nTranslateUtil.t("space.date_format.before_yesterday");
    ru.SAME_YEAR = i18nTranslateUtil.t("space.date_format.same_year");
    ru.BEFORE_YEAR = i18nTranslateUtil.t("space.date_format.before_year");
    let t = e7.locale();
    e7.updateLocale(t, {
      relativeTime: {
        future: i18nTranslateUtil.t("space.in_future"),
        past: t => [i18nTranslateUtil.t("date.just")].indexOf(t) !== -1 ? t : localeManagementUtils.getCurrentLocale() === "es-ES" ? `${i18nTranslateUtil.t("space.time_before")} ${t}` : `${t}${i18nTranslateUtil.t("space.time_before")}`,
        s: (t, e, r, n) => n ? i18nTranslateUtil.t("space.a_moment") : i18nTranslateUtil.t("date.just"),
        ss: i18nTranslateUtil.t("space.ss_seconds"),
        m: i18nTranslateUtil.t("space.a_minute"),
        mm: i18nTranslateUtil.t("space.mm_minutes"),
        h: i18nTranslateUtil.t("space.a_hour"),
        hh: i18nTranslateUtil.t("space.hh_hours")
      }
    });
  };
  function rs(t, e = new Date().getTime(), r, n = false) {
    if (!isNumberUtil.isNumber(t) || !t) {
      return "";
    }
    t = t < 1000000000000 ? t * 1000 : t;
    if (n && t > e) {
      e = t;
    }
    let o = e7(t);
    let a = e7(e);
    if (!t || o.isSame(a, "day")) {
      if (r) {
        return o.format(ru.TODAY);
      } else {
        return o.from(a);
      }
    }
    let i = a.clone().subtract(1, "day");
    if (o.isSame(i, "day")) {
      return o.format(ru.YESTERDAY);
    } else if (o.isSame(a, "year")) {
      return o.format(ru.SAME_YEAR);
    } else {
      return o.format(ru.BEFORE_YEAR);
    }
  }
  function rf(t) {
    return e7.duration(t * 1000).humanize();
  }
  function rd(t, e) {
    if (t && typeof t == "number") {
      return rs(ri(t), new Date().getTime(), !!e);
    } else {
      return "";
    }
  }
  function rg(t) {
    t = t < 1000000000000 ? t * 1000 : t;
    let e = e7(t);
    let r = e7(new Date().getTime());
    if (e.isSame(r, "day")) {
      return "today";
    }
    let n = r.clone().subtract(1, "day");
    if (e.isSame(n, "day")) {
      return "yesterday";
    } else {
      return "earlier";
    }
  }
  function rb(t) {
    let e = new Date().getTime() / 1000 - t;
    return Math.ceil(e7.duration(e, "s").asDays());
  }
  rl();
  var urlQueryParserUtils = require("url-query-parser-utils") /*id: 329833*/;
  var urlParseUtils = require("url-parse-utils") /*id: 365040*/;
  function rw(t, e = true) {
    let r = urlQueryParserUtils.decodeUriComponent(t);
    if (!e) {
      r = r.split(/https?:\/\//).pop() || "";
    }
    if (!domainConfigUtils.isDomainValid(r)) {
      return null;
    }
    let {
      token: n,
      type: o,
      protocol: a,
      preText: i = "",
      restText: c = ""
    } = urlParseUtils.parseUrl(t, true, e);
    if (n && o) {
      return {
        preText: i,
        token: n,
        type: o,
        protocol: a,
        restText: c
      };
    } else {
      return null;
    }
  }
  function r_(t, e, r) {
    if (!t || !e) {
      return false;
    }
    let {
      token: n,
      type: o
    } = rw(t) || {};
    let {
      token: a,
      type: i
    } = rw(e) || {};
    let c = !!n && !!a && n === a;
    if (c && r) {
      return r === o && r === i;
    } else {
      return c;
    }
  }
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  let rm = (browserEnvDetectionUtil.browserDetector.isInVC || !browserEnvDetectionUtil.browserDetector.isLark) && !!globalConfigHelper.getParamsConfig().fileSecureMode;
  function rT() {
    return rm;
  }
  function rk(t) {
    return t === J.FILE && rm;
  }
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  function rI(t = "", e = "") {
    let r = t.split(".");
    let n = e.split(".");
    let o = Math.max(r.length, n.length);
    for (let t = 0; t < o; t++) {
      let e = r[t];
      let o = n[t];
      if (!o) {
        break;
      }
      if (!e) {
        return false;
      }
      let a = Number(e);
      let i = Number(o);
      if (a < i) {
        return false;
      }
      if (a > i) {
        break;
      }
    }
    return true;
  }
  function rO(t, e) {
    let r;
    let {
      isDocsSDK: n
    } = browserEnvDetectionUtil.browserDetector;
    if (n) {
      if (browserEnvDetectionUtil.browserDetector.android) {
        r = t[0];
      } else if (browserEnvDetectionUtil.browserDetector.ios) {
        r = t[1];
      }
    } else if (browserEnvDetectionUtil.browserDetector.android) {
      r = e[0];
    } else if (browserEnvDetectionUtil.browserDetector.ios) {
      r = e[1];
    }
    let o = rN();
    return !!r && rI(o, r);
  }
  let rA = memoizeFunction.memoize(() => {
    let t = window.navigator.userAgent;
    return objectPathGetDefault.getObjectPathDefault(t.match(/DocsSDK\/([0-9.]+)/i), "[1]");
  });
  let rR = memoizeFunction.memoize(() => {
    let t = rA();
    return !!t && !!browserEnvDetectionUtil.browserDetector.isLark && (!!browserEnvDetectionUtil.browserDetector.ios && !!rI(t, "1.3") || !browserEnvDetectionUtil.browserDetector.ios && !!rI(t, "1.1.0"));
  });
  let rS = memoizeFunction.memoize(() => {
    let t = rA();
    return !!t && !!browserEnvDetectionUtil.browserDetector.ios && !!rI(t, "1.7.0");
  });
  function rN() {
    let {
      isDocsSDK: t
    } = browserEnvDetectionUtil.browserDetector;
    if (t) {
      return rA();
    }
    let e = navigator.userAgent || "";
    return objectPathGetDefault.getObjectPathDefault(e.match(/Docs[^SDK/]*\/([0-9.]+)/), "[1]");
  }
  function ry() {
    let t;
    let {
      isDocsSDK: e
    } = browserEnvDetectionUtil.browserDetector;
    if (e) {
      if (browserEnvDetectionUtil.browserDetector.android) {
        t = "1.1.108";
      } else if (browserEnvDetectionUtil.browserDetector.ios) {
        t = "1.7.0";
      }
    } else {
      t = "0.2.4";
    }
    return rI(rN(), t);
  }
  function rB() {
    let t = rN();
    let e = "";
    e = browserEnvDetectionUtil.browserDetector.isDocsSDK ? browserEnvDetectionUtil.browserDetector.android ? "1.2.3" : "1.8.2" : "0.2.5";
    if (browserEnvDetectionUtil.browserDetector.isIOS) {
      return rF() && rI(t, e);
    } else {
      return rI(t, e);
    }
  }
  function rD() {
    let t = rN();
    let e = "";
    let {
      isDocsSDK: r
    } = browserEnvDetectionUtil.browserDetector;
    if (r) {
      if (browserEnvDetectionUtil.browserDetector.android) {
        e = "0.2.4";
      } else if (browserEnvDetectionUtil.browserDetector.ios) {
        e = "1.8.0";
      }
    } else {
      e = "0.2.4";
    }
    return rI(t, e);
  }
  function rL() {
    let t;
    let e = rN();
    let {
      isDocsSDK: r
    } = browserEnvDetectionUtil.browserDetector;
    if (r) {
      if (browserEnvDetectionUtil.browserDetector.android) {
        t = "1.12.99";
      } else if (browserEnvDetectionUtil.browserDetector.ios) {
        t = "1.9.1";
      }
    } else {
      t = "0.2.6";
    }
    return rI(e, t);
  }
  function rG() {
    return false;
  }
  function rC() {
    let t;
    if (!browserEnvDetectionUtil.browserDetector.isIOS) {
      return false;
    }
    let {
      isDocsSDK: e
    } = browserEnvDetectionUtil.browserDetector;
    t = e ? "1.8.3" : "0.2.6";
    return rI(rN(), t);
  }
  function rv() {
    return rO(["1.12.99", "1.9.1"], ["0.2.7", "0.2.7"]);
  }
  function rP() {
    if (!browserEnvDetectionUtil.browserDetector.isDocs) {
      return false;
    }
    if (browserEnvDetectionUtil.browserDetector.ios) {
      return true;
    }
    {
      let t;
      t = browserEnvDetectionUtil.browserDetector.isDocsSDK ? "1.12.99" : "0.2.7";
      return rI(rN(), t);
    }
  }
  function rF() {
    return location.protocol.indexOf("docsource") > -1;
  }
  function rM() {
    return rO(["1.15.99", "1.9.4"], ["0.3.0", "0.3.0"]);
  }
  function rU() {
    return rO(["1.14.99", "1.9.3"], ["0.2.9", "0.2.9"]);
  }
  function rH() {
    return rO(["1.15.99", "1.9.4"], ["0.3.0", "0.3.0"]);
  }
  function rW() {
    return rO(["1.15.99", "1.9.4"], ["0.3.0", "0.3.0"]);
  }
  function rZ() {
    return rO(["1.15.99", "1.9.4"], ["0.3.0", "0.3.0"]);
  }
  let rY = rO(["1.15.99", "1.9.4"], ["0.3.0", "0.3.0"]);
  function rV() {
    return rO(["1.17.99", "1.9.6"], ["0.3.2", "0.3.2"]);
  }
  var browserEnvConfig = require("browser-env-config") /*id: 59234*/;
  function rK() {
    return !globalConfigHelper.isLarkProduct() && objectPathGetDefault.getObjectPathDefault(window, "User.isSingleProductUser", false);
  }
  function r$() {
    let t = rK();
    let e = objectPathGetDefault.getObjectPathDefault(window, "User.minaConfig.single_product_mode", false);
    let r = browserEnvConfig.isSpaceApp;
    return t || e || r;
  }
  function rj() {
    return objectPathGetDefault.getObjectPathDefault(window, "User.minaConfig.single_product_fg", {}).anonymous_access && rX() || r$();
  }
  function rX() {
    return objectPathGetDefault.getObjectPathDefault(window, "anonymousAccess.isAnonymousAccess", false);
  }
  var colorHashUtil = require("color-hash-util") /*id: 737517*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let rQ = null;
  let r0 = typeof window == "undefined" ? require.g : window;
  let r1 = function () {
    let t = {
      zh: "zh-CN",
      en: "en-US",
      ja: "ja-JP",
      fr: "fr-FR",
      hi: "hi-IN",
      id: "id-ID",
      it: "it-IT",
      ko: "ko-KR",
      pt: "pt-BR",
      ru: "ru-RU",
      th: "th-TH",
      vi: "vi-VN",
      de: "de-DE",
      es: "es-ES",
      "zh-TW": "zh-TW",
      "zh-HK": "zh-HK",
      ms: "ms-MY"
    };
    let e = objectPathGetDefault.getObjectPathDefault(r0, "User.language");
    let r = objectPathGetDefault.getObjectPathDefault(r0, "navigator.language");
    let n = e || r || "";
    let o = n.split("-")[0];
    return t[n] || t[o] || "en-US";
  }();
  function r2() {
    if (rQ !== null) {
      return rQ;
    }
    let t = "Lark";
    try {
      let e = r0.globalConfig ? r0.globalConfig.common : r0.backupDomain.ext;
      let r = `common.${objectPathGetDefault.getObjectPathDefault(e, "brand.app_name", "").toLowerCase()}`;
      let n = r0.TTI18N[r];
      if (n) {
        t = n;
      }
    } catch (t) {}
    return rQ = function () {
      let {
        globalKaConfig: t
      } = r0;
      if (t) {
        let e = objectPathGetDefault.getObjectPathDefault(t, "i18n.IDS_LARK_PRODUCT_NAME");
        if (isStringTypeCheck.isString(e)) {
          return e;
        } else {
          return "";
        }
      }
      return "";
    }() || function () {
      let {
        globalKaConfig: t
      } = r0;
      if (t) {
        let e = objectPathGetDefault.getObjectPathDefault(t, "i18n.app_name.$base", "");
        return objectPathGetDefault.getObjectPathDefault(t, `i18n.app_name[${r1}]`, e);
      }
    }() || function () {
      if (r0.materialConfig) {
        return r0.materialConfig.brand_app_name;
      }
    }() || t;
  }
  var docLocaleUtils = require("doc-locale-utils") /*id: 781197*/;
  function r3(t = "") {
    let e = new RegExp(eC).test(t);
    if (RegExp(`^(${eO}|mailto):`).test(t)) {
      return t;
    } else if (e) {
      return `mailto:${t}`;
    } else {
      return t = `http://${t}`;
    }
  }
  function r4(t = "") {
    return /^data:/.test(t);
  }
  let r6 = () => objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.product") === "lark";
  let r8 = (t, e) => {
    e ||= t;
    let r = r6() ? e : t;
    let n = globalConfigHelper.getHelpCenterDomain();
    let o = /\/\/(www\.feishu\.cn|www\.larksuite\.com)/.exec(r);
    if (n && o && o[1]) {
      r = r.replace(o[1], n);
    }
    return r;
  };
  var shortcutLocationCheck = require("shortcut-location-check") /*id: 143162*/;
  (S = tt ||= {}).FOREGROUND = "FG";
  S.BACKGROUND = "BG";
  S.BORDER = "BD";
  S.ICON = "IC";
  S.SHADOW = "SD";
  (N = te ||= {})[N.light = 0] = "light";
  N[N.dark = 1] = "dark";
  let r7 = {
    "#e0e9ff": "B100",
    "#c2d4ff": "B200",
    "#94b4ff": "B300",
    "#5083fb": "B400",
    "#f0f4ff": "B50",
    "#336df4": "B500",
    "#1456f0": "B600",
    "#0442d2": "B700",
    "#002f9e": "B800",
    "#002270": "B900",
    "#f598cc": "C300",
    "#fef0f8": "C50",
    "#cc398c": "C500",
    "#b82879": "C600",
    "#9d1562": "C700",
    "#730744": "C800",
    "#d0f5ce": "G100",
    "#95e599": "G200",
    "#5cd168": "G300",
    "#32a645": "G400",
    "#258832": "G500",
    "#1a7526": "G600",
    "#0b6017": "G700",
    "#04430c": "G800",
    "#022c07": "G900",
    "#e9eafb": "I100",
    "#abb0f2": "I300",
    "#757df0": "I400",
    "#f2f3fd": "I50",
    "#5b65f5": "I500",
    "#4752e6": "I600",
    "#333dcc": "I700",
    "#151b70": "I900",
    "#a2c10b": "L300",
    "#5c6d08": "L600",
    "#4a5804": "L700",
    "#333d00": "L800",
    "#ffffff": "N00",
    "#f2f3f5": "N100",
    "#000000": "N1000",
    "#eff0f1": "N200",
    "#dee0e3": "N300",
    "#bbbfc4": "N400",
    "#f5f6f7": "N50",
    "#8f959e": "N500",
    "#646a73": "N600",
    "#51565d": "N650",
    "#373c43": "N700",
    "#2b2f36": "N800",
    "#1f2329": "N900",
    "#0f1114": "N950",
    "#fee7cd": "O100",
    "#fec48b": "O200",
    "#ff9d4c": "O300",
    "#fff3e5": "O50",
    "#c25705": "O500",
    "#a44904": "O600",
    "#853a05": "O700",
    "#642b02": "O800",
    "#efe6fe": "P100",
    "#dcc9fd": "P200",
    "#c8a9fc": "P300",
    "#9f6ff1": "P400",
    "#f5f0fe": "P50",
    "#8d55ed": "P500",
    "#7a35f0": "P600",
    "#611fd6": "P700",
    "#4811a6": "P800",
    "#2f0080": "P900",
    "#fee3e2": "R100",
    "#fdc6c4": "R200",
    "#f89e9b": "R300",
    "#f54a45": "R400",
    "#fef0f0": "R50",
    "#e22e28": "R500",
    "#c02a26": "R600",
    "#a11c17": "R700",
    "#741915": "R800",
    "#590603": "R900",
    "#fffca3": "S100",
    "#fff67a": "S200",
    "#fff258": "S300",
    "#e5ce00": "S400",
    "#ffffdb": "S50",
    "#8f7c00": "S600",
    "#5c4f00": "S700",
    "#423700": "S800",
    "#2c2502": "S900",
    "#c4f2ec": "T100",
    "#33d6c0": "T300",
    "#10a893": "T400",
    "#0f8575": "T500",
    "#067062": "T600",
    "#045d51": "T700",
    "#03443b": "T800",
    "#cf5ecf": "V400",
    "#bf3dbf": "V500",
    "#a630a6": "V600",
    "#872787": "V700",
    "#caeffc": "W100",
    "#97dcfc": "W200",
    "#3ec3f7": "W300",
    "#1295ca": "W400",
    "#047fb0": "W500",
    "#076a94": "W600",
    "#0f587a": "W700",
    "#06415c": "W800",
    "#faedc2": "Y100",
    "#fad355": "Y300",
    "#d99904": "Y400",
    "#fbf4df": "Y50",
    "#ad7a03": "Y500",
    "#865b03": "Y600",
    "#6f4a01": "Y700",
    "#573601": "Y800",
    "#382201": "Y900"
  };
  let nt = {
    B50: ["function-info-50", "primary-pri-50"],
    B100: ["function-info-100", "primary-pri-100"],
    B200: ["ccmtoken-mindnote-highlightcolor-blue", "function-info-200", "primary-pri-200"],
    B300: ["function-info-300", "primary-pri-300", "text-link-loading"],
    B350: ["function-info-350", "primary-pri-350"],
    B400: ["function-info-400", "primary-pri-400"],
    B500: ["colorful-blue", "function-info-500", "illustration-blue-e", "primary-pri-500", "text-link-hover"],
    B600: ["ccmtoken-doc-toolbar-btn-bg-blue-hover", "ccmtoken-doc-toolbar-btn-bg-blue-pressed", "bg-text-selection", "function-info-600", "primary-pri-600", "text-link-normal"],
    B700: ["function-info-700", "primary-pri-700", "text-link-pressed"],
    B800: ["function-info-800", "primary-pri-800"],
    B900: ["function-info-900", "illustration-blue-a", "illustration-blue-b", "illustration-blue-c", "illustration-blue-d", "primary-pri-900"],
    C50: [],
    C100: ["ccmtoken-mindnote-highlightcolor-carmine"],
    C200: [],
    C300: [],
    C350: [],
    C400: ["colorful-carmine"],
    C500: ["ccmtoken-tag-bg-carmine"],
    C600: [],
    C700: [],
    C800: [],
    C900: [],
    G50: ["function-success-50"],
    G100: ["function-success-100"],
    G200: ["function-success-200"],
    G300: ["function-success-300"],
    G350: ["function-success-350"],
    G400: ["colorful-green", "function-success-400"],
    G500: ["function-success-500"],
    G600: ["function-success-600"],
    G700: ["function-success-700"],
    G800: ["function-success-800"],
    G900: ["function-success-900"],
    I50: [],
    I100: [],
    I200: [],
    I300: [],
    I350: [],
    I400: [],
    I500: ["colorful-indigo"],
    I600: ["AI-cursor"],
    I700: [],
    I800: [],
    I900: [],
    L50: [],
    L100: ["ccmtoken-mindnote-highlightcolor-lime"],
    L200: [],
    L300: [],
    L350: ["colorful-lime"],
    L400: [],
    L500: [],
    L600: [],
    L700: [],
    L800: [],
    L900: [],
    N00: ["ccmtoken-wiki-multipleselect-toolbar-bg", "ccmtoken-space-bg-commandbar", "bg-body", "bg-float", "bg-float-push", "fill-img-mask", "fill-loading-mask", "illustration-neutral-a", "illustration-neutral-b", "N00-10", "N00-15", "N00-20", "N00-30", "N00-40", "N00-5", "N00-50", "N00-60", "N00-70", "N00-80", "N00-90"],
    N50: ["bg-body-overlay", "bg-float-overlay"],
    N100: ["bg-base", "bg-float-base"],
    N200: ["bg-filler"],
    N300: ["ccmtoken-doc-tableheader-bg-hover", "ccmtoken-mindnote-highlightcolor-neutral", "line-border-card"],
    N350: ["line-border-component"],
    N400: ["fill-disabled", "icon-disabled", "illustration-neutral-c", "text-disabled", "text-link-disabled"],
    N500: ["colorful-neutral", "icon-n3", "illustration-neutral-d", "text-placeholder"],
    N600: ["ccmtoken-doc-block-bg-area", "icon-n2", "text-caption"],
    N650: [],
    N700: [],
    N800: ["icon-n1"],
    N900: ["bg-tips", "fill-focus", "fill-hover", "fill-pressed", "fill-tag", "line-divider-default", "line-divider-module", "shadow-default", "shadow-default-lg", "shadow-default-md", "shadow-default-sm", "text-title", "N900-10", "N900-15", "N900-20", "N900-30", "N900-40", "N900-5", "N900-50", "N900-60", "N900-70", "N900-80", "N900-90"],
    N950: [],
    N1000: ["ccmtoken-doc-picture-toolbar-bg"],
    O50: ["function-warning-50"],
    O100: ["function-warning-100"],
    O200: ["function-warning-200"],
    O300: ["function-warning-300"],
    O350: ["colorful-orange", "function-warning-350"],
    O400: ["function-warning-400"],
    O500: ["function-warning-500", "illustration-orange"],
    O600: ["function-warning-600"],
    O700: ["function-warning-700"],
    O800: ["function-warning-800"],
    O900: ["function-warning-900"],
    P50: [],
    P100: [],
    P200: [],
    P300: [],
    P350: [],
    P400: [],
    P500: ["colorful-purple"],
    P600: [],
    P700: [],
    P800: [],
    P900: [],
    R50: ["function-danger-50"],
    R100: ["function-danger-100"],
    R200: ["ccmtoken-mindnote-highlightcolor-red", "function-danger-200"],
    R300: ["function-danger-300"],
    R350: ["function-danger-350"],
    R400: ["colorful-red", "function-danger-400"],
    R500: ["function-danger-500", "illustration-red"],
    R600: ["function-danger-600"],
    R700: ["function-danger-700"],
    R800: ["function-danger-800"],
    R900: ["function-danger-900"],
    S50: [],
    S100: [],
    S200: [],
    S300: [],
    S350: ["colorful-sunflower"],
    S400: [],
    S500: [],
    S600: [],
    S700: [],
    S800: [],
    S900: [],
    T50: [],
    T100: ["ccmtoken-mindnote-highlightcolor-turquoise"],
    T200: [],
    T300: [],
    T350: [],
    T400: ["colorful-turquoise"],
    T500: ["illustration-turquoise"],
    T600: [],
    T700: [],
    T800: [],
    T900: [],
    V50: [],
    V100: [],
    V200: [],
    V300: [],
    V350: [],
    V400: [],
    V500: ["colorful-violet"],
    V600: [],
    V700: [],
    V800: [],
    V900: [],
    W50: [],
    W100: [],
    W200: [],
    W300: [],
    W350: ["colorful-wathet"],
    W400: [],
    W500: ["illustration-wathet"],
    W600: [],
    W700: [],
    W800: [],
    W900: [],
    Y50: [],
    Y100: ["ccmtoken-mindnote-highlightcolor-yellow"],
    Y200: [],
    Y300: ["colorful-yellow"],
    Y350: [],
    Y400: [],
    Y500: ["illustration-yellow"],
    Y600: [],
    Y700: [],
    Y800: [],
    Y900: []
  };
  let ne = {
    B50: ["B50"],
    B100: ["B100"],
    B200: ["ccmtoken-doc-highlightcolor-blue-soft", "B200"],
    B300: ["B300"],
    B400: ["ccmtoken-doc-highlightcolor-blue-solid"],
    B500: [],
    B600: ["B600"],
    B700: [],
    B800: [],
    B900: [],
    C50: [],
    C100: [],
    C200: [],
    C300: [],
    C400: [],
    C500: [],
    C600: [],
    C700: [],
    C800: [],
    C900: [],
    G50: ["G50"],
    G100: ["G100"],
    G200: ["ccmtoken-doc-highlightcolor-green-soft", "G200"],
    G300: ["G300"],
    G400: ["ccmtoken-doc-highlightcolor-green-solid"],
    G500: [],
    G600: ["G600"],
    G700: [],
    G800: [],
    G900: [],
    I50: [],
    I100: [],
    I200: [],
    I300: [],
    I400: [],
    I500: [],
    I600: [],
    I700: [],
    I800: [],
    I900: [],
    L50: [],
    L100: [],
    L200: [],
    L300: [],
    L400: [],
    L500: [],
    L600: [],
    L700: [],
    L800: [],
    L900: [],
    N00: [],
    N50: ["N50"],
    N100: ["N100"],
    N200: [],
    N300: ["ccmtoken-doc-highlightcolor-neutral-soft", "N300"],
    N350: [],
    N400: ["ccmtoken-doc-highlightcolor-neutral-solid"],
    N500: ["N500"],
    N600: ["N600"],
    N650: [],
    N700: [],
    N800: [],
    N900: [],
    N950: [],
    N1000: [],
    O50: ["O50"],
    O100: ["O100"],
    O200: ["ccmtoken-doc-highlightcolor-orange-soft", "O200"],
    O300: ["O300"],
    O400: ["ccmtoken-doc-highlightcolor-orange-solid"],
    O500: [],
    O600: ["O600"],
    O700: [],
    O800: [],
    O900: [],
    P50: ["P50"],
    P100: ["P100"],
    P200: ["ccmtoken-doc-highlightcolor-purple-soft", "P200"],
    P300: ["P300"],
    P400: ["ccmtoken-doc-highlightcolor-purple-solid"],
    P500: [],
    P600: ["P600"],
    P700: [],
    P800: [],
    P900: [],
    R50: ["R50"],
    R100: ["R100"],
    R200: ["ccmtoken-doc-highlightcolor-red-soft", "R200"],
    R300: ["R300"],
    R400: ["ccmtoken-doc-highlightcolor-red-solid"],
    R500: [],
    R600: ["R600"],
    R700: [],
    R800: [],
    R900: [],
    S50: ["S50"],
    S100: ["S100"],
    S200: [],
    S300: ["ccmtoken-doc-highlightcolor-sunflower-soft", "S300"],
    S400: ["S400"],
    S500: ["ccmtoken-doc-highlightcolor-sunflower-solid"],
    S600: [],
    S700: [],
    S800: [],
    S900: [],
    T50: [],
    T100: [],
    T200: [],
    T300: [],
    T400: [],
    T500: [],
    T600: [],
    T700: [],
    T800: [],
    T900: [],
    V50: [],
    V100: [],
    V200: [],
    V300: [],
    V400: [],
    V500: [],
    V600: [],
    V700: [],
    V800: [],
    V900: [],
    W50: [],
    W100: [],
    W200: [],
    W300: [],
    W400: [],
    W500: [],
    W600: [],
    W700: [],
    W800: [],
    W900: [],
    Y50: [],
    Y100: [],
    Y200: [],
    Y300: [],
    Y400: [],
    Y500: [],
    Y600: ["Y600"],
    Y700: [],
    Y800: [],
    Y900: []
  };
  let nr = new Map(Object.entries({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgrey: 11119017,
    darkgreen: 25600,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    grey: 8421504,
    green: 32768,
    greenyellow: 11403055,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgrey: 13882323,
    lightgreen: 9498256,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }));
  let nn = new Map(Object.entries({
    ActiveBorder: 3906044,
    ActiveCaption: 0,
    AppWorkspace: 11184810,
    Background: 6513614,
    ButtonFace: 16777215,
    ButtonHighlight: 15329769,
    ButtonShadow: 10461343,
    ButtonText: 0,
    CaptionText: 0,
    GrayText: 8355711,
    Highlight: 11720703,
    HighlightText: 0,
    InactiveBorder: 16777215,
    InactiveCaption: 16777215,
    InactiveCaptionText: 0,
    InfoBackground: 16514245,
    InfoText: 0,
    Menu: 16185078,
    MenuText: 16777215,
    Scrollbar: 11184810,
    ThreeDDarkShadow: 0,
    ThreeDFace: 12632256,
    ThreeDHighlight: 16777215,
    ThreeDLightShadow: 16777215,
    ThreeDShadow: 0,
    Window: 15527148,
    WindowFrame: 11184810,
    WindowText: 0,
    "-webkit-focus-ring-color": 15046400
  }).map(([t, e]) => [t.toLowerCase(), e]));
  function no({
    h: t,
    s: e,
    l: r,
    a: n = 1
  }) {
    if (e === 0) {
      let [t, e, o] = [r, r, r].map(t => Math.round(t * 255));
      return {
        r: t,
        g: o,
        b: e,
        a: n
      };
    }
    let o = (1 - Math.abs(r * 2 - 1)) * e;
    let a = o * (1 - Math.abs(t / 60 % 2 - 1));
    let i = r - o / 2;
    let [c, u, l] = (t < 60 ? [o, a, 0] : t < 120 ? [a, o, 0] : t < 180 ? [0, o, a] : t < 240 ? [0, a, o] : t < 300 ? [a, 0, o] : [o, 0, a]).map(t => Math.round((t + i) * 255));
    return {
      r: c,
      g: u,
      b: l,
      a: n
    };
  }
  function na({
    r: t,
    g: e,
    b: r,
    a: n = 1
  }) {
    let o = t / 255;
    let a = e / 255;
    let i = r / 255;
    let c = Math.max(o, a, i);
    let u = Math.min(o, a, i);
    let l = c - u;
    let s = (c + u) / 2;
    if (l === 0) {
      return {
        h: 0,
        s: 0,
        l: s,
        a: n
      };
    }
    let f = (c === o ? (a - i) / l % 6 : c === a ? (i - o) / l + 2 : (o - a) / l + 4) * 60;
    if (f < 0) {
      f += 360;
    }
    return {
      h: f,
      s: l / (1 - Math.abs(s * 2 - 1)),
      l: s,
      a: n
    };
  }
  function ni(t, e = 0) {
    let r = t.toFixed(e);
    if (e === 0) {
      return r;
    }
    let n = r.indexOf(".");
    if (n >= 0) {
      let t = r.match(/0+$/);
      if (t) {
        if (t.index === n + 1) {
          return r.substring(0, n);
        } else {
          return r.substring(0, t.index);
        }
      }
    }
    return r;
  }
  function nc({
    r: t,
    g: e,
    b: r,
    a: n
  }) {
    return `#${(n !== undefined && n < 1 ? [t, e, r, Math.round(n * 255)] : [t, e, r]).map(t => `${t < 16 ? "0" : ""}${t.toString(16)}`).join("")}`;
  }
  let nu = /^rgba?\([^\(\)]+\)$/;
  let nl = /^hsla?\([^\(\)]+\)$/;
  let ns = /^#[0-9a-f]+$/i;
  function nf(t) {
    let e = t.trim().toLowerCase();
    if (e.match(nu)) {
      return function (t) {
        let [e, r, n, o = 1] = nd(t, ng, nb, nh);
        return {
          r: e,
          g: r,
          b: n,
          a: o
        };
      }(e);
    }
    if (e.match(nl)) {
      return function (t) {
        let [e, r, n, o = 1] = nd(t, np, nw, n_);
        return no({
          h: e,
          s: r,
          l: n,
          a: o
        });
      }(e);
    }
    if (e.match(ns)) {
      return function (t) {
        let e = t.substring(1);
        switch (e.length) {
          case 3:
          case 4:
            {
              let [t, r, n] = [0, 1, 2].map(t => parseInt(`${e[t]}${e[t]}`, 16));
              return {
                r: t,
                g: r,
                b: n,
                a: e.length === 3 ? 1 : parseInt(`${e[3]}${e[3]}`, 16) / 255
              };
            }
          case 6:
          case 8:
            {
              let [t, r, n] = [0, 2, 4].map(t => parseInt(e.substring(t, t + 2), 16));
              return {
                r: t,
                g: r,
                b: n,
                a: e.length === 6 ? 1 : parseInt(e.substring(6, 8), 16) / 255
              };
            }
          default:
            throw Error(`Unable to parse ${t}`);
        }
      }(e);
    }
    if (nr.has(e)) {
      return function (t) {
        let e = nr.get(t);
        return {
          r: e >> 16 & 255,
          g: e >> 8 & 255,
          b: e >> 0 & 255,
          a: 1
        };
      }(e);
    }
    if (nn.has(e)) {
      return function (t) {
        let e = nn.get(t);
        return {
          r: e >> 16 & 255,
          g: e >> 8 & 255,
          b: e >> 0 & 255,
          a: 1
        };
      }(e);
    }
    if (t === "transparent") {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      };
    }
    throw Error(`Unable to parse ${t}`);
  }
  function nd(t, e, r, n) {
    let o = t.split(e).filter(t => t);
    let a = Object.entries(n);
    return o.map(t => t.trim()).map((t, e) => {
      let n;
      let o = a.find(([e]) => t.endsWith(e));
      n = o ? parseFloat(t.substring(0, t.length - o[0].length)) / o[1] * r[e] : parseFloat(t);
      if (r[e] > 1) {
        return Math.round(n);
      } else {
        return n;
      }
    });
  }
  let ng = /rgba?|\(|\)|\/|,|\s/ig;
  let nb = [255, 255, 255, 1];
  let nh = {
    "%": 100
  };
  let np = /hsla?|\(|\)|\/|,|\s/ig;
  let nw = [360, 1, 1, 1];
  let n_ = {
    "%": 100,
    deg: 360,
    rad: Math.PI * 2,
    turn: 1
  };
  let nE = /(#[0-9a-f]{3,8}|rgba?\([^\(\)]+\)|hsla?\([^\(\)]+\))$/i;
  let nm = /([A-Z]\d{2,3})$/i;
  let nT = new Map();
  let nk = {
    backColor: tt.BACKGROUND,
    bg: tt.BACKGROUND,
    background: tt.BACKGROUND,
    border: tt.BORDER,
    line: tt.BORDER,
    icon: tt.ICON,
    fill: tt.ICON,
    stroke: tt.ICON,
    shadow: tt.SHADOW,
    foreColor: tt.FOREGROUND
  };
  let nx = {
    [tt.FOREGROUND]: ["text", "highlightcolor", "illustration", nm],
    [tt.BACKGROUND]: ["bg", "highlightcolor", "illustration", nm],
    [tt.BORDER]: ["line", "link", "highlightcolor", "illustration", nm],
    [tt.ICON]: ["fill", "icon", nm],
    [tt.SHADOW]: ["shadow", nm]
  };
  function nI(t, e, r) {
    let n = `${t.trim()}-${e.trim()}-${r}`;
    if (nT.has(n)) {
      return nT.get(n);
    }
    {
      let o = function (t, e, r) {
        try {
          let n;
          if (nE.test(e)) {
            n = function (t) {
              try {
                let e = nf(t);
                return r7[nc(e)];
              } catch (t) {
                return;
              }
            }(e);
          } else if (nm.test(e)) {
            n = e;
          }
          if (!n) {
            return e;
          }
          return function (t, e, r) {
            let n = tt.FOREGROUND;
            if (t) {
              let e = t.toLowerCase().replace(/[_|-]/g, "");
              let r = Object.keys(nk);
              for (let t = 0; t < r.length; t++) {
                if (e.includes(r[t].toLowerCase())) {
                  n = nk[r[t]];
                  break;
                }
              }
            }
            let o = nt[e];
            if (r === tr.DOC) {
              o = ne[e].concat(nt[e]);
            }
            if (o && o.length > 0) {
              let t = nx[n];
              let e = o.filter(e => {
                let r = false;
                t.forEach(t => {
                  if (typeof t == "string" && e.indexOf(t) > -1 || t instanceof RegExp && e.match(t)) {
                    r = true;
                  }
                });
                return r;
              });
              if (e && e.length > 0) {
                return e[0];
              }
            }
            if (n === tt.ICON || n === tt.SHADOW) {
              n = tt.FOREGROUND;
            }
            return `${e}-${n}`;
          }(t, n, r);
        } catch (t) {
          return e;
        }
      }(t, e, r);
      nT.set(n, o);
      return o;
    }
  }
  (y = tr ||= {}).DOC = "DOC";
  y.ALL = "ALL";
  function nO(t, e) {
    let r = [];
    for (let n = 0, o = t.length; n < o; n++) {
      r[n] = [];
      for (let o = 0, a = e[0].length; o < a; o++) {
        let a = 0;
        for (let r = 0, i = t[0].length; r < i; r++) {
          a += t[n][r] * e[r][o];
        }
        r[n][o] = a;
      }
    }
    return r;
  }
  let nA = {
    identity: () => [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
    invertNHue: () => [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
    brightness: t => [[t, 0, 0, 0, 0], [0, t, 0, 0, 0], [0, 0, t, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
    contrast(t) {
      let e = (1 - t) / 2;
      return [[t, 0, 0, 0, e], [0, t, 0, 0, e], [0, 0, t, 0, e], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    sepia: t => [[0.393 + (1 - t) * 0.607, 0.769 - (1 - t) * 0.769, 0.189 - (1 - t) * 0.189, 0, 0], [0.349 - (1 - t) * 0.349, 0.686 + (1 - t) * 0.314, 0.168 - (1 - t) * 0.168, 0, 0], [0.272 - (1 - t) * 0.272, 0.534 - (1 - t) * 0.534, 0.131 + (1 - t) * 0.869, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
    grayscale: t => [[0.2126 + (1 - t) * 0.7874, 0.7152 - (1 - t) * 0.7152, 0.0722 - (1 - t) * 0.0722, 0, 0], [0.2126 - (1 - t) * 0.2126, 0.7152 + (1 - t) * 0.2848, 0.0722 - (1 - t) * 0.0722, 0, 0], [0.2126 - (1 - t) * 0.2126, 0.7152 - (1 - t) * 0.7152, 0.0722 + (1 - t) * 0.9278, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]
  };
  let nR = "#1a1a1a";
  let nS = "#ebebeb";
  let nN = "#ffffff";
  let ny = "#1f2329";
  let nB = {
    mode: 1,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    darkSchemeBackgroundColor: nR,
    darkSchemeTextColor: nS,
    lightSchemeBackgroundColor: nN,
    lightSchemeTextColor: ny
  };
  let nD = new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]);
  let nL = new Map();
  let nG = new Map();
  let nC = new Map();
  let nv = ["r", "g", "b", "a"];
  let nP = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
  function nF(t) {
    if (nG.has(t)) {
      return nG.get(t);
    }
    let e = na(nf(t));
    nG.set(t, e);
    return e;
  }
  function nM(t) {
    let e = t.mode === 1;
    return t[e ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"];
  }
  function nU(t) {
    let e = t.mode === 1;
    return t[e ? "darkSchemeTextColor" : "lightSchemeTextColor"];
  }
  function nH(t) {
    return (t - 205) * 15 / 40 + 205;
  }
  function nW({
    h: t,
    s: e,
    l: r,
    a: n
  }, o) {
    var a;
    var i;
    var c;
    let u;
    let l = r < 0.2 || e < 0.24;
    let s = !l && t > 205 && t < 245;
    if (r > 0.5) {
      let a = (r - 0.5) * (o.l - 0.55) / 0.5 + 0.55;
      if (l) {
        return {
          h: o.h,
          s: o.s,
          l: a,
          a: n
        };
      }
      let i = t;
      if (s) {
        i = nH(t);
      }
      return {
        h: i,
        s: e,
        l: a,
        a: n
      };
    }
    if (l) {
      let t = o.h;
      return {
        h: t,
        s: o.s,
        l: (r - 0) * (0.55 - (a = o.l)) / 0.5 + a,
        a: n
      };
    }
    let f = t;
    if (s) {
      f = nH(t);
      u = (r - 0) * (Math.min(1, 0.6000000000000001) - (i = o.l)) / 0.5 + i;
    } else {
      u = (r - 0) * (0.55 - (c = o.l)) / 0.5 + c;
    }
    return {
      h: f,
      s: e,
      l: u,
      a: n
    };
  }
  function nZ({
    h: t,
    s: e,
    l: r,
    a: n
  }, o) {
    let a = e < 0.12 || r > 0.8 && t > 200 && t < 280;
    if (r < 0.5) {
      let i = (r - 0) * 0.4 / 0.5 + 0;
      if (a) {
        return {
          h: o.h,
          s: o.s,
          l: i,
          a: n
        };
      } else {
        return {
          h: t,
          s: e,
          l: i,
          a: n
        };
      }
    }
    let i = (r - 0.5) * (o.l - 0.4) / 0.5 + 0.4;
    if (a) {
      return {
        h: o.h,
        s: o.s,
        l: i,
        a: n
      };
    }
    let c = t;
    if (t > 60 && t < 180) {
      c = t > 120 ? (t - 120) * 45 / 60 + 135 : (t - 60) * 45 / 60 + 60;
    }
    return {
      h: c,
      s: e,
      l: i,
      a: n
    };
  }
  function nY({
    h: t,
    s: e,
    l: r,
    a: n
  }, o, a) {
    let i = t;
    let c = e;
    if (r < 0.2 || e < 0.24) {
      if (r < 0.5) {
        i = o.h;
        c = o.s;
      } else {
        i = a.h;
        c = a.s;
      }
    }
    return {
      h: i,
      s: c,
      l: -((r - 0) * 0.3) / 1 + 0.5,
      a: n
    };
  }
  function nV(t, e) {
    let r = nM(e);
    let n = nU(e);
    return nz(t, e, nK, n, r);
  }
  function nz(t, e, r, n, o) {
    let a;
    let i;
    if (nC.has(r)) {
      a = nC.get(r);
    } else {
      a = new Map();
      nC.set(r, a);
    }
    let c = nv.map(e => t[e]).concat(nP.map(t => e[t])).join(";");
    if (a.has(c)) {
      return a.get(c);
    }
    let u = na(t);
    let {
      r: l,
      g: s,
      b: f,
      a: d
    } = no(r(u, n === undefined ? undefined : nF(n), o === undefined ? undefined : nF(o)));
    let [g, b, h] = function ([t, e, r], n) {
      let o = nO(n, [[t / 255], [e / 255], [r / 255], [1], [1]]);
      return [0, 1, 2].map(t => Math.min(255, Math.max(0, Math.round(o[t][0] * 255))));
    }([l, s, f], (i = nA.identity(), e.sepia !== 0 && (i = nO(i, nA.sepia(e.sepia / 100))), e.grayscale !== 0 && (i = nO(i, nA.grayscale(e.grayscale / 100))), e.contrast !== 100 && (i = nO(i, nA.contrast(e.contrast / 100))), e.brightness !== 100 && (i = nO(i, nA.brightness(e.brightness / 100))), e.mode === 1 && (i = nO(i, nA.invertNHue())), i));
    let p = d === 1 ? nc({
      r: g,
      g: b,
      b: h
    }) : function (t) {
      let {
        r: e,
        g: r,
        b: n,
        a: o
      } = t;
      if (o !== undefined && o < 1) {
        return `rgba(${ni(e)}, ${ni(r)}, ${ni(n)}, ${ni(o, 2)})`;
      } else {
        return `rgb(${ni(e)}, ${ni(r)}, ${ni(n)})`;
      }
    }({
      r: g,
      g: b,
      b: h,
      a: d
    });
    a.set(c, p);
    return p;
  }
  function nK({
    h: t,
    s: e,
    l: r,
    a: n
  }, o, a) {
    var i;
    let c;
    let u = r < 0.5;
    c = u ? r < 0.2 || e < 0.12 : e < 0.24 || r > 0.8 && t > 200 && t < 280;
    let l = t;
    let s = r;
    if (c) {
      if (u) {
        l = o.h;
        s = o.s;
      } else {
        l = a.h;
        s = a.s;
      }
    }
    return {
      h: l,
      s: s,
      l: (i = o.l, (r - 0) * (a.l - i) / 1 + i),
      a: n
    };
  }
  function n$(t, e) {
    if (nD.has(t.toLowerCase())) {
      return t;
    }
    try {
      let r = function (t) {
        let e = t.trim();
        if (nL.has(e)) {
          return nL.get(e);
        }
        let r = nf(e);
        nL.set(e, r);
        return r;
      }(t);
      switch (e || tt.FOREGROUND) {
        case tt.BACKGROUND:
          return function (t, e) {
            if (e.mode === 0) {
              return nV(t, e);
            }
            let r = nM(e);
            return nz(t, Object.assign(Object.assign({}, e), {
              mode: 0
            }), nZ, r);
          }(r, nB);
        case tt.BORDER:
          return function (t, e) {
            if (e.mode === 0) {
              return nV(t, e);
            }
            let r = nU(e);
            let n = nM(e);
            return nz(t, Object.assign(Object.assign({}, e), {
              mode: 0
            }), nY, r, n);
          }(r, nB);
        default:
          return function (t, e) {
            if (e.mode === 0) {
              return nV(t, e);
            }
            let r = nU(e);
            return nz(t, Object.assign(Object.assign({}, e), {
              mode: 0
            }), nW, r);
          }(r, nB);
      }
    } catch (e) {
      return t;
    }
  }
  let nj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, {
    "AI-cursor": "rgb(71, 82, 230)",
    "AI-dynamic-line": "conic-gradient(from 45deg, rgb(207, 94, 207) 0%, rgb(71, 82, 230) 33.33333333333333%, rgb(71, 82, 230) 66.66666666666666%, rgb(207, 94, 207) 100%)",
    "AI-icon-gradient": "linear-gradient(to right, rgb(71, 82, 230) 0%, rgb(159, 111, 241) 100%)",
    "AI-icon-in-button": "rgb(71, 82, 230)",
    "AI-loading": "linear-gradient(to right, rgb(71, 82, 230) 0%, rgb(222, 129, 222) 100%)",
    "AI-primary-content-default": "linear-gradient(to right, rgb(71, 82, 230) 0%, rgb(207, 94, 207) 100%)",
    "AI-primary-content-hover": "linear-gradient(to right, rgb(91, 101, 245) 0%, rgb(222, 129, 222) 100%)",
    "AI-primary-content-loading": "linear-gradient(to right, rgba(71, 82, 230, 0.6) 0%, rgba(207, 94, 207, 0.6) 100%)",
    "AI-primary-content-pressed": "linear-gradient(to right, rgb(71, 82, 230) 0%, rgb(191, 61, 191) 100%)",
    "AI-primary-fill-default": "linear-gradient(to right, rgb(91, 101, 245) 0%, rgb(222, 129, 222) 100%)",
    "AI-primary-fill-hover": "linear-gradient(to right, rgb(117, 125, 240) 0%, rgb(229, 156, 229) 100%)",
    "AI-primary-fill-loading": "linear-gradient(to right, rgba(91, 101, 245, 0.6) 0%, rgba(222, 129, 222, 0.6) 100%)",
    "AI-primary-fill-pressed": "linear-gradient(to right, rgb(71, 82, 230) 0%, rgb(207, 94, 207) 100%)",
    "AI-primary-fill-solid-01": "linear-gradient(to right, rgb(242, 243, 253) 0%, rgb(252, 238, 252) 100%)",
    "AI-primary-fill-solid-02": "linear-gradient(to right, rgb(233, 234, 251) 0%, rgb(249, 226, 249) 100%)",
    "AI-primary-fill-solid-03": "linear-gradient(to right, rgb(204, 207, 249) 0%, rgb(243, 196, 243) 100%)",
    "AI-primary-fill-transparent-01": "linear-gradient(to right, rgba(91, 101, 245, 0.1) 0%, rgba(222, 129, 222, 0.1) 100%)",
    "AI-primary-fill-transparent-02": "linear-gradient(to right, rgba(91, 101, 245, 0.2) 0%, rgba(222, 129, 222, 0.2) 100%)",
    "AI-primary-fill-transparent-03": "linear-gradient(to right, rgba(91, 101, 245, 0.3) 0%, rgba(222, 129, 222, 0.3) 100%)",
    "AI-sendicon": "linear-gradient(to right, rgb(71, 82, 230) 0%, rgb(159, 111, 241) 100%)",
    "Aurora-bg-main": "rgba(20, 86, 240, 0.2)",
    "Aurora-bg-reflection": "rgba(45, 190, 171, 0.1)",
    "Aurora-bg-subordinate": "rgba(51, 109, 244, 0.15)",
    B100: "#e0e9ff",
    B200: "#c2d4ff",
    B300: "#94b4ff",
    B350: "#7aa2ff",
    B400: "#5083fb",
    B50: "#f0f4ff",
    B500: "#336df4",
    B600: "#1456f0",
    B700: "#0442d2",
    B800: "#002f9e",
    B900: "#002270",
    C100: "#fee2f2",
    C200: "#f8c4e1",
    C300: "#f598cc",
    C350: "#eb78b8",
    C400: "#df58a5",
    C50: "#fef0f8",
    C500: "#cc398c",
    C600: "#b82879",
    C700: "#9d1562",
    C800: "#730744",
    C900: "#550c35",
    G100: "#d0f5ce",
    G200: "#95e599",
    G300: "#5cd168",
    G350: "#35bd4b",
    G400: "#32a645",
    G50: "#e4fae1",
    G500: "#258832",
    G600: "#1a7526",
    G700: "#0b6017",
    G800: "#04430c",
    G900: "#022c07",
    I100: "#e9eafb",
    I200: "#cccff9",
    I300: "#abb0f2",
    I350: "#959bee",
    I400: "#757df0",
    I50: "#f2f3fd",
    I500: "#5b65f5",
    I600: "#4752e6",
    I700: "#333dcc",
    I800: "#1e27a4",
    I900: "#151b70",
    L100: "#e3f0a3",
    L200: "#c8dd5f",
    L300: "#a2c10b",
    L350: "#91ad00",
    L400: "#7b9207",
    L50: "#f2f8d3",
    L500: "#6b7f06",
    L600: "#5c6d08",
    L700: "#4a5804",
    L800: "#333d00",
    L900: "#262e00",
    N00: "#ffffff",
    "N00-10": "rgba(255, 255, 255, 0.1)",
    "N00-15": "rgba(255, 255, 255, 0.15)",
    "N00-20": "rgba(255, 255, 255, 0.2)",
    "N00-30": "rgba(255, 255, 255, 0.3)",
    "N00-40": "rgba(255, 255, 255, 0.4)",
    "N00-5": "rgba(255, 255, 255, 0.05)",
    "N00-50": "rgba(255, 255, 255, 0.5)",
    "N00-60": "rgba(255, 255, 255, 0.6)",
    "N00-70": "rgba(255, 255, 255, 0.7)",
    "N00-80": "rgba(255, 255, 255, 0.8)",
    "N00-90": "rgba(255, 255, 255, 0.9)",
    N100: "#f2f3f5",
    N1000: "#000000",
    N200: "#eff0f1",
    N300: "#dee0e3",
    N350: "#d0d3d6",
    N400: "#bbbfc4",
    N50: "#f5f6f7",
    N500: "#8f959e",
    N600: "#646a73",
    N650: "#51565d",
    N700: "#373c43",
    N800: "#2b2f36",
    N900: "#1f2329",
    "N900-10": "rgba(31, 35, 41, 0.1)",
    "N900-15": "rgba(31, 35, 41, 0.15)",
    "N900-20": "rgba(31, 35, 41, 0.2)",
    "N900-30": "rgba(31, 35, 41, 0.3)",
    "N900-40": "rgba(31, 35, 41, 0.4)",
    "N900-5": "rgba(31, 35, 41, 0.05)",
    "N900-50": "rgba(31, 35, 41, 0.5)",
    "N900-60": "rgba(31, 35, 41, 0.6)",
    "N900-70": "rgba(31, 35, 41, 0.7)",
    "N900-80": "rgba(31, 35, 41, 0.8)",
    "N900-90": "rgba(31, 35, 41, 0.9)",
    N950: "#0f1114",
    O100: "#fee7cd",
    O200: "#fec48b",
    O300: "#ff9d4c",
    O350: "#ff811a",
    O400: "#ed6d0c",
    O50: "#fff3e5",
    O500: "#c25705",
    O600: "#a44904",
    O700: "#853a05",
    O800: "#642b02",
    O900: "#3b1a02",
    P100: "#efe6fe",
    P200: "#dcc9fd",
    P300: "#c8a9fc",
    P350: "#b791fa",
    P400: "#9f6ff1",
    P50: "#f5f0fe",
    P500: "#8d55ed",
    P600: "#7a35f0",
    P700: "#611fd6",
    P800: "#4811a6",
    P900: "#2f0080",
    R100: "#fee3e2",
    R200: "#fdc6c4",
    R300: "#f89e9b",
    R350: "#ff7570",
    R400: "#f54a45",
    R50: "#fef0f0",
    R500: "#e22e28",
    R600: "#c02a26",
    R700: "#a11c17",
    R800: "#741915",
    R900: "#590603",
    S100: "#fffca3",
    S200: "#fff67a",
    S300: "#fff258",
    S350: "#ffe928",
    S400: "#e5ce00",
    S50: "#ffffdb",
    S500: "#c2a800",
    S600: "#8f7c00",
    S700: "#5c4f00",
    S800: "#423700",
    S900: "#2c2502",
    T100: "#c4f2ec",
    T200: "#6fe8d8",
    T300: "#33d6c0",
    T350: "#2dbeab",
    T400: "#10a893",
    T50: "#e2f8f5",
    T500: "#0f8575",
    T600: "#067062",
    T700: "#045d51",
    T800: "#03443b",
    T900: "#02312a",
    V100: "#f9e2f9",
    V200: "#f3c4f3",
    V300: "#e59ce5",
    V350: "#de81de",
    V400: "#cf5ecf",
    V50: "#fceefc",
    V500: "#bf3dbf",
    V600: "#a630a6",
    V700: "#872787",
    V800: "#6a116a",
    V900: "#520052",
    "Vnext-bg-content-header": "rgb(252, 252, 252)",
    "Vnext-bg-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(100, 106, 115, 0.05) 100%)",
    "Vnext-bg-sub-navigation": "rgba(245, 245, 245, 0.7)",
    "Vnext-bg-thirdly-navigation": "rgba(252, 252, 252, 0.9)",
    W100: "#caeffc",
    W200: "#97dcfc",
    W300: "#3ec3f7",
    W350: "#25b0e7",
    W400: "#1295ca",
    W50: "#e7f8fe",
    W500: "#047fb0",
    W600: "#076a94",
    W700: "#0f587a",
    W800: "#06415c",
    W900: "#072b3d",
    Y100: "#faedc2",
    Y200: "#fcdf7e",
    Y300: "#fad355",
    Y350: "#ffc60a",
    Y400: "#d99904",
    Y50: "#fbf4df",
    Y500: "#ad7a03",
    Y600: "#865b03",
    Y700: "#6f4a01",
    Y800: "#573601",
    Y900: "#382201",
    "bg-base": "rgb(242, 243, 245)",
    "bg-body": "rgb(255, 255, 255)",
    "bg-body-overlay": "rgb(245, 246, 247)",
    "bg-content-base": "rgb(248, 249, 250)",
    "bg-filler": "rgb(239, 240, 241)",
    "bg-float": "rgb(255, 255, 255)",
    "bg-float-base": "rgb(242, 243, 245)",
    "bg-float-overlay": "rgb(245, 246, 247)",
    "bg-float-push": "rgba(255, 255, 255, 0.8)",
    "bg-mask": "rgba(0, 0, 0, 0.55)",
    "bg-pricolor": "rgb(80, 131, 251)",
    "bg-sub-navigation": "rgb(245, 246, 247)",
    "bg-text-selection": "rgba(20, 86, 240, 0.3)",
    "bg-tips": "rgb(31, 35, 41)",
    "colorful-blue": "rgb(51, 109, 244)",
    "colorful-carmine": "rgb(223, 88, 165)",
    "colorful-green": "rgb(53, 189, 75)",
    "colorful-indigo": "rgb(91, 101, 245)",
    "colorful-lime": "rgb(145, 173, 0)",
    "colorful-neutral": "rgb(143, 149, 158)",
    "colorful-orange": "rgb(255, 129, 26)",
    "colorful-purple": "rgb(141, 85, 237)",
    "colorful-red": "rgb(245, 74, 69)",
    "colorful-sunflower": "rgb(255, 233, 40)",
    "colorful-turquoise": "rgb(45, 190, 171)",
    "colorful-violet": "rgb(191, 61, 191)",
    "colorful-wathet": "rgb(37, 176, 231)",
    "colorful-yellow": "rgb(255, 198, 10)",
    "fill-active": "rgba(20, 86, 240, 0.15)",
    "fill-disabled": "rgb(187, 191, 196)",
    "fill-focus": "rgba(31, 35, 41, 0.12)",
    "fill-hover": "rgba(31, 35, 41, 0.08)",
    "fill-img-mask": "rgba(255, 255, 255, 0)",
    "fill-loading-mask": "rgba(255, 255, 255, 0.6)",
    "fill-pressed": "rgba(31, 35, 41, 0.12)",
    "fill-selected": "rgba(20, 86, 240, 0.1)",
    "fill-tag": "rgba(31, 35, 41, 0.1)",
    "function-danger-100": "rgb(254, 227, 226)",
    "function-danger-200": "rgb(253, 198, 196)",
    "function-danger-300": "rgb(248, 158, 155)",
    "function-danger-350": "rgb(255, 117, 112)",
    "function-danger-400": "rgb(245, 74, 69)",
    "function-danger-50": "rgb(254, 240, 240)",
    "function-danger-500": "rgb(226, 46, 40)",
    "function-danger-600": "rgb(192, 42, 38)",
    "function-danger-700": "rgb(161, 28, 23)",
    "function-danger-800": "rgb(116, 25, 21)",
    "function-danger-900": "rgb(89, 6, 3)",
    "function-danger-content-default": "rgb(245, 74, 69)",
    "function-danger-content-hover": "rgb(255, 117, 112)",
    "function-danger-content-loading": "rgb(248, 158, 155)",
    "function-danger-content-pressed": "rgb(226, 46, 40)",
    "function-danger-fill-default": "rgb(245, 74, 69)",
    "function-danger-fill-hover": "rgb(255, 117, 112)",
    "function-danger-fill-loading": "rgb(248, 158, 155)",
    "function-danger-fill-pressed": "rgb(226, 46, 40)",
    "function-danger-fill-solid-01": "rgb(254, 240, 240)",
    "function-danger-fill-solid-02": "rgb(254, 227, 226)",
    "function-danger-fill-solid-03": "rgb(253, 198, 196)",
    "function-danger-fill-transparent-01": "rgba(226, 46, 40, 0.1)",
    "function-danger-fill-transparent-02": "rgba(226, 46, 40, 0.15)",
    "function-danger-fill-transparent-03": "rgba(226, 46, 40, 0.2)",
    "function-danger-on-danger-fill": "rgb(255, 255, 255)",
    "function-info-100": "rgb(224, 233, 255)",
    "function-info-200": "rgb(194, 212, 255)",
    "function-info-300": "rgb(148, 180, 255)",
    "function-info-350": "rgb(122, 162, 255)",
    "function-info-400": "rgb(80, 131, 251)",
    "function-info-50": "rgb(240, 244, 255)",
    "function-info-500": "rgb(51, 109, 244)",
    "function-info-600": "rgb(20, 86, 240)",
    "function-info-700": "rgb(4, 66, 210)",
    "function-info-800": "rgb(0, 47, 158)",
    "function-info-900": "rgb(0, 34, 112)",
    "function-info-content-default": "rgb(20, 86, 240)",
    "function-info-content-hover": "rgb(51, 109, 244)",
    "function-info-content-loading": "rgb(148, 180, 255)",
    "function-info-content-pressed": "rgb(4, 66, 210)",
    "function-info-fill-default": "rgb(20, 86, 240)",
    "function-info-fill-hover": "rgb(51, 109, 244)",
    "function-info-fill-loading": "rgb(148, 180, 255)",
    "function-info-fill-pressed": "rgb(4, 66, 210)",
    "function-info-fill-solid-01": "rgb(240, 244, 255)",
    "function-info-fill-solid-02": "rgb(224, 233, 255)",
    "function-info-fill-solid-03": "rgb(194, 212, 255)",
    "function-info-fill-transparent-01": "rgba(20, 86, 240, 0.1)",
    "function-info-fill-transparent-02": "rgba(20, 86, 240, 0.15)",
    "function-info-fill-transparent-03": "rgba(20, 86, 240, 0.2)",
    "function-info-on-info-fill": "rgb(255, 255, 255)",
    "function-success-100": "rgb(208, 245, 206)",
    "function-success-200": "rgb(149, 229, 153)",
    "function-success-300": "rgb(92, 209, 104)",
    "function-success-350": "rgb(53, 189, 75)",
    "function-success-400": "rgb(50, 166, 69)",
    "function-success-50": "rgb(228, 250, 225)",
    "function-success-500": "rgb(37, 136, 50)",
    "function-success-600": "rgb(26, 117, 38)",
    "function-success-700": "rgb(11, 96, 23)",
    "function-success-800": "rgb(4, 67, 12)",
    "function-success-900": "rgb(2, 44, 7)",
    "function-success-content-default": "rgb(50, 166, 69)",
    "function-success-content-hover": "rgb(53, 189, 75)",
    "function-success-content-loading": "rgb(92, 209, 104)",
    "function-success-content-pressed": "rgb(37, 136, 50)",
    "function-success-fill-default": "rgb(53, 189, 75)",
    "function-success-fill-hover": "rgb(92, 209, 104)",
    "function-success-fill-loading": "rgb(92, 209, 104)",
    "function-success-fill-pressed": "rgb(50, 166, 69)",
    "function-success-fill-solid-01": "rgb(228, 250, 225)",
    "function-success-fill-solid-02": "rgb(208, 245, 206)",
    "function-success-fill-solid-03": "rgb(149, 229, 153)",
    "function-success-fill-transparent-01": "rgba(53, 189, 75, 0.1)",
    "function-success-fill-transparent-02": "rgba(53, 189, 75, 0.15)",
    "function-success-fill-transparent-03": "rgba(53, 189, 75, 0.2)",
    "function-success-on-success-fill": "rgb(255, 255, 255)",
    "function-warning-100": "rgb(254, 231, 205)",
    "function-warning-200": "rgb(254, 196, 139)",
    "function-warning-300": "rgb(255, 157, 76)",
    "function-warning-350": "rgb(255, 129, 26)",
    "function-warning-400": "rgb(237, 109, 12)",
    "function-warning-50": "rgb(255, 243, 229)",
    "function-warning-500": "rgb(194, 87, 5)",
    "function-warning-600": "rgb(164, 73, 4)",
    "function-warning-700": "rgb(133, 58, 5)",
    "function-warning-800": "rgb(100, 43, 2)",
    "function-warning-900": "rgb(59, 26, 2)",
    "function-warning-content-default": "rgb(237, 109, 12)",
    "function-warning-content-hover": "rgb(255, 129, 26)",
    "function-warning-content-loading": "rgb(255, 157, 76)",
    "function-warning-content-pressed": "rgb(194, 87, 5)",
    "function-warning-fill-default": "rgb(255, 129, 26)",
    "function-warning-fill-hover": "rgb(255, 157, 76)",
    "function-warning-fill-loading": "rgb(255, 157, 76)",
    "function-warning-fill-pressed": "rgb(237, 109, 12)",
    "function-warning-fill-solid-01": "rgb(255, 243, 229)",
    "function-warning-fill-solid-02": "rgb(254, 231, 205)",
    "function-warning-fill-solid-03": "rgb(254, 196, 139)",
    "function-warning-fill-transparent-01": "rgba(237, 109, 12, 0.1)",
    "function-warning-fill-transparent-02": "rgba(237, 109, 12, 0.15)",
    "function-warning-fill-transparent-03": "rgba(237, 109, 12, 0.2)",
    "function-warning-on-warning-fill": "rgb(255, 255, 255)",
    "gradient-blue": "linear-gradient(90deg, rgb(80, 131, 251) 0%, rgb(51, 109, 244) 100%)",
    "gradient-carmine": "linear-gradient(90deg, rgb(223, 88, 165) 0%, rgb(204, 57, 140) 100%)",
    "gradient-green": "linear-gradient(90deg, rgb(92, 209, 104) 0%, rgb(53, 189, 75) 100%)",
    "gradient-indigo": "linear-gradient(90deg, rgb(117, 125, 240) 0%, rgb(91, 101, 245) 100%)",
    "gradient-lime": "linear-gradient(90deg, rgb(200, 221, 95) 0%, rgb(162, 193, 11) 100%)",
    "gradient-orange": "linear-gradient(90deg, rgb(255, 157, 76) 0%, rgb(255, 129, 26) 100%)",
    "gradient-purple": "linear-gradient(90deg, rgb(159, 111, 241) 0%, rgb(141, 85, 237) 100%)",
    "gradient-red": "linear-gradient(90deg, rgb(255, 117, 112) 0%, rgb(245, 74, 69) 100%)",
    "gradient-turquoise": "linear-gradient(90deg, rgb(111, 232, 216) 0%, rgb(51, 214, 192) 100%)",
    "gradient-violet": "linear-gradient(90deg, rgb(222, 129, 222) 0%, rgb(207, 94, 207) 100%)",
    "gradient-wathet": "linear-gradient(90deg, rgb(62, 195, 247) 0%, rgb(37, 176, 231) 100%)",
    "gradient-yellow": "linear-gradient(90deg, rgb(255, 198, 10) 0%, rgb(217, 153, 4) 100%)",
    "icon-disabled": "rgb(187, 191, 196)",
    "icon-n1": "rgb(43, 47, 54)",
    "icon-n2": "rgb(100, 106, 115)",
    "icon-n3": "rgb(143, 149, 158)",
    "illustration-blue-a": "rgb(0, 34, 112)",
    "illustration-blue-b": "rgb(0, 34, 112)",
    "illustration-blue-c": "rgb(0, 34, 112)",
    "illustration-blue-d": "rgb(0, 34, 112)",
    "illustration-blue-e": "rgb(51, 109, 244)",
    "illustration-neutral-a": "rgb(255, 255, 255)",
    "illustration-neutral-b": "rgb(255, 255, 255)",
    "illustration-neutral-c": "rgba(187, 191, 196, 0.45)",
    "illustration-neutral-d": "rgb(143, 149, 158)",
    "illustration-orange": "rgb(255, 129, 26)",
    "illustration-red": "rgb(245, 74, 69)",
    "illustration-static-black": "rgb(0, 0, 0)",
    "illustration-static-white": "rgb(255, 255, 255)",
    "illustration-turquoise": "rgb(51, 214, 192)",
    "illustration-wathet": "rgb(62, 195, 247)",
    "illustration-yellow": "rgb(255, 198, 10)",
    "line-border-card": "rgb(222, 224, 227)",
    "line-border-component": "rgb(208, 211, 214)",
    "line-divider-default": "rgba(31, 35, 41, 0.15)",
    "line-divider-module": "rgba(31, 35, 41, 0.15)",
    "primary-content-default": "rgb(20, 86, 240)",
    "primary-content-hover": "rgb(51, 109, 244)",
    "primary-content-loading": "rgb(148, 180, 255)",
    "primary-content-pressed": "rgb(4, 66, 210)",
    "primary-fill-default": "rgb(20, 86, 240)",
    "primary-fill-hover": "rgb(51, 109, 244)",
    "primary-fill-loading": "rgb(148, 180, 255)",
    "primary-fill-pressed": "rgb(4, 66, 210)",
    "primary-fill-solid-01": "rgb(240, 244, 255)",
    "primary-fill-solid-02": "rgb(224, 233, 255)",
    "primary-fill-solid-03": "rgb(194, 212, 255)",
    "primary-fill-transparent-01": "rgba(20, 86, 240, 0.1)",
    "primary-fill-transparent-02": "rgba(20, 86, 240, 0.15)",
    "primary-fill-transparent-03": "rgba(20, 86, 240, 0.2)",
    "primary-on-primary-fill": "rgb(255, 255, 255)",
    "primary-pri-100": "rgb(224, 233, 255)",
    "primary-pri-200": "rgb(194, 212, 255)",
    "primary-pri-300": "rgb(148, 180, 255)",
    "primary-pri-350": "rgb(122, 162, 255)",
    "primary-pri-400": "rgb(80, 131, 251)",
    "primary-pri-50": "rgb(240, 244, 255)",
    "primary-pri-500": "rgb(51, 109, 244)",
    "primary-pri-600": "rgb(20, 86, 240)",
    "primary-pri-700": "rgb(4, 66, 210)",
    "primary-pri-800": "rgb(0, 47, 158)",
    "primary-pri-900": "rgb(0, 34, 112)",
    "shadow-default": "rgb(31, 35, 41)",
    "shadow-default-lg": "rgba(31, 35, 41, 0.08)",
    "shadow-default-md": "rgba(31, 35, 41, 0.1)",
    "shadow-default-sm": "rgba(31, 35, 41, 0.12)",
    "shadow-lg-down": "0px 6px 24px 0px rgba(31, 35, 41, 0.08)",
    "shadow-lg-left": "-6px 0px 24px 0px rgba(31, 35, 41, 0.08)",
    "shadow-lg-right": "6px 0px 24px 0px rgba(31, 35, 41, 0.08)",
    "shadow-lg-up": "0px -6px 24px 0px rgba(31, 35, 41, 0.08)",
    "shadow-md-down": "0px 4px 8px 0px rgba(31, 35, 41, 0.1)",
    "shadow-md-left": "-4px 0px 8px 0px rgba(31, 35, 41, 0.1)",
    "shadow-md-right": "4px 0px 8px 0px rgba(31, 35, 41, 0.1)",
    "shadow-md-up": "0px -4px 8px 0px rgba(31, 35, 41, 0.1)",
    "shadow-pri": "rgb(20, 86, 240)",
    "shadow-pri-lg": "rgba(20, 86, 240, 0.24)",
    "shadow-pri-lg-down": "0px 6px 24px 0px rgba(20, 86, 240, 0.24)",
    "shadow-pri-md": "rgba(20, 86, 240, 0.24)",
    "shadow-pri-md-down": "0px 4px 8px 0px rgba(20, 86, 240, 0.24)",
    "shadow-s1-down": "0px 1px 2px -2px rgba(31, 35, 41, 0.02), 0px 2px 4px 0px rgba(31, 35, 41, 0.02), 0px 2px 8px 2px rgba(31, 35, 41, 0.02)",
    "shadow-s1-down-pri": "0px 1px 2px -2px rgba(20, 86, 240, 0.12), 0px 2px 4px 0px rgba(20, 86, 240, 0.04), 0px 2px 8px 2px rgba(20, 86, 240, 0.02)",
    "shadow-s1-left": "-1px 0px 2px -2px rgba(31, 35, 41, 0.02), -2px 0px 4px 0px rgba(31, 35, 41, 0.02), -2px 0px 8px 2px rgba(31, 35, 41, 0.02)",
    "shadow-s1-right": "1px 0px 2px -2px rgba(31, 35, 41, 0.02), 2px 0px 4px 0px rgba(31, 35, 41, 0.02), 2px 0px 8px 2px rgba(31, 35, 41, 0.02)",
    "shadow-s1-up": "0px -1px 2px -2px rgba(31, 35, 41, 0.02), 0px -2px 4px 0px rgba(31, 35, 41, 0.02), 0px -2px 8px 2px rgba(31, 35, 41, 0.02)",
    "shadow-s2-down": "0px 4px 16px 4px rgba(31, 35, 41, 0.03), 0px 4px 8px 0px rgba(31, 35, 41, 0.02), 0px 2px 4px -4px rgba(31, 35, 41, 0.02)",
    "shadow-s2-down-pri": "0px 2px 4px -4px rgba(20, 86, 240, 0.12), 0px 4px 8px 0px rgba(20, 86, 240, 0.04), 0px 4px 16px 4px rgba(20, 86, 240, 0.03)",
    "shadow-s2-left": "-4px 0px 16px 4px rgba(31, 35, 41, 0.03), -4px 0px 8px 0px rgba(31, 35, 41, 0.02), -2px 0px 4px -4px rgba(31, 35, 41, 0.02)",
    "shadow-s2-right": "4px 0px 16px 4px rgba(31, 35, 41, 0.03), 4px 0px 8px 0px rgba(31, 35, 41, 0.02), 2px 0px 4px -4px rgba(31, 35, 41, 0.02)",
    "shadow-s2-up": "0px -4px 16px 4px rgba(31, 35, 41, 0.03), 0px -4px 8px 0px rgba(31, 35, 41, 0.02), 0px -2px 4px -4px rgba(31, 35, 41, 0.02)",
    "shadow-s3-down": "0px 6px 18px 6px rgba(31, 35, 41, 0.03), 0px 3px 6px -6px rgba(31, 35, 41, 0.05), 0px 4px 8px 0px rgba(31, 35, 41, 0.03)",
    "shadow-s3-down-pri": "0px 3px 6px -6px rgba(20, 86, 240, 0.14), 0px 4px 8px 0px rgba(20, 86, 240, 0.06), 0px 6px 18px 6px rgba(20, 86, 240, 0.04)",
    "shadow-s3-left": "-6px 0px 18px 6px rgba(31, 35, 41, 0.03), -3px 0px 6px -6px rgba(31, 35, 41, 0.05), -4px 0px 8px 0px rgba(31, 35, 41, 0.03)",
    "shadow-s3-right": "6px 0px 18px 6px rgba(31, 35, 41, 0.03), 3px 0px 6px -6px rgba(31, 35, 41, 0.05), 4px 0px 8px 0px rgba(31, 35, 41, 0.03)",
    "shadow-s3-up": "0px -6px 18px 6px rgba(31, 35, 41, 0.03), 0px -3px 6px -6px rgba(31, 35, 41, 0.05), 0px -4px 8px 0px rgba(31, 35, 41, 0.03)",
    "shadow-s4-down": "0px 8px 24px 8px rgba(31, 35, 41, 0.04), 0px 6px 12px 0px rgba(31, 35, 41, 0.04), 0px 4px 8px -8px rgba(31, 35, 41, 0.06)",
    "shadow-s4-down-pri": "0px 4px 8px -4px rgba(20, 86, 240, 0.16), 0px 6px 12px 0px rgba(20, 86, 240, 0.08), 0px 8px 24px 8px rgba(20, 86, 240, 0.06)",
    "shadow-s4-left": "-8px 0px 24px 8px rgba(31, 35, 41, 0.04), -6px 0px 12px 0px rgba(31, 35, 41, 0.04), -4px 0px 8px -8px rgba(31, 35, 41, 0.06)",
    "shadow-s4-right": "8px 0px 24px 8px rgba(31, 35, 41, 0.04), 6px 0px 12px 0px rgba(31, 35, 41, 0.04), 4px 0px 8px -8px rgba(31, 35, 41, 0.06)",
    "shadow-s4-up": "0px -8px 24px 8px rgba(31, 35, 41, 0.04), 0px -6px 12px 0px rgba(31, 35, 41, 0.04), 0px -4px 8px -8px rgba(31, 35, 41, 0.06)",
    "shadow-s5-down": "0px 10px 36px 10px rgba(31, 35, 41, 0.04), 0px 8px 24px 0px rgba(31, 35, 41, 0.04), 0px 6px 12px -10px rgba(31, 35, 41, 0.06)",
    "shadow-s5-down-pri": "0px 10px 12px -10px rgba(20, 86, 240, 0.18), 0px 8px 24px 0px rgba(20, 86, 240, 0.1), 0px 10px 36px 10px rgba(20, 86, 240, 0.06)",
    "shadow-s5-left": "-10px 0px 36px 10px rgba(31, 35, 41, 0.04), -8px 0px 24px 0px rgba(31, 35, 41, 0.04), -6px 0px 12px -10px rgba(31, 35, 41, 0.06)",
    "shadow-s5-right": "10px 0px 36px 10px rgba(31, 35, 41, 0.04), 8px 0px 24px 0px rgba(31, 35, 41, 0.04), 6px 0px 12px -10px rgba(31, 35, 41, 0.06)",
    "shadow-s5-up": "0px -10px 36px 10px rgba(31, 35, 41, 0.04), 0px -8px 24px 0px rgba(31, 35, 41, 0.04), 0px -6px 12px -10px rgba(31, 35, 41, 0.06)",
    "shadow-sm-down": "0px 2px 4px 0px rgba(31, 35, 41, 0.12)",
    "shadow-sm-left": "-2px 0px 4px 0px rgba(31, 35, 41, 0.12)",
    "shadow-sm-right": "2px 0px 4px 0px rgba(31, 35, 41, 0.12)",
    "shadow-sm-up": "0px -2px 4px 0px rgba(31, 35, 41, 0.12)",
    "static-black": "rgb(0, 0, 0)",
    "static-black-10": "rgba(0, 0, 0, 0.1)",
    "static-black-15": "rgba(0, 0, 0, 0.15)",
    "static-black-20": "rgba(0, 0, 0, 0.2)",
    "static-black-30": "rgba(0, 0, 0, 0.3)",
    "static-black-40": "rgba(0, 0, 0, 0.4)",
    "static-black-5": "rgba(0, 0, 0, 0.05)",
    "static-black-50": "rgba(0, 0, 0, 0.5)",
    "static-black-60": "rgba(0, 0, 0, 0.6)",
    "static-black-70": "rgba(0, 0, 0, 0.7)",
    "static-black-80": "rgba(0, 0, 0, 0.8)",
    "static-black-90": "rgba(0, 0, 0, 0.9)",
    "static-white": "rgb(255, 255, 255)",
    "static-white-10": "rgba(255, 255, 255, 0.1)",
    "static-white-15": "rgba(255, 255, 255, 0.15)",
    "static-white-20": "rgba(255, 255, 255, 0.2)",
    "static-white-30": "rgba(255, 255, 255, 0.3)",
    "static-white-40": "rgba(255, 255, 255, 0.4)",
    "static-white-5": "rgba(255, 255, 255, 0.05)",
    "static-white-50": "rgba(255, 255, 255, 0.5)",
    "static-white-60": "rgba(255, 255, 255, 0.6)",
    "static-white-70": "rgba(255, 255, 255, 0.7)",
    "static-white-80": "rgba(255, 255, 255, 0.8)",
    "static-white-90": "rgba(255, 255, 255, 0.9)",
    "static-white-hover": "rgba(255, 255, 255, 0.1)",
    "static-white-pressed": "rgba(255, 255, 255, 0.2)",
    "text-caption": "rgb(100, 106, 115)",
    "text-disabled": "rgb(187, 191, 196)",
    "text-link-disabled": "rgb(187, 191, 196)",
    "text-link-hover": "rgb(51, 109, 244)",
    "text-link-loading": "rgb(148, 180, 255)",
    "text-link-normal": "rgb(20, 86, 240)",
    "text-link-pressed": "rgb(4, 66, 210)",
    "text-placeholder": "rgb(143, 149, 158)",
    "text-title": "rgb(31, 35, 41)"
  }), {
    "AI-cursor-raw": "71, 82, 230",
    "AI-icon-in-button-raw": "71, 82, 230",
    "B100-raw": "224, 233, 255",
    "B200-raw": "194, 212, 255",
    "B300-raw": "148, 180, 255",
    "B350-raw": "122, 162, 255",
    "B400-raw": "80, 131, 251",
    "B500-raw": "51, 109, 244",
    "B50-raw": "240, 244, 255",
    "B600-raw": "20, 86, 240",
    "B700-raw": "4, 66, 210",
    "B800-raw": "0, 47, 158",
    "B900-raw": "0, 34, 112",
    "C100-raw": "254, 226, 242",
    "C200-raw": "248, 196, 225",
    "C300-raw": "245, 152, 204",
    "C350-raw": "235, 120, 184",
    "C400-raw": "223, 88, 165",
    "C500-raw": "204, 57, 140",
    "C50-raw": "254, 240, 248",
    "C600-raw": "184, 40, 121",
    "C700-raw": "157, 21, 98",
    "C800-raw": "115, 7, 68",
    "C900-raw": "85, 12, 53",
    "G100-raw": "208, 245, 206",
    "G200-raw": "149, 229, 153",
    "G300-raw": "92, 209, 104",
    "G350-raw": "53, 189, 75",
    "G400-raw": "50, 166, 69",
    "G500-raw": "37, 136, 50",
    "G50-raw": "228, 250, 225",
    "G600-raw": "26, 117, 38",
    "G700-raw": "11, 96, 23",
    "G800-raw": "4, 67, 12",
    "G900-raw": "2, 44, 7",
    "I100-raw": "233, 234, 251",
    "I200-raw": "204, 207, 249",
    "I300-raw": "171, 176, 242",
    "I350-raw": "149, 155, 238",
    "I400-raw": "117, 125, 240",
    "I500-raw": "91, 101, 245",
    "I50-raw": "242, 243, 253",
    "I600-raw": "71, 82, 230",
    "I700-raw": "51, 61, 204",
    "I800-raw": "30, 39, 164",
    "I900-raw": "21, 27, 112",
    "L100-raw": "227, 240, 163",
    "L200-raw": "200, 221, 95",
    "L300-raw": "162, 193, 11",
    "L350-raw": "145, 173, 0",
    "L400-raw": "123, 146, 7",
    "L500-raw": "107, 127, 6",
    "L50-raw": "242, 248, 211",
    "L600-raw": "92, 109, 8",
    "L700-raw": "74, 88, 4",
    "L800-raw": "51, 61, 0",
    "L900-raw": "38, 46, 0",
    "N00-raw": "255, 255, 255",
    "N1000-raw": "0, 0, 0",
    "N100-raw": "242, 243, 245",
    "N200-raw": "239, 240, 241",
    "N300-raw": "222, 224, 227",
    "N350-raw": "208, 211, 214",
    "N400-raw": "187, 191, 196",
    "N500-raw": "143, 149, 158",
    "N50-raw": "245, 246, 247",
    "N600-raw": "100, 106, 115",
    "N650-raw": "81, 86, 93",
    "N700-raw": "55, 60, 67",
    "N800-raw": "43, 47, 54",
    "N900-raw": "31, 35, 41",
    "N950-raw": "15, 17, 20",
    "O100-raw": "254, 231, 205",
    "O200-raw": "254, 196, 139",
    "O300-raw": "255, 157, 76",
    "O350-raw": "255, 129, 26",
    "O400-raw": "237, 109, 12",
    "O500-raw": "194, 87, 5",
    "O50-raw": "255, 243, 229",
    "O600-raw": "164, 73, 4",
    "O700-raw": "133, 58, 5",
    "O800-raw": "100, 43, 2",
    "O900-raw": "59, 26, 2",
    "P100-raw": "239, 230, 254",
    "P200-raw": "220, 201, 253",
    "P300-raw": "200, 169, 252",
    "P350-raw": "183, 145, 250",
    "P400-raw": "159, 111, 241",
    "P500-raw": "141, 85, 237",
    "P50-raw": "245, 240, 254",
    "P600-raw": "122, 53, 240",
    "P700-raw": "97, 31, 214",
    "P800-raw": "72, 17, 166",
    "P900-raw": "47, 0, 128",
    "R100-raw": "254, 227, 226",
    "R200-raw": "253, 198, 196",
    "R300-raw": "248, 158, 155",
    "R350-raw": "255, 117, 112",
    "R400-raw": "245, 74, 69",
    "R500-raw": "226, 46, 40",
    "R50-raw": "254, 240, 240",
    "R600-raw": "192, 42, 38",
    "R700-raw": "161, 28, 23",
    "R800-raw": "116, 25, 21",
    "R900-raw": "89, 6, 3",
    "S100-raw": "255, 252, 163",
    "S200-raw": "255, 246, 122",
    "S300-raw": "255, 242, 88",
    "S350-raw": "255, 233, 40",
    "S400-raw": "229, 206, 0",
    "S500-raw": "194, 168, 0",
    "S50-raw": "255, 255, 219",
    "S600-raw": "143, 124, 0",
    "S700-raw": "92, 79, 0",
    "S800-raw": "66, 55, 0",
    "S900-raw": "44, 37, 2",
    "T100-raw": "196, 242, 236",
    "T200-raw": "111, 232, 216",
    "T300-raw": "51, 214, 192",
    "T350-raw": "45, 190, 171",
    "T400-raw": "16, 168, 147",
    "T500-raw": "15, 133, 117",
    "T50-raw": "226, 248, 245",
    "T600-raw": "6, 112, 98",
    "T700-raw": "4, 93, 81",
    "T800-raw": "3, 68, 59",
    "T900-raw": "2, 49, 42",
    "V100-raw": "249, 226, 249",
    "V200-raw": "243, 196, 243",
    "V300-raw": "229, 156, 229",
    "V350-raw": "222, 129, 222",
    "V400-raw": "207, 94, 207",
    "V500-raw": "191, 61, 191",
    "V50-raw": "252, 238, 252",
    "V600-raw": "166, 48, 166",
    "V700-raw": "135, 39, 135",
    "V800-raw": "106, 17, 106",
    "V900-raw": "82, 0, 82",
    "Vnext-bg-content-header-raw": "252, 252, 252",
    "Vnext-bg-sub-navigation-raw": "245, 245, 245",
    "Vnext-bg-thirdly-navigation-raw": "252, 252, 252",
    "W100-raw": "202, 239, 252",
    "W200-raw": "151, 220, 252",
    "W300-raw": "62, 195, 247",
    "W350-raw": "37, 176, 231",
    "W400-raw": "18, 149, 202",
    "W500-raw": "4, 127, 176",
    "W50-raw": "231, 248, 254",
    "W600-raw": "7, 106, 148",
    "W700-raw": "15, 88, 122",
    "W800-raw": "6, 65, 92",
    "W900-raw": "7, 43, 61",
    "Y100-raw": "250, 237, 194",
    "Y200-raw": "252, 223, 126",
    "Y300-raw": "250, 211, 85",
    "Y350-raw": "255, 198, 10",
    "Y400-raw": "217, 153, 4",
    "Y500-raw": "173, 122, 3",
    "Y50-raw": "251, 244, 223",
    "Y600-raw": "134, 91, 3",
    "Y700-raw": "111, 74, 1",
    "Y800-raw": "87, 54, 1",
    "Y900-raw": "56, 34, 1",
    "bg-base-raw": "242, 243, 245",
    "bg-body-overlay-raw": "245, 246, 247",
    "bg-body-raw": "255, 255, 255",
    "bg-content-base-raw": "248, 249, 250",
    "bg-filler-raw": "239, 240, 241",
    "bg-float-base-raw": "242, 243, 245",
    "bg-float-overlay-raw": "245, 246, 247",
    "bg-float-raw": "255, 255, 255",
    "bg-mask-raw": "0, 0, 0",
    "bg-pricolor-raw": "80, 131, 251",
    "bg-sub-navigation-raw": "245, 246, 247",
    "bg-tips-raw": "31, 35, 41",
    "colorful-blue-raw": "51, 109, 244",
    "colorful-carmine-raw": "223, 88, 165",
    "colorful-green-raw": "53, 189, 75",
    "colorful-indigo-raw": "91, 101, 245",
    "colorful-lime-raw": "145, 173, 0",
    "colorful-neutral-raw": "143, 149, 158",
    "colorful-orange-raw": "255, 129, 26",
    "colorful-purple-raw": "141, 85, 237",
    "colorful-red-raw": "245, 74, 69",
    "colorful-sunflower-raw": "255, 233, 40",
    "colorful-turquoise-raw": "45, 190, 171",
    "colorful-violet-raw": "191, 61, 191",
    "colorful-wathet-raw": "37, 176, 231",
    "colorful-yellow-raw": "255, 198, 10",
    "fill-disabled-raw": "187, 191, 196",
    "function-danger-100-raw": "254, 227, 226",
    "function-danger-200-raw": "253, 198, 196",
    "function-danger-300-raw": "248, 158, 155",
    "function-danger-350-raw": "255, 117, 112",
    "function-danger-400-raw": "245, 74, 69",
    "function-danger-500-raw": "226, 46, 40",
    "function-danger-50-raw": "254, 240, 240",
    "function-danger-600-raw": "192, 42, 38",
    "function-danger-700-raw": "161, 28, 23",
    "function-danger-800-raw": "116, 25, 21",
    "function-danger-900-raw": "89, 6, 3",
    "function-danger-content-default-raw": "245, 74, 69",
    "function-danger-content-hover-raw": "255, 117, 112",
    "function-danger-content-loading-raw": "248, 158, 155",
    "function-danger-content-pressed-raw": "226, 46, 40",
    "function-danger-fill-default-raw": "245, 74, 69",
    "function-danger-fill-hover-raw": "255, 117, 112",
    "function-danger-fill-loading-raw": "248, 158, 155",
    "function-danger-fill-pressed-raw": "226, 46, 40",
    "function-danger-fill-solid-01-raw": "254, 240, 240",
    "function-danger-fill-solid-02-raw": "254, 227, 226",
    "function-danger-fill-solid-03-raw": "253, 198, 196",
    "function-danger-on-danger-fill-raw": "255, 255, 255",
    "function-info-100-raw": "224, 233, 255",
    "function-info-200-raw": "194, 212, 255",
    "function-info-300-raw": "148, 180, 255",
    "function-info-350-raw": "122, 162, 255",
    "function-info-400-raw": "80, 131, 251",
    "function-info-500-raw": "51, 109, 244",
    "function-info-50-raw": "240, 244, 255",
    "function-info-600-raw": "20, 86, 240",
    "function-info-700-raw": "4, 66, 210",
    "function-info-800-raw": "0, 47, 158",
    "function-info-900-raw": "0, 34, 112",
    "function-info-content-default-raw": "20, 86, 240",
    "function-info-content-hover-raw": "51, 109, 244",
    "function-info-content-loading-raw": "148, 180, 255",
    "function-info-content-pressed-raw": "4, 66, 210",
    "function-info-fill-default-raw": "20, 86, 240",
    "function-info-fill-hover-raw": "51, 109, 244",
    "function-info-fill-loading-raw": "148, 180, 255",
    "function-info-fill-pressed-raw": "4, 66, 210",
    "function-info-fill-solid-01-raw": "240, 244, 255",
    "function-info-fill-solid-02-raw": "224, 233, 255",
    "function-info-fill-solid-03-raw": "194, 212, 255",
    "function-info-on-info-fill-raw": "255, 255, 255",
    "function-success-100-raw": "208, 245, 206",
    "function-success-200-raw": "149, 229, 153",
    "function-success-300-raw": "92, 209, 104",
    "function-success-350-raw": "53, 189, 75",
    "function-success-400-raw": "50, 166, 69",
    "function-success-500-raw": "37, 136, 50",
    "function-success-50-raw": "228, 250, 225",
    "function-success-600-raw": "26, 117, 38",
    "function-success-700-raw": "11, 96, 23",
    "function-success-800-raw": "4, 67, 12",
    "function-success-900-raw": "2, 44, 7",
    "function-success-content-default-raw": "50, 166, 69",
    "function-success-content-hover-raw": "53, 189, 75",
    "function-success-content-loading-raw": "92, 209, 104",
    "function-success-content-pressed-raw": "37, 136, 50",
    "function-success-fill-default-raw": "53, 189, 75",
    "function-success-fill-hover-raw": "92, 209, 104",
    "function-success-fill-loading-raw": "92, 209, 104",
    "function-success-fill-pressed-raw": "50, 166, 69",
    "function-success-fill-solid-01-raw": "228, 250, 225",
    "function-success-fill-solid-02-raw": "208, 245, 206",
    "function-success-fill-solid-03-raw": "149, 229, 153",
    "function-success-on-success-fill-raw": "255, 255, 255",
    "function-warning-100-raw": "254, 231, 205",
    "function-warning-200-raw": "254, 196, 139",
    "function-warning-300-raw": "255, 157, 76",
    "function-warning-350-raw": "255, 129, 26",
    "function-warning-400-raw": "237, 109, 12",
    "function-warning-500-raw": "194, 87, 5",
    "function-warning-50-raw": "255, 243, 229",
    "function-warning-600-raw": "164, 73, 4",
    "function-warning-700-raw": "133, 58, 5",
    "function-warning-800-raw": "100, 43, 2",
    "function-warning-900-raw": "59, 26, 2",
    "function-warning-content-default-raw": "237, 109, 12",
    "function-warning-content-hover-raw": "255, 129, 26",
    "function-warning-content-loading-raw": "255, 157, 76",
    "function-warning-content-pressed-raw": "194, 87, 5",
    "function-warning-fill-default-raw": "255, 129, 26",
    "function-warning-fill-hover-raw": "255, 157, 76",
    "function-warning-fill-loading-raw": "255, 157, 76",
    "function-warning-fill-pressed-raw": "237, 109, 12",
    "function-warning-fill-solid-01-raw": "255, 243, 229",
    "function-warning-fill-solid-02-raw": "254, 231, 205",
    "function-warning-fill-solid-03-raw": "254, 196, 139",
    "function-warning-on-warning-fill-raw": "255, 255, 255",
    "icon-disabled-raw": "187, 191, 196",
    "icon-n1-raw": "43, 47, 54",
    "icon-n2-raw": "100, 106, 115",
    "icon-n3-raw": "143, 149, 158",
    "illustration-blue-a-raw": "0, 34, 112",
    "illustration-blue-b-raw": "0, 34, 112",
    "illustration-blue-c-raw": "0, 34, 112",
    "illustration-blue-d-raw": "0, 34, 112",
    "illustration-blue-e-raw": "51, 109, 244",
    "illustration-neutral-a-raw": "255, 255, 255",
    "illustration-neutral-b-raw": "255, 255, 255",
    "illustration-neutral-d-raw": "143, 149, 158",
    "illustration-orange-raw": "255, 129, 26",
    "illustration-red-raw": "245, 74, 69",
    "illustration-static-black-raw": "0, 0, 0",
    "illustration-static-white-raw": "255, 255, 255",
    "illustration-turquoise-raw": "51, 214, 192",
    "illustration-wathet-raw": "62, 195, 247",
    "illustration-yellow-raw": "255, 198, 10",
    "line-border-card-raw": "222, 224, 227",
    "line-border-component-raw": "208, 211, 214",
    "primary-content-default-raw": "20, 86, 240",
    "primary-content-hover-raw": "51, 109, 244",
    "primary-content-loading-raw": "148, 180, 255",
    "primary-content-pressed-raw": "4, 66, 210",
    "primary-fill-default-raw": "20, 86, 240",
    "primary-fill-hover-raw": "51, 109, 244",
    "primary-fill-loading-raw": "148, 180, 255",
    "primary-fill-pressed-raw": "4, 66, 210",
    "primary-fill-solid-01-raw": "240, 244, 255",
    "primary-fill-solid-02-raw": "224, 233, 255",
    "primary-fill-solid-03-raw": "194, 212, 255",
    "primary-on-primary-fill-raw": "255, 255, 255",
    "primary-pri-100-raw": "224, 233, 255",
    "primary-pri-200-raw": "194, 212, 255",
    "primary-pri-300-raw": "148, 180, 255",
    "primary-pri-350-raw": "122, 162, 255",
    "primary-pri-400-raw": "80, 131, 251",
    "primary-pri-500-raw": "51, 109, 244",
    "primary-pri-50-raw": "240, 244, 255",
    "primary-pri-600-raw": "20, 86, 240",
    "primary-pri-700-raw": "4, 66, 210",
    "primary-pri-800-raw": "0, 47, 158",
    "primary-pri-900-raw": "0, 34, 112",
    "shadow-default-raw": "31, 35, 41",
    "shadow-pri-raw": "20, 86, 240",
    "static-black-raw": "0, 0, 0",
    "static-white-hover-raw": "255, 255, 255",
    "static-white-pressed-raw": "255, 255, 255",
    "static-white-raw": "255, 255, 255",
    "text-caption-raw": "100, 106, 115",
    "text-disabled-raw": "187, 191, 196",
    "text-link-disabled-raw": "187, 191, 196",
    "text-link-hover-raw": "51, 109, 244",
    "text-link-loading-raw": "148, 180, 255",
    "text-link-normal-raw": "20, 86, 240",
    "text-link-pressed-raw": "4, 66, 210",
    "text-placeholder-raw": "143, 149, 158",
    "text-title-raw": "31, 35, 41"
  }), {
    "udtoken-block-view-inline-bg-nopermission": "rgba(31, 35, 41, 0.1)",
    "udtoken-block-view-inline-bg-other": "rgba(148, 180, 255, 0.18)",
    "udtoken-block-view-inline-bg-self": "#1456f0",
    "udtoken-btn-ghost-bg": "rgba(255, 255, 255, 0)",
    "udtoken-btn-pri-text-disabled": "#ffffff",
    "udtoken-btn-se-bg-danger-focus": "#fee3e2",
    "udtoken-btn-se-bg-danger-hover": "#fee3e2",
    "udtoken-btn-se-bg-danger-pressed": "#fdc6c4",
    "udtoken-btn-se-bg-neutral-focus": "#f2f3f5",
    "udtoken-btn-se-bg-neutral-hover": "#f2f3f5",
    "udtoken-btn-se-bg-neutral-pressed": "#eff0f1",
    "udtoken-btn-se-bg-pri-focus": "#e0e9ff",
    "udtoken-btn-se-bg-pri-hover": "#e0e9ff",
    "udtoken-btn-se-bg-pri-pressed": "#c2d4ff",
    "udtoken-btn-selected-bg-danger-hover": "#fee3e2",
    "udtoken-btn-selected-bg-danger-normal": "#fef0f0",
    "udtoken-btn-selected-bg-danger-press": "#fdc6c4",
    "udtoken-btn-selected-bg-neutral-hover": "rgba(31, 35, 41, 0.1)",
    "udtoken-btn-selected-bg-neutral-normal": "rgba(31, 35, 41, 0.06)",
    "udtoken-btn-selected-bg-neutral-press": "rgba(31, 35, 41, 0.14)",
    "udtoken-btn-selected-bg-success-hover": "#d0f5ce",
    "udtoken-btn-selected-bg-success-normal": "#e4fae1",
    "udtoken-btn-selected-bg-success-press": "#95e599",
    "udtoken-btn-selected-border-neutral": "#bbbfc4",
    "udtoken-btn-selected-text-danger": "#c02a26",
    "udtoken-btn-selected-text-success": "#258832",
    "udtoken-btn-text-bg-danger-focus": "rgba(226, 46, 40, 0.1)",
    "udtoken-btn-text-bg-danger-hover": "rgba(226, 46, 40, 0.1)",
    "udtoken-btn-text-bg-danger-pressed": "rgba(226, 46, 40, 0.2)",
    "udtoken-btn-text-bg-neutral-focus": "rgba(31, 35, 41, 0.1)",
    "udtoken-btn-text-bg-neutral-hover": "rgba(31, 35, 41, 0.1)",
    "udtoken-btn-text-bg-neutral-pressed": "rgba(31, 35, 41, 0.2)",
    "udtoken-btn-text-bg-pri-focus": "rgba(20, 86, 240, 0.1)",
    "udtoken-btn-text-bg-pri-hover": "rgba(20, 86, 240, 0.1)",
    "udtoken-btn-text-bg-pri-pressed": "rgba(20, 86, 240, 0.2)",
    "udtoken-colorpicker-blue": "#336df4",
    "udtoken-colorpicker-carmine": "#df58a5",
    "udtoken-colorpicker-green": "#35bd4b",
    "udtoken-colorpicker-indigo": "#4752e6",
    "udtoken-colorpicker-lime": "#a2c10b",
    "udtoken-colorpicker-neutral": "#8f959e",
    "udtoken-colorpicker-orange": "#ff811a",
    "udtoken-colorpicker-purple": "#7a35f0",
    "udtoken-colorpicker-red": "#f54a45",
    "udtoken-colorpicker-sunflower": "#fff67a",
    "udtoken-colorpicker-turquoise": "#33d6c0",
    "udtoken-colorpicker-violet": "#bf3dbf",
    "udtoken-colorpicker-wathet": "#3ec3f7",
    "udtoken-colorpicker-yellow": "#ffc60a",
    "udtoken-component-outlined-bg": "#ffffff",
    "udtoken-component-text-disabled-loading": "#8f959e",
    "udtoken-dropdown-button-divider": "rgba(255, 255, 255, 0.5)",
    "udtoken-imageview-bg-mask": "rgba(0, 0, 0, 0.55)",
    "udtoken-imageview-icondisabled": "rgba(255, 255, 255, 0.6)",
    "udtoken-imageview-tooltips-bg": "#505050",
    "udtoken-input-bg-disabled": "#eff0f1",
    "udtoken-message-card-bg-blue": "#e0e9ff",
    "udtoken-message-card-bg-carmine": "#fee2f2",
    "udtoken-message-card-bg-green": "#d0f5ce",
    "udtoken-message-card-bg-indigo": "#e9eafb",
    "udtoken-message-card-bg-light-neutral": "#f2f3f5",
    "udtoken-message-card-bg-lime": "#e3f0a3",
    "udtoken-message-card-bg-mask-general": "rgba(255, 255, 255, 0.5)",
    "udtoken-message-card-bg-mask-special": "rgba(255, 255, 255, 0.2)",
    "udtoken-message-card-bg-neutral": "#8f959e",
    "udtoken-message-card-bg-orange": "#fee7cd",
    "udtoken-message-card-bg-purple": "#efe6fe",
    "udtoken-message-card-bg-red": "#fee3e2",
    "udtoken-message-card-bg-turquoise": "#c4f2ec",
    "udtoken-message-card-bg-violet": "#f9e2f9",
    "udtoken-message-card-bg-wathet": "#caeffc",
    "udtoken-message-card-bg-yellow": "#faedc2",
    "udtoken-message-card-text-blue": "#1456f0",
    "udtoken-message-card-text-carmine": "#b82879",
    "udtoken-message-card-text-green": "#1a7526",
    "udtoken-message-card-text-indigo": "#4752e6",
    "udtoken-message-card-text-lime": "#5c6d08",
    "udtoken-message-card-text-neutral": "#ffffff",
    "udtoken-message-card-text-orange": "#c25705",
    "udtoken-message-card-text-purple": "#7a35f0",
    "udtoken-message-card-text-red": "#c02a26",
    "udtoken-message-card-text-turquoise": "#067062",
    "udtoken-message-card-text-violet": "#a630a6",
    "udtoken-message-card-text-wathet": "#076a94",
    "udtoken-message-card-text-yellow": "#ad7a03",
    "udtoken-navigation-bar-resize-handle": "#4599ff",
    "udtoken-navigation-bar-tab-bg-black": "#1c2435",
    "udtoken-navigation-bar-tab-bg-blue": "#1b429c",
    "udtoken-navigation-bar-tab-bg-gray": "#e5e5e9",
    "udtoken-progress-bg": "#dee0e3",
    "udtoken-quote-bar-bg": "#bbbfc4",
    "udtoken-reaction-bg-grey": "rgba(31, 35, 41, 0.05)",
    "udtoken-reaction-bg-grey-float": "rgba(31, 35, 41, 0.05)",
    "udtoken-skeleton-bg": "rgba(31, 35, 41, 0.08)",
    "udtoken-skeleton-fg": "rgba(31, 35, 41, 0.05)",
    "udtoken-sliding-block-bg-disabled-loading": "#ffffff",
    "udtoken-steps-bg-hover": "rgba(20, 86, 240, 0.1)",
    "udtoken-switch-handle-disabled": "rgba(255, 255, 255, 0.6)",
    "udtoken-tab-pri-bg": "rgba(20, 86, 240, 0.2)",
    "udtoken-tab-pri-text": "#1456f0",
    "udtoken-tab-se-bg-unselected": "rgba(31, 35, 41, 0.1)",
    "udtoken-table-bg-expand": "#f2f3f5",
    "udtoken-table-bg-grey": "#f5f6f7",
    "udtoken-table-bg-head": "#f2f3f5",
    "udtoken-table-bg-hover": "#eff0f1",
    "udtoken-table-bg-pressed": "#dee0e3",
    "udtoken-table-bg-selected": "#f0f4ff",
    "udtoken-tag-bg-blue": "rgba(20, 86, 240, 0.2)",
    "udtoken-tag-bg-blue-default": "rgba(20, 86, 240, 0.12)",
    "udtoken-tag-bg-blue-hover": "rgba(20, 86, 240, 0.3)",
    "udtoken-tag-bg-blue-pressed": "rgba(20, 86, 240, 0.2)",
    "udtoken-tag-bg-blue-solid": "#c2d4ff",
    "udtoken-tag-bg-carmine": "rgba(204, 57, 140, 0.2)",
    "udtoken-tag-bg-carmine-hover": "rgba(204, 57, 140, 0.3)",
    "udtoken-tag-bg-carmine-solid": "#f8c4e1",
    "udtoken-tag-bg-green": "rgba(53, 189, 75, 0.2)",
    "udtoken-tag-bg-green-hover": "rgba(53, 189, 75, 0.3)",
    "udtoken-tag-bg-green-solid": "#95e599",
    "udtoken-tag-bg-indigo": "rgba(91, 101, 245, 0.2)",
    "udtoken-tag-bg-indigo-hover": "rgba(91, 101, 245, 0.3)",
    "udtoken-tag-bg-indigo-solid": "#cccff9",
    "udtoken-tag-bg-lime": "rgba(145, 173, 0, 0.2)",
    "udtoken-tag-bg-lime-hover": "rgba(145, 173, 0, 0.3)",
    "udtoken-tag-bg-lime-solid": "#c8dd5f",
    "udtoken-tag-bg-orange": "rgba(255, 129, 26, 0.15)",
    "udtoken-tag-bg-orange-hover": "rgba(255, 129, 26, 0.3)",
    "udtoken-tag-bg-orange-pressed": "rgba(255, 129, 26, 0.35)",
    "udtoken-tag-bg-orange-solid": "#fec48b",
    "udtoken-tag-bg-purple": "rgba(141, 85, 237, 0.2)",
    "udtoken-tag-bg-purple-hover": "rgba(141, 85, 237, 0.3)",
    "udtoken-tag-bg-purple-solid": "#dcc9fd",
    "udtoken-tag-bg-red": "rgba(245, 74, 69, 0.2)",
    "udtoken-tag-bg-red-hover": "rgba(245, 74, 69, 0.3)",
    "udtoken-tag-bg-red-solid": "#fdc6c4",
    "udtoken-tag-bg-turquoise": "rgba(51, 214, 192, 0.2)",
    "udtoken-tag-bg-turquoise-hover": "rgba(51, 214, 192, 0.3)",
    "udtoken-tag-bg-turquoise-solid": "#6fe8d8",
    "udtoken-tag-bg-violet": "rgba(191, 61, 191, 0.2)",
    "udtoken-tag-bg-violet-hover": "rgba(191, 61, 191, 0.3)",
    "udtoken-tag-bg-violet-solid": "#f3c4f3",
    "udtoken-tag-bg-wathet": "rgba(62, 195, 247, 0.2)",
    "udtoken-tag-bg-wathet-hover": "rgba(62, 195, 247, 0.3)",
    "udtoken-tag-bg-wathet-solid": "#97dcfc",
    "udtoken-tag-bg-yellow": "rgba(250, 211, 85, 0.2)",
    "udtoken-tag-bg-yellow-hover": "rgba(250, 211, 85, 0.4)",
    "udtoken-tag-bg-yellow-solid": "#fcdf7e",
    "udtoken-tag-close-blue-disabled": "rgba(20, 86, 240, 0.8)",
    "udtoken-tag-close-blue-hover": "#1456f0",
    "udtoken-tag-close-blue-normal": "rgba(20, 86, 240, 0.6)",
    "udtoken-tag-close-blue-pressed": "rgba(20, 86, 240, 0.8)",
    "udtoken-tag-close-orange-disabled": "rgba(255, 129, 26, 0.3)",
    "udtoken-tag-close-orange-hover": "#ff811a",
    "udtoken-tag-close-orange-normal": "rgba(255, 129, 26, 0.6)",
    "udtoken-tag-close-orange-pressed": "rgba(255, 129, 26, 0.8)",
    "udtoken-tag-neutral-bg-inverse": "#8f959e",
    "udtoken-tag-neutral-bg-inverse-opacity": "rgba(31, 35, 41, 0.4)",
    "udtoken-tag-neutral-bg-normal": "rgba(31, 35, 41, 0.1)",
    "udtoken-tag-neutral-bg-normal-hover": "rgba(31, 35, 41, 0.15)",
    "udtoken-tag-neutral-bg-normal-pressed": "rgba(31, 35, 41, 0.2)",
    "udtoken-tag-neutral-bg-solid": "#eff0f1",
    "udtoken-tag-neutral-close-disabled": "rgba(31, 35, 41, 0.3)",
    "udtoken-tag-neutral-close-hover": "#1f2329",
    "udtoken-tag-neutral-close-normal": "rgba(31, 35, 41, 0.6)",
    "udtoken-tag-neutral-close-pressed": "rgba(31, 35, 41, 0.8)",
    "udtoken-tag-neutral-text-inverse": "#ffffff",
    "udtoken-tag-neutral-text-inverse-opacity": "#ffffff",
    "udtoken-tag-neutral-text-normal": "#646a73",
    "udtoken-tag-neutral-text-solid": "#646a73",
    "udtoken-tag-state-blue-light": "#336df4",
    "udtoken-tag-state-green-light": "#258832",
    "udtoken-tag-state-grey-light": "#8f959e",
    "udtoken-tag-state-orange-light": "#ff811a",
    "udtoken-tag-state-purple-light": "#8d55ed",
    "udtoken-tag-state-red-light": "#e22e28",
    "udtoken-tag-text-blue": "#002270",
    "udtoken-tag-text-carmine": "#550c35",
    "udtoken-tag-text-green": "#022c07",
    "udtoken-tag-text-indigo": "#151b70",
    "udtoken-tag-text-lime": "#262e00",
    "udtoken-tag-text-orange": "#3b1a02",
    "udtoken-tag-text-purple": "#2f0080",
    "udtoken-tag-text-red": "#590603",
    "udtoken-tag-text-s-blue": "#1456f0",
    "udtoken-tag-text-s-carmine": "#b82879",
    "udtoken-tag-text-s-green": "#1a7526",
    "udtoken-tag-text-s-indigo": "#4752e6",
    "udtoken-tag-text-s-lime": "#5c6d08",
    "udtoken-tag-text-s-orange": "#c25705",
    "udtoken-tag-text-s-purple": "#7a35f0",
    "udtoken-tag-text-s-red": "#c02a26",
    "udtoken-tag-text-s-turquoise": "#067062",
    "udtoken-tag-text-s-violet": "#a630a6",
    "udtoken-tag-text-s-wathet": "#076a94",
    "udtoken-tag-text-s-yellow": "#ad7a03",
    "udtoken-tag-text-turquoise": "#02312a",
    "udtoken-tag-text-violet": "#520052",
    "udtoken-tag-text-wathet": "#072b3d",
    "udtoken-tag-text-yellow": "#382201",
    "udtoken-upload-bg-error": "#eff0f1",
    "udtoken-upload-mask-img": "rgba(31, 35, 41, 0.4)"
  }), {
    "ccmtoken-color-bitable-brand": "#a45eeb",
    "ccmtoken-message-card-bg-body-embed-tips": "#f5f6f7"
  }), {
    "ccmtoken-color-bitable-brand-raw": "164, 94, 235",
    "ccmtoken-message-card-bg-body-embed-tips-raw": "245, 246, 247"
  }), {
    "ccmtoken-doc-block-bg-area": "rgba(100, 106, 115, 0.05)",
    "ccmtoken-doc-block-bg-hover": "rgba(20, 86, 240, 0.1)",
    "ccmtoken-doc-block-bg-selected": "rgba(20, 86, 240, 0.18)",
    "ccmtoken-doc-blockbackground-blue": "#e1eaff",
    "ccmtoken-doc-blockbackground-blue-solid": "#bacefd",
    "ccmtoken-doc-blockbackground-gray": "#dee0e3",
    "ccmtoken-doc-blockbackground-gray-solid": "#bbbfc4",
    "ccmtoken-doc-blockbackground-green": "#d9f5d6",
    "ccmtoken-doc-blockbackground-green-solid": "#b7edb1",
    "ccmtoken-doc-blockbackground-netural": "#f2f3f5",
    "ccmtoken-doc-blockbackground-netural-solid": "#eff0f1",
    "ccmtoken-doc-blockbackground-orange": "#feead2",
    "ccmtoken-doc-blockbackground-orange-solid": "#fed4a4",
    "ccmtoken-doc-blockbackground-purple": "#ece2fe",
    "ccmtoken-doc-blockbackground-purple-solid": "#cdb2fa",
    "ccmtoken-doc-blockbackground-red": "#fde2e2",
    "ccmtoken-doc-blockbackground-red-solid": "#fbbfbc",
    "ccmtoken-doc-blockbackground-yellow": "#ffffcc",
    "ccmtoken-doc-blockbackground-yellow-solid": "#fffca3",
    "ccmtoken-doc-bottom-like-bg-hover": "#ffd13b",
    "ccmtoken-doc-bottom-like-bg-nomal": "#ffc60a",
    "ccmtoken-doc-button-bg-blue": "#e1eaff",
    "ccmtoken-doc-button-bg-blue-solid": "#3370ff",
    "ccmtoken-doc-button-bg-carmine": "#fdddef",
    "ccmtoken-doc-button-bg-carmine-solid": "#f14ba9",
    "ccmtoken-doc-button-bg-green": "#d9f5d6",
    "ccmtoken-doc-button-bg-green-solid": "#62d256",
    "ccmtoken-doc-button-bg-neutral": "#eff0f1",
    "ccmtoken-doc-button-bg-neutral-solid": "#2b2f36",
    "ccmtoken-doc-button-bg-orange": "#feead2",
    "ccmtoken-doc-button-bg-orange-solid": "#ffa53d",
    "ccmtoken-doc-button-bg-purple": "#ece2fe",
    "ccmtoken-doc-button-bg-purple-solid": "#935af6",
    "ccmtoken-doc-button-bg-red": "#fde2e2",
    "ccmtoken-doc-button-bg-red-solid": "#f76964",
    "ccmtoken-doc-button-bg-wathet": "#d9f3fd",
    "ccmtoken-doc-button-bg-wathet-solid": "#14c0ff",
    "ccmtoken-doc-calloutborder-blue": "#82a7fc",
    "ccmtoken-doc-calloutborder-green": "#8ee085",
    "ccmtoken-doc-calloutborder-orange": "#ffba6b",
    "ccmtoken-doc-calloutborder-purple": "#ad82f7",
    "ccmtoken-doc-calloutborder-red": "#f98e8b",
    "ccmtoken-doc-calloutborder-yellow": "#fff67a",
    "ccmtoken-doc-calloutborder-yellow-solid": "#fff258",
    "ccmtoken-doc-highlightcolor-bg-blue-soft": "#f0f4ff",
    "ccmtoken-doc-highlightcolor-bg-blue-solid": "#e1eaff",
    "ccmtoken-doc-highlightcolor-bg-green-soft": "#f0fbef",
    "ccmtoken-doc-highlightcolor-bg-green-solid": "#d9f5d6",
    "ccmtoken-doc-highlightcolor-bg-neutral-light": "rgba(245, 246, 247, 0.9)",
    "ccmtoken-doc-highlightcolor-bg-orange-soft": "#fff5eb",
    "ccmtoken-doc-highlightcolor-bg-orange-solid": "#feead2",
    "ccmtoken-doc-highlightcolor-bg-purple-soft": "#f6f1fe",
    "ccmtoken-doc-highlightcolor-bg-purple-solid": "#ece2fe",
    "ccmtoken-doc-highlightcolor-bg-red-soft": "#fef1f1",
    "ccmtoken-doc-highlightcolor-bg-red-solid": "#fde2e2",
    "ccmtoken-doc-highlightcolor-bg-sunflower-soft": "#fefff0",
    "ccmtoken-doc-highlightcolor-bg-sunflower-solid": "#ffffcc",
    "ccmtoken-doc-highlightcolor-blue-soft": "rgba(186, 206, 253, 0.7)",
    "ccmtoken-doc-highlightcolor-blue-solid": "rgba(78, 131, 253, 0.55)",
    "ccmtoken-doc-highlightcolor-callout-neutral-light": "#f5f6f7",
    "ccmtoken-doc-highlightcolor-green-soft": "rgba(183, 237, 177, 0.8)",
    "ccmtoken-doc-highlightcolor-green-solid": "#62d256",
    "ccmtoken-doc-highlightcolor-neutral-light": "#f2f3f5",
    "ccmtoken-doc-highlightcolor-neutral-soft": "rgba(222, 224, 227, 0.8)",
    "ccmtoken-doc-highlightcolor-neutral-solid": "#bbbfc4",
    "ccmtoken-doc-highlightcolor-orange-soft": "rgba(254, 212, 164, 0.8)",
    "ccmtoken-doc-highlightcolor-orange-solid": "#ffa53d",
    "ccmtoken-doc-highlightcolor-purple-soft": "rgba(205, 178, 250, 0.7)",
    "ccmtoken-doc-highlightcolor-purple-solid": "rgba(147, 90, 246, 0.55)",
    "ccmtoken-doc-highlightcolor-red-soft": "#fbbfbc",
    "ccmtoken-doc-highlightcolor-red-solid": "#f76964",
    "ccmtoken-doc-highlightcolor-sunflower-soft": "rgba(255, 246, 122, 0.8)",
    "ccmtoken-doc-highlightcolor-sunflower-solid": "#ffe928",
    "ccmtoken-doc-picture-toolbar-bg": "rgba(0, 0, 0, 0.7)",
    "ccmtoken-doc-tableheader-bg-hover": "#dee0e3",
    "ccmtoken-doc-textcolor-blue": "#245bdb",
    "ccmtoken-doc-textcolor-callout-gray": "#1f2329",
    "ccmtoken-doc-textcolor-gray": "#8f959e",
    "ccmtoken-doc-textcolor-green": "#2ea121",
    "ccmtoken-doc-textcolor-orange": "#de7802",
    "ccmtoken-doc-textcolor-purple": "#6425d0",
    "ccmtoken-doc-textcolor-red": "#d83931",
    "ccmtoken-doc-textcolor-yellow": "#dc9b04",
    "ccmtoken-doc-toolbar-btn-bg-blue-hover": "rgba(20, 86, 240, 0.2)",
    "ccmtoken-doc-toolbar-btn-bg-blue-pressed": "rgba(20, 86, 240, 0.3)"
  }), {
    "ccmtoken-doc-block-bg-area-raw": "100, 106, 115",
    "ccmtoken-doc-block-bg-hover-raw": "20, 86, 240",
    "ccmtoken-doc-block-bg-selected-raw": "20, 86, 240",
    "ccmtoken-doc-blockbackground-blue-raw": "225, 234, 255",
    "ccmtoken-doc-blockbackground-blue-solid-raw": "186, 206, 253",
    "ccmtoken-doc-blockbackground-gray-raw": "222, 224, 227",
    "ccmtoken-doc-blockbackground-gray-solid-raw": "187, 191, 196",
    "ccmtoken-doc-blockbackground-green-raw": "217, 245, 214",
    "ccmtoken-doc-blockbackground-green-solid-raw": "183, 237, 177",
    "ccmtoken-doc-blockbackground-netural-raw": "242, 243, 245",
    "ccmtoken-doc-blockbackground-netural-solid-raw": "239, 240, 241",
    "ccmtoken-doc-blockbackground-orange-raw": "254, 234, 210",
    "ccmtoken-doc-blockbackground-orange-solid-raw": "254, 212, 164",
    "ccmtoken-doc-blockbackground-purple-raw": "236, 226, 254",
    "ccmtoken-doc-blockbackground-purple-solid-raw": "205, 178, 250",
    "ccmtoken-doc-blockbackground-red-raw": "253, 226, 226",
    "ccmtoken-doc-blockbackground-red-solid-raw": "251, 191, 188",
    "ccmtoken-doc-blockbackground-yellow-raw": "255, 255, 204",
    "ccmtoken-doc-blockbackground-yellow-solid-raw": "255, 252, 163",
    "ccmtoken-doc-bottom-like-bg-hover-raw": "255, 209, 59",
    "ccmtoken-doc-bottom-like-bg-nomal-raw": "255, 198, 10",
    "ccmtoken-doc-button-bg-blue-raw": "225, 234, 255",
    "ccmtoken-doc-button-bg-blue-solid-raw": "51, 112, 255",
    "ccmtoken-doc-button-bg-carmine-raw": "253, 221, 239",
    "ccmtoken-doc-button-bg-carmine-solid-raw": "241, 75, 169",
    "ccmtoken-doc-button-bg-green-raw": "217, 245, 214",
    "ccmtoken-doc-button-bg-green-solid-raw": "98, 210, 86",
    "ccmtoken-doc-button-bg-neutral-raw": "239, 240, 241",
    "ccmtoken-doc-button-bg-neutral-solid-raw": "43, 47, 54",
    "ccmtoken-doc-button-bg-orange-raw": "254, 234, 210",
    "ccmtoken-doc-button-bg-orange-solid-raw": "255, 165, 61",
    "ccmtoken-doc-button-bg-purple-raw": "236, 226, 254",
    "ccmtoken-doc-button-bg-purple-solid-raw": "147, 90, 246",
    "ccmtoken-doc-button-bg-red-raw": "253, 226, 226",
    "ccmtoken-doc-button-bg-red-solid-raw": "247, 105, 100",
    "ccmtoken-doc-button-bg-wathet-raw": "217, 243, 253",
    "ccmtoken-doc-button-bg-wathet-solid-raw": "20, 192, 255",
    "ccmtoken-doc-calloutborder-blue-raw": "130, 167, 252",
    "ccmtoken-doc-calloutborder-green-raw": "142, 224, 133",
    "ccmtoken-doc-calloutborder-orange-raw": "255, 186, 107",
    "ccmtoken-doc-calloutborder-purple-raw": "173, 130, 247",
    "ccmtoken-doc-calloutborder-red-raw": "249, 142, 139",
    "ccmtoken-doc-calloutborder-yellow-raw": "255, 246, 122",
    "ccmtoken-doc-calloutborder-yellow-solid-raw": "255, 242, 88",
    "ccmtoken-doc-highlightcolor-bg-blue-soft-raw": "240, 244, 255",
    "ccmtoken-doc-highlightcolor-bg-blue-solid-raw": "225, 234, 255",
    "ccmtoken-doc-highlightcolor-bg-green-soft-raw": "240, 251, 239",
    "ccmtoken-doc-highlightcolor-bg-green-solid-raw": "217, 245, 214",
    "ccmtoken-doc-highlightcolor-bg-neutral-light-raw": "245, 246, 247",
    "ccmtoken-doc-highlightcolor-bg-orange-soft-raw": "255, 245, 235",
    "ccmtoken-doc-highlightcolor-bg-orange-solid-raw": "254, 234, 210",
    "ccmtoken-doc-highlightcolor-bg-purple-soft-raw": "246, 241, 254",
    "ccmtoken-doc-highlightcolor-bg-purple-solid-raw": "236, 226, 254",
    "ccmtoken-doc-highlightcolor-bg-red-soft-raw": "254, 241, 241",
    "ccmtoken-doc-highlightcolor-bg-red-solid-raw": "253, 226, 226",
    "ccmtoken-doc-highlightcolor-bg-sunflower-soft-raw": "254, 255, 240",
    "ccmtoken-doc-highlightcolor-bg-sunflower-solid-raw": "255, 255, 204",
    "ccmtoken-doc-highlightcolor-blue-soft-raw": "186, 206, 253",
    "ccmtoken-doc-highlightcolor-blue-solid-raw": "78, 131, 253",
    "ccmtoken-doc-highlightcolor-callout-neutral-light-raw": "245, 246, 247",
    "ccmtoken-doc-highlightcolor-green-soft-raw": "183, 237, 177",
    "ccmtoken-doc-highlightcolor-green-solid-raw": "98, 210, 86",
    "ccmtoken-doc-highlightcolor-neutral-light-raw": "242, 243, 245",
    "ccmtoken-doc-highlightcolor-neutral-soft-raw": "222, 224, 227",
    "ccmtoken-doc-highlightcolor-neutral-solid-raw": "187, 191, 196",
    "ccmtoken-doc-highlightcolor-orange-soft-raw": "254, 212, 164",
    "ccmtoken-doc-highlightcolor-orange-solid-raw": "255, 165, 61",
    "ccmtoken-doc-highlightcolor-purple-soft-raw": "205, 178, 250",
    "ccmtoken-doc-highlightcolor-purple-solid-raw": "147, 90, 246",
    "ccmtoken-doc-highlightcolor-red-soft-raw": "251, 191, 188",
    "ccmtoken-doc-highlightcolor-red-solid-raw": "247, 105, 100",
    "ccmtoken-doc-highlightcolor-sunflower-soft-raw": "255, 246, 122",
    "ccmtoken-doc-highlightcolor-sunflower-solid-raw": "255, 233, 40",
    "ccmtoken-doc-picture-toolbar-bg-raw": "0, 0, 0",
    "ccmtoken-doc-tableheader-bg-hover-raw": "222, 224, 227",
    "ccmtoken-doc-textcolor-blue-raw": "36, 91, 219",
    "ccmtoken-doc-textcolor-callout-gray-raw": "31, 35, 41",
    "ccmtoken-doc-textcolor-gray-raw": "143, 149, 158",
    "ccmtoken-doc-textcolor-green-raw": "46, 161, 33",
    "ccmtoken-doc-textcolor-orange-raw": "222, 120, 2",
    "ccmtoken-doc-textcolor-purple-raw": "100, 37, 208",
    "ccmtoken-doc-textcolor-red-raw": "216, 57, 49",
    "ccmtoken-doc-textcolor-yellow-raw": "220, 155, 4",
    "ccmtoken-doc-toolbar-btn-bg-blue-hover-raw": "20, 86, 240",
    "ccmtoken-doc-toolbar-btn-bg-blue-pressed-raw": "20, 86, 240"
  }), {
    "ccmtoken-sheet-minichart-bright-purple": "#6147ff",
    "ccmtoken-sheet-minichart-bright-yellow": "#ffba0a",
    "ccmtoken-sheet-minichart-fresh-cyan": "#24c4cd",
    "ccmtoken-sheet-minichart-fresh-yellow": "#ffd13a",
    "ccmtoken-sheet-minichart-pastel-blue": "#4c92ad",
    "ccmtoken-sheet-minichart-pastel-yellow": "#e5c100",
    "ccmtoken-sheet-minichart-professional-blue": "#3860ae",
    "ccmtoken-sheet-minichart-professional-red": "#b9221e"
  }), {
    "ccmtoken-sheet-minichart-bright-purple-raw": "97, 71, 255",
    "ccmtoken-sheet-minichart-bright-yellow-raw": "255, 186, 10",
    "ccmtoken-sheet-minichart-fresh-cyan-raw": "36, 196, 205",
    "ccmtoken-sheet-minichart-fresh-yellow-raw": "255, 209, 58",
    "ccmtoken-sheet-minichart-pastel-blue-raw": "76, 146, 173",
    "ccmtoken-sheet-minichart-pastel-yellow-raw": "229, 193, 0",
    "ccmtoken-sheet-minichart-professional-blue-raw": "56, 96, 174",
    "ccmtoken-sheet-minichart-professional-red-raw": "185, 34, 30"
  }), {
    "ccmtoken-mindnote-highlightcolor-blue": "#c2d4ff",
    "ccmtoken-mindnote-highlightcolor-carmine": "#fee2f2",
    "ccmtoken-mindnote-highlightcolor-lime": "#e3f0a3",
    "ccmtoken-mindnote-highlightcolor-neutral": "#dee0e3",
    "ccmtoken-mindnote-highlightcolor-red": "#fdc6c4",
    "ccmtoken-mindnote-highlightcolor-turquoise": "#c4f2ec",
    "ccmtoken-mindnote-highlightcolor-yellow": "#faedc2"
  }), {
    "ccmtoken-mindnote-highlightcolor-blue-raw": "194, 212, 255",
    "ccmtoken-mindnote-highlightcolor-carmine-raw": "254, 226, 242",
    "ccmtoken-mindnote-highlightcolor-lime-raw": "227, 240, 163",
    "ccmtoken-mindnote-highlightcolor-neutral-raw": "222, 224, 227",
    "ccmtoken-mindnote-highlightcolor-red-raw": "253, 198, 196",
    "ccmtoken-mindnote-highlightcolor-turquoise-raw": "196, 242, 236",
    "ccmtoken-mindnote-highlightcolor-yellow-raw": "250, 237, 194"
  }), {
    "ccmtoken-message-card-bg-body-thumbnail": "#ffffff",
    "ccmtoken-message-card-paragraph-bg-body": "#f5f6f7",
    "ccmtoken-message-card-paragraph-bg-body-thumbnail": "#f5f6f7"
  }), {
    "ccmtoken-tag-bg-carmine": "rgba(204, 57, 140, 0.1)",
    "ccmtoken-wiki-multipleselect-toolbar-bg": "#ffffff"
  }), {
    "ccmtoken-tag-bg-carmine-raw": "204, 57, 140",
    "ccmtoken-wiki-multipleselect-toolbar-bg-raw": "255, 255, 255"
  }), {
    "ccmtoken-space-bg-commandbar": "rgba(255, 255, 255, 0.9)",
    "ccmtoken-space-storage-listitem-bg-hover": "#ededee",
    "ccmtoken-space-storage-listitem-bg-selected": "#eaf0fd"
  }), {
    "ccmtoken-space-bg-commandbar-raw": "255, 255, 255",
    "ccmtoken-space-storage-listitem-bg-hover-raw": "237, 237, 238",
    "ccmtoken-space-storage-listitem-bg-selected-raw": "234, 240, 253"
  }), {
    "B100-FG": "#e0e9ff",
    "B100-FG-raw": "224, 233, 255",
    "B100-BG": "#e0e9ff",
    "B100-BG-raw": "224, 233, 255",
    "B100-BD": "#e0e9ff",
    "B100-BD-raw": "224, 233, 255",
    "B200-FG": "#c2d4ff",
    "B200-FG-raw": "194, 212, 255",
    "B200-BG": "#c2d4ff",
    "B200-BG-raw": "194, 212, 255",
    "B200-BD": "#c2d4ff",
    "B200-BD-raw": "194, 212, 255",
    "B300-BG": "#94b4ff",
    "B300-BG-raw": "148, 180, 255",
    "B400-FG": "#5083fb",
    "B400-FG-raw": "80, 131, 251",
    "B400-BG": "#5083fb",
    "B400-BG-raw": "80, 131, 251",
    "B400-BD": "#5083fb",
    "B400-BD-raw": "80, 131, 251",
    "B50-FG": "#f0f4ff",
    "B50-FG-raw": "240, 244, 255",
    "B50-BG": "#f0f4ff",
    "B50-BG-raw": "240, 244, 255",
    "B50-BD": "#f0f4ff",
    "B50-BD-raw": "240, 244, 255",
    "B500-FG": "#336df4",
    "B500-FG-raw": "51, 109, 244",
    "B500-BG": "#336df4",
    "B500-BG-raw": "51, 109, 244",
    "B500-BD": "#336df4",
    "B500-BD-raw": "51, 109, 244",
    "B600-FG": "#1456f0",
    "B600-FG-raw": "20, 86, 240",
    "B600-BG": "#1456f0",
    "B600-BG-raw": "20, 86, 240",
    "B700-FG": "#0442d2",
    "B700-FG-raw": "4, 66, 210",
    "B700-BG": "#0442d2",
    "B700-BG-raw": "4, 66, 210",
    "B800-FG": "#002f9e",
    "B800-FG-raw": "0, 47, 158",
    "B900-FG": "#002270",
    "B900-FG-raw": "0, 34, 112",
    "C300-FG": "#f598cc",
    "C300-FG-raw": "245, 152, 204",
    "C300-BG": "#f598cc",
    "C300-BG-raw": "245, 152, 204",
    "C50-BG": "#fef0f8",
    "C50-BG-raw": "254, 240, 248",
    "C500-FG": "#cc398c",
    "C500-FG-raw": "204, 57, 140",
    "C600-FG": "#b82879",
    "C600-FG-raw": "184, 40, 121",
    "C700-FG": "#9d1562",
    "C700-FG-raw": "157, 21, 98",
    "C800-FG": "#730744",
    "C800-FG-raw": "115, 7, 68",
    "G100-FG": "#d0f5ce",
    "G100-FG-raw": "208, 245, 206",
    "G100-BG": "#d0f5ce",
    "G100-BG-raw": "208, 245, 206",
    "G100-BD": "#d0f5ce",
    "G100-BD-raw": "208, 245, 206",
    "G200-FG": "#95e599",
    "G200-FG-raw": "149, 229, 153",
    "G200-BG": "#95e599",
    "G200-BG-raw": "149, 229, 153",
    "G200-BD": "#95e599",
    "G200-BD-raw": "149, 229, 153",
    "G300-FG": "#5cd168",
    "G300-FG-raw": "92, 209, 104",
    "G300-BD": "#5cd168",
    "G300-BD-raw": "92, 209, 104",
    "G400-BG": "#32a645",
    "G400-BG-raw": "50, 166, 69",
    "G500-FG": "#258832",
    "G500-FG-raw": "37, 136, 50",
    "G500-BG": "#258832",
    "G500-BG-raw": "37, 136, 50",
    "G500-BD": "#258832",
    "G500-BD-raw": "37, 136, 50",
    "G600-FG": "#1a7526",
    "G600-FG-raw": "26, 117, 38",
    "G600-BG": "#1a7526",
    "G600-BG-raw": "26, 117, 38",
    "G700-FG": "#0b6017",
    "G700-FG-raw": "11, 96, 23",
    "G800-FG": "#04430c",
    "G800-FG-raw": "4, 67, 12",
    "G900-FG": "#022c07",
    "G900-FG-raw": "2, 44, 7",
    "I100-BG": "#e9eafb",
    "I100-BG-raw": "233, 234, 251",
    "I100-BD": "#e9eafb",
    "I100-BD-raw": "233, 234, 251",
    "I300-FG": "#abb0f2",
    "I300-FG-raw": "171, 176, 242",
    "I400-FG": "#757df0",
    "I400-FG-raw": "117, 125, 240",
    "I400-BG": "#757df0",
    "I400-BG-raw": "117, 125, 240",
    "I50-BG": "#f2f3fd",
    "I50-BG-raw": "242, 243, 253",
    "I500-FG": "#5b65f5",
    "I500-FG-raw": "91, 101, 245",
    "I500-BG": "#5b65f5",
    "I500-BG-raw": "91, 101, 245",
    "I500-BD": "#5b65f5",
    "I500-BD-raw": "91, 101, 245",
    "I600-FG": "#4752e6",
    "I600-FG-raw": "71, 82, 230",
    "I700-FG": "#333dcc",
    "I700-FG-raw": "51, 61, 204",
    "I900-FG": "#151b70",
    "I900-FG-raw": "21, 27, 112",
    "L300-FG": "#a2c10b",
    "L300-FG-raw": "162, 193, 11",
    "L600-FG": "#5c6d08",
    "L600-FG-raw": "92, 109, 8",
    "L700-FG": "#4a5804",
    "L700-FG-raw": "74, 88, 4",
    "L800-FG": "#333d00",
    "L800-FG-raw": "51, 61, 0",
    "N00-FG": "#ffffff",
    "N00-FG-raw": "255, 255, 255",
    "N00-BG": "#ffffff",
    "N00-BG-raw": "255, 255, 255",
    "N00-BD": "#ffffff",
    "N00-BD-raw": "255, 255, 255",
    "N100-FG": "#f2f3f5",
    "N100-FG-raw": "242, 243, 245",
    "N100-BG": "#f2f3f5",
    "N100-BG-raw": "242, 243, 245",
    "N100-BD": "#f2f3f5",
    "N100-BD-raw": "242, 243, 245",
    "N1000-FG": "#000000",
    "N1000-FG-raw": "0, 0, 0",
    "N1000-BG": "#000000",
    "N1000-BG-raw": "0, 0, 0",
    "N1000-BD": "#000000",
    "N1000-BD-raw": "0, 0, 0",
    "N200-FG": "#eff0f1",
    "N200-FG-raw": "239, 240, 241",
    "N200-BD": "#eff0f1",
    "N200-BD-raw": "239, 240, 241",
    "N300-FG": "#dee0e3",
    "N300-FG-raw": "222, 224, 227",
    "N300-BG": "#dee0e3",
    "N300-BG-raw": "222, 224, 227",
    "N400-FG": "#bbbfc4",
    "N400-FG-raw": "187, 191, 196",
    "N50-FG": "#f5f6f7",
    "N50-FG-raw": "245, 246, 247",
    "N50-BG": "#f5f6f7",
    "N50-BG-raw": "245, 246, 247",
    "N50-BD": "#f5f6f7",
    "N50-BD-raw": "245, 246, 247",
    "N500-FG": "#8f959e",
    "N500-FG-raw": "143, 149, 158",
    "N500-BG": "#8f959e",
    "N500-BG-raw": "143, 149, 158",
    "N500-BD": "#8f959e",
    "N500-BD-raw": "143, 149, 158",
    "N600-FG": "#646a73",
    "N600-FG-raw": "100, 106, 115",
    "N600-BG": "#646a73",
    "N600-BG-raw": "100, 106, 115",
    "N600-BD": "#646a73",
    "N600-BD-raw": "100, 106, 115",
    "N650-FG": "#51565d",
    "N650-FG-raw": "81, 86, 93",
    "N700-FG": "#373c43",
    "N700-FG-raw": "55, 60, 67",
    "N700-BG": "#373c43",
    "N700-BG-raw": "55, 60, 67",
    "N700-BD": "#373c43",
    "N700-BD-raw": "55, 60, 67",
    "N800-FG": "#2b2f36",
    "N800-FG-raw": "43, 47, 54",
    "N800-BG": "#2b2f36",
    "N800-BG-raw": "43, 47, 54",
    "N800-BD": "#2b2f36",
    "N800-BD-raw": "43, 47, 54",
    "N900-FG": "#1f2329",
    "N900-FG-raw": "31, 35, 41",
    "N900-BG": "#1f2329",
    "N900-BG-raw": "31, 35, 41",
    "N900-BD": "#1f2329",
    "N900-BD-raw": "31, 35, 41",
    "N950-FG": "#0f1114",
    "N950-FG-raw": "15, 17, 20",
    "N950-BG": "#0f1114",
    "N950-BG-raw": "15, 17, 20",
    "O100-FG": "#fee7cd",
    "O100-FG-raw": "254, 231, 205",
    "O100-BG": "#fee7cd",
    "O100-BG-raw": "254, 231, 205",
    "O200-FG": "#fec48b",
    "O200-FG-raw": "254, 196, 139",
    "O300-FG": "#ff9d4c",
    "O300-FG-raw": "255, 157, 76",
    "O300-BG": "#ff9d4c",
    "O300-BG-raw": "255, 157, 76",
    "O50-BG": "#fff3e5",
    "O50-BG-raw": "255, 243, 229",
    "O50-BD": "#fff3e5",
    "O50-BD-raw": "255, 243, 229",
    "O500-FG": "#c25705",
    "O500-FG-raw": "194, 87, 5",
    "O500-BG": "#c25705",
    "O500-BG-raw": "194, 87, 5",
    "O500-BD": "#c25705",
    "O500-BD-raw": "194, 87, 5",
    "O600-FG": "#a44904",
    "O600-FG-raw": "164, 73, 4",
    "O600-BG": "#a44904",
    "O600-BG-raw": "164, 73, 4",
    "O700-FG": "#853a05",
    "O700-FG-raw": "133, 58, 5",
    "O800-FG": "#642b02",
    "O800-FG-raw": "100, 43, 2",
    "P100-FG": "#efe6fe",
    "P100-FG-raw": "239, 230, 254",
    "P100-BD": "#efe6fe",
    "P100-BD-raw": "239, 230, 254",
    "P200-FG": "#dcc9fd",
    "P200-FG-raw": "220, 201, 253",
    "P300-FG": "#c8a9fc",
    "P300-FG-raw": "200, 169, 252",
    "P400-FG": "#9f6ff1",
    "P400-FG-raw": "159, 111, 241",
    "P50-BG": "#f5f0fe",
    "P50-BG-raw": "245, 240, 254",
    "P500-FG": "#8d55ed",
    "P500-FG-raw": "141, 85, 237",
    "P500-BG": "#8d55ed",
    "P500-BG-raw": "141, 85, 237",
    "P500-BD": "#8d55ed",
    "P500-BD-raw": "141, 85, 237",
    "P600-FG": "#7a35f0",
    "P600-FG-raw": "122, 53, 240",
    "P700-FG": "#611fd6",
    "P700-FG-raw": "97, 31, 214",
    "P800-FG": "#4811a6",
    "P800-FG-raw": "72, 17, 166",
    "P900-FG": "#2f0080",
    "P900-FG-raw": "47, 0, 128",
    "R100-FG": "#fee3e2",
    "R100-FG-raw": "254, 227, 226",
    "R100-BG": "#fee3e2",
    "R100-BG-raw": "254, 227, 226",
    "R200-FG": "#fdc6c4",
    "R200-FG-raw": "253, 198, 196",
    "R300-FG": "#f89e9b",
    "R300-FG-raw": "248, 158, 155",
    "R400-FG": "#f54a45",
    "R400-FG-raw": "245, 74, 69",
    "R400-BG": "#f54a45",
    "R400-BG-raw": "245, 74, 69",
    "R50-BG": "#fef0f0",
    "R50-BG-raw": "254, 240, 240",
    "R500-FG": "#e22e28",
    "R500-FG-raw": "226, 46, 40",
    "R500-BG": "#e22e28",
    "R500-BG-raw": "226, 46, 40",
    "R500-BD": "#e22e28",
    "R500-BD-raw": "226, 46, 40",
    "R600-FG": "#c02a26",
    "R600-FG-raw": "192, 42, 38",
    "R600-BG": "#c02a26",
    "R600-BG-raw": "192, 42, 38",
    "R600-BD": "#c02a26",
    "R600-BD-raw": "192, 42, 38",
    "R700-FG": "#a11c17",
    "R700-FG-raw": "161, 28, 23",
    "R800-FG": "#741915",
    "R800-FG-raw": "116, 25, 21",
    "R900-FG": "#590603",
    "R900-FG-raw": "89, 6, 3",
    "S100-FG": "#fffca3",
    "S100-FG-raw": "255, 252, 163",
    "S200-FG": "#fff67a",
    "S200-FG-raw": "255, 246, 122",
    "S300-FG": "#fff258",
    "S300-FG-raw": "255, 242, 88",
    "S300-BG": "#fff258",
    "S300-BG-raw": "255, 242, 88",
    "S400-FG": "#e5ce00",
    "S400-FG-raw": "229, 206, 0",
    "S50-FG": "#ffffdb",
    "S50-FG-raw": "255, 255, 219",
    "S600-FG": "#8f7c00",
    "S600-FG-raw": "143, 124, 0",
    "S700-FG": "#5c4f00",
    "S700-FG-raw": "92, 79, 0",
    "S800-FG": "#423700",
    "S800-FG-raw": "66, 55, 0",
    "S900-FG": "#2c2502",
    "S900-FG-raw": "44, 37, 2",
    "T100-FG": "#c4f2ec",
    "T100-FG-raw": "196, 242, 236",
    "T300-FG": "#33d6c0",
    "T300-FG-raw": "51, 214, 192",
    "T300-BG": "#33d6c0",
    "T300-BG-raw": "51, 214, 192",
    "T400-FG": "#10a893",
    "T400-FG-raw": "16, 168, 147",
    "T500-FG": "#0f8575",
    "T500-FG-raw": "15, 133, 117",
    "T600-FG": "#067062",
    "T600-FG-raw": "6, 112, 98",
    "T700-FG": "#045d51",
    "T700-FG-raw": "4, 93, 81",
    "T800-FG": "#03443b",
    "T800-FG-raw": "3, 68, 59",
    "V400-FG": "#cf5ecf",
    "V400-FG-raw": "207, 94, 207",
    "V500-FG": "#bf3dbf",
    "V500-FG-raw": "191, 61, 191",
    "V500-BG": "#bf3dbf",
    "V500-BG-raw": "191, 61, 191",
    "V600-FG": "#a630a6",
    "V600-FG-raw": "166, 48, 166",
    "V700-FG": "#872787",
    "V700-FG-raw": "135, 39, 135",
    "W100-FG": "#caeffc",
    "W100-FG-raw": "202, 239, 252",
    "W100-BG": "#caeffc",
    "W100-BG-raw": "202, 239, 252",
    "W200-FG": "#97dcfc",
    "W200-FG-raw": "151, 220, 252",
    "W300-FG": "#3ec3f7",
    "W300-FG-raw": "62, 195, 247",
    "W300-BG": "#3ec3f7",
    "W300-BG-raw": "62, 195, 247",
    "W400-FG": "#1295ca",
    "W400-FG-raw": "18, 149, 202",
    "W500-FG": "#047fb0",
    "W500-FG-raw": "4, 127, 176",
    "W600-FG": "#076a94",
    "W600-FG-raw": "7, 106, 148",
    "W600-BG": "#076a94",
    "W600-BG-raw": "7, 106, 148",
    "W700-FG": "#0f587a",
    "W700-FG-raw": "15, 88, 122",
    "W700-BG": "#0f587a",
    "W700-BG-raw": "15, 88, 122",
    "W700-BD": "#0f587a",
    "W700-BD-raw": "15, 88, 122",
    "W800-FG": "#06415c",
    "W800-FG-raw": "6, 65, 92",
    "Y100-FG": "#faedc2",
    "Y100-FG-raw": "250, 237, 194",
    "Y100-BG": "#faedc2",
    "Y100-BG-raw": "250, 237, 194",
    "Y300-FG": "#fad355",
    "Y300-FG-raw": "250, 211, 85",
    "Y300-BG": "#fad355",
    "Y300-BG-raw": "250, 211, 85",
    "Y300-BD": "#fad355",
    "Y300-BD-raw": "250, 211, 85",
    "Y400-FG": "#d99904",
    "Y400-FG-raw": "217, 153, 4",
    "Y400-BG": "#d99904",
    "Y400-BG-raw": "217, 153, 4",
    "Y50-FG": "#fbf4df",
    "Y50-FG-raw": "251, 244, 223",
    "Y500-FG": "#ad7a03",
    "Y500-FG-raw": "173, 122, 3",
    "Y500-BG": "#ad7a03",
    "Y500-BG-raw": "173, 122, 3",
    "Y600-FG": "#865b03",
    "Y600-FG-raw": "134, 91, 3",
    "Y700-FG": "#6f4a01",
    "Y700-FG-raw": "111, 74, 1",
    "Y800-FG": "#573601",
    "Y800-FG-raw": "87, 54, 1",
    "Y800-BG": "#573601",
    "Y800-BG-raw": "87, 54, 1",
    "Y900-FG": "#382201",
    "Y900-FG-raw": "56, 34, 1"
  });
  let nX = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, {
    "AI-cursor": "rgb(94, 104, 232)",
    "AI-dynamic-line": "conic-gradient(from 45deg, rgb(164, 61, 164) 0%, rgb(94, 104, 232) 33.33333333333333%, rgb(94, 104, 232) 66.66666666666666%, rgb(164, 61, 164) 100%)",
    "AI-icon-gradient": "linear-gradient(to right, rgb(123, 131, 247) 0%, rgb(140, 85, 236) 100%)",
    "AI-icon-in-button": "rgb(123, 131, 247)",
    "AI-loading": "linear-gradient(to right, rgb(123, 131, 247) 0%, rgb(164, 61, 164) 100%)",
    "AI-primary-content-default": "linear-gradient(to right, rgb(123, 131, 247) 0%, rgb(181, 74, 181) 100%)",
    "AI-primary-content-hover": "linear-gradient(to right, rgb(94, 104, 232) 0%, rgb(164, 61, 164) 100%)",
    "AI-primary-content-loading": "linear-gradient(to right, rgba(123, 131, 247, 0.6) 0%, rgba(181, 74, 181, 0.6) 100%)",
    "AI-primary-content-pressed": "linear-gradient(to right, rgb(148, 153, 247) 0%, rgb(214, 97, 214) 100%)",
    "AI-primary-fill-default": "linear-gradient(to right, rgb(94, 104, 232) 0%, rgb(139, 55, 139) 100%)",
    "AI-primary-fill-hover": "linear-gradient(to right, rgb(81, 90, 214) 0%, rgb(113, 40, 113) 100%)",
    "AI-primary-fill-loading": "linear-gradient(to right, rgba(94, 104, 232, 0.6) 0%, rgba(139, 55, 139, 0.6) 100%)",
    "AI-primary-fill-pressed": "linear-gradient(to right, rgb(123, 131, 247) 0%, rgb(164, 61, 164) 100%)",
    "AI-primary-fill-solid-01": "linear-gradient(to right, rgb(30, 32, 74) 0%, rgb(59, 21, 59) 100%)",
    "AI-primary-fill-solid-02": "linear-gradient(to right, rgb(42, 45, 105) 0%, rgb(84, 24, 84) 100%)",
    "AI-primary-fill-solid-03": "linear-gradient(to right, rgb(55, 61, 144) 0%, rgb(113, 40, 113) 100%)",
    "AI-primary-fill-transparent-01": "linear-gradient(to right, rgba(94, 104, 232, 0.15) 0%, rgba(164, 61, 164, 0.15) 100%)",
    "AI-primary-fill-transparent-02": "linear-gradient(to right, rgba(94, 104, 232, 0.25) 0%, rgba(164, 61, 164, 0.25) 100%)",
    "AI-primary-fill-transparent-03": "linear-gradient(to right, rgba(94, 104, 232, 0.35) 0%, rgba(164, 61, 164, 0.35) 100%)",
    "AI-sendicon": "linear-gradient(to right, rgb(94, 104, 232) 0%, rgb(140, 85, 236) 100%)",
    "Aurora-bg-main": "rgba(37, 178, 229, 0.15)",
    "Aurora-bg-reflection": "rgba(165, 117, 250, 0.1)",
    "Aurora-bg-subordinate": "rgba(16, 153, 204, 0.15)",
    B100: "#173166",
    B200: "#194294",
    B300: "#2655b6",
    B350: "#275fce",
    B400: "#3370eb",
    B50: "#152340",
    B500: "#4c88ff",
    B600: "#75a4ff",
    B700: "#8fb4ff",
    B800: "#bdd2ff",
    B900: "#e0e9ff",
    C100: "#591c3f",
    C200: "#782b57",
    C300: "#94386c",
    C350: "#ab417d",
    C400: "#c24a8e",
    C50: "#3a182b",
    C500: "#db5ea4",
    C600: "#ed77ba",
    C700: "#fc94cf",
    C800: "#ffc2e5",
    C900: "#ffe0f2",
    G100: "#173b12",
    G200: "#21511a",
    G300: "#296621",
    G350: "#2f7526",
    G400: "#35872a",
    G50: "#0e2b0a",
    G500: "#419e34",
    G600: "#51ba43",
    G700: "#69cc5c",
    G800: "#99e490",
    G900: "#cbf5c6",
    I100: "#2a2d69",
    I200: "#373d90",
    I300: "#474fb8",
    I350: "#515ad6",
    I400: "#5e68e8",
    I50: "#1e204a",
    I500: "#7b83f7",
    I600: "#9499f7",
    I700: "#aaaff8",
    I800: "#cdd0f9",
    I900: "#e7e9fe",
    L100: "#303804",
    L200: "#404c06",
    L300: "#53610a",
    L350: "#5f700a",
    L400: "#6b7f05",
    L50: "#212702",
    L500: "#82990a",
    L600: "#93af04",
    L700: "#a6c313",
    L800: "#c2e12d",
    L900: "#e3f391",
    N00: "#0a0a0a",
    "N00-10": "rgba(10, 10, 10, 0.1)",
    "N00-15": "rgba(10, 10, 10, 0.15)",
    "N00-20": "rgba(10, 10, 10, 0.2)",
    "N00-30": "rgba(10, 10, 10, 0.3)",
    "N00-40": "rgba(10, 10, 10, 0.4)",
    "N00-5": "rgba(10, 10, 10, 0.05)",
    "N00-50": "rgba(10, 10, 10, 0.5)",
    "N00-60": "rgba(10, 10, 10, 0.6)",
    "N00-70": "rgba(10, 10, 10, 0.7)",
    "N00-80": "rgba(10, 10, 10, 0.8)",
    "N00-90": "rgba(10, 10, 10, 0.9)",
    N100: "#292929",
    N1000: "#ffffff",
    N200: "#373737",
    N300: "#434343",
    N350: "#505050",
    N400: "#5f5f5f",
    N50: "#1a1a1a",
    N500: "#757575",
    N600: "#a6a6a6",
    N650: "#cfcfcf",
    N700: "#e0e0e0",
    N800: "#e8e8e8",
    N900: "#ebebeb",
    "N900-10": "rgba(235, 235, 235, 0.1)",
    "N900-15": "rgba(235, 235, 235, 0.15)",
    "N900-20": "rgba(235, 235, 235, 0.2)",
    "N900-30": "rgba(235, 235, 235, 0.3)",
    "N900-40": "rgba(235, 235, 235, 0.4)",
    "N900-5": "rgba(235, 235, 235, 0.05)",
    "N900-50": "rgba(235, 235, 235, 0.5)",
    "N900-60": "rgba(235, 235, 235, 0.6)",
    "N900-70": "rgba(235, 235, 235, 0.7)",
    "N900-80": "rgba(235, 235, 235, 0.8)",
    "N900-90": "rgba(235, 235, 235, 0.9)",
    N950: "#f8f8f8",
    O100: "#4a2b10",
    O200: "#683a12",
    O300: "#8a4a19",
    O350: "#a15317",
    O400: "#b85e1a",
    O50: "#33210b",
    O500: "#db7018",
    O600: "#f3871b",
    O700: "#f89e44",
    O800: "#fec88b",
    O900: "#fee7cd",
    P100: "#3f2073",
    P200: "#5529a3",
    P300: "#6c39c6",
    P350: "#7c4ad4",
    P400: "#8c55ec",
    P50: "#2b194a",
    P500: "#a575fa",
    P600: "#b88ffe",
    P700: "#c5a3ff",
    P800: "#dbc8fd",
    P900: "#efe5ff",
    R100: "#591f1d",
    R200: "#7b2524",
    R300: "#a03331",
    R350: "#b33a37",
    R400: "#d14642",
    R50: "#3d1a19",
    R500: "#f05b56",
    R600: "#f6827e",
    R700: "#f89e9b",
    R800: "#fdc6c4",
    R900: "#fee3e2",
    S100: "#38320c",
    S200: "#574d01",
    S300: "#7a6a01",
    S350: "#9c8702",
    S400: "#c9b218",
    S50: "#29250a",
    S500: "#e5cd17",
    S600: "#f5df36",
    S700: "#f7e663",
    S800: "#faed7a",
    S900: "#fff59e",
    T100: "#173b36",
    T200: "#1d4e47",
    T300: "#25665e",
    T350: "#227369",
    T400: "#198578",
    T50: "#132926",
    T500: "#1fa18f",
    T600: "#1ab7a1",
    T700: "#17cfb5",
    T800: "#65e7d5",
    T900: "#b7f7ef",
    V100: "#541854",
    V200: "#712871",
    V300: "#8b378b",
    V350: "#a43da4",
    V400: "#b54ab5",
    V50: "#3b153b",
    V500: "#d661d6",
    V600: "#e17fe1",
    V700: "#e99be9",
    V800: "#f4c3f4",
    V900: "#fcdffc",
    "Vnext-bg-content-header": "rgb(34, 34, 34)",
    "Vnext-bg-gradient": "linear-gradient(180deg, rgba(26, 26, 26, 0.05) 0%, rgba(10, 10, 10, 0.05) 100%)",
    "Vnext-bg-sub-navigation": "rgba(30, 30, 30, 0.5)",
    "Vnext-bg-thirdly-navigation": "rgba(26, 26, 26, 0.7)",
    W100: "#103647",
    W200: "#164359",
    W300: "#135a78",
    W350: "#146c91",
    W400: "#1a7fab",
    W50: "#152830",
    W500: "#1099cc",
    W600: "#25b2e5",
    W700: "#51c3f0",
    W800: "#89dffe",
    W900: "#c7f0ff",
    Y100: "#473409",
    Y200: "#63470f",
    Y300: "#8a6419",
    Y350: "#ad7d15",
    Y400: "#d49b0b",
    Y50: "#30250a",
    Y500: "#f0b622",
    Y600: "#fbcb46",
    Y700: "#fcd456",
    Y800: "#ffde75",
    Y900: "#ffeaa3",
    "bg-base": "rgb(10, 10, 10)",
    "bg-body": "rgb(26, 26, 26)",
    "bg-body-overlay": "rgb(41, 41, 41)",
    "bg-content-base": "rgb(18, 18, 18)",
    "bg-filler": "rgb(55, 55, 55)",
    "bg-float": "rgb(41, 41, 41)",
    "bg-float-base": "rgb(26, 26, 26)",
    "bg-float-overlay": "rgb(55, 55, 55)",
    "bg-float-push": "rgba(41, 41, 41, 0.8)",
    "bg-mask": "rgba(0, 0, 0, 0.6)",
    "bg-pricolor": "rgb(51, 112, 235)",
    "bg-sub-navigation": "rgb(38, 38, 38)",
    "bg-text-selection": "rgba(117, 164, 255, 0.3)",
    "bg-tips": "rgb(80, 80, 80)",
    "colorful-blue": "rgb(76, 136, 255)",
    "colorful-carmine": "rgb(194, 74, 142)",
    "colorful-green": "rgb(65, 158, 52)",
    "colorful-indigo": "rgb(94, 104, 232)",
    "colorful-lime": "rgb(147, 175, 4)",
    "colorful-neutral": "rgb(117, 117, 117)",
    "colorful-orange": "rgb(243, 135, 27)",
    "colorful-purple": "rgb(140, 85, 236)",
    "colorful-red": "rgb(240, 91, 86)",
    "colorful-sunflower": "rgb(229, 205, 23)",
    "colorful-turquoise": "rgb(31, 161, 143)",
    "colorful-violet": "rgb(181, 74, 181)",
    "colorful-wathet": "rgb(16, 153, 204)",
    "colorful-yellow": "rgb(240, 182, 34)",
    "fill-active": "rgba(76, 136, 255, 0.2)",
    "fill-disabled": "rgb(95, 95, 95)",
    "fill-focus": "rgba(235, 235, 235, 0.12)",
    "fill-hover": "rgba(235, 235, 235, 0.08)",
    "fill-img-mask": "rgba(0, 0, 0, 0.12)",
    "fill-loading-mask": "rgba(10, 10, 10, 0.6)",
    "fill-pressed": "rgba(235, 235, 235, 0.12)",
    "fill-selected": "rgba(76, 136, 255, 0.15)",
    "fill-tag": "rgba(235, 235, 235, 0.1)",
    "function-danger-100": "rgb(89, 31, 29)",
    "function-danger-200": "rgb(123, 37, 36)",
    "function-danger-300": "rgb(160, 51, 49)",
    "function-danger-350": "rgb(179, 58, 55)",
    "function-danger-400": "rgb(209, 70, 66)",
    "function-danger-50": "rgb(61, 26, 25)",
    "function-danger-500": "rgb(240, 91, 86)",
    "function-danger-600": "rgb(246, 130, 126)",
    "function-danger-700": "rgb(248, 158, 155)",
    "function-danger-800": "rgb(253, 198, 196)",
    "function-danger-900": "rgb(254, 227, 226)",
    "function-danger-content-default": "rgb(240, 91, 86)",
    "function-danger-content-hover": "rgb(209, 70, 66)",
    "function-danger-content-loading": "rgb(160, 51, 49)",
    "function-danger-content-pressed": "rgb(246, 130, 126)",
    "function-danger-fill-default": "rgb(209, 70, 66)",
    "function-danger-fill-hover": "rgb(179, 58, 55)",
    "function-danger-fill-loading": "rgb(160, 51, 49)",
    "function-danger-fill-pressed": "rgb(240, 91, 86)",
    "function-danger-fill-solid-01": "rgb(61, 26, 25)",
    "function-danger-fill-solid-02": "rgb(89, 31, 29)",
    "function-danger-fill-solid-03": "rgb(123, 37, 36)",
    "function-danger-fill-transparent-01": "rgba(240, 91, 86, 0.15)",
    "function-danger-fill-transparent-02": "rgba(240, 91, 86, 0.2)",
    "function-danger-fill-transparent-03": "rgba(240, 91, 86, 0.3)",
    "function-danger-on-danger-fill": "rgb(255, 255, 255)",
    "function-info-100": "rgb(23, 49, 102)",
    "function-info-200": "rgb(25, 66, 148)",
    "function-info-300": "rgb(38, 85, 182)",
    "function-info-350": "rgb(39, 95, 206)",
    "function-info-400": "rgb(51, 112, 235)",
    "function-info-50": "rgb(21, 35, 64)",
    "function-info-500": "rgb(76, 136, 255)",
    "function-info-600": "rgb(117, 164, 255)",
    "function-info-700": "rgb(143, 180, 255)",
    "function-info-800": "rgb(189, 210, 255)",
    "function-info-900": "rgb(224, 233, 255)",
    "function-info-content-default": "rgb(76, 136, 255)",
    "function-info-content-hover": "rgb(51, 112, 235)",
    "function-info-content-loading": "rgb(38, 85, 182)",
    "function-info-content-pressed": "rgb(117, 164, 255)",
    "function-info-fill-default": "rgb(51, 112, 235)",
    "function-info-fill-hover": "rgb(39, 95, 206)",
    "function-info-fill-loading": "rgb(38, 85, 182)",
    "function-info-fill-pressed": "rgb(76, 136, 255)",
    "function-info-fill-solid-01": "rgb(21, 35, 64)",
    "function-info-fill-solid-02": "rgb(23, 49, 102)",
    "function-info-fill-solid-03": "rgb(25, 66, 148)",
    "function-info-fill-transparent-01": "rgba(76, 136, 255, 0.15)",
    "function-info-fill-transparent-02": "rgba(76, 136, 255, 0.2)",
    "function-info-fill-transparent-03": "rgba(76, 136, 255, 0.3)",
    "function-info-on-info-fill": "rgb(255, 255, 255)",
    "function-success-100": "rgb(23, 59, 18)",
    "function-success-200": "rgb(33, 81, 26)",
    "function-success-300": "rgb(41, 102, 33)",
    "function-success-350": "rgb(47, 117, 38)",
    "function-success-400": "rgb(53, 135, 42)",
    "function-success-50": "rgb(14, 43, 10)",
    "function-success-500": "rgb(65, 158, 52)",
    "function-success-600": "rgb(81, 186, 67)",
    "function-success-700": "rgb(105, 204, 92)",
    "function-success-800": "rgb(153, 228, 144)",
    "function-success-900": "rgb(203, 245, 198)",
    "function-success-content-default": "rgb(81, 186, 67)",
    "function-success-content-hover": "rgb(65, 158, 52)",
    "function-success-content-loading": "rgb(41, 102, 33)",
    "function-success-content-pressed": "rgb(105, 204, 92)",
    "function-success-fill-default": "rgb(65, 158, 52)",
    "function-success-fill-hover": "rgb(53, 135, 42)",
    "function-success-fill-loading": "rgb(41, 102, 33)",
    "function-success-fill-pressed": "rgb(81, 186, 67)",
    "function-success-fill-solid-01": "rgb(14, 43, 10)",
    "function-success-fill-solid-02": "rgb(23, 59, 18)",
    "function-success-fill-solid-03": "rgb(33, 81, 26)",
    "function-success-fill-transparent-01": "rgba(65, 158, 52, 0.15)",
    "function-success-fill-transparent-02": "rgba(65, 158, 52, 0.2)",
    "function-success-fill-transparent-03": "rgba(65, 158, 52, 0.3)",
    "function-success-on-success-fill": "rgb(255, 255, 255)",
    "function-warning-100": "rgb(74, 43, 16)",
    "function-warning-200": "rgb(104, 58, 18)",
    "function-warning-300": "rgb(138, 74, 25)",
    "function-warning-350": "rgb(161, 83, 23)",
    "function-warning-400": "rgb(184, 94, 26)",
    "function-warning-50": "rgb(51, 33, 11)",
    "function-warning-500": "rgb(219, 112, 24)",
    "function-warning-600": "rgb(243, 135, 27)",
    "function-warning-700": "rgb(248, 158, 68)",
    "function-warning-800": "rgb(254, 200, 139)",
    "function-warning-900": "rgb(254, 231, 205)",
    "function-warning-content-default": "rgb(243, 135, 27)",
    "function-warning-content-hover": "rgb(219, 112, 24)",
    "function-warning-content-loading": "rgb(138, 74, 25)",
    "function-warning-content-pressed": "rgb(248, 158, 68)",
    "function-warning-fill-default": "rgb(243, 135, 27)",
    "function-warning-fill-hover": "rgb(219, 112, 24)",
    "function-warning-fill-loading": "rgb(138, 74, 25)",
    "function-warning-fill-pressed": "rgb(248, 158, 68)",
    "function-warning-fill-solid-01": "rgb(51, 33, 11)",
    "function-warning-fill-solid-02": "rgb(74, 43, 16)",
    "function-warning-fill-solid-03": "rgb(104, 58, 18)",
    "function-warning-fill-transparent-01": "rgba(243, 135, 27, 0.15)",
    "function-warning-fill-transparent-02": "rgba(243, 135, 27, 0.2)",
    "function-warning-fill-transparent-03": "rgba(243, 135, 27, 0.3)",
    "function-warning-on-warning-fill": "rgb(255, 255, 255)",
    "gradient-blue": "linear-gradient(90deg, rgb(51, 112, 235) 0%, rgb(39, 95, 206) 100%)",
    "gradient-carmine": "linear-gradient(90deg, rgb(219, 94, 164) 0%, rgb(194, 74, 142) 100%)",
    "gradient-green": "linear-gradient(90deg, rgb(65, 158, 52) 0%, rgb(53, 135, 42) 100%)",
    "gradient-indigo": "linear-gradient(90deg, rgb(94, 104, 232) 0%, rgb(81, 90, 214) 100%)",
    "gradient-lime": "linear-gradient(90deg, rgb(147, 175, 4) 0%, rgb(130, 153, 10) 100%)",
    "gradient-orange": "linear-gradient(90deg, rgb(243, 135, 27) 0%, rgb(219, 112, 24) 100%)",
    "gradient-purple": "linear-gradient(90deg, rgb(140, 85, 236) 0%, rgb(124, 74, 212) 100%)",
    "gradient-red": "linear-gradient(90deg, rgb(240, 91, 86) 0%, rgb(209, 70, 66) 100%)",
    "gradient-turquoise": "linear-gradient(90deg, rgb(26, 183, 161) 0%, rgb(31, 161, 143) 100%)",
    "gradient-violet": "linear-gradient(90deg, rgb(214, 97, 214) 0%, rgb(181, 74, 181) 100%)",
    "gradient-wathet": "linear-gradient(90deg, rgb(16, 153, 204) 0%, rgb(26, 127, 171) 100%)",
    "gradient-yellow": "linear-gradient(90deg, rgb(240, 182, 34) 0%, rgb(212, 155, 11) 100%)",
    "icon-disabled": "rgb(95, 95, 95)",
    "icon-n1": "rgb(232, 232, 232)",
    "icon-n2": "rgb(166, 166, 166)",
    "icon-n3": "rgb(117, 117, 117)",
    "illustration-blue-a": "rgb(224, 224, 224)",
    "illustration-blue-b": "rgba(255, 255, 255, 0.4)",
    "illustration-blue-c": "rgb(95, 95, 95)",
    "illustration-blue-d": "rgb(38, 85, 182)",
    "illustration-blue-e": "rgb(76, 136, 255)",
    "illustration-neutral-a": "rgb(235, 235, 235)",
    "illustration-neutral-b": "rgb(55, 55, 55)",
    "illustration-neutral-c": "rgba(255, 255, 255, 0.3)",
    "illustration-neutral-d": "rgba(255, 255, 255, 0.4)",
    "illustration-orange": "rgb(243, 135, 27)",
    "illustration-red": "rgb(240, 91, 86)",
    "illustration-static-black": "rgb(0, 0, 0)",
    "illustration-static-white": "rgb(255, 255, 255)",
    "illustration-turquoise": "rgb(23, 207, 181)",
    "illustration-wathet": "rgb(81, 195, 240)",
    "illustration-yellow": "rgb(240, 182, 34)",
    "line-border-card": "rgba(235, 235, 235, 0.15)",
    "line-border-component": "rgb(80, 80, 80)",
    "line-divider-default": "rgba(207, 207, 207, 0.15)",
    "line-divider-module": "rgb(0, 0, 0)",
    "primary-content-default": "rgb(76, 136, 255)",
    "primary-content-hover": "rgb(51, 112, 235)",
    "primary-content-loading": "rgb(38, 85, 182)",
    "primary-content-pressed": "rgb(117, 164, 255)",
    "primary-fill-default": "rgb(51, 112, 235)",
    "primary-fill-hover": "rgb(39, 95, 206)",
    "primary-fill-loading": "rgb(38, 85, 182)",
    "primary-fill-pressed": "rgb(76, 136, 255)",
    "primary-fill-solid-01": "rgb(21, 35, 64)",
    "primary-fill-solid-02": "rgb(23, 49, 102)",
    "primary-fill-solid-03": "rgb(25, 66, 148)",
    "primary-fill-transparent-01": "rgba(76, 136, 255, 0.15)",
    "primary-fill-transparent-02": "rgba(76, 136, 255, 0.2)",
    "primary-fill-transparent-03": "rgba(76, 136, 255, 0.3)",
    "primary-on-primary-fill": "rgb(255, 255, 255)",
    "primary-pri-100": "rgb(23, 49, 102)",
    "primary-pri-200": "rgb(25, 66, 148)",
    "primary-pri-300": "rgb(38, 85, 182)",
    "primary-pri-350": "rgb(39, 95, 206)",
    "primary-pri-400": "rgb(51, 112, 235)",
    "primary-pri-50": "rgb(21, 35, 64)",
    "primary-pri-500": "rgb(76, 136, 255)",
    "primary-pri-600": "rgb(117, 164, 255)",
    "primary-pri-700": "rgb(143, 180, 255)",
    "primary-pri-800": "rgb(189, 210, 255)",
    "primary-pri-900": "rgb(224, 233, 255)",
    "shadow-default": "rgb(0, 0, 0)",
    "shadow-default-lg": "rgba(0, 0, 0, 0.24)",
    "shadow-default-md": "rgba(0, 0, 0, 0.28)",
    "shadow-default-sm": "rgba(0, 0, 0, 0.32)",
    "shadow-lg-down": "0px 12px 48px 0px rgba(0, 0, 0, 0.24)",
    "shadow-lg-left": "-12px 0px 48px 0px rgba(0, 0, 0, 0.24)",
    "shadow-lg-right": "12px 0px 48px 0px rgba(0, 0, 0, 0.24)",
    "shadow-lg-up": "0px -12px 48px 0px rgba(0, 0, 0, 0.24)",
    "shadow-md-down": "0px 8px 16px 0px rgba(0, 0, 0, 0.28)",
    "shadow-md-left": "-8px 0px 16px 0px rgba(0, 0, 0, 0.28)",
    "shadow-md-right": "8px 0px 16px 0px rgba(0, 0, 0, 0.28)",
    "shadow-md-up": "0px -8px 16px 0px rgba(0, 0, 0, 0.28)",
    "shadow-pri": "rgb(36, 91, 219)",
    "shadow-pri-lg": "rgba(25, 66, 148, 0.48)",
    "shadow-pri-lg-down": "0px 12px 48px 0px rgba(25, 66, 148, 0.48)",
    "shadow-pri-md": "rgba(25, 66, 148, 0.48)",
    "shadow-pri-md-down": "0px 8px 16px 0px rgba(25, 66, 148, 0.48)",
    "shadow-s1-down": "0px 1px 2px -2px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 8px 2px rgba(0, 0, 0, 0.02)",
    "shadow-s1-down-pri": "0px 1px 2px -2px rgba(36, 91, 219, 0.02), 0px 2px 4px 0px rgba(36, 91, 219, 0.02), 0px 2px 8px 2px rgba(36, 91, 219, 0.02)",
    "shadow-s1-left": "-1px 0px 2px -2px rgba(0, 0, 0, 0.02), -2px 0px 4px 0px rgba(0, 0, 0, 0.02), -2px 0px 8px 2px rgba(0, 0, 0, 0.02)",
    "shadow-s1-right": "1px 0px 2px -2px rgba(0, 0, 0, 0.02), 2px 0px 4px 0px rgba(0, 0, 0, 0.02), 2px 0px 8px 2px rgba(0, 0, 0, 0.02)",
    "shadow-s1-up": "0px -1px 2px -2px rgba(0, 0, 0, 0.02), 0px -2px 4px 0px rgba(0, 0, 0, 0.02), 0px -2px 8px 2px rgba(0, 0, 0, 0.02)",
    "shadow-s2-down": "0px 4px 16px 4px rgba(0, 0, 0, 0.03), 0px 4px 8px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px -4px rgba(0, 0, 0, 0.02)",
    "shadow-s2-down-pri": "0px 4px 16px 4px rgba(36, 91, 219, 0.03), 0px 4px 8px 0px rgba(36, 91, 219, 0.02), 0px 2px 4px -4px rgba(36, 91, 219, 0.02)",
    "shadow-s2-left": "-4px 0px 16px 4px rgba(0, 0, 0, 0.03), -4px 0px 8px 0px rgba(0, 0, 0, 0.02), -2px 0px 4px -4px rgba(0, 0, 0, 0.02)",
    "shadow-s2-right": "4px 0px 16px 4px rgba(0, 0, 0, 0.03), 4px 0px 8px 0px rgba(0, 0, 0, 0.02), 2px 0px 4px -4px rgba(0, 0, 0, 0.02)",
    "shadow-s2-up": "0px -4px 16px 4px rgba(0, 0, 0, 0.03), 0px -4px 8px 0px rgba(0, 0, 0, 0.02), 0px -2px 4px -4px rgba(0, 0, 0, 0.02)",
    "shadow-s3-down": "0px 6px 18px 6px rgba(0, 0, 0, 0.03), 0px 3px 6px -6px rgba(0, 0, 0, 0.05), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
    "shadow-s3-down-pri": "0px 6px 18px 6px rgba(36, 91, 219, 0.03), 0px 3px 6px -6px rgba(36, 91, 219, 0.05), 0px 4px 8px 0px rgba(36, 91, 219, 0.03)",
    "shadow-s3-left": "-6px 0px 18px 6px rgba(0, 0, 0, 0.03), -3px 0px 6px -6px rgba(0, 0, 0, 0.05), -4px 0px 8px 0px rgba(0, 0, 0, 0.03)",
    "shadow-s3-right": "6px 0px 18px 6px rgba(0, 0, 0, 0.03), 3px 0px 6px -6px rgba(0, 0, 0, 0.05), 4px 0px 8px 0px rgba(0, 0, 0, 0.03)",
    "shadow-s3-up": "0px -6px 18px 6px rgba(0, 0, 0, 0.03), 0px -3px 6px -6px rgba(0, 0, 0, 0.05), 0px -4px 8px 0px rgba(0, 0, 0, 0.03)",
    "shadow-s4-down": "0px 8px 24px 8px rgba(0, 0, 0, 0.04), 0px 6px 12px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px -8px rgba(0, 0, 0, 0.06)",
    "shadow-s4-down-pri": "0px 8px 24px 8px rgba(36, 91, 219, 0.04), 0px 6px 12px 0px rgba(36, 91, 219, 0.04), 0px 4px 8px -8px rgba(36, 91, 219, 0.06)",
    "shadow-s4-left": "-8px 0px 24px 8px rgba(0, 0, 0, 0.04), -6px 0px 12px 0px rgba(0, 0, 0, 0.04), -4px 0px 8px -8px rgba(0, 0, 0, 0.06)",
    "shadow-s4-right": "8px 0px 24px 8px rgba(0, 0, 0, 0.04), 6px 0px 12px 0px rgba(0, 0, 0, 0.04), 4px 0px 8px -8px rgba(0, 0, 0, 0.06)",
    "shadow-s4-up": "0px -8px 24px 8px rgba(0, 0, 0, 0.04), 0px -6px 12px 0px rgba(0, 0, 0, 0.04), 0px -4px 8px -8px rgba(0, 0, 0, 0.06)",
    "shadow-s5-down": "0px 10px 36px 10px rgba(0, 0, 0, 0.04), 0px 8px 24px 0px rgba(0, 0, 0, 0.04), 0px 6px 12px -10px rgba(0, 0, 0, 0.06)",
    "shadow-s5-down-pri": "0px 10px 36px 10px rgba(36, 91, 219, 0.04), 0px 8px 24px 0px rgba(36, 91, 219, 0.04), 0px 6px 12px -10px rgba(36, 91, 219, 0.06)",
    "shadow-s5-left": "-10px 0px 36px 10px rgba(0, 0, 0, 0.04), -8px 0px 24px 0px rgba(0, 0, 0, 0.04), -6px 0px 12px -10px rgba(0, 0, 0, 0.06)",
    "shadow-s5-right": "10px 0px 36px 10px rgba(0, 0, 0, 0.04), 8px 0px 24px 0px rgba(0, 0, 0, 0.04), 6px 0px 12px -10px rgba(0, 0, 0, 0.06)",
    "shadow-s5-up": "0px -10px 36px 10px rgba(0, 0, 0, 0.04), 0px -8px 24px 0px rgba(0, 0, 0, 0.04), 0px -6px 12px -10px rgba(0, 0, 0, 0.06)",
    "shadow-sm-down": "0px 4px 8px 0px rgba(0, 0, 0, 0.32)",
    "shadow-sm-left": "-4px 0px 8px 0px rgba(0, 0, 0, 0.32)",
    "shadow-sm-right": "4px 0px 8px 0px rgba(0, 0, 0, 0.32)",
    "shadow-sm-up": "0px -4px 8px 0px rgba(0, 0, 0, 0.32)",
    "static-black": "rgb(0, 0, 0)",
    "static-black-10": "rgba(0, 0, 0, 0.1)",
    "static-black-15": "rgba(0, 0, 0, 0.15)",
    "static-black-20": "rgba(0, 0, 0, 0.2)",
    "static-black-30": "rgba(0, 0, 0, 0.3)",
    "static-black-40": "rgba(0, 0, 0, 0.4)",
    "static-black-5": "rgba(0, 0, 0, 0.05)",
    "static-black-50": "rgba(0, 0, 0, 0.5)",
    "static-black-60": "rgba(0, 0, 0, 0.6)",
    "static-black-70": "rgba(0, 0, 0, 0.7)",
    "static-black-80": "rgba(0, 0, 0, 0.8)",
    "static-black-90": "rgba(0, 0, 0, 0.9)",
    "static-white": "rgb(255, 255, 255)",
    "static-white-10": "rgba(255, 255, 255, 0.1)",
    "static-white-15": "rgba(255, 255, 255, 0.15)",
    "static-white-20": "rgba(255, 255, 255, 0.2)",
    "static-white-30": "rgba(255, 255, 255, 0.3)",
    "static-white-40": "rgba(255, 255, 255, 0.4)",
    "static-white-5": "rgba(255, 255, 255, 0.05)",
    "static-white-50": "rgba(255, 255, 255, 0.5)",
    "static-white-60": "rgba(255, 255, 255, 0.6)",
    "static-white-70": "rgba(255, 255, 255, 0.7)",
    "static-white-80": "rgba(255, 255, 255, 0.8)",
    "static-white-90": "rgba(255, 255, 255, 0.9)",
    "static-white-hover": "rgba(255, 255, 255, 0.1)",
    "static-white-pressed": "rgba(255, 255, 255, 0.2)",
    "text-caption": "rgb(166, 166, 166)",
    "text-disabled": "rgb(95, 95, 95)",
    "text-link-disabled": "rgb(95, 95, 95)",
    "text-link-hover": "rgb(51, 112, 235)",
    "text-link-loading": "rgb(38, 85, 182)",
    "text-link-normal": "rgb(76, 136, 255)",
    "text-link-pressed": "rgb(117, 164, 255)",
    "text-placeholder": "rgb(117, 117, 117)",
    "text-title": "rgb(235, 235, 235)"
  }), {
    "AI-cursor-raw": "94, 104, 232",
    "AI-icon-in-button-raw": "123, 131, 247",
    "B100-raw": "23, 49, 102",
    "B200-raw": "25, 66, 148",
    "B300-raw": "38, 85, 182",
    "B350-raw": "39, 95, 206",
    "B400-raw": "51, 112, 235",
    "B500-raw": "76, 136, 255",
    "B50-raw": "21, 35, 64",
    "B600-raw": "117, 164, 255",
    "B700-raw": "143, 180, 255",
    "B800-raw": "189, 210, 255",
    "B900-raw": "224, 233, 255",
    "C100-raw": "89, 28, 63",
    "C200-raw": "120, 43, 87",
    "C300-raw": "148, 56, 108",
    "C350-raw": "171, 65, 125",
    "C400-raw": "194, 74, 142",
    "C500-raw": "219, 94, 164",
    "C50-raw": "58, 24, 43",
    "C600-raw": "237, 119, 186",
    "C700-raw": "252, 148, 207",
    "C800-raw": "255, 194, 229",
    "C900-raw": "255, 224, 242",
    "G100-raw": "23, 59, 18",
    "G200-raw": "33, 81, 26",
    "G300-raw": "41, 102, 33",
    "G350-raw": "47, 117, 38",
    "G400-raw": "53, 135, 42",
    "G500-raw": "65, 158, 52",
    "G50-raw": "14, 43, 10",
    "G600-raw": "81, 186, 67",
    "G700-raw": "105, 204, 92",
    "G800-raw": "153, 228, 144",
    "G900-raw": "203, 245, 198",
    "I100-raw": "42, 45, 105",
    "I200-raw": "55, 61, 144",
    "I300-raw": "71, 79, 184",
    "I350-raw": "81, 90, 214",
    "I400-raw": "94, 104, 232",
    "I500-raw": "123, 131, 247",
    "I50-raw": "30, 32, 74",
    "I600-raw": "148, 153, 247",
    "I700-raw": "170, 175, 248",
    "I800-raw": "205, 208, 249",
    "I900-raw": "231, 233, 254",
    "L100-raw": "48, 56, 4",
    "L200-raw": "64, 76, 6",
    "L300-raw": "83, 97, 10",
    "L350-raw": "95, 112, 10",
    "L400-raw": "107, 127, 5",
    "L500-raw": "130, 153, 10",
    "L50-raw": "33, 39, 2",
    "L600-raw": "147, 175, 4",
    "L700-raw": "166, 195, 19",
    "L800-raw": "194, 225, 45",
    "L900-raw": "227, 243, 145",
    "N00-raw": "10, 10, 10",
    "N1000-raw": "255, 255, 255",
    "N100-raw": "41, 41, 41",
    "N200-raw": "55, 55, 55",
    "N300-raw": "67, 67, 67",
    "N350-raw": "80, 80, 80",
    "N400-raw": "95, 95, 95",
    "N500-raw": "117, 117, 117",
    "N50-raw": "26, 26, 26",
    "N600-raw": "166, 166, 166",
    "N650-raw": "207, 207, 207",
    "N700-raw": "224, 224, 224",
    "N800-raw": "232, 232, 232",
    "N900-raw": "235, 235, 235",
    "N950-raw": "248, 248, 248",
    "O100-raw": "74, 43, 16",
    "O200-raw": "104, 58, 18",
    "O300-raw": "138, 74, 25",
    "O350-raw": "161, 83, 23",
    "O400-raw": "184, 94, 26",
    "O500-raw": "219, 112, 24",
    "O50-raw": "51, 33, 11",
    "O600-raw": "243, 135, 27",
    "O700-raw": "248, 158, 68",
    "O800-raw": "254, 200, 139",
    "O900-raw": "254, 231, 205",
    "P100-raw": "63, 32, 115",
    "P200-raw": "85, 41, 163",
    "P300-raw": "108, 57, 198",
    "P350-raw": "124, 74, 212",
    "P400-raw": "140, 85, 236",
    "P500-raw": "165, 117, 250",
    "P50-raw": "43, 25, 74",
    "P600-raw": "184, 143, 254",
    "P700-raw": "197, 163, 255",
    "P800-raw": "219, 200, 253",
    "P900-raw": "239, 229, 255",
    "R100-raw": "89, 31, 29",
    "R200-raw": "123, 37, 36",
    "R300-raw": "160, 51, 49",
    "R350-raw": "179, 58, 55",
    "R400-raw": "209, 70, 66",
    "R500-raw": "240, 91, 86",
    "R50-raw": "61, 26, 25",
    "R600-raw": "246, 130, 126",
    "R700-raw": "248, 158, 155",
    "R800-raw": "253, 198, 196",
    "R900-raw": "254, 227, 226",
    "S100-raw": "56, 50, 12",
    "S200-raw": "87, 77, 1",
    "S300-raw": "122, 106, 1",
    "S350-raw": "156, 135, 2",
    "S400-raw": "201, 178, 24",
    "S500-raw": "229, 205, 23",
    "S50-raw": "41, 37, 10",
    "S600-raw": "245, 223, 54",
    "S700-raw": "247, 230, 99",
    "S800-raw": "250, 237, 122",
    "S900-raw": "255, 245, 158",
    "T100-raw": "23, 59, 54",
    "T200-raw": "29, 78, 71",
    "T300-raw": "37, 102, 94",
    "T350-raw": "34, 115, 105",
    "T400-raw": "25, 133, 120",
    "T500-raw": "31, 161, 143",
    "T50-raw": "19, 41, 38",
    "T600-raw": "26, 183, 161",
    "T700-raw": "23, 207, 181",
    "T800-raw": "101, 231, 213",
    "T900-raw": "183, 247, 239",
    "V100-raw": "84, 24, 84",
    "V200-raw": "113, 40, 113",
    "V300-raw": "139, 55, 139",
    "V350-raw": "164, 61, 164",
    "V400-raw": "181, 74, 181",
    "V500-raw": "214, 97, 214",
    "V50-raw": "59, 21, 59",
    "V600-raw": "225, 127, 225",
    "V700-raw": "233, 155, 233",
    "V800-raw": "244, 195, 244",
    "V900-raw": "252, 223, 252",
    "Vnext-bg-content-header-raw": "34, 34, 34",
    "Vnext-bg-sub-navigation-raw": "30, 30, 30",
    "Vnext-bg-thirdly-navigation-raw": "26, 26, 26",
    "W100-raw": "16, 54, 71",
    "W200-raw": "22, 67, 89",
    "W300-raw": "19, 90, 120",
    "W350-raw": "20, 108, 145",
    "W400-raw": "26, 127, 171",
    "W500-raw": "16, 153, 204",
    "W50-raw": "21, 40, 48",
    "W600-raw": "37, 178, 229",
    "W700-raw": "81, 195, 240",
    "W800-raw": "137, 223, 254",
    "W900-raw": "199, 240, 255",
    "Y100-raw": "71, 52, 9",
    "Y200-raw": "99, 71, 15",
    "Y300-raw": "138, 100, 25",
    "Y350-raw": "173, 125, 21",
    "Y400-raw": "212, 155, 11",
    "Y500-raw": "240, 182, 34",
    "Y50-raw": "48, 37, 10",
    "Y600-raw": "251, 203, 70",
    "Y700-raw": "252, 212, 86",
    "Y800-raw": "255, 222, 117",
    "Y900-raw": "255, 234, 163",
    "bg-base-raw": "10, 10, 10",
    "bg-body-overlay-raw": "41, 41, 41",
    "bg-body-raw": "26, 26, 26",
    "bg-content-base-raw": "18, 18, 18",
    "bg-filler-raw": "55, 55, 55",
    "bg-float-base-raw": "26, 26, 26",
    "bg-float-overlay-raw": "55, 55, 55",
    "bg-float-raw": "41, 41, 41",
    "bg-mask-raw": "0, 0, 0",
    "bg-pricolor-raw": "51, 112, 235",
    "bg-sub-navigation-raw": "38, 38, 38",
    "bg-tips-raw": "80, 80, 80",
    "colorful-blue-raw": "76, 136, 255",
    "colorful-carmine-raw": "194, 74, 142",
    "colorful-green-raw": "65, 158, 52",
    "colorful-indigo-raw": "94, 104, 232",
    "colorful-lime-raw": "147, 175, 4",
    "colorful-neutral-raw": "117, 117, 117",
    "colorful-orange-raw": "243, 135, 27",
    "colorful-purple-raw": "140, 85, 236",
    "colorful-red-raw": "240, 91, 86",
    "colorful-sunflower-raw": "229, 205, 23",
    "colorful-turquoise-raw": "31, 161, 143",
    "colorful-violet-raw": "181, 74, 181",
    "colorful-wathet-raw": "16, 153, 204",
    "colorful-yellow-raw": "240, 182, 34",
    "fill-disabled-raw": "95, 95, 95",
    "function-danger-100-raw": "89, 31, 29",
    "function-danger-200-raw": "123, 37, 36",
    "function-danger-300-raw": "160, 51, 49",
    "function-danger-350-raw": "179, 58, 55",
    "function-danger-400-raw": "209, 70, 66",
    "function-danger-500-raw": "240, 91, 86",
    "function-danger-50-raw": "61, 26, 25",
    "function-danger-600-raw": "246, 130, 126",
    "function-danger-700-raw": "248, 158, 155",
    "function-danger-800-raw": "253, 198, 196",
    "function-danger-900-raw": "254, 227, 226",
    "function-danger-content-default-raw": "240, 91, 86",
    "function-danger-content-hover-raw": "209, 70, 66",
    "function-danger-content-loading-raw": "160, 51, 49",
    "function-danger-content-pressed-raw": "246, 130, 126",
    "function-danger-fill-default-raw": "209, 70, 66",
    "function-danger-fill-hover-raw": "179, 58, 55",
    "function-danger-fill-loading-raw": "160, 51, 49",
    "function-danger-fill-pressed-raw": "240, 91, 86",
    "function-danger-fill-solid-01-raw": "61, 26, 25",
    "function-danger-fill-solid-02-raw": "89, 31, 29",
    "function-danger-fill-solid-03-raw": "123, 37, 36",
    "function-danger-on-danger-fill-raw": "255, 255, 255",
    "function-info-100-raw": "23, 49, 102",
    "function-info-200-raw": "25, 66, 148",
    "function-info-300-raw": "38, 85, 182",
    "function-info-350-raw": "39, 95, 206",
    "function-info-400-raw": "51, 112, 235",
    "function-info-500-raw": "76, 136, 255",
    "function-info-50-raw": "21, 35, 64",
    "function-info-600-raw": "117, 164, 255",
    "function-info-700-raw": "143, 180, 255",
    "function-info-800-raw": "189, 210, 255",
    "function-info-900-raw": "224, 233, 255",
    "function-info-content-default-raw": "76, 136, 255",
    "function-info-content-hover-raw": "51, 112, 235",
    "function-info-content-loading-raw": "38, 85, 182",
    "function-info-content-pressed-raw": "117, 164, 255",
    "function-info-fill-default-raw": "51, 112, 235",
    "function-info-fill-hover-raw": "39, 95, 206",
    "function-info-fill-loading-raw": "38, 85, 182",
    "function-info-fill-pressed-raw": "76, 136, 255",
    "function-info-fill-solid-01-raw": "21, 35, 64",
    "function-info-fill-solid-02-raw": "23, 49, 102",
    "function-info-fill-solid-03-raw": "25, 66, 148",
    "function-info-on-info-fill-raw": "255, 255, 255",
    "function-success-100-raw": "23, 59, 18",
    "function-success-200-raw": "33, 81, 26",
    "function-success-300-raw": "41, 102, 33",
    "function-success-350-raw": "47, 117, 38",
    "function-success-400-raw": "53, 135, 42",
    "function-success-500-raw": "65, 158, 52",
    "function-success-50-raw": "14, 43, 10",
    "function-success-600-raw": "81, 186, 67",
    "function-success-700-raw": "105, 204, 92",
    "function-success-800-raw": "153, 228, 144",
    "function-success-900-raw": "203, 245, 198",
    "function-success-content-default-raw": "81, 186, 67",
    "function-success-content-hover-raw": "65, 158, 52",
    "function-success-content-loading-raw": "41, 102, 33",
    "function-success-content-pressed-raw": "105, 204, 92",
    "function-success-fill-default-raw": "65, 158, 52",
    "function-success-fill-hover-raw": "53, 135, 42",
    "function-success-fill-loading-raw": "41, 102, 33",
    "function-success-fill-pressed-raw": "81, 186, 67",
    "function-success-fill-solid-01-raw": "14, 43, 10",
    "function-success-fill-solid-02-raw": "23, 59, 18",
    "function-success-fill-solid-03-raw": "33, 81, 26",
    "function-success-on-success-fill-raw": "255, 255, 255",
    "function-warning-100-raw": "74, 43, 16",
    "function-warning-200-raw": "104, 58, 18",
    "function-warning-300-raw": "138, 74, 25",
    "function-warning-350-raw": "161, 83, 23",
    "function-warning-400-raw": "184, 94, 26",
    "function-warning-500-raw": "219, 112, 24",
    "function-warning-50-raw": "51, 33, 11",
    "function-warning-600-raw": "243, 135, 27",
    "function-warning-700-raw": "248, 158, 68",
    "function-warning-800-raw": "254, 200, 139",
    "function-warning-900-raw": "254, 231, 205",
    "function-warning-content-default-raw": "243, 135, 27",
    "function-warning-content-hover-raw": "219, 112, 24",
    "function-warning-content-loading-raw": "138, 74, 25",
    "function-warning-content-pressed-raw": "248, 158, 68",
    "function-warning-fill-default-raw": "243, 135, 27",
    "function-warning-fill-hover-raw": "219, 112, 24",
    "function-warning-fill-loading-raw": "138, 74, 25",
    "function-warning-fill-pressed-raw": "248, 158, 68",
    "function-warning-fill-solid-01-raw": "51, 33, 11",
    "function-warning-fill-solid-02-raw": "74, 43, 16",
    "function-warning-fill-solid-03-raw": "104, 58, 18",
    "function-warning-on-warning-fill-raw": "255, 255, 255",
    "icon-disabled-raw": "95, 95, 95",
    "icon-n1-raw": "232, 232, 232",
    "icon-n2-raw": "166, 166, 166",
    "icon-n3-raw": "117, 117, 117",
    "illustration-blue-a-raw": "224, 224, 224",
    "illustration-blue-b-raw": "255, 255, 255",
    "illustration-blue-c-raw": "95, 95, 95",
    "illustration-blue-d-raw": "38, 85, 182",
    "illustration-blue-e-raw": "76, 136, 255",
    "illustration-neutral-a-raw": "235, 235, 235",
    "illustration-neutral-b-raw": "55, 55, 55",
    "illustration-neutral-d-raw": "255, 255, 255",
    "illustration-orange-raw": "243, 135, 27",
    "illustration-red-raw": "240, 91, 86",
    "illustration-static-black-raw": "0, 0, 0",
    "illustration-static-white-raw": "255, 255, 255",
    "illustration-turquoise-raw": "23, 207, 181",
    "illustration-wathet-raw": "81, 195, 240",
    "illustration-yellow-raw": "240, 182, 34",
    "line-border-card-raw": "235, 235, 235",
    "line-border-component-raw": "80, 80, 80",
    "primary-content-default-raw": "76, 136, 255",
    "primary-content-hover-raw": "51, 112, 235",
    "primary-content-loading-raw": "38, 85, 182",
    "primary-content-pressed-raw": "117, 164, 255",
    "primary-fill-default-raw": "51, 112, 235",
    "primary-fill-hover-raw": "39, 95, 206",
    "primary-fill-loading-raw": "38, 85, 182",
    "primary-fill-pressed-raw": "76, 136, 255",
    "primary-fill-solid-01-raw": "21, 35, 64",
    "primary-fill-solid-02-raw": "23, 49, 102",
    "primary-fill-solid-03-raw": "25, 66, 148",
    "primary-on-primary-fill-raw": "255, 255, 255",
    "primary-pri-100-raw": "23, 49, 102",
    "primary-pri-200-raw": "25, 66, 148",
    "primary-pri-300-raw": "38, 85, 182",
    "primary-pri-350-raw": "39, 95, 206",
    "primary-pri-400-raw": "51, 112, 235",
    "primary-pri-500-raw": "76, 136, 255",
    "primary-pri-50-raw": "21, 35, 64",
    "primary-pri-600-raw": "117, 164, 255",
    "primary-pri-700-raw": "143, 180, 255",
    "primary-pri-800-raw": "189, 210, 255",
    "primary-pri-900-raw": "224, 233, 255",
    "shadow-default-raw": "0, 0, 0",
    "shadow-pri-raw": "36, 91, 219",
    "static-black-raw": "0, 0, 0",
    "static-white-hover-raw": "255, 255, 255",
    "static-white-pressed-raw": "255, 255, 255",
    "static-white-raw": "255, 255, 255",
    "text-caption-raw": "166, 166, 166",
    "text-disabled-raw": "95, 95, 95",
    "text-link-disabled-raw": "95, 95, 95",
    "text-link-hover-raw": "51, 112, 235",
    "text-link-loading-raw": "38, 85, 182",
    "text-link-normal-raw": "76, 136, 255",
    "text-link-pressed-raw": "117, 164, 255",
    "text-placeholder-raw": "117, 117, 117",
    "text-title-raw": "235, 235, 235"
  }), {
    "udtoken-block-view-inline-bg-nopermission": "rgba(235, 235, 235, 0.1)",
    "udtoken-block-view-inline-bg-other": "rgba(38, 85, 182, 0.35)",
    "udtoken-block-view-inline-bg-self": "#75a4ff",
    "udtoken-btn-ghost-bg": "rgba(10, 10, 10, 0)",
    "udtoken-btn-pri-text-disabled": "rgba(235, 235, 235, 0.3)",
    "udtoken-btn-se-bg-danger-focus": "rgba(240, 91, 86, 0.2)",
    "udtoken-btn-se-bg-danger-hover": "rgba(240, 91, 86, 0.2)",
    "udtoken-btn-se-bg-danger-pressed": "rgba(240, 91, 86, 0.3)",
    "udtoken-btn-se-bg-neutral-focus": "rgba(235, 235, 235, 0.1)",
    "udtoken-btn-se-bg-neutral-hover": "rgba(235, 235, 235, 0.1)",
    "udtoken-btn-se-bg-neutral-pressed": "rgba(235, 235, 235, 0.2)",
    "udtoken-btn-se-bg-pri-focus": "rgba(76, 136, 255, 0.2)",
    "udtoken-btn-se-bg-pri-hover": "rgba(76, 136, 255, 0.2)",
    "udtoken-btn-se-bg-pri-pressed": "rgba(76, 136, 255, 0.3)",
    "udtoken-btn-selected-bg-danger-hover": "rgba(240, 91, 86, 0.3)",
    "udtoken-btn-selected-bg-danger-normal": "rgba(240, 91, 86, 0.15)",
    "udtoken-btn-selected-bg-danger-press": "rgba(240, 91, 86, 0.3)",
    "udtoken-btn-selected-bg-neutral-hover": "rgba(235, 235, 235, 0.12)",
    "udtoken-btn-selected-bg-neutral-normal": "rgba(235, 235, 235, 0.08)",
    "udtoken-btn-selected-bg-neutral-press": "rgba(235, 235, 235, 0.16)",
    "udtoken-btn-selected-bg-success-hover": "rgba(65, 158, 52, 0.2)",
    "udtoken-btn-selected-bg-success-normal": "rgba(65, 158, 52, 0.15)",
    "udtoken-btn-selected-bg-success-press": "rgba(65, 158, 52, 0.3)",
    "udtoken-btn-selected-border-neutral": "rgba(255, 255, 255, 0.5)",
    "udtoken-btn-selected-text-danger": "#f05b56",
    "udtoken-btn-selected-text-success": "#419e34",
    "udtoken-btn-text-bg-danger-focus": "rgba(240, 91, 86, 0.2)",
    "udtoken-btn-text-bg-danger-hover": "rgba(240, 91, 86, 0.2)",
    "udtoken-btn-text-bg-danger-pressed": "rgba(240, 91, 86, 0.3)",
    "udtoken-btn-text-bg-neutral-focus": "rgba(235, 235, 235, 0.1)",
    "udtoken-btn-text-bg-neutral-hover": "rgba(235, 235, 235, 0.1)",
    "udtoken-btn-text-bg-neutral-pressed": "rgba(235, 235, 235, 0.2)",
    "udtoken-btn-text-bg-pri-focus": "rgba(76, 136, 255, 0.2)",
    "udtoken-btn-text-bg-pri-hover": "rgba(76, 136, 255, 0.2)",
    "udtoken-btn-text-bg-pri-pressed": "rgba(76, 136, 255, 0.3)",
    "udtoken-colorpicker-blue": "#4c88ff",
    "udtoken-colorpicker-carmine": "#c24a8e",
    "udtoken-colorpicker-green": "#51ba43",
    "udtoken-colorpicker-indigo": "#5e68e8",
    "udtoken-colorpicker-lime": "#a6c313",
    "udtoken-colorpicker-neutral": "#757575",
    "udtoken-colorpicker-orange": "#f89e44",
    "udtoken-colorpicker-purple": "#8c55ec",
    "udtoken-colorpicker-red": "#f05b56",
    "udtoken-colorpicker-sunflower": "#f7e663",
    "udtoken-colorpicker-turquoise": "#17cfb5",
    "udtoken-colorpicker-violet": "#d661d6",
    "udtoken-colorpicker-wathet": "#51c3f0",
    "udtoken-colorpicker-yellow": "#fbcb46",
    "udtoken-component-outlined-bg": "rgba(10, 10, 10, 0)",
    "udtoken-component-text-disabled-loading": "#757575",
    "udtoken-dropdown-button-divider": "#505050",
    "udtoken-imageview-bg-mask": "rgba(235, 235, 235, 0.3)",
    "udtoken-imageview-icondisabled": "rgba(255, 255, 255, 0.6)",
    "udtoken-imageview-tooltips-bg": "#505050",
    "udtoken-input-bg-disabled": "rgba(235, 235, 235, 0.12)",
    "udtoken-message-card-bg-blue": "#173166",
    "udtoken-message-card-bg-carmine": "#591c3f",
    "udtoken-message-card-bg-green": "#173b12",
    "udtoken-message-card-bg-indigo": "#2a2d69",
    "udtoken-message-card-bg-light-neutral": "#373737",
    "udtoken-message-card-bg-lime": "#303804",
    "udtoken-message-card-bg-mask-general": "rgba(10, 10, 10, 0.3)",
    "udtoken-message-card-bg-mask-special": "rgba(10, 10, 10, 0.3)",
    "udtoken-message-card-bg-neutral": "#434343",
    "udtoken-message-card-bg-orange": "#4a2b10",
    "udtoken-message-card-bg-purple": "#3f2073",
    "udtoken-message-card-bg-red": "#591f1d",
    "udtoken-message-card-bg-turquoise": "#173b36",
    "udtoken-message-card-bg-violet": "#541854",
    "udtoken-message-card-bg-wathet": "#103647",
    "udtoken-message-card-bg-yellow": "#473409",
    "udtoken-message-card-text-blue": "#8fb4ff",
    "udtoken-message-card-text-carmine": "#fc94cf",
    "udtoken-message-card-text-green": "#69cc5c",
    "udtoken-message-card-text-indigo": "#aaaff8",
    "udtoken-message-card-text-lime": "#a6c313",
    "udtoken-message-card-text-neutral": "#cfcfcf",
    "udtoken-message-card-text-orange": "#f89e44",
    "udtoken-message-card-text-purple": "#c5a3ff",
    "udtoken-message-card-text-red": "#f89e9b",
    "udtoken-message-card-text-turquoise": "#17cfb5",
    "udtoken-message-card-text-violet": "#e99be9",
    "udtoken-message-card-text-wathet": "#51c3f0",
    "udtoken-message-card-text-yellow": "#fcd456",
    "udtoken-navigation-bar-resize-handle": "#4599ff",
    "udtoken-navigation-bar-tab-bg-black": "#0d0e12",
    "udtoken-navigation-bar-tab-bg-blue": "#141c2a",
    "udtoken-navigation-bar-tab-bg-gray": "#242424",
    "udtoken-progress-bg": "rgba(235, 235, 235, 0.2)",
    "udtoken-quote-bar-bg": "#5f5f5f",
    "udtoken-reaction-bg-grey": "#101010",
    "udtoken-reaction-bg-grey-float": "#1f1f1f",
    "udtoken-skeleton-bg": "rgba(240, 240, 240, 0.08)",
    "udtoken-skeleton-fg": "rgba(240, 240, 240, 0.05)",
    "udtoken-sliding-block-bg-disabled-loading": "#757575",
    "udtoken-steps-bg-hover": "rgba(76, 136, 255, 0.15)",
    "udtoken-switch-handle-disabled": "rgba(255, 255, 255, 0.3)",
    "udtoken-tab-pri-bg": "#194294",
    "udtoken-tab-pri-text": "#4c88ff",
    "udtoken-tab-se-bg-unselected": "rgba(235, 235, 235, 0.2)",
    "udtoken-table-bg-expand": "#0a0a0a",
    "udtoken-table-bg-grey": "#292929",
    "udtoken-table-bg-head": "#373737",
    "udtoken-table-bg-hover": "#434343",
    "udtoken-table-bg-pressed": "#5f5f5f",
    "udtoken-table-bg-selected": "#173166",
    "udtoken-tag-bg-blue": "rgba(76, 136, 255, 0.2)",
    "udtoken-tag-bg-blue-default": "rgba(117, 164, 255, 0.12)",
    "udtoken-tag-bg-blue-hover": "rgba(117, 164, 255, 0.3)",
    "udtoken-tag-bg-blue-pressed": "rgba(117, 164, 255, 0.2)",
    "udtoken-tag-bg-blue-solid": "#173166",
    "udtoken-tag-bg-carmine": "rgba(219, 94, 164, 0.2)",
    "udtoken-tag-bg-carmine-hover": "rgba(219, 94, 164, 0.3)",
    "udtoken-tag-bg-carmine-solid": "#591c3f",
    "udtoken-tag-bg-green": "rgba(65, 158, 52, 0.2)",
    "udtoken-tag-bg-green-hover": "rgba(65, 158, 52, 0.3)",
    "udtoken-tag-bg-green-solid": "#173b12",
    "udtoken-tag-bg-indigo": "rgba(123, 131, 247, 0.2)",
    "udtoken-tag-bg-indigo-hover": "rgba(123, 131, 247, 0.3)",
    "udtoken-tag-bg-indigo-solid": "#2a2d69",
    "udtoken-tag-bg-lime": "rgba(130, 153, 10, 0.2)",
    "udtoken-tag-bg-lime-hover": "rgba(130, 153, 10, 0.3)",
    "udtoken-tag-bg-lime-solid": "#303804",
    "udtoken-tag-bg-orange": "rgba(219, 112, 24, 0.2)",
    "udtoken-tag-bg-orange-hover": "rgba(219, 112, 24, 0.3)",
    "udtoken-tag-bg-orange-pressed": "rgba(219, 112, 24, 0.35)",
    "udtoken-tag-bg-orange-solid": "#4a2b10",
    "udtoken-tag-bg-purple": "rgba(165, 117, 250, 0.2)",
    "udtoken-tag-bg-purple-hover": "rgba(165, 117, 250, 0.3)",
    "udtoken-tag-bg-purple-solid": "#3f2073",
    "udtoken-tag-bg-red": "rgba(209, 70, 66, 0.2)",
    "udtoken-tag-bg-red-hover": "rgba(209, 70, 66, 0.3)",
    "udtoken-tag-bg-red-solid": "#591f1d",
    "udtoken-tag-bg-turquoise": "rgba(31, 161, 143, 0.2)",
    "udtoken-tag-bg-turquoise-hover": "rgba(31, 161, 143, 0.3)",
    "udtoken-tag-bg-turquoise-solid": "#173b36",
    "udtoken-tag-bg-violet": "rgba(214, 97, 214, 0.2)",
    "udtoken-tag-bg-violet-hover": "rgba(214, 97, 214, 0.3)",
    "udtoken-tag-bg-violet-solid": "#541854",
    "udtoken-tag-bg-wathet": "rgba(16, 153, 204, 0.2)",
    "udtoken-tag-bg-wathet-hover": "rgba(16, 153, 204, 0.3)",
    "udtoken-tag-bg-wathet-solid": "#103647",
    "udtoken-tag-bg-yellow": "rgba(212, 155, 11, 0.15)",
    "udtoken-tag-bg-yellow-hover": "rgba(240, 182, 34, 0.3)",
    "udtoken-tag-bg-yellow-solid": "#473409",
    "udtoken-tag-close-blue-disabled": "rgba(117, 164, 255, 0.8)",
    "udtoken-tag-close-blue-hover": "#75a4ff",
    "udtoken-tag-close-blue-normal": "rgba(117, 164, 255, 0.6)",
    "udtoken-tag-close-blue-pressed": "rgba(117, 164, 255, 0.8)",
    "udtoken-tag-close-orange-disabled": "rgba(219, 112, 24, 0.3)",
    "udtoken-tag-close-orange-hover": "#db7018",
    "udtoken-tag-close-orange-normal": "rgba(219, 112, 24, 0.6)",
    "udtoken-tag-close-orange-pressed": "rgba(219, 112, 24, 0.8)",
    "udtoken-tag-neutral-bg-inverse": "#5f5f5f",
    "udtoken-tag-neutral-bg-inverse-opacity": "rgba(235, 235, 235, 0.4)",
    "udtoken-tag-neutral-bg-normal": "rgba(166, 166, 166, 0.2)",
    "udtoken-tag-neutral-bg-normal-hover": "rgba(235, 235, 235, 0.3)",
    "udtoken-tag-neutral-bg-normal-pressed": "rgba(235, 235, 235, 0.4)",
    "udtoken-tag-neutral-bg-solid": "#373737",
    "udtoken-tag-neutral-close-disabled": "rgba(235, 235, 235, 0.3)",
    "udtoken-tag-neutral-close-hover": "#ebebeb",
    "udtoken-tag-neutral-close-normal": "rgba(235, 235, 235, 0.6)",
    "udtoken-tag-neutral-close-pressed": "rgba(235, 235, 235, 0.8)",
    "udtoken-tag-neutral-text-inverse": "#ffffff",
    "udtoken-tag-neutral-text-inverse-opacity": "#ffffff",
    "udtoken-tag-neutral-text-normal": "#a6a6a6",
    "udtoken-tag-neutral-text-solid": "#a6a6a6",
    "udtoken-tag-state-blue-light": "#4c88ff",
    "udtoken-tag-state-green-light": "#419e34",
    "udtoken-tag-state-grey-light": "#757575",
    "udtoken-tag-state-orange-light": "#db7018",
    "udtoken-tag-state-purple-light": "#a575fa",
    "udtoken-tag-state-red-light": "#f05b56",
    "udtoken-tag-text-blue": "#8fb4ff",
    "udtoken-tag-text-carmine": "#fc94cf",
    "udtoken-tag-text-green": "#69cc5c",
    "udtoken-tag-text-indigo": "#aaaff8",
    "udtoken-tag-text-lime": "#a6c313",
    "udtoken-tag-text-orange": "#f89e44",
    "udtoken-tag-text-purple": "#c5a3ff",
    "udtoken-tag-text-red": "#f89e9b",
    "udtoken-tag-text-s-blue": "#8fb4ff",
    "udtoken-tag-text-s-carmine": "#fc94cf",
    "udtoken-tag-text-s-green": "#69cc5c",
    "udtoken-tag-text-s-indigo": "#aaaff8",
    "udtoken-tag-text-s-lime": "#a6c313",
    "udtoken-tag-text-s-orange": "#f89e44",
    "udtoken-tag-text-s-purple": "#c5a3ff",
    "udtoken-tag-text-s-red": "#f89e9b",
    "udtoken-tag-text-s-turquoise": "#17cfb5",
    "udtoken-tag-text-s-violet": "#e99be9",
    "udtoken-tag-text-s-wathet": "#51c3f0",
    "udtoken-tag-text-s-yellow": "#fcd456",
    "udtoken-tag-text-turquoise": "#17cfb5",
    "udtoken-tag-text-violet": "#e99be9",
    "udtoken-tag-text-wathet": "#51c3f0",
    "udtoken-tag-text-yellow": "#fcd456",
    "udtoken-upload-bg-error": "rgba(235, 235, 235, 0.12)",
    "udtoken-upload-mask-img": "rgba(0, 0, 0, 0.7)"
  }), {
    "ccmtoken-color-bitable-brand": "#a45eeb",
    "ccmtoken-message-card-bg-body-embed-tips": "#434343"
  }), {
    "ccmtoken-color-bitable-brand-raw": "164, 94, 235",
    "ccmtoken-message-card-bg-body-embed-tips-raw": "67, 67, 67"
  }), {
    "ccmtoken-doc-block-bg-area": "rgba(166, 166, 166, 0.08)",
    "ccmtoken-doc-block-bg-hover": "rgba(51, 112, 235, 0.16)",
    "ccmtoken-doc-block-bg-selected": "rgba(51, 112, 235, 0.26)",
    "ccmtoken-doc-blockbackground-blue": "#192a4c",
    "ccmtoken-doc-blockbackground-blue-solid": "#203e78",
    "ccmtoken-doc-blockbackground-gray": "#434343",
    "ccmtoken-doc-blockbackground-gray-solid": "#5f5f5f",
    "ccmtoken-doc-blockbackground-green": "#1f471b",
    "ccmtoken-doc-blockbackground-green-solid": "#296b22",
    "ccmtoken-doc-blockbackground-netural": "#292929",
    "ccmtoken-doc-blockbackground-netural-solid": "#373737",
    "ccmtoken-doc-blockbackground-orange": "#57330a",
    "ccmtoken-doc-blockbackground-orange-solid": "#845117",
    "ccmtoken-doc-blockbackground-purple": "#361d61",
    "ccmtoken-doc-blockbackground-purple-solid": "#4d2691",
    "ccmtoken-doc-blockbackground-red": "#4a1d1b",
    "ccmtoken-doc-blockbackground-red-solid": "#6b2827",
    "ccmtoken-doc-blockbackground-yellow": "#5c5514",
    "ccmtoken-doc-blockbackground-yellow-solid": "#877b10",
    "ccmtoken-doc-bottom-like-bg-hover": "#e1b420",
    "ccmtoken-doc-bottom-like-bg-nomal": "#fac823",
    "ccmtoken-doc-button-bg-blue": "#192a4c",
    "ccmtoken-doc-button-bg-blue-solid": "#4c88ff",
    "ccmtoken-doc-button-bg-carmine": "#5c2542",
    "ccmtoken-doc-button-bg-carmine-solid": "#cc4792",
    "ccmtoken-doc-button-bg-green": "#1f471b",
    "ccmtoken-doc-button-bg-green-solid": "#3bb02e",
    "ccmtoken-doc-button-bg-neutral": "#373737",
    "ccmtoken-doc-button-bg-neutral-solid": "#e8e8e8",
    "ccmtoken-doc-button-bg-orange": "#57330a",
    "ccmtoken-doc-button-bg-orange-solid": "#de8218",
    "ccmtoken-doc-button-bg-purple": "#361d61",
    "ccmtoken-doc-button-bg-purple-solid": "#7c4ad4",
    "ccmtoken-doc-button-bg-red": "#4a1d1b",
    "ccmtoken-doc-button-bg-red-solid": "#cc4743",
    "ccmtoken-doc-button-bg-wathet": "#173742",
    "ccmtoken-doc-button-bg-wathet-solid": "#42bdeb",
    "ccmtoken-doc-calloutborder-blue": "#2851a3",
    "ccmtoken-doc-calloutborder-green": "#339428",
    "ccmtoken-doc-calloutborder-orange": "#bd7017",
    "ccmtoken-doc-calloutborder-purple": "#6533bd",
    "ccmtoken-doc-calloutborder-red": "#9e3836",
    "ccmtoken-doc-calloutborder-yellow": "#c7b300",
    "ccmtoken-doc-calloutborder-yellow-solid": "#e8d100",
    "ccmtoken-doc-highlightcolor-bg-blue-soft": "rgba(76, 136, 255, 0.21)",
    "ccmtoken-doc-highlightcolor-bg-blue-solid": "rgba(76, 136, 255, 0.35)",
    "ccmtoken-doc-highlightcolor-bg-green-soft": "rgba(84, 194, 72, 0.17)",
    "ccmtoken-doc-highlightcolor-bg-green-solid": "rgba(84, 194, 72, 0.28)",
    "ccmtoken-doc-highlightcolor-bg-neutral-light": "rgba(41, 41, 41, 0.6)",
    "ccmtoken-doc-highlightcolor-bg-orange-soft": "rgba(242, 150, 44, 0.17)",
    "ccmtoken-doc-highlightcolor-bg-orange-solid": "rgba(242, 150, 44, 0.28)",
    "ccmtoken-doc-highlightcolor-bg-purple-soft": "rgba(151, 98, 245, 0.24)",
    "ccmtoken-doc-highlightcolor-bg-purple-solid": "rgba(151, 98, 245, 0.4)",
    "ccmtoken-doc-highlightcolor-bg-red-soft": "rgba(240, 91, 86, 0.22)",
    "ccmtoken-doc-highlightcolor-bg-red-solid": "rgba(240, 91, 86, 0.36)",
    "ccmtoken-doc-highlightcolor-bg-sunflower-soft": "rgba(245, 226, 49, 0.13)",
    "ccmtoken-doc-highlightcolor-bg-sunflower-solid": "rgba(245, 226, 49, 0.21)",
    "ccmtoken-doc-highlightcolor-blue-soft": "rgba(76, 136, 255, 0.28)",
    "ccmtoken-doc-highlightcolor-blue-solid": "rgba(76, 136, 255, 0.46)",
    "ccmtoken-doc-highlightcolor-callout-neutral-light": "rgba(41, 41, 41, 0.6)",
    "ccmtoken-doc-highlightcolor-green-soft": "rgba(84, 194, 72, 0.22)",
    "ccmtoken-doc-highlightcolor-green-solid": "rgba(84, 194, 72, 0.36)",
    "ccmtoken-doc-highlightcolor-neutral-light": "rgba(67, 67, 67, 0.4)",
    "ccmtoken-doc-highlightcolor-neutral-soft": "rgba(80, 80, 80, 0.5)",
    "ccmtoken-doc-highlightcolor-neutral-solid": "rgba(95, 95, 95, 0.6)",
    "ccmtoken-doc-highlightcolor-orange-soft": "rgba(242, 150, 44, 0.22)",
    "ccmtoken-doc-highlightcolor-orange-solid": "rgba(242, 150, 44, 0.36)",
    "ccmtoken-doc-highlightcolor-purple-soft": "rgba(151, 98, 245, 0.31)",
    "ccmtoken-doc-highlightcolor-purple-solid": "rgba(151, 98, 245, 0.51)",
    "ccmtoken-doc-highlightcolor-red-soft": "rgba(240, 91, 86, 0.28)",
    "ccmtoken-doc-highlightcolor-red-solid": "rgba(240, 91, 86, 0.47)",
    "ccmtoken-doc-highlightcolor-sunflower-soft": "rgba(245, 226, 49, 0.16)",
    "ccmtoken-doc-highlightcolor-sunflower-solid": "rgba(245, 226, 49, 0.26)",
    "ccmtoken-doc-picture-toolbar-bg": "rgba(41, 41, 41, 0.7)",
    "ccmtoken-doc-tableheader-bg-hover": "#505050",
    "ccmtoken-doc-textcolor-blue": "#70a0ff",
    "ccmtoken-doc-textcolor-callout-gray": "#ebebeb",
    "ccmtoken-doc-textcolor-gray": "#757575",
    "ccmtoken-doc-textcolor-green": "#6dd162",
    "ccmtoken-doc-textcolor-orange": "#f5a54a",
    "ccmtoken-doc-textcolor-purple": "#a472fc",
    "ccmtoken-doc-textcolor-red": "#fa7873",
    "ccmtoken-doc-textcolor-yellow": "#fcd456",
    "ccmtoken-doc-toolbar-btn-bg-blue-hover": "rgba(117, 164, 255, 0.3)",
    "ccmtoken-doc-toolbar-btn-bg-blue-pressed": "rgba(117, 164, 255, 0.4)"
  }), {
    "ccmtoken-doc-block-bg-area-raw": "166, 166, 166",
    "ccmtoken-doc-block-bg-hover-raw": "51, 112, 235",
    "ccmtoken-doc-block-bg-selected-raw": "51, 112, 235",
    "ccmtoken-doc-blockbackground-blue-raw": "25, 42, 76",
    "ccmtoken-doc-blockbackground-blue-solid-raw": "32, 62, 120",
    "ccmtoken-doc-blockbackground-gray-raw": "67, 67, 67",
    "ccmtoken-doc-blockbackground-gray-solid-raw": "95, 95, 95",
    "ccmtoken-doc-blockbackground-green-raw": "31, 71, 27",
    "ccmtoken-doc-blockbackground-green-solid-raw": "41, 107, 34",
    "ccmtoken-doc-blockbackground-netural-raw": "41, 41, 41",
    "ccmtoken-doc-blockbackground-netural-solid-raw": "55, 55, 55",
    "ccmtoken-doc-blockbackground-orange-raw": "87, 51, 10",
    "ccmtoken-doc-blockbackground-orange-solid-raw": "132, 81, 23",
    "ccmtoken-doc-blockbackground-purple-raw": "54, 29, 97",
    "ccmtoken-doc-blockbackground-purple-solid-raw": "77, 38, 145",
    "ccmtoken-doc-blockbackground-red-raw": "74, 29, 27",
    "ccmtoken-doc-blockbackground-red-solid-raw": "107, 40, 39",
    "ccmtoken-doc-blockbackground-yellow-raw": "92, 85, 20",
    "ccmtoken-doc-blockbackground-yellow-solid-raw": "135, 123, 16",
    "ccmtoken-doc-bottom-like-bg-hover-raw": "225, 180, 32",
    "ccmtoken-doc-bottom-like-bg-nomal-raw": "250, 200, 35",
    "ccmtoken-doc-button-bg-blue-raw": "25, 42, 76",
    "ccmtoken-doc-button-bg-blue-solid-raw": "76, 136, 255",
    "ccmtoken-doc-button-bg-carmine-raw": "92, 37, 66",
    "ccmtoken-doc-button-bg-carmine-solid-raw": "204, 71, 146",
    "ccmtoken-doc-button-bg-green-raw": "31, 71, 27",
    "ccmtoken-doc-button-bg-green-solid-raw": "59, 176, 46",
    "ccmtoken-doc-button-bg-neutral-raw": "55, 55, 55",
    "ccmtoken-doc-button-bg-neutral-solid-raw": "232, 232, 232",
    "ccmtoken-doc-button-bg-orange-raw": "87, 51, 10",
    "ccmtoken-doc-button-bg-orange-solid-raw": "222, 130, 24",
    "ccmtoken-doc-button-bg-purple-raw": "54, 29, 97",
    "ccmtoken-doc-button-bg-purple-solid-raw": "124, 74, 212",
    "ccmtoken-doc-button-bg-red-raw": "74, 29, 27",
    "ccmtoken-doc-button-bg-red-solid-raw": "204, 71, 67",
    "ccmtoken-doc-button-bg-wathet-raw": "23, 55, 66",
    "ccmtoken-doc-button-bg-wathet-solid-raw": "66, 189, 235",
    "ccmtoken-doc-calloutborder-blue-raw": "40, 81, 163",
    "ccmtoken-doc-calloutborder-green-raw": "51, 148, 40",
    "ccmtoken-doc-calloutborder-orange-raw": "189, 112, 23",
    "ccmtoken-doc-calloutborder-purple-raw": "101, 51, 189",
    "ccmtoken-doc-calloutborder-red-raw": "158, 56, 54",
    "ccmtoken-doc-calloutborder-yellow-raw": "199, 179, 0",
    "ccmtoken-doc-calloutborder-yellow-solid-raw": "232, 209, 0",
    "ccmtoken-doc-highlightcolor-bg-blue-soft-raw": "76, 136, 255",
    "ccmtoken-doc-highlightcolor-bg-blue-solid-raw": "76, 136, 255",
    "ccmtoken-doc-highlightcolor-bg-green-soft-raw": "84, 194, 72",
    "ccmtoken-doc-highlightcolor-bg-green-solid-raw": "84, 194, 72",
    "ccmtoken-doc-highlightcolor-bg-neutral-light-raw": "41, 41, 41",
    "ccmtoken-doc-highlightcolor-bg-orange-soft-raw": "242, 150, 44",
    "ccmtoken-doc-highlightcolor-bg-orange-solid-raw": "242, 150, 44",
    "ccmtoken-doc-highlightcolor-bg-purple-soft-raw": "151, 98, 245",
    "ccmtoken-doc-highlightcolor-bg-purple-solid-raw": "151, 98, 245",
    "ccmtoken-doc-highlightcolor-bg-red-soft-raw": "240, 91, 86",
    "ccmtoken-doc-highlightcolor-bg-red-solid-raw": "240, 91, 86",
    "ccmtoken-doc-highlightcolor-bg-sunflower-soft-raw": "245, 226, 49",
    "ccmtoken-doc-highlightcolor-bg-sunflower-solid-raw": "245, 226, 49",
    "ccmtoken-doc-highlightcolor-blue-soft-raw": "76, 136, 255",
    "ccmtoken-doc-highlightcolor-blue-solid-raw": "76, 136, 255",
    "ccmtoken-doc-highlightcolor-callout-neutral-light-raw": "41, 41, 41",
    "ccmtoken-doc-highlightcolor-green-soft-raw": "84, 194, 72",
    "ccmtoken-doc-highlightcolor-green-solid-raw": "84, 194, 72",
    "ccmtoken-doc-highlightcolor-neutral-light-raw": "67, 67, 67",
    "ccmtoken-doc-highlightcolor-neutral-soft-raw": "80, 80, 80",
    "ccmtoken-doc-highlightcolor-neutral-solid-raw": "95, 95, 95",
    "ccmtoken-doc-highlightcolor-orange-soft-raw": "242, 150, 44",
    "ccmtoken-doc-highlightcolor-orange-solid-raw": "242, 150, 44",
    "ccmtoken-doc-highlightcolor-purple-soft-raw": "151, 98, 245",
    "ccmtoken-doc-highlightcolor-purple-solid-raw": "151, 98, 245",
    "ccmtoken-doc-highlightcolor-red-soft-raw": "240, 91, 86",
    "ccmtoken-doc-highlightcolor-red-solid-raw": "240, 91, 86",
    "ccmtoken-doc-highlightcolor-sunflower-soft-raw": "245, 226, 49",
    "ccmtoken-doc-highlightcolor-sunflower-solid-raw": "245, 226, 49",
    "ccmtoken-doc-picture-toolbar-bg-raw": "41, 41, 41",
    "ccmtoken-doc-tableheader-bg-hover-raw": "80, 80, 80",
    "ccmtoken-doc-textcolor-blue-raw": "112, 160, 255",
    "ccmtoken-doc-textcolor-callout-gray-raw": "235, 235, 235",
    "ccmtoken-doc-textcolor-gray-raw": "117, 117, 117",
    "ccmtoken-doc-textcolor-green-raw": "109, 209, 98",
    "ccmtoken-doc-textcolor-orange-raw": "245, 165, 74",
    "ccmtoken-doc-textcolor-purple-raw": "164, 114, 252",
    "ccmtoken-doc-textcolor-red-raw": "250, 120, 115",
    "ccmtoken-doc-textcolor-yellow-raw": "252, 212, 86",
    "ccmtoken-doc-toolbar-btn-bg-blue-hover-raw": "117, 164, 255",
    "ccmtoken-doc-toolbar-btn-bg-blue-pressed-raw": "117, 164, 255"
  }), {
    "ccmtoken-sheet-minichart-bright-purple": "#624bef",
    "ccmtoken-sheet-minichart-bright-yellow": "#edb118",
    "ccmtoken-sheet-minichart-fresh-cyan": "#1fd0da",
    "ccmtoken-sheet-minichart-fresh-yellow": "#eebf26",
    "ccmtoken-sheet-minichart-pastel-blue": "#4c92ad",
    "ccmtoken-sheet-minichart-pastel-yellow": "#bea41a",
    "ccmtoken-sheet-minichart-professional-blue": "#2b4b8a",
    "ccmtoken-sheet-minichart-professional-red": "#972e2b"
  }), {
    "ccmtoken-sheet-minichart-bright-purple-raw": "98, 75, 239",
    "ccmtoken-sheet-minichart-bright-yellow-raw": "237, 177, 24",
    "ccmtoken-sheet-minichart-fresh-cyan-raw": "31, 208, 218",
    "ccmtoken-sheet-minichart-fresh-yellow-raw": "238, 191, 38",
    "ccmtoken-sheet-minichart-pastel-blue-raw": "76, 146, 173",
    "ccmtoken-sheet-minichart-pastel-yellow-raw": "190, 164, 26",
    "ccmtoken-sheet-minichart-professional-blue-raw": "43, 75, 138",
    "ccmtoken-sheet-minichart-professional-red-raw": "151, 46, 43"
  }), {
    "ccmtoken-mindnote-highlightcolor-blue": "#194294",
    "ccmtoken-mindnote-highlightcolor-carmine": "#591c3f",
    "ccmtoken-mindnote-highlightcolor-lime": "#404c06",
    "ccmtoken-mindnote-highlightcolor-neutral": "#505050",
    "ccmtoken-mindnote-highlightcolor-red": "#7b2524",
    "ccmtoken-mindnote-highlightcolor-turquoise": "rgba(29, 78, 71, 0.9)",
    "ccmtoken-mindnote-highlightcolor-yellow": "rgba(99, 71, 15, 0.8)"
  }), {
    "ccmtoken-mindnote-highlightcolor-blue-raw": "25, 66, 148",
    "ccmtoken-mindnote-highlightcolor-carmine-raw": "89, 28, 63",
    "ccmtoken-mindnote-highlightcolor-lime-raw": "64, 76, 6",
    "ccmtoken-mindnote-highlightcolor-neutral-raw": "80, 80, 80",
    "ccmtoken-mindnote-highlightcolor-red-raw": "123, 37, 36",
    "ccmtoken-mindnote-highlightcolor-turquoise-raw": "29, 78, 71",
    "ccmtoken-mindnote-highlightcolor-yellow-raw": "99, 71, 15"
  }), {
    "ccmtoken-message-card-bg-body-thumbnail": "#e0e0e0",
    "ccmtoken-message-card-paragraph-bg-body": "#373737",
    "ccmtoken-message-card-paragraph-bg-body-thumbnail": "#d8d8d9"
  }), {
    "ccmtoken-tag-bg-carmine": "rgba(219, 94, 164, 0.2)",
    "ccmtoken-wiki-multipleselect-toolbar-bg": "#373737"
  }), {
    "ccmtoken-tag-bg-carmine-raw": "219, 94, 164",
    "ccmtoken-wiki-multipleselect-toolbar-bg-raw": "55, 55, 55"
  }), {
    "ccmtoken-space-bg-commandbar": "rgba(26, 26, 26, 0.9)",
    "ccmtoken-space-storage-listitem-bg-hover": "#242424",
    "ccmtoken-space-storage-listitem-bg-selected": "#222b3c"
  }), {
    "ccmtoken-space-bg-commandbar-raw": "26, 26, 26",
    "ccmtoken-space-storage-listitem-bg-hover-raw": "36, 36, 36",
    "ccmtoken-space-storage-listitem-bg-selected-raw": "34, 43, 60"
  }), {
    "B100-FG": "#c0deff",
    "B100-FG-raw": "192, 222, 255",
    "B100-BG": "#232323",
    "B100-BG-raw": "35, 35, 35",
    "B100-BD": "#00206f",
    "B100-BD-raw": "0, 32, 111",
    "B200-FG": "#aad2ff",
    "B200-FG-raw": "170, 210, 255",
    "B200-BG": "#2c2c2c",
    "B200-BG-raw": "44, 44, 44",
    "B200-BD": "#002378",
    "B200-BD-raw": "0, 35, 120",
    "B300-BG": "#002374",
    "B300-BG-raw": "0, 35, 116",
    "B400-FG": "#56a5fb",
    "B400-FG-raw": "86, 165, 251",
    "B400-BG": "#04319b",
    "B400-BG-raw": "4, 49, 155",
    "B400-BD": "#033098",
    "B400-BD-raw": "3, 48, 152",
    "B50-FG": "#cce4ff",
    "B50-FG-raw": "204, 228, 255",
    "B50-BG": "#1e1e1e",
    "B50-BG-raw": "30, 30, 30",
    "B50-BD": "#001c6b",
    "B50-BD-raw": "0, 28, 107",
    "B500-FG": "#4197f5",
    "B500-FG-raw": "65, 151, 245",
    "B500-BG": "#093aab",
    "B500-BG-raw": "9, 58, 171",
    "B500-BD": "#09359e",
    "B500-BD-raw": "9, 53, 158",
    "B600-FG": "#2b8af1",
    "B600-FG-raw": "43, 138, 241",
    "B600-BG": "#0c41bd",
    "B600-BG-raw": "12, 65, 189",
    "B700-FG": "#51a2fc",
    "B700-FG-raw": "81, 162, 252",
    "B700-BG": "#0335a8",
    "B700-BG-raw": "3, 53, 168",
    "B800-FG": "#71b5ff",
    "B800-FG-raw": "113, 181, 255",
    "B900-FG": "#8fc5ff",
    "B900-FG-raw": "143, 197, 255",
    "C300-FG": "#f48ec7",
    "C300-FG-raw": "244, 142, 199",
    "C300-BG": "#6d0b41",
    "C300-BG-raw": "109, 11, 65",
    "C50-BG": "#3a0423",
    "C50-BG-raw": "58, 4, 35",
    "C500-FG": "#d14c97",
    "C500-FG-raw": "209, 76, 151",
    "C600-FG": "#da55a0",
    "C600-FG-raw": "218, 85, 160",
    "C700-FG": "#eb67b2",
    "C700-FG-raw": "235, 103, 178",
    "C800-FG": "#f884c5",
    "C800-FG-raw": "248, 132, 197",
    "G100-FG": "#bcf1b9",
    "G100-FG-raw": "188, 241, 185",
    "G100-BG": "#1f480f",
    "G100-BG-raw": "31, 72, 15",
    "G100-BD": "#186314",
    "G100-BD-raw": "24, 99, 20",
    "G200-FG": "#90e494",
    "G200-FG-raw": "144, 228, 148",
    "G200-BG": "#1a6931",
    "G200-BG-raw": "26, 105, 49",
    "G200-BD": "#1c7220",
    "G200-BD-raw": "28, 114, 32",
    "G300-FG": "#67d472",
    "G300-FG-raw": "103, 212, 114",
    "G300-BD": "#24802e",
    "G300-BD-raw": "36, 128, 46",
    "G400-BG": "#288537",
    "G400-BG-raw": "40, 133, 55",
    "G500-FG": "#7adb87",
    "G500-FG-raw": "122, 219, 135",
    "G500-BG": "#1e6d28",
    "G500-BG-raw": "30, 109, 40",
    "G500-BD": "#2ba03b",
    "G500-BD-raw": "43, 160, 59",
    "G600-FG": "#87e494",
    "G600-FG-raw": "135, 228, 148",
    "G600-BG": "#155e1e",
    "G600-BG-raw": "21, 94, 30",
    "G700-FG": "#94f3a1",
    "G700-FG-raw": "148, 243, 161",
    "G800-FG": "#d1d1d1",
    "G800-FG-raw": "209, 209, 209",
    "G900-FG": "#dadada",
    "G900-FG-raw": "218, 218, 218",
    "I100-BG": "#222222",
    "I100-BG-raw": "34, 34, 34",
    "I100-BD": "#11155d",
    "I100-BD-raw": "17, 21, 93",
    "I300-FG": "#9ebef0",
    "I300-FG-raw": "158, 190, 240",
    "I400-FG": "#74a4f0",
    "I400-FG-raw": "116, 164, 240",
    "I400-BG": "#0e1681",
    "I400-BG-raw": "14, 22, 129",
    "I50-BG": "#1e1e1e",
    "I50-BG-raw": "30, 30, 30",
    "I500-FG": "#5f9af5",
    "I500-FG-raw": "95, 154, 245",
    "I500-BG": "#091293",
    "I500-BG-raw": "9, 18, 147",
    "I500-BD": "#091291",
    "I500-BD-raw": "9, 18, 145",
    "I600-FG": "#538de8",
    "I600-FG-raw": "83, 141, 232",
    "I700-FG": "#5c8bd6",
    "I700-FG-raw": "92, 139, 214",
    "I900-FG": "#95b7eb",
    "I900-FG-raw": "149, 183, 235",
    "L300-FG": "#d8f54a",
    "L300-FG-raw": "216, 245, 74",
    "L600-FG": "#e4f689",
    "L600-FG-raw": "228, 246, 137",
    "L700-FG": "#c9c9c9",
    "L700-FG-raw": "201, 201, 201",
    "L800-FG": "#d4d4d4",
    "L800-FG-raw": "212, 212, 212",
    "N00-FG": "#ebebeb",
    "N00-FG-raw": "235, 235, 235",
    "N00-BG": "#1a1a1a",
    "N00-BG-raw": "26, 26, 26",
    "N00-BD": "#333333",
    "N00-BD-raw": "51, 51, 51",
    "N100-FG": "#e2e2e2",
    "N100-FG-raw": "226, 226, 226",
    "N100-BG": "#212121",
    "N100-BG-raw": "33, 33, 33",
    "N100-BD": "#363636",
    "N100-BD-raw": "54, 54, 54",
    "N1000-FG": "#ebebeb",
    "N1000-FG-raw": "235, 235, 235",
    "N1000-BG": "#000000",
    "N1000-BG-raw": "0, 0, 0",
    "N1000-BD": "#808080",
    "N1000-BD-raw": "128, 128, 128",
    "N200-FG": "#e0e0e0",
    "N200-FG-raw": "224, 224, 224",
    "N200-BD": "#383838",
    "N200-BD-raw": "56, 56, 56",
    "N300-FG": "#d4d4d4",
    "N300-FG-raw": "212, 212, 212",
    "N300-BG": "#2c2c2c",
    "N300-BG-raw": "44, 44, 44",
    "N400-FG": "#bcbcbc",
    "N400-FG-raw": "188, 188, 188",
    "N50-FG": "#e4e4e4",
    "N50-FG-raw": "228, 228, 228",
    "N50-BG": "#1f1f1f",
    "N50-BG-raw": "31, 31, 31",
    "N50-BD": "#363636",
    "N50-BD-raw": "54, 54, 54",
    "N500-FG": "#9d9d9d",
    "N500-FG-raw": "157, 157, 157",
    "N500-BG": "#585858",
    "N500-BG-raw": "88, 88, 88",
    "N500-BD": "#525252",
    "N500-BD-raw": "82, 82, 82",
    "N600-FG": "#9b9b9b",
    "N600-FG-raw": "155, 155, 155",
    "N600-BG": "#565656",
    "N600-BG-raw": "86, 86, 86",
    "N600-BD": "#5f5f5f",
    "N600-BD-raw": "95, 95, 95",
    "N650-FG": "#aaaaaa",
    "N650-FG-raw": "170, 170, 170",
    "N700-FG": "#bebebe",
    "N700-FG-raw": "190, 190, 190",
    "N700-BG": "#313131",
    "N700-BG-raw": "49, 49, 49",
    "N700-BD": "#6d6d6d",
    "N700-BD-raw": "109, 109, 109",
    "N800-FG": "#c7c7c7",
    "N800-FG-raw": "199, 199, 199",
    "N800-BG": "#272727",
    "N800-BG-raw": "39, 39, 39",
    "N800-BD": "#717171",
    "N800-BD-raw": "113, 113, 113",
    "N900-FG": "#d0d0d0",
    "N900-FG-raw": "208, 208, 208",
    "N900-BG": "#191c21",
    "N900-BG-raw": "25, 28, 33",
    "N900-BD": "#757575",
    "N900-BD-raw": "117, 117, 117",
    "N950-FG": "#dedede",
    "N950-FG-raw": "222, 222, 222",
    "N950-BG": "#0c0e10",
    "N950-BG-raw": "12, 14, 16",
    "O100-FG": "#fddab3",
    "O100-FG-raw": "253, 218, 179",
    "O100-BG": "#512c02",
    "O100-BG-raw": "81, 44, 2",
    "O200-FG": "#febf81",
    "O200-FG-raw": "254, 191, 129",
    "O300-FG": "#ffa052",
    "O300-FG-raw": "255, 160, 82",
    "O300-BG": "#9f4800",
    "O300-BG-raw": "159, 72, 0",
    "O50-BG": "#432400",
    "O50-BG-raw": "67, 36, 0",
    "O50-BD": "#6e3b00",
    "O50-BD-raw": "110, 59, 0",
    "O500-FG": "#fa9548",
    "O500-FG-raw": "250, 149, 72",
    "O500-BG": "#9b4604",
    "O500-BG-raw": "155, 70, 4",
    "O500-BD": "#be5505",
    "O500-BD-raw": "190, 85, 5",
    "O600-FG": "#fba25e",
    "O600-FG-raw": "251, 162, 94",
    "O600-BG": "#833a03",
    "O600-BG-raw": "131, 58, 3",
    "O700-FG": "#faac76",
    "O700-FG-raw": "250, 172, 118",
    "O800-FG": "#fdbc8d",
    "O800-FG-raw": "253, 188, 141",
    "P100-FG": "#dac6fd",
    "P100-FG-raw": "218, 198, 253",
    "P100-BD": "#2a046a",
    "P100-BD-raw": "42, 4, 106",
    "P200-FG": "#ccb0fc",
    "P200-FG-raw": "204, 176, 252",
    "P300-FG": "#bd98fb",
    "P300-FG-raw": "189, 152, 251",
    "P400-FG": "#9f70f1",
    "P400-FG-raw": "159, 112, 241",
    "P50-BG": "#1f1f1f",
    "P50-BG-raw": "31, 31, 31",
    "P500-FG": "#925cee",
    "P500-FG-raw": "146, 92, 238",
    "P500-BG": "#411094",
    "P500-BG-raw": "65, 16, 148",
    "P500-BD": "#3e0f8f",
    "P500-BD-raw": "62, 15, 143",
    "P600-FG": "#8444f1",
    "P600-FG-raw": "132, 68, 241",
    "P700-FG": "#793de3",
    "P700-FG-raw": "121, 61, 227",
    "P800-FG": "#945fef",
    "P800-FG-raw": "148, 95, 239",
    "P900-FG": "#a978ff",
    "P900-FG-raw": "169, 120, 255",
    "R100-FG": "#fdc5c3",
    "R100-FG-raw": "253, 197, 195",
    "R100-BG": "#440502",
    "R100-BG-raw": "68, 5, 2",
    "R200-FG": "#fcafac",
    "R200-FG-raw": "252, 175, 172",
    "R300-FG": "#f7938f",
    "R300-FG-raw": "247, 147, 143",
    "R400-FG": "#f6544f",
    "R400-FG-raw": "246, 84, 79",
    "R400-BG": "#a00d09",
    "R400-BG-raw": "160, 13, 9",
    "R50-BG": "#3a0404",
    "R50-BG-raw": "58, 4, 4",
    "R500-FG": "#e5413c",
    "R500-FG-raw": "229, 65, 60",
    "R500-BG": "#ae1c17",
    "R500-BG-raw": "174, 28, 23",
    "R500-BD": "#9a1915",
    "R500-BD-raw": "154, 25, 21",
    "R600-FG": "#dc534f",
    "R600-FG-raw": "220, 83, 79",
    "R600-BG": "#9a221e",
    "R600-BG-raw": "154, 34, 30",
    "R600-BD": "#9b221f",
    "R600-BD-raw": "155, 34, 31",
    "R700-FG": "#e96964",
    "R700-FG-raw": "233, 105, 100",
    "R800-FG": "#e98b87",
    "R800-FG-raw": "233, 139, 135",
    "R900-FG": "#c9c9c9",
    "R900-FG-raw": "201, 201, 201",
    "S100-FG": "#fffb93",
    "S100-FG-raw": "255, 251, 147",
    "S200-FG": "#fff674",
    "S200-FG-raw": "255, 246, 116",
    "S300-FG": "#fff25b",
    "S300-FG-raw": "255, 242, 91",
    "S300-BG": "#988c00",
    "S300-BG-raw": "152, 140, 0",
    "S400-FG": "#ffea2d",
    "S400-FG-raw": "255, 234, 45",
    "S50-FG": "#ffffbc",
    "S50-FG-raw": "255, 255, 188",
    "S600-FG": "#ffec6d",
    "S600-FG-raw": "255, 236, 109",
    "S700-FG": "#c9c9c9",
    "S700-FG-raw": "201, 201, 201",
    "S800-FG": "#d2d2d2",
    "S800-FG-raw": "210, 210, 210",
    "S900-FG": "#dadada",
    "S900-FG-raw": "218, 218, 218",
    "T100-FG": "#b2eee6",
    "T100-FG-raw": "178, 238, 230",
    "T300-FG": "#46dac6",
    "T300-FG-raw": "70, 218, 198",
    "T300-BG": "#21a598",
    "T300-BG-raw": "33, 165, 152",
    "T400-FG": "#5ef0db",
    "T400-FG-raw": "94, 240, 219",
    "T500-FG": "#78f0e0",
    "T500-FG-raw": "120, 240, 224",
    "T600-FG": "#86f9e9",
    "T600-FG-raw": "134, 249, 233",
    "T700-FG": "#c7c7c7",
    "T700-FG-raw": "199, 199, 199",
    "T800-FG": "#d1d1d1",
    "T800-FG-raw": "209, 209, 209",
    "V400-FG": "#d269d2",
    "V400-FG-raw": "210, 105, 210",
    "V500-FG": "#c853c8",
    "V500-FG-raw": "200, 83, 200",
    "V500-BG": "#993199",
    "V500-BG-raw": "153, 49, 153",
    "V600-FG": "#d265d2",
    "V600-FG-raw": "210, 101, 210",
    "V700-FG": "#d97cd9",
    "V700-FG-raw": "217, 124, 217",
    "W100-FG": "#b2e8fb",
    "W100-FG-raw": "178, 232, 251",
    "W100-BG": "#053d51",
    "W100-BG-raw": "5, 61, 81",
    "W200-FG": "#8bd8fc",
    "W200-FG-raw": "139, 216, 252",
    "W300-FG": "#49c6f7",
    "W300-FG-raw": "73, 198, 247",
    "W300-BG": "#0779a5",
    "W300-BG-raw": "7, 121, 165",
    "W400-FG": "#44bdee",
    "W400-FG-raw": "68, 189, 238",
    "W500-FG": "#55ccfb",
    "W500-FG-raw": "85, 204, 251",
    "W600-FG": "#6bcef8",
    "W600-FG-raw": "107, 206, 248",
    "W600-BG": "#065576",
    "W600-BG-raw": "6, 85, 118",
    "W700-FG": "#81ccef",
    "W700-FG-raw": "129, 204, 239",
    "W700-BG": "#0c4662",
    "W700-BG-raw": "12, 70, 98",
    "W700-BD": "#1789be",
    "W700-BD-raw": "23, 137, 190",
    "W800-FG": "#c7c7c7",
    "W800-FG-raw": "199, 199, 199",
    "Y100-FG": "#f8e7ad",
    "Y100-FG-raw": "248, 231, 173",
    "Y100-BG": "#544207",
    "Y100-BG-raw": "84, 66, 7",
    "Y300-FG": "#fad45a",
    "Y300-FG-raw": "250, 212, 90",
    "Y300-BG": "#987504",
    "Y300-BG-raw": "152, 117, 4",
    "Y300-BD": "#967404",
    "Y300-BD-raw": "150, 116, 4",
    "Y400-FG": "#fbc036",
    "Y400-FG-raw": "251, 192, 54",
    "Y400-BG": "#ae7a03",
    "Y400-BG-raw": "174, 122, 3",
    "Y50-FG": "#f8ebc4",
    "Y50-FG-raw": "248, 235, 196",
    "Y500-FG": "#fccb57",
    "Y500-FG-raw": "252, 203, 87",
    "Y500-BG": "#8a6202",
    "Y500-BG-raw": "138, 98, 2",
    "Y600-FG": "#fccf74",
    "Y600-FG-raw": "252, 207, 116",
    "Y700-FG": "#fed585",
    "Y700-FG-raw": "254, 213, 133",
    "Y800-FG": "#cacaca",
    "Y800-FG-raw": "202, 202, 202",
    "Y800-BG": "#462b01",
    "Y800-BG-raw": "70, 43, 1",
    "Y900-FG": "#d6d6d6",
    "Y900-FG-raw": "214, 214, 214"
  });
  function nq() {
    return {
      LIGHT: nj,
      DARK: nX
    };
  }
  var themeManagementAndContextProvider = require("theme-management-and-context-provider") /*id: 829817*/;
  var colorUtils = require("color-utils") /*id: 845364*/;
  var n0 = colorUtils;
  let n1 = ["N00", "B400", "G500", "P500", "R500", "N100", "B100", "G100", "P100", "Y100", "R200", "N300", "B200", "G300", "P300", "Y400", "R400", "N500", "B500", "G600", "P600", "Y500", "R600", "N700", "B600", "G800", "P800", "Y600", "R800", "N900", "B800", "G900", "P900", "Y800", "R900"];
  let {
    LIGHT: n2,
    DARK: n5
  } = nq();
  let n3 = browserEnvDetectionUtil.browserDetector.isBytedanceApp && (browserEnvDetectionUtil.browserDetector.isMobile || browserEnvDetectionUtil.browserDetector.isIPad);
  let n4 = new Map();
  let n6 = new Map();
  function n8(t) {
    if (n3) {
      let e = n6.get(t);
      if (e) {
        return e;
      }
      let r = new n0(t);
      e = r.getAlpha() !== 1 ? r.toHex8String() : r.toHexString();
      n6.set(t, e);
      return e;
    }
    return t;
  }
  function n9(t, e) {
    let r = themeManagementAndContextProvider.getCurrentThemeType();
    if (r !== themeManagementAndContextProvider.ThemeType.DARK) {
      return t;
    }
    {
      let n = `${t.trim()}-${e}-${r}`;
      if (n4.has(n)) {
        return n4.get(n);
      }
      {
        let r = function (t, e) {
          let r = themeManagementAndContextProvider.getCurrentThemeType();
          let n = new n0(t);
          let o = n.getAlpha();
          let a = r7[n.toHexString()];
          if (!a || !(n1.indexOf(a) > -1)) {
            return n8(n$(t, e));
          }
          {
            let t = ot(a, r);
            let e = new n0(t);
            if (o < 1 && e.isValid()) {
              e.setAlpha(o);
              return e.toRgbString();
            } else {
              return t;
            }
          }
        }(t, e);
        n4.set(n, r);
        return r;
      }
    }
  }
  function n7(t) {
    return ot(t, themeManagementAndContextProvider.getCurrentThemeType());
  }
  function ot(t, e) {
    let r;
    if (r = e === themeManagementAndContextProvider.ThemeType.DARK ? n5[t] : n2[t]) {
      return n8(r);
    } else {
      return t;
    }
  }
  function oe() {
    return objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_tea_config.user_unit", "") !== objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_tea_config.service_unit", "");
  }
  let or = {
    feishu: 1161,
    lark: 1664
  };
  function on() {
    if (browserEnvDetectionUtil.browserDetector.isFromFeed() || browserEnvDetectionUtil.browserDetector.isFromSuperApp()) {
      return browserEnvConfig.getShellEnv("appId") || undefined;
    }
    let t = globalConfigHelper.getProduct();
    if (t) {
      return or[t];
    } else {
      return undefined;
    }
  }
  var immutableCore = require("immutable-core") /*id: 81885*/;
  (B = tn ||= {}).ZH = "zh_cn";
  B.EN = "en_us";
  B.JA = "ja_jp";
  class oa extends immutableCore.Record({
    display_name: {},
    cn_name: "",
    en_name: "",
    name: ""
  }) {
    constructor(t) {
      if (t) {
        super(t);
      } else {
        super();
      }
    }
    get(t) {
      return super.get(t);
    }
  }
  function oi(t = localeManagementUtils.getLocaleFlags()) {
    if (t.zh) {
      return tn.ZH;
    } else if (t.ja) {
      return tn.JA;
    } else if (t.en) {
      return tn.EN;
    } else {
      return undefined;
    }
  }
  let oc = (t, e = "", r = oi()) => t && r && t[r] || e;
  function ou(t, e = "", r = oi()) {
    let {
      i18n_value: n = {},
      value: o = ""
    } = t || {};
    return oc(n, o || e, r);
  }
  function ol(t) {
    if (immutableCore.Map.isMap(t)) {
      return t.toJS();
    } else {
      return t;
    }
  }
  function os(t, e = "", r = oi()) {
    let n = t.get("display_name") || {};
    if (n) {
      return ou(ol(n), e, r);
    } else {
      return e;
    }
  }
  function of(t, e = "", r = oi()) {
    let n = t.display_name;
    if (n) {
      return ou(ol(n), e, r);
    } else {
      return e;
    }
  }
  function od(t, e, r = "") {
    return os(t, r, e ? localeManagementUtils.localeToSnake(localeManagementUtils.resolveLocaleCode(e)) : "en_us");
  }
  var functionPlaceholderWrapper = require("function-placeholder-wrapper") /*id: 589315*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let op = new class {
    constructor() {
      this._weakMap = new WeakMap();
    }
    set(t, e) {
      let r = this._weakMap;
      for (let e = 0, n = t.length - 1; e < n; e++) {
        let n = t[e];
        let o = r.get(n);
        if (!o) {
          o = new Map();
          r.set(n, o);
        }
        r = o;
      }
      r.set(t[t.length - 1], e);
    }
    get(t) {
      let e = this._weakMap;
      for (let r = 0, n = t.length; r < n && (e = e.get(t[r]), !isUndefinedCheck.isUndefined(e)); r++);
      return e;
    }
    has(t) {
      return !isUndefinedCheck.isUndefined(this.get(t));
    }
  }();
  var objectPropertyGetter = require("object-property-getter") /*id: 570114*/;
  function o_(t, e) {
    objectPropertyGetter.getProperty(e, (e, r) => t[r] = e);
    return t;
  }
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  function om(...t) {
    return t.length >= 2 && isObjectOrFunction_1_1.isObjectOrFunction(t[0]) && isStringTypeCheck.isString(t[1]) && isFunctionUtil_1.isFunction(t[0].constructor) && t[0].constructor.prototype === t[0];
  }
  let oT = new class {
    createDecorator(t) {
      let {
        applicator: e,
        optionalParams: r
      } = t;
      return (...n) => {
        let o = n;
        let a = (r, n, a) => {
          let i = this._resolveDescriptor(r, n, a);
          let {
            value: c,
            get: u,
            set: l
          } = i;
          if (!op.has([r, n])) {
            if (isFunctionUtil_1.isFunction(c)) {
              i.value = o_(e.apply({
                config: t,
                target: r,
                value: c,
                args: o
              }), c);
            } else if (isFunctionUtil_1.isFunction(u) && t.getter) {
              i.get = o_(e.apply({
                config: t,
                target: r,
                value: u,
                args: o
              }), u);
            } else if (isFunctionUtil_1.isFunction(l) && t.setter) {
              i.set = o_(e.apply({
                config: t,
                target: r,
                value: l,
                args: o
              }), l);
            }
          }
          return i;
        };
        if (r && om(...n)) {
          o = [];
          return a(n[0], n[1], n[2]);
        } else {
          return a;
        }
      };
    }
    createInstanceDecorator(t) {
      let {
        applicator: e,
        bound: r,
        optionalParams: n
      } = t;
      return (...o) => {
        let a = o;
        let i = (n, o, i) => {
          let c = this._resolveDescriptor(n, o, i);
          let {
            value: u,
            writable: l,
            enumerable: s,
            configurable: f,
            get: d,
            set: g
          } = c;
          let b = !op.has([n, o]);
          let h = op.get([n, o]) || {
            fns: [],
            properties: []
          };
          let p = b && isFunctionUtil_1.isFunction(d);
          let w = b && isFunctionUtil_1.isFunction(g);
          let _ = b && isFunctionUtil_1.isFunction(u);
          let E = b && !p && !w && !_;
          let m = p ? d : _ ? u : undefined;
          h.properties.push(o);
          h.fns.push((o, i, c) => {
            if (!this._isApplicable(c, t)) {
              return o;
            }
            if (r) {
              var u;
              o = o_((u = o).bind(i), u);
            }
            return o_(e.apply({
              args: a,
              target: n,
              instance: i,
              value: o,
              config: t
            }), o);
          });
          op.set([n, o], h);
          if (!b) {
            return c;
          }
          h.isSetter = w;
          h.isGetter = p;
          h.isMethod = _;
          h.isProperty = E;
          let T = (t, e, r) => h.fns.reduce((t, n) => n(t, r, e), t);
          let k = t => {
            let e = d || undefined;
            let r = g || undefined;
            if (p || w) {
              if (p) {
                e = T(d, {
                  value: d,
                  getter: true
                }, t);
              }
              if (w) {
                r = T(g, {
                  value: g,
                  setter: true
                }, t);
              }
              Object.defineProperty(t, o, {
                enumerable: s,
                configurable: f,
                get: e,
                set: r
              });
            } else if (_ || E) {
              let e = _ ? T(u, {
                value: u,
                method: true
              }, t) : T(u, {
                value: u,
                property: true
              }, t);
              Object.defineProperty(t, o, {
                writable: l,
                enumerable: s,
                configurable: f,
                value: e
              });
            }
          };
          if (_ || E) {
            delete c.value;
            delete c.writable;
          }
          c.get = function () {
            if (this === n) {
              return m;
            }
            k(this);
            let t = Object.getOwnPropertyDescriptor(this, o);
            if (t.get) {
              return t.get.call(this);
            } else {
              return t.value;
            }
          };
          c.set = function (t) {
            k(this);
            let e = Object.getOwnPropertyDescriptor(this, o);
            if (e.set) {
              e.set.call(this, t);
            } else if (E || _) {
              this[o] = t;
            }
          };
          return c;
        };
        if (n && om(...o)) {
          a = [];
          return i(o[0], o[1], o[2]);
        } else {
          return i;
        }
      };
    }
    _isApplicable(t, e) {
      return (!t.getter || !!e.getter) && (!t.setter || !!e.setter) && (!t.method || !!e.method) && (!t.property || !!e.property);
    }
    _resolveDescriptor(t, e, r) {
      return r || Object.getOwnPropertyDescriptor(t, e) || {};
    }
  }();
  class ok {
    constructor(t, e, r) {
      this.options = {};
      this.execute = t;
      this.applicator = e;
      this.options = r;
    }
    get bound() {
      return !!this.options.bound && this.options.bound;
    }
    get setter() {
      return !!this.options.setter && this.options.setter;
    }
    get getter() {
      return !!this.options.getter && this.options.getter;
    }
    get property() {
      return !!this.options.property && this.options.property;
    }
    get method() {
      return !this.options.method || this.options.method;
    }
    get optionalParams() {
      return !!this.options.optionalParams && this.options.optionalParams;
    }
  }
  class ox {}
  let oI = oT.createInstanceDecorator(new ok(functionPlaceholderWrapper.createPlaceholder, new class extends ox {
    apply({
      value: t,
      config: {
        execute: e
      },
      args: r,
      instance: n,
      target: o
    }) {
      if (n) {
        return e(t, n, ...r);
      } else {
        return t;
      }
    }
  }(), {
    optionalParams: true
  }));
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  let oA = oT.createInstanceDecorator(new ok(debounceUtil_1_1.debounce, new class extends ox {
    apply({
      value: t,
      config: {
        execute: e
      },
      args: r
    }) {
      return e(t, ...r);
    }
  }(), {
    setter: true
  }));
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  function oS(t = 0, e = {}) {
    return function (r, n, o) {
      let {
        value: a
      } = o;
      if (isFunctionUtil_1.isFunction(a)) {
        return Object.assign(Object.assign({}, o), {
          value: debounceUtilWrapper.createDebounce(a, t, e)
        });
      } else {
        return o;
      }
    };
  }
  (D = to ||= {})[D.BackSpace = 8] = "BackSpace";
  D[D.Tab = 9] = "Tab";
  D[D.Clear = 12] = "Clear";
  D[D.Enter = 13] = "Enter";
  D[D.Shift = 16] = "Shift";
  D[D.Ctrl = 17] = "Ctrl";
  D[D.Alt = 18] = "Alt";
  D[D.Caps = 20] = "Caps";
  D[D.Esc = 27] = "Esc";
  D[D.Space = 32] = "Space";
  D[D.PageUp = 33] = "PageUp";
  D[D.PageDown = 34] = "PageDown";
  D[D.End = 35] = "End";
  D[D.Home = 36] = "Home";
  D[D.Left = 37] = "Left";
  D[D.Up = 38] = "Up";
  D[D.Right = 39] = "Right";
  D[D.Down = 40] = "Down";
  D[D.Delete = 46] = "Delete";
  D[D.Digit0 = 48] = "Digit0";
  D[D.Digit1 = 49] = "Digit1";
  D[D.Digit2 = 50] = "Digit2";
  D[D.Digit3 = 51] = "Digit3";
  D[D.Digit4 = 52] = "Digit4";
  D[D.Digit5 = 53] = "Digit5";
  D[D.Digit6 = 54] = "Digit6";
  D[D.Digit9 = 57] = "Digit9";
  D[D.A = 65] = "A";
  D[D.B = 66] = "B";
  D[D.C = 67] = "C";
  D[D.D = 68] = "D";
  D[D.E = 69] = "E";
  D[D.F = 70] = "F";
  D[D.G = 71] = "G";
  D[D.H = 72] = "H";
  D[D.I = 73] = "I";
  D[D.J = 74] = "J";
  D[D.K = 75] = "K";
  D[D.L = 76] = "L";
  D[D.M = 77] = "M";
  D[D.N = 78] = "N";
  D[D.O = 79] = "O";
  D[D.P = 80] = "P";
  D[D.Q = 81] = "Q";
  D[D.R = 82] = "R";
  D[D.S = 83] = "S";
  D[D.T = 84] = "T";
  D[D.U = 85] = "U";
  D[D.V = 86] = "V";
  D[D.W = 87] = "W";
  D[D.X = 88] = "X";
  D[D.Y = 89] = "Y";
  D[D.Z = 90] = "Z";
  D[D.Meta = 91] = "Meta";
  D[D.RightMeta = 92] = "RightMeta";
  D[D.Caret = 94] = "Caret";
  D[D.Numpad0 = 96] = "Numpad0";
  D[D.Numpad9 = 105] = "Numpad9";
  D[D.Asterisk = 106] = "Asterisk";
  D[D.NumpadDot = 110] = "NumpadDot";
  D[D.F2 = 113] = "F2";
  D[D.F3 = 114] = "F3";
  D[D.F4 = 115] = "F4";
  D[D.F11 = 122] = "F11";
  D[D.Semicolon = 186] = "Semicolon";
  D[D.Equal = 187] = "Equal";
  D[D.Plus = 187] = "Plus";
  D[D.Comma = 188] = "Comma";
  D[D.Minus = 189] = "Minus";
  D[D.Dot = 190] = "Dot";
  D[D.Grave = 192] = "Grave";
  D[D.Bracket = 219] = "Bracket";
  D[D.Quot = 222] = "Quot";
  D[D.Slash = 111] = "Slash";
  D[D["/"] = 191] = "/";
  D[D.Backquote = 192] = "Backquote";
  D[D["\\"] = 220] = "\\";
  D[D.BracketRight = 221] = "BracketRight";
  D[D.Ime = 229] = "Ime";
  let oN = [to.Up, to.Down, to.Left, to.Right];
  let oy = [to.C, to.V, to.X];
  let oB = [to.BackSpace, to.Delete];
  function oD(t) {
    return oG(t) && oy.indexOf(t.keyCode) !== -1;
  }
  function oL(t) {
    return oG(t) && t.keyCode === to.C;
  }
  function oG(t) {
    if (browserEnvDetectionUtil.browserDetector.isMac || browserEnvDetectionUtil.browserDetector.isIPad) {
      return t.metaKey && !t.altKey;
    } else {
      return t.ctrlKey && !t.altKey;
    }
  }
  function oC(t) {
    return oG(t) && t.keyCode === to.X;
  }
  function ov(t) {
    let {
      keyCode: e,
      altKey: r,
      ctrlKey: n,
      shiftKey: o,
      metaKey: a
    } = t;
    return !r && !n && !o && !a && (e === to.BackSpace || e === to.Delete);
  }
  function oP(t) {
    return oG(t) && t.keyCode === to.Z;
  }
  function oF(t) {
    let e = oP(t) && !!t.shiftKey;
    let r = oG(t) && t.keyCode === to.Y;
    return e || r;
  }
  function oM(t) {
    return t.keyCode === to.Esc;
  }
  function oU(t) {
    return t.keyCode === to.A && oG(t);
  }
  function oH(t) {
    let e;
    let {
      key: r,
      keyCode: n,
      which: o
    } = t;
    if (n === 229) {
      e = to[t.code] || to[r.toUpperCase()];
    }
    if (/^[a-zA-Z]$/.test(r) && to[r.toUpperCase()] !== n) {
      e = to[r.toUpperCase()];
    }
    Object.defineProperty(t, "keyCode", {
      get: () => e || n
    });
    Object.defineProperty(t, "which", {
      get: () => e || o
    });
  }
  var isDateUtil_1 = require("is-date-util_1") /*id: 650513*/;
  var isRegexpCheck = require("is-regexp-check") /*id: 600396*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  var stringDeburrTransform = require("string-deburr-transform") /*id: 318449*/;
  let o$ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function oj(t = 20) {
    let e = "";
    for (let r = 0; r < t; r++) {
      let t = Math.floor(Math.random() * o$.length);
      e += o$[t];
    }
    return e;
  }
  function oX(t, e = false) {
    return (e ? t : t.trim()) === "";
  }
  function oq(t) {
    if (t <= 65535) {
      return 2;
    } else {
      return 4;
    }
  }
  function oJ(t) {
    if (t <= 127) {
      return 1;
    } else if (t <= 2047) {
      return 2;
    } else if (t <= 65535) {
      return 3;
    } else {
      return 4;
    }
  }
  function oQ(t, e, r) {
    r = r ? r.toLowerCase() : "";
    let n = 0;
    let o = r === "utf-16" || r === "utf16" ? oq : oJ;
    for (let r = 0, a = t.length; r < a; r++) {
      if ((n += o(t.charCodeAt(r))) > e) {
        return true;
      }
    }
    return false;
  }
  function o0(t) {
    let e = "";
    while (t >= 0) {
      e = String.fromCharCode(t % 26 + 65) + e;
      t = Math.floor(t / 26) - 1;
    }
    return e;
  }
  function o1(t = "") {
    let e = t.toUpperCase();
    let r = 0;
    for (let t = e.length - 1, n = 0; t >= 0 && /[A-Z]/.test(e[t]); t--, n++) {
      r += (e.charCodeAt(t) - 64) * Math.pow(26, n);
    }
    return r - 1;
  }
  function o2(t) {
    let e = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000
    };
    let r = 0;
    for (let n = 0; n < t.length && e[t[n]]; n++) {
      if (e[t[n]] < e[t[n + 1]]) {
        r -= e[t[n]];
      } else {
        r += e[t[n]];
      }
    }
    return r;
  }
  function o5(t) {
    return o1(t.toUpperCase()) + 1;
  }
  function o3(t) {
    let e = {};
    return function (r) {
      let n = e[r];
      if (!n) {
        n = t(r);
        e[r] = t(r);
      }
      return n;
    };
  }
  let o4 = o3(function (t) {
    if (t < 1) {
      return "";
    } else {
      return o0(t - 1).toLowerCase();
    }
  });
  let o6 = o3(function (t) {
    if (t < 1) {
      return "";
    }
    if (t > 10000) {
      return String(t);
    }
    let e = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
    };
    let r = "";
    for (let n in e) {
      while (t >= e[n]) {
        r += n;
        t -= e[n];
      }
    }
    return r;
  });
  function o8(t) {
    let e = {};
    return function (r) {
      if (r in e) {
        return e[r];
      }
      let n = t(r);
      e[r] = n;
      return n;
    };
  }
  let o9 = o8(stringDeburrUtil_1.deburrString);
  let o7 = o8(stringDeburrTransform.createDeburrTransform);
  let at = RegExp(`((https?|http|ftp)://)?((${/localhost:[0-9]{2,5}/.source})|(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source}))(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?`, "gi");
  let ae = /^(https?|ftp):\/\/|mailto:/i;
  let ar = RegExp(`(${at.source})|(${eD.source})|(${eC.source})`, "gi");
  function an(t) {
    return new RegExp(ae).test(t);
  }
  function ao(t) {
    return new RegExp(ar).test(t);
  }
  function aa(t) {
    return RegExp(`^${eC.source}$`, "i").test(t);
  }
  function ai() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
      let e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
  function ac(t, e) {
    let r = t.length;
    let n = e.length;
    return r < n || !(r > n) && t < e;
  }
  function au(t, e) {
    let r = t.length;
    let n = e.length;
    return !(r < n) && (r > n || t > e);
  }
  function al(t) {
    if (t === "top") {
      return "bottom";
    } else {
      return "top";
    }
  }
  let as = t => function e(r) {
    if (!isObjectOrFunction_1_1.isObjectOrFunction(r) || isDateUtil_1.isDate(r) || isRegexpCheck.isRegExp(r)) {
      return r;
    } else if (Array.isArray(r)) {
      return r.map(e);
    } else {
      return genericReduceUtil.genericReduce(r, (r, n, o) => {
        r[t(o)] = e(n);
        return r;
      }, {});
    }
  };
  function af(t) {
    return as(o9)(t);
  }
  let ad = as(o7);
  let ag = t => {
    if (!isPlainObjectUtil.isPlainObject(t)) {
      throw Error("please offer a plain obj as parameter");
    }
    let e = {};
    let r = t => {
      for (let n in t) {
        if (isPlainObjectUtil.isPlainObject(t[n])) {
          r(t[n]);
        } else {
          e[n] = t[n];
        }
      }
    };
    r(t);
    return e;
  };
  function ab(t) {
    return t && isFunctionUtil_1.isFunction(t.then);
  }
  function ah(t, e) {
    let r = Object.assign({}, t);
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      delete r[n];
    }
    return r;
  }
  class ap {
    constructor() {
      this.frame = undefined;
    }
    hasRequested() {
      return this.frame !== undefined;
    }
    request() {
      this.cancel();
      return new Promise(t => {
        this.frame = window.requestAnimationFrame(() => {
          this.frame = undefined;
          t();
        });
      });
    }
    cancel() {
      if (this.frame !== undefined) {
        window.cancelAnimationFrame(this.frame);
        this.frame = undefined;
      }
    }
  }
  class aw {
    constructor() {
      this.frame = undefined;
      this.timer = undefined;
    }
    hasRequested() {
      return this.frame !== undefined || this.timer !== undefined;
    }
    request(t = false) {
      if (!t) {
        this.cancel();
      }
      return new Promise(t => {
        this.frame = window.requestAnimationFrame(() => {
          this.frame = undefined;
          this.timer = window.setTimeout(() => {
            this.timer = undefined;
            t();
          });
        });
      });
    }
    cancel() {
      if (this.frame !== undefined) {
        window.cancelAnimationFrame(this.frame);
        this.frame = undefined;
      }
      if (this.timer !== undefined) {
        window.clearTimeout(this.timer);
        this.timer = undefined;
      }
    }
  }
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function aE(t) {
    return t && typeof t.then == "function";
  }
  function am(t = 1000) {
    let e;
    let r = new Promise(r => {
      e = window.setTimeout(r, t);
    });
    r.cancel = () => {
      window.clearTimeout(e);
    };
    return r;
  }
  async function aT(t) {
    await am(t);
  }
  function ak(t) {
    return (e, r, n) => {
      let {
        get: o,
        set: a,
        writable: i,
        value: c
      } = n;
      let u = typescriptRuntimeHelpers.objectRest(n, ["get", "set", "writable", "value"]);
      if (!isFunctionUtil_1.isFunction(c)) {
        return n;
      }
      let l = new Map();
      return Object.assign(Object.assign({}, u), {
        value(...e) {
          let r = e[0] || t;
          if (l.get(r)) {
            return;
          }
          let n = c.call(this, ...e);
          if (aE(n)) {
            l.set(r, true);
            return n.then(t => {
              l.delete(r);
              return t;
            }).catch(t => {
              l.delete(r);
              return Promise.reject(t);
            });
          }
        }
      });
    };
  }
  function ax(t, e) {
    return (r, n, o) => {
      let {
        get: a,
        set: i,
        writable: c,
        value: u
      } = o;
      let l = typescriptRuntimeHelpers.objectRest(o, ["get", "set", "writable", "value"]);
      if (!isFunctionUtil_1.isFunction(u)) {
        return o;
      }
      let s = new Map();
      return Object.assign(Object.assign({}, l), {
        value: function r(...n) {
          let o = u.call(this, ...n);
          if (!aE(o)) {
            return;
          }
          let a = n[0] || e;
          return o.then(t => {
            s.delete(a);
            return t;
          }).catch(e => {
            let o = s.get(a) || 0;
            if (o < t) {
              s.set(a, o + 1);
              return r.call(this, ...n);
            } else {
              s.delete(a);
              return Promise.reject(e);
            }
          });
        }
      });
    };
  }
  var colorThemeConstants = require("color-theme-constants") /*id: 561108*/;
  let aO = memoizeFunction.memoize(function (t, e = 0.3) {
    return n0(t).setAlpha(e).toRgbString();
  }, (t, e = 0.3) => `${t}-${e}`);
  let aA = ["#0077ff", ...colorThemeConstants.colorPalette];
  let aR = function () {
    let t = new Map();
    let e = 0;
    return function (r) {
      let n = t.get(r);
      if (n) {
        return n;
      }
      let o = ["#E94D3D", "#E9455A", "#E93324"];
      do {
        n = aA[e];
        e = (e + 1) % aA.length;
      } while (o.indexOf(n) > -1);
      t.set(r, n);
      return n;
    };
  }();
  function aS(t) {
    return t.slice(5, -1).split(",").map(parseFloat);
  }
  let aN = function (t, e, r) {
    let n = aS(t);
    let o = aS(e);
    let a = typeof r == "number" ? Math.max(0, Math.min(100, r)) : 50;
    let i = [];
    for (let t = 0; t < 4; t++) {
      let e = n[t] + (o[t] - n[t]) * a / 100;
      i[t] = t === 3 ? e : Math.round(e);
    }
    return `rgba(${i})`;
  };
  var cookieUtilsHelper = require("cookie-utils-helper") /*id: 586277*/;
  let aB = t => {
    var e;
    var r;
    if (t) {
      if (window.getSelection) {
        let n = window.getSelection();
        if ((e = n == null ? undefined : n.selectAllChildren) !== null && e !== undefined) {
          e.call(n, t);
        }
        if ((r = n == null ? undefined : n.collapseToEnd) !== null && r !== undefined) {
          r.call(n);
        }
      } else if (document.selection) {
        let e = document.selection.createRange();
        e.moveToElementText(t);
        e.collapse(false);
        e.select();
      }
    }
  };
  var resizeObserverPolyfill_1 = require("resize-observer-polyfill_1") /*id: 767395*/;
  let aL = memoizeFunction.memoize(() => {
    let t = document.createElement("p");
    t.style.width = "100%";
    t.style.height = "200px";
    let e = document.createElement("div");
    e.style.position = "absolute";
    e.style.top = "0px";
    e.style.left = "0px";
    e.style.visibility = "hidden";
    e.style.width = "200px";
    e.style.height = "150px";
    e.style.overflow = "hidden";
    e.appendChild(t);
    document.body.appendChild(e);
    let r = t.offsetWidth;
    e.style.overflow = "scroll";
    let n = t.offsetWidth;
    if (r === n) {
      n = e.clientWidth;
    }
    document.body.removeChild(e);
    return r - n;
  });
  let aG = memoizeFunction.memoize(t => {
    let e;
    let r = document.createElement("span");
    r.style.fontSize = "96pt";
    r.style.display = "none";
    document.body.appendChild(r);
    let n = window.getComputedStyle(r).fontSize;
    e = n && n.indexOf("px") !== -1 ? 96 / parseFloat(n) : 0.75;
    document.body.removeChild(r);
    return `${Math.round(parseFloat(t) * e)}pt`;
  });
  let aC = document.createElement("span");
  let av = {};
  function aP(t = "") {
    if (av[t]) {
      return Object.assign({}, av[t]);
    }
    aC.style.font = t;
    let {
      style: e
    } = aC;
    let r = {
      fontFamily: e.fontFamily || "",
      fontSize: e.fontSize || "",
      fontStyle: e.fontStyle || "",
      fontWeight: e.fontWeight || "",
      fontVariant: e.fontVariant || "",
      lineHeight: e.lineHeight || ""
    };
    av[t] = r;
    return Object.assign({}, r);
  }
  function aF(t) {
    return ["bold", "600", "700", "800", "900"].indexOf(t) !== -1;
  }
  function aM(t, e = {}) {
    if (isFunctionUtil_1.isFunction(CustomEvent)) {
      return new CustomEvent(t, e);
    }
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail);
    return r;
  }
  function aU(t) {
    let e = [];
    for (t = t && t.parentElement; t;) {
      let r = t.getAttribute("contenteditable");
      if (r === "true" || r === "") {
        e.push(t);
        t.setAttribute("contenteditable", "false");
      }
      t = t.parentElement;
    }
    document.execCommand("selectAll");
    for (let t = 0, r = e.length; t < r; t++) {
      e[t].setAttribute("contenteditable", "true");
    }
  }
  function aH(t, e) {
    let r;
    let n = window.getSelection();
    if (!n) {
      return;
    }
    let o = n.focusNode;
    let a = n.getRangeAt(0);
    let i = (r = o.nodeName === "#text" ? a.getBoundingClientRect() : o.getBoundingClientRect()).top;
    let c = t.getBoundingClientRect();
    let u = c.top;
    let l = r.height;
    let s = c.height;
    let f = i - u;
    let d = f + l - s;
    let {
      scrollTop: g
    } = t;
    if (o !== t) {
      if (e) {
        if (f <= g) {
          t.scrollTop = f;
        } else {
          t.scrollTop = g + d;
        }
      } else if (d >= 0) {
        t.scrollTop = g + d;
      }
    }
  }
  function aW(t) {
    return t.replace(/>\s{1,}</g, "><").trim();
  }
  function aZ(t, e, r = "Top") {
    if (!t) {
      return null;
    }
    let n = `offset${r}`;
    let o = t;
    let a = 0;
    while (o !== e && o !== null) {
      a += o[n];
      let {
        offsetParent: t
      } = o;
      if (!(t instanceof HTMLElement)) {
        return null;
      }
      o = t;
    }
    return a;
  }
  let aY = (t, e, r = "body") => {
    let n = t;
    while (n) {
      if (n.getAttribute(e.key) === e.value) {
        return n;
      }
      if (document.querySelector(r) === n) {
        break;
      }
      n = n.parentElement;
    }
    return null;
  };
  function aV(t, e) {
    let r;
    let n;
    let o = new resizeObserverPolyfill_1.ResizeObserver(function ([{
      target: t
    }]) {
      let {
        width: o,
        height: a
      } = t.getBoundingClientRect();
      let i = Math.floor(o);
      let c = Math.floor(a);
      if (r !== i || n !== c) {
        e({
          width: i,
          height: c,
          isInitialized: [r, n].some(t => typeof t == "number")
        });
      }
      r = i;
      n = c;
    });
    if (t) {
      o.observe(t);
    }
    return () => {
      o.disconnect();
    };
  }
  let az = (t, e, r) => {
    let n = t.parentNode;
    while (n) {
      if (typeof e == "string") {
        if (n.classList.contains(e)) {
          return true;
        }
      } else if (e(n)) {
        return true;
      }
      if (n.classList.contains(r)) {
        break;
      }
      n = n.parentElement;
    }
    return false;
  };
  function aK(t) {
    if (!t) {
      return;
    }
    let {
      height: e,
      width: r,
      x: n,
      y: o
    } = t.getBoundingClientRect();
    let {
      height: a,
      width: i
    } = document.body.getBoundingClientRect();
    return n + r >= 0 && o + e >= 0 && n <= i && o <= a;
  }
  function a$(t) {
    let e = t.length;
    while (--e >= 0) {
      t[e] = 0;
    }
  }
  let aj = 573;
  let aX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
  let aq = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  let aJ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
  let aQ = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  let a0 = Array(576);
  a$(a0);
  let a1 = Array(60);
  a$(a1);
  let a2 = Array(512);
  a$(a2);
  let a5 = Array(256);
  a$(a5);
  let a3 = Array(29);
  a$(a3);
  let a4 = Array(30);
  function a6(t, e, r, n, o) {
    this.static_tree = t;
    this.extra_bits = e;
    this.extra_base = r;
    this.elems = n;
    this.max_length = o;
    this.has_stree = t && t.length;
  }
  function a8(t, e) {
    this.dyn_tree = t;
    this.max_code = 0;
    this.stat_desc = e;
  }
  a$(a4);
  let a9 = t => t < 256 ? a2[t] : a2[256 + (t >>> 7)];
  let a7 = (t, e) => {
    t.pending_buf[t.pending++] = e & 255;
    t.pending_buf[t.pending++] = e >>> 8 & 255;
  };
  let it = (t, e, r) => {
    if (t.bi_valid > 16 - r) {
      t.bi_buf |= e << t.bi_valid & 65535;
      a7(t, t.bi_buf);
      t.bi_buf = e >> 16 - t.bi_valid;
      t.bi_valid += r - 16;
    } else {
      t.bi_buf |= e << t.bi_valid & 65535;
      t.bi_valid += r;
    }
  };
  let ie = (t, e, r) => {
    it(t, r[e * 2], r[e * 2 + 1]);
  };
  let ir = (t, e) => {
    let r = 0;
    do {
      r |= t & 1;
      t >>>= 1;
      r <<= 1;
    } while (--e > 0);
    return r >>> 1;
  };
  let io = t => {
    if (t.bi_valid === 16) {
      a7(t, t.bi_buf);
      t.bi_buf = 0;
      t.bi_valid = 0;
    } else if (t.bi_valid >= 8) {
      t.pending_buf[t.pending++] = t.bi_buf & 255;
      t.bi_buf >>= 8;
      t.bi_valid -= 8;
    }
  };
  let ia = (t, e) => {
    let r;
    let n;
    let o;
    let a;
    let i;
    let c;
    let u = e.dyn_tree;
    let l = e.max_code;
    let s = e.stat_desc.static_tree;
    let f = e.stat_desc.has_stree;
    let d = e.stat_desc.extra_bits;
    let g = e.stat_desc.extra_base;
    let b = e.stat_desc.max_length;
    let h = 0;
    for (a = 0; a <= 15; a++) {
      t.bl_count[a] = 0;
    }
    u[t.heap[t.heap_max] * 2 + 1] = 0;
    r = t.heap_max + 1;
    for (; r < aj; r++) {
      if ((a = u[u[(n = t.heap[r]) * 2 + 1] * 2 + 1] + 1) > b) {
        a = b;
        h++;
      }
      u[n * 2 + 1] = a;
      if (!(n > l)) {
        t.bl_count[a]++;
        i = 0;
        if (n >= g) {
          i = d[n - g];
        }
        c = u[n * 2];
        t.opt_len += c * (a + i);
        if (f) {
          t.static_len += c * (s[n * 2 + 1] + i);
        }
      }
    }
    if (h !== 0) {
      do {
        for (a = b - 1; t.bl_count[a] === 0;) {
          a--;
        }
        t.bl_count[a]--;
        t.bl_count[a + 1] += 2;
        t.bl_count[b]--;
        h -= 2;
      } while (h > 0);
      for (a = b; a !== 0; a--) {
        for (n = t.bl_count[a]; n !== 0;) {
          if (!((o = t.heap[--r]) > l)) {
            if (u[o * 2 + 1] !== a) {
              t.opt_len += (a - u[o * 2 + 1]) * u[o * 2];
              u[o * 2 + 1] = a;
            }
            n--;
          }
        }
      }
    }
  };
  let ii = (t, e, r) => {
    let n;
    let o;
    let a = Array(16);
    let i = 0;
    for (n = 1; n <= 15; n++) {
      i = i + r[n - 1] << 1;
      a[n] = i;
    }
    for (o = 0; o <= e; o++) {
      let e = t[o * 2 + 1];
      if (e !== 0) {
        t[o * 2] = ir(a[e]++, e);
      }
    }
  };
  let ic = () => {
    let t;
    let e;
    let r;
    let i;
    let c;
    let u = Array(16);
    i = 0;
    r = 0;
    for (; i < 28; i++) {
      t = 0;
      a3[i] = r;
      for (; t < 1 << aX[i]; t++) {
        a5[r++] = i;
      }
    }
    a5[r - 1] = i;
    c = 0;
    i = 0;
    for (; i < 16; i++) {
      t = 0;
      a4[i] = c;
      for (; t < 1 << aq[i]; t++) {
        a2[c++] = i;
      }
    }
    for (c >>= 7; i < 30; i++) {
      t = 0;
      a4[i] = c << 7;
      for (; t < 1 << aq[i] - 7; t++) {
        a2[256 + c++] = i;
      }
    }
    for (e = 0; e <= 15; e++) {
      u[e] = 0;
    }
    for (t = 0; t <= 143;) {
      a0[t * 2 + 1] = 8;
      t++;
      u[8]++;
    }
    while (t <= 255) {
      a0[t * 2 + 1] = 9;
      t++;
      u[9]++;
    }
    while (t <= 279) {
      a0[t * 2 + 1] = 7;
      t++;
      u[7]++;
    }
    while (t <= 287) {
      a0[t * 2 + 1] = 8;
      t++;
      u[8]++;
    }
    ii(a0, 287, u);
    t = 0;
    for (; t < 30; t++) {
      a1[t * 2 + 1] = 5;
      a1[t * 2] = ir(t, 5);
    }
    n = new a6(a0, aX, 257, 286, 15);
    o = new a6(a1, aq, 0, 30, 15);
    a = new a6([], aJ, 0, 19, 7);
  };
  let iu = t => {
    let e;
    for (e = 0; e < 286; e++) {
      t.dyn_ltree[e * 2] = 0;
    }
    for (e = 0; e < 30; e++) {
      t.dyn_dtree[e * 2] = 0;
    }
    for (e = 0; e < 19; e++) {
      t.bl_tree[e * 2] = 0;
    }
    t.dyn_ltree[512] = 1;
    t.opt_len = t.static_len = 0;
    t.sym_next = t.matches = 0;
  };
  let il = t => {
    if (t.bi_valid > 8) {
      a7(t, t.bi_buf);
    } else if (t.bi_valid > 0) {
      t.pending_buf[t.pending++] = t.bi_buf;
    }
    t.bi_buf = 0;
    t.bi_valid = 0;
  };
  let is = (t, e, r, n) => {
    let o = e * 2;
    let a = r * 2;
    return t[o] < t[a] || t[o] === t[a] && n[e] <= n[r];
  };
  let id = (t, e, r) => {
    let n = t.heap[r];
    let o = r << 1;
    while (o <= t.heap_len && (o < t.heap_len && is(e, t.heap[o + 1], t.heap[o], t.depth) && o++, !is(e, n, t.heap[o], t.depth))) {
      t.heap[r] = t.heap[o];
      r = o;
      o <<= 1;
    }
    t.heap[r] = n;
  };
  let ig = (t, e, r) => {
    let n;
    let o;
    let a;
    let i;
    let c = 0;
    if (t.sym_next !== 0) {
      do {
        n = (t.pending_buf[t.sym_buf + c++] & 255) + ((t.pending_buf[t.sym_buf + c++] & 255) << 8);
        o = t.pending_buf[t.sym_buf + c++];
        if (n === 0) {
          ie(t, o, e);
        } else {
          ie(t, (a = a5[o]) + 256 + 1, e);
          if ((i = aX[a]) !== 0) {
            it(t, o -= a3[a], i);
          }
          ie(t, a = a9(--n), r);
          if ((i = aq[a]) !== 0) {
            it(t, n -= a4[a], i);
          }
        }
      } while (c < t.sym_next);
    }
    ie(t, 256, e);
  };
  let ib = (t, e) => {
    let r;
    let n;
    let o;
    let a = e.dyn_tree;
    let i = e.stat_desc.static_tree;
    let c = e.stat_desc.has_stree;
    let u = e.stat_desc.elems;
    let l = -1;
    r = 0;
    t.heap_len = 0;
    t.heap_max = aj;
    for (; r < u; r++) {
      if (a[r * 2] !== 0) {
        t.heap[++t.heap_len] = l = r;
        t.depth[r] = 0;
      } else {
        a[r * 2 + 1] = 0;
      }
    }
    while (t.heap_len < 2) {
      a[(o = t.heap[++t.heap_len] = l < 2 ? ++l : 0) * 2] = 1;
      t.depth[o] = 0;
      t.opt_len--;
      if (c) {
        t.static_len -= i[o * 2 + 1];
      }
    }
    e.max_code = l;
    r = t.heap_len >> 1;
    for (; r >= 1; r--) {
      id(t, a, r);
    }
    o = u;
    do {
      r = t.heap[1];
      t.heap[1] = t.heap[t.heap_len--];
      id(t, a, 1);
      n = t.heap[1];
      t.heap[--t.heap_max] = r;
      t.heap[--t.heap_max] = n;
      a[o * 2] = a[r * 2] + a[n * 2];
      t.depth[o] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1;
      a[r * 2 + 1] = a[n * 2 + 1] = o;
      t.heap[1] = o++;
      id(t, a, 1);
    } while (t.heap_len >= 2);
    t.heap[--t.heap_max] = t.heap[1];
    ia(t, e);
    ii(a, l, t.bl_count);
  };
  let ih = (t, e, r) => {
    let n;
    let o;
    let a = -1;
    let i = e[1];
    let c = 0;
    let u = 7;
    let l = 4;
    if (i === 0) {
      u = 138;
      l = 3;
    }
    e[(r + 1) * 2 + 1] = 65535;
    n = 0;
    for (; n <= r; n++) {
      o = i;
      i = e[(n + 1) * 2 + 1];
      if (!(++c < u) || o !== i) {
        if (c < l) {
          t.bl_tree[o * 2] += c;
        } else if (o !== 0) {
          if (o !== a) {
            t.bl_tree[o * 2]++;
          }
          t.bl_tree[32]++;
        } else if (c <= 10) {
          t.bl_tree[34]++;
        } else {
          t.bl_tree[36]++;
        }
        c = 0;
        a = o;
        if (i === 0) {
          u = 138;
          l = 3;
        } else if (o === i) {
          u = 6;
          l = 3;
        } else {
          u = 7;
          l = 4;
        }
      }
    }
  };
  let ip = (t, e, r) => {
    let n;
    let o;
    let a = -1;
    let i = e[1];
    let c = 0;
    let u = 7;
    let l = 4;
    if (i === 0) {
      u = 138;
      l = 3;
    }
    n = 0;
    for (; n <= r; n++) {
      o = i;
      i = e[(n + 1) * 2 + 1];
      if (!(++c < u) || o !== i) {
        if (c < l) {
          do {
            ie(t, o, t.bl_tree);
          } while (--c != 0);
        } else if (o !== 0) {
          if (o !== a) {
            ie(t, o, t.bl_tree);
            c--;
          }
          ie(t, 16, t.bl_tree);
          it(t, c - 3, 2);
        } else if (c <= 10) {
          ie(t, 17, t.bl_tree);
          it(t, c - 3, 3);
        } else {
          ie(t, 18, t.bl_tree);
          it(t, c - 11, 7);
        }
        c = 0;
        a = o;
        if (i === 0) {
          u = 138;
          l = 3;
        } else if (o === i) {
          u = 6;
          l = 3;
        } else {
          u = 7;
          l = 4;
        }
      }
    }
  };
  let iw = t => {
    let e;
    ih(t, t.dyn_ltree, t.l_desc.max_code);
    ih(t, t.dyn_dtree, t.d_desc.max_code);
    ib(t, t.bl_desc);
    e = 18;
    for (; e >= 3 && t.bl_tree[aQ[e] * 2 + 1] === 0; e--);
    t.opt_len += (e + 1) * 3 + 5 + 5 + 4;
    return e;
  };
  let i_ = (t, e, r, n) => {
    let o;
    it(t, e - 257, 5);
    it(t, r - 1, 5);
    it(t, n - 4, 4);
    o = 0;
    for (; o < n; o++) {
      it(t, t.bl_tree[aQ[o] * 2 + 1], 3);
    }
    ip(t, t.dyn_ltree, e - 1);
    ip(t, t.dyn_dtree, r - 1);
  };
  let iE = t => {
    let e;
    let r = 4093624447;
    for (e = 0; e <= 31; e++, r >>>= 1) {
      if (r & 1 && t.dyn_ltree[e * 2] !== 0) {
        return 0;
      }
    }
    if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
      return 1;
    }
    for (e = 32; e < 256; e++) {
      if (t.dyn_ltree[e * 2] !== 0) {
        return 1;
      }
    }
    return 0;
  };
  let im = false;
  let iT = (t, e, r, n) => {
    it(t, 0 + +!!n, 3);
    il(t);
    a7(t, r);
    a7(t, ~r);
    if (r) {
      t.pending_buf.set(t.window.subarray(e, e + r), t.pending);
    }
    t.pending += r;
  };
  var ik = {
    _tr_init: t => {
      if (!im) {
        ic();
        im = true;
      }
      t.l_desc = new a8(t.dyn_ltree, n);
      t.d_desc = new a8(t.dyn_dtree, o);
      t.bl_desc = new a8(t.bl_tree, a);
      t.bi_buf = 0;
      t.bi_valid = 0;
      iu(t);
    },
    _tr_stored_block: iT,
    _tr_flush_block: (t, e, r, n) => {
      let o;
      let a;
      let i = 0;
      if (t.level > 0) {
        if (t.strm.data_type === 2) {
          t.strm.data_type = iE(t);
        }
        ib(t, t.l_desc);
        ib(t, t.d_desc);
        i = iw(t);
        o = t.opt_len + 3 + 7 >>> 3;
        if ((a = t.static_len + 3 + 7 >>> 3) <= o) {
          o = a;
        }
      } else {
        o = a = r + 5;
      }
      if (r + 4 <= o && e !== -1) {
        iT(t, e, r, n);
      } else if (t.strategy === 4 || a === o) {
        it(t, 2 + +!!n, 3);
        ig(t, a0, a1);
      } else {
        it(t, 4 + +!!n, 3);
        i_(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, i + 1);
        ig(t, t.dyn_ltree, t.dyn_dtree);
      }
      iu(t);
      if (n) {
        il(t);
      }
    },
    _tr_tally: (t, e, r) => {
      t.pending_buf[t.sym_buf + t.sym_next++] = e;
      t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8;
      t.pending_buf[t.sym_buf + t.sym_next++] = r;
      if (e === 0) {
        t.dyn_ltree[r * 2]++;
      } else {
        t.matches++;
        e--;
        t.dyn_ltree[(a5[r] + 256 + 1) * 2]++;
        t.dyn_dtree[a9(e) * 2]++;
      }
      return t.sym_next === t.sym_end;
    },
    _tr_align: t => {
      it(t, 2, 3);
      ie(t, 256, a0);
      io(t);
    }
  };
  var ix = (t, e, r, n) => {
    let o = t & 65535 | 0;
    let a = t >>> 16 & 65535 | 0;
    let i = 0;
    while (r !== 0) {
      i = r > 2000 ? 2000 : r;
      r -= i;
      do {
        a = a + (o = o + e[n++] | 0) | 0;
      } while (--i);
      o %= 65521;
      a %= 65521;
    }
    return o | a << 16 | 0;
  };
  let iI = new Uint32Array((() => {
    let t;
    let e = [];
    for (var r = 0; r < 256; r++) {
      t = r;
      for (var n = 0; n < 8; n++) {
        t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
      }
      e[r] = t;
    }
    return e;
  })());
  var iO = (t, e, r, n) => {
    let o = n + r;
    t ^= -1;
    for (let r = n; r < o; r++) {
      t = t >>> 8 ^ iI[(t ^ e[r]) & 255];
    }
    return t ^ -1;
  };
  var iA = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  };
  var iR = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };
  let {
    _tr_init: iS,
    _tr_stored_block: iN,
    _tr_flush_block: iy,
    _tr_tally: iB,
    _tr_align: iD
  } = ik;
  let {
    Z_NO_FLUSH: iL,
    Z_PARTIAL_FLUSH: iG,
    Z_FULL_FLUSH: iC,
    Z_FINISH: iv,
    Z_BLOCK: iP,
    Z_OK: iF,
    Z_STREAM_END: iM,
    Z_STREAM_ERROR: iU,
    Z_DATA_ERROR: iH,
    Z_BUF_ERROR: iW,
    Z_DEFAULT_COMPRESSION: iZ,
    Z_FILTERED: iY,
    Z_HUFFMAN_ONLY: iV,
    Z_RLE: iz,
    Z_FIXED: iK,
    Z_DEFAULT_STRATEGY: i$,
    Z_UNKNOWN: ij,
    Z_DEFLATED: iX
  } = iR;
  let iq = 573;
  let iJ = (t, e) => {
    t.msg = iA[e];
    return e;
  };
  let iQ = t => t * 2 - (t > 4) * 9;
  let i0 = t => {
    let e = t.length;
    while (--e >= 0) {
      t[e] = 0;
    }
  };
  let i1 = t => {
    let e;
    let r;
    let n;
    let o = t.w_size;
    n = e = t.hash_size;
    do {
      r = t.head[--n];
      t.head[n] = r >= o ? r - o : 0;
    } while (--e);
    n = e = o;
    do {
      r = t.prev[--n];
      t.prev[n] = r >= o ? r - o : 0;
    } while (--e);
  };
  let i2 = (t, e, r) => (e << t.hash_shift ^ r) & t.hash_mask;
  let i5 = t => {
    let e = t.state;
    let r = e.pending;
    if (r > t.avail_out) {
      r = t.avail_out;
    }
    if (r !== 0) {
      t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + r), t.next_out);
      t.next_out += r;
      e.pending_out += r;
      t.total_out += r;
      t.avail_out -= r;
      e.pending -= r;
      if (e.pending === 0) {
        e.pending_out = 0;
      }
    }
  };
  let i3 = (t, e) => {
    iy(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e);
    t.block_start = t.strstart;
    i5(t.strm);
  };
  let i4 = (t, e) => {
    t.pending_buf[t.pending++] = e;
  };
  let i6 = (t, e) => {
    t.pending_buf[t.pending++] = e >>> 8 & 255;
    t.pending_buf[t.pending++] = e & 255;
  };
  let i8 = (t, e, r, n) => {
    let o = t.avail_in;
    if (o > n) {
      o = n;
    }
    if (o === 0) {
      return 0;
    } else {
      t.avail_in -= o;
      e.set(t.input.subarray(t.next_in, t.next_in + o), r);
      if (t.state.wrap === 1) {
        t.adler = ix(t.adler, e, o, r);
      } else if (t.state.wrap === 2) {
        t.adler = iO(t.adler, e, o, r);
      }
      t.next_in += o;
      t.total_in += o;
      return o;
    }
  };
  let i9 = (t, e) => {
    let r;
    let n;
    let o = t.max_chain_length;
    let a = t.strstart;
    let i = t.prev_length;
    let c = t.nice_match;
    let u = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0;
    let l = t.window;
    let s = t.w_mask;
    let f = t.prev;
    let d = t.strstart + 258;
    let g = l[a + i - 1];
    let b = l[a + i];
    if (t.prev_length >= t.good_match) {
      o >>= 2;
    }
    if (c > t.lookahead) {
      c = t.lookahead;
    }
    do {
      if (l[(r = e) + i] !== b || l[r + i - 1] !== g || l[r] !== l[a] || l[++r] !== l[a + 1]) {
        continue;
      }
      a += 2;
      r++;
      do ; while (l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && a < d);
      n = 258 - (d - a);
      a = d - 258;
      if (n > i) {
        t.match_start = e;
        i = n;
        if (n >= c) {
          break;
        }
        g = l[a + i - 1];
        b = l[a + i];
      }
    } while ((e = f[e & s]) > u && --o != 0);
    if (i <= t.lookahead) {
      return i;
    } else {
      return t.lookahead;
    }
  };
  let i7 = t => {
    let e;
    let r;
    let n;
    let o = t.w_size;
    do {
      r = t.window_size - t.lookahead - t.strstart;
      if (t.strstart >= o + (o - 262)) {
        t.window.set(t.window.subarray(o, o + o - r), 0);
        t.match_start -= o;
        t.strstart -= o;
        t.block_start -= o;
        if (t.insert > t.strstart) {
          t.insert = t.strstart;
        }
        i1(t);
        r += o;
      }
      if (t.strm.avail_in === 0) {
        break;
      }
      e = i8(t.strm, t.window, t.strstart + t.lookahead, r);
      t.lookahead += e;
      if (t.lookahead + t.insert >= 3) {
        n = t.strstart - t.insert;
        t.ins_h = t.window[n];
        t.ins_h = i2(t, t.ins_h, t.window[n + 1]);
        while (t.insert && (t.ins_h = i2(t, t.ins_h, t.window[n + 3 - 1]), t.prev[n & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = n, n++, t.insert--, !(t.lookahead + t.insert < 3)));
      }
    } while (t.lookahead < 262 && t.strm.avail_in !== 0);
  };
  let ct = (t, e) => {
    let r = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5;
    let n;
    let o;
    let a;
    let i = 0;
    let c = t.strm.avail_in;
    do {
      n = 65535;
      a = t.bi_valid + 42 >> 3;
      if (t.strm.avail_out < a || (a = t.strm.avail_out - a, n > (o = t.strstart - t.block_start) + t.strm.avail_in && (n = o + t.strm.avail_in), n > a && (n = a), n < r && (n === 0 && e !== iv || e === iL || n !== o + t.strm.avail_in))) {
        break;
      }
      i = +(e === iv && n === o + t.strm.avail_in);
      iN(t, 0, 0, i);
      t.pending_buf[t.pending - 4] = n;
      t.pending_buf[t.pending - 3] = n >> 8;
      t.pending_buf[t.pending - 2] = ~n;
      t.pending_buf[t.pending - 1] = ~n >> 8;
      i5(t.strm);
      if (o) {
        if (o > n) {
          o = n;
        }
        t.strm.output.set(t.window.subarray(t.block_start, t.block_start + o), t.strm.next_out);
        t.strm.next_out += o;
        t.strm.avail_out -= o;
        t.strm.total_out += o;
        t.block_start += o;
        n -= o;
      }
      if (n) {
        i8(t.strm, t.strm.output, t.strm.next_out, n);
        t.strm.next_out += n;
        t.strm.avail_out -= n;
        t.strm.total_out += n;
      }
    } while (i === 0);
    if (c -= t.strm.avail_in) {
      if (c >= t.w_size) {
        t.matches = 2;
        t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0);
        t.strstart = t.w_size;
        t.insert = t.strstart;
      } else {
        if (t.window_size - t.strstart <= c) {
          t.strstart -= t.w_size;
          t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
          if (t.matches < 2) {
            t.matches++;
          }
          if (t.insert > t.strstart) {
            t.insert = t.strstart;
          }
        }
        t.window.set(t.strm.input.subarray(t.strm.next_in - c, t.strm.next_in), t.strstart);
        t.strstart += c;
        t.insert += c > t.w_size - t.insert ? t.w_size - t.insert : c;
      }
      t.block_start = t.strstart;
    }
    if (t.high_water < t.strstart) {
      t.high_water = t.strstart;
    }
    if (i) {
      return 4;
    } else if (e !== iL && e !== iv && t.strm.avail_in === 0 && t.strstart === t.block_start) {
      return 2;
    } else {
      a = t.window_size - t.strstart;
      if (t.strm.avail_in > a && t.block_start >= t.w_size) {
        t.block_start -= t.w_size;
        t.strstart -= t.w_size;
        t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
        if (t.matches < 2) {
          t.matches++;
        }
        a += t.w_size;
        if (t.insert > t.strstart) {
          t.insert = t.strstart;
        }
      }
      if (a > t.strm.avail_in) {
        a = t.strm.avail_in;
      }
      if (a) {
        i8(t.strm, t.window, t.strstart, a);
        t.strstart += a;
        t.insert += a > t.w_size - t.insert ? t.w_size - t.insert : a;
      }
      if (t.high_water < t.strstart) {
        t.high_water = t.strstart;
      }
      a = t.bi_valid + 42 >> 3;
      r = (a = t.pending_buf_size - a > 65535 ? 65535 : t.pending_buf_size - a) > t.w_size ? t.w_size : a;
      if ((o = t.strstart - t.block_start) >= r || (o || e === iv) && e !== iL && t.strm.avail_in === 0 && o <= a) {
        n = o > a ? a : o;
        i = +(e === iv && t.strm.avail_in === 0 && n === o);
        iN(t, t.block_start, n, i);
        t.block_start += n;
        i5(t.strm);
      }
      if (i) {
        return 3;
      } else {
        return 1;
      }
    }
  };
  let ce = (t, e) => {
    let r;
    let n;
    while (true) {
      if (t.lookahead < 262) {
        i7(t);
        if (t.lookahead < 262 && e === iL) {
          return 1;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      r = 0;
      if (t.lookahead >= 3) {
        t.ins_h = i2(t, t.ins_h, t.window[t.strstart + 3 - 1]);
        r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
        t.head[t.ins_h] = t.strstart;
      }
      if (r !== 0 && t.strstart - r <= t.w_size - 262) {
        t.match_length = i9(t, r);
      }
      if (t.match_length >= 3) {
        n = iB(t, t.strstart - t.match_start, t.match_length - 3);
        t.lookahead -= t.match_length;
        if (t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
          t.match_length--;
          do {
            t.strstart++;
            t.ins_h = i2(t, t.ins_h, t.window[t.strstart + 3 - 1]);
            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
            t.head[t.ins_h] = t.strstart;
          } while (--t.match_length != 0);
          t.strstart++;
        } else {
          t.strstart += t.match_length;
          t.match_length = 0;
          t.ins_h = t.window[t.strstart];
          t.ins_h = i2(t, t.ins_h, t.window[t.strstart + 1]);
        }
      } else {
        n = iB(t, 0, t.window[t.strstart]);
        t.lookahead--;
        t.strstart++;
      }
      if (n && (i3(t, false), t.strm.avail_out === 0)) {
        return 1;
      }
    }
    t.insert = t.strstart < 2 ? t.strstart : 2;
    if (e === iv) {
      i3(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (t.sym_next && (i3(t, false), t.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  let cr = (t, e) => {
    let r;
    let n;
    let o;
    while (true) {
      if (t.lookahead < 262) {
        i7(t);
        if (t.lookahead < 262 && e === iL) {
          return 1;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      r = 0;
      if (t.lookahead >= 3) {
        t.ins_h = i2(t, t.ins_h, t.window[t.strstart + 3 - 1]);
        r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
        t.head[t.ins_h] = t.strstart;
      }
      t.prev_length = t.match_length;
      t.prev_match = t.match_start;
      t.match_length = 2;
      if (r !== 0 && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - 262) {
        t.match_length = i9(t, r);
        if (t.match_length <= 5 && (t.strategy === iY || t.match_length === 3 && t.strstart - t.match_start > 4096)) {
          t.match_length = 2;
        }
      }
      if (t.prev_length >= 3 && t.match_length <= t.prev_length) {
        o = t.strstart + t.lookahead - 3;
        n = iB(t, t.strstart - 1 - t.prev_match, t.prev_length - 3);
        t.lookahead -= t.prev_length - 1;
        t.prev_length -= 2;
        do {
          if (++t.strstart <= o) {
            t.ins_h = i2(t, t.ins_h, t.window[t.strstart + 3 - 1]);
            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
            t.head[t.ins_h] = t.strstart;
          }
        } while (--t.prev_length != 0);
        t.match_available = 0;
        t.match_length = 2;
        t.strstart++;
        if (n && (i3(t, false), t.strm.avail_out === 0)) {
          return 1;
        }
      } else if (t.match_available) {
        if (n = iB(t, 0, t.window[t.strstart - 1])) {
          i3(t, false);
        }
        t.strstart++;
        t.lookahead--;
        if (t.strm.avail_out === 0) {
          return 1;
        }
      } else {
        t.match_available = 1;
        t.strstart++;
        t.lookahead--;
      }
    }
    if (t.match_available) {
      n = iB(t, 0, t.window[t.strstart - 1]);
      t.match_available = 0;
    }
    t.insert = t.strstart < 2 ? t.strstart : 2;
    if (e === iv) {
      i3(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (t.sym_next && (i3(t, false), t.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  let cn = (t, e) => {
    let r;
    let n;
    let o;
    let a;
    let i = t.window;
    while (true) {
      if (t.lookahead <= 258) {
        i7(t);
        if (t.lookahead <= 258 && e === iL) {
          return 1;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      t.match_length = 0;
      if (t.lookahead >= 3 && t.strstart > 0 && (n = i[o = t.strstart - 1]) === i[++o] && n === i[++o] && n === i[++o]) {
        a = t.strstart + 258;
        do ; while (n === i[++o] && n === i[++o] && n === i[++o] && n === i[++o] && n === i[++o] && n === i[++o] && n === i[++o] && n === i[++o] && o < a);
        t.match_length = 258 - (a - o);
        if (t.match_length > t.lookahead) {
          t.match_length = t.lookahead;
        }
      }
      if (t.match_length >= 3) {
        r = iB(t, 1, t.match_length - 3);
        t.lookahead -= t.match_length;
        t.strstart += t.match_length;
        t.match_length = 0;
      } else {
        r = iB(t, 0, t.window[t.strstart]);
        t.lookahead--;
        t.strstart++;
      }
      if (r && (i3(t, false), t.strm.avail_out === 0)) {
        return 1;
      }
    }
    t.insert = 0;
    if (e === iv) {
      i3(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (t.sym_next && (i3(t, false), t.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  let co = (t, e) => {
    let r;
    while (true) {
      if (t.lookahead === 0 && (i7(t), t.lookahead === 0)) {
        if (e === iL) {
          return 1;
        }
        break;
      }
      t.match_length = 0;
      r = iB(t, 0, t.window[t.strstart]);
      t.lookahead--;
      t.strstart++;
      if (r && (i3(t, false), t.strm.avail_out === 0)) {
        return 1;
      }
    }
    t.insert = 0;
    if (e === iv) {
      i3(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (t.sym_next && (i3(t, false), t.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  function ca(t, e, r, n, o) {
    this.good_length = t;
    this.max_lazy = e;
    this.nice_length = r;
    this.max_chain = n;
    this.func = o;
  }
  let ci = [new ca(0, 0, 0, 0, ct), new ca(4, 4, 8, 4, ce), new ca(4, 5, 16, 8, ce), new ca(4, 6, 32, 32, ce), new ca(4, 4, 16, 16, cr), new ca(8, 16, 32, 32, cr), new ca(8, 16, 128, 128, cr), new ca(8, 32, 128, 256, cr), new ca(32, 128, 258, 1024, cr), new ca(32, 258, 258, 4096, cr)];
  let cc = t => {
    t.window_size = t.w_size * 2;
    i0(t.head);
    t.max_lazy_match = ci[t.level].max_lazy;
    t.good_match = ci[t.level].good_length;
    t.nice_match = ci[t.level].nice_length;
    t.max_chain_length = ci[t.level].max_chain;
    t.strstart = 0;
    t.block_start = 0;
    t.lookahead = 0;
    t.insert = 0;
    t.match_length = t.prev_length = 2;
    t.match_available = 0;
    t.ins_h = 0;
  };
  function cu() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = iX;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new Uint16Array(iq * 2);
    this.dyn_dtree = new Uint16Array(122);
    this.bl_tree = new Uint16Array(78);
    i0(this.dyn_ltree);
    i0(this.dyn_dtree);
    i0(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new Uint16Array(16);
    this.heap = new Uint16Array(573);
    i0(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new Uint16Array(573);
    i0(this.depth);
    this.sym_buf = 0;
    this.lit_bufsize = 0;
    this.sym_next = 0;
    this.sym_end = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  let cl = t => {
    if (!t) {
      return 1;
    }
    let e = t.state;
    if (e && e.strm === t && (e.status === 42 || e.status === 57 || e.status === 69 || e.status === 73 || e.status === 91 || e.status === 103 || e.status === 113 || e.status === 666)) {
      return 0;
    } else {
      return 1;
    }
  };
  let cs = t => {
    if (cl(t)) {
      return iJ(t, iU);
    }
    t.total_in = t.total_out = 0;
    t.data_type = ij;
    let e = t.state;
    e.pending = 0;
    e.pending_out = 0;
    if (e.wrap < 0) {
      e.wrap = -e.wrap;
    }
    e.status = e.wrap === 2 ? 57 : e.wrap ? 42 : 113;
    t.adler = +(e.wrap !== 2);
    e.last_flush = -2;
    iS(e);
    return iF;
  };
  let cf = t => {
    let e = cs(t);
    if (e === iF) {
      cc(t.state);
    }
    return e;
  };
  var cd = {
    deflateInit2: (t, e, r, n, o, a) => {
      if (!t) {
        return iU;
      }
      let i = 1;
      if (e === iZ) {
        e = 6;
      }
      if (n < 0) {
        i = 0;
        n = -n;
      } else if (n > 15) {
        i = 2;
        n -= 16;
      }
      if (o < 1 || o > 9 || r !== iX || n < 8 || n > 15 || e < 0 || e > 9 || a < 0 || a > iK || n === 8 && i !== 1) {
        return iJ(t, iU);
      }
      if (n === 8) {
        n = 9;
      }
      let c = new cu();
      t.state = c;
      c.strm = t;
      c.status = 42;
      c.wrap = i;
      c.gzhead = null;
      c.w_bits = n;
      c.w_size = 1 << c.w_bits;
      c.w_mask = c.w_size - 1;
      c.hash_bits = o + 7;
      c.hash_size = 1 << c.hash_bits;
      c.hash_mask = c.hash_size - 1;
      c.hash_shift = ~~((c.hash_bits + 3 - 1) / 3);
      c.window = new Uint8Array(c.w_size * 2);
      c.head = new Uint16Array(c.hash_size);
      c.prev = new Uint16Array(c.w_size);
      c.lit_bufsize = 1 << o + 6;
      c.pending_buf_size = c.lit_bufsize * 4;
      c.pending_buf = new Uint8Array(c.pending_buf_size);
      c.sym_buf = c.lit_bufsize;
      c.sym_end = (c.lit_bufsize - 1) * 3;
      c.level = e;
      c.strategy = a;
      c.method = r;
      return cf(t);
    },
    deflateSetHeader: (t, e) => cl(t) || t.state.wrap !== 2 ? iU : (t.state.gzhead = e, iF),
    deflate: (t, e) => {
      if (cl(t) || e > iP || e < 0) {
        if (t) {
          return iJ(t, iU);
        } else {
          return iU;
        }
      }
      let r = t.state;
      if (!t.output || t.avail_in !== 0 && !t.input || r.status === 666 && e !== iv) {
        return iJ(t, t.avail_out === 0 ? iW : iU);
      }
      let n = r.last_flush;
      r.last_flush = e;
      if (r.pending !== 0) {
        i5(t);
        if (t.avail_out === 0) {
          r.last_flush = -1;
          return iF;
        }
      } else if (t.avail_in === 0 && iQ(e) <= iQ(n) && e !== iv) {
        return iJ(t, iW);
      }
      if (r.status === 666 && t.avail_in !== 0) {
        return iJ(t, iW);
      }
      if (r.status === 42 && r.wrap === 0) {
        r.status = 113;
      }
      if (r.status === 42) {
        let e = iX + (r.w_bits - 8 << 4) << 8;
        let n = -1;
        e |= (r.strategy >= iV || r.level < 2 ? 0 : r.level < 6 ? 1 : r.level === 6 ? 2 : 3) << 6;
        if (r.strstart !== 0) {
          e |= 32;
        }
        i6(r, e += 31 - e % 31);
        if (r.strstart !== 0) {
          i6(r, t.adler >>> 16);
          i6(r, t.adler & 65535);
        }
        t.adler = 1;
        r.status = 113;
        i5(t);
        if (r.pending !== 0) {
          r.last_flush = -1;
          return iF;
        }
      }
      if (r.status === 57) {
        t.adler = 0;
        i4(r, 31);
        i4(r, 139);
        i4(r, 8);
        if (r.gzhead) {
          i4(r, +!!r.gzhead.text + !!r.gzhead.hcrc * 2 + !!r.gzhead.extra * 4 + !!r.gzhead.name * 8 + !!r.gzhead.comment * 16);
          i4(r, r.gzhead.time & 255);
          i4(r, r.gzhead.time >> 8 & 255);
          i4(r, r.gzhead.time >> 16 & 255);
          i4(r, r.gzhead.time >> 24 & 255);
          i4(r, r.level === 9 ? 2 : (r.strategy >= iV || r.level < 2) * 4);
          i4(r, r.gzhead.os & 255);
          if (r.gzhead.extra && r.gzhead.extra.length) {
            i4(r, r.gzhead.extra.length & 255);
            i4(r, r.gzhead.extra.length >> 8 & 255);
          }
          if (r.gzhead.hcrc) {
            t.adler = iO(t.adler, r.pending_buf, r.pending, 0);
          }
          r.gzindex = 0;
          r.status = 69;
        } else {
          i4(r, 0);
          i4(r, 0);
          i4(r, 0);
          i4(r, 0);
          i4(r, 0);
          i4(r, r.level === 9 ? 2 : (r.strategy >= iV || r.level < 2) * 4);
          i4(r, 3);
          r.status = 113;
          i5(t);
          if (r.pending !== 0) {
            r.last_flush = -1;
            return iF;
          }
        }
      }
      if (r.status === 69) {
        if (r.gzhead.extra) {
          let e = r.pending;
          let n = (r.gzhead.extra.length & 65535) - r.gzindex;
          while (r.pending + n > r.pending_buf_size) {
            let o = r.pending_buf_size - r.pending;
            r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + o), r.pending);
            r.pending = r.pending_buf_size;
            if (r.gzhead.hcrc && r.pending > e) {
              t.adler = iO(t.adler, r.pending_buf, r.pending - e, e);
            }
            r.gzindex += o;
            i5(t);
            if (r.pending !== 0) {
              r.last_flush = -1;
              return iF;
            }
            e = 0;
            n -= o;
          }
          let o = new Uint8Array(r.gzhead.extra);
          r.pending_buf.set(o.subarray(r.gzindex, r.gzindex + n), r.pending);
          r.pending += n;
          if (r.gzhead.hcrc && r.pending > e) {
            t.adler = iO(t.adler, r.pending_buf, r.pending - e, e);
          }
          r.gzindex = 0;
        }
        r.status = 73;
      }
      if (r.status === 73) {
        if (r.gzhead.name) {
          let e;
          let n = r.pending;
          do {
            if (r.pending === r.pending_buf_size) {
              if (r.gzhead.hcrc && r.pending > n) {
                t.adler = iO(t.adler, r.pending_buf, r.pending - n, n);
              }
              i5(t);
              if (r.pending !== 0) {
                r.last_flush = -1;
                return iF;
              }
              n = 0;
            }
            e = r.gzindex < r.gzhead.name.length ? r.gzhead.name.charCodeAt(r.gzindex++) & 255 : 0;
            i4(r, e);
          } while (e !== 0);
          if (r.gzhead.hcrc && r.pending > n) {
            t.adler = iO(t.adler, r.pending_buf, r.pending - n, n);
          }
          r.gzindex = 0;
        }
        r.status = 91;
      }
      if (r.status === 91) {
        if (r.gzhead.comment) {
          let e;
          let n = r.pending;
          do {
            if (r.pending === r.pending_buf_size) {
              if (r.gzhead.hcrc && r.pending > n) {
                t.adler = iO(t.adler, r.pending_buf, r.pending - n, n);
              }
              i5(t);
              if (r.pending !== 0) {
                r.last_flush = -1;
                return iF;
              }
              n = 0;
            }
            e = r.gzindex < r.gzhead.comment.length ? r.gzhead.comment.charCodeAt(r.gzindex++) & 255 : 0;
            i4(r, e);
          } while (e !== 0);
          if (r.gzhead.hcrc && r.pending > n) {
            t.adler = iO(t.adler, r.pending_buf, r.pending - n, n);
          }
        }
        r.status = 103;
      }
      if (r.status === 103) {
        if (r.gzhead.hcrc) {
          if (r.pending + 2 > r.pending_buf_size && (i5(t), r.pending !== 0)) {
            r.last_flush = -1;
            return iF;
          }
          i4(r, t.adler & 255);
          i4(r, t.adler >> 8 & 255);
          t.adler = 0;
        }
        r.status = 113;
        i5(t);
        if (r.pending !== 0) {
          r.last_flush = -1;
          return iF;
        }
      }
      if (t.avail_in !== 0 || r.lookahead !== 0 || e !== iL && r.status !== 666) {
        let n = r.level === 0 ? ct(r, e) : r.strategy === iV ? co(r, e) : r.strategy === iz ? cn(r, e) : ci[r.level].func(r, e);
        if (n === 3 || n === 4) {
          r.status = 666;
        }
        if (n === 1 || n === 3) {
          if (t.avail_out === 0) {
            r.last_flush = -1;
          }
          return iF;
        }
        if (n === 2 && (e === iG ? iD(r) : e !== iP && (iN(r, 0, 0, false), e === iC && (i0(r.head), r.lookahead === 0 && (r.strstart = 0, r.block_start = 0, r.insert = 0))), i5(t), t.avail_out === 0)) {
          r.last_flush = -1;
          return iF;
        }
      }
      if (e !== iv) {
        return iF;
      } else if (r.wrap <= 0) {
        return iM;
      } else {
        if (r.wrap === 2) {
          i4(r, t.adler & 255);
          i4(r, t.adler >> 8 & 255);
          i4(r, t.adler >> 16 & 255);
          i4(r, t.adler >> 24 & 255);
          i4(r, t.total_in & 255);
          i4(r, t.total_in >> 8 & 255);
          i4(r, t.total_in >> 16 & 255);
          i4(r, t.total_in >> 24 & 255);
        } else {
          i6(r, t.adler >>> 16);
          i6(r, t.adler & 65535);
        }
        i5(t);
        if (r.wrap > 0) {
          r.wrap = -r.wrap;
        }
        if (r.pending !== 0) {
          return iF;
        } else {
          return iM;
        }
      }
    },
    deflateEnd: t => {
      if (cl(t)) {
        return iU;
      }
      let e = t.state.status;
      t.state = null;
      if (e === 113) {
        return iJ(t, iH);
      } else {
        return iF;
      }
    },
    deflateSetDictionary: (t, e) => {
      let r = e.length;
      if (cl(t)) {
        return iU;
      }
      let n = t.state;
      let o = n.wrap;
      if (o === 2 || o === 1 && n.status !== 42 || n.lookahead) {
        return iU;
      }
      if (o === 1) {
        t.adler = ix(t.adler, e, r, 0);
      }
      n.wrap = 0;
      if (r >= n.w_size) {
        if (o === 0) {
          i0(n.head);
          n.strstart = 0;
          n.block_start = 0;
          n.insert = 0;
        }
        let t = new Uint8Array(n.w_size);
        t.set(e.subarray(r - n.w_size, r), 0);
        e = t;
        r = n.w_size;
      }
      let a = t.avail_in;
      let i = t.next_in;
      let c = t.input;
      t.avail_in = r;
      t.next_in = 0;
      t.input = e;
      i7(n);
      while (n.lookahead >= 3) {
        let t = n.strstart;
        let e = n.lookahead - 2;
        do {
          n.ins_h = i2(n, n.ins_h, n.window[t + 3 - 1]);
          n.prev[t & n.w_mask] = n.head[n.ins_h];
          n.head[n.ins_h] = t;
          t++;
        } while (--e);
        n.strstart = t;
        n.lookahead = 2;
        i7(n);
      }
      n.strstart += n.lookahead;
      n.block_start = n.strstart;
      n.insert = n.lookahead;
      n.lookahead = 0;
      n.match_length = n.prev_length = 2;
      n.match_available = 0;
      t.next_in = i;
      t.input = c;
      t.avail_in = a;
      n.wrap = o;
      return iF;
    }
  };
  let cg = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  var cb = {
    assign: function (t) {
      let e = Array.prototype.slice.call(arguments, 1);
      while (e.length) {
        let r = e.shift();
        if (r) {
          if (typeof r != "object") {
            throw TypeError(r + "must be non-object");
          }
          for (let e in r) {
            if (cg(r, e)) {
              t[e] = r[e];
            }
          }
        }
      }
      return t;
    },
    flattenChunks: t => {
      let e = 0;
      for (let r = 0, n = t.length; r < n; r++) {
        e += t[r].length;
      }
      let r = new Uint8Array(e);
      for (let e = 0, n = 0, o = t.length; e < o; e++) {
        let o = t[e];
        r.set(o, n);
        n += o.length;
      }
      return r;
    }
  };
  let ch = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    ch = false;
  }
  let cp = new Uint8Array(256);
  for (let t = 0; t < 256; t++) {
    cp[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
  }
  cp[254] = cp[254] = 1;
  let cw = (t, e) => {
    if (e < 65534 && t.subarray && ch) {
      return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
    }
    let r = "";
    for (let n = 0; n < e; n++) {
      r += String.fromCharCode(t[n]);
    }
    return r;
  };
  var c_ = {
    string2buf: t => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(t);
      }
      let e;
      let r;
      let n;
      let o;
      let a;
      let i = t.length;
      let c = 0;
      for (o = 0; o < i; o++) {
        if (((r = t.charCodeAt(o)) & 64512) == 55296 && o + 1 < i && ((n = t.charCodeAt(o + 1)) & 64512) == 56320) {
          r = 65536 + (r - 55296 << 10) + (n - 56320);
          o++;
        }
        c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
      }
      a = 0;
      e = new Uint8Array(c);
      o = 0;
      for (; a < c; o++) {
        if (((r = t.charCodeAt(o)) & 64512) == 55296 && o + 1 < i && ((n = t.charCodeAt(o + 1)) & 64512) == 56320) {
          r = 65536 + (r - 55296 << 10) + (n - 56320);
          o++;
        }
        if (r < 128) {
          e[a++] = r;
        } else {
          if (r < 2048) {
            e[a++] = r >>> 6 | 192;
          } else {
            if (r < 65536) {
              e[a++] = r >>> 12 | 224;
            } else {
              e[a++] = r >>> 18 | 240;
              e[a++] = r >>> 12 & 63 | 128;
            }
            e[a++] = r >>> 6 & 63 | 128;
          }
          e[a++] = r & 63 | 128;
        }
      }
      return e;
    },
    buf2string: (t, e) => {
      let r;
      let n;
      let o = e || t.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(t.subarray(0, e));
      }
      let a = Array(o * 2);
      n = 0;
      r = 0;
      while (r < o) {
        let e = t[r++];
        if (e < 128) {
          a[n++] = e;
          continue;
        }
        let i = cp[e];
        if (i > 4) {
          a[n++] = 65533;
          r += i - 1;
          continue;
        }
        for (e &= i === 2 ? 31 : i === 3 ? 15 : 7; i > 1 && r < o;) {
          e = e << 6 | t[r++] & 63;
          i--;
        }
        if (i > 1) {
          a[n++] = 65533;
          continue;
        }
        if (e < 65536) {
          a[n++] = e;
        } else {
          e -= 65536;
          a[n++] = e >> 10 & 1023 | 55296;
          a[n++] = e & 1023 | 56320;
        }
      }
      return cw(a, n);
    },
    utf8border: (t, e) => {
      if ((e = e || t.length) > t.length) {
        e = t.length;
      }
      let r = e - 1;
      while (r >= 0 && (t[r] & 192) == 128) {
        r--;
      }
      if (r < 0 || r === 0) {
        return e;
      } else if (r + cp[t[r]] > e) {
        return r;
      } else {
        return e;
      }
    }
  };
  function cE() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  let cm = Object.prototype.toString;
  let {
    Z_NO_FLUSH: cT,
    Z_SYNC_FLUSH: ck,
    Z_FULL_FLUSH: cx,
    Z_FINISH: cI,
    Z_OK: cO,
    Z_STREAM_END: cA,
    Z_DEFAULT_COMPRESSION: cR,
    Z_DEFAULT_STRATEGY: cS,
    Z_DEFLATED: cN
  } = iR;
  function cy(t) {
    this.options = cb.assign({
      level: cR,
      method: cN,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: cS
    }, t || {});
    let e = this.options;
    if (e.raw && e.windowBits > 0) {
      e.windowBits = -e.windowBits;
    } else if (e.gzip && e.windowBits > 0 && e.windowBits < 16) {
      e.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new cE();
    this.strm.avail_out = 0;
    let r = cd.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (r !== cO) {
      throw Error(iA[r]);
    }
    if (e.header) {
      cd.deflateSetHeader(this.strm, e.header);
    }
    if (e.dictionary) {
      let t;
      t = typeof e.dictionary == "string" ? c_.string2buf(e.dictionary) : cm.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary;
      if ((r = cd.deflateSetDictionary(this.strm, t)) !== cO) {
        throw Error(iA[r]);
      }
      this._dict_set = true;
    }
  }
  function cB(t, e) {
    let r = new cy(e);
    r.push(t, true);
    if (r.err) {
      throw r.msg || iA[r.err];
    }
    return r.result;
  }
  cy.prototype.push = function (t, e) {
    let r;
    let n;
    let o = this.strm;
    let a = this.options.chunkSize;
    if (this.ended) {
      return false;
    }
    n = e === ~~e ? e : e === true ? cI : cT;
    if (typeof t == "string") {
      o.input = c_.string2buf(t);
    } else if (cm.call(t) === "[object ArrayBuffer]") {
      o.input = new Uint8Array(t);
    } else {
      o.input = t;
    }
    o.next_in = 0;
    o.avail_in = o.input.length;
    while (true) {
      if (o.avail_out === 0) {
        o.output = new Uint8Array(a);
        o.next_out = 0;
        o.avail_out = a;
      }
      if ((n === ck || n === cx) && o.avail_out <= 6) {
        this.onData(o.output.subarray(0, o.next_out));
        o.avail_out = 0;
        continue;
      }
      if ((r = cd.deflate(o, n)) === cA) {
        if (o.next_out > 0) {
          this.onData(o.output.subarray(0, o.next_out));
        }
        r = cd.deflateEnd(this.strm);
        this.onEnd(r);
        this.ended = true;
        return r === cO;
      }
      if (o.avail_out === 0) {
        this.onData(o.output);
        continue;
      }
      if (n > 0 && o.next_out > 0) {
        this.onData(o.output.subarray(0, o.next_out));
        o.avail_out = 0;
        continue;
      }
      if (o.avail_in === 0) {
        break;
      }
    }
    return true;
  };
  cy.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  cy.prototype.onEnd = function (t) {
    if (t === cO) {
      this.result = cb.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = t;
    this.msg = this.strm.msg;
  };
  function cD(t, e) {
    let r;
    let n;
    let o;
    let a;
    let i;
    let c;
    let u;
    let l;
    let s;
    let f;
    let d;
    let g;
    let b;
    let h;
    let p;
    let w;
    let _;
    let E;
    let m;
    let T;
    let k;
    let x;
    let I;
    let O;
    let A = t.state;
    r = t.next_in;
    I = t.input;
    n = r + (t.avail_in - 5);
    o = t.next_out;
    O = t.output;
    a = o - (e - t.avail_out);
    i = o + (t.avail_out - 257);
    c = A.dmax;
    u = A.wsize;
    l = A.whave;
    s = A.wnext;
    f = A.window;
    d = A.hold;
    g = A.bits;
    b = A.lencode;
    h = A.distcode;
    p = (1 << A.lenbits) - 1;
    w = (1 << A.distbits) - 1;
    t: do {
      if (g < 15) {
        d += I[r++] << g;
        g += 8;
        d += I[r++] << g;
        g += 8;
      }
      _ = b[d & p];
      while (true) {
        d >>>= E = _ >>> 24;
        g -= E;
        if ((E = _ >>> 16 & 255) == 0) {
          O[o++] = _ & 65535;
        } else if (E & 16) {
          m = _ & 65535;
          if (E &= 15) {
            if (g < E) {
              d += I[r++] << g;
              g += 8;
            }
            m += d & (1 << E) - 1;
            d >>>= E;
            g -= E;
          }
          if (g < 15) {
            d += I[r++] << g;
            g += 8;
            d += I[r++] << g;
            g += 8;
          }
          _ = h[d & w];
          while (true) {
            d >>>= E = _ >>> 24;
            g -= E;
            if ((E = _ >>> 16 & 255) & 16) {
              T = _ & 65535;
              if (g < (E &= 15)) {
                d += I[r++] << g;
                if ((g += 8) < E) {
                  d += I[r++] << g;
                  g += 8;
                }
              }
              if ((T += d & (1 << E) - 1) > c) {
                t.msg = "invalid distance too far back";
                A.mode = 16209;
                break t;
              }
              d >>>= E;
              g -= E;
              if (T > (E = o - a)) {
                if ((E = T - E) > l && A.sane) {
                  t.msg = "invalid distance too far back";
                  A.mode = 16209;
                  break t;
                }
                k = 0;
                x = f;
                if (s === 0) {
                  k += u - E;
                  if (E < m) {
                    m -= E;
                    do {
                      O[o++] = f[k++];
                    } while (--E);
                    k = o - T;
                    x = O;
                  }
                } else if (s < E) {
                  k += u + s - E;
                  if ((E -= s) < m) {
                    m -= E;
                    do {
                      O[o++] = f[k++];
                    } while (--E);
                    k = 0;
                    if (s < m) {
                      m -= E = s;
                      do {
                        O[o++] = f[k++];
                      } while (--E);
                      k = o - T;
                      x = O;
                    }
                  }
                } else {
                  k += s - E;
                  if (E < m) {
                    m -= E;
                    do {
                      O[o++] = f[k++];
                    } while (--E);
                    k = o - T;
                    x = O;
                  }
                }
                while (m > 2) {
                  O[o++] = x[k++];
                  O[o++] = x[k++];
                  O[o++] = x[k++];
                  m -= 3;
                }
                if (m) {
                  O[o++] = x[k++];
                  if (m > 1) {
                    O[o++] = x[k++];
                  }
                }
              } else {
                k = o - T;
                do {
                  O[o++] = O[k++];
                  O[o++] = O[k++];
                  O[o++] = O[k++];
                  m -= 3;
                } while (m > 2);
                if (m) {
                  O[o++] = O[k++];
                  if (m > 1) {
                    O[o++] = O[k++];
                  }
                }
              }
            } else if ((E & 64) == 0) {
              _ = h[(_ & 65535) + (d & (1 << E) - 1)];
              continue;
            } else {
              t.msg = "invalid distance code";
              A.mode = 16209;
              break t;
            }
            break;
          }
        } else if ((E & 64) == 0) {
          _ = b[(_ & 65535) + (d & (1 << E) - 1)];
          continue;
        } else if (E & 32) {
          A.mode = 16191;
          break t;
        } else {
          t.msg = "invalid literal/length code";
          A.mode = 16209;
          break t;
        }
        break;
      }
    } while (r < n && o < i);
    r -= m = g >> 3;
    g -= m << 3;
    d &= (1 << g) - 1;
    t.next_in = r;
    t.next_out = o;
    t.avail_in = r < n ? 5 + (n - r) : 5 - (r - n);
    t.avail_out = o < i ? 257 + (i - o) : 257 - (o - i);
    A.hold = d;
    A.bits = g;
  }
  let cL = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
  let cG = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
  let cC = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
  let cv = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
  var cP = (t, e, r, n, o, a, i, c) => {
    let u;
    let l;
    let s;
    let f;
    let d;
    let g;
    let b;
    let h;
    let p;
    let w = c.bits;
    let _ = 0;
    let E = 0;
    let m = 0;
    let T = 0;
    let k = 0;
    let x = 0;
    let I = 0;
    let O = 0;
    let A = 0;
    let R = 0;
    let S = null;
    let N = new Uint16Array(16);
    let y = new Uint16Array(16);
    let B = null;
    for (_ = 0; _ <= 15; _++) {
      N[_] = 0;
    }
    for (E = 0; E < n; E++) {
      N[e[r + E]]++;
    }
    T = 15;
    k = w;
    for (; T >= 1 && N[T] === 0; T--);
    if (k > T) {
      k = T;
    }
    if (T === 0) {
      o[a++] = 20971520;
      o[a++] = 20971520;
      c.bits = 1;
      return 0;
    }
    for (m = 1; m < T && N[m] === 0; m++);
    if (k < m) {
      k = m;
    }
    O = 1;
    _ = 1;
    for (; _ <= 15; _++) {
      O <<= 1;
      if ((O -= N[_]) < 0) {
        return -1;
      }
    }
    if (O > 0 && (t === 0 || T !== 1)) {
      return -1;
    }
    _ = 1;
    y[1] = 0;
    for (; _ < 15; _++) {
      y[_ + 1] = y[_] + N[_];
    }
    for (E = 0; E < n; E++) {
      if (e[r + E] !== 0) {
        i[y[e[r + E]]++] = E;
      }
    }
    if (t === 0) {
      S = B = i;
      g = 20;
    } else if (t === 1) {
      S = cL;
      B = cG;
      g = 257;
    } else {
      S = cC;
      B = cv;
      g = 0;
    }
    R = 0;
    E = 0;
    _ = m;
    d = a;
    x = k;
    I = 0;
    s = -1;
    f = (A = 1 << k) - 1;
    if (t === 1 && A > 852 || t === 2 && A > 592) {
      return 1;
    }
    while (true) {
      b = _ - I;
      if (i[E] + 1 < g) {
        h = 0;
        p = i[E];
      } else if (i[E] >= g) {
        h = B[i[E] - g];
        p = S[i[E] - g];
      } else {
        h = 96;
        p = 0;
      }
      u = 1 << _ - I;
      m = l = 1 << x;
      do {
        o[d + (R >> I) + (l -= u)] = b << 24 | h << 16 | p | 0;
      } while (l !== 0);
      for (u = 1 << _ - 1; R & u;) {
        u >>= 1;
      }
      if (u !== 0) {
        R &= u - 1;
        R += u;
      } else {
        R = 0;
      }
      E++;
      if (--N[_] == 0) {
        if (_ === T) {
          break;
        }
        _ = e[r + i[E]];
      }
      if (_ > k && (R & f) !== s) {
        if (I === 0) {
          I = k;
        }
        d += m;
        O = 1 << (x = _ - I);
        while (x + I < T && !((O -= N[x + I]) <= 0)) {
          x++;
          O <<= 1;
        }
        A += 1 << x;
        if (t === 1 && A > 852 || t === 2 && A > 592) {
          return 1;
        }
        o[s = R & f] = k << 24 | x << 16 | d - a | 0;
      }
    }
    if (R !== 0) {
      o[d + R] = _ - I << 24 | 4194304;
    }
    c.bits = k;
    return 0;
  };
  let {
    Z_FINISH: cF,
    Z_BLOCK: cM,
    Z_TREES: cU,
    Z_OK: cH,
    Z_STREAM_END: cW,
    Z_NEED_DICT: cZ,
    Z_STREAM_ERROR: cY,
    Z_DATA_ERROR: cV,
    Z_MEM_ERROR: cz,
    Z_BUF_ERROR: cK,
    Z_DEFLATED: c$
  } = iR;
  let cj = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
  function cX() {
    this.strm = null;
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new Uint16Array(320);
    this.work = new Uint16Array(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  let cq = t => {
    if (!t) {
      return 1;
    }
    let e = t.state;
    return +(!e || e.strm !== t || e.mode < 16180 || e.mode > 16211);
  };
  let cJ = t => {
    if (cq(t)) {
      return cY;
    }
    let e = t.state;
    t.total_in = t.total_out = e.total = 0;
    t.msg = "";
    if (e.wrap) {
      t.adler = e.wrap & 1;
    }
    e.mode = 16180;
    e.last = 0;
    e.havedict = 0;
    e.flags = -1;
    e.dmax = 32768;
    e.head = null;
    e.hold = 0;
    e.bits = 0;
    e.lencode = e.lendyn = new Int32Array(852);
    e.distcode = e.distdyn = new Int32Array(592);
    e.sane = 1;
    e.back = -1;
    return cH;
  };
  let cQ = t => {
    if (cq(t)) {
      return cY;
    }
    let e = t.state;
    e.wsize = 0;
    e.whave = 0;
    e.wnext = 0;
    return cJ(t);
  };
  let c0 = (t, e) => {
    let r;
    if (cq(t)) {
      return cY;
    }
    let n = t.state;
    if (e < 0) {
      r = 0;
      e = -e;
    } else {
      r = (e >> 4) + 5;
      if (e < 48) {
        e &= 15;
      }
    }
    if (e && (e < 8 || e > 15)) {
      return cY;
    } else {
      if (n.window !== null && n.wbits !== e) {
        n.window = null;
      }
      n.wrap = r;
      n.wbits = e;
      return cQ(t);
    }
  };
  let c1 = true;
  let c2 = t => {
    if (c1) {
      i = new Int32Array(512);
      c = new Int32Array(32);
      let e = 0;
      while (e < 144) {
        t.lens[e++] = 8;
      }
      while (e < 256) {
        t.lens[e++] = 9;
      }
      while (e < 280) {
        t.lens[e++] = 7;
      }
      while (e < 288) {
        t.lens[e++] = 8;
      }
      cP(1, t.lens, 0, 288, i, 0, t.work, {
        bits: 9
      });
      e = 0;
      while (e < 32) {
        t.lens[e++] = 5;
      }
      cP(2, t.lens, 0, 32, c, 0, t.work, {
        bits: 5
      });
      c1 = false;
    }
    t.lencode = i;
    t.lenbits = 9;
    t.distcode = c;
    t.distbits = 5;
  };
  let c5 = (t, e, r, n) => {
    let o;
    let a = t.state;
    if (a.window === null) {
      a.wsize = 1 << a.wbits;
      a.wnext = 0;
      a.whave = 0;
      a.window = new Uint8Array(a.wsize);
    }
    if (n >= a.wsize) {
      a.window.set(e.subarray(r - a.wsize, r), 0);
      a.wnext = 0;
      a.whave = a.wsize;
    } else {
      if ((o = a.wsize - a.wnext) > n) {
        o = n;
      }
      a.window.set(e.subarray(r - n, r - n + o), a.wnext);
      if (n -= o) {
        a.window.set(e.subarray(r - n, r), 0);
        a.wnext = n;
        a.whave = a.wsize;
      } else {
        a.wnext += o;
        if (a.wnext === a.wsize) {
          a.wnext = 0;
        }
        if (a.whave < a.wsize) {
          a.whave += o;
        }
      }
    }
    return 0;
  };
  var c3 = {
    inflateReset: cQ,
    inflateInit2: (t, e) => {
      if (!t) {
        return cY;
      }
      let r = new cX();
      t.state = r;
      r.strm = t;
      r.window = null;
      r.mode = 16180;
      let n = c0(t, e);
      if (n !== cH) {
        t.state = null;
      }
      return n;
    },
    inflate: (t, e) => {
      let r;
      let n;
      let o;
      let a;
      let i;
      let c;
      let u;
      let l;
      let s;
      let f;
      let d;
      let g;
      let b;
      let h;
      let p;
      let w;
      let _;
      let E;
      let m;
      let T;
      let k;
      let x;
      let I;
      let O;
      let A = 0;
      let R = new Uint8Array(4);
      let S = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (cq(t) || !t.output || !t.input && t.avail_in !== 0) {
        return cY;
      }
      if ((r = t.state).mode === 16191) {
        r.mode = 16192;
      }
      i = t.next_out;
      o = t.output;
      u = t.avail_out;
      a = t.next_in;
      n = t.input;
      c = t.avail_in;
      l = r.hold;
      s = r.bits;
      f = c;
      d = u;
      x = cH;
      e: while (true) {
        switch (r.mode) {
          case 16180:
            if (r.wrap === 0) {
              r.mode = 16192;
              break;
            }
            while (s < 16) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            if (r.wrap & 2 && l === 35615) {
              if (r.wbits === 0) {
                r.wbits = 15;
              }
              r.check = 0;
              R[0] = l & 255;
              R[1] = l >>> 8 & 255;
              r.check = iO(r.check, R, 2, 0);
              l = 0;
              s = 0;
              r.mode = 16181;
              break;
            }
            if (r.head) {
              r.head.done = false;
            }
            if (!(r.wrap & 1) || (((l & 255) << 8) + (l >> 8)) % 31) {
              t.msg = "incorrect header check";
              r.mode = 16209;
              break;
            }
            if ((l & 15) !== c$) {
              t.msg = "unknown compression method";
              r.mode = 16209;
              break;
            }
            l >>>= 4;
            s -= 4;
            k = (l & 15) + 8;
            if (r.wbits === 0) {
              r.wbits = k;
            }
            if (k > 15 || k > r.wbits) {
              t.msg = "invalid window size";
              r.mode = 16209;
              break;
            }
            r.dmax = 1 << r.wbits;
            r.flags = 0;
            t.adler = r.check = 1;
            r.mode = l & 512 ? 16189 : 16191;
            l = 0;
            s = 0;
            break;
          case 16181:
            while (s < 16) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            r.flags = l;
            if ((r.flags & 255) !== c$) {
              t.msg = "unknown compression method";
              r.mode = 16209;
              break;
            }
            if (r.flags & 57344) {
              t.msg = "unknown header flags set";
              r.mode = 16209;
              break;
            }
            if (r.head) {
              r.head.text = l >> 8 & 1;
            }
            if (r.flags & 512 && r.wrap & 4) {
              R[0] = l & 255;
              R[1] = l >>> 8 & 255;
              r.check = iO(r.check, R, 2, 0);
            }
            l = 0;
            s = 0;
            r.mode = 16182;
          case 16182:
            while (s < 32) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            if (r.head) {
              r.head.time = l;
            }
            if (r.flags & 512 && r.wrap & 4) {
              R[0] = l & 255;
              R[1] = l >>> 8 & 255;
              R[2] = l >>> 16 & 255;
              R[3] = l >>> 24 & 255;
              r.check = iO(r.check, R, 4, 0);
            }
            l = 0;
            s = 0;
            r.mode = 16183;
          case 16183:
            while (s < 16) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            if (r.head) {
              r.head.xflags = l & 255;
              r.head.os = l >> 8;
            }
            if (r.flags & 512 && r.wrap & 4) {
              R[0] = l & 255;
              R[1] = l >>> 8 & 255;
              r.check = iO(r.check, R, 2, 0);
            }
            l = 0;
            s = 0;
            r.mode = 16184;
          case 16184:
            if (r.flags & 1024) {
              while (s < 16) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              r.length = l;
              if (r.head) {
                r.head.extra_len = l;
              }
              if (r.flags & 512 && r.wrap & 4) {
                R[0] = l & 255;
                R[1] = l >>> 8 & 255;
                r.check = iO(r.check, R, 2, 0);
              }
              l = 0;
              s = 0;
            } else if (r.head) {
              r.head.extra = null;
            }
            r.mode = 16185;
          case 16185:
            if (r.flags & 1024 && ((g = r.length) > c && (g = c), g && (r.head && (k = r.head.extra_len - r.length, r.head.extra ||= new Uint8Array(r.head.extra_len), r.head.extra.set(n.subarray(a, a + g), k)), r.flags & 512 && r.wrap & 4 && (r.check = iO(r.check, n, g, a)), c -= g, a += g, r.length -= g), r.length)) {
              break e;
            }
            r.length = 0;
            r.mode = 16186;
          case 16186:
            if (r.flags & 2048) {
              if (c === 0) {
                break e;
              }
              g = 0;
              do {
                k = n[a + g++];
                if (r.head && k && r.length < 65536) {
                  r.head.name += String.fromCharCode(k);
                }
              } while (k && g < c);
              if (r.flags & 512 && r.wrap & 4) {
                r.check = iO(r.check, n, g, a);
              }
              c -= g;
              a += g;
              if (k) {
                break e;
              }
            } else if (r.head) {
              r.head.name = null;
            }
            r.length = 0;
            r.mode = 16187;
          case 16187:
            if (r.flags & 4096) {
              if (c === 0) {
                break e;
              }
              g = 0;
              do {
                k = n[a + g++];
                if (r.head && k && r.length < 65536) {
                  r.head.comment += String.fromCharCode(k);
                }
              } while (k && g < c);
              if (r.flags & 512 && r.wrap & 4) {
                r.check = iO(r.check, n, g, a);
              }
              c -= g;
              a += g;
              if (k) {
                break e;
              }
            } else if (r.head) {
              r.head.comment = null;
            }
            r.mode = 16188;
          case 16188:
            if (r.flags & 512) {
              while (s < 16) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              if (r.wrap & 4 && l !== (r.check & 65535)) {
                t.msg = "header crc mismatch";
                r.mode = 16209;
                break;
              }
              l = 0;
              s = 0;
            }
            if (r.head) {
              r.head.hcrc = r.flags >> 9 & 1;
              r.head.done = true;
            }
            t.adler = r.check = 0;
            r.mode = 16191;
            break;
          case 16189:
            while (s < 32) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            t.adler = r.check = cj(l);
            l = 0;
            s = 0;
            r.mode = 16190;
          case 16190:
            if (r.havedict === 0) {
              t.next_out = i;
              t.avail_out = u;
              t.next_in = a;
              t.avail_in = c;
              r.hold = l;
              r.bits = s;
              return cZ;
            }
            t.adler = r.check = 1;
            r.mode = 16191;
          case 16191:
            if (e === cM || e === cU) {
              break e;
            }
          case 16192:
            if (r.last) {
              l >>>= s & 7;
              s -= s & 7;
              r.mode = 16206;
              break;
            }
            while (s < 3) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            r.last = l & 1;
            s -= 1;
            switch ((l >>>= 1) & 3) {
              case 0:
                r.mode = 16193;
                break;
              case 1:
                c2(r);
                r.mode = 16199;
                if (e === cU) {
                  l >>>= 2;
                  s -= 2;
                  break e;
                }
                break;
              case 2:
                r.mode = 16196;
                break;
              case 3:
                t.msg = "invalid block type";
                r.mode = 16209;
            }
            l >>>= 2;
            s -= 2;
            break;
          case 16193:
            l >>>= s & 7;
            s -= s & 7;
            while (s < 32) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            if ((l & 65535) != (l >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths";
              r.mode = 16209;
              break;
            }
            r.length = l & 65535;
            l = 0;
            s = 0;
            r.mode = 16194;
            if (e === cU) {
              break e;
            }
          case 16194:
            r.mode = 16195;
          case 16195:
            if (g = r.length) {
              if (g > c) {
                g = c;
              }
              if (g > u) {
                g = u;
              }
              if (g === 0) {
                break e;
              }
              o.set(n.subarray(a, a + g), i);
              c -= g;
              a += g;
              u -= g;
              i += g;
              r.length -= g;
              break;
            }
            r.mode = 16191;
            break;
          case 16196:
            while (s < 14) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            r.nlen = (l & 31) + 257;
            l >>>= 5;
            s -= 5;
            r.ndist = (l & 31) + 1;
            l >>>= 5;
            s -= 5;
            r.ncode = (l & 15) + 4;
            l >>>= 4;
            s -= 4;
            if (r.nlen > 286 || r.ndist > 30) {
              t.msg = "too many length or distance symbols";
              r.mode = 16209;
              break;
            }
            r.have = 0;
            r.mode = 16197;
          case 16197:
            while (r.have < r.ncode) {
              while (s < 3) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              r.lens[S[r.have++]] = l & 7;
              l >>>= 3;
              s -= 3;
            }
            while (r.have < 19) {
              r.lens[S[r.have++]] = 0;
            }
            r.lencode = r.lendyn;
            r.lenbits = 7;
            I = {
              bits: r.lenbits
            };
            x = cP(0, r.lens, 0, 19, r.lencode, 0, r.work, I);
            r.lenbits = I.bits;
            if (x) {
              t.msg = "invalid code lengths set";
              r.mode = 16209;
              break;
            }
            r.have = 0;
            r.mode = 16198;
          case 16198:
            while (r.have < r.nlen + r.ndist) {
              while (p = (A = r.lencode[l & (1 << r.lenbits) - 1]) >>> 24, w = A >>> 16 & 255, _ = A & 65535, !(p <= s)) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              if (_ < 16) {
                l >>>= p;
                s -= p;
                r.lens[r.have++] = _;
              } else {
                if (_ === 16) {
                  for (O = p + 2; s < O;) {
                    if (c === 0) {
                      break e;
                    }
                    c--;
                    l += n[a++] << s;
                    s += 8;
                  }
                  l >>>= p;
                  s -= p;
                  if (r.have === 0) {
                    t.msg = "invalid bit length repeat";
                    r.mode = 16209;
                    break;
                  }
                  k = r.lens[r.have - 1];
                  g = 3 + (l & 3);
                  l >>>= 2;
                  s -= 2;
                } else if (_ === 17) {
                  for (O = p + 3; s < O;) {
                    if (c === 0) {
                      break e;
                    }
                    c--;
                    l += n[a++] << s;
                    s += 8;
                  }
                  l >>>= p;
                  s -= p;
                  k = 0;
                  g = 3 + (l & 7);
                  l >>>= 3;
                  s -= 3;
                } else {
                  for (O = p + 7; s < O;) {
                    if (c === 0) {
                      break e;
                    }
                    c--;
                    l += n[a++] << s;
                    s += 8;
                  }
                  l >>>= p;
                  s -= p;
                  k = 0;
                  g = 11 + (l & 127);
                  l >>>= 7;
                  s -= 7;
                }
                if (r.have + g > r.nlen + r.ndist) {
                  t.msg = "invalid bit length repeat";
                  r.mode = 16209;
                  break;
                }
                while (g--) {
                  r.lens[r.have++] = k;
                }
              }
            }
            if (r.mode === 16209) {
              break;
            }
            if (r.lens[256] === 0) {
              t.msg = "invalid code -- missing end-of-block";
              r.mode = 16209;
              break;
            }
            r.lenbits = 9;
            I = {
              bits: r.lenbits
            };
            x = cP(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, I);
            r.lenbits = I.bits;
            if (x) {
              t.msg = "invalid literal/lengths set";
              r.mode = 16209;
              break;
            }
            r.distbits = 6;
            r.distcode = r.distdyn;
            I = {
              bits: r.distbits
            };
            x = cP(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, I);
            r.distbits = I.bits;
            if (x) {
              t.msg = "invalid distances set";
              r.mode = 16209;
              break;
            }
            r.mode = 16199;
            if (e === cU) {
              break e;
            }
          case 16199:
            r.mode = 16200;
          case 16200:
            if (c >= 6 && u >= 258) {
              t.next_out = i;
              t.avail_out = u;
              t.next_in = a;
              t.avail_in = c;
              r.hold = l;
              r.bits = s;
              cD(t, d);
              i = t.next_out;
              o = t.output;
              u = t.avail_out;
              a = t.next_in;
              n = t.input;
              c = t.avail_in;
              l = r.hold;
              s = r.bits;
              if (r.mode === 16191) {
                r.back = -1;
              }
              break;
            }
            for (r.back = 0; p = (A = r.lencode[l & (1 << r.lenbits) - 1]) >>> 24, w = A >>> 16 & 255, _ = A & 65535, !(p <= s);) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            if (w && (w & 240) == 0) {
              E = p;
              m = w;
              T = _;
              while (p = (A = r.lencode[T + ((l & (1 << E + m) - 1) >> E)]) >>> 24, w = A >>> 16 & 255, _ = A & 65535, !(E + p <= s)) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              l >>>= E;
              s -= E;
              r.back += E;
            }
            l >>>= p;
            s -= p;
            r.back += p;
            r.length = _;
            if (w === 0) {
              r.mode = 16205;
              break;
            }
            if (w & 32) {
              r.back = -1;
              r.mode = 16191;
              break;
            }
            if (w & 64) {
              t.msg = "invalid literal/length code";
              r.mode = 16209;
              break;
            }
            r.extra = w & 15;
            r.mode = 16201;
          case 16201:
            if (r.extra) {
              for (O = r.extra; s < O;) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              r.length += l & (1 << r.extra) - 1;
              l >>>= r.extra;
              s -= r.extra;
              r.back += r.extra;
            }
            r.was = r.length;
            r.mode = 16202;
          case 16202:
            while (p = (A = r.distcode[l & (1 << r.distbits) - 1]) >>> 24, w = A >>> 16 & 255, _ = A & 65535, !(p <= s)) {
              if (c === 0) {
                break e;
              }
              c--;
              l += n[a++] << s;
              s += 8;
            }
            if ((w & 240) == 0) {
              E = p;
              m = w;
              T = _;
              while (p = (A = r.distcode[T + ((l & (1 << E + m) - 1) >> E)]) >>> 24, w = A >>> 16 & 255, _ = A & 65535, !(E + p <= s)) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              l >>>= E;
              s -= E;
              r.back += E;
            }
            l >>>= p;
            s -= p;
            r.back += p;
            if (w & 64) {
              t.msg = "invalid distance code";
              r.mode = 16209;
              break;
            }
            r.offset = _;
            r.extra = w & 15;
            r.mode = 16203;
          case 16203:
            if (r.extra) {
              for (O = r.extra; s < O;) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              r.offset += l & (1 << r.extra) - 1;
              l >>>= r.extra;
              s -= r.extra;
              r.back += r.extra;
            }
            if (r.offset > r.dmax) {
              t.msg = "invalid distance too far back";
              r.mode = 16209;
              break;
            }
            r.mode = 16204;
          case 16204:
            if (u === 0) {
              break e;
            }
            g = d - u;
            if (r.offset > g) {
              if ((g = r.offset - g) > r.whave && r.sane) {
                t.msg = "invalid distance too far back";
                r.mode = 16209;
                break;
              }
              if (g > r.wnext) {
                g -= r.wnext;
                b = r.wsize - g;
              } else {
                b = r.wnext - g;
              }
              if (g > r.length) {
                g = r.length;
              }
              h = r.window;
            } else {
              h = o;
              b = i - r.offset;
              g = r.length;
            }
            if (g > u) {
              g = u;
            }
            u -= g;
            r.length -= g;
            do {
              o[i++] = h[b++];
            } while (--g);
            if (r.length === 0) {
              r.mode = 16200;
            }
            break;
          case 16205:
            if (u === 0) {
              break e;
            }
            o[i++] = r.length;
            u--;
            r.mode = 16200;
            break;
          case 16206:
            if (r.wrap) {
              while (s < 32) {
                if (c === 0) {
                  break e;
                }
                c--;
                l |= n[a++] << s;
                s += 8;
              }
              d -= u;
              t.total_out += d;
              r.total += d;
              if (r.wrap & 4 && d) {
                t.adler = r.check = r.flags ? iO(r.check, o, d, i - d) : ix(r.check, o, d, i - d);
              }
              d = u;
              if (r.wrap & 4 && (r.flags ? l : cj(l)) !== r.check) {
                t.msg = "incorrect data check";
                r.mode = 16209;
                break;
              }
              l = 0;
              s = 0;
            }
            r.mode = 16207;
          case 16207:
            if (r.wrap && r.flags) {
              while (s < 32) {
                if (c === 0) {
                  break e;
                }
                c--;
                l += n[a++] << s;
                s += 8;
              }
              if (r.wrap & 4 && l !== (r.total & -1)) {
                t.msg = "incorrect length check";
                r.mode = 16209;
                break;
              }
              l = 0;
              s = 0;
            }
            r.mode = 16208;
          case 16208:
            x = cW;
            break e;
          case 16209:
            x = cV;
            break e;
          case 16210:
            return cz;
          default:
            return cY;
        }
      }
      t.next_out = i;
      t.avail_out = u;
      t.next_in = a;
      t.avail_in = c;
      r.hold = l;
      r.bits = s;
      if (r.wsize || d !== t.avail_out && r.mode < 16209 && (r.mode < 16206 || e !== cF)) {
        c5(t, t.output, t.next_out, d - t.avail_out);
      }
      f -= t.avail_in;
      d -= t.avail_out;
      t.total_in += f;
      t.total_out += d;
      r.total += d;
      if (r.wrap & 4 && d) {
        t.adler = r.check = r.flags ? iO(r.check, o, d, t.next_out - d) : ix(r.check, o, d, t.next_out - d);
      }
      t.data_type = r.bits + !!r.last * 64 + (r.mode === 16191) * 128 + (r.mode === 16199 || r.mode === 16194) * 256;
      if ((f === 0 && d === 0 || e === cF) && x === cH) {
        x = cK;
      }
      return x;
    },
    inflateEnd: t => {
      if (cq(t)) {
        return cY;
      }
      let e = t.state;
      e.window &&= null;
      t.state = null;
      return cH;
    },
    inflateGetHeader: (t, e) => {
      if (cq(t)) {
        return cY;
      }
      let r = t.state;
      if ((r.wrap & 2) == 0) {
        return cY;
      } else {
        r.head = e;
        e.done = false;
        return cH;
      }
    },
    inflateSetDictionary: (t, e) => {
      let r;
      let n;
      let o = e.length;
      if (cq(t) || (r = t.state).wrap !== 0 && r.mode !== 16190) {
        return cY;
      } else if (r.mode === 16190 && ix(1, e, o, 0) !== r.check) {
        return cV;
      } else if (c5(t, e, o, o)) {
        r.mode = 16210;
        return cz;
      } else {
        r.havedict = 1;
        return cH;
      }
    }
  };
  function c4() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  let c6 = Object.prototype.toString;
  let {
    Z_NO_FLUSH: c8,
    Z_FINISH: c9,
    Z_OK: c7,
    Z_STREAM_END: ut,
    Z_NEED_DICT: ue,
    Z_STREAM_ERROR: ur,
    Z_DATA_ERROR: un,
    Z_MEM_ERROR: uo
  } = iR;
  function ua(t) {
    this.options = cb.assign({
      chunkSize: 65536,
      windowBits: 15,
      to: ""
    }, t || {});
    let e = this.options;
    if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
      e.windowBits = -e.windowBits;
      if (e.windowBits === 0) {
        e.windowBits = -15;
      }
    }
    if (e.windowBits >= 0 && e.windowBits < 16 && (!t || !t.windowBits)) {
      e.windowBits += 32;
    }
    if (e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15) == 0) {
      e.windowBits |= 15;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new cE();
    this.strm.avail_out = 0;
    let r = c3.inflateInit2(this.strm, e.windowBits);
    if (r !== c7 || (this.header = new c4(), c3.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = c_.string2buf(e.dictionary) : c6.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (r = c3.inflateSetDictionary(this.strm, e.dictionary)) !== c7))) {
      throw Error(iA[r]);
    }
  }
  function ui(t, e) {
    let r = new ua(e);
    r.push(t);
    if (r.err) {
      throw r.msg || iA[r.err];
    }
    return r.result;
  }
  ua.prototype.push = function (t, e) {
    let r;
    let n;
    let o;
    let a = this.strm;
    let i = this.options.chunkSize;
    let c = this.options.dictionary;
    if (this.ended) {
      return false;
    }
    n = e === ~~e ? e : e === true ? c9 : c8;
    if (c6.call(t) === "[object ArrayBuffer]") {
      a.input = new Uint8Array(t);
    } else {
      a.input = t;
    }
    a.next_in = 0;
    a.avail_in = a.input.length;
    while (true) {
      if (a.avail_out === 0) {
        a.output = new Uint8Array(i);
        a.next_out = 0;
        a.avail_out = i;
      }
      if ((r = c3.inflate(a, n)) === ue && c) {
        if ((r = c3.inflateSetDictionary(a, c)) === c7) {
          r = c3.inflate(a, n);
        } else if (r === un) {
          r = ue;
        }
      }
      while (a.avail_in > 0 && r === ut && a.state.wrap > 0 && t[a.next_in] !== 0) {
        c3.inflateReset(a);
        r = c3.inflate(a, n);
      }
      switch (r) {
        case ur:
        case un:
        case ue:
        case uo:
          this.onEnd(r);
          this.ended = true;
          return false;
      }
      o = a.avail_out;
      if (a.next_out && (a.avail_out === 0 || r === ut)) {
        if (this.options.to === "string") {
          let t = c_.utf8border(a.output, a.next_out);
          let e = a.next_out - t;
          let r = c_.buf2string(a.output, t);
          a.next_out = e;
          a.avail_out = i - e;
          if (e) {
            a.output.set(a.output.subarray(t, t + e), 0);
          }
          this.onData(r);
        } else {
          this.onData(a.output.length === a.next_out ? a.output : a.output.subarray(0, a.next_out));
        }
      }
      if (r !== c7 || o !== 0) {
        if (r === ut) {
          r = c3.inflateEnd(this.strm);
          this.onEnd(r);
          this.ended = true;
          return true;
        }
        if (a.avail_in === 0) {
          break;
        }
      }
    }
    return true;
  };
  ua.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  ua.prototype.onEnd = function (t) {
    if (t === c7) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = cb.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = t;
    this.msg = this.strm.msg;
  };
  let {
    Deflate: uc,
    deflate: uu,
    deflateRaw: ul,
    gzip: us
  } = {
    Deflate: cy,
    deflate: cB,
    deflateRaw: function (t, e) {
      (e = e || {}).raw = true;
      return cB(t, e);
    },
    gzip: function (t, e) {
      (e = e || {}).gzip = true;
      return cB(t, e);
    },
    constants: iR
  };
  let {
    Inflate: uf,
    inflate: ud,
    inflateRaw: ug,
    ungzip: ub
  } = {
    Inflate: ua,
    inflate: ui,
    inflateRaw: function (t, e) {
      (e = e || {}).raw = true;
      return ui(t, e);
    },
    ungzip: ui,
    constants: iR
  };
  var bufferImplementation = require("buffer-implementation") /*id: 659459*/;
  function up(t) {
    return uE(u_(t));
  }
  function uw(t) {
    return bufferImplementation.Buffer.from(us(t, {
      level: 9
    })).toString("base64");
  }
  function u_(t) {
    return bufferImplementation.Buffer.from(t, "base64");
  }
  function uE(t) {
    return JSON.parse(ub(t, {
      to: "string"
    }));
  }
  var mixedHashUtil = require("mixed-hash-util") /*id: 703059*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var uk = eventEmitterUmd;
  var fileExtensionUtils_1 = require("file-extension-utils_1") /*id: 717701*/;
  function uI(t) {
    return t.toLowerCase().replace(/[^a-z0-9]/g, ".").replace(/([a-z])([0-9])/g, "$1.$2").replace(/([0-9])([a-z])/g, "$1.$2").replace(/alpha/g, "-3").replace(/beta/g, "-2").replace(/rc/g, "-1").replace(/[^0-9.\-]+/g, "-4");
  }
  function uO(t, e) {
    if (!t || !e) {
      return false;
    }
    let r = uI(t).split(".");
    let n = uI(e).split(".");
    let o = Math.max(r.length, e.length);
    for (let t = 0; t < o; t++) {
      let e = Number(r[t]) || 0;
      let o = Number(n[t]) || 0;
      if (e < o) {
        return false;
      }
      if (e > o) {
        break;
      }
    }
    return true;
  }
  let uA = {};
  function uR(t, e) {
    if (uA[t] === undefined) {
      uA[t] = [e];
    } else {
      uA[t].push(e);
    }
  }
  function uS(t, ...e) {
    if (!uA[t]) {
      return;
    }
    let r = 0;
    let n = uA[t].length;
    for (; r < n; r++) {
      uA[t][r].apply(this, e);
    }
  }
  function uN(t, e) {
    if (uA[t] instanceof Array) {
      let r = uA[t].length - 1;
      for (; r >= 0; r--) {
        if (uA[t][r] === e) {
          uA[t].splice(r, 1);
        }
      }
    }
  }
  let uy = function () {
    let t = {};
    return {
      setParam(e, r) {
        t[e] = r;
      },
      getParam: (e, r) => t[e] || r
    };
  }();
  var urlQueryStringUtils_1 = require("url-query-string-utils_1") /*id: 657731*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let uL = function () {
    let t = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      t.current = true;
      return () => void (t.current = false);
    }, []);
    return t;
  };
  (L = ta ||= {}).LOADING = "LOADING";
  L.LOADED = "LOADED";
  L.FAILED = "FAILED";
  let uG = function ({
    src: t
  }) {
    let [e, r] = reactCoreLibraryReexport.useState(ta.LOADING);
    let n = uL();
    let o = reactCoreLibraryReexport.useRef("");
    o.current = t;
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        r(ta.FAILED);
        return;
      }
      if (e !== ta.LOADING) {
        r(ta.LOADING);
      }
      let a = document.createElement("img");
      a.src = t;
      a.onload = () => {
        a.onload = null;
        if (o.current === t && n.current) {
          r(ta.LOADED);
        }
      };
      a.onerror = () => {
        a.onerror = null;
        if (o.current === t && n.current) {
          r(ta.FAILED);
        }
      };
    }, [t]);
    return e;
  };
  require.r(exports);
  require.d(exports, {
    HYPERTEXT_URL_REG: function () {
      return eL;
    },
    compensateServerTime: function () {
      return ra;
    },
    LarkOpenType: function () {
      return browserEnvConfig.DocEntryType;
    },
    getFeatureParams: function () {
      return globalConfigHelper.getParamsConfig;
    },
    isRedoKey: function () {
      return oF;
    },
    SHEET_RENDER_STAGE: function () {
      return eX;
    },
    compareVersion: function () {
      return uO;
    },
    lowerLatinToInt: function () {
      return o5;
    },
    MENU_TYPE: function () {
      return P;
    },
    HELP_DOC_PASTE_PLUGIN_URL: function () {
      return globalHelpDocsUrlConfig.stickupHelpUrl;
    },
    getProduct: function () {
      return globalConfigHelper.getProduct;
    },
    isSingleProductUser: function () {
      return rK;
    },
    removeQueriesToUrl: function () {
      return urlQueryStringUtils_1.omitPathStringify;
    },
    isSupportClickToEdit: function () {
      return rY;
    },
    shouldItemUseFileSecureMode: function () {
      return rk;
    },
    ADMIN_DEPARTMENT_AND_USER_URL: function () {
      return globalHelpDocsUrlConfig.contactsDeptUserUrl;
    },
    suiteType2UnnamedTitle: function () {
      return documentTypeNameLabels.fileTypeDefaultNames;
    },
    tick: function () {
      return aT;
    },
    DEFAULT_ADD_MEMBERS_PERMISSION: function () {
      return el;
    },
    compensateTimeDigit: function () {
      return ro;
    },
    convertBase64StrToBuffer: function () {
      return u_;
    },
    getDaysFrom: function () {
      return rb;
    },
    SUITE_TO_MENTION: function () {
      return driveFileTypeConstants_1.driveToFileTypeMap;
    },
    templateActionTypes: function () {
      return tC;
    },
    getWindowProperty: function () {
      return globalConfigHelper.getWindowValue;
    },
    getAllWebSocketAddr: function () {
      return globalConfigHelper.getWsServers;
    },
    ANONYMOUS_REPORT_LINK: function () {
      return globalHelpDocsUrlConfig.anonymityReportUrl;
    },
    bodyAddLanguage: function () {
      return localeManagementUtils.setBodyLocaleId;
    },
    getScrollBarWidth: function () {
      return aL;
    },
    getTooltipPlacement: function () {
      return al;
    },
    ON_SECTION_NAV_READY: function () {
      return eU;
    },
    isTestAccount: function () {
      return globalConfigHelper.isSpecialUser;
    },
    PRODUCT_RENAME_BACKWARD_MAP: function () {
      return tu;
    },
    getI18NUserDisplayName: function () {
      return of;
    },
    notCloseMenuActionTypes: function () {
      return tz;
    },
    NUM_FOLDER_TYPE: function () {
      return G;
    },
    PERMISSIONS: function () {
      return ei;
    },
    HELP_DOC_SUPPORTED_BROWSER_URL: function () {
      return globalHelpDocsUrlConfig.supportedBrowserUrl;
    },
    REPORT_LINK: function () {
      return globalHelpDocsUrlConfig.docsReportUrl;
    },
    LoadStatus: function () {
      return ta;
    },
    docxSuffix: function () {
      return driveFileTypeConstants.docxExt;
    },
    READ_WRITE_PERMISSION: function () {
      return em;
    },
    TERMS_OF_SERVICE_URL: function () {
      return globalHelpDocsUrlConfig.termsOfServiceUrl;
    },
    getLarkLocale: function () {
      return localeManagementUtils.getSnakeLocale;
    },
    SpecialSuiteCode: function () {
      return e0;
    },
    OpenType: function () {
      return browserEnvConfig.EntrySource;
    },
    isDevOrStagingOrBoe: function () {
      return globalConfigHelper.isSpecialEnv;
    },
    translateTypes: function () {
      return tm;
    },
    getI18nValueName: function () {
      return oc;
    },
    HELP_DOC_HISTORY_URL: function () {
      return globalHelpDocsUrlConfig.helpArticleUrlAlt4;
    },
    isFileSecureModeActive: function () {
      return rT;
    },
    DropdownMenuSource: function () {
      return U;
    },
    isShortCut: function () {
      return shortcutLocationCheck.isShortcutMode;
    },
    getGlobalConfig: function () {
      return globalConfigHelper.getGlobalConfig;
    },
    ON_SCROLL_TO_ACTIVE_LINE: function () {
      return eZ;
    },
    isDocSSR: function () {
      return docLocaleUtils.isDocSsr;
    },
    ON_LINE_ENTRY_CHANGE: function () {
      return ej;
    },
    TYPE_ENUM: function () {
      return driveFileTypeConstants_1.FileType;
    },
    MENU_ITEM: function () {
      return tF;
    },
    isSupportUserProfile: function () {
      return rM;
    },
    parseUrl: function () {
      return urlQueryStringUtils_1.parseUrl;
    },
    COMMENT_PERMISSION: function () {
      return et;
    },
    setLocalesMap: function () {
      return i18nTranslateUtil.setI18nResource;
    },
    isPromiseLike: function () {
      return ab;
    },
    HELP_DOC_FAQ_URL: function () {
      return globalHelpDocsUrlConfig.brandDocsHomeUrl;
    },
    browser: function () {
      return browserEnvDetectionUtil.browserDetector;
    },
    unsub: function () {
      return uN;
    },
    opmlMimeTypes: function () {
      return tq;
    },
    InlineMenuSource: function () {
      return H;
    },
    descriptionTypes: function () {
      return tE;
    },
    isWikiRelation: function () {
      return docLocaleUtils.hasWikiRelation;
    },
    langMatch: function () {
      return localeManagementUtils.resolveLocaleCode;
    },
    devEnv: function () {
      return globalConfigHelper.isLocalhostMode;
    },
    isSupportNativeFetch: function () {
      return rP;
    },
    PUBLIC_PERMISSION_TYPE: function () {
      return V;
    },
    DIRECT_VISIT_PERMISSION: function () {
      return eu;
    },
    TEMPLATE_EXTEND_MEMBER_AUTH_TYPE_TO_PERMISSION: function () {
      return ed;
    },
    CountryToLanguage: function () {
      return localeManagementUtils.localeMap;
    },
    FILE_URL_TYPE_MAP: function () {
      return tw;
    },
    formatLanguageToLowerCase: function () {
      return localeManagementUtils.localeToSnake;
    },
    getIMGatewayDomains: function () {
      return globalConfigHelper.getImGateway;
    },
    getIsCrossUnit: function () {
      return oe;
    },
    PROTOCOL: function () {
      return eO;
    },
    isCopyCutPasteKey: function () {
      return oD;
    },
    isLargerThan: function () {
      return au;
    },
    SHARE_EXTERNAL_ALLOWED: function () {
      return t7;
    },
    HELP_DOC_SPACE_SINGLE_CONTAINER_URL: function () {
      return globalHelpDocsUrlConfig.spaceContainerUrl;
    },
    getUnitID: function () {
      return globalConfigHelper.getUnitId;
    },
    getSpaceAPIDomains: function () {
      return globalConfigHelper.getSpaceApi;
    },
    URL_REG: function () {
      return eD;
    },
    AT_REG: function () {
      return eP;
    },
    EnterType: function () {
      return browserEnvConfig.EntryChannel;
    },
    LINK_SHARE_PERMISSION: function () {
      return z;
    },
    getThemeColor: function () {
      return n9;
    },
    isOnlineEnv: function () {
      return globalConfigHelper.isOnlineEnv;
    },
    AsyncThrottle: function () {
      return ak;
    },
    TARGET_ENUM: function () {
      return driveFileTypeConstants_1.PlatformType;
    },
    getGroupFromDate: function () {
      return rg;
    },
    isZhLanguage: function () {
      return localeManagementUtils.isChinese;
    },
    intToLowerRoman: function () {
      return o6;
    },
    menuActionTypes: function () {
      return tP;
    },
    PUBLIC_PERMISSION: function () {
      return t4;
    },
    driveStreamAPIHost: function () {
      return globalConfigHelper.driveStreamHost;
    },
    mixRgbaColors: function () {
      return aN;
    },
    mmSuffix: function () {
      return driveFileTypeConstants.mindMapExt;
    },
    monitorResize: function () {
      return aV;
    },
    snakelize: function () {
      return ad;
    },
    RAW_HELP_DOC_FAQ_URL: function () {
      return globalHelpDocsUrlConfig.baseHelpcenterUrl;
    },
    useMountStatus: function () {
      return uL;
    },
    SEPARATED_AT_REG: function () {
      return eF;
    },
    camelCase: function () {
      return o9;
    },
    SECURTITY_PERMISSION: function () {
      return ee;
    },
    createFolderMenuActionTypes: function () {
      return tW;
    },
    CSVMimeTypes: function () {
      return tQ;
    },
    MENTION_TYPE_ENUM: function () {
      return driveFileTypeConstants_1.FileType;
    },
    isDataURL: function () {
      return r4;
    },
    xmindMimeTypes: function () {
      return tX;
    },
    isFeishu: function () {
      return globalConfigHelper.isFeishuProduct;
    },
    intToAZ: function () {
      return o0;
    },
    localGarrModules: function () {
      return globalConfigHelper.localGarrModules;
    },
    isSupportOfflineEdit: function () {
      return rB;
    },
    xlsxSuffix: function () {
      return driveFileTypeConstants.xlsxExt;
    },
    NUM_FILE_TYPE: function () {
      return driveFileTypeConstants.fileTypeEnum;
    },
    SUM_OF_FULL_PERMISSION: function () {
      return es;
    },
    UUIDv4: function () {
      return ai;
    },
    getAppId: function () {
      return on;
    },
    getColorByUserId: function () {
      return colorHashUtil.getColorByString;
    },
    isDev: function () {
      return globalConfigHelper.alwaysFalse;
    },
    bitableActionTypes: function () {
      return tv;
    },
    isSupportComment: function () {
      return ry;
    },
    IPadOverrideKeyboardEvent: function () {
      return oH;
    },
    LANG_MAP: function () {
      return localeManagementUtils.localeFlags;
    },
    getThemeColorByToken: function () {
      return n7;
    },
    EventEmitter: function () {
      return uk;
    },
    toggleTypesArr: function () {
      return tx;
    },
    isSupportSheetEditor: function () {
      return rL;
    },
    getDarkColor: function () {
      return n$;
    },
    getDecodeUrl: function () {
      return urlQueryParserUtils.decodeUriComponent;
    },
    ENTITY_TYPE_INVERT_MAP: function () {
      return ts;
    },
    CSVSuffix: function () {
      return driveFileTypeConstants.csvExt;
    },
    Bind: function () {
      return oI;
    },
    MenuLevel: function () {
      return W;
    },
    isEmail: function () {
      return aa;
    },
    getAllUrlParams: function () {
      return urlQueryParserUtils.parseSearchParams;
    },
    HELP_DOC_IMPORTING_HELP_URL: function () {
      return globalHelpDocsUrlConfig.helpcenterImportUrl;
    },
    getFromByUrl: function () {
      return urlQueryParserUtils.getCachedFromParam;
    },
    getUrlType: function () {
      return urlParseUtils.getType;
    },
    PERMISSION: function () {
      return t3;
    },
    SuiteTitle: function () {
      return documentTypeNameLabels.documentStateLabels;
    },
    VISITOR_PERMISSION_SETTINGS: function () {
      return e_;
    },
    HELP_DOC_DOC_SHARE_URL: function () {
      return globalHelpDocsUrlConfig.helpArticleUrlRef;
    },
    camelize: function () {
      return af;
    },
    isStagingEnv: function () {
      return globalConfigHelper.isStagingEnv;
    },
    MenuScenarios: function () {
      return M;
    },
    pub: function () {
      return uS;
    },
    OFFICIAL_WEBSITE_URL: function () {
      return globalHelpDocsUrlConfig.baseDomainUrl;
    },
    docxMimeTypes: function () {
      return t$;
    },
    LarkSubOpenType: function () {
      return browserEnvConfig.AppCommunity;
    },
    NULL_SECRET: function () {
      return globalHelpDocsUrlConfig.storageSecretKey;
    },
    MEMBER_AUTH_TYPE_TO_FOLDER_PERMISSION: function () {
      return eT;
    },
    getFileExt: function () {
      return fileExtensionUtils_1.getFileExt;
    },
    getUrlToken: function () {
      return urlParseUtils.getToken;
    },
    isSupportHideTitleBar: function () {
      return rG;
    },
    isSupportNativeNetwork: function () {
      return rv;
    },
    AnimationFrame: function () {
      return ap;
    },
    forcePastShowDate: function () {
      return rd;
    },
    FOLDER_V3_PERMISSION: function () {
      return $;
    },
    getAlphaColor: function () {
      return aO;
    },
    getLocaleV1: function () {
      return localeManagementUtils.getBaseLocaleCode;
    },
    refreshFormatter: function () {
      return rl;
    },
    setCursorEnd: function () {
      return aB;
    },
    NUM_SUITE_TYPE_TO_SUITE_ENGINE_TYPE: function () {
      return eJ;
    },
    setLanguage: function () {
      return localeManagementUtils.setLanguageCookie;
    },
    toggleTypePrefix: function () {
      return tI;
    },
    FOLDER_VISITOR_PERMISSION_SETTINGS: function () {
      return eI;
    },
    getThemeConfig: function () {
      return nq;
    },
    OFFICIAL_DOCS_WEBSITE_URL: function () {
      return globalHelpDocsUrlConfig.singleDocsHomeUrl;
    },
    isCutKey: function () {
      return oC;
    },
    showDate: function () {
      return rs;
    },
    getUnnamedTitle: function () {
      return localeManagementUtils.getUntitledDocName;
    },
    actualProtocol: function () {
      return globalConfigHelper.protocolScheme;
    },
    ADMIN_WIKI_URL: function () {
      return globalHelpDocsUrlConfig.adminDriveWikiUrl;
    },
    selectAll: function () {
      return aU;
    },
    HELP_DOC_JIRA_INTRO_URL: function () {
      return globalHelpDocsUrlConfig.helpcenterArtUrl;
    },
    HELP_DOC_APP_SHARE_URL: function () {
      return globalHelpDocsUrlConfig.appShareHelpUrl;
    },
    HELP_DOC_RELATION_GRAPH_URL: function () {
      return globalHelpDocsUrlConfig.helpArticleUrlAlt;
    },
    MENTION_TO_SUITE: function () {
      return driveFileTypeConstants_1.fileTypeToDriveMap;
    },
    NUM_CUSTOM_ICON_TYPE: function () {
      return C;
    },
    encryptTea: function () {
      return mixedHashUtil.generateHash;
    },
    getUrlMapper: function () {
      return globalConfigHelper.getUrlMapper;
    },
    setCookie: function () {
      return cookieUtilsHelper.setCookie;
    },
    translate: function () {
      return i18nTranslateUtil.translate;
    },
    ON_SHOWING_FULL_CHANGE: function () {
      return e$;
    },
    MEMBER_AUTH_TYPE_TO_PERMISSION: function () {
      return t8;
    },
    PRODUCT_RENAME_FORWARD_MAP: function () {
      return tc;
    },
    SHARE_PERMISSION: function () {
      return t9;
    },
    sleep: function () {
      return am;
    },
    excelMimeTypes: function () {
      return tj;
    },
    AsyncRetry: function () {
      return ax;
    },
    Debounce: function () {
      return oA;
    },
    USER_PERMISSIONS: function () {
      return ec;
    },
    driveActionTypes: function () {
      return tB;
    },
    getBrandCustomName: function () {
      return e3;
    },
    getLangMap: function () {
      return localeManagementUtils.getLocaleFlags;
    },
    getZhDay: function () {
      return rc;
    },
    isSupportNativeToast: function () {
      return rZ;
    },
    isSupportPreview: function () {
      return rD;
    },
    parseQuery: function () {
      return urlQueryStringUtils_1.getQueryFromUrl;
    },
    xlsSuffix: function () {
      return driveFileTypeConstants.xlsExt;
    },
    AfterAnimationFrame: function () {
      return aw;
    },
    findParentElement: function () {
      return aY;
    },
    DRIVE_HOME_URL: function () {
      return globalHelpDocsUrlConfig.driveHomeUrl;
    },
    createMenuActionTypes: function () {
      return tU;
    },
    isSingleProduct: function () {
      return rj;
    },
    getLanguageV1: function () {
      return localeManagementUtils.getAltLocaleCode;
    },
    getUserDisplayNameByLang: function () {
      return od;
    },
    STATUS_CODE: function () {
      return eq;
    },
    isBold: function () {
      return aF;
    },
    MEMBER_AUTH_DESC_TO_PERMISSION: function () {
      return ek;
    },
    ENTITY_TYPE: function () {
      return tl;
    },
    DOC_TYPES: function () {
      return driveFileTypeConstants_1.supportedFileTypes;
    },
    StatusMap: function () {
      return q;
    },
    TOP_DOMAIN: function () {
      return ey;
    },
    KeyCode: function () {
      return to;
    },
    isSupportSmoothScrollWhenOpenKeyboard: function () {
      return rV;
    },
    getDateStr: function () {
      return re;
    },
    getDriveNearbyAPIDomains: function () {
      return globalConfigHelper.getNearbyDriveApi;
    },
    ADMIN_URL: function () {
      return globalHelpDocsUrlConfig.adminBaseUrl;
    },
    getIsDevOrStaging: function () {
      return globalConfigHelper.isStagingOrSpecial;
    },
    mapPermissionNum2Description: function () {
      return eE;
    },
    omit: function () {
      return ah;
    },
    mdSuffix: function () {
      return driveFileTypeConstants.mdExt;
    },
    quickAccessTypes: function () {
      return tS;
    },
    PASSPORT_DOMAIN: function () {
      return globalHelpDocsUrlConfig.passportDomain;
    },
    MEMBER_AUTH_DESC_TO_FOLDER_PERMISSION: function () {
      return ex;
    },
    FILE_TYPE: function () {
      return driveFileTypeConstants.nodeTypeConstants;
    },
    isCtrlA: function () {
      return oU;
    },
    ROUTE_NAME_ARRAY: function () {
      return tb;
    },
    getCDNDomains: function () {
      return globalConfigHelper.getStaticConfig;
    },
    getColor: function () {
      return ot;
    },
    getUserDisplayNameByEntity: function () {
      return os;
    },
    isSupportCreate: function () {
      return rR;
    },
    platformActionTypes: function () {
      return tG;
    },
    toggleActionTypes: function () {
      return tk;
    },
    I18nLocales: function () {
      return tn;
    },
    getCommonEnv: function () {
      return globalConfigHelper.getCommonConfig;
    },
    transformColorToToken: function () {
      return nI;
    },
    AZToInt: function () {
      return o1;
    },
    isPureSingleProduct: function () {
      return r$;
    },
    getFileName: function () {
      return fileExtensionUtils_1.stripExtension;
    },
    featureGatedCreateSuiteMenuActionTypes: function () {
      return tV;
    },
    getLanguage: function () {
      return localeManagementUtils.getShortLocale;
    },
    parseOriginUrl: function () {
      return urlParseUtils.parseUrl;
    },
    xmindSuffix: function () {
      return driveFileTypeConstants.xmindExt;
    },
    NEW_PUBLIC_PERMISSION: function () {
      return er;
    },
    NativeFGKeys: function () {
      return t1;
    },
    isSupportCommentCallback: function () {
      return rC;
    },
    ON_SHOWING_STATE_CHANGE: function () {
      return eV;
    },
    gzip: function () {
      return uw;
    },
    User: function () {
      return oa;
    },
    DATE_FORMAT: function () {
      return ru;
    },
    defaultAPIHost: function () {
      return globalConfigHelper.getApiHost;
    },
    getIsCrossBrand: function () {
      return e4;
    },
    isCopyKey: function () {
      return oL;
    },
    readDisplayNameWithLocale: function () {
      return ou;
    },
    MountNodeType: function () {
      return Y;
    },
    isByteDanceDomain: function () {
      return globalConfigHelper.isBytedanceHost;
    },
    ungzipBuffer: function () {
      return uE;
    },
    hasUrlProtocol: function () {
      return an;
    },
    ungzip: function () {
      return up;
    },
    slidesActionTypes: function () {
      return tO;
    },
    createSuiteMenuActionTypes: function () {
      return tH;
    },
    defaultNearbyDriveAPI: function () {
      return globalConfigHelper.nearbyDriveApi;
    },
    isSmallerThan: function () {
      return ac;
    },
    parseHash: function () {
      return urlQueryStringUtils_1.parseHash;
    },
    isSpaceApp: function () {
      return browserEnvConfig.isSpaceApp;
    },
    IP_REG: function () {
      return eR;
    },
    HELP_PDESK_CUSTOMER_SERVICE_URL: function () {
      return globalHelpDocsUrlConfig.supportTicketNewUrl;
    },
    MountPointType: function () {
      return Z;
    },
    getLocale: function () {
      return localeManagementUtils.getCurrentLocale;
    },
    lowerRomanToInt: function () {
      return o2;
    },
    HELP_DESK_GET_CUSTOMER_SERVICE_URL: function () {
      return globalHelpDocsUrlConfig.customerServiceUrl;
    },
    getSdkVersion: function () {
      return rA;
    },
    opmlSuffix: function () {
      return driveFileTypeConstants.opmlExt;
    },
    docSuffix: function () {
      return driveFileTypeConstants.defaultDocExt;
    },
    isSameFileToken: function () {
      return r_;
    },
    parseFont: function () {
      return aP;
    },
    generateRandomString: function () {
      return oj;
    },
    getDomainConfig: function () {
      return domainConfigUtils.getDomainConfig;
    },
    MESSENGER_URL: function () {
      return globalHelpDocsUrlConfig.messengerBaseUrl;
    },
    isvMenuActionTypes: function () {
      return tY;
    },
    isProductionDomain: function () {
      return globalConfigHelper.isOnlineOrPre;
    },
    MENTION_ERROR_MSG: function () {
      return driveFileTypeConstants_1.errorMessages;
    },
    MentionListHeight: function () {
      return driveFileTypeConstants_1.maxWidth;
    },
    addQueriesToUrl: function () {
      return urlQueryStringUtils_1.mergeUrlQuery;
    },
    forceTimePast: function () {
      return ri;
    },
    formatUrlParamObject: function () {
      return urlQueryStringUtils_1.stringifyQuery;
    },
    LENGTH_LIMITED_EMAIL_REG: function () {
      return eC;
    },
    getDaysRemain: function () {
      return rf;
    },
    HIGHLIGHT_REG: function () {
      return eM;
    },
    getDayFromDate: function () {
      return rn;
    },
    getDriveAPIDomains: function () {
      return globalConfigHelper.getDriveApi;
    },
    getHelpCenterUrl: function () {
      return r8;
    },
    ArrowKeysEnum: function () {
      return oN;
    },
    FOLDER_PERMISSION: function () {
      return K;
    },
    getIsAnonymousAccess: function () {
      return rX;
    },
    getMainDomain: function () {
      return globalConfigHelper.getMainDomain;
    },
    LOGIN_URL: function () {
      return globalHelpDocsUrlConfig.loginPageUrl;
    },
    isEmpty: function () {
      return oX;
    },
    isSupportFilePreviewForMobile: function () {
      return rU;
    },
    removeWhiteSpacesBetweenHtmlTags: function () {
      return aW;
    },
    getPreEnvCookieVal: function () {
      return globalConfigHelper.parseEnvCookie;
    },
    FOLDER_PUBLIC_PERMISSION: function () {
      return j;
    },
    CopyPasteKeysEnum: function () {
      return oy;
    },
    isSupportIOSRender: function () {
      return rS;
    },
    flattenObj: function () {
      return ag;
    },
    suiteActionTypes: function () {
      return ty;
    },
    ON_RESIZE: function () {
      return eY;
    },
    isDevOrStaging: function () {
      return globalConfigHelper.isStagingOrSpecial;
    },
    MEMBER_AUTH_PERMISSIONS: function () {
      return t6;
    },
    isSupportNativeAlert: function () {
      return rW;
    },
    HELP_DOC_INCOMPATIBLE_EXTENSION_URL: function () {
      return globalHelpDocsUrlConfig.incompatibleExtUrl;
    },
    explorerActionTypes: function () {
      return tL;
    },
    isEnLanguage: function () {
      return localeManagementUtils.isEnglish;
    },
    QUERY_FIELDS: function () {
      return X;
    },
    isLark: function () {
      return globalConfigHelper.isLarkProduct;
    },
    getOverloadStaticDomains: function () {
      return globalConfigHelper.getOverloadStatic;
    },
    FILE_TYPE_RENAME_REVERSE_MAP: function () {
      return driveFileTypeConstants.pluralToSingularMap;
    },
    getHelpCenterDomain: function () {
      return globalConfigHelper.getHelpCenterDomain;
    },
    MENU_DIVIDER: function () {
      return tM;
    },
    transformCase: function () {
      return as;
    },
    HELP_TODO_CENTER_URL: function () {
      return globalHelpDocsUrlConfig.helpArticleUrlAlt2;
    },
    getLocalParams: function () {
      return globalConfigHelper.getLocalConfig;
    },
    intToLowerLatin: function () {
      return o4;
    },
    TICKET_URL: function () {
      return globalHelpDocsUrlConfig.frontierTicketUrl;
    },
    markdownMimeTypes: function () {
      return t0;
    },
    getColorById: function () {
      return aR;
    },
    getLarkEnv: function () {
      return browserEnvConfig.getShellEnv;
    },
    SUITE_TO_MENTION_SOURCE: function () {
      return driveFileTypeConstants_1.driveToCommentTypeMap;
    },
    getSearch: function () {
      return urlQueryParserUtils.getQueryParam;
    },
    isDocUrl: function () {
      return domainConfigUtils.isDomainValid;
    },
    getAppNameFromConfig: function () {
      return r2;
    },
    getUnnamedTitleForDocSSR: function () {
      return docLocaleUtils.getUntitledText;
    },
    isAccelKey: function () {
      return oG;
    },
    isDocsourceProtocol: function () {
      return rF;
    },
    DeleteKeysEnum: function () {
      return oB;
    },
    isPreEnv: function () {
      return globalConfigHelper.isPreReleaseEnv;
    },
    wikiActionTypes: function () {
      return tR;
    },
    isNativeFrame: function () {
      return browserEnvConfig.isLarkWeb;
    },
    isvActionTypes: function () {
      return tD;
    },
    uploadMenuActionTypes: function () {
      return tZ;
    },
    SOURCE_ENUM: function () {
      return driveFileTypeConstants_1.CommentType;
    },
    getFullDateStr: function () {
      return rr;
    },
    SUITE_ENGINE_TYPE: function () {
      return Q;
    },
    docsActionTypes: function () {
      return tA;
    },
    getUserColorId: function () {
      return colorHashUtil.getColorIndex;
    },
    Throttle: function () {
      return oS;
    },
    getCustomIconUrl: function () {
      return e8;
    },
    versionActionTypes: function () {
      return tT;
    },
    createCustomEvent: function () {
      return aM;
    },
    isSupportNativeFeed: function () {
      return rH;
    },
    PERMISSION_TEXT: function () {
      return en;
    },
    isBoeEnv: function () {
      return globalConfigHelper.isBoeEnv;
    },
    ROUTE_NAME: function () {
      return tg;
    },
    mapLanguageToLocale: function () {
      return localeManagementUtils.normalizeLocaleCode;
    },
    docMimeTypes: function () {
      return tK;
    },
    HELP_CREATE_CUSTOM_TEMPLATE_URL: function () {
      return globalHelpDocsUrlConfig.helpArticleUrlFixed;
    },
    VISITOR_PERMISSION_DESC: function () {
      return eo;
    },
    isUndoKey: function () {
      return oP;
    },
    resetUserColor: function () {
      return colorHashUtil.clearColorCache;
    },
    isSizeofOver: function () {
      return oQ;
    },
    handleScroll: function () {
      return aH;
    },
    LINK_REG: function () {
      return ev;
    },
    HELP_DOC_AUTHORIZED_HELP_URL: function () {
      return globalHelpDocsUrlConfig.helpcenterPermUrl;
    },
    langMatchV1: function () {
      return localeManagementUtils.mapLocaleBase;
    },
    ON_NEW_ENTRIES: function () {
      return eH;
    },
    ON_SIZE_CHANGE: function () {
      return eK;
    },
    MentionListWidth: function () {
      return driveFileTypeConstants_1.minWidth;
    },
    isPromise: function () {
      return aE;
    },
    getDomainPool: function () {
      return globalConfigHelper.getDomainPool;
    },
    sub: function () {
      return uR;
    },
    getAppVersion: function () {
      return rN;
    },
    NUM_SUITE_TYPE: function () {
      return J;
    },
    ON_NEW_ACTIVE_GUID: function () {
      return eW;
    },
    getOffsetTop: function () {
      return aZ;
    },
    deleteCookie: function () {
      return cookieUtilsHelper.deleteCookie;
    },
    ON_SIDEBAR_STATE_CHANGE: function () {
      return ez;
    },
    MenuActionType: function () {
      return v;
    },
    PRIVATE_POLICY_URL: function () {
      return globalHelpDocsUrlConfig.privacyPolicyUrl;
    },
    parseRgba: function () {
      return aS;
    },
    mmMimeTypes: function () {
      return tJ;
    },
    snakeCase: function () {
      return o7;
    },
    LINK_SHARE_TYPE_TO_PERMISSION: function () {
      return ef;
    },
    findParentNode: function () {
      return az;
    },
    isUrl: function () {
      return ao;
    },
    VISITOR_PERMISSION_DESC_MOBILE: function () {
      return ea;
    },
    HELP_DOC_WHATS_NEW_URL: function () {
      return globalHelpDocsUrlConfig.helpArticleUrlAlt3;
    },
    collectWithCustomizeFn: function () {
      return uy;
    },
    getFileToken: function () {
      return rw;
    },
    LOGIN_DOCS_URL: function () {
      return globalHelpDocsUrlConfig.loginPageUrlAlias;
    },
    px2pt: function () {
      return aG;
    },
    checkIsSelectorVisible: function () {
      return aK;
    },
    completeURLProtocol: function () {
      return r3;
    },
    suiteFolderSharedActionTypes: function () {
      return tN;
    },
    useImageLoadStatus: function () {
      return uG;
    },
    ColorType: function () {
      return tt;
    },
    translate: function () {
      return i18nTranslateUtil.t;
    },
    STAR_SOURCE: function () {
      return F;
    },
    getCookie: function () {
      return cookieUtilsHelper.getCookie;
    },
    isEscKey: function () {
      return oM;
    },
    isLocalhostDomain: function () {
      return globalConfigHelper.isLocalhost;
    },
    mapTypeNumToFileType: function () {
      return driveFileTypeConstants.enumToConstMap;
    },
    TOP_DOMAIN_LITE: function () {
      return eB;
    },
    isDeleteShortCutKey: function () {
      return ov;
    },
    isShortCutServer: function () {
      return shortcutLocationCheck.isShortcutEnabled;
    },
    getBrandNameForDocSSR: function () {
      return docLocaleUtils.getProductTitle;
    },
    FILE_TYPE_URL_MAP: function () {
      return th;
    }
  });
}