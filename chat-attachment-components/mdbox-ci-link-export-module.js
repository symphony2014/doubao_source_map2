// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mdBoxCiImage'
// - Resolved require(286260) to 'md-box-ci-image'
// - Renamed variable 'r' to 'mdboxAttachmentLink'
// - Resolved require(888359) to 'mdbox-attachment-link'
// - Renamed variable 'l' to 'noopDownloadAttachmentHandler'
// - Resolved require(862937) to 'noop-download-attachment-handler'
// - Updated imported property 'f' to 'stubEventHandlers' (module 862937)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 526793
         */
module.exports = function (module, exports, require) {
  var mdBoxCiImage = require("md-box-ci-image") /*id: 286260*/;
  var mdboxAttachmentLink = require("mdbox-attachment-link") /*id: 888359*/;
  var noopDownloadAttachmentHandler = require("noop-download-attachment-handler") /*id: 862937*/;
  require.r(exports);
  require.d(exports, {
    DEFAULT_EVENTS: function () {
      return noopDownloadAttachmentHandler.stubEventHandlers;
    },
    MdBoxCIImage: function () {
      return mdBoxCiImage.MdBoxCIImage;
    },
    MdboxCILink: function () {
      return mdboxAttachmentLink.MdboxCILink;
    }
  });
}