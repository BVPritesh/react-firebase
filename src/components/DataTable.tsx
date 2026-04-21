import type { User } from "../types";

interface Props {
  data: User[];
}

const DataTable = ({ data }: Props) => {
  return (
    <table border={1} cellPadding={10} className="border border-gray-200 w-full">
      <thead>
        <tr>
          <th className="bg-gray-300 py-2 px-1 border border-gray-200">ID</th>
          <th className="bg-gray-300 py-2 px-1 border border-gray-200">Name</th>
          <th className="bg-gray-300 py-2 px-1 border border-gray-200">Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td className="bg-white border border-gray-200 py-2 px-3 text-sm">{user.id}</td>
            <td className="bg-white border border-gray-200 py-2 px-3 text-sm">{user.name}</td>
            <td className="bg-white border border-gray-200 py-2 px-3 text-sm">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;