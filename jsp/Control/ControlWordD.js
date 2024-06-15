//Word 중 비트 건드리기
function SetBIT(OrigWord, Idx, Trigger)
{
  TmpWord = OrigWord;
  TarBit = 1 << Idx;

  if(!Trigger) TmpWord &= ~TarBit;
  else TmpWord |= TarBit;

  return TmpWord;
}

//Word 중 비트 얻기
function GetBIT(OrigWord, Idx)
{
  TmpWord = OrigWord;
  TmpWord = TmpWord >> Idx;

  TmpWord &= 1;

  return TmpWord;
}

//Word의 비교연산의 비트
function GetCOMP(Op, FirstWord, SecondWord)
{
  Res = 0;
  if(Op == "=") Res = (FirstWord == SecondWord);
  else if(Op == "<>") Res = (FirstWord != SecondWord);
  else if(Op == ">") Res = (FirstWord > SecondWord);
  else if(Op == "<") Res = (FirstWord < SecondWord);
  else if(Op == ">=") Res = (FirstWord >= SecondWord);
  else if(Op == "<=") Res = (FirstWord <= SecondWord);
  else Res = 0;

  return Res;
}

//Word의 이동
function SetMOV(Dev, OrigIdx, TargIdx, Trigger)
{
  if(Trigger)
  {
    if(Dev == "" || Dev == null)
    {
      D[TargIdx] = OrigIdx;
    }
    else if(Dev == 'D')
    {
      D[TargIdx] = D[OrigIdx];
    }
  }
}
function SetBMOV(Dev, OrigIdx, TargIdx, Count, Trigger)
{
  if(Trigger)
  {
        if(Dev == "" || Dev == null)
    {
      for (i = 0; i < Count; i++)
        D[TargIdx + i] = OrigIdx;
    }
    else if(Dev == 'D')
    {
      for (i = 0; i < Count; i++)
        D[TargIdx + i] = D[OrigIdx + i];
    }
  }
}