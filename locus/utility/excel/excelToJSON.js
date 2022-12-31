const xlsx = require('xlsx');

export const readUploadFile = (e, setKeys) => {
  e.preventDefault();
  const selectedType = e.target.files[0];
  if (selectedType) {
      const reader = new FileReader(); 
      reader.readAsArrayBuffer(selectedType)
      reader.onload = (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "buffer" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet, {header: 1,defval: ""});
          setKeys(json[0])
      };
  }
}
