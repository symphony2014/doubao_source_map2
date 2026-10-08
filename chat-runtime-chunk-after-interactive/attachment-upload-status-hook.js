// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'useAttachmentUploadStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 750209
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  let a = e => {
    let {
      config: d
    } = e;
    let p = d == null ? undefined : d.localKey;
    let _ = d == null ? undefined : d.file;
    let v = chatStoreManager.useStoreSelector("attachmentUploadStore", e => p ? e.preprocessTaskMap[p] : undefined, deepEqualityUtil_1.isDeepEqual);
    let h = v == null ? undefined : v.key;
    let m = (v == null ? undefined : v.failed) ? receiveMessageBoxStatus.messageBoxStatus.Retry : (v == null ? undefined : v.loading) ? receiveMessageBoxStatus.messageBoxStatus.Uploading : receiveMessageBoxStatus.messageBoxStatus.Normal;
    let f = v == null ? undefined : v.percent;
    let g = h || chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[p ?? ""]?.key;
    let y = {
      file_name: _ && "name" in _ && (_ == null ? undefined : _.name) || "",
      key: g || ""
    };
    return {
      image: {
        imageList: [{
          key: g || "",
          image_thumb: {
            url: (v == null ? undefined : v.blobUrl) ?? "",
            width: 0,
            height: 0,
            format: "",
            url_formats: {}
          },
          image_ori: {
            url: (v == null ? undefined : v.blobUrl) ?? "",
            width: 0,
            height: 0,
            format: "",
            url_formats: {}
          },
          image_thumb_formats: {},
          image_thumb_ori_formats: {},
          feedback: "",
          request_id: "",
          description: ""
        }],
        uri: (v == null ? undefined : v.key) ?? "",
        url: (v == null ? undefined : v.blobUrl) ?? ""
      },
      fileContent: y,
      upload: {
        status: m,
        percent: f
      },
      reUpload: e => {
        chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(t => {
          if (t != null) {
            t.reUpload(p ?? "", chatConversationBotId.getConversationBotId(e) ?? "");
          }
        });
      },
      cancel: () => {
        if (v) {
          chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
            if (e != null) {
              e.cancel(v.fileKey);
            }
          });
        }
      }
    };
  };
  require.d(exports, {
    useAttachmentUploadStatus: function () {
      return a;
    }
  });
}