// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C0' to 'executeAfterFirstScreen'
// - Renamed export 'Rx' to 'executeAfterFirstPaint'
// - Renamed export 'lP' to 'scheduleAnimationFrameOrTimeout'
// - Renamed export 'lU' to 'debouncedExecution'
// - Renamed export 'nd' to 'executeAfterGlobalEvent'
// - Renamed export 'pL' to 'executeImmediatelyIfFirstScreen'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 712591
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function u(e, n = 100) {
    let r = false;
    let i = requestAnimationFrame(() => {
      if (!r) {
        r = true;
        e("RAF");
      }
    });
    let o = setTimeout(() => {
      if (!r) {
        r = true;
        e("TIMEOUT");
      }
    }, n);
    return function () {
      cancelAnimationFrame(i);
      clearTimeout(o);
    };
  }
  function c(e) {
    let n;
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    n = u(() => {
      n = u(() => {
        e();
      }, r);
    }, r);
    return function () {
      n();
    };
  }
  function _(e, n) {
    return function (e, n) {
      if (n.isFirstScreen || n.skipFirstScreen) {
        e.apply(null);
        return emptyExportFunction.emptyFunction;
      }
      let r = null;
      let o = () => {
        if (r != null) {
          r.unsubscribe();
        }
        r = null;
      };
      r = n.firstPaintReady$.subscribe(() => {
        l(e, {
          isFirstScreen: n.isFirstScreen
        });
        o();
      });
      return o;
    }(e, n);
  }
  function l(e, n) {
    if (n.isFirstScreen || n.skipFirstScree) {
      e.apply(null);
      return emptyExportFunction.emptyFunction;
    } else {
      return s(e);
    }
  }
  function s(e, n) {
    let r = emptyExportFunction.emptyFunction;
    let u = emptyExportFunction.emptyFunction;
    let _ = null;
    let l = () => {
      if (_ != null) {
        _.unsubscribe();
      }
      _ = null;
      if (u) {
        u();
      }
    };
    r = () => {
      u = c(() => {
        l();
        e.apply(null);
      });
    };
    _ = n ? docxEditorEventConstantsAndManager.globalReplaySubject.pipe(observableTakeOperator.takeOperator(1)).subscribe(r) : docxEditorEventConstantsAndManager.globalReplaySubject.subscribe(r);
    return l;
  }
  function E(e, n) {
    if (!n || n.isFirstScreen) {
      e.apply(null);
    }
  }
  require.d(exports, {
    executeAfterFirstScreen: function () {
      return l;
    },
    executeAfterFirstPaint: function () {
      return _;
    },
    scheduleAnimationFrameOrTimeout: function () {
      return u;
    },
    debouncedExecution: function () {
      return c;
    },
    executeAfterGlobalEvent: function () {
      return s;
    },
    executeImmediatelyIfFirstScreen: function () {
      return E;
    }
  });
}