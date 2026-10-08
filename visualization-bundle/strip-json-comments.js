// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'stripJsonComments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58288.1c86f19f.js
         * chunkId: 58288
         * moduleId: 81198
         */
module.exports = function (module, exports, require) {
  let r = Symbol("singleComment");
  let i = Symbol("multiComment");
  let a = () => "";
  let o = (e, t, n) => e.slice(t, n).replace(/[^ \t\r\n]/g, " ");
  let l = (e, t) => {
    let n = t - 1;
    let r = 0;
    while (e[n] === "\\") {
      n -= 1;
      r += 1;
    }
    return !!(r % 2);
  };
  function s(e, {
    whitespace: t = true,
    trailingCommas: n = false
  } = {}) {
    if (typeof e != "string") {
      throw TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);
    }
    let u = t ? o : a;
    let c = false;
    let f = false;
    let d = 0;
    let h = "";
    let p = "";
    let m = -1;
    for (let t = 0; t < e.length; t++) {
      let a = e[t];
      let o = e[t + 1];
      if (!f && a === "\"" && !l(e, t)) {
        c = !c;
      }
      if (!c) {
        if (f || a + o !== "//") {
          if (f === r && a + o === "\r\n") {
            f = false;
            h += u(e, d, ++t);
            d = t;
            continue;
          }
          if (f === r && a === "\n") {
            f = false;
            h += u(e, d, t);
            d = t;
          } else if (f || a + o !== "/*") {
            if (f === i && a + o === "*/") {
              f = false;
              h += u(e, d, ++t + 1);
              d = t + 1;
              continue;
            }
            if (n && !f) {
              if (m !== -1) {
                if (a === "}" || a === "]") {
                  h += e.slice(d, t);
                  p += u(h, 0, 1) + h.slice(1);
                  h = "";
                  d = t;
                  m = -1;
                } else if (a !== " " && a !== "\t" && a !== "\r" && a !== "\n") {
                  h += e.slice(d, t);
                  d = t;
                  m = -1;
                }
              } else if (a === ",") {
                p += h + e.slice(d, t);
                h = "";
                d = t;
                m = t;
              }
            }
          } else {
            h += e.slice(d, t);
            d = t;
            f = i;
            t++;
            continue;
          }
        } else {
          h += e.slice(d, t);
          d = t;
          f = r;
          t++;
        }
      }
    }
    return p + h + (f ? u(e.slice(d)) : e.slice(d));
  }
  require.d(exports, {
    stripJsonComments: function () {
      return s;
    }
  });
}