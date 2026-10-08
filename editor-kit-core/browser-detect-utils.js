// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WZ' to 'isIOSBelow12'
// - Renamed export 'Xh' to 'platformInfo'
// - Renamed export 'vu' to 'getChromeVersion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 749406
         */
module.exports = function (module, exports, require) {
  var n = window.User && window.User.userAgent || navigator.userAgent || "";
  function o(t) {
    return (t = n.match(t)) && t.length > 1 && t[1] || "";
  }
  function i() {
    var t;
    if ((t = navigator.userAgent).indexOf("iPhone") > 0 || t.indexOf("iPad") > 0 || t.indexOf("iPhone") > 0) {
      var e = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
      if (e) {
        return {
          major: +e[1],
          minor: +e[2]
        };
      } else {
        return null;
      }
    }
    return null;
  }
  function u() {
    var t = i();
    return !!t && t.major < 12;
  }
  function a() {
    var t = navigator.userAgent.match(/Chrome\/([\d.]+)/i);
    if (t && t[1]) {
      return t[1];
    } else {
      return null;
    }
  }
  var s;
  var c;
  var f;
  var l = o(/(ipod|iphone|ipad)/i).toLowerCase();
  var p = /windows phone/i.test(n);
  var d = /nexus\s*[0-6]\s*/i.test(n);
  var h = /like android/i.test(n);
  var y = !p && /windows/i.test(n);
  var b = /chrome|crios|crmo/i.test(n);
  var g = /firefox|iceweasel|fxios/i.test(n);
  var v = /safari|applewebkit/i.test(n) && !b && !g;
  s = /edg([ea]|ios)\/(\d+(\.\d+)?)/i;
  var m = (s = n.match(s)) && s.length > 1 && s[2] || "";
  var S = !m && p || /msie|trident/i.test(n);
  var w = /silk/i.test(n);
  var A = !l && !w && /macintosh/i.test(n);
  var x = /Firefox/i.test(n);
  var O = /iPad/i.test(n);
  var M = p && m || /edg([ea]|ios)/i.test(n);
  var P = /Edge/i.test(n);
  var E = /tablet/i.test(n) && !/tablet pc/i.test(n);
  var _ = !h && n.indexOf("Android") > -1 || n.indexOf("Adr") > -1 || /OpenHarmony/.test(n);
  var j = !E && /[^-]mobi/i.test(n) || l === "iphone" || l === "ipod" || _ || d;
  var k = /feishu/i.test(n) || /lark/i.test(n);
  var T = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var F = /Docs/i.test(n);
  var R = {
    modernIE: false,
    isAndroid: _,
    lark: k,
    isIOS: T,
    android: _,
    windows: y,
    firefox: g,
    safari: v,
    msie: S,
    isMac: A,
    ios: !p && l,
    isFF: x,
    isIPad: O,
    msedge: M,
    chrome: b,
    isEdge: P,
    oldIE: false,
    mobile: j,
    isBytedanceApp: k || F,
    isIOSBelow12: u(),
    getIOSVersion: i
  };
  if (S) {
    c = "";
    if (p && !m) {
      c = o(/iemobile\/(\d+(\.\d+)?)/i);
    } else if (/msie|trident/i.test(n)) {
      c = o(/(?:msie |rv:)(\d+(\.\d+)?)/i);
    }
    f = parseInt(c, 10);
    R.oldIE = f < 11;
    R.modernIE = f >= 11;
  }
  require.d(exports, {
    isIOSBelow12: function () {
      return u;
    },
    platformInfo: function () {
      return R;
    },
    getChromeVersion: function () {
      return a;
    }
  });
}