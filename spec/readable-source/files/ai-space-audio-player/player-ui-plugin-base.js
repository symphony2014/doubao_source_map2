// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'PlayerUiPlugin'
// - Renamed export 'kd' to 'playerPositions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 240976
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  var eventDelegationHelper = require("event-delegation-helper") /*id: 359139*/;
  var a = eventDelegationHelper;
  var xgplayerLogger = require("xgplayer-logger") /*id: 587555*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var l = {
    CONTROLS: "controls",
    ROOT: "root"
  };
  var s = {
    ROOT: "root",
    ROOT_LEFT: "rootLeft",
    ROOT_RIGHT: "rootRight",
    ROOT_TOP: "rootTop",
    CONTROLS_LEFT: "controlsLeft",
    CONTROLS_RIGTH: "controlsRight",
    CONTROLS_RIGHT: "controlsRight",
    CONTROLS_CENTER: "controlsCenter",
    CONTROLS: "controls"
  };
  function d(e) {
    return !!e && e.indexOf && /^(?:http|data:|\/)/.test(e);
  }
  function f(e, t, n = "", r = {}, o = "") {
    var i = null;
    if (e instanceof window.Element) {
      playerUtilityHelpers.domUtils.addClass(e, n);
      Object.keys(r).map(function (t) {
        e.setAttribute(t, r[t]);
      });
      return e;
    }
    if (d(e) || d(e.url)) {
      r.src = d(e) ? e : e.url || "";
      return i = playerUtilityHelpers.domUtils.createDom(e.tag || "img", "", r, `xg-img ${n}`);
    }
    if (typeof e == "function") {
      try {
        if ((i = e()) instanceof window.Element) {
          playerUtilityHelpers.domUtils.addClass(i, n);
          Object.keys(r).map(function (e) {
            i.setAttribute(e, r[e]);
          });
          return i;
        }
        xgplayerLogger.logger.logWarn(`warn>>icons.${t} in config of plugin named [${o}] is a function mast return an Element Object`);
        return null;
      } catch (e) {
        xgplayerLogger.logger.logError(`Plugin named [${o}]:createIcon`, e);
        return null;
      }
    }
    if (typeof e == "string") {
      return playerUtilityHelpers.domUtils.createDomFromHtml(e, r, n);
    } else {
      xgplayerLogger.logger.logWarn(`warn>>icons.${t} in config of plugin named [${o}] is invalid`);
      return null;
    }
  }
  var p = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n() {
      var e;
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      babelRuntimeHelpers_1.classCallCheck(this, n);
      (e = t.call(this, o)).__delegates = [];
      return e;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "__init",
      value: function (e) {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "__init", this).call(this, e);
        if (e.root) {
          var t = e.root;
          var o = null;
          this.icons = {};
          this.root = null;
          this.parent = null;
          (function (e, t) {
            var n = t.config.icons || t.playerConfig.icons;
            Object.keys(e).map(function (o) {
              var i;
              var a;
              var u;
              var c;
              var l = e[o];
              var s = l && l.class ? l.class : "";
              var d = l && l.attr ? l.attr : {};
              var p = null;
              if (n && n[o]) {
                i = n[o];
                a = s;
                s = babelRuntimeHelpers_1.typeOfHelper(i) === "object" && i.class && typeof i.class == "string" ? `${a} ${i.class}` : a;
                u = n[o];
                c = d;
                if (babelRuntimeHelpers_1.typeOfHelper(u) === "object" && u.attr && babelRuntimeHelpers_1.typeOfHelper(u.attr) === "object") {
                  Object.keys(u.attr).map(function (e) {
                    c[e] = u.attr[e];
                  });
                }
                d = c;
                p = f(n[o], o, s, d, t.pluginName);
              }
              if (!p && l) {
                p = f(l.icon ? l.icon : l, d, s, {}, t.pluginName);
              }
              t.icons[o] = p;
            });
          })(this.registerIcons() || {}, this);
          this.langText = {};
          (function (e, t) {
            Object.keys(e).map(function (n) {
              Object.defineProperty(t.langText, n, {
                get: function () {
                  var r = t.lang;
                  var o = t.i18n;
                  if (o[n]) {
                    return o[n];
                  } else {
                    return e[n] && e[n][r] || "";
                  }
                }
              });
            });
          })(this.registerLanguageTexts() || {}, this);
          var i = "";
          try {
            i = this.render();
          } catch (e) {
            xgplayerLogger.logger.logError(`Plugin:${this.pluginName}:render`, e);
            throw Error(`Plugin:${this.pluginName}:render:${e.message}`);
          }
          if (i) {
            (o = n.insert(i, t, e.index)).setAttribute("data-index", e.index);
          } else {
            if (!e.tag) {
              return;
            }
            (o = playerUtilityHelpers.domUtils.createDom(e.tag, "", e.attr, e.name)).setAttribute("data-index", e.index);
            t.appendChild(o);
          }
          this.root = o;
          this.parent = t;
          var a = this.config.attr || {};
          var l = this.config.style || {};
          this.setAttr(a);
          this.setStyle(l);
          if (this.config.index) {
            this.root.setAttribute("data-index", this.config.index);
          }
          this.__registerChildren();
        }
      }
    }, {
      key: "__registerChildren",
      value: function () {
        var e = this;
        if (this.root) {
          this._children = [];
          var t = this.children();
          if (t && babelRuntimeHelpers_1.typeOfHelper(t) === "object" && Object.keys(t).length > 0) {
            Object.keys(t).map(function (n) {
              var o;
              var i;
              var a = t[n];
              var u = {
                root: e.root
              };
              if (typeof a == "function") {
                o = e.config[n] || {};
                i = a;
              } else if (babelRuntimeHelpers_1.typeOfHelper(a) === "object" && typeof a.plugin == "function") {
                o = a.options ? playerUtilityHelpers.domUtils.deepCopy(e.config[n] || {}, a.options) : e.config[n] || {};
                i = a.plugin;
              }
              u.config = o;
              if (o.index !== undefined) {
                u.index = o.index;
              }
              if (o.root) {
                u.root = o.root;
              }
              e.registerPlugin(i, u, n);
            });
          }
        }
      }
    }, {
      key: "updateLang",
      value: function (e) {
        e ||= this.lang;
        var t = this.root;
        var n = this.i18n;
        var r = this.langText;
        if (t) {
          (function e(t, n) {
            for (var r = 0; r < t.children.length; r++) {
              if (t.children[r].children.length > 0) {
                e(t.children[r], n);
              } else {
                n(t.children[r]);
              }
            }
          })(t, function (t) {
            var o = t.getAttribute && t.getAttribute("lang-key");
            if (o) {
              var i = n[o.toUpperCase()] || r[o];
              if (i) {
                t.innerHTML = typeof i == "function" ? i(e) : i;
              }
            }
          });
        }
      }
    }, {
      key: "lang",
      get: function () {
        return this.player.lang;
      }
    }, {
      key: "changeLangTextKey",
      value: function (e, t = "") {
        var n = this.i18n || {};
        var r = this.langText;
        if (e.setAttribute) {
          e.setAttribute("lang-key", t);
        }
        var o = n[t] || r[t] || "";
        if (o) {
          e.innerHTML = o;
        }
      }
    }, {
      key: "plugins",
      value: function () {
        return this._children;
      }
    }, {
      key: "children",
      value: function () {
        return {};
      }
    }, {
      key: "registerPlugin",
      value: function (e, t = {}, o = "") {
        t.root = t.root || this.root;
        var i = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "registerPlugin", this).call(this, e, t, o);
        this._children.push(i);
        return i;
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {};
      }
    }, {
      key: "registerLanguageTexts",
      value: function () {
        return {};
      }
    }, {
      key: "find",
      value: function (e) {
        if (this.root) {
          return this.root.querySelector(e);
        }
      }
    }, {
      key: "bind",
      value: function (e, t, r) {
        var o = this;
        if (arguments.length < 3 && typeof t == "function") {
          if (Array.isArray(e)) {
            e.forEach(function (e) {
              o.bindEL(e, t);
            });
          } else {
            this.bindEL(e, t);
          }
        } else {
          var i = n.delegate.call(this, this.root, e, t, r);
          this.__delegates = this.__delegates.concat(i);
        }
      }
    }, {
      key: "unbind",
      value: function (e, t) {
        var n = this;
        if (arguments.length < 3 && typeof t == "function") {
          if (Array.isArray(e)) {
            e.forEach(function (e) {
              n.unbindEL(e, t);
            });
          } else {
            this.unbindEL(e, t);
          }
        } else {
          var r = `${e}_${t}`;
          var o = 0;
          for (; o < this.__delegates.length; o++) {
            if (this.__delegates[o].key === r) {
              this.__delegates[o].destroy();
              this.__delegates.splice(o, 1);
              break;
            }
          }
        }
      }
    }, {
      key: "setStyle",
      value: function (e, t) {
        var n = this;
        if (this.root) {
          if (playerUtilityHelpers.domUtils.typeOf(e) === "String") {
            return this.root.style[e] = t;
          }
          if (playerUtilityHelpers.domUtils.typeOf(e) === "Object") {
            Object.keys(e).map(function (t) {
              n.root.style[t] = e[t];
            });
          }
        }
      }
    }, {
      key: "setAttr",
      value: function (e, t) {
        var n = this;
        if (this.root) {
          if (playerUtilityHelpers.domUtils.typeOf(e) === "String") {
            return this.root.setAttribute(e, t);
          }
          if (playerUtilityHelpers.domUtils.typeOf(e) === "Object") {
            Object.keys(e).map(function (t) {
              n.root.setAttribute(t, e[t]);
            });
          }
        }
      }
    }, {
      key: "setHtml",
      value: function (e, t) {
        if (this.root) {
          this.root.innerHTML = e;
          if (typeof t == "function") {
            t();
          }
        }
      }
    }, {
      key: "bindEL",
      value: function (e, t, n = false) {
        if (this.root && `on${e}` in this.root && typeof t == "function") {
          this.root.addEventListener(e, t, n);
        }
      }
    }, {
      key: "unbindEL",
      value: function (e, t, n = false) {
        if (this.root && `on${e}` in this.root && typeof t == "function") {
          this.root.removeEventListener(e, t, n);
        }
      }
    }, {
      key: "show",
      value: function (e) {
        if (this.root && (this.root.style.display = e !== undefined ? e : "block", window.getComputedStyle(this.root, null).getPropertyValue("display") === "none")) {
          return this.root.style.display = "block";
        }
      }
    }, {
      key: "hide",
      value: function () {
        if (this.root) {
          this.root.style.display = "none";
        }
      }
    }, {
      key: "appendChild",
      value: function (e, t) {
        if (!this.root) {
          return null;
        }
        if (arguments.length < 2 && arguments[0] instanceof window.Element) {
          return this.root.appendChild(arguments[0]);
        }
        if (!t || !(t instanceof window.Element)) {
          return null;
        }
        try {
          if (typeof e == "string") {
            return this.find(e).appendChild(t);
          }
          return e.appendChild(t);
        } catch (e) {
          xgplayerLogger.logger.logError("Plugin:appendChild", e);
          return null;
        }
      }
    }, {
      key: "render",
      value: function () {
        return "";
      }
    }, {
      key: "destroy",
      value: function () {}
    }, {
      key: "__destroy",
      value: function () {
        var e = this;
        var t = this.player;
        this.__delegates.map(function (e) {
          e.destroy();
        });
        this.__delegates = [];
        if (this._children instanceof Array) {
          this._children.map(function (e) {
            t.unRegisterPlugin(e.pluginName);
          });
          this._children = null;
        }
        if (this.root) {
          if (this.root.hasOwnProperty("remove")) {
            this.root.remove();
          } else if (this.root.parentNode) {
            this.root.parentNode.removeChild(this.root);
          }
        }
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "__destroy", this).call(this);
        this.icons = {};
        ["root", "parent"].map(function (t) {
          e[t] = null;
        });
      }
    }], [{
      key: "insert",
      value: function (e, t, n = 0) {
        var r = t.children.length;
        var o = Number(n);
        var i = e instanceof window.Node;
        if (!r) {
          if (i) {
            t.appendChild(e);
          } else {
            t.insertAdjacentHTML("beforeend", e);
          }
          return t.children[t.children.length - 1];
        }
        var a = 0;
        var u = null;
        var c = "";
        for (; a < r; a++) {
          var l = Number((u = t.children[a]).getAttribute("data-index"));
          if (l >= o) {
            c = "beforebegin";
            break;
          }
          if (l < o) {
            c = "afterend";
          }
        }
        if (i) {
          if (c === "afterend") {
            t.appendChild(e);
          } else {
            t.insertBefore(e, u);
          }
        } else {
          u.insertAdjacentHTML(c, e);
        }
        if (c === "afterend") {
          return t.children[t.children.length - 1];
        } else {
          return t.children[a];
        }
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {};
      }
    }, {
      key: "delegate",
      value: function (e, t, n, r, o = false) {
        var i = [];
        if (e instanceof window.Node && typeof r == "function") {
          if (Array.isArray(n)) {
            n.forEach(function (n) {
              var u = a(e, t, n, r, o);
              u.key = `${t}_${n}`;
              i.push(u);
            });
          } else {
            var u = a(e, t, n, r, o);
            u.key = `${t}_${n}`;
            i.push(u);
          }
        }
        return i;
      }
    }, {
      key: "ROOT_TYPES",
      get: function () {
        return l;
      }
    }, {
      key: "POSITIONS",
      get: function () {
        return s;
      }
    }]);
    return n;
  }(playerPluginBaseClass.PluginBase);
  require.d(exports, {
    PlayerUiPlugin: function () {
      return p;
    },
    playerPositions: function () {
      return s;
    }
  });
}