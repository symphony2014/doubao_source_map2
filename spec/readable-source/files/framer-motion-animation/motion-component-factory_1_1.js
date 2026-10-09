// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'createMotionComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 516730
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var cssTransformProps_1 = require("css-transform-props_1") /*id: 736118*/;
  var cssTransformParser = require("css-transform-parser") /*id: 677451*/;
  var cssCustomPropertyValidator_1 = require("css-custom-property-validator_1") /*id: 777347*/;
  function l(t) {
    let {
      top: e,
      left: i,
      right: n,
      bottom: r
    } = t;
    return {
      x: {
        min: i,
        max: n
      },
      y: {
        min: e,
        max: r
      }
    };
  }
  var interpolationHelper = require("interpolation-helper") /*id: 710097*/;
  function h(t) {
    return t === undefined || t === 1;
  }
  function d(t) {
    let {
      scale: e,
      scaleX: i,
      scaleY: n
    } = t;
    return !h(e) || !h(i) || !h(n);
  }
  function c(t) {
    return d(t) || p(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function p(t) {
    var e;
    var i;
    return (e = t.x) && e !== "0%" || (i = t.y) && i !== "0%";
  }
  function m(t, e, i, n, r) {
    if (r !== undefined) {
      t = n + r * (t - n);
    }
    return n + i * (t - n) + e;
  }
  function f(t, e = 0, i = 1, n, r) {
    t.min = m(t.min, e, i, n, r);
    t.max = m(t.max, e, i, n, r);
  }
  function v(t, e) {
    let {
      x: i,
      y: n
    } = e;
    f(t.x, i.translate, i.scale, i.originPoint);
    f(t.y, n.translate, n.scale, n.originPoint);
  }
  function g(t, e) {
    t.min = t.min + e;
    t.max = t.max + e;
  }
  function y(t, e, i, n, r = 0.5) {
    let s = interpolationHelper.interpolate(t.min, t.max, r);
    f(t, e, i, s, n);
  }
  function x(t, e) {
    y(t.x, e.x, e.scaleX, e.scale, e.originX);
    y(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function w(t, e) {
    return l(function (t, e) {
      if (!e) {
        return t;
      }
      let i = e({
        x: t.left,
        y: t.top
      });
      let n = e({
        x: t.right,
        y: t.bottom
      });
      return {
        top: i.y,
        left: i.x,
        bottom: n.y,
        right: n.x
      };
    }(t.getBoundingClientRect(), e));
  }
  var velocityChecker = require("velocity-checker") /*id: 643254*/;
  var cssLayoutProps = require("css-layout-props") /*id: 599622*/;
  var numberTypeValidators = require("number-type-validators") /*id: 730157*/;
  var cssUnitUtils = require("css-unit-utils") /*id: 466130*/;
  let A = t => e => e.test(t);
  let M = [numberTypeValidators.numberValidator, cssUnitUtils.pixelUnit, cssUnitUtils.percentUnit, cssUnitUtils.degUnit, cssUnitUtils.vwUnit, cssUnitUtils.vhUnit, {
    test: t => t === "auto",
    parse: t => t
  }];
  let k = t => M.find(A(t));
  var stubFunctions = require("stub-functions") /*id: 319573*/;
  var numericStringValidator = require("numeric-string-validator") /*id: 434453*/;
  let V = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  var keyframeResolutionScheduler = require("keyframe-resolution-scheduler") /*id: 115131*/;
  var leadingZeroCheck = require("leading-zero-check") /*id: 952325*/;
  var cssValueParser_1 = require("css-value-parser_1") /*id: 208273*/;
  var numberPatternRegex = require("number-pattern-regex") /*id: 937066*/;
  let F = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function B(t) {
    let [e, i] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") {
      return t;
    }
    let [n] = i.match(numberPatternRegex.numberPattern) || [];
    if (!n) {
      return t;
    }
    let r = i.replace(n, "");
    let s = +!!F.has(e);
    if (n !== i) {
      s *= 100;
    }
    return e + "(" + s + r + ")";
  }
  let O = /\b([a-z-]*)\(.*?\)/gu;
  let I = {
    ...cssValueParser_1.cssValueTransformer,
    getAnimatableNone: t => {
      let e = t.match(O);
      if (e) {
        return e.map(B).join(" ");
      } else {
        return t;
      }
    }
  };
  var colorValidationUtils_1 = require("color-validation-utils_1") /*id: 485358*/;
  let U = {
    ...numberTypeValidators.numberValidator,
    transform: Math.round
  };
  let $ = {
    rotate: cssUnitUtils.degUnit,
    rotateX: cssUnitUtils.degUnit,
    rotateY: cssUnitUtils.degUnit,
    rotateZ: cssUnitUtils.degUnit,
    scale: numberTypeValidators.numberWithDefaultValidator,
    scaleX: numberTypeValidators.numberWithDefaultValidator,
    scaleY: numberTypeValidators.numberWithDefaultValidator,
    scaleZ: numberTypeValidators.numberWithDefaultValidator,
    skew: cssUnitUtils.degUnit,
    skewX: cssUnitUtils.degUnit,
    skewY: cssUnitUtils.degUnit,
    distance: cssUnitUtils.pixelUnit,
    translateX: cssUnitUtils.pixelUnit,
    translateY: cssUnitUtils.pixelUnit,
    translateZ: cssUnitUtils.pixelUnit,
    x: cssUnitUtils.pixelUnit,
    y: cssUnitUtils.pixelUnit,
    z: cssUnitUtils.pixelUnit,
    perspective: cssUnitUtils.pixelUnit,
    transformPerspective: cssUnitUtils.pixelUnit,
    opacity: numberTypeValidators.clampedNumberValidator,
    originX: cssUnitUtils.normalizedPercent,
    originY: cssUnitUtils.normalizedPercent,
    originZ: cssUnitUtils.pixelUnit
  };
  let X = {
    borderWidth: cssUnitUtils.pixelUnit,
    borderTopWidth: cssUnitUtils.pixelUnit,
    borderRightWidth: cssUnitUtils.pixelUnit,
    borderBottomWidth: cssUnitUtils.pixelUnit,
    borderLeftWidth: cssUnitUtils.pixelUnit,
    borderRadius: cssUnitUtils.pixelUnit,
    radius: cssUnitUtils.pixelUnit,
    borderTopLeftRadius: cssUnitUtils.pixelUnit,
    borderTopRightRadius: cssUnitUtils.pixelUnit,
    borderBottomRightRadius: cssUnitUtils.pixelUnit,
    borderBottomLeftRadius: cssUnitUtils.pixelUnit,
    width: cssUnitUtils.pixelUnit,
    maxWidth: cssUnitUtils.pixelUnit,
    height: cssUnitUtils.pixelUnit,
    maxHeight: cssUnitUtils.pixelUnit,
    top: cssUnitUtils.pixelUnit,
    right: cssUnitUtils.pixelUnit,
    bottom: cssUnitUtils.pixelUnit,
    left: cssUnitUtils.pixelUnit,
    padding: cssUnitUtils.pixelUnit,
    paddingTop: cssUnitUtils.pixelUnit,
    paddingRight: cssUnitUtils.pixelUnit,
    paddingBottom: cssUnitUtils.pixelUnit,
    paddingLeft: cssUnitUtils.pixelUnit,
    margin: cssUnitUtils.pixelUnit,
    marginTop: cssUnitUtils.pixelUnit,
    marginRight: cssUnitUtils.pixelUnit,
    marginBottom: cssUnitUtils.pixelUnit,
    marginLeft: cssUnitUtils.pixelUnit,
    backgroundPositionX: cssUnitUtils.pixelUnit,
    backgroundPositionY: cssUnitUtils.pixelUnit,
    ...$,
    zIndex: U,
    fillOpacity: numberTypeValidators.clampedNumberValidator,
    strokeOpacity: numberTypeValidators.clampedNumberValidator,
    numOctaves: U
  };
  let N = {
    ...X,
    color: colorValidationUtils_1.colorValidator,
    backgroundColor: colorValidationUtils_1.colorValidator,
    outlineColor: colorValidationUtils_1.colorValidator,
    fill: colorValidationUtils_1.colorValidator,
    stroke: colorValidationUtils_1.colorValidator,
    borderColor: colorValidationUtils_1.colorValidator,
    borderTopColor: colorValidationUtils_1.colorValidator,
    borderRightColor: colorValidationUtils_1.colorValidator,
    borderBottomColor: colorValidationUtils_1.colorValidator,
    borderLeftColor: colorValidationUtils_1.colorValidator,
    filter: I,
    WebkitFilter: I
  };
  let z = t => N[t];
  function Y(t, e) {
    let i = z(t);
    if (i !== I) {
      i = cssValueParser_1.cssValueTransformer;
    }
    if (i.getAnimatableNone) {
      return i.getAnimatableNone(e);
    } else {
      return undefined;
    }
  }
  let K = new Set(["auto", "none", "0"]);
  var cssTransformLayout = require("css-transform-layout") /*id: 682877*/;
  class _ extends keyframeResolutionScheduler.KeyframeResolver {
    readKeyframes() {
      let {
        unresolvedKeyframes: t,
        element: e,
        name: i
      } = this;
      if (!e || !e.current) {
        return;
      }
      super.readKeyframes();
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (typeof n == "string" && (n = n.trim(), cssCustomPropertyValidator_1.isValidVarFunction(n))) {
          let r = function t(e, i, n = 1) {
            stubFunctions.noopFunc(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
            let [r, s] = function (t) {
              let e = V.exec(t);
              if (!e) {
                return [,];
              }
              let [, i, n, r] = e;
              return [`--${i ?? n}`, r];
            }(e);
            if (!r) {
              return;
            }
            let o = window.getComputedStyle(i).getPropertyValue(r);
            if (o) {
              let t = o.trim();
              if (numericStringValidator.isNumericString(t)) {
                return parseFloat(t);
              } else {
                return t;
              }
            }
            if (cssCustomPropertyValidator_1.isValidVarFunction(s)) {
              return t(s, i, n + 1);
            } else {
              return s;
            }
          }(n, e.current);
          if (r !== undefined) {
            t[i] = r;
          }
          if (i === t.length - 1) {
            this.finalKeyframe = n;
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!cssLayoutProps.cssPropertySet.has(i) || t.length !== 2) {
        return;
      }
      let [n, r] = t;
      let s = k(n);
      let o = k(r);
      if (s !== o) {
        if (cssTransformLayout.isNumericValidator(s) && cssTransformLayout.isNumericValidator(o)) {
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            if (typeof i == "string") {
              t[e] = parseFloat(i);
            }
          }
        } else if (cssTransformLayout.layoutCalculator[i]) {
          this.needsMeasurement = true;
        }
      }
    }
    resolveNoneKeyframes() {
      let {
        unresolvedKeyframes: t,
        name: e
      } = this;
      let i = [];
      for (let e = 0; e < t.length; e++) {
        var n;
        if (t[e] === null || (typeof (n = t[e]) == "number" ? n === 0 : n === null || n === "none" || n === "0" || leadingZeroCheck.hasLeadingZero(n))) {
          i.push(e);
        }
      }
      if (i.length) {
        (function (t, e, i) {
          let n;
          let r = 0;
          while (r < t.length && !n) {
            let e = t[r];
            if (typeof e == "string" && !K.has(e) && cssValueParser_1.parseCssValues(e).values.length) {
              n = t[r];
            }
            r++;
          }
          if (n && i) {
            for (let r of e) {
              t[r] = Y(i, n);
            }
          }
        })(t, i, e);
      }
    }
    measureInitialState() {
      let {
        element: t,
        unresolvedKeyframes: e,
        name: i
      } = this;
      if (!t || !t.current) {
        return;
      }
      if (i === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = cssTransformLayout.layoutCalculator[i](t.measureViewportBox(), window.getComputedStyle(t.current));
      e[0] = this.measuredOrigin;
      let n = e[e.length - 1];
      if (n !== undefined) {
        t.getValue(i, n).jump(n, false);
      }
    }
    measureEndState() {
      let {
        element: e,
        name: i,
        unresolvedKeyframes: n
      } = this;
      if (!e || !e.current) {
        return;
      }
      let r = e.getValue(i);
      if (r) {
        r.jump(this.measuredOrigin, false);
      }
      let s = n.length - 1;
      let o = n[s];
      n[s] = cssTransformLayout.layoutCalculator[i](e.measureViewportBox(), window.getComputedStyle(e.current));
      if (o !== null && this.finalKeyframe === undefined) {
        this.finalKeyframe = o;
      }
      if (this.removedTransforms?.length) {
        this.removedTransforms.forEach(t => {
          let [i, n] = t;
          e.getValue(i).set(n);
        });
      }
      this.resolveNoneKeyframes();
    }
    constructor(t, e, i, n, r) {
      super(t, e, i, n, r, true);
    }
  }
  var frameloopSchedulerUtils = require("frameloop-scheduler-utils") /*id: 232060*/;
  var motionValueFactory = require("motion-value-factory") /*id: 413604*/;
  let G = [...M, colorValidationUtils_1.colorValidator, cssValueParser_1.cssValueTransformer];
  let Q = t => G.find(A(t));
  let {
    schedule: J
  } = require("frameloop-step-scheduler") /*id: 57733*/.createFrameloopScheduler(queueMicrotask, false);
  var performanceTimingUtility = require("performance-timing-utility") /*id: 602145*/;
  var subscriptionManagerClass = require("subscription-manager-class") /*id: 604672*/;
  let ti = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  let tn = {};
  for (let t in ti) {
    tn[t] = {
      isEnabled: e => ti[t].some(t => !!e[t])
    };
  }
  let tr = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  let ts = () => ({
    x: tr(),
    y: tr()
  });
  let to = () => ({
    min: 0,
    max: 0
  });
  let ta = () => ({
    x: to(),
    y: to()
  });
  var detectWindowEnvironment = require("detect-window-environment") /*id: 314742*/;
  let tu = {
    current: null
  };
  let th = {
    current: false
  };
  let td = new WeakMap();
  function tc(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function tp(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  let tm = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
  let tf = ["initial", ...tm];
  function tv(t) {
    return tc(t.animate) || tf.some(e => tp(t[e]));
  }
  function tg(t) {
    return !!tv(t) || !!t.variants;
  }
  var resolveVariantFunction = require("resolve-variant-function") /*id: 368107*/;
  let tx = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  class tw {
    scrapeMotionValuesFromProps(t, e, i) {
      return {};
    }
    mount(t) {
      var e;
      this.current = t;
      td.set(t, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(t);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((t, e) => this.bindToMotionValue(e, t));
      if (!th.current) {
        (function () {
          th.current = true;
          if (detectWindowEnvironment.isWindowAvailable) {
            if (window.matchMedia) {
              let t = window.matchMedia("(prefers-reduced-motion)");
              let e = () => tu.current = t.matches;
              t.addEventListener("change", e);
              e();
            } else {
              tu.current = false;
            }
          }
        })();
      }
      this.shouldReduceMotion = this.reducedMotionConfig !== "never" && (this.reducedMotionConfig === "always" || tu.current);
      if ((e = this.parent) !== null && e !== undefined) {
        e.addChild(this);
      }
      this.update(this.props, this.presenceContext);
    }
    unmount() {
      var t;
      if (this.projection) {
        this.projection.unmount();
      }
      frameloopSchedulerUtils.cancelFrame(this.notifyUpdate);
      frameloopSchedulerUtils.cancelFrame(this.render);
      this.valueSubscriptions.forEach(t => t());
      this.valueSubscriptions.clear();
      if (this.removeFromVariantTree) {
        this.removeFromVariantTree();
      }
      if ((t = this.parent) !== null && t !== undefined) {
        t.removeChild(this);
      }
      for (let e in this.events) {
        this.events[e].clear();
      }
      for (let t in this.features) {
        let e = this.features[t];
        if (e) {
          e.unmount();
          e.isMounted = false;
        }
      }
      this.current = null;
    }
    addChild(t) {
      var e;
      this.children.add(t);
      if ((e = this.enteringChildren) === null || e === undefined) {
        this.enteringChildren = new Set();
      }
      this.enteringChildren.add(t);
    }
    removeChild(t) {
      this.children.delete(t);
      if (this.enteringChildren) {
        this.enteringChildren.delete(t);
      }
    }
    bindToMotionValue(t, e) {
      let i;
      if (this.valueSubscriptions.has(t)) {
        this.valueSubscriptions.get(t)();
      }
      let n = cssTransformProps_1.transformSet.has(t);
      if (n && this.onBindTransform) {
        this.onBindTransform();
      }
      let r = e.on("change", e => {
        this.latestValues[t] = e;
        if (this.props.onUpdate) {
          frameloopSchedulerUtils.scheduleFrame.preRender(this.notifyUpdate);
        }
        if (n && this.projection) {
          this.projection.isTransformDirty = true;
        }
        this.scheduleRender();
      });
      if (window.MotionCheckAppearSync) {
        i = window.MotionCheckAppearSync(this, t, e);
      }
      this.valueSubscriptions.set(t, () => {
        r();
        if (i) {
          i();
        }
        if (e.owner) {
          e.stop();
        }
      });
    }
    sortNodePosition(t) {
      if (this.current && this.sortInstanceNodePosition && this.type === t.type) {
        return this.sortInstanceNodePosition(this.current, t.current);
      } else {
        return 0;
      }
    }
    updateFeatures() {
      let t = "animation";
      for (t in tn) {
        let e = tn[t];
        if (!e) {
          continue;
        }
        let {
          isEnabled: i,
          Feature: n
        } = e;
        if (!this.features[t] && n && i(this.props)) {
          this.features[t] = new n(this);
        }
        if (this.features[t]) {
          let e = this.features[t];
          if (e.isMounted) {
            e.update();
          } else {
            e.mount();
            e.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      if (this.current) {
        return this.measureInstanceViewportBox(this.current, this.props);
      } else {
        return ta();
      }
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, e) {
      this.latestValues[t] = e;
    }
    update(t, e) {
      if (t.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = t;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = e;
      for (let e = 0; e < tx.length; e++) {
        let i = tx[e];
        if (this.propEventSubscriptions[i]) {
          this.propEventSubscriptions[i]();
          delete this.propEventSubscriptions[i];
        }
        let n = t["on" + i];
        if (n) {
          this.propEventSubscriptions[i] = this.on(i, n);
        }
      }
      this.prevMotionValues = function (t, e, i) {
        for (let n in e) {
          let r = e[n];
          let s = i[n];
          if (velocityChecker.hasVelocity(r)) {
            t.addValue(n, r);
          } else if (velocityChecker.hasVelocity(s)) {
            t.addValue(n, motionValueFactory.createMotionValue(r, {
              owner: t
            }));
          } else if (s !== r) {
            if (t.hasValue(n)) {
              let e = t.getValue(n);
              if (e.liveStyle === true) {
                e.jump(r);
              } else if (!e.hasAnimated) {
                e.set(r);
              }
            } else {
              let e = t.getStaticValue(n);
              t.addValue(n, motionValueFactory.createMotionValue(e !== undefined ? e : r, {
                owner: t
              }));
            }
          }
        }
        for (let n in i) {
          if (e[n] === undefined) {
            t.removeValue(n);
          }
        }
        return e;
      }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      if (this.props.variants) {
        return this.props.variants[t];
      } else {
        return undefined;
      }
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      if (this.isVariantNode) {
        return this;
      } else if (this.parent) {
        return this.parent.getClosestVariantNode();
      } else {
        return undefined;
      }
    }
    addVariantChild(t) {
      let e = this.getClosestVariantNode();
      if (e) {
        if (e.variantChildren) {
          e.variantChildren.add(t);
        }
        return () => e.variantChildren.delete(t);
      }
    }
    addValue(t, e) {
      let i = this.values.get(t);
      if (e !== i) {
        if (i) {
          this.removeValue(t);
        }
        this.bindToMotionValue(t, e);
        this.values.set(t, e);
        this.latestValues[t] = e.get();
      }
    }
    removeValue(t) {
      this.values.delete(t);
      let e = this.valueSubscriptions.get(t);
      if (e) {
        e();
        this.valueSubscriptions.delete(t);
      }
      delete this.latestValues[t];
      this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, e) {
      if (this.props.values && this.props.values[t]) {
        return this.props.values[t];
      }
      let i = this.values.get(t);
      if (i === undefined && e !== undefined) {
        i = motionValueFactory.createMotionValue(e === null ? undefined : e, {
          owner: this
        });
        this.addValue(t, i);
      }
      return i;
    }
    readValue(t, e) {
      let n = this.latestValues[t] === undefined && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
      if (n != null) {
        if (typeof n == "string" && (numericStringValidator.isNumericString(n) || leadingZeroCheck.hasLeadingZero(n))) {
          n = parseFloat(n);
        } else if (!Q(n) && cssValueParser_1.cssValueTransformer.test(e)) {
          n = Y(t, e);
        }
        this.setBaseTarget(t, velocityChecker.hasVelocity(n) ? n.get() : n);
      }
      if (velocityChecker.hasVelocity(n)) {
        return n.get();
      } else {
        return n;
      }
    }
    setBaseTarget(t, e) {
      this.baseTarget[t] = e;
    }
    getBaseTarget(t) {
      let e;
      let {
        initial: i
      } = this.props;
      if (typeof i == "string" || typeof i == "object") {
        let r = resolveVariantFunction.resolveVariant(this.props, i, this.presenceContext?.custom);
        if (r) {
          e = r[t];
        }
      }
      if (i && e !== undefined) {
        return e;
      }
      let r = this.getBaseTargetFromProps(this.props, t);
      if (r === undefined || velocityChecker.hasVelocity(r)) {
        if (this.initialValues[t] !== undefined && e === undefined) {
          return undefined;
        } else {
          return this.baseTarget[t];
        }
      } else {
        return r;
      }
    }
    on(t, e) {
      this.events[t] ||= new subscriptionManagerClass.SubscriptionManager();
      return this.events[t].add(e);
    }
    notify(t) {
      var e = arguments.length;
      var i = Array(e > 1 ? e - 1 : 0);
      var n = 1;
      for (; n < e; n++) {
        i[n - 1] = arguments[n];
      }
      if (this.events[t]) {
        this.events[t].notify(...i);
      }
    }
    scheduleRenderMicrotask() {
      J.render(this.render);
    }
    constructor({
      parent: t,
      props: e,
      presenceContext: i,
      reducedMotionConfig: n,
      blockInitialAnimation: r,
      visualState: s
    }, o = {}) {
      this.current = null;
      this.children = new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.values = new Map();
      this.KeyframeResolver = keyframeResolutionScheduler.KeyframeResolver;
      this.features = {};
      this.valueSubscriptions = new Map();
      this.prevMotionValues = {};
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (this.current) {
          this.triggerBuild();
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        }
      };
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        let t = performanceTimingUtility.performanceTimer.now();
        if (this.renderScheduledAt < t) {
          this.renderScheduledAt = t;
          frameloopSchedulerUtils.scheduleFrame.render(this.render, false, true);
        }
      };
      let {
        latestValues: a,
        renderState: l
      } = s;
      this.latestValues = a;
      this.baseTarget = {
        ...a
      };
      this.initialValues = e.initial ? {
        ...a
      } : {};
      this.renderState = l;
      this.parent = t;
      this.props = e;
      this.presenceContext = i;
      this.depth = t ? t.depth + 1 : 0;
      this.reducedMotionConfig = n;
      this.options = o;
      this.blockInitialAnimation = !!r;
      this.isControllingVariants = tv(e);
      this.isVariantNode = tg(e);
      if (this.isVariantNode) {
        this.variantChildren = new Set();
      }
      this.manuallyAnimateOnMount = !!t && !!t.current;
      let {
        willChange: u,
        ...h
      } = this.scrapeMotionValuesFromProps(e, {}, this);
      for (let t in h) {
        let e = h[t];
        if (a[t] !== undefined && velocityChecker.hasVelocity(e)) {
          e.set(a[t]);
        }
      }
    }
  }
  class tT extends tw {
    sortInstanceNodePosition(t, e) {
      if (t.compareDocumentPosition(e) & 2) {
        return 1;
      } else {
        return -1;
      }
    }
    getBaseTargetFromProps(t, e) {
      if (t.style) {
        return t.style[e];
      } else {
        return undefined;
      }
    }
    removeValueFromRenderState(t, e) {
      let {
        vars: i,
        style: n
      } = e;
      delete i[t];
      delete n[t];
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      let {
        children: t
      } = this.props;
      if (velocityChecker.hasVelocity(t)) {
        this.childSubscription = t.on("change", t => {
          if (this.current) {
            this.current.textContent = `${t}`;
          }
        });
      }
    }
    constructor() {
      super(...arguments);
      this.KeyframeResolver = _;
    }
  }
  let tP = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  let tb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  let tS = cssTransformProps_1.transformProps.length;
  function tA(t, e, i) {
    let {
      style: n,
      vars: r,
      transformOrigin: o
    } = t;
    let l = false;
    let u = false;
    for (let t in e) {
      let i = e[t];
      if (cssTransformProps_1.transformSet.has(t)) {
        l = true;
        continue;
      }
      if (cssCustomPropertyValidator_1.isCustomProperty(t)) {
        r[t] = i;
        continue;
      }
      {
        let e = tP(i, X[t]);
        if (t.startsWith("origin")) {
          u = true;
          o[t] = e;
        } else {
          n[t] = e;
        }
      }
    }
    if (!e.transform) {
      if (l || i) {
        n.transform = function (t, e, i) {
          let n = "";
          let r = true;
          for (let o = 0; o < tS; o++) {
            let a = cssTransformProps_1.transformProps[o];
            let l = t[a];
            if (l === undefined) {
              continue;
            }
            let u = true;
            if (!(u = typeof l == "number" ? l === +!!a.startsWith("scale") : parseFloat(l) === 0) || i) {
              let t = tP(l, X[a]);
              if (!u) {
                r = false;
                let e = tb[a] || a;
                n += `${e}(${t}) `;
              }
              if (i) {
                e[a] = t;
              }
            }
          }
          n = n.trim();
          if (i) {
            n = i(e, r ? "" : n);
          } else if (r) {
            n = "none";
          }
          return n;
        }(e, t.transform, i);
      } else {
        n.transform &&= "none";
      }
    }
    if (u) {
      let {
        originX: t = "50%",
        originY: e = "50%",
        originZ: i = 0
      } = o;
      n.transformOrigin = `${t} ${e} ${i}`;
    }
  }
  function tM(t, e, i, n) {
    let r;
    let {
      style: s,
      vars: o
    } = e;
    let a = t.style;
    for (r in s) {
      a[r] = s[r];
    }
    if (n != null) {
      n.applyProjectionStyles(a, i);
    }
    for (r in o) {
      a.setProperty(r, o[r]);
    }
  }
  let tk = {};
  function tC(t, e) {
    let {
      layout: i,
      layoutId: n
    } = e;
    return cssTransformProps_1.transformSet.has(t) || t.startsWith("origin") || (i || n !== undefined) && (!!tk[t] || t === "opacity");
  }
  function tE(t, e, i) {
    let {
      style: n
    } = t;
    let r = {};
    for (let o in n) {
      if (velocityChecker.hasVelocity(n[o]) || e.style && velocityChecker.hasVelocity(e.style[o]) || tC(o, t) || (i == null ? undefined : i.getValue(o)?.liveStyle) !== undefined) {
        r[o] = n[o];
      }
    }
    return r;
  }
  class tV extends tT {
    readValueFromInstance(t, e) {
      if (cssTransformProps_1.transformSet.has(e)) {
        if (this.projection?.isProjecting) {
          return cssTransformParser.hasScale(e);
        } else {
          return cssTransformParser.getTransformValue(t, e);
        }
      }
      {
        let i = window.getComputedStyle(t);
        let n = (cssCustomPropertyValidator_1.isCustomProperty(e) ? i.getPropertyValue(e) : i[e]) || 0;
        if (typeof n == "string") {
          return n.trim();
        } else {
          return n;
        }
      }
    }
    measureInstanceViewportBox(t, e) {
      let {
        transformPagePoint: i
      } = e;
      return w(t, i);
    }
    build(t, e, i) {
      tA(t, e, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e, i) {
      return tE(t, e, i);
    }
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = tM;
    }
  }
  var camelToKebab = require("camel-to-kebab") /*id: 968008*/;
  let tR = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  let tL = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function tj(t, e, i, n, r) {
    let {
      attrX: a,
      attrY: l,
      attrScale: u,
      pathLength: h,
      pathSpacing: d = 1,
      pathOffset: c = 0,
      ...p
    } = e;
    tA(t, p, n);
    if (i) {
      if (t.style.viewBox) {
        t.attrs.viewBox = t.style.viewBox;
      }
      return;
    }
    t.attrs = t.style;
    t.style = {};
    let {
      attrs: m,
      style: f
    } = t;
    if (m.transform) {
      f.transform = m.transform;
      delete m.transform;
    }
    if (f.transform || m.transformOrigin) {
      f.transformOrigin = m.transformOrigin ?? "50% 50%";
      delete m.transformOrigin;
    }
    if (f.transform) {
      f.transformBox = (r == null ? undefined : r.transformBox) ?? "fill-box";
      delete m.transformBox;
    }
    if (a !== undefined) {
      m.x = a;
    }
    if (l !== undefined) {
      m.y = l;
    }
    if (u !== undefined) {
      m.scale = u;
    }
    if (h !== undefined) {
      (function (t, e, i = 1, n = 0) {
        let r = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        t.pathLength = 1;
        let s = r ? tR : tL;
        t[s.offset] = cssUnitUtils.pixelUnit.transform(-n);
        let o = cssUnitUtils.pixelUnit.transform(e);
        let a = cssUnitUtils.pixelUnit.transform(i);
        t[s.array] = `${o} ${a}`;
      })(m, h, d, c, false);
    }
  }
  let tF = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  let tB = t => typeof t == "string" && t.toLowerCase() === "svg";
  function tO(t, e, i) {
    let n = tE(t, e, i);
    for (let i in t) {
      if (velocityChecker.hasVelocity(t[i]) || velocityChecker.hasVelocity(e[i])) {
        n[cssTransformProps_1.transformProps.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i];
      }
    }
    return n;
  }
  class tI extends tT {
    getBaseTargetFromProps(t, e) {
      return t[e];
    }
    readValueFromInstance(t, e) {
      if (cssTransformProps_1.transformSet.has(e)) {
        let t = z(e);
        return t && t.default || 0;
      }
      e = tF.has(e) ? e : camelToKebab.toKebabCase(e);
      return t.getAttribute(e);
    }
    scrapeMotionValuesFromProps(t, e, i) {
      return tO(t, e, i);
    }
    build(t, e, i) {
      tj(t, e, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(t, e, i, n) {
      (function (t, e, i, n) {
        tM(t, e, undefined, n);
        for (let i in e.attrs) {
          t.setAttribute(tF.has(i) ? i : camelToKebab.toKebabCase(i), e.attrs[i]);
        }
      })(t, e, 0, n);
    }
    mount(t) {
      this.isSVGTag = tB(t.tagName);
      super.mount(t);
    }
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = ta;
    }
  }
  let tW = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  function tU(t) {
    if (typeof t != "string" || t.includes("-")) ;else if (tW.indexOf(t) > -1 || /[A-Z]/u.test(t)) {
      return true;
    }
    return false;
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var reactContextProvider_2 = require("react-context-provider_2") /*id: 501827*/;
  let tN = reactCoreLibraryReexport.createContext({
    strict: false
  });
  var motionContext = require("motion-context") /*id: 647809*/;
  let tY = reactCoreLibraryReexport.createContext({});
  function tK(t) {
    if (Array.isArray(t)) {
      return t.join(" ");
    } else {
      return t;
    }
  }
  let tH = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function t_(t, e, i) {
    for (let n in e) {
      if (!velocityChecker.hasVelocity(e[n]) && !tC(n, i)) {
        t[n] = e[n];
      }
    }
  }
  let tZ = () => ({
    ...tH(),
    attrs: {}
  });
  let tq = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
  function tG(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tq.has(t);
  }
  let tQ = t => !tG(t);
  try {
    n = require("react-dom-prop-validator") /*id: 742932*/.default;
    if (typeof n == "function") {
      tQ = t => t.startsWith("on") ? !tG(t) : n(t);
    }
  } catch {}
  var larkUrlPreviewContext = require("lark-url-preview-context") /*id: 445669*/;
  var useLazyRefHook = require("use-lazy-ref-hook") /*id: 693163*/;
  function t1(t) {
    if (velocityChecker.hasVelocity(t)) {
      return t.get();
    } else {
      return t;
    }
  }
  let t3 = t => (e, i) => {
    let n = reactCoreLibraryReexport.useContext(tY);
    let s = reactCoreLibraryReexport.useContext(larkUrlPreviewContext.previewContext);
    let o = () => function (t, e, i, n) {
      let {
        scrapeMotionValuesFromProps: r,
        createRenderState: s
      } = t;
      return {
        latestValues: function (t, e, i, n) {
          let r = {};
          let s = n(t, {});
          for (let t in s) {
            r[t] = t1(s[t]);
          }
          let {
            initial: o,
            animate: a
          } = t;
          let l = tv(t);
          let u = tg(t);
          if (e && u && !l && t.inherit !== false) {
            if (o === undefined) {
              o = e.initial;
            }
            if (a === undefined) {
              a = e.animate;
            }
          }
          let h = !!i && i.initial === false;
          let d = (h = h || o === false) ? a : o;
          if (d && typeof d != "boolean" && !tc(d)) {
            let e = Array.isArray(d) ? d : [d];
            for (let i = 0; i < e.length; i++) {
              let n = resolveVariantFunction.resolveVariant(t, e[i]);
              if (n) {
                let {
                  transitionEnd: t,
                  transition: e,
                  ...i
                } = n;
                for (let t in i) {
                  let e = i[t];
                  if (Array.isArray(e)) {
                    let t = h ? e.length - 1 : 0;
                    e = e[t];
                  }
                  if (e !== null) {
                    r[t] = e;
                  }
                }
                for (let e in t) {
                  r[e] = t[e];
                }
              }
            }
          }
          return r;
        }(e, i, n, r),
        renderState: s()
      };
    }(t, e, n, s);
    if (i) {
      return o();
    } else {
      return useLazyRefHook.useLazyRef(o);
    }
  };
  let t2 = t3({
    scrapeMotionValuesFromProps: tE,
    createRenderState: tH
  });
  let t5 = t3({
    scrapeMotionValuesFromProps: tO,
    createRenderState: tZ
  });
  let t4 = Symbol.for("motionComponentSymbol");
  function t6(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  var dataFramerAppearId = require("data-framer-appear-id") /*id: 333675*/;
  let t8 = reactCoreLibraryReexport.createContext({});
  var reactEnvironmentEffect = require("react-environment-effect") /*id: 65058*/;
  function et(t) {
    let {
      forwardMotionProps: n = false
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let s = arguments.length > 2 ? arguments[2] : undefined;
    let o = arguments.length > 3 ? arguments[3] : undefined;
    if (s) {
      (function (t) {
        for (let e in t) {
          tn[e] = {
            ...tn[e],
            ...t[e]
          };
        }
      })(s);
    }
    let a = tU(t) ? t5 : t2;
    function l(e, i) {
      var s;
      var l;
      var u;
      let h;
      let d = {
        ...reactCoreLibraryReexport.useContext(motionContext.motionContext),
        ...e,
        layoutId: function (t) {
          let {
            layoutId: e
          } = t;
          let i = reactCoreLibraryReexport.useContext(reactContextProvider_2.AppContext).id;
          if (i && e !== undefined) {
            return i + "-" + e;
          } else {
            return e;
          }
        }(e)
      };
      let {
        isStatic: c
      } = d;
      let p = function (t) {
        let {
          initial: e,
          animate: i
        } = function (t, e) {
          if (tv(t)) {
            let {
              initial: e,
              animate: i
            } = t;
            return {
              initial: e === false || tp(e) ? e : undefined,
              animate: tp(i) ? i : undefined
            };
          }
          if (t.inherit !== false) {
            return e;
          } else {
            return {};
          }
        }(t, reactCoreLibraryReexport.useContext(tY));
        return reactCoreLibraryReexport.useMemo(() => ({
          initial: e,
          animate: i
        }), [tK(e), tK(i)]);
      }(e);
      let m = a(e, c);
      if (!c && detectWindowEnvironment.isWindowAvailable) {
        l = 0;
        u = 0;
        reactCoreLibraryReexport.useContext(tN).strict;
        let e = function (t) {
          let {
            drag: e,
            layout: i
          } = tn;
          if (!e && !i) {
            return {};
          }
          let n = {
            ...e,
            ...i
          };
          return {
            MeasureLayout: (e == null ? undefined : e.isEnabled(t)) || (i == null ? undefined : i.isEnabled(t)) ? n.MeasureLayout : undefined,
            ProjectionNode: n.ProjectionNode
          };
        }(d);
        h = e.MeasureLayout;
        p.visualElement = function (t, e, i, n, s) {
          var o;
          var a;
          var l;
          var u;
          let {
            visualElement: h
          } = reactCoreLibraryReexport.useContext(tY);
          let d = reactCoreLibraryReexport.useContext(tN);
          let c = reactCoreLibraryReexport.useContext(larkUrlPreviewContext.previewContext);
          let p = reactCoreLibraryReexport.useContext(motionContext.motionContext).reducedMotion;
          let m = reactCoreLibraryReexport.useRef(null);
          n = n || d.renderer;
          if (!m.current && n) {
            m.current = n(t, {
              visualState: e,
              parent: h,
              props: i,
              presenceContext: c,
              blockInitialAnimation: !!c && c.initial === false,
              reducedMotionConfig: p
            });
          }
          let f = m.current;
          let v = reactCoreLibraryReexport.useContext(t8);
          if (f && !f.projection && s && (f.type === "html" || f.type === "svg")) {
            (function (t, e, i, n) {
              let {
                layoutId: r,
                layout: s,
                drag: o,
                dragConstraints: a,
                layoutScroll: l,
                layoutRoot: u,
                layoutCrossfade: h
              } = e;
              t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? undefined : function t(e) {
                if (e) {
                  if (e.options.allowProjection !== false) {
                    return e.projection;
                  } else {
                    return t(e.parent);
                  }
                }
              }(t.parent));
              t.projection.setOptions({
                layoutId: r,
                layout: s,
                alwaysMeasureLayout: !!o || a && t6(a),
                visualElement: t,
                animationType: typeof s == "string" ? s : "both",
                initialPromotionConfig: n,
                crossfade: h,
                layoutScroll: l,
                layoutRoot: u
              });
            })(m.current, i, s, v);
          }
          let g = reactCoreLibraryReexport.useRef(false);
          reactCoreLibraryReexport.useInsertionEffect(() => {
            if (f && g.current) {
              f.update(i, c);
            }
          });
          let y = i[dataFramerAppearId.dataFramerAppearId];
          let x = reactCoreLibraryReexport.useRef(!!y && !((o = (a = window).MotionHandoffIsComplete) === null || o === undefined ? undefined : o.call(a, y)) && ((l = (u = window).MotionHasOptimisedAnimation) === null || l === undefined ? undefined : l.call(u, y)));
          reactEnvironmentEffect.useEnvEffect(() => {
            if (f) {
              g.current = true;
              window.MotionIsMounted = true;
              f.updateFeatures();
              f.scheduleRenderMicrotask();
              if (x.current && f.animationState) {
                f.animationState.animateChanges();
              }
            }
          });
          reactCoreLibraryReexport.useEffect(() => {
            if (f) {
              if (!x.current && f.animationState) {
                f.animationState.animateChanges();
              }
              if (x.current) {
                queueMicrotask(() => {
                  var t;
                  var e;
                  if ((t = (e = window).MotionHandoffMarkAsComplete) !== null && t !== undefined) {
                    t.call(e, y);
                  }
                });
                x.current = false;
              }
              f.enteringChildren = undefined;
            }
          });
          return f;
        }(t, m, d, o, e.ProjectionNode);
      }
      return reactJsxRuntimeCoreReexport.jsxs(tY.Provider, {
        value: p,
        children: [h && p.visualElement ? reactJsxRuntimeCoreReexport.jsx(h, {
          visualElement: p.visualElement,
          ...d
        }) : null, function (t, e, i, n, s) {
          let {
            latestValues: o
          } = n;
          let a = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
          let l = (tU(t) ? function (t, e, i, n) {
            let s = reactCoreLibraryReexport.useMemo(() => {
              let i = tZ();
              tj(i, e, tB(n), t.transformTemplate, t.style);
              return {
                ...i.attrs,
                style: {
                  ...i.style
                }
              };
            }, [e]);
            if (t.style) {
              let e = {};
              t_(e, t.style, t);
              s.style = {
                ...e,
                ...s.style
              };
            }
            return s;
          } : function (t, e) {
            let i = {};
            let n = function (t, e) {
              let i = t.style || {};
              let n = {};
              t_(n, i, t);
              Object.assign(n, function (t, e) {
                let {
                  transformTemplate: i
                } = t;
                return reactCoreLibraryReexport.useMemo(() => {
                  let t = tH();
                  tA(t, e, i);
                  return Object.assign({}, t.vars, t.style);
                }, [e]);
              }(t, e));
              return n;
            }(t, e);
            if (t.drag && t.dragListener !== false) {
              i.draggable = false;
              n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none";
              n.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`;
            }
            if (t.tabIndex === undefined && (t.onTap || t.onTapStart || t.whileTap)) {
              i.tabIndex = 0;
            }
            i.style = n;
            return i;
          })(e, o, s, t);
          let u = function (t, e, i) {
            let n = {};
            for (let r in t) {
              if ((r !== "values" || typeof t.values != "object") && (tQ(r) || i === true && tG(r) || !e && !tG(r) || t.draggable && r.startsWith("onDrag"))) {
                n[r] = t[r];
              }
            }
            return n;
          }(e, typeof t == "string", a);
          let h = t !== reactCoreLibraryReexport.Fragment ? {
            ...u,
            ...l,
            ref: i
          } : {};
          let {
            children: d
          } = e;
          let c = reactCoreLibraryReexport.useMemo(() => velocityChecker.hasVelocity(d) ? d.get() : d, [d]);
          return reactCoreLibraryReexport.createElement(t, {
            ...h,
            children: c
          });
        }(t, e, (s = p.visualElement, reactCoreLibraryReexport.useCallback(t => {
          if (t && m.onMount) {
            m.onMount(t);
          }
          if (s) {
            if (t) {
              s.mount(t);
            } else {
              s.unmount();
            }
          }
          if (i) {
            if (typeof i == "function") {
              i(t);
            } else if (t6(i)) {
              i.current = t;
            }
          }
        }, [s])), m, c, n)]
      });
    }
    l.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    let u = reactCoreLibraryReexport.forwardRef(l);
    u[t4] = t;
    return u;
  }
  var nodeAnimationCore = require("node-animation-core") /*id: 527160*/;
  var nodePositionCalc = require("node-position-calc") /*id: 212456*/;
  var arrayCheckUtil = require("array-check-util") /*id: 818975*/;
  function er(t, e) {
    if (!Array.isArray(e)) {
      return false;
    }
    let i = e.length;
    if (i !== t.length) {
      return false;
    }
    for (let n = 0; n < i; n++) {
      if (e[n] !== t[n]) {
        return false;
      }
    }
    return true;
  }
  let es = tf.length;
  var resolveVariantUtil = require("resolve-variant-util") /*id: 868547*/;
  let ea = [...tm].reverse();
  let el = tm.length;
  function eu(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function eh() {
    return {
      animate: eu(true),
      whileInView: eu(),
      whileHover: eu(),
      whileTap: eu(),
      whileDrag: eu(),
      whileFocus: eu(),
      exit: eu()
    };
  }
  class ed {
    update() {}
    constructor(t) {
      this.isMounted = false;
      this.node = t;
    }
  }
  let ec = 0;
  var identityFunction = require("identity-function") /*id: 482695*/;
  let em = {
    x: false,
    y: false
  };
  var animationController = require("animation-controller") /*id: 421013*/;
  function ev(t, e, i, n = {
    passive: true
  }) {
    t.addEventListener(e, i, n);
    return () => t.removeEventListener(e, i);
  }
  let eg = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
  function ey(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    };
  }
  let ex = t => e => eg(e) && t(e, ey(e));
  function ew(t, e, i, n) {
    return ev(t, e, ex(i), n);
  }
  function eT(t) {
    return t.max - t.min;
  }
  function eP(t, e, i, n = 0.5) {
    t.origin = n;
    t.originPoint = interpolationHelper.interpolate(e.min, e.max, t.origin);
    t.scale = eT(i) / eT(e);
    t.translate = interpolationHelper.interpolate(i.min, i.max, t.origin) - t.originPoint;
    if (t.scale >= 0.9999 && t.scale <= 1.0001 || isNaN(t.scale)) {
      t.scale = 1;
    }
    if (t.translate >= -0.01 && t.translate <= 0.01 || isNaN(t.translate)) {
      t.translate = 0;
    }
  }
  function eb(t, e, i, n) {
    eP(t.x, e.x, i.x, n ? n.originX : undefined);
    eP(t.y, e.y, i.y, n ? n.originY : undefined);
  }
  function eS(t, e, i) {
    t.min = i.min + e.min;
    t.max = t.min + eT(e);
  }
  function eA(t, e, i) {
    t.min = e.min - i.min;
    t.max = t.min + eT(e);
  }
  function eM(t, e, i) {
    eA(t.x, e.x, i.x);
    eA(t.y, e.y, i.y);
  }
  function ek(t) {
    return [t("x"), t("y")];
  }
  let eC = t => {
    let {
      current: e
    } = t;
    if (e) {
      return e.ownerDocument.defaultView;
    } else {
      return null;
    }
  };
  var willChangeHandler = require("will-change-handler") /*id: 610147*/;
  var functionalPipeUtil = require("functional-pipe-util") /*id: 251317*/;
  var unitConversionUtils = require("unit-conversion-utils") /*id: 60508*/;
  let eR = (t, e) => Math.abs(t - e);
  class eL {
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      if (this.removeListeners) {
        this.removeListeners();
      }
      frameloopSchedulerUtils.cancelFrame(this.updatePoint);
    }
    constructor(t, e, {
      transformPagePoint: i,
      contextWindow: n = window,
      dragSnapToOrigin: r = false,
      distanceThreshold: s = 3
    } = {}) {
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.contextWindow = window;
      this.updatePoint = () => {
        var t;
        var e;
        if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
          return;
        }
        let i = eB(this.lastMoveEventInfo, this.history);
        let n = this.startEvent !== null;
        t = i.offset;
        e = {
          x: 0,
          y: 0
        };
        let r = Math.sqrt(eR(t.x, e.x) ** 2 + eR(t.y, e.y) ** 2) >= this.distanceThreshold;
        if (!n && !r) {
          return;
        }
        let {
          point: s
        } = i;
        let {
          timestamp: o
        } = frameloopSchedulerUtils.frameState;
        this.history.push({
          ...s,
          timestamp: o
        });
        let {
          onStart: a,
          onMove: l
        } = this.handlers;
        if (!n) {
          if (a) {
            a(this.lastMoveEvent, i);
          }
          this.startEvent = this.lastMoveEvent;
        }
        if (l) {
          l(this.lastMoveEvent, i);
        }
      };
      this.handlePointerMove = (t, e) => {
        this.lastMoveEvent = t;
        this.lastMoveEventInfo = ej(e, this.transformPagePoint);
        frameloopSchedulerUtils.scheduleFrame.update(this.updatePoint, true);
      };
      this.handlePointerUp = (t, e) => {
        this.end();
        let {
          onEnd: i,
          onSessionEnd: n,
          resumeAnimation: r
        } = this.handlers;
        if (this.dragSnapToOrigin && r) {
          r();
        }
        if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
          return;
        }
        let s = eB(t.type === "pointercancel" ? this.lastMoveEventInfo : ej(e, this.transformPagePoint), this.history);
        if (this.startEvent && i) {
          i(t, s);
        }
        if (n) {
          n(t, s);
        }
      };
      if (!eg(t)) {
        return;
      }
      this.dragSnapToOrigin = r;
      this.handlers = e;
      this.transformPagePoint = i;
      this.distanceThreshold = s;
      this.contextWindow = n || window;
      let o = ej(ey(t), this.transformPagePoint);
      let {
        point: a
      } = o;
      let {
        timestamp: l
      } = frameloopSchedulerUtils.frameState;
      this.history = [{
        ...a,
        timestamp: l
      }];
      let {
        onSessionStart: u
      } = e;
      if (u) {
        u(t, eB(o, this.history));
      }
      this.removeListeners = functionalPipeUtil.pipeFunctions(ew(this.contextWindow, "pointermove", this.handlePointerMove), ew(this.contextWindow, "pointerup", this.handlePointerUp), ew(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
  }
  function ej(t, e) {
    if (e) {
      return {
        point: e(t.point)
      };
    } else {
      return t;
    }
  }
  function eF(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function eB(t, e) {
    let {
      point: i
    } = t;
    return {
      point: i,
      delta: eF(i, eO(e)),
      offset: eF(i, e[0]),
      velocity: function (t, e) {
        if (t.length < 2) {
          return {
            x: 0,
            y: 0
          };
        }
        let i = t.length - 1;
        let n = null;
        let r = eO(t);
        while (i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > unitConversionUtils.convertToMilliseconds(0.1)))) {
          i--;
        }
        if (!n) {
          return {
            x: 0,
            y: 0
          };
        }
        let s = unitConversionUtils.convertToSeconds(r.timestamp - n.timestamp);
        if (s === 0) {
          return {
            x: 0,
            y: 0
          };
        }
        let o = {
          x: (r.x - n.x) / s,
          y: (r.y - n.y) / s
        };
        if (o.x === Infinity) {
          o.x = 0;
        }
        if (o.y === Infinity) {
          o.y = 0;
        }
        return o;
      }(e, 0.1)
    };
  }
  function eO(t) {
    return t[t.length - 1];
  }
  var normalizeValueRange = require("normalize-value-range") /*id: 854139*/;
  var clampNumber = require("clamp-number") /*id: 887362*/;
  function eU(t, e, i) {
    return {
      min: e !== undefined ? t.min + e : undefined,
      max: i !== undefined ? t.max + i - (t.max - t.min) : undefined
    };
  }
  function e$(t, e) {
    let i = e.min - t.min;
    let n = e.max - t.max;
    if (e.max - e.min < t.max - t.min) {
      [i, n] = [n, i];
    }
    return {
      min: i,
      max: n
    };
  }
  function eX(t, e, i) {
    return {
      min: eN(t, e),
      max: eN(t, i)
    };
  }
  function eN(t, e) {
    if (typeof t == "number") {
      return t;
    } else {
      return t[e] || 0;
    }
  }
  let ez = new WeakMap();
  class eY {
    start(t, {
      snapToCursor: e = false,
      distanceThreshold: i
    } = {}) {
      let {
        presenceContext: n
      } = this.visualElement;
      if (n && n.isPresent === false) {
        return;
      }
      let {
        dragSnapToOrigin: r
      } = this.getProps();
      this.panSession = new eL(t, {
        onSessionStart: t => {
          let {
            dragSnapToOrigin: i
          } = this.getProps();
          if (i) {
            this.pauseAnimation();
          } else {
            this.stopAnimation();
          }
          if (e) {
            this.snapToCursor(ey(t).point);
          }
        },
        onStart: (t, e) => {
          var i;
          let {
            drag: n,
            dragPropagation: r,
            onDragStart: s
          } = this.getProps();
          if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = (i = n) === "x" || i === "y" ? em[i] ? null : (em[i] = true, () => {
            em[i] = false;
          }) : em.x || em.y ? null : (em.x = em.y = true, () => {
            em.x = em.y = false;
          }), !this.openDragLock)) {
            return;
          }
          this.latestPointerEvent = t;
          this.latestPanInfo = e;
          this.isDragging = true;
          this.currentDirection = null;
          this.resolveConstraints();
          if (this.visualElement.projection) {
            this.visualElement.projection.isAnimationBlocked = true;
            this.visualElement.projection.target = undefined;
          }
          ek(t => {
            let e = this.getAxisMotionValue(t).get() || 0;
            if (cssUnitUtils.percentUnit.test(e)) {
              let {
                projection: i
              } = this.visualElement;
              if (i && i.layout) {
                let n = i.layout.layoutBox[t];
                if (n) {
                  e = eT(n) * (parseFloat(e) / 100);
                }
              }
            }
            this.originPoint[t] = e;
          });
          if (s) {
            frameloopSchedulerUtils.scheduleFrame.postRender(() => s(t, e));
          }
          willChangeHandler.addWillChangeValue(this.visualElement, "transform");
          let {
            animationState: o
          } = this.visualElement;
          if (o) {
            o.setActive("whileDrag", true);
          }
        },
        onMove: (t, e) => {
          this.latestPointerEvent = t;
          this.latestPanInfo = e;
          let {
            dragPropagation: i,
            dragDirectionLock: n,
            onDirectionLock: r,
            onDrag: s
          } = this.getProps();
          if (!i && !this.openDragLock) {
            return;
          }
          let {
            offset: o
          } = e;
          if (n && this.currentDirection === null) {
            this.currentDirection = function (t, e = 10) {
              let i = null;
              if (Math.abs(t.y) > e) {
                i = "y";
              } else if (Math.abs(t.x) > e) {
                i = "x";
              }
              return i;
            }(o);
            if (this.currentDirection !== null && r) {
              r(this.currentDirection);
            }
            return;
          }
          this.updateAxis("x", e.point, o);
          this.updateAxis("y", e.point, o);
          this.visualElement.render();
          if (s) {
            s(t, e);
          }
        },
        onSessionEnd: (t, e) => {
          this.latestPointerEvent = t;
          this.latestPanInfo = e;
          this.stop(t, e);
          this.latestPointerEvent = null;
          this.latestPanInfo = null;
        },
        resumeAnimation: () => ek(t => {
          var e;
          return this.getAnimationState(t) === "paused" && ((e = this.getAxisMotionValue(t).animation) === null || e === undefined ? undefined : e.play());
        })
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: r,
        distanceThreshold: i,
        contextWindow: eC(this.visualElement)
      });
    }
    stop(t, e) {
      let i = t || this.latestPointerEvent;
      let n = e || this.latestPanInfo;
      let r = this.isDragging;
      this.cancel();
      if (!r || !n || !i) {
        return;
      }
      let {
        velocity: s
      } = n;
      this.startAnimation(s);
      let {
        onDragEnd: o
      } = this.getProps();
      if (o) {
        frameloopSchedulerUtils.scheduleFrame.postRender(() => o(i, n));
      }
    }
    cancel() {
      this.isDragging = false;
      let {
        projection: t,
        animationState: e
      } = this.visualElement;
      if (t) {
        t.isAnimationBlocked = false;
      }
      if (this.panSession) {
        this.panSession.end();
      }
      this.panSession = undefined;
      let {
        dragPropagation: i
      } = this.getProps();
      if (!i && this.openDragLock) {
        this.openDragLock();
        this.openDragLock = null;
      }
      if (e) {
        e.setActive("whileDrag", false);
      }
    }
    updateAxis(t, e, i) {
      let {
        drag: n
      } = this.getProps();
      if (!i || !eK(t, n, this.currentDirection)) {
        return;
      }
      let r = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + i[t];
      if (this.constraints && this.constraints[t]) {
        s = function (t, e, i) {
          let {
            min: n,
            max: r
          } = e;
          if (n !== undefined && t < n) {
            t = i ? interpolationHelper.interpolate(n, t, i.min) : Math.max(t, n);
          } else if (r !== undefined && t > r) {
            t = i ? interpolationHelper.interpolate(r, t, i.max) : Math.min(t, r);
          }
          return t;
        }(s, this.constraints[t], this.elastic[t]);
      }
      r.set(s);
    }
    resolveConstraints() {
      let {
        dragConstraints: e,
        dragElastic: i
      } = this.getProps();
      let n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
      let r = this.constraints;
      if (e && t6(e)) {
        this.constraints ||= this.resolveRefConstraints();
      } else if (e && n) {
        this.constraints = function (t, e) {
          let {
            top: i,
            left: n,
            bottom: r,
            right: s
          } = e;
          return {
            x: eU(t.x, n, s),
            y: eU(t.y, i, r)
          };
        }(n.layoutBox, e);
      } else {
        this.constraints = false;
      }
      this.elastic = function (t = 0.35) {
        if (t === false) {
          t = 0;
        } else if (t === true) {
          t = 0.35;
        }
        return {
          x: eX(t, "left", "right"),
          y: eX(t, "top", "bottom")
        };
      }(i);
      if (r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints) {
        ek(t => {
          if (this.constraints !== false && this.getAxisMotionValue(t)) {
            this.constraints[t] = function (t, e) {
              let i = {};
              if (e.min !== undefined) {
                i.min = e.min - t.min;
              }
              if (e.max !== undefined) {
                i.max = e.max - t.min;
              }
              return i;
            }(n.layoutBox[t], this.constraints[t]);
          }
        });
      }
    }
    resolveRefConstraints() {
      var t;
      let {
        dragConstraints: e,
        onMeasureDragConstraints: i
      } = this.getProps();
      if (!e || !t6(e)) {
        return false;
      }
      let n = e.current;
      stubFunctions.noopFunc(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      let {
        projection: r
      } = this.visualElement;
      if (!r || !r.layout) {
        return false;
      }
      let s = function (t, e, i) {
        let n = w(t, i);
        let {
          scroll: r
        } = e;
        if (r) {
          g(n.x, r.offset.x);
          g(n.y, r.offset.y);
        }
        return n;
      }(n, r.root, this.visualElement.getTransformPagePoint());
      let o = {
        x: e$((t = r.layout.layoutBox).x, s.x),
        y: e$(t.y, s.y)
      };
      if (i) {
        let t = i(function (t) {
          let {
            x: e,
            y: i
          } = t;
          return {
            top: i.min,
            right: e.max,
            bottom: i.max,
            left: e.min
          };
        }(o));
        this.hasMutatedConstraints = !!t;
        if (t) {
          o = l(t);
        }
      }
      return o;
    }
    startAnimation(t) {
      let {
        drag: e,
        dragMomentum: i,
        dragElastic: n,
        dragTransition: r,
        dragSnapToOrigin: s,
        onDragTransitionEnd: o
      } = this.getProps();
      let a = this.constraints || {};
      return Promise.all(ek(o => {
        if (!eK(o, e, this.currentDirection)) {
          return;
        }
        let l = a && a[o] || {};
        if (s) {
          l = {
            min: 0,
            max: 0
          };
        }
        let u = {
          type: "inertia",
          velocity: i ? t[o] : 0,
          bounceStiffness: n ? 200 : 1000000,
          bounceDamping: n ? 40 : 10000000,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...r,
          ...l
        };
        return this.startAxisValueAnimation(o, u);
      })).then(o);
    }
    startAxisValueAnimation(t, e) {
      let i = this.getAxisMotionValue(t);
      willChangeHandler.addWillChangeValue(this.visualElement, t);
      return i.start(animationController.createAnimation(t, i, 0, e, this.visualElement, false));
    }
    stopAnimation() {
      ek(t => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      ek(t => {
        var e;
        if ((e = this.getAxisMotionValue(t).animation) === null || e === undefined) {
          return undefined;
        } else {
          return e.pause();
        }
      });
    }
    getAnimationState(t) {
      return this.getAxisMotionValue(t).animation?.state;
    }
    getAxisMotionValue(t) {
      let e = `_drag${t.toUpperCase()}`;
      let i = this.visualElement.getProps();
      return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : undefined) || 0);
    }
    snapToCursor(t) {
      ek(e => {
        let {
          drag: i
        } = this.getProps();
        if (!eK(e, i, this.currentDirection)) {
          return;
        }
        let {
          projection: n
        } = this.visualElement;
        let r = this.getAxisMotionValue(e);
        if (n && n.layout) {
          let {
            min: i,
            max: s
          } = n.layout.layoutBox[e];
          r.set(t[e] - interpolationHelper.interpolate(i, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) {
        return;
      }
      let {
        drag: t,
        dragConstraints: e
      } = this.getProps();
      let {
        projection: i
      } = this.visualElement;
      if (!t6(e) || !i || !this.constraints) {
        return;
      }
      this.stopAnimation();
      let n = {
        x: 0,
        y: 0
      };
      ek(t => {
        let e = this.getAxisMotionValue(t);
        if (e && this.constraints !== false) {
          let i = e.get();
          n[t] = function (t, e) {
            let i = 0.5;
            let n = eT(t);
            let r = eT(e);
            if (r > n) {
              i = normalizeValueRange.normalizeValue(e.min, e.max - n, t.min);
            } else if (n > r) {
              i = normalizeValueRange.normalizeValue(t.min, t.max - r, e.min);
            }
            return clampNumber.clampNumber(0, 1, i);
          }({
            min: i,
            max: i
          }, this.constraints[t]);
        }
      });
      let {
        transformTemplate: r
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = r ? r({}, "") : "none";
      if (i.root) {
        i.root.updateScroll();
      }
      i.updateLayout();
      this.resolveConstraints();
      ek(e => {
        if (!eK(e, t, null)) {
          return;
        }
        let i = this.getAxisMotionValue(e);
        let {
          min: r,
          max: s
        } = this.constraints[e];
        i.set(interpolationHelper.interpolate(r, s, n[e]));
      });
    }
    addListeners() {
      if (!this.visualElement.current) {
        return;
      }
      ez.set(this.visualElement, this);
      let t = ew(this.visualElement.current, "pointerdown", t => {
        let {
          drag: e,
          dragListener: i = true
        } = this.getProps();
        if (e && i) {
          this.start(t);
        }
      });
      let e = () => {
        let {
          dragConstraints: t
        } = this.getProps();
        if (t6(t) && t.current) {
          this.constraints = this.resolveRefConstraints();
        }
      };
      let {
        projection: i
      } = this.visualElement;
      let n = i.addEventListener("measure", e);
      if (i && !i.layout) {
        if (i.root) {
          i.root.updateScroll();
        }
        i.updateLayout();
      }
      frameloopSchedulerUtils.scheduleFrame.read(e);
      let r = ev(window, "resize", () => this.scalePositionWithinConstraints());
      let s = i.addEventListener("didUpdate", t => {
        let {
          delta: e,
          hasLayoutChanged: i
        } = t;
        if (this.isDragging && i) {
          ek(t => {
            let i = this.getAxisMotionValue(t);
            if (i) {
              this.originPoint[t] += e[t].translate;
              i.set(i.get() + e[t].translate);
            }
          });
          this.visualElement.render();
        }
      });
      return () => {
        r();
        t();
        n();
        if (s) {
          s();
        }
      };
    }
    getProps() {
      let t = this.visualElement.getProps();
      let {
        drag: e = false,
        dragDirectionLock: i = false,
        dragPropagation: n = false,
        dragConstraints: r = false,
        dragElastic: s = 0.35,
        dragMomentum: o = true
      } = t;
      return {
        ...t,
        drag: e,
        dragDirectionLock: i,
        dragPropagation: n,
        dragConstraints: r,
        dragElastic: s,
        dragMomentum: o
      };
    }
    constructor(t) {
      this.openDragLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = {
        x: 0,
        y: 0
      };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = ta();
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
      this.visualElement = t;
    }
  }
  function eK(t, e, i) {
    return (e === true || e === t) && (i === null || i === t);
  }
  let eH = t => (e, i) => {
    if (t) {
      frameloopSchedulerUtils.scheduleFrame.postRender(() => t(e, i));
    }
  };
  var larkUrlPreviewExitHook = require("lark-url-preview-exit-hook") /*id: 963313*/;
  let eZ = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  };
  function eq(t, e) {
    if (e.max === e.min) {
      return 0;
    } else {
      return t / (e.max - e.min) * 100;
    }
  }
  let eG = {
    correct: (t, e) => {
      if (!e.target) {
        return t;
      }
      if (typeof t == "string") {
        if (!cssUnitUtils.pixelUnit.test(t)) {
          return t;
        }
        t = parseFloat(t);
      }
      let i = eq(t, e.target.x);
      let n = eq(t, e.target.y);
      return `${i}% ${n}%`;
    }
  };
  let eQ = false;
  class eJ extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i,
        layoutId: n
      } = this.props;
      let {
        projection: r
      } = t;
      (function (t) {
        for (let e in t) {
          tk[e] = t[e];
          if (cssCustomPropertyValidator_1.isCustomProperty(e)) {
            tk[e].isCSSVariable = true;
          }
        }
      })(e1);
      if (r) {
        if (e.group) {
          e.group.add(r);
        }
        if (i && i.register && n) {
          i.register(r);
        }
        if (eQ) {
          r.root.didUpdate();
        }
        r.addEventListener("animationComplete", () => {
          this.safeToRemove();
        });
        r.setOptions({
          ...r.options,
          onExitComplete: () => this.safeToRemove()
        });
      }
      eZ.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t) {
      let {
        layoutDependency: e,
        visualElement: i,
        drag: n,
        isPresent: r
      } = this.props;
      let {
        projection: s
      } = i;
      if (s) {
        s.isPresent = r;
        eQ = true;
        if (n || t.layoutDependency !== e || e === undefined || t.isPresent !== r) {
          s.willUpdate();
        } else {
          this.safeToRemove();
        }
        if (t.isPresent !== r) {
          if (r) {
            s.promote();
          } else if (!s.relegate()) {
            frameloopSchedulerUtils.scheduleFrame.postRender(() => {
              let t = s.getStack();
              if (!t || !t.members.length) {
                this.safeToRemove();
              }
            });
          }
        }
      }
      return null;
    }
    componentDidUpdate() {
      let {
        projection: t
      } = this.props.visualElement;
      if (t) {
        t.root.didUpdate();
        J.postRender(() => {
          if (!t.currentAnimation && t.isLead()) {
            this.safeToRemove();
          }
        });
      }
    }
    componentWillUnmount() {
      let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i
      } = this.props;
      let {
        projection: n
      } = t;
      eQ = true;
      if (n) {
        n.scheduleCheckAfterUnmount();
        if (e && e.group) {
          e.group.remove(n);
        }
        if (i && i.deregister) {
          i.deregister(n);
        }
      }
    }
    safeToRemove() {
      let {
        safeToRemove: t
      } = this.props;
      if (t) {
        t();
      }
    }
    render() {
      return null;
    }
  }
  function e0(t) {
    let [e, i] = larkUrlPreviewExitHook.useExitPreview();
    let n = reactCoreLibraryReexport.useContext(reactContextProvider_2.AppContext);
    return reactJsxRuntimeCoreReexport.jsx(eJ, {
      ...t,
      layoutGroup: n,
      switchLayoutGroup: reactCoreLibraryReexport.useContext(t8),
      isPresent: e,
      safeToRemove: i
    });
  }
  let e1 = {
    borderRadius: {
      ...eG,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: eG,
    borderTopRightRadius: eG,
    borderBottomLeftRadius: eG,
    borderBottomRightRadius: eG,
    boxShadow: {
      correct: (t, e) => {
        let {
          treeScale: i,
          projectionDelta: n
        } = e;
        let r = cssValueParser_1.cssValueTransformer.parse(t);
        if (r.length > 5) {
          return t;
        }
        let s = cssValueParser_1.cssValueTransformer.createTransformer(t);
        let o = +(typeof r[0] != "number");
        let a = n.x.scale * i.x;
        let l = n.y.scale * i.y;
        r[0 + o] /= a;
        r[1 + o] /= l;
        let h = interpolationHelper.interpolate(a, l, 0.5);
        if (typeof r[2 + o] == "number") {
          r[2 + o] /= h;
        }
        if (typeof r[3 + o] == "number") {
          r[3 + o] /= h;
        }
        return s(r);
      }
    }
  };
  var isObjectUtil_1 = require("is-object-util_1") /*id: 688228*/;
  function e2(t) {
    return isObjectUtil_1.isObject(t) && "ownerSVGElement" in t;
  }
  var safePropertyAccess = require("safe-property-access") /*id: 945701*/;
  var projectionMetricsState = require("projection-metrics-state") /*id: 7808*/;
  var animationFeatureFlags = require("animation-feature-flags") /*id: 452980*/;
  var extractFramerAppearDataAttribute_1 = require("extract-framer-appear-data-attribute_1") /*id: 812636*/;
  var arrayModificationUtils = require("array-modification-utils") /*id: 437678*/;
  let e9 = (t, e) => t.depth - e.depth;
  class it {
    add(t) {
      arrayModificationUtils.addUniqueToArray(this.children, t);
      this.isDirty = true;
    }
    remove(t) {
      arrayModificationUtils.removeFromArray(this.children, t);
      this.isDirty = true;
    }
    forEach(t) {
      if (this.isDirty) {
        this.children.sort(e9);
      }
      this.isDirty = false;
      this.children.forEach(t);
    }
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
  }
  var easingFunctionVariants = require("easing-function-variants") /*id: 74618*/;
  let ii = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  let ir = ii.length;
  let is = t => typeof t == "string" ? parseFloat(t) : t;
  let io = t => typeof t == "number" || cssUnitUtils.pixelUnit.test(t);
  function ia(t, e) {
    if (t[e] !== undefined) {
      return t[e];
    } else {
      return t.borderRadius;
    }
  }
  let il = ih(0, 0.5, easingFunctionVariants.inverseEasingFunc);
  let iu = ih(0.5, 0.95, identityFunction.identity);
  function ih(t, e, i) {
    return n => n < t ? 0 : n > e ? 1 : i(normalizeValueRange.normalizeValue(t, e, n));
  }
  function id(t, e) {
    t.min = e.min;
    t.max = e.max;
  }
  function ic(t, e) {
    id(t.x, e.x);
    id(t.y, e.y);
  }
  function ip(t, e) {
    t.translate = e.translate;
    t.scale = e.scale;
    t.originPoint = e.originPoint;
    t.origin = e.origin;
  }
  function im(t, e, i, n, r) {
    t -= e;
    t = n + 1 / i * (t - n);
    if (r !== undefined) {
      t = n + 1 / r * (t - n);
    }
    return t;
  }
  function iv(t, e, i, n, r) {
    let [s, o, a] = i;
    (function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
      if (cssUnitUtils.percentUnit.test(e)) {
        e = parseFloat(e);
        e = interpolationHelper.interpolate(o.min, o.max, e / 100) - o.min;
      }
      if (typeof e != "number") {
        return;
      }
      let a = interpolationHelper.interpolate(s.min, s.max, n);
      if (t === s) {
        a -= e;
      }
      t.min = im(t.min, e, i, a, r);
      t.max = im(t.max, e, i, a, r);
    })(t, e[s], e[o], e[a], e.scale, n, r);
  }
  let ig = ["x", "scaleX", "originX"];
  let iy = ["y", "scaleY", "originY"];
  function ix(t, e, i, n) {
    iv(t.x, e, ig, i ? i.x : undefined, n ? n.x : undefined);
    iv(t.y, e, iy, i ? i.y : undefined, n ? n.y : undefined);
  }
  function iw(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function iT(t) {
    return iw(t.x) && iw(t.y);
  }
  function iP(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function ib(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function iS(t, e) {
    return ib(t.x, e.x) && ib(t.y, e.y);
  }
  function iA(t) {
    return eT(t.x) / eT(t.y);
  }
  function iM(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  class ik {
    add(t) {
      arrayModificationUtils.addUniqueToArray(this.members, t);
      t.scheduleRender();
    }
    remove(t) {
      arrayModificationUtils.removeFromArray(this.members, t);
      if (t === this.prevLead) {
        this.prevLead = undefined;
      }
      if (t === this.lead) {
        let t = this.members[this.members.length - 1];
        if (t) {
          this.promote(t);
        }
      }
    }
    relegate(t) {
      let e;
      let i = this.members.findIndex(e => t === e);
      if (i === 0) {
        return false;
      }
      for (let t = i; t >= 0; t--) {
        let i = this.members[t];
        if (i.isPresent !== false) {
          e = i;
          break;
        }
      }
      return !!e && (this.promote(e), true);
    }
    promote(t, e) {
      let i = this.lead;
      if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
        if (i.instance) {
          i.scheduleRender();
        }
        t.scheduleRender();
        t.resumeFrom = i;
        if (e) {
          t.resumeFrom.preserveOpacity = true;
        }
        if (i.snapshot) {
          t.snapshot = i.snapshot;
          t.snapshot.latestValues = i.animationValues || i.latestValues;
        }
        if (t.root && t.root.isUpdating) {
          t.isLayoutDirty = true;
        }
        let {
          crossfade: n
        } = t.options;
        if (n === false) {
          i.hide();
        }
      }
    }
    exitAnimationComplete() {
      this.members.forEach(t => {
        let {
          options: e,
          resumingFrom: i
        } = t;
        if (e.onExitComplete) {
          e.onExitComplete();
        }
        if (i && i.options.onExitComplete) {
          i.options.onExitComplete();
        }
      });
    }
    scheduleRender() {
      this.members.forEach(t => {
        if (t.instance) {
          t.scheduleRender(false);
        }
      });
    }
    removeLeadSnapshot() {
      if (this.lead && this.lead.snapshot) {
        this.lead.snapshot = undefined;
      }
    }
    constructor() {
      this.members = [];
    }
  }
  let iC = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
  };
  let iE = ["", "X", "Y", "Z"];
  let iV = 0;
  function iD(t, e, i, n) {
    let {
      latestValues: r
    } = e;
    if (r[t]) {
      i[t] = r[t];
      e.setStaticValue(t, 0);
      if (n) {
        n[t] = 0;
      }
    }
  }
  function iR(t) {
    let {
      attachResizeListener: e,
      defaultParent: i,
      measureScroll: n,
      checkIsScrollRoot: r,
      resetTransform: s
    } = t;
    return class {
      addEventListener(t, e) {
        if (!this.eventHandlers.has(t)) {
          this.eventHandlers.set(t, new subscriptionManagerClass.SubscriptionManager());
        }
        return this.eventHandlers.get(t).add(e);
      }
      notifyListeners(t) {
        var e = arguments.length;
        var i = Array(e > 1 ? e - 1 : 0);
        var n = 1;
        for (; n < e; n++) {
          i[n - 1] = arguments[n];
        }
        let r = this.eventHandlers.get(t);
        if (r) {
          r.notify(...i);
        }
      }
      hasListeners(t) {
        return this.eventHandlers.has(t);
      }
      mount(t) {
        if (this.instance) {
          return;
        }
        this.isSVG = e2(t) && (!e2(t) || t.tagName !== "svg");
        this.instance = t;
        let {
          layoutId: i,
          layout: n,
          visualElement: r
        } = this.options;
        if (r && !r.current) {
          r.mount(t);
        }
        this.root.nodes.add(this);
        if (this.parent) {
          this.parent.children.add(this);
        }
        if (this.root.hasTreeAnimated && (n || i)) {
          this.isLayoutDirty = true;
        }
        if (e) {
          let i;
          let n = 0;
          let r = () => this.root.updateBlockedByResize = false;
          frameloopSchedulerUtils.scheduleFrame.read(() => {
            n = window.innerWidth;
          });
          e(t, () => {
            let t = window.innerWidth;
            if (t !== n) {
              n = t;
              this.root.updateBlockedByResize = true;
              if (i) {
                i();
              }
              i = function (t, e) {
                let i = performanceTimingUtility.performanceTimer.now();
                let n = e => {
                  let {
                    timestamp: r
                  } = e;
                  let s = r - i;
                  if (s >= 250) {
                    frameloopSchedulerUtils.cancelFrame(n);
                    t(s - 250);
                  }
                };
                frameloopSchedulerUtils.scheduleFrame.setup(n, true);
                return () => frameloopSchedulerUtils.cancelFrame(n);
              }(r, 250);
              if (eZ.hasAnimatedSinceResize) {
                eZ.hasAnimatedSinceResize = false;
                this.nodes.forEach(i$);
              }
            }
          });
        }
        if (i) {
          this.root.registerSharedNode(i, this);
        }
        if (this.options.animate !== false && r && (i || n)) {
          this.addEventListener("didUpdate", t => {
            let {
              delta: e,
              hasLayoutChanged: i,
              hasRelativeLayoutChanged: n,
              layout: s
            } = t;
            if (this.isTreeAnimationBlocked()) {
              this.target = undefined;
              this.relativeTarget = undefined;
              return;
            }
            let o = this.options.transition || r.getDefaultTransition() || iZ;
            let {
              onLayoutAnimationStart: a,
              onLayoutAnimationComplete: l
            } = r.getProps();
            let u = !this.targetLayout || !iS(this.targetLayout, s);
            let h = !i && n;
            if (this.options.layoutRoot || this.resumeFrom || h || i && (u || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = undefined;
              }
              let t = {
                ...safePropertyAccess.resolveValue(o, "layout"),
                onPlay: a,
                onComplete: l
              };
              if (r.shouldReduceMotion || this.options.layoutRoot) {
                t.delay = 0;
                t.type = false;
              }
              this.startAnimation(t);
              this.setAnimationOrigin(e, h);
            } else {
              if (!i) {
                i$(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = s;
          });
        }
      }
      unmount() {
        if (this.options.layoutId) {
          this.willUpdate();
        }
        this.root.nodes.remove(this);
        let t = this.getStack();
        if (t) {
          t.remove(this);
        }
        if (this.parent) {
          this.parent.children.delete(this);
        }
        this.instance = undefined;
        this.eventHandlers.clear();
        frameloopSchedulerUtils.cancelFrame(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        if (!this.isUpdateBlocked()) {
          this.isUpdating = true;
          if (this.nodes) {
            this.nodes.forEach(iz);
          }
          this.animationId++;
        }
      }
      getTransformTemplate() {
        let {
          visualElement: t
        } = this.options;
        return t && t.getProps().transformTemplate;
      }
      willUpdate() {
        let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          if (this.options.onExitComplete) {
            this.options.onExitComplete();
          }
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
          (function t(e) {
            e.hasCheckedOptimisedAppear = true;
            if (e.root === e) {
              return;
            }
            let {
              visualElement: i
            } = e.options;
            if (!i) {
              return;
            }
            let n = extractFramerAppearDataAttribute_1.extractFramerAppearData(i);
            if (window.MotionHasOptimisedAnimation(n, "transform")) {
              let {
                layout: t,
                layoutId: i
              } = e.options;
              window.MotionCancelOptimisedAnimation(n, "transform", frameloopSchedulerUtils.scheduleFrame, !t && !i);
            }
            let {
              parent: r
            } = e;
            if (r && !r.hasCheckedOptimisedAppear) {
              t(r);
            }
          })(this);
        }
        if (!this.root.isUpdating) {
          this.root.startUpdate();
        }
        if (this.isLayoutDirty) {
          return;
        }
        this.isLayoutDirty = true;
        for (let t = 0; t < this.path.length; t++) {
          let e = this.path[t];
          e.shouldResetTransform = true;
          e.updateScroll("snapshot");
          if (e.options.layoutRoot) {
            e.willUpdate(false);
          }
        }
        let {
          layoutId: e,
          layout: i
        } = this.options;
        if (e === undefined && !i) {
          return;
        }
        let n = this.getTransformTemplate();
        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : undefined;
        this.updateSnapshot();
        if (t) {
          this.notifyListeners("willUpdate");
        }
      }
      update() {
        this.updateScheduled = false;
        if (this.isUpdateBlocked()) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(iI);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(iW);
          return;
        }
        this.animationCommitId = this.animationId;
        if (this.isUpdating) {
          this.isUpdating = false;
          this.nodes.forEach(iU);
          this.nodes.forEach(iL);
          this.nodes.forEach(ij);
        } else {
          this.nodes.forEach(iW);
        }
        this.clearAllSnapshots();
        let t = performanceTimingUtility.performanceTimer.now();
        frameloopSchedulerUtils.frameState.delta = clampNumber.clampNumber(0, 1000 / 60, t - frameloopSchedulerUtils.frameState.timestamp);
        frameloopSchedulerUtils.frameState.timestamp = t;
        frameloopSchedulerUtils.frameState.isProcessing = true;
        frameloopSchedulerUtils.frameSteps.update.process(frameloopSchedulerUtils.frameState);
        frameloopSchedulerUtils.frameSteps.preRender.process(frameloopSchedulerUtils.frameState);
        frameloopSchedulerUtils.frameSteps.render.process(frameloopSchedulerUtils.frameState);
        frameloopSchedulerUtils.frameState.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          J.read(this.scheduleUpdate);
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(iO);
        this.sharedNodes.forEach(iY);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frameloopSchedulerUtils.scheduleFrame.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        frameloopSchedulerUtils.scheduleFrame.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      updateSnapshot() {
        if (!this.snapshot && !!this.instance) {
          this.snapshot = this.measure();
          if (!!this.snapshot && !eT(this.snapshot.measuredBox.x) && !eT(this.snapshot.measuredBox.y)) {
            this.snapshot = undefined;
          }
        }
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (let t = 0; t < this.path.length; t++) {
            this.path[t].updateScroll();
          }
        }
        let t = this.layout;
        this.layout = this.measure(false);
        this.layoutCorrected = ta();
        this.isLayoutDirty = false;
        this.projectionDelta = undefined;
        this.notifyListeners("measure", this.layout.layoutBox);
        let {
          visualElement: e
        } = this.options;
        if (e) {
          e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : undefined);
        }
      }
      updateScroll(t = "measure") {
        let e = !!this.options.layoutScroll && !!this.instance;
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t) {
          e = false;
        }
        if (e && this.instance) {
          let e = r(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: t,
            isRoot: e,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : e
          };
        }
      }
      resetTransform() {
        if (!s) {
          return;
        }
        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
        let e = this.projectionDelta && !iT(this.projectionDelta);
        let i = this.getTransformTemplate();
        let n = i ? i(this.latestValues, "") : undefined;
        let r = n !== this.prevTransformTemplateValue;
        if (t && this.instance && (e || c(this.latestValues) || r)) {
          s(this.instance, n);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
      measure() {
        var t;
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let i = this.measurePageBox();
        let n = this.removeElementScroll(i);
        if (e) {
          n = this.removeTransform(n);
        }
        iQ((t = n).x);
        iQ(t.y);
        return {
          animationId: this.root.animationId,
          measuredBox: i,
          layoutBox: n,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        let {
          visualElement: e
        } = this.options;
        if (!e) {
          return ta();
        }
        let i = e.measureViewportBox();
        if (!this.scroll?.wasRoot && !this.path.some(i0)) {
          let {
            scroll: t
          } = this.root;
          if (t) {
            g(i.x, t.offset.x);
            g(i.y, t.offset.y);
          }
        }
        return i;
      }
      removeElementScroll(t) {
        let i = ta();
        ic(i, t);
        if (this.scroll?.wasRoot) {
          return i;
        }
        for (let e = 0; e < this.path.length; e++) {
          let n = this.path[e];
          let {
            scroll: r,
            options: s
          } = n;
          if (n !== this.root && r && s.layoutScroll) {
            if (r.wasRoot) {
              ic(i, t);
            }
            g(i.x, r.offset.x);
            g(i.y, r.offset.y);
          }
        }
        return i;
      }
      applyTransform(t, e = false) {
        let i = ta();
        ic(i, t);
        for (let t = 0; t < this.path.length; t++) {
          let n = this.path[t];
          if (!e && n.options.layoutScroll && n.scroll && n !== n.root) {
            x(i, {
              x: -n.scroll.offset.x,
              y: -n.scroll.offset.y
            });
          }
          if (c(n.latestValues)) {
            x(i, n.latestValues);
          }
        }
        if (c(this.latestValues)) {
          x(i, this.latestValues);
        }
        return i;
      }
      removeTransform(t) {
        let e = ta();
        ic(e, t);
        for (let t = 0; t < this.path.length; t++) {
          let i = this.path[t];
          if (!i.instance || !c(i.latestValues)) {
            continue;
          }
          if (d(i.latestValues)) {
            i.updateSnapshot();
          }
          let n = ta();
          ic(n, i.measurePageBox());
          ix(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : undefined, n);
        }
        if (c(this.latestValues)) {
          ix(e, this.latestValues);
        }
        return e;
      }
      setTargetDelta(t) {
        this.targetDelta = t;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
      setOptions(t) {
        this.options = {
          ...this.options,
          ...t,
          crossfade: t.crossfade === undefined || t.crossfade
        };
      }
      clearMeasurements() {
        this.scroll = undefined;
        this.layout = undefined;
        this.snapshot = undefined;
        this.prevTransformTemplateValue = undefined;
        this.targetDelta = undefined;
        this.target = undefined;
        this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameloopSchedulerUtils.frameState.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
      resolveTargetDelta() {
        var e;
        var i;
        var n;
        let r = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        let s = this.getLead();
        this.isProjectionDirty ||= s.isProjectionDirty;
        this.isTransformDirty ||= s.isTransformDirty;
        this.isSharedProjectionDirty ||= s.isSharedProjectionDirty;
        let o = !!this.resumingFrom || this !== s;
        if (!r && (!o || !this.isSharedProjectionDirty) && !this.isProjectionDirty && !this.parent?.isProjectionDirty && !this.attemptToResolveRelativeTarget && !this.root.updateBlockedByResize) {
          return;
        }
        let {
          layout: a,
          layoutId: l
        } = this.options;
        if (this.layout && (a || l)) {
          this.resolvedRelativeTargetAt = frameloopSchedulerUtils.frameState.timestamp;
          if (!this.targetDelta && !this.relativeTarget) {
            let t = this.getClosestProjectingParent();
            if (t && t.layout && this.animationProgress !== 1) {
              this.relativeParent = t;
              this.forceRelativeParentToResolveTarget();
              this.relativeTarget = ta();
              this.relativeTargetOrigin = ta();
              eM(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox);
              ic(this.relativeTarget, this.relativeTargetOrigin);
            } else {
              this.relativeParent = this.relativeTarget = undefined;
            }
          }
          if (this.relativeTarget || this.targetDelta) {
            if (!this.target) {
              this.target = ta();
              this.targetWithTransforms = ta();
            }
            if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
              this.forceRelativeParentToResolveTarget();
              e = this.target;
              i = this.relativeTarget;
              n = this.relativeParent.target;
              eS(e.x, i.x, n.x);
              eS(e.y, i.y, n.y);
            } else if (this.targetDelta) {
              if (this.resumingFrom) {
                this.target = this.applyTransform(this.layout.layoutBox);
              } else {
                ic(this.target, this.layout.layoutBox);
              }
              v(this.target, this.targetDelta);
            } else {
              ic(this.target, this.layout.layoutBox);
            }
            if (this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = false;
              let t = this.getClosestProjectingParent();
              if (t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && this.animationProgress !== 1) {
                this.relativeParent = t;
                this.forceRelativeParentToResolveTarget();
                this.relativeTarget = ta();
                this.relativeTargetOrigin = ta();
                eM(this.relativeTargetOrigin, this.target, t.target);
                ic(this.relativeTarget, this.relativeTargetOrigin);
              } else {
                this.relativeParent = this.relativeTarget = undefined;
              }
            }
            if (projectionMetricsState.getProjectionMetrics.value) {
              iC.calculatedTargetDeltas++;
            }
          }
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || d(this.parent.latestValues) || p(this.parent.latestValues)) {
          return undefined;
        } else if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
      isProjecting() {
        return (!!this.relativeTarget || !!this.targetDelta || !!this.options.layoutRoot) && !!this.layout;
      }
      calcProjection() {
        let e = this.getLead();
        let i = !!this.resumingFrom || this !== e;
        let n = true;
        if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
          n = false;
        }
        if (i && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          n = false;
        }
        if (this.resolvedRelativeTargetAt === frameloopSchedulerUtils.frameState.timestamp) {
          n = false;
        }
        if (n) {
          return;
        }
        let {
          layout: r,
          layoutId: s
        } = this.options;
        this.isTreeAnimating = !!this.parent && !!this.parent.isTreeAnimating || !!this.currentAnimation || !!this.pendingAnimation;
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = undefined;
        }
        if (!this.layout || !r && !s) {
          return;
        }
        ic(this.layoutCorrected, this.layout.layoutBox);
        let o = this.treeScale.x;
        let a = this.treeScale.y;
        (function (t, e, i) {
          let n;
          let r;
          let s = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
          let o = i.length;
          if (o) {
            e.x = e.y = 1;
            for (let a = 0; a < o; a++) {
              r = (n = i[a]).projectionDelta;
              let {
                visualElement: o
              } = n.options;
              if (!o || !o.props.style || o.props.style.display !== "contents") {
                if (s && n.options.layoutScroll && n.scroll && n !== n.root) {
                  x(t, {
                    x: -n.scroll.offset.x,
                    y: -n.scroll.offset.y
                  });
                }
                if (r) {
                  e.x *= r.x.scale;
                  e.y *= r.y.scale;
                  v(t, r);
                }
                if (s && c(n.latestValues)) {
                  x(t, n.latestValues);
                }
              }
            }
            if (e.x < 1.0000000000001 && e.x > 0.999999999999) {
              e.x = 1;
            }
            if (e.y < 1.0000000000001 && e.y > 0.999999999999) {
              e.y = 1;
            }
          }
        })(this.layoutCorrected, this.treeScale, this.path, i);
        if (e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          e.target = e.layout.layoutBox;
          e.targetWithTransforms = ta();
        }
        let {
          target: l
        } = e;
        if (!l) {
          if (this.prevProjectionDelta) {
            this.createProjectionDeltas();
            this.scheduleRender();
          }
          return;
        }
        if (this.projectionDelta && this.prevProjectionDelta) {
          ip(this.prevProjectionDelta.x, this.projectionDelta.x);
          ip(this.prevProjectionDelta.y, this.projectionDelta.y);
        } else {
          this.createProjectionDeltas();
        }
        eb(this.projectionDelta, this.layoutCorrected, l, this.latestValues);
        if (this.treeScale.x !== o || this.treeScale.y !== a || !iM(this.projectionDelta.x, this.prevProjectionDelta.x) || !iM(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", l);
        }
        if (projectionMetricsState.getProjectionMetrics.value) {
          iC.calculatedProjections++;
        }
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender() {
        var t;
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if ((t = this.options.visualElement) !== null && t !== undefined) {
          t.scheduleRender();
        }
        if (e) {
          let t = this.getStack();
          if (t) {
            t.scheduleRender();
          }
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = undefined;
        }
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = ts();
        this.projectionDelta = ts();
        this.projectionDeltaWithTransform = ts();
      }
      setAnimationOrigin(t) {
        let e;
        let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        let n = this.snapshot;
        let r = n ? n.latestValues : {};
        let s = {
          ...this.latestValues
        };
        let o = ts();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = undefined;
        }
        this.attemptToResolveRelativeTarget = !i;
        let a = ta();
        let l = (n ? n.source : undefined) !== (this.layout ? this.layout.source : undefined);
        let h = this.getStack();
        let d = !h || h.members.length <= 1;
        let c = !!l && !d && this.options.crossfade === true && !this.path.some(i_);
        this.animationProgress = 0;
        this.mixTargetDelta = i => {
          let n = i / 1000;
          iK(o.x, t.x, n);
          iK(o.y, t.y, n);
          this.setTargetDelta(o);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var h;
            var p;
            var m;
            var f;
            var v;
            var g;
            eM(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
            m = this.relativeTarget;
            f = this.relativeTargetOrigin;
            v = a;
            g = n;
            iH(m.x, f.x, v.x, g);
            iH(m.y, f.y, v.y, g);
            if (e && (h = this.relativeTarget, p = e, iP(h.x, p.x) && iP(h.y, p.y))) {
              this.isProjectionDirty = false;
            }
            e ||= ta();
            ic(e, this.relativeTarget);
          }
          if (l) {
            this.animationValues = s;
            (function (t, e, i, n, r, s) {
              if (r) {
                t.opacity = interpolationHelper.interpolate(0, i.opacity ?? 1, il(n));
                t.opacityExit = interpolationHelper.interpolate(e.opacity ?? 1, 0, iu(n));
              } else if (s) {
                t.opacity = interpolationHelper.interpolate(e.opacity ?? 1, i.opacity ?? 1, n);
              }
              for (let r = 0; r < ir; r++) {
                let s = `border${ii[r]}Radius`;
                let o = ia(e, s);
                let a = ia(i, s);
                if (o !== undefined || a !== undefined) {
                  o ||= 0;
                  a ||= 0;
                  if (o === 0 || a === 0 || io(o) === io(a)) {
                    t[s] = Math.max(interpolationHelper.interpolate(is(o), is(a), n), 0);
                    if (cssUnitUtils.percentUnit.test(a) || cssUnitUtils.percentUnit.test(o)) {
                      t[s] += "%";
                    }
                  } else {
                    t[s] = a;
                  }
                }
              }
              if (e.rotate || i.rotate) {
                t.rotate = interpolationHelper.interpolate(e.rotate || 0, i.rotate || 0, n);
              }
            })(s, r, this.latestValues, n, c, d);
          }
          this.root.scheduleUpdateProjection();
          this.scheduleRender();
          this.animationProgress = n;
        };
        this.mixTargetDelta(!!this.options.layoutRoot * 1000);
      }
      startAnimation(t) {
        var e;
        var i;
        var n;
        this.notifyListeners("animationStart");
        if ((e = this.currentAnimation) !== null && e !== undefined) {
          e.stop();
        }
        if ((n = this.resumingFrom) !== null && n !== undefined && (i = n.currentAnimation) !== null && i !== undefined) {
          i.stop();
        }
        if (this.pendingAnimation) {
          frameloopSchedulerUtils.cancelFrame(this.pendingAnimation);
          this.pendingAnimation = undefined;
        }
        this.pendingAnimation = frameloopSchedulerUtils.scheduleFrame.update(() => {
          eZ.hasAnimatedSinceResize = true;
          animationFeatureFlags.animationFlags.layout++;
          this.motionValue ||= motionValueFactory.createMotionValue(0);
          this.currentAnimation = function (t, e, i) {
            let n = velocityChecker.hasVelocity(t) ? t : motionValueFactory.createMotionValue(t);
            n.start(animationController.createAnimation("", n, e, i));
            return n.animation;
          }(this.motionValue, [0, 1000], {
            ...t,
            velocity: 0,
            isSync: true,
            onUpdate: e => {
              this.mixTargetDelta(e);
              if (t.onUpdate) {
                t.onUpdate(e);
              }
            },
            onStop: () => {
              animationFeatureFlags.animationFlags.layout--;
            },
            onComplete: () => {
              animationFeatureFlags.animationFlags.layout--;
              if (t.onComplete) {
                t.onComplete();
              }
              this.completeAnimation();
            }
          });
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = this.currentAnimation;
          }
          this.pendingAnimation = undefined;
        });
      }
      completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = undefined;
          this.resumingFrom.preserveOpacity = undefined;
        }
        let t = this.getStack();
        if (t) {
          t.exitAnimationComplete();
        }
        this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
        this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        if (this.currentAnimation) {
          if (this.mixTargetDelta) {
            this.mixTargetDelta(1000);
          }
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
      applyTransformsToTarget() {
        let t = this.getLead();
        let {
          targetWithTransforms: e,
          target: i,
          layout: n,
          latestValues: r
        } = t;
        if (e && i && n) {
          if (this !== t && this.layout && n && iJ(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
            i = this.target || ta();
            let e = eT(this.layout.layoutBox.x);
            i.x.min = t.target.x.min;
            i.x.max = i.x.min + e;
            let n = eT(this.layout.layoutBox.y);
            i.y.min = t.target.y.min;
            i.y.max = i.y.min + n;
          }
          ic(e, i);
          x(e, r);
          eb(this.projectionDeltaWithTransform, this.layoutCorrected, e, r);
        }
      }
      registerSharedNode(t, e) {
        if (!this.sharedNodes.has(t)) {
          this.sharedNodes.set(t, new ik());
        }
        this.sharedNodes.get(t).add(e);
        let i = e.options.initialPromotionConfig;
        e.promote({
          transition: i ? i.transition : undefined,
          preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : undefined
        });
      }
      isLead() {
        let t = this.getStack();
        return !t || t.lead === this;
      }
      getLead() {
        let {
          layoutId: e
        } = this.options;
        return e && this.getStack()?.lead || this;
      }
      getPrevLead() {
        let {
          layoutId: e
        } = this.options;
        if (e) {
          return this.getStack()?.prevLead;
        } else {
          return undefined;
        }
      }
      getStack() {
        let {
          layoutId: t
        } = this.options;
        if (t) {
          return this.root.sharedNodes.get(t);
        }
      }
      promote({
        needsReset: t,
        transition: e,
        preserveFollowOpacity: i
      } = {}) {
        let n = this.getStack();
        if (n) {
          n.promote(this, i);
        }
        if (t) {
          this.projectionDelta = undefined;
          this.needsReset = true;
        }
        if (e) {
          this.setOptions({
            transition: e
          });
        }
      }
      relegate() {
        let t = this.getStack();
        return !!t && t.relegate(this);
      }
      resetSkewAndRotation() {
        let {
          visualElement: t
        } = this.options;
        if (!t) {
          return;
        }
        let e = false;
        let {
          latestValues: i
        } = t;
        if (i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) {
          e = true;
        }
        if (!e) {
          return;
        }
        let n = {};
        if (i.z) {
          iD("z", t, n, this.animationValues);
        }
        for (let e = 0; e < iE.length; e++) {
          iD(`rotate${iE[e]}`, t, n, this.animationValues);
          iD(`skew${iE[e]}`, t, n, this.animationValues);
        }
        t.render();
        for (let e in n) {
          t.setStaticValue(e, n[e]);
          if (this.animationValues) {
            this.animationValues[e] = n[e];
          }
        }
        t.scheduleRender();
      }
      applyProjectionStyles(t, e) {
        if (!this.instance || this.isSVG) {
          return;
        }
        if (!this.isVisible) {
          t.visibility = "hidden";
          return;
        }
        let i = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          t.visibility = "";
          t.opacity = "";
          t.pointerEvents = t1(e == null ? undefined : e.pointerEvents) || "";
          t.transform = i ? i(this.latestValues, "") : "none";
          return;
        }
        let n = this.getLead();
        if (!this.projectionDelta || !this.layout || !n.target) {
          if (this.options.layoutId) {
            t.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
            t.pointerEvents = t1(e == null ? undefined : e.pointerEvents) || "";
          }
          if (this.hasProjected && !c(this.latestValues)) {
            t.transform = i ? i({}, "") : "none";
            this.hasProjected = false;
          }
          return;
        }
        t.visibility = "";
        let r = n.animationValues || n.latestValues;
        this.applyTransformsToTarget();
        let s = function (t, e, i) {
          let n = "";
          let r = t.x.translate / e.x;
          let s = t.y.translate / e.y;
          let o = (i == null ? undefined : i.z) || 0;
          if (r || s || o) {
            n = `translate3d(${r}px, ${s}px, ${o}px) `;
          }
          if (e.x !== 1 || e.y !== 1) {
            n += `scale(${1 / e.x}, ${1 / e.y}) `;
          }
          if (i) {
            let {
              transformPerspective: t,
              rotate: e,
              rotateX: r,
              rotateY: s,
              skewX: o,
              skewY: a
            } = i;
            if (t) {
              n = `perspective(${t}px) ${n}`;
            }
            if (e) {
              n += `rotate(${e}deg) `;
            }
            if (r) {
              n += `rotateX(${r}deg) `;
            }
            if (s) {
              n += `rotateY(${s}deg) `;
            }
            if (o) {
              n += `skewX(${o}deg) `;
            }
            if (a) {
              n += `skewY(${a}deg) `;
            }
          }
          let a = t.x.scale * e.x;
          let l = t.y.scale * e.y;
          if (a !== 1 || l !== 1) {
            n += `scale(${a}, ${l})`;
          }
          return n || "none";
        }(this.projectionDeltaWithTransform, this.treeScale, r);
        if (i) {
          s = i(r, s);
        }
        t.transform = s;
        let {
          x: o,
          y: a
        } = this.projectionDelta;
        t.transformOrigin = `${o.origin * 100}% ${a.origin * 100}% 0`;
        if (n.animationValues) {
          t.opacity = n === this ? r.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit;
        } else {
          t.opacity = n === this ? r.opacity !== undefined ? r.opacity : "" : r.opacityExit !== undefined ? r.opacityExit : 0;
        }
        for (let e in tk) {
          if (r[e] === undefined) {
            continue;
          }
          let {
            correct: i,
            applyTo: o,
            isCSSVariable: a
          } = tk[e];
          let l = s === "none" ? r[e] : i(r[e], n);
          if (o) {
            let e = o.length;
            for (let i = 0; i < e; i++) {
              t[o[i]] = l;
            }
          } else if (a) {
            this.options.visualElement.renderState.vars[e] = l;
          } else {
            t[e] = l;
          }
        }
        if (this.options.layoutId) {
          t.pointerEvents = n === this ? t1(e == null ? undefined : e.pointerEvents) || "" : "none";
        }
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = undefined;
      }
      resetTree() {
        this.root.nodes.forEach(t => {
          var e;
          if ((e = t.currentAnimation) === null || e === undefined) {
            return undefined;
          } else {
            return e.stop();
          }
        });
        this.root.nodes.forEach(iI);
        this.root.sharedNodes.clear();
      }
      constructor(t = {}, e = i == null ? undefined : i()) {
        this.id = iV++;
        this.animationId = 0;
        this.animationCommitId = 0;
        this.children = new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.isProjectionDirty = false;
        this.isSharedProjectionDirty = false;
        this.isTransformDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.hasCheckedOptimisedAppear = false;
        this.treeScale = {
          x: 1,
          y: 1
        };
        this.eventHandlers = new Map();
        this.hasTreeAnimated = false;
        this.updateScheduled = false;
        this.scheduleUpdate = () => this.update();
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          if (projectionMetricsState.getProjectionMetrics.value) {
            iC.nodes = iC.calculatedTargetDeltas = iC.calculatedProjections = 0;
          }
          this.nodes.forEach(iF);
          this.nodes.forEach(iX);
          this.nodes.forEach(iN);
          this.nodes.forEach(iB);
          if (projectionMetricsState.getProjectionMetrics.addProjectionMetrics) {
            projectionMetricsState.getProjectionMetrics.addProjectionMetrics(iC);
          }
        };
        this.resolvedRelativeTargetAt = 0;
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = new Map();
        this.latestValues = t;
        this.root = e ? e.root || e : this;
        this.path = e ? [...e.path, e] : [];
        this.parent = e;
        this.depth = e ? e.depth + 1 : 0;
        for (let t = 0; t < this.path.length; t++) {
          this.path[t].shouldResetTransform = true;
        }
        if (this.root === this) {
          this.nodes = new it();
        }
      }
    };
  }
  function iL(t) {
    t.updateLayout();
  }
  function ij(t) {
    let i = t.resumeFrom?.snapshot || t.snapshot;
    if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
      let {
        layoutBox: e,
        measuredBox: n
      } = t.layout;
      let {
        animationType: r
      } = t.options;
      let s = i.source !== t.layout.source;
      if (r === "size") {
        ek(t => {
          let n = s ? i.measuredBox[t] : i.layoutBox[t];
          let r = eT(n);
          n.min = e[t].min;
          n.max = n.min + r;
        });
      } else if (iJ(r, i.layoutBox, e)) {
        ek(n => {
          let r = s ? i.measuredBox[n] : i.layoutBox[n];
          let o = eT(e[n]);
          r.max = r.min + o;
          if (t.relativeTarget && !t.currentAnimation) {
            t.isProjectionDirty = true;
            t.relativeTarget[n].max = t.relativeTarget[n].min + o;
          }
        });
      }
      let o = ts();
      eb(o, e, i.layoutBox);
      let a = ts();
      if (s) {
        eb(a, t.applyTransform(n, true), i.measuredBox);
      } else {
        eb(a, e, i.layoutBox);
      }
      let l = !iT(o);
      let u = false;
      if (!t.resumeFrom) {
        let n = t.getClosestProjectingParent();
        if (n && !n.resumeFrom) {
          let {
            snapshot: r,
            layout: s
          } = n;
          if (r && s) {
            let o = ta();
            eM(o, i.layoutBox, r.layoutBox);
            let a = ta();
            eM(a, e, s.layoutBox);
            if (!iS(o, a)) {
              u = true;
            }
            if (n.options.layoutRoot) {
              t.relativeTarget = a;
              t.relativeTargetOrigin = o;
              t.relativeParent = n;
            }
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: e,
        snapshot: i,
        delta: a,
        layoutDelta: o,
        hasLayoutChanged: l,
        hasRelativeLayoutChanged: u
      });
    } else if (t.isLead()) {
      let {
        onExitComplete: e
      } = t.options;
      if (e) {
        e();
      }
    }
    t.options.transition = undefined;
  }
  function iF(t) {
    if (projectionMetricsState.getProjectionMetrics.value) {
      iC.nodes++;
    }
    if (t.parent) {
      if (!t.isProjecting()) {
        t.isProjectionDirty = t.parent.isProjectionDirty;
      }
      t.isSharedProjectionDirty ||= !!t.isProjectionDirty || !!t.parent.isProjectionDirty || !!t.parent.isSharedProjectionDirty;
      t.isTransformDirty ||= t.parent.isTransformDirty;
    }
  }
  function iB(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function iO(t) {
    t.clearSnapshot();
  }
  function iI(t) {
    t.clearMeasurements();
  }
  function iW(t) {
    t.isLayoutDirty = false;
  }
  function iU(t) {
    let {
      visualElement: e
    } = t.options;
    if (e && e.getProps().onBeforeLayoutMeasure) {
      e.notify("BeforeLayoutMeasure");
    }
    t.resetTransform();
  }
  function i$(t) {
    t.finishAnimation();
    t.targetDelta = t.relativeTarget = t.target = undefined;
    t.isProjectionDirty = true;
  }
  function iX(t) {
    t.resolveTargetDelta();
  }
  function iN(t) {
    t.calcProjection();
  }
  function iz(t) {
    t.resetSkewAndRotation();
  }
  function iY(t) {
    t.removeLeadSnapshot();
  }
  function iK(t, e, i) {
    t.translate = interpolationHelper.interpolate(e.translate, 0, i);
    t.scale = interpolationHelper.interpolate(e.scale, 1, i);
    t.origin = e.origin;
    t.originPoint = e.originPoint;
  }
  function iH(t, e, i, n) {
    t.min = interpolationHelper.interpolate(e.min, i.min, n);
    t.max = interpolationHelper.interpolate(e.max, i.max, n);
  }
  function i_(t) {
    return t.animationValues && t.animationValues.opacityExit !== undefined;
  }
  let iZ = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  let iq = t => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
  let iG = iq("applewebkit/") && !iq("chrome/") ? Math.round : identityFunction.identity;
  function iQ(t) {
    t.min = iG(t.min);
    t.max = iG(t.max);
  }
  function iJ(t, e, i) {
    return t === "position" || t === "preserve-aspect" && !(Math.abs(iA(e) - iA(i)) <= 0.2);
  }
  function i0(t) {
    return t !== t.root && t.scroll?.wasRoot;
  }
  let i1 = iR({
    attachResizeListener: (t, e) => ev(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => true
  });
  let i3 = {
    current: undefined
  };
  let i2 = iR({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!i3.current) {
        let t = new i1({});
        t.mount(window);
        t.setOptions({
          layoutScroll: true
        });
        i3.current = t;
      }
      return i3.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== undefined ? e : "none";
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  });
  function i5(t, e) {
    let i = function (t, e, i) {
      if (t instanceof EventTarget) {
        return [t];
      }
      if (typeof t == "string") {
        var n;
        let e = document;
        n = undefined;
        let i = e.querySelectorAll(t);
        if (i) {
          return Array.from(i);
        } else {
          return [];
        }
      }
      return Array.from(t);
    }(t);
    let n = new AbortController();
    return [i, {
      passive: true,
      ...e,
      signal: n.signal
    }, () => n.abort()];
  }
  function i4(t) {
    return t.pointerType !== "touch" && !em.x && !em.y;
  }
  function i6(t, e, i) {
    let {
      props: n
    } = t;
    if (t.animationState && n.whileHover) {
      t.animationState.setActive("whileHover", i === "Start");
    }
    let r = n["onHover" + i];
    if (r) {
      frameloopSchedulerUtils.scheduleFrame.postRender(() => r(e, ey(e)));
    }
  }
  var checkElementHasOffsetHeight = require("check-element-has-offset-height") /*id: 918816*/;
  let i8 = (t, e) => !!e && (t === e || i8(t, e.parentElement));
  let i9 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  let nt = new WeakSet();
  function ne(t) {
    return e => {
      if (e.key === "Enter") {
        t(e);
      }
    };
  }
  function ni(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: true,
      bubbles: true
    }));
  }
  let nn = (t, e) => {
    let i = t.currentTarget;
    if (!i) {
      return;
    }
    let n = ne(() => {
      if (nt.has(i)) {
        return;
      }
      ni(i, "down");
      let t = ne(() => {
        ni(i, "up");
      });
      i.addEventListener("keyup", t, e);
      i.addEventListener("blur", () => ni(i, "cancel"), e);
    });
    i.addEventListener("keydown", n, e);
    i.addEventListener("blur", () => i.removeEventListener("keydown", n), e);
  };
  function nr(t) {
    return eg(t) && !em.x && !em.y;
  }
  function ns(t, e, i) {
    let {
      props: n
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) {
      return;
    }
    if (t.animationState && n.whileTap) {
      t.animationState.setActive("whileTap", i === "Start");
    }
    let r = n["onTap" + (i === "End" ? "" : i)];
    if (r) {
      frameloopSchedulerUtils.scheduleFrame.postRender(() => r(e, ey(e)));
    }
  }
  let no = new WeakMap();
  let na = new WeakMap();
  let nl = t => {
    let e = no.get(t.target);
    if (e) {
      e(t);
    }
  };
  let nu = t => {
    t.forEach(nl);
  };
  let nh = {
    some: 0,
    all: 1
  };
  let nd = function (t, e) {
    if (typeof Proxy == "undefined") {
      return et;
    }
    let i = new Map();
    let n = (i, n) => et(i, n, t, e);
    return new Proxy((t, e) => n(t, e), {
      get: (r, s) => s === "create" ? n : (i.has(s) || i.set(s, et(s, undefined, t, e)), i.get(s))
    });
  }({
    animation: {
      Feature: class extends ed {
        updateAnimationControlsSubscription() {
          let {
            animate: t
          } = this.node.getProps();
          if (tc(t)) {
            this.unmountControls = t.subscribe(this.node);
          }
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let {
            animate: t
          } = this.node.getProps();
          let {
            animate: e
          } = this.node.prevProps || {};
          if (t !== e) {
            this.updateAnimationControlsSubscription();
          }
        }
        unmount() {
          var t;
          this.node.animationState.reset();
          if ((t = this.unmountControls) !== null && t !== undefined) {
            t.call(this);
          }
        }
        constructor(t) {
          super(t);
          t.animationState ||= function (t) {
            let e = e => Promise.all(e.map(e => {
              let {
                animation: i,
                options: n
              } = e;
              return nodeAnimationCore.animateNode(t, i, n);
            }));
            let i = eh();
            let n = true;
            let r = e => (i, n) => {
              let s = resolveVariantUtil.resolveVariant(t, n, e === "exit" ? t.presenceContext?.custom : undefined);
              if (s) {
                let {
                  transition: t,
                  transitionEnd: e,
                  ...n
                } = s;
                i = {
                  ...i,
                  ...n,
                  ...e
                };
              }
              return i;
            };
            function s(s) {
              let {
                props: o
              } = t;
              let a = function t(e) {
                if (!e) {
                  return;
                }
                if (!e.isControllingVariants) {
                  let i = e.parent && t(e.parent) || {};
                  if (e.props.initial !== undefined) {
                    i.initial = e.props.initial;
                  }
                  return i;
                }
                let i = {};
                for (let t = 0; t < es; t++) {
                  let n = tf[t];
                  let r = e.props[n];
                  if (tp(r) || r === false) {
                    i[n] = r;
                  }
                }
                return i;
              }(t.parent) || {};
              let l = [];
              let u = new Set();
              let h = {};
              let d = Infinity;
              for (let e = 0; e < el; e++) {
                var c;
                var p;
                let m = ea[e];
                let f = i[m];
                let v = o[m] !== undefined ? o[m] : a[m];
                let g = tp(v);
                let y = m === s ? f.isActive : null;
                if (y === false) {
                  d = e;
                }
                let x = v === a[m] && v !== o[m] && g;
                if (x && n && t.manuallyAnimateOnMount) {
                  x = false;
                }
                f.protectedKeys = {
                  ...h
                };
                if (!f.isActive && y === null || !v && !f.prevProp || tc(v) || typeof v == "boolean") {
                  continue;
                }
                c = f.prevProp;
                let w = typeof (p = v) == "string" ? p !== c : !!Array.isArray(p) && !er(p, c);
                let T = w || m === s && f.isActive && !x && g || e > d && g;
                let P = false;
                let b = Array.isArray(v) ? v : [v];
                let S = b.reduce(r(m), {});
                if (y === false) {
                  S = {};
                }
                let {
                  prevResolvedValues: A = {}
                } = f;
                let M = {
                  ...A,
                  ...S
                };
                let k = e => {
                  T = true;
                  if (u.has(e)) {
                    P = true;
                    u.delete(e);
                  }
                  f.needsAnimating[e] = true;
                  let i = t.getValue(e);
                  if (i) {
                    i.liveStyle = false;
                  }
                };
                for (let t in M) {
                  let e = S[t];
                  let i = A[t];
                  if (h.hasOwnProperty(t)) {
                    continue;
                  }
                  let n = false;
                  if (arrayCheckUtil.isArray(e) && arrayCheckUtil.isArray(i) ? er(e, i) : e === i) {
                    if (e !== undefined && u.has(t)) {
                      k(t);
                    } else {
                      f.protectedKeys[t] = true;
                    }
                  } else if (e != null) {
                    k(t);
                  } else {
                    u.add(t);
                  }
                }
                f.prevProp = v;
                f.prevResolvedValues = S;
                if (f.isActive) {
                  h = {
                    ...h,
                    ...S
                  };
                }
                if (n && t.blockInitialAnimation) {
                  T = false;
                }
                let C = x && w;
                let E = !C || P;
                if (T && E) {
                  l.push(...b.map(e => {
                    let i = {
                      type: m
                    };
                    if (typeof e == "string" && n && !C && t.manuallyAnimateOnMount && t.parent) {
                      let {
                        parent: n
                      } = t;
                      let r = resolveVariantUtil.resolveVariant(n, e);
                      if (n.enteringChildren && r) {
                        let {
                          delayChildren: e
                        } = r.transition || {};
                        i.delay = nodePositionCalc.calcNodeOffset(n.enteringChildren, t, e);
                      }
                    }
                    return {
                      animation: e,
                      options: i
                    };
                  }));
                }
              }
              if (u.size) {
                let e = {};
                if (typeof o.initial != "boolean") {
                  let i = resolveVariantUtil.resolveVariant(t, Array.isArray(o.initial) ? o.initial[0] : o.initial);
                  if (i && i.transition) {
                    e.transition = i.transition;
                  }
                }
                u.forEach(i => {
                  let n = t.getBaseTarget(i);
                  let r = t.getValue(i);
                  if (r) {
                    r.liveStyle = true;
                  }
                  e[i] = n ?? null;
                });
                l.push({
                  animation: e
                });
              }
              let m = !!l.length;
              if (n && (o.initial === false || o.initial === o.animate) && !t.manuallyAnimateOnMount) {
                m = false;
              }
              n = false;
              if (m) {
                return e(l);
              } else {
                return Promise.resolve();
              }
            }
            return {
              animateChanges: s,
              setActive: function (e, n) {
                var r;
                if (i[e].isActive === n) {
                  return Promise.resolve();
                }
                if ((r = t.variantChildren) !== null && r !== undefined) {
                  r.forEach(t => {
                    var i;
                    if ((i = t.animationState) === null || i === undefined) {
                      return undefined;
                    } else {
                      return i.setActive(e, n);
                    }
                  });
                }
                i[e].isActive = n;
                let o = s(e);
                for (let t in i) {
                  i[t].protectedKeys = {};
                }
                return o;
              },
              setAnimateFunction: function (i) {
                e = i(t);
              },
              getState: () => i,
              reset: () => {
                i = eh();
                n = true;
              }
            };
          }(t);
        }
      }
    },
    exit: {
      Feature: class extends ed {
        update() {
          if (!this.node.presenceContext) {
            return;
          }
          let {
            isPresent: t,
            onExitComplete: e
          } = this.node.presenceContext;
          let {
            isPresent: i
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) {
            return;
          }
          let n = this.node.animationState.setActive("exit", !t);
          if (e && !t) {
            n.then(() => {
              e(this.id);
            });
          }
        }
        mount() {
          let {
            register: t,
            onExitComplete: e
          } = this.node.presenceContext || {};
          if (e) {
            e(this.id);
          }
          if (t) {
            this.unmount = t(this.id);
          }
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.id = ec++;
        }
      }
    },
    inView: {
      Feature: class extends ed {
        startObserver() {
          this.unmount();
          let {
            viewport: t = {}
          } = this.node.getProps();
          let {
            root: e,
            margin: i,
            amount: n = "some",
            once: r
          } = t;
          let s = {
            root: e ? e.current : undefined,
            rootMargin: i,
            threshold: typeof n == "number" ? n : nh[n]
          };
          return function (t, e, i) {
            let n = function (t) {
              let {
                root: e,
                ...i
              } = t;
              let n = e || document;
              if (!na.has(n)) {
                na.set(n, {});
              }
              let r = na.get(n);
              let s = JSON.stringify(i);
              r[s] ||= new IntersectionObserver(nu, {
                root: e,
                ...i
              });
              return r[s];
            }(e);
            no.set(t, i);
            n.observe(t);
            return () => {
              no.delete(t);
              n.unobserve(t);
            };
          }(this.node.current, s, t => {
            let {
              isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) {
              return;
            }
            if (e) {
              this.hasEnteredView = true;
            }
            if (this.node.animationState) {
              this.node.animationState.setActive("whileInView", e);
            }
            let {
              onViewportEnter: i,
              onViewportLeave: n
            } = this.node.getProps();
            let s = e ? i : n;
            if (s) {
              s(t);
            }
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver == "undefined") {
            return;
          }
          let {
            props: t,
            prevProps: e
          } = this.node;
          if (["amount", "margin", "root"].some(function (t) {
            let {
              viewport: e = {}
            } = t;
            let {
              viewport: i = {}
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return t => e[t] !== i[t];
          }(t, e))) {
            this.startObserver();
          }
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.hasEnteredView = false;
          this.isInView = false;
        }
      }
    },
    tap: {
      Feature: class extends ed {
        mount() {
          let {
            current: t
          } = this.node;
          if (t) {
            this.unmount = function (t, e, i = {}) {
              let [n, r, s] = i5(t, i);
              let o = t => {
                let n = t.currentTarget;
                if (!nr(t)) {
                  return;
                }
                nt.add(n);
                let s = e(n, t);
                let o = (t, e) => {
                  window.removeEventListener("pointerup", a);
                  window.removeEventListener("pointercancel", l);
                  if (nt.has(n)) {
                    nt.delete(n);
                  }
                  if (nr(t) && typeof s == "function") {
                    s(t, {
                      success: e
                    });
                  }
                };
                let a = t => {
                  o(t, n === window || n === document || i.useGlobalTarget || i8(n, t.target));
                };
                let l = t => {
                  o(t, false);
                };
                window.addEventListener("pointerup", a, r);
                window.addEventListener("pointercancel", l, r);
              };
              n.forEach(t => {
                (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r);
                if (checkElementHasOffsetHeight.hasOffsetHeight(t)) {
                  t.addEventListener("focus", t => nn(t, r));
                  if (!i9.has(t.tagName) && t.tabIndex === -1 && !t.hasAttribute("tabindex")) {
                    t.tabIndex = 0;
                  }
                }
              });
              return s;
            }(t, (t, e) => {
              ns(this.node, e, "Start");
              return (t, e) => {
                let {
                  success: i
                } = e;
                return ns(this.node, t, i ? "End" : "Cancel");
              };
            }, {
              useGlobalTarget: this.node.props.globalTapTarget
            });
          }
        }
        unmount() {}
      }
    },
    focus: {
      Feature: class extends ed {
        onFocus() {
          let t = false;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = true;
          }
          if (t && this.node.animationState) {
            this.node.animationState.setActive("whileFocus", true);
            this.isActive = true;
          }
        }
        onBlur() {
          if (this.isActive && this.node.animationState) {
            this.node.animationState.setActive("whileFocus", false);
            this.isActive = false;
          }
        }
        mount() {
          this.unmount = functionalPipeUtil.pipeFunctions(ev(this.node.current, "focus", () => this.onFocus()), ev(this.node.current, "blur", () => this.onBlur()));
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.isActive = false;
        }
      }
    },
    hover: {
      Feature: class extends ed {
        mount() {
          let {
            current: t
          } = this.node;
          if (t) {
            this.unmount = function (t, e, i = {}) {
              let [n, r, s] = i5(t, i);
              let o = t => {
                if (!i4(t)) {
                  return;
                }
                let {
                  target: i
                } = t;
                let n = e(i, t);
                if (typeof n != "function" || !i) {
                  return;
                }
                let s = t => {
                  if (i4(t)) {
                    n(t);
                    i.removeEventListener("pointerleave", s);
                  }
                };
                i.addEventListener("pointerleave", s, r);
              };
              n.forEach(t => {
                t.addEventListener("pointerenter", o, r);
              });
              return s;
            }(t, (t, e) => {
              i6(this.node, e, "Start");
              return t => i6(this.node, t, "End");
            });
          }
        }
        unmount() {}
      }
    },
    pan: {
      Feature: class extends ed {
        onPointerDown(t) {
          this.session = new eL(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eC(this.node)
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n
          } = this.node.getProps();
          return {
            onSessionStart: eH(t),
            onStart: eH(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session;
              if (n) {
                frameloopSchedulerUtils.scheduleFrame.postRender(() => n(t, e));
              }
            }
          };
        }
        mount() {
          this.removePointerDownListener = ew(this.node.current, "pointerdown", t => this.onPointerDown(t));
        }
        update() {
          if (this.session) {
            this.session.updateHandlers(this.createPanHandlers());
          }
        }
        unmount() {
          this.removePointerDownListener();
          if (this.session) {
            this.session.end();
          }
        }
        constructor() {
          super(...arguments);
          this.removePointerDownListener = identityFunction.identity;
        }
      }
    },
    drag: {
      Feature: class extends ed {
        mount() {
          let {
            dragControls: t
          } = this.node.getProps();
          if (t) {
            this.removeGroupControls = t.subscribe(this.controls);
          }
          this.removeListeners = this.controls.addListeners() || identityFunction.identity;
        }
        unmount() {
          this.removeGroupControls();
          this.removeListeners();
        }
        constructor(t) {
          super(t);
          this.removeGroupControls = identityFunction.identity;
          this.removeListeners = identityFunction.identity;
          this.controls = new eY(t);
        }
      },
      ProjectionNode: i2,
      MeasureLayout: e0
    },
    layout: {
      ProjectionNode: i2,
      MeasureLayout: e0
    }
  }, (t, e) => tU(t) ? new tI(e) : new tV(e, {
    allowProjection: t !== reactCoreLibraryReexport.Fragment
  }));
  require.d(exports, {
    createMotionComponent: function () {
      return nd;
    }
  });
}