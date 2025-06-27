export const dynamic = "force-dynamic"; 

import { fetchUsers } from "../../actions/user";

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="space-y-4">
      {users && users.length > 0 ? (
        users.map((u: { id: string; username: string; password: string }) => (
          <div key={u.id} className="border p-2 rounded bg-white text-black">
            <p><strong>Username:</strong> {u.username}</p>
            <p><strong>Password:</strong> {u.password}</p>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
