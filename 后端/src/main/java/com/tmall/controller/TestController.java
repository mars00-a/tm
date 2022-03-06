package com.tmall.controller;

import com.tmall.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class TestController {

    @Autowired
    TestService testService;

    @GetMapping("/test1")
    public String indexPage(){
        Long start = System.currentTimeMillis();
        System.out.println(testService.test());
        System.out.println(testService.test1());
        Long end = System.currentTimeMillis();
        System.out.println("消耗时间为：" + (end - start) + "ms");
        return "test";
    }
}
