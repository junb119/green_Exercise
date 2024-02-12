<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php function</title>
</head>
<body>
  <h1>function</h1>

  <?php 
    $result;
    function sum($a , $b) {
      $reulst = $a + $b;
      return $reulst;
    };

    echo sum(21314432,12312311);
    // echo $reulst; // 에러
  ?>
  <br>
  <h2>지역변수 전역변수</h2>
  
</body>
</html>