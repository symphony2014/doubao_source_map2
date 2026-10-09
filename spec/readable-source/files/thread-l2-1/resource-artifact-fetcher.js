// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getDeepResearchText'
// - Renamed export 'f' to 'getCodeArtifact'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 454647
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let o = e => {
    let t = "";
    for (let n of e) {
      if (n.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
        t += safeJsonUtils.safeParse(n.content, {}).text;
      }
    }
    return t;
  };
  let a = async e => {
    if (!e) {
      return "";
    }
    try {
      let {
        data: t
      } = await apiServicesCollection.SamanthaApiService.GetDeepResearchResource({
        resource_id: e
      });
      let {
        blocks: n = []
      } = t ?? {};
      let i = o(n);
      return i ?? "";
    } catch {
      return "";
    }
  };
  let s = async (e, t) => {
    if (!e || !t) {
      return {};
    }
    try {
      let {
        data: n
      } = await apiServicesCollection.SamanthaApiService.GetCodeArtifact({
        code_id: e,
        version: t
      });
      return n ?? {};
    } catch {
      return {};
    }
  };
  require.d(exports, {
    getDeepResearchText: function () {
      return a;
    },
    getCodeArtifact: function () {
      return s;
    }
  });
}