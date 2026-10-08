// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 341835
         */
module.exports = function (module, exports, require) {
  function e(t, e) {
    var r;
    var n;
    var i;
    var o;
    var s;
    var a = [];
    var c = e.length;
    for (r = 0; r < c; r++) {
      if ((i = e[r]).marker === 126 && i.end !== -1) {
        o = e[i.end];
        (s = t.tokens[i.token]).type = "s_open";
        s.tag = "s";
        s.nesting = 1;
        s.markup = "~~";
        s.content = "";
        (s = t.tokens[o.token]).type = "s_close";
        s.tag = "s";
        s.nesting = -1;
        s.markup = "~~";
        s.content = "";
        if (t.tokens[o.token - 1].type === "text" && t.tokens[o.token - 1].content === "~") {
          a.push(o.token - 1);
        }
      }
    }
    while (a.length) {
      for (n = (r = a.pop()) + 1; n < t.tokens.length && t.tokens[n].type === "s_close";) {
        n++;
      }
      if (r !== --n) {
        s = t.tokens[n];
        t.tokens[n] = t.tokens[r];
        t.tokens[r] = s;
      }
    }
  }
  module.exports.tokenize = function (t, e) {
    var r;
    var n;
    var i;
    var o;
    var s;
    var a = t.pos;
    var c = t.src.charCodeAt(a);
    if (e || c !== 126 || (o = (n = t.scanDelims(t.pos, true)).length, s = String.fromCharCode(c), o < 2)) {
      return false;
    }
    if (o % 2) {
      t.push("text", "", 0).content = s;
      o--;
    }
    r = 0;
    for (; r < o; r += 2) {
      t.push("text", "", 0).content = s + s;
      t.delimiters.push({
        marker: c,
        length: 0,
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