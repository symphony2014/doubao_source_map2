// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidPopulateCommonDb'
// - Resolved require(341035) to 'mermaid-populate-common-db'
// - Renamed variable 'n' to 'imperativeStateClass_1'
// - Resolved require(749588) to 'imperative-state-class_1'
// - Renamed variable 'a' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'o' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'c' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Renamed variable 's' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'iE' to 'getConfig' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'Rw' to 'setupGraphViewbox' (module 101498)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 997032)
// - Updated imported property 'MX' to 'random' (module 997032)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'A' to 'ImperativeState' (module 749588)
// - Updated imported property 'A' to 'populateCommonDb' (module 341035)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 91909.c888c184.js
         * chunkId: 91909
         * moduleId: 241345
         */
module.exports = function (module, exports, require) {
  var mermaidPopulateCommonDb = require("mermaid-populate-common-db") /*id: 341035*/;
  var imperativeStateClass_1 = require("imperative-state-class_1") /*id: 749588*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var l = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4
  };
  var d = mermaidConfigUtils.configDefaults.gitGraph;
  var h = mermaidConfigUtils.setName(() => mermaidTextLayoutUtils.cleanAndMerge({
    ...d,
    ...mermaidConfigUtils.getConfig().gitGraph
  }), "getConfig");
  var u = new imperativeStateClass_1.ImperativeState(() => {
    let t = h();
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
  function m() {
    return mermaidTextLayoutUtils.random({
      length: 7
    });
  }
  function $(t, e) {
    let r = Object.create(null);
    return t.reduce((t, i) => {
      let n = e(i);
      if (!r[n]) {
        r[n] = true;
        t.push(i);
      }
      return t;
    }, []);
  }
  mermaidConfigUtils.setName(m, "getID");
  mermaidConfigUtils.setName($, "uniqBy");
  var g = mermaidConfigUtils.setName(function (t) {
    u.records.direction = t;
  }, "setDirection");
  var f = mermaidConfigUtils.setName(function (t) {
    mermaidConfigUtils.logger.debug("options str", t);
    t = (t = t == null ? undefined : t.trim()) || "{}";
    try {
      u.records.options = JSON.parse(t);
    } catch (t) {
      mermaidConfigUtils.logger.error("error while parsing gitGraph options", t.message);
    }
  }, "setOptions");
  var p = mermaidConfigUtils.setName(function () {
    return u.records.options;
  }, "getOptions");
  var y = mermaidConfigUtils.setName(function (t) {
    let e = t.msg;
    let r = t.id;
    let i = t.type;
    let n = t.tags;
    mermaidConfigUtils.logger.info("commit", e, r, i, n);
    mermaidConfigUtils.logger.debug("Entering commit:", e, r, i, n);
    let a = h();
    r = mermaidConfigUtils.textUtils.sanitizeText(r, a);
    e = mermaidConfigUtils.textUtils.sanitizeText(e, a);
    n = n == null ? undefined : n.map(t => mermaidConfigUtils.textUtils.sanitizeText(t, a));
    let c = {
      id: r || u.records.seq + "-" + m(),
      message: e,
      seq: u.records.seq++,
      type: i ?? l.NORMAL,
      tags: n ?? [],
      parents: u.records.head == null ? [] : [u.records.head.id],
      branch: u.records.currBranch
    };
    u.records.head = c;
    mermaidConfigUtils.logger.info("main branch", a.mainBranchName);
    if (u.records.commits.has(c.id)) {
      mermaidConfigUtils.logger.warn(`Commit ID ${c.id} already exists`);
    }
    u.records.commits.set(c.id, c);
    u.records.branches.set(u.records.currBranch, c.id);
    mermaidConfigUtils.logger.debug("in pushCommit " + c.id);
  }, "commit");
  var x = mermaidConfigUtils.setName(function (t) {
    let e = t.name;
    let r = t.order;
    e = mermaidConfigUtils.textUtils.sanitizeText(e, h());
    if (u.records.branches.has(e)) {
      throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);
    }
    u.records.branches.set(e, u.records.head != null ? u.records.head.id : null);
    u.records.branchConfig.set(e, {
      name: e,
      order: r
    });
    w(e);
    mermaidConfigUtils.logger.debug("in createBranch");
  }, "branch");
  var v = mermaidConfigUtils.setName(t => {
    let e = t.branch;
    let r = t.id;
    let i = t.type;
    let n = t.tags;
    let a = h();
    e = mermaidConfigUtils.textUtils.sanitizeText(e, a);
    r &&= mermaidConfigUtils.textUtils.sanitizeText(r, a);
    let c = u.records.branches.get(u.records.currBranch);
    let s = u.records.branches.get(e);
    let d = c ? u.records.commits.get(c) : undefined;
    let $ = s ? u.records.commits.get(s) : undefined;
    if (d && $ && d.branch === e) {
      throw Error(`Cannot merge branch '${e}' into itself.`);
    }
    if (u.records.currBranch === e) {
      let t = Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["branch abc"]
      };
      throw t;
    }
    if (d === undefined || !d) {
      let t = Error(`Incorrect usage of "merge". Current branch (${u.records.currBranch})has no commits`);
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["commit"]
      };
      throw t;
    }
    if (!u.records.branches.has(e)) {
      let t = Error("Incorrect usage of \"merge\". Branch to be merged (" + e + ") does not exist");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: [`branch ${e}`]
      };
      throw t;
    }
    if ($ === undefined || !$) {
      let t = Error("Incorrect usage of \"merge\". Branch to be merged (" + e + ") has no commits");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["\"commit\""]
      };
      throw t;
    }
    if (d === $) {
      let t = Error("Incorrect usage of \"merge\". Both branches have same head");
      t.hash = {
        text: `merge ${e}`,
        token: `merge ${e}`,
        expected: ["branch abc"]
      };
      throw t;
    }
    if (r && u.records.commits.has(r)) {
      let t = Error("Incorrect usage of \"merge\". Commit with id:" + r + " already exists, use different custom id");
      t.hash = {
        text: `merge ${e} ${r} ${i} ${n == null ? undefined : n.join(" ")}`,
        token: `merge ${e} ${r} ${i} ${n == null ? undefined : n.join(" ")}`,
        expected: [`merge ${e} ${r}_UNIQUE ${i} ${n == null ? undefined : n.join(" ")}`]
      };
      throw t;
    }
    let g = {
      id: r || `${u.records.seq}-${m()}`,
      message: `merged branch ${e} into ${u.records.currBranch}`,
      seq: u.records.seq++,
      parents: u.records.head == null ? [] : [u.records.head.id, s || ""],
      branch: u.records.currBranch,
      type: l.MERGE,
      customType: i,
      customId: !!r,
      tags: n ?? []
    };
    u.records.head = g;
    u.records.commits.set(g.id, g);
    u.records.branches.set(u.records.currBranch, g.id);
    mermaidConfigUtils.logger.debug(u.records.branches);
    mermaidConfigUtils.logger.debug("in mergeBranch");
  }, "merge");
  var b = mermaidConfigUtils.setName(function (t) {
    let e = t.id;
    let r = t.targetId;
    let i = t.tags;
    let n = t.parent;
    mermaidConfigUtils.logger.debug("Entering cherryPick:", e, r, i);
    let a = h();
    e = mermaidConfigUtils.textUtils.sanitizeText(e, a);
    r = mermaidConfigUtils.textUtils.sanitizeText(r, a);
    i = i == null ? undefined : i.map(t => mermaidConfigUtils.textUtils.sanitizeText(t, a));
    n = mermaidConfigUtils.textUtils.sanitizeText(n, a);
    if (!e || !u.records.commits.has(e)) {
      let t = Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
      t.hash = {
        text: `cherryPick ${e} ${r}`,
        token: `cherryPick ${e} ${r}`,
        expected: ["cherry-pick abc"]
      };
      throw t;
    }
    let c = u.records.commits.get(e);
    if (c === undefined || !c) {
      throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
    }
    if (n && (!Array.isArray(c.parents) || !c.parents.includes(n))) {
      throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
    }
    let s = c.branch;
    if (c.type === l.MERGE && !n) {
      throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
    }
    if (!r || !u.records.commits.has(r)) {
      if (s === u.records.currBranch) {
        let t = Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
        t.hash = {
          text: `cherryPick ${e} ${r}`,
          token: `cherryPick ${e} ${r}`,
          expected: ["cherry-pick abc"]
        };
        throw t;
      }
      let t = u.records.branches.get(u.records.currBranch);
      if (t === undefined || !t) {
        let t = Error(`Incorrect usage of "cherry-pick". Current branch (${u.records.currBranch})has no commits`);
        t.hash = {
          text: `cherryPick ${e} ${r}`,
          token: `cherryPick ${e} ${r}`,
          expected: ["cherry-pick abc"]
        };
        throw t;
      }
      let a = u.records.commits.get(t);
      if (a === undefined || !a) {
        let t = Error(`Incorrect usage of "cherry-pick". Current branch (${u.records.currBranch})has no commits`);
        t.hash = {
          text: `cherryPick ${e} ${r}`,
          token: `cherryPick ${e} ${r}`,
          expected: ["cherry-pick abc"]
        };
        throw t;
      }
      let d = {
        id: u.records.seq + "-" + m(),
        message: `cherry-picked ${c == null ? undefined : c.message} into ${u.records.currBranch}`,
        seq: u.records.seq++,
        parents: u.records.head == null ? [] : [u.records.head.id, c.id],
        branch: u.records.currBranch,
        type: l.CHERRY_PICK,
        tags: i ? i.filter(Boolean) : [`cherry-pick:${c.id}${c.type === l.MERGE ? `|parent:${n}` : ""}`]
      };
      u.records.head = d;
      u.records.commits.set(d.id, d);
      u.records.branches.set(u.records.currBranch, d.id);
      mermaidConfigUtils.logger.debug(u.records.branches);
      mermaidConfigUtils.logger.debug("in cherryPick");
    }
  }, "cherryPick");
  var w = mermaidConfigUtils.setName(function (t) {
    t = mermaidConfigUtils.textUtils.sanitizeText(t, h());
    if (u.records.branches.has(t)) {
      u.records.currBranch = t;
      let r = u.records.branches.get(u.records.currBranch);
      if (r !== undefined && r) {
        u.records.head = u.records.commits.get(r) ?? null;
      } else {
        u.records.head = null;
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
  function E(t, e, r) {
    let i = t.indexOf(e);
    if (i === -1) {
      t.push(r);
    } else {
      t.splice(i, 1, r);
    }
  }
  function W(t) {
    let e = t.reduce((t, e) => t.seq > e.seq ? t : e, t[0]);
    let r = "";
    t.forEach(function (t) {
      if (t === e) {
        r += "\t*";
      } else {
        r += "\t|";
      }
    });
    let i = [r, e.id, e.seq];
    for (let t in u.records.branches) {
      if (u.records.branches.get(t) === e.id) {
        i.push(t);
      }
    }
    mermaidConfigUtils.logger.debug(i.join(" "));
    if (e.parents && e.parents.length == 2 && e.parents[0] && e.parents[1]) {
      let r = u.records.commits.get(e.parents[0]);
      E(t, e, r);
      if (e.parents[1]) {
        t.push(u.records.commits.get(e.parents[1]));
      }
    } else if (e.parents.length == 0) {
      return;
    } else if (e.parents[0]) {
      let r = u.records.commits.get(e.parents[0]);
      E(t, e, r);
    }
    W(t = $(t, t => t.id));
  }
  mermaidConfigUtils.setName(E, "upsert");
  mermaidConfigUtils.setName(W, "prettyPrintCommitHistory");
  var M = mermaidConfigUtils.setName(function () {
    mermaidConfigUtils.logger.debug(u.records.commits);
    W([T()[0]]);
  }, "prettyPrint");
  var B = mermaidConfigUtils.setName(function () {
    u.reset();
    mermaidConfigUtils.clearAccData();
  }, "clear");
  var C = mermaidConfigUtils.setName(function () {
    return [...u.records.branchConfig.values()].map((t, e) => t.order !== null && t.order !== undefined ? t : {
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
  var L = mermaidConfigUtils.setName(function () {
    return u.records.branches;
  }, "getBranches");
  var R = mermaidConfigUtils.setName(function () {
    return u.records.commits;
  }, "getCommits");
  var T = mermaidConfigUtils.setName(function () {
    let t = [...u.records.commits.values()];
    t.forEach(function (t) {
      mermaidConfigUtils.logger.debug(t.id);
    });
    t.sort((t, e) => t.seq - e.seq);
    return t;
  }, "getCommitsArray");
  var k = {
    commitType: l,
    getConfig: h,
    setDirection: g,
    setOptions: f,
    getOptions: p,
    commit: y,
    branch: x,
    merge: v,
    cherryPick: b,
    checkout: w,
    prettyPrint: M,
    clear: B,
    getBranchesAsObjArray: C,
    getBranches: L,
    getCommits: R,
    getCommitsArray: T,
    getCurrentBranch: mermaidConfigUtils.setName(function () {
      return u.records.currBranch;
    }, "getCurrentBranch"),
    getDirection: mermaidConfigUtils.setName(function () {
      return u.records.direction;
    }, "getDirection"),
    getHead: mermaidConfigUtils.setName(function () {
      return u.records.head;
    }, "getHead"),
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle
  };
  var S = mermaidConfigUtils.setName((t, e) => {
    mermaidPopulateCommonDb.populateCommonDb(t, e);
    if (t.dir) {
      e.setDirection(t.dir);
    }
    for (let r of t.statements) {
      A(r, e);
    }
  }, "populate");
  var A = mermaidConfigUtils.setName((t, e) => {
    let r = {
      Commit: mermaidConfigUtils.setName(t => e.commit(P(t)), "Commit"),
      Branch: mermaidConfigUtils.setName(t => e.branch(F(t)), "Branch"),
      Merge: mermaidConfigUtils.setName(t => e.merge(I(t)), "Merge"),
      Checkout: mermaidConfigUtils.setName(t => e.checkout(N(t)), "Checkout"),
      CherryPicking: mermaidConfigUtils.setName(t => e.cherryPick(_(t)), "CherryPicking")
    }[t.$type];
    if (r) {
      r(t);
    } else {
      mermaidConfigUtils.logger.error(`Unknown statement type: ${t.$type}`);
    }
  }, "parseStatement");
  var P = mermaidConfigUtils.setName(t => {
    return {
      id: t.id,
      msg: t.message ?? "",
      type: t.type !== undefined ? l[t.type] : l.NORMAL,
      tags: t.tags ?? undefined
    };
  }, "parseCommit");
  var F = mermaidConfigUtils.setName(t => {
    return {
      name: t.name,
      order: t.order ?? 0
    };
  }, "parseBranch");
  var I = mermaidConfigUtils.setName(t => {
    return {
      branch: t.branch,
      id: t.id ?? "",
      type: t.type !== undefined ? l[t.type] : undefined,
      tags: t.tags ?? undefined
    };
  }, "parseMerge");
  var N = mermaidConfigUtils.setName(t => t.branch, "parseCheckout");
  var _ = mermaidConfigUtils.setName(t => {
    return {
      id: t.id,
      targetId: "",
      tags: t.tags?.length === 0 ? undefined : t.tags,
      parent: t.parent
    };
  }, "parseCherryPicking");
  var O = {
    parse: mermaidConfigUtils.setName(async t => {
      let e = await mermaidDiagramParserFactory.parseDiagram("gitGraph", t);
      mermaidConfigUtils.logger.debug(e);
      S(e, k);
    }, "parse")
  };
  var D = mermaidConfigUtils.getConfigAlias();
  var H = D == null ? undefined : D.gitGraph;
  var z = new Map();
  var G = new Map();
  var Z = new Map();
  var j = [];
  var q = 0;
  var Y = "LR";
  var U = mermaidConfigUtils.setName(() => {
    z.clear();
    G.clear();
    Z.clear();
    q = 0;
    j = [];
    Y = "LR";
  }, "clear");
  var K = mermaidConfigUtils.setName(t => {
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
  var J = mermaidConfigUtils.setName(t => {
    let e;
    let r;
    let i;
    if (Y === "BT") {
      r = mermaidConfigUtils.setName((t, e) => t <= e, "comparisonFunc");
      i = Infinity;
    } else {
      r = mermaidConfigUtils.setName((t, e) => t >= e, "comparisonFunc");
      i = 0;
    }
    t.forEach(t => {
      let o = Y === "TB" || Y == "BT" ? G.get(t)?.y : G.get(t)?.x;
      if (o !== undefined && r(o, i)) {
        e = t;
        i = o;
      }
    });
    return e;
  }, "findClosestParent");
  var X = mermaidConfigUtils.setName(t => {
    let e = "";
    let r = Infinity;
    t.forEach(t => {
      let i = G.get(t).y;
      if (i <= r) {
        e = t;
        r = i;
      }
    });
    return e || undefined;
  }, "findClosestParentBT");
  var V = mermaidConfigUtils.setName((t, e, r) => {
    let i = r;
    let n = r;
    let a = [];
    t.forEach(t => {
      let r = e.get(t);
      if (!r) {
        throw Error(`Commit not found for key ${t}`);
      }
      if (r.parents.length) {
        n = Math.max(i = tt(r), n);
      } else {
        a.push(r);
      }
      te(r, i);
    });
    i = n;
    a.forEach(t => {
      tr(t, i, r);
    });
    t.forEach(t => {
      let r = e.get(t);
      if (r == null ? undefined : r.parents.length) {
        let t = X(r.parents);
        if ((i = G.get(t).y - 40) <= n) {
          n = i;
        }
        let e = z.get(r.branch).pos;
        let a = i - 10;
        G.set(r.id, {
          x: e,
          y: a
        });
      }
    });
  }, "setParallelBTPos");
  var Q = mermaidConfigUtils.setName(t => {
    let r = J(t.parents.filter(t => t !== null));
    if (!r) {
      throw Error(`Closest parent not found for commit ${t.id}`);
    }
    let i = G.get(r)?.y;
    if (i === undefined) {
      throw Error(`Closest parent position not found for commit ${t.id}`);
    }
    return i;
  }, "findClosestParentPos");
  var tt = mermaidConfigUtils.setName(t => Q(t) + 40, "calculateCommitPosition");
  var te = mermaidConfigUtils.setName((t, e) => {
    let r = z.get(t.branch);
    if (!r) {
      throw Error(`Branch not found for commit ${t.id}`);
    }
    let i = r.pos;
    let n = e + 10;
    G.set(t.id, {
      x: i,
      y: n
    });
    return {
      x: i,
      y: n
    };
  }, "setCommitPosition");
  var tr = mermaidConfigUtils.setName((t, e, r) => {
    let i = z.get(t.branch);
    if (!i) {
      throw Error(`Branch not found for commit ${t.id}`);
    }
    let n = i.pos;
    G.set(t.id, {
      x: n,
      y: e + r
    });
  }, "setRootPosition");
  var ti = mermaidConfigUtils.setName((t, e, r, i, n, a) => {
    if (a === l.HIGHLIGHT) {
      t.append("rect").attr("x", r.x - 10).attr("y", r.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${e.id} commit-highlight${n % 8} ${i}-outer`);
      t.append("rect").attr("x", r.x - 6).attr("y", r.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${e.id} commit${n % 8} ${i}-inner`);
    } else if (a === l.CHERRY_PICK) {
      t.append("circle").attr("cx", r.x).attr("cy", r.y).attr("r", 10).attr("class", `commit ${e.id} ${i}`);
      t.append("circle").attr("cx", r.x - 3).attr("cy", r.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${i}`);
      t.append("circle").attr("cx", r.x + 3).attr("cy", r.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${i}`);
      t.append("line").attr("x1", r.x + 3).attr("y1", r.y + 1).attr("x2", r.x).attr("y2", r.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${i}`);
      t.append("line").attr("x1", r.x - 3).attr("y1", r.y + 1).attr("x2", r.x).attr("y2", r.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${i}`);
    } else {
      let o = t.append("circle");
      o.attr("cx", r.x);
      o.attr("cy", r.y);
      o.attr("r", e.type === l.MERGE ? 9 : 10);
      o.attr("class", `commit ${e.id} commit${n % 8}`);
      if (a === l.MERGE) {
        let a = t.append("circle");
        a.attr("cx", r.x);
        a.attr("cy", r.y);
        a.attr("r", 6);
        a.attr("class", `commit ${i} ${e.id} commit${n % 8}`);
      }
      if (a === l.REVERSE) {
        t.append("path").attr("d", `M ${r.x - 5},${r.y - 5}L${r.x + 5},${r.y + 5}M${r.x - 5},${r.y + 5}L${r.x + 5},${r.y - 5}`).attr("class", `commit ${i} ${e.id} commit${n % 8}`);
      }
    }
  }, "drawCommitBullet");
  var tn = mermaidConfigUtils.setName((t, e, r, i) => {
    if (e.type !== l.CHERRY_PICK && (e.customId && e.type === l.MERGE || e.type !== l.MERGE) && (H == null ? undefined : H.showCommitLabel)) {
      var n;
      let a = t.append("g");
      let o = a.insert("rect").attr("class", "commit-label-bkg");
      let c = a.append("text").attr("x", i).attr("y", r.y + 25).attr("class", "commit-label").text(e.id);
      let s = (n = c.node()) === null || n === undefined ? undefined : n.getBBox();
      if (s && (o.attr("x", r.posWithOffset - s.width / 2 - 2).attr("y", r.y + 13.5).attr("width", s.width + 4).attr("height", s.height + 4), Y === "TB" || Y === "BT" ? (o.attr("x", r.x - (s.width + 16 + 5)).attr("y", r.y - 12), c.attr("x", r.x - (s.width + 16)).attr("y", r.y + s.height - 12)) : c.attr("x", r.posWithOffset - s.width / 2), H.rotateCommitLabel)) {
        if (Y === "TB" || Y === "BT") {
          c.attr("transform", "rotate(-45, " + r.x + ", " + r.y + ")");
          o.attr("transform", "rotate(-45, " + r.x + ", " + r.y + ")");
        } else {
          let t = -7.5 - (s.width + 10) / 25 * 9.5;
          let e = 10 + s.width / 25 * 8.5;
          a.attr("transform", "translate(" + t + ", " + e + ") rotate(-45, " + i + ", " + r.y + ")");
        }
      }
    }
  }, "drawCommitLabel");
  var ta = mermaidConfigUtils.setName((t, e, r, i) => {
    if (e.tags.length > 0) {
      let a = 0;
      let o = 0;
      let c = 0;
      let s = [];
      for (let i of e.tags.reverse()) {
        var n;
        let e = t.insert("polygon");
        let l = t.append("circle");
        let d = t.append("text").attr("y", r.y - 16 - a).attr("class", "tag-label").text(i);
        let h = (n = d.node()) === null || n === undefined ? undefined : n.getBBox();
        if (!h) {
          throw Error("Tag bbox not found");
        }
        o = Math.max(o, h.width);
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
        rect: n,
        yOffset: a
      } of s) {
        let s = c / 2;
        let l = r.y - 19.2 - a;
        n.attr("class", "tag-label-bkg").attr("points", `
      ${i - o / 2 - 2},${l + 2}  
      ${i - o / 2 - 2},${l - 2}
      ${r.posWithOffset - o / 2 - 4},${l - s - 2}
      ${r.posWithOffset + o / 2 + 4},${l - s - 2}
      ${r.posWithOffset + o / 2 + 4},${l + s + 2}
      ${r.posWithOffset - o / 2 - 4},${l + s + 2}`);
        e.attr("cy", l).attr("cx", i - o / 2 + 2).attr("r", 1.5).attr("class", "tag-hole");
        if (Y === "TB" || Y === "BT") {
          let c = i + a;
          n.attr("class", "tag-label-bkg").attr("points", `
        ${r.x},${c + 2}
        ${r.x},${c - 2}
        ${r.x + 10},${c - s - 2}
        ${r.x + 10 + o + 4},${c - s - 2}
        ${r.x + 10 + o + 4},${c + s + 2}
        ${r.x + 10},${c + s + 2}`).attr("transform", "translate(12,12) rotate(45, " + r.x + "," + i + ")");
          e.attr("cx", r.x + 2).attr("cy", c).attr("transform", "translate(12,12) rotate(45, " + r.x + "," + i + ")");
          t.attr("x", r.x + 5).attr("y", c + 3).attr("transform", "translate(14,14) rotate(45, " + r.x + "," + i + ")");
        }
      }
    }
  }, "drawCommitTags");
  var to = mermaidConfigUtils.setName(t => {
    switch (t.customType ?? t.type) {
      case l.NORMAL:
        return "commit-normal";
      case l.REVERSE:
        return "commit-reverse";
      case l.HIGHLIGHT:
        return "commit-highlight";
      case l.MERGE:
        return "commit-merge";
      case l.CHERRY_PICK:
        return "commit-cherry-pick";
      default:
        return "commit-normal";
    }
  }, "getCommitClassType");
  var tc = mermaidConfigUtils.setName((t, e, r, i) => {
    let c = {
      x: 0,
      y: 0
    };
    if (t.parents.length > 0) {
      let r = J(t.parents);
      if (r) {
        let o = i.get(r) ?? c;
        if (e === "TB") {
          return o.y + 40;
        } else if (e === "BT") {
          return (i.get(t.id) ?? c).y - 40;
        } else {
          return o.x + 40;
        }
      }
    } else {
      if (e === "TB") {
        return 30;
      }
      if (e === "BT") {
        return (i.get(t.id) ?? c).y - 40;
      }
    }
    return 0;
  }, "calculatePosition");
  var ts = mermaidConfigUtils.setName((t, e, r) => {
    let a = Y === "BT" && r ? e : e + 10;
    let o = Y === "TB" || Y === "BT" ? a : z.get(t.branch)?.pos;
    let c = Y === "TB" || Y === "BT" ? z.get(t.branch)?.pos : a;
    if (c === undefined || o === undefined) {
      throw Error(`Position were undefined for commit ${t.id}`);
    }
    return {
      x: c,
      y: o,
      posWithOffset: a
    };
  }, "getCommitPosition");
  var tl = mermaidConfigUtils.setName((t, e, r) => {
    var i;
    if (!H) {
      throw Error("GitGraph config not found");
    }
    let n = t.append("g").attr("class", "commit-bullets");
    let a = t.append("g").attr("class", "commit-labels");
    let c = (Y === "TB" || Y === "BT") * 30;
    let s = [...e.keys()];
    let l = (i = H == null ? undefined : H.parallelCommits) !== null && i !== undefined && i;
    let d = s.sort(mermaidConfigUtils.setName((t, r) => {
      let a = e.get(t)?.seq;
      let o = e.get(r)?.seq;
      if (a !== undefined && o !== undefined) {
        return a - o;
      } else {
        return 0;
      }
    }, "sortKeys"));
    if (Y === "BT") {
      if (l) {
        V(d, e, c);
      }
      d = d.reverse();
    }
    d.forEach(t => {
      let i = e.get(t);
      if (!i) {
        throw Error(`Commit not found for key ${t}`);
      }
      if (l) {
        c = tc(i, Y, c, G);
      }
      let o = ts(i, c, l);
      if (r) {
        let t = to(i);
        let e = i.customType ?? i.type;
        let r = z.get(i.branch)?.index ?? 0;
        ti(n, i, o, t, r, e);
        tn(a, i, o, c);
        ta(a, i, o, c);
      }
      if (Y === "TB" || Y === "BT") {
        G.set(i.id, {
          x: o.x,
          y: o.posWithOffset
        });
      } else {
        G.set(i.id, {
          x: o.posWithOffset,
          y: o.y
        });
      }
      if ((c = Y === "BT" && l ? c + 40 : c + 40 + 10) > q) {
        q = c;
      }
    });
  }, "drawCommits");
  var td = mermaidConfigUtils.setName((t, e, r, i, n) => {
    let a = (Y === "TB" || Y === "BT" ? r.x < i.x : r.y < i.y) ? e.branch : t.branch;
    let c = mermaidConfigUtils.setName(t => t.branch === a, "isOnBranchToGetCurve");
    let s = mermaidConfigUtils.setName(r => r.seq > t.seq && r.seq < e.seq, "isBetweenCommits");
    return [...n.values()].some(t => s(t) && c(t));
  }, "shouldRerouteArrow");
  var th = mermaidConfigUtils.setName(function (t, e, r = 0) {
    let i = t + Math.abs(t - e) / 2;
    if (r > 5) {
      return i;
    }
    if (j.every(t => Math.abs(t - i) >= 10)) {
      j.push(i);
      return i;
    }
    let n = Math.abs(t - e);
    return th(t, e - n / 5, r + 1);
  }, "findLane");
  var tu = mermaidConfigUtils.setName((t, e, r, i) => {
    let d;
    let h = G.get(e.id);
    let u = G.get(r.id);
    if (h === undefined || u === undefined) {
      throw Error(`Commit positions not found for commits ${e.id} and ${r.id}`);
    }
    let m = td(e, r, h, u, i);
    let $ = "";
    let g = "";
    let f = 0;
    let p = 0;
    let y = z.get(r.branch)?.index;
    if (r.type === l.MERGE && e.id !== r.parents[0]) {
      y = z.get(e.branch)?.index;
    }
    if (m) {
      $ = "A 10 10, 0, 0, 0,";
      g = "A 10 10, 0, 0, 1,";
      f = 10;
      p = 10;
      let t = h.y < u.y ? th(h.y, u.y) : th(u.y, h.y);
      let r = h.x < u.x ? th(h.x, u.x) : th(u.x, h.x);
      if (Y === "TB") {
        if (h.x < u.x) {
          d = `M ${h.x} ${h.y} L ${r - f} ${h.y} ${g} ${r} ${h.y + p} L ${r} ${u.y - f} ${$} ${r + p} ${u.y} L ${u.x} ${u.y}`;
        } else {
          y = z.get(e.branch)?.index;
          d = `M ${h.x} ${h.y} L ${r + f} ${h.y} ${$} ${r} ${h.y + p} L ${r} ${u.y - f} ${g} ${r - p} ${u.y} L ${u.x} ${u.y}`;
        }
      } else if (Y === "BT") {
        if (h.x < u.x) {
          d = `M ${h.x} ${h.y} L ${r - f} ${h.y} ${$} ${r} ${h.y - p} L ${r} ${u.y + f} ${g} ${r + p} ${u.y} L ${u.x} ${u.y}`;
        } else {
          y = z.get(e.branch)?.index;
          d = `M ${h.x} ${h.y} L ${r + f} ${h.y} ${g} ${r} ${h.y - p} L ${r} ${u.y + f} ${$} ${r - p} ${u.y} L ${u.x} ${u.y}`;
        }
      } else if (h.y < u.y) {
        d = `M ${h.x} ${h.y} L ${h.x} ${t - f} ${$} ${h.x + p} ${t} L ${u.x - f} ${t} ${g} ${u.x} ${t + p} L ${u.x} ${u.y}`;
      } else {
        y = z.get(e.branch)?.index;
        d = `M ${h.x} ${h.y} L ${h.x} ${t + f} ${g} ${h.x + p} ${t} L ${u.x - f} ${t} ${$} ${u.x} ${t - p} L ${u.x} ${u.y}`;
      }
    } else {
      $ = "A 20 20, 0, 0, 0,";
      g = "A 20 20, 0, 0, 1,";
      f = 20;
      p = 20;
      if (Y === "TB") {
        if (h.x < u.x) {
          d = r.type === l.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${u.y - f} ${$} ${h.x + p} ${u.y} L ${u.x} ${u.y}` : `M ${h.x} ${h.y} L ${u.x - f} ${h.y} ${g} ${u.x} ${h.y + p} L ${u.x} ${u.y}`;
        }
        if (h.x > u.x) {
          $ = "A 20 20, 0, 0, 0,";
          g = "A 20 20, 0, 0, 1,";
          f = 20;
          p = 20;
          d = r.type === l.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${u.y - f} ${g} ${h.x - p} ${u.y} L ${u.x} ${u.y}` : `M ${h.x} ${h.y} L ${u.x + f} ${h.y} ${$} ${u.x} ${h.y + p} L ${u.x} ${u.y}`;
        }
        if (h.x === u.x) {
          d = `M ${h.x} ${h.y} L ${u.x} ${u.y}`;
        }
      } else if (Y === "BT") {
        if (h.x < u.x) {
          d = r.type === l.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${u.y + f} ${g} ${h.x + p} ${u.y} L ${u.x} ${u.y}` : `M ${h.x} ${h.y} L ${u.x - f} ${h.y} ${$} ${u.x} ${h.y - p} L ${u.x} ${u.y}`;
        }
        if (h.x > u.x) {
          $ = "A 20 20, 0, 0, 0,";
          g = "A 20 20, 0, 0, 1,";
          f = 20;
          p = 20;
          d = r.type === l.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${h.x} ${u.y + f} ${$} ${h.x - p} ${u.y} L ${u.x} ${u.y}` : `M ${h.x} ${h.y} L ${u.x - f} ${h.y} ${$} ${u.x} ${h.y - p} L ${u.x} ${u.y}`;
        }
        if (h.x === u.x) {
          d = `M ${h.x} ${h.y} L ${u.x} ${u.y}`;
        }
      } else {
        if (h.y < u.y) {
          d = r.type === l.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${u.x - f} ${h.y} ${g} ${u.x} ${h.y + p} L ${u.x} ${u.y}` : `M ${h.x} ${h.y} L ${h.x} ${u.y - f} ${$} ${h.x + p} ${u.y} L ${u.x} ${u.y}`;
        }
        if (h.y > u.y) {
          d = r.type === l.MERGE && e.id !== r.parents[0] ? `M ${h.x} ${h.y} L ${u.x - f} ${h.y} ${$} ${u.x} ${h.y - p} L ${u.x} ${u.y}` : `M ${h.x} ${h.y} L ${h.x} ${u.y + f} ${g} ${h.x + p} ${u.y} L ${u.x} ${u.y}`;
        }
        if (h.y === u.y) {
          d = `M ${h.x} ${h.y} L ${u.x} ${u.y}`;
        }
      }
    }
    if (d === undefined) {
      throw Error("Line definition not found");
    }
    t.append("path").attr("d", d).attr("class", "arrow arrow" + y % 8);
  }, "drawArrow");
  var tm = mermaidConfigUtils.setName((t, e) => {
    let r = t.append("g").attr("class", "commit-arrows");
    [...e.keys()].forEach(t => {
      let i = e.get(t);
      if (i.parents && i.parents.length > 0) {
        i.parents.forEach(t => {
          tu(r, e.get(t), i, e);
        });
      }
    });
  }, "drawArrows");
  var t$ = mermaidConfigUtils.setName((t, e) => {
    let r = t.append("g");
    e.forEach((t, e) => {
      let n = e % 8;
      let a = z.get(t.name)?.pos;
      if (a === undefined) {
        throw Error(`Position not found for branch ${t.name}`);
      }
      let o = r.append("line");
      o.attr("x1", 0);
      o.attr("y1", a);
      o.attr("x2", q);
      o.attr("y2", a);
      o.attr("class", "branch branch" + n);
      if (Y === "TB") {
        o.attr("y1", 30);
        o.attr("x1", a);
        o.attr("y2", q);
        o.attr("x2", a);
      } else if (Y === "BT") {
        o.attr("y1", q);
        o.attr("x1", a);
        o.attr("y2", 30);
        o.attr("x2", a);
      }
      j.push(a);
      let c = K(t.name);
      let s = r.insert("rect");
      let l = r.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + n);
      l.node().appendChild(c);
      let d = c.getBBox();
      s.attr("class", "branchLabelBkg label" + n).attr("rx", 4).attr("ry", 4).attr("x", -d.width - 4 - ((H == null ? undefined : H.rotateCommitLabel) === true) * 30).attr("y", -d.height / 2 + 8).attr("width", d.width + 18).attr("height", d.height + 4);
      l.attr("transform", "translate(" + (-d.width - 14 - ((H == null ? undefined : H.rotateCommitLabel) === true) * 30) + ", " + (a - d.height / 2 - 1) + ")");
      if (Y === "TB") {
        s.attr("x", a - d.width / 2 - 10).attr("y", 0);
        l.attr("transform", "translate(" + (a - d.width / 2 - 5) + ", 0)");
      } else if (Y === "BT") {
        s.attr("x", a - d.width / 2 - 10).attr("y", q);
        l.attr("transform", "translate(" + (a - d.width / 2 - 5) + ", " + q + ")");
      } else {
        s.attr("transform", "translate(-19, " + (a - d.height / 2) + ")");
      }
    });
  }, "drawBranches");
  var tg = mermaidConfigUtils.setName(function (t, e, r, i, n) {
    z.set(t, {
      pos: e,
      index: r
    });
    return e += 50 + !!n * 40 + (Y === "TB" || Y === "BT" ? i.width / 2 : 0);
  }, "setBranchPosition");
  var tf = {
    parser: O,
    db: k,
    renderer: {
      draw: mermaidConfigUtils.setName(function (t, e, r, i) {
        var n;
        U();
        mermaidConfigUtils.logger.debug("in gitgraph renderer", t + "\n", "id:", e, r);
        if (!H) {
          throw Error("GitGraph config not found");
        }
        let l = (n = H.rotateCommitLabel) !== null && n !== undefined && n;
        let d = i.db;
        Z = d.getCommits();
        let h = d.getBranchesAsObjArray();
        Y = d.getDirection();
        let u = axisAndZoomUtilities.select(`[id="${e}"]`);
        let m = 0;
        h.forEach((t, e) => {
          var r;
          let i = K(t.name);
          let n = u.append("g");
          let a = n.insert("g").attr("class", "branchLabel");
          let o = a.insert("g").attr("class", "label branch-label");
          if ((r = o.node()) !== null && r !== undefined) {
            r.appendChild(i);
          }
          let c = i.getBBox();
          m = tg(t.name, m, e, c, l);
          o.remove();
          a.remove();
          n.remove();
        });
        tl(u, Z, false);
        if (H.showBranches) {
          t$(u, h);
        }
        tm(u, Z);
        tl(u, Z, true);
        mermaidTextLayoutUtils.textLayoutUtils.insertTitle(u, "gitTitleText", H.titleTopMargin ?? 0, d.getDiagramTitle());
        mermaidConfigUtils.setupGraphViewbox(undefined, u, H.diagramPadding, H.useMaxWidth);
      }, "draw")
    },
    styles: mermaidConfigUtils.setName(t => `
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
      return tf;
    }
  });
}