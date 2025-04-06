// controllers/resultController.js
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import pdfkit from "pdfkit";
import fs from "fs";
import Marks from "../models/Marks.js";

export const generateResultPDF = async (req, res) => {
  const { studentId } = req.params;

  try {
    // Fetch marks and student data
    const results = await Marks.find({ student: studentId }).populate("subject");
    
    // Create a PDF document
    const doc = new pdfkit();
    const fileName = `result-${studentId}.pdf`;
    const filePath = `./public/results/${fileName}`;

    // Pipe the PDF output to a file
    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(16).text("Student Result Sheet", { align: "center" });
    doc.text("\n");

    results.forEach((result) => {
      doc.text(`Subject: ${result.subject.name}`);
      doc.text(`Marks Obtained: ${result.marks}/${result.maxMarks}`);
      const percentage = ((result.marks / result.maxMarks) * 100).toFixed(2);
      doc.text(`Percentage: ${percentage}%`);
      doc.text("\n");
    });

    // Finalize PDF file
    doc.end();

    // Send file path to frontend to download
    res.status(200).json({ message: "PDF Generated", filePath: `/results/${fileName}` });

  } catch (error) {
    res.status(500).json({ message: "Error generating result PDF", error: error.message });
  }
};
