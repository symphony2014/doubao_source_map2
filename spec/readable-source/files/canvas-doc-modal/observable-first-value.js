// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'firstValueFrom'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23457.0bcdcee9.js
         * chunkId: 23457
         * moduleId: 244525
         */
module.exports = function (module, exports, require) {
  var emptySequenceErrorClass = require("empty-sequence-error-class") /*id: 685595*/;
  var subscriberObserverCore = require("subscriber-observer-core") /*id: 857315*/;
  function s(e, t) {
    var i = typeof t == "object";
    return new Promise(function (s, o) {
      var r = new subscriberObserverCore.SafeSubscriber({
        next: function (e) {
          s(e);
          r.unsubscribe();
        },
        error: o,
        complete: function () {
          if (i) {
            s(t.defaultValue);
          } else {
            o(new emptySequenceErrorClass.EmptyError());
          }
        }
      });
      e.subscribe(r);
    });
  }
  require.d(exports, {
    firstValueFrom: function () {
      return s;
    }
  });
}