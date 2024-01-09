import React from "react";
import { DataGrid } from "@material-ui/data-grid";
const FList = () => {
  const columns = [
    { field: "id", headerName: "ID", minWidth: 200, flex: 0.3 },
    { field: "name", headerName: "Firm Name", minWidth: 200, flex: 0.3 },
    { field: "address", headerName: "Address", minWidth: 200, flex: 0.3 },
    { field: "action", headerName: "Action", minWidth: 200, flex: 0.3 },
  ];

  const fieldData = [
    { id: 1, name: "Balaji Transport", address: "Panipat" },
    { id: 2, name: "Balaji Transport", address: "Panipat" },
    // Add more rows as needed
  ];

  const rows = [];
  fieldData &&
    fieldData.forEach((item, i) => {
      rows.push({
        id: item.id,
        name: item.name,
        address: item.address,
      });
    });
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        // page={10}
        disableSelectionOnClick
        className="product-list-table"
        autoHeight
      />
    </>
  );
};

export default FList;
