// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'r' to 'avatarPopoverMenuComponent'
// - Resolved require(655141) to 'avatar-popover-menu-component'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'C_' to 'AvatarPopoverMenu' (module 655141)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 822995
         */
module.exports = function (module, exports, require) {
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var avatarPopoverMenuComponent = require("avatar-popover-menu-component") /*id: 655141*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      isRightBarExpand: t
    } = e;
    if (t) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(avatarPopoverMenuComponent.AvatarPopoverMenu, {
        utmSource: chatPlatformConstants.sourceConstants.headerLoggedModalDownloadBtn
      });
    }
  };
  class s {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = a;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AvatarPlugin: function () {
      return s;
    }
  });
}