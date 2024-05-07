<?php

namespace App\Controllers;
use App\Models\UserModel;
use CodeIgniter\I18n\Time; // Time 클래스 로드

class Member extends BaseController
{
    public function login() {
      return render('login');
    }
    public function logout() {
      $this -> session->destroy();
      return redirect()->to('/board');
    }
    public function loginok() {
      $userid = $this->request->getVar('userid');
      $passwd = hash('sha512', $this->request->getVar('passwd'));
      $db = db_connect();
      $sql = "SELECT * FROM members WHERE userid = ? and passwd= ?";
      $rs = $db -> query($sql, [$userid, $passwd]);
      

      if ($rs->getNumRows() > 0) {
        $user = $rs->getRow();
        $ses_Data = [
          'userid' => $user->userid,
          'username' => $user->username,
          'email' => $user->email
      ];
      $this->session->set($ses_Data);
      return redirect()->to('/board');
    } else {
      return redirect()->to('/login')->with('alert','아이디와 비밀번호를 다시 확인해주세요.');
    }
    }
}
