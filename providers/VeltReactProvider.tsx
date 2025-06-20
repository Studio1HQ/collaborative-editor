import { VeltProvider } from "@veltdev/react";
import React from "react";

const VeltReactProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
      {children}
    </VeltProvider>
  );
};

export default VeltReactProvider;
