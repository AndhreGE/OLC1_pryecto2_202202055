func main() {
fmt.Println("==============================================================")
fmt.Println("EVALUACION AUTOMATICA - FUNCIONALIDADES BASICAS (VERSION 2)")
fmt.Println("Esta prueba valida: declaracion, asignacion, aritmetica,")
fmt.Println("relacionales, logicas, fmt.Println, nil y opcionalidad del ;")
fmt.Println("==============================================================")
fmt.Println()

var puntajeDeclaracion float64 = 0.0
var puntajeAsignacion float64 = 0.0
var puntajeAritmeticas float64 = 0.0
var puntajeRelacionales float64 = 0.0
var puntajeLogicas float64 = 0.0
var puntajePrintln float64 = 0.0
var puntajeNil float64 = 0.0
var puntajePuntoComa float64 = 0.0
var total float64 = 0.0

fmt.Println("-> Evaluando: Declaracion de variables")
var enteroA int = 21
var enteroB int
var enteroC int = 13;
var decimalA float64 = 9.75
var decimalB float64 = 8
var decimalC float64
textoA := "Compi"
textoB := "2026"
var textoC string
var banderaA bool = false
var banderaB bool
var simboloA rune = 'K'
var simboloB rune
var listaNula []int
var listaCopia []int
listaCopia = listaNula

if enteroA == 21 && enteroB == 0 && enteroC == 13 && decimalA == 9.75 && decimalB == 8.0 && decimalC == 0.0 && textoA == "Compi" && textoB == "2026" && textoC == "" && banderaA == false && banderaB == false && simboloA == 'K' && simboloB == 0 {
puntajeDeclaracion = 1.0
fmt.Println("Resultado declaracion: correcta -> +1.0")
} else {
fmt.Println("Resultado declaracion: incorrecta -> +0.0")
}
fmt.Println("Valores declarados:", enteroA, enteroB, enteroC, decimalA, decimalB, decimalC, textoA, textoB, textoC, banderaA, banderaB, simboloA, simboloB)
fmt.Println()

fmt.Println("-> Evaluando: Asignacion de variables")
enteroB = 17
enteroA = enteroA - 4
enteroC = enteroC + 11;
decimalA = decimalA * 2.0
decimalB = 27 / 6.0
decimalC = decimalA + decimalB
textoA = textoA + "-" + textoB
textoB = "Seccion " + textoB
textoC = "Revision"
banderaA = !banderaA
banderaB = true
simboloA = 'M'
simboloB = 'Q';

if enteroA == 17 && enteroB == 17 && enteroC == 24 && decimalA == 19.5 && decimalB == 4.5 && decimalC == 24.0 && textoA == "Compi-2026" && textoB == "Seccion 2026" && textoC == "Revision" && banderaA == true && banderaB == true && simboloA == 'M' && simboloB == 'Q' {
puntajeAsignacion = 1.0
fmt.Println("Resultado asignacion: correcta -> +1.0")
} else {
fmt.Println("Resultado asignacion: incorrecta -> +0.0")
}
fmt.Println("Valores asignados:", enteroA, enteroB, enteroC, decimalA, decimalB, decimalC, textoA, textoB, textoC, banderaA, banderaB, simboloA, simboloB)
fmt.Println()

fmt.Println("-> Evaluando: Operaciones aritmeticas")
var arit1 int = (enteroA * 3) + enteroB - 8
var arit2 float64 = (decimalA + decimalB) / 3.0
var arit3 int = 53 % 7
var arit4 int = -(-12) + 5 * 2
var arit5 string = "Prueba " + "Dos"
var arit6 int = false + 9
var arit7 int = 2 * 'C'
var arit8 float64 = decimalB + enteroC / 4
var arit9 float64 = 7 + 5.25
var acumulador int = 40
var desplazamiento float64 = 3.5
acumulador += 19
acumulador -= 6
desplazamiento += 8
desplazamiento -= 2.5

if arit1 == 60 && arit2 == 8.0 && arit3 == 4 && arit4 == 22 && arit5 == "Prueba Dos" && arit6 == 9 && arit7 == 134 && arit8 == 10.5 && arit9 == 12.25 && acumulador == 53 && desplazamiento == 9.0 {
puntajeAritmeticas = 1.0
fmt.Println("Resultado aritmeticas: correctas -> +1.0")
} else {
fmt.Println("Resultado aritmeticas: incorrectas -> +0.0")
}
fmt.Println("Aritmetica 1:", arit1)
fmt.Println("Aritmetica 2:", arit2)
fmt.Println("Aritmetica 3:", arit3)
fmt.Println("Aritmetica 4:", arit4)
fmt.Println("Aritmetica 5:", arit5)
fmt.Println("Aritmetica 6:", arit6)
fmt.Println("Aritmetica 7:", arit7)
fmt.Println("Aritmetica 8:", arit8)
fmt.Println("Aritmetica 9:", arit9)
fmt.Println("Acumulador final:", acumulador)
fmt.Println("Desplazamiento final:", desplazamiento)
fmt.Println()

fmt.Println("-> Evaluando: Operaciones relacionales")
var rel1 bool = enteroA == enteroB
var rel2 bool = enteroC > 20
var rel3 bool = decimalA >= 19.5
var rel4 bool = decimalB < 5.0
var rel5 bool = textoA == "Compi-2026"
var rel6 bool = textoB != "2026"
var rel7 bool = 'B' < 'Q'
var rel8 bool = 18 == 18.0
var rel9 bool = "Casa" < "Dado"

if rel1 == true && rel2 == true && rel3 == true && rel4 == true && rel5 == true && rel6 == true && rel7 == true && rel8 == true && rel9 == true {
puntajeRelacionales = 1.0
fmt.Println("Resultado relacionales: correctas -> +1.0")
} else {
fmt.Println("Resultado relacionales: incorrectas -> +0.0")
}
fmt.Println("Relacionales:", rel1, rel2, rel3, rel4, rel5, rel6, rel7, rel8, rel9)
fmt.Println()

fmt.Println("-> Evaluando: Operaciones logicas")
var log1 bool = rel1 && rel2
var log2 bool = rel3 && rel4 && rel5
var log3 bool = rel6 || false
var log4 bool = !(rel7 && false)
var log5 bool = (rel8 && rel9) || banderaB
var log6 bool = !false

if log1 == true && log2 == true && log3 == true && log4 == true && log5 == true && log6 == true {
puntajeLogicas = 1.0
fmt.Println("Resultado logicas: correctas -> +1.0")
} else {
fmt.Println("Resultado logicas: incorrectas -> +0.0")
}
fmt.Println("Logicas:", log1, log2, log3, log4, log5, log6)
fmt.Println()

fmt.Println("-> Evaluando: fmt.Println")
fmt.Println("Linea 1:", enteroA, enteroB, enteroC)
fmt.Println("Linea 2:", decimalA, decimalB, decimalC)
fmt.Println("Linea 3:", textoA, textoB, textoC)
fmt.Println("Linea 4:", banderaA, banderaB, simboloA, simboloB)
fmt.Println("Linea 5:", arit1, rel1, log1, "Fin de impresion")
fmt.Println()
if enteroA == 17 && decimalA == 19.5 && textoA == "Compi-2026" && banderaB == true && simboloA == 'M' {
puntajePrintln = 1.0
fmt.Println("Resultado fmt.Println: ejecutado correctamente -> +1.0")
} else {
fmt.Println("Resultado fmt.Println: incorrecto -> +0.0")
}
fmt.Println()

fmt.Println("-> Evaluando: Manejo de valor nulo")
fmt.Println("Lista nula original:", listaNula)
fmt.Println("Lista nula copiada:", listaCopia)
if listaNula == nil && listaCopia == nil {
puntajeNil = 0.5
fmt.Println("Resultado nil: correcto -> +0.5")
} else {
fmt.Println("Resultado nil: incorrecto -> +0.0")
}
fmt.Println()

fmt.Println("-> Evaluando: Opcionalidad del ;")
var semiA int = 64;
var semiB float64 = 81.0;
var semiTexto string = "mezcla";
semiA = semiA - 14;
semiB = semiB / 9.0
semiTexto = semiTexto + " de sentencias"
if semiA == 50 && semiB == 9.0 && semiTexto == "mezcla de sentencias" {
puntajePuntoComa = 0.5
fmt.Println("Resultado punto y coma: correcto -> +0.5")
} else {
fmt.Println("Resultado punto y coma: incorrecto -> +0.0")
}
fmt.Println("Sentencias mixtas:", semiA, semiB, semiTexto)
fmt.Println()

total = puntajeDeclaracion + puntajeAsignacion + puntajeAritmeticas + puntajeRelacionales + puntajeLogicas + puntajePrintln + puntajeNil + puntajePuntoComa

fmt.Println("==============================================================")
fmt.Println("TABLA FINAL DE PUNTEOS - FUNCIONALIDADES BASICAS")
fmt.Println("==============================================================")
fmt.Println("| Criterio                         | Punteo obtenido |")
fmt.Println("| Declaracion de variables         |", puntajeDeclaracion, "|")
fmt.Println("| Asignacion de variables          |", puntajeAsignacion, "|")
fmt.Println("| Operaciones aritmeticas          |", puntajeAritmeticas, "|")
fmt.Println("| Operaciones relacionales         |", puntajeRelacionales, "|")
fmt.Println("| Operaciones logicas              |", puntajeLogicas, "|")
fmt.Println("| fmt.Println                      |", puntajePrintln, "|")
fmt.Println("| Manejo de valor nulo             |", puntajeNil, "|")
fmt.Println("| Opcionalidad del ;               |", puntajePuntoComa, "|")
fmt.Println("==============================================================")
fmt.Println("| TOTAL                            |", total, "de 7.0 |")
fmt.Println("==============================================================")
}
