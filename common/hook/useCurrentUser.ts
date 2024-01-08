import { useQueryClient } from "@tanstack/react-query";

interface IUseCurrentUser {

}

export const useCurrentUser = () => {
    const queryClient = useQueryClient();
}