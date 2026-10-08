// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatCanvasLayoutHook'
// - Resolved require(342022) to 'chat-canvas-layout-hook'
// - Renamed variable 'a' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'useSlidePermissionHook'
// - Resolved require(107107) to 'use-slide-permission-hook'
// - Renamed variable 's' to 'aiPptSlidesCanvasContainer'
// - Resolved require(871043) to 'ai-ppt-slides-canvas-container'
// - Renamed variable 'c' to 'aiPptSlideCanvasModule'
// - Resolved require(186183) to 'ai-ppt-slide-canvas-module'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'O' to 'useChatCanvasLayout' (module 342022)
// - Updated imported property 'D' to 'useSlidePermission' (module 107107)
// - Updated imported property 'L' to 'canvasElementId' (module 186183)
// - Updated imported property 'q' to 'AiPptSlidesCanvasContainer' (module 871043)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 267238
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatCanvasLayoutHook = require("chat-canvas-layout-hook") /*id: 342022*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var useSlidePermissionHook = require("use-slide-permission-hook") /*id: 107107*/;
  var aiPptSlidesCanvasContainer = require("ai-ppt-slides-canvas-container") /*id: 871043*/;
  var aiPptSlideCanvasModule = require("ai-ppt-slide-canvas-module") /*id: 186183*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let h = e => {
    let {
      conversationId: t,
      messageId: i,
      docToken: o
    } = e;
    let {
      isWideScreenMode: u,
      isCanvasExpand: h
    } = chatCanvasLayoutHook.useChatCanvasLayout({
      conversationId: t,
      messageId: i
    });
    let {
      permission: p
    } = useSlidePermissionHook.useSlidePermission({
      token: e.docToken
    });
    let m = encodeURIComponent(JSON.stringify({
      ...e,
      perfStartTime: undefined,
      driveClickTime: undefined,
      openCanvasTime: undefined
    }));
    let v = `/chat/${t}?layout=zen_split&pluginId=${aiPptSlideCanvasModule.canvasElementId}&canvas_impayload=${m}`;
    reactCoreLibraryReexport.useEffect(() => {
      if (h) {
        if (u) {
          window.history.replaceState(null, "", `/slides/${o}`);
        } else {
          window.history.replaceState(null, "", v);
        }
      }
    }, [u, v, h]);
    return reactJsxRuntimeCoreReexport.jsx(aiPptSlidesCanvasContainer.AiPptSlidesCanvasContainer, {
      ...e,
      pptStatus: p,
      onCloseCanvas: (e == null ? undefined : e.onCloseCanvas) || chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
    });
  };
  class p {
    constructor() {
      u(this, "name", "ai-ppt-slide-canvas");
      u(this, "errorBoundaryName", "ai-ppt-slide-canvas");
      u(this, "teaCanvasType", "aippt_new");
      u(this, "isAllowFullCanvas", true);
      u(this, "Content", h);
      u(this, "onCanvasClosed", e => {
        let {
          conversationId: t
        } = chatStoreManager.getStore("chatViewCanvasStore").getState();
        let {
          conversationId: i
        } = e || {};
        let n = i || t || "";
        if (n) {
          let e = `/chat/${n}`;
          window.history.replaceState(null, "", e);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTSlideCanvasPlugin: function () {
      return p;
    }
  });
}