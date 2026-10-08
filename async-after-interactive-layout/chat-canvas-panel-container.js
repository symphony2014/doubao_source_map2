// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'CanvasPanelContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 955662
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var d = {
    container: "container-iM0Yrs",
    "container-inner": "container-inner-PLywnV",
    "container-footer": "container-footer-ysSNEd",
    "container-outer": "container-outer-FzyVX9",
    "container-mask": "container-mask-PuSLln",
    "container-outer--narrow": "container-outer--narrow-aIHxky"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      children: t,
      disableInput: n,
      isExpand: r,
      canvasLayoutState: p,
      className: h,
      innerClassName: m
    } = e;
    let f = reactCoreLibraryReexport.useRef(null);
    let g = reactCoreLibraryReexport.useRef(null);
    let v = r && p === chatPanelModes.PanelMode.NARROW_SIDE_PANEL;
    let b = chatResponsiveSize.useChatScreenSize({
      sm: 800,
      md: 1200
    }) === "sm";
    reactCoreLibraryReexport.useEffect(() => {
      if (r && !n) {
        let e = [chatPanelModes.PanelMode.SIDE_PANEL, undefined].includes(p);
        chatStoreManager.getStore("chatViewCanvasStore").setState({
          inputPortalTarget: b && e || p === chatPanelModes.PanelMode.FULL_PANEL ? f.current : undefined
        });
      }
    }, [b, r, p]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let t = e => e.stopPropagation();
      if ((e = g.current) !== null && e !== undefined) {
        e.addEventListener("copy", t);
      }
      return () => {
        var e;
        if ((e = g.current) !== null && e !== undefined) {
          e.removeEventListener("copy", t);
        }
        chatStoreManager.getStore("chatViewCanvasStore").setState({
          inputPortalTarget: undefined
        });
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "canvas_panel_container",
      "data-visible": r,
      "data-state": p,
      className: o(d["container-outer"], {
        [d["container-outer--narrow"]]: v
      }, h),
      children: [b && v && reactJsxRuntimeCoreReexport.jsx("div", {
        className: d["container-mask"],
        onClick: () => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d.container,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(d["container-inner"], m),
          ref: g,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: d["container-footer"],
          ref: f
        })]
      })]
    });
  };
  require.d(exports, {
    CanvasPanelContainer: function () {
      return p;
    }
  });
}