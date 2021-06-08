<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTorrentsCustomFieldValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('torrents_custom_field_values', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('torrent_id')->default(0)->index('idx_torrent_id');
            $table->integer('custom_field_id')->default(0)->index('idx_field_id');
            $table->mediumText('custom_field_value')->nullable()->index('idx_field_value');
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('torrents_custom_field_values');
    }
}