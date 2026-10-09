// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'HeadingPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 899523
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var selectionAttributeToggle = require("selection-attribute-toggle") /*id: 663983*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var c = {
    24: "h1",
    20: "h2",
    18: "h3"
  };
  function h(e, t, r) {
    var n = /(?:^| )heading-(\S+)/.exec(t);
    if (/^h\d+$/.test(e)) {
      return e;
    }
    if (n) {
      return n[1];
    }
    var i = /font-size: (\d+)px/.exec(r);
    if (r && (r.indexOf("font-weight: bold;") > -1 || r.indexOf("font-weight: 700;") > -1) && i && c[i[1]]) {
      return c[i[1]];
    } else {
      return null;
    }
  }
  var d = function (e) {
    function t(r) {
      var n = r.editor;
      var i = e.call(this) || this;
      i.name = "Heading";
      i.deserialize = function (e) {
        var t = e.node;
        var r = e.deltaSet;
        var n = e.zoneId;
        if (t instanceof HTMLElement) {
          var i = t.tagName;
          var a = t.className;
          var s = t.getAttribute("style") || "";
          var l = h(i.toLowerCase(), a, s);
          if (l) {
            return editorClipboardManager.transformDeltaAttrs(r, n, {
              heading: l
            });
          }
        }
        return r;
      };
      i.editorWillPaste = function (e) {
        var t = e.deltaSet;
        var r = e.zoneId;
        var n = i.editor;
        var o = n.selection.getSelection().start;
        var a = n.getContentState().getZoneState(r);
        if (a) {
          var s = a.getLine(o.line);
          if (s) {
            if (s.isTextEmpty()) {
              return t;
            }
            var u = t.get(r);
            var c = u.ops[0];
            if (!c || !c.attributes || !c.attributes.heading) {
              return t;
            }
            var h = u.reduce(function (e, t, r) {
              if (r === 0) {
                return e;
              } else {
                return e.push(t);
              }
            }, new contentStructureDelta.ContentDelta({
              zoneId: r
            }));
            return t.replace(r, h);
          }
        }
      };
      i.handleDeleteKey = function (e) {
        var r = i.editor.selection.getSelection();
        var n = r.start;
        var o = i.editor.getContentState();
        var a = o.getActiveZone().getLine(n.line);
        if (e.isBackward && r.isCollapsed() && a && r.start.offset === a.getLineMarker() && a.getLineAttributes().toMap()[t.KEY]) {
          o.setLineAttributes(n.zoneId, n.line, {
            heading: ""
          });
          e.stopEvent();
          e.preventEvent();
          e.e.preventDefault();
        }
      };
      i.editor = n;
      n.registerCommand(t.KEY, function (e) {
        var r = e.value;
        selectionAttributeToggle.toggleAttribute(n, t.KEY, r, true);
      });
      i.editor.on(editorEventConstants.editorEventTypes.DELETE_KEY, i.handleDeleteKey, 895);
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.destroy = function () {
      this.editor.off(editorEventConstants.editorEventTypes.DELETE_KEY, this.handleDeleteKey);
    };
    r.renderLine = function (e) {
      var r = e.lineState;
      var n = e.children;
      var i = r.getLineAttributes().toMap()[t.KEY];
      if (i) {
        e.lineClass += " heading-" + i;
      }
      return n;
    };
    r.serialize = function (e) {
      var r = e.type;
      var n = e.node;
      var i = e.lineAttributes;
      var o = i && i[t.KEY];
      if (r === treeNodeTypes.nodeTypes.LINE && o) {
        var a = Number(o.match(/\d+/)[0]) <= 6 ? document.createElement(o) : document.createElement("span");
        a.appendChild(n);
        a.classList.add("heading-" + o);
        e.node = a;
      }
      return e;
    };
    r.editorWillDoReturnKey = function (e) {
      var r = e.delta;
      var n = e.editor;
      var i = n.selection.getSelection();
      var o = n.getContentState().getActiveZone();
      var a = o.getZoneId();
      var s = o.getLine(i.start.line);
      if (s) {
        var u = s.getLineAttributes().toMap();
        var c = i.toPosition();
        var h = c.start;
        var d = c.len;
        if (u[t.KEY] && !d && i.end.offset === s.length() - 1) {
          var f = e.delta.ops.filter(function (e) {
            return e.attributes?.lmkr;
          });
          if (f.length > 0) {
            if (f[0].attributes) {
              f[0].attributes.heading = "";
            }
          } else {
            u.heading = "";
            var A = new contentStructureDelta.ContentDelta({
              zoneId: a
            }).retain(h).insertEnter().insertLineMarker(u);
            e.delta = r.compose(A);
          }
        }
      }
    };
    r.editorWillDoDeleteKey = function (e) {
      var r = e.deltaSet;
      var i = e.editor;
      var o = i.selection.getSelection();
      var a = i.getContentState().getActiveZone();
      var s = a.getZoneId();
      var u = a.getLine(o.start.line);
      if (u) {
        var c = u.previousSibling();
        var h = u.getLineAttributes().toMap();
        var d = o.toPosition();
        var f = d.start;
        var A = d.len;
        var g = o.start.offset === 1;
        if (c && !A && h[t.KEY] && g) {
          var p = Number(c.hasLineMarker());
          var m = c.isEmpty();
          var y = c.getLineAttributes().toMap();
          var v = Object.keys(y).find(function (e) {
            return !["author", "lmkr", "insertorder", "lineguid", "align"].includes(e);
          });
          var b = r.get(s).ops.length;
          if (!v && m && !b) {
            var w = new contentStructureDelta.ContentDelta({
              zoneId: s
            });
            if (p) {
              w.retain(f - 3).retain(1, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, y), {
                heading: h[t.KEY]
              })).delete(2);
            } else {
              w.retain(f - 2).insertLineMarker(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, y), {
                heading: h[t.KEY]
              })).delete(2);
            }
            e.deltaSet = r.compose(w);
          }
        }
      }
    };
    t.KEY = "heading";
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    HeadingPlugin: function () {
      return d;
    }
  });
}