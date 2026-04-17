import express, { type Request, type Response } from "express";
import cors from "cors";
import { executeSource } from "../interpreter/execute";
import type { ExecuteRequestBody } from "../shared/types";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: "2mb" }));

  app.get("/health", (_req: Request, res: Response) => {
    res.json({
      ok: true,
      message: "Backend GoScript funcionando correctamente"
    });
  });

  app.post(
    "/execute",
    (req: Request<{}, {}, ExecuteRequestBody>, res: Response) => {
      const { code } = req.body;

      if (typeof code !== "string") {
        return res.status(400).json({
          error: "El campo 'code' es obligatorio y debe ser de tipo string."
        });
      }

      const result = executeSource(code);
      return res.json(result);
    }
  );

  return app;
}