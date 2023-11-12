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
import { getFiles } from "./services/getFiles";
//style
import "./App.css";
import { PageState } from "./Interfaces/PageState";
import { getPagedFiles } from "./services/createFile";

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
      let res = await getFiles("text-file-data/get-last");
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
        pageState={pageState}
        rowCount={rowCount}
      />
      <ToastContainer position={"top-right"} />
    </div>
  );
}

export default App;
