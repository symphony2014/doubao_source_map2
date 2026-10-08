// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NI' to 'recordErrorCodes'
// - Renamed export 'gY' to 'checkRecordPending'
// - Renamed export 'pI' to 'loadRecordAndBlock'
// - Renamed export 'qy' to 'ensureBlockReady'
// - Renamed export 'rE' to 'fetchRecordChain'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 561102
         */
module.exports = function (module, exports, require) {
  var n;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var clientVarProviderAccess = require("client-var-provider-access") /*id: 503677*/;
  (n = {}).RECORD_FETCH_ERROR = "record_fetch_error";
  n.RECORD_NOT_EXIST = "record_not_exist";
  n.HIDE_LOADING_TIMEOUT = "hide_loading_timeout";
  n.BLOCK_NOT_FOUND = "block_not_found";
  n.BLOCK_READY_ERROR = "block_ready_error";
  n.HEART_BEATS_TIMEOUT = "heart_beats_timeout";
  let u = n;
  function h(e, i, r) {
    if (!i.hasRecordByRecordId(e)) {
      return true;
    }
    let n = i.getRecordByRecordId(e);
    return !!n && docxEditorCore.isPendingType(n.snapshot.type) && (r || !!n.snapshot.sliced);
  }
  async function f(e, i, r) {
    if (e.isRecordFetched(i)) {
      e.setStartId(i, true);
    } else if (r) {
      await new Promise(n => {
        if (r.isFetchAllDone) {
          e.setStartId(i, true);
          n();
          return;
        }
        let o = null;
        let l = () => {
          if (o != null) {
            o.unsubscribe();
          }
          o = null;
          n();
        };
        o = r.clientvarAddedIntoStorage$.subscribe(() => {
          if (e.isRecordFetched(i)) {
            e.setStartId(i, true);
            l();
          } else if (r.isFetchAllDone) {
            l();
          }
        });
      });
    }
  }
  async function g(e, i, r) {
    let {
      editorAPI: n
    } = e;
    let o = n.getService(lazyConsumerToken.lazyConsumerToken);
    let l = n.getService(clientVarProviderAccess.getClientProvider);
    let c = n.getService(lazyRecordStatusToken.lazyRecordStatus, {
      optional: true
    });
    let {
      dataService: g
    } = n;
    let p = [i];
    if (!!h(i, g) && !(c == null ? undefined : c.isAllDone)) {
      await f(o, i, c);
    }
    if (r) {
      if (g.hasRecordByRecordId(i)) {
        return undefined;
      } else {
        return u.RECORD_NOT_EXIST;
      }
    }
    while (p.length > 0) {
      let e = p.pop();
      if (h(e, g, true) && !(await l.fetchRecord(e))) {
        return u.RECORD_FETCH_ERROR;
      }
      let i = g.getRecordByRecordId(e);
      let r = i == null ? undefined : i.snapshot.parent_id;
      if (r && r !== g.rootRecordId) {
        p.push(r);
      }
    }
  }
  async function p(e, i, r = {}) {
    let n = i.editorAPI.getService(collabTriggersProvider.collabProvider, {
      optional: true
    });
    if (!n) {
      return;
    }
    let o = await g(i, e);
    if (o) {
      return o;
    }
    let {
      version: l,
      priorityConfig: s
    } = r;
    if (!n.isInited) {
      let e = await m(n, s == null ? undefined : s.timeout);
      if (e) {
        return e;
      }
    }
    let a = n.getSyncVersion();
    if (a && l && l > a) {
      let o = await v(e, i, n.sync, r);
      if (o) {
        return o;
      }
    }
    return y(e, i, r);
  }
  async function m(e, i = 5000) {
    return await new Promise(r => {
      let n;
      let o = () => {
        if (e != null) {
          e.handleInitFinish("off", o);
        }
        clearTimeout(n);
        r(undefined);
      };
      if (e != null) {
        e.handleInitFinish("on", o);
      }
      n = setTimeout(() => {
        if (e != null) {
          e.handleInitFinish("off", o);
        }
        r(u.HEART_BEATS_TIMEOUT);
      }, i);
    });
  }
  async function v(e, i, r, n) {
    let o = await b(i, r, n);
    return o || (await g(i, e));
  }
  async function b(e, i, r) {
    let {
      version: n,
      priorityConfig: l,
      needForceSendHeartbeat: s = true
    } = r;
    let a = e.editorAPI.getService(collabTriggersProvider.collabProvider, {
      optional: true
    });
    return await new Promise(e => {
      let r;
      let c = l => {
        if (l >= n) {
          i.off(collaborativeEditingFlowSyncModule.GM.VersionChange, c);
          clearTimeout(r);
          let {
            buffer: n
          } = a;
          if (n == null ? undefined : n.bufferPool.length) {
            n.consume(undefined, true);
          }
          e(undefined);
        }
      };
      i.on(collaborativeEditingFlowSyncModule.GM.VersionChange, c);
      if (s) {
        i.forceSendHeartbeats("block_ready");
      }
      r = setTimeout(() => {
        i.off(collaborativeEditingFlowSyncModule.GM.VersionChange, c);
        e(u.HEART_BEATS_TIMEOUT);
      }, (l == null ? undefined : l.timeout) || 5000);
    });
  }
  async function y(e, i, r = {}) {
    let {
      priorityConfig: n
    } = r;
    let o = i.getBlockStructsByRecordId(e)[0];
    if (!o) {
      return u.BLOCK_NOT_FOUND;
    }
    try {
      await i.editorAPI.moduleService.loadBlockModuleByBlockId(o.id, {
        withAncestors: true,
        ...n
      });
    } catch (e) {
      return u.BLOCK_READY_ERROR;
    }
  }
  require.d(exports, {
    recordErrorCodes: function () {
      return u;
    },
    checkRecordPending: function () {
      return m;
    },
    loadRecordAndBlock: function () {
      return p;
    },
    ensureBlockReady: function () {
      return y;
    },
    fetchRecordChain: function () {
      return g;
    }
  });
}