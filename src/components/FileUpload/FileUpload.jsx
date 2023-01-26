import React, { useState } from "react";
import { read, utils } from "xlsx";
import PdfDocument from "../PdfDocument/PdfDocument";

const FileUpload = () => {
  const [data, setData] = useState("");
  const [letterType, setLetterType] = useState("")

  async function pause(msec) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, msec || 1000);
    });
  }

  const checkLetterType = (e) => {
    setLetterType(e.target.value)
  }

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        console.log("json", json);
        for (let i = 0; i < json.length; i += 10) {
          const chunk = json.slice(i, i + 10);
          console.log("chunk", chunk);
          setData(chunk);
          await pause(2000);
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50 p-10">
          <form>
            <label
              htmlFor="letters"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Please select letter type
            </label>
            <select
              id="letters"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => checkLetterType(e)}
            >
              <option selected>Choose letter type</option>
              <option value="Offer">Offer Letter</option>
              <option value="Increment">Increment Letter</option>
              <option value="Promotion">Promotion Letter</option>
            </select>
          </form>
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              File Upload
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600 cursor-pointer">
                    Attach a file
                  </p>
                </div>
                <input
                  type="file"
                  className="opacity-0"
                  onChange={readUploadFile}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      {data && letterType === "Offer" ? <PdfDocument data={data} /> : ""}
    </>
  );
};

export default FileUpload;
