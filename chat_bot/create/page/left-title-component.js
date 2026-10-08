// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LeftTitle'
// - Renamed export 'F' to 'TitleCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.d9f0e7db.js
         * chunkId: 44611
         * moduleId: 163606
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var o = {
    container: "container-XtULD_",
    inner: "inner-vhXPLm",
    center: "center-aGdbYF",
    title: "title-Fq1flJ",
    "sub-title": "sub-title-L1Rsmb",
    "auto-ellipsis": "auto-ellipsis-a0vJnL",
    mobile: "mobile-bjtIJZ",
    leftTitle: "leftTitle-em3oiw",
    titleText: "titleText-acJl3c"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(d, {
      ...t,
      innerClassName: i(o.center, {
        [o.mobile]: userAgentDeviceDetector.isMobile()
      }),
      className: o.leftTitle,
      titleClassName: o.titleText
    });
  };
  let d = e => {
    let {
      subTitle: t,
      title: n,
      onClick: r,
      onInnerClick: a,
      className: l,
      innerClassName: d,
      titleClassName: c
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: i(o.container, l),
      onClick: r,
      style: {
        cursor: r ? "pointer" : "auto"
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: i(o.inner, d),
        onClick: a,
        children: [n && reactJsxRuntimeCoreReexport.jsx("span", {
          className: i(o.title, c, o["auto-ellipsis"]),
          children: n
        }), t && reactJsxRuntimeCoreReexport.jsx("span", {
          className: i(o["sub-title"], o["auto-ellipsis"]),
          children: t
        })]
      })
    });
  };
  require.d(exports, {
    LeftTitle: function () {
      return l;
    },
    TitleCard: function () {
      return d;
    }
  });
}