<h3>글쓰기</h3>
<form action="<?= site_url('/writeSave'); ?><?php echo isset($view->bid) ? '/?bid='.$view->bid : '';?>" method="POST" enctype="multipart/form-data">
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" class="form-control" id="title" name="subject" placeholder="제목" value="<?php echo isset($view->subject) ? $view->subject : '';?>">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea class="form-control" id="content" name="content" rows="3"><?php echo isset($view->content) ? $view->content : '';?></textarea>
    </div>
    <div class="mb-3">
      <label for="file" class="form-label">첨부파일</label>
      <input type="file" class="form-control" id="file" name="upfile[]" multiple>
    </div>
    <button class="btn btn-primary">
      <?=isset($view->bid) ? '수정' : '등록';?>
    </button>
</form>