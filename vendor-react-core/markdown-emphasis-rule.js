// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 657291
         */
module.exports = function (module, exports, require) {
  function e(t, e) {
    var r;
    var n;
    var i;
    var o;
    var s;
    var a;
    for (r = e.length - 1; r >= 0; r--) {
      if (((n = e[r]).marker === 95 || n.marker === 42) && n.end !== -1) {
        i = e[n.end];
        a = r > 0 && e[r - 1].end === n.end + 1 && e[r - 1].marker === n.marker && e[r - 1].token === n.token - 1 && e[n.end + 1].token === i.token + 1;
        s = String.fromCharCode(n.marker);
        (o = t.tokens[n.token]).type = a ? "strong_open" : "em_open";
        o.tag = a ? "strong" : "em";
        o.nesting = 1;
        o.markup = a ? s + s : s;
        o.content = "";
        (o = t.tokens[i.token]).type = a ? "strong_close" : "em_close";
        o.tag = a ? "strong" : "em";
        o.nesting = -1;
        o.markup = a ? s + s : s;
        o.content = "";
        if (a) {
          t.tokens[e[r - 1].token].content = "";
          t.tokens[e[n.end + 1].token].content = "";
          r--;
        }
      }
    }
  }
  module.exports.tokenize = function (t, e) {
    var r;
    var n;
    var i = t.pos;
    var o = t.src.charCodeAt(i);
    if (e || o !== 95 && o !== 42) {
      return false;
    }
    r = 0;
    n = t.scanDelims(t.pos, o === 42);
    for (; r < n.length; r++) {
      t.push("text", "", 0).content = String.fromCharCode(o);
      t.delimiters.push({
        marker: o,
        length: n.length,
        token: t.tokens.length - 1,
        end: -1,
        open: n.can_open,
        close: n.can_close
      });
    }
    t.pos += n.length;
    return true;
  };
  module.exports.postProcess = function (t) {
    var r;
    var n = t.tokens_meta;
    var i = t.tokens_meta.length;
    e(t, t.delimiters);
    r = 0;
    for (; r < i; r++) {
      if (n[r] && n[r].delimiters) {
        e(t, n[r].delimiters);
      }
    }
  };
}