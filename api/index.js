// // api/index.js
import app from "../app.js";
// import serverlessExpress from "@vendia/serverless-express";
// // const { createServerlessExpressHandler } = serverlessExpress;

// export default serverlessExpress({ app });
export default async (req, res) => {
  try {
    return app(req, res);
  } catch (err) {
    console.error("Serverless error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
