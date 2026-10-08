// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'EditorRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 172613
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var l = function () {
    function t(t) {
      var e = t.line;
      var n = t.offset;
      var r = t.position;
      var t = t.zoneId;
      var t = t === undefined ? zeroConstantModule_1.versionValue : t;
      this._position = 0;
      this.line = e;
      this.offset = n;
      this.zoneId = t;
      Object.defineProperty(this, "_position", {
        enumerable: false,
        value: r
      });
    }
    t.prototype[Symbol.toPrimitive] = function (t) {
      if (t === "number") {
        return this._position;
      } else {
        return JSON.stringify({
          line: this.line,
          offset: this.offset,
          zoneId: this.zoneId
        });
      }
    };
    return t;
  }();
  var u = function () {
    function t(t) {
      var e = t.editor;
      var n = t.start;
      var r = t.end;
      var i = t.isBackward;
      var i = i !== undefined && i;
      var t = t.state;
      this.editor = e;
      n = this.createRangePoint(n, false, t);
      t = (r = this.createRangePoint(r, false, t)) < n;
      this.start = t ? r : n;
      this.end = t ? n : r;
      this.isBackward = t || i;
      Object.defineProperties(this, {
        editor: {
          enumerable: false
        },
        _start: {
          enumerable: false
        },
        _end: {
          enumerable: false
        },
        start: {
          enumerable: true,
          get: function () {
            return this._start;
          },
          set: function (t) {
            this._start = t;
          }
        },
        end: {
          enumerable: true,
          get: function () {
            return this._end;
          },
          set: function (t) {
            this._end = t;
          }
        }
      });
    }
    var e = t.prototype;
    t.isRange = function (e) {
      return e instanceof t;
    };
    t.isPointEqual = function (t, e) {
      var n = t.line;
      var r = t.offset;
      var i = t.zoneId;
      var o = e.line;
      var t = e.offset;
      var e = e.zoneId;
      return n === o && r === t && i === e;
    };
    t.isRangeEqual = function (e, n) {
      var r = e.start;
      var i = e.end;
      var e = n.start;
      var n = n.end;
      return t.isPointEqual(r, e) && t.isPointEqual(i, n);
    };
    t.isRangesEqual = function (t, e) {
      if (t.length !== e.length) {
        return false;
      }
      var n = 0;
      var r = t.length;
      for (; n < r; n++) {
        var i = t[n];
        var o = e[n];
        if (!o || !this.isRangeEqual(i, o)) {
          return false;
        }
      }
      return true;
    };
    t.isPointLargerThan = function (t, e) {
      var n = t.line;
      var r = t.offset;
      var i = t.zoneId;
      var o = e.line;
      var t = e.offset;
      return i === e.zoneId && (o < n || n === o && t < r);
    };
    Object.defineProperty(e, "start", {
      get: function () {
        return this._start;
      },
      set: function (t) {
        this._start = this.createRangePoint(t);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e, "end", {
      get: function () {
        return this._end;
      },
      set: function (t) {
        this._end = this.createRangePoint(t);
      },
      enumerable: false,
      configurable: true
    });
    e.create = function (e) {
      return new t(e);
    };
    e.createRangePoint = function (t, e, n) {
      if (!(e = e !== undefined && e) && t instanceof l) {
        return t;
      } else {
        e = n || this.editor.getContentState();
        n = null;
        if ("rangePointToOffset" in e) {
          n = e.rangePointToOffset(t);
        } else if ("pointToOffset" in e) {
          n = e.pointToOffset(t);
        }
        if (n === null) {
          this.editor.error({
            message: "point: " + t + " can't parse to position",
            level: editorConstantsKeycodes.LogLevel.ERROR
          });
          return new l(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
            position: -1
          }));
        } else {
          return new l(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
            position: n
          }));
        }
      }
    };
    e.toPosition = function (t) {
      var e = t || this.editor.getContentState();
      var n = null;
      var t = null;
      if ("rangePointToOffset" in e) {
        n = e.rangePointToOffset(this.start);
        t = e.rangePointToOffset(this.end);
      } else if ("pointToOffset" in e) {
        n = e.pointToOffset(this.start);
        t = e.pointToOffset(this.end);
      }
      if (n === null || t === null) {
        this.editor.error({
          message: "startOffset: " + n + ", endOffset: " + t,
          level: editorConstantsKeycodes.LogLevel.ERROR
        });
        return new editorPositionClass.EditorPosition({
          editor: this.editor,
          start: -1,
          len: 0,
          zoneId: this.start.zoneId,
          isBackward: this.isBackward
        });
      } else {
        return new editorPositionClass.EditorPosition({
          editor: this.editor,
          start: n,
          len: t - n,
          zoneId: this.start.zoneId,
          isBackward: this.isBackward
        });
      }
    };
    e.isCollapsed = function () {
      return t.isPointEqual(this.start, this.end);
    };
    e.clone = function (t) {
      return new (this.editor.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range))({
        editor: this.editor,
        start: this.createRangePoint(this.start, true, t),
        end: this.createRangePoint(this.end, true, t),
        isBackward: this.isBackward
      });
    };
    e.toString = function () {
      return JSON.stringify(this);
    };
    return t;
  }();
  require.d(exports, {
    EditorRange: function () {
      return u;
    }
  });
}