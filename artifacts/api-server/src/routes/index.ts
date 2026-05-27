import { Router, type IRouter } from "express";
import healthRouter from "./health";
import promotionsRouter from "./promotions";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/promotions", promotionsRouter);

export default router;
