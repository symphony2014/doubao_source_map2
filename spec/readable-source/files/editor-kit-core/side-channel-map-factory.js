// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectInspectUtil'
// - Resolved require(406902) to 'object-inspect-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 613760
         */
module.exports = function (module, exports, require) {
  var objectInspectUtil = require("object-inspect-util") /*id: 406902*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  function i(t, e, r) {
    var n;
    var o = t;
    for (; (n = o.next) != null; o = n) {
      if (n.key === e) {
        o.next = n.next;
        if (!r) {
          n.next = t.next;
          t.next = n;
        }
        return n;
      }
    }
  }
  function u(t, e) {
    if (t) {
      var r = i(t, e);
      return r && r.value;
    }
  }
  function a(t, e, r) {
    var n = i(t, e);
    if (n) {
      n.value = r;
    } else {
      t.next = {
        key: e,
        next: t.next,
        value: r
      };
    }
  }
  function s(t, e) {
    if (t) {
      return i(t, e, true);
    }
  }
  module.exports = function () {
    var t;
    var e = {
      assert: function (t) {
        if (!e.has(t)) {
          throw new typeErrorConstructor("Side channel does not contain " + objectInspectUtil(t));
        }
      },
      delete: function (e) {
        var r = t && t.next;
        var n = s(t, e);
        if (n && r && r === n) {
          t = undefined;
        }
        return !!n;
      },
      get: function (e) {
        return u(t, e);
      },
      has: function (e) {
        var r;
        return !!(r = t) && !!i(r, e);
      },
      set: function (e, r) {
        t ||= {
          next: undefined
        };
        a(t, e, r);
      }
    };
    return e;
  };
}