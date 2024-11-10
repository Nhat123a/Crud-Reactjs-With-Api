import  { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useLayouts = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);
  return{
    loading
  }
};
