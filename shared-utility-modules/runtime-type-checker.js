// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 623935
         */
module.exports = function (module, exports, require) {
  let t = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"];
  let r = ["Function", "Generator", "AsyncGenerator", "GeneratorFunction", "AsyncGeneratorFunction", "AsyncFunction", "Observable", "Array", "Buffer", "Blob", "Object", "RegExp", "Date", "Error", "Map", "Set", "WeakMap", "WeakSet", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Promise", "URL", "FormData", "URLSearchParams", "HTMLElement", ...t];
  let n = ["null", "undefined", "string", "number", "bigint", "boolean", "symbol"];
  function o(e) {
    return a => typeof a === e;
  }
  let {
    toString: i
  } = Object.prototype;
  let s = e => {
    let a = i.call(e).slice(8, -1);
    if (/HTML\w+Element/.test(a) && c.domElement(e)) {
      return "HTMLElement";
    } else if (r.includes(a)) {
      return a;
    } else {
      return undefined;
    }
  };
  let l = e => a => s(a) === e;
  function c(e) {
    if (e === null) {
      return "null";
    }
    switch (typeof e) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
    }
    if (c.observable(e)) {
      return "Observable";
    }
    if (c.array(e)) {
      return "Array";
    }
    if (c.buffer(e)) {
      return "Buffer";
    }
    let a = s(e);
    if (a) {
      return a;
    }
    if (e instanceof String || e instanceof Boolean || e instanceof Number) {
      throw TypeError("Please don't use object wrappers for primitive types");
    }
    return "Object";
  }
  c.undefined = o("undefined");
  c.string = o("string");
  let u = o("number");
  c.number = e => u(e) && !c.nan(e);
  c.bigint = o("bigint");
  c.function_ = o("function");
  c.null_ = e => e === null;
  c.class_ = e => c.function_(e) && e.toString().startsWith("class ");
  c.boolean = e => e === true || e === false;
  c.symbol = o("symbol");
  c.numericString = e => c.string(e) && !c.emptyStringOrWhitespace(e) && !Number.isNaN(Number(e));
  c.array = (e, a) => !!Array.isArray(e) && (!c.function_(a) || e.every(a));
  c.buffer = e => {
    var a;
    var t;
    var r;
    return (r = (t = (a = e == null ? undefined : e.constructor) === null || a === undefined ? undefined : a.isBuffer) === null || t === undefined ? undefined : t.call(a, e)) !== null && r !== undefined && r;
  };
  c.blob = e => l("Blob")(e);
  c.nullOrUndefined = e => c.null_(e) || c.undefined(e);
  c.object = e => !c.null_(e) && (typeof e == "object" || c.function_(e));
  c.iterable = e => c.function_(e == null ? undefined : e[Symbol.iterator]);
  c.asyncIterable = e => c.function_(e == null ? undefined : e[Symbol.asyncIterator]);
  c.generator = e => c.iterable(e) && c.function_(e == null ? undefined : e.next) && c.function_(e == null ? undefined : e.throw);
  c.asyncGenerator = e => c.asyncIterable(e) && c.function_(e.next) && c.function_(e.throw);
  c.nativePromise = e => l("Promise")(e);
  let d = e => c.function_(e == null ? undefined : e.then) && c.function_(e == null ? undefined : e.catch);
  c.promise = e => c.nativePromise(e) || d(e);
  c.generatorFunction = l("GeneratorFunction");
  c.asyncGeneratorFunction = e => s(e) === "AsyncGeneratorFunction";
  c.asyncFunction = e => s(e) === "AsyncFunction";
  c.boundFunction = e => c.function_(e) && !e.hasOwnProperty("prototype");
  c.regExp = l("RegExp");
  c.date = l("Date");
  c.error = l("Error");
  c.map = e => l("Map")(e);
  c.set = e => l("Set")(e);
  c.weakMap = e => l("WeakMap")(e);
  c.weakSet = e => l("WeakSet")(e);
  c.int8Array = l("Int8Array");
  c.uint8Array = l("Uint8Array");
  c.uint8ClampedArray = l("Uint8ClampedArray");
  c.int16Array = l("Int16Array");
  c.uint16Array = l("Uint16Array");
  c.int32Array = l("Int32Array");
  c.uint32Array = l("Uint32Array");
  c.float32Array = l("Float32Array");
  c.float64Array = l("Float64Array");
  c.bigInt64Array = l("BigInt64Array");
  c.bigUint64Array = l("BigUint64Array");
  c.arrayBuffer = l("ArrayBuffer");
  c.sharedArrayBuffer = l("SharedArrayBuffer");
  c.dataView = l("DataView");
  c.enumCase = (e, a) => Object.values(a).includes(e);
  c.directInstanceOf = (e, a) => Object.getPrototypeOf(e) === a.prototype;
  c.urlInstance = e => l("URL")(e);
  c.urlString = e => {
    if (!c.string(e)) {
      return false;
    }
    try {
      new URL(e);
      return true;
    } catch (e) {
      return false;
    }
  };
  c.truthy = e => !!e;
  c.falsy = e => !e;
  c.nan = e => Number.isNaN(e);
  c.primitive = e => {
    var a;
    return c.null_(e) || (a = typeof e, n.includes(a));
  };
  c.integer = e => Number.isInteger(e);
  c.safeInteger = e => Number.isSafeInteger(e);
  c.plainObject = e => {
    if (i.call(e) !== "[object Object]") {
      return false;
    }
    let a = Object.getPrototypeOf(e);
    return a === null || a === Object.getPrototypeOf({});
  };
  c.typedArray = e => {
    var a;
    a = s(e);
    return t.includes(a);
  };
  let p = e => c.safeInteger(e) && e >= 0;
  c.arrayLike = e => !c.nullOrUndefined(e) && !c.function_(e) && p(e.length);
  c.inRange = (e, a) => {
    if (c.number(a)) {
      return e >= Math.min(0, a) && e <= Math.max(a, 0);
    }
    if (c.array(a) && a.length === 2) {
      return e >= Math.min(...a) && e <= Math.max(...a);
    }
    throw TypeError(`Invalid range: ${JSON.stringify(a)}`);
  };
  let f = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
  c.domElement = e => c.object(e) && e.nodeType === 1 && c.string(e.nodeName) && !c.plainObject(e) && f.every(a => a in e);
  c.observable = e => {
    var a;
    var t;
    return !!e && (e === ((a = e[Symbol.observable]) === null || a === undefined ? undefined : a.call(e)) || e === ((t = e["@@observable"]) === null || t === undefined ? undefined : t.call(e)));
  };
  c.nodeStream = e => c.object(e) && c.function_(e.pipe) && !c.observable(e);
  c.infinite = e => e === Infinity || e === -Infinity;
  let g = e => a => c.integer(a) && Math.abs(a % 2) === e;
  c.evenInteger = g(0);
  c.oddInteger = g(1);
  c.emptyArray = e => c.array(e) && e.length === 0;
  c.nonEmptyArray = e => c.array(e) && e.length > 0;
  c.emptyString = e => c.string(e) && e.length === 0;
  let y = e => c.string(e) && !/\S/.test(e);
  c.emptyStringOrWhitespace = e => c.emptyString(e) || y(e);
  c.nonEmptyString = e => c.string(e) && e.length > 0;
  c.nonEmptyStringAndNotWhitespace = e => c.string(e) && !c.emptyStringOrWhitespace(e);
  c.emptyObject = e => c.object(e) && !c.map(e) && !c.set(e) && Object.keys(e).length === 0;
  c.nonEmptyObject = e => c.object(e) && !c.map(e) && !c.set(e) && Object.keys(e).length > 0;
  c.emptySet = e => c.set(e) && e.size === 0;
  c.nonEmptySet = e => c.set(e) && e.size > 0;
  c.emptyMap = e => c.map(e) && e.size === 0;
  c.nonEmptyMap = e => c.map(e) && e.size > 0;
  c.propertyKey = e => c.any([c.string, c.number, c.symbol], e);
  c.formData = e => l("FormData")(e);
  c.urlSearchParams = e => l("URLSearchParams")(e);
  let h = (e, a, t) => {
    if (!c.function_(a)) {
      throw TypeError(`Invalid predicate: ${JSON.stringify(a)}`);
    }
    if (t.length === 0) {
      throw TypeError("Invalid number of values");
    }
    return e.call(t, a);
  };
  c.any = (e, ...a) => (c.array(e) ? e : [e]).some(e => h(Array.prototype.some, e, a));
  c.all = (e, ...a) => h(Array.prototype.every, e, a);
  let m = (e, a, t, r = {}) => {
    if (!e) {
      let {
        multipleValues: e
      } = r;
      let n = e ? `received values of types ${[...new Set(t.map(e => `\`${c(e)}\``))].join(", ")}` : `received value of type \`${c(t)}\``;
      throw TypeError(`Expected value which is \`${a}\`, ${n}.`);
    }
  };
  exports.assert = {
    undefined: e => m(c.undefined(e), "undefined", e),
    string: e => m(c.string(e), "string", e),
    number: e => m(c.number(e), "number", e),
    bigint: e => m(c.bigint(e), "bigint", e),
    function_: e => m(c.function_(e), "Function", e),
    null_: e => m(c.null_(e), "null", e),
    class_: e => m(c.class_(e), "Class", e),
    boolean: e => m(c.boolean(e), "boolean", e),
    symbol: e => m(c.symbol(e), "symbol", e),
    numericString: e => m(c.numericString(e), "string with a number", e),
    array: (e, a) => {
      m(c.array(e), "Array", e);
      if (a) {
        e.forEach(a);
      }
    },
    buffer: e => m(c.buffer(e), "Buffer", e),
    blob: e => m(c.blob(e), "Blob", e),
    nullOrUndefined: e => m(c.nullOrUndefined(e), "null or undefined", e),
    object: e => m(c.object(e), "Object", e),
    iterable: e => m(c.iterable(e), "Iterable", e),
    asyncIterable: e => m(c.asyncIterable(e), "AsyncIterable", e),
    generator: e => m(c.generator(e), "Generator", e),
    asyncGenerator: e => m(c.asyncGenerator(e), "AsyncGenerator", e),
    nativePromise: e => m(c.nativePromise(e), "native Promise", e),
    promise: e => m(c.promise(e), "Promise", e),
    generatorFunction: e => m(c.generatorFunction(e), "GeneratorFunction", e),
    asyncGeneratorFunction: e => m(c.asyncGeneratorFunction(e), "AsyncGeneratorFunction", e),
    asyncFunction: e => m(c.asyncFunction(e), "AsyncFunction", e),
    boundFunction: e => m(c.boundFunction(e), "Function", e),
    regExp: e => m(c.regExp(e), "RegExp", e),
    date: e => m(c.date(e), "Date", e),
    error: e => m(c.error(e), "Error", e),
    map: e => m(c.map(e), "Map", e),
    set: e => m(c.set(e), "Set", e),
    weakMap: e => m(c.weakMap(e), "WeakMap", e),
    weakSet: e => m(c.weakSet(e), "WeakSet", e),
    int8Array: e => m(c.int8Array(e), "Int8Array", e),
    uint8Array: e => m(c.uint8Array(e), "Uint8Array", e),
    uint8ClampedArray: e => m(c.uint8ClampedArray(e), "Uint8ClampedArray", e),
    int16Array: e => m(c.int16Array(e), "Int16Array", e),
    uint16Array: e => m(c.uint16Array(e), "Uint16Array", e),
    int32Array: e => m(c.int32Array(e), "Int32Array", e),
    uint32Array: e => m(c.uint32Array(e), "Uint32Array", e),
    float32Array: e => m(c.float32Array(e), "Float32Array", e),
    float64Array: e => m(c.float64Array(e), "Float64Array", e),
    bigInt64Array: e => m(c.bigInt64Array(e), "BigInt64Array", e),
    bigUint64Array: e => m(c.bigUint64Array(e), "BigUint64Array", e),
    arrayBuffer: e => m(c.arrayBuffer(e), "ArrayBuffer", e),
    sharedArrayBuffer: e => m(c.sharedArrayBuffer(e), "SharedArrayBuffer", e),
    dataView: e => m(c.dataView(e), "DataView", e),
    enumCase: (e, a) => m(c.enumCase(e, a), "EnumCase", e),
    urlInstance: e => m(c.urlInstance(e), "URL", e),
    urlString: e => m(c.urlString(e), "string with a URL", e),
    truthy: e => m(c.truthy(e), "truthy", e),
    falsy: e => m(c.falsy(e), "falsy", e),
    nan: e => m(c.nan(e), "NaN", e),
    primitive: e => m(c.primitive(e), "primitive", e),
    integer: e => m(c.integer(e), "integer", e),
    safeInteger: e => m(c.safeInteger(e), "integer", e),
    plainObject: e => m(c.plainObject(e), "plain object", e),
    typedArray: e => m(c.typedArray(e), "TypedArray", e),
    arrayLike: e => m(c.arrayLike(e), "array-like", e),
    domElement: e => m(c.domElement(e), "HTMLElement", e),
    observable: e => m(c.observable(e), "Observable", e),
    nodeStream: e => m(c.nodeStream(e), "Node.js Stream", e),
    infinite: e => m(c.infinite(e), "infinite number", e),
    emptyArray: e => m(c.emptyArray(e), "empty array", e),
    nonEmptyArray: e => m(c.nonEmptyArray(e), "non-empty array", e),
    emptyString: e => m(c.emptyString(e), "empty string", e),
    emptyStringOrWhitespace: e => m(c.emptyStringOrWhitespace(e), "empty string or whitespace", e),
    nonEmptyString: e => m(c.nonEmptyString(e), "non-empty string", e),
    nonEmptyStringAndNotWhitespace: e => m(c.nonEmptyStringAndNotWhitespace(e), "non-empty string and not whitespace", e),
    emptyObject: e => m(c.emptyObject(e), "empty object", e),
    nonEmptyObject: e => m(c.nonEmptyObject(e), "non-empty object", e),
    emptySet: e => m(c.emptySet(e), "empty set", e),
    nonEmptySet: e => m(c.nonEmptySet(e), "non-empty set", e),
    emptyMap: e => m(c.emptyMap(e), "empty map", e),
    nonEmptyMap: e => m(c.nonEmptyMap(e), "non-empty map", e),
    propertyKey: e => m(c.propertyKey(e), "PropertyKey", e),
    formData: e => m(c.formData(e), "FormData", e),
    urlSearchParams: e => m(c.urlSearchParams(e), "URLSearchParams", e),
    evenInteger: e => m(c.evenInteger(e), "even integer", e),
    oddInteger: e => m(c.oddInteger(e), "odd integer", e),
    directInstanceOf: (e, a) => m(c.directInstanceOf(e, a), "T", e),
    inRange: (e, a) => m(c.inRange(e, a), "in range", e),
    any: (e, ...a) => m(c.any(e, ...a), "predicate returns truthy for any value", a, {
      multipleValues: true
    }),
    all: (e, ...a) => m(c.all(e, ...a), "predicate returns truthy for all values", a, {
      multipleValues: true
    })
  };
  Object.defineProperties(c, {
    class: {
      value: c.class_
    },
    function: {
      value: c.function_
    },
    null: {
      value: c.null_
    }
  });
  Object.defineProperties(exports.assert, {
    class: {
      value: exports.assert.class_
    },
    function: {
      value: exports.assert.function_
    },
    null: {
      value: exports.assert.null_
    }
  });
  exports.default = c;
  module.exports = c;
  module.exports.default = c;
  module.exports.assert = exports.assert;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}