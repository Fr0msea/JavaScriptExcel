//ExcelJS

const ExcelJS = require('exceljs');

// Ler o Excel existente e pegar os ceps

const wb = new ExcelJS.Workbook();

const fileName = 'NovoExcel.xlsx';

var ceps = [];
var Lat = [];
var Lng = [];


wb.xlsx.readFile(fileName).then(() => {
    
    const ws = wb.getWorksheet('Planilha1');

    const c1 = ws.getColumn(1);
    
    c1.eachCell(c => {

        ceps.push(c.value);
    });
}).catch(err => {
    console.log(err.message);
}).then(async()=>{
    console.log(ceps);

    var Formaps =require("./formaps")

    const coordenadas = await Formaps(ceps);

    console.log(coordenadas)

     Lat = coordenadas[0];
     Lng = coordenadas[1];

}).then(()=>{
    // const Excel = require('exceljs');

const fileName = 'coordenadas.xlsx';

const wb = new ExcelJS.Workbook();
const ws = wb.addWorksheet('My Sheet');


const r1 = ws.getColumn(1);
r1.values = ceps;

const r2 = ws.getColumn(2);
r2.values = Lat;

const r3 = ws.getColumn(3);
r3.values = Lng;

wb.xlsx
  .writeFile(fileName)
  .then(() => {
    console.log('file created');
  })
  .catch(err => {
    console.log(err.message);
  });
})




