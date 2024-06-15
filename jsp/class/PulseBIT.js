class PulseBit
{
  constructor()
  {
    this.currValue = 0;
    this.prevValue = 0;
    this.PulseUp = 0;
    this.PulseDown = 0;
  }

  // a접점일 경우의 상태값
  get a() { return this.currValue; };
  get Ua() { return this.PulseUp; };
  get Da() { return this.PulseDown; };
  // b접점일 경우의 상태값
  get b() { return Number(!this.currValue); };
  get Ub() { return Number(!this.PulseUp); };
  get Db() { return Number(!this.PulseDown); };
  // 코일(출력)로 쓴다면
  set o(Input)
  {
    //이전 값 백업
    if(this.currValue != Input)
    {
      var _Tmp = this.currValue;
      this.currValue = Input;
      this.prevValue = _Tmp;

      if(this.currValue == 1) this.PulseUp = 1;
      if(this.currValue == 0) this.PulseDown = 1;
    }
    else
    {
      this.prevValue = this.currValue;
      this.PulseUp = this.PulseDown = 0;
    }
  };
};
