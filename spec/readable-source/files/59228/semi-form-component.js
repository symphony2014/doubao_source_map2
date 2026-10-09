// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Form'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59228.284c0506.js
         * chunkId: 59228
         * moduleId: 681095
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var valueToPathArray = require("value-to-path-array") /*id: 599844*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var safeObjectPathUtils = require("safe-object-path-utils") /*id: 881861*/;
  var isPromiseUtil = require("is-promise-util") /*id: 688982*/;
  var formValidationUtils = require("form-validation-utils") /*id: 921165*/;
  function m(e) {
    return typeof e == "object" && e != null && e.nodeType === 1;
  }
  function b(e, t) {
    return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
  }
  function y(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      var i;
      var n = getComputedStyle(e, null);
      return b(n.overflowY, t) || b(n.overflowX, t) || !!(i = function (e) {
        if (!e.ownerDocument || !e.ownerDocument.defaultView) {
          return null;
        }
        try {
          return e.ownerDocument.defaultView.frameElement;
        } catch (e) {
          return null;
        }
      }(e)) && (i.clientHeight < e.scrollHeight || i.clientWidth < e.scrollWidth);
    }
    return false;
  }
  function v(e, t, i, n, s, a, r, o) {
    if (a < e && r > t || a > e && r < t) {
      return 0;
    } else if (a <= e && o <= i || r >= t && o >= i) {
      return a - e - n;
    } else if (r > t && o < i || a < e && o > i) {
      return r - t + s;
    } else {
      return 0;
    }
  }
  function C(e, t) {
    var i = window;
    var n = t.scrollMode;
    var s = t.block;
    var a = t.inline;
    var r = t.boundary;
    var o = t.skipOverflowHiddenElements;
    var l = typeof r == "function" ? r : function (e) {
      return e !== r;
    };
    if (!m(e)) {
      throw TypeError("Invalid target");
    }
    var d;
    var h;
    var p = document.scrollingElement || document.documentElement;
    var u = [];
    var c = e;
    while (m(c) && l(c)) {
      if ((c = (h = (d = c).parentElement) == null ? d.getRootNode().host || null : h) === p) {
        u.push(c);
        break;
      }
      if (c == null || c !== document.body || !y(c) || !!y(document.documentElement)) {
        if (c != null && y(c, o)) {
          u.push(c);
        }
      }
    }
    var f = i.visualViewport ? i.visualViewport.width : innerWidth;
    var g = i.visualViewport ? i.visualViewport.height : innerHeight;
    var b = window.scrollX || pageXOffset;
    var C = window.scrollY || pageYOffset;
    var E = e.getBoundingClientRect();
    var S = E.height;
    var _ = E.width;
    var O = E.top;
    var w = E.right;
    var P = E.bottom;
    var I = E.left;
    var T = s === "start" || s === "nearest" ? O : s === "end" ? P : O + S / 2;
    var x = a === "center" ? I + _ / 2 : a === "end" ? w : I;
    var F = [];
    var k = 0;
    for (; k < u.length; k++) {
      var D = u[k];
      var N = D.getBoundingClientRect();
      var R = N.height;
      var Z = N.width;
      var L = N.top;
      var A = N.right;
      var $ = N.bottom;
      var j = N.left;
      if (n === "if-needed" && O >= 0 && I >= 0 && P <= g && w <= f && O >= L && P <= $ && I >= j && w <= A) {
        break;
      }
      var M = getComputedStyle(D);
      var V = parseInt(M.borderLeftWidth, 10);
      var K = parseInt(M.borderTopWidth, 10);
      var H = parseInt(M.borderRightWidth, 10);
      var U = parseInt(M.borderBottomWidth, 10);
      var B = 0;
      var z = 0;
      var G = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - V - H : 0;
      var W = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - K - U : 0;
      var X = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : Z / D.offsetWidth : 0;
      var Y = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : R / D.offsetHeight : 0;
      if (p === D) {
        B = s === "start" ? T : s === "end" ? T - g : s === "nearest" ? v(C, C + g, g, K, U, C + T, C + T + S, S) : T - g / 2;
        z = a === "start" ? x : a === "center" ? x - f / 2 : a === "end" ? x - f : v(b, b + f, f, V, H, b + x, b + x + _, _);
        B = Math.max(0, B + C);
        z = Math.max(0, z + b);
      } else {
        B = s === "start" ? T - L - K : s === "end" ? T - $ + U + W : s === "nearest" ? v(L, $, R, K, U + W, T, T + S, S) : T - (L + R / 2) + W / 2;
        z = a === "start" ? x - j - V : a === "center" ? x - (j + Z / 2) + G / 2 : a === "end" ? x - A + H + G : v(j, A, Z, V, H + G, x, x + _, _);
        var q = D.scrollLeft;
        var J = D.scrollTop;
        T += J - (B = Math.max(0, Math.min(J + B / Y, D.scrollHeight - R / Y + W)));
        x += q - (z = Math.max(0, Math.min(q + z / X, D.scrollWidth - Z / X + G)));
      }
      F.push({
        el: D,
        top: B,
        left: z
      });
    }
    return F;
  }
  function E(e) {
    return e === Object(e) && Object.keys(e).length !== 0;
  }
  function S(e, t) {
    var i = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (E(t) && typeof t.behavior == "function") {
      return t.behavior(i ? C(e, t) : []);
    }
    if (i) {
      var n = t === false ? {
        block: "end",
        inline: "nearest"
      } : E(t) ? t : {
        block: "start",
        inline: "nearest"
      };
      return function (e, t = "auto") {
        var i = "scrollBehavior" in document.body.style;
        e.forEach(function (e) {
          var n = e.el;
          var s = e.top;
          var a = e.left;
          if (n.scroll && i) {
            n.scroll({
              top: s,
              left: a,
              behavior: t
            });
          } else {
            n.scrollTop = s;
            n.scrollLeft = a;
          }
        });
      }(C(e, n), n.behavior);
    }
  }
  class _ extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      let {
        initValues: t
      } = this._adapter.getProps();
      t = this._adapter.cloneDeep(t);
      this.data = {
        values: t || {},
        errors: {},
        touched: {}
      };
      this.fields = new Map();
      this.registered = {};
      this.registeredArrayField = new Map();
      this.register = this.register.bind(this);
      this.unRegister = this.unRegister.bind(this);
      this.registerArrayField = this.registerArrayField.bind(this);
      this.unRegisterArrayField = this.unRegisterArrayField.bind(this);
      this.getArrayField = this.getArrayField.bind(this);
      this.updateArrayField = this.updateArrayField.bind(this);
      this.getField = this.getField.bind(this);
      this.setValues = this.setValues.bind(this);
      this.updateStateValue = this.updateStateValue.bind(this);
      this.updateStateError = this.updateStateError.bind(this);
      this.updateStateTouched = this.updateStateTouched.bind(this);
      this.getFormState = this.getFormState.bind(this);
      this.getValue = this.getValue.bind(this);
      this.getError = this.getError.bind(this);
      this.getTouched = this.getTouched.bind(this);
      this.getInitValues = this.getInitValues.bind(this);
      this.getInitValue = this.getInitValue.bind(this);
      this.getFormProps = this.getFormProps.bind(this);
      this.getFieldExist = this.getFieldExist.bind(this);
      this.scrollToField = this.scrollToField.bind(this);
    }
    init() {
      this._adapter.initFormId();
    }
    getField(e) {
      return this.fields.get(e);
    }
    register(e, t, i) {
      this.registered[e];
      this.registered[e] = true;
      this.fields.set(e, i);
      if (i.keepState) ;else {
        let n = i.allowEmpty || false;
        let s = {
          notNotify: true,
          notUpdate: false,
          allowEmpty: n
        };
        let a = t.value;
        if (!n && a === "") {
          a = undefined;
        }
        this.updateStateValue(e, a, s);
        if (t.error) {
          this.updateStateError(e, t.error, s);
        }
      }
    }
    unRegister(e) {
      let t = this.fields.get(e);
      try {
        if (!t.keepState) {
          safeObjectPathUtils.unsetObjectPath(this.data.values, e);
          safeObjectPathUtils.unsetObjectPath(this.data.errors, e);
          safeObjectPathUtils.unsetObjectPath(this.data.touched, e);
        }
      } catch (e) {}
      this.fields.delete(e);
      this._adapter.notifyChange(this.data);
      this._adapter.forceUpdate();
    }
    registerArrayField(e, t) {
      this.updateArrayField(e, {
        updateKey: new Date().valueOf(),
        initValue: t
      });
    }
    unRegisterArrayField(e) {
      this.registeredArrayField.delete(e);
    }
    getArrayField(e) {
      return this.registeredArrayField.get(e);
    }
    updateArrayField(e, t) {
      let i = Object.assign(Object.assign({}, this.registeredArrayField.get(e)), t);
      this.registeredArrayField.set(e, i);
    }
    validate(e) {
      let {
        validateFields: t
      } = this.getProps();
      if (t && isFunctionUtil_1.isFunction(t)) {
        return this._formValidate();
      } else {
        return this._fieldsValidate(e);
      }
    }
    _formValidate() {
      let {
        values: e
      } = this.data;
      let {
        validateFields: t
      } = this.getProps();
      return new Promise((i, n) => {
        let s;
        try {
          s = t(e);
        } catch (e) {
          s = e;
        }
        if (s) {
          if (isPromiseUtil.isPromise(s)) {
            s.then(t => {
              if (t) {
                this.data.errors = t;
                this._adapter.notifyChange(this.data);
                this.injectErrorToField(t);
                this._adapter.forceUpdate();
                this._autoScroll(100);
                n(t);
              } else {
                i(this._adapter.cloneDeep(e));
                this.injectErrorToField({});
              }
            }, e => {
              this._autoScroll(100);
              n(e);
            });
          } else {
            this.data.errors = s;
            this.injectErrorToField(s);
            this._adapter.notifyChange(this.data);
            this._adapter.forceUpdate();
            this._autoScroll(100);
            n(s);
          }
        } else {
          i(this._adapter.cloneDeep(e));
          this.injectErrorToField({});
        }
      });
    }
    _fieldsValidate(e) {
      let {
        values: t
      } = this.data;
      return new Promise((i, n) => {
        let s = [];
        let a = this._getOperateFieldMap(e);
        a.forEach((e, t) => {
          let i = this.getValue(t);
          let n = {
            notNotify: true,
            notUpdate: true
          };
          let a = e.fieldApi.validate(i, n);
          s.push(a);
          e.fieldApi.setTouched(true, n);
        });
        Promise.all(s).then(() => {
          this._adapter.notifyChange(this.data);
          this._adapter.forceUpdate();
          let e = this.getError();
          if (this._isValid(a)) {
            i(this._adapter.cloneDeep(t));
          } else {
            this._autoScroll();
            n(e);
          }
        });
      });
    }
    submit(e) {
      let {
        values: t
      } = this.data;
      this.validate().then(t => {
        let i = this._adapter.cloneDeep(t);
        this._adapter.notifySubmit(i, e);
      }).catch(i => {
        let n = this._adapter.cloneDeep(i);
        let s = this._adapter.cloneDeep(t);
        this._adapter.notifySubmitFail(n, s, e);
      });
    }
    _getNestedField(e) {
      let t = this.fields;
      let i = [...t].map(e => e[0]);
      let n = new Map();
      i.forEach(i => {
        let s = valueToPathArray.valueToPathArray(i);
        let a = valueToPathArray.valueToPathArray(e);
        if (a.every((e, t) => a[t] === s[t])) {
          let e = t.get(i);
          n.set(i, e);
        }
      });
      return n;
    }
    _getOperateFieldMap(e) {
      let t = new Map();
      if (isUndefinedCheck.isUndefined(e)) {
        t = this.fields;
      } else {
        e.forEach(e => {
          let i = this.fields.get(e);
          if (isUndefinedCheck.isUndefined(i)) {
            let i = this._getNestedField(e);
            t = new Map([...t, ...i]);
          } else {
            t.set(e, i);
          }
        });
      }
      return t;
    }
    reset(e) {
      this._getOperateFieldMap(e).forEach(e => {
        e.fieldApi.reset();
      });
      if (this.registeredArrayField.size) {
        this._resetArrayField();
      }
      this._adapter.notifyChange(this.data);
      this._adapter.forceUpdate();
      this._adapter.notifyReset();
    }
    _resetArrayField() {
      [...this.registeredArrayField.keys()].forEach(e => {
        let t = this.registeredArrayField.get(e).initValue;
        this.updateStateValue(e, t, {
          notNotify: true,
          notUpdate: true
        });
        this.updateArrayField(e, {
          updateKey: new Date().valueOf()
        });
      });
    }
    injectErrorToField(e) {
      this.fields.forEach(t => {
        let i = safeObjectPathUtils.getObjectPath(e, t.field);
        t.fieldApi.setError(i, {
          notNotify: true,
          notUpdate: true
        });
      });
    }
    getValue(e, t) {
      let i;
      let n;
      let s = e === undefined;
      let a = t && t.needClone;
      switch (true) {
        case !s && !a:
          i = safeObjectPathUtils.getObjectPath(this.data.values, e);
          break;
        case !s && a:
          n = safeObjectPathUtils.getObjectPath(this.data.values, e);
          i = this._adapter.cloneDeep(n);
          break;
        case s && !a:
          i = Object.assign({}, this.data.values);
          break;
        case s && a:
          i = this._adapter.cloneDeep(this.data.values);
      }
      return i;
    }
    setValues(e, t) {
      let {
        isOverride: i = false
      } = t;
      let n = this._adapter.cloneDeep(e);
      this.fields.forEach(e => {
        let t = safeObjectPathUtils.getObjectPath(n, e.field);
        e.fieldApi.setValue(t, {
          notNotify: true,
          notUpdate: true
        });
      });
      if (this.registeredArrayField.size) {
        [...this.registeredArrayField.keys()].forEach(e => {
          this.updateArrayField(e, {
            updateKey: new Date().valueOf()
          });
        });
      }
      if (i) {
        this.data.values = n;
      }
      this._adapter.notifyChange(this.data);
      this._adapter.notifyValueChange(this.data.values, Object.assign({}, e));
      this._adapter.forceUpdate();
    }
    updateStateValue(e, t, i, n) {
      let s = i && i.notNotify;
      let a = i && i.notUpdate;
      let r = i && i.fieldAllowEmpty;
      let o = this.getProp("allowEmpty");
      safeObjectPathUtils.setObjectPath(this.data.values, e, t, r || o);
      if (!s) {
        this._adapter.notifyChange(this.data);
        this._adapter.notifyValueChange(this.data.values, {
          [e]: t
        });
      }
      if (!a) {
        this._adapter.forceUpdate(n);
      }
    }
    getTouched(e) {
      if (e === undefined) {
        return this.data.touched;
      } else {
        return safeObjectPathUtils.getObjectPath(this.data.touched, e);
      }
    }
    updateStateTouched(e, t, i, n) {
      let s = i && i.notNotify;
      let a = i && i.notUpdate;
      safeObjectPathUtils.setObjectPath(this.data.touched, e, t);
      if (!s) {
        this._adapter.notifyChange(this.data);
      }
      if (!a) {
        this._adapter.forceUpdate(n);
      }
    }
    getError(e) {
      if (e === undefined) {
        return this.data.errors;
      } else {
        return safeObjectPathUtils.getObjectPath(this.data.errors, e);
      }
    }
    updateStateError(e, t, i, n) {
      let s = i && i.notNotify;
      let a = i && i.notUpdate;
      safeObjectPathUtils.setObjectPath(this.data.errors, e, t);
      if (!s) {
        this._adapter.notifyChange(this.data);
      }
      if (!a) {
        this._adapter.forceUpdate(n);
      }
    }
    getFieldSetterApi() {
      return {
        setValue: (e, t, i) => {
          let n = this.fields.get(e) ? this.fields.get(e).fieldApi : undefined;
          let s = this._adapter.cloneDeep(t);
          if (n) {
            n.setValue(s, i);
          } else {
            this.updateStateValue(e, s, i, () => {
              let t = this._getNestedField(e);
              if (t.size) {
                t.forEach(e => {
                  let t = e.field;
                  let i = safeObjectPathUtils.getObjectPath(this.data.values, t);
                  e.fieldApi.setValue(i, {
                    notNotify: true,
                    notUpdate: true
                  });
                });
              }
            });
            if (this.getArrayField(e)) {
              this.updateArrayField(e, {
                updateKey: new Date().valueOf()
              });
            }
          }
        },
        setError: (e, t, i) => {
          let n = this.fields.get(e) ? this.fields.get(e).fieldApi : undefined;
          let s = this._adapter.cloneDeep(t);
          if (n) {
            n.setError(s, i);
          } else {
            this.updateStateError(e, s, i, () => {
              let t = this._getNestedField(e);
              if (t.size) {
                t.forEach(e => {
                  let t = e.field;
                  let i = safeObjectPathUtils.getObjectPath(this.data.errors, t);
                  e.fieldApi.setError(i, {
                    notNotify: true,
                    notUpdate: true
                  });
                });
              }
            });
            if (this.getArrayField(e)) {
              this.updateArrayField(e, {
                updateKey: new Date().valueOf()
              });
            }
          }
        },
        setTouched: (e, t, i) => {
          let n = this.fields.get(e) ? this.fields.get(e).fieldApi : undefined;
          if (n) {
            n.setTouched(t, i);
          } else {
            this.updateStateTouched(e, t, i, () => {
              let t = this._getNestedField(e);
              if (t.size) {
                t.forEach(e => {
                  let t = e.field;
                  let i = safeObjectPathUtils.getObjectPath(this.data.touched, t);
                  e.fieldApi.setTouched(i, {
                    notNotify: true,
                    notUpdate: true
                  });
                });
              }
            });
            if (this.getArrayField(e)) {
              this.updateArrayField(e, {
                updateKey: new Date().valueOf()
              });
            }
          }
        }
      };
    }
    getModifyFormStateApi() {
      return {
        register: this.register,
        unRegister: this.unRegister,
        updateStateValue: this.updateStateValue,
        updateStateError: this.updateStateError,
        updateStateTouched: this.updateStateTouched,
        getValue: this.getValue,
        getError: this.getError,
        getTouched: this.getTouched,
        getInitValues: this.getInitValues,
        getInitValue: this.getInitValue,
        getFormProps: this.getFormProps,
        getField: this.getField,
        registerArrayField: this.registerArrayField,
        unRegisterArrayField: this.unRegisterArrayField,
        getArrayField: this.getArrayField,
        updateArrayField: this.updateArrayField
      };
    }
    getFormApi() {
      return Object.assign(Object.assign({}, this.getFieldSetterApi()), {
        reset: e => this.reset(e),
        validate: e => this.validate(e),
        getValue: e => this.getValue(e, {
          needClone: true
        }),
        getValues: () => this.getValue(undefined, {
          needClone: true
        }),
        getFormState: () => this.getFormState(true),
        getInitValue: e => this.getInitValue(e),
        getInitValues: () => this.getInitValues(),
        getTouched: e => this.getTouched(e),
        getError: e => this.getError(e),
        setValues: (e, t) => this.setValues(e, t || {
          isOverride: false
        }),
        submitForm: () => this.submit(),
        getFieldExist: e => this.getFieldExist(e),
        scrollToField: (e, t) => this.scrollToField(e, t)
      });
    }
    getFormState(e = false) {
      if (e) {
        return this._adapter.cloneDeep(this.data);
      } else {
        return Object.assign({}, this.data);
      }
    }
    _isValid(e) {
      let t = true;
      if (e) {
        [...e.keys()].forEach(e => {
          let i = safeObjectPathUtils.getObjectPath(this.data.errors, e);
          if (!formValidationUtils.isEmptyValue(i)) {
            t = false;
          }
        });
      } else {
        t = !!safeObjectPathUtils.isEmptyObject(this.data.errors);
      }
      return t;
    }
    getInitValues() {
      return this._adapter.getInitValues();
    }
    getInitValue(e) {
      if (e === undefined) {
        return this._adapter.getInitValues();
      } else {
        return safeObjectPathUtils.getObjectPath(this._adapter.getInitValues(), e);
      }
    }
    getFormProps(e) {
      return this._adapter.getFormProps(e);
    }
    getFieldExist(e) {
      return !!this.fields.has(e);
    }
    _autoScroll(e) {
      let {
        autoScrollToError: t
      } = this.getFormProps();
      if (!t) {
        return;
      }
      let i = {
        behavior: "smooth",
        block: "start"
      };
      if (typeof t == "object") {
        i = t;
      }
      if (e) {
        setTimeout(() => this._getErrorFieldAndScroll(i), 100);
      } else {
        this._getErrorFieldAndScroll(i);
      }
    }
    _getErrorFieldAndScroll(e) {
      let t = this._adapter.getAllErrorDOM();
      if (t && t.length) {
        try {
          let i = t[0].parentNode.parentNode;
          S(i, e);
        } catch (e) {}
      }
    }
    scrollToField(e, t = {
      behavior: "smooth",
      block: "start"
    }) {
      if (this.getFieldExist(e)) {
        S(this._adapter.getFieldDOM(e), t);
      }
    }
  }
  var formUxConstants = require("form-ux-constants") /*id: 740990*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var formContextDefinitions = require("form-context-definitions") /*id: 139790*/;
  var reactElementUtils = require("react-element-utils") /*id: 105208*/;
  var reactGridRowComponent = require("react-grid-row-component") /*id: 14775*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var formLabelComponent = require("form-label-component") /*id: 455464*/;
  var reactGridColComponent = require("react-grid-col-component") /*id: 420189*/;
  var formFieldFeedback = require("form-field-feedback") /*id: 446866*/;
  function $(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  let j = formUxConstants.formPrefixConfig.PREFIX;
  let M = formUxConstants.formPrefixConfig.PREFIX;
  class V extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        text: e,
        className: t,
        style: i,
        children: n
      } = this.props;
      let a = r({
        [M + "-section"]: true
      }, t);
      return reactCoreLibraryReexport.createElement("section", {
        className: a,
        style: i
      }, reactCoreLibraryReexport.createElement("h5", {
        className: M + "-section-text"
      }, e), n);
    }
  }
  V.propTypes = {
    text: l.node,
    className: l.string,
    style: l.object,
    children: l.node
  };
  var useFormState = require("use-form-state") /*id: 81618*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var semiInputConstants = require("semi-input-constants") /*id: 859366*/;
  var emptyFunctionExport = require("empty-function-export") /*id: 185067*/;
  function z(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  let G = semiInputConstants.inputPrefixConfig.PREFIX;
  let W = semiInputConstants.inputConstants.SIZE;
  class X extends reactFoundationComponent.FoundationComponent {
    renderGroupWithLabel(e) {
      let t = this.props;
      let {
        size: i,
        className: n,
        label: a,
        labelPosition: o
      } = t;
      z(t, ["size", "className", "label", "labelPosition"]);
      let l = r({
        [`${G}-group-wrapper`]: true,
        [`${G}-group-wrapper-with-top-label`]: o === "top",
        [`${G}-group-wrapper-with-left-label`]: o === "left"
      });
      let d = r(`${G}-group`, n, {
        [`${G}-${i}`]: i !== "default"
      });
      let h = "input-group";
      return reactCoreLibraryReexport.createElement("div", {
        className: l
      }, a && a.text ? reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, Object.assign({
        name: h
      }, a)) : null, reactCoreLibraryReexport.createElement("span", {
        role: "group",
        "aria-disabled": this.props.disabled,
        id: a && a.name || h,
        className: d,
        style: this.props.style,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur
      }, e));
    }
    render() {
      let e;
      let t = this.props;
      let {
        size: i,
        style: n,
        className: a,
        children: o,
        label: l,
        onBlur: d,
        onFocus: p,
        disabled: u
      } = t;
      let c = z(t, ["size", "style", "className", "children", "label", "onBlur", "onFocus", "disabled"]);
      let f = r(`${G}-group`, {
        [`${G}-${i}`]: i !== "default"
      }, a);
      if (o) {
        e = (Array.isArray(o) ? o : [o]).map((e, t) => {
          if (e) {
            let {
              onBlur: n,
              onFocus: a,
              disabled: r
            } = e.props;
            let o = isFunctionUtil_1.isFunction(n) && objectPathGetDefault.getObjectPathDefault(n, "name") !== "noop" ? n : d;
            let l = isFunctionUtil_1.isFunction(a) && objectPathGetDefault.getObjectPathDefault(a, "name") !== "noop" ? a : p;
            return reactCoreLibraryReexport.cloneElement(e, Object.assign(Object.assign({
              key: t
            }, c), {
              size: i,
              onBlur: o,
              onFocus: l,
              disabled: typeof r == "boolean" ? r : u
            }));
          }
          return null;
        });
      }
      if (l && l.text) {
        return this.renderGroupWithLabel(e);
      } else {
        return reactCoreLibraryReexport.createElement("span", {
          role: "group",
          "aria-label": "Input group",
          "aria-disabled": this.props.disabled,
          className: f,
          style: n,
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur
        }, e);
      }
    }
  }
  X.propTypes = {
    className: l.string,
    children: l.node,
    size: l.oneOf(W),
    style: l.object,
    onBlur: l.func,
    onFocus: l.func,
    label: l.object,
    labelPosition: l.string
  };
  X.defaultProps = {
    size: "default",
    className: "",
    onBlur: emptyFunctionExport.emptyFunction,
    onFocus: emptyFunctionExport.emptyFunction
  };
  function Y(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  let q = formUxConstants.formPrefixConfig.PREFIX;
  let J = e => {
    let {
      fieldSet: t
    } = e;
    let i = useFormState.useFormState();
    let n = t.map(e => safeObjectPathUtils.getObjectPath(i.errors, e));
    if (formValidationUtils.isEmptyValue(n)) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(formFieldFeedback.FormFieldFeedback, {
        error: n,
        showValidateIcon: e.showValidateIcon,
        isInInputGroup: e.isInInputGroup
      });
    }
  };
  class Q extends reactCoreLibraryReexport.Component {
    renderLabel(e, t) {
      if (e) {
        if (isStringTypeCheck.isString(e)) {
          return reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, {
            width: t.labelWidth,
            text: e
          });
        } else {
          return reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, Object.assign({
            width: t.labelWidth
          }, e));
        }
      } else {
        return null;
      }
    }
    render() {
      let e;
      let t = this.props;
      let {
        children: i,
        label: n,
        extraText: a,
        extraTextPosition: o
      } = t;
      let l = Y(t, ["children", "label", "extraText", "extraTextPosition"]);
      let d = this.context.getFormProps(["labelPosition", "labelWidth", "labelAlign", "showValidateIcon", "wrapperCol", "labelCol", "disabled"]);
      let h = this.props.labelPosition || d.labelPosition;
      let p = [];
      let u = reactCoreLibraryReexport.Children.map(i, e => e && e.props && e.props.field ? (p.push(e.props.field), reactCoreLibraryReexport.cloneElement(e, {
        isInInputGroup: true
      })) : null);
      let c = r({
        [`${q}-field-group`]: true
      });
      let f = d.labelCol;
      let g = d.wrapperCol;
      let m = d.labelAlign;
      let b = f && g;
      let y = f ? `${q}-col-${m}` : "";
      let v = this.renderLabel(n, d);
      let C = reactCoreLibraryReexport.createElement(X, Object.assign({
        disabled: d.disabled
      }, l), u);
      let E = reactCoreLibraryReexport.createElement(J, {
        fieldSet: p,
        showValidateIcon: d.showValidateIcon,
        isInInputGroup: true
      });
      let S = r(`${q}-field-extra`, {
        [`${q}-field-extra-string`]: typeof a == "string",
        [`${q}-field-extra-middle`]: o === "middle",
        [`${q}-field-extra-bottom`]: o === "bottom"
      });
      let _ = a ? reactCoreLibraryReexport.createElement("div", {
        className: S,
        "x-semi-prop": "extraText"
      }, a) : null;
      switch (true) {
        case !b:
          e = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, v, reactCoreLibraryReexport.createElement("div", null, o === "middle" ? _ : null, C, o === "bottom" ? _ : null, E));
          break;
        case b && h === "top":
          e = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
            style: {
              overflow: "hidden"
            }
          }, reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, f, {
            className: y
          }), v)), reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, g), o === "middle" ? _ : null, C, o === "bottom" ? _ : null, E));
          break;
        case b && h !== "top":
          e = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, f, {
            className: y
          }), v), reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, g), o === "middle" ? _ : null, C, o === "bottom" ? _ : null, E));
      }
      return reactCoreLibraryReexport.createElement("div", {
        "x-label-pos": h,
        className: c
      }, e);
    }
  }
  Q.contextType = formContextDefinitions.formUpdaterContext;
  var formFieldWrapperComponent = require("form-field-wrapper-component") /*id: 520727*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var flowDocPreviewCheck = require("flow-doc-preview-check") /*id: 794698*/;
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  var ea = (e, t) => {
    let {
      isNaN: i
    } = Number;
    return i(e) && i(t);
  };
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  let ed = Object.assign({}, semiInputConstants.inputPrefixConfig);
  let eh = Object.assign(Object.assign({}, semiInputConstants.placeholderConfig), {
    DEFAULT_STEP: 1,
    DEFAULT_SHIFT_STEP: 10,
    DEFAULT_PRESS_TIMEOUT: 250,
    DEFAULT_PRESS_INTERVAL: 0,
    MOUSE_BUTTON_LEFT: 0
  });
  let ep = Object.assign({}, semiInputConstants.inputConstants);
  function eu(e, t) {
    return function (e, t) {
      let i = Math.pow(10, Math.max((e.toString().split(".")[1] || "").length, (t.toString().split(".")[1] || "").length));
      return (e * i + t * i) / i;
    }(e, -t);
  }
  class ec extends componentAdapterBaseClass.BaseAdapterClass {
    init() {
      this._setInitValue();
    }
    destroy() {
      this._unregisterInterval();
      this._unregisterTimer();
      this._adapter.unregisterGlobalEvent("mouseup");
    }
    isControlled() {
      return this._isControlledComponent("value");
    }
    _doInput(e = "", t = null, i = null) {
      let n = e;
      let s = e;
      let a = true;
      let r = this.isControlled();
      if (typeof e != "number") {
        a = !isNaN(s = this.doParse(e, false));
      }
      if (a) {
        n = s;
        if (!r) {
          this._adapter.setNumber(s);
        }
      }
      if (!r) {
        this._adapter.setValue(e, i);
      }
      if (this.getProp("keepFocus")) {
        this._adapter.setFocusing(true, () => {
          this._adapter.setClickUpOrDown(true);
        });
      }
      this.notifyChange(n, t);
    }
    _registerInterval(e) {
      let t = this.getProp("pressInterval") || eh.DEFAULT_PRESS_INTERVAL;
      this._intervalHasRegistered = true;
      this._interval = setInterval(() => {
        if (typeof e == "function" && this._intervalHasRegistered) {
          e();
        }
      }, t);
    }
    _unregisterInterval() {
      if (this._interval) {
        this._intervalHasRegistered = false;
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _registerTimer(e) {
      let t = this.getProp("pressTimeout") || eh.DEFAULT_PRESS_TIMEOUT;
      this._timerHasRegistered = true;
      this._timer = setTimeout(() => {
        if (this._timerHasRegistered && typeof e == "function") {
          e();
        }
      }, t);
    }
    _unregisterTimer() {
      if (this._timer) {
        this._timerHasRegistered = false;
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
    handleInputFocus(e) {
      this.getState("value");
      this._adapter.recordCursorPosition();
      this._adapter.setFocusing(true, null);
      this._adapter.setClickUpOrDown(false);
      this._adapter.notifyFocus(e);
    }
    handleInputChange(e, t) {
      let i;
      let n = this.doParse(e, true, true, true);
      let s = this.doParse(e, false, false, false);
      let a = this.afterParser(e);
      this._adapter.recordCursorPosition();
      let r = s;
      let o = e;
      if (e === "") {
        if (!this.isControlled()) {
          r = null;
        }
      } else if (this.isValidNumber(s) && this.isValidNumber(n)) {
        i = s;
        o = this.doFormat(s, false);
      } else {
        if (typeof s != "number" || isNaN(s)) {
          o = this.doFormat(a, false);
        } else {
          o = this.doFormat(s, false);
          let e = a.lastIndexOf(".");
          let t = a.length - 1 - e;
          let i = this._getPrecLen(s);
          if (i) {
            if (i < t) {
              for (let e = 0; e < t - i; e++) {
                o += "0";
              }
            }
          } else {
            o += e > -1 ? a.slice(e) : "";
          }
          r = s;
        }
        i = a;
      }
      if (!this.isControlled() && (r === null || typeof r == "number" && !isNaN(r))) {
        this._adapter.setNumber(r);
      }
      this._adapter.setValue(this.isControlled() ? o : this.doFormat(a, false), () => {
        this._adapter.restoreCursor();
      });
      this.notifyChange(i, t);
    }
    handleInputKeyDown(e) {
      let t = e.keyCode;
      if (t === keyboardKeyCodes_3.keyCodeMap.UP || t === keyboardKeyCodes_3.keyCodeMap.DOWN) {
        this._adapter.setClickUpOrDown(true);
        this._adapter.recordCursorPosition();
        let i = t === keyboardKeyCodes_3.keyCodeMap.UP ? this.add(null, e) : this.minus(null, e);
        this._doInput(i, e, () => {
          this._adapter.restoreCursor();
        });
        e.preventDefault();
      }
      this._adapter.notifyKeyDown(e);
    }
    handleInputBlur(e) {
      let t = safeValueToStringUtil.safeToString(this.getState("value"));
      let i = this.getState("number");
      if (i != null || t != null && t !== "") {
        let n;
        let s;
        let a = this.doParse(t, false, true, true);
        let r = false;
        let o = false;
        if (this.isValidNumber(a) && i !== a) {
          n = a;
          if (!this.isControlled()) {
            i = n;
          }
          r = true;
        }
        let l = this.doFormat(i, true);
        if (l !== t) {
          s = l;
          o = true;
        }
        if (o || r) {
          let t = s ?? n;
          if (s != null) {
            this._adapter.setValue(s);
          }
          if (n != null && !this._isControlledComponent("value")) {
            this._adapter.setNumber(n);
          }
          this.notifyChange(t, e);
        }
      }
      this._adapter.setFocusing(false);
      this._adapter.notifyBlur(e);
    }
    handleInputMouseEnter(e) {
      this._adapter.setHovering(true);
    }
    handleInputMouseLeave(e) {
      this._adapter.setHovering(false);
    }
    handleInputMouseMove(e) {
      this._adapter.setHovering(true);
    }
    handleMouseUp(e) {
      this._unregisterInterval();
      this._unregisterTimer();
      this._adapter.unregisterGlobalEvent("mouseup");
    }
    handleUpClick(e) {
      let {
        readonly: t
      } = this.getProps();
      if (this._isMouseButtonLeft(e) && !t) {
        this._adapter.setClickUpOrDown(true);
        if (e) {
          this._persistEvent(e);
          e.stopPropagation();
          this._preventDefault(e);
        }
        this.upClick(e);
        this._registerTimer(() => {
          this._registerInterval(() => {
            this.upClick(e);
          });
        });
      }
    }
    handleDownClick(e) {
      let {
        readonly: t
      } = this.getProps();
      if (this._isMouseButtonLeft(e) && !t) {
        this._adapter.setClickUpOrDown(true);
        if (e) {
          this._persistEvent(e);
          e.stopPropagation();
          this._preventDefault(e);
        }
        this.downClick(e);
        this._registerTimer(() => {
          this._registerInterval(() => {
            this.downClick(e);
          });
        });
      }
    }
    _isMouseButtonLeft(e) {
      return objectPathGetDefault.getObjectPathDefault(e, "button") === eh.MOUSE_BUTTON_LEFT;
    }
    _preventDefault(e) {
      let t = this._adapter.getProp("keepFocus");
      let i = this._adapter.getProp("innerButtons");
      if (t || i) {
        e.preventDefault();
      }
    }
    handleMouseLeave(e) {
      this._adapter.registerGlobalEvent("mouseup", () => {
        this.handleMouseUp(e);
      });
    }
    upClick(e) {
      let t = this.add(null, e);
      this._doInput(t, e);
      this._adapter.notifyUpClick(t, e);
    }
    downClick(e) {
      let t = this.minus(null, e);
      this._doInput(t, e);
      this._adapter.notifyDownClick(t, e);
    }
    _setInitValue() {
      let {
        defaultValue: e,
        value: t
      } = this.getProps();
      let i = this._isControlledComponent("value") ? t : e;
      let n = this.doParse(safeValueToStringUtil.safeToString(i), false, true, true);
      let s = null;
      if (typeof n == "number" && !isNaN(n)) {
        s = n;
      }
      let a = typeof s == "number" ? this.doFormat(s, true) : "";
      this._adapter.setNumber(s);
      this._adapter.setValue(a);
      if (isStringTypeCheck.isString(a) && a !== String(i ?? "")) {
        this.notifyChange(a, null);
      }
    }
    add(e, t) {
      let i = t && t.shiftKey ? this.getProp("shiftStep") : this.getProp("step");
      e = e == null ? i : Number(e);
      let n = Math.abs(toNumberUtil_1.toNumber(e));
      let s = this.getState("number");
      let a = this.toNumber(s) || 0;
      let r = this.getProp("min");
      let o = this.getProp("max");
      let l = this._getPrecLen(r);
      let d = this._getPrecLen(o);
      let h = Math.pow(10, Math.max(l, d, this._getPrecLen(a), this._getPrecLen(e)));
      if (e < 0) {
        if (Math.abs(eu(r, a)) >= n) {
          a = (a * h + e * h) / h;
        }
      } else if (e > 0 && Math.abs(eu(o, a)) >= n) {
        a = (a * h + e * h) / h;
      }
      if (typeof r == "number" && r > a) {
        a = r;
      }
      if (typeof o == "number" && o < a) {
        a = o;
      }
      return this.doFormat(a, true);
    }
    minus(e, t) {
      let i = t && t.shiftKey ? this.getProp("shiftStep") : this.getProp("step");
      e = e == null ? i : Number(e);
      return this.add(-e, t);
    }
    _getPrecLen(e) {
      if (typeof e != "string") {
        e = String(Math.abs(Number(e || "")));
      }
      let t = e.indexOf(".") + 1;
      if (t) {
        return e.length - t;
      } else {
        return 0;
      }
    }
    _adjustPrec(e) {
      let t = this.getProp("precision");
      if (typeof t == "number" && e !== "" && e !== null && !Number.isNaN(Number(e))) {
        e = Number(e).toFixed(t);
      }
      return safeValueToStringUtil.safeToString(e);
    }
    doFormat() {
      let e;
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let n = this.getProp("formatter");
      e = i ? this._adjustPrec(t) : safeValueToStringUtil.safeToString(t);
      if (typeof n == "function") {
        e = n(e);
      }
      return e;
    }
    fetchMinOrMax(e) {
      let {
        min: t,
        max: i
      } = this.getProps();
      if (e < t) {
        return t;
      } else if (e > i) {
        return i;
      } else {
        return e;
      }
    }
    doParse(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let i = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      let n = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      if (typeof e == "number") {
        if (n) {
          e = this.fetchMinOrMax(e);
        }
        if (i) {
          e = this._adjustPrec(e);
        }
        return toNumberUtil_1.toNumber(e);
      }
      let s = this.getProp("parser");
      if (typeof s == "function") {
        e = s(e);
      }
      if (t && typeof e == "string") {
        let t = e.indexOf(".") === -1 || e.indexOf(".") > -1 && (e === "0" || e.lastIndexOf("0") < e.length - 1);
        let i = e.lastIndexOf(".") < e.length - 1 && e.split("").filter(e => e === ".").length < 2;
        if (!t || !i) {
          return NaN;
        }
      }
      if (i) {
        e = this._adjustPrec(e);
      }
      if (typeof e == "string" && e.length) {
        if (n) {
          return this.fetchMinOrMax(toNumberUtil_1.toNumber(e));
        } else {
          return toNumberUtil_1.toNumber(e);
        }
      } else {
        return NaN;
      }
    }
    afterParser(e) {
      let t = this.getProp("parser");
      if (typeof e == "string" && typeof t == "function") {
        return safeValueToStringUtil.safeToString(t(e));
      } else {
        return safeValueToStringUtil.safeToString(e);
      }
    }
    toNumber(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (typeof e == "number") {
        return e;
      }
      if (typeof e == "string") {
        let i = this.getProp("parser");
        if (typeof i == "function") {
          e = i(e);
        }
        if (t) {
          e = this._adjustPrec(e);
        }
      }
      return toNumberUtil_1.toNumber(e);
    }
    isValidNumber(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (typeof e == "number" && !isNaN(e)) {
        let {
          min: i,
          max: n,
          precision: s
        } = this.getProps();
        let a = this._getPrecLen(e);
        if (e >= i && e <= n && (!t || typeof s == "number" && a <= s || typeof s != "number")) {
          return true;
        }
      }
      return false;
    }
    isValidString(e) {
      if (typeof e == "string" && e.length) {
        let t = this.doParse(e);
        return this.isValidNumber(t);
      }
      return false;
    }
    notifyChange(e, t) {
      if (e == null || e === "") {
        this._adapter.notifyChange("", t);
      } else {
        let i = this.toNumber(e, true);
        if (typeof i != "number" || isNaN(i)) {
          this._adapter.notifyChange(this.afterParser(e), t);
        } else {
          this._adapter.notifyChange(i, t);
          this.notifyNumberChange(i, t);
        }
      }
    }
    notifyNumberChange(e, t) {
      let {
        number: i
      } = this.getStates();
      if (this.isValidNumber(e) && e !== i) {
        this._adapter.notifyNumberChange(e, t);
      }
    }
    updateStates(e, t) {
      this._adapter.updateStates(e, t);
    }
  }
  var chevronUpIcon = require("chevron-up-icon") /*id: 743994*/;
  var chevronDownIcon = require("chevron-down-icon") /*id: 36033*/;
  function em(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  class eb extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        setValue: (e, t) => this.setState({
          value: e
        }, t),
        setNumber: (e, t) => this.setState({
          number: e
        }, t),
        setFocusing: (e, t) => this.setState({
          focusing: e
        }, t),
        setHovering: e => this.setState({
          hovering: e
        }),
        notifyChange: function () {
          return e.props.onChange(...arguments);
        },
        notifyNumberChange: function () {
          return e.props.onNumberChange(...arguments);
        },
        notifyBlur: e => this.props.onBlur(e),
        notifyFocus: e => this.props.onFocus(e),
        notifyUpClick: (e, t) => this.props.onUpClick(e, t),
        notifyDownClick: (e, t) => this.props.onDownClick(e, t),
        notifyKeyDown: e => this.props.onKeyDown(e),
        registerGlobalEvent: (e, t) => {
          if (e && typeof t == "function") {
            this.adapter.unregisterGlobalEvent(e);
            this.adapter.setCache(e, t);
            document.addEventListener(e, t);
          }
        },
        unregisterGlobalEvent: e => {
          if (e) {
            let t = this.adapter.getCache(e);
            document.removeEventListener(e, t);
            this.adapter.setCache(e, null);
          }
        },
        recordCursorPosition: () => {
          try {
            if (this.inputNode) {
              this.cursorStart = this.inputNode.selectionStart;
              this.cursorEnd = this.inputNode.selectionEnd;
              this.currentValue = this.inputNode.value;
              this.cursorBefore = this.inputNode.value.substring(0, this.cursorStart);
              this.cursorAfter = this.inputNode.value.substring(this.cursorEnd);
            }
          } catch (e) {}
        },
        restoreByAfter: e => {
          if (nullCheckUtil_1.isNil(e)) {
            return false;
          }
          let t = this.inputNode.value;
          let i = t.lastIndexOf(e);
          return i !== -1 && i + e.length === t.length && (this.adapter.fixCaret(i, i), true);
        },
        restoreCursor: function (t = e.cursorAfter) {
          return !nullCheckUtil_1.isNil(t) && Array.prototype.some.call(t, (i, n) => {
            let s = t.substring(n);
            return e.adapter.restoreByAfter(s);
          });
        },
        fixCaret: (e, t) => {
          if (e !== undefined && t !== undefined && this.inputNode && this.inputNode.value) {
            try {
              let i = this.inputNode.selectionStart;
              let n = this.inputNode.selectionEnd;
              if (e !== i || t !== n) {
                this.inputNode.setSelectionRange(e, t);
              }
            } catch (e) {}
          }
        },
        setClickUpOrDown: e => {
          this.clickUpOrDown = e;
        },
        updateStates: (e, t) => {
          this.setState(e, t);
        }
      });
    }
    constructor(e) {
      super(e);
      this.setInputRef = e => {
        let {
          forwardedRef: t
        } = this.props;
        this.inputNode = e;
        if (t && typeof t == "object") {
          t.current = e;
        } else if (typeof t == "function") {
          t(e);
        }
      };
      this.handleInputFocus = e => this.foundation.handleInputFocus(e);
      this.handleInputChange = (e, t) => this.foundation.handleInputChange(e, t);
      this.handleInputBlur = e => this.foundation.handleInputBlur(e);
      this.handleInputKeyDown = e => this.foundation.handleInputKeyDown(e);
      this.handleInputMouseEnter = e => this.foundation.handleInputMouseEnter(e);
      this.handleInputMouseLeave = e => this.foundation.handleInputMouseLeave(e);
      this.handleInputMouseMove = e => this.foundation.handleInputMouseMove(e);
      this.handleUpClick = e => this.foundation.handleUpClick(e);
      this.handleDownClick = e => this.foundation.handleDownClick(e);
      this.handleMouseUp = e => this.foundation.handleMouseUp(e);
      this.handleMouseLeave = e => this.foundation.handleMouseLeave(e);
      this.renderButtons = () => {
        let {
          prefixCls: e,
          disabled: t,
          innerButtons: i,
          max: a,
          min: o
        } = this.props;
        let {
          hovering: l,
          focusing: d,
          number: h
        } = this.state;
        let p = t || h === a;
        let u = t || h === o;
        let c = r(`${e}-number-suffix-btns`, {
          [`${e}-number-suffix-btns-inner`]: i,
          [`${e}-number-suffix-btns-inner-hover`]: i && l && !d
        });
        let f = r(`${e}-number-button`, `${e}-number-button-up`, {
          [`${e}-number-button-up-disabled`]: t,
          [`${e}-number-button-up-not-allowed`]: p
        });
        let g = r(`${e}-number-button`, `${e}-number-button-down`, {
          [`${e}-number-button-down-disabled`]: t,
          [`${e}-number-button-down-not-allowed`]: u
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: c
        }, reactCoreLibraryReexport.createElement("span", {
          className: f,
          onMouseDown: p ? emptyExportFunction.emptyFunction : this.handleUpClick,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave
        }, reactCoreLibraryReexport.createElement(chevronUpIcon.ChevronUpIcon, {
          size: "extra-small"
        })), reactCoreLibraryReexport.createElement("span", {
          className: g,
          onMouseDown: u ? emptyExportFunction.emptyFunction : this.handleDownClick,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave
        }, reactCoreLibraryReexport.createElement(chevronDownIcon.ChevronDownIcon, {
          size: "extra-small"
        })));
      };
      this.renderSuffix = () => {
        let {
          innerButtons: e,
          suffix: t
        } = this.props;
        let {
          hovering: i,
          focusing: n
        } = this.state;
        if (e && (i || n)) {
          return this.renderButtons();
        } else {
          return t;
        }
      };
      this.state = {
        value: "",
        number: null,
        focusing: !!e.autofocus,
        hovering: false
      };
      this.inputNode = null;
      this.foundation = new ec(this.adapter);
      this.clickUpOrDown = false;
    }
    componentDidUpdate(e) {
      let t;
      let {
        value: i,
        preventScroll: n
      } = this.props;
      let {
        focusing: s
      } = this.state;
      if (i !== e.value && !ea(i, e.value)) {
        if (nullCheckUtil_1.isNil(i) || i === "") {
          t = "";
          this.foundation.updateStates({
            value: t,
            number: null
          });
        } else {
          let e = i;
          if (typeof i == "number") {
            e = this.foundation.doFormat(i);
          }
          let n = this.foundation.doParse(e, false, true, true);
          let a = typeof i == "number" ? i : this.foundation.doParse(e, false, false, false);
          if (s) {
            if (this.foundation.isValidNumber(n) && n !== this.state.number) {
              let e = {
                number: n
              };
              if (this.clickUpOrDown) {
                e.value = this.foundation.doFormat(e.number, true);
                t = e.value;
              }
              this.foundation.updateStates(e, () => this.adapter.restoreCursor());
            } else if (flowDocPreviewCheck.validateNonNumber(a)) {
              this.foundation.updateStates({
                value: e
              });
            } else {
              t = this.foundation.doFormat(a, false);
              this.foundation.updateStates({
                value: t
              });
            }
          } else if (this.foundation.isValidNumber(n)) {
            t = this.foundation.doFormat(n);
            this.foundation.updateStates({
              number: n,
              value: t
            });
          } else {
            t = "";
            this.foundation.updateStates({
              number: null,
              value: t
            });
          }
        }
        if (t && isStringTypeCheck.isString(t) && t !== String(this.props.value)) {
          this.foundation.notifyChange(t, null);
        }
      }
      if (this.clickUpOrDown && this.props.keepFocus && this.state.focusing && document.activeElement !== this.inputNode) {
        this.inputNode.focus({
          preventScroll: n
        });
      }
    }
    render() {
      let e = this.props;
      let {
        disabled: t,
        className: i,
        prefixCls: n,
        min: a,
        max: o,
        step: l,
        shiftStep: d,
        precision: h,
        formatter: p,
        parser: u,
        forwardedRef: c,
        onUpClick: f,
        onDownClick: g,
        pressInterval: m,
        pressTimeout: b,
        suffix: y,
        size: v,
        hideButtons: C,
        innerButtons: E,
        style: S,
        onNumberChange: _,
        keepFocus: O,
        defaultValue: w
      } = e;
      let P = em(e, ["disabled", "className", "prefixCls", "min", "max", "step", "shiftStep", "precision", "formatter", "parser", "forwardedRef", "onUpClick", "onDownClick", "pressInterval", "pressTimeout", "suffix", "size", "hideButtons", "innerButtons", "style", "onNumberChange", "keepFocus", "defaultValue"]);
      let {
        value: I,
        number: T
      } = this.state;
      let x = r(i, `${n}-number`, {
        [`${n}-number-size-${v}`]: v
      });
      let F = this.renderButtons();
      let k = {
        "aria-disabled": t,
        step: l
      };
      if (T) {
        k["aria-valuenow"] = T;
      }
      if (o !== Infinity) {
        k["aria-valuemax"] = o;
      }
      if (a !== -Infinity) {
        k["aria-valuemin"] = a;
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: x,
        style: S,
        onMouseMove: e => this.handleInputMouseMove(e),
        onMouseEnter: e => this.handleInputMouseEnter(e),
        onMouseLeave: e => this.handleInputMouseLeave(e)
      }, reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({
        role: "spinbutton"
      }, k, P, {
        size: v,
        disabled: t,
        ref: this.setInputRef,
        value: I,
        onFocus: this.handleInputFocus,
        onChange: this.handleInputChange,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        suffix: this.renderSuffix()
      })), C || E ? null : F);
    }
  }
  eb.propTypes = {
    "aria-label": l.string,
    "aria-labelledby": l.string,
    "aria-invalid": l.bool,
    "aria-errormessage": l.string,
    "aria-describedby": l.string,
    "aria-required": l.bool,
    autofocus: l.bool,
    clearIcon: l.node,
    className: l.string,
    defaultValue: l.oneOfType([l.number, l.string]),
    disabled: l.bool,
    formatter: l.func,
    forwardedRef: l.any,
    hideButtons: l.bool,
    innerButtons: l.bool,
    insetLabel: l.node,
    insetLabelId: l.string,
    keepFocus: l.bool,
    max: l.number,
    min: l.number,
    parser: l.func,
    precision: l.number,
    prefixCls: l.string,
    pressInterval: l.number,
    pressTimeout: l.number,
    preventScroll: l.bool,
    shiftStep: l.number,
    step: l.number,
    style: l.object,
    suffix: l.any,
    value: l.oneOfType([l.number, l.string]),
    onBlur: l.func,
    onChange: l.func,
    onDownClick: l.func,
    onKeyDown: l.func,
    onNumberChange: l.func,
    onUpClick: l.func
  };
  eb.defaultProps = {
    forwardedRef: emptyExportFunction.emptyFunction,
    innerButtons: false,
    keepFocus: false,
    max: Infinity,
    min: -Infinity,
    prefixCls: ed.PREFIX,
    pressInterval: eh.DEFAULT_PRESS_TIMEOUT,
    pressTimeout: eh.DEFAULT_PRESS_TIMEOUT,
    shiftStep: eh.DEFAULT_SHIFT_STEP,
    size: ep.DEFAULT_SIZE,
    step: eh.DEFAULT_STEP,
    onBlur: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onDownClick: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onKeyDown: emptyExportFunction.emptyFunction,
    onNumberChange: emptyExportFunction.emptyFunction,
    onUpClick: emptyExportFunction.emptyFunction
  };
  var ey = safeObjectPathUtils.mergeObjects(reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(eb, Object.assign({}, e, {
      forwardedRef: t
    }));
  }), eb);
  var semiSelectComponent = require("semi-select-component") /*id: 981226*/;
  var checkboxComponent = require("checkbox-component") /*id: 517004*/;
  var checkboxGroupComponent = require("checkbox-group-component") /*id: 654013*/;
  var radioComponent = require("radio-component") /*id: 39445*/;
  var radioGroupComponent = require("radio-group-component") /*id: 579832*/;
  var semiDatepickerComponent = require("semi-datepicker-component") /*id: 927627*/;
  var switchAdapterComponent = require("switch-adapter-component") /*id: 962937*/;
  var sliderComponentAdapter = require("slider-component-adapter") /*id: 938680*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var semiTimepickerConstants = require("semi-timepicker-constants") /*id: 561832*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var tooltipPopoverConstants = require("tooltip-popover-constants") /*id: 126132*/;
  var unicodeStringSplit = require("unicode-string-split") /*id: 440940*/;
  var dateFormatParser = require("date-format-parser") /*id: 637973*/;
  var dateFormatUtil = require("date-format-util") /*id: 251899*/;
  var zhCnLocaleDefinition = require("zh-cn-locale-definition") /*id: 466612*/;
  let eL = function (e, t = semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT, i = zhCnLocaleDefinition.zhCNLocale) {
    if (e instanceof Date) {
      return e;
    }
    if (typeof e == "number") {
      return new Date(toNumberUtil_1.toNumber(e));
    }
    if (typeof e == "string") {
      let n = new Date();
      return dateFormatParser.parseDate(e, t, n, {
        locale: i
      });
    }
    if (e !== undefined) {
      return new Date();
    }
  };
  let eA = function (e, t = semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT, i = zhCnLocaleDefinition.zhCNLocale) {
    return dateFormatUtil.formatDate(e, t, {
      locale: i
    });
  };
  let e$ = (e, t) => {
    if (typeof e == "function") {
      let i = e();
      if (Array.isArray(i) && !nullCheckUtil_1.isNil(t) && i.some(e => toNumberUtil_1.toNumber(e) === toNumberUtil_1.toNumber(t))) {
        return true;
      }
    }
    return false;
  };
  let ej = (e, t, i) => {
    if (typeof e == "function") {
      let n = e(t);
      if (Array.isArray(n) && !nullCheckUtil_1.isNil(t) && !nullCheckUtil_1.isNil(i) && n.some(e => toNumberUtil_1.toNumber(e) === toNumberUtil_1.toNumber(i))) {
        return true;
      }
    }
    return false;
  };
  let eM = (e, t, i, n) => {
    if (typeof e == "function") {
      let s = e(t, i);
      if (Array.isArray(s) && !nullCheckUtil_1.isNil(t) && !nullCheckUtil_1.isNil(i) && !nullCheckUtil_1.isNil(n) && s.some(e => toNumberUtil_1.toNumber(e) === toNumberUtil_1.toNumber(n))) {
        return true;
      }
    }
    return false;
  };
  let eV = e => Array.isArray(e) ? [...e] : [];
  let eK = (e, t) => {
    let i = true;
    let n = "BDEGHKLMOPQRSTXYabcehimopqstuwxyz";
    let s = RegExp(`[${n}]`, "g");
    let a = RegExp(`[^${n}]`, "g");
    let r = /[H|m|s]{1,2}/;
    let o = t.split(a);
    let l = t.replace(s, "");
    let d = RegExp(`[${l}]`, "g");
    let h = e.split(d);
    if (o.length !== h.length) {
      i = false;
    } else {
      for (let e = 0, t = h.length; e < t; e++) {
        let t = o[e];
        let n = h[e];
        if (r.test(t) && n.length < t.length) {
          i = false;
          break;
        }
      }
    }
    return i;
  };
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var dateValidationUtil_1 = require("date-validation-util_1") /*id: 152056*/;
  var timezoneConversionUtils = require("timezone-conversion-utils") /*id: 986472*/;
  class eG extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {
      this.initDataFromDefaultValue();
      if ((this._isControlledComponent("open") ? this.getProp("open") : this.getProp("defaultOpen")) && !this._isControlledComponent("open")) {
        this._adapter.registerClickOutSide();
      }
    }
    getPosition() {
      let e = this.getProp("position");
      let t = this.getProp("type") || semiTimepickerConstants.timepickerConfig.DEFAULT_TYPE;
      let i = this.getContext("direction");
      return e || (i === "rtl" ? "bottomRight" : "") || semiTimepickerConstants.timepickerConfig.DEFAULT_POSITION[t];
    }
    isDisabledHMS(e) {
      let {
        hours: t,
        minutes: i,
        seconds: n
      } = e;
      let {
        disabledHours: s,
        disabledMinutes: a,
        disabledSeconds: r
      } = this.getProps();
      let o = !nullCheckUtil_1.isNil(t) && e$(s, t);
      let l = !nullCheckUtil_1.isNil(t) && !nullCheckUtil_1.isNil(i) && ej(a, t, i);
      let d = !nullCheckUtil_1.isNil(t) && !nullCheckUtil_1.isNil(i) && !nullCheckUtil_1.isNil(n) && eM(r, t, i, n);
      return o || l || d;
    }
    isValidTimeZone(e) {
      return ["string", "number"].includes(typeof e) && e !== "";
    }
    getDefaultFormatIfNeed() {
      if (this._isInProps("format")) {
        return this.getProp("format");
      } else if (this.getProp("use12Hours")) {
        return semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT_A;
      } else {
        return semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT;
      }
    }
    initDataFromDefaultValue() {
      let e = this.getProp("defaultValue");
      let t = this.getProp("value");
      let i = this.getProp("timeZone");
      let n = this.getValidFormat();
      let {
        rangeSeparator: s,
        dateFnsLocale: a
      } = this.getProps();
      if (!Array.isArray(t = t || e)) {
        t = t ? [t] : [];
      }
      let r = [];
      let o = false;
      t.forEach(e => {
        let t = eL(e, n, a);
        if (!isNaN(t.getTime())) {
          r.push(this.isValidTimeZone(i) ? timezoneConversionUtils.utcToZonedTime(t, i) : t);
        }
      });
      let l = [true, false];
      r.map((e, t) => {
        l[t] = function (e) {
          validateArgumentCount.validateArgCount(1, arguments);
          return dateNormalizer.normalizeDate(e).getHours();
        }(e) < 12;
      });
      if (r.length === t.length) {
        t = r;
      } else if ((t = []).length) {
        o = true;
      }
      let d = "";
      if (!o) {
        d = t.map(e => eA(e, n, a)).join(s);
      }
      this.setState({
        isAM: l,
        value: t,
        inputValue: d,
        invalid: o
      });
    }
    getValidFormat(e) {
      let t = e;
      if (nullCheckUtil_1.isNil(t)) {
        t = this.getDefaultFormatIfNeed();
      }
      if (typeof t != "string") {
        t = semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT;
      }
      return t;
    }
    handlePanelChange(e, t = 0) {
      let i = this.getValidFormat();
      let n = this.getProp("dateFnsLocale");
      let s = this.getState("value");
      let a = this.getState("isAM");
      let r = eV(s);
      a = eV(a);
      if (e) {
        let o = !!e.isAM;
        let l = eL(e.timeStampValue, i, n);
        r[t] = l;
        a[t] = o;
        let d = this.formatValue(r);
        if (this.getState("isAM")[t] !== e.isAM) {
          this.setState({
            isAM: a
          });
        }
        if (!this._isControlledComponent("value")) {
          let e = this.validateDates(r);
          this.setState({
            isAM: a,
            value: r,
            inputValue: d,
            invalid: e
          });
        }
        if (this._hasChanged(r, s)) {
          this._notifyChange(r, d);
        }
      }
    }
    refreshProps(e = {}) {
      let {
        value: t,
        timeZone: i,
        __prevTimeZone: n
      } = e;
      let s = this.parseValue(t);
      let a = s.some(e => isNaN(Number(e)));
      if (!a) {
        if (this.isValidTimeZone(i)) {
          s = s.map(e => timezoneConversionUtils.utcToZonedTime(this.isValidTimeZone(n) ? timezoneConversionUtils.zonedTimeToUtc(e, n) : e, i));
        }
        a = s.some(e => this.isDisabledHMS({
          hours: e.getHours(),
          minutes: e.getMinutes(),
          seconds: e.getSeconds()
        }));
      }
      let r = this.formatValue(s);
      this.setState({
        value: s,
        invalid: a,
        inputValue: r
      });
    }
    handleFocus(e) {
      if (!this.getState("open")) {
        this.handlePanelOpen();
      }
      this._adapter.notifyFocus(e);
    }
    setPanel(e) {
      this._adapter.togglePanel(e);
    }
    destroy() {
      this._adapter.unregisterClickOutSide();
    }
    handlePanelOpen() {
      if (!this._isControlledComponent("open")) {
        this._adapter.registerClickOutSide();
        this.setPanel(true);
      }
      this._adapter.notifyOpenChange(true);
    }
    handlePanelClose(e, t) {
      if (!this._isControlledComponent("open")) {
        this._adapter.unregisterClickOutSide();
        this.setPanel(false);
      }
      this._adapter.notifyOpenChange(false);
      this._adapter.notifyBlur(t);
    }
    handleVisibleChange(e) {
      if (!this._isControlledComponent("open")) {
        this._adapter.togglePanel(e);
      }
      this._adapter.notifyOpenChange(e);
    }
    handleInputChange(e) {
      this._adapter.setInputValue(e);
      let t = this.getProp("rangeSeparator");
      let i = unicodeStringSplit.splitUnicodeString(e, t);
      let n = this.getValidFormat();
      if (e !== "" && i.some(e => !eK(e, n))) {
        return;
      }
      let s = this.parseInput(e);
      let a = this.validateDates(s);
      let r = {
        invalid: a
      };
      let o = this.getState("value");
      let l = eV(o);
      if (!a) {
        r.value = s;
        l = [...s];
      }
      if (!this._isControlledComponent("value")) {
        this.setState(r);
      }
      if (this._hasChanged(l, o)) {
        this._notifyChange(l, e);
      }
    }
    doValidate(e) {
      if (typeof e == "string") {
        return this.validateStr(e);
      } else if (Array.isArray(e)) {
        return this.validateDates(e);
      } else {
        return undefined;
      }
    }
    validateStr(e = "") {
      let t = this.parseInput(e);
      return this.validateDates(t);
    }
    validateDates(e = []) {
      let t = e.some(e => isNaN(Number(e)));
      t ||= e.some(e => this.isDisabledHMS({
        hours: e.getHours(),
        minutes: e.getMinutes(),
        seconds: e.getSeconds()
      }));
      return t;
    }
    handleInputBlur(e) {
      let t = this.getState("invalid");
      let i = this.getState("inputValue");
      let n = this.getState("value");
      if (i) {
        if (t) {
          this.setState({
            inputValue: this.formatValue(n),
            invalid: false
          });
        } else {
          this.setState({
            inputValue: this.formatValue(n)
          });
        }
      } else {
        this.setState({
          inputValue: "",
          value: [],
          invalid: false
        });
      }
    }
    formatValue(e) {
      let t = this.getValidFormat();
      let i = this.getProp("rangeSeparator");
      let n = this.getProp("dateFnsLocale");
      let s = e;
      if (s && !Array.isArray(s)) {
        s = s[s];
      }
      if (s && Array.isArray(s)) {
        return s.map(e => {
          let i;
          if (isUndefinedCheck.isUndefined(e)) {
            return "";
          } else {
            return eA(e, t, n);
          }
        }).join(i);
      }
    }
    parseInput(e) {
      let t = this.getValidFormat();
      let i = this.getProp("rangeSeparator");
      let n = this.getProp("dateFnsLocale");
      if (e && typeof e == "string") {
        return unicodeStringSplit.splitUnicodeString(e, i).map(e => eL(e, t, n));
      } else {
        return [];
      }
    }
    parseValue(e = []) {
      let t = this.getValidFormat();
      let i = this.getProp("dateFnsLocale");
      let n = e;
      if (!Array.isArray(n)) {
        n = n ? [n] : [];
      }
      if (Array.isArray(n)) {
        return n.map(e => eL(e, t, i));
      } else {
        return [];
      }
    }
    _notifyChange(e, t) {
      let i = t;
      let n = e;
      let s = this.getProp("timeZone");
      if (this._adapter.isRangePicker()) {
        let e = this.getProp("rangeSeparator");
        i = unicodeStringSplit.splitUnicodeString(t, e);
      } else {
        n = Array.isArray(n) ? n[0] : n;
      }
      if (this.isValidTimeZone(s) && n) {
        let e = this.getValidFormat();
        if (Array.isArray(n)) {
          i = (n = n.map(e => timezoneConversionUtils.zonedTimeToUtc(e, s))).map(t => dateFormatUtil.formatDate(t, e));
        } else {
          n = timezoneConversionUtils.zonedTimeToUtc(n, s);
          i = dateFormatUtil.formatDate(n, e);
        }
      }
      if (this.getProp("onChangeWithDateFirst")) {
        this._adapter.notifyChange(n, i);
      } else {
        this._adapter.notifyChange(i, n);
      }
    }
    _hasChanged(e = [], t = []) {
      let i = this.getValidFormat();
      let n = this.getProp("dateFnsLocale");
      return e.length !== t.length || e.some((e, s) => {
        let a = t[s];
        return !dateValidationUtil_1.isValidDate(e) || !dateValidationUtil_1.isValidDate(a) || eA(e, i, n) !== eA(a, i, n);
      });
    }
  }
  var timePickerPanelComponent = require("time-picker-panel-component") /*id: 107883*/;
  class eX extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {}
    destroy() {}
    handleFocus(e) {
      this.storeCursor();
      this._adapter.notifyFocus(e);
    }
    handleChange(e) {
      this.storeCursor();
      this._adapter.notifyChange(e);
    }
    handleBlur(e) {
      this.clearCursor();
      this._adapter.notifyBlur(e);
    }
    storeCursor() {
      let e = this.getCache("inputNode");
      if (e) {
        let {
          selectionStart: t
        } = e;
        this.setCache("cursorIndex", t);
      }
    }
    restoreCursor() {
      let e = this.getCache("inputNode");
      let t = this.getCache("cursorIndex");
      if (e && !nullCheckUtil_1.isNil(t)) {
        e.selectionStart = t;
        e.selectionEnd = t;
      }
    }
    clearCursor() {
      this.setCache("cursorIndex", null);
      this.setCache("beforeStr", null);
      this.setCache("afterStr", null);
    }
  }
  var clockIconComponent = require("clock-icon-component") /*id: 667634*/;
  function eq(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  class eJ extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.setRef = e => this.adapter.setCache("inputNode", e);
      this.handleClick = e => this.props.onClick(e);
      this.handleFocus = e => this.foundation.handleFocus(e);
      this.handleBlur = e => this.foundation.handleBlur(e);
      this.handleChange = e => this.foundation.handleChange(e);
      this.foundation = new eX(this.adapter);
      this.state = {};
    }
    componentDidMount() {
      super.componentDidMount();
      let {
        focusOnOpen: e,
        preventScroll: t
      } = this.props;
      if (e) {
        (window.requestAnimationFrame || window.setTimeout)(() => {
          let e = this.adapter.getCache("inputNode");
          if (e) {
            e.focus({
              preventScroll: t
            });
            e.select();
          }
        });
      }
    }
    componentDidUpdate(e) {
      let {
        timeStampValue: t
      } = this.props;
      if (this.isControlled("timeStampValue") && t !== this.state.timeStampValue) {
        this.foundation.restoreCursor();
      }
      if (this.props.value !== e.value) {
        this.foundation.restoreCursor();
      }
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        notifyChange: function () {
          return e.props.onChange(...arguments);
        },
        notifyFocus: function () {
          return e.props.onFocus(...arguments);
        },
        notifyBlur: function () {
          return e.props.onBlur(...arguments);
        }
      });
    }
    getInput() {
      let e = this.props;
      let {
        prefixCls: t,
        placeholder: i,
        inputReadOnly: n,
        onFocus: a,
        disabled: o,
        type: l,
        locale: d,
        localeCode: h,
        insetLabel: p,
        validateStatus: u,
        value: c,
        onChange: f,
        invalid: g,
        format: m,
        clearText: b,
        disabledHours: y,
        disabledMinutes: v,
        disabledSeconds: C,
        onEsc: E,
        defaultOpenValue: S,
        currentSelectPanel: _,
        focusOnOpen: O,
        timeStampValue: w,
        timeZone: P,
        defaultOpen: I,
        dateFnsLocale: T
      } = e;
      let x = eq(e, ["prefixCls", "placeholder", "inputReadOnly", "onFocus", "disabled", "type", "locale", "localeCode", "insetLabel", "validateStatus", "value", "onChange", "invalid", "format", "clearText", "disabledHours", "disabledMinutes", "disabledSeconds", "onEsc", "defaultOpenValue", "currentSelectPanel", "focusOnOpen", "timeStampValue", "timeZone", "defaultOpen", "dateFnsLocale"]);
      let F = r(`${t}-input`, {
        [`${t}-input-invalid`]: g,
        [`${t}-input-readonly`]: n
      });
      let k = g ? "error" : u;
      return reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({}, x, {
        hideSuffix: true,
        className: F,
        ref: this.setRef,
        value: c,
        placeholder: i || d.placeholder[l],
        readonly: !!n,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        suffix: reactCoreLibraryReexport.createElement(clockIconComponent.ClockIcon, {
          onClick: this.handleClick
        }),
        validateStatus: k,
        disabled: o,
        insetLabel: p
      }));
    }
    render() {
      let {
        prefixCls: e
      } = this.props;
      return reactCoreLibraryReexport.createElement("div", {
        className: `${e}-input-wrap`
      }, this.getInput());
    }
  }
  eJ.propTypes = {
    borderless: l.bool,
    format: l.string,
    prefixCls: l.string,
    placeholder: l.string,
    clearText: l.string,
    inputReadOnly: l.bool,
    hourOptions: l.array,
    minuteOptions: l.array,
    secondOptions: l.array,
    disabledHours: l.func,
    disabledMinutes: l.func,
    disabledSeconds: l.func,
    onChange: l.func,
    onFocus: l.func,
    onBlur: l.func,
    onEsc: l.func,
    onClick: l.func,
    defaultOpenValue: l.object,
    currentSelectPanel: l.string,
    focusOnOpen: l.bool,
    timeStampValue: l.any,
    locale: l.object,
    localeCode: l.string,
    insetLabel: l.node,
    validateStatus: l.string,
    preventScroll: l.bool
  };
  eJ.defaultProps = {
    borderless: false,
    inputReadOnly: false,
    onChange: emptyExportFunction.emptyFunction,
    onBlur: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onClick: emptyExportFunction.emptyFunction,
    disabledHours: emptyExportFunction.emptyFunction,
    disabledMinutes: emptyExportFunction.emptyFunction,
    disabledSeconds: emptyExportFunction.emptyFunction,
    format: semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT
  };
  let eQ = {
    panelHeader: l.oneOfType([l.node, l.string]),
    panelFooter: l.oneOfType([l.node, l.string])
  };
  let e0 = [l.string, l.number, l.instanceOf(Date)];
  let e1 = l.oneOfType([...e0, l.arrayOf(l.string), l.arrayOf(l.number), l.arrayOf(l.instanceOf(Date))]);
  var triggerRenderWrapper = require("trigger-render-wrapper") /*id: 921310*/;
  function e4(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  class e9 extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      var t;
      super(e);
      t = this;
      this.onCurrentSelectPanelChange = e => {
        this.setState({
          currentSelectPanel: e
        });
      };
      this.handlePanelChange = (e, t) => this.foundation.handlePanelChange(e, t);
      this.handleInput = e => this.foundation.handleInputChange(e);
      this.createPanelProps = function (e = 0) {
        let {
          panels: i,
          panelFooter: n,
          panelHeader: s,
          locale: a
        } = t.props;
        let r = {
          panelHeader: s,
          panelFooter: n
        };
        if (t.adapter.isRangePicker()) {
          let t = {
            0: a.begin,
            1: a.end
          };
          r.panelHeader = objectPathGetDefault.getObjectPathDefault(i, e, nullCheckUtil_1.isNil(s) ? objectPathGetDefault.getObjectPathDefault(t, e, null) : Array.isArray(s) ? s[e] : s);
          r.panelFooter = objectPathGetDefault.getObjectPathDefault(i, e, Array.isArray(n) ? n[e] : n);
        }
        return r;
      };
      this.handlePanelVisibleChange = e => this.foundation.handleVisibleChange(e);
      this.openPanel = () => {
        this.foundation.handlePanelOpen();
      };
      this.handleFocus = e => {
        this.foundation.handleFocus(e);
      };
      this.handleBlur = e => this.foundation.handleInputBlur(e);
      this.setTimePickerRef = e => this.timePickerRef.current = e;
      let {
        format: i = semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT
      } = e;
      this.state = {
        open: e.open || e.defaultOpen || false,
        value: [],
        inputValue: "",
        currentSelectPanel: 0,
        isAM: [true, false],
        showHour: !!i.match(/HH|hh|H|h/g),
        showMinute: !!i.match(/mm/g),
        showSecond: !!i.match(/ss/g),
        invalid: undefined
      };
      this.foundation = new eG(this.adapter);
      this.timePickerRef = reactCoreLibraryReexport.createRef();
      this.savePanelRef = reactCoreLibraryReexport.createRef();
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        togglePanel: e => {
          this.setState({
            open: e
          });
        },
        registerClickOutSide: () => {
          if (this.clickOutSideHandler) {
            this.adapter.unregisterClickOutSide();
          }
          this.clickOutSideHandler = e => {
            let t = this.savePanelRef && this.savePanelRef.current;
            let i = e.target && t && t.contains(e.target);
            if ((!this.timePickerRef || !this.timePickerRef.current || !this.timePickerRef.current.contains(e.target)) && !i) {
              this.foundation.handlePanelClose(true, e);
            }
          };
          document.addEventListener("mousedown", this.clickOutSideHandler);
        },
        setInputValue: (e, t) => this.setState({
          inputValue: e
        }, t),
        unregisterClickOutSide: () => {
          if (this.clickOutSideHandler) {
            document.removeEventListener("mousedown", this.clickOutSideHandler);
            this.clickOutSideHandler = null;
          }
        },
        notifyOpenChange: function () {
          return e.props.onOpenChange(...arguments);
        },
        notifyChange: (e, t) => this.props.onChange && this.props.onChange(e, t),
        notifyFocus: function () {
          return e.props.onFocus && e.props.onFocus(...arguments);
        },
        notifyBlur: function () {
          return e.props.onBlur && e.props.onBlur(...arguments);
        },
        isRangePicker: () => this.props.type === semiTimepickerConstants.timepickerConfig.TYPE_TIME_RANGE_PICKER
      });
    }
    static getDerivedStateFromProps(e, t) {
      if ("open" in e && e.open !== t.open) {
        return {
          open: e.open
        };
      } else {
        return null;
      }
    }
    componentDidUpdate(e) {
      if (this.isControlled("value") && this.props.value !== e.value) {
        this.foundation.refreshProps(Object.assign({}, this.props));
      } else if (this.props.timeZone !== e.timeZone) {
        this.foundation.refreshProps({
          timeZone: this.props.timeZone,
          __prevTimeZone: e.timeZone,
          value: this.state.value
        });
      }
    }
    getPanelElement() {
      let {
        prefixCls: e,
        type: t
      } = this.props;
      let {
        isAM: i,
        value: n
      } = this.state;
      let a = this.foundation.getDefaultFormatIfNeed();
      let o = [reactCoreLibraryReexport.createElement(timePickerPanelComponent.TimePickerPanel, Object.assign({}, this.props, {
        key: 0,
        format: a,
        isAM: i[0],
        timeStampValue: n[0],
        prefixCls: `${e}-panel`,
        onChange: e => this.handlePanelChange(e, 0),
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
      }, this.createPanelProps(0)))];
      if (t === semiTimepickerConstants.timepickerConfig.TYPE_TIME_RANGE_PICKER) {
        o.push(reactCoreLibraryReexport.createElement(timePickerPanelComponent.TimePickerPanel, Object.assign({}, this.props, {
          key: 1,
          format: a,
          isAM: i[1],
          timeStampValue: n[1],
          prefixCls: `${e}-panel`,
          onChange: e => this.handlePanelChange(e, 1),
          onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
        }, this.createPanelProps(1))));
      }
      let l = r({
        [semiTimepickerConstants.timepickerClasses.RANGE_PANEL_LISTS]: this.adapter.isRangePicker()
      });
      return reactCoreLibraryReexport.createElement("div", {
        ref: this.savePanelRef,
        className: l
      }, o.map(e => e));
    }
    getPopupClassName() {
      let {
        use12Hours: e,
        prefixCls: t,
        popupClassName: i
      } = this.props;
      let {
        showHour: n,
        showMinute: s,
        showSecond: a
      } = this.state;
      let o = 0;
      if (n) {
        o += 1;
      }
      if (s) {
        o += 1;
      }
      if (a) {
        o += 1;
      }
      if (e) {
        o += 1;
      }
      return r(`${t}-panel`, i, {
        [`${t}-panel-narrow`]: (!n || !s || !a) && !e,
        [semiTimepickerConstants.timepickerClasses.RANGE_PICKER]: this.adapter.isRangePicker()
      }, `${t}-panel-column-${o}`);
    }
    focus() {}
    blur() {}
    render() {
      let e = this.props;
      let {
        prefixCls: t,
        placeholder: i,
        disabled: n,
        defaultValue: a,
        dropdownMargin: o,
        className: l,
        popupStyle: d,
        size: h,
        style: p,
        locale: u,
        localeCode: c,
        zIndex: f,
        getPopupContainer: g,
        insetLabel: m,
        insetLabelId: b,
        inputStyle: y,
        showClear: v,
        panelHeader: C,
        panelFooter: E,
        rangeSeparator: S,
        onOpenChange: _,
        onChangeWithDateFirst: O,
        popupClassName: w,
        hideDisabledOptions: P,
        use12Hours: I,
        minuteStep: T,
        hourStep: x,
        secondStep: F,
        scrollItemProps: k,
        triggerRender: D,
        motion: N,
        autoAdjustOverflow: R,
        stopPropagation: Z
      } = e;
      let L = e4(e, ["prefixCls", "placeholder", "disabled", "defaultValue", "dropdownMargin", "className", "popupStyle", "size", "style", "locale", "localeCode", "zIndex", "getPopupContainer", "insetLabel", "insetLabelId", "inputStyle", "showClear", "panelHeader", "panelFooter", "rangeSeparator", "onOpenChange", "onChangeWithDateFirst", "popupClassName", "hideDisabledOptions", "use12Hours", "minuteStep", "hourStep", "secondStep", "scrollItemProps", "triggerRender", "motion", "autoAdjustOverflow", "stopPropagation"]);
      let A = this.foundation.getDefaultFormatIfNeed();
      let $ = this.foundation.getPosition();
      let j = typeof D == "function";
      let {
        open: M,
        inputValue: V,
        invalid: K,
        value: H
      } = this.state;
      let U = this.getPopupClassName();
      let B = r({
        [`${t}-header`]: true
      });
      let z = r({
        [`${t}-panel`]: true,
        [`${t}-panel-${h}`]: h
      });
      let G = Object.assign(Object.assign({}, L), {
        disabled: n,
        prefixCls: t,
        size: h,
        showClear: !n && v,
        style: y,
        value: V,
        onFocus: this.handleFocus,
        insetLabel: m,
        insetLabelId: b,
        format: A,
        locale: u,
        localeCode: c,
        invalid: K,
        placeholder: i,
        onChange: this.handleInput,
        onBlur: this.handleBlur
      });
      let W = {};
      if (j) {
        W.onClick = this.openPanel;
      }
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        ref: this.setTimePickerRef,
        className: r({
          [t]: true
        }, l),
        style: p
      }, W), reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, {
        getPopupContainer: g,
        zIndex: f,
        prefixCls: z,
        contentClassName: U,
        style: d,
        content: this.getPanelElement(),
        trigger: "custom",
        position: $,
        visible: !n && !!M,
        motion: N,
        margin: o,
        autoAdjustOverflow: R,
        stopPropagation: Z
      }, j ? reactCoreLibraryReexport.createElement(triggerRenderWrapper.TriggerRenderWrapper, {
        triggerRender: D,
        disabled: n,
        value: H,
        inputValue: V,
        onChange: this.handleInput,
        placeholder: i,
        componentName: "TimePicker",
        componentProps: Object.assign({}, this.props)
      }) : reactCoreLibraryReexport.createElement("span", {
        className: B
      }, reactCoreLibraryReexport.createElement(eJ, Object.assign({}, G)))));
    }
  }
  e9.contextType = createContextProvider.context;
  e9.propTypes = Object.assign(Object.assign({
    "aria-labelledby": l.string,
    "aria-invalid": l.bool,
    "aria-errormessage": l.string,
    "aria-describedby": l.string,
    "aria-required": l.bool,
    prefixCls: l.string,
    borderless: l.bool,
    clearText: l.string,
    clearIcon: l.node,
    value: e1,
    inputReadOnly: l.bool,
    disabled: l.bool,
    showClear: l.bool,
    defaultValue: e1,
    open: l.bool,
    defaultOpen: l.bool,
    onOpenChange: l.func,
    position: l.any,
    getPopupContainer: l.func,
    placeholder: l.string,
    format: l.string,
    style: l.object,
    className: l.string,
    popupClassName: l.string,
    popupStyle: l.object,
    disabledHours: l.func,
    disabledMinutes: l.func,
    disabledSeconds: l.func,
    dropdownMargin: l.oneOfType([l.number, l.object]),
    hideDisabledOptions: l.bool,
    onChange: l.func,
    use12Hours: l.bool,
    hourStep: l.number,
    minuteStep: l.number,
    secondStep: l.number,
    focusOnOpen: l.bool,
    autoFocus: l.bool,
    size: l.oneOf(semiTimepickerConstants.timepickerConfig.SIZE),
    stopPropagation: l.bool,
    panels: l.arrayOf(l.shape(eQ)),
    onFocus: l.func,
    onBlur: l.func,
    locale: l.object,
    localeCode: l.string,
    dateFnsLocale: l.object,
    zIndex: l.oneOfType([l.number, l.string]),
    insetLabel: l.node,
    insetLabelId: l.string,
    validateStatus: l.oneOf(semiTimepickerConstants.timepickerConfig.STATUS),
    type: l.oneOf(semiTimepickerConstants.timepickerConfig.TYPES),
    rangeSeparator: l.string,
    triggerRender: l.func,
    timeZone: l.oneOfType([l.string, l.number]),
    scrollItemProps: l.object,
    motion: l.oneOfType([l.bool, l.func, l.object]),
    autoAdjustOverflow: l.bool
  }, eQ), {
    inputStyle: l.object,
    preventScroll: l.bool
  });
  e9.defaultProps = Object.assign({
    autoAdjustOverflow: true,
    borderless: false,
    getPopupContainer: () => document.body,
    showClear: true,
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    rangeSeparator: semiTimepickerConstants.timepickerConfig.DEFAULT_RANGE_SEPARATOR,
    onOpenChange: emptyExportFunction.emptyFunction,
    clearText: "clear",
    prefixCls: semiTimepickerConstants.timepickerClasses.PREFIX,
    inputReadOnly: false,
    style: {},
    stopPropagation: true,
    className: "",
    popupClassName: "",
    popupStyle: {
      left: "0px",
      top: "0px"
    },
    disabledHours: () => [],
    disabledMinutes: () => [],
    disabledSeconds: () => [],
    hideDisabledOptions: false,
    onFocus: emptyExportFunction.emptyFunction,
    onBlur: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onChangeWithDateFirst: true,
    use12Hours: false,
    focusOnOpen: false,
    onKeyDown: emptyExportFunction.emptyFunction,
    size: "default",
    type: semiTimepickerConstants.timepickerConfig.DEFAULT_TYPE,
    motion: true
  }, {});
  class e6 extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        type: e
      } = this.props;
      return reactCoreLibraryReexport.createElement(createContextProvider.context.Consumer, null, t => {
        let {
          timeZone: i
        } = t;
        return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
          componentName: "TimePicker"
        }, (t, n, a) => reactCoreLibraryReexport.createElement(e9, Object.assign({
          timeZone: i,
          placeholder: objectPathGetDefault.getObjectPathDefault(t, ["placeholder", e])
        }, this.props, {
          locale: t,
          localeCode: n,
          dateFnsLocale: a
        })));
      });
    }
  }
  e6.propTypes = e9.propTypes;
  e6.__SemiComponentName__ = "TimePicker";
  e6.defaultProps = commonFrontendUtils.configProxyHandler(e6.__SemiComponentName__, e9.defaultProps);
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var logLevelTypes = require("log-level-types") /*id: 818674*/;
  let ts = {
    PREFIX: `${semiIdentifier.semiIdentifier}-tree-select`,
    PREFIX_TREE: `${semiIdentifier.semiIdentifier}-tree`,
    PREFIX_OPTION: `${semiIdentifier.semiIdentifier}-tree-select-option`
  };
  let ta = {
    SIZE_SET: ["small", "large", "default"],
    SEARCH_POSITION_DROPDOWN: "dropdown",
    SEARCH_POSITION_TRIGGER: "trigger",
    STATUS: logLevelTypes.logLevels
  };
  var treeDataUtilityHelpers = require("tree-data-utility-helpers") /*id: 869686*/;
  var enterKeyCheck = require("enter-key-check") /*id: 943784*/;
  class tl extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this._registerClickOutsideHandler = e => {
        this._adapter.registerClickOutsideHandler(e => {
          this.handlerTriggerBlur(e);
          this.close(e);
        });
      };
      this.clearInputValue = () => {
        let {
          inputValue: e
        } = this.getStates();
        if (e) {
          this._adapter.updateInputValue("");
        }
      };
    }
    init() {
      let {
        searchAutoFocus: e,
        searchPosition: t,
        filterTreeNode: i
      } = this.getProps();
      let n = t === ta.SEARCH_POSITION_TRIGGER && i;
      let s = e && n;
      this._setDropdownWidth();
      if ((this.getProp("defaultOpen") || s) && !this._isDisabled()) {
        this.open();
      }
      if (s) {
        this.handleTriggerFocus(null);
      }
    }
    destroy() {
      this._adapter.unregisterClickOutsideHandler();
    }
    _setDropdownWidth() {
      let e;
      let {
        style: t,
        dropdownMatchSelectWidth: i
      } = this.getProps();
      if (i) {
        e = t && isNumberUtil.isNumber(t.width) ? t.width : t && isStringTypeCheck.isString(t.width) && !t.width.includes("%") ? t.width : this._adapter.getTriggerWidth();
        this._adapter.setOptionWrapperWidth(e);
      }
    }
    _isMultiple() {
      return this.getProp("multiple");
    }
    _isAnimated() {
      return this.getProp("motionExpand");
    }
    _isDisabled(e = {}) {
      return this.getProp("disabled") || e.disabled;
    }
    _isExpandControlled() {
      return this.getProp("expandedKeys");
    }
    _isSelectToClose() {
      return !this.getProp("expandAction");
    }
    _isLoadControlled() {
      return this.getProp("loadedKeys");
    }
    _showFilteredOnly() {
      let {
        inputValue: e
      } = this.getStates();
      let {
        showFilteredOnly: t
      } = this.getProps();
      return !!e && t;
    }
    findDataForValue(e) {
      let {
        value: t,
        defaultValue: i,
        keyMaps: n
      } = this.getProps();
      let s = objectPathGetDefault.getObjectPathDefault(n, "value", "value");
      let a = objectPathGetDefault.getObjectPathDefault(n, "key", "key");
      let r = [];
      if (t) {
        r = Array.isArray(t) ? t : [t];
      } else if (i) {
        r = Array.isArray(i) ? i : [i];
      }
      return r.find(t => t[s] === e || t[a] === e);
    }
    constructDataForValue(e) {
      let {
        treeNodeLabelProp: t,
        keyMaps: i
      } = this.getProps();
      return {
        [objectPathGetDefault.getObjectPathDefault(i, "key", "key")]: e,
        [objectPathGetDefault.getObjectPathDefault(i, "label", t)]: e
      };
    }
    getDataForKeyNotInKeyEntities(e) {
      let {
        onChangeWithObject: t
      } = this.getProps();
      if (t) {
        return this.findDataForValue(e);
      } else {
        return this.constructDataForValue(e);
      }
    }
    getTreeNodeProps(e) {
      let {
        expandedKeys: t = new Set([]),
        selectedKeys: i = [],
        checkedKeys: n = new Set([]),
        halfCheckedKeys: s = new Set([]),
        realCheckedKeys: a = new Set([]),
        keyEntities: r = {},
        filteredKeys: o = new Set([]),
        inputValue: l = "",
        loadedKeys: d,
        loadingKeys: h,
        filteredExpandedKeys: p = new Set([]),
        disabledKeys: u = new Set([])
      } = this.getStates();
      let {
        treeNodeFilterProp: c,
        checkRelation: f
      } = this.getProps();
      let g = r[e];
      if (!g) {
        return null;
      }
      let m = false;
      let b = false;
      if (f === "related") {
        m = n.has(e);
        b = s.has(e);
      } else if (f === "unRelated") {
        m = a.has(e);
        b = false;
      }
      let y = {
        eventKey: e,
        expanded: l ? p.has(e) : t.has(e),
        selected: i.includes(e),
        checked: m,
        halfChecked: b,
        pos: String(g ? g.pos : ""),
        level: g.level,
        filtered: o.has(e),
        keyword: l,
        treeNodeFilterProp: c,
        loading: h.has(e) && !d.has(e),
        loaded: d.has(e)
      };
      if (this.getProp("disableStrictly") && u.has(e)) {
        y.disabled = true;
      }
      return y;
    }
    handleNodeLoad(e, t, i, n) {
      let {
        loadData: s
      } = this.getProps();
      let {
        key: a
      } = i;
      if (!s || e.has(a) || t.has(a)) {
        return {};
      } else {
        s(i).then(() => {
          let e = new Set(this.getState("loadedKeys"));
          let t = new Set(this.getState("loadingKeys"));
          let s = e.add(a);
          let r = new Set([...t]);
          r.delete(a);
          this._adapter.notifyLoad(s, i);
          if (!this._isLoadControlled()) {
            this._adapter.updateState({
              loadedKeys: s
            });
          }
          this._adapter.setState({
            loadingKeys: r
          });
          n();
        });
        return {
          loadingKeys: t.add(a)
        };
      }
    }
    focusInput(e) {
      this._adapter.updateInputFocus(e);
    }
    _notifyMultipleChange(e, t) {
      let {
        keyEntities: i
      } = this.getStates();
      let {
        leafOnly: n,
        checkRelation: s,
        keyMaps: a
      } = this.getProps();
      let r = [];
      if (s === "related") {
        r = treeDataUtilityHelpers.getRootCheckedKeys(e, i, n, true);
      } else if (s === "unRelated") {
        r = e;
      }
      let o = r.map(e => i[e] && i[e].key === e ? i[e].data : this.getDataForKeyNotInKeyEntities(e));
      if (this.getProp("onChangeWithObject")) {
        this._adapter.notifyChangeWithObject(o, t);
      } else {
        let e = treeDataUtilityHelpers.extractNodeValues(o, a);
        this._adapter.notifyChange(e, o, t);
      }
    }
    _notifyChange(e, t) {
      let {
        keyEntities: i
      } = this.getStates();
      let {
        keyMaps: n
      } = this.getProps();
      if (this._isMultiple() && Array.isArray(e)) {
        this._notifyMultipleChange(e, t);
      } else {
        let s = isUndefinedCheck.isUndefined(e) ? e : i[e].data;
        let a = isUndefinedCheck.isUndefined(e) ? e : treeDataUtilityHelpers.extractNodeValues(s, n);
        if (this.getProp("onChangeWithObject")) {
          this._adapter.notifyChangeWithObject(s, t);
        } else {
          this._adapter.notifyChange(a, s, t);
        }
      }
    }
    _notifyFocus(e) {
      this._adapter.notifyFocus(e);
    }
    handleTriggerFocus(e) {
      this._adapter.updateIsFocus(true);
      this._notifyFocus(e);
      this._registerClickOutsideHandler(e);
    }
    _notifyBlur(e) {
      this._adapter.notifyBlur(e);
    }
    handlerTriggerBlur(e) {
      this._adapter.updateIsFocus(false);
      this._notifyBlur(e);
      this._adapter.unregisterClickOutsideHandler();
    }
    toggleHoverState(e) {
      this._adapter.toggleHovering(e);
    }
    open() {
      this._adapter.openMenu();
      this._setDropdownWidth();
    }
    close(e) {
      this._adapter.closeMenu();
      if (this.getProp("motionExpand")) {
        this._adapter.updateState({
          motionKeys: new Set([])
        });
      }
    }
    handleClick(e) {
      let t = this._isDisabled();
      let {
        isOpen: i,
        inputValue: n,
        isFocus: s
      } = this.getStates();
      let {
        searchPosition: a,
        clickTriggerToHide: r
      } = this.getProps();
      if (!t) {
        if (!s) {
          this.handleTriggerFocus(e);
        }
        if (i) {
          if (a === "trigger" && n) {
            return;
          }
          if (r) {
            this.close(e);
          }
        } else {
          this.open();
        }
      }
    }
    handleSelectionEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleClick(e);
      }
    }
    handleClear(e) {
      let {
        searchPosition: t,
        filterTreeNode: i
      } = this.getProps();
      let {
        inputValue: n,
        selectedKeys: s
      } = this.getStates();
      let a = this._isMultiple();
      let r = this._isControlledComponent();
      this._notifyChange(a ? [] : undefined, e);
      if (!r) {
        this._adapter.rePositionDropdown();
        this._adapter.updateState({
          selectedKeys: [],
          checkedKeys: new Set(),
          halfCheckedKeys: new Set(),
          realCheckedKeys: new Set([])
        });
      }
      if (i && t === ta.SEARCH_POSITION_TRIGGER && n !== "") {
        if (isEmptyUtil.isEmpty(s)) {
          this.handleInputChange("");
        } else {
          this.clearInput();
        }
      }
      this._adapter.notifyClear(e);
    }
    handleClearEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleClear(e);
      }
    }
    removeTag(e) {
      let {
        disableStrictly: t,
        checkRelation: i,
        keyMaps: n
      } = this.getProps();
      let {
        keyEntities: s,
        disabledKeys: a,
        realCheckedKeys: r
      } = this.getStates();
      let o = s[e] && s[e].key === e ? s[e].data : this.getDataForKeyNotInKeyEntities(e);
      if (!o[objectPathGetDefault.getObjectPathDefault(n, "disabled", "disabled")] && (!t || !a.has(e))) {
        if (i === "unRelated") {
          let t = new Set(r);
          t.delete(e);
          this._notifyChange([...t], null);
          if (!this._isControlledComponent()) {
            this._adapter.updateState({
              realCheckedKeys: t
            });
            this._adapter.rePositionDropdown();
          }
        } else if (i === "related") {
          let {
            checkedKeys: t,
            halfCheckedKeys: i
          } = this.calcCheckedKeys(e, false);
          this._notifyChange([...t], null);
          if (!this._isControlledComponent()) {
            this._adapter.updateState({
              checkedKeys: t,
              halfCheckedKeys: i
            });
            this._adapter.rePositionDropdown();
          }
        }
        this._adapter.notifySelect(e, false, o);
        this._adapter.rePositionDropdown();
      }
    }
    clearInput() {
      let {
        flattenNodes: e,
        expandedKeys: t,
        selectedKeys: i,
        keyEntities: n,
        treeData: s
      } = this.getStates();
      let {
        keyMaps: a
      } = this.getProps();
      let r = new Set(t);
      this._isExpandControlled();
      let o = treeDataUtilityHelpers.getParentPathKeys(i, n);
      o.forEach(e => r.add(e));
      let l = treeDataUtilityHelpers.flattenTreeToNodes(s, r, a);
      this._adapter.updateState({
        expandedKeys: r,
        flattenNodes: l,
        inputValue: "",
        motionKeys: new Set([]),
        filteredKeys: new Set([]),
        filteredExpandedKeys: new Set(o),
        filteredShownKeys: new Set([])
      });
    }
    handleInputChange(e) {
      this._adapter.updateInputValue(e);
      let {
        flattenNodes: t,
        expandedKeys: i,
        selectedKeys: n,
        keyEntities: s,
        treeData: a
      } = this.getStates();
      let {
        showFilteredOnly: r,
        filterTreeNode: o,
        treeNodeFilterProp: l,
        keyMaps: d
      } = this.getProps();
      let h = l !== "label" ? l : objectPathGetDefault.getObjectPathDefault(d, "label", "label");
      let p = new Set(i);
      let u = [];
      let c = [];
      let f = [];
      let g = new Set([]);
      if (e) {
        u = Object.values(s).filter(t => {
          let {
            data: i
          } = t;
          return treeDataUtilityHelpers.matchFilterNode(e, i, o, h);
        }).map(e => e.key);
        c = treeDataUtilityHelpers.getParentPathKeys(u, s, false);
        g = new Set([...treeDataUtilityHelpers.collectChildKeys(u, s, true), ...c]);
        f = treeDataUtilityHelpers.flattenTreeToNodes(a, new Set(c), d, r && g);
      } else {
        (c = treeDataUtilityHelpers.getParentPathKeys(n, s)).forEach(e => p.add(e));
        f = treeDataUtilityHelpers.flattenTreeToNodes(a, p, d);
      }
      let m = new Set(c);
      this._adapter.notifySearch(e, Array.from(m));
      this._adapter.updateState({
        expandedKeys: p,
        flattenNodes: f,
        motionKeys: new Set([]),
        filteredKeys: new Set(u),
        filteredExpandedKeys: m,
        filteredShownKeys: g
      });
    }
    handleNodeSelect(e, t) {
      if (!this._isDisabled(t)) {
        if (this._isMultiple()) {
          this.handleMultipleSelect(e, t);
        } else {
          this.handleSingleSelect(e, t);
        }
      }
    }
    handleSingleSelect(e, t) {
      let i = [...this.getState("selectedKeys")];
      let {
        clickToHide: n
      } = this.getProps();
      let {
        selected: s,
        eventKey: a,
        data: r
      } = t;
      this._adapter.notifySelect(a, true, r);
      if (!i.includes(a) && !s) {
        i = [a];
        this._notifyChange(a, e);
        if (!this._isControlledComponent()) {
          this._adapter.updateState({
            selectedKeys: i
          });
        }
      }
      if (n && (this._isSelectToClose() || !r.children)) {
        this.close(e);
        this.handlerTriggerBlur(e);
      }
    }
    calcCheckedKeys(e, t) {
      let {
        keyEntities: i
      } = this.getStates();
      let n = new Set(this.getState("checkedKeys"));
      let s = new Set(this.getState("halfCheckedKeys"));
      if (t) {
        return treeDataUtilityHelpers.handleCheckState(e, i, n, s);
      } else {
        return treeDataUtilityHelpers.handleUncheckState(e, i, n, s);
      }
    }
    handleMultipleSelect(e, t) {
      let {
        searchPosition: i,
        disableStrictly: n,
        checkRelation: s
      } = this.getProps();
      let {
        inputValue: a,
        realCheckedKeys: r
      } = this.getStates();
      let {
        checked: o,
        eventKey: l,
        data: d
      } = t;
      if (s === "related") {
        let t = n ? this.calcCheckedStatus(!o, l) : !o;
        let {
          checkedKeys: i,
          halfCheckedKeys: s
        } = n ? this.calcNonDisabledCheckedKeys(l, t) : this.calcCheckedKeys(l, t);
        this._adapter.notifySelect(l, t, d);
        this._notifyChange([...i], e);
        if (!this._isControlledComponent()) {
          this._adapter.updateState({
            checkedKeys: i,
            halfCheckedKeys: s
          });
          this._adapter.rePositionDropdown();
        }
      } else if (s === "unRelated") {
        let t;
        let i = new Set(r);
        if (r.has(l)) {
          i.delete(l);
          t = false;
        } else {
          i.add(l);
          t = true;
        }
        this._adapter.notifySelect(l, t, d);
        this._notifyChange([...i], e);
        if (!this._isControlledComponent()) {
          this._adapter.updateState({
            realCheckedKeys: i
          });
          this._adapter.rePositionDropdown();
        }
      }
      if (i === ta.SEARCH_POSITION_TRIGGER && a !== "") {
        this._adapter.updateState({
          inputValue: ""
        });
      }
    }
    calcNonDisabledCheckedKeys(e, t) {
      let {
        keyEntities: i,
        disabledKeys: n
      } = this.getStates();
      let s = new Set(this.getState("checkedKeys"));
      let a = treeDataUtilityHelpers.getRootCheckedKeys(treeDataUtilityHelpers.collectChildKeys([e], i, false), i, true);
      if (!a.some(e => n.has(e))) {
        return this.calcCheckedKeys(e, t);
      }
      let r = a.filter(e => !n.has(e));
      let o = t ? [...r, ...s] : throttledArrayDiffUtil.throttledArrayDiff(treeDataUtilityHelpers.getRootCheckedKeys([...s], i, true, true), r);
      return treeDataUtilityHelpers.calcCheckedStates(o, i);
    }
    calcCheckedStatus(e, t) {
      if (!e) {
        return e;
      }
      let {
        checkedKeys: i,
        keyEntities: n,
        disabledKeys: s
      } = this.getStates();
      let a = treeDataUtilityHelpers.getRootCheckedKeys(treeDataUtilityHelpers.collectChildKeys([t], n, false), n, true);
      if (a.some(e => s.has(e))) {
        return !a.filter(e => !s.has(e)).every(e => i.has(e));
      } else {
        return e;
      }
    }
    handleNodeExpandInSearch(e, t) {
      let {
        treeData: i,
        filteredShownKeys: n,
        keyEntities: s,
        keyMaps: a
      } = this.getStates();
      let r = this._showFilteredOnly();
      let o = new Set(this.getState("filteredExpandedKeys"));
      let l = "show";
      let {
        eventKey: d,
        expanded: h,
        data: p
      } = t;
      if (h) {
        if (o.has(d)) {
          o.delete(d);
          l = "hide";
        }
      } else {
        o.add(d);
      }
      this._adapter.cacheFlattenNodes(l === "hide" && this._isAnimated());
      if (!this._isExpandControlled()) {
        let e = treeDataUtilityHelpers.flattenTreeToNodes(i, o, a, r && n);
        let t = this._isAnimated() ? treeDataUtilityHelpers.getChildKeys(d, o, s) : [];
        let h = {
          filteredExpandedKeys: o,
          flattenNodes: e,
          motionKeys: new Set(t),
          motionType: l
        };
        this._adapter.updateState(h);
      }
      this._adapter.notifyExpand(o, {
        expanded: !h,
        node: p
      });
    }
    handleNodeExpand(e, t) {
      let {
        loadData: i,
        keyMaps: n
      } = this.getProps();
      let {
        inputValue: s,
        keyEntities: a
      } = this.getStates();
      if (!i && (!t.children || !t.children.length)) {
        return;
      }
      let r = this._isExpandControlled();
      if (s) {
        this.handleNodeExpandInSearch(e, t);
        return;
      }
      let {
        treeData: o
      } = this.getStates();
      let l = new Set(this.getState("expandedKeys"));
      let d = "show";
      let {
        eventKey: h,
        expanded: p,
        data: u
      } = t;
      if (p) {
        if (l.has(h)) {
          l.delete(h);
          d = "hide";
        }
      } else {
        l.add(h);
      }
      this._adapter.cacheFlattenNodes(d === "hide" && this._isAnimated());
      if (!r) {
        let e = treeDataUtilityHelpers.flattenTreeToNodes(o, l, n);
        let t = this._isAnimated() ? treeDataUtilityHelpers.getChildKeys(h, l, a) : [];
        let i = {
          expandedKeys: l,
          flattenNodes: e,
          motionKeys: new Set(t),
          motionType: d
        };
        this._adapter.updateState(i);
      }
      this._adapter.notifyExpand(l, {
        expanded: !p,
        node: u
      });
    }
    getRenderTextInSingle() {
      let e;
      let {
        renderSelectedItem: t,
        treeNodeLabelProp: i,
        keyMaps: n
      } = this.getProps();
      let {
        selectedKeys: s,
        keyEntities: a
      } = this.getStates();
      let r = objectPathGetDefault.getObjectPathDefault(n, "label", i);
      let o = isFunctionUtil_1.isFunction(t) ? t : e => objectPathGetDefault.getObjectPathDefault(e, r, null);
      if (s.length) {
        let t = s[0];
        e = a[t] && a[t].key === t ? a[t].data : this.getDataForKeyNotInKeyEntities(t);
      }
      if (e) {
        return o(e);
      } else {
        return null;
      }
    }
    handleInputTriggerBlur() {
      this._adapter.updateState({
        inputTriggerFocus: false
      });
    }
    handleInputTriggerFocus() {
      this.clearInput();
      this._adapter.updateState({
        inputTriggerFocus: true
      });
    }
    setLoadKeys(e, t) {
      this._adapter.updateLoadKeys(e, t);
    }
  }
  var reactVirtualListCore = require("react-virtual-list-core") /*id: 676834*/;
  require("empty-module_7") /*id: 885379*/;
  var tagAvatarGroup = require("tag-avatar-group") /*id: 68674*/;
  var tagAvatarComponent = require("tag-avatar-component") /*id: 406406*/;
  var autoHeightWrapperComponent = require("auto-height-wrapper-component") /*id: 119148*/;
  var createReactContext = require("create-react-context") /*id: 435688*/;
  var treeNodeComponent = require("tree-node-component") /*id: 416604*/;
  var reactTreeMotionRenderer = require("react-tree-motion-renderer") /*id: 192551*/;
  var reactDeepCloneUtil = require("react-deep-clone-util") /*id: 767669*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  let ty = {
    PREFIX: `${semiIdentifier.semiIdentifier}-tagInput`
  };
  var tv = (e, t) => {
    let i = [];
    if (isStringTypeCheck.isString(t) || isNumberUtil.isNumber(t)) {
      i = e.split(t);
    } else if (arrayIsArrayUtil.isArray(t)) {
      let n = t[0];
      i = e;
      for (let e = 1; e < t.length; e++) {
        i = i.split(t[e]).join(n);
      }
      i = i.split(n);
    } else {
      i.push(e);
    }
    return i;
  };
  class tC extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.handleInputChange = e => {
        let {
          value: t
        } = e.target;
        let {
          entering: i
        } = this.getStates();
        if (i) {
          this._onInputChange(t, e);
        } else if (this._checkInputChangeValid(t)) {
          this._onInputChange(t, e);
        }
      };
      this.handleInputCompositionStart = e => {
        let {
          maxLength: t
        } = this.getProps();
        if (isNumberUtil.isNumber(t)) {
          this._adapter.setEntering(true);
        }
      };
      this.handleInputCompositionEnd = e => {
        let {
          value: t
        } = e.target;
        let {
          maxLength: i,
          onInputExceed: n,
          separator: s
        } = this.getProps();
        if (!isNumberUtil.isNumber(i)) {
          return;
        }
        this._adapter.setEntering(false);
        let a = true;
        let r = tv(t, s);
        let o = 0;
        for (; o < r.length; o++) {
          if (r[o].length > i) {
            a = false;
            if (isFunctionUtil_1.isFunction(n)) {
              n(t);
            }
            break;
          }
        }
        if (a) {
          this._adapter.setInputValue(t);
        } else {
          let e = r.slice(0, o);
          if (o < r.length) {
            e.push(r[o].slice(0, i));
          }
          this._adapter.setInputValue(e.join(s));
        }
      };
      this._checkInputChangeValid = e => {
        let {
          maxLength: t,
          onInputExceed: i,
          separator: n
        } = this._adapter.getProps();
        let {
          inputValue: s
        } = this._adapter.getStates();
        let a = true;
        if (isNumberUtil.isNumber(t)) {
          let r = tv(e, n);
          let o = tv(s, n);
          let l = Math.max(r.length, o.length);
          for (let n = 0; n < l; n++) {
            if (!isUndefinedCheck.isUndefined(r[n]) && (isUndefinedCheck.isUndefined(o[n]) || r[n].length > o[n].length) && r[n].length > t) {
              a = false;
              if (isFunctionUtil_1.isFunction(i)) {
                i(e);
              }
              break;
            }
          }
        }
        return a;
      };
      this.handleKeyDown = e => {
        let {
          inputValue: t,
          tagsArray: i
        } = this._adapter.getStates();
        let n = e.keyCode;
        if (n === keyboardKeyCodes_3.keyCodeMap.ENTER) {
          e.preventDefault();
          if (t !== "") {
            this._handleAddTags(e);
          }
        }
        let {
          length: s
        } = i;
        if (n === keyboardKeyCodes_3.keyCodeMap.BACKSPACE && t === "" && s > 0) {
          let e = i.slice(0, s - 1);
          let t = i[s - 1];
          this._onRemove(e, t, s - 1);
        }
        this._adapter.notifyKeyDown(e);
      };
    }
    _handleAddTags(e) {
      let {
        separator: t,
        max: i,
        onExceed: n,
        allowDuplicates: s
      } = this._adapter.getProps();
      let {
        inputValue: a,
        tagsArray: r
      } = this._adapter.getStates();
      let o = tv(a, t);
      o = o.filter((e, t) => (!!s || !r.includes(e) && o.indexOf(e) === t) && isStringTypeCheck.isString(e) && e.trim() !== "");
      let l = r.concat(o);
      if (isNumberUtil.isNumber(i) && l.length > i) {
        if (isFunctionUtil_1.isFunction(n)) {
          n(l);
        }
        l = l.slice(0, i);
        o = o.slice(0, i - r.length);
      }
      if (o.length > 0) {
        this._onAdd(l, o);
      }
      this._onInputChange("", e);
    }
    handleInputBlur(e) {
      let {
        addOnBlur: t
      } = this._adapter.getProps();
      if (t === true) {
        this._handleAddTags(e);
      }
      this._adapter.setFocusing(false);
      this._adapter.notifyBlur(e);
    }
    handleInputFocus(e) {
      this._adapter.setFocusing(true);
      this._adapter.notifyFocus(e);
    }
    handleClearEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleClearBtn(e);
      }
    }
    handleClearBtn(e) {
      let {
        inputValue: t,
        tagsArray: i
      } = this._adapter.getStates();
      if (i.length > 0) {
        this._adapter.setTagsArray([]);
        this._adapter.notifyTagChange([]);
      }
      if (t.length > 0) {
        this._onInputChange("", e);
      }
      e.stopPropagation();
    }
    handleTagClose(e) {
      let {
        tagsArray: t
      } = this._adapter.getStates();
      let i = [...t];
      i.splice(e, 1);
      let n = t[e];
      this._onRemove(i, n, e);
    }
    handleInputMouseEnter() {
      this._adapter.setHovering(true);
    }
    handleInputMouseLeave() {
      this._adapter.setHovering(false);
    }
    handleClick(e) {
      let {
        disabled: t
      } = this.getProps();
      if (!t) {
        if (!this._adapter.getClickOutsideHandler()) {
          this._adapter.setActive(true);
          this._adapter.registerClickOutsideHandler(e => this.clickOutsideCallBack());
        }
      }
    }
    clickOutsideCallBack() {
      this._adapter.unregisterClickOutsideHandler();
      this._adapter.setActive(false);
    }
    handleClickPrefixOrSuffix(e) {
      let {
        disabled: t
      } = this._adapter.getProps();
      let {
        isFocus: i
      } = this._adapter.getStates();
      if (!t && !i) {
        this._adapter.toggleFocusing(true);
      }
    }
    handlePreventMouseDown(e) {
      if (e && isFunctionUtil_1.isFunction(e.preventDefault)) {
        e.preventDefault();
      }
    }
    _onRemove(e, t, i) {
      if (!this._isControlledComponent()) {
        this._adapter.setTagsArray(e);
      }
      this._adapter.notifyTagChange(e);
      this._adapter.notifyTagRemove(t, i);
    }
    _onAdd(e, t) {
      if (!this._isControlledComponent()) {
        this._adapter.setTagsArray(e);
      }
      this._adapter.notifyTagChange(e);
      this._adapter.notifyTagAdd(t);
    }
    _onInputChange(e, t) {
      this._adapter.setInputValue(e);
      this._adapter.notifyInputChange(e, t);
    }
    handleSortEnd(e) {
      let {
        oldIndex: t,
        newIndex: i
      } = e;
      let {
        tagsArray: n
      } = this.getStates();
      let s = function (e, t, i) {
        let n = e.slice();
        n.splice(i < 0 ? n.length + i : i, 0, n.splice(t, 1)[0]);
        return n;
      }(n, t, i);
      if (!this._isControlledComponent()) {
        this._adapter.setTagsArray(s);
      }
      this._adapter.notifyTagChange(s);
    }
  }
  var typographyParagraphComponent = require("typography-paragraph-component") /*id: 576118*/;
  var iconComponentFactory = require("icon-component-factory") /*id: 129581*/;
  let t_ = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M15 7C16.1046 7 17 6.10457 17 5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5C13 6.10457 13.8954 7 15 7Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M17 12C17 13.1046 16.1046 14 15 14C13.8954 14 13 13.1046 13 12C13 10.8954 13.8954 10 15 10C16.1046 10 17 10.8954 17 12Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M15 21C16.1046 21 17 20.1046 17 19C17 17.8954 16.1046 17 15 17C13.8954 17 13 17.8954 13 19C13 20.1046 13.8954 21 15 21Z",
      fill: "currentColor"
    }));
  }, "handle");
  var clearIcon = require("clear-icon") /*id: 137025*/;
  var reactDomUtils = require("react-dom-utils") /*id: 92997*/;
  var dndKitCoreModule = require("dnd-kit-core-module") /*id: 743382*/;
  var dndKitSortableHooks = require("dnd-kit-sortable-hooks") /*id: 508725*/;
  let tT = {
    delay: 150,
    tolerance: 5
  };
  function tx(e) {
    return reactCoreLibraryReexport.createElement("div", Object.assign({
      style: {
        overflow: "auto"
      }
    }, e));
  }
  function tF(e) {
    let {
      items: t,
      onSortEnd: i,
      adjustScale: n,
      renderItem: a,
      transition: r,
      activationConstraint: o = tT,
      collisionDetection: l = dndKitCoreModule.closestCorners,
      strategy: d = dndKitSortableHooks.verticalSortStrategy,
      useDragOverlay: h = true,
      dragOverlayCls: p,
      container: u = tx,
      prefix: c = "semi-sortable"
    } = e;
    let [f, g] = reactCoreLibraryReexport.useState(null);
    let m = dndKitCoreModule.useSensors(dndKitCoreModule.useSensor(dndKitCoreModule.MouseSensor, {
      activationConstraint: o
    }), dndKitCoreModule.useSensor(dndKitCoreModule.TouchSensor, {
      activationConstraint: o
    }), dndKitCoreModule.useSensor(dndKitCoreModule.KeyboardSensor, {
      coordinateGetter: dndKitSortableHooks.keyboardCoords
    }));
    let b = reactCoreLibraryReexport.useCallback(e => t.indexOf(e), [t]);
    let y = reactCoreLibraryReexport.useMemo(() => f ? b(f) : -1, [b, f]);
    let v = reactCoreLibraryReexport.useCallback(e => {
      let {
        active: t
      } = e;
      if (t) {
        g(t.id);
      }
    }, []);
    let C = reactCoreLibraryReexport.useCallback(e => {
      let {
        over: t
      } = e;
      g(null);
      if (t) {
        let e = b(t.id);
        if (y !== e) {
          i({
            oldIndex: y,
            newIndex: e
          });
        }
      }
    }, [y, b, i]);
    let E = reactCoreLibraryReexport.useCallback(() => {
      g(null);
    }, []);
    return reactCoreLibraryReexport.createElement(dndKitCoreModule.DndContext, {
      sensors: m,
      collisionDetection: l,
      onDragStart: v,
      onDragEnd: C,
      onDragCancel: E,
      autoScroll: {
        order: dndKitCoreModule.ScrollStrategy.ReversedTreeOrder
      }
    }, reactCoreLibraryReexport.createElement(dndKitSortableHooks.SortableContext, {
      items: t,
      strategy: d
    }, reactCoreLibraryReexport.createElement(u, null, t.map((e, t) => reactCoreLibraryReexport.createElement(tk, {
      key: e,
      id: e,
      index: t,
      renderItem: a,
      useDragOverlay: h,
      prefix: c,
      transition: r
    })))), h ? reactDomEntryWrapper.createPortal(reactCoreLibraryReexport.createElement(dndKitCoreModule.DndContextValue, {
      adjustScale: n,
      style: {
        zIndex: undefined
      },
      className: p
    }, f ? a({
      id: f,
      sortableHandle: e => e
    }) : null), document.body) : null);
  }
  function tk(e) {
    let {
      animateLayoutChanges: t,
      id: i,
      renderItem: n,
      prefix: a,
      transition: o
    } = e;
    let {
      listeners: l,
      setNodeRef: d,
      transform: h,
      transition: p,
      active: u,
      isOver: c,
      attributes: f
    } = dndKitSortableHooks.useSortable({
      id: i,
      animateLayoutChanges: t,
      transition: o
    });
    let g = reactCoreLibraryReexport.useCallback(e => () => reactCoreLibraryReexport.createElement("span", Object.assign({}, l, {
      style: {
        lineHeight: 0
      },
      onMouseDown: e => {
        l.onMouseDown(e);
        e.preventDefault();
        e.stopPropagation();
      }
    }), reactCoreLibraryReexport.createElement(e, null)), [l]);
    let m = r(`${a}-sortable-item`, {
      [`${a}-sortable-item-over`]: c,
      [`${a}-sortable-item-active`]: (u == null ? undefined : u.id) === i
    });
    let b = isNullCheck.isNull(o) ? undefined : {
      transform: reactDomUtils.TransformUtils.Transform.toString(Object.assign(Object.assign({}, h), {
        scaleX: 1,
        scaleY: 1
      })),
      transition: p
    };
    return reactCoreLibraryReexport.createElement("div", Object.assign({
      ref: d,
      style: b,
      className: m
    }, f), n({
      id: i,
      sortableHandle: g
    }));
  }
  function tD(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  let tN = ty.PREFIX;
  function tR(e) {
    return reactCoreLibraryReexport.createElement("div", Object.assign({
      className: `${tN}-sortable-list`
    }, e));
  }
  class tZ extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleInputChange = e => {
        this.foundation.handleInputChange(e);
      };
      this.handleKeyDown = e => {
        this.foundation.handleKeyDown(e);
      };
      this.handleInputFocus = e => {
        this.foundation.handleInputFocus(e);
      };
      this.handleInputBlur = e => {
        this.foundation.handleInputBlur(e);
      };
      this.handleClearBtn = e => {
        this.foundation.handleClearBtn(e);
      };
      this.handleClearEnterPress = e => {
        this.foundation.handleClearEnterPress(e);
      };
      this.handleTagClose = e => {
        this.foundation.handleTagClose(e);
      };
      this.handleInputMouseLeave = e => {
        this.foundation.handleInputMouseLeave();
      };
      this.handleClick = e => {
        this.foundation.handleClick(e);
      };
      this.handleInputMouseEnter = e => {
        this.foundation.handleInputMouseEnter();
      };
      this.handleClickPrefixOrSuffix = e => {
        this.foundation.handleClickPrefixOrSuffix(e);
      };
      this.handlePreventMouseDown = e => {
        this.foundation.handlePreventMouseDown(e);
      };
      this.getAllTags = () => {
        let {
          tagsArray: e
        } = this.state;
        return e.map((e, t) => this.renderTag(e, t));
      };
      this.renderTag = (e, t, i) => {
        let {
          size: n,
          disabled: a,
          renderTagItem: o,
          showContentTooltip: l,
          draggable: d
        } = this.props;
        let {
          active: p
        } = this.state;
        let u = p && d;
        let c = r(`${tN}-wrapper-tag`, {
          [`${tN}-wrapper-tag-size-${n}`]: n,
          [`${tN}-wrapper-tag-icon`]: u
        });
        let f = r(`${tN}-wrapper-typo`, {
          [`${tN}-wrapper-typo-disabled`]: a
        });
        let g = r({
          [`${tN}-drag-item`]: u,
          [`${tN}-wrapper-tag-icon`]: u
        });
        let m = i && i(() => reactCoreLibraryReexport.createElement(t_, {
          className: `${tN}-drag-handler`
        }));
        let b = u ? e : `${t}${e}`;
        let y = () => {
          if (!a) {
            this.handleTagClose(t);
          }
        };
        if (isFunctionUtil_1.isFunction(o)) {
          return reactCoreLibraryReexport.createElement("div", {
            className: g,
            key: b
          }, u && i ? reactCoreLibraryReexport.createElement(m, null) : null, o(e, t, y));
        } else {
          return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, {
            className: c,
            color: "white",
            size: n === "small" ? "small" : "large",
            type: "light",
            onClose: y,
            closable: !a,
            key: b,
            visible: true,
            "aria-label": `${a ? "" : "Closable "}Tag: ${e}`
          }, u && i ? reactCoreLibraryReexport.createElement(m, null) : null, reactCoreLibraryReexport.createElement(typographyParagraphComponent.TypographyParagraph, {
            className: f,
            ellipsis: {
              showTooltip: l,
              rows: 1
            }
          }, e));
        }
      };
      this.renderSortTag = e => {
        let {
          id: t,
          sortableHandle: i
        } = e;
        let {
          tagsArray: n
        } = this.state;
        let s = n.indexOf(t);
        return this.renderTag(t, s, i);
      };
      this.onSortEnd = e => {
        this.foundation.handleSortEnd(e);
      };
      this.handleInputCompositionStart = e => {
        this.foundation.handleInputCompositionStart(e);
      };
      this.handleInputCompositionEnd = e => {
        this.foundation.handleInputCompositionEnd(e);
      };
      this.foundation = new tC(this.adapter);
      this.state = {
        tagsArray: e.defaultValue || [],
        inputValue: "",
        focusing: false,
        hovering: false,
        active: false,
        entering: false
      };
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.tagInputRef = reactCoreLibraryReexport.createRef();
      this.clickOutsideHandler = null;
    }
    static getDerivedStateFromProps(e, t) {
      let i;
      let {
        value: n,
        inputValue: s
      } = e;
      let {
        tagsArray: a
      } = t;
      return {
        tagsArray: arrayIsArrayUtil.isArray(n) ? n : "value" in e && !n ? [] : a,
        inputValue: isStringTypeCheck.isString(s) ? s : t.inputValue
      };
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setInputValue: e => {
          this.setState({
            inputValue: e
          });
        },
        setTagsArray: e => {
          this.setState({
            tagsArray: e
          });
        },
        setFocusing: e => {
          this.setState({
            focusing: e
          });
        },
        toggleFocusing: e => {
          let {
            preventScroll: t
          } = this.props;
          let i = this.inputRef && this.inputRef.current;
          if (e) {
            if (i) {
              i.focus({
                preventScroll: t
              });
            }
          } else if (i) {
            i.blur();
          }
          this.setState({
            focusing: e
          });
        },
        setHovering: e => {
          this.setState({
            hovering: e
          });
        },
        setActive: e => {
          this.setState({
            active: e
          });
        },
        setEntering: e => {
          this.setState({
            entering: e
          });
        },
        getClickOutsideHandler: () => this.clickOutsideHandler,
        notifyBlur: e => {
          this.props.onBlur(e);
        },
        notifyFocus: e => {
          this.props.onFocus(e);
        },
        notifyInputChange: (e, t) => {
          this.props.onInputChange(e, t);
        },
        notifyTagChange: e => {
          this.props.onChange(e);
        },
        notifyTagAdd: e => {
          this.props.onAdd(e);
        },
        notifyTagRemove: (e, t) => {
          this.props.onRemove(e, t);
        },
        notifyKeyDown: e => {
          this.props.onKeyDown(e);
        },
        registerClickOutsideHandler: e => {
          let t = t => {
            let i = this.tagInputRef && this.tagInputRef.current;
            let n = t.target;
            if (i && !i.contains(n)) {
              e(t);
            }
          };
          this.clickOutsideHandler = t;
          document.addEventListener("click", t, false);
        },
        unregisterClickOutsideHandler: () => {
          document.removeEventListener("click", this.clickOutsideHandler, false);
          this.clickOutsideHandler = null;
        }
      });
    }
    componentDidMount() {
      let {
        disabled: e,
        autoFocus: t,
        preventScroll: i
      } = this.props;
      if (!e && t) {
        this.inputRef.current.focus({
          preventScroll: i
        });
        this.foundation.handleClick();
      }
      this.foundation.init();
    }
    renderClearBtn() {
      let {
        hovering: e,
        tagsArray: t,
        inputValue: i
      } = this.state;
      let {
        showClear: n,
        disabled: a,
        clearIcon: o
      } = this.props;
      let l = r(`${tN}-clearBtn`, {
        [`${tN}-clearBtn-invisible`]: !e || i === "" && t.length === 0 || a
      });
      if (n) {
        return reactCoreLibraryReexport.createElement("div", {
          role: "button",
          tabIndex: 0,
          "aria-label": "Clear TagInput value",
          className: l,
          onClick: e => this.handleClearBtn(e),
          onKeyPress: e => this.handleClearEnterPress(e)
        }, o || reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, null));
      } else {
        return null;
      }
    }
    renderPrefix() {
      let {
        prefix: e,
        insetLabel: t,
        insetLabelId: i
      } = this.props;
      let n = e || t;
      if (isNullCheck.isNull(n) || isUndefinedCheck.isUndefined(n)) {
        return null;
      }
      let a = r(`${tN}-prefix`, {
        [`${tN}-inset-label`]: t,
        [`${tN}-prefix-text`]: n && isStringTypeCheck.isString(n),
        [`${tN}-prefix-icon`]: commonFrontendUtils.isIconElement(n)
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: a,
        onMouseDown: this.handlePreventMouseDown,
        onClick: this.handleClickPrefixOrSuffix,
        id: i,
        "x-semi-prop": "prefix"
      }, n);
    }
    renderSuffix() {
      let {
        suffix: e
      } = this.props;
      if (isNullCheck.isNull(e) || isUndefinedCheck.isUndefined(e)) {
        return null;
      }
      let t = r(`${tN}-suffix`, {
        [`${tN}-suffix-text`]: e && isStringTypeCheck.isString(e),
        [`${tN}-suffix-icon`]: commonFrontendUtils.isIconElement(e)
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: t,
        onMouseDown: this.handlePreventMouseDown,
        onClick: this.handleClickPrefixOrSuffix,
        "x-semi-prop": "suffix"
      }, e);
    }
    renderTags() {
      let {
        disabled: e,
        maxTagCount: t,
        showRestTagsPopover: i,
        restTagsPopoverProps: n = {},
        draggable: a,
        expandRestTagsOnClick: o
      } = this.props;
      let {
        tagsArray: l,
        active: d
      } = this.state;
      let h = r(`${tN}-wrapper-n`, {
        [`${tN}-wrapper-n-disabled`]: e
      });
      let p = this.getAllTags();
      let u = [];
      let c = [...p];
      if ((!d || !o) && t && t < p.length) {
        c = p.slice(0, t);
        u = p.slice(t);
      }
      let f = reactCoreLibraryReexport.createElement("span", {
        className: h
      }, "+", l.length - t);
      let g = p.map((e, t) => ({
        item: e,
        key: l[t]
      }));
      if (d && a && g.length > 0) {
        return reactCoreLibraryReexport.createElement(tF, {
          items: l,
          onSortEnd: this.onSortEnd,
          renderItem: this.renderSortTag,
          container: tR,
          prefix: tN,
          transition: null,
          dragOverlayCls: `${tN}-right-item-drag-item-move`
        });
      } else {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, c, u.length > 0 && (i ? reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, Object.assign({
          content: u,
          showArrow: true,
          trigger: "hover",
          position: "top",
          autoAdjustOverflow: true
        }, n), f) : f));
      }
    }
    blur() {
      this.inputRef.current.blur();
      this.foundation.clickOutsideCallBack();
    }
    focus() {
      let {
        preventScroll: e,
        disabled: t
      } = this.props;
      this.inputRef.current.focus({
        preventScroll: e
      });
      if (!t) {
        this.foundation.handleClick();
      }
    }
    render() {
      let e = this.props;
      let {
        size: t,
        style: i,
        className: n,
        disabled: a,
        placeholder: o,
        validateStatus: l
      } = e;
      let d = tD(e, ["size", "style", "className", "disabled", "placeholder", "validateStatus"]);
      let {
        focusing: h,
        hovering: p,
        tagsArray: u,
        inputValue: c,
        active: f
      } = this.state;
      let g = r(tN, n, {
        [`${tN}-focus`]: h || f,
        [`${tN}-disabled`]: a,
        [`${tN}-hover`]: p && !a,
        [`${tN}-error`]: l === "error",
        [`${tN}-warning`]: l === "warning",
        [`${tN}-small`]: t === "small",
        [`${tN}-large`]: t === "large"
      });
      let m = r(`${tN}-wrapper-input`, `${tN}-wrapper-input-${t}`);
      let b = r(`${tN}-wrapper`);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        ref: this.tagInputRef,
        style: i,
        className: g,
        "aria-disabled": a,
        "aria-label": this.props["aria-label"],
        "aria-invalid": l === "error",
        onMouseEnter: e => {
          this.handleInputMouseEnter(e);
        },
        onMouseLeave: e => {
          this.handleInputMouseLeave(e);
        },
        onClick: e => {
          this.handleClick(e);
        }
      }, this.getDataAttr(d)), this.renderPrefix(), reactCoreLibraryReexport.createElement("div", {
        className: b
      }, this.renderTags(), reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, {
        "aria-label": "input value",
        ref: this.inputRef,
        className: m,
        disabled: a,
        value: c,
        size: t,
        placeholder: u.length === 0 ? o : "",
        onKeyDown: e => {
          this.handleKeyDown(e);
        },
        onChange: (e, t) => {
          this.handleInputChange(t);
        },
        onBlur: e => {
          this.handleInputBlur(e);
        },
        onFocus: e => {
          this.handleInputFocus(e);
        },
        onCompositionStart: this.handleInputCompositionStart,
        onCompositionEnd: this.handleInputCompositionEnd
      })), this.renderClearBtn(), this.renderSuffix());
    }
  }
  tZ.propTypes = {
    children: l.node,
    clearIcon: l.node,
    style: l.object,
    className: l.string,
    disabled: l.bool,
    allowDuplicates: l.bool,
    max: l.number,
    maxTagCount: l.number,
    maxLength: l.number,
    showRestTagsPopover: l.bool,
    restTagsPopoverProps: l.object,
    showContentTooltip: l.oneOfType([l.shape({
      type: l.string,
      opts: l.object
    }), l.bool]),
    defaultValue: l.array,
    value: l.array,
    inputValue: l.string,
    placeholder: l.string,
    separator: l.oneOfType([l.string, l.array]),
    showClear: l.bool,
    addOnBlur: l.bool,
    draggable: l.bool,
    expandRestTagsOnClick: l.bool,
    autoFocus: l.bool,
    renderTagItem: l.func,
    onBlur: l.func,
    onFocus: l.func,
    onChange: l.func,
    onInputChange: l.func,
    onExceed: l.func,
    onInputExceed: l.func,
    onAdd: l.func,
    onRemove: l.func,
    onKeyDown: l.func,
    size: l.oneOf(["large", "default", "small"]),
    validateStatus: l.oneOf(["success", "default", "error", "warning"]),
    prefix: l.oneOfType([l.string, l.node]),
    suffix: l.oneOfType([l.string, l.node]),
    "aria-label": l.string,
    preventScroll: l.bool
  };
  tZ.defaultProps = {
    showClear: false,
    addOnBlur: false,
    allowDuplicates: true,
    showRestTagsPopover: true,
    autoFocus: false,
    draggable: false,
    expandRestTagsOnClick: true,
    showContentTooltip: true,
    separator: ",",
    size: "default",
    validateStatus: "default",
    onBlur: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onInputChange: emptyExportFunction.emptyFunction,
    onExceed: emptyExportFunction.emptyFunction,
    onInputExceed: emptyExportFunction.emptyFunction,
    onAdd: emptyExportFunction.emptyFunction,
    onRemove: emptyExportFunction.emptyFunction,
    onKeyDown: emptyExportFunction.emptyFunction
  };
  var searchIconComponent = require("search-icon-component") /*id: 879883*/;
  var visibleOptionRenderer = require("visible-option-renderer") /*id: 131028*/;
  function t$(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  let tj = ts.PREFIX;
  let tM = ts.PREFIX_TREE;
  class tV extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.renderSuffix = () => {
        let {
          suffix: e
        } = this.props;
        let t = r({
          [`${tj}-suffix`]: true,
          [`${tj}-suffix-text`]: e && isStringTypeCheck.isString(e),
          [`${tj}-suffix-icon`]: commonFrontendUtils.isIconElement(e)
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: t,
          "x-semi-prop": "suffix"
        }, e);
      };
      this.renderPrefix = () => {
        let {
          prefix: e,
          insetLabel: t,
          insetLabelId: i
        } = this.props;
        let n = e || t;
        let a = r({
          [`${tj}-prefix`]: true,
          [`${tj}-inset-label`]: t,
          [`${tj}-prefix-text`]: n && isStringTypeCheck.isString(n),
          [`${tj}-prefix-icon`]: commonFrontendUtils.isIconElement(n)
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: a,
          id: i,
          "x-semi-prop": "prefix,insetLabel"
        }, n);
      };
      this.renderContent = () => {
        let {
          dropdownMinWidth: e
        } = this.state;
        let {
          dropdownStyle: t,
          dropdownClassName: i
        } = this.props;
        let n = Object.assign({
          minWidth: e
        }, t);
        let a = r(i, `${tj}-popover`);
        return reactCoreLibraryReexport.createElement("div", {
          className: a,
          style: n
        }, this.renderTree());
      };
      this.removeTag = e => {
        this.foundation.removeTag(e);
      };
      this.handleClick = e => {
        this.foundation.handleClick(e);
      };
      this.getDataForKeyNotInKeyEntities = e => this.foundation.getDataForKeyNotInKeyEntities(e);
      this.handleSelectionEnterPress = e => {
        this.foundation.handleSelectionEnterPress(e);
      };
      this.hasValue = () => {
        let {
          multiple: e,
          checkRelation: t
        } = this.props;
        let {
          realCheckedKeys: i,
          checkedKeys: n,
          selectedKeys: s
        } = this.state;
        let a = false;
        if (e) {
          if (t === "related") {
            a = !!n.size;
          } else if (t === "unRelated") {
            a = !!i.size;
          }
        } else {
          a = !!s.length;
        }
        return a;
      };
      this.showClearBtn = () => {
        let {
          showClear: e,
          disabled: t,
          searchPosition: i
        } = this.props;
        let {
          inputValue: n,
          isOpen: s,
          isHovering: a
        } = this.state;
        let r = i === ta.SEARCH_POSITION_TRIGGER && n;
        return e && (this.hasValue() || r) && !t && (s || a);
      };
      this.renderTagList = () => {
        let {
          checkedKeys: e,
          keyEntities: t,
          disabledKeys: i,
          realCheckedKeys: n
        } = this.state;
        let {
          treeNodeLabelProp: a,
          leafOnly: r,
          disabled: o,
          disableStrictly: l,
          size: d,
          checkRelation: u,
          renderSelectedItem: c,
          keyMaps: f
        } = this.props;
        let g = objectPathGetDefault.getObjectPathDefault(f, "label", a);
        let m = isFunctionUtil_1.isFunction(c) ? c : e => ({
          isRenderInTag: true,
          content: objectPathGetDefault.getObjectPathDefault(e, g, null)
        });
        let b = [];
        if (u === "related") {
          b = treeDataUtilityHelpers.getRootCheckedKeys([...e], t, r, true);
        } else if (u === "unRelated" && Object.keys(t).length > 0) {
          b = [...n];
        }
        let y = [];
        b.forEach((e, n) => {
          let a = t[e] && t[e].key === e ? t[e].data : this.getDataForKeyNotInKeyEntities(e);
          let r = (t, i) => {
            if (i && typeof i.preventDefault == "function") {
              i.preventDefault();
            }
            this.removeTag(e);
          };
          let {
            content: h,
            isRenderInTag: u
          } = a ? m(a, {
            index: n,
            onClose: r
          }) : {};
          if (isNullCheck.isNull(h) || isUndefinedCheck.isUndefined(h)) {
            return;
          }
          let c = {
            closable: !o && !a.disabled && (!l || !i.has(a.key)),
            color: "white",
            visible: true,
            onClose: r,
            key: `tag-${e}-${n}`,
            size: d === "small" ? "small" : "large"
          };
          if (u) {
            y.push(reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, Object.assign({}, c), h));
          } else {
            y.push(h);
          }
        });
        return y;
      };
      this.renderSingleTriggerSearchItem = () => {
        let {
          placeholder: e,
          disabled: t
        } = this.props;
        let {
          inputTriggerFocus: i
        } = this.state;
        let n = this.foundation.getRenderTextInSingle();
        let a = r(`${tj}-selection-TriggerSearchItem`, {
          [`${tj}-selection-TriggerSearchItem-placeholder`]: (i || !n) && !t,
          [`${tj}-selection-TriggerSearchItem-disabled`]: t
        });
        return reactCoreLibraryReexport.createElement("span", {
          className: a
        }, n || e);
      };
      this.renderSingleTriggerSearch = () => {
        let {
          inputValue: e
        } = this.state;
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, !e && this.renderSingleTriggerSearchItem(), this.renderInput());
      };
      this.renderSelectContent = () => {
        let {
          multiple: e,
          placeholder: t,
          maxTagCount: i,
          searchPosition: n,
          filterTreeNode: a,
          showRestTagsPopover: o,
          restTagsPopoverProps: l
        } = this.props;
        if (a && n === ta.SEARCH_POSITION_TRIGGER) {
          if (e) {
            return this.renderTagInput();
          } else {
            return this.renderSingleTriggerSearch();
          }
        }
        if (!e || !this.hasValue()) {
          let e = this.foundation.getRenderTextInSingle();
          let i = r(`${tj}-selection-content`, {
            [`${tj}-selection-placeholder`]: !e
          });
          return reactCoreLibraryReexport.createElement("span", {
            className: i
          }, e || t);
        }
        let d = this.renderTagList();
        return reactCoreLibraryReexport.createElement(tagAvatarGroup.TagAvatarGroup, {
          maxTagCount: i,
          tagList: d,
          size: "large",
          mode: "custom",
          showPopover: o,
          popoverProps: l
        });
      };
      this.handleClear = e => {
        if (e) {
          e.stopPropagation();
        }
        this.foundation.handleClear(e);
      };
      this.handleClearEnterPress = e => {
        if (e) {
          e.stopPropagation();
        }
        this.foundation.handleClearEnterPress(e);
      };
      this.handleMouseOver = e => {
        this.foundation.toggleHoverState(true);
      };
      this.handleMouseLeave = e => {
        this.foundation.toggleHoverState(false);
      };
      this.search = e => {
        let {
          isOpen: t
        } = this.state;
        if (!t) {
          this.foundation.open();
        }
        this.foundation.handleInputChange(e);
      };
      this.close = () => {
        this.foundation.close(null);
      };
      this.renderArrow = () => {
        let e = this.showClearBtn();
        let {
          arrowIcon: t
        } = this.props;
        if (e) {
          return null;
        } else if (t) {
          return reactCoreLibraryReexport.createElement("div", {
            className: r(`${tj}-arrow`),
            "x-semi-prop": "arrowIcon"
          }, t);
        } else {
          return null;
        }
      };
      this.renderClearBtn = () => {
        let e = this.showClearBtn();
        let {
          clearIcon: t
        } = this.props;
        let i = r(`${tj}-clearbtn`);
        if (e) {
          return reactCoreLibraryReexport.createElement("div", {
            role: "button",
            tabIndex: 0,
            "aria-label": "Clear TreeSelect value",
            className: i,
            onClick: this.handleClear,
            onKeyPress: this.handleClearEnterPress
          }, t || reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, null));
        } else {
          return null;
        }
      };
      this.renderSelection = () => {
        let e = this.props;
        let {
          disabled: t,
          multiple: i,
          filterTreeNode: n,
          validateStatus: a,
          prefix: o,
          suffix: l,
          style: d,
          size: h,
          insetLabel: p,
          className: u,
          placeholder: c,
          showClear: f,
          leafOnly: g,
          searchPosition: m,
          triggerRender: b,
          borderless: y
        } = e;
        let v = t$(e, ["disabled", "multiple", "filterTreeNode", "validateStatus", "prefix", "suffix", "style", "size", "insetLabel", "className", "placeholder", "showClear", "leafOnly", "searchPosition", "triggerRender", "borderless"]);
        let {
          inputValue: C,
          selectedKeys: E,
          checkedKeys: S,
          keyEntities: _,
          isFocus: O
        } = this.state;
        let w = !!n;
        let P = typeof b == "function";
        let I = m === ta.SEARCH_POSITION_TRIGGER && w;
        let T = I && isEmptyUtil.isEmpty(S);
        let x = I && !isEmptyUtil.isEmpty(S);
        let F = P ? r(u) : r(tj, {
          [`${tj}-borderless`]: y,
          [`${tj}-focus`]: O,
          [`${tj}-disabled`]: t,
          [`${tj}-single`]: !i,
          [`${tj}-multiple`]: i,
          [`${tj}-multiple-tagInput-empty`]: i && T,
          [`${tj}-multiple-tagInput-notEmpty`]: i && x,
          [`${tj}-filterable`]: w,
          [`${tj}-error`]: a === "error",
          [`${tj}-warning`]: a === "warning",
          [`${tj}-small`]: h === "small",
          [`${tj}-large`]: h === "large",
          [`${tj}-with-prefix`]: o || p,
          [`${tj}-with-suffix`]: l,
          [`${tj}-with-suffix`]: l
        }, u);
        let k = i ? treeDataUtilityHelpers.getRootCheckedKeys([...S], _, g, true) : E;
        let D = P ? reactCoreLibraryReexport.createElement(triggerRenderWrapper.TriggerRenderWrapper, {
          inputValue: C,
          value: k.map(e => objectPathGetDefault.getObjectPathDefault(_, [e, "data"])),
          disabled: t,
          placeholder: c,
          onClear: this.handleClear,
          componentName: "TreeSelect",
          triggerRender: b,
          componentProps: Object.assign({}, this.props),
          onSearch: this.search,
          onRemove: this.removeTag
        }) : [reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "prefix"
        }, o || p ? this.renderPrefix() : null), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "selection"
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${tj}-selection`
        }, this.renderSelectContent())), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "suffix"
        }, l ? this.renderSuffix() : null), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "clearBtn"
        }, f || I && C ? this.renderClearBtn() : null), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "arrow"
        }, this.renderArrow())];
        let N = t ? null : 0;
        return reactCoreLibraryReexport.createElement("div", Object.assign({
          role: "combobox",
          "aria-disabled": t,
          "aria-haspopup": "tree",
          tabIndex: N,
          className: F,
          style: d,
          ref: this.triggerRef,
          onClick: this.handleClick,
          onKeyPress: this.handleSelectionEnterPress,
          "aria-invalid": this.props["aria-invalid"],
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-describedby": this.props["aria-describedby"],
          "aria-required": this.props["aria-required"]
        }, f ? {
          onMouseEnter: e => this.handleMouseOver(e),
          onMouseLeave: e => this.handleMouseLeave(e)
        } : {}, this.getDataAttr(v)), D);
      };
      this.renderTagItem = (e, t) => {
        let {
          keyEntities: i,
          disabledKeys: n
        } = this.state;
        let {
          size: a,
          leafOnly: o,
          disabled: l,
          disableStrictly: d,
          renderSelectedItem: p,
          treeNodeLabelProp: u,
          keyMaps: c
        } = this.props;
        let f = objectPathGetDefault.getObjectPathDefault(c, "label", u);
        let g = treeDataUtilityHelpers.getRootCheckedKeys([e], i, o, true).map(t => i[e] && i[e].key === e ? i[e].data : this.getDataForKeyNotInKeyEntities(e));
        let m = treeDataUtilityHelpers.extractNodeValues(g, c);
        let b = r(`${tj}-selection-tag`, {
          [`${tj}-selection-tag-disabled`]: l
        });
        let y = !isEmptyUtil.isEmpty(g) && !isEmptyUtil.isEmpty(g[0]);
        let v = d && y && n.has(g[0].key);
        let C = y && !g[0].disabled && !l && !v;
        let E = (t, i) => {
          i.preventDefault();
          this.removeTag(e);
        };
        let S = {
          size: a === "small" ? "small" : "large",
          key: `tag-${m}-${t}`,
          color: "white",
          className: b,
          closable: C,
          onClose: E
        };
        let _ = g[0];
        let O = isFunctionUtil_1.isFunction(p) ? p : e => ({
          isRenderInTag: true,
          content: objectPathGetDefault.getObjectPathDefault(e, f, null)
        });
        if (isFunctionUtil_1.isFunction(O)) {
          let {
            content: e,
            isRenderInTag: i
          } = _ ? O(_, {
            index: t,
            onClose: E
          }) : {};
          if (i) {
            return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, Object.assign({}, S), e);
          } else {
            return e;
          }
        }
        return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, Object.assign({}, S), m);
      };
      this.renderTagInput = () => {
        let {
          leafOnly: e,
          disabled: t,
          size: i,
          searchAutoFocus: n,
          placeholder: a,
          maxTagCount: r,
          checkRelation: o,
          showRestTagsPopover: l,
          restTagsPopoverProps: d,
          searchPosition: h,
          filterTreeNode: p,
          preventScroll: u
        } = this.props;
        let {
          keyEntities: c,
          checkedKeys: f,
          inputValue: g,
          realCheckedKeys: m
        } = this.state;
        let b = [];
        if (o === "related") {
          b = treeDataUtilityHelpers.getRootCheckedKeys(f, c, e, true);
        } else if (o === "unRelated") {
          b = [...m];
        }
        let y = p && h === ta.SEARCH_POSITION_TRIGGER ? n : undefined;
        return reactCoreLibraryReexport.createElement(tZ, {
          maxTagCount: r,
          disabled: t,
          onInputChange: e => this.search(e),
          ref: this.tagInputRef,
          placeholder: a,
          value: b,
          inputValue: g,
          size: i,
          showRestTagsPopover: l,
          restTagsPopoverProps: d,
          autoFocus: y,
          renderTagItem: (e, t) => this.renderTagItem(e, t),
          onRemove: e => this.removeTag(e),
          expandRestTagsOnClick: false,
          preventScroll: u
        });
      };
      this.renderInput = () => {
        let {
          searchPlaceholder: e,
          searchRender: t,
          showSearchClear: i,
          searchPosition: n,
          searchAutoFocus: a,
          multiple: o,
          disabled: l,
          preventScroll: d
        } = this.props;
        let h = n === ta.SEARCH_POSITION_DROPDOWN;
        let p = r({
          [`${tM}-input`]: h,
          [`${tj}-inputTrigger`]: !h
        });
        let {
          inputValue: u
        } = this.state;
        let c = {
          value: u,
          className: p,
          preventScroll: d,
          onChange: e => this.search(e)
        };
        let f = {
          showClear: i,
          prefix: reactCoreLibraryReexport.createElement(searchIconComponent.SearchIcon, null)
        };
        let g = h ? f : {
          autofocus: a,
          onFocus: e => this.foundation.handleInputTriggerFocus(),
          onBlur: e => this.foundation.handleInputTriggerBlur(),
          disabled: l
        };
        let m = r({
          [`${tM}-search-wrapper`]: h,
          [`${tj}-triggerSingleSearch-wrapper`]: !h && !o
        });
        let b = typeof t == "function" || typeof t == "boolean";
        if (b && !t) {
          return null;
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: m
          }, reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "TreeSelect"
          }, i => {
            let n = h ? e || i.searchPlaceholder : "";
            if (b) {
              return t(Object.assign(Object.assign(Object.assign({}, g), c), {
                placeholder: n
              }));
            } else {
              return reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({
                "aria-label": "Filter TreeSelect item",
                ref: this.inputRef,
                placeholder: n
              }, c, g));
            }
          }));
        }
      };
      this.renderEmpty = () => {
        let {
          emptyContent: e
        } = this.props;
        if (e) {
          return reactCoreLibraryReexport.createElement(treeNodeComponent.TreeNode, {
            empty: true,
            emptyContent: this.props.emptyContent
          });
        } else {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Tree"
          }, e => reactCoreLibraryReexport.createElement(treeNodeComponent.TreeNode, {
            empty: true,
            emptyContent: e.emptyText
          }));
        }
      };
      this.onNodeLoad = e => new Promise(t => this.foundation.setLoadKeys(e, t));
      this.onNodeSelect = (e, t) => {
        this.foundation.handleNodeSelect(e, t);
      };
      this.onNodeCheck = (e, t) => {
        this.foundation.handleNodeSelect(e, t);
      };
      this.onNodeExpand = (e, t) => {
        this.foundation.handleNodeExpand(e, t);
      };
      this.getTreeNodeRequiredProps = () => {
        let {
          expandedKeys: e,
          selectedKeys: t,
          checkedKeys: i,
          halfCheckedKeys: n,
          keyEntities: s,
          filteredKeys: a
        } = this.state;
        return {
          expandedKeys: e || new Set(),
          selectedKeys: t || [],
          checkedKeys: i || new Set(),
          halfCheckedKeys: n || new Set(),
          filteredKeys: a || new Set(),
          keyEntities: s
        };
      };
      this.getTreeNodeKey = e => {
        let {
          data: t
        } = e;
        let {
          key: i
        } = t;
        return i;
      };
      this.handlePopoverClose = e => {
        let {
          filterTreeNode: t,
          searchAutoFocus: i,
          searchPosition: n
        } = this.props;
        if (e === false && t) {
          this.foundation.clearInputValue();
        }
        if (t && n === ta.SEARCH_POSITION_DROPDOWN && e && i) {
          this.foundation.focusInput(true);
        }
      };
      this.afterClose = () => {
        let {
          filterTreeNode: e
        } = this.props;
        if (e) {
          this.foundation.clearInput();
        }
      };
      this.renderTreeNode = (e, t, i) => {
        let {
          data: n,
          key: a
        } = e;
        let r = this.foundation.getTreeNodeProps(a);
        let {
          showLine: o
        } = this.props;
        if (!r) {
          return null;
        }
        let l = throttledPathFilterStringify.throttledPathStr(e, ["key", "label", "disabled", "isLeaf", "icon", "isEnd"]);
        let {
          keyMaps: d
        } = this.props;
        let h = n[objectPathGetDefault.getObjectPathDefault(d, "children", "children")];
        if (!isUndefinedCheck.isUndefined(h)) {
          l.children = h;
        }
        return reactCoreLibraryReexport.createElement(treeNodeComponent.TreeNode, Object.assign({}, r, n, l, {
          data: n,
          style: i,
          showLine: o
        }));
      };
      this.itemKey = (e, t) => {
        let {
          visibleOptions: i
        } = t;
        return i[e].key;
      };
      this.renderNodeList = () => {
        let {
          flattenNodes: e,
          cachedFlattenNodes: t,
          motionKeys: i,
          motionType: n,
          filteredKeys: a
        } = this.state;
        let {
          direction: r
        } = this.context;
        let {
          virtualize: o,
          motionExpand: l
        } = this.props;
        let d = "expandedKeys" in this.props;
        if (!o || isEmptyUtil.isEmpty(o)) {
          return reactCoreLibraryReexport.createElement(reactTreeMotionRenderer.TreeMotionRenderer, {
            flattenNodes: e,
            flattenList: t,
            motionKeys: l ? i : new Set([]),
            motionType: n,
            searchTargetIsDeep: d && l && isEmptyUtil.isEmpty(i) && !isEmptyUtil.isEmpty(a),
            onMotionEnd: this.onMotionEnd,
            renderTreeNode: this.renderTreeNode
          });
        }
        let h = {
          visibleOptions: e,
          renderOption: this.renderTreeNode
        };
        return reactCoreLibraryReexport.createElement(autoHeightWrapperComponent.AutoHeightWrapper, {
          defaultHeight: o.height,
          defaultWidth: o.width
        }, t => {
          let {
            height: i,
            width: n
          } = t;
          return reactCoreLibraryReexport.createElement(reactVirtualListCore.FixedSizeList, {
            itemCount: e.length,
            itemSize: o.itemSize,
            height: i,
            width: n,
            itemKey: this.itemKey,
            itemData: h,
            className: `${tM}-virtual-list`,
            style: {
              direction: r
            }
          }, visibleOptionRenderer.renderOptionItem);
        });
      };
      this.renderTree = () => {
        let {
          keyEntities: e,
          motionKeys: t,
          motionType: i,
          inputValue: a,
          filteredKeys: o,
          flattenNodes: l,
          checkedKeys: d,
          realCheckedKeys: h
        } = this.state;
        let {
          loadData: p,
          filterTreeNode: u,
          disabled: c,
          multiple: f,
          showFilteredOnly: g,
          motionExpand: m,
          outerBottomSlot: b,
          outerTopSlot: y,
          expandAction: v,
          labelEllipsis: C,
          virtualize: E,
          optionListStyle: S,
          searchPosition: _,
          renderLabel: O,
          renderFullLabel: w,
          checkRelation: P
        } = this.props;
        let I = r(`${tM}-wrapper`);
        let T = r(`${tM}-option-list`, {
          [`${tM}-option-list-block`]: true
        });
        let x = !!a && !o.size;
        let F = isEmptyUtil.isEmpty(l) || g && x;
        let k = _ === ta.SEARCH_POSITION_DROPDOWN;
        return reactCoreLibraryReexport.createElement(createReactContext.ReactContext.Provider, {
          value: {
            loadData: p,
            treeDisabled: c,
            motion: m,
            motionKeys: t,
            motionType: i,
            expandAction: v,
            filterTreeNode: u,
            keyEntities: e,
            onNodeClick: this.onNodeClick,
            onNodeDoubleClick: this.onNodeDoubleClick,
            onNodeRightClick: emptyExportFunction.emptyFunction,
            onNodeExpand: this.onNodeExpand,
            onNodeSelect: this.onNodeSelect,
            onNodeCheck: this.onNodeCheck,
            renderTreeNode: this.renderTreeNode,
            multiple: f,
            showFilteredOnly: g,
            isSearching: !!a,
            renderLabel: O,
            renderFullLabel: w,
            labelEllipsis: C === undefined ? E : C
          }
        }, reactCoreLibraryReexport.createElement("div", {
          className: I
        }, y, !y && u && k && this.renderInput(), reactCoreLibraryReexport.createElement("div", {
          className: T,
          role: "tree",
          "aria-multiselectable": !!f,
          style: S
        }, F ? this.renderEmpty() : f ? reactCoreLibraryReexport.createElement(checkboxGroupComponent.CheckboxGroup, {
          value: Array.from(P === "related" ? d : h)
        }, this.renderNodeList()) : this.renderNodeList()), b));
      };
      this.state = {
        inputTriggerFocus: false,
        isOpen: false,
        isFocus: false,
        rePosKey: 0,
        dropdownMinWidth: null,
        inputValue: "",
        keyEntities: {},
        treeData: [],
        flattenNodes: [],
        cachedFlattenNodes: undefined,
        selectedKeys: [],
        checkedKeys: new Set(),
        halfCheckedKeys: new Set(),
        realCheckedKeys: new Set([]),
        disabledKeys: new Set(),
        motionKeys: new Set([]),
        motionType: "hide",
        expandedKeys: new Set(e.expandedKeys),
        filteredKeys: new Set(),
        filteredExpandedKeys: new Set(),
        filteredShownKeys: new Set(),
        prevProps: null,
        isHovering: false,
        cachedKeyValuePairs: {},
        loadedKeys: new Set(),
        loadingKeys: new Set()
      };
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.tagInputRef = reactCoreLibraryReexport.createRef();
      this.triggerRef = reactCoreLibraryReexport.createRef();
      this.optionsRef = reactCoreLibraryReexport.createRef();
      this.clickOutsideHandler = null;
      this.foundation = new tl(this.adapter);
      this.treeSelectID = Math.random().toString(36).slice(2);
      this.onMotionEnd = () => {
        this.adapter.rePositionDropdown();
      };
    }
    static getDerivedStateFromProps(e, t) {
      let n;
      let {
        prevProps: s,
        rePosKey: a
      } = t;
      let {
        keyMaps: r
      } = e;
      let o = t => !s && t in e || s && !deepEqualUtil_1.deepEqual(s[t], e[t]);
      let l = e.onChangeWithObject;
      let d = t.keyEntities || {};
      let h = t.cachedKeyValuePairs || {};
      let p = {
        prevProps: e
      };
      let u = o("treeData");
      let c = o("expandedKeys");
      let f = "expandedKeys" in e;
      let g = !!e.filterTreeNode && !!t.inputValue && !!t.inputValue.length;
      if (u) {
        n = e.treeData;
        p.treeData = n;
        let t = treeDataUtilityHelpers.buildTreeEntities(n, r);
        p.keyEntities = Object.assign({}, t.keyEntities);
        d = p.keyEntities;
        p.cachedKeyValuePairs = Object.assign({}, t.valueEntities);
        h = p.cachedKeyValuePairs;
      }
      if (n && e.motion && !deepEqualUtil_1.deepEqual(Object.keys(p.keyEntities), Object.keys(t.keyEntities)) && s && e.motion) {
        p.motionKeys = new Set([]);
        p.motionType = null;
      }
      let m = u && e.expandAll;
      if (g) {
        let i;
        if (n) {
          i = treeDataUtilityHelpers.filterTreeWithSearch({
            treeData: n,
            inputValue: t.inputValue,
            filterTreeNode: e.filterTreeNode,
            filterProps: e.treeNodeFilterProp,
            showFilteredOnly: e.showFilteredOnly,
            keyEntities: p.keyEntities,
            prevExpandedKeys: [...t.filteredExpandedKeys],
            keyMaps: r
          });
          p.flattenNodes = i.flattenNodes;
          p.motionKeys = new Set([]);
          p.filteredKeys = i.filteredKeys;
          p.filteredShownKeys = i.filteredShownKeys;
          p.filteredExpandedKeys = i.filteredExpandedKeys;
        }
        if (e.expandedKeys) {
          p.filteredExpandedKeys = treeDataUtilityHelpers.getParentKeysSet(e.expandedKeys, d, e.autoExpandParent || !s);
          if (s && e.motion) {
            let i = t ? t.filteredExpandedKeys : new Set([]);
            if (!n) {
              let n = treeDataUtilityHelpers.calcMotionType(i, p.filteredExpandedKeys, d);
              let {
                motionKeys: s
              } = n;
              let {
                motionType: a
              } = n;
              if (e.showFilteredOnly) {
                s = s.filter(e => t.filteredShownKeys.has(e));
              }
              if (a === "hide") {
                p.cachedFlattenNodes = reactDeepCloneUtil.reactDeepClone(t.flattenNodes);
              }
              p.motionKeys = new Set(s);
              p.motionType = a;
            }
          }
          p.flattenNodes = treeDataUtilityHelpers.flattenTreeToNodes(n || t.treeData, p.filteredExpandedKeys || t.filteredExpandedKeys, r, e.showFilteredOnly && t.filteredShownKeys);
        }
      } else {
        if (c || s && o("autoExpandParent")) {
          p.expandedKeys = treeDataUtilityHelpers.getParentKeysSet(e.expandedKeys, d, e.autoExpandParent || !s);
          if (s && e.motion && !n) {
            let {
              motionKeys: e,
              motionType: i
            } = treeDataUtilityHelpers.calcMotionType(t.expandedKeys, p.expandedKeys, d);
            p.motionKeys = new Set(e);
            p.motionType = i;
            if (i === "hide") {
              p.cachedFlattenNodes = reactDeepCloneUtil.reactDeepClone(t.flattenNodes);
            }
          }
        } else if (!s && (e.defaultExpandAll || e.expandAll) || m) {
          p.expandedKeys = new Set(Object.keys(d));
        } else if (!s && e.defaultExpandedKeys) {
          p.expandedKeys = treeDataUtilityHelpers.getParentKeysSet(e.defaultExpandedKeys, d);
        } else if (!s && e.defaultValue) {
          p.expandedKeys = treeDataUtilityHelpers.createCheckedKeysSet(treeDataUtilityHelpers.convertValuesByConfig(e.defaultValue, l, r), d, e.multiple, h);
        } else if (!s && e.value) {
          p.expandedKeys = treeDataUtilityHelpers.createCheckedKeysSet(treeDataUtilityHelpers.convertValuesByConfig(e.value, l, r), d, e.multiple, h);
        } else if (!f && u && e.value && (!t.treeData || !(t.treeData?.length > 0) || !e.loadData)) {
          p.expandedKeys = treeDataUtilityHelpers.createCheckedKeysSet(e.value, d, e.multiple, h);
        }
        if (!p.expandedKeys) {
          delete p.expandedKeys;
        }
        if (n || p.expandedKeys) {
          let e = treeDataUtilityHelpers.flattenTreeToNodes(n || t.treeData, p.expandedKeys || t.expandedKeys, r);
          p.flattenNodes = e;
        }
      }
      let b = e.multiple;
      if (b) {
        let i;
        if (o("value")) {
          i = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, l, r), h, b);
        } else if (!s && e.defaultValue) {
          i = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.defaultValue, l, r), h, b);
        } else if (n) {
          i = e.value ? treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, l, r) || [], h, b) : treeDataUtilityHelpers.filterExistingKeys(e.checkRelation === "related" ? t.checkedKeys : t.realCheckedKeys, d);
        }
        if (i) {
          if (e.checkRelation === "unRelated") {
            p.realCheckedKeys = new Set(i);
          } else if (e.checkRelation === "related") {
            let {
              checkedKeys: e,
              halfCheckedKeys: t
            } = treeDataUtilityHelpers.calcCheckedStates(i, d);
            p.checkedKeys = e;
            p.halfCheckedKeys = t;
          }
        }
      } else if (o("value")) {
        p.selectedKeys = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, l, r), h, b);
      } else if (!s && e.defaultValue) {
        p.selectedKeys = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.defaultValue, l, r), h, b);
      } else if (n) {
        if (e.value) {
          p.selectedKeys = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, l, r) || "", h, b);
        } else {
          p.selectedKeys = treeDataUtilityHelpers.filterExistingKeys(t.selectedKeys, d);
        }
      }
      if (o("loadedKeys")) {
        p.loadedKeys = new Set(e.loadedKeys);
      }
      if (u || o("value")) {
        p.rePosKey = a + 1;
      }
      if (n && e.disableStrictly && e.checkRelation === "related") {
        p.disabledKeys = treeDataUtilityHelpers.getDisabledCheckedKeys(d, r);
      }
      return p;
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, super.adapter), {
        updateInputValue: e => {
          this.setState({
            inputValue: e
          });
        }
      }), {
        registerClickOutsideHandler: e => {
          let t = t => {
            let i = this.optionsRef && this.optionsRef.current;
            let n = this.triggerRef && this.triggerRef.current;
            let s = reactDomEntryWrapper.findDOMNode(i);
            let a = t.target;
            if (!!s && (!s.contains(a) || !s.contains(a.parentNode)) && !!n && !n.contains(a)) {
              e(t);
            }
          };
          this.clickOutsideHandler = t;
          document.addEventListener("mousedown", t, false);
        },
        unregisterClickOutsideHandler: () => {
          document.removeEventListener("mousedown", this.clickOutsideHandler, false);
          this.clickOutsideHandler = null;
        },
        rePositionDropdown: () => {
          let {
            rePosKey: e
          } = this.state;
          e += 1;
          this.setState({
            rePosKey: e
          });
        }
      }), {
        updateState: e => {
          this.setState(Object.assign({}, e));
        },
        notifySelect: (e, t, i) => {
          if (this.props.onSelect) {
            this.props.onSelect(e, t, i);
          }
        },
        notifySearch: (e, t) => {
          if (this.props.onSearch) {
            this.props.onSearch(e, t);
          }
        },
        cacheFlattenNodes: e => {
          this.setState({
            cachedFlattenNodes: e ? reactDeepCloneUtil.reactDeepClone(this.state.flattenNodes) : undefined
          });
        },
        notifyLoad: (e, t) => {
          let {
            onLoad: i
          } = this.props;
          if (isFunctionUtil_1.isFunction(i)) {
            i(e, t);
          }
        },
        notifyClear: e => {
          if (this.props.onClear) {
            this.props.onClear(e);
          }
        }
      }), {
        updateLoadKeys: (e, t) => {
          this.setState(i => {
            let {
              loadedKeys: n,
              loadingKeys: s
            } = i;
            return this.foundation.handleNodeLoad(n, s, e, t);
          });
        },
        updateState: e => {
          this.setState(Object.assign({}, e));
        },
        openMenu: () => {
          this.setState({
            isOpen: true
          }, () => {
            this.props.onVisibleChange(true);
          });
        },
        closeMenu: e => {
          this.setState({
            isOpen: false
          }, () => {
            if (e) {
              e();
            }
            this.props.onVisibleChange(false);
          });
        },
        getTriggerWidth: () => {
          let e = this.triggerRef.current;
          return e && e.getBoundingClientRect().width;
        },
        setOptionWrapperWidth: e => {
          this.setState({
            dropdownMinWidth: e
          });
        },
        notifyChange: (e, t, i) => {
          if (this.props.onChange) {
            this.props.onChange(e, t, i);
          }
        },
        notifyChangeWithObject: (e, t) => {
          if (this.props.onChange) {
            this.props.onChange(e, t);
          }
        },
        notifyExpand: (e, t) => {
          let {
            expanded: i,
            node: n
          } = t;
          if (this.props.onExpand) {
            this.props.onExpand([...e], {
              expanded: i,
              node: n
            });
          }
          if (i && this.props.loadData) {
            this.onNodeLoad(n);
          }
        },
        notifyFocus: function () {
          if (e.props.onFocus) {
            e.props.onFocus(...arguments);
          }
        },
        notifyBlur: function () {
          if (e.props.onBlur) {
            e.props.onBlur(...arguments);
          }
        },
        toggleHovering: e => {
          this.setState({
            isHovering: e
          });
        },
        updateInputFocus: e => {
          if (e) {
            if (this.inputRef && this.inputRef.current) {
              let {
                preventScroll: e
              } = this.props;
              this.inputRef.current.focus({
                preventScroll: e
              });
            }
            if (this.tagInputRef && this.tagInputRef.current) {
              this.tagInputRef.current.focus();
            }
          } else {
            if (this.inputRef && this.inputRef.current) {
              this.inputRef.current.blur();
            }
            if (this.tagInputRef && this.tagInputRef.current) {
              this.tagInputRef.current.blur();
            }
          }
        },
        updateIsFocus: e => {
          this.setState({
            isFocus: e
          });
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    render() {
      let e = this.renderContent();
      let {
        motion: t,
        zIndex: i,
        mouseLeaveDelay: n,
        mouseEnterDelay: a,
        autoAdjustOverflow: r,
        stopPropagation: o,
        getPopupContainer: l,
        dropdownMargin: d,
        position: h
      } = this.props;
      let {
        isOpen: p,
        rePosKey: u
      } = this.state;
      let c = this.renderSelection();
      return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, {
        stopPropagation: o,
        getPopupContainer: l,
        zIndex: i,
        motion: t,
        margin: d,
        ref: this.optionsRef,
        content: e,
        visible: p,
        trigger: "custom",
        rePosKey: u,
        position: h || "bottomLeft",
        autoAdjustOverflow: r,
        mouseLeaveDelay: n,
        mouseEnterDelay: a,
        onVisibleChange: this.handlePopoverClose,
        afterClose: this.afterClose
      }, c);
    }
  }
  tV.contextType = createContextProvider.context;
  tV.propTypes = {
    "aria-describedby": l.string,
    "aria-errormessage": l.string,
    "aria-invalid": l.bool,
    "aria-labelledby": l.string,
    "aria-required": l.bool,
    borderless: l.bool,
    loadedKeys: l.arrayOf(l.string),
    loadData: l.func,
    onLoad: l.func,
    arrowIcon: l.node,
    clearIcon: l.node,
    defaultOpen: l.bool,
    defaultValue: l.oneOfType([l.string, l.array, l.object]),
    defaultExpandAll: l.bool,
    defaultExpandedKeys: l.array,
    expandAll: l.bool,
    disabled: l.bool,
    disableStrictly: l.bool,
    filterTreeNode: l.oneOfType([l.func, l.bool]),
    multiple: l.bool,
    searchPlaceholder: l.string,
    searchAutoFocus: l.bool,
    virtualize: l.object,
    treeNodeFilterProp: l.string,
    onChange: l.func,
    onClear: l.func,
    onSearch: l.func,
    onSelect: l.func,
    onExpand: l.func,
    onChangeWithObject: l.bool,
    onBlur: l.func,
    onFocus: l.func,
    value: l.oneOfType([l.string, l.number, l.array, l.object]),
    expandedKeys: l.array,
    autoExpandParent: l.bool,
    showClear: l.bool,
    showSearchClear: l.bool,
    autoAdjustOverflow: l.bool,
    showFilteredOnly: l.bool,
    showLine: l.bool,
    motionExpand: l.bool,
    emptyContent: l.node,
    keyMaps: l.object,
    leafOnly: l.bool,
    treeData: l.arrayOf(l.shape({
      key: l.string,
      value: l.oneOfType([l.string, l.number]),
      label: l.any
    })),
    dropdownClassName: l.string,
    dropdownStyle: l.object,
    dropdownMargin: l.oneOfType([l.number, l.object]),
    motion: l.bool,
    placeholder: l.string,
    maxTagCount: l.number,
    size: l.oneOf(ta.SIZE_SET),
    className: l.string,
    style: l.object,
    treeNodeLabelProp: l.string,
    suffix: l.node,
    prefix: l.node,
    insetLabel: l.node,
    insetLabelId: l.string,
    zIndex: l.number,
    getPopupContainer: l.func,
    dropdownMatchSelectWidth: l.bool,
    validateStatus: l.oneOf(ta.STATUS),
    mouseEnterDelay: l.number,
    mouseLeaveDelay: l.number,
    triggerRender: l.func,
    stopPropagation: l.oneOfType([l.bool, l.string]),
    outerBottomSlot: l.node,
    outerTopSlot: l.node,
    onVisibleChange: l.func,
    expandAction: l.oneOf(["click", "doubleClick", false]),
    searchPosition: l.oneOf([ta.SEARCH_POSITION_DROPDOWN, ta.SEARCH_POSITION_TRIGGER]),
    clickToHide: l.bool,
    renderLabel: l.func,
    renderFullLabel: l.func,
    labelEllipsis: l.bool,
    optionListStyle: l.object,
    searchRender: l.oneOfType([l.func, l.bool]),
    renderSelectedItem: l.func,
    checkRelation: l.string,
    "aria-label": l.string,
    showRestTagsPopover: l.bool,
    restTagsPopoverProps: l.object,
    preventScroll: l.bool,
    clickTriggerToHide: l.bool
  };
  tV.defaultProps = {
    borderless: false,
    searchPosition: ta.SEARCH_POSITION_DROPDOWN,
    arrowIcon: reactCoreLibraryReexport.createElement(chevronDownIcon.ChevronDownIcon, null),
    autoExpandParent: false,
    autoAdjustOverflow: true,
    stopPropagation: true,
    motion: true,
    motionExpand: true,
    expandAll: false,
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    disableStrictly: false,
    multiple: false,
    filterTreeNode: false,
    size: "default",
    treeNodeFilterProp: "label",
    onChangeWithObject: false,
    treeNodeLabelProp: "label",
    dropdownMatchSelectWidth: true,
    defaultOpen: false,
    showSearchClear: true,
    showClear: false,
    onVisibleChange: emptyExportFunction.emptyFunction,
    expandAction: false,
    clickToHide: true,
    searchAutoFocus: false,
    checkRelation: "related",
    "aria-label": "TreeSelect",
    showRestTagsPopover: false,
    restTagsPopoverProps: {},
    clickTriggerToHide: true
  };
  var isSetValidator = require("is-set-validator") /*id: 138262*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  let tB = {
    PREFIX: `${semiIdentifier.semiIdentifier}-cascader`,
    PREFIX_OPTION: `${semiIdentifier.semiIdentifier}-cascader-option`
  };
  let tz = {
    SIZE_SET: ["small", "large", "default"],
    VALIDATE_STATUS: ["success", "default", "error", "warning"],
    SHOW_NEXT_BY_CLICK: "click",
    SHOW_NEXT_BY_HOVER: "hover",
    LEAF_ONLY_MERGE_TYPE: "leafOnly",
    AUTO_MERGE_VALUE_MERGE_TYPE: "autoMergeValue",
    NONE_MERGE_TYPE: "none"
  };
  let tG = "_SEMI_CASCADER_SPLIT_";
  function tW(e) {
    return e.join(tG);
  }
  function tX(e) {
    let t = {};
    (function (e, t) {
      let i = (n, s, a) => {
        let r = n ? n.children : e;
        let o = null;
        if (n) {
          var l;
          let e = a ? `${a.key}${tG}${n.value}` : `${n.value}`;
          let i = a ? (l = a.pos, `${l}-${s}`) : `${s}`;
          t(o = {
            data: Object.assign({}, n),
            ind: s,
            key: e,
            pos: i,
            level: a ? a.level + 1 : 0,
            parentKey: a ? a.key : null,
            path: a ? [...a.path, e] : [e],
            valuePath: a ? [...a.valuePath, n.value] : [n.value]
          });
        }
        if (r) {
          r.forEach((e, t) => {
            i(e, t, o);
          });
        }
      };
      i(null);
    })(e, e => {
      let {
        key: i,
        parentKey: n
      } = e;
      let s = Object.assign({}, e);
      t[i] = s;
      s.parent = t[n];
      if (s.parent) {
        s.parent.children = s.parent.children || [];
        s.parent.children.push(s);
      }
    });
    return t;
  }
  function tY(e, t) {
    let i;
    if (t) {
      return tz.LEAF_ONLY_MERGE_TYPE;
    } else if (e) {
      return tz.AUTO_MERGE_VALUE_MERGE_TYPE;
    } else {
      return tz.NONE_MERGE_TYPE;
    }
  }
  class tq extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.updateSearching = e => {
        this._adapter.updateStates({
          isSearching: false
        });
      };
      this.handleTagRemoveByKey = e => {
        let {
          keyEntities: n
        } = this.getStates();
        let {
          disabled: s
        } = this.getProps();
        if (s) {
          return;
        }
        let a = n[e] ?? {};
        if (!(a == null ? undefined : a.data)?.disable) {
          this._handleMultipleSelect(a);
        }
      };
      this.handleTagRemoveInTrigger = e => {
        let {
          treeData: t
        } = this.getStates();
        let i = function (e, t) {
          let i = e.split("-").map(e => Number(e));
          let n = t;
          let s = [];
          i.forEach((e, t) => {
            n = t === 0 ? n[e] : (n == null ? undefined : n.children)?.[e];
            s.push(n == null ? undefined : n.value);
          });
          return tW(s);
        }(e, t);
        this.handleTagRemoveByKey(i);
      };
    }
    init() {
      let e = this.getProp("open") || this.getProp("defaultOpen");
      this.collectOptions(true);
      this._adapter.updateLoadingKeyRefValue(new Set());
      this._adapter.updateLoadedKeyRefValue(new Set());
      if (e && !this._isDisabled()) {
        this.open();
      }
    }
    destroy() {
      this._adapter.unregisterClickOutsideHandler();
    }
    _isDisabled() {
      return this.getProp("disabled");
    }
    _isFilterable() {
      return !!this.getProp("filterTreeNode");
    }
    _notifyChange(e) {
      let {
        onChangeWithObject: t,
        multiple: i
      } = this.getProps();
      let n = t ? [] : "value";
      if (i) {
        let t = [];
        e.forEach(e => {
          let i = this.getItemPropPath(e, n);
          t.push(i);
        });
        this._adapter.notifyChange(t);
      } else {
        let t = !isUndefinedCheck.isUndefined(e) && "key" in e ? this.getItemPropPath(e.key, n) : [];
        this._adapter.notifyChange(t);
      }
    }
    _isLeaf(e) {
      if (this.getProp("loadData")) {
        return !!e.isLeaf;
      } else {
        return !e.children || !e.children.length;
      }
    }
    _clearInput() {
      this._adapter.updateInputValue("");
    }
    _notifyBlur(e) {
      this._adapter.notifyBlur(e);
    }
    _notifyFocus(e) {
      this._adapter.notifyFocus(e);
    }
    _isOptionDisabled(e, t) {
      return treeDataUtilityHelpers.getParentPathKeys([e], t, true).some(e => t[e].data.disabled);
    }
    getItemPropPath(e, t, i) {
      let n = i || this.getState("keyEntities");
      let s = n[e];
      let a = [];
      if (s) {
        if (s._notExist) {
          a = s.path;
        } else {
          let e = s.path;
          a = Array.isArray(t) ? e.map(e => n[e].data) : e.map(e => n[e].data[t]);
        }
      }
      return a;
    }
    _getCacheValue(e) {
      let t;
      let {
        selectedKeys: i
      } = this.getStates();
      let n = Array.from(i)[0];
      if (isEmptyUtil.isEmpty(e[n])) {
        if (collectionIncludesUtil.includes(n, "not-exist-")) {
          let i = n.match(/not-exist-(\S*)/)[1];
          t = isEmptyUtil.isEmpty(e[i]) ? i : e[i].valuePath;
        } else {
          t = n;
        }
      } else {
        t = e[n].valuePath;
      }
      return t;
    }
    collectOptions() {
      let e;
      let t = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      let {
        treeData: i,
        value: n,
        defaultValue: s
      } = this.getProps();
      let a = tX(i);
      this._adapter.rePositionDropdown();
      if (t) {
        e = s;
      } else if (!isEmptyUtil.isEmpty(a)) {
        e = this._getCacheValue(a);
      }
      let r = this._isControlledComponent() ? n : e;
      if (isNullCheck.isNull(r) || isUndefinedCheck.isUndefined(r)) {
        this._adapter.updateStates({
          keyEntities: a
        });
      } else {
        this.updateSelectedKey(r, a);
      }
    }
    handleValueChange(e) {
      let {
        keyEntities: t
      } = this.getStates();
      let {
        multiple: i
      } = this.getProps();
      if (!i) {
        this.updateSelectedKey(e, t);
      }
    }
    _getClearSelectedKey(e) {
      let t = {};
      let {
        searchPlaceholder: i,
        placeholder: n,
        multiple: s
      } = this.getProps();
      t.selectedKeys = new Set([]);
      t.activeKeys = new Set([]);
      t.filteredKeys = new Set([]);
      if (e && !s) {
        t.inputPlaceHolder = i || n || "";
        t.inputValue = "";
      }
      return t;
    }
    updateSelectedKey(e, t) {
      var i;
      let {
        changeOnSelect: n,
        onChangeWithObject: s,
        multiple: a
      } = this.getProps();
      let {
        activeKeys: r,
        loading: o,
        keyEntities: l,
        selectedKeys: d
      } = this.getStates();
      let h = this._adapter.getLoadingKeyRefValue();
      let p = this._isFilterable();
      let u = [...r].filter(e => h.has(e));
      let c = Array.isArray(e) ? e : [e];
      let f = s && isObjectOrFunction_1_1.isObjectOrFunction(c[0]) ? c.map(e => e.value) : c;
      let g = ((i = f) == null ? undefined : i.length) ? Array.isArray(i[0]) ? i.map(e => tW(e)) : [tW(i)] : [];
      let m = {};
      let b = g.length > 0 ? g[0] : undefined;
      let y = b ? t[b] : undefined;
      if (y) {
        if (n || this._isLeaf(y.data)) {
          m.selectedKeys = new Set([b]);
          if (!u.length) {
            m.activeKeys = new Set(y.path);
          }
          if (p && !a) {
            let e = this.renderDisplayText(b, t);
            m.inputPlaceHolder = e;
          }
        } else if (deepEqualUtil_1.deepEqual(g, Array.from(d))) {
          m = this._getClearSelectedKey(p);
        }
      } else if (e && e.length) {
        let e = f[f.length - 1];
        let i = `not-exist-${e}`;
        m.selectedKeys = new Set([i]);
        if (p && !a) {
          let e = this._defaultRenderText(f);
          m.inputPlaceHolder = e;
        }
        t[i] = {
          data: {
            label: e,
            value: e
          },
          key: i,
          path: f,
          _notExist: true
        };
      } else if (o) {
        m.keyEntities = safePropertyAssignUtil.safePropertyAssign(l, t);
        this._adapter.updateStates(m);
        return;
      } else {
        m = this._getClearSelectedKey(p);
      }
      m.keyEntities = t;
      this._adapter.updateStates(m);
    }
    open() {
      let e = this._isFilterable();
      let {
        multiple: t
      } = this.getProps();
      this._adapter.openMenu();
      if (e) {
        this._clearInput();
        if (!t) {
          this.toggle2SearchInput(true);
        }
      }
      if (this._isControlledComponent()) {
        this.reCalcActiveKeys();
      }
      this._adapter.notifyDropdownVisibleChange(true);
      this._adapter.registerClickOutsideHandler(e => this.close(e));
    }
    reCalcActiveKeys() {
      let {
        selectedKeys: e,
        activeKeys: t,
        keyEntities: i
      } = this.getStates();
      let n = i[[...e][0]];
      if (!n) {
        return;
      }
      let s = new Set(n.path);
      if (!deepEqualUtil_1.deepEqual(s, t)) {
        this._adapter.updateStates({
          activeKeys: s
        });
      }
    }
    close(e, t) {
      let {
        multiple: i
      } = this.getProps();
      this._adapter.closeMenu();
      this._adapter.notifyDropdownVisibleChange(false);
      this._adapter.unregisterClickOutsideHandler();
      if (this._isFilterable()) {
        let {
          selectedKeys: e,
          isSearching: n
        } = this.getStates();
        let s = "";
        if (t && !i) {
          s = this.renderDisplayText(t);
        } else if (e.size && !i) {
          s = this.renderDisplayText([...e][0]);
        }
        this._adapter.updateStates({
          inputValue: s
        });
        if (!i) {
          this.toggle2SearchInput(false);
        }
        if (!i) {
          this._adapter.updateFocusState(false);
        }
      }
      this._notifyBlur(e);
    }
    focus() {
      let {
        filterTreeNode: e
      } = this.getProps();
      if (e) {
        this._adapter.focusInput();
      }
      this._adapter.updateFocusState(true);
    }
    blur() {
      let {
        filterTreeNode: e
      } = this.getProps();
      if (e) {
        this._adapter.blurInput();
      }
      this._adapter.updateFocusState(false);
    }
    toggle2SearchInput(e) {
      if (e) {
        this._adapter.toggleInputShow(e, () => this.focus());
      } else {
        this._adapter.toggleInputShow(e, () => undefined);
      }
    }
    handleItemClick(e, t) {
      if (!this._isDisabled()) {
        this.handleSingleSelect(e, t);
        this._adapter.rePositionDropdown();
      }
    }
    handleItemHover(e, t) {
      if (!this._isDisabled()) {
        this.handleShowNextByHover(t);
      }
    }
    handleShowNextByHover(e) {
      let {
        keyEntities: t
      } = this.getStates();
      let {
        data: i,
        key: n
      } = e;
      let s = this._isLeaf(i);
      let a = t[n].path;
      this._adapter.updateStates({
        activeKeys: new Set(a)
      });
      if (!s) {
        this.notifyIfLoadData(e);
      }
    }
    onItemCheckboxClick(e) {
      if (!this._isDisabled()) {
        this._handleMultipleSelect(e);
        this._adapter.rePositionDropdown();
      }
    }
    handleClick(e) {
      let t = this._isDisabled();
      let i = this._isFilterable();
      let {
        isOpen: n
      } = this.getStates();
      if (!t) {
        if (n) {
          if (n && !i) {
            this.close(e);
          }
        } else {
          this.open();
          this._notifyFocus(e);
        }
      }
    }
    handleSelectionEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleClick(e);
      }
    }
    toggleHoverState(e) {
      this._adapter.toggleHovering(e);
    }
    _defaultRenderText(e, t) {
      let i = this.getProp("separator");
      if (t && typeof t == "function") {
        return t(e);
      } else {
        return e.join(i);
      }
    }
    renderDisplayText(e, t) {
      let i = this.getProp("displayRender");
      let n = this.getProp("displayProp");
      let s = this.getItemPropPath(e, n, t);
      return this._defaultRenderText(s, i);
    }
    handleNodeLoad(e) {
      let {
        data: t,
        key: i
      } = e;
      let n = new Set(this._adapter.getLoadingKeyRefValue());
      let s = new Set(this._adapter.getLoadedKeyRefValue()).add(i);
      let a = new Set([...n]);
      a.delete(i);
      this._adapter.notifyOnLoad(s, t);
      this._adapter.updateLoadingKeyRefValue(a);
      this._adapter.updateLoadedKeyRefValue(s);
      this._adapter.updateStates({
        loadingKeys: a,
        loadedKeys: s
      });
    }
    notifyIfLoadData(e) {
      let {
        data: t,
        key: i
      } = e;
      this._adapter.updateStates({
        loading: false
      });
      if (!t.isLeaf && !t.children && this.getProp("loadData")) {
        let t = this._adapter.getLoadedKeyRefValue();
        let n = new Set(this._adapter.getLoadingKeyRefValue());
        if (t.has(i) || n.has(i)) {
          return;
        }
        this._adapter.updateStates({
          loading: true
        });
        let {
          keyEntities: s
        } = this.getStates();
        let a = this.getItemPropPath(i, [], s);
        let r = n.add(i);
        this._adapter.updateLoadingKeyRefValue(r);
        this._adapter.updateStates({
          loadingKeys: r
        });
        this._adapter.notifyLoadData(a, this.handleNodeLoad.bind(this, e));
      }
    }
    handleSingleSelect(e, t) {
      let {
        changeOnSelect: i,
        filterLeafOnly: n,
        multiple: s,
        enableLeafClick: a
      } = this.getProps();
      let {
        keyEntities: r,
        selectedKeys: o,
        isSearching: l
      } = this.getStates();
      let d = this._isFilterable();
      let {
        data: h,
        key: p
      } = t;
      let u = this._isLeaf(h);
      let c = r[p].path;
      let f = p !== [...o][0];
      if (!u && !i && !l) {
        this._adapter.updateStates({
          activeKeys: new Set(c)
        });
        this.notifyIfLoadData(t);
        return;
      }
      if (s) {
        this._adapter.updateStates({
          activeKeys: new Set(c)
        });
        if (u && a) {
          this.onItemCheckboxClick(t);
        }
      } else {
        this._adapter.notifySelect(h.value);
        if (f) {
          this._notifyChange(t);
          this.notifyIfLoadData(t);
          if (this._isControlledComponent()) {
            this._adapter.updateStates({
              activeKeys: new Set(c)
            });
            if (u) {
              this.close(e);
            }
            return;
          }
          this._adapter.updateStates({
            activeKeys: new Set(c),
            selectedKeys: new Set([p])
          });
          let i = this.renderDisplayText(p);
          if (d) {
            this._adapter.updateInputPlaceHolder(i);
          }
          if (u) {
            this.close(e, p);
          } else if (!n && l) {
            this.close(e, p);
          }
        } else {
          this.close(e);
        }
      }
    }
    _handleMultipleSelect(e) {
      let {
        key: t
      } = e;
      let {
        checkedKeys: i,
        keyEntities: n,
        resolvedCheckedKeys: s
      } = this.getStates();
      let {
        autoMergeValue: a,
        max: r,
        disableStrictly: o,
        leafOnly: l
      } = this.getProps();
      let d = i.has(t);
      let h = o ? this.calcCheckedStatus(!d, t) : !d;
      let {
        checkedKeys: p,
        halfCheckedKeys: u
      } = o ? this.calcNonDisabledCheckedKeys(t, h) : this.calcCheckedKeys(t, h);
      let c = tY(a, l);
      let f = c === tz.LEAF_ONLY_MERGE_TYPE;
      let g = c === tz.NONE_MERGE_TYPE;
      let m = new Set(treeDataUtilityHelpers.getRootCheckedKeys(p, n, f));
      let b = g ? p : m;
      if (isNumberUtil.isNumber(r)) {
        if (g) {
          if (i.size < p.size && p.size > r) {
            let e = [];
            p.forEach(t => {
              e.push(n[t]);
            });
            this._adapter.notifyOnExceed(e);
            return;
          }
        } else if (s.size < m.size && m.size > r) {
          let e = [];
          m.forEach(t => {
            e.push(n[t]);
          });
          this._adapter.notifyOnExceed(e);
          return;
        }
      }
      if (!this._isControlledComponent()) {
        this._adapter.updateStates({
          checkedKeys: p,
          halfCheckedKeys: u,
          resolvedCheckedKeys: m
        });
      }
      this._notifyChange(b);
      if (h) {
        this._notifySelect(b);
      }
      this._adapter.updateStates({
        inputValue: ""
      });
    }
    calcNonDisabledCheckedKeys(e, t) {
      let {
        keyEntities: i,
        disabledKeys: n
      } = this.getStates();
      let s = new Set(this.getState("checkedKeys"));
      let a = treeDataUtilityHelpers.getRootCheckedKeys(treeDataUtilityHelpers.collectChildKeys([e], i, false), i, true);
      if (!a.some(e => n.has(e))) {
        return this.calcCheckedKeys(e, t);
      }
      let r = a.filter(e => !n.has(e));
      let o = t ? [...r, ...s] : throttledArrayDiffUtil.throttledArrayDiff(treeDataUtilityHelpers.getRootCheckedKeys([...s], i, true), r);
      return treeDataUtilityHelpers.calcCheckedStates(o, i);
    }
    calcCheckedStatus(e, t) {
      if (!e) {
        return e;
      }
      let {
        checkedKeys: i,
        keyEntities: n,
        disabledKeys: s
      } = this.getStates();
      let a = treeDataUtilityHelpers.getRootCheckedKeys(treeDataUtilityHelpers.collectChildKeys([t], n, false), n, true);
      if (a.some(e => s.has(e))) {
        return !a.filter(e => !s.has(e)).every(e => i.has(e));
      } else {
        return e;
      }
    }
    _notifySelect(e) {
      let {
        keyEntities: t
      } = this.getStates();
      let i = [];
      e.forEach(e => {
        let a = t[e]?.data?.value;
        if (a !== undefined) {
          i.push(a);
        }
      });
      let n = i.length === 1 ? i[0] : i;
      this._adapter.notifySelect(n);
    }
    calcCheckedKeys(e, t) {
      let {
        keyEntities: i
      } = this.getStates();
      let n = new Set(this.getState("checkedKeys"));
      let s = new Set(this.getState("halfCheckedKeys"));
      if (t) {
        return treeDataUtilityHelpers.handleCheckState(e, i, n, s);
      } else {
        return treeDataUtilityHelpers.handleUncheckState(e, i, n, s);
      }
    }
    handleInputChange(e) {
      this._adapter.updateInputValue(e);
      let {
        keyEntities: t
      } = this.getStates();
      let {
        treeNodeFilterProp: i,
        filterTreeNode: n,
        filterLeafOnly: s
      } = this.getProps();
      let a = [];
      if (e) {
        a = Object.values(t).filter(t => {
          let {
            key: s,
            _notExist: a,
            data: r
          } = t;
          return !a && function (e, t, i, n) {
            let s;
            if (!i) {
              return true;
            }
            let a = i;
            if (typeof i == "boolean") {
              a = (e, t) => {
                let i = e.toLowerCase();
                return t.toLowerCase().includes(i);
              };
              s = n.join("");
            } else {
              s = n.join();
            }
            return a(e, s, t);
          }(e, r, n, this.getItemPropPath(s, i));
        }).filter(e => n && !s || this._isLeaf(e)).map(e => e.key);
      }
      this._adapter.updateStates({
        isSearching: !!e,
        filteredKeys: new Set(a)
      });
      this._adapter.notifyOnSearch(e);
    }
    handleClear() {
      let {
        isSearching: e
      } = this.getStates();
      let {
        searchPlaceholder: t,
        placeholder: i,
        multiple: n
      } = this.getProps();
      let s = this._isFilterable();
      let a = this._isControlledComponent();
      let r = {};
      if (n) {
        r.isSearching = false;
        this._adapter.updateInputValue("");
        this._adapter.notifyOnSearch("");
        r.checkedKeys = new Set([]);
        r.halfCheckedKeys = new Set([]);
        r.selectedKeys = new Set([]);
        r.activeKeys = new Set([]);
        r.resolvedCheckedKeys = new Set([]);
        this._adapter.notifyChange([]);
      } else if (s && e) {
        r.isSearching = false;
        this._adapter.updateInputValue("");
        this._adapter.notifyOnSearch("");
      } else {
        if (s) {
          r.inputValue = "";
          r.inputPlaceHolder = t || i || "";
          this._adapter.updateInputValue("");
          this._adapter.notifyOnSearch("");
        }
        if (!a) {
          r.selectedKeys = new Set([]);
        }
        r.activeKeys = new Set([]);
        r.filteredKeys = new Set([]);
        this._adapter.notifyChange([]);
      }
      this._adapter.updateStates(r);
      this._adapter.notifyClear();
      this._adapter.rePositionDropdown();
    }
    handleClearEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleClear();
      }
    }
    getRenderData() {
      let {
        keyEntities: e,
        isSearching: t
      } = this.getStates();
      let i = this._isFilterable();
      if (t && i) {
        return this.getFilteredData();
      } else {
        return Object.values(e).filter(e => e.parentKey === null && !e._notExist).sort((e, t) => parseInt(e.ind, 10) - parseInt(t.ind, 10));
      }
    }
    getFilteredData() {
      let {
        treeNodeFilterProp: e,
        filterSorter: t
      } = this.getProps();
      let {
        filteredKeys: i,
        keyEntities: n,
        inputValue: s
      } = this.getStates();
      let a = [];
      [...i].forEach(t => {
        let i = n[t];
        if (!i) {
          return;
        }
        let s = this.getItemPropPath(t, []);
        let r = s.map(t => t[e]);
        let o = this._isOptionDisabled(t, n);
        a.push({
          data: i.data,
          pathData: s,
          key: t,
          disabled: o,
          searchText: r
        });
      });
      if (isFunctionUtil_1.isFunction(t)) {
        a.sort((e, i) => t(e.pathData, i.pathData, s));
      }
      return a;
    }
    handleListScroll(e, t) {
      let {
        activeKeys: i,
        keyEntities: n
      } = this.getStates();
      let s = [...i][i.size - 1];
      let a = s ? objectPathGetDefault.getObjectPathDefault(n, [s, "data"], null) : null;
      this._adapter.notifyListScroll(e, {
        panelIndex: t,
        activeNode: a
      });
    }
  }
  var chevronRightIcon = require("chevron-right-icon") /*id: 386685*/;
  var reactTickIcon = require("react-tick-icon") /*id: 818313*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var t2 = e => {
    let {
      index: t,
      data: i,
      style: n
    } = e;
    let {
      visibleOptions: s,
      renderOption: a
    } = i;
    return a(s[t], t, n);
  };
  let t4 = tB.PREFIX_OPTION;
  class t9 extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.onClick = (e, t) => {
        let {
          onItemClick: i
        } = this.props;
        if (!t.data.disabled && (!("disabled" in t) || !t.disabled)) {
          i(e, t);
        }
      };
      this.handleItemEnterPress = (e, t) => {
        if (enterKeyCheck.isEnterKey(e)) {
          this.onClick(e, t);
        }
      };
      this.onHover = (e, t) => {
        let {
          showNext: i,
          onItemHover: n
        } = this.props;
        if (!t.data.disabled && i === tz.SHOW_NEXT_BY_HOVER) {
          n(e, t);
        }
      };
      this.onCheckboxChange = (e, t) => {
        let {
          onItemCheckboxClick: i
        } = this.props;
        e.stopPropagation();
        if (e.nativeEvent && typeof e.nativeEvent.stopImmediatePropagation == "function") {
          e.nativeEvent.stopImmediatePropagation();
        }
        i(t);
      };
      this.getItemStatus = e => {
        let {
          activeKeys: t,
          selectedKeys: i,
          loadedKeys: n,
          loadingKeys: s
        } = this.props;
        let a = {
          active: false,
          selected: false,
          loading: false
        };
        if (t.has(e)) {
          a.active = true;
        }
        if (i.has(e)) {
          a.selected = true;
        }
        if (s.has(e) && !n.has(e)) {
          a.loading = true;
        }
        return a;
      };
      this.renderIcon = function (e, t = false) {
        let i = e => e + (t ? ` ${t4}-icon-left` : "");
        switch (e) {
          case "child":
            return reactCoreLibraryReexport.createElement(chevronRightIcon.ChevronRightIcon, {
              className: i(`${t4}-icon ${t4}-icon-expand`)
            });
          case "tick":
            return reactCoreLibraryReexport.createElement(reactTickIcon.TickIcon, {
              className: i(`${t4}-icon ${t4}-icon-active`)
            });
          case "loading":
            return reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, {
              wrapperClassName: i(`${t4}-spin-icon`)
            });
          case "empty":
            return reactCoreLibraryReexport.createElement("span", {
              "aria-hidden": true,
              className: i(`${t4}-icon ${t4}-icon-empty`)
            });
          default:
            return null;
        }
      };
      this.highlight = e => {
        let t = [];
        let {
          keyword: i,
          separator: n
        } = this.props;
        e.forEach((a, r) => {
          if (typeof a == "string" && collectionIncludesUtil.includes(a, i)) {
            a.split(i).forEach((e, n) => {
              if (n > 0) {
                t.push(reactCoreLibraryReexport.createElement("span", {
                  className: `${t4}-label-highlight`,
                  key: `${n}-${r}`
                }, i));
              }
              t.push(e);
            });
          } else {
            t.push(a);
          }
          if (r !== e.length - 1) {
            t.push(n);
          }
        });
        return t;
      };
      this.renderFlattenOptionItem = (e, t, i) => {
        let {
          multiple: a,
          selectedKeys: o,
          checkedKeys: l,
          halfCheckedKeys: d,
          keyword: h,
          filterRender: p,
          virtualize: u
        } = this.props;
        let {
          searchText: c,
          key: f,
          disabled: g,
          pathData: m
        } = e;
        let b = o.has(f);
        let y = r(t4, {
          [`${t4}-flatten`]: !p,
          [`${t4}-disabled`]: g,
          [`${t4}-select`]: b && !a
        });
        let v = t => {
          this.onClick(t, e);
        };
        let C = t => this.onCheckboxChange(t, e);
        if (p) {
          let t = {
            className: y,
            inputValue: h,
            disabled: g,
            data: m,
            checkStatus: {
              checked: l.has(e.key),
              halfChecked: d.has(e.key)
            },
            selected: b,
            onClick: v,
            onCheck: C
          };
          let a = p(t);
          let r = u ? {
            key: f,
            style: Object.assign(Object.assign({}, a.props.style ?? {}), i)
          } : {
            key: f
          };
          return reactCoreLibraryReexport.cloneElement(a, r);
        }
        return reactCoreLibraryReexport.createElement("li", {
          role: "menuitem",
          className: y,
          style: i,
          key: f,
          onClick: v,
          onKeyPress: t => this.handleItemEnterPress(t, e)
        }, reactCoreLibraryReexport.createElement("span", {
          className: `${t4}-label`
        }, !a && this.renderIcon("empty"), a && reactCoreLibraryReexport.createElement(checkboxWrapperComponent.CheckboxWrapper, {
          onChange: C,
          disabled: g,
          indeterminate: d.has(e.key),
          checked: l.has(e.key),
          className: `${t4}-label-checkbox`
        }), this.highlight(c)));
      };
      this.renderFlattenOption = e => {
        let {
          virtualize: t
        } = this.props;
        return reactCoreLibraryReexport.createElement("ul", {
          className: `${t4}-list`,
          key: "flatten-list"
        }, t ? this.renderVirtualizeList(e) : e.map(e => this.renderFlattenOptionItem(e)));
      };
      this.renderVirtualizeList = e => {
        let {
          direction: i
        } = this.context;
        let {
          virtualize: n
        } = this.props;
        return reactCoreLibraryReexport.createElement(reactVirtualListCore.FixedSizeList, {
          height: n.height,
          itemCount: e.length,
          itemSize: n.itemSize,
          itemData: {
            visibleOptions: e,
            renderOption: this.renderFlattenOptionItem
          },
          width: n.width ?? "100%",
          style: {
            direction: i
          }
        }, t2);
      };
    }
    renderItem(e) {
      let t;
      let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      let {
        multiple: n,
        checkedKeys: a,
        halfCheckedKeys: o
      } = this.props;
      let l = i.length;
      i.push(reactCoreLibraryReexport.createElement("ul", {
        role: "menu",
        className: `${t4}-list`,
        key: e[0].key,
        onScroll: e => this.props.onListScroll(e, l)
      }, e.map(e => {
        let {
          data: i,
          key: l,
          parentKey: d
        } = e;
        let {
          children: h,
          label: p,
          disabled: u,
          isLeaf: c
        } = i;
        let {
          active: f,
          selected: g,
          loading: m
        } = this.getItemStatus(l);
        let b = !!h && h.length;
        let y = b || this.props.loadData && !c;
        if (f && b) {
          t = e;
        }
        let v = r(t4, {
          [`${t4}-active`]: f && !g,
          [`${t4}-select`]: g && !n,
          [`${t4}-disabled`]: u
        });
        let C = d ? {
          "aria-owns": `cascaderItem-${d}`
        } : {};
        return reactCoreLibraryReexport.createElement("li", Object.assign({
          role: "menuitem",
          id: `cascaderItem-${l}`,
          "aria-expanded": f,
          "aria-haspopup": !!y,
          "aria-disabled": u
        }, C, {
          className: v,
          key: l,
          onClick: t => {
            this.onClick(t, e);
          },
          onKeyPress: t => this.handleItemEnterPress(t, e),
          onMouseEnter: t => {
            this.onHover(t, e);
          }
        }), reactCoreLibraryReexport.createElement("span", {
          className: `${t4}-label`
        }, g && !n && this.renderIcon("tick"), !g && !n && this.renderIcon("empty"), n && reactCoreLibraryReexport.createElement(checkboxWrapperComponent.CheckboxWrapper, {
          onChange: t => this.onCheckboxChange(t, e),
          disabled: u,
          indeterminate: o.has(e.key),
          checked: a.has(e.key),
          className: `${t4}-label-checkbox`
        }), reactCoreLibraryReexport.createElement("span", null, p)), y ? this.renderIcon(m ? "loading" : "child", true) : null);
      })));
      if (t) {
        i.concat(this.renderItem(t.children, i));
      }
      return i;
    }
    renderEmpty() {
      let {
        emptyContent: e
      } = this.props;
      return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Cascader"
      }, t => reactCoreLibraryReexport.createElement("ul", {
        className: `${t4} ${t4}-empty`,
        key: "empty-list"
      }, reactCoreLibraryReexport.createElement("span", {
        className: `${t4}-label`,
        "x-semi-prop": "emptyContent"
      }, e || t.emptyText)));
    }
    render() {
      let e;
      let {
        data: t,
        searchable: i
      } = this.props;
      let {
        direction: n
      } = this.context;
      let a = !t || !t.length;
      let o = r({
        [`${t4}-lists`]: true,
        [`${t4}-lists-rtl`]: n === "rtl",
        [`${t4}-lists-empty`]: a
      });
      e = a ? this.renderEmpty() : i ? this.renderFlattenOption(t) : this.renderItem(t);
      return reactCoreLibraryReexport.createElement("div", {
        className: o
      }, e);
    }
  }
  t9.contextType = createContextProvider.context;
  t9.propTypes = {
    data: l.array,
    emptyContent: l.node,
    searchable: l.bool,
    onItemClick: l.func,
    onItemHover: l.func,
    multiple: l.bool,
    showNext: l.oneOf([tz.SHOW_NEXT_BY_CLICK, tz.SHOW_NEXT_BY_HOVER]),
    checkedKeys: l.object,
    halfCheckedKeys: l.object,
    onItemCheckboxClick: l.func,
    separator: l.string,
    keyword: l.string,
    virtualize: l.object
  };
  t9.defaultProps = {
    empty: false
  };
  let t6 = tB.PREFIX;
  class t3 extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleInputChange = e => {
        this.foundation.handleInputChange(e);
      };
      this.handleTagRemoveInTrigger = e => {
        this.foundation.handleTagRemoveInTrigger(e);
      };
      this.handleTagClose = (e, t, i) => {
        t.preventDefault();
        this.foundation.handleTagRemoveByKey(i);
      };
      this.renderTagItem = (e, t) => {
        let {
          keyEntities: i,
          disabledKeys: n
        } = this.state;
        let {
          size: a,
          disabled: o,
          displayProp: l,
          displayRender: d,
          disableStrictly: p
        } = this.props;
        let u = o || i[e].data.disabled || p && n.has(e);
        if (i[e]) {
          let n = r(`${t6}-selection-tag`, {
            [`${t6}-selection-tag-disabled`]: u
          });
          if (isFunctionUtil_1.isFunction(d)) {
            return d(i[e], t);
          } else {
            return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, {
              size: a === "default" ? "large" : a,
              key: `tag-${e}-${t}`,
              color: "white",
              tagKey: e,
              className: n,
              closable: true,
              onClose: this.handleTagClose
            }, i[e].data[l]);
          }
        }
        return null;
      };
      this.onRemoveInTagInput = e => {
        this.foundation.handleTagRemoveByKey(e);
      };
      this.handleItemClick = (e, t) => {
        this.foundation.handleItemClick(e, t);
      };
      this.handleItemHover = (e, t) => {
        this.foundation.handleItemHover(e, t);
      };
      this.onItemCheckboxClick = e => {
        this.foundation.onItemCheckboxClick(e);
      };
      this.handleListScroll = (e, t) => {
        this.foundation.handleListScroll(e, t);
      };
      this.renderContent = () => {
        let {
          inputValue: e,
          isSearching: t,
          activeKeys: i,
          selectedKeys: n,
          checkedKeys: a,
          halfCheckedKeys: o,
          loadedKeys: l,
          loadingKeys: d
        } = this.state;
        let {
          filterTreeNode: h,
          dropdownClassName: p,
          dropdownStyle: u,
          loadData: c,
          emptyContent: f,
          separator: g,
          topSlot: m,
          bottomSlot: b,
          showNext: y,
          multiple: v,
          filterRender: C,
          virtualizeInSearch: E
        } = this.props;
        let S = r(p, `${t6}-popover`);
        let _ = this.foundation.getRenderData();
        return reactCoreLibraryReexport.createElement("div", {
          className: S,
          role: "listbox",
          style: u
        }, m, reactCoreLibraryReexport.createElement(t9, {
          activeKeys: i,
          selectedKeys: n,
          separator: g,
          loadedKeys: l,
          loadingKeys: d,
          onItemClick: this.handleItemClick,
          onItemHover: this.handleItemHover,
          showNext: y,
          onItemCheckboxClick: this.onItemCheckboxClick,
          onListScroll: this.handleListScroll,
          searchable: !!h && t,
          keyword: e,
          emptyContent: f,
          loadData: c,
          data: _,
          multiple: v,
          checkedKeys: a,
          halfCheckedKeys: o,
          filterRender: C,
          virtualize: E
        }), b);
      };
      this.renderPlusN = e => {
        let {
          disabled: t,
          showRestTagsPopover: i,
          restTagsPopoverProps: n
        } = this.props;
        let a = r(`${t6}-selection-n`, {
          [`${t6}-selection-n-disabled`]: t
        });
        let o = reactCoreLibraryReexport.createElement("span", {
          className: a
        }, "+", e.length);
        if (i) {
          return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, Object.assign({
            content: e,
            showArrow: true,
            trigger: "hover",
            position: "top",
            autoAdjustOverflow: true
          }, n), o);
        } else {
          return o;
        }
      };
      this.renderMultipleTags = () => {
        let {
          autoMergeValue: e,
          maxTagCount: t
        } = this.props;
        let {
          checkedKeys: i,
          resolvedCheckedKeys: n
        } = this.state;
        let a = this.mergeType === tz.NONE_MERGE_TYPE ? i : n;
        let r = [];
        let o = [];
        [...a].forEach((e, i) => {
          let n = !isNumberUtil.isNumber(t) || t >= i + 1;
          let s = this.renderTagItem(e, i);
          if (n) {
            r.push(s);
          } else {
            o.push(s);
          }
        });
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, r, !isEmptyUtil.isEmpty(o) && this.renderPlusN(o));
      };
      this.renderDisplayText = () => {
        let {
          displayProp: e,
          separator: t,
          displayRender: i
        } = this.props;
        let {
          selectedKeys: n
        } = this.state;
        let a = "";
        if (n.size) {
          let r = this.foundation.getItemPropPath([...n][0], e);
          a = i && typeof i == "function" ? i(r) : r.map((e, i) => reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
            key: `${e}-${i}`
          }, i < r.length - 1 ? reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e, t) : e));
        }
        return a;
      };
      this.renderSelectContent = () => {
        let {
          placeholder: e,
          filterTreeNode: t,
          multiple: i
        } = this.props;
        let {
          checkedKeys: n
        } = this.state;
        if (!t) {
          if (i) {
            if (n.size === 0) {
              return reactCoreLibraryReexport.createElement("span", {
                className: `${t6}-selection-placeholder`
              }, e);
            } else {
              return this.renderMultipleTags();
            }
          }
          {
            let t = this.renderDisplayText();
            let i = r({
              [`${t6}-selection-placeholder`]: !t
            });
            return reactCoreLibraryReexport.createElement("span", {
              className: i
            }, t || e);
          }
        }
        if (i) {
          return this.renderTagInput();
        } else {
          return this.renderInput();
        }
      };
      this.renderSuffix = () => {
        let {
          suffix: e
        } = this.props;
        let t = r({
          [`${t6}-suffix`]: true,
          [`${t6}-suffix-text`]: e && isStringTypeCheck.isString(e),
          [`${t6}-suffix-icon`]: commonFrontendUtils.isIconElement(e)
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: t,
          "x-semi-prop": "suffix"
        }, e);
      };
      this.renderPrefix = () => {
        let {
          prefix: e,
          insetLabel: t,
          insetLabelId: i
        } = this.props;
        let n = e || t;
        let a = r({
          [`${t6}-prefix`]: true,
          [`${t6}-inset-label`]: t,
          [`${t6}-prefix-text`]: n && isStringTypeCheck.isString(n),
          [`${t6}-prefix-icon`]: commonFrontendUtils.isIconElement(n)
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: a,
          id: i,
          "x-semi-prop": "prefix,insetLabel"
        }, n);
      };
      this.renderCustomTrigger = () => {
        let t;
        let {
          disabled: i,
          triggerRender: n,
          multiple: a
        } = this.props;
        let {
          selectedKeys: r,
          inputValue: o,
          inputPlaceHolder: l,
          resolvedCheckedKeys: d,
          checkedKeys: h,
          keyEntities: p
        } = this.state;
        if (a) {
          if (this.mergeType === tz.NONE_MERGE_TYPE) {
            t = new Set();
            h.forEach(e => {
              t.add(p[e]?.pos);
            });
          } else {
            t = new Set();
            d.forEach(e => {
              t.add(p[e]?.pos);
            });
          }
        } else {
          t = p[[...r][0]]?.pos;
        }
        return reactCoreLibraryReexport.createElement(triggerRenderWrapper.TriggerRenderWrapper, {
          value: t,
          inputValue: o,
          onChange: this.handleInputChange,
          onClear: this.handleClear,
          placeholder: l,
          disabled: i,
          triggerRender: n,
          componentName: "Cascader",
          componentProps: Object.assign({}, this.props),
          onSearch: this.handleInputChange,
          onRemove: this.handleTagRemoveInTrigger
        });
      };
      this.handleMouseOver = () => {
        this.foundation.toggleHoverState(true);
      };
      this.handleMouseLeave = () => {
        this.foundation.toggleHoverState(false);
      };
      this.handleClear = e => {
        if (e) {
          e.stopPropagation();
        }
        this.foundation.handleClear();
      };
      this.handleClearEnterPress = e => {
        if (e) {
          e.stopPropagation();
        }
        this.foundation.handleClearEnterPress(e);
      };
      this.showClearBtn = () => {
        let {
          showClear: e,
          disabled: t,
          multiple: i
        } = this.props;
        let {
          selectedKeys: n,
          isOpen: s,
          isHovering: a,
          checkedKeys: r,
          inputValue: o
        } = this.state;
        let l = n.size;
        let d = i && r.size;
        return e && (o || l || d) && !t && (s || a);
      };
      this.renderClearBtn = () => {
        let e = r(`${t6}-clearbtn`);
        let {
          clearIcon: t
        } = this.props;
        if (this.showClearBtn()) {
          return reactCoreLibraryReexport.createElement("div", {
            className: e,
            onClick: this.handleClear,
            onKeyPress: this.handleClearEnterPress,
            role: "button",
            tabIndex: 0
          }, t || reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, null));
        } else {
          return null;
        }
      };
      this.renderArrow = () => {
        let {
          arrowIcon: e
        } = this.props;
        if (this.showClearBtn()) {
          return null;
        } else if (e) {
          return reactCoreLibraryReexport.createElement("div", {
            className: r(`${t6}-arrow`),
            "x-semi-prop": "arrowIcon"
          }, e);
        } else {
          return null;
        }
      };
      this.renderSelection = () => {
        let {
          disabled: e,
          multiple: t,
          filterTreeNode: i,
          style: n,
          size: a,
          className: o,
          validateStatus: l,
          prefix: d,
          suffix: h,
          insetLabel: p,
          triggerRender: u,
          showClear: c,
          id: f,
          borderless: g
        } = this.props;
        let {
          isOpen: m,
          isFocus: b,
          isInput: y,
          checkedKeys: v
        } = this.state;
        let C = typeof u == "function";
        let E = C ? r(o) : r(t6, o, {
          [`${t6}-borderless`]: g,
          [`${t6}-focus`]: b || m && !y,
          [`${t6}-disabled`]: e,
          [`${t6}-single`]: true,
          [`${t6}-filterable`]: !!i,
          [`${t6}-error`]: l === "error",
          [`${t6}-warning`]: l === "warning",
          [`${t6}-small`]: a === "small",
          [`${t6}-large`]: a === "large",
          [`${t6}-with-prefix`]: d || p,
          [`${t6}-with-suffix`]: h
        });
        let S = r(`${t6}-selection`, {
          [`${t6}-selection-multiple`]: t && !isEmptyUtil.isEmpty(v)
        });
        let _ = C ? this.renderCustomTrigger() : [reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "prefix"
        }, d || p ? this.renderPrefix() : null), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "selection"
        }, reactCoreLibraryReexport.createElement("div", {
          className: S
        }, this.renderSelectContent())), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "clearbtn"
        }, this.renderClearBtn()), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "suffix"
        }, h ? this.renderSuffix() : null), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "arrow"
        }, this.renderArrow())];
        return reactCoreLibraryReexport.createElement("div", Object.assign({
          className: E,
          style: n,
          ref: this.triggerRef,
          onClick: e => this.foundation.handleClick(e),
          onKeyPress: e => this.foundation.handleSelectionEnterPress(e),
          "aria-invalid": this.props["aria-invalid"],
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-describedby": this.props["aria-describedby"],
          "aria-required": this.props["aria-required"],
          id: f
        }, c ? {
          onMouseEnter: () => this.handleMouseOver(),
          onMouseLeave: () => this.handleMouseLeave()
        } : {}, {
          role: "combobox",
          tabIndex: 0
        }, this.getDataAttr(this.props)), _);
      };
      this.state = {
        disabledKeys: new Set(),
        isOpen: e.defaultOpen,
        rePosKey: 0,
        keyEntities: {},
        selectedKeys: new Set([]),
        activeKeys: new Set([]),
        filteredKeys: new Set([]),
        inputValue: "",
        isSearching: false,
        inputPlaceHolder: e.searchPlaceholder || e.placeholder,
        prevProps: {},
        isHovering: false,
        checkedKeys: new Set([]),
        halfCheckedKeys: new Set([]),
        resolvedCheckedKeys: new Set([]),
        loadedKeys: new Set(),
        loadingKeys: new Set(),
        loading: false,
        showInput: false
      };
      this.options = {};
      this.isEmpty = false;
      this.mergeType = tY(e.autoMergeValue, e.leafOnly);
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.triggerRef = reactCoreLibraryReexport.createRef();
      this.optionsRef = reactCoreLibraryReexport.createRef();
      this.clickOutsideHandler = null;
      this.foundation = new tq(this.adapter);
      this.loadingKeysRef = reactCoreLibraryReexport.createRef();
      this.loadedKeysRef = reactCoreLibraryReexport.createRef();
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign(Object.assign(Object.assign({}, super.adapter), {
        updateInputValue: e => {
          this.setState({
            inputValue: e
          });
        },
        updateInputPlaceHolder: e => {
          this.setState({
            inputPlaceHolder: e
          });
        },
        focusInput: () => {
          let {
            preventScroll: e
          } = this.props;
          if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.focus({
              preventScroll: e
            });
          }
        },
        blurInput: () => {
          if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.blur();
          }
        }
      }), {
        registerClickOutsideHandler: e => {
          let t = t => {
            let i = this.optionsRef && this.optionsRef.current;
            let n = this.triggerRef && this.triggerRef.current;
            let s = reactDomEntryWrapper.findDOMNode(i);
            let a = t.target;
            if (!!s && (!s.contains(a) || !s.contains(a.parentNode)) && !!n && !n.contains(a)) {
              e(t);
            }
          };
          this.clickOutsideHandler = t;
          document.addEventListener("mousedown", t, false);
        },
        unregisterClickOutsideHandler: () => {
          document.removeEventListener("mousedown", this.clickOutsideHandler, false);
        },
        rePositionDropdown: () => {
          let {
            rePosKey: e
          } = this.state;
          e += 1;
          this.setState({
            rePosKey: e
          });
        }
      }), {
        updateStates: e => {
          this.setState(Object.assign({}, e));
        },
        openMenu: () => {
          this.setState({
            isOpen: true
          });
        },
        closeMenu: e => {
          this.setState({
            isOpen: false
          }, () => {
            if (e) {
              e();
            }
          });
        },
        updateSelection: e => this.setState({
          selectedKeys: e
        }),
        notifyChange: e => {
          if (this.props.onChange) {
            this.props.onChange(e);
          }
        },
        notifySelect: e => {
          if (this.props.onSelect) {
            this.props.onSelect(e);
          }
        },
        notifyOnSearch: e => {
          if (this.props.onSearch) {
            this.props.onSearch(e);
          }
        },
        notifyFocus: function () {
          if (e.props.onFocus) {
            e.props.onFocus(...arguments);
          }
        },
        notifyBlur: function () {
          if (e.props.onBlur) {
            e.props.onBlur(...arguments);
          }
        },
        notifyDropdownVisibleChange: e => {
          this.props.onDropdownVisibleChange(e);
        },
        toggleHovering: e => {
          this.setState({
            isHovering: e
          });
        },
        notifyLoadData: (e, t) => {
          let {
            loadData: i
          } = this.props;
          if (i) {
            new Promise(n => {
              i(e).then(() => {
                t();
                this.setState({
                  loading: false
                });
                n();
              });
            });
          }
        },
        notifyOnLoad: (e, t) => {
          let {
            onLoad: i
          } = this.props;
          if (i) {
            i(e, t);
          }
        },
        notifyListScroll: (e, t) => {
          let {
            panelIndex: i,
            activeNode: n
          } = t;
          this.props.onListScroll(e, {
            panelIndex: i,
            activeNode: n
          });
        },
        notifyOnExceed: e => this.props.onExceed(e),
        notifyClear: () => this.props.onClear(),
        toggleInputShow: (e, t) => {
          this.setState({
            showInput: e
          }, () => {
            t();
          });
        },
        updateFocusState: e => {
          this.setState({
            isFocus: e
          });
        },
        updateLoadingKeyRefValue: e => {
          this.loadingKeysRef.current = e;
        },
        getLoadingKeyRefValue: () => this.loadingKeysRef.current,
        updateLoadedKeyRefValue: e => {
          this.loadedKeysRef.current = e;
        },
        getLoadedKeyRefValue: () => this.loadedKeysRef.current
      });
    }
    static getDerivedStateFromProps(e, t) {
      let {
        multiple: i,
        value: n,
        defaultValue: s,
        onChangeWithObject: a,
        leafOnly: r,
        autoMergeValue: o
      } = e;
      let {
        prevProps: l
      } = t;
      let d = t.keyEntities || {};
      let h = {};
      let p = t => {
        let i = isEmptyUtil.isEmpty(l) && t in e;
        let n = l && !deepEqualUtil_1.deepEqual(l[t], e[t]);
        return i || n;
      };
      let u = (e, t) => {
        let i = [];
        if (Array.isArray(e)) {
          i = Array.isArray(e[0]) ? e : [e];
        } else if (e !== undefined) {
          i = [[e]];
        }
        let n = [];
        i.forEach(e => {
          let t = a && isObjectOrFunction_1_1.isObjectOrFunction(e[0]) ? e.map(e => e == null ? undefined : e.value) : e;
          if (t.length > 0) {
            n.push(t);
          }
        });
        return n.map(e => tW(e));
      };
      let c = p("treeData") || (() => {
        let t = !l && "treeData" in e;
        let i = l && l.treeData !== e.treeData;
        return t || i;
      })();
      let f = p("value") || isEmptyUtil.isEmpty(l) && s;
      if (i && (c || f)) {
        if (c) {
          h.treeData = e.treeData;
          d = tX(e.treeData);
          h.keyEntities = d;
        }
        let i = t.checkedKeys;
        if (f) {
          i = u(p("value") ? n : s, d);
        } else if (c && "value" in e) {
          i = u(n, d);
        }
        if (isSetValidator.isSet(i)) {
          i = [...i];
        }
        let a = treeDataUtilityHelpers.calcCheckedStates(i, d);
        let l = new Set(a.checkedKeys);
        let g = new Set(a.halfCheckedKeys);
        if (e.disableStrictly) {
          h.disabledKeys = treeDataUtilityHelpers.getDisabledCheckedKeys(d);
        }
        let m = tY(o, r) === tz.LEAF_ONLY_MERGE_TYPE;
        h.prevProps = e;
        h.checkedKeys = l;
        h.halfCheckedKeys = g;
        h.resolvedCheckedKeys = new Set(treeDataUtilityHelpers.getRootCheckedKeys(l, d, m));
      }
      return h;
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    componentDidUpdate(e) {
      let t = false;
      if (!deepEqualUtil_1.deepEqual(e.treeData, this.props.treeData) && !this.props.multiple) {
        t = true;
        this.foundation.collectOptions();
      }
      if (e.value !== this.props.value && !t) {
        this.foundation.handleValueChange(this.props.value);
      }
    }
    renderTagInput() {
      let {
        size: e,
        disabled: t,
        placeholder: i,
        maxTagCount: n,
        showRestTagsPopover: a,
        restTagsPopoverProps: o
      } = this.props;
      let {
        inputValue: l,
        checkedKeys: d,
        keyEntities: h,
        resolvedCheckedKeys: p
      } = this.state;
      let u = r(`${t6}-tagInput-wrapper`);
      let c = this.mergeType === tz.NONE_MERGE_TYPE ? d : p;
      return reactCoreLibraryReexport.createElement(tZ, {
        className: u,
        ref: this.inputRef,
        disabled: t,
        size: e,
        value: [...c],
        showRestTagsPopover: a,
        restTagsPopoverProps: o,
        maxTagCount: n,
        renderTagItem: this.renderTagItem,
        inputValue: l,
        onInputChange: this.handleInputChange,
        onRemove: this.onRemoveInTagInput,
        placeholder: i,
        expandRestTagsOnClick: false
      });
    }
    renderInput() {
      let {
        size: e,
        disabled: t
      } = this.props;
      let i = r(`${t6}-input`);
      let {
        inputValue: n,
        inputPlaceHolder: a,
        showInput: o
      } = this.state;
      let l = {
        disabled: t,
        value: n,
        className: i,
        onChange: this.handleInputChange
      };
      let d = r({
        [`${t6}-search-wrapper`]: true,
        [`${t6}-search-wrapper-${e}`]: e !== "default"
      });
      let h = this.renderDisplayText();
      let p = r({
        [`${t6}-selection-placeholder`]: !h,
        [`${t6}-selection-text-hide`]: o && n,
        [`${t6}-selection-text-inactive`]: o && !n
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: d
      }, reactCoreLibraryReexport.createElement("span", {
        className: p
      }, h || a), o && reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({
        ref: this.inputRef,
        size: e
      }, l)));
    }
    close() {
      this.foundation.close();
    }
    open() {
      this.foundation.open();
    }
    focus() {
      this.foundation.focus();
    }
    blur() {
      this.foundation.blur();
    }
    render() {
      let {
        zIndex: e,
        getPopupContainer: t,
        autoAdjustOverflow: i,
        stopPropagation: n,
        mouseLeaveDelay: a,
        mouseEnterDelay: r,
        position: o,
        motion: l,
        dropdownMargin: d
      } = this.props;
      let {
        isOpen: h,
        rePosKey: p
      } = this.state;
      let {
        direction: u
      } = this.context;
      let c = this.renderContent();
      let f = this.renderSelection();
      return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, {
        getPopupContainer: t,
        zIndex: e,
        motion: l,
        margin: d,
        ref: this.optionsRef,
        content: c,
        visible: h,
        trigger: "custom",
        rePosKey: p,
        position: o ?? (u === "rtl" ? "bottomRight" : "bottomLeft"),
        autoAdjustOverflow: i,
        stopPropagation: n,
        mouseLeaveDelay: a,
        mouseEnterDelay: r,
        afterClose: () => this.foundation.updateSearching(false)
      }, f);
    }
  }
  t3.__SemiComponentName__ = "Cascader";
  t3.contextType = createContextProvider.context;
  t3.propTypes = {
    "aria-labelledby": l.string,
    "aria-invalid": l.bool,
    "aria-errormessage": l.string,
    "aria-describedby": l.string,
    "aria-required": l.bool,
    "aria-label": l.string,
    arrowIcon: l.node,
    borderless: l.bool,
    clearIcon: l.node,
    changeOnSelect: l.bool,
    defaultValue: l.oneOfType([l.string, l.array]),
    disabled: l.bool,
    dropdownClassName: l.string,
    dropdownStyle: l.object,
    dropdownMargin: l.oneOfType([l.number, l.object]),
    emptyContent: l.node,
    motion: l.bool,
    filterTreeNode: l.oneOfType([l.func, l.bool]),
    filterLeafOnly: l.bool,
    placeholder: l.string,
    searchPlaceholder: l.string,
    size: l.oneOf(tz.SIZE_SET),
    style: l.object,
    className: l.string,
    treeData: l.arrayOf(l.shape({
      value: l.oneOfType([l.string, l.number]),
      label: l.any
    })),
    treeNodeFilterProp: l.string,
    suffix: l.node,
    prefix: l.node,
    insetLabel: l.node,
    insetLabelId: l.string,
    id: l.string,
    displayProp: l.string,
    displayRender: l.func,
    onChange: l.func,
    onSearch: l.func,
    onSelect: l.func,
    onBlur: l.func,
    onFocus: l.func,
    children: l.node,
    getPopupContainer: l.func,
    zIndex: l.number,
    value: l.oneOfType([l.string, l.number, l.array]),
    validateStatus: l.oneOf(tz.VALIDATE_STATUS),
    showNext: l.oneOf([tz.SHOW_NEXT_BY_CLICK, tz.SHOW_NEXT_BY_HOVER]),
    stopPropagation: l.oneOfType([l.bool, l.string]),
    showClear: l.bool,
    defaultOpen: l.bool,
    autoAdjustOverflow: l.bool,
    onDropdownVisibleChange: l.func,
    triggerRender: l.func,
    onListScroll: l.func,
    onChangeWithObject: l.bool,
    bottomSlot: l.node,
    topSlot: l.node,
    multiple: l.bool,
    autoMergeValue: l.bool,
    maxTagCount: l.number,
    showRestTagsPopover: l.bool,
    restTagsPopoverProps: l.object,
    max: l.number,
    separator: l.string,
    onExceed: l.func,
    onClear: l.func,
    loadData: l.func,
    onLoad: l.func,
    loadedKeys: l.array,
    disableStrictly: l.bool,
    leafOnly: l.bool,
    enableLeafClick: l.bool,
    preventScroll: l.bool,
    position: l.string
  };
  t3.defaultProps = commonFrontendUtils.configProxyHandler(t3.__SemiComponentName__, {
    borderless: false,
    leafOnly: false,
    arrowIcon: reactCoreLibraryReexport.createElement(chevronDownIcon.ChevronDownIcon, null),
    stopPropagation: true,
    motion: true,
    defaultOpen: false,
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    showClear: false,
    autoClearSearchValue: true,
    changeOnSelect: false,
    disableStrictly: false,
    autoMergeValue: true,
    multiple: false,
    filterTreeNode: false,
    filterLeafOnly: true,
    showRestTagsPopover: false,
    restTagsPopoverProps: {},
    separator: " / ",
    size: "default",
    treeNodeFilterProp: "label",
    displayProp: "label",
    treeData: [],
    showNext: tz.SHOW_NEXT_BY_CLICK,
    onExceed: emptyExportFunction.emptyFunction,
    onClear: emptyExportFunction.emptyFunction,
    onDropdownVisibleChange: emptyExportFunction.emptyFunction,
    onListScroll: emptyExportFunction.emptyFunction,
    enableLeafClick: false,
    "aria-label": "Cascader"
  });
  let t5 = {
    PREFIX: `${semiIdentifier.semiIdentifier}-rating`
  };
  let t7 = ["default", "small"];
  let t8 = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M10.7525 1.90411C11.1451 0.698628 12.8549 0.698631 13.2475 1.90411L15.2395 8.01946H21.6858C22.9565 8.01946 23.4848 9.64143 22.4568 10.3865L17.2417 14.1659L19.2337 20.2813C19.6263 21.4868 18.2431 22.4892 17.2151 21.7442L12 17.9647L6.78489 21.7442C5.75687 22.4892 4.37368 21.4868 4.76635 20.2813L6.75834 14.1659L1.54323 10.3865C0.515206 9.64142 1.04354 8.01946 2.31425 8.01946H8.76048L10.7525 1.90411Z",
      fill: "currentColor"
    }));
  }, "star");
  class ie extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, ie.defaultAdapter), e));
      this.handleStarFocusVisible = e => {
        let {
          target: t
        } = e;
        let {
          count: i
        } = this.getProps();
        try {
          if (t.matches(":focus-visible")) {
            this._adapter.setEmptyStarFocusVisible(true);
          }
        } catch (e) {
          pageNoopHandler.noopHandler(true, "Warning: [Semi Rating] The current browser does not support the focus-visible");
        }
      };
      this.handleStarBlur = e => {
        let {
          emptyStarFocusVisible: t
        } = this.getStates();
        if (t) {
          this._adapter.setEmptyStarFocusVisible(false);
        }
      };
    }
    init() {
      let {
        autoFocus: e,
        disabled: t
      } = this.getProps();
      if (e && !t) {
        this._adapter.focus();
      }
    }
    _getScroll(e, t) {
      let i = t ? e.pageYOffset : e.pageXOffset;
      let n = t ? "scrollTop" : "scrollLeft";
      if (typeof i != "number") {
        let t = e.document;
        if (typeof (i = t.documentElement[n]) != "number") {
          i = t.body[n];
        }
      }
      return i;
    }
    _getClientPosition(e) {
      let t;
      let i;
      let n = e.ownerDocument;
      let {
        body: s
      } = n;
      let a = n && n.documentElement;
      let r = e.getBoundingClientRect();
      t = r.left;
      i = r.top;
      return {
        left: t -= a.clientLeft || s.clientLeft || 0,
        top: i -= a.clientTop || s.clientTop || 0
      };
    }
    _getOffsetLeft(e) {
      let t = this._getClientPosition(e);
      let i = e.ownerDocument;
      let n = i.defaultView || i.parentWindow;
      t.left += this._getScroll(n);
      return t.left;
    }
    getStarValue(e, t) {
      let {
        allowHalf: i
      } = this.getProps();
      let n = this._adapter.getContext("direction") === "rtl";
      let s = e + 1;
      if (i) {
        let i = this._adapter.getStarDOM(e);
        let a = this._getOffsetLeft(i);
        let r = i.clientWidth;
        if (n && t - a > r / 2) {
          s -= 0.5;
        } else if (!n && t - a < r / 2) {
          s -= 0.5;
        }
      }
      return s;
    }
    handleHover(e, t) {
      let i = this.getStarValue(t, e.pageX);
      let {
        clearedValue: n,
        hoverValue: s
      } = this.getStates();
      if (i !== s && i !== n) {
        this._adapter.notifyHoverChange(i, null);
      }
    }
    handleMouseLeave() {
      this._adapter.notifyHoverChange(undefined, null);
    }
    handleClick(e, t) {
      let {
        allowClear: i
      } = this.getProps();
      let {
        value: n
      } = this.getStates();
      let s = this.getStarValue(t, e.pageX);
      let a = !!i && s === n;
      this._adapter.updateValue(a ? 0 : s);
      if (a) {
        this._adapter.notifyHoverChange(undefined, s);
      } else {
        this._adapter.clearValue(null);
      }
    }
    handleFocus(e) {
      this._adapter.notifyFocus(e);
    }
    handleBlur(e) {
      this._adapter.notifyBlur(e);
    }
    handleKeyDown(e, t) {
      let i;
      let n;
      let {
        key: s
      } = e;
      let {
        count: a,
        allowHalf: r
      } = this.getProps();
      let o = this._adapter.getContext("direction") === "rtl";
      let l = r ? 0.5 : 1;
      if (s === "ArrowRight" || s === "ArrowUp") {
        i = t + (o ? -l : l);
      } else if (s === "ArrowLeft" || s === "ArrowDown") {
        i = t + (o ? l : -l);
      }
      n = i > a ? 0 : i < 0 ? a : i;
      if (["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"].includes(s)) {
        this._adapter.notifyKeyDown(e);
        this._adapter.updateValue(n);
        this.changeFocusStar(n, e);
        e.preventDefault();
        this._adapter.notifyHoverChange(undefined, null);
      }
    }
    changeFocusStar(e, t) {
      let {
        count: i,
        allowHalf: n,
        preventScroll: s
      } = this.getProps();
      let a = Math.ceil(e) - 1;
      let r = [...t.currentTarget.childNodes].map(e => e.childNodes[0].childNodes);
      if (a < 0) {
        r[i][0].focus({
          preventScroll: s
        });
      } else {
        r[a][n ? +(e * 10 % 10 != 5) : 0].focus({
          preventScroll: s
        });
      }
    }
  }
  class it extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, it.defaultAdapter), e));
      this.handleFocusVisible = (e, t) => {
        let {
          target: i
        } = e;
        try {
          if (i.matches(":focus-visible")) {
            if (t === "first") {
              this._adapter.setFirstStarFocus(true);
            } else {
              this._adapter.setSecondStarFocus(true);
            }
          }
        } catch (e) {
          pageNoopHandler.noopHandler(true, "Warning: [Semi Rating] The current browser does not support the focus-visible");
        }
      };
      this.handleBlur = (e, t) => {
        let {
          firstStarFocus: i,
          secondStarFocus: n
        } = this.getStates();
        if (t === "first") {
          if (i) {
            this._adapter.setFirstStarFocus(false);
          }
        } else if (n) {
          this._adapter.setSecondStarFocus(false);
        }
      };
    }
  }
  class ii extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.firstStar = null;
      this.secondStar = null;
      this.onHover = e => {
        let {
          onHover: t,
          index: i
        } = this.props;
        t(e, i);
      };
      this.onClick = e => {
        let {
          onClick: t,
          index: i
        } = this.props;
        t(e, i);
      };
      this.onFocus = (e, t) => {
        let {
          onFocus: i
        } = this.props;
        if (i) {
          i(e);
        }
        this.foundation.handleFocusVisible(e, t);
      };
      this.onBlur = (e, t) => {
        let {
          onBlur: i
        } = this.props;
        if (i) {
          i(e);
        }
        this.foundation.handleBlur(e, t);
      };
      this.onKeyDown = e => {
        let {
          onClick: t,
          index: i
        } = this.props;
        if (e.keyCode === 13) {
          t(e, i);
        }
      };
      this.starFocus = () => {
        let {
          value: e,
          index: t,
          preventScroll: i
        } = this.props;
        if (e - t == 0.5) {
          this.firstStar.focus({
            preventScroll: i
          });
        } else {
          this.secondStar.focus({
            preventScroll: i
          });
        }
      };
      this.saveFirstStar = e => {
        this.firstStar = e;
      };
      this.saveSecondStar = e => {
        this.secondStar = e;
      };
      this.state = {
        firstStarFocus: false,
        secondStarFocus: false
      };
      this.foundation = new it(this.adapter);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setFirstStarFocus: e => {
          this.setState({
            firstStarFocus: e
          });
        },
        setSecondStarFocus: e => {
          this.setState({
            secondStarFocus: e
          });
        }
      });
    }
    render() {
      let {
        index: e,
        prefixCls: t,
        character: i,
        count: n,
        value: a,
        disabled: o,
        allowHalf: l,
        focused: d,
        size: h,
        ariaLabelPrefix: p
      } = this.props;
      let {
        firstStarFocus: u,
        secondStarFocus: c
      } = this.state;
      let f = e + 1;
      let g = f - a;
      let m = typeof h == "number";
      let b = r(t, {
        [`${t}-half`]: l && g < 1 && g > 0,
        [`${t}-full`]: f <= a,
        [`${t}-${h}`]: !m
      });
      let y = m ? {
        width: h,
        height: h,
        fontSize: h
      } : {};
      let v = i || reactCoreLibraryReexport.createElement(t8, {
        size: m ? "inherit" : h === "small" ? "default" : "extra-large",
        style: {
          display: "block"
        }
      });
      let C = e === n;
      let E = r(`${t}-wrapper`, {
        [`${t}-disabled`]: o,
        [`${t5.PREFIX}-focus`]: (u || c) && a !== 0
      });
      let S = {
        onClick: o ? null : this.onClick,
        onKeyDown: o ? null : this.onKeyDown,
        onMouseMove: o ? null : this.onHover,
        className: E
      };
      let _ = l ? n * 2 + 1 : n + 1;
      let O = {
        ref: this.saveFirstStar,
        role: "radio",
        "aria-checked": a === e + 0.5,
        "aria-posinset": e * 2 + 1,
        "aria-setsize": _,
        "aria-disabled": o,
        "aria-label": `${e + 0.5} ${p}s`,
        "aria-labelledby": this.props["aria-describedby"],
        "aria-describedby": this.props["aria-describedby"],
        className: r(`${t}-first`, `${t5.PREFIX}-no-focus`),
        tabIndex: o || a !== e + 0.5 ? -1 : 0,
        onFocus: e => {
          this.onFocus(e, "first");
        },
        onBlur: e => {
          this.onBlur(e, "first");
        }
      };
      let w = !o && (a === e + 1 || C && a === 0) ? 0 : -1;
      let P = {
        ref: this.saveSecondStar,
        role: "radio",
        "aria-checked": C ? a === 0 : a === e + 1,
        "aria-posinset": l ? (e + 1) * 2 : e + 1,
        "aria-setsize": _,
        "aria-disabled": o,
        "aria-label": `${C ? 0 : e + 1} ${p}${e === 0 ? "" : "s"}`,
        "aria-labelledby": this.props["aria-describedby"],
        "aria-describedby": this.props["aria-describedby"],
        className: r(`${t}-second`, `${t5.PREFIX}-no-focus`),
        tabIndex: w,
        onFocus: e => {
          this.onFocus(e, "second");
        },
        onBlur: e => {
          this.onBlur(e, "second");
        }
      };
      return reactCoreLibraryReexport.createElement("li", {
        className: b,
        style: Object.assign({}, y),
        key: e
      }, reactCoreLibraryReexport.createElement("div", Object.assign({}, S), l && !C && reactCoreLibraryReexport.createElement("div", Object.assign({}, O, {
        style: {
          width: `${(1 - g) * 100}%`
        }
      }), v), reactCoreLibraryReexport.createElement("div", Object.assign({}, P, {
        "x-semi-prop": "character"
      }), v)));
    }
  }
  ii.propTypes = {
    value: l.number,
    index: l.number,
    prefixCls: l.string,
    allowHalf: l.bool,
    onHover: l.func,
    onClick: l.func,
    character: l.node,
    focused: l.bool,
    disabled: l.bool,
    count: l.number,
    ariaLabelPrefix: l.string,
    size: l.oneOfType([l.oneOf(t7), l.number]),
    "aria-describedby": l.string,
    onFocus: l.func,
    onBlur: l.func,
    preventScroll: l.bool
  };
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  function ia(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  class ir extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.rate = null;
      this.onHover = (e, t) => {
        this.foundation.handleHover(e, t);
      };
      this.onMouseLeave = () => {
        this.foundation.handleMouseLeave();
      };
      this.onClick = (e, t) => {
        this.foundation.handleClick(e, t);
      };
      this.onFocus = e => {
        this.foundation.handleFocus(e);
      };
      this.onBlur = e => {
        this.foundation.handleBlur(e);
      };
      this.onKeyDown = e => {
        let {
          value: t
        } = this.state;
        this.foundation.handleKeyDown(e, t);
      };
      this.focus = () => {
        let {
          disabled: e,
          preventScroll: t
        } = this.props;
        if (!e) {
          this.rate.focus({
            preventScroll: t
          });
        }
      };
      this.blur = () => {
        let {
          disabled: e
        } = this.props;
        if (!e) {
          this.rate.blur();
        }
      };
      this.saveRef = e => t => {
        this.stars[e] = t;
      };
      this.saveRate = e => {
        this.rate = e;
      };
      this.handleStarFocusVisible = e => {
        this.foundation.handleStarFocusVisible(e);
      };
      this.handleStarBlur = e => {
        this.foundation.handleStarBlur(e);
      };
      this.getAriaLabelPrefix = () => {
        if (this.props["aria-label"]) {
          return this.props["aria-label"];
        }
        let e = "star";
        let {
          character: t
        } = this.props;
        if (typeof t == "string") {
          e = t;
        }
        return e;
      };
      this.getItemList = e => {
        let {
          count: t,
          allowHalf: i,
          prefixCls: n,
          disabled: a,
          character: r,
          size: o,
          tooltips: l
        } = this.props;
        let {
          value: d,
          hoverValue: h,
          focused: p
        } = this.state;
        return [...Array(t + 1).keys()].map(u => {
          let c = reactCoreLibraryReexport.createElement(ii, {
            ref: this.saveRef(u),
            index: u,
            count: t,
            prefixCls: `${n}-star`,
            allowHalf: i,
            value: h === undefined ? d : h,
            onClick: a ? emptyFunctionExport.emptyFunction : this.onClick,
            onHover: a ? emptyFunctionExport.emptyFunction : this.onHover,
            key: u,
            disabled: a,
            character: r,
            focused: p,
            size: u === t ? 0 : o,
            ariaLabelPrefix: e,
            onFocus: a || t !== u ? emptyFunctionExport.emptyFunction : this.handleStarFocusVisible,
            onBlur: a || t !== u ? emptyFunctionExport.emptyFunction : this.handleStarBlur
          });
          if (l) {
            let e = l[u] ? l[u] : "";
            let t = h - 1 === u;
            return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
              visible: t,
              trigger: "custom",
              content: e,
              key: `${u}-${t}`
            }, c);
          }
          return c;
        });
      };
      let t = e.value === undefined ? e.defaultValue : e.value;
      this.stars = {};
      this.state = {
        value: t,
        focused: false,
        hoverValue: undefined,
        clearedValue: null,
        emptyStarFocusVisible: false
      };
      this.foundation = new ie(this.adapter);
    }
    static getDerivedStateFromProps(e, t) {
      if ("value" in e && e.value !== undefined) {
        return Object.assign(Object.assign({}, t), {
          value: e.value
        });
      } else {
        return t;
      }
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        focus: () => {
          let {
            disabled: e,
            count: t
          } = this.props;
          let {
            value: i
          } = this.state;
          if (!e) {
            let e = Math.ceil(i) - 1;
            this.stars[e < 0 ? t : e].starFocus();
          }
        },
        getStarDOM: e => {
          let t = this.stars && this.stars[e];
          return reactDomEntryWrapper.findDOMNode(t);
        },
        notifyHoverChange: (e, t) => {
          let {
            onHoverChange: i
          } = this.props;
          this.setState({
            hoverValue: e,
            clearedValue: t
          });
          i(e);
        },
        updateValue: e => {
          let {
            onChange: t
          } = this.props;
          if (!("value" in this.props)) {
            this.setState({
              value: e
            });
          }
          t(e);
        },
        clearValue: e => {
          this.setState({
            clearedValue: e
          });
        },
        notifyFocus: e => {
          let {
            onFocus: t
          } = this.props;
          this.setState({
            focused: true
          });
          if (t) {
            t(e);
          }
        },
        notifyBlur: e => {
          let {
            onBlur: t
          } = this.props;
          this.setState({
            focused: false
          });
          if (t) {
            t(e);
          }
        },
        notifyKeyDown: e => {
          let {
            onKeyDown: t
          } = this.props;
          this.setState({
            focused: false
          });
          if (t) {
            t(e);
          }
        },
        setEmptyStarFocusVisible: e => {
          this.setState({
            emptyStarFocusVisible: e
          });
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    render() {
      let e = this.props;
      let {
        style: t,
        prefixCls: i,
        disabled: n,
        className: a,
        id: o,
        count: l,
        tabIndex: d
      } = e;
      let h = ia(e, ["style", "prefixCls", "disabled", "className", "id", "count", "tabIndex"]);
      let {
        value: p,
        emptyStarFocusVisible: u
      } = this.state;
      let c = this.getAriaLabelPrefix();
      let f = `Rating: ${p} of ${l} ${c}${p === 1 ? "" : "s"},`;
      let g = this.getItemList(c);
      let m = r(i, {
        [`${i}-disabled`]: n,
        [`${i}-focus`]: u
      }, a);
      return reactCoreLibraryReexport.createElement("ul", Object.assign({
        "aria-label": f,
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        className: m,
        style: t,
        onMouseLeave: n ? emptyFunctionExport.emptyFunction : this.onMouseLeave,
        tabIndex: n ? -1 : d,
        onFocus: n ? emptyFunctionExport.emptyFunction : this.onFocus,
        onBlur: n ? emptyFunctionExport.emptyFunction : this.onBlur,
        onKeyDown: n ? emptyFunctionExport.emptyFunction : this.onKeyDown,
        ref: this.saveRate,
        id: o
      }, this.getDataAttr(h)), g);
    }
  }
  ir.contextType = createContextProvider.context;
  ir.propTypes = {
    "aria-describedby": l.string,
    "aria-errormessage": l.string,
    "aria-invalid": l.bool,
    "aria-label": l.string,
    "aria-labelledby": l.string,
    "aria-required": l.bool,
    disabled: l.bool,
    value: l.number,
    defaultValue: l.number,
    count: l.number,
    allowHalf: l.bool,
    allowClear: l.bool,
    style: l.object,
    prefixCls: l.string,
    onChange: l.func,
    onHoverChange: l.func,
    className: l.string,
    character: l.node,
    tabIndex: l.number,
    onFocus: l.func,
    onBlur: l.func,
    onKeyDown: l.func,
    autoFocus: l.bool,
    size: l.oneOfType([l.oneOf(t7), l.number]),
    tooltips: l.arrayOf(l.string),
    id: l.string,
    preventScroll: l.bool
  };
  ir.defaultProps = {
    defaultValue: 0,
    count: 5,
    allowHalf: false,
    allowClear: true,
    style: {},
    prefixCls: t5.PREFIX,
    onChange: emptyFunctionExport.emptyFunction,
    onHoverChange: emptyFunctionExport.emptyFunction,
    tabIndex: -1,
    size: "default"
  };
  var tooltipConstants = require("tooltip-constants") /*id: 736928*/;
  let il = {
    PREFIX: `${semiIdentifier.semiIdentifier}-autocomplete`,
    PREFIX_OPTION: `${semiIdentifier.semiIdentifier}-autoComplete-option`,
    PREFIX_GROUP: `${semiIdentifier.semiIdentifier}-autoComplete-group`
  };
  let id = {
    SIZE: ["small", "large", "default"],
    POSITION: tooltipConstants.tooltipOptions.POSITION_SET,
    OPTIONS: ["children", "value"],
    STATUS: logLevelTypes.logLevels
  };
  class ih extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.isPanelOpen = false;
    }
    init() {
      let e;
      this._setDropdownWidth();
      let {
        defaultOpen: t,
        data: i,
        defaultValue: n,
        value: s
      } = this.getProps();
      if (i && i.length) {
        let e = this._generateList(i);
        this._adapter.updateOptionList(e);
      }
      if (t) {
        this.openDropdown();
      }
      if (n !== undefined) {
        e = n;
      }
      if (s !== undefined) {
        e = s;
      }
      if (e !== undefined) {
        this.handleValueChange(e);
      }
    }
    destroy() {
      this._adapter.unregisterClickOutsideHandler();
    }
    _setDropdownWidth() {
      let e;
      let {
        style: t,
        dropdownMatchSelectWidth: i
      } = this.getProps();
      if (i) {
        e = t && isNumberUtil.isNumber(t.width) ? t.width : t && isStringTypeCheck.isString(t.width) && !t.width.includes("%") ? t.width : this._adapter.getTriggerWidth();
        this._adapter.setOptionWrapperWidth(e);
      }
    }
    handleInputClick(e) {
      let {
        options: t
      } = this.getStates();
      let {
        disabled: i
      } = this.getProps();
      if (!i) {
        if (this.isPanelOpen) {
          this.closeDropdown();
        } else {
          this.openDropdown();
        }
      }
    }
    openDropdown() {
      this.isPanelOpen = true;
      this._adapter.toggleListVisible(true);
      this._setDropdownWidth();
      this._adapter.registerClickOutsideHandler(e => this.closeDropdown(e));
      this._adapter.notifyDropdownVisibleChange(true);
      this._modifyFocusIndexOnPanelOpen();
    }
    closeDropdown(e) {
      this.isPanelOpen = false;
      this._adapter.toggleListVisible(false);
      this._adapter.unregisterClickOutsideHandler();
      this._adapter.notifyDropdownVisibleChange(false);
    }
    _generateList(e) {
      let {
        renderItem: t
      } = this.getProps();
      let i = [];
      if (e && e.length) {
        e.forEach((e, n) => {
          let s = String(new Date().getTime()) + n;
          let a = {};
          if (isStringTypeCheck.isString(e) || isNumberUtil.isNumber(e)) {
            a = {
              value: e,
              key: s,
              label: e,
              show: true
            };
          } else if (isObjectOrFunction_1_1.isObjectOrFunction(e) && !isUndefinedCheck.isUndefined(e.value)) {
            a = Object.assign({
              show: true
            }, e);
          }
          if (t && typeof t == "function") {
            a.label = t(e);
          }
          i.push(a);
        });
      }
      return i;
    }
    handleSearch(e) {
      this._adapter.updateInputValue(e);
      this._adapter.notifySearch(e);
      this._adapter.notifyChange(e);
      this._modifyFocusIndex(e);
      if (!this.isPanelOpen) {
        this.openDropdown();
      }
    }
    handleSelect(e, t) {
      let {
        renderSelectedItem: i
      } = this.getProps();
      let n = "";
      if (i && typeof i == "function") {
        n = i(e);
        pageNoopHandler.noopHandler(typeof n != "string", "Warning: [Semi AutoComplete] renderSelectedItem must return string, please check your function return");
      } else {
        n = e.value;
      }
      if (this._isControlledComponent()) {
        this.closeDropdown();
        this.notifySelect(e);
      } else {
        this._adapter.updateInputValue(n);
        this.updateSelection(e);
        this.notifySelect(e);
        this.closeDropdown();
      }
      this._adapter.notifyChange(n);
      this._adapter.updateFocusIndex(t);
    }
    updateSelection(e) {
      let t = new Map();
      if (e) {
        t.set(e.label, e);
      }
      this._adapter.updateSelection(t);
    }
    notifySelect(e) {
      if (this._backwardLabelInValue()) {
        this._adapter.notifySelect(e);
      } else {
        this._adapter.notifySelect(e.value);
      }
    }
    _backwardLabelInValue() {
      let {
        onSelectWithObject: e
      } = this.getProps();
      return e;
    }
    handleDataChange(e) {
      let t = this._generateList(e);
      this._adapter.updateOptionList(t);
      this._adapter.rePositionDropdown();
    }
    handleValueChange(e) {
      let {
        data: t,
        defaultActiveFirstOption: i
      } = this.getProps();
      let n = "";
      n = this._backwardLabelInValue() && Object.prototype.toString.call(e) === "[object Object]" ? e.value : e;
      let s = this._getRenderSelectedItem();
      let a = this._generateList(t);
      let r = a.length ? a.filter(e => s(e) === n) : [];
      let o = r.length;
      let l = a.findIndex(e => s(e) === n);
      let d = "";
      d = o ? s(r = r[0]) : s(this._backwardLabelInValue() ? e : {
        label: n,
        value: n
      });
      this._adapter.updateInputValue(d);
      this.updateSelection(o ? r : null);
      if (l === -1 && i) {
        this._adapter.updateFocusIndex(0);
      } else {
        this._adapter.updateFocusIndex(l);
      }
    }
    _modifyFocusIndex(e) {
      let {
        focusIndex: t
      } = this.getStates();
      let {
        data: i,
        defaultActiveFirstOption: n
      } = this.getProps();
      let s = -1;
      if (e) {
        let t = this._getRenderSelectedItem();
        s = this._generateList(i).findIndex(i => t(i) === e);
      }
      if (s === -1 && n) {
        if (t !== 0) {
          this._adapter.updateFocusIndex(0);
        }
      } else if (s !== t) {
        this._adapter.updateFocusIndex(s);
      }
    }
    _modifyFocusIndexOnPanelOpen() {
      let {
        inputValue: e
      } = this.getStates();
      this._modifyFocusIndex(e);
    }
    _getRenderSelectedItem() {
      let {
        renderSelectedItem: e
      } = this.getProps();
      if (e === undefined) {
        e = e => e == null ? undefined : e.value;
      }
      return e;
    }
    handleClear() {
      this._adapter.notifyClear();
    }
    bindKeyBoardEvent() {
      this._keydownHandler = e => {
        this._handleKeyDown(e);
      };
      this._adapter.registerKeyDown(this._keydownHandler);
    }
    _handleKeyDown(e) {
      let t = e.keyCode;
      let {
        visible: i
      } = this.getStates();
      switch (t) {
        case keyboardKeyCodes_3.keyCodeMap.UP:
          e.preventDefault();
          this._handleArrowKeyDown(-1);
          break;
        case keyboardKeyCodes_3.keyCodeMap.DOWN:
          e.preventDefault();
          this._handleArrowKeyDown(1);
          break;
        case keyboardKeyCodes_3.keyCodeMap.ENTER:
          e.preventDefault();
          this._handleEnterKeyDown();
          break;
        case keyboardKeyCodes_3.keyCodeMap.ESC:
        case keyboardKeyCodes_3.keyCodeMap.TAB:
          this.closeDropdown();
      }
      this._adapter.notifyKeyDown(e);
    }
    _getEnableFocusIndex(e) {
      let {
        focusIndex: t,
        options: i
      } = this.getStates();
      let n = i.filter(e => e.show);
      let s = n.length;
      let a = t + e;
      if (a < 0) {
        a = s - 1;
      }
      if (a >= s) {
        a = 0;
      }
      if (e > 0) {
        let e = -1;
        for (let t = 0; t < n.length && (n[t].disabled || (e = t), !(e >= a)); t++);
        a = e;
      } else {
        let e = n.length;
        for (let t = s - 1; t >= 0 && (n[t].disabled || (e = t), !(e <= a)); t--);
        a = e;
      }
      this._adapter.updateFocusIndex(a);
    }
    _handleArrowKeyDown(e) {
      let {
        visible: t
      } = this.getStates();
      if (t) {
        this._getEnableFocusIndex(e);
      } else {
        this.openDropdown();
      }
    }
    _handleEnterKeyDown() {
      let {
        visible: e,
        options: t,
        focusIndex: i
      } = this.getStates();
      if (e) {
        if (i !== undefined && i !== -1 && t.length !== 0) {
          let e = t.filter(e => e.show)[i];
          this.handleSelect(e, i);
        } else {
          this.closeDropdown();
        }
      } else {
        this.openDropdown();
      }
    }
    handleOptionMouseEnter(e) {
      this._adapter.updateFocusIndex(e);
    }
    handleFocus(e) {
      this.bindKeyBoardEvent();
      this._adapter.notifyFocus(e);
    }
    handleBlur(e) {
      this._persistEvent(e);
      this._adapter.notifyBlur(e);
    }
  }
  function ip(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  class iu extends reactCoreLibraryReexport.PureComponent {
    onClick(e, t) {
      var {
        value: i,
        label: n,
        children: s
      } = e;
      var a = ip(e, ["value", "label", "children"]);
      let {
        props: r
      } = this;
      if (!r.disabled) {
        r.onSelect(Object.assign(Object.assign({}, a), {
          value: i,
          label: n || s
        }), t);
      }
    }
    renderOptionContent(e) {
      let {
        config: t,
        children: i,
        inputValue: n,
        prefixCls: s
      } = e;
      if (isStringTypeCheck.isString(i) && n) {
        return commonFrontendUtils.highlightSearchText(t);
      } else {
        return i;
      }
    }
    render() {
      let e = this.props;
      let {
        children: t,
        disabled: i,
        value: n,
        selected: a,
        label: o,
        empty: l,
        emptyContent: d,
        onSelect: h,
        focused: p,
        showTick: u,
        className: c,
        style: f,
        onMouseEnter: g,
        prefixCls: m,
        renderOptionItem: b,
        inputValue: y
      } = e;
      let v = ip(e, ["children", "disabled", "value", "selected", "label", "empty", "emptyContent", "onSelect", "focused", "showTick", "className", "style", "onMouseEnter", "prefixCls", "renderOptionItem", "inputValue"]);
      let C = r(m, {
        [`${m}-disabled`]: i,
        [`${m}-selected`]: a,
        [`${m}-focused`]: p,
        [`${m}-empty`]: l,
        [c]: c
      });
      let E = r([`${m}-icon`]);
      if (l) {
        if (d === null) {
          return null;
        } else {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Select"
          }, e => reactCoreLibraryReexport.createElement("div", {
            className: C,
            "x-semi-prop": "emptyContent"
          }, d || e.emptyText));
        }
      }
      if (typeof b == "function") {
        return b(Object.assign({
          disabled: i,
          focused: p,
          selected: a,
          style: f,
          label: o,
          value: n,
          inputValue: y,
          onMouseEnter: e => g(e),
          onClick: e => this.onClick(Object.assign({
            value: n,
            label: o,
            children: t
          }, v), e)
        }, v));
      }
      let S = {
        searchWords: y,
        sourceString: t,
        option: {
          highlightClassName: `${m}-keyword`
        }
      };
      return reactCoreLibraryReexport.createElement("div", {
        className: C,
        onClick: e => {
          this.onClick(Object.assign({
            value: n,
            label: o,
            children: t
          }, v), e);
        },
        onMouseEnter: e => g && g(e),
        role: "option",
        "aria-selected": a ? "true" : "false",
        "aria-disabled": i ? "true" : "false",
        style: f
      }, u ? reactCoreLibraryReexport.createElement("div", {
        className: E
      }, reactCoreLibraryReexport.createElement(reactTickIcon.TickIcon, null)) : null, isStringTypeCheck.isString(t) ? reactCoreLibraryReexport.createElement("div", {
        className: `${m}-text`
      }, this.renderOptionContent({
        children: t,
        config: S,
        inputValue: y,
        prefixCls: m
      })) : t);
    }
  }
  iu.isSelectOption = true;
  iu.propTypes = {
    children: l.node,
    disabled: l.bool,
    value: l.oneOfType([l.string, l.number]),
    selected: l.bool,
    label: l.node,
    empty: l.bool,
    emptyContent: l.node,
    onSelect: l.func,
    focused: l.bool,
    showTick: l.bool,
    className: l.string,
    style: l.object,
    onMouseEnter: l.func,
    prefixCls: l.string,
    renderOptionItem: l.func,
    inputValue: l.string
  };
  iu.defaultProps = {
    prefixCls: il.PREFIX_OPTION
  };
  let ic = il.PREFIX;
  let ig = id.SIZE;
  let im = id.POSITION;
  let ib = id.STATUS;
  class iy extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.onSelect = (e, t, i) => {
        this.foundation.handleSelect(e, t);
      };
      this.onSearch = e => {
        this.foundation.handleSearch(e);
      };
      this.onBlur = e => this.foundation.handleBlur(e);
      this.onFocus = e => this.foundation.handleFocus(e);
      this.onInputClear = () => this.foundation.handleClear();
      this.handleInputClick = e => this.foundation.handleInputClick(e);
      this.foundation = new ih(this.adapter);
      this.state = {
        dropdownMinWidth: null,
        inputValue: "",
        options: [],
        visible: false,
        focusIndex: e.defaultActiveFirstOption ? 0 : -1,
        selection: new Map(),
        rePosKey: 1
      };
      this.triggerRef = reactCoreLibraryReexport.createRef();
      this.optionsRef = reactCoreLibraryReexport.createRef();
      this.clickOutsideHandler = null;
      pageNoopHandler.noopHandler("triggerRender" in this.props && typeof this.props.triggerRender == "function", `[Semi AutoComplete]
            - If you are using the following props: 'suffix', 'prefix', 'showClear', 'validateStatus', and 'size',
            please notice that they will be removed in the next major version.
            Please use 'componentProps' to retrieve these props instead.
            - If you are using 'onBlur', 'onFocus', please try to avoid using them and look for changes in the future.`);
    }
    get adapter() {
      return Object.assign(Object.assign(Object.assign({}, super.adapter), {
        registerKeyDown: e => {
          this.setState({
            keyboardEventSet: {
              onKeyDown: e
            }
          });
        },
        unregisterKeyDown: e => {
          this.setState({
            keyboardEventSet: {}
          });
        },
        updateFocusIndex: e => {
          this.setState({
            focusIndex: e
          });
        }
      }), {
        getTriggerWidth: () => {
          let e = this.triggerRef.current;
          return e && e.getBoundingClientRect().width;
        },
        setOptionWrapperWidth: e => {
          this.setState({
            dropdownMinWidth: e
          });
        },
        updateInputValue: e => {
          this.setState({
            inputValue: e
          });
        },
        toggleListVisible: e => {
          this.setState({
            visible: e
          });
        },
        updateOptionList: e => {
          this.setState({
            options: e
          });
        },
        updateSelection: e => {
          this.setState({
            selection: e
          });
        },
        notifySearch: e => {
          this.props.onSearch(e);
        },
        notifyChange: e => {
          this.props.onChange(e);
        },
        notifySelect: e => {
          this.props.onSelect(e);
        },
        notifyDropdownVisibleChange: e => {
          this.props.onDropdownVisibleChange(e);
        },
        notifyClear: () => {
          this.props.onClear();
        },
        notifyFocus: e => {
          this.props.onFocus(e);
        },
        notifyBlur: e => {
          this.props.onBlur(e);
        },
        notifyKeyDown: e => {
          this.props.onKeyDown(e);
        },
        rePositionDropdown: () => {
          let {
            rePosKey: e
          } = this.state;
          e += 1;
          this.setState({
            rePosKey: e
          });
        },
        registerClickOutsideHandler: e => {
          let t = t => {
            let i = this.optionsRef && this.optionsRef.current;
            let n = this.triggerRef && this.triggerRef.current;
            let s = reactDomEntryWrapper.findDOMNode(i);
            let a = t.target;
            if (!!s && (!s.contains(a) || !s.contains(a.parentNode)) && !!n && !n.contains(a)) {
              e(t);
            }
          };
          this.clickOutsideHandler = t;
          document.addEventListener("mousedown", t, false);
        },
        unregisterClickOutsideHandler: () => {
          if (this.clickOutsideHandler) {
            document.removeEventListener("mousedown", this.clickOutsideHandler, false);
          }
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    componentDidUpdate(e, t) {
      if (!deepEqualUtil_1.deepEqual(this.props.data, e.data)) {
        this.foundation.handleDataChange(this.props.data);
      }
      if (this.props.value !== e.value) {
        this.foundation.handleValueChange(this.props.value);
      }
    }
    renderInput() {
      let {
        size: e,
        prefix: t,
        insetLabel: i,
        insetLabelId: n,
        suffix: a,
        placeholder: o,
        style: l,
        className: d,
        showClear: h,
        disabled: p,
        triggerRender: u,
        validateStatus: c,
        autoFocus: f,
        value: g,
        id: m,
        clearIcon: b
      } = this.props;
      let {
        inputValue: y,
        keyboardEventSet: v,
        selection: C
      } = this.state;
      let E = Object.assign(Object.assign(Object.assign({
        style: l,
        className: typeof u == "function" ? r(d) : r({
          [ic]: true,
          [`${ic}-disabled`]: p
        }, d),
        onClick: this.handleInputClick,
        ref: this.triggerRef,
        id: m
      }, v), {
        tabIndex: -1
      }), this.getDataAttr(this.props));
      let S = {
        disabled: p,
        placeholder: o,
        autofocus: f,
        onChange: this.onSearch,
        onClear: this.onInputClear,
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-describedby": this.props["aria-describedby"],
        "aria-required": this.props["aria-required"],
        suffix: a,
        prefix: t || i,
        insetLabelId: n,
        showClear: h,
        validateStatus: c,
        size: e,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        clearIcon: b
      };
      return reactCoreLibraryReexport.createElement("div", Object.assign({}, E), typeof u == "function" ? reactCoreLibraryReexport.createElement(triggerRenderWrapper.TriggerRenderWrapper, Object.assign({}, S, {
        inputValue: g !== undefined ? g : y,
        value: Array.from(C.values()),
        triggerRender: u,
        componentName: "AutoComplete",
        componentProps: Object.assign({}, this.props)
      })) : reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({}, S, {
        value: g !== undefined ? g : y
      })));
    }
    renderLoading() {
      let e = `${ic}-loading-wrapper`;
      return reactCoreLibraryReexport.createElement("div", {
        className: e
      }, reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, null));
    }
    renderOption(e, t) {
      let {
        focusIndex: i
      } = this.state;
      return reactCoreLibraryReexport.createElement(iu, Object.assign({
        showTick: false,
        onSelect: (e, i) => this.onSelect(e, t, i),
        focused: t === i,
        onMouseEnter: () => this.foundation.handleOptionMouseEnter(t),
        key: e.key || e.label + e.value + t
      }, e), e.label);
    }
    renderOptionList() {
      let e;
      let {
        maxHeight: t,
        dropdownStyle: i,
        dropdownClassName: n,
        loading: a,
        emptyContent: o
      } = this.props;
      let {
        options: l,
        dropdownMinWidth: d
      } = this.state;
      let h = r({
        [`${ic}-option-list`]: true
      }, n);
      e = l.length === 0 ? o : l.filter(e => e.show).map((e, t) => this.renderOption(e, t));
      let p = Object.assign({
        maxHeight: t,
        minWidth: d
      }, i);
      return reactCoreLibraryReexport.createElement("div", {
        className: h,
        role: "listbox",
        style: p
      }, a ? this.renderLoading() : e);
    }
    render() {
      let {
        position: e,
        motion: t,
        zIndex: i,
        mouseEnterDelay: n,
        mouseLeaveDelay: a,
        autoAdjustOverflow: r,
        stopPropagation: o,
        getPopupContainer: l
      } = this.props;
      let {
        visible: d,
        rePosKey: h
      } = this.state;
      let p = this.renderInput();
      let u = this.renderOptionList();
      return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, {
        mouseEnterDelay: n,
        mouseLeaveDelay: a,
        autoAdjustOverflow: r,
        trigger: "custom",
        motion: t,
        visible: d,
        content: u,
        position: e,
        ref: this.optionsRef,
        zIndex: i,
        stopPropagation: o,
        getPopupContainer: l,
        rePosKey: h
      }, p);
    }
  }
  iy.propTypes = {
    "aria-label": l.string,
    "aria-labelledby": l.string,
    "aria-invalid": l.bool,
    "aria-errormessage": l.string,
    "aria-describedby": l.string,
    "aria-required": l.bool,
    autoFocus: l.bool,
    autoAdjustOverflow: l.bool,
    className: l.string,
    clearIcon: l.node,
    children: l.node,
    data: l.array,
    defaultOpen: l.bool,
    defaultValue: l.oneOfType([l.string, l.number]),
    defaultActiveFirstOption: l.bool,
    disabled: l.bool,
    dropdownMatchSelectWidth: l.bool,
    dropdownClassName: l.string,
    dropdownStyle: l.object,
    emptyContent: l.node,
    id: l.string,
    insetLabel: l.node,
    insetLabelId: l.string,
    onSearch: l.func,
    onSelect: l.func,
    onClear: l.func,
    onBlur: l.func,
    onFocus: l.func,
    onChange: l.func,
    onKeyDown: l.func,
    position: l.oneOf(im),
    placeholder: l.string,
    prefix: l.node,
    onChangeWithObject: l.bool,
    onSelectWithObject: l.bool,
    renderItem: l.func,
    renderSelectedItem: l.func,
    suffix: l.node,
    showClear: l.bool,
    size: l.oneOf(ig),
    style: l.object,
    stopPropagation: l.oneOfType([l.bool, l.string]),
    maxHeight: l.oneOfType([l.string, l.number]),
    mouseEnterDelay: l.number,
    mouseLeaveDelay: l.number,
    motion: l.oneOfType([l.bool, l.func, l.object]),
    getPopupContainer: l.func,
    triggerRender: l.func,
    value: l.oneOfType([l.string, l.number]),
    validateStatus: l.oneOf(ib),
    zIndex: l.number
  };
  iy.Option = iu;
  iy.__SemiComponentName__ = "AutoComplete";
  iy.defaultProps = commonFrontendUtils.configProxyHandler(iy.__SemiComponentName__, {
    stopPropagation: true,
    motion: true,
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    position: "bottomLeft",
    data: [],
    showClear: false,
    size: "default",
    onFocus: emptyExportFunction.emptyFunction,
    onSearch: emptyExportFunction.emptyFunction,
    onClear: emptyExportFunction.emptyFunction,
    onBlur: emptyExportFunction.emptyFunction,
    onSelect: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onSelectWithObject: false,
    onDropdownVisibleChange: emptyExportFunction.emptyFunction,
    defaultActiveFirstOption: false,
    dropdownMatchSelectWidth: true,
    loading: false,
    maxHeight: 300,
    validateStatus: "default",
    autoFocus: false,
    emptyContent: null,
    onKeyDown: emptyExportFunction.emptyFunction
  });
  var semiUploadComponent = require("semi-upload-component") /*id: 159273*/;
  let iC = formFieldWrapperComponent.FormFieldWrapper(semiInputComponent.InputComponent, {
    maintainCursor: true
  });
  let iE = formFieldWrapperComponent.FormFieldWrapper(ey, {
    maintainCursor: true
  });
  let iS = formFieldWrapperComponent.FormFieldWrapper(semiTextareaComponent.TextArea, {
    maintainCursor: true
  });
  let i_ = formFieldWrapperComponent.FormFieldWrapper(semiSelectComponent.Select);
  i_.Option = semiSelectComponent.Select.Option;
  i_.OptGroup = semiSelectComponent.Select.OptGroup;
  let iO = formFieldWrapperComponent.FormFieldWrapper(checkboxGroupComponent.CheckboxGroup);
  let iw = formFieldWrapperComponent.FormFieldWrapper(checkboxComponent.CheckboxComponent, {
    valueKey: "checked",
    valuePath: "target.checked",
    shouldInject: false
  });
  let iP = formFieldWrapperComponent.FormFieldWrapper(radioGroupComponent.RadioGroup, {
    valuePath: "target.value"
  });
  let iI = formFieldWrapperComponent.FormFieldWrapper(radioComponent.Radio, {
    valueKey: "checked",
    valuePath: "target.checked",
    shouldInject: false
  });
  let iT = formFieldWrapperComponent.FormFieldWrapper(semiDatepickerComponent.DatePicker);
  let ix = formFieldWrapperComponent.FormFieldWrapper(switchAdapterComponent.SwitchComponent, {
    valueKey: "checked"
  });
  let iF = formFieldWrapperComponent.FormFieldWrapper(sliderComponentAdapter.SliderComponent);
  let ik = formFieldWrapperComponent.FormFieldWrapper(e6);
  let iD = formFieldWrapperComponent.FormFieldWrapper(tV);
  let iN = formFieldWrapperComponent.FormFieldWrapper(t3);
  let iR = formFieldWrapperComponent.FormFieldWrapper(ir);
  let iZ = formFieldWrapperComponent.FormFieldWrapper(iy, {
    valueKey: "value",
    onKeyChangeFnName: "onChange"
  });
  let iL = formFieldWrapperComponent.FormFieldWrapper(semiUploadComponent.UploadComponent, {
    valueKey: "fileList",
    valuePath: "fileList",
    onKeyChangeFnName: "onChange"
  });
  let iA = formFieldWrapperComponent.FormFieldWrapper(tZ);
  function i$(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var s = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; s < n.length; s++) {
        if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
          i[n[s]] = e[n[s]];
        }
      }
    }
    return i;
  }
  let ij = formUxConstants.formPrefixConfig.PREFIX;
  class iM extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.state = {
        formId: ""
      };
      pageNoopHandler.noopHandler(!!e.component && !!e.render, "[Semi Form] You should not use <Form component> and <Form render> in ths same time; <Form render> will be ignored");
      pageNoopHandler.noopHandler(e.component && e.children && !reactElementUtils.isEmptyChildren(e.children), "[Semi Form] You should not use <Form component> and <Form>{children}</Form> in ths same time; <Form>{children}</Form> will be ignored");
      pageNoopHandler.noopHandler(e.render && e.children && !reactElementUtils.isEmptyChildren(e.children), "[Semi Form] You should not use <Form render> and <Form>{children}</Form> in ths same time; <Form>{children}</Form> will be ignored");
      this.submit = this.submit.bind(this);
      this.reset = this.reset.bind(this);
      this.foundation = new _(this.adapter);
      this.formApi = this.foundation.getFormApi();
      if (this.props.getFormApi) {
        this.props.getFormApi(this.formApi);
      }
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        cloneDeep: commonFrontendUtils.safeDeepClone,
        notifySubmit: (e, t) => {
          this.props.onSubmit(e, t);
        },
        notifySubmitFail: (e, t, i) => {
          this.props.onSubmitFail(e, t, i);
        },
        forceUpdate: e => {
          this.forceUpdate(e);
        },
        notifyChange: e => {
          this.props.onChange(e);
        },
        notifyValueChange: (e, t) => {
          this.props.onValueChange(e, t);
        },
        notifyReset: () => {
          this.props.onReset();
        },
        initFormId: () => {
          this.setState({
            formId: uniqueIdUtils.generateUuid()
          });
        },
        getInitValues: () => this.props.initValues,
        getFormProps: e => {
          if (e === undefined) {
            return this.props;
          }
          if (typeof e == "string") {
            return this.props[e];
          }
          {
            let t = {};
            e.forEach(e => {
              t[e] = this.props[e];
            });
            return t;
          }
        },
        getAllErrorDOM: () => {
          let {
            formId: e
          } = this.state;
          let {
            id: t
          } = this.props;
          return document.querySelectorAll(`form[x-form-id="${t || e}"] .${formUxConstants.formPrefixConfig.PREFIX}-field-error-message`);
        },
        getFieldDOM: e => document.querySelector(`.${formUxConstants.formPrefixConfig.PREFIX}-field[x-field-id="${e}"]`)
      });
    }
    get content() {
      let {
        children: e,
        component: t,
        render: i
      } = this.props;
      let n = this.foundation.getFormState();
      let a = {
        formState: n,
        formApi: this.foundation.getFormApi(),
        values: n.values
      };
      if (t) {
        return reactCoreLibraryReexport.createElement(t, a);
      } else if (i) {
        return i(a);
      } else if (typeof e == "function") {
        return e(a);
      } else {
        return e;
      }
    }
    submit(e) {
      e.preventDefault();
      this.foundation.submit(e);
    }
    reset(e) {
      e.preventDefault();
      this.foundation.reset();
    }
    render() {
      let e = this.foundation.getFormState(false);
      let t = this.foundation.getModifyFormStateApi();
      let {
        formId: i
      } = this.state;
      let n = this.props;
      let {
        children: a,
        getFormApi: o,
        onChange: l,
        onSubmit: d,
        onSubmitFail: h,
        onValueChange: p,
        component: u,
        render: c,
        validateFields: f,
        initValues: g,
        layout: m,
        style: b,
        className: y,
        labelPosition: v,
        labelWidth: C,
        labelAlign: E,
        labelCol: S,
        wrapperCol: _,
        allowEmpty: O,
        autoScrollToError: w,
        showValidateIcon: P,
        stopValidateWithError: I,
        extraTextPosition: x,
        id: k,
        trigger: D
      } = n;
      let N = i$(n, ["children", "getFormApi", "onChange", "onSubmit", "onSubmitFail", "onValueChange", "component", "render", "validateFields", "initValues", "layout", "style", "className", "labelPosition", "labelWidth", "labelAlign", "labelCol", "wrapperCol", "allowEmpty", "autoScrollToError", "showValidateIcon", "stopValidateWithError", "extraTextPosition", "id", "trigger"]);
      let R = r(ij, y, {
        [ij + "-vertical"]: m === "vertical",
        [ij + "-horizontal"]: m === "horizontal"
      });
      let Z = reactCoreLibraryReexport.createElement("form", Object.assign({
        style: b
      }, N, {
        onReset: this.reset,
        onSubmit: this.submit,
        className: R,
        "x-form-id": k || i
      }), this.content);
      let L = reactCoreLibraryReexport.createElement(reactGridRowComponent.GridRow, null, Z);
      return reactCoreLibraryReexport.createElement(formContextDefinitions.formUpdaterContext.Provider, {
        value: t
      }, reactCoreLibraryReexport.createElement(formContextDefinitions.formApiContext.Provider, {
        value: this.formApi
      }, reactCoreLibraryReexport.createElement(formContextDefinitions.formStateContext.Provider, {
        value: e
      }, _ && S ? L : Z)));
    }
  }
  iM.propTypes = {
    "aria-label": l.string,
    onSubmit: l.func,
    onSubmitFail: l.func,
    onChange: l.func,
    onReset: l.func,
    onValueChange: l.func,
    autoScrollToError: l.oneOfType([l.bool, l.object]),
    allowEmpty: l.bool,
    className: l.string,
    component: l.oneOfType([l.node, l.func]),
    disabled: l.bool,
    extraTextPosition: l.oneOf(formUxConstants.formLayoutOptions.EXTRA_POS),
    getFormApi: l.func,
    initValues: l.object,
    validateFields: l.func,
    layout: l.oneOf(formUxConstants.formLayoutOptions.LAYOUT),
    labelPosition: l.oneOf(formUxConstants.formLayoutOptions.LABEL_POS),
    labelWidth: l.oneOfType([l.number, l.string]),
    labelAlign: l.oneOf(formUxConstants.formLayoutOptions.LABEL_ALIGN),
    labelCol: l.object,
    render: l.func,
    style: l.object,
    showValidateIcon: l.bool,
    stopValidateWithError: l.bool,
    id: l.string,
    wrapperCol: l.object,
    trigger: l.oneOfType([l.oneOf(["blur", "change", "custom", "mount"]), l.arrayOf(l.oneOf(["blur", "change", "custom", "mount"]))])
  };
  iM.defaultProps = {
    onChange: emptyExportFunction.emptyFunction,
    onSubmitFail: emptyExportFunction.emptyFunction,
    onSubmit: emptyExportFunction.emptyFunction,
    onReset: emptyExportFunction.emptyFunction,
    onValueChange: emptyExportFunction.emptyFunction,
    layout: "vertical",
    labelPosition: "top",
    allowEmpty: false,
    autoScrollToError: false,
    showValidateIcon: true
  };
  iM.Input = iC;
  iM.TextArea = iS;
  iM.InputNumber = iE;
  iM.Select = i_;
  iM.Checkbox = iw;
  iM.CheckboxGroup = iO;
  iM.Radio = iI;
  iM.RadioGroup = iP;
  iM.DatePicker = iT;
  iM.TimePicker = ik;
  iM.Switch = ix;
  iM.Slider = iF;
  iM.TreeSelect = iD;
  iM.Cascader = iN;
  iM.Rating = iR;
  iM.AutoComplete = iZ;
  iM.Upload = iL;
  iM.TagInput = iA;
  iM.Slot = e => {
    let t;
    let i;
    let n;
    let a;
    let o;
    let l = "top";
    try {
      let e = reactCoreLibraryReexport.useContext(formContextDefinitions.formUpdaterContext).getFormProps(["labelPosition", "labelWidth", "labelAlign", "labelCol", "wrapperCol"]);
      t = e.labelCol;
      i = e.wrapperCol;
      n = e.labelWidth;
      a = e.labelAlign;
      l = e.labelPosition ? e.labelPosition : l;
    } catch (e) {}
    if (e.labelPosition) {
      l = e.labelPosition;
    }
    let {
      children: d,
      label: h,
      className: p,
      style: u,
      error: c,
      noLabel: f
    } = e;
    $(e, ["children", "label", "className", "style", "error", "noLabel"]);
    let g = t && i;
    let m = r({
      [`${j}-field`]: true,
      [`${j}-slot`]: true
    }, p);
    let b = r({
      [`${j}-col-${a}`]: true
    });
    switch (true) {
      case isObjectOrFunction_1_1.isObjectOrFunction(h) && !reactCoreLibraryReexport.isValidElement(h):
        break;
      case isStringTypeCheck.isString(h) || isNumberUtil.isNumber(h):
      case reactCoreLibraryReexport.isValidElement(h):
        h = {
          text: h
        };
    }
    let y = null;
    {
      let e = {};
      switch (true) {
        case isObjectOrFunction_1_1.isObjectOrFunction(c) && !reactCoreLibraryReexport.isValidElement(c):
          e = c;
          break;
        case isStringTypeCheck.isString(c) || isNumberUtil.isNumber(c):
        case reactCoreLibraryReexport.isValidElement(c):
          e = {
            error: c
          };
      }
      y = reactCoreLibraryReexport.createElement(formFieldFeedback.FormFieldFeedback, Object.assign({}, e));
    }
    let v = Object.assign({
      align: a,
      width: n
    }, h);
    let C = r({
      [`${j}-field-main`]: true,
      [`${j}-slot-main`]: true
    });
    switch (true) {
      case !g && !f:
        o = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, Object.assign({}, v)), reactCoreLibraryReexport.createElement("div", {
          className: C
        }, d, y));
        break;
      case !g && f:
        o = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
          className: C
        }, d, y));
        break;
      case g && l === "top":
        o = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
          style: {
            overflow: "hidden"
          }
        }, reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, t, {
          className: b
        }), reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, Object.assign({}, v)))), reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, null, d, y));
        break;
      case g && l !== "top":
        o = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, Object.assign({}, t, {
          className: b
        }), reactCoreLibraryReexport.createElement(formLabelComponent.FormLabel, Object.assign({}, v))), reactCoreLibraryReexport.createElement(reactGridColComponent.GridCol, null, d, y));
    }
    return reactCoreLibraryReexport.createElement("div", {
      className: m,
      "x-label-pos": l,
      style: u
    }, o);
  };
  iM.ErrorMessage = formFieldFeedback.FormFieldFeedback;
  iM.InputGroup = Q;
  iM.Label = formLabelComponent.FormLabel;
  iM.Section = V;
  var iV = iM;
  require.d(exports, {
    Form: function () {
      return iV;
    }
  });
}