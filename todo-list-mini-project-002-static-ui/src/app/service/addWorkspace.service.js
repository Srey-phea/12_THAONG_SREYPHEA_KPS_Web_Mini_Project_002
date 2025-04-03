
import { baseUrl } from "./constants";

export async function createWorkspace(workspaceName) {
  const response = await fetch(`${baseUrl}/workspace`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ workspaceName }),
  });

  // if (!response.ok) {
  //   throw new Error("Failed to create workspace");
  // }

  return response.json();
}

export async function createTask(workspaceId, taskData) {
  const response = await fetch(`${baseUrl}/task/workspace/${workspaceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  // if (!response.ok) {
  //   throw new Error("Failed to create task");
  // }

  return response.json();
}

export async function fetchWorkspaces() {
  const response = await fetch(`${baseUrl}/workspace`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });


  return response.json();
}

// services/taskService.js
export async function fetchTasks(workspaceId) {
  try {
    const response = await fetch(`${baseUrl}/task/workspace/${workspaceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    console.log('first', data)
    return data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return []; 
  }

}