// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JN' to 'sortableContainer'
// - Renamed export 'W6' to 'sortableHandle'
// - Renamed export 'W8' to 'sortableElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72645.b0fb9881.js
         * chunkId: 72645
         * moduleId: 678580
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectExtendUtil = require("object-extend-util") /*id: 597882*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var possibleConstructorReturn = require("possible-constructor-return") /*id: 233617*/;
  var getPrototypeOfHelper = require("get-prototype-of-helper") /*id: 109717*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var invariantErrorUtil = require("invariant-error-util") /*id: 827168*/;
  var y = invariantErrorUtil;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var b = propTypesFactoryWrapper;
  var x = function () {
    function e() {
      classCallCheckUtil.classCallCheck(this, e);
      objectPropertySetter.setObjectProperty(this, "refs", {});
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "add",
      value: function (e, t) {
        this.refs[e] ||= [];
        this.refs[e].push(t);
      }
    }, {
      key: "remove",
      value: function (e, t) {
        var n = this.getIndex(e, t);
        if (n !== -1) {
          this.refs[e].splice(n, 1);
        }
      }
    }, {
      key: "isActive",
      value: function () {
        return this.active;
      }
    }, {
      key: "getActive",
      value: function () {
        var e = this;
        return this.refs[this.active.collection].find(function (t) {
          return t.node.sortableInfo.index == e.active.index;
        });
      }
    }, {
      key: "getIndex",
      value: function (e, t) {
        return this.refs[e].indexOf(t);
      }
    }, {
      key: "getOrderedRefs",
      value: function (e = this.active.collection) {
        return this.refs[e].sort(w);
      }
    }]);
    return e;
  }();
  function w(e, t) {
    return e.node.sortableInfo.index - t.node.sortableInfo.index;
  }
  function E(e, t) {
    return Object.keys(e).reduce(function (n, r) {
      if (t.indexOf(r) === -1) {
        n[r] = e[r];
      }
      return n;
    }, {});
  }
  var O = {
    end: ["touchend", "touchcancel", "mouseup"],
    move: ["touchmove", "mousemove"],
    start: ["touchstart", "mousedown"]
  };
  var C = function () {
    if (typeof window == "undefined" || typeof document == "undefined") {
      return "";
    }
    var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"];
    var t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || e.OLink === "" && ["", "o"])[1];
    if (t === "ms") {
      return "ms";
    } else if (t && t.length) {
      return t[0].toUpperCase() + t.substr(1);
    } else {
      return "";
    }
  }();
  function T(e, t) {
    Object.keys(t).forEach(function (n) {
      e.style[n] = t[n];
    });
  }
  function S(e, t) {
    e.style[`${C}Transform`] = t == null ? "" : `translate3d(${t.x}px,${t.y}px,0)`;
  }
  function I(e, t) {
    e.style[`${C}TransitionDuration`] = t == null ? "" : `${t}ms`;
  }
  function k(e, t) {
    while (e) {
      if (t(e)) {
        return e;
      }
      e = e.parentNode;
    }
    return null;
  }
  function Z(e, t, n) {
    return Math.max(e, Math.min(n, t));
  }
  function P(e) {
    if (e.substr(-2) === "px") {
      return parseFloat(e);
    } else {
      return 0;
    }
  }
  function A(e, t) {
    var n = t.displayName || t.name;
    if (n) {
      return `${e}(${n})`;
    } else {
      return e;
    }
  }
  function R(e, t) {
    var n = e.getBoundingClientRect();
    return {
      top: n.top + t.top,
      left: n.left + t.left
    };
  }
  function j(e) {
    if (e.touches && e.touches.length) {
      return {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      return {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      };
    } else {
      return {
        x: e.pageX,
        y: e.pageY
      };
    }
  }
  function $(e, t, n = {
    left: 0,
    top: 0
  }) {
    if (e) {
      var r = {
        left: n.left + e.offsetLeft,
        top: n.top + e.offsetTop
      };
      if (e.parentNode === t) {
        return r;
      } else {
        return $(e.parentNode, t, r);
      }
    }
  }
  function N(e) {
    var t = e.lockOffset;
    var n = e.width;
    var r = e.height;
    var i = t;
    var o = t;
    var a = "px";
    if (typeof t == "string") {
      var s = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
      y(s !== null, "lockOffset value should be a number or a string of a number followed by \"px\" or \"%\". Given %s", t);
      i = parseFloat(t);
      o = parseFloat(t);
      a = s[1];
    }
    y(isFinite(i) && isFinite(o), "lockOffset value should be a finite. Given %s", t);
    if (a === "%") {
      i = i * n / 100;
      o = o * r / 100;
    }
    return {
      x: i,
      y: o
    };
  }
  var D = {
    Anchor: "A",
    Button: "BUTTON",
    Canvas: "CANVAS",
    Input: "INPUT",
    Option: "OPTION",
    Textarea: "TEXTAREA",
    Select: "SELECT"
  };
  function F(e) {
    var t;
    var n;
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withRef: false
    };
    n = t = function (t) {
      function n() {
        classCallCheckUtil.classCallCheck(this, n);
        var e;
        var t;
        var r = arguments.length;
        var i = Array(r);
        var o = 0;
        for (; o < r; o++) {
          i[o] = arguments[o];
        }
        t = possibleConstructorReturn.constructorReturn(this, (e = getPrototypeOfHelper.getPrototypeOf(n)).call.apply(e, [this].concat(i)));
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "wrappedInstance", reactCoreLibraryReexport.createRef());
        return t;
      }
      setPrototypeInheritance.setInheritance(n, t);
      classPropertyUtil.defineClassProps(n, [{
        key: "componentDidMount",
        value: function () {
          reactDomEntryWrapper.findDOMNode(this).sortableHandle = true;
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          y(i.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call");
          return this.wrappedInstance.current;
        }
      }, {
        key: "render",
        value: function () {
          var t = i.withRef ? this.wrappedInstance : null;
          return reactCoreLibraryReexport.createElement(e, objectAssignUtil.objectAssign({
            ref: t
          }, this.props));
        }
      }]);
      return n;
    }(reactCoreLibraryReexport.Component);
    objectPropertySetter.setObjectProperty(t, "displayName", A("sortableHandle", e));
    return n;
  }
  function _(e) {
    return e.sortableHandle != null;
  }
  var M = function () {
    function e(t, n) {
      classCallCheckUtil.classCallCheck(this, e);
      this.container = t;
      this.onScrollCallback = n;
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "clear",
      value: function () {
        if (this.interval != null) {
          clearInterval(this.interval);
          this.interval = null;
        }
      }
    }, {
      key: "update",
      value: function (e) {
        var t = this;
        var n = e.translate;
        var r = e.minTranslate;
        var i = e.maxTranslate;
        var o = e.width;
        var a = e.height;
        var s = {
          x: 0,
          y: 0
        };
        var l = {
          x: 1,
          y: 1
        };
        var u = {
          x: 10,
          y: 10
        };
        var c = this.container;
        var d = c.scrollTop;
        var f = c.scrollLeft;
        var h = c.scrollHeight;
        var p = c.scrollWidth;
        var g = c.clientHeight;
        var y = c.clientWidth;
        if (n.y >= i.y - a / 2 && h - d - g != 0) {
          s.y = 1;
          l.y = u.y * Math.abs((i.y - a / 2 - n.y) / a);
        } else if (n.x >= i.x - o / 2 && p - f - y != 0) {
          s.x = 1;
          l.x = u.x * Math.abs((i.x - o / 2 - n.x) / o);
        } else if (n.y <= r.y + a / 2 && d !== 0) {
          s.y = -1;
          l.y = u.y * Math.abs((n.y - a / 2 - r.y) / a);
        } else if (n.x <= r.x + o / 2 && f !== 0) {
          s.x = -1;
          l.x = u.x * Math.abs((n.x - o / 2 - r.x) / o);
        }
        if (this.interval) {
          this.clear();
          this.isAutoScrolling = false;
        }
        if (s.x !== 0 || s.y !== 0) {
          this.interval = setInterval(function () {
            t.isAutoScrolling = true;
            var e = {
              left: l.x * s.x,
              top: l.y * s.y
            };
            t.container.scrollTop += e.top;
            t.container.scrollLeft += e.left;
            t.onScrollCallback(e);
          }, 5);
        }
      }
    }]);
    return e;
  }();
  var L = {
    axis: b.oneOf(["x", "y", "xy"]),
    contentWindow: b.any,
    disableAutoscroll: b.bool,
    distance: b.number,
    getContainer: b.func,
    getHelperDimensions: b.func,
    helperClass: b.string,
    helperContainer: b.oneOfType([b.func, typeof HTMLElement == "undefined" ? b.any : b.instanceOf(HTMLElement)]),
    hideSortableGhost: b.bool,
    keyboardSortingTransitionDuration: b.number,
    lockAxis: b.string,
    lockOffset: b.oneOfType([b.number, b.string, b.arrayOf(b.oneOfType([b.number, b.string]))]),
    lockToContainerEdges: b.bool,
    onSortEnd: b.func,
    onSortMove: b.func,
    onSortOver: b.func,
    onSortStart: b.func,
    pressDelay: b.number,
    pressThreshold: b.number,
    keyCodes: b.shape({
      lift: b.arrayOf(b.number),
      drop: b.arrayOf(b.number),
      cancel: b.arrayOf(b.number),
      up: b.arrayOf(b.number),
      down: b.arrayOf(b.number)
    }),
    shouldCancelStart: b.func,
    transitionDuration: b.number,
    updateBeforeSortStart: b.func,
    useDragHandle: b.bool,
    useWindowAsScrollContainer: b.bool
  };
  var q = {
    lift: [32],
    drop: [32],
    cancel: [27],
    up: [38, 37],
    down: [40, 39]
  };
  var G = {
    axis: "y",
    disableAutoscroll: false,
    distance: 0,
    getHelperDimensions: function (e) {
      var t = e.node;
      return {
        height: t.offsetHeight,
        width: t.offsetWidth
      };
    },
    hideSortableGhost: true,
    lockOffset: "50%",
    lockToContainerEdges: false,
    pressDelay: 0,
    pressThreshold: 5,
    keyCodes: q,
    shouldCancelStart: function (e) {
      return [D.Input, D.Textarea, D.Select, D.Option, D.Button].indexOf(e.target.tagName) !== -1 || !!k(e.target, function (e) {
        return e.contentEditable === "true";
      });
    },
    transitionDuration: 300,
    useWindowAsScrollContainer: false
  };
  var V = Object.keys(L);
  var H = reactCoreLibraryReexport.createContext({
    manager: {}
  });
  function U(e) {
    var t;
    var n;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withRef: false
    };
    n = t = function (t) {
      function n(e) {
        classCallCheckUtil.classCallCheck(this, n);
        t = possibleConstructorReturn.constructorReturn(this, getPrototypeOfHelper.getPrototypeOf(n).call(this, e));
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "state", {});
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleStart", function (e) {
          var n = t.props;
          var r = n.distance;
          var i = n.shouldCancelStart;
          if (e.button !== 2 && !i(e)) {
            t.touched = true;
            t.position = j(e);
            var o = k(e.target, function (e) {
              return e.sortableInfo != null;
            });
            if (o && o.sortableInfo && t.nodeIsChild(o) && !t.state.sorting) {
              var a = t.props.useDragHandle;
              var s = o.sortableInfo;
              var l = s.index;
              var u = s.collection;
              if (s.disabled || a && !k(e.target, _)) {
                return;
              }
              t.manager.active = {
                collection: u,
                index: l
              };
              if ((!e.touches || !e.touches.length) && (!e.changedTouches || !e.changedTouches.length) && e.target.tagName === D.Anchor) {
                e.preventDefault();
              }
              if (!r) {
                if (t.props.pressDelay === 0) {
                  t.handlePress(e);
                } else {
                  t.pressTimer = setTimeout(function () {
                    return t.handlePress(e);
                  }, t.props.pressDelay);
                }
              }
            }
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "nodeIsChild", function (e) {
          return e.sortableInfo.manager === t.manager;
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleMove", function (e) {
          var n = t.props;
          var r = n.distance;
          var i = n.pressThreshold;
          if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
            var o = j(e);
            var a = {
              x: t.position.x - o.x,
              y: t.position.y - o.y
            };
            var s = Math.abs(a.x) + Math.abs(a.y);
            t.delta = a;
            if (r || i && !(s >= i)) {
              if (r && s >= r && t.manager.isActive()) {
                t.handlePress(e);
              }
            } else {
              clearTimeout(t.cancelTimer);
              t.cancelTimer = setTimeout(t.cancel, 0);
            }
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleEnd", function () {
          t.touched = false;
          t.cancel();
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "cancel", function () {
          var e = t.props.distance;
          if (!t.state.sorting) {
            if (!e) {
              clearTimeout(t.pressTimer);
            }
            t.manager.active = null;
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handlePress", function (e) {
          try {
            var n = t.manager.getActive();
            var r = function () {
              if (n) {
                function r() {
                  var n;
                  var r;
                  var i;
                  var c;
                  var y;
                  var v;
                  var b = h.sortableInfo.index;
                  n = window.getComputedStyle(h);
                  var x = {
                    bottom: P(n.marginBottom),
                    left: P(n.marginLeft),
                    right: P(n.marginRight),
                    top: P(n.marginTop)
                  };
                  r = t.container;
                  i = window.getComputedStyle(r);
                  var w = i.display === "grid" ? {
                    x: P(i.gridColumnGap),
                    y: P(i.gridRowGap)
                  } : {
                    x: 0,
                    y: 0
                  };
                  var E = t.scrollContainer.getBoundingClientRect();
                  var C = s({
                    index: b,
                    node: h,
                    collection: p
                  });
                  t.node = h;
                  t.margin = x;
                  t.gridGap = w;
                  t.width = C.width;
                  t.height = C.height;
                  t.marginOffset = {
                    x: t.margin.left + t.margin.right + t.gridGap.x,
                    y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y)
                  };
                  t.boundingClientRect = h.getBoundingClientRect();
                  t.containerBoundingRect = E;
                  t.index = b;
                  t.newIndex = b;
                  t.axis = {
                    x: a.indexOf("x") >= 0,
                    y: a.indexOf("y") >= 0
                  };
                  t.offsetEdge = $(h, t.container);
                  if (g) {
                    t.initialOffset = j(objectExtendUtil.extendObject({}, e, {
                      pageX: t.boundingClientRect.left,
                      pageY: t.boundingClientRect.top
                    }));
                  } else {
                    t.initialOffset = j(e);
                  }
                  t.initialScroll = {
                    left: t.scrollContainer.scrollLeft,
                    top: t.scrollContainer.scrollTop
                  };
                  t.initialWindowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                  };
                  t.helper = t.helperContainer.appendChild((c = "input, textarea, select, canvas, [contenteditable]", y = h.querySelectorAll(c), v = h.cloneNode(true), arrayIterableSliceUtil.sliceArrayIterable(v.querySelectorAll(c)).forEach(function (e, t) {
                    if (e.type !== "file") {
                      e.value = y[t].value;
                    }
                    if (e.type === "radio" && e.name) {
                      e.name = `__sortableClone__${e.name}`;
                    }
                    if (e.tagName === D.Canvas && y[t].width > 0 && y[t].height > 0) {
                      e.getContext("2d").drawImage(y[t], 0, 0);
                    }
                  }), v));
                  T(t.helper, {
                    boxSizing: "border-box",
                    height: `${t.height}px`,
                    left: `${t.boundingClientRect.left - x.left}px`,
                    pointerEvents: "none",
                    position: "fixed",
                    top: `${t.boundingClientRect.top - x.top}px`,
                    width: `${t.width}px`
                  });
                  if (g) {
                    t.helper.focus();
                  }
                  if (u) {
                    t.sortableGhost = h;
                    T(h, {
                      opacity: 0,
                      visibility: "hidden"
                    });
                  }
                  t.minTranslate = {};
                  t.maxTranslate = {};
                  if (g) {
                    var S = f ? {
                      top: 0,
                      left: 0,
                      width: t.contentWindow.innerWidth,
                      height: t.contentWindow.innerHeight
                    } : t.containerBoundingRect;
                    var I = S.top;
                    var k = S.left;
                    var Z = S.width;
                    var A = S.height;
                    if (t.axis.x) {
                      t.minTranslate.x = k - t.boundingClientRect.left;
                      t.maxTranslate.x = k + Z - (t.boundingClientRect.left + t.width);
                    }
                    if (t.axis.y) {
                      t.minTranslate.y = I - t.boundingClientRect.top;
                      t.maxTranslate.y = I + A - (t.boundingClientRect.top + t.height);
                    }
                  } else {
                    if (t.axis.x) {
                      t.minTranslate.x = (f ? 0 : E.left) - t.boundingClientRect.left - t.width / 2;
                      t.maxTranslate.x = (f ? t.contentWindow.innerWidth : E.left + E.width) - t.boundingClientRect.left - t.width / 2;
                    }
                    if (t.axis.y) {
                      t.minTranslate.y = (f ? 0 : E.top) - t.boundingClientRect.top - t.height / 2;
                      t.maxTranslate.y = (f ? t.contentWindow.innerHeight : E.top + E.height) - t.boundingClientRect.top - t.height / 2;
                    }
                  }
                  if (l) {
                    l.split(" ").forEach(function (e) {
                      return t.helper.classList.add(e);
                    });
                  }
                  t.listenerNode = e.touches ? e.target : t.contentWindow;
                  if (g) {
                    t.listenerNode.addEventListener("wheel", t.handleKeyEnd, true);
                    t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, true);
                    t.listenerNode.addEventListener("keydown", t.handleKeyDown);
                  } else {
                    O.move.forEach(function (e) {
                      return t.listenerNode.addEventListener(e, t.handleSortMove, false);
                    });
                    O.end.forEach(function (e) {
                      return t.listenerNode.addEventListener(e, t.handleSortEnd, false);
                    });
                  }
                  t.setState({
                    sorting: true,
                    sortingIndex: b
                  });
                  if (d) {
                    d({
                      node: h,
                      index: b,
                      collection: p,
                      isKeySorting: g,
                      nodes: t.manager.getOrderedRefs(),
                      helper: t.helper
                    }, e);
                  }
                  if (g) {
                    t.keyMove(0);
                  }
                }
                var i = t.props;
                var a = i.axis;
                var s = i.getHelperDimensions;
                var l = i.helperClass;
                var u = i.hideSortableGhost;
                var c = i.updateBeforeSortStart;
                var d = i.onSortStart;
                var f = i.useWindowAsScrollContainer;
                var h = n.node;
                var p = n.collection;
                var g = t.manager.isKeySorting;
                var y = function () {
                  if (typeof c == "function") {
                    t._awaitingUpdateBeforeSortStart = true;
                    var n = function (e, t) {
                      try {
                        var n = e();
                      } catch (e) {
                        return t(true, e);
                      }
                      if (n && n.then) {
                        return n.then(t.bind(null, false), t.bind(null, true));
                      } else {
                        return t(false, value);
                      }
                    }(function () {
                      var t = h.sortableInfo.index;
                      return Promise.resolve(c({
                        collection: p,
                        index: t,
                        node: h,
                        isKeySorting: g
                      }, e)).then(function () {});
                    }, function (e, n) {
                      t._awaitingUpdateBeforeSortStart = false;
                      if (e) {
                        throw n;
                      }
                      return n;
                    });
                    if (n && n.then) {
                      return n.then(function () {});
                    }
                  }
                }();
                if (y && y.then) {
                  return y.then(r);
                } else {
                  return r(y);
                }
              }
            }();
            return Promise.resolve(r && r.then ? r.then(function () {}) : undefined);
          } catch (e) {
            return Promise.reject(e);
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleSortMove", function (e) {
          var n = t.props.onSortMove;
          if (typeof e.preventDefault == "function" && e.cancelable) {
            e.preventDefault();
          }
          t.updateHelperPosition(e);
          t.animateNodes();
          t.autoscroll();
          if (n) {
            n(e);
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleSortEnd", function (e) {
          var n = t.props;
          var r = n.hideSortableGhost;
          var i = n.onSortEnd;
          var o = t.manager;
          var a = o.active.collection;
          var s = o.isKeySorting;
          var l = t.manager.getOrderedRefs();
          if (t.listenerNode) {
            if (s) {
              t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, true);
              t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, true);
              t.listenerNode.removeEventListener("keydown", t.handleKeyDown);
            } else {
              O.move.forEach(function (e) {
                return t.listenerNode.removeEventListener(e, t.handleSortMove);
              });
              O.end.forEach(function (e) {
                return t.listenerNode.removeEventListener(e, t.handleSortEnd);
              });
            }
          }
          t.helper.parentNode.removeChild(t.helper);
          if (r && t.sortableGhost) {
            T(t.sortableGhost, {
              opacity: "",
              visibility: ""
            });
          }
          var u = 0;
          var c = l.length;
          for (; u < c; u++) {
            var d = l[u];
            var f = d.node;
            d.edgeOffset = null;
            d.boundingClientRect = null;
            S(f, null);
            I(f, null);
            d.translate = null;
          }
          t.autoScroller.clear();
          t.manager.active = null;
          t.manager.isKeySorting = false;
          t.setState({
            sorting: false,
            sortingIndex: null
          });
          if (typeof i == "function") {
            i({
              collection: a,
              newIndex: t.newIndex,
              oldIndex: t.index,
              isKeySorting: s,
              nodes: l
            }, e);
          }
          t.touched = false;
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "autoscroll", function () {
          var e = t.props.disableAutoscroll;
          var n = t.manager.isKeySorting;
          if (e) {
            t.autoScroller.clear();
            return;
          }
          if (n) {
            var r = objectExtendUtil.extendObject({}, t.translate);
            var i = 0;
            var a = 0;
            if (t.axis.x) {
              r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x));
              i = t.translate.x - r.x;
            }
            if (t.axis.y) {
              r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y));
              a = t.translate.y - r.y;
            }
            t.translate = r;
            S(t.helper, t.translate);
            t.scrollContainer.scrollLeft += i;
            t.scrollContainer.scrollTop += a;
            return;
          }
          t.autoScroller.update({
            height: t.height,
            maxTranslate: t.maxTranslate,
            minTranslate: t.minTranslate,
            translate: t.translate,
            width: t.width
          });
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "onAutoScroll", function (e) {
          t.translate.x += e.left;
          t.translate.y += e.top;
          t.animateNodes();
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleKeyDown", function (e) {
          var n = e.keyCode;
          var r = t.props;
          var i = r.shouldCancelStart;
          var a = r.keyCodes;
          var s = objectExtendUtil.extendObject({}, q, a === undefined ? {} : a);
          if ((!t.manager.active || !!t.manager.isKeySorting) && (!!t.manager.active || !!s.lift.includes(n) && !i(e) && !!t.isValidSortingTarget(e))) {
            e.stopPropagation();
            e.preventDefault();
            if (s.lift.includes(n) && !t.manager.active) {
              t.keyLift(e);
            } else if (s.drop.includes(n) && t.manager.active) {
              t.keyDrop(e);
            } else if (s.cancel.includes(n)) {
              t.newIndex = t.manager.active.index;
              t.keyDrop(e);
            } else if (s.up.includes(n)) {
              t.keyMove(-1);
            } else if (s.down.includes(n)) {
              t.keyMove(1);
            }
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "keyLift", function (e) {
          var n = e.target;
          var r = k(n, function (e) {
            return e.sortableInfo != null;
          }).sortableInfo;
          var i = r.index;
          var o = r.collection;
          t.initialFocusedNode = n;
          t.manager.isKeySorting = true;
          t.manager.active = {
            index: i,
            collection: o
          };
          t.handlePress(e);
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "keyMove", function (e) {
          var n;
          var r;
          var i;
          var o = t.manager.getOrderedRefs();
          var a = o[o.length - 1].node.sortableInfo.index;
          var s = t.newIndex + e;
          var l = t.newIndex;
          if (!(s < 0) && !(s > a)) {
            t.prevIndex = l;
            t.newIndex = s;
            n = t.newIndex;
            r = t.prevIndex;
            var u = n < (i = t.index) && n > r ? n - 1 : n > i && n < r ? n + 1 : n;
            var c = o.find(function (e) {
              return e.node.sortableInfo.index === u;
            });
            var d = c.node;
            var f = t.containerScrollDelta;
            var h = c.boundingClientRect || R(d, f);
            var p = c.translate || {
              x: 0,
              y: 0
            };
            var g = {
              top: h.top + p.y - f.top,
              left: h.left + p.x - f.left
            };
            var y = l < s;
            var m = {
              x: y && t.axis.x ? d.offsetWidth - t.width : 0,
              y: y && t.axis.y ? d.offsetHeight - t.height : 0
            };
            t.handleSortMove({
              pageX: g.left + m.x,
              pageY: g.top + m.y,
              ignoreTransition: e === 0
            });
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "keyDrop", function (e) {
          t.handleSortEnd(e);
          if (t.initialFocusedNode) {
            t.initialFocusedNode.focus();
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "handleKeyEnd", function (e) {
          if (t.manager.active) {
            t.keyDrop(e);
          }
        });
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "isValidSortingTarget", function (e) {
          var n = t.props.useDragHandle;
          var r = e.target;
          var i = k(r, function (e) {
            return e.sortableInfo != null;
          });
          return i && i.sortableInfo && !i.sortableInfo.disabled && (n ? _(r) : r.sortableInfo);
        });
        var t;
        var r = new x();
        y(!e.distance || !e.pressDelay, "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.");
        t.manager = r;
        t.wrappedInstance = reactCoreLibraryReexport.createRef();
        t.sortableContextValue = {
          manager: r
        };
        t.events = {
          end: t.handleEnd,
          move: t.handleMove,
          start: t.handleStart
        };
        return t;
      }
      setPrototypeInheritance.setInheritance(n, t);
      classPropertyUtil.defineClassProps(n, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          var t = this.props.useWindowAsScrollContainer;
          Promise.resolve(this.getContainer()).then(function (n) {
            e.container = n;
            e.document = e.container.ownerDocument || document;
            var r = e.props.contentWindow || e.document.defaultView || window;
            e.contentWindow = typeof r == "function" ? r() : r;
            e.scrollContainer = t ? e.document.scrollingElement || e.document.documentElement : function e(t) {
              var n;
              var r;
              if (t instanceof HTMLElement) {
                n = window.getComputedStyle(t);
                r = /(auto|scroll)/;
                if (["overflow", "overflowX", "overflowY"].find(function (e) {
                  return r.test(n[e]);
                })) {
                  return t;
                } else {
                  return e(t.parentNode);
                }
              } else {
                return null;
              }
            }(e.container) || e.container;
            e.autoScroller = new M(e.scrollContainer, e.onAutoScroll);
            Object.keys(e.events).forEach(function (t) {
              return O[t].forEach(function (n) {
                return e.container.addEventListener(n, e.events[t], false);
              });
            });
            e.container.addEventListener("keydown", e.handleKeyDown);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var e = this;
          if (this.helper && this.helper.parentNode) {
            this.helper.parentNode.removeChild(this.helper);
          }
          if (this.container) {
            Object.keys(this.events).forEach(function (t) {
              return O[t].forEach(function (n) {
                return e.container.removeEventListener(n, e.events[t]);
              });
            });
            this.container.removeEventListener("keydown", this.handleKeyDown);
          }
        }
      }, {
        key: "updateHelperPosition",
        value: function (e) {
          var t = this.props;
          var n = t.lockAxis;
          var r = t.lockOffset;
          var o = t.lockToContainerEdges;
          var a = t.transitionDuration;
          var s = t.keyboardSortingTransitionDuration;
          var l = s === undefined ? a : s;
          var u = this.manager.isKeySorting;
          var c = e.ignoreTransition;
          var d = j(e);
          var f = {
            x: d.x - this.initialOffset.x,
            y: d.y - this.initialOffset.y
          };
          f.y -= window.pageYOffset - this.initialWindowScroll.top;
          f.x -= window.pageXOffset - this.initialWindowScroll.left;
          this.translate = f;
          if (o) {
            var h;
            var p;
            var g;
            var m;
            var v;
            var b;
            var x;
            var w;
            p = (h = {
              height: this.height,
              lockOffset: r,
              width: this.width
            }).height;
            g = h.width;
            v = Array.isArray(m = h.lockOffset) ? m : [m, m];
            y(v.length === 2, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", m);
            x = (b = iterableToArrayUtil_1_1.iterableToArray(v, 2))[0];
            w = b[1];
            var E = [N({
              height: p,
              lockOffset: x,
              width: g
            }), N({
              height: p,
              lockOffset: w,
              width: g
            })];
            var O = iterableToArrayUtil_1_1.iterableToArray(E, 2);
            var C = O[0];
            var T = O[1];
            var k = {
              x: this.width / 2 - C.x,
              y: this.height / 2 - C.y
            };
            var P = {
              x: this.width / 2 - T.x,
              y: this.height / 2 - T.y
            };
            f.x = Z(this.minTranslate.x + k.x, this.maxTranslate.x - P.x, f.x);
            f.y = Z(this.minTranslate.y + k.y, this.maxTranslate.y - P.y, f.y);
          }
          if (n === "x") {
            f.y = 0;
          } else if (n === "y") {
            f.x = 0;
          }
          if (u && l && !c) {
            I(this.helper, l);
          }
          S(this.helper, f);
        }
      }, {
        key: "animateNodes",
        value: function () {
          var e = this.props;
          var t = e.transitionDuration;
          var n = e.hideSortableGhost;
          var r = e.onSortOver;
          var i = this.containerScrollDelta;
          var o = this.windowScrollDelta;
          var a = this.manager.getOrderedRefs();
          var s = {
            left: this.offsetEdge.left + this.translate.x + i.left,
            top: this.offsetEdge.top + this.translate.y + i.top
          };
          var l = this.manager.isKeySorting;
          var u = this.newIndex;
          this.newIndex = null;
          var c = 0;
          var d = a.length;
          for (; c < d; c++) {
            var f = a[c].node;
            var h = f.sortableInfo.index;
            var p = f.offsetWidth;
            var g = f.offsetHeight;
            var y = {
              height: this.height > g ? g / 2 : this.height / 2,
              width: this.width > p ? p / 2 : this.width / 2
            };
            var m = l && h > this.index && h <= u;
            var v = l && h < this.index && h >= u;
            var b = {
              x: 0,
              y: 0
            };
            var x = a[c].edgeOffset;
            if (!x) {
              x = $(f, this.container);
              a[c].edgeOffset = x;
              if (l) {
                a[c].boundingClientRect = R(f, i);
              }
            }
            var w = c < a.length - 1 && a[c + 1];
            var E = c > 0 && a[c - 1];
            if (w && !w.edgeOffset) {
              w.edgeOffset = $(w.node, this.container);
              if (l) {
                w.boundingClientRect = R(w.node, i);
              }
            }
            if (h === this.index) {
              if (n) {
                this.sortableGhost = f;
                T(f, {
                  opacity: 0,
                  visibility: "hidden"
                });
              }
              continue;
            }
            if (t) {
              I(f, t);
            }
            if (this.axis.x) {
              if (this.axis.y) {
                if (v || h < this.index && (s.left + o.left - y.width <= x.left && s.top + o.top <= x.top + y.height || s.top + o.top + y.height <= x.top)) {
                  b.x = this.width + this.marginOffset.x;
                  if (x.left + b.x > this.containerBoundingRect.width - y.width && w) {
                    b.x = w.edgeOffset.left - x.left;
                    b.y = w.edgeOffset.top - x.top;
                  }
                  if (this.newIndex === null) {
                    this.newIndex = h;
                  }
                } else if (m || h > this.index && (s.left + o.left + y.width >= x.left && s.top + o.top + y.height >= x.top || s.top + o.top + y.height >= x.top + g)) {
                  b.x = -(this.width + this.marginOffset.x);
                  if (x.left + b.x < this.containerBoundingRect.left + y.width && E) {
                    b.x = E.edgeOffset.left - x.left;
                    b.y = E.edgeOffset.top - x.top;
                  }
                  this.newIndex = h;
                }
              } else if (m || h > this.index && s.left + o.left + y.width >= x.left) {
                b.x = -(this.width + this.marginOffset.x);
                this.newIndex = h;
              } else if (v || h < this.index && s.left + o.left <= x.left + y.width) {
                b.x = this.width + this.marginOffset.x;
                if (this.newIndex == null) {
                  this.newIndex = h;
                }
              }
            } else if (this.axis.y) {
              if (m || h > this.index && s.top + o.top + y.height >= x.top) {
                b.y = -(this.height + this.marginOffset.y);
                this.newIndex = h;
              } else if (v || h < this.index && s.top + o.top <= x.top + y.height) {
                b.y = this.height + this.marginOffset.y;
                if (this.newIndex == null) {
                  this.newIndex = h;
                }
              }
            }
            S(f, b);
            a[c].translate = b;
          }
          if (this.newIndex == null) {
            this.newIndex = this.index;
          }
          if (l) {
            this.newIndex = u;
          }
          var O = l ? this.prevIndex : u;
          if (r && this.newIndex !== O) {
            r({
              collection: this.manager.active.collection,
              index: this.index,
              newIndex: this.newIndex,
              oldIndex: O,
              isKeySorting: l,
              nodes: a,
              helper: this.helper
            });
          }
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          y(g.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call");
          return this.wrappedInstance.current;
        }
      }, {
        key: "getContainer",
        value: function () {
          var e = this.props.getContainer;
          if (typeof e != "function") {
            return reactDomEntryWrapper.findDOMNode(this);
          } else {
            return e(g.withRef ? this.getWrappedInstance() : undefined);
          }
        }
      }, {
        key: "render",
        value: function () {
          var t = g.withRef ? this.wrappedInstance : null;
          return reactCoreLibraryReexport.createElement(H.Provider, {
            value: this.sortableContextValue
          }, reactCoreLibraryReexport.createElement(e, objectAssignUtil.objectAssign({
            ref: t
          }, E(this.props, V))));
        }
      }, {
        key: "helperContainer",
        get: function () {
          var e = this.props.helperContainer;
          if (typeof e == "function") {
            return e();
          } else {
            return this.props.helperContainer || this.document.body;
          }
        }
      }, {
        key: "containerScrollDelta",
        get: function () {
          if (this.props.useWindowAsScrollContainer) {
            return {
              left: 0,
              top: 0
            };
          } else {
            return {
              left: this.scrollContainer.scrollLeft - this.initialScroll.left,
              top: this.scrollContainer.scrollTop - this.initialScroll.top
            };
          }
        }
      }, {
        key: "windowScrollDelta",
        get: function () {
          return {
            left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
            top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
          };
        }
      }]);
      return n;
    }(reactCoreLibraryReexport.Component);
    objectPropertySetter.setObjectProperty(t, "displayName", A("sortableList", e));
    objectPropertySetter.setObjectProperty(t, "defaultProps", G);
    objectPropertySetter.setObjectProperty(t, "propTypes", L);
    return n;
  }
  var W = {
    index: b.number.isRequired,
    collection: b.oneOfType([b.number, b.string]),
    disabled: b.bool
  };
  var B = Object.keys(W);
  function K(e) {
    var t;
    var n;
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withRef: false
    };
    n = t = function (t) {
      function n() {
        classCallCheckUtil.classCallCheck(this, n);
        var e;
        var t;
        var r = arguments.length;
        var i = Array(r);
        var o = 0;
        for (; o < r; o++) {
          i[o] = arguments[o];
        }
        t = possibleConstructorReturn.constructorReturn(this, (e = getPrototypeOfHelper.getPrototypeOf(n)).call.apply(e, [this].concat(i)));
        objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(assertThisInitialized.assertThisInit(t)), "wrappedInstance", reactCoreLibraryReexport.createRef());
        return t;
      }
      setPrototypeInheritance.setInheritance(n, t);
      classPropertyUtil.defineClassProps(n, [{
        key: "componentDidMount",
        value: function () {
          this.register();
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          if (this.node) {
            if (e.index !== this.props.index) {
              this.node.sortableInfo.index = this.props.index;
            }
            if (e.disabled !== this.props.disabled) {
              this.node.sortableInfo.disabled = this.props.disabled;
            }
          }
          if (e.collection !== this.props.collection) {
            this.unregister(e.collection);
            this.register();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.unregister();
        }
      }, {
        key: "register",
        value: function () {
          var e = this.props;
          var t = e.collection;
          var n = e.disabled;
          var r = e.index;
          var i = reactDomEntryWrapper.findDOMNode(this);
          i.sortableInfo = {
            collection: t,
            disabled: n,
            index: r,
            manager: this.context.manager
          };
          this.node = i;
          this.ref = {
            node: i
          };
          this.context.manager.add(t, this.ref);
        }
      }, {
        key: "unregister",
        value: function (e = this.props.collection) {
          this.context.manager.remove(e, this.ref);
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          y(i.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call");
          return this.wrappedInstance.current;
        }
      }, {
        key: "render",
        value: function () {
          var t = i.withRef ? this.wrappedInstance : null;
          return reactCoreLibraryReexport.createElement(e, objectAssignUtil.objectAssign({
            ref: t
          }, E(this.props, B)));
        }
      }]);
      return n;
    }(reactCoreLibraryReexport.Component);
    objectPropertySetter.setObjectProperty(t, "displayName", A("sortableElement", e));
    objectPropertySetter.setObjectProperty(t, "contextType", H);
    objectPropertySetter.setObjectProperty(t, "propTypes", W);
    objectPropertySetter.setObjectProperty(t, "defaultProps", {
      collection: 0
    });
    return n;
  }
  require.d(exports, {
    sortableContainer: function () {
      return U;
    },
    sortableHandle: function () {
      return F;
    },
    sortableElement: function () {
      return K;
    }
  });
}