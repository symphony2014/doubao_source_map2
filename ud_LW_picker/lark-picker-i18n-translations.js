// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_LW_picker.4922b94a.js
         * chunkId: 43427
         * moduleId: 933293
         */
module.exports = function (module, exports, require) {
  var a;
  var n;
  var o;
  var _;
  var c;
  var u;
  var i;
  var s;
  var l;
  var k;
  var L;
  var m;
  var p;
  var h;
  var d;
  var C;
  var g;
  var T;
  var S;
  var b;
  var P;
  var y;
  var f;
  var M;
  var N;
  var G;
  var E;
  var x;
  var I;
  var v;
  var w;
  var U;
  var D;
  var B;
  var A;
  var z;
  var R;
  var O;
  var F;
  var W;
  var K;
  var H;
  var j;
  var V;
  var q;
  var J;
  var Y;
  var X;
  var Z;
  var Q;
  var $;
  var ee;
  var et;
  var er;
  var ea = {
    "de-DE": {
      LWPicker: (a = function (e, t) {
        var r = !String(e).split(".")[1];
        if (t) {
          return "other";
        } else if (e == 1 && r) {
          return "one";
        } else {
          return "other";
        }
      }, n = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, o = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Vertrauenswürdige Partner",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Externe Benutzer können nicht hinzugefügt werden.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Aufgrund von Einschränkungen in den Sicherheitsrichtlinien kann der Chat nicht gesichert werden",
        Lark_Chat_OfficialTag: "Offiziell",
        Lark_Contacts_EmailContacts: "E-Mail-Kontakte",
        Lark_Contacts_PublicMailbox: "Öffentliches Postfach",
        Lark_Core_SuperAdministratorLable: "Superadministrator",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Verbinden",
        Lark_Group_PublicGroupLabel: "Öffentlich",
        Lark_Group_SelectedMultipleDeptDialogContent: "Alle neuen Mitglieder der ausgewählten Abteilungen treten dieser Gruppe automatisch bei.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Die Abteilung, die Sie ausgewählt haben, umfasst Unterabteilungen. Fortfahren?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Alle neuen Mitglieder der ausgewählten Gruppen treten dieser Gruppe automatisch bei.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Mehrere Gruppen auswählen?",
        Lark_Groups_CannotBeSentDue: "Kann aufgrund der Berechtigungsverwaltung nicht gesendet werden.",
        Lark_Groups_MyGroups: "Gruppen, die ich verwalte",
        Lark_Groups_NoPermissionSelectDept: "Sie können nur von Ihnen verwaltete Abteilungen auswählen.",
        Lark_Groups_NoPermissionSelectGroup: "Keine Berechtigung zum Auswählen dieser Gruppe.",
        Lark_Groups_NoPermissionToAdd: "Keine Berechtigung zum Hinzufügen",
        Lark_IM_CantSelectBlocked_Hover: "Sie können diesen Benutzer aufgrund seiner Einstellungen nicht auswählen.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Es können maximal 200 Namen stapelweise eingefügt werden. Bitte anpassen und erneut versuchen.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Die Anzahl der Namen, die Sie eingefügt haben, hat die Obergrenze überschritten. Bitte passen Sie dies an und versuchen Sie es erneut.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Zurück",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Alle anzeigen",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "„" + e.name + "“";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Suchen nicht möglich. Bitte versuchen Sie es später erneut.",
        Lark_IM_ForwardToRecentChats_Title: "Zuletzt verwendet",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Kürzlich weitergeleitet an",
        Lark_IM_GroupNum_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: n(e.select_count, "select_count") + " Gruppe",
            other: n(e.select_count, "select_count") + " Gruppen"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: "Ausgewählt: " + n(e.select_count, "select_count") + " Chat",
            other: "Ausgewählt: " + n(e.select_count, "select_count") + " Chats"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: "Ausgewählt: " + n(e.select_count, "select_count") + " Datei",
            other: "Ausgewählt: " + n(e.select_count, "select_count") + " Dateien"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return o(e.num, 0, a, {
            one: n(e.num, "num") + " Benutzergruppe",
            other: n(e.num, "num") + " Benutzergruppen"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Benutzergruppen",
        Lark_IM_SelectNumMember_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: "Ausgewählt: " + n(e.select_count, "select_count") + " Mitglied",
            other: "Ausgewählt: " + n(e.select_count, "select_count") + " Mitglieder"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Vorschau nicht möglich",
        Lark_Legacy_Cancel: "Abbrechen",
        Lark_Legacy_Confirm: "Bestätigen",
        Lark_Legacy_Contact: "Kontakte",
        Lark_Legacy_DefaultName: "Unbenanntes Dokument",
        Lark_Legacy_EmptyList: "Leere Liste",
        Lark_Legacy_ItemDesc: function (e) {
          return "Besitzer: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return o(e.number, 0, a, {
            one: n(e.number, "number") + "\xA0Abteilung",
            other: n(e.number, "number") + "\xA0Abteilungen"
          });
        },
        Lark_Legacy_Search: "Suchen",
        Lark_Legacy_SearchEmpty: "Keine übereinstimmenden Ergebnisse",
        Lark_Legacy_StructureDepartments: "Organisationskontakte",
        Lark_Legacy_StructureExternal: "Externe Kontakte",
        Lark_Legacy_Subdepartment: "Erweitern",
        Lark_Legacy_Sure: "Bestätigen",
        Lark_Legacy_TableRecentchats: "Neueste Chats",
        Lark_Legacy_TooManyChatsToForward: "Zu viele Chats ausgewählt.",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Sie haben diesen Benutzer blockiert. Sie können diesen Benutzer nicht zur Gruppe hinzufügen.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Sie wurden von diesem Benutzer blockiert. Sie können diesen Benutzer nicht zur Gruppe hinzufügen.",
        Lark_Notification_DndBuzzUnable: "Aufgrund der vom Administrator festgelegten Einschränkungen kann diese Person keine Buzz-Nachrichten erhalten",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: n(e.select_count, "select_count") + " E-Mail-Kontakt",
            other: n(e.select_count, "select_count") + " E-Mail-Kontakte"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: n(e.select_count, "select_count") + " E-Mail",
            other: n(e.select_count, "select_count") + " E-Mails"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return o(e.select_count, 0, a, {
            one: n(e.select_count, "select_count") + " öffentliches Postfach",
            other: n(e.select_count, "select_count") + " öffentliche Postfächer"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Wiki-Bereich: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Extern",
        Lark_Status_OrganizationSupervisor: "Organisationsverantwortlicher",
        Lark_Status_SupervisorMain: "Hauptverantwortlicher",
        Lark_Status_SupervisorTag: "Vorgesetzter",
        Lark_Status_TagUnregistered: "Nicht aktiv",
        Lark_UD_Picker_UnableToAddGroupType: "Dieser Gruppentyp kann nicht hinzugefügt werden",
        Lark_Universe_React_Picker_Cancel: "Abbrechen",
        Lark_Universe_React_Picker_Confirm: "Bestätigen",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Eingabe)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Strg+Eingabe)",
        Project_T_MemberAlreadyExists_HoverToast: "Das Mitglied ist bereits vorhanden"
      })
    },
    "en-US": {
      LWPicker: (_ = function (e, t) {
        var r = String(e).split(".");
        var a = !r[1];
        var n = Number(r[0]) == e;
        var o = n && r[0].slice(-1);
        var _ = n && r[0].slice(-2);
        if (t) {
          if (o == 1 && _ != 11) {
            return "one";
          } else if (o == 2 && _ != 12) {
            return "two";
          } else if (o == 3 && _ != 13) {
            return "few";
          } else {
            return "other";
          }
        } else if (e == 1 && a) {
          return "one";
        } else {
          return "other";
        }
      }, c = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, u = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Trusted Parties",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Unable to add external users.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Unable to secure chat due to security policy restrictions",
        Lark_Chat_OfficialTag: "Official",
        Lark_Contacts_EmailContacts: "Email Contacts",
        Lark_Contacts_PublicMailbox: "Public mailbox",
        Lark_Core_SuperAdministratorLable: "Primary administrator",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Connect",
        Lark_Group_PublicGroupLabel: "Public",
        Lark_Group_SelectedMultipleDeptDialogContent: "All the new members of the selected departments will join this group automatically.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "The department you selected contains sub-departments. Continue?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "All the new members of the selected groups will join this group automatically.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Select multiple groups?",
        Lark_Groups_CannotBeSentDue: "Cannot be sent due to permission management",
        Lark_Groups_MyGroups: "Groups I Manage",
        Lark_Groups_NoPermissionSelectDept: "You can only select departments you manage",
        Lark_Groups_NoPermissionSelectGroup: "No permission to select this group.",
        Lark_Groups_NoPermissionToAdd: "No permission to add",
        Lark_IM_CantSelectBlocked_Hover: "You can't select this user due to their settings.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "200 names can be batch pasted maximum. Please adjust and try again.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "The number of names you've pasted has exceeded the upper limit. Please adjust and try again.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Go Back",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "View All",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Unable to search. Please try again later.",
        Lark_IM_ForwardToRecentChats_Title: "Recent",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Recently forwarded to",
        Lark_IM_GroupNum_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: c(e.select_count, "select_count") + " group",
            other: c(e.select_count, "select_count") + " groups"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: "Selected: " + c(e.select_count, "select_count") + " chat",
            other: "Selected: " + c(e.select_count, "select_count") + " chats"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: "Selected: " + c(e.select_count, "select_count") + " file",
            other: "Selected: " + c(e.select_count, "select_count") + " files"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return u(e.num, 0, _, {
            one: c(e.num, "num") + " user group",
            other: c(e.num, "num") + " user groups"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "User Groups",
        Lark_IM_SelectNumMember_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: "Selected: " + c(e.select_count, "select_count") + " member",
            other: "Selected: " + c(e.select_count, "select_count") + " members"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Unable to preview",
        Lark_Legacy_Cancel: "Cancel",
        Lark_Legacy_Confirm: "Confirm",
        Lark_Legacy_Contact: "Contacts",
        Lark_Legacy_DefaultName: "Untitled Document",
        Lark_Legacy_EmptyList: "Empty list",
        Lark_Legacy_ItemDesc: function (e) {
          return "Owner: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return u(e.number, 0, _, {
            one: c(e.number, "number") + " department",
            other: c(e.number, "number") + " departments"
          });
        },
        Lark_Legacy_Search: "Search",
        Lark_Legacy_SearchEmpty: "No matching results",
        Lark_Legacy_StructureDepartments: "Organization Contacts",
        Lark_Legacy_StructureExternal: "External Contacts",
        Lark_Legacy_Subdepartment: "Expand",
        Lark_Legacy_Sure: "Confirm",
        Lark_Legacy_TableRecentchats: "Recent chats",
        Lark_Legacy_TooManyChatsToForward: "Too many chats selected",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "You've blocked this user. You can't add this user to the group.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "You're blocked by this user. You can't add this user to the group.",
        Lark_Notification_DndBuzzUnable: "This person cannot be buzzed due to restrictions set by the administrator.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: c(e.select_count, "select_count") + " email contact",
            other: c(e.select_count, "select_count") + " email contacts"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: c(e.select_count, "select_count") + " email",
            other: c(e.select_count, "select_count") + " emails"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return u(e.select_count, 0, _, {
            one: c(e.select_count, "select_count") + " public mailbox",
            other: c(e.select_count, "select_count") + " public mailboxes"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Wiki space: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "External",
        Lark_Status_OrganizationSupervisor: "Organization supervisor",
        Lark_Status_SupervisorMain: "Main supervisor",
        Lark_Status_SupervisorTag: "Supervisor",
        Lark_Status_TagUnregistered: "Inactive",
        Lark_UD_Picker_UnableToAddGroupType: "Unable to add this group type",
        Lark_Universe_React_Picker_Cancel: "Cancel",
        Lark_Universe_React_Picker_Confirm: "Confirm",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "Member already exists"
      })
    },
    "es-ES": {
      LWPicker: (i = function (e, t) {
        if (t) {
          return "other";
        } else if (e == 1) {
          return "one";
        } else {
          return "other";
        }
      }, s = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, l = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Entidades de confianza",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "No se han podido agregar usuarios externos.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "No se puede asegurar el chat debido a las restricciones de la política de seguridad",
        Lark_Chat_OfficialTag: "Oficial",
        Lark_Contacts_EmailContacts: "Contactos de correo electrónico",
        Lark_Contacts_PublicMailbox: "Buzón público",
        Lark_Core_SuperAdministratorLable: "Superadministrador",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Conectar",
        Lark_Group_PublicGroupLabel: "Público",
        Lark_Group_SelectedMultipleDeptDialogContent: "Todos los miembros nuevos de los departamentos seleccionados se unirán a este grupo automáticamente.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "El departamento que has seleccionado contiene subdepartamentos. ¿Continuar?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Todos los miembros nuevos de los grupos seleccionados se unirán a este grupo automáticamente.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "¿Seleccionar varios grupos?",
        Lark_Groups_CannotBeSentDue: "No se puede enviar debido a la administración de permisos",
        Lark_Groups_MyGroups: "Grupos que administro",
        Lark_Groups_NoPermissionSelectDept: "Sólo puedes seleccionar los departamentos que gestiones",
        Lark_Groups_NoPermissionSelectGroup: "No tienes permiso para seleccionar este grupo.",
        Lark_Groups_NoPermissionToAdd: "No tienes permiso para agregar",
        Lark_IM_CantSelectBlocked_Hover: "No puedes seleccionar a este usuario debido a su configuración.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "El máximo de nombres que se puede pegar en lote es de 200. Ajusta la selección e inténtalo de nuevo.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "El número de nombres que has copiado ha excedido el límite. Ajústalo e inténtalo de nuevo.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Volver",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Ver todo",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "No se puede buscar. Inténtalo de nuevo más tarde.",
        Lark_IM_ForwardToRecentChats_Title: "Reciente",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Reenviado recientemente a",
        Lark_IM_GroupNum_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: s(e.select_count, "select_count") + " grupo",
            other: s(e.select_count, "select_count") + " grupos"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: "Seleccionados: " + s(e.select_count, "select_count") + " chat",
            other: "Seleccionados: " + s(e.select_count, "select_count") + " chats"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: "Seleccionados: " + s(e.select_count, "select_count") + " archivo",
            other: "Seleccionados: " + s(e.select_count, "select_count") + " archivos"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return l(e.num, 0, i, {
            one: s(e.num, "num") + " grupo de usuarios",
            other: s(e.num, "num") + " grupos de usuarios"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Grupos de usuarios",
        Lark_IM_SelectNumMember_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: "Seleccionado: " + s(e.select_count, "select_count") + " miembro",
            other: "Seleccionados: " + s(e.select_count, "select_count") + " miembros"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "No se puede obtener una vista previa",
        Lark_Legacy_Cancel: "Cancelar",
        Lark_Legacy_Confirm: "Confirmar",
        Lark_Legacy_Contact: "Contactos",
        Lark_Legacy_DefaultName: "Documento sin título",
        Lark_Legacy_EmptyList: "Lista vacía",
        Lark_Legacy_ItemDesc: function (e) {
          return "Propietario: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return l(e.number, 0, i, {
            one: s(e.number, "number") + " departamento",
            other: s(e.number, "number") + " departamentos"
          });
        },
        Lark_Legacy_Search: "Buscar",
        Lark_Legacy_SearchEmpty: "No hay resultados que coincidan.",
        Lark_Legacy_StructureDepartments: "Contactos de la organización",
        Lark_Legacy_StructureExternal: "Contactos externos",
        Lark_Legacy_Subdepartment: "Desplegar",
        Lark_Legacy_Sure: "Confirmar",
        Lark_Legacy_TableRecentchats: "Chats recientes",
        Lark_Legacy_TooManyChatsToForward: "Demasiados chats seleccionados",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Has bloqueado a este usuario. No puedes agregarlo al grupo.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Este usuario te ha bloqueado. No puedes agregar a este usuario al grupo",
        Lark_Notification_DndBuzzUnable: "A este usuario no se le puede enviar Buzz debido a las restricciones establecidas por el administrador.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: s(e.select_count, "select_count") + " contacto de correo electrónico",
            other: s(e.select_count, "select_count") + " contactos de correo electrónico"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: s(e.select_count, "select_count") + " correo electrónico",
            other: s(e.select_count, "select_count") + " correos electrónicos"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return l(e.select_count, 0, i, {
            one: s(e.select_count, "select_count") + " buzón público",
            other: s(e.select_count, "select_count") + " buzones públicos"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Espacio Wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Externo",
        Lark_Status_OrganizationSupervisor: "Supervisor de la organización",
        Lark_Status_SupervisorMain: "Supervisor principal",
        Lark_Status_SupervisorTag: "Supervisor",
        Lark_Status_TagUnregistered: "Inactivo",
        Lark_UD_Picker_UnableToAddGroupType: "Error al agregar este tipo de grupo",
        Lark_Universe_React_Picker_Cancel: "Cancelar",
        Lark_Universe_React_Picker_Confirm: "Confirmar",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘ + Intro)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl + Intro)",
        Project_T_MemberAlreadyExists_HoverToast: "El miembro ya existe"
      })
    },
    "fr-FR": {
      LWPicker: (k = function (e, t) {
        if (t) {
          if (e == 1) {
            return "one";
          } else {
            return "other";
          }
        } else if (e >= 0 && e < 2) {
          return "one";
        } else {
          return "other";
        }
      }, L = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, m = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Parties de confiance",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Impossible d'ajouter des utilisateurs externes.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Impossible de sécuriser la discussion en raison des restrictions des politiques de sécurité",
        Lark_Chat_OfficialTag: "Officiel",
        Lark_Contacts_EmailContacts: "Contacts par e-mail",
        Lark_Contacts_PublicMailbox: "Boîte aux lettres publique",
        Lark_Core_SuperAdministratorLable: "Super administrateur",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Connecter",
        Lark_Group_PublicGroupLabel: "Public",
        Lark_Group_SelectedMultipleDeptDialogContent: "Tous les nouveaux membres des services sélectionnés rejoindront ce groupe automatiquement.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Le service que vous avez sélectionné contient des sous-services. Continuer\xA0?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Tous les nouveaux membres des groupes sélectionnés rejoindront ce groupe automatiquement.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Sélectionner plusieurs groupes\xA0?",
        Lark_Groups_CannotBeSentDue: "Envoi impossible en raison de la gestion des autorisations",
        Lark_Groups_MyGroups: "Groupes gérés par moi",
        Lark_Groups_NoPermissionSelectDept: "Vous pouvez uniquement sélectionner les services que vous gérez",
        Lark_Groups_NoPermissionSelectGroup: "Aucune autorisation de sélectionner ce groupe.",
        Lark_Groups_NoPermissionToAdd: "Aucune autorisation pour ajouter",
        Lark_IM_CantSelectBlocked_Hover: "Vous ne pouvez pas sélectionner cet utilisateur en raison de ses paramètres.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Vous ne pouvez coller à la fois que 200\xA0noms maximum. Veuillez ajuster et réessayer.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Le nombre de noms collés dépasse la limite supérieure. Veuillez ajuster et réessayer.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Retour",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Tout afficher",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Recherche impossible. Veuillez réessayer plus tard.",
        Lark_IM_ForwardToRecentChats_Title: "Récents",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Récemment transféré à",
        Lark_IM_GroupNum_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: L(e.select_count, "select_count") + "\xA0groupe",
            other: L(e.select_count, "select_count") + "\xA0groupes"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: "Sélection\xA0: " + L(e.select_count, "select_count") + "\xA0chat",
            other: "Sélection\xA0: " + L(e.select_count, "select_count") + "\xA0chats"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: "Nombre de fichiers sélectionnés\xA0: " + L(e.select_count, "select_count") + " fichier",
            other: "Nombre de fichiers sélectionnés\xA0: " + L(e.select_count, "select_count") + " fichiers"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return m(e.num, 0, k, {
            one: L(e.num, "num") + "\xA0groupe d'utilisateurs",
            other: L(e.num, "num") + "\xA0groupes d'utilisateurs"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Groupes d'utilisateurs",
        Lark_IM_SelectNumMember_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: "Selectionné\xA0: " + L(e.select_count, "select_count") + "\xA0membre",
            other: "Selectionés\xA0: " + L(e.select_count, "select_count") + "\xA0membres"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Impossible de prévisualiser",
        Lark_Legacy_Cancel: "Annuler",
        Lark_Legacy_Confirm: "Confirmer",
        Lark_Legacy_Contact: "Contacts",
        Lark_Legacy_DefaultName: "Document sans titre",
        Lark_Legacy_EmptyList: "Liste vide",
        Lark_Legacy_ItemDesc: function (e) {
          return "Propriétaire\xA0: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return m(e.number, 0, k, {
            one: L(e.number, "number") + "\xA0service",
            other: L(e.number, "number") + "\xA0services"
          });
        },
        Lark_Legacy_Search: "Rechercher",
        Lark_Legacy_SearchEmpty: "Aucun résultat correspondant",
        Lark_Legacy_StructureDepartments: "Contacts de l'organisation",
        Lark_Legacy_StructureExternal: "Contacts externes",
        Lark_Legacy_Subdepartment: "Afficher",
        Lark_Legacy_Sure: "Confirmer",
        Lark_Legacy_TableRecentchats: "Chats récents",
        Lark_Legacy_TooManyChatsToForward: "Trop de discussions sélectionnées",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Vous avez bloqué cet utilisateur. Vous ne pouvez pas ajouter cet utilisateur au groupe.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Cet utilisateur vous a bloqué. Vous ne pouvez pas ajouter cet utilisateur au groupe.",
        Lark_Notification_DndBuzzUnable: "Cette personne ne peut pas recevoir de message Buzz en raison de restrictions définies par l'administrateur.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: L(e.select_count, "select_count") + "\xA0contact par e-mail",
            other: L(e.select_count, "select_count") + "\xA0contacts par e-mail"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: L(e.select_count, "select_count") + "\xA0e-mail",
            other: L(e.select_count, "select_count") + "\xA0e-mails"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return m(e.select_count, 0, k, {
            one: L(e.select_count, "select_count") + "\xA0boîte aux lettres publique",
            other: L(e.select_count, "select_count") + "\xA0boîtes aux lettres publiques"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Espace Wiki\xA0: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Externe",
        Lark_Status_OrganizationSupervisor: "Superviseur de l'organisation",
        Lark_Status_SupervisorMain: "Superviseur principal",
        Lark_Status_SupervisorTag: "Superviseur",
        Lark_Status_TagUnregistered: "Inactif",
        Lark_UD_Picker_UnableToAddGroupType: "Impossible d'ajouter ce type de groupe",
        Lark_Universe_React_Picker_Cancel: "Annuler",
        Lark_Universe_React_Picker_Confirm: "Confirmer",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘\xA0+\xA0Entrée)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl\xA0+\xA0Entrée)",
        Project_T_MemberAlreadyExists_HoverToast: "Le membre existe déjà"
      })
    },
    "hi-IN": {
      LWPicker: (p = function (e, t) {
        if (t) {
          if (e == 1) {
            return "one";
          } else if (e == 2 || e == 3) {
            return "two";
          } else if (e == 4) {
            return "few";
          } else if (e == 6) {
            return "many";
          } else {
            return "other";
          }
        } else if (e >= 0 && e <= 1) {
          return "one";
        } else {
          return "other";
        }
      }, h = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, d = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "ट्रस्ट पार्टी",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "बाहरी उपयोगकर्ताओं को जोड़ने में असमर्थ.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "सुरक्षा नीति प्रतिबंधों के कारण चैट को सुरक्षित करने में असमर्थ",
        Lark_Chat_OfficialTag: "आधिकारिक",
        Lark_Contacts_EmailContacts: "ईमेल संपर्क",
        Lark_Contacts_PublicMailbox: "सार्वजनिक मेलबॉक्स",
        Lark_Core_SuperAdministratorLable: "सुपर एडमिनिस्ट्रेटर",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "कनेक्ट करें",
        Lark_Group_PublicGroupLabel: "सार्वजनिक",
        Lark_Group_SelectedMultipleDeptDialogContent: "चयनित विभागों के सभी नए सदस्य अपने आप इस समूह में शामिल हो जाएँगे.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "आपने जो विभाग चुना है उसमें उप-विभाग शामिल हैं. जारी रखें?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "चयनित समूह के सभी नए सदस्य अपने आप इस समूह में शामिल हो जाएँगे.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "एकाधिक समूह चुनें?",
        Lark_Groups_CannotBeSentDue: "अनुमति प्रबंधन के कारण भेजा नहीं जा सकता",
        Lark_Groups_MyGroups: "समूह जिन्हें मैं प्रबंधित करता/करती हूँ",
        Lark_Groups_NoPermissionSelectDept: "इस विभाग को चुनने की कोई अनुमति नहीं है.",
        Lark_Groups_NoPermissionSelectGroup: "इस समूह को चुनने की कोई अनुमति नहीं है.",
        Lark_Groups_NoPermissionToAdd: "जोड़ने की अनुमति नहीं",
        Lark_IM_CantSelectBlocked_Hover: "You can't select this user due to their settings.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "200 names can be batch pasted maximum. Please adjust and try again.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "The number of names you've pasted has exceeded the upper limit. Please adjust and try again.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Go Back",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "View All",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Unable to search. Please try again later.",
        Lark_IM_ForwardToRecentChats_Title: "Recent",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Recently forwarded to",
        Lark_IM_GroupNum_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: h(e.select_count, "select_count") + " group",
            other: h(e.select_count, "select_count") + " groups"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: "Selected: " + h(e.select_count, "select_count") + " chat",
            other: "Selected: " + h(e.select_count, "select_count") + " chats"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: "Selected: " + h(e.select_count, "select_count") + " file",
            other: "Selected: " + h(e.select_count, "select_count") + " files"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return d(e.num, 0, p, {
            one: h(e.num, "num") + " user group",
            other: h(e.num, "num") + " user groups"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "User Groups",
        Lark_IM_SelectNumMember_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: "Selected: " + h(e.select_count, "select_count") + " member",
            other: "Selected: " + h(e.select_count, "select_count") + " members"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Unable to preview",
        Lark_Legacy_Cancel: "रद्द करें",
        Lark_Legacy_Confirm: "पुष्टि करें",
        Lark_Legacy_Contact: "संपर्क",
        Lark_Legacy_DefaultName: "शीर्षकहीन दस्तावेज़",
        Lark_Legacy_EmptyList: "सूची ख़ाली करें",
        Lark_Legacy_ItemDesc: function (e) {
          return "ओनर: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return d(e.number, 0, p, {
            one: h(e.number, "number") + " संगठन",
            other: h(e.number, "number") + " संगठन"
          });
        },
        Lark_Legacy_Search: "खोजें",
        Lark_Legacy_SearchEmpty: "कोई मेल परिणाम नहीं मिला",
        Lark_Legacy_StructureDepartments: "संगठन",
        Lark_Legacy_StructureExternal: "बाहरी संपर्क",
        Lark_Legacy_Subdepartment: "अधीनस्थ",
        Lark_Legacy_Sure: "पुष्टि करें",
        Lark_Legacy_TableRecentchats: "हाल ही की चैट",
        Lark_Legacy_TooManyChatsToForward: "फ़ॉर्वर्ड करने के लिए बहुत अधिक चैट",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "आपने इस उपयोगकर्ता को ब्लॉक कर दिया है. आप इस उपयोगकर्ता को समूह में नहीं जोड़ सकते.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "इस उपयोगकर्ता ने आपको ब्लॉक किया है. आप इस उपयोगकर्ता को समूह में नहीं जोड़ सकते हैं.",
        Lark_Notification_DndBuzzUnable: "एडमिनिस्ट्रेटर द्वारा सेट किए गए प्रतिबंधों के कारण इस व्यक्ति को बज़ नहीं किया जा सकता.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: h(e.select_count, "select_count") + " email contact",
            other: h(e.select_count, "select_count") + " email contacts"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: h(e.select_count, "select_count") + " email",
            other: h(e.select_count, "select_count") + " emails"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return d(e.select_count, 0, p, {
            one: h(e.select_count, "select_count") + " public mailbox",
            other: h(e.select_count, "select_count") + " public mailboxes"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "कार्यस्थल: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "बाहरी",
        Lark_Status_OrganizationSupervisor: "Organization supervisor",
        Lark_Status_SupervisorMain: "Main supervisor",
        Lark_Status_SupervisorTag: "पर्यवेक्षक",
        Lark_Status_TagUnregistered: "निष्क्रिय",
        Lark_UD_Picker_UnableToAddGroupType: "इस समूह प्रकार को जोड़ने में असमर्थ",
        Lark_Universe_React_Picker_Cancel: "रद्द करें",
        Lark_Universe_React_Picker_Confirm: "पुष्ट करें",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "Member already exists"
      })
    },
    "id-ID": {
      LWPicker: (C = function (e, t) {
        return "other";
      }, g = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, T = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Pihak Tepercaya",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Tidak dapat menambah pengguna eksternal.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Gagal mengamankan obrolan karena batasan kebijakan keamanan",
        Lark_Chat_OfficialTag: "Resmi",
        Lark_Contacts_EmailContacts: "Kontak Email",
        Lark_Contacts_PublicMailbox: "Kotak surat publik",
        Lark_Core_SuperAdministratorLable: "Administrator super",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Koneksi",
        Lark_Group_PublicGroupLabel: "Publik",
        Lark_Group_SelectedMultipleDeptDialogContent: "Semua anggota baru dari departemen yang dipilih akan otomatis bergabung dengan grup ini.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Departemen yang Anda pilih berisi subdepartemen. Lanjutkan?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Semua anggota baru dari grup yang dipilih akan otomatis bergabung dengan grup ini.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Pilih beberapa grup?",
        Lark_Groups_CannotBeSentDue: "Tidak dapat dikirimkan karena manajemen izin",
        Lark_Groups_MyGroups: "Grup yang Saya Kelola",
        Lark_Groups_NoPermissionSelectDept: "Anda hanya dapat memilih departemen yang Anda kelola",
        Lark_Groups_NoPermissionSelectGroup: "Tidak ada izin untuk memilih grup ini.",
        Lark_Groups_NoPermissionToAdd: "Tidak ada izin untuk menambah",
        Lark_IM_CantSelectBlocked_Hover: "Anda tidak dapat memilih pengguna ini sehubungan dengan pengaturannya.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Maksimum 200 nama dapat ditempelkan dalam batch. Sesuaikan dan coba lagi.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Jumlah nama yang Anda tempel telah melampaui batas atas. Sesuaikan dan coba lagi.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Kembali",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Lihat Semua",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Gagal mencari. Coba lagi nanti.",
        Lark_IM_ForwardToRecentChats_Title: "Terbaru",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Baru-baru ini diteruskan ke",
        Lark_IM_GroupNum_Text: function (e) {
          return T(e.select_count, 0, C, {
            one: g(e.select_count, "select_count") + " grup",
            other: g(e.select_count, "select_count") + " grup"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return T(e.select_count, 0, C, {
            one: "Dipilih: " + g(e.select_count, "select_count") + " obrolan",
            other: "Dipilih: " + g(e.select_count, "select_count") + " obrolan"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return T(e.select_count, 0, C, {
            other: "Dipilih: " + g(e.select_count, "select_count") + " file"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return T(e.num, 0, C, {
            one: g(e.num, "num") + " grup pengguna",
            other: g(e.num, "num") + " grup pengguna"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Grup Pengguna",
        Lark_IM_SelectNumMember_Text: function (e) {
          return T(e.select_count, 0, C, {
            one: "Dipilih: " + g(e.select_count, "select_count") + " anggota",
            other: "Dipilih: " + g(e.select_count, "select_count") + " anggota"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Gagal mempratinjau",
        Lark_Legacy_Cancel: "Batal",
        Lark_Legacy_Confirm: "Konfirmasi",
        Lark_Legacy_Contact: "Kontak",
        Lark_Legacy_DefaultName: "Dokumen tanpa judul",
        Lark_Legacy_EmptyList: "Daftar kosong",
        Lark_Legacy_ItemDesc: function (e) {
          return "Pemilik: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return T(e.number, 0, C, {
            one: g(e.number, "number") + " departemen",
            other: g(e.number, "number") + " departemen"
          });
        },
        Lark_Legacy_Search: "Cari",
        Lark_Legacy_SearchEmpty: "Tidak ada hasil yang cocok",
        Lark_Legacy_StructureDepartments: "Kontak Organisasi",
        Lark_Legacy_StructureExternal: "Kontak Eksternal",
        Lark_Legacy_Subdepartment: "Buka",
        Lark_Legacy_Sure: "Konfirmasi",
        Lark_Legacy_TableRecentchats: "Obrolan terakhir",
        Lark_Legacy_TooManyChatsToForward: "Terlalu banyak percakapan terpilih",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Anda memblokir pengguna ini. Anda tidak dapat menambah pengguna ini ke grup.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Anda diblokir oleh pengguna ini. Anda tidak dapat menambah pengguna ini ke grup.",
        Lark_Notification_DndBuzzUnable: "Orang ini tidak dapat menerima buzz karena pembatasan yang ditetapkan administrator.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return T(e.select_count, 0, C, {
            one: g(e.select_count, "select_count") + " kontak email",
            other: g(e.select_count, "select_count") + " kontak email"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return T(e.select_count, 0, C, {
            one: g(e.select_count, "select_count") + " email",
            other: g(e.select_count, "select_count") + " email"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return T(e.select_count, 0, C, {
            one: g(e.select_count, "select_count") + " kotak surat publik",
            other: g(e.select_count, "select_count") + " kotak surat publik"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Ruang wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Eksternal",
        Lark_Status_OrganizationSupervisor: "Pengawas organisasi",
        Lark_Status_SupervisorMain: "Pengawas utama",
        Lark_Status_SupervisorTag: "Pengawas",
        Lark_Status_TagUnregistered: "Tidak Aktif",
        Lark_UD_Picker_UnableToAddGroupType: "Gagal menambah jenis grup ini",
        Lark_Universe_React_Picker_Cancel: "Batal",
        Lark_Universe_React_Picker_Confirm: "Konfirmasi",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "Anggota sudah ada"
      })
    },
    "it-IT": {
      LWPicker: (S = function (e, t) {
        var r = !String(e).split(".")[1];
        if (t) {
          if (e == 11 || e == 8 || e == 80 || e == 800) {
            return "many";
          } else {
            return "other";
          }
        } else if (e == 1 && r) {
          return "one";
        } else {
          return "other";
        }
      }, b = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, P = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Parti attendibili",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Impossibile aggiungere utenti esterni.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Impossibile rendere sicura la chat a causa delle restrizioni della policy sulla sicurezza",
        Lark_Chat_OfficialTag: "Ufficiale",
        Lark_Contacts_EmailContacts: "Contatti e-mail",
        Lark_Contacts_PublicMailbox: "Cassetta postale pubblica",
        Lark_Core_SuperAdministratorLable: "Amministratore con privilegi avanzati",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Connettiti",
        Lark_Group_PublicGroupLabel: "Pubblico",
        Lark_Group_SelectedMultipleDeptDialogContent: "Tutti i nuovi membri dei reparti selezionati parteciperanno automaticamente a questo gruppo.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Il reparto che hai selezionato contiene sottoreparti. Vuoi continuare?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Tutti i nuovi membri dei gruppi selezionati parteciperanno automaticamente a questo gruppo.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Selezionare più gruppi?",
        Lark_Groups_CannotBeSentDue: "Non può essere inviato per via della gestione delle autorizzazioni",
        Lark_Groups_MyGroups: "Gruppi che gestisco",
        Lark_Groups_NoPermissionSelectDept: "Puoi selezionare solo i reparti che gestisci",
        Lark_Groups_NoPermissionSelectGroup: "Nessuna autorizzazione per selezionare questo gruppo.",
        Lark_Groups_NoPermissionToAdd: "Nessuna autorizzazione per aggiungere",
        Lark_IM_CantSelectBlocked_Hover: "Non puoi selezionare questo utente a causa delle sue impostazioni.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Possono essere incollati in batch un massimo di 200 nomi. Rettifica e riprova.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Il numero di nomi incollati ha superato il limite massimo. Rettifica e riprova.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Torna indietro",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Visualizza tutti",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Impossibile cercare. Riprova più tardi.",
        Lark_IM_ForwardToRecentChats_Title: "Recenti",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Recentemente inoltrato a",
        Lark_IM_GroupNum_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: b(e.select_count, "select_count") + " gruppo",
            other: b(e.select_count, "select_count") + " gruppi"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: "Selezionata: " + b(e.select_count, "select_count") + " chat",
            other: "Selezionate: " + b(e.select_count, "select_count") + " chat"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: "Selezionato: " + b(e.select_count, "select_count") + " file",
            other: "Selezionati: " + b(e.select_count, "select_count") + " file"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return P(e.num, 0, S, {
            one: b(e.num, "num") + " gruppo utenti",
            other: b(e.num, "num") + " gruppi utenti"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Gruppi utenti",
        Lark_IM_SelectNumMember_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: "Selezionato: " + b(e.select_count, "select_count") + " membro",
            other: "Selezionati: " + b(e.select_count, "select_count") + " membri"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Anteprima non disponibile",
        Lark_Legacy_Cancel: "Annulla",
        Lark_Legacy_Confirm: "Conferma",
        Lark_Legacy_Contact: "Contatti",
        Lark_Legacy_DefaultName: "Documento senza titolo",
        Lark_Legacy_EmptyList: "Svuota elenco",
        Lark_Legacy_ItemDesc: function (e) {
          return "Proprietario: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return P(e.number, 0, S, {
            one: b(e.number, "number") + " reparto",
            other: b(e.number, "number") + " reparti"
          });
        },
        Lark_Legacy_Search: "Cerca",
        Lark_Legacy_SearchEmpty: "Nessun risultato corrispondente",
        Lark_Legacy_StructureDepartments: "Contatti organizzazione",
        Lark_Legacy_StructureExternal: "Contatti esterni",
        Lark_Legacy_Subdepartment: "Espandi",
        Lark_Legacy_Sure: "Conferma",
        Lark_Legacy_TableRecentchats: "Chat recenti",
        Lark_Legacy_TooManyChatsToForward: "Selezionati troppi chat",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Hai bloccato questo utente. Non puoi aggiungere questo utente al gruppo.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Sei bloccato da questo utente. Non puoi aggiungere questo utente al gruppo.",
        Lark_Notification_DndBuzzUnable: "Questa persona non può ricevere messaggi Buzz per via delle restrizioni stabilite dall'amministratore.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: b(e.select_count, "select_count") + " contatto e-mail",
            other: b(e.select_count, "select_count") + " contatti e-mail"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: b(e.select_count, "select_count") + " e-mail",
            other: b(e.select_count, "select_count") + " e-mail"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return P(e.select_count, 0, S, {
            one: b(e.select_count, "select_count") + " cassetta postale pubblica",
            other: b(e.select_count, "select_count") + " cassette postali pubbliche"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Spazio Wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Esterno",
        Lark_Status_OrganizationSupervisor: "Supervisore dell'organizzazione",
        Lark_Status_SupervisorMain: "Supervisore principale",
        Lark_Status_SupervisorTag: "Supervisore",
        Lark_Status_TagUnregistered: "Inattivo",
        Lark_UD_Picker_UnableToAddGroupType: "Impossibile aggiungere questo tipo di gruppo",
        Lark_Universe_React_Picker_Cancel: "Annulla",
        Lark_Universe_React_Picker_Confirm: "Conferma",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Invio)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Invio)",
        Project_T_MemberAlreadyExists_HoverToast: "Il membro esiste già"
      })
    },
    "ja-JP": {
      LWPicker: (y = function (e, t) {
        return "other";
      }, f = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, M = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "関連組織",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "外部連絡先を追加できません",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "セキュリティ対策によりセキュアチャットの利用は制限されています。",
        Lark_Chat_OfficialTag: "公式",
        Lark_Contacts_EmailContacts: "メール連絡先",
        Lark_Contacts_PublicMailbox: "共同メールアドレス",
        Lark_Core_SuperAdministratorLable: "スーパー管理者",
        Lark_Education_HeadTeacherLabel: "クラス担任",
        Lark_Education_SchoolParentContacts: "保護者連絡帳",
        Lark_Education_TeacherLabel: "教師",
        Lark_Group_ConnectGroupLabel: "コネクト",
        Lark_Group_PublicGroupLabel: "公開",
        Lark_Group_SelectedMultipleDeptDialogContent: "選択された部署の新メンバーは自動的に当グループに参加します",
        Lark_Group_SelectedMultipleDeptDialogTitle: "選択中の部署にサブ部署があります。よろしいですか？",
        Lark_Group_SelectedMultipleGroupsDialogContent: "選択されたグループの新メンバーは自動的に当グループに参加します",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "複数のグループを選択しますか？",
        Lark_Groups_CannotBeSentDue: "送信する権限がありません",
        Lark_Groups_MyGroups: "自分が管理するグループ",
        Lark_Groups_NoPermissionSelectDept: "自分が管理するグループのみ選択できます。",
        Lark_Groups_NoPermissionSelectGroup: "当該グループを選択する権限はありません",
        Lark_Groups_NoPermissionToAdd: "ユーザーを追加する権限がありません",
        Lark_IM_CantSelectBlocked_Hover: "相手側の設定により、このユーザーを選択できません。",
        Lark_IM_ChatterPicker200NamesMax_Empty: "貼り付けによる一括検索は、最大 200 人までです。人数を調整してから、再試行してください。",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "一括貼り付けの上限を超えています。調整してから再試行してください。",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "戻る",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "すべてを見る",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "「" + e.name + "」";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "検索できませんでした。後で再試行してください。",
        Lark_IM_ForwardToRecentChats_Title: "最近のチャット",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "最近の転送先",
        Lark_IM_GroupNum_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: f(e.select_count, "select_count") + " 個のグループ",
            other: f(e.select_count, "select_count") + " 個のグループ"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: "選択中：" + f(e.select_count, "select_count") + " 個のチャット",
            other: "選択中：" + f(e.select_count, "select_count") + " 個のチャット"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: "、",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: "選択中：" + f(e.select_count, "select_count") + " 個のファイル",
            other: "選択中：" + f(e.select_count, "select_count") + " 個のファイル"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return M(e.num, 0, y, {
            other: f(e.num, "num") + " 個のユーザーグループ"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "ユーザーグループ",
        Lark_IM_SelectNumMember_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: "選択中：" + f(e.select_count, "select_count") + " 人",
            other: "選択中：" + f(e.select_count, "select_count") + " 人"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "プレビューできません。",
        Lark_Legacy_Cancel: "キャンセル",
        Lark_Legacy_Confirm: "確認",
        Lark_Legacy_Contact: "連絡先",
        Lark_Legacy_DefaultName: "名前未設定ドキュメント",
        Lark_Legacy_EmptyList: "該当する項目がありません。",
        Lark_Legacy_ItemDesc: function (e) {
          return "所有者：" + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return M(e.number, 0, y, {
            one: f(e.number, "number") + " 個の部署",
            other: f(e.number, "number") + " 個の部署"
          });
        },
        Lark_Legacy_Search: "検索",
        Lark_Legacy_SearchEmpty: "結果が見つかりませんでした",
        Lark_Legacy_StructureDepartments: "組織構造",
        Lark_Legacy_StructureExternal: "外部連絡先",
        Lark_Legacy_Subdepartment: "下位",
        Lark_Legacy_Sure: "確定",
        Lark_Legacy_TableRecentchats: "最近のチャット",
        Lark_Legacy_TooManyChatsToForward: "転送するチャットが多すぎます",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "このユーザーをブロックしているため、相手をグループに招待できません",
        Lark_NewContacts_CantAddToGroupBlockedTip: "このユーザーにブロックされているため、グループに招待できません",
        Lark_Notification_DndBuzzUnable: "管理者の設定により、このユーザーに緊急連絡できません",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: f(e.select_count, "select_count") + " 人のメール連絡先",
            other: f(e.select_count, "select_count") + " 人のメール連絡先"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: f(e.select_count, "select_count") + " 個のメールアドレス",
            other: f(e.select_count, "select_count") + " 個のメールアドレス"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return M(e.select_count, 0, y, {
            one: f(e.select_count, "select_count") + " 個の共有メールアドレス",
            other: f(e.select_count, "select_count") + " 個の共有メールアドレス"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "ウィキスペース：" + e.ownerName;
        },
        Lark_Status_ExternalTag: "外部",
        Lark_Status_OrganizationSupervisor: "法人責任者",
        Lark_Status_SupervisorMain: "総責任者",
        Lark_Status_SupervisorTag: "責任者",
        Lark_Status_TagUnregistered: "非アクティブ",
        Lark_UD_Picker_UnableToAddGroupType: "当該タイプのグループを追加できません",
        Lark_Universe_React_Picker_Cancel: "キャンセル",
        Lark_Universe_React_Picker_Confirm: "確認する",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "チームに参加済み"
      })
    },
    "ko-KR": {
      LWPicker: (N = function (e, t) {
        return "other";
      }, G = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, E = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "신뢰 당사자",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "외부 사용자를 추가할 수 없습니다.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "보안 정책 제한으로 인해 채팅 보안을 보장할 수 없음",
        Lark_Chat_OfficialTag: "공식",
        Lark_Contacts_EmailContacts: "이메일 연락처",
        Lark_Contacts_PublicMailbox: "공개 사서함",
        Lark_Core_SuperAdministratorLable: "최고 관리자",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "연결",
        Lark_Group_PublicGroupLabel: "공개",
        Lark_Group_SelectedMultipleDeptDialogContent: "선택한 부서의 모든 새 구성원은 이 그룹에 자동으로 참가합니다.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "선택한 부서에 하위 부서가 있습니다. 계속하시겠습니까?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "선택한 그룹의 모든 새 구성원은 이 그룹에 자동으로 참가합니다.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "여러 그룹을 선택하시겠습니까?",
        Lark_Groups_CannotBeSentDue: "권한 관리로 인해 보내지 못했습니다",
        Lark_Groups_MyGroups: "그룹화 I 관리",
        Lark_Groups_NoPermissionSelectDept: "회원님이 관리하는 부서만 선택할 수 있습니다",
        Lark_Groups_NoPermissionSelectGroup: "이 그룹을 선택할 권한이 없습니다.",
        Lark_Groups_NoPermissionToAdd: "추가된 권한이 없습니다",
        Lark_IM_CantSelectBlocked_Hover: "이 사용자의 설정으로 인해 해당 사용자를 선택할 수 없습니다.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "최대 200개의 이름을 일괄로 붙여넣을 수 있습니다. 조정하고 다시 시도하세요.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "붙여넣은 이름의 수가 최대 수를 초과했습니다. 조정하고 다시 시도하세요.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "돌아가기",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "모두 보기",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "검색할 수 없습니다. 나중에 다시 시도하세요.",
        Lark_IM_ForwardToRecentChats_Title: "최근",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "최근 전달:",
        Lark_IM_GroupNum_Text: function (e) {
          return E(e.num, 0, N, {
            one: "그룹 " + G(e.num, "num") + "개",
            other: "그룹 " + G(e.num, "num") + "개"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return E(e.select_count, 0, N, {
            one: "선택됨: 채팅 " + G(e.select_count, "select_count") + "개",
            other: "선택됨: 채팅 " + G(e.select_count, "select_count") + "개"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return E(e.select_count, 0, N, {
            other: "선택됨: 파일 " + G(e.select_count, "select_count") + "개"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return E(e.num, 0, N, {
            one: "사용자 그룹 " + G(e.num, "num") + "개",
            other: "사용자 그룹 " + G(e.num, "num") + "개"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "사용자 그룹",
        Lark_IM_SelectNumMember_Text: function (e) {
          return E(e.select_count, 0, N, {
            one: "선택됨: 구성원 " + G(e.select_count, "select_count") + "명",
            other: "선택됨: 구성원 " + G(e.select_count, "select_count") + "명"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "미리 볼 수 없습니다",
        Lark_Legacy_Cancel: "취소",
        Lark_Legacy_Confirm: "확인",
        Lark_Legacy_Contact: "연락처",
        Lark_Legacy_DefaultName: "제목 없는 문서",
        Lark_Legacy_EmptyList: "빈 목록",
        Lark_Legacy_ItemDesc: function (e) {
          return "소유자: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return E(e.number, 0, N, {
            one: "부서 " + G(e.number, "number") + "개",
            other: "부서 " + G(e.number, "number") + "개"
          });
        },
        Lark_Legacy_Search: "검색",
        Lark_Legacy_SearchEmpty: "일치 결과 없음",
        Lark_Legacy_StructureDepartments: "기업 연락처",
        Lark_Legacy_StructureExternal: "외부 연락처",
        Lark_Legacy_Subdepartment: "확장",
        Lark_Legacy_Sure: "확인",
        Lark_Legacy_TableRecentchats: "최근 채팅",
        Lark_Legacy_TooManyChatsToForward: "선택된 채팅이 너무 많습니다",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "이 사용자를 차단하셨습니다. 이 사용자를 그룹에 추가할 수 없습니다.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "이 사용자가 회원님을 차단했습니다. 이 사용자를 그룹에 추가할 수 없습니다.",
        Lark_Notification_DndBuzzUnable: "관리자가 설정한 제한으로 인해 이 사람은 Buzz를 할 수 없습니다.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return E(e.select_count, 0, N, {
            one: G(e.select_count, "select_count") + "개 이메일 연락처",
            other: G(e.select_count, "select_count") + "개 이메일 연락처"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return E(e.select_count, 0, N, {
            one: G(e.select_count, "select_count") + "개 이메일",
            other: G(e.select_count, "select_count") + "개 이메일"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return E(e.select_count, 0, N, {
            one: G(e.select_count, "select_count") + "개 공개 사서함",
            other: G(e.select_count, "select_count") + "개 공개 사서함"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Wiki 공간: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "외부",
        Lark_Status_OrganizationSupervisor: "기업 감독자",
        Lark_Status_SupervisorMain: "주 감독자",
        Lark_Status_SupervisorTag: "감독자",
        Lark_Status_TagUnregistered: "비활성화",
        Lark_UD_Picker_UnableToAddGroupType: "이 그룹 유형을 추가할 수 없습니다",
        Lark_Universe_React_Picker_Cancel: "취소",
        Lark_Universe_React_Picker_Confirm: "확인",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "구성원이 이미 있습니다"
      })
    },
    "ms-MY": {
      LWPicker: (x = function (e, t) {
        if (t && e == 1) {
          return "one";
        } else {
          return "other";
        }
      }, I = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, v = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Pihak yang Dipercayai",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Tidak dapat menambah pengguna luar.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Tidak dapat sembang selamat disebabkan sekatan polisi keselamatan",
        Lark_Chat_OfficialTag: "Rasmi",
        Lark_Contacts_EmailContacts: "Kenalan Emel",
        Lark_Contacts_PublicMailbox: "Peti mel awam",
        Lark_Core_SuperAdministratorLable: "Pentadbir utama",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Sambung",
        Lark_Group_PublicGroupLabel: "Awam",
        Lark_Group_SelectedMultipleDeptDialogContent: "Semua ahli baru jabatan yang dipilih akan menyertai kumpulan ini secara automatik.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Jabatan yang anda pilih mengandungi sub-jabatan. Teruskan?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Semua ahli baru kumpulan yang dipilih akan menyertai kumpulan ini secara automatik.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Pilih beberapa kumpulan?",
        Lark_Groups_CannotBeSentDue: "Tidak dapat dihantar kerana pengurusan kebenaran",
        Lark_Groups_MyGroups: "Kumpulan yang Saya Urus",
        Lark_Groups_NoPermissionSelectDept: "Anda hanya boleh memilih jabatan yang anda urus",
        Lark_Groups_NoPermissionSelectGroup: "Tiada kebenaran untuk memilih kumpulan ini.",
        Lark_Groups_NoPermissionToAdd: "Tiada kebenaran untuk tambah",
        Lark_IM_CantSelectBlocked_Hover: "Anda tidak boleh memilih pengguna ini kerana tetapan mereka.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Maksimum 200 nama boleh ditempel secara berkumpulan. Sila laraskan dan cuba lagi.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Bilangan nama yang anda tampal telah melebihi had maksimum. Sila laraskan dan cuba lagi.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Kembali",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Lihat Semua",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Tidak dapat mencari. Sila cuba lagi kemudian.",
        Lark_IM_ForwardToRecentChats_Title: "Baru-baru ini",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Baru-baru ini dihantar ke",
        Lark_IM_GroupNum_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: I(e.select_count, "select_count") + " kumpulan",
            other: I(e.select_count, "select_count") + " kumpulan"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: "Terpilih: " + I(e.select_count, "select_count") + " sembang",
            other: "Terpilih: " + I(e.select_count, "select_count") + " sembang"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: "Dipilih: " + I(e.select_count, "select_count") + " fail",
            other: "Dipilih: " + I(e.select_count, "select_count") + " fail"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return v(e.num, 0, x, {
            one: I(e.num, "num") + " kumpulan pengguna",
            other: I(e.num, "num") + " kumpulan pengguna"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Kumpulan Pengguna",
        Lark_IM_SelectNumMember_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: "Terpilih: " + I(e.select_count, "select_count") + " ahli",
            other: "Terpilih: " + I(e.select_count, "select_count") + " ahli"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Tidak dapat pratonton",
        Lark_Legacy_Cancel: "Batal",
        Lark_Legacy_Confirm: "Sahkan",
        Lark_Legacy_Contact: "Kenalan",
        Lark_Legacy_DefaultName: "Dokumen Tanpa Tajuk",
        Lark_Legacy_EmptyList: "Senarai kosong",
        Lark_Legacy_ItemDesc: function (e) {
          return "Pemilik: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return v(e.number, 0, x, {
            one: I(e.number, "number") + " jabatan",
            other: I(e.number, "number") + " jabatan"
          });
        },
        Lark_Legacy_Search: "Cari",
        Lark_Legacy_SearchEmpty: "Tiada hasil padanan",
        Lark_Legacy_StructureDepartments: "Kenalan Organisasi",
        Lark_Legacy_StructureExternal: "Kenalan Luar",
        Lark_Legacy_Subdepartment: "Kembangkan",
        Lark_Legacy_Sure: "Sahkan",
        Lark_Legacy_TableRecentchats: "Perbualan terkini",
        Lark_Legacy_TooManyChatsToForward: "Terlalu banyak sembang dipilih",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Anda telah menyekat pengguna ini. Anda tidak boleh menambah pengguna ini ke kumpulan.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Anda disekat oleh pengguna ini. Anda tidak boleh menambah pengguna ini ke dalam kumpulan.",
        Lark_Notification_DndBuzzUnable: "Orang ini tidak boleh di-buzz kerana sekatan yang ditetapkan oleh pentadbir.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: I(e.select_count, "select_count") + " kenalan emel",
            other: I(e.select_count, "select_count") + " kenalan emel"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: I(e.select_count, "select_count") + " emel",
            other: I(e.select_count, "select_count") + " emel"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return v(e.select_count, 0, x, {
            one: I(e.select_count, "select_count") + " peti mel awam",
            other: I(e.select_count, "select_count") + " peti mel awam"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Ruang wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Luaran",
        Lark_Status_OrganizationSupervisor: "Penyelia organisasi",
        Lark_Status_SupervisorMain: "Penyelia utama",
        Lark_Status_SupervisorTag: "Penyelia",
        Lark_Status_TagUnregistered: "Tidak aktif",
        Lark_UD_Picker_UnableToAddGroupType: "Tidak dapat menambah jenis kumpulan ini",
        Lark_Universe_React_Picker_Cancel: "Batal",
        Lark_Universe_React_Picker_Confirm: "Sahkan",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "Ahli sudah wujud"
      })
    },
    "pt-BR": {
      LWPicker: (w = function (e, t) {
        var r = String(e).split(".")[0];
        if (t) {
          return "other";
        } else if (r == 0 || r == 1) {
          return "one";
        } else {
          return "other";
        }
      }, U = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, D = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Contrapartes confiáveis",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Não é possível adicionar usuários externos.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Não é possível proteger o chat devido a restrições da política de segurança",
        Lark_Chat_OfficialTag: "Oficial",
        Lark_Contacts_EmailContacts: "Cartões de contato",
        Lark_Contacts_PublicMailbox: "Caixa de entrada pública",
        Lark_Core_SuperAdministratorLable: "Superadministrador",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Conectar",
        Lark_Group_PublicGroupLabel: "Público",
        Lark_Group_SelectedMultipleDeptDialogContent: "Todos os novos membros dos departamentos selecionados ingressarão neste grupo automaticamente.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "O departamento que você selecionou contém subdepartamentos. Continuar?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Todos os novos membros dos grupos selecionados ingressarão neste grupo automaticamente.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Selecionar vários grupos?",
        Lark_Groups_CannotBeSentDue: "Não pode ser enviado devido ao gerenciamento da permissão",
        Lark_Groups_MyGroups: "Grupos que eu gerencio",
        Lark_Groups_NoPermissionSelectDept: "Você só pode selecionar os departamentos que gerencia",
        Lark_Groups_NoPermissionSelectGroup: "Nenhuma permissão para selecionar este grupo.",
        Lark_Groups_NoPermissionToAdd: "Sem permissão para adicionar",
        Lark_IM_CantSelectBlocked_Hover: "Você não pode selecionar este usuário devido às configurações dele.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "É possível colar em lote, no máximo, 200 nomes. Ajuste e tente novamente.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "O número de nomes que você colou excedeu o limite máximo. Ajuste e tente novamente.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Voltar",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Visualizar tudo",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Não é possível pesquisar. Tente novamente mais tarde.",
        Lark_IM_ForwardToRecentChats_Title: "Recente",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Encaminhado recentemente para",
        Lark_IM_GroupNum_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: U(e.select_count, "select_count") + " grupo",
            other: U(e.select_count, "select_count") + " grupos"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: "Selecionado: " + U(e.select_count, "select_count") + " chat",
            other: "Selecionados: " + U(e.select_count, "select_count") + " chats"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: "Selecionado: " + U(e.select_count, "select_count") + " arquivo",
            other: "Selecionado: " + U(e.select_count, "select_count") + " arquivos"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return D(e.num, 0, w, {
            one: U(e.num, "num") + " grupo de usuários",
            other: U(e.num, "num") + " grupos de usuários"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Grupos de usuários",
        Lark_IM_SelectNumMember_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: "Selecionado: " + U(e.select_count, "select_count") + " membro",
            other: "Selecionados: " + U(e.select_count, "select_count") + " membros"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Não é possível visualizar",
        Lark_Legacy_Cancel: "Cancelar",
        Lark_Legacy_Confirm: "Confirmar",
        Lark_Legacy_Contact: "Contatos",
        Lark_Legacy_DefaultName: "Documento sem título",
        Lark_Legacy_EmptyList: "Lista vazia",
        Lark_Legacy_ItemDesc: function (e) {
          return "Proprietário: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return D(e.number, 0, w, {
            one: U(e.number, "number") + " departamento",
            other: U(e.number, "number") + " departamentos"
          });
        },
        Lark_Legacy_Search: "Pesquisar",
        Lark_Legacy_SearchEmpty: "Nenhum resultado correspondente",
        Lark_Legacy_StructureDepartments: "Contatos da organização",
        Lark_Legacy_StructureExternal: "Contatos externos",
        Lark_Legacy_Subdepartment: "Expandir",
        Lark_Legacy_Sure: "Confirmar",
        Lark_Legacy_TableRecentchats: "Chats recentes",
        Lark_Legacy_TooManyChatsToForward: "Muitos chats escolhidos",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Você bloqueou este usuário. Você não pode adicionar este usuário ao grupo.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Você foi bloqueado por este usuário. Você não pode adicionar este usuário ao grupo.",
        Lark_Notification_DndBuzzUnable: "Esta pessoa não pode receber uma mensagem por buzz devido às restrições definidas pelo administrador.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: U(e.select_count, "select_count") + " contato de e-mail",
            other: U(e.select_count, "select_count") + " contatos de e-mail"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: U(e.select_count, "select_count") + " e-mail",
            other: U(e.select_count, "select_count") + " e-mails"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return D(e.select_count, 0, w, {
            one: U(e.select_count, "select_count") + " caixa de entrada pública",
            other: U(e.select_count, "select_count") + " caixas de entrada públicas"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Espaço da wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Externo",
        Lark_Status_OrganizationSupervisor: "Supervisor da organização",
        Lark_Status_SupervisorMain: "Supervisor principal",
        Lark_Status_SupervisorTag: "Supervisor",
        Lark_Status_TagUnregistered: "Inativo",
        Lark_UD_Picker_UnableToAddGroupType: "Falha ao adicionar este tipo de grupo",
        Lark_Universe_React_Picker_Cancel: "Cancelar",
        Lark_Universe_React_Picker_Confirm: "Confirmar",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "O membro já existe"
      })
    },
    "ru-RU": {
      LWPicker: (B = function (e, t) {
        var r = String(e).split(".");
        var a = r[0];
        var n = !r[1];
        var o = a.slice(-1);
        var _ = a.slice(-2);
        if (t) {
          return "other";
        } else if (n && o == 1 && _ != 11) {
          return "one";
        } else if (n && o >= 2 && o <= 4 && (_ < 12 || _ > 14)) {
          return "few";
        } else if (n && o == 0 || n && o >= 5 && o <= 9 || n && _ >= 11 && _ <= 14) {
          return "many";
        } else {
          return "other";
        }
      }, A = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, z = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Доверенные стороны",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Не удается добавить внешних пользователей.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Не удалось защитить чат из-за ограничений политики безопасности",
        Lark_Chat_OfficialTag: "Официальный",
        Lark_Contacts_EmailContacts: "Контакты почты",
        Lark_Contacts_PublicMailbox: "Общедоступный почтовый ящик",
        Lark_Core_SuperAdministratorLable: "Основной администратор",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Подключить",
        Lark_Group_PublicGroupLabel: "Открытая",
        Lark_Group_SelectedMultipleDeptDialogContent: "Все новые участники выбранных отделов автоматически присоединятся к этой группе.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Выбранный вами отдел содержит подотделы. Продолжить?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Все новые участники выбранных групп автоматически присоединятся к этой группе.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Выбрать несколько групп?",
        Lark_Groups_CannotBeSentDue: "Не удается отправить из-за управления разрешениями",
        Lark_Groups_MyGroups: "Группы, которыми я управляю",
        Lark_Groups_NoPermissionSelectDept: "Вы можете выбирать только отделы, которыми управляете",
        Lark_Groups_NoPermissionSelectGroup: "Нет разрешения на выбор этой группы.",
        Lark_Groups_NoPermissionToAdd: "Нет разрешения на добавление",
        Lark_IM_CantSelectBlocked_Hover: "Вы не можете выбрать этого пользователя из-за его настроек.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Максимум 200 имен могут быть вставлены пакетно. Отрегулируйте и повторите попытку.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Количество вставленных имен превысило верхний предел. Отрегулируйте и повторите попытку.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Назад",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Просмотреть все",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Невозможно выполнить поиск. Повторите попытку позже.",
        Lark_IM_ForwardToRecentChats_Title: "Недавние",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Недавно отправлено",
        Lark_IM_GroupNum_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: A(e.select_count, "select_count") + " группа",
            few: A(e.select_count, "select_count") + " группы",
            many: A(e.select_count, "select_count") + " групп",
            other: A(e.select_count, "select_count") + " групп"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: "Выбран: " + A(e.select_count, "select_count") + " чат",
            few: "Выбрано: " + A(e.select_count, "select_count") + " чата",
            other: "Выбрано: " + A(e.select_count, "select_count") + " чатов"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: "Выбрано: " + A(e.select_count, "select_count") + " файл",
            few: "Выбрано: " + A(e.select_count, "select_count") + " файла",
            many: "Выбрано: " + A(e.select_count, "select_count") + " файлов",
            other: "Выбрано файлов: " + A(e.select_count, "select_count")
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return z(e.num, 0, B, {
            one: A(e.num, "num") + " группа пользователей",
            few: A(e.num, "num") + " группы пользователей",
            other: A(e.num, "num") + " групп пользователей"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Группы пользователей",
        Lark_IM_SelectNumMember_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: "Выбран: " + A(e.select_count, "select_count") + " участник",
            few: "Выбрано: " + A(e.select_count, "select_count") + " участника",
            other: "Выбрано: " + A(e.select_count, "select_count") + " участников"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Предпросмотр невозможен",
        Lark_Legacy_Cancel: "Отмена",
        Lark_Legacy_Confirm: "Подтвердить",
        Lark_Legacy_Contact: "Контакты",
        Lark_Legacy_DefaultName: "Документ без названия",
        Lark_Legacy_EmptyList: "Пустой список",
        Lark_Legacy_ItemDesc: function (e) {
          return "Владелец: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return z(e.number, 0, B, {
            one: A(e.number, "number") + " отдел",
            few: A(e.number, "number") + " отдела",
            many: A(e.number, "number") + " отделов",
            other: A(e.number, "number") + " отдела"
          });
        },
        Lark_Legacy_Search: "Поиск",
        Lark_Legacy_SearchEmpty: "Нет подходящих результатов",
        Lark_Legacy_StructureDepartments: "Контакты организации",
        Lark_Legacy_StructureExternal: "Внешние контакты",
        Lark_Legacy_Subdepartment: "Раскрыть",
        Lark_Legacy_Sure: "Подтвердить",
        Lark_Legacy_TableRecentchats: "Недавние чаты",
        Lark_Legacy_TooManyChatsToForward: "Выбрано слишком много чатов",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Вы заблокировали этого пользователя. Вы не можете добавить его в группу.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Этот пользователь заблокировал вас. Вы не можете включить этого пользователя в группу.",
        Lark_Notification_DndBuzzUnable: "Этому человеку нельзя отправить сообщение Buzz из-за ограничений, установленных администратором.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: A(e.select_count, "select_count") + " контакт почты",
            few: A(e.select_count, "select_count") + " контакта почты",
            other: A(e.select_count, "select_count") + " контактов почты"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: A(e.select_count, "select_count") + " почтовый ящик",
            few: A(e.select_count, "select_count") + " почтовых ящика",
            other: A(e.select_count, "select_count") + " почтовых ящиков"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return z(e.select_count, 0, B, {
            one: A(e.select_count, "select_count") + " общий почтовый ящик",
            few: A(e.select_count, "select_count") + " общих почтовых ящика",
            other: A(e.select_count, "select_count") + " общих почтовых ящиков"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Wiki-пространство: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Внешний",
        Lark_Status_OrganizationSupervisor: "Руководитель организации",
        Lark_Status_SupervisorMain: "Главный руководитель",
        Lark_Status_SupervisorTag: "Руководитель",
        Lark_Status_TagUnregistered: "Неактивно",
        Lark_UD_Picker_UnableToAddGroupType: "Не удалось добавить этот тип группы",
        Lark_Universe_React_Picker_Cancel: "Отмена",
        Lark_Universe_React_Picker_Confirm: "Подтвердить",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "Участник уже существует"
      })
    },
    "st-JO": {
      LWPicker: (R = function (e, t) {
        if (t) {
          return "other";
        } else if (e == 1) {
          return "one";
        } else {
          return "other";
        }
      }, O = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, F = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "##@Lark_B2B_TrustedParties##34815##2207##关联组织@##",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "##@Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip##34815##2207##无法添加外部用户@##",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "##@Lark_Chat_CantSecretChatWithUserSecurityRestrict##34815##2207##由于安全策略限制，无法使用密聊功能@##",
        Lark_Chat_OfficialTag: "##@Lark_Chat_OfficialTag##34815##2207##官方@##",
        Lark_Contacts_EmailContacts: "##@Lark_Contacts_EmailContacts##34815##2207##邮箱联系人@##",
        Lark_Contacts_PublicMailbox: "##@Lark_Contacts_PublicMailbox##34815##2207##公共邮箱@##",
        Lark_Core_SuperAdministratorLable: "##@Lark_Core_SuperAdministratorLable##34815##2207##超级管理员@##",
        Lark_Education_HeadTeacherLabel: "##@Lark_Education_HeadTeacherLabel##34815##2207##班主任@##",
        Lark_Education_SchoolParentContacts: "##@Lark_Education_SchoolParentContacts##34815##2207##家校通讯录@##",
        Lark_Education_TeacherLabel: "##@Lark_Education_TeacherLabel##34815##2207##老师@##",
        Lark_Group_ConnectGroupLabel: "##@Lark_Group_ConnectGroupLabel##34815##2207##互通@##",
        Lark_Group_PublicGroupLabel: "##@Lark_Group_PublicGroupLabel##34815##2207##公开@##",
        Lark_Group_SelectedMultipleDeptDialogContent: "##@Lark_Group_SelectedMultipleDeptDialogContent##34815##2207##所有已选部门的新成员会自动加入此群@##",
        Lark_Group_SelectedMultipleDeptDialogTitle: "##@Lark_Group_SelectedMultipleDeptDialogTitle##34815##2207##你所选择的部门包含子部门，是否确认选择？@##",
        Lark_Group_SelectedMultipleGroupsDialogContent: "##@Lark_Group_SelectedMultipleGroupsDialogContent##34815##2207##所有已选群组的新成员会自动加入此群@##",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "##@Lark_Group_SelectedMultipleGroupsDialogTitle##34815##2207##确定选择多个群组？@##",
        Lark_Groups_CannotBeSentDue: "##@Lark_Groups_CannotBeSentDue##34815##2207##无发送权限@##",
        Lark_Groups_MyGroups: "##@Lark_Groups_MyGroups##34815##2207##我管理的群组@##",
        Lark_Groups_NoPermissionSelectDept: "##@Lark_Groups_NoPermissionSelectDept##34815##2207##仅可选择我管理的部门@##",
        Lark_Groups_NoPermissionSelectGroup: "##@Lark_Groups_NoPermissionSelectGroup##34815##2207##没有权限选择这个群@##",
        Lark_Groups_NoPermissionToAdd: "##@Lark_Groups_NoPermissionToAdd##34815##2207##无权限添加@##",
        Lark_IM_CantSelectBlocked_Hover: "##@Lark_IM_CantSelectBlocked_Hover##34815##2207##由于对方的设置，你暂时无法选择该用户@##",
        Lark_IM_ChatterPicker200NamesMax_Empty: "##@Lark_IM_ChatterPicker200NamesMax_Empty##34815##2207##暂不支持批量粘贴超过 200 人，请调整后重试@##",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "##@Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty##34815##2207##超过批量粘贴上限，请调整后重试@##",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "##@Lark_IM_ChatterPickerSearchNameCollapse_Button##34815##2207##返回@##",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "##@Lark_IM_ChatterPickerSearchNameViewAll_Button##34815##2207##查看全部@##",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "##@Lark_IM_ChatterPickerSearchName_Title##34815##2207##“" + e.name + "”@##";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "##@Lark_IM_ChatterPickerSearchName_UnableSearch_Toast##34815##2207##搜索失败，请稍后重试@##",
        Lark_IM_ForwardToRecentChats_Title: "##@Lark_IM_ForwardToRecentChats_Title##34815##2207##最近对话@##",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "##@Lark_IM_Forward_RecentlyForwardedTo_Title##34815##2207##最近转发@##",
        Lark_IM_GroupNum_Text: function (e) {
          return "##@Lark_IM_GroupNum_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: O(e.select_count, "select_count") + " 个群组",
            other: O(e.select_count, "select_count") + " 个群组"
          }) + "@##";
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return "##@Lark_IM_PickerCommon_ChatsNum_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: "已选：" + O(e.select_count, "select_count") + " 个会话",
            other: "已选：" + O(e.select_count, "select_count") + " 个会话"
          }) + "@##";
        },
        Lark_IM_PickerCommon_Comma_Text: "##@Lark_IM_PickerCommon_Comma_Text##34815##2207##，@##",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return "##@Lark_IM_PickerCommon_FilesNum_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: "已选：" + O(e.select_count, "select_count") + " 个条目",
            other: "已选：" + O(e.select_count, "select_count") + " 个条目"
          }) + "@##";
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return "##@Lark_IM_Picker_UserGroupNum_Text##34815##2207##" + F(e.num, 0, R, {
            other: O(e.num, "num") + " 个用户组"
          }) + "@##";
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "##@Lark_IM_Picker_UserGroups_Breadcrum##34815##2207##用户组@##",
        Lark_IM_SelectNumMember_Text: function (e) {
          return "##@Lark_IM_SelectNumMember_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: "已选：" + O(e.select_count, "select_count") + " 人",
            other: "已选：" + O(e.select_count, "select_count") + " 人"
          }) + "@##";
        },
        Lark_IM_UnableToPreviewContent_Toast: "##@Lark_IM_UnableToPreviewContent_Toast##34815##2207##暂不支持预览@##",
        Lark_Legacy_Cancel: "##@Lark_Legacy_Cancel##34815##2207##取消@##",
        Lark_Legacy_Confirm: "##@Lark_Legacy_Confirm##34815##2207##确定@##",
        Lark_Legacy_Contact: "##@Lark_Legacy_Contact##34815##2207##联系人@##",
        Lark_Legacy_DefaultName: "##@Lark_Legacy_DefaultName##34815##2207##未命名文档@##",
        Lark_Legacy_EmptyList: "##@Lark_Legacy_EmptyList##34815##2207##列表为空@##",
        Lark_Legacy_ItemDesc: function (e) {
          return "##@Lark_Legacy_ItemDesc##34815##2207##所有者：" + e.owner + "@##";
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return "##@Lark_Legacy_NumberOrganizations##34815##2207##" + F(e.number, 0, R, {
            one: O(e.number, "number") + " 个部门",
            other: O(e.number, "number") + " 个部门"
          }) + "@##";
        },
        Lark_Legacy_Search: "##@Lark_Legacy_Search##34815##2207##搜索@##",
        Lark_Legacy_SearchEmpty: "##@Lark_Legacy_SearchEmpty##34815##2207##没有找到结果@##",
        Lark_Legacy_StructureDepartments: "##@Lark_Legacy_StructureDepartments##34815##2207##组织内联系人@##",
        Lark_Legacy_StructureExternal: "##@Lark_Legacy_StructureExternal##34815##2207##外部联系人@##",
        Lark_Legacy_Subdepartment: "##@Lark_Legacy_Subdepartment##34815##2207##下级@##",
        Lark_Legacy_Sure: "##@Lark_Legacy_Sure##34815##2207##确定@##",
        Lark_Legacy_TableRecentchats: "##@Lark_Legacy_TableRecentchats##34815##2207##最近聊天@##",
        Lark_Legacy_TooManyChatsToForward: "##@Lark_Legacy_TooManyChatsToForward##34815##2207##超过选择个数@##",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "##@Lark_NewContacts_CantAddToGroupBlockedOthersTip##34815##2207##你已屏蔽该用户，无法添加 Ta 为群成员@##",
        Lark_NewContacts_CantAddToGroupBlockedTip: "##@Lark_NewContacts_CantAddToGroupBlockedTip##34815##2207##该用户已将你屏蔽，你无法添加 Ta 为群成员@##",
        Lark_Notification_DndBuzzUnable: "##@Lark_Notification_DndBuzzUnable##34815##2207##由于管理员设置，该用户不能被加急@##",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return "##@Lark_Picker_EmailContactNum_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: O(e.select_count, "select_count") + " 个邮箱联系人",
            other: O(e.select_count, "select_count") + " 个邮箱联系人"
          }) + "@##";
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return "##@Lark_Picker_EmailNum_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: O(e.select_count, "select_count") + " 个邮箱",
            other: O(e.select_count, "select_count") + " 个邮箱"
          }) + "@##";
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return "##@Lark_Picker_PublicMailboxNum_Text##34815##2207##" + F(e.select_count, 0, R, {
            one: O(e.select_count, "select_count") + " 个公共邮箱",
            other: O(e.select_count, "select_count") + " 个公共邮箱"
          }) + "@##";
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "##@Lark_Search_DocsIntegration_WikiName##34815##2207##知识库：" + e.ownerName + "@##";
        },
        Lark_Status_ExternalTag: "##@Lark_Status_ExternalTag##34815##2207##外部@##",
        Lark_Status_OrganizationSupervisor: "##@Lark_Status_OrganizationSupervisor##34815##2207##企业负责人@##",
        Lark_Status_SupervisorMain: "##@Lark_Status_SupervisorMain##34815##2207##主负责人@##",
        Lark_Status_SupervisorTag: "##@Lark_Status_SupervisorTag##34815##2207##负责人@##",
        Lark_Status_TagUnregistered: "##@Lark_Status_TagUnregistered##34815##2207##未激活@##",
        Lark_UD_Picker_UnableToAddGroupType: "##@Lark_UD_Picker_UnableToAddGroupType##34815##2207##暂不支持添加该类型的群组@##",
        Lark_Universe_React_Picker_Cancel: "##@Lark_Universe_React_Picker_Cancel##34815##2207##取消@##",
        Lark_Universe_React_Picker_Confirm: "##@Lark_Universe_React_Picker_Confirm##34815##2207##确定@##",
        Lark_Universe_React_Picker_ConfirmKeyMac: "##@Lark_Universe_React_Picker_ConfirmKeyMac##34815##2207##(⌘+Enter)@##",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "##@Lark_Universe_React_Picker_ConfirmKeyWindows##34815##2207##(Ctrl+Enter)@##",
        Project_T_MemberAlreadyExists_HoverToast: "##@Project_T_MemberAlreadyExists_HoverToast##41385##4394##已是团队成员@##"
      })
    },
    "th-TH": {
      LWPicker: (W = function (e, t) {
        return "other";
      }, K = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, H = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "ฝ่ายที่น่าเชื่อถือ",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "เพิ่มผู้ใช้ภายนอกไม่ได้",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "ไม่สามารถใช้แชทที่ปลอดภัยได้เนื่องจากข้อจำกัดของนโยบายความปลอดภัย",
        Lark_Chat_OfficialTag: "ทางการ",
        Lark_Contacts_EmailContacts: "รายชื่อที่ติดต่อของอีเมล",
        Lark_Contacts_PublicMailbox: "กล่องจดหมายสาธารณะ",
        Lark_Core_SuperAdministratorLable: "ผู้ดูแลสูงสุด",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "เชื่อมต่อ",
        Lark_Group_PublicGroupLabel: "สาธารณะ",
        Lark_Group_SelectedMultipleDeptDialogContent: "สมาชิกใหม่ทั้งหมดของแผนกที่เลือกจะเข้าร่วมกลุ่มนี้โดยอัตโนมัติ",
        Lark_Group_SelectedMultipleDeptDialogTitle: "แผนกที่คุณเลือกมีแผนกย่อย ดำเนินการต่อหรือไม่",
        Lark_Group_SelectedMultipleGroupsDialogContent: "สมาชิกใหม่ทั้งหมดของกลุ่มที่เลือกจะเข้าร่วมกลุ่มนี้โดยอัตโนมัติ",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "เลือกหลายกลุ่มหรือไม่",
        Lark_Groups_CannotBeSentDue: "ไม่สามารถส่งได้เนื่องจากการจัดการสิทธิ์การอนุญาต",
        Lark_Groups_MyGroups: "กลุ่มที่ฉันจัดการ",
        Lark_Groups_NoPermissionSelectDept: "คุณสามารถเลือกได้เฉพาะแผนกที่คุณจัดการเท่านั้น",
        Lark_Groups_NoPermissionSelectGroup: "ไม่มีสิทธิ์การอนุญาตในการเลือกกลุ่มนี้",
        Lark_Groups_NoPermissionToAdd: "ไม่มีสิทธิ์การอนุญาตในการเพิ่ม",
        Lark_IM_CantSelectBlocked_Hover: "คุณไม่สามารถเลือกผู้ใช้รายนี้ได้เนื่องจากการตั้งค่าของผู้ใช้",
        Lark_IM_ChatterPicker200NamesMax_Empty: "สามารถวางเป็นชุดได้สูงสุด 200 ชื่อ โปรดปรับและลองอีกครั้ง",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "จำนวนชื่อที่คุณวางเกินจำนวนจำกัดสูงสุด โปรดทำการปรับแล้วลองอีกครั้ง",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "ย้อนกลับ",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "ดูทั้งหมด",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "ค้นหาไม่สำเร็จ โปรดลองอีกครั้งภายหลัง",
        Lark_IM_ForwardToRecentChats_Title: "ล่าสุด",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "ล่าสุดส่งต่อไปยัง",
        Lark_IM_GroupNum_Text: function (e) {
          return H(e.select_count, 0, W, {
            one: K(e.select_count, "select_count") + " กลุ่ม",
            other: K(e.select_count, "select_count") + " กลุ่ม"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return H(e.select_count, 0, W, {
            one: "เลือกไว้: " + K(e.select_count, "select_count") + " แชท",
            other: "เลือกไว้: " + K(e.select_count, "select_count") + " แชท"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return H(e.select_count, 0, W, {
            other: "เลือกแล้ว " + K(e.select_count, "select_count") + " ไฟล์"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return H(e.num, 0, W, {
            one: K(e.num, "num") + " กลุ่มผู้ใช้",
            other: K(e.num, "num") + " กลุ่มผู้ใช้"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "กลุ่มผู้ใช้",
        Lark_IM_SelectNumMember_Text: function (e) {
          return H(e.select_count, 0, W, {
            one: "เลือกสมาชิกแล้ว " + K(e.select_count, "select_count") + " คน",
            other: "เลือกสมาชิกแล้ว " + K(e.select_count, "select_count") + " คน"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "ไม่สามารถดูตัวอย่างได้",
        Lark_Legacy_Cancel: "ยกเลิก",
        Lark_Legacy_Confirm: "ยืนยัน",
        Lark_Legacy_Contact: "รายชื่อที่ติดต่อ",
        Lark_Legacy_DefaultName: "เอกสารที่ไม่มีชื่อ",
        Lark_Legacy_EmptyList: "ล้างรายการ",
        Lark_Legacy_ItemDesc: function (e) {
          return "เจ้าของ: " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return H(e.number, 0, W, {
            one: K(e.number, "number") + " แผนก",
            other: K(e.number, "number") + " แผนก"
          });
        },
        Lark_Legacy_Search: "ค้นหา",
        Lark_Legacy_SearchEmpty: "ไม่มีผลลัพธ์ที่ตรงกัน",
        Lark_Legacy_StructureDepartments: "รายชื่อที่ติดต่อขององค์กร",
        Lark_Legacy_StructureExternal: "ผู้ติดต่อภายนอก",
        Lark_Legacy_Subdepartment: "ขยาย",
        Lark_Legacy_Sure: "ยืนยัน",
        Lark_Legacy_TableRecentchats: "แชทล่าสุด",
        Lark_Legacy_TooManyChatsToForward: "เลือกแชทมากเกินไป",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "คุณบล็อกผู้ใช้รายนี้เรียบร้อยแล้ว คุณไม่สามารถเพิ่มผู้ใช้รายนี้เข้าในกลุ่ม",
        Lark_NewContacts_CantAddToGroupBlockedTip: "คุณถูกผู้ใช้รายนี้บล็อก คุณไม่สามารถเพิ่มผู้ใช้รายนี้เข้าในกลุ่ม",
        Lark_Notification_DndBuzzUnable: "บุคคลนี้ไม่สามารถส่งเสียงได้เนื่องจากข้อจำกัดที่ผู้ดูแลกำหนด",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return H(e.select_count, 0, W, {
            one: "รายชื่อที่ติดต่อของอีเมล " + K(e.select_count, "select_count") + " รายการ",
            other: "รายชื่อที่ติดต่อของอีเมล " + K(e.select_count, "select_count") + " รายการ"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return H(e.select_count, 0, W, {
            one: "อีเมล " + K(e.select_count, "select_count") + " ฉบับ",
            other: "อีเมล " + K(e.select_count, "select_count") + " ฉบับ"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return H(e.num, 0, W, {
            one: "กล่องจดหมายสาธารณะ " + K(e.num, "num") + " กล่อง",
            other: "กล่องจดหมายสาธารณะ " + K(e.num, "num") + " กล่อง"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "พื้นที่ Wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "ภายนอก",
        Lark_Status_OrganizationSupervisor: "หัวหน้าองค์กร",
        Lark_Status_SupervisorMain: "หัวหน้างานหลัก",
        Lark_Status_SupervisorTag: "หัวหน้างาน",
        Lark_Status_TagUnregistered: "ไม่ได้ใช้งาน",
        Lark_UD_Picker_UnableToAddGroupType: "ไม่สามารถเพิ่มกลุ่มประเภทนี้ได้",
        Lark_Universe_React_Picker_Cancel: "ยกเลิก",
        Lark_Universe_React_Picker_Confirm: "ยืนยัน",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "มีสมาชิกนี้อยู่แล้ว"
      })
    },
    "vi-VN": {
      LWPicker: (j = function (e, t) {
        if (t && e == 1) {
          return "one";
        } else {
          return "other";
        }
      }, V = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, q = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "Bên đáng tin cậy",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "Không thể thêm người dùng bên ngoài.",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "Không thể bảo mật cuộc trò chuyện do các hạn chế về chính sách bảo mật",
        Lark_Chat_OfficialTag: "Chính thức",
        Lark_Contacts_EmailContacts: "Thẻ liên lạc",
        Lark_Contacts_PublicMailbox: "Hộp thư công khai",
        Lark_Core_SuperAdministratorLable: "Siêu quản trị viên",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "Kết nối",
        Lark_Group_PublicGroupLabel: "Công khai",
        Lark_Group_SelectedMultipleDeptDialogContent: "Tất cả các thành viên mới của các bộ phận được chọn sẽ tự động tham gia nhóm này.",
        Lark_Group_SelectedMultipleDeptDialogTitle: "Bộ phận mà bạn đã lựa chọn có chứa các bộ phận con. Tiếp tục?",
        Lark_Group_SelectedMultipleGroupsDialogContent: "Tất cả các thành viên mới của các nhóm được chọn sẽ tự động tham gia nhóm này.",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "Chọn nhiều nhóm?",
        Lark_Groups_CannotBeSentDue: "Không thể gửi đi do quản lý cấp phép",
        Lark_Groups_MyGroups: "Nhóm do tôi quản lý",
        Lark_Groups_NoPermissionSelectDept: "Bạn chỉ có thể chọn các bộ phận mà bạn quản lý",
        Lark_Groups_NoPermissionSelectGroup: "Không có quyền chọn nhóm này.",
        Lark_Groups_NoPermissionToAdd: "Không có quyền thêm",
        Lark_IM_CantSelectBlocked_Hover: "Bạn không thể chọn người dùng này do cài đặt của họ.",
        Lark_IM_ChatterPicker200NamesMax_Empty: "Có thể dán hàng loạt tối đa 200 tên. Vui lòng điều chỉnh và thử lại.",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "Số lượng tên mà bạn dán đã vượt quá giới hạn tối đa. Vui lòng điều chỉnh và thử lại.",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "Quay lại",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "Xem tất cả",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "\"" + e.name + "\"";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "Không thể tìm kiếm. Vui lòng thử lại sau.",
        Lark_IM_ForwardToRecentChats_Title: "Gần đây",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "Gần đây đã chuyển tiếp đến",
        Lark_IM_GroupNum_Text: function (e) {
          return q(e.select_count, 0, j, {
            one: V(e.select_count, "select_count") + " nhóm",
            other: V(e.select_count, "select_count") + " nhóm"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return q(e.select_count, 0, j, {
            one: "Đã chọn: " + V(e.select_count, "select_count") + " cuộc trò chuyện",
            other: "Đã chọn: " + V(e.select_count, "select_count") + " cuộc trò chuyện"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: ",",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return q(e.select_count, 0, j, {
            other: "Đã chọn: " + V(e.select_count, "select_count") + " tập tin"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return q(e.num, 0, j, {
            one: V(e.num, "num") + " nhóm người dùng",
            other: V(e.num, "num") + " nhóm người dùng"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "Nhóm người dùng",
        Lark_IM_SelectNumMember_Text: function (e) {
          return q(e.select_count, 0, j, {
            one: "Đã chọn: " + V(e.select_count, "select_count") + " thành viên",
            other: "Đã chọn: " + V(e.select_count, "select_count") + " thành viên"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "Không thể xem trước",
        Lark_Legacy_Cancel: "Hủy",
        Lark_Legacy_Confirm: "Xác nhận",
        Lark_Legacy_Contact: "Danh bạ",
        Lark_Legacy_DefaultName: "Tài liệu không có tiêu đề",
        Lark_Legacy_EmptyList: "Làm trống danh sách",
        Lark_Legacy_ItemDesc: function (e) {
          return "Chủ sở hữu:  " + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return q(e.number, 0, j, {
            one: V(e.number, "number") + " phòng ban",
            other: V(e.number, "number") + " phòng ban"
          });
        },
        Lark_Legacy_Search: "Tìm kiếm",
        Lark_Legacy_SearchEmpty: "Không có kết quả nào phù hợp",
        Lark_Legacy_StructureDepartments: "Danh bạ tổ chức",
        Lark_Legacy_StructureExternal: "Liên hệ bên ngoài",
        Lark_Legacy_Subdepartment: "Mở rộng",
        Lark_Legacy_Sure: "Xác nhận",
        Lark_Legacy_TableRecentchats: "Cuộc trò chuyện gần đây",
        Lark_Legacy_TooManyChatsToForward: "Đã chọn quá nhiều cuộc trò chuyện",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "Bạn đã chặn người dùng này. Bạn không thể thêm người dùng này vào nhóm.",
        Lark_NewContacts_CantAddToGroupBlockedTip: "Bạn bị chặn bởi người dùng này. Bạn không thể thêm người dùng này vào nhóm.",
        Lark_Notification_DndBuzzUnable: "Không thể thông báo cho người này do các hạn chế quản trị viên đặt ra.",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return q(e.select_count, 0, j, {
            one: V(e.select_count, "select_count") + " liên hệ email",
            other: V(e.select_count, "select_count") + " liên hệ email"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return q(e.select_count, 0, j, {
            one: V(e.select_count, "select_count") + " email",
            other: V(e.select_count, "select_count") + " email"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return q(e.select_count, 0, j, {
            one: V(e.select_count, "select_count") + " hộp thư công khai",
            other: V(e.select_count, "select_count") + " hộp thư công khai"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "Không gian Wiki: " + e.ownerName;
        },
        Lark_Status_ExternalTag: "Bên ngoài",
        Lark_Status_OrganizationSupervisor: "Giám sát viên của tổ chức",
        Lark_Status_SupervisorMain: "Người giám sát chính",
        Lark_Status_SupervisorTag: "Người giám sát",
        Lark_Status_TagUnregistered: "Không hoạt động",
        Lark_UD_Picker_UnableToAddGroupType: "Không thể thêm loại nhóm này",
        Lark_Universe_React_Picker_Cancel: "Hủy",
        Lark_Universe_React_Picker_Confirm: "Xác nhận",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "Thành viên đã tồn tại"
      })
    },
    "zh-CN": {
      LWPicker: (J = function (e, t) {
        return "other";
      }, Y = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, X = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "关联组织",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "无法添加外部用户",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "由于安全策略限制，无法使用密聊功能",
        Lark_Chat_OfficialTag: "官方",
        Lark_Contacts_EmailContacts: "邮箱联系人",
        Lark_Contacts_PublicMailbox: "公共邮箱",
        Lark_Core_SuperAdministratorLable: "超级管理员",
        Lark_Education_HeadTeacherLabel: "班主任",
        Lark_Education_SchoolParentContacts: "家校通讯录",
        Lark_Education_TeacherLabel: "老师",
        Lark_Group_ConnectGroupLabel: "互通",
        Lark_Group_PublicGroupLabel: "公开",
        Lark_Group_SelectedMultipleDeptDialogContent: "所有已选部门的新成员会自动加入此群",
        Lark_Group_SelectedMultipleDeptDialogTitle: "你所选择的部门包含子部门，是否确认选择？",
        Lark_Group_SelectedMultipleGroupsDialogContent: "所有已选群组的新成员会自动加入此群",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "确定选择多个群组？",
        Lark_Groups_CannotBeSentDue: "无发送权限",
        Lark_Groups_MyGroups: "我管理的群组",
        Lark_Groups_NoPermissionSelectDept: "仅可选择我管理的部门",
        Lark_Groups_NoPermissionSelectGroup: "没有权限选择这个群",
        Lark_Groups_NoPermissionToAdd: "无权限添加",
        Lark_IM_CantSelectBlocked_Hover: "由于对方的设置，你暂时无法选择该用户",
        Lark_IM_ChatterPicker200NamesMax_Empty: "暂不支持批量粘贴超过 200 人，请调整后重试",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "超过批量粘贴上限，请调整后重试",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "返回",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "查看全部",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "“" + e.name + "”";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "搜索失败，请稍后重试",
        Lark_IM_ForwardToRecentChats_Title: "最近对话",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "最近转发",
        Lark_IM_GroupNum_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: Y(e.select_count, "select_count") + " 个群组",
            other: Y(e.select_count, "select_count") + " 个群组"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: "已选：" + Y(e.select_count, "select_count") + " 个会话",
            other: "已选：" + Y(e.select_count, "select_count") + " 个会话"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: "，",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: "已选：" + Y(e.select_count, "select_count") + " 个条目",
            other: "已选：" + Y(e.select_count, "select_count") + " 个条目"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return X(e.num, 0, J, {
            other: Y(e.num, "num") + " 个用户组"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "用户组",
        Lark_IM_SelectNumMember_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: "已选：" + Y(e.select_count, "select_count") + " 人",
            other: "已选：" + Y(e.select_count, "select_count") + " 人"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "暂不支持预览",
        Lark_Legacy_Cancel: "取消",
        Lark_Legacy_Confirm: "确定",
        Lark_Legacy_Contact: "联系人",
        Lark_Legacy_DefaultName: "未命名文档",
        Lark_Legacy_EmptyList: "列表为空",
        Lark_Legacy_ItemDesc: function (e) {
          return "所有者：" + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return X(e.number, 0, J, {
            one: Y(e.number, "number") + " 个部门",
            other: Y(e.number, "number") + " 个部门"
          });
        },
        Lark_Legacy_Search: "搜索",
        Lark_Legacy_SearchEmpty: "没有找到结果",
        Lark_Legacy_StructureDepartments: "组织内联系人",
        Lark_Legacy_StructureExternal: "外部联系人",
        Lark_Legacy_Subdepartment: "下级",
        Lark_Legacy_Sure: "确定",
        Lark_Legacy_TableRecentchats: "最近聊天",
        Lark_Legacy_TooManyChatsToForward: "超过选择个数",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "你已屏蔽该用户，无法添加 Ta 为群成员",
        Lark_NewContacts_CantAddToGroupBlockedTip: "该用户已将你屏蔽，你无法添加 Ta 为群成员",
        Lark_Notification_DndBuzzUnable: "由于管理员设置，该用户不能被加急",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: Y(e.select_count, "select_count") + " 个邮箱联系人",
            other: Y(e.select_count, "select_count") + " 个邮箱联系人"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: Y(e.select_count, "select_count") + " 个邮箱",
            other: Y(e.select_count, "select_count") + " 个邮箱"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return X(e.select_count, 0, J, {
            one: Y(e.select_count, "select_count") + " 个公共邮箱",
            other: Y(e.select_count, "select_count") + " 个公共邮箱"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "知识库：" + e.ownerName;
        },
        Lark_Status_ExternalTag: "外部",
        Lark_Status_OrganizationSupervisor: "企业负责人",
        Lark_Status_SupervisorMain: "主负责人",
        Lark_Status_SupervisorTag: "负责人",
        Lark_Status_TagUnregistered: "未激活",
        Lark_UD_Picker_UnableToAddGroupType: "暂不支持添加该类型的群组",
        Lark_Universe_React_Picker_Cancel: "取消",
        Lark_Universe_React_Picker_Confirm: "确定",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "已是团队成员"
      })
    },
    "zh-HK": {
      LWPicker: (Z = function (e, t) {
        return "other";
      }, Q = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, $ = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "關聯組織",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "無法新增外部用戶",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "由於安全性策略限制，無法使用私密聊天功能",
        Lark_Chat_OfficialTag: "官方",
        Lark_Contacts_EmailContacts: "名片夾",
        Lark_Contacts_PublicMailbox: "公共電郵地址",
        Lark_Core_SuperAdministratorLable: "超級管理員",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "互通",
        Lark_Group_PublicGroupLabel: "公開",
        Lark_Group_SelectedMultipleDeptDialogContent: "所有已選部門的新成員會自動加入此群組",
        Lark_Group_SelectedMultipleDeptDialogTitle: "你所選擇的部門包含子部門，是否確認選擇？",
        Lark_Group_SelectedMultipleGroupsDialogContent: "所有已選群組的新成員會自動加入此群組",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "確定選擇多個群組嗎？",
        Lark_Groups_CannotBeSentDue: "無發送權限",
        Lark_Groups_MyGroups: "我管理的群組",
        Lark_Groups_NoPermissionSelectDept: "僅可選擇我管理的部門",
        Lark_Groups_NoPermissionSelectGroup: "沒有權限選擇此群組",
        Lark_Groups_NoPermissionToAdd: "無權限新增",
        Lark_IM_CantSelectBlocked_Hover: "由於對方的設定，你暫時無法選擇該用戶",
        Lark_IM_ChatterPicker200NamesMax_Empty: "大量貼上數量不得超過 200 人，請調整後重試",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "超過大量貼上的上限，請調整後重試",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "返回",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "查看全部",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "「" + e.name + "」";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "搜尋失敗，請稍後重試",
        Lark_IM_ForwardToRecentChats_Title: "最近對話",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "最近轉發",
        Lark_IM_GroupNum_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: Q(e.select_count, "select_count") + " 個群組",
            other: Q(e.select_count, "select_count") + " 個群組"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: "已選：" + Q(e.select_count, "select_count") + " 個對話",
            other: "已選：" + Q(e.select_count, "select_count") + " 個對話"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: "，",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: "已選：" + Q(e.select_count, "select_count") + " 個項目",
            other: "已選：" + Q(e.select_count, "select_count") + " 個項目"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return $(e.num, 0, Z, {
            other: Q(e.num, "num") + " 個用戶群組"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "用戶群組",
        Lark_IM_SelectNumMember_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: "已選：" + Q(e.select_count, "select_count") + " 人",
            other: "已選：" + Q(e.select_count, "select_count") + " 人"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "暫不支援預覽",
        Lark_Legacy_Cancel: "取消",
        Lark_Legacy_Confirm: "確定",
        Lark_Legacy_Contact: "聯絡人",
        Lark_Legacy_DefaultName: "未命名文件",
        Lark_Legacy_EmptyList: "列表為空",
        Lark_Legacy_ItemDesc: function (e) {
          return "擁有人：" + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return $(e.number, 0, Z, {
            one: Q(e.number, "number") + " 個部門",
            other: Q(e.number, "number") + " 個部門"
          });
        },
        Lark_Legacy_Search: "搜尋",
        Lark_Legacy_SearchEmpty: "找不到結果",
        Lark_Legacy_StructureDepartments: "組織內聯絡人",
        Lark_Legacy_StructureExternal: "外部聯絡人",
        Lark_Legacy_Subdepartment: "下級",
        Lark_Legacy_Sure: "確定",
        Lark_Legacy_TableRecentchats: "最近聊天",
        Lark_Legacy_TooManyChatsToForward: "超過選擇數量",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "你已封鎖該用戶，無法將對方新增為群組成員",
        Lark_NewContacts_CantAddToGroupBlockedTip: "此用戶已封鎖你，你無法新增對方為群組成員",
        Lark_Notification_DndBuzzUnable: "由於管理員設定，不能緊急聯絡此用戶",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: Q(e.select_count, "select_count") + " 個名片夾",
            other: Q(e.select_count, "select_count") + " 個名片夾"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: Q(e.select_count, "select_count") + " 個郵件",
            other: Q(e.select_count, "select_count") + " 個郵件"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return $(e.select_count, 0, Z, {
            one: Q(e.select_count, "select_count") + " 個公共電郵地址",
            other: Q(e.select_count, "select_count") + " 個公共電郵地址"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "知識庫：" + e.ownerName;
        },
        Lark_Status_ExternalTag: "外部",
        Lark_Status_OrganizationSupervisor: "企業負責人",
        Lark_Status_SupervisorMain: "主要負責人",
        Lark_Status_SupervisorTag: "負責人",
        Lark_Status_TagUnregistered: "未啟用",
        Lark_UD_Picker_UnableToAddGroupType: "暫不支援新增此類群組",
        Lark_Universe_React_Picker_Cancel: "取消",
        Lark_Universe_React_Picker_Confirm: "確定",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "已是團隊成員"
      })
    },
    "zh-TW": {
      LWPicker: (ee = function (e, t) {
        return "other";
      }, et = function (e, t, r) {
        if (!r) {
          return e;
        }
        if (isNaN(e)) {
          throw Error("Can't apply offset:" + r + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
        }
        return e - r;
      }, er = function (e, t, r, a, n) {
        if ({}.hasOwnProperty.call(a, e)) {
          return a[e];
        }
        if (t) {
          e -= t;
        }
        var o = r(e, n);
        if (o in a) {
          return a[o];
        } else {
          return a.other;
        }
      }, {
        Lark_B2B_TrustedParties: "關聯組織",
        Lark_Chat_Add_Member_PublicChatAddExternalUser_ErrrorTip: "無法新增外部使用者",
        Lark_Chat_CantSecretChatWithUserSecurityRestrict: "由於安全性策略限制，無法使用私密聊天功能",
        Lark_Chat_OfficialTag: "官方",
        Lark_Contacts_EmailContacts: "名片夾",
        Lark_Contacts_PublicMailbox: "公用信箱",
        Lark_Core_SuperAdministratorLable: "超級管理員",
        Lark_Education_HeadTeacherLabel: "Headteacher",
        Lark_Education_SchoolParentContacts: "School-Parent Contacts",
        Lark_Education_TeacherLabel: "Teacher",
        Lark_Group_ConnectGroupLabel: "互通",
        Lark_Group_PublicGroupLabel: "公開",
        Lark_Group_SelectedMultipleDeptDialogContent: "所有已選取部門的新成員會自動加入此群組",
        Lark_Group_SelectedMultipleDeptDialogTitle: "你所邀請的部門包含子部門，是否確認選擇？",
        Lark_Group_SelectedMultipleGroupsDialogContent: "所有已選群組的新成員會自動加入此群組",
        Lark_Group_SelectedMultipleGroupsDialogTitle: "複数のグループを選択しますか？",
        Lark_Groups_CannotBeSentDue: "無傳送權限",
        Lark_Groups_MyGroups: "我管理的群組",
        Lark_Groups_NoPermissionSelectDept: "僅可選擇我管理的部門",
        Lark_Groups_NoPermissionSelectGroup: "沒有選擇這個群組的權限",
        Lark_Groups_NoPermissionToAdd: "無新增的權限",
        Lark_IM_CantSelectBlocked_Hover: "由於對方的設定，你暫時無法選擇該使用者",
        Lark_IM_ChatterPicker200NamesMax_Empty: "批次貼上人數不能超過 200 人，請調整後重試",
        Lark_IM_ChatterPickerExceedNamesMax_BackUp_Empty: "超過批次貼上上限，請調整後重試",
        Lark_IM_ChatterPickerSearchNameCollapse_Button: "返回",
        Lark_IM_ChatterPickerSearchNameViewAll_Button: "查看全部",
        Lark_IM_ChatterPickerSearchName_Title: function (e) {
          return "「" + e.name + "」";
        },
        Lark_IM_ChatterPickerSearchName_UnableSearch_Toast: "搜尋失敗，請稍後重試",
        Lark_IM_ForwardToRecentChats_Title: "最近對話",
        Lark_IM_Forward_RecentlyForwardedTo_Title: "最近轉寄",
        Lark_IM_GroupNum_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: et(e.select_count, "select_count") + " 個群組",
            other: et(e.select_count, "select_count") + " 個群組"
          });
        },
        Lark_IM_PickerCommon_ChatsNum_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: "已選：" + et(e.select_count, "select_count") + " 個對話",
            other: "已選：" + et(e.select_count, "select_count") + " 個對話"
          });
        },
        Lark_IM_PickerCommon_Comma_Text: "，",
        Lark_IM_PickerCommon_FilesNum_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: "已選：" + et(e.select_count, "select_count") + " 個項目",
            other: "已選：" + et(e.select_count, "select_count") + " 個項目"
          });
        },
        Lark_IM_Picker_UserGroupNum_Text: function (e) {
          return er(e.num, 0, ee, {
            other: et(e.num, "num") + " 個使用者群組"
          });
        },
        Lark_IM_Picker_UserGroups_Breadcrum: "使用者群組",
        Lark_IM_SelectNumMember_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: "已選：" + et(e.select_count, "select_count") + " 人",
            other: "已選：" + et(e.select_count, "select_count") + " 人"
          });
        },
        Lark_IM_UnableToPreviewContent_Toast: "暫不支援預覽",
        Lark_Legacy_Cancel: "取消",
        Lark_Legacy_Confirm: "確定",
        Lark_Legacy_Contact: "聯絡人",
        Lark_Legacy_DefaultName: "未命名文件",
        Lark_Legacy_EmptyList: "清單為空",
        Lark_Legacy_ItemDesc: function (e) {
          return "擁有者：" + e.owner;
        },
        Lark_Legacy_NumberOrganizations: function (e) {
          return er(e.number, 0, ee, {
            one: et(e.number, "number") + " 個部門",
            other: et(e.number, "number") + " 個部門"
          });
        },
        Lark_Legacy_Search: "搜尋",
        Lark_Legacy_SearchEmpty: "沒有找到結果",
        Lark_Legacy_StructureDepartments: "組織內聯絡人",
        Lark_Legacy_StructureExternal: "外部聯絡人",
        Lark_Legacy_Subdepartment: "下級",
        Lark_Legacy_Sure: "確定",
        Lark_Legacy_TableRecentchats: "最近聊天",
        Lark_Legacy_TooManyChatsToForward: "超過可選數量",
        Lark_NewContacts_CantAddToGroupBlockedOthersTip: "你已封鎖該使用者，無法將對方新增為群組成員",
        Lark_NewContacts_CantAddToGroupBlockedTip: "該使用者已將你封鎖，你無法將其新增為群組成員",
        Lark_Notification_DndBuzzUnable: "由於管理員設定，無法對該使用者進行緊急",
        Lark_Picker_EmailContactNum_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: et(e.select_count, "select_count") + " 個信箱聯絡人",
            other: et(e.select_count, "select_count") + " 個信箱聯絡人"
          });
        },
        Lark_Picker_EmailNum_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: et(e.select_count, "select_count") + " 個信箱",
            other: et(e.select_count, "select_count") + " 個信箱"
          });
        },
        Lark_Picker_PublicMailboxNum_Text: function (e) {
          return er(e.select_count, 0, ee, {
            one: et(e.select_count, "select_count") + " 個公用信箱",
            other: et(e.select_count, "select_count") + " 個公用信箱"
          });
        },
        Lark_Search_DocsIntegration_WikiName: function (e) {
          return "知識庫：" + e.ownerName;
        },
        Lark_Status_ExternalTag: "外部",
        Lark_Status_OrganizationSupervisor: "企業負責人",
        Lark_Status_SupervisorMain: "主要負責人",
        Lark_Status_SupervisorTag: "負責人",
        Lark_Status_TagUnregistered: "未啟用",
        Lark_UD_Picker_UnableToAddGroupType: "暫不支援新增此類群組",
        Lark_Universe_React_Picker_Cancel: "取消",
        Lark_Universe_React_Picker_Confirm: "確定",
        Lark_Universe_React_Picker_ConfirmKeyMac: "(⌘+Enter)",
        Lark_Universe_React_Picker_ConfirmKeyWindows: "(Ctrl+Enter)",
        Project_T_MemberAlreadyExists_HoverToast: "已是團隊成員"
      })
    }
  };
  require.d(exports, {
    default: function () {
      return ea;
    }
  });
}