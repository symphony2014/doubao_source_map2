// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bJ' to 'skillTemplateSym'
// - Renamed export 'q9' to 'simpleUploadFileSym'
// - Renamed export 'uZ' to 'exitSkillPluginSym'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 886094
         */
module.exports = function (module, exports, require) {
  let i = Symbol("exitSkillPluginIdentifier");
  let r = Symbol("skillTemplatePluginIdentifier");
  let o = Symbol("simpleUploadFilePluginIdentifier");
  require.d(exports, {
    skillTemplateSym: function () {
      return r;
    },
    simpleUploadFileSym: function () {
      return o;
    },
    exitSkillPluginSym: function () {
      return i;
    }
  });
}