// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'systemEvents'
// - Renamed export 'u' to 'editorConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 696878
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {}).HTML = "html";
  i.HTML_CHUNK = "htmlChunk";
  i.IMAGE_OVERRIDE = "imageOverride";
  i.HTML_EDITABLE = "htmlEditable";
  i.CHANGE_IMAGE_STATUS = "changeImageStatus";
  i.RESPONSE_LLM_IMAGE = "responseLLMImage";
  i.RESET_EDITING_STATE = "resetEditingState";
  i.RESPONSE_UPLOAD_IMAGE = "responseUploadImage";
  i.REQUEST_EXPORT_IMG = "requestExportImg";
  let o = i;
  (r = {}).DAEMON_LOADED = "Daemon::Loaded";
  r.DAEMON_ERROR = "Daemon::Error";
  r.HEARTBEAT = "heartbeat";
  r.RENDERER_PERFORMANCE_FP = "Renderer::Performance::FirstPaint";
  r.RENDERER_PERFORMANCE_FCP = "Renderer::Performance::FirstContentfulPaint";
  r.RENDERER_PAGE_LOAD = "Renderer::Page::Load";
  r.RENDERER_PAGE_ERROR = "Renderer::Page::Error";
  r.RENDERER_PAGE_LINK_NOTICE = "Renderer::Page::LinkNotice";
  r.NEW_IMAGE_FOUND = "newImageFound";
  r.SHOW_NOTICE = "showNotice";
  r.REQUEST_LLM_IMAGE = "requestLLMImage";
  r.REPLACE_STATIC_TEXT = "replaceStaticText";
  r.REPLACE_IMAGE_URL = "replaceImageUrl";
  r.REPLACE_ALL_IMAGE_URL = "replaceAllImageUrl";
  r.REQUEST_ASK_AI = "requestAskAI";
  r.REQUEST_UPLOAD_IMAGE = "requestUploadImage";
  r.TRACK_EVENT = "trackEvent";
  r.RESPONSE_EXPORT_IMG = "responseExportImg";
  r.BODY_RESIZE = "bodyResize";
  r.RENDERER_PAGE_SCROLL_NOTICE = "Renderer::Page::ScrollNotice";
  let a = r;
  require.d(exports, {
    systemEvents: function () {
      return a;
    },
    editorConstants: function () {
      return o;
    }
  });
}