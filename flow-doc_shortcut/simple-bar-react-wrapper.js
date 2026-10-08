// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SimpleBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 758191
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  function s() {
    return (s = Object.assign || function (e) {
      var i;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var o in i = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(i, o)) {
            e[o] = i[o];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function a(e) {
    if (e && e.ownerDocument && e.ownerDocument.defaultView) {
      return e.ownerDocument.defaultView;
    } else {
      return window;
    }
  }
  function c(e) {
    if (e && e.ownerDocument) {
      return e.ownerDocument;
    } else {
      return document;
    }
  }
  function d(e) {
    return Array.prototype.reduce.call(e, function (e, i) {
      var r = i.name.match(/data-simplebar-(.+)/);
      if (r) {
        var n = r[1].replace(/\W+(.)/g, function (e, i) {
          return i.toUpperCase();
        });
        switch (i.value) {
          case "true":
          case undefined:
            e[n] = true;
            break;
          case "false":
            e[n] = false;
            break;
          default:
            e[n] = i.value;
        }
      }
      return e;
    }, {});
  }
  function u(e, i) {
    var r;
    if (e) {
      (r = e.classList).add.apply(r, i.split(" "));
    }
  }
  function h(e, i) {
    if (e) {
      i.split(" ").forEach(function (i) {
        e.classList.remove(i);
      });
    }
  }
  function p(e) {
    return `.${e.split(" ").join(".")}`;
  }
  var f = typeof window != "undefined" && !!window.document && !!window.document.createElement;
  var g = Object.freeze({
    __proto__: null,
    addClasses: u,
    canUseDOM: f,
    classNamesToQuery: p,
    getElementDocument: c,
    getElementWindow: a,
    getOptions: d,
    removeClasses: h
  });
  var m = null;
  var v = null;
  function b() {
    if (m === null) {
      if (typeof document == "undefined") {
        return m = 0;
      }
      var e = document.body;
      var i = document.createElement("div");
      i.classList.add("simplebar-hide-scrollbar");
      e.appendChild(i);
      var r = i.getBoundingClientRect().right;
      e.removeChild(i);
      m = r;
    }
    return m;
  }
  if (f) {
    window.addEventListener("resize", function () {
      if (v !== window.devicePixelRatio) {
        v = window.devicePixelRatio;
        m = null;
      }
    });
  }
  var y = function () {
    function e(i, r = {}) {
      var n = this;
      this.removePreventClickId = null;
      this.minScrollbarWidth = 20;
      this.stopScrollDelay = 175;
      this.isScrolling = false;
      this.isMouseEntering = false;
      this.isDragging = false;
      this.scrollXTicking = false;
      this.scrollYTicking = false;
      this.wrapperEl = null;
      this.contentWrapperEl = null;
      this.contentEl = null;
      this.offsetEl = null;
      this.maskEl = null;
      this.placeholderEl = null;
      this.heightAutoObserverWrapperEl = null;
      this.heightAutoObserverEl = null;
      this.rtlHelpers = null;
      this.scrollbarWidth = 0;
      this.resizeObserver = null;
      this.mutationObserver = null;
      this.elStyles = null;
      this.isRtl = null;
      this.mouseX = 0;
      this.mouseY = 0;
      this.onMouseMove = function () {};
      this.onWindowResize = function () {};
      this.onStopScrolling = function () {};
      this.onMouseEntered = function () {};
      this.onScroll = function () {
        var e = a(n.el);
        if (!n.scrollXTicking) {
          e.requestAnimationFrame(n.scrollX);
          n.scrollXTicking = true;
        }
        if (!n.scrollYTicking) {
          e.requestAnimationFrame(n.scrollY);
          n.scrollYTicking = true;
        }
        if (!n.isScrolling) {
          n.isScrolling = true;
          u(n.el, n.classNames.scrolling);
        }
        n.showScrollbar("x");
        n.showScrollbar("y");
        n.onStopScrolling();
      };
      this.scrollX = function () {
        if (n.axis.x.isOverflowing) {
          n.positionScrollbar("x");
        }
        n.scrollXTicking = false;
      };
      this.scrollY = function () {
        if (n.axis.y.isOverflowing) {
          n.positionScrollbar("y");
        }
        n.scrollYTicking = false;
      };
      this._onStopScrolling = function () {
        h(n.el, n.classNames.scrolling);
        if (n.options.autoHide) {
          n.hideScrollbar("x");
          n.hideScrollbar("y");
        }
        n.isScrolling = false;
      };
      this.onMouseEnter = function () {
        if (!n.isMouseEntering) {
          u(n.el, n.classNames.mouseEntered);
          n.showScrollbar("x");
          n.showScrollbar("y");
          n.isMouseEntering = true;
        }
        n.onMouseEntered();
      };
      this._onMouseEntered = function () {
        h(n.el, n.classNames.mouseEntered);
        if (n.options.autoHide) {
          n.hideScrollbar("x");
          n.hideScrollbar("y");
        }
        n.isMouseEntering = false;
      };
      this._onMouseMove = function (e) {
        n.mouseX = e.clientX;
        n.mouseY = e.clientY;
        if (n.axis.x.isOverflowing || n.axis.x.forceVisible) {
          n.onMouseMoveForAxis("x");
        }
        if (n.axis.y.isOverflowing || n.axis.y.forceVisible) {
          n.onMouseMoveForAxis("y");
        }
      };
      this.onMouseLeave = function () {
        n.onMouseMove.cancel();
        if (n.axis.x.isOverflowing || n.axis.x.forceVisible) {
          n.onMouseLeaveForAxis("x");
        }
        if (n.axis.y.isOverflowing || n.axis.y.forceVisible) {
          n.onMouseLeaveForAxis("y");
        }
        n.mouseX = -1;
        n.mouseY = -1;
      };
      this._onWindowResize = function () {
        n.scrollbarWidth = n.getScrollbarWidth();
        n.hideNativeScrollbar();
      };
      this.onPointerEvent = function (e) {
        var i;
        var r;
        if (n.axis.x.track.el && n.axis.y.track.el && n.axis.x.scrollbar.el && n.axis.y.scrollbar.el) {
          n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect();
          n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect();
          if (n.axis.x.isOverflowing || n.axis.x.forceVisible) {
            i = n.isWithinBounds(n.axis.x.track.rect);
          }
          if (n.axis.y.isOverflowing || n.axis.y.forceVisible) {
            r = n.isWithinBounds(n.axis.y.track.rect);
          }
          if (i || r) {
            e.stopPropagation();
            if (e.type === "pointerdown" && e.pointerType !== "touch") {
              if (i) {
                n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect();
                if (n.isWithinBounds(n.axis.x.scrollbar.rect)) {
                  n.onDragStart(e, "x");
                } else {
                  n.onTrackClick(e, "x");
                }
              }
              if (r) {
                n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect();
                if (n.isWithinBounds(n.axis.y.scrollbar.rect)) {
                  n.onDragStart(e, "y");
                } else {
                  n.onTrackClick(e, "y");
                }
              }
            }
          }
        }
      };
      this.drag = function (i) {
        if (n.draggedAxis && n.contentWrapperEl) {
          var g;
          var m = n.axis[n.draggedAxis].track;
          var v = m.rect?.[n.axis[n.draggedAxis].sizeAttr] ?? 0;
          var b = n.axis[n.draggedAxis].scrollbar;
          var y = n.contentWrapperEl?.[n.axis[n.draggedAxis].scrollSizeAttr] ?? 0;
          var w = parseInt(n.elStyles?.[n.axis[n.draggedAxis].sizeAttr] ?? "0px", 10);
          i.preventDefault();
          i.stopPropagation();
          var k = (n.draggedAxis === "y" ? i.pageY : i.pageX) - (m.rect?.[n.axis[n.draggedAxis].offsetAttr] ?? 0) - n.axis[n.draggedAxis].dragOffset;
          var S = (k = n.draggedAxis === "x" && n.isRtl ? (m.rect?.[n.axis[n.draggedAxis].sizeAttr] ?? 0) - b.size - k : k) / (v - b.size) * (y - w);
          if (n.draggedAxis === "x" && n.isRtl) {
            S = e.getRtlHelpers()?.isScrollingToNegative ? -S : S;
          }
          n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = S;
        }
      };
      this.onEndDrag = function (e) {
        n.isDragging = false;
        var i = c(n.el);
        var r = a(n.el);
        e.preventDefault();
        e.stopPropagation();
        h(n.el, n.classNames.dragging);
        n.onStopScrolling();
        i.removeEventListener("mousemove", n.drag, true);
        i.removeEventListener("mouseup", n.onEndDrag, true);
        n.removePreventClickId = r.setTimeout(function () {
          i.removeEventListener("click", n.preventClick, true);
          i.removeEventListener("dblclick", n.preventClick, true);
          n.removePreventClickId = null;
        });
      };
      this.preventClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
      this.el = i;
      this.options = s(s({}, e.defaultOptions), r);
      this.classNames = s(s({}, e.defaultOptions.classNames), r.classNames);
      this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: {
            size: null,
            el: null,
            rect: null,
            isVisible: false
          },
          scrollbar: {
            size: null,
            el: null,
            rect: null,
            isVisible: false
          }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: {
            size: null,
            el: null,
            rect: null,
            isVisible: false
          },
          scrollbar: {
            size: null,
            el: null,
            rect: null,
            isVisible: false
          }
        }
      };
      if (typeof this.el != "object" || !this.el.nodeName) {
        throw Error(`Argument passed to SimpleBar must be an HTML element instead of ${this.el}`);
      }
      this.onMouseMove = debounceUtilWrapper.createDebounce(this._onMouseMove, 64);
      this.onWindowResize = debounceUtil_1_1.debounce(this._onWindowResize, 64, {
        leading: true
      });
      this.onStopScrolling = debounceUtil_1_1.debounce(this._onStopScrolling, this.stopScrollDelay);
      this.onMouseEntered = debounceUtil_1_1.debounce(this._onMouseEntered, this.stopScrollDelay);
      this.init();
    }
    e.getRtlHelpers = function () {
      if (e.rtlHelpers) {
        return e.rtlHelpers;
      }
      var i = document.createElement("div");
      i.innerHTML = "<div class=\"simplebar-dummy-scrollbar-size\"><div></div></div>";
      var r = i.firstElementChild;
      var n = r == null ? undefined : r.firstElementChild;
      if (!n) {
        return null;
      }
      document.body.appendChild(r);
      r.scrollLeft = 0;
      var o = e.getOffset(r);
      var l = e.getOffset(n);
      r.scrollLeft = -999;
      var s = e.getOffset(n);
      document.body.removeChild(r);
      e.rtlHelpers = {
        isScrollOriginAtZero: o.left !== l.left,
        isScrollingToNegative: l.left !== s.left
      };
      return e.rtlHelpers;
    };
    e.prototype.getScrollbarWidth = function () {
      try {
        if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
          return 0;
        }
        return b();
      } catch (e) {
        return b();
      }
    };
    e.getOffset = function (e) {
      var i = e.getBoundingClientRect();
      var r = c(e);
      var n = a(e);
      return {
        top: i.top + (n.pageYOffset || r.documentElement.scrollTop),
        left: i.left + (n.pageXOffset || r.documentElement.scrollLeft)
      };
    };
    e.prototype.init = function () {
      if (f) {
        this.initDOM();
        this.rtlHelpers = e.getRtlHelpers();
        this.scrollbarWidth = this.getScrollbarWidth();
        this.recalculate();
        this.initListeners();
      }
    };
    e.prototype.initDOM = function () {
      var e;
      var i;
      this.wrapperEl = this.el.querySelector(p(this.classNames.wrapper));
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(p(this.classNames.contentWrapper));
      this.contentEl = this.options.contentNode || this.el.querySelector(p(this.classNames.contentEl));
      this.offsetEl = this.el.querySelector(p(this.classNames.offset));
      this.maskEl = this.el.querySelector(p(this.classNames.mask));
      this.placeholderEl = this.findChild(this.wrapperEl, p(this.classNames.placeholder));
      this.heightAutoObserverWrapperEl = this.el.querySelector(p(this.classNames.heightAutoObserverWrapperEl));
      this.heightAutoObserverEl = this.el.querySelector(p(this.classNames.heightAutoObserverEl));
      this.axis.x.track.el = this.findChild(this.el, `${p(this.classNames.track)}${p(this.classNames.horizontal)}`);
      this.axis.y.track.el = this.findChild(this.el, `${p(this.classNames.track)}${p(this.classNames.vertical)}`);
      this.axis.x.scrollbar.el = ((e = this.axis.x.track.el) === null || e === undefined ? undefined : e.querySelector(p(this.classNames.scrollbar))) || null;
      this.axis.y.scrollbar.el = ((i = this.axis.y.track.el) === null || i === undefined ? undefined : i.querySelector(p(this.classNames.scrollbar))) || null;
      if (!this.options.autoHide) {
        u(this.axis.x.scrollbar.el, this.classNames.visible);
        u(this.axis.y.scrollbar.el, this.classNames.visible);
      }
    };
    e.prototype.initListeners = function () {
      var e;
      var i = this;
      var r = a(this.el);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("pointerdown", this.onPointerEvent, true);
      this.el.addEventListener("mousemove", this.onMouseMove);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
      if ((e = this.contentWrapperEl) !== null && e !== undefined) {
        e.addEventListener("scroll", this.onScroll);
      }
      r.addEventListener("resize", this.onWindowResize);
      if (this.contentEl) {
        if (window.ResizeObserver) {
          var n = false;
          var o = r.ResizeObserver || ResizeObserver;
          this.resizeObserver = new o(function () {
            if (n) {
              r.requestAnimationFrame(function () {
                i.recalculate();
              });
            }
          });
          this.resizeObserver.observe(this.el);
          this.resizeObserver.observe(this.contentEl);
          r.requestAnimationFrame(function () {
            n = true;
          });
        }
        this.mutationObserver = new r.MutationObserver(function () {
          r.requestAnimationFrame(function () {
            i.recalculate();
          });
        });
        this.mutationObserver.observe(this.contentEl, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    };
    e.prototype.recalculate = function () {
      if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
        var e = a(this.el);
        this.elStyles = e.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === "rtl";
        var i = this.contentEl.offsetWidth;
        var r = this.heightAutoObserverEl.offsetHeight <= 1;
        var n = this.heightAutoObserverEl.offsetWidth <= 1 || i > 0;
        var o = this.contentWrapperEl.offsetWidth;
        var l = this.elStyles.overflowX;
        var s = this.elStyles.overflowY;
        this.contentEl.style.padding = `${this.elStyles.paddingTop} ${this.elStyles.paddingRight} ${this.elStyles.paddingBottom} ${this.elStyles.paddingLeft}`;
        this.wrapperEl.style.margin = `-${this.elStyles.paddingTop} -${this.elStyles.paddingRight} -${this.elStyles.paddingBottom} -${this.elStyles.paddingLeft}`;
        var c = this.contentEl.scrollHeight;
        var d = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = r ? "auto" : "100%";
        this.placeholderEl.style.width = n ? `${i || d}px` : "auto";
        this.placeholderEl.style.height = `${c}px`;
        var u = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = i !== 0 && d > i;
        this.axis.y.isOverflowing = c > u;
        this.axis.x.isOverflowing = l !== "hidden" && this.axis.x.isOverflowing;
        this.axis.y.isOverflowing = s !== "hidden" && this.axis.y.isOverflowing;
        this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
        this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
        this.hideNativeScrollbar();
        var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
        var p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && d > o - p;
        this.axis.y.isOverflowing = this.axis.y.isOverflowing && c > u - h;
        this.axis.x.scrollbar.size = this.getScrollbarSize("x");
        this.axis.y.scrollbar.size = this.getScrollbarSize("y");
        if (this.axis.x.scrollbar.el) {
          this.axis.x.scrollbar.el.style.width = `${this.axis.x.scrollbar.size}px`;
        }
        if (this.axis.y.scrollbar.el) {
          this.axis.y.scrollbar.el.style.height = `${this.axis.y.scrollbar.size}px`;
        }
        this.positionScrollbar("x");
        this.positionScrollbar("y");
        this.toggleTrackVisibility("x");
        this.toggleTrackVisibility("y");
      }
    };
    e.prototype.getScrollbarSize = function (e = "y") {
      if (!this.axis[e].isOverflowing || !this.contentEl) {
        return 0;
      }
      var n;
      var o = this.contentEl[this.axis[e].scrollSizeAttr];
      var l = this.axis[e].track.el?.[this.axis[e].offsetSizeAttr] ?? 0;
      n = Math.max(~~(l / o * l), this.options.scrollbarMinSize);
      if (this.options.scrollbarMaxSize) {
        n = Math.min(n, this.options.scrollbarMaxSize);
      }
      return n;
    };
    e.prototype.positionScrollbar = function (i = "y") {
      var l = this.axis[i].scrollbar;
      if (this.axis[i].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) {
        var s = this.contentWrapperEl[this.axis[i].scrollSizeAttr];
        var a = this.axis[i].track.el?.[this.axis[i].offsetSizeAttr] || 0;
        var c = parseInt(this.elStyles[this.axis[i].sizeAttr], 10);
        var d = this.contentWrapperEl[this.axis[i].scrollOffsetAttr];
        d = i === "x" && this.isRtl && e.getRtlHelpers()?.isScrollOriginAtZero ? -d : d;
        if (i === "x" && this.isRtl) {
          d = e.getRtlHelpers()?.isScrollingToNegative ? d : -d;
        }
        var u = d / (s - c);
        var h = ~~((a - l.size) * u);
        h = i === "x" && this.isRtl ? -h + (a - l.size) : h;
        l.el.style.transform = i === "x" ? `translate3d(${h}px, 0, 0)` : `translate3d(0, ${h}px, 0)`;
      }
    };
    e.prototype.toggleTrackVisibility = function (e = "y") {
      var i = this.axis[e].track.el;
      var r = this.axis[e].scrollbar.el;
      if (i && r && this.contentWrapperEl) {
        if (this.axis[e].isOverflowing || this.axis[e].forceVisible) {
          i.style.visibility = "visible";
          this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll";
          this.el.classList.add(`${this.classNames.scrollable}-${e}`);
        } else {
          i.style.visibility = "hidden";
          this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden";
          this.el.classList.remove(`${this.classNames.scrollable}-${e}`);
        }
        if (this.axis[e].isOverflowing) {
          r.style.display = "block";
        } else {
          r.style.display = "none";
        }
      }
    };
    e.prototype.showScrollbar = function (e = "y") {
      if (this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible) {
        u(this.axis[e].scrollbar.el, this.classNames.visible);
        this.axis[e].scrollbar.isVisible = true;
      }
    };
    e.prototype.hideScrollbar = function (e = "y") {
      if (!this.isDragging && this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible) {
        h(this.axis[e].scrollbar.el, this.classNames.visible);
        this.axis[e].scrollbar.isVisible = false;
      }
    };
    e.prototype.hideNativeScrollbar = function () {
      if (this.offsetEl) {
        this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? `-${this.scrollbarWidth}px` : "0px";
        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? `-${this.scrollbarWidth}px` : "0px";
      }
    };
    e.prototype.onMouseMoveForAxis = function (e = "y") {
      var i = this.axis[e];
      if (i.track.el && i.scrollbar.el) {
        i.track.rect = i.track.el.getBoundingClientRect();
        i.scrollbar.rect = i.scrollbar.el.getBoundingClientRect();
        if (this.isWithinBounds(i.track.rect)) {
          this.showScrollbar(e);
          u(i.track.el, this.classNames.hover);
          if (this.isWithinBounds(i.scrollbar.rect)) {
            u(i.scrollbar.el, this.classNames.hover);
          } else {
            h(i.scrollbar.el, this.classNames.hover);
          }
        } else {
          h(i.track.el, this.classNames.hover);
          if (this.options.autoHide) {
            this.hideScrollbar(e);
          }
        }
      }
    };
    e.prototype.onMouseLeaveForAxis = function (e = "y") {
      h(this.axis[e].track.el, this.classNames.hover);
      h(this.axis[e].scrollbar.el, this.classNames.hover);
      if (this.options.autoHide) {
        this.hideScrollbar(e);
      }
    };
    e.prototype.onDragStart = function (e, i = "y") {
      this.isDragging = true;
      var n = c(this.el);
      var o = a(this.el);
      var l = this.axis[i].scrollbar;
      var s = i === "y" ? e.pageY : e.pageX;
      this.axis[i].dragOffset = s - (l.rect?.[this.axis[i].offsetAttr] || 0);
      this.draggedAxis = i;
      u(this.el, this.classNames.dragging);
      n.addEventListener("mousemove", this.drag, true);
      n.addEventListener("mouseup", this.onEndDrag, true);
      if (this.removePreventClickId === null) {
        n.addEventListener("click", this.preventClick, true);
        n.addEventListener("dblclick", this.preventClick, true);
      } else {
        o.clearTimeout(this.removePreventClickId);
        this.removePreventClickId = null;
      }
    };
    e.prototype.onTrackClick = function (e, i) {
      var s = this;
      if (i === undefined) {
        i = "y";
      }
      var c = this.axis[i];
      if (this.options.clickOnTrack && c.scrollbar.el && this.contentWrapperEl) {
        e.preventDefault();
        var d = a(this.el);
        this.axis[i].scrollbar.rect = c.scrollbar.el.getBoundingClientRect();
        var u = this.axis[i].scrollbar.rect?.[this.axis[i].offsetAttr] ?? 0;
        var h = parseInt(this.elStyles?.[this.axis[i].sizeAttr] ?? "0px", 10);
        var p = this.contentWrapperEl[this.axis[i].scrollOffsetAttr];
        var f = (i === "y" ? this.mouseY - u : this.mouseX - u) < 0 ? -1 : 1;
        var g = f === -1 ? p - h : p + h;
        function m() {
          if (s.contentWrapperEl) {
            if (f === -1) {
              if (p > g) {
                p -= 40;
                s.contentWrapperEl[s.axis[i].scrollOffsetAttr] = p;
                d.requestAnimationFrame(m);
              }
            } else if (p < g) {
              p += 40;
              s.contentWrapperEl[s.axis[i].scrollOffsetAttr] = p;
              d.requestAnimationFrame(m);
            }
          }
        }
        m();
      }
    };
    e.prototype.getContentElement = function () {
      return this.contentEl;
    };
    e.prototype.getScrollElement = function () {
      return this.contentWrapperEl;
    };
    e.prototype.removeListeners = function () {
      var e = a(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter);
      this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
      this.el.removeEventListener("mousemove", this.onMouseMove);
      this.el.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.contentWrapperEl) {
        this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
      }
      e.removeEventListener("resize", this.onWindowResize);
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.onMouseMove.cancel();
      this.onWindowResize.cancel();
      this.onStopScrolling.cancel();
      this.onMouseEntered.cancel();
    };
    e.prototype.unMount = function () {
      this.removeListeners();
    };
    e.prototype.isWithinBounds = function (e) {
      return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height;
    };
    e.prototype.findChild = function (e, i) {
      var r = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
      return Array.prototype.filter.call(e.children, function (e) {
        return r.call(e, i);
      })[0];
    };
    e.rtlHelpers = null;
    e.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    };
    e.getOptions = d;
    e.helpers = g;
    return e;
  }();
  function w() {
    return (w = Object.assign || function (e) {
      var i;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var o in i = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(i, o)) {
            e[o] = i[o];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var k = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r = e.children;
    var o = e.scrollableNodeProps;
    var l = o === undefined ? {} : o;
    var s = function (e, i) {
      var r = {};
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0) {
          r[n] = e[n];
        }
      }
      if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        var n = Object.getOwnPropertySymbols(e);
        for (; o < n.length; o++) {
          if (i.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o])) {
            r[n[o]] = e[n[o]];
          }
        }
      }
      return r;
    }(e, ["children", "scrollableNodeProps"]);
    var a = reactCoreLibraryReexport.useRef();
    var c = reactCoreLibraryReexport.useRef();
    var d = reactCoreLibraryReexport.useRef();
    var u = {};
    var h = {};
    Object.keys(s).forEach(function (e) {
      if (Object.prototype.hasOwnProperty.call(y.defaultOptions, e)) {
        u[e] = s[e];
      } else {
        h[e] = s[e];
      }
    });
    var p = w(w({}, y.defaultOptions.classNames), u.classNames);
    var f = w(w({}, l), {
      className: `${p.contentWrapper}${l.className ? ` ${l.className}` : ""}`,
      tabIndex: u.tabIndex || y.defaultOptions.tabIndex,
      role: "region",
      "aria-label": u.ariaLabel || y.defaultOptions.ariaLabel
    });
    reactCoreLibraryReexport.useEffect(function () {
      var e;
      c.current = f.ref ? f.ref.current : c.current;
      if (a.current) {
        e = new y(a.current, w(w(w({}, u), c.current && {
          scrollableNode: c.current
        }), d.current && {
          contentNode: d.current
        }));
        if (typeof i == "function") {
          i(e);
        } else if (i) {
          i.current = e;
        }
      }
      return function () {
        if (e != null) {
          e.unMount();
        }
        e = null;
        if (typeof i == "function") {
          i(null);
        }
      };
    }, []);
    return reactCoreLibraryReexport.createElement("div", w({
      "data-simplebar": "init",
      ref: a
    }, h), reactCoreLibraryReexport.createElement("div", {
      className: p.wrapper
    }, reactCoreLibraryReexport.createElement("div", {
      className: p.heightAutoObserverWrapperEl
    }, reactCoreLibraryReexport.createElement("div", {
      className: p.heightAutoObserverEl
    })), reactCoreLibraryReexport.createElement("div", {
      className: p.mask
    }, reactCoreLibraryReexport.createElement("div", {
      className: p.offset
    }, typeof r == "function" ? r({
      scrollableNodeRef: c,
      scrollableNodeProps: w(w({}, f), {
        ref: c
      }),
      contentNodeRef: d,
      contentNodeProps: {
        className: p.contentEl,
        ref: d
      }
    }) : reactCoreLibraryReexport.createElement("div", w({}, f), reactCoreLibraryReexport.createElement("div", {
      className: p.contentEl
    }, r)))), reactCoreLibraryReexport.createElement("div", {
      className: p.placeholder
    })), reactCoreLibraryReexport.createElement("div", {
      className: `${p.track} simplebar-horizontal`
    }, reactCoreLibraryReexport.createElement("div", {
      className: p.scrollbar
    })), reactCoreLibraryReexport.createElement("div", {
      className: `${p.track} simplebar-vertical`
    }, reactCoreLibraryReexport.createElement("div", {
      className: p.scrollbar
    })));
  });
  k.displayName = "SimpleBar";
  require.d(exports, {
    SimpleBar: function () {
      return k;
    }
  });
}