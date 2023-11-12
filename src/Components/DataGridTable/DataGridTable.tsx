import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
//Interfaces
import { TextFile } from "../../Interfaces/TextFile";
//helpers
import { columns } from "./columns";
import { PageState } from "../../Interfaces/PageState";

const DataGridTable: React.FC<{
  rows: TextFile[];
  pageState: PageState;
  setPageState: Dispatch<SetStateAction<PageState>>;
  rowCount: number;
}> = ({ rows, pageState, setPageState, rowCount }) => {
  return (
    <Box sx={{ height: "85%", width: "100%" }}>
      <DataGrid
        rows={rows}
        rowCount={rowCount}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        paginationMode="server"
        pageSizeOptions={[10]}
        onRowClick={(c) => console.log(c)}
        onPaginationModelChange={setPageState}
        // onPaginationModelChange={(a, b) => {
        //   console.log(a);
        //   console.log(b);
        // }}
        //checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridTable;
