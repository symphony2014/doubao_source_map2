// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getFileUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27661.f1334209.js
         * chunkId: 27661
         * moduleId: 655022
         */
module.exports = function (module, exports, require) {
  let r;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  class a {
    update(e, o) {
      let t = {
        lastUpdate: Date.now(),
        url: o
      };
      this.cacheMap[e] = t;
      return t;
    }
    remove(e) {
      delete this.cacheMap[e];
    }
    async getUrls(e, o, t) {
      let r = [];
      let a = [];
      e.forEach(e => {
        let o = this.cacheMap[e];
        if (!o || Date.now() - o.lastUpdate > 3600000) {
          let t = {
            resolve: emptyExportFunction.emptyFunction,
            reject: emptyExportFunction.emptyFunction
          };
          a.push({
            uri: e,
            handler: t
          });
          o = this.update(e, new Promise((e, o) => {
            t.resolve = e;
            t.reject = o;
          }));
        }
        r.push(o.url);
      });
      if (a.length) {
        apiServicesCollection.ResourceApiService.GetFileURL({
          uris: a.map(e => e.uri),
          type: o,
          format: t == null ? undefined : t.format
        }).then(e => {
          var l;
          if ((l = e.data) === null || l === undefined ? undefined : l.file_urls?.length) {
            e.data.file_urls.forEach((e, r) => {
              let {
                handler: l
              } = a[r];
              if ((t == null ? undefined : t.preloadImage) && o === "image" && e.main_url) {
                let o = new Image();
                o.src = xssContentSanitizer.sanitizeUrl(e.main_url, null, {
                  logType: "js.href/src",
                  reportOnly: "false",
                  blackConfig: "{}",
                  configMode: "merge",
                  isCloseSSRReport: false,
                  bid: "flow_web",
                  region: "cn",
                  urlLimit: "-1",
                  htmlLimit: "-1",
                  isSaveValidUrl: false,
                  isRuntimeLog: false,
                  isDOMParser: true,
                  escapeRule: "escape-report",
                  reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                  scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                  scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                  scmVersion: "1.0.4.168",
                  webpackPluginVersion: "3.4.5",
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlWek-yWW1rNWJscFl$WFJo$np*b1dqSlZkR1JZ%25OTWJsSjZX$mhL-m1SW$R%MD0"
                });
                o.onload = () => l.resolve(e);
                o.onerror = () => l.resolve(e);
                o.onabort = () => l.resolve(e);
              } else {
                l.resolve(e);
              }
            });
          } else {
            a.forEach(e => e.handler.reject("no res file"));
          }
        });
      }
      return await Promise.all(r);
    }
    async getUrl(e, o, t) {
      let r = this.cacheMap[e];
      if ((t == null ? undefined : t.skipCache) || !r || Date.now() - r.lastUpdate > 3600000) {
        r = this.update(e, new Promise((r, l) => {
          apiServicesCollection.ResourceApiService.GetFileURL({
            uris: [e],
            type: o
          }).then(i => {
            var s;
            if ((s = i.data) === null || s === undefined ? undefined : s.file_urls?.length) {
              let e = i.data.file_urls[0];
              if ((t == null ? undefined : t.preloadImage) && o === "image" && e.main_url) {
                let o = new Image();
                o.src = xssContentSanitizer.sanitizeUrl(e.main_url, null, {
                  logType: "js.href/src",
                  reportOnly: "false",
                  blackConfig: "{}",
                  configMode: "merge",
                  isCloseSSRReport: false,
                  bid: "flow_web",
                  region: "cn",
                  urlLimit: "-1",
                  htmlLimit: "-1",
                  isSaveValidUrl: false,
                  isRuntimeLog: false,
                  isDOMParser: true,
                  escapeRule: "escape-report",
                  reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                  scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                  scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                  scmVersion: "1.0.4.168",
                  webpackPluginVersion: "3.4.5",
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlWek-yWW1rNWJscFl$WFJo$np*b1dqSlZkR1JZ%25OTWJsSjZX$mhL-m1SW$R%MD0"
                });
                o.onload = () => r(e);
                o.onerror = () => r(e);
                o.onabort = () => r(e);
              } else {
                r(e);
              }
            } else {
              this.remove(e);
              l(Error("null res file"));
            }
          }).catch(e => l(e));
        }));
      }
      return await r.url;
    }
    constructor() {
      var e;
      var o;
      var t;
      o = {};
      if ((e = typeof (t = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var t = e[Symbol.toPrimitive];
        if (t !== undefined) {
          var r = t.call(e, o || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(e = "cacheMap", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = o;
      }
    }
  }
  async function s(e, o, t) {
    r = r || new a();
    return (await r.getUrls(e, o, t)).map(e => e.main_url || e.back_url || "");
  }
  require.d(exports, {
    getFileUrls: function () {
      return s;
    }
  });
}