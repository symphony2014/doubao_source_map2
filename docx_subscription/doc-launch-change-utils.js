// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gw' to 'cleanSearchParam'
// - Renamed export 'YO' to 'normalizeVersions'
// - Renamed export 'dW' to 'formatChangeBlocks'
// - Renamed export 'hw' to 'fetchDocChanges'
// - Renamed export 'vl' to 'parseChangesQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 395613
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxClientVarsService = require("docx-client-vars-service") /*id: 595324*/;
  function l(e) {
    return e !== decodeURIComponent(e);
  }
  let a = () => {
    let {
      search: e
    } = window.location;
    let i = /changes=([^&]*)/.test(e);
    let n = e.match(/changes=([^&]*)/);
    let o = "";
    if (i && n) {
      o = function (e) {
        let i = 0;
        let n = e;
        while (i < 5 && !l(e)) {
          i++;
          e = decodeURIComponent(e);
        }
        if (l(e)) {
          return n;
        } else {
          return encodeURIComponent(e);
        }
      }(n[1]);
    }
    if (o) {
      return platformDocUtils.o0s.parseQuery(e.replace(/changes=([^&]*)/, `changes=${o}`));
    } else {
      return platformDocUtils.o0s.parseQuery(e);
    }
  };
  let s = e => {
    platformDocUtils.o0s.cleanParamFromSearch(location.href, e);
  };
  let c = e => {
    let i = {};
    e.forEach(e => {
      let {
        type: n,
        token: r,
        version: o
      } = e;
      o.sort();
      let [l, a] = o;
      i[r] = {
        block_type: n,
        block_token: r,
        from_ver: l,
        to_ver: a
      };
    });
    return i;
  };
  let d = e => e.map(e => {
    let {
      type: i,
      token: n,
      versionList: r
    } = e;
    return {
      type: i,
      token: n,
      version: r
    };
  });
  let u = async (e, i) => await docxClientVarsService.docxApiService.fetchCompleteChanges(e, i);
  require.d(exports, {
    cleanSearchParam: function () {
      return s;
    },
    normalizeVersions: function () {
      return d;
    },
    formatChangeBlocks: function () {
      return c;
    },
    fetchDocChanges: function () {
      return u;
    },
    parseChangesQuery: function () {
      return a;
    }
  });
}