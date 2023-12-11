<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Product extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type'           => 'INT',
                'constraint'     => 6,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'category_id' => [
                'type'           => 'INT',
                'constraint'     => 5,
                'unsigned'       => true,
            ],
            'product' => [
                'type'       => 'VARCHAR',
                'constraint' => '150',
            ],
            'price' => [
                'type' => 'INT',
                'constraint' => 5,
            ],
            'sku' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],
            'model' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],
            'photo' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ]
        ]);
        $this->forge->addKey('id', true);
       
        $this->forge->createTable('products');
    }

    public function down()
    {
        $this->forge->createTable('products');
    }
}
