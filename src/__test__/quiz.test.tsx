import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useQuiz } from "../store/server/useQuiz";

import React from "react";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

describe("홈 컴포넌트 테스트", () => {
  it("react query useQuiz 테스트", async () => {
    // const { result } = renderHook(() => useQuiz(10, "medium"), { wrapper });
    // await waitFor(() => !result.current.isLoading);
    // console.log("~~~~");
    // console.log(result);
  });
});
