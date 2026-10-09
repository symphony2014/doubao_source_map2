// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'katexCoreModule'
// - Resolved require(182566) to 'katex-core-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58010.e07ec0ec.js
         * chunkId: 58010
         * moduleId: 732879
         */
module.exports = function (module, exports, require) {
  module.exports = (e, t) => {
    let n = (t || {}).delimiter || "$";
    if (n.length !== 1) {
      throw Error("invalid delimiter");
    }
    let katexCoreModule = require("katex-core-module") /*id: 182566*/;
    let a = (e, t) => katexCoreModule.renderToString(e, {
      displayMode: t,
      throwOnError: false
    });
    e.inline.ruler.push("katex", (e, t) => {
      let r = e.pos;
      let i = e.posMax;
      let a = r;
      if (e.src.charAt(a) !== n) {
        return false;
      }
      for (++a; a < i && e.src.charAt(a) === n;) {
        ++a;
      }
      let o = e.src.slice(r, a);
      if (o.length > 2) {
        return false;
      }
      let s = a;
      let l = 0;
      while (a < i) {
        let r = e.src.charAt(a);
        if (r === "{" && (a == 0 || e.src.charAt(a - 1) != "\\")) {
          l += 1;
        } else if (r === "}" && (a == 0 || e.src.charAt(a - 1) != "\\")) {
          if ((l -= 1) < 0) {
            return false;
          }
        } else if (r === n && l === 0) {
          let r = a;
          let l = a + 1;
          while (l < i && e.src.charAt(l) === n) {
            ++l;
          }
          if (l - r === o.length) {
            if (!t) {
              let t = e.src.slice(s, r).replace(/[ \n]+/g, " ").trim();
              e.push({
                type: "katex",
                content: t,
                block: o.length > 1,
                level: e.level
              });
            }
            e.pos = l;
            return true;
          }
        }
        a += 1;
      }
      if (!t) {
        e.pending += o;
      }
      e.pos += o.length;
      return true;
    }, t);
    e.block.ruler.push("katex", (e, t, r) => {
      let i = false;
      let a = e.bMarks[t] + e.tShift[t];
      let o = e.eMarks[t];
      if (a + 1 > o) {
        return false;
      }
      let s = e.src.charAt(a);
      if (s !== n) {
        return false;
      }
      let l = a;
      let c = (a = e.skipChars(a, s)) - l;
      if (c !== 2) {
        return false;
      }
      let u = t;
      while (!(++u >= r) && (!((a = l = e.bMarks[u] + e.tShift[u]) < (o = e.eMarks[u])) || !(e.tShift[u] < e.blkIndent))) {
        if (e.src.charAt(a) === n && !(e.tShift[u] - e.blkIndent >= 4) && !((a = e.skipChars(a, s)) - l < c) && !((a = e.skipSpaces(a)) < o)) {
          i = true;
          break;
        }
      }
      c = e.tShift[t];
      e.line = u + +!!i;
      let h = e.getLines(t + 1, u, c, true).replace(/[ \n]+/g, " ").trim();
      e.tokens.push({
        type: "katex",
        params: null,
        content: h,
        lines: [t, e.line],
        level: e.level,
        block: true
      });
      return true;
    }, t);
    e.renderer.rules.katex = (e, t) => a(e[t].content, e[t].block);
    e.renderer.rules.katex.delimiter = n;
  };
}