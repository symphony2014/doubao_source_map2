// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LB' to 'DndContext'
// - Renamed export 'Zj' to 'useDroppable'
// - Renamed export 'g4' to 'KeyboardCode'
// - Renamed export 'LO' to 'TouchSensor'
// - Renamed export 'Mk' to 'ScrollStrategy'
// - Renamed export 'VT' to 'useSensor'
// - Renamed export 'Dy' to 'useSensors'
// - Renamed export 'Lg' to 'KeyboardSensor'
// - Renamed export 'MA' to 'MouseSensor'
// - Renamed export 'ey' to 'closestCenter'
// - Renamed export 'VK' to 'getBoundingRect'
// - Renamed export 'hI' to 'getScrollAncestors'
// - Renamed export 'Cj' to 'useDndContext'
// - Renamed export 'pE' to 'closestCorners'
// - Renamed export 'y9' to 'DndContextValue'
// - Renamed export '_8' to 'getFirstCollision'
// - Renamed export 'O1' to 'useDraggable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27079.aa80b040.js
         * chunkId: 27079
         * moduleId: 743382
         */
module.exports = function (module, exports, require) {
  let r;
  var i;
  var a;
  var l;
  var o;
  var s;
  var u;
  var d;
  var c;
  var h;
  var p;
  var f;
  var g;
  var v;
  var b;
  var m;
  var y;
  var x;
  var E;
  var w;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactDomUtils = require("react-dom-utils") /*id: 92997*/;
  let S = {
    display: "none"
  };
  function T(e) {
    let {
      id: t,
      value: n
    } = e;
    return reactCoreLibraryReexport.createElement("div", {
      id: t,
      style: S
    }, n);
  }
  function _(e) {
    let {
      id: t,
      announcement: n,
      ariaLiveType: r = "assertive"
    } = e;
    return reactCoreLibraryReexport.createElement("div", {
      id: t,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(100%)",
        whiteSpace: "nowrap"
      },
      role: "status",
      "aria-live": r,
      "aria-atomic": true
    }, n);
  }
  let M = reactCoreLibraryReexport.createContext(null);
  let P = {
    draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
  };
  let A = {
    onDragStart(e) {
      let {
        active: t
      } = e;
      return "Picked up draggable item " + t.id + ".";
    },
    onDragOver(e) {
      let {
        active: t,
        over: n
      } = e;
      if (n) {
        return "Draggable item " + t.id + " was moved over droppable area " + n.id + ".";
      } else {
        return "Draggable item " + t.id + " is no longer over a droppable area.";
      }
    },
    onDragEnd(e) {
      let {
        active: t,
        over: n
      } = e;
      if (n) {
        return "Draggable item " + t.id + " was dropped over droppable area " + n.id;
      } else {
        return "Draggable item " + t.id + " was dropped.";
      }
    },
    onDragCancel(e) {
      let {
        active: t
      } = e;
      return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
    }
  };
  function R(e) {
    let {
      announcements: t = A,
      container: n,
      hiddenTextDescribedById: r,
      screenReaderInstructions: i = P
    } = e;
    let {
      announce: a,
      announcement: l
    } = function () {
      let [e, t] = reactCoreLibraryReexport.useState("");
      return {
        announce: reactCoreLibraryReexport.useCallback(e => {
          if (e != null) {
            t(e);
          }
        }, []),
        announcement: e
      };
    }();
    let o = reactDomUtils.useId("DndLiveRegion");
    let [s, u] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      u(true);
    }, []);
    (function (e) {
      let t = reactCoreLibraryReexport.useContext(M);
      reactCoreLibraryReexport.useEffect(() => {
        if (!t) {
          throw Error("useDndMonitor must be used within a children of <DndContext>");
        }
        return t(e);
      }, [e, t]);
    })(reactCoreLibraryReexport.useMemo(() => ({
      onDragStart(e) {
        let {
          active: n
        } = e;
        a(t.onDragStart({
          active: n
        }));
      },
      onDragMove(e) {
        let {
          active: n,
          over: r
        } = e;
        if (t.onDragMove) {
          a(t.onDragMove({
            active: n,
            over: r
          }));
        }
      },
      onDragOver(e) {
        let {
          active: n,
          over: r
        } = e;
        a(t.onDragOver({
          active: n,
          over: r
        }));
      },
      onDragEnd(e) {
        let {
          active: n,
          over: r
        } = e;
        a(t.onDragEnd({
          active: n,
          over: r
        }));
      },
      onDragCancel(e) {
        let {
          active: n,
          over: r
        } = e;
        a(t.onDragCancel({
          active: n,
          over: r
        }));
      }
    }), [a, t]));
    if (!s) {
      return null;
    }
    let d = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(T, {
      id: r,
      value: i.draggable
    }), reactCoreLibraryReexport.createElement(_, {
      id: o,
      announcement: l
    }));
    if (n) {
      return reactDomEntryWrapper.createPortal(d, n);
    } else {
      return d;
    }
  }
  function I() {}
  function L(e, t) {
    return reactCoreLibraryReexport.useMemo(() => ({
      sensor: e,
      options: t ?? {}
    }), [e, t]);
  }
  function O() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return reactCoreLibraryReexport.useMemo(() => [...t].filter(e => e != null), [...t]);
  }
  (i = p ||= {}).DragStart = "dragStart";
  i.DragMove = "dragMove";
  i.DragEnd = "dragEnd";
  i.DragCancel = "dragCancel";
  i.DragOver = "dragOver";
  i.RegisterDroppable = "registerDroppable";
  i.SetDroppableDisabled = "setDroppableDisabled";
  i.UnregisterDroppable = "unregisterDroppable";
  let H = Object.freeze({
    x: 0,
    y: 0
  });
  function V(e, t) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function N(e, t) {
    let {
      data: {
        value: n
      }
    } = e;
    let {
      data: {
        value: r
      }
    } = t;
    return n - r;
  }
  function j(e, t) {
    let {
      data: {
        value: n
      }
    } = e;
    let {
      data: {
        value: r
      }
    } = t;
    return r - n;
  }
  function $(e) {
    let {
      left: t,
      top: n,
      height: r,
      width: i
    } = e;
    return [{
      x: t,
      y: n
    }, {
      x: t + i,
      y: n
    }, {
      x: t,
      y: n + r
    }, {
      x: t + i,
      y: n + r
    }];
  }
  function U(e, t) {
    if (!e || e.length === 0) {
      return null;
    }
    let [n] = e;
    if (t) {
      return n[t];
    } else {
      return n;
    }
  }
  function F(e, t = e.left, n = e.top) {
    return {
      x: t + e.width * 0.5,
      y: n + e.height * 0.5
    };
  }
  let B = e => {
    let {
      collisionRect: t,
      droppableRects: n,
      droppableContainers: r
    } = e;
    let i = F(t, t.left, t.top);
    let a = [];
    for (let e of r) {
      let {
        id: t
      } = e;
      let r = n.get(t);
      if (r) {
        let n = V(F(r), i);
        a.push({
          id: t,
          data: {
            droppableContainer: e,
            value: n
          }
        });
      }
    }
    return a.sort(N);
  };
  let G = e => {
    let {
      collisionRect: t,
      droppableRects: n,
      droppableContainers: r
    } = e;
    let i = $(t);
    let a = [];
    for (let e of r) {
      let {
        id: t
      } = e;
      let r = n.get(t);
      if (r) {
        let n = $(r);
        let l = Number((i.reduce((e, t, r) => e + V(n[r], t), 0) / 4).toFixed(4));
        a.push({
          id: t,
          data: {
            droppableContainer: e,
            value: l
          }
        });
      }
    }
    return a.sort(N);
  };
  let K = e => {
    let {
      collisionRect: t,
      droppableRects: n,
      droppableContainers: r
    } = e;
    let i = [];
    for (let e of r) {
      let {
        id: r
      } = e;
      let a = n.get(r);
      if (a) {
        let n = function (e, t) {
          let n = Math.max(t.top, e.top);
          let r = Math.max(t.left, e.left);
          let i = Math.min(t.left + t.width, e.left + e.width);
          let a = Math.min(t.top + t.height, e.top + e.height);
          if (r < i && n < a) {
            let l = t.width * t.height;
            let o = e.width * e.height;
            let s = (i - r) * (a - n);
            return Number((s / (l + o - s)).toFixed(4));
          }
          return 0;
        }(a, t);
        if (n > 0) {
          i.push({
            id: r,
            data: {
              droppableContainer: e,
              value: n
            }
          });
        }
      }
    }
    return i.sort(j);
  };
  function X(e, t) {
    if (e && t) {
      return {
        x: e.left - t.left,
        y: e.top - t.top
      };
    } else {
      return H;
    }
  }
  let z = function (e) {
    var t = arguments.length;
    var n = Array(t > 1 ? t - 1 : 0);
    var r = 1;
    for (; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    return n.reduce((e, t) => ({
      ...e,
      top: e.top + +t.y,
      bottom: e.bottom + +t.y,
      left: e.left + +t.x,
      right: e.right + +t.x
    }), {
      ...e
    });
  };
  function Z(e) {
    if (e.startsWith("matrix3d(")) {
      let t = e.slice(9, -1).split(/, /);
      return {
        x: +t[12],
        y: +t[13],
        scaleX: +t[0],
        scaleY: +t[5]
      };
    }
    if (e.startsWith("matrix(")) {
      let t = e.slice(7, -1).split(/, /);
      return {
        x: +t[4],
        y: +t[5],
        scaleX: +t[0],
        scaleY: +t[3]
      };
    }
    return null;
  }
  let W = {
    ignoreTransform: false
  };
  function Y(e, t = W) {
    let n = e.getBoundingClientRect();
    if (t.ignoreTransform) {
      let {
        transform: t,
        transformOrigin: r
      } = reactDomUtils.getWindow(e).getComputedStyle(e);
      if (t) {
        n = function (e, t, n) {
          let r = Z(t);
          if (!r) {
            return e;
          }
          let {
            scaleX: i,
            scaleY: a,
            x: l,
            y: o
          } = r;
          let s = e.left - l - (1 - i) * parseFloat(n);
          let u = e.top - o - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1));
          let d = i ? e.width / i : e.width;
          let c = a ? e.height / a : e.height;
          return {
            width: d,
            height: c,
            top: u,
            right: s + d,
            bottom: u + c,
            left: s
          };
        }(n, t, r);
      }
    }
    let {
      top: r,
      left: i,
      width: a,
      height: l,
      bottom: o,
      right: s
    } = n;
    return {
      top: r,
      left: i,
      width: a,
      height: l,
      bottom: o,
      right: s
    };
  }
  function J(e) {
    return Y(e, {
      ignoreTransform: true
    });
  }
  function q(e, t) {
    let n = [];
    if (e) {
      return function r(i) {
        var a;
        if (t != null && n.length >= t || !i) {
          return n;
        }
        if (reactDomUtils.isDocument(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) {
          n.push(i.scrollingElement);
          return n;
        }
        if (!reactDomUtils.isHTMLElement(i) || reactDomUtils.isSVGElement(i) || n.includes(i)) {
          return n;
        }
        let l = reactDomUtils.getWindow(e).getComputedStyle(i);
        if (i !== e && function (e, t = reactDomUtils.getWindow(e).getComputedStyle(e)) {
          let n = /(auto|scroll|overlay)/;
          return ["overflow", "overflowX", "overflowY"].some(e => {
            let r = t[e];
            return typeof r == "string" && n.test(r);
          });
        }(i, l)) {
          n.push(i);
        }
        if ((a = l) === undefined) {
          a = reactDomUtils.getWindow(i).getComputedStyle(i);
        }
        if (a.position === "fixed") {
          return n;
        } else {
          return r(i.parentNode);
        }
      }(e);
    } else {
      return n;
    }
  }
  function Q(e) {
    let [t] = q(e, 1);
    return t ?? null;
  }
  function ee(e) {
    if (reactDomUtils.canUseDom && e) {
      if (reactDomUtils.isWindow(e)) {
        return e;
      } else if (reactDomUtils.isNode(e)) {
        if (reactDomUtils.isDocument(e) || e === reactDomUtils.getDocument(e).scrollingElement) {
          return window;
        } else if (reactDomUtils.isHTMLElement(e)) {
          return e;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  function et(e) {
    if (reactDomUtils.isWindow(e)) {
      return e.scrollX;
    } else {
      return e.scrollLeft;
    }
  }
  function en(e) {
    if (reactDomUtils.isWindow(e)) {
      return e.scrollY;
    } else {
      return e.scrollTop;
    }
  }
  function er(e) {
    return {
      x: et(e),
      y: en(e)
    };
  }
  function ei(e) {
    return !!reactDomUtils.canUseDom && !!e && e === document.scrollingElement;
  }
  function ea(e) {
    let t = {
      x: 0,
      y: 0
    };
    let n = ei(e) ? {
      height: window.innerHeight,
      width: window.innerWidth
    } : {
      height: e.clientHeight,
      width: e.clientWidth
    };
    let r = {
      x: e.scrollWidth - n.width,
      y: e.scrollHeight - n.height
    };
    let i = e.scrollTop <= t.y;
    let a = e.scrollLeft <= t.x;
    return {
      isTop: i,
      isLeft: a,
      isBottom: e.scrollTop >= r.y,
      isRight: e.scrollLeft >= r.x,
      maxScroll: r,
      minScroll: t
    };
  }
  (a = f ||= {})[a.Forward = 1] = "Forward";
  a[a.Backward = -1] = "Backward";
  let el = {
    x: 0.2,
    y: 0.2
  };
  function eo(e) {
    return e.reduce((e, t) => reactDomUtils.scaleUp(e, er(t)), H);
  }
  function es(e, t = Y) {
    if (!e) {
      return;
    }
    let {
      top: n,
      left: r,
      bottom: i,
      right: a
    } = t(e);
    if (Q(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth)) {
      e.scrollIntoView({
        block: "center",
        inline: "center"
      });
    }
  }
  let eu = [["x", ["left", "right"], function (e) {
    return e.reduce((e, t) => e + et(t), 0);
  }], ["y", ["top", "bottom"], function (e) {
    return e.reduce((e, t) => e + en(t), 0);
  }]];
  class ed {
    constructor(e, t) {
      this.rect = undefined;
      this.width = undefined;
      this.height = undefined;
      this.top = undefined;
      this.bottom = undefined;
      this.right = undefined;
      this.left = undefined;
      let n = q(t);
      let r = eo(n);
      this.rect = {
        ...e
      };
      this.width = e.width;
      this.height = e.height;
      for (let [t, i, a] of eu) {
        for (let e of i) {
          Object.defineProperty(this, e, {
            get: () => {
              let i = a(n);
              let l = r[t] - i;
              return this.rect[e] + l;
            },
            enumerable: true
          });
        }
      }
      Object.defineProperty(this, "rect", {
        enumerable: false
      });
    }
  }
  class ec {
    constructor(e) {
      this.target = undefined;
      this.listeners = [];
      this.removeAll = () => {
        this.listeners.forEach(e => {
          var t;
          if ((t = this.target) == null) {
            return undefined;
          } else {
            return t.removeEventListener(...e);
          }
        });
      };
      this.target = e;
    }
    add(e, t, n) {
      var r;
      if ((r = this.target) != null) {
        r.addEventListener(e, t, n);
      }
      this.listeners.push([e, t, n]);
    }
  }
  function eh(e, t) {
    let n = Math.abs(e.x);
    let r = Math.abs(e.y);
    if (typeof t == "number") {
      return Math.sqrt(n ** 2 + r ** 2) > t;
    } else if ("x" in t && "y" in t) {
      return n > t.x && r > t.y;
    } else if ("x" in t) {
      return n > t.x;
    } else {
      return "y" in t && r > t.y;
    }
  }
  function ep(e) {
    e.preventDefault();
  }
  function ef(e) {
    e.stopPropagation();
  }
  (l = g ||= {}).Click = "click";
  l.DragStart = "dragstart";
  l.Keydown = "keydown";
  l.ContextMenu = "contextmenu";
  l.Resize = "resize";
  l.SelectionChange = "selectionchange";
  l.VisibilityChange = "visibilitychange";
  (o = v ||= {}).Space = "Space";
  o.Down = "ArrowDown";
  o.Right = "ArrowRight";
  o.Left = "ArrowLeft";
  o.Up = "ArrowUp";
  o.Esc = "Escape";
  o.Enter = "Enter";
  let eg = {
    start: [v.Space, v.Enter],
    cancel: [v.Esc],
    end: [v.Space, v.Enter]
  };
  let ev = (e, t) => {
    let {
      currentCoordinates: n
    } = t;
    switch (e.code) {
      case v.Right:
        return {
          ...n,
          x: n.x + 25
        };
      case v.Left:
        return {
          ...n,
          x: n.x - 25
        };
      case v.Down:
        return {
          ...n,
          y: n.y + 25
        };
      case v.Up:
        return {
          ...n,
          y: n.y - 25
        };
    }
  };
  class eb {
    constructor(e) {
      this.props = undefined;
      this.autoScrollEnabled = false;
      this.referenceCoordinates = undefined;
      this.listeners = undefined;
      this.windowListeners = undefined;
      this.props = e;
      let {
        event: {
          target: t
        }
      } = e;
      this.props = e;
      this.listeners = new ec(reactDomUtils.getDocument(t));
      this.windowListeners = new ec(reactDomUtils.getWindow(t));
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.attach();
    }
    attach() {
      this.handleStart();
      this.windowListeners.add(g.Resize, this.handleCancel);
      this.windowListeners.add(g.VisibilityChange, this.handleCancel);
      setTimeout(() => this.listeners.add(g.Keydown, this.handleKeyDown));
    }
    handleStart() {
      let {
        activeNode: e,
        onStart: t
      } = this.props;
      let n = e.node.current;
      if (n) {
        es(n);
      }
      t(H);
    }
    handleKeyDown(e) {
      if (reactDomUtils.isKeyboardEvent(e)) {
        let {
          active: t,
          context: n,
          options: r
        } = this.props;
        let {
          keyboardCodes: i = eg,
          coordinateGetter: a = ev,
          scrollBehavior: l = "smooth"
        } = r;
        let {
          code: o
        } = e;
        if (i.end.includes(o)) {
          this.handleEnd(e);
          return;
        }
        if (i.cancel.includes(o)) {
          this.handleCancel(e);
          return;
        }
        let {
          collisionRect: s
        } = n.current;
        let u = s ? {
          x: s.left,
          y: s.top
        } : H;
        this.referenceCoordinates ||= u;
        let d = a(e, {
          active: t,
          context: n.current,
          currentCoordinates: u
        });
        if (d) {
          let t = reactDomUtils.scaleDown(d, u);
          let r = {
            x: 0,
            y: 0
          };
          let {
            scrollableAncestors: i
          } = n.current;
          for (let n of i) {
            let i = e.code;
            let {
              isTop: a,
              isRight: o,
              isLeft: s,
              isBottom: u,
              maxScroll: c,
              minScroll: h
            } = ea(n);
            let p = function (e) {
              if (e === document.scrollingElement) {
                let {
                  innerWidth: e,
                  innerHeight: t
                } = window;
                return {
                  top: 0,
                  left: 0,
                  right: e,
                  bottom: t,
                  width: e,
                  height: t
                };
              }
              let {
                top: t,
                left: n,
                right: r,
                bottom: i
              } = e.getBoundingClientRect();
              return {
                top: t,
                left: n,
                right: r,
                bottom: i,
                width: e.clientWidth,
                height: e.clientHeight
              };
            }(n);
            let f = {
              x: Math.min(i === v.Right ? p.right - p.width / 2 : p.right, Math.max(i === v.Right ? p.left : p.left + p.width / 2, d.x)),
              y: Math.min(i === v.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === v.Down ? p.top : p.top + p.height / 2, d.y))
            };
            let g = i === v.Right && !o || i === v.Left && !s;
            let b = i === v.Down && !u || i === v.Up && !a;
            if (g && f.x !== d.x) {
              let e = n.scrollLeft + t.x;
              let a = i === v.Right && e <= c.x || i === v.Left && e >= h.x;
              if (a && !t.y) {
                n.scrollTo({
                  left: e,
                  behavior: l
                });
                return;
              }
              if (a) {
                r.x = n.scrollLeft - e;
              } else {
                r.x = i === v.Right ? n.scrollLeft - c.x : n.scrollLeft - h.x;
              }
              if (r.x) {
                n.scrollBy({
                  left: -r.x,
                  behavior: l
                });
              }
              break;
            }
            if (b && f.y !== d.y) {
              let e = n.scrollTop + t.y;
              let a = i === v.Down && e <= c.y || i === v.Up && e >= h.y;
              if (a && !t.x) {
                n.scrollTo({
                  top: e,
                  behavior: l
                });
                return;
              }
              if (a) {
                r.y = n.scrollTop - e;
              } else {
                r.y = i === v.Down ? n.scrollTop - c.y : n.scrollTop - h.y;
              }
              if (r.y) {
                n.scrollBy({
                  top: -r.y,
                  behavior: l
                });
              }
              break;
            }
          }
          this.handleMove(e, reactDomUtils.scaleUp(reactDomUtils.scaleDown(d, this.referenceCoordinates), r));
        }
      }
    }
    handleMove(e, t) {
      let {
        onMove: n
      } = this.props;
      e.preventDefault();
      n(t);
    }
    handleEnd(e) {
      let {
        onEnd: t
      } = this.props;
      e.preventDefault();
      this.detach();
      t();
    }
    handleCancel(e) {
      let {
        onCancel: t
      } = this.props;
      e.preventDefault();
      this.detach();
      t();
    }
    detach() {
      this.listeners.removeAll();
      this.windowListeners.removeAll();
    }
  }
  function em(e) {
    return !!e && !!("distance" in e);
  }
  function ey(e) {
    return !!e && !!("delay" in e);
  }
  eb.activators = [{
    eventName: "onKeyDown",
    handler: (e, t, n) => {
      let {
        keyboardCodes: r = eg,
        onActivation: i
      } = t;
      let {
        active: a
      } = n;
      let {
        code: l
      } = e.nativeEvent;
      if (r.start.includes(l)) {
        let t = a.activatorNode.current;
        return (!t || e.target === t) && (e.preventDefault(), i == null || i({
          event: e.nativeEvent
        }), true);
      }
      return false;
    }
  }];
  class ex {
    constructor(e, t, n) {
      if (n === undefined) {
        n = function (e) {
          let {
            EventTarget: t
          } = reactDomUtils.getWindow(e);
          if (e instanceof t) {
            return e;
          } else {
            return reactDomUtils.getDocument(e);
          }
        }(e.event.target);
      }
      this.props = undefined;
      this.events = undefined;
      this.autoScrollEnabled = true;
      this.document = undefined;
      this.activated = false;
      this.initialCoordinates = undefined;
      this.timeoutId = null;
      this.listeners = undefined;
      this.documentListeners = undefined;
      this.windowListeners = undefined;
      this.props = e;
      this.events = t;
      let {
        event: i
      } = e;
      let {
        target: a
      } = i;
      this.props = e;
      this.events = t;
      this.document = reactDomUtils.getDocument(a);
      this.documentListeners = new ec(this.document);
      this.listeners = new ec(n);
      this.windowListeners = new ec(reactDomUtils.getWindow(a));
      this.initialCoordinates = reactDomUtils.getEventCoordinates(i) ?? H;
      this.handleStart = this.handleStart.bind(this);
      this.handleMove = this.handleMove.bind(this);
      this.handleEnd = this.handleEnd.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
      this.removeTextSelection = this.removeTextSelection.bind(this);
      this.attach();
    }
    attach() {
      let {
        events: e,
        props: {
          options: {
            activationConstraint: t
          }
        }
      } = this;
      this.listeners.add(e.move.name, this.handleMove, {
        passive: false
      });
      this.listeners.add(e.end.name, this.handleEnd);
      this.windowListeners.add(g.Resize, this.handleCancel);
      this.windowListeners.add(g.DragStart, ep);
      this.windowListeners.add(g.VisibilityChange, this.handleCancel);
      this.windowListeners.add(g.ContextMenu, ep);
      this.documentListeners.add(g.Keydown, this.handleKeydown);
      if (t) {
        if (em(t)) {
          return;
        }
        if (ey(t)) {
          this.timeoutId = setTimeout(this.handleStart, t.delay);
          return;
        }
      }
      this.handleStart();
    }
    detach() {
      this.listeners.removeAll();
      this.windowListeners.removeAll();
      setTimeout(this.documentListeners.removeAll, 50);
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
    handleStart() {
      let {
        initialCoordinates: e
      } = this;
      let {
        onStart: t
      } = this.props;
      if (e) {
        this.activated = true;
        this.documentListeners.add(g.Click, ef, {
          capture: true
        });
        this.removeTextSelection();
        this.documentListeners.add(g.SelectionChange, this.removeTextSelection);
        t(e);
      }
    }
    handleMove(e) {
      let {
        activated: n,
        initialCoordinates: r,
        props: i
      } = this;
      let {
        onMove: a,
        options: {
          activationConstraint: l
        }
      } = i;
      if (!r) {
        return;
      }
      let o = reactDomUtils.getEventCoordinates(e) ?? H;
      let s = reactDomUtils.scaleDown(r, o);
      if (!n && l) {
        if (ey(l)) {
          if (eh(s, l.tolerance)) {
            return this.handleCancel();
          } else {
            return undefined;
          }
        }
        if (em(l)) {
          if (l.tolerance != null && eh(s, l.tolerance)) {
            return this.handleCancel();
          } else if (eh(s, l.distance)) {
            return this.handleStart();
          } else {
            return undefined;
          }
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      a(o);
    }
    handleEnd() {
      let {
        onEnd: e
      } = this.props;
      this.detach();
      e();
    }
    handleCancel() {
      let {
        onCancel: e
      } = this.props;
      this.detach();
      e();
    }
    handleKeydown(e) {
      if (e.code === v.Esc) {
        this.handleCancel();
      }
    }
    removeTextSelection() {
      var e;
      if ((e = this.document.getSelection()) != null) {
        e.removeAllRanges();
      }
    }
  }
  let eE = {
    move: {
      name: "pointermove"
    },
    end: {
      name: "pointerup"
    }
  };
  class ew extends ex {
    constructor(e) {
      let {
        event: t
      } = e;
      super(e, eE, reactDomUtils.getDocument(t.target));
    }
  }
  ew.activators = [{
    eventName: "onPointerDown",
    handler: (e, t) => {
      let {
        nativeEvent: n
      } = e;
      let {
        onActivation: r
      } = t;
      return !!n.isPrimary && n.button === 0 && (r == null || r({
        event: n
      }), true);
    }
  }];
  let eC = {
    move: {
      name: "mousemove"
    },
    end: {
      name: "mouseup"
    }
  };
  (s = b ||= {})[s.RightClick = 2] = "RightClick";
  class eD extends ex {
    constructor(e) {
      super(e, eC, reactDomUtils.getDocument(e.event.target));
    }
  }
  eD.activators = [{
    eventName: "onMouseDown",
    handler: (e, t) => {
      let {
        nativeEvent: n
      } = e;
      let {
        onActivation: r
      } = t;
      return n.button !== b.RightClick && (r == null || r({
        event: n
      }), true);
    }
  }];
  let ek = {
    move: {
      name: "touchmove"
    },
    end: {
      name: "touchend"
    }
  };
  class eS extends ex {
    constructor(e) {
      super(e, ek);
    }
    static setup() {
      window.addEventListener(ek.move.name, e, {
        capture: false,
        passive: false
      });
      return function () {
        window.removeEventListener(ek.move.name, e);
      };
      function e() {}
    }
  }
  eS.activators = [{
    eventName: "onTouchStart",
    handler: (e, t) => {
      let {
        nativeEvent: n
      } = e;
      let {
        onActivation: r
      } = t;
      let {
        touches: i
      } = n;
      return !(i.length > 1) && (r == null || r({
        event: n
      }), true);
    }
  }];
  (u = m ||= {})[u.Pointer = 0] = "Pointer";
  u[u.DraggableRect = 1] = "DraggableRect";
  (d = y ||= {})[d.TreeOrder = 0] = "TreeOrder";
  d[d.ReversedTreeOrder = 1] = "ReversedTreeOrder";
  let eT = {
    x: {
      [f.Backward]: false,
      [f.Forward]: false
    },
    y: {
      [f.Backward]: false,
      [f.Forward]: false
    }
  };
  (c = x ||= {})[c.Always = 0] = "Always";
  c[c.BeforeDragging = 1] = "BeforeDragging";
  c[c.WhileDragging = 2] = "WhileDragging";
  (E ||= {}).Optimized = "optimized";
  let e_ = new Map();
  function eM(e, t) {
    return reactDomUtils.useMergedRef(n => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
  }
  function eP(e) {
    let {
      callback: t,
      disabled: n
    } = e;
    let r = reactDomUtils.useEventCallback(t);
    let i = reactCoreLibraryReexport.useMemo(() => {
      if (n || typeof window == "undefined" || window.ResizeObserver === undefined) {
        return;
      }
      let {
        ResizeObserver: e
      } = window;
      return new e(r);
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => () => i == null ? undefined : i.disconnect(), [i]);
    return i;
  }
  function eA(e) {
    return new ed(Y(e), e);
  }
  function eR(e, t = eA, n) {
    let [r, i] = reactCoreLibraryReexport.useReducer(function (r) {
      if (!e) {
        return null;
      }
      if (e.isConnected === false) {
        return r ?? n ?? null;
      }
      let a = t(e);
      if (JSON.stringify(r) === JSON.stringify(a)) {
        return r;
      } else {
        return a;
      }
    }, null);
    let a = function (e) {
      let {
        callback: t,
        disabled: n
      } = e;
      let r = reactDomUtils.useEventCallback(t);
      let i = reactCoreLibraryReexport.useMemo(() => {
        if (n || typeof window == "undefined" || window.MutationObserver === undefined) {
          return;
        }
        let {
          MutationObserver: e
        } = window;
        return new e(r);
      }, [r, n]);
      reactCoreLibraryReexport.useEffect(() => () => i == null ? undefined : i.disconnect(), [i]);
      return i;
    }({
      callback(t) {
        if (e) {
          for (let n of t) {
            let {
              type: t,
              target: r
            } = n;
            if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
              i();
              break;
            }
          }
        }
      }
    });
    let l = eP({
      callback: i
    });
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      i();
      if (e) {
        if (l != null) {
          l.observe(e);
        }
        if (a != null) {
          a.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      } else {
        if (l != null) {
          l.disconnect();
        }
        if (a != null) {
          a.disconnect();
        }
      }
    }, [e]);
    return r;
  }
  let eI = [];
  function eL(e, t = []) {
    let n = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      n.current = null;
    }, t);
    reactCoreLibraryReexport.useEffect(() => {
      let t = e !== H;
      if (t && !n.current) {
        n.current = e;
      }
      if (!t && n.current) {
        n.current = null;
      }
    }, [e]);
    if (n.current) {
      return reactDomUtils.scaleDown(e, n.current);
    } else {
      return H;
    }
  }
  function eO(e) {
    return reactCoreLibraryReexport.useMemo(() => e ? function (e) {
      let t = e.innerWidth;
      let n = e.innerHeight;
      return {
        top: 0,
        left: 0,
        right: t,
        bottom: n,
        width: t,
        height: n
      };
    }(e) : null, [e]);
  }
  let eH = [];
  function eV(e) {
    if (!e) {
      return null;
    }
    if (e.children.length > 1) {
      return e;
    }
    let t = e.children[0];
    if (reactDomUtils.isHTMLElement(t)) {
      return t;
    } else {
      return e;
    }
  }
  let eN = [{
    sensor: ew,
    options: {}
  }, {
    sensor: eb,
    options: {}
  }];
  let ej = {
    current: {}
  };
  let e$ = {
    draggable: {
      measure: J
    },
    droppable: {
      measure: J,
      strategy: x.WhileDragging,
      frequency: E.Optimized
    },
    dragOverlay: {
      measure: Y
    }
  };
  class eU extends Map {
    get(e) {
      var t;
      if (e != null && (t = super.get(e)) != null) {
        return t;
      } else {
        return undefined;
      }
    }
    toArray() {
      return Array.from(this.values());
    }
    getEnabled() {
      return this.toArray().filter(e => {
        let {
          disabled: t
        } = e;
        return !t;
      });
    }
    getNodeFor(e) {
      var n;
      return ((n = this.get(e)) == null ? undefined : n.node.current) ?? undefined;
    }
  }
  let eF = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new eU(),
    over: null,
    dragOverlay: {
      nodeRef: {
        current: null
      },
      rect: null,
      setRef: I
    },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: e$,
    measureDroppableContainers: I,
    windowRect: null,
    measuringScheduled: false
  };
  let eB = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: {
      draggable: ""
    },
    dispatch: I,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: I
  };
  let eG = reactCoreLibraryReexport.createContext(eB);
  let eK = reactCoreLibraryReexport.createContext(eF);
  function eX() {
    return {
      draggable: {
        active: null,
        initialCoordinates: {
          x: 0,
          y: 0
        },
        nodes: new Map(),
        translate: {
          x: 0,
          y: 0
        }
      },
      droppable: {
        containers: new eU()
      }
    };
  }
  function ez(e, t) {
    switch (t.type) {
      case p.DragStart:
        return {
          ...e,
          draggable: {
            ...e.draggable,
            initialCoordinates: t.initialCoordinates,
            active: t.active
          }
        };
      case p.DragMove:
        if (!e.draggable.active) {
          return e;
        }
        return {
          ...e,
          draggable: {
            ...e.draggable,
            translate: {
              x: t.coordinates.x - e.draggable.initialCoordinates.x,
              y: t.coordinates.y - e.draggable.initialCoordinates.y
            }
          }
        };
      case p.DragEnd:
      case p.DragCancel:
        return {
          ...e,
          draggable: {
            ...e.draggable,
            active: null,
            initialCoordinates: {
              x: 0,
              y: 0
            },
            translate: {
              x: 0,
              y: 0
            }
          }
        };
      case p.RegisterDroppable:
        {
          let {
            element: n
          } = t;
          let {
            id: r
          } = n;
          let i = new eU(e.droppable.containers);
          i.set(r, n);
          return {
            ...e,
            droppable: {
              ...e.droppable,
              containers: i
            }
          };
        }
      case p.SetDroppableDisabled:
        {
          let {
            id: n,
            key: r,
            disabled: i
          } = t;
          let a = e.droppable.containers.get(n);
          if (!a || r !== a.key) {
            return e;
          }
          let l = new eU(e.droppable.containers);
          l.set(n, {
            ...a,
            disabled: i
          });
          return {
            ...e,
            droppable: {
              ...e.droppable,
              containers: l
            }
          };
        }
      case p.UnregisterDroppable:
        {
          let {
            id: n,
            key: r
          } = t;
          let i = e.droppable.containers.get(n);
          if (!i || r !== i.key) {
            return e;
          }
          let a = new eU(e.droppable.containers);
          a.delete(n);
          return {
            ...e,
            droppable: {
              ...e.droppable,
              containers: a
            }
          };
        }
      default:
        return e;
    }
  }
  function eZ(e) {
    let {
      disabled: t
    } = e;
    let {
      active: n,
      activatorEvent: r,
      draggableNodes: i
    } = reactCoreLibraryReexport.useContext(eG);
    let a = reactDomUtils.usePrevious(r);
    let l = reactDomUtils.usePrevious(n == null ? undefined : n.id);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t && !r && a && l != null) {
        if (!reactDomUtils.isKeyboardEvent(a) || document.activeElement === a.target) {
          return;
        }
        let e = i.get(l);
        if (!e) {
          return;
        }
        let {
          activatorNode: t,
          node: n
        } = e;
        if (t.current || n.current) {
          requestAnimationFrame(() => {
            for (let e of [t.current, n.current]) {
              if (!e) {
                continue;
              }
              let t = reactDomUtils.findFirstFocusable(e);
              if (t) {
                t.focus();
                break;
              }
            }
          });
        }
      }
    }, [r, t, i, l, a]);
    return null;
  }
  function eW(e, t) {
    let {
      transform: n,
      ...r
    } = t;
    if (e != null && e.length) {
      return e.reduce((e, t) => t({
        transform: e,
        ...r
      }), n);
    } else {
      return n;
    }
  }
  let eY = reactCoreLibraryReexport.createContext({
    ...H,
    scaleX: 1,
    scaleY: 1
  });
  (h = w ||= {})[h.Uninitialized = 0] = "Uninitialized";
  h[h.Initializing = 1] = "Initializing";
  h[h.Initialized = 2] = "Initialized";
  let eJ = reactCoreLibraryReexport.memo(function (e) {
    var t;
    var a;
    var l;
    let {
      id: o,
      accessibility: s,
      autoScroll: u = true,
      children: d,
      sensors: c = eN,
      collisionDetection: h = K,
      measuring: g,
      modifiers: v,
      ...b
    } = e;
    let [E, S] = reactCoreLibraryReexport.useReducer(ez, undefined, eX);
    let [T, _] = function () {
      let [e] = reactCoreLibraryReexport.useState(() => new Set());
      let t = reactCoreLibraryReexport.useCallback(t => {
        e.add(t);
        return () => e.delete(t);
      }, [e]);
      return [reactCoreLibraryReexport.useCallback(t => {
        let {
          type: n,
          event: r
        } = t;
        e.forEach(e => {
          var t;
          if ((t = e[n]) == null) {
            return undefined;
          } else {
            return t.call(e, r);
          }
        });
      }, [e]), t];
    }();
    let [P, A] = reactCoreLibraryReexport.useState(w.Uninitialized);
    let I = P === w.Initialized;
    let {
      draggable: {
        active: L,
        nodes: O,
        translate: V
      },
      droppable: {
        containers: N
      }
    } = E;
    let j = L ? O.get(L) : null;
    let $ = reactCoreLibraryReexport.useRef({
      initial: null,
      translated: null
    });
    let F = reactCoreLibraryReexport.useMemo(() => {
      if (L != null) {
        return {
          id: L,
          data: (j == null ? undefined : j.data) ?? ej,
          rect: $
        };
      } else {
        return null;
      }
    }, [L, j]);
    let B = reactCoreLibraryReexport.useRef(null);
    let [G, Z] = reactCoreLibraryReexport.useState(null);
    let [W, J] = reactCoreLibraryReexport.useState(null);
    let et = reactDomUtils.useUpdatedRef(b, Object.values(b));
    let en = reactDomUtils.useId("DndDescribedBy", o);
    let es = reactCoreLibraryReexport.useMemo(() => N.getEnabled(), [N]);
    let eu = reactCoreLibraryReexport.useMemo(() => ({
      draggable: {
        ...e$.draggable,
        ...(g == null ? undefined : g.draggable)
      },
      droppable: {
        ...e$.droppable,
        ...(g == null ? undefined : g.droppable)
      },
      dragOverlay: {
        ...e$.dragOverlay,
        ...(g == null ? undefined : g.dragOverlay)
      }
    }), [g == null ? undefined : g.draggable, g == null ? undefined : g.droppable, g == null ? undefined : g.dragOverlay]);
    let {
      droppableRects: ec,
      measureDroppableContainers: eh,
      measuringScheduled: ep
    } = function (e, t) {
      let {
        dragging: n,
        dependencies: r,
        config: i
      } = t;
      let [a, l] = reactCoreLibraryReexport.useState(null);
      let {
        frequency: o,
        measure: s,
        strategy: u
      } = i;
      let d = reactCoreLibraryReexport.useRef(e);
      let c = function () {
        switch (u) {
          case x.Always:
            return false;
          case x.BeforeDragging:
            return n;
          default:
            return !n;
        }
      }();
      let h = reactDomUtils.useUpdatedRef(c);
      let p = reactCoreLibraryReexport.useCallback(function (e = []) {
        if (!h.current) {
          l(t => t === null ? e : t.concat(e.filter(e => !t.includes(e))));
        }
      }, [h]);
      let f = reactCoreLibraryReexport.useRef(null);
      let g = reactDomUtils.useMergedRef(t => {
        if (c && !n) {
          return e_;
        }
        if (!t || t === e_ || d.current !== e || a != null) {
          let t = new Map();
          for (let n of e) {
            if (!n) {
              continue;
            }
            if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
              t.set(n.id, n.rect.current);
              continue;
            }
            let e = n.node.current;
            let r = e ? new ed(s(e), e) : null;
            n.rect.current = r;
            if (r) {
              t.set(n.id, r);
            }
          }
          return t;
        }
        return t;
      }, [e, a, n, c, s]);
      reactCoreLibraryReexport.useEffect(() => {
        d.current = e;
      }, [e]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!c) {
          p();
        }
      }, [n, c]);
      reactCoreLibraryReexport.useEffect(() => {
        if (a && a.length > 0) {
          l(null);
        }
      }, [JSON.stringify(a)]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!c && typeof o == "number" && f.current === null) {
          f.current = setTimeout(() => {
            p();
            f.current = null;
          }, o);
        }
      }, [o, c, p, ...r]);
      return {
        droppableRects: g,
        measureDroppableContainers: p,
        measuringScheduled: a != null
      };
    }(es, {
      dragging: I,
      dependencies: [V.x, V.y],
      config: eu.droppable
    });
    let ef = function (e, t) {
      let n = t !== null ? e.get(t) : undefined;
      let r = n ? n.node.current : null;
      return reactDomUtils.useMergedRef(e => {
        if (t === null) {
          return null;
        } else {
          return r ?? e ?? null;
        }
      }, [r, t]);
    }(O, L);
    let eg = reactCoreLibraryReexport.useMemo(() => W ? reactDomUtils.getEventCoordinates(W) : null, [W]);
    let ev = function () {
      let e = (G == null ? undefined : G.autoScrollEnabled) === false;
      let t = typeof u == "object" ? u.enabled === false : u === false;
      let n = I && !e && !t;
      if (typeof u == "object") {
        return {
          ...u,
          enabled: n
        };
      } else {
        return {
          enabled: n
        };
      }
    }();
    let eb = eM(ef, eu.draggable.measure);
    (function (e) {
      let {
        activeNode: t,
        measure: n,
        initialRect: r,
        config: i = true
      } = e;
      let a = reactCoreLibraryReexport.useRef(false);
      let {
        x: l,
        y: o
      } = typeof i == "boolean" ? {
        x: i,
        y: i
      } : i;
      reactDomUtils.useIsomorphicLayoutEffect(() => {
        if (!l && !o || !t) {
          a.current = false;
          return;
        }
        if (a.current || !r) {
          return;
        }
        let e = t == null ? undefined : t.node.current;
        if (!e || e.isConnected === false) {
          return;
        }
        let i = X(n(e), r);
        if (!l) {
          i.x = 0;
        }
        if (!o) {
          i.y = 0;
        }
        a.current = true;
        if (Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
          let t = Q(e);
          if (t) {
            t.scrollBy({
              top: i.y,
              left: i.x
            });
          }
        }
      }, [t, l, o, r, n]);
    })({
      activeNode: L ? O.get(L) : null,
      config: ev.layoutShiftCompensation,
      initialRect: eb,
      measure: eu.draggable.measure
    });
    let em = eR(ef, eu.draggable.measure, eb);
    let ey = eR(ef ? ef.parentElement : null);
    let ex = reactCoreLibraryReexport.useRef({
      activatorEvent: null,
      active: null,
      activeNode: ef,
      collisionRect: null,
      collisions: null,
      droppableRects: ec,
      draggableNodes: O,
      draggingNode: null,
      draggingNodeRect: null,
      droppableContainers: N,
      over: null,
      scrollableAncestors: [],
      scrollAdjustedTranslate: null
    });
    let eE = N.getNodeFor((t = ex.current.over) == null ? undefined : t.id);
    let ew = function (e) {
      let {
        measure: t
      } = e;
      let [n, r] = reactCoreLibraryReexport.useState(null);
      let i = eP({
        callback: reactCoreLibraryReexport.useCallback(e => {
          for (let {
            target: n
          } of e) {
            if (reactDomUtils.isHTMLElement(n)) {
              r(e => {
                let r = t(n);
                if (e) {
                  return {
                    ...e,
                    width: r.width,
                    height: r.height
                  };
                } else {
                  return r;
                }
              });
              break;
            }
          }
        }, [t])
      });
      let a = reactCoreLibraryReexport.useCallback(e => {
        let n = eV(e);
        if (i != null) {
          i.disconnect();
        }
        if (n) {
          if (i != null) {
            i.observe(n);
          }
        }
        r(n ? t(n) : null);
      }, [t, i]);
      let [l, o] = reactDomUtils.useRefWithCallback(a);
      return reactCoreLibraryReexport.useMemo(() => ({
        nodeRef: l,
        rect: n,
        setRef: o
      }), [n, l, o]);
    }({
      measure: eu.dragOverlay.measure
    });
    let eC = ew.nodeRef.current ?? ef;
    let eD = I ? ew.rect ?? em : null;
    let ek = !!ew.nodeRef.current && !!ew.rect;
    let eS = function (e) {
      let t = eM(e);
      return X(e, t);
    }(ek ? null : em);
    let eA = eO(eC ? reactDomUtils.getWindow(eC) : null);
    let eU = function (e) {
      let t = reactCoreLibraryReexport.useRef(e);
      let n = reactDomUtils.useMergedRef(n => e ? n && n !== eI && e && t.current && e.parentNode === t.current.parentNode ? n : q(e) : eI, [e]);
      reactCoreLibraryReexport.useEffect(() => {
        t.current = e;
      }, [e]);
      return n;
    }(I ? eE ?? ef : null);
    let eF = function (e, t = Y) {
      let [n] = e;
      let r = eO(n ? reactDomUtils.getWindow(n) : null);
      let [i, a] = reactCoreLibraryReexport.useReducer(function () {
        if (e.length) {
          return e.map(e => ei(e) ? r : new ed(t(e), e));
        } else {
          return eH;
        }
      }, eH);
      let l = eP({
        callback: a
      });
      if (e.length > 0 && i === eH) {
        a();
      }
      reactDomUtils.useIsomorphicLayoutEffect(() => {
        if (e.length) {
          e.forEach(e => l == null ? undefined : l.observe(e));
        } else {
          if (l != null) {
            l.disconnect();
          }
          a();
        }
      }, [e]);
      return i;
    }(eU);
    let eB = eW(v, {
      transform: {
        x: V.x - eS.x,
        y: V.y - eS.y,
        scaleX: 1,
        scaleY: 1
      },
      activatorEvent: W,
      active: F,
      activeNodeRect: em,
      containerNodeRect: ey,
      draggingNodeRect: eD,
      over: ex.current.over,
      overlayNodeRect: ew.rect,
      scrollableAncestors: eU,
      scrollableAncestorRects: eF,
      windowRect: eA
    });
    let eJ = eg ? reactDomUtils.scaleUp(eg, V) : null;
    let eq = function (e) {
      let [t, n] = reactCoreLibraryReexport.useState(null);
      let r = reactCoreLibraryReexport.useRef(e);
      let i = reactCoreLibraryReexport.useCallback(e => {
        let t = ee(e.target);
        if (t) {
          n(e => e ? (e.set(t, er(t)), new Map(e)) : null);
        }
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        let t = r.current;
        if (e !== t) {
          a(t);
          let l = e.map(e => {
            let t = ee(e);
            if (t) {
              t.addEventListener("scroll", i, {
                passive: true
              });
              return [t, er(t)];
            } else {
              return null;
            }
          }).filter(e => e != null);
          n(l.length ? new Map(l) : null);
          r.current = e;
        }
        return () => {
          a(e);
          a(t);
        };
        function a(e) {
          e.forEach(e => {
            let t = ee(e);
            if (t != null) {
              t.removeEventListener("scroll", i);
            }
          });
        }
      }, [i, e]);
      return reactCoreLibraryReexport.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => reactDomUtils.scaleUp(e, t), H) : eo(e) : H, [e, t]);
    }(eU);
    let eQ = eL(eq);
    let e0 = eL(eq, [em]);
    let e1 = reactDomUtils.scaleUp(eB, eQ);
    let e2 = eD ? z(eD, eB) : null;
    let e4 = F && e2 ? h({
      active: F,
      collisionRect: e2,
      droppableRects: ec,
      droppableContainers: es,
      pointerCoordinates: eJ
    }) : null;
    let e3 = U(e4, "id");
    let [e5, e9] = reactCoreLibraryReexport.useState(null);
    a = ek ? eB : reactDomUtils.scaleUp(eB, e0);
    l = (e5 == null ? undefined : e5.rect) ?? null;
    let e7 = {
      ...a,
      scaleX: l && em ? l.width / em.width : 1,
      scaleY: l && em ? l.height / em.height : 1
    };
    let e8 = reactCoreLibraryReexport.useCallback((e, t) => {
      let {
        sensor: n,
        options: r
      } = t;
      if (B.current == null) {
        return;
      }
      let i = O.get(B.current);
      if (!i) {
        return;
      }
      let a = e.nativeEvent;
      let l = new n({
        active: B.current,
        activeNode: i,
        event: a,
        options: r,
        context: ex,
        onStart(e) {
          let t = B.current;
          if (t == null) {
            return;
          }
          let n = O.get(t);
          if (!n) {
            return;
          }
          let {
            onDragStart: r
          } = et.current;
          let i = {
            active: {
              id: t,
              data: n.data,
              rect: $
            }
          };
          reactDomEntryWrapper.unstable_batchedUpdates(() => {
            if (r != null) {
              r(i);
            }
            A(w.Initializing);
            S({
              type: p.DragStart,
              initialCoordinates: e,
              active: t
            });
            T({
              type: "onDragStart",
              event: i
            });
          });
        },
        onMove(e) {
          S({
            type: p.DragMove,
            coordinates: e
          });
        },
        onEnd: o(p.DragEnd),
        onCancel: o(p.DragCancel)
      });
      function o(e) {
        return async function () {
          let {
            active: t,
            collisions: n,
            over: r,
            scrollAdjustedTranslate: i
          } = ex.current;
          let l = null;
          if (t && i) {
            let {
              cancelDrop: o
            } = et.current;
            l = {
              activatorEvent: a,
              active: t,
              collisions: n,
              delta: i,
              over: r
            };
            if (e === p.DragEnd && typeof o == "function" && (await Promise.resolve(o(l)))) {
              e = p.DragCancel;
            }
          }
          B.current = null;
          reactDomEntryWrapper.unstable_batchedUpdates(() => {
            S({
              type: e
            });
            A(w.Uninitialized);
            e9(null);
            Z(null);
            J(null);
            let t = e === p.DragEnd ? "onDragEnd" : "onDragCancel";
            if (l) {
              let e = et.current[t];
              if (e != null) {
                e(l);
              }
              T({
                type: t,
                event: l
              });
            }
          });
        };
      }
      reactDomEntryWrapper.unstable_batchedUpdates(() => {
        Z(l);
        J(e.nativeEvent);
      });
    }, [O]);
    let e6 = reactCoreLibraryReexport.useCallback((e, t) => (n, r) => {
      let i = n.nativeEvent;
      let a = O.get(r);
      if (B.current === null && a && !i.dndKit && !i.defaultPrevented && e(n, t.options, {
        active: a
      }) === true) {
        i.dndKit = {
          capturedBy: t.sensor
        };
        B.current = r;
        e8(n, t);
      }
    }, [O, e8]);
    let te = reactCoreLibraryReexport.useMemo(() => c.reduce((e, t) => {
      let {
        sensor: n
      } = t;
      return [...e, ...n.activators.map(e => ({
        eventName: e.eventName,
        handler: e6(e.handler, t)
      }))];
    }, []), [c, e6]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!reactDomUtils.canUseDom) {
        return;
      }
      let e = c.map(e => {
        let {
          sensor: t
        } = e;
        if (t.setup == null) {
          return undefined;
        } else {
          return t.setup();
        }
      });
      return () => {
        for (let t of e) {
          if (t != null) {
            t();
          }
        }
      };
    }, c.map(e => {
      let {
        sensor: t
      } = e;
      return t;
    }));
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      if (em && P === w.Initializing) {
        A(w.Initialized);
      }
    }, [em, P]);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        onDragMove: e
      } = et.current;
      let {
        active: t,
        activatorEvent: n,
        collisions: r,
        over: i
      } = ex.current;
      if (!t || !n) {
        return;
      }
      let a = {
        active: t,
        activatorEvent: n,
        collisions: r,
        delta: {
          x: e1.x,
          y: e1.y
        },
        over: i
      };
      reactDomEntryWrapper.unstable_batchedUpdates(() => {
        if (e != null) {
          e(a);
        }
        T({
          type: "onDragMove",
          event: a
        });
      });
    }, [e1.x, e1.y]);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        active: e,
        activatorEvent: t,
        collisions: n,
        droppableContainers: r,
        scrollAdjustedTranslate: i
      } = ex.current;
      if (!e || B.current == null || !t || !i) {
        return;
      }
      let {
        onDragOver: a
      } = et.current;
      let l = r.get(e3);
      let o = l && l.rect.current ? {
        id: l.id,
        rect: l.rect.current,
        data: l.data,
        disabled: l.disabled
      } : null;
      let s = {
        active: e,
        activatorEvent: t,
        collisions: n,
        delta: {
          x: i.x,
          y: i.y
        },
        over: o
      };
      reactDomEntryWrapper.unstable_batchedUpdates(() => {
        e9(o);
        if (a != null) {
          a(s);
        }
        T({
          type: "onDragOver",
          event: s
        });
      });
    }, [e3]);
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      ex.current = {
        activatorEvent: W,
        active: F,
        activeNode: ef,
        collisionRect: e2,
        collisions: e4,
        droppableRects: ec,
        draggableNodes: O,
        draggingNode: eC,
        draggingNodeRect: eD,
        droppableContainers: N,
        over: e5,
        scrollableAncestors: eU,
        scrollAdjustedTranslate: e1
      };
      $.current = {
        initial: eD,
        translated: e2
      };
    }, [F, ef, e4, e2, O, eC, eD, ec, N, e5, eU, e1]);
    (function (e) {
      let {
        acceleration: t,
        activator: n = m.Pointer,
        canScroll: r,
        draggingRect: i,
        enabled: a,
        interval: l = 5,
        order: o = y.TreeOrder,
        pointerCoordinates: s,
        scrollableAncestors: u,
        scrollableAncestorRects: d,
        delta: c,
        threshold: h
      } = e;
      let p = function (e) {
        let {
          delta: t,
          disabled: n
        } = e;
        let r = reactDomUtils.usePrevious(t);
        return reactDomUtils.useMergedRef(e => {
          if (n || !r || !e) {
            return eT;
          }
          let i = {
            x: Math.sign(t.x - r.x),
            y: Math.sign(t.y - r.y)
          };
          return {
            x: {
              [f.Backward]: e.x[f.Backward] || i.x === -1,
              [f.Forward]: e.x[f.Forward] || i.x === 1
            },
            y: {
              [f.Backward]: e.y[f.Backward] || i.y === -1,
              [f.Forward]: e.y[f.Forward] || i.y === 1
            }
          };
        }, [n, t, r]);
      }({
        delta: c,
        disabled: !a
      });
      let [g, v] = reactDomUtils.useInterval();
      let b = reactCoreLibraryReexport.useRef({
        x: 0,
        y: 0
      });
      let x = reactCoreLibraryReexport.useRef({
        x: 0,
        y: 0
      });
      let E = reactCoreLibraryReexport.useMemo(() => {
        switch (n) {
          case m.Pointer:
            if (s) {
              return {
                top: s.y,
                bottom: s.y,
                left: s.x,
                right: s.x
              };
            } else {
              return null;
            }
          case m.DraggableRect:
            return i;
        }
      }, [n, i, s]);
      let w = reactCoreLibraryReexport.useRef(null);
      let D = reactCoreLibraryReexport.useCallback(() => {
        let e = w.current;
        if (!e) {
          return;
        }
        let t = b.current.x * x.current.x;
        let n = b.current.y * x.current.y;
        e.scrollBy(t, n);
      }, []);
      let S = reactCoreLibraryReexport.useMemo(() => o === y.TreeOrder ? [...u].reverse() : u, [o, u]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!a || !u.length || !E) {
          v();
          return;
        }
        for (let e of S) {
          if ((r == null ? undefined : r(e)) === false) {
            continue;
          }
          let n = d[u.indexOf(e)];
          if (!n) {
            continue;
          }
          let {
            direction: i,
            speed: a
          } = function (e, t, n, r, i) {
            let {
              top: a,
              left: l,
              right: o,
              bottom: s
            } = n;
            if (r === undefined) {
              r = 10;
            }
            if (i === undefined) {
              i = el;
            }
            let {
              isTop: u,
              isBottom: d,
              isLeft: c,
              isRight: h
            } = ea(e);
            let p = {
              x: 0,
              y: 0
            };
            let g = {
              x: 0,
              y: 0
            };
            let v = {
              height: t.height * i.y,
              width: t.width * i.x
            };
            if (!u && a <= t.top + v.height) {
              p.y = f.Backward;
              g.y = r * Math.abs((t.top + v.height - a) / v.height);
            } else if (!d && s >= t.bottom - v.height) {
              p.y = f.Forward;
              g.y = r * Math.abs((t.bottom - v.height - s) / v.height);
            }
            if (!h && o >= t.right - v.width) {
              p.x = f.Forward;
              g.x = r * Math.abs((t.right - v.width - o) / v.width);
            } else if (!c && l <= t.left + v.width) {
              p.x = f.Backward;
              g.x = r * Math.abs((t.left + v.width - l) / v.width);
            }
            return {
              direction: p,
              speed: g
            };
          }(e, n, E, t, h);
          for (let e of ["x", "y"]) {
            if (!p[e][i[e]]) {
              a[e] = 0;
              i[e] = 0;
            }
          }
          if (a.x > 0 || a.y > 0) {
            v();
            w.current = e;
            g(D, l);
            b.current = a;
            x.current = i;
            return;
          }
        }
        b.current = {
          x: 0,
          y: 0
        };
        x.current = {
          x: 0,
          y: 0
        };
        v();
      }, [t, D, r, v, a, l, JSON.stringify(E), JSON.stringify(p), g, u, S, d, JSON.stringify(h)]);
    })({
      ...ev,
      delta: V,
      draggingRect: e2,
      pointerCoordinates: eJ,
      scrollableAncestors: eU,
      scrollableAncestorRects: eF
    });
    let tt = reactCoreLibraryReexport.useMemo(() => ({
      active: F,
      activeNode: ef,
      activeNodeRect: em,
      activatorEvent: W,
      collisions: e4,
      containerNodeRect: ey,
      dragOverlay: ew,
      draggableNodes: O,
      droppableContainers: N,
      droppableRects: ec,
      over: e5,
      measureDroppableContainers: eh,
      scrollableAncestors: eU,
      scrollableAncestorRects: eF,
      measuringConfiguration: eu,
      measuringScheduled: ep,
      windowRect: eA
    }), [F, ef, em, W, e4, ey, ew, O, N, ec, e5, eh, eU, eF, eu, ep, eA]);
    let tn = reactCoreLibraryReexport.useMemo(() => ({
      activatorEvent: W,
      activators: te,
      active: F,
      activeNodeRect: em,
      ariaDescribedById: {
        draggable: en
      },
      dispatch: S,
      draggableNodes: O,
      over: e5,
      measureDroppableContainers: eh
    }), [W, te, F, em, S, en, O, e5, eh]);
    return reactCoreLibraryReexport.createElement(M.Provider, {
      value: _
    }, reactCoreLibraryReexport.createElement(eG.Provider, {
      value: tn
    }, reactCoreLibraryReexport.createElement(eK.Provider, {
      value: tt
    }, reactCoreLibraryReexport.createElement(eY.Provider, {
      value: e7
    }, d)), reactCoreLibraryReexport.createElement(eZ, {
      disabled: (s == null ? undefined : s.restoreFocus) === false
    })), reactCoreLibraryReexport.createElement(R, {
      ...s,
      hiddenTextDescribedById: en
    }));
  });
  let eq = reactCoreLibraryReexport.createContext(null);
  let eQ = "button";
  function e0(e) {
    let {
      id: t,
      data: n,
      disabled: r = false,
      attributes: i
    } = e;
    let a = reactDomUtils.useId("Droppable");
    let {
      activators: l,
      activatorEvent: o,
      active: s,
      activeNodeRect: u,
      ariaDescribedById: d,
      draggableNodes: c,
      over: h
    } = reactCoreLibraryReexport.useContext(eG);
    let {
      role: p = eQ,
      roleDescription: f = "draggable",
      tabIndex: g = 0
    } = i ?? {};
    let v = (s == null ? undefined : s.id) === t;
    let b = reactCoreLibraryReexport.useContext(v ? eY : eq);
    let [m, y] = reactDomUtils.useRefWithCallback();
    let [x, E] = reactDomUtils.useRefWithCallback();
    let w = reactCoreLibraryReexport.useMemo(() => l.reduce((e, n) => {
      let {
        eventName: r,
        handler: i
      } = n;
      e[r] = e => {
        i(e, t);
      };
      return e;
    }, {}), [l, t]);
    let D = reactDomUtils.useUpdatedRef(n);
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      c.set(t, {
        id: t,
        key: a,
        node: m,
        activatorNode: x,
        data: D
      });
      return () => {
        let e = c.get(t);
        if (e && e.key === a) {
          c.delete(t);
        }
      };
    }, [c, t]);
    return {
      active: s,
      activatorEvent: o,
      activeNodeRect: u,
      attributes: reactCoreLibraryReexport.useMemo(() => ({
        role: p,
        tabIndex: g,
        "aria-disabled": r,
        "aria-pressed": !!v && p === eQ || undefined,
        "aria-roledescription": f,
        "aria-describedby": d.draggable
      }), [r, p, g, v, f, d.draggable]),
      isDragging: v,
      listeners: r ? undefined : w,
      node: m,
      over: h,
      setNodeRef: y,
      setActivatorNodeRef: E,
      transform: b
    };
  }
  function e1() {
    return reactCoreLibraryReexport.useContext(eK);
  }
  let e2 = {
    timeout: 25
  };
  function e4(e) {
    let {
      data: t,
      disabled: n = false,
      id: r,
      resizeObserverConfig: i
    } = e;
    let a = reactDomUtils.useId("Droppable");
    let {
      active: l,
      dispatch: o,
      over: s,
      measureDroppableContainers: u
    } = reactCoreLibraryReexport.useContext(eG);
    let d = reactCoreLibraryReexport.useRef({
      disabled: n
    });
    let c = reactCoreLibraryReexport.useRef(false);
    let h = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(null);
    let {
      disabled: g,
      updateMeasurementsFor: v,
      timeout: b
    } = {
      ...e2,
      ...i
    };
    let m = reactDomUtils.useUpdatedRef(v ?? r);
    let y = eP({
      callback: reactCoreLibraryReexport.useCallback(() => {
        if (!c.current) {
          c.current = true;
          return;
        }
        if (f.current != null) {
          clearTimeout(f.current);
        }
        f.current = setTimeout(() => {
          u(Array.isArray(m.current) ? m.current : [m.current]);
          f.current = null;
        }, b);
      }, [b]),
      disabled: g || !l
    });
    let x = reactCoreLibraryReexport.useCallback((e, t) => {
      if (y) {
        if (t) {
          y.unobserve(t);
          c.current = false;
        }
        if (e) {
          y.observe(e);
        }
      }
    }, [y]);
    let [E, w] = reactDomUtils.useRefWithCallback(x);
    let D = reactDomUtils.useUpdatedRef(t);
    reactCoreLibraryReexport.useEffect(() => {
      if (y && E.current) {
        y.disconnect();
        c.current = false;
        y.observe(E.current);
      }
    }, [E, y]);
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      o({
        type: p.RegisterDroppable,
        element: {
          id: r,
          key: a,
          disabled: n,
          node: E,
          rect: h,
          data: D
        }
      });
      return () => o({
        type: p.UnregisterDroppable,
        key: a,
        id: r
      });
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n !== d.current.disabled) {
        o({
          type: p.SetDroppableDisabled,
          id: r,
          key: a,
          disabled: n
        });
        d.current.disabled = n;
      }
    }, [r, a, n, o]);
    return {
      active: l,
      rect: h,
      isOver: (s == null ? undefined : s.id) === r,
      node: E,
      over: s,
      setNodeRef: w
    };
  }
  function e3(e) {
    let {
      animation: t,
      children: n
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState(null);
    let [a, l] = reactCoreLibraryReexport.useState(null);
    let o = reactDomUtils.usePrevious(n);
    if (!n && !r && !!o) {
      i(o);
    }
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      if (!a) {
        return;
      }
      let e = r == null ? undefined : r.key;
      let n = r == null ? undefined : r.props.id;
      if (e == null || n == null) {
        i(null);
        return;
      }
      Promise.resolve(t(n, a)).then(() => {
        i(null);
      });
    }, [t, r, a]);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, n, r ? reactCoreLibraryReexport.cloneElement(r, {
      ref: l
    }) : null);
  }
  let e5 = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  };
  function e9(e) {
    let {
      children: t
    } = e;
    return reactCoreLibraryReexport.createElement(eG.Provider, {
      value: eB
    }, reactCoreLibraryReexport.createElement(eY.Provider, {
      value: e5
    }, t));
  }
  let e7 = {
    position: "fixed",
    touchAction: "none"
  };
  let e8 = e => reactDomUtils.isKeyboardEvent(e) ? "transform 250ms ease" : undefined;
  let e6 = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      as: n,
      activatorEvent: r,
      adjustScale: i,
      children: a,
      className: l,
      rect: o,
      style: s,
      transform: u,
      transition: d = e8
    } = e;
    if (!o) {
      return null;
    }
    let c = i ? u : {
      ...u,
      scaleX: 1,
      scaleY: 1
    };
    let h = {
      ...e7,
      width: o.width,
      height: o.height,
      top: o.top,
      left: o.left,
      transform: reactDomUtils.TransformUtils.Transform.toString(c),
      transformOrigin: i && r ? function (e, t) {
        let n = reactDomUtils.getEventCoordinates(e);
        if (!n) {
          return "0 0";
        }
        let r = {
          x: (n.x - t.left) / t.width * 100,
          y: (n.y - t.top) / t.height * 100
        };
        return r.x + "% " + r.y + "%";
      }(r, o) : undefined,
      transition: typeof d == "function" ? d(r) : d,
      ...s
    };
    return reactCoreLibraryReexport.createElement(n, {
      className: l,
      style: h,
      ref: t
    }, a);
  });
  let te = {
    duration: 250,
    easing: "ease",
    keyframes: e => {
      let {
        transform: {
          initial: t,
          final: n
        }
      } = e;
      return [{
        transform: reactDomUtils.TransformUtils.Transform.toString(t)
      }, {
        transform: reactDomUtils.TransformUtils.Transform.toString(n)
      }];
    },
    sideEffects: (r = {
      styles: {
        active: {
          opacity: "0"
        }
      }
    }, e => {
      let {
        active: t,
        dragOverlay: n
      } = e;
      let i = {};
      let {
        styles: a,
        className: l
      } = r;
      if (a != null && a.active) {
        for (let [e, n] of Object.entries(a.active)) {
          if (n !== undefined) {
            i[e] = t.node.style.getPropertyValue(e);
            t.node.style.setProperty(e, n);
          }
        }
      }
      if (a != null && a.dragOverlay) {
        for (let [e, t] of Object.entries(a.dragOverlay)) {
          if (t !== undefined) {
            n.node.style.setProperty(e, t);
          }
        }
      }
      if (l != null && l.active) {
        t.node.classList.add(l.active);
      }
      if (l != null && l.dragOverlay) {
        n.node.classList.add(l.dragOverlay);
      }
      return function () {
        for (let [e, n] of Object.entries(i)) {
          t.node.style.setProperty(e, n);
        }
        if (l != null && l.active) {
          t.node.classList.remove(l.active);
        }
      };
    })
  };
  let tt = 0;
  let tn = reactCoreLibraryReexport.memo(e => {
    var t;
    let {
      adjustScale: n = false,
      children: r,
      dropAnimation: i,
      style: a,
      transition: l,
      modifiers: o,
      wrapperElement: s = "div",
      className: u,
      zIndex: d = 999
    } = e;
    let {
      activatorEvent: c,
      active: h,
      activeNodeRect: p,
      containerNodeRect: f,
      draggableNodes: g,
      droppableContainers: v,
      dragOverlay: b,
      over: m,
      measuringConfiguration: y,
      scrollableAncestors: x,
      scrollableAncestorRects: E,
      windowRect: w
    } = e1();
    let D = reactCoreLibraryReexport.useContext(eY);
    t = h == null ? undefined : h.id;
    let S = reactCoreLibraryReexport.useMemo(() => {
      if (t != null) {
        return ++tt;
      }
    }, [t]);
    let T = eW(o, {
      activatorEvent: c,
      active: h,
      activeNodeRect: p,
      containerNodeRect: f,
      draggingNodeRect: b.rect,
      over: m,
      overlayNodeRect: b.rect,
      scrollableAncestors: x,
      scrollableAncestorRects: E,
      transform: D,
      windowRect: w
    });
    let _ = eM(p);
    let M = function (e) {
      let {
        config: t,
        draggableNodes: n,
        droppableContainers: r,
        measuringConfiguration: i
      } = e;
      return reactDomUtils.useEventCallback((e, a) => {
        if (t === null) {
          return;
        }
        let l = n.get(e);
        if (!l) {
          return;
        }
        let o = l.node.current;
        if (!o) {
          return;
        }
        let s = eV(a);
        if (!s) {
          return;
        }
        let {
          transform: u
        } = reactDomUtils.getWindow(a).getComputedStyle(a);
        let d = Z(u);
        if (!d) {
          return;
        }
        let c = typeof t == "function" ? t : function (e) {
          let {
            duration: t,
            easing: n,
            sideEffects: r,
            keyframes: i
          } = {
            ...te,
            ...e
          };
          return e => {
            let {
              active: a,
              dragOverlay: l,
              transform: o,
              ...s
            } = e;
            if (!t) {
              return;
            }
            let u = {
              x: l.rect.left - a.rect.left,
              y: l.rect.top - a.rect.top
            };
            let d = {
              scaleX: o.scaleX !== 1 ? a.rect.width * o.scaleX / l.rect.width : 1,
              scaleY: o.scaleY !== 1 ? a.rect.height * o.scaleY / l.rect.height : 1
            };
            let c = {
              x: o.x - u.x,
              y: o.y - u.y,
              ...d
            };
            let h = i({
              ...s,
              active: a,
              dragOverlay: l,
              transform: {
                initial: o,
                final: c
              }
            });
            let [p] = h;
            let f = h[h.length - 1];
            if (JSON.stringify(p) === JSON.stringify(f)) {
              return;
            }
            let g = r == null ? undefined : r({
              active: a,
              dragOverlay: l,
              ...s
            });
            let v = l.node.animate(h, {
              duration: t,
              easing: n,
              fill: "forwards"
            });
            return new Promise(e => {
              v.onfinish = () => {
                if (g != null) {
                  g();
                }
                e();
              };
            });
          };
        }(t);
        es(o, i.draggable.measure);
        return c({
          active: {
            id: e,
            data: l.data,
            node: o,
            rect: i.draggable.measure(o)
          },
          draggableNodes: n,
          dragOverlay: {
            node: a,
            rect: i.dragOverlay.measure(s)
          },
          droppableContainers: r,
          measuringConfiguration: i,
          transform: d
        });
      });
    }({
      config: i,
      draggableNodes: g,
      droppableContainers: v,
      measuringConfiguration: y
    });
    let P = _ ? b.setRef : undefined;
    return reactCoreLibraryReexport.createElement(e9, null, reactCoreLibraryReexport.createElement(e3, {
      animation: M
    }, h && S ? reactCoreLibraryReexport.createElement(e6, {
      key: S,
      id: h.id,
      ref: P,
      as: s,
      activatorEvent: c,
      adjustScale: n,
      className: u,
      transition: l,
      rect: _,
      style: {
        zIndex: d,
        ...a
      },
      transform: T
    }, r) : null));
  });
  require.d(exports, {
    DndContext: function () {
      return eJ;
    },
    useDroppable: function () {
      return e4;
    },
    KeyboardCode: function () {
      return v;
    },
    TouchSensor: function () {
      return eS;
    },
    ScrollStrategy: function () {
      return y;
    },
    useSensor: function () {
      return L;
    },
    useSensors: function () {
      return O;
    },
    KeyboardSensor: function () {
      return eb;
    },
    MouseSensor: function () {
      return eD;
    },
    closestCenter: function () {
      return G;
    },
    getBoundingRect: function () {
      return Y;
    },
    getScrollAncestors: function () {
      return q;
    },
    useDndContext: function () {
      return e1;
    },
    closestCorners: function () {
      return B;
    },
    DndContextValue: function () {
      return tn;
    },
    getFirstCollision: function () {
      return U;
    },
    useDraggable: function () {
      return e0;
    }
  });
}