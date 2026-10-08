// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'isFlushInputTransaction'
// - Renamed export 'k' to 'getRenderEventMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 978100
         */
module.exports = function (module, exports, require) {
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  function l(e) {
    if (e === "buffer") {
      return {
        enterEvent: renderEventConstants.enterBuffer,
        leaveEvent: renderEventConstants.leaveBuffer,
        changeEvent: renderEventConstants.bufferChanged
      };
    } else {
      return {
        enterEvent: renderEventConstants.enterViewport,
        leaveEvent: renderEventConstants.leaveViewport,
        changeEvent: renderEventConstants.viewportChanged
      };
    }
  }
  let s = ["flushInput", "deleteBackward", "composition"];
  function a(e) {
    let {
      options: i
    } = e;
    return !!i && !changeSourceValidators.isUndoRedoSource(i) && s.includes(i.transactionName);
  }
  require.d(exports, {
    isFlushInputTransaction: function () {
      return a;
    },
    getRenderEventMap: function () {
      return l;
    }
  });
}