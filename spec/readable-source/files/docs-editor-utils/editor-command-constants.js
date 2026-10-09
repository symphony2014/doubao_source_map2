// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G1' to 'commandTypes'
// - Renamed export 'G8' to 'reloadActions'
// - Renamed export 'Zp' to 'buttonGroupTypes'
// - Renamed export 'qh' to 'menuItemTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 901533
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  (o = {}).INLINE_AI = "inlineAI";
  o.EDIT_PENCIL_KIT = "editPencilKit";
  o.STYLE = "style";
  o.COMMENT = "comment";
  o.START_TIME = "startTime";
  o.PAUSE_TIME = "pauseTime";
  o.EDIT_TIME = "editTime";
  o.ADD_TIME = "addTime";
  o.CONTENT_REACTION = "contentReaction";
  o.COPY_LINK = "copyLink";
  o.CUT = "cut";
  o.COPY = "copy";
  o.FORWARD = "forward";
  o.NEW_LINE_BELOW = "newLineBelow";
  o.DELETE = "delete";
  o.ALIGN = "align";
  o.MORE = "more";
  o.VIEW = "view";
  o.CARD_VIEW = "cardView";
  o.TEXT_VIEW = "textView";
  o.PREVIEW_VIEW = "previewView";
  o.SEPARATOR = "separator";
  o.TEXT = "plainText";
  o.H1 = "h1";
  o.H2 = "h2";
  o.H3 = "h3";
  o.H4 = "h4";
  o.H5 = "h5";
  o.H6 = "h6";
  o.H7 = "h7";
  o.H8 = "h8";
  o.H9 = "h9";
  o.HN = "hn";
  o.BLOCK_QUOTE = "blockquote";
  o.CODE_LIST = "insertcodelist";
  o.CODE_BLOCK = "insertcodeblock";
  o.INLINE_CODE = "inlinecode";
  o.CHECKBOX = "checkbox";
  o.CHECKLIST = "checkList";
  o.ORDERED_LIST = "insertorderedlist";
  o.UNORDERED_LIST = "insertunorderedlist";
  o.BOLD = "bold";
  o.ITALIC = "italic";
  o.UNDERLINE = "underline";
  o.STRIKE_THROUGH = "strikethrough";
  o.HIGHLIGHT = "highlight";
  o.BLOCK_BACKGROUND = "blockbackground";
  o.INDENT_RIGHT = "indentright";
  o.INDENT_LEFT = "indentleft";
  o.ALIGN_LEFT = "alignleft";
  o.ALIGN_CENTER = "aligncenter";
  o.ALIGN_RIGHT = "alignright";
  o.BLOCK_ALIGN_LEFT = "blockalignleft";
  o.BLOCK_ALIGN_CENTER = "blockaligncenter";
  o.BLOCK_ALIGN_RIGHT = "blockalignright";
  o.DEBUG_BLOCK = "DEBUG_BLOCK";
  o.REFRESH_BLOCK = "REFRESH_BLOCK";
  o.INSERT_TASK = "insertTask";
  o.FOCUS_TASK = "focusTask";
  o.CHECK_DETAILS = "checkDetails";
  o.CANCEL_REALTIME_REFERENCE = "cancelRealtimeReference";
  o.CANCEL_SYNC_TASK = "cancelSyncTask";
  o.TRANSLATE = "translate";
  o.TRANSLATE_INSERT = "translateInsert";
  o.SYNCED_SOURCE = "syncedSource";
  o.FILE_DOWNLOAD = "fileDownload";
  o.FILE_OPEN_WITH = "fileOpenWith";
  o.FILE_SAVE_TO_DRIVE = "fileSaveToDrive";
  o.CAPTION = "caption";
  o.EDIT_IMAGE = "editImage";
  o.SHARE_TEXT = "share_text";
  let u = o;
  u.EDIT_PENCIL_KIT;
  (i = {}).ICON_WITH_TEXT = "iconWithText";
  i.ICON_ALONE = "iconAlone";
  i.ICON_IN_GROUP = "iconInGroup";
  i.ICON_WITH_RIGHT_ARROW = "iconWithRightArrow";
  i.ICON_WITH_DOWN_ARROW = "iconWithDownArrow";
  i.GROUP = "group";
  i.SEPARATOR = "separator";
  i.COLORED_ICON_WITH_TEXT = "coloredIconWithText";
  i.SCROLLABLE_GROUP = "scrollableGroup";
  let a = i;
  (l = {}).reloadBlockWithOnlineResource = "reloadWithOnlineResource";
  l.reloadBlockWithDebugResource = "reloadWithDebugResource";
  let s = l;
  (c = {}).HEADING_BUTTON_GROUP = "headingButtonGroup";
  c.SEPARATOR_BUTTON_GROUP = "separatorButtonGroup";
  c.CHECKBOX_BUTTON_GROUP = "checkboxButtonGroup";
  c.UNORDER_LIST_BUTTON_GROUP = "unorderButtonGroup";
  c.ORDER_LIST_BUTTON_GROUP = "orderButtonGroup";
  c.CODE_BLOCK_BUTTON_GROUP = "codeblockButtonGroup";
  c.BLOCKQUETE_BUTTON_GROUP = "blockqueteButtonGroup";
  let d = c;
  require.d(exports, {
    commandTypes: function () {
      return u;
    },
    reloadActions: function () {
      return s;
    },
    buttonGroupTypes: function () {
      return d;
    },
    menuItemTypes: function () {
      return a;
    }
  });
}