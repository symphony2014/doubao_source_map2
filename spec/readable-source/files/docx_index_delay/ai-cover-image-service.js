// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'aiCoverImageService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 190345
         */
module.exports = function (module, exports, require) {
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  let s = {
    fetchAICoverList(e) {
      let {
        uniqueTaskId: i,
        token: r,
        page_title: s,
        style: u,
        prompt: l,
        directory_list: c
      } = e;
      return apiClientInstance.apiClient.post("/inline_ai/image_ai/run_image_completion/", {
        unique_task_id: i,
        scenario: 1,
        content_context: {
          page_title: s,
          directory_list: c,
          prompt: l,
          style: u,
          obj_token: r,
          obj_type: 22,
          need_count: 4
        },
        user_context: {
          member_id: flowDocChatMemberIo.getMemberId().toString()
        }
      }, {
        baseURL: spaceApiConfig.getSpaceApiFn()
      });
    },
    getAICoverList(e) {
      let {
        taskId: i,
        token: r,
        page_title: n,
        style: s,
        prompt: u,
        uniqueTaskId: l,
        directory_list: c
      } = e;
      return apiClientInstance.apiClient.post("/inline_ai/image_ai/image_completion_status/", {
        task_id: i,
        unique_task_id: l,
        scenario: 1,
        content_context: {
          page_title: n,
          directory_list: c,
          prompt: u,
          style: s,
          obj_token: r,
          obj_type: 22,
          need_count: 4
        },
        user_context: {}
      }, {
        baseURL: spaceApiConfig.getSpaceApiFn()
      });
    },
    fetchAICoverListStop: e => apiClientInstance.apiClient.get("/inline_ai/stop_chat_completion/", {
      params: {
        unique_task_id: e,
        scene_type: "image_gc"
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    fetchAICoverHistoryList: e => apiClientInstance.apiClient.get("/inline_ai/image_ai/history_list/", {
      params: {
        obj_token: e,
        obj_type: 22,
        page_count: 10
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    fetchImageSuperStatus: e => apiClientInstance.apiClient.get("/inline_ai/get_image_super_status/", {
      params: {
        image_token: e
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    fetchImageSuper: e => apiClientInstance.apiClient.post("/inline_ai/image_super/", {
      image_token: e
    }, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    reportAICoverFeedback: async e => apiClientInstance.apiClient.post("/inline_ai/feedback_report/", {
      ai_message_id: e.aiMessageId,
      like_status: e.likeStatus,
      mode: 1,
      scenario: 1,
      action_type: "image_gc",
      is_deleted: e.isDeleted
    }, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    })
  };
  require.d(exports, {
    aiCoverImageService: function () {
      return s;
    }
  });
}