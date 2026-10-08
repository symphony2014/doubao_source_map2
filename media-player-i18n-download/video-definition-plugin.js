// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DefinitionPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 199582
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var videoPlayerOptionsIconPlugin = require("video-player-options-icon-plugin") /*id: 804563*/;
  var l = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      (o = e.call(this, t)).curTime = 0;
      o.isPaused = true;
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        var e = t.config.list;
        if (Array.isArray(e) && e.length > 0) {
          t.config.list = e.map(function (t) {
            if (!t.text && t.name) {
              t.text = t.name;
            }
            t.text ||= t.definition;
            return t;
          });
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
        this.on("resourceReady", function (e) {
          t.changeDefinitionList(e);
        });
        this.on(videoPlayerEventConstants.DEFINITION_CHANGE, function (e) {
          t.renderItemList(t.config.list, e.to);
        });
        if (this.player.definitionList.length < 2) {
          this.hide();
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
      key: "initDefinition",
      value: function () {
        var t = this.config;
        var e = t.list;
        var i = t.defaultDefinition;
        if (e.length > 0) {
          var n = null;
          e.map(function (t) {
            if (t.definition === i) {
              n = t;
            }
          });
          n ||= e[0];
          this.changeDefinition(n);
        }
      }
    }, {
      key: "renderItemList",
      value: function () {
        var t = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.list || [];
        var o = arguments.length > 1 ? arguments[1] : undefined;
        var s = o && o.definition ? o.definition : this.config.defaultDefinition;
        if (o) {
          e.forEach(function (t) {
            t.selected = false;
          });
        }
        var a = 0;
        var r = e.map(function (e, i) {
          var o = babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({}, e), {}, {
            showText: t.getTextByLang(e) || e.definition,
            selected: false
          });
          if (e.selected || e.definition && e.definition == s) {
            o.selected = true;
            a = i;
          }
          return o;
        });
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "renderItemList", this).call(this, r, a);
      }
    }, {
      key: "changeDefinitionList",
      value: function (t) {
        if (Array.isArray(t)) {
          this.config.list = t.map(function (t) {
            if (!t.text && t.name) {
              t.text = t.name;
            }
            t.text ||= t.definition;
            return t;
          });
          this.renderItemList();
          if (this.config.list.length < 2) {
            this.hide();
          } else {
            this.show();
          }
        }
      }
    }, {
      key: "changeDefinition",
      value: function (t, e) {
        this.player.changeDefinition(t, e);
      }
    }, {
      key: "onItemClick",
      value: function (t, e) {
        var o = this.player.definitionList;
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "onItemClick", this).apply(this, arguments);
        this.emitUserAction(t, "change_definition", {
          from: e.from,
          to: e.to
        });
        for (var s = 0; s < o.length; s++) {
          if (e.to && o[s].definition === e.to.definition) {
            e.to.url = o[s].url;
          }
          if (e.from && o[s].definition === e.from.definition) {
            e.from.url = o[s].url;
          }
        }
        this.player.changeDefinition(e.to, e.from);
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "definition";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({}, videoPlayerOptionsIconPlugin.OptionsIconPlugin.defaultConfig), {}, {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 3,
          list: [],
          defaultDefinition: "",
          disable: false,
          hidePortrait: false,
          className: "xgplayer-definition",
          isShowIcon: true
        });
      }
    }]);
    return i;
  }(videoPlayerOptionsIconPlugin.OptionsIconPlugin);
  require.d(exports, {
    DefinitionPlugin: function () {
      return l;
    }
  });
}