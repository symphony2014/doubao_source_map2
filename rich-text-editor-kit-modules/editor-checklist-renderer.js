// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'CheckboxRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 744100
         */
module.exports = function (module, exports, require) {
  var i;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var selectionAttributeToggle = require("selection-attribute-toggle") /*id: 663983*/;
  var indentDirectionConstants = require("indent-direction-constants") /*id: 277000*/;
  var editorListIndentUtil = require("editor-list-indent-util") /*id: 505604*/;
  require("user-agent-parser_1") /*id: 757289*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  function g(e, t = 0) {
    if (e instanceof TouchEvent) {
      return e.changedTouches[t];
    } else {
      return (e.originalEvent || e.nativeEvent).changedTouches[t];
    }
  }
  function m(e) {
    var t;
    var n = e.onClick;
    var i = e.onLongPress;
    var o = e.touchDuration;
    var r = o === undefined ? 300 : o;
    var a = e.touchDelta;
    var l = a === undefined ? 30 : a;
    if (n && typeof n != "function") {
      throw Error("\"onClick\" should be function");
    }
    if (i && typeof i != "function") {
      throw Error("\"onLongPress\" should be function");
    }
    if (typeof r != "number") {
      throw Error("\"touchDuration\" should be number");
    }
    var s = 0;
    var u = 0;
    var d = 0;
    var c = 0;
    var h = 0;
    var f = 0;
    var p = 0;
    return function (e, o) {
      var a = e.type;
      var v = e.timeStamp;
      var m = g(e);
      var y = {
        touchstart: function () {
          s = c = m.clientX;
          u = h = m.clientY;
          d = v;
          if (i) {
            f = p = 0;
            window.clearTimeout(t);
            t = window.setTimeout(function () {
              if (!(f >= l) && !(p >= l)) {
                i(e, o);
              }
            }, r);
          }
        },
        touchmove: function () {
          f += Math.abs(m.clientX - c);
          p += Math.abs(m.clientY - h);
          c = m.clientX;
          h = m.clientY;
        },
        touchend: function () {
          clearTimeout(t);
          var i = Math.abs(m.clientX - s) >= l || Math.abs(m.clientY - u) >= l;
          var a = !d || v - d >= r;
          if (!i && !a) {
            if (n) {
              n(e, o);
            }
            s = u = 0;
            d = 0;
          }
        }
      }[a];
      if (y) {
        y();
      }
    };
  }
  function y(e, t = 300, n = 30) {
    return m({
      onClick: e,
      touchDuration: t,
      touchDelta: n
    });
  }
  (i = function (e) {
    var t = this;
    this.options = e;
    this.dblClickTimer = 0;
    this.firstClickPosition = {
      x: 0,
      y: 0
    };
    this.firstClickFiredTime = null;
    this.resetFirstClickFiredTime = function () {
      t.firstClickFiredTime = null;
    };
    this.handleClick = y(function (e) {
      if (t.firstClickFiredTime === null) {
        t.triggerFirstClick(e);
      } else {
        var n = Date.now() - t.firstClickFiredTime <= t.options.duration;
        var i = g(e);
        var o = i.clientX;
        var r = i.clientY;
        var a = Math.abs(o - t.firstClickPosition.x) <= 30 && Math.abs(r - t.firstClickPosition.y) <= 30;
        if (n && a) {
          t.triggerDoubleClick(e);
        } else {
          t.triggerFirstClick(e);
        }
      }
    });
  }.prototype).triggerFirstClick = function (e) {
    this.clearFirstClickTimer();
    var t = g(e);
    this.firstClickPosition = {
      x: t.clientX,
      y: t.clientY
    };
    this.firstClickFiredTime = Date.now();
    this.options.onSingleClick(e);
    this.addFirstClickTimer();
  };
  i.triggerDoubleClick = function (e) {
    this.options.onDoubleClick(e);
    this.resetFirstClickFiredTime();
    this.clearFirstClickTimer();
  };
  i.addFirstClickTimer = function () {
    this.dblClickTimer = window.setTimeout(this.resetFirstClickFiredTime, this.options.duration);
  };
  i.clearFirstClickTimer = function () {
    if (this.dblClickTimer) {
      window.clearTimeout(this.dblClickTimer);
    }
    this.dblClickTimer = 0;
  };
  i.destroy = function () {
    this.clearFirstClickTimer();
  };
  require("jquery-core-library") /*id: 775150*/;
  var richTextEditorListPlugin = require("rich-text-editor-list-plugin") /*id: 656274*/;
  var S = {
    h1: 26,
    h2: 20,
    h3: 18,
    "": 14
  };
  var E = function (e) {
    function t(n) {
      var i = n.editor;
      var o = e.call(this) || this;
      o.name = "Checkbox";
      o.handlerMap = new Map();
      o.innerBody = null;
      o.handleMobileClickCheckbox = y(function (e) {
        return o.handleClickCheckbox(e);
      });
      o.handleCheckboxMousedown = function (e) {
        var t = e.target;
        if ((t && t.tagName) === "LI") {
          var n = syntheticEventUtilities.createSelectionRange(t, o.editor);
          if (n && o.cursorInCheckBox(e, n.start.zoneId, n.start.line)) {
            e.preventDefault();
          }
        }
      };
      o.handleClickCheckbox = function (e) {
        if (o.isSwitchEditable()) {
          var t = e.target;
          var n = t && t.tagName;
          var i = o.editor;
          var a = syntheticEventUtilities.createSelectionRange(t, o.editor);
          if (a && n === "LI" && o.cursorInCheckBox(e, a.start.zoneId, a.start.line)) {
            e.preventDefault();
            e.stopPropagation();
            var l = a.start;
            var s = l.line;
            var u = l.zoneId;
            var d = i.getContentState().getLineAttributes(u, s).toMap();
            var c = d.list;
            if (c) {
              var h = d.list.replace(/^([a-z]+)\d*$/g, "$1");
              var f = parseInt(c.split(h)[1]);
              var p = /check/.test(c) ? "done" : "check";
              i.getContentState().setLineAttributes(u, s, {
                list: "" + p + f
              });
            }
          }
        }
      };
      o.editor = i;
      i.registerCommand(t.KEY, function (e) {
        if (e.value === "check") {
          selectionAttributeToggle.toggleAttribute(i, t.KEY, "check1", true);
        }
      });
      i.registerCommand(indentDirectionConstants.indentConstants.INDENT_LEFT, function () {
        editorListIndentUtil.adjustListIndent(i, "check", false);
        editorListIndentUtil.adjustListIndent(i, "done", false);
      });
      i.registerCommand(indentDirectionConstants.indentConstants.INDENT_RIGHT, function () {
        editorListIndentUtil.adjustListIndent(i, "check", true);
        editorListIndentUtil.adjustListIndent(i, "done", true);
      });
      i.on(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, function (e) {
        if (e.current) {
          o.bindEvent();
        } else {
          o.removeEvent();
        }
      });
      return o;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.editorDidMount = function () {
      this.innerBody = this.editor.getContainer();
      if (this.editor.isEditable()) {
        this.bindEvent();
      }
    };
    n.renderLine = function (e) {
      var t = e.lineState;
      var n = e.children;
      var i = t.getLineAttributes().toMap().list;
      if (i && (i.includes("check") || i.includes("done"))) {
        var o = i.replace(/^([a-z]+)\d*$/g, "$1");
        return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.UnorderedListSymbol, {
          className: "list-" + i + " r-list list-" + o + " r-list-check"
        }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.exportPassthrough, null, n));
      }
      return n;
    };
    n.addEventListener = function (e, t, n) {
      var i;
      var o = this;
      function r(t) {
        if (t.target instanceof Element) {
          for (var i = t.target; i && i !== o.innerBody; i = i.parentElement) {
            if (i == null ? undefined : i.matches(e)) {
              n.call(i, t);
              break;
            }
          }
        }
      }
      this.handlerMap.set("" + e + t, r);
      if ((i = this.innerBody) !== null && i !== undefined) {
        i.addEventListener(t, r, false);
      }
    };
    n.removeEventListener = function (e, t) {
      var n;
      var i = this.handlerMap.get("" + e + t);
      if (i) {
        if ((n = this.innerBody) !== null && n !== undefined) {
          n.removeEventListener(t, i);
        }
      }
    };
    n.bindEvent = function () {
      this.removeEvent();
      if (this.innerBody) {
        if (userAgentDetect.userAgentInfo.isMobile || userAgentDetect.userAgentInfo.isIPad) {
          this.addEventListener(".list-done, .list-check", "touchstart", this.handleMobileClickCheckbox);
          this.addEventListener(".list-done, .list-check", "touchend", this.handleMobileClickCheckbox);
        }
        if (!userAgentDetect.userAgentInfo.isMobile) {
          this.addEventListener(".list-check, .list-done", "click", this.handleClickCheckbox);
          this.addEventListener(".list-check, .list-done", "mousedown", this.handleCheckboxMousedown);
        }
      }
    };
    n.removeEvent = function () {
      if (this.innerBody) {
        if (userAgentDetect.userAgentInfo.isMobile || userAgentDetect.userAgentInfo.isIPad) {
          this.removeEventListener(".list-done, .list-check", "touchstart");
          this.removeEventListener(".list-done, .list-check", "touchend");
        }
        if (!userAgentDetect.userAgentInfo.isMobile) {
          this.removeEventListener(".list-check, .list-done", "click");
          this.removeEventListener(".list-check, .list-done", "mousedown");
        }
      }
    };
    n.cursorInCheckBox = function (e, t, n) {
      var i = this.editor;
      var o = typeof TouchEvent != "undefined" && e instanceof TouchEvent;
      var r = e.target.firstChild;
      var a = r.getBoundingClientRect ? r.getBoundingClientRect() : r.parentElement.getBoundingClientRect();
      var l = S[i.getContentState().getLineAttributes(t, n).toMap().heading] || 14;
      var s = l * (o ? 0.5 : 0.15);
      var u = a.left - l * 0.3;
      var d = u - l - s;
      var c = a.top + s;
      var h = c + l + s;
      var f = e.clientX || 0;
      var p = e.clientY || 0;
      if (o) {
        u = a.left;
        c = a.top;
        var v = typeof TouchEvent != "undefined" && e instanceof TouchEvent ? g(e) : e;
        f = v.clientX;
        p = v.clientY;
      }
      return !!this.clickPositionInCheckbox({
        e: e,
        leftPos: d,
        rightPos: u,
        topPos: c,
        bottomPos: h,
        clientX: f,
        clientY: p
      });
    };
    n.isSwitchEditable = function () {
      return this.editor.isEditable();
    };
    n.clickPositionInCheckbox = function (e) {
      var t = e.e;
      var n = e.clientX;
      var i = e.clientY;
      var o = e.leftPos;
      var r = e.rightPos;
      var a = e.bottomPos;
      var l = e.topPos;
      return typeof TouchEvent != "undefined" && !!(t instanceof TouchEvent) && !!(n >= o) && !!(n <= r) || !!(n >= o) && !!(n <= r) && !!(i <= a) && !!(i >= l);
    };
    n.editorWillDoReturnKey = function (e) {
      var n = e.delta;
      var i = e.editor;
      var o = i.getContentState().getActiveZone();
      var r = o.getZoneId();
      var a = i.selection.getSelection();
      var l = a.toPosition();
      var s = l.start;
      var u = l.len;
      var d = o.getLine(a.start.line);
      if (d) {
        var h = d.getLineAttributes().toMap();
        var f = d.isEmpty();
        var p = h[t.KEY];
        var v = (p == null ? undefined : p.includes("check")) || (p == null ? undefined : p.includes("done"));
        if (!n.ops.length && v && !u) {
          var g = new contentStructureDelta.ContentDelta({
            zoneId: r
          });
          if (f) {
            h.list = "";
            g.retain(s - 1).retain(1, h);
          } else {
            g.retain(s).insertEnter().insertLineMarker({
              list: "check1"
            });
          }
          e.delta = n.compose(g);
        }
      }
    };
    n.deserialize = function (e) {
      var t;
      var n = e.node;
      var i = e.deltaSet;
      var o = e.zoneId;
      if (!(n instanceof HTMLElement) || n.tagName.toLowerCase() !== "li") {
        return i;
      }
      var r = (t = n.dataset.list) === null || t === undefined ? undefined : t.match(/^(check|done)(\d+)$/);
      if (r && Number(r[2]) >= 1) {
        richTextEditorListPlugin.updateDeltaSetAttributes(i, o, {
          list: r[0]
        });
      }
      return i;
    };
    n.destroy = function () {
      this.removeEvent();
    };
    t.KEY = "list";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1001)], t.prototype, "deserialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    CheckboxRenderer: function () {
      return E;
    }
  });
}