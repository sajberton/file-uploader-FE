import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
//Interfaces
import { TextData } from "../../Interfaces/TextData";
//helpers
import { createFile } from "../../services/createFile";
//style
import "./FileUploader.css";

const FileUploader: React.FC<{
  setChartData: Dispatch<SetStateAction<TextData[]>>;
  getAllFiles: () => Promise<void>;
}> = ({ setChartData, getAllFiles }) => {
  const handleUpload = async (e: BaseSyntheticEvent) => {
    let fileName = e.currentTarget.files[0].name;
    var allowedExtensions = /(\.txt)$/i;
    if (!allowedExtensions.exec(fileName)) {
      toast.warning("The correct file format is .txt");
      return;
    }

    let data = new FormData();
    let file = e.currentTarget.files[0];

    data.append("file", file);
    data.append("fileName", fileName);

    try {
      let res = await createFile("text-file/create", data);
      let inValidRows = res.data.inValidRows;
      if (inValidRows > 0) {
        if (inValidRows === 1)
          toast.warning("There was one invalid row in your file");
        else
          toast.warning(
            "There were " + inValidRows + "invalid rows in your file"
          );
      }
      setChartData(res.data.textFileData);
    } catch (err: any) {
      toast.error(err.response.data);
    }
    getAllFiles();
  };

  return (
    <div className="fileButton">
      <label>
        Select txt file
        <input type="file" accept=".txt" onChange={(e) => handleUpload(e)} />
      </label>
    </div>
  );
};

export default FileUploader;
