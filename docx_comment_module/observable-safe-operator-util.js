// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'createSafeOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 179988
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var identityUtil = require("identity-util") /*id: 885053*/;
  function a(e, i, n) {
    var a = isFunctionUtil.isFunction(e) || i || n ? {
      next: e,
      error: i,
      complete: n
    } : e;
    if (a) {
      return observableSafeLiftUtil.createSafeOperator(function (e, i) {
        if ((n = a.subscribe) !== null && n !== undefined) {
          n.call(a);
        }
        var n;
        var s = true;
        e.subscribe(safeSubscriber.safeSubscriber(i, function (e) {
          var n;
          if ((n = a.next) !== null && n !== undefined) {
            n.call(a, e);
          }
          i.next(e);
        }, function () {
          var e;
          s = false;
          if ((e = a.complete) !== null && e !== undefined) {
            e.call(a);
          }
          i.complete();
        }, function (e) {
          var n;
          s = false;
          if ((n = a.error) !== null && n !== undefined) {
            n.call(a, e);
          }
          i.error(e);
        }, function () {
          var e;
          var i;
          if (s) {
            if ((e = a.unsubscribe) !== null && e !== undefined) {
              e.call(a);
            }
          }
          if ((i = a.finalize) !== null && i !== undefined) {
            i.call(a);
          }
        }));
      });
    } else {
      return identityUtil.identity;
    }
  }
  require.d(exports, {
    createSafeOperator: function () {
      return a;
    }
  });
}