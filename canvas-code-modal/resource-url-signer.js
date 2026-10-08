// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ps' to 'getSignedUrlMaps'
// - Renamed export 'YE' to 'replaceSignedUrls'
// - Renamed export 'eK' to 'useSignedUrls'
// - Renamed export 'oS' to 'getSignedUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 869102
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (r = {})[r.Default = 0] = "Default";
  r[r.Refresh = 1] = "Refresh";
  let s = r;
  var aiSpaceAttachmentTypes = require("ai-space-attachment-types") /*id: 376069*/;
  (i = {})[i.Unknown = 0] = "Unknown";
  i[i.ResourceCenterV1 = 1] = "ResourceCenterV1";
  i[i.UG = 2] = "UG";
  let u = i;
  function c(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let d = () => apiServicesCollection.ResourceApiService.GetResourceConfig();
  let f = new class {
    async getConfig() {
      try {
        if (this.config) {
          return this.config;
        }
        this.fetchPromise ||= d().then(e => {
          this.config = e;
          this.fetchPromise = null;
          return e;
        }).catch(e => {
          this.fetchPromise = null;
          throw e;
        });
        return this.fetchPromise;
      } catch (e) {
        return {
          data: {
            short_link_config: {
              items: []
            }
          }
        };
      }
    }
    constructor() {
      c(this, "config", null);
      c(this, "fetchPromise", null);
    }
  }();
  async function h(e) {
    try {
      if (!e) {
        return false;
      }
      let n = await f.getConfig();
      let {
        urlMatchedConfig: r,
        provider: i,
        midPath: a
      } = function (e, t) {
        if (!e) {
          return {
            urlMatchedConfig: false,
            provider: undefined
          };
        }
        try {
          var n;
          let r;
          let i;
          let a = new URL(e || "");
          let o = false;
          if ((n = t.items) !== null && n !== undefined) {
            n.forEach(e => {
              if (e.schema) {
                if (a.protocol.includes(e.schema || "") && a.host === e.host && a.pathname.split("/").filter(Boolean)?.[0] === e.mid_path) {
                  o = true;
                  r = e == null ? undefined : e.provider;
                  i = e.mid_path;
                }
              }
            });
          }
          return {
            urlMatchedConfig: o,
            provider: r,
            midPath: i
          };
        } catch (e) {
          return {
            urlMatchedConfig: false,
            provider: undefined,
            midPath: ""
          };
        }
      }(e, n.data?.short_link_config || {});
      if (!r) {
        return false;
      }
      if (i === u.UG) {
        return true;
      }
      if (i === u.ResourceCenterV1) {
        return function (e, t = "s") {
          if (!e) {
            return true;
          }
          try {
            let n = new URL(e).pathname.split("/").filter(Boolean);
            let r = (n == null ? undefined : n[0]) === t ? n == null ? undefined : n[1] : null;
            if (!r || r.length <= 4) {
              return true;
            }
            let i = r.substring(4);
            let a = function (e) {
              let t = 0;
              let {
                length: n
              } = e;
              for (let r = 0; r < n; r++) {
                let i = e[r];
                let a = n - 1 - r;
                let o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(i);
                if (o === -1) {
                  throw Error(`Invalid character in base62 string: ${i}`);
                }
                t += o * Math.pow(62, a);
              }
              return t;
            }(i);
            let o = Math.floor(Date.now() / 1000);
            return a < o;
          } catch (e) {
            return true;
          }
        }(e, a);
      }
    } catch (e) {
      return false;
    }
  }
  async function p(e) {
    if (!e) {
      return e;
    }
    try {
      var n;
      if (!(await h(e))) {
        return e;
      }
      let r = await apiServicesCollection.ResourceApiService.ResourceSignUrlV2({
        params: [{
          url: e,
          resource_type: aiSpaceAttachmentTypes.AttachmentTypes.Image,
          image_option: {
            mode: s.Refresh
          }
        }]
      });
      return ((n = r.data) === null || n === undefined ? undefined : n[0]?.main_url) || e;
    } catch (t) {
      return e;
    }
  }
  let g = new Map();
  async function m(e) {
    let t = await Promise.all(e.map(e => h(e)));
    let n = e.filter((e, n) => t[n]);
    if (!n.length) {
      return [];
    }
    let r = [];
    let i = [];
    for (let e of n) {
      if (g.has(e)) {
        i.push({
          oldUrl: e,
          newUrl: g.get(e) || e
        });
      } else {
        r.push(e);
      }
    }
    let a = [];
    if (r.length > 0) {
      var u;
      a = ((u = (await apiServicesCollection.ResourceApiService.ResourceSignUrlV2({
        params: r.map(e => ({
          url: e,
          resource_type: aiSpaceAttachmentTypes.AttachmentTypes.Image,
          image_option: {
            mode: s.Refresh
          }
        }))
      })).data) === null || u === undefined ? undefined : u.map((e, t) => {
        let n = r[t];
        let i = e.main_url || n;
        g.set(n, i);
        return {
          oldUrl: n,
          newUrl: i
        };
      })) || [];
    }
    return [...i, ...a];
  }
  async function v(e) {
    try {
      let t = function (e) {
        try {
          let t;
          let n = [];
          let r = /(?:https?:\/\/|www\.)[^\s"'<>()[\]{}]+(?:\?[^\s"'<>()[\]{}]*)?(?:#[^\s"'<>()[\]{}]*)?/gi;
          while ((t = r.exec(e)) !== null) {
            let e = t[0].trim();
            if (!(e = e.replace(/^["'(]+|[)"']+$/g, "")).startsWith("#")) {
              if (e.startsWith("www.")) {
                e = `https://${e}`;
              }
              n.push(e);
            }
          }
          return n;
        } catch (e) {
          return [];
        }
      }(e);
      return await m(t);
    } catch (e) {
      return [];
    }
  }
  async function y(e) {
    try {
      let t = await v(e);
      let n = e;
      if (t != null) {
        t.forEach(e => {
          n = n.replaceAll(e.oldUrl, e.newUrl);
        });
      }
      return n;
    } catch (t) {
      return e;
    }
  }
  function w(e) {
    let [t, n] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      m(e).then(e => n(e)).catch(() => n([]));
    }, [JSON.stringify(e)]);
    return t;
  }
  require.d(exports, {
    getSignedUrlMaps: function () {
      return v;
    },
    replaceSignedUrls: function () {
      return y;
    },
    useSignedUrls: function () {
      return w;
    },
    getSignedUrl: function () {
      return p;
    }
  });
}