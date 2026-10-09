// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'PhoneInputForm'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 77545
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlAwareInputWrapper = require("rtl-aware-input-wrapper") /*id: 91343*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var countryCodeSelectComponent = require("country-code-select-component") /*id: 336219*/;
  var _ = {
    "input-area": "input-area-w4RlPh",
    input: "input-e4B4M_",
    disabled: "disabled-KnKXA3",
    "mobile-input-area": "mobile-input-area-j10LB2"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    var n;
    let {
      title: i,
      desc: o,
      className: h,
      containerClassName: m,
      buttonStyle: p,
      loading: g,
      disabled: y,
      defaultMobilePhone: f,
      defaultRegionCode: v,
      autoFocus: w,
      onInputFocus: A,
      onNextClick: E,
      onFirstInput: b,
      onlyCNCode: k,
      btnClassName: S,
      agreementNode: N
    } = e;
    let x = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        var e;
        if ((e = x.current) !== null && e !== undefined) {
          e.focus();
        }
        let n = () => {
          var e;
          if ((e = x.current) !== null && e !== undefined) {
            e.focus();
          }
        };
        window.addEventListener("visibilitychange", n);
        return () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    }, []);
    let [R, C] = reactCoreLibraryReexport.useState(v);
    let [j, L] = reactCoreLibraryReexport.useState(f);
    let T = R && j && `${R} ${j}`;
    let I = () => {
      if (T) {
        return E(T);
      }
    };
    let O = reactCoreLibraryReexport.useRef(false);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: m,
      children: [i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mb-8 text-center text-s-color-text-secondary s-font-h2",
        children: i
      }) : null, o ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mb-20 text-center text-s-color-text-quaternary s-font-xs",
        children: o
      }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(_["input-area"], _["mobile-input-area"], y && _.disabled, h),
        children: [reactJsxRuntimeCoreReexport.jsx(countryCodeSelectComponent.CountryCodeSelect, {
          value: R,
          onChange: C,
          onlyCNCode: k,
          isEnglish: !((n = i18nextLanguageGetter.getCurrentLanguage()) === null || n === undefined ? undefined : n.includes("zh"))
        }), reactJsxRuntimeCoreReexport.jsx(rtlAwareInputWrapper.RTLInputComponent, {
          ref: x,
          className: _.input,
          size: "large",
          placeholder: i18nTranslationUtils.i18nextTranslate("phone_number_placeholder"),
          value: j,
          onChange: e => {
            if (e.length === 0 || /^\d+$/.test(e)) {
              L(e);
            }
          },
          onEnterPress: I,
          onFocus: A,
          inputMode: "decimal",
          disabled: y,
          onlyAlighRightWhenRTL: true,
          onInput: () => {
            if (!O.current) {
              if (b != null) {
                b();
              }
              O.current = true;
            }
          },
          "data-testid": "login_phone_number_input"
        })]
      }), N, reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        className: a("w-full", S),
        style: p,
        type: "primary",
        size: "large",
        disabled: !T || y,
        loading: g,
        onClick: I,
        "data-testid": "login_next_button",
        children: i18nTranslationUtils.i18nextTranslate("next")
      })]
    });
  };
  require.d(exports, {
    PhoneInputForm: function () {
      return h;
    }
  });
}