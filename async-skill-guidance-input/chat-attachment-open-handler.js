// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'chatAttachmentOpener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 354799
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var waitForAttachmentUploadKey = require("wait-for-attachment-upload-key") /*id: 921016*/;
  var chatFileOpenHandler = require("chat-file-open-handler") /*id: 145253*/;
  let p = e => {
    let {
      attachmentStates: t,
      openFrom: n
    } = e;
    let p = chatResponsiveSize.useChatScreenSize({
      sm: 800,
      md: 1200
    }) === "sm";
    let f = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let {
      openFileByKey: h,
      openFileByLink: m
    } = chatFileOpenHandler.createChatFileHandler({
      chatViewConfig: f
    });
    return {
      openReadCanvas: reactFunctionMemoHook.useMemoizedCallback(async e => {
        if (p) {
          return;
        }
        let i = t[0];
        if (!i) {
          return;
        }
        let r = (e == null ? undefined : e.skillType) ? {
          skillType: e.skillType
        } : {};
        if (["file", "remote"].includes(i.type)) {
          let {
            fileKey: t
          } = i;
          if (!t && i.localKey && !(t = await waitForAttachmentUploadKey.waitForAttachmentUploadKey(i.localKey))) {
            return;
          }
          let a = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(i.fileName));
          if (a === "Document") {
            let e = await getDocumentPdfKey.getDocumentPdfKey(t);
            if (e) {
              t = e;
              a = "PDF";
            }
          }
          if (a === "PDF") {
            h(t, a, {
              pdf: {
                fileName: i.fileName,
                realFileKey: i.fileKey
              },
              openFrom: (e == null ? undefined : e.openFrom) || n,
              delayToIntension: true
            }, r);
          }
        } else if (i.type === "link" && i.url && (await arxivPdfUrlChecker_1.getArxivPdfStatus(i.url))) {
          m(i.url, {
            attchmentType: "pdf",
            openFrom: (e == null ? undefined : e.openFrom) || n,
            delayToIntension: true
          }, r);
        }
      })
    };
  };
  require.d(exports, {
    chatAttachmentOpener: function () {
      return p;
    }
  });
}