class TimerBit
{
  constructor(_SetTime)
  {
    this.Input = 0;
    this.Output = 0;
    this.CurTime = 0;
    this.SetTime = _SetTime;
  }
 
  //공용
  get Stop() { return !this.Input; };
  get Busy() { return this.Input; };
  get a() { return this.Output; };
  get b() { return !this.Output; };

  SetTIMER(_SetTime, Trigger)
  {
    //비지신호 체크용
    this.Input = Trigger;

    //타이머 설정
    if(this.SetTime != _SetTime) this.SetTime = _SetTime;

    //트리거 조건
    if(Trigger == true && this.CurTime < this.SetTime) this.CurTime += 1;
    else if(Trigger == false) this.CurTime  = 0;

    //조건 성립으로 인한 릴레이 활성
    if(Trigger == true && this.CurTime >= this.SetTime) this.Output = true;
    else this.Output = false;
  }
};
