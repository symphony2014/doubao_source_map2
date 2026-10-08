// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'wrapNativeSuper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 694678
         */
module.exports = function (module, exports, require) {
  var getPrototypeOfHelper = require("get-prototype-of-helper") /*id: 109717*/;
  var possibleConstructorReturn = require("possible-constructor-return") /*id: 233617*/;
  function i(e) {
    var t = function () {
      if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var n;
      var i = getPrototypeOfHelper.getPrototypeOf(e);
      n = t ? Reflect.construct(i, arguments, getPrototypeOfHelper.getPrototypeOf(this).constructor) : i.apply(this, arguments);
      return possibleConstructorReturn.constructorReturn(this, n);
    };
  }
  require.d(exports, {
    wrapNativeSuper: function () {
      return i;
    }
  });
}