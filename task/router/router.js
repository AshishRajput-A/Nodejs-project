import express from "express";
import { insertUser } from "../controller/user.collection.js";
import { gettodo, insertTodo } from "../controller/todo.collection.js";
import {
  getMainTodo,
  insertMainTodo,
} from "../controller/alltodo.collection.js";

const router = express.Router();

router.post("/user/insert", insertUser);

router.post("/todo/insert", insertTodo);

router.post("/main/todo", insertMainTodo);

router.get("/gettodos", getMainTodo);

router.get("/gettodo", gettodo);

export default router;
