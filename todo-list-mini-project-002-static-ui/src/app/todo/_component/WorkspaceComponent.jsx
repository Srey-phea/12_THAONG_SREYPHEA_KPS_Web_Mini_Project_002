'use client'

import { useEffect, useState } from "react";
import { fetchTasksService } from "@/app/service/card.service";
import Link from "next/link";


const WorkspaceComponent = ({ workspaceList }) => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [selectedWorkspace, setSelectedWorkspace] = useState(null); // Track selected workspace
  // const [tasks, setTasks] = useState([]); // Store fetched tasks
  const {payload} = workspaceList;
  const fav = payload.filter((item) => item.isFavorite);
  console.log("Favorites:", fav);
  

  // Generate random colors for workspaces
  const getRandomColor = () => {
    const colors = ["#F96666", "#4379F2", "#009990", "#B771E5", "#E5A771"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        setLoading(true);

        if (!workspaceList || !workspaceList.payload || !Array.isArray(workspaceList.payload)) {
          throw new Error("Invalid response structure");
        }

        // Assign colors dynamically
        const workspacesWithColors = workspaceList.payload.map(workspace => ({
          ...workspace,
          color: getRandomColor(),
        }));

        setWorkspaces(workspacesWithColors);
      } catch (err) {
        setError("Failed to fetch workspaces");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkspaces();
  }, []);

  // Handle workspace selection and fetch tasks
  const handleWorkspaceClick = async (workspace) => {
    setSelectedWorkspace(workspace); // Set selected workspace

    try {
      const taskData = await fetchTasksService(workspace.workspaceId);
      setTasks(taskData.payload || []);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      setTasks([]); // Reset tasks if there's an error
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="px-15 mt-20">
      {/* Header */}
      <div className="flex justify-between">
        <h2 className="text-[#94A3B8] font-bold text-3xl mb-5">Workspace</h2>
        <img src="/add-square.svg" alt="Add Workspace" />
      </div>

      {/* Workspace List */}
      {workspaces.length === 0 ? (
        <div>No workspaces found</div>
      ) : (
        workspaces.map((workspace) => (
          <Link href={`/todo/${workspace.workspaceId}`}
            key={workspace.workspaceId}
            className={`flex justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-200 transition`}
            onClick={() => handleWorkspaceClick(workspace)} // Updated function call
          >
            <div className="flex gap-4">
              {/* Dynamic Color Circle */}
              <div
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: workspace.color }}
              >
                <span className="text-white font-bold text-lg ">{workspace.workspaceName.charAt(0)}</span>
              </div>
              <h3 className="text-xl mt-2">{workspace.workspaceName || "Unnamed Workspace"}</h3>
            </div>
            <img src="/more.svg" alt="More" className="mt-4" />
          </Link>
        ))
      )}

    </div>
  );
};

export default WorkspaceComponent;
