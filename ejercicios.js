// Banco de ejercicios para la práctica de métodos numéricos
const allExercises = [
    // Teoría del error
    {
        id: 101,
        title: "Error absoluto",
        description: "Calcula el error absoluto entre el valor aproximado 3.14 y el valor exacto π (pi). Redondea tu respuesta a 4 decimales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Valor exacto: π ≈ 3.14159265359</div>
            <div class="operation-text">Valor aproximado: 3.14</div>
            <div class="operation-text">Error absoluto = |Valor exacto - Valor aproximado| = ?</div>
        </div>`,
        correctAnswer: "0.0016",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "0.0016" || normalized === "0.00159" || normalized === "0.00159265359";
        },
        hint: "El error absoluto es el valor absoluto de la diferencia entre el valor exacto y el valor aproximado.",
        explanation: "El error absoluto se calcula como el valor absoluto de la diferencia entre el valor exacto y el valor aproximado:\n\nError absoluto = |Valor exacto - Valor aproximado| = |π - 3.14| = |3.14159265359 - 3.14| = |0.00159265359| = 0.00159265359\n\nRedondeando a 4 decimales: 0.0016",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error absoluto = |π - 3.14| = |3.14159265359 - 3.14| = 0.00159265359 ≈ 0.0016</div>
        </div>`
    },
    {
        id: 102,
        title: "Error relativo",
        description: "Calcula el error relativo entre el valor aproximado 9.8 y el valor exacto 9.81 (aceleración de la gravedad). Expresa tu respuesta en porcentaje con 2 decimales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Valor exacto: 9.81</div>
            <div class="operation-text">Valor aproximado: 9.8</div>
            <div class="operation-text">Error relativo = |Valor exacto - Valor aproximado| / |Valor exacto| × 100% = ?</div>
        </div>`,
        correctAnswer: "0.10%",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '').replace(/%/g, '');
            return normalized === "0.10" || normalized === "0.1";
        },
        hint: "El error relativo es el error absoluto dividido por el valor absoluto del valor exacto, expresado en porcentaje.",
        explanation: "El error relativo se calcula como el error absoluto dividido por el valor absoluto del valor exacto, expresado en porcentaje:\n\nError relativo = |Valor exacto - Valor aproximado| / |Valor exacto| × 100%\n= |9.81 - 9.8| / |9.81| × 100%\n= |0.01| / |9.81| × 100%\n= 0.01 / 9.81 × 100%\n= 0.001019... × 100%\n= 0.1019... %\n\nRedondeando a 2 decimales: 0.10%",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error relativo = |9.81 - 9.8| / |9.81| × 100% = 0.01 / 9.81 × 100% = 0.10%</div>
        </div>`
    },
    {
        id: 103,
        title: "Cifras significativas",
        description: "¿Cuántas cifras significativas tiene el número 0.00305? Escribe tu respuesta como un número entero.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Número: 0.00305</div>
            <div class="operation-text">Cifras significativas = ?</div>
        </div>`,
        correctAnswer: "3",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "3";
        },
        hint: "Las cifras significativas son todos los dígitos que no son ceros a la izquierda.",
        explanation: "Las cifras significativas son todos los dígitos que no son ceros a la izquierda. En el número 0.00305, los ceros a la izquierda (0.00) no son significativos, mientras que los dígitos 3, 0 y 5 sí lo son.\n\nPor lo tanto, el número 0.00305 tiene 3 cifras significativas: 3, 0 y 5.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">0.00305 → las cifras significativas son: 3, 0, 5</div>
            <div class="operation-text">Total: 3 cifras significativas</div>
        </div>`
    },
    {
        id: 104,
        title: "Error de redondeo",
        description: "Si redondeamos π (pi) a 2 decimales (3.14), ¿cuál es el error de redondeo? Expresa tu respuesta con 5 decimales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Valor exacto: π ≈ 3.14159265359</div>
            <div class="operation-text">Valor redondeado: 3.14</div>
            <div class="operation-text">Error de redondeo = ?</div>
        </div>`,
        correctAnswer: "0.00159",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "0.00159";
        },
        hint: "El error de redondeo es la diferencia entre el valor exacto y el valor redondeado.",
        explanation: "El error de redondeo es la diferencia entre el valor exacto y el valor redondeado:\n\nError de redondeo = Valor exacto - Valor redondeado = π - 3.14 = 3.14159265359 - 3.14 = 0.00159265359\n\nRedondeando a 5 decimales: 0.00159",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error de redondeo = π - 3.14 = 3.14159265359 - 3.14 = 0.00159265359 ≈ 0.00159</div>
        </div>`
    },
    {
        id: 105,
        title: "Error de truncamiento",
        description: "Si truncamos π (pi) a 3 decimales (3.141), ¿cuál es el error de truncamiento? Expresa tu respuesta con 6 decimales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Valor exacto: π ≈ 3.14159265359</div>
            <div class="operation-text">Valor truncado: 3.141</div>
            <div class="operation-text">Error de truncamiento = ?</div>
        </div>`,
        correctAnswer: "0.000593",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "0.000593" || normalized === "0.00059265359";
        },
        hint: "El error de truncamiento es la diferencia entre el valor exacto y el valor truncado.",
        explanation: "El error de truncamiento es la diferencia entre el valor exacto y el valor truncado:\n\nError de truncamiento = Valor exacto - Valor truncado = π - 3.141 = 3.14159265359 - 3.141 = 0.00059265359\n\nRedondeando a 6 decimales: 0.000593",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error de truncamiento = π - 3.141 = 3.14159265359 - 3.141 = 0.00059265359 ≈ 0.000593</div>
        </div>`
    },
    {
        id: 106,
        title: "Propagación de errores en suma",
        description: "Si a = 2.3 ± 0.1 y b = 1.7 ± 0.2, calcula el error absoluto máximo en la suma a + b. Escribe tu respuesta como un número decimal.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">a = 2.3 ± 0.1</div>
            <div class="operation-text">b = 1.7 ± 0.2</div>
            <div class="operation-text">Error máximo en a + b = ?</div>
        </div>`,
        correctAnswer: "0.3",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "0.3";
        },
        hint: "En la suma, los errores absolutos se suman.",
        explanation: "En la propagación de errores para la suma, los errores absolutos se suman:\n\nError máximo en a + b = Error en a + Error en b = 0.1 + 0.2 = 0.3",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error máximo en a + b = Error en a + Error en b = 0.1 + 0.2 = 0.3</div>
        </div>`
    },
    {
        id: 107,
        title: "Propagación de errores en producto",
        description: "Si a = 10 ± 0.5 y b = 5 ± 0.2, calcula el error relativo máximo en el producto a × b. Expresa tu respuesta en porcentaje con 1 decimal.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">a = 10 ± 0.5 (error relativo: 0.5/10 = 5%)</div>
            <div class="operation-text">b = 5 ± 0.2 (error relativo: 0.2/5 = 4%)</div>
            <div class="operation-text">Error relativo máximo en a × b = ?</div>
        </div>`,
        correctAnswer: "9.0%",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '').replace(/%/g, '');
            return normalized === "9.0" || normalized === "9" || normalized === "9.00";
        },
        hint: "En el producto, los errores relativos aproximadamente se suman.",
        explanation: "En la propagación de errores para el producto, los errores relativos aproximadamente se suman:\n\nError relativo en a = 0.5/10 = 0.05 = 5%\nError relativo en b = 0.2/5 = 0.04 = 4%\n\nError relativo máximo en a × b = Error relativo en a + Error relativo en b = 5% + 4% = 9%",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error relativo en a = 0.5/10 = 5%</div>
            <div class="operation-text">Error relativo en b = 0.2/5 = 4%</div>
            <div class="operation-text">Error relativo máximo en a × b = 5% + 4% = 9.0%</div>
        </div>`
    },
    {
        id: 108,
        title: "Error de método",
        description: "Si aproximamos la derivada de f(x) = x² en x = 2 usando la fórmula de diferencia hacia adelante f'(x) ≈ [f(x+h) - f(x)]/h con h = 0.1, ¿cuál es el error absoluto? El valor exacto es f'(2) = 4. Redondea tu respuesta a 3 decimales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">f(x) = x²</div>
            <div class="operation-text">f'(x) = 2x</div>
            <div class="operation-text">Valor exacto: f'(2) = 4</div>
            <div class="operation-text">Aproximación: f'(2) ≈ [f(2+0.1) - f(2)]/0.1 = ?</div>
        </div>`,
        correctAnswer: "0.200",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "0.200" || normalized === "0.2" || normalized === "0.20";
        },
        hint: "Calcula la aproximación usando la fórmula dada y compárala con el valor exacto.",
        explanation: "Calculamos la aproximación usando la fórmula de diferencia hacia adelante:\n\nf'(2) ≈ [f(2+0.1) - f(2)]/0.1 = [f(2.1) - f(2)]/0.1 = [(2.1)² - 2²]/0.1 = [4.41 - 4]/0.1 = 0.41/0.1 = 4.1\n\nEl valor exacto es f'(2) = 2×2 = 4\n\nPor lo tanto, el error absoluto es:\n|Valor exacto - Valor aproximado| = |4 - 4.1| = |−0.1| = 0.1\n\nRedondeando a 3 decimales: 0.200",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">f'(2) ≈ [f(2.1) - f(2)]/0.1 = [4.41 - 4]/0.1 = 4.1</div>
            <div class="operation-text">Error absoluto = |4 - 4.1| = 0.1 = 0.200</div>
        </div>`
    },
    {
        id: 109,
        title: "Condición de un problema",
        description: "Calcula el número de condición para la función f(x) = x³ en x = 2. Redondea tu respuesta a un número entero.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">f(x) = x³</div>
            <div class="operation-text">Número de condición = |x·f'(x)/f(x)| = ?</div>
        </div>`,
        correctAnswer: "3",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "3";
        },
        hint: "El número de condición para una función f(x) en un punto x se calcula como |x·f'(x)/f(x)|.",
        explanation: "El número de condición para una función f(x) en un punto x se calcula como |x·f'(x)/f(x)|.\n\nPara f(x) = x³:\nf'(x) = 3x²\n\nEn x = 2:\nf(2) = 2³ = 8\nf'(2) = 3·2² = 3·4 = 12\n\nNúmero de condición = |x·f'(x)/f(x)| = |2·12/8| = |24/8| = |3| = 3",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">f(x) = x³ → f'(x) = 3x²</div>
            <div class="operation-text">f(2) = 8, f'(2) = 12</div>
            <div class="operation-text">Número de condición = |2·12/8| = |3| = 3</div>
        </div>`
    },
    {
        id: 110,
        title: "Estabilidad de un algoritmo",
        description: "Un algoritmo tiene un factor de amplificación de error de 5. Si el error de entrada es 0.01, ¿cuál es el error máximo esperado en la salida? Escribe tu respuesta como un número decimal.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Factor de amplificación = 5</div>
            <div class="operation-text">Error de entrada = 0.01</div>
            <div class="operation-text">Error máximo en la salida = ?</div>
        </div>`,
        correctAnswer: "0.05",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "0.05";
        },
        hint: "El error en la salida es aproximadamente el error de entrada multiplicado por el factor de amplificación.",
        explanation: "El error en la salida de un algoritmo es aproximadamente el error de entrada multiplicado por el factor de amplificación:\n\nError en la salida ≈ Error de entrada × Factor de amplificación = 0.01 × 5 = 0.05",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">Error en la salida = 0.01 × 5 = 0.05</div>
        </div>`
    },
    
    // Manipulación de matrices en Scilab
    {
        id: 201,
        title: "Crear una fila en una matriz",
        description: "Escribe el comando Scilab para agregar la fila [7, 8, 9] a la matriz A = [1, 2, 3; 4, 5, 6]. La nueva fila debe agregarse al final.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Nueva fila: [7, 8, 9]</div>
            <div class="operation-text">Comando para agregar la fila: ?</div>
        </div>`,
        correctAnswer: "A = [A; 7, 8, 9]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "A=[A;7,8,9]" || normalized === "[A;7,8,9]" || normalized === "A=[A;7 8 9]" || normalized === "[A;7 8 9]";
        },
        hint: "Utiliza el operador de concatenación vertical (;) para agregar una fila a una matriz.",
        explanation: "Para agregar una fila a una matriz en Scilab, se utiliza el operador de concatenación vertical (;). La sintaxis es:\n\nA = [A; nueva_fila]\n\nDonde 'nueva_fila' son los elementos de la fila separados por comas o espacios. En este caso:\n\nA = [A; 7, 8, 9] o A = [A; 7 8 9]\n\nEsto agrega la fila [7, 8, 9] al final de la matriz A.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A = [A; 7, 8, 9]</div>
            <div class="operation-text">Resultado:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 202,
        title: "Crear una columna en una matriz",
        description: "Escribe el comando Scilab para agregar la columna [10; 11] a la matriz A = [1, 2; 3, 4]. La nueva columna debe agregarse al final.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Nueva columna: </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">10</div>
                    <div class="matrix-row">11</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Comando para agregar la columna: ?</div>
        </div>`,
        correctAnswer: "A = [A, [10; 11]]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "A=[A,[10;11]]" || normalized === "[A,[10;11]]" || normalized === "A=[A [10;11]]" || normalized === "[A [10;11]]";
        },
        hint: "Utiliza el operador de concatenación horizontal (,) para agregar una columna a una matriz.",
        explanation: "Para agregar una columna a una matriz en Scilab, se utiliza el operador de concatenación horizontal (,). La sintaxis es:\n\nA = [A, nueva_columna]\n\nDonde 'nueva_columna' es un vector columna. En este caso:\n\nA = [A, [10; 11]]\n\nEsto agrega la columna [10; 11] al final de la matriz A.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A = [A, [10; 11]]</div>
            <div class="operation-text">Resultado:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 10</div>
                    <div class="matrix-row">3 4 11</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 203,
        title: "Editar un elemento de una matriz",
        description: "Escribe el comando Scilab para cambiar el elemento en la posición (2,3) de la matriz A = [1, 2, 3; 4, 5, 6; 7, 8, 9] al valor 15.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Cambiar el elemento en la posición (2,3) a 15</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "A(2,3) = 15",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "A(2,3)=15";
        },
        hint: "Utiliza la notación de índices A(fila,columna) para acceder a un elemento específico de la matriz.",
        explanation: "Para editar un elemento específico de una matriz en Scilab, se utiliza la notación de índices A(fila,columna). La sintaxis es:\n\nA(fila,columna) = nuevo_valor\n\nEn este caso, para cambiar el elemento en la posición (2,3) (segunda fila, tercera columna) al valor 15:\n\nA(2,3) = 15\n\nRecuerda que en Scilab, los índices comienzan en 1, no en 0.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A(2,3) = 15</div>
            <div class="operation-text">Resultado:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 15</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 204,
        title: "Extraer una fila de una matriz",
        description: "Escribe el comando Scilab para extraer la segunda fila de la matriz A = [1, 2, 3; 4, 5, 6; 7, 8, 9] y asignarla a una variable llamada 'fila'.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Extraer la segunda fila</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "fila = A(2,:)",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "fila=A(2,:)";
        },
        hint: "Utiliza la notación de índices con dos puntos (:) para seleccionar todos los elementos de una dimensión.",
        explanation: "Para extraer una fila completa de una matriz en Scilab, se utiliza la notación de índices con dos puntos (:). La sintaxis es:\n\nfila = A(n,:)\n\nDonde 'n' es el número de fila que se desea extraer y ':' indica que se seleccionan todos los elementos de esa fila. En este caso, para extraer la segunda fila:\n\nfila = A(2,:)\n\nEsto asigna el vector [4, 5, 6] a la variable 'fila'.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">fila = A(2,:)</div>
            <div class="operation-text">Resultado:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">4 5 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 205,
        title: "Extraer una columna de una matriz",
        description: "Escribe el comando Scilab para extraer la tercera columna de la matriz A = [1, 2, 3; 4, 5, 6; 7, 8, 9] y asignarla a una variable llamada 'columna'.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Extraer la tercera columna</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "columna = A(:,3)",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "columna=A(:,3)";
        },
        hint: "Utiliza la notación de índices con dos puntos (:) para seleccionar todos los elementos de una dimensión.",
        explanation: "Para extraer una columna completa de una matriz en Scilab, se utiliza la notación de índices con dos puntos (:). La sintaxis es:\n\ncolumna = A(:,n)\n\nDonde 'n' es el número de columna que se desea extraer y ':' indica que se seleccionan todos los elementos de esa columna. En este caso, para extraer la tercera columna:\n\ncolumna = A(:,3)\n\nEsto asigna el vector columna [3; 6; 9] a la variable 'columna'.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">columna = A(:,3)</div>
            <div class="operation-text">Resultado:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">3</div>
                    <div class="matrix-row">6</div>
                    <div class="matrix-row">9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    
    // Creación de gráficas en Scilab
    {
        id: 301,
        title: "Gráfica simple de una función",
        description: "Escribe los comandos Scilab para crear una gráfica de la función y = sin(x) en el intervalo [0, 2π].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Función: y = sin(x)</div>
            <div class="operation-text">Intervalo: [0, 2π]</div>
            <div class="operation-text">Comandos para crear la gráfica: ?</div>
            <div class="plot-placeholder">Gráfica de y = sin(x)</div>
        </div>`,
        correctAnswer: "x = linspace(0, 2*%pi, 100); y = sin(x); plot(x, y);",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("x=linspace(0,2*%pi") && normalized.includes("y=sin(x)") && normalized.includes("plot(x,y)");
        },
        hint: "Primero crea un vector x con valores en el intervalo [0, 2π], luego calcula los valores de y = sin(x), y finalmente usa el comando plot().",
        explanation: "Para crear una gráfica de una función en Scilab, se siguen estos pasos:\n\n1. Crear un vector x con valores en el intervalo deseado usando linspace()\n2. Calcular los valores de y aplicando la función a cada elemento de x\n3. Usar el comando plot() para graficar\n\nEn este caso:\n\nx = linspace(0, 2*%pi, 100); // Crea 100 puntos entre 0 y 2π\ny = sin(x); // Calcula el seno para cada valor de x\nplot(x, y); // Crea la gráfica\n\nNota: En Scilab, %pi representa el valor de π.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">x = linspace(0, 2*%pi, 100);</div>
            <div class="operation-text">y = sin(x);</div>
            <div class="operation-text">plot(x, y);</div>
            <div class="plot-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sine_cosine_one_period.svg/600px-Sine_cosine_one_period.svg.png" alt="Gráfica de seno" style="width: 300px;">
            </div>
        </div>`
    },
    {
        id: 302,
        title: "Personalizar una gráfica",
        description: "Escribe los comandos Scilab para crear una gráfica de la función y = cos(x) en el intervalo [0, 2π] con línea roja, título 'Función Coseno' y etiquetas para los ejes x e y.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Función: y = cos(x)</div>
            <div class="operation-text">Intervalo: [0, 2π]</div>
            <div class="operation-text">Color de línea: rojo</div>
            <div class="operation-text">Título: 'Función Coseno'</div>
            <div class="operation-text">Etiqueta eje x: 'x'</div>
            <div class="operation-text">Etiqueta eje y: 'cos(x)'</div>
            <div class="operation-text">Comandos: ?</div>
        </div>`,
        correctAnswer: "x = linspace(0, 2*%pi, 100); y = cos(x); plot(x, y, 'r-'); title('Función Coseno'); xlabel('x'); ylabel('cos(x)');",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("x=linspace(0,2*%pi") && 
                   normalized.includes("y=cos(x)") && 
                   normalized.includes("plot(x,y,'r") && 
                   normalized.includes("title('FunciónCoseno')") && 
                   normalized.includes("xlabel('x')") && 
                   normalized.includes("ylabel('cos(x')");
        },
        hint: "Después de crear la gráfica básica, usa title(), xlabel() y ylabel() para personalizar los títulos. Para el color rojo, usa 'r-' como tercer parámetro en plot().",
        explanation: "Para personalizar una gráfica en Scilab, se pueden usar varios comandos adicionales después de plot():\n\n1. Crear los vectores x e y como en el ejercicio anterior\n2. Usar plot() con un tercer parámetro para especificar el color y estilo de línea\n3. Usar title() para agregar un título\n4. Usar xlabel() y ylabel() para etiquetar los ejes\n\nEn este caso:\n\nx = linspace(0, 2*%pi, 100); // Crea 100 puntos entre 0 y 2π\ny = cos(x); // Calcula el coseno para cada valor de x\nplot(x, y, 'r-'); // Crea la gráfica con línea roja continua\ntitle('Función Coseno'); // Agrega el título\nxlabel('x'); // Etiqueta para el eje x\nylabel('cos(x)'); // Etiqueta para el eje y\n\nNota: En el tercer parámetro de plot(), 'r' indica color rojo y '-' indica línea continua.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">x = linspace(0, 2*%pi, 100);</div>
            <div class="operation-text">y = cos(x);</div>
            <div class="operation-text">plot(x, y, 'r-');</div>
            <div class="operation-text">title('Función Coseno');</div>
            <div class="operation-text">xlabel('x');</div>
            <div class="operation-text">ylabel('cos(x)');</div>
            <div class="plot-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sine_cosine_one_period.svg/600px-Sine_cosine_one_period.svg.png" alt="Gráfica de coseno" style="width: 300px;">
            </div>
        </div>`
    },
    {
        id: 303,
        title: "Gráfica de múltiples funciones",
        description: "Escribe los comandos Scilab para crear una gráfica que muestre tanto sin(x) como cos(x) en el mismo gráfico, con diferentes colores y una leyenda.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Funciones: y1 = sin(x), y2 = cos(x)</div>
            <div class="operation-text">Intervalo: [0, 2π]</div>
            <div class="operation-text">Color para sin(x): azul</div>
            <div class="operation-text">Color para cos(x): rojo</div>
            <div class="operation-text">Incluir leyenda</div>
            <div class="operation-text">Comandos: ?</div>
        </div>`,
        correctAnswer: "x = linspace(0, 2*%pi, 100); y1 = sin(x); y2 = cos(x); plot(x, y1, 'b-', x, y2, 'r-'); legend(['sin(x)', 'cos(x)']);",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("x=linspace(0,2*%pi") && 
                   normalized.includes("y1=sin(x)") && 
                   normalized.includes("y2=cos(x)") && 
                   normalized.includes("plot(x,y1,'b") && 
                   normalized.includes("x,y2,'r") && 
                   normalized.includes("legend");
        },
        hint: "Usa plot() con múltiples conjuntos de datos (x, y1, estilo1, x, y2, estilo2) y agrega una leyenda con legend().",
        explanation: "Para graficar múltiples funciones en el mismo gráfico en Scilab:\n\n1. Crear un vector x para el intervalo deseado\n2. Calcular los valores y1 e y2 para las diferentes funciones\n3. Usar plot() con múltiples conjuntos de datos\n4. Agregar una leyenda con legend()\n\nEn este caso:\n\nx = linspace(0, 2*%pi, 100); // Crea 100 puntos entre 0 y 2π\ny1 = sin(x); // Calcula el seno\ny2 = cos(x); // Calcula el coseno\nplot(x, y1, 'b-', x, y2, 'r-'); // Grafica ambas funciones\nlegend(['sin(x)', 'cos(x)']); // Agrega leyenda\n\nNota: 'b-' representa una línea azul continua y 'r-' una línea roja continua.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">x = linspace(0, 2*%pi, 100);</div>
            <div class="operation-text">y1 = sin(x);</div>
            <div class="operation-text">y2 = cos(x);</div>
            <div class="operation-text">plot(x, y1, 'b-', x, y2, 'r-');</div>
            <div class="operation-text">legend(['sin(x)', 'cos(x)']);</div>
            <div class="plot-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sine_cosine_one_period.svg/600px-Sine_cosine_one_period.svg.png" alt="Gráfica de seno y coseno" style="width: 300px;">
            </div>
        </div>`
    },
    {
        id: 304,
        title: "Gráfica a partir de puntos",
        description: "Dados los puntos (1,2), (2,3), (3,5), (4,8), (5,12), escribe los comandos Scilab para crear una gráfica que los conecte con una línea.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Puntos: (1,2), (2,3), (3,5), (4,8), (5,12)</div>
            <div class="operation-text">Comandos para graficar los puntos conectados: ?</div>
        </div>`,
        correctAnswer: "x = [1, 2, 3, 4, 5]; y = [2, 3, 5, 8, 12]; plot(x, y, '-o');",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("x=[1,2,3,4,5]") && 
                   normalized.includes("y=[2,3,5,8,12]") && 
                   (normalized.includes("plot(x,y,'-o')") || 
                    normalized.includes("plot(x,y,'o-')") || 
                    normalized.includes("plot(x,y,'-*')") || 
                    normalized.includes("plot(x,y,'*-')"));
        },
        hint: "Crea dos vectores, uno para las coordenadas x y otro para las coordenadas y, luego usa plot() con un estilo que muestre tanto los puntos como las líneas que los conectan.",
        explanation: "Para graficar un conjunto de puntos en Scilab y conectarlos con una línea:\n\n1. Crear un vector x con las coordenadas x de los puntos\n2. Crear un vector y con las coordenadas y de los puntos\n3. Usar plot() con un estilo que muestre tanto los puntos como las líneas\n\nEn este caso:\n\nx = [1, 2, 3, 4, 5]; // Coordenadas x\ny = [2, 3, 5, 8, 12]; // Coordenadas y\nplot(x, y, '-o'); // Grafica con líneas y marcadores circulares\n\nNota: El estilo '-o' indica que se deben dibujar líneas entre los puntos y marcar cada punto con un círculo.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">x = [1, 2, 3, 4, 5];</div>
            <div class="operation-text">y = [2, 3, 5, 8, 12];</div>
            <div class="operation-text">plot(x, y, '-o');</div>
            <div class="plot-image">
                <img src="https://i.imgur.com/JYbHGHl.png" alt="Gráfica de puntos conectados" style="width: 300px;">
            </div>
        </div>`
    },
    {
        id: 305,
        title: "Gráfica de barras",
        description: "Escribe los comandos Scilab para crear una gráfica de barras que muestre los valores [10, 25, 15, 30, 20] con etiquetas ['A', 'B', 'C', 'D', 'E'].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Valores: [10, 25, 15, 30, 20]</div>
            <div class="operation-text">Etiquetas: ['A', 'B', 'C', 'D', 'E']</div>
            <div class="operation-text">Comandos para crear la gráfica de barras: ?</div>
        </div>`,
        correctAnswer: "y = [10, 25, 15, 30, 20]; bar(y); xtitle('Gráfica de Barras'); set(gca(), 'x_ticks', tlist(['ticks', 'locations', 'labels'], 1:5, ['A', 'B', 'C', 'D', 'E']));",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("y=[10,25,15,30,20]") && 
                   normalized.includes("bar(y)") && 
                   (normalized.includes("xtitle") || normalized.includes("title")) && 
                   (normalized.includes("set(gca(),'x_ticks'") || normalized.includes("gca().x_ticks"));
        },
        hint: "Usa el comando bar() para crear la gráfica de barras y luego configura las etiquetas del eje x usando set(gca(), 'x_ticks', ...).",
        explanation: "Para crear una gráfica de barras en Scilab con etiquetas personalizadas:\n\n1. Crear un vector con los valores a graficar\n2. Usar el comando bar() para crear la gráfica de barras\n3. Agregar un título con xtitle()\n4. Configurar las etiquetas del eje x usando set(gca(), 'x_ticks', ...)\n\nEn este caso:\n\ny = [10, 25, 15, 30, 20]; // Valores para las barras\nbar(y); // Crear la gráfica de barras\nxtitle('Gráfica de Barras'); // Agregar título\nset(gca(), 'x_ticks', tlist(['ticks', 'locations', 'labels'], 1:5, ['A', 'B', 'C', 'D', 'E'])); // Configurar etiquetas\n\nNota: gca() obtiene el eje actual (get current axis) y set() configura sus propiedades.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">y = [10, 25, 15, 30, 20];</div>
            <div class="operation-text">bar(y);</div>
            <div class="operation-text">xtitle('Gráfica de Barras');</div>
            <div class="operation-text">set(gca(), 'x_ticks', tlist(['ticks', 'locations', 'labels'], 1:5, ['A', 'B', 'C', 'D', 'E']));</div>
            <div class="plot-image">
                <img src="https://i.imgur.com/8QJHkGl.png" alt="Gráfica de barras" style="width: 300px;">
            </div>
        </div>`
    },
    
    // Comandos básicos de Scilab
    {
        id: 401,
        title: "Comando help",
        description: "Escribe el comando Scilab para obtener ayuda sobre la función 'plot'.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres obtener información sobre cómo usar la función 'plot'</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "help plot",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "helpplot" || normalized === "?plot";
        },
        hint: "Usa el comando help seguido del nombre de la función.",
        explanation: "El comando 'help' en Scilab muestra la documentación de una función específica. La sintaxis es:\n\nhelp nombre_funcion\n\nEn este caso, para obtener ayuda sobre la función 'plot', el comando es:\n\nhelp plot\n\nTambién puedes usar el atajo '?' seguido del nombre de la función: ?plot",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">help plot</div>
            <div class="operation-text">Resultado: Se muestra la documentación completa de la función plot, incluyendo su sintaxis, parámetros y ejemplos de uso.</div>
        </div>`
    },
    {
        id: 402,
        title: "Comando clear",
        description: "Escribe el comando Scilab para limpiar todas las variables del espacio de trabajo.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres eliminar todas las variables definidas en la sesión actual</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "clear all",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "clearall" || normalized === "clear";
        },
        hint: "Usa el comando clear con un parámetro que indique que quieres limpiar todo.",
        explanation: "El comando 'clear all' en Scilab elimina todas las variables, funciones y otros objetos definidos por el usuario en la sesión actual. Esto es útil para comenzar con un espacio de trabajo limpio.\n\nTambién puedes usar simplemente 'clear' sin argumentos, que tiene el mismo efecto que 'clear all' en versiones recientes de Scilab.\n\nSi quieres eliminar solo una variable específica, puedes usar 'clear nombre_variable'.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">clear all</div>
            <div class="operation-text">Resultado: Todas las variables definidas previamente son eliminadas del espacio de trabajo.</div>
        </div>`
    },
    {
        id: 403,
        title: "Comando who",
        description: "Escribe el comando Scilab para mostrar todas las variables definidas en el espacio de trabajo actual.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres ver qué variables están definidas en la sesión actual</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "who",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "who" || normalized === "whos";
        },
        hint: "Usa el comando que muestra la lista de variables (similar a 'who' en MATLAB).",
        explanation: "El comando 'who' en Scilab muestra una lista de todas las variables definidas en el espacio de trabajo actual. Esto es útil para ver qué variables están disponibles para su uso.\n\nSi quieres información más detallada sobre las variables, incluyendo su tipo y tamaño, puedes usar el comando 'whos'.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">who</div>
            <div class="operation-text">Resultado:</div>
            <div class="operation-text">Variables actualmente definidas:</div>
            <div class="operation-text">x, y, A, B, resultado</div>
        </div>`
    },
    {
        id: 404,
        title: "Comando clc",
        description: "Escribe el comando Scilab para limpiar la ventana de la consola.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres limpiar todo el texto mostrado en la consola de Scilab</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "clc",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "clc";
        },
        hint: "Usa el comando de tres letras que limpia la consola (similar a 'cls' en algunos sistemas).",
        explanation: "El comando 'clc' (clear console) en Scilab limpia la ventana de la consola, eliminando todo el texto mostrado anteriormente. Esto es útil para tener una vista limpia cuando se está trabajando en un script o realizando cálculos interactivos.\n\nEste comando solo afecta a la visualización de la consola y no modifica las variables o el estado del programa.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">clc</div>
            <div class="operation-text">Resultado: La ventana de la consola se limpia, eliminando todo el texto mostrado anteriormente.</div>
        </div>`
    },
    {
        id: 405,
        title: "Comando type",
        description: "Escribe el comando Scilab para mostrar el contenido de un archivo de script llamado 'calculo.sce'.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres ver el código fuente contenido en el archivo 'calculo.sce'</div>
            <div class="operation-text">Comando: ?</div>
        </div>`,
        correctAnswer: "type('calculo.sce')",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "type('calculo.sce')" || normalized === "type(calculo.sce)" || normalized === "type calculo.sce";
        },
        hint: "Usa el comando que muestra el contenido de un archivo (similar a 'type' en sistemas Windows o 'cat' en Unix).",
        explanation: "El comando 'type' en Scilab muestra el contenido de un archivo de script o función. La sintaxis es:\n\ntype('nombre_archivo')\n\nEn este caso, para mostrar el contenido del archivo 'calculo.sce', el comando es:\n\ntype('calculo.sce')\n\nEste comando es útil para revisar rápidamente el código de un script sin tener que abrirlo en un editor de texto.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">type('calculo.sce')</div>
            <div class="operation-text">Resultado:</div>
            <div class="operation-text">// Archivo: calculo.sce</div>
            <div class="operation-text">// Cálculo de la raíz cuadrada de una matriz</div>
            <div class="operation-text">A = [4, 9; 16, 25];</div>
            <div class="operation-text">B = sqrt(A);</div>
            <div class="operation-text">disp(B);</div>
        </div>`
    },
    
    // Estructuras de control y programación en Scilab
    {
        id: 501,
        title: "Bucle for",
        description: "Escribe un bucle for en Scilab que imprima los números del 1 al 5.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres imprimir los números del 1 al 5 usando un bucle</div>
            <div class="operation-text">Código: ?</div>
        </div>`,
        correctAnswer: "for i = 1:5\n    disp(i)\nend",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("fori=1:5") && 
                   normalized.includes("disp(i)") && 
                   normalized.includes("end");
        },
        hint: "Usa la estructura 'for variable = inicio:fin ... end' y el comando disp() para mostrar cada valor.",
        explanation: "Para crear un bucle for en Scilab que imprima los números del 1 al 5, se utiliza la siguiente estructura:\n\nfor i = 1:5\n    disp(i)\nend\n\nDonde:\n- 'for' inicia el bucle\n- 'i = 1:5' define la variable de iteración i que tomará valores de 1 a 5\n- 'disp(i)' muestra el valor actual de i en cada iteración\n- 'end' marca el final del bucle\n\nEste código ejecutará el comando disp(i) cinco veces, con i tomando los valores 1, 2, 3, 4 y 5 sucesivamente.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">for i = 1:5</div>
            <div class="operation-text">    disp(i)</div>
            <div class="operation-text">end</div>
            <div class="operation-text">Resultado:</div>
            <div class="operation-text">1</div>
            <div class="operation-text">2</div>
            <div class="operation-text">3</div>
            <div class="operation-text">4</div>
            <div class="operation-text">5</div>
        </div>`
    },
    {
        id: 502,
        title: "Condicional if-else",
        description: "Escribe una estructura condicional if-else en Scilab que verifique si un número 'x' es positivo, negativo o cero.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Variable: x</div>
            <div class="operation-text">Quieres mostrar si x es positivo, negativo o cero</div>
            <div class="operation-text">Código: ?</div>
        </div>`,
        correctAnswer: "if x > 0 then\n    disp('Positivo')\nelseif x < 0 then\n    disp('Negativo')\nelse\n    disp('Cero')\nend",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("ifx>0then") && 
                   normalized.includes("disp('Positivo')") && 
                   (normalized.includes("elseifx<0then") || normalized.includes("elseif(x<0)then")) && 
                   normalized.includes("disp('Negativo')") && 
                   normalized.includes("else") && 
                   normalized.includes("disp('Cero')") && 
                   normalized.includes("end");
        },
        hint: "Usa la estructura 'if condición then ... elseif otra_condición then ... else ... end'.",
        explanation: "Para crear una estructura condicional if-else en Scilab que verifique si un número 'x' es positivo, negativo o cero, se utiliza la siguiente estructura:\n\nif x > 0 then\n    disp('Positivo')\nelseif x < 0 then\n    disp('Negativo')\nelse\n    disp('Cero')\nend\n\nDonde:\n- 'if x > 0 then' verifica si x es mayor que 0\n- 'elseif x < 0 then' verifica si x es menor que 0 (solo se ejecuta si la primera condición es falsa)\n- 'else' se ejecuta si ninguna de las condiciones anteriores es verdadera (es decir, si x es 0)\n- 'end' marca el final de la estructura condicional\n\nEste código mostrará 'Positivo', 'Negativo' o 'Cero' dependiendo del valor de x.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">if x > 0 then</div>
            <div class="operation-text">    disp('Positivo')</div>
            <div class="operation-text">elseif x < 0 then</div>
            <div class="operation-text">    disp('Negativo')</div>
            <div class="operation-text">else</div>
            <div class="operation-text">    disp('Cero')</div>
            <div class="operation-text">end</div>
        </div>`
    },
    {
        id: 503,
        title: "Bucle while",
        description: "Escribe un bucle while en Scilab que calcule la suma de los números del 1 al 10.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres calcular la suma de los números del 1 al 10 usando un bucle while</div>
            <div class="operation-text">Código: ?</div>
        </div>`,
        correctAnswer: "suma = 0;\ni = 1;\nwhile i <= 10\n    suma = suma + i;\n    i = i + 1;\nend\ndisp(suma);",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("suma=0") && 
                   normalized.includes("i=1") && 
                   normalized.includes("whilei<=10") && 
                   normalized.includes("suma=suma+i") && 
                   normalized.includes("i=i+1") && 
                   normalized.includes("end") && 
                   normalized.includes("disp(suma)");
        },
        hint: "Inicializa variables para la suma y el contador, usa un bucle while con una condición de terminación, actualiza la suma y el contador en cada iteración.",
        explanation: "Para crear un bucle while en Scilab que calcule la suma de los números del 1 al 10, se utiliza la siguiente estructura:\n\nsuma = 0; // Inicializa la variable para almacenar la suma\ni = 1;    // Inicializa el contador\nwhile i <= 10\n    suma = suma + i; // Agrega el valor actual de i a la suma\n    i = i + 1;      // Incrementa el contador\nend\ndisp(suma); // Muestra el resultado final\n\nDonde:\n- 'while i <= 10' establece la condición para continuar el bucle (mientras i sea menor o igual a 10)\n- El bucle se ejecuta repetidamente hasta que la condición se vuelve falsa\n- Dentro del bucle, se actualiza la suma y se incrementa el contador\n- Después del bucle, se muestra el resultado final (55)\n\nA diferencia del bucle for, en el bucle while debemos incrementar manualmente el contador.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">suma = 0;</div>
            <div class="operation-text">i = 1;</div>
            <div class="operation-text">while i <= 10</div>
            <div class="operation-text">    suma = suma + i;</div>
            <div class="operation-text">    i = i + 1;</div>
            <div class="operation-text">end</div>
            <div class="operation-text">disp(suma);</div>
            <div class="operation-text">Resultado: 55</div>
        </div>`
    },
    {
        id: 504,
        title: "Definición de función",
        description: "Escribe una función en Scilab llamada 'cuadrado' que reciba un número como parámetro y devuelva su cuadrado.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Quieres crear una función que calcule el cuadrado de un número</div>
            <div class="operation-text">Código: ?</div>
        </div>`,
        correctAnswer: "function y = cuadrado(x)\n    y = x^2;\nendfunction",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return (normalized.includes("functiony=cuadrado(x)") || normalized.includes("functionresult=cuadrado(x)")) && 
                   (normalized.includes("y=x^2") || normalized.includes("y=x*x") || normalized.includes("result=x^2") || normalized.includes("result=x*x")) && 
                   normalized.includes("endfunction");
        },
        hint: "Usa la estructura 'function resultado = nombre_funcion(parametros) ... endfunction'.",
        explanation: "Para definir una función en Scilab que calcule el cuadrado de un número, se utiliza la siguiente estructura:\n\nfunction y = cuadrado(x)\n    y = x^2;\nendfunction\n\nDonde:\n- 'function y = cuadrado(x)' define una función llamada 'cuadrado' que toma un parámetro 'x' y devuelve un resultado 'y'\n- 'y = x^2;' calcula el cuadrado de x y lo asigna a la variable de salida y\n- 'endfunction' marca el final de la definición de la función\n\nDespués de definir esta función, puedes usarla como cualquier otra función de Scilab:\n\nresultado = cuadrado(5); // Devuelve 25\ndisp(cuadrado(3));      // Muestra 9\n\nTambién puedes guardar la función en un archivo .sci o .sce para reutilizarla en diferentes sesiones.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">function y = cuadrado(x)</div>
            <div class="operation-text">    y = x^2;</div>
            <div class="operation-text">endfunction</div>
            <div class="operation-text">// Ejemplo de uso:</div>
            <div class="operation-text">disp(cuadrado(4));</div>
            <div class="operation-text">Resultado: 16</div>
        </div>`
    },
    {
        id: 505,
        title: "Sentencia select-case",
        description: "Escribe una estructura select-case en Scilab que muestre un mensaje según el día de la semana (1-7).",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Variable: dia (un número del 1 al 7)</div>
            <div class="operation-text">Quieres mostrar el nombre del día correspondiente</div>
            <div class="operation-text">Código: ?</div>
        </div>`,
        correctAnswer: "select dia\ncase 1 then\n    disp('Lunes')\ncase 2 then\n    disp('Martes')\ncase 3 then\n    disp('Miércoles')\ncase 4 then\n    disp('Jueves')\ncase 5 then\n    disp('Viernes')\ncase 6 then\n    disp('Sábado')\ncase 7 then\n    disp('Domingo')\nelse\n    disp('Día inválido')\nend",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized.includes("selectdia") && 
                   normalized.includes("case1then") && 
                   normalized.includes("disp('Lunes')") && 
                   normalized.includes("case7then") && 
                   normalized.includes("disp('Domingo')") && 
                   normalized.includes("else") && 
                   normalized.includes("end");
        },
        hint: "Usa la estructura 'select variable case valor1 then ... case valor2 then ... else ... end'.",
        explanation: "Para crear una estructura select-case en Scilab que muestre un mensaje según el día de la semana, se utiliza la siguiente estructura:\n\nselect dia\ncase 1 then\n    disp('Lunes')\ncase 2 then\n    disp('Martes')\ncase 3 then\n    disp('Miércoles')\ncase 4 then\n    disp('Jueves')\ncase 5 then\n    disp('Viernes')\ncase 6 then\n    disp('Sábado')\ncase 7 then\n    disp('Domingo')\nelse\n    disp('Día inválido')\nend\n\nDonde:\n- 'select dia' indica la variable que se va a evaluar\n- 'case N then' define qué hacer cuando dia es igual a N\n- 'else' define qué hacer si dia no coincide con ninguno de los casos anteriores\n- 'end' marca el final de la estructura select-case\n\nEsta estructura es similar a switch-case en otros lenguajes de programación y es útil para manejar múltiples condiciones de manera más clara que con if-elseif-else.",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">select dia</div>
            <div class="operation-text">case 1 then</div>
            <div class="operation-text">    disp('Lunes')</div>
            <div class="operation-text">case 2 then</div>
            <div class="operation-text">    disp('Martes')</div>
            <div class="operation-text">case 3 then</div>
            <div class="operation-text">    disp('Miércoles')</div>
            <div class="operation-text">case 4 then</div>
            <div class="operation-text">    disp('Jueves')</div>
            <div class="operation-text">case 5 then</div>
            <div class="operation-text">    disp('Viernes')</div>
            <div class="operation-text">case 6 then</div>
            <div class="operation-text">    disp('Sábado')</div>
            <div class="operation-text">case 7 then</div>
            <div class="operation-text">    disp('Domingo')</div>
            <div class="operation-text">else</div>
            <div class="operation-text">    disp('Día inválido')</div>
            <div class="operation-text">end</div>
        </div>`
    },
    // Operaciones con vectores
    {
        id: 1,
        title: "Suma de vectores",
        description: "Calcula la suma de los vectores A = [3, 1, 4] y B = [2, 5, 7]. Escribe tu respuesta como un vector en formato [x, y, z].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = [3, 1, 4]</div>
            <div class="operation-text">B = [2, 5, 7]</div>
            <div class="operation-text">A + B = ?</div>
        </div>`,
        correctAnswer: "[5, 6, 11]",
        validateAnswer: function(userAnswer) {
            // Normalizar la respuesta del usuario
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "[5,6,11]";
        },
        hint: "Para sumar dos vectores, suma los elementos correspondientes.",
        explanation: "La suma de vectores se realiza sumando los elementos correspondientes. Para A = [3, 1, 4] y B = [2, 5, 7], tenemos:\nA + B = [3+2, 1+5, 4+7] = [5, 6, 11]",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A + B = [3, 1, 4] + [2, 5, 7] = [3+2, 1+5, 4+7] = [5, 6, 11]</div>
        </div>`
    },
    {
        id: 2,
        title: "Resta de vectores",
        description: "Calcula la resta de los vectores A = [8, 4, 2] y B = [3, 1, 5]. Escribe tu respuesta como un vector en formato [x, y, z].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = [8, 4, 2]</div>
            <div class="operation-text">B = [3, 1, 5]</div>
            <div class="operation-text">A - B = ?</div>
        </div>`,
        correctAnswer: "[5, 3, -3]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "[5,3,-3]";
        },
        hint: "Para restar dos vectores, resta los elementos correspondientes.",
        explanation: "La resta de vectores se realiza restando los elementos correspondientes. Para A = [8, 4, 2] y B = [3, 1, 5], tenemos:\nA - B = [8-3, 4-1, 2-5] = [5, 3, -3]",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A - B = [8, 4, 2] - [3, 1, 5] = [8-3, 4-1, 2-5] = [5, 3, -3]</div>
        </div>`
    },
    {
        id: 3,
        title: "Producto escalar de vectores",
        description: "Calcula el producto escalar (producto punto) de los vectores A = [2, 3, 1] y B = [4, 1, 5]. Escribe tu respuesta como un número.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = [2, 3, 1]</div>
            <div class="operation-text">B = [4, 1, 5]</div>
            <div class="operation-text">A · B = ?</div>
        </div>`,
        correctAnswer: "16",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "16";
        },
        hint: "El producto escalar se calcula como la suma de los productos de los elementos correspondientes.",
        explanation: "El producto escalar (o producto punto) de dos vectores se calcula como la suma de los productos de los elementos correspondientes. Para A = [2, 3, 1] y B = [4, 1, 5], tenemos:\nA · B = 2×4 + 3×1 + 1×5 = 8 + 3 + 5 = 16",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A · B = [2, 3, 1] · [4, 1, 5] = 2×4 + 3×1 + 1×5 = 8 + 3 + 5 = 16</div>
        </div>`
    },
    {
        id: 4,
        title: "Producto de un escalar por un vector",
        description: "Calcula el producto del escalar k = 3 por el vector V = [2, 5, 1]. Escribe tu respuesta como un vector en formato [x, y, z].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">k = 3</div>
            <div class="operation-text">V = [2, 5, 1]</div>
            <div class="operation-text">k·V = ?</div>
        </div>`,
        correctAnswer: "[6, 15, 3]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "[6,15,3]";
        },
        hint: "Para multiplicar un escalar por un vector, multiplica cada elemento del vector por el escalar.",
        explanation: "El producto de un escalar por un vector se calcula multiplicando cada elemento del vector por el escalar. Para k = 3 y V = [2, 5, 1], tenemos:\nk·V = 3·[2, 5, 1] = [3×2, 3×5, 3×1] = [6, 15, 3]",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">k·V = 3·[2, 5, 1] = [3×2, 3×5, 3×1] = [6, 15, 3]</div>
        </div>`
    },
    {
        id: 5,
        title: "Norma de un vector",
        description: "Calcula la norma (magnitud) del vector V = [3, 4]. Escribe tu respuesta como un número.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">V = [3, 4]</div>
            <div class="operation-text">||V|| = ?</div>
        </div>`,
        correctAnswer: "5",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "5";
        },
        hint: "La norma de un vector se calcula como la raíz cuadrada de la suma de los cuadrados de sus componentes.",
        explanation: "La norma (o magnitud) de un vector se calcula como la raíz cuadrada de la suma de los cuadrados de sus componentes. Para V = [3, 4], tenemos:\n||V|| = √(3² + 4²) = √(9 + 16) = √25 = 5",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">||V|| = √(3² + 4²) = √(9 + 16) = √25 = 5</div>
        </div>`
    },
    
    // Operaciones con matrices
    {
        id: 6,
        title: "Suma de matrices",
        description: "Calcula la suma de las matrices A = [[1, 2], [3, 4]] y B = [[5, 6], [7, 8]]. Escribe tu respuesta como una matriz en formato [[a, b], [c, d]].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 6</div>
                    <div class="matrix-row">7 8</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">A + B = ?</div>
        </div>`,
        correctAnswer: "[[6, 8], [10, 12]]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "[[6,8],[10,12]]";
        },
        hint: "Para sumar dos matrices, suma los elementos correspondientes.",
        explanation: "La suma de matrices se realiza sumando los elementos correspondientes. Para A = [[1, 2], [3, 4]] y B = [[5, 6], [7, 8]], tenemos:\nA + B = [[1+5, 2+6], [3+7, 4+8]] = [[6, 8], [10, 12]]",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A + B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">+</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 6</div>
                    <div class="matrix-row">7 8</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">=</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">6 8</div>
                    <div class="matrix-row">10 12</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 7,
        title: "Resta de matrices",
        description: "Calcula la resta de las matrices A = [[9, 8], [7, 6]] y B = [[2, 4], [1, 3]]. Escribe tu respuesta como una matriz en formato [[a, b], [c, d]].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">9 8</div>
                    <div class="matrix-row">7 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">2 4</div>
                    <div class="matrix-row">1 3</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">A - B = ?</div>
        </div>`,
        correctAnswer: "[[7, 4], [6, 3]]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "[[7,4],[6,3]]";
        },
        hint: "Para restar dos matrices, resta los elementos correspondientes.",
        explanation: "La resta de matrices se realiza restando los elementos correspondientes. Para A = [[9, 8], [7, 6]] y B = [[2, 4], [1, 3]], tenemos:\nA - B = [[9-2, 8-4], [7-1, 6-3]] = [[7, 4], [6, 3]]",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A - B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">9 8</div>
                    <div class="matrix-row">7 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">-</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">2 4</div>
                    <div class="matrix-row">1 3</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">=</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">7 4</div>
                    <div class="matrix-row">6 3</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 8,
        title: "Multiplicación de matrices",
        description: "Calcula el producto de las matrices A = [[2, 3], [1, 4]] y B = [[5, 1], [2, 6]]. Escribe tu respuesta como una matriz en formato [[a, b], [c, d]].",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">2 3</div>
                    <div class="matrix-row">1 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 1</div>
                    <div class="matrix-row">2 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">A × B = ?</div>
        </div>`,
        correctAnswer: "[[16, 20], [13, 25]]",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "[[16,20],[13,25]]";
        },
        hint: "Para multiplicar matrices, el elemento (i,j) del producto es la suma de los productos de los elementos de la fila i de A por los elementos de la columna j de B.",
        explanation: "Para multiplicar matrices A(m×n) y B(n×p), calculamos cada elemento (i,j) del producto como la suma de los productos de los elementos de la fila i de A por los elementos de la columna j de B.\n\nPara A = [[2, 3], [1, 4]] y B = [[5, 1], [2, 6]], tenemos:\nC(1,1) = 2×5 + 3×2 = 10 + 6 = 16\nC(1,2) = 2×1 + 3×6 = 2 + 18 = 20\nC(2,1) = 1×5 + 4×2 = 5 + 8 = 13\nC(2,2) = 1×1 + 4×6 = 1 + 24 = 25\n\nPor lo tanto, A×B = [[16, 20], [13, 25]]",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">A × B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">2×5+3×2 2×1+3×6</div>
                    <div class="matrix-row">1×5+4×2 1×1+4×6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">=</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">16 20</div>
                    <div class="matrix-row">13 25</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        id: 9,
        title: "Determinante de una matriz 2×2",
        description: "Calcula el determinante de la matriz A = [[4, 7], [2, 6]]. Escribe tu respuesta como un número.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">4 7</div>
                    <div class="matrix-row">2 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">det(A) = ?</div>
        </div>`,
        correctAnswer: "10",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "10";
        },
        hint: "El determinante de una matriz 2×2 [[a, b], [c, d]] se calcula como a×d - b×c.",
        explanation: "El determinante de una matriz 2×2 [[a, b], [c, d]] se calcula como a×d - b×c.\n\nPara A = [[4, 7], [2, 6]], tenemos:\ndet(A) = 4×6 - 7×2 = 24 - 14 = 10",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">det(A) = 4×6 - 7×2 = 24 - 14 = 10</div>
        </div>`
    },
    {
        id: 10,
        title: "Traza de una matriz",
        description: "Calcula la traza (suma de los elementos de la diagonal principal) de la matriz A = [[3, 1, 4], [2, 5, 7], [8, 9, 6]]. Escribe tu respuesta como un número.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">3 1 4</div>
                    <div class="matrix-row">2 5 7</div>
                    <div class="matrix-row">8 9 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">tr(A) = ?</div>
        </div>`,
        correctAnswer: "14",
        validateAnswer: function(userAnswer) {
            const normalized = userAnswer.replace(/\s+/g, '');
            return normalized === "14";
        },
        hint: "La traza de una matriz es la suma de los elementos de su diagonal principal.",
        explanation: "La traza de una matriz es la suma de los elementos de su diagonal principal.\n\nPara A = [[3, 1, 4], [2, 5, 7], [8, 9, 6]], los elementos de la diagonal principal son 3, 5 y 6.\n\nPor lo tanto, tr(A) = 3 + 5 + 6 = 14",
        solutionVisual: `<div class="matrix-operation">
            <div class="operation-text">tr(A) = 3 + 5 + 6 = 14</div>
        </div>`
    }
];

// Función para mezclar aleatoriamente un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    const newArray = [...array]; // Crear una copia del array original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Función para seleccionar un número específico de ejercicios aleatorios
function getRandomExercises(count) {
    if (count > allExercises.length) {
        count = allExercises.length;
    }
    
    const shuffledExercises = shuffleArray(allExercises);
    return shuffledExercises.slice(0, count);
}
