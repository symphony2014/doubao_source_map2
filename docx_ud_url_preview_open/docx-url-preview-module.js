// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxUrlPreviewExports_1'
// - Resolved require(637556) to 'docx-url-preview-exports_1'
// - Renamed variable 'o' to 'docxPreviewUrlManager'
// - Resolved require(686414) to 'docx-preview-url-manager'
// - Renamed variable 's' to 'webCoreConfigManager'
// - Resolved require(406357) to 'web-core-config-manager'
// - Renamed variable 'l' to 'udPreviewConfigManager'
// - Resolved require(266905) to 'ud-preview-config-manager'
// - Renamed variable 'd' to 'axiosHttpClientLibrary'
// - Resolved require(936615) to 'axios-http-client-library'
// - Renamed variable 'I' to 'eventEmitter2Core'
// - Resolved require(944518) to 'event-emitter2-core'
// - Renamed variable 'p' to 'feishuApiConfig'
// - Resolved require(822976) to 'feishu-api-config'
// - Updated imported property 'Hd' to 'cardPreviewConfig' (module 637556)
// - Updated imported property 'fO' to 'UrlPreviewCard' (module 637556)
// - Updated imported property 'LL' to 'CacheTypes' (module 637556)
// - Updated imported property 'vc' to 'previewConfig' (module 637556)
// - Updated imported property 'S1' to 'S1' (module 637556)
// - Updated imported property 'wv' to 'wv' (module 637556)
// - Updated imported property 'a3' to 'setJssdkSession' (module 637556)
// - Updated imported property 'Nb' to 'setPreviewEnv' (module 637556)
// - Updated imported property 'Xn' to 'Xn' (module 637556)
// - Updated imported property 'D5' to 'initConfig' (module 266905)
// - Updated imported property 'ZP' to 'configManager' (module 406357)
// - Updated imported property 'tH' to 'apiPath' (module 822976)
// - Updated imported property 'OB' to 'currentEnv' (module 822976)
// - Updated imported property 'LI' to 'envConfigs' (module 822976)
// - Updated imported property 'ho' to 'hostUrl' (module 822976)
// - Updated imported property 'vh' to 'currentEnvConfig' (module 822976)
// - Updated imported property 'Vi' to 'envTypes' (module 822976)
// - Updated imported property 'Z' to 'axios' (module 936615)
// - Updated imported property 'Z' to 'docxPreviewManager' (module 686414)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 862944
         */
module.exports = function (module, exports, require) {
  let n;
  var docxUrlPreviewExports_1 = require("docx-url-preview-exports_1") /*id: 637556*/;
  var docxPreviewUrlManager = require("docx-preview-url-manager") /*id: 686414*/;
  var webCoreConfigManager = require("web-core-config-manager") /*id: 406357*/;
  var udPreviewConfigManager = require("ud-preview-config-manager") /*id: 266905*/;
  let a = {
    path_tpl: "/static-resource/v1/{{key}}~?image_size={{image_size}}&cut_type={{cut_type}}&quality={{quality}}&format={{format}}&sticker_format=.webp",
    param: {
      cut_type: {
        face: "default-face",
        noop: ""
      },
      format: {
        jpeg: "jpeg",
        middle: "default-middle",
        origin: "default-origin",
        small: "default-small"
      },
      image_size: {
        big: "default-big",
        middle: "default-middle-v2",
        origin: "default-origin",
        small: "default-small"
      },
      quality: {
        noop: "",
        q1: "default-low",
        q70: "default-high"
      }
    }
  };
  let c = {
    resource_url_tpl: {
      fs_avatar_path: "/static-resource/avatar",
      fs_domains: {
        eu_ea: ["https://internal-api-lark-file.larksuite.com"],
        "eu_ea-cdn": ["https://pan16.larksuitecdn.com"],
        eu_nc: ["https://internal-api-lark-file.feishu.cn"],
        "eu_nc-cdn": ["https://s1-imfile.feishucdn.com", "https://s3-imfile.feishucdn.com"]
      },
      fs_image_path: "/static-resource/image",
      fs_unit_tpl: {
        eu_ea: Object.assign({
          hosts: ["https://internal-api-lark-file.larksuite.com"],
          type: "direct"
        }, a),
        "eu_ea-cdn": Object.assign({
          hosts: ["https://pan16.larksuitecdn.com"],
          type: "cdn"
        }, a),
        eu_nc: Object.assign({
          hosts: ["https://internal-api-lark-file.feishu.cn"],
          type: "direct"
        }, a),
        "eu_nc-cdn": Object.assign({
          hosts: ["https://s1-imfile.feishucdn.com", "https://s3-imfile.feishucdn.com"],
          type: "cdn"
        }, a)
      }
    }
  };
  var u = new class {
    constructor() {
      this.settings = c;
      this.getDynamicImageSetting = (e = "eu_nc-cdn") => {
        if (!this.settings) {
          throw Error("[open]call config.init first");
        }
        let t = this.settings;
        if (t && t.resource_url_tpl && t.resource_url_tpl.fs_domains && t.resource_url_tpl.fs_domains[e] && t.resource_url_tpl.fs_image_path) {
          return {
            domains: t.resource_url_tpl.fs_domains[e],
            path: t.resource_url_tpl.fs_image_path
          };
        } else {
          return {
            domains: [],
            path: ""
          };
        }
      };
      this.getFrontierAppKey = () => "";
      this.getDocCustomIconConfig = () => Promise.resolve({
        biz_domain_config: undefined,
        ccm_custom_icon_config: undefined
      });
    }
    async initSettings(e) {
      if (e) {
        this.settings = e;
      }
    }
    async updateSettings(e) {
      this.settings = Object.assign(Object.assign({}, this.settings), e);
    }
    isFeatureEnabled() {
      return false;
    }
    getDomain() {
      return "";
    }
    getFsUnitTpl(e = "eu_nc") {
      let n = `${e}-cdn`;
      let r = this.settings;
      let o = {
        avatar_path: "",
        hosts: []
      };
      if (r.resource_url_tpl?.fs_avatar_path) {
        o.avatar_path = r.resource_url_tpl.fs_avatar_path;
      }
      if (r.resource_url_tpl?.fs_domains) {
        o.hosts = r.resource_url_tpl.fs_domains[n];
      }
      return o;
    }
    getTeaDomain() {
      return "";
    }
  }();
  function g(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; r < n.length; r++) {
        if (t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r])) {
          i[n[r]] = e[n[r]];
        }
      }
    }
    return i;
  }
  udPreviewConfigManager.initConfig(u);
  var M = Object.assign({}, webCoreConfigManager.configManager, {
    async init(e) {
      let {
        resourceUrlTpl: t
      } = e;
      let i = g(e, ["resourceUrlTpl"]);
      webCoreConfigManager.configManager.set(i);
      if (t) {
        u.initSettings(t);
      }
    }
  });
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var eventEmitter2Core = require("event-emitter2-core") /*id: 944518*/;
  var feishuApiConfig = require("feishu-api-config") /*id: 822976*/;
  let y = "config_change_event";
  let h = {
    GET_SESSION_PATH: `${feishuApiConfig.apiPath}/signature/verify`
  };
  let N = new class {
    constructor() {
      this._CONFIG = Object.create(null);
      this.config = async e => {
        let {
          appId: t,
          jsApiList: i,
          nonceStr: n,
          signature: r,
          timestamp: o,
          openId: s,
          url: l,
          locale: a,
          env: c = feishuApiConfig.currentEnv,
          tenantKey: u
        } = e;
        let g = feishuApiConfig.envConfigs[c].host || feishuApiConfig.hostUrl;
        let M = feishuApiConfig.envConfigs[c] || feishuApiConfig.currentEnvConfig;
        let {
          jssdk_session: d
        } = await this._getSession({
          jsApiList: i,
          appId: t,
          nonceStr: n,
          signature: r,
          timestamp: o,
          openId: s,
          url: l,
          host: g,
          tenantKey: u
        });
        this._setConfig({
          jssdk_session: d,
          locale: a,
          apis: M,
          env: c
        });
      };
      this.hasAuth = () => !!this._CONFIG && !!this._CONFIG.jssdk_session;
      this.getConfig = () => this._CONFIG;
      this._setConfig = e => {
        this._CONFIG = Object.assign(Object.assign({}, this._CONFIG), e);
        this._emitter.emit(y, this._CONFIG);
      };
      this._getSession = async e => {
        let {
          appId: t,
          openId: i,
          nonceStr: n,
          jsApiList: r,
          signature: o,
          timestamp: s,
          url: l,
          host: a,
          tenantKey: c
        } = e;
        return new Promise((e, u) => {
          axiosHttpClientLibrary.axios.post(`${a}${h.GET_SESSION_PATH}`, {
            open_id: i,
            signature: o,
            app_id: t,
            timestamp: String(s),
            nonce_str: n,
            url: l,
            js_api_list: r,
            tenant_key: c
          }).then((t = {}) => {
            let {
              data: i = {}
            } = t;
            let {
              code: n,
              data: r,
              msg: o
            } = i;
            if (n === 0) {
              e(r);
            } else {
              u({
                code: n,
                msg: o
              });
            }
          }).catch(u);
        });
      };
      this._emitter = new eventEmitter2Core.EventEmitter2();
    }
    addListener(e, t) {
      this._emitter.on(e, t);
      return () => this._emitter.off(e, t);
    }
    onConfigChange(e) {
      return this.addListener(y, e);
    }
  }();
  let m = false;
  function C() {
    if (m) {
      return;
    }
    m = true;
    if (n) {
      n();
    }
    let e = N.getConfig();
    docxUrlPreviewExports_1.setJssdkSession(e.jssdk_session);
    let t = {
      [feishuApiConfig.envTypes.FEISHU]: "production",
      [feishuApiConfig.envTypes.FEISHU_BOE]: "boe",
      [feishuApiConfig.envTypes.FEISHU_PRE]: "prerelease"
    }[e.env] || "production";
    docxUrlPreviewExports_1.setPreviewEnv(t);
    docxPreviewUrlManager.docxPreviewManager.config({
      urls: e.apis,
      getConfig: () => N.getConfig()
    });
    M.set({
      locale: e.locale || "en-US"
    });
  }
  (function () {
    if (N.hasAuth()) {
      return C();
    }
    n = N.onConfigChange(() => {
      if (N.hasAuth()) {
        C();
      }
    });
  })();
  let {
    getTempUrlPreview: A,
    getUrlPreviews: f,
    notifyCreatePreview: j
  } = docxUrlPreviewExports_1.Xn;
  require.r(exports);
  require.d(exports, {
    config: function () {
      return M;
    },
    ElementType: function () {
      return docxUrlPreviewExports_1.cardPreviewConfig;
    },
    CardPreview: function () {
      return docxUrlPreviewExports_1.UrlPreviewCard;
    },
    CacheType: function () {
      return docxUrlPreviewExports_1.CacheTypes;
    },
    getUrlPreviews: function () {
      return f;
    },
    urlConfig: function () {
      return docxUrlPreviewExports_1.previewConfig;
    },
    init: function () {
      return docxUrlPreviewExports_1.S1;
    },
    notifyCreatePreview: function () {
      return j;
    },
    InlinePreview: function () {
      return docxUrlPreviewExports_1.wv;
    },
    getTempUrlPreview: function () {
      return A;
    }
  });
}