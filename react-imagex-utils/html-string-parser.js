// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 559112
         */
module.exports = function (module, exports, require) {
  var t;
  var n = "html";
  var r = "head";
  var i = "body";
  var o = /<([a-zA-Z]+[0-9]?)/;
  var a = /<head[^]*>/i;
  var l = /<body[^]*>/i;
  function s() {
    throw Error("This browser does not support `document.implementation.createHTMLDocument`");
  }
  function c() {
    throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }
  var u = typeof window == "object" && window.DOMParser;
  if (typeof u == "function") {
    var p = new u();
    s = c = function (e, t) {
      if (t) {
        e = "<" + t + ">" + e + "</" + t + ">";
      }
      return p.parseFromString(e, "text/html");
    };
  }
  if (typeof document == "object" && document.implementation) {
    var h = document.implementation.createHTMLDocument();
    s = function (e, t) {
      if (t) {
        h.documentElement.querySelector(t).innerHTML = e;
      } else {
        h.documentElement.innerHTML = e;
      }
      return h;
    };
  }
  var d = typeof document == "object" ? document.createElement("template") : {};
  if (d.content) {
    t = function (e) {
      d.innerHTML = e;
      return d.content.childNodes;
    };
  }
  module.exports = function (e) {
    var u;
    var p;
    var h;
    var d;
    var A = e.match(o);
    if (A && A[1]) {
      u = A[1].toLowerCase();
    }
    switch (u) {
      case n:
        p = c(e);
        if (!a.test(e) && (h = p.querySelector(r))) {
          h.parentNode.removeChild(h);
        }
        if (!l.test(e) && (h = p.querySelector(i))) {
          h.parentNode.removeChild(h);
        }
        return p.querySelectorAll(n);
      case r:
      case i:
        d = (p = s(e)).querySelectorAll(u);
        if (l.test(e) && a.test(e)) {
          return d[0].parentNode.childNodes;
        }
        return d;
      default:
        if (t) {
          return t(e);
        }
        return (h = s(e, i).querySelector(i)).childNodes;
    }
  };
}