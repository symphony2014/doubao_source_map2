// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FQ' to 'rendererEventConstants'
// - Renamed export 'SH' to 'maxImageWidth'
// - Renamed export 'fQ' to 'requestTimeout'
// - Renamed export 'uf' to 'htmlEventConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 798496
         */
module.exports = function (module, exports, require) {
  var n;
  var a;
  (n = {}).HTML = "html";
  n.HTML_CHUNK = "htmlChunk";
  n.IMAGE_OVERRIDE = "imageOverride";
  n.HTML_EDITABLE = "htmlEditable";
  n.CHANGE_IMAGE_STATUS = "changeImageStatus";
  n.RESPONSE_LLM_IMAGE = "responseLLMImage";
  n.RESET_EDITING_STATE = "resetEditingState";
  n.RESPONSE_UPLOAD_IMAGE = "responseUploadImage";
  n.REQUEST_EXPORT_IMG = "requestExportImg";
  n.HTML_PATH = "Renderer::Page::HtmlPath";
  n.RESPONSE_RESOURCE = "Response::API::Resource";
  n.UPDATE_RESOURCE = "Response::Prefetch::Resource";
  n.REFRESH_HTML = "Renderer::Page::RefreshHTML";
  let o = n;
  (a = {}).DAEMON_LOADED = "Daemon::Loaded";
  a.DAEMON_ERROR = "Daemon::Error";
  a.HEARTBEAT = "heartbeat";
  a.RENDERER_PERFORMANCE_FP = "Renderer::Performance::FirstPaint";
  a.RENDERER_PERFORMANCE_FCP = "Renderer::Performance::FirstContentfulPaint";
  a.RENDERER_PAGE_LOAD = "Renderer::Page::Load";
  a.RENDERER_PAGE_ERROR = "Renderer::Page::Error";
  a.RENDERER_PAGE_LINK_NOTICE = "Renderer::Page::LinkNotice";
  a.NEW_IMAGE_FOUND = "newImageFound";
  a.SHOW_NOTICE = "showNotice";
  a.REQUEST_LLM_IMAGE = "requestLLMImage";
  a.REPLACE_STATIC_TEXT = "replaceStaticText";
  a.REPLACE_STYLE = "replaceStyle";
  a.REPLACE_IMAGE_URL = "replaceImageUrl";
  a.REPLACE_ALL_IMAGE_URL = "replaceAllImageUrl";
  a.REQUEST_ASK_AI = "requestAskAI";
  a.REQUEST_UPLOAD_IMAGE = "requestUploadImage";
  a.REQUEST_RESOURCE = "Request::API::Resource";
  a.RENDERER_PAGE_JUMP_TO_SOURCE_CODE = "Renderer::Page::JumpToSourceCode";
  a.RENDERER_PAGE_EXIT_VISUAL_EDIT = "Renderer::Page::ExitVisualEdit";
  a.TRACK_EVENT = "trackEvent";
  a.RESPONSE_EXPORT_IMG = "responseExportImg";
  a.BODY_RESIZE = "bodyResize";
  a.RENDERER_PAGE_SCROLL_NOTICE = "Renderer::Page::ScrollNotice";
  let i = a;
  let s = 2000;
  let l = 20;
  require.d(exports, {
    rendererEventConstants: function () {
      return i;
    },
    maxImageWidth: function () {
      return l;
    },
    requestTimeout: function () {
      return s;
    },
    htmlEventConstants: function () {
      return o;
    }
  });
}