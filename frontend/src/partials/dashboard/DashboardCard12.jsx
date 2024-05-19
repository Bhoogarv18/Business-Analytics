import React from "react";

function DashboardCard12({ data }) {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Description
        </h2>
      </header>
      <div className="p-3">
        {data &&
          data.map((el) => {
            return (
              <header className="text-xs uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
                {el}
              </header>
            );
          })}
      </div>
    </div>
  );
}

export default DashboardCard12;
