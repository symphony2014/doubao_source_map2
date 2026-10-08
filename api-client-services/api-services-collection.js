// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A1' to 'SamanthaImApiService'
// - Renamed export 'mg' to 'CommerceBenefitSupplyApiService'
// - Renamed export 'ue' to 'AgentSupertaskApiService'
// - Renamed export 'Wu' to 'SettingApiService'
// - Renamed export 'IJ' to 'WritingFacadeApiService'
// - Renamed export 'Np' to 'PrivacyApiService'
// - Renamed export 'tK' to 'AiPptFacadeApiService'
// - Renamed export 'Ts' to 'SearchApiService'
// - Renamed export 'YD' to 'WorkspaceApiService'
// - Renamed export 'Ox' to 'AliceBotApiService'
// - Renamed export 'kz' to 'MessageApiService'
// - Renamed export 'IT' to 'OtterConvertApiService'
// - Renamed export 'jT' to 'FlowChatXmemoryApiService'
// - Renamed export 'XA' to 'AliceApiService'
// - Renamed export 'UZ' to 'ProfileApiService'
// - Renamed export 'eB' to 'AiPptTemplateFacadeApiService'
// - Renamed export 'JF' to 'OtterCoreApiService'
// - Renamed export 'Qd' to 'SafetyApiService'
// - Renamed export 'qj' to 'AispaceFacadeApiService'
// - Renamed export 'rO' to 'AudioApiService'
// - Renamed export 'xh' to 'CommerceBenefitSupplyService'
// - Renamed export 'qu' to 'AliceConversationApiService'
// - Renamed export 'Mz' to 'CreationArtifactApiService'
// - Renamed export 'cp' to 'AccountApiService'
// - Renamed export 'Vc' to 'OtterCodeApiService'
// - Renamed export 'Z' to 'OtterDocApiService'
// - Renamed export 'mH' to 'SamanthaApiService'
// - Renamed export 'SI' to 'ResourceApiService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 26176.44607400.js
         * chunkId: 26176
         * moduleId: 147875
         */
module.exports = function (module, exports, require) {
  var flowApiServiceProxy = require("flow-api-service-proxy") /*id: 538321*/;
  function r(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function a(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class n {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWWorkspaceSSOSubmitAuthCode(e, t) {
      let s = this.genBaseURL("/samantha/workspace/sso/submit_auth_code");
      let i = {
        email: e.email,
        auth_code: e.auth_code,
        redirect_uri: e.redirect_uri
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWCreateWorkspace(e, t) {
      let s = this.genBaseURL("/samantha/workspace/workspace/create");
      let i = {
        name: e.name,
        avatar_uri: e.avatar_uri,
        reentry_key: e.reentry_key
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceCreateInvitations(e, t) {
      let s = this.genBaseURL("/samantha/workspace/invitation/create");
      let i = {
        targets: e.targets
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceEnableUser(e, t) {
      let s = this.genBaseURL("/samantha/workspace/user/enable");
      let i = {
        target_user_id: e.target_user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceSSOGetConfig(e, t) {
      let s = this.genBaseURL("/samantha/workspace/sso/get_config");
      let i = {
        email: e.email
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetWorkspaces(e, t) {
      let s = this.genBaseURL("/samantha/workspace/workspace/get_workspaces");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWDeleteWorkspace(e, t) {
      let s = this.genBaseURL("/samantha/workspace/workspace/delete");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWWorkspaceBanUser(e, t) {
      let s = this.genBaseURL("/samantha/workspace/user/ban");
      let i = {
        target_user_id: e.target_user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceSSOSubmitForCreateAccount(e, t) {
      let s = this.genBaseURL("/samantha/workspace/sso/submit_for_create_account");
      let i = {
        profile_key: e.profile_key,
        verify_ticket: e.verify_ticket
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceHandleInvitation(e, t) {
      let s = this.genBaseURL("/samantha/workspace/invitation/handle");
      let i = {
        invitation_id: e.invitation_id,
        action: e.action
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceRevokeInvitation(e, t) {
      let s = this.genBaseURL("/samantha/workspace/invitation/revoke");
      let i = {
        invitation_id: e.invitation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceRevokeUser(e, t) {
      let s = this.genBaseURL("/samantha/workspace/user/revoke");
      let i = {
        target_user_id: e.target_user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceListUser(e, t) {
      let s = this.genBaseURL("/samantha/workspace/user/list");
      let i = {
        page_number: e.page_number,
        page_size: e.page_size,
        keyword: e.keyword
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceGetTransferInfo(e, t) {
      let s = this.genBaseURL("/samantha/workspace/transfer/get_info");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWWorkspaceTransferCheckOwnerSMS(e, t) {
      let s = this.genBaseURL("/samantha/workspace/transfer/check_owner_sms");
      let i = {
        owner_sms_code: e.owner_sms_code
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetWorkspaceSetting(e, t) {
      let s = this.genBaseURL("/samantha/workspace/workspace/get_workspace_setting");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWUpdateWorkspaceSetting(e, t) {
      let s = this.genBaseURL("/samantha/workspace/workspace/update_workspace_setting");
      let i = {
        data: e.data
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceTransferSendOwnerSMS(e, t) {
      let s = this.genBaseURL("/samantha/workspace/transfer/send_owner_sms");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWWorkspaceTransferSendTargetSMS(e, t) {
      let s = this.genBaseURL("/samantha/workspace/transfer/send_target_sms");
      let i = {
        target_user_id: e.target_user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceTransferDoTransfer(e, t) {
      let s = this.genBaseURL("/samantha/workspace/transfer/do_transfer");
      let i = {
        owner_verify_ticket: e.owner_verify_ticket,
        target_user_id: e.target_user_id,
        target_sms_code: e.target_sms_code
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceSearchUser(e, t) {
      let s = this.genBaseURL("/samantha/workspace/user/search");
      let i = {
        scene: e.scene,
        keyword: e.keyword
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWWorkspaceListInvitation(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/workspace/invitation/list");
      let r = {
        keyword: s.keyword,
        page_size: s.page_size,
        page_number: s.page_number
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWWorkspaceUpdateUserRole(e, t) {
      let s = this.genBaseURL("/samantha/workspace/user/update_role");
      let i = {
        target_user_id: e.target_user_id,
        role: e.role
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      a(this, "request", () => {
        throw Error("WorkspaceApiService.request is undefined");
      });
      a(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  }
  function o(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function _(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function d(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function u(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class h {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWConversationList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/im/conversation/list");
      let r = {
        cursor: s.cursor,
        batch_size: s.batch_size,
        conversation_types: s.conversation_types
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWConversationUnpin(e, t) {
      let s = this.genBaseURL("/samantha/im/conversation/unpin");
      let i = {
        conversation_id: (e || {}).conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWConversationPin(e, t) {
      let s = this.genBaseURL("/samantha/im/conversation/pin");
      let i = {
        conversation_id: (e || {}).conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWConversationBasicInfo(e, t) {
      let s = this.genBaseURL("/samantha/im/conversation/basic_info");
      let i = {
        conversation_id: (e || {}).conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWUpdateContentBlock(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/im/message/content_block/update");
      let r = {
        message_id: s.message_id,
        content_block: s.content_block
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWBatchDeleteConversation(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/im/conversation/batch_delete");
      let r = {
        conversation_ids: s.conversation_ids,
        delete_all: s.delete_all
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetConversationCount(e, t) {
      let s = this.genBaseURL("/samantha/im/conversation/count");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    constructor(e) {
      u(this, "request", () => {
        throw Error("SamanthaImApiService.request is undefined");
      });
      u(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  }
  function l(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function c(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function m(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function g(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function p(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function b(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function f(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function v(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function y(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function U(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function R(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function L(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function S(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class q {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWPing(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/ping");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWJoinGroup(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/commerce/benefit_supply/fission/join_group");
      let r = {
        invite_code: s.invite_code,
        campaign_key: s.campaign_key
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetFissionCampaignInfo(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/fission/get_campaign_info");
      let i = {
        campaign_key: (e || {}).campaign_key
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetGroupExternalInfo(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/fission/get_group_external_info");
      let i = {
        encrypt_group_id: (e || {}).encrypt_group_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetFissionGroupInvitation(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/fission/get_group_invitation");
      let i = {
        campaign_key: (e || {}).campaign_key
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetUserIsNewFlag(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/fission/get_user_is_new_flag");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWGetJoinGroupInfo(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/fission/get_join_group_info");
      let i = {
        campaign_key: (e || {}).campaign_key
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetCreditNumAndOptionalTasks(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/credit/get_credit_num_optional_tasks");
      let i = {
        need_tasks: (e || {}).need_tasks
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetCreditUsageHistory(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/commerce/benefit_supply/credit/get_credit_usage_history");
      let r = {
        cursor: s.cursor,
        size: s.size,
        transaction_type: s.transaction_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWUserActivity(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/credit/user_activity");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWGetCreditTip(e, t) {
      let s = this.genBaseURL("/commerce/benefit_supply/credit/get_credit_tip");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    constructor(e) {
      S(this, "request", () => {
        throw Error("CommerceBenefitSupplyApiService.request is undefined");
      });
      S(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  }
  function B(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function P(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function T(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function k(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function O(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function G(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function w(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function A(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  function C(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  let x = flowApiServiceProxy.createServiceProxy("alice", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    CheckUpdate(e, t) {
      let s = this.genBaseURL("/alice/update/check");
      let i = {
        package_type: (e || {}).package_type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetQuery(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/query");
      let r = {
        query_text: s.query_text,
        source: s.source
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadVideoTT(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/source/2");
      let r = {
        query: s.query,
        search_id: s.search_id,
        item_ids: s.item_ids,
        offset: s.offset,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadVideoDY(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/source/3");
      let r = {
        query: s.query,
        search_id: s.search_id,
        item_ids: s.item_ids,
        offset: s.offset,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DebugPromptDetail(e, t) {
      let s = this.genBaseURL("/alice/debug/prompt_detail");
      let i = {
        message_id: e.message_id,
        type_list: e.type_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MCheckMusic(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/mcheck/music");
      let r = {
        check_list: s.check_list,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    Report(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/report/create");
      let r = {
        report_type: s.report_type,
        entity_id: s.entity_id,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail,
        index_in_conversation: s.index_in_conversation,
        conversation_id: s.conversation_id,
        report_source: s.report_source,
        conversation_template: s.conversation_template,
        ai_space_folder_share: s.ai_space_folder_share,
        extra: s.extra,
        batch_message_ids: s.batch_message_ids
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    TemplateRecommendRelated(e, t) {
      let s = this.genBaseURL("/alice/template/recommend_related");
      let i = {
        template_type: e.template_type,
        template_id: e.template_id,
        offset: e.offset,
        size: e.size,
        enter_time: e.enter_time
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    TemplateRecommendList(e, t) {
      let s = this.genBaseURL("/alice/template/recommend_list");
      let i = {
        template_type: e.template_type,
        offset: e.offset,
        size: e.size,
        token: e.token
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    LoadMusicQS(e, t) {
      let s = this.genBaseURL("/alice/media/source/4");
      let i = {
        vid_list: (e || {}).vid_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetMsgTemplates(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/msg_template/get");
      let r = {
        cursor: s.cursor,
        size: s.size,
        template_lang: s.template_lang,
        cold_start: s.cold_start
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SearchCards(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/card_search");
      let r = {
        query_params: s.query_params,
        query_type: s.query_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ListRootSpans(e, t) {
      let s = this.genBaseURL("/alice/debug/list_root_span");
      let i = {
        filter_tags: e.filter_tags,
        start_at: e.start_at,
        end_at: e.end_at,
        limit: e.limit,
        desc_by_start_time: e.desc_by_start_time,
        offset: e.offset
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetTraceSDK(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/debug/get_trace_sdk");
      let r = {
        trace_id: s.trace_id,
        log_id: s.log_id,
        scene: s.scene,
        start_at: s.start_at,
        end_at: s.end_at,
        message_id: s.message_id,
        tenant: s.tenant,
        token: s.token,
        tenant_level: s.tenant_level
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      k(this, "request", () => {
        throw Error("AliceApiService.request is undefined");
      });
      k(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let E = flowApiServiceProxy.createServiceProxy("bot", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    GenBotIcon(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/gen_icon");
      let r = {
        name: s.name,
        description: s.description,
        bot_lang: s.bot_lang
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GenBotIconByPrompt(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/gen_icon_by_prompt");
      let r = {
        prompt: s.prompt,
        num: s.num,
        image_req: s.image_req,
        creation_id_info: s.creation_id_info
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetBotList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/get_bot_list");
      let r = {
        bot_ids: s.bot_ids,
        bot_list_type: s.bot_list_type,
        pageIndex: s.pageIndex,
        pageSize: s.pageSize
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadFile(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/upload_file");
      let r = {
        file_head: s.file_head,
        data: s.data
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    RecommendBots(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/recommend");
      let r = {
        recommend_type: s.recommend_type,
        page_index: s.page_index,
        page_size: s.page_size,
        bot_ids: s.bot_ids,
        tag_id: s.tag_id,
        msg_list: s.msg_list,
        cold_start: s.cold_start,
        old_bot_id: s.old_bot_id,
        first_bot_id: s.first_bot_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LanguageList(e, t) {
      let s = this.genBaseURL("/alice/bot/language_list");
      let i = {
        bot_id: e.bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CreateBot(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/create");
      let r = {
        name: s.name,
        description_for_human: s.description_for_human,
        icon_uri: s.icon_uri,
        private_status: s.private_status,
        voice_type: s.voice_type,
        ugc_voice: s.ugc_voice,
        bot_lang: s.bot_lang,
        muted: s.muted,
        use_bot_enrich: s.use_bot_enrich,
        enable_web_search: s.enable_web_search,
        enable_pic_gen: s.enable_pic_gen,
        first_met: s.first_met,
        use_bot_enrich_edit: s.use_bot_enrich_edit,
        create_channel: s.create_channel,
        bg_img_uri: s.bg_img_uri,
        bg_img_info: s.bg_img_info,
        user_bot_gender_starling_key: s.user_bot_gender_starling_key,
        user_bot_type_starling_key: s.user_bot_type_starling_key,
        bio: s.bio,
        creation_id_info: s.creation_id_info,
        original_user_img_uri: s.original_user_img_uri
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    EnrichBot(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/enrich");
      let r = {
        name: s.name,
        bot_lang: s.bot_lang,
        need_desc: s.need_desc,
        need_voice_type: s.need_voice_type,
        user_bot_gender_starling_key: s.user_bot_gender_starling_key,
        user_bot_type_starling_key: s.user_bot_type_starling_key,
        bg_img_prompt: s.bg_img_prompt,
        data: s.data,
        desc: s.desc,
        creation_id_info: s.creation_id_info
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateBot(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/update_bot");
      let r = {
        bot_id: s.bot_id,
        name: s.name,
        description_for_human: s.description_for_human,
        icon_uri: s.icon_uri,
        model_type: s.model_type,
        voice_type: s.voice_type,
        delete: s.delete,
        bot_lang: s.bot_lang,
        muted: s.muted,
        private_status: s.private_status,
        ugc_voice: s.ugc_voice,
        message_push: s.message_push,
        enable_web_search: s.enable_web_search,
        enable_pic_gen: s.enable_pic_gen,
        first_met: s.first_met,
        bg_img_uri: s.bg_img_uri,
        bg_img_info: s.bg_img_info,
        dynamic_img_uri: s.dynamic_img_uri,
        bot_icon_mapped_app_icon: s.bot_icon_mapped_app_icon,
        bot_memory_switch_status: s.bot_memory_switch_status,
        reset_bot_memory_hint_status: s.reset_bot_memory_hint_status,
        bio: s.bio,
        use_bot_enrich: s.use_bot_enrich,
        use_bot_enrich_edit: s.use_bot_enrich_edit,
        original_user_img_uri: s.original_user_img_uri
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    VoiceTypeList(e, t) {
      let s = this.genBaseURL("/alice/bot/voice_type_list");
      let i = {
        bot_id: e.bot_id,
        bot_language_code: e.bot_language_code
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    BotInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/info");
      let r = {
        token: s.token,
        botId: s.botId
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetBotSubject(e, t) {
      let s = this.genBaseURL("/alice/bot/get_bot_subject");
      let i = {
        bot_id: (e || {}).bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateCallerName(e, t) {
      let s = this.genBaseURL("/alice/bot/update_caller_name");
      let i = {
        bot_id: e.bot_id,
        caller_name: e.caller_name
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBotPreset(e, t) {
      let s = this.genBaseURL("/alice/bot/get_bot_preset");
      let i = {
        bot_id: (e || {}).bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetFirstMet(e, t) {
      let s = this.genBaseURL("/alice/bot/first_met");
      let i = {
        bot_id: e.bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBot(e, t) {
      let s = this.genBaseURL("/alice/bot/get_bot");
      let i = {
        bot_id: e.bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBotListV2(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/get_bot_list_v2");
      let r = {
        bot_id_list: s.bot_id_list,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ActionBarList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/action_bar_list");
      let r = {
        language_code: s.language_code,
        bot_id: s.bot_id,
        conversation_id: s.conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ActionBarOperationReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/action_bar_report");
      let r = {
        language_code: s.language_code,
        bot_id: s.bot_id,
        action_bar_key: s.action_bar_key,
        passthrough_field: s.passthrough_field,
        switch_report: s.switch_report,
        instruction_report: s.instruction_report
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ActionCards(e, t) {
      let s = this.genBaseURL("/alice/bot/action_cards");
      let i = {
        bot_id: e.bot_id,
        card_scene: e.card_scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ReviewBotInfo(e, t) {
      let s = this.genBaseURL("/alice/bot/review_bot_info");
      let i = {
        bot_info: (e || {}).bot_info
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetAvatarHeadLocation(e, t) {
      let s = this.genBaseURL("/alice/bot/avatar_head_location");
      let i = {
        image_uri_list: (e || {}).image_uri_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetImgAvgHue(e, t) {
      let s = this.genBaseURL("/alice/bot/get_img_avg_hue");
      let i = {
        image_uri: (e || {}).image_uri
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CheckBotAuth(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/check_bot_auth");
      let r = {
        client_key: s.client_key,
        scope: s.scope,
        state: s.state
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PluginAuth(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/plugin_auth");
      let r = {
        bot_id: s.bot_id,
        plugin_ids: s.plugin_ids,
        op_type: s.op_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PluginDetail(e, t) {
      let s = this.genBaseURL("/alice/bot/plugin_detail");
      let i = {
        plugin_id: (e || {}).plugin_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PluginList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/plugin_list");
      let r = {
        bot_id: s.bot_id,
        page_no: s.page_no,
        page_size: s.page_size
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetBotCreateQuota(e, t) {
      let s = this.genBaseURL("/alice/bot/get_bot_create_quota");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    Mock(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/mock");
      let r = {
        delete_current_week: s.delete_current_week,
        AddTime: s.AddTime,
        Uid: s.Uid
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    EnrichBotCheck(e, t) {
      let s = this.genBaseURL("/alice/bot/enrich_check");
      let i = {
        enrich_bot_content: (e || {}).enrich_bot_content
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    BatchDeleteBotMemory(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/batch_delete_memory");
      let r = {
        bot_id: s.bot_id,
        memory_ids: s.memory_ids
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ListBotMemory(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/list_memory");
      let r = {
        bot_id: s.bot_id,
        offset: s.offset,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ClearBotMemory(e, t) {
      let s = this.genBaseURL("/alice/bot/clear_memory");
      let i = {
        bot_id: (e || {}).bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    InsertBotMemory(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/insert_memory");
      let r = {
        bot_id: s.bot_id,
        memory_content: s.memory_content
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SkillCards(e, t) {
      let s = this.genBaseURL("/alice/bot/skill_cards");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    ResetBotSubject(e, t) {
      let s = this.genBaseURL("/alice/bot/reset_subject");
      let i = {
        bot_id: e.bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateMusicGenTemplateCount(e, t) {
      let s = this.genBaseURL("/alice/bot/update_music_gen_template_count");
      let i = {
        template_id: e.template_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ListMusicGenTemplate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/list_music_gen_template");
      let r = {
        random_seed: s.random_seed,
        offset: s.offset,
        limit: s.limit,
        need_more_template_cover: s.need_more_template_cover
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ListAvatarGenTemplate(e, t) {
      let s = this.genBaseURL("/alice/bot/list_avatar_gen_template");
      let i = {
        random_seed: e.random_seed,
        offset: e.offset,
        size: e.size,
        bot_id: e.bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBotFavor(e, t) {
      let s = this.genBaseURL("/alice/bot/get_bot_favor_window");
      let i = {
        bot_id: (e || {}).bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SetBotFavor(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/set_bot_favor");
      let r = {
        bot_id: s.bot_id,
        bot_favor: s.bot_favor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ReviewUgcImage(e, t) {
      let s = this.genBaseURL("/alice/bot/review_ugc_image");
      let i = {
        image_uri: (e || {}).image_uri
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ActionBarReportV3(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/action_bar_v3/report");
      let r = {
        language_code: s.language_code,
        bot_id: s.bot_id,
        action_bar_key: s.action_bar_key,
        conversation_id: s.conversation_id,
        page_scene: s.page_scene,
        switch_report: s.switch_report,
        instruction_report: s.instruction_report
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ActionBarListV3(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/action_bar_v3/list");
      let r = {
        language_code: s.language_code,
        bot_id: s.bot_id,
        instruction_code_version: s.instruction_code_version,
        conversation_id: s.conversation_id,
        page_scene: s.page_scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ActionBarCustomize(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/action_bar_v3/cumstomize");
      let r = {
        bot_id: s.bot_id,
        sorted_item_id_list: s.sorted_item_id_list
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LikeBotAction(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/like_action");
      let r = {
        bot_id: s.bot_id,
        operate_type: s.operate_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PolishBotDesc(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/polish_bot_desc");
      let r = {
        bot_id: s.bot_id,
        polish_bot_content: s.polish_bot_content,
        creation_id_info: s.creation_id_info
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadCommentList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/comment_list");
      let r = {
        entity_id: s.entity_id,
        pre_offset_token: s.pre_offset_token,
        anchor_comment_id: s.anchor_comment_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PostComment(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/comment_post");
      let r = {
        entity_id: s.entity_id,
        content: s.content,
        parent_id: s.parent_id,
        reply_to_id: s.reply_to_id,
        client_comment_id: s.client_comment_id,
        level: s.level
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadReplyList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/comment_reply_list");
      let r = {
        comment_id: s.comment_id,
        entity_id: s.entity_id,
        pre_offset_token: s.pre_offset_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DeleteComment(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/comment_del");
      let r = {
        comment_id: s.comment_id,
        entity_id: s.entity_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetRedDotCount(e, t) {
      let s = this.genBaseURL("/alice/bot/red_dot/get_count");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetCocoSettings(e, t) {
      let s = this.genBaseURL("/alice/bot/coco/settings");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    MarkRedDotAsRead(e, t) {
      let s = this.genBaseURL("/alice/bot/red_dot/mark_read");
      let i = {
        conversation_id: e.conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    LikeCommentAction(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/bot/like_comment_action");
      let r = {
        comment_id: s.comment_id,
        operate_type: s.operate_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      T(this, "request", () => {
        throw Error("AliceBotApiService.request is undefined");
      });
      T(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let W = flowApiServiceProxy.createServiceProxy("conversation", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    CreateSubConversation(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/create_sub_conversation");
      let r = {
        conversation_id: s.conversation_id,
        message_id: s.message_id,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationPin(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/pin");
      let r = {
        conversation_id: s.conversation_id,
        bot_id: s.bot_id,
        local_conversation_id: s.local_conversation_id,
        ext: s.ext
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationUpdate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/update");
      let r = {
        conversation_id: s.conversation_id,
        name: s.name,
        local_conversation_id: s.local_conversation_id,
        bot_id: s.bot_id,
        ext: s.ext
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/info");
      let r = {
        conversation_id: s.conversation_id,
        bot_id: s.bot_id,
        local_conversation_id: s.local_conversation_id,
        ext: s.ext,
        init_messages: s.init_messages,
        bot_source: s.bot_source,
        scene: s.scene,
        evaluate_ab_params: s.evaluate_ab_params
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationUnpin(e, t) {
      let s = this.genBaseURL("/alice/conversation/unpin");
      let i = {
        conversation_id: (e || {}).conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CreateSection(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/create_section");
      let r = {
        conversation_id: s.conversation_id,
        local_conversation_id: s.local_conversation_id,
        bot_id: s.bot_id,
        ext: s.ext
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MarkConversationRead(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/mark_conversation_read");
      let r = {
        conversation_id: s.conversation_id,
        latest_read_idx: s.latest_read_idx
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationArchive(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/archive");
      let r = {
        conversation_id: s.conversation_id,
        bot_id: s.bot_id,
        local_conversation_id: s.local_conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationInfoAddBot(e, t) {
      let s = this.genBaseURL("/alice/conversation/add_bot");
      let i = {
        token: (e || {}).token
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ConversationClear(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/clear");
      let r = {
        conversation_id: s.conversation_id,
        local_conversation_id: s.local_conversation_id,
        bot_id: s.bot_id,
        ext: s.ext
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/list");
      let r = {
        index: s.index,
        batch_size: s.batch_size,
        conversation_types: s.conversation_types
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ConversationReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/conversation/report");
      let r = {
        conversation_id: s.conversation_id,
        conversation_type: s.conversation_type,
        bot_conversation_type: s.bot_conversation_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      P(this, "request", () => {
        throw Error("AliceConversationApiService.request is undefined");
      });
      P(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let j = flowApiServiceProxy.createServiceProxy("message", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    StreamCallBot(e, t) {
      let s = this.genBaseURL("/alice/message/stream_call_bot");
      let i = {
        payload: (e || {}).payload
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    LoadMusicQS(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/source/4");
      let r = {
        vid_list: s.vid_list,
        source_id_list: s.source_id_list
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageReplay(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/replay");
      let r = {
        payload: s.payload,
        evaluate_ab_params: s.evaluate_ab_params,
        evaluate_common_params: s.evaluate_common_params
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/list");
      let r = {
        conversation_id: s.conversation_id,
        cursor: s.cursor,
        batch_size: s.batch_size,
        bot_id: s.bot_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadVideoDY(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/source/3");
      let r = {
        query: s.query,
        search_id: s.search_id,
        item_ids: s.item_ids,
        offset: s.offset,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SearchCards(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/card_search");
      let r = {
        query_params: s.query_params,
        query_type: s.query_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageStream(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/stream_reply");
      let r = {
        seq_st: s.seq_st,
        seq_ed: s.seq_ed,
        reply_id: s.reply_id,
        binary_type: s.binary_type,
        token: s.token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/report");
      let r = {
        message_id: s.message_id,
        reply_id: s.reply_id,
        action: s.action,
        position: s.position,
        feedbackDetail: s.feedbackDetail,
        conversation_id: s.conversation_id,
        feedbackSource: s.feedbackSource
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMessageReply(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/get_reply");
      let r = {
        message_id: s.message_id,
        conversation_id: s.conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadVideoTT(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/source/2");
      let r = {
        query: s.query,
        search_id: s.search_id,
        item_ids: s.item_ids,
        offset: s.offset,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateMsgContent(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/update_content");
      let r = {
        msg_id: s.msg_id,
        display_content: s.display_content,
        content: s.content,
        need_social_adapter: s.need_social_adapter
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LatestMessageList(e, t) {
      let s = this.genBaseURL("/alice/conversation/latest_messagelist");
      let i = {
        request_list: (e || {}).request_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MCheckMusic(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/mcheck/music");
      let r = {
        check_list: s.check_list,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMsgContent(e, t) {
      let s = this.genBaseURL("/alice/message/content");
      let i = {
        msg_id: (e || {}).msg_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetAnswerActionContent(e, t) {
      let s = this.genBaseURL("/alice/message/answer_action_content");
      let i = {
        action_key: e.action_key,
        msg_id: e.msg_id,
        bot_id: e.bot_id,
        conversation_id: e.conversation_id,
        section_id: e.section_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CheckMessageSendRateLimit(e, t) {
      let s = this.genBaseURL("/alice/message/rate_limit");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    PutChatRecord(e, t) {
      let s = this.genBaseURL("/alice/message/put_chat_record");
      let i = {
        conversation_id: e.conversation_id,
        tool_message_id: e.tool_message_id,
        switch_message_id: e.switch_message_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CmdList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/cmd_list");
      let r = {
        last_cmd_index: s.last_cmd_index,
        batch_size: s.batch_size
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessagePreHandle(e, t) {
      let s = this.genBaseURL("/alice/message/pre_handle");
      let i = {
        content_type: e.content_type,
        content: e.content
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MessageListV2(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/list/v2");
      let r = {
        conversation_id: s.conversation_id,
        start_index: s.start_index,
        batch_size: s.batch_size,
        is_reverse: s.is_reverse,
        end_index: s.end_index
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageStreamV2(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/stream");
      let r = {
        seq_st: s.seq_st,
        seq_ed: s.seq_ed,
        reply_id: s.reply_id,
        binary_type: s.binary_type,
        token: s.token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SaveBotReply(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/save_bot_reply");
      let r = {
        user_id: s.user_id,
        conversation_id: s.conversation_id,
        bot_id: s.bot_id,
        question_id: s.question_id,
        contents: s.contents,
        suggests: s.suggests,
        source_type: s.source_type,
        for_historical_question: s.for_historical_question,
        suggests_v2: s.suggests_v2,
        biz_id: s.biz_id,
        tenant_id: s.tenant_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SaveMessageShareInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/share/save");
      let r = {
        conv_id: s.conv_id,
        message_id_list: s.message_id_list,
        enable_generate_title: s.enable_generate_title,
        is_allow_seo: s.is_allow_seo,
        share_total_conversation: s.share_total_conversation
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMessageShareInfo(e, t) {
      let s = this.genBaseURL("/alice/message/share/get");
      let i = {
        share_id: (e || {}).share_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MessageAfterAuthorization(e, t) {
      let s = this.genBaseURL("/alice/message/after_authorization");
      let i = {
        scene: (e || {}).scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MultiMessagePreHandle(e, t) {
      let s = this.genBaseURL("/alice/message/pre_handle_v2");
      let i = {
        uplink_entity: e.uplink_entity,
        conversation_id: e.conversation_id,
        bot_id: e.bot_id,
        section_id: e.section_id,
        local_message_id: e.local_message_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MessageEntityState(e, t) {
      let s = this.genBaseURL("/alice/message/entity_state");
      let i = {
        state_type: e.state_type,
        entity_info: e.entity_info
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBigMusicLyrics(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/bigmusic/lyrics");
      let r = {
        prompt: s.prompt,
        instruction_options: s.instruction_options
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateBigMusicMsg(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/bigmusic/update_message");
      let r = {
        message_id: s.message_id,
        title: s.title,
        cover_uri: s.cover_uri,
        task_id: s.task_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetBigMusicVideoInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/bigmusic/get_video");
      let r = {
        video_id: s.video_id,
        share_id: s.share_id,
        download_params: s.download_params,
        template_id: s.template_id,
        creation_id: s.creation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MultiMessagePreHandleWithoutConv(e, t) {
      let s = this.genBaseURL("/alice/message/pre_handle_v2_without_conv");
      let i = {
        uplink_entity: e.uplink_entity,
        bot_id: e.bot_id,
        local_message_id: e.local_message_id,
        pre_generate_id: e.pre_generate_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SaveBigMusicShareInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/bigmusic/share_save");
      let r = {
        message_id: s.message_id,
        task_id: s.task_id,
        creation_id: s.creation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetBigMusicLyricsWeb(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/bigmusic/lyrics_web");
      let r = {
        prompt: s.prompt,
        genre: s.genre,
        mood: s.mood
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageListDouyinPlayback(e, t) {
      let s = this.genBaseURL("/alice/message/douyin_playback");
      let i = {
        encryption_message_id_list: e.encryption_message_id_list,
        date: e.date,
        with_push_message: e.with_push_message
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateBigMusicMsgWeb(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/bigmusic/update_message_web");
      let r = {
        message_id: s.message_id,
        title: s.title,
        cover_uri: s.cover_uri,
        task_id: s.task_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMessageListByIndexList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/index_list");
      let r = {
        conversation_id: s.conversation_id,
        message_index_list: s.message_index_list,
        is_reverse: s.is_reverse
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadEventLog(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/event_log");
      let r = {
        question_id: s.question_id,
        timestamp: s.timestamp,
        section_id: s.section_id,
        conversation_id: s.conversation_id,
        event_type: s.event_type,
        key: s.key,
        value: s.value
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LoadVideoModel(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/video_model");
      let r = {
        query: s.query,
        search_id: s.search_id,
        item_ids: s.item_ids,
        offset: s.offset,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    QueryMatchInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/match_info");
      let r = {
        type: s.type,
        data: s.data,
        league_id: s.league_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    EvaluateSessionPlayback(e, t) {
      let s = this.genBaseURL("/alice/message/session_playback");
      let i = {
        encryption_message_id_list: e.encryption_message_id_list,
        from_date: e.from_date,
        to_date: e.to_date,
        with_push_message: e.with_push_message,
        source: e.source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateRecordMsg(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/update_record");
      let r = {
        msg_id: s.msg_id,
        status: s.status,
        need_social_adapter: s.need_social_adapter,
        duration: s.duration,
        meeting_id: s.meeting_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SaveExportInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/export/save");
      let r = {
        conv_id: s.conv_id,
        export_message_infos: s.export_message_infos,
        enable_generate_title: s.enable_generate_title,
        resource_id: s.resource_id,
        deep_research_report_id: s.deep_research_report_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetExportInfo(e, t) {
      let s = this.genBaseURL("/alice/message/export/get");
      let i = {
        export_id: (e || {}).export_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetDeepSearchCardInnerInfo(e, t) {
      let s = this.genBaseURL("/alice/message/deep_search/get");
      let i = {
        identify_id: (e || {}).identify_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetRecommendVideos(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/media/video/recommend");
      let r = {
        question_id: s.question_id,
        answer_id: s.answer_id,
        page_index: s.page_index,
        page_size: s.page_size,
        reply_item_ids: s.reply_item_ids,
        click_index: s.click_index,
        playlist_item_ids: s.playlist_item_ids,
        scene: s.scene,
        query: s.query,
        playlist_playtime: s.playlist_playtime,
        click_item_id: s.click_item_id,
        stream_index: s.stream_index
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetDeepResearchReport(e, t) {
      let s = this.genBaseURL("/alice/message/deep_research/get");
      let i = {
        identify_id: (e || {}).identify_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    RetryDeepResearchTask(e, t) {
      let s = this.genBaseURL("/alice/message/deep_research/retry");
      let i = {
        deep_research_id: (e || {}).deep_research_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ShareDeepResearchReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/deep_research/share");
      let r = {
        deep_research_id: s.deep_research_id,
        resource_id: s.resource_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetWebpage(e, t) {
      let s = this.genBaseURL("/alice/message/webpage/get");
      let i = {
        identify_id: (e || {}).identify_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ShareWebpage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/webpage/share");
      let r = {
        source: s.source,
        deep_research_id: s.deep_research_id,
        resource_id: s.resource_id,
        message_id: s.message_id,
        code: s.code,
        code_type: s.code_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetCodeRenderImage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/code_render_image/get");
      let r = {
        code: s.code,
        code_type: s.code_type,
        theme: s.theme
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MessageShareReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/share/report");
      let r = {
        share_id: s.share_id,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      U(this, "request", () => {
        throw Error("MessageApiService.request is undefined");
      });
      U(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let I = flowApiServiceProxy.createServiceProxy("samantha", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    GetFeed(e, t) {
      let s = this.genBaseURL("/samantha/feed");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    ThreadList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/list");
      let r = {
        index: s.index,
        batch_size: s.batch_size
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ThreadDelete(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/delete");
      let r = {
        thread_id: s.thread_id,
        conversation_id: s.conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ThreadUpdate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/update");
      let r = {
        thread_id: s.thread_id,
        conversation_id: s.conversation_id,
        name: s.name
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ThreadCreate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/create");
      let r = {
        conversation_id: s.conversation_id,
        message_id: s.message_id,
        bot_id: s.bot_id,
        samantha_onboarding: s.samantha_onboarding
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetSkillGuidance(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/guidance");
      let r = {
        config_key: s.config_key,
        option_indexes: s.option_indexes
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetRecommendSkills(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/recommend");
      let r = {
        omit_sidebar: s.omit_sidebar,
        omit_image: s.omit_image,
        omit_music: s.omit_music,
        omit_write: s.omit_write,
        omit_search: s.omit_search
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateOrGetMainThread(e, t) {
      let s = this.genBaseURL("/samantha/thread/main/create_or_get");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetSamanthaWebHitStatus(e, t) {
      let s = this.genBaseURL("/samantha/user/web_hit_status/get");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    UpdateSamanthaWebHitStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/user/web_hit_status/update");
      let r = {
        status: s.status,
        hit_source: s.hit_source,
        remind_time: s.remind_time
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DetectLang(e, t) {
      let s = this.genBaseURL("/samantha/plugin/detect_lang");
      let i = {
        raw_text: e.raw_text
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetThreadShareInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/share/info");
      let r = {
        thread_id: s.thread_id,
        conversation_id: s.conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetThreadShareSnapshot(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/share/snapshot/get");
      let r = {
        share_id: s.share_id,
        need_bot: s.need_bot,
        conv_share_id: s.conv_share_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SaveThreadShareInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/share/save");
      let r = {
        thread_id: s.thread_id,
        message_index_end: s.message_index_end,
        is_allow_seo: s.is_allow_seo,
        message_index_list: s.message_index_list,
        save_type: s.save_type,
        conversation_id: s.conversation_id,
        share_type: s.share_type,
        name: s.name,
        share_visibility: s.share_visibility,
        share_id: s.share_id,
        share_token: s.share_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DeleteShareThreadInfo(e, t) {
      let s = this.genBaseURL("/samantha/thread/share/delete");
      let i = {
        share_id: (e || {}).share_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetTouristFeed(e, t) {
      let s = this.genBaseURL("/samantha/feed/tourist_get");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetYouTubeShare(e, t) {
      let s = this.genBaseURL("/samantha/plugin/get_youtube_share");
      let i = {
        share_id: e.share_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    CreateYouTubeShare(e, t) {
      let s = this.genBaseURL("/samantha/plugin/youtube_share");
      let i = {
        content: e.content
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetUtmInfo(e, t) {
      let s = this.genBaseURL("/samantha/desktop/get_utm");
      let i = {
        id: (e || {}).id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    SaveUtmInfo(e, t) {
      let s = this.genBaseURL("/samantha/desktop/save_utm");
      let i = {
        info: (e || {}).info
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetLatestCRXInfo(e, t) {
      let s = this.genBaseURL("/samantha/plugin/latest_crx_info");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    Txt2Img(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/cozeplugin/txt2img");
      let r = {
        ratio: s.ratio,
        prompt: s.prompt,
        style: s.style
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    Translate(e, t) {
      let s = this.genBaseURL("/samantha/plugin/translate");
      let i = {
        raw_text: e.raw_text,
        source_lang: e.source_lang,
        target_lang: e.target_lang,
        translate_service: e.translate_service,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PluginDeletePromptSkill(e, t) {
      let s = this.genBaseURL("/samantha/plugin/prompt_skill/delete");
      let i = {
        item_id: e.item_id,
        user_setting: e.user_setting,
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PluginAddPromptSkill(e, t) {
      let s = this.genBaseURL("/samantha/plugin/prompt_skill/add");
      let i = {
        items: e.items,
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PluginListDiscoverSkills(e, t) {
      let s = this.genBaseURL("/samantha/plugin/prompt_skill/list_discover_skills");
      let i = {
        page_size: e.page_size,
        start_index: e.start_index,
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ListCustomPSByUser(e, t) {
      let s = this.genBaseURL("/samantha/plugin/prompt_skill/list_by_user");
      let i = {
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PluginSavePSSetting(e, t) {
      let s = this.genBaseURL("/samantha/plugin/prompt_skill/save_setting");
      let i = {
        user_setting: e.user_setting,
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PluginUpdatePromptSkill(e, t) {
      let s = this.genBaseURL("/samantha/plugin/prompt_skill/update");
      let i = {
        item: e.item,
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetSetting(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/user/setting/get");
      let r = {
        ab_param: s.ab_param,
        select: s.select
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateSetting(e, t) {
      let s = this.genBaseURL("/samantha/user/setting/update");
      let i = {
        ogf_enable: (e || {}).ogf_enable
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    Revise(e, t) {
      let s = this.genBaseURL("/samantha/plugin/revise");
      let i = {
        items: (e || {}).items
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetPluginChangeLog(e, t) {
      let s = this.genBaseURL("/samantha/plugin/change_log");
      let i = {
        version: e.version,
        language: e.language
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetPDFOcr(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pdf/ocr");
      let r = {
        file_key: s.file_key,
        url: s.url,
        start_page: s.start_page,
        end_page: s.end_page
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CollectionTagList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/tag/list");
      let r = {
        next_key: s.next_key,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CollectionList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/list");
      let r = {
        keyword: s.keyword,
        tags: s.tags,
        types: s.types,
        next_key: s.next_key,
        limit: s.limit,
        onboarding: s.onboarding
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateCollection(e, t) {
      let s = this.genBaseURL("/samantha/collection/create");
      let i = {
        collection: (e || {}).collection
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetCollection(e, t) {
      let s = e || {};
      let i = this.genBaseURL(`/samantha/collection/get/${s.id}`);
      let r = {
        scenario: s.scenario
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    AcademicSearch(e, t) {
      let s = this.genBaseURL("/samantha/cozeplugin/academic_search");
      let i = {
        query: e.query,
        offset: e.offset,
        limit: e.limit
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    ThreadCreateOrGet(e, t) {
      let s = this.genBaseURL("/samantha/thread/create_or_get");
      let i = {
        collection_id: (e || {}).collection_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DeleteCollection(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/delete");
      let r = {
        id: s.id,
        delete_children: s.delete_children
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateCollectionShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/share/create");
      let r = {
        collection_id: s.collection_id,
        enable_seo: s.enable_seo
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetCollectionShare(e, t) {
      let s = this.genBaseURL(`/samantha/collection/share/${(e || {}).share_id}`);
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    StreamCallBotInToutiao(e, t) {
      let s = this.genBaseURL("/samantha/toutiao/stream_call_bot");
      let i = {
        payload: (e || {}).payload
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    StreamArticleTranslate(e, t) {
      let s = this.genBaseURL("/samantha/plugin/stream_article_translate");
      let i = {
        raw_text: e.raw_text,
        target_lang: e.target_lang,
        translate_service: e.translate_service,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdatePagesOutline(e, t) {
      let s = this.genBaseURL("/samantha/pages/update_outline");
      let i = {
        id: e.id,
        content: e.content,
        meta: e.meta
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetPodcastTranscript(e, t) {
      let s = this.genBaseURL("/samantha/plugin/podcast/transcript");
      let i = {
        url: e.url,
        type: e.type,
        resource_url: e.resource_url
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    PodcastResourceShouldUpload(e, t) {
      let s = this.genBaseURL("/samantha/plugin/podcast/should_upload");
      let i = {
        url: e.url,
        type: e.type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetCollectionByFingerprint(e, t) {
      let s = this.genBaseURL(`/samantha/collection/fingerprint/get/${(e || {}).fingerprint}`);
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    SniffUrl(e, t) {
      let s = this.genBaseURL("/samantha/pdf/sniff");
      let i = {
        urls: (e || {}).urls
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AudioASR(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/audio/asr");
      let r = {
        format: s.format,
        codec: s.codec,
        rate: s.rate,
        bits: s.bits,
        channel: s.channel,
        language: s.language,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    AudioTTS(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/audio/tts");
      let r = {
        speaker: s.speaker,
        format: s.format,
        speech_rate: s.speech_rate,
        pitch: s.pitch,
        fingerprint: s.fingerprint,
        mode: s.mode
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetThread(e, t) {
      let s = this.genBaseURL("/samantha/thread/get");
      let i = {
        collection_id: (e || {}).collection_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetCollectionOnboardingMessage(e, t) {
      let s = this.genBaseURL("/samantha/collection/onboarding_message");
      let i = {
        collection_id: (e || {}).collection_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetWordContentFromDict(e, t) {
      let s = this.genBaseURL("/samantha/plugin/dict/word");
      let i = {
        content: e.content,
        language_target: e.language_target,
        language_source: e.language_source,
        use_dict: e.use_dict,
        frontend_source: e.frontend_source,
        related_text: e.related_text
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdatePages(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/update");
      let r = {
        pages_id: s.pages_id,
        content: s.content,
        version: s.version,
        title: s.title,
        source_content: s.source_content,
        pages_version: s.pages_version
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetPages(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/get");
      let r = {
        pages_id: s.pages_id,
        pages_version: s.pages_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetThreadCollectionShareMessages(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/thread/share");
      let r = {
        share_id: s.share_id,
        need_bot: s.need_bot,
        conv_share_id: s.conv_share_id
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetThreadCollectionMessages(e, t) {
      let s = this.genBaseURL("/samantha/collection/thread/messages");
      let i = {
        collection_id: (e || {}).collection_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetLatestReadingList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/latest_reading_list");
      let r = {
        cursor: s.cursor,
        count: s.count
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetTranslationLanguageList(e, t) {
      let s = this.genBaseURL("/samantha/plugin/translation/language_list");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetSearchCardRecommend(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/plugin/search/card_recommend");
      let r = {
        expect_cards: s.expect_cards,
        exposed_card_ids: s.exposed_card_ids
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateCollectionMemo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/memo/update");
      let r = {
        id: s.id,
        upsert: s.upsert,
        remove: s.remove
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SearchPagesImages(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/search_image");
      let r = {
        query: s.query,
        offset: s.offset,
        limit: s.limit,
        title: s.title,
        need_rewrite_query: s.need_rewrite_query,
        artifact_key: s.artifact_key
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadPagesImage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/upload_image");
      let r = {
        file_type: s.file_type,
        data: s.data
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PluginWebMetaUpload(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/plugin/web_meta_upload");
      let r = {
        source_url: s.source_url,
        web_meta: s.web_meta
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetLarkUserInfo(e, t) {
      let s = this.genBaseURL("/samantha/user/lark_user_info/get");
      let i = {
        code: (e || {}).code
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ImageOCR(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/image/ocr");
      let r = {
        uri: s.uri,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    OlympicHomepage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/olympic/homepage");
      let r = {
        match_type_list: s.match_type_list,
        date: s.date
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    OlympicSubscribeDailyReport(e, t) {
      let s = this.genBaseURL("/samantha/olympic/subscribe_daily_report");
      let i = {
        subscribe: (e || {}).subscribe
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetSearchHighlight(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/search/highlight");
      let r = {
        summary: s.summary,
        content: s.content
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetOlympicMatchSummary(e, t) {
      let s = this.genBaseURL(`/samantha/olympic/summary/${(e || {}).match_id}`);
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetSearchReferencePaper(e, t) {
      let s = this.genBaseURL("/samantha/search/paper_reference");
      let i = {
        title: (e || {}).title
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    OlympicDailyReportSubscribeStatus(e, t) {
      let s = this.genBaseURL("/samantha/olympic/subscribe_status");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    UpdateOutlineMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/update_outline_meta");
      let r = {
        user_id: s.user_id,
        outline_id: s.outline_id,
        content: s.content,
        markdown_content: s.markdown_content
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SearchOutlineReference(e, t) {
      let s = this.genBaseURL("/samantha/pages/search_outline_reference");
      let i = {
        query: (e || {}).query
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SearchReferenceByParagraph(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/search_reference_by_paragraph");
      let r = {
        paragraph_content: s.paragraph_content,
        user_prompt: s.user_prompt
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DeleteWordNote(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/word_notes/delete");
      let r = {
        word: s.word,
        source_lang: s.source_lang,
        target_lang: s.target_lang,
        delete_operation: s.delete_operation
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetWordNotes(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/word_notes/get");
      let r = {
        source_lang: s.source_lang,
        target_lang: s.target_lang,
        status: s.status
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetOutlineMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/get_outline_meta");
      let r = {
        user_id: s.user_id,
        outline_id: s.outline_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SaveWordNote(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/word_notes/save");
      let r = {
        source_lang: s.source_lang,
        target_lang: s.target_lang,
        word: s.word
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetPluginChangeLogV2(e, t) {
      let s = this.genBaseURL("/samantha/plugin/change_log_v2");
      let i = {
        version: e.version,
        language: e.language,
        browser_name: e.browser_name
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetDocumentInfo(e, t) {
      let s = this.genBaseURL("/samantha/aireader/document_info/get");
      let i = {
        uris: (e || {}).uris
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetJWT(e, t) {
      let s = this.genBaseURL("/samantha/plugin/jwt");
      let i = {
        scope: (e || {}).scope
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    StreamCallBot(e, t) {
      let s = this.genBaseURL("/samantha/plugin/stream_call_bot");
      let i = {
        payload: (e || {}).payload
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetLatestStableVersion(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/desktop/get_stable_version");
      let r = {
        current_version: s.current_version,
        block_version: s.block_version,
        channel: s.channel,
        last_running_version: s.last_running_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    UpdateCollection(e, t) {
      let s = this.genBaseURL("/samantha/collection/update");
      let i = {
        id: e.id,
        data: e.data
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetDesktopHomepage(e, t) {
      let s = this.genBaseURL("/samantha/desktop/homepage");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    JWTValidate(e, t) {
      let s = this.genBaseURL("/samantha/plugin/validate_jwt");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    SaveUserSystemSettings(e, t) {
      let s = this.genBaseURL("/samantha/plugin/user_settings/save");
      let i = {
        settings: e.settings,
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetUserSystemSettings(e, t) {
      let s = this.genBaseURL("/samantha/plugin/user_settings/get");
      let i = {
        frontend_source: e.frontend_source
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetUnreadNoticeInfo(e, t) {
      let s = this.genBaseURL("/samantha/notice/info");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetNoticeRecordList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/notice/get_list");
      let r = {
        page: s.page,
        size: s.size
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    MarkNoticeInfoRead(e, t) {
      let s = this.genBaseURL("/samantha/notice/mark_read");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    EvaluateGetABParams(e, t) {
      let s = this.genBaseURL("/samantha/evaluate/get_ab_params");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    ReportShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/share/report");
      let r = {
        share_id: s.share_id,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CheckUltraLongTextQuota(e, t) {
      let s = this.genBaseURL("/samantha/aireader/ultra_long_text/check_quota");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    MarkUltraLongTextRead(e, t) {
      let s = this.genBaseURL("/samantha/notice/ultra_long_text/mark_read");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    SearchArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/search");
      let r = {
        conversation_id: s.conversation_id,
        artifact_id: s.artifact_id,
        version: s.version,
        include_content: s.include_content,
        max_version: s.max_version,
        resource_type_list: s.resource_type_list
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PDFPreview(e, t) {
      let s = this.genBaseURL("/samantha/pdf/preview");
      let i = {
        uris: (e || {}).uris
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    TerminalGenPages(e, t) {
      let s = this.genBaseURL("/samantha/pages/terminal_gen_pages");
      let i = {
        pages_id: (e || {}).pages_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBookmarks(e, t) {
      let s = this.genBaseURL("/samantha/bookmark");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    BookmarkHeartBeat(e, t) {
      let s = this.genBaseURL("/samantha/bookmark/heartbeat");
      let i = {
        version: (e || {}).version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateBookmark(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bookmark/update");
      let r = {
        op: s.op,
        prefer_order: s.prefer_order
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    BookmarkOpList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bookmark/op_list");
      let r = {
        start_version: s.start_version,
        end_version: s.end_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    ExportWordNotes(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/word_notes/export");
      let r = {
        source_lang: s.source_lang,
        target_lang: s.target_lang
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    CreateSelectedCollection(e, t) {
      let s = this.genBaseURL("/samantha/collection/selected_create");
      let i = {
        selected_ids: (e || {}).selected_ids
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DeleteBookmarkRecord(e, t) {
      let s = this.genBaseURL("/samantha/bookmark/delete");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    ResourceContentExists(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aireader/resource_content/exists");
      let r = {
        type: s.type,
        fingerprint: s.fingerprint,
        check_type: s.check_type
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    CreateResourceContent(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aireader/resource_content/create");
      let r = {
        resource_content: s.resource_content,
        base64_data: s.base64_data,
        base64_data_extension: s.base64_data_extension
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AddReference(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/add_reference");
      let r = {
        uri: s.uri,
        link: s.link,
        uuid: s.uuid,
        file_type: s.file_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MarkStrongReminderRead(e, t) {
      let s = this.genBaseURL("/samantha/notice/strong_notice_mark_read");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetAudioConf(e, t) {
      let s = this.genBaseURL("/samantha/audio/conf");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    DoCookieSync(e, t) {
      let s = this.genBaseURL("/samantha/plugin/cookie_sync/do");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    ChildCollectionList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/collection/child_collections");
      let r = {
        parent_id: s.parent_id,
        next_key: s.next_key,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    QueryReferenceContent(e, t) {
      let s = this.genBaseURL("/samantha/pages/query_reference_content");
      let i = {
        uuid: (e || {}).uuid
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateSkillsOrder(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/update_order");
      let r = {
        input_skill: s.input_skill,
        latest_used_skill: s.latest_used_skill,
        sidebar_skill: s.sidebar_skill,
        hide_in_lp: s.hide_in_lp
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetSkillList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/list");
      let r = {
        desktop_channel: s.desktop_channel,
        source_channel: s.source_channel
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ProxyPDFDownload(e, t) {
      let s = this.genBaseURL("/samantha/pdf/download");
      let i = {
        url: (e || {}).url
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    StreamPlantUMLGenerate(e, t) {
      let s = this.genBaseURL("/samantha/plugin/stream_plantuml_generate");
      let i = {
        diagram_type: e.diagram_type,
        input: e.input,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SkillPack(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/pack");
      let r = {
        skill_type: s.skill_type,
        condition: s.condition
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LatestReading(e, t) {
      let s = this.genBaseURL("/samantha/skill/latest_reading_list_v2");
      let i = {
        conversation_id: (e || {}).conversation_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetBannerSidebar(e, t) {
      let s = this.genBaseURL("/samantha/banner/sidebar");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    ThreadListByWeblink(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/list/weblink");
      let r = {
        index: s.index,
        batch_size: s.batch_size,
        weblink: s.weblink
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    BookmarkDirShareCreate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bookmark/dir/share/create");
      let r = {
        guid: s.guid,
        share_thread_files: s.share_thread_files
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DeleteBookmarkDirShare(e, t) {
      let s = this.genBaseURL("/samantha/bookmark/dir/share/delete");
      let i = {
        share_id: (e || {}).share_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBookmarkDirShareDetail(e, t) {
      let s = this.genBaseURL("/samantha/bookmark/dir/share/detail");
      let i = {
        share_id: (e || {}).share_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetBookmarkConversationShareSnap(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bookmark/dir/share/conversation/get");
      let r = {
        share_id: s.share_id,
        need_bot: s.need_bot
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ReportBookmarkDirShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bookmark/dir/share/report");
      let r = {
        share_id: s.share_id,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    BookmarkDirShareMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bookmark/dir/share/meta");
      let r = {
        guid: s.guid,
        source_share_id: s.source_share_id
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    ConversationList(e, t) {
      let s = this.genBaseURL("/samantha/conversation/list");
      let i = {
        index: (e || {}).index
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ImageGetBackgroundMask(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/image/image_get_background_mask");
      let r = {
        tos_key: s.tos_key,
        is_from_local: s.is_from_local,
        url: s.url
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ImageTranslate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/image/translate");
      let r = {
        uri: s.uri,
        target_lang: s.target_lang,
        translate_service: s.translate_service,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SubmitInhouseApplication(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/inhouse/submit_apply");
      let r = {
        type: s.type,
        purpose: s.purpose,
        occupation: s.occupation,
        birthday: s.birthday
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetInhouseApplication(e, t) {
      let s = this.genBaseURL("/samantha/inhouse/get_application");
      let i = {
        type: (e || {}).type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SummaryMeetingStatus(e, t) {
      let s = this.genBaseURL("/samantha/meeting/summary/status");
      let i = {
        task_id: (e || {}).task_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    SummaryMeeting(e, t) {
      let s = this.genBaseURL("/samantha/meeting/summary");
      let i = {
        vid: (e || {}).vid
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SniffLink(e, t) {
      let s = this.genBaseURL("/samantha/resource/link/sniff");
      let i = {
        links: e.links,
        with_content_type: e.with_content_type,
        with_repository: e.with_repository,
        with_link_meta: e.with_link_meta
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ResourceContentReferenceCard(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aireader/resource_content/reference_card");
      let r = {
        id: s.id,
        page_numbers: s.page_numbers
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetFissionHomePage(e, t) {
      let s = this.genBaseURL("/samantha/fission/home_page");
      let i = {
        activity_id: e.activity_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    FissionDraw(e, t) {
      let s = this.genBaseURL("/samantha/fission/draw");
      let i = {
        is_exchange: e.is_exchange,
        activity_id: e.activity_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    FissionApprove(e, t) {
      let s = this.genBaseURL("/samantha/fission/approve");
      let i = {
        invited_code: e.invited_code,
        activity_id: e.activity_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetFissionEntrance(e, t) {
      let s = this.genBaseURL("/samantha/fission/entrance");
      let i = {
        enter_from: e.enter_from
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    FissionReport(e, t) {
      let s = this.genBaseURL("/samantha/fission/report");
      let i = {
        report_type: e.report_type,
        activity_id: e.activity_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetFissionShareInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/fission/share_info");
      let r = {
        invited_code: s.invited_code,
        activity_id: s.activity_id
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    AISpaceNodeInfo(e, t) {
      let s = this.genBaseURL("/samantha/aispace/node_info");
      let i = {
        node_id: e.node_id,
        need_full_path: e.need_full_path,
        filter_lists: e.filter_lists,
        no_need_types: e.no_need_types,
        otter_pack_option: e.otter_pack_option,
        sort_param: e.sort_param,
        cursor: e.cursor,
        size: e.size,
        next_cursor_with_sort: e.next_cursor_with_sort
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CodePreHandle(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/pre_handle");
      let r = {
        directory_id: s.directory_id,
        uris: s.uris,
        upload_scene: s.upload_scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpaceHomepage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/homepage");
      let r = {
        tab_type: s.tab_type,
        directory_type: s.directory_type,
        sort_param: s.sort_param
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetCodeContextState(e, t) {
      let s = this.genBaseURL("/samantha/code/context_status/get");
      let i = {
        type: e.type,
        resource_key: e.resource_key
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetCodeFileContent(e, t) {
      let s = this.genBaseURL("/samantha/code/file_content/get");
      let i = {
        repo_id: e.repo_id,
        path: e.path,
        encoding_type: e.encoding_type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceRenameNode(e, t) {
      let s = this.genBaseURL("/samantha/aispace/rename_node");
      let i = {
        node_id: e.node_id,
        node_name: e.node_name,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceUploadNode(e, t) {
      let s = this.genBaseURL("/samantha/aispace/upload_node");
      let i = {
        node_list: e.node_list,
        scene: e.scene,
        request_id: e.request_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UploadCodeNode(e, t) {
      let s = this.genBaseURL("/samantha/code/upload");
      let i = {
        node_list: e.node_list,
        upload_scene: e.upload_scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceDeleteNode(e, t) {
      let s = this.genBaseURL("/samantha/aispace/delete_node");
      let i = {
        node_list: e.node_list,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetCodeDirectory(e, t) {
      let s = this.genBaseURL("/samantha/code/directory/get");
      let i = {
        type: e.type,
        resource_key: e.resource_key,
        path: e.path
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceMoveNode(e, t) {
      let s = this.genBaseURL("/samantha/aispace/move_node");
      let i = {
        node_list: e.node_list,
        current_parent_id: e.current_parent_id,
        target_parent_id: e.target_parent_id,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    RestoreArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/restore");
      let r = {
        conversation_id: s.conversation_id,
        artifact_id: s.artifact_id,
        version: s.version
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetOpenIdByUserId(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/open/get_openid_by_userid");
      let r = {
        AppId: s.AppId,
        ClientKey: s.ClientKey,
        NotCreate: s.NotCreate
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetLatestVersion(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/desktop/get_latest_version");
      let r = {
        channel_id: s.channel_id,
        platform: s.platform,
        app_version: s.app_version,
        os_version: s.os_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    AISpaceShareHistory(e, t) {
      let s = this.genBaseURL("/samantha/aispace/share/history");
      let i = {
        cursor: (e || {}).cursor
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceShareNodeInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/share/node_info");
      let r = {
        share_id: s.share_id,
        node_id: s.node_id,
        need_full_path: s.need_full_path,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpaceShareDelete(e, t) {
      let s = this.genBaseURL("/samantha/aispace/share/delete");
      let i = {
        share_meta_list: (e || {}).share_meta_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceShareCreate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/share/create");
      let r = {
        node_list: s.node_list,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SearchVideo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/search/video");
      let r = {
        query: s.query,
        offset: s.offset,
        limit: s.limit,
        need_rewrite_query: s.need_rewrite_query
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpaceShareDump(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/share/dump");
      let r = {
        share_id: s.share_id,
        node_list: s.node_list,
        target_parent_id: s.target_parent_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpaceShareOverview(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/share/overview");
      let r = {
        share_id: s.share_id,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ViewPages(e, t) {
      let s = this.genBaseURL("/samantha/pages/view");
      let i = {
        pages_id: (e || {}).pages_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    QueryVideoGenInfo(e, t) {
      let s = this.genBaseURL("/samantha/video/query_video_gen_info");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetPlayInfo(e, t) {
      let s = this.genBaseURL("/samantha/video/get_play_info");
      let i = {
        vid: (e || {}).vid
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    FissionCheck(e, t) {
      let s = this.genBaseURL("/samantha/fission/check");
      let i = {
        data: e.data
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetFissionRewardInfo(e, t) {
      let s = this.genBaseURL("/samantha/fission/reward_info");
      let i = {
        order_id: e.order_id,
        activity_id: e.activity_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ToolMessageFeedback(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/feedback/tool_message");
      let r = {
        tool_message_id: s.tool_message_id,
        type: s.type,
        reasons: s.reasons,
        detail_content: s.detail_content
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetAiPPTTemplateList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aippt/get_template_list");
      let r = {
        selected_tag_id: s.selected_tag_id,
        suit_ids: s.suit_ids,
        page: s.page,
        size: s.size,
        selected_style_id: s.selected_style_id,
        selected_colour_id: s.selected_colour_id,
        selected_career_id: s.selected_career_id,
        is_doubao_exclusive: s.is_doubao_exclusive
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetAiPPTBindingStatus(e, t) {
      let s = this.genBaseURL("/samantha/aippt/get_binding_status");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetGuidanceDrawResult(e, t) {
      let s = this.genBaseURL("/samantha/guidance/draw_result");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GuidanceDraw(e, t) {
      let s = this.genBaseURL("/samantha/guidance/draw");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetGuidanceTask(e, t) {
      let s = this.genBaseURL("/samantha/guidance/get_task");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetGuidanceRewardPreview(e, t) {
      let s = this.genBaseURL("/samantha/guidance/get_reward_preview");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetUserPreference(e, t) {
      let s = this.genBaseURL("/samantha/user/preference/get");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    SetUserPreference(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/user/preference/set");
      let r = {
        show_guidance_task: s.show_guidance_task,
        lang: s.lang,
        close_sidebar: s.close_sidebar,
        recent_doc_tab: s.recent_doc_tab,
        show_otter_enter_revision_tips: s.show_otter_enter_revision_tips,
        show_otter_exit_revision_tips: s.show_otter_exit_revision_tips,
        auto_accept_doc_revision: s.auto_accept_doc_revision,
        update_super_task_vm_cookie_status: s.update_super_task_vm_cookie_status
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    BingWebSearch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/bing/web_search");
      let r = {
        keyword: s.keyword,
        offset: s.offset,
        count: s.count
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    BindAiPPTAccount(e, t) {
      let s = this.genBaseURL("/samantha/aippt/bind_account");
      let i = {
        code: (e || {}).code
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SyncAiPPTGenerateResult(e, t) {
      let s = this.genBaseURL("/samantha/aippt/sync_result");
      let i = {
        detail: (e || {}).detail
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetAiPPTAuthToken(e, t) {
      let s = this.genBaseURL("/samantha/aippt/get_auth_token");
      let i = {
        open_id: (e || {}).open_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    ImageBannerQuery(e, t) {
      let s = this.genBaseURL("/samantha/image/banner_query");
      let i = {
        imageKey: (e || {}).imageKey
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetInputGuidance(e, t) {
      let s = this.genBaseURL("/samantha/skill/input_guidance");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    ReceiveAiPPTEvent(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aippt/receive_event");
      let r = {
        event_type: s.event_type,
        ppt_id: s.ppt_id,
        share_url: s.share_url,
        cover_url: s.cover_url,
        title: s.title,
        source_meta: s.source_meta
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetSkillSimpleGuidance(e, t) {
      let s = this.genBaseURL("/samantha/skill/simple_guidance");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AISpaceShareReportAccess(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/share/report_access");
      let r = {
        share_id: s.share_id,
        name: s.name,
        url: s.url
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetAIWebsiteRecommend(e, t) {
      let s = this.genBaseURL("/samantha/desktop/ai_website/recommend");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    SaveUserNewsTag(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/user/news_tag/save");
      let r = {
        tag_type: s.tag_type,
        tag_codes: s.tag_codes
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GenShareName(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/thread/share/gen_name");
      let r = {
        conversation_id: s.conversation_id,
        message_index_list: s.message_index_list
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateCallContext(e, t) {
      let s = this.genBaseURL("/samantha/audio/update_call_context");
      let i = {
        call_id: e.call_id,
        call_context: e.call_context
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DisableRecommendSkill(e, t) {
      let s = this.genBaseURL("/samantha/skill/disable_recommend");
      let i = {
        skill_type: (e || {}).skill_type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CheckCn(e, t) {
      let s = this.genBaseURL("/samantha/user/check_cn");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    CodeExecutable(e, t) {
      let s = this.genBaseURL("/samantha/code/check_executable");
      let i = {
        identifier: e.identifier,
        version: e.version,
        message_id: e.message_id,
        code_id: e.code_id,
        code_version: e.code_version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    RunCode(e, t) {
      let s = this.genBaseURL("/samantha/code/run");
      let i = {
        identifier: e.identifier,
        version: e.version,
        conversion_id: e.conversion_id,
        message_id: e.message_id,
        code_id: e.code_id,
        code_version: e.code_version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceGetSystemDirectory(e, t) {
      let s = this.genBaseURL("/samantha/aispace/system_directory");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AISpaceAttachmentLatestUsed(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/attachment_latest_used");
      let r = {
        file_types: s.file_types,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpaceAttachmentSearch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/attachment_search");
      let r = {
        file_types: s.file_types,
        key_word: s.key_word,
        limit: s.limit,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpacePagesSearch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/pages_search");
      let r = {
        limit: s.limit,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetCodeArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/get_artifact");
      let r = {
        code_id: s.code_id,
        version: s.version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    DeleteArtifact(e, t) {
      let s = this.genBaseURL("/samantha/artifact/delete");
      let i = {
        artifact_key: (e || {}).artifact_key
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DownloadArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/download_artifact");
      let r = {
        code_id: s.code_id,
        version: s.version,
        title: s.title,
        artifact_id: s.artifact_id
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    UpdateUserTipsSetting(e, t) {
      let s = this.genBaseURL("/samantha/user/tips_setting/update");
      let i = {
        setting_type: e.setting_type,
        setting_data: e.setting_data
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetUserTipsSetting(e, t) {
      let s = this.genBaseURL("/samantha/user/tips_setting/get");
      let i = {
        setting_types: e.setting_types
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AIToolboxSkills(e, t) {
      let s = this.genBaseURL("/samantha/toolbox/skills");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetPagesPlaceholderImage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/placeholder_image");
      let r = {
        pages_id: s.pages_id,
        image_key: s.image_key
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    LoginAiPPT(e, t) {
      let s = this.genBaseURL("/samantha/aippt/login");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    PackBanner(e, t) {
      let s = this.genBaseURL("/samantha/banner/pack");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    UploadCallScreenshots(e, t) {
      let s = this.genBaseURL("/samantha/audio/upload_call_screenshots");
      let i = {
        call_id: (e || {}).call_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetConflictAppBlocklist(e, t) {
      let s = this.genBaseURL("/samantha/desktop/get_conflict_app_blocklist");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    CreatePagesArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/create_pages");
      let r = {
        title: s.title,
        content: s.content,
        source_content: s.source_content,
        space_node_id: s.space_node_id,
        source: s.source
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PutChatRecord(e, t) {
      let s = this.genBaseURL("/samantha/tool_message/put_chat_record");
      let i = {
        conversation_id: e.conversation_id,
        tool_message_id: e.tool_message_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ResourceLinkContentGet(e, t) {
      let s = this.genBaseURL("/samantha/resource/linkcontent/get");
      let i = {
        url: (e || {}).url
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DesktopPushEvent(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/desktop_push/event");
      let r = {
        event_type: s.event_type,
        os_type: s.os_type,
        sync: s.sync
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMediaPlayInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/media/get_play_info");
      let r = {
        key: s.key,
        share_id: s.share_id,
        node_id: s.node_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMediaUploadToken(e, t) {
      let s = this.genBaseURL("/samantha/media/get_upload_token");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    SearchEngineWordsSug(e, t) {
      let s = this.genBaseURL("/samantha/desktop/search_sug");
      let i = {
        words: (e || {}).words
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    ReportArtifactShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/share/report");
      let r = {
        share_id: s.share_id,
        update_time: s.update_time,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateOrGetArtifactShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/share/create_or_get");
      let r = {
        conversation_id: s.conversation_id,
        artifact_id: s.artifact_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetArtifactShareContent(e, t) {
      let s = this.genBaseURL("/samantha/artifact/share/get_content");
      let i = {
        share_id: (e || {}).share_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    UpdateArtifactSharePermission(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/share/update_permission");
      let r = {
        share_id: s.share_id,
        share_permission: s.share_permission
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateCodeArtifactConversation(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/create_code_conversation");
      let r = {
        source_conversation_id: s.source_conversation_id,
        source_artifact_identifier: s.source_artifact_identifier
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetArtifactShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/share/get");
      let r = {
        conversation_id: s.conversation_id,
        artifact_id: s.artifact_id
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    SummaryMeetingPack(e, t) {
      let s = this.genBaseURL("/samantha/meeting/summary/pack");
      let i = {
        meeting_id: (e || {}).meeting_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    ReviewArtifactShareContent(e, t) {
      let s = this.genBaseURL("/samantha/artifact/share/review_content");
      let i = {
        share_id: (e || {}).share_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SimultaneousInterpretation(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/audio/simultaneous_interpretation");
      let r = {
        data: s.data
      };
      let a = {
        target_lang: s.target_lang,
        protocol_version: s.protocol_version
      };
      return this.request({
        url: i,
        method: "GET",
        data: r,
        params: a
      }, t);
    }
    AISpaceGetDownloadInfo(e, t) {
      let s = this.genBaseURL("/samantha/aispace/get_download_info");
      let i = {
        requests: e.requests
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetAB(e, t) {
      let s = this.genBaseURL("/samantha/user/ab/get");
      let i = {
        ab_request: (e || {}).ab_request
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetMediaMindMap(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/media/get_mind_map");
      let r = {
        key: s.key,
        media_type: s.media_type,
        node_id: s.node_id,
        share_id: s.share_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetMediaSummary(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/media/get_summary");
      let r = {
        key: s.key,
        media_type: s.media_type,
        node_id: s.node_id,
        share_id: s.share_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ImageReview(e, t) {
      let s = this.genBaseURL("/samantha/code/image_review");
      let i = {
        message_id: e.message_id,
        image_urls: e.image_urls,
        image_base64s: e.image_base64s
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DesExtShareCreate(e, t) {
      let s = this.genBaseURL("/samantha/desktop/share/create");
      let i = {
        scene: e.scene,
        resource: e.resource,
        fingerprint: e.fingerprint
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DesExtShareGet(e, t) {
      let s = this.genBaseURL("/samantha/desktop/share/get");
      let i = {
        share_id: e.share_id,
        fingerprint: e.fingerprint,
        scene: e.scene
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    MGetPlayStatus(e, t) {
      let s = this.genBaseURL("/samantha/media/mget_play_status");
      let i = {
        vid: (e || {}).vid
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetWritingSkillInputTemplate(e, t) {
      let s = this.genBaseURL("/samantha/skill/get_writing_input_template");
      let i = {
        template_id: (e || {}).template_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    AISpaceGetMessageNodeInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/message_node_info");
      let r = {
        message_ids: s.message_ids,
        message_ids_str: s.message_ids_str
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    RunCodeV2(e, t) {
      let s = this.genBaseURL("/samantha/code/run/v2");
      let i = {
        code_type: e.code_type,
        conversion_id: e.conversion_id,
        message_id: e.message_id,
        artifact_code_info: e.artifact_code_info,
        raw_code_info: e.raw_code_info
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    TerminalDeepResearchAgent(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/deep_research/terminal");
      let r = {
        user_id: s.user_id,
        section_id: s.section_id,
        message_id: s.message_id,
        message_id_str: s.message_id_str,
        section_id_str: s.section_id_str
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SharedAppReviewUrl(e, t) {
      let s = this.genBaseURL("/samantha/shared_app/review/url");
      let i = {
        url: (e || {}).url
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CreateSharedAppSecret(e, t) {
      let s = this.genBaseURL("/samantha/shared_app/secret/create");
      let i = {
        need_login: (e || {}).need_login
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetSharedAppSecret(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/shared_app/secret/get");
      let r = {
        key: s.key,
        need_login: s.need_login
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetDeepResearchResource(e, t) {
      let s = this.genBaseURL("/samantha/deep_research/resource/get");
      let i = {
        resource_id: (e || {}).resource_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DesExtSharePicReview(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/desktop/share/review");
      let r = {
        scene: s.scene,
        web_url: s.web_url,
        pic_uri: s.pic_uri
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AISpaceLatestUsedNode(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/node_lastest_used");
      let r = {
        tab_type: s.tab_type,
        node_type: s.node_type,
        file_type: s.file_type,
        sort_param: s.sort_param,
        cursor: s.cursor,
        size: s.size,
        next_cursor_with_sort: s.next_cursor_with_sort
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ExecPageUpgrade(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/exec_page_upgrade");
      let r = {
        pages_id: s.pages_id,
        conversation_id: s.conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CheckPageUpgradeStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/skill/check_page_upgrade_status");
      let r = {
        pages_id: s.pages_id,
        conversation_id: s.conversation_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreatePageArtifact(e, t) {
      let s = this.genBaseURL("/samantha/skill/create_page_artifact");
      let i = {
        title: (e || {}).title
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceEventReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/event_report");
      let r = {
        report_type: s.report_type,
        node_id: s.node_id,
        key: s.key
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetCompileStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/get_compile_status");
      let r = {
        code_id: s.code_id,
        code_version: s.code_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    CompileCodeArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/compile");
      let r = {
        code_id: s.code_id,
        code_version: s.code_version,
        answer_message_id: s.answer_message_id
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetCodeArtifactMeta(e, t) {
      let s = this.genBaseURL("/samantha/code/get_artifact_meta");
      let i = {
        code_id: (e || {}).code_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetArtifactTemplateDirectory(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/get_template_directory");
      let r = {
        artifact_id: s.artifact_id,
        path: s.path,
        code_id: s.code_id,
        code_version: s.code_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    GetArtifactTemplateFile(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/get_template_file");
      let r = {
        artifact_id: s.artifact_id,
        path: s.path,
        code_id: s.code_id,
        code_version: s.code_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    PackNoticeBanner(e, t) {
      let s = this.genBaseURL("/samantha/banner/pack_notice");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetCodeCompiledArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/get_compiled_artifact/");
      let r = {
        code_id: s.code_id,
        code_version: s.code_version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    CreateOrGetCodeBlockArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/artifact/create_or_get_code_block_artifact");
      let r = {
        code_block_identifier: s.code_block_identifier,
        node_content_list: s.node_content_list,
        source_meta: s.source_meta
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetCodeResourceDownloadURL(e, t) {
      let s = this.genBaseURL("/samantha/code/get_resource_download_url");
      let i = {
        type: e.type,
        multi_file_context_identifiers: e.multi_file_context_identifiers,
        directory_context_identifier: e.directory_context_identifier,
        artifacts_identifier: e.artifacts_identifier,
        single_file_context_identifiers: e.single_file_context_identifiers
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateCodeArtifact(e, t) {
      let s = this.genBaseURL("/samantha/code/update");
      let i = {
        code_id: e.code_id,
        code_version: e.code_version,
        nodes: e.nodes,
        artifact_meta: e.artifact_meta
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SearchCodeImages(e, t) {
      let s = this.genBaseURL("/samantha/code/search_images");
      let i = {
        queries: e.queries,
        artifact_id: e.artifact_id,
        offset: e.offset,
        limit: e.limit,
        search_context: e.search_context
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceGetLatestUsedTab(e, t) {
      let s = this.genBaseURL("/samantha/aispace/latest_used_tab");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    RecommendWebToDesktop(e, t) {
      let s = this.genBaseURL("/samantha/plugin/recommend/webtodesktop");
      let i = {
        type_list: (e || {}).type_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetPagesMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/get_meta");
      let r = {
        pages_id: s.pages_id,
        pages_version: s.pages_version
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdatePagesMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/pages/update_meta");
      let r = {
        code: s.code,
        msg: s.msg
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GlobalSearch(e, t) {
      let s = this.genBaseURL("/samantha/search/global_search");
      let i = {
        query: e.query,
        traffic_id: e.traffic_id,
        limit: e.limit,
        offset: e.offset,
        search_id: e.search_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UploadCodeImage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/upload_image");
      let r = {
        file_type: s.file_type,
        data: s.data,
        is_public: s.is_public
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    RollbackArtifact(e, t) {
      let s = this.genBaseURL("/samantha/artifact/rollback");
      let i = {
        conversation_id: e.conversation_id,
        artifact_id: e.artifact_id,
        version: e.version,
        resource_type: e.resource_type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    InterruptCodeAsyncTask(e, t) {
      let s = this.genBaseURL("/samantha/code/interrupt_async_ask");
      let i = {
        section_id: e.section_id,
        message_id: e.message_id,
        conversation_id: e.conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MGetPreviewMetaByKey(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/preview/mget_meta");
      let r = {
        scene: s.scene,
        key_list: s.key_list,
        item_list: s.item_list,
        node_id: s.node_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetPreviewInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/preview/get_info");
      let r = {
        scene: s.scene,
        key: s.key,
        preview_type: s.preview_type,
        sheet_index: s.sheet_index,
        node_id: s.node_id,
        share_id: s.share_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetPreviewTemplate(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/preview/get_template");
      let r = {
        preview_type: s.preview_type,
        scene: s.scene,
        version: s.version
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    ReactivateSuperTask(e, t) {
      let s = this.genBaseURL("/samantha/supertask/reactivate");
      let i = {
        task_id: (e || {}).task_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    TerminateSuperTask(e, t) {
      let s = this.genBaseURL("/samantha/supertask/terminate");
      let i = {
        task_id: (e || {}).task_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SummaryMeetingAudioDownload(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/meeting/summary/audio_download");
      let r = {
        uri: s.uri,
        file_name: s.file_name
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    AISpaceGetFileUrl(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/get_file_url");
      let r = {
        node_id: s.node_id,
        share_id: s.share_id,
        node_id_str: s.node_id_str
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LatestUsedOtterDoc(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/otter_latest_used");
      let r = {
        cursor: s.cursor,
        limit: s.limit,
        is_owner: s.is_owner,
        rank: s.rank,
        enable_default_title: s.enable_default_title
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    NeedResetThink(e, t) {
      let s = this.genBaseURL("/samantha/user/think_need_reset");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    RecommendTask(e, t) {
      let s = this.genBaseURL("/samantha/supertask/recommend");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetOrInitOtterRootNodeInfo(e, t) {
      let s = this.genBaseURL("/samantha/aispace/otter/root_node_info");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetShareList(e, t) {
      let s = this.genBaseURL("/samantha/artifact/share/list");
      let i = {
        page: e.page,
        size: e.size
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AISpaceCodeSearch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/code_search");
      let r = {
        key_word: s.key_word,
        limit: s.limit,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateCodeRequirement(e, t) {
      let s = this.genBaseURL("/samantha/code/update_requirement");
      let i = {
        resource_key: e.resource_key,
        message_id: e.message_id,
        requirements: e.requirements,
        single_selection_requirements: e.single_selection_requirements
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    SupertaskApply(e, t) {
      let s = this.genBaseURL("/samantha/supertask/apply");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    SupertaskSetting(e, t) {
      let s = this.genBaseURL("/samantha/supertask/setting");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    GetCodeTemplateConfig(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/get_template_config");
      let r = {
        with_white_board: s.with_white_board,
        with_design_style: s.with_design_style
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    PPTExport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/supertask/ppt_export");
      let r = {
        artifact_code_id: s.artifact_code_id,
        version: s.version,
        op_type: s.op_type
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    HtmlPreview(e, t) {
      let s = this.genBaseURL("/samantha/supertask/html_preview");
      let i = {
        contents: (e || {}).contents
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetOrInitOnboardingDoc(e, t) {
      let s = this.genBaseURL("/samantha/aispace/otter/get_or_init_onboarding_doc");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AISpaceUploadPreCheck(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/aispace/upload_pre_check");
      let r = {
        parent_id: s.parent_id,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetSign(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/audio/sign");
      let r = {
        fp: s.fp,
        web_id: s.web_id,
        timestamp: s.timestamp,
        ua: s.ua
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    constructor(e) {
      l(this, "request", () => {
        throw Error("SamanthaApiService.request is undefined");
      });
      l(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let D = flowApiServiceProxy.createServiceProxy("safety", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AgeGateCheck(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/age_gate/check");
      let r = {
        scene: s.scene,
        sub_scene: s.sub_scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    Report(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/report/create");
      let r = {
        report_type: s.report_type,
        entity_id: s.entity_id,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail,
        index_in_conversation: s.index_in_conversation,
        conversation_id: s.conversation_id,
        report_source: s.report_source,
        conversation_template: s.conversation_template,
        ai_space_folder_share: s.ai_space_folder_share,
        extra: s.extra,
        batch_message_ids: s.batch_message_ids,
        cloud_drive_report: s.cloud_drive_report
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    BanAppeal(e, t) {
      let s = this.genBaseURL("/alice/user/ban_appeal");
      let i = {
        user_id: (e || {}).user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AgeGateReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/age_gate/report");
      let r = {
        birthday: s.birthday,
        scene: s.scene,
        pass: s.pass,
        age_range: s.age_range,
        sub_scene: s.sub_scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetUserBlocklist(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/blocklist/list");
      let r = {
        index: s.index,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DeleteBlocklistUser(e, t) {
      let s = this.genBaseURL("/alice/user/blocklist/delete");
      let i = {
        blocklist_user_id: (e || {}).blocklist_user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CreateBlocklistUser(e, t) {
      let s = this.genBaseURL("/alice/user/blocklist/create");
      let i = {
        blocklist_user_id: (e || {}).blocklist_user_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AgeGateDelete(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/age_gate/delete");
      let r = {
        uid: s.uid,
        did: s.did,
        dry_run: s.dry_run
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    RedirectByRegion(e, t) {
      let s = this.genBaseURL("/alice/safety/redirect_by_region");
      let i = {
        key: (e || {}).key
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    GetReportReasons(e, t) {
      let s = this.genBaseURL("/alice/safety/report/reasons");
      let i = {
        report_type: (e || {}).report_type
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    ConversationReport(e, t) {
      let s = this.genBaseURL("/alice/safety/report/create/conversation");
      let i = {
        report_type: e.report_type,
        conversation_ID: e.conversation_ID,
        reason_ID: e.reason_ID,
        reason_detail: e.reason_detail,
        report_message: e.report_message,
        report_source: e.report_source,
        reporter_user_ID: e.reporter_user_ID
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ConversationAppeal(e, t) {
      let s = this.genBaseURL("/alice/safety/conversation/appeal");
      let i = {
        conversation_id: e.conversation_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UserReport(e, t) {
      let s = this.genBaseURL("/alice/safety/report/create/user");
      let i = {
        report_type: e.report_type,
        reporter_user_id: e.reporter_user_id,
        reported_user_id: e.reported_user_id,
        reason_id: e.reason_id,
        reason_detail: e.reason_detail,
        report_messages: e.report_messages,
        report_source: e.report_source
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetReviewReport(e, t) {
      let s = this.genBaseURL("/alice/safety/get_review_report");
      let i = {
        suppression_notify_id: (e || {}).suppression_notify_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    SuppressAppeal(e, t) {
      let s = this.genBaseURL("/alice/safety/appeal");
      let i = {
        suppression_notify_id: (e || {}).suppression_notify_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetBanInfoRequest(e, t) {
      let s = this.genBaseURL("/alice/safety/get_ban_info");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    Appeal(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/safety/api/appeal/create");
      let r = {
        appeal_type: s.appeal_type,
        entity_id: s.entity_id,
        extra: s.extra
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      c(this, "request", () => {
        throw Error("SafetyApiService.request is undefined");
      });
      c(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let M = flowApiServiceProxy.createServiceProxy("profile", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    ProfileBotList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/profile/bot_list");
      let r = {
        visit_id: s.visit_id,
        index: s.index,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ProfileInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/profile/self");
      let r = {
        visit_id: s.visit_id,
        avatar_format: s.avatar_format
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UserHitProfileRegister(e, t) {
      let s = this.genBaseURL("/alice/profile/hit_register");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    PullUserConfig(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/config/pull");
      let r = {
        objects: s.objects,
        reason: s.reason
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateProfile(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/profile/update_profile");
      let r = {
        entity_id: s.entity_id,
        nickname: s.nickname,
        user_name: s.user_name,
        avatar_url: s.avatar_url,
        is_register: s.is_register,
        user_language_code: s.user_language_code
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CheckUserNameUnique(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/profile/user_name_unique");
      let r = {
        user_name: s.user_name,
        entity_id: s.entity_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ProfileOverview(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/profile/overview");
      let r = {
        visit_id: s.visit_id,
        avatar_format: s.avatar_format
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SyncUserConfig(e, t) {
      let s = this.genBaseURL("/alice/user/config/sync");
      let i = {
        configs: (e || {}).configs
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ProfileBrief(e, t) {
      let s = this.genBaseURL("/alice/profile/self_brief");
      let i = {
        avatar_format: (e || {}).avatar_format
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      g(this, "request", () => {
        throw Error("ProfileApiService.request is undefined");
      });
      g(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let z = flowApiServiceProxy.createServiceProxy("search", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    Search(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/comprehensive/search");
      let r = {
        keyword: s.keyword,
        index_type: s.index_type,
        offset: s.offset,
        size: s.size
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      _(this, "request", () => {
        throw Error("SearchApiService.request is undefined");
      });
      _(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let N = flowApiServiceProxy.createServiceProxy("resource", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    GetFileURL(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/message/get_file_url");
      let r = {
        uris: s.uris,
        type: s.type,
        format: s.format,
        expire_second: s.expire_second
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    FileUpload(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/upload/file");
      let r = {
        file_type: s.file_type,
        biz_type: s.biz_type,
        data: s.data
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetUploadAuthToken(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/upload/auth_token");
      let r = {
        scene: s.scene,
        data_type: s.data_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    RefreshFileURL(e, t) {
      let s = this.genBaseURL("/alice/upload/refresh_file_url");
      let i = {
        url: (e || {}).url
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    DeleteFiles(e, t) {
      let s = this.genBaseURL("/alice/resource/delete_files");
      let i = {
        uris: (e || {}).uris
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ResourcePrepareUpload(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/resource/prepare_upload");
      let r = {
        tenant_id: s.tenant_id,
        scene_id: s.scene_id,
        resource_type: s.resource_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ResourceSignUrlV2(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/resource/v2/sign_url");
      let r = {
        params: s.params,
        encrypted: s.encrypted
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetResourceConfig(e, t) {
      let s = this.genBaseURL("/alice/resource/get_config");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    constructor(e) {
      m(this, "request", () => {
        throw Error("ResourceApiService.request is undefined");
      });
      m(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let F = flowApiServiceProxy.createServiceProxy("setting", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    Launch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/launch");
      let r = {
        ug_landing_tag: s.ug_landing_tag,
        select: s.select
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetFeedbackList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/feedback_list");
      let r = {
        iid: s.iid,
        appkey: s.appkey,
        min_id: s.min_id,
        max_id: s.max_id,
        count: s.count
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      o(this, "request", () => {
        throw Error("SettingApiService.request is undefined");
      });
      o(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let V = flowApiServiceProxy.createServiceProxy("samanthaIm", class extends h {
    constructor(e) {
      if (!(e == null ? undefined : e.request)) {
        super(e);
        return;
      }
      let t = e.request;
      super({
        baseURL: e == null ? undefined : e.baseURL,
        request: (e, s) => t({
          ...e,
          headers: {
            ...(e == null ? undefined : e.headers),
            "Agw-Js-Conv": "str"
          }
        }, s)
      });
    }
  });
  let H = flowApiServiceProxy.createServiceProxy("account", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    InnerSSOTokenVerify(e, t) {
      let s = this.genBaseURL("/alice/user/inner_sso_token_verify");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetWebAnonID(e, t) {
      let s = this.genBaseURL("/alice/user/get_web_anon_id");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetAccountInfo(e, t) {
      let s = this.genBaseURL("/alice/user/get_account_info");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetCozeOAuthCode(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/get_coze_oauth_code");
      let r = {
        client_id: s.client_id,
        redirect_uri: s.redirect_uri,
        response_type: s.response_type,
        state: s.state
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AccountManagerLogout(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/account_manager/logout");
      let r = {
        logout_device_id: s.logout_device_id,
        is_logout_all: s.is_logout_all
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    LogoutAllDevice(e, t) {
      let s = this.genBaseURL("/alice/user/logout_all_device");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    ListAuthInfo(e, t) {
      let s = this.genBaseURL("/alice/user/list_auth_info");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetAuthScopeInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/get_auth_scope");
      let r = {
        app_id: s.app_id,
        client_key: s.client_key,
        auth_from: s.auth_from
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ClearAuthInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user/clear_auth_info");
      let r = {
        app_id: s.app_id,
        auth_from: s.auth_from,
        client_key: s.client_key
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetAccountApps(e, t) {
      let s = this.genBaseURL("/alice/user/get_account_apps");
      return this.request({
        url: s,
        method: "GET"
      }, t);
    }
    FilterDeviceList(e, t) {
      let s = this.genBaseURL("/alice/user/filter_device_list");
      let i = {
        device_list: (e || {}).device_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CheckWebSecondaryAccountTip(e, t) {
      let s = this.genBaseURL("/alice/user/secondary_account/web_check");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    constructor(e) {
      C(this, "request", () => {
        throw Error("AccountApiService.request is undefined");
      });
      C(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let Q = flowApiServiceProxy.createServiceProxy("samanthaTool", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    UploadToolCallResult(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/tool/upload_tool_call_result");
      let r = {
        task_id: s.task_id,
        client_id: s.client_id,
        result: s.result,
        display_extra: s.display_extra,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ClientHeartbeat(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/tool/client_heartbeat");
      let r = {
        task_ids: s.task_ids,
        client_id: s.client_id,
        tools: s.tools,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    ClientToolInit(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/tool/init");
      let r = {
        client_id: s.client_id,
        tools: s.tools,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    QueryPPTTemplateInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/tool/ppt_template_query");
      let r = {
        card_id: s.card_id,
        version: s.version,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    constructor(e) {
      d(this, "request", () => {
        throw Error("SamanthaToolApiService.request is undefined");
      });
      d(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let K = flowApiServiceProxy.createServiceProxy("audio", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    ListUGCVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/list");
      let r = {
        visit_id: s.visit_id,
        page_index: s.page_index,
        page_size: s.page_size,
        language_code: s.language_code
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CheckUGCVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/voice_check");
      let r = {
        tos_key: s.tos_key,
        preview_text: s.preview_text,
        voice_lang: s.voice_lang
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UpdateUGCVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/update");
      let r = {
        ugc_voice_id: s.ugc_voice_id,
        name: s.name,
        icon: s.icon,
        private_status: s.private_status
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AuthorizeUGCVoice(e, t) {
      let s = this.genBaseURL("/alice/user_voice/authorize");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    DeleteUGCVoice(e, t) {
      let s = this.genBaseURL("/alice/user_voice/delete");
      let i = {
        ugc_voice_id: (e || {}).ugc_voice_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CreateUGCVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/create");
      let r = {
        name: s.name,
        tos_key: s.tos_key,
        bot_lang: s.bot_lang,
        icon: s.icon,
        need_delete_id: s.need_delete_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    MGetSocialAudioFileUrl(e, t) {
      let s = this.genBaseURL("/alice/audio/social/get_audio_url");
      let i = {
        vids: e.vids
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    RecommendVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/recommend");
      let r = {
        page_index: s.page_index,
        page_size: s.page_size,
        recommend_type: s.recommend_type,
        language_code: s.language_code,
        bot_name: s.bot_name,
        bot_desc: s.bot_desc,
        voice_id: s.voice_id,
        bot_id: s.bot_id,
        bot_model_type: s.bot_model_type,
        tab_key: s.tab_key
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CloneUGCVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/clone");
      let r = {
        tos_key: s.tos_key,
        lang_code: s.lang_code,
        local_voice_id: s.local_voice_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateUGCVoiceV2(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/user_voice/create/v2");
      let r = {
        name: s.name,
        icon: s.icon,
        local_voice_id: s.local_voice_id,
        private_status: s.private_status
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreateBotVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/conf_create_bot_voice");
      let r = {
        voice_list: s.voice_list,
        pitch: s.pitch,
        speech_rate: s.speech_rate,
        bot_language: s.bot_language,
        pitch_f64: s.pitch_f64,
        speech_rate_f64: s.speech_rate_f64,
        preview_voice: s.preview_voice
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CreatePreviewVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/conf_preview_create");
      let r = {
        voice_list: s.voice_list,
        pitch: s.pitch,
        speech_rate: s.speech_rate,
        bot_language: s.bot_language,
        pitch_f64: s.pitch_f64,
        speech_rate_f64: s.speech_rate_f64
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UserBotVoiceDetail(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/conf_detail");
      let r = {
        voice_id: s.voice_id,
        bot_language: s.bot_language,
        bot_id: s.bot_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    SaveUserBotVoice(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/conf_save_user_bot_voice");
      let r = {
        voice_id: s.voice_id,
        bot_id: s.bot_id,
        voice_list: s.voice_list,
        pitch: s.pitch,
        speech_rate: s.speech_rate,
        bot_language: s.bot_language,
        preview_voice: s.preview_voice,
        pitch_f64: s.pitch_f64,
        speech_rate_f64: s.speech_rate_f64
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    VoiceFeedback(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/voice_feedback");
      let r = {
        message_id: s.message_id,
        tts_during_time_ms: s.tts_during_time_ms,
        call_id: s.call_id,
        bot_id: s.bot_id,
        feedback_type: s.feedback_type,
        feedback_status: s.feedback_status,
        feedback_item_code_list: s.feedback_item_code_list,
        task_id: s.task_id,
        feedback_custom_text: s.feedback_custom_text
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadSystemNotification(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/upload_notification");
      let r = {
        title: s.title,
        sub_title: s.sub_title,
        message_detail: s.message_detail,
        app_name: s.app_name,
        timestamp: s.timestamp,
        timezone: s.timezone,
        system_notification_id: s.system_notification_id,
        pkg_name: s.pkg_name,
        channel: s.channel,
        client_receive_timestamp: s.client_receive_timestamp,
        app_package: s.app_package
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetRTCToken(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/rtc/token");
      let r = {
        is_client_pre_connect: s.is_client_pre_connect,
        is_quality_check: s.is_quality_check,
        business: s.business,
        sub_business: s.sub_business
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetSystemNotificationSummary(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/notification_summary");
      let r = {
        device_id: s.device_id,
        user_id: s.user_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadDoraStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/upload_dora_status");
      let r = {
        user_id: s.user_id,
        device_id: s.device_id,
        connect_status: s.connect_status,
        a2dp: s.a2dp,
        hfp: s.hfp,
        long_press_voice_inputing: s.long_press_voice_inputing,
        mic_occupy: s.mic_occupy,
        current_device_a2dp: s.current_device_a2dp,
        support_distinguish_a2dp: s.support_distinguish_a2dp
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadFile(e, t) {
      let s = this.genBaseURL("/alice/audio/upload_file");
      let i = {
        contents: e.contents,
        bot_id: e.bot_id,
        conversation_id: e.conversation_id,
        scene: e.scene,
        product_type: e.product_type,
        ext: e.ext
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AudioLaunch(e, t) {
      let s = this.genBaseURL("/alice/audio/launch");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetDoraVisionSettings(e, t) {
      let s = this.genBaseURL("/alice/audio/get_dora_vision_settings");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    UpdateDoraVisionSettings(e, t) {
      let s = this.genBaseURL("/alice/audio/update_dora_vision_settings");
      let i = {
        settings: (e || {}).settings
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    CreateUserQueryPair(e, t) {
      let s = this.genBaseURL("/alice/audio/create_query_pair");
      let i = {
        original_query_msg_id: e.original_query_msg_id,
        modify_query_msg_id: e.modify_query_msg_id,
        bot_id: e.bot_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    UpdateDoraExploreStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/update_dora_explore_status");
      let r = {
        bot_id: s.bot_id,
        conversation_id: s.conversation_id,
        event_type: s.event_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DoraLibraLaunch(e, t) {
      let s = this.genBaseURL("/alice/audio/dora_libra_launch");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    GetSummaryInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/get_summary_info");
      let r = {
        summary_id: s.summary_id,
        push_info: s.push_info
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    GetRTCTokenBatch(e, t) {
      let s = this.genBaseURL("/alice/audio/rtc/token_batch");
      let i = {
        token_num: (e || {}).token_num
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ProcessVisionFile(e, t) {
      let s = this.genBaseURL("/alice/audio/process_vision_file");
      let i = {
        contents: e.contents,
        bot_id: e.bot_id,
        conversation_id: e.conversation_id,
        scene: e.scene,
        product_type: e.product_type,
        ctrl_params: e.ctrl_params,
        vision_biz_scene: e.vision_biz_scene,
        dora_sn: e.dora_sn,
        rtos_version_code: e.rtos_version_code,
        ext: e.ext
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    MGetFeatureConf(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/mget_feature_conf");
      let r = {
        key: s.key,
        is_web: s.is_web,
        get_all: s.get_all
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    DoraUpdateConfig(e, t) {
      let s = this.genBaseURL("/alice/audio/dora_update_config");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    SessionMemorySummary(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/session_memory_summary");
      let r = {
        bot_id: s.bot_id,
        conversation_id: s.conversation_id,
        scene: s.scene,
        product_type: s.product_type,
        vision_biz_scene: s.vision_biz_scene,
        session_entity_id: s.session_entity_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    UploadVisionExtraInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/upload_vision_extra_info");
      let r = {
        contents: s.contents,
        product_type: s.product_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AstEndReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/ast_end_report");
      let r = {
        bot_id: s.bot_id,
        conversation_id: s.conversation_id,
        product_type: s.product_type,
        ast_info: s.ast_info
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    EndVisionMode(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/audio/wearable/end_vision_mode");
      let r = {
        bot_id: s.bot_id,
        conversation_id: s.conversation_id,
        product_type: s.product_type,
        vision_biz_scene: s.vision_biz_scene,
        session_entity_id: s.session_entity_id,
        mode_duration: s.mode_duration
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    CallDowngradeConfigPC(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/call/downgrade_config_pc");
      let r = {
        downgrade_configs_md5: s.downgrade_configs_md5,
        backup_md5: s.backup_md5,
        device_id: s.device_id
      };
      let a = {
        "X-Tt-Stress": s["X-Tt-Stress"]
      };
      return this.request({
        url: i,
        method: "POST",
        data: r,
        headers: a
      }, t);
    }
    constructor(e) {
      B(this, "request", () => {
        throw Error("AudioApiService.request is undefined");
      });
      B(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let J = flowApiServiceProxy.createServiceProxy("workspace", class extends n {
    constructor(e) {
      if (!(e == null ? undefined : e.request)) {
        super(e);
        return;
      }
      let t = e.request;
      super({
        baseURL: e == null ? undefined : e.baseURL,
        request: (e, s) => t({
          ...e,
          headers: {
            ...(e == null ? undefined : e.headers),
            "Agw-Js-Conv": "str"
          }
        }, s)
      });
    }
  });
  let X = flowApiServiceProxy.createServiceProxy("otterCore", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AgwHeartbeat(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/sync/heartbeat");
      let r = {
        member_id: s.member_id,
        trigger_time: s.trigger_time,
        inactive: s.inactive,
        last_interval_inactive: s.last_interval_inactive,
        channels: s.channels,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwWatch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/sync/watch");
      let r = {
        member_id: s.member_id,
        room_meta_list: s.room_meta_list
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwUnWatch(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/sync/unwatch");
      let r = {
        member_id: s.member_id,
        room_meta_list: s.room_meta_list,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwUpdateCursor(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/sync/update_cursor");
      let r = {
        member_id: s.member_id,
        user_id: s.user_id,
        room_meta: s.room_meta,
        cursor_info: s.cursor_info
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwGetMembers(e, t) {
      let s = this.genBaseURL("/samantha/otter/sync/get_members");
      let i = {
        room_meta: e.room_meta
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AgwGenAccessInfo(e, t) {
      let s = this.genBaseURL("/samantha/otter/sync/gen_access_info");
      let i = {
        Base: (e || {}).Base
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    AgwMGetUserOverview(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/sync/mget_user_overview");
      let r = {
        user_id_list: s.user_id_list,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      f(this, "request", () => {
        throw Error("OtterCoreApiService.request is undefined");
      });
      f(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let Y = flowApiServiceProxy.createServiceProxy("otterDoc", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWGetPageClientVars(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/pages/client_vars/");
      let i = {
        id: e.id,
        version: e.version,
        cursor: e.cursor,
        mode: e.mode,
        limit: e.limit,
        block_id: e.block_id,
        open_type: e.open_type,
        from: e.from,
        auth_token: e.auth_token,
        auth_type: e.auth_type,
        erase_revision_type: e.erase_revision_type
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    AGWRevertPageHistory(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/history/page/revert/");
      let i = {
        page_id: e.page_id,
        minor_version: e.minor_version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWMGetBlockRangeOps(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/blocks/fetch_miss/");
      let i = {
        params: e.params,
        page_id: e.page_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetDocInfoEditors(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/page/editors/");
      let i = {
        page_id: e.page_id,
        uids: e.uids
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWCreatePage(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/pages/create/");
      let i = {
        source: e.source,
        sub_type: e.sub_type,
        title: e.title,
        format: e.format,
        content: e.content,
        parent_node_id: e.parent_node_id,
        format_markdown_linebreak: e.format_markdown_linebreak
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWListPageHistory(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/history/page/list/");
      let i = {
        page_id: e.page_id,
        cursor: e.cursor,
        count: e.count,
        auth_type: e.auth_type,
        auth_token: e.auth_token
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    AGWProcessBlockChanges(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/blocks/user_change/");
      let i = {
        page_id: e.page_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWRevertPageHistoryStatus(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/history/page/revert_status/");
      let i = {
        page_id: e.page_id,
        task_id: e.task_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    AGWMGetBlockClientVars(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/blocks/record_client_vars/");
      let i = {
        ids: e.ids,
        page_id: e.page_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetPageChanges(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/history/page/get_changes/");
      let i = {
        page_id: e.page_id,
        from_ver: e.from_ver,
        to_ver: e.to_ver,
        auth_token: e.auth_token,
        auth_type: e.auth_type
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    AGWMDeletePage(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/pages/delete/");
      let i = {
        page_tokens: e.page_tokens,
        flag: e.flag
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWCopyPage(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/pages/clone/");
      let i = {
        page_token: e.page_token,
        source: e.source,
        source_map: e.source_map,
        title: e.title,
        subtype: e.subtype,
        auth_token: e.auth_token,
        auth_type: e.auth_type,
        parent_node_id: e.parent_node_id,
        copy_revision_attr: e.copy_revision_attr
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AgwCopyAttachment(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/attachment/copy");
      let r = {
        source_page_token: s.source_page_token,
        key: s.key,
        target_page_token: s.target_page_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwBindAttachment(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/attachment/bind");
      let r = {
        page_token: s.page_token,
        title: s.title,
        uri: s.uri,
        type: s.type,
        size: s.size,
        source: s.source,
        format: s.format,
        extra: s.extra
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwMGetAttachment(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/attachment/mget");
      let r = {
        page_token: s.page_token,
        keys: s.keys,
        auth_type: s.auth_type,
        auth_token: s.auth_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwListTemplate(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/template/list/");
      let i = {
        cursor: (e || {}).cursor
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWDeleteCollaborators(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/collaborators/delete");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        user_id: s.user_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGrantCollaborator(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/collaborators/grant");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        user_id: s.user_id,
        role: s.role
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGenInvitedToken(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/gen_invited_token");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        role: s.role,
        expired_time_sec: s.expired_time_sec,
        reset_invited_token: s.reset_invited_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetInvitedToken(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/get_invited_token");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWAccessInvitedToken(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/access_invited_token");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        invited_token: s.invited_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetCollaborators(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/collaborators/get");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetRole(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/get_role");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWListPageFromShare(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/list_page_from_share");
      let r = {
        cursor: s.cursor,
        size: s.size
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWInsertTemplateContent(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/pages/template_insert/");
      let i = {
        page_token: e.page_token,
        base_ver: e.base_ver,
        template_token: e.template_token
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWSetPublishMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/publish/set_meta");
      let r = {
        page_token: s.page_token,
        publish_status: s.publish_status,
        expired_time_sec: s.expired_time_sec
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWCopyPublishPage(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/publish/clone");
      let i = {
        page_token: (e || {}).page_token
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWReport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/report");
      let r = {
        page_token: s.page_token,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetPublishMeta(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/publish/get_meta");
      let r = {
        page_token: s.page_token,
        needs_auth_token: s.needs_auth_token
      };
      return this.request({
        url: i,
        method: "GET",
        params: r
      }, t);
    }
    AGWUpdateUserObjSetting(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/usersetting/update");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        settings: s.settings
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetUserObjSetting(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/usersetting/get");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwGetAttachmentDownloadInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/attachment/get_download_info");
      let r = {
        page_token: s.page_token,
        key: s.key
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetInvitedTokenDetail(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/get_invited_token_detail");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        invited_token: s.invited_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWMGetPageThumbnail(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/thumbnail/mget");
      let r = {
        page_token_list: s.page_token_list,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWReviewComment(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/review/comment");
      let r = {
        page_token: s.page_token,
        comments: s.comments
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWMGetPageMeta(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/pages/get_metas/");
      let i = {
        page_tokens: (e || {}).page_tokens
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWSetInternetPublic(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/set_internet_public");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token,
        is_open: s.is_open
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetInternetPublic(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/permission/get_internet_public");
      let r = {
        obj_type: s.obj_type,
        obj_token: s.obj_token
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWExportMultiFormats(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/export/");
      let i = {
        page_token: e.page_token,
        version: e.version,
        image_use_url: e.image_use_url,
        disable_escape: e.disable_escape
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetUserMigrateStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/d2d/user_migrate_status/get");
      let r = {
        user_id: s.user_id,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetPageUpgradeStatus(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/d2d/page_upgrade_status/get");
      let r = {
        page_type: s.page_type,
        page_id: s.page_id,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWLarkUID2DoubaoUID(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/doc/d2d/lark_uid2doubao_uid");
      let r = {
        lark_user_ids: s.lark_user_ids,
        Base: s.Base
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWEvalExport(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/eval_export/");
      let i = {
        page_token: e.page_token,
        version: e.version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetLarkUser(e, t) {
      let s = this.genBaseURL("/samantha/otter/doc/d2d/lark_user/get");
      let i = {
        Base: (e || {}).Base
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    constructor(e) {
      b(this, "request", () => {
        throw Error("OtterDocApiService.request is undefined");
      });
      b(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let $ = flowApiServiceProxy.createServiceProxy("otterConvert", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWCreatePageExport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/export/page/create");
      let r = {
        page_token: s.page_token,
        type: s.type,
        page_version: s.page_version
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetPageExport(e, t) {
      let s = this.genBaseURL("/samantha/otter/export/page/result");
      let i = {
        job_id: (e || {}).job_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWExportPageToMarkdown(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/export/page/to_markdown");
      let r = {
        page_token: s.page_token,
        page_version: s.page_version
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AgwUploadResource(e, t) {
      let s = this.genBaseURL("/samantha/otter/import/resource/upload");
      let i = {
        type: e.type,
        url: e.url
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AgwUploadCheck(e, t) {
      let s = this.genBaseURL("/samantha/otter/import/resource/upload_check");
      let i = {
        task_id_list: e.task_id_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWCreatePageImport(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/otter/import/page/create");
      let r = {
        file_uri: s.file_uri,
        type: s.type,
        file_name: s.file_name,
        parent_node_id: s.parent_node_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetPageImport(e, t) {
      let s = this.genBaseURL("/samantha/otter/import/page/result");
      let i = {
        job_id: (e || {}).job_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      v(this, "request", () => {
        throw Error("OtterConvertApiService.request is undefined");
      });
      v(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let Z = flowApiServiceProxy.createServiceProxy("creationArtifact", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWGetArtifact(e, t) {
      let s = this.genBaseURL("/samantha/creation/artifact/get");
      let i = {
        id: (e || {}).id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetArtifactMetaByResource(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/creation/artifact/get_meta_by_resource");
      let r = {
        resource_id: s.resource_id,
        resource_type: s.resource_type,
        need_current_version: s.need_current_version,
        artifact_type: s.artifact_type,
        need_histories: s.need_histories,
        source_type: s.source_type,
        try_fill_answer_message_id: s.try_fill_answer_message_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWSearchArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/creation/artifact/search");
      let r = {
        conversation_id: s.conversation_id,
        topic: s.topic,
        version: s.version,
        resource_type_list: s.resource_type_list,
        need_current_version: s.need_current_version
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWCreateArtifactByMessage(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/creation/artifact/create_by_message");
      let r = {
        message_id: s.message_id,
        source_id: s.source_id,
        source_type: s.source_type,
        resource_type: s.resource_type,
        source_content: s.source_content
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWUpdateArtifactBlock(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/creation/artifact/update_block");
      let r = {
        fields: s.fields,
        data: s.data,
        resource_id: s.resource_id,
        resource_type: s.resource_type,
        artifact_version_id: s.artifact_version_id,
        artifact_meta_id: s.artifact_meta_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetArtifactMetaByVersion(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/creation/artifact/meta/get_by_version");
      let r = {
        artifact_version_id: s.artifact_version_id,
        need_all_versions: s.need_all_versions
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      L(this, "request", () => {
        throw Error("CreationArtifactApiService.request is undefined");
      });
      L(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let ee = flowApiServiceProxy.createServiceProxy("commerceBenefitSupply", class extends q {
    constructor(e) {
      if (!(e == null ? undefined : e.request)) {
        super(e);
        return;
      }
      let t = e.request;
      super({
        baseURL: e == null ? undefined : e.baseURL,
        request: (e, s) => t({
          ...e,
          headers: {
            ...(e == null ? undefined : e.headers),
            "Agw-Js-Conv": "str"
          }
        }, s)
      });
    }
  });
  let et = flowApiServiceProxy.createServiceProxy("privacy", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    DebugSaveToken(e, t) {
      let s = this.genBaseURL("/alice/debug/save_token");
      let i = {
        log_id: e.log_id,
        token: e.token,
        feedback_source: e.feedback_source,
        feedback_type: e.feedback_type,
        feedback_content: e.feedback_content,
        message_id: e.message_id,
        section_id: e.section_id,
        mode: e.mode,
        batch_data: e.batch_data
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      p(this, "request", () => {
        throw Error("PrivacyApiService.request is undefined");
      });
      p(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let es = flowApiServiceProxy.createServiceProxy("otterCode", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWGetSubmission(e, t) {
      let s = this.genBaseURL("/samantha/code/facade/get_submission");
      let i = {
        submission_id: (e || {}).submission_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetSubmissionRankList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/facade/get_submission_ranklist");
      let r = {
        ranklist_type: s.ranklist_type,
        period: s.period,
        options: s.options,
        cursor: s.cursor,
        limit: s.limit
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWLikeSubmission(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/facade/like_submission");
      let r = {
        submission_id: s.submission_id,
        like_status: s.like_status
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWPublishSubmission(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/facade/publish_submission");
      let r = {
        title: s.title,
        description: s.description,
        cover_image_url: s.cover_image_url,
        artifact_key: s.artifact_key,
        code_id: s.code_id,
        category_type: s.category_type,
        activity_list: s.activity_list,
        user_contact: s.user_contact
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWSearchSubmission(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/facade/search_submission");
      let r = {
        key_word: s.key_word,
        limit: s.limit,
        cursor: s.cursor,
        user_id: s.user_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWRevokeSubmission(e, t) {
      let s = this.genBaseURL("/samantha/code/facade/revoke_submission");
      let i = {
        submission_id: (e || {}).submission_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWSearchCodeArtifact(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/facade/search_artifact");
      let r = {
        key_word: s.key_word,
        limit: s.limit,
        cursor: s.cursor,
        artifact_type: s.artifact_type
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetSubmissionFeed(e, t) {
      let s = this.genBaseURL("/samantha/code/facade/submission_feed");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWReportSubmission(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/samantha/code/facade/report_submission");
      let r = {
        submission_id: s.submission_id,
        reason_ids: s.reason_ids,
        reason_detail: s.reason_detail
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWMGetSubmissionByCodeIDs(e, t) {
      let s = this.genBaseURL("/samantha/code/facade/mget_submission_by_code_ids");
      let i = {
        code_id_list: (e || {}).code_id_list
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetSubmissionPublishConfig(e, t) {
      let s = this.genBaseURL("/samantha/code/facade/get_publish_info");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    constructor(e) {
      y(this, "request", () => {
        throw Error("OtterCodeApiService.request is undefined");
      });
      y(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let ei = flowApiServiceProxy.createServiceProxy("aiPptFacade", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWPPTActionbarConfig(e, t) {
      let s = this.genBaseURL("/alice/aippt/actionbar_config");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWPPTTemplateList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/template_list");
      let r = {
        category_id: s.category_id,
        cursor: s.cursor,
        size: s.size,
        insert_template_ids: s.insert_template_ids
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWSearchPPTImages(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/search_images");
      let r = {
        query: s.query,
        need_short_link: s.need_short_link
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGenPPTImages(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/gen_images");
      let r = {
        query: s.query,
        ratio: s.ratio,
        reference_images: s.reference_images,
        need_short_link: s.need_short_link,
        scene: s.scene
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGenImagesPromptRecommend(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/images/recommend_prompts");
      let r = {
        slide_presentation_id: s.slide_presentation_id,
        slide_id: s.slide_id,
        selected_img_element_id: s.selected_img_element_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWImageSearchKeywordsRecommend(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/images/search_keywords");
      let r = {
        slide_presentation_id: s.slide_presentation_id,
        slide_id: s.slide_id,
        selected_img_element_id: s.selected_img_element_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGenImagesPromptRecommendSSE(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/images/recommend_prompts/sse");
      let r = {
        slide_presentation_id: s.slide_presentation_id,
        slide_id: s.slide_id,
        selected_img_element_id: s.selected_img_element_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWImageSearchKeywordsRecommendSSE(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/images/search_keywords/sse");
      let r = {
        slide_presentation_id: s.slide_presentation_id,
        slide_id: s.slide_id,
        selected_img_element_id: s.selected_img_element_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWImageAIEditPromptsSSE(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/images/ai_edit_prompts/sse");
      let r = {
        slide_presentation_id: s.slide_presentation_id,
        slide_id: s.slide_id,
        selected_img_element_id: s.selected_img_element_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWPPTShareInfo(e, t) {
      let s = this.genBaseURL("/alice/aippt/share_info");
      let i = {
        presentation_id: (e || {}).presentation_id
      };
      return this.request({
        url: s,
        method: "GET",
        params: i
      }, t);
    }
    constructor(e) {
      w(this, "request", () => {
        throw Error("AiPptFacadeApiService.request is undefined");
      });
      w(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let er = flowApiServiceProxy.createServiceProxy("agentSuperTask", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWSuperTaskCancel(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/supertask/cancel");
      let r = {
        task_type: s.task_type,
        task_id: s.task_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      A(this, "request", () => {
        throw Error("AgentSupertaskApiService.request is undefined");
      });
      A(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let ea = flowApiServiceProxy.createServiceProxy("writingFacade", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWCreateStyle(e, t) {
      let s = this.genBaseURL("/alice/writing/styles/create");
      let i = {
        name: e.name,
        description: e.description,
        content: e.content
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWUpdateStyle(e, t) {
      let s = this.genBaseURL("/alice/writing/styles/update");
      let i = {
        style_id: e.style_id,
        name: e.name,
        description: e.description,
        content: e.content
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWDeleteStyle(e, t) {
      let s = this.genBaseURL("/alice/writing/styles/delete");
      let i = {
        style_id: e.style_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetStyleList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/writing/styles/list");
      let r = {
        limit: s.limit,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGenAuthUrl(e, t) {
      let s = this.genBaseURL("/alice/writing/auth/gen_url");
      let i = {
        redirect_uri: e.redirect_uri
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetDocList(e, t) {
      let s = this.genBaseURL("/alice/writing/docs/list");
      let i = {
        page_size: e.page_size,
        page_token: e.page_token,
        query: e.query
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWBatchGetDocTitle(e, t) {
      let s = this.genBaseURL("/alice/writing/docs/batch_get_title");
      let i = {
        doc_tokens: e.doc_tokens
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWAuthCallback(e, t) {
      let s = this.genBaseURL("/alice/writing/auth/callback");
      let i = {
        code: e.code,
        state: e.state,
        redirect_uri: e.redirect_uri
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWCheckAuthStatus(e, t) {
      let s = this.genBaseURL("/alice/writing/auth/check_status");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWDownloadAsDocx(e, t) {
      let s = this.genBaseURL("/alice/writing/doc/download");
      let i = {
        page_token: e.page_token,
        version: e.version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWGetDebugSPInfoList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/writing/debug_sp_infos/list");
      let r = {
        limit: s.limit,
        cursor: s.cursor
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWUpdateDebugSPInfo(e, t) {
      let s = this.genBaseURL("/alice/writing/debug_sp_infos/update");
      let i = {
        debug_sp_info_id: e.debug_sp_info_id,
        name: e.name,
        description: e.description,
        content: e.content
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWCreateDebugSPInfo(e, t) {
      let s = this.genBaseURL("/alice/writing/debug_sp_infos/create");
      let i = {
        name: e.name,
        description: e.description,
        prompt_key: e.prompt_key,
        version: e.version
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    AGWDeleteDebugSPInfo(e, t) {
      let s = this.genBaseURL("/alice/writing/debug_sp_infos/delete");
      let i = {
        debug_sp_info_id: e.debug_sp_info_id
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      r(this, "request", () => {
        throw Error("WritingFacadeApiService.request is undefined");
      });
      r(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let en = flowApiServiceProxy.createServiceProxy("flowChatXmemory", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    DeleteMemory(e, t) {
      let s = this.genBaseURL("/chat/memory/delete");
      let i = {
        bot_id: e.bot_id,
        memory_ids: e.memory_ids,
        AgwCommonParam: e.AgwCommonParam,
        Base: e.Base
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    GetMemoryList(e, t) {
      let s = this.genBaseURL("/chat/memory/list");
      let i = {
        bot_id: e.bot_id,
        AgwCommonParam: e.AgwCommonParam,
        Base: e.Base
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    ApiClearMemory(e, t) {
      let s = this.genBaseURL("/chat/memory/clear");
      let i = {
        bot_id: e.bot_id,
        AgwCommonParam: e.AgwCommonParam,
        Base: e.Base
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      R(this, "request", () => {
        throw Error("FlowChatXmemoryApiService.request is undefined");
      });
      R(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let eo = flowApiServiceProxy.createServiceProxy("aispaceFacade", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWGetAISpaceMigrateStatus(e, t) {
      let s = this.genBaseURL("/alice/aispace/facade/get_migrate_status");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWGetUserStorage(e, t) {
      let s = this.genBaseURL("/alice/aispace/facade/get_user_storage");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWPackNodeDoubaoInfo(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aispace/facade/pack_node_doubao_info");
      let r = {
        items: s.items,
        doubao_user_id: s.doubao_user_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWGetUserSystemDirInfo(e, t) {
      let s = this.genBaseURL("/alice/aispace/facade/get_user_system_dir_info");
      let i = {
        dir_type: (e || {}).dir_type
      };
      return this.request({
        url: s,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      O(this, "request", () => {
        throw Error("AispaceFacadeApiService.request is undefined");
      });
      O(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  let e_ = flowApiServiceProxy.createServiceProxy("aiPptTemplateFacade", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    AGWPPTActionbarConfig(e, t) {
      let s = this.genBaseURL("/alice/aippt/actionbar_config");
      return this.request({
        url: s,
        method: "POST"
      }, t);
    }
    AGWPPTTemplateList(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/template_list");
      let r = {
        category_id: s.category_id,
        cursor: s.cursor,
        size: s.size,
        insert_template_ids: s.insert_template_ids
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    AGWPPTemplateDetail(e, t) {
      let s = e || {};
      let i = this.genBaseURL("/alice/aippt/template/detail");
      let r = {
        template_type: s.template_type,
        template_id: s.template_id
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      G(this, "request", () => {
        throw Error("AiPptTemplateFacadeApiService.request is undefined");
      });
      G(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  require.d(exports, {
    SamanthaImApiService: function () {
      return V;
    },
    CommerceBenefitSupplyApiService: function () {
      return Q;
    },
    AgentSupertaskApiService: function () {
      return er;
    },
    SettingApiService: function () {
      return F;
    },
    WritingFacadeApiService: function () {
      return ea;
    },
    PrivacyApiService: function () {
      return et;
    },
    AiPptFacadeApiService: function () {
      return ei;
    },
    SearchApiService: function () {
      return z;
    },
    WorkspaceApiService: function () {
      return J;
    },
    AliceBotApiService: function () {
      return E;
    },
    MessageApiService: function () {
      return j;
    },
    OtterConvertApiService: function () {
      return $;
    },
    FlowChatXmemoryApiService: function () {
      return en;
    },
    AliceApiService: function () {
      return x;
    },
    ProfileApiService: function () {
      return M;
    },
    AiPptTemplateFacadeApiService: function () {
      return e_;
    },
    OtterCoreApiService: function () {
      return X;
    },
    SafetyApiService: function () {
      return D;
    },
    AispaceFacadeApiService: function () {
      return eo;
    },
    AudioApiService: function () {
      return K;
    },
    CommerceBenefitSupplyService: function () {
      return ee;
    },
    AliceConversationApiService: function () {
      return W;
    },
    CreationArtifactApiService: function () {
      return Z;
    },
    AccountApiService: function () {
      return H;
    },
    OtterCodeApiService: function () {
      return es;
    },
    OtterDocApiService: function () {
      return Y;
    },
    SamanthaApiService: function () {
      return I;
    },
    ResourceApiService: function () {
      return N;
    }
  });
}