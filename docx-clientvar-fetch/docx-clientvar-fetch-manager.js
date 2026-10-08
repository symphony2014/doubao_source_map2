// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'm' to 'fetchSyncConstants'
// - Resolved require(290082) to 'fetch-sync-constants'
// - Renamed variable 'g' to 'axiosHttpClient'
// - Resolved require(740865) to 'axios-http-client'
// - Renamed variable 'y' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'F' to 'logIdGenerator'
// - Resolved require(456614) to 'log-id-generator'
// - Updated imported property 'uN' to 'fetchModes' (module 290082)
// - Updated imported property 'jK' to 'errorCodes' (module 290082)
// - Updated imported property 'Nu' to 'workerEvents' (module 290082)
// - Updated imported property 'L2' to 'lifecycleEvents' (module 290082)
// - Updated imported property 'tk' to 'statusStates' (module 290082)
// - Updated imported property 'Z' to 'axios' (module 740865)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx-clientvar-fetch-loadable.42dfbae8.js
         * chunkId: 28086
         * moduleId: 691508
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var s;
  var n;
  var a;
  var c;
  var h;
  var l;
  var u;
  var d;
  var _;
  var p;
  var f;
  var k;
  var fetchSyncConstants = require("fetch-sync-constants") /*id: 290082*/;
  function b(t) {
    if (t) {
      return t.slice(0, 7) + "********" + t.slice(15);
    } else {
      return "";
    }
  }
  (r = l ||= {}).TableSkipBlock = "table_skip_block";
  r.FoldableSkipBlock = "foldable_skip_block";
  r.NormalBlock = "normal_block";
  var v = ["text", "bullet", "ordered", "todo"];
  var C = "table";
  var S = function () {
    function t() {
      var t;
      this._ready = true;
      this._limit = 239;
      this._maxConcurrency = 3;
      this._nowConcurrency = 0;
      this._pendingIdSet = new Set();
      this._retryCount = {};
      this._maxRetryCount = 4;
      this._cursorL = [];
      this._indexCursor = 0;
      this._foldableSkipCursorL = [];
      this._indexFoldableSkipCursor = 0;
      this._tableSkipBlockCursor = [];
      this._indexTableSkipBlock = 0;
      this._indexCursorInTableSkipBlock = Number.MAX_SAFE_INTEGER;
      this._foldableSkipBlockList = [];
      this._indexFoldableSkipBlock = 0;
      this._eachKindSliceCountObj = ((t = {})[l.NormalBlock] = 0, t[l.FoldableSkipBlock] = 0, t[l.TableSkipBlock] = 0, t);
    }
    t.prototype._reset = function () {
      var t;
      this._successCb = undefined;
      this._errorCb = undefined;
      this._finishCb = undefined;
      this._fetch = undefined;
      this._ready = true;
      this._abortController = undefined;
      this._token = undefined;
      this._blockId = undefined;
      this._version = undefined;
      this._limit = 239;
      this._maxConcurrency = 3;
      this._nowConcurrency = 0;
      this._mode = undefined;
      this._pendingIdSet = new Set();
      this._retryCount = {};
      this._maxRetryCount = 4;
      this._cursorL = [];
      this._indexCursor = 0;
      this._foldableSkipCursorL = [];
      this._indexFoldableSkipCursor = 0;
      this._tableSkipBlockCursor = [];
      this._indexTableSkipBlock = 0;
      this._indexCursorInTableSkipBlock = Number.MAX_SAFE_INTEGER;
      this._foldableSkipBlockList = [];
      this._indexFoldableSkipBlock = 0;
      this._eachKindSliceCountObj = ((t = {})[l.NormalBlock] = 0, t[l.FoldableSkipBlock] = 0, t[l.TableSkipBlock] = 0, t);
    };
    t.prototype.start = function (t) {
      this._reset();
      if (t.token && t.fetch) {
        this._successCb = t.successCb;
        this._errorCb = t.errorCb;
        this._finishCb = t.finishCb;
        this._limit = t.limit || 239;
        this._token = t.token;
        this._abortController = t.abortController;
        this._maxConcurrency = t.concurrency || 3;
        this._blockId = t.blockId;
        this._version = t.version;
        this._fetch = t.fetch;
        this._mode = t.mode;
        if (t.remainInfo) {
          this._useRemain(t.remainInfo);
          return;
        }
        this._countSliceOfOneKind(l.NormalBlock, 1);
        this._fetchFirstP(this._mode, this._blockId, undefined, this._version).then(this._wrap(this._firstHandler, this._token, l.NormalBlock)).catch(this._wrap(this._fetchError, this._token));
        ++this._nowConcurrency;
        this._pendingIdSet.add(this._token);
      }
    };
    t.prototype._useRemain = function (t) {
      var e;
      var i;
      var r;
      if (!t.concurrent) {
        this._ready = false;
      }
      this._countSliceOfOneKind(l.NormalBlock, (t.cursorL || []).length);
      (e = this._cursorL).push.apply(e, t.cursorL || []);
      this._countSliceOfOneKind(l.FoldableSkipBlock, (t.foldableSkipBlockList || []).length);
      (i = this._foldableSkipBlockList).push.apply(i, t.foldableSkipBlockList || []);
      this._countSliceOfOneKind(l.TableSkipBlock, (t.tableSkipBlockCursor || []).length);
      (r = this._tableSkipBlockCursor).push.apply(r, t.tableSkipBlockCursor || []);
      for (var o = this._tableSkipBlockCursor.length - 1; o >= 0; --o) {
        var s = (this._tableSkipBlockCursor[o].cursorSet || []).length;
        if (s > 0) {
          this._indexCursorInTableSkipBlock = o;
          this._countSliceOfOneKind(l.TableSkipBlock, s);
        }
      }
      this._goOnFetch();
    };
    t.prototype._fetchFirstP = function (t, e, i, r) {
      var o = {
        id: this._token,
        mode: t,
        limit: this._limit
      };
      if (e) {
        o.block_id = e;
      }
      if (i) {
        o.cursor = i;
      }
      if (r) {
        o.version = r;
      }
      return this._fetch(o);
    };
    t.prototype._fetchCursorP = function (t, e) {
      var i = {
        id: this._token,
        mode: t,
        limit: this._limit,
        cursor: e
      };
      return this._fetch(i);
    };
    t.prototype._firstHandler = function (t, e, i, r) {
      --this._nowConcurrency;
      this._pendingIdSet.delete(e);
      if (t.code) {
        if (this._errorCb) {
          this._errorCb(t, e);
        }
        this._goOnFetch();
        return;
      }
      var o;
      var s;
      var n = t.data;
      var a = n.next_cursors;
      var c = n.block_map;
      var h = n.cursor;
      if (!n.concurrent) {
        this._ready = false;
      }
      if (!this._ready) {
        a = n.has_more && h ? [h] : [];
      }
      if (!c || Object.keys(c).length < 1) {
        this._firstRetry(e, i, r);
        return;
      }
      this._countSliceOfOneKind(i, (a || []).length);
      if (i === l.TableSkipBlock) {
        this._addCursors2TableSkipBlock(e, a || []);
      } else if (i === l.FoldableSkipBlock) {
        (o = this._foldableSkipCursorL).push.apply(o, a || []);
      } else {
        this._saveSkipBlocks(n);
        (s = this._cursorL).push.apply(s, a || []);
      }
      if (this._successCb) {
        this._successCb(t, e);
      }
      this._goOnFetch();
    };
    t.prototype._cursorHandler = function (t, e, i, r) {
      --this._nowConcurrency;
      this._pendingIdSet.delete(e);
      if (t.code) {
        if (this._errorCb) {
          this._errorCb(t, e);
        }
        this._goOnFetch();
        return;
      }
      var o = t.data;
      var s = o.block_map;
      if (!s || Object.keys(s).length < 1) {
        this._cursorRetry(e, i, r);
        return;
      }
      if (!this._ready && o.has_more) {
        var n = o.cursor;
        this._countSliceOfOneKind(i || l.NormalBlock, 1);
        if (i === l.TableSkipBlock) {
          this._addCursors2TableSkipBlock(r, [n]);
        } else if (i === l.FoldableSkipBlock) {
          this._foldableSkipCursorL.push(n);
        } else {
          this._saveSkipBlocks(o);
          this._cursorL.push(n);
        }
      } else if (i === l.NormalBlock) {
        this._saveSkipBlocks(o);
      }
      if (this._successCb) {
        this._successCb(t, e);
      }
      this._goOnFetch();
    };
    t.prototype._fetchError = function (t, e) {
      --this._nowConcurrency;
      this._pendingIdSet.delete(e);
      if (this._errorCb) {
        this._errorCb(t, e);
      }
      this._goOnFetch();
    };
    t.prototype._getRetryDelay = function (t = 1) {
      return t * 1000 + Math.random() * 2000 * t;
    };
    t.prototype._firstRetry = function (t, e, i) {
      var r = this;
      this._retryCount[t] ||= 0;
      if (this._retryCount[t] < this._maxRetryCount) {
        ++this._retryCount[t];
        var o = fetchSyncConstants.fetchModes.SPECIFIC;
        var s = t;
        if (s === this._token) {
          s = this._blockId;
          o = this._mode;
        }
        setTimeout(function () {
          r._fetchFirstP(o, s, i).then(r._wrap(r._firstHandler, t, e, i)).catch(r._wrap(r._fetchError, t));
        }, this._getRetryDelay(this._retryCount[t]));
        ++this._nowConcurrency;
        this._pendingIdSet.add(t);
      } else {
        if (this._errorCb) {
          this._errorCb({
            code: fetchSyncConstants.errorCodes.firstBlockMapEmptyAfterRetry,
            message: "first block_map is empty after retry"
          }, t);
        }
        if (t !== this._token) {
          this._goOnFetch();
        }
      }
    };
    t.prototype._cursorRetry = function (t, e, i) {
      var r = this;
      this._retryCount[t] ||= 0;
      if (this._retryCount[t] < this._maxRetryCount) {
        ++this._retryCount[t];
        var o = e === l.NormalBlock ? this._mode : fetchSyncConstants.fetchModes.SPECIFIC;
        setTimeout(function () {
          r._fetchCursorP(o, t).then(r._wrap(r._cursorHandler, t, e, i)).catch(r._wrap(r._fetchError, t));
        }, this._getRetryDelay(this._retryCount[t]));
        ++this._nowConcurrency;
        this._pendingIdSet.add(t);
      } else {
        if (this._errorCb) {
          this._errorCb({
            code: fetchSyncConstants.errorCodes.cursorBlockMapEmptyAfterRetry,
            message: "cursor block_map is empty after retry"
          }, t);
        }
        this._goOnFetch();
      }
    };
    t.prototype._goOnFetch = function () {
      while (this._nowConcurrency < this._maxConcurrency) {
        var t;
        var e;
        var i = undefined;
        var r = undefined;
        var o = undefined;
        var s = undefined;
        if (this._indexCursor < this._cursorL.length) {
          i = this._cursorL[this._indexCursor++];
          o = this._mode;
          s = l.NormalBlock;
        } else if (this._indexFoldableSkipCursor < this._foldableSkipCursorL.length) {
          i = this._foldableSkipCursorL[this._indexFoldableSkipCursor++];
          o = fetchSyncConstants.fetchModes.SPECIFIC;
          s = l.FoldableSkipBlock;
        } else {
          i = (t = this._getNextTableSkipBlockCursor())[0];
          r = t[1];
          o = fetchSyncConstants.fetchModes.SPECIFIC;
          s = l.TableSkipBlock;
        }
        if (i) {
          this._fetchCursorP(o, i).then(this._wrap(this._cursorHandler, i, s, r)).catch(this._wrap(this._fetchError, i));
          ++this._nowConcurrency;
          this._pendingIdSet.add(i);
          continue;
        }
        var n = undefined;
        if (this._indexFoldableSkipBlock < this._foldableSkipBlockList.length) {
          s = l.FoldableSkipBlock;
          n = this._foldableSkipBlockList[this._indexFoldableSkipBlock++];
        } else if (this._indexTableSkipBlock < this._tableSkipBlockCursor.length) {
          s = l.TableSkipBlock;
          n = this._tableSkipBlockCursor[this._indexTableSkipBlock++];
        }
        if (n) {
          this._fetchFirstP(fetchSyncConstants.fetchModes.SPECIFIC, n.blockId, n.cursor).then(this._wrap(this._firstHandler, n.blockId, s, n.cursor)).catch(this._wrap(this._fetchError, n.blockId));
          ++this._nowConcurrency;
          this._pendingIdSet.add(n.blockId);
          continue;
        }
        if (this._pendingIdSet.size < 1) {
          var a = Date.now();
          if ((e = this._finishCb) !== null && e !== undefined) {
            e.call(this, {
              fetchFinishTime: a,
              normalSliceCount: this._eachKindSliceCountObj[l.NormalBlock],
              foldableSliceCount: this._eachKindSliceCountObj[l.FoldableSkipBlock],
              tableSliceCount: this._eachKindSliceCountObj[l.TableSkipBlock]
            });
          }
        }
        return;
      }
    };
    t.prototype._wrap = function (t) {
      var e = this;
      var i = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        i[r - 1] = arguments[r];
      }
      return function (r) {
        t.apply(e, [r].concat(i));
      };
    };
    t.prototype._addCursors2TableSkipBlock = function (t, e) {
      if (e && !(e.length < 1)) {
        var i;
        var r = this._tableSkipBlockCursor.length;
        var o = 0;
        while (o < r) {
          var s = this._tableSkipBlockCursor[o];
          if (s.blockId === t) {
            if ((i = s.cursorSet) !== null && i !== undefined) {
              i.push.apply(i, e);
            }
            s.cursorSet = Array.from(new Set(s.cursorSet));
            if (o < this._indexCursorInTableSkipBlock) {
              this._indexCursorInTableSkipBlock = o;
            }
            break;
          }
          ++o;
        }
        if (o >= r && this._errorCb) {
          this._errorCb({
            code: fetchSyncConstants.errorCodes.tableSkipBlockLogicError,
            message: "in table skip block add cursors 2 it's blockId set, but zhe blockId can not found in list"
          }, t);
        }
      }
    };
    t.prototype._getNextTableSkipBlockCursor = function () {
      if (!(this._indexCursorInTableSkipBlock < this._tableSkipBlockCursor.length)) {
        return [undefined, undefined];
      }
      var t = this._tableSkipBlockCursor[this._indexCursorInTableSkipBlock];
      var e = t.cursorSet;
      var i = t.blockId;
      var r = undefined;
      if (e.length > 0) {
        r = e.shift();
      }
      if (e.length <= 0) {
        for (var o = this._indexCursorInTableSkipBlock + 1; o < this._tableSkipBlockCursor.length; ++o) {
          var s = this._tableSkipBlockCursor[o];
          if (s.cursorSet && s.cursorSet.length > 0) {
            this._indexCursorInTableSkipBlock = o;
            break;
          }
        }
        if (o >= this._tableSkipBlockCursor.length) {
          this._indexCursorInTableSkipBlock = Number.MAX_SAFE_INTEGER;
        }
      }
      return [r, i];
    };
    t.prototype._saveSkipBlocks = function (t) {
      var e = this;
      var i = t.block_map;
      var r = t.cursor;
      var o = t.skip_blocks;
      o ||= Object.keys(i).reduce(function (t, e) {
        var r;
        var o = i[e];
        var s = o.data.type;
        var n = v.includes(s) && o.data.folded && ((r = o.data.children) === null || r === undefined ? undefined : r.some(function (t) {
          return !i[t];
        }));
        var a = s === C;
        if (n || a) {
          t.push(e);
        }
        return t;
      }, []);
      (o || []).forEach(function (t) {
        if ((i[t] || {
          data: {
            type: ""
          }
        }).data.type === C) {
          e._countSliceOfOneKind(l.TableSkipBlock, 1);
          e._tableSkipBlockCursor.push({
            blockId: t,
            cursorSet: [],
            cursor: r
          });
        } else {
          e._countSliceOfOneKind(l.FoldableSkipBlock, 1);
          e._foldableSkipBlockList.push({
            blockId: t,
            cursor: r
          });
        }
      });
    };
    t.prototype.retryTable = function (t, e) {
      if (e) {
        if (this._pendingIdSet.has(e)) {
          return;
        }
        this._addCursors2TableSkipBlock(t, [e]);
        this._goOnFetch();
        return;
      }
      if (!this._pendingIdSet.has(t)) {
        var i = this._tableSkipBlockCursor.length;
        var r = 0;
        while (r < i) {
          var o = this._tableSkipBlockCursor[r];
          if (o.blockId === t) {
            if (r < this._indexTableSkipBlock) {
              o.blockId = `reset${Date.now()}`;
              o.cursorSet = [];
              if (r === this._indexCursorInTableSkipBlock) {
                for (var s = this._indexCursorInTableSkipBlock + 1; s < this._tableSkipBlockCursor.length; ++s) {
                  var n = this._tableSkipBlockCursor[s];
                  if (n.cursorSet && n.cursorSet.length > 0) {
                    this._indexCursorInTableSkipBlock = s;
                    break;
                  }
                }
                if (s >= this._tableSkipBlockCursor.length) {
                  this._indexCursorInTableSkipBlock = Number.MAX_SAFE_INTEGER;
                }
              }
              this._tableSkipBlockCursor.push({
                blockId: t,
                cursor: o.cursor,
                cursorSet: []
              });
              this._goOnFetch();
            }
            break;
          }
          ++r;
        }
        if (r >= i && this._errorCb) {
          this._errorCb({
            code: fetchSyncConstants.errorCodes.tableSkipBlockLogicError,
            message: "in table skip block add cursors 2 it's blockId set, but zhe blockId can not found in list"
          }, t);
        }
      }
    };
    t.prototype._countSliceOfOneKind = function (t, e) {
      this._eachKindSliceCountObj[t] += e;
    };
    t.prototype.destroy = function () {
      var t;
      if ((t = this._abortController) !== null && t !== undefined) {
        t.abort();
      }
      this._successCb = undefined;
      this._errorCb = undefined;
      this._finishCb = undefined;
      this._fetch = undefined;
      this._token = undefined;
      this._blockId = undefined;
      this._version = undefined;
      this._limit = 239;
      this._maxConcurrency = 3;
      this._nowConcurrency = 0;
      this._mode = undefined;
      this._pendingIdSet.clear();
      this._retryCount = {};
      this._maxRetryCount = 4;
      this._cursorL = [];
      this._indexCursor = 0;
      this._foldableSkipCursorL = [];
      this._indexFoldableSkipCursor = 0;
      this._tableSkipBlockCursor = [];
      this._indexTableSkipBlock = 0;
      this._indexCursorInTableSkipBlock = Number.MAX_SAFE_INTEGER;
      this._foldableSkipBlockList = [];
      this._indexFoldableSkipBlock = 0;
    };
    return t;
  }();
  var axiosHttpClient = require("axios-http-client") /*id: 740865*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var logIdGenerator = require("log-id-generator") /*id: 456614*/;
  var I = function () {
    function t() {
      this._eventMap = new Map();
    }
    t.prototype.subscribe = function (t, e) {
      if (t && e) {
        if (this._eventMap.has(t)) {
          var i = this._eventMap.get(t);
          if (i != null) {
            i.push(e);
          }
        } else {
          var i = [e];
          this._eventMap.set(t, i);
        }
      }
    };
    t.prototype.emit = function (t, e) {
      var i = this._eventMap.get(t);
      if (i) {
        for (var r = 0; r < i.length; ++r) {
          i[r](e);
        }
      }
    };
    return t;
  }();
  function T() {
    return (T = Object.assign || function (t) {
      var e;
      var i = 1;
      var r = arguments.length;
      for (; i < r; i++) {
        for (var o in e = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  (o = d ||= {}).Retry = "retry";
  o.SendStart = "send_start";
  o.SendEnd = "send_end";
  var B = new I();
  (s = _ ||= {})[s.DataEmpty = -110022] = "DataEmpty";
  s[s.DataNotCompleteOrCanNotParse = -110011] = "DataNotCompleteOrCanNotParse";
  (n = p ||= {})[n.Success = 0] = "Success";
  n[n.Unknown = 1] = "Unknown";
  n[n.ParamEmptyOrInvalid = 2] = "ParamEmptyOrInvalid";
  n[n.LoginRequired = 5] = "LoginRequired";
  n[n.PermissionDenied = 4] = "PermissionDenied";
  n[n.ServerException = 5000000] = "ServerException";
  n[n.DataDeleted = 3] = "DataDeleted";
  n[n.DataNotFound = 7] = "DataNotFound";
  n[n.AlgorithmFail = 4000040] = "AlgorithmFail";
  n[n.SchemaInvalid = 4000020] = "SchemaInvalid";
  n[n.IdConflict = 4000050] = "IdConflict";
  n[n.RequestExceedLimit = 4290000] = "RequestExceedLimit";
  n[n.MountPointError = 4000030] = "MountPointError";
  n[n.OverLimitChanges = 4130000] = "OverLimitChanges";
  n[n.OverLimitQuota = 4000000] = "OverLimitQuota";
  n[n.BlockCountOverLimit = 4000010] = "BlockCountOverLimit";
  n[n.TooOldPage = 4000090] = "TooOldPage";
  n[n.NoPermission = 4030004] = "NoPermission";
  n[n.NotFound = 4000003] = "NotFound";
  n[n.DBException = 102002] = "DBException";
  n[n.RPCException = 102003] = "RPCException";
  n[n.SystemInternalError = 201001] = "SystemInternalError";
  n[n.DataException = 202001] = "DataException";
  n[n.OperateInvalid = 203002] = "OperateInvalid";
  n[n.IdNotFound = 203005] = "IdNotFound";
  n[n.NeedInvitationCode = 204001] = "NeedInvitationCode";
  n[n.UserIsExists = 204002] = "UserIsExists";
  n[n.UserNotFound = 204003] = "UserNotFound";
  n[n.InvitationCodeError = 204004] = "InvitationCodeError";
  n[n.GetUserError = 204005] = "GetUserError";
  n[n.PassportError = 204006] = "PassportError";
  n[n.SearchServiceError = 205001] = "SearchServiceError";
  n[n.ColdDeleted = 600] = "ColdDeleted";
  n[n.TnsBlockCode = 900099021] = "TnsBlockCode";
  (u = {})[p.LoginRequired] = "login_required";
  u[p.PermissionDenied] = "permission_denied";
  u[p.ServerException] = "server_exception";
  u[p.DataException] = "data_exception";
  u[p.DataDeleted] = "data_deleted";
  u[p.DataNotFound] = "data_not_found";
  u[p.NeedInvitationCode] = "need_invitation_code";
  u[p.UserIsExists] = "user_is_exists";
  u[p.UserNotFound] = "user_ot_found";
  u[p.InvitationCodeError] = "invitation_code_error";
  u[p.GetUserError] = "get_user_error";
  u[p.PassportError] = "passport_error";
  u[p.SearchServiceError] = "search_service_error";
  u[p.RequestExceedLimit] = "updata_beta";
  var E = u;
  function O(t) {
    if (!t) {
      return {};
    }
    var e = {};
    var i = ["url", "method", "timeout", "responseType", "maxBodyLength", "timeoutErrorMessage", "cusRetryCount"];
    var r = 0;
    for (; r < i.length; ++r) {
      var o = i[r];
      e[o] = t[o];
    }
    var s = t.headers;
    if (s) {
      e.requestId = s["Request-Id"] || s["X-Request-Id"];
      e.ttLogId = s["X-TT-LOGID"];
      e.ttTrace = s["X-TT-Trace"];
      var n = Object.keys(s);
      var r = 0;
      for (; r < n.length; ++r) {
        var o = n[r];
        var a = o.toLowerCase();
        if (!a.includes("cookie") && !a.includes("csrf")) {
          var c = o.replace(/-/g, "_");
          e[`headers_${c}`] = s[o];
        }
      }
    }
    var h = t.params;
    if (h) {
      var l = Object.keys(h);
      var r = 0;
      for (; r < l.length; ++r) {
        var o = l[r];
        e[`params_${o}`] = h[o];
      }
      var u = h.id;
      e.params_id = u ? "xxx" + u.slice(5) : "";
      e.params_id_area = u ? u.slice(3, 5) : "";
      var d = h.container_id;
      e.params_container_id = d ? "xxx" + d.slice(5) : "";
    }
    return e;
  }
  function L(t) {
    if (!t) {
      return {};
    }
    var i = {
      status: t.status,
      statusText: t.statusText
    };
    var r = 0;
    var o = -1;
    var s = "";
    var n = "";
    var a = t.data;
    if (Object.prototype.toString.call(a) === "[object String]") {
      try {
        a = JSON.parse(a);
      } catch (t) {}
    }
    if (a) {
      if (Object.prototype.toString.call(a) === "[object String]") {
        r = _.DataNotCompleteOrCanNotParse;
        s = "response data is string, maybe data is not complete";
        o = a.length;
      } else {
        r = a.code;
        s = a.msg || function (t) {
          if (t === undefined) {
            return "unknown";
          }
          var e = E[t] || "unknown";
          return `${e} [${t}]`;
        }(r) || "response error";
        n = a.data?.detail;
      }
    } else {
      r = _.DataEmpty;
      s = "response data is empty";
    }
    i.code = r;
    i.msg = s;
    i.dataLength = o;
    i.detail = n;
    if (r === p.TnsBlockCode) {
      i.tnsBlockUrl = a.url;
    }
    var c = t.headers;
    if (c) {
      var h = Object.keys(c);
      var l = 0;
      for (; l < h.length; ++l) {
        var u = h[l];
        var d = u.toLowerCase();
        if (!d.includes("cookie") && !d.includes("csrf")) {
          var f = u.replace(/-/g, "_");
          i[`responseHeaders_${f}`] = c[u];
        }
      }
    }
    return i;
  }
  function w(t) {
    var e = {};
    var i = t.code;
    var r = t.name;
    var o = t.response;
    var s = t.config;
    var n = t.message;
    var a = t.stack;
    e.errorCode = i;
    e.code = i;
    e.message = n;
    e.stack = a;
    e.errorName = r;
    var c = {};
    if (i && [_.DataEmpty, _.DataNotCompleteOrCanNotParse, p.ColdDeleted].includes(i)) {
      c = L(o);
    } else if (i == null && o && o.status) {
      e.code = o.status;
    }
    return Object.assign(e, O(s), c);
  }
  var N = axiosHttpClient.axios.create({
    withCredentials: true
  });
  N.defaults.timeout = 30000;
  c = [];
  var x = function t(e) {
    var r = e.config?.cusUuid;
    if (a && a !== r) {
      return new Promise(function (t, i) {
        c.push({
          error: e,
          resolve: t,
          reject: i
        });
      });
    }
    a = r;
    var o = function (t) {
      var e;
      var i = t.config;
      var r = w(t);
      if (!i) {
        return Promise.reject(r);
      }
      i.cusRetryCount = i.cusRetryCount || 0;
      var o = 3;
      if (t.code && Number(t.code) === p.ColdDeleted) {
        o = 5;
      }
      if (i.cusRetryCount >= o) {
        return Promise.reject(r);
      }
      i.cusRetryCount += 1;
      if ((e = i.cusRetryCount) === undefined) {
        e = 1;
      }
      var s = Math.pow(2, e) * 1000 + Math.random() * 2000;
      var n = new Promise(function (t) {
        return setTimeout(t, s);
      });
      r.action = fetchSyncConstants.workerEvents.Retry;
      r.RetryCount = i.cusRetryCount;
      r.RetryDelayTime = s;
      r.timestamp = Date.now();
      B.emit(d.Retry, r);
      return n.then(function () {
        return N(i);
      });
    }(e);
    o.then(function (e) {
      var i;
      if (a === r) {
        a = undefined;
        var o = c.shift();
        if (o) {
          if ((i = t(o.error)) !== null && i !== undefined) {
            i.then(o.resolve).catch(o.reject);
          }
        }
      }
      return e;
    }).catch(function (t) {
      c.forEach(function (t) {
        t.reject(w(t.error));
      });
      c = [];
      a = undefined;
      throw t;
    });
    return o;
  };
  N.defaults.headers.common["content-type"] = "application/json";
  N.interceptors.request.use(function (t) {
    var e = function (t = 8) {
      var e = "";
      var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var r = i.length;
      var o = 0;
      for (; o < t; o++) {
        e += i.charAt(Math.floor(Math.random() * r));
      }
      return e;
    }(12);
    t.headers ||= {};
    t.headers["Request-Id"] = e;
    t.headers["X-Request-Id"] = e;
    t.headers["X-TT-LOGID"] = logIdGenerator.genLogID();
    t.cusStartTime = Date.now();
    t.cusUuid ||= uuidGeneratorUtil.generateUuid();
    return t;
  });
  N.interceptors.response.use(function (t) {
    var i = t.data.code;
    var r = ((t == null ? undefined : t.config)?.headers || {})["Request-Id"];
    if (i === 0) {
      return T(T({}, t.data), {
        requestId: r
      });
    }
    var o = Object.assign({}, L(t), O(t.config));
    if ([_.DataEmpty, _.DataNotCompleteOrCanNotParse, p.ColdDeleted, p.ServerException, p.Unknown].includes(o.code)) {
      return x({
        config: t.config,
        code: o.code,
        response: t,
        isAxiosError: false,
        toJSON: function () {
          return {};
        },
        name: "retry",
        message: o.msg,
        stack: ""
      });
    } else {
      return Promise.reject(o);
    }
  }, x);
  function M() {
    return (M = Object.assign || function (t) {
      var e;
      var i = 1;
      var r = arguments.length;
      for (; i < r; i++) {
        for (var o in e = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  if (typeof AbortController == "function") {
    f = new AbortController();
  }
  var D = self;
  var j = new S();
  function P(t, e) {
    D.postMessage({
      action: fetchSyncConstants.lifecycleEvents.Clientvar,
      postData: {
        id: e,
        clientvar: t
      }
    });
  }
  function R(t, e) {
    D.postMessage({
      action: fetchSyncConstants.lifecycleEvents.FetchError,
      postData: {
        id: e,
        error: t
      }
    });
  }
  function A(t) {
    D.postMessage({
      action: fetchSyncConstants.lifecycleEvents.FetchFinish,
      postData: t
    });
  }
  B.subscribe(d.Retry, function (t) {
    D.postMessage({
      action: fetchSyncConstants.lifecycleEvents.NeedUpload,
      postData: t
    });
  });
  B.subscribe(d.SendStart, function (t) {
    D.postMessage({
      action: fetchSyncConstants.lifecycleEvents.NeedUpload,
      postData: t
    });
  });
  B.subscribe(d.SendEnd, function (t) {
    D.postMessage({
      action: fetchSyncConstants.lifecycleEvents.NeedUpload,
      postData: t
    });
  });
  D.addEventListener("message", function (t) {
    var e = t.data;
    switch (e.action) {
      case fetchSyncConstants.lifecycleEvents.Start:
        var i;
        var r;
        var o;
        var s;
        var n;
        var a;
        var c;
        var h;
        var l;
        var u;
        var d;
        var _;
        var p;
        var k;
        var v = e.postData;
        r = (i = v).token;
        o = i.blockId;
        s = i.version;
        n = i.limit;
        a = i.concurrency;
        c = i.remainInfo;
        h = i.extraParams;
        l = i.baseUrl;
        u = i.headers;
        d = i.mode;
        _ = i.metaCache;
        p = i.metaStartTime;
        k = {
          token: r,
          blockId: o,
          version: s,
          mode: d,
          limit: n,
          concurrency: a,
          remainInfo: c,
          abortController: f,
          fetch: (N.interceptors.request.use(function (t) {
            var e = function () {
              if (_ && p && typeof _ == "object") {
                var e = _ && _.block_path || [];
                var i = function (t, e) {
                  if (!e) {
                    return "";
                  }
                  var i = "";
                  if (e.includes("://")) {
                    i = e;
                  } else {
                    var r = t.endsWith("/");
                    var o = e.startsWith("/");
                    i = r && o ? t + e.substring(1) : r || o ? t + e : `${t}/${e}`;
                  }
                  if (i.includes("://")) {
                    return new URL(i).pathname;
                  } else {
                    return i;
                  }
                }(String(t.baseURL || ""), String(t.url || ""));
                if (!e.some(function (t) {
                  return i.startsWith(t);
                })) {
                  var r = {};
                  var o = 0;
                  Object.keys(_).forEach(function (t) {
                    var e = _[t];
                    var i = e.ttl;
                    var s = e.encrypted;
                    if (Date.now() - p < i * 1000) {
                      o++;
                      r[t] = s;
                    }
                  });
                  if (o > 0) {
                    return {
                      "ccm-meta": JSON.stringify(r)
                    };
                  }
                }
              }
              return {};
            }();
            var i = T(T({}, t.headers), e);
            Object.assign(t, {
              headers: i
            });
            return t;
          }), function (t) {
            return N.get(l + "/pages/client_vars", {
              signal: f == null ? undefined : f.signal,
              params: M(M({}, t), h || {}),
              headers: u
            });
          }),
          successCb: P,
          errorCb: R,
          finishCb: A
        };
        b((u || {})["X-CSRFToken"] || "");
        j.start(k);
        D.postMessage({
          action: fetchSyncConstants.lifecycleEvents.WorkerStart,
          postData: {
            startTimestamp: Date.now()
          }
        });
        break;
      case fetchSyncConstants.lifecycleEvents.RetryTable:
        var v = e.postData;
        j.retryTable(v.blockId, v.cursor);
      case fetchSyncConstants.lifecycleEvents.Destroy:
        j.destroy();
        close();
    }
  });
  function U() {
    return (U = Object.assign || function (t) {
      var e;
      var i = 1;
      var r = arguments.length;
      for (; i < r; i++) {
        for (var o in e = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  (h = k ||= {}).Fallback = "FALLBACK";
  h.NeedFallback = "NEEDFALLBACK";
  h.WebWorker = "WEBWORKER";
  h.Finish = "FINISH";
  var W = "/space/api/docx";
  var K = function () {
    function t() {
      var t = this;
      this._navigationStart = performance.timing.navigationStart;
      this._libStartTimestamp = 0;
      this._runningStatus = k.WebWorker;
      this._hasCompleteCache = false;
      this._isFirstTimeFetch = true;
      this._frozen = 0;
      this._finishInfo = {
        fetchFinishTime: 0,
        mainFinishTime: 0,
        isFinish: false
      };
      this._clientvarMap = new Map();
      this._clientvarErrorMap = new Map();
      this._pendingObjMap = new Map();
      this._header = {};
      this.hasColdDeleteError = false;
      this._handleVisibilityChange = function () {
        var e = document.visibilityState;
        if (e === fetchSyncConstants.workerEvents.visible) {
          t._recreatePendingTimeout();
        } else if (e === fetchSyncConstants.workerEvents.hidden) {
          t._clearPendingTimeout();
        }
      };
      this._clearPendingTimeout = function (e = false) {
        if (e) {
          t._frozen = 1;
        }
        var i = e ? fetchSyncConstants.workerEvents.freeze : fetchSyncConstants.workerEvents.hidden;
        t._uploadInfo({
          action: i
        });
        t._pendingObjMap.forEach(function (t) {
          if (t.timeout && t.timeoutCb) {
            clearTimeout(t.timeout);
            t.timeout = undefined;
          }
        });
      };
      this._recreatePendingTimeout = function (e = false) {
        if (e) {
          t._frozen = 0;
        }
        var i = e ? fetchSyncConstants.workerEvents.ResumeFromFrozen : fetchSyncConstants.workerEvents.visible;
        t._uploadInfo({
          action: i
        });
        t._pendingObjMap.forEach(function (t) {
          if (!t.timeout && t.timeoutCb) {
            t.timeout = window.setTimeout(t.timeoutCb, 425000);
          }
        });
      };
      this._handleFreezeEvent = function () {
        t._clearPendingTimeout(true);
      };
      this._handleResumeEvent = function () {
        t._recreatePendingTimeout(true);
      };
    }
    t.prototype.start = function (t) {
      var e;
      var i = t.token;
      var r = t.stage;
      if (t.token) {
        if (this._token !== i) {
          this._reset();
          this._token = i;
          this._stageRecord = ((e = {})[r] = 1, e);
          this._stage = r;
          this._ready(t);
          return true;
        } else if (this._stageRecord[r]) {
          this._reset();
          this._stage = r;
          this._ready(t);
          return true;
        } else {
          this._stageRecord[r] = 1;
          if (t.fallbackFetch) {
            this._fallbackFetch = t.fallbackFetch;
          }
          if (this._runningStatus === k.NeedFallback) {
            this._startMasterMode();
          }
          return false;
        }
      } else {
        this._token = "";
        this._reset();
        return false;
      }
    };
    Object.defineProperty(t.prototype, "uploadHandler", {
      get: function () {
        return this._uploadHandler;
      },
      set: function (t) {
        this._uploadHandler = t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "stage", {
      get: function () {
        return this._stage;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype._ready = function (t) {
      var e = t.blockId;
      var i = t.version;
      var r = t.limit;
      var o = t.concurrency;
      var s = t.extraParams;
      var n = t.cacheClientvar;
      var a = t.fallbackFetch;
      var c = t.errorHandler;
      var h = t.noUseWorker;
      var l = t.finishCb;
      var u = t.header;
      var d = t.uploadHandler;
      var _ = t.mode;
      this._blockId = e;
      this._version = i;
      this._mode = _;
      this._limit = r;
      this._concurrency = o;
      this._extraParams = s;
      this._header = u || {};
      this._fallbackFetch = a;
      this._errorHandler = c;
      this._uploadHandler = d;
      this._finishCb = l;
      if (n) {
        var p = n.data;
        var f = p.block_map;
        var b = p.cursor;
        var v = p.skip_blocks;
        var C = p.concurrent;
        var S = p.next_cursors;
        var g = [];
        var y = [];
        (v || []).forEach(function (t) {
          if ((f[t] || {
            data: {
              type: ""
            }
          }).data.type === "table") {
            g.push({
              blockId: t,
              cursorSet: [],
              cursor: b
            });
          } else {
            y.push({
              blockId: t,
              cursor: b
            });
          }
        });
        if (!C) {
          S = p.has_more && b ? [b] : [];
        }
        this._remainInfo = {
          cursorL: S || [],
          tableSkipBlockCursor: g,
          foldableSkipBlockList: y,
          concurrent: C
        };
        this._clientvarMap.set(this._token, n);
      }
      document.addEventListener("freeze", this._handleFreezeEvent);
      document.addEventListener("resume", this._handleResumeEvent);
      document.addEventListener("visibilitychange", this._handleVisibilityChange);
      if (this._remainInfo && (!this._remainInfo.cursorL || this._remainInfo.cursorL.length <= 0) && (!this._remainInfo.tableSkipBlockCursor || this._remainInfo.tableSkipBlockCursor.length <= 0) && (!this._remainInfo.foldableSkipBlockList || this._remainInfo.foldableSkipBlockList.length <= 0)) {
        this._hasCompleteCache = true;
        this._useWorker = false;
      } else if (typeof Worker == "undefined" || h) {
        this._useWorker = false;
        this._runningStatus = k.NeedFallback;
        this._startMasterMode();
      } else {
        this._useWorker = true;
        this._startWorkerMode();
      }
      this._libStartTimestamp = Date.now();
      if (this._hasCompleteCache) {
        var F = this._libStartTimestamp - this._navigationStart;
        this._finishInfo = {
          fetchFinishTime: this._libStartTimestamp,
          mainFinishTime: this._libStartTimestamp,
          isFinish: true,
          fetchFinishTimeFromLibStart: 0,
          fetchFinishTimeFromNavigationStart: F,
          mainFinishTimeFromLibStart: 0,
          mainFinishTimeFromNavigationStart: F,
          normalSliceFetchedCount: 0,
          foldableSkipSliceFetchedCount: 0,
          tableSkipSliceFetchedCount: 0,
          totalSliceFetchedCount: 0
        };
        this._uploadInfo(Object.assign({
          action: fetchSyncConstants.workerEvents.FetchFinish
        }, this._finishInfo));
      }
      this._uploadInfo({
        action: fetchSyncConstants.workerEvents.LibStart,
        timestamp: this._libStartTimestamp,
        mode: this._mode
      });
    };
    t.prototype._uploadInfo = function (t) {
      if (this._uploadHandler) {
        var e = t.timestamp || Date.now();
        this._uploadHandler(Object.assign(t, {
          token: b(this._token || ""),
          useWorker: Number(this._useWorker),
          stage: this._stage,
          blockId: this._blockId,
          version: this._version,
          limit: this._limit,
          concurrency: this._concurrency,
          useCache: +!!this._remainInfo,
          hasCompleteCache: Number(this._hasCompleteCache),
          remainInfo: this._remainInfo,
          extraParams: this._extraParams,
          header: this._header,
          frozen: this._frozen,
          timeFromLibStart: e - this._libStartTimestamp,
          timeFromNavigationStart: e - this._navigationStart
        }));
      }
    };
    t.prototype._getCookie = function (t) {
      return window.document.cookie.split("; ").reduce(function (t, e) {
        var i = e.split("=");
        var r = i[0];
        var o = i[1];
        if (r && o !== undefined) {
          t[r] = o;
        }
        return t;
      }, {})[t];
    };
    t.prototype._workerFetchStart = function (t) {
      this._uploadInfo({
        action: fetchSyncConstants.workerEvents.WorkerFetchStart,
        timestamp: t
      });
    };
    t.prototype._startWorkerMode = function () {
      var t = this;
      this._worker = new D();
      this._worker.addEventListener("message", function (e) {
        var i = e.data;
        switch (i.action) {
          case fetchSyncConstants.lifecycleEvents.WorkerStart:
            var r = i.postData;
            t._workerFetchStart(r.startTimestamp);
            break;
          case fetchSyncConstants.lifecycleEvents.Clientvar:
            var o = i.postData;
            t._fetchSuccess(o.clientvar, o.id);
            break;
          case fetchSyncConstants.lifecycleEvents.FetchError:
            var s = i.postData;
            t._fetchError(s.error, s.id);
            break;
          case fetchSyncConstants.lifecycleEvents.FetchFinish:
            var n = i.postData;
            t._fetchFinish(n);
            break;
          case fetchSyncConstants.lifecycleEvents.NeedUpload:
            var a = i.postData;
            if ((a == null ? undefined : a.action) === "retry") {
              if (a.errorCode && Number(a.errorCode) === p.ColdDeleted) {
                t.hasColdDeleteError = true;
              } else {
                t.hasColdDeleteError = false;
              }
            }
            t._uploadInfo(a);
        }
      });
      this._worker.addEventListener("error", function (e) {
        if (t._errorHandler) {
          t._errorHandler(e);
        }
      });
      var e = window;
      var i = e.metaCache;
      var r = e.metaStartTime;
      var o = {
        token: this._token,
        blockId: this._blockId,
        version: this._version,
        mode: this._mode,
        limit: this._limit,
        concurrency: this._concurrency,
        extraParams: this._extraParams,
        remainInfo: this._remainInfo,
        baseUrl: this._getBaseUrl(),
        headers: U({
          "X-CSRFToken": this._getCookie("_csrf_token") || ""
        }, this._header),
        metaCache: i,
        metaStartTime: r
      };
      this._worker.postMessage({
        action: fetchSyncConstants.lifecycleEvents.Start,
        postData: o
      });
    };
    t.prototype._startMasterMode = function () {
      if (this._fallbackFetch) {
        this._runningStatus = k.Fallback;
        var t = {
          token: this._token,
          blockId: this._blockId,
          version: this._version,
          mode: this._mode,
          limit: this._limit,
          concurrency: this._concurrency,
          remainInfo: this._remainInfo,
          fetch: this._getFallbackFetchFun(this._extraParams),
          successCb: this._fetchSuccess.bind(this),
          errorCb: this._fetchError.bind(this),
          finishCb: this._fetchFinish.bind(this)
        };
        this._fetchModule = new S();
        this._fetchModule.start(t);
      }
    };
    t.prototype._getFallbackFetchFun = function (t) {
      var e = this;
      return function (i) {
        return e._fallbackFetch(U(U({}, i), t || {}));
      };
    };
    t.prototype._getBaseUrl = function () {
      if (window.origin.startsWith("https")) {
        return window.origin + W;
      } else {
        return window.origin.replace("docsource", "https") + W;
      }
    };
    t.prototype._fetchSuccess = function (t, e) {
      var i = this;
      this._clientvarMap.set(e, t);
      if (this._pendingObjMap.has(e)) {
        setTimeout(function () {
          i._pendingObjMap.get(e).resolve(t);
        }, 10);
      }
      if (t && t.data) {
        var r = Date.now();
        var o = t.data;
        var s = {
          fetchId: b(e),
          timestamp: r,
          code: t.code,
          msg: t.msg,
          isFirstTimeFetch: Number(this._isFirstTimeFetch),
          action: fetchSyncConstants.workerEvents.GetClientvar
        };
        ["concurrent", "cursor", "has_more", "next_cursors", "structure_version"].forEach(function (t) {
          s[t] = o[t];
        });
        s.block_sequence = (o.block_sequence || []).map(b);
        s.skip_blocks = (o.skip_blocks || []).map(b);
        this._uploadInfo(s);
      }
      this._isFirstTimeFetch = false;
    };
    t.prototype._fetchError = function (t, e) {
      this._clientvarErrorMap.set(e, t);
      if (this._pendingObjMap.has(e)) {
        var i;
        this._pendingObjMap.get(e).reject(t);
      }
      if ((i = this._errorHandler) !== null && i !== undefined) {
        i.call(this, t);
      }
      var r = Date.now();
      var o = Object.assign(JSON.parse(JSON.stringify(t)), {
        action: fetchSyncConstants.workerEvents.GetClientvarError,
        isFirstTimeFetch: Number(this._isFirstTimeFetch),
        timestamp: r,
        stack: t.stack,
        code: t.code
      });
      this._uploadInfo(o);
      this._isFirstTimeFetch = false;
    };
    t.prototype._fetchFinish = function (t) {
      var e = this;
      var i = Date.now();
      this._finishInfo = {
        fetchFinishTime: t.fetchFinishTime,
        mainFinishTime: i,
        isFinish: true,
        fetchFinishTimeFromLibStart: t.fetchFinishTime - this._libStartTimestamp,
        fetchFinishTimeFromNavigationStart: t.fetchFinishTime - this._navigationStart,
        mainFinishTimeFromLibStart: i - this._libStartTimestamp,
        mainFinishTimeFromNavigationStart: i - this._navigationStart,
        normalSliceFetchedCount: t.normalSliceCount,
        foldableSkipSliceFetchedCount: t.foldableSliceCount,
        tableSkipSliceFetchedCount: t.tableSliceCount,
        totalSliceFetchedCount: t.normalSliceCount + t.foldableSliceCount + t.tableSliceCount
      };
      this._uploadInfo(Object.assign({
        action: fetchSyncConstants.workerEvents.FetchFinish
      }, this._finishInfo));
      if (this._finishCb) {
        this._finishCb(this._finishInfo, function () {
          return Array.from(e._clientvarMap.values()).map(function (t) {
            return t.data;
          });
        });
      }
    };
    t.prototype._reset = function () {
      if (this._worker) {
        this._worker.postMessage({
          action: fetchSyncConstants.lifecycleEvents.Destroy
        });
        this._worker = undefined;
        this._uploadInfo({
          action: fetchSyncConstants.workerEvents.PostWorkerDestroy,
          timestamp: Date.now()
        });
      }
      if (this._fetchModule) {
        this._fetchModule.destroy();
        this._fetchModule = undefined;
      }
      document.removeEventListener("freeze", this._handleFreezeEvent);
      document.removeEventListener("resume", this._handleResumeEvent);
      document.removeEventListener("visibilitychange", this._handleVisibilityChange);
      this._libStartTimestamp = 0;
      this._useWorker = undefined;
      this._isFirstTimeFetch = true;
      this._hasCompleteCache = false;
      this._finishInfo = {
        fetchFinishTime: 0,
        mainFinishTime: 0,
        isFinish: false
      };
      this._runningStatus = k.WebWorker;
      this._blockId = undefined;
      this._version = undefined;
      this._limit = undefined;
      this._concurrency = undefined;
      this._extraParams = undefined;
      this._header = {};
      this._remainInfo = undefined;
      this._clientvarMap = new Map();
      this._clientvarErrorMap = new Map();
      this._pendingObjMap.forEach(function (t) {
        window.clearTimeout(t.timeout);
        t.timeout = undefined;
        t.timeoutCb = undefined;
      });
      this._pendingObjMap.clear();
      this._pendingObjMap = new Map();
      this._fallbackFetch = undefined;
      this._errorHandler = undefined;
    };
    t.prototype.getClientvar = function (t) {
      if (this._clientvarMap.has(t)) {
        return this._clientvarMap.get(t);
      } else if (this._clientvarErrorMap.has(t)) {
        return this._clientvarErrorMap.get(t);
      } else {
        return undefined;
      }
    };
    t.prototype.getFinishInfo = function () {
      return this._finishInfo;
    };
    t.prototype.fetchClientvar = function (t) {
      var e = this;
      if (this._clientvarMap.has(t)) {
        return Promise.resolve(this._clientvarMap.get(t));
      }
      if (this._clientvarErrorMap.has(t)) {
        return Promise.reject(this._clientvarErrorMap.get(t));
      }
      if (this._pendingObjMap.has(t)) {
        return this._pendingObjMap.get(t).promise;
      }
      var i = {};
      var r = new Promise(function (r, o) {
        i.resolve = function () {
          var o = [];
          var s = 0;
          for (; s < arguments.length; s++) {
            o[s] = arguments[s];
          }
          clearTimeout(i.timeout);
          i.promise = undefined;
          i.timeoutCb = undefined;
          e._pendingObjMap.delete(t);
          r.apply(e, o);
        };
        i.reject = function () {
          var r = [];
          var s = 0;
          for (; s < arguments.length; s++) {
            r[s] = arguments[s];
          }
          clearTimeout(i.timeout);
          i.promise = undefined;
          i.timeoutCb = undefined;
          e._pendingObjMap.delete(t);
          o.apply(e, r);
        };
        i.timeoutCb = function () {
          var i;
          var r = {
            code: fetchSyncConstants.errorCodes.outSideFetchTimeout,
            message: "outside fetch timeout!",
            id: b(t)
          };
          e._clientvarErrorMap.set(t, r);
          e._pendingObjMap.delete(t);
          o.call(e, r);
          if ((i = e._errorHandler) !== null && i !== undefined) {
            i.call(e, r);
          }
        };
        i.timeout = window.setTimeout(i.timeoutCb, 425000);
      });
      i.promise = r;
      this._pendingObjMap.set(t, i);
      return r;
    };
    t.prototype.askClientvar = function (t) {
      if (this._clientvarMap.has(t)) {
        return fetchSyncConstants.statusStates.Success;
      } else if (this._clientvarErrorMap.has(t)) {
        return fetchSyncConstants.statusStates.Error;
      } else {
        return fetchSyncConstants.statusStates.Pending;
      }
    };
    t.prototype.getRemainInfo = function () {
      return this._remainInfo;
    };
    t.prototype.retryTable = function (t, e) {
      var i = e || t;
      this._clientvarMap.delete(i);
      this._clientvarErrorMap.delete(i);
      switch (this._runningStatus) {
        case k.NeedFallback:
          return;
        case k.WebWorker:
          if (this._worker) {
            this._worker.postMessage({
              action: fetchSyncConstants.lifecycleEvents.RetryTable,
              postData: {
                blockId: t,
                cursor: e
              }
            });
          }
          return;
        case k.Fallback:
          if (this._fetchModule) {
            this._fetchModule.retryTable(t, e);
          }
          return;
        case k.Finish:
      }
    };
    t.prototype.destroy = function () {
      this._reset();
    };
    return t;
  }();
  require.r(exports);
  require.d(exports, {
    InteractionModule: function () {
      return K;
    }
  });
}