import { AuthProvider } from "@/provider/AuthContext";
import { PropsWithChildren } from "react";

export function RoleLayout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}
