// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatInputPopoverHook_1'
// - Resolved require(573572) to 'chat-input-popover-hook_1'
// - Renamed variable 'i' to 'imageSkillChatInput'
// - Resolved require(795738) to 'image-skill-chat-input'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'x' to 'useChatInputPopover' (module 573572)
// - Updated imported property 'K' to 'ImageSkillChatInput' (module 795738)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 981834
         */
module.exports = function (module, exports, require) {
  var chatInputPopoverHook_1 = require("chat-input-popover-hook_1") /*id: 573572*/;
  var imageSkillChatInput = require("image-skill-chat-input") /*id: 795738*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      chatId: t,
      skill: r,
      chatType: o,
      trackParams: l
    } = e;
    let {
      popoverProps: s
    } = chatInputPopoverHook_1.useChatInputPopover({
      chatType: o,
      isGuidanceInput: true
    });
    return reactJsxRuntimeCoreReexport.jsx(imageSkillChatInput.ImageSkillChatInput, {
      chatId: t,
      skill: r,
      trackParams: l,
      syncInputEngineValue: true,
      ...s
    });
  };
  class l {
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
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = o;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageGenerationTemplatePlugin: function () {
      return l;
    }
  });
}