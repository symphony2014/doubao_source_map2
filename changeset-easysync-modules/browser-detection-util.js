// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 178370
         */
module.exports = function (module, exports, require) {
  var e;
  var n;
  e = "bowser";
  n = function () {
    function t(t) {
      function e(e) {
        var n = t.match(e);
        return n && n.length > 1 && n[1] || "";
      }
      function n(e) {
        var n = t.match(e);
        return n && n.length > 1 && n[2] || "";
      }
      var r;
      var i = e(/(ipod|iphone|ipad)/i).toLowerCase();
      var o = !/like android/i.test(t) && /android/i.test(t);
      var s = /nexus\s*[0-6]\s*/i.test(t);
      var a = !s && /nexus\s*[0-9]+/i.test(t);
      var u = /CrOS/.test(t);
      var c = /silk/i.test(t);
      var l = /sailfish/i.test(t);
      var p = /tizen/i.test(t);
      var h = /(web|hpw)os/i.test(t);
      var f = /windows phone/i.test(t);
      /SamsungBrowser/i.test(t);
      var d = !f && /windows/i.test(t);
      var v = !i && !c && /macintosh/i.test(t);
      var y = !o && !l && !p && !h && /linux/i.test(t);
      var g = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i);
      var _ = e(/version\/(\d+(\.\d+)?)/i);
      var m = /tablet/i.test(t) && !/tablet pc/i.test(t);
      var b = !m && /[^-]mobi/i.test(t);
      var E = /xbox/i.test(t);
      if (/opera/i.test(t)) {
        r = {
          name: "Opera",
          opera: true,
          version: _ || e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/opr\/|opios/i.test(t)) {
        r = {
          name: "Opera",
          opera: true,
          version: e(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
        };
      } else if (/SamsungBrowser/i.test(t)) {
        r = {
          name: "Samsung Internet for Android",
          samsungBrowser: true,
          version: _ || e(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/coast/i.test(t)) {
        r = {
          name: "Opera Coast",
          coast: true,
          version: _ || e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/yabrowser/i.test(t)) {
        r = {
          name: "Yandex Browser",
          yandexbrowser: true,
          version: _ || e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/ucbrowser/i.test(t)) {
        r = {
          name: "UC Browser",
          ucbrowser: true,
          version: e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/mxios/i.test(t)) {
        r = {
          name: "Maxthon",
          maxthon: true,
          version: e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/epiphany/i.test(t)) {
        r = {
          name: "Epiphany",
          epiphany: true,
          version: e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/puffin/i.test(t)) {
        r = {
          name: "Puffin",
          puffin: true,
          version: e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        };
      } else if (/sleipnir/i.test(t)) {
        r = {
          name: "Sleipnir",
          sleipnir: true,
          version: e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/k-meleon/i.test(t)) {
        r = {
          name: "K-Meleon",
          kMeleon: true,
          version: e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (f) {
        r = {
          name: "Windows Phone",
          osname: "Windows Phone",
          windowsphone: true
        };
        if (g) {
          r.msedge = true;
          r.version = g;
        } else {
          r.msie = true;
          r.version = e(/iemobile\/(\d+(\.\d+)?)/i);
        }
      } else if (/msie|trident/i.test(t)) {
        r = {
          name: "Internet Explorer",
          msie: true,
          version: e(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        };
      } else if (u) {
        r = {
          name: "Chrome",
          osname: "Chrome OS",
          chromeos: true,
          chromeBook: true,
          chrome: true,
          version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (/edg([ea]|ios)/i.test(t)) {
        r = {
          name: "Microsoft Edge",
          msedge: true,
          version: g
        };
      } else if (/vivaldi/i.test(t)) {
        r = {
          name: "Vivaldi",
          vivaldi: true,
          version: e(/vivaldi\/(\d+(\.\d+)?)/i) || _
        };
      } else if (l) {
        r = {
          name: "Sailfish",
          osname: "Sailfish OS",
          sailfish: true,
          version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        };
      } else if (/seamonkey\//i.test(t)) {
        r = {
          name: "SeaMonkey",
          seamonkey: true,
          version: e(/seamonkey\/(\d+(\.\d+)?)/i)
        };
      } else if (/firefox|iceweasel|fxios/i.test(t)) {
        r = {
          name: "Firefox",
          firefox: true,
          version: e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        };
        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)) {
          r.firefoxos = true;
          r.osname = "Firefox OS";
        }
      } else if (c) {
        r = {
          name: "Amazon Silk",
          silk: true,
          version: e(/silk\/(\d+(\.\d+)?)/i)
        };
      } else if (/phantom/i.test(t)) {
        r = {
          name: "PhantomJS",
          phantom: true,
          version: e(/phantomjs\/(\d+(\.\d+)?)/i)
        };
      } else if (/slimerjs/i.test(t)) {
        r = {
          name: "SlimerJS",
          slimer: true,
          version: e(/slimerjs\/(\d+(\.\d+)?)/i)
        };
      } else if (/blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)) {
        r = {
          name: "BlackBerry",
          osname: "BlackBerry OS",
          blackberry: true,
          version: _ || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        };
      } else if (h) {
        r = {
          name: "WebOS",
          osname: "WebOS",
          webos: true,
          version: _ || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        };
        if (/touchpad\//i.test(t)) {
          r.touchpad = true;
        }
      } else if (/bada/i.test(t)) {
        r = {
          name: "Bada",
          osname: "Bada",
          bada: true,
          version: e(/dolfin\/(\d+(\.\d+)?)/i)
        };
      } else if (p) {
        r = {
          name: "Tizen",
          osname: "Tizen",
          tizen: true,
          version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
        };
      } else if (/qupzilla/i.test(t)) {
        r = {
          name: "QupZilla",
          qupzilla: true,
          version: e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
        };
      } else if (/chromium/i.test(t)) {
        r = {
          name: "Chromium",
          chromium: true,
          version: e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
        };
      } else if (/chrome|crios|crmo/i.test(t)) {
        r = {
          name: "Chrome",
          chrome: true,
          version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (o) {
        r = {
          name: "Android",
          version: _
        };
      } else if (/safari|applewebkit/i.test(t)) {
        r = {
          name: "Safari",
          safari: true
        };
        if (_) {
          r.version = _;
        }
      } else if (i) {
        r = {
          name: i == "iphone" ? "iPhone" : i == "ipad" ? "iPad" : "iPod"
        };
        if (_) {
          r.version = _;
        }
      } else {
        r = /googlebot/i.test(t) ? {
          name: "Googlebot",
          googlebot: true,
          version: e(/googlebot\/(\d+(\.\d+))/i) || _
        } : {
          name: e(/^(.*)\/(.*) /),
          version: n(/^(.*)\/(.*) /)
        };
      }
      if (!r.msedge && /(apple)?webkit/i.test(t)) {
        if (/(apple)?webkit\/537\.36/i.test(t)) {
          r.name = r.name || "Blink";
          r.blink = true;
        } else {
          r.name = r.name || "Webkit";
          r.webkit = true;
        }
        if (!r.version && _) {
          r.version = _;
        }
      } else if (!r.opera && /gecko\//i.test(t)) {
        r.name = r.name || "Gecko";
        r.gecko = true;
        r.version = r.version || e(/gecko\/(\d+(\.\d+)?)/i);
      }
      if (!r.windowsphone && (o || r.silk)) {
        r.android = true;
        r.osname = "Android";
      } else if (!r.windowsphone && i) {
        r[i] = true;
        r.ios = true;
        r.osname = "iOS";
      } else if (v) {
        r.mac = true;
        r.osname = "macOS";
      } else if (E) {
        r.xbox = true;
        r.osname = "Xbox";
      } else if (d) {
        r.windows = true;
        r.osname = "Windows";
      } else if (y) {
        r.linux = true;
        r.osname = "Linux";
      }
      var w = "";
      if (r.windows) {
        w = function (t) {
          switch (t) {
            case "NT":
              return "NT";
            case "XP":
            case "NT 5.1":
              return "XP";
            case "NT 5.0":
              return "2000";
            case "NT 5.2":
              return "2003";
            case "NT 6.0":
              return "Vista";
            case "NT 6.1":
              return "7";
            case "NT 6.2":
              return "8";
            case "NT 6.3":
              return "8.1";
            case "NT 10.0":
              return "10";
            default:
              return;
          }
        }(e(/Windows ((NT|XP)( \d\d?.\d)?)/i));
      } else if (r.windowsphone) {
        w = e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
      } else if (r.mac) {
        w = (w = e(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".");
      } else if (i) {
        w = (w = e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".");
      } else if (o) {
        w = e(/android[ \/-](\d+(\.\d+)*)/i);
      } else if (r.webos) {
        w = e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
      } else if (r.blackberry) {
        w = e(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
      } else if (r.bada) {
        w = e(/bada\/(\d+(\.\d+)*)/i);
      } else if (r.tizen) {
        w = e(/tizen[\/\s](\d+(\.\d+)*)/i);
      }
      if (w) {
        r.osversion = w;
      }
      var S = !r.windows && w.split(".")[0];
      if (m || a || i == "ipad" || o && (S == 3 || S >= 4 && !b) || r.silk) {
        r.tablet = true;
      } else if (b || i == "iphone" || i == "ipod" || o || s || r.blackberry || r.webos || r.bada) {
        r.mobile = true;
      }
      if (r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20) {
        r.a = true;
      } else if (r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20) {
        r.c = true;
      } else {
        r.x = true;
      }
      return r;
    }
    var e = t(typeof navigator != "undefined" && navigator.userAgent || "");
    function n(t) {
      return t.split(".").length;
    }
    function r(t, e) {
      var n;
      var r = [];
      if (Array.prototype.map) {
        return Array.prototype.map.call(t, e);
      }
      for (n = 0; n < t.length; n++) {
        r.push(e(t[n]));
      }
      return r;
    }
    function i(t) {
      var e = Math.max(n(t[0]), n(t[1]));
      var i = r(t, function (t) {
        var i = e - n(t);
        return r((t += Array(i + 1).join(".0")).split("."), function (t) {
          return Array(20 - t.length).join("0") + t;
        }).reverse();
      });
      while (--e >= 0) {
        if (i[0][e] > i[1][e]) {
          return 1;
        }
        if (i[0][e] !== i[1][e]) {
          return -1;
        }
        if (e === 0) {
          return 0;
        }
      }
    }
    function o(n, r, o) {
      var s = e;
      if (typeof r == "string") {
        o = r;
        r = undefined;
      }
      if (r === undefined) {
        r = false;
      }
      if (o) {
        s = t(o);
      }
      var a = "" + s.version;
      for (var u in n) {
        if (n.hasOwnProperty(u) && s[u]) {
          if (typeof n[u] != "string") {
            throw Error("Browser version in the minVersion map should be a string: " + u + ": " + String(n));
          }
          return i([a, n[u]]) < 0;
        }
      }
      return r;
    }
    e.test = function (t) {
      for (var n = 0; n < t.length; ++n) {
        var r = t[n];
        if (typeof r == "string" && r in e) {
          return true;
        }
      }
      return false;
    };
    e.isUnsupportedBrowser = o;
    e.compareVersions = i;
    e.check = function (t, e, n) {
      return !o(t, e, n);
    };
    e._detect = t;
    e.detect = t;
    return e;
  };
  if (module.exports) {
    module.exports = n();
  } else if (typeof define == "function" && define.amd) {
    define(e, n);
  } else {
    this[e] = n();
  }
}