import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/5_shared/shadcn-ui/components/ui/sidebar";
import AppSidebar from "@/2_widgets/sidebar/ui/AppSidebar";
import { Outlet } from "react-router";
import { Toaster } from "@/5_shared/shadcn-ui/components/ui/sonner";
import PathBreadcrumb from "@/3_features/breadcrumb/ui/PathBreadcrumb";
import { Separator } from "@radix-ui/react-separator";

export default function MainLayout() {

  return (
    <SidebarProvider>
      <AppSidebar collapsible="icon" />

      <main>
        <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <PathBreadcrumb />
          </div>
        </header>
        </SidebarInset>
        <section className="p-3">
          <Outlet />
          <Toaster />
        </section>
      </main>
    </SidebarProvider>
  );
}
