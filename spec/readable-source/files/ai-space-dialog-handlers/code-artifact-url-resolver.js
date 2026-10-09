// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'resolveCodeArtifactUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 198594
         */
module.exports = function (module, exports, require) {
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  async function s(e, t, a) {
    var s;
    var l;
    var c;
    var d;
    let _ = await apiServicesCollection.SamanthaApiService.SearchArtifact({
      conversation_id: e,
      resource_type_list: [artifactResourceType.ArtifactResourceType.Code, artifactResourceType.ArtifactResourceType.CodeDevelopMode]
    });
    let u = (l = _.data) === null || l === undefined ? undefined : (s = l.artifacts) === null || s === undefined ? undefined : s.filter(e => (e == null ? undefined : e.resource_id) === t);
    let p = (u == null ? undefined : u.length) ? u.reduce((e, t) => {
      if ((t.resource_version ?? 0) > (e.resource_version ?? 0)) {
        return t;
      } else {
        return e;
      }
    }) : undefined;
    let m = p == null ? undefined : p.artifact_key;
    let f = p == null ? undefined : p.artifact_id;
    let h = p == null ? undefined : p.type;
    let v = p == null ? undefined : p.status;
    let y = encodeURIComponent(JSON.stringify((d = _.data) === null || d === undefined ? undefined : (c = d.artifacts) === null || c === undefined ? undefined : c.map(e => Object.assign({
      code: {
        node_id: "root"
      }
    }, Object.keys(e).reduce((t, a) => {
      t[stringDeburrUtil_1.deburrString(a)] = e[a];
      return t;
    }, {})))));
    if (m && f) {
      return `${codeRouteUtils.codeChatPath}/${e}?key=${m}&identifier=${f}&type=${h}&status=${v}&meta_list=${y}${a ? `&prev_page=${a}` : ""}`;
    } else if (e) {
      return `${codeRouteUtils.codeChatPath}/${e}${a ? `&prev_page=${a}` : ""}`;
    } else {
      return undefined;
    }
  }
  require.d(exports, {
    resolveCodeArtifactUrl: function () {
      return s;
    }
  });
}