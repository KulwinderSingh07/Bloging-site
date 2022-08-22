import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortcontrol = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortcontrol.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("couldnt fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisloading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch has been aborted");
          } else {
            setisloading(false);
            setError(err.message);
          }
        });
      return abortcontrol.abort;
    }, 1000);
  }, [url]);
  return { data, isloading, error };
};
export default useFetch;
