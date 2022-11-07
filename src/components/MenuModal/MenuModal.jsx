import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function MenuModal({ note, onEdit, onArchive, onDelete }) {
  console.log(note)
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center bg-transparent px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
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
          <Menu.Items className="absolute right-0 bottom-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className='px-1 py-1'>
              <p className=' text-[10px]'>Expiration:<span className='pl-2'>{note.expiration}</span></p>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onEdit}
                    className={`${active ? 'bg-[#15803d] text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onArchive}
                    className={`${active ? 'bg-sky-700 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Archive - Complete
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onDelete}
                    className={`${active ? 'bg-[#d90301] text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
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

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FFF"
        stroke="#22c55e"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#15803d"
        stroke="#22c55e"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#FFF"
        stroke="#579CD8"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#FFF"
        stroke="#579CD8"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#579CD8" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#0369A1"
        stroke="#92D2FF"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#0369A1"
        stroke="#92D2FF"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#92D2FF" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFF"
        stroke="#f62913"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#f62913" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#f62913" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#d90301"
        stroke="#ffdfd4"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#ffdfd4" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#ffdfd4" strokeWidth="2" />
    </svg>
  )
}
