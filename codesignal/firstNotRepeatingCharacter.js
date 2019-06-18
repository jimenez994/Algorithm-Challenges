function firstNotRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    var r = str.charAt(i);
    if (str.indexOf(r) == i && str.indexOf(r, i + 1) == -1) {
      return r;
    }
  }
  return "_";
  
}
firstNotRepeatingCharacter("asdasfd")
