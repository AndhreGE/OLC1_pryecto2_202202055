export interface AstNode {
    kind: string;
    value?: string;
    line: number;
    column: number;
    children: AstNode[];
}