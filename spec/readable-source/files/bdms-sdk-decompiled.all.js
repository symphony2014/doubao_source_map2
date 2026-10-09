 function a7r51826g2d0u693s(r){var e=/[\t\n\f\r ]/g;var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var t="argus";var n=3;function decode(r){r=String(r).replace(e,"");var t=r,n=t.length;if(n%4===0){r=r.replace(/==?$/,"");n=r.length}if(n%4===1||/[^+a-zA-Z0-9/]/.test(r))throw new Error("Invalid character: the string to be decoded is not correctly encoded.");var c=0;var o,d;var g="";var i=-1;while(++i<n){d=a.indexOf(r.charAt(i));o=c%4?o*64+d:d;if(c++%4)g+=String.fromCharCode(255&o>>(-2*c&6))}return g}var c=r.replace(/\$/g,"V").replace(/\-/g,"Y").replace(/\*/g,"G").replace(/\%/g,"U");for(var o=0;o<n;o++)c=decode(c);c=c.slice(0,c.length-t.length);return c};

const VM_TRACE = {
  functionIds: new WeakMap(), // wrappedFunction -> entryIndex
  entryMeta: new Map(), // entryIndex -> summary
  scopeFrames: new WeakMap(), // scope frame -> runtime frame metadata
  stepCounter: 0,
};
let globalThis = window;
globalThis.__VM_AUTO_LOAD_DEBUG_API__ = false;
globalThis.__VM_DECOMPILED_VERSION__ = "abc";
const fullEntryIndex = [144, 146,147, 490,744, 732,110, 195,196,782, 787,761, 314, 316,103, 150, 317,278,709,712,713,716,714,718,722,725,727,789,729,773,130,159,169,170,166,165,167,168,160,171,164,163,759,762,791,811,765,767,769,774,776,315,387,323,640,468,483,501,489,615,613,628,624,631,633,635,199,275,156,731,743,286,734,746,749,752,754,307,132,306,0,129,123,183,22,105,99,100,107,106,784,786,788,810,828,198,193,195,196,151,733,748,745,757,141,108,736,717,319,710,320,723,321,713,715,719,726,728,730,790,285,284,318,110,79,80,126,38,37,23,127,268,215,263,264,269,231,229,230,216,270,706,656,696,697,707,672,670,671,657,708,265,620,475,610,517,567,568,611,533,532,518,612,465,403,451,452,466,419,417,418,404,467,456,457,459,460,461,453,444,626,256,81,89,90,91,92,272,273,274,384,339,379,380,385,355,353,354,340,386,381,606,607,608,572,576,577,578,579,580,569,529,584,585,531,586,587,588,590,589]
console.log('full entry length:', fullEntryIndex.length);
// TODO: take fullEntryIndex top 15.
globalThis.VM_DECOMPILED_ENTRY_INDEXES = fullEntryIndex.slice(0, 107);
console.log("VM_DECOMPILED_ENTRY_INDEXES", globalThis.VM_DECOMPILED_ENTRY_INDEXES)
function ensureVmEntryMeta(entryIndex) {
  if (!VM_TRACE.entryMeta.has(entryIndex)) {
    VM_TRACE.entryMeta.set(entryIndex, {});
  }
  return VM_TRACE.entryMeta.get(entryIndex);
}

function isVmCodeBlockEvent(args) {
  return (
    Array.isArray(args) &&
    (args[0] === "DECOMPILED_HEAD" || args[0] === "CHILD_DECOMPILED_HEAD")
  );
}

function vmLog(...args) {
  if (VM_DEBUG.enabled) {
    if (isVmCodeBlockEvent(args)) {
      const border = "=".repeat(80);
      console.log(border);
      console.log("[VM]", args[0], args[1]);
      console.log(border);
      console.log(args[2]);
    } else {
      console.log("[VM]", ...args);
    }
  }
}
 const Opcodes = Object.freeze({
  LE: 0,
  DUP: 1,
  LOAD_SCOPE: 2,
  POP: 3,
  NE: 4,
  MOD: 5,
  CONTROL_JUMP: 6,
  PRE_DEC: 7,
  EQ: 8,
  PUSH_NUM_CONST: 9,
  JUMP_IF_FALSE_KEEP: 10,
  JUMP_IF_TRUE: 11,
  GET_PROP: 12,
  CHECK_FLOW: 13,
  JUMP_IF_NOT: 14,
  SET_TOP_UNDEFINED: 15,
  ENUM_INIT: 16,
  GET_ELEM: 17,
  POST_DEC: 18,
  SHR: 19,
  OR: 20,
  STORE_SCOPE: 21,
  DEFINE_PROP: 22,
  GT: 23,
  PUSH_SCOPE_REF: 24,
  NEW_OBJ: 25,
  TO_NUMBER: 26,
  DIV: 27,
  NEG: 28,
  PUSH_FALSE: 29,
  SET_PROP: 30,
  USHR: 31,
  ENUM_NEXT: 32,
  STRICT_NE: 33,
  PACK: 34,
  IN: 35,
  MUL: 36,
  JUMP_IF_STRICT_EQ: 37,
  NEW: 38,
  CREATE_FUNCTION: 39,
  GE: 40,
  RETURN: 41,
  DELETE_PROP: 42,
  BIT_NOT: 43,
  ASSIGN_PROP: 44,
  LT: 45,
  STRICT_EQ: 46,
  INIT_GLOBAL: 47,
  AND: 48,
  SHL: 49,
  LOAD_GLOBAL_PROXY: 50,
  DEFINE_GETTER: 51,
  TYPEOF_GLOBAL: 52,
  ADD: 53,
  PUSH_NULL: 54,
  PUSH_IMMEDIATE: 55,
  XOR: 56,
  PUSH_CONST: 57,
  THROW: 58,
  POST_INC: 59,
  SUB: 60,
  DEFINE_SETTER: 61,
  PUSH_UNDEFINED: 62,
  PUSH_NAN: 63,
  PUSH_TRUE: 64,
  CALL: 65,
  INSTANCEOF: 66,
  PRE_INC: 67,
  LOAD_GLOBAL: 68,
  PUSH_THIS: 69,
  STORE_GLOBAL: 70,
  JUMP_IF_TRUE_KEEP: 71,
  TYPEOF: 72,
  JUMP: 73,
  SET_ELEM: 74,
  PUSH_INFINITY: 75,
  NOT: 76,
});

 function opcodeNameOf(opcode) {
  for (const k in Opcodes) {
    if (Opcodes[k] === opcode) return k;
  }
  return "OP_" + opcode;
}



const VM_DEBUG = {
  enabled: true,
  traceOpcodes: false, // 先别全开，太吵
  traceCalls: true,
  traceScopes: false,
  traceStack: false,
  traceDecodedEntries: false,
  traceChildDisasmHead: false,
  traceChildDecompiledCode: false,
  onlyEntries: new Set([165]), // null = export all visited entries
  maxSteps: 20000,
};

function createInvocation(parentScope, thisArg, argsLike, argLimit, preserveThisArg) {
  const args = {};
  Object.defineProperty(args, "length", {
    value: argsLike.length,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  const scope = [parentScope, args];
  const boundArgCount = Math.min(argsLike.length, argLimit);
  for (let index = 0; index < boundArgCount; index += 1) {
    scope.push(argsLike[index]);
  }

  let normalizedThis;
  if (preserveThisArg) {
    normalizedThis = thisArg;
    for (let index = 0; index < argsLike.length; index += 1) {
      args[index] = argsLike[index];
    }
  } else {
    normalizedThis = thisArg == null ? globalThis : Object(thisArg);
    for (let index = 0; index < argsLike.length; index += 1) {
      if (index < boundArgCount) {
        Object.defineProperty(args, index, {
          get() {
            return scope[index + 2];
          },
          set(value) {
            scope[index + 2] = value;
          },
          enumerable: true,
          configurable: true,
        });
      } else {
        args[index] = argsLike[index];
      }
    }
  }

  return {
    scope,
    thisArg: normalizedThis,
    args,
  };
}

function createChild(entryFn, parentScope) {
  if ("function" == typeof globalThis.__VM_CREATE_VM_FUNCTION__) {
    const match =
      entryFn &&
      "string" == typeof entryFn.name &&
      /^vm_fn_(\d+)(?:__[A-Za-z_$][A-Za-z0-9_$]*)?$/.exec(entryFn.name);
    if (match) {
      return globalThis.__VM_CREATE_VM_FUNCTION__(Number(match[1]), parentScope);
    }
  }
  const wrapped = function vmChildWrapper() {
    return entryFn(parentScope, this, arguments);
  };
  const match =
    entryFn &&
    "string" == typeof entryFn.name &&
    /^vm_fn_(\d+)(?:__[A-Za-z_$][A-Za-z0-9_$]*)?$/.exec(entryFn.name);
  if (match) {
    const entryIndex = Number(match[1]);
    Object.defineProperty(wrapped, "__vmEntryIndex", {
      value: entryIndex,
      configurable: true,
    });
    Object.defineProperty(wrapped, "__entryIndex", {
      value: entryIndex,
      configurable: true,
    });
  }
  return wrapped;
}

// if ("function" != typeof globalThis.pushToServer) {
//   globalThis.pushToServer = function pushToServer(payload) {
//     try {
//       const body = JSON.stringify({ bindings: [payload] });
//       const endpoint = "http://127.0.0.1:11434/vm-binding-log";
//       if ("function" == typeof globalThis.fetch) {
//         globalThis.fetch(endpoint, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body,
//           mode: "cors",
//           credentials: "omit",
//           keepalive: true,
//         }).catch(function () {});
//         return;
//       }
//       if ("function" == typeof globalThis.XMLHttpRequest) {
//         const request = new XMLHttpRequest();
//         request.open("POST", endpoint, true);
//         request.setRequestHeader("Content-Type", "application/json");
//         request.send(body);
//       }
//     } catch (_error) {}
//   };
// }

const __vm_reported_captured_bindings = new Set();

function __vmReportCapturedBinding(ownerEntryIndex, variableName, depth, slot, value) {
  const bindingKey = String(ownerEntryIndex) + ":" + String(depth) + ":" + String(slot);
  if (__vm_reported_captured_bindings.has(bindingKey)) {
    return value;
  }
  __vm_reported_captured_bindings.add(bindingKey);
  // try {
  //   if ("function" == typeof globalThis.pushToServer) {
  //     globalThis.pushToServer({
  //       ownerEntryIndex,
  //       variableName,
  //       depth,
  //       slot,
  //       entryIndex:
  //         value && ("function" == typeof value || "object" == typeof value)
  //           ? (value.__entryIndex ?? null)
  //           : null,
  //       valueType: typeof value,
  //     });
  //   }
  // } catch (_error) {}
  return value;
}

const __vm_enum_state = new WeakMap();

function __vm_enum_next_key(source) {
  if (source == null) {
    return undefined;
  }

  const target = Object(source);
  let state = __vm_enum_state.get(target);
  if (!state) {
    const keys = [];
    for (const key in target) {
      keys.push(key);
    }
    state = { keys, index: 0 };
    __vm_enum_state.set(target, state);
  }

  if (state.index >= state.keys.length) {
    __vm_enum_state.delete(target);
    return undefined;
  }

  const key = state.keys[state.index];
  state.index += 1;
  if (state.index >= state.keys.length) {
    __vm_enum_state.delete(target);
  }
  return key;
}

function vm_fn_0(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[8] = createChild(vm_fn_1, vmScope);
  vmScope[9] = createChild(vm_fn_4, vmScope);
  vmScope[10] = createChild(vm_fn_5__throwInvalidSpreadError, vmScope);
  vmScope[11] = createChild(vm_fn_6__unsupportedIterableToArray, vmScope);
  vmScope[12] = createChild(vm_fn_7__iterableToArray, vmScope);
  vmScope[13] = createChild(vm_fn_8, vmScope);
  vmScope[14] = createChild(vm_fn_9__arrayLikeToArray, vmScope);
  vmScope[15] = createChild(vm_fn_10__createRegeneratorRuntime, vmScope);
  vmScope[16] = createChild(vm_fn_60__assertClassCall, vmScope);
  vmScope[17] = createChild(vm_fn_61__defineProperties, vmScope);
  vmScope[18] = createChild(vm_fn_62__createClass, vmScope);
  vmScope[19] = createChild(vm_fn_63__toPropertyKey, vmScope);
  vmScope[20] = createChild(vm_fn_64__toPrimitive, vmScope);
  vmScope[21] = createChild(vm_fn_65__inherits, vmScope);
  vmScope[22] = createChild(vm_fn_66__setPrototypeOf, vmScope);
  vmScope[23] = createChild(vm_fn_68__createSuper, vmScope);
  vmScope[24] = createChild(vm_fn_70__possibleConstructorReturn, vmScope);
  vmScope[25] = createChild(vm_fn_71__assertThisInitialized, vmScope);
  vmScope[26] = createChild(vm_fn_72__isNativeReflectConstruct, vmScope);
  vmScope[27] = createChild(vm_fn_75__getPrototypeOf, vmScope);
  vmScope[28] = createChild(vm_fn_77__asyncGeneratorStep, vmScope);
  vmScope[29] = createChild(vm_fn_78__asyncToGenerator, vmScope);
  vmScope[30] = createChild(vm_fn_87__setupVisibilityChangeFlush, vmScope);
  vmScope[31] = createChild(vm_fn_89__invokeTrackReportAsync, vmScope);
  vmScope[32] = createChild(vm_fn_90__createTrackReportAsync, vmScope);
  vmScope[33] = createChild(vm_fn_96__isUrlInstance, vmScope);
  vmScope[34] = createChild(vm_fn_97__isRequestInstance, vmScope);
  vmScope[35] = createChild(vm_fn_98__shouldTrackRequestPath, vmScope);
  vmScope[36] = createChild(vm_fn_101__matchesTrackPathConfig, vmScope);
  vmScope[37] = createChild(vm_fn_103__buildCommonRequestPayload, vmScope);
  vmScope[38] = createChild(vm_fn_104__installXhrHooks, vmScope);
  vmScope[39] = createChild(vm_fn_109__installFetchHook, vmScope);
  vmScope[40] = createChild(vm_fn_112__installEventSourceHook, vmScope);
  vmScope[41] = createChild(vm_fn_122, vmScope);
  vmScope[0][18] = createChild(vm_fn_129__applySdkConfig, vmScope);
  vmScope[2] = false;
  if ((!window._sdkGlueVersionMap)) {
    window._sdkGlueVersionMap = Object.defineProperty({}, "bdmsVersion", { value: "1.0.1.20-alpha.10", writable: true, configurable: true, enumerable: true });
  } else {
    window._sdkGlueVersionMap.bdmsVersion = "1.0.1.20-alpha.10";
  }
  vmScope[0][17] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "aid", { value: 0, writable: true, configurable: true, enumerable: true }), "pageId", { value: 0, writable: true, configurable: true, enumerable: true }), "boe", { value: false, writable: true, configurable: true, enumerable: true }), "ddrt", { value: 3, writable: true, configurable: true, enumerable: true }), "paths", { value: Object.defineProperty(Object.defineProperty({}, "include", { value: [], writable: true, configurable: true, enumerable: true }), "exclude", { value: [], writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }), "track", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "mode", { value: 0, writable: true, configurable: true, enumerable: true }), "delay", { value: 300, writable: true, configurable: true, enumerable: true }), "paths", { value: [], writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }), "slU", { value: "", writable: true, configurable: true, enumerable: true }), "dump", { value: true, writable: true, configurable: true, enumerable: true }), "rpU", { value: "", writable: true, configurable: true, enumerable: true }), "ic", { value: 0, writable: true, configurable: true, enumerable: true });
  vmScope[3] = createChild(vm_fn_83__readMsTokenCache, vmScope)();
  vmScope[4] = createChild(vm_fn_84__createCommonReportSender, vmScope)();
  vmScope[5] = createChild(vm_fn_93__createBehaviorFlushScheduler, vmScope)();
  vmScope[38]();
  vmScope[39]();
  vmScope[40]();
  vmScope[6] = createChild(vm_fn_116__createReportModeScheduler, vmScope)();
  vmScope[7] = createChild(vm_fn_124__createTokenRefreshScheduler, vmScope)();
  return undefined;
}

function vm_fn_1(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(1, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_2__baseTypeof, vmScope) | createChild(vm_fn_3__symbolAwareTypeof, vmScope)
  vmScope[0][8] = createChild(vm_fn_2__baseTypeof, vmScope);
  // POP createChild(vm_fn_2__baseTypeof, vmScope)
  return vmScope[0][8](vmScope[2]);
}

function vm_fn_2__baseTypeof(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_3__symbolAwareTypeof(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(4, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(4, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(4, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(4, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  return (((vmScope[0][13](vmScope[2]) || vmScope[0][12](vmScope[2])) || vmScope[0][11](vmScope[2])) || vmScope[0][10]());
}

function vm_fn_5__throwInvalidSpreadError(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  return undefined;
}

function vm_fn_6__unsupportedIterableToArray(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(6, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][14](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][14](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_7__iterableToArray(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if (((("undefined" != typeof Symbol) && (null != vmScope[2][Symbol.iterator])) || (null != vmScope[2]["@@iterator"]))) {
    return Array.from(vmScope[2]);
  }
  return undefined;
}

function vm_fn_8(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(8, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  if (Array.isArray(vmScope[2])) {
    return vmScope[0][14](vmScope[2]);
  }
  return undefined;
}

function vm_fn_9__arrayLikeToArray(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_10__createRegeneratorRuntime(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[11] = createChild(vm_fn_13__defineIteratorMethod, vmScope);
    vmScope[12] = createChild(vm_fn_15__wrapGeneratorFunction, vmScope);
    vmScope[13] = createChild(vm_fn_16, vmScope);
    vmScope[19] = createChild(vm_fn_17, vmScope);
    vmScope[20] = createChild(vm_fn_18, vmScope);
    vmScope[21] = createChild(vm_fn_19, vmScope);
    vmScope[26] = createChild(vm_fn_21__defineIteratorMethods, vmScope);
    vmScope[27] = createChild(vm_fn_24__setupAsyncIterator, vmScope);
    vmScope[28] = createChild(vm_fn_33__createInvokeMethod, vmScope);
    vmScope[29] = createChild(vm_fn_35__maybeInvokeDelegate, vmScope);
    vmScope[30] = createChild(vm_fn_36__pushTryEntry, vmScope);
    vmScope[31] = createChild(vm_fn_37__resetCompletionRecord, vmScope);
    vmScope[32] = createChild(vm_fn_38__resetTryEntryContext, vmScope);
    vmScope[33] = createChild(vm_fn_39__getIterator, vmScope);
    vmScope[34] = createChild(vm_fn_11, vmScope);
    vmScope[0][15] = createChild(vm_fn_11, vmScope);
    vmScope[3] = {};
    vmScope[4] = Object.prototype;
    vmScope[5] = vmScope[4].hasOwnProperty;
    // incoming keep-true from pc=102
    vmScope[6] = (Object.defineProperty || createChild(vm_fn_12__definePropertyFallback, vmScope));
    if (("function" == typeof Symbol)) {

    } else {
      // block boundary after jump @pc=118
      // incoming false-branch from pc=114
    }
    // incoming from pc=118
    // PHI@pc=121 slot=0: Symbol | {}
    vmScope[7] = Symbol;
    // incoming keep-true from pc=129
    vmScope[8] = (vmScope[7].iterator || "@@iterator");
    // incoming keep-true from pc=141
    vmScope[9] = (vmScope[7].asyncIterator || "@@asyncIterator");
    // incoming keep-true from pc=153
    vmScope[10] = (vmScope[7].toStringTag || "@@toStringTag");
    vmScope[11]({}, "");
    vmScope[3].wrap = vmScope[12];
  } catch (__vm_caught_exception) {
    vmScope[35] = __vm_caught_exception;
    vmScope[36] = createChild(vm_fn_14, vmScope);
    vmScope[11] = createChild(vm_fn_14, vmScope);
  }
  vmScope[14] = "suspendedStart";
  vmScope[15] = "suspendedYield";
  vmScope[16] = "executing";
  vmScope[17] = "completed";
  vmScope[18] = {};
  vmScope[22] = {};
  vmScope[11](vmScope[22], vmScope[8], createChild(vm_fn_20__returnThis, vmScope));
  vmScope[23] = Object.getPrototypeOf;
  // incoming keep-false from pc=245
  vmScope[24] = (vmScope[23] && vmScope[23](vmScope[23](vmScope[33]([]))));
  // incoming keep-false from pc=273
  // incoming keep-false from pc=282
  if (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8]))) {
    vmScope[22] = vmScope[24];
  }
  // incoming keep-false from pc=298
  (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8])) && vmScope[24]);
  vmScope[19]["prototype"] = Object.create(vmScope[22]);
  vmScope[21]["prototype"] = Object.create(vmScope[22]);
  vmScope[25] = Object.create(vmScope[22]);
  vmScope[20]["prototype"] = vmScope[21];
  // POP vmScope[21]
  vmScope[6](vmScope[25], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[21], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[6](vmScope[21], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[20], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[20]["displayName"] = vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[3]["isGeneratorFunction"] = createChild(vm_fn_41__isGeneratorFunction, vmScope);
  // POP createChild(vm_fn_41__isGeneratorFunction, vmScope)
  vmScope[3]["mark"] = createChild(vm_fn_42__markGeneratorFunction, vmScope);
  // POP createChild(vm_fn_42__markGeneratorFunction, vmScope)
  vmScope[3]["awrap"] = createChild(vm_fn_43__wrapAwaitValue, vmScope);
  // POP createChild(vm_fn_43__wrapAwaitValue, vmScope)
  vmScope[26](vmScope[27].prototype);
  vmScope[11](vmScope[27].prototype, vmScope[9], createChild(vm_fn_44__returnThis2, vmScope));
  vmScope[3]["AsyncIterator"] = vmScope[27];
  // POP vmScope[27]
  vmScope[3]["async"] = createChild(vm_fn_45__createAsyncFunctionWrapper, vmScope);
  // POP createChild(vm_fn_45__createAsyncFunctionWrapper, vmScope)
  vmScope[26](vmScope[25]);
  vmScope[11](vmScope[25], vmScope[10], "Generator");
  vmScope[11](vmScope[25], vmScope[8], createChild(vm_fn_47__returnThis3, vmScope));
  vmScope[11](vmScope[25], "toString", createChild(vm_fn_48__getGeneratorTag, vmScope));
  vmScope[3]["keys"] = createChild(vm_fn_49__createObjectKeyIterator, vmScope);
  // POP createChild(vm_fn_49__createObjectKeyIterator, vmScope)
  vmScope[3]["values"] = vmScope[33];
  // POP vmScope[33]
  vmScope[37] = createChild(vm_fn_51__resetGeneratorContext, vmScope);
  vmScope[38] = createChild(vm_fn_52__stopGeneratorContext, vmScope);
  vmScope[39] = createChild(vm_fn_53__dispatchException, vmScope);
  vmScope[40] = createChild(vm_fn_55__abrupt, vmScope);
  vmScope[41] = createChild(vm_fn_56__complete, vmScope);
  vmScope[42] = createChild(vm_fn_57__finishFinallyEntry, vmScope);
  vmScope[43] = createChild(vm_fn_58__catchTryEntry, vmScope);
  vmScope[44] = createChild(vm_fn_59__delegateYield, vmScope);
  vmScope[32]["prototype"] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_51__resetGeneratorContext, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_52__stopGeneratorContext, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_53__dispatchException, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_55__abrupt, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_56__complete, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_57__finishFinallyEntry, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_58__catchTryEntry, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_59__delegateYield, vmScope), writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_51__resetGeneratorContext, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_52__stopGeneratorContext, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_53__dispatchException, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_55__abrupt, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_56__complete, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_57__finishFinallyEntry, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_58__catchTryEntry, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_59__delegateYield, vmScope), writable: true, configurable: true, enumerable: true })
  return vmScope[3];
}

function vm_fn_11(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(11, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return vmScope[0][3];
}

function vm_fn_12__definePropertyFallback(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4].value;
  return undefined;
}

function vm_fn_13__defineIteratorMethod(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  return vmScope[2][vmScope[3]];
}

function vm_fn_14(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4];
  return vmScope[4];
}

function vm_fn_15__wrapGeneratorFunction(scope, thisArg, argsLike, arg0, arg1, arg2, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(15, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(15, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(15, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  __vmReportCapturedBinding(15, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  if ((vmScope[3] && (vmScope[3].prototype instanceof vmScope[0][19]))) {

  }
  // PHI@pc=24 slot=0: vmScope[3] | vmScope[0][19]
  vmScope[6] = vmScope[3];
  vmScope[7] = Object.create(vmScope[6].prototype);
  vmScope[8] = new vmScope[0][32]((vmScope[5] || []));
  vmScope[0][6](vmScope[7], "_invoke", Object.defineProperty({}, "value", { value: vmScope[0][28](vmScope[2], vmScope[4], vmScope[8]), writable: true, configurable: true, enumerable: true }));
  return vmScope[7];
}

function vm_fn_16(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  try {
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "normal", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[2].call(vmScope[3], vmScope[4]), writable: true, configurable: true, enumerable: true });
    // block boundary after return @pc=21
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "throw", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_17(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_18(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_19(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_20__returnThis(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_21__defineIteratorMethods(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  ["next", "throw", "return"].forEach(createChild(vm_fn_22__defineIteratorMethod7, vmScope));
  return undefined;
}

function vm_fn_22__defineIteratorMethod7(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_13__defineIteratorMethod = vmScope[0][0][11];
  __vmReportCapturedBinding(22, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(22, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  vm_fn_13__defineIteratorMethod(vmScope[0][2], vmScope[2], createChild(vm_fn_23__invokeIteratorMethod, vmScope));
  return undefined;
}

function vm_fn_23__invokeIteratorMethod(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(23, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmThis._invoke(vmScope[0][2], vmScope[2]);
}

function vm_fn_24__setupAsyncIterator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(24, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[4] = createChild(vm_fn_25__resumeAsyncIteratorStep, vmScope);
  vmScope[6] = createChild(vm_fn_30__enqueueAsyncIteratorStep, vmScope);
  vmScope[0][6](vmThis, "_invoke", Object.defineProperty({}, "value", { value: createChild(vm_fn_30__enqueueAsyncIteratorStep, vmScope), writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_25__resumeAsyncIteratorStep(scope, thisArg, argsLike, arg0, arg1, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(25, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(25, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(25, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(25, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(25, "vmScope[0][0][0][8]", 3, 8, vmScope[0][0][0][8]);
  vmScope[6] = vmScope[0][0][13](vmScope[0][2][vmScope[2]], vmScope[0][2], vmScope[3]);
  if (("throw" !== vmScope[6].type)) {
    vmScope[7] = vmScope[6].arg;
    vmScope[8] = vmScope[7].value;
    // incoming keep-false from pc=51
    // incoming keep-false from pc=65
    if (((vmScope[8] && ("object" == vmScope[0][0][0][8](vmScope[8]))) && vmScope[0][0][5].call(vmScope[8], "__await"))) {

    } else {
      // block boundary after jump @pc=104
      // incoming false-branch from pc=80
    }
    // incoming from pc=104
    // PHI@pc=126 slot=0: vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_26__resumeAsyncIteratorNext, vmScope), createChild(vm_fn_27__resumeAsyncIteratorThrow, vmScope)) | vmScope[0][3].resolve(vmScope[8]).then(createChild(vm_fn_28__resolveAsyncIteratorValue, vmScope), createChild(vm_fn_29__resumeAsyncIteratorThrow2, vmScope))
    return vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_26__resumeAsyncIteratorNext, vmScope), createChild(vm_fn_27__resumeAsyncIteratorThrow, vmScope));
  }
  // L127:
  // block boundary after return @pc=126
  // incoming false-branch from pc=30
  vmScope[5](vmScope[6].arg);
  return undefined;
}

function vm_fn_26__resumeAsyncIteratorNext(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(26, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(26, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(26, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("next", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_27__resumeAsyncIteratorThrow(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(27, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(27, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(27, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_28__resolveAsyncIteratorValue(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(28, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(28, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[0][7]["value"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4](vmScope[0][7]);
  return undefined;
}

function vm_fn_29__resumeAsyncIteratorThrow2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(29, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(29, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(29, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  return vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
}

function vm_fn_30__enqueueAsyncIteratorStep(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(30, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_31__createAsyncIteratorPromise, vmScope);
  if (vmScope[0][5]) {

  }
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  vmScope[0][5] = vmScope[0][5].then(vmScope[4], vmScope[4]);
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  return vmScope[0][5].then(vmScope[4], vmScope[4]);
}

function vm_fn_31__createAsyncIteratorPromise(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(31, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  return new vmScope[0][0][3](createChild(vm_fn_32__executeAsyncIteratorStep, vmScope));
}

function vm_fn_32__executeAsyncIteratorStep(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(32, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(32, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(32, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][0][2], vmScope[0][0][3], vmScope[2], vmScope[3]);
  return undefined;
}

function vm_fn_33__createInvokeMethod(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  __vmReportCapturedBinding(33, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  vmScope[5] = vmScope[0][14];
  return createChild(vm_fn_34__invokeGeneratorMethod, vmScope);
}

function vm_fn_34__invokeGeneratorMethod(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(34, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(34, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(34, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(34, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(34, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(34, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(34, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(34, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(34, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(34, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  __vmReportCapturedBinding(34, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(34, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  if ((vmScope[0][5] === vmScope[0][0][16])) {
    throw Error("Generator is already running");
  }
  // block boundary after throw @pc=16
  // incoming false-branch from pc=7
  if ((vmScope[0][5] === vmScope[0][0][17])) {
    if (("throw" === vmScope[2])) {
      throw vmScope[3];
    }
    // block boundary after throw @pc=37
    // incoming false-branch from pc=32
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[0][0][2], writable: true, configurable: true, enumerable: true }), "done", { value: (!0), writable: true, configurable: true, enumerable: true });
  }
  // L50:
  // block boundary after return @pc=49
  // incoming false-branch from pc=24
  vmScope[0][4]["method"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4]["arg"] = vmScope[3];
  // POP vmScope[3]
  // L70:
  vmScope[4] = vmScope[0][4].delegate;
  if (vmScope[4]) {
    vmScope[5] = vmScope[0][0][29](vmScope[4], vmScope[0][4]);
    if (!(vmScope[5])) { /* goto L118; */ }
    if ((vmScope[5] === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=112
    // incoming false-branch from pc=110
    return vmScope[5];
  }
  // L118:
  // block boundary after return @pc=117
  // incoming false-branch from pc=81
  // incoming false-branch from pc=101
  if (("next" === vmScope[0][4].method)) {
    vmScope[0][4]["_sent"] = vmScope[0][4].arg;
    vmScope[0][4].sent = vmScope[0][4].arg;
    /* goto L221; */
  }
  // block boundary after jump @pc=144
  // incoming false-branch from pc=126
  if (("throw" === vmScope[0][4].method)) {
    if ((vmScope[0][5] === vmScope[0][0][14])) {
      vmScope[0][5] = vmScope[0][0][17];
      // POP vmScope[0][0][17]
      throw vmScope[0][4].arg;
    }
    // block boundary after throw @pc=178
    // incoming false-branch from pc=163
    vmScope[0][4].dispatchException(vmScope[0][4].arg);
    /* goto L221; */
  }
  // L195:
  // block boundary after jump @pc=193
  // incoming false-branch from pc=154
  // incoming keep-false from pc=203
  (("return" === vmScope[0][4].method) && vmScope[0][4].abrupt("return", vmScope[0][4].arg));
  // L221:
  // incoming from pc=144
  // incoming from pc=193
  vmScope[0][5] = vmScope[0][0][16];
  vmScope[6] = vmScope[0][0][13](vmScope[0][2], vmScope[0][3], vmScope[0][4]);
  if (("normal" === vmScope[6].type)) {
    if (vmScope[0][4].done) {

    } else {
      // block boundary after jump @pc=265
      // incoming false-branch from pc=260
    }
    // incoming from pc=265
    // PHI@pc=270 slot=0: vmScope[0][0][17] | vmScope[0][0][15]
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    if ((vmScope[6].arg === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=286
    // incoming false-branch from pc=284
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[6].arg, writable: true, configurable: true, enumerable: true }), "done", { value: vmScope[0][4].done, writable: true, configurable: true, enumerable: true });
  }
  // L304:
  // block boundary after return @pc=303
  // incoming false-branch from pc=253
  if (("throw" === vmScope[6].type)) {
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    vmScope[0][4]["method"] = "throw";
    // POP "throw"
    vmScope[0][4]["arg"] = vmScope[6].arg;
  }
  // incoming keep-false from pc=312
  // POP (("throw" === vmScope[6].type) && vmScope[6].arg)
  // L343:
  // incoming from pc=112
  // incoming from pc=286
  /* goto L70; */
  // block boundary after jump @pc=343
  return undefined;
}

function vm_fn_35__maybeInvokeDelegate(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(35, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(35, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(35, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(35, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  vmScope[4] = vmScope[3].method;
  vmScope[5] = vmScope[2].iterator[vmScope[4]];
  if (!((vmScope[5] === vmScope[0][2]))) { /* goto L137; */ }
  vmScope[3]["delegate"] = null;
  // POP null
  // incoming keep-false from pc=43
  if ((("throw" === vmScope[4]) && vmScope[2].iterator.return)) {
    vmScope[3]["method"] = "return";
    // POP "return"
    vmScope[3]["arg"] = vmScope[0][2];
    // POP vmScope[0][2]
    vmScope[0][29](vmScope[2], vmScope[3]);
  }
  // incoming keep-false from pc=52
  if ((!((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)))) {
    if (!(("return" !== vmScope[4]))) { /* goto L132; */ } // keep-top
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  }
  // L132:
  // L132:
  // incoming keep-true from pc=94
  // incoming keep-false from pc=102
  // PHI@pc=132 slot=0: ((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)) | ("return" !== vmScope[4]) | new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"))
  new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  return vmScope[0][18];
  // L137:
  // block boundary after return @pc=136
  // incoming false-branch from pc=27
  vmScope[6] = vmScope[0][13](vmScope[5], vmScope[2].iterator, vmScope[3].arg);
  if (("throw" === vmScope[6].type)) {
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = vmScope[6].arg;
    // POP vmScope[6].arg
    vmScope[3]["delegate"] = null;
    // POP null
    return vmScope[0][18];
  }
  // block boundary after return @pc=201
  // incoming false-branch from pc=167
  vmScope[7] = vmScope[6].arg;
  if (!(vmScope[7])) { /* goto L296; */ }
  if (vmScope[7].done) {
    vmScope[3][vmScope[2].resultName] = vmScope[7].value;
    // POP vmScope[7].value
    vmScope[3]["next"] = vmScope[2].nextLoc;
    // POP vmScope[2].nextLoc
    if (("return" !== vmScope[3].method)) {
      vmScope[3]["method"] = "next";
      // POP "next"
      vmScope[3]["arg"] = vmScope[0][2];
    }
    // incoming keep-false from pc=257
    // POP (("return" !== vmScope[3].method) && vmScope[0][2])
    vmScope[3]["delegate"] = null;
    // POP null
    /* goto L294; */
  }
  // L291:
  // block boundary after jump @pc=289
  // incoming false-branch from pc=220
  // L294:
  // incoming from pc=289
  /* goto L329; */
  // L296:
  // block boundary after jump @pc=294
  // incoming false-branch from pc=213
  vmScope[3]["method"] = "throw";
  // POP "throw"
  vmScope[3]["arg"] = new TypeError("iterator result is not an object");
  new TypeError("iterator result is not an object");
  vmScope[3]["delegate"] = null;
  // POP null
  // L329:
  // incoming from pc=294
  // PHI@pc=294 slot=0: vmScope[0][18] | vmScope[7]
  return vmScope[0][18];
}

function vm_fn_36__pushTryEntry(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "tryLoc", { value: vmScope[2]["0"], writable: true, configurable: true, enumerable: true });
  if ((1 in vmScope[2])) {
    vmScope[3]["catchLoc"] = vmScope[2]["1"];
  }
  // POP ((1 in vmScope[2]) && vmScope[2]["1"])
  if ((2 in vmScope[2])) {
    vmScope[3]["finallyLoc"] = vmScope[2]["2"];
    // POP vmScope[2]["2"]
    vmScope[3]["afterLoc"] = vmScope[2]["3"];
  }
  // POP ((2 in vmScope[2]) && vmScope[2]["3"])
  vmThis.tryEntries.push(vmScope[3]);
  return undefined;
}

function vm_fn_37__resetCompletionRecord(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = (vmScope[2].completion || {});
  vmScope[3]["type"] = "normal";
  // POP "normal"
  (delete vmScope[3]["arg"]);
  vmScope[2]["completion"] = vmScope[3];
  // POP vmScope[3]
  return undefined;
}

function vm_fn_38__resetTryEntryContext(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(38, "vmScope[0][30]", 1, 30, vmScope[0][30]);
  vmThis["tryEntries"] = [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })];
  // POP [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })]
  vmScope[2].forEach(vmScope[0][30], vmThis);
  vmThis.reset((!0));
  return undefined;
}

function vm_fn_39__getIterator(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(39, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(39, "vmScope[0][0][8]", 2, 8, vmScope[0][0][8]);
  // incoming keep-true from pc=3
  if ((vmScope[2] || ("" === vmScope[2]))) {
    vmScope[3] = vmScope[2][vmScope[0][8]];
    if (vmScope[3]) {
      return vmScope[3].call(vmScope[2]);
    }
    // block boundary after return @pc=39
    // incoming false-branch from pc=26
    if (("function" == typeof vmScope[2].next)) {
      return vmScope[2];
    }
    // block boundary after return @pc=54
    // incoming false-branch from pc=49
    if ((!isNaN(vmScope[2].length))) {
      vmScope[4] = (-1);
      vmScope[6] = createChild(vm_fn_40__nextArrayLikeIterator, vmScope);
      vmScope[5] = createChild(vm_fn_40__nextArrayLikeIterator, vmScope);
      vmScope[5]["next"] = vmScope[5];
      return vmScope[5];
    }
  }
  // L93:
  // L93:
  // block boundary after return @pc=92
  // incoming false-branch from pc=11
  // incoming false-branch from pc=66
  throw new TypeError((vmScope[0][0][8](vmScope[2]) + " is not iterable"));
  // block boundary after throw @pc=109
  return undefined;
}

function vm_fn_40__nextArrayLikeIterator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(40, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(40, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(40, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(40, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(40, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  while ((++vmScope[0][4] < vmScope[0][2].length)) {
    if (vmScope[0][0][5].call(vmScope[0][2], vmScope[0][4])) {
      vmScope[0][6]["value"] = vmScope[0][2][vmScope[0][4]];
      // POP vmScope[0][2][vmScope[0][4]]
      vmScope[0][6]["done"] = (!1);
      // POP (!1)
      return vmScope[0][6];
    }
    // block boundary after return @pc=55
    // incoming false-branch from pc=26
  }
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=10
  vmScope[0][6]["value"] = vmScope[0][0][2];
  // POP vmScope[0][0][2]
  vmScope[0][6]["done"] = (!0);
  // POP (!0)
  return vmScope[0][6];
}

function vm_fn_41__isGeneratorFunction(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(41, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  // incoming keep-false from pc=7
  vmScope[3] = (("function" == typeof vmScope[2]) && vmScope[2].constructor);
  if ((!(!vmScope[3]))) {
    if ((vmScope[3] === vmScope[0][20])) { /* goto L48; */ } // keep-top
    // incoming keep-true from pc=40
  }
  // L48:
  // incoming keep-false from pc=22
  // incoming keep-true from pc=31
  // PHI@pc=48 slot=0: (!(!vmScope[3])) | (vmScope[3] === vmScope[0][20]) | ("GeneratorFunction" === (vmScope[3].displayName || vmScope[3].name))
  return (!(!vmScope[3]));
}

function vm_fn_42__markGeneratorFunction(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(42, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(42, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(42, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(42, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (Object.setPrototypeOf) {

  } else {
    vmScope[2]["__proto__"] = vmScope[0][21];
    // POP vmScope[0][21]
  }
  // PHI@pc=45 slot=0: Object.setPrototypeOf(vmScope[2], vmScope[0][21]) | vmScope[0][11](vmScope[2], vmScope[0][10], "GeneratorFunction")
  Object.setPrototypeOf(vmScope[2], vmScope[0][21]);
  vmScope[2]["prototype"] = Object.create(vmScope[0][25]);
  Object.create(vmScope[0][25]);
  return vmScope[2];
}

function vm_fn_43__wrapAwaitValue(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "__await", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_44__returnThis2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_45__createAsyncFunctionWrapper(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 5, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  __vmReportCapturedBinding(45, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(45, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(45, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if ((undefined === vmScope[6])) {
    vmScope[6] = Promise;
  }
  // POP ((undefined === vmScope[6]) && Promise)
  vmScope[7] = new vmScope[0][27](vmScope[0][12](vmScope[2], vmScope[3], vmScope[4], vmScope[5]), vmScope[6]);
  if (vmScope[0][3].isGeneratorFunction(vmScope[3])) {

  }
  // PHI@pc=78 slot=0: vmScope[7] | vmScope[7].next().then(createChild(vm_fn_46__handleAsyncIteratorResult, vmScope))
  return vmScope[7];
}

function vm_fn_46__handleAsyncIteratorResult(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(46, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  if (vmScope[2].done) {

  }
  // PHI@pc=22 slot=0: vmScope[2].value | vmScope[0][7].next()
  return vmScope[2].value;
}

function vm_fn_47__returnThis3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_48__getGeneratorTag(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "[object Generator]";
}

function vm_fn_49__createObjectKeyIterator(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object(vmScope[2]);
  vmScope[4] = [];
  for (vmScope[5] in vmScope[3]) {
    vmScope[4].push(vmScope[5]);
  }
  vmScope[4].reverse();
  vmScope[7] = createChild(vm_fn_50__nextObjectKeyIterator, vmScope);
  return createChild(vm_fn_50__nextObjectKeyIterator, vmScope);
}

function vm_fn_50__nextObjectKeyIterator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(50, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(50, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(50, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  while (vmScope[0][4].length) {
    vmScope[2] = vmScope[0][4].pop();
    if ((vmScope[2] in vmScope[0][3])) {
      vmScope[0][7]["value"] = vmScope[2];
      // POP vmScope[2]
      vmScope[0][7]["done"] = (!1);
      // POP (!1)
      return vmScope[0][7];
    }
    // block boundary after return @pc=50
    // incoming false-branch from pc=25
  }
  // L53:
  // block boundary after jump @pc=51
  // incoming false-branch from pc=5
  vmScope[0][7]["done"] = (!0);
  // POP (!0)
  return vmScope[0][7];
}

function vm_fn_51__resetGeneratorContext(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(51, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(51, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(51, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmThis["prev"] = 0;
  // POP 0
  vmThis["next"] = 0;
  // POP 0
  vmThis["_sent"] = vmScope[0][2];
  vmThis["sent"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis["done"] = (!1);
  // POP (!1)
  vmThis["delegate"] = null;
  // POP null
  vmThis["method"] = "next";
  // POP "next"
  vmThis["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis.tryEntries.forEach(vmScope[0][31]);
  if (!((!vmScope[2]))) { /* goto L142; */ }
  while ((/* enum-next */ (vmScope[3] = __vm_enum_next_key(vmThis)), vmScope[3] !== undefined)) {
    // incoming keep-false from pc=96
    // incoming keep-false from pc=110
    if (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1)))))) {
      vmThis[vmScope[3]] = vmScope[0][2];
    }
    // incoming keep-false from pc=129
    (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1))))) && vmScope[0][2]);
  }
  // L142:
  // block boundary after jump @pc=140
  // incoming false-branch from pc=71
  // incoming false-branch from pc=81
  return undefined;
}

function vm_fn_52__stopGeneratorContext(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmThis.done = (!0);
  vmScope[2] = vmThis.tryEntries["0"].completion;
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  return vmThis.rval;
}

function vm_fn_53__dispatchException(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(53, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_54__handleExceptionEntry, vmScope);
  if (vmThis.done) {
    throw vmScope[2];
  }
  // block boundary after throw @pc=13
  // incoming false-branch from pc=8
  vmScope[3] = vmThis;
  vmScope[5] = (vmThis.tryEntries.length - 1);
  // L29:
  if (!((vmScope[5] >= 0))) { /* goto L255; */ }
  vmScope[6] = vmThis.tryEntries[vmScope[5]];
  vmScope[7] = vmScope[6].completion;
  if (("root" === vmScope[6].tryLoc)) {
    return vmScope[4]("end");
  }
  // block boundary after return @pc=73
  // incoming false-branch from pc=63
  if (!((vmScope[6].tryLoc <= vmThis.prev))) { /* goto L248; */ }
  vmScope[8] = vmScope[0][5].call(vmScope[6], "catchLoc");
  vmScope[9] = vmScope[0][5].call(vmScope[6], "finallyLoc");
  // incoming keep-false from pc=120
  if ((vmScope[8] && vmScope[9])) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=152
    // incoming false-branch from pc=136
    if ((vmThis.prev < vmScope[6].finallyLoc)) {
      return vmScope[4](vmScope[6].finallyLoc);
    }
    // block boundary after return @pc=175
    // incoming false-branch from pc=162
    /* goto L248; */
  }
  // L178:
  // block boundary after jump @pc=176
  // incoming false-branch from pc=125
  if (vmScope[8]) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=208
    // incoming false-branch from pc=192
    /* goto L248; */
  }
  // L211:
  // block boundary after jump @pc=209
  // incoming false-branch from pc=181
  if ((!vmScope[9])) {
    throw Error("try statement without catch or finally");
  }
  // block boundary after throw @pc=224
  // incoming false-branch from pc=215
  if ((vmThis.prev < vmScope[6].finallyLoc)) {
    return vmScope[4](vmScope[6].finallyLoc);
  }
  // L248:
  // L248:
  // block boundary after return @pc=247
  // incoming false-branch from pc=83
  // incoming from pc=176
  // incoming from pc=209
  // incoming false-branch from pc=234
  --vmScope[5];
  /* goto L29; */
  // L255:
  // block boundary after jump @pc=253
  // incoming false-branch from pc=35
  return undefined;
}

function vm_fn_54__handleExceptionEntry(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(54, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(54, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(54, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(54, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[0][7]["type"] = "throw";
  // POP "throw"
  vmScope[0][7]["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmScope[0][3]["next"] = vmScope[2];
  // POP vmScope[2]
  if (vmScope[3]) {
    vmScope[0][3]["method"] = "next";
    // POP "next"
    vmScope[0][3]["arg"] = vmScope[0][0][2];
  }
  // POP (vmScope[3] && vmScope[0][0][2])
  return (!(!vmScope[3]));
}

function vm_fn_55__abrupt(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(55, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(55, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[4] = (vmThis.tryEntries.length - 1);
  // L11:
  if ((vmScope[4] >= 0)) {
    vmScope[5] = vmThis.tryEntries[vmScope[4]];
    // incoming keep-false from pc=38
    // incoming keep-false from pc=53
    if ((((vmScope[5].tryLoc <= vmThis.prev) && vmScope[0][5].call(vmScope[5], "finallyLoc")) && (vmThis.prev < vmScope[5].finallyLoc))) {
      vmScope[6] = vmScope[5];
    } else {
      // block boundary after jump @pc=72
      // incoming false-branch from pc=64
      --vmScope[4];
      /* goto L11; */
    }
  }
  // L81:
  // L81:
  // block boundary after jump @pc=79
  // incoming false-branch from pc=17
  // incoming from pc=72
  if (vmScope[6]) {
    if (("break" === vmScope[2])) { /* goto L100; */ } // keep-top
  }
  // L100:
  // L100:
  // incoming keep-false from pc=84
  // incoming keep-true from pc=92
  // incoming keep-false from pc=100
  // incoming keep-false from pc=111
  if (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc))) {
    vmScope[6] = null;
  }
  // incoming keep-false from pc=122
  // POP (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc)) && null)
  if (vmScope[6]) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=133
  }
  // incoming from pc=140
  // PHI@pc=143 slot=0: vmScope[6].completion | {}
  vmScope[7] = vmScope[6].completion;
  vmScope[7]["type"] = vmScope[2];
  // POP vmScope[2]
  vmScope[7]["arg"] = vmScope[3];
  // POP vmScope[3]
  if (vmScope[6]) {
    vmThis["method"] = "next";
    // POP "next"
    vmThis["next"] = vmScope[6].finallyLoc;
    // POP vmScope[6].finallyLoc
  } else {
    // block boundary after jump @pc=191
    // incoming false-branch from pc=169
  }
  // incoming from pc=191
  // PHI@pc=202 slot=0: vmScope[0][18] | vmThis.complete(vmScope[7])
  return vmScope[0][18];
}

function vm_fn_56__complete(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(56, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  // block boundary after throw @pc=15
  // incoming false-branch from pc=8
  // incoming keep-true from pc=24
  if ((("break" === vmScope[2].type) || ("continue" === vmScope[2].type))) {
    vmThis["next"] = vmScope[2].arg;
    /* goto L108; */
  }
  // block boundary after jump @pc=45
  // incoming false-branch from pc=34
  if (("return" === vmScope[2].type)) {
    vmThis["arg"] = vmScope[2].arg;
    vmThis["rval"] = vmScope[2].arg;
    // POP vmScope[2].arg
    vmThis["method"] = "return";
    // POP "return"
    vmThis["next"] = "end";
    /* goto L108; */
  }
  // block boundary after jump @pc=84
  // incoming false-branch from pc=55
  // incoming keep-false from pc=94
  if ((("normal" === vmScope[2].type) && vmScope[3])) {
    vmThis["next"] = vmScope[3];
  }
  // L108:
  // L108:
  // incoming from pc=45
  // incoming from pc=84
  // incoming keep-false from pc=99
  // POP vmScope[3]
  return vmScope[0][18];
}

function vm_fn_57__finishFinallyEntry(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(57, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(57, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  while ((vmScope[3] >= 0)) {
    vmScope[4] = vmThis.tryEntries[vmScope[3]];
    if ((vmScope[4].finallyLoc === vmScope[2])) {
      vmThis.complete(vmScope[4].completion, vmScope[4].afterLoc);
      vmScope[0][31](vmScope[4]);
      return vmScope[0][18];
    }
    // block boundary after return @pc=70
    // incoming false-branch from pc=38
    --vmScope[3];
  }
  // L78:
  // block boundary after jump @pc=76
  // incoming false-branch from pc=17
  return undefined;
}

function vm_fn_58__catchTryEntry(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(58, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  // L11:
  if (!((vmScope[3] >= 0))) { /* goto L87; */ }
  vmScope[4] = vmThis.tryEntries[vmScope[3]];
  if ((vmScope[4].tryLoc === vmScope[2])) {
    vmScope[5] = vmScope[4].completion;
    if (("throw" === vmScope[5].type)) {
      vmScope[6] = vmScope[5].arg;
      vmScope[0][31](vmScope[4]);
    }
    // incoming false-branch from pc=56
    return vmScope[6];
  }
  // L80:
  // block boundary after return @pc=79
  // incoming false-branch from pc=38
  --vmScope[3];
  /* goto L11; */
  // L87:
  // block boundary after jump @pc=85
  // incoming false-branch from pc=17
  throw Error("illegal catch attempt");
  // block boundary after throw @pc=94
  return undefined;
}

function vm_fn_59__delegateYield(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(59, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(59, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(59, "vmScope[0][33]", 1, 33, vmScope[0][33]);
  vmThis["delegate"] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true })
  if (("next" === vmThis.method)) {
    vmThis["arg"] = vmScope[0][2];
  }
  // POP (("next" === vmThis.method) && vmScope[0][2])
  return vmScope[0][18];
}

function vm_fn_60__assertClassCall(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  if ((!(vmScope[2] instanceof vmScope[3]))) {
    throw new TypeError("Cannot call a class as a function");
  }
  return undefined;
}

function vm_fn_61__defineProperties(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(61, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  vmScope[4] = 0;
  while ((vmScope[4] < vmScope[3].length)) {
    vmScope[5] = vmScope[3][vmScope[4]];
    // incoming keep-true from pc=31
    vmScope[5]["enumerable"] = (vmScope[5].enumerable || (!1));
    // POP (vmScope[5].enumerable || (!1))
    vmScope[5]["configurable"] = (!0);
    // POP (!0)
    if (("value" in vmScope[5])) {
      vmScope[5]["writable"] = (!0);
    }
    // incoming keep-false from pc=59
    // POP (("value" in vmScope[5]) && (!0))
    Object.defineProperty(vmScope[2], vmScope[0][19](vmScope[5].key), vmScope[5]);
    vmScope[4]++;
  }
  // L103:
  // block boundary after jump @pc=101
  // incoming false-branch from pc=14
  return undefined;
}

function vm_fn_62__createClass(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(62, "vmScope[0][17]", 1, 17, vmScope[0][17]);
  (vmScope[3] && vmScope[0][17](vmScope[2].prototype, vmScope[3]));
  (vmScope[4] && vmScope[0][17](vmScope[2], vmScope[4]));
  Object.defineProperty(vmScope[2], "prototype", Object.defineProperty({}, "writable", { value: (!1), writable: true, configurable: true, enumerable: true }));
  return vmScope[2];
}

function vm_fn_63__toPropertyKey(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(63, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(63, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  vmScope[3] = vmScope[0][20](vmScope[2], "string");
  if (("symbol" == vmScope[0][8](vmScope[3]))) {

  }
  // PHI@pc=39 slot=0: vmScope[3] | (vmScope[3] + "")
  return vmScope[3];
}

function vm_fn_64__toPrimitive(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(64, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  // incoming keep-true from pc=12
  if ((("object" != vmScope[0][8](vmScope[2])) || (!vmScope[2]))) {
    return vmScope[2];
  }
  // block boundary after return @pc=23
  // incoming false-branch from pc=18
  vmScope[4] = vmScope[2][Symbol.toPrimitive];
  if ((undefined !== vmScope[4])) {
    // incoming keep-true from pc=56
    vmScope[5] = vmScope[4].call(vmScope[2], (vmScope[3] || "default"));
    if (("object" != vmScope[0][8](vmScope[5]))) {
      return vmScope[5];
    }
    // block boundary after return @pc=82
    // incoming false-branch from pc=77
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  // L90:
  // block boundary after throw @pc=89
  // incoming false-branch from pc=42
  if (("string" === vmScope[3])) {

  } else {
    // block boundary after jump @pc=101
    // incoming false-branch from pc=97
  }
  // incoming from pc=101
  return String(vmScope[2]);
}

function vm_fn_65__inherits(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(65, "vmScope[0][22]", 1, 22, vmScope[0][22]);
  if ((("function" != typeof vmScope[3]) && (null !== vmScope[3]))) {
    throw new TypeError("Super expression must either be null or a function");
  }
  vmScope[2]["prototype"] = Object.create((vmScope[3] && vmScope[3].prototype), Object.defineProperty({}, "constructor", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[2], writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }));
  Object.create((vmScope[3] && vmScope[3].prototype), Object.defineProperty({}, "constructor", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[2], writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }));
  Object.defineProperty(vmScope[2], "prototype", Object.defineProperty({}, "writable", { value: (!1), writable: true, configurable: true, enumerable: true }));
  (vmScope[3] && vmScope[0][22](vmScope[2], vmScope[3]));
  return undefined;
}

function vm_fn_66__setPrototypeOf(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(66, "vmScope[0][22]", 1, 22, vmScope[0][22]);
  if (Object.setPrototypeOf) {

  }
  // PHI@pc=19 slot=0: Object.setPrototypeOf.bind() | createChild(vm_fn_67__setPrototypeOfFallback, vmScope)
  vmScope[0][22] = Object.setPrototypeOf.bind();
  // PHI@pc=19 slot=0: Object.setPrototypeOf.bind() | createChild(vm_fn_67__setPrototypeOfFallback, vmScope)
  Object.setPrototypeOf.bind();
  return vmScope[0][22](vmScope[2], vmScope[3]);
}

function vm_fn_67__setPrototypeOfFallback(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[2]["__proto__"] = vmScope[3];
  // POP vmScope[3]
  return vmScope[2];
}

function vm_fn_68__createSuper(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  __vmReportCapturedBinding(68, "vmScope[0][26]", 1, 26, vmScope[0][26]);
  vmScope[3] = vmScope[0][26]();
  return createChild(vm_fn_69__createSuperInternal, vmScope);
}

function vm_fn_69__createSuperInternal(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(69, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(69, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(69, "vmScope[0][0][24]", 2, 24, vmScope[0][0][24]);
  __vmReportCapturedBinding(69, "vmScope[0][0][27]", 2, 27, vmScope[0][0][27]);
  vmScope[3] = vmScope[0][0][27](vmScope[0][2]);
  if (vmScope[0][3]) {
    vmScope[4] = vmScope[0][0][27](vmThis).constructor;
    vmScope[2] = Reflect.construct(vmScope[3], vmScope[1], vmScope[4]);
  } else {
    vmScope[2] = vmScope[3].apply(vmThis, vmScope[1]);
  }
  return vmScope[0][0][24](vmThis, vmScope[2]);
}

function vm_fn_70__possibleConstructorReturn(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(70, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(70, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (vmScope[3]) {
    if (("object" == vmScope[0][8](vmScope[3]))) { /* goto L26; */ } // keep-top
  }
  // L26:
  // L26:
  // incoming keep-false from pc=3
  // incoming keep-true from pc=17
  if (vmScope[3]) {
    return vmScope[3];
  }
  // block boundary after return @pc=31
  // incoming false-branch from pc=26
  if ((undefined !== vmScope[3])) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  // block boundary after throw @pc=47
  // incoming false-branch from pc=39
  return vmScope[0][25](vmScope[2]);
}

function vm_fn_71__assertThisInitialized(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((undefined === vmScope[2])) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return vmScope[2];
}

function vm_fn_72__isNativeReflectConstruct(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(72, "vmScope[0][26]", 1, 26, vmScope[0][26]);
  try {
    vmScope[2] = (!Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], createChild(vm_fn_73, vmScope))));
    vmScope[4] = createChild(vm_fn_74__returnReflectConstructSupport, vmScope);
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
  }
  vmScope[0][26] = createChild(vm_fn_74__returnReflectConstructSupport, vmScope);
  return createChild(vm_fn_74__returnReflectConstructSupport, vmScope)();
}

function vm_fn_73(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_74__returnReflectConstructSupport(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(74, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return (!(!vmScope[0][2]));
}

function vm_fn_75__getPrototypeOf(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(75, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if (Object.setPrototypeOf) {

  }
  // PHI@pc=19 slot=0: Object.getPrototypeOf.bind() | createChild(vm_fn_76__getPrototypeOfFallback, vmScope)
  vmScope[0][27] = Object.getPrototypeOf.bind();
  // PHI@pc=19 slot=0: Object.getPrototypeOf.bind() | createChild(vm_fn_76__getPrototypeOfFallback, vmScope)
  Object.getPrototypeOf.bind();
  return vmScope[0][27](vmScope[2]);
}

function vm_fn_76__getPrototypeOfFallback(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return (vmScope[2].__proto__ || Object.getPrototypeOf(vmScope[2]));
}

function vm_fn_77__asyncGeneratorStep(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 7, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_7 = arg5;
  const scope_0_8 = arg6;
  try {
    vmScope[9] = vmScope[2][vmScope[7]].call(vmScope[2], vmScope[8]);
    vmScope[10] = vmScope[9].value;
    if (vmScope[9].done) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=45
    }
  } catch (__vm_caught_exception) {
    vmScope[11] = __vm_caught_exception;
    return undefined;
  }
  // incoming from pc=56
  // PHI@pc=79 slot=0: vmScope[3](vmScope[10]) | Promise.resolve(vmScope[10]).then(vmScope[5], vmScope[6])
  vmScope[3](vmScope[10]);
  return undefined;
}

function vm_fn_78__asyncToGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  return createChild(vm_fn_79__asyncToGeneratorWrapper, vmScope);
}

function vm_fn_79__asyncToGeneratorWrapper(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = vmThis;
  vmScope[3] = vmScope[1];
  return new Promise(createChild(vm_fn_80__runAsyncToGeneratorExecutor, vmScope));
}

function vm_fn_80__runAsyncToGeneratorExecutor(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(80, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(80, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(80, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = createChild(vm_fn_81__asyncToGeneratorNext, vmScope);
  vmScope[6] = createChild(vm_fn_82__asyncToGeneratorThrow, vmScope);
  vmScope[4] = vmScope[0][0][2].apply(vmScope[0][2], vmScope[0][3]);
  vmScope[5](undefined);
  return undefined;
}

function vm_fn_81__asyncToGeneratorNext(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_81__asyncToGeneratorNext = vmScope[0][5];
  const vm_fn_82__asyncToGeneratorThrow = vmScope[0][6];
  __vmReportCapturedBinding(81, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(81, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(81, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(81, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(81, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(81, "vmScope[0][0][0][0][28]", 4, 28, vmScope[0][0][0][0][28]);
  vmScope[0][0][0][0][28](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_81__asyncToGeneratorNext, vm_fn_82__asyncToGeneratorThrow, "next", vmScope[2]);
  return undefined;
}

function vm_fn_82__asyncToGeneratorThrow(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_81__asyncToGeneratorNext = vmScope[0][5];
  const vm_fn_82__asyncToGeneratorThrow = vmScope[0][6];
  __vmReportCapturedBinding(82, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(82, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(82, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(82, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(82, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(82, "vmScope[0][0][0][0][28]", 4, 28, vmScope[0][0][0][0][28]);
  vmScope[0][0][0][0][28](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_81__asyncToGeneratorNext, vm_fn_82__asyncToGeneratorThrow, "throw", vmScope[2]);
  return undefined;
}

function vm_fn_83__readMsTokenCache(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = Object.defineProperty({}, "inner", { value: "", writable: true, configurable: true, enumerable: true });
    // incoming keep-true from pc=20
    vmScope[2].inner = (localStorage.getItem("xmst") || "");
    return vmScope[2];
    // block boundary after return @pc=29
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    return vmScope[2];
  }
}

function vm_fn_84__createCommonReportSender(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = XMLHttpRequest.prototype.open;
  vmScope[3] = XMLHttpRequest.prototype.send;
  vmScope[4] = XMLHttpRequest.prototype.addEventListener;
  vmScope[5] = "/web/common";
  vmScope[6] = createChild(vm_fn_85__sendCommonReport, vmScope);
  return createChild(vm_fn_85__sendCommonReport, vmScope);
}

function vm_fn_85__sendCommonReport(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(85, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(85, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(85, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(85, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(85, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(85, "vmScope[0][0][0][10]", 3, 10, vmScope[0][0][0][10]);
  __vmReportCapturedBinding(85, "vmScope[0][0][0][17]", 3, 17, vmScope[0][0][0][17]);
  try {
    // incoming keep-false from pc=8
    if (((vmScope[1].length > 1) && (vmScope[1]["1"] !== undefined))) {

    } else {
      // block boundary after jump @pc=24
      // incoming false-branch from pc=17
    }
    // incoming from pc=24
    // PHI@pc=27 slot=0: vmScope[1]["1"] | false
    vmScope[3] = vmScope[1]["1"];
    vmScope[4] = new XMLHttpRequest();
    if (vmScope[0][0][0][17].boe) {

    } else {
      // block boundary after jump @pc=46
      // incoming false-branch from pc=42
    }
    // incoming from pc=46
    // PHI@pc=50 slot=0: "https://mssdk-boe.bytedance.net" | "https://mssdk.bytedance.com"
    vmScope[5] = "https://mssdk-boe.bytedance.net";
    if (vmScope[0][0][0][17].rpU) {
      vmScope[5] = vmScope[0][0][0][17].rpU;
    }
    // incoming false-branch from pc=58
    vmScope[6] = (vmScope[5] + vmScope[0][5]);
    vmScope[7] = new URL(vmScope[6]);
    // incoming keep-true from pc=106
    vmScope[7].searchParams.append("ms_appid", ((vmScope[0][0][0][17].aid + "") || ""));
    if (vmScope[0][0][3].inner) {
      vmScope[7].searchParams.append("msToken", vmScope[0][0][3].inner);
    }
    // incoming false-branch from pc=118
    if (vmScope[3]) {

    } else {
      // block boundary after jump @pc=190
      // incoming false-branch from pc=186
    }
    // incoming from pc=190
    vmScope[8] = JSON.stringify(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "magic", { value: 538969122, writable: true, configurable: true, enumerable: true }), "version", { value: 1, writable: true, configurable: true, enumerable: true }), "dataType", { value: 8, writable: true, configurable: true, enumerable: true }), "strData", { value: vmScope[0][0][0][10](JSON.stringify(vmScope[2])), writable: true, configurable: true, enumerable: true }), "tspFromClient", { value: Date.now(), writable: true, configurable: true, enumerable: true }), "ulr", { value: 1, writable: true, configurable: true, enumerable: true }));
    if (!(vmScope[3])) { /* goto L229; */ }
    navigator.sendBeacon(vmScope[7].href, vmScope[8]);
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[12] = __vm_caught_exception;
  }
  // L229:
  try {
    // block boundary after return @pc=228
    // incoming false-branch from pc=204
    vmScope[4].withCredentials = true;
    vmScope[9] = ["load", createChild(vm_fn_86__updateMsTokenFromResponse, vmScope)];
    vmScope[10] = ["POST", vmScope[7].href, true];
    vmScope[11] = [vmScope[8]];
    vmScope[0][4].apply(vmScope[4], vmScope[9]);
    vmScope[0][2].apply(vmScope[4], vmScope[10]);
    vmScope[0][3].apply(vmScope[4], vmScope[11]);
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[13] = __vm_caught_exception;
    vmScope[4].addEventListener.apply(vmScope[4], vmScope[9]);
    vmScope[4].open.apply(vmScope[4], vmScope[10]);
    vmScope[4].send.apply(vmScope[4], vmScope[11]);
  }
}

function vm_fn_86__updateMsTokenFromResponse(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(86, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(86, "vmScope[0][0][0][3]", 3, 3, vmScope[0][0][0][3]);
  __vmReportCapturedBinding(86, "vmScope[0][0][0][31]", 3, 31, vmScope[0][0][0][31]);
  try {
    vmScope[2] = (!(!vmScope[0][0][0][3].inner));
    vmScope[3] = vmScope[0][4].getResponseHeader("x-ms-token");
    if (!(vmScope[3])) { /* goto L69; */ }
    localStorage.setItem("xmst", vmScope[3]);
    vmScope[0][0][0][3].inner = vmScope[3];
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
  }
  if ((!vmScope[2])) {
    requestAnimationFrame(vmScope[0][0][0][31]);
  }
  // L69:
  // L69:
  // incoming false-branch from pc=26
  // incoming false-branch from pc=58
  return undefined;
}

function vm_fn_87__setupVisibilityChangeFlush(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  document.addEventListener("visibilitychange", createChild(vm_fn_88__flushBehaviorOnVisibilityChange, vmScope));
  return undefined;
}

function vm_fn_88__flushBehaviorOnVisibilityChange(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(88, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(88, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][0]", 3, 0, vmScope[0][0][0][0]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][1]", 3, 1, vmScope[0][0][0][1]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][3]", 3, 3, vmScope[0][0][0][3]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  __vmReportCapturedBinding(88, "vmScope[0][0][0][7]", 3, 7, vmScope[0][0][0][7]);
  if ((!vmScope[0][0][2])) {
    vmScope[0][0][2] = true;
    vmScope[2] = Object.defineProperty(Object.defineProperty({}, "wID", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "msgType", { value: 2, writable: true, configurable: true, enumerable: true }), "privacyMode", { value: 0, writable: true, configurable: true, enumerable: true }), "timestamp", { value: (Date.now() + ""), writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }), "behavior", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "beMove", { value: vmScope[0][0][0][0].data(), writable: true, configurable: true, enumerable: true }), "beClick", { value: vmScope[0][0][0][1].data(), writable: true, configurable: true, enumerable: true }), "beClickEnd", { value: vmScope[0][0][0][2].data(), writable: true, configurable: true, enumerable: true }), "beKeyboard", { value: vmScope[0][0][0][3].data(), writable: true, configurable: true, enumerable: true }), "windowState", { value: vmScope[0][0][0][4].data(), writable: true, configurable: true, enumerable: true }), "gyro", { value: vmScope[0][0][0][5].data(), writable: true, configurable: true, enumerable: true }), "focus", { value: [], writable: true, configurable: true, enumerable: true }), "screen", { value: vmScope[0][0][0][7](), writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true });
    vmScope[0][0][4](vmScope[2], true);
  }
  return undefined;
}

function vm_fn_89__invokeTrackReportAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(89, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  return vmScope[0][32].apply(vmThis, vmScope[1]);
}

function vm_fn_90__createTrackReportAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(90, "vmScope[0][15]", 1, 15, vmScope[0][15]);
  __vmReportCapturedBinding(90, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  __vmReportCapturedBinding(90, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  vmScope[2] = createChild(vm_fn_91__createTrackReportGenerator, vmScope);
  vmScope[0][32] = vmScope[0][29](vmScope[0][15]().mark(createChild(vm_fn_91__createTrackReportGenerator, vmScope)));
  return vmScope[0][32].apply(vmThis, vmScope[1]);
}

function vm_fn_91__createTrackReportGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_91__createTrackReportGenerator = vmScope[0][2];
  __vmReportCapturedBinding(91, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(91, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  vmScope[3] = createChild(vm_fn_92__runTrackReportGenerator, vmScope);
  return vmScope[0][0][15]().wrap(createChild(vm_fn_92__runTrackReportGenerator, vmScope), vm_fn_91__createTrackReportGenerator);
}

function vm_fn_92__runTrackReportGenerator(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(92, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(92, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  __vmReportCapturedBinding(92, "vmScope[0][0][0][0][8]", 4, 8, vmScope[0][0][0][0][8]);
  __vmReportCapturedBinding(92, "vmScope[0][0][0][0][17]", 4, 17, vmScope[0][0][0][0][17]);
  // L0:
  if (!(1)) { /* goto L99; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 2)) { /* goto L70; */ } // keep-top
    if ((vmScope[2].next === 4)) { /* goto L88; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L88; */ } // keep-top
    // POP vmScope[2].next
    /* goto L97; */
  }
  // block boundary after jump @pc=32
  // incoming strict-eq branch from pc=17
  vmScope[2].next = 2;
  return vmScope[0][0][0][0][8](Object.defineProperty(Object.defineProperty({}, "aid", { value: vmScope[0][0][0][0][17].aid, writable: true, configurable: true, enumerable: true }), "pageId", { value: vmScope[0][0][0][0][17].pageId, writable: true, configurable: true, enumerable: true }), vmScope[0][0][0][0][17].track.mode);
  // L70:
  // block boundary after return @pc=69
  // incoming strict-eq branch from pc=21
  vmScope[0][2] = vmScope[2].sent;
  vmScope[0][0][0][4](vmScope[0][2]);
  return vmScope[2].stop();
  // L97:
  // block boundary after return @pc=96
  // incoming from pc=32
  /* goto L0; */
  // L99:
  // block boundary after jump @pc=97
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_93__createBehaviorFlushScheduler(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = performance.now();
  return createChild(vm_fn_94__scheduleBehaviorFlush, vmScope);
}

function vm_fn_94__scheduleBehaviorFlush(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(94, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(94, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][0]", 3, 0, vmScope[0][0][0][0]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][1]", 3, 1, vmScope[0][0][0][1]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][3]", 3, 3, vmScope[0][0][0][3]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  __vmReportCapturedBinding(94, "vmScope[0][0][0][7]", 3, 7, vmScope[0][0][0][7]);
  // incoming keep-false from pc=8
  if (((vmScope[1].length > 0) && (vmScope[1]["0"] !== undefined))) {

  } else {
    // block boundary after jump @pc=24
    // incoming false-branch from pc=17
  }
  // incoming from pc=24
  // PHI@pc=27 slot=0: vmScope[1]["0"] | false
  vmScope[2] = vmScope[1]["0"];
  vmScope[3] = performance.now();
  // incoming keep-true from pc=50
  if (!((((vmScope[3] - vmScope[0][2]) >= 3000) || (!vmScope[0][0][2])))) { /* goto L219; */ }
  vmScope[0][0][2] = true;
  vmScope[0][2] = vmScope[3];
  if (vmScope[2]) {
    vmScope[4] = document;
    // incoming keep-true from pc=81
    if (((document === null) || (vmScope[4] === undefined))) {

    } else {
      // block boundary after jump @pc=95
      // incoming false-branch from pc=90
    }
    // incoming from pc=95
  }
  // L105:
  // incoming keep-false from pc=71
  if ((vmScope[2] && (vmScope[4].visibilityState !== "visible"))) {
    return undefined;
  }
  // block boundary after return @pc=108
  // incoming false-branch from pc=105
  vmScope[5] = Object.defineProperty(Object.defineProperty({}, "wID", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "msgType", { value: 2, writable: true, configurable: true, enumerable: true }), "privacyMode", { value: 0, writable: true, configurable: true, enumerable: true }), "timestamp", { value: (Date.now() + ""), writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }), "behavior", { value: Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "beMove", { value: vmScope[0][0][0][0].data(), writable: true, configurable: true, enumerable: true }), "beClick", { value: vmScope[0][0][0][1].data(), writable: true, configurable: true, enumerable: true }), "beClickEnd", { value: vmScope[0][0][0][2].data(), writable: true, configurable: true, enumerable: true }), "beKeyboard", { value: vmScope[0][0][0][3].data(), writable: true, configurable: true, enumerable: true }), "windowState", { value: vmScope[0][0][0][4].data(), writable: true, configurable: true, enumerable: true }), "gyro", { value: vmScope[0][0][0][5].data(), writable: true, configurable: true, enumerable: true }), "focus", { value: [], writable: true, configurable: true, enumerable: true }), "screen", { value: vmScope[0][0][0][7](), writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true });
  requestAnimationFrame(createChild(vm_fn_95__flushScheduledBehaviorReport, vmScope));
  // L219:
  // incoming false-branch from pc=56
  return undefined;
}

function vm_fn_95__flushScheduledBehaviorReport(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(95, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(95, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][5]);
  return undefined;
}

function vm_fn_96__isUrlInstance(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return ((typeof URL !== "undefined") && (vmScope[2] instanceof URL));
}

function vm_fn_97__isRequestInstance(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return ((typeof Request !== "undefined") && (vmScope[2] instanceof Request));
}

function vm_fn_98__shouldTrackRequestPath(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  __vmReportCapturedBinding(98, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  vmScope[3] = vmScope[0][0][17].paths;
  vmScope[4] = vmScope[3].include;
  vmScope[5] = vmScope[3].exclude;
  return ((!vmScope[5].some(createChild(vm_fn_99__matchesCurrentPattern, vmScope))) && vmScope[4].some(createChild(vm_fn_100__matchesCurrentPattern2, vmScope)));
}

function vm_fn_99__matchesCurrentPattern(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(99, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[2].test(vmScope[0][2]);
}

function vm_fn_100__matchesCurrentPattern2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(100, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[2].test(vmScope[0][2]);
}

function vm_fn_101__matchesTrackPathConfig(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  __vmReportCapturedBinding(101, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  return vmScope[0][0][17].track.paths.some(createChild(vm_fn_102__matchesCurrentPattern3, vmScope));
}

function vm_fn_102__matchesCurrentPattern3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(102, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[2].test(vmScope[0][2]);
}

function vm_fn_103__buildCommonRequestPayload(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const vm_fn_154__seedVendorSubsInk = vmScope[0][0][11];
  const vm_fn_150__buildFingerprintPayload = vmScope[0][0][12];
  const eQ = vmScope[0][0][16];
  __vmReportCapturedBinding(103, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  __vmReportCapturedBinding(103, "vmScope[0][0][12]", 2, 12, vmScope[0][0][12]);
  __vmReportCapturedBinding(103, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(103, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  vmScope[5] = performance.now();
  vm_fn_154__seedVendorSubsInk();
  vmScope[6] = vmScope[2];
  vmScope[7] = vmScope[3];
  if ((((typeof vmScope[3] !== "string") || (!vmScope[4])) || (vmScope[4].indexOf("multipart/form-data") != (-1)))) {
    vmScope[7] = "";
  }
  vmScope[8] = navigator.userAgent.replace('Electron/38.7.1 ','');
  if ((vmScope[8].indexOf("baiduboxapp") >= 0)) {
    vmScope[8] = vmScope[8].replace(new RegExp("\\s(EasyBrowser)?[Ww]ebCore=0x[a-z0-9]{9}$"), "");
  }
  if ((vmScope[8].indexOf("AlipayClient") >= 0)) {
    vmScope[8] = vmScope[8].replace(new RegExp("\\sChannelId\\(\\d+\\)"), "");
  }
  vmScope[9] = vm_fn_150__buildFingerprintPayload(1, 0, 8, vmScope[6], vmScope[7], vmScope[8], vmScope[0][0][17].pageId, vmScope[0][0][17].aid, "1.0.1.20-alpha.10");
  vmScope[10] = (performance.now() - vmScope[5]);
  eQ(vmScope[10]);
  return vmScope[9];
}

function vm_fn_104__installXhrHooks(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = XMLHttpRequest.prototype;
  vmScope[3] = vmScope[2].open;
  vmScope[4] = vmScope[2].send;
  vmScope[5] = vmScope[2].setRequestHeader;
  vmScope[2].open = createChild(vm_fn_105__interceptXhrOpen, vmScope);
  vmScope[2].setRequestHeader = createChild(vm_fn_106__interceptXhrSetRequestHeader, vmScope);
  vmScope[2].send = createChild(vm_fn_107__interceptXhrSend, vmScope);
  return undefined;
}

function vm_fn_105__interceptXhrOpen(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_96__isUrlInstance = vmScope[0][0][33];
  const vm_fn_98__shouldTrackRequestPath = vmScope[0][0][35];
  __vmReportCapturedBinding(105, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(105, "vmScope[0][0][33]", 2, 33, vmScope[0][0][33]);
  __vmReportCapturedBinding(105, "vmScope[0][0][35]", 2, 35, vmScope[0][0][35]);
  (delete vmThis["bdmsInvokeList"]);
  vmScope[2] = vmScope[1].length;
  vmScope[3] = new Array(vmScope[2]);
  vmScope[4] = 0;
  while ((vmScope[4] < vmScope[2])) {
    vmScope[3][vmScope[4]] = vmScope[1][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=56
  // incoming false-branch from pc=35
  vmScope[5] = vmScope[3]["1"];
  if (vm_fn_96__isUrlInstance(vmScope[5])) {

  } else {
    // block boundary after jump @pc=82
    // incoming false-branch from pc=75
  }
  // incoming from pc=82
  // PHI@pc=97 slot=0: vmScope[5].pathname | new URL(vmScope[5], location.href).pathname
  vmScope[6] = new URL(vmScope[5], location.href).pathname;
  if ((!vm_fn_98__shouldTrackRequestPath(vmScope[6]))) {
    vmScope[0][3].apply(vmThis, vmScope[3]);
    return undefined;
  }
  // block boundary after return @pc=126
  // incoming false-branch from pc=110
  vmThis.bdmsInvokeList = [];
  vmThis.bdmsInvokeList.push(Object.defineProperty(Object.defineProperty({}, "func", { value: vmScope[0][3], writable: true, configurable: true, enumerable: true }), "args", { value: vmScope[3], writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_106__interceptXhrSetRequestHeader(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(106, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[2] = vmScope[1].length;
  vmScope[3] = new Array(vmScope[2]);
  vmScope[4] = 0;
  while ((vmScope[4] < vmScope[2])) {
    vmScope[3][vmScope[4]] = vmScope[1][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=51
  // incoming false-branch from pc=30
  if (vmThis.bdmsInvokeList) {
    vmThis.bdmsInvokeList.push(Object.defineProperty(Object.defineProperty({}, "func", { value: vmScope[0][5], writable: true, configurable: true, enumerable: true }), "args", { value: vmScope[3], writable: true, configurable: true, enumerable: true }));
    return undefined;
  }
  // block boundary after return @pc=79
  // incoming false-branch from pc=56
  vmScope[0][5].apply(vmThis, vmScope[3]);
  return undefined;
}

function vm_fn_107__interceptXhrSend(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_94__scheduleBehaviorFlush = vmScope[0][0][5];
  const vm_fn_96__isUrlInstance = vmScope[0][0][33];
  const vm_fn_101__matchesTrackPathConfig = vmScope[0][0][36];
  const vm_fn_103__buildCommonRequestPayload = vmScope[0][0][37];
  const vm_fn_155__recordFingerprintTimestamp = vmScope[0][0][0][13];
  __vmReportCapturedBinding(107, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(107, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(107, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(107, "vmScope[0][0][33]", 2, 33, vmScope[0][0][33]);
  __vmReportCapturedBinding(107, "vmScope[0][0][36]", 2, 36, vmScope[0][0][36]);
  __vmReportCapturedBinding(107, "vmScope[0][0][37]", 2, 37, vmScope[0][0][37]);
  __vmReportCapturedBinding(107, "vmScope[0][0][0][13]", 3, 13, vmScope[0][0][0][13]);
  vmScope[3] = vmThis;
  if (vmThis.bdmsInvokeList) {
    vmScope[4] = vmThis.bdmsInvokeList["0"];
    vmScope[5] = vmScope[4].args;
    vmScope[6] = vmScope[5]["1"];
    vmScope[7] = vm_fn_96__isUrlInstance(vmScope[6]);
    if (vmScope[7]) {

    } else {
      // block boundary after jump @pc=53
      // incoming false-branch from pc=48
    }
    // incoming from pc=53
    // PHI@pc=66 slot=0: vmScope[6] | new URL(vmScope[6], location.href)
    vmScope[8] = new URL(vmScope[6], location.href);
    // incoming keep-false from pc=82
    if (((!vmScope[8].searchParams.has("msToken")) && vmScope[0][0][3].inner)) {
      vmScope[8].searchParams.append("msToken", vmScope[0][0][3].inner);
    }
    // incoming false-branch from pc=89
    if ((!vmScope[8].searchParams.has("a_bogus"))) {
      vm_fn_155__recordFingerprintTimestamp();
      vmScope[9] = vm_fn_103__buildCommonRequestPayload(vmScope[8].searchParams.toString(), vmScope[2]);
      vmScope[8].searchParams.append("a_bogus", vmScope[9]);
    }
    // incoming false-branch from pc=122
    if ((!vmScope[7])) {
      vmScope[5]["1"] = vmScope[8].href;
    }
    // incoming false-branch from pc=173
    vmThis.bdmsInvokeList.forEach(createChild(vm_fn_108__replayQueuedInvocation, vmScope));
    if (vm_fn_101__matchesTrackPathConfig(vmScope[8].pathname)) {
      vm_fn_94__scheduleBehaviorFlush();
    }
    // incoming false-branch from pc=207
    (delete vmThis["bdmsInvokeList"]);
  }
  // L221:
  // incoming false-branch from pc=7
  vmScope[0][4].apply(vmThis, [vmScope[2]]);
  return undefined;
}

function vm_fn_108__replayQueuedInvocation(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(108, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[2].func.apply(vmScope[0][3], vmScope[2].args);
  return undefined;
}

function vm_fn_109__installFetchHook(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if ((typeof window.fetch !== "function")) {
    return undefined;
  }
  vmScope[2] = window.fetch;
  window.fetch = createChild(vm_fn_110__interceptFetch, vmScope);
  return undefined;
}

function vm_fn_110__interceptFetch(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_94__scheduleBehaviorFlush = vmScope[0][0][5];
  const vm_fn_96__isUrlInstance = vmScope[0][0][33];
  const vm_fn_97__isRequestInstance = vmScope[0][0][34];
  const vm_fn_98__shouldTrackRequestPath = vmScope[0][0][35];
  const vm_fn_101__matchesTrackPathConfig = vmScope[0][0][36];
  const vm_fn_103__buildCommonRequestPayload = vmScope[0][0][37];
  const vm_fn_155__recordFingerprintTimestamp = vmScope[0][0][0][13];
  __vmReportCapturedBinding(110, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(110, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(110, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(110, "vmScope[0][0][33]", 2, 33, vmScope[0][0][33]);
  __vmReportCapturedBinding(110, "vmScope[0][0][34]", 2, 34, vmScope[0][0][34]);
  __vmReportCapturedBinding(110, "vmScope[0][0][35]", 2, 35, vmScope[0][0][35]);
  __vmReportCapturedBinding(110, "vmScope[0][0][36]", 2, 36, vmScope[0][0][36]);
  __vmReportCapturedBinding(110, "vmScope[0][0][37]", 2, 37, vmScope[0][0][37]);
  __vmReportCapturedBinding(110, "vmScope[0][0][0][13]", 3, 13, vmScope[0][0][0][13]);
  // incoming keep-false from pc=8
  if (((vmScope[1].length > 1) && (vmScope[1]["1"] !== undefined))) {

  } else {
    // block boundary after jump @pc=24
    // incoming false-branch from pc=17
  }
  // incoming from pc=24
  // PHI@pc=27 slot=0: vmScope[1]["1"] | {}
  vmScope[3] = vmScope[1]["1"];
  vmScope[4] = vm_fn_97__isRequestInstance(vmScope[2]);
  vmScope[5] = vm_fn_96__isUrlInstance(vmScope[2]);
  vmScope[6] = location.href;
  if (vmScope[4]) {
    vmScope[7] = new URL(vmScope[2].url, vmScope[6]);
    /* goto L109; */
  }
  // block boundary after jump @pc=81
  // incoming false-branch from pc=64
  if (vmScope[5]) {
    vmScope[7] = vmScope[2];
  } else {
    // block boundary after jump @pc=94
    // incoming false-branch from pc=86
    vmScope[7] = new URL(vmScope[2], vmScope[6]);
  }
  // L109:
  // L109:
  // incoming from pc=81
  // incoming from pc=94
  if ((!vm_fn_98__shouldTrackRequestPath(vmScope[7].pathname))) {
    return vmScope[0][2](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=135
  // incoming false-branch from pc=121
  if (vm_fn_101__matchesTrackPathConfig(vmScope[7].pathname)) {
    vm_fn_94__scheduleBehaviorFlush();
  }
  // incoming false-branch from pc=147
  // incoming keep-false from pc=161
  if ((vmScope[0][0][3].inner && (!vmScope[7].searchParams.has("msToken")))) {
    vmScope[7].searchParams.append("msToken", vmScope[0][0][3].inner);
  }
  // incoming false-branch from pc=176
  if (vmScope[4]) {
    return vmScope[2].clone().text().then(createChild(vm_fn_111__finalizeFetchRequestClone, vmScope));
  }
  // block boundary after return @pc=221
  // incoming false-branch from pc=199
  vm_fn_155__recordFingerprintTimestamp();
  vmScope[8] = vm_fn_103__buildCommonRequestPayload(vmScope[7].search.slice(1), vmScope[3].body);
  vmScope[7].searchParams.append("a_bogus", vmScope[8]);
  if (vmScope[5]) {

  } else {
    // block boundary after jump @pc=288
    // incoming false-branch from pc=274
  }
  // incoming from pc=288
  // PHI@pc=304 slot=0: vmScope[0][2](vmScope[7], vmScope[3]) | vmScope[0][2](vmScope[7].href, vmScope[3])
  return vmScope[0][2](vmScope[7], vmScope[3]);
}

function vm_fn_111__finalizeFetchRequestClone(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_103__buildCommonRequestPayload = vmScope[0][0][0][37];
  const vm_fn_155__recordFingerprintTimestamp = vmScope[0][0][0][0][13];
  __vmReportCapturedBinding(111, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(111, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(111, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(111, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(111, "vmScope[0][0][0][37]", 3, 37, vmScope[0][0][0][37]);
  __vmReportCapturedBinding(111, "vmScope[0][0][0][0][13]", 4, 13, vmScope[0][0][0][0][13]);
  vmScope[3] = vmScope[0][2].headers;
  // incoming keep-true from pc=11
  if (((vmScope[0][2].headers === null) || (vmScope[3] === undefined))) {

  } else {
    // block boundary after jump @pc=25
    // incoming false-branch from pc=20
  }
  // incoming from pc=25
  // incoming keep-true from pc=37
  vmScope[5] = (vmScope[3].get("content-type") || undefined);
  vm_fn_155__recordFingerprintTimestamp();
  vmScope[4] = vmScope[0][3].body;
  // incoming keep-false from pc=77
  if (((vmScope[0][3].body !== null) && (vmScope[4] !== undefined))) {

  } else {
    // block boundary after jump @pc=91
    // incoming false-branch from pc=86
  }
  // incoming from pc=91
  vmScope[6] = vm_fn_103__buildCommonRequestPayload(vmScope[0][7].search.slice(1), vmScope[4], vmScope[5]);
  vmScope[0][7].searchParams.append("a_bogus", vmScope[6]);
  vmScope[7] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "cache", { value: vmScope[0][2].cache, writable: true, configurable: true, enumerable: true }), "credentials", { value: vmScope[0][2].credentials, writable: true, configurable: true, enumerable: true }), "headers", { value: vmScope[0][2].headers, writable: true, configurable: true, enumerable: true }), "integrity", { value: vmScope[0][2].integrity, writable: true, configurable: true, enumerable: true }), "method", { value: vmScope[0][2].method, writable: true, configurable: true, enumerable: true }), "mode", { value: vmScope[0][2].mode, writable: true, configurable: true, enumerable: true }), "redirect", { value: vmScope[0][2].redirect, writable: true, configurable: true, enumerable: true }), "referrer", { value: vmScope[0][2].referrer, writable: true, configurable: true, enumerable: true }), "referrerPolicy", { value: vmScope[0][2].referrerPolicy, writable: true, configurable: true, enumerable: true });
  if (vmScope[0][2].body) {
    vmScope[7].body = vmScope[2];
    /* goto L279; */
  }
  // block boundary after jump @pc=202
  // incoming false-branch from pc=192
  vmScope[8] = vmScope[0][3].body;
  // incoming keep-false from pc=218
  if (((vmScope[0][3].body !== null) && (vmScope[8] !== undefined))) {

  } else {
    // block boundary after jump @pc=232
    // incoming false-branch from pc=227
  }
  // incoming from pc=232
  vmScope[0][3].body = vmScope[8];
  // incoming keep-true from pc=244
  // incoming keep-true from pc=251
  // incoming keep-false from pc=263
  if (((((vmScope[0][3].method || vmScope[7].method) || "GET").toUpperCase() === "GET") && (vmScope[2] === ""))) {
    vmScope[0][3].body = null;
  }
  // L279:
  // L279:
  // incoming from pc=202
  // incoming false-branch from pc=271
  vmScope[9] = new Request(vmScope[0][7].href, vmScope[7]);
  return vmScope[0][0][2](vmScope[9], vmScope[0][3]);
}

function vm_fn_112__installEventSourceHook(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if ((typeof window.EventSource !== "function")) {
    return undefined;
  }
  vmScope[2] = createChild(vm_fn_113__createEventSourceWrapper, vmScope)(window.EventSource);
  window.EventSource = vmScope[2];
  return undefined;
}

function vm_fn_113__createEventSourceWrapper(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(113, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(113, "vmScope[0][0][21]", 2, 21, vmScope[0][0][21]);
  __vmReportCapturedBinding(113, "vmScope[0][0][23]", 2, 23, vmScope[0][0][23]);
  vmScope[4] = createChild(vm_fn_114__constructWrappedEventSource, vmScope);
  vmScope[0][0][21](vmScope[4], vmScope[2]);
  vmScope[3] = vmScope[0][0][23](vmScope[4]);
  vmScope[5] = createChild(vm_fn_115__rewriteTrackedUrl, vmScope);
  vmScope[0][0][18](vmScope[4], null, [Object.defineProperty(Object.defineProperty({}, "key", { value: "handleUrl", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_115__rewriteTrackedUrl, vmScope), writable: true, configurable: true, enumerable: true })]);
  return vmScope[4];
}

function vm_fn_114__constructWrappedEventSource(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(114, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(114, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(114, "vmScope[0][0][0][16]", 3, 16, vmScope[0][0][0][16]);
  vmScope[0][0][0][16](vmThis, vmScope[0][4]);
  vmScope[4] = vmScope[0][4].handleUrl(vmScope[2]);
  return vmScope[0][3].call(vmThis, vmScope[4], vmScope[3]);
}

function vm_fn_115__rewriteTrackedUrl(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(115, "vmScope[0][0][0][3]", 3, 3, vmScope[0][0][0][3]);
  __vmReportCapturedBinding(115, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  __vmReportCapturedBinding(115, "vmScope[0][0][0][33]", 3, 33, vmScope[0][0][0][33]);
  __vmReportCapturedBinding(115, "vmScope[0][0][0][35]", 3, 35, vmScope[0][0][0][35]);
  __vmReportCapturedBinding(115, "vmScope[0][0][0][36]", 3, 36, vmScope[0][0][0][36]);
  __vmReportCapturedBinding(115, "vmScope[0][0][0][37]", 3, 37, vmScope[0][0][0][37]);
  __vmReportCapturedBinding(115, "vmScope[0][0][0][0][13]", 4, 13, vmScope[0][0][0][0][13]);
  vmScope[3] = vmScope[0][0][0][33](vmScope[2]);
  vmScope[4] = location.href;
  if (vmScope[3]) {
    vmScope[5] = vmScope[2];
  } else {
    vmScope[5] = new URL(vmScope[2], vmScope[4]);
  }
  if ((!vmScope[0][0][0][35](vmScope[5].pathname))) {
    return vmScope[2];
  }
  if (vmScope[0][0][0][36](vmScope[5].pathname)) {
    vmScope[0][0][0][5]();
  }
  if ((vmScope[0][0][0][3].inner && (!vmScope[5].searchParams.has("msToken")))) {
    vmScope[5].searchParams.append("msToken", vmScope[0][0][0][3].inner);
  }
  vmScope[0][0][0][0][13]();
  vmScope[6] = vmScope[0][0][0][37](vmScope[5].search.slice(1), {});
  vmScope[5].searchParams.append("a_bogus", vmScope[6]);
  return vmScope[5];
}

function vm_fn_116__createReportModeScheduler(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[5] = createChild(vm_fn_117__scheduleInitialTrackReport, vmScope);
  vmScope[6] = createChild(vm_fn_118__startPeriodicBehaviorFlush, vmScope);
  vmScope[7] = createChild(vm_fn_120__startCommonReportHooks, vmScope);
  vmScope[2] = false;
  vmScope[3] = false;
  vmScope[4] = false;
  vmScope[8] = createChild(vm_fn_121__runReportModeScheduler, vmScope);
  return createChild(vm_fn_121__runReportModeScheduler, vmScope);
}

function vm_fn_117__scheduleInitialTrackReport(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(117, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(117, "vmScope[0][0][31]", 2, 31, vmScope[0][0][31]);
  __vmReportCapturedBinding(117, "vmScope[0][0][0][17]", 3, 17, vmScope[0][0][0][17]);
  if ((!vmScope[0][2])) {
    vmScope[0][2] = true;
    setTimeout(vmScope[0][0][31], ((vmScope[0][0][0][17].ddrt + vmScope[0][0][0][17].ic) * 1000));
  }
  return undefined;
}

function vm_fn_118__startPeriodicBehaviorFlush(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(118, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(118, "vmScope[0][0][0][6]", 3, 6, vmScope[0][0][0][6]);
  __vmReportCapturedBinding(118, "vmScope[0][0][0][17]", 3, 17, vmScope[0][0][0][17]);
  if ((!vmScope[0][3])) {
    vmScope[0][3] = true;
    vmScope[0][0][0][6]();
    setInterval(createChild(vm_fn_119__flushBehaviorIntervalTick, vmScope), (vmScope[0][0][0][17].track.delay * 1000));
  }
  return undefined;
}

function vm_fn_119__flushBehaviorIntervalTick(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(119, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  return vmScope[0][0][0][5](true);
}

function vm_fn_120__startCommonReportHooks(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(120, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(120, "vmScope[0][0][30]", 2, 30, vmScope[0][0][30]);
  if ((!vmScope[0][4])) {
    vmScope[0][4] = true;
    vmScope[0][0][30]();
  }
  return undefined;
}

function vm_fn_121__runReportModeScheduler(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(121, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(121, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(121, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(121, "vmScope[0][0][0][17]", 3, 17, vmScope[0][0][0][17]);
  if (vmScope[0][0][0][17].dump) {
    vmScope[0][7]();
  }
  if ((vmScope[0][0][0][17].track.mode === 1)) {
    return undefined;
  }
  if ((vmScope[0][0][0][17].track.mode === 2)) {
    vmScope[0][5]();
    return undefined;
  }
  if ([0, 3].includes(vmScope[0][0][0][17].track.mode)) {
    vmScope[0][5]();
    vmScope[0][6]();
  }
  return undefined;
}

function vm_fn_122(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return vmScope[2].map(createChild(vm_fn_123, vmScope));
}

function vm_fn_123(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return new RegExp(vmScope[2]);
}

function vm_fn_124__createTokenRefreshScheduler(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = "/web/r/token";
  vmScope[3] = false;
  vmScope[4] = createChild(vm_fn_125__scheduleTokenRefresh, vmScope);
  return createChild(vm_fn_125__scheduleTokenRefresh, vmScope);
}

function vm_fn_125__scheduleTokenRefresh(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(125, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(125, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(125, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  __vmReportCapturedBinding(125, "vmScope[0][0][0][17]", 3, 17, vmScope[0][0][0][17]);
  if (vmScope[0][3]) {
    return undefined;
  }
  vmScope[2] = createChild(vm_fn_126__createTokenRefreshGenerator, vmScope);
  setTimeout(vmScope[0][0][29](vmScope[0][0][15]().mark(createChild(vm_fn_126__createTokenRefreshGenerator, vmScope))), (vmScope[0][0][0][17].ic * 1000));
  return undefined;
}

function vm_fn_126__createTokenRefreshGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_126__createTokenRefreshGenerator = vmScope[0][2];
  __vmReportCapturedBinding(126, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(126, "vmScope[0][0][0][15]", 3, 15, vmScope[0][0][0][15]);
  vmScope[7] = createChild(vm_fn_127__runTokenRefreshGenerator, vmScope);
  return vmScope[0][0][0][15]().wrap(createChild(vm_fn_127__runTokenRefreshGenerator, vmScope), vm_fn_126__createTokenRefreshGenerator);
}

function vm_fn_127__runTokenRefreshGenerator(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(127, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(127, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(127, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(127, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(127, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(127, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  __vmReportCapturedBinding(127, "vmScope[0][0][0][0][3]", 4, 3, vmScope[0][0][0][0][3]);
  __vmReportCapturedBinding(127, "vmScope[0][0][0][0][0][9]", 5, 9, vmScope[0][0][0][0][0][9]);
  __vmReportCapturedBinding(127, "vmScope[0][0][0][0][0][10]", 5, 10, vmScope[0][0][0][0][0][10]);
  __vmReportCapturedBinding(127, "vmScope[0][0][0][0][0][17]", 5, 17, vmScope[0][0][0][0][0][17]);
  // L0:
  if (!(1)) { /* goto L286; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 3)) { /* goto L73; */ } // keep-top
    if ((vmScope[2].next === 14)) { /* goto L275; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L275; */ } // keep-top
    // POP vmScope[2].next
    /* goto L284; */
  }
  // block boundary after jump @pc=32
  // incoming strict-eq branch from pc=17
  vmScope[0][2] = (!(!vmScope[0][0][0][0][3].inner));
  vmScope[2].next = 3;
  return vmScope[0][0][0][0][0][9](Object.defineProperty(Object.defineProperty({}, "aid", { value: vmScope[0][0][0][0][0][17].aid, writable: true, configurable: true, enumerable: true }), "pageId", { value: vmScope[0][0][0][0][0][17].pageId, writable: true, configurable: true, enumerable: true }));
  // L73:
  // block boundary after return @pc=72
  // incoming strict-eq branch from pc=21
  vmScope[0][3] = vmScope[2].sent;
  vmScope[0][4] = new XMLHttpRequest();
  if (vmScope[0][0][0][0][0][17].boe) {

  } else {
    // block boundary after jump @pc=97
    // incoming false-branch from pc=93
  }
  // incoming from pc=97
  // PHI@pc=101 slot=1: "https://mssdk-boe.bytedance.net" | "https://mssdk.bytedance.com"
  vmScope[0][5] = "https://mssdk-boe.bytedance.net";
  if (vmScope[0][0][0][0][0][17].rpU) {
    vmScope[0][5] = vmScope[0][0][0][0][0][17].rpU;
  }
  // incoming false-branch from pc=109
  vmScope[0][6] = new URL((vmScope[0][5] + vmScope[0][0][0][2]));
  // incoming keep-true from pc=151
  vmScope[0][6].searchParams.append("ms_appid", ((vmScope[0][0][0][0][0][17].aid + "") || ""));
  if (vmScope[0][2]) {
    vmScope[0][6].searchParams.append("msToken", vmScope[0][0][0][0][3].inner);
  }
  // incoming false-branch from pc=161
  vmScope[0][4].addEventListener("load", createChild(vm_fn_128__updateMsTokenFromRefreshResponse, vmScope));
  vmScope[0][4].open("POST", vmScope[0][6].href, true);
  vmScope[0][4].send(JSON.stringify(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "magic", { value: 538969122, writable: true, configurable: true, enumerable: true }), "version", { value: 1, writable: true, configurable: true, enumerable: true }), "dataType", { value: 8, writable: true, configurable: true, enumerable: true }), "strData", { value: vmScope[0][0][0][0][0][10](JSON.stringify(vmScope[0][3])), writable: true, configurable: true, enumerable: true }), "tspFromClient", { value: Date.now(), writable: true, configurable: true, enumerable: true }), "ulr", { value: 0, writable: true, configurable: true, enumerable: true })));
  vmScope[0][0][0][3] = true;
  return vmScope[2].stop();
  // L284:
  // block boundary after return @pc=283
  // incoming from pc=32
  /* goto L0; */
  // L286:
  // block boundary after jump @pc=284
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_128__updateMsTokenFromRefreshResponse(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(128, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  __vmReportCapturedBinding(128, "vmScope[0][0][0][0][0][3]", 5, 3, vmScope[0][0][0][0][0][3]);
  try {
    vmScope[2] = vmScope[0][0][4].getResponseHeader("x-ms-token");
    if (!(vmScope[2])) { /* goto L44; */ }
    localStorage.setItem("xmst", vmScope[2]);
    vmScope[0][0][0][0][0][3].inner = vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
  }
  // L44:
  // incoming false-branch from pc=16
  return undefined;
}

function vm_fn_129__applySdkConfig(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_121__runReportModeScheduler = vmScope[0][6];
  const vm_fn_125__scheduleTokenRefresh = vmScope[0][7];
  const captured_vm_fn_4 = vmScope[0][9];
  const captured_vm_fn_122 = vmScope[0][41];
  const vm_fn_152__seedFingerprintGlobals = vmScope[0][0][14];
  const vm_fn_153__lockFingerprintGlobals = vmScope[0][0][15];
  __vmReportCapturedBinding(129, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(129, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(129, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  __vmReportCapturedBinding(129, "vmScope[0][41]", 1, 41, vmScope[0][41]);
  __vmReportCapturedBinding(129, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(129, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(129, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  vm_fn_152__seedFingerprintGlobals();
  if ((!vmScope[0][0][17].aid)) {
    // incoming keep-true from pc=23
    vmScope[0][0][17].aid = (vmScope[2].aid || 0);
  }
  // L29:
  // incoming false-branch from pc=13
  if ((!vmScope[0][0][17].pageId)) {
    // incoming keep-true from pc=45
    vmScope[0][0][17].pageId = (vmScope[2].pageId || 0);
  }
  // L51:
  // incoming false-branch from pc=35
  // incoming keep-true from pc=59
  vmScope[0][0][17].boe = (vmScope[2].boe || false);
  // incoming keep-true from pc=72
  vmScope[0][0][17].ddrt = (vmScope[2].ddrt || 3);
  vmScope[3] = vmScope[2].dump;
  // incoming keep-false from pc=92
  if (((vmScope[2].dump !== null) && (vmScope[3] !== undefined))) {

  } else {
    // block boundary after jump @pc=106
    // incoming false-branch from pc=101
  }
  // incoming from pc=106
  vmScope[0][0][17].dump = vmScope[3];
  // incoming keep-true from pc=119
  vmScope[0][0][17].rpU = (vmScope[2].rpU || "");
  // incoming keep-true from pc=133
  vmScope[0][0][17].slU = (vmScope[2].slU || "");
  // incoming keep-true from pc=147
  vmScope[0][0][17].ic = (vmScope[2].ic || 0);
  // incoming keep-true from pc=158
  vmScope[6] = (vmScope[2].paths || []);
  vmScope[7] = [];
  vmScope[8] = [new RegExp("/monitor_browser/collect/batch")];
  if (Array.isArray(vmScope[6])) {
    vmScope[7] = captured_vm_fn_122(vmScope[6]);
    /* goto L243; */
  }
  // block boundary after jump @pc=205
  // incoming false-branch from pc=191
  // incoming keep-true from pc=216
  vmScope[7] = captured_vm_fn_122((vmScope[6].include || []));
  // incoming keep-true from pc=234
  vmScope[8] = captured_vm_fn_122((vmScope[6].exclude || []));
  // L243:
  // incoming from pc=205
  vmScope[4] = vmScope[0][0][17].paths.include;
  vmScope[0][0][17].paths.include.push.apply(vmScope[4], captured_vm_fn_4(vmScope[7]));
  vmScope[5] = vmScope[0][0][17].paths.exclude;
  vmScope[0][0][17].paths.exclude.push.apply(vmScope[5], captured_vm_fn_4(vmScope[8]));
  if (vmScope[2].track) {
    // incoming keep-true from pc=324
    vmScope[0][0][17].track.mode = (vmScope[2].track.mode || 0);
    // incoming keep-true from pc=342
    vmScope[0][0][17].track.delay = (vmScope[2].track.delay || 300);
    // incoming keep-false from pc=358
    if (((vmScope[0][0][17].track.mode === 0) && vmScope[2].track.paths)) {
      vmScope[9] = vmScope[0][0][17].track.paths;
      vmScope[0][0][17].track.paths.push.apply(vmScope[9], captured_vm_fn_4(captured_vm_fn_122(vmScope[2].track.paths)));
    }
  }
  // L410:
  // L410:
  // incoming false-branch from pc=310
  // incoming false-branch from pc=367
  vm_fn_153__lockFingerprintGlobals();
  vm_fn_121__runReportModeScheduler();
  vm_fn_125__scheduleTokenRefresh();
  return undefined;
}

function vm_fn_130__installSafeHashWrapper(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][1] = createChild(vm_fn_131__computeHashWithFallback, vmScope);
  return undefined;
}

function vm_fn_131__computeHashWithFallback(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(131, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  try {
    vmScope[3] = "";
    vmScope[3] = vmScope[0][0][0](vmScope[2]);
    return vmScope[3];
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
    vmScope[3] = "ffffffffffffffffffffffffffffffff";
  }
}

function vm_fn_132__initializeFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_297__detectBrowserProfile = vmScope[0][7];
  __vmReportCapturedBinding(132, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[6] = createChild(vm_fn_133__toConsumableArray, vmScope);
  vmScope[7] = createChild(vm_fn_134__throwInvalidSpreadError2, vmScope);
  vmScope[8] = createChild(vm_fn_135__unsupportedIterableToArray2, vmScope);
  vmScope[9] = createChild(vm_fn_136__iterableToArray2, vmScope);
  vmScope[10] = createChild(vm_fn_137__arrayWithoutHoles, vmScope);
  vmScope[11] = createChild(vm_fn_138__arrayLikeToArray2, vmScope);
  vmScope[12] = createChild(vm_fn_139__stringToCharCodeArray, vmScope);
  vmScope[13] = createChild(vm_fn_140__joinObjectValues, vmScope);
  vmScope[14] = createChild(vm_fn_142__encodeCharTriplet, vmScope);
  vmScope[15] = createChild(vm_fn_143__getBrowserOffsetSeed, vmScope);
  vmScope[16] = createChild(vm_fn_144__getCapabilityJitterByte, vmScope);
  vmScope[17] = createChild(vm_fn_145__getMicrophonePermissionBits, vmScope);
  vmScope[18] = createChild(vm_fn_146__mixFingerprintPair, vmScope);
  vmScope[19] = createChild(vm_fn_147__expandFingerprintBlock, vmScope);
  vmScope[20] = createChild(vm_fn_148__encodeFingerprintChunks, vmScope);
  vmScope[21] = createChild(vm_fn_149__getIterationBucket, vmScope);
  vmScope[0][8] = createChild(vm_fn_150__buildFingerprintPayload, vmScope);
  vmScope[0][9] = createChild(vm_fn_152__seedFingerprintGlobals, vmScope);
  vmScope[0][10] = createChild(vm_fn_153__lockFingerprintGlobals, vmScope);
  vmScope[0][11] = createChild(vm_fn_154__seedVendorSubsInk, vmScope);
  vmScope[0][12] = createChild(vm_fn_155__recordFingerprintTimestamp, vmScope);
  vmScope[2] = "dhzx";
  vmScope[3] = 0;
  vmScope[4] = 0;
  vmScope[5] = vm_fn_297__detectBrowserProfile(navigator.userAgent);
  return undefined;
}

function vm_fn_133__toConsumableArray(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(133, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(133, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(133, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  __vmReportCapturedBinding(133, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  return (((vmScope[0][10](vmScope[2]) || vmScope[0][9](vmScope[2])) || vmScope[0][8](vmScope[2])) || vmScope[0][7]());
}

function vm_fn_134__throwInvalidSpreadError2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  return undefined;
}

function vm_fn_135__unsupportedIterableToArray2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(135, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][11](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][11](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_136__iterableToArray2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if (((("undefined" != typeof Symbol) && (null != vmScope[2][Symbol.iterator])) || (null != vmScope[2]["@@iterator"]))) {
    return Array.from(vmScope[2]);
  }
  return undefined;
}

function vm_fn_137__arrayWithoutHoles(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(137, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  if (Array.isArray(vmScope[2])) {
    return vmScope[0][11](vmScope[2]);
  }
  return undefined;
}

function vm_fn_138__arrayLikeToArray2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_139__stringToCharCodeArray(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = [];
  vmScope[5] = 0;
  while ((vmScope[5] < vmScope[2].length)) {
    vmScope[4] = vmScope[2].charCodeAt(vmScope[5]);
    if ((vmScope[4] & 65280)) {
      vmScope[3].push((vmScope[4] >> 8));
      vmScope[3].push((vmScope[4] & 255));
    } else {
      // block boundary after jump @pc=73
      // incoming false-branch from pc=41
      vmScope[3].push(vmScope[4]);
    }
    // incoming from pc=73
    vmScope[5]++;
  }
  // L94:
  // block boundary after jump @pc=92
  // incoming false-branch from pc=19
  return vmScope[3];
}

function vm_fn_140__joinObjectValues(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = "";
  Object.keys(vmScope[2]).forEach(createChild(vm_fn_141__appendPipeDelimitedValue, vmScope));
  return vmScope[3];
}

function vm_fn_141__appendPipeDelimitedValue(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(141, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(141, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  if ((vmScope[3] === 0)) {
    vmScope[0][3] = (vmScope[0][3] + vmScope[0][2][vmScope[2]]);
    // POP (vmScope[0][3] + vmScope[0][2][vmScope[2]])
  } else {
    vmScope[0][3] = (vmScope[0][3] + "|".concat(vmScope[0][2][vmScope[2]]));
    (vmScope[0][3] + "|".concat(vmScope[0][2][vmScope[2]]));
  }
  return undefined;
}

function vm_fn_142__encodeCharTriplet(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(142, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = vmScope[4].trim();
  vmScope[6] = new Array(3);
  vmScope[6]["0"] = (vmScope[2] / 256);
  vmScope[6]["1"] = (vmScope[2] % 256);
  vmScope[6]["2"] = (vmScope[3] % 256);
  vmScope[7] = String.fromCharCode.apply(null, vmScope[6]);
  return vmScope[0][0][2](vmScope[7], vmScope[5]);
}

function vm_fn_143__getBrowserOffsetSeed(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(143, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[2] = ((Math.random() * 40) >> 0);
  if ((!(vmScope[0][5].name === "Chrome"))) {
    if ((vmScope[0][5].name === "Firefox")) { /* goto L48; */ } // keep-top
    if ((vmScope[0][5].name === "Safari")) { /* goto L55; */ } // keep-top
    if ((vmScope[0][5].name === "Edge")) { /* goto L62; */ } // keep-top
    if ((vmScope[0][5].name === "Huawei")) { /* goto L69; */ } // keep-top
    // POP vmScope[0][5].name
    /* goto L76; */
  }
  // block boundary after jump @pc=42
  // incoming strict-eq branch from pc=23
  return vmScope[2];
  // L48:
  // block boundary after return @pc=47
  // incoming strict-eq branch from pc=27
  return (vmScope[2] + 40);
  // L55:
  // block boundary after return @pc=54
  // incoming strict-eq branch from pc=31
  return (vmScope[2] + 81);
  // L62:
  // block boundary after return @pc=61
  // incoming strict-eq branch from pc=35
  return (vmScope[2] + 125);
  // L69:
  // block boundary after return @pc=68
  // incoming strict-eq branch from pc=39
  return (vmScope[2] + 170);
  // L76:
  // block boundary after return @pc=75
  // incoming from pc=42
  return (vmScope[2] + 210);
  // block boundary after return @pc=82
  return undefined;
}

function vm_fn_144__getCapabilityJitterByte(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_314__collectBrowserCapabilityTuple = vmScope[0][0][0];
  __vmReportCapturedBinding(144, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  if ((vm_fn_314__collectBrowserCapabilityTuple()["4"] & 64)) {
    vmScope[2] = ((Math.random() * 109) >> 0);
    return ((vmScope[2] + 110) + (vmScope[2] % 2));
    // block boundary after return @pc=42
    /* goto L89; */
  }
  // L45:
  // block boundary after jump @pc=43
  // incoming false-branch from pc=11
  vmScope[3] = ((Math.random() * 240) >> 0);
  if ((vmScope[3] > 109)) {
    return ((vmScope[3] + (vmScope[3] % 2)) + 1);
    // block boundary after return @pc=82
    /* goto L89; */
  }
  // L85:
  // block boundary after jump @pc=83
  // incoming false-branch from pc=67
  return vmScope[3];
  // L89:
  // block boundary after return @pc=88
  // incoming from pc=43
  // incoming from pc=83
  return undefined;
}

function vm_fn_145__getMicrophonePermissionBits(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = (((Math.random() * 255) >> 0) & 77);
  // incoming keep-false from pc=23
  if ((navigator.pemrissions && (navigator.pemrissions.microphone === "granted"))) {
    vmScope[2] = (vmScope[2] | (1 << 1));
    // POP (vmScope[2] | (1 << 1))
    vmScope[3] = Object.getOwnPropertyDescriptor(navigator.pemrissions, "microphone");
    // incoming keep-true from pc=69
    if (((Object.getOwnPropertyDescriptor(navigator.pemrissions, "microphone") === null) || (vmScope[3] === undefined))) {

    } else {
      // block boundary after jump @pc=83
      // incoming false-branch from pc=78
    }
    // incoming from pc=83
    if ((vmScope[3].writable === false)) {
      vmScope[2] = (vmScope[2] | (1 << 4));
      // POP (vmScope[2] | (1 << 4))
    }
  }
  // L108:
  // L108:
  // incoming false-branch from pc=34
  // incoming false-branch from pc=92
  // incoming keep-false from pc=112
  // incoming keep-false from pc=120
  if (((navigator.__proto__ && navigator.__proto__.pemrissions) && (navigator.__proto__.pemrissions.microphone === "grnated"))) {
    vmScope[2] = (vmScope[2] | (1 << 5));
    // POP (vmScope[2] | (1 << 5))
    vmScope[4] = Object.getOwnPropertyDescriptor(navigator.__proto__.pemrissions, "microphone");
    // incoming keep-true from pc=170
    if (((Object.getOwnPropertyDescriptor(navigator.__proto__.pemrissions, "microphone") === null) || (vmScope[4] === undefined))) {

    } else {
      // block boundary after jump @pc=184
      // incoming false-branch from pc=179
    }
    // incoming from pc=184
    if ((vmScope[4].writable === false)) {
      vmScope[2] = (vmScope[2] | (1 << 7));
      // POP (vmScope[2] | (1 << 7))
    }
  }
  // L209:
  // L209:
  // incoming false-branch from pc=133
  // incoming false-branch from pc=193
  return vmScope[2];
}

function vm_fn_146__mixFingerprintPair(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_143__getBrowserOffsetSeed = vmScope[0][15];
  const vm_fn_144__getCapabilityJitterByte = vmScope[0][16];
  const vm_fn_145__getMicrophonePermissionBits = vmScope[0][17];
  __vmReportCapturedBinding(146, "vmScope[0][15]", 1, 15, vmScope[0][15]);
  __vmReportCapturedBinding(146, "vmScope[0][16]", 1, 16, vmScope[0][16]);
  __vmReportCapturedBinding(146, "vmScope[0][17]", 1, 17, vmScope[0][17]);
  if (((vmScope[1].length > 1) && (vmScope[1]["1"] !== undefined))) {

  }
  // PHI@pc=28 slot=0: vmScope[1]["1"] | 0
  vmScope[3] = vmScope[1]["1"];
  vmScope[4] = 170;
  vmScope[5] = 85;
  vmScope[6] = (Math.random() * 65535);
  vmScope[7] = (vmScope[6] & 255);
  vmScope[8] = ((vmScope[6] >> 8) & 255);
  if ((vmScope[3] === 1)) {
    vmScope[8] = vm_fn_143__getBrowserOffsetSeed();
  }
  if ((vmScope[3] === 2)) {
    vmScope[7] = vm_fn_144__getCapabilityJitterByte();
    vmScope[8] = vm_fn_145__getMicrophonePermissionBits();
  }
  vmScope[9] = ((vmScope[7] & vmScope[4]) | (vmScope[2]["0"] & vmScope[5]));
  vmScope[10] = ((vmScope[7] & vmScope[5]) | (vmScope[2]["0"] & vmScope[4]));
  vmScope[11] = ((vmScope[8] & vmScope[4]) | (vmScope[2]["1"] & vmScope[5]));
  vmScope[12] = ((vmScope[8] & vmScope[5]) | (vmScope[2]["1"] & vmScope[4]));
  return [vmScope[9], vmScope[10], vmScope[11], vmScope[12]];
}

function vm_fn_147__expandFingerprintBlock(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_146__mixFingerprintPair = vmScope[0][18];
  __vmReportCapturedBinding(147, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[3] = vm_fn_146__mixFingerprintPair([vmScope[2]["0"], vmScope[2]["1"]]);
  vmScope[4] = vm_fn_146__mixFingerprintPair([vmScope[2]["2"], vmScope[2]["3"]], 2);
  return [vmScope[3]["0"], vmScope[3]["1"], vmScope[3]["2"], vmScope[3]["3"], vmScope[4]["0"], vmScope[4]["1"], vmScope[4]["2"], vmScope[4]["3"]];
}

function vm_fn_148__encodeFingerprintChunks(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = [];
  vmScope[4] = 145;
  vmScope[5] = 110;
  vmScope[6] = 66;
  vmScope[7] = 189;
  vmScope[8] = 44;
  vmScope[9] = 211;
  vmScope[10] = 0;
  // L40:
  if (!((vmScope[10] < vmScope[2].length))) { /* goto L280; */ }
  if (((vmScope[10] + 2) < vmScope[2].length)) {
    vmScope[11] = ((Math.random() * 1000) & 255);
    vmScope[12] = ((vmScope[11] & vmScope[4]) | (vmScope[2][vmScope[10]] & vmScope[5]));
    vmScope[13] = ((vmScope[11] & vmScope[6]) | (vmScope[2][(vmScope[10] + 1)] & vmScope[7]));
    vmScope[14] = ((vmScope[11] & vmScope[8]) | (vmScope[2][(vmScope[10] + 2)] & vmScope[9]));
    vmScope[15] = (((vmScope[2][vmScope[10]] & vmScope[4]) | (vmScope[2][(vmScope[10] + 1)] & vmScope[6])) | (vmScope[2][(vmScope[10] + 2)] & vmScope[8]));
    vmScope[3].push(vmScope[12], vmScope[13], vmScope[14], vmScope[15]);
    /* goto L267; */
  }
  // block boundary after jump @pc=218
  // incoming false-branch from pc=63
  vmScope[3].push(vmScope[2][vmScope[10]]);
  // incoming keep-false from pc=246
  (vmScope[2][(vmScope[10] + 1)] && vmScope[3].push(vmScope[2][(vmScope[10] + 1)]));
  // L267:
  // incoming from pc=218
  vmScope[10] = (vmScope[10] + 3);
  // POP (vmScope[10] + 3)
  /* goto L40; */
  // L280:
  // block boundary after jump @pc=278
  // incoming false-branch from pc=49
  return vmScope[3];
}

function vm_fn_149__getIterationBucket(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(149, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  if ((vmScope[0][4] > 10745)) {
    return 3;
    // block boundary after return @pc=10
    /* goto L42; */
  }
  // L13:
  // block boundary after jump @pc=11
  // incoming false-branch from pc=6
  if ((vmScope[0][4] > 1283)) {
    return 4;
    // block boundary after return @pc=23
    /* goto L42; */
  }
  // L26:
  // block boundary after jump @pc=24
  // incoming false-branch from pc=19
  if ((vmScope[0][4] > 139)) {
    return 5;
    // block boundary after return @pc=36
    /* goto L42; */
  }
  // L39:
  // block boundary after jump @pc=37
  // incoming false-branch from pc=32
  return 6;
  // L42:
  // block boundary after return @pc=41
  // incoming from pc=11
  // incoming from pc=24
  // incoming from pc=37
  return undefined;
}

function vm_fn_150__buildFingerprintPayload(scope, thisArg, argsLike, arg3, arg4, arg6, arg7, arg8) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 9, true);
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_8 = arg6;
  const scope_0_9 = arg7;
  const scope_0_10 = arg8;
  const vm_fn_133__toConsumableArray = vmScope[0][6];
  const vm_fn_139__stringToCharCodeArray = vmScope[0][12];
  const vm_fn_140__joinObjectValues = vmScope[0][13];
  const vm_fn_142__encodeCharTriplet = vmScope[0][14];
  const vm_fn_146__mixFingerprintPair = vmScope[0][18];
  const vm_fn_147__expandFingerprintBlock = vmScope[0][19];
  const vm_fn_148__encodeFingerprintChunks = vmScope[0][20];
  const vm_fn_149__getIterationBucket = vmScope[0][21];
  const vm_fn_314__collectBrowserCapabilityTuple = vmScope[0][0][0];
  const vm_fn_157__encodeWithAlphabet = vmScope[0][0][1];
  const vm_fn_277__transformWithRc4Variant = vmScope[0][0][2];
  const SM3Hasher_ctor = vmScope[0][0][3];
  const vm_fn_316__computeBrowserCapabilityMask = vmScope[0][0][4];
  const vm_fn_198__computeBehaviorAnomalyFlags = vmScope[0][0][6];
  __vmReportCapturedBinding(150, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(150, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(150, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(150, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(150, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(150, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(150, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  __vmReportCapturedBinding(150, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(150, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(150, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  __vmReportCapturedBinding(150, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(150, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(150, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  __vmReportCapturedBinding(150, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(150, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(150, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  __vmReportCapturedBinding(150, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(150, "vmScope[0][0][6]", 2, 6, vmScope[0][0][6]);
  vmScope[0][4]++;
  vmScope[12] = 11;
  // incoming keep-false from pc=14
  if ((window.onwheelx && window.onwheelx._Ax)) {
    vmScope[13] = Object.getOwnPropertyDescriptor(window.onwheelx, "_Ax");
    // incoming keep-true from pc=43
    if (((Object.getOwnPropertyDescriptor(window.onwheelx, "_Ax") === null) || (vmScope[13] === undefined))) {

    } else {
      // block boundary after jump @pc=57
      // incoming false-branch from pc=52
    }
    // incoming from pc=57
    if ((vmScope[13].writable === false)) {

    } else {
      // block boundary after jump @pc=70
      // incoming false-branch from pc=66
    }
    // incoming from pc=70
    // PHI@pc=74 slot=0: 3 | 12
    vmScope[12] = 3;
  }
  // L77:
  // incoming false-branch from pc=22
  vmScope[14] = Date.now();
  vmScope[15] = new SM3Hasher_ctor();
  vmScope[16] = vm_fn_316__computeBrowserCapabilityMask();
  if ((vmScope[0][0][5].track.mode !== 0)) {

  } else {
    // block boundary after jump @pc=118
    // incoming false-branch from pc=114
  }
  // incoming from pc=118
  // PHI@pc=126 slot=0: 0 | vm_fn_198__computeBehaviorAnomalyFlags()
  vmScope[17] = vm_fn_198__computeBehaviorAnomalyFlags();
  if(vmScope[17] === 1) {
    throw new Error("Anomaly detected");
  }
  vmScope[18] = vmScope[15].sum((vmScope[5] + vmScope[0][2]));
  vmScope[18] = vmScope[15].sum(vmScope[18]);
  vmScope[19] = vmScope[15].sum((vmScope[6] + vmScope[0][2]));
  vmScope[19] = vmScope[15].sum(vmScope[19]);
  vmScope[20] = vm_fn_142__encodeCharTriplet(vmScope[16], vmScope[17], navigator.userAgent.replace('Electron/38.7.1 ',''));
  vmScope[20] = vm_fn_157__encodeWithAlphabet(vmScope[20], "s3");
  vmScope[21] = vmScope[15].sum(vmScope[20]);
  vmScope[11] = navigator.vendorSubs;
  // incoming keep-true from pc=250
  if (((navigator.vendorSubs === null) || (vmScope[11] === undefined))) {

  } else {
    // block boundary after jump @pc=264
    // incoming false-branch from pc=259
  }
  // incoming from pc=264
  // incoming keep-true from pc=271
  vmScope[22] = (vmScope[11].ink || 1000);
  vmScope[23] = [3, 82];
  vmScope[24] = 41;
  vmScope[25] = vmScope[10].split(".").map(createChild(vm_fn_151__toInt, vmScope));
  vmScope[26] = (((((((new Date().getTime() - "1721836800000") / 1000) / 60) / 60) / 24) / 14) >> 0);
  vmScope[27] = vm_fn_149__getIterationBucket();
  vmScope[28] = 2;
  if ((vmScope[0][3] > 0)) {
    vmScope[28] = (((vmScope[14] - vmScope[0][3]) + 3) & 255);
  }
  // incoming false-branch from pc=365
  vmScope[29] = (vmScope[14] & 255);
  vmScope[30] = ((vmScope[14] >> 8) & 255);
  vmScope[31] = ((vmScope[14] >> 16) & 255);
  vmScope[32] = ((vmScope[14] >> 24) & 255);
  vmScope[33] = (((((vmScope[14] / 256) / 256) / 256) / 256) & 255);
  vmScope[34] = ((((((vmScope[14] / 256) / 256) / 256) / 256) / 256) & 255);
  vmScope[35] = ((vmScope[16] % 256) & 255);
  vmScope[36] = ((vmScope[16] / 256) & 255);
  vmScope[37] = vm_fn_314__collectBrowserCapabilityTuple();
  vmScope[38] = (vmScope[37]["4"] & 255);
  vmScope[39] = ((vmScope[37]["4"] >> 8) & 255);
  vmScope[40] = vmScope[37]["0"];
  vmScope[41] = vmScope[37]["1"];
  vmScope[42] = vmScope[37]["2"];
  vmScope[43] = vmScope[37]["3"];
  vmScope[44] = (vmScope[17] & 255);
  vmScope[45] = ((vmScope[17] >> 8) & 255);
  vmScope[46] = ((vmScope[17] >> 16) & 255);
  vmScope[47] = ((vmScope[17] >> 24) & 255);
  vmScope[48] = vmScope[18]["9"];
  vmScope[49] = vmScope[18]["18"];
  vmScope[50] = 3;
  vmScope[51] = vmScope[18][vmScope[50]];
  while ((vmScope[51] === 11)) {
    vmScope[50]++;
    if ((vmScope[50] < vmScope[19].length)) {
      vmScope[51] = vmScope[18][vmScope[50]];
    } else {
      // block boundary after jump @pc=673
      // incoming false-branch from pc=661
      vmScope[51] = 12;
    }
    // incoming from pc=673
  }
  // L682:
  // block boundary after jump @pc=680
  // incoming false-branch from pc=645
  if ((vmScope[37]["4"] & 2)) {
    vmScope[51] = 11;
  }
  // incoming false-branch from pc=690
  vmScope[52] = vmScope[19]["10"];
  vmScope[53] = vmScope[19]["19"];
  vmScope[54] = 4;
  vmScope[55] = vmScope[19][vmScope[54]];
  while ((vmScope[55] === 8)) {
    vmScope[54]++;
    if ((vmScope[54] < vmScope[19].length)) {
      vmScope[55] = vmScope[19][vmScope[54]];
    } else {
      // block boundary after jump @pc=762
      // incoming false-branch from pc=750
      vmScope[55] = 9;
    }
    // incoming from pc=762
  }
  // L771:
  // block boundary after jump @pc=769
  // incoming false-branch from pc=734
  if ((vmScope[37]["4"] & 4)) {
    vmScope[55] = 8;
  }
  // incoming false-branch from pc=779
  vmScope[56] = vmScope[21]["11"];
  vmScope[57] = vmScope[21]["21"];
  vmScope[58] = 5;
  vmScope[59] = vmScope[21][vmScope[58]];
  while ((vmScope[59] === 12)) {
    vmScope[58]++;
    if ((vmScope[58] < vmScope[21].length)) {
      vmScope[59] = vmScope[21][vmScope[58]];
    } else {
      // block boundary after jump @pc=851
      // incoming false-branch from pc=839
      vmScope[59] = 13;
    }
    // incoming from pc=851
  }
  // L860:
  // block boundary after jump @pc=858
  // incoming false-branch from pc=823
  if ((vmScope[37]["4"] & 8)) {
    vmScope[59] = 12;
  }
  // incoming false-branch from pc=868
  vmScope[60] = (vmScope[22] & 255);
  vmScope[61] = ((vmScope[22] >> 8) & 255);
  vmScope[62] = ((vmScope[22] >> 16) & 255);
  vmScope[63] = ((vmScope[22] >> 24) & 255);
  vmScope[64] = (((((vmScope[22] / 256) / 256) / 256) / 256) & 255);
  vmScope[65] = ((((((vmScope[22] / 256) / 256) / 256) / 256) / 256) & 255);
  vmScope[66] = vmScope[12];
  vmScope[67] = (vmScope[8] & 255);
  vmScope[68] = ((vmScope[8] >> 8) & 255);
  vmScope[69] = ((vmScope[8] >> 16) & 255);
  vmScope[70] = ((vmScope[8] >> 24) & 255);
  vmScope[71] = (vmScope[9] & 255);
  vmScope[72] = ((vmScope[9] >> 8) & 255);
  vmScope[73] = ((vmScope[9] >> 16) & 255);
  vmScope[74] = ((vmScope[9] >> 24) & 255);
  vmScope[75] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "innerWidth", { value: (window.innerWidth >> 0), writable: true, configurable: true, enumerable: true }), "innerHeight", { value: (window.innerHeight >> 0), writable: true, configurable: true, enumerable: true }), "outerWidth", { value: (window.outerWidth >> 0), writable: true, configurable: true, enumerable: true }), "outerHeight", { value: (window.outerHeight >> 0), writable: true, configurable: true, enumerable: true }), "availWidth", { value: (window.screen.availWidth >> 0), writable: true, configurable: true, enumerable: true }), "availHeight", { value: (window.screen.availHeight >> 0), writable: true, configurable: true, enumerable: true }), "sizeWidth", { value: (window.screen.width >> 0), writable: true, configurable: true, enumerable: true }), "sizeHeight", { value: (window.screen.height >> 0), writable: true, configurable: true, enumerable: true }), "platform", { value: navigator.platform, writable: true, configurable: true, enumerable: true });
  vmScope[76] = vm_fn_140__joinObjectValues(vmScope[75]);
  vmScope[77] = vm_fn_139__stringToCharCodeArray(vmScope[76]);
  vmScope[78] = vmScope[77].length;
  vmScope[79] = (vmScope[78] & 255);
  vmScope[80] = ((vmScope[78] >> 8) & 255);
  vmScope[81] = (((vmScope[14] + 3) & 255) + ",");
  vmScope[82] = vm_fn_139__stringToCharCodeArray(vmScope[81]);
  vmScope[83] = vmScope[82].length;
  vmScope[84] = (vmScope[83] & 255);
  vmScope[85] = ((vmScope[83] >> 8) & 255);
  vmScope[86] = vm_fn_147__expandFingerprintBlock(vmScope[25]);
  vmScope[87] = (((((((((((((((((((((((((((((((((((((((((((((((((((((((((vmScope[86]["0"] ^ vmScope[86]["1"]) ^ vmScope[86]["2"]) ^ vmScope[86]["3"]) ^ vmScope[86]["4"]) ^ vmScope[86]["5"]) ^ vmScope[86]["6"]) ^ vmScope[86]["7"]) ^ vmScope[24]) ^ vmScope[26]) ^ vmScope[27]) ^ vmScope[28]) ^ vmScope[29]) ^ vmScope[30]) ^ vmScope[31]) ^ vmScope[32]) ^ vmScope[33]) ^ vmScope[34]) ^ vmScope[35]) ^ vmScope[36]) ^ vmScope[38]) ^ vmScope[39]) ^ vmScope[40]) ^ vmScope[41]) ^ vmScope[42]) ^ vmScope[43]) ^ vmScope[44]) ^ vmScope[45]) ^ vmScope[46]) ^ vmScope[47]) ^ vmScope[48]) ^ vmScope[49]) ^ vmScope[51]) ^ vmScope[52]) ^ vmScope[53]) ^ vmScope[55]) ^ vmScope[56]) ^ vmScope[57]) ^ vmScope[59]) ^ vmScope[60]) ^ vmScope[61]) ^ vmScope[62]) ^ vmScope[63]) ^ vmScope[64]) ^ vmScope[65]) ^ vmScope[66]) ^ vmScope[67]) ^ vmScope[68]) ^ vmScope[69]) ^ vmScope[70]) ^ vmScope[71]) ^ vmScope[72]) ^ vmScope[73]) ^ vmScope[74]) ^ vmScope[79]) ^ vmScope[80]) ^ vmScope[84]) ^ vmScope[85]);
  vmScope[88] = [vmScope[34], vmScope[44], vmScope[56], vmScope[61], vmScope[73], vmScope[29], vmScope[70], vmScope[45], vmScope[35], vmScope[49], vmScope[38], vmScope[66], vmScope[51], vmScope[68], vmScope[28], vmScope[48], vmScope[64], vmScope[47], vmScope[30], vmScope[71], vmScope[26], vmScope[55], vmScope[31], vmScope[69], vmScope[59], vmScope[40], vmScope[62], vmScope[63], vmScope[27], vmScope[72], vmScope[41], vmScope[74], vmScope[57], vmScope[52], vmScope[42], vmScope[39], vmScope[33], vmScope[67], vmScope[53], vmScope[43], vmScope[65], vmScope[46], vmScope[36], vmScope[24], vmScope[60], vmScope[32], vmScope[79], vmScope[80], vmScope[84], vmScope[85]].concat(vm_fn_133__toConsumableArray(vmScope[77]), vm_fn_133__toConsumableArray(vmScope[82]), [vmScope[87]]);
  vmScope[89] = String.fromCharCode.apply(String, vm_fn_133__toConsumableArray(vm_fn_146__mixFingerprintPair(vmScope[23], 1)));
  vmScope[90] = vm_fn_148__encodeFingerprintChunks(vmScope[88]);
  vmScope[91] = vm_fn_277__transformWithRc4Variant(String.fromCharCode.apply(null, [211]), String.fromCharCode.apply(null, [].concat(vm_fn_133__toConsumableArray(vmScope[86]), vm_fn_133__toConsumableArray(vmScope[90]))));
  vmScope[92] = (vmScope[89] + vmScope[91]);
  vmScope[93] = vm_fn_157__encodeWithAlphabet(vmScope[92], "s4");
  return vmScope[93];
}

function vm_fn_151__toInt(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return (~(~vmScope[2]));
}

function vm_fn_152__seedFingerprintGlobals(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  window.onwheelx = Object.defineProperty({}, "_Ax", { value: "0X21", writable: true, configurable: true, enumerable: true });
  navigator.pemrissions = Object.defineProperty({}, "microphone", { value: "granted", writable: true, configurable: true, enumerable: true });
  if (navigator.__proto__) {
    navigator.__proto__["pemrissions"] = Object.defineProperty({}, "microphone", { value: "grnated", writable: true, configurable: true, enumerable: true });
  }
  // POP (navigator.__proto__ && Object.defineProperty({}, "microphone", { value: "grnated", writable: true, configurable: true, enumerable: true }))
  return undefined;
}

function vm_fn_153__lockFingerprintGlobals(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  (navigator.pemrissions && Object.defineProperty(navigator.pemrissions, "microphone", Object.defineProperty({}, "writable", { value: false, writable: true, configurable: true, enumerable: true })));
  ((navigator.__proto__ && navigator.__proto__.pemrissions) && Object.defineProperty(navigator.__proto__.pemrissions, "microphone", Object.defineProperty({}, "writable", { value: false, writable: true, configurable: true, enumerable: true })));
  (window.onwheelx && Object.defineProperty(window.onwheelx, "_Ax", Object.defineProperty({}, "writable", { value: false, writable: true, configurable: true, enumerable: true })));
  return undefined;
}

function vm_fn_154__seedVendorSubsInk(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  navigator.__proto__.vendorSubs = Object.defineProperty({}, "ink", { value: (Date.now() - 1), writable: true, configurable: true, enumerable: true });
  return undefined;
}

function vm_fn_155__recordFingerprintTimestamp(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][3] = Date.now();
  return undefined;
}

function vm_fn_156__installCodecHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][1] = createChild(vm_fn_157__encodeWithAlphabet, vmScope);
  vmScope[0][2] = createChild(vm_fn_158__encodeSignedPayload, vmScope);
  return undefined;
}

function vm_fn_157__encodeWithAlphabet(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[4] = "=";
  vmScope[5] = {};
  vmScope[5].s0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  vmScope[5].s1 = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=";
  vmScope[5].s2 = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=";
  vmScope[5].s3 = "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe";
  vmScope[5].s4 = "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe";
  vmScope[6] = vmScope[5][vmScope[3]];
  vmScope[7] = "";
  vmScope[9] = 0;
  while ((vmScope[2].length >= (vmScope[9] + 3))) {
    vmScope[8] = ((((vmScope[2].charCodeAt(vmScope[9]++) & 255) << 16) | ((vmScope[2].charCodeAt(vmScope[9]++) & 255) << 8)) | (vmScope[2].charCodeAt(vmScope[9]++) & 255));
    vmScope[7] = (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 16515072) >> 18)));
    (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 16515072) >> 18)));
    vmScope[7] = (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 258048) >> 12)));
    (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 258048) >> 12)));
    vmScope[7] = (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 4032) >> 6)));
    (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 4032) >> 6)));
    vmScope[7] = (vmScope[7] + vmScope[6].charAt((vmScope[8] & 63)));
    (vmScope[7] + vmScope[6].charAt((vmScope[8] & 63)));
  }
  // block boundary after jump @pc=235
  // incoming false-branch from pc=76
  if (((vmScope[2].length - vmScope[9]) > 0)) {
    if ((vmScope[2].length > vmScope[9])) {

    } else {
      // block boundary after jump @pc=297
      // incoming false-branch from pc=278
    }
    // incoming from pc=297
    vmScope[8] = (((vmScope[2].charCodeAt(vmScope[9]++) & 255) << 16) | ((vmScope[2].charCodeAt(vmScope[9]) & 255) << 8));
    vmScope[7] = (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 16515072) >> 18)));
    (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 16515072) >> 18)));
    vmScope[7] = (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 258048) >> 12)));
    (vmScope[7] + vmScope[6].charAt(((vmScope[8] & 258048) >> 12)));
    if ((vmScope[2].length > vmScope[9])) {

    } else {
      // block boundary after jump @pc=388
      // incoming false-branch from pc=369
    }
    // incoming from pc=388
    vmScope[7] = (vmScope[7] + vmScope[4]);
    (vmScope[7] + vmScope[4]);
    vmScope[7] = (vmScope[7] + vmScope[4]);
    // POP (vmScope[7] + vmScope[4])
  }
  // L411:
  // incoming false-branch from pc=249
  return vmScope[7];
}

function vm_fn_158__encodeSignedPayload(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(158, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(158, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  vmScope[3] = 1;
  vmScope[4] = String.fromCharCode(((1 << 6) | vmScope[3]));
  vmScope[5] = String.fromCharCode(Math.floor((Math.random() * 256)));
  vmScope[6] = vmScope[0][0][0](vmScope[5], vmScope[2]);
  vmScope[7] = ((vmScope[4] + vmScope[5]) + vmScope[6]);
  return vmScope[0][0][1](vmScope[7], "s1");
}

function vm_fn_159__initializeBehaviorBuffers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(159, "vmScope[0][0]", 1, 0, vmScope[0][0]);
  __vmReportCapturedBinding(159, "vmScope[0][1]", 1, 1, vmScope[0][1]);
  __vmReportCapturedBinding(159, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  vmScope[5] = createChild(vm_fn_160__typeofHelper, vmScope);
  vmScope[6] = createChild(vm_fn_163__defineEnumerableProperty, vmScope);
  vmScope[7] = createChild(vm_fn_164__assertClassCall2, vmScope);
  vmScope[8] = createChild(vm_fn_165__defineProperties2, vmScope);
  vmScope[9] = createChild(vm_fn_166__createClass2, vmScope);
  vmScope[10] = createChild(vm_fn_167__toPropertyKey2, vmScope);
  vmScope[11] = createChild(vm_fn_168__toPrimitive2, vmScope);
  vmScope[12] = createChild(vm_fn_180__createMousePoint, vmScope);
  vmScope[13] = createChild(vm_fn_181__createTouchPoint, vmScope);
  vmScope[14] = createChild(vm_fn_182__pushDedupedBehaviorPoint, vmScope);
  vmScope[0][6] = createChild(vm_fn_183__installBehaviorEventListeners, vmScope);
  vmScope[15] = createChild(vm_fn_193__computeMoveBehaviorFlags, vmScope);
  vmScope[16] = createChild(vm_fn_195__computeClickStartMissingFlag, vmScope);
  vmScope[17] = createChild(vm_fn_196__computeKeydownBehaviorFlags, vmScope);
  vmScope[0][7] = createChild(vm_fn_198__computeBehaviorAnomalyFlags, vmScope);
  vmScope[2] = createChild(vm_fn_169, vmScope)((vmScope[2] || {}));
  vmScope[3] = createChild(vm_fn_170__createRingBufferClass, vmScope)();
  vmScope[0][0] = new vmScope[3](400);
  vmScope[0][1] = new vmScope[3](100);
  vmScope[0][2] = new vmScope[3](200);
  vmScope[0][3] = new vmScope[3](100);
  vmScope[0][4] = new vmScope[3](50);
  vmScope[0][5] = new vmScope[3](50);
  vmScope[4] = vmScope[6](vmScope[6](vmScope[6]({}, vmScope[2].Move, vmScope[0][0]), vmScope[2].ClickStart, vmScope[0][1]), vmScope[2].ClickEnd, vmScope[0][2]);
  return undefined;
}

function vm_fn_160__typeofHelper(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(160, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_161__baseTypeof2, vmScope) | createChild(vm_fn_162__symbolAwareTypeof2, vmScope)
  vmScope[0][5] = createChild(vm_fn_161__baseTypeof2, vmScope);
  // POP createChild(vm_fn_161__baseTypeof2, vmScope)
  return vmScope[0][5](vmScope[2]);
}

function vm_fn_161__baseTypeof2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_162__symbolAwareTypeof2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_163__defineEnumerableProperty(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const vm_fn_167__toPropertyKey2 = vmScope[0][10];
  __vmReportCapturedBinding(163, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  vmScope[3] = vm_fn_167__toPropertyKey2(vmScope[3]);
  if ((vm_fn_167__toPropertyKey2(vmScope[3]) in vmScope[2])) {

  } else {
    vmScope[2][vmScope[3]] = vmScope[4];
  }
  // PHI@pc=65 slot=0: Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true })) | vmScope[4]
  vmScope[4];
  return vmScope[2];
}

function vm_fn_164__assertClassCall2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  if ((!(vmScope[2] instanceof vmScope[3]))) {
    throw new TypeError("Cannot call a class as a function");
  }
  return undefined;
}

function vm_fn_165__defineProperties2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const vm_fn_167__toPropertyKey2 = vmScope[0][10];
  __vmReportCapturedBinding(165, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  vmScope[4] = 0;
  while ((vmScope[4] < vmScope[3].length)) {
    vmScope[5] = vmScope[3][vmScope[4]];
    // incoming keep-true from pc=31
    vmScope[5]["enumerable"] = (vmScope[5].enumerable || (!1));
    // POP (vmScope[5].enumerable || (!1))
    vmScope[5]["configurable"] = (!0);
    // POP (!0)
    if (("value" in vmScope[5])) {
      vmScope[5]["writable"] = (!0);
    }
    // incoming keep-false from pc=59
    // POP (("value" in vmScope[5]) && (!0))
    Object.defineProperty(vmScope[2], vm_fn_167__toPropertyKey2(vmScope[5].key), vmScope[5]);
    vmScope[4]++;
  }
  // L103:
  // block boundary after jump @pc=101
  // incoming false-branch from pc=14
  return undefined;
}

function vm_fn_166__createClass2(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const vm_fn_165__defineProperties2 = vmScope[0][8];
  __vmReportCapturedBinding(166, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  (vmScope[3] && vm_fn_165__defineProperties2(vmScope[2].prototype, vmScope[3]));
  (vmScope[4] && vm_fn_165__defineProperties2(vmScope[2], vmScope[4]));
  Object.defineProperty(vmScope[2], "prototype", Object.defineProperty({}, "writable", { value: (!1), writable: true, configurable: true, enumerable: true }));
  return vmScope[2];
}

function vm_fn_167__toPropertyKey2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_161__baseTypeof2 = vmScope[0][5];
  const vm_fn_168__toPrimitive2 = vmScope[0][11];
  __vmReportCapturedBinding(167, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(167, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  vmScope[3] = vm_fn_168__toPrimitive2(vmScope[2], "string");
  if (("symbol" == vm_fn_161__baseTypeof2(vmScope[3]))) {

  }
  // PHI@pc=39 slot=0: vmScope[3] | (vmScope[3] + "")
  return vmScope[3];
}

function vm_fn_168__toPrimitive2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const vm_fn_161__baseTypeof2 = vmScope[0][5];
  __vmReportCapturedBinding(168, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  // incoming keep-true from pc=12
  if ((("object" != vm_fn_161__baseTypeof2(vmScope[2])) || (!vmScope[2]))) {
    return vmScope[2];
  }
  // block boundary after return @pc=23
  // incoming false-branch from pc=18
  vmScope[4] = vmScope[2][Symbol.toPrimitive];
  if ((undefined !== vmScope[4])) {
    // incoming keep-true from pc=56
    vmScope[5] = vmScope[4].call(vmScope[2], (vmScope[3] || "default"));
    if (("object" != vm_fn_161__baseTypeof2(vmScope[5]))) {
      return vmScope[5];
    }
    // block boundary after return @pc=82
    // incoming false-branch from pc=77
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  // L90:
  // block boundary after throw @pc=89
  // incoming false-branch from pc=42
  if (("string" === vmScope[3])) {

  } else {
    // block boundary after jump @pc=101
    // incoming false-branch from pc=97
  }
  // incoming from pc=101
  return String(vmScope[2]);
}

function vm_fn_169(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[2]["Move"] = 0;
  vmScope[2][0] = "Move";
  vmScope[2]["ClickStart"] = 1;
  vmScope[2][1] = "ClickStart";
  vmScope[2]["ClickEnd"] = 2;
  vmScope[2][2] = "ClickEnd";
  return vmScope[2];
}

function vm_fn_170__createRingBufferClass(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_166__createClass2 = vmScope[0][9];
  __vmReportCapturedBinding(170, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  vmScope[2] = createChild(vm_fn_171__initializeRingBuffer, vmScope);
  vmScope[3] = createChild(vm_fn_172__getRingBufferCapacity, vmScope);
  vmScope[4] = createChild(vm_fn_173__isRingBufferEmpty, vmScope);
  vmScope[5] = createChild(vm_fn_174__isRingBufferFull, vmScope);
  vmScope[6] = createChild(vm_fn_175__getRingBufferLast, vmScope);
  vmScope[7] = createChild(vm_fn_176__pushRingBuffer, vmScope);
  vmScope[8] = createChild(vm_fn_177__popRingBuffer, vmScope);
  vmScope[9] = createChild(vm_fn_178__getRingBufferData, vmScope);
  vmScope[10] = createChild(vm_fn_179__getRingBufferTrigger, vmScope);
  vm_fn_166__createClass2(vmScope[2], [Object.defineProperty(Object.defineProperty({}, "key", { value: "length", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_172__getRingBufferCapacity, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "isEmpty", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_173__isRingBufferEmpty, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "isFull", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_174__isRingBufferFull, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "last", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_175__getRingBufferLast, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "push", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_176__pushRingBuffer, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "pop", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_177__popRingBuffer, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "data", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_178__getRingBufferData, vmScope), writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "key", { value: "getTrigger", writable: true, configurable: true, enumerable: true }), "value", { value: createChild(vm_fn_179__getRingBufferTrigger, vmScope), writable: true, configurable: true, enumerable: true })]);
  return vmScope[2];
}

function vm_fn_171__initializeRingBuffer(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_171__initializeRingBuffer = vmScope[0][2];
  const vm_fn_164__assertClassCall2 = vmScope[0][0][7];
  __vmReportCapturedBinding(171, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(171, "vmScope[0][0][7]", 2, 7, vmScope[0][0][7]);
  vm_fn_164__assertClassCall2(vmThis, vm_fn_171__initializeRingBuffer);
  vmThis.items = new Array((vmScope[2] + 1));
  vmThis.front = 0;
  vmThis.rear = 0;
  vmThis.trigger = 0;
  return undefined;
}

function vm_fn_172__getRingBufferCapacity(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis.items.length;
}

function vm_fn_173__isRingBufferEmpty(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.front === vmThis.rear);
}

function vm_fn_174__isRingBufferFull(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (((vmThis.rear + 1) % vmThis.length()) === vmThis.front);
}

function vm_fn_175__getRingBufferLast(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if (vmThis.isEmpty()) {
    return undefined;
  }
  if ((vmThis.rear === 0)) {

  }
  // PHI@pc=35 slot=0: (vmThis.length() - 1) | (vmThis.rear - 1)
  vmScope[2] = (vmThis.length() - 1);
  return vmThis.items[vmScope[2]];
}

function vm_fn_176__pushRingBuffer(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if (vmThis.isFull()) {
    vmThis.pop();
  }
  vmThis.items[vmThis.rear] = vmScope[2];
  vmThis.rear = ((vmThis.rear + 1) % vmThis.length());
  vmThis["trigger"]++;
  return undefined;
}

function vm_fn_177__popRingBuffer(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if (vmThis.isEmpty()) {
    return undefined;
  }
  vmThis.front = ((vmThis.front + 1) % vmThis.length());
  vmThis["trigger"]++;
  return undefined;
}

function vm_fn_178__getRingBufferData(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if (vmThis.isEmpty()) {
    return [];
  }
  // block boundary after return @pc=10
  // incoming false-branch from pc=6
  vmScope[2] = [];
  vmScope[3] = vmThis.front;
  // L22:
  vmScope[2].push(vmThis.items[vmScope[3]]);
  vmScope[3] = ((vmScope[3] + 1) % vmThis.length());
  if ((vmScope[3] !== vmThis.rear)) { /* goto L22; */ }
  return vmScope[2];
}

function vm_fn_179__getRingBufferTrigger(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.trigger % vmThis.length());
}

function vm_fn_180__createMousePoint(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "x", { value: vmScope[2].clientX, writable: true, configurable: true, enumerable: true }), "y", { value: vmScope[2].clientY, writable: true, configurable: true, enumerable: true }), "ts", { value: Date.now(), writable: true, configurable: true, enumerable: true });
}

function vm_fn_181__createTouchPoint(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = vmScope[2].touches;
  if (((vmScope[2].touches === null) || (vmScope[3] === undefined))) {

  }
  // PHI@pc=37 slot=0: undefined | vmScope[3].item(0)
  vmScope[4] = vmScope[3].item(0);
  if (vmScope[4]) {
    return Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "x", { value: vmScope[4].clientX, writable: true, configurable: true, enumerable: true }), "y", { value: vmScope[4].clientY, writable: true, configurable: true, enumerable: true }), "ts", { value: Date.now(), writable: true, configurable: true, enumerable: true });
  }
  return undefined;
}

function vm_fn_182__pushDedupedBehaviorPoint(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(182, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  if (!(vmScope[3])) { /* goto L87; */ }
  vmScope[4] = vmScope[0][4][vmScope[2]];
  vmScope[5] = vmScope[4].last();
  if (vmScope[5]) {
    if (((vmScope[3].ts - vmScope[5].ts) <= 16)) { /* goto L71; */ } // keep-top
    if (!((vmScope[5].x === vmScope[3].x))) { /* goto L71; */ } // keep-top
  }
  // L71:
  // L71:
  // incoming keep-false from pc=29
  // incoming keep-true from pc=45
  // incoming keep-false from pc=58
  if (vmScope[5]) {
    return undefined;
  }
  // block boundary after return @pc=74
  // incoming false-branch from pc=71
  vmScope[4].push(vmScope[3]);
  // L87:
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_183__installBehaviorEventListeners(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  document.addEventListener("mousemove", createChild(vm_fn_184__handleMouseMove, vmScope));
  document.addEventListener("touchmove", createChild(vm_fn_185__handleTouchMove, vmScope));
  document.addEventListener("mousedown", createChild(vm_fn_186__handleMouseDown, vmScope));
  document.addEventListener("touchstart", createChild(vm_fn_187__handleTouchStart, vmScope));
  document.addEventListener("mouseup", createChild(vm_fn_188__handleMouseUp, vmScope));
  document.addEventListener("touchend", createChild(vm_fn_189__handleTouchEnd, vmScope));
  document.addEventListener("keydown", createChild(vm_fn_190__handleKeydown, vmScope));
  if ((window.self === window.top)) {
    window.addEventListener("deviceorientation", createChild(vm_fn_191__handleDeviceOrientation, vmScope));
  }
  document.addEventListener("visibilitychange", createChild(vm_fn_192__handleVisibilityChange, vmScope));
  return undefined;
}

function vm_fn_184__handleMouseMove(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(184, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(184, "vmScope[0][0][12]", 2, 12, vmScope[0][0][12]);
  __vmReportCapturedBinding(184, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  vmScope[3] = vmScope[0][0][12](vmScope[2]);
  vmScope[0][0][14](vmScope[0][0][2].Move, vmScope[3]);
  return undefined;
}

function vm_fn_185__handleTouchMove(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(185, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(185, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(185, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  vmScope[3] = vmScope[0][0][13](vmScope[2]);
  vmScope[0][0][14](vmScope[0][0][2].Move, vmScope[3]);
  return undefined;
}

function vm_fn_186__handleMouseDown(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(186, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(186, "vmScope[0][0][12]", 2, 12, vmScope[0][0][12]);
  __vmReportCapturedBinding(186, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  vmScope[3] = vmScope[0][0][12](vmScope[2]);
  vmScope[0][0][14](vmScope[0][0][2].ClickStart, vmScope[3]);
  return undefined;
}

function vm_fn_187__handleTouchStart(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(187, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(187, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(187, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  vmScope[3] = vmScope[0][0][13](vmScope[2]);
  vmScope[0][0][14](vmScope[0][0][2].ClickStart, vmScope[3]);
  return undefined;
}

function vm_fn_188__handleMouseUp(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(188, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(188, "vmScope[0][0][12]", 2, 12, vmScope[0][0][12]);
  __vmReportCapturedBinding(188, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  vmScope[3] = vmScope[0][0][12](vmScope[2]);
  vmScope[0][0][14](vmScope[0][0][2].ClickEnd, vmScope[3]);
  return undefined;
}

function vm_fn_189__handleTouchEnd(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(189, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(189, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(189, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  vmScope[3] = vmScope[0][0][13](vmScope[2]);
  vmScope[0][0][14](vmScope[0][0][2].ClickEnd, vmScope[3]);
  return undefined;
}

function vm_fn_190__handleKeydown(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(190, "vmScope[0][0][0][3]", 3, 3, vmScope[0][0][0][3]);
  vmScope[2] = vmScope[0][0][0][3].last();
  vmScope[3] = Object.defineProperty({}, "ts", { value: Date.now(), writable: true, configurable: true, enumerable: true });
  if ((vmScope[2] && (vmScope[3].ts === vmScope[2].ts))) {
    return undefined;
  }
  vmScope[0][0][0][3].push(vmScope[3]);
  return undefined;
}

function vm_fn_191__handleDeviceOrientation(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(191, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[3] = vmScope[2].beta;
  vmScope[4] = vmScope[2].gamma;
  vmScope[5] = vmScope[2].alpha;
  // incoming keep-false from pc=27
  // incoming keep-false from pc=32
  if (((vmScope[3] && vmScope[4]) && vmScope[5])) {
    vmScope[6] = vmScope[0][0][0][4].last();
    vmScope[7] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "x", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "y", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "z", { value: vmScope[5], writable: true, configurable: true, enumerable: true }), "ts", { value: Date.now(), writable: true, configurable: true, enumerable: true });
    vmScope[8] = ((Math.random() * 90000) + 60000);
    // incoming keep-false from pc=97
    if ((vmScope[6] && ((vmScope[7].ts - vmScope[6].ts) < vmScope[8]))) {
      return undefined;
    }
    // block boundary after return @pc=117
    // incoming false-branch from pc=114
    vmScope[0][0][0][4].push(vmScope[7]);
  }
  // L130:
  // incoming false-branch from pc=37
  return undefined;
}

function vm_fn_192__handleVisibilityChange(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(192, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  vmScope[2] = vmScope[0][0][0][5].last();
  if ((document.visibilityState === "visible")) {

  }
  vmScope[3] = Object.defineProperty(Object.defineProperty({}, "v", { value: 1, writable: true, configurable: true, enumerable: true }), "ts", { value: Date.now(), writable: true, configurable: true, enumerable: true });
  if ((vmScope[2] && (vmScope[3].v === vmScope[2].v))) {
    return undefined;
  }
  vmScope[0][0][0][5].push(vmScope[3]);
  return undefined;
}

function vm_fn_193__computeMoveBehaviorFlags(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(193, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = vmScope[0][0][0].data();
  if ((vmScope[2].length === 0)) {
    return (1 << 1);
  }
  if ((vmScope[2].length === 1)) {
    return 0;
  }
  vmScope[3] = 0;
  vmScope[2].reduce(createChild(vm_fn_194__accumulateMoveVelocity, vmScope));
  if (((vmScope[3] / (vmScope[2].length - 1)) > 18)) {
    return (1 << 4);
  }
  return 0;
}

function vm_fn_194__accumulateMoveVelocity(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(194, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[4] = Math.sqrt((Math.pow((vmScope[3].x - vmScope[2].x), 2) + Math.pow((vmScope[3].y - vmScope[2].y), 2)));
  vmScope[0][3] = (vmScope[0][3] + (vmScope[4] / (vmScope[3].ts - vmScope[2].ts)));
  // POP (vmScope[0][3] + (vmScope[4] / (vmScope[3].ts - vmScope[2].ts)))
  return vmScope[3];
}

function vm_fn_195__computeClickStartMissingFlag(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(195, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  if ((vmScope[0][0][1].data().length === 0)) {
    return (1 << 2);
  }
  return 0;
}

function vm_fn_196__computeKeydownBehaviorFlags(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(196, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  vmScope[2] = vmScope[0][0][3].data();
  if ((vmScope[2].length === 0)) {
    return (1 << 3);
  }
  if ((vmScope[2].length < 6)) {
    return 0;
  }
  vmScope[3] = 0;
  vmScope[2].reduce(createChild(vm_fn_197__accumulateKeydownRate, vmScope));
  if (((vmScope[3] / (vmScope[2].length - 1)) > "0.2")) {
    return (1 << 5);
  }
  return 0;
}

function vm_fn_197__accumulateKeydownRate(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(197, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[0][3] = (vmScope[0][3] + (1 / (vmScope[3].ts - vmScope[2].ts)));
  // POP (vmScope[0][3] + (1 / (vmScope[3].ts - vmScope[2].ts)))
  return vmScope[3];
}

function vm_fn_198__computeBehaviorAnomalyFlags(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_193__computeMoveBehaviorFlags = vmScope[0][15];
  const vm_fn_195__computeClickStartMissingFlag = vmScope[0][16];
  const vm_fn_196__computeKeydownBehaviorFlags = vmScope[0][17];
  __vmReportCapturedBinding(198, "vmScope[0][15]", 1, 15, vmScope[0][15]);
  __vmReportCapturedBinding(198, "vmScope[0][16]", 1, 16, vmScope[0][16]);
  __vmReportCapturedBinding(198, "vmScope[0][17]", 1, 17, vmScope[0][17]);
  return ((vm_fn_193__computeMoveBehaviorFlags() | vm_fn_195__computeClickStartMissingFlag()) | vm_fn_196__computeKeydownBehaviorFlags());
}

function vm_fn_199(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_200__typeofHelper10, vmScope);
  vmScope[3] = createChild(vm_fn_203__createRegeneratorRuntime2, vmScope);
  vmScope[4] = createChild(vm_fn_253__ownKeys, vmScope);
  vmScope[5] = createChild(vm_fn_255__objectSpread2, vmScope);
  vmScope[6] = createChild(vm_fn_258__defineEnumerableProperty2, vmScope);
  vmScope[7] = createChild(vm_fn_259__toPropertyKey3, vmScope);
  vmScope[8] = createChild(vm_fn_260__toPrimitive3, vmScope);
  vmScope[9] = createChild(vm_fn_261__asyncGeneratorStep2, vmScope);
  vmScope[10] = createChild(vm_fn_262__asyncToGenerator2, vmScope);
  vmScope[0][20] = createChild(vm_fn_267__invokeNwidCollectorAsync2, vmScope);
  vmScope[11] = createChild(vm_fn_268__invokeNwidCollectorAsync, vmScope);
  vmScope[0][21] = createChild(vm_fn_271__invokeWidCollectorAsync2, vmScope);
  vmScope[12] = createChild(vm_fn_272__invokeWidCollectorAsync, vmScope);
  return undefined;
}

function vm_fn_200__typeofHelper10(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(200, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_201__baseTypeof3, vmScope) | createChild(vm_fn_202__symbolAwareTypeof3, vmScope)
  vmScope[0][2] = createChild(vm_fn_201__baseTypeof3, vmScope);
  // POP createChild(vm_fn_201__baseTypeof3, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_201__baseTypeof3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_202__symbolAwareTypeof3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_203__createRegeneratorRuntime2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[11] = createChild(vm_fn_206__defineIteratorMethod2, vmScope);
    vmScope[12] = createChild(vm_fn_208__wrapGeneratorFunction2, vmScope);
    vmScope[13] = createChild(vm_fn_209, vmScope);
    vmScope[19] = createChild(vm_fn_210, vmScope);
    vmScope[20] = createChild(vm_fn_211, vmScope);
    vmScope[21] = createChild(vm_fn_212, vmScope);
    vmScope[26] = createChild(vm_fn_214__defineIteratorMethods2, vmScope);
    vmScope[27] = createChild(vm_fn_217__setupAsyncIterator2, vmScope);
    vmScope[28] = createChild(vm_fn_226__createInvokeMethod2, vmScope);
    vmScope[29] = createChild(vm_fn_228__maybeInvokeDelegate2, vmScope);
    vmScope[30] = createChild(vm_fn_229__pushTryEntry2, vmScope);
    vmScope[31] = createChild(vm_fn_230__resetCompletionRecord2, vmScope);
    vmScope[32] = createChild(vm_fn_231__resetTryEntryContext2, vmScope);
    vmScope[33] = createChild(vm_fn_232__getIterator2, vmScope);
    vmScope[34] = createChild(vm_fn_204, vmScope);
    vmScope[0][3] = createChild(vm_fn_204, vmScope);
    vmScope[3] = {};
    vmScope[4] = Object.prototype;
    vmScope[5] = vmScope[4].hasOwnProperty;
    // incoming keep-true from pc=102
    vmScope[6] = (Object.defineProperty || createChild(vm_fn_205__definePropertyFallback2, vmScope));
    if (("function" == typeof Symbol)) {

    } else {
      // block boundary after jump @pc=118
      // incoming false-branch from pc=114
    }
    // incoming from pc=118
    // PHI@pc=121 slot=0: Symbol | {}
    vmScope[7] = Symbol;
    // incoming keep-true from pc=129
    vmScope[8] = (vmScope[7].iterator || "@@iterator");
    // incoming keep-true from pc=141
    vmScope[9] = (vmScope[7].asyncIterator || "@@asyncIterator");
    // incoming keep-true from pc=153
    vmScope[10] = (vmScope[7].toStringTag || "@@toStringTag");
    vmScope[11]({}, "");
    vmScope[3].wrap = vmScope[12];
  } catch (__vm_caught_exception) {
    vmScope[35] = __vm_caught_exception;
    vmScope[36] = createChild(vm_fn_207, vmScope);
    vmScope[11] = createChild(vm_fn_207, vmScope);
  }
  vmScope[14] = "suspendedStart";
  vmScope[15] = "suspendedYield";
  vmScope[16] = "executing";
  vmScope[17] = "completed";
  vmScope[18] = {};
  vmScope[22] = {};
  vmScope[11](vmScope[22], vmScope[8], createChild(vm_fn_213__returnThis4, vmScope));
  vmScope[23] = Object.getPrototypeOf;
  // incoming keep-false from pc=245
  vmScope[24] = (vmScope[23] && vmScope[23](vmScope[23](vmScope[33]([]))));
  // incoming keep-false from pc=273
  // incoming keep-false from pc=282
  if (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8]))) {
    vmScope[22] = vmScope[24];
  }
  // incoming keep-false from pc=298
  (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8])) && vmScope[24]);
  vmScope[19]["prototype"] = Object.create(vmScope[22]);
  vmScope[21]["prototype"] = Object.create(vmScope[22]);
  vmScope[25] = Object.create(vmScope[22]);
  vmScope[20]["prototype"] = vmScope[21];
  // POP vmScope[21]
  vmScope[6](vmScope[25], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[21], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[6](vmScope[21], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[20], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[20]["displayName"] = vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[3]["isGeneratorFunction"] = createChild(vm_fn_234__isGeneratorFunction2, vmScope);
  // POP createChild(vm_fn_234__isGeneratorFunction2, vmScope)
  vmScope[3]["mark"] = createChild(vm_fn_235__markGeneratorFunction2, vmScope);
  // POP createChild(vm_fn_235__markGeneratorFunction2, vmScope)
  vmScope[3]["awrap"] = createChild(vm_fn_236__wrapAwaitValue2, vmScope);
  // POP createChild(vm_fn_236__wrapAwaitValue2, vmScope)
  vmScope[26](vmScope[27].prototype);
  vmScope[11](vmScope[27].prototype, vmScope[9], createChild(vm_fn_237__returnThis5, vmScope));
  vmScope[3]["AsyncIterator"] = vmScope[27];
  // POP vmScope[27]
  vmScope[3]["async"] = createChild(vm_fn_238__createAsyncFunctionWrapper2, vmScope);
  // POP createChild(vm_fn_238__createAsyncFunctionWrapper2, vmScope)
  vmScope[26](vmScope[25]);
  vmScope[11](vmScope[25], vmScope[10], "Generator");
  vmScope[11](vmScope[25], vmScope[8], createChild(vm_fn_240__returnThis6, vmScope));
  vmScope[11](vmScope[25], "toString", createChild(vm_fn_241__getGeneratorTag2, vmScope));
  vmScope[3]["keys"] = createChild(vm_fn_242, vmScope);
  // POP createChild(vm_fn_242, vmScope)
  vmScope[3]["values"] = vmScope[33];
  // POP vmScope[33]
  vmScope[37] = createChild(vm_fn_244__resetGeneratorContext2, vmScope);
  vmScope[38] = createChild(vm_fn_245__stopGeneratorContext2, vmScope);
  vmScope[39] = createChild(vm_fn_246__dispatchException2, vmScope);
  vmScope[40] = createChild(vm_fn_248__abrupt2, vmScope);
  vmScope[41] = createChild(vm_fn_249__complete2, vmScope);
  vmScope[42] = createChild(vm_fn_250__finishFinallyEntry2, vmScope);
  vmScope[43] = createChild(vm_fn_251__catchTryEntry2, vmScope);
  vmScope[44] = createChild(vm_fn_252__delegateYield2, vmScope);
  vmScope[32]["prototype"] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_244__resetGeneratorContext2, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_245__stopGeneratorContext2, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_246__dispatchException2, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_248__abrupt2, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_249__complete2, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_250__finishFinallyEntry2, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_251__catchTryEntry2, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_252__delegateYield2, vmScope), writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_244__resetGeneratorContext2, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_245__stopGeneratorContext2, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_246__dispatchException2, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_248__abrupt2, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_249__complete2, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_250__finishFinallyEntry2, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_251__catchTryEntry2, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_252__delegateYield2, vmScope), writable: true, configurable: true, enumerable: true })
  return vmScope[3];
}

function vm_fn_204(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(204, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return vmScope[0][3];
}

function vm_fn_205__definePropertyFallback2(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4].value;
  return undefined;
}

function vm_fn_206__defineIteratorMethod2(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  return vmScope[2][vmScope[3]];
}

function vm_fn_207(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4];
  return vmScope[4];
}

function vm_fn_208__wrapGeneratorFunction2(scope, thisArg, argsLike, arg0, arg1, arg2, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(208, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(208, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(208, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  __vmReportCapturedBinding(208, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  if ((vmScope[3] && (vmScope[3].prototype instanceof vmScope[0][19]))) {

  }
  // PHI@pc=24 slot=0: vmScope[3] | vmScope[0][19]
  vmScope[6] = vmScope[3];
  vmScope[7] = Object.create(vmScope[6].prototype);
  vmScope[8] = new vmScope[0][32]((vmScope[5] || []));
  vmScope[0][6](vmScope[7], "_invoke", Object.defineProperty({}, "value", { value: vmScope[0][28](vmScope[2], vmScope[4], vmScope[8]), writable: true, configurable: true, enumerable: true }));
  return vmScope[7];
}

function vm_fn_209(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  try {
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "normal", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[2].call(vmScope[3], vmScope[4]), writable: true, configurable: true, enumerable: true });
    // block boundary after return @pc=21
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "throw", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_210(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_211(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_212(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_213__returnThis4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_214__defineIteratorMethods2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  ["next", "throw", "return"].forEach(createChild(vm_fn_215__defineIteratorMethod8, vmScope));
  return undefined;
}

function vm_fn_215__defineIteratorMethod8(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(215, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(215, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  vmScope[0][0][11](vmScope[0][2], vmScope[2], createChild(vm_fn_216__invokeIteratorMethod2, vmScope));
  return undefined;
}

function vm_fn_216__invokeIteratorMethod2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(216, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmThis._invoke(vmScope[0][2], vmScope[2]);
}

function vm_fn_217__setupAsyncIterator2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(217, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[4] = createChild(vm_fn_218__resumeAsyncIteratorStep2, vmScope);
  vmScope[6] = createChild(vm_fn_223__enqueueAsyncIteratorStep2, vmScope);
  vmScope[0][6](vmThis, "_invoke", Object.defineProperty({}, "value", { value: createChild(vm_fn_223__enqueueAsyncIteratorStep2, vmScope), writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_218__resumeAsyncIteratorStep2(scope, thisArg, argsLike, arg0, arg1, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(218, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(218, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(218, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(218, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(218, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  vmScope[6] = vmScope[0][0][13](vmScope[0][2][vmScope[2]], vmScope[0][2], vmScope[3]);
  if (("throw" !== vmScope[6].type)) {
    vmScope[7] = vmScope[6].arg;
    vmScope[8] = vmScope[7].value;
    // incoming keep-false from pc=51
    // incoming keep-false from pc=65
    if (((vmScope[8] && ("object" == vmScope[0][0][0][2](vmScope[8]))) && vmScope[0][0][5].call(vmScope[8], "__await"))) {

    } else {
      // block boundary after jump @pc=104
      // incoming false-branch from pc=80
    }
    // incoming from pc=104
    // PHI@pc=126 slot=0: vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_219__resumeAsyncIteratorNext2, vmScope), createChild(vm_fn_220__resumeAsyncIteratorThrow3, vmScope)) | vmScope[0][3].resolve(vmScope[8]).then(createChild(vm_fn_221__resolveAsyncIteratorValue2, vmScope), createChild(vm_fn_222__resumeAsyncIteratorThrow4, vmScope))
    return vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_219__resumeAsyncIteratorNext2, vmScope), createChild(vm_fn_220__resumeAsyncIteratorThrow3, vmScope));
  }
  // L127:
  // block boundary after return @pc=126
  // incoming false-branch from pc=30
  vmScope[5](vmScope[6].arg);
  return undefined;
}

function vm_fn_219__resumeAsyncIteratorNext2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(219, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(219, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(219, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("next", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_220__resumeAsyncIteratorThrow3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(220, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(220, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(220, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_221__resolveAsyncIteratorValue2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(221, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(221, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[0][7]["value"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4](vmScope[0][7]);
  return undefined;
}

function vm_fn_222__resumeAsyncIteratorThrow4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(222, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(222, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(222, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  return vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
}

function vm_fn_223__enqueueAsyncIteratorStep2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(223, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_224__createAsyncIteratorPromise2, vmScope);
  if (vmScope[0][5]) {

  }
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  vmScope[0][5] = vmScope[0][5].then(vmScope[4], vmScope[4]);
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  return vmScope[0][5].then(vmScope[4], vmScope[4]);
}

function vm_fn_224__createAsyncIteratorPromise2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(224, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  return new vmScope[0][0][3](createChild(vm_fn_225__executeAsyncIteratorStep2, vmScope));
}

function vm_fn_225__executeAsyncIteratorStep2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(225, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(225, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(225, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][0][2], vmScope[0][0][3], vmScope[2], vmScope[3]);
  return undefined;
}

function vm_fn_226__createInvokeMethod2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  __vmReportCapturedBinding(226, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  vmScope[5] = vmScope[0][14];
  return createChild(vm_fn_227__invokeGeneratorMethod2, vmScope);
}

function vm_fn_227__invokeGeneratorMethod2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(227, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(227, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(227, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(227, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(227, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(227, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(227, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(227, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(227, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(227, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  __vmReportCapturedBinding(227, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(227, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  if ((vmScope[0][5] === vmScope[0][0][16])) {
    throw Error("Generator is already running");
  }
  // block boundary after throw @pc=16
  // incoming false-branch from pc=7
  if ((vmScope[0][5] === vmScope[0][0][17])) {
    if (("throw" === vmScope[2])) {
      throw vmScope[3];
    }
    // block boundary after throw @pc=37
    // incoming false-branch from pc=32
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[0][0][2], writable: true, configurable: true, enumerable: true }), "done", { value: (!0), writable: true, configurable: true, enumerable: true });
  }
  // L50:
  // block boundary after return @pc=49
  // incoming false-branch from pc=24
  vmScope[0][4]["method"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4]["arg"] = vmScope[3];
  // POP vmScope[3]
  // L70:
  vmScope[4] = vmScope[0][4].delegate;
  if (vmScope[4]) {
    vmScope[5] = vmScope[0][0][29](vmScope[4], vmScope[0][4]);
    if (!(vmScope[5])) { /* goto L118; */ }
    if ((vmScope[5] === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=112
    // incoming false-branch from pc=110
    return vmScope[5];
  }
  // L118:
  // block boundary after return @pc=117
  // incoming false-branch from pc=81
  // incoming false-branch from pc=101
  if (("next" === vmScope[0][4].method)) {
    vmScope[0][4]["_sent"] = vmScope[0][4].arg;
    vmScope[0][4].sent = vmScope[0][4].arg;
    /* goto L221; */
  }
  // block boundary after jump @pc=144
  // incoming false-branch from pc=126
  if (("throw" === vmScope[0][4].method)) {
    if ((vmScope[0][5] === vmScope[0][0][14])) {
      vmScope[0][5] = vmScope[0][0][17];
      // POP vmScope[0][0][17]
      throw vmScope[0][4].arg;
    }
    // block boundary after throw @pc=178
    // incoming false-branch from pc=163
    vmScope[0][4].dispatchException(vmScope[0][4].arg);
    /* goto L221; */
  }
  // L195:
  // block boundary after jump @pc=193
  // incoming false-branch from pc=154
  // incoming keep-false from pc=203
  (("return" === vmScope[0][4].method) && vmScope[0][4].abrupt("return", vmScope[0][4].arg));
  // L221:
  // incoming from pc=144
  // incoming from pc=193
  vmScope[0][5] = vmScope[0][0][16];
  vmScope[6] = vmScope[0][0][13](vmScope[0][2], vmScope[0][3], vmScope[0][4]);
  if (("normal" === vmScope[6].type)) {
    if (vmScope[0][4].done) {

    } else {
      // block boundary after jump @pc=265
      // incoming false-branch from pc=260
    }
    // incoming from pc=265
    // PHI@pc=270 slot=0: vmScope[0][0][17] | vmScope[0][0][15]
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    if ((vmScope[6].arg === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=286
    // incoming false-branch from pc=284
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[6].arg, writable: true, configurable: true, enumerable: true }), "done", { value: vmScope[0][4].done, writable: true, configurable: true, enumerable: true });
  }
  // L304:
  // block boundary after return @pc=303
  // incoming false-branch from pc=253
  if (("throw" === vmScope[6].type)) {
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    vmScope[0][4]["method"] = "throw";
    // POP "throw"
    vmScope[0][4]["arg"] = vmScope[6].arg;
  }
  // incoming keep-false from pc=312
  // POP (("throw" === vmScope[6].type) && vmScope[6].arg)
  // L343:
  // incoming from pc=112
  // incoming from pc=286
  /* goto L70; */
  // block boundary after jump @pc=343
  return undefined;
}

function vm_fn_228__maybeInvokeDelegate2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(228, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(228, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(228, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(228, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  vmScope[4] = vmScope[3].method;
  vmScope[5] = vmScope[2].iterator[vmScope[4]];
  if (!((vmScope[5] === vmScope[0][2]))) { /* goto L137; */ }
  vmScope[3]["delegate"] = null;
  // POP null
  // incoming keep-false from pc=43
  if ((("throw" === vmScope[4]) && vmScope[2].iterator.return)) {
    vmScope[3]["method"] = "return";
    // POP "return"
    vmScope[3]["arg"] = vmScope[0][2];
    // POP vmScope[0][2]
    vmScope[0][29](vmScope[2], vmScope[3]);
  }
  // incoming keep-false from pc=52
  if ((!((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)))) {
    if (!(("return" !== vmScope[4]))) { /* goto L132; */ } // keep-top
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  }
  // L132:
  // L132:
  // incoming keep-true from pc=94
  // incoming keep-false from pc=102
  // PHI@pc=132 slot=0: ((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)) | ("return" !== vmScope[4]) | new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"))
  new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  return vmScope[0][18];
  // L137:
  // block boundary after return @pc=136
  // incoming false-branch from pc=27
  vmScope[6] = vmScope[0][13](vmScope[5], vmScope[2].iterator, vmScope[3].arg);
  if (("throw" === vmScope[6].type)) {
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = vmScope[6].arg;
    // POP vmScope[6].arg
    vmScope[3]["delegate"] = null;
    // POP null
    return vmScope[0][18];
  }
  // block boundary after return @pc=201
  // incoming false-branch from pc=167
  vmScope[7] = vmScope[6].arg;
  if (!(vmScope[7])) { /* goto L296; */ }
  if (vmScope[7].done) {
    vmScope[3][vmScope[2].resultName] = vmScope[7].value;
    // POP vmScope[7].value
    vmScope[3]["next"] = vmScope[2].nextLoc;
    // POP vmScope[2].nextLoc
    if (("return" !== vmScope[3].method)) {
      vmScope[3]["method"] = "next";
      // POP "next"
      vmScope[3]["arg"] = vmScope[0][2];
    }
    // incoming keep-false from pc=257
    // POP (("return" !== vmScope[3].method) && vmScope[0][2])
    vmScope[3]["delegate"] = null;
    // POP null
    /* goto L294; */
  }
  // L291:
  // block boundary after jump @pc=289
  // incoming false-branch from pc=220
  // L294:
  // incoming from pc=289
  /* goto L329; */
  // L296:
  // block boundary after jump @pc=294
  // incoming false-branch from pc=213
  vmScope[3]["method"] = "throw";
  // POP "throw"
  vmScope[3]["arg"] = new TypeError("iterator result is not an object");
  new TypeError("iterator result is not an object");
  vmScope[3]["delegate"] = null;
  // POP null
  // L329:
  // incoming from pc=294
  // PHI@pc=294 slot=0: vmScope[0][18] | vmScope[7]
  return vmScope[0][18];
}

function vm_fn_229__pushTryEntry2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "tryLoc", { value: vmScope[2]["0"], writable: true, configurable: true, enumerable: true });
  if ((1 in vmScope[2])) {
    vmScope[3]["catchLoc"] = vmScope[2]["1"];
  }
  // POP ((1 in vmScope[2]) && vmScope[2]["1"])
  if ((2 in vmScope[2])) {
    vmScope[3]["finallyLoc"] = vmScope[2]["2"];
    // POP vmScope[2]["2"]
    vmScope[3]["afterLoc"] = vmScope[2]["3"];
  }
  // POP ((2 in vmScope[2]) && vmScope[2]["3"])
  vmThis.tryEntries.push(vmScope[3]);
  return undefined;
}

function vm_fn_230__resetCompletionRecord2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = (vmScope[2].completion || {});
  vmScope[3]["type"] = "normal";
  // POP "normal"
  (delete vmScope[3]["arg"]);
  vmScope[2]["completion"] = vmScope[3];
  // POP vmScope[3]
  return undefined;
}

function vm_fn_231__resetTryEntryContext2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(231, "vmScope[0][30]", 1, 30, vmScope[0][30]);
  vmThis["tryEntries"] = [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })];
  // POP [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })]
  vmScope[2].forEach(vmScope[0][30], vmThis);
  vmThis.reset((!0));
  return undefined;
}

function vm_fn_232__getIterator2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(232, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(232, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  // incoming keep-true from pc=3
  if ((vmScope[2] || ("" === vmScope[2]))) {
    vmScope[3] = vmScope[2][vmScope[0][8]];
    if (vmScope[3]) {
      return vmScope[3].call(vmScope[2]);
    }
    // block boundary after return @pc=39
    // incoming false-branch from pc=26
    if (("function" == typeof vmScope[2].next)) {
      return vmScope[2];
    }
    // block boundary after return @pc=54
    // incoming false-branch from pc=49
    if ((!isNaN(vmScope[2].length))) {
      vmScope[4] = (-1);
      vmScope[6] = createChild(vm_fn_233__nextArrayLikeIterator2, vmScope);
      vmScope[5] = createChild(vm_fn_233__nextArrayLikeIterator2, vmScope);
      vmScope[5]["next"] = vmScope[5];
      return vmScope[5];
    }
  }
  // L93:
  // L93:
  // block boundary after return @pc=92
  // incoming false-branch from pc=11
  // incoming false-branch from pc=66
  throw new TypeError((vmScope[0][0][2](vmScope[2]) + " is not iterable"));
  // block boundary after throw @pc=109
  return undefined;
}

function vm_fn_233__nextArrayLikeIterator2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(233, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(233, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(233, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(233, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(233, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  while ((++vmScope[0][4] < vmScope[0][2].length)) {
    if (vmScope[0][0][5].call(vmScope[0][2], vmScope[0][4])) {
      vmScope[0][6]["value"] = vmScope[0][2][vmScope[0][4]];
      // POP vmScope[0][2][vmScope[0][4]]
      vmScope[0][6]["done"] = (!1);
      // POP (!1)
      return vmScope[0][6];
    }
    // block boundary after return @pc=55
    // incoming false-branch from pc=26
  }
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=10
  vmScope[0][6]["value"] = vmScope[0][0][2];
  // POP vmScope[0][0][2]
  vmScope[0][6]["done"] = (!0);
  // POP (!0)
  return vmScope[0][6];
}

function vm_fn_234__isGeneratorFunction2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(234, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  // incoming keep-false from pc=7
  vmScope[3] = (("function" == typeof vmScope[2]) && vmScope[2].constructor);
  if ((!(!vmScope[3]))) {
    if ((vmScope[3] === vmScope[0][20])) { /* goto L48; */ } // keep-top
    // incoming keep-true from pc=40
  }
  // L48:
  // incoming keep-false from pc=22
  // incoming keep-true from pc=31
  // PHI@pc=48 slot=0: (!(!vmScope[3])) | (vmScope[3] === vmScope[0][20]) | ("GeneratorFunction" === (vmScope[3].displayName || vmScope[3].name))
  return (!(!vmScope[3]));
}

function vm_fn_235__markGeneratorFunction2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(235, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(235, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(235, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(235, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (Object.setPrototypeOf) {

  } else {
    vmScope[2]["__proto__"] = vmScope[0][21];
    // POP vmScope[0][21]
  }
  // PHI@pc=45 slot=0: Object.setPrototypeOf(vmScope[2], vmScope[0][21]) | vmScope[0][11](vmScope[2], vmScope[0][10], "GeneratorFunction")
  Object.setPrototypeOf(vmScope[2], vmScope[0][21]);
  vmScope[2]["prototype"] = Object.create(vmScope[0][25]);
  Object.create(vmScope[0][25]);
  return vmScope[2];
}

function vm_fn_236__wrapAwaitValue2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "__await", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_237__returnThis5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_238__createAsyncFunctionWrapper2(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 5, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  __vmReportCapturedBinding(238, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(238, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(238, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if ((undefined === vmScope[6])) {
    vmScope[6] = Promise;
  }
  // POP ((undefined === vmScope[6]) && Promise)
  vmScope[7] = new vmScope[0][27](vmScope[0][12](vmScope[2], vmScope[3], vmScope[4], vmScope[5]), vmScope[6]);
  if (vmScope[0][3].isGeneratorFunction(vmScope[3])) {

  }
  // PHI@pc=78 slot=0: vmScope[7] | vmScope[7].next().then(createChild(vm_fn_239__handleAsyncIteratorResult2, vmScope))
  return vmScope[7];
}

function vm_fn_239__handleAsyncIteratorResult2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(239, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  if (vmScope[2].done) {

  }
  // PHI@pc=22 slot=0: vmScope[2].value | vmScope[0][7].next()
  return vmScope[2].value;
}

function vm_fn_240__returnThis6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_241__getGeneratorTag2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "[object Generator]";
}

function vm_fn_242(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object(vmScope[2]);
  vmScope[4] = [];
  for (vmScope[5] in vmScope[3]) {
    vmScope[4].push(vmScope[5]);
  }
  vmScope[4].reverse();
  vmScope[7] = createChild(vm_fn_243__nextObjectKeyIterator2, vmScope);
  return createChild(vm_fn_243__nextObjectKeyIterator2, vmScope);
}

function vm_fn_243__nextObjectKeyIterator2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(243, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(243, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(243, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  while (vmScope[0][4].length) {
    vmScope[2] = vmScope[0][4].pop();
    if ((vmScope[2] in vmScope[0][3])) {
      vmScope[0][7]["value"] = vmScope[2];
      // POP vmScope[2]
      vmScope[0][7]["done"] = (!1);
      // POP (!1)
      return vmScope[0][7];
    }
    // block boundary after return @pc=50
    // incoming false-branch from pc=25
  }
  // L53:
  // block boundary after jump @pc=51
  // incoming false-branch from pc=5
  vmScope[0][7]["done"] = (!0);
  // POP (!0)
  return vmScope[0][7];
}

function vm_fn_244__resetGeneratorContext2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(244, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(244, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(244, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmThis["prev"] = 0;
  // POP 0
  vmThis["next"] = 0;
  // POP 0
  vmThis["_sent"] = vmScope[0][2];
  vmThis["sent"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis["done"] = (!1);
  // POP (!1)
  vmThis["delegate"] = null;
  // POP null
  vmThis["method"] = "next";
  // POP "next"
  vmThis["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis.tryEntries.forEach(vmScope[0][31]);
  if (!((!vmScope[2]))) { /* goto L142; */ }
  while ((/* enum-next */ (vmScope[3] = __vm_enum_next_key(vmThis)), vmScope[3] !== undefined)) {
    // incoming keep-false from pc=96
    // incoming keep-false from pc=110
    if (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1)))))) {
      vmThis[vmScope[3]] = vmScope[0][2];
    }
    // incoming keep-false from pc=129
    (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1))))) && vmScope[0][2]);
  }
  // L142:
  // block boundary after jump @pc=140
  // incoming false-branch from pc=71
  // incoming false-branch from pc=81
  return undefined;
}

function vm_fn_245__stopGeneratorContext2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmThis.done = (!0);
  vmScope[2] = vmThis.tryEntries["0"].completion;
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  return vmThis.rval;
}

function vm_fn_246__dispatchException2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(246, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_247__handleExceptionEntry2, vmScope);
  if (vmThis.done) {
    throw vmScope[2];
  }
  // block boundary after throw @pc=13
  // incoming false-branch from pc=8
  vmScope[3] = vmThis;
  vmScope[5] = (vmThis.tryEntries.length - 1);
  // L29:
  if (!((vmScope[5] >= 0))) { /* goto L255; */ }
  vmScope[6] = vmThis.tryEntries[vmScope[5]];
  vmScope[7] = vmScope[6].completion;
  if (("root" === vmScope[6].tryLoc)) {
    return vmScope[4]("end");
  }
  // block boundary after return @pc=73
  // incoming false-branch from pc=63
  if (!((vmScope[6].tryLoc <= vmThis.prev))) { /* goto L248; */ }
  vmScope[8] = vmScope[0][5].call(vmScope[6], "catchLoc");
  vmScope[9] = vmScope[0][5].call(vmScope[6], "finallyLoc");
  // incoming keep-false from pc=120
  if ((vmScope[8] && vmScope[9])) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=152
    // incoming false-branch from pc=136
    if ((vmThis.prev < vmScope[6].finallyLoc)) {
      return vmScope[4](vmScope[6].finallyLoc);
    }
    // block boundary after return @pc=175
    // incoming false-branch from pc=162
    /* goto L248; */
  }
  // L178:
  // block boundary after jump @pc=176
  // incoming false-branch from pc=125
  if (vmScope[8]) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=208
    // incoming false-branch from pc=192
    /* goto L248; */
  }
  // L211:
  // block boundary after jump @pc=209
  // incoming false-branch from pc=181
  if ((!vmScope[9])) {
    throw Error("try statement without catch or finally");
  }
  // block boundary after throw @pc=224
  // incoming false-branch from pc=215
  if ((vmThis.prev < vmScope[6].finallyLoc)) {
    return vmScope[4](vmScope[6].finallyLoc);
  }
  // L248:
  // L248:
  // block boundary after return @pc=247
  // incoming false-branch from pc=83
  // incoming from pc=176
  // incoming from pc=209
  // incoming false-branch from pc=234
  --vmScope[5];
  /* goto L29; */
  // L255:
  // block boundary after jump @pc=253
  // incoming false-branch from pc=35
  return undefined;
}

function vm_fn_247__handleExceptionEntry2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(247, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(247, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(247, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(247, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[0][7]["type"] = "throw";
  // POP "throw"
  vmScope[0][7]["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmScope[0][3]["next"] = vmScope[2];
  // POP vmScope[2]
  if (vmScope[3]) {
    vmScope[0][3]["method"] = "next";
    // POP "next"
    vmScope[0][3]["arg"] = vmScope[0][0][2];
  }
  // POP (vmScope[3] && vmScope[0][0][2])
  return (!(!vmScope[3]));
}

function vm_fn_248__abrupt2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(248, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(248, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[4] = (vmThis.tryEntries.length - 1);
  // L11:
  if ((vmScope[4] >= 0)) {
    vmScope[5] = vmThis.tryEntries[vmScope[4]];
    // incoming keep-false from pc=38
    // incoming keep-false from pc=53
    if ((((vmScope[5].tryLoc <= vmThis.prev) && vmScope[0][5].call(vmScope[5], "finallyLoc")) && (vmThis.prev < vmScope[5].finallyLoc))) {
      vmScope[6] = vmScope[5];
    } else {
      // block boundary after jump @pc=72
      // incoming false-branch from pc=64
      --vmScope[4];
      /* goto L11; */
    }
  }
  // L81:
  // L81:
  // block boundary after jump @pc=79
  // incoming false-branch from pc=17
  // incoming from pc=72
  if (vmScope[6]) {
    if (("break" === vmScope[2])) { /* goto L100; */ } // keep-top
  }
  // L100:
  // L100:
  // incoming keep-false from pc=84
  // incoming keep-true from pc=92
  // incoming keep-false from pc=100
  // incoming keep-false from pc=111
  if (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc))) {
    vmScope[6] = null;
  }
  // incoming keep-false from pc=122
  // POP (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc)) && null)
  if (vmScope[6]) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=133
  }
  // incoming from pc=140
  // PHI@pc=143 slot=0: vmScope[6].completion | {}
  vmScope[7] = vmScope[6].completion;
  vmScope[7]["type"] = vmScope[2];
  // POP vmScope[2]
  vmScope[7]["arg"] = vmScope[3];
  // POP vmScope[3]
  if (vmScope[6]) {
    vmThis["method"] = "next";
    // POP "next"
    vmThis["next"] = vmScope[6].finallyLoc;
    // POP vmScope[6].finallyLoc
  } else {
    // block boundary after jump @pc=191
    // incoming false-branch from pc=169
  }
  // incoming from pc=191
  // PHI@pc=202 slot=0: vmScope[0][18] | vmThis.complete(vmScope[7])
  return vmScope[0][18];
}

function vm_fn_249__complete2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(249, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  // block boundary after throw @pc=15
  // incoming false-branch from pc=8
  // incoming keep-true from pc=24
  if ((("break" === vmScope[2].type) || ("continue" === vmScope[2].type))) {
    vmThis["next"] = vmScope[2].arg;
    /* goto L108; */
  }
  // block boundary after jump @pc=45
  // incoming false-branch from pc=34
  if (("return" === vmScope[2].type)) {
    vmThis["arg"] = vmScope[2].arg;
    vmThis["rval"] = vmScope[2].arg;
    // POP vmScope[2].arg
    vmThis["method"] = "return";
    // POP "return"
    vmThis["next"] = "end";
    /* goto L108; */
  }
  // block boundary after jump @pc=84
  // incoming false-branch from pc=55
  // incoming keep-false from pc=94
  if ((("normal" === vmScope[2].type) && vmScope[3])) {
    vmThis["next"] = vmScope[3];
  }
  // L108:
  // L108:
  // incoming from pc=45
  // incoming from pc=84
  // incoming keep-false from pc=99
  // POP vmScope[3]
  return vmScope[0][18];
}

function vm_fn_250__finishFinallyEntry2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(250, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(250, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  while ((vmScope[3] >= 0)) {
    vmScope[4] = vmThis.tryEntries[vmScope[3]];
    if ((vmScope[4].finallyLoc === vmScope[2])) {
      vmThis.complete(vmScope[4].completion, vmScope[4].afterLoc);
      vmScope[0][31](vmScope[4]);
      return vmScope[0][18];
    }
    // block boundary after return @pc=70
    // incoming false-branch from pc=38
    --vmScope[3];
  }
  // L78:
  // block boundary after jump @pc=76
  // incoming false-branch from pc=17
  return undefined;
}

function vm_fn_251__catchTryEntry2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(251, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  // L11:
  if (!((vmScope[3] >= 0))) { /* goto L87; */ }
  vmScope[4] = vmThis.tryEntries[vmScope[3]];
  if ((vmScope[4].tryLoc === vmScope[2])) {
    vmScope[5] = vmScope[4].completion;
    if (("throw" === vmScope[5].type)) {
      vmScope[6] = vmScope[5].arg;
      vmScope[0][31](vmScope[4]);
    }
    // incoming false-branch from pc=56
    return vmScope[6];
  }
  // L80:
  // block boundary after return @pc=79
  // incoming false-branch from pc=38
  --vmScope[3];
  /* goto L11; */
  // L87:
  // block boundary after jump @pc=85
  // incoming false-branch from pc=17
  throw Error("illegal catch attempt");
  // block boundary after throw @pc=94
  return undefined;
}

function vm_fn_252__delegateYield2(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(252, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(252, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(252, "vmScope[0][33]", 1, 33, vmScope[0][33]);
  vmThis["delegate"] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true })
  if (("next" === vmThis.method)) {
    vmThis["arg"] = vmScope[0][2];
  }
  // POP (("next" === vmThis.method) && vmScope[0][2])
  return vmScope[0][18];
}

function vm_fn_253__ownKeys(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[4] = Object.keys(vmScope[2]);
  if (Object.getOwnPropertySymbols) {
    vmScope[5] = Object.getOwnPropertySymbols(vmScope[2]);
    if (vmScope[3]) {
      vmScope[5] = vmScope[5].filter(createChild(vm_fn_254__isEnumerableProperty, vmScope));
    }
    // incoming keep-false from pc=35
    (vmScope[3] && vmScope[5].filter(createChild(vm_fn_254__isEnumerableProperty, vmScope)));
    vmScope[4].push.apply(vmScope[4], vmScope[5]);
  }
  // L69:
  // incoming false-branch from pc=17
  return vmScope[4];
}

function vm_fn_254__isEnumerableProperty(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(254, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return Object.getOwnPropertyDescriptor(vmScope[0][2], vmScope[2]).enumerable;
}

function vm_fn_255__objectSpread2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(255, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[3] = 1;
  // L5:
  if (!((vmScope[3] < vmScope[1].length))) { /* goto L131; */ }
  if ((null != vmScope[1][vmScope[3]])) {

  } else {
    // block boundary after jump @pc=34
    // incoming false-branch from pc=25
  }
  // incoming from pc=34
  // PHI@pc=37 slot=0: vmScope[1][vmScope[3]] | {}
  vmScope[4] = vmScope[1][vmScope[3]];
  if ((vmScope[3] % 2)) {
    /* goto L123; */
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=46
  if (Object.getOwnPropertyDescriptors) {

  } else {
    // block boundary after jump @pc=100
    // incoming false-branch from pc=78
  }
  // L123:
  // L123:
  // incoming from pc=72
  // incoming from pc=100
  // PHI@pc=123 slot=0: vmScope[0][4](Object(vmScope[4]), (!0)).forEach(createChild(vm_fn_256__copyPropertyValue, vmScope)) | Object.defineProperties(vmScope[2], Object.getOwnPropertyDescriptors(vmScope[4])) | vmScope[0][4](Object(vmScope[4])).forEach(createChild(vm_fn_257__copyPropertyDescriptor, vmScope))
  vmScope[0][4](Object(vmScope[4]), (!0)).forEach(createChild(vm_fn_256__copyPropertyValue, vmScope));
  vmScope[3]++;
  /* goto L5; */
  // L131:
  // block boundary after jump @pc=129
  // incoming false-branch from pc=14
  return vmScope[2];
}

function vm_fn_256__copyPropertyValue(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(256, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(256, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(256, "vmScope[0][0][6]", 2, 6, vmScope[0][0][6]);
  vmScope[0][0][6](vmScope[0][2], vmScope[2], vmScope[0][4][vmScope[2]]);
  return undefined;
}

function vm_fn_257__copyPropertyDescriptor(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(257, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(257, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  Object.defineProperty(vmScope[0][2], vmScope[2], Object.getOwnPropertyDescriptor(vmScope[0][4], vmScope[2]));
  return undefined;
}

function vm_fn_258__defineEnumerableProperty2(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(258, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[3] = vmScope[0][7](vmScope[3]);
  if ((vmScope[0][7](vmScope[3]) in vmScope[2])) {

  } else {
    vmScope[2][vmScope[3]] = vmScope[4];
  }
  // PHI@pc=65 slot=0: Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true })) | vmScope[4]
  vmScope[4];
  return vmScope[2];
}

function vm_fn_259__toPropertyKey3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(259, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(259, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[3] = vmScope[0][8](vmScope[2], "string");
  if (("symbol" == vmScope[0][2](vmScope[3]))) {

  }
  // PHI@pc=39 slot=0: vmScope[3] | (vmScope[3] + "")
  return vmScope[3];
}

function vm_fn_260__toPrimitive3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(260, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  // incoming keep-true from pc=12
  if ((("object" != vmScope[0][2](vmScope[2])) || (!vmScope[2]))) {
    return vmScope[2];
  }
  // block boundary after return @pc=23
  // incoming false-branch from pc=18
  vmScope[4] = vmScope[2][Symbol.toPrimitive];
  if ((undefined !== vmScope[4])) {
    // incoming keep-true from pc=56
    vmScope[5] = vmScope[4].call(vmScope[2], (vmScope[3] || "default"));
    if (("object" != vmScope[0][2](vmScope[5]))) {
      return vmScope[5];
    }
    // block boundary after return @pc=82
    // incoming false-branch from pc=77
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  // L90:
  // block boundary after throw @pc=89
  // incoming false-branch from pc=42
  if (("string" === vmScope[3])) {

  } else {
    // block boundary after jump @pc=101
    // incoming false-branch from pc=97
  }
  // incoming from pc=101
  return String(vmScope[2]);
}

function vm_fn_261__asyncGeneratorStep2(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 7, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_7 = arg5;
  const scope_0_8 = arg6;
  try {
    vmScope[9] = vmScope[2][vmScope[7]].call(vmScope[2], vmScope[8]);
    vmScope[10] = vmScope[9].value;
    if (vmScope[9].done) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=45
    }
  } catch (__vm_caught_exception) {
    vmScope[11] = __vm_caught_exception;
    return undefined;
  }
  // incoming from pc=56
  // PHI@pc=79 slot=0: vmScope[3](vmScope[10]) | Promise.resolve(vmScope[10]).then(vmScope[5], vmScope[6])
  vmScope[3](vmScope[10]);
  return undefined;
}

function vm_fn_262__asyncToGenerator2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  return createChild(vm_fn_263__asyncToGeneratorWrapper2, vmScope);
}

function vm_fn_263__asyncToGeneratorWrapper2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = vmThis;
  vmScope[3] = vmScope[1];
  return new Promise(createChild(vm_fn_264__runAsyncToGeneratorExecutor2, vmScope));
}

function vm_fn_264__runAsyncToGeneratorExecutor2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(264, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(264, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(264, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = createChild(vm_fn_265__asyncToGeneratorNext2, vmScope);
  vmScope[6] = createChild(vm_fn_266__asyncToGeneratorThrow2, vmScope);
  vmScope[4] = vmScope[0][0][2].apply(vmScope[0][2], vmScope[0][3]);
  vmScope[5](undefined);
  return undefined;
}

function vm_fn_265__asyncToGeneratorNext2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_265__asyncToGeneratorNext2 = vmScope[0][5];
  const vm_fn_266__asyncToGeneratorThrow2 = vmScope[0][6];
  __vmReportCapturedBinding(265, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(265, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(265, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(265, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(265, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(265, "vmScope[0][0][0][0][9]", 4, 9, vmScope[0][0][0][0][9]);
  vmScope[0][0][0][0][9](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_265__asyncToGeneratorNext2, vm_fn_266__asyncToGeneratorThrow2, "next", vmScope[2]);
  return undefined;
}

function vm_fn_266__asyncToGeneratorThrow2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_265__asyncToGeneratorNext2 = vmScope[0][5];
  const vm_fn_266__asyncToGeneratorThrow2 = vmScope[0][6];
  __vmReportCapturedBinding(266, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(266, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(266, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(266, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(266, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(266, "vmScope[0][0][0][0][9]", 4, 9, vmScope[0][0][0][0][9]);
  vmScope[0][0][0][0][9](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_265__asyncToGeneratorNext2, vm_fn_266__asyncToGeneratorThrow2, "throw", vmScope[2]);
  return undefined;
}

function vm_fn_267__invokeNwidCollectorAsync2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(267, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  return vmScope[0][11].apply(vmThis, vmScope[1]);
}

function vm_fn_268__invokeNwidCollectorAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_204 = vmScope[0][3];
  __vmReportCapturedBinding(268, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(268, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(268, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  vmScope[2] = createChild(vm_fn_269__createNwidCollectorGenerator, vmScope);
  vmScope[0][11] = vmScope[0][10](captured_vm_fn_204().mark(createChild(vm_fn_269__createNwidCollectorGenerator, vmScope)));
  return vmScope[0][11].apply(vmThis, vmScope[1]);
}

function vm_fn_269__createNwidCollectorGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_269__createNwidCollectorGenerator = vmScope[0][2];
  const captured_vm_fn_204 = vmScope[0][0][3];
  __vmReportCapturedBinding(269, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(269, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  vmScope[6] = vmScope[1];
  vmScope[7] = createChild(vm_fn_270__collectNwidPayload, vmScope);
  return captured_vm_fn_204().wrap(createChild(vm_fn_270__collectNwidPayload, vmScope), vm_fn_269__createNwidCollectorGenerator, null, [[3, 25]]);
}

function vm_fn_270__collectNwidPayload(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_269__createNwidCollectorGenerator = vmScope[0][6];
  __vmReportCapturedBinding(270, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(270, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(270, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(270, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(270, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][0]", 4, 0, vmScope[0][0][0][0][0]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][1]", 4, 1, vmScope[0][0][0][0][1]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][2]", 4, 2, vmScope[0][0][0][0][2]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][4]", 4, 4, vmScope[0][0][0][0][4]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][7]", 4, 7, vmScope[0][0][0][0][7]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][8]", 4, 8, vmScope[0][0][0][0][8]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][10]", 4, 10, vmScope[0][0][0][0][10]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][13]", 4, 13, vmScope[0][0][0][0][13]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][14]", 4, 14, vmScope[0][0][0][0][14]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][15]", 4, 15, vmScope[0][0][0][0][15]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][16]", 4, 16, vmScope[0][0][0][0][16]);
  __vmReportCapturedBinding(270, "vmScope[0][0][0][0][17]", 4, 17, vmScope[0][0][0][0][17]);
  // L0:
  if (!(1)) { /* goto L482; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 6)) { /* goto L115; */ } // keep-top
    if ((vmScope[2].next === 12)) { /* goto L170; */ } // keep-top
    if ((vmScope[2].next === 16)) { /* goto L205; */ } // keep-top
    if ((vmScope[2].next === 25)) { /* goto L411; */ } // keep-top
    if ((vmScope[2].next === 28)) { /* goto L447; */ } // keep-top
    if ((vmScope[2].next === 29)) { /* goto L471; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L471; */ } // keep-top
    // POP vmScope[2].next
    /* goto L480; */
  }
  // block boundary after jump @pc=48
  // incoming strict-eq branch from pc=17
  // incoming keep-false from pc=58
  if (((vm_fn_269__createNwidCollectorGenerator.length > 0) && (vm_fn_269__createNwidCollectorGenerator["0"] !== undefined))) {

  } else {
    // block boundary after jump @pc=74
    // incoming false-branch from pc=67
  }
  // incoming from pc=74
  // PHI@pc=77 slot=1: vm_fn_269__createNwidCollectorGenerator["0"] | {}
  vmScope[0][2] = vm_fn_269__createNwidCollectorGenerator["0"];
  vmScope[0][3] = performance.now();
  vmScope[0][4] = {};
  vmScope[2].prev = 3;
  vmScope[2].next = 6;
  return vmScope[0][0][0][0][14]();
  // L115:
  // block boundary after return @pc=114
  // incoming strict-eq branch from pc=21
  vmScope[0][5] = vmScope[2].sent;
  vmScope[2].t0 = vmScope[0][0][0][0][10]();
  vmScope[2].t1 = vmScope[0][0][0][0][4]();
  vmScope[2].t2 = vmScope[0][0][0][0][13]();
  vmScope[2].next = 12;
  return vmScope[0][0][0][0][7]();
  // L170:
  // block boundary after return @pc=169
  // incoming strict-eq branch from pc=25
  vmScope[2].t3 = vmScope[2].sent;
  vmScope[2].t4 = vmScope[0][0][0][0][17]();
  vmScope[2].next = 16;
  return vmScope[0][0][0][0][2]();
  // L205:
  // block boundary after return @pc=204
  // incoming strict-eq branch from pc=29
  vmScope[2].t5 = vmScope[2].sent;
  vmScope[2].t6 = vmScope[0][0][0][0][16]();
  vmScope[2].t7 = vmScope[0][0][0][0][8]();
  vmScope[2].t8 = vmScope[0][0][0][0][1]();
  vmScope[2].t9 = vmScope[0][0][0][0][0]();
  vmScope[0][4] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "navigator", { value: vmScope[2].t0, writable: true, configurable: true, enumerable: true }), "canvas", { value: vmScope[2].t1, writable: true, configurable: true, enumerable: true }), "screen", { value: vmScope[2].t2, writable: true, configurable: true, enumerable: true }), "extra", { value: vmScope[2].t3, writable: true, configurable: true, enumerable: true }), "webgl", { value: vmScope[2].t4, writable: true, configurable: true, enumerable: true }), "audio", { value: vmScope[2].t5, writable: true, configurable: true, enumerable: true }), "video", { value: vmScope[2].t6, writable: true, configurable: true, enumerable: true }), "math", { value: vmScope[2].t7, writable: true, configurable: true, enumerable: true }), "envCode", { value: vmScope[2].t8, writable: true, configurable: true, enumerable: true }), "ubCode", { value: vmScope[2].t9, writable: true, configurable: true, enumerable: true }), "ms_accid", { value: "", writable: true, configurable: true, enumerable: true }), "custom", { value: "", writable: true, configurable: true, enumerable: true }), "ms_version", { value: "0.0.0.1", writable: true, configurable: true, enumerable: true });
  vmScope[0][4].custom = JSON.stringify(vmScope[0][0][0][5](Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "version", { value: "0.0.0.1", writable: true, configurable: true, enumerable: true }), "fxgDid", { value: (vmScope[0][5] + ""), writable: true, configurable: true, enumerable: true }), "uuid", { value: vmScope[0][0][0][0][15]("__msuuid__"), writable: true, configurable: true, enumerable: true }), "collectTime", { value: (performance.now() - vmScope[0][3]), writable: true, configurable: true, enumerable: true }), vmScope[0][2]));
  vmScope[2].next = 28;
  /* goto L480; */
  // L411:
  // block boundary after jump @pc=409
  // incoming strict-eq branch from pc=33
  vmScope[2].prev = 25;
  vmScope[2].t10 = vmScope[2].catch(3);
  vmScope[0][4] = Object.defineProperty({}, "extra", { value: Object.defineProperty({}, "err", { value: vmScope[2].t10, writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true });
  return vmScope[2].abrupt("return", Object.defineProperty(Object.defineProperty({}, "nWID", { value: vmScope[0][4], writable: true, configurable: true, enumerable: true }), "wID", { value: Object.defineProperty({}, "msgType", { value: 3, writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true }));
  // L471:
  // block boundary after return @pc=470
  // incoming strict-eq branch from pc=41
  // incoming strict-eq branch from pc=45
  return vmScope[2].stop();
  // L480:
  // block boundary after return @pc=479
  // incoming from pc=48
  // incoming from pc=409
  // STACK_MERGE_CONFLICT @pc=480: heights=0, 1
  /* goto L0; */
  // L482:
  // block boundary after jump @pc=480
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_271__invokeWidCollectorAsync2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(271, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  return vmScope[0][12].apply(vmThis, vmScope[1]);
}

function vm_fn_272__invokeWidCollectorAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(272, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(272, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(272, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  vmScope[2] = createChild(vm_fn_273__createWidCollectorGenerator, vmScope);
  vmScope[0][12] = vmScope[0][10](vmScope[0][3]().mark(createChild(vm_fn_273__createWidCollectorGenerator, vmScope)));
  return vmScope[0][12].apply(vmThis, vmScope[1]);
}

function vm_fn_273__createWidCollectorGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_273__createWidCollectorGenerator = vmScope[0][2];
  __vmReportCapturedBinding(273, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(273, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  vmScope[5] = vmScope[1];
  vmScope[6] = createChild(vm_fn_274__collectWidPayload, vmScope);
  return vmScope[0][0][3]().wrap(createChild(vm_fn_274__collectWidPayload, vmScope), vm_fn_273__createWidCollectorGenerator);
}

function vm_fn_274__collectWidPayload(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(274, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(274, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(274, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(274, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][0]", 4, 0, vmScope[0][0][0][0][0]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][1]", 4, 1, vmScope[0][0][0][0][1]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][3]", 4, 3, vmScope[0][0][0][0][3]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][5]", 4, 5, vmScope[0][0][0][0][5]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][6]", 4, 6, vmScope[0][0][0][0][6]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][9]", 4, 9, vmScope[0][0][0][0][9]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][11]", 4, 11, vmScope[0][0][0][0][11]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][12]", 4, 12, vmScope[0][0][0][0][12]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][17]", 4, 17, vmScope[0][0][0][0][17]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][18]", 4, 18, vmScope[0][0][0][0][18]);
  __vmReportCapturedBinding(274, "vmScope[0][0][0][0][19]", 4, 19, vmScope[0][0][0][0][19]);
  // L0:
  if (!(1)) { /* goto L498; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 4)) { /* goto L113; */ } // keep-top
    if ((vmScope[2].next === 22)) { /* goto L356; */ } // keep-top
    if ((vmScope[2].next === 30)) { /* goto L487; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L487; */ } // keep-top
    // POP vmScope[2].next
    /* goto L496; */
  }
  // block boundary after jump @pc=36
  // incoming strict-eq branch from pc=17
  // incoming keep-false from pc=46
  if (((vmScope[0][5].length > 0) && (vmScope[0][5]["0"] !== undefined))) {

  } else {
    // block boundary after jump @pc=62
    // incoming false-branch from pc=55
  }
  // incoming from pc=62
  // PHI@pc=65 slot=1: vmScope[0][5]["0"] | {}
  vmScope[0][2] = vmScope[0][5]["0"];
  // incoming keep-false from pc=76
  if (((vmScope[0][5].length > 1) && (vmScope[0][5]["1"] !== undefined))) {

  } else {
    // block boundary after jump @pc=92
    // incoming false-branch from pc=85
  }
  // incoming from pc=92
  // PHI@pc=96 slot=1: vmScope[0][5]["1"] | 0
  vmScope[0][3] = vmScope[0][5]["1"];
  vmScope[2].next = 4;
  return vmScope[0][0][0][0][3]();
  // L113:
  // block boundary after return @pc=112
  // incoming strict-eq branch from pc=21
  vmScope[2].t0 = vmScope[2].sent;
  vmScope[2].t1 = vmScope[0][0][0][0][5]();
  vmScope[2].t2 = vmScope[0][0][0][0][9]();
  vmScope[2].t3 = vmScope[0][0][0][0][11]();
  vmScope[2].t4 = vmScope[0][0][0][0][12]();
  vmScope[2].t5 = vmScope[0][0][0][0][17]();
  vmScope[2].t6 = vmScope[0][0][0][0][18]();
  vmScope[2].t7 = vmScope[0][0][0][0][1]();
  vmScope[2].t8 = vmScope[0][0][0][0][0]();
  vmScope[2].t9 = {};
  vmScope[2].t10 = vmScope[0][0][0][0][19]();
  vmScope[0][4] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "battery", { value: vmScope[2].t0, writable: true, configurable: true, enumerable: true }), "document", { value: vmScope[2].t1, writable: true, configurable: true, enumerable: true }), "navigator", { value: vmScope[2].t2, writable: true, configurable: true, enumerable: true }), "plugins", { value: vmScope[2].t3, writable: true, configurable: true, enumerable: true }), "screen", { value: vmScope[2].t4, writable: true, configurable: true, enumerable: true }), "webgl", { value: vmScope[2].t5, writable: true, configurable: true, enumerable: true }), "window", { value: vmScope[2].t6, writable: true, configurable: true, enumerable: true }), "envCode", { value: vmScope[2].t7, writable: true, configurable: true, enumerable: true }), "ubCode", { value: vmScope[2].t8, writable: true, configurable: true, enumerable: true }), "nWID", { value: vmScope[2].t9, writable: true, configurable: true, enumerable: true }), "custom", { value: vmScope[2].t10, writable: true, configurable: true, enumerable: true });
  vmScope[2].t11 = vmScope[0][0][0][5];
  vmScope[2].t12 = vmScope[0][0][0][5];
  vmScope[2].t13 = vmScope[0][0][0][5];
  vmScope[2].t14 = {};
  vmScope[2].next = 22;
  return vmScope[0][0][0][0][6](vmScope[0][3]);
  // L356:
  // block boundary after return @pc=355
  // incoming strict-eq branch from pc=25
  vmScope[2].t15 = vmScope[2].sent;
  // POP 0
  vmScope[2].t16 = vmScope[2].t13(vmScope[2].t14, vmScope[2].t15);
  vmScope[2].t17 = vmScope[0][2];
  // POP 0
  vmScope[2].t18 = vmScope[2].t12(vmScope[2].t16, vmScope[2].t17);
  vmScope[2].t19 = {};
  vmScope[2].t20 = Object.defineProperty({}, "msgType", { value: 1, writable: true, configurable: true, enumerable: true });
  // POP 0
  vmScope[0][4].wID = vmScope[2].t11(vmScope[2].t18, vmScope[2].t19, vmScope[2].t20);
  return vmScope[2].abrupt("return", vmScope[0][4]);
  // L487:
  // block boundary after return @pc=486
  // incoming strict-eq branch from pc=29
  // incoming strict-eq branch from pc=33
  return vmScope[2].stop();
  // L496:
  // block boundary after return @pc=495
  // incoming from pc=36
  /* goto L0; */
  // L498:
  // block boundary after jump @pc=496
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_275__installRc4Transforms(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_276__transformWithRc4, vmScope);
  vmScope[0][1] = createChild(vm_fn_277__transformWithRc4Variant, vmScope);
  return undefined;
}

function vm_fn_276__transformWithRc4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[4] = [];
  vmScope[5] = 0;
  vmScope[7] = "";
  vmScope[8] = 0;
  while ((vmScope[8] < 256)) {
    vmScope[4][vmScope[8]] = vmScope[8];
    vmScope[8]++;
  }
  // block boundary after jump @pc=43
  // incoming false-branch from pc=26
  vmScope[9] = 0;
  while ((vmScope[9] < 256)) {
    vmScope[5] = (((vmScope[5] + vmScope[4][vmScope[9]]) + vmScope[2].charCodeAt((vmScope[9] % vmScope[2].length))) % 256);
    vmScope[6] = vmScope[4][vmScope[9]];
    vmScope[4][vmScope[9]] = vmScope[4][vmScope[5]];
    vmScope[4][vmScope[5]] = vmScope[6];
    vmScope[9]++;
  }
  // block boundary after jump @pc=132
  // incoming false-branch from pc=56
  vmScope[10] = 0;
  vmScope[5] = 0;
  vmScope[11] = 0;
  while ((vmScope[11] < vmScope[3].length)) {
    vmScope[10] = ((vmScope[10] + 1) % 256);
    vmScope[5] = ((vmScope[5] + vmScope[4][vmScope[10]]) % 256);
    vmScope[6] = vmScope[4][vmScope[10]];
    vmScope[4][vmScope[10]] = vmScope[4][vmScope[5]];
    vmScope[4][vmScope[5]] = vmScope[6];
    vmScope[7] = (vmScope[7] + String.fromCharCode((vmScope[3].charCodeAt(vmScope[11]) ^ vmScope[4][((vmScope[4][vmScope[10]] + vmScope[4][vmScope[5]]) % 256)])));
    (vmScope[7] + String.fromCharCode((vmScope[3].charCodeAt(vmScope[11]) ^ vmScope[4][((vmScope[4][vmScope[10]] + vmScope[4][vmScope[5]]) % 256)])));
    vmScope[11]++;
  }
  // block boundary after jump @pc=278
  // incoming false-branch from pc=158
  return vmScope[7];
}

function vm_fn_277__transformWithRc4Variant(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[4] = [];
  vmScope[5] = 0;
  vmScope[7] = "";
  vmScope[8] = 0;
  while ((vmScope[8] < 256)) {
    vmScope[4][(255 - vmScope[8])] = vmScope[8];
    vmScope[8]++;
  }
  // block boundary after jump @pc=46
  // incoming false-branch from pc=26
  vmScope[9] = 0;
  while ((vmScope[9] < 256)) {
    vmScope[5] = ((((vmScope[5] * vmScope[4][vmScope[9]]) + vmScope[5]) + vmScope[2].charCodeAt((vmScope[9] % vmScope[2].length))) % 256);
    vmScope[6] = vmScope[4][vmScope[9]];
    vmScope[4][vmScope[9]] = vmScope[4][vmScope[5]];
    vmScope[4][vmScope[5]] = vmScope[6];
    vmScope[9]++;
  }
  // block boundary after jump @pc=139
  // incoming false-branch from pc=59
  vmScope[10] = 0;
  vmScope[5] = 0;
  vmScope[11] = 0;
  while ((vmScope[11] < vmScope[3].length)) {
    vmScope[10] = ((vmScope[10] + 1) % 256);
    vmScope[5] = ((vmScope[5] + vmScope[4][vmScope[10]]) % 256);
    vmScope[6] = vmScope[4][vmScope[10]];
    vmScope[4][vmScope[10]] = vmScope[4][vmScope[5]];
    vmScope[4][vmScope[5]] = vmScope[6];
    vmScope[7] = (vmScope[7] + String.fromCharCode((vmScope[3].charCodeAt(vmScope[11]) ^ vmScope[4][((vmScope[4][vmScope[10]] + vmScope[4][vmScope[5]]) % 256)])));
    (vmScope[7] + String.fromCharCode((vmScope[3].charCodeAt(vmScope[11]) ^ vmScope[4][((vmScope[4][vmScope[10]] + vmScope[4][vmScope[5]]) % 256)])));
    vmScope[11]++;
  }
  // block boundary after jump @pc=285
  // incoming false-branch from pc=165
  return vmScope[7];
}

function vm_fn_278__initializeBehaviorAnalyzer(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[9] = createChild(vm_fn_279__computeStdDev, vmScope);
  vmScope[10] = createChild(vm_fn_283__computeAverage, vmScope);
  vmScope[11] = createChild(vm_fn_284__computeBehaviorRateStats, vmScope);
  vmScope[0][0] = createChild(vm_fn_285__computeUbCode, vmScope);
  vmScope[2] = {};
  vmScope[2].kNoMove = (1 << 1);
  vmScope[2].kNoClickTouch = (1 << 2);
  vmScope[2].kNoKeyboardEvent = (1 << 3);
  vmScope[2].kMoveFast = (1 << 4);
  vmScope[2].kKeyboardFast = (1 << 5);
  vmScope[2].kFakeOperations = (1 << 6);
  vmScope[3] = [];
  vmScope[4] = [];
  vmScope[5] = [];
  vmScope[0][1] = Object.defineProperty({}, "ubcode", { value: 0, writable: true, configurable: true, enumerable: true });
  vmScope[6] = false;
  vmScope[12] = createChild(vm_fn_281__square, vmScope);
  vmScope[7] = createChild(vm_fn_281__square, vmScope);
  vmScope[13] = createChild(vm_fn_282__sum, vmScope);
  vmScope[8] = createChild(vm_fn_282__sum, vmScope);
  return undefined;
}

function vm_fn_279__computeStdDev(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(279, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(279, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(279, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  if ((vmScope[2].length <= 1)) {
    return 0;
  }
  vmScope[3] = vmScope[0][10](vmScope[2]);
  vmScope[4] = vmScope[2].map(createChild(vm_fn_280__subtractMean, vmScope));
  return Math.sqrt((vmScope[4].map(vmScope[0][7]).reduce(vmScope[0][8]) / (vmScope[2].length - 1)));
}

function vm_fn_280__subtractMean(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(280, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return (vmScope[2] - vmScope[0][3]);
}

function vm_fn_281__square(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return (vmScope[2] * vmScope[2]);
}

function vm_fn_282__sum(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  return (vmScope[2] + vmScope[3]);
}

function vm_fn_283__computeAverage(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(283, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  return (vmScope[2].reduce(vmScope[0][8]) / vmScope[2].length);
}

function vm_fn_284__computeBehaviorRateStats(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(284, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(284, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  __vmReportCapturedBinding(284, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  vmScope[5] = 0;
  vmScope[6] = 0;
  if (!((vmScope[2].length > vmScope[3]))) { /* goto L208; */ }
  vmScope[7] = [];
  vmScope[8] = 0;
  while ((vmScope[8] < (vmScope[2].length - 1))) {
    vmScope[9] = vmScope[2][(vmScope[8] + 1)];
    vmScope[10] = vmScope[2][vmScope[8]];
    vmScope[11] = (vmScope[9].d - vmScope[10].d);
    if (vmScope[11]) {
      if (vmScope[4]) {
        vmScope[7].push((1 / vmScope[11]));
      } else {
        // block boundary after jump @pc=107
        // incoming false-branch from pc=90
        vmScope[7].push((Math.sqrt((vmScope[0][7]((vmScope[9].x - vmScope[10].x)) + vmScope[0][7]((vmScope[9].y - vmScope[10].y)))) / vmScope[11]));
      }
    }
    // incoming false-branch from pc=85
    // incoming from pc=107
    vmScope[8]++;
  }
  // L171:
  // block boundary after jump @pc=169
  // incoming false-branch from pc=43
  vmScope[5] = vmScope[0][10](vmScope[7]);
  vmScope[6] = vmScope[0][9](vmScope[7]);
  if ((vmScope[6] === 0)) {
    vmScope[6] = "0.01";
  }
  // L208:
  // L208:
  // incoming false-branch from pc=19
  // incoming false-branch from pc=201
  return [vmScope[5], vmScope[6]];
}

function vm_fn_285__computeUbCode(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(285, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(285, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(285, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(285, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(285, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(285, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(285, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  try {
    vmScope[2] = false;
    vmScope[3] = 0;
    // incoming keep-false from pc=11
    if ((document && document.createEvent)) {
      document.createEvent("TouchEvent");
      vmScope[2] = true;
    }
    // incoming false-branch from pc=17
    vmScope[4] = vmScope[0][11](vmScope[0][3], 1);
  } catch (__vm_caught_exception) {
    vmScope[8] = __vm_caught_exception;
  }
  vmScope[5] = vmScope[0][11](vmScope[0][5], 5, true);
  vmScope[6] = 1;
  // incoming keep-false from pc=76
  if (((!vmScope[2]) && vmScope[0][6])) {
    vmScope[6] = (vmScope[6] | 64);
    // POP (vmScope[6] | 64)
    vmScope[3] = (vmScope[3] | vmScope[0][2].kFakeOperations);
    // POP (vmScope[3] | vmScope[0][2].kFakeOperations)
  }
  // incoming false-branch from pc=81
  if ((vmScope[0][3].length === 0)) {
    vmScope[6] = (vmScope[6] | 2);
    // POP (vmScope[6] | 2)
    vmScope[3] = (vmScope[3] | vmScope[0][2].kNoMove);
    // POP (vmScope[3] | vmScope[0][2].kNoMove)
  } else {
    // block boundary after jump @pc=143
    // incoming false-branch from pc=116
    if (!((vmScope[4]["0"] > 50))) { /* goto L180; */ }
    vmScope[6] = (vmScope[6] | 16);
    // POP (vmScope[6] | 16)
    vmScope[3] = (vmScope[3] | vmScope[0][2].kMoveFast);
    // POP (vmScope[3] | vmScope[0][2].kMoveFast)
  }
  // L180:
  // L180:
  // incoming from pc=143
  // incoming false-branch from pc=153
  if ((vmScope[0][4].length === 0)) {
    vmScope[6] = (vmScope[6] | 4);
    // POP (vmScope[6] | 4)
    vmScope[3] = (vmScope[3] | vmScope[0][2].kNoClickTouch);
    // POP (vmScope[3] | vmScope[0][2].kNoClickTouch)
  }
  // incoming false-branch from pc=188
  if ((vmScope[0][5].length === 0)) {
    vmScope[6] = (vmScope[6] | 8);
    // POP (vmScope[6] | 8)
    vmScope[3] = (vmScope[3] | vmScope[0][2].kNoKeyboardEvent);
    // POP (vmScope[3] | vmScope[0][2].kNoKeyboardEvent)
  } else {
    // block boundary after jump @pc=250
    // incoming false-branch from pc=223
    if (!((vmScope[5]["0"] > "0.5"))) { /* goto L287; */ }
    vmScope[6] = (vmScope[6] | 32);
    // POP (vmScope[6] | 32)
    vmScope[3] = (vmScope[3] | vmScope[0][2].kKeyboardFast);
    // POP (vmScope[3] | vmScope[0][2].kKeyboardFast)
  }
  // L287:
  // L287:
  // incoming from pc=250
  // incoming false-branch from pc=260
  vmScope[0][0][1].ubcode = vmScope[3];
  vmScope[7] = vmScope[6].toString(32);
  if ((vmScope[7].length === 1)) {
    vmScope[7] = ("00" + vmScope[7]);
  } else {
    // block boundary after jump @pc=327
    // incoming false-branch from pc=316
    if (!((vmScope[7].length === 2))) { /* goto L348; */ }
    vmScope[7] = ("0" + vmScope[7]);
  }
  // L348:
  // L348:
  // incoming from pc=327
  // incoming false-branch from pc=337
  return vmScope[7];
}

function vm_fn_286__createBrowserDetector(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[3] = createChild(vm_fn_287__createForOfIteratorHelper4, vmScope);
  vmScope[4] = createChild(vm_fn_295__unsupportedIterableToArray3, vmScope);
  vmScope[5] = createChild(vm_fn_296__arrayLikeToArray3, vmScope);
  vmScope[0][0] = createChild(vm_fn_297__detectBrowserProfile, vmScope);
  vmScope[2] = [Object.defineProperty(Object.defineProperty({}, "name", { value: "Huawei", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("(huawei)browser\\/([\\w.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Chrome", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("(chrome)\\/v?([\\w.]+)", "i"), new RegExp("\\b(?:crmo|crios)\\/([\\w.]+)", "i"), new RegExp("headlesschrome(?:\\/([\\w.]+)| )", "i"), new RegExp(" wv\\).+(chrome)\\/([\\w.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Edge", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("edg(?:e|ios|a)?\\/([\\w.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Firefox", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("\\bfocus\\/([\\w.]+)", "i"), new RegExp("fxios\\/([-\\w.]+)", "i"), new RegExp("mobile vr; rv:([\\w.]+)\\).+firefox", "i"), new RegExp("(firefox)\\/([\\w.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "IE", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("(?:ms|\\()(ie) ([\\w.]+)", "i"), new RegExp("trident.+rv[: ]([\\w.]{1,9})\\b.+like gecko", "i"), new RegExp("(iemobile)(?:browser)?[/ ]?([\\w.]*)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Opera", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("(opera mini)\\/([-\\w.]+)", "i"), new RegExp("(opera [mobiletab]{3,6})\\b.+version\\/([-\\w.]+)", "i"), new RegExp("(opera)(?:.+version\\/|[/ ]+)([\\w.]+)", "i"), new RegExp("opios[/ ]+([\\w.]+)", "i"), new RegExp("\\bopr\\/([\\w.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Safari", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("version\\/([\\w.,]+) .*mobile\\/\\w+ (safari)", "i"), new RegExp("version\\/([\\w(.|,)]+) .*(mobile ?safari|safari)", "i")], writable: true, configurable: true, enumerable: true })];
  return undefined;
}

function vm_fn_287__createForOfIteratorHelper4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(287, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  // incoming keep-false from pc=5
  // incoming keep-true from pc=15
  vmScope[4] = ((("undefined" != typeof Symbol) && vmScope[2][Symbol.iterator]) || vmScope[2]["@@iterator"]);
  if (!((!vmScope[4]))) { /* goto L141; */ }
  if ((!Array.isArray(vmScope[2]))) {
    vmScope[4] = vmScope[0][4](vmScope[2]);
  }
  // incoming keep-true from pc=41
  if ((!(Array.isArray(vmScope[2]) || vmScope[0][4](vmScope[2])))) {
    // incoming keep-false from pc=61
  }
  // L77:
  // incoming keep-true from pc=56
  // incoming keep-false from pc=66
  if ((Array.isArray(vmScope[2]) || vmScope[0][4](vmScope[2]))) {
    if (vmScope[4]) {
      vmScope[2] = vmScope[4];
    }
    // incoming keep-false from pc=82
    // POP vmScope[4]
    vmScope[5] = 0;
    vmScope[10] = createChild(vm_fn_288, vmScope);
    vmScope[6] = createChild(vm_fn_288, vmScope);
    vmScope[11] = createChild(vm_fn_289__nextArrayIteratorValue, vmScope);
    vmScope[12] = createChild(vm_fn_290__throwIteratorError, vmScope);
    return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: vmScope[6], writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_289__nextArrayIteratorValue, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_290__throwIteratorError, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: vmScope[6], writable: true, configurable: true, enumerable: true });
  }
  // L134:
  // block boundary after return @pc=133
  // incoming false-branch from pc=77
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  // L141:
  // block boundary after throw @pc=140
  // incoming false-branch from pc=29
  vmScope[8] = (!0);
  vmScope[9] = (!1);
  vmScope[13] = createChild(vm_fn_291__startIterableIterator, vmScope);
  vmScope[14] = createChild(vm_fn_292__nextIterableIteratorValue4, vmScope);
  vmScope[15] = createChild(vm_fn_293__captureIteratorError4, vmScope);
  vmScope[16] = createChild(vm_fn_294, vmScope);
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: createChild(vm_fn_291__startIterableIterator, vmScope), writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_292__nextIterableIteratorValue4, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_293__captureIteratorError4, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: createChild(vm_fn_294, vmScope), writable: true, configurable: true, enumerable: true });
}

function vm_fn_288(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_289__nextArrayIteratorValue(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(289, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(289, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if ((vmScope[0][5] >= vmScope[0][2].length)) {

  }
  // PHI@pc=35 slot=0: Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true }) | Object.defineProperty(Object.defineProperty({}, "done", { value: (!1), writable: true, configurable: true, enumerable: true }), "value", { value: vmScope[0][2][vmScope[0][5]++], writable: true, configurable: true, enumerable: true })
  return Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true });
}

function vm_fn_290__throwIteratorError(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  throw vmScope[2];
  return undefined;
}

function vm_fn_291__startIterableIterator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(291, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(291, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[0][4] = vmScope[0][4].call(vmScope[0][2]);
  return undefined;
}

function vm_fn_292__nextIterableIteratorValue4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(292, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(292, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[2] = vmScope[0][4].next();
  vmScope[0][8] = vmScope[2].done;
  // POP vmScope[2].done
  return vmScope[2];
}

function vm_fn_293__captureIteratorError4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(293, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(293, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  vmScope[0][9] = (!0);
  // POP (!0)
  vmScope[0][7] = vmScope[2];
  // POP vmScope[2]
  return undefined;
}

function vm_fn_294(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(294, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(294, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(294, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(294, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  try {
    // incoming keep-true from pc=3
    // incoming keep-true from pc=12
    ((vmScope[0][8] || (null == vmScope[0][4].return)) || vmScope[0][4].return());
    // incoming control-jump from pc=23
  } finally {
    if (vmScope[0][9]) {
      throw vmScope[0][7];
    }
    // block boundary after throw @pc=33
  }
  return undefined;
}

function vm_fn_295__unsupportedIterableToArray3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(295, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][5](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][5](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_296__arrayLikeToArray3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_297__detectBrowserProfile(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  __vmReportCapturedBinding(297, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(297, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[7] = createChild(vm_fn_298__isHuawei, vmScope);
  vmScope[8] = createChild(vm_fn_299__isOpera, vmScope);
  vmScope[9] = createChild(vm_fn_300__isFirefox, vmScope);
  vmScope[10] = createChild(vm_fn_301__isEdge, vmScope);
  vmScope[11] = createChild(vm_fn_302__isIE, vmScope);
  vmScope[12] = createChild(vm_fn_303__isChrome, vmScope);
  vmScope[13] = createChild(vm_fn_304__isSafari, vmScope);
  vmScope[14] = createChild(vm_fn_305__isOther, vmScope);
  vmScope[3] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "name", { value: "Other", writable: true, configurable: true, enumerable: true }), "isHuawei", { value: createChild(vm_fn_298__isHuawei, vmScope), writable: true, configurable: true, enumerable: true }), "isOpera", { value: createChild(vm_fn_299__isOpera, vmScope), writable: true, configurable: true, enumerable: true }), "isFirefox", { value: createChild(vm_fn_300__isFirefox, vmScope), writable: true, configurable: true, enumerable: true }), "isEdge", { value: createChild(vm_fn_301__isEdge, vmScope), writable: true, configurable: true, enumerable: true }), "isIE", { value: createChild(vm_fn_302__isIE, vmScope), writable: true, configurable: true, enumerable: true }), "isChrome", { value: createChild(vm_fn_303__isChrome, vmScope), writable: true, configurable: true, enumerable: true }), "isSafari", { value: createChild(vm_fn_304__isSafari, vmScope), writable: true, configurable: true, enumerable: true }), "isOther", { value: createChild(vm_fn_305__isOther, vmScope), writable: true, configurable: true, enumerable: true });
  vmScope[4] = vmScope[0][3](vmScope[0][2]);
  vmScope[4].s();
  // L93:
  try {
    vmScope[5] = vmScope[4].n();
    if ((!vmScope[4].n().done)) {
      vmScope[6] = vmScope[5].value;
      if (vmScope[6].regs.some(createChild(vm_fn_306__matchesCurrentPattern4, vmScope))) {
        vmScope[3].name = vmScope[6].name;
      } else {
        // block boundary after jump @pc=142
        // incoming false-branch from pc=130
        /* goto L93; */
      }
    }
    // block boundary after jump @pc=144
    // incoming false-branch from pc=108
    // incoming from pc=142
    // incoming control-jump from pc=146
  } catch (__vm_caught_exception) {
    vmScope[15] = __vm_caught_exception;
    vmScope[4].e(vmScope[15]);
  } finally {
    vmScope[4].f();
  }
  return vmScope[3];
}

function vm_fn_298__isHuawei(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Huawei");
}

function vm_fn_299__isOpera(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Opera");
}

function vm_fn_300__isFirefox(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Firefox");
}

function vm_fn_301__isEdge(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Edge");
}

function vm_fn_302__isIE(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "IE");
}

function vm_fn_303__isChrome(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Chrome");
}

function vm_fn_304__isSafari(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Safari");
}

function vm_fn_305__isOther(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Other");
}

function vm_fn_306__matchesCurrentPattern4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(306, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[2].test(vmScope[0][2]);
}

function vm_fn_307(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_308__slicedToArray4, vmScope);
  vmScope[3] = createChild(vm_fn_309__nonIterableRest4, vmScope);
  vmScope[4] = createChild(vm_fn_310__unsupportedIterableToArray4, vmScope);
  vmScope[5] = createChild(vm_fn_311__arrayLikeToArray4, vmScope);
  vmScope[6] = createChild(vm_fn_312__iterableToArrayLimit4, vmScope);
  vmScope[7] = createChild(vm_fn_313__arrayWithHoles4, vmScope);
  vmScope[0][8] = createChild(vm_fn_314__collectBrowserCapabilityTuple, vmScope);
  return undefined;
}

function vm_fn_308__slicedToArray4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(308, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(308, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(308, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(308, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  return (((vmScope[0][7](vmScope[2]) || vmScope[0][6](vmScope[2], vmScope[3])) || vmScope[0][4](vmScope[2], vmScope[3])) || vmScope[0][3]());
}

function vm_fn_309__nonIterableRest4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  return undefined;
}

function vm_fn_310__unsupportedIterableToArray4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(310, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][5](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][5](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_311__arrayLikeToArray4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_312__iterableToArrayLimit4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  if ((null == vmScope[2])) {
    /* goto L32; */
  }
  // block boundary after jump @pc=8
  // incoming false-branch from pc=5
  // incoming keep-false from pc=15
  // L32:
  // incoming from pc=8
  // incoming keep-true from pc=25
  // PHI@pc=32 slot=0: null | (("undefined" != typeof Symbol) && vmScope[2][Symbol.iterator]) | vmScope[2]["@@iterator"]
  vmScope[4] = vmScope[2]["@@iterator"];
  if (!((null != vmScope[4]))) { /* goto L254; */ }
  vmScope[9] = [];
  vmScope[10] = (!0);
  vmScope[11] = (!1);
  vmScope[4] = vmScope[4].call(vmScope[2]);
  vmScope[7] = vmScope[4].call(vmScope[2]).next;
  vmScope[4].call(vmScope[2]).next;
  if ((0 === vmScope[3])) {
    if ((Object(vmScope[4]) !== vmScope[4])) {
      return undefined;
    }
    // block boundary after return @pc=104
    // incoming false-branch from pc=101
    vmScope[10] = (!1);
    /* goto L172; */
  }
  // L113:
  // block boundary after jump @pc=111
  // incoming false-branch from pc=87
  vmScope[5] = vmScope[7].call(vmScope[4]);
  vmScope[10] = vmScope[7].call(vmScope[4]).done;
  if ((!vmScope[7].call(vmScope[4]).done)) {
    vmScope[9].push(vmScope[5].value);
  }
  // incoming keep-false from pc=135
  if (((!vmScope[7].call(vmScope[4]).done) && (vmScope[9].length !== vmScope[3]))) {
    vmScope[10] = (!0);
    // POP (!0)
    /* goto L113; */
  }
  // L172:
  // L172:
  try {
    // block boundary after jump @pc=170
    // incoming from pc=111
    // incoming false-branch from pc=160
    // incoming control-jump from pc=172
  } catch (__vm_caught_exception) {
    vmScope[12] = __vm_caught_exception;
    vmScope[11] = (!0);
    // POP (!0)
    vmScope[6] = vmScope[12];
    // POP vmScope[12]
  } finally {
    try {
      // incoming keep-false from pc=197
      if (((!vmScope[10]) && (null != vmScope[4].return))) {
        vmScope[8] = vmScope[4].return();
        vmScope[4].return();
      }
      // incoming keep-false from pc=206
      if ((((!vmScope[10]) && (null != vmScope[4].return)) && (Object(vmScope[8]) !== vmScope[8]))) {
        return undefined;
      }
      // block boundary after return @pc=236
      // incoming false-branch from pc=233
      // incoming control-jump from pc=237
    } finally {
      if (vmScope[11]) {
        throw vmScope[6];
      }
      // block boundary after throw @pc=247
    }
  }
  return vmScope[9];
  // L254:
  // block boundary after return @pc=253
  // incoming false-branch from pc=40
  return undefined;
}

function vm_fn_313__arrayWithHoles4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if (Array.isArray(vmScope[2])) {
    return vmScope[2];
  }
  return undefined;
}

function vm_fn_314__collectBrowserCapabilityTuple(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_308__slicedToArray4 = vmScope[0][2];
  const vm_fn_732__collectStorageQuotaSignature = vmScope[0][0][0];
  const vm_fn_744__hasSuspiciousUrlStackTrace = vmScope[0][0][1];
  const vm_fn_742__detectPrivacyQuotaMode = vmScope[0][0][2];
  const vm_fn_747__hasBrokenDocumentAllBehavior = vmScope[0][0][3];
  const vm_fn_751__detectDevtoolsByViewportGap = vmScope[0][0][4];
  const vm_fn_753__hasEmbeddedBrowserApis = vmScope[0][0][5];
  const vm_fn_755__hasScreenDescriptorAnomalies = vmScope[0][0][6];
  const vm_fn_758__hasWindowFrameMismatch = vmScope[0][0][7];
  __vmReportCapturedBinding(314, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(314, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(314, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  __vmReportCapturedBinding(314, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(314, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(314, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  __vmReportCapturedBinding(314, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(314, "vmScope[0][0][6]", 2, 6, vmScope[0][0][6]);
  __vmReportCapturedBinding(314, "vmScope[0][0][7]", 2, 7, vmScope[0][0][7]);
  vmScope[2] = vm_fn_732__collectStorageQuotaSignature();
  vmScope[3] = vm_fn_308__slicedToArray4(vmScope[2], 4);
  vmScope[4] = vmScope[3]["0"];
  vmScope[5] = vmScope[3]["1"];
  vmScope[6] = vmScope[3]["2"];
  vmScope[7] = vmScope[3]["3"];
  vmScope[8] = vm_fn_747__hasBrokenDocumentAllBehavior();
  vmScope[9] = vm_fn_744__hasSuspiciousUrlStackTrace();
  vmScope[10] = vm_fn_755__hasScreenDescriptorAnomalies();
  vmScope[11] = vm_fn_753__hasEmbeddedBrowserApis();
  vmScope[12] = vm_fn_742__detectPrivacyQuotaMode();
  vmScope[13] = vm_fn_758__hasWindowFrameMismatch();
  vmScope[14] = vm_fn_751__detectDevtoolsByViewportGap();
  vmScope[15] = 1;
  vmScope[15] = (vmScope[15] | ((+vmScope[8]) << 1));
  // POP (vmScope[15] | ((+vmScope[8]) << 1))
  vmScope[15] = (vmScope[15] | ((+vmScope[9]) << 2));
  // POP (vmScope[15] | ((+vmScope[9]) << 2))
  vmScope[15] = (vmScope[15] | ((+vmScope[10]) << 3));
  // POP (vmScope[15] | ((+vmScope[10]) << 3))
  vmScope[15] = (vmScope[15] | ((+vmScope[11]) << 4));
  // POP (vmScope[15] | ((+vmScope[11]) << 4))
  vmScope[15] = (vmScope[15] | ((+vmScope[12]) << 5));
  // POP (vmScope[15] | ((+vmScope[12]) << 5))
  vmScope[15] = (vmScope[15] | ((+vmScope[13]) << 6));
  // POP (vmScope[15] | ((+vmScope[13]) << 6))
  vmScope[15] = (vmScope[15] | ((+vmScope[14]) << 7));
  // POP (vmScope[15] | ((+vmScope[14]) << 7))
  return [vmScope[4], vmScope[5], vmScope[6], vmScope[7], vmScope[15]];
}

function vm_fn_315__installBrowserCapabilityMask(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][7] = createChild(vm_fn_316__computeBrowserCapabilityMask, vmScope);
  return undefined;
}

function vm_fn_316__computeBrowserCapabilityMask(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_761__hasValidBuiltinEnvironmentTags = vmScope[0][0][0];
  const vm_fn_764__hasNativeApiAnomalies = vmScope[0][0][1];
  const vm_fn_766__detectPlatformProfile = vmScope[0][0][2];
  const vm_fn_768__hasLocationAnomalies = vmScope[0][0][3];
  const vm_fn_773__isNodeRuntime2 = vmScope[0][0][4];
  const vm_fn_775__hasPhantomRuntimeSignals = vmScope[0][0][5];
  const vm_fn_787__detectAutomationSignals = vmScope[0][0][6];
  __vmReportCapturedBinding(316, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(316, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  __vmReportCapturedBinding(316, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(316, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(316, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  __vmReportCapturedBinding(316, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(316, "vmScope[0][0][6]", 2, 6, vmScope[0][0][6]);
  vmScope[2] = 1;
  if (vm_fn_761__hasValidBuiltinEnvironmentTags()) {
    vmScope[2] = (vmScope[2] | ((+vm_fn_764__hasNativeApiAnomalies()) << 1));
    (vmScope[2] | ((+vm_fn_764__hasNativeApiAnomalies()) << 1));
    vmScope[2] = (vmScope[2] | ((+vm_fn_787__detectAutomationSignals()) << 2));
    (vmScope[2] | ((+vm_fn_787__detectAutomationSignals()) << 2));
    vmScope[2] = (vmScope[2] | ((+vm_fn_775__hasPhantomRuntimeSignals()) << 3));
    (vmScope[2] | ((+vm_fn_775__hasPhantomRuntimeSignals()) << 3));
    vmScope[2] = (vmScope[2] | ((+vm_fn_773__isNodeRuntime2()) << 4));
    (vmScope[2] | ((+vm_fn_773__isNodeRuntime2()) << 4));
    vmScope[2] = (vmScope[2] | ((+vm_fn_768__hasLocationAnomalies()) << 5));
    (vmScope[2] | ((+vm_fn_768__hasLocationAnomalies()) << 5));
    vmScope[2] = (vmScope[2] | ((+vm_fn_766__detectPlatformProfile()) << 6));
    (vmScope[2] | ((+vm_fn_766__detectPlatformProfile()) << 6));
  } else {
    vmScope[2] = (vmScope[2] | (1 << 7));
    // POP (vmScope[2] | (1 << 7))
  }
  return vmScope[2];
}

function vm_fn_317__installBrowserProbeHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][6] = createChild(vm_fn_318__computeHashWithFallback2, vmScope);
  vmScope[0][4] = createChild(vm_fn_319__isInternetExplorerDocumentMode, vmScope);
  vmScope[0][3] = createChild(vm_fn_320__isFirefoxInstallTrigger, vmScope);
  vmScope[0][5] = createChild(vm_fn_321__isSafariNotificationApi, vmScope);
  return undefined;
}

function vm_fn_318__computeHashWithFallback2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(318, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  try {
    vmScope[3] = "";
    vmScope[3] = vmScope[0][0][0](vmScope[2]);
    return vmScope[3];
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
    vmScope[3] = "ffffffffffffffffffffffffffffffff";
  }
}

function vm_fn_319__isInternetExplorerDocumentMode(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (false || (!(!document.documentMode)));
}

function vm_fn_320__isFirefoxInstallTrigger(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (typeof InstallTrigger !== "undefined");
}

function vm_fn_321__isSafariNotificationApi(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if (new RegExp("constructor", "i").test(window.HTMLElement)) { /* goto L42; */ } // keep-top
  if ((!(!window.safari))) {
    if (!((typeof safari !== "undefined"))) { /* goto L40; */ } // keep-top
  }
  // L40:
  // L40:
  // incoming keep-true from pc=27
  // incoming keep-false from pc=34
  // L42:
  // incoming keep-true from pc=17
  return (new RegExp("constructor", "i").test(window.HTMLElement) || createChild(vm_fn_322__isSafariRemoteNotification, vmScope)(safari.pushNotification));
}

function vm_fn_322__isSafariRemoteNotification(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return (vmScope[2].toString() === "[object SafariRemoteNotification]");
}

function vm_fn_323__initializeAsyncRuntimeHelpers3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_324__typeofHelper102, vmScope);
  vmScope[3] = createChild(vm_fn_327__createRegeneratorRuntime3, vmScope);
  vmScope[4] = createChild(vm_fn_377__asyncGeneratorStep3, vmScope);
  vmScope[5] = createChild(vm_fn_378__asyncToGenerator3, vmScope);
  vmScope[0][0] = createChild(vm_fn_383__invokeBatteryInfoAsync, vmScope);
  vmScope[6] = createChild(vm_fn_384__createBatteryInfoAsync, vmScope);
  return undefined;
}

function vm_fn_324__typeofHelper102(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(324, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_325__baseTypeof4, vmScope) | createChild(vm_fn_326__symbolAwareTypeof4, vmScope)
  vmScope[0][2] = createChild(vm_fn_325__baseTypeof4, vmScope);
  // POP createChild(vm_fn_325__baseTypeof4, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_325__baseTypeof4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_326__symbolAwareTypeof4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_327__createRegeneratorRuntime3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[11] = createChild(vm_fn_330__defineIteratorMethod3, vmScope);
    vmScope[12] = createChild(vm_fn_332__wrapGeneratorFunction3, vmScope);
    vmScope[13] = createChild(vm_fn_333, vmScope);
    vmScope[19] = createChild(vm_fn_334, vmScope);
    vmScope[20] = createChild(vm_fn_335, vmScope);
    vmScope[21] = createChild(vm_fn_336, vmScope);
    vmScope[26] = createChild(vm_fn_338, vmScope);
    vmScope[27] = createChild(vm_fn_341, vmScope);
    vmScope[28] = createChild(vm_fn_350, vmScope);
    vmScope[29] = createChild(vm_fn_352__maybeInvokeDelegate3, vmScope);
    vmScope[30] = createChild(vm_fn_353__pushTryEntry3, vmScope);
    vmScope[31] = createChild(vm_fn_354__resetCompletionRecord3, vmScope);
    vmScope[32] = createChild(vm_fn_355__resetTryEntryContext3, vmScope);
    vmScope[33] = createChild(vm_fn_356__getIterator3, vmScope);
    vmScope[34] = createChild(vm_fn_328, vmScope);
    vmScope[0][3] = createChild(vm_fn_328, vmScope);
    vmScope[3] = {};
    vmScope[4] = Object.prototype;
    vmScope[5] = vmScope[4].hasOwnProperty;
    // incoming keep-true from pc=102
    vmScope[6] = (Object.defineProperty || createChild(vm_fn_329__definePropertyFallback3, vmScope));
    if (("function" == typeof Symbol)) {

    } else {
      // block boundary after jump @pc=118
      // incoming false-branch from pc=114
    }
    // incoming from pc=118
    // PHI@pc=121 slot=0: Symbol | {}
    vmScope[7] = Symbol;
    // incoming keep-true from pc=129
    vmScope[8] = (vmScope[7].iterator || "@@iterator");
    // incoming keep-true from pc=141
    vmScope[9] = (vmScope[7].asyncIterator || "@@asyncIterator");
    // incoming keep-true from pc=153
    vmScope[10] = (vmScope[7].toStringTag || "@@toStringTag");
    vmScope[11]({}, "");
    vmScope[3].wrap = vmScope[12];
  } catch (__vm_caught_exception) {
    vmScope[35] = __vm_caught_exception;
    vmScope[36] = createChild(vm_fn_331, vmScope);
    vmScope[11] = createChild(vm_fn_331, vmScope);
  }
  vmScope[14] = "suspendedStart";
  vmScope[15] = "suspendedYield";
  vmScope[16] = "executing";
  vmScope[17] = "completed";
  vmScope[18] = {};
  vmScope[22] = {};
  vmScope[11](vmScope[22], vmScope[8], createChild(vm_fn_337__returnThis7, vmScope));
  vmScope[23] = Object.getPrototypeOf;
  // incoming keep-false from pc=245
  vmScope[24] = (vmScope[23] && vmScope[23](vmScope[23](vmScope[33]([]))));
  // incoming keep-false from pc=273
  // incoming keep-false from pc=282
  if (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8]))) {
    vmScope[22] = vmScope[24];
  }
  // incoming keep-false from pc=298
  (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8])) && vmScope[24]);
  vmScope[19]["prototype"] = Object.create(vmScope[22]);
  vmScope[21]["prototype"] = Object.create(vmScope[22]);
  vmScope[25] = Object.create(vmScope[22]);
  vmScope[20]["prototype"] = vmScope[21];
  // POP vmScope[21]
  vmScope[6](vmScope[25], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[21], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[6](vmScope[21], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[20], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[20]["displayName"] = vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[3]["isGeneratorFunction"] = createChild(vm_fn_358__isGeneratorFunction3, vmScope);
  // POP createChild(vm_fn_358__isGeneratorFunction3, vmScope)
  vmScope[3]["mark"] = createChild(vm_fn_359__markGeneratorFunction3, vmScope);
  // POP createChild(vm_fn_359__markGeneratorFunction3, vmScope)
  vmScope[3]["awrap"] = createChild(vm_fn_360__wrapAwaitValue3, vmScope);
  // POP createChild(vm_fn_360__wrapAwaitValue3, vmScope)
  vmScope[26](vmScope[27].prototype);
  vmScope[11](vmScope[27].prototype, vmScope[9], createChild(vm_fn_361__returnThis8, vmScope));
  vmScope[3]["AsyncIterator"] = vmScope[27];
  // POP vmScope[27]
  vmScope[3]["async"] = createChild(vm_fn_362__createAsyncFunctionWrapper3, vmScope);
  // POP createChild(vm_fn_362__createAsyncFunctionWrapper3, vmScope)
  vmScope[26](vmScope[25]);
  vmScope[11](vmScope[25], vmScope[10], "Generator");
  vmScope[11](vmScope[25], vmScope[8], createChild(vm_fn_364__returnThis9, vmScope));
  vmScope[11](vmScope[25], "toString", createChild(vm_fn_365__getGeneratorTag3, vmScope));
  vmScope[3]["keys"] = createChild(vm_fn_366, vmScope);
  // POP createChild(vm_fn_366, vmScope)
  vmScope[3]["values"] = vmScope[33];
  // POP vmScope[33]
  vmScope[37] = createChild(vm_fn_368__resetGeneratorContext3, vmScope);
  vmScope[38] = createChild(vm_fn_369__stopGeneratorContext3, vmScope);
  vmScope[39] = createChild(vm_fn_370__dispatchException3, vmScope);
  vmScope[40] = createChild(vm_fn_372__abrupt3, vmScope);
  vmScope[41] = createChild(vm_fn_373__complete3, vmScope);
  vmScope[42] = createChild(vm_fn_374__finishFinallyEntry3, vmScope);
  vmScope[43] = createChild(vm_fn_375__catchTryEntry3, vmScope);
  vmScope[44] = createChild(vm_fn_376__delegateYield3, vmScope);
  vmScope[32]["prototype"] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_368__resetGeneratorContext3, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_369__stopGeneratorContext3, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_370__dispatchException3, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_372__abrupt3, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_373__complete3, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_374__finishFinallyEntry3, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_375__catchTryEntry3, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_376__delegateYield3, vmScope), writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_368__resetGeneratorContext3, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_369__stopGeneratorContext3, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_370__dispatchException3, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_372__abrupt3, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_373__complete3, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_374__finishFinallyEntry3, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_375__catchTryEntry3, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_376__delegateYield3, vmScope), writable: true, configurable: true, enumerable: true })
  return vmScope[3];
}

function vm_fn_328(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(328, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return vmScope[0][3];
}

function vm_fn_329__definePropertyFallback3(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4].value;
  return undefined;
}

function vm_fn_330__defineIteratorMethod3(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  return vmScope[2][vmScope[3]];
}

function vm_fn_331(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4];
  return vmScope[4];
}

function vm_fn_332__wrapGeneratorFunction3(scope, thisArg, argsLike, arg0, arg1, arg2, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(332, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(332, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(332, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  __vmReportCapturedBinding(332, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  if ((vmScope[3] && (vmScope[3].prototype instanceof vmScope[0][19]))) {

  }
  // PHI@pc=24 slot=0: vmScope[3] | vmScope[0][19]
  vmScope[6] = vmScope[3];
  vmScope[7] = Object.create(vmScope[6].prototype);
  vmScope[8] = new vmScope[0][32]((vmScope[5] || []));
  vmScope[0][6](vmScope[7], "_invoke", Object.defineProperty({}, "value", { value: vmScope[0][28](vmScope[2], vmScope[4], vmScope[8]), writable: true, configurable: true, enumerable: true }));
  return vmScope[7];
}

function vm_fn_333(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  try {
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "normal", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[2].call(vmScope[3], vmScope[4]), writable: true, configurable: true, enumerable: true });
    // block boundary after return @pc=21
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "throw", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_334(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_335(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_336(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_337__returnThis7(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_338(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  ["next", "throw", "return"].forEach(createChild(vm_fn_339, vmScope));
  return undefined;
}

function vm_fn_339(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(339, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(339, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  vmScope[0][0][11](vmScope[0][2], vmScope[2], createChild(vm_fn_340__invokeIteratorMethod3, vmScope));
  return undefined;
}

function vm_fn_340__invokeIteratorMethod3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(340, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmThis._invoke(vmScope[0][2], vmScope[2]);
}

function vm_fn_341(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(341, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[4] = createChild(vm_fn_342, vmScope);
  vmScope[6] = createChild(vm_fn_347__enqueueAsyncIteratorStep3, vmScope);
  vmScope[0][6](vmThis, "_invoke", Object.defineProperty({}, "value", { value: createChild(vm_fn_347__enqueueAsyncIteratorStep3, vmScope), writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_342(scope, thisArg, argsLike, arg0, arg1, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(342, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(342, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(342, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(342, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(342, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  vmScope[6] = vmScope[0][0][13](vmScope[0][2][vmScope[2]], vmScope[0][2], vmScope[3]);
  if (("throw" !== vmScope[6].type)) {
    vmScope[7] = vmScope[6].arg;
    vmScope[8] = vmScope[7].value;
    // incoming keep-false from pc=51
    // incoming keep-false from pc=65
    if (((vmScope[8] && ("object" == vmScope[0][0][0][2](vmScope[8]))) && vmScope[0][0][5].call(vmScope[8], "__await"))) {

    } else {
      // block boundary after jump @pc=104
      // incoming false-branch from pc=80
    }
    // incoming from pc=104
    // PHI@pc=126 slot=0: vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_343__resumeAsyncIteratorNext3, vmScope), createChild(vm_fn_344__resumeAsyncIteratorThrow5, vmScope)) | vmScope[0][3].resolve(vmScope[8]).then(createChild(vm_fn_345__resolveAsyncIteratorValue3, vmScope), createChild(vm_fn_346__resumeAsyncIteratorThrow6, vmScope))
    return vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_343__resumeAsyncIteratorNext3, vmScope), createChild(vm_fn_344__resumeAsyncIteratorThrow5, vmScope));
  }
  // L127:
  // block boundary after return @pc=126
  // incoming false-branch from pc=30
  vmScope[5](vmScope[6].arg);
  return undefined;
}

function vm_fn_343__resumeAsyncIteratorNext3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(343, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(343, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(343, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("next", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_344__resumeAsyncIteratorThrow5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(344, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(344, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(344, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_345__resolveAsyncIteratorValue3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(345, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(345, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[0][7]["value"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4](vmScope[0][7]);
  return undefined;
}

function vm_fn_346__resumeAsyncIteratorThrow6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(346, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(346, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(346, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  return vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
}

function vm_fn_347__enqueueAsyncIteratorStep3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(347, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_348, vmScope);
  if (vmScope[0][5]) {

  }
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  vmScope[0][5] = vmScope[0][5].then(vmScope[4], vmScope[4]);
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  return vmScope[0][5].then(vmScope[4], vmScope[4]);
}

function vm_fn_348(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(348, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  return new vmScope[0][0][3](createChild(vm_fn_349__executeAsyncIteratorStep3, vmScope));
}

function vm_fn_349__executeAsyncIteratorStep3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(349, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(349, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(349, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][0][2], vmScope[0][0][3], vmScope[2], vmScope[3]);
  return undefined;
}

function vm_fn_350(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  __vmReportCapturedBinding(350, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  vmScope[5] = vmScope[0][14];
  return createChild(vm_fn_351__invokeGeneratorMethod3, vmScope);
}

function vm_fn_351__invokeGeneratorMethod3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(351, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(351, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(351, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(351, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(351, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(351, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(351, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(351, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(351, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(351, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  __vmReportCapturedBinding(351, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(351, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  if ((vmScope[0][5] === vmScope[0][0][16])) {
    throw Error("Generator is already running");
  }
  // block boundary after throw @pc=16
  // incoming false-branch from pc=7
  if ((vmScope[0][5] === vmScope[0][0][17])) {
    if (("throw" === vmScope[2])) {
      throw vmScope[3];
    }
    // block boundary after throw @pc=37
    // incoming false-branch from pc=32
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[0][0][2], writable: true, configurable: true, enumerable: true }), "done", { value: (!0), writable: true, configurable: true, enumerable: true });
  }
  // L50:
  // block boundary after return @pc=49
  // incoming false-branch from pc=24
  vmScope[0][4]["method"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4]["arg"] = vmScope[3];
  // POP vmScope[3]
  // L70:
  vmScope[4] = vmScope[0][4].delegate;
  if (vmScope[4]) {
    vmScope[5] = vmScope[0][0][29](vmScope[4], vmScope[0][4]);
    if (!(vmScope[5])) { /* goto L118; */ }
    if ((vmScope[5] === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=112
    // incoming false-branch from pc=110
    return vmScope[5];
  }
  // L118:
  // block boundary after return @pc=117
  // incoming false-branch from pc=81
  // incoming false-branch from pc=101
  if (("next" === vmScope[0][4].method)) {
    vmScope[0][4]["_sent"] = vmScope[0][4].arg;
    vmScope[0][4].sent = vmScope[0][4].arg;
    /* goto L221; */
  }
  // block boundary after jump @pc=144
  // incoming false-branch from pc=126
  if (("throw" === vmScope[0][4].method)) {
    if ((vmScope[0][5] === vmScope[0][0][14])) {
      vmScope[0][5] = vmScope[0][0][17];
      // POP vmScope[0][0][17]
      throw vmScope[0][4].arg;
    }
    // block boundary after throw @pc=178
    // incoming false-branch from pc=163
    vmScope[0][4].dispatchException(vmScope[0][4].arg);
    /* goto L221; */
  }
  // L195:
  // block boundary after jump @pc=193
  // incoming false-branch from pc=154
  // incoming keep-false from pc=203
  (("return" === vmScope[0][4].method) && vmScope[0][4].abrupt("return", vmScope[0][4].arg));
  // L221:
  // incoming from pc=144
  // incoming from pc=193
  vmScope[0][5] = vmScope[0][0][16];
  vmScope[6] = vmScope[0][0][13](vmScope[0][2], vmScope[0][3], vmScope[0][4]);
  if (("normal" === vmScope[6].type)) {
    if (vmScope[0][4].done) {

    } else {
      // block boundary after jump @pc=265
      // incoming false-branch from pc=260
    }
    // incoming from pc=265
    // PHI@pc=270 slot=0: vmScope[0][0][17] | vmScope[0][0][15]
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    if ((vmScope[6].arg === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=286
    // incoming false-branch from pc=284
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[6].arg, writable: true, configurable: true, enumerable: true }), "done", { value: vmScope[0][4].done, writable: true, configurable: true, enumerable: true });
  }
  // L304:
  // block boundary after return @pc=303
  // incoming false-branch from pc=253
  if (("throw" === vmScope[6].type)) {
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    vmScope[0][4]["method"] = "throw";
    // POP "throw"
    vmScope[0][4]["arg"] = vmScope[6].arg;
  }
  // incoming keep-false from pc=312
  // POP (("throw" === vmScope[6].type) && vmScope[6].arg)
  // L343:
  // incoming from pc=112
  // incoming from pc=286
  /* goto L70; */
  // block boundary after jump @pc=343
  return undefined;
}

function vm_fn_352__maybeInvokeDelegate3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(352, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(352, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(352, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(352, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  vmScope[4] = vmScope[3].method;
  vmScope[5] = vmScope[2].iterator[vmScope[4]];
  if (!((vmScope[5] === vmScope[0][2]))) { /* goto L137; */ }
  vmScope[3]["delegate"] = null;
  // POP null
  // incoming keep-false from pc=43
  if ((("throw" === vmScope[4]) && vmScope[2].iterator.return)) {
    vmScope[3]["method"] = "return";
    // POP "return"
    vmScope[3]["arg"] = vmScope[0][2];
    // POP vmScope[0][2]
    vmScope[0][29](vmScope[2], vmScope[3]);
  }
  // incoming keep-false from pc=52
  if ((!((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)))) {
    if (!(("return" !== vmScope[4]))) { /* goto L132; */ } // keep-top
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  }
  // L132:
  // L132:
  // incoming keep-true from pc=94
  // incoming keep-false from pc=102
  // PHI@pc=132 slot=0: ((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)) | ("return" !== vmScope[4]) | new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"))
  new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  return vmScope[0][18];
  // L137:
  // block boundary after return @pc=136
  // incoming false-branch from pc=27
  vmScope[6] = vmScope[0][13](vmScope[5], vmScope[2].iterator, vmScope[3].arg);
  if (("throw" === vmScope[6].type)) {
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = vmScope[6].arg;
    // POP vmScope[6].arg
    vmScope[3]["delegate"] = null;
    // POP null
    return vmScope[0][18];
  }
  // block boundary after return @pc=201
  // incoming false-branch from pc=167
  vmScope[7] = vmScope[6].arg;
  if (!(vmScope[7])) { /* goto L296; */ }
  if (vmScope[7].done) {
    vmScope[3][vmScope[2].resultName] = vmScope[7].value;
    // POP vmScope[7].value
    vmScope[3]["next"] = vmScope[2].nextLoc;
    // POP vmScope[2].nextLoc
    if (("return" !== vmScope[3].method)) {
      vmScope[3]["method"] = "next";
      // POP "next"
      vmScope[3]["arg"] = vmScope[0][2];
    }
    // incoming keep-false from pc=257
    // POP (("return" !== vmScope[3].method) && vmScope[0][2])
    vmScope[3]["delegate"] = null;
    // POP null
    /* goto L294; */
  }
  // L291:
  // block boundary after jump @pc=289
  // incoming false-branch from pc=220
  // L294:
  // incoming from pc=289
  /* goto L329; */
  // L296:
  // block boundary after jump @pc=294
  // incoming false-branch from pc=213
  vmScope[3]["method"] = "throw";
  // POP "throw"
  vmScope[3]["arg"] = new TypeError("iterator result is not an object");
  new TypeError("iterator result is not an object");
  vmScope[3]["delegate"] = null;
  // POP null
  // L329:
  // incoming from pc=294
  // PHI@pc=294 slot=0: vmScope[0][18] | vmScope[7]
  return vmScope[0][18];
}

function vm_fn_353__pushTryEntry3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "tryLoc", { value: vmScope[2]["0"], writable: true, configurable: true, enumerable: true });
  if ((1 in vmScope[2])) {
    vmScope[3]["catchLoc"] = vmScope[2]["1"];
  }
  // POP ((1 in vmScope[2]) && vmScope[2]["1"])
  if ((2 in vmScope[2])) {
    vmScope[3]["finallyLoc"] = vmScope[2]["2"];
    // POP vmScope[2]["2"]
    vmScope[3]["afterLoc"] = vmScope[2]["3"];
  }
  // POP ((2 in vmScope[2]) && vmScope[2]["3"])
  vmThis.tryEntries.push(vmScope[3]);
  return undefined;
}

function vm_fn_354__resetCompletionRecord3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = (vmScope[2].completion || {});
  vmScope[3]["type"] = "normal";
  // POP "normal"
  (delete vmScope[3]["arg"]);
  vmScope[2]["completion"] = vmScope[3];
  // POP vmScope[3]
  return undefined;
}

function vm_fn_355__resetTryEntryContext3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(355, "vmScope[0][30]", 1, 30, vmScope[0][30]);
  vmThis["tryEntries"] = [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })];
  // POP [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })]
  vmScope[2].forEach(vmScope[0][30], vmThis);
  vmThis.reset((!0));
  return undefined;
}

function vm_fn_356__getIterator3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(356, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(356, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  // incoming keep-true from pc=3
  if ((vmScope[2] || ("" === vmScope[2]))) {
    vmScope[3] = vmScope[2][vmScope[0][8]];
    if (vmScope[3]) {
      return vmScope[3].call(vmScope[2]);
    }
    // block boundary after return @pc=39
    // incoming false-branch from pc=26
    if (("function" == typeof vmScope[2].next)) {
      return vmScope[2];
    }
    // block boundary after return @pc=54
    // incoming false-branch from pc=49
    if ((!isNaN(vmScope[2].length))) {
      vmScope[4] = (-1);
      vmScope[6] = createChild(vm_fn_357__nextArrayLikeIterator3, vmScope);
      vmScope[5] = createChild(vm_fn_357__nextArrayLikeIterator3, vmScope);
      vmScope[5]["next"] = vmScope[5];
      return vmScope[5];
    }
  }
  // L93:
  // L93:
  // block boundary after return @pc=92
  // incoming false-branch from pc=11
  // incoming false-branch from pc=66
  throw new TypeError((vmScope[0][0][2](vmScope[2]) + " is not iterable"));
  // block boundary after throw @pc=109
  return undefined;
}

function vm_fn_357__nextArrayLikeIterator3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(357, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(357, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(357, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(357, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(357, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  while ((++vmScope[0][4] < vmScope[0][2].length)) {
    if (vmScope[0][0][5].call(vmScope[0][2], vmScope[0][4])) {
      vmScope[0][6]["value"] = vmScope[0][2][vmScope[0][4]];
      // POP vmScope[0][2][vmScope[0][4]]
      vmScope[0][6]["done"] = (!1);
      // POP (!1)
      return vmScope[0][6];
    }
    // block boundary after return @pc=55
    // incoming false-branch from pc=26
  }
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=10
  vmScope[0][6]["value"] = vmScope[0][0][2];
  // POP vmScope[0][0][2]
  vmScope[0][6]["done"] = (!0);
  // POP (!0)
  return vmScope[0][6];
}

function vm_fn_358__isGeneratorFunction3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(358, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  // incoming keep-false from pc=7
  vmScope[3] = (("function" == typeof vmScope[2]) && vmScope[2].constructor);
  if ((!(!vmScope[3]))) {
    if ((vmScope[3] === vmScope[0][20])) { /* goto L48; */ } // keep-top
    // incoming keep-true from pc=40
  }
  // L48:
  // incoming keep-false from pc=22
  // incoming keep-true from pc=31
  // PHI@pc=48 slot=0: (!(!vmScope[3])) | (vmScope[3] === vmScope[0][20]) | ("GeneratorFunction" === (vmScope[3].displayName || vmScope[3].name))
  return (!(!vmScope[3]));
}

function vm_fn_359__markGeneratorFunction3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(359, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(359, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(359, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(359, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (Object.setPrototypeOf) {

  } else {
    vmScope[2]["__proto__"] = vmScope[0][21];
    // POP vmScope[0][21]
  }
  // PHI@pc=45 slot=0: Object.setPrototypeOf(vmScope[2], vmScope[0][21]) | vmScope[0][11](vmScope[2], vmScope[0][10], "GeneratorFunction")
  Object.setPrototypeOf(vmScope[2], vmScope[0][21]);
  vmScope[2]["prototype"] = Object.create(vmScope[0][25]);
  Object.create(vmScope[0][25]);
  return vmScope[2];
}

function vm_fn_360__wrapAwaitValue3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "__await", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_361__returnThis8(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_362__createAsyncFunctionWrapper3(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 5, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  __vmReportCapturedBinding(362, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(362, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(362, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if ((undefined === vmScope[6])) {
    vmScope[6] = Promise;
  }
  // POP ((undefined === vmScope[6]) && Promise)
  vmScope[7] = new vmScope[0][27](vmScope[0][12](vmScope[2], vmScope[3], vmScope[4], vmScope[5]), vmScope[6]);
  if (vmScope[0][3].isGeneratorFunction(vmScope[3])) {

  }
  // PHI@pc=78 slot=0: vmScope[7] | vmScope[7].next().then(createChild(vm_fn_363__handleAsyncIteratorResult3, vmScope))
  return vmScope[7];
}

function vm_fn_363__handleAsyncIteratorResult3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(363, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  if (vmScope[2].done) {

  }
  // PHI@pc=22 slot=0: vmScope[2].value | vmScope[0][7].next()
  return vmScope[2].value;
}

function vm_fn_364__returnThis9(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_365__getGeneratorTag3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "[object Generator]";
}

function vm_fn_366(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object(vmScope[2]);
  vmScope[4] = [];
  for (vmScope[5] in vmScope[3]) {
    vmScope[4].push(vmScope[5]);
  }
  vmScope[4].reverse();
  vmScope[7] = createChild(vm_fn_367__nextObjectKeyIterator3, vmScope);
  return createChild(vm_fn_367__nextObjectKeyIterator3, vmScope);
}

function vm_fn_367__nextObjectKeyIterator3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(367, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(367, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(367, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  while (vmScope[0][4].length) {
    vmScope[2] = vmScope[0][4].pop();
    if ((vmScope[2] in vmScope[0][3])) {
      vmScope[0][7]["value"] = vmScope[2];
      // POP vmScope[2]
      vmScope[0][7]["done"] = (!1);
      // POP (!1)
      return vmScope[0][7];
    }
    // block boundary after return @pc=50
    // incoming false-branch from pc=25
  }
  // L53:
  // block boundary after jump @pc=51
  // incoming false-branch from pc=5
  vmScope[0][7]["done"] = (!0);
  // POP (!0)
  return vmScope[0][7];
}

function vm_fn_368__resetGeneratorContext3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(368, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(368, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(368, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmThis["prev"] = 0;
  // POP 0
  vmThis["next"] = 0;
  // POP 0
  vmThis["_sent"] = vmScope[0][2];
  vmThis["sent"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis["done"] = (!1);
  // POP (!1)
  vmThis["delegate"] = null;
  // POP null
  vmThis["method"] = "next";
  // POP "next"
  vmThis["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis.tryEntries.forEach(vmScope[0][31]);
  if (!((!vmScope[2]))) { /* goto L142; */ }
  while ((/* enum-next */ (vmScope[3] = __vm_enum_next_key(vmThis)), vmScope[3] !== undefined)) {
    // incoming keep-false from pc=96
    // incoming keep-false from pc=110
    if (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1)))))) {
      vmThis[vmScope[3]] = vmScope[0][2];
    }
    // incoming keep-false from pc=129
    (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1))))) && vmScope[0][2]);
  }
  // L142:
  // block boundary after jump @pc=140
  // incoming false-branch from pc=71
  // incoming false-branch from pc=81
  return undefined;
}

function vm_fn_369__stopGeneratorContext3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmThis.done = (!0);
  vmScope[2] = vmThis.tryEntries["0"].completion;
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  return vmThis.rval;
}

function vm_fn_370__dispatchException3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(370, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_371__handleExceptionEntry3, vmScope);
  if (vmThis.done) {
    throw vmScope[2];
  }
  // block boundary after throw @pc=13
  // incoming false-branch from pc=8
  vmScope[3] = vmThis;
  vmScope[5] = (vmThis.tryEntries.length - 1);
  // L29:
  if (!((vmScope[5] >= 0))) { /* goto L255; */ }
  vmScope[6] = vmThis.tryEntries[vmScope[5]];
  vmScope[7] = vmScope[6].completion;
  if (("root" === vmScope[6].tryLoc)) {
    return vmScope[4]("end");
  }
  // block boundary after return @pc=73
  // incoming false-branch from pc=63
  if (!((vmScope[6].tryLoc <= vmThis.prev))) { /* goto L248; */ }
  vmScope[8] = vmScope[0][5].call(vmScope[6], "catchLoc");
  vmScope[9] = vmScope[0][5].call(vmScope[6], "finallyLoc");
  // incoming keep-false from pc=120
  if ((vmScope[8] && vmScope[9])) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=152
    // incoming false-branch from pc=136
    if ((vmThis.prev < vmScope[6].finallyLoc)) {
      return vmScope[4](vmScope[6].finallyLoc);
    }
    // block boundary after return @pc=175
    // incoming false-branch from pc=162
    /* goto L248; */
  }
  // L178:
  // block boundary after jump @pc=176
  // incoming false-branch from pc=125
  if (vmScope[8]) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=208
    // incoming false-branch from pc=192
    /* goto L248; */
  }
  // L211:
  // block boundary after jump @pc=209
  // incoming false-branch from pc=181
  if ((!vmScope[9])) {
    throw Error("try statement without catch or finally");
  }
  // block boundary after throw @pc=224
  // incoming false-branch from pc=215
  if ((vmThis.prev < vmScope[6].finallyLoc)) {
    return vmScope[4](vmScope[6].finallyLoc);
  }
  // L248:
  // L248:
  // block boundary after return @pc=247
  // incoming false-branch from pc=83
  // incoming from pc=176
  // incoming from pc=209
  // incoming false-branch from pc=234
  --vmScope[5];
  /* goto L29; */
  // L255:
  // block boundary after jump @pc=253
  // incoming false-branch from pc=35
  return undefined;
}

function vm_fn_371__handleExceptionEntry3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(371, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(371, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(371, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(371, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[0][7]["type"] = "throw";
  // POP "throw"
  vmScope[0][7]["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmScope[0][3]["next"] = vmScope[2];
  // POP vmScope[2]
  if (vmScope[3]) {
    vmScope[0][3]["method"] = "next";
    // POP "next"
    vmScope[0][3]["arg"] = vmScope[0][0][2];
  }
  // POP (vmScope[3] && vmScope[0][0][2])
  return (!(!vmScope[3]));
}

function vm_fn_372__abrupt3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(372, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(372, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[4] = (vmThis.tryEntries.length - 1);
  // L11:
  if ((vmScope[4] >= 0)) {
    vmScope[5] = vmThis.tryEntries[vmScope[4]];
    // incoming keep-false from pc=38
    // incoming keep-false from pc=53
    if ((((vmScope[5].tryLoc <= vmThis.prev) && vmScope[0][5].call(vmScope[5], "finallyLoc")) && (vmThis.prev < vmScope[5].finallyLoc))) {
      vmScope[6] = vmScope[5];
    } else {
      // block boundary after jump @pc=72
      // incoming false-branch from pc=64
      --vmScope[4];
      /* goto L11; */
    }
  }
  // L81:
  // L81:
  // block boundary after jump @pc=79
  // incoming false-branch from pc=17
  // incoming from pc=72
  if (vmScope[6]) {
    if (("break" === vmScope[2])) { /* goto L100; */ } // keep-top
  }
  // L100:
  // L100:
  // incoming keep-false from pc=84
  // incoming keep-true from pc=92
  // incoming keep-false from pc=100
  // incoming keep-false from pc=111
  if (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc))) {
    vmScope[6] = null;
  }
  // incoming keep-false from pc=122
  // POP (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc)) && null)
  if (vmScope[6]) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=133
  }
  // incoming from pc=140
  // PHI@pc=143 slot=0: vmScope[6].completion | {}
  vmScope[7] = vmScope[6].completion;
  vmScope[7]["type"] = vmScope[2];
  // POP vmScope[2]
  vmScope[7]["arg"] = vmScope[3];
  // POP vmScope[3]
  if (vmScope[6]) {
    vmThis["method"] = "next";
    // POP "next"
    vmThis["next"] = vmScope[6].finallyLoc;
    // POP vmScope[6].finallyLoc
  } else {
    // block boundary after jump @pc=191
    // incoming false-branch from pc=169
  }
  // incoming from pc=191
  // PHI@pc=202 slot=0: vmScope[0][18] | vmThis.complete(vmScope[7])
  return vmScope[0][18];
}

function vm_fn_373__complete3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(373, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  // block boundary after throw @pc=15
  // incoming false-branch from pc=8
  // incoming keep-true from pc=24
  if ((("break" === vmScope[2].type) || ("continue" === vmScope[2].type))) {
    vmThis["next"] = vmScope[2].arg;
    /* goto L108; */
  }
  // block boundary after jump @pc=45
  // incoming false-branch from pc=34
  if (("return" === vmScope[2].type)) {
    vmThis["arg"] = vmScope[2].arg;
    vmThis["rval"] = vmScope[2].arg;
    // POP vmScope[2].arg
    vmThis["method"] = "return";
    // POP "return"
    vmThis["next"] = "end";
    /* goto L108; */
  }
  // block boundary after jump @pc=84
  // incoming false-branch from pc=55
  // incoming keep-false from pc=94
  if ((("normal" === vmScope[2].type) && vmScope[3])) {
    vmThis["next"] = vmScope[3];
  }
  // L108:
  // L108:
  // incoming from pc=45
  // incoming from pc=84
  // incoming keep-false from pc=99
  // POP vmScope[3]
  return vmScope[0][18];
}

function vm_fn_374__finishFinallyEntry3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(374, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(374, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  while ((vmScope[3] >= 0)) {
    vmScope[4] = vmThis.tryEntries[vmScope[3]];
    if ((vmScope[4].finallyLoc === vmScope[2])) {
      vmThis.complete(vmScope[4].completion, vmScope[4].afterLoc);
      vmScope[0][31](vmScope[4]);
      return vmScope[0][18];
    }
    // block boundary after return @pc=70
    // incoming false-branch from pc=38
    --vmScope[3];
  }
  // L78:
  // block boundary after jump @pc=76
  // incoming false-branch from pc=17
  return undefined;
}

function vm_fn_375__catchTryEntry3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(375, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  // L11:
  if (!((vmScope[3] >= 0))) { /* goto L87; */ }
  vmScope[4] = vmThis.tryEntries[vmScope[3]];
  if ((vmScope[4].tryLoc === vmScope[2])) {
    vmScope[5] = vmScope[4].completion;
    if (("throw" === vmScope[5].type)) {
      vmScope[6] = vmScope[5].arg;
      vmScope[0][31](vmScope[4]);
    }
    // incoming false-branch from pc=56
    return vmScope[6];
  }
  // L80:
  // block boundary after return @pc=79
  // incoming false-branch from pc=38
  --vmScope[3];
  /* goto L11; */
  // L87:
  // block boundary after jump @pc=85
  // incoming false-branch from pc=17
  throw Error("illegal catch attempt");
  // block boundary after throw @pc=94
  return undefined;
}

function vm_fn_376__delegateYield3(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(376, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(376, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(376, "vmScope[0][33]", 1, 33, vmScope[0][33]);
  vmThis["delegate"] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true })
  if (("next" === vmThis.method)) {
    vmThis["arg"] = vmScope[0][2];
  }
  // POP (("next" === vmThis.method) && vmScope[0][2])
  return vmScope[0][18];
}

function vm_fn_377__asyncGeneratorStep3(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 7, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_7 = arg5;
  const scope_0_8 = arg6;
  try {
    vmScope[9] = vmScope[2][vmScope[7]].call(vmScope[2], vmScope[8]);
    vmScope[10] = vmScope[9].value;
    if (vmScope[9].done) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=45
    }
  } catch (__vm_caught_exception) {
    vmScope[11] = __vm_caught_exception;
    return undefined;
  }
  // incoming from pc=56
  // PHI@pc=79 slot=0: vmScope[3](vmScope[10]) | Promise.resolve(vmScope[10]).then(vmScope[5], vmScope[6])
  vmScope[3](vmScope[10]);
  return undefined;
}

function vm_fn_378__asyncToGenerator3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  return createChild(vm_fn_379__asyncToGeneratorWrapper3, vmScope);
}

function vm_fn_379__asyncToGeneratorWrapper3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = vmThis;
  vmScope[3] = vmScope[1];
  return new Promise(createChild(vm_fn_380__runAsyncToGeneratorExecutor3, vmScope));
}

function vm_fn_380__runAsyncToGeneratorExecutor3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(380, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(380, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(380, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = createChild(vm_fn_381__asyncToGeneratorNext3, vmScope);
  vmScope[6] = createChild(vm_fn_382__asyncToGeneratorThrow3, vmScope);
  vmScope[4] = vmScope[0][0][2].apply(vmScope[0][2], vmScope[0][3]);
  vmScope[5](undefined);
  return undefined;
}

function vm_fn_381__asyncToGeneratorNext3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_381__asyncToGeneratorNext3 = vmScope[0][5];
  const vm_fn_382__asyncToGeneratorThrow3 = vmScope[0][6];
  __vmReportCapturedBinding(381, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(381, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(381, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(381, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(381, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(381, "vmScope[0][0][0][0][4]", 4, 4, vmScope[0][0][0][0][4]);
  vmScope[0][0][0][0][4](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_381__asyncToGeneratorNext3, vm_fn_382__asyncToGeneratorThrow3, "next", vmScope[2]);
  return undefined;
}

function vm_fn_382__asyncToGeneratorThrow3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_381__asyncToGeneratorNext3 = vmScope[0][5];
  const vm_fn_382__asyncToGeneratorThrow3 = vmScope[0][6];
  __vmReportCapturedBinding(382, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(382, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(382, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(382, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(382, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(382, "vmScope[0][0][0][0][4]", 4, 4, vmScope[0][0][0][0][4]);
  vmScope[0][0][0][0][4](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_381__asyncToGeneratorNext3, vm_fn_382__asyncToGeneratorThrow3, "throw", vmScope[2]);
  return undefined;
}

function vm_fn_383__invokeBatteryInfoAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(383, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  return vmScope[0][6].apply(vmThis, vmScope[1]);
}

function vm_fn_384__createBatteryInfoAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_328 = vmScope[0][3];
  __vmReportCapturedBinding(384, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(384, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(384, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[2] = createChild(vm_fn_385__createBatteryInfoGenerator, vmScope);
  vmScope[0][6] = vmScope[0][5](captured_vm_fn_328().mark(createChild(vm_fn_385__createBatteryInfoGenerator, vmScope)));
  return vmScope[0][6].apply(vmThis, vmScope[1]);
}

function vm_fn_385__createBatteryInfoGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_385__createBatteryInfoGenerator = vmScope[0][2];
  const captured_vm_fn_328 = vmScope[0][0][3];
  __vmReportCapturedBinding(385, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(385, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  vmScope[3] = createChild(vm_fn_386__collectBatteryInfo, vmScope);
  return captured_vm_fn_328().wrap(createChild(vm_fn_386__collectBatteryInfo, vmScope), vm_fn_385__createBatteryInfoGenerator, null, [[0, 7]]);
}

function vm_fn_386__collectBatteryInfo(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(386, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  // L0:
  if (!(1)) { /* goto L177; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 3)) { /* goto L60; */ } // keep-top
    if ((vmScope[2].next === 7)) { /* goto L132; */ } // keep-top
    if ((vmScope[2].next === 10)) { /* goto L166; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L166; */ } // keep-top
    // POP vmScope[2].next
    /* goto L175; */
  }
  // block boundary after jump @pc=36
  // incoming strict-eq branch from pc=17
  vmScope[2].prev = 0;
  vmScope[2].next = 3;
  return navigator.getBattery();
  // L60:
  // block boundary after return @pc=59
  // incoming strict-eq branch from pc=21
  vmScope[0][2] = vmScope[2].sent;
  if (vmScope[0][2].charging) {

  } else {
    // block boundary after jump @pc=86
    // incoming false-branch from pc=82
  }
  // incoming from pc=86
  return vmScope[2].abrupt("return", Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "charging", { value: 1, writable: true, configurable: true, enumerable: true }), "chargingTime", { value: (vmScope[0][2].chargingTime + ""), writable: true, configurable: true, enumerable: true }), "dischargingTime", { value: (vmScope[0][2].dischargingTime + ""), writable: true, configurable: true, enumerable: true }), "level", { value: Math.round((vmScope[0][2].level * 100)), writable: true, configurable: true, enumerable: true }));
  // L132:
  // block boundary after return @pc=131
  // incoming strict-eq branch from pc=25
  vmScope[2].prev = 7;
  vmScope[2].t0 = vmScope[2].catch(0);
  return vmScope[2].abrupt("return", {});
  // L166:
  // block boundary after return @pc=165
  // incoming strict-eq branch from pc=29
  // incoming strict-eq branch from pc=33
  return vmScope[2].stop();
  // L175:
  // block boundary after return @pc=174
  // incoming from pc=36
  /* goto L0; */
  // L177:
  // block boundary after jump @pc=175
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_387__initializeAudioFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_388__typeofHelper103, vmScope);
  vmScope[3] = createChild(vm_fn_391__createRegeneratorRuntime4, vmScope);
  vmScope[4] = createChild(vm_fn_441__ownKeys2, vmScope);
  vmScope[5] = createChild(vm_fn_443, vmScope);
  vmScope[6] = createChild(vm_fn_446__defineEnumerableProperty22, vmScope);
  vmScope[7] = createChild(vm_fn_447__toPropertyKey32, vmScope);
  vmScope[8] = createChild(vm_fn_448__toPrimitive4, vmScope);
  vmScope[9] = createChild(vm_fn_449__asyncGeneratorStep4, vmScope);
  vmScope[10] = createChild(vm_fn_450__asyncToGenerator4, vmScope);
  vmScope[11] = createChild(vm_fn_455__collectOfflineAudioFingerprint, vmScope);
  vmScope[12] = createChild(vm_fn_463__collectAudioContextInfo, vmScope);
  vmScope[0][0] = createChild(vm_fn_464__invokeAudioFingerprintAsync, vmScope);
  vmScope[13] = createChild(vm_fn_465__createAudioFingerprintAsync, vmScope);
  return undefined;
}

function vm_fn_388__typeofHelper103(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(388, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_389__baseTypeof5, vmScope) | createChild(vm_fn_390__symbolAwareTypeof5, vmScope)
  vmScope[0][2] = createChild(vm_fn_389__baseTypeof5, vmScope);
  // POP createChild(vm_fn_389__baseTypeof5, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_389__baseTypeof5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_390__symbolAwareTypeof5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_391__createRegeneratorRuntime4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[11] = createChild(vm_fn_394__defineIteratorMethod4, vmScope);
    vmScope[12] = createChild(vm_fn_396__wrapGeneratorFunction4, vmScope);
    vmScope[13] = createChild(vm_fn_397, vmScope);
    vmScope[19] = createChild(vm_fn_398, vmScope);
    vmScope[20] = createChild(vm_fn_399, vmScope);
    vmScope[21] = createChild(vm_fn_400, vmScope);
    vmScope[26] = createChild(vm_fn_402, vmScope);
    vmScope[27] = createChild(vm_fn_405, vmScope);
    vmScope[28] = createChild(vm_fn_414, vmScope);
    vmScope[29] = createChild(vm_fn_416__maybeInvokeDelegate4, vmScope);
    vmScope[30] = createChild(vm_fn_417__pushTryEntry4, vmScope);
    vmScope[31] = createChild(vm_fn_418__resetCompletionRecord4, vmScope);
    vmScope[32] = createChild(vm_fn_419__resetTryEntryContext4, vmScope);
    vmScope[33] = createChild(vm_fn_420__getIterator4, vmScope);
    vmScope[34] = createChild(vm_fn_392, vmScope);
    vmScope[0][3] = createChild(vm_fn_392, vmScope);
    vmScope[3] = {};
    vmScope[4] = Object.prototype;
    vmScope[5] = vmScope[4].hasOwnProperty;
    // incoming keep-true from pc=102
    vmScope[6] = (Object.defineProperty || createChild(vm_fn_393__definePropertyFallback4, vmScope));
    if (("function" == typeof Symbol)) {

    } else {
      // block boundary after jump @pc=118
      // incoming false-branch from pc=114
    }
    // incoming from pc=118
    // PHI@pc=121 slot=0: Symbol | {}
    vmScope[7] = Symbol;
    // incoming keep-true from pc=129
    vmScope[8] = (vmScope[7].iterator || "@@iterator");
    // incoming keep-true from pc=141
    vmScope[9] = (vmScope[7].asyncIterator || "@@asyncIterator");
    // incoming keep-true from pc=153
    vmScope[10] = (vmScope[7].toStringTag || "@@toStringTag");
    vmScope[11]({}, "");
    vmScope[3].wrap = vmScope[12];
  } catch (__vm_caught_exception) {
    vmScope[35] = __vm_caught_exception;
    vmScope[36] = createChild(vm_fn_395, vmScope);
    vmScope[11] = createChild(vm_fn_395, vmScope);
  }
  vmScope[14] = "suspendedStart";
  vmScope[15] = "suspendedYield";
  vmScope[16] = "executing";
  vmScope[17] = "completed";
  vmScope[18] = {};
  vmScope[22] = {};
  vmScope[11](vmScope[22], vmScope[8], createChild(vm_fn_401__returnThis10, vmScope));
  vmScope[23] = Object.getPrototypeOf;
  // incoming keep-false from pc=245
  vmScope[24] = (vmScope[23] && vmScope[23](vmScope[23](vmScope[33]([]))));
  // incoming keep-false from pc=273
  // incoming keep-false from pc=282
  if (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8]))) {
    vmScope[22] = vmScope[24];
  }
  // incoming keep-false from pc=298
  (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8])) && vmScope[24]);
  vmScope[19]["prototype"] = Object.create(vmScope[22]);
  vmScope[21]["prototype"] = Object.create(vmScope[22]);
  vmScope[25] = Object.create(vmScope[22]);
  vmScope[20]["prototype"] = vmScope[21];
  // POP vmScope[21]
  vmScope[6](vmScope[25], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[21], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[6](vmScope[21], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[20], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[20]["displayName"] = vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[3]["isGeneratorFunction"] = createChild(vm_fn_422__isGeneratorFunction4, vmScope);
  // POP createChild(vm_fn_422__isGeneratorFunction4, vmScope)
  vmScope[3]["mark"] = createChild(vm_fn_423__markGeneratorFunction4, vmScope);
  // POP createChild(vm_fn_423__markGeneratorFunction4, vmScope)
  vmScope[3]["awrap"] = createChild(vm_fn_424__wrapAwaitValue4, vmScope);
  // POP createChild(vm_fn_424__wrapAwaitValue4, vmScope)
  vmScope[26](vmScope[27].prototype);
  vmScope[11](vmScope[27].prototype, vmScope[9], createChild(vm_fn_425__returnThis11, vmScope));
  vmScope[3]["AsyncIterator"] = vmScope[27];
  // POP vmScope[27]
  vmScope[3]["async"] = createChild(vm_fn_426__createAsyncFunctionWrapper4, vmScope);
  // POP createChild(vm_fn_426__createAsyncFunctionWrapper4, vmScope)
  vmScope[26](vmScope[25]);
  vmScope[11](vmScope[25], vmScope[10], "Generator");
  vmScope[11](vmScope[25], vmScope[8], createChild(vm_fn_428__returnThis12, vmScope));
  vmScope[11](vmScope[25], "toString", createChild(vm_fn_429__getGeneratorTag4, vmScope));
  vmScope[3]["keys"] = createChild(vm_fn_430, vmScope);
  // POP createChild(vm_fn_430, vmScope)
  vmScope[3]["values"] = vmScope[33];
  // POP vmScope[33]
  vmScope[37] = createChild(vm_fn_432__resetGeneratorContext4, vmScope);
  vmScope[38] = createChild(vm_fn_433__stopGeneratorContext4, vmScope);
  vmScope[39] = createChild(vm_fn_434__dispatchException4, vmScope);
  vmScope[40] = createChild(vm_fn_436__abrupt4, vmScope);
  vmScope[41] = createChild(vm_fn_437__complete4, vmScope);
  vmScope[42] = createChild(vm_fn_438__finishFinallyEntry4, vmScope);
  vmScope[43] = createChild(vm_fn_439__catchTryEntry4, vmScope);
  vmScope[44] = createChild(vm_fn_440__delegateYield4, vmScope);
  vmScope[32]["prototype"] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_432__resetGeneratorContext4, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_433__stopGeneratorContext4, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_434__dispatchException4, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_436__abrupt4, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_437__complete4, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_438__finishFinallyEntry4, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_439__catchTryEntry4, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_440__delegateYield4, vmScope), writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_432__resetGeneratorContext4, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_433__stopGeneratorContext4, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_434__dispatchException4, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_436__abrupt4, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_437__complete4, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_438__finishFinallyEntry4, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_439__catchTryEntry4, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_440__delegateYield4, vmScope), writable: true, configurable: true, enumerable: true })
  return vmScope[3];
}

function vm_fn_392(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(392, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return vmScope[0][3];
}

function vm_fn_393__definePropertyFallback4(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4].value;
  return undefined;
}

function vm_fn_394__defineIteratorMethod4(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  return vmScope[2][vmScope[3]];
}

function vm_fn_395(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4];
  return vmScope[4];
}

function vm_fn_396__wrapGeneratorFunction4(scope, thisArg, argsLike, arg0, arg1, arg2, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(396, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(396, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(396, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  __vmReportCapturedBinding(396, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  if ((vmScope[3] && (vmScope[3].prototype instanceof vmScope[0][19]))) {

  }
  // PHI@pc=24 slot=0: vmScope[3] | vmScope[0][19]
  vmScope[6] = vmScope[3];
  vmScope[7] = Object.create(vmScope[6].prototype);
  vmScope[8] = new vmScope[0][32]((vmScope[5] || []));
  vmScope[0][6](vmScope[7], "_invoke", Object.defineProperty({}, "value", { value: vmScope[0][28](vmScope[2], vmScope[4], vmScope[8]), writable: true, configurable: true, enumerable: true }));
  return vmScope[7];
}

function vm_fn_397(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  try {
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "normal", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[2].call(vmScope[3], vmScope[4]), writable: true, configurable: true, enumerable: true });
    // block boundary after return @pc=21
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "throw", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_398(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_399(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_400(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_401__returnThis10(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_402(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  ["next", "throw", "return"].forEach(createChild(vm_fn_403, vmScope));
  return undefined;
}

function vm_fn_403(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(403, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(403, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  vmScope[0][0][11](vmScope[0][2], vmScope[2], createChild(vm_fn_404__invokeIteratorMethod4, vmScope));
  return undefined;
}

function vm_fn_404__invokeIteratorMethod4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(404, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmThis._invoke(vmScope[0][2], vmScope[2]);
}

function vm_fn_405(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(405, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[4] = createChild(vm_fn_406, vmScope);
  vmScope[6] = createChild(vm_fn_411__enqueueAsyncIteratorStep4, vmScope);
  vmScope[0][6](vmThis, "_invoke", Object.defineProperty({}, "value", { value: createChild(vm_fn_411__enqueueAsyncIteratorStep4, vmScope), writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_406(scope, thisArg, argsLike, arg0, arg1, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(406, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(406, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(406, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(406, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(406, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  vmScope[6] = vmScope[0][0][13](vmScope[0][2][vmScope[2]], vmScope[0][2], vmScope[3]);
  if (("throw" !== vmScope[6].type)) {
    vmScope[7] = vmScope[6].arg;
    vmScope[8] = vmScope[7].value;
    // incoming keep-false from pc=51
    // incoming keep-false from pc=65
    if (((vmScope[8] && ("object" == vmScope[0][0][0][2](vmScope[8]))) && vmScope[0][0][5].call(vmScope[8], "__await"))) {

    } else {
      // block boundary after jump @pc=104
      // incoming false-branch from pc=80
    }
    // incoming from pc=104
    // PHI@pc=126 slot=0: vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_407__resumeAsyncIteratorNext4, vmScope), createChild(vm_fn_408__resumeAsyncIteratorThrow7, vmScope)) | vmScope[0][3].resolve(vmScope[8]).then(createChild(vm_fn_409__resolveAsyncIteratorValue4, vmScope), createChild(vm_fn_410__resumeAsyncIteratorThrow8, vmScope))
    return vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_407__resumeAsyncIteratorNext4, vmScope), createChild(vm_fn_408__resumeAsyncIteratorThrow7, vmScope));
  }
  // L127:
  // block boundary after return @pc=126
  // incoming false-branch from pc=30
  vmScope[5](vmScope[6].arg);
  return undefined;
}

function vm_fn_407__resumeAsyncIteratorNext4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(407, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(407, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(407, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("next", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_408__resumeAsyncIteratorThrow7(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(408, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(408, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(408, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_409__resolveAsyncIteratorValue4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(409, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(409, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[0][7]["value"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4](vmScope[0][7]);
  return undefined;
}

function vm_fn_410__resumeAsyncIteratorThrow8(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(410, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(410, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(410, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  return vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
}

function vm_fn_411__enqueueAsyncIteratorStep4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(411, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_412, vmScope);
  if (vmScope[0][5]) {

  }
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  vmScope[0][5] = vmScope[0][5].then(vmScope[4], vmScope[4]);
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  return vmScope[0][5].then(vmScope[4], vmScope[4]);
}

function vm_fn_412(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(412, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  return new vmScope[0][0][3](createChild(vm_fn_413__executeAsyncIteratorStep4, vmScope));
}

function vm_fn_413__executeAsyncIteratorStep4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(413, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(413, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(413, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][0][2], vmScope[0][0][3], vmScope[2], vmScope[3]);
  return undefined;
}

function vm_fn_414(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  __vmReportCapturedBinding(414, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  vmScope[5] = vmScope[0][14];
  return createChild(vm_fn_415__invokeGeneratorMethod4, vmScope);
}

function vm_fn_415__invokeGeneratorMethod4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(415, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(415, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(415, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(415, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(415, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(415, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(415, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(415, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(415, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(415, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  __vmReportCapturedBinding(415, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(415, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  if ((vmScope[0][5] === vmScope[0][0][16])) {
    throw Error("Generator is already running");
  }
  // block boundary after throw @pc=16
  // incoming false-branch from pc=7
  if ((vmScope[0][5] === vmScope[0][0][17])) {
    if (("throw" === vmScope[2])) {
      throw vmScope[3];
    }
    // block boundary after throw @pc=37
    // incoming false-branch from pc=32
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[0][0][2], writable: true, configurable: true, enumerable: true }), "done", { value: (!0), writable: true, configurable: true, enumerable: true });
  }
  // L50:
  // block boundary after return @pc=49
  // incoming false-branch from pc=24
  vmScope[0][4]["method"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4]["arg"] = vmScope[3];
  // POP vmScope[3]
  // L70:
  vmScope[4] = vmScope[0][4].delegate;
  if (vmScope[4]) {
    vmScope[5] = vmScope[0][0][29](vmScope[4], vmScope[0][4]);
    if (!(vmScope[5])) { /* goto L118; */ }
    if ((vmScope[5] === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=112
    // incoming false-branch from pc=110
    return vmScope[5];
  }
  // L118:
  // block boundary after return @pc=117
  // incoming false-branch from pc=81
  // incoming false-branch from pc=101
  if (("next" === vmScope[0][4].method)) {
    vmScope[0][4]["_sent"] = vmScope[0][4].arg;
    vmScope[0][4].sent = vmScope[0][4].arg;
    /* goto L221; */
  }
  // block boundary after jump @pc=144
  // incoming false-branch from pc=126
  if (("throw" === vmScope[0][4].method)) {
    if ((vmScope[0][5] === vmScope[0][0][14])) {
      vmScope[0][5] = vmScope[0][0][17];
      // POP vmScope[0][0][17]
      throw vmScope[0][4].arg;
    }
    // block boundary after throw @pc=178
    // incoming false-branch from pc=163
    vmScope[0][4].dispatchException(vmScope[0][4].arg);
    /* goto L221; */
  }
  // L195:
  // block boundary after jump @pc=193
  // incoming false-branch from pc=154
  // incoming keep-false from pc=203
  (("return" === vmScope[0][4].method) && vmScope[0][4].abrupt("return", vmScope[0][4].arg));
  // L221:
  // incoming from pc=144
  // incoming from pc=193
  vmScope[0][5] = vmScope[0][0][16];
  vmScope[6] = vmScope[0][0][13](vmScope[0][2], vmScope[0][3], vmScope[0][4]);
  if (("normal" === vmScope[6].type)) {
    if (vmScope[0][4].done) {

    } else {
      // block boundary after jump @pc=265
      // incoming false-branch from pc=260
    }
    // incoming from pc=265
    // PHI@pc=270 slot=0: vmScope[0][0][17] | vmScope[0][0][15]
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    if ((vmScope[6].arg === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=286
    // incoming false-branch from pc=284
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[6].arg, writable: true, configurable: true, enumerable: true }), "done", { value: vmScope[0][4].done, writable: true, configurable: true, enumerable: true });
  }
  // L304:
  // block boundary after return @pc=303
  // incoming false-branch from pc=253
  if (("throw" === vmScope[6].type)) {
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    vmScope[0][4]["method"] = "throw";
    // POP "throw"
    vmScope[0][4]["arg"] = vmScope[6].arg;
  }
  // incoming keep-false from pc=312
  // POP (("throw" === vmScope[6].type) && vmScope[6].arg)
  // L343:
  // incoming from pc=112
  // incoming from pc=286
  /* goto L70; */
  // block boundary after jump @pc=343
  return undefined;
}

function vm_fn_416__maybeInvokeDelegate4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(416, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(416, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(416, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(416, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  vmScope[4] = vmScope[3].method;
  vmScope[5] = vmScope[2].iterator[vmScope[4]];
  if (!((vmScope[5] === vmScope[0][2]))) { /* goto L137; */ }
  vmScope[3]["delegate"] = null;
  // POP null
  // incoming keep-false from pc=43
  if ((("throw" === vmScope[4]) && vmScope[2].iterator.return)) {
    vmScope[3]["method"] = "return";
    // POP "return"
    vmScope[3]["arg"] = vmScope[0][2];
    // POP vmScope[0][2]
    vmScope[0][29](vmScope[2], vmScope[3]);
  }
  // incoming keep-false from pc=52
  if ((!((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)))) {
    if (!(("return" !== vmScope[4]))) { /* goto L132; */ } // keep-top
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  }
  // L132:
  // L132:
  // incoming keep-true from pc=94
  // incoming keep-false from pc=102
  // PHI@pc=132 slot=0: ((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)) | ("return" !== vmScope[4]) | new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"))
  new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  return vmScope[0][18];
  // L137:
  // block boundary after return @pc=136
  // incoming false-branch from pc=27
  vmScope[6] = vmScope[0][13](vmScope[5], vmScope[2].iterator, vmScope[3].arg);
  if (("throw" === vmScope[6].type)) {
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = vmScope[6].arg;
    // POP vmScope[6].arg
    vmScope[3]["delegate"] = null;
    // POP null
    return vmScope[0][18];
  }
  // block boundary after return @pc=201
  // incoming false-branch from pc=167
  vmScope[7] = vmScope[6].arg;
  if (!(vmScope[7])) { /* goto L296; */ }
  if (vmScope[7].done) {
    vmScope[3][vmScope[2].resultName] = vmScope[7].value;
    // POP vmScope[7].value
    vmScope[3]["next"] = vmScope[2].nextLoc;
    // POP vmScope[2].nextLoc
    if (("return" !== vmScope[3].method)) {
      vmScope[3]["method"] = "next";
      // POP "next"
      vmScope[3]["arg"] = vmScope[0][2];
    }
    // incoming keep-false from pc=257
    // POP (("return" !== vmScope[3].method) && vmScope[0][2])
    vmScope[3]["delegate"] = null;
    // POP null
    /* goto L294; */
  }
  // L291:
  // block boundary after jump @pc=289
  // incoming false-branch from pc=220
  // L294:
  // incoming from pc=289
  /* goto L329; */
  // L296:
  // block boundary after jump @pc=294
  // incoming false-branch from pc=213
  vmScope[3]["method"] = "throw";
  // POP "throw"
  vmScope[3]["arg"] = new TypeError("iterator result is not an object");
  new TypeError("iterator result is not an object");
  vmScope[3]["delegate"] = null;
  // POP null
  // L329:
  // incoming from pc=294
  // PHI@pc=294 slot=0: vmScope[0][18] | vmScope[7]
  return vmScope[0][18];
}

function vm_fn_417__pushTryEntry4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "tryLoc", { value: vmScope[2]["0"], writable: true, configurable: true, enumerable: true });
  if ((1 in vmScope[2])) {
    vmScope[3]["catchLoc"] = vmScope[2]["1"];
  }
  // POP ((1 in vmScope[2]) && vmScope[2]["1"])
  if ((2 in vmScope[2])) {
    vmScope[3]["finallyLoc"] = vmScope[2]["2"];
    // POP vmScope[2]["2"]
    vmScope[3]["afterLoc"] = vmScope[2]["3"];
  }
  // POP ((2 in vmScope[2]) && vmScope[2]["3"])
  vmThis.tryEntries.push(vmScope[3]);
  return undefined;
}

function vm_fn_418__resetCompletionRecord4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = (vmScope[2].completion || {});
  vmScope[3]["type"] = "normal";
  // POP "normal"
  (delete vmScope[3]["arg"]);
  vmScope[2]["completion"] = vmScope[3];
  // POP vmScope[3]
  return undefined;
}

function vm_fn_419__resetTryEntryContext4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(419, "vmScope[0][30]", 1, 30, vmScope[0][30]);
  vmThis["tryEntries"] = [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })];
  // POP [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })]
  vmScope[2].forEach(vmScope[0][30], vmThis);
  vmThis.reset((!0));
  return undefined;
}

function vm_fn_420__getIterator4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(420, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(420, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  // incoming keep-true from pc=3
  if ((vmScope[2] || ("" === vmScope[2]))) {
    vmScope[3] = vmScope[2][vmScope[0][8]];
    if (vmScope[3]) {
      return vmScope[3].call(vmScope[2]);
    }
    // block boundary after return @pc=39
    // incoming false-branch from pc=26
    if (("function" == typeof vmScope[2].next)) {
      return vmScope[2];
    }
    // block boundary after return @pc=54
    // incoming false-branch from pc=49
    if ((!isNaN(vmScope[2].length))) {
      vmScope[4] = (-1);
      vmScope[6] = createChild(vm_fn_421__nextArrayLikeIterator4, vmScope);
      vmScope[5] = createChild(vm_fn_421__nextArrayLikeIterator4, vmScope);
      vmScope[5]["next"] = vmScope[5];
      return vmScope[5];
    }
  }
  // L93:
  // L93:
  // block boundary after return @pc=92
  // incoming false-branch from pc=11
  // incoming false-branch from pc=66
  throw new TypeError((vmScope[0][0][2](vmScope[2]) + " is not iterable"));
  // block boundary after throw @pc=109
  return undefined;
}

function vm_fn_421__nextArrayLikeIterator4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(421, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(421, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(421, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(421, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(421, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  while ((++vmScope[0][4] < vmScope[0][2].length)) {
    if (vmScope[0][0][5].call(vmScope[0][2], vmScope[0][4])) {
      vmScope[0][6]["value"] = vmScope[0][2][vmScope[0][4]];
      // POP vmScope[0][2][vmScope[0][4]]
      vmScope[0][6]["done"] = (!1);
      // POP (!1)
      return vmScope[0][6];
    }
    // block boundary after return @pc=55
    // incoming false-branch from pc=26
  }
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=10
  vmScope[0][6]["value"] = vmScope[0][0][2];
  // POP vmScope[0][0][2]
  vmScope[0][6]["done"] = (!0);
  // POP (!0)
  return vmScope[0][6];
}

function vm_fn_422__isGeneratorFunction4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(422, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  // incoming keep-false from pc=7
  vmScope[3] = (("function" == typeof vmScope[2]) && vmScope[2].constructor);
  if ((!(!vmScope[3]))) {
    if ((vmScope[3] === vmScope[0][20])) { /* goto L48; */ } // keep-top
    // incoming keep-true from pc=40
  }
  // L48:
  // incoming keep-false from pc=22
  // incoming keep-true from pc=31
  // PHI@pc=48 slot=0: (!(!vmScope[3])) | (vmScope[3] === vmScope[0][20]) | ("GeneratorFunction" === (vmScope[3].displayName || vmScope[3].name))
  return (!(!vmScope[3]));
}

function vm_fn_423__markGeneratorFunction4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(423, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(423, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(423, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(423, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (Object.setPrototypeOf) {

  } else {
    vmScope[2]["__proto__"] = vmScope[0][21];
    // POP vmScope[0][21]
  }
  // PHI@pc=45 slot=0: Object.setPrototypeOf(vmScope[2], vmScope[0][21]) | vmScope[0][11](vmScope[2], vmScope[0][10], "GeneratorFunction")
  Object.setPrototypeOf(vmScope[2], vmScope[0][21]);
  vmScope[2]["prototype"] = Object.create(vmScope[0][25]);
  Object.create(vmScope[0][25]);
  return vmScope[2];
}

function vm_fn_424__wrapAwaitValue4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "__await", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_425__returnThis11(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_426__createAsyncFunctionWrapper4(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 5, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  __vmReportCapturedBinding(426, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(426, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(426, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if ((undefined === vmScope[6])) {
    vmScope[6] = Promise;
  }
  // POP ((undefined === vmScope[6]) && Promise)
  vmScope[7] = new vmScope[0][27](vmScope[0][12](vmScope[2], vmScope[3], vmScope[4], vmScope[5]), vmScope[6]);
  if (vmScope[0][3].isGeneratorFunction(vmScope[3])) {

  }
  // PHI@pc=78 slot=0: vmScope[7] | vmScope[7].next().then(createChild(vm_fn_427__handleAsyncIteratorResult4, vmScope))
  return vmScope[7];
}

function vm_fn_427__handleAsyncIteratorResult4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(427, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  if (vmScope[2].done) {

  }
  // PHI@pc=22 slot=0: vmScope[2].value | vmScope[0][7].next()
  return vmScope[2].value;
}

function vm_fn_428__returnThis12(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_429__getGeneratorTag4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "[object Generator]";
}

function vm_fn_430(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object(vmScope[2]);
  vmScope[4] = [];
  for (vmScope[5] in vmScope[3]) {
    vmScope[4].push(vmScope[5]);
  }
  vmScope[4].reverse();
  vmScope[7] = createChild(vm_fn_431__nextObjectKeyIterator4, vmScope);
  return createChild(vm_fn_431__nextObjectKeyIterator4, vmScope);
}

function vm_fn_431__nextObjectKeyIterator4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(431, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(431, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(431, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  while (vmScope[0][4].length) {
    vmScope[2] = vmScope[0][4].pop();
    if ((vmScope[2] in vmScope[0][3])) {
      vmScope[0][7]["value"] = vmScope[2];
      // POP vmScope[2]
      vmScope[0][7]["done"] = (!1);
      // POP (!1)
      return vmScope[0][7];
    }
    // block boundary after return @pc=50
    // incoming false-branch from pc=25
  }
  // L53:
  // block boundary after jump @pc=51
  // incoming false-branch from pc=5
  vmScope[0][7]["done"] = (!0);
  // POP (!0)
  return vmScope[0][7];
}

function vm_fn_432__resetGeneratorContext4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(432, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(432, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(432, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmThis["prev"] = 0;
  // POP 0
  vmThis["next"] = 0;
  // POP 0
  vmThis["_sent"] = vmScope[0][2];
  vmThis["sent"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis["done"] = (!1);
  // POP (!1)
  vmThis["delegate"] = null;
  // POP null
  vmThis["method"] = "next";
  // POP "next"
  vmThis["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis.tryEntries.forEach(vmScope[0][31]);
  if (!((!vmScope[2]))) { /* goto L142; */ }
  while ((/* enum-next */ (vmScope[3] = __vm_enum_next_key(vmThis)), vmScope[3] !== undefined)) {
    // incoming keep-false from pc=96
    // incoming keep-false from pc=110
    if (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1)))))) {
      vmThis[vmScope[3]] = vmScope[0][2];
    }
    // incoming keep-false from pc=129
    (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1))))) && vmScope[0][2]);
  }
  // L142:
  // block boundary after jump @pc=140
  // incoming false-branch from pc=71
  // incoming false-branch from pc=81
  return undefined;
}

function vm_fn_433__stopGeneratorContext4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmThis.done = (!0);
  vmScope[2] = vmThis.tryEntries["0"].completion;
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  return vmThis.rval;
}

function vm_fn_434__dispatchException4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(434, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_435__handleExceptionEntry4, vmScope);
  if (vmThis.done) {
    throw vmScope[2];
  }
  // block boundary after throw @pc=13
  // incoming false-branch from pc=8
  vmScope[3] = vmThis;
  vmScope[5] = (vmThis.tryEntries.length - 1);
  // L29:
  if (!((vmScope[5] >= 0))) { /* goto L255; */ }
  vmScope[6] = vmThis.tryEntries[vmScope[5]];
  vmScope[7] = vmScope[6].completion;
  if (("root" === vmScope[6].tryLoc)) {
    return vmScope[4]("end");
  }
  // block boundary after return @pc=73
  // incoming false-branch from pc=63
  if (!((vmScope[6].tryLoc <= vmThis.prev))) { /* goto L248; */ }
  vmScope[8] = vmScope[0][5].call(vmScope[6], "catchLoc");
  vmScope[9] = vmScope[0][5].call(vmScope[6], "finallyLoc");
  // incoming keep-false from pc=120
  if ((vmScope[8] && vmScope[9])) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=152
    // incoming false-branch from pc=136
    if ((vmThis.prev < vmScope[6].finallyLoc)) {
      return vmScope[4](vmScope[6].finallyLoc);
    }
    // block boundary after return @pc=175
    // incoming false-branch from pc=162
    /* goto L248; */
  }
  // L178:
  // block boundary after jump @pc=176
  // incoming false-branch from pc=125
  if (vmScope[8]) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=208
    // incoming false-branch from pc=192
    /* goto L248; */
  }
  // L211:
  // block boundary after jump @pc=209
  // incoming false-branch from pc=181
  if ((!vmScope[9])) {
    throw Error("try statement without catch or finally");
  }
  // block boundary after throw @pc=224
  // incoming false-branch from pc=215
  if ((vmThis.prev < vmScope[6].finallyLoc)) {
    return vmScope[4](vmScope[6].finallyLoc);
  }
  // L248:
  // L248:
  // block boundary after return @pc=247
  // incoming false-branch from pc=83
  // incoming from pc=176
  // incoming from pc=209
  // incoming false-branch from pc=234
  --vmScope[5];
  /* goto L29; */
  // L255:
  // block boundary after jump @pc=253
  // incoming false-branch from pc=35
  return undefined;
}

function vm_fn_435__handleExceptionEntry4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(435, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(435, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(435, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(435, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[0][7]["type"] = "throw";
  // POP "throw"
  vmScope[0][7]["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmScope[0][3]["next"] = vmScope[2];
  // POP vmScope[2]
  if (vmScope[3]) {
    vmScope[0][3]["method"] = "next";
    // POP "next"
    vmScope[0][3]["arg"] = vmScope[0][0][2];
  }
  // POP (vmScope[3] && vmScope[0][0][2])
  return (!(!vmScope[3]));
}

function vm_fn_436__abrupt4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(436, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(436, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[4] = (vmThis.tryEntries.length - 1);
  // L11:
  if ((vmScope[4] >= 0)) {
    vmScope[5] = vmThis.tryEntries[vmScope[4]];
    // incoming keep-false from pc=38
    // incoming keep-false from pc=53
    if ((((vmScope[5].tryLoc <= vmThis.prev) && vmScope[0][5].call(vmScope[5], "finallyLoc")) && (vmThis.prev < vmScope[5].finallyLoc))) {
      vmScope[6] = vmScope[5];
    } else {
      // block boundary after jump @pc=72
      // incoming false-branch from pc=64
      --vmScope[4];
      /* goto L11; */
    }
  }
  // L81:
  // L81:
  // block boundary after jump @pc=79
  // incoming false-branch from pc=17
  // incoming from pc=72
  if (vmScope[6]) {
    if (("break" === vmScope[2])) { /* goto L100; */ } // keep-top
  }
  // L100:
  // L100:
  // incoming keep-false from pc=84
  // incoming keep-true from pc=92
  // incoming keep-false from pc=100
  // incoming keep-false from pc=111
  if (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc))) {
    vmScope[6] = null;
  }
  // incoming keep-false from pc=122
  // POP (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc)) && null)
  if (vmScope[6]) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=133
  }
  // incoming from pc=140
  // PHI@pc=143 slot=0: vmScope[6].completion | {}
  vmScope[7] = vmScope[6].completion;
  vmScope[7]["type"] = vmScope[2];
  // POP vmScope[2]
  vmScope[7]["arg"] = vmScope[3];
  // POP vmScope[3]
  if (vmScope[6]) {
    vmThis["method"] = "next";
    // POP "next"
    vmThis["next"] = vmScope[6].finallyLoc;
    // POP vmScope[6].finallyLoc
  } else {
    // block boundary after jump @pc=191
    // incoming false-branch from pc=169
  }
  // incoming from pc=191
  // PHI@pc=202 slot=0: vmScope[0][18] | vmThis.complete(vmScope[7])
  return vmScope[0][18];
}

function vm_fn_437__complete4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(437, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  // block boundary after throw @pc=15
  // incoming false-branch from pc=8
  // incoming keep-true from pc=24
  if ((("break" === vmScope[2].type) || ("continue" === vmScope[2].type))) {
    vmThis["next"] = vmScope[2].arg;
    /* goto L108; */
  }
  // block boundary after jump @pc=45
  // incoming false-branch from pc=34
  if (("return" === vmScope[2].type)) {
    vmThis["arg"] = vmScope[2].arg;
    vmThis["rval"] = vmScope[2].arg;
    // POP vmScope[2].arg
    vmThis["method"] = "return";
    // POP "return"
    vmThis["next"] = "end";
    /* goto L108; */
  }
  // block boundary after jump @pc=84
  // incoming false-branch from pc=55
  // incoming keep-false from pc=94
  if ((("normal" === vmScope[2].type) && vmScope[3])) {
    vmThis["next"] = vmScope[3];
  }
  // L108:
  // L108:
  // incoming from pc=45
  // incoming from pc=84
  // incoming keep-false from pc=99
  // POP vmScope[3]
  return vmScope[0][18];
}

function vm_fn_438__finishFinallyEntry4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(438, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(438, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  while ((vmScope[3] >= 0)) {
    vmScope[4] = vmThis.tryEntries[vmScope[3]];
    if ((vmScope[4].finallyLoc === vmScope[2])) {
      vmThis.complete(vmScope[4].completion, vmScope[4].afterLoc);
      vmScope[0][31](vmScope[4]);
      return vmScope[0][18];
    }
    // block boundary after return @pc=70
    // incoming false-branch from pc=38
    --vmScope[3];
  }
  // L78:
  // block boundary after jump @pc=76
  // incoming false-branch from pc=17
  return undefined;
}

function vm_fn_439__catchTryEntry4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(439, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  // L11:
  if (!((vmScope[3] >= 0))) { /* goto L87; */ }
  vmScope[4] = vmThis.tryEntries[vmScope[3]];
  if ((vmScope[4].tryLoc === vmScope[2])) {
    vmScope[5] = vmScope[4].completion;
    if (("throw" === vmScope[5].type)) {
      vmScope[6] = vmScope[5].arg;
      vmScope[0][31](vmScope[4]);
    }
    // incoming false-branch from pc=56
    return vmScope[6];
  }
  // L80:
  // block boundary after return @pc=79
  // incoming false-branch from pc=38
  --vmScope[3];
  /* goto L11; */
  // L87:
  // block boundary after jump @pc=85
  // incoming false-branch from pc=17
  throw Error("illegal catch attempt");
  // block boundary after throw @pc=94
  return undefined;
}

function vm_fn_440__delegateYield4(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(440, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(440, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(440, "vmScope[0][33]", 1, 33, vmScope[0][33]);
  vmThis["delegate"] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true })
  if (("next" === vmThis.method)) {
    vmThis["arg"] = vmScope[0][2];
  }
  // POP (("next" === vmThis.method) && vmScope[0][2])
  return vmScope[0][18];
}

function vm_fn_441__ownKeys2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[4] = Object.keys(vmScope[2]);
  if (Object.getOwnPropertySymbols) {
    vmScope[5] = Object.getOwnPropertySymbols(vmScope[2]);
    if (vmScope[3]) {
      vmScope[5] = vmScope[5].filter(createChild(vm_fn_442__isEnumerableProperty2, vmScope));
    }
    // incoming keep-false from pc=35
    (vmScope[3] && vmScope[5].filter(createChild(vm_fn_442__isEnumerableProperty2, vmScope)));
    vmScope[4].push.apply(vmScope[4], vmScope[5]);
  }
  // L69:
  // incoming false-branch from pc=17
  return vmScope[4];
}

function vm_fn_442__isEnumerableProperty2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(442, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return Object.getOwnPropertyDescriptor(vmScope[0][2], vmScope[2]).enumerable;
}

function vm_fn_443(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(443, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[3] = 1;
  // L5:
  if (!((vmScope[3] < vmScope[1].length))) { /* goto L131; */ }
  if ((null != vmScope[1][vmScope[3]])) {

  } else {
    // block boundary after jump @pc=34
    // incoming false-branch from pc=25
  }
  // incoming from pc=34
  // PHI@pc=37 slot=0: vmScope[1][vmScope[3]] | {}
  vmScope[4] = vmScope[1][vmScope[3]];
  if ((vmScope[3] % 2)) {
    /* goto L123; */
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=46
  if (Object.getOwnPropertyDescriptors) {

  } else {
    // block boundary after jump @pc=100
    // incoming false-branch from pc=78
  }
  // L123:
  // L123:
  // incoming from pc=72
  // incoming from pc=100
  // PHI@pc=123 slot=0: vmScope[0][4](Object(vmScope[4]), (!0)).forEach(createChild(vm_fn_444__copyPropertyValue2, vmScope)) | Object.defineProperties(vmScope[2], Object.getOwnPropertyDescriptors(vmScope[4])) | vmScope[0][4](Object(vmScope[4])).forEach(createChild(vm_fn_445__copyPropertyDescriptor2, vmScope))
  vmScope[0][4](Object(vmScope[4]), (!0)).forEach(createChild(vm_fn_444__copyPropertyValue2, vmScope));
  vmScope[3]++;
  /* goto L5; */
  // L131:
  // block boundary after jump @pc=129
  // incoming false-branch from pc=14
  return vmScope[2];
}

function vm_fn_444__copyPropertyValue2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(444, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(444, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(444, "vmScope[0][0][6]", 2, 6, vmScope[0][0][6]);
  vmScope[0][0][6](vmScope[0][2], vmScope[2], vmScope[0][4][vmScope[2]]);
  return undefined;
}

function vm_fn_445__copyPropertyDescriptor2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(445, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(445, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  Object.defineProperty(vmScope[0][2], vmScope[2], Object.getOwnPropertyDescriptor(vmScope[0][4], vmScope[2]));
  return undefined;
}

function vm_fn_446__defineEnumerableProperty22(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(446, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[3] = vmScope[0][7](vmScope[3]);
  if ((vmScope[0][7](vmScope[3]) in vmScope[2])) {

  } else {
    vmScope[2][vmScope[3]] = vmScope[4];
  }
  // PHI@pc=65 slot=0: Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true })) | vmScope[4]
  vmScope[4];
  return vmScope[2];
}

function vm_fn_447__toPropertyKey32(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(447, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(447, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[3] = vmScope[0][8](vmScope[2], "string");
  if (("symbol" == vmScope[0][2](vmScope[3]))) {

  }
  // PHI@pc=39 slot=0: vmScope[3] | (vmScope[3] + "")
  return vmScope[3];
}

function vm_fn_448__toPrimitive4(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(448, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  // incoming keep-true from pc=12
  if ((("object" != vmScope[0][2](vmScope[2])) || (!vmScope[2]))) {
    return vmScope[2];
  }
  // block boundary after return @pc=23
  // incoming false-branch from pc=18
  vmScope[4] = vmScope[2][Symbol.toPrimitive];
  if ((undefined !== vmScope[4])) {
    // incoming keep-true from pc=56
    vmScope[5] = vmScope[4].call(vmScope[2], (vmScope[3] || "default"));
    if (("object" != vmScope[0][2](vmScope[5]))) {
      return vmScope[5];
    }
    // block boundary after return @pc=82
    // incoming false-branch from pc=77
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  // L90:
  // block boundary after throw @pc=89
  // incoming false-branch from pc=42
  if (("string" === vmScope[3])) {

  } else {
    // block boundary after jump @pc=101
    // incoming false-branch from pc=97
  }
  // incoming from pc=101
  return String(vmScope[2]);
}

function vm_fn_449__asyncGeneratorStep4(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 7, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_7 = arg5;
  const scope_0_8 = arg6;
  try {
    vmScope[9] = vmScope[2][vmScope[7]].call(vmScope[2], vmScope[8]);
    vmScope[10] = vmScope[9].value;
    if (vmScope[9].done) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=45
    }
  } catch (__vm_caught_exception) {
    vmScope[11] = __vm_caught_exception;
    return undefined;
  }
  // incoming from pc=56
  // PHI@pc=79 slot=0: vmScope[3](vmScope[10]) | Promise.resolve(vmScope[10]).then(vmScope[5], vmScope[6])
  vmScope[3](vmScope[10]);
  return undefined;
}

function vm_fn_450__asyncToGenerator4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  return createChild(vm_fn_451, vmScope);
}

function vm_fn_451(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = vmThis;
  vmScope[3] = vmScope[1];
  return new Promise(createChild(vm_fn_452, vmScope));
}

function vm_fn_452(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(452, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(452, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(452, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = createChild(vm_fn_453__asyncToGeneratorNext22, vmScope);
  vmScope[6] = createChild(vm_fn_454__asyncToGeneratorThrow22, vmScope);
  vmScope[4] = vmScope[0][0][2].apply(vmScope[0][2], vmScope[0][3]);
  vmScope[5](undefined);
  return undefined;
}

function vm_fn_453__asyncToGeneratorNext22(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(453, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(453, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(453, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(453, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(453, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(453, "vmScope[0][0][0][0][9]", 4, 9, vmScope[0][0][0][0][9]);
  vmScope[0][0][0][0][9](vmScope[0][4], vmScope[0][2], vmScope[0][3], vmScope[0][5], vmScope[0][6], "next", vmScope[2]);
  return undefined;
}

function vm_fn_454__asyncToGeneratorThrow22(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(454, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(454, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(454, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(454, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(454, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(454, "vmScope[0][0][0][0][9]", 4, 9, vmScope[0][0][0][0][9]);
  vmScope[0][0][0][0][9](vmScope[0][4], vmScope[0][2], vmScope[0][3], vmScope[0][5], vmScope[0][6], "throw", vmScope[2]);
  return undefined;
}

function vm_fn_455__collectOfflineAudioFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return new Promise(createChild(vm_fn_456__runOfflineAudioFingerprint, vmScope)).then(createChild(vm_fn_461__wrapAudioFingerprintResult, vmScope)).catch(createChild(vm_fn_462, vmScope));
}

function vm_fn_456__runOfflineAudioFingerprint(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "audio", { value: Object.defineProperty(Object.defineProperty({}, "timeout", { value: 1000, writable: true, configurable: true, enumerable: true }), "excludeIOS11", { value: true, writable: true, configurable: true, enumerable: true }), writable: true, configurable: true, enumerable: true });
  vmScope[4] = vmScope[3].audio;
  if ((vmScope[4].excludeIOS11 && navigator.userAgent.match(new RegExp("OS 11.+Version\\/11.+Safari")))) {
    return vmScope[2](vmScope[3].EXCLUDED);
  }
  vmScope[5] = (window.OfflineAudioContext || window.webkitOfflineAudioContext);
  if ((vmScope[5] == null)) {
    return vmScope[2](vmScope[3].NOT_AVAILABLE);
  }
  vmScope[6] = new vmScope[5](1, 44100, 44100);
  vmScope[7] = vmScope[6].createOscillator();
  vmScope[7].type = "triangle";
  vmScope[7].frequency.setValueAtTime(10000, vmScope[6].currentTime);
  vmScope[8] = vmScope[6].createDynamicsCompressor();
  [["threshold", (-50)], ["knee", 40], ["ratio", 12], ["reduction", (-20)], ["attack", 0], ["release", "0.25"]].forEach(createChild(vm_fn_457, vmScope));
  vmScope[7].connect(vmScope[8]);
  vmScope[8].connect(vmScope[6].destination);
  vmScope[7].start(0);
  vmScope[6].startRendering();
  vmScope[9] = setTimeout(createChild(vm_fn_458, vmScope), vmScope[4].timeout);
  vmScope[6].oncomplete = createChild(vm_fn_459, vmScope);
  return undefined;
}

function vm_fn_457(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(457, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(457, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[3] = vmScope[0][8][vmScope[2]["0"]];
  if (((vmScope[3] !== undefined) && (typeof vmScope[3].setValueAtTime === "function"))) {
    vmScope[3].setValueAtTime(vmScope[2]["1"], vmScope[0][6].currentTime);
  }
  return undefined;
}

function vm_fn_458(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(458, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  vmScope[0][6] = null;
  return vmScope[0][2]("audioTimeout");
}

function vm_fn_459(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(459, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(459, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(459, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(459, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  try {
    clearTimeout(vmScope[0][9]);
    vmScope[3] = vmScope[2].renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(createChild(vm_fn_460, vmScope), 0).toString();
    vmScope[0][7].disconnect();
    vmScope[0][8].disconnect();
    vmScope[0][2](vmScope[3]);
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
    vmScope[0][2](vmScope[4]);
    return undefined;
  }
  return undefined;
}

function vm_fn_460(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  return (vmScope[2] + Math.abs(vmScope[3]));
}

function vm_fn_461__wrapAudioFingerprintResult(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "audioFp", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_462(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return {};
}

function vm_fn_463__collectAudioContextInfo(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[8] = {};
  vmScope[9] = {};
  vmScope[10] = (window.AudioContext || window.webkitAudioContext);
  vmScope[11] = new vmScope[10]();
  vmScope[2] = vmScope[11].destination;
  if (((vmScope[11].destination === null) || (vmScope[2] === undefined))) {

  }
  vmScope[8].channelCount = vmScope[2].channelCount;
  vmScope[3] = vmScope[11].destination;
  if (((vmScope[11].destination === null) || (vmScope[3] === undefined))) {

  }
  vmScope[8].channelCountMode = vmScope[3].channelCountMode;
  vmScope[4] = vmScope[11].destination;
  if (((vmScope[11].destination === null) || (vmScope[4] === undefined))) {

  }
  vmScope[8].channelInterpretation = vmScope[4].channelInterpretation;
  vmScope[5] = vmScope[11].destination;
  if (((vmScope[11].destination === null) || (vmScope[5] === undefined))) {

  }
  vmScope[8].maxChannelCount = vmScope[5].maxChannelCount;
  vmScope[6] = vmScope[11].destination;
  if (((vmScope[11].destination === null) || (vmScope[6] === undefined))) {

  }
  vmScope[8].numberOfInputs = vmScope[6].numberOfInputs;
  vmScope[7] = vmScope[11].destination;
  if (((vmScope[11].destination === null) || (vmScope[7] === undefined))) {

  }
  vmScope[8].numberOfOutputs = vmScope[7].numberOfOutputs;
  vmScope[8].sampleRate = vmScope[11].sampleRate;
  vmScope[8].state = vmScope[11].state;
  vmScope[12] = vmScope[11].createAnalyser();
  vmScope[9].channelCount = vmScope[12].channelCount;
  vmScope[9].channelCountMode = vmScope[12].channelCountMode;
  vmScope[9].channelInterpretation = vmScope[12].channelInterpretation;
  vmScope[9].fftSize = vmScope[12].fftSize;
  vmScope[9].frequencyBinCount = vmScope[12].frequencyBinCount;
  vmScope[9].maxDecibels = vmScope[12].maxDecibels;
  vmScope[9].minDecibels = vmScope[12].minDecibels;
  vmScope[9].numberOfInputs = vmScope[12].numberOfInputs;
  vmScope[9].numberOfOutputs = vmScope[12].numberOfOutputs;
  vmScope[9].smoothingTimeConstant = vmScope[12].smoothingTimeConstant;
  vmScope[11].close();
  return Object.defineProperty(Object.defineProperty({}, "audioContext", { value: vmScope[8], writable: true, configurable: true, enumerable: true }), "frequencyAnalyser", { value: vmScope[9], writable: true, configurable: true, enumerable: true });
}

function vm_fn_464__invokeAudioFingerprintAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(464, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  return vmScope[0][13].apply(vmThis, vmScope[1]);
}

function vm_fn_465__createAudioFingerprintAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(465, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(465, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(465, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  vmScope[2] = createChild(vm_fn_466__createAudioFingerprintGenerator, vmScope);
  vmScope[0][13] = vmScope[0][10](vmScope[0][3]().mark(createChild(vm_fn_466__createAudioFingerprintGenerator, vmScope)));
  return vmScope[0][13].apply(vmThis, vmScope[1]);
}

function vm_fn_466__createAudioFingerprintGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(466, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(466, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  vmScope[6] = createChild(vm_fn_467__collectAudioFingerprintPayload, vmScope);
  return vmScope[0][0][3]().wrap(createChild(vm_fn_467__collectAudioFingerprintPayload, vmScope), vmScope[0][2], null, [[1, 11]]);
}

function vm_fn_467__collectAudioFingerprintPayload(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(467, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(467, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(467, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(467, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(467, "vmScope[0][0][0][5]", 3, 5, vmScope[0][0][0][5]);
  __vmReportCapturedBinding(467, "vmScope[0][0][0][11]", 3, 11, vmScope[0][0][0][11]);
  __vmReportCapturedBinding(467, "vmScope[0][0][0][12]", 3, 12, vmScope[0][0][0][12]);
  // L0:
  if (!(1)) { /* goto L216; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 7)) { /* goto L126; */ } // keep-top
    if ((vmScope[2].next === 11)) { /* goto L169; */ } // keep-top
    if ((vmScope[2].next === 13)) { /* goto L191; */ } // keep-top
    if ((vmScope[2].next === 14)) { /* goto L205; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L205; */ } // keep-top
    // POP vmScope[2].next
    /* goto L214; */
  }
  // block boundary after jump @pc=40
  // incoming strict-eq branch from pc=17
  vmScope[0][2] = {};
  vmScope[2].prev = 1;
  vmScope[0][3] = vmScope[0][0][0][12]();
  vmScope[0][0][0][12]();
  vmScope[0][4] = vmScope[0][3].audioContext;
  // POP vmScope[0][3].audioContext
  vmScope[0][5] = vmScope[0][3].frequencyAnalyser;
  // POP vmScope[0][3].frequencyAnalyser
  vmScope[2].t0 = vmScope[0][0][0][5];
  vmScope[2].t1 = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "audioFormats", { value: "", writable: true, configurable: true, enumerable: true }), "audioContext", { value: vmScope[0][4], writable: true, configurable: true, enumerable: true }), "frequencyAnalyser", { value: vmScope[0][5], writable: true, configurable: true, enumerable: true });
  vmScope[2].next = 7;
  return vmScope[0][0][0][11]();
  // L126:
  // block boundary after return @pc=125
  // incoming strict-eq branch from pc=21
  vmScope[2].t2 = vmScope[2].sent;
  // POP 0
  vmScope[0][2] = vmScope[2].t0(vmScope[2].t1, vmScope[2].t2);
  vmScope[2].next = 13;
  /* goto L214; */
  // L169:
  // block boundary after jump @pc=167
  // incoming strict-eq branch from pc=25
  vmScope[2].prev = 11;
  vmScope[2].t3 = vmScope[2].catch(1);
  return vmScope[2].abrupt("return", vmScope[0][2]);
  // L205:
  // block boundary after return @pc=204
  // incoming strict-eq branch from pc=33
  // incoming strict-eq branch from pc=37
  return vmScope[2].stop();
  // L214:
  // block boundary after return @pc=213
  // incoming from pc=40
  // incoming from pc=167
  // STACK_MERGE_CONFLICT @pc=214: heights=0, 1
  /* goto L0; */
  // L216:
  // block boundary after jump @pc=214
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_468__initializeCanvasFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_469__typeofHelper104, vmScope);
  vmScope[3] = createChild(vm_fn_472__ownKeys3, vmScope);
  vmScope[4] = createChild(vm_fn_474__objectSpread3, vmScope);
  vmScope[5] = createChild(vm_fn_477__defineEnumerableProperty3, vmScope);
  vmScope[6] = createChild(vm_fn_478__toPropertyKey4, vmScope);
  vmScope[7] = createChild(vm_fn_479__toPrimitive5, vmScope);
  vmScope[8] = createChild(vm_fn_480__isCanvasSupported, vmScope);
  vmScope[9] = createChild(vm_fn_481__collectCanvasFingerprint, vmScope);
  vmScope[0][1] = createChild(vm_fn_482, vmScope);
  return undefined;
}

function vm_fn_469__typeofHelper104(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(469, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_470__baseTypeof6, vmScope) | createChild(vm_fn_471__symbolAwareTypeof6, vmScope)
  vmScope[0][2] = createChild(vm_fn_470__baseTypeof6, vmScope);
  // POP createChild(vm_fn_470__baseTypeof6, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_470__baseTypeof6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_471__symbolAwareTypeof6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_472__ownKeys3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  vmScope[4] = Object.keys(vmScope[2]);
  if (Object.getOwnPropertySymbols) {
    vmScope[5] = Object.getOwnPropertySymbols(vmScope[2]);
    if (vmScope[3]) {
      vmScope[5] = vmScope[5].filter(createChild(vm_fn_473__isEnumerableProperty3, vmScope));
    }
    // incoming keep-false from pc=35
    (vmScope[3] && vmScope[5].filter(createChild(vm_fn_473__isEnumerableProperty3, vmScope)));
    vmScope[4].push.apply(vmScope[4], vmScope[5]);
  }
  // L69:
  // incoming false-branch from pc=17
  return vmScope[4];
}

function vm_fn_473__isEnumerableProperty3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(473, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return Object.getOwnPropertyDescriptor(vmScope[0][2], vmScope[2]).enumerable;
}

function vm_fn_474__objectSpread3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(474, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[3] = 1;
  // L5:
  if (!((vmScope[3] < vmScope[1].length))) { /* goto L131; */ }
  if ((null != vmScope[1][vmScope[3]])) {

  } else {
    // block boundary after jump @pc=34
    // incoming false-branch from pc=25
  }
  // incoming from pc=34
  // PHI@pc=37 slot=0: vmScope[1][vmScope[3]] | {}
  vmScope[4] = vmScope[1][vmScope[3]];
  if ((vmScope[3] % 2)) {
    /* goto L123; */
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=46
  if (Object.getOwnPropertyDescriptors) {

  } else {
    // block boundary after jump @pc=100
    // incoming false-branch from pc=78
  }
  // L123:
  // L123:
  // incoming from pc=72
  // incoming from pc=100
  // PHI@pc=123 slot=0: vmScope[0][3](Object(vmScope[4]), (!0)).forEach(createChild(vm_fn_475, vmScope)) | Object.defineProperties(vmScope[2], Object.getOwnPropertyDescriptors(vmScope[4])) | vmScope[0][3](Object(vmScope[4])).forEach(createChild(vm_fn_476__copyPropertyDescriptor3, vmScope))
  vmScope[0][3](Object(vmScope[4]), (!0)).forEach(createChild(vm_fn_475, vmScope));
  vmScope[3]++;
  /* goto L5; */
  // L131:
  // block boundary after jump @pc=129
  // incoming false-branch from pc=14
  return vmScope[2];
}

function vm_fn_475(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(475, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(475, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(475, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  vmScope[0][0][5](vmScope[0][2], vmScope[2], vmScope[0][4][vmScope[2]]);
  return undefined;
}

function vm_fn_476__copyPropertyDescriptor3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(476, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(476, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  Object.defineProperty(vmScope[0][2], vmScope[2], Object.getOwnPropertyDescriptor(vmScope[0][4], vmScope[2]));
  return undefined;
}

function vm_fn_477__defineEnumerableProperty3(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(477, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[3] = vmScope[0][6](vmScope[3]);
  if ((vmScope[0][6](vmScope[3]) in vmScope[2])) {

  } else {
    vmScope[2][vmScope[3]] = vmScope[4];
  }
  // PHI@pc=65 slot=0: Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true })) | vmScope[4]
  vmScope[4];
  return vmScope[2];
}

function vm_fn_478__toPropertyKey4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(478, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(478, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[3] = vmScope[0][7](vmScope[2], "string");
  if (("symbol" == vmScope[0][2](vmScope[3]))) {

  }
  // PHI@pc=39 slot=0: vmScope[3] | (vmScope[3] + "")
  return vmScope[3];
}

function vm_fn_479__toPrimitive5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(479, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  // incoming keep-true from pc=12
  if ((("object" != vmScope[0][2](vmScope[2])) || (!vmScope[2]))) {
    return vmScope[2];
  }
  // block boundary after return @pc=23
  // incoming false-branch from pc=18
  vmScope[4] = vmScope[2][Symbol.toPrimitive];
  if ((undefined !== vmScope[4])) {
    // incoming keep-true from pc=56
    vmScope[5] = vmScope[4].call(vmScope[2], (vmScope[3] || "default"));
    if (("object" != vmScope[0][2](vmScope[5]))) {
      return vmScope[5];
    }
    // block boundary after return @pc=82
    // incoming false-branch from pc=77
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  // L90:
  // block boundary after throw @pc=89
  // incoming false-branch from pc=42
  if (("string" === vmScope[3])) {

  } else {
    // block boundary after jump @pc=101
    // incoming false-branch from pc=97
  }
  // incoming from pc=101
  return String(vmScope[2]);
}

function vm_fn_480__isCanvasSupported(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = document.createElement("canvas");
  return (!(!(vmScope[2].getContext && vmScope[2].getContext("2d"))));
}

function vm_fn_481__collectCanvasFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(481, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = {};
  vmScope[3] = document.createElement("canvas");
  vmScope[3].width = 2000;
  vmScope[3].height = 200;
  vmScope[3].style.display = "inline";
  vmScope[4] = vmScope[3].getContext("2d");
  if (vmScope[4]) {
    vmScope[4].rect(0, 0, 10, 10);
    vmScope[4].rect(2, 2, 6, 6);
    if ((vmScope[4].isPointInPath(5, 5, "evenodd") === false)) {

    } else {
      // block boundary after jump @pc=114
      // incoming false-branch from pc=110
    }
    // incoming from pc=114
    vmScope[2].canvasWinding = "yes";
    vmScope[4].textBaseline = "alphabetic";
    vmScope[4].fillStyle = "#f60";
    vmScope[4].fillRect(125, 1, 62, 20);
    vmScope[4].fillStyle = "#069";
    vmScope[4].font = "11pt no-real-font-123";
    vmScope[4].fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
    vmScope[4].fillStyle = "rgba(102, 204, 0, 0.2)";
    vmScope[4].font = "18pt Arial";
    vmScope[4].fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
    vmScope[4].globalCompositeOperation = "multiply";
    vmScope[4].fillStyle = "rgb(255,0,255)";
    vmScope[4].beginPath();
    vmScope[4].arc(50, 50, 50, 0, (Math.PI * 2), true);
    vmScope[4].closePath();
    vmScope[4].fill();
    vmScope[4].fillStyle = "rgb(0,255,255)";
    vmScope[4].beginPath();
    vmScope[4].arc(100, 50, 50, 0, (Math.PI * 2), true);
    vmScope[4].closePath();
    vmScope[4].fill();
    vmScope[4].fillStyle = "rgb(255,255,0)";
    vmScope[4].beginPath();
    vmScope[4].arc(75, 100, 50, 0, (Math.PI * 2), true);
    vmScope[4].closePath();
    vmScope[4].fill();
    vmScope[4].fillStyle = "rgb(255,0,255)";
    vmScope[4].arc(75, 75, 75, 0, (Math.PI * 2), true);
    vmScope[4].arc(75, 75, 25, 0, (Math.PI * 2), true);
    vmScope[4].fill("evenodd");
  }
  // L461:
  // incoming false-branch from pc=55
  if (vmScope[3].toDataURL) {
    vmScope[5] = vmScope[3].toDataURL();
    vmScope[2].crc32 = vmScope[0][0][0](vmScope[5]);
  }
  // incoming false-branch from pc=466
  return vmScope[2];
}

function vm_fn_482(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(482, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(482, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(482, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  try {
    vmScope[2] = {};
    vmScope[2] = vmScope[0][4](Object.defineProperty({}, "isCanvasSupported", { value: vmScope[0][8](), writable: true, configurable: true, enumerable: true }), vmScope[0][9]());
    return vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    vmScope[2] = Object.defineProperty({}, "err", { value: vmScope[3], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_483__initializeDocumentFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_484__typeofHelper105, vmScope);
  vmScope[0][0] = createChild(vm_fn_487__classifyDocumentPropertyValue, vmScope);
  vmScope[0][1] = createChild(vm_fn_488__collectDocumentFingerprint, vmScope);
  return undefined;
}

function vm_fn_484__typeofHelper105(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(484, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_485__baseTypeof7, vmScope) | createChild(vm_fn_486__symbolAwareTypeof7, vmScope)
  vmScope[0][2] = createChild(vm_fn_485__baseTypeof7, vmScope);
  // POP createChild(vm_fn_485__baseTypeof7, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_485__baseTypeof7(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_486__symbolAwareTypeof7(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_487__classifyDocumentPropertyValue(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(487, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  try {
    vmScope[4] = {};
    vmScope[4] = vmScope[2][vmScope[3]];
    vmScope[5] = Object.prototype.toString.call(vmScope[4]);
  } catch (__vm_caught_exception) {
    vmScope[6] = __vm_caught_exception;
    return 404;
  }
  if ((vmScope[5] === "[object Boolean]")) {
    if ((vmScope[4] === true)) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=52
    }
    // incoming from pc=56
    // PHI@pc=60 slot=0: 1 | 2
    return 1;
  }
  // L61:
  // block boundary after return @pc=60
  // incoming false-branch from pc=45
  if ((vmScope[5] === "[object Function]")) {
    return 3;
  }
  // block boundary after return @pc=71
  // incoming false-branch from pc=67
  if ((vmScope[5] === "[object Undefined]")) {
    return 4;
  }
  // block boundary after return @pc=82
  // incoming false-branch from pc=78
  if ((vmScope[5] === "[object Number]")) {
    return 5;
  }
  // block boundary after return @pc=93
  // incoming false-branch from pc=89
  if ((vmScope[5] === "[object String]")) {
    if ((vmScope[4] === "")) {

    } else {
      // block boundary after jump @pc=112
      // incoming false-branch from pc=108
    }
    // incoming from pc=112
    // PHI@pc=116 slot=0: 7 | 8
    return 7;
  }
  // L117:
  // block boundary after return @pc=116
  // incoming false-branch from pc=100
  if ((vmScope[5] === "[object Array]")) {
    if ((vmScope[4].length === 0)) {

    } else {
      // block boundary after jump @pc=137
      // incoming false-branch from pc=133
    }
    // incoming from pc=137
    // PHI@pc=141 slot=0: 9 | 10
    return 9;
  }
  // L142:
  // block boundary after return @pc=141
  // incoming false-branch from pc=123
  if ((vmScope[5] === "[object Object]")) {
    return 11;
  }
  // block boundary after return @pc=152
  // incoming false-branch from pc=148
  if ((vmScope[5] === "[object HTMLAllCollection]")) {
    return 12;
  }
  // block boundary after return @pc=163
  // incoming false-branch from pc=159
  if ((vmScope[5] === "[object Storage]")) {
    return 13;
  }
  // block boundary after return @pc=174
  // incoming false-branch from pc=170
  if ((vmScope[0][2](vmScope[4]) === "object")) {
    return 99;
  }
  // block boundary after return @pc=191
  // incoming false-branch from pc=187
  return (-1);
}

function vm_fn_488__collectDocumentFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(488, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "all", { value: vmScope[0][0][0](document, "all"), writable: true, configurable: true, enumerable: true }), "characterSet", { value: (document.characterSet + ""), writable: true, configurable: true, enumerable: true }), "compatMode", { value: (document.compatMode + ""), writable: true, configurable: true, enumerable: true }), "documentMode", { value: (document.documentMode + ""), writable: true, configurable: true, enumerable: true }), "images", { value: vmScope[0][0][0](document, "images"), writable: true, configurable: true, enumerable: true }), "layers", { value: vmScope[0][0][0](document, "layers"), writable: true, configurable: true, enumerable: true });
}

function vm_fn_489__initializeMathFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_490, vmScope);
  return undefined;
}

function vm_fn_490(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = Math;
    vmScope[29] = createChild(vm_fn_491__returnZeroFallback, vmScope);
    vmScope[3] = createChild(vm_fn_491__returnZeroFallback, vmScope);
    // incoming keep-true from pc=19
    vmScope[4] = (vmScope[2].acos || vmScope[3]);
    // incoming keep-true from pc=32
    vmScope[5] = (vmScope[2].acosh || vmScope[3]);
    // incoming keep-true from pc=45
    vmScope[6] = (vmScope[2].asin || vmScope[3]);
    // incoming keep-true from pc=58
    vmScope[7] = (vmScope[2].asinh || vmScope[3]);
    // incoming keep-true from pc=71
    vmScope[8] = (vmScope[2].atanh || vmScope[3]);
    // incoming keep-true from pc=84
    vmScope[9] = (vmScope[2].atan || vmScope[3]);
    // incoming keep-true from pc=97
    vmScope[10] = (vmScope[2].sin || vmScope[3]);
    // incoming keep-true from pc=110
    vmScope[11] = (vmScope[2].sinh || vmScope[3]);
    // incoming keep-true from pc=123
    vmScope[12] = (vmScope[2].cos || vmScope[3]);
    // incoming keep-true from pc=136
    vmScope[13] = (vmScope[2].cosh || vmScope[3]);
    // incoming keep-true from pc=149
    vmScope[14] = (vmScope[2].tan || vmScope[3]);
    // incoming keep-true from pc=162
    vmScope[15] = (vmScope[2].tanh || vmScope[3]);
    // incoming keep-true from pc=175
    vmScope[16] = (vmScope[2].exp || vmScope[3]);
    // incoming keep-true from pc=188
    vmScope[17] = (vmScope[2].expm1 || vmScope[3]);
    // incoming keep-true from pc=201
    vmScope[18] = (vmScope[2].log1p || vmScope[3]);
    vmScope[30] = createChild(vm_fn_492__computePowPi, vmScope);
    vmScope[19] = createChild(vm_fn_492__computePowPi, vmScope);
    vmScope[31] = createChild(vm_fn_493__computeAcoshPolyfill, vmScope);
    vmScope[20] = createChild(vm_fn_493__computeAcoshPolyfill, vmScope);
    vmScope[32] = createChild(vm_fn_494__computeAsinhPolyfill, vmScope);
    vmScope[21] = createChild(vm_fn_494__computeAsinhPolyfill, vmScope);
    vmScope[33] = createChild(vm_fn_495__computeAtanhPolyfill, vmScope);
    vmScope[22] = createChild(vm_fn_495__computeAtanhPolyfill, vmScope);
    vmScope[34] = createChild(vm_fn_496__computeSinhPolyfill, vmScope);
    vmScope[23] = createChild(vm_fn_496__computeSinhPolyfill, vmScope);
    vmScope[35] = createChild(vm_fn_497__computeCoshPolyfill, vmScope);
    vmScope[24] = createChild(vm_fn_497__computeCoshPolyfill, vmScope);
    vmScope[36] = createChild(vm_fn_498__computeExpm1Polyfill, vmScope);
    vmScope[25] = createChild(vm_fn_498__computeExpm1Polyfill, vmScope);
    vmScope[37] = createChild(vm_fn_499__computeTanhPolyfill, vmScope);
    vmScope[26] = createChild(vm_fn_499__computeTanhPolyfill, vmScope);
    vmScope[38] = createChild(vm_fn_500__computeLog1pPolyfill, vmScope);
    vmScope[27] = createChild(vm_fn_500__computeLog1pPolyfill, vmScope);
    vmScope[28] = {};
    vmScope[28] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "acos", { value: vmScope[4]("0.12312423423423424"), writable: true, configurable: true, enumerable: true }), "acosh", { value: vmScope[5]("1e+308"), writable: true, configurable: true, enumerable: true }), "acoshPf", { value: vmScope[20]("1e+154"), writable: true, configurable: true, enumerable: true }), "asin", { value: vmScope[6]("0.12312423423423424"), writable: true, configurable: true, enumerable: true }), "asinh", { value: vmScope[7](1), writable: true, configurable: true, enumerable: true }), "asinhPf", { value: vmScope[21](1), writable: true, configurable: true, enumerable: true }), "atanh", { value: vmScope[8]("0.5"), writable: true, configurable: true, enumerable: true }), "atanhPf", { value: vmScope[22]("0.5"), writable: true, configurable: true, enumerable: true }), "atan", { value: vmScope[9]("0.5"), writable: true, configurable: true, enumerable: true }), "sin", { value: vmScope[10]((-"1e+300")), writable: true, configurable: true, enumerable: true }), "sinh", { value: vmScope[11](1), writable: true, configurable: true, enumerable: true }), "sinhPf", { value: vmScope[23](1), writable: true, configurable: true, enumerable: true }), "cos", { value: vmScope[12]("10.000000000123"), writable: true, configurable: true, enumerable: true }), "cosh", { value: vmScope[13](1), writable: true, configurable: true, enumerable: true }), "coshPf", { value: vmScope[24](1), writable: true, configurable: true, enumerable: true }), "tan", { value: vmScope[14]((-"1e+300")), writable: true, configurable: true, enumerable: true }), "tanh", { value: vmScope[15](1), writable: true, configurable: true, enumerable: true }), "tanhPf", { value: vmScope[26](1), writable: true, configurable: true, enumerable: true }), "exp", { value: vmScope[16](1), writable: true, configurable: true, enumerable: true }), "expm1", { value: vmScope[17](1), writable: true, configurable: true, enumerable: true }), "expm1Pf", { value: vmScope[25](1), writable: true, configurable: true, enumerable: true }), "log1p", { value: vmScope[18](10), writable: true, configurable: true, enumerable: true }), "log1pPf", { value: vmScope[27](10), writable: true, configurable: true, enumerable: true }), "powPI", { value: vmScope[19]((-100)), writable: true, configurable: true, enumerable: true });
    return vmScope[28];
  } catch (__vm_caught_exception) {
    vmScope[39] = __vm_caught_exception;
    vmScope[28] = Object.defineProperty({}, "err", { value: vmScope[39], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_491__returnZeroFallback(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return 0;
}

function vm_fn_492__computePowPi(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(492, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[0][2].pow(vmScope[0][2].PI, vmScope[2]);
}

function vm_fn_493__computeAcoshPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(493, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[0][2].log((vmScope[2] + vmScope[0][2].sqrt(((vmScope[2] * vmScope[2]) - 1))));
}

function vm_fn_494__computeAsinhPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(494, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[0][2].log((vmScope[2] + vmScope[0][2].sqrt(((vmScope[2] * vmScope[2]) + 1))));
}

function vm_fn_495__computeAtanhPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(495, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return (vmScope[0][2].log(((1 + vmScope[2]) / (1 - vmScope[2]))) / 2);
}

function vm_fn_496__computeSinhPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(496, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return (vmScope[0][2].exp(vmScope[2]) - ((1 / vmScope[0][2].exp(vmScope[2])) / 2));
}

function vm_fn_497__computeCoshPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(497, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return ((vmScope[0][2].exp(vmScope[2]) + (1 / vmScope[0][2].exp(vmScope[2]))) / 2);
}

function vm_fn_498__computeExpm1Polyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(498, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return (vmScope[0][2].exp(vmScope[2]) - 1);
}

function vm_fn_499__computeTanhPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(499, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return ((vmScope[0][2].exp((2 * vmScope[2])) - 1) / (vmScope[0][2].exp((2 * vmScope[2])) + 1));
}

function vm_fn_500__computeLog1pPolyfill(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(500, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[0][2].log((1 + vmScope[2]));
}

function vm_fn_501(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[6] = createChild(vm_fn_502__typeofHelper8, vmScope);
  vmScope[7] = createChild(vm_fn_505__createRegeneratorRuntime5, vmScope);
  vmScope[8] = createChild(vm_fn_555__createForOfIteratorHelper, vmScope);
  vmScope[9] = createChild(vm_fn_563__unsupportedIterableToArray5, vmScope);
  vmScope[10] = createChild(vm_fn_564__arrayLikeToArray5, vmScope);
  vmScope[11] = createChild(vm_fn_565__asyncGeneratorStep5, vmScope);
  vmScope[12] = createChild(vm_fn_566__asyncToGenerator5, vmScope);
  vmScope[13] = createChild(vm_fn_571__computeBrowserTypeMask, vmScope);
  vmScope[14] = createChild(vm_fn_573__collectJsFontsBitmask, vmScope);
  vmScope[15] = createChild(vm_fn_574__getJsVersion, vmScope);
  vmScope[16] = createChild(vm_fn_575__invokeLoadCapabilityAsync, vmScope);
  vmScope[17] = createChild(vm_fn_576__createLoadCapabilityAsync, vmScope);
  vmScope[18] = createChild(vm_fn_582__computeStorageAccessMask, vmScope);
  vmScope[19] = createChild(vm_fn_583__invokePermissionStatesAsync, vmScope);
  vmScope[20] = createChild(vm_fn_584__createPermissionStatesAsync, vmScope);
  vmScope[21] = createChild(vm_fn_591__getNativeEvalLength, vmScope);
  vmScope[22] = createChild(vm_fn_592__useOfSessionStorage, vmScope);
  vmScope[23] = createChild(vm_fn_593__useOfLocalStorage, vmScope);
  vmScope[24] = createChild(vm_fn_594__useOfIndexedDB, vmScope);
  vmScope[25] = createChild(vm_fn_596__detectContrastPreference, vmScope);
  vmScope[26] = createChild(vm_fn_597__detectForcedColorsActive, vmScope);
  vmScope[27] = createChild(vm_fn_598__matchesReducedMotionMedia, vmScope);
  vmScope[28] = createChild(vm_fn_599__matchesForcedColorsMedia, vmScope);
  vmScope[29] = createChild(vm_fn_600__matchesContrastMedia, vmScope);
  vmScope[30] = createChild(vm_fn_601__detectReducedMotion, vmScope);
  vmScope[31] = createChild(vm_fn_602__detectMonochromeDepth, vmScope);
  vmScope[32] = createChild(vm_fn_603__detectFloatEndiannessByte, vmScope);
  vmScope[33] = createChild(vm_fn_604__detectColorGamut, vmScope);
  vmScope[0][0] = createChild(vm_fn_605, vmScope);
  vmScope[34] = createChild(vm_fn_606__createEnvironmentFingerprintAsync, vmScope);
  vmScope[0][1] = createChild(vm_fn_609__invokePrivacyModeFingerprintAsync, vmScope);
  vmScope[35] = createChild(vm_fn_610__createPrivacyModeFingerprintAsync, vmScope);
  vmScope[2] = ["72px Trebuchet MS", "72px Wingdings", "72px Sylfaen", "72px Segoe UI", "72px Constantia", "72px SimSun-ExtB", "72px MT Extra", "72px Gulim", "72px Leelawadee", "72px Tunga", "72px Meiryo", "72px Vrinda", "72px CordiaUPC", "72px Aparajita", "72px IrisUPC", "72px Palatino", "72px Colonna MT", "72px Playbill", "72px Jokerman", "72px Parchment", "72px MS Outlook", "72px Tw Cen MT", "72px OPTIMA", "72px Futura", "72px AVENIR", "72px Arial Hebrew", "72px Savoye LET", "72px Castellar", "72px MYRIAD PRO"];
  vmScope[3] = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];
  vmScope[4] = createChild(vm_fn_595__createContrastPreferenceEnum, vmScope)((vmScope[4] || {}));
  vmScope[5] = 100;
  return undefined;
}

function vm_fn_502__typeofHelper8(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(502, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_503__baseTypeof8, vmScope) | createChild(vm_fn_504__symbolAwareTypeof8, vmScope)
  vmScope[0][6] = createChild(vm_fn_503__baseTypeof8, vmScope);
  // POP createChild(vm_fn_503__baseTypeof8, vmScope)
  return vmScope[0][6](vmScope[2]);
}

function vm_fn_503__baseTypeof8(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_504__symbolAwareTypeof8(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_505__createRegeneratorRuntime5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[11] = createChild(vm_fn_508__defineIteratorMethod5, vmScope);
    vmScope[12] = createChild(vm_fn_510__wrapGeneratorFunction5, vmScope);
    vmScope[13] = createChild(vm_fn_511, vmScope);
    vmScope[19] = createChild(vm_fn_512, vmScope);
    vmScope[20] = createChild(vm_fn_513, vmScope);
    vmScope[21] = createChild(vm_fn_514, vmScope);
    vmScope[26] = createChild(vm_fn_516, vmScope);
    vmScope[27] = createChild(vm_fn_519, vmScope);
    vmScope[28] = createChild(vm_fn_528, vmScope);
    vmScope[29] = createChild(vm_fn_530__maybeInvokeDelegate5, vmScope);
    vmScope[30] = createChild(vm_fn_531__pushTryEntry5, vmScope);
    vmScope[31] = createChild(vm_fn_532__resetCompletionRecord5, vmScope);
    vmScope[32] = createChild(vm_fn_533__resetTryEntryContext5, vmScope);
    vmScope[33] = createChild(vm_fn_534__getIterator5, vmScope);
    vmScope[34] = createChild(vm_fn_506, vmScope);
    vmScope[0][7] = createChild(vm_fn_506, vmScope);
    vmScope[3] = {};
    vmScope[4] = Object.prototype;
    vmScope[5] = vmScope[4].hasOwnProperty;
    // incoming keep-true from pc=102
    vmScope[6] = (Object.defineProperty || createChild(vm_fn_507__definePropertyFallback5, vmScope));
    if (("function" == typeof Symbol)) {

    } else {
      // block boundary after jump @pc=118
      // incoming false-branch from pc=114
    }
    // incoming from pc=118
    // PHI@pc=121 slot=0: Symbol | {}
    vmScope[7] = Symbol;
    // incoming keep-true from pc=129
    vmScope[8] = (vmScope[7].iterator || "@@iterator");
    // incoming keep-true from pc=141
    vmScope[9] = (vmScope[7].asyncIterator || "@@asyncIterator");
    // incoming keep-true from pc=153
    vmScope[10] = (vmScope[7].toStringTag || "@@toStringTag");
    vmScope[11]({}, "");
    vmScope[3].wrap = vmScope[12];
  } catch (__vm_caught_exception) {
    vmScope[35] = __vm_caught_exception;
    vmScope[36] = createChild(vm_fn_509, vmScope);
    vmScope[11] = createChild(vm_fn_509, vmScope);
  }
  vmScope[14] = "suspendedStart";
  vmScope[15] = "suspendedYield";
  vmScope[16] = "executing";
  vmScope[17] = "completed";
  vmScope[18] = {};
  vmScope[22] = {};
  vmScope[11](vmScope[22], vmScope[8], createChild(vm_fn_515__returnThis13, vmScope));
  vmScope[23] = Object.getPrototypeOf;
  // incoming keep-false from pc=245
  vmScope[24] = (vmScope[23] && vmScope[23](vmScope[23](vmScope[33]([]))));
  // incoming keep-false from pc=273
  // incoming keep-false from pc=282
  if (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8]))) {
    vmScope[22] = vmScope[24];
  }
  // incoming keep-false from pc=298
  (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8])) && vmScope[24]);
  vmScope[19]["prototype"] = Object.create(vmScope[22]);
  vmScope[21]["prototype"] = Object.create(vmScope[22]);
  vmScope[25] = Object.create(vmScope[22]);
  vmScope[20]["prototype"] = vmScope[21];
  // POP vmScope[21]
  vmScope[6](vmScope[25], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[21], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[6](vmScope[21], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[20], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[20]["displayName"] = vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[3]["isGeneratorFunction"] = createChild(vm_fn_536__isGeneratorFunction5, vmScope);
  // POP createChild(vm_fn_536__isGeneratorFunction5, vmScope)
  vmScope[3]["mark"] = createChild(vm_fn_537__markGeneratorFunction5, vmScope);
  // POP createChild(vm_fn_537__markGeneratorFunction5, vmScope)
  vmScope[3]["awrap"] = createChild(vm_fn_538__wrapAwaitValue5, vmScope);
  // POP createChild(vm_fn_538__wrapAwaitValue5, vmScope)
  vmScope[26](vmScope[27].prototype);
  vmScope[11](vmScope[27].prototype, vmScope[9], createChild(vm_fn_539__returnThis14, vmScope));
  vmScope[3]["AsyncIterator"] = vmScope[27];
  // POP vmScope[27]
  vmScope[3]["async"] = createChild(vm_fn_540__createAsyncFunctionWrapper5, vmScope);
  // POP createChild(vm_fn_540__createAsyncFunctionWrapper5, vmScope)
  vmScope[26](vmScope[25]);
  vmScope[11](vmScope[25], vmScope[10], "Generator");
  vmScope[11](vmScope[25], vmScope[8], createChild(vm_fn_542__returnThis15, vmScope));
  vmScope[11](vmScope[25], "toString", createChild(vm_fn_543__getGeneratorTag5, vmScope));
  vmScope[3]["keys"] = createChild(vm_fn_544, vmScope);
  // POP createChild(vm_fn_544, vmScope)
  vmScope[3]["values"] = vmScope[33];
  // POP vmScope[33]
  vmScope[37] = createChild(vm_fn_546__resetGeneratorContext5, vmScope);
  vmScope[38] = createChild(vm_fn_547__stopGeneratorContext5, vmScope);
  vmScope[39] = createChild(vm_fn_548__dispatchException5, vmScope);
  vmScope[40] = createChild(vm_fn_550__abrupt5, vmScope);
  vmScope[41] = createChild(vm_fn_551__complete5, vmScope);
  vmScope[42] = createChild(vm_fn_552__finishFinallyEntry5, vmScope);
  vmScope[43] = createChild(vm_fn_553__catchTryEntry5, vmScope);
  vmScope[44] = createChild(vm_fn_554__delegateYield5, vmScope);
  vmScope[32]["prototype"] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_546__resetGeneratorContext5, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_547__stopGeneratorContext5, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_548__dispatchException5, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_550__abrupt5, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_551__complete5, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_552__finishFinallyEntry5, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_553__catchTryEntry5, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_554__delegateYield5, vmScope), writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_546__resetGeneratorContext5, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_547__stopGeneratorContext5, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_548__dispatchException5, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_550__abrupt5, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_551__complete5, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_552__finishFinallyEntry5, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_553__catchTryEntry5, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_554__delegateYield5, vmScope), writable: true, configurable: true, enumerable: true })
  return vmScope[3];
}

function vm_fn_506(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(506, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return vmScope[0][3];
}

function vm_fn_507__definePropertyFallback5(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4].value;
  return undefined;
}

function vm_fn_508__defineIteratorMethod5(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  return vmScope[2][vmScope[3]];
}

function vm_fn_509(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4];
  return vmScope[4];
}

function vm_fn_510__wrapGeneratorFunction5(scope, thisArg, argsLike, arg0, arg1, arg2, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(510, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(510, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(510, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  __vmReportCapturedBinding(510, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  if ((vmScope[3] && (vmScope[3].prototype instanceof vmScope[0][19]))) {

  }
  // PHI@pc=24 slot=0: vmScope[3] | vmScope[0][19]
  vmScope[6] = vmScope[3];
  vmScope[7] = Object.create(vmScope[6].prototype);
  vmScope[8] = new vmScope[0][32]((vmScope[5] || []));
  vmScope[0][6](vmScope[7], "_invoke", Object.defineProperty({}, "value", { value: vmScope[0][28](vmScope[2], vmScope[4], vmScope[8]), writable: true, configurable: true, enumerable: true }));
  return vmScope[7];
}

function vm_fn_511(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  try {
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "normal", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[2].call(vmScope[3], vmScope[4]), writable: true, configurable: true, enumerable: true });
    // block boundary after return @pc=21
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "throw", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_512(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_513(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_514(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_515__returnThis13(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_516(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  ["next", "throw", "return"].forEach(createChild(vm_fn_517, vmScope));
  return undefined;
}

function vm_fn_517(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(517, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(517, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  vmScope[0][0][11](vmScope[0][2], vmScope[2], createChild(vm_fn_518__invokeIteratorMethod5, vmScope));
  return undefined;
}

function vm_fn_518__invokeIteratorMethod5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(518, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmThis._invoke(vmScope[0][2], vmScope[2]);
}

function vm_fn_519(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(519, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[4] = createChild(vm_fn_520, vmScope);
  vmScope[6] = createChild(vm_fn_525__enqueueAsyncIteratorStep5, vmScope);
  vmScope[0][6](vmThis, "_invoke", Object.defineProperty({}, "value", { value: createChild(vm_fn_525__enqueueAsyncIteratorStep5, vmScope), writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_520(scope, thisArg, argsLike, arg0, arg1, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(520, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(520, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(520, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(520, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(520, "vmScope[0][0][0][6]", 3, 6, vmScope[0][0][0][6]);
  vmScope[6] = vmScope[0][0][13](vmScope[0][2][vmScope[2]], vmScope[0][2], vmScope[3]);
  if (("throw" !== vmScope[6].type)) {
    vmScope[7] = vmScope[6].arg;
    vmScope[8] = vmScope[7].value;
    // incoming keep-false from pc=51
    // incoming keep-false from pc=65
    if (((vmScope[8] && ("object" == vmScope[0][0][0][6](vmScope[8]))) && vmScope[0][0][5].call(vmScope[8], "__await"))) {

    } else {
      // block boundary after jump @pc=104
      // incoming false-branch from pc=80
    }
    // incoming from pc=104
    // PHI@pc=126 slot=0: vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_521__resumeAsyncIteratorNext5, vmScope), createChild(vm_fn_522__resumeAsyncIteratorThrow9, vmScope)) | vmScope[0][3].resolve(vmScope[8]).then(createChild(vm_fn_523__resolveAsyncIteratorValue5, vmScope), createChild(vm_fn_524__resumeAsyncIteratorThrow10, vmScope))
    return vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_521__resumeAsyncIteratorNext5, vmScope), createChild(vm_fn_522__resumeAsyncIteratorThrow9, vmScope));
  }
  // L127:
  // block boundary after return @pc=126
  // incoming false-branch from pc=30
  vmScope[5](vmScope[6].arg);
  return undefined;
}

function vm_fn_521__resumeAsyncIteratorNext5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(521, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(521, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(521, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("next", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_522__resumeAsyncIteratorThrow9(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(522, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(522, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(522, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_523__resolveAsyncIteratorValue5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(523, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(523, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[0][7]["value"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4](vmScope[0][7]);
  return undefined;
}

function vm_fn_524__resumeAsyncIteratorThrow10(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(524, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(524, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(524, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  return vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
}

function vm_fn_525__enqueueAsyncIteratorStep5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(525, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_526, vmScope);
  if (vmScope[0][5]) {

  }
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  vmScope[0][5] = vmScope[0][5].then(vmScope[4], vmScope[4]);
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  return vmScope[0][5].then(vmScope[4], vmScope[4]);
}

function vm_fn_526(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(526, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  return new vmScope[0][0][3](createChild(vm_fn_527__executeAsyncIteratorStep5, vmScope));
}

function vm_fn_527__executeAsyncIteratorStep5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(527, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(527, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(527, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][0][2], vmScope[0][0][3], vmScope[2], vmScope[3]);
  return undefined;
}

function vm_fn_528(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  __vmReportCapturedBinding(528, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  vmScope[5] = vmScope[0][14];
  return createChild(vm_fn_529__invokeGeneratorMethod5, vmScope);
}

function vm_fn_529__invokeGeneratorMethod5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(529, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(529, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(529, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(529, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(529, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(529, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(529, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(529, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(529, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(529, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  __vmReportCapturedBinding(529, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(529, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  if ((vmScope[0][5] === vmScope[0][0][16])) {
    throw Error("Generator is already running");
  }
  // block boundary after throw @pc=16
  // incoming false-branch from pc=7
  if ((vmScope[0][5] === vmScope[0][0][17])) {
    if (("throw" === vmScope[2])) {
      throw vmScope[3];
    }
    // block boundary after throw @pc=37
    // incoming false-branch from pc=32
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[0][0][2], writable: true, configurable: true, enumerable: true }), "done", { value: (!0), writable: true, configurable: true, enumerable: true });
  }
  // L50:
  // block boundary after return @pc=49
  // incoming false-branch from pc=24
  vmScope[0][4]["method"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4]["arg"] = vmScope[3];
  // POP vmScope[3]
  // L70:
  vmScope[4] = vmScope[0][4].delegate;
  if (vmScope[4]) {
    vmScope[5] = vmScope[0][0][29](vmScope[4], vmScope[0][4]);
    if (!(vmScope[5])) { /* goto L118; */ }
    if ((vmScope[5] === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=112
    // incoming false-branch from pc=110
    return vmScope[5];
  }
  // L118:
  // block boundary after return @pc=117
  // incoming false-branch from pc=81
  // incoming false-branch from pc=101
  if (("next" === vmScope[0][4].method)) {
    vmScope[0][4]["_sent"] = vmScope[0][4].arg;
    vmScope[0][4].sent = vmScope[0][4].arg;
    /* goto L221; */
  }
  // block boundary after jump @pc=144
  // incoming false-branch from pc=126
  if (("throw" === vmScope[0][4].method)) {
    if ((vmScope[0][5] === vmScope[0][0][14])) {
      vmScope[0][5] = vmScope[0][0][17];
      // POP vmScope[0][0][17]
      throw vmScope[0][4].arg;
    }
    // block boundary after throw @pc=178
    // incoming false-branch from pc=163
    vmScope[0][4].dispatchException(vmScope[0][4].arg);
    /* goto L221; */
  }
  // L195:
  // block boundary after jump @pc=193
  // incoming false-branch from pc=154
  // incoming keep-false from pc=203
  (("return" === vmScope[0][4].method) && vmScope[0][4].abrupt("return", vmScope[0][4].arg));
  // L221:
  // incoming from pc=144
  // incoming from pc=193
  vmScope[0][5] = vmScope[0][0][16];
  vmScope[6] = vmScope[0][0][13](vmScope[0][2], vmScope[0][3], vmScope[0][4]);
  if (("normal" === vmScope[6].type)) {
    if (vmScope[0][4].done) {

    } else {
      // block boundary after jump @pc=265
      // incoming false-branch from pc=260
    }
    // incoming from pc=265
    // PHI@pc=270 slot=0: vmScope[0][0][17] | vmScope[0][0][15]
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    if ((vmScope[6].arg === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=286
    // incoming false-branch from pc=284
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[6].arg, writable: true, configurable: true, enumerable: true }), "done", { value: vmScope[0][4].done, writable: true, configurable: true, enumerable: true });
  }
  // L304:
  // block boundary after return @pc=303
  // incoming false-branch from pc=253
  if (("throw" === vmScope[6].type)) {
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    vmScope[0][4]["method"] = "throw";
    // POP "throw"
    vmScope[0][4]["arg"] = vmScope[6].arg;
  }
  // incoming keep-false from pc=312
  // POP (("throw" === vmScope[6].type) && vmScope[6].arg)
  // L343:
  // incoming from pc=112
  // incoming from pc=286
  /* goto L70; */
  // block boundary after jump @pc=343
  return undefined;
}

function vm_fn_530__maybeInvokeDelegate5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(530, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(530, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(530, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(530, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  vmScope[4] = vmScope[3].method;
  vmScope[5] = vmScope[2].iterator[vmScope[4]];
  if (!((vmScope[5] === vmScope[0][2]))) { /* goto L137; */ }
  vmScope[3]["delegate"] = null;
  // POP null
  // incoming keep-false from pc=43
  if ((("throw" === vmScope[4]) && vmScope[2].iterator.return)) {
    vmScope[3]["method"] = "return";
    // POP "return"
    vmScope[3]["arg"] = vmScope[0][2];
    // POP vmScope[0][2]
    vmScope[0][29](vmScope[2], vmScope[3]);
  }
  // incoming keep-false from pc=52
  if ((!((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)))) {
    if (!(("return" !== vmScope[4]))) { /* goto L132; */ } // keep-top
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  }
  // L132:
  // L132:
  // incoming keep-true from pc=94
  // incoming keep-false from pc=102
  // PHI@pc=132 slot=0: ((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)) | ("return" !== vmScope[4]) | new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"))
  new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  return vmScope[0][18];
  // L137:
  // block boundary after return @pc=136
  // incoming false-branch from pc=27
  vmScope[6] = vmScope[0][13](vmScope[5], vmScope[2].iterator, vmScope[3].arg);
  if (("throw" === vmScope[6].type)) {
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = vmScope[6].arg;
    // POP vmScope[6].arg
    vmScope[3]["delegate"] = null;
    // POP null
    return vmScope[0][18];
  }
  // block boundary after return @pc=201
  // incoming false-branch from pc=167
  vmScope[7] = vmScope[6].arg;
  if (!(vmScope[7])) { /* goto L296; */ }
  if (vmScope[7].done) {
    vmScope[3][vmScope[2].resultName] = vmScope[7].value;
    // POP vmScope[7].value
    vmScope[3]["next"] = vmScope[2].nextLoc;
    // POP vmScope[2].nextLoc
    if (("return" !== vmScope[3].method)) {
      vmScope[3]["method"] = "next";
      // POP "next"
      vmScope[3]["arg"] = vmScope[0][2];
    }
    // incoming keep-false from pc=257
    // POP (("return" !== vmScope[3].method) && vmScope[0][2])
    vmScope[3]["delegate"] = null;
    // POP null
    /* goto L294; */
  }
  // L291:
  // block boundary after jump @pc=289
  // incoming false-branch from pc=220
  // L294:
  // incoming from pc=289
  /* goto L329; */
  // L296:
  // block boundary after jump @pc=294
  // incoming false-branch from pc=213
  vmScope[3]["method"] = "throw";
  // POP "throw"
  vmScope[3]["arg"] = new TypeError("iterator result is not an object");
  new TypeError("iterator result is not an object");
  vmScope[3]["delegate"] = null;
  // POP null
  // L329:
  // incoming from pc=294
  // PHI@pc=294 slot=0: vmScope[0][18] | vmScope[7]
  return vmScope[0][18];
}

function vm_fn_531__pushTryEntry5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "tryLoc", { value: vmScope[2]["0"], writable: true, configurable: true, enumerable: true });
  if ((1 in vmScope[2])) {
    vmScope[3]["catchLoc"] = vmScope[2]["1"];
  }
  // POP ((1 in vmScope[2]) && vmScope[2]["1"])
  if ((2 in vmScope[2])) {
    vmScope[3]["finallyLoc"] = vmScope[2]["2"];
    // POP vmScope[2]["2"]
    vmScope[3]["afterLoc"] = vmScope[2]["3"];
  }
  // POP ((2 in vmScope[2]) && vmScope[2]["3"])
  vmThis.tryEntries.push(vmScope[3]);
  return undefined;
}

function vm_fn_532__resetCompletionRecord5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = (vmScope[2].completion || {});
  vmScope[3]["type"] = "normal";
  // POP "normal"
  (delete vmScope[3]["arg"]);
  vmScope[2]["completion"] = vmScope[3];
  // POP vmScope[3]
  return undefined;
}

function vm_fn_533__resetTryEntryContext5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(533, "vmScope[0][30]", 1, 30, vmScope[0][30]);
  vmThis["tryEntries"] = [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })];
  // POP [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })]
  vmScope[2].forEach(vmScope[0][30], vmThis);
  vmThis.reset((!0));
  return undefined;
}

function vm_fn_534__getIterator5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(534, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(534, "vmScope[0][0][6]", 2, 6, vmScope[0][0][6]);
  // incoming keep-true from pc=3
  if ((vmScope[2] || ("" === vmScope[2]))) {
    vmScope[3] = vmScope[2][vmScope[0][8]];
    if (vmScope[3]) {
      return vmScope[3].call(vmScope[2]);
    }
    // block boundary after return @pc=39
    // incoming false-branch from pc=26
    if (("function" == typeof vmScope[2].next)) {
      return vmScope[2];
    }
    // block boundary after return @pc=54
    // incoming false-branch from pc=49
    if ((!isNaN(vmScope[2].length))) {
      vmScope[4] = (-1);
      vmScope[6] = createChild(vm_fn_535__nextArrayLikeIterator5, vmScope);
      vmScope[5] = createChild(vm_fn_535__nextArrayLikeIterator5, vmScope);
      vmScope[5]["next"] = vmScope[5];
      return vmScope[5];
    }
  }
  // L93:
  // L93:
  // block boundary after return @pc=92
  // incoming false-branch from pc=11
  // incoming false-branch from pc=66
  throw new TypeError((vmScope[0][0][6](vmScope[2]) + " is not iterable"));
  // block boundary after throw @pc=109
  return undefined;
}

function vm_fn_535__nextArrayLikeIterator5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(535, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(535, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(535, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(535, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(535, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  while ((++vmScope[0][4] < vmScope[0][2].length)) {
    if (vmScope[0][0][5].call(vmScope[0][2], vmScope[0][4])) {
      vmScope[0][6]["value"] = vmScope[0][2][vmScope[0][4]];
      // POP vmScope[0][2][vmScope[0][4]]
      vmScope[0][6]["done"] = (!1);
      // POP (!1)
      return vmScope[0][6];
    }
    // block boundary after return @pc=55
    // incoming false-branch from pc=26
  }
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=10
  vmScope[0][6]["value"] = vmScope[0][0][2];
  // POP vmScope[0][0][2]
  vmScope[0][6]["done"] = (!0);
  // POP (!0)
  return vmScope[0][6];
}

function vm_fn_536__isGeneratorFunction5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(536, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  // incoming keep-false from pc=7
  vmScope[3] = (("function" == typeof vmScope[2]) && vmScope[2].constructor);
  if ((!(!vmScope[3]))) {
    if ((vmScope[3] === vmScope[0][20])) { /* goto L48; */ } // keep-top
    // incoming keep-true from pc=40
  }
  // L48:
  // incoming keep-false from pc=22
  // incoming keep-true from pc=31
  // PHI@pc=48 slot=0: (!(!vmScope[3])) | (vmScope[3] === vmScope[0][20]) | ("GeneratorFunction" === (vmScope[3].displayName || vmScope[3].name))
  return (!(!vmScope[3]));
}

function vm_fn_537__markGeneratorFunction5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(537, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(537, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(537, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(537, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (Object.setPrototypeOf) {

  } else {
    vmScope[2]["__proto__"] = vmScope[0][21];
    // POP vmScope[0][21]
  }
  // PHI@pc=45 slot=0: Object.setPrototypeOf(vmScope[2], vmScope[0][21]) | vmScope[0][11](vmScope[2], vmScope[0][10], "GeneratorFunction")
  Object.setPrototypeOf(vmScope[2], vmScope[0][21]);
  vmScope[2]["prototype"] = Object.create(vmScope[0][25]);
  Object.create(vmScope[0][25]);
  return vmScope[2];
}

function vm_fn_538__wrapAwaitValue5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "__await", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_539__returnThis14(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_540__createAsyncFunctionWrapper5(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 5, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  __vmReportCapturedBinding(540, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(540, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(540, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if ((undefined === vmScope[6])) {
    vmScope[6] = Promise;
  }
  // POP ((undefined === vmScope[6]) && Promise)
  vmScope[7] = new vmScope[0][27](vmScope[0][12](vmScope[2], vmScope[3], vmScope[4], vmScope[5]), vmScope[6]);
  if (vmScope[0][3].isGeneratorFunction(vmScope[3])) {

  }
  // PHI@pc=78 slot=0: vmScope[7] | vmScope[7].next().then(createChild(vm_fn_541__handleAsyncIteratorResult5, vmScope))
  return vmScope[7];
}

function vm_fn_541__handleAsyncIteratorResult5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(541, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  if (vmScope[2].done) {

  }
  // PHI@pc=22 slot=0: vmScope[2].value | vmScope[0][7].next()
  return vmScope[2].value;
}

function vm_fn_542__returnThis15(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_543__getGeneratorTag5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "[object Generator]";
}

function vm_fn_544(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object(vmScope[2]);
  vmScope[4] = [];
  for (vmScope[5] in vmScope[3]) {
    vmScope[4].push(vmScope[5]);
  }
  vmScope[4].reverse();
  vmScope[7] = createChild(vm_fn_545__nextObjectKeyIterator5, vmScope);
  return createChild(vm_fn_545__nextObjectKeyIterator5, vmScope);
}

function vm_fn_545__nextObjectKeyIterator5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(545, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(545, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(545, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  while (vmScope[0][4].length) {
    vmScope[2] = vmScope[0][4].pop();
    if ((vmScope[2] in vmScope[0][3])) {
      vmScope[0][7]["value"] = vmScope[2];
      // POP vmScope[2]
      vmScope[0][7]["done"] = (!1);
      // POP (!1)
      return vmScope[0][7];
    }
    // block boundary after return @pc=50
    // incoming false-branch from pc=25
  }
  // L53:
  // block boundary after jump @pc=51
  // incoming false-branch from pc=5
  vmScope[0][7]["done"] = (!0);
  // POP (!0)
  return vmScope[0][7];
}

function vm_fn_546__resetGeneratorContext5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(546, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(546, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(546, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmThis["prev"] = 0;
  // POP 0
  vmThis["next"] = 0;
  // POP 0
  vmThis["_sent"] = vmScope[0][2];
  vmThis["sent"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis["done"] = (!1);
  // POP (!1)
  vmThis["delegate"] = null;
  // POP null
  vmThis["method"] = "next";
  // POP "next"
  vmThis["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis.tryEntries.forEach(vmScope[0][31]);
  if (!((!vmScope[2]))) { /* goto L142; */ }
  while ((/* enum-next */ (vmScope[3] = __vm_enum_next_key(vmThis)), vmScope[3] !== undefined)) {
    // incoming keep-false from pc=96
    // incoming keep-false from pc=110
    if (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1)))))) {
      vmThis[vmScope[3]] = vmScope[0][2];
    }
    // incoming keep-false from pc=129
    (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1))))) && vmScope[0][2]);
  }
  // L142:
  // block boundary after jump @pc=140
  // incoming false-branch from pc=71
  // incoming false-branch from pc=81
  return undefined;
}

function vm_fn_547__stopGeneratorContext5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmThis.done = (!0);
  vmScope[2] = vmThis.tryEntries["0"].completion;
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  return vmThis.rval;
}

function vm_fn_548__dispatchException5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(548, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_549__handleExceptionEntry5, vmScope);
  if (vmThis.done) {
    throw vmScope[2];
  }
  // block boundary after throw @pc=13
  // incoming false-branch from pc=8
  vmScope[3] = vmThis;
  vmScope[5] = (vmThis.tryEntries.length - 1);
  // L29:
  if (!((vmScope[5] >= 0))) { /* goto L255; */ }
  vmScope[6] = vmThis.tryEntries[vmScope[5]];
  vmScope[7] = vmScope[6].completion;
  if (("root" === vmScope[6].tryLoc)) {
    return vmScope[4]("end");
  }
  // block boundary after return @pc=73
  // incoming false-branch from pc=63
  if (!((vmScope[6].tryLoc <= vmThis.prev))) { /* goto L248; */ }
  vmScope[8] = vmScope[0][5].call(vmScope[6], "catchLoc");
  vmScope[9] = vmScope[0][5].call(vmScope[6], "finallyLoc");
  // incoming keep-false from pc=120
  if ((vmScope[8] && vmScope[9])) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=152
    // incoming false-branch from pc=136
    if ((vmThis.prev < vmScope[6].finallyLoc)) {
      return vmScope[4](vmScope[6].finallyLoc);
    }
    // block boundary after return @pc=175
    // incoming false-branch from pc=162
    /* goto L248; */
  }
  // L178:
  // block boundary after jump @pc=176
  // incoming false-branch from pc=125
  if (vmScope[8]) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=208
    // incoming false-branch from pc=192
    /* goto L248; */
  }
  // L211:
  // block boundary after jump @pc=209
  // incoming false-branch from pc=181
  if ((!vmScope[9])) {
    throw Error("try statement without catch or finally");
  }
  // block boundary after throw @pc=224
  // incoming false-branch from pc=215
  if ((vmThis.prev < vmScope[6].finallyLoc)) {
    return vmScope[4](vmScope[6].finallyLoc);
  }
  // L248:
  // L248:
  // block boundary after return @pc=247
  // incoming false-branch from pc=83
  // incoming from pc=176
  // incoming from pc=209
  // incoming false-branch from pc=234
  --vmScope[5];
  /* goto L29; */
  // L255:
  // block boundary after jump @pc=253
  // incoming false-branch from pc=35
  return undefined;
}

function vm_fn_549__handleExceptionEntry5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(549, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(549, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(549, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(549, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[0][7]["type"] = "throw";
  // POP "throw"
  vmScope[0][7]["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmScope[0][3]["next"] = vmScope[2];
  // POP vmScope[2]
  if (vmScope[3]) {
    vmScope[0][3]["method"] = "next";
    // POP "next"
    vmScope[0][3]["arg"] = vmScope[0][0][2];
  }
  // POP (vmScope[3] && vmScope[0][0][2])
  return (!(!vmScope[3]));
}

function vm_fn_550__abrupt5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(550, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(550, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[4] = (vmThis.tryEntries.length - 1);
  // L11:
  if ((vmScope[4] >= 0)) {
    vmScope[5] = vmThis.tryEntries[vmScope[4]];
    // incoming keep-false from pc=38
    // incoming keep-false from pc=53
    if ((((vmScope[5].tryLoc <= vmThis.prev) && vmScope[0][5].call(vmScope[5], "finallyLoc")) && (vmThis.prev < vmScope[5].finallyLoc))) {
      vmScope[6] = vmScope[5];
    } else {
      // block boundary after jump @pc=72
      // incoming false-branch from pc=64
      --vmScope[4];
      /* goto L11; */
    }
  }
  // L81:
  // L81:
  // block boundary after jump @pc=79
  // incoming false-branch from pc=17
  // incoming from pc=72
  if (vmScope[6]) {
    if (("break" === vmScope[2])) { /* goto L100; */ } // keep-top
  }
  // L100:
  // L100:
  // incoming keep-false from pc=84
  // incoming keep-true from pc=92
  // incoming keep-false from pc=100
  // incoming keep-false from pc=111
  if (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc))) {
    vmScope[6] = null;
  }
  // incoming keep-false from pc=122
  // POP (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc)) && null)
  if (vmScope[6]) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=133
  }
  // incoming from pc=140
  // PHI@pc=143 slot=0: vmScope[6].completion | {}
  vmScope[7] = vmScope[6].completion;
  vmScope[7]["type"] = vmScope[2];
  // POP vmScope[2]
  vmScope[7]["arg"] = vmScope[3];
  // POP vmScope[3]
  if (vmScope[6]) {
    vmThis["method"] = "next";
    // POP "next"
    vmThis["next"] = vmScope[6].finallyLoc;
    // POP vmScope[6].finallyLoc
  } else {
    // block boundary after jump @pc=191
    // incoming false-branch from pc=169
  }
  // incoming from pc=191
  // PHI@pc=202 slot=0: vmScope[0][18] | vmThis.complete(vmScope[7])
  return vmScope[0][18];
}

function vm_fn_551__complete5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(551, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  // block boundary after throw @pc=15
  // incoming false-branch from pc=8
  // incoming keep-true from pc=24
  if ((("break" === vmScope[2].type) || ("continue" === vmScope[2].type))) {
    vmThis["next"] = vmScope[2].arg;
    /* goto L108; */
  }
  // block boundary after jump @pc=45
  // incoming false-branch from pc=34
  if (("return" === vmScope[2].type)) {
    vmThis["arg"] = vmScope[2].arg;
    vmThis["rval"] = vmScope[2].arg;
    // POP vmScope[2].arg
    vmThis["method"] = "return";
    // POP "return"
    vmThis["next"] = "end";
    /* goto L108; */
  }
  // block boundary after jump @pc=84
  // incoming false-branch from pc=55
  // incoming keep-false from pc=94
  if ((("normal" === vmScope[2].type) && vmScope[3])) {
    vmThis["next"] = vmScope[3];
  }
  // L108:
  // L108:
  // incoming from pc=45
  // incoming from pc=84
  // incoming keep-false from pc=99
  // POP vmScope[3]
  return vmScope[0][18];
}

function vm_fn_552__finishFinallyEntry5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(552, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(552, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  while ((vmScope[3] >= 0)) {
    vmScope[4] = vmThis.tryEntries[vmScope[3]];
    if ((vmScope[4].finallyLoc === vmScope[2])) {
      vmThis.complete(vmScope[4].completion, vmScope[4].afterLoc);
      vmScope[0][31](vmScope[4]);
      return vmScope[0][18];
    }
    // block boundary after return @pc=70
    // incoming false-branch from pc=38
    --vmScope[3];
  }
  // L78:
  // block boundary after jump @pc=76
  // incoming false-branch from pc=17
  return undefined;
}

function vm_fn_553__catchTryEntry5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(553, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  // L11:
  if (!((vmScope[3] >= 0))) { /* goto L87; */ }
  vmScope[4] = vmThis.tryEntries[vmScope[3]];
  if ((vmScope[4].tryLoc === vmScope[2])) {
    vmScope[5] = vmScope[4].completion;
    if (("throw" === vmScope[5].type)) {
      vmScope[6] = vmScope[5].arg;
      vmScope[0][31](vmScope[4]);
    }
    // incoming false-branch from pc=56
    return vmScope[6];
  }
  // L80:
  // block boundary after return @pc=79
  // incoming false-branch from pc=38
  --vmScope[3];
  /* goto L11; */
  // L87:
  // block boundary after jump @pc=85
  // incoming false-branch from pc=17
  throw Error("illegal catch attempt");
  // block boundary after throw @pc=94
  return undefined;
}

function vm_fn_554__delegateYield5(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(554, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(554, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(554, "vmScope[0][33]", 1, 33, vmScope[0][33]);
  vmThis["delegate"] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true })
  if (("next" === vmThis.method)) {
    vmThis["arg"] = vmScope[0][2];
  }
  // POP (("next" === vmThis.method) && vmScope[0][2])
  return vmScope[0][18];
}

function vm_fn_555__createForOfIteratorHelper(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(555, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  // incoming keep-false from pc=5
  // incoming keep-true from pc=15
  vmScope[4] = ((("undefined" != typeof Symbol) && vmScope[2][Symbol.iterator]) || vmScope[2]["@@iterator"]);
  if (!((!vmScope[4]))) { /* goto L141; */ }
  if ((!Array.isArray(vmScope[2]))) {
    vmScope[4] = vmScope[0][9](vmScope[2]);
  }
  // incoming keep-true from pc=41
  if ((!(Array.isArray(vmScope[2]) || vmScope[0][9](vmScope[2])))) {
    // incoming keep-false from pc=61
  }
  // L77:
  // incoming keep-true from pc=56
  // incoming keep-false from pc=66
  if ((Array.isArray(vmScope[2]) || vmScope[0][9](vmScope[2]))) {
    if (vmScope[4]) {
      vmScope[2] = vmScope[4];
    }
    // incoming keep-false from pc=82
    // POP vmScope[4]
    vmScope[5] = 0;
    vmScope[10] = createChild(vm_fn_556, vmScope);
    vmScope[6] = createChild(vm_fn_556, vmScope);
    vmScope[11] = createChild(vm_fn_557__nextArrayIteratorValue2, vmScope);
    vmScope[12] = createChild(vm_fn_558__throwIteratorError2, vmScope);
    return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: vmScope[6], writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_557__nextArrayIteratorValue2, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_558__throwIteratorError2, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: vmScope[6], writable: true, configurable: true, enumerable: true });
  }
  // L134:
  // block boundary after return @pc=133
  // incoming false-branch from pc=77
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  // L141:
  // block boundary after throw @pc=140
  // incoming false-branch from pc=29
  vmScope[8] = (!0);
  vmScope[9] = (!1);
  vmScope[13] = createChild(vm_fn_559__startIterableIterator2, vmScope);
  vmScope[14] = createChild(vm_fn_560__nextIterableIteratorValue, vmScope);
  vmScope[15] = createChild(vm_fn_561__captureIteratorError, vmScope);
  vmScope[16] = createChild(vm_fn_562, vmScope);
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: createChild(vm_fn_559__startIterableIterator2, vmScope), writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_560__nextIterableIteratorValue, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_561__captureIteratorError, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: createChild(vm_fn_562, vmScope), writable: true, configurable: true, enumerable: true });
}

function vm_fn_556(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_557__nextArrayIteratorValue2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(557, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(557, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if ((vmScope[0][5] >= vmScope[0][2].length)) {

  }
  // PHI@pc=35 slot=0: Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true }) | Object.defineProperty(Object.defineProperty({}, "done", { value: (!1), writable: true, configurable: true, enumerable: true }), "value", { value: vmScope[0][2][vmScope[0][5]++], writable: true, configurable: true, enumerable: true })
  return Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true });
}

function vm_fn_558__throwIteratorError2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  throw vmScope[2];
  return undefined;
}

function vm_fn_559__startIterableIterator2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(559, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(559, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[0][4] = vmScope[0][4].call(vmScope[0][2]);
  return undefined;
}

function vm_fn_560__nextIterableIteratorValue(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(560, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(560, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[2] = vmScope[0][4].next();
  vmScope[0][8] = vmScope[2].done;
  // POP vmScope[2].done
  return vmScope[2];
}

function vm_fn_561__captureIteratorError(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(561, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(561, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  vmScope[0][9] = (!0);
  // POP (!0)
  vmScope[0][7] = vmScope[2];
  // POP vmScope[2]
  return undefined;
}

function vm_fn_562(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(562, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(562, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(562, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(562, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  try {
    // incoming keep-true from pc=3
    // incoming keep-true from pc=12
    ((vmScope[0][8] || (null == vmScope[0][4].return)) || vmScope[0][4].return());
    // incoming control-jump from pc=23
  } finally {
    if (vmScope[0][9]) {
      throw vmScope[0][7];
    }
    // block boundary after throw @pc=33
  }
  return undefined;
}

function vm_fn_563__unsupportedIterableToArray5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(563, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][10](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][10](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_564__arrayLikeToArray5(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_565__asyncGeneratorStep5(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 7, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_7 = arg5;
  const scope_0_8 = arg6;
  try {
    vmScope[9] = vmScope[2][vmScope[7]].call(vmScope[2], vmScope[8]);
    vmScope[10] = vmScope[9].value;
    if (vmScope[9].done) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=45
    }
  } catch (__vm_caught_exception) {
    vmScope[11] = __vm_caught_exception;
    return undefined;
  }
  // incoming from pc=56
  // PHI@pc=79 slot=0: vmScope[3](vmScope[10]) | Promise.resolve(vmScope[10]).then(vmScope[5], vmScope[6])
  vmScope[3](vmScope[10]);
  return undefined;
}

function vm_fn_566__asyncToGenerator5(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  return createChild(vm_fn_567, vmScope);
}

function vm_fn_567(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = vmThis;
  vmScope[3] = vmScope[1];
  return new Promise(createChild(vm_fn_568, vmScope));
}

function vm_fn_568(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(568, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(568, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(568, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = createChild(vm_fn_569, vmScope);
  vmScope[6] = createChild(vm_fn_570, vmScope);
  vmScope[4] = vmScope[0][0][2].apply(vmScope[0][2], vmScope[0][3]);
  vmScope[5](undefined);
  return undefined;
}

function vm_fn_569(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const captured_vm_fn_569 = vmScope[0][5];
  const captured_vm_fn_570 = vmScope[0][6];
  __vmReportCapturedBinding(569, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(569, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(569, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(569, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(569, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(569, "vmScope[0][0][0][0][11]", 4, 11, vmScope[0][0][0][0][11]);
  vmScope[0][0][0][0][11](vmScope[0][4], vmScope[0][2], vmScope[0][3], captured_vm_fn_569, captured_vm_fn_570, "next", vmScope[2]);
  return undefined;
}

function vm_fn_570(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const captured_vm_fn_569 = vmScope[0][5];
  const captured_vm_fn_570 = vmScope[0][6];
  __vmReportCapturedBinding(570, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(570, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(570, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(570, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(570, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(570, "vmScope[0][0][0][0][11]", 4, 11, vmScope[0][0][0][0][11]);
  vmScope[0][0][0][0][11](vmScope[0][4], vmScope[0][2], vmScope[0][3], captured_vm_fn_569, captured_vm_fn_570, "throw", vmScope[2]);
  return undefined;
}

function vm_fn_571__computeBrowserTypeMask(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[3] = (!(!window.opr));
  vmScope[4] = (typeof window.InstallTrigger !== "undefined");
  vmScope[2] = window.chrome;
  vmScope[5] = (!(!(((window.chrome !== null) && (vmScope[2] !== undefined)) && vmScope[2].edgeNurturingPrivate)));
  vmScope[6] = (false || (!(!document.documentMode)));
  vmScope[7] = (((!(!window.chrome)) && (!vmScope[3])) && (!vmScope[5]));
  vmScope[8] = (!(!window.ApplePaySession));
  vmScope[9] = [vmScope[3], vmScope[4], vmScope[5], vmScope[6], vmScope[7], false, vmScope[8]];
  return vmScope[9].reduce(createChild(vm_fn_572, vmScope), 0);
}

function vm_fn_572(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  if (vmScope[3]) {
    vmScope[2] = (vmScope[2] | (1 << vmScope[4]));
    // POP (vmScope[2] | (1 << vmScope[4]))
  }
  return vmScope[2];
}

function vm_fn_573__collectJsFontsBitmask(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(573, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((!document)) {
    return "0";
  }
  // block boundary after return @pc=7
  // incoming false-branch from pc=3
  // incoming keep-true from pc=13
  if (((!document.fonts) || (!document.fonts.check))) {
    return "1";
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=22
  vmScope[2] = 0;
  vmScope[3] = 0;
  while ((vmScope[3] < vmScope[0][2].length)) {
    if (document.fonts.check(vmScope[0][2][vmScope[3]])) {
      vmScope[2] = (vmScope[2] | (1 << vmScope[3]));
      // POP (vmScope[2] | (1 << vmScope[3]))
    }
    // incoming false-branch from pc=64
    vmScope[3]++;
  }
  // L88:
  // block boundary after jump @pc=86
  // incoming false-branch from pc=46
  return vmScope[2].toString(16);
}

function vm_fn_574__getJsVersion(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "1.5";
}

function vm_fn_575__invokeLoadCapabilityAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(575, "vmScope[0][17]", 1, 17, vmScope[0][17]);
  return vmScope[0][17].apply(vmThis, vmScope[1]);
}

function vm_fn_576__createLoadCapabilityAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(576, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(576, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(576, "vmScope[0][17]", 1, 17, vmScope[0][17]);
  vmScope[2] = createChild(vm_fn_577, vmScope);
  vmScope[0][17] = vmScope[0][12](vmScope[0][7]().mark(createChild(vm_fn_577, vmScope)));
  return vmScope[0][17].apply(vmThis, vmScope[1]);
}

function vm_fn_577(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_577 = vmScope[0][2];
  __vmReportCapturedBinding(577, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(577, "vmScope[0][0][7]", 2, 7, vmScope[0][0][7]);
  vmScope[2] = createChild(vm_fn_578, vmScope);
  return vmScope[0][0][7]().wrap(createChild(vm_fn_578, vmScope), captured_vm_fn_577);
}

function vm_fn_578(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  // L0:
  if (!(1)) { /* goto L58; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 1)) { /* goto L47; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L47; */ } // keep-top
    // POP vmScope[2].next
    /* goto L56; */
  }
  // block boundary after jump @pc=28
  // incoming strict-eq branch from pc=17
  return vmScope[2].abrupt("return", new Promise(createChild(vm_fn_579, vmScope)));
  // L47:
  // block boundary after return @pc=46
  // incoming strict-eq branch from pc=21
  // incoming strict-eq branch from pc=25
  return vmScope[2].stop();
  // L56:
  // block boundary after return @pc=55
  // incoming from pc=28
  /* goto L0; */
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_579(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  vmScope[3] = new Image();
  vmScope[3].onload = createChild(vm_fn_580__resolveImageLoadCapability, vmScope);
  vmScope[3].onerror = createChild(vm_fn_581__resolveImageLoadFailure, vmScope);
  vmScope[3].src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  return undefined;
}

function vm_fn_580__resolveImageLoadCapability(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(580, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(580, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  try {
    vmScope[2] = document.createElement("canvas");
    vmScope[3] = vmScope[2].getContext("2d");
    if ((!vmScope[3])) {
      vmScope[0][2](1);
      return undefined;
    }
    // block boundary after return @pc=41
    // incoming false-branch from pc=29
    vmScope[3].drawImage(vmScope[0][3], 0, 0);
    vmScope[0][2]((2 + (vmScope[3].getImageData(0, 0, 1, 1).data["3"] === 0)));
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
    vmScope[0][2](1);
  }
}

function vm_fn_581__resolveImageLoadFailure(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(581, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  vmScope[0][2](1);
  return undefined;
}

function vm_fn_582__computeStorageAccessMask(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    try {
      vmScope[2] = 0;
      localStorage.setItem("bdms", "");
      localStorage.removeItem("bdms");
      vmScope[2] = (vmScope[2] | 1);
      // POP (vmScope[2] | 1)
      sessionStorage.setItem("bdms", "");
    } catch (__vm_caught_exception) {
      vmScope[3] = __vm_caught_exception;
    }
    sessionStorage.removeItem("bdms");
    vmScope[2] = (vmScope[2] | 2);
    // POP (vmScope[2] | 2)
    return vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
  }
}

function vm_fn_583__invokePermissionStatesAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(583, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  return vmScope[0][20].apply(vmThis, vmScope[1]);
}

function vm_fn_584__createPermissionStatesAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(584, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(584, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(584, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  vmScope[2] = createChild(vm_fn_585, vmScope);
  vmScope[0][20] = vmScope[0][12](vmScope[0][7]().mark(createChild(vm_fn_585, vmScope)));
  return vmScope[0][20].apply(vmThis, vmScope[1]);
}

function vm_fn_585(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_585 = vmScope[0][2];
  __vmReportCapturedBinding(585, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(585, "vmScope[0][0][7]", 2, 7, vmScope[0][0][7]);
  vmScope[4] = vmScope[1];
  vmScope[5] = createChild(vm_fn_586__queryPermissionStates, vmScope);
  return vmScope[0][0][7]().wrap(createChild(vm_fn_586__queryPermissionStates, vmScope), captured_vm_fn_585, null, [[3, 10]]);
}

function vm_fn_586__queryPermissionStates(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(586, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(586, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(586, "vmScope[0][0][0][3]", 3, 3, vmScope[0][0][0][3]);
  // L0:
  if (!(1)) { /* goto L215; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 3)) { /* goto L101; */ } // keep-top
    if ((vmScope[2].next === 7)) { /* goto L146; */ } // keep-top
    if ((vmScope[2].next === 10)) { /* goto L169; */ } // keep-top
    if ((vmScope[2].next === 13)) { /* goto L204; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L204; */ } // keep-top
    // POP vmScope[2].next
    /* goto L213; */
  }
  // block boundary after jump @pc=40
  // incoming strict-eq branch from pc=17
  // incoming keep-false from pc=50
  if (((vmScope[0][4].length > 0) && (vmScope[0][4]["0"] !== undefined))) {

  } else {
    // block boundary after jump @pc=66
    // incoming false-branch from pc=59
  }
  // incoming from pc=66
  // PHI@pc=70 slot=1: vmScope[0][4]["0"] | 0
  vmScope[0][2] = vmScope[0][4]["0"];
  if (navigator.permissions) {
    vmScope[2].next = 3;
    /* goto L213; */
  }
  // block boundary after jump @pc=86
  // incoming false-branch from pc=77
  return vmScope[2].abrupt("return", "6");
  // L101:
  // block boundary after return @pc=100
  // incoming strict-eq branch from pc=21
  vmScope[2].prev = 3;
  vmScope[0][3] = vmScope[0][0][0][3].filter(createChild(vm_fn_587, vmScope)).map(createChild(vm_fn_588, vmScope));
  vmScope[2].next = 7;
  return Promise.all(vmScope[0][3]);
  // L146:
  // block boundary after return @pc=145
  // incoming strict-eq branch from pc=25
  return vmScope[2].abrupt("return", vmScope[2].sent.join(""));
  // L169:
  // block boundary after return @pc=168
  // incoming strict-eq branch from pc=29
  vmScope[2].prev = 10;
  vmScope[2].t0 = vmScope[2].catch(3);
  return vmScope[2].abrupt("return", "7");
  // L204:
  // block boundary after return @pc=203
  // incoming strict-eq branch from pc=33
  // incoming strict-eq branch from pc=37
  return vmScope[2].stop();
  // L213:
  // block boundary after return @pc=212
  // incoming from pc=40
  // incoming from pc=86
  // STACK_MERGE_CONFLICT @pc=213: heights=0, 1
  /* goto L0; */
  // L215:
  // block boundary after jump @pc=213
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_587(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(587, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  if (((vmScope[0][0][2] === 3) && ["gyroscope", "accelerometer"].includes(vmScope[2]))) {
    return false;
  }
  return true;
}

function vm_fn_588(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return navigator.permissions.query(Object.defineProperty({}, "name", { value: vmScope[2], writable: true, configurable: true, enumerable: true })).then(createChild(vm_fn_589, vmScope)).catch(createChild(vm_fn_590, vmScope));
}

function vm_fn_589(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((!(vmScope[2].state === "granted"))) {
    if ((vmScope[2].state === "denied")) { /* goto L23; */ } // keep-top
    if ((vmScope[2].state === "prompt")) { /* goto L26; */ } // keep-top
    // POP vmScope[2].state
    /* goto L29; */
  }
  // block boundary after jump @pc=18
  // incoming strict-eq branch from pc=7
  return "2";
  // L23:
  // block boundary after return @pc=22
  // incoming strict-eq branch from pc=11
  return "0";
  // L26:
  // block boundary after return @pc=25
  // incoming strict-eq branch from pc=15
  return "1";
  // L29:
  // block boundary after return @pc=28
  // incoming from pc=18
  return "5";
  // block boundary after return @pc=31
  return undefined;
}

function vm_fn_590(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((vmScope[2].message.indexOf("is not a valid enum value of type PermissionName") > 0)) {

  }
  // PHI@pc=23 slot=0: "4" | "3"
  return "4";
}

function vm_fn_591__getNativeEvalLength(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return window.eval.toString().length;
}

function vm_fn_592__useOfSessionStorage(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    return (!(!window.sessionStorage));
    // block boundary after return @pc=6
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return true;
  }
}

function vm_fn_593__useOfLocalStorage(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    return (!(!window.localStorage));
    // block boundary after return @pc=6
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return true;
  }
}

function vm_fn_594__useOfIndexedDB(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    return (!(!window.indexedDB));
    // block boundary after return @pc=6
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return true;
  }
}

function vm_fn_595__createContrastPreferenceEnum(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[2]["Less"] = (-1);
  vmScope[2][(-1)] = "Less";
  vmScope[2]["None"] = 0;
  vmScope[2][0] = "None";
  vmScope[2]["More"] = 1;
  vmScope[2][1] = "More";
  vmScope[2]["ForcedColors"] = 10;
  vmScope[2][10] = "ForcedColors";
  return vmScope[2];
}

function vm_fn_596__detectContrastPreference(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(596, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(596, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  try {
    if (vmScope[0][29]("no-preference")) {
      return vmScope[0][4].None;
    }
    // block boundary after return @pc=15
    // incoming false-branch from pc=8
    // incoming keep-true from pc=24
    if ((vmScope[0][29]("high") || vmScope[0][29]("more"))) {
      return vmScope[0][4].More;
    }
    // block boundary after return @pc=41
    // incoming false-branch from pc=34
    // incoming keep-true from pc=50
    if ((vmScope[0][29]("low") || vmScope[0][29]("less"))) {
      return vmScope[0][4].Less;
    }
    // block boundary after return @pc=67
    // incoming false-branch from pc=60
    if (vmScope[0][29]("forced")) {
      return vmScope[0][4].ForcedColors;
    }
    // block boundary after return @pc=83
    // incoming false-branch from pc=76
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return undefined;
  }
}

function vm_fn_597__detectForcedColorsActive(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(597, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  try {
    if (vmScope[0][28]("active")) {
      return true;
    }
    // block boundary after return @pc=11
    // incoming false-branch from pc=8
    if (vmScope[0][28]("none")) {
      return false;
    }
    // block boundary after return @pc=23
    // incoming false-branch from pc=20
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return undefined;
  }
}

function vm_fn_598__matchesReducedMotionMedia(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return matchMedia("(prefers-reduced-motion: ".concat(vmScope[2], ")")).matches;
}

function vm_fn_599__matchesForcedColorsMedia(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return matchMedia("(forced-colors: ".concat(vmScope[2], ")")).matches;
}

function vm_fn_600__matchesContrastMedia(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return matchMedia("(prefers-contrast: ".concat(vmScope[2], ")")).matches;
}

function vm_fn_601__detectReducedMotion(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(601, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  try {
    if (vmScope[0][27]("reduce")) {
      return true;
    }
    // block boundary after return @pc=11
    // incoming false-branch from pc=8
    if (vmScope[0][27]("no-preference")) {
      return false;
    }
    // block boundary after return @pc=23
    // incoming false-branch from pc=20
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return undefined;
  }
}

function vm_fn_602__detectMonochromeDepth(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(602, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if ((!matchMedia("(min-monochrome: 0)").matches)) {
    return "browser";
  }
  // block boundary after return @pc=14
  // incoming false-branch from pc=10
  vmScope[2] = 0;
  while ((vmScope[2] <= vmScope[0][5])) {
    if (matchMedia("(max-monochrome: ".concat(vmScope[2], ")")).matches) {
      return vmScope[2];
    }
    // block boundary after return @pc=53
    // incoming false-branch from pc=48
    ++vmScope[2];
  }
  // L61:
  try {
    // block boundary after jump @pc=59
    // incoming false-branch from pc=27
    return "no-mono";
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    return "no-er-mono";
  }
}

function vm_fn_603__detectFloatEndiannessByte(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = new Float32Array(1);
    vmScope[3] = new Uint8Array(vmScope[2].buffer);
    vmScope[2]["0"] = Infinity;
    vmScope[2]["0"] = (vmScope[2]["0"] - vmScope[2]["0"]);
    return vmScope[3]["3"];
    // block boundary after return @pc=48
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
    return (-11111);
  }
}

function vm_fn_604__detectColorGamut(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(604, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[2] = vmScope[0][8](["rec2020", "p3", "srgb"]);
  vmScope[2].s();
  // L26:
  vmScope[3] = vmScope[2].n();
  if ((!vmScope[2].n().done)) {
    vmScope[4] = vmScope[3].value;
    if (matchMedia("(color-gamut: ".concat(vmScope[4], ")")).matches) {
      return vmScope[4];
    }
    // block boundary after return @pc=75
    // incoming false-branch from pc=70
    /* goto L26; */
  }
  // L78:
  try {
    try {
      // block boundary after jump @pc=76
      // incoming false-branch from pc=41
      // incoming control-jump from pc=78
    } catch (__vm_caught_exception) {
      vmScope[5] = __vm_caught_exception;
      vmScope[2].e(vmScope[5]);
    } finally {
      vmScope[2].f();
    }
    return "";
  } catch (__vm_caught_exception) {
    vmScope[6] = __vm_caught_exception;
    return "";
  }
}

function vm_fn_605(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(605, "vmScope[0][34]", 1, 34, vmScope[0][34]);
  return vmScope[0][34].apply(vmThis, vmScope[1]);
}

function vm_fn_606__createEnvironmentFingerprintAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(606, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(606, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(606, "vmScope[0][34]", 1, 34, vmScope[0][34]);
  vmScope[2] = createChild(vm_fn_607, vmScope);
  vmScope[0][34] = vmScope[0][12](vmScope[0][7]().mark(createChild(vm_fn_607, vmScope)));
  return vmScope[0][34].apply(vmThis, vmScope[1]);
}

function vm_fn_607(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_607 = vmScope[0][2];
  __vmReportCapturedBinding(607, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(607, "vmScope[0][0][7]", 2, 7, vmScope[0][0][7]);
  vmScope[3] = vmScope[1];
  vmScope[4] = createChild(vm_fn_608__collectEnvironmentFingerprintPayload, vmScope);
  return vmScope[0][0][7]().wrap(createChild(vm_fn_608__collectEnvironmentFingerprintPayload, vmScope), captured_vm_fn_607);
}

function vm_fn_608__collectEnvironmentFingerprintPayload(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(608, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(608, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][13]", 3, 13, vmScope[0][0][0][13]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][14]", 3, 14, vmScope[0][0][0][14]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][15]", 3, 15, vmScope[0][0][0][15]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][16]", 3, 16, vmScope[0][0][0][16]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][18]", 3, 18, vmScope[0][0][0][18]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][19]", 3, 19, vmScope[0][0][0][19]);
  __vmReportCapturedBinding(608, "vmScope[0][0][0][21]", 3, 21, vmScope[0][0][0][21]);
  // L0:
  if (!(1)) { /* goto L309; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 6)) { /* goto L116; */ } // keep-top
    if ((vmScope[2].next === 10)) { /* goto L154; */ } // keep-top
    if ((vmScope[2].next === 15)) { /* goto L298; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L298; */ } // keep-top
    // POP vmScope[2].next
    /* goto L307; */
  }
  // block boundary after jump @pc=36
  // incoming strict-eq branch from pc=17
  // incoming keep-false from pc=46
  if (((vmScope[0][3].length > 0) && (vmScope[0][3]["0"] !== undefined))) {

  } else {
    // block boundary after jump @pc=62
    // incoming false-branch from pc=55
  }
  // incoming from pc=62
  // PHI@pc=66 slot=1: vmScope[0][3]["0"] | 0
  vmScope[0][2] = vmScope[0][3]["0"];
  vmScope[2].t0 = vmScope[0][0][0][13]();
  vmScope[2].t1 = vmScope[0][0][0][14]();
  vmScope[2].t2 = vmScope[0][0][0][15]();
  vmScope[2].next = 6;
  return vmScope[0][0][0][16]();
  // L116:
  // block boundary after return @pc=115
  // incoming strict-eq branch from pc=21
  vmScope[2].t3 = vmScope[2].sent;
  vmScope[2].t4 = vmScope[0][0][0][18]();
  vmScope[2].next = 10;
  return vmScope[0][0][0][19](vmScope[0][2]);
  // L154:
  // block boundary after return @pc=153
  // incoming strict-eq branch from pc=25
  vmScope[2].t5 = vmScope[2].sent;
  vmScope[2].t6 = vmScope[0][0][0][21]();
  vmScope[2].t7 = (Date.now() + "");
  vmScope[2].t8 = (-Math.floor((new Date().getTimezoneOffset() / 60)));
  return vmScope[2].abrupt("return", Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "browserType", { value: vmScope[2].t0, writable: true, configurable: true, enumerable: true }), "jsFontsList", { value: vmScope[2].t1, writable: true, configurable: true, enumerable: true }), "jsv", { value: vmScope[2].t2, writable: true, configurable: true, enumerable: true }), "load", { value: vmScope[2].t3, writable: true, configurable: true, enumerable: true }), "magic", { value: vmScope[2].t4, writable: true, configurable: true, enumerable: true }), "msgType", { value: 1, writable: true, configurable: true, enumerable: true }), "nap", { value: vmScope[2].t5, writable: true, configurable: true, enumerable: true }), "nativeLength", { value: vmScope[2].t6, writable: true, configurable: true, enumerable: true }), "privacyMode", { value: 0, writable: true, configurable: true, enumerable: true }), "timestamp", { value: vmScope[2].t7, writable: true, configurable: true, enumerable: true }), "timezone", { value: vmScope[2].t8, writable: true, configurable: true, enumerable: true }));
  // L298:
  // block boundary after return @pc=297
  // incoming strict-eq branch from pc=29
  // incoming strict-eq branch from pc=33
  return vmScope[2].stop();
  // L307:
  // block boundary after return @pc=306
  // incoming from pc=36
  /* goto L0; */
  // L309:
  // block boundary after jump @pc=307
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_609__invokePrivacyModeFingerprintAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(609, "vmScope[0][35]", 1, 35, vmScope[0][35]);
  return vmScope[0][35].apply(vmThis, vmScope[1]);
}

function vm_fn_610__createPrivacyModeFingerprintAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_506 = vmScope[0][7];
  __vmReportCapturedBinding(610, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(610, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(610, "vmScope[0][35]", 1, 35, vmScope[0][35]);
  vmScope[2] = createChild(vm_fn_611__createPrivacyModeFingerprintGenerator, vmScope);
  vmScope[0][35] = vmScope[0][12](captured_vm_fn_506().mark(createChild(vm_fn_611__createPrivacyModeFingerprintGenerator, vmScope)));
  return vmScope[0][35].apply(vmThis, vmScope[1]);
}

function vm_fn_611__createPrivacyModeFingerprintGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_611__createPrivacyModeFingerprintGenerator = vmScope[0][2];
  const captured_vm_fn_506 = vmScope[0][0][7];
  __vmReportCapturedBinding(611, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(611, "vmScope[0][0][7]", 2, 7, vmScope[0][0][7]);
  vmScope[3] = createChild(vm_fn_612__collectPrivacyModeFingerprint, vmScope);
  return captured_vm_fn_506().wrap(createChild(vm_fn_612__collectPrivacyModeFingerprint, vmScope), vm_fn_611__createPrivacyModeFingerprintGenerator);
}

function vm_fn_612__collectPrivacyModeFingerprint(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(612, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][22]", 3, 22, vmScope[0][0][0][22]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][23]", 3, 23, vmScope[0][0][0][23]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][24]", 3, 24, vmScope[0][0][0][24]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][25]", 3, 25, vmScope[0][0][0][25]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][26]", 3, 26, vmScope[0][0][0][26]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][30]", 3, 30, vmScope[0][0][0][30]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][31]", 3, 31, vmScope[0][0][0][31]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][32]", 3, 32, vmScope[0][0][0][32]);
  __vmReportCapturedBinding(612, "vmScope[0][0][0][33]", 3, 33, vmScope[0][0][0][33]);
  // L0:
  try {
    if (!(1)) { /* goto L179; */ }
    vmScope[2]["prev"] = vmScope[2].next;
    if ((!(vmScope[2].next === 0))) {
      if ((vmScope[2].next === 3)) { /* goto L168; */ } // keep-top
      if ((vmScope[2].next === "end")) { /* goto L168; */ } // keep-top
      // POP vmScope[2].next
      /* goto L177; */
    }
    // block boundary after jump @pc=28
    // incoming strict-eq branch from pc=17
    vmScope[0][2] = {};
    vmScope[0][2] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "timezone", { value: (-Math.floor((new Date().getTimezoneOffset() / 60))), writable: true, configurable: true, enumerable: true }), "useOfSessionStorage", { value: vmScope[0][0][0][22](), writable: true, configurable: true, enumerable: true }), "useOfLocalStorage", { value: vmScope[0][0][0][23](), writable: true, configurable: true, enumerable: true }), "useOfIndexedDB", { value: vmScope[0][0][0][24](), writable: true, configurable: true, enumerable: true }), "forcedColors", { value: vmScope[0][0][0][26](), writable: true, configurable: true, enumerable: true }), "monochrome", { value: vmScope[0][0][0][31](), writable: true, configurable: true, enumerable: true }), "openDatabase", { value: (!(!window.openDatabase)), writable: true, configurable: true, enumerable: true }), "reducedMotion", { value: vmScope[0][0][0][30](), writable: true, configurable: true, enumerable: true }), "architecture", { value: vmScope[0][0][0][32](), writable: true, configurable: true, enumerable: true }), "contrast", { value: vmScope[0][0][0][25](), writable: true, configurable: true, enumerable: true }), "colorGamut", { value: vmScope[0][0][0][33](), writable: true, configurable: true, enumerable: true });
    // STACK_MERGE_CONFLICT @pc=154: heights=1, 0
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    vmScope[0][2] = Object.defineProperty({}, "err", { value: vmScope[3], writable: true, configurable: true, enumerable: true });
  }
  return vmScope[2].abrupt("return", vmScope[0][2]);
  // L168:
  // block boundary after return @pc=167
  // incoming strict-eq branch from pc=21
  // incoming strict-eq branch from pc=25
  return vmScope[2].stop();
  // L177:
  // block boundary after return @pc=176
  // incoming from pc=28
  /* goto L0; */
  // L179:
  // block boundary after jump @pc=177
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_613__initializePluginFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_614__collectPluginFingerprint, vmScope);
  return undefined;
}

function vm_fn_614__collectPluginFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = [];
  // incoming keep-false from pc=9
  if (!((navigator.plugins && navigator.plugins.length))) { /* goto L157; */ }
  vmScope[3] = 0;
  // L24:
  if (!((vmScope[3] < navigator.plugins.length))) { /* goto L157; */ }
  vmScope[4] = navigator.plugins.item(vmScope[3]);
  // incoming keep-false from pc=54
  if (!((vmScope[4] && vmScope[4].length))) { /* goto L150; */ }
  vmScope[5] = 0;
  while ((vmScope[5] < vmScope[4].length)) {
    vmScope[6] = vmScope[4].item(vmScope[5]);
    if (vmScope[6]) {
      vmScope[2].push("".concat(vmScope[4].filename, "|").concat(vmScope[6].type, "|").concat(vmScope[6].suffixes));
    }
    // incoming false-branch from pc=96
    vmScope[5]++;
  }
  // L150:
  // block boundary after jump @pc=148
  // incoming false-branch from pc=61
  // incoming false-branch from pc=77
  vmScope[3]++;
  /* goto L24; */
  // L157:
  try {
    // block boundary after jump @pc=155
    // incoming false-branch from pc=17
    // incoming false-branch from pc=34
    return Object.defineProperty(Object.defineProperty({}, "plugin", { value: vmScope[2], writable: true, configurable: true, enumerable: true }), "pv", { value: "0", writable: true, configurable: true, enumerable: true });
  } catch (__vm_caught_exception) {
    vmScope[7] = __vm_caught_exception;
  }
}

function vm_fn_615__initializeNavigatorFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_616__detectTouchEventSupport, vmScope);
  vmScope[3] = createChild(vm_fn_617__detectOntouchstartSupport, vmScope);
  vmScope[4] = createChild(vm_fn_618__collectNavigatorPrototypeSnapshot, vmScope);
  vmScope[5] = createChild(vm_fn_621__serializePluginList, vmScope);
  vmScope[0][1] = createChild(vm_fn_622__collectNavigatorAppFingerprint, vmScope);
  vmScope[0][2] = createChild(vm_fn_623__collectNavigatorDeviceFingerprint, vmScope);
  return undefined;
}

function vm_fn_616__detectTouchEventSupport(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    document.createEvent("TouchEvent");
    return 1;
    // block boundary after return @pc=12
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return 2;
  }
}

function vm_fn_617__detectOntouchstartSupport(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    if (("ontouchstart" in window)) {

    } else {
      // block boundary after jump @pc=9
      // incoming false-branch from pc=5
    }
    // incoming from pc=9
    // PHI@pc=13 slot=0: 1 | 2
    return 1;
    // block boundary after return @pc=13
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return 2;
  }
}

function vm_fn_618__collectNavigatorPrototypeSnapshot(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = [];
    vmScope[4] = createChild(vm_fn_619__getObjectTag3, vmScope);
    vmScope[3] = createChild(vm_fn_619__getObjectTag3, vmScope);
    Reflect.ownKeys(navigator.__proto__).forEach(createChild(vm_fn_620__appendNavigatorPrototypeProperty, vmScope));
    return vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return [];
  }
}

function vm_fn_619__getObjectTag3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.prototype.toString.call(vmScope[2]);
}

function vm_fn_620__appendNavigatorPrototypeProperty(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(620, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(620, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[3] = vmScope[2].toString();
  if ((!vmScope[3].includes("vendorSubs"))) {
    vmScope[0][2].push(((vmScope[3] + ":") + vmScope[0][3](navigator[vmScope[2]])));
  }
  return undefined;
}

function vm_fn_621__serializePluginList(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = [];
  vmScope[3] = "";
  vmScope[4] = 0;
  // L15:
  if (!((vmScope[4] < navigator.plugins.length))) { /* goto L148; */ }
  vmScope[5] = navigator.plugins.item(vmScope[4]);
  // incoming keep-false from pc=45
  if (!((vmScope[5] && vmScope[5].length))) { /* goto L141; */ }
  vmScope[6] = 0;
  while ((vmScope[6] < vmScope[5].length)) {
    vmScope[7] = vmScope[5].item(vmScope[6]);
    if (vmScope[7]) {
      vmScope[2].push("".concat(vmScope[5].filename, "|").concat(vmScope[7].type, "|").concat(vmScope[7].suffixes));
    }
    // incoming false-branch from pc=87
    vmScope[6]++;
  }
  // L141:
  // block boundary after jump @pc=139
  // incoming false-branch from pc=52
  // incoming false-branch from pc=68
  vmScope[4]++;
  /* goto L15; */
  // L148:
  try {
    // block boundary after jump @pc=146
    // incoming false-branch from pc=25
    vmScope[3] = vmScope[2].join(",").toString();
    return vmScope[3];
  } catch (__vm_caught_exception) {
    vmScope[8] = __vm_caught_exception;
    return "";
  }
}

function vm_fn_622__collectNavigatorAppFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(622, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(622, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(622, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  if (navigator.hardwareConcurrency) {

  }
  if (navigator.maxTouchPoints) {

  }
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "appCodeName", { value: (navigator.appCodeName + ""), writable: true, configurable: true, enumerable: true }), "appMinorVersion", { value: (navigator.appMinorVersion + ""), writable: true, configurable: true, enumerable: true }), "appName", { value: (navigator.appName + ""), writable: true, configurable: true, enumerable: true }), "appVersion", { value: (navigator.appVersion + ""), writable: true, configurable: true, enumerable: true }), "bluetooth", { value: vmScope[0][0][0](navigator, "bluetooth"), writable: true, configurable: true, enumerable: true }), "buildID", { value: (navigator.buildID + ""), writable: true, configurable: true, enumerable: true }), "cookieEnabled", { value: vmScope[0][0][0](navigator, "cookieEnabled"), writable: true, configurable: true, enumerable: true }), "cpuClass", { value: (navigator.cpuClass + ""), writable: true, configurable: true, enumerable: true }), "credentials", { value: vmScope[0][0][0](navigator, "credentials"), writable: true, configurable: true, enumerable: true }), "deviceMemory", { value: (navigator.deviceMemory + ""), writable: true, configurable: true, enumerable: true }), "doNotTrack", { value: (navigator.doNotTrack + ""), writable: true, configurable: true, enumerable: true }), "hardwareConcurrency", { value: Math.floor(navigator.hardwareConcurrency), writable: true, configurable: true, enumerable: true }), "language", { value: (navigator.language + ""), writable: true, configurable: true, enumerable: true }), "languages", { value: (navigator.languages + ""), writable: true, configurable: true, enumerable: true }), "maxTouchPoints", { value: Math.floor(navigator.maxTouchPoints), writable: true, configurable: true, enumerable: true }), "msDoNotTrack", { value: (navigator.msDoNotTrack + ""), writable: true, configurable: true, enumerable: true }), "oscpu", { value: (navigator.oscpu + ""), writable: true, configurable: true, enumerable: true }), "platform", { value: (navigator.platform + ""), writable: true, configurable: true, enumerable: true }), "product", { value: (navigator.product + ""), writable: true, configurable: true, enumerable: true }), "productSub", { value: (navigator.productSub + ""), writable: true, configurable: true, enumerable: true }), "requestMediaKeySystemAccess", { value: vmScope[0][0][0](navigator, "requestMediaKeySystemAccess"), writable: true, configurable: true, enumerable: true }), "storage", { value: vmScope[0][0][0](navigator, "storage"), writable: true, configurable: true, enumerable: true }), "systemLanguage", { value: (navigator.systemLanguage + ""), writable: true, configurable: true, enumerable: true }), "touchEvent", { value: vmScope[0][2](), writable: true, configurable: true, enumerable: true }), "touchstart", { value: vmScope[0][3](), writable: true, configurable: true, enumerable: true }), "userLanguage", { value: (navigator.userLanguage + ""), writable: true, configurable: true, enumerable: true }), "vendor", { value: (navigator.vendor + ""), writable: true, configurable: true, enumerable: true }), "vendorSub", { value: (navigator.vendorSub + ""), writable: true, configurable: true, enumerable: true }), "vibrate", { value: vmScope[0][0][0](navigator, "vibrate"), writable: true, configurable: true, enumerable: true }), "webdriver", { value: (navigator.webdriver + ""), writable: true, configurable: true, enumerable: true });
}

function vm_fn_623__collectNavigatorDeviceFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(623, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(623, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(623, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  if (navigator.hardwareConcurrency) {

  }
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "userAgent", { value: (navigator.userAgent + ""), writable: true, configurable: true, enumerable: true }), "vendor", { value: (navigator.vendor + ""), writable: true, configurable: true, enumerable: true }), "navToString", { value: vmScope[0][4](), writable: true, configurable: true, enumerable: true }), "cookieEnabled", { value: vmScope[0][0][0](navigator, "cookieEnabled"), writable: true, configurable: true, enumerable: true }), "cpuClass", { value: (navigator.cpuClass + ""), writable: true, configurable: true, enumerable: true }), "oscpu", { value: (navigator.oscpu + ""), writable: true, configurable: true, enumerable: true }), "plugins", { value: vmScope[0][5](), writable: true, configurable: true, enumerable: true }), "hardwareConcurrency", { value: Math.floor(navigator.hardwareConcurrency), writable: true, configurable: true, enumerable: true });
}

function vm_fn_624__initializeVideoCapabilityHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_625__collectVideoCodecSupport, vmScope);
  vmScope[0][0] = createChild(vm_fn_627__collectVideoCapabilityFingerprint, vmScope);
  return undefined;
}

function vm_fn_625__collectVideoCodecSupport(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = ["video/mp4; codecs=\"flac\"", "video/mp4; codecs=\"H.264, mp3\"", "video/mp4; codecs=\"H.264, aac\"", "video/mpeg; codec=\"H.264\"", "video/ogg; codecs=\"theora\"", "video/ogg; codecs=\"opus\"", "video/webm; codecs=\"vp9, opus\"", "video/webm; codecs=\"vp8, vorbis\""];
    vmScope[3] = "";
    vmScope[4] = document.createElement("video");
    vmScope[2].forEach(createChild(vm_fn_626__appendVideoCodecSupport, vmScope));
    return vmScope[3];
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return "";
  }
}

function vm_fn_626__appendVideoCodecSupport(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(626, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(626, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[0][3] = (vmScope[0][3] + (((vmScope[2] + ":") + ((!(!vmScope[0][4].canPlayType)) && vmScope[0][4].canPlayType(vmScope[2]))) + "|"));
  (vmScope[0][3] + (((vmScope[2] + ":") + ((!(!vmScope[0][4].canPlayType)) && vmScope[0][4].canPlayType(vmScope[2]))) + "|"));
  return undefined;
}

function vm_fn_627__collectVideoCapabilityFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(627, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  vmScope[2] = Object.defineProperty({}, "videoFormats", { value: vmScope[0][2](), writable: true, configurable: true, enumerable: true });
  return vmScope[2];
}

function vm_fn_628__initializeScreenFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_629__collectViewportMetrics, vmScope);
  vmScope[0][1] = createChild(vm_fn_630__collectScreenMetrics, vmScope);
  return undefined;
}

function vm_fn_629__collectViewportMetrics(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if (document.body) {

  } else {
    // block boundary after jump @pc=132
    // incoming false-branch from pc=121
  }
  // incoming from pc=132
  if (document.body) {

  } else {
    // block boundary after jump @pc=154
    // incoming false-branch from pc=143
  }
  // incoming from pc=154
  vmScope[2] = window.screen;
  // incoming keep-true from pc=193
  if (((window.screen === null) || (vmScope[2] === undefined))) {
    /* goto L241; */
  }
  // block boundary after jump @pc=207
  // incoming false-branch from pc=202
  vmScope[3] = vmScope[2].orientation;
  // incoming keep-true from pc=220
  if (((vmScope[2].orientation === null) || (vmScope[3] === undefined))) {

  } else {
    // block boundary after jump @pc=234
    // incoming false-branch from pc=229
  }
  // L241:
  // L241:
  // incoming from pc=207
  // incoming from pc=234
  // incoming keep-true from pc=241
  vmScope[4] = window.screen;
  // incoming keep-true from pc=257
  if (((window.screen === null) || (vmScope[4] === undefined))) {
    /* goto L305; */
  }
  // block boundary after jump @pc=271
  // incoming false-branch from pc=266
  vmScope[5] = vmScope[4].orientation;
  // incoming keep-true from pc=284
  if (((vmScope[4].orientation === null) || (vmScope[5] === undefined))) {

  } else {
    // block boundary after jump @pc=298
    // incoming false-branch from pc=293
  }
  // L305:
  // L305:
  // incoming from pc=271
  // incoming from pc=298
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "innerWidth", { value: (window.innerWidth >> 0), writable: true, configurable: true, enumerable: true }), "innerHeight", { value: (window.innerHeight >> 0), writable: true, configurable: true, enumerable: true }), "outerWidth", { value: (window.outerWidth >> 0), writable: true, configurable: true, enumerable: true }), "outerHeight", { value: (window.outerHeight >> 0), writable: true, configurable: true, enumerable: true }), "screenX", { value: (window.screenX >> 0), writable: true, configurable: true, enumerable: true }), "screenY", { value: (window.screenY >> 0), writable: true, configurable: true, enumerable: true }), "pageXOffset", { value: (window.pageYOffset >> 0), writable: true, configurable: true, enumerable: true }), "pageYOffset", { value: (window.pageYOffset >> 0), writable: true, configurable: true, enumerable: true }), "availWidth", { value: (window.screen.availWidth >> 0), writable: true, configurable: true, enumerable: true }), "availHeight", { value: (window.screen.availHeight >> 0), writable: true, configurable: true, enumerable: true }), "sizeWidth", { value: (window.screen.width >> 0), writable: true, configurable: true, enumerable: true }), "sizeHeight", { value: (window.screen.height >> 0), writable: true, configurable: true, enumerable: true }), "clientWidth", { value: (document.body.clientWidth >> 0), writable: true, configurable: true, enumerable: true }), "clientHeight", { value: (document.body.clientHeight >> 0), writable: true, configurable: true, enumerable: true }), "colorDepth", { value: (window.screen.colorDepth >> 0), writable: true, configurable: true, enumerable: true }), "pixelDepth", { value: (window.screen.pixelDepth >> 0), writable: true, configurable: true, enumerable: true }), "orientaionType", { value: (vmScope[3].type || ""), writable: true, configurable: true, enumerable: true }), "orientaionAngle", { value: (vmScope[5].angle >> 0), writable: true, configurable: true, enumerable: true });
}

function vm_fn_630__collectScreenMetrics(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = window.screen;
  if (((window.screen === null) || (vmScope[2] === undefined))) {

  }
  vmScope[3] = window.screen;
  if (((window.screen === null) || (vmScope[3] === undefined))) {

  }
  vmScope[4] = window.screen;
  if (((window.screen === null) || (vmScope[4] === undefined))) {

  }
  vmScope[5] = window.screen;
  if (((window.screen === null) || (vmScope[5] === undefined))) {

  }
  vmScope[6] = window.screen;
  if (((window.screen === null) || (vmScope[6] === undefined))) {

  }
  vmScope[7] = window.screen;
  if (((window.screen === null) || (vmScope[7] === undefined))) {

  }
  vmScope[8] = window.screen;
  if (((window.screen === null) || (vmScope[8] === undefined))) {

  }
  vmScope[9] = window.screen;
  if (((window.screen === null) || (vmScope[9] === undefined))) {

  }
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "height", { value: vmScope[2].height, writable: true, configurable: true, enumerable: true }), "width", { value: vmScope[3].width, writable: true, configurable: true, enumerable: true }), "colorDepth", { value: vmScope[4].colorDepth, writable: true, configurable: true, enumerable: true }), "pixelDepth", { value: vmScope[5].pixelDepth, writable: true, configurable: true, enumerable: true }), "availHeight", { value: vmScope[6].availHeight, writable: true, configurable: true, enumerable: true }), "availWidth", { value: vmScope[7].availWidth, writable: true, configurable: true, enumerable: true }), "availTop", { value: vmScope[8].availTop, writable: true, configurable: true, enumerable: true }), "availLeft", { value: vmScope[9].availLeft, writable: true, configurable: true, enumerable: true });
}

function vm_fn_631__initializeWebglFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_632__collectWebglFingerprint, vmScope);
  return undefined;
}

function vm_fn_632__collectWebglFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[4] = document.createElement("canvas");
    vmScope[3] = vmScope[4].getContext("webgl");
    if ((!vmScope[3])) {
      return {};
    }
    // block boundary after return @pc=32
    // incoming false-branch from pc=29
    vmScope[2] = vmScope[3].getContextAttributes();
  } catch (__vm_caught_exception) {
    vmScope[9] = __vm_caught_exception;
    return {};
  }
  // incoming keep-false from pc=55
  // incoming keep-false from pc=64
  if ((((vmScope[3].getContextAttributes() !== null) && (vmScope[2] !== undefined)) && vmScope[2].antialias)) {

  } else {
    // block boundary after jump @pc=75
    // incoming false-branch from pc=71
  }
  // incoming from pc=75
  vmScope[5] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "antialias", { value: 1, writable: true, configurable: true, enumerable: true }), "blueBits", { value: vmScope[3].getParameter(vmScope[3].BLUE_BITS), writable: true, configurable: true, enumerable: true }), "depthBits", { value: vmScope[3].getParameter(vmScope[3].DEPTH_BITS), writable: true, configurable: true, enumerable: true }), "greenBits", { value: vmScope[3].getParameter(vmScope[3].GREEN_BITS), writable: true, configurable: true, enumerable: true }), "maxCombinedTextureImageUnits", { value: vmScope[3].getParameter(vmScope[3].MAX_COMBINED_TEXTURE_IMAGE_UNITS), writable: true, configurable: true, enumerable: true }), "maxCubeMapTextureSize", { value: vmScope[3].getParameter(vmScope[3].MAX_CUBE_MAP_TEXTURE_SIZE), writable: true, configurable: true, enumerable: true }), "maxFragmentUniformVectors", { value: vmScope[3].getParameter(vmScope[3].MAX_FRAGMENT_UNIFORM_VECTORS), writable: true, configurable: true, enumerable: true }), "maxRenderbufferSize", { value: vmScope[3].getParameter(vmScope[3].MAX_RENDERBUFFER_SIZE), writable: true, configurable: true, enumerable: true }), "maxTextureImageUnits", { value: vmScope[3].getParameter(vmScope[3].MAX_TEXTURE_IMAGE_UNITS), writable: true, configurable: true, enumerable: true }), "maxTextureSize", { value: vmScope[3].getParameter(vmScope[3].MAX_TEXTURE_SIZE), writable: true, configurable: true, enumerable: true }), "maxVaryingVectors", { value: vmScope[3].getParameter(vmScope[3].MAX_VARYING_VECTORS), writable: true, configurable: true, enumerable: true }), "maxVertexAttribs", { value: vmScope[3].getParameter(vmScope[3].MAX_VERTEX_ATTRIBS), writable: true, configurable: true, enumerable: true }), "maxVertexTextureImageUnits", { value: vmScope[3].getParameter(vmScope[3].MAX_VERTEX_TEXTURE_IMAGE_UNITS), writable: true, configurable: true, enumerable: true }), "maxVertexUniformVectors", { value: vmScope[3].getParameter(vmScope[3].MAX_VERTEX_UNIFORM_VECTORS), writable: true, configurable: true, enumerable: true }), "shadingLanguageVersion", { value: vmScope[3].getParameter(vmScope[3].SHADING_LANGUAGE_VERSION), writable: true, configurable: true, enumerable: true }), "stencilBits", { value: vmScope[3].getParameter(vmScope[3].STENCIL_BITS), writable: true, configurable: true, enumerable: true }), "version", { value: vmScope[3].getParameter(vmScope[3].VERSION), writable: true, configurable: true, enumerable: true });
  vmScope[6] = vmScope[3].getExtension("EXT_texture_filter_anisotropic");
  if (vmScope[6]) {
    vmScope[7] = vmScope[3].getParameter(vmScope[6].MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    if ((vmScope[7] === 0)) {

    } else {
      // block boundary after jump @pc=371
      // incoming false-branch from pc=367
    }
    // incoming from pc=371
    vmScope[5].maxAnisotropy = vmScope[7];
  }
  // L378:
  // incoming false-branch from pc=340
  vmScope[8] = vmScope[3].getExtension("WEBGL_debug_renderer_info");
  if (vmScope[8]) {
    vmScope[5].renderer = vmScope[3].getParameter(vmScope[8].UNMASKED_RENDERER_WEBGL);
    vmScope[5].vendor = vmScope[3].getParameter(vmScope[8].UNMASKED_VENDOR_WEBGL);
  }
  // incoming false-branch from pc=394
  return vmScope[5];
}

function vm_fn_633__initializeWindowFingerprintHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][1] = createChild(vm_fn_634__collectWindowFingerprint, vmScope);
  return undefined;
}

function vm_fn_634__collectWindowFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(634, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  if (window.devicePixelRatio) {

  }
  vmScope[2] = window.location;
  if (((window.location === null) || (vmScope[2] === undefined))) {

  }
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "ActiveXObject", { value: vmScope[0][0][0](window, "ActiveXObject"), writable: true, configurable: true, enumerable: true }), "BluetoothUUID", { value: vmScope[0][0][0](window, "BluetoothUUID"), writable: true, configurable: true, enumerable: true }), "devicePixelRatio", { value: Math.floor(window.devicePixelRatio), writable: true, configurable: true, enumerable: true }), "external", { value: vmScope[0][0][0](window, "external"), writable: true, configurable: true, enumerable: true }), "Image", { value: vmScope[0][0][0](window, "Image"), writable: true, configurable: true, enumerable: true }), "indexDB", { value: vmScope[0][0][0](window, "indexDB"), writable: true, configurable: true, enumerable: true }), "isSecureContext", { value: vmScope[0][0][0](window, "isSecureContext"), writable: true, configurable: true, enumerable: true }), "localStorage", { value: vmScope[0][0][0](window, "localStorage"), writable: true, configurable: true, enumerable: true }), "location", { value: (vmScope[2].href || ""), writable: true, configurable: true, enumerable: true }), "locationbar", { value: vmScope[0][0][0](window, "locationbar"), writable: true, configurable: true, enumerable: true }), "mozRTCPeerConnection", { value: vmScope[0][0][0](window, "mozRTCPeerConnection"), writable: true, configurable: true, enumerable: true }), "netscape", { value: vmScope[0][0][0](window, "netscape"), writable: true, configurable: true, enumerable: true }), "postMessage", { value: vmScope[0][0][0](window, "postMessage"), writable: true, configurable: true, enumerable: true }), "sessionStorage", { value: vmScope[0][0][0](window, "sessionStorage"), writable: true, configurable: true, enumerable: true }), "toolbar", { value: vmScope[0][0][0](window, "toolbar"), writable: true, configurable: true, enumerable: true }), "webkitRequestAnimationFrame", { value: vmScope[0][0][0](window, "webkitRequestAnimationFrame"), writable: true, configurable: true, enumerable: true });
}

function vm_fn_635__initializeWebIdHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_636__collectBuiltinFunctionLengths, vmScope);
  vmScope[3] = createChild(vm_fn_637__collectConsoleMemoryFingerprint, vmScope);
  vmScope[4] = createChild(vm_fn_638__collectMouseEventFingerprint, vmScope);
  vmScope[0][0] = createChild(vm_fn_639__collectWebIdFingerprint, vmScope);
  return undefined;
}

function vm_fn_636__collectBuiltinFunctionLengths(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = {};
  vmScope[3] = atob.toString();
  // incoming keep-true from pc=22
  if (((atob.toString() === null) || (vmScope[3] === undefined))) {

  } else {
    // block boundary after jump @pc=36
    // incoming false-branch from pc=31
  }
  // incoming from pc=36
  vmScope[4] = btoa.toString();
  // incoming keep-true from pc=58
  if (((btoa.toString() === null) || (vmScope[4] === undefined))) {

  } else {
    // block boundary after jump @pc=72
    // incoming false-branch from pc=67
  }
  // incoming from pc=72
  if (!((typeof alert !== "undefined"))) { /* goto L149; */ }
  vmScope[5] = alert;
  // incoming keep-true from pc=96
  if (((alert === null) || (vmScope[5] === undefined))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=110
  // incoming false-branch from pc=105
  vmScope[6] = vmScope[5].toString();
  // incoming keep-true from pc=126
  if (((vmScope[5].toString() === null) || (vmScope[6] === undefined))) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=135
  }
  // L147:
  // L147:
  // incoming from pc=110
  // incoming from pc=140
  /* goto L151; */
  // L149:
  // block boundary after jump @pc=147
  // incoming false-branch from pc=86
  // L151:
  // incoming from pc=147
  if ((typeof alert !== "undefined")) {
    vmScope[7] = Function.prototype.toString.call(alert);
    // incoming keep-true from pc=179
    if (((Function.prototype.toString.call(alert) === null) || (vmScope[7] === undefined))) {

    } else {
      // block boundary after jump @pc=193
      // incoming false-branch from pc=188
    }
    // incoming from pc=193
    /* goto L204; */
  }
  // L202:
  // block boundary after jump @pc=200
  // incoming false-branch from pc=158
  // L204:
  try {
    // incoming from pc=200
    vmScope[2] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "code", { value: 0, writable: true, configurable: true, enumerable: true }), "ab", { value: vmScope[3].length, writable: true, configurable: true, enumerable: true }), "ba", { value: vmScope[4].length, writable: true, configurable: true, enumerable: true }), "al", { value: vmScope[6].length, writable: true, configurable: true, enumerable: true }), "alFunc", { value: vmScope[7].length, writable: true, configurable: true, enumerable: true });
    return vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[8] = __vm_caught_exception;
    vmScope[2] = Object.defineProperty(Object.defineProperty({}, "code", { value: 1, writable: true, configurable: true, enumerable: true }), "err", { value: vmScope[8], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_637__collectConsoleMemoryFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = {};
    // incoming keep-true from pc=18
    vmScope[3] = console.memory;
    // incoming keep-true from pc=40
    if (((console.memory === null) || (vmScope[3] === undefined))) {

    } else {
      // block boundary after jump @pc=54
      // incoming false-branch from pc=49
    }
    // incoming from pc=54
    // incoming keep-true from pc=61
    vmScope[2] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "code", { value: 0, writable: true, configurable: true, enumerable: true }), "me", { value: Object.keys((console.memory || {})), writable: true, configurable: true, enumerable: true }), "mept", { value: Object.keys((vmScope[3].__proto__ || {})), writable: true, configurable: true, enumerable: true });
    return vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[4] = __vm_caught_exception;
    vmScope[2] = Object.defineProperty(Object.defineProperty({}, "code", { value: 1, writable: true, configurable: true, enumerable: true }), "err", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_638__collectMouseEventFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = {};
    vmScope[4] = new MouseEvent("click");
    vmScope[3] = Object.keys(vmScope[4]);
    // incoming keep-true from pc=41
    if (((Object.keys(vmScope[4]) === null) || (vmScope[3] === undefined))) {

    } else {
      // block boundary after jump @pc=55
      // incoming false-branch from pc=50
    }
    // incoming from pc=55
    vmScope[2] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "code", { value: 0, writable: true, configurable: true, enumerable: true }), "isT", { value: vmScope[4].isTrusted, writable: true, configurable: true, enumerable: true }), "length", { value: vmScope[3].length, writable: true, configurable: true, enumerable: true });
    return vmScope[2];
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    vmScope[2] = Object.defineProperty(Object.defineProperty({}, "code", { value: 1, writable: true, configurable: true, enumerable: true }), "err", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_639__collectWebIdFingerprint(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(639, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(639, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(639, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  return Object.defineProperty({}, "WebId", { value: JSON.stringify(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "aa", { value: vmScope[0][2](), writable: true, configurable: true, enumerable: true }), "bb", { value: vmScope[0][3](), writable: true, configurable: true, enumerable: true }), "cc", { value: vmScope[0][4](), writable: true, configurable: true, enumerable: true })), writable: true, configurable: true, enumerable: true });
}

function vm_fn_640__initializeClientInfoHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_641__typeofHelper106, vmScope);
  vmScope[3] = createChild(vm_fn_644__createRegeneratorRuntime6, vmScope);
  vmScope[4] = createChild(vm_fn_694__asyncGeneratorStep6, vmScope);
  vmScope[5] = createChild(vm_fn_695, vmScope);
  vmScope[0][0] = createChild(vm_fn_700__encodeStringToUpperHex, vmScope);
  vmScope[0][1] = createChild(vm_fn_701__extractPngTailSignature, vmScope);
  vmScope[0][2] = createChild(vm_fn_702__generateUuidV4, vmScope);
  vmScope[0][3] = createChild(vm_fn_704__getOrCreateStoredId, vmScope);
  vmScope[0][4] = createChild(vm_fn_705__invokeClientInfoAsync, vmScope);
  vmScope[6] = createChild(vm_fn_706__createClientInfoAsync, vmScope);
  return undefined;
}

function vm_fn_641__typeofHelper106(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(641, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_642__baseTypeof9, vmScope) | createChild(vm_fn_643__symbolAwareTypeof9, vmScope)
  vmScope[0][2] = createChild(vm_fn_642__baseTypeof9, vmScope);
  // POP createChild(vm_fn_642__baseTypeof9, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_642__baseTypeof9(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_643__symbolAwareTypeof9(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_644__createRegeneratorRuntime6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[11] = createChild(vm_fn_647__defineIteratorMethod6, vmScope);
    vmScope[12] = createChild(vm_fn_649__wrapGeneratorFunction6, vmScope);
    vmScope[13] = createChild(vm_fn_650, vmScope);
    vmScope[19] = createChild(vm_fn_651, vmScope);
    vmScope[20] = createChild(vm_fn_652, vmScope);
    vmScope[21] = createChild(vm_fn_653, vmScope);
    vmScope[26] = createChild(vm_fn_655, vmScope);
    vmScope[27] = createChild(vm_fn_658, vmScope);
    vmScope[28] = createChild(vm_fn_667, vmScope);
    vmScope[29] = createChild(vm_fn_669__maybeInvokeDelegate6, vmScope);
    vmScope[30] = createChild(vm_fn_670__pushTryEntry6, vmScope);
    vmScope[31] = createChild(vm_fn_671__resetCompletionRecord6, vmScope);
    vmScope[32] = createChild(vm_fn_672__resetTryEntryContext6, vmScope);
    vmScope[33] = createChild(vm_fn_673__getIterator6, vmScope);
    vmScope[34] = createChild(vm_fn_645, vmScope);
    vmScope[0][3] = createChild(vm_fn_645, vmScope);
    vmScope[3] = {};
    vmScope[4] = Object.prototype;
    vmScope[5] = vmScope[4].hasOwnProperty;
    // incoming keep-true from pc=102
    vmScope[6] = (Object.defineProperty || createChild(vm_fn_646__definePropertyFallback6, vmScope));
    if (("function" == typeof Symbol)) {

    } else {
      // block boundary after jump @pc=118
      // incoming false-branch from pc=114
    }
    // incoming from pc=118
    // PHI@pc=121 slot=0: Symbol | {}
    vmScope[7] = Symbol;
    // incoming keep-true from pc=129
    vmScope[8] = (vmScope[7].iterator || "@@iterator");
    // incoming keep-true from pc=141
    vmScope[9] = (vmScope[7].asyncIterator || "@@asyncIterator");
    // incoming keep-true from pc=153
    vmScope[10] = (vmScope[7].toStringTag || "@@toStringTag");
    vmScope[11]({}, "");
    vmScope[3].wrap = vmScope[12];
  } catch (__vm_caught_exception) {
    vmScope[35] = __vm_caught_exception;
    vmScope[36] = createChild(vm_fn_648, vmScope);
    vmScope[11] = createChild(vm_fn_648, vmScope);
  }
  vmScope[14] = "suspendedStart";
  vmScope[15] = "suspendedYield";
  vmScope[16] = "executing";
  vmScope[17] = "completed";
  vmScope[18] = {};
  vmScope[22] = {};
  vmScope[11](vmScope[22], vmScope[8], createChild(vm_fn_654__returnThis16, vmScope));
  vmScope[23] = Object.getPrototypeOf;
  // incoming keep-false from pc=245
  vmScope[24] = (vmScope[23] && vmScope[23](vmScope[23](vmScope[33]([]))));
  // incoming keep-false from pc=273
  // incoming keep-false from pc=282
  if (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8]))) {
    vmScope[22] = vmScope[24];
  }
  // incoming keep-false from pc=298
  (((vmScope[24] && (vmScope[24] !== vmScope[4])) && vmScope[5].call(vmScope[24], vmScope[8])) && vmScope[24]);
  vmScope[19]["prototype"] = Object.create(vmScope[22]);
  vmScope[21]["prototype"] = Object.create(vmScope[22]);
  vmScope[25] = Object.create(vmScope[22]);
  vmScope[20]["prototype"] = vmScope[21];
  // POP vmScope[21]
  vmScope[6](vmScope[25], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[21], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[6](vmScope[21], "constructor", Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[20], writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  vmScope[20]["displayName"] = vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[11](vmScope[21], vmScope[10], "GeneratorFunction");
  vmScope[3]["isGeneratorFunction"] = createChild(vm_fn_675__isGeneratorFunction6, vmScope);
  // POP createChild(vm_fn_675__isGeneratorFunction6, vmScope)
  vmScope[3]["mark"] = createChild(vm_fn_676__markGeneratorFunction6, vmScope);
  // POP createChild(vm_fn_676__markGeneratorFunction6, vmScope)
  vmScope[3]["awrap"] = createChild(vm_fn_677__wrapAwaitValue6, vmScope);
  // POP createChild(vm_fn_677__wrapAwaitValue6, vmScope)
  vmScope[26](vmScope[27].prototype);
  vmScope[11](vmScope[27].prototype, vmScope[9], createChild(vm_fn_678__returnThis17, vmScope));
  vmScope[3]["AsyncIterator"] = vmScope[27];
  // POP vmScope[27]
  vmScope[3]["async"] = createChild(vm_fn_679__createAsyncFunctionWrapper6, vmScope);
  // POP createChild(vm_fn_679__createAsyncFunctionWrapper6, vmScope)
  vmScope[26](vmScope[25]);
  vmScope[11](vmScope[25], vmScope[10], "Generator");
  vmScope[11](vmScope[25], vmScope[8], createChild(vm_fn_681__returnThis18, vmScope));
  vmScope[11](vmScope[25], "toString", createChild(vm_fn_682__getGeneratorTag6, vmScope));
  vmScope[3]["keys"] = createChild(vm_fn_683, vmScope);
  // POP createChild(vm_fn_683, vmScope)
  vmScope[3]["values"] = vmScope[33];
  // POP vmScope[33]
  vmScope[37] = createChild(vm_fn_685__resetGeneratorContext6, vmScope);
  vmScope[38] = createChild(vm_fn_686__stopGeneratorContext6, vmScope);
  vmScope[39] = createChild(vm_fn_687__dispatchException6, vmScope);
  vmScope[40] = createChild(vm_fn_689__abrupt6, vmScope);
  vmScope[41] = createChild(vm_fn_690__complete6, vmScope);
  vmScope[42] = createChild(vm_fn_691__finishFinallyEntry6, vmScope);
  vmScope[43] = createChild(vm_fn_692__catchTryEntry6, vmScope);
  vmScope[44] = createChild(vm_fn_693__delegateYield6, vmScope);
  vmScope[32]["prototype"] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_685__resetGeneratorContext6, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_686__stopGeneratorContext6, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_687__dispatchException6, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_689__abrupt6, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_690__complete6, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_691__finishFinallyEntry6, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_692__catchTryEntry6, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_693__delegateYield6, vmScope), writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "constructor", { value: vmScope[32], writable: true, configurable: true, enumerable: true }), "reset", { value: createChild(vm_fn_685__resetGeneratorContext6, vmScope), writable: true, configurable: true, enumerable: true }), "stop", { value: createChild(vm_fn_686__stopGeneratorContext6, vmScope), writable: true, configurable: true, enumerable: true }), "dispatchException", { value: createChild(vm_fn_687__dispatchException6, vmScope), writable: true, configurable: true, enumerable: true }), "abrupt", { value: createChild(vm_fn_689__abrupt6, vmScope), writable: true, configurable: true, enumerable: true }), "complete", { value: createChild(vm_fn_690__complete6, vmScope), writable: true, configurable: true, enumerable: true }), "finish", { value: createChild(vm_fn_691__finishFinallyEntry6, vmScope), writable: true, configurable: true, enumerable: true }), "catch", { value: createChild(vm_fn_692__catchTryEntry6, vmScope), writable: true, configurable: true, enumerable: true }), "delegateYield", { value: createChild(vm_fn_693__delegateYield6, vmScope), writable: true, configurable: true, enumerable: true })
  return vmScope[3];
}

function vm_fn_645(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(645, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  return vmScope[0][3];
}

function vm_fn_646__definePropertyFallback6(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4].value;
  return undefined;
}

function vm_fn_647__defineIteratorMethod6(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  Object.defineProperty(vmScope[2], vmScope[3], Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[4], writable: true, configurable: true, enumerable: true }), "enumerable", { value: (!0), writable: true, configurable: true, enumerable: true }), "configurable", { value: (!0), writable: true, configurable: true, enumerable: true }), "writable", { value: (!0), writable: true, configurable: true, enumerable: true }));
  return vmScope[2][vmScope[3]];
}

function vm_fn_648(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  vmScope[2][vmScope[3]] = vmScope[4];
  return vmScope[4];
}

function vm_fn_649__wrapGeneratorFunction6(scope, thisArg, argsLike, arg0, arg1, arg2, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(649, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(649, "vmScope[0][19]", 1, 19, vmScope[0][19]);
  __vmReportCapturedBinding(649, "vmScope[0][28]", 1, 28, vmScope[0][28]);
  __vmReportCapturedBinding(649, "vmScope[0][32]", 1, 32, vmScope[0][32]);
  if ((vmScope[3] && (vmScope[3].prototype instanceof vmScope[0][19]))) {

  }
  // PHI@pc=24 slot=0: vmScope[3] | vmScope[0][19]
  vmScope[6] = vmScope[3];
  vmScope[7] = Object.create(vmScope[6].prototype);
  vmScope[8] = new vmScope[0][32]((vmScope[5] || []));
  vmScope[0][6](vmScope[7], "_invoke", Object.defineProperty({}, "value", { value: vmScope[0][28](vmScope[2], vmScope[4], vmScope[8]), writable: true, configurable: true, enumerable: true }));
  return vmScope[7];
}

function vm_fn_650(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  try {
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "normal", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[2].call(vmScope[3], vmScope[4]), writable: true, configurable: true, enumerable: true });
    // block boundary after return @pc=21
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return Object.defineProperty(Object.defineProperty({}, "type", { value: "throw", writable: true, configurable: true, enumerable: true }), "arg", { value: vmScope[5], writable: true, configurable: true, enumerable: true });
  }
}

function vm_fn_651(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_652(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_653(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_654__returnThis16(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_655(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  ["next", "throw", "return"].forEach(createChild(vm_fn_656, vmScope));
  return undefined;
}

function vm_fn_656(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(656, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(656, "vmScope[0][0][11]", 2, 11, vmScope[0][0][11]);
  vmScope[0][0][11](vmScope[0][2], vmScope[2], createChild(vm_fn_657__invokeIteratorMethod6, vmScope));
  return undefined;
}

function vm_fn_657__invokeIteratorMethod6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(657, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmThis._invoke(vmScope[0][2], vmScope[2]);
}

function vm_fn_658(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(658, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[4] = createChild(vm_fn_659, vmScope);
  vmScope[6] = createChild(vm_fn_664__enqueueAsyncIteratorStep6, vmScope);
  vmScope[0][6](vmThis, "_invoke", Object.defineProperty({}, "value", { value: createChild(vm_fn_664__enqueueAsyncIteratorStep6, vmScope), writable: true, configurable: true, enumerable: true }));
  return undefined;
}

function vm_fn_659(scope, thisArg, argsLike, arg0, arg1, arg3) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 4, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_5 = arg3;
  __vmReportCapturedBinding(659, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(659, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(659, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  __vmReportCapturedBinding(659, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(659, "vmScope[0][0][0][2]", 3, 2, vmScope[0][0][0][2]);
  vmScope[6] = vmScope[0][0][13](vmScope[0][2][vmScope[2]], vmScope[0][2], vmScope[3]);
  if (("throw" !== vmScope[6].type)) {
    vmScope[7] = vmScope[6].arg;
    vmScope[8] = vmScope[7].value;
    // incoming keep-false from pc=51
    // incoming keep-false from pc=65
    if (((vmScope[8] && ("object" == vmScope[0][0][0][2](vmScope[8]))) && vmScope[0][0][5].call(vmScope[8], "__await"))) {

    } else {
      // block boundary after jump @pc=104
      // incoming false-branch from pc=80
    }
    // incoming from pc=104
    // PHI@pc=126 slot=0: vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_660__resumeAsyncIteratorNext6, vmScope), createChild(vm_fn_661__resumeAsyncIteratorThrow11, vmScope)) | vmScope[0][3].resolve(vmScope[8]).then(createChild(vm_fn_662__resolveAsyncIteratorValue6, vmScope), createChild(vm_fn_663__resumeAsyncIteratorThrow12, vmScope))
    return vmScope[0][3].resolve(vmScope[8].__await).then(createChild(vm_fn_660__resumeAsyncIteratorNext6, vmScope), createChild(vm_fn_661__resumeAsyncIteratorThrow11, vmScope));
  }
  // L127:
  // block boundary after return @pc=126
  // incoming false-branch from pc=30
  vmScope[5](vmScope[6].arg);
  return undefined;
}

function vm_fn_660__resumeAsyncIteratorNext6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(660, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(660, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(660, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("next", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_661__resumeAsyncIteratorThrow11(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(661, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(661, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(661, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
  return undefined;
}

function vm_fn_662__resolveAsyncIteratorValue6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(662, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(662, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  vmScope[0][7]["value"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4](vmScope[0][7]);
  return undefined;
}

function vm_fn_663__resumeAsyncIteratorThrow12(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(663, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(663, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(663, "vmScope[0][0][4]", 2, 4, vmScope[0][0][4]);
  return vmScope[0][0][4]("throw", vmScope[2], vmScope[0][4], vmScope[0][5]);
}

function vm_fn_664__enqueueAsyncIteratorStep6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(664, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_665, vmScope);
  if (vmScope[0][5]) {

  }
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  vmScope[0][5] = vmScope[0][5].then(vmScope[4], vmScope[4]);
  // PHI@pc=32 slot=0: vmScope[0][5].then(vmScope[4], vmScope[4]) | vmScope[4]()
  return vmScope[0][5].then(vmScope[4], vmScope[4]);
}

function vm_fn_665(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(665, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  return new vmScope[0][0][3](createChild(vm_fn_666__executeAsyncIteratorStep6, vmScope));
}

function vm_fn_666__executeAsyncIteratorStep6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(666, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(666, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  __vmReportCapturedBinding(666, "vmScope[0][0][0][4]", 3, 4, vmScope[0][0][0][4]);
  vmScope[0][0][0][4](vmScope[0][0][2], vmScope[0][0][3], vmScope[2], vmScope[3]);
  return undefined;
}

function vm_fn_667(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  __vmReportCapturedBinding(667, "vmScope[0][14]", 1, 14, vmScope[0][14]);
  vmScope[5] = vmScope[0][14];
  return createChild(vm_fn_668__invokeGeneratorMethod6, vmScope);
}

function vm_fn_668__invokeGeneratorMethod6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(668, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(668, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(668, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(668, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(668, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(668, "vmScope[0][0][13]", 2, 13, vmScope[0][0][13]);
  __vmReportCapturedBinding(668, "vmScope[0][0][14]", 2, 14, vmScope[0][0][14]);
  __vmReportCapturedBinding(668, "vmScope[0][0][15]", 2, 15, vmScope[0][0][15]);
  __vmReportCapturedBinding(668, "vmScope[0][0][16]", 2, 16, vmScope[0][0][16]);
  __vmReportCapturedBinding(668, "vmScope[0][0][17]", 2, 17, vmScope[0][0][17]);
  __vmReportCapturedBinding(668, "vmScope[0][0][18]", 2, 18, vmScope[0][0][18]);
  __vmReportCapturedBinding(668, "vmScope[0][0][29]", 2, 29, vmScope[0][0][29]);
  if ((vmScope[0][5] === vmScope[0][0][16])) {
    throw Error("Generator is already running");
  }
  // block boundary after throw @pc=16
  // incoming false-branch from pc=7
  if ((vmScope[0][5] === vmScope[0][0][17])) {
    if (("throw" === vmScope[2])) {
      throw vmScope[3];
    }
    // block boundary after throw @pc=37
    // incoming false-branch from pc=32
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[0][0][2], writable: true, configurable: true, enumerable: true }), "done", { value: (!0), writable: true, configurable: true, enumerable: true });
  }
  // L50:
  // block boundary after return @pc=49
  // incoming false-branch from pc=24
  vmScope[0][4]["method"] = vmScope[2];
  // POP vmScope[2]
  vmScope[0][4]["arg"] = vmScope[3];
  // POP vmScope[3]
  // L70:
  vmScope[4] = vmScope[0][4].delegate;
  if (vmScope[4]) {
    vmScope[5] = vmScope[0][0][29](vmScope[4], vmScope[0][4]);
    if (!(vmScope[5])) { /* goto L118; */ }
    if ((vmScope[5] === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=112
    // incoming false-branch from pc=110
    return vmScope[5];
  }
  // L118:
  // block boundary after return @pc=117
  // incoming false-branch from pc=81
  // incoming false-branch from pc=101
  if (("next" === vmScope[0][4].method)) {
    vmScope[0][4]["_sent"] = vmScope[0][4].arg;
    vmScope[0][4].sent = vmScope[0][4].arg;
    /* goto L221; */
  }
  // block boundary after jump @pc=144
  // incoming false-branch from pc=126
  if (("throw" === vmScope[0][4].method)) {
    if ((vmScope[0][5] === vmScope[0][0][14])) {
      vmScope[0][5] = vmScope[0][0][17];
      // POP vmScope[0][0][17]
      throw vmScope[0][4].arg;
    }
    // block boundary after throw @pc=178
    // incoming false-branch from pc=163
    vmScope[0][4].dispatchException(vmScope[0][4].arg);
    /* goto L221; */
  }
  // L195:
  // block boundary after jump @pc=193
  // incoming false-branch from pc=154
  // incoming keep-false from pc=203
  (("return" === vmScope[0][4].method) && vmScope[0][4].abrupt("return", vmScope[0][4].arg));
  // L221:
  // incoming from pc=144
  // incoming from pc=193
  vmScope[0][5] = vmScope[0][0][16];
  vmScope[6] = vmScope[0][0][13](vmScope[0][2], vmScope[0][3], vmScope[0][4]);
  if (("normal" === vmScope[6].type)) {
    if (vmScope[0][4].done) {

    } else {
      // block boundary after jump @pc=265
      // incoming false-branch from pc=260
    }
    // incoming from pc=265
    // PHI@pc=270 slot=0: vmScope[0][0][17] | vmScope[0][0][15]
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    if ((vmScope[6].arg === vmScope[0][0][18])) {
      /* goto L343; */
    }
    // block boundary after jump @pc=286
    // incoming false-branch from pc=284
    return Object.defineProperty(Object.defineProperty({}, "value", { value: vmScope[6].arg, writable: true, configurable: true, enumerable: true }), "done", { value: vmScope[0][4].done, writable: true, configurable: true, enumerable: true });
  }
  // L304:
  // block boundary after return @pc=303
  // incoming false-branch from pc=253
  if (("throw" === vmScope[6].type)) {
    vmScope[0][5] = vmScope[0][0][17];
    // POP vmScope[0][0][17]
    vmScope[0][4]["method"] = "throw";
    // POP "throw"
    vmScope[0][4]["arg"] = vmScope[6].arg;
  }
  // incoming keep-false from pc=312
  // POP (("throw" === vmScope[6].type) && vmScope[6].arg)
  // L343:
  // incoming from pc=112
  // incoming from pc=286
  /* goto L70; */
  // block boundary after jump @pc=343
  return undefined;
}

function vm_fn_669__maybeInvokeDelegate6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(669, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(669, "vmScope[0][13]", 1, 13, vmScope[0][13]);
  __vmReportCapturedBinding(669, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(669, "vmScope[0][29]", 1, 29, vmScope[0][29]);
  vmScope[4] = vmScope[3].method;
  vmScope[5] = vmScope[2].iterator[vmScope[4]];
  if (!((vmScope[5] === vmScope[0][2]))) { /* goto L137; */ }
  vmScope[3]["delegate"] = null;
  // POP null
  // incoming keep-false from pc=43
  if ((("throw" === vmScope[4]) && vmScope[2].iterator.return)) {
    vmScope[3]["method"] = "return";
    // POP "return"
    vmScope[3]["arg"] = vmScope[0][2];
    // POP vmScope[0][2]
    vmScope[0][29](vmScope[2], vmScope[3]);
  }
  // incoming keep-false from pc=52
  if ((!((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)))) {
    if (!(("return" !== vmScope[4]))) { /* goto L132; */ } // keep-top
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  }
  // L132:
  // L132:
  // incoming keep-true from pc=94
  // incoming keep-false from pc=102
  // PHI@pc=132 slot=0: ((("throw" === vmScope[4]) && vmScope[2].iterator.return) && ("throw" === vmScope[3].method)) | ("return" !== vmScope[4]) | new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"))
  new TypeError((("The iterator does not provide a '" + vmScope[4]) + "' method"));
  return vmScope[0][18];
  // L137:
  // block boundary after return @pc=136
  // incoming false-branch from pc=27
  vmScope[6] = vmScope[0][13](vmScope[5], vmScope[2].iterator, vmScope[3].arg);
  if (("throw" === vmScope[6].type)) {
    vmScope[3]["method"] = "throw";
    // POP "throw"
    vmScope[3]["arg"] = vmScope[6].arg;
    // POP vmScope[6].arg
    vmScope[3]["delegate"] = null;
    // POP null
    return vmScope[0][18];
  }
  // block boundary after return @pc=201
  // incoming false-branch from pc=167
  vmScope[7] = vmScope[6].arg;
  if (!(vmScope[7])) { /* goto L296; */ }
  if (vmScope[7].done) {
    vmScope[3][vmScope[2].resultName] = vmScope[7].value;
    // POP vmScope[7].value
    vmScope[3]["next"] = vmScope[2].nextLoc;
    // POP vmScope[2].nextLoc
    if (("return" !== vmScope[3].method)) {
      vmScope[3]["method"] = "next";
      // POP "next"
      vmScope[3]["arg"] = vmScope[0][2];
    }
    // incoming keep-false from pc=257
    // POP (("return" !== vmScope[3].method) && vmScope[0][2])
    vmScope[3]["delegate"] = null;
    // POP null
    /* goto L294; */
  }
  // L291:
  // block boundary after jump @pc=289
  // incoming false-branch from pc=220
  // L294:
  // incoming from pc=289
  /* goto L329; */
  // L296:
  // block boundary after jump @pc=294
  // incoming false-branch from pc=213
  vmScope[3]["method"] = "throw";
  // POP "throw"
  vmScope[3]["arg"] = new TypeError("iterator result is not an object");
  new TypeError("iterator result is not an object");
  vmScope[3]["delegate"] = null;
  // POP null
  // L329:
  // incoming from pc=294
  // PHI@pc=294 slot=0: vmScope[0][18] | vmScope[7]
  return vmScope[0][18];
}

function vm_fn_670__pushTryEntry6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object.defineProperty({}, "tryLoc", { value: vmScope[2]["0"], writable: true, configurable: true, enumerable: true });
  if ((1 in vmScope[2])) {
    vmScope[3]["catchLoc"] = vmScope[2]["1"];
  }
  // POP ((1 in vmScope[2]) && vmScope[2]["1"])
  if ((2 in vmScope[2])) {
    vmScope[3]["finallyLoc"] = vmScope[2]["2"];
    // POP vmScope[2]["2"]
    vmScope[3]["afterLoc"] = vmScope[2]["3"];
  }
  // POP ((2 in vmScope[2]) && vmScope[2]["3"])
  vmThis.tryEntries.push(vmScope[3]);
  return undefined;
}

function vm_fn_671__resetCompletionRecord6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = (vmScope[2].completion || {});
  vmScope[3]["type"] = "normal";
  // POP "normal"
  (delete vmScope[3]["arg"]);
  vmScope[2]["completion"] = vmScope[3];
  // POP vmScope[3]
  return undefined;
}

function vm_fn_672__resetTryEntryContext6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(672, "vmScope[0][30]", 1, 30, vmScope[0][30]);
  vmThis["tryEntries"] = [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })];
  // POP [Object.defineProperty({}, "tryLoc", { value: "root", writable: true, configurable: true, enumerable: true })]
  vmScope[2].forEach(vmScope[0][30], vmThis);
  vmThis.reset((!0));
  return undefined;
}

function vm_fn_673__getIterator6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(673, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(673, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  // incoming keep-true from pc=3
  if ((vmScope[2] || ("" === vmScope[2]))) {
    vmScope[3] = vmScope[2][vmScope[0][8]];
    if (vmScope[3]) {
      return vmScope[3].call(vmScope[2]);
    }
    // block boundary after return @pc=39
    // incoming false-branch from pc=26
    if (("function" == typeof vmScope[2].next)) {
      return vmScope[2];
    }
    // block boundary after return @pc=54
    // incoming false-branch from pc=49
    if ((!isNaN(vmScope[2].length))) {
      vmScope[4] = (-1);
      vmScope[6] = createChild(vm_fn_674__nextArrayLikeIterator6, vmScope);
      vmScope[5] = createChild(vm_fn_674__nextArrayLikeIterator6, vmScope);
      vmScope[5]["next"] = vmScope[5];
      return vmScope[5];
    }
  }
  // L93:
  // L93:
  // block boundary after return @pc=92
  // incoming false-branch from pc=11
  // incoming false-branch from pc=66
  throw new TypeError((vmScope[0][0][2](vmScope[2]) + " is not iterable"));
  // block boundary after throw @pc=109
  return undefined;
}

function vm_fn_674__nextArrayLikeIterator6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(674, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(674, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(674, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(674, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(674, "vmScope[0][0][5]", 2, 5, vmScope[0][0][5]);
  while ((++vmScope[0][4] < vmScope[0][2].length)) {
    if (vmScope[0][0][5].call(vmScope[0][2], vmScope[0][4])) {
      vmScope[0][6]["value"] = vmScope[0][2][vmScope[0][4]];
      // POP vmScope[0][2][vmScope[0][4]]
      vmScope[0][6]["done"] = (!1);
      // POP (!1)
      return vmScope[0][6];
    }
    // block boundary after return @pc=55
    // incoming false-branch from pc=26
  }
  // L58:
  // block boundary after jump @pc=56
  // incoming false-branch from pc=10
  vmScope[0][6]["value"] = vmScope[0][0][2];
  // POP vmScope[0][0][2]
  vmScope[0][6]["done"] = (!0);
  // POP (!0)
  return vmScope[0][6];
}

function vm_fn_675__isGeneratorFunction6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(675, "vmScope[0][20]", 1, 20, vmScope[0][20]);
  // incoming keep-false from pc=7
  vmScope[3] = (("function" == typeof vmScope[2]) && vmScope[2].constructor);
  if ((!(!vmScope[3]))) {
    if ((vmScope[3] === vmScope[0][20])) { /* goto L48; */ } // keep-top
    // incoming keep-true from pc=40
  }
  // L48:
  // incoming keep-false from pc=22
  // incoming keep-true from pc=31
  // PHI@pc=48 slot=0: (!(!vmScope[3])) | (vmScope[3] === vmScope[0][20]) | ("GeneratorFunction" === (vmScope[3].displayName || vmScope[3].name))
  return (!(!vmScope[3]));
}

function vm_fn_676__markGeneratorFunction6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(676, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(676, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  __vmReportCapturedBinding(676, "vmScope[0][21]", 1, 21, vmScope[0][21]);
  __vmReportCapturedBinding(676, "vmScope[0][25]", 1, 25, vmScope[0][25]);
  if (Object.setPrototypeOf) {

  } else {
    vmScope[2]["__proto__"] = vmScope[0][21];
    // POP vmScope[0][21]
  }
  // PHI@pc=45 slot=0: Object.setPrototypeOf(vmScope[2], vmScope[0][21]) | vmScope[0][11](vmScope[2], vmScope[0][10], "GeneratorFunction")
  Object.setPrototypeOf(vmScope[2], vmScope[0][21]);
  vmScope[2]["prototype"] = Object.create(vmScope[0][25]);
  Object.create(vmScope[0][25]);
  return vmScope[2];
}

function vm_fn_677__wrapAwaitValue6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.defineProperty({}, "__await", { value: vmScope[2], writable: true, configurable: true, enumerable: true });
}

function vm_fn_678__returnThis17(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_679__createAsyncFunctionWrapper6(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 5, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  __vmReportCapturedBinding(679, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(679, "vmScope[0][12]", 1, 12, vmScope[0][12]);
  __vmReportCapturedBinding(679, "vmScope[0][27]", 1, 27, vmScope[0][27]);
  if ((undefined === vmScope[6])) {
    vmScope[6] = Promise;
  }
  // POP ((undefined === vmScope[6]) && Promise)
  vmScope[7] = new vmScope[0][27](vmScope[0][12](vmScope[2], vmScope[3], vmScope[4], vmScope[5]), vmScope[6]);
  if (vmScope[0][3].isGeneratorFunction(vmScope[3])) {

  }
  // PHI@pc=78 slot=0: vmScope[7] | vmScope[7].next().then(createChild(vm_fn_680__handleAsyncIteratorResult6, vmScope))
  return vmScope[7];
}

function vm_fn_680__handleAsyncIteratorResult6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(680, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  if (vmScope[2].done) {

  }
  // PHI@pc=22 slot=0: vmScope[2].value | vmScope[0][7].next()
  return vmScope[2].value;
}

function vm_fn_681__returnThis18(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return vmThis;
}

function vm_fn_682__getGeneratorTag6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "[object Generator]";
}

function vm_fn_683(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = Object(vmScope[2]);
  vmScope[4] = [];
  for (vmScope[5] in vmScope[3]) {
    vmScope[4].push(vmScope[5]);
  }
  vmScope[4].reverse();
  vmScope[7] = createChild(vm_fn_684__nextObjectKeyIterator6, vmScope);
  return createChild(vm_fn_684__nextObjectKeyIterator6, vmScope);
}

function vm_fn_684__nextObjectKeyIterator6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(684, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(684, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(684, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  while (vmScope[0][4].length) {
    vmScope[2] = vmScope[0][4].pop();
    if ((vmScope[2] in vmScope[0][3])) {
      vmScope[0][7]["value"] = vmScope[2];
      // POP vmScope[2]
      vmScope[0][7]["done"] = (!1);
      // POP (!1)
      return vmScope[0][7];
    }
    // block boundary after return @pc=50
    // incoming false-branch from pc=25
  }
  // L53:
  // block boundary after jump @pc=51
  // incoming false-branch from pc=5
  vmScope[0][7]["done"] = (!0);
  // POP (!0)
  return vmScope[0][7];
}

function vm_fn_685__resetGeneratorContext6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(685, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(685, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(685, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmThis["prev"] = 0;
  // POP 0
  vmThis["next"] = 0;
  // POP 0
  vmThis["_sent"] = vmScope[0][2];
  vmThis["sent"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis["done"] = (!1);
  // POP (!1)
  vmThis["delegate"] = null;
  // POP null
  vmThis["method"] = "next";
  // POP "next"
  vmThis["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmThis.tryEntries.forEach(vmScope[0][31]);
  if (!((!vmScope[2]))) { /* goto L142; */ }
  while ((/* enum-next */ (vmScope[3] = __vm_enum_next_key(vmThis)), vmScope[3] !== undefined)) {
    // incoming keep-false from pc=96
    // incoming keep-false from pc=110
    if (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1)))))) {
      vmThis[vmScope[3]] = vmScope[0][2];
    }
    // incoming keep-false from pc=129
    (((("t" === vmScope[3].charAt(0)) && vmScope[0][5].call(vmThis, vmScope[3])) && (!isNaN((+vmScope[3].slice(1))))) && vmScope[0][2]);
  }
  // L142:
  // block boundary after jump @pc=140
  // incoming false-branch from pc=71
  // incoming false-branch from pc=81
  return undefined;
}

function vm_fn_686__stopGeneratorContext6(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmThis.done = (!0);
  vmScope[2] = vmThis.tryEntries["0"].completion;
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  return vmThis.rval;
}

function vm_fn_687__dispatchException6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(687, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  vmScope[4] = createChild(vm_fn_688__handleExceptionEntry6, vmScope);
  if (vmThis.done) {
    throw vmScope[2];
  }
  // block boundary after throw @pc=13
  // incoming false-branch from pc=8
  vmScope[3] = vmThis;
  vmScope[5] = (vmThis.tryEntries.length - 1);
  // L29:
  if (!((vmScope[5] >= 0))) { /* goto L255; */ }
  vmScope[6] = vmThis.tryEntries[vmScope[5]];
  vmScope[7] = vmScope[6].completion;
  if (("root" === vmScope[6].tryLoc)) {
    return vmScope[4]("end");
  }
  // block boundary after return @pc=73
  // incoming false-branch from pc=63
  if (!((vmScope[6].tryLoc <= vmThis.prev))) { /* goto L248; */ }
  vmScope[8] = vmScope[0][5].call(vmScope[6], "catchLoc");
  vmScope[9] = vmScope[0][5].call(vmScope[6], "finallyLoc");
  // incoming keep-false from pc=120
  if ((vmScope[8] && vmScope[9])) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=152
    // incoming false-branch from pc=136
    if ((vmThis.prev < vmScope[6].finallyLoc)) {
      return vmScope[4](vmScope[6].finallyLoc);
    }
    // block boundary after return @pc=175
    // incoming false-branch from pc=162
    /* goto L248; */
  }
  // L178:
  // block boundary after jump @pc=176
  // incoming false-branch from pc=125
  if (vmScope[8]) {
    if ((vmThis.prev < vmScope[6].catchLoc)) {
      return vmScope[4](vmScope[6].catchLoc, (!0));
    }
    // block boundary after return @pc=208
    // incoming false-branch from pc=192
    /* goto L248; */
  }
  // L211:
  // block boundary after jump @pc=209
  // incoming false-branch from pc=181
  if ((!vmScope[9])) {
    throw Error("try statement without catch or finally");
  }
  // block boundary after throw @pc=224
  // incoming false-branch from pc=215
  if ((vmThis.prev < vmScope[6].finallyLoc)) {
    return vmScope[4](vmScope[6].finallyLoc);
  }
  // L248:
  // L248:
  // block boundary after return @pc=247
  // incoming false-branch from pc=83
  // incoming from pc=176
  // incoming from pc=209
  // incoming false-branch from pc=234
  --vmScope[5];
  /* goto L29; */
  // L255:
  // block boundary after jump @pc=253
  // incoming false-branch from pc=35
  return undefined;
}

function vm_fn_688__handleExceptionEntry6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(688, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(688, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(688, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(688, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[0][7]["type"] = "throw";
  // POP "throw"
  vmScope[0][7]["arg"] = vmScope[0][2];
  // POP vmScope[0][2]
  vmScope[0][3]["next"] = vmScope[2];
  // POP vmScope[2]
  if (vmScope[3]) {
    vmScope[0][3]["method"] = "next";
    // POP "next"
    vmScope[0][3]["arg"] = vmScope[0][0][2];
  }
  // POP (vmScope[3] && vmScope[0][0][2])
  return (!(!vmScope[3]));
}

function vm_fn_689__abrupt6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(689, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(689, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  vmScope[4] = (vmThis.tryEntries.length - 1);
  // L11:
  if ((vmScope[4] >= 0)) {
    vmScope[5] = vmThis.tryEntries[vmScope[4]];
    // incoming keep-false from pc=38
    // incoming keep-false from pc=53
    if ((((vmScope[5].tryLoc <= vmThis.prev) && vmScope[0][5].call(vmScope[5], "finallyLoc")) && (vmThis.prev < vmScope[5].finallyLoc))) {
      vmScope[6] = vmScope[5];
    } else {
      // block boundary after jump @pc=72
      // incoming false-branch from pc=64
      --vmScope[4];
      /* goto L11; */
    }
  }
  // L81:
  // L81:
  // block boundary after jump @pc=79
  // incoming false-branch from pc=17
  // incoming from pc=72
  if (vmScope[6]) {
    if (("break" === vmScope[2])) { /* goto L100; */ } // keep-top
  }
  // L100:
  // L100:
  // incoming keep-false from pc=84
  // incoming keep-true from pc=92
  // incoming keep-false from pc=100
  // incoming keep-false from pc=111
  if (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc))) {
    vmScope[6] = null;
  }
  // incoming keep-false from pc=122
  // POP (((vmScope[6] && (vmScope[6].tryLoc <= vmScope[3])) && (vmScope[3] <= vmScope[6].finallyLoc)) && null)
  if (vmScope[6]) {

  } else {
    // block boundary after jump @pc=140
    // incoming false-branch from pc=133
  }
  // incoming from pc=140
  // PHI@pc=143 slot=0: vmScope[6].completion | {}
  vmScope[7] = vmScope[6].completion;
  vmScope[7]["type"] = vmScope[2];
  // POP vmScope[2]
  vmScope[7]["arg"] = vmScope[3];
  // POP vmScope[3]
  if (vmScope[6]) {
    vmThis["method"] = "next";
    // POP "next"
    vmThis["next"] = vmScope[6].finallyLoc;
    // POP vmScope[6].finallyLoc
  } else {
    // block boundary after jump @pc=191
    // incoming false-branch from pc=169
  }
  // incoming from pc=191
  // PHI@pc=202 slot=0: vmScope[0][18] | vmThis.complete(vmScope[7])
  return vmScope[0][18];
}

function vm_fn_690__complete6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(690, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  if (("throw" === vmScope[2].type)) {
    throw vmScope[2].arg;
  }
  // block boundary after throw @pc=15
  // incoming false-branch from pc=8
  // incoming keep-true from pc=24
  if ((("break" === vmScope[2].type) || ("continue" === vmScope[2].type))) {
    vmThis["next"] = vmScope[2].arg;
    /* goto L108; */
  }
  // block boundary after jump @pc=45
  // incoming false-branch from pc=34
  if (("return" === vmScope[2].type)) {
    vmThis["arg"] = vmScope[2].arg;
    vmThis["rval"] = vmScope[2].arg;
    // POP vmScope[2].arg
    vmThis["method"] = "return";
    // POP "return"
    vmThis["next"] = "end";
    /* goto L108; */
  }
  // block boundary after jump @pc=84
  // incoming false-branch from pc=55
  // incoming keep-false from pc=94
  if ((("normal" === vmScope[2].type) && vmScope[3])) {
    vmThis["next"] = vmScope[3];
  }
  // L108:
  // L108:
  // incoming from pc=45
  // incoming from pc=84
  // incoming keep-false from pc=99
  // POP vmScope[3]
  return vmScope[0][18];
}

function vm_fn_691__finishFinallyEntry6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(691, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(691, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  while ((vmScope[3] >= 0)) {
    vmScope[4] = vmThis.tryEntries[vmScope[3]];
    if ((vmScope[4].finallyLoc === vmScope[2])) {
      vmThis.complete(vmScope[4].completion, vmScope[4].afterLoc);
      vmScope[0][31](vmScope[4]);
      return vmScope[0][18];
    }
    // block boundary after return @pc=70
    // incoming false-branch from pc=38
    --vmScope[3];
  }
  // L78:
  // block boundary after jump @pc=76
  // incoming false-branch from pc=17
  return undefined;
}

function vm_fn_692__catchTryEntry6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(692, "vmScope[0][31]", 1, 31, vmScope[0][31]);
  vmScope[3] = (vmThis.tryEntries.length - 1);
  // L11:
  if (!((vmScope[3] >= 0))) { /* goto L87; */ }
  vmScope[4] = vmThis.tryEntries[vmScope[3]];
  if ((vmScope[4].tryLoc === vmScope[2])) {
    vmScope[5] = vmScope[4].completion;
    if (("throw" === vmScope[5].type)) {
      vmScope[6] = vmScope[5].arg;
      vmScope[0][31](vmScope[4]);
    }
    // incoming false-branch from pc=56
    return vmScope[6];
  }
  // L80:
  // block boundary after return @pc=79
  // incoming false-branch from pc=38
  --vmScope[3];
  /* goto L11; */
  // L87:
  // block boundary after jump @pc=85
  // incoming false-branch from pc=17
  throw Error("illegal catch attempt");
  // block boundary after throw @pc=94
  return undefined;
}

function vm_fn_693__delegateYield6(scope, thisArg, argsLike, arg0, arg1, arg2) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 3, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  __vmReportCapturedBinding(693, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(693, "vmScope[0][18]", 1, 18, vmScope[0][18]);
  __vmReportCapturedBinding(693, "vmScope[0][33]", 1, 33, vmScope[0][33]);
  vmThis["delegate"] = Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true });
  // POP Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "iterator", { value: vmScope[0][33](vmScope[2]), writable: true, configurable: true, enumerable: true }), "resultName", { value: vmScope[3], writable: true, configurable: true, enumerable: true }), "nextLoc", { value: vmScope[4], writable: true, configurable: true, enumerable: true })
  if (("next" === vmThis.method)) {
    vmThis["arg"] = vmScope[0][2];
  }
  // POP (("next" === vmThis.method) && vmScope[0][2])
  return vmScope[0][18];
}

function vm_fn_694__asyncGeneratorStep6(scope, thisArg, argsLike, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 7, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  const scope_0_4 = arg2;
  const scope_0_5 = arg3;
  const scope_0_6 = arg4;
  const scope_0_7 = arg5;
  const scope_0_8 = arg6;
  try {
    vmScope[9] = vmScope[2][vmScope[7]].call(vmScope[2], vmScope[8]);
    vmScope[10] = vmScope[9].value;
    if (vmScope[9].done) {

    } else {
      // block boundary after jump @pc=56
      // incoming false-branch from pc=45
    }
  } catch (__vm_caught_exception) {
    vmScope[11] = __vm_caught_exception;
    return undefined;
  }
  // incoming from pc=56
  // PHI@pc=79 slot=0: vmScope[3](vmScope[10]) | Promise.resolve(vmScope[10]).then(vmScope[5], vmScope[6])
  vmScope[3](vmScope[10]);
  return undefined;
}

function vm_fn_695(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  return createChild(vm_fn_696, vmScope);
}

function vm_fn_696(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = vmThis;
  vmScope[3] = vmScope[1];
  return new Promise(createChild(vm_fn_697, vmScope));
}

function vm_fn_697(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  __vmReportCapturedBinding(697, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(697, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(697, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  vmScope[5] = createChild(vm_fn_698__asyncToGeneratorNext32, vmScope);
  vmScope[6] = createChild(vm_fn_699__asyncToGeneratorThrow32, vmScope);
  vmScope[4] = vmScope[0][0][2].apply(vmScope[0][2], vmScope[0][3]);
  vmScope[5](undefined);
  return undefined;
}

function vm_fn_698__asyncToGeneratorNext32(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_698__asyncToGeneratorNext32 = vmScope[0][5];
  const vm_fn_699__asyncToGeneratorThrow32 = vmScope[0][6];
  __vmReportCapturedBinding(698, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(698, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(698, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(698, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(698, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(698, "vmScope[0][0][0][0][4]", 4, 4, vmScope[0][0][0][0][4]);
  vmScope[0][0][0][0][4](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_698__asyncToGeneratorNext32, vm_fn_699__asyncToGeneratorThrow32, "next", vmScope[2]);
  return undefined;
}

function vm_fn_699__asyncToGeneratorThrow32(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_698__asyncToGeneratorNext32 = vmScope[0][5];
  const vm_fn_699__asyncToGeneratorThrow32 = vmScope[0][6];
  __vmReportCapturedBinding(699, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(699, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(699, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(699, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(699, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(699, "vmScope[0][0][0][0][4]", 4, 4, vmScope[0][0][0][0][4]);
  vmScope[0][0][0][0][4](vmScope[0][4], vmScope[0][2], vmScope[0][3], vm_fn_698__asyncToGeneratorNext32, vm_fn_699__asyncToGeneratorThrow32, "throw", vmScope[2]);
  return undefined;
}

function vm_fn_700__encodeStringToUpperHex(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = "";
  vmScope[4] = 0;
  while ((vmScope[4] < vmScope[2].length)) {
    vmScope[5] = vmScope[2].charCodeAt(vmScope[4]);
    if ((vmScope[5] < 15)) {
      vmScope[3] = (vmScope[3] + "0");
      // POP (vmScope[3] + "0")
    }
    // incoming false-branch from pc=41
    vmScope[3] = (vmScope[3] + vmScope[5].toString(16).toLocaleUpperCase());
    (vmScope[3] + vmScope[5].toString(16).toLocaleUpperCase());
    vmScope[4]++;
  }
  // L85:
  // block boundary after jump @pc=83
  // incoming false-branch from pc=19
  return vmScope[3];
}

function vm_fn_701__extractPngTailSignature(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(701, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = vmScope[2].replace("data:image/png;base64,", "");
  vmScope[3] = atob(vmScope[2]);
  vmScope[4] = vmScope[3].slice((-16), (-12));
  return vmScope[0][0][0](vmScope[4].toString());
}

function vm_fn_702__generateUuidV4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]", "g"), createChild(vm_fn_703, vmScope));
}

function vm_fn_703(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[3] = ((Math.random() * 16) | 0);
  if ((vmScope[2] === "x")) {

  }
  // PHI@pc=38 slot=0: vmScope[3] | ((vmScope[3] & 3) | 8)
  vmScope[4] = vmScope[3];
  return vmScope[4].toString(16);
}

function vm_fn_704__getOrCreateStoredId(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(704, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  try {
    vmScope[3] = "";
    // incoming keep-true from pc=17
    vmScope[4] = (window.sessionStorage.getItem(vmScope[2]) || window.localStorage.getItem(vmScope[2]));
    // incoming keep-false from pc=37
    if ((vmScope[4] && (vmScope[4].length > 0))) {
      vmScope[3] = vmScope[4];
    } else {
      // block boundary after jump @pc=55
      // incoming false-branch from pc=47
      vmScope[3] = vmScope[0][0][2]();
      window.localStorage.setItem(vmScope[2], vmScope[3]);
      window.sessionStorage.setItem(vmScope[2], vmScope[3]);
    }
    // incoming from pc=55
    return vmScope[3];
  } catch (__vm_caught_exception) {
    vmScope[5] = __vm_caught_exception;
    return "";
  }
}

function vm_fn_705__invokeClientInfoAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(705, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  return vmScope[0][6].apply(vmThis, vmScope[1]);
}

function vm_fn_706__createClientInfoAsync(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const captured_vm_fn_645 = vmScope[0][3];
  __vmReportCapturedBinding(706, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(706, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(706, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  vmScope[2] = createChild(vm_fn_707__createClientInfoGenerator, vmScope);
  vmScope[0][6] = vmScope[0][5](captured_vm_fn_645().mark(createChild(vm_fn_707__createClientInfoGenerator, vmScope)));
  return vmScope[0][6].apply(vmThis, vmScope[1]);
}

function vm_fn_707__createClientInfoGenerator(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_707__createClientInfoGenerator = vmScope[0][2];
  const captured_vm_fn_645 = vmScope[0][0][3];
  __vmReportCapturedBinding(707, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(707, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  vmScope[6] = createChild(vm_fn_708__collectClientDeviceId, vmScope);
  return captured_vm_fn_645().wrap(createChild(vm_fn_708__collectClientDeviceId, vmScope), vm_fn_707__createClientInfoGenerator, null, [[1, 9]]);
}

function vm_fn_708__collectClientDeviceId(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(708, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(708, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(708, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(708, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  // L0:
  if (!(1)) { /* goto L225; */ }
  vmScope[2]["prev"] = vmScope[2].next;
  if ((!(vmScope[2].next === 0))) {
    if ((vmScope[2].next === 5)) { /* goto L112; */ } // keep-top
    if ((vmScope[2].next === 9)) { /* goto L165; */ } // keep-top
    if ((vmScope[2].next === 12)) { /* goto L200; */ } // keep-top
    if ((vmScope[2].next === 13)) { /* goto L214; */ } // keep-top
    if ((vmScope[2].next === "end")) { /* goto L214; */ } // keep-top
    // POP vmScope[2].next
    /* goto L223; */
  }
  // block boundary after jump @pc=40
  // incoming strict-eq branch from pc=17
  vmScope[0][2] = "";
  vmScope[2].prev = 1;
  if ((!window.webviewBridge)) {
    vmScope[0][3] = window.parent;
    // incoming keep-true from pc=70
    if (((window.parent === null) || (vmScope[0][3] === undefined))) {

    } else {
      // block boundary after jump @pc=84
      // incoming false-branch from pc=79
    }
  }
  // L91:
  // L91:
  // incoming keep-true from pc=58
  // incoming from pc=84
  // PHI@pc=91 slot=1: window.webviewBridge | undefined | vmScope[0][3].webviewBridge
  vmScope[0][4] = window.webviewBridge;
  vmScope[2].next = 5;
  return vmScope[0][4].callBrowserWindow("getClientInfo");
  // L112:
  // block boundary after return @pc=111
  // incoming strict-eq branch from pc=21
  vmScope[0][5] = vmScope[2].sent;
  // incoming keep-true from pc=125
  if (((vmScope[0][5] === null) || (vmScope[0][5] === undefined))) {

  } else {
    // block boundary after jump @pc=139
    // incoming false-branch from pc=134
  }
  // incoming from pc=139
  // incoming keep-true from pc=146
  vmScope[0][2] = (vmScope[0][5].deviceId || ("" + ""));
  vmScope[2].next = 12;
  /* goto L223; */
  // L165:
  // block boundary after jump @pc=163
  // incoming strict-eq branch from pc=25
  vmScope[2].prev = 9;
  vmScope[2].t0 = vmScope[2].catch(1);
  return vmScope[2].abrupt("return", "");
  // L200:
  // block boundary after return @pc=199
  // incoming strict-eq branch from pc=29
  return vmScope[2].abrupt("return", vmScope[0][2]);
  // L214:
  // block boundary after return @pc=213
  // incoming strict-eq branch from pc=33
  // incoming strict-eq branch from pc=37
  return vmScope[2].stop();
  // L223:
  // block boundary after return @pc=222
  // incoming from pc=40
  // incoming from pc=163
  // STACK_MERGE_CONFLICT @pc=223: heights=0, 1
  /* goto L0; */
  // L225:
  // block boundary after jump @pc=223
  // incoming false-branch from pc=2
  return undefined;
}

function vm_fn_709__initializeDevtoolsDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][2] = createChild(vm_fn_710__detectDevtoolsOpen, vmScope);
  return undefined;
}

function vm_fn_710__detectDevtoolsOpen(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_320__isFirefoxInstallTrigger = vmScope[0][0][0];
  __vmReportCapturedBinding(710, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(710, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  vmScope[3] = new Image();
  vmScope[4] = createChild(vm_fn_711__markDebuggerDetected, vmScope);
  Object.defineProperty(vmScope[3], "id", Object.defineProperty({}, "get", { value: createChild(vm_fn_711__markDebuggerDetected, vmScope), writable: true, configurable: true, enumerable: true }));
  console.info("%c", vmScope[3]);
  // incoming keep-false from pc=44
  // incoming keep-false from pc=50
  if (((window && window.console) && window.console.firebug)) {
    vmScope[2].debugger = false;
    vmScope[0][0][1]["envcode"] = (vmScope[0][0][1].envcode | (vmScope[2].debugger << 6));
    // POP (vmScope[0][0][1].envcode | (vmScope[2].debugger << 6))
  }
  // incoming false-branch from pc=58
  if (!(vm_fn_320__isFirefoxInstallTrigger())) { /* goto L154; */ }
  if (window) {
    if (((window.outerWidth - window.innerWidth) > 150)) { /* goto L125; */ } // keep-top
  }
  // L125:
  // L125:
  // incoming keep-false from pc=97
  // incoming keep-true from pc=111
  if (window) {
    vmScope[2].debugger = false;
    vmScope[0][0][1]["envcode"] = (vmScope[0][0][1].envcode | (vmScope[2].debugger << 6));
    // POP (vmScope[0][0][1].envcode | (vmScope[2].debugger << 6))
  }
  // L154:
  // L154:
  // incoming false-branch from pc=93
  // incoming false-branch from pc=125
  return undefined;
}

function vm_fn_711__markDebuggerDetected(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(711, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(711, "vmScope[0][0][0][1]", 3, 1, vmScope[0][0][0][1]);
  vmScope[0][2].debugger = false;
  vmScope[0][0][0][1]["envcode"] = (vmScope[0][0][0][1].envcode | (vmScope[0][2].debugger << 6));
  // POP (vmScope[0][0][0][1].envcode | (vmScope[0][2].debugger << 6))
  return "";
}

function vm_fn_712__initializeNodeEnvironmentHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_713__isNodeRuntime, vmScope);
  return undefined;
}

function vm_fn_713__isNodeRuntime(scope, thisArg, argsLike) {
  return false;
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = navigator.userAgent;
  // incoming keep-true from pc=10
  if (((navigator.userAgent === null) || (vmScope[2] === undefined))) {

  } else {
    // block boundary after jump @pc=24
    // incoming false-branch from pc=19
  }
  // incoming from pc=24
  // PHI@pc=34 slot=0: undefined | vmScope[2].toLowerCase()
  vmScope[3] = vmScope[2].toLowerCase();
  if ((vmScope[3].indexOf("electron") >= 0)) {
    return false;
  }
  // block boundary after return @pc=53
  // incoming false-branch from pc=50
  // incoming keep-false from pc=59
  if ((!((typeof global !== "undefined") && (Object.prototype.toString.call(global.process) === "[object process]")))) {
    if (!((typeof process === "object"))) { /* goto L95; */ } // keep-top
  }
  // L95:
  // L95:
  // incoming keep-true from pc=79
  // incoming keep-false from pc=86
  // PHI@pc=95 slot=0: ((typeof global !== "undefined") && (Object.prototype.toString.call(global.process) === "[object process]")) | (typeof process === "object") | (process.title === "node")
  return ((typeof global !== "undefined") && (Object.prototype.toString.call(global.process) === "[object process]"));
}

function vm_fn_714__initializeHeadlessDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_715__isHeadlessBrowser, vmScope);
  vmScope[0][1] = vmScope[2];
  return undefined;
}

function vm_fn_715__isHeadlessBrowser(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(715, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  if ((!vmScope[0][0][0]())) {
    // incoming keep-true from pc=15
    // incoming keep-true from pc=25
    // incoming keep-true from pc=32
    // incoming keep-true from pc=39
    // incoming keep-true from pc=46
    return ((((((!("plugins" in navigator)) || (!(navigator.plugins instanceof PluginArray))) || ("_phantom" in window)) || ("callPhantom" in window)) || ("__nightmare" in window)) || (("Audio" in window) < ("CanvasRenderingContext2D" in window)));
  }
  // L60:
  // block boundary after return @pc=59
  // incoming false-branch from pc=7
  return false;
}

function vm_fn_716__initializeDomEnvironmentValidationHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_717__hasBrokenDomEnvironment, vmScope);
  vmScope[0][1] = vmScope[2];
  return undefined;
}

function vm_fn_717__hasBrokenDomEnvironment(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_319__isInternetExplorerDocumentMode = vmScope[0][0][0];
  __vmReportCapturedBinding(717, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = navigator.userAgent.toLowerCase();
  if ((vmScope[2].indexOf("electron") >= 0)) {
    return false;
  }
  // block boundary after return @pc=28
  // incoming false-branch from pc=25
  vmScope[3] = "undefined";
  // incoming keep-true from pc=40
  // incoming keep-true from pc=52
  // incoming keep-true from pc=70
  // incoming keep-true from pc=78
  // incoming keep-true from pc=97
  // incoming keep-true from pc=105
  // incoming keep-true from pc=117
  // incoming keep-true from pc=133
  if ((((((((((typeof window === vmScope[3]) || (window.toString() !== "[object Window]")) || (Object.prototype.toString.call(window) !== "[object Window]")) || (typeof document === vmScope[3])) || (document.toString().indexOf("Document") < 0)) || (typeof navigator === vmScope[3])) || (navigator.toString() !== "[object Navigator]")) || (navigator.userAgent.indexOf("jsdom") >= 0)) || (typeof location === vmScope[3]))) {
    return true;
  }
  // block boundary after return @pc=144
  // incoming false-branch from pc=141
  if ((!vm_fn_319__isInternetExplorerDocumentMode())) {
    // incoming keep-true from pc=160
    if (((typeof history === vmScope[3]) || (history.toString() !== "[object History]"))) {
      return true;
    }
  }
  // L176:
  // L176:
  // block boundary after return @pc=175
  // incoming false-branch from pc=152
  // incoming false-branch from pc=172
  return false;
}

function vm_fn_718__initializeAutomationDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[3] = createChild(vm_fn_719__isAutomationEnvironment, vmScope);
  vmScope[0][0] = createChild(vm_fn_720__scanEmbeddedBrowserMarkers, vmScope);
  vmScope[0][1] = vmScope[3];
  return undefined;
}

function vm_fn_719__isAutomationEnvironment(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(719, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((vmScope[0][2] == true)) {
    return true;
  }
  // block boundary after return @pc=8
  // incoming false-branch from pc=5
  if (navigator.webdriver) {
    return true;
  }
  // block boundary after return @pc=16
  // incoming false-branch from pc=13
  if (("getOwnPropertyNames" in Object)) {
    vmScope[2] = Object.getOwnPropertyNames(navigator);
    // incoming keep-true from pc=49
    if (((vmScope[2].indexOf("webdriver") >= 0) || (vmScope[2].indexOf("languages") >= 0))) {
      return true;
    }
  }
  // L68:
  // L68:
  // block boundary after return @pc=67
  // incoming false-branch from pc=22
  // incoming false-branch from pc=64
  // incoming keep-false from pc=70
  // incoming keep-false from pc=76
  // incoming keep-false from pc=84
  if ((((window && window.chrome) && window.chrome.runtime) && window.chrome.runtime.connect)) {
    if ((window.chrome.runtime.connect() === undefined)) {
      return true;
    }
    // block boundary after return @pc=112
    // incoming false-branch from pc=109
    /* goto L118; */
    // block boundary after jump @pc=113
    // catch handler for range [96, 118)
    // exception edge from [96, 118)
    vmScope[13] = __vm_caught_exception;
  }
  // L118:
  // incoming false-branch from pc=94
  // incoming from pc=113
  vmScope[3] = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"];
  vmScope[4] = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"];
  vmScope[5] = 0;
  while ((vmScope[5] < vmScope[4].length)) {
    vmScope[6] = vmScope[4][vmScope[5]];
    if (window[vmScope[6]]) {
      return true;
    }
    // block boundary after return @pc=191
    // incoming false-branch from pc=188
    vmScope[5]++;
  }
  // L199:
  // block boundary after jump @pc=197
  // incoming false-branch from pc=170
  vmScope[7] = 0;
  while ((vmScope[7] < vmScope[3].length)) {
    vmScope[8] = vmScope[3][vmScope[7]];
    if (window.document[vmScope[8]]) {
      return true;
    }
    // block boundary after return @pc=236
    // incoming false-branch from pc=233
    vmScope[7]++;
  }
  // L244:
  // block boundary after jump @pc=242
  // incoming false-branch from pc=213
  vmScope[9] = Object.keys(window.document);
  vmScope[10] = 0;
  vmScope[11] = vmScope[9];
  while ((vmScope[10] < vmScope[11].length)) {
    vmScope[12] = vmScope[11][vmScope[10]];
    // incoming keep-false from pc=304
    if ((vmScope[12].match(new RegExp("\\$[a-z]dc_")) && window.document[vmScope[12]].cache_)) {
      return true;
    }
    // block boundary after return @pc=319
    // incoming false-branch from pc=316
    vmScope[10]++;
  }
  // L327:
  // block boundary after jump @pc=325
  // incoming false-branch from pc=278
  return false;
}

function vm_fn_720__scanEmbeddedBrowserMarkers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][2] = Object.getOwnPropertyNames(window).some(createChild(vm_fn_721__isEmbeddedBrowserMarker, vmScope));
  return undefined;
}

function vm_fn_721__isEmbeddedBrowserMarker(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  // incoming keep-true from pc=6
  // incoming keep-true from pc=14
  // incoming keep-true from pc=22
  if (((((vmScope[2] === "cefSharp") || (vmScope[2] === "CefSharp")) || (vmScope[2] === "eoapi")) || (vmScope[2] === "eoWebBrowserDispatcher"))) {
    return true;
  }
  // block boundary after return @pc=33
  // incoming false-branch from pc=30
  if (window[vmScope[2]]) {
    if ((window[vmScope[2]].bindObjectAsync !== undefined)) { /* goto L64; */ } // keep-top
  }
  // L64:
  // L64:
  try {
    // incoming keep-false from pc=40
    // incoming keep-true from pc=52
    if (window[vmScope[2]]) {
      return true;
    }
    // block boundary after return @pc=67
    // incoming false-branch from pc=64
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
  }
}

function vm_fn_722__initializeIncognitoDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_723__detectIncognitoMode, vmScope);
  vmScope[0][4] = vmScope[2];
  return undefined;
}

function vm_fn_723__detectIncognitoMode(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  const vm_fn_321__isSafariNotificationApi = vmScope[0][0][1];
  const vm_fn_320__isFirefoxInstallTrigger = vmScope[0][0][3];
  __vmReportCapturedBinding(723, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(723, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  __vmReportCapturedBinding(723, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(723, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  if (vm_fn_320__isFirefoxInstallTrigger()) {
    vmScope[3] = indexedDB.open("test");
    vmScope[3].onerror = createChild(vm_fn_724__markIncognitoDetected, vmScope);
  }
  // incoming false-branch from pc=6
  if (vm_fn_321__isSafariNotificationApi()) {
    window.sessionStorage.setItem("someKeyHereByted", "");
    window.sessionStorage.removeItem("someKeyHereByted");
    /* goto L95; */
    // block boundary after jump @pc=61
    // catch handler for range [35, 95)
    // exception edge from [35, 95)
    vmScope[4] = __vm_caught_exception;
    // incoming keep-false from pc=76
    if (((vmScope[4].code === DOMException.QUOTA_EXCEEDED_ERR) && (window.sessionStorage.length === 0))) {
      vmScope[2].incognito = true;
    }
  }
  // L95:
  // L95:
  // incoming false-branch from pc=33
  // incoming from pc=61
  // incoming false-branch from pc=87
  if (!(vmScope[0][0][2]())) { /* goto L128; */ }
  if ((!window.indexedDB)) {
    if (window.PointerEvent) { /* goto L120; */ } // keep-top
  }
  // L120:
  // L120:
  // incoming keep-false from pc=108
  // incoming keep-true from pc=114
  if (window.PointerEvent) {
    vmScope[2].incognito = true;
  }
  // L128:
  // L128:
  // incoming false-branch from pc=101
  // incoming false-branch from pc=120
  vmScope[0][0][0]["envcode"] = (vmScope[0][0][0].envcode | (vmScope[2].incognito << 2));
  // POP (vmScope[0][0][0].envcode | (vmScope[2].incognito << 2))
  return undefined;
}

function vm_fn_724__markIncognitoDetected(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(724, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  vmScope[0][2].incognito = true;
  return undefined;
}

function vm_fn_725__initializeNativeTamperDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_726__hasNativeApiTampering, vmScope);
  vmScope[0][1] = vmScope[2];
  return undefined;
}

function vm_fn_726__hasNativeApiTampering(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(726, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  if ((!vmScope[0][0][0]())) {
    vmScope[2] = document.createElement("canvas");
    // incoming keep-true from pc=56
    // incoming keep-true from pc=92
    return (((vmScope[2].toDataURL.toString().replace(new RegExp("\\s*", "g"), "").indexOf("nativecode") < 0) || (navigator.toString.toString().replace(new RegExp("\\s*", "g"), "").indexOf("nativecode") < 0)) || (navigator.plugins.toString() !== "[object PluginArray]"));
  }
  // L107:
  // block boundary after return @pc=106
  // incoming false-branch from pc=7
  return false;
}

function vm_fn_727__initializeLocalhostDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_728__isLocalhostOrFileContext, vmScope);
  vmScope[0][0] = vmScope[2];
  return undefined;
}

function vm_fn_728__isLocalhostOrFileContext(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = navigator.userAgent.toLowerCase();
  if ((vmScope[2].indexOf("electron") >= 0)) {
    return false;
  }
  // block boundary after return @pc=28
  // incoming false-branch from pc=25
  vmScope[3] = new RegExp("^https?:\\/\\/([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})");
  // incoming keep-false from pc=40
  // incoming keep-false from pc=46
  if (((window && window.location) && window.location.href)) {
    vmScope[4] = window.location.href;
    // incoming keep-true from pc=78
    // incoming keep-true from pc=93
    if ((((vmScope[4].indexOf("file") === 0) || (vmScope[4].indexOf("http://localhost") === 0)) || vmScope[3].test(vmScope[4]))) {
      return true;
    }
  }
  // L110:
  // L110:
  // block boundary after return @pc=109
  // incoming false-branch from pc=54
  // incoming false-branch from pc=106
  return false;
}

function vm_fn_729__initializeUaConsistencyHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_730__hasUserAgentPlatformMismatch, vmScope);
  vmScope[0][1] = vmScope[2];
  return undefined;
}

function vm_fn_730__hasUserAgentPlatformMismatch(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(730, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = navigator.userAgent.toLowerCase();
  vmScope[3] = navigator.platform.toLowerCase();
  vmScope[4] = 0;
  vmScope[5] = 1;
  vmScope[6] = 2;
  vmScope[7] = 3;
  vmScope[8] = 4;
  vmScope[9] = 5;
  vmScope[10] = vmScope[9];
  vmScope[11] = "windows";
  vmScope[12] = "win";
  vmScope[13] = "android";
  vmScope[14] = "linux";
  vmScope[15] = "iphone";
  vmScope[16] = "ipad";
  vmScope[17] = "ipod";
  vmScope[18] = "mac";
  // incoming keep-true from pc=113
  if (((vmScope[2].indexOf("macintosh") >= 0) || (vmScope[2].indexOf("mac_powerpc)") >= 0))) {
    vmScope[10] = vmScope[8];
    /* goto L332; */
  }
  // block boundary after jump @pc=136
  // incoming false-branch from pc=128
  if ((vmScope[2].indexOf(vmScope[11]) >= 0)) {
    vmScope[10] = vmScope[4];
    /* goto L332; */
  }
  // block boundary after jump @pc=160
  // incoming false-branch from pc=152
  if ((vmScope[2].indexOf(vmScope[13]) >= 0)) {
    vmScope[10] = vmScope[5];
    /* goto L332; */
  }
  // block boundary after jump @pc=184
  // incoming false-branch from pc=176
  // incoming keep-true from pc=200
  // incoming keep-true from pc=215
  if ((((vmScope[2].indexOf(vmScope[14]) >= 0) || (vmScope[2].indexOf("cros") >= 0)) || (vmScope[2].indexOf("x11") >= 0))) {
    vmScope[10] = vmScope[6];
    /* goto L332; */
  }
  // block boundary after jump @pc=238
  // incoming false-branch from pc=230
  // incoming keep-true from pc=254
  // incoming keep-true from pc=270
  // incoming keep-true from pc=286
  // incoming keep-true from pc=301
  if ((((((vmScope[2].indexOf(vmScope[15]) >= 0) || (vmScope[2].indexOf(vmScope[16]) >= 0)) || (vmScope[2].indexOf(vmScope[17]) >= 0)) || (vmScope[2].indexOf("crios") >= 0)) || (vmScope[2].indexOf("fxios") >= 0))) {
    vmScope[10] = vmScope[7];
  } else {
    // block boundary after jump @pc=324
    // incoming false-branch from pc=316
    vmScope[10] = vmScope[9];
  }
  // L332:
  // L332:
  // incoming from pc=136
  // incoming from pc=160
  // incoming from pc=184
  // incoming from pc=238
  // incoming from pc=324
  // incoming keep-false from pc=346
  if (((vmScope[3].indexOf(vmScope[12]) >= 0) && (vmScope[10] !== vmScope[4]))) {
    return true;
    // block boundary after return @pc=358
    /* goto L628; */
  }
  // L361:
  // block boundary after jump @pc=359
  // incoming false-branch from pc=355
  // incoming keep-true from pc=375
  // incoming keep-true from pc=391
  // incoming keep-false from pc=406
  // incoming keep-false from pc=415
  if ((((((vmScope[3].indexOf(vmScope[14]) >= 0) || (vmScope[3].indexOf(vmScope[13]) >= 0)) || (vmScope[3].indexOf("pike") >= 0)) && (vmScope[10] !== vmScope[6])) && (vmScope[10] !== vmScope[5]))) {
    return true;
    // block boundary after return @pc=427
    /* goto L628; */
  }
  // L430:
  // block boundary after jump @pc=428
  // incoming false-branch from pc=424
  // incoming keep-true from pc=444
  // incoming keep-true from pc=460
  // incoming keep-true from pc=476
  // incoming keep-false from pc=492
  // incoming keep-false from pc=501
  if (((((((vmScope[3].indexOf(vmScope[18]) >= 0) || (vmScope[3].indexOf(vmScope[16]) >= 0)) || (vmScope[3].indexOf(vmScope[17]) >= 0)) || (vmScope[3].indexOf(vmScope[15]) >= 0)) && (vmScope[10] !== vmScope[8])) && (vmScope[10] !== vmScope[7]))) {
    return true;
    // block boundary after return @pc=513
    /* goto L628; */
  }
  // L516:
  // block boundary after jump @pc=514
  // incoming false-branch from pc=510
  // incoming keep-false from pc=530
  // incoming keep-false from pc=546
  // incoming keep-false from pc=562
  // incoming keep-false from pc=578
  // incoming keep-false from pc=594
  vmScope[19] = ((((((vmScope[3].indexOf(vmScope[12]) < 0) && (vmScope[3].indexOf(vmScope[14]) < 0)) && (vmScope[3].indexOf(vmScope[18]) < 0)) && (vmScope[3].indexOf(vmScope[15]) < 0)) && (vmScope[3].indexOf(vmScope[16]) < 0)) && (vmScope[3].indexOf(vmScope[17]) < 0));
  if ((vmScope[19] !== (vmScope[10] === vmScope[9]))) {
    return true;
  }
  // L628:
  // L628:
  // block boundary after return @pc=627
  // incoming from pc=359
  // incoming from pc=428
  // incoming from pc=514
  // incoming false-branch from pc=624
  vmScope[20] = 0;
  vmScope[21] = 1;
  vmScope[22] = 2;
  vmScope[23] = 3;
  vmScope[24] = 4;
  vmScope[25] = 5;
  vmScope[26] = vmScope[25];
  if ((vmScope[2].indexOf("firefox/") >= 0)) {
    vmScope[26] = vmScope[22];
    /* goto L804; */
  }
  // block boundary after jump @pc=685
  // incoming false-branch from pc=677
  // incoming keep-true from pc=700
  // incoming keep-true from pc=715
  if ((((vmScope[2].indexOf("opera/") >= 0) || (vmScope[2].indexOf(" opr/") >= 0)) || vmScope[2].indexOf(" opt/"))) {
    vmScope[26] = vmScope[21];
    /* goto L804; */
  }
  // block boundary after jump @pc=735
  // incoming false-branch from pc=727
  if ((vmScope[2].indexOf("chrome/") >= 0)) {
    vmScope[26] = vmScope[20];
    /* goto L804; */
  }
  // block boundary after jump @pc=758
  // incoming false-branch from pc=750
  // incoming keep-true from pc=773
  if (((vmScope[2].indexOf("trident/") >= 0) || (vmScope[2].indexOf("msie") >= 0))) {
    vmScope[26] = vmScope[24];
  } else {
    // block boundary after jump @pc=796
    // incoming false-branch from pc=788
    vmScope[26] = vmScope[25];
  }
  // L804:
  // L804:
  // incoming from pc=685
  // incoming from pc=735
  // incoming from pc=758
  // incoming from pc=796
  vmScope[27] = vmScope[0][0][0]().toLowerCase();
  // incoming keep-false from pc=825
  if (((vmScope[26] != vmScope[20]) && (vmScope[26] != vmScope[21]))) {
    if (window.chrome) { /* goto L861; */ } // keep-top
  }
  // L861:
  // L861:
  // incoming keep-false from pc=834
  // incoming keep-true from pc=840
  if (window.chrome) {
    return true;
  }
  // block boundary after return @pc=864
  // incoming false-branch from pc=861
  // incoming keep-false from pc=872
  // incoming keep-false from pc=881
  if ((((vmScope[26] != vmScope[20]) && (vmScope[26] != vmScope[21])) && (vmScope[27].indexOf("chrome") >= 0))) {
    return true;
  }
  // block boundary after return @pc=899
  // incoming false-branch from pc=896
  return false;
}

function vm_fn_731__initializeStorageQuotaDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][4] = createChild(vm_fn_732__collectStorageQuotaSignature, vmScope);
  return undefined;
}

function vm_fn_732__collectStorageQuotaSignature(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(732, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(732, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  __vmReportCapturedBinding(732, "vmScope[0][0][2]", 2, 2, vmScope[0][0][2]);
  __vmReportCapturedBinding(732, "vmScope[0][0][3]", 2, 3, vmScope[0][0][3]);
  try {
    vmScope[2] = [vmScope[0][0][0], vmScope[0][0][1], vmScope[0][0][2], vmScope[0][0][3]].map(createChild(vm_fn_733__readTriggerByte, vmScope));
    // incoming keep-false from pc=32
    // incoming keep-false from pc=42
    // incoming keep-false from pc=52
    if (((((vmScope[2]["0"] === 1) && (vmScope[2]["1"] === 7)) && (vmScope[2]["2"] === 200)) && (vmScope[2]["3"] === 185))) {
      return [1, 7, 201, 186];
    }
    // block boundary after return @pc=74
    // incoming false-branch from pc=62
    return vmScope[2];
    // block boundary after return @pc=78
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    return [1, 7, 200, 185];
  }
}

function vm_fn_733__readTriggerByte(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return ((vmScope[2].getTrigger() % 256) & 255);
}

function vm_fn_734__initializePrivacyQuotaDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[3] = createChild(vm_fn_735__probeChromiumStorageQuota, vmScope);
  vmScope[4] = createChild(vm_fn_737__probeFirefoxStorageIsolation, vmScope);
  vmScope[5] = createChild(vm_fn_740__probeSafariStorageDirectory, vmScope);
  vmScope[0][1] = createChild(vm_fn_742__detectPrivacyQuotaMode, vmScope);
  vmScope[2] = false;
  return undefined;
}

function vm_fn_735__probeChromiumStorageQuota(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if ((navigator.storage && (typeof navigator.storage.estimate === "function"))) {
    navigator.storage.estimate().then(createChild(vm_fn_736__markLowStorageQuota, vmScope));
  }
  return undefined;
}

function vm_fn_736__markLowStorageQuota(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  vmScope[0][0][2] = ((!(!vmScope[2].quota)) && (vmScope[2].quota < "2300000000"));
  return undefined;
}

function vm_fn_737__probeFirefoxStorageIsolation(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if ((!navigator.serviceWorker)) {
    vmScope[0][2] = true;
    return undefined;
  }
  if (window.indexedDB) {
    vmScope[2] = window.indexedDB.open("bdmsCheck");
    vmScope[2].addEventListener("success", createChild(vm_fn_738__cleanupIndexedDbProbe, vmScope));
    vmScope[2].addEventListener("error", createChild(vm_fn_739__markStorageIsolationDetected, vmScope));
  }
  return undefined;
}

function vm_fn_738__cleanupIndexedDbProbe(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  window.indexedDB.deleteDatabase("bdmsCheck");
  return undefined;
}

function vm_fn_739__markStorageIsolationDetected(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0][2] = true;
  return undefined;
}

function vm_fn_740__probeSafariStorageDirectory(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if ((navigator.storage && (typeof navigator.storage.getDirectory === "function"))) {
    navigator.storage.getDirectory().catch(createChild(vm_fn_741__markOutOfMemoryStorageError, vmScope));
  }
  return undefined;
}

function vm_fn_741__markOutOfMemoryStorageError(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((vmScope[2].message.indexOf("out of memory") >= 0)) {
    vmScope[0][0][2] = true;
  }
  return undefined;
}

function vm_fn_742__detectPrivacyQuotaMode(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(742, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(742, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(742, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(742, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(742, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = vmScope[0][0][0](navigator.userAgent);
  if (((vmScope[2].isChrome() || vmScope[2].isEdge()) || vmScope[2].isOpera())) {
    vmScope[0][3]();
  }
  if (vmScope[2].isFirefox()) {
    vmScope[0][4]();
  }
  if (vmScope[2].isSafari()) {
    vmScope[0][5]();
  }
  return vmScope[0][2];
}

function vm_fn_743__initializeStackTraceDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_744__hasSuspiciousUrlStackTrace, vmScope);
  return undefined;
}

function vm_fn_744__hasSuspiciousUrlStackTrace(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = new RegExp("((file|https?):\\/\\/localhost)", "i");
  vmScope[3] = new RegExp("https?:\\/\\/([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})", "i");
  vmScope[4] = new RegExp("(Module._compile|Object.Module|Module.load|Function.Module._load)", "i");
  vmScope[5] = undefined;
  try {
    throw Error("Fail to construct 'URL': Invalid URL");
  } catch (__vm_caught_exception) {
    vmScope[7] = __vm_caught_exception;
    vmScope[6] = vmScope[7].stack;
    // incoming keep-true from pc=61
    if (((vmScope[7].stack === null) || (vmScope[6] === undefined))) {

    } else {
      // block boundary after jump @pc=75
      // incoming false-branch from pc=70
    }
    // PHI@pc=94 slot=0: undefined | vmScope[6].split("\n").some(createChild(vm_fn_745__matchesSuspiciousStackFrame, vmScope))
    vmScope[5] = vmScope[6].split("\n").some(createChild(vm_fn_745__matchesSuspiciousStackFrame, vmScope));
  }
  return (!(!vmScope[5]));
}

function vm_fn_745__matchesSuspiciousStackFrame(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(745, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(745, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  __vmReportCapturedBinding(745, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  return ((vmScope[0][2].test(vmScope[2]) || vmScope[0][3].test(vmScope[2])) || vmScope[0][4].test(vmScope[2]));
}

function vm_fn_746__initializeDocumentAllDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_747__hasBrokenDocumentAllBehavior, vmScope);
  return undefined;
}

function vm_fn_747__hasBrokenDocumentAllBehavior(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    vmScope[2] = [(document.all != undefined), (document.all === undefined), (document.all.__proto__ !== HTMLAllCollection.prototype), (document.all.toString() !== "[object HTMLAllCollection]"), (document.all !== document.all)];
    return (vmScope[2].filter(createChild(vm_fn_748__isTruthyValue4, vmScope)).length > 0);
    // block boundary after return @pc=64
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    return true;
  }
}

function vm_fn_748__isTruthyValue4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return vmScope[2];
}

function vm_fn_749__initializeViewportGapDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_750__measureViewportGap, vmScope);
  vmScope[0][1] = createChild(vm_fn_751__detectDevtoolsByViewportGap, vmScope);
  return undefined;
}

function vm_fn_750__measureViewportGap(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = window.outerWidth;
  vmScope[3] = window.outerHeight;
  vmScope[4] = window.innerWidth;
  vmScope[5] = window.innerHeight;
  return Object.defineProperty(Object.defineProperty({}, "h", { value: ((vmScope[3] - vmScope[5]) > 300), writable: true, configurable: true, enumerable: true }), "w", { value: ((vmScope[2] - vmScope[4]) > 400), writable: true, configurable: true, enumerable: true });
}

function vm_fn_751__detectDevtoolsByViewportGap(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(751, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(751, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = vmScope[0][2]();
  vmScope[3] = vmScope[2].h;
  vmScope[4] = vmScope[2].w;
  vmScope[5] = vmScope[0][0][0](navigator.userAgent);
  // incoming keep-true from pc=46
  if ((vmScope[5].isFirefox() || vmScope[5].isSafari())) {
    // incoming keep-true from pc=61
    return (vmScope[3] || vmScope[4]);
  }
  // L67:
  // block boundary after return @pc=66
  // incoming false-branch from pc=56
  if (vmScope[5].isChrome()) {
    return vmScope[3];
  }
  // block boundary after return @pc=80
  // incoming false-branch from pc=75
  return false;
}

function vm_fn_752__initializeEmbeddedBrowserDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_753__hasEmbeddedBrowserApis, vmScope);
  return undefined;
}

function vm_fn_753__hasEmbeddedBrowserApis(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return ((((!(!window.cefSharp)) || (!(!window.CefSharp))) || (!(!window.eoapi))) || (!(!window.eoWebBrowserDispatcher)));
}

function vm_fn_754__initializeScreenAnomalyDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_755__hasScreenDescriptorAnomalies, vmScope);
  vmScope[0][1] = createChild(vm_fn_758__hasWindowFrameMismatch, vmScope);
  return undefined;
}

function vm_fn_755__hasScreenDescriptorAnomalies(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = Object.getOwnPropertyDescriptor(window, "screen");
  // incoming keep-true from pc=17
  if (((Object.getOwnPropertyDescriptor(window, "screen") === null) || (vmScope[2] === undefined))) {

  } else {
    // block boundary after jump @pc=31
    // incoming false-branch from pc=26
  }
  // incoming from pc=31
  // PHI@pc=38 slot=0: undefined | vmScope[2].value
  vmScope[5] = vmScope[2].value;
  if ((!(!vmScope[5]))) {
    vmScope[3] = Object.keys(vmScope[5]);
    // incoming keep-true from pc=64
    if (((Object.keys(vmScope[5]) === null) || (vmScope[3] === undefined))) {

    } else {
      // block boundary after jump @pc=78
      // incoming false-branch from pc=73
    }
    // incoming from pc=78
  }
  // L88:
  // incoming keep-false from pc=46
  // incoming keep-false from pc=104
  vmScope[4] = window.screen;
  // incoming keep-true from pc=139
  if (((window.screen === null) || (vmScope[4] === undefined))) {

  } else {
    // block boundary after jump @pc=153
    // incoming false-branch from pc=148
  }
  // incoming from pc=153
  vmScope[6] = [((!(!vmScope[5])) && (vmScope[3].length > 0)), ((Object.keys(window.screen).length > 0) && Object.keys(window.screen).some(createChild(vm_fn_756__isKnownScreenProperty, vmScope))), (Object.keys(vmScope[4].__proto__).length == 0)];
  return (vmScope[6].filter(createChild(vm_fn_757__isTruthyValue5, vmScope)).length > 0);
}

function vm_fn_756__isKnownScreenProperty(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return ["availHeight", "availLeft", "availTop", "availWidth", "colorDepth", "height", "isExtended", "onchange", "orientation", "pixelDepth", "width"].includes(vmScope[2]);
}

function vm_fn_757__isTruthyValue5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return vmScope[2];
}

function vm_fn_758__hasWindowFrameMismatch(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  try {
    // incoming keep-true from pc=5
    // incoming keep-true from pc=12
    return (((window !== self) || (window !== top)) || (window !== frames));
    // block boundary after return @pc=19
    return undefined;
  } catch (__vm_caught_exception) {
    vmScope[2] = __vm_caught_exception;
    return true;
  }
}

function vm_fn_759__initializeBuiltinTagValidationHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_760__getObjectTag4, vmScope);
  vmScope[0][0] = createChild(vm_fn_761__hasValidBuiltinEnvironmentTags, vmScope);
  return undefined;
}

function vm_fn_760__getObjectTag4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return Object.prototype.toString.call(vmScope[2]);
}

function vm_fn_761__hasValidBuiltinEnvironmentTags(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_760__getObjectTag4 = vmScope[0][2];
  __vmReportCapturedBinding(761, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  // incoming keep-false from pc=5
  // incoming keep-false from pc=12
  // incoming keep-false from pc=19
  // incoming keep-false from pc=26
  if ((((((typeof window !== "undefined") && (typeof navigator !== "undefined")) && (typeof document !== "undefined")) && (typeof location !== "undefined")) && (typeof history !== "undefined"))) {
    vmScope[2] = (vm_fn_760__getObjectTag4(navigator) === "[object Navigator]");
    // incoming keep-true from pc=60
    vmScope[3] = ((vm_fn_760__getObjectTag4(document) === "[object HTMLDocument]") || (vm_fn_760__getObjectTag4(document) === "[object Document]"));
    // incoming keep-true from pc=87
    vmScope[4] = ((vm_fn_760__getObjectTag4(location) === "[object Location]") || (vm_fn_760__getObjectTag4(location) === "[object Object]"));
    vmScope[5] = (vm_fn_760__getObjectTag4(history) === "[object History]");
    // incoming keep-false from pc=120
    // incoming keep-false from pc=125
    // incoming keep-false from pc=130
    return (((vmScope[2] && vmScope[3]) && vmScope[4]) && vmScope[5]);
  }
  // L136:
  // block boundary after return @pc=135
  // incoming false-branch from pc=33
  return false;
}

function vm_fn_762__initializeNativeCodeDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_763__isNonNativeFunction, vmScope);
  vmScope[0][0] = createChild(vm_fn_764__hasNativeApiAnomalies, vmScope);
  return undefined;
}

function vm_fn_763__isNonNativeFunction(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return ((typeof vmScope[2] !== "function") || (vmScope[2].toString().indexOf("[native code]") <= 0));
}

function vm_fn_764__hasNativeApiAnomalies(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(764, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  try {
    vmScope[2] = document.createElement("canvas");
    if (vmScope[0][2](vmScope[2].toDataURL)) {
      return true;
    }
    // block boundary after return @pc=26
    // incoming false-branch from pc=23
    if ((!vmScope[0][2](navigator.toString))) {
      if (!((typeof PluginArray !== "undefined"))) { /* goto L61; */ } // keep-top
    }
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    return true;
  }
  // L61:
  // L61:
  // incoming keep-true from pc=44
  // incoming keep-false from pc=51
  if ((!vmScope[0][2](navigator.toString))) {
    if (!((typeof MSPluginsCollection !== "undefined"))) { /* goto L78; */ } // keep-top
  }
  // L78:
  // L78:
  // incoming keep-true from pc=61
  // incoming keep-false from pc=68
  // PHI@pc=78 slot=0: vmScope[0][2](navigator.toString) | (typeof MSPluginsCollection !== "undefined") | (!(navigator.plugins instanceof MSPluginsCollection))
  return (typeof MSPluginsCollection !== "undefined");
}

function vm_fn_765__initializePlatformConsistencyHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][2] = createChild(vm_fn_766__detectPlatformProfile, vmScope);
  return undefined;
}

function vm_fn_766__detectPlatformProfile(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(766, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  __vmReportCapturedBinding(766, "vmScope[0][0][1]", 2, 1, vmScope[0][0][1]);
  vmScope[2] = vmScope[0][0][0](navigator.userAgent);
  vmScope[3] = vmScope[0][0][1](navigator.platform);
  vmScope[4] = (vmScope[3].isWindows() && (!vmScope[2].isWindows()));
  vmScope[5] = (((vmScope[3].isLinux() && (!vmScope[2].isLinux())) && (!vmScope[2].isHarmonyOS())) && (!vmScope[2].isAndroid()));
  vmScope[6] = (vmScope[3].isAndroid() && (!vmScope[2].isAndroid()));
  vmScope[7] = ((vmScope[3].isApple() && (!vmScope[2].isMacOS())) && (!vmScope[2].isiOS()));
  vmScope[8] = (vmScope[3].isOther() && (!vmScope[2].isOther()));
  return ((((vmScope[4] || vmScope[5]) || vmScope[6]) || vmScope[7]) || vmScope[8]);
}

function vm_fn_767__initializeLocationAnomalyDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_768__hasLocationAnomalies, vmScope);
  return undefined;
}

function vm_fn_768__hasLocationAnomalies(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = location.href;
  vmScope[3] = new RegExp("^((file|https?):\\/\\/localhost)", "i");
  vmScope[4] = new RegExp("^https?:\\/\\/([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})");
  return (((vmScope[3].test(vmScope[2]) || vmScope[4].test(vmScope[2])) || (document.location !== window.location)) || (location.valueOf() !== location));
}

function vm_fn_769__initializeNodeRuntimeDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = createChild(vm_fn_770__typeofHelper107, vmScope);
  vmScope[0][0] = createChild(vm_fn_773__isNodeRuntime2, vmScope);
  return undefined;
}

function vm_fn_770__typeofHelper107(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(770, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  if ((("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator))) {

  }
  // PHI@pc=23 slot=0: createChild(vm_fn_771__baseTypeof10, vmScope) | createChild(vm_fn_772__symbolAwareTypeof10, vmScope)
  vmScope[0][2] = createChild(vm_fn_771__baseTypeof10, vmScope);
  // POP createChild(vm_fn_771__baseTypeof10, vmScope)
  return vmScope[0][2](vmScope[2]);
}

function vm_fn_771__baseTypeof10(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return typeof vmScope[2];
}

function vm_fn_772__symbolAwareTypeof10(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  if ((((vmScope[2] && ("function" == typeof Symbol)) && (vmScope[2].constructor === Symbol)) && (vmScope[2] !== Symbol.prototype))) {

  }
  // PHI@pc=40 slot=0: "symbol" | typeof vmScope[2]
  return typeof vmScope[2];
}

function vm_fn_773__isNodeRuntime2(scope, thisArg, argsLike) {
  return false;
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(773, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  try {
    vmScope[2] = false;
    vmScope[2] = (typeof __non_webpack_require__ !== "undefined");
    // incoming keep-false from pc=26
  } catch (__vm_caught_exception) {
    vmScope[3] = __vm_caught_exception;
    vmScope[2] = false;
  }
  if ((!((typeof global !== "undefined") && (Object.prototype.toString.call(global.process) === "[object process]")))) {
    if ((typeof process === "undefined")) {

    } else {
      // block boundary after jump @pc=57
      // incoming false-branch from pc=53
    }
    // incoming from pc=57
  }
  // L79:
  // incoming keep-true from pc=46
  // incoming keep-false from pc=70
  // incoming keep-true from pc=79
  return (((typeof global !== "undefined") && (Object.prototype.toString.call(global.process) === "[object process]")) || vmScope[2]);
}

function vm_fn_774__initializePhantomDetectionHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][0] = createChild(vm_fn_775__hasPhantomRuntimeSignals, vmScope);
  return undefined;
}

function vm_fn_775__hasPhantomRuntimeSignals(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  // incoming keep-false from pc=5
  if ((!((typeof PluginArray !== "undefined") && (!(navigator.plugins instanceof PluginArray))))) {
    if (!((typeof MSPluginsCollection !== "undefined"))) { /* goto L32; */ } // keep-top
  }
  // L32:
  // L32:
  // incoming keep-true from pc=15
  // incoming keep-false from pc=22
  // incoming keep-true from pc=32
  // incoming keep-true from pc=40
  // incoming keep-true from pc=48
  if ((!(((((typeof PluginArray !== "undefined") && (!(navigator.plugins instanceof PluginArray))) || (!(!window._phantom))) || (!(!window.callPhantom))) || (!(!window.__nightmare))))) {
    if (!((!window.Audio))) { /* goto L69; */ } // keep-top
  }
  // L69:
  // L69:
  // incoming keep-true from pc=56
  // incoming keep-false from pc=63
  // PHI@pc=69 slot=0: (((((typeof PluginArray !== "undefined") && (!(navigator.plugins instanceof PluginArray))) || (!(!window._phantom))) || (!(!window.callPhantom))) || (!(!window.__nightmare))) | (!window.Audio) | window.CanvasRenderingContext2D
  return window.CanvasRenderingContext2D;
}

function vm_fn_776__initializeAutomationSignalHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[4] = createChild(vm_fn_777__hasHeadlessChromeAppVersion, vmScope);
  vmScope[5] = createChild(vm_fn_778__hasHeadlessChromeUserAgent, vmScope);
  vmScope[6] = createChild(vm_fn_779__hasWebdriverFlag, vmScope);
  vmScope[7] = createChild(vm_fn_780__hasZeroRttConnection, vmScope);
  vmScope[8] = createChild(vm_fn_781__hasEmptyUserAgentData, vmScope);
  vmScope[9] = createChild(vm_fn_782__hasHeadlessViewportSignature, vmScope);
  vmScope[10] = createChild(vm_fn_783__hasWindowAutomationMarker, vmScope);
  vmScope[11] = createChild(vm_fn_785__hasDocumentAutomationMarker, vmScope);
  vmScope[0][0] = createChild(vm_fn_787__detectAutomationSignals, vmScope);
  vmScope[2] = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped", "_Selenium_IDE_Recorder", "_selenium", "calledSelenium", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw", "driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response", "__webdriverFunc", "__webdriver_script_fn", "__$webdriverAsyncExecutor", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "$chrome_asyncScriptInfo", "$cdc_asdjflasutopfhvcZLmcfl_"];
  vmScope[3] = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder", "_phantom", "__phantomas", "__nightmare", "callPhantom"];
  return undefined;
}

function vm_fn_777__hasHeadlessChromeAppVersion(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return ((!(!navigator.appVersion)) && (navigator.appVersion.indexOf("HeadlessChrome") >= 0));
}

function vm_fn_778__hasHeadlessChromeUserAgent(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return ((typeof navigator.userAgent !== "string") || (navigator.userAgent.indexOf("HeadlessChrome") >= 0));
}

function vm_fn_779__hasWebdriverFlag(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return ((navigator.webdriver === true) || (Object.getOwnPropertyDescriptor(navigator, "webdriver") !== undefined));
}

function vm_fn_780__hasZeroRttConnection(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return ((!(!navigator.connection)) && (navigator.connection.rtt === 0));
}

function vm_fn_781__hasEmptyUserAgentData(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  if ((!navigator.userAgentData)) {
    return false;
  }
  vmScope[2] = navigator.userAgentData.brands;
  if (((navigator.userAgentData.brands === null) || (vmScope[2] === undefined))) {

  }
  return ((vmScope[2].length === 0) && (navigator.userAgentData.platform === ""));
}

function vm_fn_782__hasHeadlessViewportSignature(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[2] = (window.innerWidth === 800);
  vmScope[3] = (window.innerHeight === 600);
  vmScope[4] = (window.outerWidth === 0);
  vmScope[5] = (window.outerHeight === 0);
  // incoming keep-false from pc=43
  if ((!(vmScope[2] && vmScope[3]))) {
    if (!(vmScope[4])) { /* goto L58; */ } // keep-top
  }
  // L58:
  // L58:
  // incoming keep-true from pc=48
  // incoming keep-false from pc=53
  // PHI@pc=58 slot=0: (vmScope[2] && vmScope[3]) | vmScope[4] | vmScope[5]
  return vmScope[4];
}

function vm_fn_783__hasWindowAutomationMarker(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(783, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[2] = vmScope[0][3].some(createChild(vm_fn_784__hasWindowPropertyMarker, vmScope));
  return vmScope[2];
}

function vm_fn_784__hasWindowPropertyMarker(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return (window[vmScope[2]] || (Object.getOwnPropertyDescriptor(window, vmScope[2]) !== undefined));
}

function vm_fn_785__hasDocumentAutomationMarker(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(785, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  vmScope[2] = vmScope[0][2].some(createChild(vm_fn_786__hasDocumentPropertyMarker, vmScope));
  return vmScope[2];
}

function vm_fn_786__hasDocumentPropertyMarker(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return (document[vmScope[2]] || (Object.getOwnPropertyDescriptor(document, vmScope[2]) !== undefined));
}

function vm_fn_787__detectAutomationSignals(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  const vm_fn_777__hasHeadlessChromeAppVersion = vmScope[0][4];
  const vm_fn_778__hasHeadlessChromeUserAgent = vmScope[0][5];
  const vm_fn_779__hasWebdriverFlag = vmScope[0][6];
  const vm_fn_780__hasZeroRttConnection = vmScope[0][7];
  const vm_fn_781__hasEmptyUserAgentData = vmScope[0][8];
  const vm_fn_782__hasHeadlessViewportSignature = vmScope[0][9];
  const vm_fn_783__hasWindowAutomationMarker = vmScope[0][10];
  const vm_fn_785__hasDocumentAutomationMarker = vmScope[0][11];
  __vmReportCapturedBinding(787, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(787, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  __vmReportCapturedBinding(787, "vmScope[0][6]", 1, 6, vmScope[0][6]);
  __vmReportCapturedBinding(787, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(787, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(787, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  __vmReportCapturedBinding(787, "vmScope[0][10]", 1, 10, vmScope[0][10]);
  __vmReportCapturedBinding(787, "vmScope[0][11]", 1, 11, vmScope[0][11]);
  if (((!window.screen) || (!window.eval))) {
    return true;
  }
  vmScope[2] = [vm_fn_780__hasZeroRttConnection(), vm_fn_781__hasEmptyUserAgentData(), vm_fn_782__hasHeadlessViewportSignature()];
  return (((((vm_fn_777__hasHeadlessChromeAppVersion() || vm_fn_778__hasHeadlessChromeUserAgent()) || vm_fn_779__hasWebdriverFlag()) || vm_fn_783__hasWindowAutomationMarker()) || vm_fn_785__hasDocumentAutomationMarker()) || (vmScope[2].filter(createChild(vm_fn_788__isTruthyValue6, vmScope)).length >= 3));
}

function vm_fn_788__isTruthyValue6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  return vmScope[2];
}

function vm_fn_789__initializePluginSnapshotHelpers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[0][1] = createChild(vm_fn_790__collectPluginSnapshot, vmScope);
  return undefined;
}

function vm_fn_790__collectPluginSnapshot(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(790, "vmScope[0][0][0]", 2, 0, vmScope[0][0][0]);
  vmScope[2] = "";
  if (vmScope[0][0][0].PLUGIN) {
    vmScope[2] = vmScope[0][0][0].PLUGIN;
    /* goto L252; */
  }
  // block boundary after jump @pc=20
  // incoming false-branch from pc=10
  vmScope[3] = 5;
  vmScope[4] = [];
  vmScope[5] = navigator.plugins;
  // incoming keep-true from pc=42
  vmScope[6] = (vmScope[5] || []);
  vmScope[7] = 0;
  // L54:
  if (!((vmScope[7] < vmScope[3]))) { /* goto L231; */ }
  vmScope[8] = vmScope[6][vmScope[7]];
  vmScope[9] = [];
  vmScope[10] = 0;
  while ((vmScope[10] < vmScope[8].length)) {
    if (vmScope[8].item(vmScope[10])) {
      vmScope[9].push(vmScope[8].item(vmScope[10]).type);
    }
    // incoming false-branch from pc=105
    vmScope[10]++;
  }
  // L136:
  try {
    // block boundary after jump @pc=134
    // incoming false-branch from pc=92
    vmScope[11] = (vmScope[8].name + "");
    if (vmScope[8].version) {
      vmScope[11] = (vmScope[11] + (vmScope[8].version + ""));
      // POP (vmScope[11] + (vmScope[8].version + ""))
    }
    // incoming false-branch from pc=152
    vmScope[11] = (vmScope[11] + (vmScope[8].filename + ""));
    // POP (vmScope[11] + (vmScope[8].filename + ""))
    vmScope[11] = (vmScope[11] + vmScope[9].join(""));
    (vmScope[11] + vmScope[9].join(""));
    vmScope[4].push(vmScope[11]);
    vmScope[7]++;
  } catch (__vm_caught_exception) {
    vmScope[12] = __vm_caught_exception;
  }
  /* goto L54; */
  // L231:
  // block boundary after jump @pc=229
  // incoming false-branch from pc=61
  vmScope[2] = vmScope[4].join("##");
  vmScope[0][0][0].PLUGIN = vmScope[2];
  // L252:
  try {
    // incoming from pc=20
    return vmScope[2].slice(0, 1024);
  } catch (__vm_caught_exception) {
    vmScope[13] = __vm_caught_exception;
  }
}

function vm_fn_791__createPlatformMatchers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[3] = createChild(vm_fn_792__createForOfIteratorHelper2, vmScope);
  vmScope[4] = createChild(vm_fn_800__unsupportedIterableToArray6, vmScope);
  vmScope[5] = createChild(vm_fn_801__arrayLikeToArray6, vmScope);
  vmScope[0][0] = createChild(vm_fn_802__detectPlatformProfile2, vmScope);
  vmScope[2] = [Object.defineProperty(Object.defineProperty({}, "name", { value: "HarmonyOS", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("droid ([\\w.]+)\\b.+(harmonyos)", "i"), new RegExp("OpenHarmony", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Android", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("droid ([\\w.]+)\\b.+(android[- ]x86)", "i"), new RegExp("(android)[-/ ]?([\\w.]*)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "iOS", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)", "i"), new RegExp("(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)", "i"), new RegExp("\\((ipad);[-\\w),; ]+apple", "i"), new RegExp("applecoremedia\\/[\\w.]+ \\((ipad)", "i"), new RegExp("\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios", "i"), new RegExp("\\b(crios)\\/([\\w.]+)", "i"), new RegExp("fxios\\/([-\\w.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "MacOS", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("(mac os x) ?([\\w. ]*)", "i"), new RegExp("(macintosh|mac_powerpc\\b)(?!.+haiku)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Windows", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("microsoft (windows) (vista|xp)", "i"), new RegExp("(windows) nt 6\\.2; (arm)", "i"), new RegExp("(windows)[/ ]?([ntce\\d. ]+\\w)(?!.+xbox)", "i"), new RegExp("(windows (?:phone(?: os)?|mobile))[/ ]?([\\d.\\w ]*)", "i"), new RegExp("(win(?=3|9|n)|win 9x )([nt\\d.]+)", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Linux", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("(linux) ?([\\w.]*)", "i")], writable: true, configurable: true, enumerable: true })];
  return undefined;
}

function vm_fn_792__createForOfIteratorHelper2(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(792, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  // incoming keep-false from pc=5
  // incoming keep-true from pc=15
  vmScope[4] = ((("undefined" != typeof Symbol) && vmScope[2][Symbol.iterator]) || vmScope[2]["@@iterator"]);
  if (!((!vmScope[4]))) { /* goto L141; */ }
  if ((!Array.isArray(vmScope[2]))) {
    vmScope[4] = vmScope[0][4](vmScope[2]);
  }
  // incoming keep-true from pc=41
  if ((!(Array.isArray(vmScope[2]) || vmScope[0][4](vmScope[2])))) {
    // incoming keep-false from pc=61
  }
  // L77:
  // incoming keep-true from pc=56
  // incoming keep-false from pc=66
  if ((Array.isArray(vmScope[2]) || vmScope[0][4](vmScope[2]))) {
    if (vmScope[4]) {
      vmScope[2] = vmScope[4];
    }
    // incoming keep-false from pc=82
    // POP vmScope[4]
    vmScope[5] = 0;
    vmScope[10] = createChild(vm_fn_793__noopIteratorFinalize3, vmScope);
    vmScope[6] = createChild(vm_fn_793__noopIteratorFinalize3, vmScope);
    vmScope[11] = createChild(vm_fn_794__nextArrayIteratorValue3, vmScope);
    vmScope[12] = createChild(vm_fn_795__throwIteratorError3, vmScope);
    return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: vmScope[6], writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_794__nextArrayIteratorValue3, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_795__throwIteratorError3, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: vmScope[6], writable: true, configurable: true, enumerable: true });
  }
  // L134:
  // block boundary after return @pc=133
  // incoming false-branch from pc=77
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  // L141:
  // block boundary after throw @pc=140
  // incoming false-branch from pc=29
  vmScope[8] = (!0);
  vmScope[9] = (!1);
  vmScope[13] = createChild(vm_fn_796__startIterableIterator3, vmScope);
  vmScope[14] = createChild(vm_fn_797__nextIterableIteratorValue2, vmScope);
  vmScope[15] = createChild(vm_fn_798__captureIteratorError2, vmScope);
  vmScope[16] = createChild(vm_fn_799__finalizeIterableIterator3, vmScope);
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: createChild(vm_fn_796__startIterableIterator3, vmScope), writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_797__nextIterableIteratorValue2, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_798__captureIteratorError2, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: createChild(vm_fn_799__finalizeIterableIterator3, vmScope), writable: true, configurable: true, enumerable: true });
}

function vm_fn_793__noopIteratorFinalize3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_794__nextArrayIteratorValue3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(794, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(794, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if ((vmScope[0][5] >= vmScope[0][2].length)) {

  }
  // PHI@pc=35 slot=0: Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true }) | Object.defineProperty(Object.defineProperty({}, "done", { value: (!1), writable: true, configurable: true, enumerable: true }), "value", { value: vmScope[0][2][vmScope[0][5]++], writable: true, configurable: true, enumerable: true })
  return Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true });
}

function vm_fn_795__throwIteratorError3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  throw vmScope[2];
  return undefined;
}

function vm_fn_796__startIterableIterator3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(796, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(796, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[0][4] = vmScope[0][4].call(vmScope[0][2]);
  return undefined;
}

function vm_fn_797__nextIterableIteratorValue2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(797, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(797, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[2] = vmScope[0][4].next();
  vmScope[0][8] = vmScope[2].done;
  // POP vmScope[2].done
  return vmScope[2];
}

function vm_fn_798__captureIteratorError2(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(798, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(798, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  vmScope[0][9] = (!0);
  // POP (!0)
  vmScope[0][7] = vmScope[2];
  // POP vmScope[2]
  return undefined;
}

function vm_fn_799__finalizeIterableIterator3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(799, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(799, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(799, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(799, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  try {
    // incoming keep-true from pc=3
    // incoming keep-true from pc=12
    ((vmScope[0][8] || (null == vmScope[0][4].return)) || vmScope[0][4].return());
    // incoming control-jump from pc=23
  } finally {
    if (vmScope[0][9]) {
      throw vmScope[0][7];
    }
    // block boundary after throw @pc=33
  }
  return undefined;
}

function vm_fn_800__unsupportedIterableToArray6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(800, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][5](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][5](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_801__arrayLikeToArray6(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_802__detectPlatformProfile2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  __vmReportCapturedBinding(802, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(802, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[7] = createChild(vm_fn_803__isAndroid, vmScope);
  vmScope[8] = createChild(vm_fn_804__isIOS, vmScope);
  vmScope[9] = createChild(vm_fn_805__isLinux, vmScope);
  vmScope[10] = createChild(vm_fn_806__isMacOS, vmScope);
  vmScope[11] = createChild(vm_fn_807__isWindows, vmScope);
  vmScope[12] = createChild(vm_fn_808__isHarmonyOS, vmScope);
  vmScope[13] = createChild(vm_fn_809__isOther2, vmScope);
  vmScope[3] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "name", { value: "Other", writable: true, configurable: true, enumerable: true }), "isAndroid", { value: createChild(vm_fn_803__isAndroid, vmScope), writable: true, configurable: true, enumerable: true }), "isiOS", { value: createChild(vm_fn_804__isIOS, vmScope), writable: true, configurable: true, enumerable: true }), "isLinux", { value: createChild(vm_fn_805__isLinux, vmScope), writable: true, configurable: true, enumerable: true }), "isMacOS", { value: createChild(vm_fn_806__isMacOS, vmScope), writable: true, configurable: true, enumerable: true }), "isWindows", { value: createChild(vm_fn_807__isWindows, vmScope), writable: true, configurable: true, enumerable: true }), "isHarmonyOS", { value: createChild(vm_fn_808__isHarmonyOS, vmScope), writable: true, configurable: true, enumerable: true }), "isOther", { value: createChild(vm_fn_809__isOther2, vmScope), writable: true, configurable: true, enumerable: true });
  vmScope[4] = vmScope[0][3](vmScope[0][2]);
  vmScope[4].s();
  // L85:
  try {
    vmScope[5] = vmScope[4].n();
    if ((!vmScope[4].n().done)) {
      vmScope[6] = vmScope[5].value;
      if (vmScope[6].regs.some(createChild(vm_fn_810__matchesCurrentPattern5, vmScope))) {
        vmScope[3].name = vmScope[6].name;
      } else {
        // block boundary after jump @pc=134
        // incoming false-branch from pc=122
        /* goto L85; */
      }
    }
    // block boundary after jump @pc=136
    // incoming false-branch from pc=100
    // incoming from pc=134
    // incoming control-jump from pc=138
  } catch (__vm_caught_exception) {
    vmScope[14] = __vm_caught_exception;
    vmScope[4].e(vmScope[14]);
  } finally {
    vmScope[4].f();
  }
  return vmScope[3];
}

function vm_fn_803__isAndroid(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Android");
}

function vm_fn_804__isIOS(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "iOS");
}

function vm_fn_805__isLinux(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Linux");
}

function vm_fn_806__isMacOS(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "MacOS");
}

function vm_fn_807__isWindows(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Windows");
}

function vm_fn_808__isHarmonyOS(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "HarmonyOS");
}

function vm_fn_809__isOther2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Other");
}

function vm_fn_810__matchesCurrentPattern5(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(810, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[2].test(vmScope[0][2]);
}

function vm_fn_811__createPlatformFamilyMatchers(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  vmScope[3] = createChild(vm_fn_812__createForOfIteratorHelper3, vmScope);
  vmScope[4] = createChild(vm_fn_820__unsupportedIterableToArray7, vmScope);
  vmScope[5] = createChild(vm_fn_821__arrayLikeToArray7, vmScope);
  vmScope[0][0] = createChild(vm_fn_822__detectPlatformFamily, vmScope);
  vmScope[2] = [Object.defineProperty(Object.defineProperty({}, "name", { value: "Android", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("android", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Apple", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("mac|iphone|ipad|ipod", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Linux", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("linux", "i")], writable: true, configurable: true, enumerable: true }), Object.defineProperty(Object.defineProperty({}, "name", { value: "Windows", writable: true, configurable: true, enumerable: true }), "regs", { value: [new RegExp("win", "i")], writable: true, configurable: true, enumerable: true })];
  return undefined;
}

function vm_fn_812__createForOfIteratorHelper3(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(812, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  // incoming keep-false from pc=5
  // incoming keep-true from pc=15
  vmScope[4] = ((("undefined" != typeof Symbol) && vmScope[2][Symbol.iterator]) || vmScope[2]["@@iterator"]);
  if (!((!vmScope[4]))) { /* goto L141; */ }
  if ((!Array.isArray(vmScope[2]))) {
    vmScope[4] = vmScope[0][4](vmScope[2]);
  }
  // incoming keep-true from pc=41
  if ((!(Array.isArray(vmScope[2]) || vmScope[0][4](vmScope[2])))) {
    // incoming keep-false from pc=61
  }
  // L77:
  // incoming keep-true from pc=56
  // incoming keep-false from pc=66
  if ((Array.isArray(vmScope[2]) || vmScope[0][4](vmScope[2]))) {
    if (vmScope[4]) {
      vmScope[2] = vmScope[4];
    }
    // incoming keep-false from pc=82
    // POP vmScope[4]
    vmScope[5] = 0;
    vmScope[10] = createChild(vm_fn_813__noopIteratorFinalize4, vmScope);
    vmScope[6] = createChild(vm_fn_813__noopIteratorFinalize4, vmScope);
    vmScope[11] = createChild(vm_fn_814__nextArrayIteratorValue4, vmScope);
    vmScope[12] = createChild(vm_fn_815__throwIteratorError4, vmScope);
    return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: vmScope[6], writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_814__nextArrayIteratorValue4, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_815__throwIteratorError4, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: vmScope[6], writable: true, configurable: true, enumerable: true });
  }
  // L134:
  // block boundary after return @pc=133
  // incoming false-branch from pc=77
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  // L141:
  // block boundary after throw @pc=140
  // incoming false-branch from pc=29
  vmScope[8] = (!0);
  vmScope[9] = (!1);
  vmScope[13] = createChild(vm_fn_816__startIterableIterator4, vmScope);
  vmScope[14] = createChild(vm_fn_817__nextIterableIteratorValue3, vmScope);
  vmScope[15] = createChild(vm_fn_818__captureIteratorError3, vmScope);
  vmScope[16] = createChild(vm_fn_819__finalizeIterableIterator4, vmScope);
  return Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "s", { value: createChild(vm_fn_816__startIterableIterator4, vmScope), writable: true, configurable: true, enumerable: true }), "n", { value: createChild(vm_fn_817__nextIterableIteratorValue3, vmScope), writable: true, configurable: true, enumerable: true }), "e", { value: createChild(vm_fn_818__captureIteratorError3, vmScope), writable: true, configurable: true, enumerable: true }), "f", { value: createChild(vm_fn_819__finalizeIterableIterator4, vmScope), writable: true, configurable: true, enumerable: true });
}

function vm_fn_813__noopIteratorFinalize4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return undefined;
}

function vm_fn_814__nextArrayIteratorValue4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(814, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(814, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if ((vmScope[0][5] >= vmScope[0][2].length)) {

  }
  // PHI@pc=35 slot=0: Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true }) | Object.defineProperty(Object.defineProperty({}, "done", { value: (!1), writable: true, configurable: true, enumerable: true }), "value", { value: vmScope[0][2][vmScope[0][5]++], writable: true, configurable: true, enumerable: true })
  return Object.defineProperty({}, "done", { value: (!0), writable: true, configurable: true, enumerable: true });
}

function vm_fn_815__throwIteratorError4(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  throw vmScope[2];
  return undefined;
}

function vm_fn_816__startIterableIterator4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(816, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(816, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  vmScope[0][4] = vmScope[0][4].call(vmScope[0][2]);
  return undefined;
}

function vm_fn_817__nextIterableIteratorValue3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(817, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(817, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  vmScope[2] = vmScope[0][4].next();
  vmScope[0][8] = vmScope[2].done;
  // POP vmScope[2].done
  return vmScope[2];
}

function vm_fn_818__captureIteratorError3(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(818, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(818, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  vmScope[0][9] = (!0);
  // POP (!0)
  vmScope[0][7] = vmScope[2];
  // POP vmScope[2]
  return undefined;
}

function vm_fn_819__finalizeIterableIterator4(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  __vmReportCapturedBinding(819, "vmScope[0][4]", 1, 4, vmScope[0][4]);
  __vmReportCapturedBinding(819, "vmScope[0][7]", 1, 7, vmScope[0][7]);
  __vmReportCapturedBinding(819, "vmScope[0][8]", 1, 8, vmScope[0][8]);
  __vmReportCapturedBinding(819, "vmScope[0][9]", 1, 9, vmScope[0][9]);
  try {
    // incoming keep-true from pc=3
    // incoming keep-true from pc=12
    ((vmScope[0][8] || (null == vmScope[0][4].return)) || vmScope[0][4].return());
    // incoming control-jump from pc=23
  } finally {
    if (vmScope[0][9]) {
      throw vmScope[0][7];
    }
    // block boundary after throw @pc=33
  }
  return undefined;
}

function vm_fn_820__unsupportedIterableToArray7(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  __vmReportCapturedBinding(820, "vmScope[0][5]", 1, 5, vmScope[0][5]);
  if (!(vmScope[2])) { /* goto L148; */ }
  if (("string" == typeof vmScope[2])) {
    return vmScope[0][5](vmScope[2], vmScope[3]);
  }
  // block boundary after return @pc=26
  // incoming false-branch from pc=12
  vmScope[4] = {}.toString.call(vmScope[2]).slice(8, (-1));
  // incoming keep-false from pc=57
  if ((("Object" === vmScope[4]) && vmScope[2].constructor)) {
    vmScope[4] = vmScope[2].constructor.name;
  }
  // incoming keep-false from pc=64
  // POP ((("Object" === vmScope[4]) && vmScope[2].constructor) && vmScope[2].constructor.name)
  // incoming keep-true from pc=84
  if ((("Map" === vmScope[4]) || ("Set" === vmScope[4]))) {
    /* goto L147; */
  }
  // block boundary after jump @pc=104
  // incoming false-branch from pc=92
  // incoming keep-true from pc=112
  if ((("Arguments" === vmScope[4]) || new RegExp("^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$").test(vmScope[4]))) {

  } else {
    // block boundary after jump @pc=142
    // incoming false-branch from pc=128
  }
  // L147:
  // L147:
  // incoming from pc=104
  // incoming from pc=142
  // PHI@pc=147 slot=0: Array.from(vmScope[2]) | vmScope[0][5](vmScope[2], vmScope[3]) | undefined
  return Array.from(vmScope[2]);
  // L148:
  // block boundary after return @pc=147
  // incoming false-branch from pc=3
  return undefined;
}

function vm_fn_821__arrayLikeToArray7(scope, thisArg, argsLike, arg0, arg1) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 2, true);
  const scope_0_2 = arg0;
  const scope_0_3 = arg1;
  // incoming keep-true from pc=5
  if (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length))) {
    vmScope[3] = vmScope[2].length;
  }
  // incoming keep-false from pc=16
  // POP (((null == vmScope[3]) || (vmScope[3] > vmScope[2].length)) && vmScope[2].length)
  vmScope[4] = 0;
  vmScope[5] = Array(vmScope[3]);
  while ((vmScope[4] < vmScope[3])) {
    vmScope[5][vmScope[4]] = vmScope[2][vmScope[4]];
    vmScope[4]++;
  }
  // block boundary after jump @pc=72
  // incoming false-branch from pc=51
  return vmScope[5];
}

function vm_fn_822__detectPlatformFamily(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  __vmReportCapturedBinding(822, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  __vmReportCapturedBinding(822, "vmScope[0][3]", 1, 3, vmScope[0][3]);
  vmScope[7] = createChild(vm_fn_823__isAndroid2, vmScope);
  vmScope[8] = createChild(vm_fn_824__isApple2, vmScope);
  vmScope[9] = createChild(vm_fn_825__isLinux2, vmScope);
  vmScope[10] = createChild(vm_fn_826__isWindows2, vmScope);
  vmScope[11] = createChild(vm_fn_827__isOther3, vmScope);
  vmScope[3] = Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty(Object.defineProperty({}, "name", { value: "Other", writable: true, configurable: true, enumerable: true }), "isAndroid", { value: createChild(vm_fn_823__isAndroid2, vmScope), writable: true, configurable: true, enumerable: true }), "isApple", { value: createChild(vm_fn_824__isApple2, vmScope), writable: true, configurable: true, enumerable: true }), "isLinux", { value: createChild(vm_fn_825__isLinux2, vmScope), writable: true, configurable: true, enumerable: true }), "isWindows", { value: createChild(vm_fn_826__isWindows2, vmScope), writable: true, configurable: true, enumerable: true }), "isOther", { value: createChild(vm_fn_827__isOther3, vmScope), writable: true, configurable: true, enumerable: true });
  vmScope[4] = vmScope[0][3](vmScope[0][2]);
  vmScope[4].s();
  // L69:
  try {
    vmScope[5] = vmScope[4].n();
    if ((!vmScope[4].n().done)) {
      vmScope[6] = vmScope[5].value;
      if (vmScope[6].regs.some(createChild(vm_fn_828__matchesCurrentPattern6, vmScope))) {
        vmScope[3].name = vmScope[6].name;
      } else {
        // block boundary after jump @pc=118
        // incoming false-branch from pc=106
        /* goto L69; */
      }
    }
    // block boundary after jump @pc=120
    // incoming false-branch from pc=84
    // incoming from pc=118
    // incoming control-jump from pc=122
  } catch (__vm_caught_exception) {
    vmScope[12] = __vm_caught_exception;
    vmScope[4].e(vmScope[12]);
  } finally {
    vmScope[4].f();
  }
  return vmScope[3];
}

function vm_fn_823__isAndroid2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Android");
}

function vm_fn_824__isApple2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Apple");
}

function vm_fn_825__isLinux2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Linux");
}

function vm_fn_826__isWindows2(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Windows");
}

function vm_fn_827__isOther3(scope, thisArg, argsLike) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 0, true);
  return (vmThis.name === "Other");
}

function vm_fn_828__matchesCurrentPattern6(scope, thisArg, argsLike, arg0) {
  const { scope: vmScope, thisArg: vmThis, args: vmArgs } = createInvocation(scope, thisArg, argsLike, 1, true);
  const scope_0_2 = arg0;
  __vmReportCapturedBinding(828, "vmScope[0][2]", 1, 2, vmScope[0][2]);
  return vmScope[2].test(vmScope[0][2]);
}

;(function registerDecompiledVmEntries(target) {
  var entryMap = target.__VM_DECOMPILED_ENTRY_MAP__ || (target.__VM_DECOMPILED_ENTRY_MAP__ = Object.create(null));
  target.vm_fn_0 = vm_fn_0;
  entryMap[0] = vm_fn_0;
  target.vm_fn_1 = vm_fn_1;
  entryMap[1] = vm_fn_1;
  target.vm_fn_2__baseTypeof = vm_fn_2__baseTypeof;
  entryMap[2] = vm_fn_2__baseTypeof;
  target.vm_fn_3__symbolAwareTypeof = vm_fn_3__symbolAwareTypeof;
  entryMap[3] = vm_fn_3__symbolAwareTypeof;
  target.vm_fn_4 = vm_fn_4;
  entryMap[4] = vm_fn_4;
  target.vm_fn_5__throwInvalidSpreadError = vm_fn_5__throwInvalidSpreadError;
  entryMap[5] = vm_fn_5__throwInvalidSpreadError;
  target.vm_fn_6__unsupportedIterableToArray = vm_fn_6__unsupportedIterableToArray;
  entryMap[6] = vm_fn_6__unsupportedIterableToArray;
  target.vm_fn_7__iterableToArray = vm_fn_7__iterableToArray;
  entryMap[7] = vm_fn_7__iterableToArray;
  target.vm_fn_8 = vm_fn_8;
  entryMap[8] = vm_fn_8;
  target.vm_fn_9__arrayLikeToArray = vm_fn_9__arrayLikeToArray;
  entryMap[9] = vm_fn_9__arrayLikeToArray;
  target.vm_fn_10__createRegeneratorRuntime = vm_fn_10__createRegeneratorRuntime;
  entryMap[10] = vm_fn_10__createRegeneratorRuntime;
  target.vm_fn_11 = vm_fn_11;
  entryMap[11] = vm_fn_11;
  target.vm_fn_12__definePropertyFallback = vm_fn_12__definePropertyFallback;
  entryMap[12] = vm_fn_12__definePropertyFallback;
  target.vm_fn_13__defineIteratorMethod = vm_fn_13__defineIteratorMethod;
  entryMap[13] = vm_fn_13__defineIteratorMethod;
  target.vm_fn_14 = vm_fn_14;
  entryMap[14] = vm_fn_14;
  target.vm_fn_15__wrapGeneratorFunction = vm_fn_15__wrapGeneratorFunction;
  entryMap[15] = vm_fn_15__wrapGeneratorFunction;
  target.vm_fn_16 = vm_fn_16;
  entryMap[16] = vm_fn_16;
  target.vm_fn_17 = vm_fn_17;
  entryMap[17] = vm_fn_17;
  target.vm_fn_18 = vm_fn_18;
  entryMap[18] = vm_fn_18;
  target.vm_fn_19 = vm_fn_19;
  entryMap[19] = vm_fn_19;
  target.vm_fn_20__returnThis = vm_fn_20__returnThis;
  entryMap[20] = vm_fn_20__returnThis;
  target.vm_fn_21__defineIteratorMethods = vm_fn_21__defineIteratorMethods;
  entryMap[21] = vm_fn_21__defineIteratorMethods;
  target.vm_fn_22__defineIteratorMethod7 = vm_fn_22__defineIteratorMethod7;
  entryMap[22] = vm_fn_22__defineIteratorMethod7;
  target.vm_fn_23__invokeIteratorMethod = vm_fn_23__invokeIteratorMethod;
  entryMap[23] = vm_fn_23__invokeIteratorMethod;
  target.vm_fn_24__setupAsyncIterator = vm_fn_24__setupAsyncIterator;
  entryMap[24] = vm_fn_24__setupAsyncIterator;
  target.vm_fn_25__resumeAsyncIteratorStep = vm_fn_25__resumeAsyncIteratorStep;
  entryMap[25] = vm_fn_25__resumeAsyncIteratorStep;
  target.vm_fn_26__resumeAsyncIteratorNext = vm_fn_26__resumeAsyncIteratorNext;
  entryMap[26] = vm_fn_26__resumeAsyncIteratorNext;
  target.vm_fn_27__resumeAsyncIteratorThrow = vm_fn_27__resumeAsyncIteratorThrow;
  entryMap[27] = vm_fn_27__resumeAsyncIteratorThrow;
  target.vm_fn_28__resolveAsyncIteratorValue = vm_fn_28__resolveAsyncIteratorValue;
  entryMap[28] = vm_fn_28__resolveAsyncIteratorValue;
  target.vm_fn_29__resumeAsyncIteratorThrow2 = vm_fn_29__resumeAsyncIteratorThrow2;
  entryMap[29] = vm_fn_29__resumeAsyncIteratorThrow2;
  target.vm_fn_30__enqueueAsyncIteratorStep = vm_fn_30__enqueueAsyncIteratorStep;
  entryMap[30] = vm_fn_30__enqueueAsyncIteratorStep;
  target.vm_fn_31__createAsyncIteratorPromise = vm_fn_31__createAsyncIteratorPromise;
  entryMap[31] = vm_fn_31__createAsyncIteratorPromise;
  target.vm_fn_32__executeAsyncIteratorStep = vm_fn_32__executeAsyncIteratorStep;
  entryMap[32] = vm_fn_32__executeAsyncIteratorStep;
  target.vm_fn_33__createInvokeMethod = vm_fn_33__createInvokeMethod;
  entryMap[33] = vm_fn_33__createInvokeMethod;
  target.vm_fn_34__invokeGeneratorMethod = vm_fn_34__invokeGeneratorMethod;
  entryMap[34] = vm_fn_34__invokeGeneratorMethod;
  target.vm_fn_35__maybeInvokeDelegate = vm_fn_35__maybeInvokeDelegate;
  entryMap[35] = vm_fn_35__maybeInvokeDelegate;
  target.vm_fn_36__pushTryEntry = vm_fn_36__pushTryEntry;
  entryMap[36] = vm_fn_36__pushTryEntry;
  target.vm_fn_37__resetCompletionRecord = vm_fn_37__resetCompletionRecord;
  entryMap[37] = vm_fn_37__resetCompletionRecord;
  target.vm_fn_38__resetTryEntryContext = vm_fn_38__resetTryEntryContext;
  entryMap[38] = vm_fn_38__resetTryEntryContext;
  target.vm_fn_39__getIterator = vm_fn_39__getIterator;
  entryMap[39] = vm_fn_39__getIterator;
  target.vm_fn_40__nextArrayLikeIterator = vm_fn_40__nextArrayLikeIterator;
  entryMap[40] = vm_fn_40__nextArrayLikeIterator;
  target.vm_fn_41__isGeneratorFunction = vm_fn_41__isGeneratorFunction;
  entryMap[41] = vm_fn_41__isGeneratorFunction;
  target.vm_fn_42__markGeneratorFunction = vm_fn_42__markGeneratorFunction;
  entryMap[42] = vm_fn_42__markGeneratorFunction;
  target.vm_fn_43__wrapAwaitValue = vm_fn_43__wrapAwaitValue;
  entryMap[43] = vm_fn_43__wrapAwaitValue;
  target.vm_fn_44__returnThis2 = vm_fn_44__returnThis2;
  entryMap[44] = vm_fn_44__returnThis2;
  target.vm_fn_45__createAsyncFunctionWrapper = vm_fn_45__createAsyncFunctionWrapper;
  entryMap[45] = vm_fn_45__createAsyncFunctionWrapper;
  target.vm_fn_46__handleAsyncIteratorResult = vm_fn_46__handleAsyncIteratorResult;
  entryMap[46] = vm_fn_46__handleAsyncIteratorResult;
  target.vm_fn_47__returnThis3 = vm_fn_47__returnThis3;
  entryMap[47] = vm_fn_47__returnThis3;
  target.vm_fn_48__getGeneratorTag = vm_fn_48__getGeneratorTag;
  entryMap[48] = vm_fn_48__getGeneratorTag;
  target.vm_fn_49__createObjectKeyIterator = vm_fn_49__createObjectKeyIterator;
  entryMap[49] = vm_fn_49__createObjectKeyIterator;
  target.vm_fn_50__nextObjectKeyIterator = vm_fn_50__nextObjectKeyIterator;
  entryMap[50] = vm_fn_50__nextObjectKeyIterator;
  target.vm_fn_51__resetGeneratorContext = vm_fn_51__resetGeneratorContext;
  entryMap[51] = vm_fn_51__resetGeneratorContext;
  target.vm_fn_52__stopGeneratorContext = vm_fn_52__stopGeneratorContext;
  entryMap[52] = vm_fn_52__stopGeneratorContext;
  target.vm_fn_53__dispatchException = vm_fn_53__dispatchException;
  entryMap[53] = vm_fn_53__dispatchException;
  target.vm_fn_54__handleExceptionEntry = vm_fn_54__handleExceptionEntry;
  entryMap[54] = vm_fn_54__handleExceptionEntry;
  target.vm_fn_55__abrupt = vm_fn_55__abrupt;
  entryMap[55] = vm_fn_55__abrupt;
  target.vm_fn_56__complete = vm_fn_56__complete;
  entryMap[56] = vm_fn_56__complete;
  target.vm_fn_57__finishFinallyEntry = vm_fn_57__finishFinallyEntry;
  entryMap[57] = vm_fn_57__finishFinallyEntry;
  target.vm_fn_58__catchTryEntry = vm_fn_58__catchTryEntry;
  entryMap[58] = vm_fn_58__catchTryEntry;
  target.vm_fn_59__delegateYield = vm_fn_59__delegateYield;
  entryMap[59] = vm_fn_59__delegateYield;
  target.vm_fn_60__assertClassCall = vm_fn_60__assertClassCall;
  entryMap[60] = vm_fn_60__assertClassCall;
  target.vm_fn_61__defineProperties = vm_fn_61__defineProperties;
  entryMap[61] = vm_fn_61__defineProperties;
  target.vm_fn_62__createClass = vm_fn_62__createClass;
  entryMap[62] = vm_fn_62__createClass;
  target.vm_fn_63__toPropertyKey = vm_fn_63__toPropertyKey;
  entryMap[63] = vm_fn_63__toPropertyKey;
  target.vm_fn_64__toPrimitive = vm_fn_64__toPrimitive;
  entryMap[64] = vm_fn_64__toPrimitive;
  target.vm_fn_65__inherits = vm_fn_65__inherits;
  entryMap[65] = vm_fn_65__inherits;
  target.vm_fn_66__setPrototypeOf = vm_fn_66__setPrototypeOf;
  entryMap[66] = vm_fn_66__setPrototypeOf;
  target.vm_fn_67__setPrototypeOfFallback = vm_fn_67__setPrototypeOfFallback;
  entryMap[67] = vm_fn_67__setPrototypeOfFallback;
  target.vm_fn_68__createSuper = vm_fn_68__createSuper;
  entryMap[68] = vm_fn_68__createSuper;
  target.vm_fn_69__createSuperInternal = vm_fn_69__createSuperInternal;
  entryMap[69] = vm_fn_69__createSuperInternal;
  target.vm_fn_70__possibleConstructorReturn = vm_fn_70__possibleConstructorReturn;
  entryMap[70] = vm_fn_70__possibleConstructorReturn;
  target.vm_fn_71__assertThisInitialized = vm_fn_71__assertThisInitialized;
  entryMap[71] = vm_fn_71__assertThisInitialized;
  target.vm_fn_72__isNativeReflectConstruct = vm_fn_72__isNativeReflectConstruct;
  entryMap[72] = vm_fn_72__isNativeReflectConstruct;
  target.vm_fn_73 = vm_fn_73;
  entryMap[73] = vm_fn_73;
  target.vm_fn_74__returnReflectConstructSupport = vm_fn_74__returnReflectConstructSupport;
  entryMap[74] = vm_fn_74__returnReflectConstructSupport;
  target.vm_fn_75__getPrototypeOf = vm_fn_75__getPrototypeOf;
  entryMap[75] = vm_fn_75__getPrototypeOf;
  target.vm_fn_76__getPrototypeOfFallback = vm_fn_76__getPrototypeOfFallback;
  entryMap[76] = vm_fn_76__getPrototypeOfFallback;
  target.vm_fn_77__asyncGeneratorStep = vm_fn_77__asyncGeneratorStep;
  entryMap[77] = vm_fn_77__asyncGeneratorStep;
  target.vm_fn_78__asyncToGenerator = vm_fn_78__asyncToGenerator;
  entryMap[78] = vm_fn_78__asyncToGenerator;
  target.vm_fn_79__asyncToGeneratorWrapper = vm_fn_79__asyncToGeneratorWrapper;
  entryMap[79] = vm_fn_79__asyncToGeneratorWrapper;
  target.vm_fn_80__runAsyncToGeneratorExecutor = vm_fn_80__runAsyncToGeneratorExecutor;
  entryMap[80] = vm_fn_80__runAsyncToGeneratorExecutor;
  target.vm_fn_81__asyncToGeneratorNext = vm_fn_81__asyncToGeneratorNext;
  entryMap[81] = vm_fn_81__asyncToGeneratorNext;
  target.vm_fn_82__asyncToGeneratorThrow = vm_fn_82__asyncToGeneratorThrow;
  entryMap[82] = vm_fn_82__asyncToGeneratorThrow;
  target.vm_fn_83__readMsTokenCache = vm_fn_83__readMsTokenCache;
  entryMap[83] = vm_fn_83__readMsTokenCache;
  target.vm_fn_84__createCommonReportSender = vm_fn_84__createCommonReportSender;
  entryMap[84] = vm_fn_84__createCommonReportSender;
  target.vm_fn_85__sendCommonReport = vm_fn_85__sendCommonReport;
  entryMap[85] = vm_fn_85__sendCommonReport;
  target.vm_fn_86__updateMsTokenFromResponse = vm_fn_86__updateMsTokenFromResponse;
  entryMap[86] = vm_fn_86__updateMsTokenFromResponse;
  target.vm_fn_87__setupVisibilityChangeFlush = vm_fn_87__setupVisibilityChangeFlush;
  entryMap[87] = vm_fn_87__setupVisibilityChangeFlush;
  target.vm_fn_88__flushBehaviorOnVisibilityChange = vm_fn_88__flushBehaviorOnVisibilityChange;
  entryMap[88] = vm_fn_88__flushBehaviorOnVisibilityChange;
  target.vm_fn_89__invokeTrackReportAsync = vm_fn_89__invokeTrackReportAsync;
  entryMap[89] = vm_fn_89__invokeTrackReportAsync;
  target.vm_fn_90__createTrackReportAsync = vm_fn_90__createTrackReportAsync;
  entryMap[90] = vm_fn_90__createTrackReportAsync;
  target.vm_fn_91__createTrackReportGenerator = vm_fn_91__createTrackReportGenerator;
  entryMap[91] = vm_fn_91__createTrackReportGenerator;
  target.vm_fn_92__runTrackReportGenerator = vm_fn_92__runTrackReportGenerator;
  entryMap[92] = vm_fn_92__runTrackReportGenerator;
  target.vm_fn_93__createBehaviorFlushScheduler = vm_fn_93__createBehaviorFlushScheduler;
  entryMap[93] = vm_fn_93__createBehaviorFlushScheduler;
  target.vm_fn_94__scheduleBehaviorFlush = vm_fn_94__scheduleBehaviorFlush;
  entryMap[94] = vm_fn_94__scheduleBehaviorFlush;
  target.vm_fn_95__flushScheduledBehaviorReport = vm_fn_95__flushScheduledBehaviorReport;
  entryMap[95] = vm_fn_95__flushScheduledBehaviorReport;
  target.vm_fn_96__isUrlInstance = vm_fn_96__isUrlInstance;
  entryMap[96] = vm_fn_96__isUrlInstance;
  target.vm_fn_97__isRequestInstance = vm_fn_97__isRequestInstance;
  entryMap[97] = vm_fn_97__isRequestInstance;
  target.vm_fn_98__shouldTrackRequestPath = vm_fn_98__shouldTrackRequestPath;
  entryMap[98] = vm_fn_98__shouldTrackRequestPath;
  target.vm_fn_99__matchesCurrentPattern = vm_fn_99__matchesCurrentPattern;
  entryMap[99] = vm_fn_99__matchesCurrentPattern;
  target.vm_fn_100__matchesCurrentPattern2 = vm_fn_100__matchesCurrentPattern2;
  entryMap[100] = vm_fn_100__matchesCurrentPattern2;
  target.vm_fn_101__matchesTrackPathConfig = vm_fn_101__matchesTrackPathConfig;
  entryMap[101] = vm_fn_101__matchesTrackPathConfig;
  target.vm_fn_102__matchesCurrentPattern3 = vm_fn_102__matchesCurrentPattern3;
  entryMap[102] = vm_fn_102__matchesCurrentPattern3;
  target.vm_fn_103__buildCommonRequestPayload = vm_fn_103__buildCommonRequestPayload;
  entryMap[103] = vm_fn_103__buildCommonRequestPayload;
  target.vm_fn_104__installXhrHooks = vm_fn_104__installXhrHooks;
  entryMap[104] = vm_fn_104__installXhrHooks;
  target.vm_fn_105__interceptXhrOpen = vm_fn_105__interceptXhrOpen;
  entryMap[105] = vm_fn_105__interceptXhrOpen;
  target.vm_fn_106__interceptXhrSetRequestHeader = vm_fn_106__interceptXhrSetRequestHeader;
  entryMap[106] = vm_fn_106__interceptXhrSetRequestHeader;
  target.vm_fn_107__interceptXhrSend = vm_fn_107__interceptXhrSend;
  entryMap[107] = vm_fn_107__interceptXhrSend;
  target.vm_fn_108__replayQueuedInvocation = vm_fn_108__replayQueuedInvocation;
  entryMap[108] = vm_fn_108__replayQueuedInvocation;
  target.vm_fn_109__installFetchHook = vm_fn_109__installFetchHook;
  entryMap[109] = vm_fn_109__installFetchHook;
  target.vm_fn_110__interceptFetch = vm_fn_110__interceptFetch;
  entryMap[110] = vm_fn_110__interceptFetch;
  target.vm_fn_111__finalizeFetchRequestClone = vm_fn_111__finalizeFetchRequestClone;
  entryMap[111] = vm_fn_111__finalizeFetchRequestClone;
  target.vm_fn_112__installEventSourceHook = vm_fn_112__installEventSourceHook;
  entryMap[112] = vm_fn_112__installEventSourceHook;
  target.vm_fn_113__createEventSourceWrapper = vm_fn_113__createEventSourceWrapper;
  entryMap[113] = vm_fn_113__createEventSourceWrapper;
  target.vm_fn_114__constructWrappedEventSource = vm_fn_114__constructWrappedEventSource;
  entryMap[114] = vm_fn_114__constructWrappedEventSource;
  target.vm_fn_115__rewriteTrackedUrl = vm_fn_115__rewriteTrackedUrl;
  entryMap[115] = vm_fn_115__rewriteTrackedUrl;
  target.vm_fn_116__createReportModeScheduler = vm_fn_116__createReportModeScheduler;
  entryMap[116] = vm_fn_116__createReportModeScheduler;
  target.vm_fn_117__scheduleInitialTrackReport = vm_fn_117__scheduleInitialTrackReport;
  entryMap[117] = vm_fn_117__scheduleInitialTrackReport;
  target.vm_fn_118__startPeriodicBehaviorFlush = vm_fn_118__startPeriodicBehaviorFlush;
  entryMap[118] = vm_fn_118__startPeriodicBehaviorFlush;
  target.vm_fn_119__flushBehaviorIntervalTick = vm_fn_119__flushBehaviorIntervalTick;
  entryMap[119] = vm_fn_119__flushBehaviorIntervalTick;
  target.vm_fn_120__startCommonReportHooks = vm_fn_120__startCommonReportHooks;
  entryMap[120] = vm_fn_120__startCommonReportHooks;
  target.vm_fn_121__runReportModeScheduler = vm_fn_121__runReportModeScheduler;
  entryMap[121] = vm_fn_121__runReportModeScheduler;
  target.vm_fn_122 = vm_fn_122;
  entryMap[122] = vm_fn_122;
  target.vm_fn_123 = vm_fn_123;
  entryMap[123] = vm_fn_123;
  target.vm_fn_124__createTokenRefreshScheduler = vm_fn_124__createTokenRefreshScheduler;
  entryMap[124] = vm_fn_124__createTokenRefreshScheduler;
  target.vm_fn_125__scheduleTokenRefresh = vm_fn_125__scheduleTokenRefresh;
  entryMap[125] = vm_fn_125__scheduleTokenRefresh;
  target.vm_fn_126__createTokenRefreshGenerator = vm_fn_126__createTokenRefreshGenerator;
  entryMap[126] = vm_fn_126__createTokenRefreshGenerator;
  target.vm_fn_127__runTokenRefreshGenerator = vm_fn_127__runTokenRefreshGenerator;
  entryMap[127] = vm_fn_127__runTokenRefreshGenerator;
  target.vm_fn_128__updateMsTokenFromRefreshResponse = vm_fn_128__updateMsTokenFromRefreshResponse;
  entryMap[128] = vm_fn_128__updateMsTokenFromRefreshResponse;
  target.vm_fn_129__applySdkConfig = vm_fn_129__applySdkConfig;
  entryMap[129] = vm_fn_129__applySdkConfig;
  target.vm_fn_130__installSafeHashWrapper = vm_fn_130__installSafeHashWrapper;
  entryMap[130] = vm_fn_130__installSafeHashWrapper;
  target.vm_fn_131__computeHashWithFallback = vm_fn_131__computeHashWithFallback;
  entryMap[131] = vm_fn_131__computeHashWithFallback;
  target.vm_fn_132__initializeFingerprintHelpers = vm_fn_132__initializeFingerprintHelpers;
  entryMap[132] = vm_fn_132__initializeFingerprintHelpers;
  target.vm_fn_133__toConsumableArray = vm_fn_133__toConsumableArray;
  entryMap[133] = vm_fn_133__toConsumableArray;
  target.vm_fn_134__throwInvalidSpreadError2 = vm_fn_134__throwInvalidSpreadError2;
  entryMap[134] = vm_fn_134__throwInvalidSpreadError2;
  target.vm_fn_135__unsupportedIterableToArray2 = vm_fn_135__unsupportedIterableToArray2;
  entryMap[135] = vm_fn_135__unsupportedIterableToArray2;
  target.vm_fn_136__iterableToArray2 = vm_fn_136__iterableToArray2;
  entryMap[136] = vm_fn_136__iterableToArray2;
  target.vm_fn_137__arrayWithoutHoles = vm_fn_137__arrayWithoutHoles;
  entryMap[137] = vm_fn_137__arrayWithoutHoles;
  target.vm_fn_138__arrayLikeToArray2 = vm_fn_138__arrayLikeToArray2;
  entryMap[138] = vm_fn_138__arrayLikeToArray2;
  target.vm_fn_139__stringToCharCodeArray = vm_fn_139__stringToCharCodeArray;
  entryMap[139] = vm_fn_139__stringToCharCodeArray;
  target.vm_fn_140__joinObjectValues = vm_fn_140__joinObjectValues;
  entryMap[140] = vm_fn_140__joinObjectValues;
  target.vm_fn_141__appendPipeDelimitedValue = vm_fn_141__appendPipeDelimitedValue;
  entryMap[141] = vm_fn_141__appendPipeDelimitedValue;
  target.vm_fn_142__encodeCharTriplet = vm_fn_142__encodeCharTriplet;
  entryMap[142] = vm_fn_142__encodeCharTriplet;
  target.vm_fn_143__getBrowserOffsetSeed = vm_fn_143__getBrowserOffsetSeed;
  entryMap[143] = vm_fn_143__getBrowserOffsetSeed;
  target.vm_fn_144__getCapabilityJitterByte = vm_fn_144__getCapabilityJitterByte;
  entryMap[144] = vm_fn_144__getCapabilityJitterByte;
  target.vm_fn_145__getMicrophonePermissionBits = vm_fn_145__getMicrophonePermissionBits;
  entryMap[145] = vm_fn_145__getMicrophonePermissionBits;
  target.vm_fn_146__mixFingerprintPair = vm_fn_146__mixFingerprintPair;
  entryMap[146] = vm_fn_146__mixFingerprintPair;
  target.vm_fn_147__expandFingerprintBlock = vm_fn_147__expandFingerprintBlock;
  entryMap[147] = vm_fn_147__expandFingerprintBlock;
  target.vm_fn_148__encodeFingerprintChunks = vm_fn_148__encodeFingerprintChunks;
  entryMap[148] = vm_fn_148__encodeFingerprintChunks;
  target.vm_fn_149__getIterationBucket = vm_fn_149__getIterationBucket;
  entryMap[149] = vm_fn_149__getIterationBucket;
  target.vm_fn_150__buildFingerprintPayload = vm_fn_150__buildFingerprintPayload;
  entryMap[150] = vm_fn_150__buildFingerprintPayload;
  target.vm_fn_151__toInt = vm_fn_151__toInt;
  entryMap[151] = vm_fn_151__toInt;
  target.vm_fn_152__seedFingerprintGlobals = vm_fn_152__seedFingerprintGlobals;
  entryMap[152] = vm_fn_152__seedFingerprintGlobals;
  target.vm_fn_153__lockFingerprintGlobals = vm_fn_153__lockFingerprintGlobals;
  entryMap[153] = vm_fn_153__lockFingerprintGlobals;
  target.vm_fn_154__seedVendorSubsInk = vm_fn_154__seedVendorSubsInk;
  entryMap[154] = vm_fn_154__seedVendorSubsInk;
  target.vm_fn_155__recordFingerprintTimestamp = vm_fn_155__recordFingerprintTimestamp;
  entryMap[155] = vm_fn_155__recordFingerprintTimestamp;
  target.vm_fn_156__installCodecHelpers = vm_fn_156__installCodecHelpers;
  entryMap[156] = vm_fn_156__installCodecHelpers;
  target.vm_fn_157__encodeWithAlphabet = vm_fn_157__encodeWithAlphabet;
  entryMap[157] = vm_fn_157__encodeWithAlphabet;
  target.vm_fn_158__encodeSignedPayload = vm_fn_158__encodeSignedPayload;
  entryMap[158] = vm_fn_158__encodeSignedPayload;
  target.vm_fn_159__initializeBehaviorBuffers = vm_fn_159__initializeBehaviorBuffers;
  entryMap[159] = vm_fn_159__initializeBehaviorBuffers;
  target.vm_fn_160__typeofHelper = vm_fn_160__typeofHelper;
  entryMap[160] = vm_fn_160__typeofHelper;
  target.vm_fn_161__baseTypeof2 = vm_fn_161__baseTypeof2;
  entryMap[161] = vm_fn_161__baseTypeof2;
  target.vm_fn_162__symbolAwareTypeof2 = vm_fn_162__symbolAwareTypeof2;
  entryMap[162] = vm_fn_162__symbolAwareTypeof2;
  target.vm_fn_163__defineEnumerableProperty = vm_fn_163__defineEnumerableProperty;
  entryMap[163] = vm_fn_163__defineEnumerableProperty;
  target.vm_fn_164__assertClassCall2 = vm_fn_164__assertClassCall2;
  entryMap[164] = vm_fn_164__assertClassCall2;
  target.vm_fn_165__defineProperties2 = vm_fn_165__defineProperties2;
  entryMap[165] = vm_fn_165__defineProperties2;
  target.vm_fn_166__createClass2 = vm_fn_166__createClass2;
  entryMap[166] = vm_fn_166__createClass2;
  target.vm_fn_167__toPropertyKey2 = vm_fn_167__toPropertyKey2;
  entryMap[167] = vm_fn_167__toPropertyKey2;
  target.vm_fn_168__toPrimitive2 = vm_fn_168__toPrimitive2;
  entryMap[168] = vm_fn_168__toPrimitive2;
  target.vm_fn_169 = vm_fn_169;
  entryMap[169] = vm_fn_169;
  target.vm_fn_170__createRingBufferClass = vm_fn_170__createRingBufferClass;
  entryMap[170] = vm_fn_170__createRingBufferClass;
  target.vm_fn_171__initializeRingBuffer = vm_fn_171__initializeRingBuffer;
  entryMap[171] = vm_fn_171__initializeRingBuffer;
  target.vm_fn_172__getRingBufferCapacity = vm_fn_172__getRingBufferCapacity;
  entryMap[172] = vm_fn_172__getRingBufferCapacity;
  target.vm_fn_173__isRingBufferEmpty = vm_fn_173__isRingBufferEmpty;
  entryMap[173] = vm_fn_173__isRingBufferEmpty;
  target.vm_fn_174__isRingBufferFull = vm_fn_174__isRingBufferFull;
  entryMap[174] = vm_fn_174__isRingBufferFull;
  target.vm_fn_175__getRingBufferLast = vm_fn_175__getRingBufferLast;
  entryMap[175] = vm_fn_175__getRingBufferLast;
  target.vm_fn_176__pushRingBuffer = vm_fn_176__pushRingBuffer;
  entryMap[176] = vm_fn_176__pushRingBuffer;
  target.vm_fn_177__popRingBuffer = vm_fn_177__popRingBuffer;
  entryMap[177] = vm_fn_177__popRingBuffer;
  target.vm_fn_178__getRingBufferData = vm_fn_178__getRingBufferData;
  entryMap[178] = vm_fn_178__getRingBufferData;
  target.vm_fn_179__getRingBufferTrigger = vm_fn_179__getRingBufferTrigger;
  entryMap[179] = vm_fn_179__getRingBufferTrigger;
  target.vm_fn_180__createMousePoint = vm_fn_180__createMousePoint;
  entryMap[180] = vm_fn_180__createMousePoint;
  target.vm_fn_181__createTouchPoint = vm_fn_181__createTouchPoint;
  entryMap[181] = vm_fn_181__createTouchPoint;
  target.vm_fn_182__pushDedupedBehaviorPoint = vm_fn_182__pushDedupedBehaviorPoint;
  entryMap[182] = vm_fn_182__pushDedupedBehaviorPoint;
  target.vm_fn_183__installBehaviorEventListeners = vm_fn_183__installBehaviorEventListeners;
  entryMap[183] = vm_fn_183__installBehaviorEventListeners;
  target.vm_fn_184__handleMouseMove = vm_fn_184__handleMouseMove;
  entryMap[184] = vm_fn_184__handleMouseMove;
  target.vm_fn_185__handleTouchMove = vm_fn_185__handleTouchMove;
  entryMap[185] = vm_fn_185__handleTouchMove;
  target.vm_fn_186__handleMouseDown = vm_fn_186__handleMouseDown;
  entryMap[186] = vm_fn_186__handleMouseDown;
  target.vm_fn_187__handleTouchStart = vm_fn_187__handleTouchStart;
  entryMap[187] = vm_fn_187__handleTouchStart;
  target.vm_fn_188__handleMouseUp = vm_fn_188__handleMouseUp;
  entryMap[188] = vm_fn_188__handleMouseUp;
  target.vm_fn_189__handleTouchEnd = vm_fn_189__handleTouchEnd;
  entryMap[189] = vm_fn_189__handleTouchEnd;
  target.vm_fn_190__handleKeydown = vm_fn_190__handleKeydown;
  entryMap[190] = vm_fn_190__handleKeydown;
  target.vm_fn_191__handleDeviceOrientation = vm_fn_191__handleDeviceOrientation;
  entryMap[191] = vm_fn_191__handleDeviceOrientation;
  target.vm_fn_192__handleVisibilityChange = vm_fn_192__handleVisibilityChange;
  entryMap[192] = vm_fn_192__handleVisibilityChange;
  target.vm_fn_193__computeMoveBehaviorFlags = vm_fn_193__computeMoveBehaviorFlags;
  entryMap[193] = vm_fn_193__computeMoveBehaviorFlags;
  target.vm_fn_194__accumulateMoveVelocity = vm_fn_194__accumulateMoveVelocity;
  entryMap[194] = vm_fn_194__accumulateMoveVelocity;
  target.vm_fn_195__computeClickStartMissingFlag = vm_fn_195__computeClickStartMissingFlag;
  entryMap[195] = vm_fn_195__computeClickStartMissingFlag;
  target.vm_fn_196__computeKeydownBehaviorFlags = vm_fn_196__computeKeydownBehaviorFlags;
  entryMap[196] = vm_fn_196__computeKeydownBehaviorFlags;
  target.vm_fn_197__accumulateKeydownRate = vm_fn_197__accumulateKeydownRate;
  entryMap[197] = vm_fn_197__accumulateKeydownRate;
  target.vm_fn_198__computeBehaviorAnomalyFlags = vm_fn_198__computeBehaviorAnomalyFlags;
  entryMap[198] = vm_fn_198__computeBehaviorAnomalyFlags;
  target.vm_fn_199 = vm_fn_199;
  entryMap[199] = vm_fn_199;
  target.vm_fn_200__typeofHelper10 = vm_fn_200__typeofHelper10;
  entryMap[200] = vm_fn_200__typeofHelper10;
  target.vm_fn_201__baseTypeof3 = vm_fn_201__baseTypeof3;
  entryMap[201] = vm_fn_201__baseTypeof3;
  target.vm_fn_202__symbolAwareTypeof3 = vm_fn_202__symbolAwareTypeof3;
  entryMap[202] = vm_fn_202__symbolAwareTypeof3;
  target.vm_fn_203__createRegeneratorRuntime2 = vm_fn_203__createRegeneratorRuntime2;
  entryMap[203] = vm_fn_203__createRegeneratorRuntime2;
  target.vm_fn_204 = vm_fn_204;
  entryMap[204] = vm_fn_204;
  target.vm_fn_205__definePropertyFallback2 = vm_fn_205__definePropertyFallback2;
  entryMap[205] = vm_fn_205__definePropertyFallback2;
  target.vm_fn_206__defineIteratorMethod2 = vm_fn_206__defineIteratorMethod2;
  entryMap[206] = vm_fn_206__defineIteratorMethod2;
  target.vm_fn_207 = vm_fn_207;
  entryMap[207] = vm_fn_207;
  target.vm_fn_208__wrapGeneratorFunction2 = vm_fn_208__wrapGeneratorFunction2;
  entryMap[208] = vm_fn_208__wrapGeneratorFunction2;
  target.vm_fn_209 = vm_fn_209;
  entryMap[209] = vm_fn_209;
  target.vm_fn_210 = vm_fn_210;
  entryMap[210] = vm_fn_210;
  target.vm_fn_211 = vm_fn_211;
  entryMap[211] = vm_fn_211;
  target.vm_fn_212 = vm_fn_212;
  entryMap[212] = vm_fn_212;
  target.vm_fn_213__returnThis4 = vm_fn_213__returnThis4;
  entryMap[213] = vm_fn_213__returnThis4;
  target.vm_fn_214__defineIteratorMethods2 = vm_fn_214__defineIteratorMethods2;
  entryMap[214] = vm_fn_214__defineIteratorMethods2;
  target.vm_fn_215__defineIteratorMethod8 = vm_fn_215__defineIteratorMethod8;
  entryMap[215] = vm_fn_215__defineIteratorMethod8;
  target.vm_fn_216__invokeIteratorMethod2 = vm_fn_216__invokeIteratorMethod2;
  entryMap[216] = vm_fn_216__invokeIteratorMethod2;
  target.vm_fn_217__setupAsyncIterator2 = vm_fn_217__setupAsyncIterator2;
  entryMap[217] = vm_fn_217__setupAsyncIterator2;
  target.vm_fn_218__resumeAsyncIteratorStep2 = vm_fn_218__resumeAsyncIteratorStep2;
  entryMap[218] = vm_fn_218__resumeAsyncIteratorStep2;
  target.vm_fn_219__resumeAsyncIteratorNext2 = vm_fn_219__resumeAsyncIteratorNext2;
  entryMap[219] = vm_fn_219__resumeAsyncIteratorNext2;
  target.vm_fn_220__resumeAsyncIteratorThrow3 = vm_fn_220__resumeAsyncIteratorThrow3;
  entryMap[220] = vm_fn_220__resumeAsyncIteratorThrow3;
  target.vm_fn_221__resolveAsyncIteratorValue2 = vm_fn_221__resolveAsyncIteratorValue2;
  entryMap[221] = vm_fn_221__resolveAsyncIteratorValue2;
  target.vm_fn_222__resumeAsyncIteratorThrow4 = vm_fn_222__resumeAsyncIteratorThrow4;
  entryMap[222] = vm_fn_222__resumeAsyncIteratorThrow4;
  target.vm_fn_223__enqueueAsyncIteratorStep2 = vm_fn_223__enqueueAsyncIteratorStep2;
  entryMap[223] = vm_fn_223__enqueueAsyncIteratorStep2;
  target.vm_fn_224__createAsyncIteratorPromise2 = vm_fn_224__createAsyncIteratorPromise2;
  entryMap[224] = vm_fn_224__createAsyncIteratorPromise2;
  target.vm_fn_225__executeAsyncIteratorStep2 = vm_fn_225__executeAsyncIteratorStep2;
  entryMap[225] = vm_fn_225__executeAsyncIteratorStep2;
  target.vm_fn_226__createInvokeMethod2 = vm_fn_226__createInvokeMethod2;
  entryMap[226] = vm_fn_226__createInvokeMethod2;
  target.vm_fn_227__invokeGeneratorMethod2 = vm_fn_227__invokeGeneratorMethod2;
  entryMap[227] = vm_fn_227__invokeGeneratorMethod2;
  target.vm_fn_228__maybeInvokeDelegate2 = vm_fn_228__maybeInvokeDelegate2;
  entryMap[228] = vm_fn_228__maybeInvokeDelegate2;
  target.vm_fn_229__pushTryEntry2 = vm_fn_229__pushTryEntry2;
  entryMap[229] = vm_fn_229__pushTryEntry2;
  target.vm_fn_230__resetCompletionRecord2 = vm_fn_230__resetCompletionRecord2;
  entryMap[230] = vm_fn_230__resetCompletionRecord2;
  target.vm_fn_231__resetTryEntryContext2 = vm_fn_231__resetTryEntryContext2;
  entryMap[231] = vm_fn_231__resetTryEntryContext2;
  target.vm_fn_232__getIterator2 = vm_fn_232__getIterator2;
  entryMap[232] = vm_fn_232__getIterator2;
  target.vm_fn_233__nextArrayLikeIterator2 = vm_fn_233__nextArrayLikeIterator2;
  entryMap[233] = vm_fn_233__nextArrayLikeIterator2;
  target.vm_fn_234__isGeneratorFunction2 = vm_fn_234__isGeneratorFunction2;
  entryMap[234] = vm_fn_234__isGeneratorFunction2;
  target.vm_fn_235__markGeneratorFunction2 = vm_fn_235__markGeneratorFunction2;
  entryMap[235] = vm_fn_235__markGeneratorFunction2;
  target.vm_fn_236__wrapAwaitValue2 = vm_fn_236__wrapAwaitValue2;
  entryMap[236] = vm_fn_236__wrapAwaitValue2;
  target.vm_fn_237__returnThis5 = vm_fn_237__returnThis5;
  entryMap[237] = vm_fn_237__returnThis5;
  target.vm_fn_238__createAsyncFunctionWrapper2 = vm_fn_238__createAsyncFunctionWrapper2;
  entryMap[238] = vm_fn_238__createAsyncFunctionWrapper2;
  target.vm_fn_239__handleAsyncIteratorResult2 = vm_fn_239__handleAsyncIteratorResult2;
  entryMap[239] = vm_fn_239__handleAsyncIteratorResult2;
  target.vm_fn_240__returnThis6 = vm_fn_240__returnThis6;
  entryMap[240] = vm_fn_240__returnThis6;
  target.vm_fn_241__getGeneratorTag2 = vm_fn_241__getGeneratorTag2;
  entryMap[241] = vm_fn_241__getGeneratorTag2;
  target.vm_fn_242 = vm_fn_242;
  entryMap[242] = vm_fn_242;
  target.vm_fn_243__nextObjectKeyIterator2 = vm_fn_243__nextObjectKeyIterator2;
  entryMap[243] = vm_fn_243__nextObjectKeyIterator2;
  target.vm_fn_244__resetGeneratorContext2 = vm_fn_244__resetGeneratorContext2;
  entryMap[244] = vm_fn_244__resetGeneratorContext2;
  target.vm_fn_245__stopGeneratorContext2 = vm_fn_245__stopGeneratorContext2;
  entryMap[245] = vm_fn_245__stopGeneratorContext2;
  target.vm_fn_246__dispatchException2 = vm_fn_246__dispatchException2;
  entryMap[246] = vm_fn_246__dispatchException2;
  target.vm_fn_247__handleExceptionEntry2 = vm_fn_247__handleExceptionEntry2;
  entryMap[247] = vm_fn_247__handleExceptionEntry2;
  target.vm_fn_248__abrupt2 = vm_fn_248__abrupt2;
  entryMap[248] = vm_fn_248__abrupt2;
  target.vm_fn_249__complete2 = vm_fn_249__complete2;
  entryMap[249] = vm_fn_249__complete2;
  target.vm_fn_250__finishFinallyEntry2 = vm_fn_250__finishFinallyEntry2;
  entryMap[250] = vm_fn_250__finishFinallyEntry2;
  target.vm_fn_251__catchTryEntry2 = vm_fn_251__catchTryEntry2;
  entryMap[251] = vm_fn_251__catchTryEntry2;
  target.vm_fn_252__delegateYield2 = vm_fn_252__delegateYield2;
  entryMap[252] = vm_fn_252__delegateYield2;
  target.vm_fn_253__ownKeys = vm_fn_253__ownKeys;
  entryMap[253] = vm_fn_253__ownKeys;
  target.vm_fn_254__isEnumerableProperty = vm_fn_254__isEnumerableProperty;
  entryMap[254] = vm_fn_254__isEnumerableProperty;
  target.vm_fn_255__objectSpread2 = vm_fn_255__objectSpread2;
  entryMap[255] = vm_fn_255__objectSpread2;
  target.vm_fn_256__copyPropertyValue = vm_fn_256__copyPropertyValue;
  entryMap[256] = vm_fn_256__copyPropertyValue;
  target.vm_fn_257__copyPropertyDescriptor = vm_fn_257__copyPropertyDescriptor;
  entryMap[257] = vm_fn_257__copyPropertyDescriptor;
  target.vm_fn_258__defineEnumerableProperty2 = vm_fn_258__defineEnumerableProperty2;
  entryMap[258] = vm_fn_258__defineEnumerableProperty2;
  target.vm_fn_259__toPropertyKey3 = vm_fn_259__toPropertyKey3;
  entryMap[259] = vm_fn_259__toPropertyKey3;
  target.vm_fn_260__toPrimitive3 = vm_fn_260__toPrimitive3;
  entryMap[260] = vm_fn_260__toPrimitive3;
  target.vm_fn_261__asyncGeneratorStep2 = vm_fn_261__asyncGeneratorStep2;
  entryMap[261] = vm_fn_261__asyncGeneratorStep2;
  target.vm_fn_262__asyncToGenerator2 = vm_fn_262__asyncToGenerator2;
  entryMap[262] = vm_fn_262__asyncToGenerator2;
  target.vm_fn_263__asyncToGeneratorWrapper2 = vm_fn_263__asyncToGeneratorWrapper2;
  entryMap[263] = vm_fn_263__asyncToGeneratorWrapper2;
  target.vm_fn_264__runAsyncToGeneratorExecutor2 = vm_fn_264__runAsyncToGeneratorExecutor2;
  entryMap[264] = vm_fn_264__runAsyncToGeneratorExecutor2;
  target.vm_fn_265__asyncToGeneratorNext2 = vm_fn_265__asyncToGeneratorNext2;
  entryMap[265] = vm_fn_265__asyncToGeneratorNext2;
  target.vm_fn_266__asyncToGeneratorThrow2 = vm_fn_266__asyncToGeneratorThrow2;
  entryMap[266] = vm_fn_266__asyncToGeneratorThrow2;
  target.vm_fn_267__invokeNwidCollectorAsync2 = vm_fn_267__invokeNwidCollectorAsync2;
  entryMap[267] = vm_fn_267__invokeNwidCollectorAsync2;
  target.vm_fn_268__invokeNwidCollectorAsync = vm_fn_268__invokeNwidCollectorAsync;
  entryMap[268] = vm_fn_268__invokeNwidCollectorAsync;
  target.vm_fn_269__createNwidCollectorGenerator = vm_fn_269__createNwidCollectorGenerator;
  entryMap[269] = vm_fn_269__createNwidCollectorGenerator;
  target.vm_fn_270__collectNwidPayload = vm_fn_270__collectNwidPayload;
  entryMap[270] = vm_fn_270__collectNwidPayload;
  target.vm_fn_271__invokeWidCollectorAsync2 = vm_fn_271__invokeWidCollectorAsync2;
  entryMap[271] = vm_fn_271__invokeWidCollectorAsync2;
  target.vm_fn_272__invokeWidCollectorAsync = vm_fn_272__invokeWidCollectorAsync;
  entryMap[272] = vm_fn_272__invokeWidCollectorAsync;
  target.vm_fn_273__createWidCollectorGenerator = vm_fn_273__createWidCollectorGenerator;
  entryMap[273] = vm_fn_273__createWidCollectorGenerator;
  target.vm_fn_274__collectWidPayload = vm_fn_274__collectWidPayload;
  entryMap[274] = vm_fn_274__collectWidPayload;
  target.vm_fn_275__installRc4Transforms = vm_fn_275__installRc4Transforms;
  entryMap[275] = vm_fn_275__installRc4Transforms;
  target.vm_fn_276__transformWithRc4 = vm_fn_276__transformWithRc4;
  entryMap[276] = vm_fn_276__transformWithRc4;
  target.vm_fn_277__transformWithRc4Variant = vm_fn_277__transformWithRc4Variant;
  entryMap[277] = vm_fn_277__transformWithRc4Variant;
  target.vm_fn_278__initializeBehaviorAnalyzer = vm_fn_278__initializeBehaviorAnalyzer;
  entryMap[278] = vm_fn_278__initializeBehaviorAnalyzer;
  target.vm_fn_279__computeStdDev = vm_fn_279__computeStdDev;
  entryMap[279] = vm_fn_279__computeStdDev;
  target.vm_fn_280__subtractMean = vm_fn_280__subtractMean;
  entryMap[280] = vm_fn_280__subtractMean;
  target.vm_fn_281__square = vm_fn_281__square;
  entryMap[281] = vm_fn_281__square;
  target.vm_fn_282__sum = vm_fn_282__sum;
  entryMap[282] = vm_fn_282__sum;
  target.vm_fn_283__computeAverage = vm_fn_283__computeAverage;
  entryMap[283] = vm_fn_283__computeAverage;
  target.vm_fn_284__computeBehaviorRateStats = vm_fn_284__computeBehaviorRateStats;
  entryMap[284] = vm_fn_284__computeBehaviorRateStats;
  target.vm_fn_285__computeUbCode = vm_fn_285__computeUbCode;
  entryMap[285] = vm_fn_285__computeUbCode;
  target.vm_fn_286__createBrowserDetector = vm_fn_286__createBrowserDetector;
  entryMap[286] = vm_fn_286__createBrowserDetector;
  target.vm_fn_287__createForOfIteratorHelper4 = vm_fn_287__createForOfIteratorHelper4;
  entryMap[287] = vm_fn_287__createForOfIteratorHelper4;
  target.vm_fn_288 = vm_fn_288;
  entryMap[288] = vm_fn_288;
  target.vm_fn_289__nextArrayIteratorValue = vm_fn_289__nextArrayIteratorValue;
  entryMap[289] = vm_fn_289__nextArrayIteratorValue;
  target.vm_fn_290__throwIteratorError = vm_fn_290__throwIteratorError;
  entryMap[290] = vm_fn_290__throwIteratorError;
  target.vm_fn_291__startIterableIterator = vm_fn_291__startIterableIterator;
  entryMap[291] = vm_fn_291__startIterableIterator;
  target.vm_fn_292__nextIterableIteratorValue4 = vm_fn_292__nextIterableIteratorValue4;
  entryMap[292] = vm_fn_292__nextIterableIteratorValue4;
  target.vm_fn_293__captureIteratorError4 = vm_fn_293__captureIteratorError4;
  entryMap[293] = vm_fn_293__captureIteratorError4;
  target.vm_fn_294 = vm_fn_294;
  entryMap[294] = vm_fn_294;
  target.vm_fn_295__unsupportedIterableToArray3 = vm_fn_295__unsupportedIterableToArray3;
  entryMap[295] = vm_fn_295__unsupportedIterableToArray3;
  target.vm_fn_296__arrayLikeToArray3 = vm_fn_296__arrayLikeToArray3;
  entryMap[296] = vm_fn_296__arrayLikeToArray3;
  target.vm_fn_297__detectBrowserProfile = vm_fn_297__detectBrowserProfile;
  entryMap[297] = vm_fn_297__detectBrowserProfile;
  target.vm_fn_298__isHuawei = vm_fn_298__isHuawei;
  entryMap[298] = vm_fn_298__isHuawei;
  target.vm_fn_299__isOpera = vm_fn_299__isOpera;
  entryMap[299] = vm_fn_299__isOpera;
  target.vm_fn_300__isFirefox = vm_fn_300__isFirefox;
  entryMap[300] = vm_fn_300__isFirefox;
  target.vm_fn_301__isEdge = vm_fn_301__isEdge;
  entryMap[301] = vm_fn_301__isEdge;
  target.vm_fn_302__isIE = vm_fn_302__isIE;
  entryMap[302] = vm_fn_302__isIE;
  target.vm_fn_303__isChrome = vm_fn_303__isChrome;
  entryMap[303] = vm_fn_303__isChrome;
  target.vm_fn_304__isSafari = vm_fn_304__isSafari;
  entryMap[304] = vm_fn_304__isSafari;
  target.vm_fn_305__isOther = vm_fn_305__isOther;
  entryMap[305] = vm_fn_305__isOther;
  target.vm_fn_306__matchesCurrentPattern4 = vm_fn_306__matchesCurrentPattern4;
  entryMap[306] = vm_fn_306__matchesCurrentPattern4;
  target.vm_fn_307 = vm_fn_307;
  entryMap[307] = vm_fn_307;
  target.vm_fn_308__slicedToArray4 = vm_fn_308__slicedToArray4;
  entryMap[308] = vm_fn_308__slicedToArray4;
  target.vm_fn_309__nonIterableRest4 = vm_fn_309__nonIterableRest4;
  entryMap[309] = vm_fn_309__nonIterableRest4;
  target.vm_fn_310__unsupportedIterableToArray4 = vm_fn_310__unsupportedIterableToArray4;
  entryMap[310] = vm_fn_310__unsupportedIterableToArray4;
  target.vm_fn_311__arrayLikeToArray4 = vm_fn_311__arrayLikeToArray4;
  entryMap[311] = vm_fn_311__arrayLikeToArray4;
  target.vm_fn_312__iterableToArrayLimit4 = vm_fn_312__iterableToArrayLimit4;
  entryMap[312] = vm_fn_312__iterableToArrayLimit4;
  target.vm_fn_313__arrayWithHoles4 = vm_fn_313__arrayWithHoles4;
  entryMap[313] = vm_fn_313__arrayWithHoles4;
  target.vm_fn_314__collectBrowserCapabilityTuple = vm_fn_314__collectBrowserCapabilityTuple;
  entryMap[314] = vm_fn_314__collectBrowserCapabilityTuple;
  target.vm_fn_315__installBrowserCapabilityMask = vm_fn_315__installBrowserCapabilityMask;
  entryMap[315] = vm_fn_315__installBrowserCapabilityMask;
  target.vm_fn_316__computeBrowserCapabilityMask = vm_fn_316__computeBrowserCapabilityMask;
  entryMap[316] = vm_fn_316__computeBrowserCapabilityMask;
  target.vm_fn_317__installBrowserProbeHelpers = vm_fn_317__installBrowserProbeHelpers;
  entryMap[317] = vm_fn_317__installBrowserProbeHelpers;
  target.vm_fn_318__computeHashWithFallback2 = vm_fn_318__computeHashWithFallback2;
  entryMap[318] = vm_fn_318__computeHashWithFallback2;
  target.vm_fn_319__isInternetExplorerDocumentMode = vm_fn_319__isInternetExplorerDocumentMode;
  entryMap[319] = vm_fn_319__isInternetExplorerDocumentMode;
  target.vm_fn_320__isFirefoxInstallTrigger = vm_fn_320__isFirefoxInstallTrigger;
  entryMap[320] = vm_fn_320__isFirefoxInstallTrigger;
  target.vm_fn_321__isSafariNotificationApi = vm_fn_321__isSafariNotificationApi;
  entryMap[321] = vm_fn_321__isSafariNotificationApi;
  target.vm_fn_322__isSafariRemoteNotification = vm_fn_322__isSafariRemoteNotification;
  entryMap[322] = vm_fn_322__isSafariRemoteNotification;
  target.vm_fn_323__initializeAsyncRuntimeHelpers3 = vm_fn_323__initializeAsyncRuntimeHelpers3;
  entryMap[323] = vm_fn_323__initializeAsyncRuntimeHelpers3;
  target.vm_fn_324__typeofHelper102 = vm_fn_324__typeofHelper102;
  entryMap[324] = vm_fn_324__typeofHelper102;
  target.vm_fn_325__baseTypeof4 = vm_fn_325__baseTypeof4;
  entryMap[325] = vm_fn_325__baseTypeof4;
  target.vm_fn_326__symbolAwareTypeof4 = vm_fn_326__symbolAwareTypeof4;
  entryMap[326] = vm_fn_326__symbolAwareTypeof4;
  target.vm_fn_327__createRegeneratorRuntime3 = vm_fn_327__createRegeneratorRuntime3;
  entryMap[327] = vm_fn_327__createRegeneratorRuntime3;
  target.vm_fn_328 = vm_fn_328;
  entryMap[328] = vm_fn_328;
  target.vm_fn_329__definePropertyFallback3 = vm_fn_329__definePropertyFallback3;
  entryMap[329] = vm_fn_329__definePropertyFallback3;
  target.vm_fn_330__defineIteratorMethod3 = vm_fn_330__defineIteratorMethod3;
  entryMap[330] = vm_fn_330__defineIteratorMethod3;
  target.vm_fn_331 = vm_fn_331;
  entryMap[331] = vm_fn_331;
  target.vm_fn_332__wrapGeneratorFunction3 = vm_fn_332__wrapGeneratorFunction3;
  entryMap[332] = vm_fn_332__wrapGeneratorFunction3;
  target.vm_fn_333 = vm_fn_333;
  entryMap[333] = vm_fn_333;
  target.vm_fn_334 = vm_fn_334;
  entryMap[334] = vm_fn_334;
  target.vm_fn_335 = vm_fn_335;
  entryMap[335] = vm_fn_335;
  target.vm_fn_336 = vm_fn_336;
  entryMap[336] = vm_fn_336;
  target.vm_fn_337__returnThis7 = vm_fn_337__returnThis7;
  entryMap[337] = vm_fn_337__returnThis7;
  target.vm_fn_338 = vm_fn_338;
  entryMap[338] = vm_fn_338;
  target.vm_fn_339 = vm_fn_339;
  entryMap[339] = vm_fn_339;
  target.vm_fn_340__invokeIteratorMethod3 = vm_fn_340__invokeIteratorMethod3;
  entryMap[340] = vm_fn_340__invokeIteratorMethod3;
  target.vm_fn_341 = vm_fn_341;
  entryMap[341] = vm_fn_341;
  target.vm_fn_342 = vm_fn_342;
  entryMap[342] = vm_fn_342;
  target.vm_fn_343__resumeAsyncIteratorNext3 = vm_fn_343__resumeAsyncIteratorNext3;
  entryMap[343] = vm_fn_343__resumeAsyncIteratorNext3;
  target.vm_fn_344__resumeAsyncIteratorThrow5 = vm_fn_344__resumeAsyncIteratorThrow5;
  entryMap[344] = vm_fn_344__resumeAsyncIteratorThrow5;
  target.vm_fn_345__resolveAsyncIteratorValue3 = vm_fn_345__resolveAsyncIteratorValue3;
  entryMap[345] = vm_fn_345__resolveAsyncIteratorValue3;
  target.vm_fn_346__resumeAsyncIteratorThrow6 = vm_fn_346__resumeAsyncIteratorThrow6;
  entryMap[346] = vm_fn_346__resumeAsyncIteratorThrow6;
  target.vm_fn_347__enqueueAsyncIteratorStep3 = vm_fn_347__enqueueAsyncIteratorStep3;
  entryMap[347] = vm_fn_347__enqueueAsyncIteratorStep3;
  target.vm_fn_348 = vm_fn_348;
  entryMap[348] = vm_fn_348;
  target.vm_fn_349__executeAsyncIteratorStep3 = vm_fn_349__executeAsyncIteratorStep3;
  entryMap[349] = vm_fn_349__executeAsyncIteratorStep3;
  target.vm_fn_350 = vm_fn_350;
  entryMap[350] = vm_fn_350;
  target.vm_fn_351__invokeGeneratorMethod3 = vm_fn_351__invokeGeneratorMethod3;
  entryMap[351] = vm_fn_351__invokeGeneratorMethod3;
  target.vm_fn_352__maybeInvokeDelegate3 = vm_fn_352__maybeInvokeDelegate3;
  entryMap[352] = vm_fn_352__maybeInvokeDelegate3;
  target.vm_fn_353__pushTryEntry3 = vm_fn_353__pushTryEntry3;
  entryMap[353] = vm_fn_353__pushTryEntry3;
  target.vm_fn_354__resetCompletionRecord3 = vm_fn_354__resetCompletionRecord3;
  entryMap[354] = vm_fn_354__resetCompletionRecord3;
  target.vm_fn_355__resetTryEntryContext3 = vm_fn_355__resetTryEntryContext3;
  entryMap[355] = vm_fn_355__resetTryEntryContext3;
  target.vm_fn_356__getIterator3 = vm_fn_356__getIterator3;
  entryMap[356] = vm_fn_356__getIterator3;
  target.vm_fn_357__nextArrayLikeIterator3 = vm_fn_357__nextArrayLikeIterator3;
  entryMap[357] = vm_fn_357__nextArrayLikeIterator3;
  target.vm_fn_358__isGeneratorFunction3 = vm_fn_358__isGeneratorFunction3;
  entryMap[358] = vm_fn_358__isGeneratorFunction3;
  target.vm_fn_359__markGeneratorFunction3 = vm_fn_359__markGeneratorFunction3;
  entryMap[359] = vm_fn_359__markGeneratorFunction3;
  target.vm_fn_360__wrapAwaitValue3 = vm_fn_360__wrapAwaitValue3;
  entryMap[360] = vm_fn_360__wrapAwaitValue3;
  target.vm_fn_361__returnThis8 = vm_fn_361__returnThis8;
  entryMap[361] = vm_fn_361__returnThis8;
  target.vm_fn_362__createAsyncFunctionWrapper3 = vm_fn_362__createAsyncFunctionWrapper3;
  entryMap[362] = vm_fn_362__createAsyncFunctionWrapper3;
  target.vm_fn_363__handleAsyncIteratorResult3 = vm_fn_363__handleAsyncIteratorResult3;
  entryMap[363] = vm_fn_363__handleAsyncIteratorResult3;
  target.vm_fn_364__returnThis9 = vm_fn_364__returnThis9;
  entryMap[364] = vm_fn_364__returnThis9;
  target.vm_fn_365__getGeneratorTag3 = vm_fn_365__getGeneratorTag3;
  entryMap[365] = vm_fn_365__getGeneratorTag3;
  target.vm_fn_366 = vm_fn_366;
  entryMap[366] = vm_fn_366;
  target.vm_fn_367__nextObjectKeyIterator3 = vm_fn_367__nextObjectKeyIterator3;
  entryMap[367] = vm_fn_367__nextObjectKeyIterator3;
  target.vm_fn_368__resetGeneratorContext3 = vm_fn_368__resetGeneratorContext3;
  entryMap[368] = vm_fn_368__resetGeneratorContext3;
  target.vm_fn_369__stopGeneratorContext3 = vm_fn_369__stopGeneratorContext3;
  entryMap[369] = vm_fn_369__stopGeneratorContext3;
  target.vm_fn_370__dispatchException3 = vm_fn_370__dispatchException3;
  entryMap[370] = vm_fn_370__dispatchException3;
  target.vm_fn_371__handleExceptionEntry3 = vm_fn_371__handleExceptionEntry3;
  entryMap[371] = vm_fn_371__handleExceptionEntry3;
  target.vm_fn_372__abrupt3 = vm_fn_372__abrupt3;
  entryMap[372] = vm_fn_372__abrupt3;
  target.vm_fn_373__complete3 = vm_fn_373__complete3;
  entryMap[373] = vm_fn_373__complete3;
  target.vm_fn_374__finishFinallyEntry3 = vm_fn_374__finishFinallyEntry3;
  entryMap[374] = vm_fn_374__finishFinallyEntry3;
  target.vm_fn_375__catchTryEntry3 = vm_fn_375__catchTryEntry3;
  entryMap[375] = vm_fn_375__catchTryEntry3;
  target.vm_fn_376__delegateYield3 = vm_fn_376__delegateYield3;
  entryMap[376] = vm_fn_376__delegateYield3;
  target.vm_fn_377__asyncGeneratorStep3 = vm_fn_377__asyncGeneratorStep3;
  entryMap[377] = vm_fn_377__asyncGeneratorStep3;
  target.vm_fn_378__asyncToGenerator3 = vm_fn_378__asyncToGenerator3;
  entryMap[378] = vm_fn_378__asyncToGenerator3;
  target.vm_fn_379__asyncToGeneratorWrapper3 = vm_fn_379__asyncToGeneratorWrapper3;
  entryMap[379] = vm_fn_379__asyncToGeneratorWrapper3;
  target.vm_fn_380__runAsyncToGeneratorExecutor3 = vm_fn_380__runAsyncToGeneratorExecutor3;
  entryMap[380] = vm_fn_380__runAsyncToGeneratorExecutor3;
  target.vm_fn_381__asyncToGeneratorNext3 = vm_fn_381__asyncToGeneratorNext3;
  entryMap[381] = vm_fn_381__asyncToGeneratorNext3;
  target.vm_fn_382__asyncToGeneratorThrow3 = vm_fn_382__asyncToGeneratorThrow3;
  entryMap[382] = vm_fn_382__asyncToGeneratorThrow3;
  target.vm_fn_383__invokeBatteryInfoAsync = vm_fn_383__invokeBatteryInfoAsync;
  entryMap[383] = vm_fn_383__invokeBatteryInfoAsync;
  target.vm_fn_384__createBatteryInfoAsync = vm_fn_384__createBatteryInfoAsync;
  entryMap[384] = vm_fn_384__createBatteryInfoAsync;
  target.vm_fn_385__createBatteryInfoGenerator = vm_fn_385__createBatteryInfoGenerator;
  entryMap[385] = vm_fn_385__createBatteryInfoGenerator;
  target.vm_fn_386__collectBatteryInfo = vm_fn_386__collectBatteryInfo;
  entryMap[386] = vm_fn_386__collectBatteryInfo;
  target.vm_fn_387__initializeAudioFingerprintHelpers = vm_fn_387__initializeAudioFingerprintHelpers;
  entryMap[387] = vm_fn_387__initializeAudioFingerprintHelpers;
  target.vm_fn_388__typeofHelper103 = vm_fn_388__typeofHelper103;
  entryMap[388] = vm_fn_388__typeofHelper103;
  target.vm_fn_389__baseTypeof5 = vm_fn_389__baseTypeof5;
  entryMap[389] = vm_fn_389__baseTypeof5;
  target.vm_fn_390__symbolAwareTypeof5 = vm_fn_390__symbolAwareTypeof5;
  entryMap[390] = vm_fn_390__symbolAwareTypeof5;
  target.vm_fn_391__createRegeneratorRuntime4 = vm_fn_391__createRegeneratorRuntime4;
  entryMap[391] = vm_fn_391__createRegeneratorRuntime4;
  target.vm_fn_392 = vm_fn_392;
  entryMap[392] = vm_fn_392;
  target.vm_fn_393__definePropertyFallback4 = vm_fn_393__definePropertyFallback4;
  entryMap[393] = vm_fn_393__definePropertyFallback4;
  target.vm_fn_394__defineIteratorMethod4 = vm_fn_394__defineIteratorMethod4;
  entryMap[394] = vm_fn_394__defineIteratorMethod4;
  target.vm_fn_395 = vm_fn_395;
  entryMap[395] = vm_fn_395;
  target.vm_fn_396__wrapGeneratorFunction4 = vm_fn_396__wrapGeneratorFunction4;
  entryMap[396] = vm_fn_396__wrapGeneratorFunction4;
  target.vm_fn_397 = vm_fn_397;
  entryMap[397] = vm_fn_397;
  target.vm_fn_398 = vm_fn_398;
  entryMap[398] = vm_fn_398;
  target.vm_fn_399 = vm_fn_399;
  entryMap[399] = vm_fn_399;
  target.vm_fn_400 = vm_fn_400;
  entryMap[400] = vm_fn_400;
  target.vm_fn_401__returnThis10 = vm_fn_401__returnThis10;
  entryMap[401] = vm_fn_401__returnThis10;
  target.vm_fn_402 = vm_fn_402;
  entryMap[402] = vm_fn_402;
  target.vm_fn_403 = vm_fn_403;
  entryMap[403] = vm_fn_403;
  target.vm_fn_404__invokeIteratorMethod4 = vm_fn_404__invokeIteratorMethod4;
  entryMap[404] = vm_fn_404__invokeIteratorMethod4;
  target.vm_fn_405 = vm_fn_405;
  entryMap[405] = vm_fn_405;
  target.vm_fn_406 = vm_fn_406;
  entryMap[406] = vm_fn_406;
  target.vm_fn_407__resumeAsyncIteratorNext4 = vm_fn_407__resumeAsyncIteratorNext4;
  entryMap[407] = vm_fn_407__resumeAsyncIteratorNext4;
  target.vm_fn_408__resumeAsyncIteratorThrow7 = vm_fn_408__resumeAsyncIteratorThrow7;
  entryMap[408] = vm_fn_408__resumeAsyncIteratorThrow7;
  target.vm_fn_409__resolveAsyncIteratorValue4 = vm_fn_409__resolveAsyncIteratorValue4;
  entryMap[409] = vm_fn_409__resolveAsyncIteratorValue4;
  target.vm_fn_410__resumeAsyncIteratorThrow8 = vm_fn_410__resumeAsyncIteratorThrow8;
  entryMap[410] = vm_fn_410__resumeAsyncIteratorThrow8;
  target.vm_fn_411__enqueueAsyncIteratorStep4 = vm_fn_411__enqueueAsyncIteratorStep4;
  entryMap[411] = vm_fn_411__enqueueAsyncIteratorStep4;
  target.vm_fn_412 = vm_fn_412;
  entryMap[412] = vm_fn_412;
  target.vm_fn_413__executeAsyncIteratorStep4 = vm_fn_413__executeAsyncIteratorStep4;
  entryMap[413] = vm_fn_413__executeAsyncIteratorStep4;
  target.vm_fn_414 = vm_fn_414;
  entryMap[414] = vm_fn_414;
  target.vm_fn_415__invokeGeneratorMethod4 = vm_fn_415__invokeGeneratorMethod4;
  entryMap[415] = vm_fn_415__invokeGeneratorMethod4;
  target.vm_fn_416__maybeInvokeDelegate4 = vm_fn_416__maybeInvokeDelegate4;
  entryMap[416] = vm_fn_416__maybeInvokeDelegate4;
  target.vm_fn_417__pushTryEntry4 = vm_fn_417__pushTryEntry4;
  entryMap[417] = vm_fn_417__pushTryEntry4;
  target.vm_fn_418__resetCompletionRecord4 = vm_fn_418__resetCompletionRecord4;
  entryMap[418] = vm_fn_418__resetCompletionRecord4;
  target.vm_fn_419__resetTryEntryContext4 = vm_fn_419__resetTryEntryContext4;
  entryMap[419] = vm_fn_419__resetTryEntryContext4;
  target.vm_fn_420__getIterator4 = vm_fn_420__getIterator4;
  entryMap[420] = vm_fn_420__getIterator4;
  target.vm_fn_421__nextArrayLikeIterator4 = vm_fn_421__nextArrayLikeIterator4;
  entryMap[421] = vm_fn_421__nextArrayLikeIterator4;
  target.vm_fn_422__isGeneratorFunction4 = vm_fn_422__isGeneratorFunction4;
  entryMap[422] = vm_fn_422__isGeneratorFunction4;
  target.vm_fn_423__markGeneratorFunction4 = vm_fn_423__markGeneratorFunction4;
  entryMap[423] = vm_fn_423__markGeneratorFunction4;
  target.vm_fn_424__wrapAwaitValue4 = vm_fn_424__wrapAwaitValue4;
  entryMap[424] = vm_fn_424__wrapAwaitValue4;
  target.vm_fn_425__returnThis11 = vm_fn_425__returnThis11;
  entryMap[425] = vm_fn_425__returnThis11;
  target.vm_fn_426__createAsyncFunctionWrapper4 = vm_fn_426__createAsyncFunctionWrapper4;
  entryMap[426] = vm_fn_426__createAsyncFunctionWrapper4;
  target.vm_fn_427__handleAsyncIteratorResult4 = vm_fn_427__handleAsyncIteratorResult4;
  entryMap[427] = vm_fn_427__handleAsyncIteratorResult4;
  target.vm_fn_428__returnThis12 = vm_fn_428__returnThis12;
  entryMap[428] = vm_fn_428__returnThis12;
  target.vm_fn_429__getGeneratorTag4 = vm_fn_429__getGeneratorTag4;
  entryMap[429] = vm_fn_429__getGeneratorTag4;
  target.vm_fn_430 = vm_fn_430;
  entryMap[430] = vm_fn_430;
  target.vm_fn_431__nextObjectKeyIterator4 = vm_fn_431__nextObjectKeyIterator4;
  entryMap[431] = vm_fn_431__nextObjectKeyIterator4;
  target.vm_fn_432__resetGeneratorContext4 = vm_fn_432__resetGeneratorContext4;
  entryMap[432] = vm_fn_432__resetGeneratorContext4;
  target.vm_fn_433__stopGeneratorContext4 = vm_fn_433__stopGeneratorContext4;
  entryMap[433] = vm_fn_433__stopGeneratorContext4;
  target.vm_fn_434__dispatchException4 = vm_fn_434__dispatchException4;
  entryMap[434] = vm_fn_434__dispatchException4;
  target.vm_fn_435__handleExceptionEntry4 = vm_fn_435__handleExceptionEntry4;
  entryMap[435] = vm_fn_435__handleExceptionEntry4;
  target.vm_fn_436__abrupt4 = vm_fn_436__abrupt4;
  entryMap[436] = vm_fn_436__abrupt4;
  target.vm_fn_437__complete4 = vm_fn_437__complete4;
  entryMap[437] = vm_fn_437__complete4;
  target.vm_fn_438__finishFinallyEntry4 = vm_fn_438__finishFinallyEntry4;
  entryMap[438] = vm_fn_438__finishFinallyEntry4;
  target.vm_fn_439__catchTryEntry4 = vm_fn_439__catchTryEntry4;
  entryMap[439] = vm_fn_439__catchTryEntry4;
  target.vm_fn_440__delegateYield4 = vm_fn_440__delegateYield4;
  entryMap[440] = vm_fn_440__delegateYield4;
  target.vm_fn_441__ownKeys2 = vm_fn_441__ownKeys2;
  entryMap[441] = vm_fn_441__ownKeys2;
  target.vm_fn_442__isEnumerableProperty2 = vm_fn_442__isEnumerableProperty2;
  entryMap[442] = vm_fn_442__isEnumerableProperty2;
  target.vm_fn_443 = vm_fn_443;
  entryMap[443] = vm_fn_443;
  target.vm_fn_444__copyPropertyValue2 = vm_fn_444__copyPropertyValue2;
  entryMap[444] = vm_fn_444__copyPropertyValue2;
  target.vm_fn_445__copyPropertyDescriptor2 = vm_fn_445__copyPropertyDescriptor2;
  entryMap[445] = vm_fn_445__copyPropertyDescriptor2;
  target.vm_fn_446__defineEnumerableProperty22 = vm_fn_446__defineEnumerableProperty22;
  entryMap[446] = vm_fn_446__defineEnumerableProperty22;
  target.vm_fn_447__toPropertyKey32 = vm_fn_447__toPropertyKey32;
  entryMap[447] = vm_fn_447__toPropertyKey32;
  target.vm_fn_448__toPrimitive4 = vm_fn_448__toPrimitive4;
  entryMap[448] = vm_fn_448__toPrimitive4;
  target.vm_fn_449__asyncGeneratorStep4 = vm_fn_449__asyncGeneratorStep4;
  entryMap[449] = vm_fn_449__asyncGeneratorStep4;
  target.vm_fn_450__asyncToGenerator4 = vm_fn_450__asyncToGenerator4;
  entryMap[450] = vm_fn_450__asyncToGenerator4;
  target.vm_fn_451 = vm_fn_451;
  entryMap[451] = vm_fn_451;
  target.vm_fn_452 = vm_fn_452;
  entryMap[452] = vm_fn_452;
  target.vm_fn_453__asyncToGeneratorNext22 = vm_fn_453__asyncToGeneratorNext22;
  entryMap[453] = vm_fn_453__asyncToGeneratorNext22;
  target.vm_fn_454__asyncToGeneratorThrow22 = vm_fn_454__asyncToGeneratorThrow22;
  entryMap[454] = vm_fn_454__asyncToGeneratorThrow22;
  target.vm_fn_455__collectOfflineAudioFingerprint = vm_fn_455__collectOfflineAudioFingerprint;
  entryMap[455] = vm_fn_455__collectOfflineAudioFingerprint;
  target.vm_fn_456__runOfflineAudioFingerprint = vm_fn_456__runOfflineAudioFingerprint;
  entryMap[456] = vm_fn_456__runOfflineAudioFingerprint;
  target.vm_fn_457 = vm_fn_457;
  entryMap[457] = vm_fn_457;
  target.vm_fn_458 = vm_fn_458;
  entryMap[458] = vm_fn_458;
  target.vm_fn_459 = vm_fn_459;
  entryMap[459] = vm_fn_459;
  target.vm_fn_460 = vm_fn_460;
  entryMap[460] = vm_fn_460;
  target.vm_fn_461__wrapAudioFingerprintResult = vm_fn_461__wrapAudioFingerprintResult;
  entryMap[461] = vm_fn_461__wrapAudioFingerprintResult;
  target.vm_fn_462 = vm_fn_462;
  entryMap[462] = vm_fn_462;
  target.vm_fn_463__collectAudioContextInfo = vm_fn_463__collectAudioContextInfo;
  entryMap[463] = vm_fn_463__collectAudioContextInfo;
  target.vm_fn_464__invokeAudioFingerprintAsync = vm_fn_464__invokeAudioFingerprintAsync;
  entryMap[464] = vm_fn_464__invokeAudioFingerprintAsync;
  target.vm_fn_465__createAudioFingerprintAsync = vm_fn_465__createAudioFingerprintAsync;
  entryMap[465] = vm_fn_465__createAudioFingerprintAsync;
  target.vm_fn_466__createAudioFingerprintGenerator = vm_fn_466__createAudioFingerprintGenerator;
  entryMap[466] = vm_fn_466__createAudioFingerprintGenerator;
  target.vm_fn_467__collectAudioFingerprintPayload = vm_fn_467__collectAudioFingerprintPayload;
  entryMap[467] = vm_fn_467__collectAudioFingerprintPayload;
  target.vm_fn_468__initializeCanvasFingerprintHelpers = vm_fn_468__initializeCanvasFingerprintHelpers;
  entryMap[468] = vm_fn_468__initializeCanvasFingerprintHelpers;
  target.vm_fn_469__typeofHelper104 = vm_fn_469__typeofHelper104;
  entryMap[469] = vm_fn_469__typeofHelper104;
  target.vm_fn_470__baseTypeof6 = vm_fn_470__baseTypeof6;
  entryMap[470] = vm_fn_470__baseTypeof6;
  target.vm_fn_471__symbolAwareTypeof6 = vm_fn_471__symbolAwareTypeof6;
  entryMap[471] = vm_fn_471__symbolAwareTypeof6;
  target.vm_fn_472__ownKeys3 = vm_fn_472__ownKeys3;
  entryMap[472] = vm_fn_472__ownKeys3;
  target.vm_fn_473__isEnumerableProperty3 = vm_fn_473__isEnumerableProperty3;
  entryMap[473] = vm_fn_473__isEnumerableProperty3;
  target.vm_fn_474__objectSpread3 = vm_fn_474__objectSpread3;
  entryMap[474] = vm_fn_474__objectSpread3;
  target.vm_fn_475 = vm_fn_475;
  entryMap[475] = vm_fn_475;
  target.vm_fn_476__copyPropertyDescriptor3 = vm_fn_476__copyPropertyDescriptor3;
  entryMap[476] = vm_fn_476__copyPropertyDescriptor3;
  target.vm_fn_477__defineEnumerableProperty3 = vm_fn_477__defineEnumerableProperty3;
  entryMap[477] = vm_fn_477__defineEnumerableProperty3;
  target.vm_fn_478__toPropertyKey4 = vm_fn_478__toPropertyKey4;
  entryMap[478] = vm_fn_478__toPropertyKey4;
  target.vm_fn_479__toPrimitive5 = vm_fn_479__toPrimitive5;
  entryMap[479] = vm_fn_479__toPrimitive5;
  target.vm_fn_480__isCanvasSupported = vm_fn_480__isCanvasSupported;
  entryMap[480] = vm_fn_480__isCanvasSupported;
  target.vm_fn_481__collectCanvasFingerprint = vm_fn_481__collectCanvasFingerprint;
  entryMap[481] = vm_fn_481__collectCanvasFingerprint;
  target.vm_fn_482 = vm_fn_482;
  entryMap[482] = vm_fn_482;
  target.vm_fn_483__initializeDocumentFingerprintHelpers = vm_fn_483__initializeDocumentFingerprintHelpers;
  entryMap[483] = vm_fn_483__initializeDocumentFingerprintHelpers;
  target.vm_fn_484__typeofHelper105 = vm_fn_484__typeofHelper105;
  entryMap[484] = vm_fn_484__typeofHelper105;
  target.vm_fn_485__baseTypeof7 = vm_fn_485__baseTypeof7;
  entryMap[485] = vm_fn_485__baseTypeof7;
  target.vm_fn_486__symbolAwareTypeof7 = vm_fn_486__symbolAwareTypeof7;
  entryMap[486] = vm_fn_486__symbolAwareTypeof7;
  target.vm_fn_487__classifyDocumentPropertyValue = vm_fn_487__classifyDocumentPropertyValue;
  entryMap[487] = vm_fn_487__classifyDocumentPropertyValue;
  target.vm_fn_488__collectDocumentFingerprint = vm_fn_488__collectDocumentFingerprint;
  entryMap[488] = vm_fn_488__collectDocumentFingerprint;
  target.vm_fn_489__initializeMathFingerprintHelpers = vm_fn_489__initializeMathFingerprintHelpers;
  entryMap[489] = vm_fn_489__initializeMathFingerprintHelpers;
  target.vm_fn_490 = vm_fn_490;
  entryMap[490] = vm_fn_490;
  target.vm_fn_491__returnZeroFallback = vm_fn_491__returnZeroFallback;
  entryMap[491] = vm_fn_491__returnZeroFallback;
  target.vm_fn_492__computePowPi = vm_fn_492__computePowPi;
  entryMap[492] = vm_fn_492__computePowPi;
  target.vm_fn_493__computeAcoshPolyfill = vm_fn_493__computeAcoshPolyfill;
  entryMap[493] = vm_fn_493__computeAcoshPolyfill;
  target.vm_fn_494__computeAsinhPolyfill = vm_fn_494__computeAsinhPolyfill;
  entryMap[494] = vm_fn_494__computeAsinhPolyfill;
  target.vm_fn_495__computeAtanhPolyfill = vm_fn_495__computeAtanhPolyfill;
  entryMap[495] = vm_fn_495__computeAtanhPolyfill;
  target.vm_fn_496__computeSinhPolyfill = vm_fn_496__computeSinhPolyfill;
  entryMap[496] = vm_fn_496__computeSinhPolyfill;
  target.vm_fn_497__computeCoshPolyfill = vm_fn_497__computeCoshPolyfill;
  entryMap[497] = vm_fn_497__computeCoshPolyfill;
  target.vm_fn_498__computeExpm1Polyfill = vm_fn_498__computeExpm1Polyfill;
  entryMap[498] = vm_fn_498__computeExpm1Polyfill;
  target.vm_fn_499__computeTanhPolyfill = vm_fn_499__computeTanhPolyfill;
  entryMap[499] = vm_fn_499__computeTanhPolyfill;
  target.vm_fn_500__computeLog1pPolyfill = vm_fn_500__computeLog1pPolyfill;
  entryMap[500] = vm_fn_500__computeLog1pPolyfill;
  target.vm_fn_501 = vm_fn_501;
  entryMap[501] = vm_fn_501;
  target.vm_fn_502__typeofHelper8 = vm_fn_502__typeofHelper8;
  entryMap[502] = vm_fn_502__typeofHelper8;
  target.vm_fn_503__baseTypeof8 = vm_fn_503__baseTypeof8;
  entryMap[503] = vm_fn_503__baseTypeof8;
  target.vm_fn_504__symbolAwareTypeof8 = vm_fn_504__symbolAwareTypeof8;
  entryMap[504] = vm_fn_504__symbolAwareTypeof8;
  target.vm_fn_505__createRegeneratorRuntime5 = vm_fn_505__createRegeneratorRuntime5;
  entryMap[505] = vm_fn_505__createRegeneratorRuntime5;
  target.vm_fn_506 = vm_fn_506;
  entryMap[506] = vm_fn_506;
  target.vm_fn_507__definePropertyFallback5 = vm_fn_507__definePropertyFallback5;
  entryMap[507] = vm_fn_507__definePropertyFallback5;
  target.vm_fn_508__defineIteratorMethod5 = vm_fn_508__defineIteratorMethod5;
  entryMap[508] = vm_fn_508__defineIteratorMethod5;
  target.vm_fn_509 = vm_fn_509;
  entryMap[509] = vm_fn_509;
  target.vm_fn_510__wrapGeneratorFunction5 = vm_fn_510__wrapGeneratorFunction5;
  entryMap[510] = vm_fn_510__wrapGeneratorFunction5;
  target.vm_fn_511 = vm_fn_511;
  entryMap[511] = vm_fn_511;
  target.vm_fn_512 = vm_fn_512;
  entryMap[512] = vm_fn_512;
  target.vm_fn_513 = vm_fn_513;
  entryMap[513] = vm_fn_513;
  target.vm_fn_514 = vm_fn_514;
  entryMap[514] = vm_fn_514;
  target.vm_fn_515__returnThis13 = vm_fn_515__returnThis13;
  entryMap[515] = vm_fn_515__returnThis13;
  target.vm_fn_516 = vm_fn_516;
  entryMap[516] = vm_fn_516;
  target.vm_fn_517 = vm_fn_517;
  entryMap[517] = vm_fn_517;
  target.vm_fn_518__invokeIteratorMethod5 = vm_fn_518__invokeIteratorMethod5;
  entryMap[518] = vm_fn_518__invokeIteratorMethod5;
  target.vm_fn_519 = vm_fn_519;
  entryMap[519] = vm_fn_519;
  target.vm_fn_520 = vm_fn_520;
  entryMap[520] = vm_fn_520;
  target.vm_fn_521__resumeAsyncIteratorNext5 = vm_fn_521__resumeAsyncIteratorNext5;
  entryMap[521] = vm_fn_521__resumeAsyncIteratorNext5;
  target.vm_fn_522__resumeAsyncIteratorThrow9 = vm_fn_522__resumeAsyncIteratorThrow9;
  entryMap[522] = vm_fn_522__resumeAsyncIteratorThrow9;
  target.vm_fn_523__resolveAsyncIteratorValue5 = vm_fn_523__resolveAsyncIteratorValue5;
  entryMap[523] = vm_fn_523__resolveAsyncIteratorValue5;
  target.vm_fn_524__resumeAsyncIteratorThrow10 = vm_fn_524__resumeAsyncIteratorThrow10;
  entryMap[524] = vm_fn_524__resumeAsyncIteratorThrow10;
  target.vm_fn_525__enqueueAsyncIteratorStep5 = vm_fn_525__enqueueAsyncIteratorStep5;
  entryMap[525] = vm_fn_525__enqueueAsyncIteratorStep5;
  target.vm_fn_526 = vm_fn_526;
  entryMap[526] = vm_fn_526;
  target.vm_fn_527__executeAsyncIteratorStep5 = vm_fn_527__executeAsyncIteratorStep5;
  entryMap[527] = vm_fn_527__executeAsyncIteratorStep5;
  target.vm_fn_528 = vm_fn_528;
  entryMap[528] = vm_fn_528;
  target.vm_fn_529__invokeGeneratorMethod5 = vm_fn_529__invokeGeneratorMethod5;
  entryMap[529] = vm_fn_529__invokeGeneratorMethod5;
  target.vm_fn_530__maybeInvokeDelegate5 = vm_fn_530__maybeInvokeDelegate5;
  entryMap[530] = vm_fn_530__maybeInvokeDelegate5;
  target.vm_fn_531__pushTryEntry5 = vm_fn_531__pushTryEntry5;
  entryMap[531] = vm_fn_531__pushTryEntry5;
  target.vm_fn_532__resetCompletionRecord5 = vm_fn_532__resetCompletionRecord5;
  entryMap[532] = vm_fn_532__resetCompletionRecord5;
  target.vm_fn_533__resetTryEntryContext5 = vm_fn_533__resetTryEntryContext5;
  entryMap[533] = vm_fn_533__resetTryEntryContext5;
  target.vm_fn_534__getIterator5 = vm_fn_534__getIterator5;
  entryMap[534] = vm_fn_534__getIterator5;
  target.vm_fn_535__nextArrayLikeIterator5 = vm_fn_535__nextArrayLikeIterator5;
  entryMap[535] = vm_fn_535__nextArrayLikeIterator5;
  target.vm_fn_536__isGeneratorFunction5 = vm_fn_536__isGeneratorFunction5;
  entryMap[536] = vm_fn_536__isGeneratorFunction5;
  target.vm_fn_537__markGeneratorFunction5 = vm_fn_537__markGeneratorFunction5;
  entryMap[537] = vm_fn_537__markGeneratorFunction5;
  target.vm_fn_538__wrapAwaitValue5 = vm_fn_538__wrapAwaitValue5;
  entryMap[538] = vm_fn_538__wrapAwaitValue5;
  target.vm_fn_539__returnThis14 = vm_fn_539__returnThis14;
  entryMap[539] = vm_fn_539__returnThis14;
  target.vm_fn_540__createAsyncFunctionWrapper5 = vm_fn_540__createAsyncFunctionWrapper5;
  entryMap[540] = vm_fn_540__createAsyncFunctionWrapper5;
  target.vm_fn_541__handleAsyncIteratorResult5 = vm_fn_541__handleAsyncIteratorResult5;
  entryMap[541] = vm_fn_541__handleAsyncIteratorResult5;
  target.vm_fn_542__returnThis15 = vm_fn_542__returnThis15;
  entryMap[542] = vm_fn_542__returnThis15;
  target.vm_fn_543__getGeneratorTag5 = vm_fn_543__getGeneratorTag5;
  entryMap[543] = vm_fn_543__getGeneratorTag5;
  target.vm_fn_544 = vm_fn_544;
  entryMap[544] = vm_fn_544;
  target.vm_fn_545__nextObjectKeyIterator5 = vm_fn_545__nextObjectKeyIterator5;
  entryMap[545] = vm_fn_545__nextObjectKeyIterator5;
  target.vm_fn_546__resetGeneratorContext5 = vm_fn_546__resetGeneratorContext5;
  entryMap[546] = vm_fn_546__resetGeneratorContext5;
  target.vm_fn_547__stopGeneratorContext5 = vm_fn_547__stopGeneratorContext5;
  entryMap[547] = vm_fn_547__stopGeneratorContext5;
  target.vm_fn_548__dispatchException5 = vm_fn_548__dispatchException5;
  entryMap[548] = vm_fn_548__dispatchException5;
  target.vm_fn_549__handleExceptionEntry5 = vm_fn_549__handleExceptionEntry5;
  entryMap[549] = vm_fn_549__handleExceptionEntry5;
  target.vm_fn_550__abrupt5 = vm_fn_550__abrupt5;
  entryMap[550] = vm_fn_550__abrupt5;
  target.vm_fn_551__complete5 = vm_fn_551__complete5;
  entryMap[551] = vm_fn_551__complete5;
  target.vm_fn_552__finishFinallyEntry5 = vm_fn_552__finishFinallyEntry5;
  entryMap[552] = vm_fn_552__finishFinallyEntry5;
  target.vm_fn_553__catchTryEntry5 = vm_fn_553__catchTryEntry5;
  entryMap[553] = vm_fn_553__catchTryEntry5;
  target.vm_fn_554__delegateYield5 = vm_fn_554__delegateYield5;
  entryMap[554] = vm_fn_554__delegateYield5;
  target.vm_fn_555__createForOfIteratorHelper = vm_fn_555__createForOfIteratorHelper;
  entryMap[555] = vm_fn_555__createForOfIteratorHelper;
  target.vm_fn_556 = vm_fn_556;
  entryMap[556] = vm_fn_556;
  target.vm_fn_557__nextArrayIteratorValue2 = vm_fn_557__nextArrayIteratorValue2;
  entryMap[557] = vm_fn_557__nextArrayIteratorValue2;
  target.vm_fn_558__throwIteratorError2 = vm_fn_558__throwIteratorError2;
  entryMap[558] = vm_fn_558__throwIteratorError2;
  target.vm_fn_559__startIterableIterator2 = vm_fn_559__startIterableIterator2;
  entryMap[559] = vm_fn_559__startIterableIterator2;
  target.vm_fn_560__nextIterableIteratorValue = vm_fn_560__nextIterableIteratorValue;
  entryMap[560] = vm_fn_560__nextIterableIteratorValue;
  target.vm_fn_561__captureIteratorError = vm_fn_561__captureIteratorError;
  entryMap[561] = vm_fn_561__captureIteratorError;
  target.vm_fn_562 = vm_fn_562;
  entryMap[562] = vm_fn_562;
  target.vm_fn_563__unsupportedIterableToArray5 = vm_fn_563__unsupportedIterableToArray5;
  entryMap[563] = vm_fn_563__unsupportedIterableToArray5;
  target.vm_fn_564__arrayLikeToArray5 = vm_fn_564__arrayLikeToArray5;
  entryMap[564] = vm_fn_564__arrayLikeToArray5;
  target.vm_fn_565__asyncGeneratorStep5 = vm_fn_565__asyncGeneratorStep5;
  entryMap[565] = vm_fn_565__asyncGeneratorStep5;
  target.vm_fn_566__asyncToGenerator5 = vm_fn_566__asyncToGenerator5;
  entryMap[566] = vm_fn_566__asyncToGenerator5;
  target.vm_fn_567 = vm_fn_567;
  entryMap[567] = vm_fn_567;
  target.vm_fn_568 = vm_fn_568;
  entryMap[568] = vm_fn_568;
  target.vm_fn_569 = vm_fn_569;
  entryMap[569] = vm_fn_569;
  target.vm_fn_570 = vm_fn_570;
  entryMap[570] = vm_fn_570;
  target.vm_fn_571__computeBrowserTypeMask = vm_fn_571__computeBrowserTypeMask;
  entryMap[571] = vm_fn_571__computeBrowserTypeMask;
  target.vm_fn_572 = vm_fn_572;
  entryMap[572] = vm_fn_572;
  target.vm_fn_573__collectJsFontsBitmask = vm_fn_573__collectJsFontsBitmask;
  entryMap[573] = vm_fn_573__collectJsFontsBitmask;
  target.vm_fn_574__getJsVersion = vm_fn_574__getJsVersion;
  entryMap[574] = vm_fn_574__getJsVersion;
  target.vm_fn_575__invokeLoadCapabilityAsync = vm_fn_575__invokeLoadCapabilityAsync;
  entryMap[575] = vm_fn_575__invokeLoadCapabilityAsync;
  target.vm_fn_576__createLoadCapabilityAsync = vm_fn_576__createLoadCapabilityAsync;
  entryMap[576] = vm_fn_576__createLoadCapabilityAsync;
  target.vm_fn_577 = vm_fn_577;
  entryMap[577] = vm_fn_577;
  target.vm_fn_578 = vm_fn_578;
  entryMap[578] = vm_fn_578;
  target.vm_fn_579 = vm_fn_579;
  entryMap[579] = vm_fn_579;
  target.vm_fn_580__resolveImageLoadCapability = vm_fn_580__resolveImageLoadCapability;
  entryMap[580] = vm_fn_580__resolveImageLoadCapability;
  target.vm_fn_581__resolveImageLoadFailure = vm_fn_581__resolveImageLoadFailure;
  entryMap[581] = vm_fn_581__resolveImageLoadFailure;
  target.vm_fn_582__computeStorageAccessMask = vm_fn_582__computeStorageAccessMask;
  entryMap[582] = vm_fn_582__computeStorageAccessMask;
  target.vm_fn_583__invokePermissionStatesAsync = vm_fn_583__invokePermissionStatesAsync;
  entryMap[583] = vm_fn_583__invokePermissionStatesAsync;
  target.vm_fn_584__createPermissionStatesAsync = vm_fn_584__createPermissionStatesAsync;
  entryMap[584] = vm_fn_584__createPermissionStatesAsync;
  target.vm_fn_585 = vm_fn_585;
  entryMap[585] = vm_fn_585;
  target.vm_fn_586__queryPermissionStates = vm_fn_586__queryPermissionStates;
  entryMap[586] = vm_fn_586__queryPermissionStates;
  target.vm_fn_587 = vm_fn_587;
  entryMap[587] = vm_fn_587;
  target.vm_fn_588 = vm_fn_588;
  entryMap[588] = vm_fn_588;
  target.vm_fn_589 = vm_fn_589;
  entryMap[589] = vm_fn_589;
  target.vm_fn_590 = vm_fn_590;
  entryMap[590] = vm_fn_590;
  target.vm_fn_591__getNativeEvalLength = vm_fn_591__getNativeEvalLength;
  entryMap[591] = vm_fn_591__getNativeEvalLength;
  target.vm_fn_592__useOfSessionStorage = vm_fn_592__useOfSessionStorage;
  entryMap[592] = vm_fn_592__useOfSessionStorage;
  target.vm_fn_593__useOfLocalStorage = vm_fn_593__useOfLocalStorage;
  entryMap[593] = vm_fn_593__useOfLocalStorage;
  target.vm_fn_594__useOfIndexedDB = vm_fn_594__useOfIndexedDB;
  entryMap[594] = vm_fn_594__useOfIndexedDB;
  target.vm_fn_595__createContrastPreferenceEnum = vm_fn_595__createContrastPreferenceEnum;
  entryMap[595] = vm_fn_595__createContrastPreferenceEnum;
  target.vm_fn_596__detectContrastPreference = vm_fn_596__detectContrastPreference;
  entryMap[596] = vm_fn_596__detectContrastPreference;
  target.vm_fn_597__detectForcedColorsActive = vm_fn_597__detectForcedColorsActive;
  entryMap[597] = vm_fn_597__detectForcedColorsActive;
  target.vm_fn_598__matchesReducedMotionMedia = vm_fn_598__matchesReducedMotionMedia;
  entryMap[598] = vm_fn_598__matchesReducedMotionMedia;
  target.vm_fn_599__matchesForcedColorsMedia = vm_fn_599__matchesForcedColorsMedia;
  entryMap[599] = vm_fn_599__matchesForcedColorsMedia;
  target.vm_fn_600__matchesContrastMedia = vm_fn_600__matchesContrastMedia;
  entryMap[600] = vm_fn_600__matchesContrastMedia;
  target.vm_fn_601__detectReducedMotion = vm_fn_601__detectReducedMotion;
  entryMap[601] = vm_fn_601__detectReducedMotion;
  target.vm_fn_602__detectMonochromeDepth = vm_fn_602__detectMonochromeDepth;
  entryMap[602] = vm_fn_602__detectMonochromeDepth;
  target.vm_fn_603__detectFloatEndiannessByte = vm_fn_603__detectFloatEndiannessByte;
  entryMap[603] = vm_fn_603__detectFloatEndiannessByte;
  target.vm_fn_604__detectColorGamut = vm_fn_604__detectColorGamut;
  entryMap[604] = vm_fn_604__detectColorGamut;
  target.vm_fn_605 = vm_fn_605;
  entryMap[605] = vm_fn_605;
  target.vm_fn_606__createEnvironmentFingerprintAsync = vm_fn_606__createEnvironmentFingerprintAsync;
  entryMap[606] = vm_fn_606__createEnvironmentFingerprintAsync;
  target.vm_fn_607 = vm_fn_607;
  entryMap[607] = vm_fn_607;
  target.vm_fn_608__collectEnvironmentFingerprintPayload = vm_fn_608__collectEnvironmentFingerprintPayload;
  entryMap[608] = vm_fn_608__collectEnvironmentFingerprintPayload;
  target.vm_fn_609__invokePrivacyModeFingerprintAsync = vm_fn_609__invokePrivacyModeFingerprintAsync;
  entryMap[609] = vm_fn_609__invokePrivacyModeFingerprintAsync;
  target.vm_fn_610__createPrivacyModeFingerprintAsync = vm_fn_610__createPrivacyModeFingerprintAsync;
  entryMap[610] = vm_fn_610__createPrivacyModeFingerprintAsync;
  target.vm_fn_611__createPrivacyModeFingerprintGenerator = vm_fn_611__createPrivacyModeFingerprintGenerator;
  entryMap[611] = vm_fn_611__createPrivacyModeFingerprintGenerator;
  target.vm_fn_612__collectPrivacyModeFingerprint = vm_fn_612__collectPrivacyModeFingerprint;
  entryMap[612] = vm_fn_612__collectPrivacyModeFingerprint;
  target.vm_fn_613__initializePluginFingerprintHelpers = vm_fn_613__initializePluginFingerprintHelpers;
  entryMap[613] = vm_fn_613__initializePluginFingerprintHelpers;
  target.vm_fn_614__collectPluginFingerprint = vm_fn_614__collectPluginFingerprint;
  entryMap[614] = vm_fn_614__collectPluginFingerprint;
  target.vm_fn_615__initializeNavigatorFingerprintHelpers = vm_fn_615__initializeNavigatorFingerprintHelpers;
  entryMap[615] = vm_fn_615__initializeNavigatorFingerprintHelpers;
  target.vm_fn_616__detectTouchEventSupport = vm_fn_616__detectTouchEventSupport;
  entryMap[616] = vm_fn_616__detectTouchEventSupport;
  target.vm_fn_617__detectOntouchstartSupport = vm_fn_617__detectOntouchstartSupport;
  entryMap[617] = vm_fn_617__detectOntouchstartSupport;
  target.vm_fn_618__collectNavigatorPrototypeSnapshot = vm_fn_618__collectNavigatorPrototypeSnapshot;
  entryMap[618] = vm_fn_618__collectNavigatorPrototypeSnapshot;
  target.vm_fn_619__getObjectTag3 = vm_fn_619__getObjectTag3;
  entryMap[619] = vm_fn_619__getObjectTag3;
  target.vm_fn_620__appendNavigatorPrototypeProperty = vm_fn_620__appendNavigatorPrototypeProperty;
  entryMap[620] = vm_fn_620__appendNavigatorPrototypeProperty;
  target.vm_fn_621__serializePluginList = vm_fn_621__serializePluginList;
  entryMap[621] = vm_fn_621__serializePluginList;
  target.vm_fn_622__collectNavigatorAppFingerprint = vm_fn_622__collectNavigatorAppFingerprint;
  entryMap[622] = vm_fn_622__collectNavigatorAppFingerprint;
  target.vm_fn_623__collectNavigatorDeviceFingerprint = vm_fn_623__collectNavigatorDeviceFingerprint;
  entryMap[623] = vm_fn_623__collectNavigatorDeviceFingerprint;
  target.vm_fn_624__initializeVideoCapabilityHelpers = vm_fn_624__initializeVideoCapabilityHelpers;
  entryMap[624] = vm_fn_624__initializeVideoCapabilityHelpers;
  target.vm_fn_625__collectVideoCodecSupport = vm_fn_625__collectVideoCodecSupport;
  entryMap[625] = vm_fn_625__collectVideoCodecSupport;
  target.vm_fn_626__appendVideoCodecSupport = vm_fn_626__appendVideoCodecSupport;
  entryMap[626] = vm_fn_626__appendVideoCodecSupport;
  target.vm_fn_627__collectVideoCapabilityFingerprint = vm_fn_627__collectVideoCapabilityFingerprint;
  entryMap[627] = vm_fn_627__collectVideoCapabilityFingerprint;
  target.vm_fn_628__initializeScreenFingerprintHelpers = vm_fn_628__initializeScreenFingerprintHelpers;
  entryMap[628] = vm_fn_628__initializeScreenFingerprintHelpers;
  target.vm_fn_629__collectViewportMetrics = vm_fn_629__collectViewportMetrics;
  entryMap[629] = vm_fn_629__collectViewportMetrics;
  target.vm_fn_630__collectScreenMetrics = vm_fn_630__collectScreenMetrics;
  entryMap[630] = vm_fn_630__collectScreenMetrics;
  target.vm_fn_631__initializeWebglFingerprintHelpers = vm_fn_631__initializeWebglFingerprintHelpers;
  entryMap[631] = vm_fn_631__initializeWebglFingerprintHelpers;
  target.vm_fn_632__collectWebglFingerprint = vm_fn_632__collectWebglFingerprint;
  entryMap[632] = vm_fn_632__collectWebglFingerprint;
  target.vm_fn_633__initializeWindowFingerprintHelpers = vm_fn_633__initializeWindowFingerprintHelpers;
  entryMap[633] = vm_fn_633__initializeWindowFingerprintHelpers;
  target.vm_fn_634__collectWindowFingerprint = vm_fn_634__collectWindowFingerprint;
  entryMap[634] = vm_fn_634__collectWindowFingerprint;
  target.vm_fn_635__initializeWebIdHelpers = vm_fn_635__initializeWebIdHelpers;
  entryMap[635] = vm_fn_635__initializeWebIdHelpers;
  target.vm_fn_636__collectBuiltinFunctionLengths = vm_fn_636__collectBuiltinFunctionLengths;
  entryMap[636] = vm_fn_636__collectBuiltinFunctionLengths;
  target.vm_fn_637__collectConsoleMemoryFingerprint = vm_fn_637__collectConsoleMemoryFingerprint;
  entryMap[637] = vm_fn_637__collectConsoleMemoryFingerprint;
  target.vm_fn_638__collectMouseEventFingerprint = vm_fn_638__collectMouseEventFingerprint;
  entryMap[638] = vm_fn_638__collectMouseEventFingerprint;
  target.vm_fn_639__collectWebIdFingerprint = vm_fn_639__collectWebIdFingerprint;
  entryMap[639] = vm_fn_639__collectWebIdFingerprint;
  target.vm_fn_640__initializeClientInfoHelpers = vm_fn_640__initializeClientInfoHelpers;
  entryMap[640] = vm_fn_640__initializeClientInfoHelpers;
  target.vm_fn_641__typeofHelper106 = vm_fn_641__typeofHelper106;
  entryMap[641] = vm_fn_641__typeofHelper106;
  target.vm_fn_642__baseTypeof9 = vm_fn_642__baseTypeof9;
  entryMap[642] = vm_fn_642__baseTypeof9;
  target.vm_fn_643__symbolAwareTypeof9 = vm_fn_643__symbolAwareTypeof9;
  entryMap[643] = vm_fn_643__symbolAwareTypeof9;
  target.vm_fn_644__createRegeneratorRuntime6 = vm_fn_644__createRegeneratorRuntime6;
  entryMap[644] = vm_fn_644__createRegeneratorRuntime6;
  target.vm_fn_645 = vm_fn_645;
  entryMap[645] = vm_fn_645;
  target.vm_fn_646__definePropertyFallback6 = vm_fn_646__definePropertyFallback6;
  entryMap[646] = vm_fn_646__definePropertyFallback6;
  target.vm_fn_647__defineIteratorMethod6 = vm_fn_647__defineIteratorMethod6;
  entryMap[647] = vm_fn_647__defineIteratorMethod6;
  target.vm_fn_648 = vm_fn_648;
  entryMap[648] = vm_fn_648;
  target.vm_fn_649__wrapGeneratorFunction6 = vm_fn_649__wrapGeneratorFunction6;
  entryMap[649] = vm_fn_649__wrapGeneratorFunction6;
  target.vm_fn_650 = vm_fn_650;
  entryMap[650] = vm_fn_650;
  target.vm_fn_651 = vm_fn_651;
  entryMap[651] = vm_fn_651;
  target.vm_fn_652 = vm_fn_652;
  entryMap[652] = vm_fn_652;
  target.vm_fn_653 = vm_fn_653;
  entryMap[653] = vm_fn_653;
  target.vm_fn_654__returnThis16 = vm_fn_654__returnThis16;
  entryMap[654] = vm_fn_654__returnThis16;
  target.vm_fn_655 = vm_fn_655;
  entryMap[655] = vm_fn_655;
  target.vm_fn_656 = vm_fn_656;
  entryMap[656] = vm_fn_656;
  target.vm_fn_657__invokeIteratorMethod6 = vm_fn_657__invokeIteratorMethod6;
  entryMap[657] = vm_fn_657__invokeIteratorMethod6;
  target.vm_fn_658 = vm_fn_658;
  entryMap[658] = vm_fn_658;
  target.vm_fn_659 = vm_fn_659;
  entryMap[659] = vm_fn_659;
  target.vm_fn_660__resumeAsyncIteratorNext6 = vm_fn_660__resumeAsyncIteratorNext6;
  entryMap[660] = vm_fn_660__resumeAsyncIteratorNext6;
  target.vm_fn_661__resumeAsyncIteratorThrow11 = vm_fn_661__resumeAsyncIteratorThrow11;
  entryMap[661] = vm_fn_661__resumeAsyncIteratorThrow11;
  target.vm_fn_662__resolveAsyncIteratorValue6 = vm_fn_662__resolveAsyncIteratorValue6;
  entryMap[662] = vm_fn_662__resolveAsyncIteratorValue6;
  target.vm_fn_663__resumeAsyncIteratorThrow12 = vm_fn_663__resumeAsyncIteratorThrow12;
  entryMap[663] = vm_fn_663__resumeAsyncIteratorThrow12;
  target.vm_fn_664__enqueueAsyncIteratorStep6 = vm_fn_664__enqueueAsyncIteratorStep6;
  entryMap[664] = vm_fn_664__enqueueAsyncIteratorStep6;
  target.vm_fn_665 = vm_fn_665;
  entryMap[665] = vm_fn_665;
  target.vm_fn_666__executeAsyncIteratorStep6 = vm_fn_666__executeAsyncIteratorStep6;
  entryMap[666] = vm_fn_666__executeAsyncIteratorStep6;
  target.vm_fn_667 = vm_fn_667;
  entryMap[667] = vm_fn_667;
  target.vm_fn_668__invokeGeneratorMethod6 = vm_fn_668__invokeGeneratorMethod6;
  entryMap[668] = vm_fn_668__invokeGeneratorMethod6;
  target.vm_fn_669__maybeInvokeDelegate6 = vm_fn_669__maybeInvokeDelegate6;
  entryMap[669] = vm_fn_669__maybeInvokeDelegate6;
  target.vm_fn_670__pushTryEntry6 = vm_fn_670__pushTryEntry6;
  entryMap[670] = vm_fn_670__pushTryEntry6;
  target.vm_fn_671__resetCompletionRecord6 = vm_fn_671__resetCompletionRecord6;
  entryMap[671] = vm_fn_671__resetCompletionRecord6;
  target.vm_fn_672__resetTryEntryContext6 = vm_fn_672__resetTryEntryContext6;
  entryMap[672] = vm_fn_672__resetTryEntryContext6;
  target.vm_fn_673__getIterator6 = vm_fn_673__getIterator6;
  entryMap[673] = vm_fn_673__getIterator6;
  target.vm_fn_674__nextArrayLikeIterator6 = vm_fn_674__nextArrayLikeIterator6;
  entryMap[674] = vm_fn_674__nextArrayLikeIterator6;
  target.vm_fn_675__isGeneratorFunction6 = vm_fn_675__isGeneratorFunction6;
  entryMap[675] = vm_fn_675__isGeneratorFunction6;
  target.vm_fn_676__markGeneratorFunction6 = vm_fn_676__markGeneratorFunction6;
  entryMap[676] = vm_fn_676__markGeneratorFunction6;
  target.vm_fn_677__wrapAwaitValue6 = vm_fn_677__wrapAwaitValue6;
  entryMap[677] = vm_fn_677__wrapAwaitValue6;
  target.vm_fn_678__returnThis17 = vm_fn_678__returnThis17;
  entryMap[678] = vm_fn_678__returnThis17;
  target.vm_fn_679__createAsyncFunctionWrapper6 = vm_fn_679__createAsyncFunctionWrapper6;
  entryMap[679] = vm_fn_679__createAsyncFunctionWrapper6;
  target.vm_fn_680__handleAsyncIteratorResult6 = vm_fn_680__handleAsyncIteratorResult6;
  entryMap[680] = vm_fn_680__handleAsyncIteratorResult6;
  target.vm_fn_681__returnThis18 = vm_fn_681__returnThis18;
  entryMap[681] = vm_fn_681__returnThis18;
  target.vm_fn_682__getGeneratorTag6 = vm_fn_682__getGeneratorTag6;
  entryMap[682] = vm_fn_682__getGeneratorTag6;
  target.vm_fn_683 = vm_fn_683;
  entryMap[683] = vm_fn_683;
  target.vm_fn_684__nextObjectKeyIterator6 = vm_fn_684__nextObjectKeyIterator6;
  entryMap[684] = vm_fn_684__nextObjectKeyIterator6;
  target.vm_fn_685__resetGeneratorContext6 = vm_fn_685__resetGeneratorContext6;
  entryMap[685] = vm_fn_685__resetGeneratorContext6;
  target.vm_fn_686__stopGeneratorContext6 = vm_fn_686__stopGeneratorContext6;
  entryMap[686] = vm_fn_686__stopGeneratorContext6;
  target.vm_fn_687__dispatchException6 = vm_fn_687__dispatchException6;
  entryMap[687] = vm_fn_687__dispatchException6;
  target.vm_fn_688__handleExceptionEntry6 = vm_fn_688__handleExceptionEntry6;
  entryMap[688] = vm_fn_688__handleExceptionEntry6;
  target.vm_fn_689__abrupt6 = vm_fn_689__abrupt6;
  entryMap[689] = vm_fn_689__abrupt6;
  target.vm_fn_690__complete6 = vm_fn_690__complete6;
  entryMap[690] = vm_fn_690__complete6;
  target.vm_fn_691__finishFinallyEntry6 = vm_fn_691__finishFinallyEntry6;
  entryMap[691] = vm_fn_691__finishFinallyEntry6;
  target.vm_fn_692__catchTryEntry6 = vm_fn_692__catchTryEntry6;
  entryMap[692] = vm_fn_692__catchTryEntry6;
  target.vm_fn_693__delegateYield6 = vm_fn_693__delegateYield6;
  entryMap[693] = vm_fn_693__delegateYield6;
  target.vm_fn_694__asyncGeneratorStep6 = vm_fn_694__asyncGeneratorStep6;
  entryMap[694] = vm_fn_694__asyncGeneratorStep6;
  target.vm_fn_695 = vm_fn_695;
  entryMap[695] = vm_fn_695;
  target.vm_fn_696 = vm_fn_696;
  entryMap[696] = vm_fn_696;
  target.vm_fn_697 = vm_fn_697;
  entryMap[697] = vm_fn_697;
  target.vm_fn_698__asyncToGeneratorNext32 = vm_fn_698__asyncToGeneratorNext32;
  entryMap[698] = vm_fn_698__asyncToGeneratorNext32;
  target.vm_fn_699__asyncToGeneratorThrow32 = vm_fn_699__asyncToGeneratorThrow32;
  entryMap[699] = vm_fn_699__asyncToGeneratorThrow32;
  target.vm_fn_700__encodeStringToUpperHex = vm_fn_700__encodeStringToUpperHex;
  entryMap[700] = vm_fn_700__encodeStringToUpperHex;
  target.vm_fn_701__extractPngTailSignature = vm_fn_701__extractPngTailSignature;
  entryMap[701] = vm_fn_701__extractPngTailSignature;
  target.vm_fn_702__generateUuidV4 = vm_fn_702__generateUuidV4;
  entryMap[702] = vm_fn_702__generateUuidV4;
  target.vm_fn_703 = vm_fn_703;
  entryMap[703] = vm_fn_703;
  target.vm_fn_704__getOrCreateStoredId = vm_fn_704__getOrCreateStoredId;
  entryMap[704] = vm_fn_704__getOrCreateStoredId;
  target.vm_fn_705__invokeClientInfoAsync = vm_fn_705__invokeClientInfoAsync;
  entryMap[705] = vm_fn_705__invokeClientInfoAsync;
  target.vm_fn_706__createClientInfoAsync = vm_fn_706__createClientInfoAsync;
  entryMap[706] = vm_fn_706__createClientInfoAsync;
  target.vm_fn_707__createClientInfoGenerator = vm_fn_707__createClientInfoGenerator;
  entryMap[707] = vm_fn_707__createClientInfoGenerator;
  target.vm_fn_708__collectClientDeviceId = vm_fn_708__collectClientDeviceId;
  entryMap[708] = vm_fn_708__collectClientDeviceId;
  target.vm_fn_709__initializeDevtoolsDetectionHelpers = vm_fn_709__initializeDevtoolsDetectionHelpers;
  entryMap[709] = vm_fn_709__initializeDevtoolsDetectionHelpers;
  target.vm_fn_710__detectDevtoolsOpen = vm_fn_710__detectDevtoolsOpen;
  entryMap[710] = vm_fn_710__detectDevtoolsOpen;
  target.vm_fn_711__markDebuggerDetected = vm_fn_711__markDebuggerDetected;
  entryMap[711] = vm_fn_711__markDebuggerDetected;
  target.vm_fn_712__initializeNodeEnvironmentHelpers = vm_fn_712__initializeNodeEnvironmentHelpers;
  entryMap[712] = vm_fn_712__initializeNodeEnvironmentHelpers;
  target.vm_fn_713__isNodeRuntime = vm_fn_713__isNodeRuntime;
  entryMap[713] = vm_fn_713__isNodeRuntime;
  target.vm_fn_714__initializeHeadlessDetectionHelpers = vm_fn_714__initializeHeadlessDetectionHelpers;
  entryMap[714] = vm_fn_714__initializeHeadlessDetectionHelpers;
  target.vm_fn_715__isHeadlessBrowser = vm_fn_715__isHeadlessBrowser;
  entryMap[715] = vm_fn_715__isHeadlessBrowser;
  target.vm_fn_716__initializeDomEnvironmentValidationHelpers = vm_fn_716__initializeDomEnvironmentValidationHelpers;
  entryMap[716] = vm_fn_716__initializeDomEnvironmentValidationHelpers;
  target.vm_fn_717__hasBrokenDomEnvironment = vm_fn_717__hasBrokenDomEnvironment;
  entryMap[717] = vm_fn_717__hasBrokenDomEnvironment;
  target.vm_fn_718__initializeAutomationDetectionHelpers = vm_fn_718__initializeAutomationDetectionHelpers;
  entryMap[718] = vm_fn_718__initializeAutomationDetectionHelpers;
  target.vm_fn_719__isAutomationEnvironment = vm_fn_719__isAutomationEnvironment;
  entryMap[719] = vm_fn_719__isAutomationEnvironment;
  target.vm_fn_720__scanEmbeddedBrowserMarkers = vm_fn_720__scanEmbeddedBrowserMarkers;
  entryMap[720] = vm_fn_720__scanEmbeddedBrowserMarkers;
  target.vm_fn_721__isEmbeddedBrowserMarker = vm_fn_721__isEmbeddedBrowserMarker;
  entryMap[721] = vm_fn_721__isEmbeddedBrowserMarker;
  target.vm_fn_722__initializeIncognitoDetectionHelpers = vm_fn_722__initializeIncognitoDetectionHelpers;
  entryMap[722] = vm_fn_722__initializeIncognitoDetectionHelpers;
  target.vm_fn_723__detectIncognitoMode = vm_fn_723__detectIncognitoMode;
  entryMap[723] = vm_fn_723__detectIncognitoMode;
  target.vm_fn_724__markIncognitoDetected = vm_fn_724__markIncognitoDetected;
  entryMap[724] = vm_fn_724__markIncognitoDetected;
  target.vm_fn_725__initializeNativeTamperDetectionHelpers = vm_fn_725__initializeNativeTamperDetectionHelpers;
  entryMap[725] = vm_fn_725__initializeNativeTamperDetectionHelpers;
  target.vm_fn_726__hasNativeApiTampering = vm_fn_726__hasNativeApiTampering;
  entryMap[726] = vm_fn_726__hasNativeApiTampering;
  target.vm_fn_727__initializeLocalhostDetectionHelpers = vm_fn_727__initializeLocalhostDetectionHelpers;
  entryMap[727] = vm_fn_727__initializeLocalhostDetectionHelpers;
  target.vm_fn_728__isLocalhostOrFileContext = vm_fn_728__isLocalhostOrFileContext;
  entryMap[728] = vm_fn_728__isLocalhostOrFileContext;
  target.vm_fn_729__initializeUaConsistencyHelpers = vm_fn_729__initializeUaConsistencyHelpers;
  entryMap[729] = vm_fn_729__initializeUaConsistencyHelpers;
  target.vm_fn_730__hasUserAgentPlatformMismatch = vm_fn_730__hasUserAgentPlatformMismatch;
  entryMap[730] = vm_fn_730__hasUserAgentPlatformMismatch;
  target.vm_fn_731__initializeStorageQuotaDetectionHelpers = vm_fn_731__initializeStorageQuotaDetectionHelpers;
  entryMap[731] = vm_fn_731__initializeStorageQuotaDetectionHelpers;
  target.vm_fn_732__collectStorageQuotaSignature = vm_fn_732__collectStorageQuotaSignature;
  entryMap[732] = vm_fn_732__collectStorageQuotaSignature;
  target.vm_fn_733__readTriggerByte = vm_fn_733__readTriggerByte;
  entryMap[733] = vm_fn_733__readTriggerByte;
  target.vm_fn_734__initializePrivacyQuotaDetectionHelpers = vm_fn_734__initializePrivacyQuotaDetectionHelpers;
  entryMap[734] = vm_fn_734__initializePrivacyQuotaDetectionHelpers;
  target.vm_fn_735__probeChromiumStorageQuota = vm_fn_735__probeChromiumStorageQuota;
  entryMap[735] = vm_fn_735__probeChromiumStorageQuota;
  target.vm_fn_736__markLowStorageQuota = vm_fn_736__markLowStorageQuota;
  entryMap[736] = vm_fn_736__markLowStorageQuota;
  target.vm_fn_737__probeFirefoxStorageIsolation = vm_fn_737__probeFirefoxStorageIsolation;
  entryMap[737] = vm_fn_737__probeFirefoxStorageIsolation;
  target.vm_fn_738__cleanupIndexedDbProbe = vm_fn_738__cleanupIndexedDbProbe;
  entryMap[738] = vm_fn_738__cleanupIndexedDbProbe;
  target.vm_fn_739__markStorageIsolationDetected = vm_fn_739__markStorageIsolationDetected;
  entryMap[739] = vm_fn_739__markStorageIsolationDetected;
  target.vm_fn_740__probeSafariStorageDirectory = vm_fn_740__probeSafariStorageDirectory;
  entryMap[740] = vm_fn_740__probeSafariStorageDirectory;
  target.vm_fn_741__markOutOfMemoryStorageError = vm_fn_741__markOutOfMemoryStorageError;
  entryMap[741] = vm_fn_741__markOutOfMemoryStorageError;
  target.vm_fn_742__detectPrivacyQuotaMode = vm_fn_742__detectPrivacyQuotaMode;
  entryMap[742] = vm_fn_742__detectPrivacyQuotaMode;
  target.vm_fn_743__initializeStackTraceDetectionHelpers = vm_fn_743__initializeStackTraceDetectionHelpers;
  entryMap[743] = vm_fn_743__initializeStackTraceDetectionHelpers;
  target.vm_fn_744__hasSuspiciousUrlStackTrace = vm_fn_744__hasSuspiciousUrlStackTrace;
  entryMap[744] = vm_fn_744__hasSuspiciousUrlStackTrace;
  target.vm_fn_745__matchesSuspiciousStackFrame = vm_fn_745__matchesSuspiciousStackFrame;
  entryMap[745] = vm_fn_745__matchesSuspiciousStackFrame;
  target.vm_fn_746__initializeDocumentAllDetectionHelpers = vm_fn_746__initializeDocumentAllDetectionHelpers;
  entryMap[746] = vm_fn_746__initializeDocumentAllDetectionHelpers;
  target.vm_fn_747__hasBrokenDocumentAllBehavior = vm_fn_747__hasBrokenDocumentAllBehavior;
  entryMap[747] = vm_fn_747__hasBrokenDocumentAllBehavior;
  target.vm_fn_748__isTruthyValue4 = vm_fn_748__isTruthyValue4;
  entryMap[748] = vm_fn_748__isTruthyValue4;
  target.vm_fn_749__initializeViewportGapDetectionHelpers = vm_fn_749__initializeViewportGapDetectionHelpers;
  entryMap[749] = vm_fn_749__initializeViewportGapDetectionHelpers;
  target.vm_fn_750__measureViewportGap = vm_fn_750__measureViewportGap;
  entryMap[750] = vm_fn_750__measureViewportGap;
  target.vm_fn_751__detectDevtoolsByViewportGap = vm_fn_751__detectDevtoolsByViewportGap;
  entryMap[751] = vm_fn_751__detectDevtoolsByViewportGap;
  target.vm_fn_752__initializeEmbeddedBrowserDetectionHelpers = vm_fn_752__initializeEmbeddedBrowserDetectionHelpers;
  entryMap[752] = vm_fn_752__initializeEmbeddedBrowserDetectionHelpers;
  target.vm_fn_753__hasEmbeddedBrowserApis = vm_fn_753__hasEmbeddedBrowserApis;
  entryMap[753] = vm_fn_753__hasEmbeddedBrowserApis;
  target.vm_fn_754__initializeScreenAnomalyDetectionHelpers = vm_fn_754__initializeScreenAnomalyDetectionHelpers;
  entryMap[754] = vm_fn_754__initializeScreenAnomalyDetectionHelpers;
  target.vm_fn_755__hasScreenDescriptorAnomalies = vm_fn_755__hasScreenDescriptorAnomalies;
  entryMap[755] = vm_fn_755__hasScreenDescriptorAnomalies;
  target.vm_fn_756__isKnownScreenProperty = vm_fn_756__isKnownScreenProperty;
  entryMap[756] = vm_fn_756__isKnownScreenProperty;
  target.vm_fn_757__isTruthyValue5 = vm_fn_757__isTruthyValue5;
  entryMap[757] = vm_fn_757__isTruthyValue5;
  target.vm_fn_758__hasWindowFrameMismatch = vm_fn_758__hasWindowFrameMismatch;
  entryMap[758] = vm_fn_758__hasWindowFrameMismatch;
  target.vm_fn_759__initializeBuiltinTagValidationHelpers = vm_fn_759__initializeBuiltinTagValidationHelpers;
  entryMap[759] = vm_fn_759__initializeBuiltinTagValidationHelpers;
  target.vm_fn_760__getObjectTag4 = vm_fn_760__getObjectTag4;
  entryMap[760] = vm_fn_760__getObjectTag4;
  target.vm_fn_761__hasValidBuiltinEnvironmentTags = vm_fn_761__hasValidBuiltinEnvironmentTags;
  entryMap[761] = vm_fn_761__hasValidBuiltinEnvironmentTags;
  target.vm_fn_762__initializeNativeCodeDetectionHelpers = vm_fn_762__initializeNativeCodeDetectionHelpers;
  entryMap[762] = vm_fn_762__initializeNativeCodeDetectionHelpers;
  target.vm_fn_763__isNonNativeFunction = vm_fn_763__isNonNativeFunction;
  entryMap[763] = vm_fn_763__isNonNativeFunction;
  target.vm_fn_764__hasNativeApiAnomalies = vm_fn_764__hasNativeApiAnomalies;
  entryMap[764] = vm_fn_764__hasNativeApiAnomalies;
  target.vm_fn_765__initializePlatformConsistencyHelpers = vm_fn_765__initializePlatformConsistencyHelpers;
  entryMap[765] = vm_fn_765__initializePlatformConsistencyHelpers;
  target.vm_fn_766__detectPlatformProfile = vm_fn_766__detectPlatformProfile;
  entryMap[766] = vm_fn_766__detectPlatformProfile;
  target.vm_fn_767__initializeLocationAnomalyDetectionHelpers = vm_fn_767__initializeLocationAnomalyDetectionHelpers;
  entryMap[767] = vm_fn_767__initializeLocationAnomalyDetectionHelpers;
  target.vm_fn_768__hasLocationAnomalies = vm_fn_768__hasLocationAnomalies;
  entryMap[768] = vm_fn_768__hasLocationAnomalies;
  target.vm_fn_769__initializeNodeRuntimeDetectionHelpers = vm_fn_769__initializeNodeRuntimeDetectionHelpers;
  entryMap[769] = vm_fn_769__initializeNodeRuntimeDetectionHelpers;
  target.vm_fn_770__typeofHelper107 = vm_fn_770__typeofHelper107;
  entryMap[770] = vm_fn_770__typeofHelper107;
  target.vm_fn_771__baseTypeof10 = vm_fn_771__baseTypeof10;
  entryMap[771] = vm_fn_771__baseTypeof10;
  target.vm_fn_772__symbolAwareTypeof10 = vm_fn_772__symbolAwareTypeof10;
  entryMap[772] = vm_fn_772__symbolAwareTypeof10;
  target.vm_fn_773__isNodeRuntime2 = vm_fn_773__isNodeRuntime2;
  entryMap[773] = vm_fn_773__isNodeRuntime2;
  target.vm_fn_774__initializePhantomDetectionHelpers = vm_fn_774__initializePhantomDetectionHelpers;
  entryMap[774] = vm_fn_774__initializePhantomDetectionHelpers;
  target.vm_fn_775__hasPhantomRuntimeSignals = vm_fn_775__hasPhantomRuntimeSignals;
  entryMap[775] = vm_fn_775__hasPhantomRuntimeSignals;
  target.vm_fn_776__initializeAutomationSignalHelpers = vm_fn_776__initializeAutomationSignalHelpers;
  entryMap[776] = vm_fn_776__initializeAutomationSignalHelpers;
  target.vm_fn_777__hasHeadlessChromeAppVersion = vm_fn_777__hasHeadlessChromeAppVersion;
  entryMap[777] = vm_fn_777__hasHeadlessChromeAppVersion;
  target.vm_fn_778__hasHeadlessChromeUserAgent = vm_fn_778__hasHeadlessChromeUserAgent;
  entryMap[778] = vm_fn_778__hasHeadlessChromeUserAgent;
  target.vm_fn_779__hasWebdriverFlag = vm_fn_779__hasWebdriverFlag;
  entryMap[779] = vm_fn_779__hasWebdriverFlag;
  target.vm_fn_780__hasZeroRttConnection = vm_fn_780__hasZeroRttConnection;
  entryMap[780] = vm_fn_780__hasZeroRttConnection;
  target.vm_fn_781__hasEmptyUserAgentData = vm_fn_781__hasEmptyUserAgentData;
  entryMap[781] = vm_fn_781__hasEmptyUserAgentData;
  target.vm_fn_782__hasHeadlessViewportSignature = vm_fn_782__hasHeadlessViewportSignature;
  entryMap[782] = vm_fn_782__hasHeadlessViewportSignature;
  target.vm_fn_783__hasWindowAutomationMarker = vm_fn_783__hasWindowAutomationMarker;
  entryMap[783] = vm_fn_783__hasWindowAutomationMarker;
  target.vm_fn_784__hasWindowPropertyMarker = vm_fn_784__hasWindowPropertyMarker;
  entryMap[784] = vm_fn_784__hasWindowPropertyMarker;
  target.vm_fn_785__hasDocumentAutomationMarker = vm_fn_785__hasDocumentAutomationMarker;
  entryMap[785] = vm_fn_785__hasDocumentAutomationMarker;
  target.vm_fn_786__hasDocumentPropertyMarker = vm_fn_786__hasDocumentPropertyMarker;
  entryMap[786] = vm_fn_786__hasDocumentPropertyMarker;
  target.vm_fn_787__detectAutomationSignals = vm_fn_787__detectAutomationSignals;
  entryMap[787] = vm_fn_787__detectAutomationSignals;
  target.vm_fn_788__isTruthyValue6 = vm_fn_788__isTruthyValue6;
  entryMap[788] = vm_fn_788__isTruthyValue6;
  target.vm_fn_789__initializePluginSnapshotHelpers = vm_fn_789__initializePluginSnapshotHelpers;
  entryMap[789] = vm_fn_789__initializePluginSnapshotHelpers;
  target.vm_fn_790__collectPluginSnapshot = vm_fn_790__collectPluginSnapshot;
  entryMap[790] = vm_fn_790__collectPluginSnapshot;
  target.vm_fn_791__createPlatformMatchers = vm_fn_791__createPlatformMatchers;
  entryMap[791] = vm_fn_791__createPlatformMatchers;
  target.vm_fn_792__createForOfIteratorHelper2 = vm_fn_792__createForOfIteratorHelper2;
  entryMap[792] = vm_fn_792__createForOfIteratorHelper2;
  target.vm_fn_793__noopIteratorFinalize3 = vm_fn_793__noopIteratorFinalize3;
  entryMap[793] = vm_fn_793__noopIteratorFinalize3;
  target.vm_fn_794__nextArrayIteratorValue3 = vm_fn_794__nextArrayIteratorValue3;
  entryMap[794] = vm_fn_794__nextArrayIteratorValue3;
  target.vm_fn_795__throwIteratorError3 = vm_fn_795__throwIteratorError3;
  entryMap[795] = vm_fn_795__throwIteratorError3;
  target.vm_fn_796__startIterableIterator3 = vm_fn_796__startIterableIterator3;
  entryMap[796] = vm_fn_796__startIterableIterator3;
  target.vm_fn_797__nextIterableIteratorValue2 = vm_fn_797__nextIterableIteratorValue2;
  entryMap[797] = vm_fn_797__nextIterableIteratorValue2;
  target.vm_fn_798__captureIteratorError2 = vm_fn_798__captureIteratorError2;
  entryMap[798] = vm_fn_798__captureIteratorError2;
  target.vm_fn_799__finalizeIterableIterator3 = vm_fn_799__finalizeIterableIterator3;
  entryMap[799] = vm_fn_799__finalizeIterableIterator3;
  target.vm_fn_800__unsupportedIterableToArray6 = vm_fn_800__unsupportedIterableToArray6;
  entryMap[800] = vm_fn_800__unsupportedIterableToArray6;
  target.vm_fn_801__arrayLikeToArray6 = vm_fn_801__arrayLikeToArray6;
  entryMap[801] = vm_fn_801__arrayLikeToArray6;
  target.vm_fn_802__detectPlatformProfile2 = vm_fn_802__detectPlatformProfile2;
  entryMap[802] = vm_fn_802__detectPlatformProfile2;
  target.vm_fn_803__isAndroid = vm_fn_803__isAndroid;
  entryMap[803] = vm_fn_803__isAndroid;
  target.vm_fn_804__isIOS = vm_fn_804__isIOS;
  entryMap[804] = vm_fn_804__isIOS;
  target.vm_fn_805__isLinux = vm_fn_805__isLinux;
  entryMap[805] = vm_fn_805__isLinux;
  target.vm_fn_806__isMacOS = vm_fn_806__isMacOS;
  entryMap[806] = vm_fn_806__isMacOS;
  target.vm_fn_807__isWindows = vm_fn_807__isWindows;
  entryMap[807] = vm_fn_807__isWindows;
  target.vm_fn_808__isHarmonyOS = vm_fn_808__isHarmonyOS;
  entryMap[808] = vm_fn_808__isHarmonyOS;
  target.vm_fn_809__isOther2 = vm_fn_809__isOther2;
  entryMap[809] = vm_fn_809__isOther2;
  target.vm_fn_810__matchesCurrentPattern5 = vm_fn_810__matchesCurrentPattern5;
  entryMap[810] = vm_fn_810__matchesCurrentPattern5;
  target.vm_fn_811__createPlatformFamilyMatchers = vm_fn_811__createPlatformFamilyMatchers;
  entryMap[811] = vm_fn_811__createPlatformFamilyMatchers;
  target.vm_fn_812__createForOfIteratorHelper3 = vm_fn_812__createForOfIteratorHelper3;
  entryMap[812] = vm_fn_812__createForOfIteratorHelper3;
  target.vm_fn_813__noopIteratorFinalize4 = vm_fn_813__noopIteratorFinalize4;
  entryMap[813] = vm_fn_813__noopIteratorFinalize4;
  target.vm_fn_814__nextArrayIteratorValue4 = vm_fn_814__nextArrayIteratorValue4;
  entryMap[814] = vm_fn_814__nextArrayIteratorValue4;
  target.vm_fn_815__throwIteratorError4 = vm_fn_815__throwIteratorError4;
  entryMap[815] = vm_fn_815__throwIteratorError4;
  target.vm_fn_816__startIterableIterator4 = vm_fn_816__startIterableIterator4;
  entryMap[816] = vm_fn_816__startIterableIterator4;
  target.vm_fn_817__nextIterableIteratorValue3 = vm_fn_817__nextIterableIteratorValue3;
  entryMap[817] = vm_fn_817__nextIterableIteratorValue3;
  target.vm_fn_818__captureIteratorError3 = vm_fn_818__captureIteratorError3;
  entryMap[818] = vm_fn_818__captureIteratorError3;
  target.vm_fn_819__finalizeIterableIterator4 = vm_fn_819__finalizeIterableIterator4;
  entryMap[819] = vm_fn_819__finalizeIterableIterator4;
  target.vm_fn_820__unsupportedIterableToArray7 = vm_fn_820__unsupportedIterableToArray7;
  entryMap[820] = vm_fn_820__unsupportedIterableToArray7;
  target.vm_fn_821__arrayLikeToArray7 = vm_fn_821__arrayLikeToArray7;
  entryMap[821] = vm_fn_821__arrayLikeToArray7;
  target.vm_fn_822__detectPlatformFamily = vm_fn_822__detectPlatformFamily;
  entryMap[822] = vm_fn_822__detectPlatformFamily;
  target.vm_fn_823__isAndroid2 = vm_fn_823__isAndroid2;
  entryMap[823] = vm_fn_823__isAndroid2;
  target.vm_fn_824__isApple2 = vm_fn_824__isApple2;
  entryMap[824] = vm_fn_824__isApple2;
  target.vm_fn_825__isLinux2 = vm_fn_825__isLinux2;
  entryMap[825] = vm_fn_825__isLinux2;
  target.vm_fn_826__isWindows2 = vm_fn_826__isWindows2;
  entryMap[826] = vm_fn_826__isWindows2;
  target.vm_fn_827__isOther3 = vm_fn_827__isOther3;
  entryMap[827] = vm_fn_827__isOther3;
  target.vm_fn_828__matchesCurrentPattern6 = vm_fn_828__matchesCurrentPattern6;
  entryMap[828] = vm_fn_828__matchesCurrentPattern6;
})(globalThis);
