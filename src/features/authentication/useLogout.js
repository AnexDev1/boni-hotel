import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as LogoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });
  return { logout, isLoggingOut };
}
