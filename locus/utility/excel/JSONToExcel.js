const XLSX = require("xlsx");
import { saveAs } from 'file-saver';

export const exportFile = (jsonData, headerData, name) => {
    /* convert state to workbook */
      const ws = XLSX.utils.book_new();
      XLSX.utils.sheet_add_aoa(ws, [headerData]);
      XLSX.utils.sheet_add_json(ws, jsonData, { origin: 'A2', skipHeader: true });
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array', cellStyles:true });
      const finalData = new Blob([excelBuffer], { type: 'xlsx' });
      saveAs(finalData, `${name}-student_responses.xlsx`);
}

    // sample data format
    // var data = [
    //     {"name":"John", "city": "Seattle"},
    //     {"name":"Mike", "city": "Los Angeles"},
    //     {"name":"Zach", "city": "New York"}
    //   ];
    //   let header = ["Name", "City"];