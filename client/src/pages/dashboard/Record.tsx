import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

interface RecordType {
  userId: string;
  date: Date;
  desc: string;
  amount: number;
  category: string;
  paymentMethod: string;
  __v: number;
}

interface RecordProps {
  records: RecordType[];
  setRecords: React.Dispatch<React.SetStateAction<RecordType[]>>;
}

const Record: React.FC<RecordProps> = ({ records, setRecords }) => {
  const { user } = useUser();
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchRecords = () => {
    axios
      .get(`http://localhost:5000/api/${user?.id}`)
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (user?.id) {
      fetchRecords();
      setIsLoaded(true);
    }
  }, [user?.id]);

  return (
    <div>
      <h1>Record</h1>
      {isLoaded ? (
        <div>
          <p>{JSON.stringify(records)}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Record;
