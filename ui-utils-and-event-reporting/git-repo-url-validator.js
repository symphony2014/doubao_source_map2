// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gz' to 'isGitSshUrl'
// - Renamed export 'wq' to 'isChineseGitUrl'
// - Renamed export 'zq' to 'isGithubUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 904797
         */
module.exports = function (module, exports, require) {
  let i = /^https?:\/\/(www\.)?github\.com\/[\w\-]+(\/[\w\-\.]+)?(\/.*)?$/;
  let o = /^git@github\.com:[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+\.git$/;
  let a = e => i.test(e) || o.test(e);
  let l = /^https?:\/\/(www\.)?gitee\.com\/[\w\-]+(\/[\w\-\.]+)?(\/.*)?$/;
  let r = /^https?:\/\/(www\.)?gitcode\.net\/[\w\-]+(\/[\w\-\.]+)?(\/.*)?$/;
  let s = /^https?:\/\/(www\.)?gitlink\.org\.cn\/[\w\-]+(\/[\w\-\.]+)?(\/.*)?$/;
  let d = e => l.test(e) || r.test(e) || s.test(e);
  let c = /^git@[\w\.\-]+:[\w\-]+(\/[\w\-\.]+)?(\.git)?$/;
  let u = e => c.test(e) && !o.test(e);
  require.d(exports, {
    isGitSshUrl: function () {
      return u;
    },
    isChineseGitUrl: function () {
      return d;
    },
    isGithubUrl: function () {
      return a;
    }
  });
}