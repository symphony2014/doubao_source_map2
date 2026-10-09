// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPageRouteConstants'
// - Resolved require(628768) to 'chat-page-route-constants'
// - Renamed variable 'r' to 'loginButtonComponent'
// - Resolved require(411691) to 'login-button-component'
// - Renamed variable 'o' to 'trackingEventConstants'
// - Resolved require(402894) to 'tracking-event-constants'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'T' to 'LoginButton' (module 411691)
// - Updated imported property 'aG' to 'pageRoutes' (module 628768)
// - Updated imported property 'x' to 'trackingEvents' (module 402894)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 46861
         */
module.exports = function (module, exports, require) {
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  var loginButtonComponent = require("login-button-component") /*id: 411691*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = () => reactJsxRuntimeCoreReexport.jsx(loginButtonComponent.LoginButton, {
    type: "header",
    page: chatPageRouteConstants.pageRoutes.CHAT,
    loginModalProps: {
      loginNavigateRoute: "/code/chat",
      trackInfo: {
        source: trackingEventConstants.trackingEvents.SIGN_IN_BTN
      }
    }
  });
  class l {
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
    LoginCodeChatHeaderToolButtonPlugin: function () {
      return l;
    }
  });
}