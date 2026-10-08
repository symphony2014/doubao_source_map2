// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'useMainBotMemoryStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 404006
         */
module.exports = function (module, exports, require) {
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = {
    main_bot_setting: {}
  };
  let c = reactStoreHookFactory.createStoreHook()((e, t) => {
    let n = debounceUtilWrapper.createDebounce(async () => {
      try {
        if (t().main_bot_setting?.is_inited_main_bot_setting) {
          return;
        }
        let o = await apiServicesCollection.AliceBotApiService.GetBotListV2({
          bot_id_list: [chatConstantId.chatConstantId],
          scene: "default"
        });
        e(immerProduceCore.produce(e => {
          var n;
          var l;
          var i;
          var a;
          e.main_bot_setting = {
            ...e.main_bot_setting,
            is_inited_main_bot_setting: true,
            enable_main_bot_memory: o == null ? undefined : (l = o.data) === null || l === undefined ? undefined : (n = l[0]) === null || n === undefined ? undefined : n.bot_memory_config?.enable_bot_memory,
            main_bot_memory_switch_status: o == null ? undefined : (a = o.data) === null || a === undefined ? undefined : (i = a[0]) === null || i === undefined ? undefined : i.bot_memory_config?.switch_status
          };
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "get_main_bot_memory_setting_error",
          error: e
        });
      }
    }, 1000);
    return {
      ...d,
      getMainBotSetting: () => n(),
      async updateMainBotSettingAsync(t) {
        try {
          e(immerProduceCore.produce(e => {
            e.main_bot_setting = {
              ...e.main_bot_setting,
              ...t
            };
          }));
          await apiServicesCollection.AliceBotApiService.UpdateBot({
            bot_id: chatConstantId.chatConstantId,
            bot_memory_switch_status: t.main_bot_memory_switch_status
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "update_main_bot_memory_setting_error",
            error: e
          });
        }
      },
      async clearMainBotMemoryHistory() {
        try {
          e(immerProduceCore.produce(e => {
            e.main_bot_setting = {
              ...e.main_bot_setting,
              memory_saved_content_list: []
            };
          }));
          await apiServicesCollection.FlowChatXmemoryApiService.ApiClearMemory({
            bot_id: chatConstantId.chatConstantId
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "clear_memory_history_error",
            error: e
          });
        }
      },
      async getMemoryContentList() {
        try {
          e(immerProduceCore.produce(e => {
            e.main_bot_setting = {
              ...e.main_bot_setting,
              loading_content_list: true
            };
          }));
          let n = await apiServicesCollection.FlowChatXmemoryApiService.GetMemoryList({
            bot_id: chatConstantId.chatConstantId
          });
          e(immerProduceCore.produce(e => {
            e.main_bot_setting = {
              ...e.main_bot_setting,
              memory_saved_content_list: (n == null ? undefined : n.data?.saved_memory) || [],
              loading_content_list: false
            };
          }));
          return (n == null ? undefined : n.data?.saved_memory) || [];
        } catch (t) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "get_memory_content_list_error",
            error: t
          });
          e(immerProduceCore.produce(e => {
            e.main_bot_setting = {
              ...e.main_bot_setting,
              loading_content_list: false
            };
          }));
          return {};
        }
      },
      async deleteMemoryContent(n) {
        try {
          let s = t().main_bot_setting?.memory_saved_content_list ?? [];
          n.map(e => {
            s = s.filter(t => t.id !== e);
          });
          e(immerProduceCore.produce(e => {
            e.main_bot_setting = {
              ...e.main_bot_setting,
              memory_saved_content_list: s || []
            };
          }));
          await apiServicesCollection.FlowChatXmemoryApiService.DeleteMemory({
            bot_id: chatConstantId.chatConstantId,
            memory_ids: {
              saved_memory: n
            }
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "delete_memory_content_error",
            error: e
          });
        }
      }
    };
  });
  require.d(exports, {
    useMainBotMemoryStore: function () {
      return c;
    }
  });
}