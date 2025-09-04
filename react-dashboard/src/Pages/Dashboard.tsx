import { AppSidebar } from "@/components/app-sidebar"
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
// import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

// import RevenueChart from "./components/RevenueChart";
// import SourceChart from "./components/SourceChart";
// import ConversionChart from "./components/ConversionChart";
// import LeadsTable from "./components/LeadsTable";

import data from "./data.json"
import Cards from "./components/Cards"
// import ConversionChart from "./components/ConversionChart"
// import SourceChart from "./components/SourceChart"
// import RevenueChart from "./components/RevenueChart"
import MixedGraph from "./components/RevenueChart"
// import LeadsTable from "./components/LeadsTable"

const Dashboard = () => {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }>
            <AppSidebar />
            <SidebarInset>
                <SiteHeader />

                <div className="p-5">
                    <Cards />


                    <div className=" mt-4">
                        <MixedGraph />
                    </div>
                    <div className="mt-4">
                        {/* <LeadsTable /> */}
                        <DataTable data={data} />
                    </div>


                </div>













                {/* <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">

            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div> */}
            </SidebarInset>
        </SidebarProvider>
    )
}


export default Dashboard;