function DisplayStatusX(num)
{
  Stat = CommTargetID("x", num);
  if(X[num] != 0)
  {
	CommStatusChange(Stat, "On", "lime");
  }
  else
  {
	CommStatusChange(Stat, "Off", "white");
  }
};

function DisplayStatusY(num)
{
  Stat = CommTargetID("y", num);
  if(Y[num] != 0)
  {
	CommStatusChange(Stat, "On", "orange");
  }
  else
  {
	CommStatusChange(Stat, "Off", "white");
  }
};