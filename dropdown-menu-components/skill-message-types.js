// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'skillModes'
// - Renamed export 'p' to 'resourceTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 824454
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {}).FILE = "FILE";
  i.DIR = "DIR";
  i.REPO = "REPO";
  i.DATA_ANALYSIS = "DATA_ANALYSIS";
  i.IMAGE = "IMAGE";
  let o = i;
  (r = {}).DevMode = "dev_mode";
  r.ChatMode = "chat_mode";
  r.InstructionOpt = "instruction_opt";
  let l = r;
  require.d(exports, {
    skillModes: function () {
      return l;
    },
    resourceTypes: function () {
      return o;
    }
  });
}