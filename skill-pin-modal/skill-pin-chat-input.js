// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'ChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 556035
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var skillPinIconComponent = require("skill-pin-icon-component") /*id: 730868*/;
  var a = {
    "chat-input": "chat-input-ueBChx",
    "single-line": "single-line-L3t2gA",
    bottom: "bottom-vgwGmG",
    placeholder: "placeholder-O8nVWt",
    "box-shadow": "box-shadow-ETuhHN",
    small: "small-DInK6o",
    "chat-input-with-upload": "chat-input-with-upload-FeR5FE",
    "chat-input-button": "chat-input-button-IWQl44",
    "chat-input-content": "chat-input-content-cV46od",
    "chat-input-tool": "chat-input-tool-Ri_u4u",
    "chat-input-button-round": "chat-input-button-round-kXJIHd"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = false;
  let u = e => {
    let {
      placeholder: t,
      style: n,
      className: o,
      uploadIcon: u,
      boxShadow: h = false,
      singleLine: p = true
    } = e;
    let m = reactCoreLibraryReexport.useRef(null);
    let [f, g] = reactCoreLibraryReexport.useState(d);
    reactCoreLibraryReexport.useEffect(() => {
      let t = m.current?.clientWidth;
      let n = isNullishCheck.isNil(t) || t === 0 ? d : t < 480;
      d = n;
      g(n);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: m,
      className: s(a["chat-input"], p && a["single-line"], h && a["box-shadow"], f && a.small, u && a["chat-input-with-upload"], o),
      style: n,
      children: p ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a["chat-input-content"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a["chat-input-tool"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a["chat-input-tool"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a["chat-input-button-round"]
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("textarea", {
          disabled: true,
          placeholder: t
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a.bottom,
          children: [u, reactJsxRuntimeCoreReexport.jsx("div", {
            className: a.placeholder
          }), reactJsxRuntimeCoreReexport.jsx(skillPinIconComponent.SkillPinIcon, {
            className: a["chat-input-button"]
          })]
        })]
      })
    });
  };
  require.d(exports, {
    ChatInput: function () {
      return u;
    }
  });
}