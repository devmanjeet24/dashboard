import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, GripHorizontal } from "lucide-react";
import ChartLineDots from "../subcomponents/Leadcharts";
import ChartBarLabel from "../subcomponents/Activecharts";
import MultiProgressBar from "./ConversionChart";


export default function Cards() {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {/* Total Leads */}
      <Card className="p-4 ">
        <CardHeader className="border-b px-2 pb-2 leadpadd">
          <CardTitle className="text-gray-600 text-sm flex items-center justify-between">Total Leads <span><GripHorizontal /></span></CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex">
            <p className="text-3xl font-bold">1,247</p>
            <p className="flex items-center gap-1 text-sm">
              <ArrowUpRight size={14} className="text-green-600" /> <span className="text-green-600">+12.5%</span> Increased vs last week
            </p>
          </div>
          <ChartLineDots />
        </CardContent>
      </Card>

      {/* Active Opportunities */}
      <Card className="p-4 ">
        <CardHeader className="border-b px-2 pb-2 leadpadd">
          <CardTitle className="text-gray-600 text-sm flex items-center justify-between">Total Leads <span><GripHorizontal /></span></CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex">
            <p className="text-3xl font-bold">1,247</p>
            <p className="flex items-center gap-1 text-sm">
              <ArrowUpRight size={14} className="text-green-600" /> <span className="text-green-600">+12.5%</span> Increased vs last week
            </p>
          </div>
          <ChartBarLabel />
        </CardContent>
      </Card>


      {/* conversion ratio  */}


      <Card className="p-4 ">
        <CardHeader className="border-b px-2 pb-2 leadpadd">
          <CardTitle className="text-gray-600 text-sm flex items-center justify-between">Total Leads <span><GripHorizontal /></span></CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex">
            <p className="text-3xl font-bold">1,247</p>
            <p className="flex items-center gap-1 text-sm">
              <ArrowUpRight size={14} className="text-green-600" /> <span className="text-green-600">+12.5%</span> Increased vs last week
            </p>
          </div>
          <MultiProgressBar />
        </CardContent>
      </Card>


      


    </div>
  );
}
