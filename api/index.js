// api/index.js
import app from "../app.js";
import serverlessExpress from "@vendia/serverless-express";
// const { createServerlessExpressHandler } = serverlessExpress;

export default serverlessExpress({ app });
