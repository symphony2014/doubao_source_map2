// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'PluginBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 738545
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var xgplayerLogger = require("xgplayer-logger") /*id: 587555*/;
  var pluginHooksManager = require("plugin-hooks-manager") /*id: 206040*/;
  function u(e, t) {
    xgplayerLogger.logger.logError(`[${e}] event or callback cant be undefined or null when call ${t}`);
  }
  var c = function () {
    function e(t) {
      babelRuntimeHelpers_1.classCallCheck(this, e);
      if (playerUtilityHelpers.domUtils.checkIsFunction(this.beforeCreate)) {
        this.beforeCreate(t);
      }
      pluginHooksManager.initHooks(this);
      this.__args = t;
      this.__events = {};
      this.__onceEvents = {};
      this.config = t.config || {};
      this.player = null;
      this.playerConfig = {};
      this.pluginName = "";
      this.__init(t);
    }
    babelRuntimeHelpers_1.createClass(e, [{
      key: "beforeCreate",
      value: function (e) {}
    }, {
      key: "afterCreate",
      value: function () {}
    }, {
      key: "beforePlayerInit",
      value: function () {}
    }, {
      key: "onPluginsReady",
      value: function () {}
    }, {
      key: "afterPlayerInit",
      value: function () {}
    }, {
      key: "destroy",
      value: function () {}
    }, {
      key: "__init",
      value: function (e) {
        this.player = e.player;
        this.playerConfig = e.player && e.player.config;
        this.pluginName = e.pluginName ? e.pluginName.toLowerCase() : this.constructor.pluginName.toLowerCase();
        this.logger = e.player && e.player.logger;
      }
    }, {
      key: "updateLang",
      value: function (e) {
        e ||= this.lang;
      }
    }, {
      key: "lang",
      get: function () {
        return this.player.lang;
      }
    }, {
      key: "i18n",
      get: function () {
        return this.player.i18n;
      }
    }, {
      key: "i18nKeys",
      get: function () {
        return this.player.i18nKeys;
      }
    }, {
      key: "domEventType",
      get: function () {
        var e = playerUtilityHelpers.domUtils.checkTouchSupport() ? "touch" : "mouse";
        if (this.playerConfig && (this.playerConfig.domEventType === "touch" || this.playerConfig.domEventType === "mouse")) {
          e = this.playerConfig.domEventType;
        }
        return e;
      }
    }, {
      key: "on",
      value: function (e, t) {
        var n = this;
        if (!e || !t || !this.player) {
          u(this.pluginName, "plugin.on(event, callback)");
          return;
        }
        if (typeof e == "string") {
          this.__events[e] = t;
          this.player.on(e, t);
        } else if (Array.isArray(e)) {
          e.forEach(function (e) {
            n.__events[e] = t;
            n.player.on(e, t);
          });
        }
      }
    }, {
      key: "once",
      value: function (e, t) {
        var n = this;
        if (!e || !t || !this.player) {
          u(this.pluginName, "plugin.once(event, callback)");
          return;
        }
        if (typeof e == "string") {
          this.__onceEvents[e] = t;
          this.player.once(e, t);
        } else if (Array.isArray(e)) {
          e.forEach(function (r) {
            n.__onceEvents[r] = t;
            n.player.once(e, t);
          });
        }
      }
    }, {
      key: "off",
      value: function (e, t) {
        var n = this;
        if (!e || !t || !this.player) {
          u(this.pluginName, "plugin.off(event, callback)");
          return;
        }
        if (typeof e == "string") {
          delete this.__events[e];
          this.player.off(e, t);
        } else if (Array.isArray(e)) {
          e.forEach(function (r) {
            delete n.__events[e];
            n.player.off(r, t);
          });
        }
      }
    }, {
      key: "offAll",
      value: function () {
        var e = this;
        ["__events", "__onceEvents"].forEach(function (t) {
          Object.keys(e[t]).forEach(function (n) {
            if (e[t][n]) {
              e.off(n, e[t][n]);
            }
            if (n) {
              delete e[t][n];
            }
          });
        });
        this.__events = {};
        this.__onceEvents = {};
      }
    }, {
      key: "emit",
      value: function (e) {
        var t;
        if (this.player) {
          var n = arguments.length;
          var r = Array(n > 1 ? n - 1 : 0);
          var o = 1;
          for (; o < n; o++) {
            r[o - 1] = arguments[o];
          }
          (t = this.player).emit.apply(t, [e].concat(r));
        }
      }
    }, {
      key: "emitUserAction",
      value: function (e, t, n = {}) {
        if (this.player) {
          var o = babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({}, n), {}, {
            pluginName: this.pluginName
          });
          this.player.emitUserAction(e, t, o);
        }
      }
    }, {
      key: "hook",
      value: function (e, t) {
        return pluginHooksManager.createHook.call.apply(pluginHooksManager.createHook, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "useHooks",
      value: function (e, t) {
        var n = arguments.length;
        var r = Array(n > 2 ? n - 2 : 0);
        var o = 2;
        for (; o < n; o++) {
          r[o - 2] = arguments[o];
        }
        return pluginHooksManager.setHook.call.apply(pluginHooksManager.setHook, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "removeHooks",
      value: function (e, t) {
        var n = arguments.length;
        var r = Array(n > 2 ? n - 2 : 0);
        var o = 2;
        for (; o < n; o++) {
          r[o - 2] = arguments[o];
        }
        return pluginHooksManager.deleteHook.call.apply(pluginHooksManager.deleteHook, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "registerPlugin",
      value: function (e, t = {}, n = "") {
        if (this.player) {
          if (n) {
            t.pluginName = n;
          }
          return this.player.registerPlugin({
            plugin: e,
            options: t
          });
        }
      }
    }, {
      key: "getPlugin",
      value: function (e) {
        if (this.player) {
          return this.player.getPlugin(e);
        } else {
          return null;
        }
      }
    }, {
      key: "__destroy",
      value: function () {
        var e = this;
        var t = this.player;
        var n = this.pluginName;
        this.offAll();
        playerUtilityHelpers.domUtils.clearAllTimers(this);
        if (playerUtilityHelpers.domUtils.checkIsFunction(this.destroy)) {
          this.destroy();
        }
        ["player", "playerConfig", "pluginName", "logger", "__args", "__hooks"].map(function (t) {
          e[t] = null;
        });
        t.unRegisterPlugin(n);
        pluginHooksManager.clearHooks(this);
      }
    }], [{
      key: "defineGetterOrSetter",
      value: function (e, t) {
        for (var n in t) {
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            Object.defineProperty(e, n, t[n]);
          }
        }
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {};
      }
    }, {
      key: "pluginName",
      get: function () {
        return "pluginName";
      }
    }]);
    return e;
  }();
  require.d(exports, {
    PluginBase: function () {
      return c;
    }
  });
}