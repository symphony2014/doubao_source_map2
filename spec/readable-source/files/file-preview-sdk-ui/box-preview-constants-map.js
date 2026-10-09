// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C9' to 'triggerTypes'
// - Renamed export 'F6' to 'actionTypes'
// - Renamed export 'HD' to 'actionIconMap'
// - Renamed export 'Ms' to 'lifecycleEvents'
// - Renamed export 'dy' to 'triggerEvents'
// - Renamed export 'k2' to 'contextActions'
// - Renamed export 'l' to 'debugEventTypes'
// - Renamed export 'pO' to 'errorEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 485900
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var boxPreviewConstants = require("box-preview-constants") /*id: 434952*/;
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  let l = {
    PDF_PRINT: "PDF_PRINT",
    PDF_TO_PREV_PAGE: "PDF_TO_PREV_PAGE",
    PDF_TO_NEXT_PAGE: "PDF_TO_NEXT_PAGE",
    PDF_JUMP_TO_PAGE: "PDF_JUMP_TO_PAGE",
    PDF_ZOOM_IN: "PDF_ZOOM_IN",
    PDF_ZOOM_OUT: "PDF_ZOOM_OUT",
    IMAGE_ZOOM_IN: "IMAGE_ZOOM_IN",
    IMAGE_ZOOM_OUT: "IMAGE_ZOOM_OUT",
    MEDIA_PLAY: "MEDIA_PLAY",
    MEDIA_PAUSE: "MEDIA_PAUSE",
    MEDIA_SET_CURRENT_TIME: "MEDIA_SET_CURRENT_TIME",
    MEDIA_SET_CURRENT_VOLUME: "MEDIA_SET_CURRENT_VOLUME",
    SHEET_TO_TAB: "SHEET_TO_TAB",
    WPS_JUMP_TO_PAGE: "WPS_JUMP_TO_PAGE",
    WPS_SAVE: "WPS_SAVE",
    WPS_TAB_TO_INDEX: "WPS_TAB_TO_INDEX",
    WPS_PRINT: "WPS_PRINT"
  };
  let a = {
    [boxPreviewEventConstants.previewActionConstants.DOWNLOAD_START]: "file_save",
    [boxPreviewEventConstants.previewActionConstants.SAVE_TO_DRIVE_START]: "save_to_drive",
    [boxPreviewEventConstants.previewActionConstants.VIEW_IN_DRIVE]: "view_online",
    [boxPreviewEventConstants.previewActionConstants.OPEN_LOCALLY]: "file_open_folder",
    [boxPreviewEventConstants.previewActionConstants.SHARE]: "share",
    [boxPreviewEventConstants.previewActionConstants.CONVERT_TO_DOC]: "convert_to_online",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_PLAY]: "media_play",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_PAUSE]: "media_pause",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_RATE_CHANGE]: "media_speed",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_PROGRESS_CHANGE]: "media_progress_bar",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_FULLSCREEN]: "media_fullscreen",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_EXIT_FULLSCREEN]: "media_fullscreen",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_DEFINITION_CHANGE]: "media_quanlity",
    [boxPreviewEventConstants.previewActionConstants.MEDIA_VOLUME_CHANGE]: "media_volume"
  };
  let u = {
    CLICK: "click",
    AUTO: "auto"
  };
  let d = Object.values(boxPreviewEventConstants.previewEventConstants).filter(e => e.startsWith(boxPreviewConstants.boxPreviewTrigger));
  let c = [boxPreviewEventConstants.previewEventConstants.SAVE_TO_DRIVE_FAILED, boxPreviewEventConstants.previewEventConstants.WPS_COMMON_ERROR, boxPreviewEventConstants.previewEventConstants.MULTI_ERROR];
  let h = {
    SET_INFO: `${boxPreviewConstants.debugInfo}_SET_INFO`,
    RESET_LIST: `${boxPreviewConstants.debugInfo}_RESET_LIST`,
    REMOVE_INFO: `${boxPreviewConstants.debugInfo}_REMOVE_INFO`,
    SET_TRIGGER_AREA_POSITION: `${boxPreviewConstants.debugInfo}_SET_TRIGGER_AREA_POSITION`
  };
  (n = {}).LOAD_START = "loadStart";
  n.FIRST_SCREEN_PAINTED = "firstScreenPainted";
  n.ASYNC_ACTION = "asyncAction";
  n.SET_ACTION_PERMISSION = "setActionPermission";
  n.SHORTCUT_RENDERED = "shortcutRendered";
  let p = n;
  (o = {}).COPY = "copy";
  o.SEARCH = "search";
  o.CONTEXTMENU = "contextmenu";
  o.PRINT = "print";
  let _ = o;
  require.d(exports, {
    triggerTypes: function () {
      return u;
    },
    actionTypes: function () {
      return l;
    },
    actionIconMap: function () {
      return a;
    },
    lifecycleEvents: function () {
      return p;
    },
    triggerEvents: function () {
      return d;
    },
    contextActions: function () {
      return _;
    },
    debugEventTypes: function () {
      return h;
    },
    errorEvents: function () {
      return c;
    }
  });
}