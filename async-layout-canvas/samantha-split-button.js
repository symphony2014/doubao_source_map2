// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'SamanthaSplitButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 234250
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var plusIcon = require("plus-icon") /*id: 578680*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var c = {
    "samantha-split-button": "samantha-split-button-QpJxOS",
    samanthaSplitButton: "samantha-split-button-QpJxOS",
    quartary: "quartary-XaxTi0",
    "first-button": "first-button-fe4NAX",
    firstButton: "first-button-fe4NAX",
    loading: "loading-oiU4qD",
    disabled: "disabled-Cv2zBM",
    "last-button": "last-button-0loRX6",
    lastButton: "last-button-0loRX6",
    large: "large-sYlsca",
    medium: "medium-dpKrYO",
    small: "small-lcofay",
    tertiary: "tertiary-L1PxNu",
    secondary: "secondary-jcN_t8",
    primary: "primary-mDpS4v",
    "pointer-events": "pointer-events-zLmGzM",
    pointerEvents: "pointer-events-zLmGzM",
    "trans-300": "trans-300-S73sc1",
    trans300: "trans-300-S73sc1",
    "rotate-180": "rotate-180-koeOY9",
    rotate180: "rotate-180-koeOY9"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      renderRightArea: i,
      type: n = "primary",
      size: a = "medium",
      icon: u = reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {}),
      loading: p,
      disabled: _,
      className: m,
      onClick: h,
      children: f,
      ...v
    } = e ?? {};
    let g = {
      type: n,
      size: a,
      disabled: _
    };
    let y = r(c[n], c[a], {
      [c.loading]: p,
      [c.disabled]: _
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c["samantha-split-button"],
      ref: t,
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        className: r(c["first-button"], y, m),
        loading: p,
        icon: u,
        onClick: h,
        ...g,
        ...v,
        children: f
      }), i == null ? undefined : i(function ({
        arrowDirection: e = "bottom",
        className: t,
        onClick: i,
        ...a
      } = {}) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: r({
            [c["pointer-events"]]: _ || p
          }),
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            icon: reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {
              className: r(c["trans-300"], e === "top" ? c["rotate-180"] : "")
            }),
            className: r(c["last-button"], y, t),
            onClick: e => {
              if (n === "quartary" && e.target.tagName === "BUTTON") {
                e.stopPropagation();
                if (h != null) {
                  h(e);
                }
                return;
              }
              if (i != null) {
                i(e);
              }
            },
            ...g,
            ...a
          })
        });
      })]
    });
  });
  require.d(exports, {
    SamanthaSplitButton: function () {
      return u;
    }
  });
}