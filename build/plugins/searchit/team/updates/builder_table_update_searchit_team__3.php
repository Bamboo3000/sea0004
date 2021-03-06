<?php namespace Searchit\Team\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSearchitTeam3 extends Migration
{
    public function up()
    {
        Schema::table('searchit_team_', function($table)
        {
            $table->integer('sort_order');
        });
    }
    
    public function down()
    {
        Schema::table('searchit_team_', function($table)
        {
            $table->dropColumn('sort_order');
        });
    }
}
