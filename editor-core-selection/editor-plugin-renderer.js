// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CL' to 'resolvePlugins'
// - Renamed export 'ru' to 'renderPlugins'
// - Renamed export 'wo' to 'wrapElements'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 69913
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var arrayEqualsUtil = require("array-equals-util") /*id: 503762*/;
  var reactinxElementFactory = require("reactinx-element-factory") /*id: 276161*/;
  var reactLifecycleDiffConstants = require("react-lifecycle-diff-constants") /*id: 971280*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  function c(e, t, n, s) {
    var a = this;
    var d = typescriptRuntimeHelpers_1.assign({}, t.attributes || {});
    var c = {
      op: t,
      lineState: e,
      attributes: d,
      insert: t.insert,
      domAttributes: {},
      children: n,
      class: s.class || "",
      lineClass: s.lineClass || "",
      style: s.style || {},
      key: "",
      index: s.index,
      zoneId: s.zoneId
    };
    h({
      attributes: d,
      zoneId: s.zoneId,
      editor: s.editor
    }).forEach(function (e) {
      var f;
      var g;
      try {
        if (t.insert === editorConstantsKeycodes.zeroWidthSpace && t.attributes?.enter) {
          if (e.renderLinefeed) {
            g = e.renderLinefeed(c);
            c = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, c), {
              children: g ?? n
            });
          }
        } else if (e.render) {
          g = e.render(c);
          if (reactCoreLibraryReexport.isValidElement(g) && reactinxElementFactory.isElementType(n) && (f = g.props?.className) !== null && f !== undefined && f.includes(editorConstantsKeycodes.zoneContainer)) {
            a.props.editor.error({
              message: "plugin render failed! Objects are not valid as a React child: object info " + JSON.stringify({
                type: typeof n.type == "symbol" ? Symbol.keyFor(n.type) : n.type,
                ref: n.ref,
                className: n.props.className
              }),
              level: errorHandlerUtil.ErrorLevel.ERROR
            });
          }
          c = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, c), {
            children: g ?? n
          });
        }
      } catch (t) {
        s.editor.error({
          message: e.name + " plugin render failed! Index: " + s.index,
          level: errorHandlerUtil.ErrorLevel.ERROR
        });
      }
    });
    return {
      view: c.children,
      renderContext: c
    };
  }
  function h(e) {
    var t = e.attributes;
    var n = e.editor;
    var i = e.zoneId;
    var o = new Set();
    Object.keys(t).forEach(function (e) {
      if (t[e] !== "") {
        if (e = n.pluginManager._matchPlugin({
          attributeKey: e,
          value: t[e],
          zoneId: i,
          attributes: t
        })) {
          o.add(e);
        }
      }
    });
    return editorPluginManager.sortByPriority(Array.from(o), "render");
  }
  function f(e, t, n) {
    var o;
    var r = [];
    var u = 0;
    var d = 0;
    for (; d < e.length; d++) {
      var c;
      var h = e[d];
      if ((g = n(h)).hasWrapper) {
        if ((c = r.length ? r[r.length - 1] : null) && arrayEqualsUtil.areArraysEqual(c.wrappers, g.elements) && u + 1 === h.index) {
          u = h.index;
          c.wrapperKey += "" + reactLifecycleDiffConstants.defaultSeparator + h.key;
          c.wrappedChildren.push(t[d]);
        } else {
          c = {
            wrappedChildren: [t[d]],
            wrappers: g.elements,
            wrapperKey: "" + reactLifecycleDiffConstants.markPrefix + h.key,
            startIndexInLines: d
          };
          u = h.index;
          r.push(c);
        }
      }
    }
    if (r.length) {
      for (var f = r.length; --f >= 0;) {
        var g;
        var v = (g = r[f]).wrapperKey;
        var p = g.startIndexInLines;
        var y = g.wrappedChildren;
        var m = function (e, t) {
          var n = e.wrappers;
          var o = e.wrapperKey;
          return n.reduce(function (e, t) {
            e = Array.isArray(e) ? e : [e];
            return reactinxElementFactory.cloneElement.apply(undefined, typescriptRuntimeHelpers_1.spread([t, {
              ref: function (e) {
                if (e) {
                  e.__key = o;
                }
              }
            }], e));
          }, t);
        }(g, y);
        if (m instanceof HTMLElement) {
          m.__key = v;
        } else if ((o = m == null ? undefined : m.props) !== null && o !== undefined && o.key) {
          m.props.key = v;
        }
        t.splice(p, y.length, m);
      }
    }
  }
  require.d(exports, {
    resolvePlugins: function () {
      return h;
    },
    renderPlugins: function () {
      return c;
    },
    wrapElements: function () {
      return f;
    }
  });
}