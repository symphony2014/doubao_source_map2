// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FormFieldWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 520727
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var formUxConstants = require("form-ux-constants") /*id: 740990*/;
  var formValidationUtils = require("form-validation-utils") /*id: 921165*/;
  var safeObjectPathUtils = require("safe-object-path-utils") /*id: 881861*/;
  var isPromiseUtil = require("is-promise-util") /*id: 688982*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var useFormState = require("use-form-state") /*id: 81618*/;
  var formContextDefinitions = require("form-context-definitions") /*id: 139790*/;
  function f(e) {
    let t = reactCoreLibraryReexport.useRef();
    let [n, o] = reactCoreLibraryReexport.useState(e);
    t.current = n;
    return [n, e => {
      t.current = e;
      o(e);
    }, () => t.current];
  }
  var formFieldFeedback = require("form-field-feedback") /*id: 446866*/;
  var reactElementUtils = require("react-element-utils") /*id: 105208*/;
  var formLabelComponent = require("form-label-component") /*id: 455464*/;
  var reactGridColComponent = require("react-grid-col-component") /*id: 420189*/;
  let b = formUxConstants.formPrefixConfig.PREFIX;
  let y = typeof window != "undefined" ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  function _(e, t) {
    let n = (n, o) => {
      let a;
      let {
        field: _,
        label: x,
        labelPosition: w,
        labelWidth: k,
        labelAlign: E,
        labelCol: j,
        wrapperCol: C,
        noLabel: S,
        noErrorMessage: T,
        isInInputGroup: N,
        initValue: R,
        validate: O,
        validateStatus: I,
        trigger: $,
        allowEmptyString: Z,
        allowEmpty: M,
        emptyValue: P,
        rules: F,
        required: A,
        keepState: z,
        transform: q,
        name: B,
        fieldClassName: L,
        fieldStyle: D,
        convert: W,
        stopValidateWithError: V,
        helpText: H,
        extraText: U,
        extraTextPosition: X,
        pure: K,
        id: J,
        rest: G
      } = formValidationUtils.processFieldProps(n);
      let {
        options: Y,
        shouldInject: Q
      } = formValidationUtils.getFieldConfig(t, n);
      pageNoopHandler.noopHandler(_ === undefined && Y.shouldInject, "[Semi Form]: 'field' is required, please check your props of Field Component");
      if (!Q) {
        return reactCoreLibraryReexport.createElement(e, Object.assign({}, G, {
          ref: o
        }));
      }
      useFormState.useFormState();
      let ee = reactCoreLibraryReexport.useContext(formContextDefinitions.formUpdaterContext);
      if (!ee.getFormProps) {
        pageNoopHandler.noopHandler(true, "[Semi Form]: Field Component must be use inside the Form, please check your dom declaration");
        return null;
      }
      let et = ee.getFormProps(["labelPosition", "labelWidth", "labelAlign", "labelCol", "wrapperCol", "disabled", "showValidateIcon", "extraTextPosition", "stopValidateWithError", "trigger"]);
      let en = w || et.labelPosition;
      let er = k || et.labelWidth;
      let eo = E || et.labelAlign;
      let ei = j || et.labelCol;
      let ea = C || et.wrapperCol;
      let es = X || et.extraTextPosition || "bottom";
      let el = formValidationUtils.resolveUndefined(V, et.stopValidateWithError, false);
      let ec = formValidationUtils.getTriggerList($, et.trigger);
      let ed = _ !== undefined ? ee.getValue(_) : undefined;
      let eu = R !== undefined ? R : ed;
      try {
        if (a = reactCoreLibraryReexport.useContext(formContextDefinitions.formInitContext)) {
          eu = a.shouldUseInitValue && R !== undefined ? R : ed;
        }
      } catch (e) {}
      let [ep, ef, eh] = f(eu);
      let em = ec.includes("mount");
      M = M || ee.getFormProps().allowEmpty;
      let [ev, eg, eb] = f();
      let [ey, e_] = reactCoreLibraryReexport.useState();
      let [ex, ew, ek] = f(0);
      let [eE, ej] = reactCoreLibraryReexport.useState(I);
      let eC = reactCoreLibraryReexport.useRef(F);
      let eS = reactCoreLibraryReexport.useRef(O);
      let eT = reactCoreLibraryReexport.useRef(null);
      let eN = (e, t) => {
        e_(e);
        ee.updateStateTouched(_, e, t);
      };
      let eR = (e, t) => {
        if (e !== eb()) {
          eg(e);
          ee.updateStateError(_, e, t);
          if (formValidationUtils.isEmptyValue(e)) {
            ej("success");
          } else {
            ej("error");
          }
        }
      };
      let eO = (e, t) => {
        ef(e);
        let n = Object.assign(Object.assign({}, t), {
          allowEmpty: M
        });
        ee.updateStateValue(_, e, n);
      };
      let eI = (e, t) => {
        let n = eC.current || [];
        let r = formValidationUtils.createValidator(_, n);
        let o = {
          [_]: e
        };
        let i = new Promise((e, n) => {
          r.validate(o, {
            first: el
          }, (e, t) => {}).then(n => {
            if (eT.current === i) {
              ej("success");
              eR(undefined, t);
              e({});
            }
          }).catch(n => {
            if (eT.current !== i) {
              return;
            }
            let {
              errors: r,
              fields: o
            } = n;
            if (r && o) {
              let n = r.map(e => e.message);
              if (n.length === 1) {
                n = n[0];
              }
              eR(n, t);
              if (!formValidationUtils.isEmptyValue(n)) {
                ej("error");
                e(r);
              }
            } else {
              ej("error");
              eR(n.message, t);
              e(n.message);
              throw n;
            }
          });
        });
        eT.current = i;
        return i;
      };
      let e$ = (e, t, n) => {
        let r = new Promise(o => {
          let i;
          try {
            i = eS.current(e, t);
          } catch (e) {
            i = e;
          }
          if (i === undefined) {
            o({});
            eR(undefined, n);
          } else if (isPromiseUtil.isPromise(i)) {
            i.then(e => {
              if (eT.current === r) {
                if (formValidationUtils.isEmptyValue(e)) {
                  eR(undefined, n);
                  o(null);
                } else {
                  eR(e, n);
                  o(e);
                }
              }
            });
          } else if (formValidationUtils.isEmptyValue(i)) {
            eR(undefined, n);
            o(null);
          } else {
            eR(i, n);
            o(i);
          }
        });
        eT.current = r;
        return r;
      };
      let eZ = (e, t) => {
        let n = e;
        let r = eC.current;
        if (q) {
          n = q(e);
        }
        if (eS.current) {
          return e$(n, ee.getValue(), t);
        } else if (r) {
          return eI(n, t);
        } else {
          return null;
        }
      };
      let eM = function (e, t) {
        let r;
        if (Y.onKeyChangeFnName in n && typeof n[Y.onKeyChangeFnName] == "function") {
          var o = arguments.length;
          var i = Array(o > 2 ? o - 2 : 0);
          var a = 2;
          for (; a < o; a++) {
            i[a - 2] = arguments[a];
          }
          n[Y.onKeyChangeFnName](e, t, ...i);
        }
        r = Y.valuePath ? safeObjectPathUtils.getObjectPath(e, Y.valuePath) : e;
        if (typeof W == "function") {
          r = W(r);
        }
        if (!Z && !M) {
          if (r === P) {
            r = undefined;
          }
        }
        try {
          if (t && t.target && t.target.selectionStart) {
            ew(t.target.selectionStart);
          }
        } catch (e) {}
        eN(true, {
          notNotify: true,
          notUpdate: true
        });
        eO(r);
        if (ec.includes("change")) {
          eZ(r);
        }
      };
      let eP = function () {
        if (n.onBlur) {
          n.onBlur(...arguments);
        }
        if (!ey) {
          eN(true);
        }
        if (ec.includes("blur")) {
          eZ(eh());
        }
      };
      let eF = {
        setValue: eO,
        setTouched: eN,
        setError: eR,
        reset: () => {
          let e = {
            notNotify: true,
            notUpdate: true
          };
          eO(eu !== null ? eu : undefined, e);
          eR(undefined, e);
          eN(undefined, e);
          ej("default");
        },
        validate: eZ
      };
      y(() => {
        eC.current = F;
        eS.current = O;
      }, [F, O]);
      y(() => {
        if (em) {
          eZ(ep);
        }
      }, []);
      y(() => {
        if (_ === undefined) {
          return () => {};
        }
        let e = eh();
        ee.register(_, {
          value: e,
          error: ev,
          touched: ey,
          status: eE
        }, {
          field: _,
          fieldApi: eF,
          keepState: z,
          allowEmpty: M || Z
        });
        return () => {
          ee.unRegister(_);
        };
      }, [_]);
      let eA = J || _;
      let ez = `${eA}-label`;
      let eq = `${eA}-helpText`;
      let eB = `${eA}-extraText`;
      let eL = `${eA}-errormessage`;
      let eD = () => {
        let t = I || eE;
        let n = i(`${b}-field-extra`, {
          [`${b}-field-extra-string`]: typeof U == "string",
          [`${b}-field-extra-middle`]: es === "middle",
          [`${b}-field-extra-bottom`]: es === "bottom"
        });
        let a = U ? reactCoreLibraryReexport.createElement("div", {
          className: n,
          id: eB,
          "x-semi-prop": "extraText"
        }, U) : null;
        let s = Object.assign(Object.assign({
          id: eA,
          disabled: et.disabled
        }, G), {
          ref: o,
          onBlur: eP,
          [Y.onKeyChangeFnName]: eM,
          [Y.valueKey]: ep,
          validateStatus: t,
          "aria-required": A,
          "aria-labelledby": ez
        });
        if (B) {
          s.name = B;
        }
        if (H) {
          s["aria-describedby"] = U ? `${eq} ${eB}` : eq;
        }
        if (U) {
          s["aria-describedby"] = H ? `${eq} ${eB}` : eB;
        }
        if (eE === "error") {
          s["aria-errormessage"] = eL;
          s["aria-invalid"] = true;
        }
        let l = i({
          [`${b}-field`]: true,
          [`${b}-field-${B}`]: !!B,
          [L]: !!L
        });
        let c = i({
          [`${b}-field-main`]: true
        });
        if (en === "inset" && !S) {
          s.insetLabel = x || _;
          s.insetLabelId = ez;
          if (typeof x == "object" && !reactElementUtils.isValidElement(x)) {
            s.insetLabel = x.text;
            s.insetLabelId = ez;
          }
        }
        let d = reactCoreLibraryReexport.createElement(e, Object.assign({}, s));
        if (N) {
          return d;
        }
        if (K) {
          let t = i(G.className, {
            [`${b}-field-pure`]: true,
            [`${b}-field-${B}`]: !!B,
            [L]: !!L
          });
          s.className = t;
          return reactCoreLibraryReexport.createElement(e, Object.assign({}, s));
        }
        let u = ei && ea;
        let p = eo ? `${b}-col-${eo}` : "";
        let f = null;
        if (!S && en !== "inset") {
          let e = typeof x != "object" || reactElementUtils.isValidElement(x) ? {} : x;
          f = reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, Object.assign({
            text: x || _,
            id: ez,
            required: A,
            name: eA || B || _,
            width: er,
            align: eo
          }, e));
        }
        let y = reactCoreLibraryReexport.createElement("div", {
          className: c
        }, es === "middle" ? a : null, d, T ? null : reactCoreLibraryReexport.createElement(formFieldFeedback.FormFieldFeedback, {
          error: ev,
          validateStatus: t,
          helpText: H,
          helpTextId: eq,
          errorMessageId: eL,
          showValidateIcon: et.showValidateIcon
        }), es === "bottom" ? a : null);
        let w = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, en === "top" ? reactCoreLibraryReexport.createElement("div", {
          style: {
            overflow: "hidden"
          }
        }, reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, ei, {
          className: p
        }), f)) : reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, ei, {
          className: p
        }), f), reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, ea), y));
        return reactCoreLibraryReexport.createElement("div", {
          className: l,
          style: D,
          "x-label-pos": en,
          "x-field-id": _,
          "x-extra-pos": es
        }, u ? w : reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, f, y));
      };
      let eW = [...Object.values({
        value: ep,
        error: ev,
        touched: ey,
        status: eE
      }), ...Object.values(n), _, en, eo, et.disabled];
      if (Y.shouldMemo) {
        return reactCoreLibraryReexport.useMemo(eD, [...eW]);
      } else {
        return eD();
      }
    };
    (n = reactCoreLibraryReexport.forwardRef(n)).displayName = formValidationUtils.getSemiFieldName(e);
    return n;
  }
  require.d(exports, {
    FormFieldWrapper: function () {
      return _;
    }
  });
}