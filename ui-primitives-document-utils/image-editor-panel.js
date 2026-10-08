// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'ImageEditorPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 500691
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var imageThinkingComponent = require("image-thinking-component") /*id: 602617*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactUseEventListener = require("react-use-event-listener") /*id: 55281*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var arrowRightIconSvg = require("arrow-right-icon-svg") /*id: 623696*/;
  var arrowLeftRtlIcon = require("arrow-left-rtl-icon") /*id: 232297*/;
  var rtlInfoOutlinedIcon = require("rtl-info-outlined-icon") /*id: 918336*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var B = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12.5 1c-.69 0-1.25.56-1.25 1.25v19.5a1.25 1.25 0 1 0 2.5 0V2.25c0-.69-.56-1.25-1.25-1.25M4 4h6v15H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m16 15h-5v-2h5V6h-5V4h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2",
      clipRule: "evenodd"
    })
  }), {}));
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  let D = e => {
    let {
      onCancel: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e.key === "Escape" && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          if (t != null) {
            t();
          }
        }
      };
      document.addEventListener("keyup", e, true);
      return () => document.removeEventListener("keyup", e, true);
    }, []);
  };
  let z = e => {
    let {
      onCancel: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e.key === "z" && !!e.metaKey && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          if (t != null) {
            t();
          }
        }
      };
      document.addEventListener("keydown", e, true);
      return () => document.removeEventListener("keydown", e, true);
    }, []);
  };
  let H = e => {
    let {
      onCancel: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e.key === "z" && e.metaKey && e.shiftKey && !e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          if (t != null) {
            t();
          }
        }
      };
      document.addEventListener("keydown", e, true);
      return () => document.removeEventListener("keydown", e, true);
    }, []);
  };
  let L = e => {
    let {
      imgContainerWidth: t,
      imgContainerHeight: i,
      width: n,
      height: r
    } = e;
    let [a, l] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (t && i) {
        let e = window.innerWidth;
        let a = t - 80;
        let o = i - (e >= 400 && e <= 800 ? 198 : 120) - 80;
        let s = n;
        let c = r;
        let d = n / r;
        if (n > a || r > o) {
          if (n / a > r / o) {
            c = (s = a) / d;
          } else {
            s = (c = o) * d;
          }
        }
        l({
          width: s = Math.floor(s),
          height: c = Math.floor(c)
        });
      }
    }, [t, i, n, r]);
    return a;
  };
  var imageEditConstants = require("image-edit-constants") /*id: 18810*/;
  let O = () => Math.min(Math.max(document.body.clientWidth * 0.02, 20), 100);
  let A = function (e, t = 0, i = 0) {
    let {
      clientWidth: n,
      clientHeight: r
    } = e || {};
    if (n && r) {
      let e = O();
      return {
        width: n - e * 2,
        height: r - t - i - e * 2
      };
    }
  };
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var canvasDocPanelIcon = require("canvas-doc-panel-icon") /*id: 850372*/;
  var frameBorderIcon = require("frame-border-icon") /*id: 362911*/;
  var docPanelOutlinedIcon = require("doc-panel-outlined-icon") /*id: 941841*/;
  var docPanelRtlIcon = require("doc-panel-rtl-icon") /*id: 180128*/;
  var q = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M16.188 20.988v-18H7.813v18zm2-18a2 2 0 0 0-2-2H7.813a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h8.375a2 2 0 0 0 2-2z",
      clipRule: "evenodd"
    })
  }), {}));
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var konvaShapesFiltersExport = require("konva-shapes-filters-export") /*id: 738534*/;
  var ee = konvaShapesFiltersExport;
  let et = e => {
    let {
      imgList: t,
      onLoad: i
    } = e;
    return t.map((e, t) => {
      if (!e) {
        return null;
      }
      let n = new Image();
      n.src = xssContentSanitizer.sanitizeUrl(e, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrN%1X%khiSE5qZ$RsellqSkdhMHh--khS-W$%RnpZ$mhPT%$4d$$ucFpXRXB1WkZoTlBRPT0"
      });
      n.onload = () => {
        i(n, t);
      };
      return n;
    });
  };
  function ei(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class en {
    static instantiate(e, t) {
      if (typeof e == "number") {
        if (typeof t == "number") {
          return new en(e, t);
        } else {
          return new en(e, e);
        }
      } else if (e instanceof en) {
        return e.clone();
      } else {
        return new en(e[0], e[1]);
      }
    }
    value() {
      return [this.x, this.y];
    }
    add(e, t) {
      let i = en.instantiate(e, t);
      return new en(this.x + i.x, this.y + i.y);
    }
    multiply(e, t) {
      let i = en.instantiate(e, t);
      return new en(this.x * i.x, this.y * i.y);
    }
    subtract(e, t) {
      let i = en.instantiate(e, t);
      return new en(this.x - i.x, this.y - i.y);
    }
    divide(e, t) {
      let i = en.instantiate(e, t);
      return new en(this.x / i.x, this.y / i.y);
    }
    addEquals(e) {
      this.x += e.x;
      this.y += e.y;
      return this;
    }
    assign(e, t) {
      if (typeof e == "number") {
        this.x = e;
        this.y = t;
      } else {
        this.x = e.x;
        this.y = e.y;
      }
      return this;
    }
    equals(e) {
      return this === e || this.x === e.x && this.y === e.y;
    }
    lerp(e, t = 0.5) {
      if (t > 1 || t < 0) {
        throw TypeError("Param 'Time' must between 0 and 1;");
      }
      t = Math.max(Math.min(1, t), 0);
      return new en(this.x + (e.x - this.x) * t, this.y + (e.y - this.y) * t);
    }
    midPointFrom(e) {
      return this.lerp(e);
    }
    getDistance(e) {
      let t = this.x - e.x;
      let i = this.y - e.y;
      return Math.sqrt(t * t + i * i);
    }
    nearby(e, t = 4) {
      return this.getDistance(e) < t;
    }
    negate() {
      return new en(-this.x, -this.y);
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get angle() {
      if (this.length) {
        return Math.atan2(this.y, this.x);
      } else {
        return 0;
      }
    }
    rotate(e, t) {
      if (e === 0) {
        return this.clone();
      }
      e = e * Math.PI / 180;
      let i = t ? this.subtract(t.x, t.y) : this;
      let n = Math.sin(e);
      let r = Math.cos(e);
      i = new en(i.x * r - i.y * n, i.x * n + i.y * r);
      if (t) {
        return i.add(t);
      } else {
        return i;
      }
    }
    normalize(e = 1) {
      let t = this.length;
      let i = t !== 0 ? e / t : 0;
      return new en(this.x * i, this.y * i);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    clone() {
      return new en(this.x, this.y);
    }
    toJSON(e = 2) {
      if (e === -1) {
        return [this.x, this.y];
      }
      let t = Math.pow(10, e);
      return [Math.round(this.x * t) / t, Math.round(this.y * t) / t];
    }
    toString() {
      let {
        x: e,
        y: t
      } = this;
      return JSON.stringify({
        x: e,
        y: t
      });
    }
    constructor(e = 0, t = 0) {
      ei(this, "x", 0);
      ei(this, "y", 0);
      this.x = e;
      this.y = t;
    }
  }
  function er(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class ea {
    static instantiate(e, t, i, n) {
      if (e === undefined) {
        throw TypeError("Invalid arguments!");
      }
      return new ea(e, t, i, n);
    }
    static instantiateFromPoint(e, t) {
      let i = Math.min(t.x, e.x);
      let n = Math.min(t.y, e.y);
      return new ea(i, n, Math.abs(t.x - e.x), Math.abs(t.y - e.y));
    }
    assign(e, t, i, n) {
      this.x = e;
      this.y = t;
      this.width = i;
      this.height = n;
    }
    get top() {
      return this.y;
    }
    set top(e) {
      this.y = e;
    }
    get left() {
      return this.x;
    }
    set left(e) {
      this.x = e;
    }
    get bottom() {
      return this.y + this.height;
    }
    set bottom(e) {
      this.y = e - this.height;
    }
    get right() {
      return this.x + this.width;
    }
    set right(e) {
      this.x = e - this.width;
    }
    get centerX() {
      return this.x + this.width / 2;
    }
    set centerX(e) {
      this.x = e - this.width / 2;
    }
    get centerY() {
      return this.y + this.height / 2;
    }
    set centerY(e) {
      this.y = e - this.height / 2;
    }
    setCenter(e, t) {
      this.center = en.instantiate(e, t);
      return this;
    }
    get topLeft() {
      return new en(this.left, this.top);
    }
    get topCenter() {
      return new en(this.centerX, this.top);
    }
    get topRight() {
      return new en(this.right, this.top);
    }
    get rightCenter() {
      return new en(this.right, this.centerY);
    }
    get bottomRight() {
      return new en(this.right, this.bottom);
    }
    get bottomCenter() {
      return new en(this.centerX, this.bottom);
    }
    get bottomLeft() {
      return new en(this.left, this.bottom);
    }
    get leftCenter() {
      return new en(this.left, this.centerY);
    }
    get area() {
      return this.width * this.height;
    }
    unite(e) {
      let t = Math.min(this.x, e.x);
      let i = Math.min(this.y, e.y);
      return new ea(t, i, Math.max(this.x + this.width, e.x + e.width) - t, Math.max(this.y + this.height, e.y + e.height) - i);
    }
    intersect(e) {
      let t = Math.max(this.x, e.x);
      let i = Math.min(this.x + this.width, e.x + e.width);
      let n = Math.max(this.y, e.y);
      let r = Math.min(this.y + this.height, e.y + e.height);
      if (i >= t && r >= n) {
        return new ea(t, n, i - t, r - n);
      } else {
        return null;
      }
    }
    contains(e, t) {
      return e >= this.x && t >= this.y && e <= this.x + this.width && t <= this.y + this.height;
    }
    containsPoint(e) {
      let {
        x: t
      } = e;
      let {
        y: i
      } = e;
      return this.contains(t, i);
    }
    containsRect(e) {
      let {
        x: t
      } = e;
      let {
        y: i
      } = e;
      return t >= this.x && i >= this.y && t + e.width <= this.x + this.width && i + e.height <= this.y + this.height;
    }
    clone() {
      return new ea(this.x, this.y, this.width, this.height);
    }
    equals(e) {
      return this === e || this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height;
    }
    expand(e, t = e) {
      return new ea(this.x - e / 2, this.y - t / 2, this.width + e, this.height + t);
    }
    toJSON() {
      return [this.x, this.y, this.width, this.height];
    }
    toString() {
      let {
        x: e,
        y: t,
        width: i,
        height: n
      } = this;
      return JSON.stringify({
        x: e,
        y: t,
        width: i,
        height: n
      });
    }
    constructor(e, t, i, n) {
      er(this, "x", 0);
      er(this, "y", 0);
      er(this, "width", 0);
      er(this, "height", 0);
      er(this, "center", undefined);
      this.x = e;
      this.y = t;
      this.width = i;
      this.height = n;
      this.center = en.instantiate(this.centerX, this.centerY);
    }
  }
  function eo(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  (n = {}).topLeft = "topLeft";
  n.topCenter = "topCenter";
  n.topRight = "topRight";
  n.rightCenter = "rightCenter";
  n.bottomRight = "bottomRight";
  n.bottomCenter = "bottomCenter";
  n.bottomLeft = "bottomLeft";
  n.leftCenter = "leftCenter";
  let el = n;
  let es = [el.rightCenter, el.bottomRight, el.bottomCenter, el.bottomLeft, el.leftCenter, el.topLeft, el.topCenter, el.topRight];
  let ec = {
    rightCenter: "ew-resize",
    bottomRight: "nwse-resize",
    bottomCenter: "ns-resize",
    bottomLeft: "nesw-resize",
    leftCenter: "ew-resize",
    topLeft: "nwse-resize",
    topCenter: "ns-resize",
    topRight: "nesw-resize"
  };
  let ed = [el.topLeft, el.topRight, el.bottomRight, el.bottomLeft];
  let eu = [el.topCenter, el.rightCenter, el.bottomCenter, el.leftCenter];
  let eh = "rgba(194, 194, 194, 1)";
  let em = "rgba(253, 253, 253, 1)";
  let eg = "rgba(0,0,0,0)";
  let ep = e => [el.rightCenter, el.bottomRight, el.topRight].includes(e);
  let ef = e => [el.bottomRight, el.bottomCenter, el.bottomLeft].includes(e);
  let ew = e => [el.topCenter, el.topLeft, el.topRight].includes(e);
  let ev = e => [el.leftCenter, el.topLeft, el.bottomLeft].includes(e);
  class e_ {
    get showBounds() {
      return this._showBounds;
    }
    get bounds() {
      return this._bounds;
    }
    updateAnchors() {
      es.forEach(e => {
        let t = this.anchors[e];
        let {
          width: i,
          height: n
        } = this.showBounds;
        let {
          x: r,
          y: a
        } = this._showBounds[e];
        t.y(a);
        t.x(r);
        let o = eu.indexOf(e);
        if (o !== -1) {
          let r = o % 2 == 0;
          let a = ep(e) || ef(e) ? 5 : 0;
          t.children[0].width(r ? i - 20 : 5);
          t.children[0].height(r ? 5 : n - 20);
          t.children[0].x(r ? 10 - i / 2 : -a);
          t.children[0].y(r ? -a : 10 - n / 2);
        }
      });
    }
    updateShowBounds(e) {
      let i = e.x();
      let n = e.y();
      let r = e.getName();
      let a = this._showBounds.clone();
      if (ep(r)) {
        a.width = i - this._showBounds.x;
      } else if (ev(r)) {
        a.width += this._showBounds.x - i;
        a.x = i;
      }
      if (ef(r)) {
        a.height = n - this._showBounds.y;
      } else if (ew(r)) {
        a.height += this._showBounds.y - n;
        a.y = n;
      }
      let o = new ea(this.image.getClientRect().x - 5, this.image.getClientRect().y - 5, this.image.getClientRect().width + 10, this.image.getClientRect().height + 10);
      let l = a.unite(o);
      let s = new ea(this.x, this.y, this.width, this.height);
      this._showBounds = s.intersect(l) ?? s;
      this.onDrag(a.x, a.y, a.width, a.height);
    }
    update(e) {
      this.updateShowBounds(e);
      this.updateAnchors();
      this.updateOutArea();
    }
    updateOutArea() {
      let e = this.outPaintingGroup.findOne(".out-painting-rect");
      let t = this._showBounds.expand(-10);
      this._bounds = t;
      e.x(t.x);
      e.y(t.y);
      e.width(t.width);
      e.height(t.height);
    }
    addAnchor(e, t, i) {
      let {
        x: n,
        y: r
      } = t[i];
      let a = new ee.Group({
        x: n,
        y: r,
        name: i,
        draggable: true
      });
      if (ed.indexOf(i) !== -1) {
        let e = ep(i);
        let t = ef(i);
        let n = new ee.Rect({
          x: e ? -10 : 0,
          y: t ? -10 : 0,
          width: 10,
          height: 10,
          stroke: eh,
          fill: em,
          name: "vRect",
          strokeWidth: 1
        });
        let r = new ee.Rect({
          x: e ? -10 : 0,
          y: t ? -10 : 0,
          width: 10,
          height: 10,
          stroke: eh,
          fill: em,
          name: "hRect",
          strokeWidth: 1
        });
        a.add(n);
        a.add(r);
      } else {
        let e = eu.indexOf(i);
        if (e !== -1) {
          let t = e % 2 == 0;
          let n = ep(i) || ef(i) ? 5 : 0;
          let {
            width: r,
            height: o
          } = this.showBounds;
          let l = new ee.Rect({
            x: t ? 10 - r / 2 : -n,
            y: t ? -n : 10 - o / 2,
            width: t ? r - 20 : 5,
            height: t ? 5 : o - 20,
            stroke: eg,
            fill: eg,
            strokeWidth: 1
          });
          a.add(l);
        }
      }
      a.on("dragmove", () => {
        this.update(a);
      });
      a.on("mousedown touchstart", function () {
        this.moveToTop();
      });
      a.on("mouseover", function () {
        let e = this.getName();
        document.body.style.cursor = ec[e];
        this.children.forEach(e => e.strokeWidth(2));
      });
      a.on("mouseout", function () {
        document.body.style.cursor = "default";
        this.children.forEach(e => e.strokeWidth(1));
      });
      e.add(a);
      this.anchors[i] = a;
    }
    constructor(e, t, i, n, r, a, o, l) {
      this._bounds = e;
      this.outPaintingGroup = t;
      this.image = i;
      this.x = n;
      this.y = r;
      this.width = a;
      this.height = o;
      this.onDrag = l;
      eo(this, "_showBounds", undefined);
      eo(this, "anchors", {});
      let s = this._bounds.expand(10);
      this._showBounds = s;
      es.forEach(e => this.addAnchor(t, s, e));
    }
  }
  let eb = e => {
    let t;
    let i;
    let {
      url: n,
      thumbImageUrl: r,
      id: a = "container",
      ratio: o,
      img: l,
      rectCoordinate: s,
      canvasCon: c,
      onDrag: d,
      initalImage: u,
      showAnimation: h
    } = e;
    let m = new ee.Stage({
      container: a,
      width: c.width,
      height: c.height
    });
    let g = new ee.Layer();
    m.add(g);
    let p = new ee.Group({
      draggable: false
    });
    let f = l.width;
    let w = l.height;
    let v = new ea(s.x - 0, s.y - 0, o.width + 0, o.height + 0);
    let _ = new ee.Group({
      draggable: false
    });
    let b = new ee.Rect({
      x: v.x,
      y: v.y,
      width: v.width,
      height: v.height,
      strokeWidth: 1,
      name: "out-painting-rect",
      stroke: "rgba(194, 194, 194, 0.50)",
      fillEnabled: true,
      fill: "rgba(182, 182, 182, 0.15)"
    });
    _.add(b);
    let y = e => {
      let n;
      let r;
      if (t) {
        return t;
      }
      t = new ee.Image({
        image: e,
        x: m.width() / 2,
        y: m.height() / 2,
        offsetX: f / 2,
        offsetY: w / 2,
        width: f,
        height: w,
        scaleX: h ? u.width / f : 1,
        scaleY: h ? u.height / w : 1,
        draggable: true
      });
      g.add(t);
      g.add(p);
      g.add(_);
      i = new e_(v, _, t, 0, 0, c.width, c.height, d);
      let a = t.x();
      let o = t.y();
      t.on("dragmove", () => {
        let e = t.getClientRect();
        let l = i.bounds;
        if (!n && !r) {
          n = e.x;
          r = e.y;
        }
        if (e.x < l.x + 0 && n) {
          let e = Math.max(0, n - l.x - 0);
          t.x(a - e);
        }
        if (e.y < l.y + 0 && r) {
          let e = Math.max(0, r - l.y - 0);
          t.y(o - e);
        }
        if (e.x + f > l.x + l.width - 0 && n) {
          let e = Math.max(0, l.x + l.width - f - n - 0);
          t.x(a + e);
        }
        if (e.y + e.height > l.y + l.height - 0 && r) {
          let e = Math.max(0, l.y + l.height - w - r - 0);
          t.y(o + e);
        }
      });
      return l;
    };
    let x = false;
    et({
      imgList: [n, r],
      onLoad: (e, i) => {
        if (i === 0) {
          if (t) {
            t.image(e);
          } else {
            y(e);
          }
        } else if (!t) {
          y(e);
        }
        if (!x) {
          let e = new ee.Tween({
            node: t,
            duration: 0.3,
            easing: ee.Easings.EaseInOut,
            scaleX: 1,
            scaleY: 1
          });
          if (h) {
            e.play();
          }
        }
        x = true;
      }
    });
    return {
      getImageBounds: () => t == null ? undefined : t.getClientRect(),
      getOutPaintingBounds: () => i == null ? undefined : i.bounds
    };
  };
  var ey = {
    container: "container-ZPgle5",
    left: "left-JrBHlU",
    right: "right-bN9hzk",
    center: "center-BelfK1",
    divider: "divider-YrNycU"
  };
  let ex = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      left: i,
      center: n,
      right: r,
      leftClassName: a,
      rightClassName: o,
      style: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: h(ey.container),
      style: l,
      children: [(!!i || !!r) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(ey.left, a),
        children: i || reactJsxRuntimeCoreReexport.jsx("div", {})
      }), !!n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: ey.center,
        children: n
      }), (!!i || !!r) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(ey.right, o),
        children: r || reactJsxRuntimeCoreReexport.jsx("div", {})
      })]
    });
  });
  let ek = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: ey.divider
  });
  var e$ = {
    "btn-wrapper": "btn-wrapper-aU1KfF",
    "label-hidden": "label-hidden-Sg2IDI",
    "tools-desc": "tools-desc-pRm3Pi",
    disabled: "disabled-PaL0wU",
    tooltip: "tooltip-Hhtaiw",
    hover: "hover-EC64Qy",
    btn: "btn-NsW3dW"
  };
  var eR = {
    editor: "editor-GUl7aS",
    "cancel-disabled": "cancel-disabled-IRaIWa",
    cancelDisabled: "cancel-disabled-IRaIWa",
    "left-btn": "left-btn-A9EXiT",
    leftBtn: "left-btn-A9EXiT",
    cancel: "cancel-AQyXW8",
    img: "img-xTHleN",
    controls: "controls-gqQj2c",
    "control-btns": "control-btns-_M1HaE",
    controlBtns: "control-btns-_M1HaE",
    slider: "slider-PumYJR",
    content: "content-yvsP7z",
    "has-footer": "has-footer-qJQsme",
    hasFooter: "has-footer-qJQsme",
    footer: "footer-OUqseS",
    "thumb-list": "thumb-list-c5HFdj",
    thumbList: "thumb-list-c5HFdj",
    "thumb-image": "thumb-image-YkW4jn",
    thumbImage: "thumb-image-YkW4jn",
    active: "active-znNWjg",
    "thumb-container": "thumb-container-Kmx8sK",
    thumbContainer: "thumb-container-Kmx8sK",
    generate: "generate-GGrgvd",
    disabled: "disabled-tBBhTC",
    "slider-wrapper": "slider-wrapper-QRSKS3",
    sliderWrapper: "slider-wrapper-QRSKS3",
    "slider-wrapper-v2": "slider-wrapper-v2-ogR5Wx",
    sliderWrapperV2: "slider-wrapper-v2-ogR5Wx",
    ongoing: "ongoing-ticN9D",
    clear: "clear-PPR898",
    hover: "hover-zqaPPa",
    btn: "btn-oZPOP1",
    rotate: "rotate-jfT2hL",
    rotating: "rotating-zzZHVK",
    "img-preview-container": "img-preview-container-aIXnUl",
    imgPreviewContainer: "img-preview-container-aIXnUl",
    "img-compare": "img-compare-hfHRKI",
    imgCompare: "img-compare-hfHRKI",
    "img-compare-active": "img-compare-active-lv3wd0",
    imgCompareActive: "img-compare-active-lv3wd0",
    "img-normal-preview": "img-normal-preview-HfVaCE",
    imgNormalPreview: "img-normal-preview-HfVaCE",
    "description-input-dropdown": "description-input-dropdown-V5LrF6",
    descriptionInputDropdown: "description-input-dropdown-V5LrF6",
    "image-thinking-wrapper": "image-thinking-wrapper-f19tBX",
    imageThinkingWrapper: "image-thinking-wrapper-f19tBX",
    "small-screen-input": "small-screen-input-vqUfrt",
    smallScreenInput: "small-screen-input-vqUfrt",
    "image-footer-thinking": "image-footer-thinking-WyPEij",
    imageFooterThinking: "image-footer-thinking-WyPEij",
    "img-canvas-loading": "img-canvas-loading-Bx50LV",
    imgCanvasLoading: "img-canvas-loading-Bx50LV",
    "canvas-loading": "canvas-loading-FFtozC",
    canvasLoading: "canvas-loading-FFtozC",
    "img-normal-preview-animation": "img-normal-preview-animation-rKqA4r",
    imgNormalPreviewAnimation: "img-normal-preview-animation-rKqA4r",
    "img-preview-animation": "img-preview-animation-opDgVU",
    imgPreviewAnimation: "img-preview-animation-opDgVU",
    "preview-img": "preview-img-NSpB7Z",
    previewImg: "preview-img-NSpB7Z",
    "img-bg": "img-bg-LESTN8",
    imgBg: "img-bg-LESTN8",
    "center-content": "center-content-QZkqRx",
    centerContent: "center-content-QZkqRx",
    "icon-wrapper": "icon-wrapper-KupxoX",
    iconWrapper: "icon-wrapper-KupxoX",
    "right-icon": "right-icon-b6Txpw",
    rightIcon: "right-icon-b6Txpw",
    "left-icon": "left-icon-DxN3Cv",
    leftIcon: "left-icon-DxN3Cv",
    "tip-content": "tip-content-pcR6cz",
    tipContent: "tip-content-pcR6cz",
    "tip-text": "tip-text-nOnwXZ",
    tipText: "tip-text-nOnwXZ",
    "error-icon": "error-icon-o0REIy",
    errorIcon: "error-icon-o0REIy"
  };
  let eS = (e, t) => {
    switch (e) {
      case imageEditConstants.aspectRatios["1:1"]:
        return 1;
      case imageEditConstants.aspectRatios["4:3"]:
        return 4 / 3;
      case imageEditConstants.aspectRatios["16:9"]:
        return 16 / 9;
      case imageEditConstants.aspectRatios["9:16"]:
        return 9 / 16;
      default:
        return t;
    }
  };
  let eN = (e, t, i, n, r) => {
    if (t * r <= e) {
      let i = e / r;
      if (i <= n) {
        return {
          imgWidth: e,
          imgHeight: t,
          ratioWidth: e,
          ratioHeight: i
        };
      }
      let a = n / i;
      return {
        imgWidth: e * a,
        imgHeight: t * a,
        ratioWidth: e * a,
        ratioHeight: n
      };
    }
    let a = t * r;
    if (a <= i) {
      return {
        imgWidth: e,
        imgHeight: t,
        ratioWidth: a,
        ratioHeight: t
      };
    }
    let o = i / a;
    return {
      imgWidth: e * o,
      imgHeight: t * o,
      ratioWidth: i,
      ratioHeight: t * o
    };
  };
  let eW = e => {
    let {
      imgSrc: t,
      thumbImageUrl: i,
      width: n,
      height: r,
      containerSize: a,
      onOutPainting: l,
      onCancel: s,
      t: c,
      currentImageSize: d
    } = e;
    let [u, m] = reactCoreLibraryReexport.useState();
    let [g, p] = reactCoreLibraryReexport.useState(true);
    let f = reactCoreLibraryReexport.useRef(null);
    let [v, _] = reactCoreLibraryReexport.useState();
    let [b, y] = reactCoreLibraryReexport.useState();
    let x = reactCoreLibraryReexport.useMemo(() => {
      if (a) {
        return {
          width: a.width,
          height: a.height - 64
        };
      }
    }, [a]);
    let k = reactCoreLibraryReexport.useMemo(() => {
      if (!x) {
        return;
      }
      let {
        width: e,
        height: t
      } = x;
      return {
        width: e - 20,
        height: t - 20
      };
    }, [x]);
    let $ = reactCoreLibraryReexport.useMemo(() => {
      if (!k) {
        return;
      }
      let e = k.width / n;
      let t = k.height / r;
      if (e > t) {
        return {
          width: n * t / 2,
          height: k.height / 2
        };
      } else {
        return {
          width: k.width / 2,
          height: r * e / 2
        };
      }
    }, [k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!u) {
        R(imageEditConstants.aspectRatios.original, true);
      }
    }, [$]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!x || !b || !v) {
        return;
      }
      let {
        width: e,
        height: a
      } = b;
      let o = (x.width - v.width) / 2;
      let l = (x.height - v.height) / 2;
      f.current = eb({
        url: t,
        thumbImageUrl: i,
        id: "out-painting",
        ratio: v,
        img: {
          width: e,
          height: a
        },
        rectCoordinate: {
          x: o,
          y: l
        },
        canvasCon: x,
        onDrag: (t, i, n, r) => {
          p(Math.round(n - 4) <= e + 0 && Math.round(r - 4) <= a + 0);
        },
        currentImageSize: d,
        initalImage: {
          width: n,
          height: r
        },
        showAnimation: v.showAnimation
      });
    }, [v]);
    let R = (e, t) => {
      if (!k || !$) {
        return;
      }
      let {
        width: i,
        height: n
      } = $;
      let {
        imgWidth: r,
        imgHeight: a,
        ratioWidth: o,
        ratioHeight: l
      } = eN(i, n, k.width, k.height, eS(e, i / n));
      y({
        width: r,
        height: a
      });
      _({
        height: l,
        width: o,
        showAnimation: t
      });
      p(n === l && i === o);
      m(e);
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(ex, {
        center: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "out_painting_area_ratio_original",
            className: h(eR.btn, eR.hover),
            onClick: () => R(imageEditConstants.aspectRatios.original, false),
            children: [reactJsxRuntimeCoreReexport.jsx(canvasDocPanelIcon.CanvasDocPanelIcon, {
              className: eR.icon
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: eR.toolsDesc,
              children: c("edit_image_skill_outPainting_orginalAspectRatio")
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "out_painting_area_ratio_1_1",
            className: h(eR.btn, eR.hover),
            onClick: () => R(imageEditConstants.aspectRatios["1:1"], false),
            children: [reactJsxRuntimeCoreReexport.jsx(frameBorderIcon.FrameBorderIcon, {
              className: eR.icon
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: eR.toolsDesc,
              children: "1:1"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "out_painting_area_ratio_4_3",
            className: h(eR.btn, eR.hover),
            onClick: () => R(imageEditConstants.aspectRatios["4:3"], false),
            children: [reactJsxRuntimeCoreReexport.jsx(docPanelOutlinedIcon.DocPanelOutlined, {
              className: eR.icon
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: eR.toolsDesc,
              children: "4:3"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "out_painting_area_ratio_16_9",
            className: h(eR.btn, eR.hover),
            onClick: () => R(imageEditConstants.aspectRatios["16:9"], false),
            children: [reactJsxRuntimeCoreReexport.jsx(docPanelRtlIcon.DocPanelRtlIcon, {
              className: eR.icon
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: eR.toolsDesc,
              children: "16:9"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "out_painting_area_ratio_9_16",
            className: h(eR.btn, eR.hover),
            onClick: () => R(imageEditConstants.aspectRatios["9:16"], false),
            children: [reactJsxRuntimeCoreReexport.jsx(q, {
              className: eR.icon
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: eR.toolsDesc,
              children: "9:16"
            })]
          })]
        }),
        left: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "bg-s-color-bg-body",
          "data-testid": "out_painting_area_cancel",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: s,
            className: h(eR.btn, e$.hover),
            children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: c("edit_image_back_button_tooltip"),
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "flex items-center",
                children: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
                  className: "!text-16"
                })
              })
            })
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(eR.content, eR["has-footer"]),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          id: "out-painting",
          "data-testid": "out-painting"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: eR.footer,
        children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "edit_image_in_painting_btn",
          type: "primary",
          size: "medium",
          disabled: g,
          onClick: () => {
            if (g || f.current === null) {
              return;
            }
            let e = f.current.getOutPaintingBounds();
            let i = f.current.getImageBounds();
            if (e && i) {
              let {
                x: t,
                y: n,
                width: r,
                height: a
              } = e;
              let {
                x: o,
                y: s,
                width: c,
                height: d
              } = i;
              l((s - n) / d, (n + a - s - d) / d, (o - t) / c, (t + r - o - c) / c);
            }
            teaAnalyticsEventTracker.trackEvent("image_edit_confirm", {
              button_type: "outPainting",
              pic_id: t,
              to_scale: u
            });
          },
          children: c("edit_image_skill_outPainting_generate")
        })
      })]
    });
  };
  var contextMenuDropdownHook = require("context-menu-dropdown-hook") /*id: 737677*/;
  var sliderComponentAdapter = require("slider-component-adapter") /*id: 938680*/;
  var imageGuidanceIcon = require("image-guidance-icon") /*id: 626520*/;
  var eT = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
      clipRule: "evenodd"
    })
  }), {}));
  var eZ = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
      clipRule: "evenodd"
    })
  }), {}));
  var returnOutlinedIcon = require("return-outlined-icon") /*id: 672563*/;
  var exitRtlIconComponent = require("exit-rtl-icon-component") /*id: 4976*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function eP(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let eD = {
    maxStack: 300,
    enableKeyboard: true
  };
  class ez {
    get redo() {
      return this._redo;
    }
    get undo() {
      return this._undo;
    }
    calcUndo() {
      let {
        payload: e
      } = this._redo;
      switch (this._redo.type) {
        case "ADD":
          return {
            type: "DELETE",
            payload: {
              items: e.items
            }
          };
        case "DELETE":
          return {
            type: "ADD",
            payload: {
              items: e.items
            }
          };
      }
    }
    constructor(e) {
      eP(this, "type", undefined);
      eP(this, "recordTimeStamp", Date.now());
      eP(this, "_redo", undefined);
      eP(this, "_undo", undefined);
      this.type = e.type;
      this._redo = Object.assign({
        payload: {}
      }, e);
      this._undo = this.calcUndo();
    }
  }
  class eH extends eventEmitterWrapper_1.eventEmitter {
    clear() {
      this.stack = {
        undo: [],
        redo: []
      };
      this.emit("change", {
        stackLength: [0, 0]
      });
    }
    record(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (!e) {
        throw TypeError("Invalid record point.");
      }
      this.stack.redo = [];
      let i = new ez(e);
      this.stack.undo.push(i);
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
      if (t) {
        this.emit("change", {
          type: "record",
          action: i.redo,
          stackLength: [this.stack.redo.length, this.stack.undo.length]
        });
      }
    }
    change(e, t) {
      if (!this.options.enableKeyboard || this.stack[e].length === 0) {
        return;
      }
      let i = this.stack[e].pop();
      if (i[e]) {
        this.lastRecorded = 0;
        this.stack[t].push(i);
        this.emit("change", {
          type: e.toUpperCase(),
          action: i[e],
          stackLength: [this.stack.redo.length, this.stack.undo.length]
        });
      }
    }
    constructor(e = {}) {
      super();
      eP(this, "stack", undefined);
      eP(this, "options", undefined);
      eP(this, "lastRecorded", 0);
      eP(this, "canRedo", () => this.stack.redo.length > 0);
      eP(this, "canUndo", () => this.stack.undo.length > 0);
      eP(this, "redo", () => this.change("redo", "undo"));
      eP(this, "undo", () => this.change("undo", "redo"));
      eP(this, "allClear", () => this.clear());
      this.clear();
      this.options = Object.assign({}, eD, e);
    }
  }
  (r = {}).base64 = "base64";
  r.blob = "blob";
  let eL = r;
  let eI = (e, t, i, n, r, a) => {
    let o;
    let l = new ee.Layer();
    e.add(l);
    let s = t => {
      let s = i.width ?? r.width;
      let c = i.height ?? r.height;
      if (!o) {
        o = new ee.Image({
          image: t,
          x: e.width() / 2,
          y: e.height() / 2,
          offsetX: s / 2,
          offsetY: c / 2,
          width: s,
          height: c,
          scaleX: r.width / s,
          scaleY: r.height / c
        });
        l.add(o);
      }
      return o;
    };
    let c = false;
    et({
      imgList: [t, a],
      onLoad: (e, t) => {
        if (t === 0) {
          if (o) {
            o.image(e);
          } else {
            s(e);
          }
        } else if (!o) {
          s(e);
        }
        if (!c) {
          new ee.Tween({
            node: o,
            duration: 0.3,
            easing: ee.Easings.EaseInOut,
            scaleX: 0.9,
            scaleY: 0.9
          }).play();
        }
        c = true;
      }
    });
  };
  let eO = e => {
    let t;
    let {
      url: i,
      thumbImageUrl: n,
      id: r = "container",
      onRedoUndoChange: o,
      img: l,
      initalImage: s,
      onComplete: c,
      currentImageSize: d
    } = e;
    let u = 65;
    let h = new ee.Stage({
      container: r,
      width: l.width * 0.9,
      height: l.height * 0.9
    });
    h.container().style.cursor = "none";
    let m = new eH();
    eI(h, i, l, d, s, n);
    let g = new ee.Layer({
      name: "mask-layer"
    });
    h.add(g);
    let p = new ee.Layer({
      name: "pointer-layer"
    });
    h.add(p);
    let f = false;
    m.on("change", e => {
      let {
        action: t,
        stackLength: i
      } = e;
      if ((t == null ? undefined : t.type) === "ADD") {
        let {
          items: e
        } = t.payload;
        e.forEach(e => g.add(e));
      } else if ((t == null ? undefined : t.type) === "DELETE") {
        let {
          items: e
        } = t.payload;
        e.forEach(e => e.remove());
      }
      o(i);
    });
    h.on("mousedown touchstart", function (e) {
      f = true;
      let i = h.getPointerPosition();
      t = new ee.Line({
        stroke: "rgba(0, 87, 255, 0.5)",
        strokeWidth: u,
        globalCompositeOperation: "source-over",
        lineCap: "round",
        lineJoin: "round",
        name: Date.now().toString(),
        points: [i.x, i.y, i.x, i.y]
      });
      g.add(t);
      m.record({
        type: "ADD",
        payload: {
          items: [t]
        }
      });
    });
    let w = null;
    let v = null;
    let _ = (e, t, i) => {
      if (w != null) {
        w.remove();
      }
      if (v != null) {
        v.remove();
      }
      w = null;
      v = null;
      w = new ee.Circle({
        radius: e,
        x: t,
        y: i,
        fill: "transparent",
        stroke: "white",
        strokeWidth: 2
      });
      v = new ee.Circle({
        radius: e + 1,
        x: t,
        y: i,
        fill: "rgba(0, 0, 0, 0.08)",
        stroke: "rgba(0, 0, 0, 0.20)",
        strokeWidth: 1,
        shadowColor: "rgba(0, 0, 0, 0.80)",
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowBlur: 8
      });
      p.add(v);
      p.add(w);
    };
    h.on("mouseenter", () => {
      let e = h.getPointerPosition();
      _(u / 2, e.x, e.y);
    });
    h.on("mouseleave", () => {
      if (w != null) {
        w.remove();
      }
      w = null;
      if (v != null) {
        v.remove();
      }
      v = null;
    });
    h.on("mouseup touchend", e => {
      let t = e.evt;
      f = false;
      c({
        pos: [t.clientX, t.clientY]
      });
    });
    h.on("mousemove touchmove", function (e) {
      let i = h.getPointerPosition();
      if (w != null) {
        w.position({
          x: i.x,
          y: i.y
        });
      }
      if (v != null) {
        v.position({
          x: i.x,
          y: i.y
        });
      }
      if (!f) {
        return;
      }
      e.evt.preventDefault();
      let n = t.points().concat([i.x, i.y]);
      t.points(n);
    });
    return {
      drawBackgroundMask: e => {
        if (e) {
          let t = new Image();
          t.onload = function () {
            let e = document.createElement("canvas");
            e.width = l.width * 0.9;
            e.height = l.height * 0.9;
            let i = e.width / t.width;
            let n = t.width * i;
            let r = t.height * i;
            let o = (e.width - n) / 2;
            let s = (e.height - r) / 2;
            let c = e.getContext("2d");
            if (c != null) {
              c.drawImage(t, o, s, n, r);
            }
            let d = c == null ? undefined : c.getImageData(0, 0, e.width, e.height);
            let {
              data: u
            } = d || {
              data: []
            };
            for (let e = 0; e < u.length; e += 4) {
              let t = u[e];
              u[e] = 0;
              u[e + 1] = 87;
              u[e + 2] = 255;
              u[e + 3] = (255 - t) * 0.5;
            }
            if (d) {
              if (c != null) {
                c.putImageData(d, 0, 0);
              }
              let t = e.toDataURL();
              let i = new Image();
              i.src = xssContentSanitizer.sanitizeUrl(t, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*x3WW1re*QxbFhiSFZr%jJ4M$duazFNR015%m5s-%0xWj-"
              });
              let n = new ee.Image({
                x: 0,
                y: 0,
                image: i
              });
              g.add(n);
              g.draw();
            }
          };
          t.src = xssContentSanitizer.sanitizeUrl(e, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*x3WW1re*QxbFhiSFZr%jJ4M$duazFNR015%m5s-%0xWj-"
          });
        }
      },
      getMaskData: function ({
        type: e = eL.base64
      } = {}) {
        let t = g.getNativeCanvasElement();
        let i = document.createElement("canvas");
        i.width = s.width;
        i.height = s.height;
        let n = i.getContext("2d");
        n.drawImage(t, 0, 0, s.width, s.height);
        let {
          data: r
        } = n.getImageData(0, 0, s.width, s.height);
        let a = new Uint8ClampedArray(s.width * s.height * 4);
        for (let e = 0; e < r.length; e += 4) {
          let t = r[e + 3];
          let i = 0;
          let n = 0;
          let o = 0;
          let l = 255;
          if (t !== 0) {
            i = 255;
            n = 255;
            o = 255;
            l = 255;
          }
          a[e] = i;
          a[e + 1] = n;
          a[e + 2] = o;
          a[e + 3] = l;
        }
        let o = new Blob([a], {
          type: "image/png"
        });
        let l = document.createElement("canvas");
        l.width = s.width;
        l.height = s.height;
        let c = l.getContext("2d");
        let d = new ImageData(a, s.width, s.height);
        c.putImageData(d, 0, 0);
        if (e === eL.base64) {
          return l.toDataURL();
        } else {
          return o;
        }
      },
      getNewImageData: e => {
        let t = new Image();
        t.crossOrigin = "Anonymous";
        t.src = xssContentSanitizer.sanitizeUrl(e ?? i, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*x3WW1re*QxbFhiSFZr%jJ4M$duazFNR015%m5s-%0xWj-"
        });
        return new Promise((e, i) => {
          t.onload = function () {
            let i = document.createElement("canvas");
            i.width = t.width;
            i.height = t.height;
            let n = i.getContext("2d");
            n.imageSmoothingEnabled = true;
            if (n != null) {
              n.drawImage(t, 0, 0);
            }
            let r = n == null ? undefined : n.getImageData(0, 0, i.width, i.height);
            let {
              data: a
            } = r || {
              data: []
            };
            let o = g.getNativeCanvasElement();
            let l = document.createElement("canvas");
            l.width = s.width;
            l.height = s.height;
            let c = l.getContext("2d");
            c.drawImage(o, 0, 0, s.width, s.height);
            let {
              data: d
            } = c.getImageData(0, 0, s.width, s.height);
            for (let e = 0; e < d.length; e += 4) {
              let t = d[e + 3];
              a[e + 3] = 255 - t * 2;
            }
            if (r && a.length > 0) {
              let t = i.toDataURL("image/png");
              let n = atob(t.split(",")[1]);
              let r = t.split(",")[0].split(":")[1].split(";")[0];
              let a = new ArrayBuffer(n.length);
              let o = new Uint8Array(a);
              for (let e = 0; e < n.length; e++) {
                o[e] = n.charCodeAt(e);
              }
              e(new Blob([a], {
                type: r
              }));
            }
          };
          t.onerror = e => {
            i(e);
          };
        });
      },
      redo: () => {
        m.redo();
        c();
      },
      undo: () => {
        m.undo();
        c();
      },
      del: () => {
        m.allClear();
        g.removeChildren();
        c();
      },
      setStrokeWidth: e => {
        _(e / 2, l.width / 2, l.height / 2);
        u = e;
      },
      removeCircle: () => {
        if (w != null) {
          w.remove();
        }
        if (v != null) {
          v.remove();
        }
        w = null;
        v = null;
      }
    };
  };
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var skillPinIconComponent = require("skill-pin-icon-component") /*id: 730868*/;
  var userAgentPlatformUtils = require("user-agent-platform-utils") /*id: 221233*/;
  let eU = e => {
    let {
      placeholder: t,
      onSend: i
    } = e;
    let [n, r] = reactCoreLibraryReexport.useState("");
    let a = userAgentPlatformUtils.isMobile();
    let l = userAgentPlatformUtils.isIOS();
    let s = !n;
    let c = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (i != null) {
        i(n);
      }
    });
    let d = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.keyCode === 13 && !e.shiftKey && !e.altKey) {
        if (!a && !l) {
          e.preventDefault();
        }
        if (!s && c != null) {
          c();
        }
        return;
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "description-input-wrapper-EWrzJM",
      children: [reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
        "data-testid": "edit_image_input",
        className: "textarea-XeoUHx",
        rows: 1,
        maxLength: 100,
        autosize: true,
        autoFocus: true,
        autoComplete: "off",
        placeholder: t,
        value: n,
        onChange: r,
        onKeyDown: d
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "send-btn-wrapper-Cv9OFl",
        children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "edit_image_send_btn",
          className: "send-btn-JKH51J",
          icon: reactJsxRuntimeCoreReexport.jsx(skillPinIconComponent.SkillPinIcon, {
            className: "text-32"
          }),
          disabled: s,
          onClick: c
        })
      })]
    });
  };
  let eV = e => {
    let {
      imgSrc: t,
      thumbImageUrl: i,
      width: n,
      height: r,
      containerSize: a,
      tool: l,
      maskDataType: s = eL.base64,
      onInpainting: c,
      onCancel: d,
      t: u,
      currentImageSize: m,
      backgroundMask: g,
      onGetBackrgroundMask: p,
      withoutBackgroundUrl: f,
      onClearBackrgroundMask: v,
      onGenerating: _,
      trackParams: b
    } = e;
    let [y, x] = reactCoreLibraryReexport.useState(65);
    let [k, $] = reactCoreLibraryReexport.useState(true);
    let [R, S] = reactCoreLibraryReexport.useState(true);
    let N = reactCoreLibraryReexport.useRef(null);
    let [W, j] = reactCoreLibraryReexport.useState(false);
    let [E, C] = reactCoreLibraryReexport.useState(g);
    reactCoreLibraryReexport.useEffect(() => {
      C(g);
    }, [g]);
    let T = reactCoreLibraryReexport.useMemo(() => a && {
      width: a.width,
      height: a.height - (l === imageEditConstants.imageEditModes.erase) * 56
    }, [a, l]);
    let Z = reactCoreLibraryReexport.useMemo(() => {
      if (!T) {
        return;
      }
      let e = T.width / n;
      let t = T.height / r;
      if (e > t) {
        return {
          width: n * t,
          height: T.height
        };
      } else {
        return {
          width: T.width,
          height: r * e
        };
      }
    }, [T]);
    let {
      showContextMenu: B,
      dropdown: F
    } = contextMenuDropdownHook.useContextMenuDropdown({
      dropdownProps: {
        className: eR["description-input-dropdown"],
        position: "bottom",
        render: reactJsxRuntimeCoreReexport.jsx(eU, {
          placeholder: u("edit_image_skill_inPainting_placeholder"),
          onSend: e => {
            A("redraw", {
              text: e
            });
          }
        })
      }
    });
    let P = reactCoreLibraryReexport.useMemo(() => !!g && (!E || !!k) || !!g && !!E && g === E, [E, g, k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!T || !Z) {
        return;
      }
      let e = 0;
      N.current = eO({
        url: t,
        thumbImageUrl: i,
        id: "in-painting",
        onRedoUndoChange: t => {
          let [i, n] = t;
          $(!n);
          S(!i);
          e = n;
        },
        img: Z,
        initalImage: {
          width: n,
          height: r
        },
        onComplete: t => {
          var i;
          C((i = N.current) === null || i === undefined ? undefined : i.getMaskData({
            type: s
          }));
          if (l === imageEditConstants.imageEditModes.inPainting && e && (t == null ? undefined : t.pos)) {
            B(t.pos);
          }
        },
        currentImageSize: m
      });
    }, [Z, l]);
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        var e;
        if ((e = N.current) !== null && e !== undefined) {
          e.drawBackgroundMask(g);
        }
      }
    }, [g, N.current]);
    let D = reactCoreLibraryReexport.useMemo(() => !!_ || !P && (P ? undefined : k), [l, k, P, _]);
    let L = () => {
      var e;
      if ((e = N.current) !== null && e !== undefined) {
        e.undo();
      }
    };
    let O = () => {
      var e;
      if ((e = N.current) !== null && e !== undefined) {
        e.redo();
      }
    };
    z({
      onCancel: L
    });
    H({
      onCancel: O
    });
    let A = async (e, t) => {
      let i;
      if (N.current !== null && E) {
        if (P && e === "operateBackground") {
          i = await N.current.getNewImageData(f);
        }
        await c(e, E, i, t);
      }
    };
    let U = async () => {
      if (!D) {
        try {
          j(true);
          await A(P ? "operateBackground" : "erase");
          teaAnalyticsEventTracker.trackEvent("image_edit_confirm", {
            button_type: P ? "operateBackground" : "erase",
            pic_id: t
          });
        } finally {
          j(false);
        }
      }
    };
    let V = reactCoreLibraryReexport.useMemo(() => P ? !!P && !g : k, [P, k]);
    let K = {
      [imageEditConstants.imageEditModes.erase]: u("edit_image_skill_erase"),
      [imageEditConstants.imageEditModes.operateBackground]: u("edit_image_skill_removeBG")
    }[l];
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(ex, {
        center: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [(l === imageEditConstants.imageEditModes.erase || l === imageEditConstants.imageEditModes.operateBackground) && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              "data-testid": "in_painting_cutout_image_btn",
              className: h("gap-4 flex items-center", eR.hover, eR.cancel),
              onClick: () => {
                if (p != null) {
                  p();
                }
                teaAnalyticsEventTracker.trackEvent("output_preview_click", {
                  ...b,
                  button_name: "operate_background",
                  show_status: "show"
                });
              },
              children: [reactJsxRuntimeCoreReexport.jsx(imageGuidanceIcon.ImageGuidanceIcon, {
                className: "text-18"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: h(eR.clear, "!p-0"),
                children: K
              })]
            }), reactJsxRuntimeCoreReexport.jsx(ek, {})]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eR["slider-wrapper"],
            children: [reactJsxRuntimeCoreReexport.jsx(eT, {
              className: "text-18"
            }), reactJsxRuntimeCoreReexport.jsx(sliderComponentAdapter.SliderComponent, {
              min: 30,
              max: 100,
              value: y,
              onChange: e => {
                if (typeof e == "number") {
                  var t;
                  if ((t = N.current) !== null && t !== undefined) {
                    t.setStrokeWidth(e);
                  }
                  x(e);
                }
              },
              className: eR.slider,
              onMouseUp: () => {
                var e;
                if ((e = N.current) !== null && e !== undefined) {
                  e.removeCircle();
                }
              }
            }), reactJsxRuntimeCoreReexport.jsx(eZ, {
              className: "text-18"
            })]
          }), reactJsxRuntimeCoreReexport.jsx(ek, {}), reactJsxRuntimeCoreReexport.jsx(returnOutlinedIcon.ReturnOutlinedIcon, {
            onClick: L,
            className: h("text-18 cursor-pointer text-s-color-text-secondary", {
              [eR["cancel-disabled"]]: k
            })
          }), reactJsxRuntimeCoreReexport.jsx(exitRtlIconComponent.ExitRtlIcon, {
            onClick: O,
            className: h("text-18 cursor-pointer text-s-color-text-secondary", {
              [eR["cancel-disabled"]]: R
            })
          }), reactJsxRuntimeCoreReexport.jsx(ek, {}), reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: () => {
              var e;
              if ((e = N.current) !== null && e !== undefined) {
                e.del();
              }
              if (v != null) {
                v();
              }
            },
            className: h(eR.clear, eR.hover, {
              [eR["cancel-disabled"]]: V
            }),
            children: u("edit_image_action_clear")
          })]
        }),
        left: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "bg-s-color-bg-body",
          "data-testid": "in_painting_area_cancel",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: d,
            className: h(eR.btn, e$.hover),
            children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: u("edit_image_back_button_tooltip"),
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "flex items-center",
                children: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
                  className: "!text-16"
                })
              })
            })
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(eR.content, {
          [eR["has-footer"]]: l === imageEditConstants.imageEditModes.erase
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          id: "in-painting",
          "data-testid": "in_painting_picture"
        })
      }), (l === imageEditConstants.imageEditModes.erase || l === imageEditConstants.imageEditModes.operateBackground) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: eR.footer,
        children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "edit_image_in_painting_btn",
          type: "primary",
          size: "medium",
          disabled: D,
          onClick: U,
          loading: W,
          children: u(P ? "edit_image_skill_removeBG_generate" : "edit_image_skill_erase_generate")
        })
      }), F]
    });
  };
  var rightLabelButton = require("right-label-button") /*id: 643385*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var rtlSearchIcon = require("rtl-search-icon") /*id: 717963*/;
  var rtlIconComponent_1 = require("rtl-icon-component_1") /*id: 66332*/;
  var rtlExpandFrameIcon = require("rtl-expand-frame-icon") /*id: 59653*/;
  var editPencilOutlinedIcon = require("edit-pencil-outlined-icon") /*id: 635854*/;
  var rtlLayoutIcon = require("rtl-layout-icon") /*id: 921302*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  require("tooltip-component-exports") /*id: 341865*/;
  let e3 = e => {
    let {
      desc: t,
      onClick: i,
      icon: n,
      disable: r,
      showLabel: a = true,
      showTooltip: o = true,
      ...l
    } = e;
    let s = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center",
      children: [n, reactJsxRuntimeCoreReexport.jsx("span", {
        className: h(e$["tools-desc"], ""),
        children: t
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: h(e$["btn-wrapper"], {
        [e$["label-hidden"]]: !a
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ...l,
        onClick: i,
        className: h(e$.btn, {
          [e$.hover]: i,
          [e$.disabled]: r
        }),
        children: !a && o ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: t,
          className: e$.tooltip,
          children: s
        }) : s
      })
    });
  };
  var e6 = require.p + "static/image/smart-editing.90527deb.gif";
  var e8 = {
    "left-top": "left-top-w75xeC",
    "right-top": "right-top-vZFJQu",
    "show-edit": "show-edit-nY9uPw",
    "smart-edit": "smart-edit-Sfcrjp",
    right: "right-ZCTeG6",
    popover: "popover-VtJCTt"
  };
  let e7 = e => {
    let {
      showSmartEditing: t,
      hasSelectedQueryContent: i,
      iconDisabled: n,
      t: r,
      canShowEnhanceResolution: l,
      onDownload: s,
      onInPainting: c,
      onOutPainting: d,
      onErase: u,
      onEnhanceResolution: m,
      onClose: g,
      onUpdateQueryContext: p,
      onRenderCustomToolButton: f
    } = e;
    let w = reactCoreLibraryReexport.useRef(null);
    let {
      width: v
    } = useElementSizeHook_2.useElementSize(w) || {};
    let _ = !!v && v >= 680;
    return reactJsxRuntimeCoreReexport.jsx(ex, {
      ref: w,
      leftClassName: e8["left-top"],
      rightClassName: e8["right-top"],
      left: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: e8["show-edit"],
        children: [t && reactJsxRuntimeCoreReexport.jsx("div", {
          "data-testid": "edit_image_continue_edit_button_inside",
          className: e8["smart-edit"],
          children: i ? reactJsxRuntimeCoreReexport.jsx(e3, {
            desc: r("skill_image_ref_smartedit"),
            icon: reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {}),
            disable: n,
            showLabel: _
          }) : reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
            className: h("px-4", e8.popover),
            position: "bottom",
            showArrow: true,
            content: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: `
                        flex flex-col items-center gap-8 bg-s-color-bg-float
                        px-4 pb-4
                      `,
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: `
                          w-full truncate text-s-color-text-secondary
                          s-font-small-strong
                        `,
                children: r("edit_image_smartEdit_tip_title")
              }), reactJsxRuntimeCoreReexport.jsx("img", {
                src: xssContentSanitizer.sanitizeUrl(e6, null, {
                  logType: "js.href/src",
                  reportOnly: "false",
                  blackConfig: "{}",
                  configMode: "merge",
                  isCloseSSRReport: false,
                  bid: "flow_web",
                  region: "cn",
                  urlLimit: "-1",
                  htmlLimit: "-1",
                  isSaveValidUrl: false,
                  isRuntimeLog: false,
                  isDOMParser: true,
                  escapeRule: "escape-report",
                  reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                  scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                  scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                  scmVersion: "1.0.4.168",
                  webpackPluginVersion: "3.4.5",
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*xxWWpJe*QySXlO$3hp-mxKNlRETkNl$nBZ$25C-$dHTjBaRWM1ZDB4W$$uWmlNbmQyW$ZjMWExcFlaM1Zr%0%0MFdWaEtib$JZ$FQwPQ"
                }),
                className: "h-170 w-248 rounded-4 px-2"
              })]
            }),
            disableFocusListener: true,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              children: reactJsxRuntimeCoreReexport.jsx(e3, {
                desc: r("skill_image_ref_smartedit"),
                icon: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon.SearchRtlIcon, {}),
                disable: n,
                showLabel: _,
                showTooltip: false,
                onClick: p
              })
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx(e3, {
          "data-testid": "edit_image_repaint_button_inside",
          onClick: c,
          desc: r("edit_image_skill_inPainting"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {}),
          disable: n,
          showLabel: _
        }), reactJsxRuntimeCoreReexport.jsx(e3, {
          "data-testid": "edit_image_expand_button_inside",
          onClick: d,
          desc: r("edit_image_skill_outPainting"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandFrameIcon.RtlExpandFrameIcon, {}),
          disable: n,
          showLabel: _
        }), reactJsxRuntimeCoreReexport.jsx(e3, {
          "data-testid": "edit_image_erase_button_inside",
          onClick: u,
          desc: r("edit_image_skill_erase"),
          icon: reactJsxRuntimeCoreReexport.jsx(editPencilOutlinedIcon.EditPencilOutlinedIcon, {}),
          disable: n,
          showLabel: _
        }), l && reactJsxRuntimeCoreReexport.jsx(e3, {
          "data-testid": "edit_image_upgrade_button_inside",
          onClick: m,
          desc: r("edit_image_skill_upScale"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlLayoutIcon.RtlLayoutIcon, {}),
          disable: n,
          showLabel: _
        })]
      }),
      right: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: e8.right,
          children: [f == null ? undefined : f({
            showLabel: _,
            iconDisabled: n
          }), reactJsxRuntimeCoreReexport.jsx(rightLabelButton.RightLabelButton, {
            "data-testid": "edit_image_download_button",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
              className: "!text-16"
            }),
            text: r("edit_image_download"),
            showLabel: _,
            disabled: n,
            onClick: s
          })]
        }), reactJsxRuntimeCoreReexport.jsx(ek, {}), !!g && reactJsxRuntimeCoreReexport.jsx(rightLabelButton.RightLabelButton, {
          "data-testid": "edit_image_close_button",
          icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            className: "!text-16"
          }),
          onClick: g
        })]
      })
    });
  };
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  function te(e) {
    let {
      imgSrc: t,
      thumbImageUrl: i,
      width: n,
      height: r,
      className: l,
      style: s,
      imgAttributes: c,
      ...d
    } = e;
    let [u, m] = reactCoreLibraryReexport.useState(false);
    let [g, p] = reactCoreLibraryReexport.useState(false);
    let f = reactCoreLibraryReexport.useRef(null);
    let [w, v] = reactCoreLibraryReexport.useState(undefined);
    let _ = !!i && typeof n == "number" && typeof r == "number";
    let b = h("absolute left-half top-half rounded-10 max-w-full max-h-full object-contain", w ?? (r || 0) > (n || 0) ? "h-full w-auto" : "w-full h-auto", "img-WR0KZf");
    reactCoreLibraryReexport.useEffect(() => {
      if (!f.current) {
        v(undefined);
        return;
      }
      try {
        let e = debounceUtilWrapper.createDebounce(() => {
          if (!f.current) {
            v(undefined);
            return;
          }
          let {
            width: e,
            height: t
          } = f.current.getBoundingClientRect();
          let i = (n || 0) / e;
          let a = (r || 0) / t;
          v(a > i);
        }, 50);
        e();
        let t = new ResizeObserver(e);
        t.observe(f.current);
        return () => t.disconnect();
      } catch (e) {
        v(undefined);
      }
    }, [t, n, r]);
    if (_) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: h("relative w-full h-full flex items-center justify-center rounded-10 overflow-hidden select-none", l),
        ...d,
        ref: f,
        children: [!g && reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(i, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*xxWWpJe*QySXlO$3hp-mxKNlRETkNl$nBZ$25C-$dHTjBZ$mN4-%Zve$Z-WmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
          }),
          alt: "thumb",
          className: h(b, !_ || g || u ? "hidden" : "block"),
          onError: () => {
            p(true);
          }
        }), reactJsxRuntimeCoreReexport.jsx("img", {
          ...c,
          src: xssContentSanitizer.sanitizeUrl(t, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*xxWWpJe*QySXlO$3hp-mxKNlRETkNl$nBZ$25C-$dHTjBZ$mN4-%Zve$Z-WmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
          }),
          alt: "preview",
          className: h(b, u ? "opacity-100" : "opacity-0"),
          onLoad: () => m(true),
          onError: () => {
            m(false);
          }
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("img", {
        ...c,
        src: xssContentSanitizer.sanitizeUrl(t, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*xxWWpJe*QySXlO$3hp-mxKNlRETkNl$nBZ$25C-$dHTjBZ$mN4-%Zve$Z-WmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
        }),
        style: {
          ...(c == null ? undefined : c.style),
          backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2SURBVHgB7dGxCQAwDAPBT0iRNTWZVs0GTmEMLqxWcAi0gEsQ21HNJpkBOgDn97MkShcM0AF4qlkFB/hY8nkAAAAASUVORK5CYII=)",
          backgroundRepeat: "repeat"
        },
        className: h("block max-w-full max-h-full object-contain rounded-10 select-none", c == null ? undefined : c.className)
      });
    }
  }
  let tt = e => {
    try {
      var i;
      if ((i = window) === null || i === undefined ? undefined : i.document?.querySelector) {
        return window.document.querySelector(e);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  };
  var ti = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      imageList: r,
      imgSrc: u,
      thumbImageUrl: Z,
      onClose: z,
      width: H,
      height: O,
      originalImageSrc: J,
      onIndexChange: X,
      onImproveClariy: U,
      onOutPainting: V,
      onGenerating: K,
      onInpainting: G,
      onReset: q,
      t: Q,
      format: Y,
      downloadName: ee,
      initialTool: et = imageEditConstants.imageEditModes.default,
      onImagePreviewContainerRender: ei,
      onGetImagePreviewURL: en,
      onGetImageDownloadURL: er,
      backgroundMask: ea,
      onGetBackrgroundMask: eo,
      withoutBackgroundUrl: el,
      onClearBackrgroundMask: es,
      inputNode: ec,
      trackParams: ed,
      hasSelectedQueryContent: eu,
      onUpdateQueryContext: eh,
      canvasLoading: em,
      showSmartEditing: eg,
      safetyTips: ep,
      transitionStatus: ef,
      onInPatingCancel: ew,
      onOutPatingCancel: ev,
      onRenderCustomToolButton: e_
    } = e;
    let [eb, ey] = chatFeedStoreFactory.useFeedStore(e => [e.chatNotReachLimitMap, e.guestReachCreateThreadLimit, e.guestReachSendMessageLimit], deepEqualityUtil_1.isDeepEqual);
    let [ex, ek] = reactCoreLibraryReexport.useState(et);
    let [e$, eS] = reactCoreLibraryReexport.useState(false);
    let eN = reactCoreLibraryReexport.useRef(null);
    let ej = reactCoreLibraryReexport.useRef(null);
    let eE = reactCoreLibraryReexport.useRef(null);
    let eC = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    let {
      width: eT,
      height: eZ
    } = useElementSizeHook_2.useElementSize(ej) || {};
    let eM = K || u === "" || u === "local_url";
    let eB = ex === imageEditConstants.imageEditModes.default || ex === imageEditConstants.imageEditModes.enhanceResolution;
    let eF = H < 4096 && O < 4096;
    let eP = ex === imageEditConstants.imageEditModes.inPainting || ex === imageEditConstants.imageEditModes.erase || ex === imageEditConstants.imageEditModes.operateBackground;
    let eD = useMediaQueryHook.mediaQueryHook({
      maxWidth: 800,
      minWidth: 400
    });
    let ez = `image-editor-${uuidGeneratorUtil.generateUuid()}`;
    let [eH, eL] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (ef === "entering") {
        eE.current = {
          width: ej.current?.offsetWidth || 0,
          height: ej.current?.offsetWidth || 0
        };
        eL(false);
      } else if (ef === "entered") {
        eL(true);
      } else if (ef !== "exiting") {
        if (ef === "exited") {
          eL(false);
          eE.current = null;
        }
      }
    }, [ef]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new ResizeObserver(e => {
        let t = e[0].contentRect;
        let i = eE.current;
        if (t && i && t.height - 56 - 80 - 64 >= i.height && t.width - 80 >= i.width) {
          eL(true);
        }
      });
      if (ej.current) {
        e.observe(ej.current);
      }
      return () => {
        if (ej.current) {
          e.unobserve(ej.current);
        }
      };
    }, []);
    let eI = reactCoreLibraryReexport.useMemo(() => A(ej.current, 48), [eT]);
    let eO = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "image_canvas_render"
      });
    }), []);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (ef === "entered" && tt("[data-testid=in_painting_picture]")) {
        eO();
      }
    }, [ef]);
    let eA = L({
      imgContainerWidth: eT,
      imgContainerHeight: eZ,
      width: H,
      height: O
    });
    let {
      currentIndex: eJ
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = r.length ? r.map(en) : u;
      return {
        currentIndex: (e.includes(u) ? e : [u, ...e]).indexOf(u)
      };
    }, [r, u]);
    D({
      onCancel: reactFunctionMemoHook.useMemoizedCallback(() => {
        if (ex !== imageEditConstants.imageEditModes.default) {
          e1();
        } else if (z != null) {
          z();
        }
      })
    });
    let eX = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (eJ < r.length - 1 && ef === "entered") {
        if (X != null) {
          X(eJ + 1);
        }
      }
    });
    let eU = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (eJ > 0 && ef === "entered") {
        if (X != null) {
          X(eJ - 1);
        }
      }
    });
    reactUseEventListener.useEventListener(e => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) {
        return false;
      }
      let {
        target: t
      } = e;
      return !(t instanceof HTMLElement) || !t.isContentEditable;
    }, e => {
      if (e.key === "ArrowLeft") {
        eU();
      } else if (e.key === "ArrowRight") {
        eX();
      }
    });
    let eK = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let eG = () => {
      let t = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId;
      if (t && !eK) {
        let e = eb[t];
        if (!isNullishCheck.isNil(e) && !e || isNullishCheck.isNil(e) && ey) {
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage());
          chatEventEmitter.chatEmitter.emit("chat.guest.login");
          return true;
        }
      }
    };
    let eq = e => {
      if (!eG() && !eM) {
        ek(imageEditConstants.imageEditModes.enhanceResolution);
        U();
        if (!(e == null ? undefined : e.skipTrackEvent)) {
          teaAnalyticsEventTracker.trackEvent("output_preview_click", {
            ...ed,
            button_name: "super_resolution",
            show_status: "show"
          });
        }
      }
    };
    let eQ = e => {
      if (!eG() && !eM) {
        ek(imageEditConstants.imageEditModes.outPainting);
        if (!(e == null ? undefined : e.skipTrackEvent)) {
          teaAnalyticsEventTracker.trackEvent("output_preview_click", {
            ...ed,
            button_name: "outpainting",
            show_status: "show"
          });
        }
      }
    };
    let eY = e => {
      if (!eG() && !eM) {
        ek(imageEditConstants.imageEditModes.inPainting);
        if (!(e == null ? undefined : e.skipTrackEvent)) {
          teaAnalyticsEventTracker.trackEvent("output_preview_click", {
            ...ed,
            button_name: "inpainting",
            show_status: "show"
          });
        }
      }
    };
    let e0 = e => {
      if (!eG() && !eM) {
        ek(imageEditConstants.imageEditModes.erase);
        if (!(e == null ? undefined : e.skipTrackEvent)) {
          teaAnalyticsEventTracker.trackEvent("output_preview_click", {
            ...ed,
            button_name: "smearing",
            show_status: "show"
          });
        }
      }
    };
    let e1 = () => {
      ek(imageEditConstants.imageEditModes.default);
      if (q != null) {
        q();
      }
    };
    let e2 = e => {
      if (eN.current) {
        var t;
        if ((t = eN.current.children[e]) !== null && t !== undefined) {
          t.scrollIntoView({
            behavior: "smooth",
            inline: "center"
          });
        }
      }
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      clear: () => {
        e1();
      },
      changeTool: (e, t) => {
        switch (e) {
          case imageEditConstants.imageEditModes.enhanceResolution:
            eq(t);
            break;
          case imageEditConstants.imageEditModes.outPainting:
            eQ(t);
            break;
          case imageEditConstants.imageEditModes.inPainting:
            eY(t);
            break;
          case imageEditConstants.imageEditModes.erase || imageEditConstants.imageEditModes.operateBackground:
            e0(t);
        }
      }
    }));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: eR.editor,
      ref: ej,
      "data-testid": "image_editor_panel",
      id: ez,
      children: [eB && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [eH && reactJsxRuntimeCoreReexport.jsx(e7, {
          t: Q,
          onDownload: () => {
            if (eM || !r[eJ]) {
              return;
            }
            samanthaToastFactory.toastInstance.info({
              content: Q("image_toast_downloading"),
              showClose: false,
              theme: "light"
            });
            loggerServiceCore.defaultLogger.persist.log({
              eventName: "download_image_start",
              meta: {
                url: er(r[eJ]),
                logTime: Date.now()
              }
            });
            fileDownloadUtilities.downloadFileWithCallbacks(er(r[eJ]), ee ?? "", Y, () => {
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "download_image_success",
                meta: {
                  url: er(r[eJ]),
                  logTime: Date.now()
                }
              });
            }, e => {
              samanthaToastFactory.toastInstance.error({
                content: Q("image_toast_downloadFail"),
                showClose: false,
                theme: "light"
              });
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "download_image_fail",
                meta: {
                  url: er(r[eJ]),
                  logTime: Date.now()
                },
                error: e
              });
            }, () => {
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "download_image_save_start",
                meta: {
                  url: er(r[eJ]),
                  logTime: Date.now()
                }
              });
            }, () => {
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "download_image_fetch_start",
                meta: {
                  url: er(r[eJ]),
                  logTime: Date.now()
                }
              });
            });
            let e = er(r[eJ]);
            let t = imageActionUtils.getFileExtension(e);
            teaAnalyticsEventTracker.trackEvent("download", {
              ...ed,
              click_from: "canvas_function",
              canvas_type: "image",
              content_type: "pic",
              content_sec_type: Y && t === "image" ? Y : t
            });
          },
          onInPainting: eY,
          onOutPainting: eQ,
          onEnhanceResolution: eq,
          onClose: () => {
            if (z != null) {
              z();
            }
            try {
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "image_canvas_close_start"
              });
              setTimeout(() => {
                let e = tt("[data-testid=canvas_panel_container][data-visible=true]");
                if (e) {
                  var t;
                  if (e == null ? undefined : (t = e.querySelector) === null || t === undefined ? undefined : t.call(e, `#${ez}`)) {
                    loggerServiceCore.defaultLogger.persist.log({
                      eventName: "image_canvas_close_fail"
                    });
                  } else {
                    loggerServiceCore.defaultLogger.persist.log({
                      eventName: "image_canvas_close_success"
                    });
                  }
                } else {
                  loggerServiceCore.defaultLogger.persist.log({
                    eventName: "image_canvas_close_success"
                  });
                }
              }, 1000);
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "image_canvas_close_fail",
                error: e
              });
            }
          },
          onUpdateQueryContext: eh,
          onErase: e0,
          showSmartEditing: eg,
          iconDisabled: eM,
          hasSelectedQueryContent: eu,
          onRenderCustomToolButton: e_,
          canShowEnhanceResolution: eF
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: h(eR["center-content"], {
            "!h-full": !eH
          }),
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            ref: ei,
            className: h(eR["img-preview-container"], {
              hidden: !eB
            }, {
              "!p-0": !eH
            }),
            "data-testid": "canvas_image_container",
            id: "img-content-container",
            children: [e$ && reactJsxRuntimeCoreReexport.jsx("img", {
              className: h(eR["preview-img"], eR["img-bg"]),
              src: xssContentSanitizer.sanitizeUrl(J, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
              })
            }), u !== "local_url" && !em && !e$ && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx(te, {
                imgSrc: u,
                thumbImageUrl: Z,
                width: H,
                height: O,
                "data-testid": "in_painting_picture",
                imgAttributes: {
                  "data-testid": "in_painting_picture",
                  ...(!eH && eE.current ? {
                    [eE.current.width > eE.current.height ? "height" : "width"]: `${Math.min(eE.current.width, eE.current.height)}px`
                  } : {})
                }
              }, u), eH && r.length > 1 && eJ !== r.length - 1 && reactJsxRuntimeCoreReexport.jsx("div", {
                className: h(eR["right-icon"], eR["icon-wrapper"]),
                onClick: () => {
                  if (X != null) {
                    X(eJ + 1);
                  }
                  e2(eJ + 1);
                },
                children: reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
                  className: "text-16"
                })
              }), eH && r.length > 1 && eJ !== 0 && reactJsxRuntimeCoreReexport.jsx("div", {
                className: h(eR["left-icon"], eR["icon-wrapper"]),
                onClick: () => {
                  if (X != null) {
                    X(eJ - 1);
                  }
                  e2(eJ - 1);
                },
                children: reactJsxRuntimeCoreReexport.jsx(arrowLeftRtlIcon.ArrowLeftRtlIcon, {
                  className: "text-16"
                })
              }), ep && ep !== "" && reactJsxRuntimeCoreReexport.jsxs("div", {
                className: eR["tip-content"],
                style: {
                  top: `calc(50%  - ${((eA == null ? undefined : eA.height) ?? 0) / 2}px )`,
                  left: `calc(50%  - ${((eA == null ? undefined : eA.width) ?? 0) / 2}px )`,
                  width: eA == null ? undefined : eA.width
                },
                children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoOutlinedIcon.InfoOutlinedIcon, {
                  className: eR["error-icon"]
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: eR["tip-text"],
                  children: ep
                })]
              })]
            }), J && reactJsxRuntimeCoreReexport.jsx("div", {
              className: h(eR["img-compare"], {
                [eR["img-compare-active"]]: e$
              }),
              onMouseDown: () => {
                eS(true);
              },
              onMouseUp: () => eS(false),
              children: reactJsxRuntimeCoreReexport.jsx(B, {
                className: e$ ? "text-s-color-text-disable" : "text-s-color-text-tertiary"
              })
            }), em && reactJsxRuntimeCoreReexport.jsx("div", {
              style: eA,
              className: h(eR["image-thinking-wrapper"], eR["preview-img"]),
              children: reactJsxRuntimeCoreReexport.jsx(imageThinkingComponent.ImageThinkingView, {
                mode: eC ? "dark" : "light",
                className: "h-0 w-full",
                lottieClassName: eR["img-canvas-loading"],
                showCenterIcon: true
              })
            })]
          })
        }), eg && eH && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: eR["thumb-container"],
            "data-testid": "edit_image_footer_image_list",
            children: reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: eR["thumb-list"],
                id: "thumb-list",
                ref: eN,
                children: !!(r == null ? undefined : r.length) && r.map((e, t) => {
                  return reactJsxRuntimeCoreReexport.jsx("img", {
                    className: h(eR["thumb-image"], "select-none", {
                      [eR.active]: t === eJ && !K
                    }),
                    src: xssContentSanitizer.sanitizeUrl(e.image_thumb?.url, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: false,
                      bid: "flow_web",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: true,
                      escapeRule: "escape-report",
                      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                      scmVersion: "1.0.4.168",
                      webpackPluginVersion: "3.4.5",
                      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmRX-TJ*W$$uWmph$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
                    }),
                    onClick: () => X == null ? undefined : X(t)
                  }, e.key);
                })
              })
            })
          }), eD && reactJsxRuntimeCoreReexport.jsx("div", {
            className: eR["small-screen-input"],
            children: ec
          })]
        })]
      }), ex === imageEditConstants.imageEditModes.outPainting && reactJsxRuntimeCoreReexport.jsx(eW, {
        imgSrc: u,
        thumbImageUrl: Z,
        width: H,
        height: O,
        containerSize: eI,
        onOutPainting: V,
        onCancel: ev || e1,
        t: Q,
        currentImageSize: eA ?? {
          width: H,
          height: O
        }
      }), eP && reactJsxRuntimeCoreReexport.jsx(eV, {
        imgSrc: u,
        thumbImageUrl: Z,
        width: H,
        height: O,
        containerSize: eI,
        tool: ex,
        onInpainting: G,
        onCancel: ew || e1,
        t: Q,
        currentImageSize: eA ?? {
          width: H,
          height: O
        },
        backgroundMask: ea,
        onGetBackrgroundMask: eo,
        withoutBackgroundUrl: el,
        onClearBackrgroundMask: es,
        onGenerating: K,
        trackParams: ed
      })]
    });
  });
  require.d(exports, {
    ImageEditorPanel: function () {
      return ti;
    }
  });
}