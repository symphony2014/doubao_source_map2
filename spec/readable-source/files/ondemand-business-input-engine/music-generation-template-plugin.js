// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'i' to 'useChatInputGuidanceConfig'
// - Resolved require(724345) to 'use-chat-input-guidance-config'
// - Renamed variable 'a' to 'musicSkillTemplateBanner'
// - Resolved require(209736) to 'music-skill-template-banner'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'V' to 'useGuidanceConfig' (module 724345)
// - Updated imported property 'P' to 'MusicTemplateBanner' (module 209736)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 87081
         */
module.exports = function (module, exports, require) {
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var useChatInputGuidanceConfig = require("use-chat-input-guidance-config") /*id: 724345*/;
  var musicSkillTemplateBanner = require("music-skill-template-banner") /*id: 209736*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      chatType: t
    } = e;
    let {
      popoverProps: r
    } = useChatInputGuidanceConfig.useGuidanceConfig({
      chatType: t,
      isGuidanceInput: true
    });
    return reactJsxRuntimeCoreReexport.jsx(musicSkillTemplateBanner.MusicTemplateBanner, {
      ...r,
      onUpdateValue: chatInputStoreHelpers.setEditorValue
    });
  };
  class s {
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
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = l;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    MusicGenerationTemplatePlugin: function () {
      return s;
    }
  });
}