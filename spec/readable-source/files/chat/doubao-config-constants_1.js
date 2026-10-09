// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FP' to 'flowCdnUrl'
// - Renamed export 'IC' to 'domainName'
// - Renamed export 'LU' to 'productName'
// - Renamed export 'S6' to 'oceanFlowCdnUrl'
// - Renamed export '_u' to 'wwwDomain'
// - Renamed export 'gF' to 'productNameLower'
// - Renamed export 'j2' to 'productNameChinese'
// - Renamed export 'un' to 'trackingUrl'
// - Renamed export 'zP' to 'httpsBaseUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 234080
         */
module.exports = function (module, exports, require) {
  let i = "Doubao";
  let r = "doubao";
  let o = "豆包";
  let a = "doubao.com";
  let l = `www.${a}`;
  let s = `https://${l}`;
  let u = "https://doubao.zlinkurl.cn/o3F9";
  let c = "https://sf-sf-flow-web-cdn-nontt.ciciaicdn.com/obj/ocean-flow-web-sg";
  let d = "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao";
  require.d(exports, {
    flowCdnUrl: function () {
      return d;
    },
    domainName: function () {
      return a;
    },
    productName: function () {
      return i;
    },
    oceanFlowCdnUrl: function () {
      return c;
    },
    wwwDomain: function () {
      return l;
    },
    productNameLower: function () {
      return r;
    },
    productNameChinese: function () {
      return o;
    },
    trackingUrl: function () {
      return u;
    },
    httpsBaseUrl: function () {
      return s;
    }
  });
}