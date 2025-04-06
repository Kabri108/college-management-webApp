// middleware/upload.js
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /pdf|doc|docx|ppt|jpg|png|jpeg/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (extname) {
    cb(null, true);
  } else {
    cb(new Error("Only documents and images are allowed"));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
