// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'HorizontalLineRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 274854
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorLeafTextComponent = require("editor-leaf-text-component") /*id: 374368*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var docMetadataFieldKeys = require("doc-metadata-field-keys") /*id: 999638*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var colorThemeConstants = require("color-theme-constants") /*id: 561108*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var g = {
    display: "block",
    boxSizing: "content-box",
    padding: "13px 0 12px",
    overflow: "hidden",
    height: "1px",
    backgroundOrigin: "content-box",
    backgroundImage: "linear-gradient(90deg, " + colorThemeConstants.borderColor + ", " + colorThemeConstants.borderColor + ")",
    backgroundRepeat: "no-repeat",
    border: "0"
  };
  var m = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.handleSelect = function () {
        n.setState({
          isSelected: true
        });
      };
      n.handleDeSelect = function () {
        n.setState({
          isSelected: false
        });
      };
      n.state = {
        isSelected: false
      };
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.render = function () {
      var e = this.state.isSelected ? typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, g), {
        backgroundImage: "linear-gradient(90deg, " + colorThemeConstants.primaryColor + ", " + colorThemeConstants.primaryColor + ")"
      }) : g;
      return reactCoreLibraryReexport.createElement(editorLeafTextComponent.LeafTextWithContext, {
        contentEditable: false,
        style: e,
        "data-faketext": " ",
        onSelect: this.handleSelect,
        onDeselect: this.handleDeSelect
      });
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var y = function (e) {
    function t(n) {
      var o = n.editor;
      var r = e.call(this) || this;
      r.name = "HorizontalLine";
      r.handleKeyDown = function (e) {
        if (browserDetectUtils.platformInfo.mobile && e.key === "Backspace") {
          var t = r.editor;
          var n = t.selection.getSelection();
          if (n.isCollapsed()) {
            var i = n.start.line - 1;
            var o = r.editor.getContentState().getActiveZone().getLine(i);
            if (o && r.isHorizontalLine(i) && n.start.offset === 0) {
              var l = o.getOffset();
              var s = l.start;
              var u = l.end;
              var d = new contentStructureDelta.ContentDelta({
                zoneId: o.getZoneId()
              }).retain(s).delete(u - s);
              t.getContentState().apply(d);
              e.preventDefault();
              e.preventEvent();
              e.stopEvent();
            }
          }
        } else if (e.key === "Enter") {
          var t = r.editor;
          var n = t.selection.getSelection();
          if (!n.isCollapsed()) {
            var s = n.start;
            var u = n.end;
            if (s.line === u.line && r.isHorizontalLine(s.line)) {
              var h = n.toPosition();
              var f = h.start;
              var p = h.len;
              var v = n.start.zoneId;
              var d = new contentStructureDelta.ContentDelta({
                zoneId: v
              }).retain(f + p).insertEnterAndLineMarker();
              t.getContentState().apply(d);
              e.preventDefault();
              e.preventEvent();
              e.stopEvent();
              t.selection.setSelection({
                start: {
                  line: s.line + 1,
                  offset: 1,
                  zoneId: v
                },
                end: {
                  line: s.line + 1,
                  offset: 1,
                  zoneId: v
                }
              });
            }
          }
        }
      };
      r.handleSelectionChange = function (e) {
        var n;
        var o = e.current;
        if (o.isCollapsed()) {
          var a = o.start;
          var s = a.zoneId;
          var u = a.line;
          var d = (n = r.editor.getContentState().getZoneState(s)) === null || n === undefined ? undefined : n.getLine(u);
          if (d && d.getAttributes().toMap()[t.KEY]) {
            var c = o.start;
            var h = o.end;
            var f = d.getModelText().length - 1;
            var p = new editorRangeZoneClass.EditorRangeZone({
              editor: r.editor,
              start: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, c), {
                offset: d.getLineMarker()
              }),
              end: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, h), {
                offset: Math.min(f, d.getLineMarker() + 1)
              })
            });
            r.editor.selection.setSelection(p);
          }
        }
      };
      r.editor = o;
      o.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, r.handleSelectionChange);
      o.registerCommand(t.KEY, function () {
        r.doInsertHorizontalLine();
      });
      o.on(editorEventConstants.editorEventTypes.KEYDOWN, r.handleKeyDown);
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.isHorizontalLine = function (e) {
      var n = this.editor.getContentState().getActiveZone().getLine(e);
      if (!n) {
        return false;
      }
      var i = n.getOps();
      return n.getLineAttributes().toMap()[t.KEY] || i.length && i.filter(function (e) {
        return e.attributes?.[t.KEY];
      }).length;
    };
    n.match = function (e) {
      return e === t.KEY;
    };
    n.render = function (e) {
      e.class += " horizontal-line";
      return reactCoreLibraryReexport.createElement(m, null);
    };
    n.serialize = function (e) {
      var t = e.type;
      var n = e.op;
      var i = n && n.attributes && n.attributes["horizontal-line"];
      if (t === treeNodeTypes.nodeTypes.LEAF && i) {
        var o = document.createElement("span");
        o.classList.add("horizontal-line");
        var r = document.createElement("hr");
        r.classList.add("horizontal-line");
        o.appendChild(r);
        e.node = o;
      }
      return e;
    };
    n.deserialize = function (e) {
      var t = e.node;
      var n = e.deltaSet;
      var i = e.zoneId;
      var o = new deltaSetCore.DeltaSet();
      if (t instanceof HTMLElement) {
        var r = t.tagName;
        var a = t.className;
        var l = r === "HR" && !a.includes("horizontal-line");
        var s = r === "SPAN" && a.includes("horizontal-line");
        if (l || s) {
          n.forEach(function (e, t) {
            if (t === i && e instanceof contentStructureDelta.ContentDelta) {
              var n = e.create(e);
              n.insert(" ", {
                "horizontal-line": "true"
              });
              o = o.concat(n);
            } else {
              o = o.concat(e);
            }
          });
          return o;
        }
      }
      return n;
    };
    n.doInsertHorizontalLine = function (e) {
      var n;
      var i = e ?? this.editor.selection.getSelection();
      var o = i.start;
      var r = i.end;
      var a = this.editor.getContentState().getZoneState(o.zoneId);
      if (a) {
        var l = a.getLine(o.line);
        var s = a.getLine(r.line);
        if (l && s) {
          var u = a.pointToOffset(o);
          var d = a.pointToOffset(r);
          if (u !== null && d !== null) {
            var h = +!!l.hasLineMarker();
            var p = l.getLineAttributes().every(function (e) {
              return docMetadataFieldKeys.metadataFieldKeys.includes(e[0]);
            });
            var v = o.line === r.line && o.offset === r.offset;
            var g = r.line === a.length() - 1;
            (n = {})[t.KEY] = "true";
            var m = n;
            if (v) {
              if (o.offset !== h && l.isEndOfLine(o.offset)) {
                if (g) {
                  var y = new contentStructureDelta.ContentDelta({
                    zoneId: o.zoneId
                  }).retain(u).insertEnterAndLineMarker().insert(" ", m).insertEnterAndLineMarker();
                  this.editor.getContentState().apply(y, {
                    type: "insertHorizontalLine"
                  });
                } else {
                  var y = new contentStructureDelta.ContentDelta({
                    zoneId: o.zoneId
                  }).retain(u).insertEnterAndLineMarker().insert(" ", m).insertEnterAndLineMarker();
                  this.editor.getContentState().apply(y, {
                    type: "insertHorizontalLine"
                  });
                  var b = {
                    zoneId: o.zoneId,
                    line: o.line + 2,
                    offset: 0
                  };
                  this.editor.selection.setSelection({
                    start: b,
                    end: b
                  }, true);
                }
              } else if (o.line === 0 && o.offset === h && o.zoneId === "0") {
                var y = new contentStructureDelta.ContentDelta({
                  zoneId: o.zoneId
                }).retain(u).insertEnterAndLineMarker().insert(" ", m).insertEnterAndLineMarker();
                this.editor.getContentState().apply(y, {
                  type: "insertHorizontalLine"
                });
              } else if (r.offset === h && p) {
                var y = new contentStructureDelta.ContentDelta({
                  zoneId: o.zoneId
                }).retain(u).insert(" ", m).insertEnterAndLineMarker();
                this.editor.getContentState().apply(y, {
                  type: "insertHorizontalLine"
                });
              } else if (h && r.offset === h) {
                var y = new contentStructureDelta.ContentDelta({
                  zoneId: o.zoneId
                }).retain(u).insertEnterAndLineMarker().insert(" ", m).insertEnterAndLineMarker();
                this.editor.getContentState().apply(y, {
                  type: "insertHorizontalLine"
                });
              } else {
                var y = new contentStructureDelta.ContentDelta({
                  zoneId: o.zoneId
                }).retain(u).insertEnterAndLineMarker().insert(" ", m).insertEnterAndLineMarker();
                this.editor.getContentState().apply(y, {
                  type: "insertHorizontalLine"
                });
              }
            } else {
              var y = new contentStructureDelta.ContentDelta({
                zoneId: o.zoneId
              }).retain(u).delete(d - u).insertEnterAndLineMarker().insert(" ", m).insertEnterAndLineMarker();
              this.editor.getContentState().apply(y, {
                type: "insertHorizontalLine"
              });
            }
          }
        }
      }
    };
    n.destroy = function () {
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown);
    };
    t.KEY = "horizontal-line";
    typescriptHelpers_1.decorate([reactDomContextDecorator.withContextConsumer()], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    HorizontalLineRenderer: function () {
      return y;
    }
  });
}