// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'OptionsIconPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 804563
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var l = function () {
    function t(e) {
      babelRuntimeHelpers_1.classCallCheck(this, t);
      this.config = e.config;
      this.parent = e.root;
      this.root = playerUtilityHelpers.domUtils.createDom("ul", "", {}, `xg-options-list xg-list-slide-scroll ${this.config.className}`);
      e.root.appendChild(this.root);
      var i = this.config.maxHeight;
      if (i) {
        this.setStyle({
          maxHeight: i
        });
      }
      this.onItemClick = this.onItemClick.bind(this);
      this.renderItemList();
      var a = environmentDetectorUtil.environmentUtils.device === "mobile" ? "touchend" : "click";
      this._delegates = playerUiPluginBase.PlayerUiPlugin.delegate.call(this, this.root, "li", a, this.onItemClick);
    }
    babelRuntimeHelpers_1.createClass(t, [{
      key: "renderItemList",
      value: function (t) {
        var e = this;
        var i = this.config;
        var n = this.root;
        if (t) {
          i.data = t;
        } else {
          t = i.data;
        }
        if (i.style) {
          Object.keys(i.style).map(function (t) {
            n.style[t] = i[t];
          });
        }
        if (t.length > 0) {
          this.attrKeys = Object.keys(t[0]);
        }
        this.root.innerHTML = "";
        t.map(function (t, i) {
          var n = t.selected ? "option-item selected" : "option-item";
          t["data-index"] = i;
          e.root.appendChild(playerUtilityHelpers.domUtils.createDom("li", `<span>${t.showText}</span>`, t, n));
        });
      }
    }, {
      key: "onItemClick",
      value: function (t) {
        t.delegateTarget ||= t.target;
        var e = t.delegateTarget;
        if (e && playerUtilityHelpers.domUtils.hasClass(e, "selected")) {
          return false;
        }
        var i = typeof this.config.onItemClick == "function" ? this.config.onItemClick : null;
        var n = this.root.querySelector(".selected");
        playerUtilityHelpers.domUtils.addClass(e, "selected");
        if (n) {
          playerUtilityHelpers.domUtils.removeClass(n, "selected");
        }
        i(t, {
          from: n ? this.getAttrObj(n, this.attrKeys) : null,
          to: this.getAttrObj(e, this.attrKeys)
        });
      }
    }, {
      key: "getAttrObj",
      value: function (t, e) {
        if (!t || !e) {
          return {};
        }
        var i = {};
        e.map(function (e) {
          i[e] = t.getAttribute(e);
        });
        var n = t.getAttribute("data-index");
        if (n) {
          i.index = Number(n);
        }
        return i;
      }
    }, {
      key: "show",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "hide");
        playerUtilityHelpers.domUtils.addClass(this.root, "active");
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "active");
        playerUtilityHelpers.domUtils.addClass(this.root, "hide");
      }
    }, {
      key: "setStyle",
      value: function (t) {
        var e = this;
        Object.keys(t).forEach(function (i) {
          e.root.style[i] = t[i];
        });
      }
    }, {
      key: "destroy",
      value: function () {
        if (this._delegates) {
          this._delegates.map(function (t) {
            if (t.destroy) {
              t.destroy();
            }
          });
          this._delegates = null;
        }
        this.root.innerHTML = null;
        this.parent.removeChild(this.root);
        this.root = null;
      }
    }]);
    return t;
  }();
  var c = {
    SIDE: "side",
    MIDDLE: "middle"
  };
  var u = {
    CLICK: "click",
    HOVER: "hover"
  };
  var h = environmentDetectorUtil.environmentUtils.device === "mobile";
  var d = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      o = e.call(this, t);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onEnter", function (t) {
        t.stopPropagation();
        o.emit("icon_mouseenter", {
          pluginName: o.pluginName
        });
        o.switchActiveState(t);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "switchActiveState", function (t) {
        t.stopPropagation();
        if (o.config.toggleMode === u.CLICK) {
          o.toggle(!o.isActive);
        } else {
          o.toggle(true);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onLeave", function (t) {
        t.stopPropagation();
        o.emit("icon_mouseleave", {
          pluginName: o.pluginName
        });
        if (o.config.listType !== c.SIDE && o.isActive) {
          o.toggle(false);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onListEnter", function (t) {
        o.enterType = 2;
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onListLeave", function (t) {
        o.enterType = 0;
        if (o.isActive) {
          o.toggle(false);
        }
      });
      o.isIcons = false;
      o.isActive = false;
      o.curValue = null;
      o.curIndex = 0;
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "updateLang",
      value: function (t) {
        this.renderItemList(this.config.list, this.curIndex);
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        var e = this.config;
        this.initIcons();
        if (h && e.listType !== c.MIDDLE) {
          e.listType = c.SIDE;
        }
        if (e.hidePortrait) {
          playerUtilityHelpers.domUtils.addClass(this.root, "portrait");
        }
        this.on([videoPlayerEventConstants.VIDEO_RESIZE, videoPlayerEventConstants.FULLSCREEN_CHANGE], function () {
          t._resizeList();
        });
        this.once(videoPlayerEventConstants.CANPLAY, function () {
          if (e.list && e.list.length > 0) {
            t.renderItemList(e.list);
            t.show();
          }
        });
        if (h) {
          this.on(videoPlayerEventConstants.PLAYER_FOCUS, function () {
            if (t.isActive) {
              if (t.optionsList) {
                t.optionsList.hide();
              }
              t.isActive = false;
            }
          });
        }
        if (h) {
          e.toggleMode = u.CLICK;
          this.activeEvent = "touchend";
        } else {
          this.activeEvent = e.toggleMode === u.CLICK ? "click" : "mouseenter";
        }
        if (e.toggleMode === u.CLICK) {
          this.bind(this.activeEvent, this.switchActiveState);
        } else {
          this.bind(this.activeEvent, this.onEnter);
          this.bind("mouseleave", this.onLeave);
        }
        if (this.isIcons) {
          this.bind("click", this.onIconClick);
        }
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this;
        var e = this.icons;
        var i = Object.keys(e);
        var n = false;
        if (i.length > 0) {
          i.forEach(function (i) {
            t.appendChild(".xgplayer-icon", e[i]);
            n ||= e[i];
          });
          this.isIcons = n;
        }
        if (!n) {
          this.appendChild(".xgplayer-icon", playerUtilityHelpers.domUtils.createDom("span", "", {}, "icon-text"));
          playerUtilityHelpers.domUtils.addClass(this.find(".xgplayer-icon"), "btn-text");
        }
      }
    }, {
      key: "show",
      value: function () {
        if (this.config.list && !(this.config.list.length < 2)) {
          playerUtilityHelpers.domUtils.addClass(this.root, "show");
        }
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "show");
      }
    }, {
      key: "getTextByLang",
      value: function (t, e, i) {
        if (t === undefined) {
          return "";
        }
        var s = this.config.list;
        i ||= this.player.lang;
        e = !e || playerUtilityHelpers.domUtils.isUndefined(t[e]) ? "text" : e;
        if (typeof t == "number") {
          t = s[t];
        }
        try {
          if (babelRuntimeHelpers_1.typeOfHelper(t[e]) === "object") {
            return t[e][i] || t[e].en;
          }
          return t[e];
        } catch (t) {
          return "";
        }
      }
    }, {
      key: "toggle",
      value: function (t) {
        if (t !== this.isActive) {
          var e = this.player.controls;
          var i = this.config.listType;
          if (t) {
            if (i === c.SIDE) {
              e.blur();
            } else {
              e.focus();
            }
            if (this.optionsList) {
              this.optionsList.show();
            }
          } else {
            if (i === c.SIDE) {
              e.focus();
            } else {
              e.focusAwhile();
            }
            if (this.optionsList) {
              this.optionsList.hide();
            }
          }
          this.isActive = t;
        }
      }
    }, {
      key: "onItemClick",
      value: function (t, e) {
        t.stopPropagation();
        var i = this.config;
        var n = i.listType;
        var o = i.list;
        this.curIndex = e.to.index;
        this.curItem = o[this.curIndex];
        this.changeCurrentText();
        if (this.config.isItemClickHide || h || n === c.SIDE) {
          this.toggle(false);
        }
      }
    }, {
      key: "onIconClick",
      value: function (t) {}
    }, {
      key: "changeCurrentText",
      value: function () {
        if (!this.isIcons) {
          var t = this.config.list;
          var e = this.curIndex < t.length ? this.curIndex : 0;
          var i = t[e];
          if (i) {
            this.find(".icon-text").innerHTML = this.getTextByLang(i, "iconText");
          }
        }
      }
    }, {
      key: "renderItemList",
      value: function (t, e) {
        var i;
        var n;
        var o = this;
        var s = this.config;
        var a = this.optionsList;
        var u = this.player;
        if (typeof e == "number") {
          this.curIndex = e;
          this.curItem = s.list[e];
        }
        if (a) {
          a.renderItemList(t);
          this.changeCurrentText();
          return;
        }
        var h = {
          config: {
            data: t || [],
            className: (i = s.listType, n = s.position, i === c.SIDE ? n === playerUiPluginBase.playerPositions.CONTROLS_LEFT ? "xg-side-list xg-left-side" : "xg-side-list xg-right-side" : ""),
            onItemClick: function (t, e) {
              o.onItemClick(t, e);
            }
          },
          root: s.listType === c.SIDE ? u.innerContainer || u.root : this.root
        };
        if (this.config.isShowIcon) {
          var d = this.player.root.getBoundingClientRect().height;
          var f = s.listType === c.MIDDLE ? d - 50 : d;
          if (f) {
            h.config.maxHeight = `${f}px`;
          }
          this.optionsList = new l(h);
          this.changeCurrentText();
          this.show();
        }
        this._resizeList();
      }
    }, {
      key: "_resizeList",
      value: function () {
        var t = this.player.root.getBoundingClientRect().height;
        var e = this.config.listType === c.MIDDLE ? t - 50 : t;
        if (this.optionsList) {
          this.optionsList.setStyle({
            maxHeight: `${e}px`
          });
        }
      }
    }, {
      key: "destroy",
      value: function () {
        if (this.config.toggleMode === u.CLICK) {
          this.unbind(this.activeEvent, this.switchActiveState);
        } else {
          this.unbind(this.activeEvent, this.onEnter);
          this.unbind("mouseleave", this.onLeave);
        }
        if (this.isIcons) {
          this.unbind("click", this.onIconClick);
        }
        if (this.optionsList) {
          this.optionsList.destroy();
          this.optionsList = null;
        }
      }
    }, {
      key: "render",
      value: function () {
        if (this.config.isShowIcon) {
          return `<xg-icon class="xg-options-icon ${this.config.className || ""}">
    <div class="xgplayer-icon">
    </div>
   </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "optionsIcon";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 100,
          list: [],
          listType: "middle",
          listStyle: {},
          hidePortrait: true,
          isShowIcon: false,
          isItemClickHide: true,
          toggleMode: u.HOVER
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    OptionsIconPlugin: function () {
      return d;
    }
  });
}