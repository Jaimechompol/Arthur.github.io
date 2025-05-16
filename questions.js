// Banco de preguntas basadas en el contenido sobre Scilab
const allQuestions = [
    // Preguntas sobre teoría del error
    {
        question: "¿Qué es el error absoluto en métodos numéricos?",
        options: [
            "La diferencia entre el valor aproximado y el valor exacto",
            "El valor absoluto de la diferencia entre el valor exacto y el valor aproximado",
            "La razón entre el error y el valor exacto",
            "La diferencia porcentual entre el valor aproximado y el valor exacto"
        ],
        correctIndex: 1,
        explanation: "El error absoluto se define como el valor absoluto de la diferencia entre el valor exacto y el valor aproximado. Se expresa matemáticamente como |Valor exacto - Valor aproximado|. Es una medida directa de la magnitud del error sin considerar el tamaño relativo del valor exacto.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Error absoluto = |Valor exacto - Valor aproximado|</div>
            <div class="operation-text">Ejemplo: Si π ≈ 3.14, entonces:</div>
            <div class="operation-text">Error absoluto = |3.14159... - 3.14| = 0.00159...</div>
        </div>`
    },
    {
        question: "¿Qué es el error relativo en métodos numéricos?",
        options: [
            "La diferencia entre el valor aproximado y el valor exacto",
            "El valor absoluto de la diferencia entre el valor exacto y el valor aproximado",
            "El error absoluto dividido por el valor absoluto del valor exacto",
            "La suma del error absoluto y el valor exacto"
        ],
        correctIndex: 2,
        explanation: "El error relativo se define como el error absoluto dividido por el valor absoluto del valor exacto. Se expresa matemáticamente como |Valor exacto - Valor aproximado| / |Valor exacto|. A menudo se expresa como porcentaje multiplicando por 100%. El error relativo proporciona una medida de la precisión en relación con la magnitud del valor exacto.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Error relativo = |Valor exacto - Valor aproximado| / |Valor exacto|</div>
            <div class="operation-text">Ejemplo: Si π ≈ 3.14, entonces:</div>
            <div class="operation-text">Error relativo = |3.14159... - 3.14| / |3.14159...| ≈ 0.00051 ≈ 0.051%</div>
        </div>`
    },
    {
        question: "¿Qué son las cifras significativas en un número?",
        options: [
            "Todos los dígitos de un número",
            "Los dígitos que no son ceros",
            "Los dígitos que no son ceros a la izquierda",
            "Los dígitos después del punto decimal"
        ],
        correctIndex: 2,
        explanation: "Las cifras significativas son todos los dígitos de un número que no son ceros a la izquierda. Incluyen todos los dígitos que se conocen con certeza más un último dígito que tiene alguna incertidumbre. Los ceros a la derecha después del punto decimal también son significativos si representan precisión en la medición.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Ejemplos:</div>
            <div class="operation-text">123.45 tiene 5 cifras significativas</div>
            <div class="operation-text">0.00123 tiene 3 cifras significativas (1, 2, 3)</div>
            <div class="operation-text">1.2300 tiene 5 cifras significativas (los ceros finales son significativos)</div>
        </div>`
    },
    {
        question: "¿Qué es el error de redondeo en métodos numéricos?",
        options: [
            "El error debido a la representación finita de números en una computadora",
            "El error debido a la simplificación de un modelo matemático",
            "El error debido a mediciones inexactas",
            "El error debido a la convergencia de un método iterativo"
        ],
        correctIndex: 0,
        explanation: "El error de redondeo es el error que surge debido a la representación finita de números en una computadora. Como las computadoras pueden almacenar solo un número finito de dígitos, los números irracionales o números con muchos decimales deben truncarse o redondearse, lo que introduce un error. Este tipo de error es inherente a los cálculos computacionales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Ejemplo: En una computadora con 3 decimales</div>
            <div class="operation-text">π ≈ 3.142 (redondeado)</div>
            <div class="operation-text">Error de redondeo = 3.14159... - 3.142 = -0.00041...</div>
        </div>`
    },
    {
        question: "¿Qué es el error de truncamiento en métodos numéricos?",
        options: [
            "El error debido a la representación finita de números en una computadora",
            "El error debido a la simplificación de un modelo matemático",
            "El error debido a aproximar un proceso infinito con un número finito de pasos",
            "El error debido a mediciones inexactas"
        ],
        correctIndex: 2,
        explanation: "El error de truncamiento es el error que surge cuando aproximamos un proceso infinito con un número finito de pasos. Por ejemplo, cuando aproximamos una serie infinita con un número finito de términos, o cuando aproximamos una derivada con una diferencia finita. Este tipo de error está relacionado con la discretización de procesos continuos.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Ejemplo: Aproximación de e^x por serie de Taylor</div>
            <div class="operation-text">e^x = 1 + x + x²/2! + x³/3! + ...</div>
            <div class="operation-text">Si truncamos después del término x²/2!:</div>
            <div class="operation-text">e^x ≈ 1 + x + x²/2</div>
            <div class="operation-text">El error de truncamiento incluye todos los términos omitidos</div>
        </div>`
    },
    {
        question: "En la propagación de errores, ¿cómo se comporta el error absoluto en la suma o resta?",
        options: [
            "Se multiplican los errores absolutos",
            "Se suman los errores absolutos",
            "Se toma el máximo de los errores absolutos",
            "Se toma el promedio de los errores absolutos"
        ],
        correctIndex: 1,
        explanation: "En la propagación de errores para la suma o resta, los errores absolutos se suman. Si tenemos a ± Δa y b ± Δb, entonces el error absoluto en a + b o a - b es Δa + Δb. Esto representa el peor caso posible, donde los errores se acumulan en la misma dirección.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si a = 10 ± 0.1 y b = 5 ± 0.2</div>
            <div class="operation-text">Entonces a + b = 15 ± 0.3</div>
            <div class="operation-text">Y a - b = 5 ± 0.3</div>
        </div>`
    },
    {
        question: "En la propagación de errores, ¿cómo se comporta el error relativo en el producto o cociente?",
        options: [
            "Se suman los errores relativos",
            "Se multiplican los errores relativos",
            "Se toma el máximo de los errores relativos",
            "Se toma el promedio de los errores relativos"
        ],
        correctIndex: 0,
        explanation: "En la propagación de errores para el producto o cociente, los errores relativos aproximadamente se suman. Si tenemos a con un error relativo de εa y b con un error relativo de εb, entonces el error relativo en a×b o a/b es aproximadamente εa + εb. Esta es una aproximación de primer orden válida para errores pequeños.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si a = 10 ± 0.5 (error relativo: 5%)</div>
            <div class="operation-text">y b = 5 ± 0.2 (error relativo: 4%)</div>
            <div class="operation-text">Entonces a×b = 50 ± 4.5 (error relativo: 9%)</div>
        </div>`
    },
    {
        question: "¿Qué es el número de condición de un problema?",
        options: [
            "La cantidad de operaciones necesarias para resolver el problema",
            "Un indicador de cuán sensible es la solución a pequeños cambios en los datos de entrada",
            "El número de iteraciones requeridas para la convergencia",
            "La precisión máxima alcanzable en la solución"
        ],
        correctIndex: 1,
        explanation: "El número de condición es un indicador de cuán sensible es la solución de un problema a pequeños cambios en los datos de entrada. Un problema con un número de condición alto se considera 'mal condicionado', lo que significa que pequeños errores en los datos de entrada pueden causar grandes errores en la solución. Para una función f(x), el número de condición en un punto x se define como |x·f'(x)/f(x)|.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Para una matriz A, el número de condición es:</div>
            <div class="operation-text">cond(A) = ||A|| · ||A^(-1)||</div>
            <div class="operation-text">Un número de condición cercano a 1 indica un problema bien condicionado</div>
            <div class="operation-text">Un número de condición grande indica un problema mal condicionado</div>
        </div>`
    },
    {
        question: "¿Qué es la estabilidad de un algoritmo numérico?",
        options: [
            "La capacidad del algoritmo para converger a la solución correcta",
            "La velocidad a la que el algoritmo encuentra la solución",
            "La resistencia del algoritmo a errores de redondeo y truncamiento",
            "La eficiencia del algoritmo en términos de uso de memoria"
        ],
        correctIndex: 2,
        explanation: "La estabilidad de un algoritmo numérico se refiere a su resistencia a los errores de redondeo y truncamiento. Un algoritmo estable no amplifica significativamente los errores de entrada o los errores introducidos durante los cálculos. La estabilidad es una propiedad crucial en los métodos numéricos, ya que determina si un algoritmo puede producir resultados confiables en presencia de errores inevitables.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Un algoritmo estable:</div>
            <div class="operation-text">Si el error de entrada es ε, el error de salida es ≈ C·ε</div>
            <div class="operation-text">donde C es una constante moderada</div>
            <div class="operation-text">Un algoritmo inestable:</div>
            <div class="operation-text">Pequeños errores de entrada pueden causar grandes errores de salida</div>
        </div>`
    },
    {
        question: "¿Qué método numérico tiene un error de truncamiento de orden O(h²)?",
        options: [
            "Método de Euler para EDOs",
            "Diferencia hacia adelante para derivadas",
            "Regla del trapecio para integración",
            "Método de bisección para encontrar raíces"
        ],
        correctIndex: 2,
        explanation: "La regla del trapecio para integración numérica tiene un error de truncamiento de orden O(h²), donde h es el tamaño del paso. Esto significa que si reducimos el tamaño del paso a la mitad, el error se reduce aproximadamente por un factor de 4. Este orden de convergencia es mejor que el del método de Euler o la diferencia hacia adelante (ambos O(h)), pero peor que métodos de orden superior como Simpson (O(h⁴)).",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Regla del trapecio:</div>
            <div class="operation-text">∫[a,b] f(x)dx ≈ (b-a)/2 · [f(a) + f(b)]</div>
            <div class="operation-text">Error = O(h²) = O((b-a)²)</div>
        </div>`
    },
    {
        question: "¿Cómo se crea un vector columna en Scilab?",
        options: [
            "x = [-2, -1, 0, 1, 2]",
            "x = [-2; -1; 0; 1; 2]",
            "x = [-2 -1 0 1 2]",
            "x = column([-2, -1, 0, 1, 2])"
        ],
        correctIndex: 1,
        explanation: "En Scilab, los vectores columna se crean separando los elementos con punto y coma (;). La sintaxis x = [-2; -1; 0; 1; 2] crea un vector columna de 5 elementos. Si usas comas (,) crearás un vector fila, y si usas espacios crearás también un vector fila.",
        visual: `<div class="matrix-visual">
            <div class="matrix-bracket">[</div>
            <div class="matrix-content">
                <div class="matrix-row">-2</div>
                <div class="matrix-row">-1</div>
                <div class="matrix-row">0</div>
                <div class="matrix-row">1</div>
                <div class="matrix-row">2</div>
            </div>
            <div class="matrix-bracket">]</div>
        </div>`
    },
    {
        question: "¿Cómo se transpone un vector o matriz en Scilab?",
        options: [
            "transpose(x)",
            "x'",
            "trans(x)",
            "x^T"
        ],
        correctIndex: 1,
        explanation: "La transposición en Scilab se realiza con el operador apóstrofo ('). Este operador convierte filas en columnas y viceversa. Por ejemplo, si x es un vector columna, x' lo convierte en un vector fila.",
        visual: `<div class="matrix-operation">
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">a</div>
                    <div class="matrix-row">b</div>
                    <div class="matrix-row">c</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-symbol">'</div>
            <div class="equals-symbol">=</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">a b c</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Qué comando crea una matriz identidad de 3x3 en Scilab?",
        options: [
            "identity(3,3)",
            "eye(3,3)",
            "id(3)",
            "ones(3,3)"
        ],
        correctIndex: 1,
        explanation: "La función 'eye(n,m)' crea una matriz identidad de tamaño n×m. Para una matriz identidad cuadrada, puedes usar 'eye(n)'. Una matriz identidad tiene unos en la diagonal principal y ceros en el resto de posiciones.",
        visual: `<div class="matrix-visual">
            <div class="matrix-bracket">[</div>
            <div class="matrix-content">
                <div class="matrix-row">1 0 0</div>
                <div class="matrix-row">0 1 0</div>
                <div class="matrix-row">0 0 1</div>
            </div>
            <div class="matrix-bracket">]</div>
        </div>`
    },
    {
        question: "¿Qué comando crea una matriz de unos de 2x3 en Scilab?",
        options: [
            "ones(2,3)",
            "unit(2,3)",
            "matrix(1,2,3)",
            "create(1,2,3)"
        ],
        correctIndex: 0,
        explanation: "La función 'ones(n,m)' crea una matriz de tamaño n×m llena de unos. En este caso, ones(2,3) crea una matriz de 2 filas y 3 columnas donde todos los elementos son 1.",
        visual: `<div class="matrix-visual">
            <div class="matrix-bracket">[</div>
            <div class="matrix-content">
                <div class="matrix-row">1 1 1</div>
                <div class="matrix-row">1 1 1</div>
            </div>
            <div class="matrix-bracket">]</div>
        </div>`
    },
    {
        question: "¿Qué comando crea una matriz de ceros de 3x2 en Scilab?",
        options: [
            "null(3,2)",
            "zero(3,2)",
            "zeros(3,2)",
            "empty(3,2)"
        ],
        correctIndex: 2,
        explanation: "La función 'zeros(n,m)' crea una matriz de tamaño n×m llena de ceros. En este caso, zeros(3,2) crea una matriz de 3 filas y 2 columnas donde todos los elementos son 0.",
        visual: `<div class="matrix-visual">
            <div class="matrix-bracket">[</div>
            <div class="matrix-content">
                <div class="matrix-row">0 0</div>
                <div class="matrix-row">0 0</div>
                <div class="matrix-row">0 0</div>
            </div>
            <div class="matrix-bracket">]</div>
        </div>`
    },
    {
        question: "¿Cómo se calcula el determinante de una matriz A en Scilab?",
        options: [
            "determinant(A)",
            "det(A)",
            "A.det",
            "determ(A)"
        ],
        correctIndex: 1,
        explanation: "La función 'det(A)' calcula el determinante de una matriz cuadrada A. El determinante es un valor escalar que se puede calcular a partir de los elementos de una matriz cuadrada y tiene muchas aplicaciones en álgebra lineal.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Para la matriz A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">4 7</div>
                    <div class="matrix-row">2 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">, det(A) = 4×6 - 7×2 = 24 - 14 = 10</div>
        </div>`
    },
    {
        question: "¿Cómo se calcula la inversa de una matriz A en Scilab?",
        options: [
            "inverse(A)",
            "A^-1",
            "inv(A)",
            "A.inverse"
        ],
        correctIndex: 2,
        explanation: "La función 'inv(A)' calcula la inversa de una matriz cuadrada A. La matriz inversa A⁻¹ tiene la propiedad de que A×A⁻¹ = A⁻¹×A = I (la matriz identidad). Solo las matrices cuadradas con determinante no nulo tienen inversa.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">, entonces inv(A) = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">-2 1</div>
                    <div class="matrix-row">1.5 -0.5</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se resuelve un sistema de ecuaciones A*x=b en Scilab?",
        options: [
            "solve(A,b)",
            "A\\b",
            "x = equation(A,b)",
            "x = A^-1*b"
        ],
        correctIndex: 1,
        explanation: "En Scilab, el operador '\\' se utiliza para resolver sistemas de ecuaciones lineales. La expresión A\\b resuelve el sistema A*x=b para x. Este método es más eficiente y numéricamente estable que calcular explícitamente la inversa de A.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Para resolver el sistema:</div>
            <div class="equation-system">
                <div>2x + 3y = 8</div>
                <div>4x + 5y = 12</div>
            </div>
            <div class="operation-text">Expresado como A*x=b:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">2 3</div>
                    <div class="matrix-row">4 5</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">*</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">x</div>
                    <div class="matrix-row">y</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">=</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">8</div>
                    <div class="matrix-row">12</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Solución: x = A\\b</div>
        </div>`
    },
    {
        question: "¿Qué comando se usa para graficar una función en Scilab?",
        options: [
            "graph(x, y)",
            "draw(x, y)",
            "plot(x, y)",
            "figure(x, y)"
        ],
        correctIndex: 2,
        explanation: "La función 'plot(x, y)' se utiliza para crear gráficos en Scilab. Toma dos vectores: x contiene los valores del eje horizontal y y contiene los valores correspondientes del eje vertical. Por ejemplo, plot(1:10, sin(1:10)) grafica la función seno para los valores de 1 a 10.",
        visual: `<div class="plot-visual">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Normal_Distribution_PDF.svg/1200px-Normal_Distribution_PDF.svg.png" alt="Ejemplo de gráfico en Scilab" class="plot-image">
            <div class="plot-caption">Ejemplo de gráfico creado con plot(x, y)</div>
        </div>`
    },
    {
        question: "¿Cómo se grafican múltiples funciones en Scilab?",
        options: [
            "multiplot(x, y1, x, y2)",
            "plot(x, y1, x, y2)",
            "plot(x, [y1, y2])",
            "graph(x, y1, y2)"
        ],
        correctIndex: 1,
        explanation: "Para graficar múltiples funciones en la misma figura en Scilab, se utiliza 'plot(x, y1, x, y2, ...)'. Esto permite comparar visualmente diferentes funciones. Cada par (x, y) representa una función diferente y Scilab asignará automáticamente colores distintos a cada una.",
        visual: `<div class="plot-visual">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sine_cosine_one_period.svg/1200px-Sine_cosine_one_period.svg.png" alt="Múltiples funciones en un gráfico" class="plot-image">
            <div class="plot-caption">Ejemplo de múltiples funciones graficadas con plot(x, y1, x, y2)</div>
        </div>`
    },
    {
        question: "¿Cómo se muestra una gráfica en una nueva ventana en Scilab?",
        options: [
            "new(); plot(x, y)",
            "window(); plot(x, y)",
            "scf(); plot(x, y)",
            "figure(); plot(x, y)"
        ],
        correctIndex: 2,
        explanation: "La función 'scf()' (Set Current Figure) crea una nueva ventana de figura en Scilab. Cuando se combina con plot(x, y), el gráfico se muestra en esta nueva ventana en lugar de sobrescribir un gráfico existente. Esto es útil cuando quieres comparar múltiples gráficos en ventanas separadas.",
        visual: `<div class="code-example">
            <pre>x = linspace(0, 2*%pi, 100);
y = sin(x);
scf(); // Crea una nueva ventana
plot(x, y, 'r'); // Grafica en rojo
xtitle('Gráfico del seno');</pre>
        </div>`
    },
    {
        question: "¿Cómo se crean subplots en Scilab?",
        options: [
            "subplot(2,1,1); plot(x,y1); subplot(2,1,2); plot(x,y2)",
            "subgraph(2,1,1); plot(x,y1); subgraph(2,1,2); plot(x,y2)",
            "divide(2,1,1); plot(x,y1); divide(2,1,2); plot(x,y2)",
            "section(2,1,1); plot(x,y1); section(2,1,2); plot(x,y2)"
        ],
        correctIndex: 0,
        explanation: "La función 'subplot(m,n,p)' divide la ventana gráfica actual en una cuadrícula de m×n y selecciona el panel p para dibujar. En el ejemplo, subplot(2,1,1) selecciona la primera mitad superior de una ventana dividida en 2 filas y 1 columna, y subplot(2,1,2) selecciona la mitad inferior.",
        visual: `<div class="plot-visual">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Subplot_grid_example.svg/1200px-Subplot_grid_example.svg.png" alt="Ejemplo de subplots" class="plot-image">
            <div class="plot-caption">Ejemplo de subplots creados con subplot(m,n,p)</div>
        </div>`
    },
    {
        question: "¿Cómo se calcula la media de un vector x en Scilab?",
        options: [
            "average(x)",
            "mean(x)",
            "avg(x)",
            "med(x)"
        ],
        correctIndex: 1,
        explanation: "La función 'mean(x)' calcula la media aritmética de los elementos de un vector o matriz x. La media es la suma de todos los elementos dividida por el número total de elementos. Para un vector, es el valor promedio.",
        visual: `<div class="code-example">
            <pre>x = [10, 20, 30, 40, 50];
m = mean(x)  // Resultado: m = 30</pre>
        </div>`
    },
    {
        question: "¿Cómo se calcula la suma de los elementos de un vector x en Scilab?",
        options: [
            "sum(x)",
            "total(x)",
            "add(x)",
            "summation(x)"
        ],
        correctIndex: 0,
        explanation: "La función 'sum(x)' calcula la suma de todos los elementos de un vector o matriz x. Para matrices, sum(A) devuelve un vector fila con la suma de cada columna de A. Para sumar todos los elementos de una matriz, puedes usar sum(sum(A)).",
        visual: `<div class="code-example">
            <pre>x = [1, 2, 3, 4, 5];
s = sum(x)  // Resultado: s = 15

A = [1, 2; 3, 4];
colsum = sum(A)  // Resultado: colsum = [4, 6]
total = sum(sum(A))  // Resultado: total = 10</pre>
        </div>`
    },
    {
        question: "¿Cómo se calcula la desviación estándar de un vector x en Scilab?",
        options: [
            "std(x)",
            "stdev(x)",
            "deviation(x)",
            "stddev(x)"
        ],
        correctIndex: 1,
        explanation: "La función 'stdev(x)' calcula la desviación estándar de los elementos de un vector o matriz x. La desviación estándar es una medida de la dispersión de los valores respecto a la media. Un valor bajo indica que los datos tienden a estar cerca de la media.",
        visual: `<div class="formula-visual">
            <div class="formula">\sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n}}</div>
            <div class="formula-caption">Fórmula de la desviación estándar donde \mu es la media y n es el número de elementos</div>
        </div>`
    },
    {
        question: "¿Cómo se intercambian las filas 1 y 3 de una matriz A en Scilab?",
        options: [
            "swap(A, 1, 3)",
            "A([1,3],:) = A([3,1],:)",
            "temp = A(1,:); A(1,:) = A(3,:); A(3,:) = temp",
            "A = exchange(A, 1, 3)"
        ],
        correctIndex: 2,
        explanation: "Para intercambiar filas en Scilab, se puede usar una variable temporal. La expresión A(1,:) se refiere a toda la primera fila de A, y A(3,:) a toda la tercera fila. El método con variable temporal es claro y funciona en todas las versiones de Scilab. La opción B también es válida en versiones recientes.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Después de intercambiar las filas 1 y 3:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">7 8 9</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">1 2 3</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se agrega una columna a un vector en Scilab?",
        options: [
            "v = [1; 2; 3]; nueva_col = [4; 5; 6]; M = [v nueva_col]",
            "v = [1; 2; 3]; nueva_col = [4; 5; 6]; M = append(v, nueva_col)",
            "v = [1; 2; 3]; nueva_col = [4; 5; 6]; M = concat(v, nueva_col)",
            "v = [1; 2; 3]; nueva_col = [4; 5; 6]; M = v.add(nueva_col)"
        ],
        correctIndex: 0,
        explanation: "En Scilab, para concatenar horizontalmente (agregar columnas), simplemente se colocan las matrices o vectores uno al lado del otro dentro de corchetes, separados por espacios. Así, [v nueva_col] crea una nueva matriz con v como primera columna y nueva_col como segunda columna.",
        visual: `<div class="matrix-operation">
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1</div>
                    <div class="matrix-row">2</div>
                    <div class="matrix-row">3</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">y</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">4</div>
                    <div class="matrix-row">5</div>
                    <div class="matrix-row">6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">se combinan como</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 4</div>
                    <div class="matrix-row">2 5</div>
                    <div class="matrix-row">3 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se agrega una columna de unos a un vector v en Scilab?",
        options: [
            "v = [10; 20; 30]; M = [v unit(3,1)]",
            "v = [10; 20; 30]; M = [v ones(3,1)]",
            "v = [10; 20; 30]; M = [v, ones(3,1)]",
            "v = [10; 20; 30]; M = append(v, ones(3,1))"
        ],
        correctIndex: 1,
        explanation: "Para agregar una columna de unos a un vector, se utiliza la función ones(n,1) para crear un vector columna de n unos, y luego se concatena horizontalmente con el vector original usando [v ones(3,1)]. La coma entre v y ones(3,1) es opcional en Scilab.",
        visual: `<div class="matrix-operation">
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">10</div>
                    <div class="matrix-row">20</div>
                    <div class="matrix-row">30</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">y</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1</div>
                    <div class="matrix-row">1</div>
                    <div class="matrix-row">1</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">se combinan como</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">10 1</div>
                    <div class="matrix-row">20 1</div>
                    <div class="matrix-row">30 1</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se accede a un elemento específico de una matriz en Scilab?",
        options: [
            "A[2,3]",
            "A(2,3)",
            "A{2,3}",
            "A.get(2,3)"
        ],
        correctIndex: 1,
        explanation: "En Scilab, se utilizan paréntesis para acceder a elementos específicos de una matriz. La expresión A(2,3) accede al elemento en la fila 2, columna 3 de la matriz A. Scilab utiliza índices basados en 1, lo que significa que el primer elemento es (1,1), no (0,0).",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Para la matriz A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">10 20 30</div>
                    <div class="matrix-row">40 50 60</div>
                    <div class="matrix-row">70 80 90</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">A(2,3) = 60</div>
        </div>`
    },
    {
        question: "¿Cómo se extrae una submatriz de una matriz A en Scilab?",
        options: [
            "A.submatrix(2:4, 3:5)",
            "submatrix(A, 2:4, 3:5)",
            "A(2:4, 3:5)",
            "extract(A, 2:4, 3:5)"
        ],
        correctIndex: 2,
        explanation: "Para extraer una submatriz en Scilab, se utilizan los dos puntos (:) para definir rangos de filas y columnas. La expresión A(2:4, 3:5) extrae una submatriz que incluye las filas 2 a 4 y las columnas 3 a 5 de la matriz A.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A es una matriz 5x6, entonces A(2:4, 3:5) extrae:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row highlighted">a11 a12 <span class="highlight">a13 a14 a15</span> a16</div>
                    <div class="matrix-row highlight-row">a21 a22 <span class="highlight">a23 a24 a25</span> a26</div>
                    <div class="matrix-row highlight-row">a31 a32 <span class="highlight">a33 a34 a35</span> a36</div>
                    <div class="matrix-row highlight-row">a41 a42 <span class="highlight">a43 a44 a45</span> a46</div>
                    <div class="matrix-row">a51 a52 a53 a54 a55 a56</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">Resultado:</div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">a23 a24 a25</div>
                    <div class="matrix-row">a33 a34 a35</div>
                    <div class="matrix-row">a43 a44 a45</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se calcula el producto de matrices A y B en Scilab?",
        options: [
            "A * B",
            "product(A, B)",
            "multiply(A, B)",
            "A.multiply(B)"
        ],
        correctIndex: 0,
        explanation: "En Scilab, el operador * se utiliza para calcular el producto matricial. Para que A * B sea válido, el número de columnas de A debe ser igual al número de filas de B. Si A es de tamaño m×n y B es de tamaño n×p, entonces A*B será de tamaño m×p.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">y B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 6</div>
                    <div class="matrix-row">7 8</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">entonces A*B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1×5+2×7 1×6+2×8</div>
                    <div class="matrix-row">3×5+4×7 3×6+4×8</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">= </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">19 22</div>
                    <div class="matrix-row">43 50</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se calcula el producto elemento por elemento de matrices A y B en Scilab?",
        options: [
            "A .* B",
            "elementwise(A, B)",
            "A * B",
            "dotproduct(A, B)"
        ],
        correctIndex: 0,
        explanation: "En Scilab, el operador .* realiza la multiplicación elemento por elemento entre matrices. Para que A .* B sea válido, A y B deben tener las mismas dimensiones. Cada elemento del resultado es el producto de los elementos correspondientes en A y B.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">y B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 6</div>
                    <div class="matrix-row">7 8</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">entonces A.*B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1×5 2×6</div>
                    <div class="matrix-row">3×7 4×8</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">= </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 12</div>
                    <div class="matrix-row">21 32</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se calcula la potencia de una matriz A elevada a 3 en Scilab?",
        options: [
            "A^3",
            "power(A, 3)",
            "A.pow(3)",
            "A**3"
        ],
        correctIndex: 0,
        explanation: "En Scilab, el operador ^ se utiliza para calcular la potencia de una matriz. A^3 es equivalente a A*A*A, es decir, el producto matricial de A consigo misma tres veces. Para que esto sea válido, A debe ser una matriz cuadrada.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">entonces A^3 = A*A*A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">37 54</div>
                    <div class="matrix-row">81 118</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se calcula la potencia elemento por elemento de una matriz A elevada a 2 en Scilab?",
        options: [
            "A^2",
            "A.^2",
            "power(A, 2)",
            "A**2"
        ],
        correctIndex: 1,
        explanation: "En Scilab, el operador .^ realiza la potenciación elemento por elemento. A.^2 eleva cada elemento de la matriz A al cuadrado individualmente, sin realizar operaciones matriciales.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">entonces A.^2 = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1^2 2^2</div>
                    <div class="matrix-row">3^2 4^2</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">= </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 4</div>
                    <div class="matrix-row">9 16</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se obtienen las dimensiones de una matriz A en Scilab?",
        options: [
            "dim(A)",
            "A.size",
            "size(A)",
            "dimensions(A)"
        ],
        correctIndex: 2,
        explanation: "La función 'size(A)' devuelve un vector con las dimensiones de la matriz A. El primer elemento es el número de filas y el segundo es el número de columnas. También puedes usar size(A, 1) para obtener solo el número de filas o size(A, 2) para el número de columnas.",
        visual: `<div class="code-example">
            <pre>A = [1, 2, 3; 4, 5, 6];
s = size(A)  // Resultado: s = [2, 3]
filas = size(A, 1)  // Resultado: filas = 2
columnas = size(A, 2)  // Resultado: columnas = 3</pre>
        </div>`
    },
    {
        question: "¿Cómo se crea un vector con valores equidistantes en Scilab?",
        options: [
            "range(1, 10, 0.5)",
            "1:0.5:10",
            "sequence(1, 10, 0.5)",
            "linspace(1, 10, 19)"
        ],
        correctIndex: 1,
        explanation: "En Scilab, el operador de dos puntos (:) se utiliza para crear secuencias. La sintaxis inicio:incremento:fin crea un vector con valores que comienzan en 'inicio', aumentan en 'incremento' y terminan en o antes de 'fin'. Por ejemplo, 1:0.5:10 crea un vector con valores [1, 1.5, 2, 2.5, ..., 9.5, 10].",
        visual: `<div class="code-example">
            <pre>x = 1:0.5:3
// Resultado: x = [1.0, 1.5, 2.0, 2.5, 3.0]

y = 10:-2:0
// Resultado: y = [10, 8, 6, 4, 2, 0]</pre>
        </div>`
    },
    {
        question: "¿Cómo se concatenan horizontalmente dos matrices A y B en Scilab?",
        options: [
            "[A B]",
            "horzcat(A, B)",
            "A + B",
            "concat(A, B, 'horizontal')"
        ],
        correctIndex: 0,
        explanation: "Para concatenar horizontalmente (unir columnas) dos matrices en Scilab, simplemente se colocan una al lado de la otra dentro de corchetes, separadas por un espacio. Para que [A B] sea válido, A y B deben tener el mismo número de filas.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">y B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5</div>
                    <div class="matrix-row">6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">entonces [A B] = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 5</div>
                    <div class="matrix-row">3 4 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se concatenan verticalmente dos matrices A y B en Scilab?",
        options: [
            "[A; B]",
            "vertcat(A, B)",
            "stack(A, B)",
            "concat(A, B, 'vertical')"
        ],
        correctIndex: 0,
        explanation: "Para concatenar verticalmente (unir filas) dos matrices en Scilab, se colocan una encima de la otra dentro de corchetes, separadas por punto y coma (;). Para que [A; B] sea válido, A y B deben tener el mismo número de columnas.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Si A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">y B = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">5 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">entonces [A; B] = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2</div>
                    <div class="matrix-row">3 4</div>
                    <div class="matrix-row">5 6</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
        </div>`
    },
    {
        question: "¿Cómo se calcula el rango de una matriz A en Scilab?",
        options: [
            "rank(A)",
            "rango(A)",
            "A.rank",
            "matrix_rank(A)"
        ],
        correctIndex: 0,
        explanation: "La función 'rank(A)' calcula el rango de una matriz A, que es el número máximo de filas o columnas linealmente independientes. El rango es un concepto importante en álgebra lineal y tiene aplicaciones en la resolución de sistemas de ecuaciones.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Para la matriz A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">1 2 3</div>
                    <div class="matrix-row">4 5 6</div>
                    <div class="matrix-row">7 8 9</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">rank(A) = 2, porque la tercera fila es una combinación lineal de las otras dos.</div>
        </div>`
    },
    {
        question: "¿Cómo se obtienen los valores propios de una matriz A en Scilab?",
        options: [
            "eigenvalues(A)",
            "eig(A)",
            "values(A)",
            "A.eigenvalues"
        ],
        correctIndex: 1,
        explanation: "La función 'eig(A)' calcula los valores propios (eigenvalores) de una matriz cuadrada A. Los valores propios son escalares que, cuando se multiplican por un vector propio correspondiente, dan como resultado el mismo vector escalado. Son fundamentales en muchas aplicaciones de álgebra lineal.",
        visual: `<div class="matrix-operation">
            <div class="operation-text">Para la matriz A = </div>
            <div class="matrix-visual">
                <div class="matrix-bracket">[</div>
                <div class="matrix-content">
                    <div class="matrix-row">3 1</div>
                    <div class="matrix-row">1 3</div>
                </div>
                <div class="matrix-bracket">]</div>
            </div>
            <div class="operation-text">eig(A) = [4; 2], los valores propios son 4 y 2.</div>
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

// Función para seleccionar un número específico de preguntas aleatorias
function getRandomQuestions(count) {
    if (count > allQuestions.length) {
        count = allQuestions.length;
    }
    
    const shuffledQuestions = shuffleArray(allQuestions);
    return shuffledQuestions.slice(0, count);
}
