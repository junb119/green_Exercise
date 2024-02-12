<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>조건문</title>
</head>
<body>
  <?php
  // php 조건문은 js 조건문과 같다.

    $result = 1 < 3;
    $num1= 1;
    $num2= 3;

    if (!($num1 < $num2)) {
      echo $num1.'은 ' . $num2.'보다 작다';
    } else {
      echo $num1.'은' . " " . $num2.'보다 크다';
    }
  ?>

  <h2>논리 연산자</h2>
  <pre>
    && = and
    || = or
    xor = 논리식이 서로 다르면 참을 반환함. (XOR 연산)
  <pre>
  <?php 
    if (1 > 3 xor 2 < 5) {
      echo '조건은 참이다';
    } else {
      echo '조건은 거짓이다';
    }
  ?>
</body>
</html>