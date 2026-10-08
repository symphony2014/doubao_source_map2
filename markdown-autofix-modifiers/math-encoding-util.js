// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ft' to 'blockMathType'
// - Renamed export 'SP' to 'encodeInlineMath'
// - Renamed export 'XS' to 'encodeBlockMath'
// - Renamed export 'Xx' to 'decodeMathSpans'
// - Renamed export 'yX' to 'inlineMathType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 833504
         */
module.exports = function (module, exports, require) {
  var bufferImplementation = require("buffer-implementation") /*id: 659459*/;
  var hashEscapePipe = require("hash-escape-pipe") /*id: 227019*/;
  var safeTextInsertionUtil = require("safe-text-insertion-util") /*id: 348428*/;
  let o = "inline-math";
  let u = "block-math";
  let a = (e, t) => `<span data-type="${e}" data-value="${bufferImplementation.Buffer.from(t).toString("base64")}"></span>`;
  let s = e => a(o, hashEscapePipe.escapeHashPipe(safeTextInsertionUtil.decodeMarkers(e)));
  let f = e => a(u, hashEscapePipe.escapeHashPipe(safeTextInsertionUtil.decodeMarkers(e)));
  let c = e => e.replace(RegExp(`<span data-type="${o}" data-value="(.*?)"></span>`, "g"), (e, t) => String.raw`\(${bufferImplementation.Buffer.from(t, "base64").toString("utf8")}\)`).replace(RegExp(`<span data-type="${u}" data-value="(.*?)"></span>`, "g"), (e, t) => String.raw`\[${bufferImplementation.Buffer.from(t, "base64").toString("utf8")}\]`);
  require.d(exports, {
    blockMathType: function () {
      return u;
    },
    encodeInlineMath: function () {
      return s;
    },
    encodeBlockMath: function () {
      return f;
    },
    decodeMathSpans: function () {
      return c;
    },
    inlineMathType: function () {
      return o;
    }
  });
}