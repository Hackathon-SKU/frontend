import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./libs/queryClient";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
