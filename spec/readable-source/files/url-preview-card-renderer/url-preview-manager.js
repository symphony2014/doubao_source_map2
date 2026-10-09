// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LL' to 'CacheType'
// - Renamed export 'vc' to 'urlPreviewManager'
// - Renamed export 'a3' to 'setJssdkSession'
// - Renamed export 'Nb' to 'setEnvironment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 69495
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var _;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  (r = o ||= {}).Init = "init";
  r.Update = "update";
  (i = _ ||= {}).None = "none";
  i.Memory = "memory";
  i.Persistent = "persistent";
  var larkUrlPreviewTypographyStyles = require("lark-url-preview-typography-styles") /*id: 622376*/;
  let l = new eventEmitterWrapper_1.eventEmitter();
  let c = new class {
    constructor() {
      this.inited = false;
      this.frontier = false;
      this.registeredComponents = {};
      this.urls = {};
      this.iconSourceType = "local";
      this.cache = {
        cacheType: _.None,
        maxCount: 100,
        expiredTime: 600
      };
    }
    init(e) {
      var t;
      if (this.inited) {
        if ((t = this.logging) !== null && t !== undefined) {
          t.error(`${larkUrlPreviewTypographyStyles.moduleTitle} UrlPreview Config was inited, can' be init again`);
        }
        return;
      }
      Object.keys(e).forEach(t => {
        this[t] = e[t];
      });
      this.inited = true;
      l.emit(o.Init);
    }
    update(e) {
      var t;
      Object.keys(e).forEach(t => {
        this[t] = e[t];
      });
      if ((t = this.onUpdate) !== null && t !== undefined) {
        t.call(this);
      }
      l.emit(o.Update);
    }
  }();
  let T = e => {
    c.jssdkSession = e;
  };
  let I = e => {
    c.env = e;
  };
  require.d(exports, {
    CacheType: function () {
      return _;
    },
    urlPreviewManager: function () {
      return c;
    },
    setJssdkSession: function () {
      return T;
    },
    setEnvironment: function () {
      return I;
    }
  });
}