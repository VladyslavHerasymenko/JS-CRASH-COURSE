// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  if (s.length % 2 == 0) {
    index = s.length/2;
    result = (s[index - 1] + s[index]);
  } else {
    index = Math.round(s.length/2);
    result = s[index - 1];
  }
  return result;
}
