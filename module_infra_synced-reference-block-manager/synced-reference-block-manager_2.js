// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'SyncedReferenceBlockManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 806884
         */
module.exports = function (module, exports, require) {
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var blockTreeUtilities = require("block-tree-utilities") /*id: 183833*/;
  var assertErrorHandler = require("assert-error-handler") /*id: 262641*/;
  var utilityHelpers = require("utility-helpers") /*id: 317609*/;
  let m = {
    apool: {
      nextNum: 0,
      numToAttrib: {}
    },
    initialAttributedTexts: {
      attribs: {
        0: ""
      },
      text: {
        0: ""
      }
    }
  };
  let k = async (e, i, n, s) => {
    for (let r = 0; r < i; r++) {
      let o = r + 1;
      try {
        return await e();
      } catch (e) {
        if (o >= i) {
          throw e;
        }
        if (s != null) {
          s(e, r);
        }
      }
      let l = typeof n == "number" ? n : n(o);
      await utilityHelpers.delay(l);
    }
    throw Error("retry times out of limit");
  };
  var easysyncJson0Text0OperationalTransform = require("easysync-json0-text0-operational-transform") /*id: 176294*/;
  var syncedReferenceBlockManager_1 = require("synced-reference-block-manager_1") /*id: 259219*/;
  var arrayMaxByMatcherUtil = require("array-max-by-matcher-util") /*id: 136425*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let I = () => typeof performance === "undefined" ? Date.now() : performance.now();
  class T {
    get hasStarted() {
      return this.initialTime !== null;
    }
    flush() {
      if (!this.hasStarted || this.prevUpdateTime === null || !this.updateLength || !this.stuckRecords.length) {
        return;
      }
      assertErrorHandler.assertError(this.initialTime !== null);
      let e = this.stuckRecords.filter(e => e.duration > 600 && e.duration <= 1000);
      let i = arraySumByMatcher.sumByMatcher(e, e => e.duration);
      let n = this.stuckRecords.filter(e => e.duration > 1000 && e.duration <= 3000);
      let s = arraySumByMatcher.sumByMatcher(n, e => e.duration);
      let o = this.stuckRecords.filter(e => e.duration > 3000);
      let l = arraySumByMatcher.sumByMatcher(o, e => e.duration);
      let a = arrayMaxByMatcherUtil.arrayMaxByMatcher(this.stuckRecords, e => e.duration);
      assertErrorHandler.assertError(a);
      let c = {
        stuck_duration: arraySumByMatcher.sumByMatcher(this.stuckRecords, e => e.duration),
        full_duration: I() - this.initialTime,
        stuck_count: this.stuckRecords.length,
        content_length: this.updateLength,
        stuck_duration_600ms: i,
        stuck_duration_600ms_count: e.length,
        stuck_duration_1000ms: s,
        stuck_duration_1000ms_count: n.length,
        stuck_duration_3000ms: l,
        stuck_duration_3000ms_count: o.length,
        stuck_max_duration: a.duration
      };
      this.handleTraceStuck(c);
    }
    start() {
      if (this.hasStarted) {
        return;
      }
      let e = I();
      this.prevUpdateTime = e;
      this.initialTime = e;
    }
    reset() {
      this.stuckRecords = [];
      this.updateLength = 0;
      this.prevUpdateTime = null;
      this.initialTime = null;
      this.lastPauseTime = null;
    }
    push(e) {
      this.updateLength += e;
      let i = this.prevUpdateTime;
      let n = I();
      this.prevUpdateTime = n;
      if (i !== null) {
        this.stuckRecords.push({
          duration: n - i
        });
      }
    }
    pause() {
      if (this.hasStarted && this.lastPauseTime === null) {
        this.lastPauseTime = I();
      }
    }
    resume() {
      if (!this.hasStarted || this.lastPauseTime === null || this.prevUpdateTime === null) {
        return;
      }
      let e = I() - this.lastPauseTime;
      this.prevUpdateTime += e;
      this.lastPauseTime = null;
    }
    flushAndStop() {
      if (this.hasStarted) {
        this.flush();
        this.reset();
      }
    }
    constructor(e) {
      this.stuckRecords = [];
      this.updateLength = 0;
      this.prevUpdateTime = null;
      this.initialTime = null;
      this.lastPauseTime = null;
      let {
        onTraceStuck: i,
        autoStart: n = true
      } = e;
      this.handleTraceStuck = i ?? emptyExportFunction.emptyFunction;
      if (n) {
        this.start();
      }
    }
  }
  class E {
    start() {
      if (!this.isExecuting) {
        this.isExecuting = true;
        this.setTimer(() => {
          this.isExecuting = false;
        });
      }
    }
    stop() {
      if (this.isExecuting) {
        this.isExecuting = false;
        this.clearTimer();
      }
    }
    flush() {
      let e = this.timeQueue.length;
      if (e) {
        this.handleExecute(e);
        this.timeQueue.unshift(0);
      }
    }
    push(...e) {
      this.timeQueue.push(...e);
      this.start();
    }
    isRunning() {
      return this.isExecuting;
    }
    destory() {
      this.stop();
      this.flush();
    }
    constructor({
      onExecute: e
    }) {
      this.timeQueue = [];
      this.isExecuting = false;
      this.handleExecute = e;
    }
  }
  class _ extends E {
    reset() {
      this.executeHandler = undefined;
      this.prevTime = undefined;
    }
    setTimer(e) {
      let i = performance.now();
      this.executeHandler = requestAnimationFrame(n => {
        if (!this.timeQueue.length) {
          if (e != null) {
            e();
          }
          this.reset();
          return;
        }
        let r = [];
        let o = 0;
        let l = n - (this.prevTime ?? i);
        for (this.prevTime = n; o < l && this.timeQueue.length;) {
          let e = this.timeQueue.shift();
          assertErrorHandler.assertError(e);
          r.push(e);
          o += e;
        }
        let a = r.length;
        if (a) {
          this.handleExecute(a);
        }
        this.setTimer(e);
      });
    }
    clearTimer() {
      if (!isUndefinedCheck.isUndefined(this.executeHandler)) {
        cancelAnimationFrame(this.executeHandler);
        this.executeHandler = undefined;
      }
    }
  }
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  class R extends E {
    setTimer(e) {
      if (!this.timeQueue.length) {
        if (e != null) {
          e();
        }
        return;
      }
      let i = [];
      let n = 0;
      while (n < 5 && this.timeQueue.length) {
        let e = this.timeQueue.shift();
        assertErrorHandler.assertError(e);
        i.push(e);
        n += e;
      }
      assertErrorHandler.assertError(!!i.length);
      this.executeHandler = setTimeout(() => {
        if (i.length) {
          this.handleExecute(i.length);
        }
        this.setTimer(e);
      }, arraySumHelper.sumArray(i));
    }
    clearTimer() {
      clearTimeout(this.executeHandler);
    }
  }
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  class w extends eventEmitterWrapper_1.eventEmitter {
    emitTick(e = 1) {
      if (!(e <= 0)) {
        for (let i of numericRangeUtil.createRange(e)) {
          this.emit("tick");
        }
        this.emit("tickBatch", e);
      }
    }
  }
  let D = () => typeof performance !== "undefined" ? performance.now() : Date.now();
  class P extends w {
    pushToExecutor(e) {
      this.executor.push(...numericRangeUtil.createRange(0, e).map(() => 30 / e));
    }
    execute() {
      let e = null;
      this.intervalHandler = setInterval(() => {
        if (this.executor.isRunning() || !this.isStarted) {
          return;
        }
        let i = Math.max(this.fullEndPosition, this.expectedBufferSize * 2) - this.currentPosition - this.expectedBufferSize;
        let n = this.elasticCoefficient * i;
        let s = D();
        let r = e;
        e = D();
        let o = r ? Math.max(s - r, 30) : 30;
        if (this.currentPosition >= this.fullEndPosition) {
          this.currentSpeed = Math.max(this.currentSpeed * 0.9, this.resumeSpeed);
        } else {
          this.currentSpeed = Math.min(Math.max(0, this.currentSpeed + o * n), this.maxSpeed);
        }
        if (this.currentSpeed < 0.0005) {
          this.currentSpeed = 0;
        }
        let l = this.currentSpeed < 0.0005 ? 0 : this.currentSpeed;
        let a = this.currentPosition;
        this.currentPosition = Math.min(this.fullEndPosition, this.currentPosition + o * l);
        let c = this.currentPosition - a + this.remainDelta;
        let u = Math.floor(c);
        this.remainDelta = c - u;
        if (u) {
          this.pushToExecutor(u);
        }
      }, 30);
    }
    shift(e) {
      if (!this.isDestoryed) {
        this.isStarted = true;
        this.fullEndPosition += e;
      }
    }
    destory() {
      clearInterval(this.intervalHandler);
      this.executor.destory();
      this.handleInitDestory();
      this.isStarted = false;
      this.isDestoryed = true;
    }
    constructor(e = {}) {
      super();
      this.currentPosition = 0;
      this.fullEndPosition = 0;
      this.isDestoryed = false;
      this.remainDelta = 0;
      let {
        initialSpeed: i = 20,
        expectedBufferSize: n = 15,
        elasticCoefficient: s = 1 / 700 / 1000,
        resumeSpeed: r = 2,
        maxSpeed: o = Infinity,
        lazyStart: l = true,
        raf: a = true
      } = e;
      this.currentSpeed = i / 1000;
      this.expectedBufferSize = n;
      this.elasticCoefficient = s;
      this.resumeSpeed = r / 1000;
      this.maxSpeed = o / 1000;
      this.executor = new (a ? _ : R)({
        onExecute: e => {
          this.emitTick(e);
        }
      });
      this.isStarted = !l;
      this.execute();
      let c = this.shift.bind(this);
      this.on("shift", c);
      this.handleInitDestory = () => {
        this.off("shift", c);
      };
    }
  }
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var zeroConstantModule = require("zero-constant-module") /*id: 785143*/;
  var contentDeltaClass_1 = require("content-delta-class_1") /*id: 564245*/;
  var deltaPatchOperations = require("delta-patch-operations") /*id: 713456*/;
  var changesetDeltaUtilities = require("changeset-delta-utilities") /*id: 803911*/;
  let U = e => {
    let i = changesetDeltaUtilities.getContentDelta(e);
    let n = [];
    let s = changesetDeltaUtilities.sliceZoneDelta({
      target: i,
      start: 0,
      end: 1
    });
    let r = changesetDeltaUtilities.sliceZoneDelta({
      target: i,
      start: 1,
      end: changesetDeltaUtilities.getTotalOpLength(i)
    });
    let o = new contentDeltaClass_1.ContentDelta({
      ops: deepCloneWrapper_1.deepClone(s.ops)
    });
    let a = 1;
    for (let e of r.ops) {
      let {
        insert: i,
        attributes: s
      } = e ?? {};
      if (isStringTypeCheck.isString(i)) {
        for (let e = 0; e < i.length; e++) {
          let r = i[e];
          let l = new contentDeltaClass_1.ContentDelta({
            zoneId: zeroConstantModule.versionValue
          });
          l.retain(a);
          l.insert(r, s);
          let c = changesetDeltaUtilities.deltaSetToInitialTexts(o);
          let u = changesetDeltaUtilities.packToZoneChangesets(changesetDeltaUtilities.createChangeset({
            base: c,
            delta: l
          }));
          o.insert(r, s);
          n.push({
            changeSet: u,
            base: c
          });
          a++;
        }
      }
    }
    return {
      first: changesetDeltaUtilities.deltaSetToInitialTexts(s),
      chunks: n
    };
  };
  let Q = (e, i) => {
    let n = changesetDeltaUtilities.getContentDelta(e);
    let {
      ops: s
    } = changesetDeltaUtilities.changesetToDelta(changesetDeltaUtilities.unpackZoneChangesets(i));
    let r = 0;
    let o = 0;
    let l = 0;
    let a = [];
    let c = e => {
      let i = changesetDeltaUtilities.deltaSetToInitialTexts(n);
      let s = changesetDeltaUtilities.packToZoneChangesets(changesetDeltaUtilities.createChangeset({
        base: i,
        delta: e
      }));
      a.push({
        changeSet: s,
        base: i
      });
      n = n.compose(e);
    };
    let u = () => {
      o += 1;
      l = 0;
    };
    while (o < s.length) {
      let e = s[o];
      let i = deltaPatchOperations.getOpLength(e);
      if (!i) {
        u();
        continue;
      }
      assertErrorHandler.assertError(l < i);
      if (e.retain) {
        if (!isEmptyUtil.isEmpty(e.attributes)) {
          c(new contentDeltaClass_1.ContentDelta({
            zoneId: zeroConstantModule.versionValue
          }).retain(r).retain(e.retain, e.attributes));
        }
        r += i;
        u();
      } else if (e.delete) {
        c(new contentDeltaClass_1.ContentDelta({
          zoneId: zeroConstantModule.versionValue
        }).retain(r).delete(1));
        l += 1;
      } else if (e.insert && isStringTypeCheck.isString(e.insert)) {
        let i = e.insert[l];
        assertErrorHandler.assertError(i);
        c(new contentDeltaClass_1.ContentDelta({
          zoneId: zeroConstantModule.versionValue
        }).retain(r).insert(i, e.attributes));
        r += 1;
        l += 1;
      }
      if (l >= i) {
        u();
      }
    }
    return a;
  };
  let z = (e, i) => ({
    op: e,
    base: i
  });
  let j = e => e.map(({
    changeSet: e,
    base: i
  }) => z({
    p: ["text"],
    subType: {
      t: "easysync",
      o: e
    }
  }, i));
  let F = ({
    item: e,
    text: i
  }) => {
    let n = syncedReferenceBlockManager_1.isInitialText(e);
    if (n) {
      var s;
      let {
        first: i,
        chunks: r
      } = U(n);
      let o = {
        p: [],
        action: {
          ...e.action,
          oi: {
            ...((s = e.action) == null ? undefined : s.oi),
            text: i
          }
        }
      };
      let l = j(r);
      return [z(o), ...l];
    }
    let r = syncedReferenceBlockManager_1.getZoneChangesets(e);
    if (r) {
      return j(Q(deepCloneWrapper_1.deepClone(i), r));
    } else {
      return [z(e)];
    }
  };
  class V {
    set value(e) {
      if (this._value !== e) {
        this._value = e;
        this.refresh();
      }
    }
    get value() {
      return this._value;
    }
    waitFor(e, i = Object.is) {
      return new Promise((n, s) => {
        if (i(this._value, e)) {
          n();
          return;
        }
        let r = this.currentId;
        this.currentId++;
        this.subscribeMap.set(r, (r = false) => r ? (s(Error("Signal is force closed by destory before subscribe")), null) : !!i(this._value, e) && (n(), true));
      });
    }
    refresh(e = false) {
      for (let [i, n] of this.subscribeMap.entries()) {
        if (e) {
          n(true);
          this.subscribeMap.delete(i);
          continue;
        }
        if (n()) {
          this.subscribeMap.delete(i);
          continue;
        }
      }
    }
    destory() {
      this.refresh(true);
    }
    constructor(e) {
      this.subscribeMap = new Map();
      this.currentId = 0;
      this._value = e;
    }
  }
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  class G {
    get length() {
      return this.queue.length;
    }
    push(e) {
      let i = this.pushIndex++;
      this.queue.push({
        index: i,
        ops: e
      });
      return i;
    }
    popAll(e = false) {
      let i = this.queue.splice(0);
      let n = i.flatMap(e => e.ops);
      let s = i.map(e => e.index);
      if (e) {
        this.setFinished(s);
      }
      return {
        ops: n,
        indexes: s
      };
    }
    setFinished(e) {
      let i = throttledOrderByUtil.throttledOrderBy(utilityHelpers.normalizeToArray(e));
      if (i.length) {
        for (let e of i) {
          this.finishSubject.next(e);
        }
        this.finishedIndexes = dataProcessor.processData([...this.finishedIndexes, ...i]);
      }
    }
    async waitFinished(e) {
      if (!this.finishedIndexes.includes(e)) {
        return new Promise(i => {
          let n = this.finishSubject.subscribe({
            next: s => {
              if (s === e) {
                n.unsubscribe();
                this.subscriptions = this.subscriptions.filter(e => e !== n);
                i();
              }
            },
            error: () => {
              i();
            },
            complete: () => {
              i();
            }
          });
          this.subscriptions.push(n);
        });
      }
    }
    destory() {
      this.finishSubject.complete();
      for (let e of this.subscriptions) {
        e.unsubscribe();
      }
      this.subscriptions = [];
    }
    constructor() {
      this.pushIndex = 0;
      this.queue = [];
      this.finishSubject = new observableSubjectClass.Subject();
      this.finishedIndexes = [];
      this.subscriptions = [];
    }
  }
  class Y {
    handleApplySnapshotError(e, i) {
      let n = blockTreeUtilities.isSnapshotApplyError(i) ? i.extra : {};
      this.handleUnbreakError(i, {
        scene: e,
        ...safeObjectPropertyMap.safeObjectMap(n, e => JSON.stringify(e))
      });
    }
    handleSubmit(e) {
      let i = this.getCompensationMapBySubmitOps(e);
      this.rawHandleSubmit({
        operations: e,
        compensationMap: i
      });
      let n = arraySumByMatcher.sumByMatcher(e.flatMap(e => e.ops), syncedReferenceBlockManager_1.getOpLength);
      this.tracer.push(n);
    }
    applyToAfterSnapshot({
      id: e,
      op: i
    }) {
      this.afterSnapshotManager.apply({
        [e]: {
          id: e,
          payload: {
            ops: [i]
          }
        }
      }, {
        purify: false
      });
    }
    pushToOrderedQueue(e) {
      let {
        payload: i
      } = e;
      let n = syncedReferenceBlockManager_1.getBlockIdFromOp(i, false);
      let s = this.cachedIdPathMap[n];
      if (!s) {
        throw Error(`Pushing operation cannot be found in snapshot: ${n}`);
      }
      let r = syncedReferenceBlockManager_1.buildPath(i, s);
      let l = 0;
      while (l < this.orderedQueue.length) {
        let {
          payload: e
        } = this.orderedQueue[l];
        let i = syncedReferenceBlockManager_1.getBlockIdFromOp(e);
        let n = this.cachedIdPathMap[i];
        if (!n) {
          l++;
          continue;
        }
        let s = syncedReferenceBlockManager_1.buildPath(e, n);
        if (deepEqualUtil_1.deepEqual(r, s)) {
          l++;
          continue;
        }
        if (syncedReferenceBlockManager_1.comparePaths(r, s)) {
          break;
        }
        l++;
      }
      this.orderedQueue.splice(l, 0, e);
    }
    shiftOrderedQueueSameGroup() {
      let e = [];
      let i = null;
      while (this.orderedQueue.length && (i === null || this.orderedQueue[0].groupId === i)) {
        let n = this.orderedQueue.shift();
        assertErrorHandler.assertError(n);
        let {
          groupId: s,
          payload: r
        } = n;
        e.push(r);
        i = s;
      }
      return e;
    }
    splitToChunkQueue() {
      if (!this.orderedQueue.length) {
        return;
      }
      let e = this.shiftOrderedQueueSameGroup();
      assertErrorHandler.assertError(!!e.length);
      let i = [];
      for (let a of e) {
        var n;
        var s;
        var r;
        var o;
        let {
          id: e,
          op: c
        } = a;
        let u = deepCloneWrapper_1.deepClone((n = this.afterSnapshotManager.value) == null ? undefined : n[e]);
        this.applyToAfterSnapshot(a);
        let h = deepCloneWrapper_1.deepClone((s = this.afterSnapshotManager.value) == null ? undefined : s[e]);
        let d = (o = u ?? h) == null ? undefined : (r = o.data) == null ? undefined : r.type;
        let p = utilityHelpers.invokeFunction(() => {
          if (d === "revision") {
            return [z(c)];
          } else {
            return F({
              item: c,
              text: (u == null ? undefined : u.data.text) ?? m
            });
          }
        });
        i.push(...p.map(({
          op: i,
          base: n
        }) => ({
          id: e,
          op: i,
          base: n
        })));
      }
      this.chunkQueue.push(...i);
    }
    shiftUntilTextChange() {
      let e = [];
      while (this.chunkQueue.length) {
        let i = this.chunkQueue.shift();
        assertErrorHandler.assertError(i);
        e.push(i);
        if (syncedReferenceBlockManager_1.isTextOrZoneOp(i.op)) {
          break;
        }
      }
      return e;
    }
    getCompensationMapBySubmitOps(e) {
      let i = syncedReferenceBlockManager_1.flattenBlockOps(e).filter(e => syncedReferenceBlockManager_1.isCreateOp(e.op));
      let n = {};
      for (let e of i) {
        let {
          id: i,
          op: s
        } = e;
        let r = this.compensationVersionMap[i];
        if (isUndefinedCheck.isUndefined(r)) {
          continue;
        }
        let o = syncedReferenceBlockManager_1.getCreateData(s);
        assertErrorHandler.assertError(o);
        n[e.id] = {
          id: i,
          version: r,
          data: o
        };
      }
      return n;
    }
    consumeChunk(e) {
      let i = [];
      for (let n of numericRangeUtil.createRange(e)) {
        assertErrorHandler.assertError(n >= 0);
        if (!this.chunkQueue.length) {
          this.splitToChunkQueue();
        }
        let e = this.shiftUntilTextChange();
        i.push(...e);
      }
      let n = syncedReferenceBlockManager_1.composeZoneChangesets(i);
      if (n.length) {
        this.handleSubmit(n);
      }
    }
    async handleFetchBlocksRecursively(e) {
      let {
        handleFetchBlocks: i
      } = this;
      if (!i) {
        this.handleUnbreakError(Error("Need fetch miss blocks when splitting but without onFetchBlocks provide"), {
          ids: e,
          scene: "no_fetch_blocks_provide"
        });
        return null;
      }
      let n = e => k(i.bind(this, e), 3, 200);
      let s = {};
      let r = e.slice();
      let o = [];
      while (r.length) {
        let e = r.splice(0);
        o.push(...e);
        let i = await n(e);
        safePropertyAssignUtil.safePropertyAssign(s, i);
        let l = dataProcessor.processData(objectValuesHelper.getObjectValues(i).map(e => blockTreeUtilities.getBlockChildrenIds(e.data)).flat()).filter(e => !o.includes(e));
        r.push(...l);
      }
      return {
        ids: o.filter(e => !this.pushedTextIds.has(e)),
        blockMap: s
      };
    }
    async getMissingObjectCreateContext(e) {
      let i = {
        ops: [],
        blockMap: {}
      };
      if (!e.length) {
        return i;
      }
      let n = await this.handleFetchBlocksRecursively(e);
      if (!n) {
        return i;
      }
      let {
        ids: s,
        blockMap: r
      } = n;
      let o = [];
      for (let e of s) {
        var l;
        let i = (l = r[e]) == null ? undefined : l.data;
        if (!i) {
          this.handleUnbreakError(Error("Missing block when fetched by onFetchBlocks"), {
            id: e,
            scene: "miss_block_after_fetch"
          });
          continue;
        }
        o.push({
          id: e,
          op: {
            p: [],
            action: {
              oi: i
            }
          }
        });
      }
      return {
        ops: o,
        blockMap: r
      };
    }
    async shiftLazyCompensationQueue(e = false) {
      let i = this.lazyCompensationQueue.splice(0);
      let n = dataProcessor.processData(i.map(e => syncedReferenceBlockManager_1.getInsertedBlockId(e.op)).filter(isStringTypeCheck.isString));
      try {
        let {
          ops: e,
          blockMap: r
        } = await this.getMissingObjectCreateContext(n);
        safePropertyAssignUtil.safePropertyAssign(this.compensationVersionMap, safeObjectPropertyMap.safeObjectMap(r, e => e.version));
        return {
          liOps: i,
          oiOps: e
        };
      } catch (n) {
        this.handleUnbreakError(n, {
          scene: "compensation_error"
        });
        if (e) {
          return {
            liOps: i,
            oiOps: []
          };
        }
        this.lazyCompensationQueue.push(...i);
        return {
          liOps: [],
          oiOps: []
        };
      }
    }
    _popUnnecessaryCompensationOps(e) {
      let i = e.filter(e => syncedReferenceBlockManager_1.isCreateOp(e.op));
      let n = e.filter(e => syncedReferenceBlockManager_1.isDeleteOp(e.op));
      let s = i.map(e => e.id);
      let r = n.map(e => syncedReferenceBlockManager_1.isInsertOp(e.op)).filter(isStringTypeCheck.isString);
      let o = [...s, ...r];
      let l = this.lazyCompensationQueue.filter(e => collectionIncludesUtil.includes(o, syncedReferenceBlockManager_1.getInsertedBlockId(e.op)));
      this.lazyCompensationQueue = this.lazyCompensationQueue.filter(e => !l.includes(e));
      let a = l.filter(e => !r.includes(syncedReferenceBlockManager_1.getBlockIdFromOp(e)));
      let c = l.map(e => syncedReferenceBlockManager_1.getBlockIdFromOp(e));
      let u = n.filter(e => c.includes(syncedReferenceBlockManager_1.getBlockIdFromOp(e)));
      this.lazyCompensationQueue = this.lazyCompensationQueue.filter(e => !a.includes(e));
      let h = a.map(e => syncedReferenceBlockManager_1.getInsertedBlockId(e.op)).filter(isStringTypeCheck.isString);
      let d = i.filter(e => h.includes(e.id));
      this.compensationIds = this.compensationIds.filter(e => !h.includes(e));
      return {
        liOps: a,
        oiOps: d,
        excludeOps: u
      };
    }
    popUnnecessaryCompensationOpsWithInsertOps(e) {
      let {
        liOps: i,
        excludeOps: n
      } = this._popUnnecessaryCompensationOps(e);
      return {
        liOps: i,
        excludeOps: n
      };
    }
    popUnnecessaryCompensationOpsWithUnorderedList() {
      let {
        liOps: e,
        oiOps: i,
        excludeOps: n
      } = this._popUnnecessaryCompensationOps(this.unorderedList);
      this.unorderedList = this.unorderedList.filter(e => !i.includes(e) && !n.includes(e));
      return e;
    }
    async getPreviousMissingObjectByNewOps(e) {
      if (e.filter(e => syncedReferenceBlockManager_1.getInsertedBlockId(e.op) !== null).length) {
        return await this.shiftLazyCompensationQueue();
      } else {
        return {
          liOps: [],
          oiOps: []
        };
      }
    }
    pushEarlyAndRefreshPathMap(e) {
      for (let i of syncedReferenceBlockManager_1.composeZoneChangesets(e)) {
        this.earlySnapshotManager.apply(syncedReferenceBlockManager_1.convertToBlockPayloadMap([i]), {
          purify: false
        });
      }
      let i = this.earlySnapshotManager.value;
      this.cachedIdPathMap = syncedReferenceBlockManager_1.getBlockPathMap(this.rootId, i);
    }
    isAvailableToPushOrderedQueue(e, i = []) {
      if (syncedReferenceBlockManager_1.getInsertedBlockId(e.op) !== null) {
        return !!this.cachedIdPathMap[e.id];
      }
      let n = syncedReferenceBlockManager_1.getBlockIdFromOp(e);
      if (this.cachedIdPathMap[n]) {
        return true;
      }
      let s = i.some(e => syncedReferenceBlockManager_1.getBlockIdFromOp(e) === n && syncedReferenceBlockManager_1.getInsertedBlockId(e.op) !== null && !!this.cachedIdPathMap[e.id]);
      if (syncedReferenceBlockManager_1.isCreateOp(e.op)) {
        let i = syncedReferenceBlockManager_1.getCreateData(e.op);
        return (i == null ? undefined : i.type) === "revision" || s;
      }
      let r = i.some(e => e.id === n && syncedReferenceBlockManager_1.isCreateOp(e.op));
      return !!s && !!r;
    }
    shiftUnorderedList() {
      let e = this.unorderedList.filter(e => this.isAvailableToPushOrderedQueue(e));
      this.unorderedList = this.unorderedList.filter(i => !e.includes(i));
      return e;
    }
    updatePushedTextIdsByOps(e) {
      for (let {
        id: i,
        op: n
      } of e) {
        if (syncedReferenceBlockManager_1.getZoneChangesets(n) || syncedReferenceBlockManager_1.isCreateOp(n)) {
          this.pushedTextIds.add(i);
        }
      }
    }
    async pushOnly(...e) {
      if (!e.length) {
        return;
      }
      let i = e.flatMap(e => e.ops.map(i => ({
        id: e.id,
        op: i
      })));
      this.updatePushedTextIdsByOps(i);
      i = syncedReferenceBlockManager_1.expandCreateOps(i);
      i = syncedReferenceBlockManager_1.filterInvalidChildOps(this.earlySnapshotManager.value, i);
      let {
        liOps: n,
        excludeOps: s
      } = this.popUnnecessaryCompensationOpsWithInsertOps(i);
      let r = [...n, ...this.popUnnecessaryCompensationOpsWithUnorderedList()];
      let o = (i = i.filter(e => !syncedReferenceBlockManager_1.isCreateOp(e.op) || !this.compensationIds.includes(e.id))).filter(e => !this.isAvailableToPushOrderedQueue(e, i));
      this.unorderedList.push(...o);
      this.pushEarlyAndRefreshPathMap(i);
      i.unshift(...r);
      i = i.filter(e => !s.includes(e));
      let l = this.shiftUnorderedList();
      (i = i.filter(e => !o.includes(e))).push(...l);
      let {
        liOps: a,
        oiOps: c
      } = await this.getPreviousMissingObjectByNewOps(i);
      this.pushEarlyAndRefreshPathMap(c);
      i.push(...a, ...c);
      let u = syncedReferenceBlockManager_1.filterOrphanedInserts(i.filter(e => !collectionIncludesUtil.includes(r, e)));
      let h = i.filter(e => collectionIncludesUtil.includes(u, syncedReferenceBlockManager_1.getInsertedBlockId(e.op)));
      i = i.filter(e => !collectionIncludesUtil.includes(u, syncedReferenceBlockManager_1.getInsertedBlockId(e.op)));
      this.compensationIds.push(...u);
      this.lazyCompensationQueue.push(...h);
      for (let e of i = syncedReferenceBlockManager_1.filterValidOps(i)) {
        this.pushToOrderedQueue({
          payload: e,
          groupId: this.chunkGroupIndex
        });
        this.ticker.emit("shift", syncedReferenceBlockManager_1.getOpLength(e.op));
      }
      this.chunkGroupIndex++;
    }
    async flushBufferQueue() {
      try {
        while (this.bufferQueue.length) {
          let {
            ops: e,
            indexes: i
          } = this.bufferQueue.popAll();
          await this.pushOnly(...e);
          this.bufferQueue.setFinished(i);
        }
      } catch (e) {
        this.handleUnbreakError(e, {
          scene: "flush_buffer_to_push_failed"
        });
      }
    }
    destory() {
      var e;
      if ((e = this.handleInitDestory) != null) {
        e.call(this);
      }
      this.bufferQueue.destory();
      this.ticker.destory();
      this.isPushing.destory();
    }
    async shiftOperationsToFlush() {
      if (!this._isInit) {
        let {
          ops: e
        } = this.bufferQueue.popAll(true);
        return e;
      }
      await this.isPushing.waitFor(false);
      let {
        liOps: e,
        oiOps: i
      } = await this.shiftLazyCompensationQueue(true);
      let n = this.orderedQueue.splice(0);
      let s = this.chunkQueue.splice(0);
      let r = this.unorderedList.splice(0);
      return syncedReferenceBlockManager_1.composeZoneChangesets([...s, ...n.map(e => e.payload), ...e, ...i, ...r]);
    }
    async initRecords({
      records: e
    }) {
      if (!e[this.rootId]) {
        throw Error("Cannot find root record in records when initRecords");
      }
      this._isInit = true;
      let i = syncedReferenceBlockManager_1.convertToVersionedBlocks(e);
      this.earlySnapshotManager.update(i);
      this.afterSnapshotManager.update(i);
      this.cachedIdPathMap = syncedReferenceBlockManager_1.getBlockPathMap(this.rootId, i);
      this.tracer.start();
      await this.flushBufferQueue();
    }
    isReachEnd() {
      return !this.chunkQueue.length && !this.orderedQueue.length;
    }
    isInit() {
      return this._isInit;
    }
    async push(...e) {
      let i = this.bufferQueue.push(e);
      utilityHelpers.invokeFunction(async () => {
        if (this._isInit && !this.isPushing.value) {
          this.isPushing.value = true;
          await this.flushBufferQueue();
          this.isPushing.value = false;
        }
      });
      await this.bufferQueue.waitFinished(i);
    }
    async flush() {
      let e = await this.shiftOperationsToFlush();
      if (e.length) {
        this.handleSubmit(e);
      }
    }
    async flushAndStop() {
      await this.flush();
      this.tracer.flushAndStop();
      this.destory();
    }
    pauseTracer() {
      this.tracer.pause();
    }
    resumeTracer() {
      this.tracer.resume();
    }
    constructor({
      rootId: e,
      records: i,
      ticker: n,
      onSubmit: s,
      onFetchBlocks: r,
      onUnbreakError: o,
      onTraceStuck: l
    }) {
      this.cachedIdPathMap = {};
      this.bufferQueue = new G();
      this.orderedQueue = [];
      this.chunkQueue = [];
      this.lazyCompensationQueue = [];
      this.unorderedList = [];
      this.compensationIds = [];
      this.compensationVersionMap = {};
      this.pushedTextIds = new Set();
      this.chunkGroupIndex = 0;
      this._isInit = false;
      this.isPushing = new V(false);
      this.afterSnapshotManager = new easysyncJson0Text0OperationalTransform.EasysyncJson0Text0OT({
        purify: false,
        onApplyError: e => {
          this.handleApplySnapshotError("apply_to_after_snapshot_error", e);
        }
      });
      this.earlySnapshotManager = new easysyncJson0Text0OperationalTransform.EasysyncJson0Text0OT({
        purify: false,
        onApplyError: e => {
          this.handleApplySnapshotError("apply_to_early_snapshot_error", e);
        }
      });
      this.tracer = new T({
        onTraceStuck: l,
        autoStart: false
      });
      this.rootId = e;
      this.ticker = n ?? new P();
      this.rawHandleSubmit = s;
      this.handleFetchBlocks = r;
      this.handleUnbreakError = o ?? (e => {});
      if (i) {
        this.initRecords({
          records: i
        });
      }
      let a = e => {
        if (this._isInit) {
          try {
            this.consumeChunk(e);
          } catch (e) {
            this.handleUnbreakError(e, {
              scene: "consume_error_when_tick"
            });
          }
        }
      };
      this.ticker.on("tickBatch", a);
      this.handleInitDestory = () => {
        this.ticker.off("tickBatch", a);
      };
    }
  }
  require.d(exports, {
    SyncedReferenceBlockManager: function () {
      return Y;
    }
  });
}