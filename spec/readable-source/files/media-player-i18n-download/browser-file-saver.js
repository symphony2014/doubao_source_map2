// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 981042
         */
module.exports = function (module, exports, require) {
  var e;
  e = function () {
    return function t(e, i, n) {
      var o;
      var s;
      var a = window;
      var r = "application/octet-stream";
      var l = n || r;
      var c = e;
      var u = !i && !n && c;
      var h = document.createElement("a");
      function d(t) {
        return String(t);
      }
      var f = a.Blob || a.MozBlob || a.WebKitBlob || d;
      var p = i || "download";
      f = f.call ? f.bind(a) : Blob;
      if (String(this) === "true") {
        l = (c = [c, l])[0];
        c = c[1];
      }
      if (u && u.length < 2048 && (p = u.split("/").pop().split("?")[0], h.href = u, h.href.indexOf(u) !== -1)) {
        var g = new XMLHttpRequest();
        g.open("GET", u, true);
        g.responseType = "blob";
        g.onload = function (e) {
          t(e.target.response, p, r);
        };
        setTimeout(function () {
          g.send();
        }, 0);
        return g;
      }
      if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)) {
        if (!(c.length > 2096103.424) || f === d) {
          if (navigator.msSaveBlob) {
            return navigator.msSaveBlob(k(c), p);
          } else {
            return C(c);
          }
        }
        l = (c = k(c)).type || r;
      } else if (/([\x80-\xff])/.test(c)) {
        var v = 0;
        var m = new Uint8Array(c.length);
        var y = m.length;
        for (; v < y; ++v) {
          m[v] = c.charCodeAt(v);
        }
        c = new f([m], {
          type: l
        });
      }
      function k(t) {
        var e = t.split(/[:;,]/);
        var i = e[1];
        var n = (e[2] == "base64" ? atob : decodeURIComponent)(e.pop());
        var o = n.length;
        var s = 0;
        var a = new Uint8Array(o);
        for (; s < o; ++s) {
          a[s] = n.charCodeAt(s);
        }
        return new f([a], {
          type: i
        });
      }
      function C(t, e) {
        if ("download" in h) {
          h.href = t;
          h.setAttribute("download", p);
          h.className = "download-js-link";
          h.innerHTML = "downloading...";
          h.style.display = "none";
          document.body.appendChild(h);
          setTimeout(function () {
            h.click();
            document.body.removeChild(h);
            if (e === true) {
              setTimeout(function () {
                a.URL.revokeObjectURL(h.href);
              }, 250);
            }
          }, 66);
          return true;
        }
        if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
          if (/^data:/.test(t)) {
            t = "data:" + t.replace(/^data:([\w\/\-\+]+)/, r);
          }
          if (!window.open(t) && confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
            location.href = t;
          }
          return true;
        }
        var i = document.createElement("iframe");
        document.body.appendChild(i);
        if (!e && /^data:/.test(t)) {
          t = "data:" + t.replace(/^data:([\w\/\-\+]+)/, r);
        }
        i.src = t;
        setTimeout(function () {
          document.body.removeChild(i);
        }, 333);
      }
      o = c instanceof f ? c : new f([c], {
        type: l
      });
      if (navigator.msSaveBlob) {
        return navigator.msSaveBlob(o, p);
      }
      if (a.URL) {
        C(a.URL.createObjectURL(o), true);
      } else {
        if (typeof o == "string" || o.constructor === d) {
          try {
            return C("data:" + l + ";base64," + a.btoa(o));
          } catch (t) {
            return C("data:" + l + "," + encodeURIComponent(o));
          }
        }
        (s = new FileReader()).onload = function (t) {
          C(this.result);
        };
        s.readAsDataURL(o);
      }
      return true;
    };
  };
  if (typeof define == "function" && define.amd) {
    define([], e);
  } else {
    module.exports = e();
  }
}