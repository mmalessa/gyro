<?php

namespace App\UI\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/api", name="api_") */
class apiController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return new Response("Index API");
    }

    /**
     * @Route("/test", name="test")
     */
    public function test()
    {
        return new Response("Test API");
    }
}
