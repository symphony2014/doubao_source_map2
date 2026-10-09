// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'upgradeFeatureGateChecker'
// - Resolved require(279230) to 'upgrade-feature-gate-checker'
// - Renamed variable 'a' to 'queryContextStore'
// - Resolved require(988837) to 'query-context-store'
// - Renamed variable 'o' to 'imageConfigConstants'
// - Resolved require(362452) to 'image-config-constants'
// - Renamed variable 'l' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 's' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'c' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'p' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'f' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'm' to 'chatToastFactoryHook'
// - Resolved require(219785) to 'chat-toast-factory-hook'
// - Renamed variable 'h' to 'imageCompressionUtils_1'
// - Resolved require(532036) to 'image-compression-utils_1'
// - Renamed variable 'g' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'y' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable '_' to 'chatFieldProcessor'
// - Resolved require(880637) to 'chat-field-processor'
// - Renamed variable 'b' to 'componentStylesMap'
// - Resolved require(920282) to 'component-styles-map'
// - Renamed variable 'x' to 'asyncSkillChatInput_3'
// - Resolved require(362884) to 'async-skill-chat-input_3'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'k' to 'shouldShowUpgrade' (module 279230)
// - Updated imported property 'qX' to 'queryContextStore' (module 988837)
// - Updated imported property 'Ax' to 'useLauncherConfig' (module 317711)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'p' to 'useToastFactory' (module 219785)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'JM' to 'configLimit' (module 362452)
// - Updated imported property 'ND' to 'imageExtensions' (module 362452)
// - Updated imported property 'E' to 'getMaxSizeLimit' (module 532036)
// - Updated imported property 'aj' to 'validateImage' (module 880637)
// - Updated imported property 'QB' to 'fieldConstants' (module 880637)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// - Updated imported property 'y' to 'imageEditorManager' (module 362884)
// - Updated imported property 'Z' to 'classNames' (module 920282)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 152628
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var upgradeFeatureGateChecker = require("upgrade-feature-gate-checker") /*id: 279230*/;
  var queryContextStore = require("query-context-store") /*id: 988837*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var imageCompressionUtils_1 = require("image-compression-utils_1") /*id: 532036*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatFieldProcessor = require("chat-field-processor") /*id: 880637*/;
  var componentStylesMap = require("component-styles-map") /*id: 920282*/;
  var asyncSkillChatInput_3 = require("async-skill-chat-input_3") /*id: 362884*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    let {
      className: t,
      chatId: r,
      onChange: k,
      onBlur: E,
      controllerRef: C,
      handleKeyDown: S,
      skill: T,
      value: P
    } = e;
    let I = i18nTranslationUtils.useTranslationWithFallback();
    let A = P ?? chatInputStoreHelpers.useEditorValue();
    let {
      chatInputRef: j
    } = chatRefsContext.useChatRefs();
    let O = reactCoreLibraryReexport.useCallback(e => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "image_prompt_keydown",
        meta: {
          keyCode: e.keyCode,
          key: e.key
        }
      });
      if (S != null) {
        S(e);
      }
    }, [S]);
    let N = upgradeFeatureGateChecker.shouldShowUpgrade();
    let [L, R] = queryContextStore.queryContextStore(e => [e.queryContext, e.onResetQueryContext]);
    let {
      inputAggregateList: M
    } = chatLauncherConfigHooks.useLauncherConfig();
    let D = M == null ? undefined : M.includes(String(chatAppEnums.SkillType.ImageGeneration));
    let F = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: r,
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let {
      addAttachment: $
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: r,
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let Z = chatToastFactoryHook.useToastFactory();
    let U = reactCoreLibraryReexport.useMemo(() => F.length ? N ? I("image_inputBox_placeholder_useImage") : I("image_chat_inputField_placeholder") : (L == null ? undefined : L.edit_image_url) ? I("skill_image_intput_placeholder_quote") : N ? I("creation_mainPage_inputBox_placeholder") : I("skill_image_intput_placeholder"), [F.length, N, L == null ? undefined : L.edit_image_url, I]);
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "image_prompt_plugin_debug",
        meta: {
          attachmentCount: F.length,
          hasEditImageUrl: !!(L == null ? undefined : L.edit_image_url),
          isNewAgent: N,
          placeholder: U
        }
      });
    }, [F.length, N, U, L == null ? undefined : L.edit_image_url]);
    let B = reactCoreLibraryReexport.useCallback(async e => {
      if (e.length > 0) {
        if (D && r) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.clearRefContents(r);
            }
          });
        } else if (L == null ? undefined : L.edit_image_url) {
          R();
        }
      }
      let t = imageConfigConstants.configLimit - F.length;
      if (t <= 0) {
        Z.error(I("image_upload_toast_maxNum", {
          s_number: imageConfigConstants.configLimit
        }));
        return;
      }
      for (let r of e) {
        var n;
        if (t <= 0) {
          Z.error(I("image_upload_toast_maxNum", {
            s_number: imageConfigConstants.configLimit
          }));
          return;
        }
        let e = r.type.split("/")[1];
        if (!imageConfigConstants.imageExtensions.includes(e)) {
          Z.error(I("image_upload_toast_formatFiltered"));
          continue;
        }
        let i = await imageCompressionUtils_1.compressor(r);
        if (i.size > imageCompressionUtils_1.getMaxSizeLimit()) {
          Z.error(I("skill_image_intput_reference_alert_format"));
          continue;
        }
        let a = false;
        try {
          a = await chatFieldProcessor.validateImage({
            file: i
          });
        } catch {
          a = false;
        }
        if (!a) {
          Z.error(I("skill_image_intput_reference_alert_format"));
          continue;
        }
        await $({
          file: i,
          type: "image",
          disablePreprocess: true,
          ctx: {
            conversationId: "",
            chatType: "other_default",
            skillType: (T == null ? undefined : T.skill_type) || 0,
            skillId: (T == null ? undefined : (n = T.skill_type) === null || n === undefined ? undefined : n.toString()) || "",
            uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_IMAGE_REFERENCE,
            botId: "",
            from: "image_input_prompt",
            uploadWay: "paste",
            uploadCollectionWay: "single",
            uploadId: "",
            uploadCollectionId: `${Date.now()}`,
            uploadMethod: "paste"
          }
        });
        t--;
      }
    }, [$, F.length, r, R, L == null ? undefined : L.edit_image_url, I, Z, D, T == null ? undefined : T.skill_type]);
    let {
      renderEditor: G
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: false,
        value: A,
        placeholder: U,
        autoComplete: "off",
        onKeyDown: O,
        onFocus: () => {
          var e;
          if (j == null) {
            return undefined;
          } else if ((e = j.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.focus();
          }
        },
        onBlur: e => {
          var t;
          if (j != null && (t = j.current) !== null && t !== undefined) {
            t.blur();
          }
          if (E != null) {
            E(e);
          }
        },
        onChange: e => {
          chatInputStoreHelpers.setEditorValue(e);
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "image_prompt_content_change"
          });
          asyncSkillChatInput_3.imageEditorManager.emit("contentChange", e);
        },
        onPaste: e => {
          let r = Array.from(e.clipboardData?.files || []).filter(e => {
            let t = e.type.split("/")[1];
            return imageConfigConstants.imageExtensions.includes(t);
          });
          if (r.length) {
            e.preventDefault();
            loggerServiceCore.defaultLogger.persist.log({
              eventName: "image_prompt_paste_files",
              meta: {
                count: r.length
              }
            });
            B(r);
          }
        },
        renderSelectOptionItem: e => {
          let {
            key: t,
            item: r,
            defaultWrapper: n
          } = e;
          if (t === chatFieldProcessor.fieldConstants.RATIO) {
            let {
              label: e,
              icon: t
            } = r || {};
            return n(reactJsxRuntimeCoreReexport.jsxs("div", {
              className: componentStylesMap.classNames["custom-select-item"],
              children: [t, reactJsxRuntimeCoreReexport.jsx("div", {
                className: componentStylesMap.classNames["ratio-text"],
                children: e
              })]
            }));
          }
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: T ?? {
        skill_type: chatAppEnums.SkillType.ImageGeneration
      },
      onControllerChange: e => {
        asyncSkillChatInput_3.imageEditorManager.bindImageEditorRef(e);
        if (C) {
          C.current = {
            focus: t => e == null ? undefined : e.focus(t),
            blur: () => e == null ? undefined : e.blur()
          };
        }
      }
    });
    let W = G({
      className: t,
      onChange: k
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: W
    });
  };
  class E {
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
          value: k,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = k;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageGenerationPromptPlugin: function () {
      return E;
    }
  });
}