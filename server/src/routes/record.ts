import { Router, Request, Response } from "express";
import ReacordModel from "../models/record";

const router: Router = Router();

router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.userId;
    const records = await ReacordModel.find({ userId });
    if (records.length === 0) {
      return res.status(404).json({ message: "No Record Found" });
    }
    return res.status(200).json(records);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Error" });
  }
});
router.post("/", async (req: Request, res: Response) => {
  try {
    const newRecord = new ReacordModel(req.body);
    const saved = await newRecord.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecord = req.body;
    const saved = await ReacordModel.findByIdAndUpdate(id, newRecord);

    if (!saved) {
      return res.status(404).json({ message: "Record Not Found" });
    }
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Error" });
  }
});
export default router;
