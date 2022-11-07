import React, { useState } from 'react';

export default function TaskModal({ note, onChange, onSave, onClose, visible }) {
  const [ color, setColor ] = useState('#000000');

  const handleColor = (event) => {
    setColor(event.target.value);
    onChange('color', event.target.value);
  }

  const handleSaveTask = (e) => {
    e.preventDefault();
    onSave();
  }

  if (!visible) return null;
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") onClose();
  }

  return (
    <section
      id="modal"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="my-6 mx-auto max-w-5xl">
        <div className="border-0 rounded-lg shadow-xl flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-2 border-b border-solid border-gray-400">
            <h3 className="text-[1.7rem] font-semibold">
              Create / Edit a New Task
            </h3>
            <button
              onClick={onClose}
              className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          <form
            method="dialog"
            className=''
          >
            <div className='px-8 pt-4 pb-7 bg-sky-100 border-0 z-[999999] min-w-[500px]'>
              <div className='flex justify-start items-center gap-2'>
                <label htmlFor='color'>Color: </label>
                <input type="color" id='color' value={color} onChange={handleColor} className='appearance-none border-none bg-transparent input-color'  />
              </div>
              <div className='flex flex-col justify-start gap-4'>
                <label htmlFor="title">Title</label>
                <input
                  required
                  type="text"
                  id="title"
                  value={note.title}
                  onChange={(event) => onChange('title', event.target.value)}
                  className='border border-black px-2 rounded-md'
                />
              </div>
              <div className='flex flex-col justify-start gap-4 mt-2'>
                <label htmlFor="content">Content</label>
                <textarea
                  required
                  id="content"
                  rows={5}
                  value={note.content}
                  onChange={(event) => onChange('content', event.target.value)}
                  className='border border-black rounded-md p-2'
                ></textarea>
              </div>
              {/* <div className='flex gap-2'>
                <input
                    required
                    type='checkbox'
                    id="expirationCheckbox"
                    className='border border-black px-2 rounded-md'
                    onClick={() => setExpiration(!expiration)}
                />
                <label htmlFor="expirationCheckbox">Expiration</label>
              </div>
              {expiration ? (
                <div className='flex flex-col justify-start gap-4'>
                  <label htmlFor="expiration"></label>
                  <input
                    required
                    type='date'
                    id="expiration"
                    onChange={(event) => onChange('expiration', event.target.value)}
                    className='border border-black px-2 rounded-md'
                  />
                </div>
              ) : null} */}
              <div className='flex flex-col justify-start gap-4'>
                  <label htmlFor="expiration"></label>
                  <input
                    required
                    type='date'
                    id="expiration"
                    value={note.expiration}
                    onChange={(event) => onChange('expiration', event.target.value)}
                    className='border border-black px-2 rounded-md'
                  />
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-white rounded-b-lg p-2 border-t border-solid border-gray-400'>
              <button className='text-sm text-black rounded-md bg-red-300 hover:bg-slate-300 px-3 py-1 my-2' onClick={onClose}>Close</button>
              <button className='text-sm text-black rounded-md bg-green-300 hover:bg-slate-300 px-3 py-1 my-2' onClick={handleSaveTask}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}