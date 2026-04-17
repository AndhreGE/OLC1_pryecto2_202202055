import { useState } from "react";
import { executeCode, type ExecutionResult } from "./services/api";

const initialCode = `func main() {
  fmt.Println("Hola mundo")
}`;

const emptyResult: ExecutionResult = {
  console: "",
  errors: [],
  symbolTable: [],
  ast: null,
  astDot: ""
};

function App() {
  const [code, setCode] = useState<string>(initialCode);
  const [result, setResult] = useState<ExecutionResult>(emptyResult);
  const [loading, setLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string>("");

  const handleExecute = async () => {
    try {
      setLoading(true);
      setRequestError("");

      const executionResult = await executeCode(code);
      setResult(executionResult);
    } catch (error) {
      if (error instanceof Error) {
        setRequestError(error.message);
      } else {
        setRequestError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>GoScript IDE - Base del Proyecto</h1>
        <p>
          En este punto ya estás conectando frontend con backend.
          El siguiente paso será reemplazar el parser temporal por Jison real.
        </p>
      </header>

      <main className="main-grid">
        <section className="panel">
          <h2>Editor</h2>
          <textarea
            className="editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          />
          <button className="execute-button" onClick={handleExecute} disabled={loading}>
            {loading ? "Ejecutando..." : "Ejecutar"}
          </button>

          {requestError && (
            <div className="error-box">
              <strong>Error de conexión:</strong>
              <p>{requestError}</p>
            </div>
          )}
        </section>

        <section className="panel">
          <h2>Consola</h2>
          <pre className="console-box">{result.console || "Sin salida todavía."}</pre>

          <h2>Errores</h2>
          {result.errors.length === 0 ? (
            <p>No hay errores.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Descripción</th>
                  <th>Línea</th>
                  <th>Columna</th>
                </tr>
              </thead>
              <tbody>
                {result.errors.map((error, index) => (
                  <tr key={index}>
                    <td>{error.type}</td>
                    <td>{error.description}</td>
                    <td>{error.line}</td>
                    <td>{error.column}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <h2>Tabla de símbolos</h2>
          {result.symbolTable.length === 0 ? (
            <p>Todavía vacía.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo símbolo</th>
                  <th>Tipo dato</th>
                  <th>Ámbito</th>
                  <th>Línea</th>
                  <th>Columna</th>
                </tr>
              </thead>
              <tbody>
                {result.symbolTable.map((symbol, index) => (
                  <tr key={index}>
                    <td>{symbol.id}</td>
                    <td>{symbol.symbolType}</td>
                    <td>{symbol.dataType}</td>
                    <td>{symbol.scope}</td>
                    <td>{symbol.line}</td>
                    <td>{symbol.column}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <h2>AST en formato DOT</h2>
          <pre className="console-box">
            {result.astDot || "Todavía no se ha generado el AST."}
          </pre>
        </section>
      </main>
    </div>
  );
}

export default App;