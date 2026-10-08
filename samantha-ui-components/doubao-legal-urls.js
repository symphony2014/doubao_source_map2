// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cp' to 'beianQueryUrl'
// - Renamed export 'HD' to 'graceLegalUrl'
// - Renamed export 'J7' to 'businessCheckUrl'
// - Renamed export 'Lp' to 'onlineSafetyUrl'
// - Renamed export 'aW' to 'doubaoBaseUrl'
// - Renamed export 'dw' to 'creditRuleUrl'
// - Renamed export 'kJ' to 'beianCode'
// - Renamed export 'm8' to 'configUrl'
// - Renamed export 'pY' to 'creditActivityRuleUrl'
// - Renamed export 's8' to 'termsUrl'
// - Renamed export 'vW' to 'privacyUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 113045
         */
module.exports = function (module, exports, require) {
  let i = "https://www.doubao.com";
  let r = `${i}/legal/terms`;
  let a = "https://lf9-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/grace_legal/835f4b90-a0be-4ef0-bf4c-72e120ed97f4.html";
  let o = "https://sf-flow-web-cdn.ciciai.com/obj/ies-hotsoon-draft-sg/wolf/DIS_AU_online_safety_pc.html";
  let l = `${i}/legal/privacy`;
  let s = "https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&serial=91110102MACQD9K640-SAIC_SHOW_10000091110102MACQD9K6401769396355299&signData=MEQCIBy+SZOAg3D0+DmdFFdraKv+S60Z/1Ow1BE+YsVTfZh/AiBb2+/IWX/CxYJUR1N+cgL4PcmJpN2A456Y6hH16+REKw==";
  let c = "https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-flow.web.doubao-default";
  let u = "https://beian.mps.gov.cn/#/query/webSearch?code=11010802045808";
  let d = "京公网安备11010802045808";
  let p = `${i}/legal/credit/pc/rule`;
  let h = `${i}/legal/credit-activity/pc/rule`;
  require.d(exports, {
    beianQueryUrl: function () {
      return u;
    },
    graceLegalUrl: function () {
      return a;
    },
    businessCheckUrl: function () {
      return s;
    },
    onlineSafetyUrl: function () {
      return o;
    },
    doubaoBaseUrl: function () {
      return i;
    },
    creditRuleUrl: function () {
      return p;
    },
    beianCode: function () {
      return d;
    },
    configUrl: function () {
      return c;
    },
    creditActivityRuleUrl: function () {
      return h;
    },
    termsUrl: function () {
      return r;
    },
    privacyUrl: function () {
      return l;
    }
  });
}