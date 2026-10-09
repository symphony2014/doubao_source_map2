// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'getToolboxGroups'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 942452
         */
module.exports = function (module, exports, require) {
  var docxToolboxAsyncRegister = require("docx-toolbox-async-register") /*id: 244888*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  function i(e) {
    let {
      context: r,
      options: o,
      panelType: i,
      sort: c,
      moreMenuVisible: s,
      shareTextAndMoreVisible: d,
      useCalloutAndQuoteContainerGroupList: u
    } = e;
    let p = [];
    let h = r.blockManager.editorAPI.getService(moduleSettingToken.moduleSettingToken);
    let m = h == null ? undefined : h.get(docxToolboxConstants_3.toolboxCommands.GROUP_ITEMS);
    docxToolboxAsyncRegister.checkToolboxReady(r.blockManager);
    p.push(...((m == null ? undefined : m.filter(e => {
      var l;
      var n;
      return (e == null ? undefined : (l = e.panelType) === null || l === undefined ? undefined : l.includes(i)) && !(e == null ? undefined : (n = e.shouldBreak) === null || n === undefined ? undefined : n.call(e, {
        context: r,
        options: o,
        moreMenuVisible: s,
        shareTextAndMoreVisible: d,
        useCalloutAndQuoteContainerGroupList: u
      }));
    })) || []).sort(c).reduce((e, l) => {
      let n = l.group({
        context: r,
        options: {
          ...o
        },
        currentGroupList: e
      });
      if (n) {
        e.push(n);
      }
      return e;
    }, []));
    return p;
  }
  require.d(exports, {
    getToolboxGroups: function () {
      return i;
    }
  });
}