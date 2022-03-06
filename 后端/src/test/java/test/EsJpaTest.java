package test;

import com.tmall.MainApplication;
import com.tmall.bean.Documents;
import com.tmall.es.EsDao;
import com.tmall.es.EsTestDao;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;

@SpringBootTest(classes = MainApplication.class)
public class EsJpaTest {

    /**
     * 操作的文档一定要
     */
    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

    @Autowired
    private EsTestDao esDao;//操作文档的对象



    @Test
    public void findDocument() {
        Documents documents = esDao.findById(1L).get();//通过id查询
        System.out.println(documents);

        Iterable<Documents> all = esDao.findAll();//查询全部
        System.out.println(all);
    }
}
