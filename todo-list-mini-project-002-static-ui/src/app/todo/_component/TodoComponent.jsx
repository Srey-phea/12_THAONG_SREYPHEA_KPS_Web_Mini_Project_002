import React from 'react';
// import DetailComponent from './DetailComponent';
// import UserProfileComponent from './UserProfileComponent';
// import DetailCardComponent from './DetailCardComponent';
// import CardComponent from './CardComponent';
// import { userInformationService } from '@/app/service/userInformation.service';
// import { fetchTasksService, createWorkspace } from '@/app/service/card.service';
// import AddWorkspaceComponent from './AddWorkspaceComponent';


const TodoComponent = async () => {
  // const data = await userInformationService();

  //const springBootWorkspaceId = "84d2e069-168b-4467-aa8e-99f9c66915c8";
  // const hrdDesigntWorkspaceId = "3fe96c54-92d2-4c5f-b9be-dcbec05ab09c";
  // const webDesigntWorkspaceId = "8615a747-ffae-4045-942b-b8764f1a6eb2";

  //const cards = await fetchTasksService(springBootWorkspaceId);
  // const cards = await fetchTasksService(hrdDesigntWorkspaceId);
  // const cards = await fetchTasksService(webDesigntWorkspaceId);

  // const handleCreateWorkspace = async (workspaceName) => {
  //   try {
  //     await createWorkspace(workspaceName);
  //     // Refresh workspaces or update state
  //   } catch (error) {
  //     console.error("Error creating workspace:", error);
  //   }
  // };


  return (
    <div></div>
    // <div className='bg-white'>
    //   <div className="flex justify-between mt-6">
    //     <DetailComponent/>
    //     <UserProfileComponent userInfo={data}/>
    //   </div>
    //   <hr className='text-[#DBDDDE] mt-5'/>

    //   <DetailCardComponent/>
    //   <CardComponent />

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    //     <AddWorkspaceComponent 
    //       operator="add" 
    //       onCreateWorkspace={handleCreateWorkspace}
    //     />
        /* <AddTaskComponent 
          workspaceId={hrdDesigntWorkspaceId}
          onCreateTask={handleCreateTask}
        /> */
      // </div>
    // </div>  
  );
}

export default TodoComponent;