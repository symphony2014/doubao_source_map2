// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CB' to 'EntityTypes'
// - Renamed export 'DA' to 'SearchScopeTypes'
// - Renamed export 'f1' to 'SearchSceneTypes'
// - Renamed export 'oN' to 'PickerItemTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 299578
         */
module.exports = function (module, exports, require) {
  let r = {
    UNKNOWN: 0,
    CHATTER: 1,
    CHAT: 2,
    MESSAGE: 3,
    DOC_FEED: 4,
    EMAIL: 5,
    DOC: 6,
    EMAIL_MESSAGE: 7,
    THREAD: 8,
    BOX: 9,
    ONCALL: 10,
    CRYPTO_P2P_CHAT: 11,
    OPEN_APP: 12,
    LINK: 13,
    EXTERNAL: 14,
    WIKI: 15,
    MAIL_CONTACT: 16,
    DEPARTMENT: 17,
    QA: 18,
    PANO_TAG: 19,
    PANO_VIEW: 20,
    SLASH_COMMAND: 21,
    SECTION: 22,
    CHAMELEON: 23
  };
  let o = {
    UNKNOWN: 0,
    USER: 1,
    BOT: 2,
    GROUP_CHAT: 3,
    CRYPTO_P2P_CHAT: 4,
    MESSAGE: 5,
    DOC: 6,
    WIKI: 7,
    APP: 8,
    ONCALL: 9,
    THREAD: 10,
    QA_CARD: 11,
    URL: 12,
    DEPARTMENT: 13,
    PANO: 14,
    SLASH_COMMAND: 15,
    SECTION: 16,
    RESOURCE: 18,
    CUSTOMIZATION: 19,
    FACILITY: 20,
    MAIL_CONTACT: 21,
    CHAMELEON: 22,
    BANNER: 23,
    WIKI_SPACE: 25,
    SHIELD_P2P_CHAT: 27,
    USER_GROUP: 28,
    USER_GROUP_ASSIGN: 29,
    MESSAGE_FILE: 30,
    MY_AI: 31,
    CALENDAR_EVENT: 32,
    EMAIL: 33,
    MAIL_USER: 34,
    NEW_USER_GROUP: 35,
    MAX: 100
  };
  let i = {
    UNKNOWN: 0,
    SPOTLIGHT_ONLY: 1,
    SERVER_ONLY: 2,
    COMBINE_SERVER_AND_HOLD: 3,
    HOLD_ONLY: 4
  };
  let a = {
    DEFAULT_SEARCH_SCENE: 0,
    NEW_TAB: 1,
    RECOMMEND: 2,
    LOCAL_COMMON: 3,
    NAVIGATION_SEARCH: 4,
    PINYIN_USER_IN_MESSAGE: 5,
    UD: 6,
    FILTER: 7
  };
  require.d(exports, {
    EntityTypes: function () {
      return o;
    },
    SearchScopeTypes: function () {
      return i;
    },
    SearchSceneTypes: function () {
      return a;
    },
    PickerItemTypes: function () {
      return r;
    }
  });
}