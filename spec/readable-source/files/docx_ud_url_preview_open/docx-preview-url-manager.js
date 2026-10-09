// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'docxPreviewManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 686414
         */
module.exports = function (module, exports, require) {
  exports.docxPreviewManager = new class {
    config(e) {
      this.conf = Object.assign({}, e);
    }
    getURL() {
      return this.conf.urls;
    }
    getSession() {
      return this.conf.getConfig();
    }
    getSessionHeader() {
      return {
        "jssdk-session": this.getSession().jssdk_session
      };
    }
  }();
}