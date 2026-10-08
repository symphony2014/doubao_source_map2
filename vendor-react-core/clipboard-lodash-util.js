// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createLodashChain'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 103140
         */
module.exports = function (module, exports, require) {
  var lodashWrapperBase = require("lodash-wrapper-base") /*id: 489803*/;
  var throttledArgStringifyUtil_1 = require("throttled-arg-stringify-util_1") /*id: 931463*/;
  var nativeWeakmapGetter = require("native-weakmap-getter") /*id: 168497*/;
  var functionNameUtil = require("function-name-util") /*id: 304958*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var closeOutlinedIconComponent_2 = require("close-outlined-icon-component_2") /*id: 868947*/;
  exports.createLodashChain = function (e) {
    return throttledArgStringifyUtil_1.throttledStringify(function (n) {
      var i = n.length;
      var o = i;
      var u = lodashWrapperBase.WrapperClass.prototype.thru;
      for (e && n.reverse(); o--;) {
        var d = n[o];
        if (typeof d != "function") {
          throw TypeError("Expected a function");
        }
        if (u && !f && functionNameUtil.getFuncName(d) == "wrapper") {
          var f = new lodashWrapperBase.WrapperClass([], true);
        }
      }
      for (o = f ? o : i; ++o < i;) {
        d = n[o];
        var h = functionNameUtil.getFuncName(d);
        var p = h == "wrapper" ? nativeWeakmapGetter.weakMapGet(d) : undefined;
        f = p && closeOutlinedIconComponent_2.CloseOutlinedIcon(p[0]) && p[1] == 424 && !p[4].length && p[9] == 1 ? f[functionNameUtil.getFuncName(p[0])].apply(f, p[3]) : d.length == 1 && closeOutlinedIconComponent_2.CloseOutlinedIcon(d) ? f[h]() : f.thru(d);
      }
      return function () {
        var e = arguments;
        var r = e[0];
        if (f && e.length == 1 && arrayIsArrayUtil.isArray(r)) {
          return f.plant(r).value();
        }
        var o = 0;
        var a = i ? n[o].apply(this, e) : r;
        while (++o < i) {
          a = n[o].call(this, a);
        }
        return a;
      };
    });
  };
}