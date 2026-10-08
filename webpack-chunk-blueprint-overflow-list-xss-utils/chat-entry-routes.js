// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'chatRouteConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 107320
         */
module.exports = function (module, exports, require) {
  var loadableComponentUtil = require("loadable-component-util") /*id: 424216*/;
  var modernjsRouteUtils = require("modernjs-route-utils") /*id: 712477*/;
  var topologicalSinglePassModuleRenamer = require("topological-single-pass-module-renamer") /*id: 533195*/;
  var chatServiceStubExport_1 = require("chat-service-stub-export_1") /*id: 703205*/;
  var chatServiceStubExport = require("chat-service-stub-export") /*id: 346690*/;
  var chatServiceStub = require("chat-service-stub") /*id: 894382*/;
  var fetchConversationAndMessagesService = require("fetch-conversation-and-messages-service") /*id: 556407*/;
  var aispaceMigrationStatusFetcher = require("aispace-migration-status-fetcher") /*id: 255533*/;
  var chatInitialDataLoader = require("chat-initial-data-loader") /*id: 765887*/;
  if (typeof document != "undefined") {
    window._routeModules = {};
  }
  let h = [{
    path: "/",
    children: [{
      _component: "@_edenx_src/entry-chat/routes/[id]/page",
      id: "chat_(id)/page",
      type: "nested",
      data: "@_edenx_src/entry-chat/routes/[id]/page.data",
      clientData: "@_edenx_src/entry-chat/routes/[id]/page.data.client",
      path: ":id",
      lazyImport: () => Promise.all([require.e("semi-ui-button-input-components") /*id: 14520*/, require.e("semi-ui-toast-input") /*id: 81972*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("conversation-management") /*id: 2177*/, require.e("ui-toast-and-select-components") /*id: 71153*/, require.e("chat-messaging-app-bundle") /*id: 64980*/, require.e("chat_(id)/page") /*id: 5623*/]).then(require.bind(require, "chat-conversation-page") /*id: 994124*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_(id)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      loader: fetchConversationAndMessagesService.fetchConversationAndMessages,
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_(id)/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("semi-ui-button-input-components") /*id: 14520*/, require.e("semi-ui-toast-input") /*id: 81972*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("conversation-management") /*id: 2177*/, require.e("ui-toast-and-select-components") /*id: 71153*/, require.e("chat-messaging-app-bundle") /*id: 64980*/, require.e("chat_(id)/page") /*id: 5623*/]).then(require.bind(require, "chat-conversation-page") /*id: 994124*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_(id)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 994124
      }),
      shouldRevalidate: modernjsRouteUtils.createRevalidate("chat_(id)/page")
    }, {
      _component: "@_edenx_src/entry-chat/routes/bot/create/page",
      id: "chat_bot/create/page",
      type: "nested",
      path: "bot/create",
      lazyImport: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("semi-ui-toast-popover") /*id: 854*/, require.e("animation-date-ui-utilities") /*id: 50072*/, require.e("dnd-kit-react-components") /*id: 27079*/, require.e("59228") /*id: css-unknown*/, require.e("api-client-services") /*id: 26176*/, require.e("chat_bot/create/page") /*id: 44611*/]).then(require.bind(require, "create-bot-page-component") /*id: 43799*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_bot/create/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_bot/create/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("semi-ui-toast-popover") /*id: 854*/, require.e("animation-date-ui-utilities") /*id: 50072*/, require.e("dnd-kit-react-components") /*id: 27079*/, require.e("59228") /*id: css-unknown*/, require.e("api-client-services") /*id: 26176*/, require.e("chat_bot/create/page") /*id: 44611*/]).then(require.bind(require, "create-bot-page-component") /*id: 43799*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_bot/create/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 43799
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/bot/discover/page",
      id: "chat_bot/discover/page",
      type: "nested",
      path: "bot/discover",
      lazyImport: () => Promise.all([require.e("semi-ui-toast-popover") /*id: 854*/, require.e("api-client-services") /*id: 26176*/, require.e("chat_bot/discover/page") /*id: 88491*/]).then(require.bind(require, "bot-discover-page-component") /*id: 808434*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_bot/discover/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_bot/discover/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("semi-ui-toast-popover") /*id: 854*/, require.e("api-client-services") /*id: 26176*/, require.e("chat_bot/discover/page") /*id: 88491*/]).then(require.bind(require, "bot-discover-page-component") /*id: 808434*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_bot/discover/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 808434
      })
    }, {
      path: "drive",
      children: [{
        _component: "@_edenx_src/entry-chat/routes/drive/$",
        path: "*",
        id: "chat_drive/$",
        type: "nested",
        lazyImport: () => require.e("chat_drive/$") /*id: 15841*/.then(require.bind(require, "ai-space-404-page") /*id: 412457*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/$")).catch(modernjsRouteUtils.getDefaultUpdate),
        component: loadableComponentUtil.loadable({
          resolved: {},
          chunkName: () => "chat_drive/$",
          isReady(e) {
            let t = this.resolve(e);
            return this.resolved[t] === true && !!require.m[t];
          },
          importAsync: () => require.e("chat_drive/$") /*id: 15841*/.then(require.bind(require, "ai-space-404-page") /*id: 412457*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/$")).catch(modernjsRouteUtils.getDefaultUpdate),
          requireAsync(e) {
            let t = this.resolve(e);
            this.resolved[t] = false;
            return this.importAsync(e).then(e => {
              this.resolved[t] = true;
              return e;
            });
          },
          requireSync(e) {
            return require(this.resolve(e));
          },
          resolve: () => 412457
        })
      }, {
        path: ":node_id?",
        children: [{
          _component: "@_edenx_src/entry-chat/routes/drive/[node_id$]/page",
          index: true,
          id: "chat_drive/(node_id$)/page",
          type: "nested",
          lazyImport: () => require.e("chat_drive/(node_id$)/page") /*id: 14550*/.then(require.bind(require, "ai-space-page-router") /*id: 662992*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/(node_id$)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
          component: loadableComponentUtil.loadable({
            resolved: {},
            chunkName: () => "chat_drive/(node_id$)/page",
            isReady(e) {
              let t = this.resolve(e);
              return this.resolved[t] === true && !!require.m[t];
            },
            importAsync: () => require.e("chat_drive/(node_id$)/page") /*id: 14550*/.then(require.bind(require, "ai-space-page-router") /*id: 662992*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/(node_id$)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
            requireAsync(e) {
              let t = this.resolve(e);
              this.resolved[t] = false;
              return this.importAsync(e).then(e => {
                this.resolved[t] = true;
                return e;
              });
            },
            requireSync(e) {
              return require(this.resolve(e));
            },
            resolve: () => 662992
          })
        }],
        isRoot: false,
        loading: chatServiceStubExport_1.ChatStub,
        id: "chat_drive/(node_id$)/layout",
        type: "nested",
        lazyImport: null
      }, {
        path: "share",
        children: [{
          _component: "@_edenx_src/entry-chat/routes/drive/share/page",
          index: true,
          id: "chat_drive/share/page",
          type: "nested",
          lazyImport: () => Promise.all([require.e("lib-react") /*id: 43361*/, require.e("semi-image-preview") /*id: 87086*/, require.e("konva-base") /*id: 30265*/, require.e("semi-design-form-validation") /*id: 99127*/, require.e("semi-media-rich-search") /*id: 17574*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("folder-file-icons") /*id: 41522*/, require.e("charting-toolkit-components") /*id: 41268*/, require.e("ui-primitives-document-utils") /*id: 28074*/, require.e("ai-space-dialog-handlers") /*id: 19113*/, require.e("ui-toaster-api-and-assets") /*id: 34843*/, require.e("chat_drive/share/page") /*id: 18730*/]).then(require.bind(require, "ai-space-my-share-page-component") /*id: 514998*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/share/page")).catch(modernjsRouteUtils.getDefaultUpdate),
          component: loadableComponentUtil.loadable({
            resolved: {},
            chunkName: () => "chat_drive/share/page",
            isReady(e) {
              let t = this.resolve(e);
              return this.resolved[t] === true && !!require.m[t];
            },
            importAsync: () => Promise.all([require.e("lib-react") /*id: 43361*/, require.e("semi-image-preview") /*id: 87086*/, require.e("konva-base") /*id: 30265*/, require.e("semi-design-form-validation") /*id: 99127*/, require.e("semi-media-rich-search") /*id: 17574*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("folder-file-icons") /*id: 41522*/, require.e("charting-toolkit-components") /*id: 41268*/, require.e("ui-primitives-document-utils") /*id: 28074*/, require.e("ai-space-dialog-handlers") /*id: 19113*/, require.e("ui-toaster-api-and-assets") /*id: 34843*/, require.e("chat_drive/share/page") /*id: 18730*/]).then(require.bind(require, "ai-space-my-share-page-component") /*id: 514998*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/share/page")).catch(modernjsRouteUtils.getDefaultUpdate),
            requireAsync(e) {
              let t = this.resolve(e);
              this.resolved[t] = false;
              return this.importAsync(e).then(e => {
                this.resolved[t] = true;
                return e;
              });
            },
            requireSync(e) {
              return require(this.resolve(e));
            },
            resolve: () => 514998
          })
        }],
        isRoot: false,
        loading: chatServiceStubExport.ChatStub,
        id: "chat_drive/share/layout",
        type: "nested",
        lazyImport: null
      }],
      isRoot: false,
      clientData: "@_edenx_src/entry-chat/routes/drive/layout.data.client",
      data: "@_edenx_src/entry-chat/routes/drive/layout.data",
      _component: "@_edenx_src/entry-chat/routes/drive/layout",
      loading: chatServiceStub.ChatStub,
      id: "chat_drive/layout",
      type: "nested",
      lazyImport: () => require.e("chat_drive/layout") /*id: 30667*/.then(require.bind(require, "ai-space-layout") /*id: 256052*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/layout")).catch(modernjsRouteUtils.getDefaultUpdate),
      loader: aispaceMigrationStatusFetcher.getMigrationStatus,
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_drive/layout",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => require.e("chat_drive/layout") /*id: 30667*/.then(require.bind(require, "ai-space-layout") /*id: 256052*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_drive/layout")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 256052
      }),
      shouldRevalidate: modernjsRouteUtils.createRevalidate("chat_drive/layout")
    }, {
      path: "init-samantha-runtime/plugins",
      children: [],
      isRoot: false,
      _component: "@_edenx_src/entry-chat/routes/init-samantha-runtime/plugins/layout",
      id: "chat_init-samantha-runtime/plugins/layout",
      type: "nested",
      lazyImport: () => Promise.resolve().then(require.bind(require, "chat-plugin-layout-initializer") /*id: 811260*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_init-samantha-runtime/plugins/layout")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_init-samantha-runtime/plugins/layout",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.resolve().then(require.bind(require, "chat-plugin-layout-initializer") /*id: 811260*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_init-samantha-runtime/plugins/layout")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 811260
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/local-thread/list/page",
      id: "chat_local-thread/list/page",
      type: "nested",
      path: "local-thread/list",
      lazyImport: () => require.e("chat_local-thread/list/page") /*id: 58543*/.then(require.bind(require, "chat-interactive-page") /*id: 373867*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_local-thread/list/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_local-thread/list/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => require.e("chat_local-thread/list/page") /*id: 58543*/.then(require.bind(require, "chat-interactive-page") /*id: 373867*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_local-thread/list/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 373867
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/main/page",
      id: "chat_main/page",
      type: "nested",
      path: "main",
      lazyImport: () => require.e("chat_main/page") /*id: 69197*/.then(require.bind(require, "chat-input-layout-memoized-wrapper") /*id: 656183*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_main/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_main/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => require.e("chat_main/page") /*id: 69197*/.then(require.bind(require, "chat-input-layout-memoized-wrapper") /*id: 656183*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_main/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 656183
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/new-thread/page",
      id: "chat_new-thread/page",
      type: "nested",
      path: "new-thread",
      lazyImport: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("ui-toast-and-select-components") /*id: 71153*/, require.e("attachment-utils-helpers") /*id: 69318*/, require.e("chat_new-thread/page") /*id: 90814*/]).then(require.bind(require, "chat-url-action-handler-module") /*id: 985645*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new-thread/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_new-thread/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("ui-toast-and-select-components") /*id: 71153*/, require.e("attachment-utils-helpers") /*id: 69318*/, require.e("chat_new-thread/page") /*id: 90814*/]).then(require.bind(require, "chat-url-action-handler-module") /*id: 985645*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new-thread/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 985645
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/new-thread/create-by-msg/page",
      id: "chat_new-thread/create-by-msg/page",
      type: "nested",
      path: "new-thread/create-by-msg",
      lazyImport: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat_new-thread/create-by-msg/page") /*id: 51606*/]).then(require.bind(require, "chat-page-sync-messages-and-render") /*id: 531921*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new-thread/create-by-msg/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_new-thread/create-by-msg/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat_new-thread/create-by-msg/page") /*id: 51606*/]).then(require.bind(require, "chat-page-sync-messages-and-render") /*id: 531921*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new-thread/create-by-msg/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 531921
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/new-thread/create-by-share/page",
      id: "chat_new-thread/create-by-share/page",
      type: "nested",
      path: "new-thread/create-by-share",
      lazyImport: () => require.e("chat_new-thread/create-by-share/page") /*id: 92296*/.then(require.bind(require, "share-continue-chat-page") /*id: 282466*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new-thread/create-by-share/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_new-thread/create-by-share/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => require.e("chat_new-thread/create-by-share/page") /*id: 92296*/.then(require.bind(require, "share-continue-chat-page") /*id: 282466*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new-thread/create-by-share/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 282466
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/new.[id$]/page",
      id: "chat_new.(id$)/page",
      type: "nested",
      path: "new/:id?",
      lazyImport: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("data-compression-utilities") /*id: 35717*/, require.e("chat_new.(id$)/page") /*id: 66934*/]).then(require.bind(require, "chat-page-router-wrapper") /*id: 746790*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new.(id$)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_new.(id$)/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("data-compression-utilities") /*id: 35717*/, require.e("chat_new.(id$)/page") /*id: 66934*/]).then(require.bind(require, "chat-page-router-wrapper") /*id: 746790*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_new.(id$)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 746790
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/profile/[uid$]/page",
      id: "chat_profile/(uid$)/page",
      type: "nested",
      path: "profile/:uid?",
      lazyImport: () => Promise.all([require.e("semi-ui-toast-popover") /*id: 854*/, require.e("ui-dropdown-toast") /*id: 33586*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("data-compression-utilities") /*id: 35717*/, require.e("chat_profile/(uid$)/page") /*id: 91965*/]).then(require.bind(require, "profile-bot-list-page") /*id: 54021*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_profile/(uid$)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_profile/(uid$)/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("semi-ui-toast-popover") /*id: 854*/, require.e("ui-dropdown-toast") /*id: 33586*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("data-compression-utilities") /*id: 35717*/, require.e("chat_profile/(uid$)/page") /*id: 91965*/]).then(require.bind(require, "profile-bot-list-page") /*id: 54021*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_profile/(uid$)/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 54021
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/thread/list/page",
      id: "chat_thread/list/page",
      type: "nested",
      path: "thread/list",
      lazyImport: () => Promise.all([require.e("semi-ui-toast-popover") /*id: 854*/, require.e("semi-ui-avatar-button-checkbox") /*id: 20968*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("conversation-management") /*id: 2177*/, require.e("chat_thread/list/page") /*id: 21179*/]).then(require.bind(require, "thread-list-page") /*id: 651354*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_thread/list/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_thread/list/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("semi-ui-toast-popover") /*id: 854*/, require.e("semi-ui-avatar-button-checkbox") /*id: 20968*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("conversation-management") /*id: 2177*/, require.e("chat_thread/list/page") /*id: 21179*/]).then(require.bind(require, "thread-list-page") /*id: 651354*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_thread/list/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 651354
      })
    }, {
      _component: "@_edenx_src/entry-chat/routes/url-action/page",
      id: "chat_url-action/page",
      type: "nested",
      path: "url-action",
      lazyImport: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("ui-toast-and-select-components") /*id: 71153*/, require.e("attachment-utils-helpers") /*id: 69318*/, require.e("chat_url-action/page") /*id: 83145*/]).then(require.bind(require, "chat-url-action-page") /*id: 805717*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_url-action/page")).catch(modernjsRouteUtils.getDefaultUpdate),
      component: loadableComponentUtil.loadable({
        resolved: {},
        chunkName: () => "chat_url-action/page",
        isReady(e) {
          let t = this.resolve(e);
          return this.resolved[t] === true && !!require.m[t];
        },
        importAsync: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("ui-toast-and-select-components") /*id: 71153*/, require.e("attachment-utils-helpers") /*id: 69318*/, require.e("chat_url-action/page") /*id: 83145*/]).then(require.bind(require, "chat-url-action-page") /*id: 805717*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_url-action/page")).catch(modernjsRouteUtils.getDefaultUpdate),
        requireAsync(e) {
          let t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then(e => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          return require(this.resolve(e));
        },
        resolve: () => 805717
      })
    }],
    isRoot: true,
    clientData: "@_edenx_src/entry-chat/routes/layout.data.client",
    data: "@_edenx_src/entry-chat/routes/layout.data",
    _component: "@_edenx_src/entry-chat/routes/layout",
    id: "chat_layout",
    type: "nested",
    lazyImport: () => Promise.resolve().then(require.bind(require, "topological-single-pass-module-renamer") /*id: 533195*/).then(e => modernjsRouteUtils.registerRouteModule(e, "chat_layout")).catch(modernjsRouteUtils.getDefaultUpdate),
    loader: chatInitialDataLoader.loadChatInitialData,
    component: topologicalSinglePassModuleRenamer.default,
    shouldRevalidate: modernjsRouteUtils.createRevalidate("chat_layout")
  }];
  require.d(exports, {
    chatRouteConfig: function () {
      return h;
    }
  });
}