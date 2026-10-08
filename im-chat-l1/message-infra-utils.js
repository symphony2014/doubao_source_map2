// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'buildUrlWithQuery'
// - Renamed export 'U' to 'filterRecentMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 716917
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  let r = e => {
    let t = [];
    for (let n of e) {
      if (function (e) {
        let t = Date.now();
        return t - function (e) {
          let t = Date.now();
          if (e % 10 ** (t.toString().length - 1) !== e) {
            return e;
          }
          {
            let n = e * 1000;
            if (n < t) {
              return n;
            } else {
              return e;
            }
          }
        }(e || t) < 300000;
      }(Number(n.createTime))) {
        t.push(n);
      }
    }
    return t;
  };
  function a(e, t) {
    return queryStringUtils_2_1.queryStringUtils.stringifyUrl({
      url: e,
      query: t
    });
  }
  require.d(exports, {
    buildUrlWithQuery: function () {
      return a;
    },
    filterRecentMessages: function () {
      return r;
    }
  });
}