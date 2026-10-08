// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'ChatMessageRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 351464
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var chatFileOpenHandler = require("chat-file-open-handler") /*id: 145253*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var urlValidator = require("url-validator") /*id: 714614*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactCoreLibraryReexport.createContext(null);
  let h = () => {
    let t = reactCoreLibraryReexport.useContext(f)?.onMessageReferenceClick;
    let n = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let {
      openFileByKey: l,
      openFileByLink: r
    } = chatFileOpenHandler.createChatFileHandler({
      chatViewConfig: n
    });
    return {
      onMessageReferenceClick: reactFunctionMemoHook.useMemoizedCallback(e => {
        if (t) {
          return t({
            message: e
          });
        }
        if (!e) {
          return;
        }
        let a = e.message_id;
        let c = e.content_obj?.hover_position || e.ext?.pdf_hover_position;
        let {
          page: d,
          area: m,
          pdfKey: v
        } = safeJsonUtils.safeParse(c, {});
        if (!isNumberUtil.isNumber(d) || !Array.isArray(m) || !v) {
          return;
        }
        let f = {
          messageId: a,
          pdf: {
            anchorPage: d,
            highlightArea: [{
              page: d ?? 0,
              area: m,
              scrollIntoView: true
            }]
          }
        };
        let h = {
          messageId: a,
          skillType: e.skill?.skill_type_no_default,
          entranceType: "click_send_ref_content",
          collectionId: v
        };
        if (urlValidator.isValidUrl(v)) {
          if (r != null) {
            r(v, {
              ...f,
              attchmentType: "pdf"
            }, h);
          }
        } else if (l != null) {
          l(v, "PDF", f, h);
        }
      })
    };
  };
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var copilotLinkReadFailView = require("copilot-link-read-fail-view") /*id: 303262*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillMessageBoxDataExtractor = require("skill-message-box-data-extractor") /*id: 179396*/;
  var chatInputRefUtils = require("chat-input-ref-utils") /*id: 859718*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var lazyFileIconWrapper = require("lazy-file-icon-wrapper") /*id: 312448*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var cjkAwareConcat = require("cjk-aware-concat") /*id: 234823*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var extractHttpsUrls = require("extract-https-urls") /*id: 346091*/;
  let F = e => {
    var i;
    let {
      message: s,
      ignoreTemplateKey: c
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onMessageReferenceClick: m
    } = h();
    let {
      bubbleText: f,
      refContents: F,
      pdfHoverPosition: M
    } = reactUseChangedRef.useChangedRef((() => {
      var o;
      var a;
      var m;
      var v;
      let f = (s == null ? undefined : s.content_obj?.hover_position) || (s == null ? undefined : s.ext?.pdf_hover_position);
      if (!messageContentTypeAndStatusChecker.G7Q(s)) {
        return {
          bubbleText: u("chat_unsupported_message_type"),
          refContents: [],
          pdfHoverPosition: f
        };
      }
      let h = messageContentUtils.formatMessage(s, false, u("chat_unsupported_message_type")) || u("chat_unsupported_message_type");
      let g = skillMessageBoxDataExtractor.extractSkillBoxData(s);
      let _ = safeJsonUtils.safeParse(s.ext?.reference_content, []);
      let b = arrayIsArrayUtil.isArray(_) && !isEmptyUtil.isEmpty(_) ? _ : [];
      let y = h;
      if (g.skillType === chatAppEnums.SkillType.ReadPDF && g.templateKey && (g.templateKey === ((v = chatStoreManager.getStore("chatInputStore").getState().skills) === null || v === undefined ? undefined : (m = v.input_config) === null || m === undefined ? undefined : (a = m.pdf_assistant) === null || a === undefined ? undefined : (o = a.pdf_hover_templates) === null || o === undefined ? undefined : o.find(e => e.skill_type === chatAppEnums.SkillType.ReadPDF.toString())?.key) || c)) {
        y = u("skill_copliotreading_explain");
      } else if (g.skillType === chatAppEnums.SkillType.Translate) {
        let e = g == null ? undefined : g.targetLang;
        b = [{
          type: "text",
          text: h
        }];
        y = cjkAwareConcat.smartConcat(u("flow_web_ext_action_translate_to"), e);
      } else if (g.skillType === chatAppEnums.SkillType.Search) {
        b = [{
          type: "text",
          text: h
        }];
        y = u("search_about");
      }
      return {
        bubbleText: y,
        refContents: b,
        pdfHoverPosition: f,
        attachments: s.attachments
      };
    })(), deepEqualUtil_1.deepEqual);
    let A = F.map(e => e.type === "text" ? undefined : chatInputRefUtils.getFileDisplayName(e)).filter(infraUtilFunctions.isDefined);
    let Z = F.map(e => e.type === "text" ? e.text : undefined).filter(infraUtilFunctions.isDefined);
    let B = isEmptyUtil.isEmpty(Z) ? isEmptyUtil.isEmpty(A) ? "" : chatInputRefUtils.getFileListSummary(A, u) : chatInputRefUtils.joinTruthyStrings(Z);
    let O = A[0];
    let D = F[0]?.type;
    let L = extractHttpsUrls.extractHttpsUrls(f || "");
    let z = s ? (i = chatMessageReadStatusMapper.mapFileReadStatuses({
      conversationId: s.conversation_id || "",
      messageId: s.message_id || ""
    }, L)) === null || i === undefined ? undefined : i[0]?.parseSuccess : undefined;
    let {
      ext: V
    } = urlExtensionDetectionUtils.useUrlExtension(D === "link" && O ? O : "", fileTypeDetectionUtils.imageExtensions);
    let H = D === "link" ? V : getFileExtension.getFileExtension(O || "");
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          flex w-fit max-w-450 min-w-0 flex-col items-start gap-8
          rounded-s-radius-s bg-s-color-bg-trans px-16 py-9
          text-s-color-text-secondary s-font-base
          sm:text-15
        `,
        children: [!isEmptyUtil.isEmpty(F) && !!B && reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
          className: "mb-8 max-w-full",
          text: B,
          onClickClassName: "hover:bg-s-color-bg-trans-primary active:bg-s-color-bg-trans-primary cursor-pointer",
          icon: !isUndefinedCheck.isUndefined(O) && reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper.lazyFileIcon, {
            className: "ml-4 shrink-0 text-20",
            ext: H,
            link: D === "link"
          }),
          allowMultiLine: F.every(e => e.type === "text"),
          onClick: M && s ? () => m(s) : undefined
        }), reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
          text: f
        })]
      }), z === false && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-28 w-[100vw] max-w-full self-start",
        children: reactJsxRuntimeCoreReexport.jsx(copilotLinkReadFailView.LinkReadFailView, {})
      })]
    });
  };
  require.d(exports, {
    ChatMessageRenderer: function () {
      return F;
    }
  });
}