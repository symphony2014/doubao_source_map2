// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 's' to 'pptTemplateManager'
// - Resolved require(477087) to 'ppt-template-manager'
// - Renamed variable 'l' to 'semiProgressComponent'
// - Resolved require(821198) to 'semi-progress-component'
// - Renamed variable 'u' to 'semiButtonWrapperComponent'
// - Resolved require(654274) to 'semi-button-wrapper-component'
// - Renamed variable 'c' to 'rightOutlinedIcon'
// - Resolved require(831095) to 'right-outlined-icon'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'U' to 'RightOutlinedIcon' (module 831095)
// - Updated imported property 'Z' to 'Progress' (module 821198)
// - Updated imported property 'Z' to 'SemiButtonWrapper' (module 654274)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'GL' to 'superTaskStore' (module 654619)
// - Updated imported property 'A' to 'pptTemplateManager' (module 477087)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list.169e7e3e.js
         * chunkId: 66228
         * moduleId: 213563
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var pptTemplateManager = require("ppt-template-manager") /*id: 477087*/;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = () => reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
    className: "icon-tUW73S"
  });
  let p = e => {
    let {
      totalTime: t,
      onComplete: n
    } = e;
    let i = reactCoreLibraryReexport.useMemo(() => Date.now(), []);
    let [o, a] = reactCoreLibraryReexport.useState(100);
    reactCoreLibraryReexport.useEffect(() => {
      if (t < 0) {
        return;
      }
      let e = setInterval(() => {
        let r = (Date.now() - i) / t * 100;
        a(100 - Math.min(r, 100));
        if (r > 100) {
          if (n != null) {
            n();
          }
          clearInterval(e);
        }
      }, 1000);
      return () => {
        clearInterval(e);
      };
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
      percent: o,
      className: "circleProgress-SQvhUI",
      showInfo: true,
      width: 24,
      type: "circle",
      orbitStroke: "var(--dbx-static-white-30, rgba(255, 255, 255, 0.3))",
      strokeWidth: 2,
      stroke: "var(--dbx-static-white, rgba(255, 255, 255, 1))",
      format: f
    });
  };
  let _ = e => {
    let {
      textContent: t,
      clickLoadingTimeout: n = 60000,
      autoCompleteTime: i = -1,
      onClick: o
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState(false);
    let [l, f] = reactCoreLibraryReexport.useState(true);
    reactCoreLibraryReexport.useEffect(() => {
      f(i > 0);
    }, [i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        let e = setTimeout(() => s(false), n);
        return () => clearTimeout(e);
      }
    }, [a]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "confirmTemplateBtnContainer-IBNtnj",
      children: reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
        loading: a,
        className: "btn-Kks2S7",
        icon: l ? reactJsxRuntimeCoreReexport.jsx(p, {
          totalTime: i,
          onComplete: o
        }) : reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
          className: "size-14"
        }),
        iconPosition: "right",
        onClick: () => {
          f(false);
          s(true);
          if (o != null) {
            o();
          }
        },
        children: t
      })
    });
  };
  let h = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      currentChatViewConfig: n
    } = chatStoreManager.getStore("chatViewCoreStore").getState();
    let {
      isSuperTaskEnableByConvId: l
    } = superTaskStore.superTaskStore(e => ({
      isSuperTaskEnableByConvId: e.isSuperTaskEnableByConvId,
      taskModeValue: e.taskModeValue
    }));
    let u = reactCoreLibraryReexport.useMemo(() => (n == null ? undefined : n.chatId) || "", [n == null ? undefined : n.chatId]);
    let [c, f] = reactCoreLibraryReexport.useState(pptTemplateManager.pptTemplateManager.confirmBtnVisible(u));
    let [p, h] = reactCoreLibraryReexport.useState(60000);
    let [m, g] = reactCoreLibraryReexport.useState(t("agent_PPT_btn_confirmLengthTemplate", "确认长度和模板"));
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        f(!!(e == null ? undefined : e.visible));
        g((e == null ? undefined : e.textContent) || "");
      };
      pptTemplateManager.pptTemplateManager.addToggleConfirmBtnListener(u, e);
      return () => {
        pptTemplateManager.pptTemplateManager.removeToggleConfirmBtnListener(u, e);
      };
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      pptTemplateManager.pptTemplateManager.addSelecteChangeListener(u, () => {
        h(-1);
      });
      return () => {
        pptTemplateManager.pptTemplateManager.removeSelecteChangeListener(u);
      };
    }, [u]);
    let v = reactCoreLibraryReexport.useCallback(() => {
      pptTemplateManager.pptTemplateManager.onTemplateBtnConfirm(u);
    }, [u]);
    if (l(u) && c) {
      return reactJsxRuntimeCoreReexport.jsx(_, {
        textContent: m,
        onClick: v,
        autoCompleteTime: p
      });
    } else {
      return null;
    }
  };
  class m {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTTemplateBottomBtnPlugin: function () {
      return m;
    }
  });
}