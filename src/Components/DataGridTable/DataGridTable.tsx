import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
//Interfaces
import { TextFile } from "../../Interfaces/TextFile";
//helpers
import { columns } from "./columns";
import { PageState } from "../../Interfaces/PageState";

const DataGridTable: React.FC<{
  rows: TextFile[];
  setPageState: Dispatch<SetStateAction<PageState>>;
  rowCount: number;
  handleRowSelection: (obj: GridRowSelectionModel) => void;
}> = ({ rows, setPageState, rowCount, handleRowSelection }) => {
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
        onRowSelectionModelChange={(obj) => {
          handleRowSelection(obj);
        }}
      />
    </Box>
  );
};

export default DataGridTable;
