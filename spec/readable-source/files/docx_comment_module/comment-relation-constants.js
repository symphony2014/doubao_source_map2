// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G9' to 'relationEvents'
// - Renamed export 'XO' to 'validityStates'
// - Renamed export 'XV' to 'commentTypes'
// - Renamed export 'Y9' to 'existenceStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 127350
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var a;
  (o = {}).relationChange = "relationChange$";
  o.commentRelationData = "commentRelationData";
  o.sourceVersionChange = "sourceVersionChange";
  o.thirdPartyChange = "thirdPartyUpdateComments$";
  o.trustedRelationChange = "trustedRelationChange$";
  let s = o;
  (r = {}).localComment = "localComment";
  r.firstPartyComment = "firstPartyComment";
  r.thirdPartyComment = "thirdPartyComment";
  r.unknown = "unknown";
  let c = r;
  (l = {})[l.unknown = 0] = "unknown";
  l[l.exist = 1] = "exist";
  l[l.delete = 2] = "delete";
  let d = l;
  (a = {}).invalid = "invalid";
  a.versionOvered = "versionOvered";
  a.valid = "valid";
  let h = a;
  require.d(exports, {
    relationEvents: function () {
      return s;
    },
    validityStates: function () {
      return h;
    },
    commentTypes: function () {
      return c;
    },
    existenceStatus: function () {
      return d;
    }
  });
}