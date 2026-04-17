export interface AstNode {
    kind: string;
    value?: string;
    line: number;
    column: number;
    children: AstNode[];
}

export interface CompilerError {
    type: "Lexico" | "Sintactico" | "Semantico" | "Runtime";
    description: string;
    line: number;
    column: number;
}

export interface SymbolEntry {
    id: string;
    symbolType: string;
    dataType: string;
    scope: string;
    line: number;
    column: number;
}

export interface ExecutionResult {
    console: string;
    errors: CompilerError[];
    symbolTable: SymbolEntry[];
    ast: AstNode | null;
    astDot: string;
}

const API_URL = "http://localhost:4000";

export async function executeCode(code: string): Promise<ExecutionResult> {
    const response = await fetch(`${API_URL}/execute`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Ocurrió un error al ejecutar el código.");
    }

    return (await response.json()) as ExecutionResult;
}