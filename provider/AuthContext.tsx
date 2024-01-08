"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
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
  const { isPending, isError, data, error, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const router = useRouter();
  let role = roleLabel(data?.role);
  let allowed = true;

  if (router.pathname.startsWith("/organization") && role !== "organization") {
    allowed = false;
  }
  if (router.pathname.startsWith("/business") && role !== "business") {
    allowed = false;
  }
  if (router.pathname.startsWith("/admin") && role !== "admin") {
    allowed = false;
  }

  useEffect(() => {
    role = roleLabel(data?.role);
    console.log(`LL: AuthProvider -> role`, role);
    if (!isLoading) {
      if (
        router.pathname.startsWith("/organization") &&
        role !== "organization"
      ) {
        if (role) {
          console.log(router.pathname.replace("organization", role));
          router.push(router.pathname.replace("organization", role));
        } else {
          // router.push("/");
        }
      }
      if (router.pathname.startsWith("/business") && role !== "business") {
        if (role) {
          console.log(router.pathname.replace("business", role));
          router.push(router.pathname.replace("business", role));
        } else {
          router.push("/");
        }
      }
      if (router.pathname.startsWith("/admin") && role !== "admin") {
        if (role) {
          console.log(router.pathname.replace("admin", role));
          router.push(router.pathname.replace("admin", role));
        } else {
          router.push("/");
        }
      }
    }
  }, [data, router]);

  const contextValue = useMemo(() => {
    return {
      isAuth: allowed,
      userProfile: data,
    };
  }, [allowed, data]);
  const ComponentToRender = allowed ? children : UnAuthPage();

  return (
    <AuthStateContext.Provider value={contextValue}>
      {ComponentToRender}
    </AuthStateContext.Provider>
  );
}

export { AuthProvider };
