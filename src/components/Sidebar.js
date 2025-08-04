import React, { useState } from 'react';
import { useAppDispatch, useAppSelector, useTranslation } from '../hooks';
import { selectFilter, selectTodoStats } from '../features/todo/todoSlice';
import PopupMenu from './PopupMenu';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const { total, completed, active } = useAppSelector(selectTodoStats);
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
    <>
      <div className="side-bar">
        <div className="side-shortcut">
          <button 
            className="open-btn"
            onClick={() => setIsPopupOpen(true)}
          >
            OPEN✨
          </button>
        </div>
      </div>
      
      <PopupMenu 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default Sidebar; 