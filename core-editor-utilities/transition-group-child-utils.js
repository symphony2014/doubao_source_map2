// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kg' to 'cloneTransitionItems'
// - Renamed export 'Rp' to 'mergeTransitionMaps'
// - Renamed export 'n' to 'indexChildrenByKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 661201
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e, t) {
    var n = Object.create(null);
    if (e) {
      reactCoreLibraryReexport.Children.map(e, function (e) {
        return e;
      }).forEach(function (e) {
        n[e.key] = t && reactCoreLibraryReexport.isValidElement(e) ? t(e) : e;
      });
    }
    return n;
  }
  function o(e, t, n) {
    return n[t] ?? e.props[t];
  }
  function s(e, t) {
    return i(e.children, function (n) {
      return reactCoreLibraryReexport.cloneElement(n, {
        onExited: t.bind(null, n),
        in: true,
        appear: o(n, "appear", e),
        enter: o(n, "enter", e),
        exit: o(n, "exit", e)
      });
    });
  }
  function c(e, t, n) {
    var s = i(e.children);
    var c = function (e, t) {
      function n(n) {
        if (n in t) {
          return t[n];
        } else {
          return e[n];
        }
      }
      e = e || {};
      t = t || {};
      var r;
      var i = Object.create(null);
      var o = [];
      for (var s in e) {
        if (s in t) {
          if (o.length) {
            i[s] = o;
            o = [];
          }
        } else {
          o.push(s);
        }
      }
      var c = {};
      for (var u in t) {
        if (i[u]) {
          for (r = 0; r < i[u].length; r++) {
            var a = i[u][r];
            c[i[u][r]] = n(a);
          }
        }
        c[u] = n(u);
      }
      for (r = 0; r < o.length; r++) {
        c[o[r]] = n(o[r]);
      }
      return c;
    }(t, s);
    Object.keys(c).forEach(function (i) {
      var u = c[i];
      if (reactCoreLibraryReexport.isValidElement(u)) {
        var a = i in t;
        var f = i in s;
        var l = t[i];
        var d = reactCoreLibraryReexport.isValidElement(l) && !l.props.in;
        if (f && (!a || d)) {
          c[i] = reactCoreLibraryReexport.cloneElement(u, {
            onExited: n.bind(null, u),
            in: true,
            exit: o(u, "exit", e),
            enter: o(u, "enter", e)
          });
        } else if (f || !a || d) {
          if (f && a && reactCoreLibraryReexport.isValidElement(l)) {
            c[i] = reactCoreLibraryReexport.cloneElement(u, {
              onExited: n.bind(null, u),
              in: l.props.in,
              exit: o(u, "exit", e),
              enter: o(u, "enter", e)
            });
          }
        } else {
          c[i] = reactCoreLibraryReexport.cloneElement(u, {
            in: false
          });
        }
      }
    });
    return c;
  }
  require.d(exports, {
    cloneTransitionItems: function () {
      return s;
    },
    mergeTransitionMaps: function () {
      return c;
    },
    indexChildrenByKey: function () {
      return i;
    }
  });
}