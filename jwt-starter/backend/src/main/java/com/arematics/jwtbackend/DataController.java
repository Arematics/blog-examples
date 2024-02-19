package com.arematics.jwtbackend;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class DataController {

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/data")
    public Map<String, String> fetchData(Authentication authentication) {
        Map<String, String> map = new HashMap<>();
        map.put("secret", "this is super secret");
        return map;
    }
}
