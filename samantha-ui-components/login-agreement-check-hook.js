// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'useLoginAgreement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 827989
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var loginAgreementTextFormatter = require("login-agreement-text-formatter") /*id: 134341*/;
  var agreementModalCssClasses = require("agreement-modal-css-classes") /*id: 621711*/;
  let _ = e => {
    let {
      brandName: n,
      privacyPolicyLink: i,
      termsOfServiceLink: t,
      accountTermsOfServiceLink: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(loginAgreementTextFormatter.renderAgreementText, {
      className: agreementModalCssClasses.agreementModalClasses["modal-text"],
      replaceTextClassName: agreementModalCssClasses.agreementModalClasses["modal-text-link"],
      brandName: n,
      privacyPolicyLink: i,
      termsOfServiceLink: t,
      accountTermsOfServiceLink: o
    });
  };
  let u = reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#06F",
      fillRule: "evenodd",
      d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m2-16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-5 3.75a.75.75 0 0 1 .75-.75h2.75a1 1 0 0 1 1 1v5.5h.75a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h.75v-5h-.75a.75.75 0 0 1-.75-.75",
      clipRule: "evenodd"
    })
  }), {
    className: agreementModalCssClasses.agreementModalClasses["modal-icon"]
  });
  let h = false;
  let m = e => {
    let {
      agreementProps: n,
      className: i
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let [l, d] = reactCoreLibraryReexport.useState(() => h);
    let m = e => {
      d(e);
      h = true;
    };
    return {
      agreementChecked: l,
      setAgreementChecked: m,
      handleCheckUserAgreement: () => new Promise(e => {
        if (l) {
          return e(true);
        }
        modalDialogComponent.Modal.confirm({
          className: a("agreement-modal-Kbs01i", i),
          title: o("log_in_tos_confirmation_title"),
          zIndex: 1020,
          content: reactJsxRuntimeCoreReexport.jsx(_, {
            ...n
          }),
          cancelText: o("log_in_tos_confirmation_disagree"),
          okText: o("log_in_tos_confirmation_agree"),
          icon: u,
          centered: true,
          style: {
            maxWidth: "calc(100% - 32px)",
            width: 400
          },
          okButtonProps: {
            autoFocus: true,
            className: "ok-button-fsiEBp",
            "data-testid": "login_privacy_dialog_confirm_button"
          },
          cancelButtonProps: {
            autoFocus: false,
            className: "cancel-button-cUW6cA",
            "data-testid": "login_privacy_dialog_cancel_button"
          },
          onOk: () => {
            m(true);
            e(true);
          },
          onCancel: () => e(false)
        });
      })
    };
  };
  require.d(exports, {
    useLoginAgreement: function () {
      return m;
    }
  });
}