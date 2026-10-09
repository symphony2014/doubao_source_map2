// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'renderReactInX'
// - Renamed export 'a' to 'unmountComponents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 415017
         */
module.exports = function (module, exports, require) {
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  require("react-core-library-reexport") /*id: 634663*/;
  require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactInXComponent = require("react-in-x-component") /*id: 485336*/;
  var reactinxElementFactory = require("reactinx-element-factory") /*id: 276161*/;
  function s(t, e, n, s) {
    if (n) {
      var h = (s || {}).PluginContextProvider;
      if (h) {
        domEnvManager.setRootObj(h);
      }
      domEnvManager.setEnvMode("DOM");
      domEnvManager.taskQueue.length = 0;
      var p = reactinxElementFactory.createElement(t, e);
      if (h) {
        domEnvManager.setRootObj(null);
      }
      if (p) {
        if (Array.isArray(p)) {
          n.append.apply(n, tsRuntimeHelpers.spreadArgs(p));
        } else {
          n.append(p);
        }
        var v = [];
        for (; domEnvManager.taskQueue.length;) {
          var y = tsRuntimeHelpers.spreadArray(domEnvManager.taskQueue.shift() ?? [], 3);
          var g = y[0];
          var m = y[1];
          var E = y[2];
          if (!!E || !Array.isArray(m)) {
            if (reactInXComponent.isReactInXInstance(E)) {
              for (var b = 0; b < domEnvManager.taskQueue.length; ++b) {
                var x = tsRuntimeHelpers.spreadArray(domEnvManager.taskQueue[b], 3)[2];
                if ((x == null ? undefined : x.props)?.state?.reactInXInstanceList && Array.isArray(x.props.state.reactInXInstanceList) && x.renderContext) {
                  E.props.pluginRenderContext = x.renderContext;
                  break;
                }
              }
            }
            if (g != null) {
              g(E || m || null);
            }
            if (E != null) {
              E.componentDidMount();
            }
            if ((E == null ? undefined : E.props)?.state?.reactInXInstanceList && Array.isArray(E.props.state.reactInXInstanceList)) {
              var I = E.props.state.reactInXInstanceList;
              I.splice.apply(I, tsRuntimeHelpers.spreadArgs([0, I.length], v));
              v.length = 0;
            }
            if (reactInXComponent.isReactInXInstance(E)) {
              v.push(E);
            }
          }
        }
        return p;
      }
    }
  }
  function l(t) {
    (function t(e) {
      try {
        var n;
        var i;
        var o;
        var a;
        var s;
        var u = tsRuntimeHelpers.createIterator(e);
        var c = u.next();
        for (; !c.done; c = u.next()) {
          var f = c.value;
          if (f == null ? undefined : f.instance) {
            f.instance.componentWillUnmount();
            var d = (s = f.instance.props.editor) === null || s === undefined ? undefined : s.getFg("enableVirtualMemoryOptimize");
            var h = f.instance?.state;
            f.instance = null;
            if (d) {
              f.setNode(null);
            }
            var p = h || f;
            var v = p == null ? undefined : p.reactInXInstanceList;
            if (Array.isArray(v)) {
              try {
                o = undefined;
                var y = tsRuntimeHelpers.createIterator(v);
                var g = y.next();
                for (; !g.done; g = y.next()) {
                  g.value.unmount();
                }
              } catch (t) {
                o = {
                  error: t
                };
              } finally {
                try {
                  if (g && !g.done && (a = y.return)) {
                    a.call(y);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }
              if (d) {
                p.reactInXInstanceList = [];
              }
            }
            var m = p.getState();
            t(Array.isArray(m) ? m : [m]);
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (i = u.return)) {
            i.call(u);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    })([t]);
  }
  require.d(exports, {
    renderReactInX: function () {
      return s;
    },
    unmountComponents: function () {
      return l;
    }
  });
}