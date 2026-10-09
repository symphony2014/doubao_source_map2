// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RotatePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 188745
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  function l() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"-4 -6 40 40\" fill=\"none\">\n  <g clip-path=\"url(#clip0)\">\n    <path transform=\"scale(1.5 1.5)\" d=\"M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z\" fill=\"white\"/>\n    <path transform=\"scale(1.5 1.5)\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z\" fill=\"white\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0\">\n      <rect width=\"40\" height=\"40\" fill=\"white\"/>\n    </clipPath>\n  </defs>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var c = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      (o = e.call(this, t)).rotateDeg = o.config.rotateDeg || 0;
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        if (!this.config.disable) {
          babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
          this.appendChild(".xgplayer-icon", this.icons.rotate);
          this.onBtnClick = this.onBtnClick.bind(this);
          this.bind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
          this.on(videoPlayerEventConstants.VIDEO_RESIZE, function () {
            if (t.rotateDeg) {
              playerUtilityHelpers.domUtils.setTimeout(t, function () {
                t.updateRotateDeg(t.rotateDeg, t.config.innerRotate);
              }, 100);
            }
          });
          if (this.rotateDeg) {
            this.updateRotateDeg(this.rotateDeg, this.config.innerRotate);
          }
        }
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
        this.unbind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
      }
    }, {
      key: "onBtnClick",
      value: function (t) {
        t.preventDefault();
        t.stopPropagation();
        this.emitUserAction(t, "rotate");
        this.rotate(this.config.clockwise, this.config.innerRotate, 1);
      }
    }, {
      key: "updateRotateDeg",
      value: function (t, e) {
        var i = this.player;
        t ||= 0;
        if (e) {
          this.player.videoRotateDeg = t;
          return;
        }
        var n = this.player;
        var o = n.root;
        var s = n.innerContainer;
        var a = this.player.media;
        var r = o.offsetWidth;
        var l = s && e ? s.offsetHeight : o.offsetHeight;
        var c = "100%";
        var u = "100%";
        var h = 0;
        var d = 0;
        if (t === 0.75 || t === 0.25) {
          c = `${l}px`;
          u = `${r}px`;
          h = -(l - r) / 2;
          d = -(r - l) / 2;
        }
        var f = `translate(${h}px,${d}px) rotate(${t}turn)`;
        var p = {
          transformOrigin: "center center",
          transform: f,
          webKitTransform: f,
          height: u,
          width: c
        };
        var g = e ? a : o;
        var v = e ? i.getPlugin("poster") : null;
        Object.keys(p).map(function (t) {
          g.style[t] = p[t];
          if (v && v.root) {
            v.root.style[t] = p[t];
          }
        });
      }
    }, {
      key: "rotate",
      value: function (t = false) {
        var e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var n = this.player;
        this.rotateDeg ||= 0;
        this.rotateDeg = (this.rotateDeg + 1 + (t ? 1 : -1) * 0.25 * i) % 1;
        this.updateRotateDeg(this.rotateDeg, e);
        n.emit(videoPlayerEventConstants.ROTATE, this.rotateDeg * 360);
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          rotate: l
        };
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `
    <xg-icon class="xgplayer-rotate">
      <div class="xgplayer-icon">
      </div>
      ${i18nTipRenderer.renderTip(this, "ROTATE_TIPS", this.playerConfig.isHideTips)}
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "rotate";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 6,
          innerRotate: true,
          clockwise: false,
          rotateDeg: 0,
          disable: false
        };
      }
    }]);
    return i;
  }(require("player-icon-hover-plugin") /*id: 945213*/.IconHoverPlugin);
  require.d(exports, {
    RotatePlugin: function () {
      return c;
    }
  });
}