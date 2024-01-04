import { useQueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const ProfileLayout = ({children}: PropsWithChildren) => {
    const queryClient = useQueryClient();
    
    return ( <>
    {children}
    </> );
}
 
export default ProfileLayout;