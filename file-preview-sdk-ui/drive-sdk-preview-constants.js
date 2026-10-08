// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BD' to 'evtDevPerfFinish'
// - Renamed export 'Bq' to 'fileTypeCreationMap'
// - Renamed export 'CN' to 'evtFastPdfStageDev'
// - Renamed export 'De' to 'previewErrorMap'
// - Renamed export 'Ec' to 'evtClickOpenMention'
// - Renamed export 'G1' to 'previewLoadStages'
// - Renamed export 'I2' to 'evtClientDownload'
// - Renamed export 'IB' to 'previewMetrics'
// - Renamed export 'If' to 'evtPreviewPv'
// - Renamed export 'JD' to 'evtDrivePageClick'
// - Renamed export 'Lj' to 'evtMagicshareClick'
// - Renamed export 'NS' to 'previewErrorCodes'
// - Renamed export 'OT' to 'evtCommonError'
// - Renamed export 'P1' to 'evtMagicshareView'
// - Renamed export 'PB' to 'evtToggleAttribute'
// - Renamed export 'QC' to 'evtLinkClicked'
// - Renamed export 'YA' to 'evtDownloadBegin'
// - Renamed export 'YY' to 'evtOutsideToggle'
// - Renamed export '_5' to 'evtSdkFileOpen'
// - Renamed export 'e5' to 'evtPreviewReload'
// - Renamed export 'fP' to 'evtMediaPlayCost'
// - Renamed export 'gN' to 'evtPreviewError'
// - Renamed export 'gv' to 'evtDriveEditClick'
// - Renamed export 'jw' to 'evtDocsTopbarView'
// - Renamed export 'lz' to 'evtWpsTabHeartbeat'
// - Renamed export 'p0' to 'evtDrivePageView'
// - Renamed export 'rl' to 'evtMentionDownload'
// - Renamed export 'sY' to 'evtDevPerfStages'
// - Renamed export 'vz' to 'evtEnterPres'
// - Renamed export 'yo' to 'evtDocsTopbarClick'
// - Renamed export 'yy' to 'evtAbbrMentionShow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 395351
         */
module.exports = function (module, exports, require) {
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  let o = "toggle_attribute";
  let r = "preview_pv";
  let s = "outside_toggle_attribute";
  let l = "dev_performance_drive_open_finish";
  let a = "dev_performance_drive_open_stages";
  let u = "drive_sdk_file_open";
  let d = "click_open_mentioned_obj";
  let c = "mention_download";
  let h = "link_clicked";
  let p = "ccm_space_docs_topbar_click";
  let _ = "ccm_space_docs_topbar_view";
  let f = "drive_enter_presentation";
  let E = "preview_error";
  let m = "media_play_cost_time";
  let v = "common_error";
  let g = "preview_reload_i18n";
  let P = "client_file_download";
  let I = "ccm_drive_page_view";
  let D = "ccm_drive_page_click";
  let C = "ccm_drive_edit_click";
  let T = "ccm_drive_download_begin_click";
  let F = "ccm_drive_magicshare_fullscreen_reminder_view";
  let w = "ccm_drive_magicshare_fullscreen_reminder_click";
  let b = "ccm_drive_fast_pdf_stage_dev";
  let R = "ccm_abbr_mention_showed";
  let O = "ccm_wps_tab_heartbeat_view";
  let y = {
    LoadStart: "file_load_start",
    RequestFileInfo: "request_file_info",
    RequestPreviewUrl: "request_preview_url",
    RenderTemplate: "render_template",
    RenderFile: "render_file"
  };
  let N = {
    FirstImage: "first_image",
    FirstScreen: "first_screen",
    ImageRequestCostTime: "image_request_cost_time",
    ImageRenderCostTime: "image_render_cost_time",
    ImageCompleteLoadTime: "image_complete_load_time",
    TextCostTime: "text_cost_time",
    OutlineCostTime: "outline_cost_time",
    FontsCostTime: "fonts_cost_time",
    FirstText: "first_text"
  };
  let S = {
    Success: "DEC0",
    Cancel: "DEC1",
    NetworkError: "DEC2",
    RenderError: "DEC3",
    RequestFileInfoError: "DEC4",
    RequestPreviewUrlError: "DEC5",
    FileDeletedError: "DEC6",
    NoPermission: "DEC7",
    NotFound: "DEC8",
    Unknown: "DEC9",
    UnsupportedFileType: "DEC11",
    FileSizeExceed: "DEC12",
    EmptyFileContent: "DEC13",
    Transcoding: "DEC14"
  };
  let L = new Map([[fileTypeConstants_1.previewStates.INTERFACE_ERROR, S.NetworkError], [fileTypeConstants_1.previewStates.FILE_RENDER_ERROR, S.RenderError], [fileTypeConstants_1.previewStates.GET_FILE_INFO_ERROR, S.RequestFileInfoError], [fileTypeConstants_1.previewStates.GET_PREVIEW_URL_ERROR, S.RequestPreviewUrlError], [fileTypeConstants_1.previewStates.GET_PREVIEW_URL_FATAL, S.RequestPreviewUrlError], [fileTypeConstants_1.previewStates.FILE_TYPE_UNSUPPORTED, S.UnsupportedFileType], [fileTypeConstants_1.previewStates.FILE_TOO_LARGE, S.FileSizeExceed], [fileTypeConstants_1.previewStates.FILE_EMPTY, S.EmptyFileContent], [fileTypeConstants_1.previewStates.IFRAME_NETWORK_ERROR, S.NetworkError], [fileTypeConstants_1.previewStates.PROGRESS, S.Transcoding], [fileTypeConstants_1.previewStates.NO_PERMISSION, S.NoPermission], [fileTypeConstants_1.previewStates.FILE_DELETED, S.FileDeletedError], [fileTypeConstants_1.previewStates.FILE_NOT_FOUND, S.NotFound], [fileTypeConstants_1.previewStates.FILE_NEED_PASSWORD, S.Cancel], [fileTypeConstants_1.previewStates.PART_ERROR, S.RequestPreviewUrlError], [fileTypeConstants_1.previewStates.PREVIEW_TYPE_UNMATCH, S.RequestPreviewUrlError], [fileTypeConstants_1.previewStates.ARCHIVE_FILE_TYPE_UNEXPECTED, S.RequestPreviewUrlError], [fileTypeConstants_1.previewStates.ARCHIVE_FILE_WHOLE_NODE_COUNT_EXCEEDED, S.FileSizeExceed], [fileTypeConstants_1.previewStates.ARCHIVE_FILE_SINGLE_NODE_COUNT_EXCEEDED, S.FileSizeExceed]]);
  let x = {
    doc: "drivesdk_creation",
    doc_file: "drivesdk_creation",
    bitable: "drivesdk_creation",
    default: "ccm_drive"
  };
  require.d(exports, {
    evtDevPerfFinish: function () {
      return l;
    },
    fileTypeCreationMap: function () {
      return x;
    },
    evtFastPdfStageDev: function () {
      return b;
    },
    previewErrorMap: function () {
      return L;
    },
    evtClickOpenMention: function () {
      return d;
    },
    previewLoadStages: function () {
      return y;
    },
    evtClientDownload: function () {
      return P;
    },
    previewMetrics: function () {
      return N;
    },
    evtPreviewPv: function () {
      return r;
    },
    evtDrivePageClick: function () {
      return D;
    },
    evtMagicshareClick: function () {
      return w;
    },
    previewErrorCodes: function () {
      return S;
    },
    evtCommonError: function () {
      return v;
    },
    evtMagicshareView: function () {
      return F;
    },
    evtToggleAttribute: function () {
      return o;
    },
    evtLinkClicked: function () {
      return h;
    },
    evtDownloadBegin: function () {
      return T;
    },
    evtOutsideToggle: function () {
      return s;
    },
    evtSdkFileOpen: function () {
      return u;
    },
    evtPreviewReload: function () {
      return g;
    },
    evtMediaPlayCost: function () {
      return m;
    },
    evtPreviewError: function () {
      return E;
    },
    evtDriveEditClick: function () {
      return C;
    },
    evtDocsTopbarView: function () {
      return _;
    },
    evtWpsTabHeartbeat: function () {
      return O;
    },
    evtDrivePageView: function () {
      return I;
    },
    evtMentionDownload: function () {
      return c;
    },
    evtDevPerfStages: function () {
      return a;
    },
    evtEnterPres: function () {
      return f;
    },
    evtDocsTopbarClick: function () {
      return p;
    },
    evtAbbrMentionShow: function () {
      return R;
    }
  });
}