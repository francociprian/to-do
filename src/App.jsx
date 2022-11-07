import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import TasksList from './components/TasksList';
import DateToDay from './common/DateToDay';
import { AiOutlinePlusCircle, AiFillBell } from 'react-icons/ai';


function ModalNavBar() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-sm font-medium text-white">
            <li className='h-6 w-6 rounded-full bg-white text-black border-black flex justify-center items-center'>
              <span className=''>f</span>
            </li>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-sky-700 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    This Menu is Comming...
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function NavBar() {
  return (
    <header className='text-sm py-2 bg-sky-700 text-white mb-4 px-5'>
      <nav className='flex justify-between w-full max-w-7xl mx-auto'>
        <h1>My Tasks</h1>
        <ul className='flex gap-3 items-center justify-center'>
          <li><AiFillBell className='h-5 w-5' /></li>
          <li className='flex'>
            <AiOutlinePlusCircle className='h-5 w-5' />
          </li>
          <li>
            <ModalNavBar />
          </li>
        </ul>
      </nav>
    </header>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <div className='mx-auto max-w-4xl'>
        <div>
          {/* <DateToDay /> */}
          <TasksList />
        </div>
      </div>
    </>
  );
}

export default App;