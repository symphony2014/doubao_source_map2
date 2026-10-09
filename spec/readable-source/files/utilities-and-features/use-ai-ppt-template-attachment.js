// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useTemplateAttach'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 49904
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var attachmentNodeUiWrapper = require("attachment-node-ui-wrapper") /*id: 88463*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var pptxColorfulIcon = require("pptx-colorful-icon") /*id: 677836*/;
  var closeRtlIconComponent = require("close-rtl-icon-component") /*id: 513666*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      templateName: t,
      className: r,
      templateDesc: n,
      onDelete: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("templateAttachment-LbGzi8", r),
      title: t,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("templateAttachmentLeft-j_xn5B"),
        children: reactJsxRuntimeCoreReexport.jsx(pptxColorfulIcon.ColorfulPptxIcon, {
          className: "icon-RqHmwZ"
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "templateAttachmentRight-nEt1ud",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("truncate", "templateAttachmentTitle-VZHKy2"),
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("truncate", "templateAttachmentDesc-dkfgv7"),
          children: n
        })]
      }), reactJsxRuntimeCoreReexport.jsx(closeRtlIconComponent.CloseRtlIcon, {
        className: s("close-IYDKVR", "absolute top-0 right-0 cursor-pointer !text-14 p-2"),
        onClick: () => i == null ? undefined : i(),
        "data-testid": "message_nested_content_file_delete"
      })]
    });
  };
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var messageStatusMapper = require("message-status-mapper") /*id: 308885*/;
  var statusConstants = require("status-constants") /*id: 356183*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let k = require("react-suspense-wrapper") /*id: 944055*/.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("attachment-node-ui") /*id: 86558*/.then(require.bind(require, "attachment-node-ui") /*id: 304762*/).then(e => {
      let {
        AttachmentNodeUI: t
      } = e;
      return {
        default: t
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  let x = new Map([[receiveMessageBoxStatus.messageBoxStatus.Normal, statusConstants.statusTypes.Success], [receiveMessageBoxStatus.messageBoxStatus.Uploading, statusConstants.statusTypes.Processing], [receiveMessageBoxStatus.messageBoxStatus.Retry, statusConstants.statusTypes.Failed]]);
  let S = e => {
    let {
      className: t,
      fileName: r,
      size: n,
      status: i,
      uploadPercent: l,
      onReUpload: o,
      onReParse: u,
      onDelete: c,
      parseState: p = messagingConstants.parseState.ParseState_Default,
      parsedCharCount: v,
      parsePercent: w,
      showDeleteAlways: S,
      overrideCustomSubTitle: T
    } = e;
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let C = i18nextLanguageGetter.getCurrentLanguage();
    let E = p === messagingConstants.parseState.ParseState_Failed;
    let P = messageBoxTypeCheckers.isRetryStatus(i);
    let {
      Tooltip: N = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    return reactJsxRuntimeCoreReexport.jsx(k, {
      className: s(t, "py-8 pl-8 rounded-10"),
      fileName: r,
      fileKey: r,
      viewOnly: !E && !P,
      bytes: n,
      uploadPercent: l,
      parsePercent: w,
      zh: !!C && i18nLanguageStorageUtils.isChineseLanguage(C),
      Tooltip: N,
      uploadStatus: x.get(i),
      parseStatus: messageStatusMapper.getProcessStatus(p),
      showRef: false,
      showZoom: false,
      charCount: v,
      i18nConfig: {
        label_token_count_largenumber: R("label_token_count_largenumber"),
        label_token_count_smallnumber: R("label_token_count_smallnumber"),
        skill_copliotreading_not_read: R("skill_copliotreading_not_read"),
        skill_copliotreading_partial_read: R("skill_copliotreading_partial_read"),
        skill_copliotreading_read: R("skill_copliotreading_read"),
        skill_copliotreading_read_percentage: R("skill_copliotreading_read_percentage"),
        skill_read_pic_untitled: R("skill_read_pic_untitled"),
        skill_read_parsing_file: R("skill_read_parsing_file"),
        reference_modal_reference_item_status_uploading: R("reference_modal_reference_item_status_uploading"),
        chat_list_subtitle_link: R("chat_list_subtitle_link"),
        file_upload_error: R("file_upload_error"),
        file_parse_error: R("file_parse_error"),
        files_parse_click_retry: R("files_parse_click_retry"),
        skill_copliotreading_open: R("skill_copliotreading_open"),
        skill_copliotreading_download: R("skill_copliotreading_download"),
        skill_copliotreading_open_new_tab: R("skill_copliotreading_open_new_tab")
      },
      showDelete: true,
      showDeleteAlways: S || messageBoxTypeCheckers.isUploadingStatus(i),
      onClickReParse: u,
      onClickReUpload: o,
      onClickDelete: c,
      customSubTitle: T
    });
  };
  var aiPptTemplateStore = require("ai-ppt-template-store") /*id: 603769*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  function C(e, t, r) {
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let s = reactCoreLibraryReexport.useRef({
      ref: t
    });
    s.current.ref = t;
    let u = reactCoreLibraryReexport.useRef({
      ref: r
    });
    u.current.ref = r;
    let c = reactCoreLibraryReexport.useMemo(() => !e || aiPptTemplateStore.isAutoRecCard(e) ? [] : [{
      type: "file",
      fileName: e.title || "",
      fileKey: e.id || "",
      uploadPercent: 1,
      status: receiveMessageBoxStatus.messageBoxStatus.Normal
    }], [e]);
    let {
      customTemplateUploadId: f
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      customTemplateUploadId: e.customTemplateUploadId
    }));
    return {
      templateAttach: c,
      renderAttachmentBox: reactCoreLibraryReexport.useCallback(t => {
        let {
          id: r = "",
          title: n = ""
        } = e || {};
        if (t.fileKey === r && t.fileName === n) {
          return reactJsxRuntimeCoreReexport.jsx(p, {
            templateName: n || "",
            templateDesc: o("slides_template_tag_reference", "风格参考"),
            onDelete: () => {
              var e;
              var t;
              if ((e = (t = s.current).ref) !== null && e !== undefined) {
                e.call(t);
              }
            }
          });
        } else if (t.localKey === f) {
          return reactJsxRuntimeCoreReexport.jsx(S, {
            ...t,
            onDelete: () => {
              var e;
              var t;
              if ((e = (t = u.current).ref) === null || e === undefined) {
                return undefined;
              } else {
                return e.call(t);
              }
            },
            overrideCustomSubTitle: o("slides_template_tag_reference", "风格参考")
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx(attachmentNodeUiWrapper.AttachmentNodeComponent, {
            ...t
          });
        }
      }, [e, f])
    };
  }
  require.d(exports, {
    useTemplateAttach: function () {
      return C;
    }
  });
}