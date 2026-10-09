// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'createTextProcessor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 241455
         */
module.exports = function (module, exports, require) {
  let r = /<(\/?)(?:pre|code|kbd|script|math)[^>]*>/i;
  let i = (e = "", t = "1") => {
    var n;
    var i;
    var f;
    var g;
    var m;
    var y = 0;
    if ((t = typeof t == "number" ? t.toString() : t.replace(/\s/g, "")) === "0") {
      return e;
    }
    if (t === "1") {
      n = 1;
      i = 1;
      f = 1;
      g = 1;
    } else if (t === "2") {
      n = 1;
      i = 1;
      f = 2;
      g = 1;
    } else if (t === "3") {
      n = 1;
      i = 1;
      f = 3;
      g = 1;
    } else if (t === "-1") {
      m = 1;
    } else {
      for (let e = 0; e < t.length; e++) {
        let r = t[e];
        if (r === "q") {
          n = 1;
        }
        if (r === "b") {
          i = 1;
        }
        if (r === "B") {
          i = 2;
        }
        if (r === "d") {
          f = 1;
        }
        if (r === "D") {
          f = 2;
        }
        if (r === "i") {
          f = 3;
        }
        if (r === "e") {
          g = 1;
        }
        if (r === "w") {
          y = 1;
        }
      }
    }
    var b = A(e);
    var x = "";
    var k = 0;
    var w = "";
    for (let e = 0; e < b.length; e++) {
      let t = b[e];
      if (t[0] === "tag") {
        x += t[1];
        let e = r.exec(t[1]);
        if (e) {
          k = +(e[1] !== "/");
        }
      } else {
        let e = t[1];
        let r = e.substring(e.length - 1, e.length);
        if (!k) {
          e = d(e);
          if (y) {
            e = e.replace(/$quot;/g, "\"");
          }
          if (f) {
            if (f === 1) {
              e = s(e);
            }
            if (f === 2) {
              e = c(e);
            }
            if (f === 3) {
              e = u(e);
            }
          }
          if (g) {
            e = p(e);
          }
          if (i) {
            e = a(e);
            if (i === 2) {
              e = l(e);
            }
          }
          if (n) {
            e = e === "'" ? /\S/.test(w) ? "&#8217;" : "&#8216;" : e === "\"" ? /\S/.test(w) ? "&#8221;" : "&#8220;" : o(e);
          }
          if (m) {
            e = h(e);
          }
        }
        w = r;
        x += e;
      }
    }
    return x;
  };
  let o = e => {
    var t = "[!\"#$%'()*+,-./:;<=>?@[\\]^_`{|}~]";
    e = (e = (e = (e = (e = e.replace(RegExp(`^'(?=${t}\\B)`), "&#8217;")).replace(RegExp(`^"(?=${t}\\B)`), "&#8221;")).replace(/"'(?=\w)/, "&#8220;&#8216;")).replace(/'"(?=\w)/, "&#8216;&#8220;")).replace(/'(?=\d\d)/, "&#8217;");
    var n = "[^\\ \\t\\r\\n\\[\\{\\(\\-]";
    var r = "[\\ \\t\\r\\n\\[\\{\\(\\-]";
    var i = "&#8211;|&#8212;";
    return e = (e = (e = (e = (e = (e = (e = (e = e.replace(RegExp(`(\\s|&nbsp;|--|&[mn]dash;|${i}|&#x201[34])'(?=\\w)`, "g"), "$1&#8216;")).replace(RegExp(`(${n})'`, "g"), "$1&#8217;")).replace(RegExp(`(${r}?)'(?=\\s|s\\b)`, "g"), "$1&#8217;")).replace(/'/g, "&#8216;")).replace(RegExp(`(\\s|&nbsp;|--|&[mn]dash;|${i}|&#x201[34])"(?=\\w)`, "g"), "$1&#8220;")).replace(RegExp(`(${n})"`, "g"), "$1&#8221;")).replace(RegExp(`(${r}?)"(?=\\s)`, "g"), "$1&#8221;")).replace(/"/g, "&#8220;");
  };
  let a = e => e = (e = e.replace(/``/g, "&#8220;")).replace(/''/g, "&#8221;");
  let l = e => e = (e = e.replace(/`/g, "&#8216;")).replace(/'/g, "&#8217;");
  let s = e => e = e.replace(/--/g, "&#8212;");
  let c = e => e = (e = e.replace(/---/g, "&#8212;")).replace(/--/g, "&#8211;");
  let u = e => e = (e = e.replace(/---/g, "&#8211;")).replace(/--/g, "&#8212;");
  let p = e => e = (e = e.replace(/\.\.\./g, "&#8230;")).replace(/\. \. \./g, "&#8230;");
  let h = e => e = (e = (e = (e = (e = (e = (e = e.replace(/&#8211;/g, "-")).replace(/&#8212;/g, "--")).replace(/&#8216;/g, "'")).replace(/&#8217;/g, "'")).replace(/&#8220;/g, "\"")).replace(/&#8221;/g, "\"")).replace(/&#8230;/g, "...");
  let d = e => e = (e = (e = (e = (e = (e = e.replace(/\\\\/g, "&#92;")).replace(/\\"/g, "&#34;")).replace(/\\'/g, "&#39;")).replace(/\\\./g, "&#46;")).replace(/\\-/g, "&#45;")).replace(/\\`/g, "&#96;");
  let A = e => {
    var t = 0;
    var n = e.length;
    var r = [];
    var i = /<!--[\s\S]*?-->|<\?.*?\?>|<[^>]*>/g;
    var o = null;
    while (o = i.exec(e)) {
      if (t < o.index) {
        let n = ["text", e.substring(t, o.index)];
        r.push(n);
      }
      let n = ["tag", o.toString()];
      r.push(n);
      t = i.lastIndex;
    }
    if (t < n) {
      let i = ["text", e.substring(t, n)];
      r.push(i);
    }
    return r;
  };
  function f({
    config: e = 2
  } = {}) {
    return {
      tokenizer: {
        inlineText(e) {
          let t = this.rules.inline.text.exec(e);
          if (t) {
            return {
              type: "text",
              raw: t[0],
              text: t[0]
            };
          }
        }
      },
      hooks: {
        postprocess: t => i(t, e)
      }
    };
  }
  require.d(exports, {
    createTextProcessor: function () {
      return f;
    }
  });
}