// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'PageUpgradeStatus'
// - Renamed export 'y' to 'SkillDisplayType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 697792
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o = {};
  (i = {})[i.NotUpgrade = 1] = "NotUpgrade";
  i[i.Init = 2] = "Init";
  i[i.Upgrading = 3] = "Upgrading";
  i[i.Upgraded = 4] = "Upgraded";
  i[i.UpgradeFailed = 5] = "UpgradeFailed";
  let a = i;
  let {
    CheckPageUpgradeStatus: s
  } = o;
  (r = {}).Sidebar = "sidebar";
  r.Popover = "popover";
  r.Avatar = "avatar";
  r.Hidden = "hidden";
  let l = r;
  require.d(exports, {
    PageUpgradeStatus: function () {
      return s;
    },
    SkillDisplayType: function () {
      return l;
    }
  });
  require.r(o);
  require.d(o, {
    CheckPageUpgradeStatus: function () {
      return a;
    }
  });
}