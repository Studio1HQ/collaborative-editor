import { useEffect } from "react";
import { useVeltAuth } from "../hooks/useVeltAuth";

export const VeltAuthSync = () => {
  const { syncVeltUser } = useVeltAuth();

  useEffect(() => {
    syncVeltUser();
  }, []);

  return null;
};
