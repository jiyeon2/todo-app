import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { handleError } from "utils/error";
import { fetchSignIn, fetchSignup } from "apis/auth/sign";
import { storage } from "utils/storage";
import { AuthContextProps } from "./authContext.type";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextProps>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [hasAuth, setHasAuth] = useState(false);
  const navigator = useNavigate();

  const signUp: AuthContextProps["signUp"] = async (props) => {
    try {
      await fetchSignup(props);
      navigator("/signin");
    } catch (err) {
      handleError(err);
    }
  };

  const signIn: AuthContextProps["signIn"] = async (props) => {
    try {
      const res = await fetchSignIn(props);
      if (!res.data.access_token) throw new Error("no access token");
      storage.set("access_token", res.data.access_token);
      setHasAuth(true);
      navigator("/todo");
    } catch (err) {
      handleError(err);
    }
  };

  const signOut: AuthContextProps["signOut"] = () => {
    storage.remove("access_token");
    setHasAuth(false);
    navigator("/signin");
  };

  useEffect(() => {
    setHasAuth(storage.get("access_token") ? true : false);
  }, []);

  return (
    <AuthContext.Provider value={{ hasAuth, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  if (!AuthContext) throw new Error("no AuthContext");
  return useContext(AuthContext);
}
