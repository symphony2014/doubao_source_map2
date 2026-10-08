// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'XComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 802436
         */
module.exports = function (module, exports, require) {
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  var i = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      n.props = e;
      return n;
    }
    tsRuntimeHelpers.inherits(e, t);
    e.prototype.render = function () {
      return null;
    };
    return e;
  }(function () {
    function t() {}
    var e = t.prototype;
    e.componentDidMount = function () {};
    e.componentDidUpdate = function (t) {};
    e.componentWillUnmount = function () {};
    e.shouldComponentForceUpdate = function (t, e) {
      return false;
    };
    e.componentWillReceiveProps = function (t) {};
    return t;
  }());
  i.prototype.isXComponent = true;
  require.d(exports, {
    XComponent: function () {
      return i;
    }
  });
}