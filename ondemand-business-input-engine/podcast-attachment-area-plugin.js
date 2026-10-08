// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'a' to 'chatInputAiFeatureConstants'
// - Resolved require(155267) to 'chat-input-ai-feature-constants'
// - Renamed variable 'o' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'l' to 'attachmentStateValidator'
// - Resolved require(151792) to 'attachment-state-validator'
// - Renamed variable 's' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'u' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'p' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'f' to 'promiseDelayUtil'
// - Resolved require(937669) to 'promise-delay-util'
// - Renamed variable 'm' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'h' to 'aiPodcastAttachmentHandlerHook'
// - Resolved require(315619) to 'ai-podcast-attachment-handler-hook'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'e' to 'useAiPodcastAttachmentHandler' (module 315619)
// - Updated imported property '_' to 'delayPromise' (module 937669)
// - Updated imported property 'L' to 'useAttachValidator' (module 151792)
// - Updated imported property 'KP' to 'AiFeatureType' (module 155267)
// - Updated imported property 'vQ' to 'featureActionNameMap' (module 155267)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 457683
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var aiPodcastAttachmentHandlerHook = require("ai-podcast-attachment-handler-hook") /*id: 315619*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    var t;
    let {
      chatId: r,
      skill: v,
      trackParams: y,
      onSubmit: _
    } = e;
    if (!v) {
      return null;
    }
    let b = chatFgStoreHooks.getSourceValue("auto_set_ref_node", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "1"
    }) === "0";
    let x = ((t = v.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let w = v.skill_type || 0;
    let k = reactCoreLibraryReexport.useRef("");
    reactCoreLibraryReexport.useEffect(() => {
      let e = `${r}:${x}`;
      if (k.current !== e) {
        k.current = e;
        teaAnalyticsEventTracker.trackEvent("skill_module_show", y || {});
      }
    }, [r, x, y]);
    let E = reactCoreLibraryReexport.useRef(null);
    let {
      attachmentStates: C,
      deleteAttachment: S,
      reuploadAttachment: T,
      getPreGeneratedLocalMessageId: P
    } = aiPodcastAttachmentHandlerHook.useAiPodcastAttachmentHandler({
      skill: v,
      onAttachmentChange: () => {
        promiseDelayUtil.delayPromise(50).then(() => {
          var e;
          var t;
          if ((t = E.current) === null || t === undefined) {
            return undefined;
          } else if ((e = t.scrollToBottom) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(t);
          }
        });
      }
    });
    let {
      success: I
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: C,
      scene: "sendMessageButton",
      submitIgnoreUploadStatus: b
    });
    let A = reactCoreLibraryReexport.useMemo(() => C.length ? [chatInputAiFeatureConstants.AiFeatureType.GeneratePodcast] : [], [C]);
    let j = async (e, t) => {
      if (!I) {
        return;
      }
      let r = chatInputAiFeatureConstants.featureActionNameMap[t] || e;
      let n = C.reduce((e, t) => e + (t.size || 0), 0);
      let l = isEmptyUtil.isEmpty(C) ? "" : C.length === 1 ? "single" : "multi";
      let s = isEmptyUtil.isEmpty(C) ? undefined : skillConstantsEnum.UploadSource.UPLOAD_FROM_PODCAST;
      teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
        upload_id: await P(),
        upload_file_size: String(n),
        upload_collection_way: l,
        upload_from: isEmptyUtil.isEmpty(C) ? undefined : s,
        prompt_content: r,
        prompt_from: "quick_actions",
        file_type: C.map(e => getFileExtension.getFileExtension(e.fileName)).join(",")
      });
      await (_ == null ? undefined : _(e, t));
    };
    if (isEmptyUtil.isEmpty(C)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
          ref: E,
          attachmentStates: C,
          submitIgnoreUploadStatus: b,
          onDeleteAttachment: e => S({
            index: e
          }),
          onRetryAttachment: e => T({
            index: e
          }),
          onClickPresetPrompt: j,
          customPresetPrompts: A,
          renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
            ...e
          }),
          trackParams: {
            ...y,
            skill_id: x,
            skill_name: skillTypeMappings.getSkillName(w)
          }
        })
      });
    }
  };
  class y {
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
          value: v,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = v;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    PodcastAttachmentAreaPlugin: function () {
      return y;
    }
  });
}