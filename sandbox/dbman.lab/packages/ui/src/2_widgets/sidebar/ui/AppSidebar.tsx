import * as React from "react";
import { cn } from "@/5_shared/shadcn-ui/lib/utils";
import {
  useSidebar,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarHeader,
  SidebarFooter,
} from "@/5_shared/shadcn-ui/components/ui/sidebar";

import { mainCategory, databaseCategory, toolsCategory } from "@/5_shared/config/nav-menu";
import { NavLink } from "react-router";
import { ThemeToggle } from "@/3_features/theme-mode/ui/ThemeToggle";

const contents = {
  "MAIN": mainCategory,
  "DATABASE": databaseCategory,
  "TOOLS": toolsCategory,
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const sidebarCtx = useSidebar();

  return (
    <Sidebar {...props} className="group">
      <SidebarHeader className={cn("h-16 p-3")}>
        <SidebarMenu className="flex h-full items-center justify-center">
          <SidebarMenuItem className="flex items-center gap-2">
            <img
              src="logo-symbol.png"
              alt="Perseus"
              className="h-[1.6rem] w-[1.6rem]"
            />
            <span className="text-2xl font-bold group-data-[state=collapsed]:hidden whitespace-nowrap">
              Perseus
            </span>
            <ThemeToggle className="group-data-[state=collapsed]:hidden" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator className="m-0" />

      {/* MAIN */}
      <SidebarContent
        className={cn(
          sidebarCtx.state === "collapsed"
            ? "group-data-[collapsible=icon]:overflow-auto group-data-[collapsible=icon]:overflow-x-hidden hide-scrollbar "
            : "hide-scrollbar"
        )}
      >
        {Object.entries(contents).map(([groupLabel, items], idx, arr) => (
          <React.Fragment key={groupLabel}>
            <SidebarGroup>
              <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.url}>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"} // "홈" 링크를 위한 end prop 추가
                        className={({ isActive }) => {
                          return cn(
                            // 1. 버튼의 기본 모양 스타일을 여기에 모두 정의합니다.
                            "relative z-10 flex cursor-pointer items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            // 👇 사이드바 축소 시 스타일 변경
                            "group-data-[state=collapsed]:p-0 group-data-[state=collapsed]:h-9 group-data-[state=collapsed]:w-9 group-data-[state=collapsed]:justify-center",
                            // 2. isActive 상태에 따라 색상 스타일을 적용합니다.
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          );
                        }}
                      > 
                        <item.icon className="h-4 w-4" />
                        {/* 👇 텍스트가 줄바꿈되지 않도록 whitespace-nowrap을 추가하는 것이 좋습니다. */}
                        <span className="whitespace-nowrap group-data-[state=collapsed]:hidden">
                          {item.title}
                        </span>
                      </NavLink>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {idx < arr.length - 1 && <SidebarSeparator className="m-0" />}
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter>
        
      </SidebarFooter>
    </Sidebar>
  );
}
