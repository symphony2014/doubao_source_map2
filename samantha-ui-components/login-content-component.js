// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'LoginContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 791815
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var loginAuthComponent = require("login-auth-component") /*id: 703501*/;
  var phoneCodeVerifyPanel = require("phone-code-verify-panel") /*id: 690057*/;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var authFlowConstants = require("auth-flow-constants") /*id: 199931*/;
  let _ = () => ({
    pageType: authFlowConstants.authFlowConstants.LOGIN
  });
  let u = () => reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(_));
  let h = function () {
    var e = arguments.length;
    var n = Array(e);
    var i = 0;
    for (; i < e; i++) {
      n[i] = arguments[i];
    }
    let {
      _useLoginPanelStore: t
    } = h.prototype;
    if (!t) {
      (function () {
        let {
          _useLoginPanelStore: e
        } = h.prototype || {};
        if (!e) {
          let e = u();
          Object.setPrototypeOf(h.prototype, e);
          Object.defineProperties(h, {
            ...Object.getOwnPropertyDescriptors(e)
          });
          h.prototype._useLoginPanelStore = e;
        }
      })();
    }
    let {
      _useLoginPanelStore: o
    } = h.prototype;
    if (o) {
      return o(...n);
    }
    throw Error("useLoginPanelStore is not initialized");
  };
  let m = e => {
    h.setState({
      pageType: e
    });
  };
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      brandName: n,
      privacyPolicyLink: i,
      termsOfServiceLink: s,
      accountTermsOfServiceLink: l,
      thirdLoginKeyList: _,
      trackMeta: u,
      thirdNavigatePath: y,
      thirdRedirectMethod: f,
      thirdForceRedirect: v,
      customThirdOpenRedirectFn: w,
      titleKey: A,
      hideTitle: E,
      logoutLoginRoute: b,
      logoutNavigator: k,
      onAgeGateCancel: S,
      onLoginSuccess: N,
      loginContentChildren: x,
      pageType: R,
      onPageTypeChange: C,
      description: j,
      children: L,
      enableQrcode: T,
      className: I,
      thirdLoginClassName: O,
      agreementClassName: P,
      needDarkMode: M,
      qrCodeRightClassName: B,
      qrSwitchClassName: F,
      resetShowQRCodeWidth: D
    } = e;
    let W = e => {
      if (N != null) {
        N(e);
      }
    };
    let {
      pageType: G
    } = h();
    let [U, Z] = reactCoreLibraryReexport.useState();
    let [V, z] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(R)) {
        m(R);
      }
    }, [R]);
    reactCoreLibraryReexport.useEffect(() => {
      if (C != null) {
        C(G);
      }
    }, [G]);
    let K = e => {
      let {
        account: n,
        data: i
      } = e;
      Z(n);
      z(i);
      m(authFlowConstants.authFlowConstants.CODE);
    };
    let H = async () => {
      await flowAccountModule.getFlowAccount().passportApi.logout({
        navigate: k,
        reason: "cancel_login",
        trackMeta: {
          from: "login_content_use_login"
        },
        loginRoute: b
      });
      m(authFlowConstants.authFlowConstants.LOGIN);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        m(authFlowConstants.authFlowConstants.NEUTRAL_AGE_GATE);
      };
      flowAccountModule.getFlowAccount().ageGate.on("start_check", e);
      return () => {
        flowAccountModule.getFlowAccount().ageGate.off("start_check", e);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => () => {
      m(authFlowConstants.authFlowConstants.LOGIN);
    }, []);
    let J = G === authFlowConstants.authFlowConstants.LOGIN;
    let Q = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [J && reactJsxRuntimeCoreReexport.jsx(loginAuthComponent.LoginWindow, {
        className: I,
        thirdLoginClassName: O,
        thirdNavigatePath: infraUtilFunctions.invokeIfFunction(y),
        thirdRedirectMethod: f,
        thirdForceRedirect: v,
        customThirdOpenRedirectFn: w,
        onCancelLogin: H,
        onAgeGateCancel: S,
        onLoginSuccess: W,
        onSendCodeSuccess: K,
        trackMeta: u,
        brandName: n,
        privacyPolicyLink: i,
        termsOfServiceLink: s,
        accountTermsOfServiceLink: l,
        availablePlatforms: _,
        description: j,
        titleKey: A,
        hideTitle: E,
        enableQrcode: T,
        agreementClassName: P,
        needDarkMode: M,
        qrCodeRightClassName: B,
        qrSwitchClassName: F,
        resetShowQRCodeWidth: D,
        children: x
      }), G === authFlowConstants.authFlowConstants.CODE && V && U && reactJsxRuntimeCoreReexport.jsx(phoneCodeVerifyPanel.PhoneVerifyPanel, {
        sendCodeData: V,
        account: U,
        onAgeGateCancel: S,
        onLoginSuccess: W,
        onCancelLogin: H,
        trackMeta: u
      }), false]
    }), [G, V, U, _]);
    return reactCoreLibraryReexport.useMemo(() => L ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: L(Q)
    }) : Q, [L, Q]);
  };
  require.d(exports, {
    LoginContent: function () {
      return y;
    }
  });
}