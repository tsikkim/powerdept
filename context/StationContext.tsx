import { createContext, ReactNode, useContext, useState } from "react";

type Station = "Tadong" | "Deorali" | null;

type StationContextType = {
  station: Station;
  setStation: (station: Station) => void;
};

const StationContext = createContext<StationContextType | undefined>(
  undefined
);

export function StationProvider({ children }: { children: ReactNode }) {
  const [station, setStation] = useState<Station>(null);

  return (
    <StationContext.Provider value={{ station, setStation }}>
      {children}
    </StationContext.Provider>
  );
}

export function useStation() {
  const context = useContext(StationContext);
  if (!context) {
    throw new Error("useStation must be used inside StationProvider");
  }
  return context;
}
