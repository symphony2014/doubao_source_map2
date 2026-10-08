// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'o' to 'editorContainerUtils'
// - Resolved require(874690) to 'editor-container-utils'
// - Renamed variable 'a' to 'iframeRegionConfigValidator'
// - Resolved require(473081) to 'iframe-region-config-validator'
// - Renamed variable 's' to 'iframeLayoutConfig'
// - Resolved require(587832) to 'iframe-layout-config'
// - Renamed variable 'l' to 'iframeLayoutConfigProvider'
// - Resolved require(464732) to 'iframe-layout-config-provider'
// - Renamed variable 'c' to 'iframeLayoutConstants'
// - Resolved require(147199) to 'iframe-layout-constants'
// - Updated imported property 'Z' to 'iframeConfigMap' (module 464732)
// - Updated imported property 'mV' to 'iframeWidth' (module 587832)
// - Updated imported property 'G4' to 'iframeHeight' (module 587832)
// - Updated imported property 'Br' to 'getEditorWidth' (module 874690)
// - Updated imported property 'Nq' to 'IframeScaleModes' (module 147199)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 864303
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var editorContainerUtils = require("editor-container-utils") /*id: 874690*/;
  var iframeRegionConfigValidator = require("iframe-region-config-validator") /*id: 473081*/;
  var iframeLayoutConfig = require("iframe-layout-config") /*id: 587832*/;
  var iframeLayoutConfigProvider = require("iframe-layout-config-provider") /*id: 464732*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  let u = (e, n, i, o) => {
    let {
      parseQuery: a,
      formatQuery: s
    } = platformDocUtils.o0s;
    let l = a(e);
    if (!o || /^http(s)?:/.test(o) || Object.keys(l).length < 1) {
      return i(n.exec(e));
    }
    try {
      let r = new URL(e);
      r.search = s({});
      let o = i(n.exec(r.toString()));
      let c = new URL(o);
      c.search = s({
        ...l,
        ...a(o)
      });
      return c.toString();
    } catch {
      return i(n.exec(e));
    }
  };
  function d(e, n = {}) {
    let i = n.type || iframeRegionConfigValidator.getIframeConfigType(e);
    if (!i) {
      return;
    }
    let r = iframeLayoutConfigProvider.iframeConfigMap[i];
    return function (i, r) {
      let {
        url: a
      } = n;
      if (a === undefined) {
        a = e;
        let {
          templateFunc: n,
          patterns: i,
          template: o
        } = r;
        let s = i.find(n => n.test(e));
        if (s) {
          a = u(e, s, n, o);
        }
      }
      let {
        height: d,
        width: h
      } = function (e) {
        let {
          type: n,
          autosize: i = true
        } = e;
        let {
          defaultHeight: r,
          defaultWidth: a
        } = iframeLayoutConfigProvider.iframeConfigMap[n];
        let c = (e, n) => ({
          width: Math.round(e),
          height: Math.round(n)
        });
        if (r || a) {
          return c(a || iframeLayoutConfig.iframeWidth, r || iframeLayoutConfig.iframeHeight);
        }
        if (i) {
          let e = editorContainerUtils.getEditorWidth();
          return c(e, e * 9 / 16);
        }
        return c(iframeLayoutConfig.iframeWidth, iframeLayoutConfig.iframeHeight);
      }({
        type: i
      });
      return {
        iframe: {
          component: {
            original_text: encodeURIComponent(e),
            url: a,
            type: i
          },
          resize_type: r.resizeType || iframeLayoutConstants.IframeScaleModes.Fixed,
          width: h,
          height: d,
          original_height: d,
          original_width: h,
          is_modified: false
        }
      };
    }(i, r);
  }
  require.r(exports);
  require.d(exports, {
    getIframeSnapshotWithUrl: function () {
      return d;
    }
  });
}