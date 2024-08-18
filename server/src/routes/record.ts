import { Router } from "express";
import {
  addRecord,
  deleteRecord,
  editRecord,
  getRecord,
} from "../controllers/record";
const router: Router = Router();

router.get("/:userId", getRecord);
router.post("/", addRecord);
router.put("/:id", editRecord);
router.delete("/:id", deleteRecord);

export default router;
