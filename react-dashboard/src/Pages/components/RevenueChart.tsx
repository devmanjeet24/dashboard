// import {
//   LineChart,
//   Line,
//   Bar,
// //   BarChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { Card, CardContent } from "@/components/ui/card";

// const data = [
//   { name: "Jan", revenue: 4000, avg: 2400 },
//   { name: "Feb", revenue: 3000, avg: 2210 },
//   { name: "Mar", revenue: 2000, avg: 2290 },
//   { name: "Apr", revenue: 2780, avg: 2000 },
//   { name: "May", revenue: 1890, avg: 2181 },
//   { name: "Jun", revenue: 2390, avg: 2500 },
// ];

// export default function RevenueChart() {
//   return (
//     <Card className="p-4">
//       <CardContent>
//         <h2 className="text-gray-600 text-sm mb-2">Revenue Performance</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="revenue" fill="#8884d8" />
//             <Line type="monotone" dataKey="avg" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }




import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import MiniBarChart from "./SourceChart";

const data = [
  { month: "Jan", revenue: 2040, users: 2400 },
  { month: "Feb", revenue: 3000, users: 1398 },
  { month: "Mar", revenue: 2000, users: 9800 },
  { month: "Apr", revenue: 2780, users: 3908 },
  { month: "May", revenue: 1890, users: 4800 },
  { month: "Jun", revenue: 1890, users: 4800 },
]

const MixedGraph = () => {
  return (

    <div className="grid grid-cols-3 gap-4">

      <ResponsiveContainer width="100%" height={400} className="col-span-2">
      <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Area Graph */}
        <Area
          type="monotone"
          dataKey="revenue"
          fill="blue"
          stroke="#3b82f6"
          fillOpacity={0.3}
        />

        {/* Bar Graph */}
        <Bar dataKey="users" barSize={40} fill="blue" />
      </ComposedChart>
    </ResponsiveContainer>



    <MiniBarChart />


    </div>

    
  )
}


export default MixedGraph;