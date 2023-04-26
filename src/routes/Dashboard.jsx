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
      .catch(() => {
        setIsLoading(false)
      })
    // return () => {
    // }
  }, [data])
  return (

    <>
      <table className="table-auto text-center bg-[#3c92fa] w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#3c92fa] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-white">Airport</th>
            <th className="px-6 py-3 text-white">TIme</th>
            <th className="px-6 py-3 text-white">Arriving</th>
            <th className="px-6 py-3 text-white">Departing</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Airpost1</td>
            <td className="px-6 py-4">Time1</td>
            <td className="px-6 py-4">Arriving1</td>
            <td className="px-6 py-4">Departing</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default Dashboard