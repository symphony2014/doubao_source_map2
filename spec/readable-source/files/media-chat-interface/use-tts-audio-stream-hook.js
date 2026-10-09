// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'useTtsAudioStream'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 324045
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var ttsAudioStreamManager = require("tts-audio-stream-manager") /*id: 631641*/;
  let o = e => {
    let {
      onGetTtsContent: t,
      voiceStyleId: n,
      voicePitch: o,
      voiceSpeechRate: a,
      createSocket: s,
      getCommonParams: l,
      onTtsStart: c,
      onTtsEnd: d,
      getVoiceSpeakerInfo: u
    } = e;
    let [h, p] = reactCoreLibraryReexport.useState(false);
    let [m, f] = reactCoreLibraryReexport.useState({
      playing: false,
      loading: false
    });
    let g = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        g.current = new ttsAudioStreamManager.AudioStreamManager({
          createSocket: s,
          getCommonParams: l
        });
        g.current.onLoadStart(() => {
          f({
            loading: true,
            playing: false
          });
        });
        g.current.onPlayStart(() => {
          var e;
          f({
            loading: false,
            playing: true
          });
          if (c != null) {
            c({
              voiceStyleId: (e = g.current) === null || e === undefined ? undefined : e.getSpeakerId()
            });
          }
        });
        g.current.onPlayPause(() => {
          var e;
          var t;
          f({
            loading: false,
            playing: false
          });
          if (d != null) {
            d({
              currentTime: (e = g.current) === null || e === undefined ? undefined : e.getCurrentTime(),
              voiceStyleId: (t = g.current) === null || t === undefined ? undefined : t.getSpeakerId()
            });
          }
        });
        g.current.onPlayEnd(t => {
          var n;
          var i;
          f({
            loading: false,
            playing: false
          });
          p(false);
          if (d != null) {
            d({
              currentTime: (n = g.current) === null || n === undefined ? undefined : n.getCurrentTime(),
              reason: t,
              voiceStyleId: (i = g.current) === null || i === undefined ? undefined : i.getSpeakerId()
            });
          }
          e();
        });
      };
      e();
      return () => {
        var e;
        if ((e = g.current) !== null && e !== undefined) {
          e.destroy();
        }
      };
    }, []);
    return {
      audioStatus: m,
      togglePlay: () => {
        var e;
        var i;
        var r;
        var s;
        var l;
        var c;
        let d = t == null ? undefined : t();
        if (d) {
          if (!h) {
            if (n) {
              if ((i = g.current) !== null && i !== undefined) {
                i.setSpeaker(n);
              }
            }
            if ((r = g.current) !== null && r !== undefined) {
              r.setPitch(o || 0);
            }
            if ((s = g.current) !== null && s !== undefined) {
              s.setSpeechRate(a || 1);
            }
            if ((l = g.current) !== null && l !== undefined) {
              l.readText(d);
            }
            if ((c = g.current) !== null && c !== undefined) {
              c.finishSendingText();
            }
            p(true);
          }
          if ((e = g.current) !== null && e !== undefined) {
            e.togglePlay();
          }
        }
      },
      togglePlayByDynaicParams: async () => {
        try {
          var e;
          var n;
          var i;
          var r;
          var o;
          var a;
          if (!h) {
            f({
              loading: true,
              playing: false
            });
            let e = t == null ? undefined : t();
            let s = await (u == null ? undefined : u());
            if (!e || !(s == null ? undefined : s.style_id)) {
              f({
                loading: false,
                playing: false
              });
              return;
            }
            if ((n = g.current) !== null && n !== undefined) {
              n.setSpeaker(s.style_id);
            }
            if ((i = g.current) !== null && i !== undefined) {
              i.setPitch((s == null ? undefined : s.pitch) || 0);
            }
            if ((r = g.current) !== null && r !== undefined) {
              r.setSpeechRate((s == null ? undefined : s.speechRate) || 1);
            }
            if ((o = g.current) !== null && o !== undefined) {
              o.readText(e);
            }
            if ((a = g.current) !== null && a !== undefined) {
              a.finishSendingText();
            }
            p(true);
          }
          if ((e = g.current) !== null && e !== undefined) {
            e.togglePlay();
          }
        } catch (e) {
          f({
            loading: false,
            playing: false
          });
        }
      },
      pause: () => {
        var e;
        var t;
        if ((t = g.current) !== null && t !== undefined && (e = t.pause) !== null && e !== undefined) {
          e.call(t);
        }
      }
    };
  };
  require.d(exports, {
    useTtsAudioStream: function () {
      return o;
    }
  });
}