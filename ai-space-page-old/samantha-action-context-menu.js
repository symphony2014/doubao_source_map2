// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'SamanthaActionContextMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 468760
         */
module.exports = function (module, exports, require) {
  var samanthaContextMenu = require("samantha-context-menu") /*id: 245967*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function r(e) {
    let {
      dataTestId: t,
      actions: i,
      setVisible: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(samanthaContextMenu.SamanthaContextMenu, {
      className: "!min-w-140",
      dataTestId: t,
      menus: i.reduce((e, t, n) => {
        let {
          key: a,
          groupKey: o,
          icon: l,
          title: s,
          onClick: c,
          disabled: d,
          disabledTip: u,
          preventDefault: p,
          render: _
        } = t;
        let m = i[n - 1];
        if ((m == null ? undefined : m.groupKey) && m.groupKey !== o) {
          e.push({
            type: "divider"
          });
        }
        e.push({
          key: a,
          icon: l,
          onClick: c,
          disabled: d,
          disabledTip: u,
          preventDefault: p,
          render: () => _ ? _({
            position: "moreActionBtn",
            onClickSubMenu: () => {
              if (r != null) {
                r(false);
              }
            }
          }) : s
        });
        return e;
      }, [])
    });
  }
  require.d(exports, {
    SamanthaActionContextMenu: function () {
      return r;
    }
  });
}