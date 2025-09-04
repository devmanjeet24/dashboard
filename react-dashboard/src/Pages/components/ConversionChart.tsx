// import { Card, CardContent } from "@/components/ui/card";

// import { de } from "zod/v4/locales"

// export default function ConversionChart() {
//   return (
//     <Card className="p-4">
//       <CardContent>
//         <h2 className="text-gray-600 text-sm">Conversion Ratios</h2>
//         <p className="text-2xl font-bold">12</p>
//         <p className="text-green-600 text-sm">+3 Increased vs last week</p>

//         <div className="mt-4 space-y-2">
//           <div>
//             <p className="text-xs text-gray-500">Lead to Qualified (57%)</p>
//             <div className="w-full bg-gray-200 h-2 rounded">
//               <div className="bg-blue-500 h-2 rounded w-[57%]"></div>
//             </div>
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">Qualified to Proposal (22%)</p>
//             <div className="w-full bg-gray-200 h-2 rounded">
//               <div className="bg-sky-400 h-2 rounded w-[22%]"></div>
//             </div>
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">Proposal to Closed (21%)</p>
//             <div className="w-full bg-gray-200 h-2 rounded">
//               <div className="bg-indigo-400 h-2 rounded w-[21%]"></div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
const MultiProgressBar = () => {
  return (

    <>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative mt-[20px]">

        <div className="bg-indigo-600 h-4 absolute z-20" style={{ width: "40%" }}></div>

        <div className="bg-sky-400 h-4 absolute z-10" style={{ width: "70%" }}></div>



      </div>



      <div className="mt-[20px] gap-x-[20px]">

        <div className=" flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 block bg-indigo-600 rounded-full"></span>
            <p>Lead to Qualified</p>
          </div>

          <div>
            <small>57%</small>
          </div>
        </div>

        <div className=" flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 block bg-sky-400 rounded-full"></span>
            <p>Qualified to proposal</p>
          </div>

          <div>
            <small>22%</small>
          </div>
        </div>

        <div className=" flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 block bg-gray-200 rounded-full"></span>
            <p>Proposal to closed</p>
          </div>

          <div>
            <small>21%</small>
          </div>
        </div>

      </div>

    </>
  )
}

export default MultiProgressBar;