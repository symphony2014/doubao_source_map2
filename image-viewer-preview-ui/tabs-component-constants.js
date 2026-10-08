// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UX' to 'tabsClassNames'
// - Renamed export 'j2' to 'tabsConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23457.0bcdcee9.js
         * chunkId: 23457
         * moduleId: 413067
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let a = {
    TABS: `${semiIdentifier.semiIdentifier}-tabs`,
    TABS_BAR: `${semiIdentifier.semiIdentifier}-tabs-bar`,
    TABS_BAR_LINE: `${semiIdentifier.semiIdentifier}-tabs-bar-line`,
    TABS_BAR_CARD: `${semiIdentifier.semiIdentifier}-tabs-bar-card`,
    TABS_BAR_BUTTON: `${semiIdentifier.semiIdentifier}-tabs-bar-button`,
    TABS_BAR_EXTRA: `${semiIdentifier.semiIdentifier}-tabs-bar-extra`,
    TABS_TAB: `${semiIdentifier.semiIdentifier}-tabs-tab`,
    TABS_TAB_ACTIVE: `${semiIdentifier.semiIdentifier}-tabs-tab-active`,
    TABS_TAB_DISABLED: `${semiIdentifier.semiIdentifier}-tabs-tab-disabled`,
    TABS_CONTENT: `${semiIdentifier.semiIdentifier}-tabs-content`,
    TABS_CONTENT_ANIMATED: `${semiIdentifier.semiIdentifier}-tabs-content-animated`,
    TABS_CONTENT_NO_ANIMATED: `${semiIdentifier.semiIdentifier}-tabs-content-no-animated`,
    TABS_PANE: `${semiIdentifier.semiIdentifier}-tabs-pane`,
    TABS_PANE_INACTIVE: `${semiIdentifier.semiIdentifier}-tabs-pane-inactive`,
    TABS_PANE_ACTIVE: `${semiIdentifier.semiIdentifier}-tabs-pane-active`,
    TABS_PANE_MOTION_OVERLAY: `${semiIdentifier.semiIdentifier}-tabs-pane-motion-overlay`,
    TABS_PANE_ANIMATING: `${semiIdentifier.semiIdentifier}-tabs-pane-animating`,
    TABS_PANE_ANIMATE_LEFT_SHOW: `${semiIdentifier.semiIdentifier}-tabs-pane-animate-leftShow`,
    TABS_PANE_ANIMATE_RIGHT_SHOW: `${semiIdentifier.semiIdentifier}-tabs-pane-animate-rightShow`,
    TABS_PANE_ANIMATE_TOP_SHOW: `${semiIdentifier.semiIdentifier}-tabs-pane-animate-topShow`,
    TABS_PANE_ANIMATE_BOTTOM_SHOW: `${semiIdentifier.semiIdentifier}-tabs-pane-animate-bottomShow`
  };
  let s = {
    TYPE_MAP: ["line", "card", "button"],
    SIZE: ["small", "medium", "large"],
    POSITION_MAP: ["top", "left"]
  };
  require.d(exports, {
    tabsClassNames: function () {
      return a;
    },
    tabsConfig: function () {
      return s;
    }
  });
}