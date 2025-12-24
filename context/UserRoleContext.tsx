import { createContext, useContext, useState } from "react";

type Role = "public" | "staff";

const UserRoleContext = createContext<{
  role: Role | null;
  setRole: (role: Role) => void;
}>({
  role: null,
  setRole: () => {},
});

export function UserRoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

export const useUserRole = () => useContext(UserRoleContext);
