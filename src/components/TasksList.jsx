import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import api from '../api';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import DateToDay from '../common/DateToDay';


export default function TasksList() {
  const [notes, setNotes] = useState(api.notes.list);
  const [draft, setDraft] = useState(false);

  function handleArchive(id) {
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id !== id) return note;
        return {
          ...note,
          archived: !note.archived,
        };
      })
    );
  };
  function handleEdit(note) {
    setDraft(note);
  };
  function handleDelete(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };
  function handleDraftChange(field, value) {
    setDraft((draft) => ({
      ...draft,
      [field]: value,
    }));
  };
  function handleSave() {
    if (draft?.id) {
      setNotes((notes) =>
        notes.map((note) => {
          if (note.id !== draft.id) return note;

          return {
            ...draft,
            color: draft.color || note.color,
            expiration: draft.expiration || note.expiration,
            lastEdited: new Date().toLocaleDateString('en-es', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }),
          };
        })
      );
    } else {
      setNotes((notes) =>
        notes.concat({
          id: String(+new Date()),
          color: draft.color || '#000000',
          expiration: draft.expiration || null,
          ...draft,
          lastEdited: new Date().toLocaleDateString('en-es', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }),
        })
      );
    }
    setDraft(null);
  };
  // draggg and drop
  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    setNotes((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  useEffect(() => {
    api.notes.set(notes)
  }, [notes]);


  return (
    <>
      <div className='px-4 flex justify-between items-center'>
        <DateToDay />
        <button
          className='border group flex w-[10rem] items-center rounded-md px-2 py-1 text-sm hover:border-sky-900'
          onClick={() => setDraft(true)}
        >
          <AiOutlinePlusCircle className="mr-2 h-4 w-4" />
          Add Task
        </button>
      </div>
      {draft && (
        <TaskModal
          onSave={handleSave}
          onChange={handleDraftChange}
          note={draft}
          visible={draft}
          onClose={() => setDraft(null)}
        />
      )}
      <div className='grid grid-cols-1 gap-4 px-10'>
        <DragDropContext onDragEnd={handleOnDragEnd} >
          <Droppable droppableId="taskList">
            {(droppableProvided) => (
              <div
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className='flex flex-wrap justify-center mt-4 cursor-default gap-4'
              >
                {notes.length ? notes.map((note, index) => (
                  <Draggable key={note.id} draggableId={note.id} index={index}>
                    {(draggableProvided, snapshot) => (
                      <div
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        style={{
                          border: snapshot.isDragging ? '1px solid rgba(0,0,0,0.21)' : 'none',
                          boxShadow: snapshot.isDragging ? '4px 4px 9px -4px rgba(0,0,0,0.21)' : 'none',
                          ...draggableProvided.draggableProps.style,
                        }}
                        className='w-full cursor-default bg-white'
                      >
                        <TaskCard
                          key={note.id}
                          id={note.id}
                          note={note}
                          onArchive={handleArchive}
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                      </div>
                    )}
                  </Draggable>
                )) : <p>No Tasks</p>}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}