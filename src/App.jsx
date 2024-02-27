import React, { Suspense, lazy } from "react";
const Post = lazy(() => import("./components/Posts"));

import LoadingComponent from "./components/LoadingComponent";

const App = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Post />
    </Suspense>
  );
};

export default App;
