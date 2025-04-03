// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddWorkspaceComponent= ({ operator, workspaceId, onCreateWorkspace })  => {
//   // const { handleSubmit, register, reset } = useForm();
//   const { handleSubmit, register, reset } = useForm();

//   const handleName = (data) => {
//     if (operator === "add") {
//       onCreateWorkspace(data.workspaceName);
//     } else {
//       // Handle update if needed
//       console.log("Update workspace:", workspaceId, data);
//     }
//     reset();
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Create New Workspace</h2>
//       <form onSubmit={handleSubmit(handleName)}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Please type your workspace name
//           </label>
//           <input
//             {...register("workspaceName", { required: true })}
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Workspace name"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//         >
//           Create
//         </button>
//       </form>
//     </div>
//   );
// }



import Link from 'next/link';

const AddWorkspaceComponent = () => {
  return (
    <div>
      <Link href="/task" passHref>
        <button className='absolute right-10 flex gap-3 font-bold text-white bg-[#4379F2] p-3 rounded-2xl hover:bg-[#3a6bd9] transition-colors'>
          <span>
            <img className='text-white' src="add-square.svg" alt="Add icon" />
          </span>
          New Task
        </button>
      </Link>
    </div>
  )
}

export default AddWorkspaceComponent;