module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0)
    return 0;
  if(array.length == 1)
    return 1;
  let MaxLength = 1, TempMaxLength = 1;
  for(let i = 0; i < array.length; i++)
  {
    if(array[i] + 1 == array[i+1])
    {
      TempMaxLength++;
      MaxLength = Math.max(MaxLength,TempMaxLength);
    }
    else
      TempMaxLength = 1;
  };
  return MaxLength;
}
