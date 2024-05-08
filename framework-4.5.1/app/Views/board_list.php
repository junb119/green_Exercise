<?php
if($alert = session('alert')) {
  ?>
  <div class="alert alert-warning" role="alert">
      <?= $alert;?>
  </div>
  <?php
  
}

?>

<table class="table">
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">글쓴이</th>
      <th scope="col">제목</th>
      <th scope="col">등록일</th>
    </tr>
  </thead>
  <tbody>
    <?php
        foreach($list as $ls) {

        
    ?>
    <tr>
      <td><?=$ls->bid;?></th>
      <td><?=$ls->username;?></td>
      <td><a href="/boardView/<?=$ls->bid?>"><?=$ls->subject;?></a></td>
      <td><?=$ls->regdate;?></td>
    </tr>
    <?php
    }
    ?>
  </tbody>
</table>