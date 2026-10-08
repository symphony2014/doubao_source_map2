// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bo' to 'chatLayout'
// - Renamed export 'x6' to 'chatConstant'
// - Renamed export 'QF' to 'layoutClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 871367
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatConstantValue = require("chat-constant-value") /*id: 597566*/;
  let s = reactCoreLibraryReexport.createContext({
    leftVisible: false,
    rightVisible: false,
    contentVisible: false,
    rightWidth: 0,
    leftWidth: 0,
    transition: false,
    deprecatedMaxWidthLayoutStyle: false
  });
  let u = s.Provider;
  let c = () => reactCoreLibraryReexport.useContext(s);
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: n,
      paddingWrapperClassName: i,
      containerClassName: o,
      className: s,
      centerContentMaxWidthDelta: u = 0,
      customStyle: h,
      ...m
    } = e;
    let {
      className: g,
      leftVisible: f,
      rightVisible: p,
      rightWidth: _,
      leftWidth: v,
      transition: b,
      deprecatedMaxWidthLayoutStyle: S = false
    } = c();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a(o, "container-SrVXPg", "chrome70-container", i, g, {
        "transition-Njedgs": b
      }, {
        "deprecated-qVfAsn": S
      }),
      style: {
        ...(p && _ === "" ? {} : {
          "--right-side-width": p ? isNumberUtil.isNumber(_) ? `${_}px` : _ : "0px"
        }),
        ...(f && v === "" ? {} : {
          "--left-side-width": f ? isNumberUtil.isNumber(v) ? `${v}px` : v : "0px"
        }),
        "--center-content-max-width": `${chatConstantValue.chatConstant + u}px`,
        ...h
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: t,
        className: a("inner-Qo5lJS", s),
        ...m,
        children: n
      })
    });
  });
  h.MaxWidthLayoutProvider = u;
  var m = {
    "left-side-width": "left-side-width-OmhtCA",
    leftSideWidth: "left-side-width-OmhtCA",
    "left-side-width--variable": "left-side-width--variable-Vm1CxM",
    leftSideWidthVariable: "left-side-width--variable-Vm1CxM",
    "right-side-width": "right-side-width-R7eU1d",
    rightSideWidth: "right-side-width-R7eU1d",
    "right-side-width--compact": "right-side-width--compact-yLU7Dm",
    rightSideWidthCompact: "right-side-width--compact-yLU7Dm",
    "right-side-width--narrow": "right-side-width--narrow-B1f5Ez",
    rightSideWidthNarrow: "right-side-width--narrow-B1f5Ez"
  };
  let g = {
    MaxWidthLayout: h
  };
  require.d(exports, {
    chatLayout: function () {
      return g;
    },
    chatConstant: function () {
      return chatConstantValue.chatConstant;
    },
    layoutClassNames: function () {
      return m;
    }
  });
}