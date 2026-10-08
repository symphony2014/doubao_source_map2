// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$Q' to 'codeFileValidator'
// - Renamed export 'dV' to 'getUploadValidator'
// - Renamed export 'f3' to 'useFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 208950
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var codingSkillChatUtils = require("coding-skill-chat-utils") /*id: 881555*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  var imageUploadSettingCheck = require("image-upload-setting-check") /*id: 795291*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  let k = e => {
    var t;
    return !!e && (e == null ? undefined : (t = e.type) === null || t === undefined ? undefined : t.indexOf("image")) !== -1;
  };
  function E(e, t) {
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = imageUploadSettingCheck.canUploadImage();
    let {
      clearAttachments: a
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: e ?? ""
    });
    let r = chatToastFactoryHook.useToastFactory();
    return (e, l, s) => {
      let {
        maxFileCount: d,
        maxImageCount: c,
        enableImageVlm: u,
        trackParams: h,
        hasLink: m
      } = s;
      if (isEmptyUtil.isEmpty(e)) {
        return false;
      }
      let _ = l.some(e => e.type === "link") || m;
      let y = l.some(e => e.type === "directory");
      if (!i && e.length + l.length > chatMessagingConstants.apiVersion && (e.find(e => k(e)) || l.find(e => e.type === "image"))) {
        if (e.find(e => !k(e)) || l.find(e => e.type !== "image")) {
          r.warning(n("multi_upload_toast_mixedtype"));
        } else {
          r.warning(n("image_upload_toast_maxNum", {
            s_number: chatMessagingConstants.apiVersion
          }));
        }
        return false;
      }
      if (e.length + l.length > d) {
        r.error(n("file_token_limit", {
          postProcess: "sprintf",
          sprintf: [doubaoConfigConstants_1.productNameChinese, d.toString()]
        }));
        e.forEach(e => {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...h,
            status: "0",
            error_code: "over_file_numberlimit",
            collection_name: e.name,
            upload_type: k(e) ? "pic" : "pdf",
            upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
            upload_file_size: String(e.size)
          });
        });
        return false;
      }
      if (u) {
        let t = e.filter(k);
        let i = l.filter(e => {
          let {
            type: t
          } = e;
          return t === "image";
        });
        if (t.length + i.length > c) {
          r.error(n("image_upload_toast_maxNum", {
            s_number: c
          }));
          e.forEach(e => {
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...h,
              status: "0",
              error_code: "over_image_numberlimit",
              collection_name: e.name,
              upload_type: k(e) ? "pic" : "pdf",
              upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
              upload_file_size: String(e.size)
            });
          });
          return false;
        }
      }
      if (_) {
        if (!t) {
          r.warning(n("skill_pdf_error_exclusive"));
          return false;
        }
        if (a != null) {
          a({});
        }
      }
      if (y) {
        if (!t) {
          r.warning(n("skill_pdf_error_exclusive"));
          return false;
        }
        if (a != null) {
          a({});
        }
      }
      return true;
    };
  }
  function S(e, t) {
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let o = chatToastFactoryHook.useToastFactory();
    let {
      chatId: p,
      chatType: m
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let x = chatConversationBotId.getConversationBotId(p);
    let C = E(p, t);
    let S = N();
    let j = chatConversationSelectors.selectConvLink(p || "", m);
    let T = supportedFileExtensionsUtility.getSupportedFileExtensions(e);
    let {
      uploadFileAllowedTypes: P,
      uploadFileMaxSize: O,
      enabledSendMultiFileMessage: I,
      enableImageVlm: R,
      uploadMultiEntityConf: {
        maxFileCount: D,
        maxFileSize: A,
        maxImageCount: M,
        maxImageSize: Z
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let L = reactCoreLibraryReexport.useMemo(() => j ? T : codingSkillChatUtils.isValidSkillId(x) ? fileTypeDetectionUtils.codeExtensions : P, [j, T, x, P]);
    let F = I || codingSkillChatInput_1.codingSkillChatFlag;
    let $ = j && F ? A : Number(O);
    let B = reactCoreLibraryReexport.useMemo(() => j && F || codingSkillChatUtils.isValidSkillId(x) ? D ?? 50 : D ? 1 : 50, [j, F, x, D]);
    let z = reactCoreLibraryReexport.useCallback(e => {
      let t = getFileExtension.getFileExtension(e.name);
      return L.includes(t);
    }, [L]);
    return async (e, t, i) => {
      let {
        trackParams: a,
        hasLink: r
      } = i;
      if (!C(e, t, {
        maxFileCount: B,
        maxImageCount: M,
        trackParams: a,
        enableImageVlm: R,
        hasLink: r
      })) {
        return [];
      }
      let l = e.filter(e => !z(e));
      let s = e.filter(e => !l.includes(e));
      let d = s.filter(e => R && k(e) ? e.size > Z : e.size > $);
      let c = s.filter(e => !d.includes(e));
      l.forEach(e => {
        o.error(n("read_file_type_error", {
          postProcess: "sprintf",
          sprintf: [e.name]
        }));
      });
      d.forEach(e => {
        let t = R && k(e) ? Z : $;
        o.error(n("file_size_over_limit", {
          postProcess: "sprintf",
          sprintf: [e.name, infraUtilFunctions.formatBytesSize(t)]
        }));
      });
      d.forEach(e => {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          ...a,
          status: "0",
          error_code: R && k(e) ? `image_is_over_${Z}` : "file_is_over_50mb",
          collection_name: e.name,
          upload_type: k(e) ? "pic" : "pdf",
          upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
          upload_file_size: String(e.size)
        });
      });
      if (!j) {
        return c;
      }
      {
        let {
          filterFileList: e
        } = await S({
          fileList: c,
          attachmentStates: t,
          toastImmediately: true,
          isFree: true
        });
        return e;
      }
    };
  }
  let N = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatToastFactoryHook.useToastFactory();
    return async n => {
      let {
        fileList: i,
        attachmentStates: a,
        toastImmediately: o = false,
        isFree: r = false,
        trackParams: l
      } = n;
      let s = [];
      let d = [];
      let c = [];
      let u = [];
      let p = [];
      let h = {
        abort: false,
        warningList: u,
        filterFileList: [],
        errorList: p
      };
      await codeAssistantFileValidator.useFileValidation();
      i = i.filter(e => {
        let t;
        if (!(t = r ? codeAssistantFileValidator.isAssistantFile(e.name) : codeAssistantFileValidator.getCodeFileTypes(e.name)) && r) {
          return true;
        }
        let n = true;
        if (t) {
          if (e.size <= 0) {
            n = false;
            if (l) {
              teaAnalyticsEventTracker.trackEvent("upload_status", {
                ...l,
                status: "0",
                error_code: "empty_file",
                collection_name: e.name,
                upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
                upload_file_size: String(e.size)
              });
            }
            d.push(e);
          } else if (e.size > 204800) {
            n = false;
            if (l) {
              teaAnalyticsEventTracker.trackEvent("upload_status", {
                ...l,
                status: "0",
                error_code: "file_is_over_200kb",
                collection_name: e.name,
                upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
                upload_file_size: String(e.size)
              });
            }
            c.push(e);
          }
        } else {
          s.push(e);
          n = false;
        }
        return n;
      });
      if (s == null ? undefined : s.length) {
        let n = s.length > 1 ? e("cici_web_ai_coding_file_type_limit_multiple", {
          postProcess: "sprintf",
          sprintf: [s[0].name, s.length]
        }) : e("cici_web_ai_coding_file_type_limit_single", {
          postProcess: "sprintf",
          sprintf: [s[0].name]
        });
        u.push(n);
        if (o) {
          t.warning(n);
        }
      }
      if (d.length > 0) {
        let n = d.length === 1 ? e("cici_web_ai_coding_file_null_limit", {
          postProcess: "sprintf",
          sprintf: [d[0].name]
        }) : e("cici_web_ai_coding_file_null_limit_mutiple", {
          postProcess: "sprintf",
          sprintf: [d[0].name, d.length]
        });
        u.push(n);
        if (o) {
          t.warning(n);
        }
      }
      if (i.length + a.length > 50) {
        let n = e("cici_web_ai_coding_file_num_limit");
        t.error(n);
        p.push(n);
        h.abort = true;
      }
      if (c.length === 1) {
        let n = e("cici_web_ai_coding_file_size_limit_single");
        u.push(n);
        if (o) {
          t.warning(n);
        }
      }
      if (c.length > 1) {
        let n = c.length > 1 ? e("cici_web_ai_coding_file_size_limit_multiple", {
          postProcess: "sprintf",
          sprintf: [c[0].name, c.length]
        }) : `${c[0].name}${e("cici_web_ai_coding_file_size_limit_single")}`;
        u.push(n);
        t.warning(n);
      }
      if (!i.length) {
        h.abort = true;
      }
      h.filterFileList = i;
      return h;
    };
  };
  require.d(exports, {
    codeFileValidator: function () {
      return N;
    },
    getUploadValidator: function () {
      return E;
    },
    useFileUpload: function () {
      return S;
    }
  });
}