// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'getDocumentPdfKey'
// - Resolved require(523108) to 'get-document-pdf-key'
// - Renamed variable 'i' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'a' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// - Updated imported property 's' to 'getDocumentPdfKey' (module 523108)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-wordfileread-url-parse-pre-plugin.4471769c.js
         * chunkId: 47742
         * moduleId: 317864
         */
module.exports = function (module, exports, require) {
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  async function r(n) {
    let {
      payload: e
    } = n;
    if (!aiSpaceInputValidators.validateFiles(e)) {
      return;
    }
    let {
      files: o
    } = e;
    let r = o[0];
    if (!r) {
      return;
    }
    let {
      uri: l,
      conversationId: d
    } = r;
    let [s, _] = await Promise.all([checkConversationValid.isConversationValid(d), getDocumentPdfKey.getDocumentPdfKey(l)]);
    return {
      conversationId: s ? d : undefined,
      docPdfKey: _
    };
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return r;
    }
  });
}