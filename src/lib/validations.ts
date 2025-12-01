import { z } from "zod";

export const submissionSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000),
  url: z.string().url("Please enter a valid URL"),
  seasonId: z.string().uuid("Invalid season ID"),
  teamName: z.string().optional(),
});

export const voteSchema = z.object({
  submissionId: z.string().uuid("Invalid submission ID"),
  value: z.number().min(1).max(5),
});

export const seasonSchema = z.object({
  name: z.string().min(3).max(100),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  description: z.string().optional(),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;
export type VoteInput = z.infer<typeof voteSchema>;
export type SeasonInput = z.infer<typeof seasonSchema>;
