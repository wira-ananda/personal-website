import { useEffect, useState } from "react";

export default function useFetch(link) {
  const [Data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(link)
      .then((res) => {
        if (!res.ok) {
          throw Error("tidak dapat menangkap data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [link]);

  return { Data, error };
}
