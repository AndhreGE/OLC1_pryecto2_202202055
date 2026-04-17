import type { AstNode } from "../ast/AstNode";

export type ErrorType = "Lexico" | "Sintactico" | "Semantico" | "Runtime";

export interface CompilerError {
    type: ErrorType;
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

export interface ExecuteRequestBody {
  code: string;
}

export interface ExecutionResult {
    console: string;
    errors: CompilerError[];
    symbolTable: SymbolEntry[];
    ast: AstNode | null;
    astDot: string;
}