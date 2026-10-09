// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'a' to 'skillReferenceImageHook'
// - Resolved require(177182) to 'skill-reference-image-hook'
// - Renamed variable 'o' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'l' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 's' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'c' to 'chatFileUploadHook_1'
// - Resolved require(141886) to 'chat-file-upload-hook_1'
// - Renamed variable 'p' to 'referenceImageTypeSelector'
// - Resolved require(509653) to 'reference-image-type-selector'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'H' to 'useChatFileUpload' (module 141886)
// - Updated imported property 'Y' to 'useReferenceImages' (module 177182)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'N6' to 'AttachmentImageAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// - Updated imported property 'i' to 'ReferenceImageTypeSelector' (module 509653)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 697943
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var skillReferenceImageHook = require("skill-reference-image-hook") /*id: 177182*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var chatFileUploadHook_1 = require("chat-file-upload-hook_1") /*id: 141886*/;
  var referenceImageTypeSelector = require("reference-image-type-selector") /*id: 509653*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    var t;
    let {
      chatId: r,
      chatType: m,
      skill: h,
      trackParams: g,
      onSubmit: v
    } = e;
    let y = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: r ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let _ = reactCoreLibraryReexport.useMemo(() => y == null ? undefined : y.every(e => e.type === "image"), [y]);
    let b = useLatestCallbackHook_1.useLatestCallback(v);
    let {
      handleAddImages: x,
      reuploadAttachment: w,
      clearAttachments: k,
      deleteAttachment: E
    } = chatFileUploadHook_1.useChatFileUpload({
      chatId: r,
      chatType: m,
      skill: h
    });
    let {
      referenceImageList: C,
      setReferenceImageByUrl: S
    } = skillReferenceImageHook.useReferenceImages({
      attachmentStates: y,
      clearAttachments: k,
      handleAddImages: x
    });
    let T = (h == null ? undefined : (t = h.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let P = (h == null ? undefined : h.skill_type) || 0;
    let I = {
      ...g,
      code_scene: "chat",
      skill_id: T || chatAppEnums.SkillType.CodeAssistant,
      skill_name: skillTypeMappings.getSkillName(P || chatAppEnums.SkillType.CodeAssistant) || ""
    };
    if (isEmptyUtil.isEmpty(y)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
          showPresetPrompt: !_,
          attachmentStates: y,
          onDeleteAttachment: e => E({
            index: e
          }),
          onRetryAttachment: e => w({
            index: e
          }),
          trackParams: I,
          onClickPresetPrompt: (e, t) => {
            if (b != null) {
              b(e, t);
            }
          },
          renderArea: e => y.every(e => e.type === "image") ? reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
            ...e,
            renderImageNode: C.length ? e => reactJsxRuntimeCoreReexport.jsx(referenceImageTypeSelector.ReferenceImageTypeSelector, {
              url: e,
              referenceImageList: C,
              setReferenceImageByUrl: S
            }) : undefined
          }) : reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
            ...e
          })
        })
      });
    }
  };
  class h {
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
          value: m,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = m;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingAttachmentAreaPlugin: function () {
      return h;
    }
  });
}