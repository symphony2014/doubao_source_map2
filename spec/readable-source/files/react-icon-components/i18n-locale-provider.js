// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'I18nLocaleProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
 * chunk file: 29028.eed859d0.js
 * chunkId: 29028
 * moduleId: 692994
 */
module.exports = function (module, exports, require) {
  var asyncToGeneratorHelper = require("async-to-generator-helper"); /*id: 409129*/
  var classCallCheckUtil = require("class-call-check-util"); /*id: 822439*/
  var classPropertyUtil = require("class-property-util"); /*id: 801584*/
  var possibleConstructorReturn = require("possible-constructor-return"); /*id: 233617*/
  var getPrototypeOfHelper = require("get-prototype-of-helper"); /*id: 109717*/
  var setPrototypeInheritance = require("set-prototype-inheritance"); /*id: 805158*/
  var objectPropertySetter = require("object-property-setter"); /*id: 84841*/
  var reactCoreLibraryReexport = require("react-core-library-reexport"); /*id: 634663*/
  var i18nLocaleContextProvider = require("i18n-locale-context-provider"); /*id: 194449*/
  var componentUpdateChecker = require("component-update-checker"); /*id: 979750*/
  var m = componentUpdateChecker;
  var i18nLocaleMap = require("i18n-locale-map"); /*id: 598458*/
  function v(e, r) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      if (r) {
        l = l.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        });
      }
      o.push.apply(o, l);
    }
    return o;
  }
  function _(e) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r] ?? {};
      if (r % 2) {
        v(Object(o), true).forEach(function (r) {
          objectPropertySetter.setObjectProperty(e, r, o[r]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(o));
      } else {
        v(Object(o)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
        });
      }
    }
    return e;
  }
  function g() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (g = function () {
      return !!e;
    })();
  }
  var b = function (e) {
    var r;
    var o;
    function h() {
      classCallCheckUtil.classCallCheck(this, h);
      var e;
      var r;
      var o;
      var a;
      var s = arguments.length;
      var u = Array(s);
      var m = 0;
      for (; m < s; m++) {
        u[m] = arguments[m];
      }
      r = h;
      o = [...u];
      r = getPrototypeOfHelper.getPrototypeOf(r);
      e = possibleConstructorReturn.constructorReturn(this, g() ? Reflect.construct(r, o || [], getPrototypeOfHelper.getPrototypeOf(this).constructor) : r.apply(this, o));
      objectPropertySetter.setObjectProperty(e, "state", {
        locale: i18nLocaleContextProvider.localeConfig.locale,
        lang: i18nLocaleContextProvider.localeConfig.lang,
        l2r: i18nLocaleContextProvider.localeConfig.l2r,
        theme: i18nLocaleContextProvider.localeConfig.theme,
        is12Hour: i18nLocaleContextProvider.localeConfig.is12Hour,
        timezone: "",
        isInnerRerender: false
      });
      objectPropertySetter.setObjectProperty(e, "update", (a = async function (r) {
        var {
          onUpdate: o
        } = e.props;
        if (o) {
          var l = await o(r);
          e.setState(_(_(_({}, r), l), {}, {
            isInnerRerender: true
          }));
        }
        e.setState(_(_({}, r), {}, {
          isInnerRerender: true
        }));
      }, function (e) {
        return a.apply(this, arguments);
      }));
      return e;
    }
    setPrototypeInheritance.setInheritance(h, e);
    return classPropertyUtil.defineClassProps(h, [{
      key: "componentDidMount",
      value: (r = async function () {
        var {
          locale: e,
          theme: r
        } = this.state;
        document.body.classList.add(`larkc-${e}`);
        if (r) {
          document.body.classList.add(`larkc-${r}`);
        }
        this.autoUpdate();
      }, function () {
        return r.apply(this, arguments);
      })
    }, {
      key: "componentDidUpdate",
      value: function () {
        this.autoUpdate();
      }
    }, {
      key: "autoUpdate",
      value: (o = async function () {
        var {
          locale: e,
          theme: r,
          lang: o,
          l2r: l,
          is12Hour: n,
          timezone: a
        } = this.state;
        var {
          onUpdate: i
        } = this.props;
        if (!o && i) {
          var c = await i({
            locale: e,
            theme: r,
            l2r: l,
            is12Hour: n,
            timezone: a
          });
          this.setState(_(_({}, c), {}, {
            isInnerRerender: true
          }));
        }
      }, function () {
        return o.apply(this, arguments);
      })
    }, {
      key: "shouldComponentUpdate",
      value: function (e, r) {
        var o = m(this, e, r);
        if (o) {
          var {
            locale: l,
            theme: n
          } = this.state;
          if (l !== r.locale) {
            document.body.classList.remove(`larkc-${l}`);
            document.body.classList.add(`larkc-${r.locale}`);
          }
          if (n !== r.theme) {
            if (n) {
              document.body.classList.remove(`larkc-${n}`);
            }
            if (r.theme) {
              document.body.classList.add(`larkc-${r.theme}`);
            }
          }
        }
        return o;
      }
    }, {
      key: "render",
      value: function () {
        var {
          children: e
        } = this.props;
        var {
          locale: r,
          lang: o,
          l2r: l,
          theme: n,
          is12Hour: a,
          timezone: i
        } = this.state;
        if (o) {
          return reactCoreLibraryReexport.createElement(i18nLocaleContextProvider.localeContext.Provider, {
            value: {
              locale: r || i18nLocaleMap.localeMap.enUS,
              lang: o,
              l2r: l,
              theme: n,
              is12Hour: a,
              timezone: i,
              update: this.update
            }
          }, e);
        } else {
          return null;
        }
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, r) {
        if (r && r.isInnerRerender) {
          var o = Object.assign({}, r);
          o.isInnerRerender = false;
          return o;
        }
        var l = r && r.locale === e.locale && r.lang !== i18nLocaleContextProvider.localeConfig.lang;
        return {
          locale: e.locale,
          lang: l ? r.lang : e.lang,
          l2r: e.l2r,
          theme: e.theme,
          is12Hour: e.is12Hour,
          timezone: e.timezone,
          isInnerRerender: false
        };
      }
    }]);
  }(reactCoreLibraryReexport.Component);
  require.d(exports, {
    I18nLocaleProvider: function () {
      return b;
    }
  });
}