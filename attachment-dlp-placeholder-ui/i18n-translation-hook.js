// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useTranslation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46126.e68e9438.js
         * chunkId: 46126
         * moduleId: 411320
         */
module.exports = function (module, exports, require) {
  let r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nProviderWrapper = require("i18n-provider-wrapper") /*id: 277347*/;
  var localeThemeContext = require("locale-theme-context") /*id: 174017*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var intlMessageFormat = require("intl-message-format") /*id: 646430*/;
  try {
    r = localStorage.getItem("popup_I18nKey") === "1";
  } catch (e) {
    r = false;
  }
  let l = (e, n) => n.length === 0 ? e : e.replace(/\${([0-9])}/g, (e, t) => String(n[Number(t) - 1]));
  function d(e, n, ...t) {
    if (r) {
      return n;
    }
    let o = {};
    let i = [];
    t.forEach(e => {
      if (isStringTypeCheck.isString(e) || isNumberUtil.isNumber(e)) {
        i.push(e);
      }
      if (isObjectOrFunction_1_1.isObjectOrFunction(e)) {
        Object.assign(o, e);
      }
    });
    if (!e || !n) {
      return n;
    }
    let a = e[n];
    if (!a) {
      return n;
    }
    let C = l(a, i);
    if (Object.keys(o).length > 0) {
      try {
        C = C.replace(/{{(\w+)}}/g, (e, n) => `{${n}}`);
        let e = new intlMessageFormat.IntlMessageFormat(C).format(o);
        C = isStringTypeCheck.isString(e) ? e : C;
      } catch (e) {}
    }
    return C;
  }
  function C() {
    let n = reactCoreLibraryReexport.useContext(i18nProviderWrapper.I18nContext);
    let {
      langMap: t
    } = n;
    let r = reactCoreLibraryReexport.useContext(localeThemeContext.ThemeContext);
    t ||= n.localesMaps?.[r.locale];
    return reactCoreLibraryReexport.useCallback(d.bind(null, t), [t]);
  }
  require.d(exports, {
    useTranslation: function () {
      return C;
    }
  });
}