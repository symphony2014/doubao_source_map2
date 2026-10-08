// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KR' to 'ConfigKeys'
// - Renamed export 'P$' to 'ArtifactKeys'
// - Renamed export 'Wu' to 'SkillActionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30108.9930390a.js
         * chunkId: 30108
         * moduleId: 418389
         */
module.exports = function (module, exports, require) {
  var a;
  var o;
  var n;
  (a = {})[a.None = 0] = "None";
  a[a.CodeGenerate = 1] = "CodeGenerate";
  a[a.CodeDebug = 2] = "CodeDebug";
  a[a.CodeKnowledge = 3] = "CodeKnowledge";
  a[a.CodeBase = 4] = "CodeBase";
  a[a.CodeArtifacts = 5] = "CodeArtifacts";
  a[a.DocLink = 7] = "DocLink";
  let i = a;
  (o = {}).Status = "status";
  o.Artifact = "artifact";
  o.ArtifactMeta = "artifact_meta";
  o.ArtifactCodeFile = "artifact_code_file";
  let c = o;
  (n = {}).DevMode = "dev_mode";
  n.ChatMode = "chat_mode";
  n.InstructionOpt = "instruction_opt";
  let d = n;
  require.d(exports, {
    ConfigKeys: function () {
      return d;
    },
    ArtifactKeys: function () {
      return c;
    },
    SkillActionType: function () {
      return i;
    }
  });
}