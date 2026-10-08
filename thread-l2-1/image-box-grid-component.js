// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ImageBoxGrid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 750824
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = function (e, t, n = 2) {
    let i = e < n;
    let r = e % n == 0;
    let l = e >= t - (t % n || n);
    let a = e % n == Math.min(n, t) - 1;
    return o({
      "top-left-HhMxPA": e === 0,
      "top-right-fMYmBn": i && a,
      "bottom-left-_zOB30": l && r,
      "bottom-right-tPAU5c": l && a
    });
  };
  let s = e => reactCoreLibraryReexport.createElement("img", {
    src: e,
    style: {
      display: "block"
    }
  });
  let c = e => {
    let {
      className: t,
      style: n,
      imgList: i,
      gridColumns: r,
      children: c = s,
      ...d
    } = e;
    let u = r ? `repeat(${r}, minmax(0, 1fr))` : undefined;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("image-box-grid-nHLen3", t),
      style: {
        ...n,
        ...(u ? {
          gridTemplateColumns: u
        } : {})
      },
      ...d,
      children: i.map((e, t, n) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("image-box-grid-item", "image-box-grid-item-UbxQXb", a(t, n.length, r)),
        children: c(e, t, n)
      }, t))
    });
  };
  require.d(exports, {
    ImageBoxGrid: function () {
      return c;
    }
  });
}