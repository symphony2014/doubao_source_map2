// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'ToBottomButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 256337
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M18.5651 13.9344C18.8775 14.2468 18.8775 14.7528 18.5651 15.0652L13.274 20.3562C12.5731 21.0571 11.4321 21.063 10.7272 20.3582L5.4342 15.0652C5.1219 14.7528 5.1219 14.2468 5.4342 13.9344C5.74659 13.622 6.25264 13.622 6.56506 13.9344L11.1998 18.5691L11.1998 2.9998C11.1998 2.55803 11.5579 2.2001 11.9996 2.2C12.4415 2.2 12.7994 2.55797 12.7994 2.9998L12.7994 18.5691L17.4342 13.9344C17.7466 13.622 18.2526 13.622 18.5651 13.9344Z",
      fill: "currentColor"
    })
  });
  let a = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 46,
    height: 46,
    fill: "none",
    viewBox: "0 0 46 46",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M1 23C1 10.85 10.85 1 23 1s22 9.85 22 22-9.85 22-22 22S1 35.15 1 23"
    }), reactJsxRuntimeCoreReexport.jsx("circle", {
      cx: 23,
      cy: 23,
      r: 22.3,
      stroke: "#0057FF",
      strokeOpacity: 0.1,
      strokeWidth: 1.5
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      stroke: "url(#partial_border_svg__a)",
      strokeWidth: 1.5,
      d: "M45 23c0-12.15-9.85-22-22-22"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "partial_border_svg__a",
        x1: 23,
        x2: 49.163,
        y1: 1,
        y2: 8.171,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#0057FF",
          stopOpacity: 0
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.502,
          stopColor: "#0057FF",
          stopOpacity: 0.6
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0057FF",
          stopOpacity: 0
        })]
      })
    })]
  });
  var chatMessageStoreFactoryHelper = require("chat-message-store-factory-helper") /*id: 790538*/;
  var c = {
    container: "container-qCMd_k",
    loading: "loading-Xckt1R",
    hidden: "hidden-WgOVOG",
    "loading-border": "loading-border-HhwBfA",
    icon: "icon-d76Pvu"
  };
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: l,
      initialVisible: d = false,
      conversationId: f,
      onClick: v
    } = e;
    let [p, m] = reactCoreLibraryReexport.useState(d);
    let g = chatMessageStoreFactoryHelper.createConversationMessageStore({
      conversationId: f
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      setVisible: m
    }), []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      id: "to-bottom-button",
      "data-testid": "to-bottom-button",
      "data-visible": p,
      className: i(c.container, n, {
        [c.hidden]: !p,
        [c.loading]: g
      }),
      style: l,
      onClick: v,
      children: [g && reactJsxRuntimeCoreReexport.jsx(a, {
        className: c["loading-border"]
      }), reactJsxRuntimeCoreReexport.jsx(s, {
        className: c.icon
      })]
    });
  });
  require.d(exports, {
    ToBottomButton: function () {
      return d;
    }
  });
}