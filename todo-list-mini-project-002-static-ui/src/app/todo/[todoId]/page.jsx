import React from 'react'
import CardComponent from '../_component/CardComponent';
import SideBarComponent from '../_component/SideBarComponent';
import TodoComponent from '../_component/TodoComponent';
import { fetchTasksService } from '@/app/service/card.service';
import DetailComponent from '../_component/DetailComponent';
import UserProfileComponent from '../_component/UserProfileComponent';
import { userInformationService } from '@/app/service/userInformation.service';
import AddWorkspaceComponent from '../_component/AddWorkspaceComponent';
import DetailCardComponent from '../_component/DetailCardComponent';

const ToDoDetail = async ({ params: paramsPromise }) => {

  // get dynamic route (workspace id)
  const params = await paramsPromise || null;
  const workspaceId = params?.todoId || "";

  const dataCard = await fetchTasksService(workspaceId);
  const cards = dataCard.payload;
  // console.log('cards', cards);

  const data = await userInformationService();

    const handleCreateWorkspace = async (workspaceName) => {
      try {
        await onCreateWorkspace(workspaceName);
      } catch (error) {
        console.error("Error creating workspace:", error);
      }
    };
  

  return (
    <div className="flex">
      <div className="w-[20%] h-full">
        <SideBarComponent/>
      </div>
      <div className="w-[75%] h-full">
       <div className="flex justify-between mt-6">
        <DetailComponent/>
        <UserProfileComponent userInfo={data}/>
        
      </div>
      <DetailCardComponent workspaceId={workspaceId}/>
      <CardComponent cards={cards}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <AddWorkspaceComponent 
          operator="add" 
          onCreateWorkspace={handleCreateWorkspace}
        />
        </div>
    </div>
  )
}

export default ToDoDetail