<?php namespace Searchit\Breadcrumbs\Components;

use Cms\Classes\ComponentBase;
use Searchit\Jobs\Models\Job;
use Searchit\Jobs\Models\Category;
use Request;
use URL;

class Breadcrumbs extends ComponentBase
{

    public function componentDetails()
    {
        return [
            'name'        => 'Breadcrumbs Component',
            'description' => 'No description provided yet...'
        ];
    }

    private $segments = [];
    private $catParent = 0;
    private $catFirst = null;
    private $catSecond = null;
    private $jobName;

    private function recursiveSegments($number)
    {
        if($number > 2) {
            $finalPath = $this->recursiveSegments($number-1) . '/' . Request::segment($number);
        } else {
            $finalPath = Request::segment($number);
        }
        return $finalPath;
    }

    private function makeBreadcrumbs() 
    {
        $path = URL::to('/') . '/' . Request::segment(1);

        if($this->property('categorySlug')) {
            $cat = Category::where('category_slug', $this->property('categorySlug'))->first();
            if($cat->parent != 0){
                $this->catParent = $cat->parent;
                $this->catSecond = Category::where('category_slug', $this->property('categorySlug'))->first();
                $this->catFirst = Category::where('id', $this->catSecond->parent)->first();
            } else {
                $this->catFirst = Category::where('category_slug', $this->property('categorySlug'))->first();
            }
            
        }

        if($this->property('jobSlug')) {
            $slug = $this->property('jobSlug');
            // First level category object
            $this->catFirst = Category::whereHas('jobs', function($query) use ($slug) {
                $query->where('slug', $slug);
            })->where('parent', 0)->first();
            // Second level category object
            $this->catSecond = Category::whereHas('jobs', function($query) use ($slug) {
                $query->where('slug', $slug);
            })->where('parent', $this->catFirst->id)->first();
            // Job title
            $this->jobName = Job::where('slug', $slug)->first()->title;
        }

        for($i = 2; $i <= count(Request::segments()); $i++) {
            $finalPath = $this->recursiveSegments($i);
            if($this->property('jobSlug')) {
                if(Request::segment($i) == 'job') {
                    $this->segments[] = [
                        'name' => 'Jobs',
                        'path' => $path . '/jobs'
                    ];
                    $this->segments[] = [
                        'name' => $this->catFirst->category_name,
                        'path' => $path . '/jobs/' . $this->catFirst->category_slug
                    ];
                    if($this->catSecond !== null) {
                        $this->segments[] = [
                            'name' => $this->catSecond->category_name,
                            'path' => $path . '/jobs/' . $this->catSecond->category_slug
                        ];
                    }
                    $this->segments[] = [
                        'name' => $this->jobName
                    ];
                    break;
                } elseif(Request::segment($i) == 'vacature') {
                    $this->segments[] = [
                        'name' => 'Vacatures',
                        'path' => $path . '/vacatures'
                    ];
                    $this->segments[] = [
                        'name' => $this->catFirst->category_name,
                        'path' => $path . '/vacatures/' . $this->catFirst->category_slug
                    ];
                    if($this->catSecond !== null) {
                        $this->segments[] = [
                            'name' => $this->catSecond->category_name,
                            'path' => $path . '/vacatures/' . $this->catSecond->category_slug
                        ];
                    }
                    $this->segments[] = [
                        'name' => $this->jobName
                    ];
                    break;
                }
            } elseif($this->property('categorySlug')) {
                if(Request::segment($i) == 'jobs') {
                    $this->segments[] = [
                        'name' => 'Jobs',
                        'path' => $path . '/jobs'
                    ];
                    if($this->catParent != 0) {
                        $this->segments[] = [
                            'name' => $this->catFirst->category_name,
                            'path' => $path . '/jobs/' . $this->catFirst->category_slug
                        ];
                        $this->segments[] = [
                            'name' => $this->catSecond->category_name
                        ];
                    } else {
                        $this->segments[] = [
                            'name' => $this->catFirst->category_name
                        ];
                    }
                    break;
                } elseif(Request::segment($i) == 'vacatures') {
                    $this->segments[] = [
                        'name' => 'Vacatures',
                        'path' => $path . '/vacatures'
                    ];
                    if($this->catParent != 0) {
                        $this->segments[] = [
                            'name' => $this->catFirst->category_name,
                            'path' => $path . '/vacatures/' . $this->catFirst->category_slug
                        ];
                        $this->segments[] = [
                            'name' => $this->catSecond->category_name
                        ];
                    } else {
                        $this->segments[] = [
                            'name' => $this->catFirst->category_name
                        ];
                    }
                    break;
                }
            } elseif(Request::segment($i) == 'jobs' && $this->catParent != 0) {
                $cat = Category::where('id', $this->catParent)->first();
                $catName = $cat->category_name;
                $catSlug = $cat->category_slug;
                $this->segments[] = [
                    'name' => 'Jobs',
                    'path' => $path . '/jobs'
                ];
                $this->segments[] = [
                    'name' => $catName,
                    'path' => $path . '/jobs/' . $catSlug
                ];
            } elseif(Request::segment($i) == 'vacatures' && $this->catParent != 0) {
                $cat = Category::where('id', $this->catParent)->first();
                $catName = $cat->category_name;
                $catSlug = $cat->category_slug;
                $this->segments[] = [
                    'name' => 'Vacatures',
                    'path' => $path . '/vacatures'
                ];
                $this->segments[] = [
                    'name' => $catName,
                    'path' => $path . '/vacatures/' . $catSlug
                ];
            } else {
                $this->segments[] = [
                    'name' => title_case(str_replace("-", " ", Request::segment($i))),
                    'path' => $path . '/' . $finalPath
                ];
            }
        }

        $this->page['segments'] = $this->segments;
        $this->page['baseUrl'] = $path;
    } 

    public function onRun() 
    {
        $this->makeBreadcrumbs();
    }

}