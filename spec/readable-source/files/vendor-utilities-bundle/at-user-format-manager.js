// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'AtUserFormatManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 667456
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
      key: "isAtUser",
      value: function () {
        return !!this.dom && !!this.dom.getAttribute(larkDataAttributes.dataLarkAtUser);
      }
    }, {
      key: "getAtUserData",
      value: function () {
        try {
          var e;
          var a = ((e = this.dom) === null || e === undefined ? undefined : e.getAttribute(larkDataAttributes.dataLarkAtUser)) || "";
          return JSON.parse(a) || {};
        } catch (e) {
          return {
            userid: "",
            username: ""
          };
        }
      }
    }, {
      key: "parse",
      value: function (e) {
        if (!this.isAtUser()) {
          return null;
        }
        if (e) {
          this.markStandardFormat(r.standardFormat, true);
        }
        var a = this.getAtUserData();
        return {
          userid: a.userid,
          username: a.username
        };
      }
    }]);
    return r;
  }(larkStandardFormatManager.LarkFormatManager);
  objectPropertySetter.setObjectProperty(m, "standardFormat", textFormatConstants.textFormatTypes.atUser);
  require.d(exports, {
    AtUserFormatManager: function () {
      return m;
    }
  });
}