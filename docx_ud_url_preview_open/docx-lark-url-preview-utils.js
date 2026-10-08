// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TZ' to 'withTimeout'
// - Renamed export 'LL' to 'cacheTypes'
// - Renamed export 'lP' to 'cacheVersion'
// - Renamed export 'xx' to 'larkVersion'
// - Renamed export 'YN' to 'MemoryCache'
// - Renamed export 'Is' to 'AesCrypto'
// - Renamed export 'f' to 'getRegisteredModule'
// - Renamed export 'Dl' to 'typographyStyles'
// - Renamed export 'hq' to 'hasOverflow'
// - Renamed export 'vc' to 'previewConfig'
// - Renamed export 'Ap' to 'moduleTag'
// - Renamed export 'Ef' to 'resolveColorValue'
// - Renamed export 'p5' to 'hashWithSalt'
// - Renamed export 'O4' to 'componentName'
// - Renamed export '$3' to 'colorToMatrixString'
// - Renamed export 'rn' to 'resolveGradient'
// - Renamed export 'a3' to 'setJssdkSession'
// - Renamed export 'bo' to 'deduplicateByType'
// - Renamed export 'ww' to 'IndexedDbCache'
// - Renamed export 'Q' to 'stripQueryParams'
// - Renamed export 'nx' to 'copyToClipboard'
// - Renamed export 'hb' to 'generateRandomId'
// - Renamed export 'H2' to 'formatSizeValue'
// - Renamed export 'np' to 'rgbToHex'
// - Renamed export 'Nb' to 'setPreviewEnv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 146261
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var docxUrlPreviewConfig = require("docx-url-preview-config") /*id: 64452*/;
  var colorFormatConverter = require("color-format-converter") /*id: 712415*/;
  var larkUrlPreviewConfig = require("lark-url-preview-config") /*id: 347671*/;
  var designTokenColorUtils = require("design-token-color-utils") /*id: 470236*/;
  function c(e) {
    var t;
    return ((t = docxUrlPreviewConfig.previewConfig?.registeredElements) === null || t === undefined ? undefined : t.filter(t => t.type === e))?.[0]?.module;
  }
  function u(e) {
    let t = new Set();
    return e.reduceRight((e, i) => {
      if (!t.has(i.type)) {
        t.add(i.type);
        e.unshift(i);
      }
      return e;
    }, []);
  }
  function g(e) {
    let t = e.style.overflow;
    let i = e.style.transform;
    if (!i) {
      e.style.transform = "translateZ(0)";
    }
    if (!t || t === "visible") {
      e.style.overflow = "hidden";
    }
    let n = e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight;
    e.style.overflow = t;
    if (!i) {
      e.style.transform = "";
    }
    return n;
  }
  let M = 0;
  function d(e) {
    return !e || !(e.expiredAt <= 0) && e.expiredAt * 1000 <= Date.now();
  }
  function I(e, t) {
    if (typeof e == "number") {
      return e;
    } else if (typeof t == "number" && t > 0) {
      return Date.now() / 1000 + t;
    } else {
      return M;
    }
  }
  function p(e) {
    return [undefined, null, ""].includes(e);
  }
  (n = r ||= {})[n.LRU = 1] = "LRU";
  class y {
    constructor(e) {}
  }
  class h extends y {
    constructor(e) {
      super(e);
      this.cacheObj = {};
      this.maxCount = e.maxCount;
      this.expiredTime = e.expiredTime;
    }
    async has(e) {
      return !d(this.cacheObj[e]);
    }
    async setItem(e, t, i) {
      if (!e || p(t)) {
        return;
      }
      let n = {
        key: e,
        value: t,
        expiredAt: I(i, this.expiredTime),
        usedAt: Date.now() / 1000
      };
      this.cacheObj[e] = n;
      this.eliminate();
    }
    async setItems(e) {
      e.filter(e => e.key && !p(e.value)).forEach(e => {
        this.cacheObj[e.key] = Object.assign(Object.assign({}, e), {
          expiredAt: I(e.expiredAt, this.expiredTime),
          usedAt: Date.now() / 1000
        });
      });
      this.eliminate();
    }
    async getItem(e, t) {
      let {
        updateAgeOnGet: i = true
      } = t || {};
      let n = this.cacheObj[e];
      if (!d(n)) {
        if (i) {
          n.usedAt = Date.now() / 1000;
        }
        return n;
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
        if (d(e)) {
          delete this.cacheObj[e.key];
        }
      });
      let e = await this.count();
      if (e > this.maxCount) {
        let t = e - this.maxCount;
        let i = Object.entries(this.cacheObj).sort((e, t) => e[1].usedAt - t[1].usedAt).slice(0, t).map(e => e[0]);
        this.deleteItems(i);
      }
    }
    async clear() {
      this.cacheObj = {};
    }
  }
  var indexedDbStoreWrapper = require("indexed-db-store-wrapper") /*id: 813101*/;
  class m extends y {
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
      return !d(await this.idb.getItem(e));
    }
    async setItem(e, t, i) {
      if (!e || p(t)) {
        return;
      }
      let {
        text: n,
        iv: r
      } = await this.crypto.encrypt(t);
      let o = {
        key: e,
        value: n,
        iv: r,
        expiredAt: I(i, this.expiredTime),
        usedAt: Date.now() / 1000
      };
      await this.idb.setItem(e, o);
      this.eliminate();
    }
    async setItems(e) {
      let t = e.filter(e => e.key && !p(e.value)).map(async e => {
        let {
          text: t,
          iv: i
        } = await this.crypto.encrypt(e.value);
        return {
          key: e.key,
          value: t,
          iv: i,
          expiredAt: I(e.expiredAt, this.expiredTime),
          usedAt: Date.now() / 1000
        };
      });
      let i = (await Promise.all(t)).reduce((e, t) => {
        e[t.key] = t;
        return e;
      }, {});
      await this.idb.setItems(i);
      this.eliminate();
    }
    async getItem(e, t) {
      let {
        updateAgeOnGet: i = true
      } = t || {};
      let n = await this.idb.getItem(e);
      if (d(n)) {
        return;
      }
      if (i) {
        n.usedAt = Date.now() / 1000;
        await this.idb.setItem(e, n);
      }
      let r = await this.crypto.decrypt(n.value, n.iv);
      return Object.assign(Object.assign({}, n), {
        value: r
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
        let i = t.openCursor();
        i.onsuccess = () => {
          if (!i.result) {
            return;
          }
          let t = i.result;
          if (!d(t.value)) {
            e += 1;
          }
          t.continue();
        };
      }).then(() => e);
    }
    async keys() {
      let e = [];
      return this.idb.withIdbStore("readonly", t => {
        let i = t.openCursor();
        i.onsuccess = () => {
          if (!i.result) {
            return;
          }
          let t = i.result;
          let n = t.value;
          if (!d(n)) {
            e.push(n.key);
          }
          t.continue();
        };
      }).then(() => e);
    }
    async eliminate() {
      let e = {};
      return this.idb.withIdbStore("readwrite", t => {
        let i = t.openCursor();
        i.onsuccess = () => {
          if (!i.result) {
            return;
          }
          let t = i.result;
          let n = t.value;
          if (d(n)) {
            t.delete();
          } else {
            e[n.key] = n.usedAt;
          }
          t.continue();
        };
      }).then(() => {
        let t = Object.keys(e).length;
        if (t > this.maxCount) {
          let i = t - this.maxCount;
          let n = Object.entries(e).sort((e, t) => e[1] - t[1]).slice(0, i).map(e => e[0]);
          return this.deleteItems(n);
        }
      });
    }
    async clear() {
      this.idb.clear();
    }
  }
  function C(e, t) {
    let i = (e & 65535) + (t & 65535);
    return (e >> 16) + (t >> 16) + (i >> 16) << 16 | i & 65535;
  }
  function A(e, t, i, n, r, o) {
    var s;
    return C((s = C(C(t, e), C(n, o))) << r | s >>> 32 - r, i);
  }
  function f(e, t, i, n, r, o, s) {
    return A(t & i | ~t & n, e, t, r, o, s);
  }
  function j(e, t, i, n, r, o, s) {
    return A(t & n | i & ~n, e, t, r, o, s);
  }
  function v(e, t, i, n, r, o, s) {
    return A(t ^ i ^ n, e, t, r, o, s);
  }
  function D(e, t, i, n, r, o, s) {
    return A(i ^ (t | ~n), e, t, r, o, s);
  }
  class w {
    constructor(e) {
      this.privateKey = e.privateKey;
      let t = new TextEncoder();
      this.keyPromise = window.crypto.subtle.importKey("raw", t.encode(this.privateKey), "AES-GCM", true, ["encrypt", "decrypt"]);
    }
    async encrypt(e) {
      let t = new TextEncoder();
      let i = await this.keyPromise;
      let n = window.crypto.getRandomValues(new Uint8Array(32));
      return {
        text: await window.crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: n
        }, i, t.encode(JSON.stringify(e))),
        iv: n
      };
    }
    async decrypt(e, t) {
      let i = await this.keyPromise;
      let n = await window.crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: t
      }, i, e);
      return JSON.parse(new TextDecoder().decode(n));
    }
  }
  async function T(e, t) {
    let i = new TextEncoder().encode(t);
    return Array.from(new Uint8Array(await crypto.subtle.digest(e, i))).map(e => e.toString(16).padStart(2, "0")).join("");
  }
  async function E(e) {
    return T("SHA-1", e);
  }
  let z = async e => {
    var t;
    if (e) {
      return await E("08a441" + function (e) {
        let t = "0123456789abcdef";
        let i = "";
        for (let n = 0; n < e.length; n += 1) {
          let r = e.charCodeAt(n);
          i += t.charAt(r >>> 4 & 15) + t.charAt(r & 15);
        }
        return i;
      }(function (e) {
        let t = "";
        let i = e.length * 32;
        for (let n = 0; n < i; n += 8) {
          t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
        }
        return t;
      }(function (e, t) {
        e[t >> 5] |= 128 << t % 32;
        e[(t + 64 >>> 9 << 4) + 14] = t;
        let i = 1732584193;
        let n = -271733879;
        let r = -1732584194;
        let o = 271733878;
        for (let t = 0; t < e.length; t += 16) {
          let s = i;
          let l = n;
          let a = r;
          let c = o;
          i = f(i, n, r, o, e[t], 7, -680876936);
          o = f(o, i, n, r, e[t + 1], 12, -389564586);
          r = f(r, o, i, n, e[t + 2], 17, 606105819);
          n = f(n, r, o, i, e[t + 3], 22, -1044525330);
          i = f(i, n, r, o, e[t + 4], 7, -176418897);
          o = f(o, i, n, r, e[t + 5], 12, 1200080426);
          r = f(r, o, i, n, e[t + 6], 17, -1473231341);
          n = f(n, r, o, i, e[t + 7], 22, -45705983);
          i = f(i, n, r, o, e[t + 8], 7, 1770035416);
          o = f(o, i, n, r, e[t + 9], 12, -1958414417);
          r = f(r, o, i, n, e[t + 10], 17, -42063);
          n = f(n, r, o, i, e[t + 11], 22, -1990404162);
          i = f(i, n, r, o, e[t + 12], 7, 1804603682);
          o = f(o, i, n, r, e[t + 13], 12, -40341101);
          r = f(r, o, i, n, e[t + 14], 17, -1502002290);
          n = f(n, r, o, i, e[t + 15], 22, 1236535329);
          i = j(i, n, r, o, e[t + 1], 5, -165796510);
          o = j(o, i, n, r, e[t + 6], 9, -1069501632);
          r = j(r, o, i, n, e[t + 11], 14, 643717713);
          n = j(n, r, o, i, e[t], 20, -373897302);
          i = j(i, n, r, o, e[t + 5], 5, -701558691);
          o = j(o, i, n, r, e[t + 10], 9, 38016083);
          r = j(r, o, i, n, e[t + 15], 14, -660478335);
          n = j(n, r, o, i, e[t + 4], 20, -405537848);
          i = j(i, n, r, o, e[t + 9], 5, 568446438);
          o = j(o, i, n, r, e[t + 14], 9, -1019803690);
          r = j(r, o, i, n, e[t + 3], 14, -187363961);
          n = j(n, r, o, i, e[t + 8], 20, 1163531501);
          i = j(i, n, r, o, e[t + 13], 5, -1444681467);
          o = j(o, i, n, r, e[t + 2], 9, -51403784);
          r = j(r, o, i, n, e[t + 7], 14, 1735328473);
          n = j(n, r, o, i, e[t + 12], 20, -1926607734);
          i = v(i, n, r, o, e[t + 5], 4, -378558);
          o = v(o, i, n, r, e[t + 8], 11, -2022574463);
          r = v(r, o, i, n, e[t + 11], 16, 1839030562);
          n = v(n, r, o, i, e[t + 14], 23, -35309556);
          i = v(i, n, r, o, e[t + 1], 4, -1530992060);
          o = v(o, i, n, r, e[t + 4], 11, 1272893353);
          r = v(r, o, i, n, e[t + 7], 16, -155497632);
          n = v(n, r, o, i, e[t + 10], 23, -1094730640);
          i = v(i, n, r, o, e[t + 13], 4, 681279174);
          o = v(o, i, n, r, e[t], 11, -358537222);
          r = v(r, o, i, n, e[t + 3], 16, -722521979);
          n = v(n, r, o, i, e[t + 6], 23, 76029189);
          i = v(i, n, r, o, e[t + 9], 4, -640364487);
          o = v(o, i, n, r, e[t + 12], 11, -421815835);
          r = v(r, o, i, n, e[t + 15], 16, 530742520);
          n = v(n, r, o, i, e[t + 2], 23, -995338651);
          i = D(i, n, r, o, e[t], 6, -198630844);
          o = D(o, i, n, r, e[t + 7], 10, 1126891415);
          r = D(r, o, i, n, e[t + 14], 15, -1416354905);
          n = D(n, r, o, i, e[t + 5], 21, -57434055);
          i = D(i, n, r, o, e[t + 12], 6, 1700485571);
          o = D(o, i, n, r, e[t + 3], 10, -1894986606);
          r = D(r, o, i, n, e[t + 10], 15, -1051523);
          n = D(n, r, o, i, e[t + 1], 21, -2054922799);
          i = D(i, n, r, o, e[t + 8], 6, 1873313359);
          o = D(o, i, n, r, e[t + 15], 10, -30611744);
          r = D(r, o, i, n, e[t + 6], 15, -1560198380);
          n = D(n, r, o, i, e[t + 13], 21, 1309151649);
          i = D(i, n, r, o, e[t + 4], 6, -145523070);
          o = D(o, i, n, r, e[t + 11], 10, -1120210379);
          r = D(r, o, i, n, e[t + 2], 15, 718787259);
          n = D(n, r, o, i, e[t + 9], 21, -343485551);
          i = C(i, s);
          n = C(n, l);
          r = C(r, a);
          o = C(o, c);
        }
        return [i, n, r, o];
      }(function (e) {
        let t = [];
        let i = e.length >> 2;
        for (let e = 0; e < i; e += 1) {
          t[e] = 0;
        }
        let n = e.length * 8;
        for (let i = 0; i < n; i += 8) {
          t[i >> 5] |= (e.charCodeAt(i / 8) & 255) << i % 32;
        }
        return t;
      }(t = unescape(encodeURIComponent(e + "42b91e"))), t.length * 8))));
    } else {
      return null;
    }
  };
  var cardPreviewLocaleConstants_1 = require("card-preview-locale-constants_1") /*id: 568860*/;
  function b(e = 10, t = 62) {
    let i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let n = [];
    let r = 0;
    let o = 0;
    let s = 0;
    let l = i.length;
    t = (t = t || l) > l ? l : t;
    if (e) {
      for (r = 0; r < e; r++) {
        s = Math.random() * t | 0;
        n[r] = i[s];
      }
    } else {
      r = 0;
      n[8] = "-";
      n[13] = "-";
      n[18] = "-";
      n[23] = "-";
      n[14] = "4";
      for (; r < 36; r++) {
        if (!n[r]) {
          o = Math.random() * 16 | 0;
          n[r] = i[r === 19 ? o & 3 | 8 : o];
        }
      }
    }
    return n.join("");
  }
  cardPreviewLocaleConstants_1.regionConstants.EU_NC;
  cardPreviewLocaleConstants_1.localeConstants.CN;
  cardPreviewLocaleConstants_1.regionConstants.BOE_CN;
  cardPreviewLocaleConstants_1.localeConstants.CN;
  cardPreviewLocaleConstants_1.regionConstants.BOE_VA;
  cardPreviewLocaleConstants_1.localeConstants.VA;
  cardPreviewLocaleConstants_1.regionConstants.EU_EA;
  cardPreviewLocaleConstants_1.localeConstants.VA;
  cardPreviewLocaleConstants_1.regionConstants.EU_SG;
  cardPreviewLocaleConstants_1.localeConstants.SG;
  var selectElementText = require("select-element-text") /*id: 855034*/;
  var x = selectElementText;
  let k = (e, t = {
    container: document.body
  }) => {
    let i = "";
    let n = function (e) {
      let t = document.documentElement.getAttribute("dir") === "rtl";
      let i = document.createElement("textarea");
      i.style.fontSize = "12pt";
      i.style.border = "0";
      i.style.padding = "0";
      i.style.margin = "0";
      i.style.position = "absolute";
      i.style[t ? "right" : "left"] = "-9999px";
      let n = window.pageYOffset || document.documentElement.scrollTop;
      i.style.top = `${n}px`;
      i.setAttribute("readonly", "");
      i.value = e;
      return i;
    }(e);
    t.container.appendChild(n);
    i = x(n);
    document.execCommand("copy");
    n.remove();
    return i;
  };
  function _(e, t) {
    let i = null;
    let n = new Promise((n, r) => {
      i = () => r(t);
      e.then(n, r);
    });
    n.cancel = () => i && i();
    return n;
  }
  function S(e) {
    let t = new URL(e);
    t.search = "";
    return t.toString();
  }
  require.d(exports, {
    withTimeout: function () {
      return _;
    },
    cacheTypes: function () {
      return docxUrlPreviewConfig.CacheTypes;
    },
    cacheVersion: function () {
      return M;
    },
    larkVersion: function () {
      return larkUrlPreviewConfig.version;
    },
    MemoryCache: function () {
      return h;
    },
    AesCrypto: function () {
      return w;
    },
    getRegisteredModule: function () {
      return c;
    },
    typographyStyles: function () {
      return larkUrlPreviewConfig.typographyStyles;
    },
    hasOverflow: function () {
      return g;
    },
    previewConfig: function () {
      return docxUrlPreviewConfig.previewConfig;
    },
    moduleTag: function () {
      return larkUrlPreviewConfig.moduleTag;
    },
    resolveColorValue: function () {
      return designTokenColorUtils.resolveColorValue;
    },
    hashWithSalt: function () {
      return z;
    },
    componentName: function () {
      return larkUrlPreviewConfig.componentName;
    },
    colorToMatrixString: function () {
      return colorFormatConverter.colorToMatrixString;
    },
    resolveGradient: function () {
      return designTokenColorUtils.resolveGradient;
    },
    setJssdkSession: function () {
      return docxUrlPreviewConfig.setJssdkSession;
    },
    deduplicateByType: function () {
      return u;
    },
    IndexedDbCache: function () {
      return m;
    },
    stripQueryParams: function () {
      return S;
    },
    copyToClipboard: function () {
      return k;
    },
    generateRandomId: function () {
      return b;
    },
    formatSizeValue: function () {
      return designTokenColorUtils.formatSizeValue;
    },
    rgbToHex: function () {
      return colorFormatConverter.rgbToHex;
    },
    setPreviewEnv: function () {
      return docxUrlPreviewConfig.setPreviewEnv;
    }
  });
}