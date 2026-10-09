// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'TableComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 748693
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var reactZeroWidthSpace = require("react-zero-width-space") /*id: 285939*/;
  var userAgentParser_1 = require("user-agent-parser_1") /*id: 757289*/;
  var s = userAgentParser_1;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var jqueryCoreLibrary = require("jquery-core-library") /*id: 775150*/;
  var d = jqueryCoreLibrary;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var editorTableUtils = require("editor-table-utils") /*id: 447337*/;
  var getScrollbarWidth = require("get-scrollbar-width") /*id: 616672*/;
  var m = getScrollbarWidth;
  var requestAnimationFramePolyfill = require("request-animation-frame-polyfill") /*id: 580334*/;
  var b = requestAnimationFramePolyfill;
  var reactPropTypesCore = require("react-prop-types-core") /*id: 165964*/;
  var E = {
    innerZoneEditor: reactPropTypesCore.PropTypes.object,
    innerZoneIdToInitialHTML: reactPropTypesCore.PropTypes.object.isRequired
  };
  var C = {
    MOVE: "move"
  };
  var R = "juice-ignore-node-class";
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var boundMethodDecorator = require("bound-method-decorator") /*id: 369553*/;
  function M(e) {
    return Math.max.apply(Math, typescriptHelpers_1.spreadArray(e));
  }
  function k(e) {
    if (window.requestIdleCallback) {
      return window.requestIdleCallback(e);
    }
    var t = Date.now();
    return window.setTimeout(function () {
      e({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - t));
        }
      });
    });
  }
  function T(e) {
    if (window.cancelIdleCallback) {
      return window.cancelIdleCallback(e);
    } else {
      return clearTimeout(e);
    }
  }
  function x() {
    return function (e, t, n) {
      var i = n.value;
      var o = false;
      return {
        configurable: true,
        get: function () {
          if (o || this === e.prototype || this.hasOwnProperty(t)) {
            return i;
          }
          var n;
          var a;
          n = i.bind(this);
          a = null;
          function l() {
            var e = [];
            var t = 0;
            for (; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
            if (e[0] && e[0].persist) {
              e[0].persist();
            }
            if (a === null) {
              a = b(function () {
                n.apply(undefined, typescriptHelpers_1.spreadArray(e));
                a = null;
              });
            }
            return a;
          }
          o = true;
          Object.defineProperty(this, t, {
            value: l,
            configurable: true,
            writable: true
          });
          o = false;
          return l;
        }
      };
    };
  }
  var L = s.getParser(window.navigator.userAgent);
  var D = L.getOSName(true).includes("ios");
  var A = L.getPlatformType(true).includes("mobile");
  var _ = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.randomKey = Math.random();
      n.idleTimer = 0;
      n.bindBaseEvents = function () {
        d(window).on("resize.table-scrollable" + n.randomKey, n.handleContentResize);
      };
      n.removeBaseEvents = function () {
        d(document).off(".table-scrollable" + n.randomKey);
        d(window).off(".table-scrollable" + n.randomKey);
      };
      n.bindMouseEvents = function () {
        d(document).on("mousemove.table-scrollable" + n.randomKey, n.handleThumbDrag);
        d(document).on("mouseup.table-scrollable" + n.randomKey, n.handleMouseUp);
      };
      n.removeMouseEvents = function () {
        d(document).off(".table-scrollable" + n.randomKey);
      };
      n.requestIdleHandleContentResize = function () {
        if (!n.idleTimer) {
          n.idleTimer = k(function () {
            n._handleContentResize();
            n.idleTimer = 0;
          });
        }
      };
      n.cancelIdleHandleContentResize = function () {
        if (n.idleTimer) {
          T(n.idleTimer);
          n.idleTimer = 0;
        }
      };
      n.onResize = function () {
        var e = n.state;
        var t = e.showLeftScrollShadow;
        var i = e.showRightScrollShadow;
        var o = e.leftShadowWidth;
        var r = e.rightShadowWidth;
        var a = e.scrollLeft;
        if (n.props.onResize) {
          n.props.onResize(t, i, o, r, a);
        }
      };
      n.onScroll = function () {
        var e = n.state;
        var t = e.showLeftScrollShadow;
        var i = e.showRightScrollShadow;
        var o = e.leftShadowWidth;
        var r = e.rightShadowWidth;
        var a = e.scrollLeft;
        if (n.props.onScroll) {
          n.props.onScroll(t, i, o, r, a);
        }
      };
      n.maybeHideScrollShadows = function () {
        n.setState(n.calcScrollShadows());
      };
      n.handleThumbMouseDown = function (e) {
        e.preventDefault();
        n.setState({
          initialScroll: n.state.scrollLeft,
          initialPosition: e.pageX,
          scrolling: true
        });
        n.bindMouseEvents();
      };
      n.handleThumbDrag = function (e) {
        var t = n.state;
        var i = t.clientWidth;
        var o = t.scrollWidth;
        var r = t.initialScroll;
        var a = t.initialPosition;
        n.scrollableRef.scrollLeft = r + (a - e.pageX) * -1 * (o / i);
      };
      n.handleMouseUp = function () {
        n.setState({
          scrolling: false
        });
        n.removeMouseEvents();
      };
      n.handleJumpLeft = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (n.scrollableRef) {
          var t = n.state;
          var i = t.scrollLeft;
          var o = t.clientWidth;
          n.scrollableRef.scrollLeft = Math.max(i - o, 0);
        }
      };
      n.handleJumpRight = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (n.scrollableRef) {
          var t = n.state;
          var i = t.scrollLeft;
          var o = t.clientWidth;
          var r = t.scrollWidth;
          n.scrollableRef.scrollLeft = numberClampUtil.clampNumber(i + o, 0, r - o);
        }
      };
      n.handleWrapScroll = function () {
        if (D) {
          var e = window.getSelection();
          if (e && e.rangeCount) {
            var t = e.getRangeAt(0).cloneRange();
            e.removeAllRanges();
            e.addRange(t);
          }
        }
      };
      var i = t.colAttribs.reduce(function (e, t) {
        return e + Number(t.colWidth || 100);
      }, 0);
      n.state = {
        hideScrollBar: true,
        clientWidth: 0,
        scrollWidth: i,
        leftOffset: 0,
        scrollLeft: 0,
        nativeScrollbarWidth: m(),
        firstRender: true,
        showLeftScrollShadow: false,
        showRightScrollShadow: false,
        leftShadowWidth: 0,
        rightShadowWidth: 0,
        initialScroll: 0,
        initialPosition: 0,
        scrolling: false
      };
      n.state = Object.assign(n.state, n.calcScrollShadows());
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {
      if (this.scrollableRef) {
        this.bindBaseEvents();
        setTimeout(t.updateRectInfo, 200);
      }
    };
    n.componentDidUpdate = function (e, t) {
      if (this.state.firstRender) {
        this.setState({
          firstRender: false
        });
      }
    };
    n.componentWillUnmount = function () {
      this.removeMouseEvents();
      this.removeBaseEvents();
    };
    n.handleContentResize = function () {
      this._handleContentResize();
    };
    n._handleContentResize = function () {
      if (this.scrollableRef) {
        this.setState({
          hideScrollBar: false,
          clientWidth: this.scrollableRef.clientWidth,
          scrollWidth: this.scrollableRef.scrollWidth,
          scrollLeft: this.scrollableRef.scrollLeft
        });
        this.maybeHideScrollShadows();
        this.setState({}, this.onResize);
      }
    };
    n.handleScroll = function (e) {
      e.preventDefault();
      var n = this.state;
      var i = n.scrollWidth;
      var o = n.clientWidth;
      var r = this.scrollableRef.scrollLeft;
      var a = numberClampUtil.clampNumber(r, 0, i - o - 3);
      if (r !== a) {
        e.target.scrollLeft = a;
      }
      this.maybeHideScrollShadows();
      t.updateRectInfo();
      this.setState({
        scrollLeft: a
      }, this.onScroll);
    };
    n.calcScrollShadows = function () {
      var e = this.state;
      var t = e.scrollLeft;
      var n = e.scrollWidth;
      var i = e.clientWidth;
      return {
        showLeftScrollShadow: t !== 0,
        showRightScrollShadow: !(i >= n - 1) && !(t + i > n - 1),
        leftShadowWidth: Math.min(8, t / 3),
        rightShadowWidth: Math.min(8, (n - (t + i)) / 3)
      };
    };
    n.setTableOuterWrapperRef = function (e) {
      if (e) {
        this.scrollableChildrenRef = e;
      }
    };
    n.render = function () {
      var e;
      var t;
      var n = this;
      var i = this.state;
      var o = i.scrolling;
      var r = i.showLeftScrollShadow;
      var a = i.showRightScrollShadow;
      var l = i.leftShadowWidth;
      var s = i.rightShadowWidth;
      var u = i.nativeScrollbarWidth;
      var d = i.clientWidth;
      var h = i.scrollWidth;
      var p = i.scrollLeft;
      var g = r || a;
      var m = "15px";
      var y = f(this.props.className, A ? null : {
        "tb-scrollable": true,
        "tb-scrollable-scrolling": o,
        "tb-scrollable-with-scrollbar": g,
        "tb-scrollable-with-shadow-left": r,
        "tb-scrollable-with-shadow-right": a
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: y,
        onScroll: this.handleWrapScroll
      }, reactCoreLibraryReexport.createElement("div", {
        className: "tb-scrollable-content",
        ref: function (e) {
          n.scrollableRef = e;
        },
        onScroll: this.handleScroll,
        style: {
          paddingBottom: g ? 15 + !u * 15 : 0,
          marginBottom: g ? (u || 14) * -1 : 0
        }
      }, reactCoreLibraryReexport.createElement("div", {
        className: "tb-scrollable-children",
        ref: this.setTableOuterWrapperRef
      }, this.props.children), reactCoreLibraryReexport.createElement("div", {
        className: f("tb-scrollable-shadow", "tb-scrollable-shadow-left", ((e = {
          "tb-scrollable-shadow-enabled": r
        })[R] = true, e[editorTableUtils.ignoreDomFlag] = true, e)),
        style: {
          width: l,
          bottom: m
        }
      }), reactCoreLibraryReexport.createElement("div", {
        className: f("tb-scrollable-shadow", "tb-scrollable-shadow-right", ((t = {
          "tb-scrollable-shadow-enabled": a
        })[R] = true, t[editorTableUtils.ignoreDomFlag] = true, t)),
        style: {
          width: s,
          bottom: m
        }
      }), reactCoreLibraryReexport.createElement(N, {
        enabled: !this.state.hideScrollBar && !this.state.firstRender && (r || a || g),
        onThumbMouseDown: this.handleThumbMouseDown,
        onJumpLeft: this.handleJumpLeft,
        onJumpRight: this.handleJumpRight,
        clientWidth: d,
        scrollWidth: h,
        scrollLeft: p
      })));
    };
    t.updateRectInfo = debounceUtilWrapper.createDebounce(function () {}, 50);
    typescriptHelpers_1.decorate([x()], t.prototype, "handleContentResize", null);
    typescriptHelpers_1.decorate([x()], t.prototype, "handleScroll", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "calcScrollShadows", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "setTableOuterWrapperRef", null);
    return t;
  }(reactCoreLibraryReexport.Component);
  function N(e) {
    if (!e.enabled) {
      return reactCoreLibraryReexport.createElement("div", {
        className: editorTableUtils.ignoreDomFlag
      });
    }
    var t;
    var n = e.clientWidth;
    var i = e.scrollWidth;
    var o = e.scrollLeft;
    var r = e.onThumbMouseDown;
    var a = e.onJumpLeft;
    var l = e.onJumpRight;
    var s = n / i;
    var u = {
      width: Math.floor(n * s) - 4,
      left: Math.floor(o * s)
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: f("tb-scrollable-scrollbar", ((t = {})[R] = true, t[editorTableUtils.ignoreDomFlag] = true, t))
    }, reactCoreLibraryReexport.createElement("div", {
      className: "tb-scrollable-page-left",
      style: {
        width: u.left
      },
      onMouseDown: a
    }), reactCoreLibraryReexport.createElement("div", {
      className: "tb-scrollable-page-right",
      style: {
        width: Math.max(0, n - u.width - u.left - 8)
      },
      onMouseDown: l
    }), reactCoreLibraryReexport.createElement("div", {
      className: "tb-scrollable-scrollbar-thumb",
      style: u,
      onMouseDown: r
    }));
  }
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var tableCellIdUtils = require("table-cell-id-utils") /*id: 693152*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  var editorZoneRenderer = require("editor-zone-renderer") /*id: 566183*/;
  var keyboardShortcutConstants = require("keyboard-shortcut-constants") /*id: 159910*/;
  var instanceDecoratorUtil = require("instance-decorator-util") /*id: 317038*/;
  function U(e) {
    var t;
    var n;
    var i = this;
    this.overallContentEditable = false;
    this.zoneIdReg = RegExp("[^a-z0-9]");
    this.isDisposed = false;
    this.bindEvent = function () {
      i.$el.on("focus", i.handleFocus);
      i.$el.on("blur", i.handleBlur);
      i.$el.on("mouseenter", i.handleMouseEnter);
      i.$el.on("mouseleave", i.handleMouseLeave);
      i.$el.on("keydown", i.handleKeyDown);
      i.editor.on("ace-table-editable-change", i.handleEditableChange);
      i.editor.on("selectionchange", i.handleSelectionChange);
      i.isDisposed = false;
    };
    this.handleSelectionChange = function (e) {
      var t = e.previous;
      var n = e.current;
      var o = t.start.zoneId;
      var r = n.start.zoneId;
      if (o !== r && o === i.zoneId) {
        i.updateIsFocusedInRep(false);
      }
      if (r === i.zoneId && !i.isFocusedInRep) {
        i.updateIsFocusedInRep(true);
      }
    };
    this.handleFocus = function () {
      i.isFocused = true;
      i.updateContentEditableness();
      i.editor.call("inner-zone-focus", {
        zoneId: i.zoneId
      });
    };
    this.handleBlur = function () {
      i.isFocused = false;
      i.updateContentEditableness();
      i.editor.call("inner-zone-blur", {
        zoneId: i.zoneId
      });
    };
    this.handleMouseEnter = function () {
      i.isMouseOver = true;
      i.updateContentEditableness();
    };
    this.handleMouseLeave = function () {
      i.isMouseOver = false;
      i.updateContentEditableness();
    };
    this.handleKeyDown = function (e) {
      var t = i.editor;
      var n = t.selection.getSelection();
      if (n.isCollapsed()) {
        var o = t.getContentState().getZoneState(n.start.zoneId);
        if (o) {
          var r = o.isEmpty();
          var a = n.start.line === o.length() - 1;
          if (r && a && e.keyCode === 46) {
            e.preventDefault();
          }
        }
      }
    };
    this.handleEditableChange = function (e) {
      i.updateEditorContentEditable(e);
    };
    this.dispose = function () {
      i.$el.off();
      i.editor.off("ace-table-editable-change", i.handleEditableChange);
      i.editor.off("selectionchange", i.handleSelectionChange);
      i.isDisposed = true;
    };
    this.updateEditorContentEditable = function (e) {
      i.isEditorContentEditable = e;
      i.updateContentEditableness();
    };
    this.updateContentEditableness = function () {
      if (!i.editor.isEditable()) {
        if (i.overallContentEditable === null) {
          i.node.setAttribute("contentEditable", "false");
          i.overallContentEditable = false;
        }
        return;
      }
      var e = !!i.isEditorContentEditable && (!!i.isMouseOver || !!i.isFocused || !!i.isFocusedInRep);
      if (e !== i.overallContentEditable) {
        i.node.setAttribute("contentEditable", e ? "true" : "false");
        i.overallContentEditable = e;
      }
    };
    this.updateIsFocusedInRep = function (e) {
      i.isFocusedInRep = e;
      i.updateContentEditableness();
    };
    this.updateNode = function (e) {
      i.node = e;
    };
    this.mountVNode = function (e) {
      i.node = e;
      i.$el = d(e);
      i.node.zoneId = {
        value: i.zoneId
      };
    };
    this.getNode = function () {
      return i.node;
    };
    var o = e.editor;
    var r = e.zoneId;
    var a = e.editable;
    var l = e.$preRenderNode;
    this.zoneId = r;
    this.editor = o;
    this.isEditorContentEditable = a;
    this.isMouseOver = false;
    this.isFocused = false;
    this.isFocusedInRep = false;
    if (this.zoneIdReg.test(this.zoneId)) {
      throw Error("bad zone id (regex): " + this.zoneId);
    }
    var s = l || (t = this.zoneId, (n = document.createElement("div")).setAttribute("class", "ace-editor selenium-inner-zone-ace-editor syntax notranslate zoneId-" + t), n.setAttribute("data-zone-id", t), n.setAttribute("data-gramm", "false"), d(n));
    this.$el = s;
    this.node = this.$el.get(0);
    this.node.zoneId = {
      value: this.zoneId
    };
    this.node.setAttribute("contenteditable", this.isEditorContentEditable.toString());
  }
  var Y = keyboardShortcutConstants.isUndoRedoEvent;
  var j = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.innerZoneRef = null;
      t.innerZoneInstance = null;
      t.handleClick = function (e) {
        var n = t.props;
        var i = n.zoneId;
        var o = n.horizontalScrollToZone;
        if (o) {
          o({
            start: {
              zoneId: i,
              line: 0,
              offset: 0
            },
            end: {
              zoneId: i,
              line: 0,
              offset: 0
            }
          });
        }
        if (t.props.onClick) {
          t.props.onClick(e);
        }
      };
      t.handleKeyDown = function (e) {
        if (t.props.onKeyDown) {
          t.props.onKeyDown(e);
        }
      };
      t.handleInput = function (e) {
        if (t.props.onInput) {
          t.props.onInput(e);
        }
      };
      t.handleMouseDown = function (e) {
        var n = t.editor;
        var i = t.props;
        var o = i.zoneId;
        var r = i.onMouseDown;
        var a = n.selection.getSelection().start;
        if (!Y(e) && !e.shiftKey && o !== a.zoneId && r) {
          r(e);
        }
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    Object.defineProperty(n, "editor", {
      get: function () {
        return this.context.innerZoneEditor;
      },
      enumerable: false,
      configurable: true
    });
    n.getTableForNode = function (e) {
      var t;
      if (t = e.closest ? e.closest(".ace-table-wrapper-outer") : d(e).closest(".ace-table-wrapper-outer").get(0)) {
        return t.parentNode;
      } else {
        return null;
      }
    };
    n.handleInitZoneView = function (e) {
      var t = this.props.zoneId;
      var n = this.editor;
      if (e && !this.innerZoneInstance) {
        this.innerZoneInstance = new U({
          zoneId: t,
          editor: n,
          editable: this.editor.isEditable()
        });
        this.innerZoneInstance.mountVNode(e);
        this.innerZoneInstance.bindEvent();
      }
    };
    n.UNSAFE_componentWillMount = function () {
      var e = this.props.zoneId;
      var t = this.editor.getContentState().getZoneState(e);
      if (!t) {
        this.editor.getContentState().addZone(e);
        t = this.editor.getContentState().getZoneState(e);
      }
      this.setState({
        content: t
      });
    };
    n.componentDidMount = function () {
      var e = this.props.zoneId;
      this.editor.call("innerZoneMount", {
        el: this.innerZoneRef && this.innerZoneRef.parentElement,
        zoneId: e,
        className: editorTableUtils.ignoreDomFlag
      });
    };
    n.shouldComponentUpdate = function (e) {
      return this.props.zoneId !== e.zoneId || this.props.className !== e.className;
    };
    n.componentWillUnmount = function () {
      if (this.innerZoneInstance) {
        this.innerZoneInstance.dispose();
      }
    };
    n.render = function () {
      var e = this;
      var t = f("inner-zone-ace-editor-wrapper", this.props.className);
      var n = this.props.zoneId;
      return reactCoreLibraryReexport.createElement(reactEditorContext.editorContext.Provider, {
        value: this.editor
      }, reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
        className: t,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onInput: this.handleInput,
        "data-ace-inner-zone-content-wrapper-zone-id": n,
        contentEditable: false,
        ref: function (t) {
          e.innerZoneRef = t;
        }
      }, reactCoreLibraryReexport.createElement(editorZoneRenderer.ZoneRenderer, {
        editor: this.editor,
        zoneId: n,
        onMount: this.handleInitZoneView,
        scroller: false
      })), reactCoreLibraryReexport.createElement("div", {
        className: "ep-ranges ignore-dom"
      }), reactCoreLibraryReexport.createElement("div", {
        className: "ep-cursors ignore-dom"
      })));
    };
    t.contextTypes = editorTableUtils.tablePropTypes;
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleInitZoneView", null);
    return t;
  }(reactCoreLibraryReexport.Component);
  (i = o ||= {})[i.BackSpace = 8] = "BackSpace";
  i[i.Tab = 9] = "Tab";
  i[i.Clear = 12] = "Clear";
  i[i.Enter = 13] = "Enter";
  i[i.Shift = 16] = "Shift";
  i[i.Ctrl = 17] = "Ctrl";
  i[i.Alt = 18] = "Alt";
  i[i.Esc = 27] = "Esc";
  i[i.Space = 32] = "Space";
  i[i.PageUp = 33] = "PageUp";
  i[i.PageDown = 34] = "PageDown";
  i[i.End = 35] = "End";
  i[i.Home = 36] = "Home";
  i[i.Left = 37] = "Left";
  i[i.Up = 38] = "Up";
  i[i.Right = 39] = "Right";
  i[i.Down = 40] = "Down";
  i[i.Delete = 46] = "Delete";
  i[i.Digit0 = 48] = "Digit0";
  i[i.Digit9 = 57] = "Digit9";
  i[i.A = 65] = "A";
  i[i.B = 66] = "B";
  i[i.C = 67] = "C";
  i[i.D = 68] = "D";
  i[i.E = 69] = "E";
  i[i.F = 70] = "F";
  i[i.G = 71] = "G";
  i[i.H = 72] = "H";
  i[i.I = 73] = "I";
  i[i.J = 74] = "J";
  i[i.K = 75] = "K";
  i[i.L = 76] = "L";
  i[i.M = 77] = "M";
  i[i.N = 78] = "N";
  i[i.O = 79] = "O";
  i[i.P = 80] = "P";
  i[i.Q = 81] = "Q";
  i[i.R = 82] = "R";
  i[i.S = 83] = "S";
  i[i.T = 84] = "T";
  i[i.U = 85] = "U";
  i[i.V = 86] = "V";
  i[i.W = 87] = "W";
  i[i.X = 88] = "X";
  i[i.Y = 89] = "Y";
  i[i.Z = 90] = "Z";
  i[i.Meta = 91] = "Meta";
  i[i.RightMeta = 93] = "RightMeta";
  i[i.Caret = 94] = "Caret";
  i[i.Numpad0 = 96] = "Numpad0";
  i[i.Numpad9 = 105] = "Numpad9";
  i[i.NumpadDot = 110] = "NumpadDot";
  i[i.F11 = 122] = "F11";
  i[i.Semicolon = 186] = "Semicolon";
  i[i.Plus = 187] = "Plus";
  i[i.Minus = 189] = "Minus";
  i[i.Dot = 190] = "Dot";
  i[i.Grave = 192] = "Grave";
  i[i.Bracket = 219] = "Bracket";
  i[i.Quot = 222] = "Quot";
  i[i.Asterisk = 106] = "Asterisk";
  i[i.Slash = 111] = "Slash";
  i[i["/"] = 191] = "/";
  i[i["\\"] = 220] = "\\";
  i[i.Ime = 229] = "Ime";
  var X = L.getOSName(true).includes("macos");
  var q = L.getBrowserName(true).includes("safari");
  o.Up;
  o.Down;
  o.Left;
  o.Right;
  var J = [o.C, o.V, o.X];
  function G(e) {
    if (X || q) {
      return e.metaKey && !e.altKey;
    } else {
      return e.ctrlKey && !e.altKey;
    }
  }
  var $ = L.getBrowserName(true).includes("edge");
  var Q = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.hoverTimer = null;
      t.state = {
        doingHorzResize: false,
        doingVertResize: false,
        initialX: -1,
        initialY: -1
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.onHorzMouseDown = function (e) {
      var t = this;
      var n = this.props.onHorzResizeStart;
      e.preventDefault();
      e.stopPropagation();
      d(document).off(".resizable");
      if (n) {
        n();
      }
      this.setState({
        doingHorzResize: true,
        initialX: e.screenX
      }, function () {
        d(document).on("mousemove.resizable", t.onHorzMouseMove);
        d(document).on("mouseup.resizable", t.onHorzMouseUp);
      });
    };
    n.onHorzMouseUp = function () {
      var e = this.props;
      var t = e.onHorzResizeEnd;
      var n = e.onHorzMouseLeave;
      d(document).off(".resizable");
      if (n) {
        n();
      }
      if (t) {
        t();
      }
      this.setState({
        doingHorzResize: false,
        initialX: -1
      });
    };
    n.onHorzMouseMove = function (e) {
      var t = this.state;
      var n = t.doingHorzResize;
      var i = t.initialX;
      var o = this.props.onHorzResize;
      if (n && o) {
        e.preventDefault();
        o(e.screenX - i);
      }
    };
    n.onHorzMouseEnter = function (e) {
      var t = this;
      e.stopPropagation();
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
      }
      this.hoverTimer = window.setTimeout(function () {
        t.hoverTimer = null;
        if (t.props.onHorzMouseEnter) {
          t.props.onHorzMouseEnter();
        }
      }, 10);
    };
    n.onHorzMouseLeave = function () {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
      }
      if (!!this.props.onHorzMouseLeave && !this.state.doingHorzResize && !this.props.isHorzBeingResized) {
        this.props.onHorzMouseLeave();
      }
    };
    n.onVertMouseDown = function (e) {
      var t = this;
      var n = this.props.onVertResizeStart;
      e.preventDefault();
      d(document).off(".resizable");
      if (n) {
        n();
      }
      this.setState({
        doingVertResize: true,
        initialY: e.screenY
      }, function () {
        d(document).on("mousemove.resizable", t.onVertMouseMove);
        d(document).on("mouseup.resizable", t.onVertMouseUp);
      });
    };
    n.onVertMouseMove = function (e) {
      var t = this.props.onVertResize;
      var n = this.state;
      var i = n.doingVertResize;
      var o = n.initialY;
      if (i && t) {
        e.preventDefault();
        t(e.screenY - o);
      }
    };
    n.onVertMouseUp = function () {
      var e = this.props;
      var t = e.onVertResizeEnd;
      var n = e.onVertMouseLeave;
      d(document).off(".resizable");
      if (n) {
        n();
      }
      if (t) {
        t();
      }
      this.setState({
        doingVertResize: false,
        initialY: -1
      });
    };
    n.onVertMouseEnter = function (e) {
      var t = this;
      e.stopPropagation();
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
      }
      this.hoverTimer = window.setTimeout(function () {
        t.hoverTimer = null;
        if (t.props.onVertMouseEnter) {
          t.props.onVertMouseEnter();
        }
      }, 10);
    };
    n.onVertMouseLeave = function (e) {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
      }
      if (!!this.props.onVertMouseLeave && !this.state.doingVertResize && !this.props.isVertBeingResized) {
        this.props.onVertMouseLeave();
      }
    };
    n.componentWillUnmount = function () {
      d(document).off(".resizable");
    };
    n.render = function () {
      var e = this.props;
      var t = e.alignToLeft;
      var n = e.isHorzHovered;
      var i = e.disableVertResize;
      var o = e.isVertHovered;
      var a = e.alignToTop;
      var l = (this.props.className || "") + " tb-resizable";
      var s = [];
      var u = this.props.htmlTag || "div";
      var d = Object.assign({}, this.props, {
        className: l
      });
      d = throttledOmitPathStringify.omitPathStringify(d, ["htmlTag", "onHorzResize", "onHorzResizeStart", "onHorzResizeEnd", "onVertResize", "onVertResizeStart", "onVertResizeEnd", "onVertMouseLeave", "onVertMouseEnter", "onHorzMouseEnter", "onHorzMouseLeave", "disableHorzResize", "disableVertResize", "alignToTop", "alignToLeft", "isHorzHovered", "isVertHovered", "isHorzBeingResized", "isVertBeingResized", "children", $ ? "contentEditable" : ""]);
      if (!this.props.disableHorzResize || this.props.isHorzHovered) {
        s.push(reactCoreLibraryReexport.createElement("div", {
          key: 1,
          className: f("ignore-dom", "tb-resizable-grippy", "tb-resizable-horz", {
            "tb-resizable-left": t,
            "is-hovered": n
          }),
          onMouseEnter: this.onHorzMouseEnter,
          onMouseLeave: this.onHorzMouseLeave,
          onMouseDown: this.onHorzMouseDown
        }, reactCoreLibraryReexport.createElement("div", {
          className: "tb-resizable-grippy-inner"
        })));
      }
      if (!i || o) {
        s.push(reactCoreLibraryReexport.createElement("div", {
          key: 2,
          className: f("ignore-dom", "tb-resizable-grippy", "tb-resizable-vert", {
            "tb-resizable-top": a,
            "is-hovered": o
          }),
          onMouseEnter: this.onVertMouseEnter,
          onMouseLeave: this.onVertMouseLeave,
          onMouseDown: this.onVertMouseDown,
          onMouseMove: this.onVertMouseMove
        }, reactCoreLibraryReexport.createElement("div", {
          className: "tb-resizable-grippy-inner"
        })));
      }
      return reactCoreLibraryReexport.createElement(u, typescriptHelpers_1.assign({}, d), reactCoreLibraryReexport.createElement("div", {
        className: "separate-td-content-editable",
        contentEditable: false
      }, this.props.children, s));
    };
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzMouseDown", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzMouseUp", null);
    typescriptHelpers_1.decorate([x()], t.prototype, "onHorzMouseMove", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzMouseEnter", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzMouseLeave", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseDown", null);
    typescriptHelpers_1.decorate([x()], t.prototype, "onVertMouseMove", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseUp", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseEnter", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseLeave", null);
    return t;
  }(reactCoreLibraryReexport.Component);
  var ee = L.getPlatformType(true).includes("mobile");
  var et = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        initialWidth: 0,
        initialHeight: 0,
        diffX: 0,
        diffY: 0,
        editable: t.editor.isEditable()
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {};
    n.shouldComponentUpdate = function (e, t) {
      var n = ["isTopBorderHighlighted", "isLeftBorderHighlighted", "isRightBorderHighlighted", "disableHorzResize", "disableVertResize", "isBottomBorderHighlighted", "isColumnBeingResized", "isRowBeingResized", "author", "cellId", "isEditAdd", "isEditDel", "isDeletionHint", "isSelected", "isBeingDragged", "diffType", "selectedCellColor", "width", "height", "rowIndex", "rowSpan", "colIndex", "colSpan", "borderStyle", "backgroundColor"];
      var i = throttledPathFilterStringify.throttledPathStr(this.props, n);
      var o = throttledPathFilterStringify.throttledPathStr(e, n);
      return !deepEqualUtil_1.deepEqual(i, o) || !deepEqualUtil_1.deepEqual(t, this.state);
    };
    n.componentDidUpdate = function (e) {
      var t = this.props;
      var n = t.table;
      var i = t.cellId;
      var o = t.rowSpan;
      var r = t.colSpan;
      var a = t.rowIndex;
      var l = t.colIndex;
      var s = t.cellAttribs;
      if ((e.colSpan !== r && r === 0 || e.rowSpan !== o && o === 0) && i === this.editor.getContentState().getActiveZone().getZoneId()) {
        var u = editorTableUtils.findCellIndices(a, l, s);
        var d = u.rowIndex;
        var c = u.colIndex;
        setTimeout(function () {
          n.focusAndCollapseSelectionOntoCell(d, c, [-1, -1]);
        }, 0);
      }
    };
    Object.defineProperty(n, "editor", {
      get: function () {
        return this.context.innerZoneEditor;
      },
      enumerable: false,
      configurable: true
    });
    n.setInnerZoneStyle = function () {
      var e;
      var t;
      var n = ["minHeight", "maxHeight", "fontSize"];
      try {
        var i = typescriptHelpers_1.getValues(Object.entries(this.props.style));
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var a = typescriptHelpers_1.readIterator(o.value, 2);
          var l = a[0];
          var s = a[1];
          var u = s;
          if (n.includes(l) && typeof s == "number") {
            u = s.toString() + "px";
          }
          if (u != null) {
            this.innerZone.innerZoneRef.style[l] = u;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (t = i.return)) {
            t.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    n.onCellMouseUp = function (e) {
      var t = this.props;
      var n = t.table;
      var i = t.rowIndex;
      var o = t.colIndex;
      if (!!e.target.classList.contains("ace-table-cell") && !G(e) && !e.shiftKey && window.getSelection().type !== "Range" && !this.props.table.getSelectStatus().length) {
        n.focusAndCollapseSelectionOntoCell(i, o);
      }
    };
    n.onCellKeyDown = function (e) {
      if (G(e) && J.indexOf(e.keyCode) !== -1) {
        e.stopPropagation();
      }
      if (G(e) && e.keyCode === o.A) {
        e.preventDefault();
        e.stopPropagation();
        this.props.table.selectEntireCell({
          cellId: this.props.cellId,
          withMergedCell: true
        });
      }
    };
    n.onHorzResizeStart = function () {
      var e = this.props;
      var t = e.onHorzResizeStart;
      var n = e.colIndex;
      var i = e.colSpan;
      if (t) {
        t(n + (i > 1 ? i - 1 : 0));
      }
      this.onResizeStart();
    };
    n.onHorzResizeEnd = function () {
      var e = this.props;
      var t = e.onHorzResizeEnd;
      var n = e.colIndex;
      var i = e.colSpan;
      var o = this.state.diffX;
      if (t) {
        t(n + (i > 1 ? i - 1 : 0), o);
      }
      this.onResizeEnd();
    };
    n.onHorzResize = function (e) {
      if (this.props.onHorzResize) {
        this.props.onHorzResize(this.props.colIndex, this.props.rowIndex, e);
      }
      if (this.props.onHorzDiff) {
        e = this.props.onHorzDiff(this.props.colIndex, e);
      }
      this.setState({
        diffX: e
      });
    };
    n.onVertResizeStart = function () {
      var e = this.props;
      var t = e.onVertResizeStart;
      var n = e.rowIndex;
      var i = e.rowSpan;
      if (t) {
        t(n + (i > 1 ? i - 1 : 0));
      }
      this.onResizeStart();
    };
    n.onVertResizeEnd = function () {
      var e = this.props;
      var t = e.onVertResizeEnd;
      var n = e.rowIndex;
      var i = e.rowSpan;
      var o = this.state.diffY;
      if (t) {
        t(n + (i > 1 ? i - 1 : 0), o);
      }
      this.onResizeEnd();
    };
    n.onVertResize = function (e) {
      if (this.props.onVertResize) {
        this.props.onVertResize(this.props.rowIndex, this.props.colIndex, e);
      }
      this.setState({
        diffY: e
      });
    };
    n.onHorzMouseEnter = function () {
      if (this.isEditable()) {
        var e = this.props;
        var t = e.table;
        var n = e.colSpan;
        var i = e.colIndex;
        t.setHighlightColumn(i + (n > 1 ? n - 1 : 0));
      }
    };
    n.onHorzMouseLeave = function () {
      this.props.table.setHighlightColumn(null);
    };
    n.onVertMouseEnter = function () {
      if (this.isEditable()) {
        var e = this.props;
        var t = e.table;
        var n = e.rowSpan;
        var i = e.rowIndex;
        t.setHighlightRow(i + (n > 1 ? n - 1 : 0));
      }
    };
    n.onVertMouseLeave = function () {
      this.props.table.setHighlightRow(null);
    };
    n.onVertMouseEnd = function () {
      this.props.table.setHighlightRow(null);
    };
    n.resetWidth = function () {
      this.setState({
        initialWidth: null
      });
    };
    n.resetHeight = function () {
      this.setState({
        initialHeight: null
      });
    };
    n.onResizeStart = function () {
      var e = this.props;
      var t = e.width;
      var n = e.height;
      this.setState({
        initialWidth: t || 0,
        initialHeight: n || 0
      });
    };
    n.onResizeEnd = function () {
      this.setState({
        diffX: 0,
        diffY: 0,
        initialWidth: null,
        initialHeight: null
      });
    };
    n.handleMouseEnter = function () {
      var e = this.editor.isEditable();
      if (e !== this.state.editable) {
        this.setState({
          editable: e
        });
      }
      this.props.table.setCurrentHoverOfZone(this.props.cellId);
    };
    n.handleMouseDown = function (e) {
      if (this.isEditable()) {
        this.disposeMouseDown();
        this.screenXWhenMouseDown = e.clientX;
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.disposeMouseDown);
      }
    };
    n.disposeMouseDown = function () {
      this.screenXWhenMouseDown = 0;
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.disposeMouseDown);
    };
    n.handleMouseMove = function (e) {
      var t = this.props;
      var n = t.cellId;
      var i = t.table;
      var o = t.width;
      var r = e.clientX - this.screenXWhenMouseDown;
      var a = i.getRectOfZone([n]).left;
      var l = i.getDocbodyRect().left;
      var s = this.isAllTextHaveSelected(n);
      var u = this.editor.getContentState().getActiveZone();
      var d = u.getZoneId();
      var c = u.length() - 1;
      var h = u.getLine(c);
      if (h) {
        var f = this.editor.rectModule.getLineRect({
          zoneId: d,
          line: c
        }).left;
        var p = this.editor.rectModule.getCaretRect({
          zoneId: d,
          line: c,
          offset: h.length() - 1
        }).left;
        var v = this.el ? this.el.clientWidth : o;
        if (s && r > f + p + 24 || v + a + l - 6 < e.clientX) {
          this.disposeMouseDown();
          i.selectEntireCell({
            cellId: n,
            withMergedCell: true,
            clearSelection: true
          });
        }
      }
    };
    n.isAllTextHaveSelected = function (e) {
      var t = this.editor.getContentState().getZoneState(e);
      if (t) {
        var n = t.getLine(0);
        var i = t.getLine(t.length() - 1);
        if (n && i) {
          var o = this.editor.selection.getSelection();
          var r = o.start;
          var a = o.end;
          return r.line === 0 && r.offset === n.getLineMarker() && a.line === t.length() - 1 && a.offset === i.length() - 1;
        }
      }
    };
    n.isEditable = function () {
      return this.state.editable;
    };
    n.calcStyleString = function () {
      var e = {};
      var t = this.state;
      var n = t.initialWidth;
      var i = t.initialHeight;
      var o = t.diffY;
      var r = t.diffX;
      var a = this.props;
      var l = a.selectedCellColor;
      var s = a.isSelected;
      var u = a.width;
      var d = a.height;
      var c = a.disableHorzResize;
      var h = a.disableVertResize;
      var f = a.backgroundColor;
      var p = a.fontWeight;
      var v = a.fontFamily;
      var g = a.fontSize;
      if (!c) {
        if (n) {
          e.minWidth = e.width = n + r + "px";
        } else if (u) {
          e.minWidth = e.width = u + "px";
        }
      }
      if (!h) {
        if (i) {
          e.minHeight = e.height = i + o + "px";
        } else if (d) {
          e.minHeight = e.height = d + "px";
        }
      }
      if (p) {
        e.fontFamily = v;
      }
      if (g) {
        var m = new RegExp(/\D/);
        e.fontSize = "" + g;
        if (!m.test(g)) {
          e.fontSize += "px";
        }
      }
      if (p) {
        e.fontWeight = p;
      }
      if (s && l) {
        e.backgroundColor = l;
      }
      if (f) {
        e.backgroundColor = f;
      }
      return e;
    };
    n.setRef = function (e) {};
    n.setInnerZoneRef = function (e) {
      this.innerZone = e;
    };
    n.render = function () {
      var e;
      var t = this.props;
      var n = t.isTopBorderHighlighted;
      var i = t.isLeftBorderHighlighted;
      var o = t.isRightBorderHighlighted;
      var r = t.disableHorzResize;
      var a = t.disableVertResize;
      var l = t.isBottomBorderHighlighted;
      var s = t.isColumnBeingResized;
      var u = t.isRowBeingResized;
      var d = t.author;
      var h = t.cellId;
      var p = t.isEditAdd;
      var v = t.isEditDel;
      var g = t.isDeletionHint;
      var m = t.isSelected;
      var y = t.isBeingDragged;
      var b = t.horizontalScrollToZone;
      var S = t.diffType;
      var E = t.colSpan;
      var C = t.rowSpan;
      var R = f("ace-table-cell", ((e = {
        "ace-table-cell-is-deletion-hint": g,
        "ace-table-cell-selected": m,
        "ace-table-cell-dragged": y,
        "ace-table-cell-diff-plus": S === " plus",
        "ace-table-cell-diff-minus": S === " minus",
        "ace-table-cell-diff-phantom": S === " phantom",
        __edit_add: p,
        __edit_del: v,
        __edit: p || v
      })["author-" + d] = d, e["table-hide"] = E === 0 || C === 0, e));
      var w = this.isEditable();
      return reactCoreLibraryReexport.createElement(Q, {
        ref: this.setRef,
        htmlTag: "td",
        onHorzResize: this.onHorzResize,
        onHorzResizeStart: this.onHorzResizeStart,
        onHorzResizeEnd: this.onHorzResizeEnd,
        onVertResize: this.onVertResize,
        onVertResizeStart: this.onVertResizeStart,
        onVertResizeEnd: this.onVertResizeEnd,
        onMouseUp: this.onCellMouseUp,
        onMouseDown: this.handleMouseDown,
        onKeyDown: this.onCellKeyDown,
        onMouseEnter: this.handleMouseEnter,
        onVertMouseEnter: this.onVertMouseEnter,
        onVertMouseLeave: this.onVertMouseLeave,
        onHorzMouseEnter: this.onHorzMouseEnter,
        onHorzMouseLeave: this.onHorzMouseLeave,
        disableHorzResize: !w || r || ee,
        disableVertResize: !w || a || ee,
        alignToTop: n,
        alignToLeft: i,
        isHorzHovered: o || i,
        isVertHovered: l || n,
        isHorzBeingResized: s,
        isVertBeingResized: u,
        style: this.calcStyleString(),
        className: R,
        colSpan: E,
        rowSpan: C,
        contentEditable: w,
        suppressContentEditableWarning: true
      }, reactCoreLibraryReexport.createElement(j, {
        zoneId: h,
        ref: this.setInnerZoneRef,
        horizontalScrollToZone: b
      }));
    };
    t.contextTypes = E;
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onCellMouseUp", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onCellKeyDown", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzResizeStart", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzResizeEnd", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzResize", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertResizeStart", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertResizeEnd", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertResize", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzMouseEnter", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onHorzMouseLeave", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseEnter", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseLeave", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onVertMouseEnd", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "resetWidth", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "resetHeight", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onResizeStart", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "onResizeEnd", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleMouseEnter", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleMouseDown", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "disposeMouseDown", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleMouseMove", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "isEditable", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "calcStyleString", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "setRef", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "setInnerZoneRef", null);
    return t;
  }(reactCoreLibraryReexport.Component);
  var en = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.stuntRef = null;
      t.idleTimer = 0;
      t.bindEvents = function () {
        if (t.stuntRef) {
          if (t.stuntRef.contentWindow && t.stuntRef) {
            setTimeout(function () {
              var n;
              if ((n = t.stuntRef?.contentWindow) !== null && n !== undefined) {
                n.addEventListener("resize", t.requestIdleHandleContentResize);
              }
            }, 0);
          } else {
            t.stuntRef.onload = t.bindContentResize;
          }
        }
      };
      t.bindContentResize = function () {
        if (t.stuntRef && t.stuntRef.contentWindow) {
          t.stuntRef.contentWindow.addEventListener("resize", t.requestIdleHandleContentResize);
        }
      };
      t.requestIdleHandleContentResize = function () {
        if (!t.idleTimer) {
          t.idleTimer = k(function () {
            t.props.handleContentResize();
            t.idleTimer = 0;
          });
        }
      };
      t.cancelIdleHandleContentResize = function () {
        if (t.idleTimer) {
          T(t.idleTimer);
          t.idleTimer = 0;
        }
      };
      t.getBorderStyle = function (e, n, i) {
        var o = t.props.cellAttribs;
        var r = i[editorTableUtils.tableConstants.BORDER];
        if (!r || n === 0) {
          return r;
        }
        var a = o[e][n - 1];
        if ((a[editorTableUtils.tableConstants.COL_SPAN] === 0 || a[editorTableUtils.tableConstants.ROW_SPAN] === 0) && a[editorTableUtils.tableConstants.BORDER] && a[editorTableUtils.tableConstants.BORDER].right) {
          r.left = a[editorTableUtils.tableConstants.BORDER].right;
        }
        return r;
      };
      t.renderCells = function (e, n = {}, i) {
        var o = t.props;
        var r = o.colIds;
        var a = o.colAttribs;
        var l = o.cellAttribs;
        var s = o.hintRowsToDeleteCount;
        var u = o.hintColsToDeleteCount;
        var d = o.columnBeingResized;
        var h = o.selectedCellIds;
        var f = o.rowBeingResized;
        var p = o.rowWithBottomBorderHighlighted;
        var g = o.columnWithRightBorderHighlighted;
        var m = o.selectedCellColor;
        var y = o.handleHorzResize;
        var b = o.handleHorzResizeStart;
        var S = o.handleHorzResizeEnd;
        var E = o.handleVertResize;
        var C = o.handleVertResizeStart;
        var R = o.handleVertResizeEnd;
        var w = o.horizontalScrollToZone;
        var z = o.handleHorzDiff;
        var I = o.rowBeingResizedHeights;
        var M = o.vertResizeDiff;
        var k = o.tableStyle;
        return r.map(function (o, r) {
          var T = l[i] ? l[i][r] : {};
          var x = a[r] || {};
          var L = tableCellIdUtils.createCellId(e, o);
          var D = h.indexOf(L) !== -1;
          var A = D && (s > 0 || u > 0);
          var _ = d !== -1 && d === r ? undefined : parseInt(T[editorTableUtils.tableConstants.COL_WIDTH], 10);
          var N = parseInt(T[editorTableUtils.tableConstants.ROW_HEIGHT], 10) || 40;
          var P = f !== -1 && f === i ? Math.max(I[i], N) + M : N;
          var O = x.__edit_add || n.__edit_add;
          var H = x.__edit_del || n.__edit_del;
          var Z = x.author || n.author;
          var V = T[editorTableUtils.tableConstants.COL_SPAN];
          var B = T[editorTableUtils.tableConstants.ROW_SPAN];
          var F = T[editorTableUtils.tableConstants.BACKGROUND_COLOR];
          var K = T[editorTableUtils.tableConstants.FONT_FAMILY];
          var U = T[editorTableUtils.tableConstants.FONT_WEIGHT];
          var Y = T[editorTableUtils.tableConstants.FONT_SIZE];
          return reactCoreLibraryReexport.createElement(et, {
            key: L,
            rowIndex: i,
            colIndex: r,
            disableHorzResize: false,
            disableVertResize: false,
            cellId: L,
            cellAttribs: l,
            table: t.props.table,
            tableMounted: t.props.table.getComponentMounted(),
            ref: function (e) {
              return t.props.setCellRef("cell-" + L, e);
            },
            isEditAdd: O,
            isEditDel: H,
            author: Z,
            isBeingDragged: D,
            isSelected: D,
            isColumnBeingResized: d === r,
            isRowBeingResized: f === i,
            isTopBorderHighlighted: i === 0 && p === -1,
            isBottomBorderHighlighted: p === i + (B > 1 ? B - 1 : 0),
            isLeftBorderHighlighted: r === 0 && g === -1,
            isRightBorderHighlighted: g === r + (V > 1 ? V - 1 : 0),
            isDeletionHint: A,
            selectedCellColor: m,
            width: _,
            height: P,
            colSpan: V,
            rowSpan: B,
            backgroundColor: F,
            fontFamily: K,
            fontWeight: U,
            fontSize: Y,
            onHorzResize: y,
            onHorzResizeStart: b,
            onHorzResizeEnd: S,
            onVertResize: E,
            onVertResizeStart: C,
            onVertResizeEnd: R,
            onHorzDiff: z,
            horizontalScrollToZone: w,
            style: k[L]
          });
        });
      };
      t.findSelectedAllMergedCells = memoizeFunction.memoize(function (e, t, n, i) {
        var o;
        var a;
        var l = new Map();
        var s = new Set();
        e.forEach(function (e, o) {
          var r = tableCellIdUtils.parseCellId(e);
          if (r) {
            var a = r.rowId;
            var s = r.colId;
            var u = n.indexOf(a);
            var d = t.indexOf(s);
            if (u >= 0 && d >= 0) {
              var c = i[u][d];
              if (c && c.mergeCellID) {
                var h = undefined;
                var f = c.mergeCellID;
                var p = c.colspan;
                var v = c.rowspan;
                var g = p || 0;
                var m = v || 0;
                if (l.has(f)) {
                  var y = l.get(f);
                  var b = y.counts;
                  var S = y.colSpans;
                  var E = y.rowSpans;
                  h = {
                    counts: b + 1,
                    colSpans: g || S,
                    rowSpans: m || E
                  };
                } else {
                  h = {
                    counts: 1,
                    colSpans: g,
                    rowSpans: m
                  };
                }
                l.set(f, h);
              }
            }
          }
        });
        try {
          var u = typescriptHelpers_1.getValues(l.entries());
          var d = u.next();
          for (; !d.done; d = u.next()) {
            var c = typescriptHelpers_1.readIterator(d.value, 2);
            var h = c[0];
            var f = c[1];
            var p = f.counts;
            var v = f.colSpans;
            var g = f.rowSpans;
            var m = v || 1;
            var y = g || 1;
            if (p === m * y) {
              s.add(h);
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (d && !d.done && (a = u.return)) {
              a.call(u);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        return Array.from(s);
      });
      t.renderRows = function () {
        var e = t.props;
        var n = e.rowIds;
        var i = e.rowAttribs;
        return n.map(function (e, n) {
          return reactCoreLibraryReexport.createElement("tr", {
            key: e,
            className: "ace-table-row"
          }, t.renderCells(e, i[n], n));
        });
      };
      t.renderColGroup = function () {
        var e = t.props;
        var n = e.horzResizeDiff;
        var i = e.columnBeingResized;
        var o = e.colAttribs;
        var r = e.defaultCellWidth;
        var a = e.getColMinWidth;
        return reactCoreLibraryReexport.createElement("colgroup", null, o.map(function (e, t) {
          var o = Number(e[editorTableUtils.tableConstants.COL_WIDTH]) || r || 100;
          var l = t === i ? o + n : o;
          var s = a ? a(t) : 0;
          return reactCoreLibraryReexport.createElement("col", {
            width: Math.max(l, 30, s),
            key: t
          });
        }));
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.shouldComponentUpdate = function (e) {
      var t = throttledOmitPathStringify.omitPathStringify(this.props, "table");
      var n = throttledOmitPathStringify.omitPathStringify(e, "table");
      return !deepEqualUtil_1.deepEqual(n, t);
    };
    n.componentDidMount = function () {
      this.bindEvents();
    };
    n.componentWillUnmount = function () {
      if (this.stuntRef && this.stuntRef.contentWindow) {
        this.stuntRef.contentWindow.removeEventListener("resize", this.requestIdleHandleContentResize);
      }
    };
    n.render = function () {
      var e = this;
      return reactCoreLibraryReexport.createElement("table", {
        className: "ace-table",
        ref: this.props.setTableRef,
        "data-ace-table-col-widths": this.props.tableColsWidth
      }, this.renderColGroup(), reactCoreLibraryReexport.createElement("tbody", {
        ref: this.props.setTbodyRef
      }, this.renderRows()), reactCoreLibraryReexport.createElement("iframe", {
        src: "//about:blank",
        frameBorder: "0",
        ref: function (t) {
          e.stuntRef = t;
          e.props.setTableIframeRef(t);
        },
        className: "tb-scrollable-stunt"
      }));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  function ei() {
    return (ei = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            e[i] = n[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var eo = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", ei({
    width: "12",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M5.25 5.25V.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v4.75h4.75a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H6.75v4.75a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5V6.75H.5a.5.5 0 01-.5-.5v-.5a.5.5 0 01.5-.5h4.75z",
    fill: "#424E5D",
    fillRule: "evenodd"
  }));
  function er() {
    return (er = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            e[i] = n[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var ea = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", er({
    width: "24",
    height: "24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.8 4.5a.8.8 0 00-.8.8V6H4.64c-.224 0-.336 0-.422.044a.4.4 0 00-.174.174C4 6.304 4 6.416 4 6.64v.22c0 .224 0 .336.044.422a.4.4 0 00.174.174c.086.044.198.044.422.044H6v11.2a.8.8 0 00.8.8h10.4a.8.8 0 00.8-.8V7.5h1.36c.224 0 .336 0 .422-.044a.4.4 0 00.174-.174C20 7.196 20 7.084 20 6.86v-.22c0-.224 0-.336-.044-.422a.4.4 0 00-.174-.174C19.696 6 19.584 6 19.36 6H15v-.7a.8.8 0 00-.8-.8H9.8zm-2.3 3h9V18h-9V7.5zm2 2.4c0-.22.18-.4.4-.4h.7c.22 0 .4.18.4.4v5.7a.4.4 0 01-.4.4h-.7a.4.4 0 01-.4-.4V9.9zm3.5 0c0-.22.18-.4.4-.4h.7c.22 0 .4.18.4.4v5.7a.4.4 0 01-.4.4h-.7a.4.4 0 01-.4-.4V9.9z",
    fill: "#2B2F36"
  }));
  var el = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.tableWrapperWidth = d(n.props.tableWrapper()).outerWidth();
      n.focusEditor = function () {
        n.context.innerZoneEditor.focus();
      };
      n.handleAddColClick = function (e) {
        e.stopPropagation();
        if (!n.isPerformingDragMutation()) {
          n.props.addColAtIndex({
            index: n.addColIndex
          });
        }
      };
      n.handleAddColMouseEnter = function () {
        if (!n.isPerformingDragMutation()) {
          n.props.setHighlightColumn(n.addColIndex - 1);
        }
      };
      n.handleAddColMouseLeave = function () {
        n.props.setHighlightColumn(null);
      };
      n.handleRemoveColRowClick = function (e) {
        e.stopPropagation();
        if (!n.isPerformingDragMutation()) {
          n.props.deleteSelectedZones(true, function () {
            setTimeout(n.focusEditor);
          });
        }
      };
      n.handleAddRowClick = function (e) {
        e.preventDefault();
        if (!n.isPerformingDragMutation()) {
          n.props.addRowAtIndex({
            index: n.addRowIndex,
            cb: n.focusEditor
          });
        }
      };
      n.handleAddRowMouseEnter = function () {
        if (!n.isPerformingDragMutation()) {
          n.props.setHighlightRow(n.addRowIndex - 1);
        }
      };
      n.handleAddRowMouseLeave = function () {
        n.props.setHighlightRow(null);
      };
      n.handleMouseDown = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
      n.isPerformingDragMutation = function () {
        return n.state.isAddingRows || n.state.isAddingCols;
      };
      n.state = {
        isAddingRows: false,
        isAddingCols: false,
        addingRowsStartY: -1,
        addingRowsStartIndex: -1,
        addingColsStartX: -1,
        addingColsStartIndex: -1,
        addRowVisible: false,
        addColVisible: false
      };
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.calcColsPosition = function () {
      var e = this.props;
      var t = e.selectedColumns;
      var n = e.isSelectAll;
      var i = e.colWidths;
      var o = e.scrollLeft;
      var a = e.selectType;
      if (!n && t.length && a !== C.MOVE) {
        var l = M(t);
        var s = Math.min.apply(Math, typescriptHelpers_1.spreadArray(t));
        var u = d(this.props.tableWrapper()).offset();
        var c = u && u.top;
        var h = i.slice(0, s).reduce(function (e, t) {
          return e + t;
        }, 0);
        var f = (i.slice(0, l + 1).reduce(function (e, t) {
          return e + t;
        }, 0) + h) / 2 - o;
        if (this.tableWrapperWidth && f + 28 >= this.tableWrapperWidth) {
          return {
            left: "auto",
            right: 0,
            transform: "translateX(0)"
          };
        } else if (c && (c -= 40) < 50) {
          return {
            left: f,
            top: -(c = 34)
          };
        } else {
          return {
            left: f
          };
        }
      }
    };
    n.calcRowsPosition = function () {
      var e = this.props;
      var t = e.selectedRows;
      var n = e.isSelectAll;
      var i = e.rowHeights;
      var o = e.selectType;
      if (!n && t.length && o !== C.MOVE) {
        var a = Math.max.apply(Math, typescriptHelpers_1.spreadArray(t));
        var l = Math.min.apply(Math, typescriptHelpers_1.spreadArray(t));
        var s = i.slice(0, l).reduce(function (e, t) {
          return e + t;
        }, 0);
        var u = i.slice(0, a + 1).reduce(function (e, t) {
          return e + t;
        }, 0);
        var c = d(this.props.tableWrapper()).find("tr")[a];
        var h = d(c).offset();
        var f = h && h.left || d(c).position().left;
        return {
          left: (f = f <= 50 ? 30 : 50) * -1,
          top: (s + u) / 2
        };
      }
    };
    Object.defineProperty(n, "addRowIndex", {
      get: function () {
        return M(this.props.selectedRows) + 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(n, "addColIndex", {
      get: function () {
        return M(this.props.selectedColumns) + 1;
      },
      enumerable: false,
      configurable: true
    });
    n.componentWillUnmount = function () {
      d(document).off("mouseup.ace-table");
      d(document).off("mousemove.ace-table");
    };
    n.render = function () {
      var e = this.calcColsPosition();
      var t = this.calcRowsPosition();
      return reactCoreLibraryReexport.createElement("span", {
        onMouseDown: this.handleMouseDown
      }, reactCoreLibraryReexport.createElement("span", {
        className: f("ace-table-row-toolbar", {
          "ace-table-hovering-add": this.props.hoveringRowAdd,
          "ace-table-is-adding": this.state.isAddingRows
        }),
        style: t && typescriptHelpers_1.assign({
          display: "inline-block",
          opacity: 1
        }, t)
      }, reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "ace-table-remove-action",
        onClick: this.handleRemoveColRowClick,
        contentEditable: false
      }, reactCoreLibraryReexport.createElement(ea, null)), reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "ace-table-add-action",
        onClick: this.handleAddRowClick,
        onMouseEnter: this.handleAddRowMouseEnter,
        onMouseLeave: this.handleAddRowMouseLeave,
        contentEditable: false
      }, reactCoreLibraryReexport.createElement(eo, null))), reactCoreLibraryReexport.createElement("span", {
        className: f("ace-table-col-toolbar", {
          "ace-table-hovering-add": this.props.hoveringColAdd,
          "ace-table-is-adding": this.state.isAddingCols
        }),
        style: e ? typescriptHelpers_1.assign({
          display: "inline-block",
          opacity: 1
        }, e) : undefined
      }, reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "ace-table-remove-action",
        onClick: this.handleRemoveColRowClick,
        contentEditable: false
      }, reactCoreLibraryReexport.createElement(ea, null)), reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "ace-table-add-action",
        onMouseEnter: this.handleAddColMouseEnter,
        onMouseLeave: this.handleAddColMouseLeave,
        onClick: this.handleAddColClick,
        contentEditable: false
      }, reactCoreLibraryReexport.createElement(eo, null))));
    };
    t.contextTypes = E;
    return t;
  }(reactCoreLibraryReexport.Component);
  var es = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        diffX: 0,
        initialWidth: null
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.handleResize = function (e) {
      var t = this.props;
      var n = t.onResize;
      var i = t.onHorzDiff;
      var o = t.colIndex;
      if (i) {
        e = i(o, e);
      }
      n(e);
      this.setState({
        diffX: e
      });
    };
    n.handleResizeStart = function () {
      var e = this.props;
      var t = e.width;
      e.onResizeStart();
      this.setState({
        initialWidth: t || 0
      });
    };
    n.handleResizeEnd = function () {
      this.props.onResizeEnd(this.state.diffX);
      this.setState({
        diffX: 0,
        initialWidth: null
      });
    };
    n.getStyle = function (e) {
      var t = e.width;
      var n = {
        width: (t ? t + 1 : 1) + "px"
      };
      n.minWidth = n.width = t + "px";
      return n;
    };
    n.render = function () {
      var e = this.props;
      var t = e.onSelect;
      var n = e.onMouseDown;
      var i = e.isBeingResized;
      var o = e.isSelected;
      var r = e.partialSelected;
      var a = e.width;
      var l = e.isSelectRowOrCol;
      var s = this.state;
      var u = s.initialWidth;
      var d = s.diffX;
      var h = this.getStyle({
        initialWidth: u,
        width: a,
        diffX: d
      });
      var p = f("ace-table-col-header", {
        "ace-table-col-header-selected": l && o,
        "ace-table-col-header-partial-selected": !l && r
      });
      return reactCoreLibraryReexport.createElement(Q, {
        htmlTag: "div",
        disableHorzResize: true,
        disableVertResize: true,
        isHorzBeingResized: i,
        isVertBeingResized: false,
        isHorzHovered: false,
        isVertHovered: false,
        style: h,
        className: p
      }, reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "dmc-button ace-table-col-select hpx-button",
        onClick: t,
        onMouseDown: n
      }, reactCoreLibraryReexport.createElement("span", {
        className: "drag-handler drag-handler-horizontal"
      })), reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-col-insert"
      }));
    };
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleResize", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleResizeStart", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleResizeEnd", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "getStyle", null);
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  var eu = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.renderColumns = function () {
      var e = this.props;
      var t = e.columnWidths;
      var n = e.selectedColumns;
      var i = e.onSelect;
      var o = e.onMouseDown;
      var r = e.onMouseEnter;
      var a = e.partialCols;
      var l = e.onResize;
      var s = e.onResizeStart;
      var u = e.onResizeEnd;
      var d = e.onResizeMouseEnter;
      var h = e.onResizeMouseLeave;
      var f = e.disableResize;
      var p = e.isBeingResized;
      var v = e.onHorzDiff;
      var g = e.isSelectRowOrCol;
      return t.map(function (e, m) {
        return reactCoreLibraryReexport.createElement(es, {
          key: m,
          colIndex: m,
          onSelect: function (e) {
            return i(e, m);
          },
          onMouseDown: function (e) {
            return o(e, m, false, true);
          },
          onMouseEnter: function () {
            return r(m, false);
          },
          onResize: function (e) {
            return l(0, m, e);
          },
          onResizeStart: function () {
            return s(m);
          },
          onResizeEnd: function (e) {
            return u(m, e);
          },
          onResizeMouseEnter: function () {
            return d(m, false);
          },
          onResizeMouseLeave: function () {
            return h(false);
          },
          disableResize: f,
          isBeingResized: p,
          onHorzDiff: v,
          isSelected: n.includes(m),
          partialSelected: a.includes(m),
          width: e,
          colNumber: t.length,
          isSelectRowOrCol: g
        });
      });
    };
    n.render = function () {
      var e = this.props.scrollLeft;
      return reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-col-headers",
        style: {}
      }, reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-col-headers-inner",
        style: {
          transform: "translateX(-" + e + "px)"
        }
      }, this.renderColumns()));
    };
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "renderColumns", null);
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  var ed = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        diffY: 0,
        initialHeight: null
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.handleResize = function (e) {
      this.props.onResize(e);
      this.setState({
        diffY: e
      });
    };
    n.handleResizeStart = function () {
      var e = this.props;
      var t = e.height;
      e.onResizeStart();
      this.setState({
        initialHeight: t || 0
      });
    };
    n.handleResizeEnd = function () {
      this.props.onResizeEnd(this.state.diffY);
      this.setState({
        diffY: 0,
        initialHeight: null
      });
    };
    n.getStyle = function (e) {
      var t = e.initialHeight;
      var n = e.height;
      var i = e.diffY;
      var o = {
        height: (n ? n + 1 : 1) + "px"
      };
      if (t) {
        o.minHeight = o.height = Math.max(t + i, 40) + "px";
      } else if (n) {
        o.minHeight = o.height = Math.max(n, 40) + "px";
      }
      return o;
    };
    n.render = function () {
      var e = this.props;
      var t = e.onSelect;
      var n = e.onMouseDown;
      var i = e.isBeingResized;
      var o = e.isSelected;
      var r = e.partialSelected;
      var a = e.height;
      var l = e.isSelectRowOrCol;
      var s = this.state;
      var u = s.initialHeight;
      var d = s.diffY;
      var h = this.getStyle({
        initialHeight: u,
        height: a,
        diffY: d
      });
      var p = f("ace-table-row-header", {
        "ace-table-row-header-selected": l && o,
        "ace-table-row-header-partial-selected": !l && r
      });
      return reactCoreLibraryReexport.createElement(Q, {
        htmlTag: "div",
        disableHorzResize: true,
        disableVertResize: true,
        isHorzBeingResized: false,
        isVertBeingResized: i,
        isHorzHovered: false,
        isVertHovered: false,
        style: h,
        className: p
      }, reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "dmc-button ace-table-row-select hpx-button",
        onClick: t,
        onMouseDown: n
      }), reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-row-insert"
      }));
    };
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleResize", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleResizeStart", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleResizeEnd", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "getStyle", null);
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  var ec = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.renderRows = function () {
      var e = this.props;
      var t = e.onResize;
      var n = e.onResizeStart;
      var i = e.onResizeEnd;
      var o = e.onResizeMouseEnter;
      var r = e.onResizeMouseLeave;
      var a = e.disableResize;
      var l = e.isBeingResized;
      var s = e.rowHeights;
      var u = e.selectedRows;
      var d = e.onSelect;
      var h = e.onMouseDown;
      var f = e.onMouseEnter;
      var p = e.partialRows;
      return s.map(function (e, v) {
        return reactCoreLibraryReexport.createElement(ed, {
          key: v,
          rowIndex: v,
          onSelect: function (e) {
            return d(e, v);
          },
          onMouseDown: function (e) {
            return h(e, v, true, true);
          },
          onMouseEnter: function () {
            return f(v, true);
          },
          onResize: function (e) {
            return t(v, 0, e);
          },
          onResizeStart: function () {
            return n(v);
          },
          onResizeEnd: function (e) {
            return i(v, e);
          },
          onResizeMouseEnter: function () {
            return o(v, true);
          },
          onResizeMouseLeave: function () {
            return r(true);
          },
          disableResize: a,
          isBeingResized: l,
          isSelected: u.includes(v),
          partialSelected: p.includes(v),
          height: e,
          rowNumber: s.length
        });
      });
    };
    n.render = function () {
      return reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-row-headers"
      }, this.renderRows());
    };
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "renderRows", null);
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  function eh() {
    return (eh = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            e[i] = n[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var ef = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", eh({
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M9 9h6a1 1 0 010 2H9a1 1 0 010-2zm0 4h6a1 1 0 010 2H9a1 1 0 010-2z",
    fill: "#FFF",
    fillRule: "evenodd"
  }));
  var ep = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        isSelected: false
      };
      t.cancelBubble = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
      t.getPopoverContainer = function () {
        return reactDomEntryWrapper.findDOMNode(t._wrapperRef) || document.querySelector(".editor-kit-container") || document.body;
      };
      t.wrapperRef = function (e) {
        t._wrapperRef = e;
      };
      t.onToggleSelect = function (e) {
        t.setState({
          isSelected: e
        });
        t.props.onToggleSelect(e);
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.shouldComponentUpdate = function (e, t) {
      return t.isSelected !== this.state.isSelected;
    };
    n.render = function () {
      var e = this.state.isSelected;
      var n = this.onToggleSelect;
      return reactCoreLibraryReexport.createElement("div", {
        className: f(t.prefix + " ace-table-table-header-wrapper", {
          selected: e
        }),
        style: {
          left: -12
        },
        onClick: this.cancelBubble,
        onMouseDown: this.cancelBubble,
        onMouseUp: this.cancelBubble,
        ref: this.wrapperRef
      }, reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-table-header"
      }, reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-row-insert"
      }), reactCoreLibraryReexport.createElement("div", {
        className: "ace-table-col-insert"
      })), reactCoreLibraryReexport.createElement("button", {
        type: "button",
        className: "ace-table-table-select hpx-button ace-button",
        onClick: function (t) {
          n(!e);
        }
      }, reactCoreLibraryReexport.createElement(ef, null)));
    };
    t.prefix = "ace-table-header";
    return t;
  }(reactCoreLibraryReexport.Component);
  var ev = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.render = function () {
      var e = this.props;
      var t = e.selectedColumns;
      var n = e.selectedRows;
      var i = e.rowHeights;
      var o = e.onToggleSelect;
      var r = e.colCount;
      var a = e.hoveringRowAdd;
      var l = e.hoveringColAdd;
      var s = e.colsZoneId;
      var u = e.rowCount;
      var d = e.setHighlightRow;
      var h = e.onSelectCol;
      var f = e.onSelectRow;
      var p = e.onMouseDown;
      var v = e.selectType;
      var g = e.hintRowsToDeleteCount;
      var m = e.tableWrapper;
      var y = e.onMouseEnter;
      var b = e.hintColsToDeleteStartIndex;
      var S = e.addColAtIndex;
      var E = e.partialCols;
      var C = e.isDragging;
      var R = e.showLeftShadow;
      var w = e.rowsZoneId;
      var z = e.hintColsToDeleteCount;
      var I = e.leftShadowWidth;
      var M = e.rightShadowWidth;
      var k = e.hintRowsToDeleteStartIndex;
      var T = e.showRightShadow;
      var x = e.isSelectAll;
      var L = e.columnWidths;
      var D = e.partialRows;
      var A = e.handleHorzResize;
      var _ = e.handleHorzResizeStart;
      var N = e.handleHorzResizeEnd;
      var P = e.handleVertResize;
      var O = e.handleVertResizeStart;
      var H = e.handleVertResizeEnd;
      var W = e.handleResizeEnter;
      var Z = e.handleResizeLeave;
      var V = e.handleHorzDiff;
      var B = e.onShow;
      var F = e.onHide;
      var K = e.scrollLeft;
      var U = e.isSelectRowOrCol;
      var Y = e.setHighlightColumn;
      var j = e.deleteSelectedZones;
      var X = e.addRowAtIndex;
      var q = e.hintTableToDelete;
      return reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(el, {
        tableWrapper: m,
        addColAtIndex: S,
        setHighlightColumn: Y,
        deleteSelectedZones: j,
        addRowAtIndex: X,
        setHighlightRow: d,
        rowCount: u,
        colCount: r,
        onShow: B,
        onHide: F,
        hoveringRowAdd: a,
        hoveringColAdd: l,
        selectedColumns: t,
        selectedRows: n,
        isSelectAll: x,
        selectType: v,
        rowsZoneId: w,
        colsZoneId: s,
        scrollLeft: K,
        colWidths: L,
        rowHeights: i
      }), reactCoreLibraryReexport.createElement(ep, {
        onToggleSelect: o,
        hintTableToDelete: q
      }), reactCoreLibraryReexport.createElement(eu, {
        scrollLeft: K,
        columnWidths: L,
        selectedColumns: t,
        hintColsToDeleteStartIndex: b,
        hintColsToDeleteCount: z,
        partialCols: E,
        isDragging: C,
        showLeftShadow: R,
        showRightShadow: T,
        leftShadowWidth: I,
        rightShadowWidth: M,
        onSelect: h,
        onMouseDown: p,
        onMouseEnter: y,
        onResizeStart: _,
        onResize: A,
        disableResize: false,
        isBeingResized: false,
        onResizeEnd: N,
        onResizeMouseEnter: W,
        onResizeMouseLeave: Z,
        onHorzDiff: V,
        isSelectRowOrCol: U
      }), reactCoreLibraryReexport.createElement(ec, {
        rowHeights: i,
        selectedRows: n,
        onSelect: f,
        onMouseDown: p,
        onMouseEnter: y,
        disableResize: false,
        isBeingResized: false,
        onResizeStart: O,
        onResize: P,
        onResizeEnd: H,
        onResizeMouseEnter: W,
        onResizeMouseLeave: Z,
        hintRowsToDeleteStartIndex: k,
        hintRowsToDeleteCount: g,
        partialRows: D,
        isDragging: C
      }));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  function eg(e) {
    var t;
    var n;
    var i;
    var o;
    var l;
    var s;
    var u;
    var d;
    var h;
    var p;
    var g;
    var m;
    var y;
    var b;
    var S;
    var E;
    var C;
    var w;
    var z;
    var I;
    var M;
    var k;
    var T;
    var x;
    var L;
    var D;
    var A;
    var N;
    var P;
    var O;
    var H;
    var W;
    var Z;
    var V;
    var B;
    var F;
    var K;
    var U;
    var Y;
    var j;
    var X;
    var q;
    var J = e.state;
    var G = e.setTableOuterWrapperRef;
    var $ = e.handleTableMouseDown;
    var Q = e.setTableWrapperRef;
    var ee = J.addRemoveIsShown;
    var et = J.isFocused;
    var ei = J.columnBeingResized !== -1;
    var eo = f("ace-table-wrapper-outer", {
      "ace-table-add-remove-shown": ee,
      "ace-table-is-focused": et,
      "ace-table-is-resizing": ei,
      "tb-resizing": ei
    });
    return reactCoreLibraryReexport.createElement("div", {
      ref: G,
      className: eo,
      onMouseDown: $,
      contentEditable: false
    }, reactCoreLibraryReexport.createElement(reactZeroWidthSpace.ZeroWidthSpace, {
      style: {
        position: "absolute",
        display: "inline-block",
        width: 0,
        height: 0
      }
    }), reactCoreLibraryReexport.createElement("div", {
      className: "ace-table-wrapper",
      ref: Q
    }, (n = (t = e).state, i = t.handleScrollableScroll, o = t.handleScrollableResize, l = t.setTableWrapperInnerRef, s = t.getColsZoneId, u = t.getEditor, d = n.customContext, h = {
      onScroll: i,
      onResize: o,
      ref: l,
      className: "ace-table-wrapper-inner",
      editor: u(),
      colAttribs: n.colAttribs,
      customContext: d,
      colsZoneId: s()
    }, reactCoreLibraryReexport.createElement(_, typescriptHelpers_1.assign({}, h), (g = (p = t).state, m = p.setTableRef, y = p.setTbodyRef, b = p.setTableIframeRef, S = p.setCellRef, E = p.handleVertResizeEnd, C = p.horizontalScrollToZone, w = p.handleHorzResize, z = p.handleHorzResizeStart, I = p.handleHorzResizeEnd, M = p.handleVertResizeStart, k = p.handleVertResize, T = p.getTableColsWidth, x = p.handleContentResize, L = g.colIds, D = g.rowIds, A = g.rowAttribs, N = g.colAttribs, P = g.customContext, O = g.selectedCellIds, H = g.rowHeaderHeights, W = g.selectedCellColor, Z = g.columnBeingResized, V = g.rowBeingResized, B = g.rowWithBottomBorderHighlighted, F = g.hintRowsToDeleteCount, K = g.hintColsToDeleteCount, U = g.cellAttribs, Y = g.tableStyle, j = g.rowBeingResizedHeights, X = g.columnWithRightBorderHighlighted, q = {
      colIds: L,
      rowIds: D,
      tableStyle: Y,
      rowAttribs: A,
      colAttribs: N,
      setTableRef: m,
      setTbodyRef: y,
      setTableIframeRef: b,
      setCellRef: S,
      cellAttribs: U,
      horzResizeDiff: g.horzResizeDiff,
      vertResizeDiff: g.vertResizeDiff,
      selectedCellIds: O,
      rowHeaderHeights: H,
      customContext: P,
      columnBeingResized: Z,
      rowBeingResized: V,
      selectedCellColor: W,
      hintRowsToDeleteCount: F,
      hintColsToDeleteCount: K,
      rowBeingResizedHeights: j,
      horizontalScrollToZone: C,
      handleHorzResize: w,
      handleHorzResizeStart: z,
      handleHorzResizeEnd: I,
      handleVertResize: k,
      handleVertResizeStart: M,
      handleVertResizeEnd: E,
      rowWithBottomBorderHighlighted: B,
      columnWithRightBorderHighlighted: X,
      table: p,
      handleContentResize: x,
      tableColsWidth: T().join(";")
    }, reactCoreLibraryReexport.createElement(en, typescriptHelpers_1.assign({}, q))))), function (e) {
      var t;
      var n = e.state;
      var i = e.getComponentMounted;
      var o = n.isFocused;
      if (!i() || e.isEditingDisabled() || !o) {
        return null;
      }
      var a = n.hintColsToDeleteStartIndex;
      var l = n.hintColsToDeleteCount;
      var s = n.selectType;
      var u = n.rowsZoneId;
      var d = n.scrollLeft;
      var h = n.colIds;
      var p = n.colsZoneId;
      var g = n.rowIds;
      var m = n.rowWithBottomBorderHighlighted;
      var y = n.columnWithRightBorderHighlighted;
      var b = n.rowHeaderHeights;
      var S = n.colHeaderWidths;
      var E = n.customContext;
      var C = n.isSelectAll;
      var w = e.getRowCount;
      var z = e.getColCount;
      var I = e.getTableWrapper;
      var M = e.updateCurrentHoverHeader;
      var k = e.deleteSelectedZones;
      var T = e.addRowAtIndex;
      var x = e.setHighlightRow;
      var L = e.addColAtIndex;
      var D = e.deleteTable;
      var A = e.copyTable;
      var _ = e.cutTable;
      var N = e.handleSelectCol;
      var P = e.handleSelectRow;
      var O = e.handleHeaderMouseDown;
      var H = e.handleToggleSelectTable;
      var W = e.setHighlightColumn;
      var Z = e.handleHorzResize;
      var V = e.handleHorzResizeStart;
      var B = e.handleHorzResizeEnd;
      var F = e.handleVertResize;
      var K = e.handleVertResizeStart;
      var U = e.handleVertResizeEnd;
      var Y = e.handleResizeEnter;
      var j = e.handleResizeLeave;
      var X = e.getEditor();
      var q = e.getWhollySelectedRegions();
      var J = q.entireTable;
      var G = q.cols;
      var $ = q.rows;
      var Q = e.getPartiallySelectedRegions();
      var ee = Q.partialRows;
      var et = Q.partialCols;
      var en = a === 0 && l === h.length;
      var ei = en ? g.length : n.hintRowsToDeleteCount;
      var eo = {
        editor: X,
        selectType: s,
        rowsZoneId: u,
        colsZoneId: p,
        scrollLeft: d,
        customContext: E,
        partialRows: ee,
        partialCols: et,
        tableTotalWidth: e.getTableScrollWidth(),
        addColAtIndex: L,
        setHighlightColumn: W,
        deleteSelectedZones: k,
        addRowAtIndex: T,
        setHighlightRow: x,
        hintColsToDeleteCount: l,
        hintRowsToDeleteCount: ei,
        handleHorzResize: Z,
        handleHorzResizeStart: V,
        handleHorzResizeEnd: B,
        handleVertResize: F,
        handleVertResizeStart: K,
        handleVertResizeEnd: U,
        handleResizeEnter: Y,
        handleResizeLeave: j,
        selectedColumns: G,
        selectedRows: $,
        onCopyTable: A,
        onCutTable: _,
        rowCount: w(),
        colCount: z(),
        isSelectAll: C && J,
        tableWrapper: I,
        rowHeights: b,
        onToggleSelect: H,
        hintTableToDelete: en,
        onDeleteTable: D,
        columnWidths: S,
        onSelectCol: N,
        onSelectRow: P,
        onMouseDown: O,
        onMouseEnter: M,
        hoveringRowAdd: m !== null,
        hoveringColAdd: y !== null,
        tableRef: e.getTable()
      };
      return reactCoreLibraryReexport.createElement("div", {
        contentEditable: false,
        className: f("ace-table-toolbars", ((t = {})[R] = true, t[editorTableUtils.ignoreDomFlag] = true, t))
      }, reactCoreLibraryReexport.createElement(ev, typescriptHelpers_1.assign({}, eo)));
    }(e)));
  }
  require.d(exports, {
    TableComponent: function () {
      return eg;
    }
  });
}