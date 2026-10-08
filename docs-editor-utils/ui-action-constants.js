// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cj' to 'actionKeyMap'
// - Renamed export 'yW' to 'actionIdentifiers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 824909
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {}).comment = "comment";
  o.reaction = "reaction";
  o.alignLeft = "align_left";
  o.alignRight = "align_right";
  o.alignCenter = "align_center";
  o.codeCopy = "code_copy";
  o.codeLanguageSwitch = "code_language_switch";
  o.codeAutoWrap = "code_auto_wrap";
  o.fontColor = "text_color";
  o.backgroundColor = "background_color";
  o.clearColor = "clear_color";
  o.fullScreen = "full_screen";
  o.fileDownload = "file_donwload";
  o.refreshPage = "refresh_page";
  o.openPage = "open_page";
  o.borderColor = "border_color";
  o.randomColor = "random_color";
  o.gridDownload = "grid_download";
  o.gridEdit = "grid_edit";
  o.openJira = "open_jira";
  o.syncJira = "synchronize_jira";
  o.threeStateSwitch = "three_state_switch";
  o.boardZoomIn = "board_zoom_in";
  o.boardZoomOut = "board_zoom_out";
  o.edit = "edit";
  o.sheetChartUpdateData = "sheet_chart_update_data";
  o.sheetChartOpenSource = "sheet_chart_open_source";
  o.sheetChartDownload = "sheet_chart_download";
  o.sheetChartDisassociat = "sheet_chart_disassociat";
  o.caption = "caption";
  o.boardClickEditCaption = "board_click_edit_caption";
  o.add_agenda_item_time = "add_agenda_item_time";
  o.edit_agenda_item_time = "edit_agenda_item_time";
  o.active_agenda_item = "active_agenda_item";
  o.pause_agenda_time = "pause_agenda_item";
  o.insertBlankBlock = "insert_blank_block";
  o.pic_edit_entrance = "pic_edit_entrance";
  o.share_text_link = "share_to_chat";
  let i = o;
  let l = {
    comment: i.comment,
    reaction: i.reaction,
    refresh: i.refreshPage,
    download: i.gridDownload,
    edit: i.gridEdit,
    fullscreen: i.fullScreen,
    redirect: i.openPage,
    "align left": i.alignLeft,
    "align center": i.alignCenter,
    "align right": i.alignRight,
    threeStateSwitch: i.threeStateSwitch,
    open_jira: i.openJira,
    synchronize_jira: i.syncJira,
    boardZoomIn: i.boardZoomIn,
    boardZoomOut: i.boardZoomOut,
    refreshData: i.sheetChartUpdateData,
    openSource: i.sheetChartOpenSource,
    downloadImage: i.sheetChartDownload,
    ToStatic: i.sheetChartDisassociat,
    caption: i.caption,
    whiteboardCaption: i.boardClickEditCaption
  };
  i.alignLeft;
  i.alignCenter;
  i.alignRight;
  require.d(exports, {
    actionKeyMap: function () {
      return l;
    },
    actionIdentifiers: function () {
      return i;
    }
  });
}