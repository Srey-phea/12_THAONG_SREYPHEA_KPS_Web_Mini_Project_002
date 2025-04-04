
import Link from 'next/link';

const AddWorkspaceComponent = () => {
  return (
    <div>
      <Link href="/task" passHref>
        <button className='absolute right-20 bottom-15 flex gap-3 font-bold text-white bg-[#4379F2] p-3 rounded-2xl hover:bg-[#3a6bd9] transition-colors'>
          <span>
            <img className='text-white' src="/add-square.svg" alt="Add icon" />
          </span>
          New Task
        </button>
      </Link>
    </div>
  )
}

export default AddWorkspaceComponent;