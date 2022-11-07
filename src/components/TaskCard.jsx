import React from 'react';
import MenuModal from './MenuModal/MenuModal';

export default function TaskCard({ note, onArchive, onDelete, onEdit }) {

  const handleDelete = () => {
    onDelete(note.id);
  }

  const handleEdit = () => {
    onEdit(note)
  };

  const handleArchive = () => {
    onArchive(note.id)
  };

  return (
    <div
      className={note.archived ?
        'w-full px-5 py-4 flex justify-between border-b bg-green-500 opacity-80 text-slate-500 line-through'
        :
        'w-full px-5 py-4 flex justify-between border-b text-black'}
    >
      <div className='w-full'>
        <div className='flex items-center'>
          <span style={{ color: note.color }} className='text-2xl mr-2'>•</span>
          <p style={{ overflowWrap: 'anywhere' }} className='tarea-texto w-[75%] h-full text-sm capitalize'>{note.title}</p>
        </div>
        <p style={{ overflowWrap: 'anywhere' }} className='tarea-texto w-[75%] h-full text-xs text-slate-400'>{note.content}</p>
      </div>
      <div className='pt-6'>
        <MenuModal note={note} onEdit={handleEdit} onArchive={handleArchive} onDelete={handleDelete} />
      </div>
    </div>
  );
}