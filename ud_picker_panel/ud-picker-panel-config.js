// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B7' to 'groupChatsConfig'
// - Renamed export 'Bq' to 'pickerClassName'
// - Renamed export 'CP' to 'conditionTypes'
// - Renamed export 'Cj' to 'infoTypes'
// - Renamed export 'DB' to 'filterConfigs'
// - Renamed export 'Hd' to 'collaborationConfig'
// - Renamed export 'IW' to 'zeroString'
// - Renamed export 'IY' to 'defaultType'
// - Renamed export 'Ih' to 'zeroStringAlt'
// - Renamed export 'L8' to 'maxSearchLimit'
// - Renamed export 'MT' to 'filterSelectMap'
// - Renamed export 'Mn' to 'defaultIndex'
// - Renamed export 'PG' to 'selectedChangeEvent'
// - Renamed export 'Q3' to 'userGroupConfig'
// - Renamed export 'S$' to 'keyboardKeys'
// - Renamed export 'S3' to 'zeroNumber'
// - Renamed export 'U_' to 'forwardViewKey'
// - Renamed export 'XZ' to 'scopeTypeMapping'
// - Renamed export 'Zh' to 'shareMailboxConfig'
// - Renamed export 'c4' to 'typeFilterConfig'
// - Renamed export 'd' to 'defaultWidth'
// - Renamed export 'et' to 'organizationConfig'
// - Renamed export 'fg' to 'emailContactConfig'
// - Renamed export 'hz' to 'iconDimensions'
// - Renamed export 'iT' to 'contactsConfig'
// - Renamed export 'iw' to 'defaultCount'
// - Renamed export 'jr' to 'myAiSwitchKey'
// - Renamed export 'k4' to 'maxRecentLimit'
// - Renamed export 'kp' to 'rootValue'
// - Renamed export 'mY' to 'chatFilterTypes'
// - Renamed export 'nT' to 'zeroOffset'
// - Renamed export 'od' to 'zeroPadding'
// - Renamed export 'oe' to 'minSpacing'
// - Renamed export 'qt' to 'maxItems'
// - Renamed export 'rO' to 'configKeys'
// - Renamed export 'rg' to 'defaultSize'
// - Renamed export 'ud' to 'educationConfig'
// - Renamed export 'wP' to 'scopeTypeValues'
// - Renamed export 'z4' to 'disableConfig'
// - Renamed export 'z6' to 'defaultHeight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 400544
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  var s;
  var l;
  var udPickerConfig = require("ud-picker-config") /*id: 177642*/;
  var udPickerPanelEnums_1 = require("ud-picker-panel-enums_1") /*id: 69325*/;
  let m = 48;
  let _ = 48;
  let p = `${udPickerConfig.appPlatform}-picker`;
  let E = 10;
  let C = "default";
  (r = c ||= {}).contacts = "-1";
  r.external = "-2";
  r.education = "-3";
  r.group_chats = "-4";
  r.collaboration = "-5";
  r.organization = "-6";
  r.emailcontact = "-7";
  r.shareMailBox = "-8";
  r.userGroup = "-9";
  (o = u ||= {})[o.ICON = 0] = "ICON";
  o[o.INFO = 1] = "INFO";
  let h = {
    id: c.organization,
    name: "Lark_Legacy_StructureDepartments"
  };
  let v = {
    id: c.external,
    name: "Lark_Legacy_StructureExternal"
  };
  let R = {
    id: c.contacts,
    name: "Lark_Legacy_Contact"
  };
  let T = {
    id: c.education,
    name: "Lark_Education_SchoolParentContacts"
  };
  let g = {
    id: c.group_chats,
    name: "Lark_Groups_MyGroups"
  };
  let N = {
    id: c.collaboration,
    name: "Lark_B2B_TrustedParties"
  };
  let A = {
    id: c.emailcontact,
    name: "Lark_Contacts_EmailContacts"
  };
  let O = {
    id: c.shareMailBox,
    name: "Lark_Contacts_PublicMailbox"
  };
  let L = {
    id: c.userGroup,
    name: "Lark_IM_Picker_UserGroups_Breadcrum"
  };
  let b = 30;
  let y = 0;
  let k = 0;
  let P = 5;
  let S = {
    ENTER: 13,
    DOWN: 40,
    UP: 38,
    TAB: 9
  };
  let I = -1;
  let D = 0;
  let Z = {
    organization: "bussiness_org",
    chat: "recent_chat",
    external: "external_contacts",
    education: "academic_org",
    groupMember: "group_member",
    search: "search",
    docs: "recent_docs",
    ding: "ding_group_member",
    myGroupChats: "my_group_chats",
    collaboration: "b2b_collaboration"
  };
  let x = {
    disable: false,
    disableTips: ""
  };
  let U = "0";
  let w = "0";
  let M = "root";
  let H = {
    [udPickerPanelEnums_1.ScopeType.ORGANIZATION]: Z.organization,
    [udPickerPanelEnums_1.ScopeType.GROUP_CHATS]: Z.myGroupChats,
    [udPickerPanelEnums_1.ScopeType.EDUCATION]: Z.education,
    [udPickerPanelEnums_1.ScopeType.EXTERNAL]: Z.external,
    [udPickerPanelEnums_1.ScopeType.DEFAULT]: Z.search,
    [udPickerPanelEnums_1.ScopeType.COLLABORATION]: Z.collaboration
  };
  let B = {
    selectedDataChange: "selectedDataChange"
  };
  let W = 5;
  let G = 30;
  let F = {
    width: "32px",
    height: "32px"
  };
  (i = s ||= {}).TENANT_CONDITION = "tenantCondition";
  i.THREAD_TYPE_CONDITION = "threadTypeCondition";
  i.TALKED_STATUS_CONDITION = "talkedStatusCondition";
  i.USER_TYPE_CONDITION = "userTypeCondition";
  i.WORK_STATUS_CONDITION = "workStatusCondition";
  i.GROUP_CHAT_TYPE_CONDITION = "groupChatTypeCondition";
  i.PBULIC_TYPE_CONDITION = "publicTypeCondition";
  i.SHILES_TYPE_CONDITION = "shieldTypeCondition";
  (a = l ||= {}).BOT = "botConfigs";
  a.GROUP_CHAT = "groupChatConfigs";
  a.USER = "userConfigs";
  a.THREAD = "threadConfigs";
  a.MY_AI = "myAiConfigs";
  let K = {
    [s.TENANT_CONDITION]: {
      defaultValue: 1,
      propMap: {
        externalEnable: {
          true: 0,
          false: 1
        }
      }
    },
    [s.THREAD_TYPE_CONDITION]: {
      propMap: {
        showMsgThread: {
          true: 2
        },
        ignoreThread: {
          false: 1
        }
      }
    },
    [s.TALKED_STATUS_CONDITION]: {
      defaultValue: 0
    },
    [s.USER_TYPE_CONDITION]: {
      defaultValue: 0
    },
    [s.WORK_STATUS_CONDITION]: {
      defaultValue: 2
    },
    [s.GROUP_CHAT_TYPE_CONDITION]: {
      defaultValue: 0
    },
    [s.PBULIC_TYPE_CONDITION]: {
      defaultValue: 0
    },
    [s.SHILES_TYPE_CONDITION]: {
      defaultValue: 0
    }
  };
  let z = {
    [l.BOT]: [],
    [l.USER]: [s.TENANT_CONDITION, s.TALKED_STATUS_CONDITION, s.USER_TYPE_CONDITION, s.WORK_STATUS_CONDITION],
    [l.GROUP_CHAT]: [s.TENANT_CONDITION, s.GROUP_CHAT_TYPE_CONDITION, s.PBULIC_TYPE_CONDITION, s.SHILES_TYPE_CONDITION],
    [l.THREAD]: [s.TENANT_CONDITION, s.PBULIC_TYPE_CONDITION, s.THREAD_TYPE_CONDITION]
  };
  let j = {
    defaultValue: Object.keys(z),
    selectTypeMap: {
      [udPickerPanelEnums_1.ChatFilter.GROUP_CHATS]: [l.GROUP_CHAT],
      [udPickerPanelEnums_1.ChatFilter.BOT]: [l.BOT],
      [udPickerPanelEnums_1.ChatFilter.P2P_CHATS]: [l.USER],
      [udPickerPanelEnums_1.ChatFilter.ALL_CHATS]: [l.GROUP_CHAT, l.BOT, l.USER],
      [udPickerPanelEnums_1.ChatFilter.WITHOUT_CROSS_TENANT_CHATS]: [l.GROUP_CHAT, l.BOT, l.USER]
    }
  };
  let $ = "lark.my_ai.main_switch";
  let Y = "im.forward.recentview.recentforward";
  require.d(exports, {
    groupChatsConfig: function () {
      return g;
    },
    pickerClassName: function () {
      return p;
    },
    conditionTypes: function () {
      return s;
    },
    infoTypes: function () {
      return u;
    },
    filterConfigs: function () {
      return K;
    },
    collaborationConfig: function () {
      return N;
    },
    zeroString: function () {
      return w;
    },
    defaultType: function () {
      return C;
    },
    zeroStringAlt: function () {
      return U;
    },
    maxSearchLimit: function () {
      return b;
    },
    filterSelectMap: function () {
      return j;
    },
    defaultIndex: function () {
      return I;
    },
    selectedChangeEvent: function () {
      return B;
    },
    userGroupConfig: function () {
      return L;
    },
    keyboardKeys: function () {
      return S;
    },
    zeroNumber: function () {
      return y;
    },
    forwardViewKey: function () {
      return Y;
    },
    scopeTypeMapping: function () {
      return H;
    },
    shareMailboxConfig: function () {
      return O;
    },
    typeFilterConfig: function () {
      return z;
    },
    defaultWidth: function () {
      return v;
    },
    organizationConfig: function () {
      return h;
    },
    emailContactConfig: function () {
      return A;
    },
    iconDimensions: function () {
      return F;
    },
    contactsConfig: function () {
      return R;
    },
    defaultCount: function () {
      return W;
    },
    myAiSwitchKey: function () {
      return $;
    },
    maxRecentLimit: function () {
      return E;
    },
    rootValue: function () {
      return M;
    },
    chatFilterTypes: function () {
      return c;
    },
    zeroOffset: function () {
      return D;
    },
    zeroPadding: function () {
      return k;
    },
    minSpacing: function () {
      return P;
    },
    maxItems: function () {
      return G;
    },
    configKeys: function () {
      return l;
    },
    defaultSize: function () {
      return m;
    },
    educationConfig: function () {
      return T;
    },
    scopeTypeValues: function () {
      return Z;
    },
    disableConfig: function () {
      return x;
    },
    defaultHeight: function () {
      return _;
    }
  });
}