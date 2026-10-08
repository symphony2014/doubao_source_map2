// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LW' to 'isValidSkillId'
// - Renamed export 'YE' to 'hasRegenerateOperation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 881555
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return !!e && ["7400765672814379027", "7411132181101838390", "7264586389273018423"].includes(e);
  }
  let a = e => {
    return !!e.operation && !!("regenerate" in e.operation) && !!e.operation?.regenerate;
  };
  require.d(exports, {
    isValidSkillId: function () {
      return i;
    },
    hasRegenerateOperation: function () {
      return a;
    }
  });
}