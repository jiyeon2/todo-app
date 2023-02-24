import { requestLogin } from 'apis/auth';
import { AuthData } from 'components/auth/types/auth.types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken, removeToken, saveToken } from 'utils/localStorage';

export type AuthContextType = {
  token: string | null;
  isLoggedIn: boolean;
  login: (authData: AuthData) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType>({
  token: null,
  isLoggedIn: false,
  login: (authData) => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState<string | null>(null);

  const isLoggedIn = useMemo(() => Boolean(token), [token]);

  const login = (authData: AuthData) => {
    requestLogin(authData).then(({ token }) => {
      saveToken(token);
      setToken(token);
      const origin = location.state?.from?.pathname || '/todo';
      navigate(origin); // 로그인 화면으로 이동하기 전 주소로 보내기
    });
  };

  const logout = () => {
    setToken(null);
    removeToken();
    navigate('/signin');
  };

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) {
      setToken(savedToken);
      navigate('/todo');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
