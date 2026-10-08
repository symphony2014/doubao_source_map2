// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JL' to 'DropManager'
// - Renamed export 'Of' to 'DragManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_extensions_table-draggable.88215e7a.js
         * chunkId: 27744
         * moduleId: 491769
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  function u() {
    return (u = Object.assign || function (e) {
      var r;
      var n = 1;
      var o = arguments.length;
      for (; n < o; n++) {
        for (var i in r = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(r, i)) {
            e[i] = r[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function c(e, r, n, o) {
    return new (n ||= Promise)(function (i, s) {
      function a(e) {
        try {
          u(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function l(e) {
        try {
          u(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function u(e) {
        var r;
        if (e.done) {
          i(e.value);
        } else {
          ((r = e.value) instanceof n ? r : new n(function (e) {
            e(r);
          })).then(a, l);
        }
      }
      u((o = o.apply(e, r || [])).next());
    });
  }
  function h(e, r) {
    var n;
    var o;
    var i;
    var s;
    var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    };
    if (typeof Symbol == "function") {
      s[Symbol.iterator] = function () {
        return this;
      };
    }
    return s;
    function l(s) {
      return function (l) {
        return function (s) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              n = 1;
              if (o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done) {
                return i;
              }
              o = 0;
              if (i) {
                s = [s[0] & 2, i.value];
              }
              switch (s[0]) {
                case 0:
                case 1:
                  i = s;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: s[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  o = s[1];
                  s = [0];
                  continue;
                case 7:
                  s = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                    a.label = s[1];
                    break;
                  }
                  if (s[0] === 6 && a.label < i[1]) {
                    a.label = i[1];
                    i = s;
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2];
                    a.ops.push(s);
                    break;
                  }
                  if (i[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              s = r.call(e, a);
            } catch (e) {
              s = [6, e];
              o = 0;
            } finally {
              n = i = 0;
            }
          }
          if (s[0] & 5) {
            throw s[1];
          }
          return {
            value: s[0] ? s[1] : undefined,
            done: true
          };
        }([s, l]);
      };
    }
  }
  function d(e) {
    var r = typeof Symbol == "function" && Symbol.iterator;
    var n = r && e[r];
    var o = 0;
    if (n) {
      return n.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && o >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[o++],
            done: !e
          };
        }
      };
    }
    throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function g(e, r) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) {
      return e;
    }
    var o;
    var i;
    var s = n.call(e);
    var a = [];
    try {
      while ((r === undefined || r-- > 0) && !(o = s.next()).done) {
        a.push(o.value);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        if (o && !o.done && (n = s.return)) {
          n.call(s);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a;
  }
  function p(e, r) {
    var n;
    var o;
    var i;
    var s;
    var a;
    var l;
    var u = e.target;
    if (!u) {
      return [];
    }
    var c = function (e) {
      if (!(e instanceof Element)) {
        return [];
      }
      var r = [];
      var n = e;
      while (n) {
        r.push(n);
        n = n.parentElement;
      }
      return r;
    }(u).reverse();
    try {
      var h = d(c);
      var p = h.next();
      for (; !p.done; p = h.next()) {
        var f = p.value;
        var v = [];
        try {
          i = undefined;
          var y = d(Object.entries(r));
          var b = y.next();
          for (; !b.done; b = y.next()) {
            var m = g(b.value, 2);
            var M = m[0];
            var D = m[1].target;
            try {
              a = undefined;
              var x = d(D);
              var C = x.next();
              for (; !C.done; C = x.next()) {
                var k = C.value;
                if (k instanceof Element ? k === f : f.matches(k)) {
                  v.push(M);
                  break;
                }
              }
            } catch (e) {
              a = {
                error: e
              };
            } finally {
              try {
                if (C && !C.done && (l = x.return)) {
                  l.call(x);
                }
              } finally {
                if (a) {
                  throw a.error;
                }
              }
            }
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (b && !b.done && (s = y.return)) {
              s.call(y);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        if (v.length) {
          return v;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (p && !p.done && (o = h.return)) {
          o.call(h);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return [];
  }
  var f = function () {
    function e(e) {
      var r = this;
      this.options = e;
      this.dropManager = null;
      this._currentMouseMoveInfo = null;
      this.enabled = true;
      this.isDragging = false;
      this.startPosition = null;
      this.idToListeners = {};
      this.idToContext = {};
      this.snapshot = null;
      this.previousSnapshot = null;
      this.draggingIds = [];
      this.scrollIntervalId = null;
      this.handleMouseDown = function (e) {
        return c(r, undefined, undefined, function () {
          var r;
          var n;
          var o;
          var i;
          var s;
          var a = this;
          return h(this, function (l) {
            switch (l.label) {
              case 0:
                this.handleMouseMove.cancel();
                if (!this.enabled || e.buttons !== 1 || (this.analyseDraggingIds(e), n = (r = this.getListeners()).dragId, !(o = r.dragListeners) || !n)) {
                  return [2];
                }
                this.startPosition = {
                  x: e.x,
                  y: e.y
                };
                this.snapshot = null;
                i = this.getContext(n);
                if (!o.onDragStart) {
                  return [3, 2];
                }
                return [4, this.fireDragManagerEvent("onDragStart", e, o.onDragStart, {
                  context: i
                })];
              case 1:
                s = l.sent();
                return [3, 3];
              case 2:
                s = true;
                l.label = 3;
              case 3:
                if (!s) {
                  this.resetStatus(true);
                  return [2];
                }
                this.fireDragManagerEvent("getSnapshot", e, o.getSnapshot, {
                  context: i
                }).then(function (e) {
                  a.snapshot = e;
                  if (a.startPosition == null) {
                    a.renderSnapshot();
                  }
                });
                e.preventDefault();
                e.stopImmediatePropagation();
                return [2];
            }
          });
        });
      };
      this.handleMouseUp = function (e) {
        return c(r, undefined, undefined, function () {
          var r;
          var n;
          var o;
          var i;
          var s;
          var a;
          var l;
          return h(this, function (u) {
            switch (u.label) {
              case 0:
                this.handleMouseMove.cancel();
                if (!this.enabled) {
                  this.resetStatus(true);
                  return [2];
                }
                this.setMasker(false);
                if (this.dropManager) {
                  this.dropManager.analyseDroppingIds(e);
                }
                n = (r = this.getListeners()).dragId;
                o = r.dragListeners;
                i = r.dropListeners;
                this.snapshot = null;
                this.renderSnapshot(e);
                s = false;
                if (!o || !n) {
                  return [3, 5];
                }
                a = this.getContext(n);
                if (!i) {
                  return [3, 4];
                }
                return [4, this.fireDragManagerEvent("onDrop", e, o.onDrop, {
                  context: a
                })];
              case 1:
                l = u.sent();
                return [4, this.fireDropManagerEvent("onDrop", e, i.onDrop, {
                  dragData: l
                })];
              case 2:
                if (!(s = u.sent())) {
                  return [3, 4];
                }
                return [4, this.fireDragManagerEvent("onDropSuccess", e, o.onDropSuccess, {
                  context: a
                })];
              case 3:
                u.sent();
                u.label = 4;
              case 4:
                this.triggerDragStatusChange(false, o.onDragStatusChange);
                this.clearContext(n);
                e.preventDefault();
                e.stopImmediatePropagation();
                this.resetStatus(!s);
                return [3, 6];
              case 5:
                this.resetStatus(true);
                u.label = 6;
              case 6:
                return [2];
            }
          });
        });
      };
      this.dragMoveEventProperty = ["altKey", "buttons", "x", "y", "pageX", "pageY", "clientX", "clientY", "screenX", "screenY"];
      this.handleMouseMove = debounceUtilWrapper.createDebounce(function (e, n) {
        return c(r, undefined, undefined, function () {
          var r;
          var o;
          var s;
          var a;
          var l;
          var u;
          var c;
          var g;
          var p;
          var f;
          var v;
          var y;
          var b;
          return h(this, function (h) {
            if (!this.draggingIds.length) {
              return [2];
            }
            if (!n) {
              this.currentMouseMoveInfo = throttledPathFilterStringify.throttledPathStr(e, this.dragMoveEventProperty);
            }
            if (!this.enabled || e.buttons !== 1) {
              this.resetStatus(true);
              return [2];
            }
            this.setMasker(false);
            r = this.packDragMoveEvent(e);
            if (this.dropManager) {
              this.dropManager.analyseDroppingIds(r);
            }
            s = (o = this.getListeners()).dragId;
            a = o.dragListeners;
            if (!s || !a) {
              this.setMasker(true);
              return [2];
            }
            l = this.getContext(s);
            if (this.startPosition) {
              c = (u = this.startPosition).x;
              g = u.y;
              if (Math.abs(e.x - c) <= 2 && Math.abs(e.y - g) <= 2) {
                this.setMasker(true);
                return [2];
              }
              this.startPosition = null;
            }
            this.scrollIfNeccessary(e);
            e.preventDefault();
            e.stopImmediatePropagation();
            this.renderSnapshot(e);
            this.fireDragManagerEvent("onDragMove", r, a.onDragMove, {
              context: l
            });
            if (this.dropManager) {
              try {
                for (f = (p = d(this.dropManager.getAllListeners())).next(); !f.done; f = p.next()) {
                  v = f.value.handlers;
                  this.fireDropManagerEvent("onDragMove", r, v.onDragMove);
                }
              } catch (e) {
                y = {
                  error: e
                };
              } finally {
                try {
                  if (f && !f.done && (b = p.return)) {
                    b.call(p);
                  }
                } finally {
                  if (y) {
                    throw y.error;
                  }
                }
              }
            }
            this.triggerDragStatusChange(true, a.onDragStatusChange);
            this.setMasker(true);
            return [2];
          });
        });
      }, 50);
      this.handleScroll = function () {
        return c(r, undefined, undefined, function () {
          return h(this, function (e) {
            if (this.currentMouseMoveInfo) {
              this.handleMouseMove(new MouseEvent("mousemove", deepCloneWrapper_1.deepClone(this.currentMouseMoveInfo)), true);
            }
            return [2];
          });
        });
      };
      this.handleWindowBlur = function () {
        return c(r, undefined, undefined, function () {
          var e;
          var r;
          var n;
          return h(this, function (o) {
            r = (e = this.getListeners()).dragId;
            if ((n = e.dragListeners) && r) {
              this.triggerDragStatusChange(false, n.onDragStatusChange);
              this.clearContext(r);
            }
            this.resetStatus(true);
            return [2];
          });
        });
      };
      this.masker = null;
      this.mouseEventTypes = this.getMouseEventTypes();
      this.bindEvents();
    }
    Object.defineProperty(e.prototype, "currentMouseMoveInfo", {
      get: function () {
        return this._currentMouseMoveInfo;
      },
      set: function (e) {
        this._currentMouseMoveInfo = e;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.register = function (e, r) {
      if (!Array.isArray(e)) {
        e = [e];
      }
      var n = uuidGeneratorUtil.generateUuid();
      this.idToListeners[n] = u({
        target: e
      }, r);
      return n;
    };
    e.prototype.deregister = function (e) {
      delete this.idToListeners[e];
    };
    e.prototype.connect = function (e) {
      this.dropManager = e;
    };
    e.prototype.disconnect = function () {
      this.dropManager = null;
    };
    e.prototype.disable = function () {
      this.enabled = false;
    };
    e.prototype.enable = function () {
      this.enabled = true;
    };
    e.prototype.destroy = function () {
      this.idToListeners = {};
      this.handleMouseMove.cancel();
      if (this.dropManager) {
        this.dropManager.destroy();
      }
      this.disconnect();
      this.unbindEvents();
      this.renderSnapshot();
    };
    e.prototype.isUsePointerEvent = function () {
      return !!this.options?.usePointerEvent;
    };
    e.prototype.getMouseEventTypes = function () {
      if (this.isUsePointerEvent()) {
        return {
          mousedown: "pointerdown",
          mousemove: "pointermove",
          mouseup: "pointerup"
        };
      } else {
        return {
          mousedown: "mousedown",
          mousemove: "mousemove",
          mouseup: "mouseup"
        };
      }
    };
    e.prototype.bindEvents = function () {
      document.addEventListener(this.mouseEventTypes.mousedown, this.handleMouseDown);
      document.addEventListener(this.mouseEventTypes.mouseup, this.handleMouseUp);
      document.addEventListener(this.mouseEventTypes.mousemove, this.handleMouseMove);
      if (this.options && this.options.scrollContainer) {
        this.options.scrollContainer.addEventListener("scroll", this.handleScroll);
      }
      window.addEventListener("blur", this.handleWindowBlur);
    };
    e.prototype.unbindEvents = function () {
      document.removeEventListener(this.mouseEventTypes.mousedown, this.handleMouseDown);
      document.removeEventListener(this.mouseEventTypes.mouseup, this.handleMouseUp);
      document.removeEventListener(this.mouseEventTypes.mousemove, this.handleMouseMove);
      if (this.options && this.options.scrollContainer) {
        this.options.scrollContainer.removeEventListener("scroll", this.handleScroll);
      }
      window.removeEventListener("blur", this.handleWindowBlur);
    };
    e.prototype.packDragMoveEvent = function (e) {
      return u({
        target: e.target
      }, throttledPathFilterStringify.throttledPathStr(e, this.dragMoveEventProperty));
    };
    e.prototype.scrollIfNeccessary = function (e) {
      var r = e.y;
      if (this.options) {
        var n = this.options;
        var o = n.scrollContainer;
        var i = n.topDelta;
        var s = n.bottomDelta;
        var a = window.innerHeight - r < s;
        var l = r < i;
        if ((l || a) && this.scrollIntervalId == null) {
          this.scrollIntervalId = window.setInterval(function () {
            var e = (l ? -1 : 1) * 6;
            if (o) {
              o.scrollTop += e;
            } else {
              window.scrollBy(0, e);
            }
          }, 10);
        } else if (!l && !a && !!this.scrollIntervalId) {
          window.clearInterval(this.scrollIntervalId);
          this.scrollIntervalId = null;
        }
      }
    };
    e.prototype.setMasker = function (e) {
      if (this.masker) {
        this.masker.style.pointerEvents = e ? "" : "none";
      }
    };
    e.prototype.renderSnapshot = function (e) {
      var r = document.querySelector(".adit-draggable-snapshot-container");
      if (!this.snapshot || !e) {
        if (r && r.parentNode) {
          r.parentNode.removeChild(r);
        }
        if (this.masker && this.masker.parentElement) {
          this.masker.parentElement.removeChild(this.masker);
          this.masker = null;
        }
        return;
      }
      var n = u({
        position: ["center", "center"]
      }, this.snapshot.options || {});
      var o = n.position;
      var i = n.afterMount;
      var s = {
        top: "0",
        left: "0",
        center: "-50%",
        right: "-100%",
        bottom: "-100%"
      };
      if (!r) {
        (r = document.createElement("div")).className = "adit-draggable-snapshot-container";
        Object.assign(r.style, {
          position: "absolute",
          zIndex: "9999",
          transform: "translate(" + s[o[0]] + ", " + s[o[1]] + ")",
          pointerEvents: "none"
        });
        document.body.appendChild(r);
      }
      if (this.previousSnapshot !== this.snapshot.node) {
        r.innerHTML = "";
        r.appendChild(this.snapshot.node);
        this.previousSnapshot = this.snapshot.node;
      }
      Object.assign(r.style, {
        display: "block",
        transform: "translate3d(" + e.x + "px, " + e.y + "px, 0px)"
      });
      if (!this.masker) {
        this.masker = document.createElement("div");
        Object.assign(this.masker.style, {
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          cursor: "grabbing",
          zIndex: "99999"
        });
        document.body.appendChild(this.masker);
      }
      if (i) {
        i();
      }
    };
    e.prototype.pickDraggingTarget = function () {
      if (this.draggingIds.length) {
        this.draggingIds.length;
        return {
          id: this.draggingIds[0],
          listeners: throttledOmitPathStringify.omitPathStringify(this.idToListeners[this.draggingIds[0]], ["target"])
        };
      } else {
        return {
          id: null,
          listeners: null
        };
      }
    };
    e.prototype.getContext = function (e) {
      this.idToContext[e] = this.idToContext[e] || {};
      return this.idToContext[e];
    };
    e.prototype.clearContext = function (e) {
      delete this.idToContext[e];
    };
    e.prototype.getListeners = function () {
      var e = this.draggingIds;
      if (!this.dropManager || !e.length) {
        return {
          dragId: null,
          dropId: null,
          dragListeners: null,
          dropListeners: null
        };
      }
      var r = this.pickDraggingTarget();
      var n = r.id;
      var o = r.listeners;
      var i = this.dropManager.pickDroppingTarget();
      return {
        dragId: n,
        dropId: i.id,
        dragListeners: o,
        dropListeners: i.listeners
      };
    };
    e.prototype.fireDragManagerEvent = function (e, r, n, o) {
      return c(this, undefined, undefined, function () {
        var i;
        var s;
        var a;
        return h(this, function (l) {
          switch (l.label) {
            case 0:
              if (!this.dropManager || !n) {
                return [2];
              }
              if (e === "onDropFailed") {
                n();
                return [2];
              }
              if (!r || !(r.target instanceof Element)) {
                return [2];
              }
              i = o.context;
              s = r.target;
              l.label = 1;
            case 1:
              l.trys.push([1, 12,, 13]);
              switch (e) {
                case "getSnapshot":
                  return [3, 2];
                case "onDragMove":
                  return [3, 3];
                case "onDrop":
                  return [3, 5];
                case "onDragStart":
                  return [3, 7];
              }
              return [3, 9];
            case 2:
              return [2, n(s, r)];
            case 3:
            case 5:
            case 7:
            case 9:
              return [4, n(s, r, i)];
            case 4:
            case 6:
            case 8:
              return [2, l.sent()];
            case 10:
              l.sent();
              return [3, 11];
            case 11:
              return [3, 13];
            case 12:
              a = l.sent();
              this.resetStatus(true);
              throw a;
            case 13:
              return [2];
          }
        });
      });
    };
    e.prototype.fireDropManagerEvent = function (e, r, n, o) {
      return c(this, undefined, undefined, function () {
        var i;
        return h(this, function (s) {
          switch (s.label) {
            case 0:
              if (!this.dropManager || !n || !(r.target instanceof Element)) {
                return [2];
              }
              i = r.target;
              switch (e) {
                case "onDrop":
                  return [3, 1];
                case "onDropMove":
                  return [3, 4];
              }
              return [3, 5];
            case 1:
              if (!o) {
                return [3, 3];
              }
              return [4, n(i, r, o.dragData)];
            case 2:
              return [2, s.sent()];
            case 3:
              return [2, false];
            case 4:
              return [2, n(i, r)];
            case 5:
              return [4, n(i, r)];
            case 6:
              s.sent();
              return [3, 7];
            case 7:
              return [2, undefined];
          }
        });
      });
    };
    e.prototype.analyseDraggingIds = function (e) {
      this.draggingIds = p(e, this.idToListeners);
    };
    e.prototype.triggerDragStatusChange = function (e, r) {
      if (this.isDragging !== e) {
        this.isDragging = e;
        if (r) {
          r(e);
        }
      }
    };
    e.prototype.resetStatus = function (e) {
      var r = this.getListeners().dragListeners;
      this.triggerDragStatusChange(false, r ? r.onDragStatusChange : undefined);
      if (e && r && r.onDropFailed) {
        r.onDropFailed();
      }
      if (this.dropManager) {
        this.dropManager.resetStatus();
      }
      this.draggingIds = [];
      this.snapshot = null;
      this.previousSnapshot = null;
      this.currentMouseMoveInfo = null;
      this.renderSnapshot();
      if (this.scrollIntervalId) {
        window.clearInterval(this.scrollIntervalId);
        this.scrollIntervalId = null;
      }
    };
    return e;
  }();
  (function (e, r) {
    var n = (r = r || {}).insertAt;
    var o = r.className;
    if (e && typeof document != "undefined") {
      var i = document.head || document.getElementsByTagName("head")[0];
      var s = document.createElement("style");
      s.type = "text/css";
      if (o) {
        s.setAttribute("class", o);
      }
      if (n === "top" && i.firstChild) {
        i.insertBefore(s, i.firstChild);
      } else {
        i.appendChild(s);
      }
      if (s.styleSheet) {
        s.styleSheet.cssText = e;
      } else {
        s.appendChild(document.createTextNode(e));
      }
    }
  })(".adit-dragging-cursor * {\n  cursor: grabbing !important;\n}\n", {
    className: "adit-style"
  });
  var v = function () {
    function e(e = {}) {
      this.options = e;
      this.droppingIds = [];
      this.idToListeners = {};
    }
    e.prototype.analyseDroppingIds = function (e) {
      if (this.options.withoutDropTarget) {
        this.droppingIds = Object.keys(this.idToListeners).slice(0, 1);
      } else {
        this.droppingIds = p(e, this.idToListeners);
      }
    };
    e.prototype.exactlyMatch = function (e, r) {
      var n = this.idToListeners[e];
      if (!n || !(r.target instanceof Element)) {
        return false;
      }
      var o = function (e, r) {
        if (!e) {
          return null;
        }
        r = Array.isArray(r) ? r : [r];
        var n;
        var o;
        var i = e;
        while (i) {
          try {
            n = undefined;
            var s = d(r);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var l = a.value;
              if (l instanceof Element) {
                if (i === l) {
                  return i;
                }
              } else if (i.matches(l)) {
                return i;
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (a && !a.done && (o = s.return)) {
                o.call(s);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          i = i.parentElement;
        }
        return null;
      }(r.target, n.target);
      if (!o) {
        return false;
      }
      var i = r.relatedTarget;
      return i instanceof Element && document.contains(i) && !o.contains(i);
    };
    e.prototype.getAllListeners = function () {
      return Object.entries(this.idToListeners).map(function (e) {
        var r = g(e, 2);
        var n = r[0];
        var o = r[1];
        return {
          id: n,
          handlers: (o.target, function (e, r) {
            var n = {};
            for (var o in e) {
              if (Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0) {
                n[o] = e[o];
              }
            }
            if (e != null && typeof Object.getOwnPropertySymbols == "function") {
              var i = 0;
              var o = Object.getOwnPropertySymbols(e);
              for (; i < o.length; i++) {
                if (r.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i])) {
                  n[o[i]] = e[o[i]];
                }
              }
            }
            return n;
          }(o, ["target"]))
        };
      });
    };
    e.prototype.pickDroppingTarget = function () {
      if (this.droppingIds.length) {
        this.droppingIds.length;
        return {
          id: this.droppingIds[0],
          listeners: throttledOmitPathStringify.omitPathStringify(this.idToListeners[this.droppingIds[0]], ["target"])
        };
      } else {
        return {
          id: null,
          listeners: null
        };
      }
    };
    e.prototype.register = function (e, r) {
      if (!Array.isArray(e)) {
        e = [e];
      }
      var n = uuidGeneratorUtil.generateUuid();
      this.idToListeners[n] = u({
        target: e
      }, r);
      return n;
    };
    e.prototype.deregister = function (e) {
      delete this.idToListeners[e];
    };
    e.prototype.destroy = function () {
      this.idToListeners = {};
    };
    e.prototype.resetStatus = function () {
      this.droppingIds = [];
    };
    return e;
  }();
  require.d(exports, {
    DropManager: function () {
      return v;
    },
    DragManager: function () {
      return f;
    }
  });
}