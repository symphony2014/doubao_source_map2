// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UC' to 'createLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19584.df73fbcb.js
         * chunkId: 19584
         * moduleId: 142165
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let FederationModuleManifest = "federation-manifest.json";
  let MANIFEST_EXT = ".json";
  let BROWSER_LOG_KEY = "FEDERATION_DEBUG";
  let NameTransformSymbol = {
    AT: "@",
    HYPHEN: "-",
    SLASH: "/"
  };
  let NameTransformMap = {
    [NameTransformSymbol.AT]: "scope_",
    [NameTransformSymbol.HYPHEN]: "_",
    [NameTransformSymbol.SLASH]: "__"
  };
  let EncodedNameTransformMap = {
    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
  };
  let SEPARATOR = ":";
  let ManifestFileName = "mf-manifest.json";
  let StatsFileName = "mf-stats.json";
  let MFModuleType = {};
  let MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__";
  let ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX";
  let TEMP_DIR = ".federation";
  let MFPrefetchCommon = {};
  var ContainerPlugin = Object.freeze({
    __proto__: null
  });
  var ContainerReferencePlugin = Object.freeze({
    __proto__: null
  });
  var ModuleFederationPlugin = Object.freeze({
    __proto__: null
  });
  var SharePlugin = Object.freeze({
    __proto__: null
  });
  function isBrowserEnv() {
    return typeof window != "undefined" && window.document !== undefined;
  }
  function isReactNativeEnv() {
    return typeof navigator != "undefined" && navigator?.product === "ReactNative";
  }
  function isBrowserDebug() {
    try {
      if (isBrowserEnv() && window.localStorage) {
        return !!localStorage.getItem(BROWSER_LOG_KEY);
      }
    } catch (e) {}
    return false;
  }
  function isDebugMode() {
    if (processBrowserShim !== undefined && processBrowserShim.env && processBrowserShim.env.FEDERATION_DEBUG) {
      return !!processBrowserShim.env.FEDERATION_DEBUG;
    } else {
      return typeof FEDERATION_DEBUG != "undefined" && !!FEDERATION_DEBUG || isBrowserDebug();
    }
  }
  let getProcessEnv = function () {
    if (processBrowserShim !== undefined && processBrowserShim.env) {
      return processBrowserShim.env;
    } else {
      return {};
    }
  };
  let LOG_CATEGORY = "[ Federation Runtime ]";
  let parseEntry = function (e, t, r = SEPARATOR) {
    let n = e.split(r);
    let o = getProcessEnv().NODE_ENV === "development" && t;
    let i = "*";
    let a = e => e.startsWith("http") || e.includes(MANIFEST_EXT);
    if (n.length >= 2) {
      let [t, ...s] = n;
      if (e.startsWith(r)) {
        t = n.slice(0, 2).join(r);
        s = [o || n.slice(2).join(r)];
      }
      let l = o || s.join(r);
      if (a(l)) {
        return {
          name: t,
          entry: l
        };
      } else {
        return {
          name: t,
          version: l || i
        };
      }
    }
    if (n.length === 1) {
      let [e] = n;
      if (o && a(o)) {
        return {
          name: e,
          entry: o
        };
      } else {
        return {
          name: e,
          version: o || i
        };
      }
    }
    throw `Invalid entry value: ${e}`;
  };
  let composeKeyWithSeparator = function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    if (t.length) {
      return t.reduce((e, t) => t ? e ? `${e}${SEPARATOR}${t}` : t : e, "");
    } else {
      return "";
    }
  };
  let encodeName = function (e, t = "", r = false) {
    try {
      let n = r ? ".js" : "";
      return `${t}${e.replace(RegExp(`${NameTransformSymbol.AT}`, "g"), NameTransformMap[NameTransformSymbol.AT]).replace(RegExp(`${NameTransformSymbol.HYPHEN}`, "g"), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(RegExp(`${NameTransformSymbol.SLASH}`, "g"), NameTransformMap[NameTransformSymbol.SLASH])}${n}`;
    } catch (e) {
      throw e;
    }
  };
  let decodeName = function (e, t, r) {
    try {
      let n = e;
      if (t) {
        if (!n.startsWith(t)) {
          return n;
        }
        n = n.replace(RegExp(t, "g"), "");
      }
      n = n.replace(RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
      if (r) {
        n = n.replace(".js", "");
      }
      return n;
    } catch (e) {
      throw e;
    }
  };
  let generateExposeFilename = (e, t) => {
    if (!e) {
      return "";
    }
    let r = e;
    if (r === ".") {
      r = "default_export";
    }
    if (r.startsWith("./")) {
      r = r.replace("./", "");
    }
    return encodeName(r, "__federation_expose_", t);
  };
  let generateShareFilename = (e, t) => e ? encodeName(e, "__federation_shared_", t) : "";
  let getResourceUrl = (e, t) => {
    if ("getPublicPath" in e) {
      let r;
      r = e.getPublicPath.startsWith("function") ? Function("return " + e.getPublicPath)()() : Function(e.getPublicPath)();
      return `${r}${t}`;
    }
    if ("publicPath" in e) {
      if (!isBrowserEnv() && !isReactNativeEnv() && "ssrPublicPath" in e) {
        return `${e.ssrPublicPath}${t}`;
      } else {
        return `${e.publicPath}${t}`;
      }
    } else {
      return "";
    }
  };
  let assert = (e, t) => {
    if (!e) {
      error(t);
    }
  };
  let error = e => {
    throw Error(`${LOG_CATEGORY}: ${e}`);
  };
  let warn = e => {};
  function safeToString(e) {
    try {
      return JSON.stringify(e, null, 2);
    } catch (e) {
      return "";
    }
  }
  let VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
  function isRequiredVersion(e) {
    return VERSION_PATTERN_REGEXP.test(e);
  }
  let simpleJoinRemoteEntry = (e, t) => {
    if (!e) {
      return t;
    }
    let r = (e => {
      if (e === ".") {
        return "";
      }
      if (e.startsWith("./")) {
        return e.replace("./", "");
      }
      if (e.startsWith("/")) {
        let t = e.slice(1);
        if (t.endsWith("/")) {
          return t.slice(0, -1);
        } else {
          return t;
        }
      }
      return e;
    })(e);
    if (r) {
      if (r.endsWith("/")) {
        return `${r}${t}`;
      } else {
        return `${r}/${t}`;
      }
    } else {
      return t;
    }
  };
  function inferAutoPublicPath(e) {
    return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
  }
  function generateSnapshotFromManifest(e) {
    var n;
    let o;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      remotes: a = {},
      overrides: s = {},
      version: l
    } = i;
    let u = () => "publicPath" in e.metaData ? e.metaData.publicPath === "auto" && l ? inferAutoPublicPath(l) : e.metaData.publicPath : e.metaData.getPublicPath;
    let c = Object.keys(s);
    let f = {};
    if (!Object.keys(a).length) {
      f = ((n = e.remotes) === null || n === undefined ? undefined : n.reduce((e, t) => {
        let r;
        let n = t.federationContainerName;
        r = c.includes(n) ? s[n] : "version" in t ? t.version : t.entry;
        e[n] = {
          matchedVersion: r
        };
        return e;
      }, {})) || {};
    }
    Object.keys(a).forEach(e => f[e] = {
      matchedVersion: c.includes(e) ? s[e] : a[e]
    });
    let {
      remoteEntry: {
        path: h,
        name: d,
        type: m
      },
      types: p,
      buildInfo: {
        buildVersion: y
      },
      globalName: _,
      ssrRemoteEntry: g
    } = e.metaData;
    let {
      exposes: E
    } = e;
    let v = {
      version: l || "",
      buildVersion: y,
      globalName: _,
      remoteEntry: simpleJoinRemoteEntry(h, d),
      remoteEntryType: m,
      remoteTypes: simpleJoinRemoteEntry(p.path, p.name),
      remoteTypesZip: p.zip || "",
      remoteTypesAPI: p.api || "",
      remotesInfo: f,
      shared: e == null ? undefined : e.shared.map(e => ({
        assets: e.assets,
        sharedName: e.name,
        version: e.version
      })),
      modules: E == null ? undefined : E.map(e => ({
        moduleName: e.name,
        modulePath: e.path,
        assets: e.assets
      }))
    };
    if (e.metaData?.prefetchInterface) {
      let t = e.metaData.prefetchInterface;
      v = {
        ...v,
        prefetchInterface: t
      };
    }
    if (e.metaData?.prefetchEntry) {
      let {
        path: t,
        name: r,
        type: n
      } = e.metaData.prefetchEntry;
      v = {
        ...v,
        prefetchEntry: simpleJoinRemoteEntry(t, r),
        prefetchEntryType: n
      };
    }
    o = "publicPath" in e.metaData ? {
      ...v,
      publicPath: u(),
      ssrPublicPath: e.metaData.ssrPublicPath
    } : {
      ...v,
      getPublicPath: u()
    };
    if (g) {
      let e = simpleJoinRemoteEntry(g.path, g.name);
      o.ssrRemoteEntry = e;
      o.ssrRemoteEntryType = g.type || "commonjs-module";
    }
    return o;
  }
  function isManifestProvider(e) {
    return !!("remoteEntry" in e) && !!e.remoteEntry.includes(MANIFEST_EXT);
  }
  let PREFIX = "[ Module Federation ]";
  let DEFAULT_DELEGATE = console;
  let LOGGER_STACK_SKIP_TOKENS = ["logger.ts", "logger.js", "captureStackTrace", "Logger.emit", "Logger.log", "Logger.info", "Logger.warn", "Logger.error", "Logger.debug"];
  function captureStackTrace() {
    try {
      let e = Error().stack;
      if (!e) {
        return;
      }
      let [, ...t] = e.split("\n");
      let r = t.filter(e => !LOGGER_STACK_SKIP_TOKENS.some(t => e.includes(t)));
      if (!r.length) {
        return;
      }
      let n = r.slice(0, 5).join("\n");
      return `Stack trace:
${n}`;
    } catch {
      return;
    }
  }
  class Logger {
    setPrefix(e) {
      this.prefix = e;
    }
    setDelegate(e) {
      this.delegate = e ?? DEFAULT_DELEGATE;
    }
    emit(e, t) {
      let r = this.delegate;
      let n = isDebugMode() ? captureStackTrace() : undefined;
      let o = n ? [...t, n] : t;
      let i = (() => {
        switch (e) {
          case "log":
            return ["log", "info"];
          case "info":
            return ["info", "log"];
          case "warn":
            return ["warn", "info", "log"];
          case "error":
            return ["error", "warn", "log"];
          default:
            return ["debug", "log"];
        }
      })();
      for (let e of i) {
        let t = r[e];
        if (typeof t == "function") {
          t.call(r, this.prefix, ...o);
          return;
        }
      }
      for (let e of i) {
        let t = DEFAULT_DELEGATE[e];
        if (typeof t == "function") {
          t.call(DEFAULT_DELEGATE, this.prefix, ...o);
          return;
        }
      }
    }
    log() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.emit("log", t);
    }
    warn() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.emit("warn", t);
    }
    error() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.emit("error", t);
    }
    success() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.emit("info", t);
    }
    info() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.emit("info", t);
    }
    ready() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.emit("info", t);
    }
    debug() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      if (isDebugMode()) {
        this.emit("debug", t);
      }
    }
    constructor(e, t = DEFAULT_DELEGATE) {
      this.prefix = e;
      this.delegate = t ?? DEFAULT_DELEGATE;
    }
  }
  function createLogger(e) {
    return new Logger(e);
  }
  function createInfrastructureLogger(e) {
    let t = new Logger(e);
    Object.defineProperty(t, "__mf_infrastructure_logger__", {
      value: true,
      enumerable: false,
      configurable: false
    });
    return t;
  }
  function bindLoggerToCompiler(e, t, r) {
    if (e.__mf_infrastructure_logger__ && (t == null ? undefined : t.getInfrastructureLogger)) {
      try {
        let n = t.getInfrastructureLogger(r);
        if (n && typeof n == "object" && (typeof n.log == "function" || typeof n.info == "function" || typeof n.warn == "function" || typeof n.error == "function")) {
          e.setDelegate(n);
        }
      } catch {
        e.setDelegate(undefined);
      }
    }
  }
  let logger = createLogger(PREFIX);
  let infrastructureLogger = createInfrastructureLogger(PREFIX);
  async function safeWrapper(e, t) {
    try {
      return await e();
    } catch (e) {
      if (!t) {
        warn(e);
      }
      return;
    }
  }
  function isStaticResourcesEqual(e, t) {
    let r = /^(https?:)?\/\//i;
    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "");
  }
  function createScript(e) {
    let t;
    let r = null;
    let n = true;
    let o = 20000;
    let i = document.getElementsByTagName("script");
    for (let t = 0; t < i.length; t++) {
      let o = i[t];
      let a = o.getAttribute("src");
      if (a && isStaticResourcesEqual(a, e.url)) {
        r = o;
        n = false;
        break;
      }
    }
    if (!r) {
      let t;
      let n = e.attrs;
      (r = document.createElement("script")).type = (n == null ? undefined : n.type) === "module" ? "module" : "text/javascript";
      if (e.createScriptHook) {
        if ((t = e.createScriptHook(e.url, e.attrs)) instanceof HTMLScriptElement) {
          r = t;
        } else if (typeof t == "object") {
          if ("script" in t && t.script) {
            r = t.script;
          }
          if ("timeout" in t && t.timeout) {
            o = t.timeout;
          }
        }
      }
      r.src ||= e.url;
      if (n && !t) {
        Object.keys(n).forEach(e => {
          if (r) {
            if (e === "async" || e === "defer") {
              r[e] = n[e];
            } else if (!r.getAttribute(e)) {
              r.setAttribute(e, n[e]);
            }
          }
        });
      }
    }
    let a = async (n, o) => {
      clearTimeout(t);
      let i = () => {
        if ((o == null ? undefined : o.type) === "error") {
          if (e == null ? undefined : e.onErrorCallback) {
            if (e != null) {
              e.onErrorCallback(o);
            }
          }
        } else if (e == null ? undefined : e.cb) {
          if (e != null) {
            e.cb();
          }
        }
      };
      if (r && (r.onerror = null, r.onload = null, safeWrapper(() => {
        let {
          needDeleteScript: t = true
        } = e;
        if (t && (r == null ? undefined : r.parentNode)) {
          r.parentNode.removeChild(r);
        }
      }), n && typeof n == "function")) {
        let e = n(o);
        if (e instanceof Promise) {
          let t = await e;
          i();
          return t;
        }
        i();
        return e;
      }
      i();
    };
    r.onerror = a.bind(null, r.onerror);
    r.onload = a.bind(null, r.onload);
    t = setTimeout(() => {
      a(null, Error(`Remote script "${e.url}" time-outed.`));
    }, o);
    return {
      script: r,
      needAttach: n
    };
  }
  function createLink(e) {
    let t = null;
    let r = true;
    let n = document.getElementsByTagName("link");
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      let a = i.getAttribute("href");
      let s = i.getAttribute("rel");
      if (a && isStaticResourcesEqual(a, e.url) && s === e.attrs.rel) {
        t = i;
        r = false;
        break;
      }
    }
    if (!t) {
      let r;
      (t = document.createElement("link")).setAttribute("href", e.url);
      let n = e.attrs;
      if (e.createLinkHook && (r = e.createLinkHook(e.url, n)) instanceof HTMLLinkElement) {
        t = r;
      }
      if (n && !r) {
        Object.keys(n).forEach(e => {
          if (t && !t.getAttribute(e)) {
            t.setAttribute(e, n[e]);
          }
        });
      }
    }
    let o = (r, n) => {
      let o = () => {
        if ((n == null ? undefined : n.type) === "error") {
          if (e == null ? undefined : e.onErrorCallback) {
            if (e != null) {
              e.onErrorCallback(n);
            }
          }
        } else if (e == null ? undefined : e.cb) {
          if (e != null) {
            e.cb();
          }
        }
      };
      if (t && (t.onerror = null, t.onload = null, safeWrapper(() => {
        let {
          needDeleteLink: r = true
        } = e;
        if (r && (t == null ? undefined : t.parentNode)) {
          t.parentNode.removeChild(t);
        }
      }), r)) {
        let e = r(n);
        o();
        return e;
      }
      o();
    };
    t.onerror = o.bind(null, t.onerror);
    t.onload = o.bind(null, t.onload);
    return {
      link: t,
      needAttach: r
    };
  }
  function loadScript(e, t) {
    let {
      attrs: r = {},
      createScriptHook: n
    } = t;
    return new Promise((t, o) => {
      let {
        script: i,
        needAttach: a
      } = createScript({
        url: e,
        cb: t,
        onErrorCallback: o,
        attrs: {
          fetchpriority: "high",
          ...r
        },
        createScriptHook: n,
        needDeleteScript: true
      });
      if (a) {
        document.head.appendChild(i);
      }
    });
  }
  let sdkImportCache = new Map();
  function importNodeModule(e) {
    if (!e) {
      throw Error("import specifier is required");
    }
    if (sdkImportCache.has(e)) {
      return sdkImportCache.get(e);
    }
    let t = Function("name", "return import(name)")(e).then(e => e).catch(t => {
      sdkImportCache.delete(e);
      throw t;
    });
    sdkImportCache.set(e, t);
    return t;
  }
  let loadNodeFetch = async () => {
    let e = await importNodeModule("node-fetch");
    return e.default || e;
  };
  let lazyLoaderHookFetch = async (e, t, r) => {
    let n = (e, t) => r.lifecycle.fetch.emit(e, t);
    let o = await n(e, t || {});
    if (o && o instanceof Response) {
      return o;
    } else {
      return (typeof fetch == "undefined" ? await loadNodeFetch() : fetch)(e, t || {});
    }
  };
  let createScriptNode = typeof ENV_TARGET == "undefined" || ENV_TARGET !== "web" ? (url, cb, attrs, loaderHook) => {
    let urlObj;
    if (loaderHook == null ? undefined : loaderHook.createScriptHook) {
      let hookResult = loaderHook.createScriptHook(url);
      if (hookResult && typeof hookResult == "object" && "url" in hookResult) {
        url = hookResult.url;
      }
    }
    try {
      urlObj = new URL(url);
    } catch (e) {
      cb(Error(`Invalid URL: ${e}`));
      return;
    }
    let getFetch = async () => (loaderHook == null ? undefined : loaderHook.fetch) ? (e, t) => lazyLoaderHookFetch(e, t, loaderHook) : typeof fetch == "undefined" ? loadNodeFetch() : fetch;
    let handleScriptFetch = async (f, urlObj) => {
      try {
        let res = await f(urlObj.href);
        let data = await res.text();
        let [path, vm] = await Promise.all([importNodeModule("path"), importNodeModule("vm")]);
        let scriptContext = {
          exports: {},
          module: {
            exports: {}
          }
        };
        let urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/");
        let filename = path.basename(urlObj.pathname);
        let script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}
})`, {
          filename,
          importModuleDynamically: vm.constants?.USE_MAIN_CONTEXT_DEFAULT_LOADER ?? importNodeModule
        });
        script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
        let exportedInterface = scriptContext.module.exports || scriptContext.exports;
        if (attrs && exportedInterface && attrs.globalName) {
          let container = exportedInterface[attrs.globalName] || exportedInterface;
          cb(undefined, container);
          return;
        }
        cb(undefined, exportedInterface);
      } catch (e) {
        cb(e instanceof Error ? e : Error(`Script execution error: ${e}`));
      }
    };
    getFetch().then(async e => {
      if ((attrs == null ? undefined : attrs.type) === "esm" || (attrs == null ? undefined : attrs.type) === "module") {
        return loadModule(urlObj.href, {
          fetch: e,
          vm: await importNodeModule("vm")
        }).then(async e => {
          await e.evaluate();
          cb(undefined, e.namespace);
        }).catch(e => {
          cb(e instanceof Error ? e : Error(`Script execution error: ${e}`));
        });
      }
      handleScriptFetch(e, urlObj);
    }).catch(e => {
      cb(e);
    });
  } : (e, t, r, n) => {
    t(Error("createScriptNode is disabled in non-Node.js environment"));
  };
  let loadScriptNode = typeof ENV_TARGET == "undefined" || ENV_TARGET !== "web" ? (e, t) => new Promise((r, n) => {
    createScriptNode(e, (e, o) => {
      if (e) {
        n(e);
      } else {
        let e = (t == null ? undefined : t.attrs?.globalName) || `__FEDERATION_${t == null ? undefined : t.attrs?.name}:custom__`;
        r(globalThis[e] = o);
      }
    }, t.attrs, t.loaderHook);
  }) : (e, t) => {
    throw Error("loadScriptNode is disabled in non-Node.js environment");
  };
  let esmModuleCache = new Map();
  async function loadModule(e, t) {
    if (esmModuleCache.has(e)) {
      return esmModuleCache.get(e);
    }
    let {
      fetch: r,
      vm: n
    } = t;
    let o = await r(e);
    let i = await o.text();
    let a = new n.SourceTextModule(i, {
      importModuleDynamically: async (r, n) => loadModule(new URL(r, e).href, t)
    });
    esmModuleCache.set(e, a);
    await a.link(async r => {
      let n = new URL(r, e).href;
      return await loadModule(n, t);
    });
    return a;
  }
  function normalizeOptions(e, t, r) {
    return function (n) {
      if (n === false) {
        return false;
      }
      if (n === undefined) {
        return !!e && t;
      }
      if (n === true) {
        return t;
      }
      if (n && typeof n == "object") {
        return {
          ...t,
          ...n
        };
      }
      throw Error(`Unexpected type for \`${r}\`, expect boolean/undefined/object, got: ${typeof n}`);
    };
  }
  let createModuleFederationConfig = e => e;
  require.d(exports, {
    createLogger: function () {
      return createLogger;
    }
  });
}