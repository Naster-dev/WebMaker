// D데이터 쓰기
function WriteAddressD(id)
{
	idx = CommGetIndex(id, "Dz");
	CurrVal = D[idx];
	Res="";

	let Inp = prompt("D입력", CurrVal);
	if(Inp == null)
	{
		return;
	}
	Res = Inp;
	Res = Number(Res);

	if(isNaN(Res))
	{
		alert("올바르지 못한 값");
		return;
	}

	Res = CommLimitValue(Res, 0, 65535);

	D[idx] = Res;
};
// D데이터 읽기
function UpdateAddressD()
{
	let TargID;
	let idx;
	let IDname;
	
	for(i = 0; i < 100; i++)
	{
		idx = i;
		if(i < 10)
			IDname = "Dz0" + i;
		else
			IDname = "Dz" + i;

		TargID = CommTargetID("", IDname);
		TargID.innerHTML = D[i];
	}
};