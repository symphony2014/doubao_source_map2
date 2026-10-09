// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'chatSkillRefContentHook'
// - Resolved require(395395) to 'chat-skill-ref-content-hook'
// - Renamed variable 'o' to 'chatInputRefContentV2Lazy'
// - Resolved require(53013) to 'chat-input-ref-content-v2-lazy'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'Q' to 'useSkillRefContent' (module 395395)
// - Updated imported property 'l' to 'ChatInputRefV2' (module 53013)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 490942
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillRefContentHook = require("chat-skill-ref-content-hook") /*id: 395395*/;
  var chatInputRefContentV2Lazy = require("chat-input-ref-content-v2-lazy") /*id: 53013*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    var t;
    var r;
    let {
      chatId: s
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId
      };
    }, deepEqualityUtil.deepEqual);
    let u = ((r = e.skill) === null || r === undefined ? undefined : (t = r.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let {
      refContents: d
    } = chatSkillRefContentHook.useSkillRefContent({
      chatId: s ?? "",
      skillId: u
    });
    if (d && d.length !== 0) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "ref-content-container-wrapper-oZ9STL",
        children: reactJsxRuntimeCoreReexport.jsx(chatInputRefContentV2Lazy.ChatInputRefV2, {
          refContents: d,
          supportMultiple: true,
          className: "ref-content-container-Rk1eQW",
          fileIconWrapperClassName: "ref-content-container-file-icon-wrapper-g16iFN"
        })
      });
    } else {
      return null;
    }
  };
  class u {
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
          value: s,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = s;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingReferenceAreaPlugin: function () {
      return u;
    }
  });
}