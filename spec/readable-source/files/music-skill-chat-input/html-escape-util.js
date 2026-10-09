// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'escapeHtml'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 367013
         */
module.exports = function (module, exports, require) {
  let i = e => {
    if (!e) {
      return "";
    }
    let t = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    };
    return e.replace(/[&<>"']/g, e => t[e] || e);
  };
  require.d(exports, {
    escapeHtml: function () {
      return i;
    }
  });
}