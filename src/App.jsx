import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { fetchPosts } from "./api/api";

function App() {
  const { data, isLoading, isError, error, status } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  console.log(isLoading, status, data);

  return (
    <div className="container">
      <h1>Lets Build a Better 2025 ❤</h1>
    </div>
  );
}

export default App;
