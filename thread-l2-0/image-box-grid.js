// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'gridStatus'
// - Renamed export 'l' to 'ImageBoxGrid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 692304
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var s = {
    "image-box-grid": "image-box-grid-EYaIcP",
    "image-box-grid-item": "image-box-grid-item-FTeESI",
    "image-box-grid-item-error": "image-box-grid-item-error-TiVt21",
    "error-icon": "error-icon-nVyRMi"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (i = {}).Error = "error";
  i.Success = "success";
  let c = i;
  let u = e => reactCoreLibraryReexport.createElement("img", {
    src: e,
    style: {
      display: "block"
    }
  });
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: i,
      imgList: o,
      gap: a = 4,
      ratio: h = 1,
      children: p = u,
      itemClassName: v,
      width: m,
      height: g,
      ..._
    } = e;
    let f = "";
    let b = "";
    let {
      length: y
    } = o;
    if (h > 1) {
      let e = Math.ceil(y / 2);
      f = "1fr 1fr";
      b = `repeat(${e}, 1fr)`;
    } else {
      let e = Math.ceil(y / 4);
      f = "repeat(4, 1fr)";
      b = `repeat(${e}, 1fr)`;
    }
    let k = {
      "--image-box-grid-gap": `${a}px`,
      ...i,
      ...(f ? {
        gridTemplateColumns: f
      } : {}),
      ...(b ? {
        gridTemplateRows: b
      } : {})
    };
    let w = (e, t) => {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(s["image-box-grid-item"], v),
        style: {
          height: "fit-content"
        },
        children: [t === c.Error && reactJsxRuntimeCoreReexport.jsx("div", {
          className: s["image-box-grid-item-error"],
          style: {
            paddingBottom: `min(${g / m * 100}%, ${g}px)`,
            maxWidth: m
          },
          children: reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
            className: s["error-icon"]
          })
        }), t === c.Success && p(o[e]?.url, e, o.map(e => e.url))]
      }, e);
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: l(s["image-box-grid"], n),
      style: k,
      ref: t,
      ..._,
      children: o.map((e, t) => w(t, e.status))
    });
  });
  require.d(exports, {
    gridStatus: function () {
      return c;
    },
    ImageBoxGrid: function () {
      return h;
    }
  });
}