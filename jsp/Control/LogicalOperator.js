//연산자 - AND, OR, NOT
function AND(Arg)
{
  if(Array.isArray(Arg))
  {
    Tmp = 1;
    for(i = 0; i<Arg.length; i++)Tmp *= Arg[i];

    return Number(Tmp);
  }
}

function OR(Arg)
{
  if(Array.isArray(Arg))
  {
    Tmp = 0;
    for(i = 0; i<Arg.length; i++)Tmp += Arg[i];

    return Number(Tmp);
  }
}

function NOT(Arg)
{
  return Number(!Arg);
}