import e from "cors";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

function Dash({ data }) {
  return (
    <div className="col-span-full mt-4 flex-grow xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Similar Products
        </h2>
      </header>
      <div className="p-3">
        <ul className="my-1">
          {/* Item */}
          {data &&
            data.map((el) => {
              return (
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
                    <a
                      href={el}
                      target="_blank"
                      className="text-base text-black opacity-50"
                    >
                      <LinesEllipsis
                        text={el}
                        maxLine="1"
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                        className="text-secondary text-xl leading-6 font-semibold truncate;"
                      />
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Dash;
