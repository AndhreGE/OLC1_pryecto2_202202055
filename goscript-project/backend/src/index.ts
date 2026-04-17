import { createServer } from "./api/server";

const PORT = Number(process.env.PORT ?? 4000);

const app = createServer();

app.listen(PORT, () => {
    console.log(`Servidor GoScript corriendo en http://localhost:${PORT}`);
});