package com.tmall.controller;

import com.tmall.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @Autowired
    TestService testService;

    @GetMapping("/home")
    public String indexPage(){

        return "home";
    }
}
