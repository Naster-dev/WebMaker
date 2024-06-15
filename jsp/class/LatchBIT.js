class LatchBit
{
  constructor()
  {
    this.Set = 0;
    this.Reset = 0;
    this.Output = 0;
  }

  get a() { return Number(this.Output); };
  get b() { return Number(!this.Output); };
  set st(Trig)
  {
    if(Trig != 0) this.Set = 1;
    else this.Set = 0;
    this.JudgeOutput();
  };
  set rs(Trig)
  {
    if(Trig != 0) this.Reset = 1;
    else this.Reset = 0;
    this.JudgeOutput();
  };

  JudgeOutput()
  {
    if(this.Set == 1 && this.Reset == 0) this.Output = 1;
    else if(this.Set == 0 && this.Reset == 1) this.Output = 0;
  };
};
