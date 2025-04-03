"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createTask } from "@/app/service/addWorkspace.service";

export default function AddTaskComponent({ workspaceId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await createTask(workspaceId, data);
      reset();
      router.refresh(); // Refresh the page to show new data
    } catch (err) {
      setError(err.message || "Failed to create task");
      console.error("Error creating task:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create New Task</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Workspace Name</label>
          <input
            {...register("workspaceName", { required: "Workspace name is required" })}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter workspace name"
          />
          {errors.workspaceName && (
            <p className="text-red-500 text-sm mt-1">{errors.workspaceName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Task Title</label>
          <input
            {...register("title", { required: "Task title is required" })}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">End Date</label>
          <input
            {...register("endDate", { required: "Please select an end date" })}
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md text-white font-medium transition duration-200 ${
            isSubmitting ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isSubmitting ? "Creating..." : "Create Task"}
        </button>
      </form>
    </div>
  );
}
