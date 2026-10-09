// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CookieManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 688115
         */
module.exports = function (module, exports, require) {
  function r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        e[r] = n[r];
      }
    }
    return e;
  }
  var i = function e(t, n) {
    function i(e, i, o) {
      if (typeof document != "undefined") {
        if (typeof (o = r({}, n, o)).expires == "number") {
          o.expires = new Date(Date.now() + o.expires * 86400000);
        }
        o.expires &&= o.expires.toUTCString();
        e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var a = "";
        for (var s in o) {
          if (o[s]) {
            a += "; " + s;
            if (o[s] !== true) {
              a += "=" + o[s].split(";")[0];
            }
          }
        }
        return document.cookie = e + "=" + t.write(i, e) + a;
      }
    }
    return Object.create({
      set: i,
      get: function (e) {
        if (typeof document != "undefined" && (!arguments.length || e)) {
          var n = document.cookie ? document.cookie.split("; ") : [];
          var r = {};
          var i = 0;
          for (; i < n.length; i++) {
            var o = n[i].split("=");
            var a = o.slice(1).join("=");
            try {
              var s = decodeURIComponent(o[0]);
              r[s] = t.read(a, s);
              if (e === s) {
                break;
              }
            } catch (e) {}
          }
          if (e) {
            return r[e];
          } else {
            return r;
          }
        }
      },
      remove: function (e, t) {
        i(e, "", r({}, t, {
          expires: -1
        }));
      },
      withAttributes: function (t) {
        return e(this.converter, r({}, this.attributes, t));
      },
      withConverter: function (t) {
        return e(r({}, this.converter, t), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(n)
      },
      converter: {
        value: Object.freeze(t)
      }
    });
  }({
    read: function (e) {
      if (e[0] === "\"") {
        e = e.slice(1, -1);
      }
      return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (e) {
      return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  }, {
    path: "/"
  });
  require.d(exports, {
    CookieManager: function () {
      return i;
    }
  });
}