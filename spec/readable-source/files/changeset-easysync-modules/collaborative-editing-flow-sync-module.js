// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bL' to 'ErrorCodes'
// - Renamed export 'Bu' to 'createSyncBuffer'
// - Renamed export 'k7' to 'formatOpsForLog'
// - Renamed export 'Iu' to 'FlowCollab'
// - Renamed export 'Q7' to 'recoverableErrorCodes'
// - Renamed export '__' to 'invertOperations'
// - Renamed export 'zg' to 'BackupModule'
// - Renamed export 'Tw' to 'UndoManager'
// - Renamed export 'XM' to 'isCreateOperation'
// - Renamed export 'kr' to 'isDeleteOperation'
// - Renamed export 'qI' to 'mergeOperations'
// - Renamed export 'AT' to 'nonRecoverableErrorCodes'
// - Renamed export 'V8' to 'Record'
// - Renamed export 'gr' to 'LogCategories'
// - Renamed export 'sL' to 'RecordManager'
// - Renamed export 'WV' to 'VisibilityState'
// - Renamed export 'iI' to 'FlowSync'
// - Renamed export 'oL' to 'OperationBuilder'
// - Renamed export 'u' to 'SyncStatus'
// - Renamed export 'dx' to 'isListMoveOperation'
// - Renamed export 'E9' to 'transformOperations'
// - Renamed export 'j0' to 'UndoModule'
// - Renamed export 'Bv' to 'isListDeleteOperation'
// - Renamed export 'Lp' to 'isListInsertOperation'
// - Renamed export 'SM' to 'ErrorType'
// - Renamed export 'gW' to 'isListUpdateOperation'
// - Renamed export 'zf' to 'mergeOperationsWithTransform'
// - Renamed export 'GI' to 'CollabMode'
// - Renamed export 'Zy' to 'offline'
// - Renamed export 'Nw' to 'MessageType'
// - Renamed export 'R7' to 'transformOperationsWithInvert'
// - Renamed export 'rG' to 'SyncDirection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 756448
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var s;
  var a;
  var u;
  var c;
  var l;
  var p;
  var h;
  var f;
  var d;
  var v;
  var y;
  var g;
  var _;
  var m;
  var b;
  var E;
  var w;
  var S;
  var T;
  var I;
  var A;
  var C;
  var M;
  var k;
  var O;
  var R;
  var D;
  var N;
  var x;
  var P;
  var B;
  var L;
  var F;
  var j;
  var U;
  var z;
  var H;
  var V;
  var Z;
  var q;
  var W;
  var G;
  var Y;
  var K;
  var $;
  var operationalTransformCore = require("operational-transform-core") /*id: 379386*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var Q = debugBrowserConfig;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var tn = eventEmitterUmd;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  function ty(t, e) {
    for (var n = t == null ? 0 : t.length; n-- && e(t[n], n, t) !== false;);
    return t;
  }
  var tg = require("base-object-iterator") /*id: 518137*/.createForEach(true);
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var tm = require("array-foreach-util") /*id: 633499*/.createForEach(function (t, e) {
    return t && tg(t, e, getOwnKeys.getOwnKeys);
  }, true);
  var functionCoercionUtil = require("function-coercion-util") /*id: 131864*/;
  function tE(t, e) {
    return (tE = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }
  function tw(t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function n() {
      this.constructor = t;
    }
    tE(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function tS() {
    return (tS = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function tT(t, e, n, r) {
    return new (n ||= Promise)(function (i, o) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        var e;
        if (t.done) {
          i(t.value);
        } else {
          ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(s, a);
        }
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function tI(t, e) {
    var n;
    var r;
    var i;
    var o;
    var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function a(o) {
      return function (a) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && s.label < i[1]) {
                    s.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              o = [6, t];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, a]);
      };
    }
  }
  function tA(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function tC(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return s;
  }
  function tM(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  function tk(t, e, n, r) {
    var i = Date.now();
    var o = operationalTransformCore.transform(t, e, n);
    var s = Date.now() - i;
    if (s > (r.overtimeToLog || 100)) {
      r.log({
        cost_time: s,
        left_length: t.length,
        right_length: e.length,
        from: r.from
      });
    }
    return o;
  }
  (r = A ||= {})[r.UNKNOWN = 1] = "UNKNOWN";
  r[r.LOGIN_REQUIRED = 5] = "LOGIN_REQUIRED";
  r[r.VERSION_TOO_OLD = 1010] = "VERSION_TOO_OLD";
  r[r.APPLY_FAILED = -101001] = "APPLY_FAILED";
  r[r.CHANGE_CALLBACK_ERROR = -101002] = "CHANGE_CALLBACK_ERROR";
  r[r.TRANSACTION_CALLBACK_ERROR = -101066] = "TRANSACTION_CALLBACK_ERROR";
  r[r.ILLEGAL_RECORD_SNAPSHOT = -102001] = "ILLEGAL_RECORD_SNAPSHOT";
  r[r.REDUCE_OPERATION_ERROR = -102002] = "REDUCE_OPERATION_ERROR";
  r[r.CHANGE_COLLECT_ERROR = -103000] = "CHANGE_COLLECT_ERROR";
  r[r.COMPOSE_TO_Y_FAILED = -103001] = "COMPOSE_TO_Y_FAILED";
  r[r.TRANSFORM_X_FAILED = -103002] = "TRANSFORM_X_FAILED";
  r[r.TRANSFORM_Y_FAILED = -103003] = "TRANSFORM_Y_FAILED";
  r[r.HANDLE_NEWCHANGES_NOT_EXIST_RECORD = -103004] = "HANDLE_NEWCHANGES_NOT_EXIST_RECORD";
  r[r.TEMP_CHANGE_ERROR = -103005] = "TEMP_CHANGE_ERROR";
  r[r.SUBMIT_OVER_TIME = -1001] = "SUBMIT_OVER_TIME";
  r[r.NETWORK_ERROR = -104000] = "NETWORK_ERROR";
  r[r.ENTITY_NOT_EXIST = -104001] = "ENTITY_NOT_EXIST";
  r[r.SET_VERSION_ERROR = -104002] = "SET_VERSION_ERROR";
  r[r.VERIFY_FETCH_MISS_FAILED = -104003] = "VERIFY_FETCH_MISS_FAILED";
  r[r.BLOCK_BUILD_FAILED = -201001] = "BLOCK_BUILD_FAILED";
  r[r.SET_LOCAL_FAILED = -202001] = "SET_LOCAL_FAILED";
  r[r.COLLECT_FAILED = -301001] = "COLLECT_FAILED";
  r[r.RENDER_ERROR = -301002] = "RENDER_ERROR";
  r[r.SCHEMA_ERROR = -4000020] = "SCHEMA_ERROR";
  r[r.LAZY_RECORD_RES_EXCEPTION = -101020] = "LAZY_RECORD_RES_EXCEPTION";
  r[r.CODE_CURSOR_INVALID = 4000091] = "CODE_CURSOR_INVALID";
  r[r.POST_BODY_EMPTY = 1028] = "POST_BODY_EMPTY";
  r[r.NO_PERMISSION = 4030004] = "NO_PERMISSION";
  r[r.INVALID_PARAM = 4000002] = "INVALID_PARAM";
  r[r.NOT_FOUND = 4000003] = "NOT_FOUND";
  r[r.DELETED = 4000007] = "DELETED";
  r[r.TOO_MANY_BLOCKS_IN_PAGE = 4000010] = "TOO_MANY_BLOCKS_IN_PAGE";
  r[r.TOO_MANY_CHART_REFFERRED_IN_PAGE = 4000012] = "TOO_MANY_CHART_REFFERRED_IN_PAGE";
  r[r.SCHEMA_MISMATCH = 4000020] = "SCHEMA_MISMATCH";
  r[r.TOO_MANY_CHILDREN_IN_BLOCK = 4000021] = "TOO_MANY_CHILDREN_IN_BLOCK";
  r[r.TOO_BIG_FILE_SIZE = 4000022] = "TOO_BIG_FILE_SIZE";
  r[r.TOO_MANY_TABLE_COLUMN = 4000024] = "TOO_MANY_TABLE_COLUMN";
  r[r.TOO_MANY_TABLE_CELL = 4000025] = "TOO_MANY_TABLE_CELL";
  r[r.TOO_MANY_GRID_COLUMN = 4000026] = "TOO_MANY_GRID_COLUMN";
  r[r.TOO_MANY_CHARS = 4000027] = "TOO_MANY_CHARS";
  r[r.ALGORITHM_PROCESS_FAIL = 4000028] = "ALGORITHM_PROCESS_FAIL";
  r[r.RELATION_MISMATCH = 4000030] = "RELATION_MISMATCH";
  r[r.PARENT_CHILD_RELATION_MISMATCH = 4000031] = "PARENT_CHILD_RELATION_MISMATCH";
  r[r.UNSUPPORTED_BLOCK_TYPE = 4000033] = "UNSUPPORTED_BLOCK_TYPE";
  r[r.REPEATED_BLOCK_ID_IN_PAGE = 4000070] = "REPEATED_BLOCK_ID_IN_PAGE";
  r[r.ISV_DATA_SIZE_TOO_LARGE = 4000600] = "ISV_DATA_SIZE_TOO_LARGE";
  r[r.INSUFFICIENT_STORAGE = 5070000] = "INSUFFICIENT_STORAGE";
  r[r.BACKEND_UNKNOWN_ERROR = 5000000] = "BACKEND_UNKNOWN_ERROR";
  r[r.TOO_MANY_PAGE_OPERATION = 5000101] = "TOO_MANY_PAGE_OPERATION";
  r[r.SECURITY_REVIEW_FAILED = 671020000] = "SECURITY_REVIEW_FAILED";
  r[r.MIGRATION_STOP_WRITE = 900004230] = "MIGRATION_STOP_WRITE";
  r[r.TENANT_CAPACITY_LIMIT = 90003081] = "TENANT_CAPACITY_LIMIT";
  r[r.USER_CAPACITY_LIMIT = 90003082] = "USER_CAPACITY_LIMIT";
  r[r.DEPARTMENT_CAPACITY_LIMIT = 90003083] = "DEPARTMENT_CAPACITY_LIMIT";
  r[r.DOCS_SIZE_LIMIT = 90003085] = "DOCS_SIZE_LIMIT";
  r[r.DR_DRILL_ERROR = 5030000] = "DR_DRILL_ERROR";
  var tO = [A.LOGIN_REQUIRED, A.NO_PERMISSION, A.NOT_FOUND, A.DELETED];
  function tR(t) {
    return new Promise(function (e) {
      setTimeout(function () {
        e();
      }, t);
    });
  }
  function tD(t) {
    if (t.length < 3) {
      return t;
    }
    var e = t.length - 6;
    return t.slice(0, 3) + ("*[" + e) + "]*" + t.slice(-3);
  }
  function tN(t) {
    var e = {};
    Object.keys(t).forEach(function (n) {
      e[tD(n)] = t[n].version;
    });
    return e;
  }
  function tx(t) {
    var e = {};
    Object.keys(t).forEach(function (n) {
      e[tD(n)] = t[n];
    });
    return e;
  }
  function tP(t) {
    return Object.values(t).map(function (t) {
      return t[0].slice(0, 10);
    }).join(",");
  }
  function tB(t) {
    try {
      return t.map(function (t) {
        if (t.subType) {
          var e;
          var n;
          var r;
          var i;
          var o;
          n = (e = t.subType.o).apool;
          i = (r = e.zone_changesets[0]) ? r.replace(/\$([\s\S]*)/g, function (t) {
            return "$" + (t.length - 1);
          }) : "none";
          o = tP(n.numToAttrib);
          if ((i == null ? undefined : i.length) > 10000) {
            return "[" + t.p.join(",") + "] easysync cs: too long";
          } else {
            return "[" + t.p.join(",") + "] easysync cs: " + i + ", attr: " + o;
          }
        }
        if ("action" in t) {
          if (t.p.length === 2 && t.p[0] === "children") {
            var s;
            var a;
            var u = function (t) {
              var e = {};
              for (var n in t) {
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var r = t[n];
                  if (typeof r == "string") {
                    e[n] = tD(r);
                  } else {
                    e[n] = r;
                  }
                }
              }
              return e;
            }(t.action);
            return "[" + t.p.join(",") + "]: " + JSON.stringify(u);
          }
          if (t.p.length === 1 && t.p[0] === "text") {
            s = t.action;
            a = Object.keys(s).map(function (t) {
              var i = s[t];
              var o = i.apool;
              var a = i.initialAttributedTexts || {};
              var u = a.text;
              var c = u === undefined ? {} : u;
              var l = a.attribs;
              var p = l === undefined ? {} : l;
              var h = (o || {}).numToAttrib;
              var f = tP(h === undefined ? {} : h);
              if (p[0]?.length > 100) {
                return "[" + t + "] cslen: " + c[0]?.length + ", attribs: too long";
              } else {
                return "[" + t + "] cslen: " + c[0]?.length + ", attribs: " + p[0] + ", attrStr: " + f;
              }
            });
            return "[" + t.p.join(",") + "] " + a.join(" ; ");
          }
          if (!t.p.length && t.action.oi !== undefined && t.action.od === undefined) {
            return "[create]: type(" + (tL(t.action.oi) ? t.action.oi.type : "") + ")";
          }
          var c = Object.entries(t.action).map(function (e) {
            var n;
            var r = tC(e, 2);
            var i = r[0];
            var o = r[1];
            if (t.p[0] !== "type") {
              return i;
            } else if (n = tL(o) ? o.type : o) {
              return i + "(" + n + ")";
            } else {
              return i;
            }
          }).join("+");
          return "[" + t.p.join(",") + "]: " + c;
        }
        return "";
      }).join(" | ");
    } catch (t) {}
    return "";
  }
  function tL(t) {
    return (t == null ? undefined : t.constructor) === Object;
  }
  (i = C ||= {}).BEFORE_CHANGE = "BEFORE_CHANGE";
  i.INTERCEPT_CHANGE = "INTERCEPT_CHANGE";
  i.INTERCEPT_REMOTE_CHANGE = "INTERCEPT_REMOTE_CHANGE";
  i.CHECK_RECORD = "CHECK_RECORD";
  i.CHANGE = "CHANGE";
  i.REGISTER = "REGISTER";
  i.UNREGISTER = "UNREGISTER";
  i.ERROR = "ERROR";
  (o = M ||= {}).LOCAL = "local";
  o.REMOTE = "remote";
  o.SILENCE = "silence";
  o.RESUBMIT = "resubmit";
  o.TEMPORARY = "temporary";
  (s = k ||= {}).SPLIT = "split";
  s.MERGE = "merge";
  (a = O ||= {}).CLIENT_ERROR = "CLIENT_ERROR";
  a.RESPONSE_ERROR = "RESPONSE_ERROR";
  (u = R ||= {}).SET_HEARTBEAT_VERSION = "SET_HEARTBEAT_VERSION";
  u.NETWORK_STATE_CHANGE = "NETWORK_STATE_CHANGE";
  u.SWITCH_COLLAB_MODE = "SWITCH_COLLAB_MODE";
  u.SEND_HEARTBEATS_IF_NEED = "SEND_HEARTBEATS_IF_NEED";
  u.START_SEND_HEARTBEATS = "START_SEND_HEARTBEATS";
  u.INTO_ERROR_STATE = "INTO_ERROR_STATE";
  u.SEND_HEARTBEATS_SUCCESS = "SEND_HEARTBEATS_SUCCESS";
  u.SEND_HEARTBEATS_FAILED = "SEND_HEARTBEATS_FAILED";
  (c = D ||= {}).SEND_USER_CHANGE = "ccm_sub_msg_to_backend_dev";
  c.RECEIVE_NEW_CHANGE = "ccm_front_recv_msg_info_dev";
  c.APPLY_NEW_CHANGE = "ccm_front_apply_msg_dev";
  var tF = function () {
    function t() {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      this.loggable = true;
      this.prefix = "[" + t.join("][") + "]";
    }
    t.prototype.log = function (t, e) {
      this.loggable;
    };
    t.prototype.enable = function () {
      this.loggable = true;
    };
    t.prototype.disable = function () {
      this.loggable = false;
    };
    t.prototype.destroy = function () {};
    return t;
  }();
  var tj = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.syncLog = function (t, e) {};
      return e;
    }
    tw(e, t);
    e.prototype.tempLog = function (t, e) {};
    e.prototype.exceptionLog = function (t, e) {};
    return e;
  }(tF);
  function tU(t) {
    return !t.subType && t.action.oi !== undefined && t.action.od === undefined;
  }
  function tz(t) {
    return !t.subType && t.action.od !== undefined && t.action.oi === undefined;
  }
  function tH(t) {
    return !t.subType && t.action.od !== undefined && t.action.oi !== undefined;
  }
  function tV(t) {
    return !t.subType && t.action.li !== undefined && t.action.ld === undefined;
  }
  function tZ(t) {
    return !t.subType && t.action.ld !== undefined && t.action.li === undefined;
  }
  function tq(t) {
    return !t.subType && t.action.ld !== undefined && t.action.li !== undefined;
  }
  function tW(t) {
    return !t.subType && (t.action.ld !== undefined || t.action.li !== undefined || t.action.lm !== undefined);
  }
  function tG(t, e) {
    if (t.length === 0 || typeof t[t.length - 1] == "string") {
      return {
        p: t,
        action: {
          oi: e
        }
      };
    } else {
      return {
        p: t,
        action: {
          li: e
        }
      };
    }
  }
  function tY(t, e) {
    if (t.length === 0 || typeof t[t.length - 1] == "string") {
      return {
        p: t,
        action: {
          od: e
        }
      };
    } else {
      return {
        p: t,
        action: {
          ld: e
        }
      };
    }
  }
  function tK(t, e, n) {
    if (e === undefined) {
      return tG(t, n);
    } else if (t.length === 0 || typeof t[t.length - 1] == "string") {
      return {
        p: t,
        action: {
          od: e,
          oi: n
        }
      };
    } else {
      return {
        p: t,
        action: {
          ld: e,
          li: n
        }
      };
    }
  }
  function t$(t, e, n = "easysync") {
    return {
      p: t,
      subType: {
        t: n,
        o: e
      }
    };
  }
  var tX = operationalTransformCore.easysyncUtils.isEasysyncOp;
  var tJ = operationalTransformCore.easysyncUtils.isTextOdoiOp;
  var tQ = operationalTransformCore.easysyncUtils.convertToEasysyncOp;
  var t0 = function () {
    function t(t, e = [], n = Date.now(), r) {
      this.record = t;
      this.ops = e;
      this.createTime = n;
      this.snapshotBeforeApply = r;
      this.ops = e.slice();
      this.snapshotBeforeApply = r && deepCloneWrapper_1.deepClone(r);
    }
    Object.defineProperty(t.prototype, "id", {
      get: function () {
        return this.record.id;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.append = function (t) {
      var e = this;
      var n = arrayIsArrayUtil.isArray(t) ? t : [t];
      var r = this.ops.concat(n);
      if (r.length === 1) {
        this.ops = r;
        return this;
      }
      var i = false;
      var o = false;
      r.forEach(function (t) {
        if (tX(t)) {
          i = true;
        } else if (tJ(t)) {
          o = true;
        }
      });
      if (i && o) {
        var s = this.ops.map(function (t) {
          return e.convertTextOdoiOpToEasysync(t);
        });
        var a = n.map(function (t) {
          return e.convertTextOdoiOpToEasysync(t);
        });
        this.ops = operationalTransformCore.compose(s, a);
        return this;
      }
      this.ops = operationalTransformCore.compose(this.ops, n);
      return this;
    };
    t.prototype.insert = function (t, e) {
      this.append(tG(t, e));
      return this;
    };
    t.prototype.remove = function (t) {
      this.append(tY(t, this.record.get(t)));
      return this;
    };
    t.prototype.replace = function (t, e) {
      this.append(tK(t, this.record.get(t), e));
      return this;
    };
    t.prototype.move = function (t, e) {
      this.append(function (t, e) {
        if (t.length > 0 && e.length > 0 && t.length === e.length && isNumberUtil.isNumber(lastElementHelper.getLastElement(t)) && isNumberUtil.isNumber(lastElementHelper.getLastElement(e)) && deepEqualUtil_1.deepEqual(t.slice(0, -1), e.slice(0, -1))) {
          return {
            p: t,
            action: {
              lm: e[e.length - 1]
            }
          };
        }
        throw Error("ObjectMove Operation is not available now");
      }(t, e));
      return this;
    };
    t.prototype.clone = function () {
      return new t(this.record, this.ops, this.createTime, this.snapshotBeforeApply);
    };
    t.prototype.edit = function (t, e) {
      var n = t$(t, e);
      this.append(n);
      return this;
    };
    t.prototype.convertTextOdoiOpToEasysync = function (t) {
      if (tJ(t)) {
        return tQ(t);
      } else {
        return t;
      }
    };
    return t;
  }();
  function t1(t) {
    return t.map(function (t) {
      var e = t.record;
      var n = t.ops;
      var r = t.snapshotBeforeApply;
      var i = t.createTime;
      var o = operationalTransformCore.invert(n, r, false);
      var s = r;
      if (r) {
        s = operationalTransformCore.apply(deepCloneWrapper_1.deepClone(r), n);
      }
      return new t0(e, o, i, s);
    }).reverse();
  }
  function t2(t, e) {
    t = t.slice();
    e = e.slice();
    var n;
    var r;
    var i;
    var o = t.pop();
    var s = e.shift();
    var a = [];
    a = o && s && o.id === s.id && (n = [o].concat(s), r = false, i = false, n.forEach(function (t) {
      t.ops.forEach(function (t) {
        if (t) {
          if (tX(t)) {
            r = true;
          } else if (tJ(t)) {
            i = true;
          }
        }
      });
    }), !r || !i) ? [new t0(o.record, operationalTransformCore.compose(o.ops, s.ops), o.createTime, o.snapshotBeforeApply)] : [o, s].filter(function (t) {
      return !!t;
    });
    return t.concat(a, e);
  }
  function t3(t, e, n) {
    var r;
    var i;
    var o = n === operationalTransformCore.TransformDirection.LEFT ? operationalTransformCore.TransformDirection.RIGHT : operationalTransformCore.TransformDirection.LEFT;
    var s = new Map();
    try {
      var a = tA(e);
      var u = a.next();
      for (; !u.done; u = a.next()) {
        var c = u.value;
        var l = c.id;
        var p = c.ops;
        s.set(l, operationalTransformCore.compose(s.get(l) || [], p));
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (i = a.return)) {
          i.call(a);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return t.map(function (t) {
      var e = t.ops;
      var r = t.id;
      var i = t.record;
      var a = t.snapshotBeforeApply;
      var u = t.createTime;
      var c = s.get(r);
      if (!c) {
        return t;
      }
      var l = operationalTransformCore.transform(e, c, n);
      var p = operationalTransformCore.transform(c, e, o);
      if (p.length === 0) {
        s.delete(r);
      } else {
        s.set(r, p);
      }
      return new t0(i, l, u, a && operationalTransformCore.apply(deepCloneWrapper_1.deepClone(a), c));
    });
  }
  var t6 = "applyCancelTempChange";
  var t4 = {
    last_cs_ack_timeout: 600000,
    send_cs_max_timeout: 60000,
    send_cs_min_timeout: 10000,
    send_cs_retry_count: 5,
    send_cs_sleep_duration: 2000,
    submit_cs_retry_max_count: 5
  };
  var t5 = "undo/redo";
  var t8 = "parent_id";
  function t9(t) {
    var e = t.ops;
    var n = t.originID;
    var r = t.replaceID;
    var i = [];
    e.forEach(function (t) {
      var e = deepCloneWrapper_1.deepClone(t);
      if (tU(e) || tz(e)) {
        var o = e.action;
        Object.keys(e.action).forEach(function (t) {
          var e = o[t];
          if (e && typeof e == "object" && t8 in e && e[t8] === n) {
            e[t8] = r;
          }
        });
      }
      if (tH(e) && e.p[0] === t8) {
        var s = e.action;
        var a = s.od;
        var u = s.oi;
        if (a === n) {
          e.action.od = r;
        }
        if (u === n) {
          e.action.oi = r;
        }
      }
      i.push(e);
    });
    return i;
  }
  var t7 = function () {
    function t(t, e) {
      this.io = t;
      this.proxyManager = e;
    }
    t.prototype.request = function (t, e) {
      return this.io.request(t, e);
    };
    t.prototype.addHeartbeat = function (t, e, n) {
      var r = t.token;
      var i = this.proxyManager.getProxyTokenByOrigin(r);
      if (i) {
        t.token = i;
        this.io.addHeartbeat(t, e, n);
      }
    };
    t.prototype.removeHeartbeat = function (t, e) {
      var n = t.token;
      var r = this.proxyManager.getProxyTokenByOrigin(n);
      if (r) {
        t.token = r;
        this.io.removeHeartbeat(t, e);
      }
    };
    t.prototype.setHeartbeatVersion = function (t, e, n) {
      var r = t.token;
      var i = this.proxyManager.getProxyTokenByOrigin(r);
      if (i) {
        t.token = i;
        this.io.setHeartbeatVersion(t, e, n);
      }
    };
    t.prototype.setEntityExternalInfo = function (t) {
      var e = this;
      if (t != null) {
        t.forEach(function (t) {
          var n = t.entity;
          var r = n.token;
          var i = n.rootKey;
          var o = e.proxyManager.getProxyTokenByOrigin(r);
          if (o && (n.token = o, i)) {
            var s = e.proxyManager.getProxyTokenByOrigin(i);
            if (!s) {
              return;
            }
            n.rootKey = s;
          }
        });
      }
      this.io.setEntityExternalInfo(t);
    };
    t.prototype.sendHeartbeats = function (t, e, n) {
      this.io.sendHeartbeats(t, e, n);
    };
    t.prototype.switchHeartbeatActive = function () {
      this.io.switchHeartbeatActive();
    };
    t.prototype.switchHeartbeatInactive = function () {
      this.io.switchHeartbeatInactive();
    };
    return t;
  }();
  (l = N ||= {}).DOCX = "DOCX";
  l.SYNCED_BLOCK_DOCX = "SYNCED_BLOCK_DOCX";
  var et = "token";
  (p = x ||= {}).record = "block";
  p.tree = "tree";
  p.page = "structure";
  p.synced = "synced";
  (h = P ||= {}).pageBilink = "page_bilink";
  h.pageBlockBilink = "page_block_bilink";
  var ee = [A.UNKNOWN, A.INSUFFICIENT_STORAGE, A.NETWORK_ERROR, A.BACKEND_UNKNOWN_ERROR, A.TOO_MANY_PAGE_OPERATION, A.MIGRATION_STOP_WRITE, A.DR_DRILL_ERROR];
  var en = [A.NOT_FOUND, A.INVALID_PARAM, A.ALGORITHM_PROCESS_FAIL, A.SCHEMA_MISMATCH, A.NO_PERMISSION, A.UNSUPPORTED_BLOCK_TYPE, A.TOO_MANY_CHILDREN_IN_BLOCK, A.TOO_MANY_BLOCKS_IN_PAGE, A.REPEATED_BLOCK_ID_IN_PAGE, A.TOO_MANY_TABLE_CELL, A.TOO_MANY_CHART_REFFERRED_IN_PAGE, A.PARENT_CHILD_RELATION_MISMATCH, A.ISV_DATA_SIZE_TOO_LARGE, A.RELATION_MISMATCH, A.TOO_MANY_TABLE_COLUMN, A.TOO_MANY_CHARS, A.TOO_BIG_FILE_SIZE, A.TOO_MANY_GRID_COLUMN, A.TENANT_CAPACITY_LIMIT, A.USER_CAPACITY_LIMIT, A.DEPARTMENT_CAPACITY_LIMIT, A.DOCS_SIZE_LIMIT];
  function er(t) {
    return !t.isAxiosError && !isUndefinedCheck.isUndefined(t.code) && t.code !== 0 && t.code !== "ECONNABORTED" && t.code !== "ETIMEDOUT";
  }
  (f = L ||= {}).USER_CHANGES = "USER_CHANGES";
  f.ACCEPT_COMMIT = "ACCEPT_COMMIT";
  f.NEW_CHANGES = "NEW_CHANGES";
  f.ERROR = "ERROR";
  f.NEW_CHANGES_ATOMIZATION_OVERSIZE = "NEW_CHANGES_ATOMIZATION_OVERSIZE";
  (d = F ||= {}).ENGINE_CHANNEL = "engine_channel";
  d.MEMBER_CHANNEL = "member_channel";
  d.OBJ_PERMISSION_CHANNEL = "obj_permission_channel";
  (B = {
    default: "axios reject: "
  })[L.USER_CHANGES] = "User change submit failed: ";
  B[L.NEW_CHANGES] = "Fetch missing failed: ";
  var ei = B;
  function eo(t, e) {
    return !er(t) || !!t.retry || !!ee.includes(t.code) || t.code === A.POST_BODY_EMPTY && !isEmptyUtil.isEmpty(e == null ? undefined : e.data);
  }
  function es(t) {
    return !Object.values(x).includes(t.resourceType);
  }
  (v = j ||= {}).UserChanges = "UserChanges";
  v.NewChanges = "NewChanges";
  v.NewChangesExtra = "NewChangesExtra";
  v.AcceptCommit = "AcceptCommit";
  v.MemberChannel = "MemberChannel";
  v.VersionChange = "VersionChange";
  v.Error = "Error";
  v.WillFetchMiss = "WillFetchMiss";
  v.NewChangesOfNewEntity = "NewChangesOfNewEntity";
  v.ALL_MISS_FETCHED = "ALL_MISS_FETCHED";
  v.NETWORK_STATE_CHANGE = "NETWORK_STATE_CHANGE";
  v.HEARTBEAT_CALLBACK = "HEARTBEAT_CALLBACK";
  (y = U ||= {}).InitFinish = "InitFinish";
  y.AcceptCommit = "AcceptCommit";
  y.StatusChange = "StatusChange";
  y.CollabDataChange = "CollabDataChange";
  y.Exception = "Exception";
  (g = z ||= {}).SUBMITTED = "submitted";
  g.UN_SUBMITTED = "unSubmitted";
  var ea = Q("flowSync");
  var eu = function () {
    function t(t) {
      var e;
      var n;
      var r;
      var i;
      var o;
      var s = this;
      this.config = t;
      this._isAllDataReady = true;
      this._hasMissedEntity = false;
      this._entityMap = new Map();
      this._localMissings = new Map();
      this._submittedMissings = new Map();
      this._pendingHeartbeatsCount = 0;
      this._em = new tn();
      this._isErrorState = false;
      this.networkState = "online";
      this._sendingUUIDSet = new Set();
      this.flushMissings = debounceUtil_1_1.debounce(function () {
        if (s.ioVersion && !s.getIsSyncing()) {
          s._updateSyncedVersionIfNeed(s.ioVersion, "flushMissings");
          s.emit(j.ALL_MISS_FETCHED);
          return;
        }
        if (s.networkState !== "offline" && !s._submittedMissings.size && s._localMissings.size) {
          s._submittedMissings = s._localMissings;
          s._localMissings = new Map();
          var t = s.getWillFetchMissRange();
          if (t) {
            s.emit(j.WillFetchMiss);
            s.fetchMissings(t);
          }
        }
      }, 0);
      this._sendHeartbeats = debounceUtil_1_1.debounce(function () {
        return tT(s, undefined, undefined, function () {
          return tI(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this._sendHeartbeatsImmediately()];
              case 1:
                return [2, t.sent()];
            }
          });
        });
      });
      this.logReceiveNewChanges = (e = "", n = "", r = "", function (t) {
        var i = t.id;
        var o = t.recordChange;
        var a = t.isFromNewChanges;
        var u = t.time;
        if (i !== e) {
          n = s._logger.encrypt ? s._logger.encrypt(i) : i;
          r = tD(i);
          e = i;
        }
        var c = o.version;
        var l = o.uuid;
        var p = x.record;
        var h = s.getEntity(t.id, p);
        var f = {
          block_id: n,
          sliced_id: r,
          version: c,
          old_version: h == null ? undefined : h.version,
          is_exist: !!h,
          resource_type: p,
          cs_uuid: l,
          from_socket_or_http: a ? "socket" : "http",
          message_type: "changeset",
          recv_cs_info_time: u
        };
        s._log(D.RECEIVE_NEW_CHANGE, f);
      });
      this.batchLogMissingEntity = (i = {}, o = debounceUtil_1_1.debounce(function () {
        if (Object.keys(i).length) {
          s._log("docx_sync_cached_missing_dev", {
            missedRecordSize: Object.keys(i).length,
            versionMap: tx(i)
          });
          i = {};
        }
      }), function (t, e) {
        i[t] = e;
        return o();
      });
      this._collab = true;
      this.sendHeartbeatsIfNeeded = function (t, e, n = 5) {
        if (s.ioVersion && t > s.ioVersion + n) {
          s._logger.syncLog(R.SEND_HEARTBEATS_IF_NEED, {
            data: {
              oldVersion: s.ioVersion,
              newVersion: t
            },
            extra: {
              from: e
            }
          });
          s._sendHeartbeats();
        }
      };
      this.forceSendHeartbeats = function (t) {
        return tT(s, undefined, undefined, function () {
          return tI(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this._sendHeartbeatsImmediately(t)];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      };
      this._updateSyncedVersionIfNeed = function (t, e) {
        var n = s.syncedVersion;
        var r = s.syncedVersion === undefined ? (s.syncedVersion = t, true) : s.syncedVersion < t && !s.getIsSyncing() && (s.syncedVersion = t, s.emit(j.VersionChange, s.syncedVersion), true);
        if (r) {
          s._log("docx_sync_version_dev", {
            old_version: n,
            version: t,
            from: e
          });
        }
        return r;
      };
      this._sendHeartbeatsImmediately = function (t = "flowSync") {
        return tT(s, undefined, undefined, function () {
          var e = this;
          return tI(this, function (n) {
            this._logger.syncLog(R.START_SEND_HEARTBEATS, {
              data: {
                from: t
              }
            });
            if (this._ioEntity && this._io.isEntityRegistered(this._ioEntity)) {
              if (this.ioVersion && this.ioVersion > this.syncedVersion) {
                this.setHeartbeatVersion(F.ENGINE_CHANNEL, this.syncedVersion);
              }
              return [2, new Promise(function (n) {
                e._pendingHeartbeatsCount++;
                function r(r) {
                  var i = r ? R.SEND_HEARTBEATS_SUCCESS : R.SEND_HEARTBEATS_FAILED;
                  e._logger.syncLog(i, {
                    data: {
                      from: t,
                      pendingHeartbeatsCount: e._pendingHeartbeatsCount
                    }
                  });
                  e._pendingHeartbeatsCount--;
                  n(r);
                }
                e._io.sendHeartbeats(function () {
                  return r(true);
                }, function () {
                  return r(false);
                }, {
                  isNewHeartbeatsProtocol: true,
                  isForceSend: true
                });
              })];
            } else {
              return [2, false];
            }
          });
        });
      };
      this.handleHeartbeatCallback = function (t, e, n) {
        var r;
        s._log("docx_heartbeat_callback_info_dev", {
          version: t,
          oldVersion: e,
          localVersion: s.syncedVersion,
          versionMap: (n == null ? undefined : n.blocks) && tx(n.blocks),
          isAllDataReady: s._isAllDataReady,
          localVersionCompareEnable: s._localVersionCompareEnable
        });
        s.flushMissings();
        r = s._localVersionCompareEnable ? t > s.syncedVersion : t > e;
        s.emit(j.HEARTBEAT_CALLBACK);
        if (r) {
          if (!(n == null ? undefined : n.blocks)) {
            throw Error("tree heartbeat error: from " + e + " to " + t);
          }
          Object.entries(n.blocks).forEach(function (t) {
            var e;
            var n = tC(t, 2);
            var r = n[0];
            var i = n[1];
            var o = {
              id: ((e = s._proxyManager) === null || e === undefined ? undefined : e.getOriginTokenByProxy(r)) || r,
              resourceType: x.record,
              version: i
            };
            s.collectMissings(o);
          });
          s._updateSyncedVersionIfNeed(t, "heartbeat");
        }
      };
      this.handleChannelStateChange = function (t) {
        if (s.networkState !== t) {
          s._logger.syncLog(R.NETWORK_STATE_CHANGE, {
            data: {
              newState: t,
              oldState: s.networkState
            }
          });
          s.networkState = t;
          s.emit(j.NETWORK_STATE_CHANGE, t);
          if (s.networkState === "online") {
            s.handleOnline();
            s.emit(j.MemberChannel, {
              type: "refetch_member_list"
            });
          }
        }
      };
      this.handleMessageFromServer = function (t) {
        if (t) {
          var n = s.config.atomizationEnabled;
          switch (t.type) {
            case L.NEW_CHANGES:
              if (n && t.extra?.atomization_over_size === 1) {
                return;
              }
              s.proxyNewChangesMsg(t);
              s.handleNewChanges(t);
              break;
            case L.NEW_CHANGES_ATOMIZATION_OVERSIZE:
              if (!n) {
                return;
              }
              s.proxyNewChangesMsg(t);
              s.handleOversizeNewChanges(t);
              break;
            default:
              if (s.options) {
                (function (t, e) {
                  t.forEach(function (t) {
                    var n = t.validator;
                    var r = t.handler;
                    if (n === undefined || typeof r == "function" && n(e)) {
                      r(e);
                    }
                  });
                })(s.options.messageHandlerPacks, t);
              }
          }
        }
      };
      this.handleNewChanges = function (t) {
        var e;
        var n;
        var r;
        var i;
        var a = deepCloneWrapper_1.deepClone(t);
        var u = "type" in a && a.type === L.NEW_CHANGES;
        var c = s.correctClientTime(Date.now());
        if ("over_size" in a && a.over_size === 1) {
          s.handleOversizeNewChanges(a);
          return;
        }
        var l = a.meta?.edit_time;
        try {
          var p = tA(Object.values(a.op_map));
          var h = p.next();
          for (; !h.done; h = p.next()) {
            var f = h.value;
            try {
              r = undefined;
              var d = tA(f);
              var v = d.next();
              for (; !v.done; v = d.next()) {
                var y = v.value;
                var g = y.id;
                var _ = y.version;
                var m = y.uuid;
                var b = x.record;
                s.logReceiveNewChanges({
                  id: g,
                  recordChange: y,
                  isFromNewChanges: u,
                  time: c
                });
                s.handleEntityNotFound(g, b);
                if (!s.hasEntity(g, b)) {
                  if (_ === 1) {
                    s.emit(j.NewChanges, {
                      recordChange: y,
                      isNewEntity: true,
                      fromSocketOrHttp: u ? "socket" : "http",
                      editTime: l
                    });
                  } else {
                    s.setMissedEntity(g, _);
                  }
                  continue;
                }
                var E = s.safelyGetEntity({
                  id: g,
                  resourceType: b
                }).version;
                if (!(_ <= E)) {
                  if (_ > E + 1) {
                    s.collectMissings({
                      id: g,
                      resourceType: b,
                      version: _
                    });
                    continue;
                  }
                  s.safelySetVersion({
                    id: g,
                    resourceType: b,
                    version: _
                  });
                  s._log("dev_sync_emit_new_changes", {
                    sliced_id: tD(g),
                    version: _,
                    old_version: E,
                    resource_type: b,
                    opsHintString: tB(y.ops),
                    uuid: m
                  });
                  s.emit(j.NewChanges, {
                    recordChange: y,
                    isNewEntity: false,
                    fromSocketOrHttp: u ? "socket" : "http",
                    editTime: l
                  });
                }
              }
            } catch (t) {
              r = {
                error: t
              };
            } finally {
              try {
                if (v && !v.done && (i = d.return)) {
                  i.call(d);
                }
              } finally {
                if (r) {
                  throw r.error;
                }
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (h && !h.done && (n = p.return)) {
              n.call(p);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        if (a.extra) {
          s.emit(j.NewChangesExtra, a.extra);
          if (a.extra.structure_version === s.syncedVersion + 1 && a.extra.atomization === 1 && s.config.atomizationEnabled) {
            s._updateSyncedVersionIfNeed(a.extra.structure_version, "NewChanges");
          }
        }
      };
      this.handleOversizeNewChanges = function (t) {
        var e;
        var n = s.config.atomizationEnabled;
        var r = t.op_map;
        var i = t.extra;
        var o = i.block_versions;
        var a = i.block_version;
        var u = x.record;
        var c = {};
        if (n && o) {
          c = o;
        } else if (a) {
          (e = {})[Object.keys(r)[0]] = a;
          c = e;
        }
        Object.keys(c).forEach(function (e) {
          if (s.hasEntity(e, u)) {
            var n = s.safelyGetVersion({
              id: e,
              resourceType: u
            });
            var r = o[e];
            s._log("dev_sync_new_changes_oversize", {
              version: r,
              old_version: n,
              resource_type: u,
              sliced_id: tD(e)
            });
            s.collectMissings({
              id: e,
              resourceType: u,
              version: r
            });
            if (t.extra) {
              s.emit(j.NewChangesExtra, t.extra);
            }
          }
        });
      };
      this.handleOnline = function () {
        s.flushMissings();
      };
      this.handleAcceptCommit = function (t, e) {
        var n;
        var r;
        var i = x.record;
        var o = t.block_map;
        var a = t.structure_version;
        var u = t.meta;
        s.logAck(o, e);
        var c = u == null ? undefined : u.edit_time;
        try {
          var l = tA(Object.values(o));
          var p = l.next();
          for (; !p.done; p = l.next()) {
            var h = p.value;
            var f = h.id;
            var d = h.version;
            var v = s.safelyGetEntity({
              id: f,
              resourceType: i
            }).version;
            var y = {
              id: f,
              version: d,
              resourceType: i
            };
            if (d === v + 1) {
              s.safelySetVersion(y);
              s.emit(j.AcceptCommit, {
                id: f,
                editTime: c
              });
            } else if (d > v) {
              s.collectMissings(y);
            }
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (p && !p.done && (r = l.return)) {
              r.call(l);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        if (a === s.syncedVersion + 1) {
          s._updateSyncedVersionIfNeed(a, "AcceptCommit");
        }
      };
      var a = t.version;
      var u = t.io;
      var c = t.logger;
      var l = t.axios;
      var p = t.requestAPI;
      var h = t.collabToken;
      var f = t.pageToken;
      var d = t.options;
      var v = t.collab;
      var y = t.proxyManager;
      var g = t.settingsConfig;
      var _ = t.isAllDataReady;
      var m = t.localVersionCompareEnable;
      this._isAllDataReady = _ == null || _;
      this._collab = v;
      this._proxyManager = y;
      this._io = u;
      this.ioFacade = y ? new t7(u, y) : u;
      this._axios = l;
      this._requestAPI = p;
      this._logger = c || new tj("FlowSync", N.DOCX);
      this._collabToken = h;
      this._pageToken = f;
      this._settingsConfig = g || t4;
      this.options = d;
      this._updateSyncedVersionIfNeed(a, "constructor");
      this._localVersionCompareEnable = m;
    }
    Object.defineProperty(t.prototype, "memberId", {
      get: function () {
        return "" + this._io.getMemberId();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "io", {
      get: function () {
        return this.ioFacade;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isErrorState", {
      get: function () {
        return this._isErrorState;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "ioVersion", {
      get: function () {
        if (this._ioEntity) {
          return this._io.getHeartbeatInfo(this.engineType, this.ioToken)[F.ENGINE_CHANNEL]?.version;
        }
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.setAllDataReady = function () {
      return tT(this, undefined, undefined, function () {
        return tI(this, function (t) {
          switch (t.label) {
            case 0:
              if (this._isAllDataReady) {
                throw Error("isAllDataReady was true, this method should not be called twice since this state is irreversible");
              }
              this._isAllDataReady = true;
              if (!this._hasMissedEntity) {
                return [3, 2];
              }
              return [4, this.forceSendHeartbeats("all_data_ready")];
            case 1:
              t.sent();
              this._hasMissedEntity = false;
              t.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.prototype.getNetworkState = function () {
      return this.networkState;
    };
    t.prototype.getIsSendingUserChange = function (t) {
      return this._sendingUUIDSet.has(t);
    };
    t.prototype.getWatchingIOEntities = function () {
      if (this._ioEntity) {
        return [this._ioEntity];
      } else {
        return [];
      }
    };
    t.prototype.correctClientTime = function (t) {
      var e;
      var n;
      var r = (n = (e = this._io).getServerAndClientIntervalTime) === null || n === undefined ? undefined : n.call(e);
      if (r) {
        return t + r;
      } else {
        return t;
      }
    };
    t.prototype.register = function (t) {
      var e = this;
      t.forEach(function (t) {
        var n = e.keyOf(t);
        if (!e._entityMap.has(n)) {
          e._entityMap.set(n, t);
        }
      });
    };
    t.prototype.connectSync = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        var n = this;
        return tI(this, function (r) {
          switch (r.label) {
            case 0:
              t.find(function (t) {
                return !!(e = n.generateWatchEntity(t)) && (n._watchEntity = e, true);
              });
              if (!e || !this._collab) {
                return [3, 2];
              }
              return [4, this.watchEntity()];
            case 1:
              r.sent();
              this._sendHeartbeats();
              r.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.prototype.switchCollabMode = function (t, e) {
      var n;
      var r;
      return tT(this, undefined, undefined, function () {
        return tI(this, function (i) {
          switch (i.label) {
            case 0:
              this._logger.syncLog(R.SWITCH_COLLAB_MODE, {
                data: {
                  newMode: t,
                  oldMode: this._collab
                },
                extra: {
                  source: e
                }
              });
              if (this._proxyManager && !this._proxyManager.getIsReady() || t === this._collab) {
                return [2];
              }
              if (!t) {
                return [3, 2];
              }
              return [4, this.watchEntity()];
            case 1:
              i.sent();
              this._sendHeartbeats();
              return [3, 4];
            case 2:
              return [4, this.unwatchEntity()];
            case 3:
              i.sent();
              i.label = 4;
            case 4:
              this._collab = t;
              if ((r = (n = this.config).onCollabModeChange) !== null && r !== undefined) {
                r.call(n, t);
              }
              return [2];
          }
        });
      });
    };
    t.prototype.getIsCollab = function () {
      return this._collab;
    };
    t.prototype.unconnectSync = function () {
      return tT(this, undefined, undefined, function () {
        return tI(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.unwatchEntity()];
            case 1:
              t.sent();
              this._watchEntity = undefined;
              return [2];
          }
        });
      });
    };
    t.prototype.unregister = function (t) {
      var e = this;
      t.forEach(function (t) {
        var n = t.id;
        var r = t.resourceType;
        var i = e.keyOf({
          id: n,
          resourceType: r
        });
        e._entityMap.delete(i);
      });
    };
    t.prototype.on = function (t, e) {
      this._em.on(t, e);
    };
    t.prototype.off = function (t, e) {
      this._em.off(t, e);
    };
    t.prototype.hasEntity = function (t, e) {
      return this._entityMap.has(this.keyOf({
        id: t,
        resourceType: e
      }));
    };
    t.prototype.getVersion = function (t) {
      var e = t.id;
      var n = t.resourceType;
      var r = this.getEntity(e, n);
      if (r == null) {
        return undefined;
      } else {
        return r.version;
      }
    };
    t.prototype.getSyncVersion = function () {
      return this.syncedVersion;
    };
    t.prototype.getIsSyncing = function () {
      return !this._isAllDataReady || !this.isAllMissFetched || this._hasMissedEntity || !!this._pendingHeartbeatsCount || !this._collab;
    };
    t.prototype.setHeartbeatVersion = function (t, e) {
      if (this._ioEntity) {
        this._logger.syncLog(R.SET_HEARTBEAT_VERSION, {
          data: {
            channel: t,
            version: e
          }
        });
        this._io.setHeartbeatVersion(this._ioEntity, t, e);
      }
    };
    t.prototype.autoRetryRequest = function (t, e, n) {
      if (e === undefined) {
        e = this._settingsConfig.send_cs_retry_count;
      }
      if (n === undefined) {
        n = this._settingsConfig.send_cs_sleep_duration;
      }
      return tT(this, undefined, undefined, function () {
        var i;
        var o;
        var s;
        var a;
        var u;
        var c;
        return tI(this, function (l) {
          switch (l.label) {
            case 0:
              i = isFunctionUtil_1.isFunction(t) ? t() : t;
              o = this._settingsConfig.send_cs_retry_count - e;
              l.label = 1;
            case 1:
              l.trys.push([1, 3,, 6]);
              s = i;
              if (o > 0) {
                s = tS(tS({}, i), {
                  headers: {
                    rpc_persist_retry_times: String(o)
                  }
                });
              }
              return [4, this._axios.request(s)];
            case 2:
            case 5:
              return [2, l.sent()];
            case 3:
              a = l.sent();
              if (e <= 0 || this.networkState === "offline" || !eo(a, i)) {
                throw a;
              }
              return [4, tR(u = Math.pow(Math.max(n / 1000, 1), o + 1) * 1000)];
            case 4:
              l.sent();
              c = er(a);
              this._log("dev_sync_request_retry_since_code", {
                retry: e,
                retry_times: o + 1,
                code: c ? a.code : A.NETWORK_ERROR,
                res_code: c ? null : a.response?.status,
                requestType: i.url,
                sleep: u,
                hasY: !!objectPathGetDefault.getObjectPathDefault(i, "data.y")
              });
              return [4, this.autoRetryRequest(t, e - 1, n)];
            case 6:
              return [2];
          }
        });
      });
    };
    t.prototype.sendUserChange = function (t) {
      var e;
      var n;
      var r = this;
      var i = t.change_map;
      var o = t.uuid;
      if (this._sendingUUIDSet.has(o)) {
        return Promise.reject(Error("sending repeated user change, the repeat UUID is " + o));
      }
      this._sendingUUIDSet.add(o);
      if (this._isErrorState) {
        return Promise.reject(Error("In error state, no more userchange requests are sent."));
      }
      var s = {};
      try {
        var a = tA(Object.entries(i));
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var c = tC(u.value, 2);
          var l = c[0];
          var p = c[1];
          var h = p.version;
          var f = p.payload;
          s[l] = {
            id: l,
            version: h,
            payload: f
          };
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (n = a.return)) {
            n.call(a);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      this.logUserChange({
        change_map: i,
        uuid: o
      }, "flowSync");
      this.emit(j.UserChanges);
      function d() {
        var e;
        var n;
        var i = tS({
          member_id: r.memberId,
          uuid: o,
          page_id: r.pageToken,
          change_map: s
        }, r.options?.extraCommitParams);
        var a = (n = (e = r.config).getUnSubmittedData) === null || n === undefined ? undefined : n.call(e);
        if (a && Object.keys(a.change_map).length) {
          var u = Object.entries(a.change_map).reduce(function (t, e) {
            var n = tC(e, 2);
            var r = n[0];
            var i = n[1];
            var o = i.version;
            var s = i.payload;
            t[r] = {
              id: r,
              version: o,
              payload: s
            };
            return t;
          }, {});
          i.y = u;
        }
        return i;
      }
      var v = this._settingsConfig;
      var y = v.send_cs_min_timeout;
      var g = v.send_cs_max_timeout;
      var _ = Math.min(y + Object.keys(s).length * 1000, g);
      return this.autoRetryRequest(function () {
        return {
          url: r._requestAPI.USER_CHANGE,
          method: "POST",
          data: d(),
          timeout: _
        };
      }).catch(function (t) {
        var n = Object.values(i).map(function (t) {
          var e = t.id;
          var n = t.version;
          var r = tB(t.payload.ops);
          return {
            sliced_id: tD(e),
            version: n,
            opsHintString: r
          };
        });
        r._log("user_change_resp_error_dev", {
          change_map_hint: n,
          uuid: o,
          code: t.code,
          status: t.response?.status,
          msg: t.resMsg || t.message || t.msg,
          ttLogId: t.ttLogId,
          detail: t.detail
        });
        r.handleRequestError(t, L.USER_CHANGES);
        return t;
      }).then(function (t) {
        r.handleAcceptCommit(t.data, o);
        return t;
      }).finally(function () {
        r._sendingUUIDSet.delete(o);
      });
    };
    t.prototype.destroy = function () {
      this._pendingHeartbeatsCount = 0;
      this._sendHeartbeats.cancel();
      this.unregister(Array.from(this._entityMap.values()));
      this.unconnectSync();
      this._em.removeEvent();
      this._io.unregisterChannelState(this.handleChannelStateChange);
    };
    t.prototype.logUserChange = function (t, e) {
      var n = this;
      var r = t.change_map;
      var i = t.uuid;
      var o = Object.entries(r);
      var s = o.map(function (t) {
        var e = tC(t, 2);
        var r = e[0];
        var i = e[1];
        return {
          block_id: n._logger.encrypt ? n._logger.encrypt(r) : r,
          slicedId: tD(r),
          version: i.version,
          create_cs_time: n.correctClientTime(i.createTime)
        };
      });
      this._log(D.SEND_USER_CHANGE, {
        block_detail: s,
        cs_uuid: i,
        cs_block_num: o.length,
        sub_cs_time: this.correctClientTime(Date.now()),
        message_type: "changeset",
        from: e
      });
    };
    t.prototype.collectMissings = function (t, e) {
      var n = t.id;
      var r = t.resourceType;
      var i = t.version;
      if (e === undefined) {
        e = true;
      }
      this.handleEntityNotFound(n, r);
      var o = this.getEntity(n, r);
      if (!o) {
        this.setMissedEntity(n, i);
        return;
      }
      var s = this.keyOf({
        id: n,
        resourceType: r
      });
      if (!(o.version >= i)) {
        if (this.config.collectMissingIgnoreRepeatEnable) {
          var a = this._submittedMissings.get(s);
          if (a && a.version === i) {
            return;
          }
        }
        var u = this._localMissings.get(s);
        if (u === undefined) {
          this._localMissings.set(s, {
            id: n,
            resourceType: r,
            version: i
          });
        } else {
          u.version = Math.max(u.version, i);
        }
        if (e) {
          this.flushMissings();
        }
      }
    };
    t.prototype.safelyGetEntity = function (t) {
      var e = t.id;
      var n = t.resourceType;
      var r = this.getEntity(e, n);
      if (r === undefined) {
        this.emit(j.Error, {
          code: A.ENTITY_NOT_EXIST,
          msg: "entity not exit",
          type: O.CLIENT_ERROR
        });
        throw Error("entity not exist when get entity");
      }
      return r;
    };
    Object.defineProperty(t.prototype, "pageToken", {
      get: function () {
        var t;
        return ((t = this._proxyManager) === null || t === undefined ? undefined : t.getProxyTokenByOrigin(this._pageToken)) ?? this._pageToken;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "ioToken", {
      get: function () {
        var t;
        return ((t = this._proxyManager) === null || t === undefined ? undefined : t.getProxyTokenByOrigin(this._collabToken)) ?? this._collabToken;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "engineType", {
      get: function () {
        if (this._ioEntity) {
          return this._ioEntity.type;
        } else {
          return N.DOCX;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isAllMissFetched", {
      get: function () {
        return !this._submittedMissings.size && !this._localMissings.size;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype._log = function (t, e) {
      ea(t, e);
      this._logger.log(t, tS(tS({}, e), {
        member_id: this.memberId
      }));
    };
    t.prototype.proxyEntity = function (t) {
      var e;
      var n = t.id;
      var r = (e = this._proxyManager) === null || e === undefined ? undefined : e.getProxyTokenByOrigin(n);
      if (r) {
        return tS(tS({}, t), {
          id: r
        });
      } else {
        return t;
      }
    };
    t.prototype.watchEntity = function () {
      return tT(this, undefined, undefined, function () {
        var a;
        var u;
        var c;
        var l;
        var p;
        var h = this;
        return tI(this, function (f) {
          switch (f.label) {
            case 0:
              if (this._proxyManager && !this._proxyManager.getIsReady() || !this._watchEntity) {
                return [2];
              }
              this._ioEntity = this.generateIOEntity(this._watchEntity);
              a = {
                version: this.syncedVersion,
                interval: 1,
                callback: function (t, e, n, r) {
                  return h.handleHeartbeatCallback(t, e, r);
                }
              };
              u = this.options?.extraWatchParams?.heartbeats || tS(((p = {})[F.ENGINE_CHANNEL] = a, p[F.MEMBER_CHANNEL] = {
                interval: 1,
                callback: function (t) {
                  h.emit(j.MemberChannel, {
                    type: "heartbeat",
                    version: t
                  });
                }
              }, p), this.options?.heartbeatsOptionMap);
              c = function (t) {
                var e;
                var n = t.token;
                var r = ((e = h._proxyManager) === null || e === undefined ? undefined : e.getOriginTokenByProxy(n)) || n;
                return r === h._pageToken || r === h._collabToken;
              };
              l = {
                message: this.options?.extraWatchParams?.message || {
                  handler: this.handleMessageFromServer,
                  filter: c
                },
                heartbeats: u,
                isNewHeartbeatsProtocol: true,
                acceptWatchHandler: this.options?.extraWatchParams?.acceptWatchHandler || function () {
                  h.emit(j.MemberChannel, {
                    type: "refetch_member_list"
                  });
                }
              };
              this._io.register(this._ioEntity, l);
              return [4, this._io.watches([this._ioEntity], {
                isNewProtocol: true
              }).catch(function (t) {
                h._log("dev_watch_failed", t);
              })];
            case 1:
              f.sent();
              this._io.registerChannelState(this.handleChannelStateChange);
              return [2];
          }
        });
      });
    };
    t.prototype.unwatchEntity = function () {
      return tT(this, undefined, undefined, function () {
        return tI(this, function (t) {
          switch (t.label) {
            case 0:
              if (!this._ioEntity) {
                return [3, 2];
              }
              return [4, this._io.unRegister([this._ioEntity])];
            case 1:
              t.sent();
              this._ioEntity = undefined;
              t.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.prototype.generateWatchEntity = function (t) {
      if (t.id === this._collabToken) {
        var e = objectPathGetDefault.getObjectPathDefault(t, "data.type");
        if (e === "page") {
          return tS(tS({}, t), {
            resourceType: x.page
          });
        } else if (e === "synced_source") {
          return tS(tS({}, t), {
            resourceType: x.synced
          });
        } else {
          return undefined;
        }
      }
    };
    t.prototype.generateIOEntity = function (t) {
      var e;
      if ((t = this.proxyEntity(t)).resourceType === x.synced) {
        return {
          token: t.id,
          type: N.SYNCED_BLOCK_DOCX,
          resource_type: x.synced,
          page_id: this.pageToken
        };
      } else {
        return {
          token: t.id,
          type: N.DOCX,
          resource_type: x.page,
          route_type: et,
          route_key: t.id,
          isNewProtocol: true
        };
      }
    };
    t.prototype.keyOf = function (t) {
      return t.id + ":" + t.resourceType;
    };
    t.prototype.setMissedEntity = function (t, e) {
      if (!this._isAllDataReady) {
        this._hasMissedEntity = true;
        this.batchLogMissingEntity(t, e);
      }
    };
    t.prototype.getWillFetchMissRange = function () {
      var t = this;
      if (!this._submittedMissings.size) {
        return null;
      }
      if (this._isErrorState) {
        this._log("dev_sync_fetch_missing_verrify_failed", {
          action: "before_fetch",
          data: {
            isErrorState: this._isErrorState
          }
        });
        return null;
      }
      var e = [];
      var n = [];
      Array.from(this._submittedMissings.values()).forEach(function (r) {
        var i = r.id;
        var o = r.resourceType;
        var s = r.version;
        var a = t.safelyGetVersion({
          id: i,
          resourceType: o
        });
        if (s > a) {
          e.push({
            id: i,
            from_ver: a + 1,
            to_ver: s + 1
          });
        } else {
          n.push({
            id: tD(i),
            version: s,
            oldVersion: a
          });
          t._submittedMissings.delete(t.keyOf({
            id: i,
            resourceType: o
          }));
        }
      });
      if (n.length) {
        this._log("dev_sync_fetch_missing_verrify_failed", {
          action: "version_verify_failed",
          data: n
        });
      }
      if (e.length === 0) {
        this._log("dev_sync_fetch_missing_versions_is_empty");
        return null;
      } else {
        return e;
      }
    };
    t.prototype.fetchMissings = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        return tI(this, function (n) {
          switch (n.label) {
            case 0:
              e = [t];
              try {
                var r;
                var s;
                var a;
                var u;
                var c;
                var l;
                var p;
                r = {
                  maxVersionSum: this.config.fetchMissMaxVersion,
                  sliceSize: this.config.fetchMissMaxSliceSize,
                  blockSize: this.config.fetchMissMaxBlockSize
                };
                s = (r == null ? undefined : r.sliceSize) ?? 1000;
                a = (r == null ? undefined : r.blockSize) ?? 200;
                u = 0;
                c = s;
                l = [];
                p = [];
                t.forEach(function (t) {
                  var e = t.id;
                  var n = t.from_ver;
                  var i = t.to_ver;
                  if (n !== i) {
                    for (var o = n; o < i;) {
                      var h = o;
                      var f = (o = Math.min(h + c, i)) - h;
                      c -= f;
                      u += f;
                      l.push({
                        id: e,
                        from_ver: h,
                        to_ver: o
                      });
                      if ((r == null ? undefined : r.maxVersionSum) && u > r.maxVersionSum) {
                        throw Error("version over limit " + r.maxVersionSum);
                      }
                      if (c <= 0 || l.length >= a) {
                        p.push(l);
                        l = [];
                        c = s;
                      }
                    }
                  }
                });
                if (l.length) {
                  p.push(l);
                }
                e = p;
              } catch (t) {
                this._log("dev_sync_fetch_missing_version_too_old");
              }
              return [4, this.executeFetchMissTasks(e)];
            case 1:
              n.sent();
              return [2];
          }
        });
      });
    };
    t.prototype.executeFetchMissTasks = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        var n;
        var r;
        var i;
        var o;
        var s;
        var a;
        var u = this;
        return tI(this, function (c) {
          switch (c.label) {
            case 0:
              e = false;
              c.label = 1;
            case 1:
              if (!t.length) {
                return [3, 6];
              }
              n = t.shift();
              r = {
                page_id: this.pageToken,
                params: n
              };
              this._log("dev_sync_fetch_missing", {
                rev_list: n.map(function (t) {
                  var e;
                  var n;
                  return {
                    range: "[" + t.from_ver + ", " + t.to_ver + ")",
                    slice_id: tD(t.id),
                    id: ((n = (e = u._logger).encrypt) === null || n === undefined ? undefined : n.call(e, t.id)) || t.id
                  };
                })
              });
              c.label = 2;
            case 2:
              c.trys.push([2, 4,, 5]);
              return [4, this.autoRetryRequest({
                url: this._requestAPI.NEW_CHANGES,
                method: "POST",
                data: r,
                timeout: this._settingsConfig.send_cs_max_timeout
              })];
            case 3:
              o = (i = c.sent()).data;
              s = i.ttLogId;
              this._log("dev_sync_fetch_missing_end");
              (function (t, e, n, r) {
                t.forEach(function (t) {
                  var i = t.id;
                  var o = t.to_ver;
                  var s = t.from_ver;
                  var a = e.op_map[i];
                  var u = a.every(function (t, e) {
                    return e === a.length - 1 || a[e + 1].version - t.version == 1;
                  });
                  var c = a[0].version;
                  var l = a[a.length - 1].version;
                  if (!u || !(c <= s) || !(l >= o - 1)) {
                    var p = Error("fetch_miss response verify failed,\n      id: " + tD(i) + ",\n      request range is [" + s + "," + (o - 1) + "], but response is [" + c + "," + l + "],\n      logId: " + n + "\n      ");
                    if (r != null) {
                      r(p);
                    }
                    throw p;
                  }
                });
              })(n, o, s, function (t) {
                t.code = A.VERIFY_FETCH_MISS_FAILED;
              });
              this.handleNewChanges(o);
              return [3, 5];
            case 4:
              a = c.sent();
              e = true;
              this._log("dev_sync_fetch_missing_end", {
                code: a == null ? undefined : a.code,
                msg: a == null ? undefined : a.message
              });
              n.forEach(function (t) {
                var e = t.id;
                var n = t.to_ver;
                u.collectMissings({
                  id: e,
                  version: n - 1,
                  resourceType: x.record
                }, false);
              });
              this.handleRequestError(a, L.NEW_CHANGES);
              if (this._isErrorState) {
                return [2];
              }
              return [3, 5];
            case 5:
              return [3, 1];
            case 6:
              this._submittedMissings = new Map();
              if (!e) {
                this.flushMissings();
              }
              return [2];
          }
        });
      });
    };
    t.prototype.proxyNewChangesMsg = function (t) {
      if (this._proxyManager && this._proxyManager.getIsReady()) {
        var e;
        var n;
        var r;
        var i;
        var o;
        var s = t.token;
        var a = t.op_map;
        var u = (o = this._proxyManager) === null || o === undefined ? undefined : o.getOriginTokenByProxy(s);
        if (u) {
          t.token = u;
          n = (e = {
            opMap: a,
            originToken: u,
            proxyToken: s
          }).opMap;
          r = e.originToken;
          if (i = e.proxyToken) {
            Object.keys(n).forEach(function (t) {
              var e = n[t];
              if (t === i) {
                e.forEach(function (t) {
                  t.id = r;
                });
                n[r] = e;
                delete n[t];
              } else {
                e.forEach(function (t) {
                  var e = t.ops;
                  t.ops = t9({
                    ops: e,
                    originID: i,
                    replaceID: r
                  });
                });
              }
            });
          }
        }
      }
    };
    t.prototype.getEntity = function (t, e) {
      return this._entityMap.get(this.keyOf({
        id: t,
        resourceType: e
      }));
    };
    t.prototype.safelyGetVersion = function (t) {
      var e = t.id;
      var n = t.resourceType;
      return this.safelyGetEntity({
        id: e,
        resourceType: n
      }).version;
    };
    t.prototype.safelySetVersion = function (t) {
      var e = t.id;
      var n = t.resourceType;
      var r = t.version;
      var i = this.safelyGetEntity({
        id: e,
        resourceType: n
      });
      if (r !== i.version + 1) {
        this.emit(j.Error, {
          code: A.SET_VERSION_ERROR,
          msg: "set error version",
          type: O.CLIENT_ERROR
        });
        throw Error("entity set error record version from " + i.version + " to " + r);
      }
      i.version = r;
    };
    t.prototype.handleEntityNotFound = function (t, e) {
      var n;
      var r;
      if (!this.hasEntity(t, e) && (r = (n = this.options) === null || n === undefined ? undefined : n.handleEntityNotFound) !== null && r !== undefined) {
        r.call(n, {
          id: t
        });
      }
    };
    t.prototype.emit = function (t, e) {
      this._em.emit(t, e);
    };
    t.prototype.logAck = function (t, e) {
      var n = this;
      var r = Object.values(t);
      var i = r.map(function (t) {
        var e;
        var r;
        var i = t.id;
        var o = t.version;
        var s = n.safelyGetEntity({
          id: i,
          resourceType: x.record
        });
        return {
          block_id: ((r = (e = n._logger).encrypt) === null || r === undefined ? undefined : r.call(e, i)) || i,
          sliced_id: tD(i),
          version: o,
          old_version: s.version
        };
      });
      this._log("dev_sync_ack", {
        block_detail: i,
        cs_uuid: e,
        cs_block_num: r.length
      });
    };
    t.prototype.handleRequestError = function (t, e) {
      var n = function (t, e) {
        if (er(t)) {
          return tS(tS({}, t), {
            code: t.code || A.UNKNOWN,
            msg: "" + ei[e] + (t.resMsg || t.msg || t.message),
            type: O.RESPONSE_ERROR,
            requestType: e
          });
        }
        var o = "" + ei.default + t.message + "; ";
        var s = t.response?.status;
        if (s !== undefined) {
          return {
            code: A.NETWORK_ERROR,
            status: s,
            msg: o,
            type: O.RESPONSE_ERROR,
            requestType: e
          };
        } else {
          o += "url: " + t.config?.url + "; timeout: " + t.config?.timeout;
          return {
            code: A.NETWORK_ERROR,
            msg: o,
            type: O.RESPONSE_ERROR,
            requestType: e
          };
        }
      }(t, e);
      if (![A.NETWORK_ERROR, A.DR_DRILL_ERROR, A.UNKNOWN, A.SECURITY_REVIEW_FAILED].includes(n.code)) {
        this._logger.syncLog(R.INTO_ERROR_STATE, {
          data: {
            code: n.code,
            requestType: e
          }
        });
        this._isErrorState = true;
      }
      this.emit(j.Error, n);
    };
    return t;
  }();
  function ec(t, e, n = operationalTransformCore.TransformDirection.RIGHT) {
    var r = n;
    var i = n === operationalTransformCore.TransformDirection.LEFT ? operationalTransformCore.TransformDirection.RIGHT : operationalTransformCore.TransformDirection.LEFT;
    var o = t.clone();
    var s = e.map(function (t) {
      var e = t.clone();
      var n = e.ops.slice();
      e.ops = operationalTransformCore.transform(n, o.ops, i);
      e.snapshotBeforeApply &&= operationalTransformCore.apply(e.snapshotBeforeApply, o.ops);
      o.ops = operationalTransformCore.transform(o.ops, n, r);
      o.snapshotBeforeApply &&= operationalTransformCore.apply(o.snapshotBeforeApply, n);
      return e;
    });
    return [o, s];
  }
  function el(t, e, n = operationalTransformCore.TransformDirection.LEFT) {
    var r = tC(ec(t, t1(e), n), 2);
    return [r[0], t1(r[1])];
  }
  var ep = function () {
    function t(t, e) {
      var n;
      var r;
      var i;
      var o = this;
      this.log = t;
      this.onError = e;
      this.changeMap = new Map();
      this.transactionMap = new Map();
      this.debounceLog = (n = new Set(), r = [], i = debounceUtil_1_1.debounce(function () {
        var t = tM([], tC(n), false).join(",");
        o.log(t, {
          logs: tM([], tC(r), false)
        });
        n.clear();
        r.length = 0;
      }), function (t, e) {
        n.add(t);
        r.push({
          action: t,
          options: e
        });
        return i();
      });
    }
    t.prototype.set = function (t) {
      var e;
      var n = this;
      var r = t.recordOps;
      var i = t.transactionName;
      var o = t.transactionFrame;
      var s = this.transactionMap.get(i);
      var a = s == null ? undefined : s[0];
      this.debounceLog("set", {
        transactionName: i,
        transactionFrame: o,
        needToCompose: !!(a == null ? undefined : a.size)
      });
      e = new Map();
      r.forEach(function (t) {
        var n = e.get(t.id);
        if (n) {
          n.append(t.ops);
        } else {
          e.set(t.id, t.clone());
        }
      });
      var u = tM([], tC(e.values()), false);
      var c = u.map(function (t) {
        return t.id;
      });
      if (s) {
        s[0] = new Set(tM(tM([], tC(s[0]), false), tC(c), false));
        s[1] = new Set(tM(tM([], tC(s[1]), false), [o], false));
      } else {
        this.transactionMap.set(i, [new Set(c), new Set([o])]);
      }
      u.forEach(function (t) {
        var e = t.id;
        var r = n.changeMap.get(e);
        if (!r) {
          n.changeMap.set(e, [[t, i]]);
          return;
        }
        if (!a || !a.has(e)) {
          r.push([t, i]);
          return;
        }
        n.handleCompose(t, r, i);
      });
      this.logTempQueueInfo(u);
    };
    t.prototype.has = function (t) {
      return this.transactionMap.has(t);
    };
    t.prototype.getById = function (t) {
      return this.changeMap.get(t);
    };
    t.prototype.cancel = function (t) {
      try {
        return this.handleTempChange(t, "cancel");
      } catch (t) {
        this.onError(t.message || "temp: cancel failed");
        throw t;
      }
    };
    t.prototype.submit = function (t) {
      try {
        return this.handleTempChange(t, "submit");
      } catch (t) {
        this.onError(t.message || "temp: submit failed");
        throw t;
      }
    };
    t.prototype.handleLocalChange = function (t) {
      var e = t.recordOps;
      var n = t.transactionName;
      var r = t.transactionFrame;
      if (!this.changeMap.size) {
        return {
          rOps: e,
          transactionFrames: [r]
        };
      }
      var i = n + "-" + r;
      this.set({
        recordOps: e,
        transactionName: i,
        transactionFrame: r
      });
      return this.submit(i);
    };
    t.prototype.handleNewChange = function (t) {
      try {
        var e = this.changeMap.get(t.id);
        if (!e) {
          return t;
        }
        var n = e.map(function (t) {
          return tC(t, 1)[0];
        });
        var r = tC(ec(t, n), 2);
        var i = r[0];
        var o = r[1];
        this.debounceLog("handleNewChange", {
          ops: tB(i.ops),
          len: n.length
        });
        if (o.length !== e.length) {
          throw Error("transformed ops list length is not equal with origin length");
        }
        e.forEach(function (t, e) {
          return t[0] = o[e];
        });
        return i;
      } catch (t) {
        this.onError(t.message || "temp: handleNewChange failed");
        throw t;
      }
    };
    t.prototype.destroy = function () {
      this.changeMap.clear();
      this.transactionMap.clear();
    };
    t.prototype.handleCompose = function (t, e, n) {
      var r = t;
      var i = e.length - 1;
      for (; i >= 0; i--) {
        var o = tC(e[i], 2);
        var s = o[0];
        if (o[1] === n) {
          s.append(r.ops);
          this.debounceLog("composed", {
            id: tD(s.id),
            ops: tB(s.ops),
            transactionName: n
          });
          break;
        }
        var a = tC(el(r, [s]), 2);
        var u = a[0];
        var c = tC(a[1], 1)[0];
        r = u;
        e[i][0] = c;
      }
    };
    t.prototype.logTempQueueInfo = function (t) {
      var e = this;
      var n = 0;
      var r = t.map(function (t) {
        var r = e.changeMap.get(t.id);
        if (r) {
          if (r.length > n) {
            n = r.length;
          }
          return {
            id: tD(t.id),
            tNameQueue: r.map(function (t) {
              return tC(t, 2)[1];
            }),
            opsLen: r.length
          };
        }
      });
      this.debounceLog("afterSetInfo", {
        len: n,
        tempQueueInfo: r
      });
    };
    t.prototype.handleTempChange = function (t, e) {
      var n = this;
      this.debounceLog("handleTempChange", {
        transactionName: t,
        action: e
      });
      var r = this.transactionMap.get(t);
      this.transactionMap.delete(t);
      if (!r) {
        throw Error("TransactionName " + t + " is not existed in Z list");
      }
      var i = [];
      var o = tC(r, 2);
      var s = o[0];
      var a = o[1];
      s.forEach(function (r) {
        var o = n.changeMap.get(r);
        if (o) {
          var s = [];
          var a = [];
          var u = o.filter(function (e, n) {
            var r = tC(e, 2);
            var i = r[0];
            var o = r[1];
            s.push(i);
            return o !== t || (a.push(n), false);
          });
          n.debounceLog("beforeTransform", {
            id: tD(r),
            opsList: a.map(function (t) {
              return tB(s[t].ops);
            }),
            indexes: a
          });
          var c = (e === "submit" ? function (t, e) {
            var n = t;
            var r = new t0(t[0].record);
            var i = 0;
            e.sort(function (t, e) {
              return t - e;
            }).forEach(function (t) {
              var e = t - i++;
              var o = tC(el(n[e], n.slice(0, e), operationalTransformCore.TransformDirection.LEFT), 2);
              var s = o[0];
              n = tM(tM([], tC(o[1]), false), tC(n.slice(e + 1)), false);
              r = r.append(s.ops);
            });
            return {
              tOpsList: n,
              tOps: r
            };
          } : function (t, e) {
            var n = t;
            var r = new t0(t[0].record);
            e.sort(function (t, e) {
              return e - t;
            }).forEach(function (t) {
              var e = n[t];
              var i = n.slice(t + 1);
              var o = tC(ec(t1([e])[0], i, operationalTransformCore.TransformDirection.RIGHT), 2);
              var s = o[0];
              var a = o[1];
              n = tM(tM([], tC(n.slice(0, t)), false), tC(a), false);
              r = r.append(s.ops);
            });
            return {
              tOpsList: n,
              tOps: r
            };
          })(s, a);
          var l = c.tOpsList;
          var p = c.tOps;
          if (l.length !== u.length) {
            throw Error("transformed ops list length is not equal with filtered length");
          }
          if (l.length) {
            var h = l.map(function (t, e) {
              return [t, u[e][1]];
            });
            n.changeMap.set(r, h);
          } else {
            n.changeMap.delete(r);
          }
          i.push(p);
          n.debounceLog("afterTransform", {
            tOps: tB(p.ops),
            remainLen: l.length
          });
        }
      });
      return {
        rOps: i,
        transactionFrames: tM([], tC(a), false)
      };
    };
    return t;
  }();
  var eh = Q("flowCollab");
  var ef = function () {
    function t() {
      var t = this;
      this.overDurationTimes = 0;
      this._retrySubmitTimes = 0;
      this._em = new tn();
      this._unSubmitted = new Map();
      this._unSubmittedUUID = this.uuid;
      this._unSubmittedTransactionFrameSet = new Set();
      this.unSubmitTransactionNames = [];
      this._submitted = new Map();
      this._submittedUUID = "";
      this._submittedTransactionFrameSet = new Set();
      this.submitTransactionNames = [];
      this._cacheChanges = new Set();
      this.isSubmitting = false;
      this.preApplyRecordMap = new Map();
      this.handleAcceptCommitBind = this.handleAcceptCommit.bind(this);
      this._onCollabModeChange = function (e) {
        if (e) {
          t.flushImmediately();
        }
      };
      this._logTransform = function (e) {
        t._logger.log("doc_ot_transform_dev", e);
      };
      this.handleNetworkStateChange = function (e) {
        if (e !== "online") {
          t._retrySubmitTimes = 0;
          return;
        }
        t.retrySubmit("NetworkStateChange");
      };
      this.handleHeartbeatCallback = function () {
        t.retrySubmit("Heartbeat");
      };
      this.retrySubmit = function (e) {
        var n = t._settingsConfig.submit_cs_retry_max_count;
        if (!(t._retrySubmitTimes >= n)) {
          if (!!t.isSubmitting && !t.sync.getIsSendingUserChange(t._submittedUUID) && !t.sync.isErrorState) {
            t._retrySubmitTimes++;
            t.sendUserChange(t.assemRecordOps(z.SUBMITTED));
            t._log("retry_submit", {
              uuid: t._submittedUUID,
              networkState: t.sync.getNetworkState(),
              retryTimes: t._retrySubmitTimes,
              maxRetryTimes: n,
              from: e
            });
          }
        }
      };
      this.handleRecordChange = function (e) {
        try {
          var n = e.recordOps;
          var r = e.options;
          if (r.from === M.REMOTE || r.from === M.SILENCE) {
            return;
          }
          var i = r.transactionName;
          var o = r.transactionFrame;
          var s = r.uuid;
          if (n.length === 0) {
            t._logger.log("doc_bug_track_dev", {
              action: "record_change_no_ops",
              info: {
                transaction: r.transactionName
              }
            });
            return;
          }
          t.registerForNewLocalRecord(n.map(function (t) {
            return t.id;
          }));
          var a = {
            recordOps: n,
            transactionName: i,
            transactionFrame: o
          };
          if (r.from === M.RESUBMIT) {
            t.resubmitRecordChange(e);
            return;
          }
          if (!t.temp) {
            t.collect({
              recordOps: n,
              transactionFrames: [o],
              transactionNames: [i],
              uuid: s
            });
            return;
          }
          if (r.from === M.TEMPORARY && r.source !== t5) {
            if (i === t6) {
              return;
            }
            t.temp.set(a);
            return;
          }
          var u = t.temp.handleLocalChange(a);
          var c = u.rOps;
          var l = u.transactionFrames;
          t.collect({
            recordOps: c,
            transactionFrames: l,
            transactionNames: [i],
            uuid: s
          });
        } catch (e) {
          t._recordManager.emitError({
            code: A.CHANGE_COLLECT_ERROR,
            type: O.CLIENT_ERROR,
            msg: e.message,
            stack: e.stack,
            unSubmitTransactionNames: t.unSubmitTransactionNames,
            submitTransactionNames: t.submitTransactionNames
          });
          throw e;
        }
      };
      this.handleNewChangesEvent = function (e) {
        var n = e.isNewEntity;
        var r = e.recordChange;
        var i = e.editTime;
        if (n) {
          t.handleNewChangesOfNewEntity(r, i);
        } else {
          t.handleNewChangesOfExistedEntityEvent(r, i);
        }
      };
      this.handleNewChangesOfExistedEntityEvent = function (e, n) {
        t.preLogNewChanges(e);
        t.handleNewChangesMessage(e, n);
      };
      this.handleNewChangesOfNewEntity = function (e, n) {
        var r = e.id;
        var i = e.uuid;
        if (t._recordManager.hasRecord(r)) {
          t.logAppliedRecord(i, new Set([r]), Date.now());
          return;
        }
        t._recordManager.registerRecords([{
          id: r,
          snapshot: t.makeBlankRecordSnapshot()
        }]);
        t._sync.register([{
          id: r,
          version: 1,
          resourceType: x.record
        }]);
        t.handleNewChangesOfExistedEntityEvent(e, n);
      };
      this.handleCollabError = function (e) {
        t.emit(U.CollabDataChange, {
          type: z.SUBMITTED,
          data: t.assemRecordOps(z.SUBMITTED)
        });
        t.emit(U.CollabDataChange, {
          type: z.UN_SUBMITTED,
          data: t.assemRecordOps(z.UN_SUBMITTED)
        });
        e.unSubmitTransactionNames = tM([], tC(t.unSubmitTransactionNames), false);
        e.submitTransactionNames = tM([], tC(t.submitTransactionNames), false);
        t._recordManager.emitError(e);
      };
    }
    t.prototype.init = function (t) {
      var e = this;
      var n = t.collab;
      var r = t.version;
      var i = t.recordManager;
      var o = t.collabToken;
      var s = t.logger;
      var a = t.settingsConfig;
      var u = t.useTempQueue;
      eh("init", {
        collab: n,
        version: r
      });
      this._collabToken = o;
      this._recordManager = i;
      this._unwatchRecordChange = this._recordManager.onChange(this.handleRecordChange);
      this._logger = s || new tj("FlowCollab");
      this._sync = new eu(tS(tS({}, t), {
        onCollabModeChange: function (n) {
          var r;
          if ((r = t.onCollabModeChange) !== null && r !== undefined) {
            r.call(t, n);
          }
          e._onCollabModeChange(n);
        },
        getUnSubmittedData: function () {
          return e.assemRecordOps(z.UN_SUBMITTED);
        }
      }));
      if (u) {
        this.temp = new ep(this.tempLog.bind(this), function (t) {
          e._recordManager.emitError({
            code: A.TEMP_CHANGE_ERROR,
            type: O.CLIENT_ERROR,
            msg: t,
            unSubmitTransactionNames: e.unSubmitTransactionNames,
            submitTransactionNames: e.submitTransactionNames
          });
        });
      }
      this._settingsConfig = a || t4;
      this._log("settings_config", a);
      this._sync.on(j.AcceptCommit, this.handleAcceptCommitBind);
      this._sync.on(j.HEARTBEAT_CALLBACK, this.handleHeartbeatCallback);
      this._sync.on(j.NewChanges, this.handleNewChangesEvent);
      this._sync.on(j.Error, this.handleCollabError);
      this._sync.on(j.NETWORK_STATE_CHANGE, this.handleNetworkStateChange);
      this.emit(U.InitFinish);
    };
    Object.defineProperty(t.prototype, "token", {
      get: function () {
        return this._collabToken;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "uuid", {
      get: function () {
        return uuidGeneratorUtil.generateUuid();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "sync", {
      get: function () {
        return this._sync;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getMemberId = function () {
      return this.sync.memberId;
    };
    t.prototype.hasUnacceptedChange = function () {
      var t;
      return !!this._submitted.size || !!this._unSubmitted.size || !!((t = this.temp) === null || t === undefined ? undefined : t.changeMap.size);
    };
    t.prototype.getVersion = function (t, e = x.record) {
      return this._sync.getVersion({
        id: t,
        resourceType: e
      });
    };
    t.prototype.getSyncVersion = function () {
      return this._sync.getSyncVersion();
    };
    t.prototype.setHeartbeatVersion = function (t, e) {
      this._sync.setHeartbeatVersion(t, e);
    };
    t.prototype.getUnSubmitted = function () {
      return this._unSubmitted;
    };
    t.prototype.getSubmitted = function () {
      return this._submitted;
    };
    t.prototype.getSubmittedTransactionFrameSet = function () {
      return this._submittedTransactionFrameSet;
    };
    t.prototype.hasEntity = function (t, e = x.record) {
      return this._sync.hasEntity(t, e);
    };
    t.prototype.sendUserChange = function (t) {
      var e = t.uuid;
      var n = e === undefined ? uuidGeneratorUtil.generateUuid() : e;
      var r = t.change_map;
      if (Object.keys(r).length) {
        return this._sync.sendUserChange({
          change_map: r,
          uuid: n
        });
      }
    };
    t.prototype.register = function (t) {
      this._sync.register(t);
    };
    t.prototype.connectSync = function (t) {
      this._sync.connectSync(t);
    };
    t.prototype.unregister = function (t) {
      this._sync.unregister(t);
    };
    t.prototype.destroy = function () {
      var t;
      this._cacheChanges.clear();
      if ((t = this._unwatchRecordChange) !== null && t !== undefined) {
        t.call(this);
      }
      this._sync.off(j.AcceptCommit, this.handleAcceptCommitBind);
      this._sync.off(j.HEARTBEAT_CALLBACK, this.handleHeartbeatCallback);
      this._sync.off(j.NewChanges, this.handleNewChangesEvent);
      this._sync.off(j.Error, this.handleCollabError);
      this._sync.off(j.NETWORK_STATE_CHANGE, this.handleNetworkStateChange);
      this._sync.destroy();
      this._em.removeAllListeners();
    };
    t.prototype.on = function (t, e) {
      this._em.on(t, e);
    };
    t.prototype.off = function (t, e) {
      this._em.off(t, e);
    };
    t.prototype.flush = function () {
      return tT(this, undefined, undefined, function () {
        return tI(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.flushImmediately()];
            case 1:
              t.sent();
              return [2];
          }
        });
      });
    };
    t.prototype.assemRecordOps = function (t) {
      var e;
      var n;
      var r = tC(t === z.SUBMITTED ? [this._submitted, this._submittedUUID] : [this._unSubmitted, this._unSubmittedUUID], 2);
      var i = r[0];
      var o = r[1];
      var s = {};
      try {
        var a = tA(Array.from(i.values()));
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var c = u.value;
          var l = c.id;
          var p = c.ops;
          var h = c.createTime;
          var f = this.getVersion(l);
          if (p.length !== 0) {
            if (f === undefined) {
              throw Error("there is no base version when assembly record operations, id: " + l);
            }
            s[l] = {
              id: l,
              version: f,
              payload: {
                ops: tM([], tC(p), false)
              },
              createTime: h
            };
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (n = a.return)) {
            n.call(a);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return {
        change_map: s,
        uuid: o
      };
    };
    t.prototype.hasTempChange = function (t) {
      return !!this.temp && this.temp.has(t);
    };
    t.prototype.submitTempChange = function (t) {
      if (this.temp) {
        var e = this.temp.submit(t);
        var n = e.rOps;
        var r = e.transactionFrames;
        this.collect({
          recordOps: n,
          transactionFrames: r,
          transactionNames: [t]
        });
      }
    };
    t.prototype.cancelTempChange = function (t) {
      if (this.temp) {
        var e = this.temp.cancel(t).rOps;
        this._recordManager.applyTransaction(t6, function (t) {
          (function (t) {
            var e = t.slice();
            var n = t.length - 1;
            for (; n >= 0; n--) {
              var r = t[n].ops;
              var i = r.length - 1;
              for (; i >= 0; i--) {
                var o = r[i];
                if (tz(o) && o.p.length === 0) {
                  e.splice(n, 1);
                  break;
                }
              }
            }
            return e;
          })(e).forEach(function (e) {
            var n = e.id;
            var r = e.ops;
            t.apply(n, r);
          });
        }, {
          from: M.TEMPORARY,
          undoable: false
        });
      }
    };
    t.prototype.handleSelfChangeset = function (t, e) {
      if (t.uuid === this._submittedUUID) {
        this._log("new_changes_ack", this._extractRecordInfoForLog(t));
        var n = t.id;
        var r = t.uuid;
        var i = this.preApplyRecordMap.get(r);
        if (i) {
          i.delete(n);
        }
        this.handleAcceptCommit({
          id: n,
          editTime: e
        });
        this._cacheChanges.delete(t);
        return true;
      }
      return t.uuid === this._unSubmittedUUID && (this._cacheChanges.add(t), this._log("cache_y_changes", this._extractRecordInfoForLog(t)), this._submitted.size || this.flushImmediately(), true);
    };
    t.prototype.handleAcceptCommit = function (t) {
      var e = t.id;
      var n = t.editTime;
      var r = this._submitted.get(e);
      this._submitted.delete(e);
      if (this._submitted.size === 0) {
        this.emit(U.CollabDataChange, {
          type: z.SUBMITTED,
          data: this.assemRecordOps(z.SUBMITTED)
        });
        this._retrySubmitTimes = 0;
      }
      this.flush();
      this.emit(U.AcceptCommit, {
        id: e,
        recordOperation: r,
        editTime: n
      });
      return r;
    };
    t.prototype.handleNewChangesMessage = function (t, e) {
      this.handleNewChanges(t, e);
    };
    t.prototype.handleNewChanges = function (t, e) {
      var n = this;
      var r = [];
      var i = Array.isArray(t) ? t : [t];
      this._log("handle_new_changes", {
        changes: i.map(function (t) {
          return n._extractRecordInfoForLog(t);
        })
      });
      i.forEach(function (t) {
        var i;
        var o = t.id;
        var s = t.ops;
        if (!n.handleSelfChangeset(t, e)) {
          if (n._recordManager.hasRecord(o)) {
            i = new t0(n._recordManager.getRecord(o), s);
          } else {
            var a = "collab handle record which is not exist,  id: " + o;
            n._recordManager.emitError({
              code: A.HANDLE_NEWCHANGES_NOT_EXIST_RECORD,
              type: O.CLIENT_ERROR,
              msg: a,
              unSubmitTransactionNames: n.unSubmitTransactionNames,
              submitTransactionNames: n.submitTransactionNames
            });
            throw Error(a);
          }
          var u = n._submitted.get(o);
          var c = i.ops;
          if (u) {
            var l = u.ops;
            try {
              c = tk(i.ops, l, operationalTransformCore.TransformDirection.RIGHT, {
                from: "collab_transform_B",
                log: n._logTransform
              });
              var p = tk(l, i.ops, operationalTransformCore.TransformDirection.LEFT, {
                from: "collab_transform_X",
                log: n._logTransform
              });
              if (p && p.length > 0) {
                u.ops = p;
              } else {
                u.ops = [];
              }
            } catch (t) {
              n._recordManager.emitError({
                code: A.TRANSFORM_X_FAILED,
                type: O.CLIENT_ERROR,
                msg: t && t.message || "transfrom X failed",
                unSubmitTransactionNames: n.unSubmitTransactionNames,
                submitTransactionNames: n.submitTransactionNames
              });
            }
          }
          var h = n._unSubmitted.get(o);
          var f = c;
          if (h) {
            var d = h.ops;
            try {
              f = tk(c, d, operationalTransformCore.TransformDirection.RIGHT, {
                from: "collab_transform_B'",
                log: n._logTransform
              });
              var v = tk(d, c, operationalTransformCore.TransformDirection.LEFT, {
                from: "collab_transform_Y",
                log: n._logTransform
              });
              if (v && v.length > 0) {
                h.ops = v;
              } else {
                h.ops = [];
              }
            } catch (t) {
              n._recordManager.emitError({
                code: A.TRANSFORM_Y_FAILED,
                type: O.CLIENT_ERROR,
                msg: t && t.message || "transfrom Y failed",
                unSubmitTransactionNames: n.unSubmitTransactionNames,
                submitTransactionNames: n.submitTransactionNames
              });
            }
          }
          i.ops = f;
          if (n.temp) {
            i = n.temp.handleNewChange(i);
          }
          r.push(i);
        }
      });
      var o = r.length;
      this._recordManager.interceptRemoteChanges(r);
      this._log("will_apply_changes", {
        changes: r.map(function (t) {
          return {
            slicedId: tD(t.id),
            opsHintString: tB(t.ops)
          };
        }),
        originLength: i.length,
        beforeInterceptLength: o,
        afterInterceptLength: r.length
      });
      if (r.length !== 0) {
        this._recordManager.applyTransaction("applyRemoteOperations", function (t) {
          r.forEach(function (e) {
            var n = e.id;
            var r = e.ops;
            t.apply(n, r);
          });
        }, {
          from: M.REMOTE,
          extra: {
            appliedUUIDs: tM([], tC(this.preApplyRecordMap.keys()), false)
          }
        });
        this.handleNewChangesEnd(r, e);
      }
    };
    t.prototype.handleNewChangesEnd = function (t, e) {
      var n = this;
      var r = this.sync.correctClientTime(Date.now());
      this.preApplyRecordMap.forEach(function (t, e) {
        n.logAppliedRecord(e, t, r);
      });
      this.preApplyRecordMap.clear();
    };
    t.prototype.makeBlankRecordSnapshot = function () {
      return {};
    };
    t.prototype.flushImmediately = function () {
      return tT(this, undefined, undefined, function () {
        var t;
        var e;
        var n;
        var r = this;
        return tI(this, function (i) {
          switch (i.label) {
            case 0:
              if (!this.sync.getIsCollab()) {
                return [2];
              }
              if (this._submitted.size) {
                return [3, 2];
              }
              this.updateSubmittingStatus(false);
              if (!this._unSubmitted.size) {
                return [2];
              }
              this._unSubmitted.forEach(function (t) {
                if (t.ops.length === 0) {
                  r._unSubmitted.delete(t.id);
                  r.unregisterForNewLocalRecord(t.id);
                }
              });
              this._submitted = this._unSubmitted;
              this._submittedUUID = this._unSubmittedUUID;
              this._submittedTransactionFrameSet = this._unSubmittedTransactionFrameSet;
              this.submitTransactionNames = this.unSubmitTransactionNames;
              this._unSubmitted = new Map();
              this._unSubmittedUUID = uuidGeneratorUtil.generateUuid();
              this._unSubmittedTransactionFrameSet = new Set();
              this.unSubmitTransactionNames = [];
              this.emit(U.CollabDataChange, {
                type: z.UN_SUBMITTED,
                data: this.assemRecordOps(z.UN_SUBMITTED)
              });
              return [4, this.submit()];
            case 1:
              i.sent();
              if (this._cacheChanges.size) {
                this._log("consume_cache_changes", {
                  size: this._cacheChanges.size
                });
                this._cacheChanges.forEach(function (t) {
                  r.handleSelfChangeset(t);
                });
              }
              return [2];
            case 2:
              t = Date.now() - this.submittingTime;
              this._log("submitting_status", {
                networkState: this.sync.getNetworkState(),
                isCollabOn: this.sync.getIsCollab(),
                duration: t,
                submittingUUID: this._submittedUUID,
                submittingSize: this._lastSubmittedSize,
                currentSize: this._submitted.size
              });
              this._retrySubmitTimes = 0;
              n = Math.floor(t / (e = this._settingsConfig.last_cs_ack_timeout));
              if (this.sync.getNetworkState() === "online" && t > e && this.overDurationTimes < n) {
                this.overDurationTimes = n;
                this._logger.exceptionLog("submit_over_time", {
                  duration: t,
                  uuid: this._submittedUUID,
                  isErrorState: this.sync.isErrorState
                });
                this.emit(U.Exception);
              }
              return [2];
          }
        });
      });
    };
    t.prototype.submit = function () {
      return tT(this, undefined, undefined, function () {
        var t;
        return tI(this, function (e) {
          switch (e.label) {
            case 0:
              if (!this._submitted.size) {
                return [2];
              }
              t = this.assemRecordOps(z.SUBMITTED);
              this.emit(U.CollabDataChange, {
                type: z.SUBMITTED,
                data: t
              });
              this._log("submit", {
                uuid: this._submittedUUID,
                transactionFrame: tM([], tC(this._submittedTransactionFrameSet), false)
              });
              this._lastSubmittedSize = this._submitted.size;
              this.updateSubmittingStatus(true);
              this.submittingTime = Date.now();
              return [4, this.sendUserChange(t)];
            case 1:
              e.sent();
              return [2];
          }
        });
      });
    };
    t.prototype.logAppliedRecord = function (t, e, n) {
      var r = this;
      var i = tM([], tC(e), false).map(function (t) {
        return {
          block_id: r._logger.encrypt ? r._logger.encrypt(t) : t,
          sliced_id: tD(t)
        };
      });
      this._logger.log(D.APPLY_NEW_CHANGE, {
        message_type: "changeset",
        apply_cs_time: n,
        cs_uuid: t,
        cs_block_num: e.size,
        block_detail: i
      });
    };
    t.prototype._extractRecordInfoForLog = function (t) {
      var e = t.id;
      var n = t.uuid;
      var r = t.ops;
      var i = t.version;
      return {
        slicedId: tD(e),
        version: i,
        uuid: n,
        opsHintString: tB(r)
      };
    };
    t.prototype.tempLog = function (t, e) {
      this._logger.tempLog(t, e);
    };
    t.prototype._log = function (t, e) {
      eh(t, e);
      this._logger.log("docx_collab_dev", tS({
        action: t
      }, e));
    };
    t.prototype.preLogNewChanges = function (t) {
      var e = t.id;
      var n = t.uuid;
      var r = this.preApplyRecordMap.get(n);
      if (r) {
        r.add(e);
      } else {
        this.preApplyRecordMap.set(n, new Set([e]));
      }
    };
    t.prototype.updateSubmittingStatus = function (t) {
      if (this.isSubmitting !== t) {
        this.isSubmitting = t;
        this.emit(U.StatusChange, {
          status: t
        });
      }
    };
    t.prototype.resubmitRecordChange = function (t) {
      var e = this;
      var n = t.recordOps;
      var r = t.options;
      if (this._submitted.size) {
        throw Error("cannot resubmit since submitted is NOT empty");
      }
      if (!r.uuid) {
        throw Error("cannot resubmit WITHOUT given uuid");
      }
      n.forEach(function (t) {
        e._submitted.set(t.id, t);
      });
      this._submittedUUID = r.uuid;
      this.submit();
      this._log("change_from_resubmit", {
        uuid: this._submittedUUID
      });
    };
    t.prototype.collect = function (t) {
      var e = this;
      var n = t.recordOps;
      var r = t.uuid;
      var i = t.transactionFrames;
      var o = t.transactionNames;
      i.forEach(function (t) {
        return e._unSubmittedTransactionFrameSet.add(t);
      });
      o.forEach(function (t) {
        return e.unSubmitTransactionNames.push(t);
      });
      n.forEach(function (t) {
        var n = t.id;
        var r = t.ops;
        var i = e._unSubmitted.get(n);
        if (i) {
          try {
            i.append(r);
          } catch (t) {
            var o = t && t.message || "record compose to unSubmitted failed";
            e._recordManager.emitError({
              code: A.COMPOSE_TO_Y_FAILED,
              type: O.CLIENT_ERROR,
              msg: o,
              unSubmitTransactionNames: e.unSubmitTransactionNames,
              submitTransactionNames: e.submitTransactionNames
            });
          }
        } else {
          e._unSubmitted.set(n, t.clone());
        }
      });
      if (r) {
        this._unSubmittedUUID = r;
      }
      if (this._unSubmitted.size) {
        this.emit(U.CollabDataChange, {
          type: z.UN_SUBMITTED,
          data: this.assemRecordOps(z.UN_SUBMITTED),
          transactionFrames: tM([], tC(this._unSubmittedTransactionFrameSet), false)
        });
        this.collectNewUuid(this._unSubmittedUUID);
      }
      this.flush();
    };
    t.prototype.collectNewUuid = function (t) {
      if (t !== this._lastHasDataUUID) {
        this._lastHasDataUUID = t;
        this._logger.log("docx_collab_new_uuid", {
          uuid: t,
          isOnline: this.sync.getNetworkState() === "online",
          isCollab: this.sync.getIsCollab(),
          ts: Date.now()
        });
      }
    };
    t.prototype.registerForNewLocalRecord = function (t) {
      var e = this;
      t.forEach(function (t) {
        if (e.getVersion(t) === undefined) {
          e.register([{
            id: t,
            version: 0,
            resourceType: x.record
          }]);
        }
      });
    };
    t.prototype.unregisterForNewLocalRecord = function (t) {
      var e;
      if (!this._submitted.has(t) && !this._unSubmitted.has(t) && !((e = this.temp) === null || e === undefined ? undefined : e.getById(t)) && this.getVersion(t) === 0) {
        this.unregister([{
          id: t,
          resourceType: x.record
        }]);
      }
    };
    t.prototype.emit = function (t, e) {
      this._em.emit(t, e);
    };
    return t;
  }();
  (_ = H ||= {}).DATA_CHANGE = "docx_backup_change_dev";
  _.PROCESS = "docx_backup_sync_dev";
  _.ERROR = "docx_backup_sync_error_dev";
  _.START = "docx_backup_sync_start_dev";
  _.END = "docx_backup_sync_end_dev";
  _.TRACK = "doc_bug_track_dev";
  (m = V ||= {})[m.INVALID = -3] = "INVALID";
  m[m.EMPTY = -2] = "EMPTY";
  m[m.SUCCESS = -1] = "SUCCESS";
  m[m.BROKEN = 0] = "BROKEN";
  var ed = "offline";
  function ev(t, e, n) {
    var r = [];
    t.forEach(function (t, i) {
      var a = e[i];
      if (t.status === "rejected" || !t.value || "isBroken" in t.value) {
        r.push(a);
        return;
      }
      var u = t.value;
      if (Math.max(u.submittedData.timestamp, u.unSubmittedData?.timestamp ?? 0) < n) {
        r.push(a);
      }
    });
    return r;
  }
  function ey(t) {
    return Number.parseInt(t.split(".")[1]);
  }
  function eg(t) {
    var e = t.backupIDKeyArr;
    var n = t.expirationInterval;
    var r = t.maxBackupSize;
    var i = t.curBackupID;
    var o = e.sort(function (t, e) {
      var n = ey(t) || 0;
      return (ey(e) || 0) - n;
    });
    var s = o.filter(function (t) {
      return ey(i) - ey(t) < n;
    }).slice(0, r);
    var a = o.slice(s.length);
    return {
      validBackupIDs: s,
      invalidBackupIDs: a
    };
  }
  (b = Z ||= {}).INIT_BACKUP_ID = "initBackupID";
  b.CATEGORIZED_CAN_APPLY = "categorizedCanApply";
  b.OFFLINE_APPLY = "offlineApply";
  b.OFFLINE_SUBMIT = "offlineSubmit";
  (E = q ||= {})[E.SUCCESS = 1] = "SUCCESS";
  E[E.ERROR = 0] = "ERROR";
  E[E.DEFAULT = -1] = "DEFAULT";
  var e_ = function () {
    function t() {
      this.results = Object.fromEntries(Object.values(Z).map(function (t) {
        return [t, q.DEFAULT];
      }));
      this.startTimeStamp = Date.now();
    }
    t.prototype.collectResult = function (t, e) {
      this.results[t] = e;
    };
    t.prototype.getAllResults = function () {
      return this.results;
    };
    t.prototype.end = function () {
      this.endTimeStamp = Date.now();
    };
    return t;
  }();
  var em = Q("offline-sync-base:");
  var eb = function () {
    function t(e, n) {
      var r = this;
      this.token = e;
      this.config = n;
      this._isInMultiTab = false;
      this._backupIDMapKey = t.newBackupIDMapKey(this.token);
      this._eventsOffQueue = [];
      this._messageKey = "backup_message:" + this.token;
      this._isApplyEnd = false;
      this._isNeedSync = false;
      this._isCurrentNeedSync = false;
      this.isNewClearerEnable = false;
      this.uselessBackup = {};
      this.lastCheckBackupidTimestamp = Date.now();
      this.checkBackupidInterval = 180000;
      this.isRestoreComplete = false;
      this.errorState = false;
      this.isGetLastBackupStatusEnable = false;
      this.offlineStageStatus = new e_();
      this.getLastBackupIsRestored = function () {
        return tT(r, undefined, undefined, function () {
          var t;
          var e;
          var n;
          var r;
          return tI(this, function (i) {
            switch (i.label) {
              case 0:
                if (!this.isGetLastBackupStatusEnable) {
                  return [2];
                }
                if (this.lastBackupStatus) {
                  return [2, this.lastBackupStatus];
                }
                return [4, this._initialPromise];
              case 1:
                t = i.sent();
                i.label = 2;
              case 2:
                i.trys.push([2, 4,, 5]);
                if (!(e = this.lastBackupID)) {
                  this.lastBackupStatus = {
                    isEmpty: true,
                    isRestored: false,
                    isError: false
                  };
                  return [2, this.lastBackupStatus];
                }
                if (!(n = t[e])) {
                  this.lastBackupStatus = {
                    isEmpty: true,
                    isRestored: false,
                    isError: false,
                    backupID: e
                  };
                  return [2, this.lastBackupStatus];
                }
                if (typeof n == "number" && n !== 1) {
                  this.lastBackupStatus = {
                    isEmpty: false,
                    isRestored: true,
                    isError: false,
                    backupID: e
                  };
                  return [2, this.lastBackupStatus];
                }
                return [4, this.getXYByBackupID(e)];
              case 3:
                if (!(r = i.sent()) || !r.submittedData) {
                  return [2, {
                    isEmpty: true,
                    isRestored: false,
                    isError: false,
                    backupID: e
                  }];
                }
                this.lastBackupStatus = {
                  isEmpty: false,
                  isRestored: !!r.submittedData.appliedError || !!r.submittedData.isRestored,
                  isError: false,
                  baseVersion: r.submittedData.baseVersion,
                  backupID: e
                };
                return [2, this.lastBackupStatus];
              case 4:
                i.sent();
                return [2];
              case 5:
                return [2];
            }
          });
        });
      };
      this.getRestorableIDs = function () {
        if (r._backupIDMap) {
          return Object.entries(r._backupIDMap).filter(function (t) {
            var e = tC(t, 2);
            var n = e[0];
            var i = e[1];
            var o = i > 0 && i <= 3;
            if (r.config.isNeedWatchCollab) {
              return n !== r._id && o;
            } else {
              return o;
            }
          }).map(function (t) {
            return tC(t, 1)[0];
          });
        } else {
          return [];
        }
      };
      this.restore = function (t = {}) {
        return tT(r, undefined, undefined, function () {
          var e;
          var n;
          var r;
          var i;
          var o;
          var s;
          var a;
          var u;
          var c;
          var l;
          var p;
          var h;
          var f;
          var d;
          var v;
          var y;
          var g;
          var _;
          var m;
          return tI(this, function (a) {
            switch (a.label) {
              case 0:
                em("restore options", t);
                e = t.beforeRestore;
                n = t.afterRestore;
                r = t.beforeRestoreComplete;
                i = t.baseVersion;
                o = t.finallyRestore;
                a.label = 1;
              case 1:
                a.trys.push([1, 14, 15, 16]);
                if (e) {
                  e();
                }
                if (!this.isGetLastBackupStatusEnable) {
                  return [3, 3];
                }
                return [4, this.getLastBackupIsRestored()];
              case 2:
                a.sent();
                a.label = 3;
              case 3:
                if (this.config.isNeedApply) {
                  return [3, 5];
                }
                return [4, this._onApplyEnd(t, true)];
              case 4:
                a.sent();
                a.label = 5;
              case 5:
                return [4, this._initialPromise];
              case 6:
                c = a.sent();
                em("raw backupIDMap", tS({}, c));
                if (this.isNewClearerEnable) {
                  this._backupIDMap = c;
                } else {
                  this._backupIDMap = this._filterBackupIDMap(c);
                }
                em("filtered backupIDMap", this._backupIDMap);
                l = undefined;
                if (this.isNewClearerEnable) {
                  h = (p = function (t, e) {
                    var n;
                    var r;
                    var i = {};
                    var o = {};
                    try {
                      var s = tA(Object.entries(t));
                      var a = s.next();
                      for (; !a.done; a = s.next()) {
                        var u = tC(a.value, 2);
                        var c = u[0];
                        var l = u[1];
                        if (e !== c) {
                          if (!function (t) {
                            var e = t.split(".");
                            if (e.length !== 2 && e.length !== 3) {
                              return false;
                            }
                            var n = parseInt(e[1], 10);
                            return !!Number.isInteger(n) || !(n > 0);
                          }(c) || typeof l != "number") {
                            o[c] = V.INVALID;
                            continue;
                          }
                          if (l <= 0 || l > 3) {
                            o[c] = l;
                            continue;
                          }
                          i[c] = l;
                        }
                      }
                    } catch (t) {
                      n = {
                        error: t
                      };
                    } finally {
                      try {
                        if (a && !a.done && (r = s.return)) {
                          r.call(s);
                        }
                      } finally {
                        if (n) {
                          throw n.error;
                        }
                      }
                    }
                    return {
                      backupIDMap: i,
                      uselessBackup: o
                    };
                  }(this._backupIDMap, this._id)).backupIDMap;
                  f = p.uselessBackup;
                  l = Object.keys(h);
                  this.uselessBackup = f;
                } else {
                  l = this.getRestorableIDs();
                }
                d = l.length;
                this._log(H.START, {
                  backupIDs: l,
                  taskSize: d,
                  baseVersion: i
                });
                return [4, this.handleRestoreTasks(l, t, i)];
              case 7:
                y = (v = a.sent()).emptyBackupIDs;
                if (!(s = v.completeBackupIDs || []).length || !r) {
                  return [3, 9];
                }
                return [4, r()];
              case 8:
                a.sent();
                a.label = 9;
              case 9:
                _ = s.length === d;
                if (n != null) {
                  n(_, s);
                }
                if (this.config.isNeedWatchCollab && this._finalAckStructureVersion) {
                  this._collab.sync.sendHeartbeatsIfNeeded(this._finalAckStructureVersion, "offline-sync", 0);
                }
                if (!this.isNewClearerEnable) {
                  return [3, 11];
                }
                return [4, this.removeTimeoutBackupData(this.uselessBackup)];
              case 10:
                a.sent();
                a.label = 11;
              case 11:
                this._log(H.END, {
                  completeTaskSize: s.length,
                  allSuccess: _,
                  completeBackupIDs: s,
                  allBackupIDs: l,
                  emptyBackupIDs: y
                });
                this.sendMessageToOtherTab(this._backupIDMap);
                if (!this.config.isNeedWatchCollab) {
                  return [3, 13];
                }
                return [4, this._setBackupIDMap(this._backupIDMap)];
              case 12:
                a.sent();
                this._log(H.PROCESS, {
                  action: "final_set_id_map",
                  data: tS({}, this._backupIDMap)
                });
                a.label = 13;
              case 13:
                this._updateIsNeedSync(true);
                this.isRestoreComplete = true;
                return [3, 16];
              case 14:
                m = a.sent();
                this._error("restore error", m);
                return [3, 16];
              case 15:
                this.offlineStageStatus.end();
                if (o != null) {
                  o(s, this.lastBackupStatus, this.offlineStageStatus);
                }
                return [7];
              case 16:
                return [2];
            }
          });
        });
      };
      this._updateIsNeedSync = function (t = false) {
        var e;
        var n;
        var i = r._isCurrentNeedSync || !!r.getRestorableIDs().length;
        if (t || i !== r._isNeedSync) {
          if ((n = (e = r.config).onSyncStatusChanged) !== null && n !== undefined) {
            n.call(e, i);
          }
          r._isNeedSync = i;
        }
      };
      this._bindEvents = function (t) {
        if (t === "on") {
          if (r.config.isNeedWatchCollab) {
            r._collab.on(U.CollabDataChange, r.handleDataChange);
            r._eventsOffQueue.push(function () {
              r._collab.off(U.CollabDataChange, r.handleDataChange);
            });
          }
          if (r._getMultiTabMessenger) {
            r._getMultiTabMessenger().onHandleReceiveMessage(r.handleReceiveMessage);
            r._eventsOffQueue.push(function () {
              var t;
              if ((t = r._getMultiTabMessenger) !== null && t !== undefined) {
                t.call(r).offHandleReceiveMessage(r.handleReceiveMessage);
              }
            });
          }
        } else {
          r._eventsOffQueue.forEach(function (t) {
            return t();
          });
        }
      };
      this.handleDataChange = function (t) {
        return tT(r, undefined, undefined, function () {
          var e;
          var n;
          var r;
          var i;
          var o;
          var s;
          var a;
          return tI(this, function (u) {
            switch (u.label) {
              case 0:
                u.trys.push([0, 8, 9, 10]);
                e = this._getStorage();
                n = t.type;
                r = t.data;
                i = t.transactionFrames;
                o = this._genDataKey(n, this._id);
                s = this.hasChange(r);
                this._isCurrentNeedSync = s || n !== z.SUBMITTED;
                if (s) {
                  return [3, 4];
                }
                return [4, e.removeItem(o)];
              case 1:
                u.sent();
                this._log(H.DATA_CHANGE, {
                  action: "remove_empty_" + n,
                  data: {
                    backupID: this._id,
                    type: n,
                    uuid: r.uuid
                  }
                });
                if (n !== z.SUBMITTED) {
                  return [3, 3];
                }
                return [4, this._setOfflineYData()];
              case 2:
                u.sent();
                u.label = 3;
              case 3:
                return [3, 7];
              case 4:
                return [4, this.checkAndUpdateBackupID()];
              case 5:
                u.sent();
                this.lastCheckBackupidTimestamp = Date.now();
                return [4, this.assembleAndSetOfflineData(n, r, i)];
              case 6:
                u.sent();
                u.label = 7;
              case 7:
                return [3, 10];
              case 8:
                a = u.sent();
                this._error("save backup data error", a);
                return [3, 10];
              case 9:
                this._updateIsNeedSync();
                return [7];
              case 10:
                return [2];
            }
          });
        });
      };
      this._log = function (t, e) {
        em(t, e);
        return r._logger.log(t, e);
      };
      this.handleReceiveMessage = function (t) {
        return tT(r, undefined, undefined, function () {
          var e;
          var n;
          return tI(this, function (r) {
            switch (r.label) {
              case 0:
                e = (n = this._getMultiTabMessenger) === null || n === undefined ? undefined : n.call(this).getMessageFromEvent(this._messageKey, t);
                if (!this._isInMultiTab) {
                  this._log(H.PROCESS, {
                    action: "multi_tap_message",
                    data: {
                      id: this._id
                    }
                  });
                  this._isInMultiTab = true;
                }
                return [4, this.updateBackupIDMapIfNeed(e)];
              case 1:
                r.sent();
                return [2];
            }
          });
        });
      };
      this.checkAndUpdateBackupID = function () {
        return tT(r, undefined, undefined, function () {
          var t;
          var e;
          return tI(this, function (n) {
            switch (n.label) {
              case 0:
                if (!this.isNewClearerEnable || !this.isRestoreComplete || Date.now() - this.lastCheckBackupidTimestamp < this.checkBackupidInterval) {
                  return [2];
                }
                n.label = 1;
              case 1:
                n.trys.push([1, 4,, 5]);
                this.lastCheckBackupidTimestamp = Date.now();
                return [4, this._getStorage().getItem(this._backupIDMapKey)];
              case 2:
                if (!(t = n.sent())) {
                  throw Error("checkAndUpdateBackupID but backupIDMap is undefined");
                }
                return [4, this.updateBackupIDMapIfNeed(t)];
              case 3:
                if (n.sent()) {
                  this._log(H.PROCESS, {
                    action: "supplement_backup_id",
                    data: {
                      backupIDMap: t,
                      status: t[this._id]
                    }
                  });
                }
                return [3, 5];
              case 4:
                e = n.sent();
                this._error("supplement backup id error", e);
                return [3, 5];
              case 5:
                return [2];
            }
          });
        });
      };
      this.updateBackupIDMapIfNeed = function (t) {
        return tT(r, undefined, undefined, function () {
          return tI(this, function (e) {
            switch (e.label) {
              case 0:
                if (!t) {
                  return [2, false];
                }
                if (t[this._id] !== V.SUCCESS && t[this._id] !== V.EMPTY && t[this._id] !== undefined) {
                  return [3, 2];
                }
                return [4, this._updateBackupIDMap(this._id, t)];
              case 1:
                e.sent();
                return [2, true];
              case 2:
                if (t[this._id] > 0) {
                  return [2, false];
                }
                this.errorState = true;
                this._error("Backup cannot be updated", "The current status is " + t[this._id]);
                return [2, false];
            }
          });
        });
      };
      this.updateLastBackupID = function () {
        return tT(r, undefined, undefined, function () {
          var e;
          var r;
          return tI(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, (e = this._getStorage()).getItem(t.LastEditBackupIDKey)];
              case 1:
                if (i.sent()?.key === this._id) {
                  return [3, 3];
                }
                return [4, e.setItem(t.LastEditBackupIDKey, {
                  key: this._id
                })];
              case 2:
                i.sent();
                if ((r = this.handleUpdateLastBackupID) !== null && r !== undefined) {
                  r.call(this);
                }
                i.label = 3;
              case 3:
                return [2];
            }
          });
        });
      };
      this.getXYByBackupID = function (t) {
        return function (t, e, n) {
          return tT(this, undefined, undefined, function () {
            var r;
            var i;
            var o;
            return tI(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, Promise.all([t.getItem(e), t.getItem(n)])];
                case 1:
                  i = (r = tC.apply(undefined, [s.sent(), 2]))[0];
                  o = r[1];
                  if (!i && !o) {
                    return [2, null];
                  }
                  if (!!i || !o) {
                    return [3, 3];
                  }
                  o.type = z.SUBMITTED;
                  return [4, Promise.all([t.removeItem(n), t.setItem(e, o)])];
                case 2:
                  s.sent();
                  return [2, {
                    submittedData: o
                  }];
                case 3:
                  if (i && !o) {
                    return [2, {
                      submittedData: i
                    }];
                  }
                  return [2, {
                    submittedData: i,
                    unSubmittedData: o
                  }];
              }
            });
          });
        }(r._getStorage(), r._genDataKey(z.SUBMITTED, t), r._genDataKey(z.UN_SUBMITTED, t));
      };
      this.getXYByBackupIDs = function (t) {
        var e;
        e = t.map(function (t) {
          return r.getXYByBackupID(t);
        });
        if (typeof Promise.allSettled == "function") {
          return Promise.allSettled(e);
        } else {
          return Promise.all(e.map(function (t) {
            return t.then(function (t) {
              return {
                status: "fulfilled",
                value: t
              };
            }).catch(function (t) {
              return {
                status: "rejected",
                reason: t
              };
            });
          }));
        }
      };
      this._checkConfig();
      this._isApplyEnd = !n.isNeedApply;
    }
    t.newDateKey = function (t, e, n) {
      return t + ":" + e + ":" + n;
    };
    t.newBackupIDMapKey = function (t) {
      return "changemap:" + t;
    };
    Object.defineProperty(t.prototype, "backupId", {
      get: function () {
        return this._id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isApplyEnd", {
      get: function () {
        return this._isApplyEnd;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isNeedSync", {
      get: function () {
        return this._isNeedSync;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isErrorState", {
      get: function () {
        return this.errorState;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.init = function () {
      this._logger = this._createLogger();
      this._bindEvents("on");
      this._initialPromise = this.initBackupID();
    };
    t.prototype.initBackupID = function () {
      return tT(this, undefined, undefined, function () {
        var r;
        var i;
        var o;
        var s;
        return tI(this, function (a) {
          switch (a.label) {
            case 0:
              a.trys.push([0, 5,, 6]);
              r = this;
              return [4, this._getStorage().getItem(this._backupIDMapKey)];
            case 1:
              r._backupIDMap = a.sent() || {};
              if (!this.config.isNeedWatchCollab) {
                return [3, 3];
              }
              i = this;
              return [4, this.setNewBackupID(this._backupIDMap)];
            case 2:
              i._backupIDMap = a.sent();
              a.label = 3;
            case 3:
              o = this;
              return [4, this._getStorage().getItem(t.LastEditBackupIDKey)];
            case 4:
              o.lastBackupID = a.sent()?.key ?? "";
              this.offlineStageStatus.collectResult(Z.INIT_BACKUP_ID, q.SUCCESS);
              return [2, this._backupIDMap];
            case 5:
              s = a.sent();
              this.offlineStageStatus.collectResult(Z.INIT_BACKUP_ID, q.ERROR);
              this._error("init backup id error", s);
              throw s;
            case 6:
              return [2];
          }
        });
      });
    };
    t.prototype.destroy = function () {
      this._log(H.PROCESS, {
        action: "destroy",
        isNeedApply: this.config.isNeedApply
      });
      this._bindEvents("off");
    };
    t.prototype.getUniqueIDFromBackupID = function (t) {
      if (t.includes("-")) {
        return t.split(".")[0].replace("-", ".");
      } else {
        return t;
      }
    };
    t.prototype.sendUserChange = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        return tI(this, function (n) {
          switch (n.label) {
            case 0:
              e = t.uuid;
              return [4, this._getRequestInstance().request({
                url: this._requestAPI.USER_CHANGE,
                method: "POST",
                data: tS(tS(tS({}, t), {
                  page_id: this.pageToken,
                  member_id: this._uniqueMemberId,
                  uuid: e
                }), this.config.extraCommitParams)
              }, 0)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    };
    t.prototype.handleRestoreTasks = function (t, e, n = -1) {
      return tT(this, undefined, undefined, function () {
        var r;
        var i;
        var o;
        var s;
        var a;
        var u;
        var c;
        var l;
        var p;
        var h;
        var f;
        var d;
        var v;
        var y = this;
        return tI(this, function (g) {
          switch (g.label) {
            case 0:
              return [4, this.getXYByBackupIDs(t)];
            case 1:
              var _;
              var m;
              var b;
              var E;
              var w;
              var S;
              var T;
              var I;
              var A;
              _ = g.sent();
              m = n;
              b = !!this.config.isNeedApply;
              E = [];
              w = [];
              S = [];
              T = [];
              I = [];
              A = [];
              _.forEach(function (e, n) {
                var r = t[n];
                if (e.status === "rejected") {
                  w.push([e, r]);
                  return;
                }
                if (!e.value) {
                  E.push(r);
                  return;
                }
                if ("isBroken" in e.value) {
                  S.push([e.value, r]);
                  return;
                }
                var i = e.value.submittedData;
                var o = i.baseVersion;
                var s = i.appliedError;
                var a = i.isRestored;
                var u = !s && o === m;
                if (a) {
                  A.push(r);
                  if (b && u) {
                    T.push([e.value, r]);
                  }
                  return;
                }
                if (u) {
                  T.push([e.value, r]);
                  return;
                }
                I.push([e.value, r]);
              });
              i = (r = {
                empty: E,
                rejected: w,
                broken: S,
                canApply: T,
                cannotApply: I,
                restored: A
              }).empty;
              o = r.rejected;
              s = r.broken;
              a = r.canApply;
              u = r.cannotApply;
              c = r.restored;
              this._log(H.PROCESS, {
                action: "categorized_data",
                data: {
                  empty: i,
                  restored: c,
                  rejected: o.map(function (t) {
                    return t[1];
                  }),
                  broken: s.map(function (t) {
                    return t[1];
                  }),
                  canApply: a.map(function (t) {
                    return t[1];
                  }),
                  cannotApply: u.map(function (t) {
                    return t[1];
                  })
                }
              });
              if (a.map(function (t) {
                return t[1];
              }).includes(this.lastBackupID)) {
                this.offlineStageStatus.collectResult(Z.CATEGORIZED_CAN_APPLY, q.SUCCESS);
              } else if (u.map(function (t) {
                return t[1];
              }).includes(this.lastBackupID)) {
                this.offlineStageStatus.collectResult(Z.CATEGORIZED_CAN_APPLY, q.ERROR);
              }
              i.forEach(function (t) {
                return y.markState(t, V.EMPTY);
              });
              l = tM([], tC(i), false);
              if (!this.config.isNeedApply) {
                return [3, 3];
              }
              return [4, this._handleApplyTasks(a, e)];
            case 2:
              h = (p = g.sent()).fulfilled;
              f = p.rejected;
              d = p.unapply;
              u.forEach(function (t) {
                var e = tC(t, 2);
                var r = e[0];
                var i = e[1];
                y._analyzeCannotApply(i, r, n);
              });
              l.push.apply(l, tM([], tC(h), false));
              u.push.apply(u, tM(tM([], tC(f), false), tC(d), false));
              return [3, 4];
            case 3:
              u.push.apply(u, tM([], tC(a), false));
              g.label = 4;
            case 4:
              o.forEach(function (t) {
                var e = tC(t, 2);
                var n = e[0];
                var r = e[1];
                y._error("get backup data error, backupID: " + r, n.reason);
              });
              s.forEach(function (t) {
                var e = tC(t, 2);
                var n = e[0];
                var r = e[1];
                y.markState(r, V.BROKEN);
                y._error("backup data is broken, backupID: " + r, Error(n.reason));
              });
              c.forEach(function (t) {
                y.markState(t, V.SUCCESS);
              });
              return [4, this._defaultRestore(u)];
            case 5:
              v = g.sent();
              return [2, {
                emptyBackupIDs: i,
                completeBackupIDs: dataProcessor.processData(tM(tM(tM([], tC(l), false), tC(v), false), tC(c), false))
              }];
          }
        });
      });
    };
    t.prototype._handleApplyTasks = function (t, e) {
      return tT(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        var s;
        var a;
        var u;
        return tI(this, function (c) {
          switch (c.label) {
            case 0:
              n = [];
              r = [];
              i = [];
              if (t.length) {
                return [3, 2];
              }
              return [4, this._onApplyEnd(e, true)];
            case 1:
              c.sent();
              return [3, 4];
            case 2:
              s = (o = tC(t[0], 2))[0];
              a = o[1];
              u = this._processApply(s, a, e);
              return [4, this._onApplyEnd(e, u, a)];
            case 3:
              c.sent();
              if (u) {
                i.push(a);
              } else {
                n.push([s, a]);
              }
              r.push.apply(r, tM([], tC(t.slice(1)), false));
              c.label = 4;
            case 4:
              return [2, {
                rejected: n,
                fulfilled: i,
                unapply: r
              }];
          }
        });
      });
    };
    t.prototype._onApplyEnd = function (t, e, n) {
      var r;
      return tT(this, undefined, undefined, function () {
        var i;
        return tI(this, function (o) {
          switch (o.label) {
            case 0:
              if (this._isApplyEnd) {
                return [2];
              }
              return [4, this.getLastBackupIsRestored()];
            case 1:
              i = o.sent();
              if ((r = t.onApplyEnd) !== null && r !== undefined) {
                r.call(t, e, n, i);
              }
              this._isApplyEnd = true;
              return [2];
          }
        });
      });
    };
    t.prototype.setNewBackupID = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        var n;
        return tI(this, function (r) {
          switch (r.label) {
            case 0:
              r.trys.push([0, 2,, 3]);
              return [4, this._updateBackupIDMap(this._id, t)];
            case 1:
              e = r.sent();
              this._log(H.PROCESS, {
                action: "set_id_success",
                data: {
                  backupID: this._id,
                  new_map_size: Object.keys(e).length
                }
              });
              t = e;
              return [3, 3];
            case 2:
              n = r.sent();
              this._error("set backup id map error", n);
              return [3, 3];
            case 3:
              return [2, t];
          }
        });
      });
    };
    t.prototype._genDataKey = function (e, n) {
      return t.newDateKey(e, this.token, n);
    };
    Object.defineProperty(t.prototype, "_collab", {
      get: function () {
        if (!this.config.isNeedWatchCollab) {
          throw Error("cannot get collab since config.isNeedWatchCollab is false");
        }
        return this._getCollab();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "_offlineApplyAPI", {
      get: function () {
        if (!this.config.isNeedApply) {
          throw Error("cannot get offlineApplyAPI since config.isNeedApply is false");
        }
        return this._getOfflineApplyAPI();
      },
      enumerable: false,
      configurable: true
    });
    t.prototype._analyzeCannotApply = function (t, e, n = -1) {
      var r = e.submittedData;
      var i = r.appliedError;
      var o = r.baseVersion;
      var s = n < o;
      var a = n > o;
      this._log(H.PROCESS, {
        action: "analyze_cannot_apply",
        data: {
          backupID: t,
          XBaseVersion: o,
          baseVersion: n,
          isBaseLess: s,
          isBaseGreat: a,
          appliedError: i
        }
      });
    };
    t.prototype._checkConfig = function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      var s;
      var a = this.config;
      var u = a.pageToken;
      var c = a.isNeedWatchCollab;
      var l = a.isNeedApply;
      var p = a.requestAPI;
      var h = a.uniqueMemberId;
      var f = a.isNewClearerEnable;
      var d = a.checkBackupidInterval;
      var v = a.isSuspenseRecordType;
      var y = a.handleUpdateLastBackupID;
      var g = a.isGetLastBackupStatusEnable;
      this.pageToken = u;
      this._requestAPI = p;
      this._uniqueMemberId = h;
      this.isNewClearerEnable = f != null && f;
      this.checkBackupidInterval = d ?? 180000;
      this.isSuspenseRecordType = v;
      this.handleUpdateLastBackupID = y;
      this.isGetLastBackupStatusEnable = g != null && g;
      if (c) {
        if (!this._getCollab) {
          throw Error("_getCollab should be implemented while isNeedWatchCollab is " + c);
        }
        if (!this.config.getUniqueID) {
          throw Error("getUniqueID should be implemented while isNeedWatchCollab is " + c);
        }
      }
      if (l && !this._getOfflineApplyAPI) {
        throw Error("_getOfflineApplyAPI should be implemented while isNeedApply is " + l);
      }
      if (this.isNewClearerEnable) {
        this._id = ((r = (n = this.config).getUniqueID) === null || r === undefined ? undefined : r.call(n)) ?? "";
      } else {
        this._id = (t = ((s = (o = this.config).getUniqueID) === null || s === undefined ? undefined : s.call(o)) || "", e = Date.now(), "" + (t = t.replace(".", "-")) + "." + e);
      }
    };
    t.prototype._filterBackupIDMap = function (t) {
      var e = this;
      var n = {};
      var r = this.config;
      var i = r.EXPIRATION_INTERVAL;
      var o = r.MAX_BACKUP_SIZE;
      var s = eg({
        backupIDKeyArr: Object.keys(t),
        expirationInterval: i,
        maxBackupSize: o,
        curBackupID: this._id
      });
      var a = s.validBackupIDs;
      s.invalidBackupIDs.forEach(function (t) {
        e._removeBackupData(t);
      });
      a.forEach(function (e) {
        n[e] = t[e];
      });
      return n;
    };
    t.prototype.sendMessageToOtherTab = function (t) {
      var e;
      try {
        em("sendMessageToOtherTab", tS({}, t));
        if ((e = this._getMultiTabMessenger) !== null && e !== undefined) {
          e.call(this).sendMessageToOtherTab(this._messageKey, t);
        }
      } catch (t) {
        this._error("send cross tab message error", t);
      }
    };
    t.prototype._defaultRestore = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        var n;
        var r;
        var i;
        var o;
        var s;
        var a;
        var u;
        var c;
        var l;
        return tI(this, function (p) {
          switch (p.label) {
            case 0:
              e = [];
              n = throttledOrderByUtil.throttledOrderBy(t, function (t) {
                var r = tC(t, 1)[0];
                return -Math.max(r.submittedData.timestamp, r.unSubmittedData?.timestamp ?? 0);
              }).slice(0, this.config.MAX_BACKUP_SIZE);
              p.label = 1;
            case 1:
              p.trys.push([1, 8, 9, 10]);
              i = (r = tA(n)).next();
              p.label = 2;
            case 2:
              if (i.done) {
                return [3, 7];
              }
              s = (o = tC(i.value, 2))[0];
              a = o[1];
              p.label = 3;
            case 3:
              p.trys.push([3, 5,, 6]);
              return [4, this._processRestore(a, s)];
            case 4:
              p.sent();
              if (a === this.lastBackupID) {
                this.offlineStageStatus.collectResult(Z.OFFLINE_SUBMIT, q.SUCCESS);
              }
              this.markRestored(a, s);
              e.push(a);
              this._log(H.PROCESS, {
                action: "restore_success",
                data: {
                  backupID: a
                }
              });
              return [3, 6];
            case 5:
              u = p.sent();
              this._error("restore backup data error, backupID: " + a, u);
              if (er(u) ? +!en.includes(u.code) : 1) {
                if (!eo(u)) {
                  this._backupIDMap[a] = Number(this._backupIDMap[a]) + 1;
                }
              } else {
                this._backupIDMap[a] = V.BROKEN;
              }
              if (a === this.lastBackupID) {
                this.offlineStageStatus.collectResult(Z.OFFLINE_SUBMIT, q.ERROR);
              }
              return [3, 6];
            case 6:
              i = r.next();
              return [3, 2];
            case 7:
              return [3, 10];
            case 8:
              c = {
                error: p.sent()
              };
              return [3, 10];
            case 9:
              try {
                if (i && !i.done && (l = r.return)) {
                  l.call(r);
                }
              } finally {
                if (c) {
                  throw c.error;
                }
              }
              return [7];
            case 10:
              return [2, e];
          }
        });
      });
    };
    t.prototype._processApply = function (t, e, n) {
      var r = this;
      this._log(H.PROCESS, {
        action: "apply_start",
        data: {
          backupID: e
        }
      });
      var i = false;
      var o = n.beforeApplyChange;
      var s = t.submittedData;
      var a = t.unSubmittedData;
      this._logProcessData(t, e, "apply");
      var u = a ? [s, a] : [s];
      var c = new Set();
      var l = new Set();
      var p = false;
      var h = u.every(function (t) {
        return Object.values(t.change_map).every(function (t) {
          var e;
          var n;
          var i = t.version === 0;
          if (o != null) {
            o(t);
          }
          var s = r._offlineApplyAPI.hasRecord(t.id);
          if (s) {
            var a = r._offlineApplyAPI.getRecord(t.id).snapshot.type;
            if ((n = (e = r.isSuspenseRecordType) === null || e === undefined ? undefined : e.call(r, a)) !== null && n !== undefined && n) {
              l.add(a);
            }
            p = p || r._collab.sync.getVersion({
              id: t.id,
              resourceType: x.record
            }) === t.version;
          }
          if (!s && i) {
            c.add(t.id);
          }
          return s || i;
        });
      });
      em("checkEveryRecord", h);
      this._log(H.PROCESS, {
        action: "apply_need_failed_collect",
        data: {
          backupID: e,
          hasApplySuspenseBlock: l.size !== 0,
          hasApplyVersionDiffBlock: p,
          suspenseBlockType: tM([], tC(l), false)
        }
      });
      if (!h) {
        this._log(H.PROCESS, {
          action: "apply_failed",
          data: {
            backupID: e,
            checkEveryRecord: h
          }
        });
        return false;
      }
      try {
        this._offlineApplyAPI.registerRecords(tM([], tC(c), false).map(function (t) {
          return {
            id: t,
            snapshot: {}
          };
        }));
        this._collab.sync.register(tM([], tC(c), false).map(function (t) {
          return {
            id: t,
            version: 0,
            resourceType: x.record
          };
        }));
        this._log(H.PROCESS, {
          action: "register_local_record",
          data: {
            needCreateRecords: c
          }
        });
        u.forEach(function (t) {
          var e = t.type;
          var n = t.uuid;
          var i = e === z.SUBMITTED ? M.RESUBMIT : M.LOCAL;
          r._offlineApplyAPI.applyTransaction("applyBackupData[" + e + "]", function (e) {
            Object.values(t.change_map).forEach(function (t) {
              var n = t.id;
              var r = t.payload.ops;
              try {
                e.apply(n, r);
              } catch (t) {
                t.message = t.message + ", opsString: " + tB(r);
                throw t;
              }
            });
          }, {
            from: i,
            uuid: n,
            undoable: false,
            source: ed
          });
        });
        i = true;
        u.forEach(function (t) {
          return r._setOfflineData(t.type, t);
        });
        this.markRestored(e, t);
        this._log(H.PROCESS, {
          action: "apply_success",
          data: {
            backupID: e
          }
        });
        if (e === this.lastBackupID) {
          this.offlineStageStatus.collectResult(Z.OFFLINE_APPLY, q.SUCCESS);
        }
      } catch (t) {
        this._error("something went wrong while processing apply", t);
        this._setOfflineData(z.SUBMITTED, tS(tS({}, s), {
          appliedError: true
        }));
        this._setOfflineData(z.SUBMITTED, tS(tS({}, s), {
          appliedError: true
        }), e);
        this._log(H.PROCESS, {
          action: "apply_failed",
          data: {
            backupID: e,
            checkEveryRecord: h
          }
        });
        if (e === this.lastBackupID) {
          this.offlineStageStatus.collectResult(Z.OFFLINE_APPLY, q.ERROR);
        }
      }
      return i;
    };
    t.prototype.removeTimeoutBackupData = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        var n;
        var r;
        var i;
        var o;
        var s;
        var a;
        var u;
        var c;
        var l;
        var p;
        var h;
        var f;
        return tI(this, function (d) {
          switch (d.label) {
            case 0:
              e = [];
              try {
                for (r = (n = tA(Object.entries(t))).next(); !r.done; r = n.next()) {
                  o = (i = tC(r.value, 2))[0];
                  if ((s = i[1]) === V.INVALID) {
                    this._removeBackupData(o);
                    continue;
                  }
                  if (s === V.EMPTY) {
                    if (ey(this._id) - ey(o) > this.config.EXPIRATION_INTERVAL) {
                      this._removeBackupData(o);
                    }
                    continue;
                  }
                  e.push(o);
                }
              } catch (t) {
                l = {
                  error: t
                };
              } finally {
                try {
                  if (r && !r.done && (p = n.return)) {
                    p.call(n);
                  }
                } finally {
                  if (l) {
                    throw l.error;
                  }
                }
              }
              return [4, this.getXYByBackupIDs(e)];
            case 1:
              a = ev(d.sent(), e, ey(this._id) - this.config.EXPIRATION_INTERVAL);
              try {
                for (c = (u = tA(a)).next(); !c.done; c = u.next()) {
                  o = c.value;
                  this._removeBackupData(o);
                }
              } catch (t) {
                h = {
                  error: t
                };
              } finally {
                try {
                  if (c && !c.done && (f = u.return)) {
                    f.call(u);
                  }
                } finally {
                  if (h) {
                    throw h.error;
                  }
                }
              }
              return [2];
          }
        });
      });
    };
    t.prototype._removeBackupData = function (t) {
      return tT(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        return tI(this, function (o) {
          switch (o.label) {
            case 0:
              o.trys.push([0, 3,, 4]);
              this._log(H.PROCESS, {
                action: "remove_expired_backup",
                data: {
                  willBeRemoved: t,
                  status: this._backupIDMap?.[t]
                }
              });
              if (this._backupIDMap) {
                Reflect.deleteProperty(this._backupIDMap, t);
              }
              n = this._getStorage();
              r = this._genDataKey(z.SUBMITTED, t);
              i = this._genDataKey(z.UN_SUBMITTED, t);
              return [4, n.removeItem(r)];
            case 1:
              o.sent();
              return [4, n.removeItem(i)];
            case 2:
            case 3:
              o.sent();
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
    };
    t.prototype.markRestored = function (t, e) {
      return tT(this, undefined, undefined, function () {
        var n;
        return tI(this, function (r) {
          switch (r.label) {
            case 0:
              if (!this._backupIDMap) {
                return [2];
              }
              this.markState(t, V.SUCCESS);
              if (!e || !!this.config.isNeedWatchCollab) {
                return [3, 2];
              }
              (n = e.submittedData).isRestored = true;
              return [4, this._getStorage().setItem(this._genDataKey(z.SUBMITTED, t), n)];
            case 1:
              r.sent();
              r.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.prototype.markState = function (t, e) {
      if (this._backupIDMap) {
        this._backupIDMap[t] = e;
        this._log(H.PROCESS, {
          action: "mark_state",
          data: {
            backupID: t,
            state: e
          }
        });
      }
    };
    t.prototype._error = function (t, e) {
      if (e instanceof Error) {
        (n = Error(e.message)).stack = e.stack;
      } else {
        n = Error("backup unknown error " + e);
      }
      n.message = "[BackupModule]" + t + ": " + n.message;
      var n;
      var r = {
        msg: n.message,
        code: (e == null ? undefined : e.code) || null,
        ttLogId: (e == null ? undefined : e.ttLogId) || "",
        detail: (e == null ? undefined : e.detail) || ""
      };
      em("ERROR", r);
      this._logger.log(H.ERROR, r);
      this._logger.logError(n);
    };
    t.prototype._updateBackupIDMap = function (t, e) {
      return tT(this, undefined, undefined, function () {
        var n;
        var r;
        return tI(this, function (i) {
          switch (i.label) {
            case 0:
              n = tS(tS({}, e), ((r = {})[t] = 1, r));
              return [4, this._setBackupIDMap(n)];
            case 1:
              i.sent();
              this._backupIDMap = n;
              this._log(H.PROCESS, {
                action: "updated_id_map",
                data: tS({}, n)
              });
              this.sendMessageToOtherTab(n);
              return [2, n];
          }
        });
      });
    };
    t.prototype._setOfflineData = function (t, e, n = this._id) {
      return tT(this, undefined, undefined, function () {
        return tI(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, this._getStorage().setItem(this._genDataKey(t, n), tS({
                backup_id: n
              }, e))];
            case 1:
              r.sent();
              if (n !== this._id) {
                return [3, 3];
              }
              return [4, this.updateLastBackupID()];
            case 2:
              r.sent();
              r.label = 3;
            case 3:
              return [2];
          }
        });
      });
    };
    t.prototype._setBackupIDMap = function (t) {
      return tT(this, undefined, undefined, function () {
        return tI(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this._getStorage().setItem(this._backupIDMapKey, tS({}, t))];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    };
    t.prototype._processRestore = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      return tT(this, undefined, undefined, function () {
        var s;
        var a;
        var u;
        var c;
        var l;
        var p;
        var h;
        return tI(this, function (f) {
          switch (f.label) {
            case 0:
              s = e.submittedData;
              a = e.unSubmittedData;
              this._logProcessData(e, t, "restore");
              u = tS(tS({}, s), {
                backup_id: t
              });
              if (a && Object.keys(a.change_map || {}).length) {
                c = Object.entries(a.change_map).reduce(function (t, e) {
                  var n = tC(e, 2);
                  var r = n[0];
                  var i = n[1];
                  var o = i.version;
                  var s = i.payload;
                  t[r] = {
                    id: r,
                    version: o,
                    payload: s
                  };
                  return t;
                }, {});
                u.y = c;
              }
              return [4, this._sendUserChange(u)];
            case 1:
              l = f.sent().data;
              this._finalAckStructureVersion = l.structure_version;
              if ((r = (n = this.config).onDataSubmitted) !== null && r !== undefined) {
                r.call(n, t, s, l);
              }
              this._log(H.PROCESS, {
                action: "ack_submitted_data",
                data: {
                  backupID: t,
                  timeGap: Date.now() - s.timestamp
                }
              });
              if (!a) {
                return [2];
              }
              return [4, this._getTransformedLocalData(a, s, l)];
            case 2:
              if (!(p = f.sent())) {
                return [2];
              }
              return [4, this._sendUserChange(tS(tS({}, p), {
                backup_id: t
              }))];
            case 3:
              h = f.sent().data;
              this._finalAckStructureVersion = h.structure_version;
              if ((o = (i = this.config).onDataSubmitted) !== null && o !== undefined) {
                o.call(i, t, p, h);
              }
              this._log(H.PROCESS, {
                action: "ack_un_submitted_data",
                data: {
                  backupID: t
                }
              });
              return [2];
          }
        });
      });
    };
    t.prototype._logProcessData = function (t, e, n) {
      var i = t.submittedData;
      var o = t.unSubmittedData;
      var s = {
        submitted: tN(i.change_map),
        submittedUuid: i.uuid,
        unSubmitted: o ? tN(o.change_map) : null,
        unSubmittedUuid: o ? o.uuid : null
      };
      this._log(H.PROCESS, {
        action: "process_" + n + "_data",
        data: {
          backupID: e,
          data: s,
          timeGap: Date.now() - i.timestamp,
          status: this._backupIDMap?.[e]
        }
      });
    };
    t.prototype._getTransformedLocalData = function (t, e, n) {
      return tT(this, undefined, undefined, function () {
        var r;
        var i;
        var o;
        var s = this;
        return tI(this, function (a) {
          switch (a.label) {
            case 0:
              t = deepCloneWrapper_1.deepClone(t);
              e = deepCloneWrapper_1.deepClone(e);
              r = n.block_map;
              if (!(o = (i = Object.values(t.change_map).filter(function (t) {
                return !!e.change_map[t.id];
              })).filter(function (t) {
                var e = t.id;
                var n = t.version;
                var i = n + 1;
                var o = r[e].version;
                if (n === o || i === o) {
                  return false;
                }
                if (i < o) {
                  return true;
                }
                throw Error("validate submitted data version failed, server version is not great than local version:\n      id: " + e + "; server version: " + o + "; local version: " + n);
              }).map(function (t) {
                var e = t.id;
                return {
                  id: e,
                  from_ver: t.version + 1,
                  to_ver: r[e].version
                };
              })).length) {
                return [3, 2];
              }
              return [4, this._getRequestInstance().request({
                url: this._requestAPI.NEW_CHANGES,
                method: "POST",
                data: {
                  page_id: this.pageToken,
                  params: o
                }
              })];
            case 1:
              Object.values(a.sent().data.op_map).forEach(function (n) {
                n.forEach(function (n) {
                  var r = n.id;
                  var i = n.ops || [];
                  var o = e.change_map[r];
                  var a = o.payload.ops;
                  var u = s._tryTransform(i, a, operationalTransformCore.TransformDirection.RIGHT);
                  var c = s._tryTransform(a, i, operationalTransformCore.TransformDirection.LEFT);
                  if ((c == null ? undefined : c.length) > 0) {
                    o.payload.ops = c;
                  } else {
                    o.payload.ops = [];
                  }
                  o.version += 1;
                  var l = t.change_map[r];
                  var p = l.payload.ops;
                  var h = s._tryTransform(p, u, operationalTransformCore.TransformDirection.LEFT);
                  if ((h == null ? undefined : h.length) > 0) {
                    l.payload.ops = h;
                  } else {
                    l.payload.ops = [];
                  }
                  l.version += 1;
                });
              });
              a.label = 2;
            case 2:
              Object.values(t.change_map).forEach(function (e) {
                var n = e.id;
                if (e.payload.ops.length === 0) {
                  delete t.change_map[n];
                }
              });
              i.forEach(function (e) {
                var n = e.id;
                t.change_map[n].version = r[n].version;
              });
              if (Object.keys(t.change_map).length) {
                return [2, t];
              }
              return [2, null];
          }
        });
      });
    };
    t.prototype._tryTransform = function (t, e, n) {
      try {
        return operationalTransformCore.transform(t, e, n);
      } catch (t) {
        t.code = A.TRANSFORM_Y_FAILED;
        t.detail = "transform Y failed";
        throw t;
      }
    };
    t.prototype._sendUserChange = function (t) {
      return tT(this, undefined, undefined, function () {
        var e;
        return tI(this, function (n) {
          e = t.uuid;
          this._log(H.PROCESS, {
            action: "send_userchange",
            data: {
              backupID: t.backup_id,
              uuid: e,
              versionMap: tN(t.change_map),
              hasY: !!t.y
            }
          });
          return [2, this.sendUserChange(t)];
        });
      });
    };
    t.prototype._setOfflineYData = function () {
      return tT(this, undefined, undefined, function () {
        var t;
        return tI(this, function (e) {
          switch (e.label) {
            case 0:
              t = this._collab.assemRecordOps(z.UN_SUBMITTED);
              if (!this.hasChange(t)) {
                return [2];
              }
              return [4, this.assembleAndSetOfflineData(z.UN_SUBMITTED, t)];
            case 1:
              e.sent();
              return [2];
          }
        });
      });
    };
    t.prototype.hasChange = function (t) {
      return !!Object.keys(t.change_map || {}).length;
    };
    t.prototype.assembleAndSetOfflineData = function (t, e, n) {
      return tT(this, undefined, undefined, function () {
        var r;
        var i;
        var o;
        return tI(this, function (s) {
          switch (s.label) {
            case 0:
              r = this._collab.getSyncVersion();
              i = this._collab.sync.isErrorState;
              o = tS({
                baseVersion: r,
                type: t,
                timestamp: Date.now(),
                appliedError: i
              }, e);
              return [4, this._setOfflineData(t, o)];
            case 1:
              s.sent();
              this._log(H.DATA_CHANGE, {
                action: "store_" + t + "_success",
                data: {
                  backupID: this._id,
                  type: t,
                  versionMap: tN(e.change_map),
                  uuid: e.uuid,
                  appliedError: i,
                  baseVersion: r,
                  transactionFrames: n
                }
              });
              return [2];
          }
        });
      });
    };
    t.LastEditBackupIDKey = "LAST_EDIT_BACKUP";
    return t;
  }();
  (w = W ||= {}).visible = "visible";
  w.hidden = "hidden";
  var eE = function () {
    function t(t) {
      this.options = t;
      this.isDestroyed = false;
    }
    t.prototype.setup = function () {
      return this;
    };
    t.prototype.start = function () {};
    t.prototype.stop = function () {};
    t.prototype.destroy = function () {
      this.isDestroyed = true;
    };
    return t;
  }();
  var ew = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    tw(e, t);
    e.prototype.setup = function () {
      this._handleFocus = this._handleFocus.bind(this);
      window.addEventListener("focus", this._handleFocus);
      return this;
    };
    e.prototype.destroy = function () {
      t.prototype.destroy.call(this);
      window.removeEventListener("focus", this._handleFocus);
    };
    e.prototype._handleFocus = function () {
      var t = this;
      if (document.visibilityState === W.hidden) {
        setTimeout(function () {
          t._onFocus();
        }, 0);
      }
    };
    e.prototype._onFocus = function () {
      if (!this.isDestroyed && document.visibilityState === W.hidden) {
        this.options.report("focus_trigger_catch", {
          desc: "document.visibilityState is hidden when window focus"
        }, true);
        this.options.onEnterActive();
        this.options.switchToActiveMode();
      }
    };
    return e;
  }(eE);
  var eS = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.timePointOfInactive = null;
      return e;
    }
    tw(e, t);
    Object.defineProperty(e.prototype, "isInactive", {
      get: function () {
        return document.visibilityState === W.hidden;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "inactiveTime", {
      get: function () {
        if (this.timePointOfInactive) {
          return new Date().getTime() - this.timePointOfInactive;
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setup = function () {
      var t;
      this.unbindVisibilityChange = (t = this._handleVisibilityChange.bind(this), document.addEventListener("visibilitychange", t), function () {
        document.removeEventListener("visibilitychange", t);
      });
      return this;
    };
    e.prototype.destroy = function () {
      var e;
      t.prototype.destroy.call(this);
      if ((e = this.unbindVisibilityChange) !== null && e !== undefined) {
        e.call(this);
      }
    };
    e.prototype._handleVisibilityChange = function () {
      if (this.isInactive) {
        this._enterInactive();
      } else {
        this._enterActive();
      }
    };
    e.prototype._enterInactive = function () {
      this.timePointOfInactive = new Date().getTime();
      this.options.onEnterInactive();
      this._clearSwitchToActiveTimer();
      this._addSwitchToInactiveTimer();
    };
    e.prototype._enterActive = function () {
      var t = this.inactiveTime;
      this.timePointOfInactive = null;
      this.options.onEnterActive();
      this._clearSwitchToInactiveTimer();
      this._addSwitchToActiveTimer(t);
    };
    e.prototype._addSwitchToInactiveTimer = function () {
      var t = this;
      if (this._switchToInactiveTimer) {
        window.clearTimeout(this._switchToInactiveTimer);
      }
      this._switchToInactiveTimer = window.setTimeout(function () {
        if (!t.isDestroyed) {
          t.options.switchToInactiveMode();
        }
      }, this.options.startTimeGapSinceInActive);
    };
    e.prototype._clearSwitchToInactiveTimer = function () {
      window.clearTimeout(this._switchToInactiveTimer);
      this._switchToInactiveTimer = undefined;
    };
    e.prototype._addSwitchToActiveTimer = function (t) {
      var e = this;
      if (this._switchToActiveTimer) {
        window.clearTimeout(this._switchToActiveTimer);
      }
      var n = new Date().getTime();
      this._switchToActiveTimer = window.setTimeout(function () {
        var r = new Date().getTime() - n;
        if (!e.isDestroyed) {
          e.options.switchToActiveMode(false, {
            inactiveTime: t === null ? -1 : t,
            delayTime: r
          });
        }
      }, 0);
    };
    e.prototype._clearSwitchToActiveTimer = function () {
      window.clearTimeout(this._switchToActiveTimer);
      this._switchToActiveTimer = undefined;
    };
    return e;
  }(eE);
  var eT = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.setConsumeIntervalOnActive = function (t) {
        e.consumeIntervalOnActive = t;
      };
      return e;
    }
    tw(e, t);
    e.prototype.start = function () {
      this._addTimer();
    };
    e.prototype.stop = function () {
      this._clearTimer();
    };
    e.prototype.destroy = function () {
      this._clearTimer();
    };
    e.prototype._addTimer = function () {
      var t = this;
      if (this._timer) {
        window.clearTimeout(this._timer);
      }
      this._timer = window.setTimeout(function () {
        t.options.consume();
        t._addTimer();
      }, this.consumeIntervalOnActive || this.options.consumeIntervalOnActive);
    };
    e.prototype._clearTimer = function () {
      window.clearTimeout(this._timer);
      this._timer = undefined;
    };
    return e;
  }(eE);
  var eI = "sync_buffer";
  (S = G ||= {}).ALWAYS = "always";
  S.ONCE = "once";
  (T = Y ||= {}).SILENT = "SILENT";
  T.ACTIVE = "ACTIVE";
  T.INACTIVE = "INACTIVE";
  var eA = function () {
    function t() {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      this.loggable = false;
      this.prefix = "[" + t.join("][") + "]:";
      var n = t[0];
      var r = window && window.localStorage && window.localStorage.debug;
      if (n && r && r.indexOf(n) > -1) {
        this.enable();
      }
    }
    t.prototype.log = function (t, e) {
      this.loggable;
    };
    t.prototype.enable = function () {
      this.loggable = true;
    };
    t.prototype.disable = function () {
      this.loggable = false;
    };
    return t;
  }();
  var eC = {
    logger: function () {},
    isActiveModeEnabled: false,
    checkIfEnable: function () {
      return true;
    },
    triggers: [eS, ew, eT],
    composeMode: G.ALWAYS,
    startTimeGapSinceInActive: 60000,
    consumeIntervalOnActive: 1000,
    composeBuffer: function () {
      return null;
    },
    clearBufferPool: function () {},
    onEnterActive: function () {},
    onEnterInactive: function () {},
    onSwitchToActiveMode: function () {},
    onConsumeDone: function () {}
  };
  var eM = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    tw(e, t);
    e.prototype.push = function (t) {
      this._push(t);
    };
    e.prototype._push = function (t) {
      this.alwaysComposeBuffer(t);
      this.bufferPool.push(t);
    };
    return e;
  }(function () {
    function t(t) {
      var e = this;
      this.consumeCount = 0;
      this.runningMode = Y.SILENT;
      this.bufferPool = [];
      this.composedResult = undefined;
      this.defaultLogger = new eA(eI);
      this.triggers = [];
      this.isFreezing = false;
      this.consumingSet = new Set();
      this.frozen = function () {
        e._report("frozen", {}, false);
        e.isFreezing = true;
      };
      this.deFrozen = function () {
        e._report("deFrozen", {}, false);
        e.isFreezing = false;
      };
      this.pipe = function (t) {
        e._report("pipe", t, false);
        if (e.isSilentMode) {
          if (e.bufferPool.length) {
            e.consume();
          }
          e.options.handleMessage([t]);
          return;
        }
        return e.push(t);
      };
      this.consume = function (t, n = false) {
        if ((!!n || !e.isFreezing && !e.isSilentMode) && !e.consumingSet.has(t || e.consumeCount) && e.bufferPool.length) {
          e.consumeCount++;
          e.consumingSet.add(t || e.consumeCount);
          e._report("consume_start", {
            bufferPoolLength: e.bufferPool.length,
            uuidList: e.bufferPool.map(function (t) {
              return t.uuid;
            }).filter(Boolean),
            runningMode: e.runningMode,
            consumeCount: e.consumeCount,
            consumeSet: Array.from(e.consumingSet),
            force: n
          });
          if (e.options.composeMode === G.ONCE) {
            e.composeBuffer(e.bufferPool);
          }
          if (e.runningMode === Y.ACTIVE) {
            e.options.handleMessageOnActive(t || "");
          } else {
            e.options.handleMessageOnReActive(t || "");
          }
          if (t) {
            e.options.clearBufferPool(t);
          } else {
            e._clearBufferPool();
          }
          e.options.onConsumeDone(t);
          e._report("consume_done", {
            bufferPoolLength: e.bufferPool.length
          });
          e.consumingSet.delete(t || e.consumeCount);
        }
      };
      this.setConsumeIntervalOnActive = function (t) {
        e.options.consumeIntervalOnActive = t || eC.consumeIntervalOnActive;
        if (e.consumeTrigger?.setConsumeIntervalOnActive) {
          e.consumeTrigger.setConsumeIntervalOnActive(e.options.consumeIntervalOnActive);
        }
      };
      this.onEnterInactive = function () {
        e._report("enter_inactive", {});
        e.options.onEnterInactive();
      };
      this.onEnterActive = function () {
        e._report("enter_active", {});
        e.options.onEnterActive();
      };
      this.switchToInactiveMode = function () {
        e._report("switchToInactiveMode", {}, false);
        if (e.options.isActiveModeEnabled) {
          e.stopConsumeInterval();
        }
        e.runningMode = Y.INACTIVE;
      };
      this.switchToActiveMode = function (t = false, n) {
        var r = tS(tS({}, n), {
          runningMode: e.runningMode
        });
        if (!e.isSilentMode) {
          e.consume();
        }
        if (t) {
          e._report("switchToActiveMode:initial", {}, false);
        } else if (e.options.isActiveModeEnabled) {
          e._report("switchToActiveMode->active", {
            context: r
          }, false);
        } else {
          e._report("switchToActiveMode->silent", {
            context: r
          }, false);
        }
        if (!t) {
          e.options.onSwitchToActiveMode(r);
        }
        if (e.options.isActiveModeEnabled) {
          e.startConsumeInterval();
          e.runningMode = Y.ACTIVE;
        } else {
          e.runningMode = Y.SILENT;
        }
      };
      this._report = function (t, n, r = true) {
        Object.assign(n, {
          className: e.constructor.name
        });
        if (r && e.options.logger) {
          e.options.logger(eI + "_" + t + "_dev", tS({}, n));
        }
        e.defaultLogger.log(t, n);
      };
      this.options = tS(tS({}, eC), t);
      if (this.isEnabled) {
        this.setup();
        this.switchToActiveMode(true);
      }
    }
    Object.defineProperty(t.prototype, "isSilentMode", {
      get: function () {
        return this.runningMode === Y.SILENT;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isEnabled", {
      get: function () {
        return this.options.checkIfEnable();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isFrozen", {
      get: function () {
        return this.isFreezing;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "lastMessageOfPool", {
      get: function () {
        return this.bufferPool[this.bufferPool.length - 1];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "consumeTrigger", {
      get: function () {
        return this.triggers.filter(function (t) {
          return t.constructor === eT;
        })[0];
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.destroy = function () {
      this._report("destroy", {}, false);
      this.reset();
      this.triggers.forEach(function (t) {
        t.destroy();
      });
    };
    t.prototype.reset = function () {
      this._clearState();
      this._clearBufferPool();
    };
    t.prototype.startConsumeInterval = function () {
      this._report("start_consume_interval", {
        isConsumeTriggerEnable: !!this.consumeTrigger
      }, false);
      if (this.consumeTrigger) {
        this.consumeTrigger.start();
      }
    };
    t.prototype.stopConsumeInterval = function () {
      this._report("stop_consume_interval", {
        isConsumeTriggerEnable: !!this.consumeTrigger
      });
      if (this.consumeTrigger) {
        this.consumeTrigger.stop();
      }
    };
    t.prototype.alwaysComposeBuffer = function (t) {
      if (this.options.composeMode === G.ALWAYS) {
        this.composedResult = this.composeBuffer([t], this.composedResult);
      }
    };
    t.prototype._clearBufferPool = function () {
      this.bufferPool = [];
      this.composedResult = undefined;
    };
    t.prototype.setup = function () {
      var t = this;
      this.triggers = this.options.triggers.map(function (e) {
        var n = tC(arrayIsArrayUtil.isArray(e) ? e : [e, null], 2);
        var r = n[0];
        var i = n[1];
        var o = new r({
          consumeIntervalOnActive: t.options.consumeIntervalOnActive,
          startTimeGapSinceInActive: t.options.startTimeGapSinceInActive,
          onEnterInactive: t.onEnterInactive,
          onEnterActive: t.onEnterActive,
          switchToInactiveMode: t.switchToInactiveMode,
          switchToActiveMode: t.switchToActiveMode,
          consume: t.consume,
          report: t._report,
          extra: i
        });
        o.setup();
        return o;
      });
    };
    t.prototype.composeBuffer = function (t, e) {
      var n = this.options.composeBuffer(t, e);
      this.composedResult = n;
      return n;
    };
    t.prototype._clearState = function () {
      this.runningMode = Y.SILENT;
      this.consumeCount = 0;
      this.consumingSet.clear();
    };
    return t;
  }());
  function ek(t, e) {
    return new eM((e === undefined && (e = {
      isFullPipe: false
    }), e == null ? undefined : e.isFullPipe) ? tS({}, t) : t);
  }
  function eO(t) {
    var e = t.mergeMode;
    var n = t.undoable;
    var r = t.operations;
    var i = r.map(function (t) {
      return "[" + tD(t.id) + "]" + tB(t.ops);
    }).join(" | ");
    if (i.length > 10000) {
      i = "opsString too large, operations length is " + r.length + ".";
    }
    return "mergeMode: " + e + ", undoable: " + n + ", ops: " + i;
  }
  (I = K ||= {}).undo = "UNDO";
  I.redo = "REDO";
  var eR = function () {
    function t() {
      this.undoStack = [];
      this.redoStack = [];
      this._logger = new tF("UndoModule", "DOCX");
    }
    t.prototype.init = function (t) {
      var e = t.logger;
      var n = t.enableMergeOverTransformBase;
      var r = t.mergeGap;
      this.enableMergeOverTransformBase = n;
      this._logger = e || new tF("FlowCollab");
      this.mergeGap = r ?? 700;
    };
    Object.defineProperty(t.prototype, "canUndo", {
      get: function () {
        return this.undoStack.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "canRedo", {
      get: function () {
        return this.redoStack.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getUndoStackTop = function (t = this._getStackTopFactory(K.undo)) {
      return t();
    };
    t.prototype.getRedoStackTop = function (t = this._getStackTopFactory(K.redo)) {
      return t();
    };
    t.prototype.clearUndoStack = function () {
      this.undoStack = [];
    };
    t.prototype.clearRedoStack = function () {
      this.redoStack = [];
    };
    t.prototype.undo = function (t = this._performUndoFactory(K.undo)) {
      return t();
    };
    t.prototype.redo = function (t = this._performUndoFactory(K.redo)) {
      return t();
    };
    t.prototype.do = function (t) {
      this._pushUndoStack(t);
      this.clearRedoStack();
    };
    t.prototype.destroy = function () {
      this.undoStack = [];
      this.redoStack = [];
    };
    t.prototype._getInverseUndoEventType = function (t) {
      if (t === K.undo) {
        return K.redo;
      } else {
        return K.undo;
      }
    };
    t.prototype._getStack = function (t) {
      if (t === K.undo) {
        return this.undoStack;
      } else {
        return this.redoStack;
      }
    };
    t.prototype._setStack = function (t, e) {
      if (t === K.undo) {
        this.undoStack = e;
      } else {
        this.redoStack = e;
      }
    };
    t.prototype._popStackFactory = function (t) {
      var e = this._getStack(t);
      return function () {
        if (e && e.length !== 0) {
          return e.pop();
        } else {
          return null;
        }
      };
    };
    t.prototype._popUndoStack = function (t = this._popStackFactory(K.undo)) {
      return t();
    };
    t.prototype._pushStackFactory = function (t) {
      var e = this._getStack(t);
      return function (t) {
        e.push(t);
      };
    };
    t.prototype._pushUndoStack = function (t, e = this._pushStackFactory(K.undo)) {
      return e(t);
    };
    t.prototype._getStackTopFactory = function (t) {
      var e = this._getStack(t);
      return function () {
        var t = e.length;
        if (t === 0) {
          return null;
        } else {
          return e[t - 1];
        }
      };
    };
    t.prototype._performUndoFactory = function (t, e = this._popStackFactory(t), n = this._getStackTopFactory(t), r = this._pushStackFactory(this._getInverseUndoEventType(t))) {
      return function () {
        var t = e();
        if (t) {
          r(t);
          return t;
        } else {
          return null;
        }
      };
    };
    return t;
  }();
  var eD = Q("Undo");
  var eN = function (t) {
    function e(e = uuidGeneratorUtil.generateUuid()) {
      var n = t.call(this) || this;
      n._id = e;
      n.updateUndoTransformBase = n._updateTransformBaseFactory(K.undo);
      n.updateRedoTransformBase = n._updateTransformBaseFactory(K.redo);
      return n;
    }
    tw(e, t);
    e.create = function (t) {
      return new e(t);
    };
    e.prototype.init = function (e) {
      t.prototype.init.call(this, e);
    };
    Object.defineProperty(e.prototype, "id", {
      get: function () {
        return this._id;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.do = function (t, e = true) {
      this._log("docx_undo_dev", {
        action: "undo_do_start",
        opsHintString: eO(t)
      });
      var n = tS({
        force: null,
        undoable: true
      }, t);
      if (n.undoable) {
        return this._applyUndoableEvent(n, e);
      } else {
        this._applyNonUndoableEvent(n);
        return true;
      }
    };
    e.prototype.onUndo = function () {
      return this.undo();
    };
    e.prototype.onRedo = function () {
      return this.redo();
    };
    e.prototype._performUndoFactory = function (t, e, n, r) {
      var i = this;
      if (e === undefined) {
        e = this._popStackFactory(t);
      }
      if (n === undefined) {
        n = this._getStackTopFactory(t);
      }
      if (r === undefined) {
        r = this._pushStackFactory(this._getInverseUndoEventType(t));
      }
      return function () {
        var o;
        var s = e();
        if (!s) {
          return null;
        }
        var a = s.operations;
        var u = s.transformBase;
        var c = a;
        if (u) {
          c = t3(a, u, operationalTransformCore.TransformDirection.LEFT);
          o = t3(u, a, operationalTransformCore.TransformDirection.RIGHT);
        }
        var l = t1(c);
        r(tS(tS({}, throttledOmitPathStringify.omitPathStringify(s, "transformBase")), {
          operations: l
        }));
        i._log("docx_undo_dev", {
          action: "undo_perform_element_" + t,
          opsHintString: eO({
            operations: c
          }),
          reverseOpsHintString: eO({
            operations: l
          }),
          tBase: u && eO({
            operations: u
          })
        });
        var p = n();
        if (o && p) {
          p.transformBase = t2(p.transformBase || [], o);
        }
        return tS(tS({}, s), {
          operations: c,
          nextTransformBase: o
        });
      };
    };
    e.prototype._shouldComposeElement = function (t, e, n) {
      return n !== k.SPLIT && e.undoable !== false && (!!this.enableMergeOverTransformBase || !e.transformBase) && (n === k.MERGE || !(t.timestamp - e.timestamp > this.mergeGap));
    };
    e.prototype.invert = function (t) {
      this._log("docx_undo_dev", {
        action: "undo_do_invert_start",
        opsHintString: eO(t)
      });
      try {
        t.operations = t1(t.operations);
      } catch (t) {
        this._log("doc_bug_track_dev", {
          action: "undo_do_invert_error",
          info: t.stack
        });
      }
    };
    e.prototype._composeElements = function (t, e) {
      var i = t.transformBase;
      var o = t2(t.operations, e.operations);
      var s = e.options?.selection;
      var a = t.options?.selection;
      return {
        operations: o,
        transformBase: i,
        timestamp: e.timestamp,
        options: tS(tS({}, e.options), {
          selection: {
            prev: s == null ? undefined : s.prev,
            next: a == null ? undefined : a.next
          }
        })
      };
    };
    e.prototype._applyUndoableEvent = function (t, e) {
      var n = t.mergeMode;
      var r = tS(tS({}, t), {
        timestamp: Date.now()
      });
      var i = this.getUndoStackTop();
      var o = false;
      if (e && i && this._shouldComposeElement(r, i, n)) {
        if (i.transformBase) {
          var s;
          var a;
          var u;
          var c;
          var l;
          var p = tC((s = r.operations, a = i.transformBase, u = new Map(), s.forEach(function (t) {
            var e = u.get(t.id);
            if (e) {
              u.set(t.id, t.append(e.ops));
            } else {
              u.set(t.id, t);
            }
          }), c = u, l = a.map(function (t) {
            var e = c.get(t.id);
            if (e) {
              var n = tC(el(e, [t]), 2);
              var r = n[0];
              var i = tC(n[1], 1)[0];
              c.set(e.id, r);
              return i;
            }
            return t;
          }), [tM([], tC(c.values()), false), l]), 2);
          var h = p[0];
          var f = p[1];
          r.transformBase = f;
          r.operations = h;
        }
        this.invert(r);
        var d = this._composeElements(r, i);
        this._popUndoStack();
        this._pushUndoStack(d);
        this._log("docx_undo_dev", {
          action: "undo_apply_merged_element",
          opsHintString: eO(d)
        });
        o = true;
      } else {
        this.invert(r);
        this._pushUndoStack(r);
        this._log("docx_undo_dev", {
          action: "undo_apply_element",
          opsHintString: eO(r)
        });
      }
      this.clearRedoStack();
      return o;
    };
    e.prototype._applyNonUndoableEvent = function (t) {
      var e = this.getUndoStackTop();
      var n = this.getRedoStackTop();
      var r = t.operations;
      if (e) {
        e.transformBase = this.updateTransformBase(e, r);
      }
      if (n) {
        n.transformBase = this.updateTransformBase(n, r.map(function (t) {
          return t.clone();
        }));
      }
    };
    e.prototype.updateTransformBase = function (t, e) {
      return t2(t.transformBase || [], e);
    };
    e.prototype._updateTransformBaseFactory = function (t) {
      var e = this;
      return function (n) {
        var r = t === K.undo ? e.getUndoStackTop() : e.getRedoStackTop();
        if (r) {
          r.transformBase = e.updateTransformBase(r, n);
          if (t === K.undo) {
            e._log("docx_undo_dev", {
              action: "undo_update_transformBase",
              opsHintString: eO({
                operations: n
              }),
              mergedHintString: eO({
                operations: r.transformBase
              })
            });
          }
        }
      };
    };
    e.prototype._log = function (t, e) {
      eD(t, e);
      this._logger.log(t, tS({}, e));
    };
    return e;
  }(eR);
  var ex = function () {
    function t(t) {
      this._id = t;
    }
    t.prototype.id = function () {
      return this._id;
    };
    return t;
  }();
  function eP(t) {
    if (typeof t == "number") {
      t = String(t);
    }
    if (typeof t == "string") {
      t = new ex(t);
    }
    return t;
  }
  var eB = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    tw(e, t);
    e.prototype.clearByRef = function (t) {
      var e = (t = eP(t)).id();
      this._setStack(K.undo, this._getStack(K.undo).filter(function (t) {
        return t.id() !== e;
      }));
      this._setStack(K.redo, this._getStack(K.redo).filter(function (t) {
        return t.id() !== e;
      }));
    };
    return e;
  }(eR);
  var eL = function () {
    function t(t) {
      this.stack = new eB();
      this.undoModules = new Map();
      this.dispatchUndoEvent = t;
    }
    t.create = function () {
      return new t();
    };
    Object.defineProperty(t.prototype, "canUndo", {
      get: function () {
        return this.stack.canUndo;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "canRedo", {
      get: function () {
        return this.stack.canRedo;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.setShouldUndoCallBack = function (t) {
      this.shouldUndo = t;
    };
    t.prototype.remove = function (t) {
      var e = t.blockId;
      this.undoModules.delete(e);
      this.stack.clearByRef(e);
    };
    t.prototype.destroy = function () {
      this.undoModules.clear();
      this.stack.destroy();
    };
    t.prototype.getModule = function (t) {
      return this.undoModules.get(t);
    };
    t.prototype.register = function (t) {
      this.undoModules.set(t.id, t);
    };
    t.prototype.unregister = function (t) {
      this.undoModules.delete(t);
      this.stack.clearByRef(t);
    };
    t.prototype.undo = function () {
      var t;
      var e = this.stack.getUndoStackTop();
      if (!e || !this.shouldUndo || !!this.shouldUndo(e.id())) {
        var n = this.stack.undo();
        if (n) {
          var r = n.id();
          var i = this.undoModules.get(r);
          if (i) {
            if ((t = this.dispatchUndoEvent) !== null && t !== undefined) {
              t.call(this, "undo");
            }
            return {
              id: r,
              element: i.onUndo()
            };
          }
        }
      }
    };
    t.prototype.redo = function () {
      var t;
      var e = this.stack.redo();
      if (e) {
        var n = e.id();
        var r = this.undoModules.get(n);
        if (r) {
          if ((t = this.dispatchUndoEvent) !== null && t !== undefined) {
            t.call(this, "redo");
          }
          return {
            id: n,
            element: r.onRedo()
          };
        }
      }
    };
    t.prototype.do = function (t, e) {
      var n;
      var r = false;
      var i = (t = eP(t)).id();
      var o = this.undoModules.get(i);
      if (!o) {
        return r;
      }
      if (e) {
        if (e.undoable === false) {
          this.updateTransformBase(e.operations, t);
          return r;
        }
        var s = this.stack.getUndoStackTop();
        if (o.do) {
          var a = !s || i === s.id();
          if (o.do(e, a)) {
            this.stack.clearRedoStack();
          } else {
            this.stack.do(t);
            r = true;
          }
        }
      } else {
        this.stack.do(t);
        r = true;
      }
      this.undoModules.forEach(function (t) {
        var e;
        if ((e = t.clearRedoStack) !== null && e !== undefined) {
          e.call(t);
        }
      });
      if ((n = this.dispatchUndoEvent) !== null && n !== undefined) {
        n.call(this, "updateStack");
      }
      return r;
    };
    t.prototype._getMatchRefId = function (t, e) {
      if (this.undoModules.has(e.id())) {
        return e.id();
      }
      var n = t === K.undo ? this.stack.getUndoStackTop() : this.stack.getRedoStackTop();
      if (n) {
        return n.id();
      }
    };
    t.prototype._updateTransformBaseFactory = function (t, e) {
      var n = this;
      return function (r) {
        var i = n._getMatchRefId(t, e);
        if (i) {
          var o = n.undoModules.get(i);
          if (o) {
            var s = o.updateUndoTransformBase;
            var a = o.updateRedoTransformBase;
            if (s && a) {
              if (t === K.undo) {
                s(r);
              } else {
                a(r);
              }
            }
          }
        }
      };
    };
    t.prototype.updateTransformBase = function (t, e, n = this._updateTransformBaseFactory(K.undo, e), r = this._updateTransformBaseFactory(K.redo, e)) {
      n(t);
      r(t.map(function (t) {
        return t.clone();
      }));
    };
    return t;
  }();
  var eF = function () {
    function t(t, e) {
      this.id = t;
      this.snapshot = e;
    }
    t.prototype.get = function (t) {
      if (t.length) {
        return objectPathGetDefault.getObjectPathDefault(this.snapshot, t);
      } else {
        return this.snapshot;
      }
    };
    t.prototype.apply = function (t, e = false) {
      if (t.length) {
        if (e && t.length === 1 && !t[0].p.length && tH(t[0])) {
          this.snapshot = t[0].action.oi;
          return;
        }
        try {
          this.snapshot = operationalTransformCore.apply(this.snapshot, t);
        } catch (t) {
          if (t instanceof Error) {
            t.message;
          }
          throw t;
        }
      }
    };
    return t;
  }();
  var ej = function () {
    function t(t) {
      var e = this;
      this.transactionFrameToHandlerMap = new Map();
      this.framesSubmittedCallbacks = new Set();
      this.handleDataChange = function (t) {
        if (t.type === z.SUBMITTED && e.collabModule.getSubmitted().size === 0) {
          e.onCommitSubmitted();
        }
      };
      this.collabModule = t;
      this.collabModule.on(U.CollabDataChange, this.handleDataChange);
    }
    t.prototype.addTransactionHandlers = function (t, e) {
      this.transactionFrameToHandlerMap.set(t, e);
    };
    t.prototype.onTransactionFramesSubmitted = function (t) {
      this.framesSubmittedCallbacks.add(t);
    };
    t.prototype.offTransactionFramesSubmitted = function (t) {
      this.framesSubmittedCallbacks.delete(t);
    };
    t.prototype.triggerHandlers = function (t, e) {
      var n = this;
      if (e === undefined) {
        e = t;
      }
      this.transactionFrameToHandlerMap.forEach(function (r, i, o) {
        if (t === r && n.collabModule.getSubmittedTransactionFrameSet().has(e)) {
          o.delete(i);
          i();
        }
      });
    };
    t.prototype.destroy = function () {
      this.collabModule.off(U.CollabDataChange, this.handleDataChange);
      this.transactionFrameToHandlerMap.clear();
      this.framesSubmittedCallbacks.clear();
    };
    t.prototype.onCommitSubmitted = function () {
      var t = this;
      this.framesSubmittedCallbacks.forEach(function (e) {
        return e(tM([], tC(t.collabModule.getSubmittedTransactionFrameSet()), false));
      });
      this.transactionFrameToHandlerMap.forEach(function (e, n, r) {
        if (t.collabModule.getSubmittedTransactionFrameSet().has(e)) {
          r.delete(n);
          n();
        }
      });
    };
    return t;
  }();
  var eU = ["children"];
  var ez = function () {
    function t(t, e) {
      this.recordManager = t;
      this.getRecordToken = e;
      this.map = new Map();
    }
    Object.defineProperty(t.prototype, "recordOps", {
      get: function () {
        return Array.from(this.map.values()).filter(function (t) {
          return t.ops.length > 0;
        });
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.clear = function () {
      this.map.clear();
    };
    t.prototype.flush = function () {
      var t = this.recordOps;
      this.clear();
      return t;
    };
    t.prototype.get = function (t) {
      return this.recordManager.getRecord(t);
    };
    t.prototype.insert = function (t, e, n) {
      var r = this.get(t);
      var i = Array.isArray(n) ? n : [n];
      var o = new t0(r);
      i.slice().reverse().forEach(function (t) {
        return o.insert(e, t);
      });
      this.saveAndApply(r, o.ops);
    };
    t.prototype.remove = function (t, e) {
      var n = this.get(t);
      this.saveAndApply(n, [tY(e, n.get(e))]);
    };
    t.prototype.replace = function (t, e, n) {
      var r = this.get(t);
      this.saveAndApply(r, [tK(e, r.get(e), n)]);
    };
    t.prototype.create = function (t, e) {
      var n = (e == null ? undefined : e.recordId) || this.getRecordToken();
      var r = new eF(n, {});
      var i = isFunctionUtil_1.isFunction(t) ? t(n) : t;
      this.saveAndApply(r, [tG([], i)]);
      this.recordManager.registerRecords([r]);
      return n;
    };
    t.prototype.apply = function (t, e) {
      var n = this.get(t);
      this.saveAndApply(n, e);
    };
    t.prototype.edit = function (t, e, n) {
      var r = this.get(t);
      this.saveAndApply(r, [t$(e, n)]);
    };
    t.prototype.createChildren = function (t, e) {
      var n = this;
      return t.map(function (t) {
        return n.create(t, e);
      });
    };
    t.prototype.insertChildren = function (t, e, n, r) {
      var i;
      var o = this;
      if (r === undefined) {
        r = eU;
      }
      i = function (n) {
        o.insert(t, tM(tM([], tC(r), false), [e], false), n);
      };
      (arrayIsArrayUtil.isArray(n) ? ty : tm)(n, functionCoercionUtil.ensureFunction(i));
    };
    t.prototype.removeChildren = function (t, e, n) {
      var r = this;
      if (n === undefined) {
        n = eU;
      }
      var i = this.get(t).get(n);
      if (!arrayIsArrayUtil.isArray(i)) {
        throw Error("[model]: record \"" + t + "\" failed to get children, unexpected type \"" + typeof i + "\"");
      }
      dataProcessor.processData(e).map(function (e) {
        var n = i.indexOf(e);
        if (n === -1) {
          throw Error("[model]: remove non-existent child " + e + " from parent \"" + t + "\"");
        }
        return n;
      }).sort(function (t, e) {
        return e - t;
      }).forEach(function (e) {
        r.remove(t, tM(tM([], tC(n), false), [e], false));
      });
    };
    t.prototype.replaceChildren = function (t, e, n = eU) {
      var r = this.get(t).get(n);
      if (r) {
        this.removeChildren(t, r, n);
      }
      this.insertChildren(t, 0, e);
    };
    t.prototype.saveAndApply = function (t, e) {
      if (e.length) {
        var n = this.map.get(t);
        if (!n) {
          n = new t0(t, [], Date.now(), t.snapshot);
          this.map.set(t, n);
        }
        n.append(e);
        t.apply(e, n.ops.length === 0);
      }
    };
    return t;
  }();
  function eH(t) {
    t();
  }
  ($ ||= {}).HINT = "docx_transaction_hint_dev";
  var eV = function () {
    function t(t) {
      var e = t === undefined ? {} : t;
      var n = e.transactionWrapper;
      var r = e.createRecordToken;
      var i = r === undefined ? uuidGeneratorUtil.generateUuid : r;
      var o = e.logger;
      var s = o === undefined ? new tF("RecordManager") : o;
      this.lastTransactionName = "";
      this.recordMap = new Map();
      this._em = new tn();
      this.inTransaction = false;
      this.transactionFrame = 0;
      this.operationAPI = new ez(this, i);
      this.transactionWrapper = n === undefined ? eH : n;
      this._logger = s;
    }
    t.prototype.getRecordMap = function () {
      return this.recordMap;
    };
    t.prototype.registerRecords = function (t) {
      var e = this;
      var n = false;
      var r = t.map(function (t) {
        var r = t.id;
        var i = t.snapshot;
        if (r.length !== 27 && !n) {
          n = true;
          e.reportInvalidRecords();
        }
        if (e.hasRecord(r)) {
          throw Error("can not register an exist record");
        }
        var o = new eF(r, i);
        e.recordMap.set(r, o);
        return o;
      });
      if (r.length) {
        this.emit(C.REGISTER, {
          records: r
        });
      }
    };
    t.prototype.unregisterRecords = function (t) {
      var e = this;
      t.forEach(function (t) {
        if (e.getRecord(t)) {
          e.recordMap.delete(t);
        }
      });
      this.emit(C.UNREGISTER, {
        ids: t
      });
    };
    t.prototype.getRecord = function (t) {
      var e = this.recordMap.get(t);
      if (!e) {
        throw Error("get record: " + t + " undefined");
      }
      return e;
    };
    t.prototype.hasRecord = function (t) {
      return this.recordMap.has(t);
    };
    t.prototype.interceptRemoteChanges = function (t) {
      this.emit(C.INTERCEPT_REMOTE_CHANGE, {
        recordOps: t
      });
    };
    t.prototype.applyTransaction = function (t, e, n) {
      var r = this;
      var i = this.lastTransactionName;
      var o = this.operationAPI;
      this.lastTransactionName = t;
      var s = Object.assign({}, n);
      s.transactionName = t;
      s.transactionFrame = ++this.transactionFrame;
      s.from ||= M.LOCAL;
      this.transactionWrapper(function (n) {
        if (r.inTransaction) {
          var a;
          var u;
          var c;
          var h = tC((u = (a = Error("applyTransaction nest: (current: " + t + ", last: " + i + ")")).stack, c = a.message, [a, {
            code: A.APPLY_FAILED,
            msg: c,
            stack: u,
            type: O.CLIENT_ERROR,
            transactionName: t,
            unSubmitTransactionNames: [t],
            lastTransactionName: i
          }]), 2);
          var f = h[0];
          var d = h[1];
          r.emit(C.ERROR, d);
          throw f;
        }
        r.inTransaction = true;
        var v = r.doTransaction(e, s);
        var y = o.flush();
        r.inTransaction = false;
        r._log($.HINT, {
          name: t,
          isError: !!v,
          blockLen: y.length,
          frame: r.transactionFrame,
          from: s.from,
          appliedUUIDs: s.from === M.REMOTE ? s.extra?.appliedUUIDs : undefined,
          opsHintString: y.map(function (t) {
            var r = t.record?.snapshot?.type;
            return tD(t.id) + ": " + r + ": " + tB(t.ops);
          }).join("; ")
        });
        if (v) {
          var g = "transaction error: { name: \"" + t + "\", msg: " + ((v == null ? undefined : v.message) ?? v) + " }";
          var _ = (v ?? Error()).stack;
          r.emit(C.ERROR, {
            code: A.APPLY_FAILED,
            msg: g,
            stack: _,
            type: O.CLIENT_ERROR,
            transactionName: t,
            lastTransactionName: i,
            unSubmitTransactionNames: [t],
            recordOps: y,
            options: s
          });
          throw v;
        }
        try {
          if (n) {
            n(y, t, s);
          }
        } catch (e) {
          r.emit(C.ERROR, {
            code: A.SCHEMA_ERROR,
            msg: e.message,
            type: O.CLIENT_ERROR,
            transactionName: t,
            unSubmitTransactionNames: [t],
            frame: r.transactionFrame,
            from: s.from,
            recordOps: y,
            options: s
          });
          throw e;
        }
        r.emit(C.CHANGE, {
          recordOps: y,
          options: s
        });
      }, s);
      return this.transactionFrame;
    };
    t.prototype.on = function (t, e) {
      this._em.on(t, e);
    };
    t.prototype.off = function (t, e) {
      this._em.off(t, e);
    };
    t.prototype.emit = function (t, e) {
      try {
        this._em.emit(t, e);
      } catch (t) {}
    };
    t.prototype.destroy = function () {
      this._em.removeAllListeners();
    };
    t.prototype.doTransaction = function (t, e) {
      var n = this.operationAPI;
      try {
        this.emit(C.BEFORE_CHANGE, {
          options: e
        });
        t(n);
        this.emit(C.INTERCEPT_CHANGE, {
          recordOps: n.recordOps,
          options: e,
          op: n
        });
        return null;
      } catch (t) {
        return t;
      }
    };
    t.prototype._log = function (t, e) {
      e.from;
      M.REMOTE;
      this._logger.log(t, e);
    };
    t.prototype.reportInvalidRecords = function () {
      try {
        throw Error("register invalid record generator stack");
      } catch (t) {
        this._logger.log("doc_bug_track_dev", {
          action: "register_invalid_record",
          info: JSON.stringify({
            invoke_stack: (t == null ? undefined : t.stack) || ""
          })
        });
      }
    };
    return t;
  }();
  require.d(exports, {
    ErrorCodes: function () {
      return C;
    },
    createSyncBuffer: function () {
      return ek;
    },
    formatOpsForLog: function () {
      return tB;
    },
    FlowCollab: function () {
      return eb;
    },
    recoverableErrorCodes: function () {
      return tO;
    },
    invertOperations: function () {
      return t1;
    },
    BackupModule: function () {
      return eV;
    },
    UndoManager: function () {
      return eL;
    },
    isCreateOperation: function () {
      return tU;
    },
    isDeleteOperation: function () {
      return tZ;
    },
    mergeOperations: function () {
      return t2;
    },
    nonRecoverableErrorCodes: function () {
      return t5;
    },
    Record: function () {
      return et;
    },
    LogCategories: function () {
      return H;
    },
    RecordManager: function () {
      return x;
    },
    VisibilityState: function () {
      return eF;
    },
    FlowSync: function () {
      return O;
    },
    OperationBuilder: function () {
      return t0;
    },
    SyncStatus: function () {
      return L;
    },
    isListMoveOperation: function () {
      return tq;
    },
    transformOperations: function () {
      return tH;
    },
    UndoModule: function () {
      return eN;
    },
    isListDeleteOperation: function () {
      return tz;
    },
    isListInsertOperation: function () {
      return es;
    },
    ErrorType: function () {
      return A;
    },
    isListUpdateOperation: function () {
      return tW;
    },
    mergeOperationsWithTransform: function () {
      return t9;
    },
    CollabMode: function () {
      return k;
    },
    offline: function () {
      return ed;
    },
    _v: function () {
      return tR;
    },
    lw: function () {
      return ef;
    },
    kq: function () {
      return M;
    },
    $b: function () {
      return tV;
    },
    i0: function () {
      return ej;
    },
    GM: function () {
      return j;
    },
    MessageType: function () {
      return U;
    },
    transformOperationsWithInvert: function () {
      return tD;
    },
    SyncDirection: function () {
      return N;
    }
  });
}