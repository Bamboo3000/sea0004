<?php namespace Searchit\Testimonials\Components;

use Cms\Classes\ComponentBase;
use Searchit\Testimonials\Models\Testimonials;
use Lang;

class Listing extends ComponentBase
{

    public function componentDetails()
    {
        return [
            'name'        => 'Listing Testimonials Component',
            'description' => 'No description provided yet...'
        ];
    }

    protected $testimonials;

    public function onRun() 
    {
        $this->testimonials = new Testimonials;
        
        if(Lang::getLocale() == 'en') {
            $this->testimonials = $this->testimonials->where('lang', 'en');
        } else {
            $this->testimonials = $this->testimonials->where('lang', 'nl');
        }
        
        $this->page['testimonials'] = $this->testimonials->get();
    }

}