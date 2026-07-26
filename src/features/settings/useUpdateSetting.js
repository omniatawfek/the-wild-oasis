import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as UpdateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateSettingApi,
    onSuccess: () => {
      toast.success("setting Successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    updateSetting,
    isUpdating,
  };
}
