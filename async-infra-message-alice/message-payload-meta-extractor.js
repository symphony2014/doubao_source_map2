// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S6' to 'getQuoteMetadata'
// - Renamed export 'XL' to 'checkPromptUsage'
// - Renamed export 'al' to 'resolvePromptType'
// - Renamed export 'd1' to 'extractUploadInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 897323
         */
module.exports = function (module, exports, require) {
  var unicodeStringCapitalizer = require("unicode-string-capitalizer") /*id: 941172*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var fileTypeCheckers = require("file-type-checkers") /*id: 412342*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var messagePayloadTypeGuards = require("message-payload-type-guards") /*id: 669738*/;
  let c = e => {
    let t = f(e);
    if (t.used_prompt && e.reportParams.preset_prompt_type) {
      return {
        ...t,
        prompt_type: "default_prompt",
        default_prompt_type: e.reportParams.preset_prompt_type
      };
    } else {
      return {
        ...t,
        prompt_type: "customized_prompt"
      };
    }
  };
  let f = e => {
    let n = true;
    if (messagePayloadTypeGuards.hasNestedItemsInMessage(e) && (e == null ? undefined : e.text) === "") {
      n = false;
    }
    if ((messagePayloadTypeGuards.hasFilesInCompositeContent(e) || messagePayloadTypeGuards.hasImagesInCompositeContent(e)) && (e == null ? undefined : e.compositeContent?.text) === "") {
      n = false;
    }
    if (messagePayloadTypeGuards.hasImageInPayload(e)) {
      n = false;
    }
    return {
      used_prompt: +!!n
    };
  };
  let p = e => {
    try {
      if (messagePayloadTypeGuards.hasSendAttachmentsInMessage(e) && ((e == null ? undefined : e.sendAttachments?.length) || 0) > 0) {
        let t = e.sendAttachments;
        let n = t == null ? undefined : t.map(e => e.key);
        let r = t == null ? undefined : t.map(e => e.name || e.repo_name || "");
        let o = t == null ? undefined : t.map(e => {
          var t;
          return (e == null ? undefined : (t = e.type) === null || t === undefined ? undefined : t.split("_").map(e => unicodeStringCapitalizer.capitalizeFirst(e)).join("")) || "";
        });
        let l = t == null ? undefined : t.map(e => e.size || 0);
        let u = new Set(o).size > 1;
        return {
          upload_id: e.preGeneratedLocalMessageId,
          upload_file_num: t == null ? undefined : t.length,
          upload_file_size: l == null ? undefined : l.join(","),
          is_upload_file: 1,
          is_upload_mix_type: +!!u,
          upload_file_type: o == null ? undefined : o.join(","),
          collection_id: (n == null ? undefined : n.length) === 1 ? n[0] : safeJsonUtils.safeStringify(n),
          collection_name: (r == null ? undefined : r.length) === 1 ? r[0] : safeJsonUtils.safeStringify(r),
          upload_collection_way: (t == null ? undefined : t.length) === 0 ? undefined : (t == null ? undefined : t.length) === 1 ? "single" : "multi",
          upload_from: e.reportParams?.upload_from
        };
      }
      if (messagePayloadTypeGuards.hasNestedItemsInMessage(e) && ((e == null ? undefined : e.nestedItems?.length) || 0) >= 0) {
        let t = e.nestedItems;
        let n = t == null ? undefined : t.map(e => e.fileKey);
        let i = t == null ? undefined : t.map(e => e.fileName || "");
        let r = t == null ? undefined : t.map(e => fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.fileName)));
        let a = t == null ? undefined : t.map(e => e.size || 0);
        let o = new Set(r).size > 1;
        return {
          upload_id: e.preGeneratedLocalMessageId,
          upload_file_num: t == null ? undefined : t.length,
          upload_file_size: a == null ? undefined : a.join(","),
          is_upload_file: 1,
          is_upload_mix_type: +!!o,
          upload_file_type: r == null ? undefined : r.join(","),
          collection_id: (n == null ? undefined : n.length) === 1 ? n[0] : safeJsonUtils.safeStringify(n),
          collection_name: (i == null ? undefined : i.length) === 1 ? i[0] : safeJsonUtils.safeStringify(i),
          upload_collection_way: (t == null ? undefined : t.length) === 0 ? undefined : (t == null ? undefined : t.length) === 1 ? "single" : "multi",
          upload_from: e.reportParams?.upload_from
        };
      }
      if (messagePayloadTypeGuards.hasFilesInCompositeContent(e) || messagePayloadTypeGuards.hasImagesInCompositeContent(e)) {
        let t = messagePayloadTypeGuards.hasFilesInCompositeContent(e) ? e.compositeContent.files : e.compositeContent?.images;
        let n = (t == null ? undefined : t.map(e => "blob" in e && e.blob ? getObjectPathString.getObjectPathString("name")(e.blob) : "file_name" in e ? e.file_name : undefined).filter(infraUtilFunctions.isDefined)[0]) || "";
        let i = (t == null ? undefined : t.map(e => {
          if ("key" in e) {
            return e.key;
          }
        }).filter(infraUtilFunctions.isDefined)[0]) || "";
        return {
          is_upload_file: 1,
          upload_id: e.preGeneratedLocalMessageId,
          upload_file_num: 1,
          upload_file_size: "0",
          is_upload_mix_type: 0,
          upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(n)),
          collection_id: i,
          upload_collection_way: "single",
          upload_from: e.reportParams?.upload_from
        };
      }
      if (messagePayloadTypeGuards.hasLinksInCompositeContent(e)) {
        let {
          links: t
        } = e.compositeContent;
        let n = t.length === 1 ? t[0] : safeJsonUtils.safeStringify(t);
        return {
          is_upload_file: 1,
          upload_file_num: t == null ? undefined : t.length,
          upload_file_size: "0",
          upload_file_type: skillConstantsEnum.UploadFileType.UPLOAD_FILE_TYPE_LINK,
          collection_id: n,
          collection_name: n,
          upload_collection_way: (t == null ? undefined : t.length) === 0 ? undefined : t.length === 1 ? "single" : "multi",
          upload_from: e.reportParams?.upload_from
        };
      }
      if (messagePayloadTypeGuards.hasImageInPayload(e)) {
        if ("image" in e && e.image) {
          return {
            is_upload_file: 1,
            upload_id: e.preGeneratedLocalMessageId,
            upload_file_num: 1,
            upload_file_size: String(e.image.size),
            is_upload_mix_type: 0,
            upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e.image))),
            collection_id: e.local_key,
            upload_collection_way: "single",
            upload_from: e.reportParams?.upload_from
          };
        }
        if ("image_key" in e && e.image_key) {
          return {
            is_upload_file: 1,
            upload_id: e.preGeneratedLocalMessageId,
            upload_file_num: 1,
            upload_file_size: "0",
            is_upload_mix_type: 0,
            upload_file_type: skillConstantsEnum.UploadFileType.UPLOAD_FILE_TYPE_IMAGE,
            collection_id: e.image_key,
            upload_collection_way: "single",
            upload_from: e.reportParams?.upload_from
          };
        }
        return {
          is_upload_file: 0
        };
      }
      if (messagePayloadTypeGuards.hasTextInMessage(e)) {
        return {
          is_upload_file: e.reportParams.is_upload_file ?? 0
        };
      }
      return {
        is_upload_file: 0
      };
    } catch (e) {
      return {};
    }
  };
  let g = e => {
    let i = e.extraExt?.reference_content;
    if (!i) {
      return {
        is_quote: e.reportParams.is_quote ?? 0,
        quote_type: e.reportParams.quote_type
      };
    }
    let r = safeJsonUtils.safeParse(i, [])[0];
    if (r) {
      return {
        is_quote: 1,
        quote_type: fileTypeCheckers.isTextType(r) ? "text" : fileTypeCheckers.isFileType(r) ? "file" : (fileTypeCheckers.isLinkType(r), "url")
      };
    } else {
      return {
        is_quote: 0,
        quote_type: undefined
      };
    }
  };
  require.d(exports, {
    getQuoteMetadata: function () {
      return g;
    },
    checkPromptUsage: function () {
      return f;
    },
    resolvePromptType: function () {
      return c;
    },
    extractUploadInfo: function () {
      return p;
    }
  });
}