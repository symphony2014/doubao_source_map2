// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'r' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'o' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 's' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'l' to 'arrayFindLastIndexUtil'
// - Resolved require(832584) to 'array-find-last-index-util'
// - Renamed variable 'a' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'c' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'u' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'E' to 'chatInputStoreFactory'
// - Resolved require(172306) to 'chat-input-store-factory'
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Uy' to 'produce' (module 828474)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'findLastIndex' (module 832584)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'c' to 'initialChatInputState' (module 172306)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 509942
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let d = e => {
    chatStoreManager.getStore("chatInputStore").setState({
      recommendSkills: e
    });
  };
  let p = e => {
    let {
      recommendSkills: t
    } = chatStoreManager.getStoreState("chatInputStore");
    if (!t || t.length === 0) {
      return false;
    }
    let n = t == null ? undefined : t[0];
    return !!n && n.skill_type === e;
  };
  let _ = e => {
    if (p(e)) {
      let e = [...(chatStoreManager.getStoreState("chatInputStore").recommendSkills ?? [])];
      e.shift();
      chatStoreManager.getStore("chatInputStore").setState({
        recommendSkills: e
      });
    }
  };
  let v = e => {
    chatStoreManager.getStore("chatInputStore").setState(immerCoreImplementation.produce(t => {
      t.skillConfig = {
        ...t.skillConfig,
        ...e
      };
    }));
  };
  let h = e => {
    let {
      skillType: n,
      eventName: r,
      ...o
    } = e;
    chatStoreManager.getStore("chatInputStore").setState(immerCoreImplementation.produce(e => {
      var t;
      var i;
      if ((i = e.skillReportEvents[n]) !== null && i !== undefined && (t = i[r]) !== null && t !== undefined) {
        t.cancel();
      }
      e.skillReportEvents[n] = {
        [r]: eventReportingService.createEventReporter({
          eventName: r,
          ...o,
          once: true
        })
      };
    }));
    return chatStoreManager.getStoreState("chatInputStore").skillReportEvents[n]?.[r];
  };
  let m = e => {
    let {
      skillType: n,
      eventName: r
    } = e;
    return chatStoreManager.getStoreState("chatInputStore").skillReportEvents[n]?.[r];
  };
  let f = () => {
    chatStoreManager.getStore("chatInputStore").setState({
      skillReportEvents: {}
    });
  };
  let g = (e, t) => {
    chatStoreManager.getStore("chatInputStore").setState(immerCoreImplementation.produce(n => {
      n.sendMessageStatusMap[e] = t;
    }));
  };
  let y = e => chatStoreManager.getStore("chatInputStore").setState({
    skill_drop_down_visible: e
  });
  let b = (e, t) => {
    chatStoreManager.getStore("chatInputStore").setState(immerCoreImplementation.produce(n => {
      let r = n.sendMessageStatusMap[e];
      if (!isUndefinedCheck.isUndefined(r)) {
        n.sendMessageStatusMap[t] = r;
        setTimeout(() => {
          chatStoreManager.getStore("chatInputStore").setState(immerCoreImplementation.produce(t => {
            delete t.sendMessageStatusMap[e];
          }));
        }, 30000);
      }
    }));
  };
  let S = (e, t) => {
    chatStoreManager.getStore("chatInputStore").setState(immerCoreImplementation.produce(n => {
      n.userPreferences[e] = t;
    }));
  };
  let k = async e => {
    let {
      inputSkills: t
    } = chatStoreManager.getStoreState("chatInputStore");
    if (!t) {
      return;
    }
    let n = t.find(t => t.skill_type === e);
    let r = t.findIndex(t => t.skill_type === e);
    if (!n || n.sticky) {
      return;
    }
    let o = eventReportingService.createEventReporter({
      eventName: "pin_skill_order",
      meta: {
        skill_type: e
      }
    });
    let a = objectPathGetDefault.getObjectPathDefault(chatStoreManager.getStoreState("launcherRawSettingStore"), "settingData.ab_config.ab_results.trim_landing_page_skills") ? -1 : arrayFindLastIndexUtil.findLastIndex(t, e => !!e.sticky);
    let d = [...t];
    d.splice(r, 1);
    d.splice(a + 1, 0, n);
    try {
      await apiServicesCollection.SamanthaApiService.UpdateSkillsOrder({
        input_skill: d,
        latest_used_skill: e
      });
      chatStoreManager.getStore("chatInputStore").setState({
        inputSkills: d
      });
      chatStoreManager.getStore("skillStore").setState({
        inputSkills: d
      });
      _(e);
      o.addDurationPoint("success");
      o.success();
    } catch (e) {
      o.error({
        error: e instanceof Error ? e : Error(String(e)),
        reason: "update_skills_order_error"
      });
    }
  };
  let T = async e => {
    if (p(e)) {
      let t = eventReportingService.createEventReporter({
        eventName: "close_recommend_skill",
        meta: {
          skill_type: e
        }
      });
      try {
        await apiServicesCollection.SamanthaApiService.DisableRecommendSkill({
          skill_type: e
        });
        _(e);
        t.addDurationPoint("success");
        t.success();
      } catch (e) {
        t.error({
          error: e instanceof Error ? e : Error(String(e)),
          reason: "close_recommend_skill_error"
        });
      }
    }
  };
  let w = e => {
    chatStoreManager.getStore("chatInputStore").setState({
      selectedRecommendSkill: e
    });
  };
  var chatInputStoreFactory = require("chat-input-store-factory") /*id: 172306*/;
  function C(e, t, n) {
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
  class x {
    initEventBinding() {
      chatEventEmitter.chatEmitter.on("chat.service.resetAll", this.resetStore);
    }
    unbindEvent() {
      chatEventEmitter.chatEmitter.off("chat.service.resetAll", this.resetStore);
    }
    constructor() {
      C(this, "updateSkillConfig", v);
      C(this, "createSkillReportEvent", h);
      C(this, "getSkillReportEvent", m);
      C(this, "resetSkillReportEvent", f);
      C(this, "updateUserPreferences", S);
      C(this, "updateSendMessageStatus", g);
      C(this, "updateSkillDropDownVisible", y);
      C(this, "moveSendMessageStatus", b);
      C(this, "pinSkill", k);
      C(this, "updateRecommendSkills", d);
      C(this, "disableRecommendSkill", T);
      C(this, "updateSelectedRecommendSkill", w);
      C(this, "destroy", () => {
        this.unbindEvent();
      });
      C(this, "resetStore", () => {
        chatStoreManager.getStore("chatInputStore").setState(chatInputStoreFactory.initialChatInputState);
      });
      this.initEventBinding();
    }
  }
  require.r(exports);
  require.d(exports, {
    ChatInputStoreService: function () {
      return x;
    }
  });
}