import { useState } from 'react'; 
const XLSX = require("xlsx");

const SheetJSFileFormat = [
    "xlsx",
    "xlsb",
    "xlsm",
    "xls",
    "xml",
    "csv",
    "txt",
    "ods",
    "fods",
    "uos",
    "sylk",
    "dif",
    "dbf",
    "prn",
    "qpw",
    "123",
    "wb*",
    "wq*",
    "html",
    "htm"
  ]
    .map(function(x) {
      return "." + x;
    })
    .join(",");

const make_cols = refstr => {
    let o = [],
        C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
    return o;
};    

function excelToJSON(){
    const [data,setData] = useState([]);
    const [cols,setCols] = useState([]);

    const handleFile = (file /*:File*/) => {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          console.log(rABS, wb);
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          /* Update state */
          setData(data);
          setCols(make_cols(ws["!ref"]));

          // Data of the excel sheet.
          console.log(make_cols(ws["!ref"]));
          console.log(data);
        };

        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
      }

    const handleChange = (e) => {
        const files = e.target.files;
        if (files && files[0]){
            handleFile(files[0]);
        } 
    }

    return (
        <div>
            <form className="form-inline">
                <div className="form-group">
                <label htmlFor="file">Spreadsheet</label>
                <input
                    type="file"
                    className="form-control"
                    id="file"
                    accept={SheetJSFileFormat}
                    onChange={handleChange}
                />
                </div>
            </form>

        <table className="table table-striped">
          <thead>
            <tr>
              {cols.map(c => (
                <th key={c.key}>{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                {cols.map(c => (
                  <td key={c.key}>{r[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        </div>
    )
}

export default excelToJSON;