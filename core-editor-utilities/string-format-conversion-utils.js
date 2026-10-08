// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oS' to 'excelColToNum'
// - Renamed export 'A3' to 'romanToInt'
// - Renamed export 'zs' to 'genRandomString'
// - Renamed export 'rm' to 'numToExcelCol'
// - Renamed export 'Jy' to 'intToRoman'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 708138
         */
module.exports = function (module, exports, require) {
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  var stringDeburrTransform = require("string-deburr-transform") /*id: 318449*/;
  let a = "https?|s?ftp|ftps|nfs|ssh";
  let i = "\\b([/#?][\\-A-Z0-9@:%_+.~#?&'/=;$,!\\*\\[\\]\\(\\){}^|<>]*[-A-Z0-9&@#/%=~\\(\\)_|]?)?";
  let c = RegExp(`((((${a})://)?(${/localhost(:[0-9]{2,5})?/.source}))|(((${a})://)(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source})))${i}`, "gi");
  let s = "([-A-Z0-9%_+~#@][\\-A-Z:0-9%_+~#@]{0,256}\\.){1,50}";
  let l = "[a-z\\-]{2,15}";
  let u = RegExp(`(((${a}):\\/\\/${s}${l})|(${s}(com|cn|tk|de|net|org|uk|info|nl|ru|hk)))(:[0-9]{2,5})?${i}`, "gi");
  RegExp(`^s*((https?):\\/\\/${s}${l})(:[0-9]{2,5})?${i}s*$`, "i");
  let d = "[\\w.!#$%&'*+-/=?^_\\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\\.";
  let f = RegExp(`^(?!data:)((mailto:${d}${l})|(${d}(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one)))\\b`, "gi");
  RegExp(`(${c.source})|(${u.source})|(${f.source})`, "gi");
  let g = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function b(e = 20) {
    let t = "";
    for (let r = 0; r < e; r++) {
      let e = Math.floor(Math.random() * g.length);
      t += g[e];
    }
    return t;
  }
  function p(e) {
    let t = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000
    };
    let r = 0;
    for (let n = 0; n < e.length && t[e[n]]; n++) {
      if (t[e[n]] < t[e[n + 1]]) {
        r -= t[e[n]];
      } else {
        r += t[e[n]];
      }
    }
    return r;
  }
  function h(e) {
    return function (e = "") {
      let t = e.toUpperCase();
      let r = 0;
      for (let e = t.length - 1, n = 0; e >= 0 && /[A-Z]/.test(t[e]); e--, n++) {
        r += (t.charCodeAt(e) - 64) * Math.pow(26, n);
      }
      return r - 1;
    }(e.toUpperCase()) + 1;
  }
  function m(e) {
    let t = {};
    return function (r) {
      let n = t[r];
      if (!n) {
        n = e(r);
        t[r] = e(r);
      }
      return n;
    };
  }
  let w = m(function (e) {
    if (e < 1) {
      return "";
    } else {
      return function (e) {
        let t = "";
        while (e >= 0) {
          t = String.fromCharCode(e % 26 + 65) + t;
          e = Math.floor(e / 26) - 1;
        }
        return t;
      }(e - 1).toLowerCase();
    }
  });
  let E = m(function (e) {
    if (e < 1) {
      return "";
    }
    if (e > 10000) {
      return String(e);
    }
    let t = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
    };
    let r = "";
    for (let n in t) {
      while (e >= t[n]) {
        r += n;
        e -= t[n];
      }
    }
    return r;
  });
  function k(e) {
    let t = {};
    return function (r) {
      if (r in t) {
        return t[r];
      }
      let n = e(r);
      t[r] = n;
      return n;
    };
  }
  k(stringDeburrUtil_1.deburrString);
  k(stringDeburrTransform.createDeburrTransform);
  let v = RegExp(`((https?|http|ftp)://)?((${/localhost:[0-9]{2,5}/.source})|(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source}))(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?`, "gi");
  RegExp(`(${v.source})|(${u.source})|(${f.source})`, "gi");
  require.d(exports, {
    excelColToNum: function () {
      return h;
    },
    romanToInt: function () {
      return p;
    },
    genRandomString: function () {
      return b;
    },
    numToExcelCol: function () {
      return w;
    },
    intToRoman: function () {
      return E;
    }
  });
}