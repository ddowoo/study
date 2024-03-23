import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import PageLayout from "./components/blocks/pageLayout";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <PageLayout>
            <RouterProvider router={router} />
          </PageLayout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
