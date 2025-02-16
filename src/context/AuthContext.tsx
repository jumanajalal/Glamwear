import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  showAuthPage: boolean;
  showAuthModal: boolean;
  setShowAuthPage: (show: boolean) => void;
  setShowAuthModal: (show: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthPage, setShowAuthPage] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const login = async (email: string, password: string) => {
    // TODO: Implement actual authentication
    setIsAuthenticated(true);
    setShowAuthPage(false);
  };

  const signup = async (username: string, email: string, password: string) => {
    // TODO: Implement actual registration
    setIsAuthenticated(true);
    setShowAuthPage(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      showAuthPage,
      showAuthModal,
      setShowAuthPage,
      setShowAuthModal,
      login, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
