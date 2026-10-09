// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fl' to 'isDocSsr'
// - Renamed export 'Wn' to 'hasWikiRelation'
// - Renamed export 'yl' to 'getUntitledText'
// - Renamed export 'zI' to 'getProductTitle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 781197
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  function o() {
    return /docSSR=true/.test(hashLocationProxy.default.search);
  }
  function a() {
    return /wikiRelation=true/.test(hashLocationProxy.default.search);
  }
  function i(t, e) {
    if (e.indexOf("zh") > -1) {
      return "未命名文档";
    } else if (e.indexOf("ja") > -1) {
      return "名称未設定ドキュメント";
    } else {
      return "Untitled Docs";
    }
  }
  function c(t, e) {
    if (e.indexOf("zh") > -1) {
      return `${t ? "Lark" : "飞书"}\u{4E91}\u{6587}\u{6863}`;
    } else {
      return `${t ? "Lark" : "Feishu"} Docs`;
    }
  }
  require.d(exports, {
    isDocSsr: function () {
      return o;
    },
    hasWikiRelation: function () {
      return a;
    },
    getUntitledText: function () {
      return i;
    },
    getProductTitle: function () {
      return c;
    }
  });
}