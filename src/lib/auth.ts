export type UserRole = "user" | "admin" | "superadmin";

export const checkRole = (userRole: UserRole, requiredRole: UserRole): boolean => {
  const roleHierarchy: Record<UserRole, number> = {
    user: 1,
    admin: 2,
    superadmin: 3,
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

export const isAdmin = (role: UserRole): boolean => {
  return checkRole(role, "admin");
};

export const isSuperAdmin = (role: UserRole): boolean => {
  return checkRole(role, "superadmin");
};
