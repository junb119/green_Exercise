<h3>글보기</h3>
<?php
  // echo '<pre>';
  // print_r($view);
  // print_r($file_view);
  // echo '</pre>';
?>
<article>
  <h2><?=$view->subject;?></h2>
  <h3><?=$view->regdate;?></h3>
  <hr>
  <div><?=$view->content;?></div>
  <div>
    <?php
      if(isset($file_view->filename)) {
        ?>
        <img src="<?= base_url('/uploads/'.$file_view->filename); ?>" alt="">
        <?php
      }
    ?>
  </div>
  <hr>
  <p class="text-end">
    <?php
      if(isset($_SESSION['userid'])) {
    ?>
    <a href="/modify/<?=$view->bid?>">수정</a>
    <a href="/delete/<?=$view->bid?>">삭제</a>
    <?php
      } 
    ?>
    <a href="/board">목록</a>
  </p>
</article>