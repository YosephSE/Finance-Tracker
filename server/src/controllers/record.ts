import RecordModel from "../models/record";
import { Request, Response } from "express";

const editRecord = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecord = req.body;
    const saved = await RecordModel.findByIdAndUpdate(id, newRecord);

    if (!saved) {
      return res.status(404).json({ message: "Record Not Found" });
    }
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Error" });
  }
};

const deleteRecord = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const saved = await RecordModel.findByIdAndDelete(id);
    if (!saved) {
      return res.status(404).json({ message: "Record Not Found" });
    }
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Error" });
  }
};

const addRecord = async (req: Request, res: Response) => {
  try {
    const newRecord = new RecordModel(req.body);
    const saved = await newRecord.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal error" });
  }
};

const getRecord = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.userId;
    const records = await RecordModel.find({ userId });
    if (records.length === 0) {
      return res.status(200).send([]);
    }
    return res.status(200).json(records);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Error" });
  }
};

export { getRecord, deleteRecord, addRecord, editRecord };
