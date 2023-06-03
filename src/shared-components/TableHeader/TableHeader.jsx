import React from "react";

const TableHeader = ({ data }) => {
  return (
    <thead>
      <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
        {data?.map((row) => {
          return <th key={row.label} className={`min-w-${row.width}px`}>{row.label}</th>;

        })}
        < th className="text-end min-w-125px">
          Actions
        </th>
      </tr>
    </thead >
  );
};

export default TableHeader;
