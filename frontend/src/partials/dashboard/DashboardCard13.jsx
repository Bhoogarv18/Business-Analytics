import React from "react";

function DashboardCard13() {
  return (
    <div className="col-span-full flex-grow xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Top Recommendations
        </h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Today
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-emerald-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="self-center text-sm font-medium text-slate-800">
                Start selling black shirts.
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-rose-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="self-center text-sm font-medium text-slate-800">
                Stop selling orange shirts.
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-emerald-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="self-center text-sm font-medium text-slate-800">
                Start selling black shirts.
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-rose-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="self-center text-sm font-medium text-slate-800">
                Stop selling orange shirts.
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-emerald-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="self-center text-sm font-medium text-slate-800">
                Start selling black shirts.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
