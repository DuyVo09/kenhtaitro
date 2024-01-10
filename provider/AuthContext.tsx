"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import UnAuthPage from "@/app/(auth)/un-auth/page";
import { IAuthContext } from "@/types/auth-data";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/apis/auth";

const AuthStateContext = createContext<IAuthContext>({
  isAuth: false,
  userProfile: null,
});

const roleLabel = (role: number) => {
  switch (role) {
    case 1:
      return "organization";
    case 2:
      return "business";
    case 3:
      return "admin";
    default:
      return "";
  }
};

export function useAuth() {
  return useContext(AuthStateContext);
}

function AuthProvider({
  children,
}: Partial<IAuthContext> & {
  children: ReactNode;
}) {
  console.log('init auth provider')
  const router = useRouter();
  const { isPending, isError, data, error, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  let role = roleLabel(data?.data?.role_id ?? 0);
  let allowed = true;
  const pathname = usePathname();

  if (pathname.startsWith("/organization") && role !== "organization") {
    allowed = false;
  }
  if (pathname.startsWith("/business") && role !== "business") {
    allowed = false;
  }
  if (pathname.startsWith("/admin") && role !== "admin") {
    allowed = false;
  }

  useEffect(() => {
    role = roleLabel(data?.data?.role_id ?? 0);
    console.log(`LL: AuthProvider -> role`, role);
    if (!isLoading) {
      if (
        pathname.startsWith("/organization") &&
        role !== "organization"
      ) {
        if (role) {
          console.log(pathname.replace("organization", role));
          router.push(pathname.replace("organization", role));
        } else {
          //router.push("/");
        }
      }
      if (pathname.startsWith("/business") && role !== "business") {
        if (role) {
          console.log(pathname.replace("business", role));
          router.push(pathname.replace("business", role));
        } else {
          //router.push("/");
        }
      }
      if (pathname.startsWith("/admin") && role !== "admin") {
        if (role) {
          console.log(pathname.replace("admin", role));
          router.push(pathname.replace("admin", role));
        } else {
          //router.push("/");
        }
      }
    }
  }, [data, router]);

  const contextValue = useMemo(() => {
    return {
      isAuth: allowed,
      userProfile: data?.data ?? null,
    };
  }, [allowed, data]);
  const ComponentToRender = allowed ? children : UnAuthPage();
  console.log('render auth provider: ', pathname);
  return (
    <AuthStateContext.Provider value={contextValue}>
      {ComponentToRender}
    </AuthStateContext.Provider>
  );
}

export { AuthProvider };
