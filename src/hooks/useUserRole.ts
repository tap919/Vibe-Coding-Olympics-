"use client";

import { useState, useEffect } from "react";
import type { UserRole } from "@/lib/auth";

interface UseUserRoleReturn {
  role: UserRole | null;
  isLoading: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

export function useUserRole(): UseUserRoleReturn {
  const [role, setRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch from Clerk or your auth provider
    const fetchRole = async () => {
      try {
        // Placeholder for actual auth check
        setRole("user");
      } catch (error) {
        console.error("Failed to fetch user role:", error);
        setRole(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRole();
  }, []);

  return {
    role,
    isLoading,
    isAdmin: role === "admin" || role === "superadmin",
    isSuperAdmin: role === "superadmin",
  };
}
