// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cj' to 'botStore'
// - Renamed export 'GG' to 'guestBotStore'
// - Renamed export 'Wp' to 'selectBotInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 359169
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let f = {
    botMap: {},
    botIdToLocalConversationMap: {},
    botIdToRequestIdMap: {}
  };
  let p = (e, t) => ({
    ...f,
    updateBot: t => {
      let {
        bot_id: n,
        id: i
      } = t;
      let r = n || i;
      if (!r) {
        loggerServiceCore.defaultLogger.persist.warning({
          message: "invalid botInfo to update",
          meta: {
            botInfo: t
          }
        });
        return;
      }
      e(immerCoreImplementation.produce(e => {
        e.botMap[r] = {
          ...(e.botMap[r] || {}),
          ...t
        };
      }));
    },
    overrideBots: t => {
      if (t.length) {
        e(immerCoreImplementation.produce(e => {
          t.forEach(t => {
            let {
              bot_id: n,
              id: i
            } = t;
            let r = n || i;
            if (r) {
              e.botMap[r] = {
                ...(e.botMap[r] || {}),
                ...t
              };
            }
          });
        }));
      }
    },
    setLocalConversationIdForBot: t => {
      let {
        botId: n,
        localConversationId: i
      } = t;
      e(immerCoreImplementation.produce(e => {
        e.botIdToLocalConversationMap[n] = i;
      }));
    },
    clearConversationIdForBot: t => {
      let {
        botId: n
      } = t;
      e(immerCoreImplementation.produce(e => {
        if (!n) {
          return;
        }
        let t = e.botMap[n];
        if (t) {
          t.conversation_id = "";
          t.has_conversation = false;
        }
      }));
    },
    fetchToUpdateBot: async t => {
      let {
        botId: i
      } = t;
      let {
        data: r
      } = await apiServicesCollection.AliceBotApiService.RecommendBots({
        bot_ids: [i]
      });
      let o = (r == null ? undefined : r.bot_list?.length) ? r == null ? undefined : r.bot_list : [];
      e(immerCoreImplementation.produce(e => {
        if (r == null ? undefined : r.bot_list?.length) {
          e.botMap[i] = o == null ? undefined : o[0];
        }
      }));
      if (o == null) {
        return undefined;
      } else {
        return o[0];
      }
    },
    getBot: e => t().botMap[e],
    getBotIdFromLocalConversation: e => {
      let {
        botIdToLocalConversationMap: n
      } = t();
      for (let t in n) {
        if (n[t] === e) {
          return t;
        }
      }
    },
    getBotIdToLocalConversationMap: () => t().botIdToLocalConversationMap,
    getBotIdToRequestIdMap: () => t().botIdToRequestIdMap
  });
  let m = [];
  let v = (m = [{
    apiTagID: 102,
    newTagID: 252
  }, {
    apiTagID: 104,
    newTagID: 253
  }, {
    apiTagID: 103,
    newTagID: 254
  }, {
    apiTagID: 228,
    newTagID: 228
  }, {
    apiTagID: 105,
    newTagID: 255
  }])[0].newTagID;
  let g = {
    discoveryBotCachedList: {},
    discoveryBotLinks: [],
    discoveryBotListStatus: {
      loading: false,
      failed: false,
      count: 0,
      hasMore: true,
      tagList: [],
      selectedTagId: -1,
      error: undefined
    },
    choicenessBotLinks: [],
    choicenessBotListStatus: {
      loading: false,
      failed: false,
      count: 0,
      hasMore: true
    },
    profileBotLinks: [],
    profileBotListStatus: {
      loading: false,
      failed: false,
      count: 0,
      hasMore: true,
      last_index: "0"
    },
    profileBotCount: 0
  };
  let _ = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    let [i, r] = t;
    return {
      ...g,
      ...p(...t),
      initRecommendBotList: e => {
        let {
          size: t,
          recommendType: n,
          tagId: i,
          isSidebarRecommend: o
        } = e;
        r().loadRecommendBotList({
          index: 1,
          size: t,
          recommendType: n,
          tagId: i,
          isSidebarRecommend: o
        });
      },
      loadRecommendBotList: async e => {
        let {
          index: t,
          size: n,
          recommendType: l,
          tagId: f,
          isSidebarRecommend: p = false
        } = e;
        let g = p ? 1 : m.map(e => e.newTagID).includes(f) ? f : v;
        let _ = l === chatEnumConstants.SceneType.Discovery;
        let y = _ ? "discoveryBotListStatus" : "choicenessBotListStatus";
        let w = _ ? "discoveryBotLinks" : "choicenessBotLinks";
        let S = t === 1;
        let x = r()[w];
        if (S && _) {
          i(immerCoreImplementation.produce(e => {
            let n = e.discoveryBotCachedList[g ?? ""] ?? [];
            e.discoveryBotLinks = n;
            e.discoveryBotListStatus.count = n.length;
          }));
        }
        i(immerCoreImplementation.produce(e => {
          let t = e[y];
          if (_) {
            Object.assign(t, {
              loading: true,
              selectedTagId: g || e.discoveryBotListStatus.selectedTagId
            });
          } else {
            Object.assign(t, {
              loading: true
            });
          }
        }));
        try {
          let e = {
            recommend_type: l,
            page_index: t,
            page_size: n
          };
          if (g) {
            e.tag_id = g;
          }
          let {
            data: d
          } = await apiServicesCollection.AliceBotApiService.RecommendBots(e);
          let {
            bot_list: h = [],
            has_more: f = false,
            tag_list: p = [],
            selected_tag_id: v,
            trace_map: C
          } = d || {};
          let k = r().discoveryBotListStatus.selectedTagId;
          if (v && k !== -1 && v !== k) {
            return;
          }
          let {
            request_id: T
          } = C || {};
          let E = collectionMapMatcher.mapWithMatcher(genericFilterUtil.genericFilter(h || [], "bot_id"), e => ({
            botID: e.bot_id || ""
          }));
          let I = b(S ? [] : x, E);
          i(immerCoreImplementation.produce(e => {
            if (_) {
              let n = e.discoveryBotListStatus.tagList ?? [];
              let i = p.reduce((e, t) => {
                if (t.tag_id) {
                  e[t.tag_id] = t;
                }
                return e;
              }, {});
              let r = m.reduce((e, t) => {
                let n = i[t.apiTagID];
                if (n) {
                  e.push({
                    ...n,
                    tag_id: t.newTagID
                  });
                }
                return e;
              }, []);
              let o = r.every((e, t) => {
                return e.tag_id === n[t]?.tag_id;
              });
              let a = e.discoveryBotListStatus.selectedTagId;
              let s = {
                loading: false,
                failed: false,
                count: I.length,
                hasMore: f,
                tagList: o ? n : r,
                selectedTagId: a === -1 ? v : a
              };
              if (h != null) {
                h.map(t => {
                  if (t.bot_id) {
                    e.botIdToRequestIdMap[t.bot_id] = T;
                  }
                });
              }
              Object.assign(e[y], s);
            } else {
              Object.assign(e[y], {
                loading: false,
                failed: false,
                count: I.length,
                hasMore: f
              });
            }
            e[w] = I;
            if (w === "discoveryBotLinks" && g) {
              e.discoveryBotCachedList[g] = I;
            }
            e.botMap = genericReduceUtil.genericReduce(h || [], (e, t) => {
              if (t.bot_id) {
                e[t.bot_id] = t;
              }
              return e;
            }, {
              ...e.botMap
            });
          }));
        } catch (e) {
          i(immerCoreImplementation.produce(t => {
            Object.assign(t[y], {
              failed: true,
              loading: false,
              error: e
            });
          }));
          if (e instanceof Error) {
            loggerServiceCore.defaultLogger.persist.error({
              message: `loadBotList failed size:${n} index:${t}, type: ${l}`,
              error: e
            });
          }
        }
      },
      initProfileBotList(e) {
        let {
          size: t,
          visit_id: n
        } = e;
        r().loadProfileBotList({
          index: "0",
          size: t,
          visit_id: n
        });
      },
      async loadProfileBotList(e) {
        let {
          index: t,
          size: n,
          visit_id: l
        } = e;
        let {
          profileBotLinks: d
        } = r();
        let f = t === "0";
        i(immerCoreImplementation.produce(e => {
          e.profileBotListStatus.loading = true;
        }));
        try {
          let {
            data: e
          } = await apiServicesCollection.ProfileApiService.ProfileBotList({
            index: t,
            limit: n,
            visit_id: l
          });
          let {
            profile_bot_list: r = [],
            has_more: h = false,
            last_index: p,
            total: m
          } = e || {};
          let v = (r || []).map(e => {
            return {
              ...e,
              icon_url: e.icon_image?.tiny_url
            };
          });
          let g = collectionMapMatcher.mapWithMatcher(genericFilterUtil.genericFilter(v || [], "bot_id"), e => ({
            botID: e.bot_id || ""
          }));
          let _ = b(f ? [] : d, g);
          i(immerCoreImplementation.produce(e => {
            Object.assign(e.profileBotListStatus, {
              loading: false,
              failed: false,
              count: _.length,
              hasMore: h,
              last_index: p
            });
            e.profileBotLinks = _;
            e.profileBotCount = Number(m);
            e.botMap = genericReduceUtil.genericReduce(v || [], (e, t) => {
              if (t.bot_id) {
                e[t.bot_id] = t;
              }
              return e;
            }, {
              ...e.botMap
            });
          }));
        } catch (e) {
          i(immerCoreImplementation.produce(e => {
            Object.assign(e.profileBotListStatus, {
              failed: true,
              loading: false
            });
          }));
          if (e instanceof Error) {
            loggerServiceCore.defaultLogger.persist.error({
              message: `loadBotList failed size:${n} index:${t}, type: profileBotLinks`,
              error: e
            });
          }
          throw e;
        }
      },
      resetProfileBotListStatus() {
        i(immerCoreImplementation.produce(e => {
          Object.assign(e.profileBotListStatus, g.profileBotListStatus);
        }));
      },
      deleteBotInChoicenessBotLinks(e) {
        i(immerCoreImplementation.produce(t => {
          t.choicenessBotLinks = t.choicenessBotLinks.filter(t => t.botID !== e);
        }));
      },
      resetDiscoverBotListSelectedTagId() {
        i(immerCoreImplementation.produce(e => {
          e.discoveryBotListStatus.selectedTagId = -1;
        }));
      }
    };
  };
  let b = (e, t) => arrayUniqByMatcher.uniqByMatcher(e.concat(t), "botID");
  let y = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("bot-store"),
    createSlice: _
  });
  let w = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("guest-bot-store"),
    createSlice: _
  });
  let S = e => {
    let t = y(t => e ? t.botMap[e] : undefined, deepEqualityUtil_1.isDeepEqual);
    let n = w(t => e ? t.botMap[e] : undefined, deepEqualityUtil_1.isDeepEqual);
    return t || n;
  };
  require.d(exports, {
    botStore: function () {
      return y;
    },
    guestBotStore: function () {
      return w;
    },
    selectBotInfo: function () {
      return S;
    }
  });
}