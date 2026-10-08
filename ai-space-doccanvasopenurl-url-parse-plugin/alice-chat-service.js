// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EM' to 'AliceChatService'
// - Renamed export 'Hy' to 'getAliceChatService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-pre-plugin.aee79fcf.js
         * chunkId: 11567
         * moduleId: 756668
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatConversationTransformer = require("chat-conversation-transformer") /*id: 969267*/;
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var chatMessageMetadataEnricher = require("chat-message-metadata-enricher") /*id: 126191*/;
  var instantMessagingGatewayClient = require("instant-messaging-gateway-client") /*id: 181716*/;
  let d = async (n, t) => {
    let e = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.UPDATE_CONVERSATION_NAME,
      uplink_body: {
        update_conversation_name_uplink_body: {
          conversation_id: n,
          name: t,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT
        }
      }
    });
    await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/update_name",
      method: "POST",
      data: e
    });
  };
  let u = async n => {
    let r = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.CREATE_CONVERSATION,
      uplink_body: {
        create_conv_uplink_body: {
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          conversation_scene: 4,
          participant_list: n.participant_list ?? [{
            user_id: n.bot_id ?? "",
            user_type: chatConstantsEnum.userType.AIBOT
          }],
          onboarding_content: n.samantha_onboarding?.value,
          source_message_id: "",
          source_conversation_id: "",
          local_message_id_list: [],
          source_message_id_list: [],
          bot_type: n.bot_type,
          is_model_gen_name: n.is_model_gen_name,
          ext: n.ext ?? {},
          name: n.name
        }
      }
    });
    let {
      status_code: d,
      status_desc: u,
      downlink_body: v
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/create",
      method: "POST",
      data: r
    });
    let {
      create_conv_downlink_body: p
    } = v ?? {};
    let {
      bot_info: m,
      conversation_info: y
    } = p ?? {};
    return {
      code: d,
      msg: u,
      data: {
        thread_info: {
          conversation: chatConversationTransformer.transformConversationBase(y, m)
        },
        bot_info: chatConversationTransformer.botCategoryToParticipant(m)
      }
    };
  };
  let v = async (n, t) => {
    let e = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.OPERATE_CONVERSATION,
      uplink_body: {
        operate_conv_uplink_body: {
          conversation_id: n,
          operate_type: t,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT
        }
      }
    });
    let {
      status_code: o,
      status_desc: a
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/operate",
      method: "POST",
      data: e
    });
    return {
      code: o,
      msg: a
    };
  };
  let p = async (n, t) => {
    let e = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.MARK_CONVERSATION_READ,
      uplink_body: {
        mark_conv_read_uplink_body: {
          conversation_id: n,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          read_index: Number(t)
        }
      }
    });
    let {
      status_code: o,
      status_desc: a
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/mark_conv_read",
      method: "POST",
      data: e
    });
    return {
      code: o,
      msg: a
    };
  };
  var getConversationInfoModule = require("get-conversation-info-module") /*id: 434163*/;
  let y = async n => {
    let t = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.CREATE_CONVERSATION,
      uplink_body: {
        create_conv_uplink_body: {
          source_message_id: "",
          source_conversation_id: "",
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          ext: {},
          participant_list: [],
          local_message_id_list: [],
          source_message_id_list: [],
          token: n.token,
          conversation_scene: 3
        }
      }
    });
    let {
      status_code: e,
      status_desc: o,
      downlink_body: a
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/create",
      method: "POST",
      data: t
    });
    let {
      create_conv_downlink_body: r
    } = a ?? {};
    let {
      conversation_info: d
    } = r ?? {};
    return {
      code: e,
      msg: o,
      data: {
        conversation: chatConversationTransformer.transformConversationBase(d, undefined)
      }
    };
  };
  let b = async () => {
    let n = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.COUNT_CONVERSATION,
      uplink_body: {
        conversation_count_uplink_body: {}
      }
    });
    let {
      status_code: t,
      status_desc: e,
      downlink_body: o
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/count",
      method: "POST",
      data: n
    });
    return {
      code: t,
      msg: e,
      data: o == null ? undefined : o.conversation_count_downlink_body
    };
  };
  let h = async n => {
    let t = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.CLEAR_MSG_HISTORY,
      uplink_body: {
        clear_msg_history_uplink_body: {
          conversation_id: n,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT
        }
      }
    });
    let {
      status_code: e,
      status_desc: o
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/clear_history",
      method: "POST",
      data: t
    });
    return {
      code: e,
      msg: o
    };
  };
  let g = async n => {
    let t = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.CLEAR_MSG_CONTEXT,
      uplink_body: {
        clear_msg_context_uplink_body: {
          conversation_id: n,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          scene_type: 0
        }
      }
    });
    let {
      status_code: e,
      status_desc: o,
      downlink_body: a
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/clear_context",
      method: "POST",
      data: t
    });
    let {
      clear_msg_context_downlink_body: r
    } = a ?? {};
    let {
      new_section_id: l
    } = r ?? {};
    return {
      code: e,
      msg: o,
      data: {
        section_id: l
      }
    };
  };
  var recentConvChainService = require("recent-conv-chain-service") /*id: 427511*/;
  let C = async (n, t) => {
    let e = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.BATCH_DELETE_USER_CONVERSATION,
      uplink_body: {
        batch_delete_user_conversation_uplink_body: {
          conversation_id: n,
          delete_all: t,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT
        }
      }
    });
    await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/batch_del_user_conv",
      method: "POST",
      data: e
    });
  };
  function O(n, t, e) {
    var o;
    if ((t = typeof (o = function (n, t) {
      if (typeof n != "object" || !n) {
        return n;
      }
      var e = n[Symbol.toPrimitive];
      if (e !== undefined) {
        var o = e.call(n, t || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(n);
    }(t, "string")) == "symbol" ? o : o + "") in n) {
      Object.defineProperty(n, t, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      n[t] = e;
    }
    return n;
  }
  class z {
    constructor() {
      O(this, "getConversationList", async n => {
        var d;
        var u;
        let p = {
          conv_version: n.cursor ?? "",
          limit: Number(n.batch_size ?? 50),
          filter: n.conversation_types ? {
            conversation_type: n.conversation_types.map(n => chatConversationTransformer.participantToBotCategory(n))
          } : undefined,
          message_count_per_conv: 10,
          option: {
            need_pc_pin_chain: true,
            pc_pin_query_type: n.pc_pin_query_type ?? chatConstantsEnum.pinQueryType.QueryPin
          }
        };
        let {
          code: m,
          msg: y,
          data: b
        } = await recentConvChainService.fetchRecentConvChain(p);
        let {
          cells: h,
          has_more: g,
          next_cursor: C,
          extra: O
        } = b ?? {};
        let z = h == null ? undefined : h.map(n => chatConversationTransformer.transformThreadData(n));
        if (!(z == null ? undefined : z.length)) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "IM_recent_conv_empty",
            meta: {
              conv_version: p.conv_version,
              limit: p.limit,
              filter: (u = p.filter) === null || u === undefined ? undefined : (d = u.conversation_type) === null || d === undefined ? undefined : d.join(","),
              message_count_per_conv: p.message_count_per_conv,
              pc_pin_query_type: p.option?.pc_pin_query_type
            }
          });
        }
        return {
          code: m,
          msg: y,
          data: {
            has_more: g,
            next_cursor: C,
            thread_list: z,
            pc_pin_query_type: O == null ? undefined : O.pc_pin_query_type,
            samantha_bot: (O == null ? undefined : O.extra?.coco_bot_id) ? {
              bot_id: O == null ? undefined : O.extra?.coco_bot_id,
              name: O == null ? undefined : O.extra?.coco_bot_name,
              icon_url: O == null ? undefined : O.extra?.coco_bot_icon_url
            } : undefined
          }
        };
      });
      O(this, "getTouristConversationList", async () => {
        let {
          code: p,
          msg: m,
          data: y
        } = await recentConvChainService.fetchRecentConvChain({
          conv_version: 0,
          limit: 10,
          message_count_per_conv: 10
        });
        let {
          cells: b,
          has_more: h,
          next_cursor: g,
          extra: C
        } = y ?? {};
        let O = ((b == null ? undefined : b.filter(n => {
          return n.conversation?.bot_type !== chatConstantsEnum.specificBotType.COCO;
        })) ?? []).map(n => chatConversationTransformer.transformConversationChat(n)).filter(n => n !== undefined);
        return {
          code: p,
          msg: m,
          data: {
            main_thread: chatConversationTransformer.transformConversationChat(b == null ? undefined : b.find(n => {
              return n.conversation?.bot_type === chatConstantsEnum.specificBotType.COCO;
            })),
            threads: {
              has_more: h,
              next_cursor: g,
              thread_list: O
            },
            samantha_bot: (C == null ? undefined : C.extra?.coco_bot_id) ? {
              bot_id: C == null ? undefined : C.extra?.coco_bot_id,
              name: C == null ? undefined : C.extra?.coco_bot_name,
              icon_url: C == null ? undefined : C.extra?.coco_bot_icon_url
            } : undefined,
            can_chat: (C == null ? undefined : C.extra?.can_chat) !== undefined ? (C == null ? undefined : C.extra?.can_chat) === "true" : undefined,
            can_create_thread: (C == null ? undefined : C.extra?.can_create_thread) !== undefined ? (C == null ? undefined : C.extra?.can_create_thread) === "true" : undefined,
            can_send_message: (C == null ? undefined : C.extra?.can_send_message) !== undefined ? (C == null ? undefined : C.extra?.can_send_message) === "true" : undefined,
            reply_limit: C == null ? undefined : C.extra?.reply_limit
          }
        };
      });
      O(this, "getConversationInfo", async n => getConversationInfoModule.getConversationInfo(n));
      O(this, "getConversationBasicInfo", async n => {
        let {
          conversation_id: t
        } = n;
        return await getConversationInfoModule.getConversationInfo({
          conversation_id: t
        });
      });
      O(this, "updateConversationInfo", n => {
        let {
          conversation_id: t,
          name: e
        } = n;
        return d(t, e ?? "");
      });
      O(this, "deleteConversation", n => {
        let {
          conversation_ids: t,
          delete_all: e
        } = n;
        return C(t ?? [], e != null && e);
      });
      O(this, "conversationInfoAddBot", n => y(n));
      O(this, "getConversationCount", async () => b());
      O(this, "markConversationRead", n => {
        return p(n.conversation_id ?? "", String(n.latest_read_idx ?? ""));
      });
      O(this, "clearConversationHistory", n => {
        return h(n.conversation_id ?? "");
      });
      O(this, "clearConversationContext", n => {
        return g(n.conversation_id ?? "");
      });
      O(this, "pin", async n => {
        let {
          conversation_id: t
        } = n;
        return v(t, chatConstantsEnum.convOperateType.TOP);
      });
      O(this, "unpin", n => {
        let {
          conversation_id: t
        } = n;
        return v(t, chatConstantsEnum.convOperateType.CANCEL_TOP);
      });
      O(this, "getFeed", () => this.getTouristConversationList());
      O(this, "threadCreate", async n => u(n));
      O(this, "getThreadShareInfo", async n => {
        let t = throttledOmitPathStringify.omitPathStringify(n, ["thread_id"]);
        return await apiServicesCollection.SamanthaApiService.GetThreadShareInfo(t);
      });
      O(this, "saveThreadShareInfo", async n => {
        let t = throttledOmitPathStringify.omitPathStringify(n, ["thread_id"]);
        return await apiServicesCollection.SamanthaApiService.SaveThreadShareInfo(t);
      });
      O(this, "createCollection", async n => {
        if (n == null ? undefined : n.collection?.thread) {
          n.collection.thread.thread_id = "0";
        }
        return await apiServicesCollection.SamanthaApiService.CreateCollection(n);
      });
    }
  }
  let T = () => Promise.resolve(new z());
  let A = () => new z();
  require.d(exports, {
    AliceChatService: function () {
      return T;
    },
    getAliceChatService: function () {
      return A;
    }
  });
}