// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KD' to 'skillMessageContent'
// - Renamed export 'rw' to 'skillMessageBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 173602
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillMessageBoxDataExtractor = require("skill-message-box-data-extractor") /*id: 179396*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var imageBoxGridComponent = require("image-box-grid-component") /*id: 750824*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var tagAvatarComponent = require("tag-avatar-component") /*id: 406406*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var cssClassNameMapping = require("css-class-name-mapping") /*id: 891700*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = e => {
    let {
      skillTagArr: t = [],
      content: n,
      originalText: i,
      isNarrow: r,
      textContentBorderLess: o = false
    } = e;
    let a = t.every(e => isNullishCheck.isNil(e) || e === "");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("flex flex-col gap-8"),
      children: [o ? reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
        text: n
      }) : reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: n
      }), i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            border-0 border-t border-solid border-[rgba(0,0,0,0.12)] pt-8 pr-8
            pb-2 pl-0
          `,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("border-solid border-0 border-l-2 border-[rgba(0,0,0,0.12)] pl-8 font-[400] whitespace-break-spaces ml-2", `${r ? "text-[12px] leading-14" : "text-[14px] leading-18"}`),
          children: i
        })
      }) : null, !a && reactJsxRuntimeCoreReexport.jsx(spaceLayoutComponent.Space, {
        wrap: true,
        children: t.map(e => e && reactJsxRuntimeCoreReexport.jsx(tagAvatarComponent.Tag, {
          className: s("flex bg-[rgba(0,0,0,0.13)] rounded-6 pt-4 pr-8 pb-4 pl-8 gap-10", `${r ? "text-[12px] leading-14" : "text-[14px] leading-18"}`),
          "data-testid": "message_tag",
          children: e
        }, e))
      })]
    });
  };
  let N = e => {
    let {
      message: a
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let S = responsiveScreenHooks.useIsNarrowScreen();
    let C = safeJsonUtils.safeParse(a == null ? undefined : a.ext?.samantha_context, {});
    let N = (C == null ? undefined : C.query_context) ?? {};
    let {
      skillTagArr: j,
      messageTextContent: I,
      refImgs: Z,
      refImgList: O = []
    } = chatStoreManager.getStore("attachmentUploadStore")(e => {
      let t = [];
      let n = [];
      let i = Object.values(e.preprocessTaskMap);
      if (messageContentTypeAndStatusChecker.EkH(a) && (a == null ? undefined : a.content_obj)) {
        let e = a.attachments;
        if (e) {
          t = e.map(e => {
            var r;
            let o = i.findIndex(t => t.key === e.key || t.localKey === e.key);
            let l = o !== -1 ? i[o] : undefined;
            return {
              url: (l == null ? undefined : l.blobUrl) || e.url || "",
              refer_types: e.extra?.refer_types || "",
              review_state: (N == null ? undefined : (r = N.ref_images) === null || r === undefined ? undefined : r[0]?.review_status) || (l == null ? undefined : l.reviewState) || (e == null ? undefined : e.file_review_state) || messagingConstants.reviewState.ReviewState_Processing
            };
          });
          n = e.map(e => ({
            key: e.key || "",
            feedback: "",
            request_id: "",
            description: "",
            image_thumb_formats: {},
            image_thumb_ori_formats: {}
          }));
        }
      }
      if (!a) {
        return null;
      }
      let r = skillMessageBoxDataExtractor.extractSkillBoxData(a);
      let o = [r == null ? undefined : r.template, r == null ? undefined : r.tone, r == null ? undefined : r.length, r == null ? undefined : r.language, r == null ? undefined : r.style];
      let l = messageContentUtils.formatMessage(a, undefined, u("chat_unsupported_message_type"));
      let s = u("skill_video_message_prefix");
      return {
        skillTagArr: o,
        messageTextContent: l = (l == null ? undefined : l.includes(s)) ? l : `${s}${l ? "：" : ""}${l}`,
        refImgs: t,
        refImgList: n
      };
    }, deepEqualityUtil_1.isDeepEqual) ?? {};
    let P = reactCoreLibraryReexport.useMemo(() => (Z == null ? undefined : Z.map(e => e.url || "")) || [], [Z]);
    let {
      latestFileUrls: M
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: P
    });
    let {
      imageEventCallbacks: {
        onImageClick: W
      },
      renderImagePreview: F
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      conversationId: a.conversation_id,
      messageId: String(a == null ? undefined : a.message_id),
      chatType: chatSkillPinTypeDeterminer.determineSkillPinType("", a.conversation_id),
      conversationType: chatConversationSelectorUtils.getConversationType(a.conversation_id) || "",
      botId: chatConversationBotId.getConversationBotId(a.conversation_id) || ""
    }, O, chatCoreConstants.MessageActions.Original);
    let L = Z && Z.length > 1;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-end",
      children: [Z && Z.length === 1 && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: Z[0].review_state === messagingConstants.reviewState.ReviewState_NotCompliant ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: cssClassNameMapping.classNameMapping["ref-img-not-safety"],
          children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
            className: "p-4 text-24 text-s-color-text-quaternary"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: cssClassNameMapping.classNameMapping["not-safety-text"],
            children: u("msg_error_image_notCompliant")
          })]
        }) : reactJsxRuntimeCoreReexport.jsx("img", {
          onClick: e => {
            return W(e, Z[0].url ?? "");
          },
          src: xssContentSanitizer.sanitizeUrl(M[0], null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$ucE1NMD$zWW0x%mRH%nRiR3Rh$npoMFl6SjBjR0pIZDNSa$-xWjZZekpH-mxw$E1Xc*lNal$3$2xjM%1Fd3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
          }),
          className: s([cssClassNameMapping.classNameMapping["ref-single-image"], "cursor-pointer"])
        }, Z[0].url)
      }), L && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
            flex max-w-450 min-w-0 flex-col items-start rounded-s-radius-s
            bg-s-color-bg-trans px-16 py-9 text-s-color-text-secondary
            s-font-base
            sm:text-15
          `,
        children: [reactJsxRuntimeCoreReexport.jsx(imageBoxGridComponent.ImageBoxGrid, {
          gridColumns: Math.min(Z.length, 3),
          imgList: M,
          className: "mb-8 w-auto!",
          children: (e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            children: Z[t].review_state === messagingConstants.reviewState.ReviewState_NotCompliant ? reactJsxRuntimeCoreReexport.jsxs("div", {
              className: s([cssClassNameMapping.classNameMapping["ref-img-not-safety"], cssClassNameMapping.classNameMapping["is-multiple"]]),
              children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
                className: "p-4 text-24 text-s-color-text-quaternary"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: cssClassNameMapping.classNameMapping["not-safety-text"],
                children: u("msg_error_image_notCompliant")
              })]
            }) : reactJsxRuntimeCoreReexport.jsx("img", {
              onClick: e => {
                return W(e, Z[t].url ?? "");
              },
              src: xssContentSanitizer.sanitizeUrl(M[t], null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$ucE1NMD$zWW0x%mRH%nRiR3Rh$npoMFl6SjBjR0pIZDNSa$-xWjZZekpH-mxw$E1Xc*lNal$3$2xjM%1Fd3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
              }),
              className: s([cssClassNameMapping.classNameMapping["ref-multi-image"], "cursor-pointer"])
            }, Z[t].url)
          }, e)
        }), reactJsxRuntimeCoreReexport.jsx(T, {
          skillTagArr: j,
          isNarrow: S,
          content: I ?? "",
          textContentBorderLess: true
        })]
      }), !L && reactJsxRuntimeCoreReexport.jsx(T, {
        skillTagArr: j,
        isNarrow: S,
        content: I ?? ""
      }), F()]
    });
  };
  require.d(exports, {
    skillMessageContent: function () {
      return T;
    },
    skillMessageBox: function () {
      return N;
    }
  });
}