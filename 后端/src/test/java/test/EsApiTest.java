package test;

import com.tmall.MainApplication;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.client.indices.GetIndexRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

/**
 * 此处测试采用的是elasticsearch较新的API操作es
 */
@SpringBootTest(classes = MainApplication.class)
public class EsApiTest {


    @Autowired
    RestHighLevelClient restHighLevelClient;

    @Test
    public void GetIndex() throws IOException {
        GetIndexRequest getIndexRequest = new GetIndexRequest("niechen");
        boolean exists = restHighLevelClient.indices().exists(getIndexRequest, RequestOptions.DEFAULT);
        System.out.println(exists);
    }
}
