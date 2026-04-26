# Gramática en Formato BNF (Backus-Naur Form)

[cite_start]Esta gramática define la sintaxis del lenguaje analizado por el archivo `lexer-parser.jison`.

---

## 1. Estructura del Programa
[cite_start]`<program>` ::= `<top_level_list>` "EOF" 
`<top_level_list>` ::= `<top_level_list>` `<top_level_decl>` | [cite_start]`<top_level_decl>` 
`<top_level_decl>` ::= `<function_decl>` | [cite_start]`<struct_decl>` 

---

## 2. Declaraciones de Estructuras y Funciones
### Estructuras
`<struct_decl>` ::= "type" "IDENTIFIER" "struct" "{" `<struct_field_items_opt>` "}" 
                  | "struct" "IDENTIFIER" "{" `<struct_field_items_opt>` "}" 

`<struct_field_items_opt>` ::= `<struct_field_items>` | [cite_start]ε 
`<struct_field_items>` ::= `<struct_field_items>` `<struct_field_item>` | [cite_start]`<struct_field_item>` 
[cite_start]`<struct_field_item>` ::= `<struct_field_decl>` `<struct_field_sep_opt>` 
[cite_start]`<struct_field_decl>` ::= `<field_type>` "IDENTIFIER" 
### Funciones
[cite_start]`<function_decl>` ::= "func" "IDENTIFIER" "(" `<param_list_opt>` ")" `<return_type_opt>` `<block>` 
`<param_list_opt>` ::= `<param_list>` | [cite_start]ε 
`<param_list>` ::= `<param_list>` "," `<param_decl>` | [cite_start]`<param_decl>` 
[cite_start]`<param_decl>` ::= "IDENTIFIER" `<callable_type>` 
`<return_type_opt>` ::= `<callable_type>` | [cite_start]ε 

---

## 3. Bloques e Instrucciones
[cite_start]`<block>` ::= "{" `<stmt_list>` "}" 
`<stmt_list>` ::= `<stmt_list>` `<statement>` `<stmt_terminator_opt>` | [cite_start]ε 

`<statement>` ::= `<println_stmt>` | `<var_decl>` | `<typed_decl>` | `<short_decl>` 
                | `<assignment>` | `<identifier_statement>` | `<if_stmt>` | `<for_stmt>` 
                | `<switch_stmt>` | `<break_stmt>` | `<continue_stmt>` | `<return_stmt>` 
                | [cite_start]`<block>` 

`<println_stmt>` ::= "fmt" "." [cite_start]"Println" "(" `<expr_list_opt>` ")" 

---

## 4. Estructuras de Control
### Condicional If
[cite_start]`<if_stmt>` ::= "if" `<expression_no_struct>` `<block>` `<else_part_opt>` 
`<else_part_opt>` ::= "else" `<if_stmt>` | "else" `<block>` | [cite_start]ε 

### Bucles For
`<for_stmt>` ::= "for" `<range_clause>` `<block>` 
               | "for" `<for_classic_header>` `<block>` 
               | [cite_start]"for" `<expression_no_struct>` `<block>` 

`<range_clause>` ::= "IDENTIFIER" ":=" "range" `<range_iterable>`
                   | "IDENTIFIER" "," "IDENTIFIER" ":=" "range" `<range_iterable>` 

`<for_classic_header>` ::= `<for_init_required>` ";" `<for_condition_opt>` ";" `<for_update_opt>`
                         | ";" `<for_condition_opt>` ";" `<for_update_opt>` 

### Switch
[cite_start]`<switch_stmt>` ::= "switch" `<expression_no_struct>` "{" `<case_clause_list_opt>` `<default_clause_opt>` "}" 

---

## 5. Declaraciones y Asignaciones
[cite_start]`<var_decl>` ::= "var" "IDENTIFIER" `<declared_type>` [ "=" `<initializer>` ] 
[cite_start]`<short_decl>` ::= "IDENTIFIER" ":=" `<expression>` 

`<assignment>` ::= `<assignable>` "=" `<expression>` 
                | `<assignable>` "+=" `<expression>` 
                | [cite_start]`<assignable>` "-=" `<expression>` 

[cite_start]`<assignable>` ::= "IDENTIFIER" `<postfix_ops_opt>` 

---

## 6. Expresiones y Tipos
### Operaciones Binarias (Orden de precedencia)
`<expression>` ::= `<expression>` "||" [cite_start]`<expression>` 
                | `<expression>` "&&" `<expression>` 
                | `<expression>` "==" `<expression>` 
                | `<expression>` "!=" `<expression>`
                | `<expression>` ">" `<expression>` 
                | `<expression>` "<" `<expression>` 
                | `<expression>` "+" `<expression>` 
                | `<expression>` "*" `<expression>` 
                | "!" `<expression>` 
                | "-" `<expression>` 
                | `<postfix_expression>` 

### Tipos de Datos
`<type_spec>` ::= "int" | "float64" | "string" | "bool" | [cite_start]"rune" 
[cite_start]`<array_type>` ::= "[" "INT" "]" `<field_type>` 
[cite_start]`<slice_type>` ::= "[" "]" `<field_type>` 

### Literales
`<literal>` ::= "INT" | "FLOAT" | "STRING" | "BOOL" | "RUNE" | [cite_start]"nil" 