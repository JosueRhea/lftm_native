import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSupabase } from "./use-sp";
import { createRecord, getCurrentActivity, stopRecord } from "../api";
import { ActivityProps, RecordWithRelationsProps } from "../api/types";

interface Props {
  userId: string;
}

export function useCurrentActivity({ userId }: Props) {
  const { client } = useSupabase();
  const key = ["currentActivity", userId];
  const { data, error, isLoading, isRefetching } = useQuery({
    queryKey: key,
    queryFn: () => getCurrentActivity(client, { userId }),
  });
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries(key);
  };

  const { mutate: startActivityMut } = useMutation({
    mutationFn: async ({ record }: { record: RecordWithRelationsProps }) => {
      await createRecord(client, {
        activityId: record.activity.id,
        userId,
      });
    },
    onMutate: async ({ record }: { record: RecordWithRelationsProps }) => {
      await queryClient.cancelQueries();
      const previousRecords = queryClient.getQueryData(key);

      queryClient.setQueryData(key, record);
      return { previousRecords };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(key, context?.previousRecords);
    },
    onSettled: () => {
      queryClient.invalidateQueries(key);
    },
  });

  const { mutate: stopActivityMut } = useMutation({
    mutationFn: async ({ record }: { record: RecordWithRelationsProps }) => {
      await stopRecord(client, {
        userId,
        currentRecordId: record.id,
      });
    },
    onMutate: async () => {
      await queryClient.cancelQueries();
      const previousRecords = queryClient.getQueryData(key);
      queryClient.setQueryData(key, null);
      return { previousRecords };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(key, context?.previousRecords);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const startActivity = ({ activity }: { activity: ActivityProps }) => {
    const newRecord = {
      activity,
      activity_id: activity.id,
      created_at: new Date().toISOString(),
      user_id: userId,
      end_date: null,
      id: "",
    } satisfies RecordWithRelationsProps;
    startActivityMut({ record: newRecord });
  };

  const stopActivity = ({ record }: { record: RecordWithRelationsProps }) => {
    stopActivityMut({ record });
  };

  return {
    data,
    error,
    isLoading,
    invalidate,
    isRefetching,
    startActivity,
    stopActivity,
  };
}
