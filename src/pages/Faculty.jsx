import { useState } from "react";
import { GraduationCap, Pencil, Trash } from "lucide-react";

const FacultyManagement = () => {
  const [faculties, setFaculties] = useState([
    "Dasturiy injiniring",
    "Matematika",
    "Kimyo-metallurgiya",
  ]);
  const [newFaculty, setNewFaculty] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedFaculty, setEditedFaculty] = useState("");

  const addFaculty = () => {
    if (newFaculty.trim() !== "") {
      setFaculties([...faculties, newFaculty]);
      setNewFaculty("");
    }
  };

  const deleteFaculty = (index) => {
    setFaculties(faculties.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedFaculty(faculties[index]);
  };

  const saveEditedFaculty = () => {
    const updatedFaculties = [...faculties];
    updatedFaculties[editingIndex] = editedFaculty;
    setFaculties(updatedFaculties);
    setEditingIndex(null);
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Fakultetlar</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nomi
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Amallar
              </th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((faculty, index) => (
              <tr key={index} className="bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex items-center">
                  <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedFaculty}
                      onChange={(e) => setEditedFaculty(e.target.value)}
                      className="border p-1 w-full"
                    />
                  ) : (
                    <span>{faculty}</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {editingIndex === index ? (
                    <button
                      onClick={saveEditedFaculty}
                      className="text-blue-500 hover:underline"
                    >
                      Saqlash
                    </button>
                  ) : (
                    <button
                      onClick={() => startEditing(index)}
                      className="text-green-500 hover:underline mx-2"
                    >
                      <Pencil className="h-5 w-5 inline" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteFaculty(index)}
                    className="text-red-500 hover:underline mx-2"
                  >
                    <Trash className="h-5 w-5 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value={newFaculty}
          onChange={(e) => setNewFaculty(e.target.value)}
          placeholder="Yangi fakultet nomi"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addFaculty}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Qo'shish
        </button>
      </div>
    </div>
  );
};

export default FacultyManagement;
