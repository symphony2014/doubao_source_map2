// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'musicGuidanceStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 240022
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let c = {
    loading: false
  };
  let u = {
    packInputConfig: {
      cursor: 0,
      limit: 100,
      inputConfig: null
    },
    editorValue: {
      data: []
    },
    mood: "",
    lyric: "",
    genre: "",
    focused: false
  };
  let s = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t) => ({
    ...u,
    resetStoreEditorValue: () => {
      e(immerCoreImplementation.produce(e => {
        e.editorValue = u.editorValue;
        e.focused = u.focused;
        e.genre = u.genre;
        e.lyric = u.lyric;
        e.mood = u.mood;
      }));
    },
    initPackInputConfig() {
      let {
        packInputConfig: e,
        loadMorePackInputConfig: r
      } = t();
      if (!e.inputConfig) {
        r();
      }
    },
    loadMorePackInputConfig: () => {
      if (c.loading) {
        return;
      }
      c.loading = true;
      let {
        packInputConfig: r
      } = t();
      apiServicesCollection.SamanthaApiService.SkillPack({
        skill_type: chatAppEnums.SkillType.MusicAssistant,
        condition: {
          cursor: String(r.cursor),
          limit: r.limit
        }
      }).then(t => {
        var l;
        if (t.data?.music && ((l = t.data) === null || l === undefined ? undefined : l.music?.meta)) {
          e(immerCoreImplementation.produce(e => {
            var n;
            var l;
            var o;
            var a;
            var u;
            var s;
            e.packInputConfig.inputConfig = {
              input_options: (((l = t.data) === null || l === undefined ? undefined : (n = l.music) === null || n === undefined ? undefined : n.meta?.option_list) || []).reduce((e, t) => {
                let {
                  value: r,
                  ...n
                } = t;
                if (r) {
                  e[r] = n;
                }
                return e;
              }, {}),
              template: {
                music_list: ((a = t.data) === null || a === undefined ? undefined : (o = a.music) === null || o === undefined ? undefined : o.template?.music_list) || []
              },
              value: ((s = t.data) === null || s === undefined ? undefined : (u = s.music) === null || u === undefined ? undefined : u.meta?.prompt) || ""
            };
          }));
        }
      }).finally(() => {
        c.loading = false;
      });
    },
    updateEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.editorValue = t;
      }));
    },
    updateMusicMood: t => {
      e(immerCoreImplementation.produce(e => {
        e.mood = t;
      }));
    },
    updateMusicGenre: t => {
      e(immerCoreImplementation.produce(e => {
        e.genre = t;
      }));
    },
    updateMusicLyric: t => {
      e(immerCoreImplementation.produce(e => {
        e.lyric = t;
      }));
    },
    updateFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.focused = t;
      }));
    }
  })));
  require.d(exports, {
    musicGuidanceStore: function () {
      return s;
    }
  });
}