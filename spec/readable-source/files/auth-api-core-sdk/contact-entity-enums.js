// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BN' to 'ContactTypes'
// - Renamed export 'bg' to 'ViewModes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 788152
         */
module.exports = function (module, exports, require) {
  let n = {
    STANDARD: 0,
    UNDEFINED: 1,
    SIMPLE: 2
  };
  let i = {
    Unknown: 0,
    Organization: 1,
    ExternalContacts: 2,
    NewContacts: 3,
    ChatGroups: 4,
    HelpDesks: 5,
    EduContacts: 6,
    RelatedOrganizations: 7,
    SpecialFocus: 8,
    USER_GROUP: 9,
    MyAI: 10,
    Email: 11,
    CONTACT_USER_GROUP: 12
  };
  require.d(exports, {
    ContactTypes: function () {
      return i;
    },
    ViewModes: function () {
      return n;
    }
  });
}