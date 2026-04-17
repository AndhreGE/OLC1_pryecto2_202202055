import type { AstNode } from "../ast/AstNode";

/**
 * Este archivo es temporal.
 * Ahorita NO usa Jison todavía.
 * Solo construye un AST inicial para probar la tubería completa.
 *
 * Luego lo vamos a reemplazar por el parser real generado con Jison.
 */
export function parseSource(source: string): AstNode {
    const normalized = source.replace(/\r\n/g, "\n");
    const lines = normalized.split("\n");

    const children: AstNode[] = [];

    lines.forEach((rawLine, index) => {
        const trimmed = rawLine.trim();

        if (trimmed.length === 0) {
            return;
        }

        const firstColumn = rawLine.indexOf(trimmed) + 1;

        children.push({
            kind: "SourceLine",
            value: trimmed,
            line: index + 1,
            column: firstColumn,
            children: []
        });
    });

    return {
        kind: "Program",
        line: 1,
        column: 1,
        children
    };
}