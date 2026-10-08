// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$f' to 'ThreadScope'
// - Renamed export 'Bk' to 'SelectionMode'
// - Renamed export 'E_' to 'UserScope'
// - Renamed export 'FW' to 'ThreadType'
// - Renamed export 'Fi' to 'ThreadTypeEnum'
// - Renamed export 'G5' to 'TenantScope'
// - Renamed export 'L9' to 'BlockState'
// - Renamed export 'O' to 'ManagedState'
// - Renamed export 'Q3' to 'ContactType'
// - Renamed export 'UZ' to 'ScopeType'
// - Renamed export 'Yz' to 'LeaderType'
// - Renamed export 'ax' to 'Visibility'
// - Renamed export 'c3' to 'Signature'
// - Renamed export 'cJ' to 'PickerMode'
// - Renamed export 'dh' to 'NodeType'
// - Renamed export 'gN' to 'ForwardAction'
// - Renamed export 'nv' to 'ListType'
// - Renamed export 'or' to 'MemberType'
// - Renamed export 'pI' to 'ShieldStatus'
// - Renamed export 'pm' to 'ManagedFlag'
// - Renamed export 'tv' to 'TenantType'
// - Renamed export 'uC' to 'ContactTypeEnum'
// - Renamed export 'xR' to 'NodeCategory'
// - Renamed export 'xl' to 'ChatFilter'
// - Renamed export 'yH' to 'StorageType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 69325
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
  var f;
  var d;
  var m;
  var _;
  var p;
  var E;
  var C;
  var h;
  var v;
  var R;
  var T;
  var g;
  var N;
  var A;
  var O;
  var L;
  var b;
  var y;
  var k;
  var P;
  var S;
  var I;
  var D;
  var Z;
  var udPickerPanelEnums = require("ud-picker-panel-enums") /*id: 24143*/;
  (r = v ||= {})[r.DEFAULT = 0] = "DEFAULT";
  r[r.CROSS_TENANT = 1] = "CROSS_TENANT";
  r[r.NOT_FRIEND = 2] = "NOT_FRIEND";
  r[r.EMPTY_NAME = 3] = "EMPTY_NAME";
  r[r.EMPTY_PHONE = 4] = "EMPTY_PHONE";
  (o = R ||= {})[o.NONE = 0] = "NONE";
  o[o.READ = 1] = "READ";
  o[o.UNREAD = 2] = "UNREAD";
  (i = T ||= {})[i.SINGLE = 0] = "SINGLE";
  i[i.BATCH = 1] = "BATCH";
  (a = g ||= {})[a.UNKNOWN = 0] = "UNKNOWN";
  a[a.CHATTER = 1] = "CHATTER";
  a[a.GROUP = 2] = "GROUP";
  a[a.EXTERNAL_CONTACT = 3] = "EXTERNAL_CONTACT";
  a[a.NAME_CARD = 4] = "NAME_CARD";
  a[a.SHARED_MAILBOX = 5] = "SHARED_MAILBOX";
  a[a.MAIL_GROUP = 6] = "MAIL_GROUP";
  a[a.NONE_TYPE = 7] = "NONE_TYPE";
  (c = N ||= {}).DEFAULT = "default";
  c.ORGANIZATION = "organization";
  c.EXTERNAL = "external";
  c.EDUCATION = "education";
  c.GROUP_CHATS = "group_chats";
  c.COLLABORATION = "collaboration";
  c.COLLABORATION_DEPARTMENT = "collaboration_department";
  c.EMAIL_CONTACT = "email_contact";
  c.SHARE_EMAILBOX = "share_emailbox";
  c.URGENT = "urgent";
  c.USER_GROUP = "user_group";
  (u = A ||= {})[u.chatter = 0] = "chatter";
  u[u.chat = 1] = "chat";
  u[u.docs = 2] = "docs";
  u[u.department = 3] = "department";
  u[u.studyDepartment = 4] = "studyDepartment";
  u[u.root = 5] = "root";
  u[u.tenant = 6] = "tenant";
  u[u.manualEmail = 7] = "manualEmail";
  u[u.mailContact = 8] = "mailContact";
  u[u.shareMailbox = 9] = "shareMailbox";
  u[u.custom = 10] = "custom";
  u[u.myAi = 31] = "myAi";
  u[u.userGroup = 35] = "userGroup";
  (s = O ||= {})[s.BE_BLOCKED = 1] = "BE_BLOCKED";
  s[s.BLOCKED = 5] = "BLOCKED";
  s[s.CROSS_TEANAT = 2] = "CROSS_TEANAT";
  s[s.ADD_GROUP_MEMBER = 3] = "ADD_GROUP_MEMBER";
  s[s.CRYPTO_CHAT_DENY = 4] = "CRYPTO_CHAT_DENY";
  s[s.URGENT = 6] = "URGENT";
  s[s.UNKNOWN = -1] = "UNKNOWN";
  (l = L ||= {}).ALL_CHATS = "all_chats";
  l.GROUP_CHATS = "group_chats";
  l.P2P_CHATS = "p2p_chats";
  l.BOT = "bot";
  l.WITHOUT_CROSS_TENANT_CHATS = "without_cross_tenant_chats";
  (f = b ||= {})[f.UNKNOWN = 0] = "UNKNOWN";
  f[f.CREARE_SINGGLE_CHAT = 1] = "CREARE_SINGGLE_CHAT";
  f[f.CREATE_GROUP_CHAT = 2] = "CREATE_GROUP_CHAT";
  f[f.MERGE_FORWARD = 3] = "MERGE_FORWARD";
  f[f.FORWARD = 4] = "FORWARD";
  f[f.SHARE = 5] = "SHARE";
  f[f.ADD_GROUP_MEMBER = 6] = "ADD_GROUP_MEMBER";
  f[f.DING = 7] = "DING";
  (d = y ||= {})[d.simpleMode = 0] = "simpleMode";
  d[d.showOnlyExternalContactsMode = 1] = "showOnlyExternalContactsMode";
  d[d.completeMode = 2] = "completeMode";
  (m = k ||= {})[m.LEADER = 1] = "LEADER";
  m[m.DEPARTMENT = 2] = "DEPARTMENT";
  m[m.USER = 3] = "USER";
  (_ = P ||= {})[_.MainLeader = 1] = "MainLeader";
  _[_.SubLeader = 2] = "SubLeader";
  _[_.EnterpriseLeader = 3] = "EnterpriseLeader";
  (p = S ||= {})[p.normal = 0] = "normal";
  p[p.other = 1] = "other";
  (E = I ||= {})[E.selectList = 0] = "selectList";
  E[E.selectedList = 1] = "selectedList";
  E[E.other = 2] = "other";
  (C = D ||= {})[C.NETWORK = 0] = "NETWORK";
  C[C.DB = 1] = "DB";
  C[C.NETWORK_FAIL_OVER = 2] = "NETWORK_FAIL_OVER";
  (h = Z ||= {})[h.LARK_GROUP = 0] = "LARK_GROUP";
  h[h.LARK_CALENDAR = 1] = "LARK_CALENDAR";
  h[h.CONTACT = 2] = "CONTACT";
  h[h.GROUP_USER = 3] = "GROUP_USER";
  h[h.MAILING_LIST = 4] = "MAILING_LIST";
  h[h.DEPARTMENT = 5] = "DEPARTMENT";
  h[h.EXTERNAL_CONTACT = 6] = "EXTERNAL_CONTACT";
  h[h.COMPANY = 7] = "COMPANY";
  h[h.SHARED_ACCOUNT = 8] = "SHARED_ACCOUNT";
  h[h.UNKNOWN_MEMBER_TYPE = 255] = "UNKNOWN_MEMBER_TYPE";
  require.d(exports, {
    ThreadScope: function () {
      return udPickerPanelEnums.ThreadScope;
    },
    SelectionMode: function () {
      return T;
    },
    UserScope: function () {
      return udPickerPanelEnums.UserScope;
    },
    ThreadType: function () {
      return S;
    },
    ThreadTypeEnum: function () {
      return udPickerPanelEnums.ThreadType;
    },
    TenantScope: function () {
      return udPickerPanelEnums.TenantScope;
    },
    BlockState: function () {
      return O;
    },
    ManagedState: function () {
      return udPickerPanelEnums.ManagedState;
    },
    ContactType: function () {
      return udPickerPanelEnums.ContactType;
    },
    ScopeType: function () {
      return N;
    },
    LeaderType: function () {
      return P;
    },
    Visibility: function () {
      return udPickerPanelEnums.Visibility;
    },
    Signature: function () {
      return udPickerPanelEnums.Signature;
    },
    PickerMode: function () {
      return y;
    },
    NodeType: function () {
      return k;
    },
    ForwardAction: function () {
      return b;
    },
    ListType: function () {
      return I;
    },
    MemberType: function () {
      return Z;
    },
    ShieldStatus: function () {
      return udPickerPanelEnums.ShieldStatus;
    },
    ManagedFlag: function () {
      return udPickerPanelEnums.ManagedFlag;
    },
    TenantType: function () {
      return udPickerPanelEnums.TenantType;
    },
    ContactTypeEnum: function () {
      return g;
    },
    NodeCategory: function () {
      return A;
    },
    ChatFilter: function () {
      return L;
    },
    StorageType: function () {
      return D;
    }
  });
}