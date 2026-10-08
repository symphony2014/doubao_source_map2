// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(436943) to 'protobuf-writer-buffer-implementation'
// - Resolved require(386399) to 'buffer-protobuf-writer'
// - Resolved require(842116) to 'protobuf-binary-reader_1'
// - Resolved require(832050) to 'protobuf-buffer-reader'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// - Resolved require(757863) to 'ratio-whiteboard-canvas-service'
// - Resolved require(385406) to 'ratio-whiteboard-canvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 516068
         */
module.exports = function (module, exports, require) {
  var n = exports;
  function r() {
    n.util._configure();
    n.Writer._configure(n.BufferWriter);
    n.Reader._configure(n.BufferReader);
  }
  n.build = "minimal";
  n.Writer = require("protobuf-writer-buffer-implementation") /*id: 436943*/;
  n.BufferWriter = require("buffer-protobuf-writer") /*id: 386399*/;
  n.Reader = require("protobuf-binary-reader_1") /*id: 842116*/;
  n.BufferReader = require("protobuf-buffer-reader") /*id: 832050*/;
  n.util = require("protobuf-utility-module_3") /*id: 842874*/;
  n.rpc = require("ratio-whiteboard-canvas-service") /*id: 757863*/;
  n.roots = require("ratio-whiteboard-canvas") /*id: 385406*/;
  n.configure = r;
  r();
}