const CardComponent = ({ cards }) => {
  // Group tasks by status
  const notStarted = cards?.filter(task => task.status === "NOT_STARTED") || [];
  const inProgress = cards?.filter(task => task.status === "IN_PROGRESS") || [];
  const finished = cards?.filter(task => task.status === "FINISHED") || [];

  return (
    <div className="pl-20 mt-8">
      <div className="flex gap-10">
        <TaskColumn title="Not Started" status="NOT_STARTED" tasks={notStarted} />
        <TaskColumn title="In Progress" status="IN_PROGRESS" tasks={inProgress} />
        <TaskColumn title="Finished" status="FINISHED" tasks={finished} />
      </div>
    </div>
  );
};

const TaskColumn = ({ title, status, tasks }) => {
  // Define color mappings for each status type
  const statusColors = {
    NOT_STARTED: {
      bg: "bg-[#E2E8F0]", // Light red with opacity (10% of #F96666)
      text: "text-[#F96666]",
    },
    IN_PROGRESS: {
      bg: "bg-[#E2E8F0]", // Light blue with opacity (10% of #4379F2)
      text: "text-[#4379F2]",
    },
    FINISHED: {
      bg: "bg-[#E2E8F0]", // Light teal with opacity (10% of #009990)
      text: "text-[#009990]",
    },
  };

  // Get the corresponding colors for the current status
  const { bg: statusBgColor, text: statusTextColor } =
    statusColors[status] || { bg: "bg-gray-100", text: "text-gray-500" };

  return (
    <div className="w-[430px] ">
      <div className={`text-xl mb-2 ${statusTextColor}`}>
        <h4>{title}</h4>
        <hr className="w-full" />
      </div>

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.taskId}
            className={`rounded-2xl my-5 ${statusBgColor}`} // Card background remains as is
          >
            <div className="p-5 h-auto  ">
              <div className="flex justify-between">
                <p className="text-[#1E293B] text-[20px] font-bold">{task.taskTitle}</p>
                <img src="/more.svg" alt="More options" />
              </div>
              <p className="text-[#94A3B8] text-[16px] my-2">{task.taskDetails}</p>
              <div className="flex justify-between items-center">
                <div className="text-[14px] text-[#B771E5] bg-[#B771E51A] w-[120px] h-[30px] rounded-md text-center flex items-center justify-center">
                  {task.tag}
                </div>

                {/* Dynamically set the circle color based on status */}
                <div
                  className={`w-[35px] h-[35px] ${statusTextColor.replace(
                    "text",
                    "bg"
                  )} rounded-full`}
                ></div>
              </div>
            </div>
            <div className="w-full h-0.5 bg-gray-200 "></div>
            <div className="flex my-5 mx-5 justify-between items-center">
              {/* Dynamically set the status button border and text color based on status */}
              <div
                className={`border-2 ${statusTextColor.replace(
                  "text",
                  "border"
                )} rounded-2xl text-[14px] font-bold w-auto p-5 mb-5 h-[37px] ${statusTextColor} flex justify-center items-center`}
              >
                <p className="mr-2">{task.status.replace("_", " ")}</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down-icon lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </div>

              <div className="flex">
                <img src="/clock.svg" alt="Clock icon" />
                <p className="ml-3 text-[#94A3B8] text-[16px] font-bold ">
                  {new Date(task.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-4">No tasks</p>
      )}
    </div>
  );
};

export default CardComponent;