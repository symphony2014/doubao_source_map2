// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'i' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'a' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'o' to 'businessInputSubmit'
// - Resolved require(540748) to 'business-input-submit'
// - Renamed variable 'l' to 'videoSkillStore'
// - Resolved require(297271) to 'video-skill-store'
// - Renamed variable 's' to 'imageConfigConstants_1'
// - Resolved require(620790) to 'image-config-constants_1'
// - Renamed variable 'u' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'd' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'c' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'videoSkillChatInput'
// - Resolved require(855546) to 'video-skill-chat-input'
// - Renamed variable 'm' to 'checkVideoUploadMultiplePic'
// - Resolved require(472580) to 'check-video-upload-multiple-pic'
// - Renamed variable 'h' to 'videoEditorManager'
// - Resolved require(533338) to 'video-editor-manager'
// - Renamed variable 'g' to 'skillGuidanceInputStyles'
// - Resolved require(917704) to 'skill-guidance-input-styles'
// - Renamed variable 'v' to 'videoGenerationAttachment_1'
// - Resolved require(642912) to 'video-generation-attachment_1'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'SW' to 'setActionValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'dI' to 'useVideoSkillStore' (module 297271)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'U' to 'useVideoSkillChat' (module 855546)
// - Updated imported property 'f' to 'checkVideoUploadMultiplePic' (module 472580)
// - Updated imported property 'S' to 'useVideoFileUpload' (module 642912)
// - Updated imported property 'Z' to 'guidanceInputStyles' (module 917704)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'wF' to 'getOptionValue' (module 540748)
// - Updated imported property 'Fd' to 'getRatioValue' (module 540748)
// - Updated imported property 'QB' to 'InputKeys' (module 540748)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// - Updated imported property 'n' to 'videoEditorManager' (module 533338)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'UC' to 'supportedFormats' (module 620790)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 814101
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var businessInputSubmit = require("business-input-submit") /*id: 540748*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  var imageConfigConstants_1 = require("image-config-constants_1") /*id: 620790*/;
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var videoSkillChatInput = require("video-skill-chat-input") /*id: 855546*/;
  var checkVideoUploadMultiplePic = require("check-video-upload-multiple-pic") /*id: 472580*/;
  var videoEditorManager = require("video-editor-manager") /*id: 533338*/;
  var skillGuidanceInputStyles = require("skill-guidance-input-styles") /*id: 917704*/;
  var videoGenerationAttachment_1 = require("video-generation-attachment_1") /*id: 642912*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      disabled: t,
      chatId: r,
      skill: _,
      trackParams: b,
      handleKeyDown: x,
      controllerRef: w,
      className: k,
      onChange: E,
      onBlur: C
    } = e;
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let T = chatInputStoreHelpers.useEditorValue();
    let [P] = videoSkillStore.useVideoSkillStore(e => [e.inputOptionsMap], deepEqualityUtil_1.isDeepEqual);
    let {
      chatInputRef: I
    } = chatRefsContext.useChatRefs();
    videoSkillChatInput.useVideoSkillChat(b);
    let A = checkVideoUploadMultiplePic.checkVideoUploadMultiplePic();
    let {
      submitFiles: j
    } = videoGenerationAttachment_1.useVideoFileUpload({
      chatId: r,
      skill: _
    });
    let O = (e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: skillGuidanceInputStyles.guidanceInputStyles["custom-select-item"],
      children: [e && reactJsxRuntimeCoreReexport.jsx("img", {
        className: skillGuidanceInputStyles.guidanceInputStyles["ratio-image"],
        src: xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RETkNjMlJ-WkhCaWJrMTJZ$mMxZDJSW$$-%mFWelZ1W$ZjMWJFd3pRbmxpTWp*M1pFTXhiRnBI-kRCa%0wbDFaRWhPTkZsW$NtNWtXRTA5"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: skillGuidanceInputStyles.guidanceInputStyles["ratio-text"],
        children: t
      })]
    });
    let N = e => {
      let t = businessInputSubmit.getOptionValue(businessInputSubmit.getRatioValue(e), P.ratio);
      chatInputStoreHelpers.setActionValue("video-ratio")(t);
    };
    let {
      renderEditor: L
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: t,
        value: T,
        onChange: e => {
          chatInputStoreHelpers.setEditorValue(e);
          videoEditorManager.videoEditorManager.emit("contentChange", e);
          N(e);
        },
        onKeyDown: e => {
          if (x != null) {
            x(e);
          }
        },
        placeholder: S("skill_video_intput_placeholder_default"),
        autoComplete: "off",
        onFocus: () => {
          var e;
          if (I == null) {
            return undefined;
          } else if ((e = I.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.focus();
          }
        },
        onBlur: e => {
          var t;
          if (I != null && (t = I.current) !== null && t !== undefined) {
            t.blur();
          }
          if (C != null) {
            C(e);
          }
        },
        renderSelectOptionItem: e => {
          let {
            key: t,
            item: r,
            defaultWrapper: n
          } = e;
          if (t === businessInputSubmit.InputKeys.RATIO) {
            let {
              label: e,
              image: t
            } = r;
            return n(O(t ?? "", e));
          }
        },
        onPaste: e => {
          let {
            files: t
          } = e.clipboardData;
          if (!isEmptyUtil.isEmpty(t)) {
            var r;
            let n = (A ? [...t] : [t[0]]).filter(e => {
              let t = e.type.split("/")[1];
              return imageConfigConstants_1.supportedFormats.includes(t);
            });
            if (!n.length) {
              return;
            }
            if (e != null && (r = e.preventDefault) !== null && r !== undefined) {
              r.call(e);
            }
            j(n);
          }
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: _,
      onControllerChange: e => {
        videoEditorManager.videoEditorManager.bindVideoEditorRef(e);
        if (w) {
          w.current = {
            focus: t => e == null ? undefined : e.focus(t),
            blur: () => e == null ? undefined : e.blur()
          };
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: L({
        className: k,
        onChange: E
      })
    });
  };
  class b {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: _,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = _;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    VideoGenerationPromptEditorPlugin: function () {
      return b;
    }
  });
}