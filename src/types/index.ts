export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "user" | "admin" | "superadmin";
  createdAt: Date;
}

export interface Season {
  id: string;
  name: string;
  slug: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
}

export interface Submission {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl?: string;
  userId: string;
  seasonId: string;
  teamName?: string;
  status: "pending" | "approved" | "rejected";
  voteCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vote {
  id: string;
  submissionId: string;
  userId: string;
  value: number;
  createdAt: Date;
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  seasonId?: string;
}

export interface Prize {
  id: string;
  title: string;
  description: string;
  value: string;
  imageUrl?: string;
  seasonId: string;
  rank: number;
}

export interface Team {
  id: string;
  name: string;
  members: string[];
  seasonId: string;
  createdAt: Date;
}
