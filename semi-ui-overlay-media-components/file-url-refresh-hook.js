// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useRefreshedFileUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 875965
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillDeepChangeCb = require("async-skill-deep-change-cb") /*id: 29951*/;
  var fileUrlRefreshUtils = require("file-url-refresh-utils") /*id: 66377*/;
  let a = new Map();
  let o = new Map();
  let l = e => {
    let {
      fileUrls: t,
      enable: n = true
    } = e;
    let [l, u] = reactCoreLibraryReexport.useState();
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      if (n) {
        (async () => {
          u(await Promise.all(t.map(async e => {
            if (a.has(e)) {
              let t = a.get(e) || e;
              let n = fileUrlRefreshUtils.getUrlExpireTime(t);
              if (n && n > Date.now() / 1000 + 600) {
                return t;
              }
            }
            if (o.has(e)) {
              return o.get(e) || e;
            }
            let t = fileUrlRefreshUtils.refreshFileUrl(e).then(t => {
              a.set(e, t);
              o.delete(e);
              return t;
            });
            o.set(e, t);
            return t;
          })));
        })();
      }
    }, [t, n]);
    return reactCoreLibraryReexport.useMemo(() => ({
      latestFileUrls: l || t
    }), [l, t]);
  };
  require.d(exports, {
    useRefreshedFileUrls: function () {
      return l;
    }
  });
}