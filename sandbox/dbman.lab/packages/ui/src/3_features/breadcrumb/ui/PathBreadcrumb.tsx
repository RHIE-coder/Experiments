import { mainCategory, databaseCategory, toolsCategory} from "@/5_shared/config/nav-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/5_shared/shadcn-ui/components/ui/breadcrumb";
import { useLocation } from "react-router";

export default function PathBreadcrumb() {
  const location = useLocation();
  const servicePath = location.pathname.split("/").slice(1);
  const key = "/" + servicePath[0];

  const paths = Object.fromEntries([
    ...mainCategory,
    ...databaseCategory,
    ...toolsCategory,
  ].map(item => [item.url, item.title])) as Record<string, string>;

  const currentPageName = paths[key]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <span className="text-sm font-medium">{currentPageName}</span> 
        </BreadcrumbItem> 
      </BreadcrumbList>
    </Breadcrumb>
  )
}