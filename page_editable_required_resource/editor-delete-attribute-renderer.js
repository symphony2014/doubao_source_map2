// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'DeleteAttrRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 541916
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorInputHandler = require("editor-input-handler") /*id: 142590*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var u = [editorInputHandler.InputActionTypes.DeleteRange, editorInputHandler.InputActionTypes.DeleteForward, editorInputHandler.InputActionTypes.DeleteBackward, editorInputHandler.InputActionTypes.DeleteToLineEnd, editorInputHandler.InputActionTypes.DeleteToLineStart, editorInputHandler.InputActionTypes.DeleteEntireWordForward, editorInputHandler.InputActionTypes.DeleteEntireWordBackward];
  var c = function (e) {
    function n(n) {
      var i = e.call(this) || this;
      i.attributesInheritFromDelete = [];
      var r = n.editor;
      var o = n.attributesInheritFromDelete;
      i.editor = r;
      i.attributesInheritFromDelete = o === undefined ? [] : o;
      r.on(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, i.handleContentWillChange);
      return i;
    }
    typescriptHelpers.extendClass(n, e);
    var i = n.prototype;
    i.handleContentWillChange = function (e) {
      var n;
      var i;
      var l;
      var a;
      var d;
      var c;
      var h = e.options;
      var f = e.deltaSet;
      var p = this.editor;
      if (h.type && [editorInputHandler.InputActionTypes.FlushInput, editorInputHandler.InputActionTypes.Composition].includes(h.type)) {
        p.getContentState().clearInlineStyleOverride();
        return;
      }
      if (h.type && u.includes(h.type) && this.attributesInheritFromDelete.length) {
        p.getContentState().clearInlineStyleOverride();
        try {
          var v = typescriptHelpers.createIterator(Object.values(f.deltas));
          var g = v.next();
          for (; !g.done; g = v.next()) {
            var y = g.value;
            var m = y.zoneId;
            var b = 0;
            try {
              l = undefined;
              var E = typescriptHelpers.createIterator(y.ops);
              var C = E.next();
              for (; !C.done; C = E.next()) {
                var S = C.value;
                if (!S.insert) {
                  if (S.retain) {
                    b += S.retain;
                    continue;
                  }
                  if (S.delete) {
                    var k = new editorPositionClass.EditorPosition({
                      editor: p,
                      zoneId: m,
                      len: 1,
                      start: b
                    });
                    var P = k.toRange();
                    var w = p.getContentState().getAttributes(P.start, P.end);
                    try {
                      d = undefined;
                      var _ = typescriptHelpers.createIterator(w);
                      var I = _.next();
                      for (; !I.done; I = _.next()) {
                        var T = typescriptHelpers.iteratorToArray(I.value, 2);
                        var N = T[0];
                        var O = T[1];
                        if (this.attributesInheritFromDelete.includes(N)) {
                          p.getContentState().setInlineStyleOverride(typescriptHelpers.assignObject({}, k), N, O);
                        }
                      }
                    } catch (e) {
                      d = {
                        error: e
                      };
                    } finally {
                      try {
                        if (I && !I.done && (c = _.return)) {
                          c.call(_);
                        }
                      } finally {
                        if (d) {
                          throw d.error;
                        }
                      }
                    }
                    break;
                  }
                }
              }
            } catch (e) {
              l = {
                error: e
              };
            } finally {
              try {
                if (C && !C.done && (a = E.return)) {
                  a.call(E);
                }
              } finally {
                if (l) {
                  throw l.error;
                }
              }
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (g && !g.done && (i = v.return)) {
              i.call(v);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    };
    i.editorGetInheritAttributes = function (e) {
      var n = this.editor.selection.getSelection().toPosition();
      var i = this.editor.getContentState().getInlineStyleOverride(n);
      this.editor.getContentState().clearInlineStyleOverride(n);
      return Object.assign(e || {}, i);
    };
    i.destroy = function () {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.handleContentWillChange);
    };
    typescriptHelpers.applyDecorators([autoBindMethodDescriptor.autoBindMethod], n.prototype, "handleContentWillChange", null);
    return n;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    DeleteAttrRenderer: function () {
      return c;
    }
  });
}