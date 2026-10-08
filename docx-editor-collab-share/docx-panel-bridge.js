// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'getDocxBridge'
// - Renamed export 'h' to 'docxBridgeManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 827167
         */
module.exports = function (module, exports, require) {
  let i = {
    eventEmitter: new (require("event-emitter-wrapper_1") /*id: 740547*/.getEventEmitter)()
  };
  function r(e) {
    try {
      let n = e ? document.querySelector(`.${e}`) : document.getElementById("flow-docx-iframe");
      return (n == null ? undefined : n.contentWindow?.ccmBridge) || null;
    } catch (e) {
      return null;
    }
  }
  let o = {
    init() {
      if (window !== undefined && !window.doubaoBridge) {
        window.doubaoBridge = i;
      }
    },
    setDocxPannelController(e) {
      if (window.doubaoBridge) {
        window.doubaoBridge.docXPanelController = e;
      }
    },
    get: () => i
  };
  require.d(exports, {
    getDocxBridge: function () {
      return r;
    },
    docxBridgeManager: function () {
      return o;
    }
  });
}