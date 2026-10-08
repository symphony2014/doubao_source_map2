// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F8' to 'buildModeType'
// - Renamed export 'K1' to 'contentTypeAuth'
// - Renamed export 'U3' to 'resourceType'
// - Renamed export 'W7' to 'widgetType'
// - Renamed export 'bQ' to 'mediaType'
// - Renamed export 'eT' to 'cardFeature'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 153202
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o = {
    CARD_BUILDER: 3
  };
  var a = {
    Default: "0",
    ChoiceDirect: "1",
    ChoiceGenOutline: "2"
  };
  var l = {
    Unknown: 0,
    File: 1,
    Image: 2,
    Directory: 3,
    Link: 4,
    LarkDoc: 5
  };
  var s = {
    Unknown: 0,
    File: 1,
    OCRImage: 2,
    Audio: 3,
    Video: 4
  };
  (i = {}).Unknown = "unknown";
  i.Music = "com.flow.music.auth";
  i.Podcast = "com.flow.podcast";
  i.Locallife = "com.flow.locallife";
  i.News = "com.flow.news";
  let u = i;
  (r = {}).AIPodcast = "widget__ai_episode";
  let c = r;
  require.d(exports, {
    buildModeType: function () {
      return a;
    },
    contentTypeAuth: function () {
      return u;
    },
    resourceType: function () {
      return l;
    },
    widgetType: function () {
      return c;
    },
    mediaType: function () {
      return s;
    },
    cardFeature: function () {
      return o;
    }
  });
}