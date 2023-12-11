<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Category extends Migration
{
    public function up()
    {
        $this->forge->addfield([
            'id' => array(
                'type'           => 'INT',
                'constraint'     => 5,
                'unsigned'       => true,
                'auto_increment' => true,
            ),
            'category' => array(
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ),
        ]);
        $this->forge->addkey('id', true);
        $this->forge->createtable('category');
    }

    public function down()
    {
        $this->forge->createtable('category');

    }
}
