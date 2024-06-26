function Soma ()
{
    m=x+y
    return m
}
function Subtração ()
{
    m=x-y
    return m
}
function Multiplicação ()
{
    m=x*y
    return m
}
function Divisão ()
{
    m=x/y
    return m
}

x=parseInt(prompt("Insira um valor"))
y=parseInt(prompt("Insira um valor"))
op=prompt("Digite a Operação")
        switch(op)
        {
            case '+':
                Soma(x,y)
                document.write("Valor do Resultado " + m)
            break;
            case '-':
                Subtração(x,y)
                document.write("Valor do Resultado " + m)
            break;
            case '*':
                Multiplicação(x,y)
                document.write("Valor do Resultado " + m)
            break;
            case '/':
                Divisão(x,y)
                document.write("Valor do Resultado " + m)
            break;
            default :
            document.write("Não foi possivel fazer está operação")
        }