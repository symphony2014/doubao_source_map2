// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useI18n'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 895147
         */
module.exports = function (module, exports, require) {
  let a;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nContextProvider = require("i18n-context-provider") /*id: 894325*/;
  var localeThemeProvider = require("locale-theme-provider") /*id: 292816*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var intlMessageFormat = require("intl-message-format") /*id: 646430*/;
  try {
    a = localStorage.getItem("popup_I18nKey") === "1";
  } catch (e) {
    a = false;
  }
  let l = (e, i) => i.length === 0 ? e : e.replace(/\${([0-9])}/g, (e, n) => String(i[Number(n) - 1]));
  function c(e, i, ...n) {
    if (a) {
      return i;
    }
    let f = {};
    let s = [];
    n.forEach(e => {
      if (isStringTypeCheck.isString(e) || isNumberUtil.isNumber(e)) {
        s.push(e);
      }
      if (isObjectOrFunction_1_1.isObjectOrFunction(e)) {
        Object.assign(f, e);
      }
    });
    if (!e || !i) {
      return i;
    }
    let o = e[i];
    if (!o) {
      return i;
    }
    let v = l(o, s);
    if (Object.keys(f).length > 0) {
      try {
        v = v.replace(/{{(\w+)}}/g, (e, i) => `{${i}}`);
        let e = new intlMessageFormat.IntlMessageFormat(v).format(f);
        v = isStringTypeCheck.isString(e) ? e : v;
      } catch (e) {}
    }
    return v;
  }
  function v() {
    let i = reactCoreLibraryReexport.useContext(i18nContextProvider.i18nContext);
    let {
      langMap: n
    } = i;
    let a = reactCoreLibraryReexport.useContext(localeThemeProvider.localeThemeContext);
    n ||= i.localesMaps?.[a.locale];
    return reactCoreLibraryReexport.useCallback(c.bind(null, n), [n]);
  }
  require.d(exports, {
    useI18n: function () {
      return v;
    }
  });
}