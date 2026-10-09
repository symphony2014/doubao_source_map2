// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$c' to 'createFileAttachment'
// - Renamed export 'A_' to 'createImageMessage'
// - Renamed export 'Tt' to 'createFileKeyMessage'
// - Renamed export 'Z8' to 'createFileMessage'
// - Renamed export 'eg' to 'getPreGeneratedId'
// - Renamed export 'm0' to 'processAttachments'
// - Renamed export 'me' to 'createFileContentMessage'
// - Renamed export 'tz' to 'createTextMessage'
// - Renamed export 'xz' to 'createImageReportMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 502721
         */
module.exports = function (module, exports, require) {
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  let c = e => ({
    blob: e.file,
    local_key: e.localKey,
    from: e.from
  });
  let d = (e, t, n) => ({
    compositeContent: {
      text: e,
      images: [c(t)]
    },
    reportParams: n
  });
  let _ = (e, t) => ({
    compositeContent: {
      text: e,
      files: [c(t)]
    },
    reportParams: {
      scene: "keyboard"
    }
  });
  let p = (e, t) => ({
    text: e,
    reportParams: t
  });
  let f = (e, t) => ({
    reportParams: t,
    image: e.file,
    local_key: e.localKey
  });
  let m = (e, t) => ({
    reportParams: t,
    file: e.file,
    local_key: e.localKey
  });
  let v = (e, t) => ({
    reportParams: t,
    file_key: e.key,
    file_name: e.fileName
  });
  let g = (e, t) => {
    let {
      text: n,
      attachments: l,
      attachmentKeys: c,
      attachmentStates: d,
      enableImageVlm: _
    } = e;
    let p = l.map((e, t) => {
      if (messageBoxTypeCheckers.isLinkType(e) || messageBoxTypeCheckers.isLarkDocType(e)) {
        return;
      }
      let p = c[t];
      let f = e.fileName ?? getObjectPathString.getObjectPathString("name")(e.file);
      if (!p) {
        return;
      }
      let m = messageBoxTypeCheckers.isRemoteType(e) ? e.size ?? 0 : e.file?.size ?? e.size;
      let v = messageBoxTypeCheckers.isRemoteType(e) ? uuidV1Generator.generateUuid() : e.localKey;
      let g = d[t];
      let S = {
        fileKey: p,
        fileName: f,
        size: m,
        identifier: v,
        parseState: g.parseState,
        reviewState: g.reviewState,
        md5: g.md5,
        localKey: g.localKey
      };
      if (messageBoxTypeCheckers.isImageType(e)) {
        return {
          ...S,
          type: _ ? contentTypeEnums.resourceType.Image : contentTypeEnums.resourceType.File,
          fileType: contentTypeEnums.mediaType.OCRImage,
          image: {
            key: p,
            image_ori: {
              width: g.imageWidth,
              height: g.imageHeight
            }
          }
        };
      } else {
        return {
          ...S,
          type: contentTypeEnums.resourceType.File,
          fileType: contentTypeEnums.mediaType.File
        };
      }
    }).filter(infraUtilFunctions.isDefined);
    if (!isEmptyUtil.isEmpty(p)) {
      return {
        text: n,
        nestedItems: p,
        reportParams: {
          ...t
        }
      };
    }
  };
  let S = async e => {
    let t = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
    let n = t == null ? undefined : t.popPreGeneratedId(e);
    if (n) {
      return {
        pre_generate_id: n
      };
    } else {
      return {};
    }
  };
  require.d(exports, {
    createFileAttachment: function () {
      return c;
    },
    createImageMessage: function () {
      return d;
    },
    createFileKeyMessage: function () {
      return v;
    },
    createFileMessage: function () {
      return m;
    },
    getPreGeneratedId: function () {
      return S;
    },
    processAttachments: function () {
      return g;
    },
    createFileContentMessage: function () {
      return _;
    },
    createTextMessage: function () {
      return p;
    },
    createImageReportMessage: function () {
      return f;
    }
  });
}