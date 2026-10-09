// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'o' to 'refContentWrapperComponent'
// - Resolved require(15351) to 'ref-content-wrapper-component'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 'c' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'd' to 'skillMessageBoxDataExtractor'
// - Resolved require(179396) to 'skill-message-box-data-extractor'
// - Renamed variable 'u' to 'businessStatusConstants'
// - Resolved require(215311) to 'business-status-constants'
// - Renamed variable 'p' to 'imageBoxGridComponent'
// - Resolved require(750824) to 'image-box-grid-component'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'h' to 'reactUseChangedRef'
// - Resolved require(284850) to 'react-use-changed-ref'
// - Renamed variable 'g' to 'alertCircleRtlIcon'
// - Resolved require(397758) to 'alert-circle-rtl-icon'
// - Renamed variable '_' to 'threadImageItem'
// - Resolved require(367969) to 'thread-image-item'
// - Renamed variable 'b' to 'threadSkillMessageView'
// - Resolved require(88008) to 'thread-skill-message-view'
// - Renamed variable 'k' to 'threadMessageStyles'
// - Resolved require(717766) to 'thread-message-styles'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'S' to 'chatSkillContentSymbol'
// - Resolved require(321526) to 'chat-skill-content-symbol'
// - Updated imported property 'm9' to 'reviewState' (module 292449)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useChangedRef' (module 284850)
// - Updated imported property 'A' to 'extractSkillBoxData' (module 179396)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'OT' to 'messageActions' (module 215311)
// - Updated imported property 'KD' to 'MessageContentView' (module 88008)
// - Updated imported property 's' to 'RefContentWrapper' (module 15351)
// - Updated imported property 'Z' to 'threadClasses' (module 717766)
// - Updated imported property 'Z' to 'AlertCircleIcon' (module 397758)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'E' to 'ImageBoxGrid' (module 750824)
// - Updated imported property 'Q' to 'ThreadImageItem' (module 367969)
// - Updated imported property 's' to 'sendOldVarSymbol' (module 321526)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 834962
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillMessageBoxDataExtractor = require("skill-message-box-data-extractor") /*id: 179396*/;
  var businessStatusConstants = require("business-status-constants") /*id: 215311*/;
  var imageBoxGridComponent = require("image-box-grid-component") /*id: 750824*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var threadImageItem = require("thread-image-item") /*id: 367969*/;
  var threadSkillMessageView = require("thread-skill-message-view") /*id: 88008*/;
  var threadMessageStyles = require("thread-message-styles") /*id: 717766*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    SkillType: x
  } = chatAppEnums;
  let w = e => {
    var n;
    var w;
    let {
      message: R
    } = e;
    let $ = {};
    let C = [];
    if (messageContentTypeAndStatusChecker.NB8(R) && (R == null ? undefined : R.content_obj)) {
      $.url = (n = R.content_obj) === null || n === undefined ? undefined : n.edit_image?.edit_image_url;
      $.review_state = ((w = R.content_obj) === null || w === undefined ? undefined : w.edit_image?.edit_image_review_status) || messagingConstants.reviewState.ReviewState_Processing;
      try {
        let e = R == null ? undefined : R.attachments;
        if (e) {
          C = e.map(e => {
            return {
              url: e.url || "",
              refer_types: e.extra?.refer_types || "",
              review_state: (e == null ? undefined : e.file_review_state) || messagingConstants.reviewState.ReviewState_Processing
            };
          });
        }
      } catch (e) {
        C = [];
      }
    }
    let T = reactCoreLibraryReexport.useMemo(() => (C == null ? undefined : C.map(e => {
      return e.url ?? "";
    })) || [], [C]);
    let {
      latestFileUrls: j
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: T
    });
    let N = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillData: E,
      skillTagArr: P,
      messageTextContent: I
    } = reactUseChangedRef.useChangedRef((() => {
      if (!messageContentTypeAndStatusChecker.G7Q(R)) {
        return null;
      }
      let e = skillMessageBoxDataExtractor.extractSkillBoxData(R);
      let t = [e == null ? undefined : e.template, e == null ? undefined : e.tone, e == null ? undefined : e.length, e == null ? undefined : e.language, e == null ? undefined : e.style];
      return {
        skillData: e,
        skillTagArr: t,
        messageTextContent: messageContentUtils.formatMessage(R, false, N("chat_unsupported_message_type"))
      };
    })(), deepEqualUtil_1.deepEqual) ?? {};
    if ((E == null ? undefined : E.skillType) === x.WriteAssistant) {
      if ((E == null ? undefined : E.templateType) === businessStatusConstants.messageActions.Compose) {
        return reactJsxRuntimeCoreReexport.jsx(threadSkillMessageView.MessageContentView, {
          skillTagArr: P,
          isNarrow: false,
          content: `${N("skill_writing_mode_compose")} ${E.template} ${N("skill_writing_sent_message_conjunction_word")} "${I}"`
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(threadSkillMessageView.MessageContentView, {
          skillTagArr: P,
          isNarrow: false,
          content: `${N("skill_writing_mode_reply")} ${E.template} ${N("skill_writing_sent_message_conjunction_word")} "${I}"`,
          originalText: E.originalText
        });
      }
    } else if ((E == null ? undefined : E.skillType) === x.ImageGeneration) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col items-end",
        children: [($ == null ? undefined : $.url) && reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
          className: "mb-8",
          text: "",
          icon: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: $.review_state === messagingConstants.reviewState.ReviewState_NotCompliant ? reactJsxRuntimeCoreReexport.jsxs("div", {
              className: threadMessageStyles.threadClasses["ref-img-not-safety"],
              children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
                className: "text-32 text-s-color-text-quaternary"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: threadMessageStyles.threadClasses["not-safety-text"],
                children: N("msg_error_image_notCompliant")
              })]
            }) : reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl($ == null ? undefined : $.url, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHSXllR3RN$0Zwb1kyMXNhRmx0Z%d4T$dFNXlZ$mQ0-zB4WFRuWmlibEpzWW01%mRtTXlhR2hq-lZWM$pFaE9ORmxZ%201a1dFMDk"
              }),
              style: {
                height: "28px",
                width: "28px",
                borderRadius: "4px",
                objectFit: "cover"
              }
            })
          })
        }), (C == null ? undefined : C.length) > 1 && reactJsxRuntimeCoreReexport.jsx(imageBoxGridComponent.ImageBoxGrid, {
          className: threadMessageStyles.threadClasses["ref-image-list"],
          gridColumns: Math.min(C.length, 3),
          imgList: j,
          children: (e, t) => {
            return reactJsxRuntimeCoreReexport.jsx(threadImageItem.ThreadImageItem, {
              url: e,
              reviewState: C[t]?.review_state,
              isMultiple: true
            }, e);
          }
        }), (C == null ? undefined : C.length) === 1 && reactJsxRuntimeCoreReexport.jsx(threadImageItem.ThreadImageItem, {
          url: j[0],
          reviewState: C[0].review_state,
          isMultiple: false
        }), reactJsxRuntimeCoreReexport.jsx(threadSkillMessageView.MessageContentView, {
          skillType: E == null ? undefined : E.skillType,
          skillTagArr: P,
          isNarrow: false,
          content: I ?? ""
        })]
      });
    } else {
      return null;
    }
  };
  var chatSkillContentSymbol = require("chat-skill-content-symbol") /*id: 321526*/;
  function R(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class $ {
    constructor() {
      R(this, "pluginIdentifier", chatSkillContentSymbol.sendOldVarSymbol);
      R(this, "Content", w);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendOldVariableSkillMessageBoxPlugin: function () {
      return $;
    }
  });
}