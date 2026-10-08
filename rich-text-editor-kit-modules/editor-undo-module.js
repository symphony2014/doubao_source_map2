// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$l' to 'undoCommand'
// - Renamed export 'j0' to 'UndoModule'
// - Renamed export 'zq' to 'redoCommand'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 933023
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var c = "undo";
  var s = "redo";
  function l(e) {
    var t = e.id;
    var r = e.type;
    var n = e.deltaSet;
    var e = e.selection;
    this.id = t;
    this.type = r;
    this.deltaSet = n;
    this.selection = e;
  }
  function u() {}
  u.prototype = Object.create(Array.prototype, {
    clear: {
      value: function () {
        this.splice(0, this.length);
      }
    },
    getNthFromTop: {
      value: function (e) {
        if ((e = this[this.length - 1 - (e = e === undefined ? 0 : e)]) !== null && e !== undefined) {
          return e;
        } else {
          return null;
        }
      }
    },
    getNthFromBottom: {
      value: function (e) {
        if ((e = this[e = e === undefined ? 0 : e]) !== null && e !== undefined) {
          return e;
        } else {
          return null;
        }
      }
    }
  });
  u.prototype.constructor = u;
  var d = function () {
    function e(e) {
      this.name = "undoModule";
      this.Oe = randomStringGenerator.createRandomString(6);
      this.De = null;
      this.Ce = new u();
      this.Ne = new u();
      this.ke = [];
      this.Re = false;
      this.Ae = null;
      this.s = e;
      this.Ue();
      this.xe();
    }
    var t = e.prototype;
    t.xe = function () {
      var e = this;
      var t = this.s;
      t.registerCommand(c, function () {
        e.undo();
      });
      t.registerCommand(s, function () {
        e.redo();
      });
    };
    t.Ue = function () {
      this.s.on(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.handleContentWillChange);
      this.s.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.s.on(editorEventConstants.editorEventTypes.INPUT, this.handleInputEvent, 100);
    };
    t.He = function () {
      this.s.off(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.handleContentWillChange);
      this.s.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.s.off(editorEventConstants.editorEventTypes.INPUT, this.handleInputEvent);
    };
    t.handleInputEvent = function (e) {
      var t = false;
      if (e.nativeEvent.inputType === "historyUndo") {
        this.undo();
        t = true;
      } else if (e.nativeEvent.inputType === "historyRedo") {
        this.redo();
        t = true;
      }
      if (t) {
        e.preventDefault();
        e.stopEvent();
      }
    };
    t.Be = function () {
      var e = this.s.getContentState().contentApplyRuntime;
      return !!e.atRuntime && [c, s].includes(e = e.runtimeStack[0].type);
    };
    Object.defineProperty(t, "inBatching", {
      get: function () {
        return this.ke.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    t.handleContentWillChange = function () {
      this.Ae = this.s.selection.getSelection();
    };
    t.handleContentChange = function (e) {
      var t = e.previous;
      var r = e.deltaSet;
      var o = e.options;
      var e = o.nonundoable;
      var o = o.type;
      if (this.Be()) {
        if (o = (o === c ? this.Ne : this.Ce).getNthFromTop(0)) {
          o.selection = this.Ae;
          return;
        } else {
          return undefined;
        }
      }
      if (e) {
        this.Te(r);
      } else {
        e = this.s.getContentState().contentApplyRuntime;
        this.Fe(r, t.toDeltaSet(), typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e.currentRuntime), {
          selection: this.Ae
        }));
      }
    };
    t.Le = function () {
      if (this.inBatching) {
        this.We(this.ke[this.ke.length - 1]);
      }
      var e = this.Ce.getNthFromTop(0);
      this.ke.push((e == null ? undefined : e.id) || null);
    };
    t.Ke = function () {
      var e;
      if (this.inBatching) {
        e = this.ke.pop();
        this.We(e);
        if (this.inBatching) {
          this.ke.pop();
          this.Le();
        }
      }
    };
    t.We = function (e) {
      var t = typescriptRuntimeHelpers_1.readIterable(e ? this.ze(e) : [-1], 1)[0];
      if (t !== undefined) {
        if ((e = this.Ce.slice(t + 1)).length && this.Re) {
          this.Re = false;
          if ((t = this.De) !== null && t !== undefined) {
            t.do(this.Oe);
          }
        }
        if (e.length > 1) {
          this.mergeRecords.apply(this, typescriptRuntimeHelpers_1.spread(e));
        }
      }
    };
    t.Fe = function (e, t, r) {
      var n = r.id;
      var o = r.type;
      var r = r.selection;
      var t = e.invert(t);
      this.Ce.push(new l({
        id: n,
        type: o,
        deltaSet: t,
        selection: r
      }));
      this.Ne.clear();
      if (this.inBatching) {
        this.Re = true;
      } else if ((r = this.De) !== null && r !== undefined) {
        r.do(this.Oe);
      }
    };
    t.Te = function (e) {
      this.Ge(this.Ce, e);
      this.Ge(this.Ne, e);
    };
    t.Ge = function (e, t) {
      for (var r = e.length - 1; r >= 0; r--) {
        var n = e[r].deltaSet;
        e[r].deltaSet = t.transform(n);
        t = n.transform(t);
      }
    };
    t.Je = function (e, t, r) {
      var o;
      if (e.length) {
        o = e.pop();
        e = this.s.getContentState().toDeltaSet();
        e = o.deltaSet.invert(e);
        t.push(new l(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, o), {
          deltaSet: e
        })));
        this.s.getContentState().apply(o.deltaSet, r);
        this.s.selection.setSelection(o.selection);
      }
    };
    t.performUndo = function () {
      this.Je(this.Ce, this.Ne, {
        type: "undo"
      });
    };
    t.performRedo = function () {
      this.Je(this.Ne, this.Ce, {
        type: "redo"
      });
    };
    t.ze = function (e) {
      var t;
      var r;
      try {
        var o = typescriptRuntimeHelpers_1.values(this.Ce.entries());
        var a = o.next();
        for (; !a.done; a = o.next()) {
          var i = typescriptRuntimeHelpers_1.readIterable(a.value, 2);
          var c = i[0];
          var s = i[1];
          if (s.id === e) {
            return [c, s];
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (r = o.return)) {
            r.call(o);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return [];
    };
    t.Qe = function (e, t) {
      var r = e.id;
      var o = e.type;
      var a = t.id;
      var e = typescriptRuntimeHelpers_1.readIterable(this.ze(r), 2);
      var i = e[0];
      var t = e[1];
      var e = typescriptRuntimeHelpers_1.readIterable(this.ze(a), 2);
      var a = e[0];
      var e = e[1];
      if (t && e && i !== undefined && a !== undefined) {
        var c = e.deltaSet;
        var e = t.deltaSet;
        if (i < a) {
          for (var s = a - 1; i < s; s--) {
            c = this.Ce.getNthFromBottom(s).deltaSet.transform(c);
          }
        } else {
          for (s = a + 1; s < i; s++) {
            c = this.Ce.getNthFromBottom(s).deltaSet.transform(c);
          }
        }
        e = c.compose(e);
        this.Ce.splice(i, 1, new l({
          id: r,
          type: o,
          deltaSet: e,
          selection: t.selection
        }));
        this.Ce.splice(a, 1);
      }
    };
    t.batchedUndo = function (e) {
      this.Le();
      e();
      this.Ke();
    };
    t.setUndoDispatcher = function (e, t) {
      this.De = e;
      if (t != null && t.id) {
        this.Oe = t == null ? undefined : t.id;
      }
      this.De.register(typescriptRuntimeHelpers_1.assign({
        id: this.Oe,
        undo: this.performUndo,
        redo: this.performRedo
      }, t));
    };
    t.undo = function () {
      if (this.De) {
        this.De.undo();
      } else {
        this.performUndo();
      }
    };
    t.redo = function () {
      if (this.De) {
        this.De.redo();
      } else {
        this.performRedo();
      }
    };
    t.mergeRecords = function () {
      var e = [];
      var t = 0;
      for (; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      try {
        for (var r = e.length - 1; r > 0; r--) {
          this.Qe(e[r - 1], e[r]);
        }
      } catch (e) {
        this.s.log("mergeRecords failed", e.stack);
      }
    };
    Object.defineProperty(t, "undoable", {
      get: function () {
        return this.Ce.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "redoable", {
      get: function () {
        return this.Ne.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    t.markNonundoable = function (e) {
      var t = typescriptRuntimeHelpers_1.readIterable(this.ze(e.id), 1)[0];
      if (t !== undefined) {
        e = typescriptRuntimeHelpers_1.readIterable(this.Ce.splice(t, 1), 1)[0].deltaSet.invert(this.s.getContentState().toDeltaSet());
        this.Ge(this.Ce.slice(0, t), e);
      }
    };
    t.getNthUndoRecordFromTop = function (e) {
      return this.Ce.getNthFromTop(e = e === undefined ? 0 : e);
    };
    t.getNthUndoRecordFromBottom = function (e) {
      return this.Ce.getNthFromBottom(e = e === undefined ? 0 : e);
    };
    t.getNthRedoRecordFromTop = function (e) {
      return this.Ne.getNthFromTop(e = e === undefined ? 0 : e);
    };
    t.getNthredoRecordFromBottom = function (e) {
      return this.Ne.getNthFromBottom(e = e === undefined ? 0 : e);
    };
    t.clearUndoStack = function () {
      this.Ce.clear();
    };
    t.clearRedoStack = function () {
      this.Ne.clear();
    };
    t.clear = function () {
      this.clearRedoStack();
      this.clearUndoStack();
    };
    t.destroy = function () {
      var e;
      this.He();
      if ((e = this.De) !== null && e !== undefined) {
        e.unregister(this.Oe);
      }
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "handleInputEvent", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "handleContentWillChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "handleContentChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "performUndo", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "performRedo", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "batchedUndo", null);
    return e;
  }();
  require.d(exports, {
    undoCommand: function () {
      return c;
    },
    UndoModule: function () {
      return d;
    },
    redoCommand: function () {
      return s;
    }
  });
}