import express from "express";
import * as bookController from "../controllers/bookController";

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/hints", bookController.getHint);
router.get("/:id", bookController.getBook);

router.post("/", bookController.addBook);
router.put("/:id", bookController.editBook);
router.delete("/:id", bookController.deleteBook);

export default router;
