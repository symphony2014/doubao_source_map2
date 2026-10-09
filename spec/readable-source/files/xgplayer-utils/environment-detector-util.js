// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'environmentUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 257644
         */
module.exports = function (module, exports, require) {
  var r = {
    android: /(Android)\s([\d.]+)/,
    ios: /(Version)\/([\d.]+)/
  };
  var o = ["avc1.42E01E, mp4a.40.2", "avc1.58A01E, mp4a.40.2", "avc1.4D401E, mp4a.40.2", "avc1.64001E, mp4a.40.2", "avc1.42E01E", "mp4v.20.8", "avc1.42E01E, mp4a.40.2", "avc1.58A01E, mp4a.40.2", "avc1.4D401E, mp4a.40.2", "avc1.64001E, mp4a.40.2", "mp4v.20.8, mp4a.40.2", "mp4v.20.240, mp4a.40.2"];
  var i = {
    get device() {
      if (i.os.isPc) {
        return "pc";
      } else {
        return "mobile";
      }
    },
    get browser() {
      if (typeof navigator == "undefined") {
        return "";
      }
      var a = navigator.userAgent.toLowerCase();
      var u = {
        ie: /rv:([\d.]+)\) like gecko/,
        firefox: /firefox\/([\d.]+)/,
        chrome: /chrome\/([\d.]+)/,
        opera: /opera.([\d.]+)/,
        safari: /version\/([\d.]+).*safari/
      };
      return [].concat(Object.keys(u).filter(function (e) {
        return u[e].test(a);
      }))[0];
    },
    get os() {
      if (typeof navigator == "undefined") {
        return {};
      }
      var c = navigator.userAgent;
      var l = /(?:Windows Phone)/.test(c);
      var s = /(?:SymbianOS)/.test(c) || l;
      var d = /(?:Android)/.test(c);
      var f = /(?:Firefox)/.test(c);
      var p = /(?:iPad|PlayBook)/.test(c) || d && !/(?:Mobile)/.test(c) || f && /(?:Tablet)/.test(c);
      var h = /(?:iPhone)/.test(c) && !p;
      var v = /(?:iPad|PlayBook)/.test(c);
      return {
        isTablet: p,
        isPhone: h,
        isIpad: v,
        isIos: h || v,
        isAndroid: d,
        isPc: !h && !d && !s && !p,
        isSymbian: s,
        isWindowsPhone: l,
        isFireFox: f
      };
    },
    get osVersion() {
      if (typeof navigator == "undefined") {
        return 0;
      }
      var m = navigator.userAgent;
      var g = "";
      var y = (g = /(?:iPhone)|(?:iPad|PlayBook)/.test(m) ? r.ios : r.android) ? g.exec(m) : [];
      if (y && y.length >= 3) {
        var x = y[2].split(".");
        if (x.length > 0) {
          return parseInt(x[0]);
        } else {
          return 0;
        }
      }
      return 0;
    },
    get isWeixin() {
      if (typeof navigator == "undefined") {
        return false;
      }
      if (/(micromessenger)\/([\d.]+)/.exec(navigator.userAgent.toLocaleLowerCase())) {
        return true;
      }
      return false;
    },
    isSupportMP4: function () {
      var e = {
        isSupport: false,
        mime: ""
      };
      if (typeof document == "undefined") {
        return e;
      }
      if (this.supportResult) {
        return this.supportResult;
      }
      var t = document.createElement("video");
      if (typeof t.canPlayType == "function") {
        o.map(function (n) {
          if (t.canPlayType(`video/mp4; codecs="${n}"`) === "probably") {
            e.isSupport = true;
            e.mime += `||${n}`;
          }
        });
      }
      this.supportResult = e;
      t = null;
      return e;
    },
    isMSESupport: function (e = "video/mp4; codecs=\"avc1.42E01E,mp4a.40.2\"") {
      if (typeof MediaSource == "undefined" || !MediaSource) {
        return false;
      }
      try {
        return MediaSource.isTypeSupported(e);
      } catch (t) {
        this._logger.error(e, t);
        return false;
      }
    },
    isHevcSupported: function () {
      return typeof MediaSource != "undefined" && !!MediaSource.isTypeSupported && (MediaSource.isTypeSupported("video/mp4;codecs=\"hev1.1.6.L120.90\"") || MediaSource.isTypeSupported("video/mp4;codecs=\"hev1.2.4.L120.90\"") || MediaSource.isTypeSupported("video/mp4;codecs=\"hev1.3.E.L120.90\"") || MediaSource.isTypeSupported("video/mp4;codecs=\"hev1.4.10.L120.90\""));
    },
    probeConfigSupported: function (e) {
      var t = {
        supported: false,
        smooth: false,
        powerEfficient: false
      };
      if (!e || typeof navigator == "undefined") {
        return Promise.resolve(t);
      }
      if (navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo) {
        return navigator.mediaCapabilities.decodingInfo(e);
      }
      var n = e.video || {};
      var r = e.audio || {};
      try {
        var o = MediaSource.isTypeSupported(n.contentType);
        var i = MediaSource.isTypeSupported(r.contentType);
        return Promise.resolve({
          supported: o && i,
          smooth: false,
          powerEfficient: false
        });
      } catch (e) {
        return Promise.resolve(t);
      }
    }
  };
  require.d(exports, {
    environmentUtils: function () {
      return i;
    }
  });
}