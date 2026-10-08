// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Typography'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 543669
         */
module.exports = function (module, exports, require) {
  let i;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var p = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var m = propTypesFactoryWrapper;
  var typographyConstants = require("typography-constants") /*id: 518279*/;
  var typographyWrapperComponent = require("typography-wrapper-component") /*id: 156355*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var copyToClipboardUtil = require("copy-to-clipboard-util") /*id: 375679*/;
  var y = copyToClipboardUtil;
  var emptyFunctionExport = require("empty-function-export") /*id: 185067*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var reactTickIcon = require("react-tick-icon") /*id: 818313*/;
  var copyIconComponent = require("copy-icon-component") /*id: 407045*/;
  var enterKeyCheck = require("enter-key-check") /*id: 943784*/;
  let S = typographyConstants.typographyConfig.PREFIX;
  class C extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.copy = e => {
        let {
          content: t,
          duration: n,
          onCopy: i
        } = this.props;
        let r = y(t);
        if (i) {
          i(e, t, r);
        }
        this.setCopied(t, n);
      };
      this.setCopied = (e, t) => {
        this.setState({
          copied: true,
          item: e
        });
        this._timeId = setTimeout(() => {
          this.resetCopied();
        }, t * 1000);
      };
      this.resetCopied = () => {
        if (this._timeId) {
          clearTimeout(this._timeId);
          this._timeId = null;
          this.setState({
            copied: false,
            item: ""
          });
        }
      };
      this.renderSuccessTip = () => {
        let {
          successTip: e
        } = this.props;
        if (e !== undefined) {
          return e;
        } else {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Typography"
          }, e => reactCoreLibraryReexport.createElement("span", null, reactCoreLibraryReexport.createElement(reactTickIcon.TickIcon, null), e.copied));
        }
      };
      this.renderCopyIcon = () => {
        let {
          icon: e
        } = this.props;
        let t = {
          role: "button",
          tabIndex: 0,
          onClick: this.copy,
          onKeyPress: e => enterKeyCheck.isEnterKey(e) && this.copy(e)
        };
        let n = reactCoreLibraryReexport.createElement("a", {
          className: `${S}-action-copy-icon`
        }, reactCoreLibraryReexport.createElement(copyIconComponent.CopyIcon, Object.assign({
          onClick: this.copy
        }, t)));
        if (reactCoreLibraryReexport.isValidElement(e)) {
          return reactCoreLibraryReexport.cloneElement(e, t);
        } else {
          return n;
        }
      };
      this.state = {
        copied: false,
        item: ""
      };
    }
    componentWillUnmount() {
      if (this._timeId) {
        clearTimeout(this._timeId);
        this._timeId = null;
      }
    }
    render() {
      let {
        style: e,
        className: t,
        forwardRef: n,
        copyTip: i
      } = this.props;
      let {
        copied: r
      } = this.state;
      let o = p(t, {
        [`${S}-action-copy`]: !r,
        [`${S}-action-copied`]: r
      });
      return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Typography"
      }, t => reactCoreLibraryReexport.createElement("span", {
        style: Object.assign({
          marginLeft: "4px"
        }, e),
        className: o,
        ref: n
      }, r ? this.renderSuccessTip() : reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
        content: i !== undefined ? i : t.copy
      }, this.renderCopyIcon())));
    }
  }
  C.propTypes = {
    content: m.string,
    onCopy: m.func,
    successTip: m.node,
    copyTip: m.node,
    duration: m.number,
    style: m.object,
    className: m.string,
    icon: m.node
  };
  C.defaultProps = {
    content: "",
    onCopy: emptyFunctionExport.emptyFunction,
    duration: 3,
    style: {},
    className: ""
  };
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  function R(e) {
    if (!e) {
      return 0;
    }
    let t = e.match(/^\d*(\.\d*)?/);
    if (t) {
      return Number(t[0]);
    } else {
      return 0;
    }
  }
  function T(e, t, n = "", r, o, l, a) {
    if (n.length === 0) {
      return "";
    }
    if (!i) {
      (i = document.createElement("div")).setAttribute("aria-hidden", "true");
      document.body.appendChild(i);
    }
    let c = window.getComputedStyle(e);
    let u = Array.prototype.slice.apply(c).map(e => `${e}: ${c.getPropertyValue(e)};`).join("");
    let p = Math.round(R(c.lineHeight) * (t + 1) + R(c.paddingTop) + R(c.paddingBottom));
    function h() {
      let e = i.scrollWidth <= i.offsetWidth;
      let n = i.scrollHeight < p;
      if (t === 1) {
        return e && n;
      } else {
        return n;
      }
    }
    i.setAttribute("style", u);
    i.style.position = "fixed";
    i.style.left = "0";
    i.style.height = "auto";
    i.style.top = "-999999px";
    i.style.zIndex = "-1000";
    i.style.textOverflow = "clip";
    i.style.webkitLineClamp = "none";
    reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null), i);
    let m = document.createElement("span");
    let f = document.createTextNode(n);
    m.appendChild(f);
    if (l.length > 0) {
      let e = document.createTextNode(l);
      m.appendChild(e);
    }
    function g(e, t) {
      let n = e.length;
      if (t) {
        if (a === "end") {
          return e.slice(0, t) + o;
        } else {
          return e.slice(0, t) + o + e.slice(n - t, n);
        }
      } else {
        return o;
      }
    }
    i.appendChild(m);
    Object.values(throttledOmitPathStringify.omitPathStringify(r, "expand")).map(e => e && i.appendChild(e.cloneNode(true)));
    let v = n;
    if (!h()) {
      i.innerHTML = "";
      i.appendChild(m);
      Object.values(r).map(e => e && i.appendChild(e.cloneNode(true)));
      v = function e(t, n, i = 0, r = n.length, l = 0) {
        let a = Math.floor((i + r) / 2);
        let s = g(n, a);
        t.textContent = s;
        if (i >= r - 1 && r > 0) {
          for (let e = r; e >= i; e -= 1) {
            let i = g(n, e);
            t.textContent = i;
            if (h()) {
              return i;
            }
          }
        } else if (r === 0) {
          return o;
        }
        if (h()) {
          return e(t, n, a, r, a);
        } else {
          return e(t, n, i, a, l);
        }
      }(f, n, 0, a === "middle" ? Math.floor(n.length / 2) : n.length);
    }
    i.innerHTML = "";
    return v;
  }
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var resizeObserverComponent = require("resize-observer-component") /*id: 376612*/;
  function Z(e, t, n, i) {
    return new (n ||= Promise)(function (r, o) {
      function l(e) {
        try {
          s(i.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          s(i.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        var t;
        if (e.done) {
          r(e.value);
        } else {
          ((t = e.value) instanceof n ? t : new n(function (e) {
            e(t);
          })).then(l, a);
        }
      }
      s((i = i.apply(e, t || [])).next());
    });
  }
  function O(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let P = typographyConstants.typographyConfig.PREFIX;
  let M = (e, t) => {
    let {
      mark: n,
      code: i,
      underline: r,
      strong: o,
      link: l,
      disabled: a
    } = e;
    let s = t;
    let c = (e, t) => {
      let n = {};
      if (e) {
        if (typeof e == "object") {
          n = Object.assign({}, e);
        }
        s = reactCoreLibraryReexport.createElement(t, n, s);
      }
    };
    c(n, "mark");
    c(i, "code");
    c(r && !l, "u");
    c(o, "strong");
    c(e.delete, "del");
    c(l, a ? "span" : "a");
    return s;
  };
  class W extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.observerTakingEffect = false;
      this.onResize = e => Z(this, undefined, undefined, function* () {
        if (this.rafId) {
          window.cancelAnimationFrame(this.rafId);
        }
        return new Promise(e => {
          this.rafId = window.requestAnimationFrame(() => Z(this, undefined, undefined, function* () {
            yield this.getEllipsisState();
            e();
          }));
        });
      });
      this.canUseCSSEllipsis = () => {
        let {
          copyable: e
        } = this.props;
        let {
          expandable: t,
          expandText: n,
          pos: i,
          suffix: r
        } = this.getEllipsisOpt();
        return !t && isUndefinedCheck.isUndefined(n) && !e && i === "end" && !r.length;
      };
      this.shouldTruncated = e => !!e && !(e < 1) && (e <= 1 ? this.wrapperRef.current.scrollWidth > this.wrapperRef.current.offsetWidth : this.wrapperRef.current.scrollHeight > this.wrapperRef.current.offsetHeight);
      this.showTooltip = () => {
        let {
          isOverflowed: n,
          isTruncated: i,
          expanded: r
        } = this.state;
        let {
          showTooltip: o,
          expandable: l,
          expandText: s
        } = this.getEllipsisOpt();
        let d = !l && isUndefinedCheck.isUndefined(s) && !r && (n || i) && o;
        if (!d) {
          return d;
        }
        let u = {
          type: "tooltip"
        };
        if (typeof o == "object") {
          if (o.type && o.type.toLowerCase() === "popover") {
            return throttledDeepCloneUtil.throttledDeepClone({
              opts: {
                showArrow: true
              }
            }, o, {
              opts: {
                className: p({
                  [`${P}-ellipsis-popover`]: true,
                  [(o == null ? undefined : o.opts)?.className]: !!(o == null ? undefined : o.opts)?.className
                })
              }
            });
          } else {
            return Object.assign(Object.assign({}, u), o);
          }
        } else {
          return u;
        }
      };
      this.onHover = () => {
        if (this.canUseCSSEllipsis()) {
          let {
            rows: e,
            suffix: t,
            pos: n
          } = this.getEllipsisOpt();
          let i = this.shouldTruncated(e);
          this.setState({
            isOverflowed: i,
            isTruncated: false
          });
          return;
        }
      };
      this.getEllipsisState = () => Z(this, undefined, undefined, function* () {
        let {
          rows: e,
          suffix: t,
          pos: n
        } = this.getEllipsisOpt();
        let {
          children: i
        } = this.props;
        if (!this.wrapperRef || !this.wrapperRef.current) {
          yield this.onResize();
          return;
        }
        let {
          expanded: r
        } = this.state;
        if (this.canUseCSSEllipsis()) {
          return;
        }
        if (isNullCheck.isNull(i)) {
          return new Promise(e => {
            this.setState({
              isTruncated: false,
              isOverflowed: false
            }, e);
          });
        }
        pageNoopHandler.noopHandler("children" in this.props && typeof i != "string", "[Semi Typography] Only children with pure text could be used with ellipsis at this moment.");
        if (!e || e < 0 || r) {
          return;
        }
        let l = {
          expand: this.expandRef.current,
          copy: this.copyRef && this.copyRef.current
        };
        let a = T(this.wrapperRef.current, e, String(i), l, "...", t, n);
        return new Promise(e => {
          this.setState({
            isOverflowed: false,
            ellipsisContent: a,
            isTruncated: i !== a
          }, e);
        });
      });
      this.toggleOverflow = e => {
        let {
          onExpand: t,
          expandable: n,
          collapsible: i
        } = this.getEllipsisOpt();
        let {
          expanded: r
        } = this.state;
        if (t) {
          t(!r, e);
        }
        if (n && !r || i && r) {
          this.setState({
            expanded: !r
          });
        }
      };
      this.getEllipsisOpt = () => {
        let {
          ellipsis: e
        } = this.props;
        if (e) {
          return Object.assign({
            rows: 1,
            expandable: false,
            pos: "end",
            suffix: "",
            showTooltip: false,
            collapsible: false,
            expandText: e.expandable ? this.expandStr : undefined,
            collapseText: e.collapsible ? this.collapseStr : undefined
          }, typeof e == "object" ? e : null);
        } else {
          return {};
        }
      };
      this.renderExpandable = () => {
        let e;
        let {
          expanded: t,
          isTruncated: n
        } = this.state;
        if (!n) {
          return null;
        }
        let {
          expandText: i,
          expandable: r,
          collapseText: o,
          collapsible: l
        } = this.getEllipsisOpt();
        let a = !r && isUndefinedCheck.isUndefined(i);
        let s = !l && isUndefinedCheck.isUndefined(o);
        if (t || a) {
          if (t && !s) {
            e = o;
          }
        } else {
          e = i;
        }
        if (a && s) {
          return null;
        } else {
          return reactCoreLibraryReexport.createElement("a", {
            role: "button",
            tabIndex: 0,
            className: `${P}-ellipsis-expand`,
            key: "expand",
            ref: this.expandRef,
            "aria-label": e,
            onClick: this.toggleOverflow,
            onKeyPress: e => enterKeyCheck.isEnterKey(e) && this.toggleOverflow(e)
          }, e);
        }
      };
      this.getEllipsisStyle = () => {
        let {
          ellipsis: e,
          component: t
        } = this.props;
        if (!e) {
          return {
            ellipsisCls: "",
            ellipsisStyle: {}
          };
        }
        let {
          rows: n
        } = this.getEllipsisOpt();
        let {
          expanded: i
        } = this.state;
        let r = !i && this.canUseCSSEllipsis();
        return {
          ellipsisCls: p({
            [`${P}-ellipsis`]: true,
            [`${P}-ellipsis-single-line`]: n === 1,
            [`${P}-ellipsis-multiple-line`]: n > 1,
            [`${P}-ellipsis-multiple-line-text`]: n > 1 && t === "span",
            [`${P}-ellipsis-overflow-ellipsis`]: n === 1 && r,
            [`${P}-ellipsis-overflow-ellipsis-text`]: n === 1 && r && t === "span"
          }),
          ellipsisStyle: r && n > 1 ? {
            WebkitLineClamp: n
          } : {}
        };
      };
      this.renderEllipsisText = e => {
        let {
          suffix: t
        } = e;
        let {
          children: n
        } = this.props;
        let {
          isTruncated: i,
          expanded: r,
          ellipsisContent: o
        } = this.state;
        if (r || !i) {
          return reactCoreLibraryReexport.createElement("span", {
            onMouseEnter: this.onHover
          }, n, t && t.length ? t : null);
        } else {
          return reactCoreLibraryReexport.createElement("span", {
            onMouseEnter: this.onHover
          }, o, t);
        }
      };
      this.state = {
        editable: false,
        copied: false,
        isOverflowed: true,
        ellipsisContent: e.children,
        expanded: false,
        isTruncated: true,
        prevChildren: null
      };
      this.wrapperRef = reactCoreLibraryReexport.createRef();
      this.expandRef = reactCoreLibraryReexport.createRef();
      this.copyRef = reactCoreLibraryReexport.createRef();
    }
    componentDidMount() {
      if (this.props.ellipsis) {
        this.onResize().then(() => commonFrontendUtils.asyncDelayLoop(() => this.observerTakingEffect = true, 1));
      }
    }
    static getDerivedStateFromProps(e, t) {
      let {
        prevChildren: n
      } = t;
      let i = {
        prevChildren: e.children
      };
      if (e.ellipsis && n !== e.children) {
        i.isOverflowed = true;
        i.ellipsisContent = e.children;
        i.expanded = false;
        i.isTruncated = true;
      }
      return i;
    }
    componentDidUpdate(e) {
      if (this.props.children !== e.children) {
        this.forceUpdate();
        if (this.props.ellipsis) {
          this.onResize();
        }
      }
    }
    componentWillUnmount() {
      if (this.rafId) {
        window.cancelAnimationFrame(this.rafId);
      }
    }
    renderOperations() {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, this.renderExpandable(), this.renderCopy());
    }
    renderCopy() {
      let t;
      let {
        copyable: n,
        children: i
      } = this.props;
      if (!n) {
        return null;
      }
      let r = (n == null ? undefined : n.content) ?? i;
      let o = false;
      if (Array.isArray(r)) {
        t = "";
        r.forEach(e => {
          if (typeof e == "object") {
            o = true;
          }
          t += String(e);
        });
      } else {
        if (typeof r == "object") {
          o = true;
        }
        t = String(r);
      }
      pageNoopHandler.noopHandler(o, "Content to be copied in Typography is a object, it will case a [object Object] mistake when copy to clipboard.");
      let l = Object.assign({
        content: t,
        duration: 3
      }, typeof n == "object" ? n : null);
      return reactCoreLibraryReexport.createElement(C, Object.assign({}, l, {
        forwardRef: this.copyRef
      }));
    }
    renderIcon() {
      let {
        icon: e,
        size: t
      } = this.props;
      if (e) {
        return reactCoreLibraryReexport.createElement("span", {
          className: `${P}-icon`,
          "x-semi-prop": "icon"
        }, commonFrontendUtils.isIconElement(e) ? reactCoreLibraryReexport.cloneElement(e, {
          size: t === "small" ? "small" : "default"
        }) : e);
      } else {
        return null;
      }
    }
    renderContent() {
      let e = this.props;
      let {
        component: t,
        children: n,
        className: i,
        type: r,
        spacing: o,
        disabled: a,
        style: c,
        ellipsis: u,
        icon: h,
        size: m,
        link: f,
        heading: v,
        weight: b
      } = e;
      let y = O(e, ["component", "children", "className", "type", "spacing", "disabled", "style", "ellipsis", "icon", "size", "link", "heading", "weight"]);
      let x = throttledOmitPathStringify.omitPathStringify(y, ["strong", "editable", "mark", "copyable", "underline", "code", "delete"]);
      let w = this.renderIcon();
      let A = this.getEllipsisOpt();
      let {
        ellipsisCls: _,
        ellipsisStyle: k
      } = this.getEllipsisStyle();
      let S = u ? this.renderEllipsisText(A) : n;
      let C = p({
        [`${P}-link-text`]: f,
        [`${P}-link-underline`]: this.props.underline && f
      });
      S = M(this.props, reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, w, this.props.link ? reactCoreLibraryReexport.createElement("span", {
        className: C
      }, S) : S));
      let $ = isStringTypeCheck.isString(v) && /^h[1-6]$/.test(v);
      let E = p(i, _, {
        [`${P}-${r}`]: r && !f,
        [`${P}-${m}`]: m,
        [`${P}-link`]: f,
        [`${P}-disabled`]: a,
        [`${P}-${o}`]: o,
        [`${P}-${v}`]: $,
        [`${P}-${v}-weight-${b}`]: $ && b && isNaN(Number(b))
      });
      let R = Object.assign(Object.assign({}, isNaN(Number(b)) ? {} : {
        fontWeight: b
      }), c);
      return reactCoreLibraryReexport.createElement(typographyWrapperComponent.TypographyWrapper, Object.assign({
        className: E,
        style: Object.assign(Object.assign({}, R), k),
        component: t,
        forwardRef: this.wrapperRef
      }, x), S, this.renderOperations());
    }
    renderTipWrapper() {
      let {
        children: e
      } = this.props;
      let t = this.showTooltip();
      let n = this.renderContent();
      if (!t) {
        return n;
      }
      {
        let {
          type: i,
          opts: o,
          renderTooltip: l
        } = t;
        if (isFunctionUtil_1.isFunction(l)) {
          return l(e, n);
        } else if (i.toLowerCase() === "popover") {
          return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, Object.assign({
            content: e,
            position: "top"
          }, o), n);
        } else {
          return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, Object.assign({
            content: e,
            position: "top"
          }, o), n);
        }
      }
    }
    render() {
      var e = this;
      let t = reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Typography"
      }, e => {
        this.expandStr = e.expand;
        this.collapseStr = e.collapse;
        return this.renderTipWrapper();
      });
      if (this.props.ellipsis) {
        return reactCoreLibraryReexport.createElement(resizeObserverComponent.ResizeObserverComp, {
          onResize: function () {
            if (e.observerTakingEffect) {
              e.onResize(...arguments);
            }
          },
          observeParent: true,
          observerProperty: resizeObserverComponent.observerProperties.Width
        }, t);
      } else {
        return t;
      }
    }
  }
  W.propTypes = {
    children: m.node,
    copyable: m.oneOfType([m.shape({
      text: m.string,
      onCopy: m.func,
      successTip: m.node,
      copyTip: m.node
    }), m.bool]),
    delete: m.bool,
    disabled: m.bool,
    ellipsis: m.oneOfType([m.shape({
      rows: m.number,
      expandable: m.bool,
      expandText: m.string,
      onExpand: m.func,
      suffix: m.string,
      showTooltip: m.oneOfType([m.shape({
        type: m.string,
        opts: m.object
      }), m.bool]),
      collapsible: m.bool,
      collapseText: m.string,
      pos: m.oneOf(["end", "middle"])
    }), m.bool]),
    mark: m.bool,
    underline: m.bool,
    link: m.oneOfType([m.object, m.bool]),
    spacing: m.oneOf(typographyConstants.typographyConstants.SPACING),
    strong: m.bool,
    size: m.oneOf(typographyConstants.typographyConstants.SIZE),
    type: m.oneOf(typographyConstants.typographyConstants.TYPE),
    style: m.object,
    className: m.string,
    icon: m.oneOfType([m.node, m.string]),
    heading: m.string,
    component: m.string
  };
  W.defaultProps = {
    children: null,
    copyable: false,
    delete: false,
    disabled: false,
    ellipsis: false,
    icon: "",
    mark: false,
    underline: false,
    strong: false,
    link: false,
    type: "primary",
    spacing: "normal",
    size: "normal",
    style: {},
    className: ""
  };
  require.d(exports, {
    Typography: function () {
      return W;
    }
  });
}