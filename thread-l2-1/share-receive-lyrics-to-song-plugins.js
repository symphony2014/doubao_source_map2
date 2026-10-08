// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'lyricToSongMusicSymbol'
// - Resolved require(538837) to 'lyric-to-song-music-symbol'
// - Renamed variable 'l' to 'lyricToSongSymbol'
// - Resolved require(675833) to 'lyric-to-song-symbol'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'o' to 'chatContextProviders'
// - Resolved require(793426) to 'chat-context-providers'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'bigMusicVideoUrlFetcher'
// - Resolved require(738598) to 'big-music-video-url-fetcher'
// - Renamed variable 'c' to 'musicGenerationCardListContainer'
// - Resolved require(807914) to 'music-generation-card-list-container'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'lazyMarkdownMessageRendererLoader'
// - Resolved require(472952) to 'lazy-markdown-message-renderer-loader'
// - Updated imported property '$A' to 'useThemeContext' (module 793426)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'I' to 'MusicGenerationCardList' (module 807914)
// - Updated imported property 'V' to 'fetchBigMusicVideoUrl' (module 738598)
// - Updated imported property 'B' to 'lyricToSongSymbol' (module 675833)
// - Updated imported property 'D' to 'lyricToSongMusic' (module 538837)
// - Updated imported property 'P' to 'lazyMarkdownMessageRenderer' (module 472952)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 366431
         */
module.exports = function (module, exports, require) {
  var lyricToSongMusicSymbol = require("lyric-to-song-music-symbol") /*id: 538837*/;
  var lyricToSongSymbol = require("lyric-to-song-symbol") /*id: 675833*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var bigMusicVideoUrlFetcher = require("big-music-video-url-fetcher") /*id: 738598*/;
  var musicGenerationCardListContainer = require("music-generation-card-list-container") /*id: 807914*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      message: n,
      inView: i
    } = e;
    let {
      user: l
    } = chatContextProviders.useThemeContext();
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let p = (l == null ? undefined : l.nick_name) ?? "";
    let m = chatMessageStatusCheck.isMessageFinished(n);
    let v = n == null ? undefined : n.content_obj;
    let f = `${p} x ${u("brandName_doubao")} AI`;
    return reactJsxRuntimeCoreReexport.jsx(musicGenerationCardListContainer.MusicGenerationCardList, {
      musicContentData: v,
      messageId: n == null ? undefined : n.message_id,
      itemId: n == null ? undefined : n.message_id,
      autoPlay: true,
      subTitle: f,
      inView: i,
      isFinished: m,
      fetchMusicAudioUrl: bigMusicVideoUrlFetcher.fetchBigMusicVideoUrl
    });
  };
  var lazyMarkdownMessageRendererLoader = require("lazy-markdown-message-renderer-loader") /*id: 472952*/;
  function m(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class v {
    constructor() {
      m(this, "Content", u);
      m(this, "pluginIdentifier", lyricToSongSymbol.lyricToSongSymbol);
    }
  }
  class f {
    constructor() {
      m(this, "pluginIdentifier", lyricToSongMusicSymbol.lyricToSongMusic);
      m(this, "Content", lazyMarkdownMessageRendererLoader.lazyMarkdownMessageRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveLyricsToSongMusicPlugin: function () {
      return v;
    },
    ShareReceiveLyricsToSongLyricPlugin: function () {
      return f;
    }
  });
}