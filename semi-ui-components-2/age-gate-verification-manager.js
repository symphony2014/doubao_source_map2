// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'AgeGateManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 974394
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var canvasShareTypes = require("canvas-share-types") /*id: 546605*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var buttonComponent = require("button-component") /*id: 899242*/;
  var eventEmitterWrapper = require("event-emitter-wrapper") /*id: 126875*/;
  var errorUtilsAndEnums = require("error-utils-and-enums") /*id: 352461*/;
  var ageGateVerification = require("age-gate-verification") /*id: 903017*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  require("react-core-library-reexport") /*id: 634663*/;
  let g = e => reactJsxRuntimeCoreReexport.jsx("svg", {
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
  });
  class m extends eventEmitterWrapper.EventEmitterWrapper {
    async getAgeGateCheck(e) {
      if (!e && this.ageGateCheckData !== null) {
        return this.ageGateCheckData;
      }
      try {
        let {
          data: e = {}
        } = await apiServicesCollection.SafetyApiService.AgeGateCheck({
          scene: canvasShareTypes.ActionType.Launch
        });
        this.ageGateCheckData = e;
        return e;
      } catch (e) {
        throw new errorUtilsAndEnums.SysError(e instanceof Error ? e.message : String(e));
      }
    }
    clearAgeGateCheckData() {
      this.ageGateCheckData = null;
    }
    triggerPass() {
      this.emit("pass");
    }
    triggerFail() {
      this.emit("fail");
    }
    async alertNeutralAgeGate(e, t, r) {
      return new Promise((o, s) => {
        let a = emptyExportFunction.emptyFunction;
        let l = () => {
          g();
          a();
          o();
          this.confirmAgeGateSuccess(t);
        };
        let u = async e => {
          if (e != null) {
            e();
          }
          g();
          a();
          await this.confirmAgeGateFail(0, t, r);
          s(new errorUtilsAndEnums.SysError());
        };
        let d = () => {
          teaAnalyticsEventTracker.trackEvent("age_verification_window_click", {
            type: t,
            click_from: "back"
          }, {
            key: "",
            withSlardar: true
          });
          this.confirmAgeGateCancel(t);
          g();
          a();
          s(new errorUtilsAndEnums.AppError());
        };
        let g = () => {
          this.off("pass", l);
          this.off("fail", u);
        };
        this.emit("start_check");
        this.on("pass", l);
        this.on("fail", u);
        if (e === errorUtilsAndEnums.UiTypeEnum.dialog) {
          var m;
          a = modalDialogComponent.Modal.info({
            zIndex: 1020,
            closable: false,
            icon: null,
            centered: true,
            onCancel: () => d(),
            content: reactJsxRuntimeCoreReexport.jsx(ageGateVerification.AgeGate, {
              onPass: l,
              onFail: u
            }),
            closeOnEsc: false,
            footer: null
          }).destroy;
          if (r != null && (m = r.getDestroyFnOfConfirmModal) !== null && m !== undefined) {
            m.call(r, a);
          }
        }
      });
    }
    confirmAgeGateSuccess(e) {
      teaAnalyticsEventTracker.trackEvent("age_verification_result", {
        type: e,
        success: 1
      }, {
        key: "",
        withSlardar: true
      });
    }
    confirmAgeGateCancel(e) {
      teaAnalyticsEventTracker.trackEvent("age_verification_result", {
        type: e,
        success: -1
      }, {
        key: "",
        withSlardar: true
      });
    }
    confirmAgeGateFail(e, t, r) {
      teaAnalyticsEventTracker.trackEvent("age_verification_result", {
        type: t,
        success: 0
      }, {
        key: "",
        withSlardar: true
      });
      if (e) {
        teaAnalyticsEventTracker.trackEvent("age_block_login_freeze_window_show", {
          type: t
        }, {
          key: "",
          withSlardar: true
        });
      } else {
        teaAnalyticsEventTracker.trackEvent("age_block_login_window_show", {
          type: t
        }, {
          key: "",
          withSlardar: true
        });
      }
      return new Promise(t => {
        var n;
        let {
          destroy: i
        } = modalDialogComponent.Modal.warning({
          closable: false,
          closeOnEsc: false,
          centered: true,
          maskClosable: false,
          title: e ? i18nTranslationUtils.i18nextTranslate("age_gate_retry", {
            postProcess: "sprintf",
            sprintf: [errorUtilsAndEnums.secondsToMinutes(e)]
          }) : i18nTranslationUtils.i18nextTranslate("dolaPC_age_gate_reject"),
          footer: reactJsxRuntimeCoreReexport.jsx(buttonComponent.Button, {
            loading: false,
            onClick: () => {
              var e;
              i();
              t();
              if (r != null && (e = r.onFailedModalClose) !== null && e !== undefined) {
                e.call(r);
              }
            },
            children: i18nTranslationUtils.i18nextTranslate("age_gate_next")
          })
        });
        if (r != null && (n = r.getDestroyFnOfFailedModal) !== null && n !== undefined) {
          n.call(r, i);
        }
      });
    }
    alertNonNeutralAgeGate(e, t) {
      return new Promise((r, n) => {
        var s;
        let {
          destroy: a
        } = modalDialogComponent.Modal.confirm({
          zIndex: 1020,
          title: i18nTranslationUtils.i18nextTranslate("age_gate_title"),
          content: i18nTranslationUtils.i18nextTranslate("age_gate_text", {
            postProcess: "sprintf",
            sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
          }),
          cancelText: i18nTranslationUtils.i18nextTranslate("age_gate_no"),
          okText: i18nTranslationUtils.i18nextTranslate("age_gate_confirm"),
          icon: reactJsxRuntimeCoreReexport.jsx(g, {
            style: {
              height: 24,
              width: 24
            }
          }),
          centered: true,
          onOk: () => {
            teaAnalyticsEventTracker.trackEvent("age_verification_window_click", {
              click_from: "yes_18",
              type: e
            }, {
              key: "",
              withSlardar: true
            });
            this.confirmAgeGateSuccess(e);
            r(true);
          },
          onCancel: () => {
            modalDialogComponent.Modal.destroyAll();
            teaAnalyticsEventTracker.trackEvent("age_verification_window_click", {
              click_from: "white_18",
              type: e
            }, {
              key: "",
              withSlardar: true
            });
            this.confirmAgeGateCancel(e);
            n(new errorUtilsAndEnums.AppError());
          },
          cancelButtonProps: {
            onClick: async () => {
              teaAnalyticsEventTracker.trackEvent("age_verification_window_click", {
                click_from: "no_18",
                type: e
              }, {
                key: "",
                withSlardar: true
              });
              modalDialogComponent.Modal.destroyAll();
              await this.confirmAgeGateFail(0, e, {
                ...t,
                onFailedModalClose: () => {
                  var e;
                  if (t != null && (e = t.onFailedModalClose) !== null && e !== undefined) {
                    e.call(t);
                  }
                  return n(new errorUtilsAndEnums.SysError());
                }
              });
            }
          }
        });
        if (t != null && (s = t.getDestroyFnOfConfirmModal) !== null && s !== undefined) {
          s.call(t, a);
        }
      }).then(() => {
        let e = {
          pass: true,
          scene: canvasShareTypes.ActionType.Launch
        };
        apiServicesCollection.SafetyApiService.AgeGateReport(e).catch(emptyExportFunction.emptyFunction);
      }).catch(e => {
        if (errorUtilsAndEnums.isSysError(e)) {
          let e = {
            pass: false,
            scene: canvasShareTypes.ActionType.Launch
          };
          apiServicesCollection.SafetyApiService.AgeGateReport(e).catch(emptyExportFunction.emptyFunction);
        }
        return Promise.reject(e);
      });
    }
    async confirmAgeGate(e) {
      let {
        scene: t,
        platform: r,
        ageGateOptions: n,
        checkWithoutCache: o
      } = e ?? {};
      teaAnalyticsEventTracker.trackEvent("login_status", {
        status: "age_gate_validation"
      }, {
        key: "",
        withSlardar: true
      });
      let s = t ?? errorUtilsAndEnums.UiTypeEnum.dialog;
      storageWrapperWithFallback.LocalStorageWrapper.setItem("platform", r || "");
      let c = await this.getAgeGateCheck(o == null || o);
      if ((c == null ? undefined : c.decision) === canvasShareTypes.DisplayPolicy.Forbid) {
        await this.confirmAgeGateFail(c == null ? undefined : c.cold_down_remain_minutes, r, n);
        throw new errorUtilsAndEnums.SysError("age gate if forbid");
      }
      if ((c == null ? undefined : c.decision) === canvasShareTypes.DisplayPolicy.Pass) {
        this.confirmAgeGateSuccess(r);
        return;
      }
      if ((c == null ? undefined : c.type) === canvasShareTypes.SentimentType.Neutral) {
        teaAnalyticsEventTracker.trackEvent("age_verification_window_show", {
          type: r,
          age_gate: "neutral"
        }, {
          key: "",
          withSlardar: true
        });
        return this.alertNeutralAgeGate(s, r, n);
      } else {
        teaAnalyticsEventTracker.trackEvent("age_verification_window_show", {
          type: r,
          age_gate: "non_neutral"
        }, {
          key: "",
          withSlardar: true
        });
        return this.alertNonNeutralAgeGate(r, n);
      }
    }
    constructor(...e) {
      var t;
      var r;
      super(...e);
      if ((t = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "ageGateCheckData", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, t, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = null;
      }
    }
  }
  require.d(exports, {
    AgeGateManager: function () {
      return m;
    }
  });
}