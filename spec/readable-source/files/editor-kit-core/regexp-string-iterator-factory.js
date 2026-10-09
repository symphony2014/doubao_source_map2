// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Resolved require(237121) to 'symbol-support-check_1'
// - Renamed variable 'i' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'a' to 'stringAdvanceIndexUtil'
// - Resolved require(537963) to 'string-advance-index-util'
// - Renamed variable 's' to 'iteratorResultAssertUtil'
// - Resolved require(392989) to 'iterator-result-assert-util'
// - Renamed variable 'c' to 'safeDefinePropertyUtil'
// - Resolved require(149969) to 'safe-define-property-util'
// - Renamed variable 'f' to 'objectPropertyGetter_1'
// - Resolved require(91546) to 'object-property-getter_1'
// - Renamed variable 'l' to 'objectCreateWithSlots'
// - Resolved require(863083) to 'object-create-with-slots'
// - Renamed variable 'p' to 'regexpExecUtil'
// - Resolved require(184438) to 'regexp-exec-util'
// - Renamed variable 'd' to 'propertyAssignValidator'
// - Resolved require(755146) to 'property-assign-validator'
// - Renamed variable 'h' to 'safeIntegerClamp'
// - Resolved require(259631) to 'safe-integer-clamp'
// - Renamed variable 'y' to 'stringIntrinsicUtil'
// - Resolved require(162384) to 'string-intrinsic-util'
// - Renamed variable 'b' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// - Renamed variable 'g' to 'sideChannelSlotStore'
// - Resolved require(405467) to 'side-channel-slot-store'
// - Renamed variable 'v' to 'setSymbolToStringTag'
// - Resolved require(349988) to 'set-symbol-to-string-tag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 499078
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var o = require("symbol-support-check_1") /*id: 237121*/();
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var u = getIntrinsicUtil("%IteratorPrototype%", true);
  var stringAdvanceIndexUtil = require("string-advance-index-util") /*id: 537963*/;
  var iteratorResultAssertUtil = require("iterator-result-assert-util") /*id: 392989*/;
  var safeDefinePropertyUtil = require("safe-define-property-util") /*id: 149969*/;
  var objectPropertyGetter_1 = require("object-property-getter_1") /*id: 91546*/;
  var objectCreateWithSlots = require("object-create-with-slots") /*id: 863083*/;
  var regexpExecUtil = require("regexp-exec-util") /*id: 184438*/;
  var propertyAssignValidator = require("property-assign-validator") /*id: 755146*/;
  var safeIntegerClamp = require("safe-integer-clamp") /*id: 259631*/;
  var stringIntrinsicUtil = require("string-intrinsic-util") /*id: 162384*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  var sideChannelSlotStore = require("side-channel-slot-store") /*id: 405467*/;
  var setSymbolToStringTag = require("set-symbol-to-string-tag") /*id: 349988*/;
  function m(t, e, r, n) {
    if (typeof e != "string") {
      throw new typeErrorConstructor("`S` must be a string");
    }
    if (typeof r != "boolean") {
      throw new typeErrorConstructor("`global` must be a boolean");
    }
    if (typeof n != "boolean") {
      throw new typeErrorConstructor("`fullUnicode` must be a boolean");
    }
    sideChannelSlotStore.set(this, "[[IteratingRegExp]]", t);
    sideChannelSlotStore.set(this, "[[IteratedString]]", e);
    sideChannelSlotStore.set(this, "[[Global]]", r);
    sideChannelSlotStore.set(this, "[[Unicode]]", n);
    sideChannelSlotStore.set(this, "[[Done]]", false);
  }
  if (u) {
    m.prototype = objectCreateWithSlots(u);
  }
  safeDefinePropertyUtil(m.prototype, "next", function () {
    if (!isObjectOrFunction(this)) {
      throw new typeErrorConstructor("receiver must be an object");
    }
    if (!(this instanceof m) || !sideChannelSlotStore.has(this, "[[IteratingRegExp]]") || !sideChannelSlotStore.has(this, "[[IteratedString]]") || !sideChannelSlotStore.has(this, "[[Global]]") || !sideChannelSlotStore.has(this, "[[Unicode]]") || !sideChannelSlotStore.has(this, "[[Done]]")) {
      throw new typeErrorConstructor("\"this\" value must be a RegExpStringIterator instance");
    }
    if (sideChannelSlotStore.get(this, "[[Done]]")) {
      return iteratorResultAssertUtil(undefined, true);
    }
    var t = sideChannelSlotStore.get(this, "[[IteratingRegExp]]");
    var e = sideChannelSlotStore.get(this, "[[IteratedString]]");
    var r = sideChannelSlotStore.get(this, "[[Global]]");
    var n = sideChannelSlotStore.get(this, "[[Unicode]]");
    var o = regexpExecUtil(t, e);
    if (o === null) {
      sideChannelSlotStore.set(this, "[[Done]]", true);
      return iteratorResultAssertUtil(undefined, true);
    }
    if (r) {
      if (stringIntrinsicUtil(objectPropertyGetter_1(o, "0")) === "") {
        var u = stringAdvanceIndexUtil(e, safeIntegerClamp(objectPropertyGetter_1(t, "lastIndex")), n);
        propertyAssignValidator(t, "lastIndex", u, true);
      }
      return iteratorResultAssertUtil(o, false);
    }
    sideChannelSlotStore.set(this, "[[Done]]", true);
    return iteratorResultAssertUtil(o, false);
  }, false);
  if (o) {
    setSymbolToStringTag(m.prototype, "RegExp String Iterator");
    if (Symbol.iterator && typeof m.prototype[Symbol.iterator] != "function") {
      safeDefinePropertyUtil(m.prototype, Symbol.iterator, function () {
        return this;
      }, false);
    }
  }
  module.exports = function (t, e, r, n) {
    return new m(t, e, r, n);
  };
}