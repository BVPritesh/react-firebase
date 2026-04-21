import { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
// import { fetchUsers } from "./services/api";
import type { User } from "./types";
import { subscribeToUsers } from "./services/firestore";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToUsers((data: User[]) => {
      setUsers(data);
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  return (
    <div className="max-w-2xl mx-auto w-full py-8">
      <h2 className="text-center font-medium text-xl mb-2">Realtime Users</h2>
      <p className="text-center text-sm">This demo shows real-time updates to the user data. react.js with firebase database setup. Once data change from firebase data automatically updates the table.</p>
      <div className="py-4">
        <DataTable data={users} />
      </div>
    </div>
  );
}

export default App;