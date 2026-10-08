// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 888334
         */
module.exports = function (module, exports, require) {
  var i;
  i = function () {
    "use strict";

    function t(e, t, n) {
      var i = new XMLHttpRequest();
      i.open("GET", e);
      i.responseType = "blob";
      i.onload = function () {
        s(i.response, t, n);
      };
      i.onerror = function () {};
      i.send();
    }
    function i(e) {
      var t = new XMLHttpRequest();
      t.open("HEAD", e, false);
      try {
        t.send();
      } catch (e) {}
      return t.status >= 200 && t.status <= 299;
    }
    function r(e) {
      try {
        e.dispatchEvent(new MouseEvent("click"));
      } catch (n) {
        var t = document.createEvent("MouseEvents");
        t.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
        e.dispatchEvent(t);
      }
    }
    var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof require.g == "object" && require.g.global === require.g ? require.g : undefined;
    var a = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
    var s = o.saveAs || (typeof window != "object" || window !== o ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (e, n, a) {
      var s = o.URL || o.webkitURL;
      var l = document.createElement("a");
      n = n || e.name || "download";
      l.download = n;
      l.rel = "noopener";
      if (typeof e == "string") {
        l.href = e;
        if (l.origin === location.origin) {
          r(l);
        } else if (i(l.href)) {
          t(e, n, a);
        } else {
          r(l, l.target = "_blank");
        }
      } else {
        l.href = s.createObjectURL(e);
        setTimeout(function () {
          s.revokeObjectURL(l.href);
        }, 40000);
        setTimeout(function () {
          r(l);
        }, 0);
      }
    } : "msSaveOrOpenBlob" in navigator ? function (e, n, o) {
      n = n || e.name || "download";
      if (typeof e != "string") {
        var a;
        navigator.msSaveOrOpenBlob(((a = o) === undefined ? a = {
          autoBom: false
        } : typeof a != "object" && (a = {
          autoBom: !a
        }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], {
          type: e.type
        }) : e), n);
      } else if (i(e)) {
        t(e, n, o);
      } else {
        var s = document.createElement("a");
        s.href = e;
        s.target = "_blank";
        setTimeout(function () {
          r(s);
        });
      }
    } : function (e, n, i, r) {
      if (r = r || open("", "_blank")) {
        r.document.title = r.document.body.innerText = "downloading...";
      }
      if (typeof e == "string") {
        return t(e, n, i);
      }
      var s = e.type === "application/octet-stream";
      var l = /constructor/i.test(o.HTMLElement) || o.safari;
      var c = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((c || s && l || a) && typeof FileReader != "undefined") {
        var d = new FileReader();
        d.onloadend = function () {
          var e = d.result;
          e = c ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;");
          if (r) {
            r.location.href = e;
          } else {
            location = e;
          }
          r = null;
        };
        d.readAsDataURL(e);
      } else {
        var u = o.URL || o.webkitURL;
        var h = u.createObjectURL(e);
        if (r) {
          r.location = h;
        } else {
          location.href = h;
        }
        r = null;
        setTimeout(function () {
          u.revokeObjectURL(h);
        }, 40000);
      }
    });
    o.saveAs = s.saveAs = s;
    module.exports = s;
  };
  if (typeof define == "function" && define.amd) {
    define([], i);
  } else {
    i();
  }
}