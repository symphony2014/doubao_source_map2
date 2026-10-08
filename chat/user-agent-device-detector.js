// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CT' to 'isChrome'
// - Renamed export 'D0' to 'isIOS'
// - Renamed export 'Dt' to 'isAndroid'
// - Renamed export 'ED' to 'isWindows'
// - Renamed export 'FX' to 'isLarkUserAgent'
// - Renamed export 'G6' to 'isSafari'
// - Renamed export 'J$' to 'isByteDanceWebview'
// - Renamed export 'KX' to 'isMobileOrIOS'
// - Renamed export 'Q7' to 'isAndroidTablet'
// - Renamed export 'Tx' to 'isSamanthaDoubao'
// - Renamed export 'V5' to 'isMac'
// - Renamed export 'W7' to 'isMobileCached'
// - Renamed export '_f' to 'isWindowDefined'
// - Renamed export 'aR' to 'isArkWeb'
// - Renamed export 'bH' to 'isWebKit'
// - Renamed export 'ce' to 'getOSName'
// - Renamed export 'ct' to 'isWebKitDesktop'
// - Renamed export 'e3' to 'isWeChat'
// - Renamed export 'gn' to 'isAppleDevice'
// - Renamed export 'h4' to 'getUserAgent'
// - Renamed export 'hi' to 'isArkWebTablet'
// - Renamed export 'i7' to 'isChromeNotEdge'
// - Renamed export 'mk' to 'isIPad'
// - Renamed export 'nQ' to 'isSamanthaApp'
// - Renamed export 'nW' to 'isIOSDevice'
// - Renamed export 'qV' to 'getSamanthaVersion'
// - Renamed export 'r8' to 'isSamanthaCici'
// - Renamed export 'tq' to 'isMobile'
// - Renamed export 'uN' to 'isVersionGte'
// - Renamed export 'un' to 'isEdge'
// - Renamed export 'vU' to 'isFirefox'
// - Renamed export 'vu' to 'getChromeVersion'
// - Renamed export 'zI' to 'getSamanthaType'
// - Renamed export 'zc' to 'isIPadDevice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 161498
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  let o;
  let a;
  var userAgentParser_1_1 = require("user-agent-parser_1_1") /*id: 956882*/;
  var s = userAgentParser_1_1;
  let u = typeof window != "undefined";
  let c = () => {
    if (typeof globalThis.navigator?.platform == "string") {
      return globalThis.navigator?.platform;
    } else {
      return "";
    }
  };
  let d = e => {
    return e ?? (typeof globalThis.navigator?.userAgent == "string" ? globalThis.navigator?.userAgent : "");
  };
  let h = () => s.getParser(d()).getOSName();
  let m = e => s.getParser(d(e)).getPlatformType(true).includes("mobile");
  let g = e => {
    if (i === undefined) {
      i = m(e);
    }
    return i;
  };
  let f = e => {
    if (r === undefined) {
      let t = d(e);
      let n = /iPad|iPhone|iPod/.test(t);
      let i = t.includes("Macintosh") && u && "ontouchstart" in document.documentElement;
      r = n || i;
    }
    return r;
  };
  let p = e => {
    if (o === undefined) {
      let t = d(e);
      let n = /iPad/.test(t);
      let i = t.includes("Macintosh") && u && "ontouchstart" in document.documentElement;
      o = n || i;
    }
    return o;
  };
  let _ = e => g(e) || f(e);
  let v = e => {
    if (a === undefined) {
      a = u ? typeof window.webkitConvertPointFromNodeToPage == "function" : s.getParser(d(e)).getEngineName() === "WebKit";
    }
    return a;
  };
  let b = e => d(e).toLowerCase().includes("firefox");
  let S = e => /edge?\//.test(d(e).toLowerCase());
  let P = e => /chrome?\//.test(d(e).toLowerCase());
  let C = e => d(e).indexOf("Chrome") > -1 && d(e).indexOf("Edg") === -1;
  let y = e => d(e).indexOf("Safari") > -1 && d(e).indexOf("Chrome") === -1;
  let E = e => v(e) && !_(e);
  let x = e => /iPad|iPhone|iPod/.test(d(e));
  let T = e => /Mac/.test(d(e));
  let k = e => /Win/.test(d(e));
  let R = e => d(e).includes(Array.from("FLeairskh/u").filter((e, t) => t % 2).join(""));
  let w = e => d(e).toLowerCase().includes("micromessenger");
  let I = e => {
    let t = d(e).toLowerCase();
    return t.includes("newsarticle") || t.includes("bytedancewebview") && (t.includes("aid/13") || t.includes("aid/35"));
  };
  let M = e => {
    let t = d(e).match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/);
    if ((t == null ? undefined : t.length) !== 5) {
      return;
    }
    let [, n, i, r, o] = t.map(e => parseInt(e, 10));
    return {
      major: n,
      minor: i,
      build: r,
      patch: o
    };
  };
  let A = e => /SamanthaDoubao/.test(d(e));
  let D = e => /SamanthaCici/.test(d(e));
  let N = e => A(e) || D(e);
  let L = e => (d(e).match(/Samantha(Dola|Doubao)?\/((\d+\.)+[^\s]+)/) || [])[2] || "";
  let O = e => {
    let t = d(e);
    let n = /SamanthaDola/.test(t);
    let i = /SamanthaDoubao/.test(t);
    if (n) {
      return "Dola";
    } else if (i) {
      return "Doubao";
    } else {
      return "";
    }
  };
  let B = e => {
    let {
      greaterEqualVersion: t
    } = e;
    let n = L(e.userAgent).split(".").map(Number);
    if (t) {
      let e = t.split(".").map(Number);
      let i = true;
      for (let t = 0; t < Math.max(n.length, e.length); t++) {
        if (t >= n.length) {
          i = false;
          break;
        }
        if (t >= e.length || n[t] > e[t]) {
          break;
        }
        if (n[t] < e[t]) {
          i = false;
          break;
        }
      }
      return i;
    }
    return true;
  };
  let G = () => /Android/.test(d());
  let j = () => {
    let e = d();
    return !!/iPhone|iPad|iPod/.test(e) || c() === "MacIntel" && !!(navigator.maxTouchPoints > 1);
  };
  let W = () => /ArkWeb/i.test(d());
  let U = () => G() && !/Mobile/.test(d());
  let F = () => j() && /iPad/.test(d());
  let V = () => W() && /Tablet/.test(d());
  require.d(exports, {
    isChrome: function () {
      return P;
    },
    isIOS: function () {
      return f;
    },
    isAndroid: function () {
      return G;
    },
    isWindows: function () {
      return k;
    },
    isLarkUserAgent: function () {
      return R;
    },
    isSafari: function () {
      return y;
    },
    isByteDanceWebview: function () {
      return I;
    },
    isMobileOrIOS: function () {
      return _;
    },
    isAndroidTablet: function () {
      return U;
    },
    isSamanthaDoubao: function () {
      return A;
    },
    isMac: function () {
      return T;
    },
    isMobileCached: function () {
      return g;
    },
    isWindowDefined: function () {
      return u;
    },
    isArkWeb: function () {
      return W;
    },
    isWebKit: function () {
      return v;
    },
    getOSName: function () {
      return h;
    },
    isWebKitDesktop: function () {
      return E;
    },
    isWeChat: function () {
      return w;
    },
    isAppleDevice: function () {
      return x;
    },
    getUserAgent: function () {
      return d;
    },
    isArkWebTablet: function () {
      return V;
    },
    isChromeNotEdge: function () {
      return C;
    },
    isIPad: function () {
      return p;
    },
    isSamanthaApp: function () {
      return N;
    },
    isIOSDevice: function () {
      return j;
    },
    getSamanthaVersion: function () {
      return L;
    },
    isSamanthaCici: function () {
      return D;
    },
    isMobile: function () {
      return m;
    },
    isVersionGte: function () {
      return B;
    },
    isEdge: function () {
      return S;
    },
    isFirefox: function () {
      return b;
    },
    getChromeVersion: function () {
      return M;
    },
    getSamanthaType: function () {
      return O;
    },
    isIPadDevice: function () {
      return F;
    }
  });
}