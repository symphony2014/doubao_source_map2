// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VideoThumbnailPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 344817
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var a = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      (o = e.call(this, t)).ratio = 1;
      o.interval = null;
      o._preloadMark = {};
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        if (this.usable) {
          this.initThumbnail();
        }
        this.on([videoPlayerEventConstants.DURATION_CHANGE], function () {
          var e = t.config;
          var i = e.pic_num;
          var n = e.interval;
          if (t.usable) {
            t.interval = n > 0 ? n : Math.round(t.player.duration * 1000 / i) / 1000;
          }
        });
      }
    }, {
      key: "setConfig",
      value: function (t) {
        var e = this;
        if (t) {
          var i = Object.keys(t);
          if (!(i.length < 1)) {
            i.forEach(function (i) {
              e.config[i] = t[i];
            });
            if (this.usable) {
              this.initThumbnail();
            }
          }
        }
      }
    }, {
      key: "usable",
      get: function () {
        var t = this.config;
        var e = t.urls;
        var i = t.pic_num;
        return e && e.length > 0 && i > 0;
      }
    }, {
      key: "initThumbnail",
      value: function () {
        var t = this.config;
        var e = t.width;
        var i = t.height;
        var n = t.pic_num;
        var o = t.interval;
        this.ratio = e / i * 100;
        this.interval = o || Math.round(this.player.duration / n);
        this._preloadMark = {};
      }
    }, {
      key: "getUrlByIndex",
      value: function (t) {
        if (t >= 0 && t < this.config.urls.length) {
          return this.config.urls[t];
        } else {
          return "";
        }
      }
    }, {
      key: "preload",
      value: function (t) {
        var e = this;
        if (!this._preloadMark[t]) {
          var i = this.config.urls;
          var n = i.length;
          var s = [];
          if (t > 0) {
            s.push(t - 1);
          }
          s.push(t);
          if (t > 0 && t < n - 1) {
            s.push(t + 1);
          }
          s.map(function (t) {
            if (!e._preloadMark[t] && t >= 0 && t < n) {
              e._preloadMark[t] = 1;
              playerUtilityHelpers.domUtils.preloadImg(i[t], function () {
                e._preloadMark[t] = 2;
              });
            }
          });
        }
      }
    }, {
      key: "getPosition",
      value: function (t, e = 0, i = 0) {
        var n = this.config;
        var o = n.pic_num;
        var s = n.row;
        var a = n.col;
        var r = n.width;
        var l = n.height;
        this.interval = Math.round(this.player.duration / o);
        var c = Math.ceil(t / this.interval);
        var u = (c = c > o ? o : c) < s * a ? 0 : Math.ceil(c / (s * a)) - 1;
        var h = c - a * s * u;
        var d = h > 0 ? Math.ceil(h / a) - 1 : 0;
        var f = h > 0 ? h - d * a - 1 : 0;
        var p = 0;
        var g = 0;
        if (e && i) {
          if (e / i < r / l) {
            p = r / l * (g = i);
          } else {
            g = (p = e) / (r / l);
          }
        } else if (i) {
          if (!e) {
            g = i || l;
            p = r / l * g;
          }
        } else {
          g = (p = e || r) / (r / l);
        }
        var v = this.getUrlByIndex(u);
        return {
          urlIndex: u,
          rowIndex: d,
          colIndex: f,
          url: v,
          height: g,
          width: p,
          style: {
            backgroundImage: `url(${v})`,
            backgroundSize: `${p * a}px auto`,
            backgroundPosition: `-${f * p}px -${d * g}px`,
            width: `${p}px`,
            height: `${g}px`
          }
        };
      }
    }, {
      key: "update",
      value: function (t, e, i = 0, n = 0, o = "") {
        var s = this.config;
        var a = s.pic_num;
        var r = s.urls;
        if (!(a <= 0) && r && r.length !== 0) {
          var l = this.getPosition(e, i, n);
          this.preload(l.urlIndex);
          Object.keys(l.style).map(function (e) {
            t.style[e] = l.style[e];
          });
          Object.keys(o).map(function (e) {
            t.style[e] = o[e];
          });
        }
      }
    }, {
      key: "changeConfig",
      value: function (t = {}) {
        this.setConfig(t);
      }
    }, {
      key: "createThumbnail",
      value: function (t, e) {
        var i = playerUtilityHelpers.domUtils.createDom("xg-thumbnail", "", {}, `thumbnail ${e}`);
        if (t) {
          t.appendChild(i);
        }
        return i;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "thumbnail";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          isShow: false,
          urls: [],
          pic_num: 0,
          col: 0,
          row: 0,
          height: 90,
          width: 160,
          scale: 1,
          className: "",
          hidePortrait: false
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    VideoThumbnailPlugin: function () {
      return a;
    }
  });
}