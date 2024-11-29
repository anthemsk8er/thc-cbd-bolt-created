import React, { useState } from 'react';
    import clsx from 'clsx';

    const Sidebar = ({ onSidebarHide, showSidebar }) => {
      const [selected, setSelected] = useState('0');

      const sidebarItems = [
        { id: '0', title: 'Dashboard', notifications: false },
        { id: '1', title: 'Overview', notifications: false },
        { id: '2', title: 'Chat', notifications: 6 },
        { id: '3', title: 'Team', notifications: false },
        { id: '4', title: 'Mi Cuenta', notifications: false },
      ];

      return (
        <div
          className={clsx(
            'fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10',
            showSidebar ? 'flex' : 'hidden',
          )}
        >
          <div className="flex-shrink-0 overflow-hidden p-2">
            <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
              <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
                Mi Cuenta
              </div>
              <div className="flex-grow sm:hidden xl:block" />
              <button
                className="block sm:hidden"
                onClick={onSidebarHide}
              >
                Cerrar
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  'w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer',
                  selected === item.id ? 'sidebar-item-selected' : 'sidebar-item',
                )}
                onClick={() => setSelected(item.id)}
              >
                <div className="block sm:hidden xl:block ml-2">{item.title}</div>
                <div className="block sm:hidden xl:block flex-grow" />
                {item.notifications && (
                  <div className="flex sm:hidden xl:flex bg-pink-600 w-5 h-5 flex items-center justify-center rounded-full mr-2">
                    <div className="text-white text-sm">{item.notifications}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Sidebar;
