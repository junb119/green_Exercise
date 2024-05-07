<?php

namespace App\Controllers;
use App\Models\BoardModel;
use CodeIgniter\I18n\Time; // Time 클래스 로드

class Board extends BaseController
{
    public function list(): string
    {
        // return view('board_list');
        // $db = db_connect();
        // $sql = "SELECT * FROM board ORDER BY bid";
        // $rs = $db -> query($sql);
        // $data['list'] = $rs->getResult();

        $boardModel = new BoardModel();
        $data['list'] = $boardModel->orderby('bid','desc')->findAll();
        return render('board_list',$data);
    }
    public function write()
    {
        if (!isset($_SESSION['userid'])) {
            // echo <script></script>
            return redirect()->to('/login')->with('alert','로그인 해주세요.');
        }
        // return view('board_write');
        return render('board_write');
    }
    public function view($bid = null)
    {
        // $db = db_connect();
        // $sql = "SELECT * FROM board WHERE bid";
        // $rs = $db -> query($sql);
        // $data['view'] = $rs->getRow(); //배열이 아닌 값. == $rs->fetch_object();

        $boardModel = new BoardModel();
        $data['view'] = $boardModel->where('bid',$bid)->first();
        return render('board_view',$data);
    }

    public function save() 
    {
        if (!isset($_SESSION['userid'])) {
            // echo <script></script>
            return redirect()->to('/login')->with('alert','로그인 해주세요.');
        }
        // $db = db_connect();
        // $subject = $this->request->getVar('subject');
        // $content = $this->request->getVar('content');
        
        // $mytime = new Time('now');
        // $mytime->modify('+9 hours');
        // $formattedTime = $mytime->toDateTimeString();
        
        // $sql = "INSERT INTO board (userid, subject, content, regdate) VALUES('test', ?,?,?')";
        // $rs = $db -> query($sql,[$subject, $content,$formattedTime]);

        $boardModel = new BoardModel();
        $data = [
            'userid' => $_SESSION['userid'],
            'username' => $this->request->getVar('username'),
            'subject' => $this->request->getVar('subject'),
            'content' => $this->request->getVar('content')
        ];
        $mytime = new Time('now' , 'Asia/Seoul');
        $mytime->modify('+9 hours');
        $data['regdate'] = $mytime->toDateTimeString();
        $boardModel -> insert($data);
        return $this->response->redirect(site_url('/board'));


    }
}
