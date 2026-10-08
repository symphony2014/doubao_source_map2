// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fh' to 'previewActionConstants'
// - Renamed export 'jf' to 'previewAreaConstants'
// - Renamed export 'mP' to 'previewEventConstants'
// - Renamed export 'qi' to 'pdfEventConstants'
// - Renamed export 'uj' to 'toggleStateConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41268.462a5cda.js
         * chunkId: 41268
         * moduleId: 654234
         */
module.exports = function (module, exports, require) {
  var boxPreviewConstants = require("box-preview-constants") /*id: 434952*/;
  let i = {
    OPERATION: `${boxPreviewConstants.boxPreview}_OPERATION`,
    FILE_LOAD_START: `${boxPreviewConstants.boxPreview}_FILE_LOAD_START`,
    GET_PREVIEW_INFO_ERROR: `${boxPreviewConstants.boxPreview}_GET_PREVIEW_INFO_ERROR`,
    NOT_PREVIEWABLE_ERROR: `${boxPreviewConstants.boxPreview}_NOT_PREVIEWABLE_ERROR`,
    FILE_INFO_CHANGED: `${boxPreviewConstants.boxPreview}_FILE_INFO_CHANGED`,
    FILE_PREVIEW_FETCHED: `${boxPreviewConstants.boxPreview}_FILE_PREVIEW_FETCHED`,
    RENDER_TEMPLATE: `${boxPreviewConstants.boxPreview}_RENDER_TEMPLATE`,
    FILE_RENDER_START: `${boxPreviewConstants.boxPreview}_FILE_RENDER_START`,
    FILE_LOAD_FINISH: `${boxPreviewConstants.boxPreview}_FILE_LOAD_FINISH`,
    IS_LOADING_END: `${boxPreviewConstants.boxPreview}_IS_LOADING_END`,
    SAVE_TO_DRIVE_SUCCESS: `${boxPreviewConstants.boxPreview}_SAVE_TO_DRIVE_SUCCESS`,
    SAVE_TO_DRIVE_FAILED: `${boxPreviewConstants.boxPreview}_SAVE_TO_DRIVE_FAILED`,
    STORAGE_QUOTA_EXHAUSTED: `${boxPreviewConstants.boxPreview}_STORAGE_QUOTA_EXHAUSTED`,
    MULTI_GEO_MIGRATION_FORBIDDEN: `${boxPreviewConstants.boxPreview}_MULTI_GEO_MIGRATION_FORBIDDEN`,
    PDF_PREVIEW_IS_ON: `${boxPreviewConstants.boxPreview}_PDF_PREVIEW_IS_ON`,
    PDF_PREVIEW_IS_OFF: `${boxPreviewConstants.boxPreview}_PDF_PREVIEW_IS_OFF`,
    PDF_PRINT_ERROR: `${boxPreviewConstants.boxPreview}_PDF_PRINT_ERROR`,
    PDF_PAGE_NUMBER_UPDATED: `${boxPreviewConstants.boxPreview}_PDF_PAGE_NUMBER_UPDATED`,
    PDF_PAGE_NUMBER_TOTAL: `${boxPreviewConstants.boxPreview}_PDF_PAGE_NUMBER_TOTAL`,
    PAGE_SCROLL_POSITION: `${boxPreviewConstants.boxPreview}_PAGE_SCROLL_POSITION`,
    SHEET_TAB_INDEX_UPDATED: `${boxPreviewConstants.boxPreview}_SHEET_TAB_INDEX_UPDATED`,
    DOWNLOAD_SUCCESS: `${boxPreviewConstants.boxPreview}_DOWNLOAD_SUCCESS`,
    DOWNLOAD_FAILED: `${boxPreviewConstants.boxPreview}_DOWNLOAD_FAILED`,
    DOWNLOAD_PROGRESS: `${boxPreviewConstants.boxPreview}_DOWNLOAD_PROGRESS`,
    COMPONENT_WILLUNMOUNT: `${boxPreviewConstants.boxPreview}_COMPONENT_WILLUNMOUNT`,
    MEDIA_CAN_PLAY: `${boxPreviewConstants.boxPreview}_MEDIA_CAN_PLAY`,
    MEDIA_TIME_UPDATED: `${boxPreviewConstants.boxPreview}_MEDIA_TIME_UPDATED`,
    FIRST_MEANINGFUL_PAINTED: `${boxPreviewConstants.boxPreview}_FIRST_MEANINGFUL_PAINTED`,
    FIND_BAR_STATE_UPDATED: `${boxPreviewConstants.boxPreview}_FIND_BAR_STATE_UPDATED`,
    FIND_FUNCTION_AVAILABLE: `${boxPreviewConstants.boxPreview}_FIND_FUNCTION_AVAILABLE`,
    FIND_FUNCTION_NOT_AVAILABLE: `${boxPreviewConstants.boxPreview}_FIND_FUNCTION_NOT_AVAILABLE`,
    PREVIEW_ERROR: `${boxPreviewConstants.boxPreview}_PREVIEW_ERROR`,
    MEDIA_PLAY_COST_TIME: `${boxPreviewConstants.boxPreview}_MEDIA_PLAY_COST_TIME`,
    POST_VC_FOLLOW_STATE: `${boxPreviewConstants.boxPreview}_POST_VC_FOLLOW_STATE`,
    VC_FOLLOW_FINISHED: `${boxPreviewConstants.boxPreview}_VC_FOLLOW_FINISHED`,
    WPS_PLAY_MODE_ENABLE_CHANGE: `${boxPreviewConstants.boxPreview}_WPS_PLAY_MODE_ENABLE_CHANGE`,
    WPS_ENTER_PLAY_MODE: `${boxPreviewConstants.boxPreview}_WPS_ENTER_PLAY_MODE`,
    WPS_PAGE_NUMBER_UPDATED: `${boxPreviewConstants.boxPreview}_WPS_PAGE_NUMBER_UPDATED`,
    WPS_SAVED_STATUS_CHANGED: `${boxPreviewConstants.boxPreview}_WPS_SAVED_STATUS_CHANGED`,
    WPS_SAVED_RESULT: `${boxPreviewConstants.boxPreview}_WPS_SAVED_RESULT`,
    WPS_TAB_INDEX_UPDATED: `${boxPreviewConstants.boxPreview}_WPS_TAB_INDEX_UPDATED`,
    WPS_IS_ON: `${boxPreviewConstants.boxPreview}_WPS_IS_ON`,
    WPS_IS_OFF: `${boxPreviewConstants.boxPreview}_WPS_IS_OFF`,
    WPS_COMMON_ERROR: `${boxPreviewConstants.boxPreview}_WPS_COMMON_ERROR`,
    WPS_IFRAME_LOAD_START: `${boxPreviewConstants.boxPreview}_WPS_IFRAME_LOAD_START`,
    WPS_SLIDES_CHANGED: `${boxPreviewConstants.boxPreview}_WPS_SLIDES_CHANGED`,
    MULTI_ERROR: `${boxPreviewConstants.boxPreview}_MULTI_ERROR`,
    EXIT_FULLSCREEN: `${boxPreviewConstants.boxPreview}_EXIT_FULLSCREEN`,
    RESOURCE_LOADED: `${boxPreviewConstants.boxPreview}_RESOURCE_LOADED`,
    PDF_OUTLINE_SETTED: `${boxPreviewConstants.boxPreview}_PDF_OUTLINE_SETTED`,
    FAST_PDF_STAGE: `${boxPreviewConstants.boxPreview}_FAST_PDF_STAGE`,
    ACTION_PERMISSION_CHANGED: `${boxPreviewConstants.boxPreview}_ACTION_PERMISSION_CHANGED`,
    COPY_SECRET_CHANGED: `${boxPreviewConstants.boxPreview}_COPY_SECRET_CHANGED`,
    CCM_ABBR_MENTION_SHOWED: `${boxPreviewConstants.boxPreview}_CCM_ABBR_MENTION_SHOWED`,
    SHORTCUT_RENDERED: `${boxPreviewConstants.boxPreview}_SHORTCUT_RENDERED`,
    WPS_HIDDEN_TIME: `${boxPreviewConstants.boxPreview}_WPS_HIDDEN_TIME`,
    TRIGGER_DOWNLOAD: `${boxPreviewConstants.boxPreviewTrigger}_DOWNLOAD`,
    TRIGGER_ABORT_DOWNLOAD: `${boxPreviewConstants.boxPreviewTrigger}_TRIGGER_ABORT_DOWNLOAD`,
    TRIGGER_FINDBAR_OPEN: `${boxPreviewConstants.boxPreviewTrigger}_FINDBAR_OPEN`,
    TRIGGER_FINDBAR_CLOSE: `${boxPreviewConstants.boxPreviewTrigger}_FINDBAR_CLOSE`,
    TRIGGER_FINDBAR_TOGGLE: `${boxPreviewConstants.boxPreviewTrigger}_FINDBAR_TOGGLE`,
    TRIGGER_PDF_ACTION: `${boxPreviewConstants.boxPreviewTrigger}_PDF_ACTION`,
    TRIGGER_SHEET_ACTION: `${boxPreviewConstants.boxPreviewTrigger}_SHEET_ACTION`,
    TRIGGER_IMAGE_ACTION: `${boxPreviewConstants.boxPreviewTrigger}_ACTION_ACTION`,
    TRIGGER_MEDIA_ACTION: `${boxPreviewConstants.boxPreviewTrigger}_MEDIA_ACTION`,
    TRIGGER_WPS_ACTION: `${boxPreviewConstants.boxPreviewTrigger}_WPS_ACTION`,
    RECEIVE_VC_FOLLOW_STATE: `${boxPreviewConstants.boxPreviewTrigger}_RECEIVE_VC_FOLLOW_STATE`,
    TRIGGER_FULLSCREEN: `${boxPreviewConstants.boxPreviewTrigger}_FULLSCREEN`,
    TRIGGER_EXIT_FULLSCREEN: `${boxPreviewConstants.boxPreviewTrigger}_EXIT_FULLSCREEN`,
    TRIGGER_FLOATING_NOTICE_ACTION: `${boxPreviewConstants.boxPreviewTrigger}_FLOATING_NOTICE_ACTION`,
    TRIGGER_CLEAR_PDF_CACHE: `${boxPreviewConstants.boxPreviewTrigger}_TRIGGER_CLEAR_PDF_CACHE`,
    TRIGGER_COPY: `${boxPreviewConstants.boxPreviewTrigger}_COPY`,
    LARK_DOC_UPDATE_EDIT_STATUS: `${boxPreviewConstants.boxPreview}_LARK_DOC_UPDATE_EDIT_STATUS`,
    LARK_DOC_UPDATE_LOADED_STATUS: `${boxPreviewConstants.boxPreview}_LARK_DOC_UPDATE_LOADED_STATUS`,
    LARK_DOC_EDIT_TYPE_CHANGE: `${boxPreviewConstants.boxPreview}_LARK_DOC_EDIT_TYPE_CHANGE`,
    LARK_DOC_PLAY_MODE_ENABLE_CHANGE: `${boxPreviewConstants.boxPreview}_LARK_DOC_PLAY_MODE_ENABLE_CHANGE`,
    LARK_DOC_ENTER_PLAY_MODE: `${boxPreviewConstants.boxPreview}_LARK_DOC_ENTER_PLAY_MODE`,
    COPY_FULL_SHEET: `${boxPreviewConstants.boxPreview}_COPY_FULL_SHEET`
  };
  let o = {
    JUMP_TO_PAGE: `${boxPreviewConstants.fastPdf}_JUMP_TO_PAGE`,
    ZOOM_IN: `${boxPreviewConstants.fastPdf}_ZOOM_IN`,
    ZOOM_OUT: `${boxPreviewConstants.fastPdf}_ZOOM_OUTE`,
    NEXT_PAGE: `${boxPreviewConstants.fastPdf}_NEXT_PAGE`,
    PREV_PAGE: `${boxPreviewConstants.fastPdf}_PREV_PAGE`,
    ADD_COMMENT: `${boxPreviewConstants.fastPdf}_ADD_COMMENT`,
    DELETE_COMMENT: `${boxPreviewConstants.fastPdf}_DELETE_COMMENT`,
    ACTIVE_COMMENT: `${boxPreviewConstants.fastPdf}_ACTIVE_COMMENT`,
    INIT_COMMENTS: `${boxPreviewConstants.fastPdf}_INIT_COMMENTS`,
    FAST_PDF_VC_FOLLOW_CHANGED: `${boxPreviewConstants.fastPdf}_VC_FOLLOW_CHANGED`,
    PAGE_IMAGE_LOADED: `${boxPreviewConstants.fastPdf}_PAGE_IMAGE_LOADED`,
    FIND_START: `${boxPreviewConstants.fastPdf}_FIND_START`,
    FIND_INDEX_CHANGED: `${boxPreviewConstants.fastPdf}_FIND_INDEX_CHANGED`,
    UPDATE_PAGE_SIZE: `${boxPreviewConstants.fastPdf}_UPDATE_PAGE_SIZE`
  };
  let l = {
    CLOSE_BUTTON_CLICK: "CLOSE_BUTTON_CLICK",
    SAVE_TO_DRIVE_START: "SAVE_TO_DRIVE_START",
    VIEW_IN_DRIVE: "VIEW_IN_DRIVE",
    DOWNLOAD_START: "DOWNLOAD_START",
    OPEN_LOCALLY: "OPEN_LOCALLY",
    SHARE: "SHARE",
    CONVERT_TO_DOC: "CONVERT_TO_DOC",
    RETRY: "RETRY",
    FIND_START: "FIND_START",
    FIND_TO_PREV: "FIND_TO_PREV",
    FIND_TO_NEXT: "FIND_TO_NEXT",
    FIND_BAR_OPEN: "FIND_BAR_OPEN",
    FIND_BAR_CLOSE: "FIND_BAR_CLOSE",
    IMAGE_ZOOMIN: "IMAGE_ZOOMIN",
    IMAGE_ZOOMOUT: "IMAGE_ZOOMOUT",
    IMAGE_ROTATE: "IMAGE_ROTATE",
    IMAGE_ORIGINAL_SIZE: "IMAGE_ORIGINAL_SIZE",
    IMAGE_INITIAL_SIZE: "IMAGE_INITIAL_SIZE",
    MEDIA_PLAY: "MEDIA_PLAY",
    MEDIA_PAUSE: "MEDIA_PAUSE",
    MEDIA_FAST_FORWARD: "MEDIA_FAST_FORWARD",
    MEDIA_FAST_REWIND: "MEDIA_FAST_REWIND",
    MEDIA_PROGRESS_CHANGE: "MEDIA_PROGRESS_CHANGE",
    MEDIA_RATE_CHANGE: "MEDIA_RATE_CHANGE",
    MEDIA_TURN_UP: "MEDIA_TURN_UP",
    MEDIA_TURN_DOWN: "MEDIA_TURN_DOWN",
    MEDIA_VOLUME_CHANGE: "MEDIA_VOLUME_CHANGE",
    MEDIA_UNMUTE: "MEDIA_UNMUTE",
    MEDIA_MUTE: "MEDIA_MUTE",
    MEDIA_FULLSCREEN: "MEDIA_FULLSCREEN",
    MEDIA_EXIT_FULLSCREEN: "MEDIA_EXIT_FULLSCREEN",
    MEDIA_DEFINITION_CHANGE: "MEDIA_DEFINITION_CHANGE",
    PDF_CANCEL_PRINT: "PDF_CANCEL_PRINT",
    PDF_SIDEBAR_SHOW: "PDF_SIDEBAR_SHOW",
    PDF_SIDEBAR_HIDE: "PDF_SIDEBAR_HIDE",
    PDF_PRINT: "PDF_PRINT",
    PDF_FULLSCREEN: "PDF_FULLSCREEN",
    PDF_EXIT_FULLSCREEN: "PDF_EXIT_FULLSCREEN",
    PDF_ZOOMIN: "PDF_ZOOMIN",
    PDF_ZOOMOUT: "PDF_ZOOMOUT",
    PDF_NEXT_PAGE: "PDF_NEXT_PAGE",
    PDF_PREV_PAGE: "PDF_PREV_PAGE",
    PDF_SET_PAGE_NUMBER: "PDF_SET_PAGE_NUMBER",
    PDF_ENTER_PRESENTATION_MODE: "PDF_ENTER_PRESENTATION_MODE",
    PDF_LEAVE_PRESENTATION_MODE: "PDF_LEAVE_PRESENTATION_MODE",
    PDF_TOPBAR_CLICK: "PDF_TOPBAR_CLICK",
    ARCHIVE_FOLDER_CLICKED: "ARCHIVE_FOLDER_CLICKED",
    ARCHIVE_FILE_CLICKED: "ARCHIVE_FILE_CLICKED",
    LINK_CLICKED: "LINK_CLICKED",
    FLOATING_NOTICE_SHOW: "FLOATING_NOTICE_SHOW",
    FLOATING_NOTICE_HIDE: "FLOATING_NOTICE_HIDE",
    FLOATING_NOTICE_CLICKED: "FLOATING_NOTICE_CLICKED",
    COPY: "COPY",
    PRINT: "PRINT",
    WPS_PRINT: "WPS_PRINT"
  };
  let _ = {
    ON: "on",
    OFF: "off"
  };
  let a = {
    HEADER: "header",
    TOOLBAR: "toolbar",
    NOT_PREVIEWABLE_COMPONENT: "not_previewable_component",
    PREVIEW_COMPONENT: "preview_component"
  };
  require.d(exports, {
    previewActionConstants: function () {
      return l;
    },
    previewAreaConstants: function () {
      return a;
    },
    previewEventConstants: function () {
      return i;
    },
    pdfEventConstants: function () {
      return o;
    },
    toggleStateConstants: function () {
      return _;
    }
  });
}