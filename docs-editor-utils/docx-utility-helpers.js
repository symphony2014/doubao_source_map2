// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D1' to 'generateRandomId'
// - Renamed export 'Mo' to 'parseJsonSafe'
// - Renamed export 'N4' to 'retryWithDelay'
// - Renamed export 'Pz' to 'stringifyJsonSafe'
// - Renamed export 'R7' to 'maskSensitiveData'
// - Renamed export '_v' to 'delayPromise'
// - Renamed export 'g4' to 'captureException'
// - Renamed export 'hn' to 'hasClassInParent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 859002
         */
module.exports = function (module, exports, require) {
  let o = e => {
    try {
      return JSON.parse(e);
    } catch (e) {
      return {};
    }
  };
  let i = e => {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "parse error";
    }
  };
  function l(e = 8) {
    let n = "";
    let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let o = r.length;
    for (let i = 0; i < e; i++) {
      n += r.charAt(Math.floor(Math.random() * o));
    }
    return n;
  }
  let c = (e, n) => {
    if (typeof e == "string") {
      Error(e);
    }
    if (window.inlineSlardarInstance) {
      var o;
      window.inlineSlardarInstance("captureException", e, {
        module: "docx",
        docxVersin: ((o = window.scmDocx) === null || o === undefined ? undefined : o.scmInfo?.version) || "mobile",
        ...(n == null ? undefined : n.extra)
      });
    }
  };
  let u = (e, n) => {
    let r = e;
    while (r) {
      if (r && r.classList && r.classList.contains(n)) {
        return true;
      }
      r = r.parentElement;
    }
    return false;
  };
  function a(e) {
    return new Promise(n => {
      setTimeout(() => {
        n();
      }, e);
    });
  }
  function s(e) {
    if (e.length < 3) {
      return e;
    }
    let n = Math.floor(e.length / 3);
    let r = e.length - n * 2;
    return e.slice(0, n) + Array(r).fill("*").join("") + e.slice(-n);
  }
  async function d(e, n = 2, r = 1000) {
    try {
      return await e();
    } catch (o) {
      if (n) {
        await a(r);
        return d(e, n - 1, r);
      }
      throw o;
    }
  }
  require.d(exports, {
    generateRandomId: function () {
      return l;
    },
    parseJsonSafe: function () {
      return o;
    },
    retryWithDelay: function () {
      return d;
    },
    stringifyJsonSafe: function () {
      return i;
    },
    maskSensitiveData: function () {
      return s;
    },
    delayPromise: function () {
      return a;
    },
    captureException: function () {
      return c;
    },
    hasClassInParent: function () {
      return u;
    }
  });
}