// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JA' to 'namespaceXlink'
// - Renamed export 'RM' to 'transparentRgba'
// - Renamed export 'RX' to 'canvasDomLayer'
// - Renamed export 'TO' to 'colorTransparent'
// - Renamed export 'YB' to 'namespaceSvg'
// - Renamed export 'Yo' to 'identityMatrix3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 207779
         */
module.exports = function (module, exports, require) {
  var matrixIdentityCreate = require("matrix-identity-create") /*id: 609577*/;
  var r = "transparent";
  var o = "rgba(0,0,0,0)";
  var a = matrixIdentityCreate.createIdentity3();
  var s = "http://www.w3.org/2000/svg";
  var h = "http://www.w3.org/1999/xlink";
  var l = "canvas-dom-layer";
  require.d(exports, {
    namespaceXlink: function () {
      return h;
    },
    transparentRgba: function () {
      return o;
    },
    canvasDomLayer: function () {
      return l;
    },
    colorTransparent: function () {
      return r;
    },
    namespaceSvg: function () {
      return s;
    },
    identityMatrix3: function () {
      return a;
    }
  });
}