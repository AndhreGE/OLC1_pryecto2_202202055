import { parseSource } from "../grammar/parserAdapter";
import { astToDot } from "../reports/astToDot";
import type { ExecutionResult } from "../shared/types";

function countNonEmptyLines(source: string): number {
    return source
        .replace(/\r\n/g, "\n")
        .split("\n")
        .filter((line) => line.trim().length > 0).length;
}

export function executeSource(source: string): ExecutionResult {
    const normalized = source.replace(/\r\n/g, "\n");

    if (normalized.trim().length === 0) {
        return {
        console: "",
        errors: [
            {
            type: "Semantico",
            description: "No se recibió código fuente para ejecutar.",
            line: 1,
            column: 1
            }
        ],
        symbolTable: [],
        ast: null,
        astDot: ""
        };
    }

    const ast = parseSource(normalized);

    const consoleLines: string[] = [
        "Backend base de GoScript funcionando.",
        "Todavía no está conectado el parser real con Jison.",
        `Líneas no vacías detectadas: ${countNonEmptyLines(normalized)}`
    ];

    if (/\bfunc\s+main\s*\(/.test(normalized)) {
        consoleLines.push("Se detectó la función main.");
    } else {
        consoleLines.push("No se detectó la función main todavía.");
    }

    return {
        console: consoleLines.join("\n"),
        errors: [],
        symbolTable: [],
        ast,
        astDot: astToDot(ast)
    };
}