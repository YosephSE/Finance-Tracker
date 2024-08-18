import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Record = () => {
  const { user } = useUser();
  const [records, setRecords] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchRecords = () => {
    axios
      .get(`http://localhost:5000/api/${user?.id}`)
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.error(err);
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
