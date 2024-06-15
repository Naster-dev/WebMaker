//공통함수 모음
// ID 도출
function CommTargetID(Prefix, Name)
{
	Target = Prefix + Name;
	return document.getElementById(Target);
}
// Bit 상태변경
function CommStatusChange(Target, Str, Color)
{
	Target.innerHTML = Str;
	Target.style.backgroundColor = Color;
}
// Index 번호추출
function CommGetIndex(OriginStr, CapStr)
{
	Len = CapStr.length;
	Strindex = OriginStr.indexOf(CapStr);
	
	return Number(OriginStr.substring(Len + Strindex));
}
// 상한 및 하한치 처리
function CommLimitValue(Value, Min, Max)
{
	if(Value > Max) Value = Max;
	else if(Value < Min) Value = Min;

	return Value;
}