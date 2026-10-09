// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'IconHoverPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 945213
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var i = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n() {
      var e;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      var i = arguments.length;
      var o = Array(i);
      var a = 0;
      for (; a < i; a++) {
        o[a] = arguments[a];
      }
      e = t.call.apply(t, [this].concat(o));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "_onMouseenter", function (t) {
        e.emit("icon_mouseenter", {
          pluginName: e.pluginName
        });
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "_onMouseLeave", function (t) {
        e.emit("icon_mouseleave", {
          pluginName: e.pluginName
        });
      });
      return e;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "afterCreate",
      value: function () {
        this.bind("mouseenter", this._onMouseenter);
        this.bind("mouseleave", this._onMouseLeave);
      }
    }, {
      key: "destroy",
      value: function () {
        this.unbind("mouseenter", this._onMouseenter);
        this.unbind("mouseleave", this._onMouseLeave);
      }
    }]);
    return n;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    IconHoverPlugin: function () {
      return i;
    }
  });
}