<?php

namespace App\Models;

use CodeIgniter\Model;

class BoardModel extends Model
{
    protected $table      = 'board';
    protected $primaryKey = 'bid';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';
    // protected $useSoftDeletes = true;

    protected $allowedFields = [
      'userid',
      'subject',
      'content', 
      'regdate'
    ];
    
}