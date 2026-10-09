// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'domHandler'
// - Resolved require(219329) to 'dom-handler'
// - Resolved require(472501) to 'svg-case-sensitive-tags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 730796
         */
module.exports = function (module, exports, require) {
  var r;
  var domHandler = require("dom-handler") /*id: 219329*/;
  var o = require("svg-case-sensitive-tags") /*id: 472501*/.CASE_SENSITIVE_TAG_NAMES;
  var a = domHandler.Comment;
  var l = domHandler.Element;
  var s = domHandler.ProcessingInstruction;
  var c = domHandler.Text;
  var u = {};
  var p = 0;
  var h = o.length;
  for (; p < h; p++) {
    u[(r = o[p]).toLowerCase()] = r;
  }
  function d(e) {
    var t;
    var n = {};
    var r = 0;
    var i = e.length;
    for (; r < i; r++) {
      n[(t = e[r]).name] = t.value;
    }
    return n;
  }
  exports.formatAttributes = d;
  exports.formatDOM = function e(t, n, r) {
    n = n || null;
    var i = [];
    var o = 0;
    var p = t.length;
    for (; o < p; o++) {
      var h;
      var A;
      var f = t[o];
      switch (f.nodeType) {
        case 1:
          (A = new l(h = function (e) {
            var t = u[e = e.toLowerCase()];
            return t || e;
          }(f.nodeName), d(f.attributes))).children = e(h === "template" ? f.content.childNodes : f.childNodes, A);
          break;
        case 3:
          A = new c(f.nodeValue);
          break;
        case 8:
          A = new a(f.nodeValue);
          break;
        default:
          continue;
      }
      var g = i[o - 1] || null;
      if (g) {
        g.next = A;
      }
      A.parent = n;
      A.prev = g;
      A.next = null;
      i.push(A);
    }
    if (r) {
      (A = new s(r.substring(0, r.indexOf(" ")).toLowerCase(), r)).next = i[0] || null;
      A.parent = n;
      i.unshift(A);
      if (i[1]) {
        i[1].prev = i[0];
      }
    }
    return i;
  };
}