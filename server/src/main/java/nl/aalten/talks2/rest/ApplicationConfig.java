package nl.aalten.talks2.rest;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/talks2")
public class ApplicationConfig extends Application {

    public ApplicationConfig() {
    }

    public Set<Class<?>> getClasses() {
        return new HashSet(Arrays.asList(new Class[]{Talks2Resource.class}));
    }

}
