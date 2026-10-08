// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'a' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 525858
         */
module.exports = function (module, exports, require) {
  exports.getComponentValidator = exports.getBooleanValidator = exports.getNumberArrayValidator = exports.getFunctionValidator = exports.getStringOrGradientValidator = exports.getStringValidator = exports.getNumberOrAutoValidator = exports.getNumberOrArrayOfNumbersValidator = exports.getNumberValidator = exports.alphaComponent = exports.RGBComponent = undefined;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  function n(t) {
    if (konvaTransformUtil.Util._isString(t)) {
      return "\"" + t + "\"";
    } else if (Object.prototype.toString.call(t) === "[object Number]" || konvaTransformUtil.Util._isBoolean(t)) {
      return t;
    } else {
      return Object.prototype.toString.call(t);
    }
  }
  exports.RGBComponent = function (t) {
    if (t > 255) {
      return 255;
    } else if (t < 0) {
      return 0;
    } else {
      return Math.round(t);
    }
  };
  exports.alphaComponent = function (t) {
    if (t > 1) {
      return 1;
    } else if (t < 0.0001) {
      return 0.0001;
    } else {
      return t;
    }
  };
  exports.getNumberValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        if (!konvaTransformUtil.Util._isNumber(t)) {
          konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a number.");
        }
        return t;
      };
    }
  };
  exports.getNumberOrArrayOfNumbersValidator = function (t) {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (e, i) {
        let r = konvaTransformUtil.Util._isNumber(e);
        let s = konvaTransformUtil.Util._isArray(e) && e.length == t;
        if (!r && !s) {
          konvaTransformUtil.Util.warn(n(e) + " is a not valid value for \"" + i + "\" attribute. The value should be a number or Array<number>(" + t + ")");
        }
        return e;
      };
    }
  };
  exports.getNumberOrAutoValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        var i = konvaTransformUtil.Util._isNumber(t);
        var r = t === "auto";
        if (!i && !r) {
          konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a number or \"auto\".");
        }
        return t;
      };
    }
  };
  exports.getStringValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        if (!konvaTransformUtil.Util._isString(t)) {
          konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a string.");
        }
        return t;
      };
    }
  };
  exports.getStringOrGradientValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        let i = konvaTransformUtil.Util._isString(t);
        let r = Object.prototype.toString.call(t) === "[object CanvasGradient]" || t && t.addColorStop;
        if (!i && !r) {
          konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a string or a native gradient.");
        }
        return t;
      };
    }
  };
  exports.getFunctionValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        if (!konvaTransformUtil.Util._isFunction(t)) {
          konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a function.");
        }
        return t;
      };
    }
  };
  exports.getNumberArrayValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        let i = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        if (!i || !(t instanceof i)) {
          if (konvaTransformUtil.Util._isArray(t)) {
            t.forEach(function (t) {
              if (!konvaTransformUtil.Util._isNumber(t)) {
                konvaTransformUtil.Util.warn("\"" + e + "\" attribute has non numeric element " + t + ". Make sure that all elements are numbers.");
              }
            });
          } else {
            konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a array of numbers.");
          }
        }
        return t;
      };
    }
  };
  exports.getBooleanValidator = function () {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (t, e) {
        if (t !== true && t !== false) {
          konvaTransformUtil.Util.warn(n(t) + " is a not valid value for \"" + e + "\" attribute. The value should be a boolean.");
        }
        return t;
      };
    }
  };
  exports.getComponentValidator = function (t) {
    if (konvaCoreConfig.Konva.isUnminified) {
      return function (e, i) {
        if (e != null && !konvaTransformUtil.Util.isObject(e)) {
          konvaTransformUtil.Util.warn(n(e) + " is a not valid value for \"" + i + "\" attribute. The value should be an object with properties " + t);
        }
        return e;
      };
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}