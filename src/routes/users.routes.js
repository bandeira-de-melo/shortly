import { Router } from "express";

const usersRouter = Router()

usersRouter.post("/signup")
usersRouter.post("/signin")
usersRouter.get("/users/me")

export default usersRouter