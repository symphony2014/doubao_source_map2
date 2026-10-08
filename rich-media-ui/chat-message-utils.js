// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bg' to 'getPlatformType'
// - Renamed export 'eA' to 'getCornerClasses'
// - Renamed export 'jg' to 'extractPrefix'
// - Renamed export 'wB' to 'isSpecialMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 898330
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let r = e => e.type === chatMessageTypes.MetaType.EmbeddedMultiMedia || e.type === chatMessageTypes.MetaType.MetaPlaceHolder || e.type === chatMessageTypes.MetaType.MetaTypeAlaCard;
  let l = e => {
    let i = e == null ? undefined : e.split("-")[0];
    return i ?? "";
  };
  let a = e => e ? e.startsWith("w") ? "web" : e.startsWith("c") ? "web_collection" : e.startsWith("d") ? "desktop" : "mobile" : undefined;
  let o = (e, i, t) => {
    let n = "";
    if (t && i > 3) {
      switch (i) {
        case 4:
          if (e === 0) {
            n = n.concat("!rounded-tl-s-radius-xxss ");
          }
          if (e === 1) {
            n = n.concat("!rounded-tr-s-radius-xxss ");
          }
          if (e === 2) {
            n = n.concat("!rounded-bl-s-radius-xxss ");
          }
          if (e === 3) {
            n = n.concat("!rounded-br-s-radius-xxss ");
          }
          break;
        case 5:
          if (e === 0) {
            n = n.concat("!rounded-tl-s-radius-xxss ");
          }
          if (e === 2) {
            n = n.concat("!rounded-r-s-radius-xxss ");
          }
          if (e === 3) {
            n = n.concat("!rounded-bl-s-radius-xxss ");
          }
          if (e === 4) {
            n = n.concat("!rounded-br-s-radius-xxss ");
          }
          break;
        case 6:
          if (e === 0) {
            n = n.concat("!rounded-tl-s-radius-xxss ");
          }
          if (e === 2) {
            n = n.concat("!rounded-tr-s-radius-xxss ");
          }
          if (e === 3) {
            n = n.concat("!rounded-bl-s-radius-xxss ");
          }
          if (e === 5) {
            n = n.concat("!rounded-br-s-radius-xxss ");
          }
      }
    } else {
      if (e === 0) {
        n = n.concat("!rounded-l-s-radius-xxss ");
      }
      if (e === i - 1) {
        n = n.concat("!rounded-r-s-radius-xxss ");
      }
    }
    return n;
  };
  require.d(exports, {
    getPlatformType: function () {
      return a;
    },
    getCornerClasses: function () {
      return o;
    },
    extractPrefix: function () {
      return l;
    },
    isSpecialMessage: function () {
      return r;
    }
  });
}