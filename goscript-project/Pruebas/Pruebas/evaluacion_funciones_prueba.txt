// ===============================
// EVALUACION DE PRUEBA - FUNCIONES
// Proyecto 2 - GoScript
// ===============================

func obtenerSemilla() int {
    return 37
}

func unirEtiqueta(cadena string, numero int) string {
    return cadena + numero
}

func promedioTres(a int, b int, c int) float64 {
    return (a + b + c) / 3.0
}

func potenciaRecursiva(base int, exponente int) int {
    if exponente == 0 {
        return 1
    }
    return base * potenciaRecursiva(base, exponente - 1)
}

func mcdEuclides(a int, b int) int {
    if b == 0 {
        return a
    }
    return mcdEuclides(b, a % b)
}

func sumaNaturales(n int) int {
    if n <= 1 {
        return n
    }
    return n + sumaNaturales(n - 1)
}

func tribonacci(n int) int {
    if n == 0 {
        return 0
    } else if n == 1 {
        return 1
    } else if n == 2 {
        return 1
    }
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}

func sumaSlice(valores []int) int {
    total := 0
    for _, valor := range valores {
        total += valor
    }
    return total
}

func contarMayoresQue(valores []int, limite int) int {
    contador := 0
    for _, valor := range valores {
        if valor > limite {
            contador += 1
        }
    }
    return contador
}

func existeValor(valores []int, buscado int) bool {
    for _, valor := range valores {
        if valor == buscado {
            return true
        }
    }
    return false
}

func duplicarSlice(valores []int) []int {
    resultado := []int{}
    for _, valor := range valores {
        resultado = append(resultado, valor * 2)
    }
    return resultado
}

func anexarFinal(valores []int) []int {
    copia := []int{}
    for _, valor := range valores {
        copia = append(copia, valor)
    }
    copia = append(copia, 8)
    copia = append(copia, 13)
    return copia
}

func filtrarImpares(valores []int) []int {
    salida := []int{}
    for _, valor := range valores {
        if valor % 2 != 0 {
            salida = append(salida, valor)
        }
    }
    return salida
}

func main() {
    // Puntajes
    puntajeSinParametros := 0
    puntajeConParametros := 0
    puntajeRecursivas := 0
    puntajeAtoi := 0
    puntajeParseFloat := 0
    puntajeTypeOf := 0
    puntajeSliceParametro := 0
    puntajeSliceRetorno := 0
    total := 0

    fmt.Println("============================================")
    fmt.Println("INICIO DE EVALUACION DE FUNCIONES - PRUEBA")
    fmt.Println("============================================")
    fmt.Println()

    // 1) Funcion no recursiva sin parametros
    fmt.Println("Evaluando: Funciones no recursivas sin parametros")
    semilla := obtenerSemilla()
    if semilla == 37 {
        puntajeSinParametros += 1
        fmt.Println("Correcto: obtenerSemilla() retorno", semilla)
    } else {
        fmt.Println("Incorrecto: obtenerSemilla() retorno", semilla)
    }
    fmt.Println()

    // 2) Funciones no recursivas con parametros
    fmt.Println("Evaluando: Funciones no recursivas con parametros")
    etiqueta := unirEtiqueta("Nivel-", 9)
    promedio := promedioTres(7, 8, 9)

    if etiqueta == "Nivel-9" {
        puntajeConParametros += 1
        fmt.Println("Correcto: unirEtiqueta() retorno", etiqueta)
    } else {
        fmt.Println("Incorrecto: unirEtiqueta() retorno", etiqueta)
    }

    if promedio == 8.0 {
        puntajeConParametros += 1
        fmt.Println("Correcto: promedioTres() retorno", promedio)
    } else {
        fmt.Println("Incorrecto: promedioTres() retorno", promedio)
    }
    fmt.Println()

    // 3) Funciones recursivas
    fmt.Println("Evaluando: Funciones recursivas")
    rPotencia := potenciaRecursiva(2, 10)
    rMcd := mcdEuclides(48, 18)
    rSuma := sumaNaturales(10)
    rTribo := tribonacci(6)

    if rPotencia == 1024 {
        puntajeRecursivas += 1
        fmt.Println("Correcto: potenciaRecursiva(2,10) =", rPotencia)
    } else {
        fmt.Println("Incorrecto: potenciaRecursiva(2,10) =", rPotencia)
    }

    if rMcd == 6 {
        puntajeRecursivas += 1
        fmt.Println("Correcto: mcdEuclides(48,18) =", rMcd)
    } else {
        fmt.Println("Incorrecto: mcdEuclides(48,18) =", rMcd)
    }

    if rSuma == 55 {
        puntajeRecursivas += 1
        fmt.Println("Correcto: sumaNaturales(10) =", rSuma)
    } else {
        fmt.Println("Incorrecto: sumaNaturales(10) =", rSuma)
    }

    if rTribo == 13 {
        puntajeRecursivas += 1
        fmt.Println("Correcto: tribonacci(6) =", rTribo)
    } else {
        fmt.Println("Incorrecto: tribonacci(6) =", rTribo)
    }
    fmt.Println()

    // 4) strconv.Atoi
    fmt.Println("Evaluando: strconv.Atoi")
    enteroConvertido := strconv.Atoi("256")
    if enteroConvertido == 256 {
        puntajeAtoi += 1
        fmt.Println("Correcto: strconv.Atoi(\"256\") =", enteroConvertido)
    } else {
        fmt.Println("Incorrecto: strconv.Atoi(\"256\") =", enteroConvertido)
    }
    fmt.Println()

    // 5) strconv.ParseFloat
    fmt.Println("Evaluando: strconv.ParseFloat")
    decimalConvertido := strconv.ParseFloat("45.25")
    if decimalConvertido == 45.25 {
        puntajeParseFloat += 1
        fmt.Println("Correcto: strconv.ParseFloat(\"45.25\") =", decimalConvertido)
    } else {
        fmt.Println("Incorrecto: strconv.ParseFloat(\"45.25\") =", decimalConvertido)
    }
    fmt.Println()

    // 6) reflect.TypeOf
    fmt.Println("Evaluando: reflect.TypeOf()")
    tipoEnteroA := reflect.TypeOf(15)
    tipoEnteroB := reflect.TypeOf(999)
    tipoDecimal := reflect.TypeOf(9.75)

    if tipoEnteroA == tipoEnteroB && tipoEnteroA != tipoDecimal {
        puntajeTypeOf += 1
        fmt.Println("Correcto: reflect.TypeOf() distinguio tipos de forma consistente")
        fmt.Println("Tipo entero A:", tipoEnteroA)
        fmt.Println("Tipo entero B:", tipoEnteroB)
        fmt.Println("Tipo decimal:", tipoDecimal)
    } else {
        fmt.Println("Incorrecto: reflect.TypeOf() no produjo la comparacion esperada")
        fmt.Println("Tipo entero A:", tipoEnteroA)
        fmt.Println("Tipo entero B:", tipoEnteroB)
        fmt.Println("Tipo decimal:", tipoDecimal)
    }
    fmt.Println()

    // 7) Slice como parametro
    fmt.Println("Evaluando: Slice como parametro")
    datos := []int{3, 1, 4, 1, 5}
    sumaDatos := sumaSlice(datos)
    mayores := contarMayoresQue(datos, 3)
    existe := existeValor(datos, 4)

    if sumaDatos == 14 {
        puntajeSliceParametro += 1
        fmt.Println("Correcto: sumaSlice(datos) =", sumaDatos)
    } else {
        fmt.Println("Incorrecto: sumaSlice(datos) =", sumaDatos)
    }

    if mayores == 2 {
        puntajeSliceParametro += 1
        fmt.Println("Correcto: contarMayoresQue(datos, 3) =", mayores)
    } else {
        fmt.Println("Incorrecto: contarMayoresQue(datos, 3) =", mayores)
    }

    if existe == true {
        puntajeSliceParametro += 1
        fmt.Println("Correcto: existeValor(datos, 4) =", existe)
    } else {
        fmt.Println("Incorrecto: existeValor(datos, 4) =", existe)
    }
    fmt.Println()

    // 8) Slice como retorno
    fmt.Println("Evaluando: Slice como retorno")
    duplicados := duplicarSlice(datos)
    extendidos := anexarFinal([]int{2, 4, 6})
    impares := filtrarImpares([]int{8, 7, 6, 5, 4, 3, 2})

    if len(duplicados) == 5 && duplicados[0] == 6 && duplicados[4] == 10 {
        puntajeSliceRetorno += 1
        fmt.Println("Correcto: duplicarSlice(datos) =", duplicados)
    } else {
        fmt.Println("Incorrecto: duplicarSlice(datos) =", duplicados)
    }

    if len(extendidos) == 5 && extendidos[3] == 8 && extendidos[4] == 13 {
        puntajeSliceRetorno += 1
        fmt.Println("Correcto: anexarFinal([2,4,6]) =", extendidos)
    } else {
        fmt.Println("Incorrecto: anexarFinal([2,4,6]) =", extendidos)
    }

    if len(impares) == 3 && impares[0] == 7 && impares[1] == 5 && impares[2] == 3 {
        puntajeSliceRetorno += 1
        fmt.Println("Correcto: filtrarImpares(...) =", impares)
    } else {
        fmt.Println("Incorrecto: filtrarImpares(...) =", impares)
    }
    fmt.Println()

    // Total
    total = total + puntajeSinParametros
    total = total + puntajeConParametros
    total = total + puntajeRecursivas
    total = total + puntajeAtoi
    total = total + puntajeParseFloat
    total = total + puntajeTypeOf
    total = total + puntajeSliceParametro
    total = total + puntajeSliceRetorno

    // Tabla final
    fmt.Println("==============================================================")
    fmt.Println("TABLA FINAL DE CALIFICACION - FUNCIONES")
    fmt.Println("==============================================================")
    fmt.Println("| Criterio                                | Obtenido | Valor |")
    fmt.Println("--------------------------------------------------------------")
    fmt.Println("| Funciones sin parametros                |", puntajeSinParametros, "| 1 |")
    fmt.Println("| Funciones con parametros                |", puntajeConParametros, "| 2 |")
    fmt.Println("| Funciones recursivas                    |", puntajeRecursivas, "| 4 |")
    fmt.Println("| strconv.Atoi                            |", puntajeAtoi, "| 1 |")
    fmt.Println("| strconv.ParseFloat                      |", puntajeParseFloat, "| 1 |")
    fmt.Println("| reflect.TypeOf()                        |", puntajeTypeOf, "| 1 |")
    fmt.Println("| Slice como parametro                    |", puntajeSliceParametro, "| 3 |")
    fmt.Println("| Slice como retorno                      |", puntajeSliceRetorno, "| 3 |")
    fmt.Println("--------------------------------------------------------------")
    fmt.Println("| TOTAL                                   |", total, "| 16 |")
    fmt.Println("==============================================================")
}
