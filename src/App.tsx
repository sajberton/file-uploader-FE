import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import FileUploader from "./Components/FileUploader/FileUploader";
import SimpleCharts from "./Components/DataChart/DataChart";
import DataGridTable from "./Components/DataGridTable/DataGridTable";
//Interfaces
import { TextData } from "./Interfaces/TextData";
import { TextFile } from "./Interfaces/TextFile";
//helpers
import {
  getLastFileData,
  getFileDataByFileId,
} from "./services/fileDataServices";
//style
import "./App.css";
import { PageState } from "./Interfaces/PageState";
import { getPagedFiles } from "./services/fileServices";
import { GridRowSelectionModel } from "@mui/x-data-grid";

function App() {
  useEffect(() => {
    getDataLastFile();
  }, []);

  const [pageState, setPageState] = useState<PageState>({
    page: 0,
    pageSize: 10,
  });
  const [rowCount, setRowCount] = useState<number>(0);

  useEffect(() => {
    getAllFiles();
  }, [pageState.page, pageState.pageSize]);

  const [chartData, setChartData] = useState<TextData[]>([]);
  const [textFiles, setTextFiles] = useState<TextFile[]>([]);

  const getAllFiles = async () => {
    try {
      let res = await getPagedFiles("text-file/all", pageState);
      setTextFiles(res.data.data);
      setRowCount(res.data.totalCount);
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  const getDataLastFile = async () => {
    try {
      let res = await getLastFileData("text-file-data/get-last");
      setChartData(res.data);
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  const handleRowSelection = async (obj: GridRowSelectionModel) => {
    let id = obj[0];
    try {
      let res = await getFileDataByFileId("text-file-data/get-file-id", id);
      setChartData(res.data);
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="App">
      <FileUploader setChartData={setChartData} getAllFiles={getAllFiles} />
      <SimpleCharts chartData={chartData} />
      <DataGridTable
        rows={textFiles}
        setPageState={setPageState}
        rowCount={rowCount}
        handleRowSelection={handleRowSelection}
      />
      <ToastContainer position={"top-right"} />
    </div>
  );
}

export default App;
