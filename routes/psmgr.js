import { Router } from "express";

import { getList, addNew, editItem } from "../controller/psmgr.js";

const psmgr = Router();

psmgr.route("/").get(getList).post(addNew);
psmgr.route("/:id").patch(editItem);

export default psmgr;
