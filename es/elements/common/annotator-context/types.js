export var CREATE = 'create';
export var Action;
/* eslint-disable @typescript-eslint/no-explicit-any */

(function (Action) {
  Action["CREATE_START"] = "create_start";
  Action["CREATE_END"] = "create_end";
  Action["DELETE_START"] = "delete_start";
  Action["DELETE_END"] = "delete_end";
  Action["SET_ACTIVE"] = "set_active";
  Action["UPDATE_START"] = "update_start";
  Action["UPDATE_END"] = "update_end";
  Action["REPLY_CREATE_START"] = "reply_create_start";
  Action["REPLY_CREATE_END"] = "reply_create_end";
  Action["REPLY_DELETE_START"] = "reply_delete_start";
  Action["REPLY_DELETE_END"] = "reply_delete_end";
  Action["REPLY_UPDATE_START"] = "reply_update_start";
  Action["REPLY_UPDATE_END"] = "reply_update_end";
})(Action || (Action = {}));

export var Status;

(function (Status) {
  Status["ERROR"] = "error";
  Status["PENDING"] = "pending";
  Status["SUCCESS"] = "success";
})(Status || (Status = {}));
//# sourceMappingURL=types.js.map