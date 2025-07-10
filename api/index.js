// api/index.js
import app from "../app";
import { createServerlessExpressHandler } from "@vendia/serverless-express";

export default createServerlessExpressHandler(app);
