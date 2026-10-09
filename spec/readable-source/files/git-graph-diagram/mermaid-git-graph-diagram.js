// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'populateCommonDb'
// - Resolved require(521289) to 'populate-common-db'
// - Renamed variable 'i' to 'imperativeStateClass'
// - Resolved require(97984) to 'imperative-state-class'
// - Renamed variable 'a' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'n' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'c' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 's' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Renamed variable 'l' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'iE' to 'getConfig' (module 401926)
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'Rw' to 'setupGraphViewbox' (module 401926)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 583673)
// - Updated imported property 'MX' to 'randomString' (module 583673)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'A' to 'ImperativeState' (module 97984)
// - Updated imported property 'A' to 'populateCommonDb' (module 521289)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16050.dc89ca70.js
         * chunkId: 16050
         * moduleId: 919541
         */
module.exports = function (module, exports, require) {
  var populateCommonDb = require("populate-common-db") /*id: 521289*/;
  var imperativeStateClass = require("imperative-state-class") /*id: 97984*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var d = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4
  };
  var h = mermaidConfigUtils_1.defaultConfig.gitGraph;
  var $ = loggerLevelUtils.setFunctionName(() => mermaidDiagramUtils.cleanAndMerge({
    ...h,
    ...mermaidConfigUtils_1.getConfig().gitGraph
  }), "getConfig");
  var m = new imperativeStateClass.ImperativeState(() => {
    let t = $();
    let e = t.mainBranchName;
    let r = t.mainBranchOrder;
    return {
      mainBranchName: e,
      commits: new Map(),
      head: null,
      branchConfig: new Map([[e, {
        name: e,
        order: r
      }]]),
      branches: new Map([[e, null]]),
      currBranch: e,
      direction: "LR",
      seq: 0,
      options: {}
    };
  });
  function u() {
    return mermaidDiagramUtils.randomString({
      length: 7
    });
  }
  function g(t, e) {
    let r = Object.create(null);
    return t.reduce((t, o) => {
      let i = e(o);
      if (!r[i]) {
        r[i] = true;
        t.push(o);
      }
      return t;
    }, []);
  }
  loggerLevelUtils.setFunctionName(u, "getID");
  loggerLevelUtils.setFunctionName(g, "uniqBy");
  var y = loggerLevelUtils.setFunctionName(function (t) {
    m.records.direction = t;
  }, "setDirection");
  var p = loggerLevelUtils.setFunctionName(function (t) {
    loggerLevelUtils.logger.debug("options str", t);
    t = (t = t == null ? undefined : t.trim()) || "{}";
    try {
      m.records.options = JSON.parse(t);
    } catch (t) {
      loggerLevelUtils.logger.error("error while parsing gitGraph options", t.message);
    }
  }, "setOptions");
  var f = loggerLevelUtils.setFunctionName(function () {
    return m.records.options;
  }, "getOptions");
  var x = loggerLevelUtils.setFunctionName(function (t) {
    let e = t.msg;
    let r = t.id;
    let o = t.type;
    let i = t.tags;
    loggerLevelUtils.logger.info("commit", e, r, o, i);
    loggerLevelUtils.logger.debug("Entering commit:", e, r, o, i);
    let a = $();
    r = mermaidConfigUtils_1.textUtilities.sanitizeText(r, a);
    e = mermaidConfigUtils_1.textUtilities.sanitizeText(e, a);
    i = i == null ? undefined : i.map(t => mermaidConfigUtils_1.textUtilities.sanitizeText(t, a));
    let s = {
      id: r || m.records.seq + "-" + u(),
      message: e,
      seq: m.records.seq++,
      type: o ?? d.NORMAL,
      tags: i ?? [],
      parents: m.records.head == null ? [] : [m.records.head.id],
      branch: m.records.currBranch
    };
    m.records.head = s;
    loggerLevelUtils.logger.info("main branch", a.mainBranchName);
    if (m.records.commits.has(s.id)) {
      loggerLevelUtils.logger.warn(`Commit ID ${s.id} already exists`);
    }
    m.records.commits.set(s.id, s);
    m.records.branches.set(m.records.currBranch, s.id);
    loggerLevelUtils.logger.debug("in pushCommit " + s.id);
  }, "commit");
  var b = loggerLevelUtils.setFunctionName(function (t) {
    let e = t.name;
    let r = t.order;
    e = mermaidConfigUtils_1.textUtilities.sanitizeText(e, $());
    if (m.records.branches.has(e)) {
      throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);
    }
    m.records.branches.set(e, m.records.head != null ? m.records.head.id : null);
    m.records.branchConfig.set(e, {
      name: e,
      order: r
    });
    E(e);
    loggerLevelUtils.logger.debug("in createBranch");
  }, "branch");
  var v = loggerLevelUtils.setFunctionName(t => {
    let e = t.branch;
    let r = t.id;
    let o = t.type;
    let i = t.tags;
    let a = $();
    e = mermaidConfigUtils_1.textUtilities.sanitizeText(e, a);
    r &&= mermaidConfigUtils_1.textUtilities.sanitizeText(r, a);
    let s = m.records.branches.get(m.records.currBranch);
    let l = m.records.branches.get(e);
    let h = s ? m.records.commits.get(s) : undefined;
    let g = l ? m.records.commits.get(l) : undefined;
    if (h && g && h.branch === e) {
      throw Error(`Cannot merge branch '${e}' into itself.`);
    }
    if (m.records.currBranch === e) {
      let t = Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["branch abc"]
      };
      throw t;
    }
    if (h === undefined || !h) {
      let t = Error(`Incorrect usage of "merge". Current branch (${m.records.currBranch})has no commits`);
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["commit"]
      };
      throw t;
    }
    if (!m.records.branches.has(e)) {
      let t = Error("Incorrect usage of \"merge\". Branch to be merged (" + e + ") does not exist");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: [`branch ${e}`]
      };
      throw t;
    }
    if (g === undefined || !g) {
      let t = Error("Incorrect usage of \"merge\". Branch to be merged (" + e + ") has no commits");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["\"commit\""]
      };
      throw t;
    }
    if (h === g) {
      let t = Error("Incorrect usage of \"merge\". Both branches have same head");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["branch abc"]
      };
      throw t;
    }
    if (r && m.records.commits.has(r)) {
      let t = Error("Incorrect usage of \"merge\". Commit with id:" + r + " already exists, use different custom id");
      t.hash = {
        text: `merge ${e} ${r} ${o} ${i == null ? undefined : i.join(" ")}`,
        token: `merge ${e} ${r} ${o} ${i == null ? undefined : i.join(" ")}`,
        expected: [`merge ${e} ${r}_UNIQUE ${o} ${i == null ? undefined : i.join(" ")}`]
      };
      throw t;
    }
    let y = {
      id: r || `${m.records.seq}-${u()}`,
      message: `merged branch ${e} into ${m.records.currBranch}`,
      seq: m.records.seq++,
      parents: m.records.head == null ? [] : [m.records.head.id, l || ""],
      branch: m.records.currBranch,
      type: d.MERGE,
      customType: o,
      customId: !!r,
      tags: i ?? []
    };
    m.records.head = y;
    m.records.commits.set(y.id, y);
    m.records.branches.set(m.records.currBranch, y.id);
    loggerLevelUtils.logger.debug(m.records.branches);
    loggerLevelUtils.logger.debug("in mergeBranch");
  }, "merge");
  var w = loggerLevelUtils.setFunctionName(function (t) {
    let e = t.id;
    let r = t.targetId;
    let o = t.tags;
    let i = t.parent;
    loggerLevelUtils.logger.debug("Entering cherryPick:", e, r, o);
    let a = $();
    e = mermaidConfigUtils_1.textUtilities.sanitizeText(e, a);
    r = mermaidConfigUtils_1.textUtilities.sanitizeText(r, a);
    o = o == null ? undefined : o.map(t => mermaidConfigUtils_1.textUtilities.sanitizeText(t, a));
    i = mermaidConfigUtils_1.textUtilities.sanitizeText(i, a);
    if (!e || !m.records.commits.has(e)) {
      let t = Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
      t.hash = {
        text: `cherryPick ${e} ${r}`,
        token: `cherryPick ${e} ${r}`,
        expected: ["cherry-pick abc"]
      };
      throw t;
    }
    let s = m.records.commits.get(e);
    if (s === undefined || !s) {
      throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
    }
    if (i && (!Array.isArray(s.parents) || !s.parents.includes(i))) {
      throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
    }
    let l = s.branch;
    if (s.type === d.MERGE && !i) {
      throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
    }
    if (!r || !m.records.commits.has(r)) {
      if (l === m.records.currBranch) {
        let t = Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
        t.hash = {
          text: `cherryPick ${e} ${r}`,
          token: `cherryPick ${e} ${r}`,
          expected: ["cherry-pick abc"]
        };
        throw t;
      }
      let t = m.records.branches.get(m.records.currBranch);
      if (t === undefined || !t) {
        let t = Error(`Incorrect usage of "cherry-pick". Current branch (${m.records.currBranch})has no commits`);
        t.hash = {
          text: `cherryPick ${e} ${r}`,
          token: `cherryPick ${e} ${r}`,
          expected: ["cherry-pick abc"]
        };
        throw t;
      }
      let a = m.records.commits.get(t);
      if (a === undefined || !a) {
        let t = Error(`Incorrect usage of "cherry-pick". Current branch (${m.records.currBranch})has no commits`);
        t.hash = {
          text: `cherryPick ${e} ${r}`,
          token: `cherryPick ${e} ${r}`,
          expected: ["cherry-pick abc"]
        };
        throw t;
      }
      let n = {
        id: m.records.seq + "-" + u(),
        message: `cherry-picked ${s == null ? undefined : s.message} into ${m.records.currBranch}`,
        seq: m.records.seq++,
        parents: m.records.head == null ? [] : [m.records.head.id, s.id],
        branch: m.records.currBranch,
        type: d.CHERRY_PICK,
        tags: o ? o.filter(Boolean) : [`cherry-pick:${s.id}${s.type === d.MERGE ? `|parent:${i}` : ""}`]
      };
      m.records.head = n;
      m.records.commits.set(n.id, n);
      m.records.branches.set(m.records.currBranch, n.id);
      loggerLevelUtils.logger.debug(m.records.branches);
      loggerLevelUtils.logger.debug("in cherryPick");
    }
  }, "cherryPick");
  var E = loggerLevelUtils.setFunctionName(function (t) {
    t = mermaidConfigUtils_1.textUtilities.sanitizeText(t, $());
    if (m.records.branches.has(t)) {
      m.records.currBranch = t;
      let r = m.records.branches.get(m.records.currBranch);
      if (r !== undefined && r) {
        m.records.head = m.records.commits.get(r) ?? null;
      } else {
        m.records.head = null;
      }
    } else {
      let e = Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);
      e.hash = {
        text: `checkout ${t}`,
        token: `checkout ${t}`,
        expected: [`branch ${t}`]
      };
      throw e;
    }
  }, "checkout");
  function B(t, e, r) {
    let o = t.indexOf(e);
    if (o === -1) {
      t.push(r);
    } else {
      t.splice(o, 1, r);
    }
  }
  function L(t) {
    let e = t.reduce((t, e) => t.seq > e.seq ? t : e, t[0]);
    let r = "";
    t.forEach(function (t) {
      if (t === e) {
        r += "\t*";
      } else {
        r += "\t|";
      }
    });
    let o = [r, e.id, e.seq];
    for (let t in m.records.branches) {
      if (m.records.branches.get(t) === e.id) {
        o.push(t);
      }
    }
    loggerLevelUtils.logger.debug(o.join(" "));
    if (e.parents && e.parents.length == 2 && e.parents[0] && e.parents[1]) {
      let r = m.records.commits.get(e.parents[0]);
      B(t, e, r);
      if (e.parents[1]) {
        t.push(m.records.commits.get(e.parents[1]));
      }
    } else if (e.parents.length == 0) {
      return;
    } else if (e.parents[0]) {
      let r = m.records.commits.get(e.parents[0]);
      B(t, e, r);
    }
    L(t = g(t, t => t.id));
  }
  loggerLevelUtils.setFunctionName(B, "upsert");
  loggerLevelUtils.setFunctionName(L, "prettyPrintCommitHistory");
  var M = loggerLevelUtils.setFunctionName(function () {
    loggerLevelUtils.logger.debug(m.records.commits);
    L([R()[0]]);
  }, "prettyPrint");
  var C = loggerLevelUtils.setFunctionName(function () {
    m.reset();
    mermaidConfigUtils_1.clearCommonDb();
  }, "clear");
  var T = loggerLevelUtils.setFunctionName(function () {
    return [...m.records.branchConfig.values()].map((t, e) => t.order !== null && t.order !== undefined ? t : {
      ...t,
      order: parseFloat(`0.${e}`)
    }).sort((t, e) => {
      return (t.order ?? 0) - (e.order ?? 0);
    }).map(t => {
      let {
        name: e
      } = t;
      return {
        name: e
      };
    });
  }, "getBranchesAsObjArray");
  var k = loggerLevelUtils.setFunctionName(function () {
    return m.records.branches;
  }, "getBranches");
  var W = loggerLevelUtils.setFunctionName(function () {
    return m.records.commits;
  }, "getCommits");
  var R = loggerLevelUtils.setFunctionName(function () {
    let t = [...m.records.commits.values()];
    t.forEach(function (t) {
      loggerLevelUtils.logger.debug(t.id);
    });
    t.sort((t, e) => t.seq - e.seq);
    return t;
  }, "getCommitsArray");
  var A = {
    commitType: d,
    getConfig: $,
    setDirection: y,
    setOptions: p,
    getOptions: f,
    commit: x,
    branch: b,
    merge: v,
    cherryPick: w,
    checkout: E,
    prettyPrint: M,
    clear: C,
    getBranchesAsObjArray: T,
    getBranches: k,
    getCommits: W,
    getCommitsArray: R,
    getCurrentBranch: loggerLevelUtils.setFunctionName(function () {
      return m.records.currBranch;
    }, "getCurrentBranch"),
    getDirection: loggerLevelUtils.setFunctionName(function () {
      return m.records.direction;
    }, "getDirection"),
    getHead: loggerLevelUtils.setFunctionName(function () {
      return m.records.head;
    }, "getHead"),
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    setAccDescription: mermaidConfigUtils_1.setAccDescription,
    setDiagramTitle: mermaidConfigUtils_1.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils_1.getDiagramTitle
  };
  var P = loggerLevelUtils.setFunctionName((t, e) => {
    populateCommonDb.populateCommonDb(t, e);
    if (t.dir) {
      e.setDirection(t.dir);
    }
    for (let r of t.statements) {
      I(r, e);
    }
  }, "populate");
  var I = loggerLevelUtils.setFunctionName((t, e) => {
    let r = {
      Commit: loggerLevelUtils.setFunctionName(t => e.commit(G(t)), "Commit"),
      Branch: loggerLevelUtils.setFunctionName(t => e.branch(O(t)), "Branch"),
      Merge: loggerLevelUtils.setFunctionName(t => e.merge(S(t)), "Merge"),
      Checkout: loggerLevelUtils.setFunctionName(t => e.checkout(D(t)), "Checkout"),
      CherryPicking: loggerLevelUtils.setFunctionName(t => e.cherryPick(q(t)), "CherryPicking")
    }[t.$type];
    if (r) {
      r(t);
    } else {
      loggerLevelUtils.logger.error(`Unknown statement type: ${t.$type}`);
    }
  }, "parseStatement");
  var G = loggerLevelUtils.setFunctionName(t => {
    return {
      id: t.id,
      msg: t.message ?? "",
      type: t.type !== undefined ? d[t.type] : d.NORMAL,
      tags: t.tags ?? undefined
    };
  }, "parseCommit");
  var O = loggerLevelUtils.setFunctionName(t => {
    return {
      name: t.name,
      order: t.order ?? 0
    };
  }, "parseBranch");
  var S = loggerLevelUtils.setFunctionName(t => {
    return {
      branch: t.branch,
      id: t.id ?? "",
      type: t.type !== undefined ? d[t.type] : undefined,
      tags: t.tags ?? undefined
    };
  }, "parseMerge");
  var D = loggerLevelUtils.setFunctionName(t => t.branch, "parseCheckout");
  var q = loggerLevelUtils.setFunctionName(t => {
    return {
      id: t.id,
      targetId: "",
      tags: t.tags?.length === 0 ? undefined : t.tags,
      parent: t.parent
    };
  }, "parseCherryPicking");
  var H = {
    parse: loggerLevelUtils.setFunctionName(async t => {
      let e = await mermaidDiagramParserFactory.parseDiagram("gitGraph", t);
      loggerLevelUtils.logger.debug(e);
      P(e, A);
    }, "parse")
  };
  var Z = mermaidConfigUtils_1.getConfigAlias();
  var z = Z == null ? undefined : Z.gitGraph;
  var _ = new Map();
  var Y = new Map();
  var N = new Map();
  var j = [];
  var K = 0;
  var F = "LR";
  var U = loggerLevelUtils.setFunctionName(() => {
    _.clear();
    Y.clear();
    N.clear();
    K = 0;
    j = [];
    F = "LR";
  }, "clear");
  var V = loggerLevelUtils.setFunctionName(t => {
    let e = document.createElementNS("http://www.w3.org/2000/svg", "text");
    (typeof t == "string" ? t.split(/\\n|\n|<br\s*\/?>/gi) : t).forEach(t => {
      let r = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      r.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
      r.setAttribute("dy", "1em");
      r.setAttribute("x", "0");
      r.setAttribute("class", "row");
      r.textContent = t.trim();
      e.appendChild(r);
    });
    return e;
  }, "drawText");
  var Q = loggerLevelUtils.setFunctionName(t => {
    let e;
    let r;
    let o;
    if (F === "BT") {
      r = loggerLevelUtils.setFunctionName((t, e) => t <= e, "comparisonFunc");
      o = Infinity;
    } else {
      r = loggerLevelUtils.setFunctionName((t, e) => t >= e, "comparisonFunc");
      o = 0;
    }
    t.forEach(t => {
      let n = F === "TB" || F == "BT" ? Y.get(t)?.y : Y.get(t)?.x;
      if (n !== undefined && r(n, o)) {
        e = t;
        o = n;
      }
    });
    return e;
  }, "findClosestParent");
  var X = loggerLevelUtils.setFunctionName(t => {
    let e = "";
    let r = Infinity;
    t.forEach(t => {
      let o = Y.get(t).y;
      if (o <= r) {
        e = t;
        r = o;
      }
    });
    return e || undefined;
  }, "findClosestParentBT");
  var J = loggerLevelUtils.setFunctionName((t, e, r) => {
    let o = r;
    let i = r;
    let a = [];
    t.forEach(t => {
      let r = e.get(t);
      if (!r) {
        throw Error(`Commit not found for key ${t}`);
      }
      if (r.parents.length) {
        i = Math.max(o = te(r), i);
      } else {
        a.push(r);
      }
      tr(r, o);
    });
    o = i;
    a.forEach(t => {
      to(t, o, r);
    });
    t.forEach(t => {
      let r = e.get(t);
      if (r == null ? undefined : r.parents.length) {
        let t = X(r.parents);
        if ((o = Y.get(t).y - 40) <= i) {
          i = o;
        }
        let e = _.get(r.branch).pos;
        let a = o - 10;
        Y.set(r.id, {
          x: e,
          y: a
        });
      }
    });
  }, "setParallelBTPos");
  var tt = loggerLevelUtils.setFunctionName(t => {
    let r = Q(t.parents.filter(t => t !== null));
    if (!r) {
      throw Error(`Closest parent not found for commit ${t.id}`);
    }
    let o = Y.get(r)?.y;
    if (o === undefined) {
      throw Error(`Closest parent position not found for commit ${t.id}`);
    }
    return o;
  }, "findClosestParentPos");
  var te = loggerLevelUtils.setFunctionName(t => tt(t) + 40, "calculateCommitPosition");
  var tr = loggerLevelUtils.setFunctionName((t, e) => {
    let r = _.get(t.branch);
    if (!r) {
      throw Error(`Branch not found for commit ${t.id}`);
    }
    let o = r.pos;
    let i = e + 10;
    Y.set(t.id, {
      x: o,
      y: i
    });
    return {
      x: o,
      y: i
    };
  }, "setCommitPosition");
  var to = loggerLevelUtils.setFunctionName((t, e, r) => {
    let o = _.get(t.branch);
    if (!o) {
      throw Error(`Branch not found for commit ${t.id}`);
    }
    let i = o.pos;
    Y.set(t.id, {
      x: i,
      y: e + r
    });
  }, "setRootPosition");
  var ti = loggerLevelUtils.setFunctionName((t, e, r, o, i, a) => {
    if (a === d.HIGHLIGHT) {
      t.append("rect").attr("x", r.x - 10).attr("y", r.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${e.id} commit-highlight${i % 8} ${o}-outer`);
      t.append("rect").attr("x", r.x - 6).attr("y", r.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${e.id} commit${i % 8} ${o}-inner`);
    } else if (a === d.CHERRY_PICK) {
      t.append("circle").attr("cx", r.x).attr("cy", r.y).attr("r", 10).attr("class", `commit ${e.id} ${o}`);
      t.append("circle").attr("cx", r.x - 3).attr("cy", r.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${o}`);
      t.append("circle").attr("cx", r.x + 3).attr("cy", r.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${o}`);
      t.append("line").attr("x1", r.x + 3).attr("y1", r.y + 1).attr("x2", r.x).attr("y2", r.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${o}`);
      t.append("line").attr("x1", r.x - 3).attr("y1", r.y + 1).attr("x2", r.x).attr("y2", r.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${o}`);
    } else {
      let n = t.append("circle");
      n.attr("cx", r.x);
      n.attr("cy", r.y);
      n.attr("r", e.type === d.MERGE ? 9 : 10);
      n.attr("class", `commit ${e.id} commit${i % 8}`);
      if (a === d.MERGE) {
        let a = t.append("circle");
        a.attr("cx", r.x);
        a.attr("cy", r.y);
        a.attr("r", 6);
        a.attr("class", `commit ${o} ${e.id} commit${i % 8}`);
      }
      if (a === d.REVERSE) {
        t.append("path").attr("d", `M ${r.x - 5},${r.y - 5}L${r.x + 5},${r.y + 5}M${r.x - 5},${r.y + 5}L${r.x + 5},${r.y - 5}`).attr("class", `commit ${o} ${e.id} commit${i % 8}`);
      }
    }
  }, "drawCommitBullet");
  var ta = loggerLevelUtils.setFunctionName((t, e, r, o) => {
    if (e.type !== d.CHERRY_PICK && (e.customId && e.type === d.MERGE || e.type !== d.MERGE) && (z == null ? undefined : z.showCommitLabel)) {
      var i;
      let a = t.append("g");
      let n = a.insert("rect").attr("class", "commit-label-bkg");
      let c = a.append("text").attr("x", o).attr("y", r.y + 25).attr("class", "commit-label").text(e.id);
      let s = (i = c.node()) === null || i === undefined ? undefined : i.getBBox();
      if (s && (n.attr("x", r.posWithOffset - s.width / 2 - 2).attr("y", r.y + 13.5).attr("width", s.width + 4).attr("height", s.height + 4), F === "TB" || F === "BT" ? (n.attr("x", r.x - (s.width + 16 + 5)).attr("y", r.y - 12), c.attr("x", r.x - (s.width + 16)).attr("y", r.y + s.height - 12)) : c.attr("x", r.posWithOffset - s.width / 2), z.rotateCommitLabel)) {
        if (F === "TB" || F === "BT") {
          c.attr("transform", "rotate(-45, " + r.x + ", " + r.y + ")");
          n.attr("transform", "rotate(-45, " + r.x + ", " + r.y + ")");
        } else {
          let t = -7.5 - (s.width + 10) / 25 * 9.5;
          let e = 10 + s.width / 25 * 8.5;
          a.attr("transform", "translate(" + t + ", " + e + ") rotate(-45, " + o + ", " + r.y + ")");
        }
      }
    }
  }, "drawCommitLabel");
  var tn = loggerLevelUtils.setFunctionName((t, e, r, o) => {
    if (e.tags.length > 0) {
      let a = 0;
      let n = 0;
      let c = 0;
      let s = [];
      for (let o of e.tags.reverse()) {
        var i;
        let e = t.insert("polygon");
        let l = t.append("circle");
        let d = t.append("text").attr("y", r.y - 16 - a).attr("class", "tag-label").text(o);
        let h = (i = d.node()) === null || i === undefined ? undefined : i.getBBox();
        if (!h) {
          throw Error("Tag bbox not found");
        }
        n = Math.max(n, h.width);
        c = Math.max(c, h.height);
        d.attr("x", r.posWithOffset - h.width / 2);
        s.push({
          tag: d,
          hole: l,
          rect: e,
          yOffset: a
        });
        a += 20;
      }
      for (let {
        tag: t,
        hole: e,
        rect: i,
        yOffset: a
      } of s) {
        let s = c / 2;
        let l = r.y - 19.2 - a;
        i.attr("class", "tag-label-bkg").attr("points", `
      ${o - n / 2 - 2},${l + 2}  
      ${o - n / 2 - 2},${l - 2}
      ${r.posWithOffset - n / 2 - 4},${l - s - 2}
      ${r.posWithOffset + n / 2 + 4},${l - s - 2}
      ${r.posWithOffset + n / 2 + 4},${l + s + 2}
      ${r.posWithOffset - n / 2 - 4},${l + s + 2}`);
        e.attr("cy", l).attr("cx", o - n / 2 + 2).attr("r", 1.5).attr("class", "tag-hole");
        if (F === "TB" || F === "BT") {
          let c = o + a;
          i.attr("class", "tag-label-bkg").attr("points", `
        ${r.x},${c + 2}
        ${r.x},${c - 2}
        ${r.x + 10},${c - s - 2}
        ${r.x + 10 + n + 4},${c - s - 2}
        ${r.x + 10 + n + 4},${c + s + 2}
        ${r.x + 10},${c + s + 2}`).attr("transform", "translate(12,12) rotate(45, " + r.x + "," + o + ")");
          e.attr("cx", r.x + 2).attr("cy", c).attr("transform", "translate(12,12) rotate(45, " + r.x + "," + o + ")");
          t.attr("x", r.x + 5).attr("y", c + 3).attr("transform", "translate(14,14) rotate(45, " + r.x + "," + o + ")");
        }
      }
    }
  }, "drawCommitTags");
  var tc = loggerLevelUtils.setFunctionName(t => {
    switch (t.customType ?? t.type) {
      case d.NORMAL:
        return "commit-normal";
      case d.REVERSE:
        return "commit-reverse";
      case d.HIGHLIGHT:
        return "commit-highlight";
      case d.MERGE:
        return "commit-merge";
      case d.CHERRY_PICK:
        return "commit-cherry-pick";
      default:
        return "commit-normal";
    }
  }, "getCommitClassType");
  var ts = loggerLevelUtils.setFunctionName((t, e, r, o) => {
    let c = {
      x: 0,
      y: 0
    };
    if (t.parents.length > 0) {
      let r = Q(t.parents);
      if (r) {
        let n = o.get(r) ?? c;
        if (e === "TB") {
          return n.y + 40;
        } else if (e === "BT") {
          return (o.get(t.id) ?? c).y - 40;
        } else {
          return n.x + 40;
        }
      }
    } else {
      if (e === "TB") {
        return 30;
      }
      if (e === "BT") {
        return (o.get(t.id) ?? c).y - 40;
      }
    }
    return 0;
  }, "calculatePosition");
  var tl = loggerLevelUtils.setFunctionName((t, e, r) => {
    let a = F === "BT" && r ? e : e + 10;
    let n = F === "TB" || F === "BT" ? a : _.get(t.branch)?.pos;
    let c = F === "TB" || F === "BT" ? _.get(t.branch)?.pos : a;
    if (c === undefined || n === undefined) {
      throw Error(`Position were undefined for commit ${t.id}`);
    }
    return {
      x: c,
      y: n,
      posWithOffset: a
    };
  }, "getCommitPosition");
  var td = loggerLevelUtils.setFunctionName((t, e, r) => {
    var o;
    if (!z) {
      throw Error("GitGraph config not found");
    }
    let i = t.append("g").attr("class", "commit-bullets");
    let a = t.append("g").attr("class", "commit-labels");
    let n = (F === "TB" || F === "BT") * 30;
    let s = [...e.keys()];
    let l = (o = z == null ? undefined : z.parallelCommits) !== null && o !== undefined && o;
    let d = s.sort(loggerLevelUtils.setFunctionName((t, r) => {
      let a = e.get(t)?.seq;
      let n = e.get(r)?.seq;
      if (a !== undefined && n !== undefined) {
        return a - n;
      } else {
        return 0;
      }
    }, "sortKeys"));
    if (F === "BT") {
      if (l) {
        J(d, e, n);
      }
      d = d.reverse();
    }
    d.forEach(t => {
      let o = e.get(t);
      if (!o) {
        throw Error(`Commit not found for key ${t}`);
      }
      if (l) {
        n = ts(o, F, n, Y);
      }
      let c = tl(o, n, l);
      if (r) {
        let t = tc(o);
        let e = o.customType ?? o.type;
        let r = _.get(o.branch)?.index ?? 0;
        ti(i, o, c, t, r, e);
        ta(a, o, c, n);
        tn(a, o, c, n);
      }
      if (F === "TB" || F === "BT") {
        Y.set(o.id, {
          x: c.x,
          y: c.posWithOffset
        });
      } else {
        Y.set(o.id, {
          x: c.posWithOffset,
          y: c.y
        });
      }
      if ((n = F === "BT" && l ? n + 40 : n + 40 + 10) > K) {
        K = n;
      }
    });
  }, "drawCommits");
  var th = loggerLevelUtils.setFunctionName((t, e, r, o, i) => {
    let a = (F === "TB" || F === "BT" ? r.x < o.x : r.y < o.y) ? e.branch : t.branch;
    let n = loggerLevelUtils.setFunctionName(t => t.branch === a, "isOnBranchToGetCurve");
    let s = loggerLevelUtils.setFunctionName(r => r.seq > t.seq && r.seq < e.seq, "isBetweenCommits");
    return [...i.values()].some(t => s(t) && n(t));
  }, "shouldRerouteArrow");
  var t$ = loggerLevelUtils.setFunctionName(function (t, e, r = 0) {
    let o = t + Math.abs(t - e) / 2;
    if (r > 5) {
      return o;
    }
    if (j.every(t => Math.abs(t - o) >= 10)) {
      j.push(o);
      return o;
    }
    let i = Math.abs(t - e);
    return t$(t, e - i / 5, r + 1);
  }, "findLane");
  var tm = loggerLevelUtils.setFunctionName((t, e, r, o) => {
    let l;
    let h = Y.get(e.id);
    let $ = Y.get(r.id);
    if (h === undefined || $ === undefined) {
      throw Error(`Commit positions not found for commits ${e.id} and ${r.id}`);
    }
    let m = th(e, r, h, $, o);
    let u = "";
    let g = "";
    let y = 0;
    let p = 0;
    let f = _.get(r.branch)?.index;
    if (r.type === d.MERGE && e.id !== r.parents[0]) {
      f = _.get(e.branch)?.index;
    }
    if (m) {
      u = "A 10 10, 0, 0, 0,";
      g = "A 10 10, 0, 0, 1,";
      y = 10;
      p = 10;
      let t = h.y < $.y ? t$(h.y, $.y) : t$($.y, h.y);
      let r = h.x < $.x ? t$(h.x, $.x) : t$($.x, h.x);
      if (F === "TB") {
        if (h.x < $.x) {
          l = `M ${h.x} ${h.y} L ${r - y} ${h.y} ${g} ${r} ${h.y + p} L ${r} ${$.y - y} ${u} ${r + p} ${$.y} L ${$.x} ${$.y}`;
        } else {
          f = _.get(e.branch)?.index;
          l = `M ${h.x} ${h.y} L ${r + y} ${h.y} ${u} ${r} ${h.y + p} L ${r} ${$.y - y} ${g} ${r - p} ${$.y} L ${$.x} ${$.y}`;
        }
      } else if (F === "BT") {
        if (h.x < $.x) {
          l = `M ${h.x} ${h.y} L ${r - y} ${h.y} ${u} ${r} ${h.y - p} L ${r} ${$.y + y} ${g} ${r + p} ${$.y} L ${$.x} ${$.y}`;
        } else {
          f = _.get(e.branch)?.index;
          l = `M ${h.x} ${h.y} L ${r + y} ${h.y} ${g} ${r} ${h.y - p} L ${r} ${$.y + y} ${u} ${r - p} ${$.y} L ${$.x} ${$.y}`;
        }
      } else if (h.y < $.y) {
        l = `M ${h.x} ${h.y} L ${h.x} ${t - y} ${u} ${h.x + p} ${t} L ${$.x - y} ${t} ${g} ${$.x} ${t + p} L ${$.x} ${$.y}`;
      } else {
        f = _.get(e.branch)?.index;
        l = `M ${h.x} ${h.y} L ${h.x} ${t + y} ${g} ${h.x + p} ${t} L ${$.x - y} ${t} ${u} ${$.x} ${t - p} L ${$.x} ${$.y}`;
      }
    } else {
      u = "A 20 20, 0, 0, 0,";
      g = "A 20 20, 0, 0, 1,";
      y = 20;
      p = 20;
      if (F === "TB") {
        if (h.x < $.x) {
          l = r.type === d.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${$.y - y} ${u} ${h.x + p} ${$.y} L ${$.x} ${$.y}` : `M ${h.x} ${h.y} L ${$.x - y} ${h.y} ${g} ${$.x} ${h.y + p} L ${$.x} ${$.y}`;
        }
        if (h.x > $.x) {
          u = "A 20 20, 0, 0, 0,";
          g = "A 20 20, 0, 0, 1,";
          y = 20;
          p = 20;
          l = r.type === d.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${$.y - y} ${g} ${h.x - p} ${$.y} L ${$.x} ${$.y}` : `M ${h.x} ${h.y} L ${$.x + y} ${h.y} ${u} ${$.x} ${h.y + p} L ${$.x} ${$.y}`;
        }
        if (h.x === $.x) {
          l = `M ${h.x} ${h.y} L ${$.x} ${$.y}`;
        }
      } else if (F === "BT") {
        if (h.x < $.x) {
          l = r.type === d.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${$.y + y} ${g} ${h.x + p} ${$.y} L ${$.x} ${$.y}` : `M ${h.x} ${h.y} L ${$.x - y} ${h.y} ${u} ${$.x} ${h.y - p} L ${$.x} ${$.y}`;
        }
        if (h.x > $.x) {
          u = "A 20 20, 0, 0, 0,";
          g = "A 20 20, 0, 0, 1,";
          y = 20;
          p = 20;
          l = r.type === d.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${$.y + y} ${u} ${h.x - p} ${$.y} L ${$.x} ${$.y}` : `M ${h.x} ${h.y} L ${$.x - y} ${h.y} ${u} ${$.x} ${h.y - p} L ${$.x} ${$.y}`;
        }
        if (h.x === $.x) {
          l = `M ${h.x} ${h.y} L ${$.x} ${$.y}`;
        }
      } else {
        if (h.y < $.y) {
          l = r.type === d.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${$.x - y} ${h.y} ${g} ${$.x} ${h.y + p} L ${$.x} ${$.y}` : `M ${h.x} ${h.y} L ${h.x} ${$.y - y} ${u} ${h.x + p} ${$.y} L ${$.x} ${$.y}`;
        }
        if (h.y > $.y) {
          l = r.type === d.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${$.x - y} ${h.y} ${u} ${$.x} ${h.y - p} L ${$.x} ${$.y}` : `M ${h.x} ${h.y} L ${h.x} ${$.y + y} ${g} ${h.x + p} ${$.y} L ${$.x} ${$.y}`;
        }
        if (h.y === $.y) {
          l = `M ${h.x} ${h.y} L ${$.x} ${$.y}`;
        }
      }
    }
    if (l === undefined) {
      throw Error("Line definition not found");
    }
    t.append("path").attr("d", l).attr("class", "arrow arrow" + f % 8);
  }, "drawArrow");
  var tu = loggerLevelUtils.setFunctionName((t, e) => {
    let r = t.append("g").attr("class", "commit-arrows");
    [...e.keys()].forEach(t => {
      let o = e.get(t);
      if (o.parents && o.parents.length > 0) {
        o.parents.forEach(t => {
          tm(r, e.get(t), o, e);
        });
      }
    });
  }, "drawArrows");
  var tg = loggerLevelUtils.setFunctionName((t, e) => {
    let r = t.append("g");
    e.forEach((t, e) => {
      let i = e % 8;
      let a = _.get(t.name)?.pos;
      if (a === undefined) {
        throw Error(`Position not found for branch ${t.name}`);
      }
      let n = r.append("line");
      n.attr("x1", 0);
      n.attr("y1", a);
      n.attr("x2", K);
      n.attr("y2", a);
      n.attr("class", "branch branch" + i);
      if (F === "TB") {
        n.attr("y1", 30);
        n.attr("x1", a);
        n.attr("y2", K);
        n.attr("x2", a);
      } else if (F === "BT") {
        n.attr("y1", K);
        n.attr("x1", a);
        n.attr("y2", 30);
        n.attr("x2", a);
      }
      j.push(a);
      let c = V(t.name);
      let s = r.insert("rect");
      let l = r.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + i);
      l.node().appendChild(c);
      let d = c.getBBox();
      s.attr("class", "branchLabelBkg label" + i).attr("rx", 4).attr("ry", 4).attr("x", -d.width - 4 - ((z == null ? undefined : z.rotateCommitLabel) === true) * 30).attr("y", -d.height / 2 + 8).attr("width", d.width + 18).attr("height", d.height + 4);
      l.attr("transform", "translate(" + (-d.width - 14 - ((z == null ? undefined : z.rotateCommitLabel) === true) * 30) + ", " + (a - d.height / 2 - 1) + ")");
      if (F === "TB") {
        s.attr("x", a - d.width / 2 - 10).attr("y", 0);
        l.attr("transform", "translate(" + (a - d.width / 2 - 5) + ", 0)");
      } else if (F === "BT") {
        s.attr("x", a - d.width / 2 - 10).attr("y", K);
        l.attr("transform", "translate(" + (a - d.width / 2 - 5) + ", " + K + ")");
      } else {
        s.attr("transform", "translate(-19, " + (a - d.height / 2) + ")");
      }
    });
  }, "drawBranches");
  var ty = loggerLevelUtils.setFunctionName(function (t, e, r, o, i) {
    _.set(t, {
      pos: e,
      index: r
    });
    return e += 50 + !!i * 40 + (F === "TB" || F === "BT" ? o.width / 2 : 0);
  }, "setBranchPosition");
  var tp = {
    parser: H,
    db: A,
    renderer: {
      draw: loggerLevelUtils.setFunctionName(function (t, e, r, o) {
        var i;
        U();
        loggerLevelUtils.logger.debug("in gitgraph renderer", t + "\n", "id:", e, r);
        if (!z) {
          throw Error("GitGraph config not found");
        }
        let d = (i = z.rotateCommitLabel) !== null && i !== undefined && i;
        let h = o.db;
        N = h.getCommits();
        let $ = h.getBranchesAsObjArray();
        F = h.getDirection();
        let m = axisAndZoomUtilities.select(`[id="${e}"]`);
        let u = 0;
        $.forEach((t, e) => {
          var r;
          let o = V(t.name);
          let i = m.append("g");
          let a = i.insert("g").attr("class", "branchLabel");
          let n = a.insert("g").attr("class", "label branch-label");
          if ((r = n.node()) !== null && r !== undefined) {
            r.appendChild(o);
          }
          let c = o.getBBox();
          u = ty(t.name, u, e, c, d);
          n.remove();
          a.remove();
          i.remove();
        });
        td(m, N, false);
        if (z.showBranches) {
          tg(m, $);
        }
        tu(m, N);
        td(m, N, true);
        mermaidDiagramUtils.mermaidUtils.insertTitle(m, "gitTitleText", z.titleTopMargin ?? 0, h.getDiagramTitle());
        mermaidConfigUtils_1.setupGraphViewbox(undefined, m, z.diagramPadding, z.useMaxWidth);
      }, "draw")
    },
    styles: loggerLevelUtils.setFunctionName(t => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(e => `
        .branch-label${e} { fill: ${t["gitBranchLabel" + e]}; }
        .commit${e} { stroke: ${t["git" + e]}; fill: ${t["git" + e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv" + e]}; fill: ${t["gitInv" + e]}; }
        .label${e}  { fill: ${t["git" + e]}; }
        .arrow${e} { stroke: ${t["git" + e]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return tp;
    }
  });
}