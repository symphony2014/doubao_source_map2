// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'useSliderLogic'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 507026
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  let o = e => {
    let {
      max: i,
      min: n,
      value: o,
      onChange: s,
      onEndChange: a,
      onStartChange: c,
      direction: d = "horizontal"
    } = e;
    let h = reactCoreLibraryReexport.useRef(null);
    let [u, p] = reactCoreLibraryReexport.useState(false);
    let f = e => {
      let r;
      let o = h.current.getBoundingClientRect();
      r = d === "horizontal" ? (e.clientX - o.left) / o.width : (o.bottom - e.clientY) / o.height;
      if (s != null) {
        s(numberClampUtil.clampNumber(n + r * (i - n), n, i));
      }
    };
    return {
      percent: o / i * 100,
      handleStartGrabbing: () => {
        var e;
        var i;
        let n = e => {
          f(e);
        };
        let r = () => {
          var e;
          var i;
          p(false);
          if ((e = h.current) !== null && e !== undefined) {
            e.removeEventListener("mousemove", n);
          }
          if ((i = h.current) !== null && i !== undefined) {
            i.removeEventListener("mouseup", r);
          }
          document.removeEventListener("contextmenu", r);
          if (a != null) {
            a();
          }
        };
        p(true);
        if ((e = h.current) !== null && e !== undefined) {
          e.addEventListener("mousemove", n);
        }
        if ((i = h.current) !== null && i !== undefined) {
          i.addEventListener("mouseup", r);
        }
        document.addEventListener("contextmenu", r);
        if (c != null) {
          c();
        }
      },
      handleSliderClick: f,
      sliderRef: h,
      isGrabbing: u
    };
  };
  require.d(exports, {
    useSliderLogic: function () {
      return o;
    }
  });
}