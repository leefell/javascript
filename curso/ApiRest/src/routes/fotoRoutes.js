import { Router } from "express";
import multer from "multer";

import fotoController from "../controllers/FotoController";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig);

const router = new Router();

// Receber um único arquivo upload.single(); habilita req.file
router.post("/", upload.single("foto"), fotoController.store);

export default router;
