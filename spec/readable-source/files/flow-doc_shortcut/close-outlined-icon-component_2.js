// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CloseOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 868947
         */
module.exports = function (module, exports, require) {
  var objectCreateUtil = require("object-create-util") /*id: 352344*/;
  var emptyFunctionExport_1 = require("empty-function-export_1") /*id: 370291*/;
  function a(t) {
    this.__wrapped__ = t;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = 4294967295;
    this.__views__ = [];
  }
  a.prototype = objectCreateUtil.createObject(emptyFunctionExport_1.emptyFunction.prototype);
  a.prototype.constructor = a;
  var nativeWeakmapGetter = require("native-weakmap-getter") /*id: 168497*/;
  var functionNameUtil = require("function-name-util") /*id: 304958*/;
  var lodashWrapperBase = require("lodash-wrapper-base") /*id: 489803*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  function d(t) {
    if (t instanceof a) {
      return t.clone();
    }
    var e = new lodashWrapperBase.WrapperClass(t.__wrapped__, t.__chain__);
    e.__actions__ = arrayCopyUtil.copyArray(t.__actions__);
    e.__index__ = t.__index__;
    e.__values__ = t.__values__;
    return e;
  }
  var g = Object.prototype.hasOwnProperty;
  function b(t) {
    if (objectTypeCheck.isNonNullObject(t) && !arrayIsArrayUtil.isArray(t) && !(t instanceof a)) {
      if (t instanceof lodashWrapperBase.WrapperClass) {
        return t;
      }
      if (g.call(t, "__wrapped__")) {
        return d(t);
      }
    }
    return new lodashWrapperBase.WrapperClass(t);
  }
  b.prototype = emptyFunctionExport_1.emptyFunction.prototype;
  b.prototype.constructor = b;
  function h(t) {
    var e = functionNameUtil.getFuncName(t);
    var r = b[e];
    if (typeof r != "function" || !(e in a.prototype)) {
      return false;
    }
    if (t === r) {
      return true;
    }
    var n = nativeWeakmapGetter.weakMapGet(r);
    return !!n && t === n[0];
  }
  require.d(exports, {
    CloseOutlinedIcon: function () {
      return h;
    }
  });
}