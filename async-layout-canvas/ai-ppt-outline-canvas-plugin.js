// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'o' to 'shieldListOutlinedIcon'
// - Resolved require(280773) to 'shield-list-outlined-icon'
// - Renamed variable 's' to 'superTaskMarkdownViewComponent'
// - Resolved require(506522) to 'super-task-markdown-view-component'
// - Renamed variable 'n' to 'codeCanvasHeaderComponent'
// - Resolved require(785350) to 'code-canvas-header-component'
// - Renamed variable 'l' to 'loadingSpinnerWrapper'
// - Resolved require(354073) to 'loading-spinner-wrapper'
// - Renamed variable 'c' to 'darkModeStateFactory'
// - Resolved require(990695) to 'dark-mode-state-factory'
// - Renamed variable 'd' to 'chatBlockManagerAndToolDataCache'
// - Resolved require(247150) to 'chat-block-manager-and-tool-data-cache'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'G' to 'createDarkModeState' (module 990695)
// - Updated imported property 'A8' to 'chatPageDataManager' (module 247150)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'k' to 'CodeCanvasHeader' (module 785350)
// - Updated imported property 'o' to 'ShieldListOutlined' (module 280773)
// - Updated imported property '$' to 'SpinnerWrapper' (module 354073)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 449809
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var shieldListOutlinedIcon = require("shield-list-outlined-icon") /*id: 280773*/;
  var superTaskMarkdownViewComponent = require("super-task-markdown-view-component") /*id: 506522*/;
  var codeCanvasHeaderComponent = require("code-canvas-header-component") /*id: 785350*/;
  var loadingSpinnerWrapper = require("loading-spinner-wrapper") /*id: 354073*/;
  var darkModeStateFactory = require("dark-mode-state-factory") /*id: 990695*/;
  var chatBlockManagerAndToolDataCache = require("chat-block-manager-and-tool-data-cache") /*id: 247150*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      resource_id: t,
      markdown: a = "",
      title: u,
      content_obj: m
    } = e;
    let {
      status: g = 0
    } = m || {};
    let k = reactCoreLibraryReexport.useRef({
      scrollTop: 0
    });
    let [h, y] = reactCoreLibraryReexport.useState(a);
    let {
      isDarkMode: f
    } = darkModeStateFactory.createDarkModeState();
    let x = reactCoreLibraryReexport.useCallback(() => {
      k.current.scrollTop = 0;
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      x();
      return chatBlockManagerAndToolDataCache.chatPageDataManager.onPageOutlineStreamDataUpdate(t, function (e = "") {
        y(e);
      });
    }, [t]);
    let v = reactCoreLibraryReexport.useCallback(() => {
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "code-canvas-theme-gTcCgc",
      children: [reactJsxRuntimeCoreReexport.jsx(codeCanvasHeaderComponent.CodeCanvasHeader, {
        title: u,
        onClose: v,
        icon: reactJsxRuntimeCoreReexport.jsx(shieldListOutlinedIcon.ShieldListOutlined, {
          className: "size-16"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "editor-gUcvHS",
        children: reactJsxRuntimeCoreReexport.jsx(loadingSpinnerWrapper.SpinnerWrapper, {
          spinning: !h,
          style: {
            width: "100%",
            height: "100%"
          },
          childStyle: {
            width: "100%",
            height: "100%"
          },
          color: "brand",
          children: reactJsxRuntimeCoreReexport.jsx(superTaskMarkdownViewComponent.SuperTaskMarkdownView, {
            mode: f ? "dark" : "light",
            markDown: Array.isArray(h) ? h.join("") : h,
            isStreaming: g === 1
          })
        })
      })]
    });
  };
  function m(e, t, a) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var i = a.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  class g {
    constructor() {
      m(this, "name", "ai-ppt-outline-canvas-preview");
      m(this, "errorBoudaryName", "super-task-canvas-preview");
      m(this, "teaCanvasType", "super-task-ai-ppt-outline");
      m(this, "Content", u);
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTOutlinePreviewCanvasPlugin: function () {
      return g;
    }
  });
}