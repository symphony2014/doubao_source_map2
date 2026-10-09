// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'createEventTest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 564106
         */
module.exports = function (module, exports, require) {
  let n = function (e) {
    var t;
    var r;
    var a;
    if (e == null) {
      return o;
    }
    if (typeof e == "function") {
      t = e;
      return function (e, r, n) {
        return !!u(e) && !!t.call(this, e, typeof r == "number" ? r : undefined, n || undefined);
      };
    }
    if (typeof e == "object") {
      if (Array.isArray(e)) {
        return function (e) {
          let t = [];
          let r = -1;
          while (++r < e.length) {
            t[r] = n(e[r]);
          }
          return i(function (...e) {
            let r = -1;
            while (++r < t.length) {
              if (t[r].apply(this, e)) {
                return true;
              }
            }
            return false;
          });
        }(e);
      } else {
        r = e;
        return i(function (e) {
          let t;
          for (t in r) {
            if (e[t] !== r[t]) {
              return false;
            }
          }
          return true;
        });
      }
    }
    if (typeof e == "string") {
      a = e;
      return i(function (e) {
        return e && e.type === a;
      });
    }
    throw Error("Expected function, string, or object as test");
  };
  function i(e) {
    return function (t, r, n) {
      return !!u(t) && !!e.call(this, t, typeof r == "number" ? r : undefined, n || undefined);
    };
  }
  function o() {
    return true;
  }
  function u(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  require.d(exports, {
    createEventTest: function () {
      return n;
    }
  });
}