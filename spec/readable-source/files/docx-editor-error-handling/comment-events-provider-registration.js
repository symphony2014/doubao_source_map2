// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerCommentEventsProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 200004
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var commentEventsProviderName = require("comment-events-provider-name") /*id: 751145*/;
  function v(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let b = dependencyInjectionContainer.Provide(commentEventsProviderName.commentEventsToken)((n = (c = class {
    constructor() {
      var e;
      var i;
      e = "blockManager";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      v(this, "commentReadySubject", new replaySubject.ReplaySubject(1));
      v(this, "commentReady$", this.commentReadySubject);
      v(this, "resolveCommentSubject", new observableSubjectClass.Subject());
      v(this, "resolveComment$", this.resolveCommentSubject);
      v(this, "reopenCommentSubject", new observableSubjectClass.Subject());
      v(this, "reopenComment$", this.reopenCommentSubject);
      v(this, "deletedCommentSubject", new observableSubjectClass.Subject());
      v(this, "deletedComment$", this.deletedCommentSubject);
      v(this, "addedCommentSubject", new observableSubjectClass.Subject());
      v(this, "addedComment$", this.addedCommentSubject);
      v(this, "commentPositionSubject", new replaySubject.ReplaySubject(1));
      v(this, "commentPositionChange$", this.commentPositionSubject);
      v(this, "commentRelationSubject", new replaySubject.ReplaySubject(1));
      v(this, "commentRelationChange$", this.commentRelationSubject);
      v(this, "trustedRelationSubject", new observableSubjectClass.Subject());
      v(this, "trustedRelation$", this.trustedRelationSubject);
      v(this, "triggers", {
        commentReady: e => {
          this.commentReadySubject.next(e);
        },
        resolveComment: e => {
          this.resolveCommentSubject.next(e);
        },
        reopenComment: e => {
          this.reopenCommentSubject.next(e);
        },
        deletedComment: e => {
          this.deletedCommentSubject.next(e);
        },
        addedComment: e => {
          this.addedCommentSubject.next(e);
        },
        commentPositionChange: e => {
          this.commentPositionSubject.next(e);
        },
        commentRelationChange: e => {
          this.commentRelationSubject.next(e);
        },
        trustedRelation: e => {
          this.trustedRelationSubject.next(e);
        }
      });
    }
  }).prototype, o = "blockManager", l = [blockManagerToken.blockManagerToken], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  function y() {
    docxEditorCore.registerProviders([b]);
  }
  require.d(exports, {
    registerCommentEventsProvider: function () {
      return y;
    }
  });
}