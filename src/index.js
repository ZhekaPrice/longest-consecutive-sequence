module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0)
    return 0;
  if(array.length == 1)
    return 1;

  let CurrentIndex = 0;
  let MaxLength = 0, TempMaxLength = 0;
  for(let i = 0; i < array.length; i++)
  {
    TempMaxLength++;
    CurrentIndex = array.indexOf(array[i] + 1);
    while(CurrentIndex != -1)
    {
        TempMaxLength++;
        if(TempMaxLength > MaxLength)
            MaxLength = TempMaxLength;
        CurrentIndex = array.indexOf(array[CurrentIndex] + 1);
    };
    TempMaxLength = 0;
  };
  return MaxLength;
}
