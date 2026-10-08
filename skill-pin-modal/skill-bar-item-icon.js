// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'SkillBarItemIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 276743
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var gridLayoutIcon = require("grid-layout-icon") /*id: 686240*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      skill_type: t,
      colorful: n = false,
      ...a
    } = e;
    let [c, d] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      try {
        e = chatStoreManager.getStore("skillStore").subscribe(e => e.skillMap, e => {
          d(e);
        }, {
          fireImmediately: true
        });
      } catch {}
      return () => {
        if (e != null) {
          e();
        }
      };
    }, []);
    let u = t ? c[t] : undefined;
    let {
      plugin: h
    } = chatPluginIocManager.skillBarItemHook(t);
    let p = !!n && (u == null ? undefined : u.ColorfulIcon) || !!n && (h == null ? undefined : h.ColorfulIcon) || (u == null ? undefined : u.Icon) || (h == null ? undefined : h.icon) || gridLayoutIcon.GridLayoutIcon;
    return reactJsxRuntimeCoreReexport.jsx(p, {
      ...a
    });
  };
  require.d(exports, {
    SkillBarItemIcon: function () {
      return a;
    }
  });
}