import { Routes, Route } from "react-router-dom";
import SignInPage from "pages/signin";
import SignUpPage from "pages/signup";
import { Navigate } from "react-router-dom";
import TodoPage from "pages/todo";
import { useAuth } from "context/authContext";

function App() {
  const { hasAuth } = useAuth();

  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            hasAuth ? (
              <Navigate to={"/todo"} replace />
            ) : (
              <Navigate to={"/signin"} replace />
            )
          }
        />
        <Route
          path="/signup"
          element={hasAuth ? <Navigate to={"/todo"} replace /> : <SignUpPage />}
        />
        <Route
          path="/signin"
          element={hasAuth ? <Navigate to={"/todo"} replace /> : <SignInPage />}
        />
        <Route
          path="/todo"
          element={hasAuth ? <TodoPage /> : <Navigate to={"/signin"} replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
