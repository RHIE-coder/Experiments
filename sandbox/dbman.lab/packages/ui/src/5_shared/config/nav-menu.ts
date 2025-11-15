import { 
    // FlaskRound,
    Home,
    LayoutDashboard,
    Settings,
    Package,
    Database,
    Waypoints,
    Play,
    ClipboardList,
    SearchCheck,
    BetweenHorizontalStart,
}from "lucide-react"

export type NavItem = {
    title: string,
    url: string,
    icon: React.ElementType,
    // children?: NavItem[]
}

export const mainCategory = [
    {
        title:"Home", // 대시보드
        url:"/",
        icon: Home,
    },
    {
        title:"Dashboard",
        url:"/dashboard",
        icon: LayoutDashboard,
    },
    {
        title:"Settings",
        url:"/settings",
        icon: Settings,
    },
    // ...(import.meta.env.MODE === "development" ? [{
    //     title:"실험실",
    //     url:"/sandbox",
    //     icon: FlaskRound,
    // }] : []),
] as const satisfies readonly NavItem[];

export const databaseCategory = [
    {
        title: "Package",
        url: "/package",
        icon: Package,
    },
    {
        title: "Connection",
        url: "/connection",
        icon: Database,
    },
    {
        title: "Design",
        url: "/design",
        icon: Waypoints,
    },
    {
        title: "Query",
        url: "/query",
        icon: Play,
    },
    {
        title: "Documenting",
        url: "/documenting",
        icon: ClipboardList,
    },

] as const satisfies readonly NavItem[];


export const toolsCategory = [
    {
        title:"Validation",
        url:"/validation",
        icon: SearchCheck,

    },
    {
        title:"Mocking",
        url:"/mocking",
        icon: BetweenHorizontalStart,
    },
] as const satisfies readonly NavItem[];