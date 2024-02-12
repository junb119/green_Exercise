<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php basic</title>
</head>
<body>
  <h1>This is the title</h1>
  <?php 
    # echo 'hello world';
  ?>
  <h2>변수</h2>
  <?php 
  echo 'hello world';
  // 변수 선언
    $name = '홍길동';
  // 변수 + 문자
    echo $name . '님 반갑습니다';
    echo "$name 님 반갑습니다";
  ?>
  <hr>
  <?php
    $name = "홍길동";
  
    echo "$name 님 ㅎㅇ";
    echo `$name 님 ㅎㅇ`; // 빽틱 불가
  ?>
</body>
</html>