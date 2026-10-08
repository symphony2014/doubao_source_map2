// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'UploadTaskManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 999425
         */
module.exports = function (module, exports, require) {
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var aiSpaceConstants = require("ai-space-constants") /*id: 784952*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class l {
    addChild(e) {
      this.children.push(e);
    }
    constructor({
      name: e,
      isDirectory: t,
      parentNode: i,
      file: a,
      isRoot: r = false
    }) {
      o(this, "id", uuidV1Generator.generateUuid());
      o(this, "name", undefined);
      o(this, "isDirectory", undefined);
      o(this, "parentNode", undefined);
      o(this, "children", []);
      o(this, "path", "");
      o(this, "file", undefined);
      o(this, "isRoot", undefined);
      this.name = e;
      this.isDirectory = t;
      this.parentNode = i;
      this.file = a;
      this.isRoot = r || false;
    }
  }
  class s {
    buildTree(e) {
      this.root = new l({
        name: "root",
        isDirectory: true,
        parentNode: null,
        file: new File([], "root")
      });
      for (let i of e) {
        var t;
        let e = ((t = i.webkitRelativePath || i.customFilePath) === null || t === undefined ? undefined : t.split("/")) || [];
        let n = this.root;
        let a = "";
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          a += (t === 0 ? "" : "/") + r;
          let o = n.children.find(e => e.name === r);
          if (o) {
            n = o;
          } else {
            let o = t < e.length - 1;
            let s = new l({
              name: r,
              isDirectory: o,
              parentNode: n,
              file: i,
              isRoot: o && t === 0
            });
            s.path = a;
            n.addChild(s);
            n = s;
          }
        }
      }
      return this.root;
    }
    bfsTraverse(e) {
      if (!this.root) {
        return;
      }
      let t = [this.root];
      while (t.length > 0) {
        let i = t.shift();
        if (i !== this.root) {
          e(i);
        }
        t.push(...i.children);
      }
    }
    dfsTraverse(e = this.root, t = emptyExportFunction.emptyFunction) {
      if (e) {
        if (e !== this.root) {
          t(e);
        }
        for (let i of e.children) {
          this.dfsTraverse(i, t);
        }
      }
    }
    displayTree(e = this.root, t = 0) {
      let i = "";
      if (e !== this.root) {
        let n = "│  ".repeat(t - 1) + (t > 0 ? "├─ " : "");
        i += `<div class="node">
              ${n}<span class="${(e == null ? undefined : e.isDirectory) ? "folder" : "file"}">
              ${(e == null ? undefined : e.isDirectory) ? "📁" : "📄"} ${e == null ? undefined : e.name}
              </span>
          </div>`;
      }
      for (let n of (e == null ? undefined : e.children) || []) {
        i += this.displayTree(n, t + 1);
      }
      return i;
    }
    constructor() {
      o(this, "root", null);
    }
  }
  var aiSpaceTaskBase = require("ai-space-task-base") /*id: 218332*/;
  class d extends aiSpaceTaskBase.TaskBase {
    get canPause() {
      return false;
    }
    get canRetry() {
      return false;
    }
    run() {}
    pause() {}
    retry() {}
    constructor({
      nodeId: e,
      ...t
    }) {
      super(t);
      this.nodeId = e;
      this._status$.next(aiSpaceConstants.OperationStatus.Success);
    }
  }
  function u(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class p {
    uploadFiles(e, t) {
      let {
        mountNodeId: i,
        meta: a
      } = t;
      let r = [];
      let o = new d({
        nodeId: i
      });
      this.tasksMap.set(o.id, o);
      let l = uuidV1Generator.generateUuid();
      e.forEach(e => {
        let t = this.createFileTask({
          parentTask: o,
          file: e,
          batchId: l,
          meta: a
        });
        let i = t.id;
        this.tasksMap.set(i, t);
        r.push(t);
      });
      this.startRunTaskParallel();
      return r.map(e => e.toReadOnly());
    }
    uploadDirectory(e, t) {
      let {
        mountNodeId: i,
        meta: a
      } = t;
      let r = [];
      let o = function (e) {
        let t = new s();
        t.buildTree(e);
        return t;
      }(e);
      let l = new d({
        nodeId: i || ""
      });
      this.tasksMap.set(l.id, l);
      let c = uuidV1Generator.generateUuid();
      o.bfsTraverse(e => {
        if (e.file.size === 0) {
          return;
        }
        let {
          parentNode: t
        } = e;
        let i = (t == null ? undefined : t.parentNode) ? this.tasksMap.get(t.id) : l;
        let n = e.isDirectory ? this.createDirectoryTask({
          id: e.id,
          parentTask: i,
          directoryName: e.name,
          batchId: c,
          meta: a,
          isRoot: e.isRoot
        }) : this.createFileTask({
          id: e.id,
          parentTask: i,
          file: e.file,
          batchId: c,
          meta: a
        });
        let o = n.id;
        r.push(n);
        this.tasksMap.set(o, n);
      });
      this.startRunTaskParallel();
      return r.map(e => e.toReadOnly());
    }
    startRunTaskParallel() {
      let e = [...this.runningTasksInfoMap.values()];
      if (e.length >= 6) {
        e.forEach(e => e.task.run());
        return;
      }
      let t = 6 - e.length;
      let i = [...this.tasksMap.values()].filter(e => e.getStatus() === aiSpaceConstants.OperationStatus.Pending).slice(0, t);
      if (i.length) {
        i.forEach(e => {
          let {
            id: t
          } = e;
          let i = {
            task: e
          };
          this.runningTasksInfoMap.set(t, i);
          let n = e.status$.subscribe(e => {
            if ([aiSpaceConstants.OperationStatus.Success, aiSpaceConstants.OperationStatus.Paused, aiSpaceConstants.OperationStatus.Error].includes(e)) {
              var i;
              if ((i = n.unsubscribe) !== null && i !== undefined) {
                i.call(n);
              }
              this.runningTasksInfoMap.delete(t);
              setTimeout(() => {
                this.startRunTaskParallel();
              }, 100);
              return;
            }
          });
          i.unsubscribe = () => n.unsubscribe();
          e.run();
        });
      }
    }
    pauseTask(e) {
      let t = this.tasksMap.get(e);
      if (t == null ? undefined : t.canPause) {
        t.pause();
      }
    }
    pauseAllTasks() {
      [...this.tasksMap.values()].filter(e => e.canPause).forEach(e => {
        e.pause();
      });
    }
    retryTask(e) {
      let t = this.tasksMap.get(e);
      if (t == null ? undefined : t.canRetry) {
        t.retry();
        this.startRunTaskParallel();
      }
    }
    retryAllTasks() {
      [...this.tasksMap.values()].filter(e => e.canRetry).forEach(e => {
        e.retry();
      });
      this.startRunTaskParallel();
    }
    retryAllFailedTasks() {
      [...this.tasksMap.values()].filter(e => e.getStatus() === aiSpaceConstants.OperationStatus.Error && e.canRetry).forEach(e => {
        e.retry();
      });
      this.startRunTaskParallel();
    }
    retryAllPausedTasks() {
      [...this.tasksMap.values()].filter(e => e.getStatus() === aiSpaceConstants.OperationStatus.Paused && e.canRetry).forEach(e => {
        e.retry();
      });
      this.startRunTaskParallel();
    }
    deleteTask(e) {
      var t;
      let i = this.tasksMap.get(e);
      if (i != null) {
        i.destroy();
      }
      let n = this.runningTasksInfoMap.get(e);
      if (n != null && (t = n.unsubscribe) !== null && t !== undefined) {
        t.call(n);
      }
      this.runningTasksInfoMap.delete(e);
      this.tasksMap.delete(e);
    }
    deleteAllTasks() {
      [...this.tasksMap.keys()].forEach(e => {
        this.deleteTask(e);
      });
    }
    destroy() {
      this.deleteAllTasks();
    }
    constructor({
      createFileTask: e,
      createDirectoryTask: t
    }) {
      u(this, "tasksMap", new Map());
      u(this, "runningTasksInfoMap", new Map());
      u(this, "createFileTask", undefined);
      u(this, "createDirectoryTask", undefined);
      this.createFileTask = e;
      this.createDirectoryTask = t;
    }
  }
  require.d(exports, {
    UploadTaskManager: function () {
      return p;
    }
  });
}