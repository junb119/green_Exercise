<?php
if($alert = session('alert')) {
  ?>
  <div class="alert alert-warning" role="alert">
      <?= $alert;?>
  </div>
  <?php
  
}

?>

<h3>로그인</h3>
<form action="<?= site_url('/loginok'); ?>" method="POST">
    <div class="mb-3">
      <label for="userid" class="form-label">아이디</label>
      <input type="text" class="form-control" id="userid" name="userid" placeholder="아이디 입력" required>
    </div>
    <div class="mb-3">
      <label for="passwd" class="form-label">비번</label>
      <input type="password" class="form-control" id="passwd" name="passwd" placeholder="비밀번호 입력" required></input>
    </div>
    <button class="btn btn-primary">로그인</button>
    

</form>