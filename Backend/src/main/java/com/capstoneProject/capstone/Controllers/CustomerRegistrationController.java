package com.capstoneProject.capstone.Controllers;

import com.capstoneProject.capstone.registration.RegistrationRequest;
import com.capstoneProject.capstone.registration.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "fundingforce/registration")
@AllArgsConstructor
public class CustomerRegistrationController {

    private final RegistrationService registrationService;

    @PostMapping
    public String registered(@RequestBody RegistrationRequest request){

        return registrationService.register(request);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token){
        return registrationService.confirmToken(token);
    }
}
