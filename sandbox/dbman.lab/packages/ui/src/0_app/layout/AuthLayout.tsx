// import { useEffect } from "react";
import { 
  Outlet,
  // useNavigate, 
} from "react-router";

export default function AuthLayout() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (session) {
  //     navigate("/");
  //   }
  // }, [session, navigate]);

  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </main>
  );
}
