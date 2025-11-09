// src/hooks/useAuth.jsx
import { useState } from "react";

// Custom hook to manage authentication state
export const useAuth = () => {
  const [user, setUser] = useState(null); // Store logged-in user
  return { user, setUser };
};
