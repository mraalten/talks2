package nl.aalten.talks2.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


@Component
public class Talks2Resource {

    private static final Logger logger = LoggerFactory.getLogger(Talks2Resource.class);

    public Talks2Resource() {
        logger.info("Application started. Talks2Resource loaded");
    }

    @GET
    @Path("/zoekenRekeningen")
    @Produces("application/json")
    public void findRekeningen(@QueryParam("rekeningNummer") String rekeningNummer) {
        System.out.println("called");
    }


}
