import React from "react";

const index = ({ pagination, setPagination }) => {
  const array = new Array(pagination.totalPage).fill(0);
  return (
    <ul className="inline-flex items-center">
      <li>
        <a
          onClick={() => {
            if (pagination.currentPage > 1) {
              setPagination({
                ...pagination,
                currentPage: pagination.currentPage - 1,
              });
            }
          }}
          className="block py-2 px-3 ml-0 cursor-pointer leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      {array.map((item, index) => {
        if (index + 1 === pagination.currentPage) {
          return (
            <li key={index}>
              <a
                aria-current="page"
                onClick={() => {
                  setPagination({
                    ...pagination,
                    currentPage: index + 1,
                  });
                }}
                className="z-10 py-2 px-3 cursor-pointer leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700"
              >
                {index + 1}
              </a>
            </li>
          );
        } else if (
          index + 1 < pagination.currentPage + 4 &&
          index + 1 > pagination.currentPage - 3
        ) {
          return (
            <li key={index}>
              <a
                onClick={() => {
                  setPagination({
                    ...pagination,
                    currentPage: index + 1,
                  });
                }}
                className="py-2 px-3 leading-tight  cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                {index + 1}
              </a>
            </li>
          );
        }
      })}
      <li>
        <a
          onClick={() => {
            if (pagination.currentPage < pagination.totalPage) {
              setPagination({
                ...pagination,
                currentPage: pagination.currentPage + 1,
              });
            }
          }}
          className="block py-2 px-3 leading-tight cursor-pointer text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default index;
