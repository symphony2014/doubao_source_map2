// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'UserDetailManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 794466
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxI18nTextUtil = require("docx-i18n-text-util") /*id: 979462*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function f(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  class h {
    fetch(e, n, r = docTokenHelperUtils.resolveDocToken()) {
      let i = this._getUserDetailFromAllMap(n);
      if (i) {
        return i;
      }
      let o = {};
      o.result = new Promise((e, n) => Object.assign(o, {
        resolve: e,
        reject: n
      }));
      this.waitMap.set(n, o);
      this.uidToRecordIdMap.set(n, e);
      this.recordToPageTokenMap.set(e, r);
      this.batchFetch();
      return o.result;
    }
    hasUserInfo(e) {
      let n = this.readyMap.get(e);
      if (n) {
        let {
          name: e,
          en_name: r
        } = n;
        return !!e && !!r;
      }
      return false;
    }
    static fetch(e, n, r) {
      return h.instance.fetch(e, n, r);
    }
    _getUserDetailFromAllMap(e) {
      let n = null;
      if (this.hasUserInfo(e)) {
        n = this.readyMap.get(e);
      } else {
        n = this.fetchMap.get(e)?.result || this.waitMap.get(e)?.result;
      }
      if (n) {
        return Promise.resolve(n);
      } else {
        return null;
      }
    }
    static getUserDetailFromAllMap(e) {
      return h.instance._getUserDetailFromAllMap(e);
    }
    static applyClientVar(e) {
      let {
        user_map: n
      } = e;
      if (n) {
        for (let e in n) {
          if (n[e]) {
            h.setCache(e, n[e]);
          }
        }
      }
    }
    static applyNewChangesExtra(e) {
      for (let n in e) {
        if (e[n]) {
          h.setCache(n, e[n]);
        }
      }
    }
    static setCache(e, n) {
      let r = {
        ...h.getCache(e),
        ...n
      };
      h.instance.readyMap.set(e, r);
      h.instance.eventEmitter.emit("change", e, r);
    }
    static getCache(e) {
      return h.instance.readyMap.get(e);
    }
    static getUserShowName(e) {
      var n;
      let r = h.getCache(e);
      if (!r) {
        return;
      }
      let o = platformDocUtils.HiA.getLanguage() || "en";
      let {
        name: s,
        en_name: u,
        i18n_value: a
      } = r;
      return docxI18nTextUtil.getDocxI18nText(a, s, (((n = o.startsWith) === null || n === undefined ? undefined : n.call(o, "zh")) ? s : u) || u || s);
    }
    static getUserList() {
      return h.instance.readyMap.keys();
    }
    static onChange(e) {
      h.instance.eventEmitter.on("change", e);
    }
    static offChange(e) {
      h.instance.eventEmitter.off("change", e);
    }
    constructor() {
      f(this, "clientVar", undefined);
      f(this, "waitMap", new Map());
      f(this, "fetchMap", new Map());
      f(this, "readyMap", new Map());
      f(this, "uidToRecordIdMap", new Map());
      f(this, "recordToPageTokenMap", new Map());
      f(this, "eventEmitter", new docxEditorEventConstantsAndManager.EventEmitter());
      f(this, "batchFetch", debounceUtil_1_1.debounce(async () => {
        let e = [...this.waitMap.keys()];
        if (!e.length) {
          return;
        }
        e.forEach(e => function (e, n, r) {
          let i = n.get(e);
          n.delete(e);
          r.set(e, i);
        }(e, this.waitMap, this.fetchMap));
        let n = {};
        let r = e.map(e => this.uidToRecordIdMap.get(e));
        let i = {};
        r.reduce((e, n) => {
          let r = this.recordToPageTokenMap.get(n) || docTokenHelperUtils.resolveDocToken();
          e[r] ||= [];
          e[r].push(n);
          return e;
        }, i);
        docxBlockValidatorUtils.wrapDocxEventCollector(lazyRecordClientvars.docxRecordVar, {
          no_user_map: 1
        });
        try {
          for (let e of Object.keys(i)) {
            let r = (await docxApiConstantsExports.docxApiService.fetchUserInfo(Array.from(new Set(i[e])), e)).data.user_map;
            Object.assign(n, r);
          }
        } catch (e) {
          n = null;
        }
        e.forEach(e => {
          let r = this.fetchMap.get(e);
          if (!r) {
            return;
          }
          if (!n) {
            this.fetchMap.delete(e);
            r.reject(Error("user detail fetch failed"));
            return;
          }
          let i = n[e];
          if (!i) {
            this.fetchMap.delete(e);
            r.reject(Error("fetch_success_but_not_data"));
            return;
          }
          this.fetchMap.delete(e);
          h.setCache(e, i);
          r.resolve(i);
        });
      }, 100));
    }
  }
  f(h, "instance", new h());
  require.d(exports, {
    UserDetailManager: function () {
      return h;
    }
  });
}