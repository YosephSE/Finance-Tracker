import Form from "./Form";
import Record from "./Record";
import Hero from "./Hero";
import NavBar from "./NavBar";
import { useState } from "react";

interface RecordType {
  userId: string;
  date: Date;
  desc: string;
  amount: number;
  category: string;
  paymentMethod: string;
  __v: number;
}

const DashBoard = () => {
  const [records, setRecords] = useState<RecordType[]>([]);

  return (
    <div>
      <NavBar />
      <Hero />
      <Form setRecords={setRecords} />
      <Record records={records} setRecords={setRecords} />
    </div>
  );
};

export default DashBoard;
