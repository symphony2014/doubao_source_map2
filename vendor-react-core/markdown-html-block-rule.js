// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'htmlTagNames'
// - Resolved require(771206) to 'html-tag-names'
// - Resolved require(361862) to 'html-tag-regex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 351130
         */
module.exports = function (module, exports, require) {
  var htmlTagNames = require("html-tag-names") /*id: 771206*/;
  var i = require("html-tag-regex") /*id: 361862*/.HTML_OPEN_CLOSE_TAG_RE;
  var o = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [RegExp("^</?(" + htmlTagNames.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [RegExp(i.source + "\\s*$"), /^$/, false]];
  module.exports = function (t, e, r, n) {
    var i;
    var s;
    var a;
    var c;
    var l = t.bMarks[e] + t.tShift[e];
    var u = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4 || !t.md.options.html || t.src.charCodeAt(l) !== 60) {
      return false;
    }
    i = 0;
    c = t.src.slice(l, u);
    for (; i < o.length && !o[i][0].test(c); i++);
    if (i === o.length) {
      return false;
    }
    if (n) {
      return o[i][2];
    }
    s = e + 1;
    if (!o[i][1].test(c)) {
      for (; s < r && !(t.sCount[s] < t.blkIndent); s++) {
        l = t.bMarks[s] + t.tShift[s];
        u = t.eMarks[s];
        c = t.src.slice(l, u);
        if (o[i][1].test(c)) {
          if (c.length !== 0) {
            s++;
          }
          break;
        }
      }
    }
    t.line = s;
    (a = t.push("html_block", "", 0)).map = [e, s];
    a.content = t.getLines(e, s, t.blkIndent, true);
    return true;
  };
}