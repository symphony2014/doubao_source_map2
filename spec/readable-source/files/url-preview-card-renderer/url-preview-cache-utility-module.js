// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TZ' to 'createCancelablePromise'
// - Renamed export 'LL' to 'CacheType'
// - Renamed export 'lP' to 'cacheExpiryTime'
// - Renamed export 'xx' to 'version'
// - Renamed export 'YN' to 'MemoryCache'
// - Renamed export 'Is' to 'AesGcmCrypto'
// - Renamed export 'f' to 'getModuleByType'
// - Renamed export 'Dl' to 'typographyStyles'
// - Renamed export 'hq' to 'hasOverflow'
// - Renamed export 'vc' to 'urlPreviewManager'
// - Renamed export 'Ap' to 'moduleTitle'
// - Renamed export 'Ef' to 'resolveColorValue'
// - Renamed export 'p5' to 'generateUrlPreviewHash'
// - Renamed export 'O4' to 'componentName'
// - Renamed export '$3' to 'hexToColorMatrix'
// - Renamed export 'rn' to 'resolveLinearGradient'
// - Renamed export 'a3' to 'setJssdkSession'
// - Renamed export 'bo' to 'deduplicateByType'
// - Renamed export 'ww' to 'IndexedDbCache'
// - Renamed export 'Q' to 'stripUrlQueryParams'
// - Renamed export 'nx' to 'copyToClipboard'
// - Renamed export 'hb' to 'generateRandomId'
// - Renamed export 'H2' to 'formatLengthValue'
// - Renamed export 'np' to 'rgbToHex'
// - Renamed export 'Nb' to 'setEnvironment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 779458
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var urlPreviewManager = require("url-preview-manager") /*id: 69495*/;
  var colorFormatUtils = require("color-format-utils") /*id: 912018*/;
  var larkUrlPreviewTypographyStyles = require("lark-url-preview-typography-styles") /*id: 622376*/;
  var designTokenColorValueResolver = require("design-token-color-value-resolver") /*id: 598953*/;
  function l(e) {
    var t;
    return ((t = urlPreviewManager.urlPreviewManager?.registeredElements) === null || t === undefined ? undefined : t.filter(t => t.type === e))?.[0]?.module;
  }
  function c(e) {
    let t = new Set();
    return e.reduceRight((e, n) => {
      if (!t.has(n.type)) {
        t.add(n.type);
        e.unshift(n);
      }
      return e;
    }, []);
  }
  function T(e) {
    let t = e.style.overflow;
    let n = e.style.transform;
    if (!n) {
      e.style.transform = "translateZ(0)";
    }
    if (!t || t === "visible") {
      e.style.overflow = "hidden";
    }
    let r = e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight;
    e.style.overflow = t;
    if (!n) {
      e.style.transform = "";
    }
    return r;
  }
  let I = 0;
  function A(e) {
    return !e || !(e.expiredAt <= 0) && e.expiredAt * 1000 <= Date.now();
  }
  function s(e, t) {
    if (typeof e == "number") {
      return e;
    } else if (typeof t == "number" && t > 0) {
      return Date.now() / 1000 + t;
    } else {
      return I;
    }
  }
  function u(e) {
    return [undefined, null, ""].includes(e);
  }
  (r = i ||= {})[r.LRU = 1] = "LRU";
  class d {
    constructor(e) {}
  }
  class g extends d {
    constructor(e) {
      super(e);
      this.cacheObj = {};
      this.maxCount = e.maxCount;
      this.expiredTime = e.expiredTime;
    }
    async has(e) {
      return !A(this.cacheObj[e]);
    }
    async setItem(e, t, n) {
      if (!e || u(t)) {
        return;
      }
      let r = {
        key: e,
        value: t,
        expiredAt: s(n, this.expiredTime),
        usedAt: Date.now() / 1000
      };
      this.cacheObj[e] = r;
      this.eliminate();
    }
    async setItems(e) {
      e.filter(e => e.key && !u(e.value)).forEach(e => {
        this.cacheObj[e.key] = Object.assign(Object.assign({}, e), {
          expiredAt: s(e.expiredAt, this.expiredTime),
          usedAt: Date.now() / 1000
        });
      });
      this.eliminate();
    }
    async getItem(e, t) {
      let {
        updateAgeOnGet: n = true
      } = t || {};
      let r = this.cacheObj[e];
      if (!A(r)) {
        if (n) {
          r.usedAt = Date.now() / 1000;
        }
        return r;
      }
    }
    async getItems(e, t) {
      return (await Promise.all(e.map(e => this.getItem(e, t)))).filter(e => e).reduce((e, t) => {
        e[t.key] = t;
        return e;
      }, {});
    }
    async deleteItems(e) {
      (typeof e == "string" ? [e] : e).forEach(e => {
        delete this.cacheObj[e];
      });
    }
    async count() {
      return Object.values(this.cacheObj).length;
    }
    async eliminate() {
      Object.values(this.cacheObj).forEach(e => {
        if (A(e)) {
          delete this.cacheObj[e.key];
        }
      });
      let e = await this.count();
      if (e > this.maxCount) {
        let t = e - this.maxCount;
        let n = Object.entries(this.cacheObj).sort((e, t) => e[1].usedAt - t[1].usedAt).slice(0, t).map(e => e[0]);
        this.deleteItems(n);
      }
    }
    async clear() {
      this.cacheObj = {};
    }
  }
  var indexedDbStoreWrapper = require("indexed-db-store-wrapper") /*id: 813101*/;
  class S extends d {
    constructor(e) {
      super(e);
      this.maxCount = e.maxCount;
      this.expiredTime = e.expiredTime;
      this.crypto = e.crypto;
      this.idb = new indexedDbStoreWrapper.IndexedDbStore({
        dbName: e.dbName,
        storeName: e.storeName
      });
    }
    async has(e) {
      return !A(await this.idb.getItem(e));
    }
    async setItem(e, t, n) {
      if (!e || u(t)) {
        return;
      }
      let {
        text: r,
        iv: i
      } = await this.crypto.encrypt(t);
      let o = {
        key: e,
        value: r,
        iv: i,
        expiredAt: s(n, this.expiredTime),
        usedAt: Date.now() / 1000
      };
      await this.idb.setItem(e, o);
      this.eliminate();
    }
    async setItems(e) {
      let t = e.filter(e => e.key && !u(e.value)).map(async e => {
        let {
          text: t,
          iv: n
        } = await this.crypto.encrypt(e.value);
        return {
          key: e.key,
          value: t,
          iv: n,
          expiredAt: s(e.expiredAt, this.expiredTime),
          usedAt: Date.now() / 1000
        };
      });
      let n = (await Promise.all(t)).reduce((e, t) => {
        e[t.key] = t;
        return e;
      }, {});
      await this.idb.setItems(n);
      this.eliminate();
    }
    async getItem(e, t) {
      let {
        updateAgeOnGet: n = true
      } = t || {};
      let r = await this.idb.getItem(e);
      if (A(r)) {
        return;
      }
      if (n) {
        r.usedAt = Date.now() / 1000;
        await this.idb.setItem(e, r);
      }
      let i = await this.crypto.decrypt(r.value, r.iv);
      return Object.assign(Object.assign({}, r), {
        value: i
      });
    }
    async getItems(e, t) {
      return (await Promise.all(e.map(e => this.getItem(e, t)))).filter(e => e).reduce((e, t) => {
        e[t.key] = t;
        return e;
      }, {});
    }
    async deleteItems(e) {
      if (typeof e == "string") {
        this.idb.removeItem(e);
      } else {
        this.idb.removeItems(e);
      }
    }
    async count() {
      let e = 0;
      return this.idb.withIdbStore("readonly", t => {
        let n = t.openCursor();
        n.onsuccess = () => {
          if (!n.result) {
            return;
          }
          let t = n.result;
          if (!A(t.value)) {
            e += 1;
          }
          t.continue();
        };
      }).then(() => e);
    }
    async keys() {
      let e = [];
      return this.idb.withIdbStore("readonly", t => {
        let n = t.openCursor();
        n.onsuccess = () => {
          if (!n.result) {
            return;
          }
          let t = n.result;
          let r = t.value;
          if (!A(r)) {
            e.push(r.key);
          }
          t.continue();
        };
      }).then(() => e);
    }
    async eliminate() {
      let e = {};
      return this.idb.withIdbStore("readwrite", t => {
        let n = t.openCursor();
        n.onsuccess = () => {
          if (!n.result) {
            return;
          }
          let t = n.result;
          let r = t.value;
          if (A(r)) {
            t.delete();
          } else {
            e[r.key] = r.usedAt;
          }
          t.continue();
        };
      }).then(() => {
        let t = Object.keys(e).length;
        if (t > this.maxCount) {
          let n = t - this.maxCount;
          let r = Object.entries(e).sort((e, t) => e[1] - t[1]).slice(0, n).map(e => e[0]);
          return this.deleteItems(r);
        }
      });
    }
    async clear() {
      this.idb.clear();
    }
  }
  function C(e, t) {
    let n = (e & 65535) + (t & 65535);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | n & 65535;
  }
  function L(e, t, n, r, i, o) {
    var _;
    return C((_ = C(C(t, e), C(r, o))) << i | _ >>> 32 - i, n);
  }
  function p(e, t, n, r, i, o, _) {
    return L(t & n | ~t & r, e, t, i, o, _);
  }
  function M(e, t, n, r, i, o, _) {
    return L(t & r | n & ~r, e, t, i, o, _);
  }
  function f(e, t, n, r, i, o, _) {
    return L(t ^ n ^ r, e, t, i, o, _);
  }
  function O(e, t, n, r, i, o, _) {
    return L(n ^ (t | ~r), e, t, i, o, _);
  }
  class R {
    constructor(e) {
      this.privateKey = e.privateKey;
      let t = new TextEncoder();
      this.keyPromise = window.crypto.subtle.importKey("raw", t.encode(this.privateKey), "AES-GCM", true, ["encrypt", "decrypt"]);
    }
    async encrypt(e) {
      let t = new TextEncoder();
      let n = await this.keyPromise;
      let r = window.crypto.getRandomValues(new Uint8Array(32));
      return {
        text: await window.crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: r
        }, n, t.encode(JSON.stringify(e))),
        iv: r
      };
    }
    async decrypt(e, t) {
      let n = await this.keyPromise;
      let r = await window.crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: t
      }, n, e);
      return JSON.parse(new TextDecoder().decode(r));
    }
  }
  async function D(e, t) {
    let n = new TextEncoder().encode(t);
    return Array.from(new Uint8Array(await crypto.subtle.digest(e, n))).map(e => e.toString(16).padStart(2, "0")).join("");
  }
  async function P(e) {
    return D("SHA-1", e);
  }
  let m = async e => {
    var t;
    if (e) {
      return await P("08a441" + function (e) {
        let t = "0123456789abcdef";
        let n = "";
        for (let r = 0; r < e.length; r += 1) {
          let i = e.charCodeAt(r);
          n += t.charAt(i >>> 4 & 15) + t.charAt(i & 15);
        }
        return n;
      }(function (e) {
        let t = "";
        let n = e.length * 32;
        for (let r = 0; r < n; r += 8) {
          t += String.fromCharCode(e[r >> 5] >>> r % 32 & 255);
        }
        return t;
      }(function (e, t) {
        e[t >> 5] |= 128 << t % 32;
        e[(t + 64 >>> 9 << 4) + 14] = t;
        let n = 1732584193;
        let r = -271733879;
        let i = -1732584194;
        let o = 271733878;
        for (let t = 0; t < e.length; t += 16) {
          let _ = n;
          let a = r;
          let E = i;
          let l = o;
          n = p(n, r, i, o, e[t], 7, -680876936);
          o = p(o, n, r, i, e[t + 1], 12, -389564586);
          i = p(i, o, n, r, e[t + 2], 17, 606105819);
          r = p(r, i, o, n, e[t + 3], 22, -1044525330);
          n = p(n, r, i, o, e[t + 4], 7, -176418897);
          o = p(o, n, r, i, e[t + 5], 12, 1200080426);
          i = p(i, o, n, r, e[t + 6], 17, -1473231341);
          r = p(r, i, o, n, e[t + 7], 22, -45705983);
          n = p(n, r, i, o, e[t + 8], 7, 1770035416);
          o = p(o, n, r, i, e[t + 9], 12, -1958414417);
          i = p(i, o, n, r, e[t + 10], 17, -42063);
          r = p(r, i, o, n, e[t + 11], 22, -1990404162);
          n = p(n, r, i, o, e[t + 12], 7, 1804603682);
          o = p(o, n, r, i, e[t + 13], 12, -40341101);
          i = p(i, o, n, r, e[t + 14], 17, -1502002290);
          r = p(r, i, o, n, e[t + 15], 22, 1236535329);
          n = M(n, r, i, o, e[t + 1], 5, -165796510);
          o = M(o, n, r, i, e[t + 6], 9, -1069501632);
          i = M(i, o, n, r, e[t + 11], 14, 643717713);
          r = M(r, i, o, n, e[t], 20, -373897302);
          n = M(n, r, i, o, e[t + 5], 5, -701558691);
          o = M(o, n, r, i, e[t + 10], 9, 38016083);
          i = M(i, o, n, r, e[t + 15], 14, -660478335);
          r = M(r, i, o, n, e[t + 4], 20, -405537848);
          n = M(n, r, i, o, e[t + 9], 5, 568446438);
          o = M(o, n, r, i, e[t + 14], 9, -1019803690);
          i = M(i, o, n, r, e[t + 3], 14, -187363961);
          r = M(r, i, o, n, e[t + 8], 20, 1163531501);
          n = M(n, r, i, o, e[t + 13], 5, -1444681467);
          o = M(o, n, r, i, e[t + 2], 9, -51403784);
          i = M(i, o, n, r, e[t + 7], 14, 1735328473);
          r = M(r, i, o, n, e[t + 12], 20, -1926607734);
          n = f(n, r, i, o, e[t + 5], 4, -378558);
          o = f(o, n, r, i, e[t + 8], 11, -2022574463);
          i = f(i, o, n, r, e[t + 11], 16, 1839030562);
          r = f(r, i, o, n, e[t + 14], 23, -35309556);
          n = f(n, r, i, o, e[t + 1], 4, -1530992060);
          o = f(o, n, r, i, e[t + 4], 11, 1272893353);
          i = f(i, o, n, r, e[t + 7], 16, -155497632);
          r = f(r, i, o, n, e[t + 10], 23, -1094730640);
          n = f(n, r, i, o, e[t + 13], 4, 681279174);
          o = f(o, n, r, i, e[t], 11, -358537222);
          i = f(i, o, n, r, e[t + 3], 16, -722521979);
          r = f(r, i, o, n, e[t + 6], 23, 76029189);
          n = f(n, r, i, o, e[t + 9], 4, -640364487);
          o = f(o, n, r, i, e[t + 12], 11, -421815835);
          i = f(i, o, n, r, e[t + 15], 16, 530742520);
          r = f(r, i, o, n, e[t + 2], 23, -995338651);
          n = O(n, r, i, o, e[t], 6, -198630844);
          o = O(o, n, r, i, e[t + 7], 10, 1126891415);
          i = O(i, o, n, r, e[t + 14], 15, -1416354905);
          r = O(r, i, o, n, e[t + 5], 21, -57434055);
          n = O(n, r, i, o, e[t + 12], 6, 1700485571);
          o = O(o, n, r, i, e[t + 3], 10, -1894986606);
          i = O(i, o, n, r, e[t + 10], 15, -1051523);
          r = O(r, i, o, n, e[t + 1], 21, -2054922799);
          n = O(n, r, i, o, e[t + 8], 6, 1873313359);
          o = O(o, n, r, i, e[t + 15], 10, -30611744);
          i = O(i, o, n, r, e[t + 6], 15, -1560198380);
          r = O(r, i, o, n, e[t + 13], 21, 1309151649);
          n = O(n, r, i, o, e[t + 4], 6, -145523070);
          o = O(o, n, r, i, e[t + 11], 10, -1120210379);
          i = O(i, o, n, r, e[t + 2], 15, 718787259);
          r = O(r, i, o, n, e[t + 9], 21, -343485551);
          n = C(n, _);
          r = C(r, a);
          i = C(i, E);
          o = C(o, l);
        }
        return [n, r, i, o];
      }(function (e) {
        let t = [];
        let n = e.length >> 2;
        for (let e = 0; e < n; e += 1) {
          t[e] = 0;
        }
        let r = e.length * 8;
        for (let n = 0; n < r; n += 8) {
          t[n >> 5] |= (e.charCodeAt(n / 8) & 255) << n % 32;
        }
        return t;
      }(t = unescape(encodeURIComponent(e + "42b91e"))), t.length * 8))));
    } else {
      return null;
    }
  };
  var cardPreviewLocaleConstants = require("card-preview-locale-constants") /*id: 7562*/;
  function b(e = 10, t = 62) {
    let n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let r = [];
    let i = 0;
    let o = 0;
    let _ = 0;
    let a = n.length;
    t = (t = t || a) > a ? a : t;
    if (e) {
      for (i = 0; i < e; i++) {
        _ = Math.random() * t | 0;
        r[i] = n[_];
      }
    } else {
      i = 0;
      r[8] = "-";
      r[13] = "-";
      r[18] = "-";
      r[23] = "-";
      r[14] = "4";
      for (; i < 36; i++) {
        if (!r[i]) {
          o = Math.random() * 16 | 0;
          r[i] = n[i === 19 ? o & 3 | 8 : o];
        }
      }
    }
    return r.join("");
  }
  cardPreviewLocaleConstants.regionCodes.EU_NC;
  cardPreviewLocaleConstants.localeCodes.CN;
  cardPreviewLocaleConstants.regionCodes.BOE_CN;
  cardPreviewLocaleConstants.localeCodes.CN;
  cardPreviewLocaleConstants.regionCodes.BOE_VA;
  cardPreviewLocaleConstants.localeCodes.VA;
  cardPreviewLocaleConstants.regionCodes.EU_EA;
  cardPreviewLocaleConstants.localeCodes.VA;
  cardPreviewLocaleConstants.regionCodes.EU_SG;
  cardPreviewLocaleConstants.localeCodes.SG;
  var selectElementText = require("select-element-text") /*id: 855034*/;
  var y = selectElementText;
  let h = (e, t = {
    container: document.body
  }) => {
    let n = "";
    let r = function (e) {
      let t = document.documentElement.getAttribute("dir") === "rtl";
      let n = document.createElement("textarea");
      n.style.fontSize = "12pt";
      n.style.border = "0";
      n.style.padding = "0";
      n.style.margin = "0";
      n.style.position = "absolute";
      n.style[t ? "right" : "left"] = "-9999px";
      let r = window.pageYOffset || document.documentElement.scrollTop;
      n.style.top = `${r}px`;
      n.setAttribute("readonly", "");
      n.value = e;
      return n;
    }(e);
    t.container.appendChild(r);
    n = y(r);
    document.execCommand("copy");
    r.remove();
    return n;
  };
  function G(e, t) {
    let n = null;
    let r = new Promise((r, i) => {
      n = () => i(t);
      e.then(r, i);
    });
    r.cancel = () => n && n();
    return r;
  }
  function w(e) {
    let t = new URL(e);
    t.search = "";
    return t.toString();
  }
  require.d(exports, {
    createCancelablePromise: function () {
      return G;
    },
    CacheType: function () {
      return urlPreviewManager.CacheType;
    },
    cacheExpiryTime: function () {
      return I;
    },
    version: function () {
      return larkUrlPreviewTypographyStyles.version;
    },
    MemoryCache: function () {
      return g;
    },
    AesGcmCrypto: function () {
      return R;
    },
    getModuleByType: function () {
      return l;
    },
    typographyStyles: function () {
      return larkUrlPreviewTypographyStyles.typographyStyles;
    },
    hasOverflow: function () {
      return T;
    },
    urlPreviewManager: function () {
      return urlPreviewManager.urlPreviewManager;
    },
    moduleTitle: function () {
      return larkUrlPreviewTypographyStyles.moduleTitle;
    },
    resolveColorValue: function () {
      return designTokenColorValueResolver.resolveColorValue;
    },
    generateUrlPreviewHash: function () {
      return m;
    },
    componentName: function () {
      return larkUrlPreviewTypographyStyles.componentName;
    },
    hexToColorMatrix: function () {
      return colorFormatUtils.hexToColorMatrix;
    },
    resolveLinearGradient: function () {
      return designTokenColorValueResolver.resolveLinearGradient;
    },
    setJssdkSession: function () {
      return urlPreviewManager.setJssdkSession;
    },
    deduplicateByType: function () {
      return c;
    },
    IndexedDbCache: function () {
      return S;
    },
    stripUrlQueryParams: function () {
      return w;
    },
    copyToClipboard: function () {
      return h;
    },
    generateRandomId: function () {
      return b;
    },
    formatLengthValue: function () {
      return designTokenColorValueResolver.formatLengthValue;
    },
    rgbToHex: function () {
      return colorFormatUtils.rgbToHex;
    },
    setEnvironment: function () {
      return urlPreviewManager.setEnvironment;
    }
  });
}