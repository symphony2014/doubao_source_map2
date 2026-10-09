// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'LarkDocLinkFormat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 919616
         */
module.exports = function (module, exports, require) {
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var possibleConstructorReturn = require("possible-constructor-return") /*id: 233617*/;
  var getPrototypeOfHelper = require("get-prototype-of-helper") /*id: 109717*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var larkDataAttributes = require("lark-data-attributes") /*id: 305731*/;
  var larkStandardFormatManager = require("lark-standard-format-manager") /*id: 332743*/;
  var textFormatConstants = require("text-format-constants") /*id: 760801*/;
  var m = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var a;
    a = function () {
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
    function i() {
      var e;
      var i = getPrototypeOfHelper.getPrototypeOf(r);
      e = a ? Reflect.construct(i, arguments, getPrototypeOfHelper.getPrototypeOf(this).constructor) : i.apply(this, arguments);
      return possibleConstructorReturn.constructorReturn(this, e);
    }
    function r() {
      classCallCheckUtil.classCallCheck(this, r);
      return i.apply(this, arguments);
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "isDocLink",
      value: function () {
        return !!this.dom && !!this.dom.getAttribute(larkDataAttributes.dataLarkDocLink);
      }
    }, {
      key: "getDocLinkData",
      value: function () {
        try {
          var e;
          var a = ((e = this.dom) === null || e === undefined ? undefined : e.getAttribute(larkDataAttributes.dataLarkDocLink)) || "";
          return JSON.parse(a) || {};
        } catch (e) {
          return {
            title: "",
            url: "",
            token: ""
          };
        }
      }
    }, {
      key: "parse",
      value: function (e) {
        if (!this.isDocLink()) {
          return null;
        }
        if (e) {
          this.markStandardFormat(r.standardFormat, true);
        }
        var a = this.getDocLinkData();
        var i = a.title;
        var n = a.url;
        var o = a.token;
        return {
          title: i,
          url: decodeURIComponent(n || ""),
          token: o
        };
      }
    }]);
    return r;
  }(larkStandardFormatManager.LarkFormatManager);
  objectPropertySetter.setObjectProperty(m, "standardFormat", textFormatConstants.textFormatTypes.atUser);
  require.d(exports, {
    LarkDocLinkFormat: function () {
      return m;
    }
  });
}