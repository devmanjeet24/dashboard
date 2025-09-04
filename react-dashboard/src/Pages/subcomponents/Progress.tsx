import { ArrowDown, ArrowUp } from "lucide-react";

const ProgressBar = () => {

    

  return (

    <>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative mt-[20px]">

        <div className="bg-indigo-600 h-4 absolute z-20" style={{ width: "40%" }}></div>

        <div className="bg-sky-400 h-4 absolute z-10" style={{ width: "70%" }}></div>



      </div>



      <div className="mt-[20px] gap-x-[20px]">

        <table className="w-full text-left">

            <thead>
                <tr>
                    <th className="text-gray-300">Channel </th>
                    <th className="text-gray-300">Metric </th>
                    <th className="text-gray-300">Total </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="text-gray-500">Websites</td>
                    <td className="text-gray-500">35</td>
                    <td className="flex items-center"><span><ArrowUp className="text-green-600 size-4"/></span>+5.2%</td>
                </tr>

                <tr>
                    <td className="text-gray-500">Email</td>
                    <td className="text-gray-500">25</td>
                    <td className="flex items-center"><span><ArrowDown className="text-red-600 size-4"/></span>+5.2%</td>
                </tr>

                <tr>
                    <td className="text-gray-500">Social Media</td>
                    <td className="text-gray-500">15</td>
                    <td className="flex items-center"><span><ArrowUp className="text-green-600 size-4"/></span>+5.2%</td>
                </tr>
            </tbody>
            
        </table>

      </div>

    </>
  )
}

export default ProgressBar;