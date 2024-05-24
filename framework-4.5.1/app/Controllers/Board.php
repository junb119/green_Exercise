<?php

namespace App\Controllers;
use App\Models\BoardModel;
use App\Models\FileModel;
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
        // $data['list'] = $boardModel->orderby('bid','desc')->findAll();
        $data['list'] = $boardModel->select('b.*, m.username')
                            -> from('board b')
                            -> join('members m','m.userid = b.userid', 'left')
                            -> orderby('b.bid','desc')
                            -> groupby('b.bid')
                            -> findAll();
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
        // $data['view'] = $boardModel->select('board.*', 'file_table.filename',false) 
        //                     -> join('file_table','file_table.bid = board.bid', 'left') 
        //                     -> where('file_table.type', 'board')
        //                     -> where('board.bid', $bid)
        //                     -> first();
        
        $data['view'] = $boardModel->select('b.*, f.filename')
                            -> from('board b')
                            -> join('file_table f','f.bid = b.bid', 'left') 
                            -> where('b.bid', $bid)
                            -> first();

        // $data['view'] = $boardModel->where('bid',$bid)->first();
        
        
        // $data['file_view'] = $fileModel->where('type','board')-> where('bid',$bid) ->first();
        
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
        $fileModel = new FileModel();
        

        $data = [
            'userid' => $_SESSION['userid'],
            'subject' => $this->request->getVar('subject'),
            'content' => $this->request->getVar('content')
        ];        
        $mytime = new Time('now' , 'Asia/Seoul');
        $mytime->modify('+9 hours');
        $data['regdate'] = $mytime->toDateTimeString();
        
        $db = db_connect(); // insertId 쿼리빌더에서 사용불가하기 때문에 db_connect 사용
        
        $bid =  $this->request->getVar('bid');
        // $file =  $this->request->getFile('upfile'); // 파일이 하나일때 가져오기
        $files =  $this->request->getFileMultiple('upfile'); // 파일이 여러개일때 가져오기

        foreach($files as $file) {
            if($file->getName()) {
                // $filename = $file->getName();
                $newname = $file->getRandomName();
                $filepath[] = $file->store('board', $newname);
            }
        }


        if ($bid) { // 수정
            $board = $boardModel->find($bid);
            if ($board && session('userid') == $board->userid) {
                $boardModel -> update($bid,$data);
                return $this->response->redirect(site_url('/boardView/'.$bid));
            } else {
                return redirect()->to('/board')->with('alert', '본인이 작성한 글만 수정할 수 있습니다.');    
            }
            

        } else { // 새글 입력
            $boardModel -> insert($data);
            $insertId = $db->insertID(); // 글생성후 id를 할당
            foreach ($filepath as $fp) {
                $filedata= [
                    'bid'=>$insertId,
                    'userid' => $_SESSION['userid'],
                    'filename'=>$fp,
                    'type' =>'board'
                ];
                $fileModel -> insert($filedata);
            }
            return $this->response->redirect(site_url('/board'));
        }
    }
    public function modify($bid = null)
    {
        $boardModel = new BoardModel();
        $board = $boardModel->find($bid); // = $boardModel->where('bid',$bid)->first();
        $data['view'] = $board; // 조회결과를 변수에 할당
        if($board && session('userid') == $board->userid) { // 해당 글을 쓴 아이디가 로그인한 유저인지 확인
            return render('board_write',$data);
        } else {
            return redirect()->to('/board')->with('alert', '본인이 작성한 글만 수정할 수 있습니다.');
        }
        
    }
    public function delete($bid = null)
    {
        $boardModel = new BoardModel();
        

        $board = $boardModel->find($bid); // = $boardModel->where('bid',$bid)->first();
        if ($board && session('userid') == $board->userid) {
            $boardModel -> delete($bid);
            $fileModel = new FileModel();
            $files = $fileModel->where('type','board')->where('bid',$bid)->findAll();
            // 파일 삭제 : unlink(경로,파일명); /uploads/board/103231235.jpg;

            foreach( $files as $file) {
                unlink('uploads/'.$file->filename);
            }
            $fileModel -> where('type','board')->where('bid',$bid)->delete(); // file_table 데이터 삭제

            return redirect()->to('/board')->with('alert', '삭제되었습니다.');    
               
        } else {
            return redirect()->to('/board')->with('alert', '본인이 작성한 글만 삭제할 수 있습니다.');    
        }
        
    }
}
