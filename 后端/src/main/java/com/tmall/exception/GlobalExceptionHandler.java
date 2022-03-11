/**
 * 模仿天猫整站 springboot 教程 为 how2j.cn 版权所有
 * 本教程仅用于学习使用，切勿用于非法用途，由此引起一切后果与本站无关
 * 供购买者学习，请勿私自传播，否则自行承担相关法律责任
 */

package com.tmall.exception;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@ControllerAdvice//可以用于捕获全局异常，预设参数值，数据预处理
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(value = MyException.class)
    public ResultBody myErrorHandler(HttpServletRequest req, MyException e) throws Exception {
        logger.error("业务异常：", e.getErrorMsg());
        return ResultBody.error(e.getErrorMsg());
    }

    @ExceptionHandler(value = NullPointerException.class)
    public ResultBody exceptionHandler(HttpServletRequest req, NullPointerException e) {
        logger.error("发生空指针异常！原因是:",e);
        return ResultBody.error(CommonErrorEnum.BODY_NOT_MATCH);
    }


    @ExceptionHandler(value = Exception.class)
    public ResultBody defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        logger.error("未知异常：", e);
        return ResultBody.error(CommonErrorEnum.INTERNAL_SERVER_ERROR);
    }

}

