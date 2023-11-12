import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90, sortable: false },
    {
      field: "name",
      headerName: "File name",
      width: 350,
      editable: true,
      sortable: false
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      width: 350,
      editable: true,
      sortable: false
    },
  ];