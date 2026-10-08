// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bw' to 'supportedElementTypes'
// - Renamed export 'Oo' to 'defaultZoomRatio'
// - Renamed export 'Sh' to 'maxRetryCount'
// - Renamed export 'nH' to 'pdfViewerConfig'
// - Renamed export 'rR' to 'pdfCMapConfig'
// - Renamed export 'u_' to 'dpiScaleRatio'
// - Renamed export 'vr' to 'sqrtHalfConstant'
// - Renamed export 'vt' to 'defaultScrollOffset'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 676477
         */
module.exports = function (module, exports, require) {
  var pdfjsDisplayCore = require("pdfjs-display-core") /*id: 74172*/;
  let a = {
    cMapUrl: `https://unpkg.byted-static.com/pdfjs-dist/${pdfjsDisplayCore.version}/cmaps/`,
    cMapPacked: true
  };
  let l = {
    ...a,
    disableStream: true,
    disableAutoFetch: true,
    rangeChunkSize: 1048576
  };
  let i = 1 / 1.414;
  let o = 96 / 72;
  let s = 40;
  let c = 5;
  let u = 1.25;
  let d = ["image", "table", "codeblock"];
  require.d(exports, {
    supportedElementTypes: function () {
      return d;
    },
    defaultZoomRatio: function () {
      return u;
    },
    maxRetryCount: function () {
      return c;
    },
    pdfViewerConfig: function () {
      return l;
    },
    pdfCMapConfig: function () {
      return a;
    },
    dpiScaleRatio: function () {
      return o;
    },
    sqrtHalfConstant: function () {
      return i;
    },
    defaultScrollOffset: function () {
      return s;
    }
  });
}