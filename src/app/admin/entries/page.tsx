import { Button } from "@/components/ui/button";

const entries = [
  { id: "1", title: "Vibe App 1", user: "john@example.com", status: "pending", votes: 0 },
  { id: "2", title: "Cool Project", user: "jane@example.com", status: "approved", votes: 45 },
  { id: "3", title: "Awesome Vibes", user: "bob@example.com", status: "approved", votes: 89 },
  { id: "4", title: "Super App", user: "alice@example.com", status: "pending", votes: 0 },
  { id: "5", title: "Mega Project", user: "charlie@example.com", status: "rejected", votes: 0 },
];

export default function AdminEntriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Entries</h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Votes</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id} className="border-t">
                <td className="px-6 py-4 font-medium">{entry.title}</td>
                <td className="px-6 py-4 text-muted-foreground">{entry.user}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      entry.status === "approved"
                        ? "bg-green-500/10 text-green-500"
                        : entry.status === "pending"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="px-6 py-4">{entry.votes}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {entry.status === "pending" && (
                      <>
                        <Button size="sm" variant="outline">
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          Reject
                        </Button>
                      </>
                    )}
                    {entry.status !== "pending" && (
                      <Button size="sm" variant="ghost">
                        View
                      </Button>
                    )}
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
