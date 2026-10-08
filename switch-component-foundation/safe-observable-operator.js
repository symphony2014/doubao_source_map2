// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'createSafeOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 15361
         */
module.exports = function (module, exports, require) {
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  require.d(exports, {
    createSafeOperator: function () {
      return function e(i) {
        return observableSafeLiftUtil.createSafeOperator(function (o, l) {
          var s;
          var a = null;
          var c = false;
          a = o.subscribe(safeSubscriber.safeSubscriber(l, undefined, undefined, function (r) {
            s = observableFromAnySource.fromAnySource(i(r, e(i)(o)));
            if (a) {
              a.unsubscribe();
              a = null;
              s.subscribe(l);
            } else {
              c = true;
            }
          }));
          if (c) {
            a.unsubscribe();
            a = null;
            s.subscribe(l);
          }
        });
      };
    }
  });
}