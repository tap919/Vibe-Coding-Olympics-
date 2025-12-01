import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Owner",
    avatar: "JD",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Member",
    avatar: "JS",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Member",
    avatar: "BJ",
  },
];

export default function TeamPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Team</h1>
        <Button>Invite Member</Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Team Vibes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Competing in Season 3 • 3 members • Rank #12
          </p>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Team Members</h2>
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardContent className="flex items-center gap-4 py-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                {member.avatar}
              </div>
              <div className="flex-1">
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
              <span className="text-sm text-muted-foreground">{member.role}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
