// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'al' to 'getValidMathLength'
// - Renamed export 'kL' to 'parseMathDelimiters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 109482
         */
module.exports = function (module, exports, require) {
  var hashEscapePipe = require("hash-escape-pipe") /*id: 227019*/;
  let n = e => {
    let t = 0;
    if (e.charCodeAt(t) !== 36) {
      return;
    }
    let r = "$";
    t += 1;
    let i = e.charCodeAt(t);
    if (i === 36) {
      r = "$$";
      t += 1;
      if (e.charCodeAt(t) === 36) {
        return;
      }
    } else if (i === 32 || i === 9 || i === 10) {
      return;
    }
    let n = e.indexOf(r, t);
    if (n === -1 || e.charCodeAt(n - 1) === 92) {
      return;
    }
    let l = n + r.length;
    if (r.length === 1) {
      let t = e.charCodeAt(n - 1);
      if (t === 32 || t === 9 || t === 10) {
        return;
      }
      let r = e.charCodeAt(l);
      if (r >= 48 && r < 58) {
        return;
      }
    }
    return {
      type: r.length === 1 ? "inline" : "block",
      mathText: e.slice(t, n),
      endIndex: l
    };
  };
  let l = {
    throwOnError: true,
    strict: true,
    output: "mathml",
    trust: false
  };
  let o = (e, t) => {
    try {
      e.renderToString(hashEscapePipe.escapeHashPipe(t), l);
      return true;
    } catch (t) {
      if (t instanceof e.ParseError) {
        return false;
      }
      throw t;
    }
  };
  let u = (e, t) => {
    try {
      e.renderToString(hashEscapePipe.escapeHashPipe(t), l);
    } catch (t) {
      if (t instanceof e.ParseError) {
        return t.position;
      }
    }
  };
  let a = e => ![/\([^\)]*$/].some(t => t.test(e));
  let s = e => {
    let {
      tex: t,
      katex: r
    } = e;
    return o(r, t) && a(t);
  };
  let f = e => {
    let {
      src: r,
      katex: i
    } = e;
    let n = u(i, r) ?? r.length;
    while (n >= 0 && !s({
      tex: r.slice(0, n),
      katex: i
    })) {
      n -= 1;
    }
    return n;
  };
  require.d(exports, {
    getValidMathLength: function () {
      return f;
    },
    parseMathDelimiters: function () {
      return n;
    }
  });
}