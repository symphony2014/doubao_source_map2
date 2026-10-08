// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'createSafeSwitchMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21069.33dd1f3c.js
         * chunkId: 21069
         * moduleId: 37820
         */
module.exports = function (module, exports, require) {
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function i(e, n) {
    return observableSafeLiftUtil.createSafeOperator(function (t, o) {
      var i = null;
      var c = 0;
      var a = false;
      function f() {
        return a && !i && o.complete();
      }
      t.subscribe(safeSubscriber.safeSubscriber(o, function (t) {
        if (i != null) {
          i.unsubscribe();
        }
        var a = 0;
        var s = c++;
        observableFromAnySource.fromAnySource(e(t, s)).subscribe(i = safeSubscriber.safeSubscriber(o, function (e) {
          return o.next(n ? n(t, e, s, a++) : e);
        }, function () {
          i = null;
          f();
        }));
      }, function () {
        a = true;
        f();
      }));
    });
  }
  require.d(exports, {
    createSafeSwitchMap: function () {
      return i;
    }
  });
}