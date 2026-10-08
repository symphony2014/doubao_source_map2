// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LI' to 'envConfigs'
// - Renamed export 'OB' to 'currentEnv'
// - Renamed export 'Vi' to 'envTypes'
// - Renamed export 'ho' to 'hostUrl'
// - Renamed export 'tH' to 'apiPath'
// - Renamed export 'vh' to 'currentEnvConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 822976
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  (r = n ||= {}).FEISHU = "feishu";
  r.FEISHU_PRE = "feishu_pre";
  r.FEISHU_BOE = "feishu_boe";
  let o = {
    [n.FEISHU]: {
      host: "https://open.feishu.cn",
      larkAPI: "https://open.feishu.cn",
      passportAPI: "https://www.feishu.cn",
      applink: "https://applink.feishu.cn"
    },
    [n.FEISHU_PRE]: {
      host: "https://open.feishu-pre.cn",
      larkAPI: "https://open.feishu-pre.cn",
      passportAPI: "https://www.feishu-pre.cn",
      applink: "https://applink.feishu-feishu-pre.cn"
    },
    [n.FEISHU_BOE]: {
      host: "https://open.feishu-boe.cn",
      larkAPI: "https://open.feishu-boe.cn",
      passportAPI: "https://www.feishu-boe.cn",
      applink: "https://applink.feishu-boe.cn"
    }
  };
  let s = n.FEISHU_BOE;
  let l = o[s];
  let a = l.host;
  let c = "/open-apis/h5-jssdk";
  require.d(exports, {
    envConfigs: function () {
      return o;
    },
    currentEnv: function () {
      return s;
    },
    envTypes: function () {
      return n;
    },
    hostUrl: function () {
      return a;
    },
    apiPath: function () {
      return c;
    },
    currentEnvConfig: function () {
      return l;
    }
  });
}