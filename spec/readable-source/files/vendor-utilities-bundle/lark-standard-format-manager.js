// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'LarkFormatManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 332743
         */
module.exports = function (module, exports, require) {
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var larkDataAttributes = require("lark-data-attributes") /*id: 305731*/;
  function c(e, a) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (a) {
        n = n.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        });
      }
      i.push.apply(i, n);
    }
    return i;
  }
  function r(e) {
    for (var a = 1; a < arguments.length; a++) {
      var i = arguments[a] ?? {};
      if (a % 2) {
        c(Object(i), true).forEach(function (a) {
          objectPropertySetter.setObjectProperty(e, a, i[a]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(i));
      } else {
        c(Object(i)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
        });
      }
    }
    return e;
  }
  var p = function () {
    function e(a) {
      classCallCheckUtil.classCallCheck(this, e);
      objectPropertySetter.setObjectProperty(this, "dom", null);
      if (a.dom) {
        this.dom = a.dom;
      }
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "dispose",
      value: function () {
        this.dom = null;
      }
    }, {
      key: "isMatchStandardFormat",
      value: function (e) {
        if (!this.dom) {
          return false;
        }
        var a;
        var i;
        var n = (a = (i = this.dom).getAttribute) === null || a === undefined ? undefined : a.call(i, larkDataAttributes.dataLarkParserStd);
        if (n) {
          try {
            return !!(n && JSON.parse(n))[e];
          } catch (e) {}
        }
        return false;
      }
    }, {
      key: "markStandardFormat",
      value: function (e, a) {
        if (!this.dom) {
          return false;
        }
        var i;
        var n;
        var o = (i = (n = this.dom).getAttribute) === null || i === undefined ? undefined : i.call(n, larkDataAttributes.dataLarkParserStd);
        try {
          var c = o ? JSON.parse(o) : {};
          var p = r(r({}, c), {}, objectPropertySetter.setObjectProperty({}, e, a));
          var l = JSON.stringify(p);
          this.dom.setAttribute(larkDataAttributes.dataLarkParserStd, l);
          return true;
        } catch (e) {
          return false;
        }
      }
    }]);
    return e;
  }();
  require.d(exports, {
    LarkFormatManager: function () {
      return p;
    }
  });
}