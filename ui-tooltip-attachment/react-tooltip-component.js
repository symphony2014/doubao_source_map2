// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TooltipComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 228812
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var m = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var g = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var eventEmitterClass_1 = require("event-emitter-class_1") /*id: 313104*/;
  var domNodeHelpers = require("dom-node-helpers") /*id: 632685*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  let k = {
    TOP: /top/i,
    RIGHT: /right/i,
    BOTTOM: /bottom/i,
    LEFT: /left/i
  };
  let E = {
    left: 0,
    top: 0,
    height: 0,
    width: 0,
    scrollLeft: 0,
    scrollTop: 0
  };
  class C extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      var t;
      super(Object.assign({}, e));
      t = this;
      this.removePortal = () => {
        this._adapter.removePortal();
      };
      this.setDisplayNone = (e, t) => {
        this._adapter.setDisplayNone(e, t);
      };
      this.onResize = () => {
        this.calcPosition();
      };
      this.delayShow = () => {
        let e = this.getProp("mouseEnterDelay");
        this.clearDelayTimer();
        if (e > 0) {
          this._timer = setTimeout(() => {
            this.show();
            this.clearDelayTimer();
          }, e);
        } else {
          this.show();
        }
      };
      this.show = () => {
        let e = this.getProp("content");
        let t = this.getProp("trigger");
        let n = this.getProp("clickTriggerToHide");
        let {
          visible: i,
          displayNone: r
        } = this.getStates();
        if (r) {
          this.setDisplayNone(false);
        }
        if (!i) {
          this.clearDelayTimer();
          this._adapter.on("portalInserted", () => {
            this.calcPosition();
          });
          this._adapter.on("positionUpdated", () => {
            this._togglePortalVisible(true);
          });
          this._adapter.insertPortal(e, {
            left: -9999,
            top: -9999
          });
          if (t === "custom") {
            this._adapter.registerClickOutsideHandler(() => {});
          }
          if (t === "click" || n || t === "contextMenu") {
            this._adapter.registerClickOutsideHandler(this.hide);
          }
          this._bindScrollEvent();
          this._bindResizeEvent();
        }
      };
      this.calcPosition = function (e, n, i) {
        let r = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        e = (isEmptyUtil.isEmpty(e) ? t._adapter.getTriggerBounding() : e) || Object.assign({}, E);
        i = (isEmptyUtil.isEmpty(i) ? t._adapter.getPopupContainerRect() : i) || Object.assign({}, E);
        n = (isEmptyUtil.isEmpty(n) ? t._adapter.getWrapperBounding() : n) || Object.assign({}, E);
        let s = t.calcPosStyle({
          triggerRect: e,
          wrapperRect: n,
          containerRect: i
        });
        let l = t.getProp("position");
        if (t.getProp("autoAdjustOverflow")) {
          let {
            position: r,
            isHeightOverFlow: o,
            isWidthOverFlow: a
          } = t.adjustPosIfNeed(l, s, e, n, i);
          if (l !== r || o || a) {
            l = r;
            s = t.calcPosStyle({
              triggerRect: e,
              wrapperRect: n,
              containerRect: i,
              position: l,
              spacing: null,
              isOverFlow: [o, a]
            });
          }
        }
        if (r && t._mounted) {
          t._adapter.setPosition(Object.assign(Object.assign({}, s), {
            position: l
          }));
        }
        return s;
      };
      this.delayHide = () => {
        let e = this.getProp("mouseLeaveDelay");
        this.clearDelayTimer();
        if (e > 0) {
          this._timer = setTimeout(() => {
            this.hide();
            this.clearDelayTimer();
          }, e);
        } else {
          this.hide();
        }
      };
      this.hide = () => {
        this.clearDelayTimer();
        this._togglePortalVisible(false);
        this._adapter.off("portalInserted");
        this._adapter.off("positionUpdated");
      };
      this.handleContainerKeydown = e => {
        let {
          guardFocus: t,
          closeOnEsc: n
        } = this.getProps();
        switch (e && e.key) {
          case "Escape":
            if (n) {
              this._handleEscKeyDown(e);
            }
            break;
          case "Tab":
            if (t) {
              let t = this._adapter.getContainer();
              let n = this._adapter.getFocusableElements(t);
              if (n.length) {
                if (e.shiftKey) {
                  this._handleContainerShiftTabKeyDown(n, e);
                } else {
                  this._handleContainerTabKeyDown(n, e);
                }
              }
            }
        }
      };
      this._timer = null;
    }
    init() {
      let {
        wrapperId: e
      } = this.getProps();
      this._mounted = true;
      this._bindEvent();
      this._shouldShow();
      this._initContainerPosition();
      if (!e) {
        this._adapter.setId();
      }
    }
    destroy() {
      this._mounted = false;
      this.unBindEvent();
    }
    _bindEvent() {
      let e = this.getProp("trigger");
      let {
        triggerEventSet: t,
        portalEventSet: n
      } = this._generateEvent(e);
      this._bindTriggerEvent(t);
      this._bindPortalEvent(n);
      this._bindResizeEvent();
    }
    unBindEvent() {
      this._adapter.unregisterClickOutsideHandler();
      this.unBindResizeEvent();
      this.unBindScrollEvent();
      clearTimeout(this._timer);
    }
    _bindTriggerEvent(e) {
      this._adapter.registerTriggerEvent(e);
    }
    _bindPortalEvent(e) {
      this._adapter.registerPortalEvent(e);
    }
    _bindResizeEvent() {
      this._adapter.registerResizeHandler(this.onResize);
    }
    unBindResizeEvent() {
      this._adapter.unregisterResizeHandler(this.onResize);
    }
    _adjustPos(e = "", t = false, n = "reverse", i) {
      switch (n) {
        case "reverse":
        default:
          return this._reversePos(e, t);
        case "expand":
          return this._expandPos(e, i);
        case "reduce":
          return this._reducePos(e);
      }
    }
    _reversePos(e = "", t = false) {
      if (t) {
        if (k.TOP.test(e)) {
          return e.replace("top", "bottom").replace("Top", "Bottom");
        }
        if (k.BOTTOM.test(e)) {
          return e.replace("bottom", "top").replace("Bottom", "Top");
        }
      } else if (k.LEFT.test(e)) {
        return e.replace("left", "right").replace("Left", "Right");
      } else if (k.RIGHT.test(e)) {
        return e.replace("right", "left").replace("Right", "Left");
      }
      return e;
    }
    _expandPos(e = "", t) {
      return e.concat(t);
    }
    _reducePos(e = "") {
      let t = ["Top", "Bottom", "Left", "Right"].find(t => e.endsWith(t));
      if (t) {
        return e.replace(t, "");
      } else {
        return e;
      }
    }
    clearDelayTimer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
    _generateEvent(e) {
      let t = this._adapter.getEventName();
      let n = {
        [t.keydown]: e => {
          this._handleTriggerKeydown(e);
        }
      };
      let i = {};
      switch (e) {
        case "focus":
          n[t.focus] = () => {
            this.delayShow();
          };
          n[t.blur] = () => {
            this.delayHide();
          };
          i = n;
          break;
        case "click":
          n[t.click] = () => {
            this.show();
          };
          i = {};
          break;
        case "hover":
          n[t.mouseEnter] = () => {
            this.setCache("isClickToHide", false);
            this.delayShow();
          };
          n[t.mouseLeave] = () => {
            this.delayHide();
          };
          n[t.focus] = () => {
            let {
              disableFocusListener: e
            } = this.getProps();
            if (!e) {
              this.delayShow();
            }
          };
          n[t.blur] = () => {
            let {
              disableFocusListener: e
            } = this.getProps();
            if (!e) {
              this.delayHide();
            }
          };
          i = Object.assign({}, n);
          if (this.getProp("clickToHide")) {
            i[t.click] = () => {
              this.setCache("isClickToHide", true);
              this.hide();
            };
            i[t.mouseEnter] = () => {
              if (!this.getCache("isClickToHide")) {
                this.delayShow();
              }
            };
          }
          break;
        case "custom":
          break;
        case "contextMenu":
          n[t.contextMenu] = e => {
            e.preventDefault();
            this.show();
          };
      }
      return {
        triggerEventSet: n,
        portalEventSet: i
      };
    }
    _shouldShow() {
      if (this.getProp("visible")) {
        this.show();
      }
    }
    _togglePortalVisible(e) {
      if (this.getState("visible") !== e) {
        this._adapter.togglePortalVisible(e, () => {
          if (e) {
            this._adapter.setInitialFocus();
          }
          this._adapter.notifyVisibleChange(e);
        });
      }
    }
    _roundPixel(e) {
      if (typeof e == "number") {
        return Math.round(e);
      } else {
        return e;
      }
    }
    calcTransformOrigin(e, t, n, i) {
      if (e && t && n != null && i != null) {
        if (this.getProp("transformFromCenter")) {
          if (["topLeft", "bottomLeft"].includes(e)) {
            return `${this._roundPixel(t.width / 2)}px ${-(i * 100)}%`;
          }
          if (["topRight", "bottomRight"].includes(e)) {
            return `calc(100% - ${this._roundPixel(t.width / 2)}px) ${-(i * 100)}%`;
          }
          if (["leftTop", "rightTop"].includes(e)) {
            return `${-(n * 100)}% ${this._roundPixel(t.height / 2)}px`;
          }
          if (["leftBottom", "rightBottom"].includes(e)) {
            return `${-(n * 100)}% calc(100% - ${this._roundPixel(t.height / 2)}px)`;
          }
        }
        return `${-(n * 100)}% ${-(i * 100)}%`;
      }
      return null;
    }
    calcPosStyle(e) {
      let n;
      let i;
      let {
        spacing: r,
        isOverFlow: s
      } = e;
      let {
        innerWidth: l
      } = window;
      let c = (isEmptyUtil.isEmpty(e.triggerRect) ? e.triggerRect : this._adapter.getTriggerBounding()) || Object.assign({}, E);
      let d = (isEmptyUtil.isEmpty(e.containerRect) ? e.containerRect : this._adapter.getPopupContainerRect()) || Object.assign({}, E);
      let u = (isEmptyUtil.isEmpty(e.wrapperRect) ? e.wrapperRect : this._adapter.getWrapperBounding()) || Object.assign({}, E);
      let h = e.position ?? this.getProp("position");
      let p = r ?? this.getProp("spacing");
      let {
        arrowPointAtCenter: m,
        showArrow: f,
        arrowBounding: g
      } = this.getProps();
      let b = f && m;
      let y = p;
      let v = 0;
      if (typeof p != "number") {
        let e = h.includes("top") || h.includes("bottom");
        y = e ? p.y : p.x;
        v = e ? p.x : p.y;
      }
      let w = objectPathGetDefault.getObjectPathDefault(g, "width", 24);
      let _ = objectPathGetDefault.getObjectPathDefault(g, "width", 24);
      let x = objectPathGetDefault.getObjectPathDefault(g, "offsetY", 0);
      let k = 0;
      let C = 0;
      let O = c.left + c.width / 2;
      let j = c.top + c.height / 2;
      let P = 6 + w / 2;
      let T = 6 + _ / 2;
      let S = u.height - d.height;
      let N = u.width - d.width;
      let Z = S > 0 ? S : 0;
      let R = N > 0 ? N : 0;
      let D = s && s[0];
      let I = s && s[1];
      let M = O - d.left < d.right - O;
      let A = j - d.top < d.bottom - j;
      let L = u.width > l;
      let B = Math.abs((u == null ? undefined : u.width) - this._adapter.getContainer()?.clientWidth) > 1;
      if (B) {
        y = y * u.width / this._adapter.getContainer().clientWidth;
      }
      switch (h) {
        case "top":
          n = I ? M ? d.left + u.width / 2 : d.right - u.width / 2 + R : O + v;
          i = D ? d.bottom + Z : c.top - y;
          k = -0.5;
          C = -1;
          break;
        case "topLeft":
          n = I ? L ? d.left : d.right - u.width : b ? O - P + v : c.left + v;
          i = D ? d.bottom + Z : c.top - y;
          C = -1;
          break;
        case "topRight":
          n = I ? d.right + R : b ? O + P + v : c.right + v;
          i = D ? d.bottom + Z : c.top - y;
          C = -1;
          k = -1;
          break;
        case "left":
          n = I ? d.right + R - y + P : c.left - y;
          i = D ? A ? d.top + u.height / 2 : d.bottom - u.height / 2 + Z : j + v;
          k = -1;
          C = -0.5;
          break;
        case "leftTop":
          n = I ? d.right + R - y + P : c.left - y;
          i = D ? d.top : b ? j - T + v : c.top + v;
          k = -1;
          break;
        case "leftBottom":
          n = I ? d.right + R - y + P : c.left - y;
          i = D ? d.bottom + Z : b ? j + T + v : c.bottom + v;
          k = -1;
          C = -1;
          break;
        case "bottom":
          n = I ? M ? d.left + u.width / 2 : d.right - u.width / 2 + R : O + v;
          i = D ? d.top + T - y : c.top + c.height + y;
          k = -0.5;
          break;
        case "bottomLeft":
          n = I ? L ? d.left : d.right - u.width : b ? O - P + v : c.left + v;
          i = D ? d.top + T - y : c.top + c.height + y;
          break;
        case "bottomRight":
          n = I ? d.right + R : b ? O + P + v : c.right + v;
          i = D ? d.top + T - y : c.top + c.height + y;
          k = -1;
          break;
        case "right":
          n = I ? d.left - y + P : c.right + y;
          i = D ? A ? d.top + u.height / 2 : d.bottom - u.height / 2 + Z : j + v;
          C = -0.5;
          break;
        case "rightTop":
          n = I ? d.left - y + P : c.right + y;
          i = D ? d.top : b ? j - T + v : c.top + v;
          break;
        case "rightBottom":
          n = I ? d.left - y + P : c.right + y;
          i = D ? d.bottom + Z : b ? j + T + v : c.bottom + v;
          C = -1;
          break;
        case "leftTopOver":
          n = c.left - y;
          i = c.top - y;
          break;
        case "rightTopOver":
          n = c.right + y;
          i = c.top - y;
          k = -1;
          break;
        case "leftBottomOver":
          n = c.left - y;
          i = c.bottom + y;
          C = -1;
          break;
        case "rightBottomOver":
          n = c.right + y;
          i = c.bottom + y;
          k = -1;
          C = -1;
      }
      let $ = this.calcTransformOrigin(h, c, k, C);
      let F = this._adapter.containerIsBody();
      n -= d.left;
      i -= d.top;
      if (B) {
        n /= u.width / this._adapter.getContainer().clientWidth;
      }
      if (B) {
        i /= u.height / this._adapter.getContainer().clientHeight;
      }
      if (F && !this._adapter.containerIsRelativeOrAbsolute()) {
        let e = this._adapter.getDocumentElementBounding();
        n += d.left - e.left;
        i += d.top - e.top;
      }
      n = F ? n : n + d.scrollLeft;
      i = F ? i : i + d.scrollTop;
      let H = c.height;
      if (this.getProp("showArrow") && !m && H <= (_ / 2 + x) * 2) {
        let e = H / 2 - (x + _ / 2);
        if ((h.includes("Top") || h.includes("Bottom")) && !h.includes("Over")) {
          i = h.includes("Top") ? i + e : i - e;
        }
      }
      let G = {
        left: this._roundPixel(n),
        top: this._roundPixel(i)
      };
      let z = "";
      if (k != null) {
        z += `translateX(${k * 100}%) `;
        Object.defineProperty(G, "translateX", {
          enumerable: false,
          value: k
        });
      }
      if (C != null) {
        z += `translateY(${C * 100}%) `;
        Object.defineProperty(G, "translateY", {
          enumerable: false,
          value: C
        });
      }
      if ($ != null) {
        G.transformOrigin = $;
      }
      if (z) {
        G.transform = z;
      }
      return G;
    }
    isLR(e = "") {
      return e.includes("left") || e.includes("right");
    }
    isTB(e = "") {
      return e.includes("top") || e.includes("bottom");
    }
    isReverse(e, t, n) {
      return e < n && t > n;
    }
    isOverFlow(e, t, n) {
      return e < n && t < n;
    }
    isHalfOverFlow(e, t, n) {
      return e < n || t < n;
    }
    isHalfAllEnough(e, t, n) {
      return e >= n || t >= n;
    }
    getReverse(e, t, n, i) {
      return e && i || n;
    }
    adjustPosIfNeed(e, t, n, i, r) {
      let {
        innerWidth: o,
        innerHeight: s
      } = window;
      let {
        margin: l
      } = this.getProps();
      let a = typeof l == "number" ? l : l.marginLeft;
      let c = typeof l == "number" ? l : l.marginTop;
      let d = typeof l == "number" ? l : l.marginRight;
      let u = typeof l == "number" ? l : l.marginBottom;
      let h = false;
      let p = false;
      let m = this.getProp("spacing");
      let f = m;
      let g = 0;
      if (typeof m != "number") {
        let t = e.includes("top") || e.includes("bottom");
        f = t ? m.y : m.x;
        g = t ? m.x : m.y;
      }
      if (i.width > 0 && i.height > 0) {
        let t = n.left;
        let l = n.right;
        let m = n.top;
        let b = n.bottom;
        let y = o - t;
        let v = s - m;
        let w = o - l;
        let _ = s - b;
        let x = i.width > n.width;
        let k = i.height > n.height;
        let E = m - c < i.height + f && _ - u > i.height + f;
        let C = t - a < i.width + f && w - d > i.width + f;
        let O = _ - u < i.height + f && m - c > i.height + f;
        let j = w - d < i.width + f && t - a > i.width + f;
        if (v - u < i.height + f) {
          i.height;
        }
        if (b - c < i.height + f) {
          i.height;
        }
        let P = v < i.height + g && b > i.height + g;
        let T = b < i.height + g && v > i.height + g;
        let S = y < i.width + g && l > i.width + g;
        let N = l < i.width + g && y > i.width + g;
        let Z = v < i.height + f && b > i.height + f;
        let R = b < i.height + f && v > i.height + f;
        let D = y < i.width && l > i.width;
        let I = l < i.width && y > i.width;
        let M = m - r.top;
        let A = t - r.left;
        let L = M + n.height;
        let B = A + n.width;
        let $ = r.bottom - b;
        let F = r.right - l;
        let H = $ + n.height;
        let G = F + n.width;
        let z = this.isReverse(M - c, $ - u, i.height + f);
        let W = this.isReverse(A - a, F - d, i.width + f);
        let U = this.isReverse($ - u, M - c, i.height + f);
        let K = this.isReverse(F - d, A - a, i.width + f);
        this.isReverse(H - u, L - c, i.height + f);
        this.isReverse(L - c, H - u, i.height + f);
        let V = this.isReverse(H, L, i.height + g);
        let q = this.isReverse(L, H, i.height + g);
        let X = this.isReverse(G, B, i.width + g);
        let Y = this.isReverse(B, G, i.width + g);
        let Q = n.height / 2;
        let J = n.width / 2;
        let ee = this.isOverFlow(m - c, _ - u, i.height + f);
        let et = this.isOverFlow(t - a, w - d, i.width + f);
        let en = this.isOverFlow(b - c, v - u, i.height + f);
        let ei = this.isOverFlow(l - a, y - d, i.width + f);
        let er = this.isHalfOverFlow(b - Q, v - Q, (i.height + g) / 2);
        let eo = this.isHalfOverFlow(l - J, y - J, (i.width + g) / 2);
        let es = this.isHalfAllEnough(b - Q, v - Q, (i.height + g) / 2);
        let el = this.isHalfAllEnough(l - J, y - J, (i.width + g) / 2);
        let ea = this.isOverFlow(M - c, $ - u, i.height + f);
        let ec = this.isOverFlow(A - a, F - d, i.width + f);
        let ed = this.isOverFlow(L - c, H - u, i.height + f);
        let eu = this.isOverFlow(B - a, G - d, i.width + f);
        let eh = this.isHalfOverFlow(L - Q, H - Q, (i.height + g) / 2);
        let ep = this.isHalfOverFlow(B - J, G - J, (i.width + g) / 2);
        let em = this.isHalfAllEnough(L - Q, H - Q, (i.height + g) / 2);
        let ef = this.isHalfAllEnough(B - J, G - J, (i.width + g) / 2);
        let eg = this.getReverse(ee, ea, E, z);
        let eb = this.getReverse(et, ec, C, W);
        let ey = this.getReverse(ee, ea, O, U);
        let ev = this.getReverse(et, ec, j, K);
        let ew = this.getReverse(en, ed, P, V);
        let e_ = this.getReverse(en, ed, T, q);
        let ex = this.getReverse(ei, eu, S, X);
        let ek = this.getReverse(ei, eu, N, Y);
        let eE = er && eh;
        let eC = eo && ep;
        switch (e) {
          case "top":
            if (eg) {
              e = this._adjustPos(e, true);
            }
            if (eC && (ex || ek)) {
              e = this._adjustPos(e, true, "expand", ex ? "Right" : "Left");
            }
            break;
          case "topLeft":
            if (eg) {
              e = this._adjustPos(e, true);
            }
            if (ex && x) {
              e = this._adjustPos(e);
            }
            if (p && (el || ef)) {
              e = this._adjustPos(e, true, "reduce");
            }
            break;
          case "topRight":
            if (eg) {
              e = this._adjustPos(e, true);
            }
            if (ek && x) {
              e = this._adjustPos(e);
            }
            if (p && (el || ef)) {
              e = this._adjustPos(e, true, "reduce");
            }
            break;
          case "left":
            if (eb) {
              e = this._adjustPos(e);
            }
            if (eE && (ew || e_)) {
              e = this._adjustPos(e, false, "expand", ew ? "Bottom" : "Top");
            }
            break;
          case "leftTop":
            if (eb) {
              e = this._adjustPos(e);
            }
            if (ew && k) {
              e = this._adjustPos(e, true);
            }
            if (h && (es || em)) {
              e = this._adjustPos(e, false, "reduce");
            }
            break;
          case "leftBottom":
            if (eb) {
              e = this._adjustPos(e);
            }
            if (e_ && k) {
              e = this._adjustPos(e, true);
            }
            if (h && (es || em)) {
              e = this._adjustPos(e, false, "reduce");
            }
            break;
          case "bottom":
            if (ey) {
              e = this._adjustPos(e, true);
            }
            if (eC && (ex || ek)) {
              e = this._adjustPos(e, true, "expand", ex ? "Right" : "Left");
            }
            break;
          case "bottomLeft":
            if (ey) {
              e = this._adjustPos(e, true);
            }
            if (ex && x) {
              e = this._adjustPos(e);
            }
            if (p && (el || ef)) {
              e = this._adjustPos(e, true, "reduce");
            }
            break;
          case "bottomRight":
            if (ey) {
              e = this._adjustPos(e, true);
            }
            if (ek && x) {
              e = this._adjustPos(e);
            }
            if (p && (el || ef)) {
              e = this._adjustPos(e, true, "reduce");
            }
            break;
          case "right":
            if (ev) {
              e = this._adjustPos(e);
            }
            if (eE && (ew || e_)) {
              e = this._adjustPos(e, false, "expand", ew ? "Bottom" : "Top");
            }
            break;
          case "rightTop":
            if (ev) {
              e = this._adjustPos(e);
            }
            if (ew && k) {
              e = this._adjustPos(e, true);
            }
            if (h && (es || em)) {
              e = this._adjustPos(e, false, "reduce");
            }
            break;
          case "rightBottom":
            if (ev) {
              e = this._adjustPos(e);
            }
            if (e_ && k) {
              e = this._adjustPos(e, true);
            }
            if (h && (es || em)) {
              e = this._adjustPos(e, false, "reduce");
            }
            break;
          case "leftTopOver":
            if (Z) {
              e = this._adjustPos(e, true);
            }
            if (D) {
              e = this._adjustPos(e);
            }
            break;
          case "leftBottomOver":
            if (R) {
              e = this._adjustPos(e, true);
            }
            if (D) {
              e = this._adjustPos(e);
            }
            break;
          case "rightTopOver":
            if (Z) {
              e = this._adjustPos(e, true);
            }
            if (I) {
              e = this._adjustPos(e);
            }
            break;
          case "rightBottomOver":
            if (R) {
              e = this._adjustPos(e, true);
            }
            if (I) {
              e = this._adjustPos(e);
            }
        }
        if (this.isTB(e)) {
          h = ee && ea;
          p = e === "top" || e === "bottom" ? eo && ep || l < 0 || w < 0 : ei && eu || l < 0 || w < 0;
        }
        if (this.isLR(e)) {
          p = et && ec;
          h = e === "left" || e === "right" ? er && eh || m < 0 || v < 0 : en && ed || m < 0 || v < 0;
        }
      }
      return {
        position: e,
        isHeightOverFlow: h,
        isWidthOverFlow: p
      };
    }
    _bindScrollEvent() {
      this._adapter.registerScrollHandler(() => this.calcPosition());
    }
    unBindScrollEvent() {
      this._adapter.unregisterScrollHandler();
    }
    _initContainerPosition() {
      this._adapter.updateContainerPosition();
    }
    _handleTriggerKeydown(e) {
      let {
        closeOnEsc: t,
        disableArrowKeyDown: n
      } = this.getProps();
      let i = this._adapter.getContainer();
      let r = this._adapter.getFocusableElements(i);
      let o = r.length;
      switch (e && e.key) {
        case "Escape":
          uiFocusNavigation.suppressEvent(e);
          if (t) {
            this._handleEscKeyDown(e);
          }
          break;
        case "ArrowUp":
          if (!n && o) {
            this._handleTriggerArrowUpKeydown(r, e);
          }
          break;
        case "ArrowDown":
          if (!n && o) {
            this._handleTriggerArrowDownKeydown(r, e);
          }
      }
    }
    focusTrigger() {
      let {
        trigger: e,
        returnFocusOnClose: t,
        preventScroll: n
      } = this.getProps();
      if (t && e !== "custom") {
        let e = this._adapter.getTriggerNode();
        if (e && "focus" in e) {
          e.focus({
            preventScroll: n
          });
        }
      }
    }
    _handleEscKeyDown(e) {
      let {
        trigger: t
      } = this.getProps();
      if (t !== "custom") {
        this.focusTrigger();
        this.hide();
      }
      this._adapter.notifyEscKeydown(e);
    }
    _handleContainerTabKeyDown(e, t) {
      let {
        preventScroll: n
      } = this.getProps();
      let i = this._adapter.getActiveElement();
      if (e[e.length - 1] === i) {
        e[0].focus({
          preventScroll: n
        });
        t.preventDefault();
      }
    }
    _handleContainerShiftTabKeyDown(e, t) {
      let {
        preventScroll: n
      } = this.getProps();
      let i = this._adapter.getActiveElement();
      if (e[0] === i) {
        e[e.length - 1].focus({
          preventScroll: n
        });
        t.preventDefault();
      }
    }
    _handleTriggerArrowDownKeydown(e, t) {
      let {
        preventScroll: n
      } = this.getProps();
      e[0].focus({
        preventScroll: n
      });
      t.preventDefault();
    }
    _handleTriggerArrowUpKeydown(e, t) {
      let {
        preventScroll: n
      } = this.getProps();
      e[e.length - 1].focus({
        preventScroll: n
      });
      t.preventDefault();
    }
  }
  var tooltipConstants = require("tooltip-constants") /*id: 736928*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var isHtmlElementCheck = require("is-html-element-check") /*id: 287357*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var reactPortalContainer = require("react-portal-container") /*id: 361066*/;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  function R(e, t) {
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
  var D = e => {
    let {
      className: t,
      style: n
    } = e;
    let i = R(e, ["className", "style"]);
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      "aria-hidden": true,
      className: t,
      style: n
    }, i, {
      width: "24",
      height: "7",
      viewBox: "0 0 24 7",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"
    }));
  };
  function I(e, t) {
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
  var M = e => {
    let {
      className: t,
      style: n
    } = e;
    let i = I(e, ["className", "style"]);
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      "aria-hidden": true,
      className: t,
      style: n
    }, i, {
      width: "7",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z"
    }));
  };
  var A = g.shape({
    offsetX: g.number,
    offsetY: g.number,
    width: g.number,
    height: g.number
  });
  var cssAnimationComponent = require("css-animation-component") /*id: 593626*/;
  function B(e, t) {
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
  let $ = tooltipConstants.tooltipPrefix.PREFIX;
  let F = tooltipConstants.tooltipOptions.POSITION_SET;
  let H = tooltipConstants.tooltipOptions.TRIGGER_SET;
  let G = ["flex", "block", "table", "flow-root", "grid"];
  let z = () => document.body;
  class W extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.setContainerEl = e => this.containerEl = {
        current: e
      };
      this.isSpecial = e => {
        if (isHtmlElementCheck.isHtmlElement(e)) {
          return !!e.disabled;
        }
        if (reactCoreLibraryReexport.isValidElement(e)) {
          if (objectPathGetDefault.getObjectPathDefault(e, "props.disabled")) {
            return tooltipConstants.tooltipOptions.STATUS_DISABLED;
          }
          let t = objectPathGetDefault.getObjectPathDefault(e, "props.loading");
          let n = !isEmptyUtil.isEmpty(e) && !isEmptyUtil.isEmpty(e.type) && (objectPathGetDefault.getObjectPathDefault(e, "type.elementType") === "Button" || objectPathGetDefault.getObjectPathDefault(e, "type.elementType") === "IconButton");
          if (t && n) {
            return tooltipConstants.tooltipOptions.STATUS_LOADING;
          }
        }
        return false;
      };
      this.didLeave = () => {
        if (this.props.keepDOM) {
          this.foundation.setDisplayNone(true);
        } else {
          this.foundation.removePortal();
        }
        this.foundation.unBindEvent();
      };
      this.renderIcon = () => {
        let {
          placement: e
        } = this.state;
        let {
          showArrow: t,
          prefixCls: n,
          style: i
        } = this.props;
        let r = null;
        let o = m([`${n}-icon-arrow`]);
        let s = objectPathGetDefault.getObjectPathDefault(i, "backgroundColor");
        let l = e.includes("left") || e.includes("right") ? reactCoreLibraryReexport.createElement(M, null) : reactCoreLibraryReexport.createElement(D, null);
        if (t) {
          r = reactCoreLibraryReexport.isValidElement(t) ? t : reactCoreLibraryReexport.cloneElement(l, {
            className: o,
            style: {
              color: s,
              fill: "currentColor"
            }
          });
        }
        return r;
      };
      this.handlePortalInnerClick = e => {
        if (this.props.clickToHide) {
          this.foundation.hide();
        }
        if (this.props.stopPropagation) {
          commonFrontendUtils.stopEventProp(e);
        }
      };
      this.handlePortalMouseDown = e => {
        if (this.props.stopPropagation) {
          commonFrontendUtils.stopEventProp(e);
        }
      };
      this.handlePortalFocus = e => {
        if (this.props.stopPropagation) {
          commonFrontendUtils.stopEventProp(e);
        }
      };
      this.handlePortalBlur = e => {
        if (this.props.stopPropagation) {
          commonFrontendUtils.stopEventProp(e);
        }
      };
      this.handlePortalInnerKeyDown = e => {
        this.foundation.handleContainerKeydown(e);
      };
      this.renderContentNode = e => {
        let t = {
          initialFocusRef: this.initialFocusRef
        };
        if (isFunctionUtil_1.isFunction(e)) {
          return e(t);
        } else {
          return e;
        }
      };
      this.renderPortal = () => {
        let {
          containerStyle: e = {},
          visible: t,
          portalEventSet: n,
          placement: i,
          displayNone: r,
          transitionState: o,
          id: s,
          isPositionUpdated: c
        } = this.state;
        let {
          prefixCls: d,
          content: h,
          showArrow: p,
          style: f,
          motion: g,
          role: y,
          zIndex: v
        } = this.props;
        let w = this.renderContentNode(h);
        let {
          className: _
        } = this.props;
        let x = this.context.direction;
        let k = m(_, {
          [`${d}-wrapper`]: true,
          [`${d}-wrapper-show`]: t,
          [`${d}-with-arrow`]: !!p,
          [`${d}-rtl`]: x === "rtl"
        });
        let E = this.renderIcon();
        let C = throttledOmitPathStringify.omitPathStringify(e, g ? ["transformOrigin"] : undefined);
        let O = objectPathGetDefault.getObjectPathDefault(e, "transformOrigin");
        let j = objectPathGetDefault.getObjectPathDefault(f, "opacity", null);
        let P = j || 1;
        let T = reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
          fillMode: "forwards",
          animationState: o,
          motion: g && c,
          startClassName: o === "enter" ? `${$}-animation-show` : `${$}-animation-hide`,
          onAnimationEnd: () => {
            var e;
            var t;
            if (o === "leave") {
              this.didLeave();
              if ((t = (e = this.props).afterClose) !== null && t !== undefined) {
                t.call(e);
              }
            }
          }
        }, e => {
          let {
            animationStyle: t,
            animationClassName: o,
            animationEventsNeedBind: l
          } = e;
          return reactCoreLibraryReexport.createElement("div", Object.assign({
            className: m(k, o),
            style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), r ? {
              display: "none"
            } : {}), {
              transformOrigin: O
            }), f), j ? {
              opacity: c ? P : "0"
            } : {})
          }, n, l, {
            role: y,
            "x-placement": i,
            id: s
          }), reactCoreLibraryReexport.createElement("div", {
            className: `${$}-content`
          }, w), E);
        });
        return reactCoreLibraryReexport.createElement(reactPortalContainer.PortalContainer, {
          getPopupContainer: this.props.getPopupContainer,
          style: {
            zIndex: v
          }
        }, reactCoreLibraryReexport.createElement("div", {
          tabIndex: -1,
          className: `${semiIdentifier.semiIdentifier}-portal-inner`,
          style: C,
          ref: this.setContainerEl,
          onClick: this.handlePortalInnerClick,
          onFocus: this.handlePortalFocus,
          onBlur: this.handlePortalBlur,
          onMouseDown: this.handlePortalMouseDown,
          onKeyDown: this.handlePortalInnerKeyDown
        }, T));
      };
      this.wrapSpan = e => {
        let {
          wrapperClassName: t
        } = this.props;
        let n = objectPathGetDefault.getObjectPathDefault(e, "props.style.display");
        let i = objectPathGetDefault.getObjectPathDefault(e, "props.block");
        let r = {};
        if (typeof e != "string") {
          r.display = "inline-block";
        }
        if (i || G.includes(n)) {
          r.width = "100%";
        }
        return reactCoreLibraryReexport.createElement("span", {
          className: t,
          style: r
        }, e);
      };
      this.mergeEvents = (e, t) => {
        let n = {};
        arrayObjectForeach.arrayObjectForeach(t, (t, i) => {
          if (typeof t == "function") {
            n[i] = function () {
              t(...arguments);
              if (e && typeof e[i] == "function") {
                e[i](...arguments);
              }
            };
          }
        });
        return n;
      };
      this.getPopupId = () => this.state.id;
      this.state = {
        visible: false,
        transitionState: "",
        triggerEventSet: {},
        portalEventSet: {},
        containerStyle: {},
        isInsert: false,
        placement: e.position || "top",
        transitionStyle: {},
        isPositionUpdated: false,
        id: e.wrapperId,
        displayNone: false
      };
      this.foundation = new C(this.adapter);
      this.eventManager = new eventEmitterClass_1.EventEmitter();
      this.triggerEl = reactCoreLibraryReexport.createRef();
      this.containerEl = reactCoreLibraryReexport.createRef();
      this.initialFocusRef = reactCoreLibraryReexport.createRef();
      this.clickOutsideHandler = null;
      this.resizeHandler = null;
      this.isWrapped = false;
      this.containerPosition = undefined;
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        on: function () {
          return e.eventManager.on(...arguments);
        },
        off: function () {
          return e.eventManager.off(...arguments);
        },
        insertPortal: (e, t) => {
          var {
            position: n
          } = t;
          var i = B(t, ["position"]);
          this.setState({
            isInsert: true,
            transitionState: "enter",
            containerStyle: Object.assign(Object.assign({}, this.state.containerStyle), i)
          }, () => {
            setTimeout(() => {
              this.eventManager.emit("portalInserted");
            }, 0);
          });
        },
        removePortal: () => {
          this.setState({
            isInsert: false,
            isPositionUpdated: false
          });
        },
        getEventName: () => ({
          mouseEnter: "onMouseEnter",
          mouseLeave: "onMouseLeave",
          mouseOut: "onMouseOut",
          mouseOver: "onMouseOver",
          click: "onClick",
          focus: "onFocus",
          blur: "onBlur",
          keydown: "onKeyDown",
          contextMenu: "onContextMenu"
        }),
        registerTriggerEvent: e => {
          this.setState({
            triggerEventSet: e
          });
        },
        registerPortalEvent: e => {
          this.setState({
            portalEventSet: e
          });
        },
        getTriggerBounding: () => {
          let e = this.adapter.getTriggerNode();
          this.triggerEl.current = e;
          return e && e.getBoundingClientRect();
        },
        getPopupContainerRect: () => {
          let e = this.getPopupContainer();
          let t = null;
          if (e && isHtmlElementCheck.isHtmlElement(e)) {
            t = Object.assign(Object.assign({}, domNodeHelpers.extractBounds(e.getBoundingClientRect())), {
              scrollLeft: e.scrollLeft,
              scrollTop: e.scrollTop
            });
          }
          return t;
        },
        containerIsBody: () => this.getPopupContainer() === document.body,
        containerIsRelative: () => {
          let e = this.getPopupContainer();
          return window.getComputedStyle(e).getPropertyValue("position") === "relative";
        },
        containerIsRelativeOrAbsolute: () => ["relative", "absolute"].includes(this.containerPosition),
        getWrapperBounding: () => {
          let e = this.containerEl && this.containerEl.current;
          return e && e.getBoundingClientRect();
        },
        getDocumentElementBounding: () => document.documentElement.getBoundingClientRect(),
        setPosition: e => {
          var {
            position: t
          } = e;
          var n = B(e, ["position"]);
          this.setState({
            containerStyle: Object.assign(Object.assign({}, this.state.containerStyle), n),
            placement: t,
            isPositionUpdated: true
          }, () => {
            this.eventManager.emit("positionUpdated");
          });
        },
        setDisplayNone: (e, t) => {
          this.setState({
            displayNone: e
          }, t);
        },
        updatePlacementAttr: e => {
          this.setState({
            placement: e
          });
        },
        togglePortalVisible: (e, t) => {
          let n = {
            transitionState: e ? "enter" : "leave",
            visible: e
          };
          if (this.mounted) {
            this.setState(n, () => {
              t();
            });
          }
        },
        registerClickOutsideHandler: e => {
          if (this.clickOutsideHandler) {
            this.adapter.unregisterClickOutsideHandler();
          }
          this.clickOutsideHandler = t => {
            if (!this.mounted) {
              return false;
            }
            let n = this.triggerEl && this.triggerEl.current;
            let i = this.containerEl && this.containerEl.current;
            n = reactDomEntryWrapper.findDOMNode(n);
            i = reactDomEntryWrapper.findDOMNode(i);
            if (n && !n.contains(t.target) && i && !i.contains(t.target) || this.props.clickTriggerToHide && n && n.contains(t.target)) {
              this.props.onClickOutSide(t);
              e();
            }
          };
          window.addEventListener("mousedown", this.clickOutsideHandler);
        },
        unregisterClickOutsideHandler: () => {
          if (this.clickOutsideHandler) {
            window.removeEventListener("mousedown", this.clickOutsideHandler);
            this.clickOutsideHandler = null;
          }
        },
        registerResizeHandler: e => {
          if (this.resizeHandler) {
            this.adapter.unregisterResizeHandler();
          }
          this.resizeHandler = debounceUtilWrapper.createDebounce(t => {
            if (!this.mounted) {
              return false;
            }
            e(t);
          }, 10);
          window.addEventListener("resize", this.resizeHandler, false);
        },
        unregisterResizeHandler: () => {
          if (this.resizeHandler) {
            window.removeEventListener("resize", this.resizeHandler, false);
            this.resizeHandler = null;
          }
        },
        notifyVisibleChange: e => {
          this.props.onVisibleChange(e);
        },
        registerScrollHandler: e => {
          if (this.scrollHandler) {
            this.adapter.unregisterScrollHandler();
          }
          this.scrollHandler = debounceUtilWrapper.createDebounce(t => {
            if (!this.mounted) {
              return false;
            }
            let n = this.adapter.getTriggerNode();
            if (t.target.contains(n)) {
              e({
                x: t.target.scrollLeft,
                y: t.target.scrollTop
              });
            }
          }, 10);
          window.addEventListener("scroll", this.scrollHandler, true);
        },
        unregisterScrollHandler: () => {
          if (this.scrollHandler) {
            window.removeEventListener("scroll", this.scrollHandler, true);
            this.scrollHandler = null;
          }
        },
        canMotion: () => !!this.props.motion,
        updateContainerPosition: () => {
          let e = this.getPopupContainer();
          if (e && isHtmlElementCheck.isHtmlElement(e)) {
            let t = window.getComputedStyle(e).getPropertyValue("position");
            this.containerPosition = t;
          }
        },
        getContainerPosition: () => this.containerPosition,
        getContainer: () => this.containerEl && this.containerEl.current,
        getTriggerNode: () => {
          let e = this.triggerEl.current;
          if (!isHtmlElementCheck.isHtmlElement(this.triggerEl.current)) {
            e = reactDomEntryWrapper.findDOMNode(this.triggerEl.current);
          }
          return e;
        },
        getFocusableElements: e => commonFrontendUtils.getFocusableEls(e),
        getActiveElement: () => commonFrontendUtils.getActiveElement(),
        setInitialFocus: () => {
          let {
            preventScroll: e
          } = this.props;
          let t = objectPathGetDefault.getObjectPathDefault(this, "initialFocusRef.current");
          if (t && "focus" in t) {
            t.focus({
              preventScroll: e
            });
          }
        },
        notifyEscKeydown: e => {
          this.props.onEscKeyDown(e);
        },
        setId: () => {
          this.setState({
            id: uniqueIdUtils.generateRandomId()
          });
        }
      });
    }
    componentDidMount() {
      this.mounted = true;
      this.getPopupContainer = this.props.getPopupContainer || this.context.getPopupContainer || z;
      this.foundation.init();
    }
    componentWillUnmount() {
      this.mounted = false;
      this.foundation.destroy();
    }
    focusTrigger() {
      this.foundation.focusTrigger();
    }
    rePosition() {
      return this.foundation.calcPosition();
    }
    componentDidUpdate(e, t) {
      pageNoopHandler.noopHandler(this.props.mouseLeaveDelay < this.props.mouseEnterDelay, "[Semi Tooltip] 'mouseLeaveDelay' cannot be less than 'mouseEnterDelay', which may cause the dropdown layer to not be hidden.");
      if (e.visible !== this.props.visible) {
        if (["hover", "focus"].includes(this.props.trigger)) {
          if (this.props.visible) {
            this.foundation.delayShow();
          } else {
            this.foundation.delayHide();
          }
        } else if (this.props.visible) {
          this.foundation.show();
        } else {
          this.foundation.hide();
        }
      }
      if (!deepEqualUtil_1.deepEqual(e.rePosKey, this.props.rePosKey)) {
        this.rePosition();
      }
    }
    render() {
      let {
        isInsert: e,
        triggerEventSet: t,
        visible: n,
        id: i
      } = this.state;
      let {
        wrapWhenSpecial: r,
        role: o,
        trigger: s
      } = this.props;
      let {
        children: l
      } = this.props;
      let c = Object.assign({}, objectPathGetDefault.getObjectPathDefault(l, "props.style"));
      let d = {};
      if (r) {
        let e = this.isSpecial(l);
        if (e) {
          c.pointerEvents = "none";
          if (e === tooltipConstants.tooltipOptions.STATUS_DISABLED) {
            d.cursor = "not-allowed";
          }
          l = reactCoreLibraryReexport.cloneElement(l, {
            style: c
          });
          if (s !== "custom") {
            l = this.wrapSpan(l);
          }
          this.isWrapped = true;
        } else if (!reactCoreLibraryReexport.isValidElement(l)) {
          l = this.wrapSpan(l);
          this.isWrapped = true;
        }
      }
      let h = {};
      if (o === "dialog") {
        h["aria-expanded"] = n ? "true" : "false";
        h["aria-haspopup"] = "dialog";
        h["aria-controls"] = i;
      } else {
        h["aria-describedby"] = i;
      }
      let p = reactCoreLibraryReexport.cloneElement(l, Object.assign(Object.assign(Object.assign(Object.assign({}, h), l.props), this.mergeEvents(l.props, t)), {
        style: Object.assign(Object.assign({}, objectPathGetDefault.getObjectPathDefault(l, "props.style")), d),
        className: m(objectPathGetDefault.getObjectPathDefault(l, "props.className")),
        ref: e => {
          this.triggerEl.current = e;
          let {
            ref: t
          } = l;
          if (typeof t == "function") {
            t(e);
          } else if (t && typeof t == "object") {
            t.current = e;
          }
        },
        tabIndex: l.props.tabIndex || 0,
        "data-popupid": i
      }));
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e ? this.renderPortal() : null, p);
    }
  }
  W.contextType = createContextProvider.context;
  W.propTypes = {
    children: g.node,
    motion: g.bool,
    autoAdjustOverflow: g.bool,
    position: g.oneOf(F),
    getPopupContainer: g.func,
    mouseEnterDelay: g.number,
    mouseLeaveDelay: g.number,
    trigger: g.oneOf(H).isRequired,
    className: g.string,
    wrapperClassName: g.string,
    clickToHide: g.bool,
    clickTriggerToHide: g.bool,
    visible: g.bool,
    style: g.object,
    content: g.oneOfType([g.node, g.func]),
    prefixCls: g.string,
    onVisibleChange: g.func,
    onClickOutSide: g.func,
    spacing: g.oneOfType([g.number, g.object]),
    margin: g.oneOfType([g.number, g.object]),
    showArrow: g.oneOfType([g.bool, g.node]),
    zIndex: g.number,
    rePosKey: g.oneOfType([g.string, g.number]),
    arrowBounding: A,
    transformFromCenter: g.bool,
    arrowPointAtCenter: g.bool,
    stopPropagation: g.bool,
    role: g.string,
    wrapWhenSpecial: g.bool,
    guardFocus: g.bool,
    returnFocusOnClose: g.bool,
    preventScroll: g.bool,
    keepDOM: g.bool
  };
  W.__SemiComponentName__ = "Tooltip";
  W.defaultProps = commonFrontendUtils.configProxyHandler(W.__SemiComponentName__, {
    arrowBounding: tooltipConstants.tooltipConfig.ARROW_BOUNDING,
    autoAdjustOverflow: true,
    arrowPointAtCenter: true,
    trigger: "hover",
    transformFromCenter: true,
    position: "top",
    prefixCls: $,
    role: "tooltip",
    mouseEnterDelay: tooltipConstants.tooltipConfig.MOUSE_ENTER_DELAY,
    mouseLeaveDelay: tooltipConstants.tooltipConfig.MOUSE_LEAVE_DELAY,
    motion: true,
    onVisibleChange: emptyExportFunction.emptyFunction,
    onClickOutSide: emptyExportFunction.emptyFunction,
    spacing: tooltipConstants.tooltipConfig.SPACING,
    margin: tooltipConstants.tooltipConfig.MARGIN,
    showArrow: true,
    wrapWhenSpecial: true,
    zIndex: tooltipConstants.tooltipConfig.DEFAULT_Z_INDEX,
    closeOnEsc: false,
    guardFocus: false,
    returnFocusOnClose: false,
    onEscKeyDown: emptyExportFunction.emptyFunction,
    disableFocusListener: false,
    disableArrowKeyDown: false,
    keepDOM: false
  });
  require.d(exports, {
    TooltipComponent: function () {
      return W;
    }
  });
}