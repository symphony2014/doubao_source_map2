// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GX' to 'isAssistantFile'
// - Renamed export 'I9' to 'useFileValidation'
// - Renamed export 'VZ' to 'getCodeFileTypes'
// - Renamed export 'e$' to 'validateFileName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 771278
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  let a;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = [".py", ".java", ".js", ".ts", ".c", ".cpp", ".h", ".hpp", ".cc", ".cxx", ".html", ".css", ".php", ".rb", ".pl", ".sh", ".bash", ".swift", ".kt", ".kts", ".ktm", ".go", ".dart", ".scala", ".cs", ".aspx", ".xaml", ".vue", ".mod", ".proto", ".tsx", ".jsx", ".rs", ".json", ".yaml", ".yml", ".xml", ".env", ".config", ".properties", ".ini", ".toml", ".plist", ".md", ".markdown", ".adoc", ".feature", ".sum", ".bat", ".cmd", ".ps1", ".vbs", ".lua", ".vmx", ".vbox", ".dockerfile", ".wxml", ".wxss", ".m", ".for", ".f90", ".f95", ".f", ".xhtml", ".rdf", ".tmpl", ".scss", ".thrift", ".rst", ".meta", ".gitignore", ".patch", ".sql"];
  let d = ["makefile", "gemfile", "build.gradle"];
  let _ = [".py", ".java", ".js", ".ts", ".c", ".cpp", ".h", ".hpp", ".html", ".css", ".php", ".rb", ".pl", ".sh", ".bash", ".swift", ".kt", ".go", ".dart", ".scala", ".cs", ".xaml", ".vue", ".json", ".yaml", ".yml", ".xml", ".env", ".ini", ".toml", ".plist", ".feature", ".bat", ".cmd", ".ps1", ".vbs", ".vmx", ".vbox", ".dockerfile", ".proto", ".lua", ".mod", ".sum"];
  let p = () => {
    let [e, t] = reactCoreLibraryReexport.useState(a);
    let [n, u] = reactCoreLibraryReexport.useState(i);
    reactCoreLibraryReexport.useEffect(() => {
      if (!e || !n) {
        chatFgStoreHooks.fetchSourceKey("code_assistant_config", {
          source: chatStorageKeys.chatStorageKeys.setting,
          defaultValue: {}
        }).then(e => {
          i = i || (e == null ? undefined : e.supported_code_file_types);
          r = r || (e == null ? undefined : e.supported_file_names);
          if (a = a || (e == null ? undefined : e.default_assistant_file_types)) {
            t([...a]);
          }
          if (i) {
            u([...i]);
          }
        });
      }
    }, [e]);
    let c = /^\.([^.]+)/;
    return {
      supportedCodeFileTypesInFree: (e == null ? undefined : e.filter(e => c.test(e)).map(e => e.slice(1))) || [],
      supportedCodeFileTypes: n
    };
  };
  let f = (e, t, n) => {
    if (!(t == null ? undefined : t.length) || !e) {
      return false;
    }
    let i = false;
    t.some(t => {
      if (e.endsWith(t)) {
        i = true;
        return true;
      }
    });
    n.some(t => {
      if (e === t) {
        i = true;
        return true;
      }
    });
    return i;
  };
  let {
    assertCodeFileAsync: m,
    assertCodeFileSync: v,
    preloadCodeFileExtList: g,
    assertCodeFileSyncInFree: S,
    assertCodeFileAsyncInFree: y
  } = (() => {
    let e = () => {
      chatFgStoreHooks.fetchSourceKey("code_assistant_config", {
        source: chatStorageKeys.chatStorageKeys.setting,
        defaultValue: {}
      }).then(e => {
        i = e == null ? undefined : e.supported_code_file_types;
        r = e == null ? undefined : e.supported_file_names;
        a = e == null ? undefined : e.default_assistant_file_types;
      });
    };
    let t = async e => {
      if (!a) {
        await n();
      }
      return !!a && f(e, a, []);
    };
    let n = async () => {
      if (!r || !i) {
        try {
          let e = await chatFgStoreHooks.fetchSourceKey("code_assistant_config", {
            source: chatStorageKeys.chatStorageKeys.setting,
            defaultValue: {}
          });
          i = e == null ? undefined : e.supported_code_file_types;
          r = e == null ? undefined : e.supported_file_names;
          a = e == null ? undefined : e.default_assistant_file_types;
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "fetch_support_code_types_error",
            error: e instanceof Error ? e : Error(String(e))
          });
        }
      }
    };
    return {
      assertCodeFileAsync: async e => {
        if (!i || !r) {
          await n();
        }
        return !!i && !!r && f(e, i, r);
      },
      assertCodeFileSync: t => {
        if (!i || !r) {
          e();
        }
        return f(t, i || c, r || d);
      },
      preloadCodeFileExtList: n,
      assertCodeFileSyncInFree: t => {
        if (!a) {
          e();
        }
        return f(t, a || _, []);
      },
      assertCodeFileAsyncInFree: t
    };
  })();
  require.d(exports, {
    isAssistantFile: function () {
      return S;
    },
    useFileValidation: function () {
      return g;
    },
    getCodeFileTypes: function () {
      return v;
    },
    validateFileName: function () {
      return p;
    }
  });
}