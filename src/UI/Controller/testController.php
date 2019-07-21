<?php

namespace App\UI\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class testController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return new Response("Index");
    }

    /**
     * @Route("/test", name="test")
     */
    public function test()
    {
        return new Response("Test ");
    }
}
