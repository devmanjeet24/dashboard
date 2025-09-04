import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { RefreshCcw } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 pb-2" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex justify-between items-center px-6 bg-white w-full">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <Badge variant="outline" className="text-[15px] text-[#5e5e5e] px-[10px] py-[4px]">Last updated: Feb 28, 2024 <span className="ml-2 text-[15px]"><RefreshCcw /></span></Badge>
        </div>
      </div>
    </header>
  )
}
