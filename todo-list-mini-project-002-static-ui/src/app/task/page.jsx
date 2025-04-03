
import { fetchTasks } from "../service/addWorkspace.service";
import AddTaskComponent from "../todo/_component/AddTaskComponent";

export default async function TaskPage({ params }) {
  const workspaceId = params.workspaceId;
  const response = await fetchTasks(workspaceId);
  const tasks = response.payload || []; // Extract tasks from payload

  console.log('Workspace ID:', workspaceId);
  console.log('Tasks:', tasks);

  // Status color mapping
  const statusColors = {
    NOT_STARTED: 'bg-gray-100 text-gray-800',
    IN_PROGRESS: 'bg-blue-100 text-blue-800',
    FINISHED: 'bg-green-100 text-green-800'
  };

  // Tag color mapping
  const tagColors = {
    DESIGN: 'bg-purple-100 text-purple-800',
    HOMEWORK: 'bg-yellow-100 text-yellow-800',
    DOCUMENTATION: 'bg-blue-100 text-blue-800',
    default: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Task Creation Form */}
        <AddTaskComponent workspaceId={workspaceId} />
        
        {/* Tasks List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
          
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No tasks yet. Create your first task!
            </div>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div 
                  key={task.taskId} 
                  className="p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{task.taskTitle}</h3>
                      {task.taskDetails && (
                        <p className="text-gray-600 mt-1">{task.taskDetails}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        tagColors[task.tag] || tagColors.default
                      }`}>
                        {task.tag}
                      </span>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        statusColors[task.status]
                      }`}>
                        {task.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 mr-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                      Due: {new Date(task.endDate).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      Created: {new Date(task.startDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



