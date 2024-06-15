//컨버터 UI 함수모음
// *. Word입력
function InputWORD()
{
	WordID = CommTargetID("w", "0");
	let Res = "";
	let Inp = prompt("D입력", "0");
	if(Inp == null)
	{
		alert("취소됨");
		return;
	}
	Res += Inp;
	Res = Number(Res);

	if(isNaN(Res))
	{
		alert("올바르지 못한 값");
		return;
	}

	Res = CommLimitValue(Res, 0, 65535);

	WordID.innerHTML = Res;

	UpdateBIT(Res);
};
//Bit변환
function UpdateBIT(after)
{
	for (i = 0; i < 16; i++)
	{
		bit[i] = (after >> i) & 1;
		Stat = CommTargetID("b", i);
		if(bit[i] == 0)
		{
			CommStatusChange(Stat, "Off", "white");
		}
		else
		{
			CommStatusChange(Stat, "On", "lime");
		}	
	}
};
//Bit입력
function InputBIT(idx)
{
	Stat = CommTargetID("b", idx);
	bit[idx] ^= true;
	if(bit[idx] == 0)
		{
			CommStatusChange(Stat, "Off", "white");
		}
		else
		{
			CommStatusChange(Stat, "On", "lime");
		}
		UpdateWORD();
};
//Word변환
function UpdateWORD()
{
	Word = 0;
	for(i = 0; i < 16; i++)
	{
		Word += (bit[i] << i);
	}
	WordID = CommTargetID("w", "0");
	WordID.innerHTML = Word;
};
