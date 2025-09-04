

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, GripHorizontal } from "lucide-react";
import ProgressBar from "../subcomponents/Progress";



const MiniBarChart =() => {
  return (
    <div className="w-full h-20">
      
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
          <ProgressBar/>
        </CardContent>
      </Card>
      
    </div>
  );
}

export default MiniBarChart;

