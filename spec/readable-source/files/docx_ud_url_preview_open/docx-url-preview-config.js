// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LL' to 'CacheTypes'
// - Renamed export 'vc' to 'previewConfig'
// - Renamed export 'a3' to 'setJssdkSession'
// - Renamed export 'Nb' to 'setPreviewEnv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 64452
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var o;
  var s;
  var feishuApiConfig = require("feishu-api-config") /*id: 822976*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  (n = o ||= {}).Init = "init";
  n.Update = "update";
  (r = s ||= {}).None = "none";
  r.Memory = "memory";
  r.Persistent = "persistent";
  var larkUrlPreviewConfig = require("lark-url-preview-config") /*id: 347671*/;
  let u = new eventEmitterWrapper_1.eventEmitter();
  let g = new class {
    constructor() {
      this.inited = false;
      this.frontier = false;
      this.registeredComponents = {};
      this.urls = {};
      this.iconSourceType = "local";
      this.cache = {
        cacheType: s.None,
        maxCount: 100,
        expiredTime: 600
      };
    }
    init(e) {
      var t;
      if (this.inited) {
        if ((t = this.logging) !== null && t !== undefined) {
          t.error(`${larkUrlPreviewConfig.moduleTag} UrlPreview Config was inited, can' be init again`);
        }
        return;
      }
      Object.keys(e).forEach(t => {
        this[t] = e[t];
      });
      this.inited = true;
      u.emit(o.Init);
    }
    update(e) {
      var t;
      Object.keys(e).forEach(t => {
        this[t] = e[t];
      });
      if ((t = this.onUpdate) !== null && t !== undefined) {
        t.call(this);
      }
      u.emit(o.Update);
    }
  }();
  let M = e => {
    g.jssdkSession = e;
  };
  let d = e => {
    g.env = e;
  };
  var docxPreviewUrlManager = require("docx-preview-url-manager") /*id: 686414*/;
  function p() {
    if (!g.useServerJssdkSession) {
      return;
    }
    let e = {
      boe: "feishu_boe",
      production: "feishu",
      prerelease: "feishu_pre",
      development: "feishu_boe"
    }[g.env || "boe"];
    let t = feishuApiConfig.envConfigs[e];
    docxPreviewUrlManager.docxPreviewManager.config({
      urls: t,
      getConfig: () => ({
        jssdk_session: g.jssdkSession
      })
    });
  }
  u.on(o.Init, p);
  u.on(o.Update, p);
  require.d(exports, {
    CacheTypes: function () {
      return s;
    },
    previewConfig: function () {
      return g;
    },
    setJssdkSession: function () {
      return M;
    },
    setPreviewEnv: function () {
      return d;
    }
  });
}