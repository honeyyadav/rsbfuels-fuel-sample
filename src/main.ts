import "./style.css";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";
const downloadButton = document.querySelector<HTMLDivElement>("#download-pdf")!;
import samplePdf from "./assets/fuel-sample.pdf";

downloadButton.onclick = () => {
  modifyPdf();
};

const initials = {
  x: 436,
  y: 728,
};

const data = [
  {
    x: initials.x,
    y: initials.y,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22,
    y: initials.y - 30,
    rotate: degrees(-89),
    text: "IOCL",
  },
  {
    x: initials.x - 22 * 2,
    y: initials.y - 30 - 10,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 2,
    y: initials.y - 30 - 10 - 140,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 3,
    y: initials.y - 30 - 15,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 3,
    y: initials.y - 30 - 15 - 130,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 4 + 2,
    y: initials.y - 30 - 170,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 5 + 3,
    y: initials.y - 30 - 185,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 6 + 3,
    y: initials.y - 30 - 55,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 7 + 3,
    y: initials.y - 30 - 105,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 22 * 8 + 3,
    y: initials.y - 30 - 70,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 21 * 12 - 17,
    y: initials.y - 30 - 42,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 21 * 13 - 17,
    y: initials.y - 30 - 42,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 21 * 14 - 17,
    y: initials.y - 30 - 42 + 80,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 21 * 15 - 17,
    y: initials.y - 30 - 42 + 50,
    rotate: degrees(-89),
    text: "SIDHRAWALI -     /    /2022",
  },
  {
    x: initials.x - 21 * 16 - 17,
    y: initials.y - 30 - 42 + 10,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 21 * 17 - 17,
    y: initials.y - 30 - 42 + 20,
    rotate: degrees(-89),
    text: "",
  },
  {
    x: initials.x - 21 * 18 - 17,
    y: initials.y - 30 - 42 + 50,
    rotate: degrees(-89),
    text: "",
  },
];

// const inputFields = [
//   {
//     label: "Test 1",
//     id: "input-1",
//     value: "Test",
//   },
// ];

const inputFields = [
  {
    label: "उत्पाद",
    id: "input-1",
    value: data[0].text,
  },
  {
    label: "सैम्पल का स्रोत",
    id: "input-2",
    value: data[1].text,
  },
  {
    label: "टैंक लौरी का नम्बर",
    id: "input-3",
    value: data[2].text,
  },
  {
    label: "बिले नं0",
    id: "input-4",
    value: data[3].text,
  },
  {
    label: "सैम्पल लेने की तिथि",
    id: "input-5",
    value: data[4].text,
  },
  {
    label: "समय",
    id: "input-6",
    value: data[5].text,
  },
  {
    label: "टैंक लौरी के सैम्पल लेने पर - as per Challan",
    id: "input-7",
    value: data[6].text,
  },
  {
    label: "टैंक लौरी के सैम्पल लेने पर - टैंक लौरी के सैम्पल",
    id: "input-8",
    value: data[7].text,
  },
  {
    label: "उत्पाद खाली करने का टैक नं0",
    id: "input-9",
    value: data[8].text,
  },
  {
    label: "प्लास्टिक सील नं0 एल्यूमूनियम कन्टेनर पर",
    id: "input-10",
    value: data[9].text,
  },
  {
    label: "प्लास्टिक सील नं0 लकड़ी का डिब्बा",
    id: "input-11",
    value: data[10].text,
  },
  {
    label: "हस्ताक्षर डीलर / डीलर प्रतिनिधि",
    id: "input-12",
    value: data[11].text,
  },
  {
    label: "डीलर का नाम / डीलर प्रतिनिधि",
    id: "input-13",
    value: data[12].text,
  },
  {
    label: "सील/मोहर",
    id: "input-14",
    value: data[13].text,
  },
  {
    label: "स्थान और तारीख",
    id: "input-15",
    value: data[14].text,
  },
  {
    label: "टैंक लारी ड्राईवर के हस्ताक्षर",
    id: "input-16",
    value: data[15].text,
  },
  {
    label: "हैंक लारी ड्राईवर का नाम",
    id: "input-17",
    value: data[16].text,
  },
  {
    label: "द्रांसपोर्टर का नाम",
    id: "input-18",
    value: data[17].text,
  },
];

const domInputs = inputFields
  .map((item) => {
    return `<div class="col-lg-4 col-md-4 col-sm-6">
    <div class="mb-3">
      <label for="${item.id}" class="form-label"
        >${item.label}</label
      >
      <input
        type="text"
        class="form-control"
        value="${item.value}"
        id="${item.id}"
      />
    </div>
  </div>`;
  })
  .join("\n");

const allInputsContainer = document.querySelector<HTMLDivElement>(
  "#all-inputs-container"
)!;
allInputsContainer.innerHTML = domInputs;

inputFields.forEach((item) => {
  const element = document.querySelector<HTMLInputElement>(`#${item.id}`)!;
  element.addEventListener("input", () => {
    console.log(element.value);
    data[parseInt(item.id.replace("input-", "")) - 1].text = element.value;
  });
});

async function modifyPdf() {
  const existingPdfBytes = await fetch(samplePdf).then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  data.forEach(({ text, x, y, rotate }) => {
    firstPage.drawText(text, {
      x,
      y,
      size: 15,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
      rotate,
    });
  });

  data.forEach(({ text, x, y, rotate }) => {
    firstPage.drawText(text, {
      x,
      y: y - 390,
      size: 15,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
      rotate,
    });
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
}
