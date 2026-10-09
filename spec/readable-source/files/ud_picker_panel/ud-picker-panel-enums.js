// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$f' to 'ThreadScope'
// - Renamed export 'E_' to 'UserScope'
// - Renamed export 'Fi' to 'ThreadType'
// - Renamed export 'G5' to 'TenantScope'
// - Renamed export 'O' to 'ManagedState'
// - Renamed export 'Q3' to 'ContactType'
// - Renamed export 'ax' to 'Visibility'
// - Renamed export 'c3' to 'Signature'
// - Renamed export 'pI' to 'ShieldStatus'
// - Renamed export 'pm' to 'ManagedFlag'
// - Renamed export 'tv' to 'TenantType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 24143
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
  (_ = r ||= {})[_.ALL_TENANT = 0] = "ALL_TENANT";
  _[_.NOT_CROSS_TENANT = 1] = "NOT_CROSS_TENANT";
  _[_.CROSS_TENANT = 2] = "CROSS_TENANT";
  (p = o ||= {})[p.ALL_THREAD = 0] = "ALL_THREAD";
  p[p.CHAT_THREAD = 1] = "CHAT_THREAD";
  p[p.MSG_THREAD = 2] = "MSG_THREAD";
  (E = i ||= {})[E.ALL_STATUS = 0] = "ALL_STATUS";
  E[E.PUBLIC = 1] = "PUBLIC";
  E[E.PRIVATE = 2] = "PRIVATE";
  (C = a ||= {})[C.ALL = 0] = "ALL";
  C[C.RESIGNED = 1] = "RESIGNED";
  C[C.SIGNED = 2] = "SIGNED";
  (h = c ||= {})[h.ALL = 0] = "ALL";
  h[h.SELF = 1] = "SELF";
  h[h.OTHERS = 2] = "OTHERS";
  (v = u ||= {})[v.ALL = 0] = "ALL";
  v[v.CROSS_TENANT = 1] = "CROSS_TENANT";
  v[v.INNER_TENANT = 2] = "INNER_TENANT";
  v[v.COLLABORATION_CONTACT = 3] = "COLLABORATION_CONTACT";
  (R = s ||= {})[R.ALL = 0] = "ALL";
  R[R.CROSS_TENANT = 1] = "CROSS_TENANT";
  R[R.INNER_TENANT = 2] = "INNER_TENANT";
  (T = l ||= {})[T.ALL = 0] = "ALL";
  T[T.THREAD_CHAT = 1] = "THREAD_CHAT";
  T[T.OTHERS = 2] = "OTHERS";
  (g = f ||= {})[g.ALL = 0] = "ALL";
  g[g.SHIELD = 1] = "SHIELD";
  g[g.OTHERS = 2] = "OTHERS";
  (N = d ||= {})[N.ALL = 0] = "ALL";
  N[N.MANAGED = 1] = "MANAGED";
  (A = m ||= {})[A.ALL = 0] = "ALL";
  A[A.MANAGED = 1] = "MANAGED";
  require.d(exports, {
    ThreadScope: function () {
      return o;
    },
    UserScope: function () {
      return c;
    },
    ThreadType: function () {
      return l;
    },
    TenantScope: function () {
      return r;
    },
    ManagedState: function () {
      return m;
    },
    ContactType: function () {
      return u;
    },
    Visibility: function () {
      return i;
    },
    Signature: function () {
      return a;
    },
    ShieldStatus: function () {
      return f;
    },
    ManagedFlag: function () {
      return d;
    },
    TenantType: function () {
      return s;
    }
  });
}