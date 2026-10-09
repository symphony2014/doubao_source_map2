// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HZ' to 'blockAddActionMap'
// - Renamed export 'Mr' to 'alignActionMap'
// - Renamed export 'wC' to 'collectBlockEvent'
// - Renamed export 'uD' to 'uiActionTypes'
// - Renamed export 'PO' to 'uiComponentTypes'
// - Renamed export 'JR' to 'blockTransformMap'
// - Renamed export 'NO' to 'commandActionMap'
// - Renamed export 'ig' to 'collectSlashClick'
// - Renamed export 'G1' to 'classifyBlocks'
// - Renamed export 'LJ' to 'layoutHeaderMap'
// - Renamed export 'xT' to 'layoutSelectionMap'
// - Renamed export 'u2' to 'componentToolbarMap'
// - Renamed export 'uH' to 'actionConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 987175
         */
module.exports = function (module, exports, require) {
  var o;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var safeFunctionWrapper = require("safe-function-wrapper") /*id: 741051*/;
  var eventCollectorClass = require("event-collector-class") /*id: 425897*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var uiComponentActionTypes = require("ui-component-action-types") /*id: 594795*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var editorCommandConstants = require("editor-command-constants") /*id: 901533*/;
  var docEditorToolbarConstants = require("doc-editor-toolbar-constants") /*id: 928431*/;
  var uiActionConstants = require("ui-action-constants") /*id: 824909*/;
  (o = {}).TURN_INTO = "turn_into_";
  o.ADD = "add_";
  o.ADD_INLINE = "add_inline_";
  let k = o;
  let I = {
    arrow_up: "arrow_up",
    arrow_down: "arrow_down",
    arrow_left: "arrow_left",
    arrow_right: "arrow_right",
    shift_arrow_up: "shift_arrow_up",
    shift_arrow_down: "shift_arrow_down",
    shift_arrow_left: "shift_arrow_left",
    shift_arrow_right: "shift_arrow_right",
    backspace: "backspace",
    enter: "enter",
    shift_enter: "shift_enter",
    meta_shift_enter: "meta_shift_enter",
    shift_cmd_up: "shift_cmd_up",
    shift_cmd_down: "shift_cmd_down",
    shift_ctrl_up: "shift_ctrl_up",
    shift_ctrl_down: "shift_ctrl_down",
    tab: "tab",
    untab: "untab",
    bold: "bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "strikethrough",
    link: "link",
    inlineCode: "inlineCode",
    metaEnter: "meta_enter",
    select_all: "select_all",
    keydown: "keydown",
    newPage: "new_page",
    highlight: "highlight",
    turn_into_heading1: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING1}`,
    turn_into_heading2: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING2}`,
    turn_into_heading3: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING3}`,
    turn_into_heading4: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING4}`,
    turn_into_heading5: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING5}`,
    turn_into_heading6: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING6}`,
    turn_into_heading7: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING7}`,
    turn_into_heading8: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING8}`,
    turn_into_heading9: `turn_into_${docBlockTypeConstants.blockTypeConstants.HEADING9}`,
    turn_into_ordered: `turn_into_${docBlockTypeConstants.blockTypeConstants.ORDERED}`,
    turn_into_bullet: `turn_into_${docBlockTypeConstants.blockTypeConstants.BULLET}`,
    turn_into_quote_container: `turn_into_${docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER}`,
    turn_into_code: `turn_into_${docBlockTypeConstants.blockTypeConstants.CODE}`,
    turn_into_text: `turn_into_${docBlockTypeConstants.blockTypeConstants.TEXT}`,
    turn_into_callout: `turn_into_${docBlockTypeConstants.blockTypeConstants.CALLOUT}`,
    turn_into_todo: `turn_into_${docBlockTypeConstants.blockTypeConstants.TODO}`,
    turn_into_synced_source: `turn_into_${docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE}`,
    add_hyper_link: "add_hyper_link",
    turn_task: "turn_task",
    add_divider: `add_${docBlockTypeConstants.blockTypeConstants.DIVIDER}`,
    exit: "exit",
    collapse: "collapse",
    expand: "expand",
    minus: "minus",
    comment: "comment",
    reaction: "reaction",
    text_align_left: "text_align_left",
    text_align_right: "text_align_right",
    text_align_center: "text_align_center",
    copy_anchor_link: "copy_anchor_lick",
    copy_link: "copy_link",
    copy_multi_block_anchor: "copy_multi_block_anchor",
    send_to_chat: "send_to_chat",
    add_diagram: `add_${docBlockTypeConstants.blockTypeConstants.DIAGRAM}`,
    add_whiteboard: `add_${docBlockTypeConstants.blockTypeConstants.WHITEBOARD}`,
    add_iframe: `add_${docBlockTypeConstants.blockTypeConstants.IFRAME}`,
    add_poll: `add_${docBlockTypeConstants.blockTypeConstants.POLL}`,
    add_meego: `add_${docBlockTypeConstants.blockTypeConstants.MEEGO}`,
    add_bookmark: `add_${docBlockTypeConstants.blockTypeConstants.BOOKMARK}`,
    add_image: `add_${docBlockTypeConstants.blockTypeConstants.IMAGE}`,
    add_file: `add_${docBlockTypeConstants.blockTypeConstants.FILE}`,
    at: "at",
    add_inline_user: "add_inline_user",
    add_inline_mention_doc: "add_inline_mention_doc",
    add_inline_link: "add_inline_link",
    add_inline_reminder: "add_inline_reminder",
    add_inline_equation: `add_inline_${docBlockTypeConstants.blockTypeConstants.EQUATION}`,
    add_inline_button: `add_inline_${docBlockTypeConstants.blockTypeConstants.BUTTON}`,
    add_chat_card: `add_${docBlockTypeConstants.blockTypeConstants.CHAT_CARD}`,
    add_sheet: `add_${docBlockTypeConstants.blockTypeConstants.SHEET}`,
    add_bitable: `add_${docBlockTypeConstants.blockTypeConstants.BITABLE}`,
    add_base_refer: `add_${docBlockTypeConstants.blockTypeConstants.BASE_REFER}`,
    add_mindmap: `add_${docBlockTypeConstants.blockTypeConstants.MINDMAP}`,
    add_grid_column: `add_${docBlockTypeConstants.blockTypeConstants.GRID_COLUMN}`,
    add_table: `add_${docBlockTypeConstants.blockTypeConstants.TABLE}`,
    add_isv: `add_${docBlockTypeConstants.blockTypeConstants.ISV}`,
    add_okr: `add_${docBlockTypeConstants.blockTypeConstants.OKR}`,
    add_okrx: `add_${docBlockTypeConstants.blockTypeConstants.OKRX}`,
    add_agenda: `add_${docBlockTypeConstants.blockTypeConstants.AGENDA}`,
    add_task: `add_${docBlockTypeConstants.blockTypeConstants.TASK}`,
    add_task_list: `add_${docBlockTypeConstants.blockTypeConstants.TASK_LIST}`,
    add_callout: `add_${docBlockTypeConstants.blockTypeConstants.CALLOUT}`,
    choose_task_list: "choose_task_list",
    check_task_list_template: "check_task_list_template",
    copy: "copy",
    cut: "cut",
    paste: "paste",
    undo: "undo",
    redo: "redo",
    merge_cell: "merge_cell",
    color: "color",
    backgroundColor: "backgroundColor",
    remove_highlight: "remove_highlight",
    find: "find",
    replace: "replace",
    open_helper: "open_helper",
    advanced_search: "advanced_search",
    block_color: "block_color",
    display_mode: "display_mode",
    save_block_template: "save_block_template",
    block_template: "block_template",
    more_template: "more_template",
    insert_template: "insert_template",
    table_cell_color: "table_cell_color",
    remove_table_cell_color: "remove_table_cell_color",
    align_top: "align_top",
    align_center_vertical: "align_center_vertical",
    align_bottom: "align_bottom",
    delete_table_frame: "delete_table_frame",
    equalize_table_column_width: "equalize_table_column_width",
    crop: "crop",
    caption: "caption",
    create_lingo: "create_lingo",
    user_ask: "user_ask",
    explain_this: "explain_this",
    create_new_sub_docx: "create_new_sub_docx",
    convert_to_sub_doc: "convert_to_sub_doc",
    my_ai: "My_AI",
    write_with_enterprise_qa: "write_with_enterprise_qa",
    ai_prompt: "ai_command",
    copy_source_web_link: "copy_source_web_link",
    share_text_link: "share_to_chat",
    lark_search: "click_lark_search",
    web_search: "click_web_search",
    create_meego: "turn_into_meego_workitem"
  };
  let R = {
    [editorUiComponentConstants.uiComponentTypes.PopoverMenu]: uiComponentActionTypes.componentTypes.web_block_bubble_toolbar,
    [editorUiComponentConstants.uiComponentTypes.TableCell]: uiComponentActionTypes.componentTypes.web_text_bubble_toolbar,
    [editorUiComponentConstants.uiComponentTypes.TextualToolbar]: uiComponentActionTypes.componentTypes.web_text_bubble_toolbar,
    [editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar]: uiComponentActionTypes.componentTypes.web_text_bubble_toolbar
  };
  let y = {
    [tableLayoutConstants.layoutDirection.COLUMN]: docBlockConstants.selectionModes.SELECT_TABLE_COLUMN,
    [tableLayoutConstants.layoutDirection.ROW]: docBlockConstants.selectionModes.SELECT_TABLE_ROW
  };
  let O = {
    [tableLayoutConstants.layoutDirection.COLUMN]: "set_table_header_column",
    [tableLayoutConstants.layoutDirection.ROW]: "set_table_header_row"
  };
  let S = {
    [tableLayoutConstants.verticalAlignTypes.TOP]: I.align_top,
    [tableLayoutConstants.verticalAlignTypes.MIDDLE]: I.align_center_vertical,
    [tableLayoutConstants.verticalAlignTypes.BOTTOM]: I.align_bottom
  };
  let A = {
    [docBlockTypeConstants.blockTypeConstants.TEXT]: I.turn_into_text,
    [docBlockTypeConstants.blockTypeConstants.BULLET]: I.turn_into_bullet,
    [docBlockTypeConstants.blockTypeConstants.ORDERED]: I.turn_into_ordered,
    [docBlockTypeConstants.blockTypeConstants.TODO]: I.turn_into_todo,
    [docBlockTypeConstants.blockTypeConstants.CALLOUT]: I.turn_into_callout,
    [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]: I.turn_into_quote_container,
    [docBlockTypeConstants.blockTypeConstants.CODE]: I.turn_into_code,
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: I.turn_into_heading1,
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: I.turn_into_heading2,
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: I.turn_into_heading3,
    [docBlockTypeConstants.blockTypeConstants.HEADING4]: I.turn_into_heading4,
    [docBlockTypeConstants.blockTypeConstants.HEADING5]: I.turn_into_heading5,
    [docBlockTypeConstants.blockTypeConstants.HEADING6]: I.turn_into_heading6,
    [docBlockTypeConstants.blockTypeConstants.HEADING7]: I.turn_into_heading7,
    [docBlockTypeConstants.blockTypeConstants.HEADING8]: I.turn_into_heading8,
    [docBlockTypeConstants.blockTypeConstants.HEADING9]: I.turn_into_heading9,
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: I.turn_into_synced_source
  };
  let L = {
    [docBlockTypeConstants.blockTypeConstants.GRID]: I.add_grid_column,
    [docBlockTypeConstants.blockTypeConstants.OKR]: I.add_okr,
    [docBlockTypeConstants.blockTypeConstants.OKRX]: I.add_okrx,
    [docBlockTypeConstants.blockTypeConstants.POLL]: I.add_poll,
    [docBlockTypeConstants.blockTypeConstants.AGENDA]: I.add_agenda,
    [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: I.add_task_list,
    [docBlockTypeConstants.blockTypeConstants.TABLE]: I.add_table,
    [docBlockTypeConstants.blockTypeConstants.SHEET]: I.add_sheet,
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: I.add_bitable,
    [docBlockTypeConstants.blockTypeConstants.MINDMAP]: I.add_mindmap,
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: I.add_whiteboard,
    [docBlockTypeConstants.blockTypeConstants.IMAGE]: I.add_image,
    [docBlockTypeConstants.blockTypeConstants.FILE]: I.add_file,
    [docBlockTypeConstants.blockTypeConstants.MEEGO]: I.add_meego,
    [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: I.turn_into_synced_source
  };
  let N = {
    [docEditorCommandConstants.cursorUpCommand]: I.arrow_up,
    [docEditorCommandConstants.cursorDownCommand]: I.arrow_down,
    [docEditorCommandConstants.cursorLeftCommand]: I.arrow_left,
    [docEditorCommandConstants.cursorRightCommand]: I.arrow_right,
    [docEditorCommandConstants.shiftArrowUp]: I.shift_arrow_up,
    [docEditorCommandConstants.shiftArrowDown]: I.shift_arrow_down,
    [docEditorCommandConstants.shiftArrowLeft]: I.shift_arrow_left,
    [docEditorCommandConstants.shiftArrowRight]: I.shift_arrow_right,
    [docEditorCommandConstants.commandBackspace]: I.backspace,
    [docEditorCommandConstants.commandEnter]: I.enter,
    [docEditorCommandConstants.shiftEnterCommand]: I.shift_enter,
    [docEditorCommandConstants.unTabCommand]: I.untab,
    [docEditorCommandConstants.commandTab]: I.tab,
    [docEditorCommandConstants.boldCommand]: I.bold,
    [docEditorCommandConstants.italicCommand]: I.italic,
    [docEditorCommandConstants.underlineCommand]: I.underline,
    [docEditorCommandConstants.strikethroughCommand]: I.strikethrough,
    [docEditorCommandConstants.linkCommand]: I.link,
    [docEditorCommandConstants.inlineCodeCommand]: I.inlineCode,
    [docEditorCommandConstants.metaEnter]: I.metaEnter,
    [docEditorCommandConstants.selectAllCommand]: I.select_all,
    [docEditorCommandConstants.keyDown]: I.keydown,
    [docEditorCommandConstants.newPageCommand]: I.newPage,
    [docEditorCommandConstants.turnIntoHeading1]: I.turn_into_heading1,
    [docEditorCommandConstants.turnIntoHeading2]: I.turn_into_heading2,
    [docEditorCommandConstants.turnIntoHeading3]: I.turn_into_heading3,
    [docEditorCommandConstants.turnIntoHeading4]: I.turn_into_heading4,
    [docEditorCommandConstants.turnIntoHeading5]: I.turn_into_heading5,
    [docEditorCommandConstants.turnIntoHeading6]: I.turn_into_heading6,
    [docEditorCommandConstants.turnIntoHeading7]: I.turn_into_heading7,
    [docEditorCommandConstants.turnIntoHeading8]: I.turn_into_heading8,
    [docEditorCommandConstants.turnIntoHeading9]: I.turn_into_heading9,
    [docEditorCommandConstants.turnIntoOrdered]: I.turn_into_ordered,
    [docEditorCommandConstants.turnIntoBullet]: I.turn_into_bullet,
    [docEditorCommandConstants.turnIntoTodo]: I.turn_into_todo,
    [docEditorCommandConstants.turnIntoQuoteContainer]: I.turn_into_quote_container,
    [docEditorCommandConstants.turnIntoCode]: I.turn_into_code,
    [docEditorCommandConstants.turnIntoText]: I.turn_into_text,
    [docEditorCommandConstants.turnIntoCallout]: I.turn_into_callout,
    [docEditorCommandConstants.addDividerCommand]: I.add_divider,
    [docEditorCommandConstants.addReminderCommand]: I.add_inline_reminder,
    [docEditorCommandConstants.metaShiftEnter]: I.meta_shift_enter,
    [docEditorCommandConstants.shiftCmdUp]: I.shift_cmd_up,
    [docEditorCommandConstants.shiftCmdDown]: I.shift_cmd_down,
    [docEditorCommandConstants.shiftCtrlUp]: I.shift_ctrl_up,
    [docEditorCommandConstants.shiftCtrlDown]: I.shift_ctrl_down,
    [docEditorCommandConstants.exitCommand]: I.exit,
    [docEditorCommandConstants.collapseCommand]: I.collapse,
    [docEditorCommandConstants.expandCommand]: I.expand,
    [docEditorCommandConstants.toggleTaskCommand]: I.turn_into_todo,
    [docEditorCommandConstants.minusCommand]: I.minus,
    [docEditorCommandConstants.commentCommand]: I.comment,
    [docEditorCommandConstants.switchHelpSlideBar]: I.open_helper,
    [docEditorCommandConstants.textAlignLeft]: I.text_align_left,
    [docEditorCommandConstants.textAlignCenter]: I.text_align_center,
    [docEditorCommandConstants.textAlignRight]: I.text_align_right,
    [docEditorCommandConstants.commandFind]: I.find,
    [docEditorCommandConstants.commandReplace]: I.replace,
    [docEditorCommandConstants.advancedSearchCommand]: I.advanced_search
  };
  function B(e) {
    return Object.values(k).find(n => !!I[n + e]) || "";
  }
  docEditorToolbarConstants.toolbarActionConstants.H1;
  I.turn_into_heading1;
  docEditorToolbarConstants.toolbarActionConstants.H2;
  I.turn_into_heading2;
  docEditorToolbarConstants.toolbarActionConstants.H3;
  I.turn_into_heading3;
  docEditorToolbarConstants.toolbarActionConstants.H4;
  I.turn_into_heading4;
  docEditorToolbarConstants.toolbarActionConstants.H5;
  I.turn_into_heading5;
  docEditorToolbarConstants.toolbarActionConstants.H6;
  I.turn_into_heading6;
  docEditorToolbarConstants.toolbarActionConstants.H7;
  I.turn_into_heading7;
  docEditorToolbarConstants.toolbarActionConstants.H8;
  I.turn_into_heading8;
  docEditorToolbarConstants.toolbarActionConstants.H9;
  I.turn_into_heading9;
  docEditorToolbarConstants.toolbarActionConstants.ORDERED_LIST;
  I.turn_into_ordered;
  docEditorToolbarConstants.toolbarActionConstants.UNORDERED_LIST;
  I.turn_into_bullet;
  docEditorToolbarConstants.toolbarActionConstants.CHECKLIST;
  I.turn_into_todo;
  docEditorToolbarConstants.toolbarActionConstants.CHECKBOX;
  I.turn_into_todo;
  docEditorToolbarConstants.toolbarActionConstants.TRANS_TASK;
  I.turn_task;
  docEditorToolbarConstants.toolbarActionConstants.CODE_LIST;
  I.turn_into_code;
  docEditorToolbarConstants.toolbarActionConstants.BLOCK_QUOTE;
  I.turn_into_quote_container;
  docEditorToolbarConstants.toolbarActionConstants.PLAIN_TEXT;
  I.turn_into_text;
  docEditorToolbarConstants.toolbarActionConstants.HYPER_LINK;
  I.add_hyper_link;
  docEditorToolbarConstants.toolbarActionConstants.SYNCED_SOURCE;
  I.turn_into_synced_source;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_IMAGE;
  I.add_image;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_TABLE;
  I.add_table;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_FILE;
  I.add_file;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_SEPARATOR;
  I.add_divider;
  docEditorToolbarConstants.toolbarActionConstants.MENTION_USER;
  I.add_inline_user;
  docEditorToolbarConstants.toolbarActionConstants.MENTION_CHAT;
  I.add_chat_card;
  docEditorToolbarConstants.toolbarActionConstants.MENTION_FILE;
  I.add_inline_mention_doc;
  docEditorToolbarConstants.toolbarActionConstants.MENTION;
  I.at;
  docEditorToolbarConstants.toolbarActionConstants.REMINDER;
  I.add_inline_reminder;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_REMINDER;
  I.add_inline_reminder;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_TASK;
  I.add_task;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_EQUATION;
  I.add_inline_equation;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_SHEET;
  I.add_sheet;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_BITABLE;
  I.add_bitable;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_MINDNOTE;
  I.add_mindmap;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_WHITEBOARD;
  I.add_whiteboard;
  docEditorToolbarConstants.toolbarActionConstants.INSERT_AGENDA;
  I.add_agenda;
  docEditorToolbarConstants.toolbarActionConstants.BOLD;
  I.bold;
  docEditorToolbarConstants.toolbarActionConstants.ITALIC;
  I.italic;
  docEditorToolbarConstants.toolbarActionConstants.UNDERLINE;
  I.underline;
  docEditorToolbarConstants.toolbarActionConstants.STRIKE_THROUGH;
  I.strikethrough;
  docEditorToolbarConstants.toolbarActionConstants.INLINE_CODE;
  I.inlineCode;
  docEditorToolbarConstants.toolbarActionConstants.HIGHLIGHT;
  I.highlight;
  docEditorToolbarConstants.toolbarActionConstants.INDENT_LEFT;
  I.untab;
  docEditorToolbarConstants.toolbarActionConstants.INDENT_RIGHT;
  I.tab;
  docEditorToolbarConstants.toolbarActionConstants.ALIGN_LEFT;
  I.text_align_left;
  docEditorToolbarConstants.toolbarActionConstants.ALIGN_CENTER;
  I.text_align_center;
  docEditorToolbarConstants.toolbarActionConstants.ALIGN_RIGHT;
  I.text_align_right;
  docEditorToolbarConstants.toolbarActionConstants.CALLOUT_BLOCK;
  I.add_callout;
  editorCommandConstants.commandTypes.COPY;
  editorCommandConstants.commandTypes.COPY;
  editorCommandConstants.commandTypes.CUT;
  editorCommandConstants.commandTypes.CUT;
  editorCommandConstants.commandTypes.TRANSLATE;
  editorCommandConstants.commandTypes.TRANSLATE;
  editorCommandConstants.commandTypes.COMMENT;
  editorCommandConstants.commandTypes.COMMENT;
  editorCommandConstants.commandTypes.CONTENT_REACTION;
  I.reaction;
  editorCommandConstants.commandTypes.DELETE;
  editorCommandConstants.commandTypes.DELETE;
  editorCommandConstants.commandTypes.COPY_LINK;
  editorCommandConstants.commandTypes.COPY_LINK;
  editorCommandConstants.commandTypes.FORWARD;
  I.send_to_chat;
  editorCommandConstants.commandTypes.HIGHLIGHT;
  editorCommandConstants.commandTypes.TEXT;
  I.turn_into_text;
  editorCommandConstants.commandTypes.H1;
  I.turn_into_heading1;
  editorCommandConstants.commandTypes.H2;
  I.turn_into_heading2;
  editorCommandConstants.commandTypes.H3;
  I.turn_into_heading3;
  editorCommandConstants.commandTypes.H4;
  I.turn_into_heading4;
  editorCommandConstants.commandTypes.H5;
  I.turn_into_heading5;
  editorCommandConstants.commandTypes.H6;
  I.turn_into_heading6;
  editorCommandConstants.commandTypes.H7;
  I.turn_into_heading7;
  editorCommandConstants.commandTypes.H8;
  I.turn_into_heading8;
  editorCommandConstants.commandTypes.H9;
  I.turn_into_heading9;
  editorCommandConstants.commandTypes.HN;
  editorCommandConstants.commandTypes.SEPARATOR;
  editorCommandConstants.commandTypes.CHECKBOX;
  I.turn_into_todo;
  editorCommandConstants.commandTypes.ORDERED_LIST;
  I.turn_into_ordered;
  editorCommandConstants.commandTypes.UNORDERED_LIST;
  I.turn_into_bullet;
  editorCommandConstants.commandTypes.SYNCED_SOURCE;
  I.turn_into_synced_source;
  editorCommandConstants.commandTypes.CODE_BLOCK;
  I.turn_into_code;
  editorCommandConstants.commandTypes.BLOCK_QUOTE;
  I.turn_into_quote_container;
  editorCommandConstants.commandTypes.BOLD;
  I.bold;
  editorCommandConstants.commandTypes.ITALIC;
  I.italic;
  editorCommandConstants.commandTypes.UNDERLINE;
  I.underline;
  editorCommandConstants.commandTypes.INLINE_CODE;
  I.inlineCode;
  editorCommandConstants.commandTypes.STRIKE_THROUGH;
  I.strikethrough;
  editorCommandConstants.commandTypes.INDENT_LEFT;
  I.tab;
  editorCommandConstants.commandTypes.INDENT_RIGHT;
  I.untab;
  editorCommandConstants.commandTypes.ALIGN_LEFT;
  I.text_align_left;
  editorCommandConstants.commandTypes.ALIGN_CENTER;
  I.text_align_center;
  editorCommandConstants.commandTypes.ALIGN_RIGHT;
  I.text_align_right;
  editorCommandConstants.commandTypes.BLOCK_ALIGN_LEFT;
  uiActionConstants.actionIdentifiers.alignLeft;
  editorCommandConstants.commandTypes.BLOCK_ALIGN_CENTER;
  uiActionConstants.actionIdentifiers.alignCenter;
  editorCommandConstants.commandTypes.BLOCK_ALIGN_RIGHT;
  uiActionConstants.actionIdentifiers.alignRight;
  editorCommandConstants.commandTypes.CAPTION;
  uiActionConstants.actionIdentifiers.caption;
  editorCommandConstants.commandTypes.START_TIME;
  uiActionConstants.actionIdentifiers.active_agenda_item;
  editorCommandConstants.commandTypes.PAUSE_TIME;
  uiActionConstants.actionIdentifiers.pause_agenda_time;
  editorCommandConstants.commandTypes.ADD_TIME;
  uiActionConstants.actionIdentifiers.add_agenda_item_time;
  editorCommandConstants.commandTypes.EDIT_TIME;
  uiActionConstants.actionIdentifiers.edit_agenda_item_time;
  editorCommandConstants.commandTypes.NEW_LINE_BELOW;
  uiActionConstants.actionIdentifiers.insertBlankBlock;
  editorCommandConstants.commandTypes.EDIT_IMAGE;
  uiActionConstants.actionIdentifiers.pic_edit_entrance;
  editorCommandConstants.commandTypes.SHARE_TEXT;
  uiActionConstants.actionIdentifiers.share_text_link;
  editorCommandConstants.commandTypes.COMMENT;
  editorCommandConstants.commandTypes.CONTENT_REACTION;
  editorCommandConstants.commandTypes.EDIT_IMAGE;
  let D = (e, n, r, o) => {
    let {
      actionType: i,
      blocks: u,
      source: d,
      actionObject: E,
      click: m = uiComponentActionTypes.actionTypes.block_action,
      sendImmediately: b = true,
      actionValue: v,
      target: T,
      selectionAPI: C,
      category: k,
      mark: R,
      isSubPanel: y,
      triggerType: O
    } = e;
    let S = `ccm_doc_${d}_click`;
    let A = {
      target: T,
      action_type: function (e) {
        if (typeof e == "string") {
          let n = B(e);
          if (n) {
            return n + e;
          }
        }
        if (isPlainObjectUtil.isPlainObject(e)) {
          for (let n of Object.keys(e)) {
            let e = B(n);
            if (e) {
              return e + n;
            }
            if (I[n]) {
              return n;
            }
          }
        }
        return e;
      }(i),
      action_object: E || docxEditorBlockMetadataUtils.getSelectionScopeType(C),
      click: m,
      object_block_data: r
    };
    if (o) {
      Object.assign(A, o);
    }
    if (v) {
      A.action_value = v;
    }
    if (k) {
      A.category = k;
    }
    if (O) {
      A.trigger_type = O;
    }
    if (y !== undefined) {
      A.is_sub_panel = y ? "true" : "false";
    }
    if (d === uiComponentActionTypes.componentTypes.slash_panel) {
      let e = u[0];
      if (editorTextBlockUtilities.isEditorInstance(e)) {
        var L;
        let n = R ? editorZoneRangeUtils.createEditorRange(e, R).toPosition() : (L = e.model.getSelection()) === null || L === undefined ? undefined : L.toPosition();
        let r = e && e.model && n && e.model.zoneState.getModelText().slice(n.start + 1, n.start + n.len) || "";
        A.is_search_result = r ? "true" : "false";
      } else {
        A.is_search_result = "false";
      }
    }
    if (!T && docBlockConstants.panelViewIds[A.action_type]) {
      A.target = docBlockConstants.panelViewIds[A.action_type];
    }
    docxFeatureFlags.isDocsMoreEvents();
    if (b) {
      e.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick(S, n, A);
      return null;
    } else {
      return new eventCollectorClass.EventCollector({
        eventName: S,
        sendEventType: eventCollectorClass.eventTypeEnum.Click,
        blockView: n,
        extraParams: A,
        blockmanager: e.blockManager
      });
    }
  };
  let w = function (e, n, r = false) {
    let o = [];
    let i = [];
    for (let c of e) {
      try {
        let {
          type: e,
          children: a
        } = n.getBlockModelByBlockId(c);
        if ([docBlockTypeConstants.blockTypeConstants.CHART_REFER, docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED, docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM].includes(e)) {
          i.push(c);
          continue;
        }
        o.push(c);
        if (r && e === docBlockTypeConstants.blockTypeConstants.VIEW) {
          o.push(a == null ? undefined : a[0]?.id);
        }
      } catch (e) {}
    }
    return {
      normalBlockIds: o.filter(Boolean),
      chartBlockIds: i.filter(Boolean)
    };
  };
  let M = async (e, n, r, o) => {
    if (!(e == null ? undefined : e.length)) {
      return;
    }
    let l = {
      record_id: "",
      block_type: "",
      sub_block_type: ""
    };
    let c = [];
    for await (let r of e) {
      let e = await docxEditorBlockMetadataUtils.getBlockInfoWithChartType(r, n);
      if (!e.record_id) {
        continue;
      }
      let o = docxEditorBlockMetadataUtils.getBlockStructureInfo(e.parentBlockId, n);
      if (!l.record_id) {
        l = throttledPathFilterStringify.throttledPathStr(o, ["record_id", "block_type", "sub_block_type"]);
      }
      c.push(docxEditorBlockMetadataUtils.formatBlockObject(e));
    }
    return D(r, l, c, o);
  };
  let P = (e, n, r, o) => {
    let l = {
      record_id: "",
      block_type: "",
      sub_block_type: ""
    };
    let c = [];
    for (let r of e) {
      let e = docxEditorBlockMetadataUtils.getBlockStructureInfo(r, n);
      if (!e.record_id) {
        continue;
      }
      let o = docxEditorBlockMetadataUtils.getBlockStructureInfo(e.parentBlockId, n);
      if (!l.record_id) {
        l = throttledPathFilterStringify.throttledPathStr(o, ["record_id", "block_type", "sub_block_type"]);
      }
      c.push(docxEditorBlockMetadataUtils.formatBlockObject(e));
    }
    return D(r, l, c, o);
  };
  let F = safeFunctionWrapper.createSafeCall((e, n) => {
    let {
      blocks: r,
      blockManager: o
    } = e;
    let {
      normalBlockIds: i,
      chartBlockIds: l
    } = w(r.map(e => e.id), o);
    M(l, o, e, n);
    return P(i, o, e, n);
  });
  let x = safeFunctionWrapper.createSafeCall(e => {
    let {
      blockId: n,
      subClick: r,
      blockManager: o
    } = e;
    o.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(n, o), {
      click: "open_slash_panel",
      sub_click: r
    });
  });
  require.d(exports, {
    blockAddActionMap: function () {
      return L;
    },
    alignActionMap: function () {
      return S;
    },
    collectBlockEvent: function () {
      return F;
    },
    uiActionTypes: function () {
      return uiComponentActionTypes.actionTypes;
    },
    uiComponentTypes: function () {
      return uiComponentActionTypes.componentTypes;
    },
    blockTransformMap: function () {
      return A;
    },
    commandActionMap: function () {
      return N;
    },
    collectSlashClick: function () {
      return x;
    },
    classifyBlocks: function () {
      return w;
    },
    layoutHeaderMap: function () {
      return O;
    },
    layoutSelectionMap: function () {
      return y;
    },
    componentToolbarMap: function () {
      return R;
    },
    actionConstants: function () {
      return I;
    }
  });
}