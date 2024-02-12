<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php 배열</title>
</head>
<body>
  <h1>배열</h1>
  <pre>
    $array = array();
    $array[0] = 'soju'
    echo $array[0]
  </pre>

  <?php
  $langs = array();  // 빈 배열 새엇ㅇ
  $langs[0] = 'html';
  $langs[1] = 'css';
  $langs[2] = 'javascript';
  var_dump($langs[2]);
  echo $langs[0];
  echo $langs[1];
  echo $langs[2];
  ?>
  <pre>
  $배열명 = array(값,값,값)
  
  isset(대상) : 대상의 값이 있는지 없는지 확인해주는 함수 (treu,false)
  배열의 개수 : count(배열명)
  </pre>
  <?php
  $backs = array('php', 'asp', 'jsp');
  echo count($backs);
  if (isset($backs[3])) {
    echo $backs[3];
  } else {
    echo '$backs라는 배열에는 3번째 값이 없습니다.';
  }
  ?>
  <hr>
  <pre>
  
  </pre>
  <ul>
    <!-- <li>html</li>
    <li>css</li>
    <li>javascript</li> -->
    <?php
      for ($i=0; $i < count($backs); $i++) {
        echo "<li>$backs[$i]</li>";
      }
      echo '<br>';
      for ($i=0; $i < count($backs); $i++) {
        echo '<li>'.$backs[$i].'</li>';
      }
    ?>
  </ul>
  <hr>
  <h2>foreeach</h2>
  <pre>
    foreach(배열명, 각 원소를 대변할 변수명) {
      반복할 일
    }
  </pre>
  <?php
    foreach($langs as $lang) {
      echo  "<li>$lang</li>";
    }
    echo '<br>';
    foreach($langs as $lang) {
      echo  '<li>'.$lang.'</li>';
    }
  ?>
  <h2>연관 배열(associative array)</h2>
  <pre>
    배열명 = array()
    배열명['키'] = 값;
    배열명['키'] = 값;
    배열명['키'] = 값;
  </pre>
  <?php 
  $fronts = array('html'=> 1, 'css'=>2, 'javascript'=> 3);

  foreach($fronts as $key => $value) {
    echo "<li>$key=>$value</li>";
  }
  echo '<br>';
  foreach($fronts as $key => $value) {
    echo('<li>'.$key.'=>'.$value.'</li>');
  }
  ?>

  <pre>
  nested arrays with list()
  </pre>

  <?php 
  $test = array([1,2,'#'], [3,4,'!'], [5,6,'@']);

  foreach($test as list($a,$b,$c)) {
    echo "A : $a <br> B : $b <br> C : $c <br>" ;
  }
  
  ?>

  <hr>
  <h2>값 출력</h2>
  <?php 
    var_dump($langs); // 원형
    print_r($langs); // 인간친화적
    print_r($fronts); 
  ?>

  <pre>
    <hr>
    <?php
      var_dump($langs); // 원형
      print_r($langs); // 인간친화적
      print_r($fronts); 
    ?>
  </pre>

</body>
</html>