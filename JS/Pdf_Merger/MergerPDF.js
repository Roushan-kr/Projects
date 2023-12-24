const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePDfs = async (pdf1, pdf2) => {
  await merger.add(pdf1); // merge only page 2
  await merger.add(pdf2);  //merge all pages. parameter is the path to file and.

  let d = new Date().getTime()
  await merger.save(`public/merge${d}.pdf`); //save under given name and reset the internal document
  return d
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
module.exports = { mergePDfs }



