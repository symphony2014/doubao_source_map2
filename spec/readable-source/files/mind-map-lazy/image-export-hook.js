// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'useImageExport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14702.d6c1bb8c.js
         * chunkId: 14702
         * moduleId: 714582
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var imageExportUtils = require("image-export-utils") /*id: 195626*/;
  var domToCanvasConverter = require("dom-to-canvas-converter") /*id: 594034*/;
  let l = async (e, t) => {
    let n = null;
    try {
      n = await domToCanvasConverter.convertToCanvas(e, {
        fontEmbedCSS: "@font-face { font-family: Inter, -apple-system, \"system-ui\", \"Segoe UI\", \"SF Pro SC\", \"SF Pro Display\", \"SF Pro Icons\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; src: url(\"\"); unicode-range: U+0; }",
        ...t
      });
    } catch (e) {}
    return n;
  };
  let i = async (e, t) => {
    if (e.current) {
      return e.current;
    }
    if (!t) {
      return null;
    }
    let n = await l(t, {
      pixelRatio: 2
    });
    e.current = n;
    return e.current;
  };
  let c = e => {
    let {
      exportCanvasSelf: t
    } = e || {};
    let n = reactCoreLibraryReexport.useRef(null);
    let o = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useRef(null);
    let c = async () => {
      var r;
      var c;
      var s;
      let u = ((r = n.current) === null || r === undefined ? undefined : r.querySelector("svg")) || ((c = n.current) === null || c === undefined ? undefined : c.querySelector("img"));
      if (!u) {
        return;
      }
      let d = await i(l, o.current);
      let m = (s = n.current) === null || s === undefined ? undefined : s.querySelector("canvas");
      imageExportUtils.exportImage(u, (t ? m : d) || undefined, undefined, e == null ? undefined : e.exportSvgSelf, t);
    };
    let s = async () => {
      var r;
      var c;
      var s;
      let u = ((r = n.current) === null || r === undefined ? undefined : r.querySelector("svg")) || ((c = n.current) === null || c === undefined ? undefined : c.querySelector("img"));
      if (!u) {
        return;
      }
      let d = await i(l, o.current);
      let m = (s = n.current) === null || s === undefined ? undefined : s.querySelector("canvas");
      imageExportUtils.copyImage(u, (t ? m : d) || undefined, undefined, e == null ? undefined : e.exportSvgSelf, t);
    };
    return {
      brandAreaRef: o,
      svgContainerRef: n,
      downloadImage: c,
      copyImage: s
    };
  };
  require.d(exports, {
    useImageExport: function () {
      return c;
    }
  });
}