// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'flattenAttachments'
// - Renamed export 'f' to 'getPreprocessKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21617.72465d64.js
         * chunkId: 21617
         * moduleId: 735334
         */
module.exports = function (module, exports, require) {
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var messagePayloadTypeGuards = require("message-payload-type-guards") /*id: 669738*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  let l = (e, t) => e.preprocessTaskMap[t].key;
  let c = e => {
    if ("image_key" in e) {
      return {
        type: "attachment",
        fileKey: e.image_key || "",
        fileName: "Image"
      };
    }
    if ("image" in e && e.local_key && e.image) {
      let t = l(chatStoreManager.getStore("attachmentUploadStore").getState(), e.local_key);
      if (t) {
        return {
          type: "attachment",
          fileKey: t,
          fileName: getObjectPathString.getObjectPathString("name")(e.image) || "Image"
        };
      }
    }
  };
  let d = e => {
    if ("file_key" in e && e.file_key) {
      let t = e.file_name || "";
      return {
        type: "attachment",
        fileKey: e.file_key,
        fileName: t || "File"
      };
    }
    if ("file" in e && e.local_key && e.file) {
      let t = getObjectPathString.getObjectPathString("name")(e.file);
      let i = l(chatStoreManager.getStore("attachmentUploadStore").getState(), e.local_key);
      if (!i) {
        return;
      }
      return {
        type: "attachment",
        fileKey: i,
        fileName: t || "File"
      };
    }
  };
  let f = e => {
    let {
      images: t
    } = e.compositeContent || {};
    if (!(t == null ? undefined : t.length)) {
      return;
    }
    let i = t[0];
    if ("key" in i && i.key) {
      return {
        type: "attachment",
        fileKey: i.key,
        fileName: "Image"
      };
    }
    if ("blob" in i && i.local_key && i.blob) {
      let e = l(chatStoreManager.getStore("attachmentUploadStore").getState(), i.local_key);
      if (!e) {
        return;
      }
      return {
        type: "attachment",
        fileKey: e,
        fileName: getObjectPathString.getObjectPathString("name")(i.blob) || "Image"
      };
    }
  };
  let h = e => {
    let {
      files: t
    } = e.compositeContent;
    if (t.length === 0) {
      return;
    }
    let i = t[0];
    if ("key" in i && i.key) {
      let e = "file_name" in i && i.file_name || "";
      return {
        type: "attachment",
        fileKey: i.key,
        fileName: e || "File"
      };
    }
    if ("blob" in i && i.local_key && i.blob) {
      let e = getObjectPathString.getObjectPathString("name")(i.blob);
      let t = l(chatStoreManager.getStore("attachmentUploadStore").getState(), i.local_key);
      if (!t) {
        return;
      }
      return {
        type: "attachment",
        fileKey: t,
        fileName: e || "File"
      };
    }
  };
  let m = e => {
    let {
      links: t
    } = e.compositeContent;
    return t.map(e => ({
      type: "link",
      link: e
    }));
  };
  let v = e => {
    let {
      websites: t
    } = e.compositeContent || {};
    return (t == null ? undefined : t.map(e => ({
      type: "link",
      link: e.url
    }))) || [];
  };
  let _ = e => {
    var t;
    return ((t = e.nestedItems) === null || t === undefined ? undefined : t.map(e => ({
      type: "attachment",
      fileName: e.fileName,
      fileKey: e.fileKey,
      asrType: e.fileType === contentTypeEnums.mediaType.Audio ? "audio" : e.fileType === contentTypeEnums.mediaType.Video ? "video" : undefined
    })).filter(infraUtilFunctions.isDefined)) || [];
  };
  let p = e => {
    let {
      enableRefContent: t = true
    } = e;
    if (!t) {
      return [];
    }
    if (messagePayloadTypeGuards.hasImageInPayload(e)) {
      return [c(e)].filter(infraUtilFunctions.isDefined);
    }
    if (messagePayloadTypeGuards.hasFileInMessage(e)) {
      return [d(e)].filter(infraUtilFunctions.isDefined);
    }
    if (messagePayloadTypeGuards.hasImagesInCompositeContent(e)) {
      return [f(e)].filter(infraUtilFunctions.isDefined);
    }
    if (messagePayloadTypeGuards.hasFilesInCompositeContent(e)) {
      return [h(e)].filter(infraUtilFunctions.isDefined);
    }
    if (messagePayloadTypeGuards.hasLinksInCompositeContent(e)) {
      return m(e);
    } else if (messagePayloadTypeGuards.hasNestedItemsInMessage(e)) {
      return _(e);
    } else if (messagePayloadTypeGuards.hasWebsitesInCompositeContent(e)) {
      return v(e);
    } else {
      return [];
    }
  };
  let y = e => safeArrayFlattenUtil.safeFlattenArray(e.map(e => p(e)));
  require.d(exports, {
    flattenAttachments: function () {
      return y;
    },
    getPreprocessKey: function () {
      return l;
    }
  });
}