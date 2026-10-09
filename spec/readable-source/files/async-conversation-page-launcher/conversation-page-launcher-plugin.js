// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'o' to 'conversationPageConstants'
// - Resolved require(130052) to 'conversation-page-constants'
// - Renamed variable 'r' to 'chatRouteSkillMapper'
// - Resolved require(467072) to 'chat-route-skill-mapper'
// - Renamed variable 'a' to 'chatLayoutRouteMatchers'
// - Resolved require(391713) to 'chat-layout-route-matchers'
// - Renamed variable 's' to 'chatAbConfigSelectors'
// - Resolved require(561916) to 'chat-ab-config-selectors'
// - Renamed variable 'l' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'c' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'u' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'v' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'd' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable '_' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'h' to 'chatConversationUtils_1'
// - Resolved require(502844) to 'chat-conversation-utils_1'
// - Renamed variable 'm' to 'chatLocalConversationCreator'
// - Resolved require(549663) to 'chat-local-conversation-creator'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'validateNumericString'
// - Resolved require(93601) to 'validate-numeric-string'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(31165) to 'async-dbx-toast'
// - Resolved require.bind(682910) to 'dbx-sonner-toaster-wrapper'
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'GP' to 'newDocRoute' (module 130052)
// - Updated imported property 'Og' to 'getSkillTypeFromRoute' (module 467072)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'h' to 'generateLocalId' (module 502844)
// - Updated imported property 'k' to 'isValidNumber' (module 93601)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'a' to 'createLocalConversation' (module 549663)
// - Updated imported property 'VI' to 'BotTypes' (module 746101)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'pM' to 'isLandingToMainCoco' (module 561916)
// - Updated imported property 'p1' to 'specificBotType' (module 876559)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'tv' to 'isChatIdPage' (module 391713)
// - Updated imported property 'kK' to 'isChatLayoutOnly' (module 391713)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-conversation-page-launcher.94db7428.js
         * chunkId: 20011
         * moduleId: 638832
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var conversationPageConstants = require("conversation-page-constants") /*id: 130052*/;
  var chatRouteSkillMapper = require("chat-route-skill-mapper") /*id: 467072*/;
  var chatLayoutRouteMatchers = require("chat-layout-route-matchers") /*id: 391713*/;
  var chatAbConfigSelectors = require("chat-ab-config-selectors") /*id: 561916*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var chatLocalConversationCreator = require("chat-local-conversation-creator") /*id: 549663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var validateNumericString = require("validate-numeric-string") /*id: 93601*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function w(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let C = e => !!e && [chatConversationTypes.ConversationTypes.Bot, chatConversationTypes.ConversationTypes.Conversation, chatConversationTypes.ConversationTypes.NewDoc, chatConversationTypes.ConversationTypes.NewThread, chatConversationTypes.ConversationTypes.ProfileBot, chatConversationTypes.ConversationTypes.ThreadLocalConversation].includes(e);
  let S = e => {
    let {
      chatIdFromParams: i,
      chatTypeFromParams: n,
      skillGuidanceIdentifier: r
    } = e;
    if (C(n)) {
      return n;
    } else if (r) {
      return chatConversationTypes.ConversationTypes.NewThread;
    } else if (i == null ? undefined : i.startsWith("local_")) {
      return chatConversationTypes.ConversationTypes.ThreadLocalConversation;
    } else if (i) {
      return chatConversationTypes.ConversationTypes.Conversation;
    } else if (location?.pathname === conversationPageConstants.newDocRoute) {
      return chatConversationTypes.ConversationTypes.NewDoc;
    } else {
      return chatConversationTypes.ConversationTypes.NewThread;
    }
  };
  class b {
    constructor() {
      w(this, "firstEnter", true);
      w(this, "_prevSkillGuidanceIndentifier", undefined);
      w(this, "onEnter", (e, t) => {
        let {
          location: o,
          params: a,
          searchParams: l,
          navigate: w
        } = e;
        let C = a == null ? undefined : a.id;
        let b = Number(l == null ? undefined : l.get("type"));
        let P = chatRouteSkillMapper.getSkillTypeFromRoute(C);
        let y = C && !P ? C : (!t || P && this._prevSkillGuidanceIndentifier === P) && chatStoreManager.getStoreState("chatViewCoreStore").currentLocalConversationId || chatConversationUtils_1.generateLocalId();
        this._prevSkillGuidanceIndentifier = P;
        let I = S({
          chatIdFromParams: C,
          chatTypeFromParams: b,
          skillGuidanceIdentifier: P,
          location: o
        });
        chatStoreManager.getStore("chatViewCoreStore").setState(e => {
          let {
            currentChatViewConfig: t
          } = e;
          if ((t == null ? undefined : t.chatId) !== y) {
            return {
              currentLocalConversationId: y,
              currentChatViewConfig: {
                chatId: y,
                chatType: I
              }
            };
          } else {
            return {};
          }
        });
        (async () => {
          if ((C && C.includes("local_") && validateNumericString.isValidNumber(C.replace("local_", "")) || P) && !chatFeedStoreFactory.useFeedStore.getState().localConversationMap[y]) {
            chatLocalConversationCreator.createLocalConversation({
              conversation: {
                conversation_type: chatCoreConstants.BotTypes.CocoWebSub,
                name: ""
              },
              conversationId: y
            });
          }
          if (C && validateNumericString.isValidNumber(C)) {
            var a;
            let c = await chatIocServiceLoaderHook.loadServiceAsync("chatConversationService");
            let _ = chatStoreManager.getStoreState("chatViewCoreStore");
            let h = _.currentChatViewConfig?.chatKey || "";
            if (h && _.needSkipChatKey === h) {
              chatStoreManager.getStore("chatViewCoreStore").setState({
                needSkipChatKey: undefined
              });
              return;
            }
            try {
              if (!t) {
                let t = (a = e.matches) === null || a === undefined ? undefined : a[0]?.data;
                if (chatAbConfigSelectors.isLandingToMainCoco(t == null ? undefined : t.userSetting?.data)) {
                  if (t != null) {
                    t.trimmedChainRecentConvCells.filter(e => {
                      return e.conversation?.conversation_id === y || e.conversation?.bot_type === chatConstantsEnum.specificBotType.COCO;
                    }).forEach(e => c == null ? undefined : c.prefetchBuildConversationInfo({
                      cell: e,
                      logId: t == null ? undefined : t.logid
                    }));
                  }
                }
              }
              await (c == null ? undefined : c.refreshConversationInfo({
                conversationId: y,
                scene: "initChatView"
              }));
            } catch (t) {
              let e = () => {
                let o = require.e("async-dbx-toast") /*id: 31165*/.then(require.bind(require, "dbx-sonner-toaster-wrapper") /*id: 682910*/);
                if (this.firstEnter) {
                  if (objectPathGetDefault.getObjectPathDefault(t, "errorOption.code") !== "712013001") {
                    setTimeout(() => {
                      o.then(e => {
                        let {
                          dbxToastAPI: t
                        } = e;
                        t.error(i18nTranslationUtils.i18nextTranslate("web_toast_chat_noAccess_homepage"), {
                          duration: 10000,
                          customContentProps: {
                            showCloseIcon: true
                          }
                        });
                      });
                    }, 2000);
                  }
                  if (w != null) {
                    w("/chat/");
                  }
                } else {
                  let t = t => {
                    o.then(e => {
                      let {
                        dbxToastAPI: i
                      } = e;
                      i.dismiss(t);
                    });
                    if (c != null) {
                      c.refreshConversationInfo({
                        conversationId: y,
                        scene: "initChatView"
                      }).catch(() => {
                        e();
                      });
                    }
                  };
                  o.then(e => {
                    let {
                      dbxToastAPI: i
                    } = e;
                    i.error(i18nTranslationUtils.i18nextTranslate("web_toast_loadChat_fail"), {
                      duration: 30000,
                      customContentProps: {
                        showCloseIcon: true,
                        renderBtns: e => reactJsxRuntimeCoreReexport.jsx("div", {
                          className: "flex items-center justify-center",
                          children: reactJsxRuntimeCoreReexport.jsx("div", {
                            className: `
                            cursor-pointer text-[14px] leading-[22px]
                            text-(--dbx-text-highlight)
                          `,
                            onClick: () => {
                              t(e);
                            },
                            children: i18nTranslationUtils.i18nextTranslate("retry")
                          })
                        })
                      }
                    });
                  });
                }
              };
              e();
            }
          }
          this.firstEnter = false;
        })();
      });
      w(this, "onExit", e => {
        let {
          matches: t
        } = e;
        if (!chatLayoutRouteMatchers.isChatIdPage(t) && !chatLayoutRouteMatchers.isChatLayoutOnly(t)) {
          return chatStoreManager.getStore("chatViewCoreStore").setState({
            currentChatViewConfig: undefined,
            currentLocalConversationId: undefined
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PageLauncherPlugin: function () {
      return b;
    }
  });
}