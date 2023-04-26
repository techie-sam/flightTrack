import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(true)
  useEffect(() => {
    axios.get("https://opensky-network.org/api/states/all")
      .then((res) => {
        setIsLoading(false)
        setData(res.data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
    return () => {
      null
    }
  }, [data])
  return (

    <div className="bg-[#e7edf4] h-screen pt-10">
      {
        isLoading ? "Loading" :
          <div className="m-auto relative overflow-x-auto shadow-md w-full md:w-[80vw] sm:rounded-lg">
            <table className="table-auto text-center bg-[#3c92fa] text-sm text-gray-500 dark:text-gray-400 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-[#3c92fa] dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-white">
                  <th className="py-3">Airport</th>
                  <th className="py-3">Time</th>
                  <th className="py-3">Arriving</th>
                  <th className="py-3">Departing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4">Airport1</td>
                  <td className="py-4">Time1</td>
                  <td className="py-4">Arriving1</td>
                  <td className="py-4">Departing</td>
                </tr>
              </tbody>
            </table>
          </div>
      }
    </div>
  )
}

export default Dashboard