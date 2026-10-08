// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 849586
         */
module.exports = function (module, exports, require) {
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
  var r = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  module.exports = function (t, n) {
    var i;
    var o;
    var s;
    var a;
    var c;
    var l;
    var u = t.pos;
    if (t.src.charCodeAt(u) !== 60) {
      return false;
    }
    c = t.pos;
    l = t.posMax;
    while (true) {
      if (++u >= l || (a = t.src.charCodeAt(u)) === 60) {
        return false;
      }
      if (a === 62) {
        break;
      }
    }
    i = t.src.slice(c + 1, u);
    if (r.test(i)) {
      o = t.md.normalizeLink(i);
      return !!t.md.validateLink(o) && (n || ((s = t.push("link_open", "a", 1)).attrs = [["href", o]], s.markup = "autolink", s.info = "auto", (s = t.push("text", "", 0)).content = t.md.normalizeLinkText(i), (s = t.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), t.pos += i.length + 2, true);
    } else {
      return !!e.test(i) && (o = t.md.normalizeLink("mailto:" + i), !!t.md.validateLink(o) && (n || ((s = t.push("link_open", "a", 1)).attrs = [["href", o]], s.markup = "autolink", s.info = "auto", (s = t.push("text", "", 0)).content = t.md.normalizeLinkText(i), (s = t.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), t.pos += i.length + 2, true));
    }
  };
}