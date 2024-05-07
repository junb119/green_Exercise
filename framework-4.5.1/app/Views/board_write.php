<h3>글쓰기</h3>
<form action="<?= site_url('/writeSave'); ?>" method="POST">
    <input type="hidden" name="username" value="<?=$_SESSION['username']?>">
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" class="form-control" id="title" name="subject" placeholder="제목">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea class="form-control" id="content" name="content" rows="3"></textarea>
    </div>
    <button class="btn btn-primary">등록</button>
</form>