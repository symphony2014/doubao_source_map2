// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AY' to 'useImageQuoteEntry'
// - Renamed export 'eX' to 'useImageQuoteFrom'
// - Renamed export 'zj' to 'useImageQuoteHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 536904
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var docxCreationAgentHook = require("docx-creation-agent-hook") /*id: 933686*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var queryContextStore = require("query-context-store") /*id: 988837*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  let f = {};
  let b = (e, t) => objectPathGetDefault.getObjectPathDefault(f, [e, t, "imageQuoteFrom"]);
  let y = (e, t) => objectPathGetDefault.getObjectPathDefault(f, [e, t, "entryType"]);
  let k = e => {
    let {
      chatId: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let o = chatToastFactoryHook.useToastFactory();
    let {
      refImageIntoImageAttachmentEnabled: b
    } = docxCreationAgentHook.useCreationAgent();
    let {
      onUpdateQueryContext: y
    } = queryContextStore.queryContextStore(e => throttledPathFilterStringify.throttledPathStr(e, ["onUpdateQueryContext"]), deepEqualityUtil_1.isDeepEqual);
    let k = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: t || "",
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let {
      addAttachmentDirectly: w,
      clearAttachments: x
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: t || "",
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let C = reactFunctionMemoHook.useMemoizedCallback(() => {
      chatStoreManager.getStoreState("chatInputStore").updateHidePopoverWhenMount(t || "", true);
    });
    let E = reactFunctionMemoHook.useMemoizedCallback(() => {
      chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(t || "", chatAppEnums.SkillType.ImageGeneration);
    });
    let I = reactFunctionMemoHook.useMemoizedCallback(e => !!e && !!k.find(t => t.fileKey === e));
    let S = reactFunctionMemoHook.useMemoizedCallback(async e => {
      let {
        image: s,
        imageBrief: d,
        imageQuoteFrom: c,
        entryType: u
      } = e;
      let h = (s == null ? undefined : s.key) || (d == null ? undefined : d.key);
      let p = (s == null ? undefined : s.description) || (d == null ? undefined : d.description);
      if (h) {
        safeObjectSetWrapper.safeObjectSet(f, [t || "", h], {
          imageQuoteFrom: c,
          entryType: u
        });
        if (b || c === "image_template_use_image") {
          if (I(h)) {
            return;
          }
          if (k.length >= imageConfigConstants.configLimit) {
            o.error(n("image_upload_toast_maxNum", {
              s_number: imageConfigConstants.configLimit
            }));
            return;
          }
          C();
          await w({
            type: "image",
            from: "image_quote",
            fileName: p,
            fileKey: h,
            size: 0,
            blobUrl: s ? imageActionUtils.processImageData(s).originalImage?.url : d == null ? undefined : d.url,
            url: h
          });
          E();
          return;
        }
        C();
        y({
          edit_image_url: s ? imageActionUtils.processImageData(s).originalImage?.url : d == null ? undefined : d.url,
          edit_image_token: h,
          description: p || "",
          thumb_image_url: s ? imageActionUtils.processImageData(s).thumbImage?.url : ""
        });
        E();
      }
    });
    return {
      isRefImageKeyExist: I,
      handleRefImage: S,
      handleRefImageNext: reactFunctionMemoHook.useMemoizedCallback(e => {
        let {
          image: a
        } = e;
        x({});
        let l = imageActionUtils.processImageData(a);
        let r = l.thumbImage?.url || l.previewImage?.url || "";
        let d = l.originalImage?.url || "";
        let c = a.description || "Image";
        C();
        E();
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.setRefContents({
              refContents: [{
                type: "image",
                fileName: c,
                fileKey: a.key,
                identifier: d,
                option: r ? {
                  local_path: r
                } : undefined
              }],
              channel: `skill_${chatAppEnums.SkillType.ImageGeneration}`,
              source: chatAppEnums.SkillType.ImageGeneration
            }, t || "");
          }
        });
      })
    };
  };
  require.d(exports, {
    useImageQuoteEntry: function () {
      return y;
    },
    useImageQuoteFrom: function () {
      return b;
    },
    useImageQuoteHandler: function () {
      return k;
    }
  });
}