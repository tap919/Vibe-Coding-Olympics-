import { Button } from "@/components/ui/button";

const users = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "user", submissions: 3 },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "user", submissions: 5 },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "admin", submissions: 2 },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "user", submissions: 1 },
  { id: "5", name: "Charlie Wilson", email: "charlie@example.com", role: "superadmin", submissions: 0 },
];

export default function AdminUsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Users</h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Submissions</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.role === "superadmin"
                        ? "bg-purple-500/10 text-purple-500"
                        : user.role === "admin"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-gray-500/10 text-gray-500"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">{user.submissions}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Edit
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
